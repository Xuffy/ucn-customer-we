//   select  attachment select 


export default {
    _firstColumn: {
        key: 'updateDt',
        label: ' ',
        type: 'text',
        _disabled: true,
        _title: 'remark'
    },
    _remark: {
        _hide: true
    },
    id: {
        key: 'id',
        _hide: true
    },
    _id: {
        _hide: true
    },
    pic: {
        key: 'skuPic',
        type: 'attachment',
        _disabled: true
    },
    nameEn: {
        key: 'skuNameEn',
        type: 'text',
        _disabled: true
    },
    nameCn: {
        key: 'skuNameCn',
        type: 'text',
        _disabled: true
    },
    descCn: {
        key: 'skuDescCn',
        type: 'text',
        _disabled: true
    },

    descEn: {
        key: 'skuDescEn',
        type: 'text',
        _disabled: true
    },
    descCustomer: {
        key: 'skuDescCustomer',
        _disabled: true
    },
    nameCustomer: {
        key: 'skuNameCustomer',
        type: 'text',
        _disabled: true
    },
    customerSkuCode: {
        key: 'skuCustomerSkuCode',
        _disabled: true
    },
    code: {
        key: 'skuCode',
        type: 'text',
        _disabled: true,
        _hide: true
    },
    supplierName: {
        key: 'skuSupplierName',
        _disabled: true
    },
    supplierCode: {
        key: 'skuSupplierCode',
        _disabled: true
    },
    fobCurrency: {
        key: 'skuFobCurrency',
        type: 'select',
    },
    fobPrice: {
        key: 'skuFobPrice',
        type: 'select',
    },
    ////////////////////////////////////  departure port   select  弹出框
    unit: {
        key: 'skuUnit'
    },
    materialEn: {
        key: 'skuMaterialEn',
        _disabled: true,
    },
    materialCn: {
        key: 'skuMaterialCn',
        _disabled: true,
    },
    /////？？？quantity
    qualityStander: {
        key: 'skuQualityStander',
        _disabled: true,
    },
    //自动计算?????
    sukPrice: {
        key: 'sukPrice',
        _disabled: true,
        _calu: true
    },
    rateValueAddedTax: {
        key: 'skuRateValueAddedTax',
        _disabled: true,
    },
    taxRefundRate: {
        key: 'skuTaxRefundRate',
        _disabled: true,
    },
    colourEn: {
        key: 'skuColourEn',
        _disabled: true
    },
    colourCn: {
        key: 'skuColourCn',
        _disabled: true
    },
    minOrderQty: {
        key: 'skuMinOrderQty'
        // S可编辑/C不可编辑
    },
    deliveryDates: {
        key: 'skuDeliveryDates',
        _disabled: true
    },
    design: {
        key: 'skuDesign'
    },
    customsCode: {
        key: 'skuCustomsCode',
        _disabled: true,
    },
    customsNameCn: {
        key: 'skuCustomsNameCn',
        _disabled: true,
    },
    customsNameEn: {
        key: 'skuCustomsNameEn',
        _disabled: true,
    },
    tradeMarkCn: {
        key: 'skuTradeMarkCn',
        _disabled: true,
    },
    tradeMarkEn: {
        key: 'skuTradeMarkEn',
        _disabled: true,
    },
    commodityInspectionCn: {
        key: 'skuCommodityInspectionCn',
        _disabled: true,
    },
    commodityInspectionEn: {
        key: 'skuCommodityInspectionEn',
        _disabled: true,
    },
    declareElement: {
        key: 'skuDeclareElement',
        _disabled: true,
    },
    origin: {
        key: 'skuOrigin',
        _disabled: true,
    },
    inspectQuarantineCategory: {
        key: 'skuInspectQuarantineCategory',
        _disabled: true,
    },
    unitWeight: {
        key: 'skuUnitWeight',
        _disabled: true,
    },
    unitLength: {
        key: 'skuUnitLength',
        _disabled: true,
    },
    unitVolume: {
        key: 'skuUnitVolume',
        _disabled: true,
    },
    length: {
        key: 'skuLength',
        _disabled: true,
    },
    width: {
        key: 'skuWidth',
        _disabled: true,
    },
    height: {
        key: 'skuHeight',
        _disabled: true,
    },
    netWeight: {
        key: 'skuNetWeight',
        _disabled: true,
    },
    volume: {
        key: 'skuVolume',
        _disabled: true,
    },
    methodPkgCn: {
        key: 'skuMethodPkgCn',
        _disabled: true,
    },
    methodPkgEn: {
        key: 'skuMethodPkgEn',
        _disabled: true,
    },
    innerCartonUnit: {
        key: 'skuInnerCartonUnit',
        _disabled: true,
    },
    // 合计SKU Quantity Of Inner Carton     
    //Quantity of Inner Box in Outer Carton

    innerCartonQty: {
        key: 'skuInnerCartonQty',
        _disabled: true,
        _calu: true
    },
    innerCartonLength: {
        key: 'skuInnerCartonLength',
        _disabled: true,
    },
    innerCartonWidth: {
        key: 'skuInnerCartonWidth',
        _disabled: true,
    },
    innerCartonHeight: {
        key: 'skuInnerCartonHeight',
        _disabled: true,
    },
    innerCartonWeightNet: {
        key: 'skuInnerCartonWeightNet',
        _disabled: true,
    },
    innerCartonRoughWeight: {
        key: 'skuInnerCartonRoughWeight',
        _disabled: true,
    },
    innerCartonVolume: {
        key: 'skuInnerCartonVolume',
        _disabled: true,
    },
    innerCartonDesc: {
        key: 'skuInnerCartonDesc',
        _disabled: true,
    },
    innerCartonMethodCn: {
        key: 'skuInnerCartonMethodCn',
        _disabled: true,
    },
    innerCartonMethodEn: {
        key: 'skuInnerCartonMethodEn',
        _disabled: true,
    },
    outerCartonUnit: {
        key: 'skuOuterCartonUnit',
        _disabled: true,
    },
    outerCartonDesc: {
        key: 'skuOuterCartonDesc',
        _disabled: true,
    },
    innerCartonOuterNum: {
        key: 'skuInnerCartonOuterNum',
        _disabled: true,
    },
    //SKU Quantity of Outer Carton
    outerCartonQty: {
        key: 'skuOuterCartonQty',
        _disabled: true,
        _calu: true
    },
    outerCartonLength: {
        key: 'skuOuterCartonLength',
        _disabled: true,
    },
    outerCartonWidth: {
        key: 'skuOuterCartonWidth',
        _disabled: true,
    },
    outerCartonHeight: {
        key: 'skuOuterCartonHeight',
        _disabled: true,
    },
    outerCartonNetWeight: {
        key: 'skuOuterCartonNetWeight',
        _disabled: true,
    },
    outerCartonRoughWeight: {
        key: 'skuOuterCartonRoughWeight',
        _disabled: true,
    },
    outerCartonVolume: {
        key: 'skuOuterCartonVolume',
        _disabled: true,
    },
    outerCartonMethodCn: {
        key: 'skuOuterCartonMethodCn',
        _disabled: true,
    },
    outerCartonMethodEn: {
        key: 'skuOuterCartonMethodEn',
        _disabled: true,
    },
    brand: {
        key: 'skuBrand',
        _disabled: true,
    },
    applicableAge: {
        key: 'skuApplicableAge',
        _disabled: true,
    },
    expireDates: {
        key: 'skuExpireDates',
        _disabled: true,
    },
    expireUnit: {
        key: 'skuExpireUnit',
        _disabled: true,
    },
    comments: {
        key: 'skuComments',
        _disabled: true,
    },
    skuStatus: {
        key: 'skuStatus',
        _disabled: true,
    },
    sukCategoryOne: {
        key: 'sukCategoryOne',
        _disabled: true,
    },
    sukCategoryTwo: {
        key: 'sukCategoryTwo',
        _disabled: true,
    },
    sukCategoryThree: {
        key: 'sukCategoryThree',
        _disabled: true,
    },
    sukSaleStatus: {
        key: 'sukSaleStatus'
    },
    sukLabel: {
        key: 'sukLabel'
    },
    sukBarCode: {
        key: 'sukBarCode'
    },
    sukInnerPackBarCode: {
        key: 'sukInnerPackBarCode',

    },
    sukInnerPackLabe: {
        key: 'sukInnerPackLabe'
    },
    sukInnerPackCode: {
        key: 'sukInnerPackCode'
    },
    sukShippingMarks: {
        key: 'sukShippingMarks'
    },
    sukOuterCartonBarCode: {
        key: 'sukOuterCartonBarCode'
    },
    sukOuterCartonCode: {
        key: 'sukOuterCartonCode'
    },
    sukLabelPic: {
        key: "sukLabelPic"
    },
    sukLabelDesc: {
        key: 'sukLabelDesc'
    },
    sukPkgMethodPic: {
        key: 'sukPkgMethodPic'
    },
    sukInnerCartonPic: {
        key: 'sukInnerCartonPic'
    },
    sukOuterCartonPic: {
        key: 'sukOuterCartonPic'
    },
    //.........need sample 
    sukSample: {
        key: 'sukSample',
        type: 'select'
    },
    //合计
    sukSampleQty: {
        key: 'sukSampleQty',
        type: 'text',
        _calu: true
    },
    //合计
    sukSamplePrice: {
        key: 'sukSamplePrice',
        type: 'text',
        _calu: true
    },
    //Undelivered Quantity ？？？
    sukDeliveredQty: {
        key: 'sukDeliveredQty',
        _disabled: true,
        _calu: true
    },
    sukDepartureDt: {
        key: 'sukDepartureDt',

    },
    sukQuotationNo: {
        key: 'sukQuotationNo',
        _disabled: true,
        _calu: true
    },
    sukModifyStatus: {
        key: 'sukModifyStatus'
    },
    sukRemarkOne: {
        key: 'sukRemarkOne'
    },
    sukRemarkTwo: {
        key: 'sukRemarkTwo'
    },
    sukRemarkThree: {
        key: 'sukRemarkThree'
    },
    sukAdditionalOne: {
        key: 'sukAdditionalOne',
        type: 'pic'
    },
    sukAdditionalTwo: {
        key: 'sukAdditionalTwo',
        type: 'pic'
    },
    sukAdditionalThree: {
        key: 'sukAdditionalThree',
        type: 'pic'
    },
    sukAdditionalFour: {
        key: 'sukAdditionalFour',
        type: 'pic'
    },
    //Undelivered Quantity  
    //Qualified products total QTYS    Total Quantity of Quantified SKU
    //Uninspected QC SKU Quantity






    formation: {
        key: 'skuFormation',
        _disabled: true,
    },
    categoryId: {
        key: 'skuCategoryId',
        _disabled: true,
    },

    readilyAvailable: {
        key: 'skuReadilyAvailable',
        _disabled: true,
    },
    availableQty: {
        key: 'skuAvailableQty',
        _disabled: true,
    },
    noneSellCountry: {
        key: 'skuNoneSellCountry',
        _disabled: true,
    },

    fobPort: {
        key: 'skuFobPort',
        _disabled: true,
    },
    exwPrice: {
        key: 'skuExwPrice',
        _disabled: true,
    },
    exwCurrency: {
        key: 'skuExwCurrency',
        _disabled: true,
    },
    otherIncoterm: {
        key: 'skuOtherIncoterm',
        _disabled: true,
    },
    otherIncotermPrice: {
        key: 'skuOtherIncotermPrice',
        _disabled: true,
    },
    otherIncotermArea: {
        key: 'skuOtherIncotermArea',
        _disabled: true,
    },
    otherIncotermCurrency: {
        key: 'skuOtherIncotermCurrency',
        _disabled: true,
    },
    brandRemark: {
        key: 'skuBrandRemark',
        _disabled: true,
    },
    brandRelated: {
        key: 'skuBrandRelated',
        _disabled: true,
    },
    certificat: {
        key: 'skuCertificat',
        _disabled: true,
    },

    oem: {
        key: 'skuOem',
        _disabled: true,
    },
    gp20SkuQty: {
        key: 'skuGp20SkuQty',
        _disabled: true,
    },
    gp40SkuQty: {
        key: 'skuGp40SkuQty',
        _disabled: true,
    },
    hq40SkuQty: {
        key: 'skuHq40SkuQty',
        _disabled: true,
    },
    tryDimension: {
        key: 'skuTryDimension',
        _disabled: true,
    },
    skuQtyPerTray: {
        key: 'skuSkuQtyPerTray',
        _disabled: true,
    },
    specialTransportRequire: {
        key: 'skuSpecialTransportRequire',
        _disabled: true,
    },
    inventoryCostMethod: {
        key: 'skuInventoryCostMethod',
        _disabled: true,
    },
    warehourceDefault: {
        key: 'skuWarehourceDefault',
        _disabled: true,
    },
    inventory: { //自有库存?????不知道对不对
        key: 'skuInventory',
        _disabled: true,
    },
    safeInventory: {
        key: 'skuSafeInventory',
        _disabled: true,
    },
    minInventory: {
        key: 'skuMinInventory',
        _disabled: true,
    },
    mainSaleCountry: {
        key: 'skuMainSaleCountry',
        _disabled: true,
    },
    mainSaleArea: {
        key: 'skuMainSaleArea',
        _disabled: true,
    },
    productionDates: {
        key: 'skuProductionDates',
        _disabled: true,
    },
    yearListed: {
        key: 'skuYearListed',
        _disabled: true,
    },
    useDisplayBox: {
        key: 'skuUseDisplayBox',
        _disabled: true,
    },
    displayBoxQty: {
        key: 'skuDisplayBoxQty',
        _disabled: true,
    },
    lengthWidthHeight: {
        key: 'skuLengthWidthHeight',
        _disabled: true,
    },
    otherPackInfoCn: {
        key: 'skuOtherPackInfoCn',
        _disabled: true,
    },
    otherPackInfoEn: {
        key: 'skuOtherPackInfoEn',
        _disabled: true,
    },
    adjustPackage: {
        key: 'skuAdjustPackage',
        _disabled: true,
        _calu: true
    }
}
