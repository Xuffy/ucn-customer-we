export default {
  orderNumber: {
    key: 'orderNo',
  },
  country: {
    key: 'country',
    _rules:{
      required:true,
    }
  },
  province: {
    key: 'province',
    _rules:{
      required:true,
    }
  },
  city: {
    key: 'city',
    _rules:{
      required:true,
    }
  },
  address: {
    key: 'address',
    _rules:{
      required:true,
    }
  },
  receiveCountry: {
    key: 'receiveCountry',
  },
  receiveProvince: {
    key: 'receiveProvince',
  },
  receiveCity: {
    key: 'receiveCity',
  },
  receiverAddress: {
    key: 'receiveAddress',
  },
  id:{
    key: 'id',
    _hide:true,
  }
}
