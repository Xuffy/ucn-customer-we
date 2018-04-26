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
                     {{$i._baseText.messageBoard}}
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
                 {{$i._baseText.productInfo}}
             </div>
             <div class="pro_button">
                  <el-button  @click="dialogAddproduct = true" :disabled='statusModify'>{{$i._baseText.addproduct}}</el-button>
                  <el-button type='danger' @click='removeProduct' :disabled='statusModify'>{{$i._baseText.remove}}</el-button>

             </div>
             <div class="pro_table">
                   <v-table  
                         :data.sync="newProductTabData"
                        :buttons="productInfoBtn"
                        :loading="tableLoad"
                        @action="producInfoAction"
                        @change-checked="changeChecked"
                        :rowspan="2"/>
             </div>
         </div>
<!--         caculate-->
         <v-caculate :disabled=true ref='caculate' ></v-caculate>
<!--         底部固定按钮区域-->
         <div class="footer">
             <div class="footer_button" v-if='statusModify'>
                 <el-button  @click='modify'>{{$i._baseText.modify}}</el-button>
                 <el-button >{{$i._baseText.confirm}}</el-button>
                 <el-button  :disabled='true'>{{$i._baseText.download}}</el-button>
                  <el-button >{{$i._baseText.createOrder}}</el-button>
                   <el-button >{{$i._baseText.cancel}}</el-button>
                 <el-checkbox v-model="checked">{{$i._baseText.markAsImportant}}</el-checkbox>
                 <el-checkbox v-model="checked">{{$i._baseText.highlightTheDifferent}}</el-checkbox>
             </div>
               <div class="footer_button" v-else>
                 <el-button >{{$i._baseText.send}}</el-button>
                 <el-button type='danger' @click='modifyCancel'>{{$i._baseText.cancel}}</el-button>
             </div>
         </div>
<!--                  addproduct弹窗区域-->
           <el-dialog :title="$i._baseText.addproduct" :visible.sync="dialogAddproduct" width='80%'>
                       <el-tabs v-model="TabsAddproduct" type="card" >
                        <el-tab-pane :label="$i._baseText.fromNewSearch" name="FromNewSearch">
                           <v-product                     
                           :hideBtns="true"
                                :hideBtn="true"
                                @handleOK="getList"
                           ></v-product>
                        </el-tab-pane>
                        <el-tab-pane :label="$i._baseText.fromMyBookmark" name="FromMyBookmark">
                           <v-product :hideBtns="true"></v-product>
                        </el-tab-pane>
                      </el-tabs>
           </el-dialog>
           
            <v-history-modify  
               @save="save"            
                ref="HM"
            >
        </v-history-modify>
  </div>
</template>

