<template>
    <div class="qcDetail">
        <div class="title">
            {{$t('warehouse.page.qcOrderDetail')}}
        </div>
        <div class="body">
            <div class="section">
                <div class="head"> {{$t('warehouse.page.basicInfo')}}</div>
                <div class="content">
                    <!--<el-row>-->
                        <!--<el-col class="list" :xs="24" :sm="12" :md="12" :lg="8" :xl="12">-->
                            <!--{{$t('warehouse.page.qcOrderNo')}}. : XXXXXX-->
                        <!--</el-col>-->
                        <!--<el-col class="list" :xs="24" :sm="12" :md="12" :lg="8" :xl="12">-->
                            <!--{{$t('warehouse.page.orderNo')}}. : XXXXXXXXX-->
                        <!--</el-col>-->
                        <!--<el-col class="list" :xs="24" :sm="12" :md="12" :lg="8" :xl="12">-->
                            <!--{{$t('warehouse.page.orderDate')}} : XXXXXXXXXX-->
                        <!--</el-col>-->
                        <!--<el-col class="list" :xs="24" :sm="12" :md="12" :lg="8" :xl="12">-->
                            <!--{{$t('warehouse.page.qcType')}} : XXXXXX-->
                        <!--</el-col>-->
                        <!--<el-col class="list" :xs="24" :sm="12" :md="12" :lg="8" :xl="12">-->
                            <!--{{$t('warehouse.page.qcDate')}} : XXXXXX-->
                        <!--</el-col>-->
                        <!--<el-col class="list" :xs="24" :sm="12" :md="12" :lg="8" :xl="12">-->
                            <!--{{$t('warehouse.page.supplierNO')}} : XXXXXXXXXXXXXXX-->
                        <!--</el-col>-->
                        <!--<el-col class="list" :xs="24" :sm="12" :md="12" :lg="8" :xl="12">-->
                            <!--{{$t('warehouse.page.supplierName')}} : XXXXXX-->
                        <!--</el-col>-->
                        <!--<el-col class="list" :xs="24" :sm="12" :md="12" :lg="8" :xl="12">-->
                            <!--{{$t('warehouse.page.factoryAddress')}} : XXXXXX-->
                        <!--</el-col>-->
                        <!--<el-col class="list" :xs="24" :sm="12" :md="12" :lg="8" :xl="12">-->
                            <!--{{$t('warehouse.page.factoryContactPhone')}} :-->
                            <!--XXXXXX-->
                        <!--</el-col>-->
                        <!--<el-col class="list" :xs="24" :sm="12" :md="12" :lg="8" :xl="12">-->
                            <!--{{$t('warehouse.page.qcStatus')}} : XXXXXX-->
                        <!--</el-col>-->
                        <!--<el-col class="list" :xs="24" :sm="12" :md="12" :lg="8" :xl="12">-->
                            <!--{{$t('warehouse.page.qcMethod')}} : XXXXXX-->
                        <!--</el-col>-->
                        <!--<el-col class="list" :xs="24" :sm="12" :md="12" :lg="8" :xl="12">-->
                            <!--{{$t('warehouse.page.surveyor')}} : XXXXXX-->
                        <!--</el-col>-->
                        <!--<el-col class="list" :xs="24" :sm="12" :md="12" :lg="8" :xl="12">-->
                            <!--{{$t('warehouse.page.serviceProvidersNo')}} : XXXXXX-->
                        <!--</el-col>-->
                        <!--<el-col class="list" :xs="24" :sm="12" :md="12" :lg="8" :xl="12">-->
                            <!--{{$t('warehouse.page.serviceProvidersName')}} : XXXXXX-->
                        <!--</el-col>-->
                        <!--<el-col class="list" :xs="24" :sm="12" :md="12" :lg="8" :xl="12">-->
                            <!--{{$t('warehouse.page.supplierOrderNo')}} : XXXXXX-->
                        <!--</el-col>-->
                        <!--<el-col class="list" :xs="24" :sm="12" :md="12" :lg="8" :xl="12">-->
                            <!--{{$t('warehouse.page.serviceFee')}} : XXXXXX-->
                        <!--</el-col>-->
                        <!--<el-col class="list" :xs="24" :sm="24" :md="24" :lg="24" :xl="24">-->
                            <!--{{$t('warehouse.page.remark')}} : XXXXXX-->
                        <!--</el-col>-->
                        <!--<el-col class="list" :xs="24" :sm="24" :md="24" :lg="24" :xl="24">-->
                            <!--{{$t('warehouse.page.attachment')}} : XXXXXX-->
                        <!--</el-col>-->
                    <!--</el-row>-->

                    <el-form class="speForm" label-width="300px" :label-position="labelPosition">
                        <el-row>
                            <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                                <el-form-item :label="$t('product.page.skuStatus')+' :'">
                                    XXXXXX
                                </el-form-item>
                            </el-col>
                            <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                                <el-form-item :label="$t('product.page.skuNo')+' :'">
                                    XXXXXX
                                </el-form-item>
                            </el-col>
                            <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                                <el-form-item :label="$t('product.page.skuEnglishName')+' :'">
                                    XXXXXX
                                </el-form-item>
                            </el-col>
                            <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                                <el-form-item :label="$t('product.page.skuNameInCustomerLanguage')+' :'">
                                    XXXX
                                </el-form-item>
                            </el-col>
                            <el-col class="list" :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                                <el-form-item :label="$t('product.page.skuEnglishDescription')+' :'">
                                    XXXXX
                                </el-form-item>
                            </el-col>
                            <el-col class="list" :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                                <el-form-item :label="$t('product.page.skuDescriptionInCustomerLanguage')+' :'">
                                    asfasf
                                </el-form-item>
                            </el-col>
                            <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                                <el-form-item :label="$t('product.page.skuCode')+' :'">
                                    asfasf
                                </el-form-item>
                            </el-col>
                            <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                                <el-form-item :label="$t('product.page.vendorSkuCode')+' :'">
                                    XXXXXX
                                </el-form-item>
                            </el-col>
                            <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                                <el-form-item :label="$t('product.page.supplierName')+' :'">
                                    XXXXXX
                                </el-form-item>
                            </el-col>
                            <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                                <el-form-item :label="$t('product.page.supplierCode')+' :'">
                                    XXXXXX
                                </el-form-item>
                            </el-col>
                            <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                                <el-form-item :label="$t('product.page.unitofMeasurement')+' :'">
                                    XXXXXX
                                </el-form-item>
                            </el-col>
                            <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                                <el-form-item :label="$t('product.page.productFormation')+' :'">
                                    XXXXXX
                                </el-form-item>
                            </el-col>
                            <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                                <el-form-item :label="$t('product.page.textureEnglish')+' :'">
                                    XXXXXX
                                </el-form-item>
                            </el-col>
                            <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                                <el-form-item :label="$t('product.page.colourEnglish')+' :'">
                                    XXXXXX
                                </el-form-item>
                            </el-col>
                            <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                                <el-form-item :label="$t('product.page.minimumOrderQuantity')+' :'">
                                    XXXXXX
                                </el-form-item>
                            </el-col>
                            <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                                <el-form-item :label="$t('product.page.deliveryDate')+' :'">
                                    XXXXXX
                                </el-form-item>
                            </el-col>
                            <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                                <el-form-item :label="$t('product.page.productDesign')+' :'">
                                    XXXXXX
                                </el-form-item>
                            </el-col>
                            <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                                <el-form-item :label="$t('product.page.categoryLevel1')+' :'">
                                    XXXXXX
                                </el-form-item>
                            </el-col>
                            <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                                <el-form-item :label="$t('product.page.categoryLevel2')+' :'">
                                    XXXXXX
                                </el-form-item>
                            </el-col>
                            <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                                <el-form-item :label="$t('product.page.categoryLevel3')+' :'">
                                    XXXXXX
                                </el-form-item>
                            </el-col>
                            <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                                <el-form-item :label="$t('product.page.categoryLevel4')+' :'">
                                    XXXXXX
                                </el-form-item>
                            </el-col>
                            <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                                <el-form-item :label="$t('product.page.readilyAvailable')+' :'">
                                    XXXXXX
                                </el-form-item>
                            </el-col>
                            <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                                <el-form-item :label="$t('product.page.skuAvailable')+' :'">
                                    XXXXXX
                                </el-form-item>
                            </el-col>
                            <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                                <el-form-item :label="$t('product.page.restrictedSellingCountry')+' :'">
                                    XXXXXX
                                </el-form-item>
                            </el-col>
                            <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                                <el-form-item :label="$t('product.page.applicableAge')+' :'">
                                    XXXXXX
                                </el-form-item>
                            </el-col>
                            <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                                <el-form-item :label="$t('product.page.expirationDate')+' :'">
                                    XXXXXX
                                </el-form-item>
                            </el-col>
                            <el-col class="list" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                                <el-form-item :label="$t('product.page.unexpirationDate')+' :'">
                                    XXXXXX
                                </el-form-item>
                            </el-col>
                            <el-col class="list" :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                                <el-form-item :label="$t('product.page.explain')+' :'">
                                    XXXXXX
                                </el-form-item>
                            </el-col>
                        </el-row>
                    </el-form>

                </div>
            </div>
            <div class="section">
                <pay-table
                        :columns="columns"
                        :title="payTitle"
                        :btnInfo="btnInfo"
                        :data="payData"
                        :disabledBtn="disabledBtn"
                        @btnClick="handleBtnClick"
                        :url="queryUrl"></pay-table>
            </div>
            <div class="section">
                <div class="head">
                    {{$t('warehouse.page.productInfo')}}
                    <el-button size="mini" type="primary">Confirm SKU</el-button>
                    <el-button size="mini" type="primary">Restart QC</el-button>
                    <el-button size="mini" type="primary">申请返工</el-button>
                    <el-button size="mini" type="info">Return</el-button>
                </div>
                <div class="content">
                    <v-simple-table
                            class="speTable"
                            :data.sync="tableDataList"
                            :column="dataColumn"
                            @sort-change="getSort"
                            @page-change="pageChange">
                    </v-simple-table>
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
    import VSimpleTable from '@/components/common/table/simple'

    export default {
        name: "qc-detail",
        components:{
            payTable,
            VSimpleTable
        },
        data(){
            return{
                labelPosition:'right',
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
                //表格数据
                payData: {
                    data:[
                        {
                            paymentId: '125547',
                            payName:'赈灾款',
                            payDate: '1992-02-02',
                            payDateActually:'1992-02-02',
                            payMoney:998,
                            payMoneyActually:'1902',
                            waitMoney:'',
                            status:1
                        },
                        {
                            paymentId: '547855',
                            payName:'赈灾款',
                            payDate: '2018-05-01',
                            payDateActually:'2010-07-30',
                            payMoney:152,
                            payMoneyActually:'1945',
                            waitMoney:'',
                            status:2
                        },
                    ],
                    type:'payment'
                },
                //表格列
                columns:[
                    {
                        label:'付款编号',
                        // type:'Text',         //没传的话就默认只是文本展示
                        width:'100',
                        prop:'paymentId',
                    },
                    {
                        label:'款项名称',
                        type:'Input',
                        prop:'payName',
                        width:120,
                        notEmpty:true,
                    },
                    {
                        label:'预计付款日期',
                        type:'Date',
                        prop:'payDate',
                        width:170,
                        notEmpty:true,
                    },
                    {
                        label:'预计付款金额',
                        type:'NumberInput',
                        prop:'payMoney',
                        width:150,
                        notEmpty:true,
                    },
                    {
                        label:'实际付款日期',
                        type:'Date',
                        prop:'payDateActually',
                        width:170
                    },
                    {
                        label:'实际付款金额',
                        type:'NumberInput',
                        prop:'payMoneyActually',
                        width:150
                    },
                ],
                //表格头部按钮名称
                btnInfo:'申请服务付款',
                //按钮disabled
                disabledBtn:{
                    disabledBtn:false
                },
                queryUrl:'/changeItem',



                textarea:'',
                currentPage:1,
                formInline: {
                    user: '',
                    region: ''
                },
                input:'',
                payTitle:'付款信息',
                tableDataList:[],
                dataColumn:[]
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



            //table操作
            pageChange(page) {
                console.log(page)
            },
            getSort(val, key) {
                console.log(val, key)
            },

            getList() {
                this.ajax.get('/getTrackList').then((data)=>{
                    this.tableDataList = data;
                    this.dataColumn = this.$getTableColumn(data, 'track.tableData',{width:200});
                })
            },

            /*
            * pay-table操作
            * */
            saveChangeLine(e){
                console.log(e)
                // this.$set(e,'isModify',false);
                // this.disabledBtn=false;
                //调用接口即可
            },
            //处理顶部按钮点击事件
            handleBtnClick(){
                this.disabledBtn.disabledBtn=true;
                this.payData.data.push({
                    paymentId: '124124',
                    payName:'',
                    payDate: '',
                    payMoney:'',
                    payDateActually:'',
                    payMoneyActually:'',
                    isNew:true
                });
            },

        },
        created(){
            this.getList();
        },
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
        font-size: 14px;
        line-height: 2.5;
        padding: 5px 0 5px 30px;
        /*border-bottom: 1px dotted #e0e0e0;*/
    }
    .section .content .list >>> .el-form-item.el-form-item--small{
        margin-bottom: 0;
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