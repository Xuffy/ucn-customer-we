webpackJsonp([15],{"1VbF":function(t,e,a){"use strict";var r=a("QGvi"),o=a("hdVR");e.a={name:"detail",components:{addTable:o.a,VTable:r.a},data:function(){return{value1:0,tabName:"Basic Info",labelPosition:"left",productForm:{id:"",pic:"thisIsAPicture",status:0,nameEn:"",barcode:"",nameCn:"",descEn:"",descCn:"",descCustomer:"",nameCustomer:"",customerSkuCode:"",supplierCode:"",supplierName:"",code:"",unit:"2",formation:"",materialEn:"",materialCn:"",colourEn:"",colourCn:"",minOrderQty:1,deliveryDates:1,design:"",noneSellCountry:1,applicableAge:1,expireDates:1,expireUnit:1,comments:"",readilyAvailable:1,availableQty:1,mainSaleCountry:1,mainSaleArea:"",productionDates:1,qualityStander:"",yearListed:"2018-02-23",useDisplayBox:1,displayBoxQty:0,otherPackInfoCn:"",otherPackInfoEn:"",adjustPackage:2,lengthWidthHeight:"",recycle:2,categoryId:"",rateValueAddedTax:1,taxRefundRate:1,customsCode:"",customsNameCn:"",customsNameEn:"",tradeMarkCn:"",tradeMarkEn:"",commodityInspectionCn:"",commodityInspectionEn:"",declareElement:"",origin:"",inspectQuarantineCategory:"",brand:"",brandRemark:"",brandRelated:"",certificat:"",gp20SkuQty:0,gp40SkuQty:0,hq40SkuQty:0,tryDimension:1,skuQtyPerTray:0,specialTransportRequire:"",inventoryCostMethod:"",warehourceDefault:"",inventory:0,safeInventory:0,minInventory:0,unitWeight:1,unitLength:1,unitVolume:1,length:0,width:0,height:0,netWeight:0,volume:0,methodPkgCn:"",methodPkgEn:"",innerCartonUnit:"",innerCartonQty:0,innerCartonLength:0,innerCartonWidth:0,innerCartonHeight:0,innerCartonWeightNet:0,innerCartonRoughWeight:0,innerCartonVolume:0,innerCartonDesc:"",innerCartonMethodCn:"",innerCartonMethodEn:"",outerCartonUnit:"",outerCartonDesc:"",innerCartonOuterNum:0,outerCartonQty:0,outerCartonLength:0,outerCartonWidth:0,outerCartonHeight:0,outerCartonNetWeight:0,outerCartonRoughWeight:0,outerCartonVolume:0,outerCartonMethodCn:"",outerCartonMethodEn:"",oem:1,logisticId:1,version:1,pkgId:1,price:[{fobCurrency:1,fobPrice:1,fobPort:"",exwPrice:1,exwCurrency:1,otherIncoterm:1,otherIncotermPrice:1,otherIncotermArea:"",otherIncotermCurrency:1,status:1},{fobCurrency:1,fobPrice:1,fobPort:"",exwPrice:1,exwCurrency:1,otherIncoterm:1,otherIncotermPrice:1,otherIncotermArea:"",otherIncotermCurrency:1,status:2}]},fobPort:"",fobPrice:"",tableData:[],btnInfo:this.$i.product.setUp,disabledDeleteBtn:!1,disabledSetupBtn:!1,currentPage1:1,compareConfig:{showCompareList:!1}}},methods:{handleSizeChange:function(t){console.log("每页 "+t+" 条")},handleCurrentChange:function(t){console.log("当前页: "+t)},handleClick:function(){},getGoodsData:function(){var t=this,e=this.$loading({target:".detail",lock:!0,text:"Loading",background:"rgba(255, 255, 255, .8)"});this.$ajax.get(this.$apis.get_productDetail,{id:this.$route.query.id}).then(function(a){t.productForm=a,t.productForm.price.forEach(function(e){2===e.status&&(t.fobPort=e.fobPort,t.fobPrice=e.fobPrice)}),1===t.productForm.status?t.btnInfo=t.$i.product.setDown:0===t.productForm.status&&(t.btnInfo=t.$i.product.setUp),t.tableData=t.$getDB(t.$db.product.detailPriceTable,t.productForm.price),e.close()}).catch(function(t){console.log(t)})},editProduct:function(){this.windowOpen("/sellerProduct/addNewProduct",{id:this.productForm.id,isEdit:!0})},setUpDown:function(){var t=this,e=void 0,a=void 0,r=void 0;1===this.productForm.status?(e="确定下架该商品?",r="下架成功",a=0):0===this.productForm.status&&(e="确定上架该商品?",r="上架成功",a=1),this.$confirm(e,"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){t.disabledSetupBtn=!0,t.$ajax.post(t.$apis.change_productStatus+"?status="+a,{id:t.productForm.id}).then(function(e){t.disabledSetupBtn=!1,t.$message({message:r,type:"success"}),1===a?(t.$set(t.productForm,"status",1),t.btnInfo=t.$i.product.setDown):0===a&&(t.$set(t.productForm,"status",0),t.btnInfo=t.$i.product.setUp)}).catch(function(e){t.disabledSetupBtn=!1})}).catch(function(){})},addNewProduct:function(){this.windowOpen("/sellerProduct/addNewProduct")},deleteProduct:function(){var t=this;this.$confirm("是否确认删除该商品?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){t.disabledDeleteBtn=!0,t.$ajax.post(t.$apis.delete_product,{id:t.productForm.id}).then(function(e){t.$message({type:"success",message:"删除成功!"}),t.$router.push("/sellerProduct/overview"),t.disabledDeleteBtn=!1}).catch(function(e){t.disabledDeleteBtn=!1})}).catch(function(){})},filterSelection:function(t){return!1}},mounted:function(){this.getGoodsData()}}},"2mPI":function(t,e,a){var r=a("RvXE");"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);a("FIqI")("0569ad9b",r,!1,{})},"4yZW":function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",[a("el-button",{attrs:{type:"primary",plain:"",size:"mini"},on:{click:t.createRemark}},[t._v(t._s(t.$i._product.add))])],1),t._v(" "),a("br"),t._v(" "),a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData,border:""}},[a("el-table-column",{attrs:{prop:"remark",label:t.$i._product.remark,align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"updateName",label:t.$i._product.operator,align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"updateDt",label:t.$i._product.time,align:"center"}}),t._v(" "),a("el-table-column",{attrs:{fixed:"right",label:t.$i._product.action,align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){t.editRemark(e.$index,e.row)}}},[t._v(t._s(t.$i._product.modify))]),t._v(" "),a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){t.deleteRemark(e.$index,e.row)}}},[t._v(t._s(t.$i._product.delete))])]}}])})],1),t._v(" "),a("br"),t._v(" "),a("el-pagination",{attrs:{"current-page":t.currentPage1,"page-sizes":[100,200,300,400],"page-size":100,layout:"total, sizes, prev, pager, next, jumper",total:400},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}}),t._v(" "),a("el-dialog",{attrs:{title:"新增备注",visible:t.addRemarkFormVisible,center:"",width:"500px"},on:{"update:visible":function(e){t.addRemarkFormVisible=e}}},[a("el-form",{attrs:{model:t.parms}},[a("el-form-item",{attrs:{label:"备注:","label-width":t.formLabelWidth}},[a("el-input",{attrs:{type:"textarea",rows:4,placeholder:"请输入内容"},model:{value:t.parms.remark,callback:function(e){t.$set(t.parms,"remark",e)},expression:"parms.remark"}})],1)],1),t._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"primary"},on:{click:t.createRemarkSubmit}},[t._v("提交")]),t._v(" "),a("el-button",{on:{click:function(e){t.addRemarkFormVisible=!1}}},[t._v("取 消")])],1)],1),t._v(" "),a("el-dialog",{attrs:{title:"修改备注",visible:t.editRemarkFormVisible,center:"",width:"500px"},on:{"update:visible":function(e){t.editRemarkFormVisible=e}}},[a("el-form",{attrs:{model:t.parms}},[a("el-form-item",{attrs:{label:"备注:","label-width":t.formLabelWidth}},[a("el-input",{attrs:{type:"textarea",rows:4,placeholder:"请输入内容"},model:{value:t.parms.remark,callback:function(e){t.$set(t.parms,"remark",e)},expression:"parms.remark"}})],1)],1),t._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"primary"},on:{click:t.edit_submit}},[t._v("提交")]),t._v(" "),a("el-button",{on:{click:function(e){t.editRemarkFormVisible=!1}}},[t._v("取 消")])],1)],1)],1)},o=[];r._withStripped=!0;var i={render:r,staticRenderFns:o};e.a=i},FDNd:function(t,e,a){"use strict";function r(t){n||a("xYj1")}Object.defineProperty(e,"__esModule",{value:!0});var o=a("1VbF"),i=a("M6yB"),n=!1,l=a("Z0/y"),s=r,c=l(o.a,i.a,!1,s,"data-v-8097231e",null);c.options.__file="src\\views\\sellerProduct\\detail.vue",e.default=c.exports},M6yB:function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"Details"},[r("div",{staticClass:"head"},[r("div",{staticClass:"title"},[t._v("\n            "+t._s(t.productForm.nameCn)+"   (采购商显示英文，供应商显示中文)\n        ")]),t._v(" "),r("div",{staticClass:"detail"},[r("el-row",[r("el-col",{attrs:{span:6}},[r("el-carousel",{staticClass:"banner",attrs:{autoplay:!1,"indicator-position":"none",arrow:"always",trigger:"click",height:"150px"}},t._l(3,function(t){return r("el-carousel-item",{key:t},[r("img",{staticStyle:{width:"100%"},attrs:{src:a("qAtO"),alt:""}})])}))],1),t._v(" "),r("el-col",{attrs:{span:18}},[r("el-form",{ref:"sourcingDetail",attrs:{modal:t.productForm,"label-width":"190px"}},[r("el-row",t._l(t.$db.product.detailTop,function(e){return r("el-col",{key:e.key,staticClass:"list",attrs:{xs:24,sm:e.fullLine?24:12,md:e.fullLine?24:12,lg:e.fullLine?24:12,xl:e.fullLine?24:12}},[r("el-form-item",{attrs:{prop:e.key,label:e.label+" :"}},["incoterm"===e.key?r("span",[t._v("\n                                        FOB\n                                    ")]):r("span",["incotermArea"===e.key?r("span",[t._v("\n                                            "+t._s(t.fobPort)+"\n                                        ")]):t._e(),t._v(" "),"incotermPrice"===e.key?r("span",[t._v("\n                                            "+t._s(t.fobPrice)+"\n                                        ")]):t._e(),t._v(" "),"status"===e.key?r("span",[t._v("\n                                            "+t._s(0===t.productForm[e.key]?"下架":"上架")+"\n                                        ")]):r("span",[t._v("\n                                            "+t._s(t.productForm[e.key])+"\n                                        ")])])])],1)}))],1)],1)],1),t._v(" "),r("div",{staticClass:"btns"},[r("el-button",{on:{click:t.editProduct}},[t._v(t._s(t.$i.product.edit))]),t._v(" "),r("el-button",{attrs:{loading:t.disabledSetupBtn},on:{click:t.setUpDown}},[t._v(t._s(t.btnInfo))]),t._v(" "),r("el-button",{on:{click:t.addNewProduct}},[t._v(t._s(t.$i.product.addNewProduct))]),t._v(" "),r("el-button",{attrs:{loading:t.disabledDeleteBtn,type:"danger"},on:{click:t.deleteProduct}},[t._v(t._s(t.$i.product.delete))])],1)],1)]),t._v(" "),r("div",{staticClass:"body"},[r("el-tabs",{attrs:{type:"border-card"},on:{"tab-click":t.handleClick},model:{value:t.tabName,callback:function(e){t.tabName=e},expression:"tabName"}},[r("el-tab-pane",{attrs:{label:t.$i.product.basicInformation,name:"Basic Info"}},[r("el-form",{staticClass:"speForm",attrs:{"label-width":"200px","label-position":t.labelPosition}},[r("el-row",t._l(t.$db.product.detailTab,function(e){return"basicInfo"===e.belongTab?r("el-col",{key:e.key,staticClass:"list",attrs:{xs:24,sm:24,md:e.fullLine?24:12,lg:e.fullLine?24:12,xl:e.fullLine?24:12}},[r("el-form-item",{attrs:{label:e.label+" :"}},["status"===e.key?r("span",[t._v("\n                                    "+t._s(1===t.productForm[e.key]?"上架":"下架")+"\n                                ")]):r("span",[t._v("\n                                    "+t._s(t.productForm[e.key])+"\n                                ")])])],1):t._e()}))],1)],1),t._v(" "),r("el-tab-pane",{attrs:{label:t.$i.product.customerInfo,name:"Customer Info"}},[r("el-form",{staticClass:"speForm",attrs:{"label-width":"290px","label-position":t.labelPosition}},[r("el-row",t._l(t.$db.product.detailTab,function(e){return"customerInfo"===e.belongTab?r("el-col",{key:e.key,staticClass:"list",attrs:{xs:24,sm:24,md:e.fullLine?24:12,lg:e.fullLine?24:12,xl:e.fullLine?24:12}},[r("el-form-item",{attrs:{label:e.label+":"}},[t._v("\n                                "+t._s(t.productForm[e.key])+"\n                            ")])],1):t._e()}))],1)],1),t._v(" "),r("el-tab-pane",{attrs:{label:t.$i.product.priceInfo,name:"Price Info"}},[r("v-table",{staticClass:"tabVtable",attrs:{selection:!1,data:t.tableData}})],1),t._v(" "),r("el-tab-pane",{attrs:{label:t.$i.product.packingInfo,name:"Packing Info"}},[r("el-form",{staticClass:"speForm",attrs:{"label-width":"300px","label-position":t.labelPosition}},[r("el-row",t._l(t.$db.product.detailTab,function(e){return"packingInfo"===e.belongTab?r("el-col",{key:e.key,staticClass:"list",attrs:{xs:24,sm:24,md:e.fullLine?24:12,lg:e.fullLine?24:12,xl:e.fullLine?24:12}},[r("el-form-item",{attrs:{label:e.label+":"}},[t._v("\n                                "+t._s(t.productForm[e.key])+"\n                            ")])],1):t._e()}))],1)],1),t._v(" "),r("el-tab-pane",{attrs:{label:t.$i.product.logisticInfo,name:"Logistic"}},[r("el-form",{staticClass:"speForm",attrs:{"label-width":"260px","label-position":t.labelPosition}},[r("el-row",t._l(t.$db.product.detailTab,function(e){return"logisticInfo"===e.belongTab?r("el-col",{key:e.key,staticClass:"list",attrs:{xs:24,sm:24,md:e.fullLine?24:12,lg:e.fullLine?24:12,xl:e.fullLine?24:12}},[r("el-form-item",{attrs:{label:e.label+":"}},[t._v("\n                                "+t._s(t.productForm[e.key])+"\n                            ")])],1):t._e()}))],1)],1),t._v(" "),r("el-tab-pane",{attrs:{label:t.$i.product.otherInfo,name:"Other Info"}},[r("el-form",{staticClass:"speForm",attrs:{"label-width":"250px","label-position":t.labelPosition}},[r("el-row",t._l(t.$db.product.detailTab,function(e){return"otherInfo"===e.belongTab?r("el-col",{key:e.key,staticClass:"list",attrs:{xs:24,sm:24,md:e.fullLine?24:12,lg:e.fullLine?24:12,xl:e.fullLine?24:12}},[r("el-form-item",{attrs:{label:e.label+":"}},[t._v("\n                                "+t._s(t.productForm[e.key])+"\n                            ")])],1):t._e()}))],1)],1),t._v(" "),r("el-tab-pane",{attrs:{label:t.$i.product.tradeHistory,name:"History"}},[r("span",{staticStyle:{color:"red"}},[t._v("暂时接口还没做")])]),t._v(" "),r("el-tab-pane",{attrs:{label:t.$i.product.attachment,name:"Attachment"}})],1)],1)])},o=[];r._withStripped=!0;var i={render:r,staticRenderFns:o};e.a=i},"Nz+y":function(t,e,a){e=t.exports=a("UTlt")(!1),e.push([t.i,"[data-v-8097231e] .el-form-item__content{word-wrap:break-word}.Details[data-v-8097231e]{background-color:#f4f4f4}.Details .head[data-v-8097231e]{background-color:#fff;padding:0 20px}.Details .head .title[data-v-8097231e]{position:relative;height:40px;line-height:40px;font-weight:700;font-size:18px;color:#666}.Details .head .title .btn[data-v-8097231e]{position:absolute;right:10px;top:4px}.Details .head .detail[data-v-8097231e]{margin-top:8px}.Details .head .detail .carousel-img[data-v-8097231e]{height:170px}.Details .head .detail .carousel-img img[data-v-8097231e]{width:100%;height:100%}.Details .head .detail .list[data-v-8097231e] .el-form-item.el-form-item--small{margin-bottom:6px}.Details .head .detail .btns[data-v-8097231e]{text-align:center;padding:15px 0}.Details .head .detail .btns>Button[data-v-8097231e]{margin-right:10px}.Details .body[data-v-8097231e]{margin-top:10px;margin-bottom:35px;background-color:#fff}.Details .body .list[data-v-8097231e]{line-height:35px;font-size:13px;height:35px}.speForm .el-form-item--small.el-form-item[data-v-8097231e]{margin-bottom:0}.speForm .el-row .list .el-input[data-v-8097231e]{width:80%}",""])},RvXE:function(t,e,a){e=t.exports=a("UTlt")(!1),e.push([t.i,".el-dialog__wrapper .el-dialog__header{border-bottom:1px solid #e9eaec}.el-dialog__wrapper .el-dialog__body{padding:16px}.el-dialog__wrapper .el-form-item--small.el-form-item{margin-bottom:0}.el-dialog__wrapper .el-dialog__footer{padding:12px 18px}",""])},eq8P:function(t,e,a){e=t.exports=a("UTlt")(!1),e.push([t.i,"",""])},hdVR:function(t,e,a){"use strict";function r(t){n||(a("2mPI"),a("qgOP"))}var o=a("wZwn"),i=a("4yZW"),n=!1,l=a("Z0/y"),s=r,c=l(o.a,i.a,!1,s,"data-v-9be5098c",null);c.options.__file="src\\views\\product\\addlineTable.vue",e.a=c.exports},qgOP:function(t,e,a){var r=a("eq8P");"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);a("FIqI")("5c0baa96",r,!1,{})},wZwn:function(t,e,a){"use strict";e.a={name:"addline-table",props:{add_url:{type:String,default:"post_add_supplier_remark"},delete_url:{type:String,default:"post_supplier_delete_remark"},updata_url:{type:String,default:"get_update_supplier_remark"},get_url:{type:String,default:"post_supplier_list_remark"}},data:function(){return{data:[{remark:"只有充钱你才能变得更强",submiter:"麻花藤",time:"2012-02-02"},{remark:"我从不卖假货",submiter:"强东",time:"2013-03-03"}],value:"",currentPage1:1,tableData:[],parms:{entryDt:"",entryId:"",entryName:"",id:"",remark:"",supplierId:this.$route.query.id},addRemarkFormVisible:!1,checkRemarkFormVisible:!1,editRemarkFormVisible:!1,formLabelWidth:"50px",id:this.$route.query.id}},methods:{handleSizeChange:function(t){console.log("每页 "+t+" 条")},handleCurrentChange:function(t){console.log("当前页: "+t)},createRemark:function(){this.addRemarkFormVisible=!0},createRemarkSubmit:function(){var t=this;this.$ajax.post(this.$apis[this.add_url],this.parms).then(function(e){t.get_remark()}).catch(function(t){console.log(t)}),this.addRemarkFormVisible=!1},checkRemark:function(){this.checkRemarkFormVisible=!0},editRemark:function(t,e){this.parms.id=e.id,this.parms.remark="",this.editRemarkFormVisible=!0},edit_submit:function(){var t=this;this.$ajax.post(this.$apis[this.updata_url],this.parms).then(function(e){t.get_remark()}).catch(function(t){console.log(t)}),this.editRemarkFormVisible=!1},deleteRemark:function(t,e){var a=this;this.$confirm("确定删除该备注?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){a.$ajax.post(a.$apis[a.delete_url],{id:e.id}).then(function(t){a.get_remark(),a.$message({type:"success",message:"删除成功!"})}).catch(function(t){console.log(t)})}).catch(function(){})},get_remark:function(){var t=this;this.$ajax.post(this.$apis[this.get_url],{id:this.id,pn:1,ps:50,sorts:[{orderBy:"",orderType:""}]}).then(function(e){t.tableData=e.datas}).catch(function(t){console.log(t)})},add_Remark:function(){},delete_Remark:function(){}},created:function(){this.get_remark()}}},xYj1:function(t,e,a){var r=a("Nz+y");"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);a("FIqI")("5017dbd5",r,!1,{})}});