webpackJsonp([35],{E4XO:function(t,e,i){var a=i("tge7");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);i("FIqI")("62d2a010",a,!1,{})},Hf4l:function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"inquiryOverview"},[i("h3",{staticClass:"hd"},[t._v(" "+t._s(t.$t("negotiation.text.inquiryOverview")))]),t._v(" "),i("div",{staticClass:"status"},[i("div",{staticStyle:{"margin-top":"20px"}},[i("span",[t._v(t._s(t.$t("negotiation.status.index")))]),t._v(" "),i("el-radio-group",{attrs:{size:"mini"},model:{value:t.params.status,callback:function(e){t.$set(t.params,"status",e)},expression:"params.status"}},[i("el-radio-button",{attrs:{label:0}},[t._v(t._s(t.$t("negotiation.status.TBCByCustomer")))]),t._v(" "),i("el-radio-button",{attrs:{label:1}},[t._v(t._s(t.$t("negotiation.status.TBCBySupplier")))]),t._v(" "),i("el-radio-button",{attrs:{label:2}},[t._v(t._s(t.$t("negotiation.status.finish")))]),t._v(" "),i("el-radio-button",{attrs:{label:3}},[t._v(t._s(t.$t("negotiation.status.cancel")))])],1)],1),t._v(" "),i("select-search",{attrs:{options:t.options,"search-load":t.searchLoad},on:{selectChange:t.selectChange,inputEnter:t.inputEnter}})],1),t._v(" "),i("div",{staticClass:"fn"},[i("div",{staticClass:"btn-wrap"},[i("el-button",{on:{click:t.toCompare}},[t._v(t._s(t.$t("negotiation.btn.Compare")))]),t._v(" "),i("el-button",{on:{click:function(e){t.windowOpen("/negotiation/createInquiry")}}},[t._v(t._s(t.$t("negotiation.btn.createNewInquiry")))]),t._v(" "),i("el-button",{on:{click:t.cancelInquiry}},[t._v(t._s(t.$t("negotiation.btn.cancelTheInquiry")))]),t._v(" "),i("el-button",{attrs:{type:"danger"},on:{click:t.deleteInquiry}},[t._v(t._s(t.$t("negotiation.btn.Delete")))])],1),t._v(" "),i("div",{staticClass:"viewBy"},[i("span",[t._v(t._s(t.$t("negotiation.viewBy.index"))+" ")]),t._v(" "),i("el-radio-group",{attrs:{size:"mini"},model:{value:t.viewByStatus,callback:function(e){t.viewByStatus=e},expression:"viewByStatus"}},[i("el-radio-button",{attrs:{label:t.$t("negotiation.viewBy.inquiry")}}),t._v(" "),i("el-radio-button",{attrs:{label:t.$t("negotiation.viewBy.SKU")}})],1)],1)]),t._v(" "),i("v-table",{ref:"tab",attrs:{data:t.tabData,"data-key":t.tabColumn,buttons:[{label:"detail",type:"detail"}],loading:t.tabLoad},on:{action:t.action,"page-change":t.pageChange}})],1)},n=[];a._withStripped=!0;var s={render:a,staticRenderFns:n};e.a=s},q3Eb:function(t,e,i){"use strict";function a(t){o||i("E4XO")}Object.defineProperty(e,"__esModule",{value:!0});var n=i("ruJG"),s=i("Hf4l"),o=!1,r=i("Z0/y"),l=a,u=r(n.a,s.a,!1,l,"data-v-1c2da5e1",null);u.options.__file="src\\views\\negotiation\\inquiryOverview.vue",e.default=u.exports},ruJG:function(t,e,i){"use strict";var a=i("bGai");e.a={name:"",data:function(){return{searchLoad:!1,options:[{id:"1",label:"时间段"},{id:"2",label:"询价单号（系统）"},{id:"3",label:"询价单号（供应商自有）"},{id:"4",label:"询价单号（客户）"}],tabColumn:"",tabData:[],viewByStatus:"",keyType:"",params:{status:"",keyType:"",key:"",ps:10,pn:1},tabLoad:!1}},components:{"select-search":a.e,"v-table":a.f},created:function(){this.viewByStatus=this.$t("negotiation.viewBy.inquiry")},watch:{viewByStatus:function(){this.gettabData()},params:{handler:function(t,e){this.gettabData()},deep:!0}},methods:{selectChange:function(t){this.keyType=t},inputEnter:function(t){return this.keyType?t?(this.params.keyType=this.keyType,this.params.key=t,void(this.searchLoad=!0)):this.$message("搜索内容不能为空"):this.$message("请选中搜索类型")},gettabData:function(){var t=null;return this.tabLoad=!0,"Inquiry"===this.viewByStatus?(this.$apis.inquiry_list,t="negotiation.tableViewByInquiry"):(this.$apis.inquiry_list_sku,t="negotiation.tableViewBySKU"),this.tabColumn=t,this.tabData=[{inquiryNo:0,quotationNo:0,sequence:2,id:2},{inquiryNo:0,quotationNo:0,sequence:2,id:3}]},cancelInquiry:function(){var t=this.getChildrenTab("id");if(t<=0)return this.$message("请勾选询价单");this.$ajax.post(this.$apis.inquiry_cancel,{id:t}).then(function(t){})},deleteInquiry:function(){var t=this.getChildrenTab("id");if(t<=0)return this.$message("请勾选询价单");this.$ajax.post(this.$apis.inquiry_delete,{id:t}).then(function(t){})},action:function(t,e){switch(e){case"detail":this.detail(t)}},detail:function(t){this.$router.push({path:"/negotiation/inquiryDetail",query:{id:t.id}})},getChildrenTab:function(t){var e=[];return this.$refs.tab.dataList.forEach(function(i){i._checked&&e.push(i[t])}),e},toCompare:function(){var t=this.getChildrenTab("id");if(t.length<2)return this.$message("请至少勾选两个以上");this.$router.push({path:"/negotiation/compare",query:{id:t}})},pageChange:function(t){console.log(t)}}}},tge7:function(t,e,i){e=t.exports=i("UTlt")(!1),e.push([t.i,".inquiryOverview .hd[data-v-1c2da5e1]{padding-left:15px;height:50px;line-height:50px;color:#666;border-bottom:1px solid #ccc}.inquiryOverview .status[data-v-1c2da5e1]{display:-webkit-box;display:-ms-flexbox;display:flex;height:60px;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;padding:0 15px;-webkit-box-sizing:border-box;box-sizing:border-box}.inquiryOverview .status span[data-v-1c2da5e1]{padding-right:5px}.inquiryOverview .status .btn-wrap[data-v-1c2da5e1]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.inquiryOverview .status .btn-wrap span[data-v-1c2da5e1]{font-size:14px}.inquiryOverview .status .btn-wrap button[data-v-1c2da5e1]{padding:2px 5px}.inquiryOverview .status .select-wrap[data-v-1c2da5e1]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.inquiryOverview .status .select-wrap .select[data-v-1c2da5e1]{width:110px;margin-right:5px}.inquiryOverview .fn[data-v-1c2da5e1]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;padding:10px 15px;-webkit-box-sizing:border-box;box-sizing:border-box}.inquiryOverview .fn .viewBy[data-v-1c2da5e1]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.inquiryOverview .fn .viewBy span[data-v-1c2da5e1]{font-size:14px;color:#666}.inquiryOverview .fn .viewBy button[data-v-1c2da5e1]{cursor:pointer;padding:2px 5px}.inquiryOverview .fn .viewBy .set[data-v-1c2da5e1]{cursor:pointer;padding-left:18px;color:#999}.inquiryOverview .fn .viewBy .set i[data-v-1c2da5e1]{font-size:25px}",""])}});