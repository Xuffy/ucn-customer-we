import language from '../language/index';
import workbench from './workbench/index';
import product from './product/index';
import logistic from './logistic';

import inquiryOverview from './inquiry';
import order from './order/index';
import supplier from './supplier/index';
import setting from './setting/index';
import common from './common/index';
import message from './message/index';
import payment from './payment/index';
import logs from './logs/index';

import warehouse from './warehouse/index';

const db = {
  common,
  workbench,
  product,
  inquiryOverview,
  logistic,
  order,
  supplier,
  setting,
  message,
  payment,
  logs,
  warehouse
  // inbound,
};
const database = _.mapObject(db, value => {
  value = _.mapObject(value, val => {
    val = _.mapObject(val, (v, k) => {
      if (!v.key) v.key = k;
      if (!v.type) v.type = 'String';
      if (!v.length) v.length = 10;
      v.label = language[k];
      return v;
    });
    return val;
  });
  return value;
});

/*const findLanguage = (key) => {
  let val = '';

  _.map(language, value => {
    val = value[key];
  });

  return val;
}

const database = _.mapObject(db, (value, key) => {
  value = _.mapObject(value, val => {
    val = _.mapObject(val, (v, k) => {
      let lang = language[key];
      if (!v.key) v.key = k;
      if (!v.type) v.type = 'String';
      if (!v.length) v.length = 10;
      v.label = lang ? lang[k] : findLanguage(k);
      return v;
    });
    return val;
  });
  return value;
});

console.log(database)*/


export default database;
