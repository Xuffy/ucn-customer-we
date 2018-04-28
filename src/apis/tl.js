export default {
    POST_INQIIRY_LIST: ['/inquiry/list', 'BASE_DHC', 'USUPPLY_URL'], // 采购端=> inquiry list
    
    GET_SYS_CATEGORY: ['/sys/category', 'BASE_CS', 'USUPPLY_URL'], //采购商 =》 获取系统分类
    BUYER_GET_PURCHASE_SYS_CAREGORY: ['/purchase/sys/category', 'BASE_CS1', 'USUPPLY_URL'], //采购端 => 获取系统分类
    GET_CATEGORY: ['/category', 'BASE_CS', 'USUPPLY_URL'], //采购商 =》 获取我的分类
    BUYER_GET_CATEGORY: ['/purchase/category', 'BASE_CS1', 'UPURCHASE_URL'], //供应商 =》 获取我的分类



    
    mapping_category: ['/category/mapping', 'BASE_CS', 'USUPPLY_URL'],
    delete_category: ['/category/delete', 'BASE_CS', 'USUPPLY_URL'],
    get_productDetail: ['/sku/{id}', 'BASE_CS', 'USUPPLY_URL'],
    delete_product: ['/sku/{id}/delete', 'BASE_CS', 'USUPPLY_URL'],
    change_productStatus: ['/sku/{id}/status', 'BASE_CS', 'USUPPLY_URL'],
    PURCHASE_SUPPLIER_LISTSUPPLIERBYNAME: ['/purchase/supplier/listSupplierByName', 'BASE_CS1', 'USUPPLY_URL'],

    POST_INQUIRY_SKUS: ['/inquiry/skus', 'BASE_DHC', 'USUPPLY_URL'],
    POST_INQUIRY_COMPARE_DELETE: ['/inquiry/compare/delete', 'BASE_DHC', 'USUPPLY_URL'],
    POST_INQUIRY_COMPARE: ['/inquiry/compare/{id}', 'BASE_DHC', 'USUPPLY_URL'],
    POST_INQUIRY_COMPARE_RESTORE: ['/inquiry/compare/restore', 'BASE_DHC', 'USUPPLY_URL'],
    POST_INQUIRY_COMPARE_RS: ['/inquiry/compare', 'BASE_DHC', 'USUPPLY_URL'],
    POST_INQUIRY_SAVE: ['/inquiry/save', 'BASE_DHC', 'USUPPLY_URL'],
    POST_INQUIRY_SKU: ['/inquiry/compare/{id}/sku', 'BASE_DHC', 'USUPPLY_URL'],
    POST_INQIIRY_LIST_SKU: ['/inquiry/list/sku', 'BASE_DHC', 'USUPPLY_URL'],
    POST_INQUIRY_ACTION: ['/inquiry/action', 'BASE_DHC', 'USUPPLY_URL'],
    GET_INQIIRY_DETAIL: ['/inquiry', 'BASE_DHC', 'USUPPLY_URL'],
    GET_INQUIRY_HISTORY: ['/inquiry/{id}/history', 'BASE_DHC', 'USUPPLY_URL'],
    POST_INQIIRY_COMPARE_LIST: ['/inquiry/compare/list', 'BASE_DHC', 'USUPPLY_URL'],
    GET_INQUIRY_DETAIL_HISTORY: ['/inquiry/detail/{id}/history', 'BASE_DHC', 'USUPPLY_URL'],

    ITEMFAVORITE_PART: ['/itemfavorite/part', 'BASE_JML', 'USUPPLY_URL'],
    ITEMFAVORITE_UPDATE: ['/itemfavorite/update', 'BASE_JML', 'USUPPLY_URL'],
    POST_CODE_PART: ['/code/part', 'BASE_JML', 'USUPPLY_URL'],
    POST_LOGISTICSPORT_QUERY: ['/logisticsport/query', 'BASE_JML', 'USUPPLY_URL'],
    GET_COUNTRY_ALL: ['/country/all', 'BASE_JML', 'USUPPLY_URL']
}