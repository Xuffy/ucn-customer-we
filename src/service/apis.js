const base = '/web/v1';
import config from './config';

const apis = {
  sys_category: ['/sys/category', 'BASE_CS'],
  get_quickLink: ['/getQuickLink', 'BASE_API'],
};






let list = _.mapObject(apis, val => {
  let b = '';
  if (config.IS_MOCK && config.ENV_FLAG === 'local') {
    b = config.ENV.MOCK;
  } else if (_.indexOf(_.keys(config.ENV), val[1]) > -1) {
    b = config.ENV[val[1]] + base;
  } else {
    b = config.ENV.BASE_API + base;
  }
  return b + val[0];
});

export default list;
