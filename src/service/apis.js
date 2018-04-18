const version = ['/web/v1', '/web/v2', '/web/v3'];
import config from './config';

const apis = {
  gridfieldsetting: ['/gridfieldsetting', 'BASE_API'],
  get_listTest: ['/getList', 'BASE_API'],
  get_itemfavoriteList: ['/itemfavorite/list', 'BASE_API'],
  update_gridfavorite: ['/gridfavorite/{bizCode}/{gridFieldId}', 'BASE_API'],
  sys_category: ['/sys/category', 'BASE_CS'],
  GET_QUICKLINK: ['/getQuickLink', 'BASE_API'],
  category: ['/category', 'BASE_CS'],
  mapping_category: ['/category/mapping', 'BASE_CS'],
  getCategory:['/sys/category','BASE_CS'],              //暂时使用
  delete_category: ['/category/delete', 'BASE_CS'],
  add_newSKU:['/sku','BASE_CS'],
  supplier_overview: ['/supplierOverview', 'BASE_API'],
  get_productDetail:['/sku/{id}','BASE_CS'],
  delete_product:['/sku/{id}/delete','BASE_CS'],
  change_productStatus:['/sku/{id}/status','BASE_CS'],
  inquiry_list: ['/inquiry/list', 'BASE_DH C'],
  inquiry_list_sku: ['/inquiry/list/sku', 'BASE_DHC'],
  inquiry_delete: ['/inquiry/delete', 'BASE_DHC'],
  inquiry_cancel: ['/inquiry/cancel', 'BASE_DHC'],
  inquiry_detail: ['/inquiry', 'BASE_DHC'],
  POST_INQIIRY_LIST: ['/inquiry/list', 'BASE_DHC'],
  POST_INQIIRY_LIST_SKU: ['/inquiry/list/sku', 'BASE_DHC'],
  POST_INQUIRY_ACTION: ['/inquiry/action', 'BASE_DHC'],
  GET_INQIIRY_DETAIL: ['/inquiry', 'BASE_DHC'],
  GET_INQUIRY_HISTORY: ['/inquiry/{id}/history', 'BASE_DHC'],
  GET_INQUIRY_DETAIL_HISTORY: ['/inquiry/detail/{id}/history', 'BASE_DHC'],
  get_productList:['/sku/listSkuByParams','BASE_CS'],
  post_ledgerPage:['/ledger/page','BASE_BJ'],
  get_supplierWhole:['/supplierWhole','BASE_CS'],
  add_address:['/supplier/address','BASE_CS'],
  delete_address:['/supplier/delAddress/{id}','BASE_CS'],
  update_address:['/supplier/address/{id}','BASE_CS'],
  add_account:['/supplier/account','BASE_CS'],
  update_account:['/supplier/account/{id}','BASE_CS'],
  delete_account:['/supplier/delAccount/{id}','BASE_CS'],
  delete_contact:['/supplier/delContact/{id}','BASE_CS'],
  update_contact:['/supplier/contact/{id}','BASE_CS'],
  add_contact:['/supplier/contact','BASE_CS'],
  update_supplier:['/supplier/{id}','BASE_CS'],
  //order
  get_orderlist:['/customer/order/page','BASE_HCJ'],
  //
  get_userProfile:['/user/profile','BASE_LYF'],
  put_userProfile:['/user/profile','BASE_LYF'],
};

let list = _.mapObject(apis, val => {
  let b = ''
    , v = version[val[2] || 0];
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
