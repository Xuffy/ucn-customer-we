webpackJsonp([13],{"4sqM":function(e,t,a){t=e.exports=a("UTlt")(!1),t.push([e.i,".manually-add[data-v-409a1780]{position:relative}.number[data-v-409a1780]{min-height:51px}.number[data-v-409a1780] .el-input-number--mini,.select[data-v-409a1780] .el-select{width:80%}.title[data-v-409a1780]{font-weight:700;font-size:18px;height:32px;line-height:32px;color:#666;margin-top:10px}.addPic[data-v-409a1780]{height:50px;line-height:50px}.addPic>div[data-v-409a1780]{float:left;height:50px;line-height:50px}.addPic .imgGroup[data-v-409a1780]{margin-left:10px}.addPic .btns[data-v-409a1780]{margin-left:20px}.speForm .el-row .list .el-input[data-v-409a1780]{width:80%}.tableList[data-v-409a1780] .el-form-item__content{margin-left:0!important}.speInputNumber[data-v-409a1780],.speSelect[data-v-409a1780],.speTextarea[data-v-409a1780]{width:80%}.speNum[data-v-409a1780]{width:60px}.speIcon[data-v-409a1780]{display:inline-block;height:28px;line-height:28px}.dropdown[data-v-409a1780]{height:32px;width:80%}.speNumbberInput[data-v-409a1780]{width:80%}.footBtn[data-v-409a1780]{border-top:1px solid #e0e0e0;height:40px;line-height:40px;background-color:#fff;position:-webkit-sticky;position:sticky;left:0;bottom:0;width:100%;text-align:center}",""])},"Fpg/":function(e,t,a){var o=a("xcsb");"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);a("FIqI")("5c98c93e",o,!1,{})},HcO6:function(e,t,a){"use strict";var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticStyle:{display:"inline-block"}},e._l(e.data,function(t,o){return a("div",{staticClass:"img-handler"},[a("img",{attrs:{src:t,alt:""}}),e._v(" "),a("i",{staticClass:"el-icon-circle-close-outline",on:{click:function(a){e.deletePic(t,o)}}})])}))},l=[];o._withStripped=!0;var r={render:o,staticRenderFns:l};t.a=r},Q8Hp:function(e,t,a){var o=a("4sqM");"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);a("FIqI")("47806af4",o,!1,{})},WEEb:function(e,t,a){"use strict";function o(e){i||a("Fpg/")}var l=a("cDNW"),r=a("HcO6"),i=!1,s=a("Z0/y"),n=o,c=s(l.a,r.a,!1,n,"data-v-68bceffc",null);c.options.__file="src\\views\\product\\bookmark\\imgHandler.vue",t.a=c.exports},"a++N":function(e,t,a){"use strict";function o(e){i||a("Q8Hp")}Object.defineProperty(t,"__esModule",{value:!0});var l=a("zeZi"),r=a("csmN"),i=!1,s=a("Z0/y"),n=o,c=s(l.a,r.a,!1,n,"data-v-409a1780",null);c.options.__file="src\\views\\sellerProduct\\addNewProduct.vue",t.default=c.exports},cDNW:function(e,t,a){"use strict";t.a={name:"img-handler",props:{data:{type:Array,default:[]}},data:function(){return{}},methods:{deletePic:function(e,t){this.data.splice(t,1)}}}},csmN:function(e,t,a){"use strict";var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"add-product"},[a("div",{staticClass:"title"},[e._v(e._s(e.$i.product.basicInformation))]),e._v(" "),a("div",{staticClass:"addPic"},[a("div",{staticClass:"name"},[e._v("\n            Pic:\n        ")]),e._v(" "),a("div",{staticClass:"imgGroup"},[a("img-handler",{attrs:{data:e.imgGroup}})],1),e._v(" "),a("div",{staticClass:"btns"},[a("up-load")],1)]),e._v(" "),a("el-form",{ref:"productForm1",staticClass:"speForm",attrs:{model:e.productForm,rules:e.rules,"label-width":"230px","label-position":e.labelPosition}},[a("el-row",e._l(e.$db.product.detailTab,function(t){return"basicInfo"===t.belongTab?a("el-col",{key:t.key,staticClass:"list",staticStyle:{height:"51px"},attrs:{xs:24,sm:24,md:t.fullLine?24:12,lg:t.fullLine?24:12,xl:t.fullLine?24:12}},[a("el-form-item",{attrs:{prop:t.key,label:t.label+":"}},["select"===t.showType?a("div",[a("el-select",{staticClass:"speSelect",attrs:{size:"mini",placeholder:"请选择"},model:{value:e.productForm[t.key],callback:function(a){e.$set(e.productForm,t.key,a)},expression:"productForm[v.key]"}},e._l(e.skuStatusOption,function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}))],1):e._e(),e._v(" "),"input"===t.showType?a("div",[a("el-input",{attrs:{disabled:t.disabledInput,size:"mini",placeholder:"系统生成",clearable:""},model:{value:e.productForm[t.key],callback:function(a){e.$set(e.productForm,t.key,a)},expression:"productForm[v.key]"}})],1):e._e(),e._v(" "),"textarea"===t.showType?a("div",[a("el-input",{staticClass:"speTextarea",attrs:{size:"mini",type:"textarea",autosize:"",placeholder:"请输入内容"},model:{value:e.productForm[t.key],callback:function(a){e.$set(e.productForm,t.key,a)},expression:"productForm[v.key]"}})],1):e._e(),e._v(" "),"number"===t.showType?a("div",[a("el-input-number",{staticClass:"speInputNumber",attrs:{size:"mini",controls:!1,min:0,label:"描述文字"},model:{value:e.productForm[t.key],callback:function(a){e.$set(e.productForm,t.key,a)},expression:"productForm[v.key]"}})],1):e._e(),e._v(" "),"dropdown"===t.showType?a("div",[a("drop-down",{ref:"dropDown",refInFor:!0,staticClass:"speInputNumber",attrs:{defaultProps:e.defaultProps,list:e.dropData},model:{value:e.productForm[t.key],callback:function(a){e.$set(e.productForm,t.key,a)},expression:"productForm[v.key]"}})],1):e._e()])],1):e._e()}))],1),e._v(" "),a("div",{staticClass:"title"},[e._v(e._s(e.$i.product.customerInfo))]),e._v(" "),a("el-form",{ref:"productForm2",staticClass:"speForm",attrs:{model:e.productForm,"label-width":"230px","label-position":e.labelPosition}},[a("el-row",e._l(e.$db.product.detailTab,function(t){return"customerInfo"===t.belongTab?a("el-col",{key:t.key,staticClass:"list",staticStyle:{height:"51px"},attrs:{xs:24,sm:24,md:t.fullLine?24:12,lg:t.fullLine?24:12,xl:t.fullLine?24:12}},[a("el-form-item",{attrs:{prop:t.key,label:t.label+":"}},["select"===t.showType?a("div",[a("el-select",{staticClass:"speSelect",attrs:{size:"mini",placeholder:"请选择"},model:{value:e.productForm[t.key],callback:function(a){e.$set(e.productForm,t.key,a)},expression:"productForm[v.key]"}},e._l(e.skuStatusOption,function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}))],1):e._e(),e._v(" "),"input"===t.showType?a("div",[a("el-input",{attrs:{disabled:t.disabledInput,size:"mini",placeholder:"系统生成",clearable:""},model:{value:e.productForm[t.key],callback:function(a){e.$set(e.productForm,t.key,a)},expression:"productForm[v.key]"}})],1):e._e(),e._v(" "),"textarea"===t.showType?a("div",[a("el-input",{staticClass:"speTextarea",attrs:{size:"mini",type:"textarea",autosize:"",placeholder:"请输入内容"},model:{value:e.productForm[t.key],callback:function(a){e.$set(e.productForm,t.key,a)},expression:"productForm[v.key]"}})],1):e._e(),e._v(" "),"number"===t.showType?a("div",[a("el-input-number",{staticClass:"speInputNumber",attrs:{size:"mini",controls:!1,min:0,label:"描述文字"},model:{value:e.productForm[t.key],callback:function(a){e.$set(e.productForm,t.key,a)},expression:"productForm[v.key]"}})],1):e._e(),e._v(" "),"dropdown"===t.showType?a("div",[a("drop-down",{ref:"dropDown",refInFor:!0,staticClass:"speInputNumber",attrs:{list:e.dropData},model:{value:e.productForm[t.key],callback:function(a){e.$set(e.productForm,t.key,a)},expression:"productForm[v.key]"}})],1):e._e()])],1):e._e()}))],1),e._v(" "),a("div",{staticClass:"title"},[e._v(e._s(e.$i.product.priceInfo))]),e._v(" "),a("el-form",{ref:"productForm3",staticClass:"speForm",attrs:{model:e.productForm,"label-width":"230px","label-position":e.labelPosition}},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.productForm.price,border:""}},[a("el-table-column",{attrs:{align:"center",width:"180"},scopedSlots:e._u([{key:"default",fn:function(t){return[0===t.$index?a("div",[e._v("\n                        "+e._s(e.$i.product.costPrice)+"\n                    ")]):e._e(),e._v(" "),1===t.$index?a("div",[e._v("\n                        "+e._s(e.$i.product.quotedPrice)+"\n                    ")]):e._e()]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"fobCurrency",align:"center",label:e.$i.product.fobCurrency,width:"180"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-form-item",{staticClass:"tableList"},[a("el-select",{attrs:{placeholder:"请选择"},model:{value:t.row.fobCurrency,callback:function(a){e.$set(t.row,"fobCurrency",a)},expression:"scope.row.fobCurrency"}},e._l(e.fobUnit,function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}))],1)]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"fobPrice",align:"center",label:e.$i.product.fobPrice,width:"180"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-form-item",{staticClass:"tableList"},[a("el-input-number",{attrs:{controls:!1,min:0,label:"描述文字"},model:{value:t.row.fobPrice,callback:function(a){e.$set(t.row,"fobPrice",a)},expression:"scope.row.fobPrice"}})],1)]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"fobPort",align:"center",label:e.$i.product.fobPort,width:"180"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-form-item",{staticClass:"tableList"},[a("el-input",{attrs:{clearable:"",placeholder:"请输入内容"},model:{value:t.row.fobPort,callback:function(a){e.$set(t.row,"fobPort",a)},expression:"scope.row.fobPort"}})],1)]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"exwPrice",align:"center",label:e.$i.product.exwPrice,width:"180"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-form-item",{staticClass:"tableList"},[a("el-input-number",{attrs:{controls:!1,min:0,label:"描述文字"},model:{value:t.row.exwPrice,callback:function(a){e.$set(t.row,"exwPrice",a)},expression:"scope.row.exwPrice"}})],1)]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"exwCurrency",align:"center",label:e.$i.product.exwCurrency,width:"180"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-form-item",{staticClass:"tableList"},[a("el-select",{attrs:{placeholder:"请选择"},model:{value:t.row.exwCurrency,callback:function(a){e.$set(t.row,"exwCurrency",a)},expression:"scope.row.exwCurrency"}},e._l(e.fobUnit,function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}))],1)]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"otherIncoterm",align:"center",label:e.$i.product.otherIncoterm,width:"180"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-form-item",{staticClass:"tableList"},[a("el-select",{attrs:{placeholder:"请选择"},model:{value:t.row.otherIncoterm,callback:function(a){e.$set(t.row,"otherIncoterm",a)},expression:"scope.row.otherIncoterm"}},e._l(e.otherIncotermUnit,function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}))],1)]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"otherIncotermPrice",align:"center",label:e.$i.product.otherIncotermPrice,width:"180"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-form-item",{staticClass:"tableList"},[a("el-input-number",{attrs:{controls:!1,min:0,label:"描述文字"},model:{value:t.row.otherIncotermPrice,callback:function(a){e.$set(t.row,"otherIncotermPrice",a)},expression:"scope.row.otherIncotermPrice"}})],1)]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"otherIncotermArea",align:"center",label:e.$i.product.otherIncotermArea,width:"180"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-form-item",{staticClass:"tableList"},[a("el-input",{attrs:{clearable:"",placeholder:"请输入内容"},model:{value:t.row.otherIncotermArea,callback:function(a){e.$set(t.row,"otherIncotermArea",a)},expression:"scope.row.otherIncotermArea"}})],1)]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"otherIncotermCurrency",align:"center",label:e.$i.product.otherIncotermCurrency,width:"180"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-form-item",{staticClass:"tableList"},[a("el-select",{attrs:{placeholder:"请选择"},model:{value:t.row.otherIncotermCurrency,callback:function(a){e.$set(t.row,"otherIncotermCurrency",a)},expression:"scope.row.otherIncotermCurrency"}},e._l(e.fobUnit,function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}))],1)]}}])})],1)],1),e._v(" "),a("div",{staticClass:"title"},[e._v(e._s(e.$i.product.packingInfo))]),e._v(" "),a("el-form",{ref:"productForm4",staticClass:"speForm",attrs:{model:e.productForm,"label-width":"230px","label-position":e.labelPosition}},[a("el-row",e._l(e.$db.product.detailTab,function(t){return"packingInfo"===t.belongTab?a("el-col",{key:t.key,staticClass:"list",staticStyle:{height:"51px"},attrs:{xs:24,sm:24,md:t.fullLine?24:12,lg:t.fullLine?24:12,xl:t.fullLine?24:12}},[a("el-form-item",{attrs:{prop:t.key,label:t.label+":"}},["select"===t.showType?a("div",[a("el-select",{staticClass:"speSelect",attrs:{size:"mini",placeholder:"请选择"},model:{value:e.productForm[t.key],callback:function(a){e.$set(e.productForm,t.key,a)},expression:"productForm[v.key]"}},e._l(e.skuStatusOption,function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}))],1):e._e(),e._v(" "),"input"===t.showType?a("div",[a("el-input",{attrs:{disabled:t.disabledInput,size:"mini",placeholder:"请输入",clearable:""},model:{value:e.productForm[t.key],callback:function(a){e.$set(e.productForm,t.key,a)},expression:"productForm[v.key]"}})],1):e._e(),e._v(" "),"textarea"===t.showType?a("div",[a("el-input",{staticClass:"speTextarea",attrs:{size:"mini",type:"textarea",autosize:"",placeholder:"请输入内容"},model:{value:e.productForm[t.key],callback:function(a){e.$set(e.productForm,t.key,a)},expression:"productForm[v.key]"}})],1):e._e(),e._v(" "),"number"===t.showType?a("div",[a("el-input-number",{staticClass:"speInputNumber",attrs:{size:"mini",controls:!1,min:0,label:"描述文字"},model:{value:e.productForm[t.key],callback:function(a){e.$set(e.productForm,t.key,a)},expression:"productForm[v.key]"}})],1):e._e(),e._v(" "),"dropdown"===t.showType?a("div",[a("drop-down",{ref:"dropDown",refInFor:!0,staticClass:"speInputNumber",attrs:{list:e.dropData},model:{value:e.productForm[t.key],callback:function(a){e.$set(e.productForm,t.key,a)},expression:"productForm[v.key]"}})],1):e._e()])],1):e._e()}))],1),e._v(" "),a("div",{staticClass:"title"},[e._v(e._s(e.$i.product.logisticInfo))]),e._v(" "),a("el-form",{ref:"productForm5",staticClass:"speForm",attrs:{model:e.productForm,"label-width":"230px","label-position":e.labelPosition}},[a("el-row",e._l(e.$db.product.detailTab,function(t){return"logisticInfo"===t.belongTab?a("el-col",{key:t.key,staticClass:"list",staticStyle:{height:"51px"},attrs:{xs:24,sm:24,md:t.fullLine?24:12,lg:t.fullLine?24:12,xl:t.fullLine?24:12}},[a("el-form-item",{attrs:{prop:t.key,label:t.label+":"}},["select"===t.showType?a("div",[a("el-select",{staticClass:"speSelect",attrs:{size:"mini",placeholder:"请选择"},model:{value:e.productForm[t.key],callback:function(a){e.$set(e.productForm,t.key,a)},expression:"productForm[v.key]"}},e._l(e.skuStatusOption,function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}))],1):e._e(),e._v(" "),"input"===t.showType?a("div",[a("el-input",{attrs:{disabled:t.disabledInput,size:"mini",placeholder:"请输入",clearable:""},model:{value:e.productForm[t.key],callback:function(a){e.$set(e.productForm,t.key,a)},expression:"productForm[v.key]"}})],1):e._e(),e._v(" "),"textarea"===t.showType?a("div",[a("el-input",{staticClass:"speTextarea",attrs:{size:"mini",type:"textarea",autosize:"",placeholder:"请输入内容"},model:{value:e.productForm[t.key],callback:function(a){e.$set(e.productForm,t.key,a)},expression:"productForm[v.key]"}})],1):e._e(),e._v(" "),"number"===t.showType?a("div",[a("el-input-number",{staticClass:"speInputNumber",attrs:{size:"mini",controls:!1,min:0,label:"描述文字"},model:{value:e.productForm[t.key],callback:function(a){e.$set(e.productForm,t.key,a)},expression:"productForm[v.key]"}})],1):e._e(),e._v(" "),"dropdown"===t.showType?a("div",[a("drop-down",{ref:"dropDown",refInFor:!0,staticClass:"speInputNumber",attrs:{list:e.dropData},model:{value:e.productForm[t.key],callback:function(a){e.$set(e.productForm,t.key,a)},expression:"productForm[v.key]"}})],1):e._e()])],1):e._e()}))],1),e._v(" "),a("div",{staticClass:"title"},[e._v(e._s(e.$i.product.otherInfo))]),e._v(" "),a("el-form",{ref:"productForm6",staticClass:"speForm",attrs:{model:e.productForm,"label-width":"230px","label-position":e.labelPosition}},[a("el-row",e._l(e.$db.product.detailTab,function(t){return"otherInfo"===t.belongTab?a("el-col",{key:t.key,staticClass:"list",staticStyle:{height:"51px"},attrs:{xs:24,sm:24,md:t.fullLine?24:12,lg:t.fullLine?24:12,xl:t.fullLine?24:12}},[a("el-form-item",{attrs:{prop:t.key,label:t.label+":"}},["select"===t.showType?a("div",[a("el-select",{staticClass:"speSelect",attrs:{size:"mini",placeholder:"请选择"},model:{value:e.productForm[t.key],callback:function(a){e.$set(e.productForm,t.key,a)},expression:"productForm[v.key]"}},e._l(e.skuStatusOption,function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}))],1):e._e(),e._v(" "),"input"===t.showType?a("div",[a("el-input",{attrs:{disabled:t.disabledInput,size:"mini",placeholder:"请输入",clearable:""},model:{value:e.productForm[t.key],callback:function(a){e.$set(e.productForm,t.key,a)},expression:"productForm[v.key]"}})],1):e._e(),e._v(" "),"textarea"===t.showType?a("div",[a("el-input",{staticClass:"speTextarea",attrs:{size:"mini",type:"textarea",autosize:"",placeholder:"请输入内容"},model:{value:e.productForm[t.key],callback:function(a){e.$set(e.productForm,t.key,a)},expression:"productForm[v.key]"}})],1):e._e(),e._v(" "),"number"===t.showType?a("div",["lengthWidthHeight"===t.key?a("div",[a("el-input-number",{staticClass:"speNum",attrs:{size:"mini",controls:!1,min:0,label:"描述文字"},model:{value:e.boxSize.length,callback:function(t){e.$set(e.boxSize,"length",t)},expression:"boxSize.length"}}),e._v(" "),a("div",{staticClass:"speIcon"},[e._v("*")]),e._v(" "),a("el-input-number",{staticClass:"speNum",attrs:{size:"mini",controls:!1,min:0,label:"描述文字"},model:{value:e.boxSize.width,callback:function(t){e.$set(e.boxSize,"width",t)},expression:"boxSize.width"}}),e._v(" "),a("div",{staticClass:"speIcon"},[e._v("*")]),e._v(" "),a("el-input-number",{staticClass:"speNum",attrs:{size:"mini",controls:!1,min:0,label:"描述文字"},model:{value:e.boxSize.height,callback:function(t){e.$set(e.boxSize,"height",t)},expression:"boxSize.height"}})],1):a("div",[a("el-input-number",{staticClass:"speInputNumber",attrs:{size:"mini",controls:!1,min:0,label:"描述文字"},model:{value:e.productForm[t.key],callback:function(a){e.$set(e.productForm,t.key,a)},expression:"productForm[v.key]"}})],1)]):e._e(),e._v(" "),"dropdown"===t.showType?a("div",[a("drop-down",{ref:"dropDown",refInFor:!0,staticClass:"speInputNumber",attrs:{list:e.dropData},model:{value:e.productForm[t.key],callback:function(a){e.$set(e.productForm,t.key,a)},expression:"productForm[v.key]"}})],1):e._e(),e._v(" "),"date"===t.showType?a("div",[a("el-date-picker",{attrs:{size:"mini",align:"right",type:"date",placeholder:"选择日期",editable:!1,"picker-options":e.pickerOptions1},model:{value:e.productForm[t.key],callback:function(a){e.$set(e.productForm,t.key,a)},expression:"productForm[v.key]"}})],1):e._e()])],1):e._e()}))],1),e._v(" "),a("div",{staticClass:"title"},[e._v(e._s(e.$i.product.attachment))]),e._v(" "),a("input",{staticStyle:{display:"none"},attrs:{id:"pic",name:"file",type:"file",accept:"image/*"},on:{change:e.uploadPic}}),e._v(" "),a("div",{staticClass:"footBtn"},[a("el-button",{attrs:{loading:e.disabledSubmit,type:"primary"},on:{click:e.finish}},[e._v(e._s(e.$i.product.finish))])],1)],1)},l=[];o._withStripped=!0;var r={render:o,staticRenderFns:l};t.a=r},xcsb:function(e,t,a){t=e.exports=a("UTlt")(!1),t.push([e.i,".img-handler[data-v-68bceffc]{display:inline-block;height:50px;border:1px solid #e0e0e0;position:relative;margin-left:15px}.img-handler img[data-v-68bceffc]{height:50px;width:80px}.img-handler i[data-v-68bceffc]{position:absolute;right:-10px;top:-10px;font-size:20px}",""])},zeZi:function(e,t,a){"use strict";var o=a("0lQp"),l=a("WEEb"),r=a("bGai");t.a={name:"addNewProduct",components:{imgHandler:l.a,upLoad:o.a,dropDown:r.d},data:function(){return{labelPosition:"left",disabledSubmit:!1,imgGroup:[],productForm:{id:"",pic:"thisIsAPicture",status:1,nameEn:"",barcode:"",nameCn:"",descEn:"",descCn:"",descCustomer:"",nameCustomer:"",customerSkuCode:"",supplierCode:"",supplierName:"",code:"",unit:"2",formation:"",materialEn:"",materialCn:"",colourEn:"",colourCn:"",minOrderQty:1,deliveryDates:1,design:"",noneSellCountry:1,applicableAge:1,expireDates:1,expireUnit:1,comments:"",readilyAvailable:1,availableQty:1,mainSaleCountry:1,mainSaleArea:"",productionDates:1,qualityStander:"",yearListed:"2018-02-23",useDisplayBox:1,displayBoxQty:0,otherPackInfoCn:"",otherPackInfoEn:"",adjustPackage:2,lengthWidthHeight:"",recycle:!1,categoryId:"",rateValueAddedTax:1,taxRefundRate:1,customsCode:"",customsNameCn:"",customsNameEn:"",tradeMarkCn:"",tradeMarkEn:"",commodityInspectionCn:"",commodityInspectionEn:"",declareElement:"",origin:"",inspectQuarantineCategory:"",brand:"",brandRemark:"",brandRelated:"",certificat:"",gp20SkuQty:0,gp40SkuQty:0,hq40SkuQty:0,tryDimension:1,skuQtyPerTray:0,specialTransportRequire:"",inventoryCostMethod:"",warehourceDefault:"",inventory:0,safeInventory:0,minInventory:0,unitWeight:1,unitLength:1,unitVolume:1,length:0,width:0,height:0,netWeight:0,volume:0,methodPkgCn:"",methodPkgEn:"",innerCartonUnit:"",innerCartonQty:0,innerCartonLength:0,innerCartonWidth:0,innerCartonHeight:0,innerCartonWeightNet:0,innerCartonRoughWeight:0,innerCartonVolume:0,innerCartonDesc:"",innerCartonMethodCn:"",innerCartonMethodEn:"",outerCartonUnit:"",outerCartonDesc:"",innerCartonOuterNum:0,outerCartonQty:0,outerCartonLength:0,outerCartonWidth:0,outerCartonHeight:0,outerCartonNetWeight:0,outerCartonRoughWeight:0,outerCartonVolume:0,outerCartonMethodCn:"",outerCartonMethodEn:"",oem:1,logisticId:1,version:1,pkgId:1,price:[{fobCurrency:1,fobPrice:1,fobPort:"",exwPrice:1,exwCurrency:1,otherIncoterm:1,otherIncotermPrice:1,otherIncotermArea:"",otherIncotermCurrency:1,status:1},{fobCurrency:1,fobPrice:1,fobPort:"",exwPrice:1,exwCurrency:1,otherIncoterm:1,otherIncotermPrice:1,otherIncotermArea:"",otherIncotermCurrency:1,status:2}]},rules:{nameEn:[{max:45,message:"最大长度为45"}],nameCn:[{max:45,message:"最大长度为45"}],barcode:[{max:45,message:"最大长度为45"}],descEn:[{max:300,message:"最大长度为300"}],descCn:[{max:300,message:"最大长度为300"}],descCustomer:[{max:300,message:"最大长度为300"}],nameCustomer:[{max:100,message:"最大长度为100"}],customerSkuCode:[{max:50,message:"最大长度为50"}],supplierCode:[{max:45,message:"最大长度为45"}],supplierName:[{max:80,message:"最大长度为80"}],code:[{max:40,message:"最大长度为40"}],unit:[{max:45,message:"最大长度为45"}],formation:[{max:100,message:"最大长度为100"}],materialEn:[{max:60,message:"最大长度为60"}],materialCn:[{max:60,message:"最大长度为60"}],colourEn:[{max:45,message:"最大长度为45"}],colourCn:[{max:45,message:"最大长度为45"}],design:[{max:45,message:"最大长度为45"}],expireUnit:[{max:45,message:"最大长度为45"}],comments:[{max:300,message:"最大长度为300"}],mainSaleArea:[{max:45,message:"最大长度为45"}],qualityStander:[{max:100,message:"最大长度为100"}],otherPackInfoCn:[{max:100,message:"最大长度为100"}],otherPackInfoEn:[{max:100,message:"最大长度为100"}],lengthWidthHeight:[],customsCode:[{max:45,message:"最大长度为45"}],customsNameCn:[{max:100,message:"最大长度为100"}],customsNameEn:[{max:100,message:"最大长度为100"}],tradeMarkCn:[{max:45,message:"最大长度为45"}],tradeMarkEn:[{max:45,message:"最大长度为45"}],commodityInspectionCn:[{max:100,message:"最大长度为100"}],commodityInspectionEn:[{max:100,message:"最大长度为100"}],declareElement:[{max:100,message:"最大长度为100"}],origin:[{max:45,message:"最大长度为45"}],inspectQuarantineCategory:[{max:45,message:"最大长度为45"}],brand:[{max:45,message:"最大长度为45"}],brandRemark:[{max:100,message:"最大长度为100"}],brandRelated:[{max:45,message:"最大长度为45"}],certificat:[{max:45,message:"最大长度为45"}],specialTransportRequire:[{max:100,message:"最大长度为100"}],inventoryCostMethod:[{max:100,message:"最大长度为100"}],warehourceDefault:[{max:100,message:"最大长度为100"}],methodPkgCn:[{max:45,message:"最大长度为45"}],methodPkgEn:[{max:45,message:"最大长度为45"}],innerCartonUnit:[{max:45,message:"最大长度为45"}],innerCartonDesc:[{max:100,message:"最大长度为100"}],innerCartonMethodCn:[{max:30,message:"最大长度为30"}],innerCartonMethodEn:[{max:45,message:"最大长度为45"}],outerCartonUnit:[{max:20,message:"最大长度为20"}],outerCartonDesc:[{max:100,message:"最大长度为100"}],outerCartonMethodCn:[{max:45,message:"最大长度为45"}],outerCartonMethodEn:[{max:45,message:"最大长度为45"}]},skuStatusOption:[{label:"上架",value:1},{label:"下架",value:0}],isReadilyAvailable:[{label:"是",value:1},{label:"否",value:0}],countryList:[{label:"中国",value:1},{label:"美国",value:2},{label:"日本",value:3}],expireUnitList:[{label:"小时",value:1},{label:"日",value:2},{label:"月",value:3},{label:"年",value:4}],fobUnit:[{label:"USD",value:1},{label:"CNY",value:2},{label:"EUR",value:3}],otherIncotermUnit:[{label:"CIF",value:1},{label:"DDU",value:2}],weightUnit:[{label:"t",value:1},{label:"kg",value:2},{label:"lb",value:3},{label:"sh.ton",value:4},{label:"long ton",value:5},{label:"oz",value:6},{label:"g",value:7}],lengthUnit:[{label:"km",value:1},{label:"mile",value:2},{label:"m",value:3},{label:"ft",value:4},{label:"yd",value:5},{label:"cm",value:6},{label:"in",value:7},{label:"mm",value:8}],volumeUnit:[{label:"m3",value:1},{label:"liter",value:2},{label:"ft3",value:3},{label:"mcf",value:4},{label:"in3",value:5},{label:"cm3",value:6},{label:"bbl",value:7},{label:"gal",value:8},{label:"qt",value:9},{label:"pt",value:10},{label:"gi",value:11}],isOem:[{label:"是",value:1},{label:"否",value:0}],pickerOptions1:{shortcuts:[{text:"今天",onClick:function(e){e.$emit("pick",new Date)}},{text:"昨天",onClick:function(e){var t=new Date;t.setTime(t.getTime()-864e5),e.$emit("pick",t)}},{text:"一周前",onClick:function(e){var t=new Date;t.setTime(t.getTime()-6048e5),e.$emit("pick",t)}}]},isUseDisplayBox:[{label:"是",value:1},{label:"否",value:0}],isAdjustSku:[{label:"是",value:1},{label:"否",value:0}],boxSize:{length:0,width:0,height:0},dropData:[{id:1,label:"一级 1",children:[{id:4,label:"二级 1-1",children:[{id:9,label:"三级 1-1-1"},{id:10,label:"三级 1-1-2"}]}]},{id:2,label:"一级 2",children:[{id:5,label:"二级 2-1"},{id:6,label:"二级 2-2"}]},{id:3,label:"一级 3",children:[{id:7,label:"二级 3-1"},{id:8,label:"二级 3-2"}]}],defaultProps:{label:"name",children:"children"},options:[{value:"选项1",label:"黄金糕"},{value:"选项2",label:"双皮奶"},{value:"选项3",label:"蚵仔煎"},{value:"选项4",label:"龙须面"},{value:"选项5",label:"北京烤鸭"}]}},methods:{uploadPic:function(e){var t=this;console.log(e,"????");var a=e.target.files[0],o=new FileReader;o.readAsDataURL(a),o.onload=function(e){t.imgGroup.push(e.target.result)}},addPic:function(){document.getElementById("pic").click()},getCategoryId:function(){var e=this;this.$ajax.get(this.$apis.getCategory,{}).then(function(t){e.dropData=t}).catch(function(e){console.log(e)})},finish:function(){var e=this,t=this.boxSize.length+"*"+this.boxSize.width+"*"+this.boxSize.height;this.$set(this.productForm,"lengthWidthHeight",t),this.disabledSubmit=!0,this.$route.query.id&&this.$route.query.isEdit?this.$ajax.post(this.$apis.get_productDetail,this.productForm).then(function(t){e.$message({message:"修改成功",type:"success"}),e.disabledSubmit=!1,e.$router.push("/sellerProduct/overview")}).catch(function(t){e.disabledSubmit=!1}):this.$ajax.post(this.$apis.add_newSKU,this.productForm).then(function(t){e.$message({message:"新增成功",type:"success"}),e.disabledSubmit=!1,e.$router.push("/sellerProduct/overview")}).catch(function(t){e.disabledSubmit=!1})},getGoodsData:function(){var e=this;this.$ajax.get(this.$apis.get_productDetail,{id:this.$route.query.id}).then(function(t){console.log(t),e.productForm=t}).catch(function(e){console.log(e,"12345")})}},created:function(){var e=this;this.$ajax.get(this.$apis.getCategory,{}).then(function(t){e.dropData=t,e.$route.query.id&&e.getGoodsData()}).catch(function(e){console.log(e)})}}}});