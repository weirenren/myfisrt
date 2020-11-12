(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{289:function(t,e,n){},374:function(t,e,n){"use strict";var r=n(289);n.n(r).a},485:function(t,e,n){"use strict";n.r(e);n(15);var r=n(2),l={layout:"admin",data:function(){return{results:[],listLoading:!1,page:{},filters:{},tagOptions:[]}},mounted:function(){this.recent()},methods:{list:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n,data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.listLoading=!0,n=Object.assign(t.filters,{page:t.page.page,limit:t.page.limit}),e.prev=2,e.next=5,t.$axios.post("/api/admin/article/list",n);case 5:data=e.sent,t.results=data.results,t.page=data.page,e.next=13;break;case 10:e.prev=10,e.t0=e.catch(2),t.$message.error(e.t0.message);case 13:return e.prev=13,t.listLoading=!1,e.finish(13);case 16:case"end":return e.stop()}}),e,null,[[2,10,13,16]])})))()},recent:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.listLoading=!0,e.prev=1,e.next=4,t.$axios.get("/api/admin/article/recent");case 4:t.results=e.sent,e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),t.$message.error(e.t0.message);case 10:return e.prev=10,t.listLoading=!1,e.finish(10);case 13:case"end":return e.stop()}}),e,null,[[1,7,10,13]])})))()},handlePageChange:function(t){this.page.page=t,this.list()},handleLimitChange:function(t){this.page.limit=t,this.list()},deleteSubmit:function(t){var e=this,n=this;this.$confirm("确认要删除文章？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){e.$axios.post("/api/admin/article/delete",{id:t.id}).then((function(data){n.$message({message:"删除成功",type:"success"}),n.list()})).catch((function(t){n.$notify.error({title:"错误",message:t.message})}))})).catch((function(){e.$message({type:"info",message:"已取消删除"})}))},pendingSubmit:function(t){var e=this,n=this;this.$confirm("确认要过审文章？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){e.$axios.post("/api/admin/article/pending",{id:t.id}).then((function(data){n.$message({message:"审核成功",type:"success"}),n.list()})).catch((function(t){n.$notify.error({title:"错误",message:t.message})}))})).catch((function(){e.$message({type:"info",message:"已取消审核"})}))}}},c=(n(374),n(28)),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],staticClass:"page-container"},[n("div",{staticClass:"toolbar"},[n("el-form",{attrs:{inline:!0,model:t.filters}},[n("el-form-item",[n("el-input",{attrs:{placeholder:"编号"},model:{value:t.filters.id,callback:function(e){t.$set(t.filters,"id",e)},expression:"filters.id"}})],1),t._v(" "),n("el-form-item",[n("el-input",{attrs:{placeholder:"用户编号"},model:{value:t.filters.userId,callback:function(e){t.$set(t.filters,"userId",e)},expression:"filters.userId"}})],1),t._v(" "),n("el-form-item",[n("el-input",{attrs:{placeholder:"标题"},model:{value:t.filters.title,callback:function(e){t.$set(t.filters,"title",e)},expression:"filters.title"}})],1),t._v(" "),n("el-form-item",[n("el-select",{attrs:{clearable:"",placeholder:"请选择状态"},on:{change:t.list},model:{value:t.filters.status,callback:function(e){t.$set(t.filters,"status",e)},expression:"filters.status"}},[n("el-option",{attrs:{label:"正常",value:"0"}}),t._v(" "),n("el-option",{attrs:{label:"删除",value:"1"}}),t._v(" "),n("el-option",{attrs:{label:"待审核",value:"2"}})],1)],1),t._v(" "),n("el-form-item",[n("el-button",{attrs:{type:"primary"},on:{click:t.list}},[t._v("查询")])],1)],1)],1),t._v(" "),t.results&&t.results.length>0?n("div",{staticClass:"page-section articles"},t._l(t.results,(function(e){return n("div",{key:e.id,staticClass:"article"},[n("div",{staticClass:"article-header"},[n("img",{staticClass:"avatar",attrs:{src:e.user.smallAvatar}}),t._v(" "),n("div",{staticClass:"article-right"},[n("div",{staticClass:"article-title"},[n("a",{attrs:{href:"/article/"+e.id,target:"_blank"}},[t._v(t._s(e.title))])]),t._v(" "),n("div",{staticClass:"article-meta"},[n("label",{staticClass:"action-item info"},[t._v("ID: "+t._s(e.id))]),t._v(" "),e.user?n("label",{staticClass:"author"},[t._v(t._s(e.user.nickname))]):t._e(),t._v(" "),n("label",[t._v(t._s(t._f("formatDate")(e.createTime)))]),t._v(" "),t._l(e.tags,(function(e){return n("label",{key:e.tagId,staticClass:"tag"},[t._v(t._s(e.tagName))])})),t._v(" "),n("div",{staticClass:"actions"},[1===e.status?n("span",{staticClass:"action-item danger"},[t._v("已删除")]):t._e(),t._v(" "),1!==e.status?n("a",{staticClass:"action-item btn",on:{click:function(n){return t.deleteSubmit(e)}}},[t._v("删除")]):t._e(),t._v(" "),2===e.status?n("a",{staticClass:"action-item btn",attrs:{href:"/article/edit/"+e.id}},[t._v("修改")]):t._e(),t._v(" "),2===e.status?n("a",{staticClass:"action-item btn",on:{click:function(n){return t.pendingSubmit(e)}}},[t._v("审核")]):t._e()])],2)])]),t._v(" "),n("div",{staticClass:"summary"},[t._v(t._s(e.summary))])])})),0):n("div",{staticClass:"page-section articles"},[t._m(0)]),t._v(" "),t.page.total>0?n("div",{staticClass:"pagebar"},[n("el-pagination",{attrs:{"page-sizes":[20,50,100,300],"current-page":t.page.page,"page-size":t.page.limit,total:t.page.total,layout:"total, sizes, prev, pager, next, jumper"},on:{"current-change":t.handlePageChange,"size-change":t.handleLimitChange}})],1):t._e()])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"notification is-primary"},[e("strong",[this._v("无数据")])])}],!1,null,"093c2c52",null);e.default=component.exports}}]);