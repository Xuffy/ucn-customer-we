import language from '../language/index';
import workbench from './workbench/index';
import payment from './payment/index';


const db = {
  workbench,
  payment
};


const database = _.mapObject(db, value => {
  value = _.mapObject(value, val => {
    val = _.mapObject(val, (v, k) => {
      if (_.isUndefined(v.k)) {
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
