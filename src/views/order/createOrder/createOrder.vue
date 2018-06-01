<template>
    <div class="create-order">
        <div class="title">
            {{$i.order.basicInfo}}
        </div>
        <el-form :modal="orderForm" ref="basicInfo" class="speForm" label-width="250px" :label-position="labelPosition">
            <el-row>
                <el-col class="speCol" v-for="v in $db.order.orderDetail" v-if="v.belong==='basicInfo' && !v.createHide" :key="v.key" :xs="24" :sm="v.fullLine?24:12" :md="v.fullLine?24:12" :lg="v.fullLine?24:12" :xl="v.fullLine?24:12">
                    <el-form-item :prop="v.key" :label="v.label">
                        <div v-if="v.type==='input'">
                            <el-input
                                    :placeholder="$i.order.pleaseInput"
                                    class="speInput"
                                    :disabled="v.disabled"
                                    v-model="orderForm[v.key]"></el-input>
                        </div>
                        <div v-else-if="v.type==='date'">
                            <el-date-picker
                                    :disabled="v.disabled"
                                    v-model="orderForm[v.key]"
                                    :placeholder="$i.order.pleaseChoose"
                                    class="speInput"
                                    align="right"
                                    type="date"
                                    :picker-options="pickerOptions1">
                            </el-date-picker>
                        </div>
                        <div v-else-if="v.type==='select'">
                            <el-select :placeholder="$i.order.pleaseChoose" :disabled="v.disabled" class="speInput" v-model="orderForm[v.key]" placeholder="请选择">
                                <el-option
                                        v-for="item in options"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value">
                                </el-option>
                            </el-select>
                        </div>
                        <div v-else-if="v.type==='number'">
                            <el-input-number
                                    :placeholder="$i.order.pleaseInput"
                                    :disabled="v.disabled"
                                    class="speInput speNumber"
                                    v-model="orderForm[v.key]"
                                    :controls="false"
                                    :min="1"
                                    :max="10"
                                    label="描述文字"></el-input-number>
                        </div>
                        <div v-else-if="v.type==='textarea'">
                            <el-input
                                    :placeholder="$i.order.pleaseInput"
                                    :disabled="v.disabled"
                                    class="speInput"
                                    type="textarea"
                                    :autosize="{ minRows: 2}"
                                    placeholder="请输入内容"
                                    v-model="orderForm[v.key]">
                            </el-input>
                        </div>
                    </el-form-item>
                </el-col>
            </el-row>
        </el-form>




        <div class="footBtn">
            <el-button @click="send" type="primary">{{$i.order.send}}</el-button>
            <el-button type="primary">{{$i.order.saveAsDraft}}</el-button>
            <el-button type="primary">{{$i.order.quickCreate}}</el-button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "createOrder",
        data(){
            return{
                value:'',
                options:[],
                /**
                 * 页面基础配置
                 * */
                labelPosition:'left',
                pickerOptions1: {
                    disabledDate(time) {
                        return time.getTime() > Date.now();
                    },
                    shortcuts: [{
                        text: '今天',
                        onClick(picker) {
                            picker.$emit('pick', new Date());
                        }
                    }, {
                        text: '昨天',
                        onClick(picker) {
                            const date = new Date();
                            date.setTime(date.getTime() - 3600 * 1000 * 24);
                            picker.$emit('pick', date);
                        }
                    }, {
                        text: '一周前',
                        onClick(picker) {
                            const date = new Date();
                            date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
                            picker.$emit('pick', date);
                        }
                    }]
                },



                /**
                 * 提交的数据
                 * */
                orderForm:{
                    acceptOperationId: 0,
                    actDeliveryDt: "2018-06-01T01:37:58.741Z",
                    archive: true,
                    attachment: true,
                    companyId: 0,
                    confirmDt: "2018-06-01T01:37:58.741Z",
                    currency: "string",
                    customerAgreementDt: "2018-06-01T01:37:58.741Z",
                    customerAgreementNo: "string",
                    // customerName: "string",
                    // customerNo: "string",
                    customerOrderNo: "string",
                    deliveredQty: 0,
                    deliveryDt: "2018-06-01T01:37:58.742Z",
                    departureCountry: "string",
                    departurePort: "string",
                    destCountry: "string",
                    destPort: "string",
                    draftCustomer: true,
                    draftSupplier: true,
                    // entryDt: "2018-06-01T01:37:58.742Z",
                    entryName: "string",
                    exchangeRateList: [
                        {
                            companyId: 0,
                            currency: "string",
                            entryDt: "2018-06-01T01:37:58.742Z",
                            entryId: 0,
                            entryName: "string",
                            exchangeRate: 0,
                            id: 0,
                            orderId: 0,
                            orderNo: "string",
                            ownerId: 0,
                            tenantId: 0,
                            timeZone: "string",
                            updateDt: "2018-06-01T01:37:58.742Z",
                            updateId: 0,
                            updateName: "string",
                            version: 0
                        }
                    ],
                    fieldRemark: {
                        additionalProp1: "string",
                        additionalProp2: "string",
                        additionalProp3: "string"
                    },
                    fieldUpdate: {
                        additionalProp1: "string",
                        additionalProp2: "string",
                        additionalProp3: "string"
                    },
                    fieldsRemark: "string",
                    fieldsUpdate: "string",
                    importantCustomer: true,
                    importantSupplier: true,
                    inboundQty: 0,
                    incoterm: "",
                    incotermArea: "",
                    lcNo: "",
                    orderNo: "",
                    ownerId: 0,
                    paidAmount: 0,
                    payment: "",
                    paymentDays: 0,
                    paymentRemark: "",
                    paymentStatus: "string",
                    quotationNo: "string",
                    recycleCustomer: true,
                    recycleSupplier: true,
                    remark: "string",
                    remind: true,
                    responsibilityList: [
                        {
                            actualDt: "2018-06-01T01:37:58.742Z",
                            companyId: 0,
                            customer: "string",
                            entryDt: "2018-06-01T01:37:58.742Z",
                            entryId: 0,
                            entryName: "string",
                            fieldsRemark: "string",
                            fieldsUpdate: "string",
                            id: 0,
                            orderId: 0,
                            orderNo: "string",
                            ownerId: 0,
                            remark: "string",
                            supplier: "string",
                            tenantId: 0,
                            timeZone: "string",
                            type: 0,
                            updateDt: "2018-06-01T01:37:58.742Z",
                            updateId: 0,
                            updateName: "string",
                            version: 0
                        }
                    ],
                    skuBarCode: "string",
                    skuCode: "string",
                    skuCustomerSkuCode: "string",
                    skuDescEn: "string",
                    skuList: [
                        {
                            companyId: 0,
                            entryDt: "2018-06-01T01:37:58.742Z",
                            entryId: 0,
                            entryName: "string",
                            fieldsRemark: "string",
                            fieldsUpdate: "string",
                            id: 0,
                            incoterm: "string",
                            orderId: 0,
                            orderNo: "string",
                            ownerId: 0,
                            skuAdditionalFour: "string",
                            skuAdditionalOne: "string",
                            skuAdditionalThree: "string",
                            skuAdditionalTwo: "string",
                            skuAdjustPackage: true,
                            skuApplicableAge: 0,
                            skuAvailableQty: 0,
                            skuBarCode: "string",
                            skuBrand: "string",
                            skuBrandRelated: "string",
                            skuBrandRemark: "string",
                            skuCategoryFour: "string",
                            skuCategoryId: 0,
                            skuCategoryOne: "string",
                            skuCategoryThree: "string",
                            skuCategoryTwo: "string",
                            skuCertificat: "string",
                            skuCifCurrency: "string",
                            skuCifPort: "string",
                            skuCifPrice: 0,
                            skuCode: "string",
                            skuColourCn: "string",
                            skuColourEn: "string",
                            skuComments: "string",
                            skuCommodityInspectionCn: "string",
                            skuCommodityInspectionEn: "string",
                            skuCustomerCreate: true,
                            skuCustomerSkuCode: "string",
                            skuCustomsCode: "string",
                            skuCustomsNameCn: "string",
                            skuCustomsNameEn: "string",
                            skuDduCurrency: "string",
                            skuDduPort: "string",
                            skuDduPrice: 0,
                            skuDeclareElement: "string",
                            skuDeliveredQty: 0,
                            skuDeliveryDates: 0,
                            skuDepartureDt: 0,
                            skuDescCn: "string",
                            skuDescCustomer: "string",
                            skuDescEn: "string",
                            skuDesign: "string",
                            skuDisplayBoxQty: 0,
                            skuExpireDates: 0,
                            skuExpireUnit: 0,
                            skuExwCurrency: "string",
                            skuExwPrice: 0,
                            skuFobCurrency: "string",
                            skuFobPort: "string",
                            skuFobPrice: 0,
                            skuFormation: "string",
                            skuGp20SkuQty: 0,
                            skuGp40SkuQty: 0,
                            skuGrossWeight: 0,
                            skuHeight: 0,
                            skuHq40SkuQty: 0,
                            skuId: 0,
                            skuInboundQty: 0,
                            skuInnerCartonDesc: "string",
                            skuInnerCartonHeight: 0,
                            skuInnerCartonLength: 0,
                            skuInnerCartonMethodCn: "string",
                            skuInnerCartonMethodEn: "string",
                            skuInnerCartonOuterNum: 0,
                            skuInnerCartonPic: "string",
                            skuInnerCartonQty: 0,
                            skuInnerCartonRoughWeight: 0,
                            skuInnerCartonUnit: "string",
                            skuInnerCartonVolume: 0,
                            skuInnerCartonWeightNet: 0,
                            skuInnerCartonWidth: 0,
                            skuInnerPackBarCode: "string",
                            skuInnerPackCode: "string",
                            skuInnerPackLabel: "string",
                            skuInspectQuarantineCategory: "string",
                            skuInventory: 0,
                            skuInventoryCostMethod: "string",
                            skuLabel: "string",
                            skuLabelDesc: "string",
                            skuLabelPic: "string",
                            skuLength: 0,
                            skuLengthWidthHeight: "string",
                            skuMainSaleArea: "string",
                            skuMainSaleCountry: "string",
                            skuMaterialCn: "string",
                            skuMaterialEn: "string",
                            skuMethodPkgCn: "string",
                            skuMethodPkgEn: "string",
                            skuMinInventory: 0,
                            skuMinOrderQty: 0,
                            skuModifyStatus: 0,
                            skuNameCn: "string",
                            skuNameCustomer: "string",
                            skuNameEn: "string",
                            skuNetWeight: 0,
                            skuNoneSellCountry: "string",
                            skuOem: true,
                            skuOrigin: "string",
                            skuOtherPackInfoCn: "string",
                            skuOtherPackInfoEn: "string",
                            skuOuterCartonBarCode: "string",
                            skuOuterCartonCode: "string",
                            skuOuterCartonDesc: "string",
                            skuOuterCartonHeight: 0,
                            skuOuterCartonLength: 0,
                            skuOuterCartonMethodCn: "string",
                            skuOuterCartonMethodEn: "string",
                            skuOuterCartonNetWeight: 0,
                            skuOuterCartonPic: "string",
                            skuOuterCartonQty: 0,
                            skuOuterCartonRoughWeight: 0,
                            skuOuterCartonUnit: "string",
                            skuOuterCartonVolume: 0,
                            skuOuterCartonWidth: 0,
                            skuPic: "string",
                            skuPkgMethodPic: "string",
                            skuPrice: 0,
                            skuProductionDates: 0,
                            skuQty: 0,
                            skuQtyPerTray: 0,
                            skuQualifiedQty: 0,
                            skuQualityStander: "string",
                            skuQuotationNo: "string",
                            skuRateValueAddedTax: 0,
                            skuReadilyAvailable: true,
                            skuRecycle: true,
                            skuRemarkOne: "string",
                            skuRemarkThree: "string",
                            skuRemarkTwo: "string",
                            skuSafeInventory: 0,
                            skuSaleStatus: 0,
                            skuSample: true,
                            skuSamplePrice: 0,
                            skuSampleQty: 0,
                            skuShippingMarks: "string",
                            skuSpecialTransportRequire: "string",
                            skuStatus: "string",
                            skuSupplierCode: "string",
                            skuSupplierCompanyId: 0,
                            skuSupplierId: 0,
                            skuSupplierName: "string",
                            skuSupplierTenantId: 0,
                            skuSysCode: "string",
                            skuTaxRefundRate: 0,
                            skuTradeMarkCn: "string",
                            skuTradeMarkEn: "string",
                            skuTryDimension: 0,
                            skuUndeliveredQty: 0,
                            skuUnit: 0,
                            skuUnitLength: 0,
                            skuUnitVolume: 0,
                            skuUnitWeight: 0,
                            skuUntestedQty: 0,
                            skuUseDisplayBox: true,
                            skuVolume: 0,
                            skuWarehourceDefault: "string",
                            skuWidth: 0,
                            skuYearListed: "2018-06-01T01:37:58.742Z",
                            tenantId: 0,
                            timeZone: "string",
                            updateDt: "2018-06-01T01:37:58.742Z",
                            updateId: 0,
                            updateName: "string",
                            version: 0
                        }
                    ],
                    skuNameCustomer: "string",
                    skuNameEn: "string",
                    skuQty: 0,
                    skuSupplierName: "string",
                    status: "string",
                    supplierCode: "string",
                    supplierId: 0,
                    supplierName: "string",
                    supplierOrderNo: "",
                    tenantId: 0,
                    timeZone: "string",
                    totalGrossWeight: 0,
                    totalNetWeight: 0,
                    totalOuterCartonQty: 0,
                    totalQty: 0,
                    totalSkuPrice: 0,
                    totalVolume: 0,
                    transport: "string",
                    unpaidAmount: 0,
                    updateDt: "2018-06-01T01:37:58.743Z",
                    updateId: 0,
                    updateName: "string",
                    version: 0
                },
            }
        },
        methods:{
            //就是保存
            send(){
                console.log(this.orderForm);
            },

            //获取订单号
            getOrderNo(){
                this.$ajax.post(this.$apis.ORDER_GETORDERNO,{
                    customerNo:'111'
                }).then(res=>{
                    console.log(res)
                }).catch(err=>{

                });
            },

            //获取供应商
            getSupplier(){
                this.$ajax.get(this.$apis.PURCHASE_SUPPLIER_LISTSUPPLIERBYNAME)
                    .then(res=>{
                        console.log(res)
                    }).catch(err=>{

                    })
            },
        },
        created(){
            // this.getOrderNo();
            this.getSupplier();
        },
    }
</script>

<style scoped>
    .title{
        font-weight: bold;
        font-size: 18px;
        height: 32px;
        line-height: 32px;
        color:#666666;
    }
    .speInput{
        width: 80%;
    }
    .speNumber >>> input{
        text-align: left;
    }

    .footBtn{
        border-top: 1px solid #e0e0e0;
        height: 40px;
        line-height: 40px;
        background-color: #ffffff;
        position: sticky;
        left: 0;
        bottom: 0;
        width: 100%;
        text-align: left;
    }
</style>