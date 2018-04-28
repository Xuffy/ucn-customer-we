'use strict';
export default {
    //order
    get_orderlist: ['/order/page', 'BASE_HCJ', 'UPURCHASE_URL'],
    get_draft_orderlist: ['/order/draft/page', 'BASE_HCJ', 'UPURCHASE_URL'],
    get_recycle_orderlist: ['/order/recycle/page', 'BASE_HCJ', 'UPURCHASE_URL'],
    post_recover_order: ['/order/recover', 'BASE_HCJ', 'UPURCHASE_URL'],
    post_finishPost: ['/order/finish', 'BASE_HCJ', 'UPURCHASE_URL'],
    delete_order: ['/order/delete', 'BASE_HCJ', 'UPURCHASE_URL'],
    download_order: ['/order/download', 'BASE_HCJ', 'UPURCHASE_URL'],
    send_order: ['/order/send', 'BASE_HCJ', 'UPURCHASE_URL'],
    add_order: ['/order/save', 'BASE_HCJ', 'UPURCHASE_URL'],
    detail_order: ['/order/detail/{id}', 'BASE_HCJ', 'UPURCHASE_URL'],
    get_order_history: ['/order/skuHistory', 'BASE_HCJ', 'UPURCHASE_URL'],
    post_order_paymentlist: ['/payment/list/{orderNo}/{orderType}', 'BASE_BUYER', 'UPURCHASE_URL'],
    post_order_skus: ['/order/skus', 'BASE_HCJ', 'UPURCHASE_URL'],


    //supplier
    post_add_supplier_remark: ['/purchase/supplier/remark', 'BASE_CS_cgs'],
    get_update_supplier_remark: ['/purchase/supplier/remark/{id}', 'BASE_CS_cgs'],
    get_listSupplier: ['/purchase/listSupplier', 'BASE_CS_cgs', 'UPURCHASE_URL'],
    get_supplier_id: ['/purchase/supplier/{id}', 'BASE_CS_cgs', 'UPURCHASE_URL'],
    post_supplier_list_remark: ['/purchase/supplier/listRemarks', 'BASE_CS_cgs', 'UPURCHASE_URL'],
    post_supplier_remark: ['/purchase/supplier/remark', 'BASE_CS_cgs', 'UPURCHASE_URL'],
    get_supplier_remark_de: ['/purchase/supplier/remark/{id}', 'BASE_CS_cgs', 'UPURCHASE_URL'],
    post_supplier_delete_remark: ['/purchase/supplier/deleteRemark/{id}', 'BASE_CS_cgs', 'UPURCHASE_URL'],
    post_listSupplierByIds: ['/purchase/supplier/listSupplierByIds', 'BASE_CS_cgs', 'UPURCHASE_URL'],
    post_supplier_addbookmark: ['/purchase/supplier/bookmark', 'BASE_CS_cgs', 'UPURCHASE_URL'],
    post_supplier_deletebookmark: ['/purchase/supplier/deleteBookmark/{id}', 'BASE_CS_cgs', 'UPURCHASE_URL'],
    post_supplier_listbookmark: ['/purchase/supplier/listBookmarks', 'BASE_CS_cgs', 'UPURCHASE_URL'],
    post_supplier_recoverbookmark: ['/purchase/supplier/recoverBookmark/{id}', 'BASE_CS_cgs', 'UPURCHASE_URL'],
    post_supplier_addCompare: ['/purchase/supplier/compare', 'BASE_CS_cgs', 'UPURCHASE_URL'],
    post_supplier_listCompare: ['/purchase/supplier/listCompare', 'BASE_CS_cgs', 'UPURCHASE_URL'],
    post_supplier_listCompareDetails: ['/purchase/supplier/listCompareDetails', 'BASE_CS_cgs', 'UPURCHASE_URL'],
    post_supplier_deleteCompareDetails: ['/purchase/supplier/deleteCompareDetails', 'BASE_CS_cgs', 'UPURCHASE_URL'],
    post_supplier_deleteCompare: ['/purchase/supplier/deleteCompare', 'BASE_CS_cgs', 'UPURCHASE_URL'],
    post_supplier_recoverCompare: ['/purchase/supplier/recoverCompare', 'BASE_CS_cgs', 'UPURCHASE_URL'],
    post_deleteBookmarks: ['/purchase/supplier/batchDeleteBookmark', 'BASE_CS_cgs', 'UPURCHASE_URL'],

}
