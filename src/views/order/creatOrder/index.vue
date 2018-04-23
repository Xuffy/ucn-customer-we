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
                     <v-table  
                            :data.sync="newProductTabData" 
                            :buttons="productInfoBtn"
                            @action="producInfoAction"
                            :loading='tableLoad'
                            @change-checked="changeChecked"
                            :rowspan="2"
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
                              <v-product 
                                :hideBtns="true"
                                :hideBtn="true"
                                @handleOK="getList"
                            ></v-product>
                        </el-tab-pane>
                      </el-tabs>
           </el-dialog>
           <el-dialog  :visible.sync="dialogHistory" width='70%'>
               
           </el-dialog>
           <v-history-modify 
                @save="save"
                ref="HM"
            >
            </v-history-modify>
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
        VTable,
        VHistoryModify
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
            VCaculate,
            VHistoryModify,
            VProduct
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
                productTabData: [],
                newProductTabData: [], 
                tableLoad: false, //表格加载状态  
                statusModify: true,
                id_type: '',
                historyColumn: {},
                oSwitch: false, //VHistory 组件开关状态
                checkedAll: '',
            }
        },
        methods: {
            //......................提交
            send() {
                //                if (!this.$refs.basicInfo.submitForm()) { // return // }
                var params = {
                    "skuList": [{
                        "sukQty": 22,
                        "skuFobPrice": 3,
                        "skuOuterCartonQty": 3,
                        "skuOuterCartonRoughWeight": 4,
                        "outerCartonQty": 33,
                        "skuOuterCartonNetWeight": 33,
                        "skuSysCode": 33,
                        "skuOuterCartonVolume": 333,
                        "skuId": 2221,
                        "skuMinOrderQty": 2,
                        "skuMinInventory": 2,
                        "skuPic": "1",
                        "skuStatus": 0,
                        "skuBarcode": "1",
                        "skuNameCn": "1",
                        "skuDescCn": "",
                        "skuDescEn": "",
                        "skuRateValueAddedTax": 2,
                        "skuDescCustomer": "",
                        "skuNameCustomer": "",
                        "skuCustomerSkuCode": "",
                        "skuSupplierCode": "1",
                        "skuSupplierName": "",
                        "skuCode": "",
                        "skuUnit": "",
                        "skuFormation": "",
                        "skuMaterialEn": "",
                        "skuMaterialCn": "1",
                        "skuColourEn": "",
                        "skuColourCn": "1",
                        "skuDeliveryDates": 2,
                        "skuDesign": "",
                        "skuNoneSellCountry": 2,
                        "skuApplicableAge": 3,
                        "skuExpireDates": 3,
                        "skuExpireUnit": "",
                        "skuComments": "3",
                        "skuReadilyAvailable": true,
                        "skuAvailableQty": 3,
                        "skuMainSaleCountry": 3,
                        "skuMainSaleArea": "",
                        "skuProductionDates": 3,
                        "skuQualityStander": "",
                        "skuYearListed": 1523404800000,
                        "skuUseDisplayBox": true,
                        "skuDisplayBoxQty": 3,
                        "skuOtherPackInfoCn": "",
                        "skuOtherPackInfoEn": "",
                        "skuAdjustPackage": true,
                        "skuLengthWidthHeight": "",
                        "skuRecycle": false,
                        "skuCategoryId": 2,
                        "skuCustomerCreate": false,
                        "skuSupplierId": 2,
                        "skuTaxRefundRate": 1,
                        "skuCustomsCode": "sku_customs_code",
                        "skuCustomsNameCn": "1",
                        "skuCustomsNameEn": "2",
                        "skuTradeMarkCn": "1",
                        "skuTradeMarkEn": "2",
                        "skuCommodityInspectionCn": "1",
                        "skuCommodityInspectionEn": "2",
                        "skuDeclareElement": "2",
                        "skuOrigin": "2",
                        "skuInspectQuarantineCategory": "1",
                        "skuBrand": "2",
                        "skuBrandRemark": "2",
                        "skuBrandRelated": "1",
                        "skuCertificat": "2",
                        "skuGp20SkuQty": 1,
                        "skuGp40SkuQty": 1,
                        "skuHq40SkuQty": 1,
                        "skuTryDimension": 1,
                        "skuQtyPerTray": 1,
                        "skuSpecialTransportRequire": 1,
                        "skuInventoryCostMethod": 1,
                        "skuWarehourceDefault": "1",
                        "skuInventory": 1,
                        "skuSafeInventory": 1,
                        "sukCategoryOne": "",
                        "sukCategoryTwo": "",
                        "sukCategoryThree": "",
                        "sukCategoryFour": "",
                        "sukSaleStatus": 2,
                        "sukLabel": "",
                        "sukBarCode": "",
                        "sukInnerPackBarCode": "",
                        "sukInnerPackLabel": "",
                        "sukInnerPackCode": "",
                        "sukShippingMarks": "",
                        "sukOuterCartonBarCode": "",
                        "sukOuterCartonCode": "",
                        "sukLabelPic": "",
                        "sukLabelDesc": "",
                        "sukPkgMethodPic": "",
                        "sukInnerCartonPic": "",
                        "sukOuterCartonPic": "",
                        "sukSample": true,
                        "sukSampleQty": 2,
                        "sukSamplePrice": 2,
                        "sukDeliveredQty": 2,
                        "sukDepartureDt": 2,
                        "sukQuotationNo": "",
                        "sukModifyStatus": 2,
                        "sukRemarkOne": "",
                        "sukRemarkTwo": "",
                        "sukRemarkThree": "",
                        "sukAdditionalOne": "",
                        "sukAdditionalTwo": "",
                        "sukAdditionalThree": "",
                        "sukAdditionalFour": "",
                        "sukQualifiedQty": 2,
                        "sukInboundQty": 2,
                        "sukUntestedQty": 2,
                        "skuUnitWeight": 2,
                        "skuUnitLength": 3,
                        "skuUnitVolume": 8,
                        "skuLength": 8,
                        "skuWidth": 8,
                        "skuHeight": 8,
                        "skuNetWeight": 8,
                        "skuVolume": 8,
                        "skuMethodPkgCn": "",
                        "skuMethodPkgEn": "",
                        "skuInnerCartonUnit": "",
                        "skuInnerCartonQty": 8,
                        "skuInnerCartonLength": 8,
                        "skuInnerCartonWidth": 8,
                        "skuInnerCartonHeight": 8,
                        "skuInnerCartonWeightNet": 8,
                        "skuInnerCartonRoughWeight": 8,
                        "skuInnerCartonVolume": 8,
                        "skuInnerCartonDesc": "",
                        "skuInnerCartonMethodCn": "",
                        "skuInnerCartonMethodEn": "",
                        "skuOuterCartonUnit": "",
                        "skuOuterCartonDesc": "",
                        "skuInnerCartonOuterNum": 8,
                        "skuOuterCartonLength": 8,
                        "skuOuterCartonWidth": 8,
                        "skuOuterCartonHeight": 8,
                        "skuOuterCartonMethodCn": "",
                        "skuOuterCartonMethodEn": "",
                        "skuOem": 0,
                        "skuFobCurrency": 2,
                        "skuFobPort": "",
                        "skuExwPrice": 0,
                        "skuExwCurrency": 0,
                        "skuOtherIncoterm": 0,
                        "skuOtherIncotermPrice": 0,
                        "skuOtherIncotermArea": 0,
                        "skuOtherIncotermCurrency": 0,
                        "sukPrice": 0,
                        "fieldRemark": null
                    }],
                    responsibilityList: this.$refs.responsibility.tableData,
                }
                var basic = this.$refs.basicInfo.formItem
                _.extendOwn(params, basic)
                console.log(params)
                return;
                this.$ajax.post(this.$apis.add_order, params)
                    .then(res => {
                        console.log(res)
                    })
                    .catch((res) => {
                        console.log(res)
                    });
            },
            //..........addproduct 弹窗
            getList(item) {
                let tabData = [];
                item.forEach(items => {
                    items._checked = false;
                    tabData.push(Object.assign({}, items))
                });
                this.newProductTabData = tabData;
                console.log(this.newProductTabData)
                //                this.newProductTabData = this.$getDB(this.$db.inquiryOverview.productInfo);
                this.dialogAddproduct = false;
            },
            basicInfoBtn(item) { //Basic info 按钮创建
                if (item.id.value && this.statusModify) return [{
                    label: 'Modify',
                    type: 'modify'
                }, {
                    label: 'Histoty',
                    type: 'histoty'
                }];

                if (item.id.value) return [{
                    label: 'Histoty',
                    type: 'histoty'
                }];
            },
            productInfoBtn(item) { //Product info 按钮创建
                if (this.statusModify && !item._disabled) return [{
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
                    type: 'histoty'
                }, {
                    label: 'Detail',
                    type: 'detail'
                }];
            },
            producInfoAction(data, type) { //Produc info 按钮操作
                this.id_type = 'producInfo';
                this.historyColumn = this.$db.inquiryOverview.productInfo;
                switch (type) {
                    case 'histoty':
                        console.log('histoty')
                        this.fnBasicInfoHistoty(data, 'productInfo');
                        break;
                    case 'modify':
                        this.oSwitch = true;               
                        this.fnBasicInfoHistoty(data, 'productInfo', data.id.value);                   
                        break;
                }
            },
            changeChecked(item) { //获取选中的单 集合
                this.checkedAll = item;
            },
            save(data) { //modify 编辑完成反填数据
                // 反填 productTabData
                this.newProductTabData = _.map(this.newProductTabData, val => {
                    if (val.id.value === data[0].id.value && !val._remark && !data[0]._remark) {
                        val = data[0];
                        val._modify = true;
                    } else if (val.id.value === data[1].id.value && val._remark && data[1]._remark) {
                        val = data[1];
                        val._modify = true;
                    }
                    return val;
                });
            },
            fnBasicInfoHistoty(item, type, id) { //查看历史记录
                let column;
                this.$ajax.get(this.$apis.GET_INQUIRY_HISTORY, {
                        id: item.id.value
                    })
                    .then(res => {
                        let arr = [];
                        column = this.$db.inquiryOverview.productInfo;
                        this.newProductTabData.forEach((items, index) => {                         
                            if (items.id.value === id) {
                               
                                arr.push(items);
                            }
                        });
                        
                        this.$refs.HM.edit(arr, this.$getDB(column, this.$refs.HM.getFilterData(res)));
                    });
            },
        },
        created() {},
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
