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
                        <el-radio-button label="-1" border>{{$i.baseText.all}}</el-radio-button>
                        <el-radio-button label="1" >已逾期</el-radio-button>
                        <el-radio-button label="0" >未逾期</el-radio-button>
                    </el-radio-group>
                </div>
                <div class="spe-div">
                    <div class="View">
                        <span class="text">View : </span>
                        <el-radio-group size="mini"  v-model="viewByStatus" >
                            <el-radio-button label="" border>{{$i.baseText.all}}</el-radio-button>
                            <el-radio-button label="30">{{$i.baseText.logisticOrder}}</el-radio-button>
                            <el-radio-button label="10">{{$i.baseText.purchaseOrder}}</el-radio-button>
                            <el-radio-button label="20">{{$i.baseText.qcOrder}}</el-radio-button>
                        </el-radio-group>
                    </div>
                    <div class="search">
                        <select-search :selectHide="false" class="search"  @inputChange="getList"></select-search>
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
            <!-- ref="tab" @action="action"  @page-change="pageChange" -->
            <div class="main">
                <v-table :data="tableDataList" :buttons="[{label: 'urging payment', type: 'urging payment'},{label: 'detail', type: 'detail'}]"
                 :loading="tabLoad" @action="action" 
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
                status:-1,
                time:1523959983,
                viewByStatus:'',
                date:'',
                tabLoad:false,
                disabled:false,
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
        watch: {
            status(){
                this. getList();
            },
            viewByStatus() {
                this.getList();
            },
            date(){
                console.log(this.date)
            }
        },
        methods:{    
            getList(item){
                if(item){
                    const params ={
                        "conditions": {
                            "orderEntryEndDt":"",
                            "orderEntryStartDt": "",
                            "orderNoLike": item.key,
                            "orderType": this.viewByStatus,
                            "overdue": this.status  //-1所有 0未逾期 1已逾期
                        },
                        "pn": 1,  //每页大小
                        "ps": 50, //页码
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
                        res.datas = _.map(res.datas,val=>{
                            val.waitPayment = val.planPayAmount-val.actualPayAmount;
                            val.waitReceipt = val.planReceiveAmount-val.actualReceiveAmount;
                            return val;
                        });
                        this.tableDataList = this.$getDB(this.$db.payment.table, res.datas);
                    }); 
                }else{
                    const params ={
                        "conditions": {
                            "orderEntryEndDt":"",
                            "orderEntryStartDt": "",
                            "orderNoLike": '',
                            "orderType": this.viewByStatus,
                            "overdue": this.status  //-1所有 0未逾期 1已逾期
                        },
                        "pn": 1,  //每页大小
                        "ps": 50, //页码
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
                        res.datas = _.map(res.datas,val=>{
                            val.waitPayment = val.planPayAmount-val.actualPayAmount;
                            val.waitReceipt = val.planReceiveAmount-val.actualReceiveAmount;
                            return val;
                        });
                        this.tableDataList = this.$getDB(this.$db.payment.table, res.datas);
                    }); 
                }
            },
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
                //点击进入对应po detail 10、lo detail 30、QC order detail 20页面
                if(item.orderType.value == 10){
                    this.$router.push({
                        path: '/',
                        query: {
                            // orderNo: item.orderNo
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
                const count = 0
                // ① 催款，此操作会给对应付款人发一条提示付款的信息，在对方的workbench显示；
                // ② 当待付款金额不为0时，催款按钮可操作；
                // ③ 当待付金额为0时，催款按钮为禁用，不可操作；
                // ④ 催款限制：每天能点三次，超过次数后禁用；每次点击间隔一分钟才能再次点击，其间按钮为禁用
                if(item.waitPayment.value != 0){
                    if(count >= 3) {
                        this.disabled = true
                        return false;
                    }else{
                        this.$message({
                            type: 'success',
                            message: '发送成功!'
                        });
                       this.count ++ 
                    }
                }else{
                     this.disabled = true
                }
              
            },
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