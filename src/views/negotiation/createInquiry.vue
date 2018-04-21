<template>
    <div class="create-inquiry">
        <h3 class="hd">{{ $i.inquiry.inquiryNo }}</h3>
        <!-- <time-selection v-model="dateTime" /> -->
        <div class="select-wrap">
            <h4 class="content-hd">{{ $i.inquiry.basicInfo }}</h4>
            <el-form ref="ruleform" :model="fromArg">
                <el-row :gutter="10">                    
                    <el-col 
                            v-for="(item, index) in $db.inquiryOverview.basicInfo" 
                            :key="index" 
                            :xs="item.xs || 8" 
                            :sm="item.sm || 8" 
                            :md="item.md || 8" 
                            :lg="item.lg || 8"
                            v-if="!item._inquiryHide && !item._hide"
                        >
                        <el-form-item  
                                :label="item.label" 
                                :prop="item.key" 
                                :rules="item.rules" 
                                :label-width="item.width || '150px'"
                            >
                            <el-input 
                                v-model="fromArg[item.key]" 
                                :size="item.size || 'mini'"
                                :placeholder="item.placeholder" 
                                v-if="item.type === 'text' && !item._hide" 
                                :disabled="item.disabled"
                            />

                            <el-select
                                    v-model="fromArg[item.key]" 
                                    :size="item.size || 'mini'"
                                    :placeholder="item.placeholder" 
                                    v-if="item.type === 'select'"
                                    style="width:100%;"
                                >
                                <el-option
                                    v-for="nodes in item.select"
                                    :key="nodes.value"
                                    :label="nodes"
                                    :value="nodes"
                                />
                            </el-select>
                            <el-input
                                type="textarea"
                                v-model="fromArg[item.key]"
                                :rows="item.rows || 4"
                                :size="item.size || 'mini'"
                                :placeholder="item.placeholder"
                                v-if="item.type === 'textarea'"
                                resize="none"
                                :disabled="item.disabled"
                            />
                            <el-date-picker
                                style="width:100%;"
                                v-model="fromArg[item.key]"
                                type="datetime"
                                :placeholder="item.placeholder"
                                v-if="item.type === 'dateTime'"
                            />
                            <span v-if="item.type === '%'" style="display:flxe;">
                                <el-input-number v-model="fromArg[item.key]" :min="1" :max="100" controls-position="right" size="mini" :controls="false" /> %
                            </span>
                            <v-up-load v-if="item.type === 'attachment' || item.type === 'upData'"/>
                        </el-form-item>
                    </el-col>
                </el-row>
            </el-form>
        </div>
        <h4 class="content-hd">{{ $i.baseText.productInfo }}</h4>
        <div class="status">
            <div class="btn-wrap">
                <el-button @click="dialogTableVisible = true">{{ $i.baseText.addProduct }}</el-button>
                <el-button type="danger">{{ $i.baseText.remove }}</el-button>
            </div>
            <select-search :options="[]" />
        </div>
        <v-table 
            :data="tabData"
            :buttons="['detail']" 
            @action="action"
            @change-checked="changeChecked"
        />
        <div class="bom-btn-wrap">
            <el-button @click="submitForm()">{{ $i.baseText.submit }}</el-button>
            <el-button @click="submitForm('draft')">{{ $i.baseText.saveAsDraft }}</el-button>
        </div>
        <div class="bom-btn-wrap-station"></div>
        <el-dialog
                title="Add Product"
                :visible.sync="dialogTableVisible"
                width="80%"
                lock-scroll>
            <el-radio-group v-model="radio" @change="fromChange">
                <el-radio-button label="From New Search"></el-radio-button>
                <el-radio-button label="From my bookmark"></el-radio-button>
            </el-radio-group>
            <v-product 
                :hideBtns="true"
                :hideBtn="true"
                @handleOK="getList"
            ></v-product>
             <!-- <span slot="footer" class="dialog-footer">
                <el-button type="primary" @click="dialogTableVisible = false">OK</el-button>
                <el-button @click="dialogTableVisible = false">Cancel</el-button>
            </span> -->
        </el-dialog>
        
    </div>
