export default {
  // 环境配置
  ENV: {
    local: {
      LOGIN_URL: 'http://dev.auth.ucnscm.cn/#/?type=1&redirect=',
      BASE_CS: 'http://192.168.51.33:11003',
      //BASE_CS1: 'http://192.168.51.33:11007',
      BASE_CS1: 'http://dev.upurchase-facade.ucnholding.com:18100',
      // BASE_CS1: 'http://192.168.51.33:11007',
//      BASE_CS1: 'http://192.168.51.33:11007',
      BASE_API: '',
      BASE_CS_cgs: 'http://192.168.51.33:11007',
      BASE_HCJ: 'http://dev.upurchase-facade.ucnholding.com:18100',
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
      BASE_SELLER: 'http://dev.usupply-facade.ucnholding.com:18100',
      BASE_BUYER: 'http://dev.upurchase-facade.ucnholding.com:18100',
      BASE_TEST: 'http://dev.upurchase-facade.ucnholding.com:80',
      BASE_JML_msg: 'http://dev.umessage-facade.ucnholding.com',
      BASE_JML_logs: 'http://dev.ubizlog-facade.ucnholding.com',
      BASE_UUSER: 'http://dev.uuser-facade.ucnholding.com:18100/',


      BASE_URL: 'http://dev.upurchase-facade.ucnholding.com:18100', // 采购端
      USSO_URL: 'http://dev.usso-facade.ucnholding.com:18100', // sso 服务
      UUSER_URL: 'http://dev.uuser-facade.ucnholding.com:18100', // 用户中心
      UMETA_URL: 'http://dev.umeta-facade.ucnholding.com:18100', // 元数据
      UMESSAGE_URL: 'http://dev.umessage-facade.ucnholding.com:18100', // 消息服务
      UOSS_URL: 'http://dev.uoss-facade.ucnholding.com:18100', // 对象存储服务
      ULOG_URL: 'http://dev.ulog-facade.ucnholding.com:18100', // 日志服务
      UPURCHASE_URL: 'http://dev.upurchase-facade.ucnholding.com:18100', // 采购端
      USUPPLY_URL: 'http://dev.usupply-facade.ucnholding.com:18100', // 供应商端
      USERVICE_URL: 'http://dev.uservice.ucnholding.com:18100', // 服务商端
      UBIZLOG_URL: 'http://dev.ubizlog.ucnholding.com:18100', // 业务日志
      UWAREHOUSE_URL: 'http://dev.uwarehouse.ucnholding.com:18100',
      LOGIN_URL: 'http://dev.auth.ucnscm.cn', // 登录授权
    },
    develop: {
      BASE_URL: 'http://dev.upurchase-facade.ucnholding.com:18100', // 采购端
      USSO_URL: 'http://dev.usso-facade.ucnholding.com:18100', // sso 服务
      UUSER_URL: 'http://dev.uuser-facade.ucnholding.com:18100', // 用户中心
      UMETA_URL: 'http://dev.umeta-facade.ucnholding.com:18100', // 元数据
      UMESSAGE_URL: 'http://dev.umessage-facade.ucnholding.com:18100', // 消息服务
      UOSS_URL: 'http://dev.uoss-facade.ucnholding.com:18100', // 对象存储服务
      ULOG_URL: 'http://dev.ulog-facade.ucnholding.com:18100', // 日志服务
      UPURCHASE_URL: 'http://dev.upurchase-facade.ucnholding.com:18100', // 采购端
      USUPPLY_URL: 'http://dev.usupply-facade.ucnholding.com:18100', // 供应商端
      USERVICE_URL: 'http://dev.uservice.ucnholding.com:18100', // 服务商端
      UBIZLOG_URL: 'http://dev.ubizlog.ucnholding.com:18100', // 业务日志
      UWAREHOUSE_URL: 'http://dev.uwarehouse.ucnholding.com:18100',
      LOGIN_URL: 'http://dev.auth.ucnscm.cn', // 登录授权
    },
    test: {
      BASE_API: 'http://store.test.tailorx.cn/api'
    },
    production: {
      BASE_API: 'https://store.tailorx.cn/api'
    }
  }[process.env.NODE_ENV],

  // 是否开启token验证
  AUTH: false,

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
