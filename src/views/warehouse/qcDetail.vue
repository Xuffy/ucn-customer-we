<template>
    <div class="qcDetail">
        <div class="title">
            {{$t('warehouse.page.qcOrderDetail')}}
        </div>
        <div class="body">
            <div class="section">
                <div class="head"> {{$t('warehouse.page.basicInfo')}}</div>
                <div class="content">
                    <el-row>
                        <el-col class="list" :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                            {{$t('warehouse.page.qcOrderNo')}}. : XXXXXX
                        </el-col>
                        <el-col class="list" :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                            {{$t('warehouse.page.buyerOrderNo')}}. : XXXXXXXXX
                        </el-col>
                        <el-col class="list" :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                            {{$t('warehouse.page.buyerOrderDate')}} : XXXXXXXXXX
                        </el-col>
                        <el-col class="list" :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                            {{$t('warehouse.page.qcType')}} : XXXXXX
                        </el-col>
                        <el-col class="list" :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                            {{$t('warehouse.page.qcDate')}} : XXXXXX
                        </el-col>
                        <el-col class="list" :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                            {{$t('warehouse.page.supplierID')}} : XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
                        </el-col>
                        <el-col class="list" :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                            {{$t('warehouse.page.supplierName')}} : XXXXXX
                        </el-col>
                        <el-col class="list" :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                            {{$t('warehouse.page.factoryAddressInEnglish')}} : XXXXXX
                        </el-col>
                        <el-col class="list" :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                            {{$t('warehouse.page.factoryContactPhone')}} :
                            XXXXXX
                        </el-col>
                        <el-col class="list" :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                            {{$t('warehouse.page.qcResult')}} : XXXXXX
                        </el-col>
                        <el-col class="list" :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                            {{$t('warehouse.page.qcMethod')}} : XXXXXX
                        </el-col>
                        <el-col class="list" :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                            {{$t('warehouse.page.surveyor')}} : XXXXXX
                        </el-col>
                        <el-col class="list" :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                            {{$t('warehouse.page.servicePrice')}} : XXXXXX
                        </el-col>
                        <el-col class="list" :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                            {{$t('warehouse.page.serviceID')}} : XXXXXX
                        </el-col>
                        <el-col class="list" :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                            {{$t('warehouse.page.serviceName')}} : XXXXXX
                        </el-col>
                        <el-col class="list" :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                            {{$t('warehouse.page.remark')}} : XXXXXX
                        </el-col>
                        <el-col class="list" :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                            {{$t('warehouse.page.attachment')}} : XXXXXX
                        </el-col>
                    </el-row>
                </div>
            </div>
            <div class="section">
                <pay-table :data="payData"></pay-table>
            </div>
            <div class="section">
                <div class="head"> {{$t('warehouse.page.productInfo')}}</div>
                <div class="content">

                </div>
            </div>

            <div class="section">
                <div class="head">Calculate</div>
                <div class="content" style="margin-top: 10px">
                    <el-form label-width="320px"  :model="formInline" class="demo-form-inline">
                        <el-row>
                            <el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="8">
                                <el-form-item label="Total Quantity of Qualified Products">
                                    <el-input disabled v-model="formInline.user" placeholder=""></el-input>
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

            <el-button @click="close" type="warning" plain>{{$t('warehouse.page.close')}}</el-button>
            <el-button>{{$t('warehouse.page.cancelQC')}}</el-button>
            <el-button>{{$t('warehouse.page.deleteQC')}}</el-button>

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
                        paymentId: '124124',
                        payName:'赈灾款',
                        payDate: '1992-02-02',
                        payDateActually:'1992-02-02',
                        acceptMoney:998,
                        acceptMoneyActually:'1902',
                        waitMoney:'',
                    },
                    {
                        paymentId: '124124',
                        payName:'赈灾款',
                        payDate: '1992-02-02',
                        payDateActually:'1992-02-02',
                        acceptMoney:912,
                        acceptMoneyActually:'1902',
                        waitMoney:'',
                    },
                ],
                textarea:'',
                currentPage:1,
                formInline: {
                    user: '',
                    region: ''
                },
                input:'',
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

            close(){
                window.close();
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
        padding-bottom: 8px;
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
    .section .speInput{
        width: auto;
    }
    .section .speInput >>> .el-input__inner{
        text-align: left;
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