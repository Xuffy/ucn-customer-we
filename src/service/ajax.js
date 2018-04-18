import Axios from 'axios'
import Qs from 'qs'
import router from './router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css';
import {Message} from 'element-ui';
import _config from './config';
import {localStore, sessionStore} from 'service/store';


/**
 *
 * @type {any}
 */
const axios = Axios.create({
  // baseURL: mock ? _config.ENV.mock : '',
  timeout: _config.TIMEOUT,
  headers: {
    'Content-Type': 'application/json;charset=utf-8',
      // 'U-Session-Token':'askjhasjkhgkajshg'
  },
  transformRequest: [function (data) {
    // return JSON.stringify(data);
    return data;
  }],
});

const $ajax = (config) => {

  this.setUrl = (url, params) => {
    let p = {};
    if (!_.isEmpty(params)) {
      _.mapObject(params, (val, key) => {
        if (url.indexOf(`{${key}}`) < 0) {
          p[key] = val;
        }
      });
      return {url: _.template(url)(params), params: p};
    }
    return {url, params};
  }


  this.getCache = (url, params, config, fn) => {
    let resCache = sessionStore.get('request_cache'), data = false;

    if (config._cache) {
      if (!_.isEmpty(resCache) && _.isArray(resCache)) {
        _.map(resCache, val => {
          let p = params.params || params
          if (url === val.url && _.isEqual(p, val.params)) {
            data = val;
          }
        });
      }
    }

    if (data) {
      return new Promise(function (resolve, reject) {
        return resolve(data.data.content);
      });
    } else {
      return fn(url, params, config);
    }


  }
}
/**
 * 合并请求
 * @param list
 * @returns {Promise<[any , any , any , any , any , any , any , any , any , any]>}
 */
$ajax.prototype.all = (list) => {
  return Promise.all(list);
}

/**
 * GET请求
 * @param url
 * @param params
 * @param config
 */
$ajax.prototype.get = (url, params = {}, config = {}) => {
  let data = this.setUrl(url, params);

  return this.getCache(
    data.url,
    _.extend(config, {params: data.params}),
    config,
    axios.get
  );
  /*if (config._cache) {
  } else {
    return axios.get(data.url, _.extend(config, {params: data.params}));
  }*/


}

/**
 * POST请求
 * @param url
 * @param params
 * @param config
 * @returns {*}
 */
$ajax.prototype.post = (url, params = {}, config = {}) => {
  let data = this.setUrl(url, params)
    , options = {method: 'POST', headers: {}, url: data.url, data: data.params};

  if (config._contentType === 'F') {
    options.headers['Content-Type'] = 'application/x-www-form-urlencoded';
    options.data = Qs.stringify(options.data);
  } else {
    // options.headers['Content-Type'] = 'application/json;charset=utf-8';
    options.data = JSON.stringify(options.data);
  }
  return axios(options);
}

NProgress.configure({
  // showSpinner: false
});


/**
 * request拦截器
 */
axios.interceptors.request.use(config => {

  NProgress.start();

  return config
}, error => {
  NProgress.done();
  Message.warning(response.data.msg || '请求异常，请重试！');
  Promise.reject(error)
});


/**
 * respone拦截器
 */
axios.interceptors.response.use(
  response => {
    let config = response.config, resCache;

    NProgress.done();

    if (_.isEmpty(response.data)) {
      throw new Error('api data is undefined');
    }

    // 数据格式转换
    if (_.isString(response.data)) {
      response.data = JSON.parse(response.data);
    }

    if (response.data.status !== 'SUCCESS') {
      Message.warning(response.data.errorMsg || '数据返回异常，请重试！');
      throw new Error(`[code - ${response.data.status || '000'}] ${response.data.errorMsg || 'api request data unsuccessful'}`);
    }

    // 缓存设置
    resCache = sessionStore.get('request_cache') || [];

    if (config._cache) {
      let rcList = [];
      _.map(resCache, val => {
        if (config.url !== val.url || !_.isEqual(config.params, val.params)) {
          rcList.push(val);
        }
      });
      rcList.push({url: config.url, params: config.params, data: response.data});
      sessionStore.set('request_cache', rcList);
    }


    // _fullData 判断时候返回完整数据
    if (response.config._fullData) {
      return response.data;
    } else {
      return response.data.content;
    }

  },
  error => {
    Message.error(_.isObject(error) || !error ? '网络异常，请稍后重试！' : error);
    NProgress.done();
    return Promise.reject(error)
  }
);


export default $ajax;
