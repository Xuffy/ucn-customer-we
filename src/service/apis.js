


const apis = {
  USER_PRIVILEGE: ['/user/privilege', 'BASE_UUSER'],
  CHATMESSAGE_QUERY: ['/chatmessage/query', 'BASE_JML2'],
  CHATMESSAGE_ADD: ['/chatmessage/add', 'BASE_JML2'],
  UTASK_PAGELIST: ['/utask/pageList', 'BASE_JY'],
  UTASK_TYPELIST: ['/utask/typeList', 'BASE_JY'],
  ITEMFAVORITE_PART: ['/itemfavorite/part', 'BASE_JML'],
  ITEMFAVORITE_UPDATE: ['/itemfavorite/update', 'BASE_JML'],
  POST_CODE_PART: ['/code/part', 'BASE_JML'],
  POST_LOGISTICSPORT_QUERY: ['/logisticsport/query', 'BASE_JML'],
  GET_COUNTRY_ALL: ['/country/all', 'BASE_JML'],
  gridfieldsetting: ['/gridfieldsetting', 'BASE_API'],
  get_listTest: ['/getList', 'BASE_API'],
  get_itemfavoriteList: ['/itemfavorite/list', 'BASE_API'],
  update_gridfavorite: ['/gridfavorite/{bizCode}/{gridFieldId}', 'BASE_API'],
  GET_SYS_CATEGORY: ['/sys/category', 'BASE_CS'], //供应商 =》 获取系统分类
  BUYER_GET_PURCHASE_SYS_CAREGORY: ['/purchase/sys/category', 'BASE_CS1'], //采购端 => 获取系统分类
  GET_QUICKLINK: ['/getQuickLink', 'BASE_API'],
  GET_CATEGORY: ['/category', 'BASE_CS'], //供应商 =》 获取我的分类
  BUYER_GET_CATEGORY: ['/purchase/category', 'BASE_CS1'], //供应商 =》 获取我的分类
  mapping_category: ['/category/mapping', 'BASE_CS'],
  getCategory: ['/purchase/sys/category', 'BASE_CS1'],              //暂时使用
  delete_category: ['/category/delete', 'BASE_CS'],

  supplier_overview: ['/supplierOverview', 'BASE_API'],

  PURCHASE_SUPPLIER_LISTSUPPLIERBYNAME: ['/purchase/supplier/listSupplierByName', 'BASE_CS1'],
  inquiry_list: ['/inquiry/list', 'BASE_DHC'],
  inquiry_list_sku: ['/inquiry/list/sku', 'BASE_DHC'],
  inquiry_delete: ['/inquiry/delete', 'BASE_DHC'],
  inquiry_cancel: ['/inquiry/cancel', 'BASE_DHC'],
  inquiry_detail: ['/inquiry', 'BASE_DHC'],
  POST_INQUIRY_SKUS: ['/inquiry/skus', 'BASE_DHC'],
  POST_INQUIRY_COMPARE_DELETE: ['/inquiry/compare/delete', 'BASE_DHC'],
  POST_INQUIRY_COMPARE: ['/inquiry/compare/{id}', 'BASE_DHC'],
  POST_INQUIRY_COMPARE_RESTORE: ['/inquiry/compare/restore', 'BASE_DHC'],
  POST_INQUIRY_COMPARE_RS: ['/inquiry/compare', 'BASE_DHC'],
  POST_INQUIRY_SAVE: ['/inquiry/save', 'BASE_DHC'],
  POST_INQUIRY_SKU: ['/inquiry/compare/{id}/sku', 'BASE_DHC'],
  POST_INQIIRY_LIST: ['/inquiry/list', 'BASE_DHC'],
  POST_INQIIRY_LIST_SKU: ['/inquiry/list/sku', 'BASE_DHC'],
  POST_INQUIRY_ACTION: ['/inquiry/action', 'BASE_DHC'],
  GET_INQIIRY_DETAIL: ['/inquiry', 'BASE_DHC'],
  GET_INQUIRY_HISTORY: ['/inquiry/{id}/history', 'BASE_DHC'],
  POST_INQIIRY_COMPARE_LIST: ['/inquiry/compare/list', 'BASE_DHC'],
  GET_INQUIRY_DETAIL_HISTORY: ['/inquiry/detail/{id}/history', 'BASE_DHC'],




  //order
  get_orderlist: ['/order/page', 'BASE_HCJ'],
  get_draft_orderlist: ['/order/draft/page', 'BASE_HCJ'],
  get_recycle_orderlist: ['/order/recycle/page', 'BASE_HCJ'],
  post_recover_order:['/order/recover','BASE_HCJ'],
  post_finishPost:['/order/finish','BASE_HCJ'],
  delete_order: ['/order/delete', 'BASE_HCJ'],
  download_order: ['/order/download', 'BASE_HCJ'],
  send_order: ['/order/send', 'BASE_HCJ'],
  add_order: ['/order/save', 'BASE_HCJ'],
  detail_order: ['/order/detail/{id}', 'BASE_HCJ'],
  get_order_history:['/order/skuHistory','BASE_HCJ'],
  post_order_paymentlist:['/payment/list/{orderNo}/{orderType}','BASE_BUYER'],
  //supplier
  get_listSupplier: ['/purchase/listSupplier', 'BASE_CS_cgs'],
  get_supplier_id: ['/purchase/supplier/{id}', 'BASE_CS_cgs'],
  post_supplier_list_remark: ['/purchase/supplier/listRemarks', 'BASE_CS_cgs'],
  post_supplier_remark: ['/purchase/supplier/remark', 'BASE_CS_cgs'],
  get_supplier_remark_de: ['/purchase/supplier/remark/{id}', 'BASE_CS_cgs'],
  post_supplier_delete_remark: ['/purchase/supplier/deleteRemark/{id}', 'BASE_CS_cgs'],
  post_listSupplierByIds:['/purchase/supplier/listSupplierByIds','BASE_CS_cgs'],
  //settings









  post_supplier_addbookmark: ['/purchase/supplier/bookmark', 'BASE_CS_cgs'],
  post_supplier_deletebookmark: ['/purchase/supplier/deleteBookmark/{id}', 'BASE_CS_cgs'],
  post_supplier_listbookmark: ['/purchase/supplier/listBookmarks', 'BASE_CS_cgs'],
  post_supplier_recoverbookmark: ['/purchase/supplier/recoverBookmark/{id}', 'BASE_CS_cgs'],
  post_supplier_addCompare: ['/purchase/supplier/compare', 'BASE_CS_cgs'],
  post_supplier_listCompare: ['/purchase/supplier/listCompare', 'BASE_CS_cgs'],
  post_supplier_listCompareDetails: ['/purchase/supplier/listCompareDetails', 'BASE_CS_cgs'],
  post_supplier_deleteCompareDetails: ['/purchase/supplier/deleteCompareDetails', 'BASE_CS_cgs'],
  post_supplier_deleteCompare: ['/purchase/supplier/deleteCompare', 'BASE_CS_cgs'],
  post_supplier_recoverCompare: ['/purchase/supplier/recoverCompare', 'BASE_CS_cgs'],
  post_deleteBookmarks:['/purchase/supplier/batchDeleteBookmark','BASE_CS_cgs'],




  // logistic
  gei_plan_list: ['/logistics/plan/pageByPlanNo', 'BASE_LJ'],
  get_transportation_list: ['/logistics/plan/pageByUnit', 'BASE_LJ'],
  get_SKU_list: ['/logistics/plan/pageBySkuCode', 'BASE_LJ'],

  // logistic dictionary
  get_container_type: ['/containertype/all', 'BASE_dictionary'],

  //payment
  post_ledgerPage:['/ledger/page','BASE_BJ'],
  //message
  post_companymessage_query:['/companymessage/query','BASE_JML_msg'],
  post_systemmessage_query:['/systemmessage/query','BASE_JML_msg'],
  get_sys_queryownlist:['/systemmessage/queryownlist','BASE_JML_msg'],
  post_sys_addsystemmessage:['/systemmessage/addsystemmessage','BASE_JML_msg'],
  post_sys_updateread:['/systemmessagesubscribe/updateread','BASE_JML_msg'],
  get_company_queryownlist:['/companymessage/queryownlist','BASE_JML_msg'],
  post_company_addcompanymessage:['/companymessage/addcompanymessage','BASE_JML_msg'],
  post_company_updateread:['/companymessagesubscribe/updateread','BASE_JML_msg'],
  //logs
  post_bizloQuery:['/bizlog/query','BASE_JML_logs'],
  //Personal Setting
  get_user_profile:['/user/profile','BASE_UUSER'],
  put_user_profile:['/user/profile','BASE_UUSER'],
  put_user_profile_password:['/user/profile/password','BASE_UUSER']

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
