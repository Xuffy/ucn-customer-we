<template>
  <div class="creatOrder">
        <div class="title">New Order No.1121</div>
<!--         basicinfo-->
         <VBasicinfo ref='basicInfo' class='basicinfo'></VBasicinfo>
       
         <VAttchment :disabled=false class='attachment'></VAttchment>
<!--         <VExchange :list='exchangeRateList'></VExchange>-->
   
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
         <v-caculate></v-caculate>
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
                <VInquiry 
                   v-model=dialogQuickcreate
                  :selectionRadio=true
                    @addInquiry='text'
                ></VInquiry>
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
    import VAttchment from './attachment'
    import VCaculate from './caculate'
    import VDialogEdit from './dialogEdit'
    import VProduct from '@/views/product/addProduct';
    //    import VExchange from '@/components/base/oneLine'
    import VInquiry from '../../negotiation/children/addNewInqury'
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
            VAttchment,
            VTable,
            VDialogEdit,
            VCaculate,
            VHistoryModify,
            VProduct,
            //            VExchange,
            VInquiry
        },
        data() {
            return {
                textarea: "", //order remark输入内容
                checked: true, //底部单选 mark as important
                dialogQuickcreate: false, // 弹出框quickcreate弹窗区域
                dialogHistory: false, //弹出框 productinfo 弹窗区域
                dialogAddproduct: false,
                TabsAddproduct: 'FromNewSearch', //tab
                value: '',
                keyWord: '',
                newProductTabData: [],
                tableLoad: false, //表格加载状态  
                statusModify: false,
                id_type: '',
                historyColumn: {},
                oSwitch: false, //VHistory 组件开关状态
                checkedAll: '',
                exchangeRateList: [{
                        text: 'exchangeRate(￥-$)',
                        value: '',
                    },
                    {
                        text: 'exchangeRate($-￥)',
                        value: '',
                    },
                    {
                        text: 'exchangeRate(￥-€)',
                        value: '',
                    },
                    {
                        text: 'exchangeRate(€-￥)',
                        value: '',
                    },
                    {
                        text: 'exchangeRate($-€)',
                        value: '',
                    },
                    {
                        text: 'exchangeRate(€-$)',
                        value: '',
                    }
                ],
            }
        },
        methods: {
            text(data) {
                console.log(data)
            },
            //......................提交
            send() {
                //  if (!this.$refs.basicInfo.submitForm()) { // return // }
                var params = {
                    "ownerId": 0,
                    "companyId": 0,
                    "tenantId": 0,
                    "version": 0,
                    "orderNo": "2311",
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
                    "skuList": [{
                        timeZone: 0,
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
                        "skuDescCn": "1",
                        "skuDescEn": "1",
                        "skuRateValueAddedTax": 2,
                        "skuDescCustomer": "1",
                        "skuNameCustomer": "1",
                        "skuCustomerSkuCode": "1",
                        "skuSupplierCode": "1",
                        "skuSupplierName": "1",
                        "skuCode": "1",
                        "skuUnit": "1",
                        "skuFormation": "1",
                        "skuMaterialEn": "1",
                        "skuMaterialCn": "1",
                        "skuColourEn": "1",
                        "skuColourCn": "1",
                        "skuDeliveryDates": 2,
                        "skuDesign": "1",
                        "skuNoneSellCountry": 2,
                        "skuApplicableAge": 3,
                        "skuExpireDates": 3,
                        "skuExpireUnit": "1",
                        "skuComments": "3",
                        "skuReadilyAvailable": true,
                        "skuAvailableQty": 3,
                        "skuMainSaleCountry": 3,
                        "skuMainSaleArea": "1",
                        "skuProductionDates": 3,
                        "skuQualityStander": "1",
                        "skuYearListed": 1523404800000,
                        "skuUseDisplayBox": true,
                        "skuDisplayBoxQty": 3,
                        "skuOtherPackInfoCn": "1",
                        "skuOtherPackInfoEn": "1",
                        "skuAdjustPackage": true,
                        "skuLengthWidthHeight": "1",
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
                        "sukCategoryOne": "1",
                        "sukCategoryTwo": "1",
                        "sukCategoryThree": "1",
                        "sukCategoryFour": "1",
                        "sukSaleStatus": 2,
                        "sukLabel": "1",
                        "sukBarCode": "1",
                        "sukInnerPackBarCode": "1",
                        "sukInnerPackLabel": "1",
                        "sukInnerPackCode": "1",
                        "sukShippingMarks": "1",
                        "sukOuterCartonBarCode": "1",
                        "sukOuterCartonCode": "1",
                        "sukLabelPic": "1",
                        "sukLabelDesc": "1",
                        "sukPkgMethodPic": "1",
                        "sukInnerCartonPic": "1",
                        "sukOuterCartonPic": "1",
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
                    //                    responsibilityList: this.$refs.responsibility.tableData,
                }
                // var basic = this.$refs.basicInfo.formItem
                //   _.extendOwn(params, basic)
                //  console.log(params)
                this.$ajax.post(this.$apis.add_order, params)
                    .then(res => {
                        console.log(res)
                    })
                    .catch((res) => {
                        console.log(res)
                    });
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
            producInfoAction(data, type) { //Produc info 按钮操作
                this.id_type = 'producInfo';
                this.historyColumn = this.$db.inquiryOverview.productInfo;
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
                        column = this.$db.inquiryOverview.productInfo;
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
            //...........................................带入数据
            //supplier带入
            getSupplierDetail() {

            },
            //inquiry带入
            getInquiryDetail(id) { //获取 Inquiry detail 数据
                this.$ajax.get(`${this.$apis.GET_INQIIRY_DETAIL}/{id}`, {
                        id: id
                    })
                    .then(res => {
                        //basicinfo /*supplierName  quotationNo incoterm  payment departureCountry departurePort destinationCountry destinationPort transport*/     
                        this.$refs.basicInfo.formItem.supplierName = res.supplierName
                        this.$refs.basicInfo.formItem.quotationNo = res.quotationNo
                        this.$refs.basicInfo.formItem.incoterm = res.incoterm
                        this.$refs.basicInfo.formItem.payment = res.payment
                        this.$refs.basicInfo.formItem.departureCountry = res.departureCountry
                        this.$refs.basicInfo.formItem.departurePort = res.departurePort
                        this.$refs.basicInfo.formItem.destinationCountry = res.destinationCountry
                        this.$refs.basicInfo.formItem.destinationPort = res.destinationPort
                        this.$refs.basicInfo.formItem.transport = res.transport
                        //Product Info
                        this.newProductTabData = this.$getDB(this.$db.order.productInfo, this.$refs.HM.getFilterData(res.details),
                            item => {
                                return item;
                            });
                        this.tableLoad = false;
                    })
                    .catch(err => {
                        this.tableLoad = false;
                    });
            },
            //product带入
            getProductDetail() {

            },
        },
        created() {
            //判断从哪个地方带来的数据
            let fromData = this.$route.query.type
            switch (fromData) {
                case 'supplier':

                    break;
                case 'inquiry':
                    this.getInquiryDetail(this.$route.query.id)
                    break;
                case 'product':

                    break;
                default:
                    console.log("裸进")
            }
        },
        mounted() {
            this.getInquiryDetail(16)
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
