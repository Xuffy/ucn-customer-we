import DateFormat from 'dateformat';
import {localStore, sessionStore} from 'service/store';
import database from '../database/index';
import language from '../language/index';

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
     * 格式化日期
     */
    Vue.prototype.$dateFormat = DateFormat;

    /**
     * 国际化语言配置
     */
    Vue.prototype.$lang = language;

    /**
     * 字段配置
     */
    Vue.prototype.$db = database;

    /**
     * 字段配置
     */
    Vue.prototype.$getDB = (db, data) => {
      let list = [];
      db = _.values(db);
      _.map(data, value => {
        let obj = {};
        _.mapObject(value, (val, key) => {
          let dbValue = _.clone(_.findWhere(db, {key: key}));
          if (!_.isEmpty(dbValue)) {
            dbValue.value = val;
            obj[key] = dbValue;
          }

        });
        list.push(obj);
        // list.push(_.values(obj));
      });
      return list;
    };


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
