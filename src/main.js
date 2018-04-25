import Vue from 'vue'
import App from './App'
import router from 'service/router'
import ajax from 'service/ajax'
import config from 'service/config';
import * as filters from 'service/filters.js'
import fetch from 'service/fetch';
import apis from 'service/apis';
import util from 'service/util';
import '../theme/index.css';
import 'assets/style/main.less';
import VueI18n from 'vue-i18n'
import ElementUI from 'element-ui';
import store from './store';
import database from './database/index';
import locale from 'element-ui/lib/locale';
import {localStore} from 'service/store';
import 'element-ui/lib/theme-chalk/base.css';


// /*引入资源请求插件*/
// import VueResource from 'vue-resource'
//
// /*使用VueResource插件*/
// Vue.use(VueResource)

// 引入样式
// import 'vue-easytable/libs/themes-base/index.css'
const lang = localStore.get('language') || 'en';

locale.use(require(`element-ui/lib/locale/lang/${lang}`).default);

Vue.use(fetch);
Vue.use(util);
Vue.use(VueI18n);
Vue.use(ElementUI, {size: 'small'});

Vue.config.productionTip = false;
Vue.prototype.$ajax = new ajax();
Vue.prototype.$apis = apis;


// 屏蔽开发环境warn
console.warn = () => {
}


// 去掉console
if (config.ENV_FLAG !== 'local') {
  console.log = () => {
  }
}

Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
});

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
