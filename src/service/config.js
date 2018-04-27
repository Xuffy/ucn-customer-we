export default {
  // 环境配置
  ENV: {
    local: {
      BASE_CS: 'http://192.168.51.33:11003',
      // BASE_CS1: 'http://192.168.51.33:11007',
      BASE_CS1: 'http://dev.upurchase-facade.ucnholding.com:18100',
      BASE_API: '',
      BASE_CS_cgs: 'http://192.168.51.33:11007',
      BASE_HCJ: 'http://dev.upurchase-facade.ucnholding.com:80',
      BASE_JY: 'http://192.168.51.198:18002',
      BASE_DHC: 'http://dev.upurchase-facade.ucnholding.com',
      // BASE_DHC: 'http://dev.upurchase-facade.ucnholding.com:18100',
      BASE_LYF: 'http://dev.uuser-facade.ucnholding.com',
      BASE_JML: 'http://dev.umeta-facade.ucnholding.com',
      BASE_JML2: 'http://dev.umessage-facade.ucnholding.com',
      MOCK: 'https://www.easy-mock.com/mock/5abe0744a2146a37688ec3c1/api',
      BASE_HSM: 'http://dev.uwarehouse.ucnholding.com:18100',
      BASE_LJ: 'http://dev.upurchase-facade.ucnholding.com:18100',
      BASE_dictionary: 'http://dev.umeta-facade.ucnholding.com',
      BASE_BJ: 'http://dev.upurchase-facade.ucnholding.com:18100',
      BASE_SELLER:'http://dev.usupply-facade.ucnholding.com:18100',
      BASE_BUYER:'http://dev.upurchase-facade.ucnholding.com:18100',
      BASE_JML_msg:'http://dev.umessage-facade.ucnholding.com',
      BASE_JML_logs:'http://dev.ubizlog-facade.ucnholding.com',
      BASE_UUSER:'http://dev.uuser-facade.ucnholding.com:18100/',
    },
    develop: {
      BASE_API: 'http://192.168.11.215:30704'
    },
    test: {
      BASE_API: 'http://store.test.tailorx.cn/api'
    },
    production: {
      BASE_API: 'https://store.tailorx.cn/api'
    }
  }[process.env.NODE_ENV],

  // 环境标识
  ENV_FLAG: process.env.NODE_ENV,

  // 是否mock
  IS_MOCK: false,

  // 请求超时
  TIMEOUT: 60000,

  // 项目版本号
  VERSION: `2.0.${process.env.VERSION}`,

  // 本地store缓存 前缀
  STORE_PREFIX: 'ucn_'
}
