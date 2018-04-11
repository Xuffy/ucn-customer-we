<template>
    <div class="bookmarkDetail">
        <div class="head">
            <div class="title">
                <el-row>  
                 <el-col  :xs="22" :sm="22" :md="22" :lg="22" :xl="22">
                    <span>  
                        <img src='../../../assets/images/logo.jpg'/> 
                        <span>name</span>
                    </span> 
                </el-col>  
                </el-row>  
            </div>
<!--            商品详情-->
            <div class="detail">   
                   <el-form  label-width="190px">          
                    <el-row>             
                        <el-row class="right">
                            <el-col class="list" :xs="24" :sm="12" :md="8" :lg="8" :xl="8">                           
                                    <el-form-item prop="SupplierName" :label="$t('supplier.detail.supplierName')+' :'">
                                        xxxx
                                    </el-form-item>
                            </el-col>
                            <el-col class="list" :xs="24" :sm="12" :md="8" :lg="8" :xl="8">
                                   <el-form-item prop="SupplierNo" :label="$t('supplier.detail.SupplierNo')+' :'">
                                        xxxx
                                    </el-form-item>
                               
                            </el-col>
                            <el-col class="list" :xs="24" :sm="12" :md="8" :lg="8" :xl="8">
                                    <el-form-item prop="SupplierType" :label="$t('supplier.detail.supplierType')+' :'">
                                        xxxx
                                    </el-form-item>
                                
                            </el-col>
                            <el-col class="list" :xs="24" :sm="12" :md="8" :lg="8" :xl="8">
                                   <el-form-item prop="Country" :label="$t('supplier.detail.country')+' :'">
                                        xxxx
                                    </el-form-item>
                               
                            </el-col>
                            <el-col class="list" :xs="24" :sm="12" :md="8" :lg="8" :xl="8">
                                    <el-form-item prop="City" :label="$t('supplier.detail.city')+' :'">
                                        xxxx
                                    </el-form-item>
                               
                            </el-col>
                            <el-col class="list" :xs="24" :sm="12" :md="8" :lg="8" :xl="8">
                                    <el-form-item prop="ProvideIncoterm" :label="$t('supplier.detail.provideIncoterm')+' :'">
                                        xxxx
                                    </el-form-item>
                                
                            </el-col>
                            <el-col class="list" :xs="24" :sm="12" :md="8" :lg="8" :xl="8">
                                   <el-form-item prop="ExportLicense" :label="$t('supplier.detail.exportLicense')+' :'">
                                        xxxx
                                    </el-form-item>
                               
                            </el-col>
                            <el-col class="list" :xs="24" :sm="12" :md="8" :lg="8" :xl="8">
                                   <el-form-item prop="MainBusinessScope" :label="$t('supplier.detail.mainBusinessScope')+' :'">
                                        xxxx
                                    </el-form-item>
                                
                            </el-col>
                            <el-col class="list" :xs="24" :sm="12" :md="8" :lg="8" :xl="8">
                                    <el-form-item prop="Category" :label="$t('supplier.detail.category')+' :'">
                                        xxxx
                                    </el-form-item>
                               
                            </el-col>
                            <el-col class="list" :xs="24" :sm="12" :md="8" :lg="8" :xl="8">
                                   <el-form-item prop="Currency" :label="$t('supplier.detail.currency')+' :'">
                                        xxxx
                                    </el-form-item>
                               
                            </el-col>
                             <el-col class="list" :xs="24" :sm="12" :md="8" :lg="8" :xl="8">
                                   <el-form-item prop="PaymentItem" :label="$t('supplier.detail.paymentItem')+' :'">
                                        xxxx
                                    </el-form-item>
                              
                            </el-col>                     
                             <el-col class="list" :xs="24" :sm="12" :md="8" :lg="8" :xl="8">
                                     <el-form-item prop="description" :label="$t('supplier.detail.description')+' :'">
                                        xxxx
                                    </el-form-item>
                              
                            </el-col>
                            
                        </el-row>

                </el-row>
                  </el-form>
                <div class="btns" v-if="noEdit">
                    <el-button  @click='createInquiry'>{{$t('supplier.buttonname.createInquiry')}}</el-button>
                    <el-button  @click='createOrder'>{{$t('supplier.buttonname.createOrder')}}</el-button>
                    <el-button @click='addToCompare'>{{$t('supplier.buttonname.addToCompare')}}</el-button>
                    <el-button  @click='supplierProducts'>{{$t('supplier.buttonname.supplierProducts')}}</el-button>
                    <el-button type='danger'>{{$t('supplier.buttonname.remove')}}</el-button>
                </div>
                <div class="btns" v-else>
                    <el-button @click="finishEdit" >{{$t('supplier.buttonname.finish')}}</el-button>
                    <el-button @click="cancelEdit" type="danger">{{$t('supplier.buttonname.cancel')}}</el-button>
                </div>
            </div>
        </div>
        <div class="body">
            <el-tabs v-model="tabName" type="card" >
                <el-tab-pane :label="$t('supplier.detail.factoryAddress')" name="factoryAddress">
                        <v-table  :data="tabData" data-key="supplier.tableData"  style='marginTop:10px'/>
                </el-tab-pane>
                <el-tab-pane :label="$t('supplier.detail.accountInfo')" name="accountInfo">
                        <v-table  :data="tabData" data-key="supplier.tableData"  style='marginTop:10px'/>
                </el-tab-pane>
                <el-tab-pane :label="$t('supplier.detail.contactInfo')" name="contactInfo">
                        <v-table  :data="tabData" data-key="supplier.tableData"  style='marginTop:10px'/>
                </el-tab-pane>
                <el-tab-pane :label="$t('supplier.detail.tradeHistory')" name="tradeHistory">
                         <v-table  :data="tabData" data-key="supplier.tableData"  style='marginTop:10px'/>
