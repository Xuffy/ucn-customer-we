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
import lang from 'element-ui/lib/locale/lang/en'
import locale from 'element-ui/lib/locale'

// 引入样式
// import 'vue-easytable/libs/themes-base/index.css'

console.log(require('element-ui/lib/locale/lang/en').default);

locale.use(lang);

Vue.use(fetch);
Vue.use(util);
Vue.use(VueI18n);
// Vue.use(ElementUI, {size: 'small', i18n: (key, value) => i18n.t(key, value)});
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

/*
const i18n = new VueI18n({
  locale: 'en',
  // locale: Vue.prototype.$sessionStore.get('language') || 'en',
  messages: lang
});
*/

Vue.prototype.windowOpen = (url, config) => {
  const {href} = router.resolve({
    path: url,
    query: config
  });
  window.open(href, '_blank')
};

new Vue({
  el: '#app',
  store,
  router,
  // i18n,
  template: '<App/>',
  components: {App}
});
