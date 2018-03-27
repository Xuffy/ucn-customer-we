<template>
    <div class="payment">
        <div class="title">
            General Ledger
        </div>
        <div class="body">
            <div class="head">
                View:
                <el-radio-group v-model="radio">
                    <el-radio-button label="All" border></el-radio-button>
                    <el-radio-button label="Logistic Order" border></el-radio-button>
                    <el-radio-button label="Purchase Order" border></el-radio-button>
                    <el-radio-button label="Service Order" border></el-radio-button>
                </el-radio-group>
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
            <br>
            <div class="main">
                <!--<el-table-->
                        <!--class="speTable"-->
                        <!--:data="tableData6"-->
                        <!--border-->
                        <!--style="width: 100%">-->
                    <!--<el-table-column-->
                            <!--label="Payable"-->
                            <!--align="center"-->
                            <!--width="350">-->
                        <!--<template slot-scope="scope">-->
                            <!--<div v-if="scope.row.payable">-->
                                <!--{{scope.row.payable}}-->
                            <!--</div>-->
                            <!--<div class="spspspssp" v-else>-->
                                <!--<table>-->
                                    <!--<thead>-->
                                        <!--<tr>-->
                                            <!--<th>期初余额</th>-->
                                            <!--<th>本期发生额</th>-->
                                            <!--<th>期末余额</th>-->
                                        <!--</tr>-->
                                    <!--</thead>-->
                                    <!--<tbody>-->
                                        <!--<tr>-->
                                            <!--<td>1111</td>-->
                                            <!--<td>222222</td>-->
                                            <!--<td>222223</td>-->
                                        <!--</tr>-->
                                    <!--</tbody>-->
                                <!--</table>-->
                            <!--</div>-->
                            <!--&lt;!&ndash;<el-table&ndash;&gt;-->
                                    <!--&lt;!&ndash;class="innerTable"&ndash;&gt;-->
                                    <!--&lt;!&ndash;v-else&ndash;&gt;-->
                                    <!--&lt;!&ndash;:data="tableData"&ndash;&gt;-->
                                    <!--&lt;!&ndash;border&ndash;&gt;-->
                                    <!--&lt;!&ndash;style="width: 100%">&ndash;&gt;-->
                                <!--&lt;!&ndash;<el-table-column&ndash;&gt;-->
                                        <!--&lt;!&ndash;label="期初余额"&ndash;&gt;-->
                                        <!--&lt;!&ndash;align="center">&ndash;&gt;-->
                                <!--&lt;!&ndash;</el-table-column>&ndash;&gt;-->
                                <!--&lt;!&ndash;<el-table-column&ndash;&gt;-->
                                        <!--&lt;!&ndash;label="本期发生额"&ndash;&gt;-->
                                        <!--&lt;!&ndash;align="center">&ndash;&gt;-->
                                <!--&lt;!&ndash;</el-table-column>&ndash;&gt;-->
                                <!--&lt;!&ndash;<el-table-column&ndash;&gt;-->
                                        <!--&lt;!&ndash;label="期末余额"&ndash;&gt;-->
                                        <!--&lt;!&ndash;align="center">&ndash;&gt;-->
                                <!--&lt;!&ndash;</el-table-column>&ndash;&gt;-->
                            <!--&lt;!&ndash;</el-table>&ndash;&gt;-->
                        <!--</template>-->
                    <!--</el-table-column>-->
                    <!--<el-table-column-->
                            <!--label="Paid"-->
                            <!--align="center">-->
                        <!--<template slot-scope="scope">-->
                            <!--{{scope.row.paid}}-->
                        <!--</template>-->
                    <!--</el-table-column>-->
                    <!--<el-table-column-->
                            <!--label="Receivable"-->
                            <!--align="center"-->
                            <!--width="350">-->
                    <!--</el-table-column>-->
                    <!--<el-table-column-->
                            <!--label="Received"-->
                            <!--align="center">-->
                        <!--<template slot-scope="scope">-->
                            <!--{{scope.row.received}}-->
                        <!--</template>-->
                    <!--</el-table-column>-->
                <!--</el-table>-->
                <table class="speTable">
                    <thead>
                        <tr>
                            <th>Payable</th>
                            <th>Paid</th>
                            <th>Receivable</th>
                            <th>Received</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="hover">
                            <td>150,000.00</td>
                            <td>150,000.00</td>
                            <td>150,000.00</td>
                            <td>150,000.00</td>
                        </tr>
                        <tr>
                            <td>
                                <table class="innerTable">
                                    <thead>
                                        <tr>
                                            <th class="border1">期初余额</th>
                                            <th class="border2">本期发生额</th>
                                            <th class="border3">期末余额</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td class="border4">150,000.00</td>
                                            <td class="border5">150,000.00</td>
                                            <td>150,000.00</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                            <td class="noBorder"></td>
                            <td>
                                <table class="innerTable">
                                    <thead>
                                    <tr>
                                        <th class="border1">期初余额</th>
                                        <th class="border2">本期发生额</th>
                                        <th class="border3">期末余额</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td class="border4">150,000.00</td>
                                            <td class="border5">150,000.00</td>
                                            <td>150,000.00</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                            <td class="noBorder"></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name:'payment',
        data(){
            return{
                radio:'All',
                date:'',
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
                ]
            }
        },
        methods:{

        }
    }
</script>
<style scoped>
    .title{
        font-weight: bold;
        font-size: 18px;
        height: 32px;
        line-height: 32px;
        color:#666666;
    }
    .head{
        text-align: right;
    }
    .speTable{
        width: 100%;
        font-size: 12px;
        color:#666666;
    }
    .speTable>thead{
        background-color: #f4f4f4;
    }
    .speTable .hover{
        transition: .2s linear all;
    }
    .speTable .hover:hover{
        background-color: #f5f7fa;
        transition: .2s linear all;
    }
    .speTable tr{
        height: 40px;
        line-height: 40px;
    }
    .speTable tr th,.speTable tr td{
        border:1px solid #e9e9e9;
        text-align: center;
    }
    .speTable .noBorder{
        border:none;
    }
    .speTable .innerTable{
        width: 100%;
    }
    .speTable .innerTable th,.speTable .innerTable td{
        border:none;
    }
    .speTable .innerTable .border1{
        border-right:1px solid #e9e9e9;
        border-bottom:1px solid #e9e9e9;
    }
    .speTable .innerTable .border2{
        border-bottom:1px solid #e9e9e9;
    }
    .speTable .innerTable .border3{
        border-left:1px solid #e9e9e9;
        border-bottom:1px solid #e9e9e9;
    }
    .speTable .innerTable .border4{
        border-right:1px solid #e9e9e9;
    }
    .speTable .innerTable .border5{
        border-right:1px solid #e9e9e9;
    }

</style>