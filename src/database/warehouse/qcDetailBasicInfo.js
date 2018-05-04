export default {
    QCOrderNo: {
        key: 'qcOrderNo',
        type: 'String'
    },
    QCType: {
        key: 'qcTypeDictCode',
        type: 'Select'
    },
    QCDate: {
        key: 'qcDate',
        type: 'String'
    },
    factoryAddress: {
        key: 'factoryAddress',
        type: 'Select'
    },
    FactoryContactPhone: {
        type: 'phone'
    },
    QCStatus: {
        key: 'qcStatusDictCode',
        type: 'Select'
    },
    QCMethod: {
        key: 'qcMethodDictCode',
        type: 'Select'
    },
    surveyor: {
        type: 'Select'
    },
    serviceFee: {
        type: 'String'
    },
    serviceProvidersNo: {
        key: 'serviceProviderNo',
        type: 'String'
    },
    serviceProvidersName: {
        key: 'serviceName',
        type: 'String'
    },
    exchangeCurrency: {
        key: 'exchangeCurrencyDictCode',
        type: 'Select'
    },
    timeZone: {
        _hide: true
    },
    remark: {
        type: 'textarea',
        xs: 24,
        sm: 24,
        md: 24,
        lg: 24
    },
    attachment: {
        type: 'attachment',
        xs: 24,
        sm: 24,
        md: 24,
        lg: 24
    }
}