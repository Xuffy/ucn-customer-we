<template>
    <div class="qcDetail">
        <div class="title">
            QC Report Detail <el-button class="btn" type="text">Relate to Order No.123</el-button>
        </div>
        <div class="body">
            <div class="section">
                <div class="head">Basic Information</div>
                <div class="content">
                    <el-row>
                        <el-col class="list" :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                            <span class="important">*</span> QC report No. : XXXXXX
                        </el-col>
                        <el-col class="list" :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                            Buyer order No. : XXXXXXXXX
                        </el-col>
                        <el-col class="list" :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                            Buyer Order Date : XXXXXXXXXXXXXXXXXXXXXXXX
                        </el-col>
                        <el-col class="list" :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                            QC Type : XXXXXX
                        </el-col>
                        <el-col class="list" :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                            QC Report Status : XXXXXX
                        </el-col>
                        <el-col class="list" :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                            QC Date : XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
                        </el-col>
                        <el-col class="list" :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                            Supplier ID : XXXXXX
                        </el-col>
                        <el-col class="list" :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                            Supplier Name : XXXXXX
                        </el-col>
                        <el-col class="list" :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                            Factory Address (In English) : XXXXXX
                        </el-col>
                        <el-col class="list" :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                            <span class="important">*</span> Factory Contact Phone : XXXXXX
                        </el-col>
                        <el-col class="list" :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                            <span class="important">*</span> QC Result : XXXXXX
                        </el-col>
                        <el-col class="list" :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                            QC Method : XXXXXX
                        </el-col>
                        <el-col class="list" :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                            Surveyor : XXXXXX
                        </el-col>
                        <el-col class="list" :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                            Factory Contact Phone : XXXXXX
                        </el-col>
                        <el-col class="list" :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                            验货状态 : XXXXXX
                        </el-col>
                        <el-col class="list" :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                            服务金额 : XXXXXX
                        </el-col>
                        <el-col class="list noBorder" :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                            Order Remark :
                            <el-input
                                type="textarea"
                                :rows="2"
                                placeholder="请输入内容"
                                v-model="textarea">
                            </el-input>
                        </el-col>
                        <el-col class="list noBorder" :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                            Attachment :
                            <el-input
                                type="textarea"
                                :rows="2"
                                placeholder="请输入内容"
                                v-model="textarea">
                            </el-input>
                        </el-col>
                    </el-row>
                </div>
            </div>
            <div class="section">
                <div class="head">Payment</div>
                <div class="content">
                    <el-row>
                        <el-col class="list noBorder" :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                            <div>
                                货物付款
                                <el-button @click="payment" type="primary" size="mini">申请付款</el-button>
                            </div>
                            <div>
                                <pay-table :data="payData"></pay-table>
                            </div>
                        </el-col>
                        <el-col class="list noBorder" :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                            <div>
                                服务付款
                                <el-button type="primary" size="mini">申请付款</el-button>
                            </div>
                            <div>
                                <el-table
                                        :data="payData"
                                        style="width: 100%"
                                        height="250">
                                    <el-table-column
                                            label="#"
                                            align="center">
                                        <template slot-scope="scope">
                                            {{scope.$index+1}}
                                        </template>
                                    </el-table-column>
                                    <el-table-column
                                            label="编号"
                                            align="center">
                                        <template slot-scope="scope">
                                            {{scope.row.code}}
                                        </template>
                                    </el-table-column>
                                    <el-table-column
                                            label="日期"
                                            width="100"
                                            align="center">
                                        <template slot-scope="scope">
                                            {{scope.row.date}}
                                        </template>
                                    </el-table-column>
                                    <el-table-column
                                            label="款项类型"
                                            align="center">
                                        <template slot-scope="scope">
                                            {{scope.row.type}}
                                        </template>
                                    </el-table-column>
                                    <el-table-column
                                            label="付款金额"
                                            align="center">
                                        <template slot-scope="scope">
                                            {{scope.row.pay}}
                                        </template>
                                    </el-table-column>
                                    <el-table-column
                                            label="收款金额"
                                            align="center">
                                        <template slot-scope="scope">
                                            {{scope.row.receive}}
                                        </template>
                                    </el-table-column>
                                    <el-table-column
                                            label="待付金额"
                                            align="center">
                                        <template slot-scope="scope">
                                            {{scope.row.waitPay}}
                                        </template>
                                    </el-table-column>
                                    <el-table-column
                                            label="待收金额"
                                            align="center">
                                        <template slot-scope="scope">
                                            {{scope.row.waitReceive}}
                                        </template>
                                    </el-table-column>
                                </el-table>
                            </div>
                        </el-col>
                    </el-row>
                </div>
            </div>
            <div class="section">
                <div class="head">Calculate</div>
                <div class="content">
                    <el-form label-width="320px"  :model="formInline" class="demo-form-inline">
                        <el-row>
                            <el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="8">
                                <el-form-item label="Total Quantity of Qualified Products">
                                    <el-input v-model="formInline.user" placeholder="审批人"></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="8">
                                <el-form-item label="Total Carton of Qualified Products">
                                    <el-input v-model="formInline.user" placeholder="审批人"></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="8">
                                <el-form-item label="Total Volume of Qualified Products">
                                    <el-input v-model="formInline.user" placeholder="审批人"></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="8">
                                <el-form-item label="Total Net Weight of Qualified Products">
                                    <el-input v-model="formInline.user" placeholder="审批人"></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="8">
                                <el-form-item label="Total Gross Weight of Qualified Products">
                                    <el-input v-model="formInline.user" placeholder="审批人"></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="8">
                                <el-form-item label="Total Quantity of Sub-quality Products">
                                    <el-input v-model="formInline.user" placeholder="审批人"></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="8">
                                <el-form-item label="Total Carton of Sub-quality Products">
                                    <el-input v-model="formInline.user" placeholder="审批人"></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="8">
                                <el-form-item label="Total Volume of Sub-quality Products">
                                    <el-input v-model="formInline.user" placeholder="审批人"></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="8">
                                <el-form-item label="Total Net Weight of Sub-quality Products">
                                    <el-input v-model="formInline.user" placeholder="审批人"></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="8">
                                <el-form-item label="Total Gross Weight of Sub-quality Products">
                                    <el-input v-model="formInline.user" placeholder="审批人"></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="8">
                                <el-form-item label="Total Number of Carton">
                                    <el-input v-model="formInline.user" placeholder="审批人"></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="8">
                                <el-form-item label="Quantity of SKU">
                                    <el-input v-model="formInline.user" placeholder="审批人"></el-input>
                                </el-form-item>
                            </el-col>
                        </el-row>
                    </el-form>

                </div>
            </div>
        </div>

        <div class="handler">
            <el-button type="primary" size="mini">Modify</el-button>
            <el-button size="mini">Cancel QC</el-button>
            <el-button size="mini">Delete QC</el-button>
        </div>
    </div>
