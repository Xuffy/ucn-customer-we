<template>
  <div class="poOrder">
        <div class="title">New Order No.1121</div>
<!--         basicinfo-->
         <div class="basic">
               <div class='basicinfo_input'>                
                   <basicinfo :disabled='statusModify' :podisabled=true ref='basicinfo'></basicinfo>
                   <attchment :disabled='statusModify'></attchment>                       
              </div>
               <div class='basicinfo_message'>
                     <div class="message_div" v-show='switchStatus'>
<!--                         <messageBoard ></messageBoard>-->
                     </div>
                     <div class="switch-btn" @click="boardSwitch">
                     {{$i.baseText.messageBoard}}
                     <i :class="switchStatus ? 'el-icon-arrow-right' : 'el-icon-arrow-left'"></i>
                    </div>
                   
                </div>
        </div>
 <!--             responsibility     -->
         <responsibility ref='responsibility' :disabled='statusModify'></responsibility>
<!--         payment-->
         <v-payment></v-payment>
<!--         product_details-->
         <div class="product_details" >
             <div class="pro_title">
                 {{$i.baseText.productInfo}}
             </div>
             <div class="pro_button">
                  <el-button  @click="dialogAddproduct = true" :disabled='statusModify'>{{$i.baseText.addproduct}}</el-button>
                  <el-button type='danger' :disabled='statusModify'>{{$i.baseText.remove}}</el-button>

             </div>
             <div class="pro_table">
                   <v-table  :data="tabData" data-key="supplier.tableData" :buttons="[{label: 'detail', type: 1},{label: 'history', type: 2}]" 
                           @action="onAction"
                          :loading='loading'
                           style='marginTop:10px'/>
             </div>
         </div>
<!--         caculate-->
         <v-caculate :disabled='statusModify'></v-caculate>
<!--         底部固定按钮区域-->
         <div class="footer">
             <div class="footer_button" v-if='statusModify'>
                 <el-button  @click='modify'>{{$i.baseText.modify}}</el-button>
                 <el-button >{{$i.baseText.confirm}}</el-button>
                 <el-button  :disabled='true'>{{$i.baseText.download}}</el-button>
                  <el-button >{{$i.baseText.createOrder}}</el-button>
                   <el-button >{{$i.baseText.cancel}}</el-button>
                 <el-checkbox v-model="checked">{{$i.baseText.markAsImportant}}</el-checkbox>
                 <el-checkbox v-model="checked">{{$i.baseText.highlightTheDifferent}}</el-checkbox>
             </div>
               <div class="footer_button" v-else>
                 <el-button >{{$i.baseText.send}}</el-button>
                 <el-button type='danger' @click='cancel'>{{$i.baseText.cancel}}</el-button>
             </div>
         </div>
<!--                  addproduct弹窗区域-->
           <el-dialog :title="$i.baseText.addproduct" :visible.sync="dialogAddproduct" width='80%'>
                       <el-tabs v-model="TabsAddproduct" type="card" >
                        <el-tab-pane :label="$i.baseText.fromNewSearch" name="FromNewSearch">
                            <FromNewSearch></FromNewSearch>
                        </el-tab-pane>
                        <el-tab-pane :label="$i.baseText.fromMyBookmark" name="FromMyBookmark">
                            <FromBookmark></FromBookmark>
                        </el-tab-pane>
                      </el-tabs>
           </el-dialog>
           
            <v-history-modify 
               
                ref="HM"
            >
        </v-history-modify>
  </div>
</template>

<script>
    import responsibility from '../creatOrder/responsibility.vue'
    import basicinfo from '../creatOrder/basicinfo.vue'
    import FromNewSearch from '../creatOrder/FromNewSearch.vue'
    import FromBookmark from '../creatOrder/FromBookmark.vue'
    import attchment from '../creatOrder/attchment'
    import VCaculate from '../creatOrder/caculate'
    import VPayment from './payment.vue'

    import {
        VTable,
        messageBoard,
        VHistoryModify
    } from '@/components/index';
    export default {
        name: 'poOrder',
        components: {
            responsibility,
            basicinfo,
            FromNewSearch,
            FromBookmark,
            attchment,
            VPayment,
            VTable,
            messageBoard,
            VCaculate,
            VHistoryModify
        },
        data() {
            return {
                markAsImportant: true, //底部单选 mark as important
                hideTheSame: true, //底部单选 Hide The Same
                hightlightTheDifferent: true, //底选hightlightTheDifferent
                dialogAddproduct: false, //弹窗框 addproduct弹窗区域
                TabsAddproduct: 'FromNewSearch', //tab
                statusModify: true, //页面输入框是否可写
                checked: false,
                switchStatus: false,
                Data: [],
                tabData: [],
                loading: false, //表格加载
                id_type: '',
                historyColumn: {},
            }
        },
        methods: {
            //..............messageboard的缩进
            boardSwitch() {
                this.switchStatus = !this.switchStatus;
            },
            //..............编辑状态
            modify() {
                this.statusModify = false
            },
            //..............底部cancel
            cancel() {
                this.statusModify = true
            },
            onAction(item, type) {
                console.log(item, type)

            },
            //........获取数据
            get_data() {
                this.$ajax.get(this.$apis.detail_order, {
                        id: this.$route.query.id
                    })
                    .then((res) => {                
                        var copy = Object.assign({}, res);
                       delete copy.orderResponsibilityList
                       delete copy.skuList
                     
                        //..........basicinfo
                        this.$refs.basicinfo.formItem =copy;                      
                        //..........responsibility
                        this.$refs.responsibility.tableData = res.orderResponsibilityList
                        //..........attachment
                        //..........productinfo
                        //..........calculate
                    })
                    .catch((res) => {
                        console.log(res)
                    });
            },
          //.............product 按钮
             producInfoAction(data, type) { //Produc info 按钮操作
            this.id_type = 'producInfo';
            this.historyColumn = this.$db.inquiryOverview.productInfo;
            switch(type) {
                    case 'histoty':
                       
//                        this.fnBasicInfoHistoty(data, 'productInfo');
                        break;
                    case 'modify':
                      
//                        this.oSwitch = true;
//                        this.fnBasicInfoHistoty(data, 'productInfo', data.id.value);
//                        break;
            }
         },
      //.........按钮操作
          producInfoAction(data, type) { //Produc info 按钮操作
        this.id_type = 'producInfo';
        this.historyColumn = this.$db.inquiryOverview.productInfo;
        switch(type) {
                case 'histoty':
//                    this.fnBasicInfoHistoty(data, 'productInfo');
                    break;
                case 'modify':
//                    this.oSwitch = true;
//                    this.fnBasicInfoHistoty(data, 'productInfo', data.id.value);
                    break;
        }
   },
        },
        mounted() {

        },
        created() {
            this.get_data()
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
        padding: 0 15px;
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
        /*        padding-bottom: 60px;*/
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
