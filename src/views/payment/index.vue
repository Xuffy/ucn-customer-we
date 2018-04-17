<template>
    <div class="payment">
        <div class="title">
            {{$lang.payment.orderOverview}}
        </div>
        <div class="body">
            <div class="head">
                <div>
                    <span class="text">Status : </span>
                    <el-radio-group size="mini" v-model="radio">
                        <el-radio-button label="All" border></el-radio-button>
                        <el-radio-button label="已逾期" border></el-radio-button>
                        <el-radio-button label="未逾期" border></el-radio-button>
                    </el-radio-group>
                </div>
                <div class="spe-div">
                    <div class="View">
                        <span class="text">View : </span>
                        <el-radio-group size="mini"  v-model="viewByStatus" >
                            <el-radio-button label="0">{{$lang.baseText.all}}</el-radio-button>
                            <el-radio-button label="1">{{$lang.baseText.logisticOrder}}</el-radio-button>
                            <el-radio-button label="2">{{$lang.baseText.purchaseOrder}}</el-radio-button>
                            <el-radio-button label="3">{{$lang.baseText.qcOrder}}</el-radio-button>
                        </el-radio-group>
                    </div>
                    <div class="search">
                        <select-search :selectHide="false" class="search"></select-search>
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
                                :picker-options="dateOptions">
                        </el-date-picker>
                    </div>
                </div>
            </div>
            <br>
            <!-- ref="tab"  @page-change="pageChange" -->
            <div class="main">
                <v-table :data="tableDataList" :buttons="[{label: 'urging payment', type: 'urging payment'},{label: 'detail', type: 'detail'}]"
                @action="action" :loading="tabLoad" 
                ></v-table>
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
                radio:'已逾期',
                viewByStatus:'',
                date:'',
                searchValue:'',
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
                tableDataList:[]
            }
        },
        methods:{
            // watch: {
            //     viewByStatus() {
            //         // this. getList();
            //     },
            // },
            getList() {
                // this.tabLoad = true;
                const params ={
                                "conditions": {
                                    "orderEntryEndDt": "",
                                    "orderEntryStartDt": "",
                                    "orderNoLike": "",
                                    "overdue": 0
                                },
                                "pn": 1,
                                "ps": 10,
                                "sorts": [
                                    {
                                    "nativeSql": true,
                                    "orderBy": "id",
                                    "orderType": "desc",
                                    "resultMapId": ""
                                    }
                                ]
                            }
                this.$ajax.post(this.$apis.post_ledgerPage, params)
                .then(res => {
                      console.log(res.datas)
                      console.log(this.$db)
                      this.tableDataList = this.$getDB(this.$db.payment.table, res.datas);
                      console.log(this.tableDataList)
                });
            },
        },
        // pageChange(No) {
        //     console.log(No)
        // },
        action(item, type) {
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
            //点击进入对应po detail、lo detail、QC order detail页面
            this.$router.push({
                path: '/',
                // query: {
                //     id: item.id
                // }
            });
        },
        urgingPayment(item) {
            //  催款，此操作会给对应付款人发一条提示付款的信息，在对方的workbench显示；
            // 当待付款金额不为0时，催款按钮可操作；③ 当待付金额为0时，催款按钮为禁用，不可操作
        },
        created(){
            // this.viewByStatus = 0;
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
    .head{

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
    .spe-div{

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