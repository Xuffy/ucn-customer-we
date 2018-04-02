<template>
  <div class="creatOrder">
        <div class="title">New Order No.1121</div>
<!--         basicinfo-->
         <basicinfo ref='basicInfo'></basicinfo>
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
                                    <attchment @uploadsuccess='uploadsuccess'></attchment>
                                </div>
                            </div>
                           </el-col>
                    </el-row>
                   </div>
<!--             responsibility     -->
         <responsibility></responsibility>
<!--         productinfo-->
         <div class="productinfo">
             <div class="pro_title">
                 {{$t('order.productinfo.productInfo')}}
             </div>
             <div class="pro_button">
                  <el-button type='primary' @click="dialogAddproduct = true">{{$t('order.buttonname.addProduct')}}</el-button>
                  <el-button type='primary'>{{$t('order.buttonname.remove')}}</el-button>
             </div>
             <div class="pro_table">
                
             </div>
         </div>
<!--         底部固定按钮区域-->
         <div class="footer">
             <div class="footer_button">
                 <el-button type='primary' @click='send'>{{$t('order.buttonname.send')}}</el-button>
                 <el-button type='primary'>{{$t('order.buttonname.saveAsDraft')}}</el-button>
                 <el-button type='primary' @click="dialogQuickcreate = true">{{$t('order.buttonname.quickCreate')}}</el-button>
                 <el-checkbox v-model="checked">{{$t('order.buttonname.markAsImportant')}}</el-checkbox>
             </div>
         </div>
<!--              quickcreate弹窗区域-->
          <el-dialog :title="$t('order.buttonname.quickCreate')" :visible.sync="dialogQuickcreate">
                <div class="status">
                    <div class="select-wrap">
                        <div class="select">
                            <el-select v-model="value" placeholder="select">
                                <el-option
                                v-for="item in options"
                                :key="item.id"
                                :label="item.label"
                                :value="item.id" />
                            </el-select>
                        </div>
                        <el-input v-model="keyWord" clearable prefix-icon="el-icon-search" placeholder="search" style="width:150px;"></el-input>
                    </div>
                </div>
 
        </el-dialog>
<!--                  addproduct弹窗区域-->
           <el-dialog :title="$t('order.buttonname.addProduct')"  :visible.sync="dialogAddproduct" width='80%'>
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
    /*
                                                       从子组件里面拿的值，这里通过ref拿的
                                                       this.$refs.basicInfo.formItem  =>basicinfo那些输入框的值(不包括remark和attachment)
                                                    */
    import responsibility from './responsibility.vue'
    import basicinfo from './basicinfo.vue'
    import FromNewSearch from './FromNewSearch.vue'
    import FromBookmark from './FromBookmark.vue'
    import attchment from './attchment'
    export default {
        name: 'creatOrder',
        components: {
            responsibility,
            basicinfo,
            FromNewSearch,
            FromBookmark,
            attchment
        },
        data() {
            return {
                textarea: "", //order remark输入内容
                checked: true, //底部单选 mark as important
                dialogQuickcreate: false, // 弹出框quickcreate弹窗区域
                dialogAddproduct: false, //弹窗框 addproduct弹窗区域
                TabsAddproduct: 'FromNewSearch', //tab
                value: '',
                keyWord: '',
                options: [{
                    id: '1',
                    label: 'Inquiry No'
                }, {
                    id: '2',
                    label: 'Sku Code'
                }, ]
            }
        },
        created() {

        },
        mounted() {

        },
        methods: {
            uploadsuccess(data) {
                console.log(data)
            },
            //......................提交
            send() {
                //简单的正则
                if (this.$refs.basicInfo.submitForm()) {
                    console.log('in')
                }
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

    .pro_title {
        font-size: 14px;
        height: 60px;
        line-height: 60px;
        border-bottom: 1px solid #ccc;
        padding: 0 15px;
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
