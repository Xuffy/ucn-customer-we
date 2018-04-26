import DateFormat from 'dateformat';
import {localStore, sessionStore} from 'service/store';
import database from '../database/index';
import language from '../language/index';
import router from 'service/router'

export default {
  install(Vue, options) {

    /**
     * 本地永久缓存
     */
    Vue.prototype.$localStore = localStore;

    /**
     * 本地会话缓存
     */
    Vue.prototype.$sessionStore = sessionStore;

    /**
     * 格式化日期
     */
    Vue.prototype.$dateFormat = DateFormat;

    /**
     * 国际化语言配置
     */
    Vue.prototype.$i = language;

    /**
     * 字段配置
     */
    Vue.prototype.$db = database;

    /**
     * 字段配置
     * @param db
     * @param data
     * @param cb
     * @returns {Array}
     */
    Vue.prototype.$getDB = (db, data, cb) => {

      let list = [];
      db = _.values(db);
      _.map(data, (value, index) => {
        let obj = {};
        _.map(db, val => {

          let dv = value[val.key]
            , cd = _.clone(val);
          if (!_.isUndefined(dv) || val._important) {
            cd.value = dv || '';
            obj[val.key] = cd;
          }
        });
        if (cb) obj = _.extend(obj, cb(obj, index));
        list.push(obj);
      });
      return list;
    };


    /**
     * table 数据过滤
     * @type {{contrast(*=, *=): *, setHighlight(*=): *, setHideSame(*=): *}}
     */
    Vue.prototype.$table = {
      contrast(data, type) {
        if (_.isEmpty(data)) return [];

        let first = data[0], keyData = {};

        _.map(data, value => {
          _.mapObject(value, (val, key) => {
            if (type === 'same' && first[key]) {
              keyData[key] = first[key].value === val.value;
            } else if (type === 'def' && first[key] && first[key].value !== val.value) {
              keyData[key] = true;
            }
          });
        });
        return keyData;
      },
      setHighlight(data) {
        let keyData = this.contrast(data, 'def')
          , len = _.values(keyData).length
          , i = 0;
        keyData = _.mapObject(keyData, (val) => {
          let z = 200 - ((255 / len) * i);
          val = `rgba(${z},255,255,1)`;
          i++;
          return val;
        });
        return _.map(data, value => {
          return _.mapObject(value, (val, key) => {
            val._highlight = keyData[key] || '';
            return val;
          });
        });
      },
      setHideSame(data) {
        let keyData = this.contrast(data, 'same');
        return _.map(data, value => {
          return _.mapObject(value, (val, key) => {
            if (keyData[key]) {
              val._hide = keyData[key];
            }
            return val;
          });
        });
      }
    };
    /**
     * 删除带有前缀下划线数据
     */
    const deleteArr = (list, fieldRemark) => {
      _.map(list, item => {
        if (item) deleteObject(item);
        if (item[fieldRemark]) deleteObject(item[fieldRemark]);
      });
    };

    const deleteObject = (list, fieldRemark, details) => {
      _.mapObject(list, (val, key) => {
        if (key.substring(0, 1) === '_') delete list[key];
        if (list[fieldRemark]) deleteObject(list[fieldRemark]);
        if (key === details) deleteArr(list[details], fieldRemark)
      });
    };

    Vue.prototype.$filterModify = (list, remark, children) => {
      let fieldRemark = remark || 'fieldRemark',
        details = children || 'details';
      if (_.isObject(list, details)) deleteObject(list, fieldRemark, details);
      if (_.isArray(list)) _.map(list, fieldRemark, details);
      return list;
    };
    /**
     * $window.open
     */
    Vue.prototype.$windowOpen = (config) => {
      let url = `//${window.location.host}/#${config.url}`, p = {};
      if (!_.isEmpty(config.params) && !config.params.length) {
        _.mapObject(config.params, (val, key) => {
          if (url.indexOf(`{${key}}`) < 0) {
            p[key] = val;
          }
        });
      }
      url = _.template(url)(config.params || {});
      for (let k in p) {
        url += `?${k}=${p[k]}`
      }
      return window.open(url, '_blank');
    };

    /**
     * filterRemark 遍历 remark   list = json arr  remark = remark字段名
     */
    const getRemark = (list, remark) => {
      let json = {};
      for (let k in list) {
        for (let key in list[remark]) {
          if (k === key) {
            json[k] = list[remark][key];
          } else {
            if (k == 'id') {
              json._id = list[k];
            } else {
              json[k] = null;
            }
          }
        }
      }
      ;
      return json;
    };

    Vue.prototype.$filterRemark = (list, remark) => {
      let data = [];
      if (!list) return console.log('请传输list');
      if (list.length && list) {
        list.forEach(item => {
          if (item.updateDt) item.updateDt = DateFormat(item.updateDt, 'yyyy-mm-dd');
          if (item.entryDt) item.entryDt = DateFormat(item.updateDt, 'yyyy-mm-dd');
          data.push(item);
          data.push(getRemark(item, remark))
        });
      } else if (typeof list === "object" && !(list instanceof Array)) {
        if (list.updateDt) list.updateDt = DateFormat(list.updateDt, 'yyyy-mm-dd');
        if (list.entryDt) list.entryDt = DateFormat(list.updateDt, 'yyyy-mm-dd');
        data.push(list);
        data.push(getRemark(list, remark));
      }
      return data;
    };


    Vue.prototype.$copyArr = (arr) => {
      return arr.map((e) => {
        if (typeof e === 'object') {
          return Object.assign({}, e)
        } else {
          return e
        }
      })
    }


    /**
     *
     * @param value
     * @returns {string}
     */
    Vue.prototype.$getI18n = function () {
      // this.$i18n.
      // let data = this.$i18n.getLocaleMessage(this.$i18n.locale);
      // console.log([
      //   {p:'',b:''}
      // ])
    }

    /**
     * 获取 table 配置列名
     * @param {Object/Array} [data]    - 数据集合
     * @param {String} [key]    - i18n配置
     * @param {Object} [config]    - column扩展参数 参照elment-ui
     * @returns {Object}
     */
    Vue.prototype.$getTableColumn = (data, key, config = {}) => {
      let value, list = [];
      if (!_.isEmpty(data) && !_.isEmpty(key) && (_.isArray(data) || _.isObject(data))) {

        value = _.isArray(data) ? data[0] : data;

        _.map(_.keys(value), val => {
          let k = this.$tc(`${key}.${val}`);
          if (k.indexOf('.') < 0 || k.charAt(k.length - 1) === '.') {
            list.push(_.extend({label: k, prop: val, width: 100}, config));
            // list.push(_.extend({title: k, field: val, width: 80}, config));
          }
        });
        return list;
      } else {
        return [];
        // throw new Error('lack of parameters');
      }
    }


  }
}
