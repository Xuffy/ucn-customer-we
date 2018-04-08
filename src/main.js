import Vue from 'vue'
import App from './App'
import router from 'service/router'
import ajax from 'service/ajax'
import config from 'service/config';
import * as filters from 'service/filters.js'
import api from 'service/api';
import util from 'service/util';
import '../theme/index.css';
import 'assets/style/main.less';
import VueI18n from 'vue-i18n'
import lang from 'lib/lang'
import ElementUI from 'element-ui';
import store from './store';

// 引入样式
// import 'vue-easytable/libs/themes-base/index.css'

Vue.use(api);
Vue.use(util);
Vue.use(VueI18n);
Vue.use(ElementUI, {size: 'small',i18n: (key, value) => i18n.t(key, value)});

Vue.prototype.ajax = ajax;
Vue.config.productionTip = false;

Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
});


const i18n = new VueI18n({
  locale: 'en',
  // locale: Vue.prototype.$sessionStore.get('language') || 'en',
  messages: lang
});

// console.log(lang['en'])

new Vue({
  el: '#app',
  store,
  router,
  i18n,
  template: '<App/>',
  components: {App}
});