<!--
                    <el-row>
                        <el-col class="list" :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                            Inquiry qty : XXXXXX
                        </el-col>
                        <el-col class="list" :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                            Ontime delivery rate : XXXXXX
                        </el-col>
                        <el-col class="list" :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                            Feedback qty : XXXXXX
                        </el-col>
                        <el-col class="list" :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                            Complain qty : XXXXXX
                        </el-col>
                        <el-col class="list" :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                            Orders qty : XXXXXX
                        </el-col>
                         <el-col class="list" :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                            Feedback qty : XXXXXX
                        </el-col>
                         <el-col class="list" :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                            Quality approval rate : XXXXXX
                        </el-col>
                    </el-row>
-->
                </el-tab-pane>
                <el-tab-pane :label="$t('supplier.detail.remark')" name="Remark">
                            <v-remark style='marginTop:10px'/> </v-remark> 
                </el-tab-pane>
            </el-tabs>
        </div>



    </div>
</template>

<script>
    import {
        VTable
    } from '@/components/index';
    import VRemark from '../../product/addlineTable'
    export default {
        name: "bookmarkDetail",
        components: {
            VTable,
            VRemark
        },
        data() {
            return {
                noEdit: true,
                tabName: 'factoryAddress', //默认打开的tab

                tabData: []
            }
        },
        methods: {
            //...........跳入createInquiry
            createInquiry() {
                this.$router.push({
                    name: 'createInquiry',
                    query: {

                    }
                })
            },
            createOrder() {
                this.$router.push({
                    name: 'creatOrder',
                    query: {

                    }
                })
            },
            addToCompare() {

            },
            supplierProducts() {

            },
        },
        created() {
            this.ajax.get(this.$apis.supplier_overview, {
                    params: {}
                })
                .then(res => {
                    this.tabData = res

                })
                .catch((res) => {

                });
        },
    }

</script>

<style scoped>
    .title img {
        max-width: 100px;
        max-height: 100px;
        margin-left: 20px;
    }

    .title {
        margin-top: 20px;

    }

    .title span {
        display: flex;
        align-items: center;
        margin-left: 10px;
    }

    .detail {
        padding-top: 20px;
    }

    .bookmarkDetail {
        background-color: #f4f4f4;
    }

    .bookmarkDetail .head {
        background-color: #FFFFFF;
        padding: 0 20px;
    }

    .bookmarkDetail .head .title {
        position: relative;
        height: 40px;
        line-height: 40px;
        font-weight: bold;
        font-size: 18px;
        color: #666666;
    }

    .bookmarkDetail .head .title .title-btn {
        float: right;
    }

    .bookmarkDetail .head .detail {
        margin-top: 8px;
    }

    .bookmarkDetail .head .detail .carousel-img {
        height: 170px;
    }

    .bookmarkDetail .head .detail .carousel-img img {
        width: 100%;
        height: 100%;
    }

    .bookmarkDetail .head .detail .right {
        /*padding-top: 10px;*/
    }

    .bookmarkDetail .head .detail .list {
        padding-left: 30px;
        font-size: 14px;
        line-height: 2.5;
        /*        border-bottom: 1px dotted #e0e0e0;*/
    }

    .bookmarkDetail .head .detail .btns {
        text-align: center;
        padding: 15px 0;
    }

    .bookmarkDetail .head .detail .btns>Button {
        margin-right: 10px;
    }

    .bookmarkDetail .body {
        margin-top: 10px;
        margin-bottom: 20px;
        background-color: #FFFFFF;
    }

    .bookmarkDetail .body .list {
        line-height: 30px;
        font-size: 13px;
    }

    .speForm .el-form-item--small.el-form-item {
        margin-bottom: 0;
    }

    .speForm .el-row .list .el-input {
        width: 80%;
    }

</style>
