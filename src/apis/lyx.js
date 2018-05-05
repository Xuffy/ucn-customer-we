export default {
  // logistic
  gei_plan_list: ['/logistics/plan/pageByPlanNo', 'BASE_BUY'],
  get_transportation_list: ['/logistics/plan/pageByUnit', 'BASE_BUY'],
  get_SKU_list: ['/logistics/plan/pageBySkuCode', 'BASE_BUY'],
  get_dictionary: ['/code/part', 'BASE_CODE'],
  delete_by_ids: ['/logistics/plan/deleteByIds', 'BASE_BUY'],
  get_new_logistics_no: ['/logistics/plan/getNo', 'BASE_BUY'],
  get_currency: ['/currency/all', 'BASE_CODE'],
  get_container_type: ['/containertype/all', 'BASE_CODE'],
  get_plan_details: ['/logistics/plan/get/', 'BASE_BUY'],
  get_payment_list: ['/payment/list/', 'BASE_BUY'],
  get_product_history: ['/logistics/plan/getProductHistory', 'BASE_BUY'],
  get_order_list_with_page: ['/order/skuAllPage', 'BASE_BUY'],
}
