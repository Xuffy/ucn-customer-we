export default {
  updateDt: {
    key: 'updateDt',
    type: 'text',
    _disabled: true,
    _title: 'remark',
    transForm: 'time'
  },
  skuSysCode: {
    key: 'skuSysCode',
    _hide: true
  },
  tenantId: {
    _hide: true
  },
  skuId: {
    _hide: true
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
  displayStyle: {
    _hide: true
  },
  skuCustomerCreate: {
    _hide: true
  },
  operater: {
    key: 'updateName',
    _disabled: true
  },
  pic: {
    key: 'skuPictures',
    _image: true,
    _sort: false,
    _upload: {
      readonly: true
    }
  },
  skuSaleStatus: {
    key: 'skuStatus',
    _disabled: true,
    transForm: 'SKU_SALE_STATUS'
  },
  deleteOrNotRecycle: {
    key: 'skuRecycle',
    _disabled: true,
    transForm: 'AE_IS'
  },
  skuCode: {
    key: 'skuCode',
    _disabled: true
  },
  skuNameEn: {
    key: 'skuNameEn',
    _disabled: true
  },
  skuDescriptionEn: {
    key: 'skuDescEn',
    _disabled: true
  },
  skuNameInCustomerLanguage: {
    key: 'skuNameCustomer'
  },
  skuDescriptionInCustomerLanguage: {
    key: 'skuDescCustomer'
  },
  skuCustomerSkuCode: {
    key: 'skuCustomerSkuCode'
  },
  supplierName: {
    key: 'skuSupplierName',
    _disabled: true
  },
  supplierAbbr: {
    key: 'skuSupplierAbbr',
    _disabled: true
  },
  supplierNo: {
    key: 'skuSupplierCode',
    _disabled: true
  },
  unit: {
    key: 'skuUnit',
    type: 'Select',
    transForm: 'SKU_UNIT'
  },
  productFormation: {
    key: 'skuFormation',
    type: 'Select',
    transForm: 'SKU_FORMATION'
  },
  martialEn: {
    key: 'skuMaterialEn',
    type: 'String'
  },
  colourEn: {
    key: 'skuColourEn',
    type: 'String'
  },
  minimumOrderQuantity: {
    key: 'skuMinOrderQty',
    type: 'Number',
    _toFixed: 1
  },
  deliveryDays: {
    key: 'skuDeliveryDates',
    type: 'Number'
  },
  productDesign: {
    key: 'skuDesign',
    width: '150px',
    type: 'attachment',
    xs: 24,
    sm: 24,
    md: 24,
    lg: 24,
    _upload: {
      ref: 'skuDesign'
    }
  },
  category: {
    key: 'skuCategoryId',
    type: 'Select',
    state: 'category',
    transForm: 'SKU_CATEGORY',
    _disabled: true
  },
  barcode: {
    key: 'skuBarcode',
    type: 'String'
  },
  readilyAvailable: {
    key: 'skuReadilyAvailable',
    type: 'Select',
    transForm: 'RA_IS'
  },
  skuAvailable: {
    key: 'skuAvailableQty',
    type: 'Number',
    _toFixed: 1
  },
  qty: {
    key: 'qty',
    type: 'Number',
    _toFixed: 1
  },
  totalAmount: {
    key: 'totalAmount',
    type: 'Number',
    _disabled: true
  },
  totalCtn: {
    key: 'totalCtn',
    type: 'Number',
    _disabled: true
  },
  totalVolume: {
    key: 'totalVolume',
    type: 'Number',
    _disabled: true
  },
  totalNetWeight: {
    key: 'totalNetWeight',
    type: 'Number',
    _disabled: true
  },
  totalGrossWeight: {
    key: 'totalGrossWeight',
    type: 'Number',
    _disabled: true
  },
  restrictedSellingCountry: {
    key: 'skuNoneSellCountry',
    _disabled: true,
    transForm: 'COUNTRY'
  },
  applicableAge: {
    key: 'skuApplicableAge',
    type: 'Number',
    max: 200,
    min: 0
  },
  expirationDate: {
    key: 'skuExpireDates',
    type: 'Number'
  },
  expirationDateUnit: {
    key: 'skuExpireUnit',
    type: 'Select',
    transForm: 'ED_UNIT'
  },
  explain: {
    key: 'skuComments',
    width: '150px',
    type: 'attachment',
    xs: 24,
    sm: 24,
    md: 24,
    lg: 24,
    _upload: {
      ref: 'skuComments'
    }
  },
  fobCurrency: {
    key: 'skuFobCurrency',
    type: 'Select',
    transForm: 'CY_UNIT'
  },
  fobPrice: {
    key: 'skuFobPrice',
    type: 'Number',
    _total: {
      require: true,
      unitKey: 'skuFobCurrency'
    },
    _toFixed: 4
  },
  referenceFobPriceUsd: {
    key: 'skuRefFobPrice',
    type: 'Number',
    _disabled: true,
    _total: {
      require: true,
      unitKey: 'skuFobCurrency'
    },
    _i_note: 'skuRefFobPriceNote',
    _toFixed: 4
  },
  fobPort: {
    key: 'skuFobPort',
    type: 'String'
  },
  exwPrice: {
    key: 'skuExwPrice',
    type: 'Number',
    _total: {
      require: true,
      unitKey: 'skuExwCurrency'
    },
    _toFixed: 4
  },
  exwCurrency: {
    key: 'skuExwCurrency',
    type: 'Select',
    transForm: 'CY_UNIT'
  },
  cifPrice: {
    key: 'skuCifPrice',
    type: 'Number',
    _total: {
      require: true,
      unitKey: 'skuCifCurrency'
    },
    _toFixed: 4
  },
  referenceCifPriceUsd: {
    key: 'skuRefCifPrice',
    type: 'Number',
    _disabled: true,
    _total: {
      require: true,
      unitKey: 'skuCifCurrency'
    },
    _i_note: 'skuRefCifPriceNote',
    _toFixed: 4
  },
  cifCurrency: {
    key: 'skuCifCurrency',
    type: 'Select',
    transForm: 'CY_UNIT'
  },
  cifArea: {
    key: 'skuCifArea',
    type: 'String'
  },
  dduOrice: {
    key: 'skuDduPrice',
    type: 'Number',
    _total: {
      require: true,
      unitKey: 'skuDduCurrency'
    },
    _toFixed: 4
  },
  referenceDdupriceUsd: {
    key: 'skuRefDduPrice',
    type: 'Number',
    _disabled: true,
    _total: {
      require: true,
      unitKey: 'skuDduCurrency'
    },
    _i_note: 'skuRefDduPriceNote',
    _toFixed: 4
  },
  dduCurrency: {
    key: 'skuDduCurrency',
    type: 'Select',
    transForm: 'CY_UNIT'
  },
  dduArea: {
    key: 'skuDduArea',
    type: 'String'
  },
  taxRefundRate: {
    key: 'skuTaxRefundRate',
    type: 'Number',
    unit: '%',
    max: 100,
    min: 0,
    _toFixed: 2
  },
  hsCode: {
    key: 'skuCustomsCode',
    type: 'String'
  },
  customsDeclarationNameEn: {
    key: 'skuCustomsNameEn',
    type: 'String',
    max: 100
  },
  englishTradeMark: {
    key: 'skuTradeMarkEn',
    type: 'String'
  },
  commodityInspectionEnglishName: {
    key: 'skuCommodityInspectionEn',
    type: 'String'
  },
  origin: {
    key: 'skuOrigin',
    type: 'String'
  },
  brand: {
    key: 'skuBrand',
    type: 'String'
  },
  brandRemark: {
    key: 'skuBrandRemark',
    type: 'String'
  },
  relatedBrand: {
    key: 'skuBrandRelated',
    type: 'String'
  },
  certificat: {
    key: 'skuCertificat',
    type: 'String',
    max: 45
  },
  unitOfWeight: {
    key: 'skuUnitWeight',
    type: 'Select',
    transForm: 'WT_UNIT'
  },
  unitOfLength: {
    key: 'skuUnitLength',
    type: 'Select',
    transForm: 'LH_UNIT'
  },
  unitOfVolume: {
    key: 'skuUnitVolume',
    type: 'Select',
    transForm: 'VE_UNIT'
  },
  skuLength: {
    key: 'skuLength',
    type: 'Number',
    _total: true,
    _toFixed: 2
  },
  skuBreadth: {
    key: 'skuWidth',
    type: 'Number',
    _total: true,
    _toFixed: 2
  },
  skuHeight: {
    key: 'skuHeight',
    type: 'Number',
    _total: true,
    _toFixed: 2
  },
  skuNetWeight: {
    key: 'skuNetWeight',
    type: 'Number',
    _total: true,
    _toFixed: 2
  },
  skuVolume: {
    key: 'skuVolume',
    type: 'Number',
    _total: true,
    _toFixed: 6
  },
  packingMethodEn: {
    key: 'skuMethodPkgEn',
    type: 'String',
    max: 45
  },
  skuQuantityOfInnerCarton: {
    key: 'skuInnerCartonQty',
    type: 'Number',
    _total: true,
    _toFixed: 1
  },
  lengthOfInnerCarton: {
    key: 'skuInnerCartonLength',
    type: 'Number',
    _total: true,
    _toFixed: 2
  },
  breadthOfInnerCarton: {
    key: 'skuInnerCartonWidth',
    type: 'Number',
    _total: true,
    _toFixed: 2
  },
  heightOfInnerCarton: {
    key: 'skuInnerCartonHeight',
    type: 'Number',
    _total: true,
    _toFixed: 2
  },
  netWeightOfInnerCarton: {
    key: 'skuInnerCartonWeightNet',
    type: 'Number',
    _total: true,
    _toFixed: 2
  },
  grossWeightofInnerCarton: {
    key: 'skuInnerCartonRoughWeight',
    type: 'Number',
    _total: true,
    _toFixed: 2
  },
  volumeOfInnerCarton: {
    key: 'skuInnerCartonVolume',
    type: 'Number',
    _total: true,
    _toFixed: 3
  },
  descriptionOfInnerCarton: {
    key: 'skuInnerCartonDesc',
    type: 'String',
    max: 100
  },
  packingMethodOfInnerCartonEn: {
    key: 'skuInnerCartonMethodEn',
    type: 'String',
    max: 45
  },
  descriptionOfOuterCarton: {
    key: 'skuOuterCartonDesc',
    type: 'String',
    max: 100
  },
  innerCartonOfOuterCarton: {
    key: 'skuInnerCartonOuterNum',
    type: 'Number'
  },
  skuQuantityOfOuterCarton: {
    key: 'skuOuterCartonQty',
    type: 'Number',
    _total: true,
    _toFixed: 1
  },
  lengthOfOuterCarton: {
    key: 'skuOuterCartonLength',
    type: 'Number',
    _total: true,
    _toFixed: 2
  },
  breadthOfOuterCarton: {
    key: 'skuOuterCartonWidth',
    type: 'Number',
    _total: true,
    _toFixed: 2
  },
  heightOfOuterCarton: {
    key: 'skuOuterCartonHeight',
    type: 'Number',
    _total: true,
    _toFixed: 2
  },
  netWeightOfOuterCarton: {
    key: 'skuOuterCartonNetWeight',
    type: 'Number',
    _total: true,
    _toFixed: 2
  },
  grossWeightOfOuterCarton: {
    key: 'skuOuterCartonRoughWeight',
    type: 'Number',
    _total: true,
    _toFixed: 2
  },
  volumeOfOuterCarton: {
    key: 'skuOuterCartonVolume',
    type: 'Number',
    _total: true,
    _toFixed: 3
  },
  packingMethodOfOuterCartonEn: {
    key: 'skuOuterCartonMethodEn',
    max: 45
  },
  oem: {
    key: 'skuOem',
    type: 'Select',
    transForm: 'OEM_IS'
  },
  oemQty: {
    key: 'skuOemQty',
    type: 'Number',
    _toFixed: 1
  },
  gp20SkuQuantity: {
    key: 'skuGp20SkuQty',
    type: 'Number',
    _total: true,
    _toFixed: 1
  },
  gp40SkuQuantity: {
    key: 'skuGp40SkuQty',
    type: 'Number',
    _total: true,
    _toFixed: 1
  },
  hq40SkuQuantity: {
    key: 'skuHq40SkuQty',
    type: 'Number',
    _total: true,
    _toFixed: 1
  },
  trayDimension: {
    key: 'skuTryDimension',
    type: 'Number'
  },
  skuQuantityPerTray: {
    key: 'skuSkuQtyPerTray',
    type: 'Number',
    _total: true
  },
  specialTransportRequirements: {
    key: 'skuSpecialTransportRequire',
    type: 'String',
    max: 100
  },
  mainsaleCountry: {
    key: 'skuMainSaleCountry',
    type: 'Select',
    transForm: 'COUNTRY'
  },
  mainsalearea: {
    key: 'skuMainSaleArea',
    type: 'String'
  },
  qualityStander: {
    key: 'skuQualityStander',
    type: 'String'
  },
  yearOfListed: {
    key: 'skuYearListed',
    state: 'Date',
    time: 'yyyy-mm'
  },
  useDisplayBoxOrNot: {
    key: 'skuUseDisplayBox',
    type: 'Select',
    transForm: 'UDB_IS'
  },
  skuQuantityInDisplayBox: {
    key: 'skuDisplayBoxQty',
    type: 'Number',
    _toFixed: 1
  },
  lengthBreadthAndHeightOfDisplayBox: {
    key: 'skuLengthWidthHeight',
    type: 'Number'
  },
  otherPackingInformationEn: {
    key: 'skuOtherPackInfoEn',
    type: 'String',
    max: 100
  },
  adjustSkuAndPackageOrNot: {
    key: 'skuAdjustPackage',
    type: 'Select',
    transForm: 'SKU_PG_IS'
  },
  additionalPicture1: {
    _image: true,
    _sort: false,
    _upload: true
  },
  additionalPicture2: {
    _image: true,
    _sort: false,
    _upload: true
  },
  additionalPicture3: {
    _image: true,
    _sort: false,
    _upload: true
  },
  additionalPicture4: {
    _image: true,
    _sort: false,
    _upload: true
  },
  fieldDisplay: {
    _hide: true
  },
  fieldRemarkDisplay: {
    _hide: true
  }
};
