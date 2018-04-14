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
                        <el-radio-button label="已逾期" border></el-radio-button>
                        <el-radio-button label="未逾期" border></el-radio-button>
                    </el-radio-group>
                </div>
                <div class="spe-div">
                    <div class="View">
                        <span class="text">View : </span>
                        <el-radio-group size="mini" v-model="radio1">
                            <el-radio-button label="All" border></el-radio-button>
                            <el-radio-button border>{{$lang.baseText.logisticOrder}}</el-radio-button>
                            <el-radio-button border>{{$lang.baseText.purchaseOrder}}</el-radio-button>
                            <el-radio-button border>{{$lang.baseText.qcOrder}}</el-radio-button>
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
            <div class="main">
                <v-table :data="tableDataList" data-key="payment.tableData"></v-table>
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
                radio1:'All',
                date:'',
                searchValue:'',
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

                //表格数据
                tableData6: [
                    {
                        payable: '12987122',
                        paid: '12512126',
                        receivable: '125125125',
                        received: '125125125',
                    },
                    {
                        payable: '',
                        paid: '',
                        receivable: '',
                        received: '',
                    },
                ],

                tableData:[
                    {
                        id: '12987122',
                        name: '王小虎',
                        amount1: '234',
                        amount2: '3.2',
                        amount3: 10
                    },
                ],
                //底部table数据
                tableDataList:[],
            }
        },
        methods:{
            getList() {
                this.ajax.get('/getTrackList').then((data)=>{
                    this.tableDataList = data;

                })
            },
        },
        created(){
            // this.getList();
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