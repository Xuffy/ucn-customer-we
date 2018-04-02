<template>
    <div class="bookmarkDetail">
        <div class="head">
            <div class="title">
                <el-row>  
                 <el-col  :xs="18" :sm="18" :md="18" :lg="18" :xl="18">
                    <span>  
                        <img src='../../../assets/images/logo.jpg'/> 
                        <span>name</span>
                    </span> 
                </el-col>  
                 <el-col  :xs="6" :sm="6" :md="6" :lg="6" :xl="6">      
                     <el-button>{{$t('supplier.buttonname.remove')}}</el-button>
                </el-col>
                </el-row>  
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
                </div>
                <div class="btns" v-else>
                    <el-button @click="finishEdit" type="primary">{{$t('supplier.buttonname.finish')}}</el-button>
                    <el-button @click="cancelEdit" type="info">{{$t('supplier.buttonname.cancel')}}</el-button>
                </div>
            </div>
        </div>
        <div class="body">
            <el-tabs v-model="tabName" type="card" >
                <el-tab-pane :label="$t('supplier.detail.factoryAddress')" name="factoryAddress">
                       <v-simple-table :column="tabColumn" :data.sync="tabData" />
                </el-tab-pane>
                <el-tab-pane :label="$t('supplier.detail.accountInfo')" name="accountInfo">
                       <v-simple-table :column="tabColumn" :data.sync="tabData" />
                </el-tab-pane>
                <el-tab-pane :label="$t('supplier.detail.contactInfo')" name="contactInfo">
                        <v-simple-table :column="tabColumn" :data.sync="tabData" />
                </el-tab-pane>
                <el-tab-pane :label="$t('supplier.detail.tradeHistory')" name="tradeHistory">
                        <v-simple-table :column="tabColumn" :data.sync="tabData" />
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
        name: "bookmarkDetail",
        components: {
            VSimpleTable
        },
        data() {
            return {
                noEdit: true,
                tabName: 'factoryAddress', //默认打开的tab
                tabColumn: [],
                tabData: []
            }
        },
        methods: {},
        created() {
            this.ajax.get('/supplierOverview', {
                    params: {}
                })
                .then(res => {
                    this.tabData = res.supplierdata
                    this.tabColumn = this.$getTableColumn(this.tabData, "supplier.tableData", {
                        width: '180px'
                    });
                    console.log(this.tabColumn)
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
        margin-top: 20px;

    }

    .title span {
        display: flex;
        align-items: center;
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
        border-bottom: 1px dotted #e0e0e0;
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
