/*
 * created by L_Recall on 2018/05/28
 */
export const basicInfoObj = {
  logisticsNo: {
    type: 'input',
    value: null,
    disabled:true 
  },
  logisticsStatus: {
    type: 'selector',
    value: 2,
    defaultVal: 2,
    disabled:true 
  },
  shipmentStatus: {
    type: 'selector',
    value: null
  },
  createDate: {
    type: 'date',
    value: null,
    disabled:true 
  },
  customerName: {
    type: 'input',
    value: null,
    disabled:true 
  },
  shipServiceProvider: {
    type: 'input',
    value: null
  },
  receiptCompany: {
    type: 'input',
    value: null,
  },
  shippingAgent: {
    type: 'input',
    value: null
  },
  exchangeCurrency: {
    type: 'selector',
    value: null,
    _rules:{
      required:true
    }
  },
  payment: {
    type: 'selector',
    value: null,
    _rules:{
      required:true
    }
  },
  paymentTerm: {
    type: 'input',
    value: null
  },
  transportationWay: {
    type: 'input',
    value: '海运',
    defaultVal:'海运',
    disabled:true 
  },
  loadingType: {
    type: 'input',
    value: '集装箱',
    defaultVal:'集装箱',
    disabled:true 
  },
  permitedForTransportation: {
    type: 'selector',
    value: null
  },
  blType: {
    type: 'selector',
    value: null
  },
  blQty: {
    type: 'input',
    value: '',
    _rules:{
      required:true,
      type:'Number'
    }
  },
  blNo: {
    type: 'input',
    value: null
  },
  shipper: {
    type: 'input',
    value: null
  },
  consignee: {
    type: 'input',
    value: null
  },
  notify: {
    type: 'input',
    value: null
  }
}


export const CreatPlanBasicInfoObj = {
  logisticsNo: {
    type: 'input',
    value: null,
    disabled:true 
  },
  logisticsStatus: {
    type: 'selector',
    value: 2,
    defaultVal: 2,
    disabled:true 
  },
  shipmentStatus: {
    type: 'selector',
    value: null
  },
  customerName: {
    type: 'input',
    value: null,
    disabled:true 
  },
  shipServiceProvider: {
    type: 'input',
    value: null
  },
  receiptCompany: {
    type: 'input',
    value: null,
  },
  shippingAgent: {
    type: 'input',
    value: null
  },
  exchangeCurrency: {
    type: 'selector',
    value: null,
    _rules:{
      required:true
    }
  },
  payment: {
    type: 'selector',
    value: null,
    _rules:{
      required:true
    }
  },
  paymentTerm: {
    type: 'input',
    value: null
  },
  transportationWay: {
    type: 'input',
    value: '海运',
    defaultVal:'海运',
    disabled:true 
  },
  loadingType: {
    type: 'input',
    value: '集装箱',
    defaultVal:'集装箱',
    disabled:true 
  },
  permitedForTransportation: {
    type: 'selector',
    value: null
  },
  blType: {
    type: 'selector',
    value: null
  },
  blQty: {
    type: 'input',
    value: '',
    _rules:{
      required:true,
      type:'Number'
    }
  },
  blNo: {
    type: 'input',
    value: null
  },
  shipper: {
    type: 'input',
    value: null
  },
  consignee: {
    type: 'input',
    value: null
  },
  notify: {
    type: 'input',
    value: null
  }
}

