webpackJsonp([44],{SZ6P:function(t,e,a){"use strict";var s=a("bGai");e.a={name:"message-management",components:{VTable:s.b},data:function(){return{tabData:[],tabLoad:!0,params:{title:"",content:""},dialogVisible:!1,newsContent:""}},methods:{handleSelectionChange:function(t){this.multipleSelection=t},publish:function(t){console.log(t)},handleSizeChange:function(t){console.log("每页 "+t+" 条")},handleCurrentChange:function(t){console.log("当前页: "+t)},addNews:function(){this.dialogVisible=!0},handleClose:function(t){console.log("取消了"),t()},getMessageList:function(){var t=this,e=void 0,a=void 0;this.tabLoad=!0,a=this.$db.message.table,e=1==this.$route.query.type?this.$apis.get_sys_queryownlist:this.$apis.get_company_queryownlist,this.$ajax.get(e).then(function(e){t.tabData=t.$getDB(a,e),t.tabLoad=!1}).catch(function(){t.tabLoad=!1})},postAddMessage:function(){var t=this,e=void 0;e=1==this.$route.query.type?this.$apis.post_sys_addsystemmessage:this.$apis.post_company_addcompanymessage,this.$ajax.post(e,this.params).then(function(e){t.$message("发送成功")}).catch(function(){console.log("发送失败")}),this.dialogVisible=!1}},created:function(){this.getMessageList()}}},TYLe:function(t,e,a){var s=a("UI9o");"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);a("FIqI")("2f3f9fad",s,!0,{})},UI9o:function(t,e,a){e=t.exports=a("UTlt")(!1),e.push([t.i,".head[data-v-7b224c7c]{padding:10px 0}.speDialog[data-v-7b224c7c] .el-dialog__footer{text-align:center}",""])},d5U8:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"head"},[a("el-button",{on:{click:t.addNews}},[t._v(t._s(t.$i._baseText.add))])],1),t._v(" "),a("div",{staticClass:"body"},[a("v-table",{attrs:{data:t.tabData}})],1),t._v(" "),a("el-dialog",{staticClass:"speDialog",attrs:{title:"Add News",visible:t.dialogVisible,width:"30%","before-close":t.handleClose},on:{"update:visible":function(e){t.dialogVisible=e}}},[a("el-input",{staticStyle:{"margin-bottom":"10px"},attrs:{type:"input",rows:2,placeholder:"请输入标题"},model:{value:t.params.title,callback:function(e){t.$set(t.params,"title",e)},expression:"params.title"}}),t._v(" "),a("el-input",{attrs:{type:"textarea",rows:2,placeholder:"请输入内容"},model:{value:t.params.content,callback:function(e){t.$set(t.params,"content",e)},expression:"params.content"}}),t._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"primary"},on:{click:function(e){t.postAddMessage()}}},[t._v("发 布")]),t._v(" "),a("el-button",{on:{click:function(e){t.dialogVisible=!1}}},[t._v("取消")])],1)],1)],1)},o=[],i={render:s,staticRenderFns:o};e.a=i},fv5c:function(t,e,a){"use strict";function s(t){a("TYLe")}Object.defineProperty(e,"__esModule",{value:!0});var o=a("SZ6P"),i=a("d5U8"),n=a("Z0/y"),l=s,c=n(o.a,i.a,!1,l,"data-v-7b224c7c",null);e.default=c.exports}});