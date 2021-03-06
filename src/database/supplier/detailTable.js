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

  //remark
  remark: {
    key: 'remark',
    belong: "remark"
  },
  operater: {
    key: 'entryName',
    belong: "remark"
  },
  date: {
    key: 'entryDt',
    belong: "remark",
    type: 'textDate'
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
