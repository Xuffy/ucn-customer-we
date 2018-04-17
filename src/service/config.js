export default {
  // 环境配置
  ENV: {
    local: {
      BASE_CS: 'http://192.168.51.33:11003',
      BASE_API: '',
      BASE_CS_cgs:'http://192.168.51.33:11007', 
      BASE_DHC: 'http://192.168.51.111:18100',
      BASE_HCJ:'http://192.168.51.173:18100', 
      BASE_DHC: 'http://dev.upurchase-facade.ucnholding.com',
      BASE_DHC: 'http://192.168.51.111:18100',
      BASE_HCJ:'http://192.168.51.173:18003',
      MOCK: 'https://www.easy-mock.com/mock/5abe0744a2146a37688ec3c1/api',
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
