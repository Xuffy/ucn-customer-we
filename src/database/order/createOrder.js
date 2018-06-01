export default {
    orderNo:{
        type:'input',
        belong:'basicInfo',
        //create的时候不显示
    },
    entryDt:{
        type:'date',
        belong:'basicInfo'
    },
    customerOrderNo:{
        type:'input',
        belong:'basicInfo'
    },
    customerName:{
        type:'input',
        belong:'basicInfo'
    },
    customerNo:{
        type:'input',
        belong:'basicInfo'
    },
    supplierOrderNo:{
        type:'input',
        belong:'basicInfo'
    },
    supplierName:{
        type:'select',
        belong:'basicInfo',
        isSupplier:true
    },
    supplierCode:{  //供应商编号
        type:'select',
        belong:'basicInfo',
    },
    quotationNo:{
        type:'input',
        belong:'basicInfo',
        disabled:true
    },
    status:{
        type:'select',
        belong:'basicInfo',
    },
    deliveryDt:{
        type:'date',
        belong:'basicInfo',
    },
    incoterm:{
        type:'input',
        belong:'basicInfo',
    },
    currency:{
        type:'select',
        belong:'basicInfo',
    },
    incotermArea:{
        type:'input',
        belong:'basicInfo',
    },
    payment:{
        type:'select',
        belong:'basicInfo',
    },
    lcNo:{
        type:'input',
        belong:'basicInfo',
    },
    paymentDays:{
        type:'number',
        belong:'basicInfo',
    },
    paymentStatus:{
        type:'select',
        belong:'basicInfo',
    },
    departureCountry:{
        type:'select',
        belong:'basicInfo',
    },
    departurePort:{
        type:'select',       //??????
        belong:'basicInfo',
    },
    destCountry:{
        type:'select',
        belong:'basicInfo',
    },
    destPort:{
        type:'select',       //??????
        belong:'basicInfo',
    },
    transport:{
        type:'input',
        belong:'basicInfo',
    },
    customerAgreementNo:{
        type:'input',
        belong:'basicInfo',
    },
    customerAgreementDt:{
        type:'date',
        belong:'basicInfo',
    },
    remark:{
        type:'textarea',
        belong:'basicInfo',
    },



}