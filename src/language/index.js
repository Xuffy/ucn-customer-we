import {localStore} from 'service/store';

const lang = localStore.get('language') || 'en';

export default _.extend(
  {workbench: require(`./${lang}/workbench`)},
    require(`./${lang}/workbench.pending`),

    {product:require(`./${lang}/product/sellerProductOverview.pending`)},
    require(`./${lang}/product/sellerProductOverview`),
)
