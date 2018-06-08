'use strict';
export default {
  //order
  get_orderList: ['/order/overview/orderPage', 'UPURCHASE_URL'],
  get_draft_orderlist: ['/order/draft/page', 'UPURCHASE_URL'],
  get_recycle_orderlist: ['/order/recycle/page', 'UPURCHASE_URL'],
  post_recover_order: ['/order/recover', 'UPURCHASE_URL'],
  post_finishPost: ['/order/finish', 'UPURCHASE_URL'],
  delete_order: ['/order/delete', 'UPURCHASE_URL'],
  download_order: ['/order/download', 'UPURCHASE_URL'],
  send_order: ['/order/send', 'UPURCHASE_URL'],
  add_order: ['/order/save', 'UPURCHASE_URL'],
  detail_order: ['/order/detail/{id}', 'UPURCHASE_URL'],
  get_order_history: ['/order/skuHistory', 'UPURCHASE_URL'],
  post_order_skus: ['/order/skus', 'UPURCHASE_URL'],
  post_cancleOrder: ['/order/cancle', 'UPURCHASE_URL'],
  post_updataOrder: ['/order/update', 'UPURCHASE_URL'],
  post_confirm: ['/order/confirm  ', 'UPURCHASE_URL'],


  //supplier
  post_add_supplier_remark: ['/purchase/supplier/remark', 'UPURCHASE_URL', 'UPURCHASE_URL'],
  get_update_supplier_remark: ['/purchase/supplier/remark/{id}', 'UPURCHASE_URL', 'UPURCHASE_URL'],
  get_listSupplier: ['/purchase/listSupplier', 'UPURCHASE_URL', 'UPURCHASE_URL'],
  get_supplier_id: ['/purchase/supplier/{id}', 'UPURCHASE_URL'],
  post_supplier_list_remark: ['/purchase/supplier/listRemarks', 'UPURCHASE_URL', 'UPURCHASE_URL'],
  post_supplier_remark: ['/purchase/supplier/remark', 'UPURCHASE_URL', 'UPURCHASE_URL'],
  get_supplier_remark_de: ['/purchase/supplier/remark/{id}', 'UPURCHASE_URL', 'UPURCHASE_URL'],
  post_supplier_delete_remark: ['/purchase/supplier/deleteRemark/{id}', 'UPURCHASE_URL', 'UPURCHASE_URL'],
  post_listSupplierByIds: ['/purchase/supplier/listSupplierByIds', 'UPURCHASE_URL', 'UPURCHASE_URL'],
  post_supplier_addbookmark: ['/purchase/supplier/bookmark', 'UPURCHASE_URL', 'UPURCHASE_URL'],
  post_supplier_deletebookmark: ['/purchase/supplier/deleteBookmark/{id}', 'UPURCHASE_URL', 'UPURCHASE_URL'],
  post_supplier_listbookmark: ['/purchase/supplier/listBookmarks', 'UPURCHASE_URL', 'UPURCHASE_URL'],
  post_supplier_recoverbookmark: ['/purchase/supplier/recoverBookmark/{id}', 'UPURCHASE_URL', 'UPURCHASE_URL'],
  post_supplier_addCompare: ['/purchase/supplier/compare', 'UPURCHASE_URL', 'UPURCHASE_URL'],
  post_supplier_listCompare: ['/purchase/supplier/listCompare', 'UPURCHASE_URL', 'UPURCHASE_URL'],
  post_supplier_listCompareDetails: ['/purchase/supplier/listCompareDetails', 'UPURCHASE_URL', 'UPURCHASE_URL'],
  post_supplier_deleteCompareDetails: ['/purchase/supplier/deleteCompareDetails', 'UPURCHASE_URL', 'UPURCHASE_URL'],
  post_supplier_deleteCompare: ['/purchase/supplier/deleteCompare', 'UPURCHASE_URL', 'UPURCHASE_URL'],
  post_supplier_recoverCompare: ['/purchase/supplier/recoverCompare', 'UPURCHASE_URL', 'UPURCHASE_URL'],
  post_deleteBookmarks: ['/purchase/supplier/batchDeleteBookmark', 'UPURCHASE_URL', 'UPURCHASE_URL'],
  post_recoverBookmarks: ['/purchase/supplier/batchRecoverBookmark', 'UPURCHASE_URL', 'UPURCHASE_URL'],
  post_purchase_supplier_orderHistory: ['/purchase/supplier/orderHistory', 'UPURCHASE_URL', 'UPURCHASE_URL'],
  post_purchase_supplier_getInquiryHistory: ['/purchase/supplier/getInquiryHistory', 'UPURCHASE_URL', 'UPURCHASE_URL'],
  post_purchase_supplier_listRemarks: ['/purchase/supplier/listRemarks', 'UPURCHASE_URL', 'UPURCHASE_URL'],
  post_purchase_supplier_remark: ['/purchase/supplier/remark', 'UPURCHASE_URL', 'UPURCHASE_URL'],
  post_purchase_supplier_remark_id: ['/purchase/supplier/remark', 'UPURCHASE_URL', 'UPURCHASE_URL'],
  post_purchase_supplier_deleteRemark_id: ['/purchase/supplier/deleteRemark/{id}', 'UPURCHASE_URL', 'UPURCHASE_URL'],

  //customer
  post_getCustomerList: ['/supply/overview', 'UPURCHASE_URL'],
  post_deleteCustomerRemark: ['/supply/deleteRemark/{id}', 'UPURCHASE_URL'],
  post_customerDetail: ['/supply/{id}', 'UPURCHASE_URL'],
  post_getCustomerListRemark: ['/supply/listRemarks/{id}', 'UPURCHASE_URL'],
  post_addCustomerListRemark: ['/supply/remark', 'UPURCHASE_URL'],
  post_delete_CustomerRemark: ['/supply/deleteRemark/{id}', 'UPURCHASE_URL'],
  post_customerUpdataRmark: ['/supply/remark/{id}', 'UPURCHASE_URL'],


  //payment
  paymentGetNo: ['/payment/genNo', 'UPURCHASE_URL'],
  paymentSave: ['/payment/save', 'UPURCHASE_URL'],
  paymentUpdata: ['/payment/update', 'UPURCHASE_URL'],
  paymentRecover: ['/payment/recover', 'UPURCHASE_URL'],
  paymentAbandon: ['/payment/abandon', 'UPURCHASE_URL'],
  paymentAccept: ['/payment/accept/{id}', 'UPURCHASE_URL'],
  paymentDunning: ['/payment/dunning/{orderNo}/{orderType}', 'UPURCHASE_URL'],
  post_order_paymentlist: ['/payment/list/{orderNo}/{orderType}', 'UPURCHASE_URL'],


  //字典表数据
  post_codePart: ['/code/part', 'UMETA_URL'],
  post_country: ['/country/all', 'UMETA_URL'],
  post_logisticsport: ['/logisticsport/query', 'UMETA_URL'],
  get_currency: ['/currency/all', 'UMETA_URL'],
  CURRENCY_ALL: ['/currency/all', 'UMETA_URL'],
  CUSTOMERCURRENCYEXCHANGERATE_QUERY: ['/customcurrencyexchangerate/query', 'UMETA_URL'],
  COUNTRY_ALL: ['/country/all', 'UMETA_URL'],


  /**
   * 新格式order接口配置
   * */
  ORDER_GETORDERNO: ['/order/getOrderNo', 'UPURCHASE_URL'],
  ORDER_FINISH: ['/order/finish', 'UPURCHASE_URL'],
  PURCHASE_SUPPLIER_LIST_SUPPLIER_BY_NAME: ['/purchase/supplier/listSupplierByName?name={name}', 'UPURCHASE_URL'],
  INQUIERY_LIST: ['/inquiry/list', 'UPURCHASE_URL'],
  ORDER_SKUS: ['/order/skus', 'UPURCHASE_URL'],
  ORDER_SKUHISTORY: ['/order/skuHistory', 'UPURCHASE_URL'],
  INQUIRY_ID: ['/inquiry/{id}', 'UPURCHASE_URL'],
  OVERVIEW_ORDERPAGE: ['/order/overview/orderPage', 'UPURCHASE_URL'],
  OVERVIEW_SKUPAGE: ['/order/overview/skuPage', 'UPURCHASE_URL'],
  ORDER_SAVE: ['/order/save', 'UPURCHASE_URL'],
  ORDER_DRAFT_ORDERPAGE: ['/order/draft/orderPage', 'UPURCHASE_URL'],
  ORDER_DRAFT_SKUPAGE: ['/order/draft/skuPage', 'UPURCHASE_URL'],
  ORDER_DETAIL: ['/order/detail', 'UPURCHASE_URL'],

}
