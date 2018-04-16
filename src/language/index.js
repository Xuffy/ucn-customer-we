import {localStore} from 'service/store';

const lang = localStore.get('language') || 'cn';
export default _.extend(
  // {workbench: require(`./${lang}/workbench`)},
  //   require(`./${lang}/workbench.pending`),



    {product:require(`./${lang}/product/product.basic`)},
    require(`./${lang}/product/productOverview`),



  // require(`./${lang}/workbench.pending`),
  // {setting: require(`./${lang}/setting`)},
  // { baseText: require(`./${lang}/baseText`) },
  // { basePlaceholder: require(`./${lang}/basePlaceholder`) },
  // { inquiry: require(`./${lang}/inquiry/index`) }
)
