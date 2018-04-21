<template>
  <div class="creatOrder">
        <div class="title">New Order No.1121</div>
<!--         basicinfo-->
         <VBasicinfo ref='basicInfo' class='basicinfo'></VBasicinfo>
       
         <VAttchment :disabled=false class='attachment'></VAttchment>
         
   
<!--             responsibility     -->
         <VResponsibility ref='responsibility'></VResponsibility>
<!--         productinfo-->
         <div class="productinfo">
             <div class="pro_title">
                 {{$i.productInfo}}
             </div>
             <div class="pro_button">
                  <el-button  @click="dialogAddproduct = true">{{$i.baseText.addproduct}}</el-button>
                  <el-button type='danger'>{{$i.baseText.remove}}</el-button>
             </div>
             <div class="pro_table">
                     <v-table  :data="tabData" data-key="supplier.tableData" :buttons="[{label: 'detail', type: 1},{label: 'history', type: 2}]" 
                           @action="onAction"
                          :loading='loading'
                           style='marginTop:10px'/>
             </div>
         </div>
<!--           caculate-->
<!--         <v-caculate></v-caculate>-->
<!--         底部固定按钮区域-->
         <div class="footer">
             <div class="footer_button">
                 <el-button @click='send'>{{$i.baseText.send}}</el-button>
                 <el-button >{{$i.baseText.saveAsDraft}}</el-button>
                 <el-button  @click="dialogQuickcreate = true">{{$i.baseText.quickCreate}}</el-button>
                 <el-checkbox v-model="checked">{{$i.baseText.markAsImportant}}</el-checkbox>
             </div>
         </div>
<!--              quickcreate弹窗区域-->
          <el-dialog :title="$i.baseText.quickCreate" :visible.sync="dialogQuickcreate" width='70%'>
<!--             <VQuickCreate></VQuickCreate>-->
        </el-dialog>
<!--                  addproduct弹窗区域-->
           <el-dialog :title="$i.baseText.fromNewSearch"  :visible.sync="dialogAddproduct" width='70%'>
                       <el-tabs v-model="TabsAddproduct" type="card" >
                        <el-tab-pane :label="$i.baseText.addproduct" name="FromNewSearch">
                            <v-product 
                                :hideBtns="true"
                                :hideBtn="true"
                                @handleOK="getList"
                            ></v-product>
                        </el-tab-pane>
                        <el-tab-pane :label="$i.baseText.fromMyBookmark" name="FromMyBookmark">
                            <VFromBookmark></VFromBookmark>
                        </el-tab-pane>
                      </el-tabs>
           </el-dialog>
           <el-dialog  :visible.sync="dialogHistory" width='70%'>
               
           </el-dialog>
  </div>
</template>

<script>
    /* this.$ref.basicInfo*/
    import VResponsibility from './responsibility.vue'
    import VBasicinfo from './basicinfo.vue'
    import VFromBookmark from './FromBookmark.vue'
    import VQuickCreate from './QuickCreate.vue'
    import VAttchment from './attchment'
    import VCaculate from './caculate'
    import VProduct from '@/views/product/addProduct';
    import {
        VTable
    } from '@/components/index';
    export default {
        name: 'creatOrder',
        components: {
            VResponsibility,
            VBasicinfo,
            VProduct,
            VFromBookmark,
            VAttchment,
            VTable,
            VQuickCreate,
            VCaculate
        },
        data() {
            return {
                textarea: "", //order remark输入内容
                checked: true, //底部单选 mark as important
                dialogQuickcreate: false, // 弹出框quickcreate弹窗区域
                dialogAddproduct: false, //弹窗框 addproduct弹窗区域
                dialogHistory: false, //弹出框 productinfo 弹窗区域
                TabsAddproduct: 'FromNewSearch', //tab
                value: '',
                keyWord: '',
                tabData: [], //表格数据
                loading: false, //表格加载状态      
            }
        },
        methods: {
            //......................提交
            send() {         
                if (this.$refs.basicInfo.submitForm()) {
                    return
                }
                var params = {
                    basic: [this.$refs.basicInfo.formItem],
                    responsibilityList: [],
                    skuList: []
                }
                this.$ajax.post(this.$apis.add_order, this.params)
                    .then(res => {
                        console.log(res)
                    })
                    .catch((res) => {
                        console.log(res)
                    });
                console.log(this.$refs.responsibility.tableData)
                
            },
            onAction(item, type) {
                if (type === 1) {
                    this.windowOpen('/product/sourcingDetail', {id: item.id.value})
                } else if(type === 2) {
                    this.dialogHistory = true
                }
            },
            //..........addproduct 弹窗
              getList(item) {
                  console.log(item)
           },
        
        },
        created() {
        },
        mounted() {
           
        },
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
        /*        width: 600px;*/
        /*        display: flex;*/
        /*        align-items: center;*/
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
        z-index: 60;
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