</template>

<script>

    import payTable from './paymentTable'

    export default {
        name: "qc-detail",
        components:{
            payTable
        },
        data(){
            return{
                tableData:[
                    {
                        code:'1923',
                        date:'2018-02-22',
                        type:'预付款',
                        pay:'1992',
                        receive:'239',
                        waitPay:'1244',
                        waitReceive:'2222'
                    },
                    {
                        code:'1923',
                        date:'2018-02-22',
                        type:'预付款',
                        pay:'1992',
                        receive:'239',
                        waitPay:'1244',
                        waitReceive:'2222'
                    },
                    {
                        code:'1923',
                        date:'2018-02-22',
                        type:'预付款',
                        pay:'1992',
                        receive:'239',
                        waitPay:'1244',
                        waitReceive:'2222'
                    },
                    {
                        code:'1923',
                        date:'2018-02-22',
                        type:'预付款',
                        pay:'1992',
                        receive:'239',
                        waitPay:'1244',
                        waitReceive:'2222'
                    },
                    {
                        code:'1923',
                        date:'2018-02-22',
                        type:'预付款',
                        pay:'1992',
                        receive:'239',
                        waitPay:'1244',
                        waitReceive:'2222'
                    },
                    {
                        code:'1923',
                        date:'2018-02-22',
                        type:'预付款',
                        pay:'1992',
                        receive:'239',
                        waitPay:'1244',
                        waitReceive:'2222'
                    },
                    {
                        code:'1923',
                        date:'2018-02-22',
                        type:'预付款',
                        pay:'1992',
                        receive:'239',
                        waitPay:'1244',
                        waitReceive:'2222'
                    },
                    {
                        code:'1923',
                        date:'2018-02-22',
                        type:'预付款',
                        pay:'1992',
                        receive:'239',
                        waitPay:'1244',
                        waitReceive:'2222'
                    },
                    {
                        code:'1923',
                        date:'2018-02-22',
                        type:'预付款',
                        pay:'1992',
                        receive:'239',
                        waitPay:'1244',
                        waitReceive:'2222'
                    },
                    {
                        code:'1923',
                        date:'2018-02-22',
                        type:'预付款',
                        pay:'1992',
                        receive:'239',
                        waitPay:'1244',
                        waitReceive:'2222'
                    },
                    {
                        code:'1923',
                        date:'2018-02-22',
                        type:'预付款',
                        pay:'1992',
                        receive:'239',
                        waitPay:'1244',
                        waitReceive:'2222'
                    },
                    {
                        code:'1923',
                        date:'2018-02-22',
                        type:'预付款',
                        pay:'1992',
                        receive:'239',
                        waitPay:'1244',
                        waitReceive:'2222'
                    },
                ],
                payData: [
                    {
                        id: '12987122',
                        name: '王小虎',
                        amount1: '234',
                        amount2: '3.2',
                        amount3: 10
                    }
                ],
                textarea:'',
                currentPage:1,
                formInline: {
                    user: '',
                    region: ''
                },
                input:''
            }
        },
        methods:{
            show(e){
                console.log(e)
            },

            //分页操作
            andleSizeChange(val) {
                console.log(`每页 ${val} 条`);
            },
            handleCurrentChange(val) {
                console.log(`当前页: ${val}`);
            },

            //申请付款
            payment(){
                this.payData.push({
                    id: '12987122',
                    name: '王小虎',
                    amount1: '234',
                    amount2: '3.2',
                    amount3: 10
                });
            },
        }
    }
</script>

<style scoped>
    .qcDetail{
        margin-left: 10px;
        padding-bottom: 50px;
    }
    .title{
        font-weight: bold;
        font-size: 18px;
        height: 32px;
        line-height: 32px;
        color:#666666;
        border-bottom: 1px solid #e4e4e4;
    }
    .title .btn{
        font-size: 15px;
        font-style: italic;
    }
    .section{
        margin-bottom: 10px;
    }
    .section .important{
        color:red;
    }
    .section .head{
        padding: 10px 0;
        font-weight: bold;
        font-size: 14px;
        border-bottom: 1px solid #797979;
        margin-bottom: 5px;
    }
    .section .content .list{
        padding-left: 30px;
        font-size: 14px;
        line-height: 2.5;
        border-bottom: 1px dotted #e0e0e0;
    }
    .section .content .noBorder{
        border: none;
    }

    .handler{
        position: fixed;
        bottom: 0;
        width: 100%;
        height: 40px;
        line-height: 40px;
        background-color: #FFFFFF;
        z-index: 2000;
        border-top:1px solid #e0e0e0;
    }
</style>