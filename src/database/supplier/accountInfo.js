'use strict';
export default {
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
  beneficiaryBankAddress:{
    key:''
  },
  intermediaryBankName:{
    key:''
  },
  intermBankAddress:{
    key:''
  },
  intermBankSWIFTCode:{
    key:''
  }
}
