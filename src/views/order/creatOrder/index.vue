<template>
  <div class="creatOrder">
        <div class="title">New Order No.1121</div>
<!--         basicinfo-->
         <VBasicinfo ref='basicInfo' class='basicinfo'></VBasicinfo>
       
         <VAttchment :disabled=false class='attachment'></VAttchment>
         
   
<!--             responsibility     -->
         <VResponsibility></VResponsibility>
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
                            <VFromNewSearch></VFromNewSearch>
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
    import VFromNewSearch from './FromNewSearch.vue'
    import VFromBookmark from './FromBookmark.vue'
    import VQuickCreate from './QuickCreate.vue'
    import VAttchment from './attchment'
    import VCaculate from './caculate'
    import {
        VTable
    } from '@/components/index';
    export default {
        name: 'creatOrder',
        components: {
            VResponsibility,
            VBasicinfo,
            VFromNewSearch,
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
                options: [{
                    id: '1',
                    label: 'Inquiry No'
                }, {
                    id: '2',
                    label: 'Sku Code'
                }, ],
                tabData: [], //表格数据
                loading: false, //表格加载状态
                params:{
                "ownerId": 0,
                "companyId": 0,
                "tenantId": 0,
                "version": 0,
                "orderNo": "2311122",
                "customerOrderNo": "",
                "customerNo": "",
                "customerName": "",
                "supplierOrderNo": "",
                "supplierName": "",
                "supplierNo": "",
                "quotationNo": "",
                "status": 9,
                "deliveryDt": 1523477789000,
                "actDeliveryDt": 1523477806000,
                "incoterm": -1,
                "incotermArea": -1,
                "payment": -1,
                "lcNo": "1",
                "departureCountry": "",
                "departurePort": "",
                "destCountry": "",
                "destPort": "",
                "transport": -1,
                "customerAgreementNo": "1",
                "customerAgreementDt": 1523477845000,
                "paymentDays": 1,
                "paymentStatus": -1,
                "remark": "",
                "important": false,
                "attachment": false,
                "remind": false,
                "archive": false,
                "currency": 1,
                "paymentRemark": "1",
                "totalSkuPrice": 1,
                "paidAmount": 0,
                "unpaidAmount": 0,
                "totalQty": 1,
                "totalOuterCartonQty": 1,
                "totalGrossWeight": 1,
                "totalNetWeight": 1,
                "totalVolume": 1,
                "skuQty": 1,
                "inboundQty": 0,
                "deliveredQty": 0,
                "draftCustomer": false,
                "draftSupplier": false,
                "recycleCustomer": true,
                "recycleSupplier": false,
//        "responsibilityList": [
//               {"entryId": 1,
//                "entryDt": 1523683403196,
//                "entryName": "test@admin",
//                "updateId": 1,
//                "updateDt": 1523683403196,
//                "updateName": "test@admin",
//                "id": null,
//                "orderId": null,
//                "ownerId": 0,
//                "companyId": 0,
//                "tenantId": 0,
//                "version": 0,
//                "customer": "1211",
//                "supplier": "2",
//                "remark": "",
//                "actualDt": 1523609904000
//            }],
        "skuList": [
               {
                "entryId": 0,
                "entryDt": 1523477863000,
                "entryName": "",
                "updateId": 1,
                "updateDt": 1523609904000,
                "updateName": "test@admin",
                "orderId": null,
                "ownerId": 0,
                "companyId": 0,
                "tenantId": 0,
                "version": 0,
                "customer": "11",
                "supplier": "2",
                "remark": "",
                "actualDt": 1523609904000, 
                "skuPic": "",
                "skuStatus": 0,
                "skuBarcode": "1",
                "skuNameCn": "1",
                "skuNameEn": "",
                "skuDescCn": "",
                "skuDescEn": "",
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
                "skuMinOrderQty": 2,
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
                "skuRateValueAddedTax":" ",
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
                "skuMinInventory": 1,
                "skuId": 1,
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
                "skuOuterCartonQty": 8,
                "skuOuterCartonLength": 8,
                "skuOuterCartonWidth": 8,
                "skuOuterCartonHeight": 8,
                "skuOuterCartonNetWeight": 8,
                "skuOuterCartonRoughWeight": 8,
                "skuOuterCartonVolume": 8,
                "skuOuterCartonMethodCn": "",
                "skuOuterCartonMethodEn": "",
                "skuOem": 0,
                "skuFobCurrency": 2,
                "skuFobPrice": 0,
                "skuFobPort": "",
                "skuExwPrice": 0,
                "skuExwCurrency": 0,
                "skuOtherIncoterm": 0,
                "skuOtherIncotermPrice": 0,
                "skuOtherIncotermArea": 0,
                "skuOtherIncotermCurrency": 0,
                "sukQty": 0,
                "sukPrice": 0            
            }
        ]
        
    }
            }
        },
        created() {

        },
        mounted() {

        },
        methods: {
            //.......提交数据
            submit() {
                this.$ajax.post(this.$apis.post_supplier_listbookmark, this.params)
                    .then(res => {
                        //                        this.tabData = this.$getDB(this.$db.supplier.overviewtable, res.datas);
                        console.log(res)


                    })
                    .catch((res) => {

                    });
            },
            //......................提交
            send() {
                //简单的正则
//                if (this.$refs.basicInfo.submitForm()) {
//                    return
//                }
//                var params = {
//                    basic: [this.$refs.basicInfo.formItem],
//                    responsibilityList: [],
//                    skuList: []
//                }
                 this.$ajax.post(this.$apis.add_order,this.params)
                    .then(res => {
                       console.log(res)
                    })
                    .catch((res) => {
                       console.log(res)
                    });
                console.log(params)
            },
            onAction(item, type) {
                if (type === 1) {
                    this.windowOpen('/product/sourcingDetail', '')
                } else if (type === 2) {
                    this.dialogHistory = true
                }
            },
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
