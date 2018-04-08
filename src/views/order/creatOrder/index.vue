<template>
  <div class="creatOrder">
        <div class="title">New Order No.1121</div>
<!--         basicinfo-->
         <VBasicinfo ref='basicInfo' class='basicinfo'></VBasicinfo>
           <div class="basicinfo_other">
    <!--                order remark-->
                    <el-row>
                          <el-col :xs="24" :sm="24" :md="24" :lg="24">
                             <div class="order_remark">
                                 <div class='order_remark_title'>{{ $t('order.buttonname.orderRemark')}}</div>
                                 <div>
                                     <el-input
                                          type="textarea"
                                          :rows="4"
                                          placeholder=""
                                          v-model="textarea">
                                        </el-input>
                                 </div>
                                </div>  
                         </el-col>
    <!--                 attchment         -->
                          <el-col :xs="24" :sm="24" :md="24" :lg="24">
                             <div class="attchment">
                                <div class="order_remark_title">{{ $t('order.buttonname.attachment')}}</div>
                                <div>
                                    <VAttchment @uploadsuccess='uploadsuccess'></VAttchment>
                                </div>
                            </div>
                           </el-col>
                    </el-row>
                   </div>
<!--             responsibility     -->
         <VResponsibility></VResponsibility>
<!--         productinfo-->
         <div class="productinfo">
             <div class="pro_title">
                 {{$t('order.productinfo.productInfo')}}
             </div>
             <div class="pro_button">
                  <el-button  @click="dialogAddproduct = true">{{$t('order.buttonname.addProduct')}}</el-button>
                  <el-button type='danger'>{{$t('order.buttonname.remove')}}</el-button>
             </div>
             <div class="pro_table">
                     <v-simple-table :column="tabColumn" :data.sync="tabData" />
             </div>
         </div>
<!--         底部固定按钮区域-->
         <div class="footer">
             <div class="footer_button">
                 <el-button @click='send'>{{$t('order.buttonname.send')}}</el-button>
                 <el-button >{{$t('order.buttonname.saveAsDraft')}}</el-button>
                 <el-button  @click="dialogQuickcreate = true">{{$t('order.buttonname.quickCreate')}}</el-button>
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
                            <VFromNewSearch></VFromNewSearch>
                        </el-tab-pane>
                        <el-tab-pane :label="$t('order.buttonname.fromMyBookmark')" name="FromMyBookmark">
                            <VFromBookmark></VFromBookmark>
                        </el-tab-pane>
                      </el-tabs>
           </el-dialog>
  </div>
</template>

<script>
    /*  从子组件里面拿的值，这里通过ref拿的
                                            this.$refs.basicInfo.formItem  =>basicinfo那些输入框的值(不包括remark和attachment)
                                           */
    import VResponsibility from './responsibility.vue'
    import VBasicinfo from './basicinfo.vue'
    import VFromNewSearch from './FromNewSearch.vue'
    import VFromBookmark from './FromBookmark.vue'
    import VAttchment from './attchment'
    import {
        VSimpleTable
    } from '@/components/index';
    export default {
        name: 'creatOrder',
        components: {
            VResponsibility,
            VBasicinfo,
            VFromNewSearch,
            VFromBookmark,
            VAttchment,
            VSimpleTable
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
        /*        width: 600px;*/
        /*        display: flex;*/
        /*        align-items: center;*/
    }

    .order_remark .el-input {
        width: 100%;
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
