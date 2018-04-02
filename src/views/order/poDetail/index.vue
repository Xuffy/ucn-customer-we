<template>
  <div class="poOrder">
        <div class="title">New Order No.1121</div>
<!--         basicinfo-->
           <basicinfo :disabled='disabled'></basicinfo>
           <div class="basicinfo_other">
    <!--                order remark-->
                    <el-row>
                          <el-col :xs="24" :sm="24" :md="24" :lg="12">
                             <div class="order_remark">
                                 <div class='order_remark_title'>{{ $t('order.buttonname.orderRemark')}}</div>
                                 <div>
                                     <el-input
                                          type="textarea"
                                          :rows="4"
                                          placeholder="请输入内容"
                                          v-model="textarea">
                                        </el-input>
                                 </div>
                                </div>  
                         </el-col>
    <!--                 attchment         -->
                          <el-col :xs="24" :sm="24" :md="24" :lg="12">
                             <div class="attchment">
                                <div class="order_remark_title">{{ $t('order.buttonname.attachment')}}</div>
                                <div>
                                    <attchment></attchment>
                                </div>
                            </div>
                           </el-col>
                    </el-row>
                   </div>
<!--             responsibility     -->
         <responsibility></responsibility>
<!--         payment-->
<!--         <payment></payment>-->
<!--         qc order-->
         <qcorder></qcorder>
<!--          logistic order-->
           <qcorder></qcorder>
<!--         product_details-->
         <div class="product_details">
             <div class="pro_title">
                 {{$t('order.productinfo.productInfo')}}
             </div>
             <div class="pro_button">
                  <el-button type='primary' @click="dialogAddproduct = true">{{$t('order.buttonname.addProduct')}}</el-button>
                  <el-button type='primary'>{{$t('order.buttonname.remove')}}</el-button>
                  <el-button type='primary'>{{$t('order.buttonname.createQcOrder')}}</el-button>
                  <el-button type='primary'>{{$t('order.buttonname.placeLogisticPlan')}}</el-button>
             </div>
             <div class="pro_table">
                  <v-simple-table :column="tabColumn" :data.sync="tabData" />
             </div>
         </div>
<!--         底部固定按钮区域-->
         <div class="footer">
             <div class="footer_button">
                 <el-button type='primary' @click='modify'>{{$t('order.buttonname.modify')}}</el-button>
                 <el-button type='primary'>{{$t('order.buttonname.confirm')}}</el-button>
                 <el-button type='primary' >{{$t('order.buttonname.copy')}}</el-button>
                 <el-button type='primary' :disabled='true'>{{$t('order.buttonname.cancelTheOrder')}}</el-button>
                 <el-checkbox v-model="checked">{{$t('order.buttonname.markAsImportant')}}</el-checkbox>
                 <el-checkbox v-model="checked">{{$t('order.buttonname.hideTheSame')}}</el-checkbox>
                 <el-checkbox v-model="checked">{{$t('order.buttonname.hightlightTheDifferent')}}</el-checkbox>
             </div>
         </div>
<!--                  addproduct弹窗区域-->
           <el-dialog :title="$t('order.buttonname.addProduct')" :visible.sync="dialogAddproduct" width='80%'>
                       <el-tabs v-model="TabsAddproduct" type="card" >
                        <el-tab-pane :label="$t('order.buttonname.fromNewSearch')" name="FromNewSearch">
                            <FromNewSearch></FromNewSearch>
                        </el-tab-pane>
                        <el-tab-pane :label="$t('order.buttonname.fromMyBookmark')" name="FromMyBookmark">
                            <FromBookmark></FromBookmark>
                        </el-tab-pane>
                      </el-tabs>
           </el-dialog>
  </div>
</template>

<script>
    import responsibility from '../creatOrder/responsibility.vue'
    import basicinfo from '../creatOrder/basicinfo.vue'
    import FromNewSearch from '../creatOrder/FromNewSearch.vue'
    import FromBookmark from '../creatOrder/FromBookmark.vue'
    import attchment from '../creatOrder/attchment'
    //    import payment from '../../warehouse/paymentTable.vue'
    import qcorder from './qcorder.vue'
    import {
        VSimpleTable
    } from '@/components/index';
    export default {
        name: 'poOrder',
        components: {
            responsibility,
            basicinfo,
            FromNewSearch,
            FromBookmark,
            attchment,
            //            payment,
            qcorder,
            VSimpleTable
        },
        data() {
            return {
                textarea: "", //order remark输入内容
                markAsImportant: true, //底部单选 mark as important
                hideTheSame: true, //底部单选 Hide The Same
                hightlightTheDifferent: true, //底部单选hightlightTheDifferent
                dialogAddproduct: false, //弹窗框 addproduct弹窗区域
                TabsAddproduct: 'FromNewSearch', //tab
                value: '',
                keyWord: '',
                disabled: true, //页面输入框是否可写
                checked: false,
                options: [{
                    id: '1',
                    label: 'Order No'
                }, {
                    id: '2',
                    label: 'Sku Code'
                }, ],
                tabColumn: [],
                tabData: []
            }
        },
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
        methods: {
            modify() {
                this.disabled = false
            }
        }
    }

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .title {
        font-weight: bold;
        font-size: 18px;
        height: 50px;
        line-height: 50px;
        color: #666666;
        border-bottom: 1px solid #ccc;
    }

    .pro_title {
        font-size: 14px;
        height: 60px;
        line-height: 60px;
        border-bottom: 1px solid #ccc;
    }

    .order_remark {
        width: 372px;
    }

    .order_remark_title {
        margin-bottom: 20px;
        font-size: 16px;
    }

    .basicinfo_other {
        margin-left: 80px;
        /*
        display: flex;
        justify-content:space-between;
*/
    }

    .attchment {
        /*        width: 400px;*/
        /*        margin-left: 20px;*/
    }

    .pro_button {
        margin-top: 10px;
    }

    .pro_table {
        margin-top: 10px;
        padding-bottom: 60px;
    }

    .footer {
        width: 100%;
        height: 60px;
        background-color: white;
        position: fixed;
        bottom: 0;
        line-height: 60px;
    }

    .select-wrap {
        display: flex;
        height: 60px;
        align-items: center;
        justify-content: flex-end;
        box-sizing: border-box;
    }

    .select {
        width: 110px;
        margin-right: 5px;
    }

</style>
