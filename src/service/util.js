import DateFormat from 'dateformat';
import {localStore, sessionStore} from 'service/store';

export default {
  install(Vue, options) {
    let alertShow = false;

    /**
     * 阻塞message提示（只能提示显示一个message）
     * @param param
     * @returns {boolean}
     */
    // Vue.prototype.$alert = function (param) {
    //   if (alertShow) return false;
    //
    //   if (_.isString(param)) {
    //     param = {content: param};
    //   }
    //
    //   param.onClose = () => {
    //     alertShow = false;
    //   };
    //
    //   this.$Message.warning(param);
    //   alertShow = true;
    // };

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
    Vue.prototype.$getTableColumn = function (data, key, config = {}) {
      let value, list = [];
      if (!_.isEmpty(data) && !_.isEmpty(key) && (_.isArray(data) || _.isObject(data))) {

        value = _.isArray(data) ? data[0] : data;

        _.map(_.keys(value), val => {
          let k = this.$tc(`${key}.${val}`);
          if (k.indexOf('.') < 0 || k.charAt(k.length - 1) === '.') {
            list.push(_.extend({label: k, prop: val, width: 80}, config));
          }
        });
        return list;
      } else {
        throw new Error('lack of parameters');
      }
    }


    /**
     * text转换html 替换<br>、&nbsp;
     * @param value
     * @returns {string}
     */
    /*Vue.prototype.$textToHtml = function (value) {
      let val_array, val_num = 0, val_new = '';

      if (!_.isString(value)) {
        return '';
      }

      value = value.replace(/\n/g, "<br/>").replace(/\s/g, "&nbsp;");
      val_array = value.split('&nbsp;');
      _.map(val_array, function (val) {
        if (val) {
          val_new += val;
          val_num = 0;
        } else if (val_num < 4) {
          val_num++;
          val_new += '&nbsp;';
        }
      });

      return val_new;
    };*/


    /**
     * html转换text 替换<br>、&nbsp;
     * @param value
     * @returns {string}
     */
    /*Vue.prototype.$htmlToText = function (value) {
      if (!_.isString(value)) {
        return '';
      }
      return value.replace(/<br\/>/g, '\n').replace(/&nbsp;/g, ' ');
    }*/

  }
}
