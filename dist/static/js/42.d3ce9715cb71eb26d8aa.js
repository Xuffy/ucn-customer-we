webpackJsonp([42],{"1Hqy":function(e,t,a){"use strict";(function(e){var i=a("bGai");t.a={name:"",data:function(){return{checkedData:[],pazeSize:[10,20,30,40,50,100],searchLoad:!1,options:[{id:"INQUIRY_NO",label:"询价单号"},{id:"QUOTATION_NO",label:"询价单号（供应商自有）"},{id:"SUPPLIER_NAME",label:"供应商名称"},{id:"SUPPLIER_TYPE",label:"供应商类型"},{id:"PAYMENT_METHOD",label:"支付方式"}],tabData:[],viewByStatus:"",params:{status:null,keyType:"",key:"",ps:10,pn:1,recycleCustomer:!1},tabLoad:!1,pageTotal:0,_id:""}},components:{"select-search":i.c,"v-table":i.b},created:function(){this.viewByStatus=0},watch:{viewByStatus:function(){this.gettabData()},params:{handler:function(e,t){this.gettabData()},deep:!0}},methods:{inputEnter:function(e){return e.keyType?e.key?(this.params.keyType=e.keyType,this.params.key=e.key,void(this.searchLoad=!0)):this.$message("搜索内容不能为空"):this.$message("请选中搜索类型")},gettabData:function(){var e=this,t=void 0,a=void 0;this.tabLoad=!0,this.viewByStatus+""=="0"?(t=this.$apis.POST_INQIIRY_LIST,a=this.$db.inquiryOverview.viewByInqury):(t=this.$apis.POST_INQIIRY_LIST_SKU,a=this.$db.inquiryOverview.viewBySKU),this.$ajax.post(t,this.params).then(function(t){e.pageTotal=t.tc,e.tabData=e.$getDB(a,t.datas),e.tabLoad=!1,e.searchLoad=!1}).catch(function(){e.searchLoad=!1,e.tabLoad=!1})},cancelInquiry:function(){this.ajaxInqueryAction("cancel")},deleteInquiry:function(){var e=this;this.$confirm("确认删除?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){e.ajaxInqueryAction("delete")}).catch(function(){e.$message({type:"info",message:"已取消删除"})})},ajaxInqueryAction:function(e){var t=this,a=this.getChildrenId();this.$ajax.post(this.$apis.POST_INQUIRY_ACTION,{action:e,ids:a}).then(function(e){t.gettabData(),t.checkedData=[]})},action:function(e,t){switch(t){case"detail":this.detail(e)}},detail:function(t){this.$router.push({path:"/negotiation/inquiryDetail",query:{id:e.findWhere(t,{key:"id"}).value}})},getChildrenId:function(t){var a=[];return e.map(this.checkedData,function(t){e.isUndefined(t)||a.push(e.findWhere(t,{key:"id"}).value)}),"string"==typeof t&&a.join(","),a},toCompare:function(){var e=this.getChildrenId("str");this.$windowOpen({url:"/negotiation/compareDetail/{type}",params:{type:"new",ids:e.join(",")}})},pageChange:function(e){console.log(e)},handleSizeChange:function(e){this.params.ps=e},changeChecked:function(e){this.checkedData=e}}}}).call(t,a("u47Y"))},"8a47":function(e,t,a){"use strict";var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"inquiryOverview"},[a("h3",{staticClass:"hd"},[e._v(" "+e._s(e.$i._inquiry.inquiryOverviewTitle))]),e._v(" "),a("div",{staticClass:"status"},[a("div",{staticClass:"state"},[a("span",[e._v(e._s(e.$i._baseText.state))]),e._v(" "),a("el-radio-group",{attrs:{size:"mini"},model:{value:e.params.status,callback:function(t){e.$set(e.params,"status",t)},expression:"params.status"}},[a("el-radio-button",{attrs:{label:null}},[e._v(e._s(e.$i._baseText.all))]),e._v(" "),e._l(e.$db.inquiryOverview.overoiewState,function(t){return a("el-radio-button",{key:t.id,attrs:{label:t.id}},[e._v("\n                "+e._s(t.text)+"\n                ")])})],2)],1),e._v(" "),a("select-search",{attrs:{options:e.options,searchLoad:e.searchLoad},on:{inputChange:e.inputEnter}})],1),e._v(" "),a("div",{staticClass:"fn"},[a("div",{staticClass:"btn-wrap"},[a("el-button",{attrs:{disabled:!(e.checkedData.length>=2)},on:{click:e.toCompare}},[e._v(e._s(e.$i._baseText.compare)),a("span",[e._v("("+e._s(e.checkedData?e.checkedData.length:"")+")")])]),e._v(" "),a("el-button",{on:{click:function(t){e.$windowOpen({url:"/negotiation/createInquiry"})}}},[e._v(e._s(e.$i._baseText.createNewInquiry))]),e._v(" "),a("el-button",{attrs:{disabled:!e.checkedData.length||!e.checkedData},on:{click:e.cancelInquiry}},[e._v(e._s(e.$i._baseText.cancelTheInquiry)),a("span",[e._v("("+e._s(e.checkedData?e.checkedData.length:"")+")")])]),e._v(" "),a("el-button",{attrs:{type:"danger",disabled:!e.checkedData.length||!e.checkedData},on:{click:e.deleteInquiry}},[e._v(e._s(e.$i._baseText.delete)),a("span",[e._v("("+e._s(e.checkedData?e.checkedData.length:"")+")")])])],1),e._v(" "),a("div",{staticClass:"viewBy"},[a("span",[e._v(e._s(e.$i._baseText.viewBy)+" ")]),e._v(" "),a("el-radio-group",{attrs:{size:"mini"},model:{value:e.viewByStatus,callback:function(t){e.viewByStatus=t},expression:"viewByStatus"}},[a("el-radio-button",{attrs:{label:"0"}},[e._v(e._s(e.$i._baseText.inquiry))]),e._v(" "),a("el-radio-button",{attrs:{label:"1"}},[e._v(e._s(e.$i._baseText.SKU))])],1)],1)]),e._v(" "),a("v-table",{ref:"tab",attrs:{data:e.tabData,buttons:[{label:"detail",type:"detail"}],loading:e.tabLoad},on:{action:e.action,"change-checked":e.changeChecked}}),e._v(" "),a("el-pagination",{attrs:{currentPage:e.params.pn,"page-sizes":e.pazeSize,"page-size":e.params.ps,layout:"total, sizes, prev, pager, next, jumper",total:e.pageTotal},on:{"size-change":e.handleSizeChange,"update:currentPage":function(t){e.$set(e.params,"pn",t)}}})],1)},n=[];i._withStripped=!0;var s={render:i,staticRenderFns:n};t.a=s},CLrd:function(e,t,a){"use strict";function i(e){r||a("pD+S")}Object.defineProperty(t,"__esModule",{value:!0});var n=a("1Hqy"),s=a("8a47"),r=!1,o=a("Z0/y"),c=i,d=o(n.a,s.a,!1,c,"data-v-36d80362",null);d.options.__file="src\\views\\sellerNegotiation\\inquiryOverview.vue",t.default=d.exports},EGvt:function(e,t,a){t=e.exports=a("UTlt")(!1),t.push([e.i,".inquiryOverview .hd[data-v-36d80362]{padding-left:15px;height:50px;line-height:50px;color:#666;border-bottom:1px solid #ccc}.inquiryOverview .status[data-v-36d80362]{height:60px;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;padding:0 15px;-webkit-box-sizing:border-box;box-sizing:border-box}.inquiryOverview .status .state[data-v-36d80362],.inquiryOverview .status[data-v-36d80362]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.inquiryOverview .status .state[data-v-36d80362]{font-size:16px;color:#666}.inquiryOverview .status span[data-v-36d80362]{padding-right:5px}.inquiryOverview .status .btn-wrap[data-v-36d80362]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.inquiryOverview .status .btn-wrap span[data-v-36d80362]{font-size:14px}.inquiryOverview .status .btn-wrap button[data-v-36d80362]{padding:2px 5px}.inquiryOverview .status .select-wrap[data-v-36d80362]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.inquiryOverview .status .select-wrap .select[data-v-36d80362]{width:110px;margin-right:5px}.inquiryOverview .fn[data-v-36d80362]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;padding:10px 15px;-webkit-box-sizing:border-box;box-sizing:border-box}.inquiryOverview .fn .viewBy[data-v-36d80362]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.inquiryOverview .fn .viewBy span[data-v-36d80362]{font-size:14px;color:#666}.inquiryOverview .fn .viewBy button[data-v-36d80362]{cursor:pointer;padding:2px 5px}.inquiryOverview .fn .viewBy .set[data-v-36d80362]{cursor:pointer;padding-left:18px;color:#999}.inquiryOverview .fn .viewBy .set i[data-v-36d80362]{font-size:25px}",""])},"pD+S":function(e,t,a){var i=a("EGvt");"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);a("FIqI")("73c071ea",i,!1,{})}});