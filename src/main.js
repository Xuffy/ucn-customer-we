import Vue from 'vue'
import App from './App'
import router from 'service/router'
import ajax from 'service/ajax'
import config from 'service/config';
import * as filters from 'service/filters.js'
import api from 'service/api';
import util from 'service/util';
// import iView from 'iview';
// import 'iview/dist/styles/iview.css';
import 'assets/style/main.less';
import VueI18n from 'vue-i18n'
import lang from 'lib/lang'
// import locale from 'iview/dist/locale/en-US';

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI, { size: 'small' });
// Vue.use(iView, {locale});
Vue.use(api);
Vue.use(util);
// Vue.use(VueI18n);

Vue.prototype.ajax = ajax;

Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
});

/*

const i18n = new VueI18n({
  locale: 'en',
  // locale: Vue.prototype.$sessionStore.get('language') || 'en',
  messages: lang
});
*/

new Vue({
  el: '#app',
  router,
  // i18n,
  template: '<App/>',
  components: {App}
});
