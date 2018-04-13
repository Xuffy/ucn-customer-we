import {localStore} from 'service/store';

const lang = localStore.get('language') || 'en';

export default _.extend(
  {workbench: require(`./${lang}/workbench`)},
  require(`./${lang}/workbench.pending`),
  {payment: require(`./${lang}/payment/payment`)},
  require(`./${lang}/payment/payment.table`),
)
