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
        key: 'planPayAmount-actualPayAmount' //待付
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
        key: 'planReceiveAmount-actualReceiveAmount'  //待收
    },
    planDateOfReceipt: {  //应收时间
       key:'planReceiveDt'
    },
    actualDateOfReceipt: {
        key: 'actualReceiveDt'
    }
  }