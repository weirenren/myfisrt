(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{498:function(t,e,n){"use strict";n.r(e);n(16),n(8),n(26);var o=n(39),r=(n(15),n(2)),c=n(200),l=n(242),d=n(248),m=n(267),v={middleware:"authenticated",components:{TagInput:l.a,MarkdownHelp:d.a,MarkdownEditor:m.a},asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,c,l,d,m;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$axios,r=t.params,e.next=3,Promise.all([n.get("/api/topic/edit/"+r.id),n.get("/api/topic/nodes")]);case 3:return c=e.sent,l=Object(o.a)(c,2),d=l[0],m=l[1],e.abrupt("return",{topic:d,nodes:m,postForm:{nodeId:d.nodeId,title:d.title,tags:d.tags,content:d.content}});case 8:case"end":return e.stop()}}),e)})))()},data:function(){return{publishing:!1,postForm:{nodeId:0,title:"",tags:[],content:""}}},computed:{currentUser:function(){return this.$store.state.user.current}},mounted:function(){},methods:{submitCreate:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(n=t).publishing){e.next=3;break}return e.abrupt("return");case 3:return n.publishing=!0,e.prev=4,e.next=7,t.$axios.post("/api/topic/edit/"+t.topic.topicId,{nodeId:t.postForm.nodeId,title:t.postForm.title,content:t.postForm.content,tags:t.postForm.tags?t.postForm.tags.join(","):""});case 7:o=e.sent,t.$toast.success("提交成功",{duration:1e3,onComplete:function(){c.a.linkTo("/topic/"+o.topicId)}}),e.next=16;break;case 11:e.prev=11,e.t0=e.catch(4),console.error(e.t0),n.publishing=!1,t.$toast.error("提交失败："+(e.t0.message||e.t0));case 16:case"end":return e.stop()}}),e,null,[[4,11]])})))()}},head:function(){return{title:this.$siteTitle("修改话题")}}},f=n(49),component=Object(f.a)(v,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"main"},[n("div",{staticClass:"container main-container is-white left-main"},[n("div",{staticClass:"left-container"},[n("div",{staticClass:"widget"},[n("div",{staticClass:"widget-header"},[n("nav",{staticClass:"breadcrumb"},[n("ul",[t._m(0),t._v(" "),n("li",[n("a",{attrs:{href:"/user/"+t.currentUser.id+"?tab=topics"}},[t._v(t._s(t.currentUser.nickname))])]),t._v(" "),t._m(1)])])]),t._v(" "),n("div",{staticClass:"widget-content"},[n("div",{staticClass:"field is-horizontal"},[n("div",{staticClass:"field-body"},[n("div",{staticClass:"field",staticStyle:{width:"100%"}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.postForm.title,expression:"postForm.title"}],staticClass:"input",attrs:{type:"text",placeholder:"请输入标题"},domProps:{value:t.postForm.title},on:{input:function(e){e.target.composing||t.$set(t.postForm,"title",e.target.value)}}})]),t._v(" "),n("div",{staticClass:"field"},[n("div",{staticClass:"select"},[n("select",{directives:[{name:"model",rawName:"v-model",value:t.postForm.nodeId,expression:"postForm.nodeId"}],on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.postForm,"nodeId",e.target.multiple?n:n[0])}}},[n("option",{attrs:{value:"0"}},[t._v("选择节点")]),t._v(" "),t._l(t.nodes,(function(e){return n("option",{key:e.nodeId,domProps:{value:e.nodeId}},[t._v(t._s(e.name))])}))],2)])])])]),t._v(" "),n("div",{staticClass:"field"},[n("div",{staticClass:"control"},[n("markdown-editor",{attrs:{"editor-id":"topicEditEditor",placeholder:"可空，将图片复制或拖入编辑器可上传"},model:{value:t.postForm.content,callback:function(e){t.$set(t.postForm,"content",e)},expression:"postForm.content"}})],1)]),t._v(" "),n("div",{staticClass:"field"},[n("div",{staticClass:"control"},[n("tag-input",{model:{value:t.postForm.tags,callback:function(e){t.$set(t.postForm,"tags",e)},expression:"postForm.tags"}})],1)]),t._v(" "),n("div",{staticClass:"field is-grouped"},[n("div",{staticClass:"control"},[n("a",{staticClass:"button is-success",class:{"is-loading":t.publishing},attrs:{disabled:t.publishing},on:{click:t.submitCreate}},[t._v("提交更改")])])])])])]),t._v(" "),n("div",{staticClass:"right-container"},[n("markdown-help")],1)])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("a",{attrs:{href:"/"}},[this._v("首页")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",{staticClass:"is-active"},[e("a",{attrs:{href:"#","aria-current":"page"}},[this._v("主题")])])}],!1,null,"36eaa7f6",null);e.default=component.exports}}]);