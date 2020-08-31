(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{475:function(t,e,r){"use strict";r.r(e);r(15);var n=r(2),o=r(200),c=r(242),l=r(248),d=r(267),m={middleware:"authenticated",components:{TagInput:c.a,MarkdownHelp:l.a,MarkdownEditor:d.a},data:function(){return{publishing:!1,postForm:{title:"",tags:[],content:""}}},computed:{user:function(){return this.$store.state.user.current}},mounted:function(){},methods:{submitCreate:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r,article;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(r=t).publishing){e.next=3;break}return e.abrupt("return");case 3:return r.publishing=!0,e.prev=4,e.next=7,t.$axios.post("/api/article/create",{title:r.postForm.title,content:r.postForm.content,tags:r.postForm.tags?r.postForm.tags.join(","):""});case 7:article=e.sent,t.$refs.mdEditor.clearCache(),t.$toast.success("提交成功",{duration:1e3,onComplete:function(){o.a.linkTo("/article/"+article.articleId)}}),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(4),r.publishing=!1,t.$toast.error("提交失败："+(e.t0.message||e.t0));case 16:case"end":return e.stop()}}),e,null,[[4,12]])})))()}},head:function(){return{title:this.$siteTitle("发表文章")}}},v=r(49),component=Object(v.a)(m,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"main"},[r("div",{staticClass:"container main-container is-white left-main"},[r("div",{staticClass:"left-container"},[r("div",{staticClass:"widget"},[r("div",{staticClass:"widget-header"},[r("nav",{staticClass:"breadcrumb"},[r("ul",[t._m(0),t._v(" "),r("li",[r("a",{attrs:{href:"/user/"+t.user.id+"?tab=articles"}},[t._v(t._s(t.user.nickname))])]),t._v(" "),t._m(1)])])]),t._v(" "),r("div",{staticClass:"widget-content"},[r("div",{staticClass:"field"},[r("div",{staticClass:"control"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.postForm.title,expression:"postForm.title"}],staticClass:"input",attrs:{type:"text",placeholder:"标题"},domProps:{value:t.postForm.title},on:{input:function(e){e.target.composing||t.$set(t.postForm,"title",e.target.value)}}})])]),t._v(" "),r("div",{staticClass:"field"},[r("div",{staticClass:"control"},[r("markdown-editor",{ref:"mdEditor",attrs:{"editor-id":"articleCreateEditor",placeholder:"请输入内容，将图片复制或拖入编辑器可上传"},model:{value:t.postForm.content,callback:function(e){t.$set(t.postForm,"content",e)},expression:"postForm.content"}})],1)]),t._v(" "),r("div",{staticClass:"field"},[r("div",{staticClass:"control"},[r("tag-input",{model:{value:t.postForm.tags,callback:function(e){t.$set(t.postForm,"tags",e)},expression:"postForm.tags"}})],1)]),t._v(" "),r("div",{staticClass:"field is-grouped"},[r("div",{staticClass:"control"},[r("a",{staticClass:"button is-success",class:{"is-loading":t.publishing},attrs:{disabled:t.publishing},on:{click:t.submitCreate}},[t._v("发表")])])])])])]),t._v(" "),r("div",{staticClass:"right-container"},[r("markdown-help")],1)])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("a",{attrs:{href:"/"}},[this._v("首页")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",{staticClass:"is-active"},[e("a",{attrs:{href:"#","aria-current":"page"}},[this._v("文章")])])}],!1,null,"a7f6944e",null);e.default=component.exports}}]);