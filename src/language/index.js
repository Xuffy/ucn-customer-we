import {localStore} from 'service/store';

const lang = localStore.get('language') || 'cn';
export default _.extend(
  // require(`./${lang}/common/quickLinks`),
  // {_workbench: require(`./${lang}/workbench/page`)},
  // require(`./${lang}/workbench/pending`),
  // {_setting: require(`./${lang}/setting`)},
  // {_departmentSetting: require(`./${lang}/setting/department`)},
  // require(`./${lang}/setting/setting.basic`),
  // {_baseText: require(`./${lang}/baseText`)},
  // {_basePlaceholder: require(`./${lang}/basePlaceholder`)},
  // {_inquiry: require(`./${lang}/inquiry/index`)},
  // {_basePlaceholder: require(`./${lang}/basePlaceholder`)},
  // {_inquiry: require(`./${lang}/inquiry/index`)},
  // require(`./${lang}/inquiry/viewByInqury.pending`),
  // require(`./${lang}/inquiry/viewByInqury.pending`),
  // require(`./${lang}/inquiry/viewBySKU.pending`),
  // require(`./${lang}/inquiry/basicInfo.pending`),
  // require(`./${lang}/supplier/overview`),
  //
  // require(`./${lang}/supplier/detail.pending`),
  // require(`./${lang}/order/overview`),
  // require(`/${lang}/order/basicinfo.pending`),
  // require(`./${lang}/logistic/plan/overviewBtn.pending`),
  // require(`./${lang}/logistic/plan/plan.base`),
  // require(`./${lang}/logistic/plan/overviewCheckbox.status`),
  // require(`./${lang}/inquiry/compare.pending`),
  //
  // {_warehouse: require(`./${lang}/warehouse/warehouse.basic`)},
  //
  // // payment
  // {_payment: require(`./${lang}/payment/payment`)},
  // require(`./${lang}/payment/payment.table`),
  // //message
  // {_message: require(`./${lang}/message/message.table`) },
  // require(`./${lang}/message/tabs`),
  // //logs
  // {_logs: require(`./${lang}/logs/logs.table`)},
  // {_logBasic: require(`./${lang}/logs/logs.basic`)},
  // {_track: require(`./${lang}/track/trackBysku`)},


    //CN配置
    {_warehouse:require(`./${lang}/warehouse/warehouse.basic`)},
    require(`./${lang}/warehouse/warehouse.index`),
    {_product: require(`./${lang}/product/product.basic`)},
    require(`./${lang}/product/productOverview`),

)
