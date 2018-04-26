<template>
    <div class="create-inquiry">
        <h3 class="hd">{{ $i._inquiry.inquiryNo }}</h3>
        <div class="select-wrap">
            <h4 class="content-hd">{{ $i._inquiry.basicInfo }}</h4>
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
                                    v-for="nodes in selectAll[item.key]"
                                    :key="nodes.id"
                                    :label="nodes.name"
                                    :value="nodes.id"
                                />
                            </el-select>
                            <el-select
                                style="width:100%;"
                                v-if="item.type === 'manySelect'"
                                v-model="fromArg.suppliers"
                                multiple
                                filterable
                                remote
                                reserve-keyword
                                value-key="id"
                                :size="item.size || 'mini'"
                                placeholder="请输入关键词"
                                :remote-method="remoteMethod"
                                :loading="loading">
                                <el-option
                                    v-for="item in selectAll[item.key]"
                                    :key="item.id"
                                    :label="item.name"
                                    :value="item"
                                    :id="item.id"
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
                            <span v-if="item.type === 'Number'" style="display:flxe;">
                                <el-input-number v-model="fromArg[item.key]" :min="0" :max="100" controls-position="right" size="mini" :controls="false" style="width:100%; padding-right:10px;" /> <i style="position:absolute; right:5px; top:50%;transform: translate(0, -50%); font-size:12px;">%</i>
                            </span>
                            <v-up-load v-if="item.type === 'attachment' || item.type === 'upData'"/>
                        </el-form-item>
                    </el-col>
                </el-row>
            </el-form>
        </div>
        <h4 class="content-hd">{{ $i._baseText.productInfo }}</h4>
        <div class="status">
            <div class="btn-wrap">
                <el-button @click="dialogTableVisible = true">{{ $i._baseText.addProduct }}</el-button>
                <el-button type="danger">{{ $i._baseText.remove }}</el-button>
            </div>
            <select-search :options="[]" @inputEnter="inputEnter" />
        </div>
        <v-table 
            :data.sync="tabData"
            :buttons="productInfoBtn"
            :loading="tableLoad"
            @action="producInfoAction"
            @change-checked="changeChecked"
            :rowspan="2"
        />
        <div class="bom-btn-wrap">
            <el-button @click="submitForm()">{{ $i._baseText.submit }}</el-button>
            <el-button @click="submitForm('draft')">{{ $i._baseText.saveAsDraft }}</el-button>
        </div>
        <div class="bom-btn-wrap-station"></div>
        <el-dialog
                title="Add Product"
                :visible.sync="dialogTableVisible"
                width="80%"
                lock-scroll>
            <el-radio-group v-model="radio" @change="fromChange">
                <el-radio-button label="0">From New Search</el-radio-button>
                <el-radio-button label="1">From my bookmark</el-radio-button>
            </el-radio-group>
            <v-product 
                :hideBtns="true"
                :hideBtn="true"
                @handleOK="getList"
            ></v-product>
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
                tableLoad: false,
                selectAll: {
                    paymentMethod: [],
                    transport: [],
                    incoterm: [],
                    currency: [],
                    supplierName: [],
                    exportLicense: [],
                    destinationCountry: [],
                    departureCountry: []
                },
                loading: false,
                suppliers: [],
                fromArg: {
                    //supplierId: [], //供应商ID
                    //supplierType: null, //供应商类型
                    //supplierName: null, //供应商名称
                    skuQty: 0, //产品数量
                    inquiryAmount: 0, //询价总金额
                    timeZone: 0, //时区
                    entryDt: 0, //时间
                    discountRate: null, //折扣率
                    currency: null, //币种
                    paymentMethod: null, //付款方式
                    paymentTerm: 0, //付款期限
                    incoterm: null, //价格条款
                    transport: null, //运输方式
                    destinationCountry: null, //目标国家
                    destinationPort: null, //目标港口
                    departureCountry: null, //发货国家
                    departurePort: null, //发货港口
                    exportLicense: null, //是否有出口许可证
                    remark: null,
                    draft: null, //是否草稿0:否，1:是
                    suppliers: [],
                    details: [{
                        "skuId": 11,
                        "skuRecycle": 0,
                        "skuSysCode": 'sad',
                        "skuCode": "dxtxnfhs",
                        "deleteDisplayStatus": "0",
                        "skuPic": "0",
                        "skuStatus": "0",
                        "skuBarcode": "0",
                        "skuNameCn": "苹果",
                        "skuNameEn": "Apple",
                        "skuDescCn": "一种水果",
                        "skuDescEn": "A kind of friut",
                        "skuDescCustomer": "0",
                        "skuNameCustomer": "0",
                        "skuCustomerSkuCode": "0",
                        "skuSupplierCode": "0",
                        "skuSupplierName": "0",
                        "skuUnit": "0",
                        "skuProductFormation": "0",
                        "skuMaterialEn": "0",
                        "skuMaterialCn": "0",
                        "skuColourEn": "0",
                        "skuColourCn": "0",
                        "skuMinOrderQty": "0",
                        "skuDeliveryDates": "0",
                        "skuProductDesign": "0",
                        "skuCodeneSellCountry": "0",
                        "skuApplicableAge": "0",
                        "skuExpireDates": "0",
                        "skuExpireUnit": "0",
                        "skuComments": "0",
                        "skuReadilyAvailable": "0",
                        "skuAvailableQty": "0",
                        "skuMainSaleCountry": "0",
                        "skuMainSaleArea": "0",
                        "skuProductionDates": "0",
                        "skuQualityStander": "0",
                        "skuYearListed": "0",
                        "skuUseDisplayBox": 0,
                        "skuQuantityDisplayBox": "0",
                        "skuOtherPackInfoCn": "0",
                        "skuOtherPackInfoEn": "0",
                        "skuAdjustPackage": 0,
                        "skuLengthWidthHeight": "0",
                        "skuCategoryId": "0",
                        "skuPurchaseCreate": 1,
                        "skuFobCurrency": 1,
                        "skuFobPrice": "0",
                        "skuFobPort": "0",
                        "skuExwPrice": "0",
                        "skuExwCurrency": "0",
                        "skuOtherIncoterm": "0",
                        "skuOtherIncotermPrice": "0",
                        "skuOtherIncotermArea": "0",
                        "skuOtherIncotermCurrency": "0",
                        "skuPriceType": "0",
                        "skuUnitWeight": "0",
                        "skuUnitLength": "0",
                        "skuUnitVolume": "0",
                        "skuSkuLength": "0",
                        "skuSkuWidth": "0",
                        "skuSkuHeight": "0",
                        "skuSkuNetWeight": "0",
                        "skuSkuVolume": "0",
                        "skuMethodPkgCn": "0",
                        "skuMethodPkgEn": "0",
                        "skuInnerCartonUnit": "0",
                        "skuInnerCartonQuantity": "0",
                        "skuInnerCartonLength": "0",
                        "skuInnerCartonWidth": "0",
                        "skuInnerCartonHeight": "0",
                        "skuInnerCartonWeightNet": "0",
                        "skuInnerCartonRoughWeight": "0",
                        "skuInnerCartonVolume": "0",
                        "skuInnerCartonDesc": "0",
                        "skuInnerCartonMethodCn": "0",
                        "skuInnerCartonMethodEn": "0",
                        "skuUnitOuterCarton": "0",
                        "skuDescOuterCarton": "0",
                        "skuInnerCartonOuterNum": "0",
                        "skuOuterCartonQuantity": "0",
                        "skuOuterCartonLength": "0",
                        "skuOuterCartonWidth": "0",
                        "skuOuterCartonHeight": "0",
                        "skuOuterCartonNetWeight": "0",
                        "skuOuterCartonRoughWeight": "0",
                        "skuOuterCartonVolume": "0",
                        "skuOuterCartonMethodCn": "0",
                        "skuOuterCartonMethodEn": "0",
                        "skuOem": 0,
                        "skuRateValueAddedTax": "0",
                        "skuTaxRefundRate": "0",
                        "skuCustomsCode": "0",
                        "skuCustomsNameCn": "0",
                        "skuCustomsNameEn": "0",
                        "skuTradeMarkCn": "0",
                        "skuTradeMarkEn": "0",
                        "skuCommodityInspectionCn": "0",
                        "skuCommodityInspectionEn": "0",
                        "skuDeclareElement": "0",
                        "skuOrigin": "0",
                        "skuInspectQuarantineCategory": "0",
                        "skuBrand": "0",
                        "skuBrandRemark": "0",
                        "skuBrandRelated": "0",
                        "skuCertificat": "0",
                        "skuGp20SkuQuantity": "0",
                        "skuGp40SkuQuantity": "0",
                        "skuHq40SkuQuantity": "0",
                        "skuTryDimension": "0",
                        "skuSkuQuantityPerTray": "0",
                        "skuSpecialTransportRequire": "0",
                        "skuInventoryCostMethod": "0",
                        "skuWarehourceDefault": "0",
                        "skuInventory": "0",
                        "skuSafeStock": "0",
                        "skuMinStock": "0",
                        "fieldRemark": {
                            "skuNameEn": "备注内容A",
                            "skuNameCn": "备注内容B",
                            "skuCode": "备注内容C"
                        }
                    }]
                },
                radio: '0',   //Add Product status
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
            this.getDictionaries();
            this.remoteMethod('');
        },
        computed: {
            
        },
        methods: {
            inputEnter(val) {

            },
            getDictionaries() {
                this.$ajax.post(this.$apis.POST_CODE_PART, ['PMT', 'ITM', 'CY_UNIT', 'EL_IS', 'MD_TN'], '_cache')
                .then(res => {
                    this.selectAll.paymentMethod = _.findWhere(res, {'code': 'PMT'}).codes;
                    this.selectAll.transport = _.findWhere(res, {'code': 'MD_TN'}).codes;
                    this.selectAll.incoterm = _.findWhere(res, {'code': 'ITM'}).codes;
                    this.selectAll.currency = _.findWhere(res, {'code': 'CY_UNIT'}).codes;
                    //this.selectAll.supplierName = _.findWhere(res, {'code': '供应商'}).codes;
                    this.selectAll.exportLicense = _.findWhere(res, {'code': 'EL_IS'}).codes;
                });

                this.$ajax.get(this.$apis.GET_COUNTRY_ALL, '', '_cache')
                .then(res => {
                    this.selectAll.destinationCountry = res;
                    this.selectAll.departureCountry = res;
                });

            },
            getProduct() {

            },
            fromChange(val) {
                console.log(val)
            },
            submitForm(type) {
                if(type === 'draft') { //是否保存为草稿
                    this.fromArg.draft = 1;
                } else {
                    this.fromArg.draft = 0;
                }
                this.$refs.ruleform.validate((valid) => {
                    if(!valid) return this.$message({
                        message: '请完成填写',
                        type: 'warning'
                    });
                });
                this.$ajax.post(this.$apis.POST_INQUIRY_SAVE, this.fromArg)
                .then(res => {
                    console.log(res)
                });
                //this.$router.push('/negotiation/inquiryDetail');
            },
            changeChecked(item) {
                this.checkedAll = item;
            },
            getList(item) {
                let tabData = [];
                item.forEach(items => {
                    tabData.push(items.id.value);
                });
                this.$ajax.post(this.$apis.POST_INQUIRY_SKUS, tabData)
                .then(res => {
                    console.log(res)
                });
                this.tabData = tabData;
                this.dialogTableVisible = false;
            },
            producInfoAction(data, type) { //Produc info 按钮操作
                    this.id_type = 'producInfo';
                    this.historyColumn = this.$db.inquiryOverview.productInfo;
                    switch(type) {
                            case 'histoty':
                                //this.msgTitle = 'Histoty';
                                this.fnBasicInfoHistoty(data, 'productInfo');
                                break;
                            case 'modify':
                                //this.msgTitle = 'Modify';
                                this.oSwitch = true;
                                this.fnBasicInfoHistoty(data, 'productInfo', data.id.value);
                                break;
                    }
            },
            productInfoBtn (item) { //Product info 按钮创建
                if(this.statusModify && !item._disabled) return [{label: 'Modify', type: 'modify'}, {label: 'Histoty', type: 'histoty'}, {label: 'Detail', type: 'detail'}];
                if(!item._disabled) return [{label: 'Histoty', type: 'histoty'}, {label: 'Detail', type: 'detail'}];
            },
            fnBasicInfoHistoty(item, type, id) { //查看历史记录
                let column;
                this.$ajax.get(this.$apis.GET_INQUIRY_HISTORY, {
                    id: item.id.value
                })
                .then(res => {
                    let arr = [];
                    if(type === 'basicInfo') {
                        column = this.$db.inquiryOverview.basicInfo;
                        this.newTabData.forEach((items, index) => {
                            if(items.id.value === id) {
                                arr.push(items);
                            }
                        });
                    } else {
                        column = this.$db.inquiryOverview.productInfo;
                        this.newProductTabData.forEach((items, index) => {
                            if(items.id.value === id) {
                                arr.push(items);
                            }
                        });
                    }
                    this.$refs.HM.edit(arr, this.$getDB(column, this.$refs.HM.getFilterData(res)));
                });
           },
           producInfoAction(data, type) { //Produc info 按钮操作
                this.id_type = 'producInfo';
                this.historyColumn = this.$db.inquiryOverview.productInfo;
                switch(type) {
                        case 'histoty':
                            //this.msgTitle = 'Histoty';
                            this.fnBasicInfoHistoty(data, 'productInfo');
                            break;
                        case 'modify':
                            //this.msgTitle = 'Modify';
                            this.oSwitch = true;
                            this.fnBasicInfoHistoty(data, 'productInfo', data.id.value);
                            break;
                }
           },
           remoteMethod(keyWord) {
               this.$ajax.get(`${this.$apis.PURCHASE_SUPPLIER_LISTSUPPLIERBYNAME}?name=${keyWord}`)
               .then(res => {
                   this.selectAll.supplierName = res;
               })
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
<style scoped>
    .select-wrap .el-form {
        padding: 10px;
    }
    .select-wrap .el-form-item >>> .el-form-item__label {
        display:flex;
        justify-content:flex-end;
        text-align: left;
    }
</style>