<script>
    import responsibility from '../creatOrder/responsibility.vue'
    import basicinfo from '../creatOrder/basicinfo.vue'
    import VProduct from '@/views/product/addProduct';
    import attchment from '../creatOrder/attachment'
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
            VProduct,
            attchment,
            VPayment,
            VTable,
            messageBoard,
            VCaculate,
            VHistoryModify,

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
                orderId: this.$route.query.orderId,
                loading: false, //表格加载
                id_type: '',
                historyColumn: {},
                newProductTabData: [],
                productTabData: [],
                tableLoad: false,
                oSwitch: false, //VHistory 组件开关状态
                submitData: {
                    deleteDetailIds: []
                },
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
            modifyCancel() { //页面编辑取消
                this.newProductTabData = this.productTabData;
                this.productCancel();
                this.statusModify = true;
            },
            onAction(item, type) {
                //                console.log(item, type)
            },
            //........获取数据
            get_data() {
                this.$ajax.get(this.$apis.detail_order, {
                        id: this.orderId
                    })
                    .then((res) => {
                        //                        var copy = Object.assign({}, res);
                        //                        delete copy.orderResponsibilityList
                        //                        delete copy.skuList
                        //..........basicinfo
                        this.$refs.basicinfo.formItem = res;
                        this.$refs.caculate.caculateForm = res
                        //..........responsibility
                        this.$refs.responsibility.tableData = res.orderResponsibilityList
                        //..........attachment

                        //..........productinfo
                        this.newProductTabData = this.$getDB(this.$db.order.productInfo, this.$refs.HM.getFilterData(res.skuList),
                            item => {
                                return item;
                            });
                        this.productTabData = this.$getDB(this.$db.order.productInfo, this.$refs.HM.getFilterData(res.skuList),
                            item => {
                                return item;
                            });
                        //..........calculate

                        this.tableLoad = false;
                    })
                    .catch((res) => {
                        this.tableLoad = false;

                    });
            },
            //.........按钮操作
            producInfoAction(data, type) { //Produc info 按钮操作
                this.id_type = 'producInfo';
                this.historyColumn = this.$db.order.productInfo;
                switch (type) {
                    case 'histoty':

                        this.fnBasicInfoHistoty(data, 'productInfo', {
                            type: 'histoty',
                            data: data.id.value
                        });
                        break;
                    case 'modify':
                        this.oSwitch = true;
                        this.fnBasicInfoHistoty(data, 'productInfo', {
                            type: 'modify',
                            data: data.id.value
                        });
                        break;
                }
            },
            productInfoBtn(item) { //Product info 按钮创建
                if (!this.statusModify && !item._disabled) return [{
                    label: 'Modify',
                    type: 'modify'
                }, {
                    label: 'Histoty',
                    type: 'histoty'
                }, {
                    label: 'Detail',
                    type: 'detail'
                }];
                if (this.statusModify && item._disabled) return [{
                    label: 'Modify',
                    type: 'modify'
                }, {
                    label: 'Histoty',
                    type: 'histoty'
                }, {
                    label: 'Detail',
                    type: 'detail'
                }];
                if (!item._disabled) return [{
                    label: 'Histoty',
                    type: 'histoty',
                    _disabled: false
                }, {
                    label: 'Detail',
                    type: 'detail',
                    _disabled: false
                }];
            },
            changeChecked(item) { //获取选中的单 集合
                this.checkedAll = item;
            },
            //..........addproduct 弹窗
            getList(item) {
                let tabData = [];
                item.forEach(items => {
                    items._checked = false;
                    tabData.push(Object.assign({}, items))
                });
                this.newProductTabData = tabData;
                this.dialogAddproduct = false;
            },
            fnBasicInfoHistoty(item, type, config) { //查看历史记录
                let column;
                this.$ajax.post(this.$apis.get_order_history, {
                        orderId: this.orderId,
                        skuId: item.id.value
                    })
                    .then(res => {
                        let arr = [];
                        column = this.$db.order.productInfo;
                        _.map(this.newProductTabData, items => {
                            if (_.findWhere(items, {
                                    'key': 'id'
                                }).value === config.data) arr.push(items)
                        });
                        if (config.type === 'histoty') {
                            this.$refs.HM.init(arr, this.$getDB(column, this.$refs.HM.getFilterData(res.datas)), false);
                        } else {
                            this.$refs.HM.init(arr, this.$getDB(column, this.$refs.HM.getFilterData(res.datas)), true);
                        }
                    });
            },
            getInquiryDetail() { //获取 Inquiry detail 数据
                this.$ajax.get(`${this.$apis.GET_INQIIRY_DETAIL}/{id}`, {
                        id: 16
                    })
                    .then(res => {
                        //Product Info
                        console.log(res)
                        this.newProductTabData = this.$getDB(this.$db.inquiryOverview.productInfo, this.$refs.HM.getFilterData(res.details),
                            item => {
                                return item;
                            });

                        this.productTabData = this.$getDB(this.$db.inquiryOverview.productInfo, this.$refs.HM.getFilterData(res.details),
                            item => {
                                return item;
                            });
                        this.tableLoad = false;
                    })
                    .catch(err => {
                        this.tableLoad = false;
                    });
            },
            productModify() { //  提交 product 编辑 
                this.newProductTabData.forEach((item, index) => {
                    if (!item._remove && item._disabled) {
                        item._remove = true;
                        this.submitData.deleteDetailIds.push(item);
                    };
                    this.$set(this.newProductTabData, index, item);
                });
            },
            save(data) { //modify 编辑完成反填数据
                // 反填 productTabData
                this.newProductTabData = _.map(this.newProductTabData, val => {
                    if (_.findWhere(val, {
                            'key': 'id'
                        }).value + '' === _.findWhere(data[0], {
                            'key': 'id'
                        }).value + '' && !val._remark && !data[0]._remark) {
                        console.log(val)
                        val = data[0];
                        val._modify = true;
                    } else if (_.findWhere(val, {
                            'key': 'id'
                        }).value + '' === _.findWhere(data[1], {
                            'key': 'id'
                        }).value + '' && val._remark && data[1]._remark) {
                        val = data[1];
                        val._modify = true;
                    }
                    return val;
                });
            },
            removeProduct() { //删除product 某个单
                this.newProductTabData.forEach((item, index) => {
                    if (item._checked) {
                        item._disabled = true;
                        this.$set(this.newProductTabData, index, item);
                    };
                });
            },
            dataFilter(data) {
                let arr = [],
                    jsons = {},
                    json = {};
                data.forEach(item => {
                    jsons = {};
                    if (item._remark) { //拼装remark 数据
                        for (let k in item) {
                            jsons[k] = item[k].value;
                        }
                        json.fieldRemark = jsons;
                    } else {
                        json = {};
                        for (let k in item) {
                            if (json[k] === 'fieldRemark') {
                                json[k] = jsons;
                            } else {
                                json[k] = item[k].value;
                            }
                        };
                        arr.push(json);
                    }
                });
                return arr;
            },
            productCancel() { //  取消 product 编辑 
                this.newProductTabData.forEach((item, index) => {
                    if (!item._remove && item._disabled) {
                        item._disabled = false;
                        item._remove = false;
                    };
                    this.$set(this.newProductTabData, index, item);
                });
            },
            send() {
                let parentNode = this.dataFilter(this.newProductTabData);
                console.log(this.$filterModify(parentNode))
            }
        },
        mounted() {

        },
        created() {
            this.get_data()
            this.submitData.id = this.$route.query.id;
            //            this.getInquiryDetail()
        },
        watch: {
            newProductTabData(val, old) {
                console.log(val)
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