</template>
<script>
    import { selectSearch, VTable, Upload } from '@/components/index';
    import product from '@/views/product/addProduct';
    export default {
        name:'createInquiry',
        data() {
            return {
                fromArg: {
                    supplierId: "供应商ID",
                    supplierType: "供应商类型",
                    supplierName: "供应商名称",
                    skuQty: "产品数量",
                    inquiryAmount: "询价总金额",
                    discountRate: "折扣率",
                    currency: "币种",
                    paymentMethod: "付款方式",
                    paymentTerm: "付款期限",
                    incoterm: "价格条款",
                    transport: "运输方式",
                    destinationCountry: "目标国家",
                    destinationPort: "目标港口",
                    departureCountry: "发货国家",
                    departurePort: "发货港口",
                    exportLicense: "是否有出口许可证",
                    remark: "备注",
                    draft: "是否草稿0:否，1:是",
                    suppliers: [{
                        supplierId: "供应商ID",
                        supplierType: "供应商类型",
                        supplierName: "供应商名称"
                    }],
                    details: [{
                        // 商品基本数据
                        inquiryNo: null,
                        quotationNo: null,
                        skuId: null,
                        skuCode: null,
                        deleteDisplayStatus: null,
                        skuPic: null,
                        skuStatus: null,
                        skuBarcode: null,
                        skuNameCn: null,
                        skuNameEn: null,
                        skuDescCn: null,
                        skuDescEn: null,
                        skuDescCustomer: null,
                        skuNameCustomer: null,
                        skuCustomerSkuCode: null,
                        skuSupplierCode: null,
                        skuSupplierName: null,
                        skuUnit: null,
                        skuProductFormation: null,
                        skuMaterialEn: null,
                        skuMaterialCn: null,
                        skuColourEn: null,
                        skuColourCn: null,
                        skuMinOrderQty: null,
                        skuDeliveryDates: null,
                        skuProductDesign: null,
                        skuCodeneSellCountry: null,
                        skuApplicableAge: null,
                        skuExpireDates: null,
                        skuExpireUnit: null,
                        skuComments: null,
                        skuReadilyAvailable: null,
                        skuAvailableQty: null,
                        skuMainSaleCountry: null,
                        skuMainSaleArea: null,
                        skuProductionDates: null,
                        skuQualityStander: null,
                        skuYearListed: null,
                        skuUseDisplayBox: null,
                        skuQuantityDisplayBox: null,
                        skuOtherPackInfoCn: null,
                        skuOtherPackInfoEn: null,
                        skuAdjustPackage: null,
                        skuLengthWidthHeight: null,
                        skuCategoryId: null,
                        skuPurchaseCreate: null,
                        // 商品价格数据
                        skuFobCurrency: null,
                        skuFobPrice: null,
                        skuFobPort: null,
                        skuExwPrice: null,
                        skuExwCurrency: null,
                        skuOtherIncoterm: null,
                        skuOtherIncotermPrice: null,
                        skuOtherIncotermArea: null,
                        skuOtherIncotermCurrency: null,
                        skuPriceType: null,
                        // 商品包装数据
                        skuUnitWeight: null,
                        skuUnitLength: null,
                        skuUnitVolume: null,
                        skuSkuLength: null,
                        skuSkuWidth: null,
                        skuSkuHeight: null,
                        skuSkuNetWeight: null,
                        skuSkuVolume: null,
                        skuMethodPkgCn: null,
                        skuMethodPkgEn: null,
                        skuInnerCartonUnit: null,
                        skuInnerCartonQuantity: null,
                        skuInnerCartonLength: null,
                        skuInnerCartonWidth: null,
                        skuInnerCartonHeight: null,
                        skuInnerCartonWeightNet: null,
                        skuInnerCartonRoughWeight: null,
                        skuInnerCartonVolume: null,
                        skuInnerCartonDesc: null,
                        skuInnerCartonMethodCn: null,
                        skuInnerCartonMethodEn: null,
                        skuUnitOuterCarton: null,
                        skuDescOuterCarton: null,
                        skuInnerCartonOuterNum: null,
                        skuOuterCartonQuantity: null,
                        skuOuterCartonLength: null,
                        skuOuterCartonWidth: null,
                        skuOuterCartonHeight: null,
                        skuOuterCartonNetWeight: null,
                        skuOuterCartonRoughWeight: null,
                        skuOuterCartonVolume: null,
                        skuOuterCartonMethodCn: null,
                        skuOuterCartonMethodEn: null,
                        skuOem: null,
                        // 商品运输数据
                        skuRateValueAddedTax: null,
                        skuTaxRefundRate: null,
                        skuCustomsCode: null,
                        skuCustomsNameCn: null,
                        skuCustomsNameEn: null,
                        skuTradeMarkCn: null,
                        skuTradeMarkEn: null,
                        skuCommodityInspectionCn: null,
                        skuCommodityInspectionEn: null,
                        skuDeclareElement: null,
                        skuOrigin: null,
                        skuInspectQuarantineCategory: null,
                        skuBrand: null,
                        skuBrandRemark: null,
                        skuBrandRelated: null,
                        skuCertificat: null,
                        skuGp20SkuQuantity: null,
                        skuGp40SkuQuantity: null,
                        skuHq40SkuQuantity: null,
                        skuTryDimension: null,
                        skuSkuQuantityPerTray: null,
                        skuSpecialTransportRequire: null,
                        skuInventoryCostMethod: null,
                        skuWarehourceDefault: null,
                        skuInventory: null,
                        skuSafeStock: null,
                        skuMinStock: null,
                        // 商品字段备注
                        fieldRemark: {
                            field1: "详细备注内容1",
                            field3: "详细备注内容3",
                            field2: "详细备注内容2"
                        }
                    }],
                    // 询价单字段备注
                    fieldRemark: ''
                },
                radio: 'From New Search',   //Add Product status
                dialogTableVisible: false, //Add Product switch
                
                tabColumn: '', //tab top
                tabData: [], //tab Data
                textarea:'',
                pickerOptions:{
                    disabledDate(time) {
                        return time.getTime() < Date.now();
                    },
                    shortcuts: [{
                        text: 'Today',
                        onClick(picker) {
                        picker.$emit('pick', new Date());
                        }
                    }, {
                        text: 'Yesterday',
                        onClick(picker) {
                        const date = new Date();
                        date.setTime(date.getTime() - 3600 * 1000 * 24);
                        picker.$emit('pick', date);
                        }
                    }, {
                        text: 'A week ago',
                        onClick(picker) {
                        const date = new Date();
                        date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
                        picker.$emit('pick', date);
                        }
                    }]
                }
            }
        },
        components: {
            'select-search': selectSearch,
            'v-table': VTable,
            'v-product': product,
            'v-up-load': Upload
        },
        created() {
            
        },
        computed: {
            
        },
        methods: {
            getProduct() {

            },
            fromChange(val) {
                console.log(val)
            },
            submitForm(type) {
                console.log(this.fromArg)
                if(type === 'draft') {
                    
                } else {

                }
                //this.$router.push('/negotiation/inquiryDetail');
                this.$refs.ruleform.validate((valid) => {
                    if(!valid) return this.$message({
                        message: '请完成填写',
                        type: 'warning'
                    });
                });
            },
            action(data, type) {
                
            },
            changeChecked(item) {
               this.checkedAll = item;
           },
           getList(item) {
               let tabData = [];
               item.forEach(items => {
                   items._checked = false;
                   tabData.push(Object.assign({},items))
               });
               this.tabData = tabData;
               this.dialogTableVisible = false;
           }
        }
    }
</script>
<style lang="less" scoped>
    .create-inquiry {
        position: relative;
        .hd {
            padding-left:15px;
            height: 50px;
            line-height:50px;
            color:#666;
            border-bottom:1px solid #ccc;
        }
        .content-hd {
            font-size:14px;
            line-height:40px;
            padding-left:20px;
        }
        .status {
            display:flex;
            height: 60px;
            box-sizing: border-box;
            padding-left:25px;
            padding-right:25px;
            align-items: center;
            justify-content:space-between;
            .btn-wrap {
                display:flex;
                align-items: center;
                span {
                    font-size:14px;
                }
            }
            .select-wrap {
                display:flex;
                align-items:center;
                .select {
                    width: 110px;
                    margin-right:5px;
                }
                .set {
                    cursor: pointer;
                    padding-left:18px;
                    color:#999;
                    i {
                        font-size:25px;
                    }
                }
            }
        }
        .bom-btn-wrap {
            background:#fff;
            position:fixed;
            left:0;
            bottom:0;
            z-index:9;
            width:100%;
            padding: 10px 200px 10px;
            box-shadow: 0 -1px 5px #ccc;
        }
        .bom-btn-wrap-station {
            height: 52px;
            width:100%;
        }
    }
</style>

