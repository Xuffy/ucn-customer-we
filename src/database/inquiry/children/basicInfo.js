export default {
    remarkDate: {
        key: 'updateDt',
        label: ' ',
        type: 'text',
        _disabled: true,
        _inquiryHide: true
    },
    id: {
        _hide: true
    },
    _id: {
        _hide: true
    },
    operater: { //修改人 系统带入
        placeholder: 'Please select',
        width: '150px',
        type: 'text',
        state: 0,
        _disabled: true,
        _inquiryHide: true
    },
    timeZone: { //时区 系统带入
        placeholder: 'Please select',
        rules: [],
        width: '150px',
        type: 'text',
        state: 0,
        _disabled: true,
        _inquiryHide: true
    },
    time: { //时间 系统带入
        placeholder: 'Please select time',
        rules: [],
        width: '150px',
        type: 'text',
        state: 0,
        _disabled: true,
        _inquiryHide: true
    },
    InquiryNo: { //询价单号 系统带入
        key: 'inquiryNo',
        placeholder: 'Please select',
        rules: [],
        width: '150px',
        type: 'text',
        state: 0,
        _disabled: true,
        _inquiryHide: true
    },
    QuotationNo: { //询价子单号 系统带入
        placeholder: 'Please select',
        rules: [],
        width: '150px',
        type: 'text',
        state: 0,
        _disabled: true,
        _inquiryHide: true
    },
    inquiryStatus: { //询价单状态
        placeholder: 'Please select',
        rules: [],
        width: '150px',
        type: 'text',
        state: 0,
        _disabled: true,
        _inquiryHide: true
    },
    transportationWay: { //下拉选择 运输方式
        placeholder: 'Please select',
        rules: [],
        width: '150px',
        type: 'select',
        select: ['by train', 'by air', 'by boat', 'by truck'],
        state: 0
    },
    payment: { //付款方式 下拉选择
        placeholder: 'Please select',
        rules: [],
        width: '150px',
        type: 'select',
        select: ['L/C', 'T/T', 'D/P'],
        state: 0
    },
    destinationCountry: { //目的国 下拉选择
        placeholder: 'Please select',
        rules: [],
        width: '150px',
        type: 'select',
        state: 0
    },
    departureCountry: { //发运国 下拉选择所有选项 ok
        placeholder: 'Please select',
        rules: [],
        width: '150px',
        type: 'select',
        state: 0
    },
    incoterm: { //价格条款 选择 ok
        placeholder: 'Please select',
        rules: [],
        width: '150px',
        type: 'select',
        select: ['FOB', 'EXW', 'CIF'],
        state: 0
    },
    currency: { //币种 选择 ok
        placeholder: 'Please select',
        rules: [],
        width: '150px',
        type: 'select',
        select: ['USD', 'CNY', 'EUR'],
        state: 0
    },
    discountRate: { //折扣率 限制输入百分比 ok
        placeholder: 'Please select',
        rules: [],
        width: '150px',
        type: '%',
        state: 0
    },
    departurePort: { //发运港口  ok
        placeholder: 'Please select',
        rules: [],
        width: '150px',
        type: 'text',
        state: 0
    },
    createTime: { // 创建时间
        key: 'entryDt',
        placeholder: 'Please select',
        rules: [],
        width: '150px',
        type: 'text',
        state: 0,
        _inquiryHide: true
    },
    destinationPort: { //目的港口 ok
        placeholder: 'Please select',
        rules: [],
        width: '150px',
        type: 'text',
        state: 0
    },
    supplierName: { // 供应商名称 ok
        placeholder: 'Please select',
        rules: [],
        width: '150px',
        type: 'select',
        state: 0
    },
    supplierType: { //供应商类型 ok
        placeholder: 'Please select',
        rules: [],
        width: '150px',
        type: 'text',
        state: 0
    },
    exportLicense: { //出口资质 ok
        placeholder: 'Please select',
        rules: [],
        select: ['是', '否'],
        width: '150px',
        type: 'select',
        state: 0
    },
    relatedOrderNO: { //关联订单号
        placeholder: 'Please select',
        rules: [],
        width: '150px',
        type: 'text',
        state: 0
    },
    attachment: { //上传附件
        placeholder: 'Please select',
        rules: [],
        width: '150px',
        type: 'attachment',
        state: 0,
        xs: 24,
        sm: 24,
        md: 24,
        lg: 24
    },
    inquiryRemark: { //询价备注
        key: 'remark',
        placeholder: 'Please select',
        rules: [],
        width: '150px',
        type: 'textarea',
        state: 0,
        xs: 24,
        sm: 24,
        md: 24,
        lg: 24
    },
}