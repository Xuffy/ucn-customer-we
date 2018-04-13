import Axios from 'axios'
import Qs from 'qs'
import router from './router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css';
import {Message} from 'element-ui';
import _config from './config';
import {localStore, sessionStore} from 'service/store';

const axios = Axios.create({
  // baseURL: mock ? _config.ENV.mock : '',
  timeout: _config.TIMEOUT,
  headers: {
    'Content-Type': 'application/json;charset=utf-8'
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
        if (url.indexOf(`{${key}`) < 0) {
          p[key] = val;
        }
      });
      return {url: _.template(url)(params), params: p};
    }
    return {url, params};
  }
}

$ajax.prototype.get = (url, params = {}, config = {}) => {
  let data = this.setUrl(url, params)
  return axios.get(data.url, _.extend(config, {params: data.params}));
}

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
