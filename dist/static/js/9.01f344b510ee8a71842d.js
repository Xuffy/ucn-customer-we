webpackJsonp([9],{"2mPI":function(t,e,a){var i=a("RvXE");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);a("FIqI")("0569ad9b",i,!1,{})},"4yZW":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",[a("el-button",{attrs:{type:"primary",plain:"",size:"mini"},on:{click:t.createRemark}},[t._v(t._s(t.$i._product.add))])],1),t._v(" "),a("br"),t._v(" "),a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData,border:""}},[a("el-table-column",{attrs:{prop:"remark",label:t.$i._product.remark,align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"updateName",label:t.$i._product.operator,align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"updateDt",label:t.$i._product.time,align:"center"}}),t._v(" "),a("el-table-column",{attrs:{fixed:"right",label:t.$i._product.action,align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){t.editRemark(e.$index,e.row)}}},[t._v(t._s(t.$i._product.modify))]),t._v(" "),a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){t.deleteRemark(e.$index,e.row)}}},[t._v(t._s(t.$i._product.delete))])]}}])})],1),t._v(" "),a("br"),t._v(" "),a("el-pagination",{attrs:{"current-page":t.currentPage1,"page-sizes":[100,200,300,400],"page-size":100,layout:"total, sizes, prev, pager, next, jumper",total:400},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}}),t._v(" "),a("el-dialog",{attrs:{title:"新增备注",visible:t.addRemarkFormVisible,center:"",width:"500px"},on:{"update:visible":function(e){t.addRemarkFormVisible=e}}},[a("el-form",{attrs:{model:t.parms}},[a("el-form-item",{attrs:{label:"备注:","label-width":t.formLabelWidth}},[a("el-input",{attrs:{type:"textarea",rows:4,placeholder:"请输入内容"},model:{value:t.parms.remark,callback:function(e){t.$set(t.parms,"remark",e)},expression:"parms.remark"}})],1)],1),t._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"primary"},on:{click:t.createRemarkSubmit}},[t._v("提交")]),t._v(" "),a("el-button",{on:{click:function(e){t.addRemarkFormVisible=!1}}},[t._v("取 消")])],1)],1),t._v(" "),a("el-dialog",{attrs:{title:"修改备注",visible:t.editRemarkFormVisible,center:"",width:"500px"},on:{"update:visible":function(e){t.editRemarkFormVisible=e}}},[a("el-form",{attrs:{model:t.parms}},[a("el-form-item",{attrs:{label:"备注:","label-width":t.formLabelWidth}},[a("el-input",{attrs:{type:"textarea",rows:4,placeholder:"请输入内容"},model:{value:t.parms.remark,callback:function(e){t.$set(t.parms,"remark",e)},expression:"parms.remark"}})],1)],1),t._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"primary"},on:{click:t.edit_submit}},[t._v("提交")]),t._v(" "),a("el-button",{on:{click:function(e){t.editRemarkFormVisible=!1}}},[t._v("取 消")])],1)],1)],1)},r=[];i._withStripped=!0;var s={render:i,staticRenderFns:r};e.a=s},CVrf:function(t,e,a){"use strict";function i(t){o||a("eTtd")}var r=a("xGn7"),s=a("GDLU"),o=!1,n=a("Z0/y"),l=i,c=n(r.a,s.a,!1,l,"data-v-47b97daf",null);c.options.__file="src\\views\\supplier\\attachment.vue",e.a=c.exports},GDLU:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"attachment"},[a("div",{staticClass:"attchment"},[a("div",{staticClass:"attchment_item",on:{click:t.download}},[t._m(0)])])])},r=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"attchment_item_content"},[a("i",{staticClass:"el-icon-document"}),t._v(" "),a("p",[t._v("产品介绍")]),t._v(" "),a("i",{staticClass:"el-icon-download"})])}];i._withStripped=!0;var s={render:i,staticRenderFns:r};e.a=s},"HdU/":function(t,e,a){e=t.exports=a("UTlt")(!1),e.push([t.i,".attchment[data-v-47b97daf]{height:400px}.attchment[data-v-47b97daf],.attchment_item[data-v-47b97daf]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start}.attchment_item[data-v-47b97daf]{width:180px;height:60px;-webkit-box-align:center;-ms-flex-align:center;align-items:center;border:1px solid #bebebe;border-radius:3px;margin-left:20px}.attchment_item_content[data-v-47b97daf]{width:180px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:baseline;-ms-flex-align:baseline;align-items:baseline}.attchment_item p[data-v-47b97daf]{font-size:14px;padding-left:5px;padding-right:5px}.attchment_item i[data-v-47b97daf]{font-size:40px}",""])},Mtuk:function(t,e,a){var i=a("sH8E");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);a("FIqI")("0a1f5606",i,!1,{})},NKw6:function(t,e,a){"use strict";function i(t){o||a("Mtuk")}Object.defineProperty(e,"__esModule",{value:!0});var r=a("Nxf+"),s=a("YunD"),o=!1,n=a("Z0/y"),l=i,c=n(r.a,s.a,!1,l,"data-v-a663749e",null);c.options.__file="src\\views\\supplier\\bookmark\\bookmarkDetail.vue",e.default=c.exports},"Nxf+":function(t,e,a){"use strict";var i=a("Yp1e"),r=a("hdVR"),s=a("CVrf"),o=a("bGai");e.a={name:"souringDetail",components:{VTable:o.b,VCompareList:i.a,VRemark:r.a,VAttachment:s.a},data:function(){return{noEdit:!0,id:this.$route.query.id,tabName:"address",basicDate:"",accounts:[],concats:[],address:[],remarkData:[],compareConfig:{showCompareList:!1},compareData:[],showCompareList:!1}},methods:{createInquiry:function(){this.windowOpen("/negotiation/createInquiry",{supplierId:this.id})},createOrder:function(){this.windowOpen("/order/creat",{supplierId:this.id})},addToCompare:function(){this.compareConfig.showCompareList=!0},supplierProducts:function(){this.windowOpen("/product/sourcing",{supplierId:this.id})},addCompare:function(){var t=this;this.showCompareList=!0;var e=this.$localStore.get("compareSupplierList"),a=!1;e||(e=[]),e.forEach(function(e){e.id===t.basicDate.id&&(a=!0)}),a?this.$message({message:"该商品已经添加到列表了",type:"warning"}):(e.push({name:this.basicDate.name,id:this.basicDate.id}),this.compareData=e,this.$localStore.set("compareSupplierList",e))},getCompareList:function(){var t=this.$localStore.get("compareSupplierList");this.compareData=t||[]},goCompare:function(){var t=this.$localStore.get("compareSupplierList"),e="";t.forEach(function(a,i){i===t.length-1?e+=a.id:e+=a.id+","}),this.$windowOpen({url:"supplier/compareDetail/{type}",params:{type:"new",id:e}})},handleClose:function(t){var e=void 0;this.compareData.forEach(function(a,i){a.id===t.id&&(e=i)}),this.compareData.splice(e,1),this.$localStore.set("compareSupplierList",this.compareData)},clearData:function(){this.$localStore.remove("compareSupplierList"),this.compareData=[]},remove:function(){var t=this;this.$ajax.post(this.$apis.post_supplier_deletebookmark,{id:this.id}).then(function(e){console.log(e),t.$message({message:"success",type:"success",onClose:function(){t.$router.push("/supplier/bookmark")}})}).catch(function(t){console.log(t)})},get_data:function(){var t=this;this.$ajax.get(this.$apis.get_supplier_id,{id:this.id}).then(function(e){t.basicDate=e,t.accounts=t.$getDB(t.$db.supplier.detailTable,e.accounts),t.address=t.$getDB(t.$db.supplier.detailTable,e.address),t.concats=t.$getDB(t.$db.supplier.detailTable,e.concats),console.log(e)}).catch(function(t){})}},created:function(){this.get_data()}}},RvXE:function(t,e,a){e=t.exports=a("UTlt")(!1),e.push([t.i,".el-dialog__wrapper .el-dialog__header{border-bottom:1px solid #e9eaec}.el-dialog__wrapper .el-dialog__body{padding:16px}.el-dialog__wrapper .el-form-item--small.el-form-item{margin-bottom:0}.el-dialog__wrapper .el-dialog__footer{padding:12px 18px}",""])},YunD:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"souringDetail"},[a("div",{staticClass:"head"},[a("div",{staticClass:"title"},[a("img",{attrs:{src:t.basicDate.logo}}),t._v(" "),a("span",[t._v(t._s(t.basicDate.name))])]),t._v(" "),a("div",{staticClass:"detail"},[a("el-form",{attrs:{"label-width":"190px"}},[a("el-row",[a("el-row",{staticClass:"right"},t._l(t.$db.supplier.detail,function(e,i){return a("el-col",{key:i,staticClass:"list",attrs:{xs:24,sm:12,md:8,lg:8,xl:8}},[a("el-form-item",{attrs:{"label-width":"260px",prop:e.key,label:e.label+" :"}},[t._v("\n                                       "+t._s(t.basicDate[e.key])+"\n                                    ")])],1)}))],1)],1),t._v(" "),t.noEdit?a("div",{staticClass:"btns"},[a("el-button",{on:{click:t.createInquiry}},[t._v(t._s(t.$i._baseText.createInquiry))]),t._v(" "),a("el-button",{on:{click:t.createOrder}},[t._v(t._s(t.$i._baseText.createOrder))]),t._v(" "),a("el-button",{on:{click:t.addToCompare}},[t._v(t._s(t.$i._baseText.addToCompare))]),t._v(" "),a("el-button",{on:{click:t.supplierProducts}},[t._v(t._s(t.$i._baseText.supplierProducts))]),t._v(" "),a("el-button",{attrs:{type:"danger"},on:{click:t.remove}},[t._v(t._s(t.$i._baseText.remove))])],1):a("div",{staticClass:"btns"},[a("el-button",{attrs:{type:"primary"},on:{click:t.finishEdit}},[t._v(t._s(t.$i._baseText.finish))]),t._v(" "),a("el-button",{attrs:{type:"info"},on:{click:t.cancelEdit}},[t._v(t._s(t.$i._baseText.cancel))])],1)],1)]),t._v(" "),a("div",{staticClass:"body"},[a("el-tabs",{attrs:{type:"card"},model:{value:t.tabName,callback:function(e){t.tabName=e},expression:"tabName"}},[a("el-tab-pane",{attrs:{label:t.$i.address,name:"address"}},[a("v-table",{staticStyle:{marginTop:"10px"},attrs:{data:t.address}})],1),t._v(" "),a("el-tab-pane",{attrs:{label:t.$i.accountInfo,name:"accountInfo"}},[a("v-table",{staticStyle:{marginTop:"10px"},attrs:{data:t.accounts}})],1),t._v(" "),a("el-tab-pane",{attrs:{label:t.$i.contactInfo,name:"contactInfo"}},[a("v-table",{staticStyle:{marginTop:"10px"},attrs:{data:t.concats}})],1),t._v(" "),a("el-tab-pane",{attrs:{label:t.$i.tradeHistory,name:"tradeHistory"}}),t._v(" "),a("el-tab-pane",{attrs:{label:t.$i.remark,name:"remark"}},[a("v-remark",{staticStyle:{marginTop:"10px"},attrs:{tableData:t.remarkData}})],1)],1)],1),t._v(" "),t.showCompareList?a("VCompareList",{attrs:{data:t.compareData},on:{clearData:t.clearData,goCompare:t.goCompare,closeTag:t.handleClose}}):t._e()],1)},r=[];i._withStripped=!0;var s={render:i,staticRenderFns:r};e.a=s},eTtd:function(t,e,a){var i=a("HdU/");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);a("FIqI")("650af5be",i,!1,{})},eq8P:function(t,e,a){e=t.exports=a("UTlt")(!1),e.push([t.i,"",""])},hdVR:function(t,e,a){"use strict";function i(t){o||(a("2mPI"),a("qgOP"))}var r=a("wZwn"),s=a("4yZW"),o=!1,n=a("Z0/y"),l=i,c=n(r.a,s.a,!1,l,"data-v-9be5098c",null);c.options.__file="src\\views\\product\\addlineTable.vue",e.a=c.exports},qgOP:function(t,e,a){var i=a("eq8P");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);a("FIqI")("5c0baa96",i,!1,{})},sH8E:function(t,e,a){e=t.exports=a("UTlt")(!1),e.push([t.i,".title img[data-v-a663749e]{max-width:100px;max-height:100px;margin-left:30px}.title[data-v-a663749e]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin-top:20px}.title span[data-v-a663749e]{margin-left:10px}.detail[data-v-a663749e]{padding-top:20px}.souringDetail[data-v-a663749e]{background-color:#f4f4f4}.souringDetail .head[data-v-a663749e]{background-color:#fff;padding:0 20px}.souringDetail .head .title[data-v-a663749e]{position:relative;height:40px;line-height:40px;font-weight:700;font-size:18px;color:#666}.souringDetail .head .title .title-btn[data-v-a663749e]{float:right}.souringDetail .head .detail[data-v-a663749e]{margin-top:8px}.souringDetail .head .detail .carousel-img[data-v-a663749e]{height:170px}.souringDetail .head .detail .carousel-img img[data-v-a663749e]{width:100%;height:100%}.souringDetail .head .detail .list[data-v-a663749e]{padding-left:30px;font-size:14px;line-height:2.5}.souringDetail .head .detail .btns[data-v-a663749e]{text-align:center;padding:15px 0}.souringDetail .head .detail .btns>Button[data-v-a663749e]{margin-right:10px}.souringDetail .body[data-v-a663749e]{margin-top:10px;margin-bottom:20px;background-color:#fff}.souringDetail .body .list[data-v-a663749e]{line-height:30px;font-size:13px}.speForm .el-form-item--small.el-form-item[data-v-a663749e]{margin-bottom:0}.speForm .el-row .list .el-input[data-v-a663749e]{width:80%}",""])},wZwn:function(t,e,a){"use strict";e.a={name:"addline-table",props:{add_url:{type:String,default:"post_add_supplier_remark"},delete_url:{type:String,default:"post_supplier_delete_remark"},updata_url:{type:String,default:"get_update_supplier_remark"},get_url:{type:String,default:"post_supplier_list_remark"}},data:function(){return{data:[{remark:"只有充钱你才能变得更强",submiter:"麻花藤",time:"2012-02-02"},{remark:"我从不卖假货",submiter:"强东",time:"2013-03-03"}],value:"",currentPage1:1,tableData:[],parms:{entryDt:"",entryId:"",entryName:"",id:"",remark:"",supplierId:this.$route.query.id},addRemarkFormVisible:!1,checkRemarkFormVisible:!1,editRemarkFormVisible:!1,formLabelWidth:"50px",id:this.$route.query.id}},methods:{handleSizeChange:function(t){console.log("每页 "+t+" 条")},handleCurrentChange:function(t){console.log("当前页: "+t)},createRemark:function(){this.addRemarkFormVisible=!0},createRemarkSubmit:function(){var t=this;this.$ajax.post(this.$apis[this.add_url],this.parms).then(function(e){t.get_remark()}).catch(function(t){console.log(t)}),this.addRemarkFormVisible=!1},checkRemark:function(){this.checkRemarkFormVisible=!0},editRemark:function(t,e){this.parms.id=e.id,this.parms.remark="",this.editRemarkFormVisible=!0},edit_submit:function(){var t=this;this.$ajax.post(this.$apis[this.updata_url],this.parms).then(function(e){t.get_remark()}).catch(function(t){console.log(t)}),this.editRemarkFormVisible=!1},deleteRemark:function(t,e){var a=this;this.$confirm("确定删除该备注?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){a.$ajax.post(a.$apis[a.delete_url],{id:e.id}).then(function(t){a.get_remark(),a.$message({type:"success",message:"删除成功!"})}).catch(function(t){console.log(t)})}).catch(function(){})},get_remark:function(){var t=this;this.$ajax.post(this.$apis[this.get_url],{id:this.id,pn:1,ps:50,sorts:[{orderBy:"",orderType:""}]}).then(function(e){t.tableData=e.datas}).catch(function(t){console.log(t)})},add_Remark:function(){},delete_Remark:function(){}},created:function(){this.get_remark()}}},xGn7:function(t,e,a){"use strict";e.a={name:"attachment",props:{list:{type:Array,default:function(){return[]}}},data:function(){return{}},components:{},created:function(){},methods:{download:function(){window.location.href="url"}}}}});