export const dbBasicInfoObj ={
  "id": {
    type: 'String',
    _disabled: true,
    typeSlef: 'text',
    _hide: true
  },
  "vId": {
    type: 'String',
    _disabled: true,
    typeSlef: 'text',
    _hide: true
  },
  "argID": {
    type: 'String',
    _disabled: true,
    typeSlef: 'text',
    _hide: true
  },
  "containerId": {
    type: 'String',
    _disabled: true,
    typeSlef: 'text',
    _hide: true
  },
  "skuSupplierId": {
    type: 'String',
    _disabled: true,
    typeSlef: 'text',
    _hide: true
  },
  "entryDt": {
    type: 'String',
    _disabled: true,
    typeSlef: 'text',
    _hide: true
  },
  "entryName": {
    type: 'String',
    _disabled: true,
    typeSlef: 'text',
    _hide: true
  },
  "orderNo": {
    type: 'String',
    _disabled: true,
    typeSlef: 'text'
  },
  "skuPictures":{
    type: 'String',
    _image:true,
    _upload:{
      readonly:true
    },
    typeSlef: 'text'
  },
  "orderId": {
    type: 'String',
    _disabled: true,
    typeSlef: 'text',
    _hide: true
  },
  "skuId": {
    type: 'String',
    _disabled: true,
    typeSlef: 'text',
    _hide: true
  },
  "toShipCartonQty": {
    type: 'String',
    typeSlef: 'text',
    _important: true
  },
  "fieldDisplay": {
    type: 'String',
    _disabled: true,
    typeSlef: 'text',
    _hide: true
  },
  "toShipQty": {
    type: 'String',
    typeSlef: 'text',
    _important: true
  },
  "skuOuterCartonQty": {
    type: 'String',
    _disabled: true,
    typeSlef: 'text'
  },
  "skuCode": {
    type: 'String',
    _disabled: true,
    typeSlef: 'text'
  },
  "skuNameEn": {
    type: 'String',
    _disabled: true,
    typeSlef: 'text',
  },
  "skuNameCn": {
    type: 'String',
    _disabled: true,
    typeSlef: 'text'
  },
  "skuNameCustomer": {
    type: 'String',
    _disabled: true,
    typeSlef: 'text'
  },
  "blSkuName": {
    type: 'String',
    _disabled: true,
    typeSlef: 'text'
  },
  "skuCustomsNameCn": {
    type: 'String',
    _disabled: true,
    typeSlef: 'text'
  },
  "skuCustomsNameEn": {
    type: 'String',
    _disabled: true,
    typeSlef: 'text'
  },
  "hsCode": {
    type: 'String',
    _disabled: true,
    typeSlef: 'text'
  },
  "reportElement": {
    type: 'String',
    _disabled: true,
    typeSlef: 'text'
  },
  "skuSupplierName": {
    type: 'String',
    _disabled: true,
    typeSlef: 'text'
  },
  "skuSupplierCode": {
    type: 'String',
    _disabled: true,
    typeSlef: 'text'
  },
  "skuCustomerSkuCode": {
    type: 'String',
    _disabled: true,
    typeSlef: 'text'
  },
  "factorySkuCode": {
    type: 'String',
    _disabled: true,
    typeSlef: 'text'
  },
  "skuUnit": {
    type: 'String',
    _disabled: true,
    typeSlef: 'text'
  },
  "unitExportPrice": {
    type: 'String',
    _disabled: true,
    typeSlef: 'text',
    _important: true
  },
  "totalExportPrice": {
    type: 'String',
    _disabled: true,
    typeSlef: 'text',
    _important: true
  },
  "currency": {
    type: 'String',
    _disabled: true,
    typeSlef: 'text'
  },
  "skuQty": {
    type: 'String',
    _disabled: true,
    typeSlef: 'text'
  },
  "skuCartonQty": {
    type: 'String',
    _disabled: true,
    typeSlef: 'text'
  },
  "containerNo": {
    type: 'String',
    _disabled: true,
    typeSlef: 'text'
  },
  "containerType": {
    type: 'String',
    _disabled: true,
    typeSlef: 'text'
  },
  "totalQuantityInContainer": {
    key: 'totalContainerQty',
    _filed: 'totalContainerQty',
    type: 'String',
    _disabled: true,
    typeSlef: 'text',
    _important: true
  },
  "totalVolumeInContainer": {
    key: 'totalContainerVolume',
    _filed: 'totalContainerVolume',
    type: 'String',
    _disabled: true,
    typeSlef: 'text',
    _important: true
  },
  "totalNetWeightInContainer": {
    key: 'totalContainerNetWeight',
    _filed: 'totalContainerNetWeight',
    type: 'String',
    _disabled: true,
    typeSlef: 'text',
    _important: true
  },
  "totalQuantityOfOuterCartonsInContainer": {
    key: 'totalContainerOuterCartonsQty',
    _filed: 'totalContainerOuterCartonsQty',
    type: 'String',
    _disabled: true,
    typeSlef: 'text',
    _important: true
  },
  "skuOuterCartonLength": {
    type: 'String',
    _disabled: true,
    typeSlef: 'text'
  },
  "skuOuterCartonWidth": {
    type: 'String',
    _disabled: true,
    typeSlef: 'text'
  },
  "skuOuterCartonHeight": {
    type: 'String',
    _disabled: true,
    typeSlef: 'text'
  },
  "skuOuterCartonNetWeight": {
    type: 'String',
    _disabled: true,
    typeSlef: 'text'
  },
  "skuOuterCartonRoughWeight": {
    type: 'String',
    _disabled: true,
    typeSlef: 'text'
  },
  "skuOuterCartonVolume": {
    type: 'String',
    _disabled: true,
    typeSlef: 'text'
  },
  "skuShippingMarks": {
    type: 'String',
    _disabled: true,
    typeSlef: 'text'
  },
  "skuOuterCartonBarCode": {
    type: 'String',
    _disabled: true,
    typeSlef: 'text'
  },
  "skuOuterCartonCode": {
    type: 'String',
    _disabled: true,
    typeSlef: 'text'
  },
  "skuSupplierCompanyId": {
    type: 'String',
    _disabled: true,
    typeSlef: 'text',
    _hide: true
  },
  "skuSupplierTenantId": {
    type: 'String',
    _disabled: true,
    typeSlef: 'text',
    _hide: true
  },
  "shipmentStatus": {
    type: 'selector',
    typeSlef: 'text',
    _disabled: true
  }
}

