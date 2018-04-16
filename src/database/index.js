import language from '../language/index';
import workbench from './workbench/index';
import product from './product/index';
import setting from './setting/index';

import inquiryOverview from './inquiry';
import order from './order/index';
import supplier from './supplier/index'
import lang from "../lib/lang";
const db = {
  workbench,
    product,
  inquiryOverview,
    setting,
    order,
    supplier
};
const database = _.mapObject(db, value => {
  value = _.mapObject(value, val => {
    val = _.mapObject(val, (v, k) => {
      if (_.isUndefined(v.key)) {
        v.key = k;
      }

      if (_.isUndefined(v.type)) {
        v.type = 'String';
      }
      if (_.isUndefined(v.length)) {
        v.length = 10;
      }
      v.label = language[k];
      return v;
    });
    return val;
  });
  return value;
});

export default database;