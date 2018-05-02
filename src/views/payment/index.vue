<template>
    <div class="payment">
        <div class="title">
            {{$db.payment.title.orderOverview.key}}
        </div>
        <div class="body">
            <div class="head">
                <div>
                    <span class="text">Status : </span>
                    <el-radio-group size="mini" v-model="status">
                        <el-radio-button label="-1" border>{{$i._baseText.all}}</el-radio-button>
                        <el-radio-button label="1" >已逾期</el-radio-button>
                        <el-radio-button label="0" >未逾期</el-radio-button>
                    </el-radio-group>
                </div>
                <div class="spe-div">
                    <div class="View">
                        <span class="text">View : </span>
                        <el-radio-group size="mini"  v-model="viewByStatus" >
                            <el-radio-button label="" border>{{$i._baseText.all}}</el-radio-button>
                            <el-radio-button label="30">{{$i._baseText.logisticOrder}}</el-radio-button>
                            <el-radio-button label="10">{{$i._baseText.purchaseOrder}}</el-radio-button>
                            <el-radio-button label="20">{{$i._baseText.qcOrder}}</el-radio-button>
                        </el-radio-group>
                    </div>
                    <div class="search">
                        <select-search :selectHide="false" class="search"  @inputChange="getList" :searchLoad="searchLoad"></select-search>
                    </div>
                    <div class="Date">
                        <span class="text">Time : </span>
                        <el-date-picker
                                v-model="date"
                                type="daterange"
                                align="right"
                                unlink-panels
                                range-separator="至"
                                start-placeholder="开始日期"
                                end-placeholder="结束日期"
                                value-format="timestamp"
                                :picker-options="dateOptions">
                        </el-date-picker>
                    </div>
                </div>
            </div>
            <br>
            <!-- ref="tab" @action="action"  @page-change="pageChange" -->
            <div class="main">
                <v-table :data="tableDataList"
                :total-row="totalRow"
                :loading="tabLoad"
                :buttons="setButtons"
                @action="action"
                :rowspan="1"
                @filter-value="onFilterValue"
                ></v-table>
                <!-- <el-pagination
                    @size-change="handleSizeChange"
                    :currentPage.sync="params.pn"
                    :page-sizes="pazeSize"
                    :page-size="params.ps"
                    layout="total, sizes, prev, pager, next, jumper"
                    :total="pageTotal"
                /> -->
            </div>
        </div>
    </div>
