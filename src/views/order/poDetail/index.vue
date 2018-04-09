<template>
  <div class="poOrder">
        <div class="title">New Order No.1121</div>
<!--         basicinfo-->
         <div class="basic">
               <div class='basicinfo_input'>                
                   <basicinfo :disabled='disabled' :podisabled=true ref='basicinfo'></basicinfo>
                   <attchment :disabled='disabled'></attchment>                       
              </div>
               <div class='basicinfo_message'>
                     <div class="message_div" v-show='switchStatus'>
                         <messageBoard ></messageBoard>
                     </div>
                     <div class="switch-btn" @click="boardSwitch">
                     {{$t('negotiation.text.messageBoard')}}
                     <i :class="switchStatus ? 'el-icon-arrow-right' : 'el-icon-arrow-left'"></i>
                    </div>
                   
                </div>
        </div>
 <!--             responsibility     -->
         <responsibility ref='responsibility' :disabled='disabled'></responsibility>
<!--         payment-->
<!--         <payment></payment>-->
<!--         product_details-->
         <div class="product_details" >
             <div class="pro_title">
                 {{$t('order.productinfo.productInfo')}}
             </div>
             <div class="pro_button">
                  <el-button  @click="dialogAddproduct = true" :disabled='disabled'>{{$t('order.buttonname.addProduct')}}</el-button>
                  <el-button  :disabled='disabled'>{{$t('order.buttonname.remove')}}</el-button>
                  <el-button  @click='placeLogisticPlan' :disabled='disabled'>{{$t('order.buttonname.placeLogisticPlan')}}</el-button>
             </div>
             <div class="pro_table">
                 <v-table  :data="tabData" data-key="supplier.tableData"  style='marginTop:10px'/>
             </div>
         </div>
<!--         底部固定按钮区域-->
         <div class="footer">
             <div class="footer_button" v-if='disabled'>
                 <el-button  @click='modify'>{{$t('order.buttonname.modify')}}</el-button>
                 <el-button >{{$t('order.buttonname.confirm')}}</el-button>
<!--                 <el-button type='primary' >{{$t('order.buttonname.copy')}}</el-button>-->
                 <el-button  :disabled='true'>{{$t('order.buttonname.cancelTheOrder')}}</el-button>
                 <el-checkbox v-model="checked">{{$t('order.buttonname.markAsImportant')}}</el-checkbox>
                 <el-checkbox v-model="checked">{{$t('order.buttonname.hideTheSame')}}</el-checkbox>
                 <el-checkbox v-model="checked">{{$t('order.buttonname.hightlightTheDifferent')}}</el-checkbox>
             </div>
               <div class="footer_button" v-else>
                 <el-button >{{$t('order.buttonname.send')}}</el-button>
                 <el-button type='danger' @click='cancel'>{{$t('order.buttonname.cancel')}}</el-button>
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
    import payment from '../../warehouse/paymentTable.vue'

    import {
        VTable,
        messageBoard
    } from '@/components/index';
    export default {
        name: 'poOrder',
        components: {
            responsibility,
            basicinfo,
            FromNewSearch,
            FromBookmark,
            attchment,
            payment,
            VTable,
            messageBoard
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
                switchStatus: false,
                tabColumn: [],
                tabData: []
            }
        },
        mounted() {
            //            console.log(this.$refs.responsibility.tableData)
        },
        created() {
            this.ajax.get('/supplierOverview', {
                    params: {}
                })
                .then(res => {
                    this.tabData = res.supplierdata


                })
                .catch((res) => {
                    console.log(res);
                });
        },
        methods: {
            //..............messageboard的缩进
            boardSwitch() {
                this.switchStatus = !this.switchStatus;
            },
            //..............编辑状态
            modify() {
                this.disabled = false
            },
            //.............跳入placeLogisticPlan
            placeLogisticPlan() {
                const {
                    href
                } = this.$router.resolve({
                    name: 'placeLogisticPlan',
                    query: {

                    }
                })
                window.open(href, '_blank')
            },
            //..............底部cancel
            cancel() {
                this.disabled = true
            }
        },
        watch: {

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
        z-index: 60;
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

    .switch-btn {
        width: 30px;
        position: absolute;
        left: -30px;
        top: 0;
        writing-mode: tb-rl;
        transform: rotate(180deg);
        cursor: pointer;
        background: #f2f2f2;
        line-height: 30px;
        height: 240px;
        text-align: right;
        font-size: 12px;
        color: #333;
        font-weight: bold;
        padding-bottom: 10px;
        border-radius: 0 5px 0 0;
        z-index: 11;
    }

    .switch-btn i {
        transition: all .5s ease;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        font-size: 16px;
        font-weight: bold;
        color: #c0c0c0;
    }

    .basic {
        display: flex;
        justify-content: space-between;
    }

    .message_div {
        width: 220px;
        /*        height: 600px;*/
    }

    .basicinfo_message {
        position: relative;
        margin-left: 40px;
    }

</style>
