import {localStore} from 'service/store';

const lang = localStore.get('language') || 'en';
export default _.extend(
  require(`./${lang}/common/quickLinks`),
  {workbench: require(`./${lang}/workbench`)},
  require(`./${lang}/workbench.pending`),
  {product: require(`./${lang}/product/product.basic`)},
  require(`./${lang}/product/productOverview`),
  require(`./${lang}/workbench.pending`),
  {setting: require(`./${lang}/setting`)},
    {departmentSetting:require(`./${lang}/setting/department`)},
  require(`./${lang}/setting/setting.basic`),
  {baseText: require(`./${lang}/baseText`)},
  {basePlaceholder: require(`./${lang}/basePlaceholder`)},
  {inquiry: require(`./${lang}/inquiry/index`)},
  require(`./${lang}/workbench.pending`),
  {setting: require(`./${lang}/setting`)},
  {baseText: require(`./${lang}/baseText`)},
  {basePlaceholder: require(`./${lang}/basePlaceholder`)},
  {inquiry: require(`./${lang}/inquiry/index`)},
  require(`./${lang}/inquiry/viewByInqury.pending`),
  require(`./${lang}/inquiry/viewByInqury.pending`),
  require(`./${lang}/inquiry/viewBySKU.pending`),
  require(`./${lang}/inquiry/detail/basicInfo.pending`),
  require(`/${lang}/inquiry/create/basicInfo.pending`),
  require(`./${lang}/supplier/overview`) ,

  require(`./${lang}/supplier/detail.pending`) ,  
  require(`./${lang}/order/overview`) ,
  require(`/${lang}/order/basicinfo.pending`),
  require(`./${lang}/logistic/plan/overviewBtn.pending`),
  require(`./${lang}/logistic/plan/basicInfo.pending`)


)