</template>
<script>

    import selectSearch from '@/components/common/fnCompon/selectSearch';
    import VTable from '@/components/common/table/index'
    export default {
        name:'payment',
        components:{
            selectSearch,
            VTable
        },
        data(){
            return{
                status:-1,
                flag:true,
                time:1523959983,
                pazeSize: [10, 20, 30, 40, 50, 100],
                pageTotal:0,
                searchLoad: false,
                viewByStatus:'',
                date:'',
                tabLoad:false,
                dateOptions:{
                    shortcuts: [{
                        text: '最近一周',
                        onClick(picker) {
                            const end = new Date();
                            const start = new Date();
                            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
                            picker.$emit('pick', [start, end]);
                        }
                    }, {
                        text: '最近一个月',
                        onClick(picker) {
                            const end = new Date();
                            const start = new Date();
                            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
                            picker.$emit('pick', [start, end]);
                        }
                    }, {
                        text: '最近三个月',
                        onClick(picker) {
                            const end = new Date();
                            const start = new Date();
                            start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
                            picker.$emit('pick', [start, end]);
                        }
                    }]
                },
                //底部table数据
                tableDataList:[],
                totalRow: []
            }
        },
        watch: {
            status(){
                this.getList();
            },
            viewByStatus() {
                this.getList();
            },
            date(){
                console.log(this.date)
            }
        },
        methods:{
            onFilterValue(val) {
                console.log(val);
            },
            getList(item){
              console.log()
                this.tabLoad = true;
                if(item){
                    const params ={
                        conditions: {
                            orderEntryEndDt:"",
                            orderEntryStartDt: "",
                            orderNoLike: item.key,
                            orderType: this.viewByStatus,
                            overdue: this.status  //-1所有 0未逾期 1已逾期
                        },
                        pn: 1,  //每页大小
                        ps: 10, //页码
                        // sorts: [
                        //     {
                        //     nativeSql: true,
                        //     orderBy: "id",
                        //     orderType: "desc",
                        //     resultMapId: ""
                        //     }
                        // ]
                    }
                    this.$ajax.post(this.$apis.post_ledgerPage, params)
                    .then(res => {
                        // res.datas = _.map(res.datas,val=>{
                        //     val.waitPayment = val.planPayAmount-val.actualPayAmount;
                        //     val.waitReceipt = val.planReceiveAmount-val.actualReceiveAmount;
                        //     return val;
                        // });
                        this.pageTotal = res.tc;
                        this.tabLoad = false;
                        this.searchLoad = false;
                        this.tableDataList = this.$getDB(this.$db.payment.table, res.datas,item=>{
                            item.waitPayment.value = Number(item.planPayAmount.value)-Number(item.actualPayAmount.value);
                            item.waitReceipt.value = Number(item.planReceiveAmount.value)-Number(item.actualReceiveAmount.value);
                            // this.flag = item.waitPayment.value === 0;
                            this.$set(this.flag,item.waitPayment.value === 0)
                            console.log(this.flag)
                            return item;
                        });

                        this.totalRow = this.$getDB(this.$db.payment.table, res.statisticalDatas, item => {
                            item.waitPayment.value = Number(item.planPayAmount.value)-Number(item.actualPayAmount.value);
                            item.waitReceipt.value = Number(item.planReceiveAmount.value)-Number(item.actualReceiveAmount.value);
                            if(item.currencyCode.value ==='BTC'){
                                item._totalRow.label = 'BTC';
                            }else if(item.currencyCode.value ==='HKD'){
                                item._totalRow.label = 'HKD';
                            }else{
                                item._totalRow.label = 'EUR';
                            }
                            return item;
                        });
                    });
                }else{
                    const params = {
                        conditions: {
                            orderEntryEndDt:"",
                            orderEntryStartDt: "",
                            orderNoLike: '',
                            orderType: this.viewByStatus,
                            overdue: this.status  //-1所有 0未逾期 1已逾期
                        },
                        pn: 1,  //每页大小
                        ps: 10, //页码
                        // sorts: [
                        //     {
                        //     nativeSql: true,
                        //     orderBy: "id",
                        //     orderType: "desc",
                        //     resultMapId: ""
                        //     }
                        // ]
                    }
                    this.$ajax.post(this.$apis.post_ledgerPage, params)
                    .then(res => {
                        this.pageTotal = res.tc;
                        this.tabLoad = false;
                        this.searchLoad = false;
                        this.tableDataList = this.$getDB(this.$db.payment.table, res.datas,item=>{
                            item.waitPayment.value = Number(item.planPayAmount.value)-Number(item.actualPayAmount.value);
                            item.waitReceipt.value = Number(item.planReceiveAmount.value)-Number(item.actualReceiveAmount.value);
                             this.flag=item.waitPayment.value === 0;
                            return item;
                        });

                        this.totalRow = this.$getDB(this.$db.payment.table, res.statisticalDatas, item => {
                            item.waitPayment.value = Number(item.planPayAmount.value)-Number(item.actualPayAmount.value);
                            item.waitReceipt.value = Number(item.planReceiveAmount.value)-Number(item.actualReceiveAmount.value);
                            // if(item.currencyCode.value ==='BTC'){
                            //     item._totalRow.label = 'BTC';
                            // }else if(item.currencyCode.value ==='HKD'){
                            //     item._totalRow.label = 'HKD';
                            // }else{
                            //     item._totalRow.label = 'EUR';
                            // }
                            return item;
                        })
                    });
                }
            },
            action(item, type) {
                console.log(item)
                switch(type) {
                    case 'detail':
                        this.detail(item);
                        break;
                    case 'urging payment':
                        this.urgingPayment(item);
                        break;
                }
            },
            detail(item) {
                //点击进入对应po detail 10、lo detail 30、QC order detail 20页面
                console.log(item)
                if(item.orderType.value == 10){
                    this.$router.push({
                        path: '/',
                        query: {
                            // orderNo: _.findWhere(item, {'key': 'orderNo'}).value
                        }
                    });
                }else if(item.orderType.value == 20){
                    this.$router.push({
                        path: '/',
                        query: {
                            // orderNo: item.orderNo
                        }
                    });
                }else{
                    this.$router.push({
                        path: '/',
                        query: {
                            // orderNo: item.orderNo
                        }
                    });
                }
            },
            urgingPayment(item) {
                console.log(item)
                const count = 0
                // ① 催款，此操作会给对应付款人发一条提示付款的信息，在对方的workbench显示；
                // ② 当待付款金额不为0时，催款按钮可操作；
                // ③ 当待付金额为0时，催款按钮为禁用，不可操作；
                // ④ 催款限制：每天能点三次，超过次数后禁用；每次点击间隔一分钟才能再次点击，其间按钮为禁用
                // if(item.waitPayment.value != 0){
                //
                //
                // }
            },
            setButtons(item){
                if(_.findWhere(item, {'key': 'waitPayment'}).value + '' === '0') return [{label: 'urging payment', type: '1',disabled:true},{label: 'detail', type: '2'}]
                return [{label: 'urging payment', type: '1',disabled:false},{label: 'detail', type: '2'}];
            },
            handleSizeChange(val) {
                this.params.ps = val;
            },

        },
        created(){
           this.viewByStatus = '';
           this.getList();
        },
    }
</script>
<style scoped>
    .title{
        font-weight: bold;
        font-size: 18px;
        height: 32px;
        line-height: 32px;
        color:#666666;
        padding: 10px 0;
    }
    .head>div{
        margin-bottom: 10px;
    }
    .head .text{
        display: inline-block;
        width: 70px;
        font-size: 14px;
        /*font-weight: bold;*/
        color:#999999;
    }
    .spe-div:after{
        content: '';
        display: table;
        clear: both;
    }
    .spe-div .View{
        float: left;
    }
    .spe-div .search{
        float: right;
        margin-left: 10px;
    }
    .spe-div .Date{
        float: right;
    }

</style>