export const ExchangeRateInfo = {
  'CNYUSD':{
    type: 'input',
    value: null,
    disabled:true 
  },
  'USDCNY':{
    type: 'input',
    value: null,
    disabled:true 
  },
  'CNYEUR':{
    type: 'input',
    value: null,
    disabled:true 
  },
  'EURCNY':{
    type: 'input',
    value: null,
    disabled:true 
  },
  'USDEUR':{
    type: 'input',
    value: null,
    disabled:true 
  },
  'EURUSD':{
    type: 'input',
    value: null,
    disabled:true 
  },
}


export const transportInfoObj = {
  transportCompany: {
    type: 'input',
    value: null
  },
  vesselName: {
    type: 'input',
    value: null
  },
  vesselNo: {
    type: 'input',
    value: null
  },
  departureCountry: {
    type: 'filterable',
    value: null
  },
  departurePort: {
    type: 'input',
    value: null,
    _rules:{
      required:true
    }
  },
  destinationCountry: {
    type: 'filterable',
    value: null
  },
  destinationPort: {
    type: 'input',
    value: null,
    _rules:{
      required:true
    }
  }
}

export const payMentInfo = {
  paymentItem: {
    key:'name',
    _rules:{
      required:true
    }
  },
  supplierName: {
    key:'payToCompanyName',
    _rules:{
      required:true
    }
  },
  estPayDate: {
    key:'planPayDt',
    _rules:{
      required:true
    }
  },
  estAmount: {
    key:'planPayAmount',
    _rules:{
      type:'Number',
      required:true
    }
  },
  actPayDate: {
    key:'actualPayDt',
  },
  actAmount: {
    key:'actualPayAmount'
  }
}

export const dbcontainerInfo = {
  containerType: {
    _rules:{
      required:true
    }
  }
}

export const dbProductInfo = {
  "toShipCartonQty": {
    _rules:{
      type:'Number'
    }
  },
  "toShipQty": {
    _rules:{
      type:'Number'
    }
  }
}


export const addProductFromOrderFilter = {
  "orderNo": {
    _isDefaultShow:true
  },
  "skuCode": {
    _isDefaultShow:true
  },
  "skuNameEn": {
    _isDefaultShow:true
  }
}