webpackJsonp([24],{GWGp:function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"qc-overview"},[a("div",{staticClass:"head"},[a("el-form",{ref:"qcOrder",attrs:{model:t.qcOrder,"label-width":"190px"}},[a("el-row",{staticClass:"speZone"},[a("el-col",{attrs:{xs:24,sm:12,md:12,lg:8,xl:8}},[a("el-form-item",{attrs:{prop:"qcStatus",label:t.$t("warehouse.page.qcStatus")+" :"}},[a("el-input",{attrs:{size:"mini"},model:{value:t.qcOrder.qcStatus,callback:function(e){t.$set(t.qcOrder,"qcStatus",e)},expression:"qcOrder.qcStatus"}})],1)],1),t._v(" "),a("el-col",{attrs:{xs:24,sm:12,md:12,lg:8,xl:8}},[a("el-form-item",{attrs:{prop:"qcStatus",label:t.$t("warehouse.page.qcOrderNo")+" :"}},[a("el-input",{attrs:{size:"mini"},model:{value:t.qcOrder.qcOrderNo,callback:function(e){t.$set(t.qcOrder,"qcOrderNo",e)},expression:"qcOrder.qcOrderNo"}})],1)],1),t._v(" "),a("el-col",{attrs:{xs:24,sm:12,md:12,lg:8,xl:8}},[a("el-form-item",{attrs:{prop:"qcStatus",label:t.$t("warehouse.page.orderNo")+" :"}},[a("el-input",{attrs:{size:"mini"},model:{value:t.qcOrder.orderNo,callback:function(e){t.$set(t.qcOrder,"orderNo",e)},expression:"qcOrder.orderNo"}})],1)],1),t._v(" "),a("el-col",{attrs:{xs:24,sm:12,md:12,lg:8,xl:8}},[a("el-form-item",{attrs:{prop:"qcStatus",label:t.$t("warehouse.page.inboundNo")+" :"}},[a("el-input",{attrs:{size:"mini"},model:{value:t.qcOrder.inboundNo,callback:function(e){t.$set(t.qcOrder,"inboundNo",e)},expression:"qcOrder.inboundNo"}})],1)],1)],1)],1),t._v(" "),a("div",{staticClass:"btns"},[a("el-button",{attrs:{type:"primary"}},[t._v(t._s(t.$t("warehouse.page.search")))]),t._v(" "),a("el-button",{attrs:{type:"info"}},[t._v(t._s(t.$t("warehouse.page.clear")))])],1)],1),t._v(" "),a("div",{staticClass:"body"},[a("div",{staticClass:"btn-group"},[a("el-button",[t._v(t._s(t.$t("warehouse.page.exports")))]),t._v(" "),a("el-button",[t._v(t._s(t.$t("warehouse.page.add")))]),t._v(" "),a("el-button",{on:{click:function(e){t.$router.push("/warehouse/qcDetail")}}},[t._v("qc detail")])],1),t._v(" "),a("v-table",{attrs:{data:t.tableDataList,"data-key":"payment.tableData"}})],1)])},o=[],s={render:r,staticRenderFns:o};e.a=s},XFoF:function(t,e,a){"use strict";function r(t){a("vAEw")}Object.defineProperty(e,"__esModule",{value:!0});var o=a("uFZj"),s=a("GWGp"),l=a("Z0/y"),i=r,n=l(o.a,s.a,!1,i,"data-v-20e6bfbd",null);e.default=n.exports},mnAv:function(t,e,a){e=t.exports=a("UTlt")(!1),e.push([t.i,".head-list[data-v-20e6bfbd]{margin-bottom:10px}.head-list label[data-v-20e6bfbd]{width:190px;display:inline-block;height:32px;line-height:32px;text-align:right;font-size:14px;color:#606266;padding:0 12px 0 0;-webkit-box-sizing:border-box;box-sizing:border-box;float:left}.head-list .content[data-v-20e6bfbd]{margin-left:190px;height:32px}.head-list .content[data-v-20e6bfbd] input{height:32px}.btns[data-v-20e6bfbd]{text-align:center}.btn-group[data-v-20e6bfbd]{margin-bottom:10px}",""])},uFZj:function(t,e,a){"use strict";var r=a("QGvi");e.a={name:"qc-overview",components:{VTable:r.a},data:function(){return{name:"",value:"",options:[{label:"哇哈哈",value:"哇哈哈"},{label:"喜之郎",value:"喜之郎"}],qcOrder:{qcStatus:"",qcOrderNo:"",orderNo:"",inboundNo:""},tableDataList:[],dataColumn:[]}},methods:{pageChange:function(t){console.log(t)},getSort:function(t,e){console.log(t,e)},getList:function(){var t=this;this.ajax.get("/getTrackList").then(function(e){t.tableDataList=e})}},created:function(){this.getList()}}},vAEw:function(t,e,a){var r=a("mnAv");"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);a("FIqI")("c9624e50",r,!0,{})}});