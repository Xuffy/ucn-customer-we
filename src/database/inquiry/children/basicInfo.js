export default {
  updateDt: {
    key: 'updateDt',
    type: 'text',
    transForm: 'time',
    _disabled: true,
    _title: 'remark'
  },
  id: {
    _hide: true
  },
  _remark: {
    _hide: true
  },
  paymentTerm: {
    _hide: true
  },
  totalQty: {
    _hide: true,
    _toFixed: 1
  },
  totalCtn: {
    _hide: true,
    _toFixed: 1
  },
  totalAmount: {
    _hide: true,
    _toFixed: 2
  },
  totalVolume: {
    _hide: true,
    _toFixed: 3
  },
  totalNetWeight: {
    _hide: true,
    _toFixed: 3
  },
  totalGrossWeight: {
    _hide: true,
    _toFixed: 3
  },
  timeZone: {
    _hide: true
  },
  operater: { // 修改人 系统带入
    key: 'updateName',
    width: '150px',
    type: 'String',
    _disabled: true
  },
  inquiryNo: { // 询价单号 系统带入
    key: 'inquiryNo',
    rules: [],
    width: '150px',
    type: 'String',
    _disabled: true
  },
  quotationNo: { // 询价子单号 系统带入
    rules: [],
    width: '150px',
    type: 'String',
    _disabled: true
  },
  createTime: { // 创建时间
    key: 'entryDt',
    rules: [],
    width: '150px',
    type: 'String',
    _disabled: true,
    transForm: 'time'
  },
  periodOfValidity: { // 报价有效期
    key: 'periodOfValidity',
    type: 'String',
    width: '150px',
    _form: true
  },
  inquiryStatus: { // 询价单状态
    key: 'status',
    rules: [],
    width: '150px',
    type: 'String',
    _disabled: true,
    transForm: 'INQUIRY_STATUS'
  },
  transportationWay: { // 下拉选择 运输方式
    key: 'transport',
    rules: [],
    width: '150px',
    type: 'Select',
    transForm: 'MD_TN',
    _form: true
  },
  payment: { // 付款方式 下拉选择
    key: 'paymentMethod',
    rules: [],
    width: '150px',
    type: 'Select',
    transForm: 'PMT',
    _form: true
  },
  destinationCountry: { // 目的国 下拉选择
    key: 'destinationCountry',
    rules: [],
    width: '150px',
    type: 'Select',
    transForm: 'COUNTRY',
    _form: true
  },
  departureCountry: { // 发运国 下拉选择所有选项 ok
    rules: [],
    width: '150px',
    type: 'Select',
    transForm: 'COUNTRY',
    _form: true
  },
  incoterm: { // 价格条款 选择 ok
    rules: [],
    width: '150px',
    type: 'Select',
    transForm: 'ITM',
    _rules: {
      required: true
    },
    _form: true
  },
  currency: { // 币种 选择 ok
    rules: [],
    width: '150px',
    type: 'Select',
    transForm: 'CY_UNIT',
    _form: true
  },
  exchangeRate: {
    _disabled: true
  },
  // discountRate: { // 折扣率 限制输入百分比 ok
  //   rules: [],
  //   width: '150px',
  //   type: 'Number',
  //   state: 'rate',
  //   min: 0,
  //   max: 100
  // },
  departurePort: { // 发运港口  ok
    rules: [],
    width: '150px',
    type: 'String',
    transForm: 'SPORT',
    _form: true
  },
  destinationPort: { // 目的港口 ok
    rules: [],
    width: '150px',
    type: 'String',
    transForm: 'SPORT',
    _form: true
  },
  supplierName: { // 供应商名称 ok
    rules: [],
    width: '150px',
    type: 'manySelect',
    _disabled: true,
    _rules: {
      required: true
    },
    _form: true
  },
  supplierType: { // 供应商类型 ok
    rules: [],
    width: '150px',
    type: 'Select',
    _disabled: true,
    transForm: 'SUPPLIER_TYPE'
  },
  exportLicense: { // 出口资质 ok
    rules: [],
    width: '150px',
    type: 'Select',
    _disabled: true,
    transForm: 'EL_IS',
    _form: true
  },
  quantity: {
    key: 'skuQty',
    _disabled: true
  },
  inquiryRemark: { // 询价备注
    key: 'remark',
    rules: [],
    width: '150px',
    type: 'String',
    types: 'textarea',
    xs: 24,
    sm: 24,
    md: 24,
    lg: 24,
    _form: true
  },
  relatedOrderNO: { // 关联订单号
    key: 'orderNo',
    width: '150px',
    type: 'String',
    _disabled: true
  },
  attachment: { // 上传附件
    key: 'attachments',
    rules: [],
    width: '150px',
    type: 'attachment',
    xs: 24,
    sm: 24,
    md: 24,
    lg: 24,
    _upload: {
      ref: 'attachment'
    },
    _form: true
  },
  fieldDisplay: {
    _hide: true
  },
  fieldRemarkDisplay: {
    _hide: true
  }
};
