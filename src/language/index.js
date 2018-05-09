import {localStore} from 'service/store';
import config from 'service/config';

const lang = localStore.get('language') || config.LANGUAGE;

const json = {
  common: _.extend({},
    require(`./${lang}/common/quickLinks`),
    require(`./${lang}/common/basePlaceholder`),
    require(`./${lang}/common/baseText`),
    require(`./${lang}/common/setting`),
    require(`./${lang}/common/message`),
    require(`./${lang}/common/page`),
    require(`./${lang}/common/message`),
    require(`./${lang}/common/promptInfo`),
    require(`./${lang}/common/setting`)
  ),
  inquiry: _.extend({},
    require(`./${lang}/inquiry/basicInfo.pending`),
    require(`./${lang}/inquiry/compare.pending`),
    require(`./${lang}/inquiry/index`),
    require(`./${lang}/inquiry/viewByInqury.pending`),
    require(`./${lang}/inquiry/viewBySKU.pending`),
    require(`./${lang}/inquiry/productInfo.pending`)
  ),
  logistic: _.extend({},
    // require(`./${lang}/logistic/plan/basicInfo.pending`),
    require(`./${lang}/logistic/plan/plan.base`)
  ),
  logs: _.extend({},
    require(`./${lang}/logs/logs.basic`),
    require(`./${lang}/logs/logs.basic`)
  ),
  message: _.extend({},
    require(`./${lang}/message/message.table`),
    require(`./${lang}/message/tabs`)
  ),
  order: _.extend({},
    require(`./${lang}/order/basicinfo.pending`),
    require(`./${lang}/order/overview`),
    require(`./${lang}/order/productinfo.pending`)
  ),
  payment: _.extend({},
    require(`./${lang}/payment/payment`),
    require(`./${lang}/payment/payment.table`)
  ),
  product: _.extend({},
    require(`./${lang}/product/product.basic`),
    require(`./${lang}/product/productDetail`),
    require(`./${lang}/product/productOverview`),
    require(`./${lang}/product/productOverviewTable`),
  ),
  productCn: _.extend({},
    require(`./${lang}/productCn/product.basic`),
    require(`./${lang}/productCn/productDetail`),
    require(`./${lang}/productCn/productOverview`)
  ),
  setting: _.extend({},
    require(`./${lang}/setting/department`),
    require(`./${lang}/setting/personalInfo`),
    require(`./${lang}/setting/setting.basic`)
  ),
  supplier: _.extend({},
    require(`./${lang}/supplier/detail.pending`),
    require(`./${lang}/supplier/overview`)
  ),
  track: _.extend({},
    require(`./${lang}/track/trackBysku`)
  ),
  warehouse: _.extend(
    require(`./${lang}/warehouse/qcWarehouse`),
    require(`./${lang}/warehouse/warehouse.table`),
    require(`./${lang}/warehouse/warehouse.basic`),
    require(`./${lang}/warehouse/qcDetailBasicInfo.pending`),
    require(`./${lang}/warehouse/payment.pending`),
    require(`./${lang}/warehouse/qcDetailBasicInfo.pending`),
    require(`./${lang}/warehouse/qcDetailProductInfo.pending`),
    require(`./${lang}/warehouse/summary.pending`),


      /**
       * 新配置
       * */
    require(`./${lang}/warehouse/warehouse.overview`),
    require(`./${lang}/warehouse/warehouse.createQc`),
  ),
  workbench: _.extend({},
    require(`./${lang}/workbench/page`),
    require(`./${lang}/workbench/task`)
  ),
  router: _.extend({},
    require(`./${lang}/router/index`)
  ),
  button: _.extend({},
    require(`./${lang}/button/index`)
  ),
  hintMessage: _.extend({},
    require(`./${lang}/hintMessage/index`)
  ),
}

console.log(`%c这是优化后的国际化配置，请仔细看，修改并不麻烦。\n只需要把之前下划线 ‘$i.’ 去掉就行了`, "color:#409EFF", json,'\n\n');

export default json;
