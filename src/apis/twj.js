export default {
  //payment
  post_ledgerPage:['/ledger/page','BASE_BJ_p','UPURCHASE_URL'],
  //message
  post_companymessage_query:['/companymessage/query','BASE_JML_msg','UMESSAGE_URL'],
  post_systemmessage_query:['/systemmessage/query','BASE_JML_msg','UMESSAGE_URL'],
  post_sys_queryownlist:['/systemmessage/queryownlist','BASE_JML_msg','UMESSAGE_URL'],
  post_sys_addsystemmessage:['/systemmessage/addsystemmessage','BASE_JML_msg','UMESSAGE_URL'],
  post_sys_updateread:['/systemmessagesubscribe/updateread','BASE_JML_msg','UMESSAGE_URL'],
  post_company_queryownlist:['/companymessage/queryownlist','BASE_JML_msg','UMESSAGE_URL'],
  post_company_addcompanymessage:['/companymessage/addcompanymessage','BASE_JML_msg','UMESSAGE_URL'],
  post_company_updateread:['/companymessagesubscribe/updateread','BASE_JML_msg','UMESSAGE_URL'],
  get_messagesetting_query:['/messagesetting/query','BASE_JML_msg','UMESSAGE_URL'],
  post_messagesetting_updatesetting:['/messagesetting/updatesetting','BASE_JML_msg','UMESSAGE_URL'],
  //logs
  post_bizloQuery:['/bizlog/query','UBIZLOG_URL','UBIZLOG_URL'],
  //Personal Setting
  get_user_profile:['/user/profile','BASE_UUSER','UUSER_URL'],
  put_user_profile:['/user/profile','BASE_UUSER','UUSER_URL'],
  put_user_profile_password:['/user/profile/password','BASE_UUSER','UUSER_URL'],
  //qc order
  post_qc_page:['/qc/page','BASE_BJ','UPURCHASE_URL'],

  //元数据
  POST_CODE_PART: ['/code/part', 'BASE_JML','UMETA_URL'],
  GET_COUNTRY_ALL: ['/country/all', 'BASE_JML','UMETA_URL'],

  //warehouse
  post_warehouse_page: ['/warehouse/overview/page','BASE_HSM_W','UPURCHASE_URL']
  // post_warehouse_page: ['/warehouse/overview/page','UWAREHOUSE_URL']

}
