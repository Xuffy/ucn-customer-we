import axios from 'axios'
import Qs from 'qs'
import router from './router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css';
import {Message} from 'element-ui';
import _config from './config';
import {localStore, sessionStore} from 'service/store';


// 创建axios实例
const ajax = axios.create({
  // baseURL: mock ? _config.ENV.mock : '',
  timeout: _config.TIMEOUT,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  },
  transformRequest: [function (data,b,c) {
    data = Qs.stringify(data);
    return data;
  }],
});


NProgress.configure({
  // showSpinner: false
});

/**
 * request拦截器
 */
ajax.interceptors.request.use(config => {
  let ts = localStore.get('ticket'), cancel;
  // todo 缓存

  // 判断用户是否登录 noAuth 取消登录验证
  // if (_.isEmpty(ts) && !config.noAuth) {
  // router.push('/login');
  // return Promise.reject('登录失效，请重新登录');
  // }
  // config.headers['utouu-open-client-ticket'] = ts;

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
ajax.interceptors.response.use(
  response => {
    NProgress.done();

    if (_.isEmpty(response.data)) {
      throw new Error('api data is undefined');
    }

    // 数据格式转换
    if (_.isString(response.data)) {
      response.data = JSON.parse(response.data);
    }

    if (response.data.code !== '200') {
      Message.warning(response.data.msg || '数据返回异常，请重试！');
      throw new Error(`[code - ${response.data.code || '000'}] ${response.data.msg || 'api request data unsuccessful'}`);
    }

    // _fullData 判断时候返回完整数据
    if (response.config._fullData) {
      return response.data;
    } else {
      return response.data.data;
    }

  },
  error => {
    Message.error(_.isObject(error) || !error ? '网络异常，请稍后重试！' : error);
    NProgress.done();
    return Promise.reject(error)
  }
);


export default ajax
