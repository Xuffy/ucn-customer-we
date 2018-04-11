<template>
    <div class="souringDetail">
        <div class="head">
            <div class="title">
                <img src='../../../assets/images/logo.jpg'/> 
                <span>name</span>
            </div>
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
                    <el-button @click='createInquiry'>{{$t('supplier.buttonname.createInquiry')}}</el-button>
                    <el-button @click='createOrder'>{{$t('supplier.buttonname.createOrder')}}</el-button>
                    <el-button @click='addToCompare'>{{$t('supplier.buttonname.addToCompare')}}</el-button>
                    <el-button @click='supplierProducts'>{{$t('supplier.buttonname.supplierProducts')}}</el-button>
                    <el-button >{{$t('supplier.buttonname.addToBookmark')}}</el-button>
                </div>
                <div class="btns" v-else>
                    <el-button @click="finishEdit" type="primary">Finish</el-button>
                    <el-button @click="cancelEdit" type="info">Cancel</el-button>
                </div>
            </div>
        </div>
        <div class="body">
            <el-tabs v-model="tabName" type="card" >
                
                <el-tab-pane :label="$t('supplier.detail.address')" name="address">
                    <v-table  :data="tabData" data-key="supplier.tableData"  style='marginTop:10px'/>
                </el-tab-pane>
                <el-tab-pane :label="$t('supplier.detail.accountInfo')"  name="accountInfo">
                    <v-table  :data="tabData" data-key="supplier.tableData"  style='marginTop:10px'/>
                </el-tab-pane>
                <el-tab-pane :label="$t('supplier.detail.contactInfo')" name="contactInfo">
                    <v-table  :data="tabData" data-key="supplier.tableData"  style='marginTop:10px'/>
                </el-tab-pane>
                <el-tab-pane :label="$t('supplier.detail.tradeHistory')"  name="tradeHistory">
                  <v-table  :data="tabData" data-key="supplier.tableData"  style='marginTop:10px'/>
                </el-tab-pane>
                <el-tab-pane :label="$t('supplier.detail.inquireHistory')"  name="inquireHistory">
                  <v-table  :data="tabData" data-key="supplier.tableData"  style='marginTop:10px'/> 
                </el-tab-pane>
                <el-tab-pane :label="$t('supplier.detail.remark')" name="remark">
                    <v-remark   style='marginTop:10px'/>
                </el-tab-pane>
                <el-tab-pane :label="$t('supplier.detail.attchment')" name="attchment">
                  <div class="attchment">
                   <div class="attchment_item">
                    <div class="attchment_item_content">
                        <i class="el-icon-document"></i>
                         <p>产品介绍</p>
                        <i class="el-icon-download"></i>
                    </div>
                    </div>
                    <div class="attchment_item">
                    <div class="attchment_item_content">
                        <i class="el-icon-document"></i>
                         <p>产品介绍</p>
                        <i class="el-icon-download"></i>
                    </div>
                    </div>
                    </div>
                </el-tab-pane>
            </el-tabs>
        </div>

        <VCompareList :config="compareConfig"></VCompareList>

    </div>
</template>

<script>
    import VCompareList from '../../product/compareList'
    import VRemark from '../../product/addlineTable'
    import {
        VTable
    } from '@/components/index';

    export default {
        name: "souringDetail",
        components: {
            VTable,
            VCompareList,
            VRemark
        },
        data() {
            return {
                noEdit: true,
                tabName: 'address', //默认打开的tab
                tabData: [],
                compareConfig: {
                    showCompareList: false, //是否显示比较列表
                },
            }
        },
        methods: {
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
                this.compareConfig.showCompareList = true;
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
        margin-left: 30px;
    }

    .title {
        display: flex;
        align-items: center;
        margin-top: 20px;
    }

    .title span {
        margin-left: 10px;
    }

    .detail {
        padding-top: 20px;
    }

    .souringDetail {
        background-color: #f4f4f4;
    }

    .souringDetail .head {
        background-color: #FFFFFF;
        padding: 0 20px;

    }

    .souringDetail .head .title {
        position: relative;
        height: 40px;
        line-height: 40px;
        font-weight: bold;
        font-size: 18px;
        color: #666666;
    }

    .souringDetail .head .title .title-btn {
        float: right;
    }

    .souringDetail .head .detail {
        margin-top: 8px;
    }

    .souringDetail .head .detail .carousel-img {
        height: 170px;
    }

    .souringDetail .head .detail .carousel-img img {
        width: 100%;
        height: 100%;
    }

    .souringDetail .head .detail .right {
        /*padding-top: 10px;*/
    }

    .souringDetail .head .detail .list {
        padding-left: 30px;
        font-size: 14px;
        line-height: 2.5;
        /*        border-bottom: 1px dotted #e0e0e0;*/
    }

    .souringDetail .head .detail .btns {
        text-align: center;
        padding: 15px 0;
    }

    .souringDetail .head .detail .btns>Button {
        margin-right: 10px;
    }

    .souringDetail .body {
        margin-top: 10px;
        margin-bottom: 20px;
        background-color: #FFFFFF;
    }

    .souringDetail .body .list {
        line-height: 30px;
        font-size: 13px;
    }

    .speForm .el-form-item--small.el-form-item {
        margin-bottom: 0;
    }

    .speForm .el-row .list .el-input {
        width: 80%;
    }

    .attchment {
        display: flex;
        justify-content: flex-start;
        height: 400px;
    }

    .attchment_item {
        width: 180px;
        height: 60px;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        border: 1px solid #BEBEBE;
        border-radius: 3px;
        margin-left: 20px;
    }

    .attchment_item_content {
        width: 180px;
        display: flex;
        justify-content: center;
        align-items: baseline;
    }

    .attchment_item p {
        font-size: 14px;
        padding-left: 5px;
        padding-right: 5px;
    }

    .attchment_item i {
        font-size: 40px;
    }

</style>
