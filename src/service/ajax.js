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

  /**
   * 设置restful 地址参数
   * @param url
   * @param params
   * @returns {*}
   */
  this.setUrl = (url, params) => {
    let p = {};
    if (!_.isEmpty(params) && !params.length) {
      _.mapObject(params, (val, key) => {
        if (url.indexOf(`{${key}}`) < 0) {
          p[key] = val;
        }
      });
      return {url: _.template(url)(params), params: p};
    }
    return {url, params};
  }


  /**
   * 设置header信息
   * @param options
   * @param config
   * @returns {*[]}
   */
  this.sethHeader = (options, config) => {
    if (config._contentType === 'F') {
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded';
      options.data = Qs.stringify(options.data);
    } else {
      options.data = JSON.stringify(options.data);
    }
    return [options, config]
  }

  /**
   * 获取缓存接口
   * @param options
   * @param config
   * @returns {*}
   */
  this.getCache = (options, config) => {
    let {url, data} = options
      , resCache = sessionStore.get('request_cache')
      , resData = false
      , _options;

    if (config._cache) {
      if (!_.isEmpty(resCache) && _.isArray(resCache)) {
        _.map(resCache, val => {
          let p = data.params || data;
          if (url === val.url && _.isEqual(p, val.params)) {
            resData = val;
          }
        });
      }
    }

    if (resData) {
      return new Promise(function (resolve, reject) {
        return resolve(resData.data.content);
      });
    } else {
      _options = _.extend(...this.sethHeader(options, config));

      switch (_options.method) {
        case 'DELETE':
          return axios.delete(_options.url,{params:_options.data});
        case 'PUT':
          return axios.put(_options.url);
        default:
          return axios(_options);
      }
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

  return this.getCache({method: 'GET', url: data.url, data: data.params}, config);

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

  return this.getCache(options, config);

}

/**
 * PUT请求
 * @param url
 * @param params
 * @param config
 * @returns {*}
 */
$ajax.prototype.put = (url, params = {}, config = {}) => {
  let data = this.setUrl(url, params)
    , options = {method: 'PUT', headers: {}, url: data.url, data: data.params};

  return this.getCache(options, config);

}

/**
 * DELETE请求
 * @param url
 * @param params
 * @param config
 * @returns {*}
 */
$ajax.prototype.delete = (url, params = {}, config = {}) => {
  let data = this.setUrl(url, params)
    , options = {method: 'DELETE', headers: {}, url: data.url, data: data.params};

  return this.getCache(options, config);

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
