export default {
    //ADRESS
    factoryName: {
        key: "name",
        belong: "address"
    },
    factoryAddress: {
        key: "address",
        belong: "address"
    },
    exportPort: {
        key: "exportPort",
        belong: "address"
    },
   contacctPerson1: {
        key: "contactPerson1",
        belong: "address"
    },
  contactPhoneNo1: {
        key: "concatPhone1",
        belong: "address"
    },
  contacctPerson2: {
        key: "contactPerson2",
        belong: "address"
    },
  contactPhoneNo2: {
        key: "contactPhone2",
        belong: "address"
    },

    //...........account info
   beneficiaryName: {
        key: "beneficiaryName",
        belong: "accountInfo"
    },
   beneficiaryAccount: {
        key: "beneficiaryAccount",
        belong: "accountInfo"
    },
    beneficiaryAddress: {
        key: "beneficiaryAddress",
        belong: "accountInfo"
    },
   beneficiaryBankName: {
        key: "beneficiaryBankName",
        belong: "accountInfo"
    },
   beneficiaryBankSWIFT: {
        key: "beneficiaryBankSwift",
        belong: "accountInfo"
    },
   accountType: {
        key: "accountType",
        belong: "accountInfo"
    },
    currency: {
        key: "currency",
        belong: "accountInfo"
    },
    companyId: {
        _hide: true,
        key: "accountType"
    },

    //.............concats
    name: {
      key: 'name',
      belong: "concats"
    },
    department: {
      key: 'deptName',
      belong: "concats"
    },
    gender: {
      key: 'gender',
      belong: "concats"
    },
    position: {
      key: 'position',
      belong: "concats"
    },
    mobileNumber: {
      key: 'cellphone',
      belong: "concats"
    },
    telNumber: {
      key: 'telphone',
      belong: "concats"
    },
    faxNumber: {
      key: 'fax',
      belong: "concats"
    },
    emailAddress: {
      key: 'email',
      belong: "concats"
    },
    skype: {
      key: 'skype',
      belong: "concats"
    },
    qq: {
      key: 'qq',
      belong: "concats"
    },
  //tradeHistory
  orderNo: {
    key: 'orderNo',
    belong: "tradeHistory"
  },
  orderStatus: {
    key: 'status',
    belong: "tradeHistory"
  },
  orderDate: {
    key: 'entryDt',
    belong: "tradeHistory"
  },
  currency: {
    key: 'currency',
    belong: "tradeHistory"
  },
  purchasingPerson: {
    key: 'entryId',
    belong: "tradeHistory"
  },
  skuCode: {
    key: 'skuCode',
    belong: "tradeHistory"
  },
  orderPrice: {
    key: 'totalSkuPrice',
    belong: "tradeHistory"
  },
  orderQuantity: {
    key: 'skuQty',
    belong: "tradeHistory"
  },
  amount: {
    key: 'totalQty',
    belong: "tradeHistory"
  },
  totalNetWeight: {
    key: 'totalNetWeight',
    belong: "tradeHistory"
  },
  totalGrossWeight: {
    key: 'totalGrossWeight',
    belong: "tradeHistory"
  },
  totalVolume: {
    key: 'totalVolume',
    belong: "tradeHistory"
  },
   //inquireHistory
  inquiryNumber: {
    key: 'inquiryNo',
    belong: "inquireHistory"
  },
  inquiryDate: {
    key: 'entryDt',
    belong: "inquireHistory"
  },
  payment: {
    key: 'paymentTerm',
    belong: "inquireHistory"
  },
  departurePort: {
    key: 'departurePort',
    belong: "inquireHistory"
  },
  destinationPort: {
    key: 'destinationPort',
    belong: "inquireHistory"
  },
  quantity: {
    key: 'skuQty',
    belong: "inquireHistory"
  },
  //remark
  date: {
    key: 'entryDt',
    belong: "remark"
  },
  remark: {
    key: 'remark',
    belong: "remark"
  },
  operater: {
    key: 'entryName',
    belong: "remark"
  },
  version: {
    key: 'version',
    belong: "remark",
    _hide: true,
  },
  id:{
    key: 'id',
    belong: "remark",
    _hide: true,
  }
}
