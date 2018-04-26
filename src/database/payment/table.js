export default {
    orderNo: {
      key: 'orderNo'
    },
    orderType: {
        key: 'orderType'
    },
    orderStatus: {
        key: 'status'
    },
    ordercreatedate: {
        key: 'orderEntryDt'
    },
    paymentUpdateDate: {
        key: 'updateDt'
    },
    payable: {
        key: 'planPayAmount' //应付
    },
    paid: {
        key: 'actualPayAmount'
    },
    waitPayment: {
        _important:true,
        key: '' //待付
    },
    planDateOfPayment: {   //应付时间
        key: 'planPayDt'
    },
    actualDateOfPayment: {
        key: 'actualPayDt'
    },
    receivable: {
        key: 'planReceiveAmount'  //应收
    },
    received: {
        key: 'actualReceiveAmount'
    },
    waitReceipt: {
        _important:true,
        key: ''  //待收
    },
    planDateOfReceipt: {  //应收时间
       key:'planReceiveDt'
    },
    actualDateOfReceipt: {
        key: 'actualReceiveDt'
    },
    currencyCode: {
        key: 'currencyCode'
    },
    _totalRow:{
        _important:true,
        _hide:true
    }
  }