import config from '@/service/config';
import twj from './twj'
import lsx from './lsx'
import lt from './lt'
import lyx from './lyx'
import rcy from './rcy'
import xf from './xf'

const apis = _.extend(twj, lsx, lt, lyx, rcy, xf);
const version = ['/web/v1', '/v2', '/web/v3'];


let list = _.mapObject(apis, val => {
  let b = ''
    , v = version[0];
  console.log(val)
  if (config.IS_MOCK && config.ENV_FLAG === 'local') {
    b = config.ENV.MOCK;
  } else if (_.indexOf(_.keys(config.ENV), val[1]) > -1) {
    b = config.ENV[val[1]] + v;
  } else {
    b = config.ENV.BASE_API + v;
  }
  return b + val[0];
});

export default list;
