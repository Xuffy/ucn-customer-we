import language from '../language/index';
import workbench from './workbench/index';
import product from './product/index';
import logistic from './logistic';

import inquiryOverview from './inquiry';
import order from './order/index';
import supplier from './supplier/index'

const db = {
  workbench,
  product,
  inquiryOverview,
  logistic,
  order,
  supplier
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

export default database;
