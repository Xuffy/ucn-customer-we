<template>
    <div class="souringDetail">
        <div class="head">
            <div class="title">
                <img src='../../../assets/images/logo.jpg'/> 
                <span>name</span>
            </div>
            <div class="detail">             
                   <el-row>             
                        <el-row class="right">
                            <el-col class="list" :xs="24" :sm="12" :md="8" :lg="8" :xl="8">
                                {{$t('supplier.detail.supplierName')}}:xxxx
                            </el-col>
                            <el-col class="list" :xs="24" :sm="12" :md="8" :lg="8" :xl="8">
                                 {{$t('supplier.detail.SupplierCode')}}:xxxx
                            </el-col>
                            <el-col class="list" :xs="24" :sm="12" :md="8" :lg="8" :xl="8">
                                 {{$t('supplier.detail.supplierType')}}: xxxx
                            </el-col>
                            <el-col class="list" :xs="24" :sm="12" :md="8" :lg="8" :xl="8">
                                 {{$t('supplier.detail.country')}}: xxxx
                            </el-col>
                            <el-col class="list" :xs="24" :sm="12" :md="8" :lg="8" :xl="8">
                                 {{$t('supplier.detail.city')}}: xxxx
                            </el-col>
                            <el-col class="list" :xs="24" :sm="12" :md="8" :lg="8" :xl="8">
                                 {{$t('supplier.detail.provideIncoterm')}}: xxxx
                            </el-col>
                            <el-col class="list" :xs="24" :sm="12" :md="8" :lg="8" :xl="8">
                                 {{$t('supplier.detail.exportLicense')}}: xxxx
                            </el-col>
                            <el-col class="list" :xs="24" :sm="12" :md="8" :lg="8" :xl="8">
                                 {{$t('supplier.detail.mainBusinessScope')}}: xxxx
                            </el-col>
                            <el-col class="list" :xs="24" :sm="12" :md="8" :lg="8" :xl="8">
                                 {{$t('supplier.detail.category')}}: xxxx
                            </el-col>
                            <el-col class="list" :xs="24" :sm="12" :md="8" :lg="8" :xl="8">
                                 {{$t('supplier.detail.currency')}}: xxxx
                            </el-col>
                             <el-col class="list" :xs="24" :sm="12" :md="8" :lg="8" :xl="8">
                                 {{$t('supplier.detail.paymentItem')}}: xxxx
                            </el-col>
                            <el-col class="list" :xs="24" :sm="12" :md="8" :lg="8" :xl="8">
                                 {{$t('supplier.detail.description')}}: xxxx
                            </el-col>
                        </el-row>

                </el-row>
                <div class="btns" v-if="noEdit">
                    <el-button type="primary">{{$t('supplier.buttonname.createInquiry')}}</el-button>
                    <el-button type="primary">{{$t('supplier.buttonname.createOrder')}}</el-button>
                    <el-button type="primary">{{$t('supplier.buttonname.addToCompare')}}</el-button>
                    <el-button type="primary">{{$t('supplier.buttonname.supplierProducts')}}</el-button>
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
                    <v-simple-table :column="tabColumn" :data.sync="tabData" />
                </el-tab-pane>
                <el-tab-pane :label="$t('supplier.detail.accountInfo')"  name="accountInfo">
                    <v-simple-table :column="tabColumn" :data.sync="tabData" />
                </el-tab-pane>
                <el-tab-pane :label="$t('supplier.detail.contactInfo')" name="contactInfo">
                    <v-simple-table :column="tabColumn" :data.sync="tabData" />
                </el-tab-pane>
                <el-tab-pane :label="$t('supplier.detail.tradeHistory')"  name="tradeHistory">
                  <v-simple-table :column="tabColumn" :data.sync="tabData" />
                </el-tab-pane>
                <el-tab-pane :label="$t('supplier.detail.inquireHistory')"  name="inquireHistory">
                   <v-simple-table :column="tabColumn" :data.sync="tabData" />     
                </el-tab-pane>
                <el-tab-pane :label="$t('supplier.detail.remark')" name="remark">

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



    </div>
</template>

<script>
    import {
        VSimpleTable
    } from '@/components/index';

    export default {
        name: "souringDetail",
        components: {
            VSimpleTable,

        },
        data() {
            return {
                noEdit: true,
                tabName: 'address', //默认打开的tab
                tabColumn: [],
                tabData: []
            }
        },
        methods: {},
        created() {
            this.ajax.get('/sourcingDetailAdress', {
                    params: {}
                })
                .then(res => {
                    this.tabData = res.supplierdata
                    this.tabColumn = this.$getTableColumn(this.tabData, "supplier.detail", {
                        width: '220px'
                    });

                })
                .catch((res) => {
                    console.log(res);
                });
        },
    }

</script>

<style scoped>
    .title img {
        max-width: 100px;
        max-height: 100px;
    }

    .title {
        display: flex;
        align-items: center;
        margin-top: 20px;
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
        border-bottom: 1px dotted #e0e0e0;
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
