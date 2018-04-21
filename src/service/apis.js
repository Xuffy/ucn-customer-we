const version = ['/web/v1', '/web/v2', '/web/v3'];
import config from './config';

const apis = {
  ITEMFAVORITE_PART: ['/itemfavorite/part', 'BASE_JML'],
  ITEMFAVORITE_UPDATE: ['/itemfavorite/update', 'BASE_JML'],
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
  POST_INQIIRY_COMPARE_LIST: ['/inquiry/compare/list', 'BASE_DHC'],
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
  get_orderlist:['/order/page','BASE_HCJ'],
  delete_order:['/order/delete','BASE_HCJ'],
  download_order:['/order/download','BASE_HCJ'],
  send_order:['/order/send','BASE_HCJ'], 
  //
  get_userProfile:['/user/profile','BASE_LYF'],
  put_userProfile:['/user/profile','BASE_LYF'],
  put_userProfilePassword:['/user/profile/password','BASE_LYF'],
  put_userProfileEmail:['/user/profile/email','BASE_LYF'],
  get_department:['/department','BASE_LYF'],
  get_role:['/role','BASE_LYF'],

  //supplier
  get_listSupplier:['/purchase/listSupplier','BASE_CS_cgs'],
  get_supplier_id:['/purchase/supplier/{id}','BASE_CS_cgs'],
  post_supplier_list_remark:['/purchase/supplier/listRemarks','BASE_CS_cgs'],
  post_supplier_remark:['/purchase/supplier/remark','BASE_CS_cgs'],
  get_supplier_remark_de:['/purchase/supplier/remark/{id}','BASE_CS_cgs'],
  post_supplier_delete_remark:['/purchase/supplier/deleteRemark/{id}','BASE_CS_cgs'],
  //settings
  get_department:['/department','BASE_LYF'],
  get_departmentUser:['/user/list','BASE_LYF'],
  //product buyer
  get_buyerProductList:['/purchase/sku/listSkuByParams','BASE_CS1'],
  post_add_supplier_remark:['/purchase/supplier/remark','BASE_CS_cgs'],
  get_update_supplier_remark:['/purchase/supplier/remark/{id}','BASE_CS_cgs'],
  post_supplier_addbookmark:['/purchase/supplier/bookmark','BASE_CS_cgs'],
  post_supplier_deletebookmark:['/purchase/supplier/deleteBookmark/{id}','BASE_CS_cgs'],
  post_supplier_listbookmark:['/purchase/supplier/listBookmarks','BASE_CS_cgs'], 
  post_supplier_recoverbookmark:['/purchase/supplier/recoverBookmark/{id}','BASE_CS_cgs'],
  post_supplier_addCompare:['/purchase/supplier/supplier/compare','BASE_CS_cgs'],
  post_supplier_listCompareDetails:['/purchase/supplier/supplier/compareDetail/{id}','BASE_CS_cgs'],
  post_supplier_deleteCompare:['/purchase/supplier/deleteCompare','BASE_CS_cgs'],
  post_supplier_deleteCompareDetail:['/purchase/supplier/deleteCompareDetail','BASE_CS_cgs'],
  post_supplier_recoverCompare:['/purchase/supplier/recoverCompare','BASE_CS_cgs'],
  //
  post_bizlog:['/bizlog/query','BASE_JML_log'],
  post_codePart:['/code/part','BASE_JML']

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
