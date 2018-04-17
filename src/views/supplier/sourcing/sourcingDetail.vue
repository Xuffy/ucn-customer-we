<template>
    <div class="souringDetail">
        <div class="head">
            <div class="title">
                <img :src='basicDate.logo'/> 
                <span>{{basicDate.name}}</span>
            </div>
            <div class="detail">             
                 <el-form  label-width="190px">          
                    <el-row>             
                        <el-row class="right">
                            <el-col class="list" :xs="24" :sm="12" :md="8" :lg="8" :xl="8"
                                   v-for='(item,index) in $db.supplier.detail'
                                   :key='item'
                                   >                         
                                    <el-form-item label-width="260px" :prop="item.key" :label="item.label+' :'">
                                       {{basicDate[item.key]}}
                                    </el-form-item>
                            </el-col>                          
                        </el-row>

                </el-row>
                  </el-form>
                <div class="btns" v-if="noEdit">
                    <el-button @click='createInquiry'>{{$lang.baseText.createInquiry}}</el-button>
                    <el-button @click='createOrder'>{{$lang.baseText.createOrder}}</el-button>
                    <el-button @click='addToCompare'>{{$lang.baseText.addToCompare}}</el-button>
                    <el-button @click='supplierProducts'>{{$lang.baseText.supplierProducts}}</el-button>
                    <el-button >{{$lang.baseText.addToBookmark}}</el-button>
                </div>
                <div class="btns" v-else>
                    <el-button @click="finishEdit" type="primary">{{$lang.baseText.finish}}</el-button>
                    <el-button @click="cancelEdit" type="info">{{$lang.baseText.cancel}}</el-button>
                </div>
            </div>
        </div>
        <div class="body">
            <el-tabs v-model="tabName" type="card" >          
                <el-tab-pane :label="$lang.address" name="address">
                    <v-table  :data="address"  style='marginTop:10px'/>
                </el-tab-pane>
                <el-tab-pane :label="$lang.accountInfo"  name="accountInfo">
                    <v-table  :data="accounts"  style='marginTop:10px'/>
                </el-tab-pane>
                <el-tab-pane :label="$lang.contactInfo" name="contactInfo">
                    <v-table  :data="concats"   style='marginTop:10px'/>
                </el-tab-pane>
                <el-tab-pane :label="$lang.tradeHistory"  name="tradeHistory">
<!--                  <v-table  :data="tabData"   style='marginTop:10px'/>-->
                </el-tab-pane>
                <el-tab-pane :label="$lang.inquireHistory"  name="inquireHistory">
<!--                  <v-table  :data="tabData"   style='marginTop:10px'/> -->
                </el-tab-pane>
                <el-tab-pane :label="$lang.remark" name="remark">
                    <v-remark  
                     style='marginTop:10px'
                     :tableData='remarkData'
                     />
                </el-tab-pane>
                <el-tab-pane :label="$lang.attchment" name="attchment">


                   <v-attachment></v-attachment>
                </el-tab-pane>

            </el-tabs>
        </div>

<!--     <VCompareList :config="compareConfig"></VCompareList>-->

    </div>
</template>

<script>
    import VCompareList from '../../product/compareList'
    import VRemark from '../../product/addlineTable'
    import VAttachment from '../attachment'
    import {
        VTable
    } from '@/components/index';

    export default {
        name: "souringDetail",
        components: {
            VTable,
            VCompareList,
            VRemark,
            VAttachment
        },
        data() {
            return {
                noEdit: true,
                id: this.$route.query.id,
                tabName: 'address', //默认打开的tab
                basicDate: '',
                accounts: [],
                concats: [],
                address: [],
                remarkData: [],
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
            //..................获取数据
            get_data() {
                this.$ajax.get(this.$apis.get_supplier_id, {
                        id: this.id
                    })
                    .then(res => {
                        this.basicDate = res;
                        this.accounts = this.$getDB(this.$db.supplier.detailTable, res.accounts);
                        this.address = this.$getDB(this.$db.supplier.detailTable, res.address);
                        this.concats = this.$getDB(this.$db.supplier.detailTable, res.concats);
                    })
                    .catch((res) => {

                    });
            },
            //.......获取remark列表
            get_remark() {
                this.$ajax.post(this.$apis.post_supplier_list_remark, {
                    id: this.id,
                    pn: 1,
                    ps: 10,

                }).then((res) => {               
                   
                }).catch((res) => {
                    console.log(res)
                })
            },
            //.........增加remark
         add_Remark(){
               this.$ajax.post(this.$apis.post_supplier_list_remark, {
                }).then((res) => {               
                    
                }).catch((res) => {
                    console.log(res)
                })
         },
            //.........删除remark
         delete_Remark(){
             this.$ajax.post(this.$apis.post_supplier_list_remark, {
                    
                }).then((res) => {               
                   
                }).catch((res) => {
                    console.log(res)
                })
         }
        },
        created() {
            this.get_data()
            this.get_remark()
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

    /*
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
*/

</style>
