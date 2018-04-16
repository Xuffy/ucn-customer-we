import {localStore} from 'service/store';

const lang = localStore.get('language') || 'en';
export default _.extend(
  {workbench: require(`./${lang}/workbench`)},
    require(`./${lang}/workbench.pending`),

    {product:require(`./${lang}/product/sellerProductOverview.basicInfo`)},
    require(`./${lang}/product/sellerProductOverview`),
  require(`./${lang}/workbench.pending`),
  {setting: require(`./${lang}/setting`)},
  { baseText: require(`./${lang}/baseText`) },
  { basePlaceholder: require(`./${lang}/basePlaceholder`) },
  { inquiry: require(`./${lang}/inquiry/index`) },

  { supplier: require(`./${lang}/supplier/overview`) } ,
   { order: require(`./${lang}/order/overview`) },
    
)
