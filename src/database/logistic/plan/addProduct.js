export default {
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
    "skuSupplierAbbr": {
      type: 'String',
      _disabled: true,
      typeSlef: 'text',
    },
    "skuSupplierId": {
      type: 'String',
      _disabled: true,
      typeSlef: 'text',
      _hide: true
    },
    "entryDt": {
      type: 'Date',
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
    "skuPictures":{
      type: 'String',
      _image:true,
      _upload:{
        readonly:true
      },
      typeSlef: 'text'
    },
    "orderNo": {
      type: 'String',
      _disabled: true,
      typeSlef: 'text'
    },
    "skuCode": {
      type: 'String',
      _disabled: true,
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
    "fieldDisplay": {
      type: 'String',
      _disabled: true,
      typeSlef: 'text',
      _hide: true
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
    "productDescription": {
      type: 'String',
      _disabled: true,
      typeSlef: 'text'
    },
    "blSkuName": {
      type: 'String',
      _disabled: true,
      typeSlef: 'text'
    },
    "customsDeclarationNameCn": {
      type: 'String',
      _disabled: true,
      typeSlef: 'text'
    },
    "customsDeclarationNameEn": {
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
    "skuNameCustomer": {
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
    "skuUnit": {
      key:'unit',
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
    "containerId": {
      type: 'String',
      _disabled: true,
      typeSlef: 'text',
      _hide: true
    },
    "containerType": {
      type: 'String',
      _disabled: true,
      typeSlef: 'text'
    },
    "totalQuantityOfOuterCartonsInContainer": {
      key: 'totalContainerOuterCartonsQty',
      _filed: 'totalContainerOuterCartonsQty',
      // computedKey 计算要使用的key 的联动值
      // computedResKey 计算的结果显示的key 的联动值
      computed : [
        {computedKey:'skuOuterCartonQty',computedResKey:'totalContainerQty'},
        {computedKey:'outerCartonVolume',computedResKey:'totalContainerVolume'},
        {computedKey:'outerCartonNetWeight',computedResKey:'totalContainerNetWeight'},
        {computedKey:'outerCartonGrossWeight',computedResKey:'totalContainerGrossWeight'}
      ],
      type: 'String',
      _toFixed:1,
      typeSlef: 'text',
      _important: true
    },
    "skuOuterCartonQty": {
      type: 'String',
      _disabled: true,
      typeSlef: 'text',
      _important: true
    },
    "totalQuantityInContainer": {
      key: 'totalContainerQty',
      _filed: 'totalContainerQty',
      _disabled: true,
      type: 'String',
      typeSlef: 'text',
      _important: true
    },
    "skuOuterCartonVolume": {
      key:'skuOuterCartonVolume',
      _filed:'outerCartonVolume',
      type: 'String',
      _disabled: true,
      typeSlef: 'text'
    },
    "totalVolumeInContainer": {
      key: 'totalContainerVolume',
      _filed: 'totalContainerVolume',
      type: 'String',
      _disabled: true,
      typeSlef: 'text',
      _important: true
    },
    "skuOuterCartonNetWeight": {
      key:'skuOuterCartonNetWeight',
      _filed:'outerCartonNetWeight',
      type: 'String',
      _disabled: true,
      typeSlef: 'text'
    },
    "totalNetWeightInContainer": {
      key: 'totalContainerNetWeight',
      _filed: 'totalContainerNetWeight',
      type: 'String',
      _disabled: true,
      typeSlef: 'text',
      _important: true
    },
    "outerCartonGrossWeight": {
      key:'skuOuterCartonRoughWeight',
      _filed:'outerCartonGrossWeight',
      type: 'String',
      _disabled: true,
      typeSlef: 'text'
    },
    "totalContainerGrossWeight": {
      key:'totalCtnGw',
      _filed:'totalContainerGrossWeight',
      type: 'String',
      _disabled: true,
      typeSlef: 'text'
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
    }
  }
  