webpackJsonp([25],{"45j9":function(e,t,a){var i=a("hlqI");"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);a("FIqI")("5cd2f2ca",i,!1,{})},"4h6+":function(e,t,a){"use strict";var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"draftOverview"},[a("h3",{staticClass:"hd"},[e._v("Draft Overview")]),e._v(" "),a("div",{staticClass:"fn"},[a("div",{staticClass:"btn-wrap"},[a("el-button",{on:{click:e.download}},[e._v(e._s(e.$i._baseText.download)+"("+e._s(e.selectedDate.length)+")")]),e._v(" "),a("el-button",{on:{click:e.send}},[e._v(e._s(e.$i._baseText.send))]),e._v(" "),a("el-button",{attrs:{type:"danger",disabled:!(e.selectedDate.length>0)},on:{click:e.deleteOrder}},[e._v(e._s(e.$i._baseText.delete))])],1),e._v(" "),a("div",{staticClass:"select-wrap"},[a("selectSearch",{attrs:{options:e.options},on:{selectChange:e.selectChange,inputChange:e.inputEnter}})],1)]),e._v(" "),a("div",{staticStyle:{display:"flex","justify-content":"flex-end","margin-right":"20px"}},[a("div",{staticClass:"viewBy"},[a("span",[e._v("View by ")]),e._v(" "),a("el-radio-group",{attrs:{size:"mini"},on:{change:e.changeView},model:{value:e.params.view,callback:function(t){e.$set(e.params,"view",t)},expression:"params.view"}},[a("el-radio-button",{attrs:{label:"1"}},[e._v(e._s(e.$i._baseText.order))]),e._v(" "),a("el-radio-button",{attrs:{label:"2"}},[e._v(e._s(e.$i._baseText.SKU))])],1)],1)]),e._v(" "),a("v-table",{ref:"vtable",staticStyle:{marginTop:"10px"},attrs:{data:e.tabData,buttons:[{label:"detail",type:1}],loading:e.loading,pageTotal:e.pageTotal},on:{action:e.onAction,"change-checked":e.checked,"page-size-change(size)":e.pagesizechange,"page-change(page)":e.pagechange}})],1)},s=[];i._withStripped=!0;var d={render:i,staticRenderFns:s};t.a=d},L6wl:function(e,t,a){t=e.exports=a("UTlt")(!1),t.push([e.i,"[data-v-2d196bb0] .el-input-group__append{padding:0!important}",""])},Sv8P:function(e,t,a){var i=a("L6wl");"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);a("FIqI")("3bd1a2f4",i,!1,{})},hlqI:function(e,t,a){t=e.exports=a("UTlt")(!1),t.push([e.i,".draftOverview .hd[data-v-2d196bb0]{height:50px;line-height:50px;border-bottom:1px solid #ccc;font-size:18px;color:#666}.draftOverview .status[data-v-2d196bb0]{height:60px;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;padding:0 15px;-webkit-box-sizing:border-box;box-sizing:border-box}.draftOverview .status .btn-wrap[data-v-2d196bb0],.draftOverview .status[data-v-2d196bb0]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.draftOverview .status .btn-wrap span[data-v-2d196bb0]{font-size:14px}.draftOverview .status .btn-wrap button[data-v-2d196bb0]{padding:2px 5px;cursor:pointer;border:1px solid #108ee9;background-color:#fff;margin-left:10px;border-radius:5px;-webkit-transition:all .5s ease;transition:all .5s ease}.draftOverview .status .btn-wrap button.active[data-v-2d196bb0],.draftOverview .status .btn-wrap button[data-v-2d196bb0]:hover{background-color:#108ee9;color:#fff}.draftOverview .status .select-wrap[data-v-2d196bb0]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.draftOverview .status .select-wrap .select[data-v-2d196bb0]{width:110px;margin-right:5px}.draftOverview .fn[data-v-2d196bb0]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;padding:10px 15px;-webkit-box-sizing:border-box;box-sizing:border-box}.draftOverview .fn .viewBy[data-v-2d196bb0]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.draftOverview .fn .viewBy span[data-v-2d196bb0]{font-size:14px;color:#666}.draftOverview .fn .viewBy .set[data-v-2d196bb0]{cursor:pointer;padding-left:40px}.draftOverview .fn .viewBy .set i[data-v-2d196bb0]{font-size:25px}.draftOverview .fn .viewBy .set .speDropdown[data-v-2d196bb0]{display:none}.draftOverview .fn .viewBy .set .speDropdown[data-v-2d196bb0],.draftOverview .fn .viewBy .set .speDropdownshow[data-v-2d196bb0]{position:absolute;right:40px;background-color:#fff;z-index:2000}",""])},jxBA:function(e,t,a){"use strict";var i=a("bGai");t.a={name:"draftOverview",components:{dropDown:i.a,VTable:i.b,selectSearch:i.c},data:function(){return{value:"",keyWord:"",disabled:!1,prodisabled:!0,tabData:[],loading:!1,pageTotal:1,rowspan:1,options:[{id:"1",label:"Order No"},{id:"2",label:"Sku Code"}],keyType:"",params:{orderNo:"",skuCode:"",view:1,ps:10,pn:1},selectedDate:[],selectedNumber:[]}},methods:{onAction:function(e,t){this.$windowOpen({url:"/order/detail",params:{orderId:e.id.value}})},pagesizechange:function(){},pagechange:function(){},creat_order:function(){this.$windowOpen("/order/detail",{selectedDate:this.selectedDate})},selectChange:function(e){this.keyType=e},checked:function(e){var t=this;this.selectedDate=e,this.selectedDate.forEach(function(e){t.selectedNumber.push(e.id.value)})},changeView:function(){1==this.params.view?this.getdata(this.$db.order.overview):this.getdata(this.$db.order.overviewBysku)},inputEnter:function(e){return e.keyType?e.key?("1"==e.keyType?(this.params.orderNo=e.key,1==this.params.view?this.getdata(this.$db.order.overview):this.getdata(this.$db.order.overviewBysku)):(this.params.skuCode=e.key,1==this.params.view?this.getdata(this.$db.order.overview):this.getdata(this.$db.order.overviewBysku)),void this.getdata()):this.$message("搜索内容不能为空"):this.$message("请选中搜索类型")},download:function(){this.$ajax.post(this.$apis.download_order,this.selectedNumber).then(function(e){console.log(e)}).catch(function(e){console.log(e)})},send:function(){this.$ajax.post(this.$apis.send_order,{ids:this.selectedNumber}).then(function(e){console.log(e)}).catch(function(e){console.log(e)})},deleteOrder:function(){var e=this;this.$ajax.post(this.$apis.delete_order,{ids:this.selectedNumber}).then(function(t){e.params.orderNo=val.key,1==e.params.view?e.getdata(e.$db.order.overview):e.getdata(e.$db.order.overviewBysku)}).catch(function(e){console.log(e)})},getdata:function(e){var t=this;this.loading=!0,this.$ajax.post(this.$apis.get_draft_orderlist,this.params).then(function(a){t.loading=!1,t.tabData=t.$getDB(e,a.datas)}).catch(function(e){t.loading=!1})}},computed:{},created:function(){this.getdata(this.$db.order.overview)},mounted:function(){this.loading=!1},updated:function(){},watch:{params:{handler:function(e,t){1==e.view&&5==e.status?this.disabled=!1:3==e.status?(this.prodisabled=!1,this.disabled=!0):(this.disabled=!0,this.prodisabled=!0)},deep:!0}}}},ucD0:function(e,t,a){"use strict";function i(e){n||(a("Sv8P"),a("45j9"))}Object.defineProperty(t,"__esModule",{value:!0});var s=a("jxBA"),d=a("4h6+"),n=!1,o=a("Z0/y"),r=i,l=o(s.a,d.a,!1,r,"data-v-2d196bb0",null);l.options.__file="src\\views\\order\\draftOverview.vue",t.default=l.exports}});