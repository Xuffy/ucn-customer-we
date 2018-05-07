import Vue from 'vue'
import App from './App'
import router from 'service/router'
import ajax from 'service/ajax'
import config from 'service/config';
import * as filters from 'service/filters'
import * as directive from 'service/directive'
import fetch from 'service/fetch';
import apis from '@/apis/index';
import util from 'service/util';
import '../theme/index.css';
import 'assets/style/main.less';
// import VueI18n from 'vue-i18n'
import ElementUI from 'element-ui';
import store from './store';
import database from './database/index';
import locale from 'element-ui/lib/locale';
import {localStore} from 'service/store';
import 'element-ui/lib/theme-chalk/base.css';
import OSS from 'ali-oss';


const ossJson = {
  "accessKeyId": "STS.BrZW5xv5wJorRQ1UtnuEqAV2p",
  "accessKeySecret": "DDCdbZC8SCbRa1R3hTcNr5SLRyXEGHGJ7Cc5fzDXTBUN",
  "expiration": "2018-05-07T04:10:38Z",
  "securityToken": "CAIS9gF1q6Ft5B2yfSjIo7HvHI/Mm+pW/a2ZUHeAsXQ7ecpdrpOZkjz2IH9Jf3FrA+ges/42lG9R6v4alqduQJlyTFDYWtZo6pNe/Vtjq09vYIjng4YfgbiJREKxaXeiruKwDsz9SNTCAITPD3nPii50x5bjaDymRCbLGJaViJlhHL91N0vCGlggPtpNIRZ4o8I3LGbYMe3XUiTnmW3NFkFlyGEe4CFdkf3umZbEs0uO1QWrkLdP/9TLT8L6P5U2DvBWSMyo2eF6TK3F3RNL5gJCnKUM1/MZom+c5InFXgMIs0rfb7KM6LxoNxQ8b6Q/GqhUVH4lBDbSZYcagAFGQjB2pEGKbTv7rnp7JqYrey9KVAJ+F+TF2TksOVtxn+ZgR9/jOBGqWEYaEerpyWbtEOspkwr0fNCIYMAcXwO2WrjRM+eNmQJs7juyVxnkCKUpWLvcaSl9gPpMUGicVi64CZ3wDLS2MV2/rhshYaJISNlrvp9h/SglsA/uo/R81Q==",
  "ossEndpoint": "http://oss-cn-hangzhou.aliyuncs.com"
};




let client = new OSS.Wrapper({
  region: ossJson.ossEndpoint,
  accessKeyId: ossJson.accessKeyId,
  accessKeySecret: ossJson.accessKeySecret,
  stsToken: ossJson.securityToken,
  bucket: 'ucn-oss-dev'
});

console.log(client)







////////////////////////////////////////////////////////


const lang = localStore.get('language') || config.LANGUAGE;

locale.use(require(`element-ui/lib/locale/lang/${lang}`).default);

Vue.use(fetch);
Vue.use(util);
// Vue.use(VueI18n);
Vue.use(ElementUI, {size: 'mini'});

Vue.config.productionTip = false;
Vue.prototype.$ajax = new ajax();
Vue.prototype.$apis = apis;

config.LANGUAGE = lang;


// 屏蔽开发环境warn
console.warn = () => {
}


// 去掉console
if (config.ENV_FLAG === 'production') {
  console.log = () => {
  }
}

Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key]);
});

Object.keys(directive).forEach(key => {
  Vue.directive(key, directive[key]);
});

config.AUTH = config.ENV_FLAG === 'local' ? config.AUTH : true;

// underscorejs配置template
_.templateSettings = {
  interpolate: /\{(.+?)\}/g
};

new Vue({
  el: '#app',
  store,
  router,
  // i18n,
  template: '<App/>',
  components: {App}
});
