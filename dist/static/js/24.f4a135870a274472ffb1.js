webpackJsonp([24],{RIRX:function(e,t,a){t=e.exports=a("UTlt")(!1),t.push([e.i,".SupplierSourcing[data-v-674e9e00]{padding-right:20px}.title[data-v-674e9e00]{font-weight:700;font-size:18px;height:32px;line-height:32px;color:#666}.title-btn[data-v-674e9e00]{float:right;margin-right:5px}.title-btn[data-v-674e9e00] span{color:#118ee9}.body[data-v-674e9e00]{overflow:hidden;max-height:1400px;display:block;-webkit-transition:max-height .5s cubic-bezier(.445,.05,.55,.95);transition:max-height .5s cubic-bezier(.445,.05,.55,.95)}.hide[data-v-674e9e00]{max-height:0}.form-list[data-v-674e9e00]{margin-bottom:10px}.btn-group[data-v-674e9e00]{text-align:center;margin-top:10px}.btn-group .search[data-v-674e9e00]{margin-right:30px}.btnline[data-v-674e9e00]{margin-top:20px;width:100%;border-top:1px solid #000}.btnline .el-button[data-v-674e9e00]{margin-right:8px;margin-top:20px}.el-input[data-v-674e9e00],.el-select[data-v-674e9e00]{max-width:200px}.speDropdown[data-v-674e9e00]{max-width:200px;height:30px}",""])},WYsN:function(e,t,a){var i=a("RIRX");"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);a("FIqI")("14a55732",i,!1,{})},az69:function(e,t,a){"use strict";var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"SupplierSourcing"},[a("div",{staticClass:"title"},[e._v("\n             "+e._s(e.$i.supplierSourcing)+"\n            "),a("el-button",{staticClass:"title-btn",attrs:{type:"text"},on:{click:e.switchDisplay}},[e._v(e._s(e.btnInfo))])],1),e._v(" "),a("div",{staticStyle:{marginTop:"20px"}},[a("el-form",{ref:"parms",attrs:{model:e.parms,"label-width":"200px",size:"mini"}},[a("el-row",e._l(e.$db.supplier.overview,function(t,i){return 1==t.isbasic?a("el-col",{key:i+"j",attrs:{xs:24,sm:12,md:8,lg:8}},["text"===t.showType?a("el-form-item",{staticClass:"form-list",attrs:{label:t.label,prop:t.key}},[a("el-input",{attrs:{placeholder:"Enter something..."},model:{value:e.parms[t.key],callback:function(a){e.$set(e.parms,t.key,a)},expression:"parms[item.key]"}})],1):e._e(),e._v(" "),"select"===t.showType?a("el-form-item",{staticClass:"form-list",attrs:{label:t.label,prop:t.key}},[a("el-select",{model:{value:e.parms[t.key],callback:function(a){e.$set(e.parms,t.key,a)},expression:"parms[item.key]"}})],1):e._e(),e._v(" "),"dropdown"===t.showType?a("el-form-item",{staticClass:"form-list",attrs:{label:t.label,prop:t.key}},[a("div",{staticClass:"speDropdown"},[a("drop-down",{ref:"dropDown",refInFor:!0,attrs:{list:e.dropData},model:{value:e.parms[t.key],callback:function(a){e.$set(e.parms,t.key,a)},expression:"parms[item.key]"}})],1)]):e._e()],1):e._e()}))],1)],1),e._v(" "),a("div",{staticClass:"body",class:{hide:e.hideBody}},[a("el-form",{ref:"parms",attrs:{model:e.parms,"label-width":"200px",size:"mini"}},[a("el-row",e._l(e.$db.supplier.overview,function(t,i){return t.isbasic?e._e():a("el-col",{key:i+"i",attrs:{xs:24,sm:12,md:8,lg:8}},["text"===t.showType?a("el-form-item",{staticClass:"form-list",attrs:{label:t.label,prop:t.key}},[a("el-input",{attrs:{placeholder:"Enter something..."},model:{value:e.parms[t.key],callback:function(a){e.$set(e.parms,t.key,a)},expression:"parms[item.key]"}})],1):e._e(),e._v(" "),"select"===t.showType?a("el-form-item",{staticClass:"form-list",attrs:{label:t.label,prop:t.key}},[a("el-select",{model:{value:e.parms[t.key],callback:function(a){e.$set(e.parms,t.key,a)},expression:"parms[item.key]"}})],1):e._e(),e._v(" "),"dropdown"===t.showType?a("el-form-item",{staticClass:"form-list",attrs:{label:t.label,prop:t.key}},[a("div",{staticClass:"speDropdown"},[a("drop-down",{ref:"dropDown",refInFor:!0,attrs:{list:e.dropData},model:{value:e.parms[t.key],callback:function(a){e.$set(e.parms,t.key,a)},expression:"parms[item.key]"}})],1)]):e._e()],1)}))],1)],1),e._v(" "),a("div",{staticClass:"btn-group"},[a("el-button",{staticClass:"search",attrs:{type:"primary"},on:{click:e.search}},[e._v(e._s(e.$i.baseText.search))]),e._v(" "),a("el-button",{on:{click:function(t){e.clear("parms")}}},[e._v(e._s(e.$i.baseText.clear))])],1),e._v(" "),a("div",[a("div",{staticClass:"btnline"},[a("el-button",{on:{click:e.createInquiry}},[e._v(e._s(e.$i.baseText.creatInquiry))]),e._v(" "),a("el-button",{attrs:{disabled:!(1==e.selectedData.length)},on:{click:e.createOrder}},[e._v(e._s(e.$i.baseText.creatOrder))]),e._v(" "),a("el-button",{attrs:{disabled:!(e.selectedData.length>1)},on:{click:e.compare}},[e._v(e._s(e.$i.baseText.compare))]),e._v(" "),a("el-button",{attrs:{disabled:!e.selectedData.length>0},on:{click:e.addToBookmark}},[e._v(e._s(e.$i.baseText.addToBookmark))]),e._v(" "),a("el-button",{attrs:{disabled:!e.selectedData.length>0}},[e._v(e._s(e.$i.baseText.downloadSelected))])],1),e._v(" "),a("div")]),e._v(" "),a("v-table",{staticStyle:{marginTop:"10px"},attrs:{height:360,data:e.tabData,buttons:[{label:"detail",type:1}]},on:{action:e.detail,"change-checked":e.checked}})],1)},s=[];i._withStripped=!0;var l={render:i,staticRenderFns:s};t.a=l},lDRv:function(e,t,a){"use strict";(function(e){var i=a("bGai");t.a={name:"SupplierSourcing",components:{dropDown:i.a,VTable:i.b},props:{},data:function(){return{value:1,hideBody:!0,btnInfo:"Show the Advance",parms:{conditions:{},description:"",name:"",pn:1,ps:10,skuCode:"",skuNameEn:"",type:""},dropData:[{id:1,label:"一级 1",children:[{id:4,label:"二级 1-1",children:[{id:9,label:"三级 1-1-1"},{id:10,label:"三级 1-1-2"}]}]},{id:2,label:"一级 2",children:[{id:5,label:"二级 2-1"},{id:6,label:"二级 2-2"}]}],tabData:[],selectedData:[]}},methods:{switchDisplay:function(){this.hideBody=!this.hideBody},clear:function(e){this.$refs[e].resetFields()},search:function(){console.log(this.parms),this.get_data()},createInquiry:function(){this.windowOpen("/negotiation/createInquiry",{selectedData:this.selectedData})},createOrder:function(){this.windowOpen("/order/creat",{selectedData:this.selectedData})},compare:function(){},detail:function(e){this.windowOpen("/supplier/sourcingDetail",{id:e.id.value})},checked:function(t){this.selectedData=t,console.log(t),console.log(e.where(t,{id:4}))},get_data:function(){var e=this;this.$ajax.post(this.$apis.get_listSupplier,this.parms).then(function(t){e.tabData=e.$getDB(e.$db.supplier.overviewtable,t.datas),console.log(t.datas)}).catch(function(e){})},addToBookmark:function(){this.$ajax.post(this.$apis.post_supplier_addbookmark,{ids:[1]}).then(function(e){console.log(e)}).catch(function(e){console.log(e)})}},created:function(){this.get_data(),console.log(this.parms)},watch:{hideBody:function(e){this.btnInfo=e?"Show the Advance":"Hide the Advance"}}}}).call(t,a("u47Y"))},pr1T:function(e,t,a){"use strict";function i(e){o||a("WYsN")}Object.defineProperty(t,"__esModule",{value:!0});var s=a("lDRv"),l=a("az69"),o=!1,r=a("Z0/y"),n=i,c=r(s.a,l.a,!1,n,"data-v-674e9e00",null);c.options.__file="src\\views\\supplier\\sourcing\\sourcing.vue",t.default=c.exports}});