(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{234:function(t,e,n){},242:function(t,e,n){"use strict";n(16);var o=n(2),r=(n(51),n(70),n(18),{props:{value:{type:Array,default:function(){return[]}},suggestTags:{type:Array,default:function(){return[]}}},data:function(){return{tags:this.value||[],maxTagCount:3,maxWordCount:5,showRecommendTags:!1,inputTag:"",autocompleteTags:[],selectIndex:-1}},computed:{recommendTags:function(){return this.suggestTags}},methods:{removeTag:function(t,e){var n=this.$refs.tagInput.selectionStart;this.inputTag&&0!==n||(this.tags.splice(this.tags.length-1,1),this.$emit("input",this.tags))},clickRemoveTag:function(t){var e=t.target.dataset.name;if(e){var n=this.tags.indexOf(e);-1!==n&&(this.tags.splice(n,1),this.$emit("input",this.tags))}},selectTag:function(t){this.selectIndex=t,this.addTag()},addTag:function(t){t&&(t.stopPropagation(),t.preventDefault()),this.selectIndex>=0&&this.autocompleteTags.length>this.selectIndex?this.addTagName(this.autocompleteTags[this.selectIndex]):this.addTagName(this.inputTag),this.autocompleteTags=[],this.selectIndex=-1},addRecommendTag:function(t){this.addTagName(t),this.closeRecommendTags()},addTagName:function(t){return!!t&&(!(this.tags&&this.tags.length>=this.maxTagCount)&&(!(t.length>this.maxWordCount)&&((!this.tags||!this.tags.includes(t))&&(this.tags.push(t),this.inputTag="",this.$emit("input",this.tags),!0))))},autocomplete:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var n,i;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.closeRecommendTags(),t.selectIndex=-1,t.inputTag){e.next=6;break}t.autocompleteTags=[],e.next=11;break;case 6:return e.next=8,t.$axios.post("/api/tag/autocomplete",{input:t.inputTag});case 8:if(n=e.sent,t.autocompleteTags=[],n.length>0)for(i=0;i<n.length;i++)t.autocompleteTags.push(n[i].name);case 11:case"end":return e.stop()}}),e)})))()},selectUp:function(t){t.stopPropagation(),t.preventDefault();var e=this.selectIndex;this.autocompleteTags.length-1<0||e<0||this.selectIndex--},selectDown:function(t){t.stopPropagation(),t.preventDefault();var e=this.selectIndex,n=this.autocompleteTags.length-1;n<0||e>=n||this.selectIndex++},openRecommendTags:function(){this.showRecommendTags=!0},closeRecommendTags:function(){var t=this;setTimeout((function(){t.showRecommendTags=!1}),300)},close:function(){this.autocompleteTags&&this.autocompleteTags.length>0&&(this.autocompleteTags=[],this.selectIndex=-1),this.closeRecommendTags()}}}),c=(n(269),n(29)),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"select-tags"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.tags,expression:"tags"}],attrs:{id:"tags",name:"tags",type:"hidden"},domProps:{value:t.tags},on:{input:function(e){e.target.composing||(t.tags=e.target.value)}}}),t._v(" "),n("div",{staticClass:"tags-selected"},t._l(t.tags,(function(e){return n("span",{key:e,staticClass:"tag-item"},[n("span",{staticClass:"text"},[t._v(t._s(e)),n("i",{staticClass:"iconfont icon-close",attrs:{"data-name":e},on:{click:t.clickRemoveTag}})])])})),0),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.inputTag,expression:"inputTag"}],ref:"tagInput",staticClass:"input",attrs:{placeholder:"标签（用逗号分隔，最多"+t.maxTagCount+"个）",type:"text"},domProps:{value:t.inputTag},on:{input:[function(e){e.target.composing||(t.inputTag=e.target.value)},t.autocomplete],keydown:[function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"delete",[8,46],e.key,["Backspace","Delete","Del"])?null:t.removeTag(e)},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.addTag(e)},function(e){return e.type.indexOf("key")||32===e.keyCode?t.addTag(e):null},function(e){return e.type.indexOf("key")||186===e.keyCode?t.addTag(e):null},function(e){return e.type.indexOf("key")||188===e.keyCode?t.addTag(e):null},function(e){return e.type.indexOf("key")||38===e.keyCode?t.selectUp(e):null},function(e){return e.type.indexOf("key")||40===e.keyCode?t.selectDown(e):null},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"esc",27,e.key,["Esc","Escape"])?null:t.close(e)}],focus:t.openRecommendTags,blur:t.closeRecommendTags,click:t.openRecommendTags}}),t._v(" "),t.autocompleteTags.length>0?n("div",{staticClass:"autocomplete-tags"},[n("div",{staticClass:"tags-container"},[n("section",{staticClass:"tag-section"},t._l(t.autocompleteTags,(function(e,o){return n("div",{key:e,staticClass:"tag-item",class:{active:o===t.selectIndex},domProps:{textContent:t._s(e)},on:{click:function(e){return t.selectTag(o)}}})})),0)])]):t._e(),t._v(" "),t.showRecommendTags?n("div",{staticClass:"recommend-tags"},[n("div",{staticClass:"tags-container"},[n("div",{staticClass:"header"},[n("span",[t._v("推荐标签")]),t._v(" "),n("span",{staticClass:"close-recommend"},[n("i",{staticClass:"iconfont icon-close",on:{click:t.closeRecommendTags}})])]),t._v(" "),t._l(t.recommendTags,(function(e){return n("a",{key:e,staticClass:"tag-item",domProps:{textContent:t._s(e)},on:{click:function(n){return t.addRecommendTag(e)}}})}))],2)]):t._e()])}),[],!1,null,"6dde72f9",null);e.a=component.exports},251:function(t,e,n){},267:function(t,e,n){"use strict";var o={},r=(n(323),n(29)),component=Object(r.a)(o,(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"widget markdown-help"},[n("div",{staticClass:"widget-header"},[t._v("\n    Markdown 语法参考\n  ")]),t._v(" "),n("div",{staticClass:"widget-content content"},[n("ol",[n("li",[n("span",{staticStyle:{"font-weight":"700",color:"red"}},[t._v("将图片复制或拖入编辑器可上传")])]),t._v(" "),n("li",[t._v("## 单行的标题")]),t._v(" "),n("li",[t._v("**粗体**")]),t._v(" "),n("li",[t._v("`console.log('行内代码')`")]),t._v(" "),n("li",[t._v("```js\\n code \\n``` 标记代码块")]),t._v(" "),n("li",[t._v("[内容](链接)")]),t._v(" "),n("li",[t._v("![文字说明](图片链接)")])]),t._v(" "),n("span",[n("a",{attrs:{href:"https://mlog.club/article/5522",target:"_blank"}},[t._v("Markdown 文档")])])])])}],!1,null,"29e12336",null);e.a=component.exports},269:function(t,e,n){"use strict";var o=n(234);n.n(o).a},323:function(t,e,n){"use strict";var o=n(251);n.n(o).a},580:function(t,e,n){"use strict";n.r(e);n(23),n(24),n(69),n(17),n(9),n(30);var o=n(41),r=(n(16),n(2)),c=n(208),l=(n(242),n(267)),d=n(274),m=n(385),v={middleware:"authenticated",components:{MarkdownHelp:l.a,PostTweets:d.a},asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,c,l,d,m,v;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$axios,r=t.params,e.next=3,Promise.all([n.get("/api/topic/edit/"+r.id),n.get("/api/topic/nodes")]);case 3:return c=e.sent,l=Object(o.a)(c,2),d=l[0],m=l[1],d.extraData=JSON.parse(d.extraData),v=[],d.imageList&&(v=d.imageList.split(",")),e.abrupt("return",{topic:d,nodes:m,postForm:{nodeId:d.nodeId,title:d.title,tags:d.tags,content:d.content,imageList:v,extraData:d.extraData}});case 11:case"end":return e.stop()}}),e)})))()},data:function(){return{publishing:!1,imageList:[],postForm:{nodeId:0,title:"",tags:[],content:""}}},computed:{currentUser:function(){return this.$store.state.user.current}},mounted:function(){},methods:{onImageUpload:function(t){this.imageList=t},submitCreate:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n,o,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(n=t).publishing){e.next=3;break}return e.abrupt("return");case 3:return n.publishing=!0,e.prev=4,o=m.a.homeItemToJsonString("北京",t.postForm.extraData.address),e.next=8,t.$axios.post("/api/topic/edit/"+t.topic.topicId,{nodeId:t.postForm.nodeId,title:t.postForm.title,content:t.postForm.content,tags:t.postForm.tags?t.postForm.tags.join(","):"",imageList:t.imageList.toString(),extraData:JSON.stringify(o)});case 8:r=e.sent,t.$toast.success("提交成功",{duration:1e3,onComplete:function(){c.a.linkTo("/rent/"+r.topicId)}}),e.next=17;break;case 12:e.prev=12,e.t0=e.catch(4),console.error(e.t0),n.publishing=!1,t.$toast.error("提交失败："+(e.t0.message||e.t0));case 17:case"end":return e.stop()}}),e,null,[[4,12]])})))()}},head:function(){return{title:this.$siteTitle("修改话题")}}},h=n(29),component=Object(h.a)(v,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"main"},[n("div",{staticClass:"container main-container is-white left-main"},[n("div",{staticClass:"left-container"},[n("div",{staticClass:"widget"},[n("div",{staticClass:"widget-header"},[n("nav",{staticClass:"breadcrumb"},[n("ul",[t._m(0),t._v(" "),n("li",[n("a",{attrs:{href:"/user/"+t.currentUser.id+"?tab=topics"}},[t._v(t._s(t.currentUser.nickname))])]),t._v(" "),t._m(1)])])]),t._v(" "),n("div",{staticClass:"widget-content"},[n("div",{staticClass:"field is-horizontal"},[n("div",{staticClass:"field-body"},[n("div",{staticClass:"field",staticStyle:{width:"100%"}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.postForm.title,expression:"postForm.title"}],staticClass:"input",attrs:{type:"text",placeholder:"请输入标题"},domProps:{value:t.postForm.title},on:{input:function(e){e.target.composing||t.$set(t.postForm,"title",e.target.value)}}})])])]),t._v(" "),n("div",{staticClass:"field"},[n("label",{staticClass:"label"},[t._v("详情:")]),t._v(" "),n("div",{staticClass:"control"},[n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.postForm.content,expression:"postForm.content"}],staticClass:"textarea is-large",attrs:{placeholder:"Large textarea"},domProps:{value:t.postForm.content},on:{input:function(e){e.target.composing||t.$set(t.postForm,"content",e.target.value)}}})])]),t._v(" "),n("div",{staticClass:"field"},[n("label",{staticClass:"label"},[t._v("图片:")]),t._v(" "),n("div",{staticClass:"control"},[n("post-tweets",{attrs:{imageList:t.postForm.imageList,onImageUploadCallBack:t.onImageUpload}})],1)]),t._v(" "),n("div",{staticClass:"field"},[n("label",{staticClass:"label"},[t._v("地址标签:")]),t._v(" "),n("div",{staticClass:"control"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.postForm.extraData.address,expression:"postForm.extraData.address"}],staticClass:"input",attrs:{type:"text",placeholder:"小区名称或标志性地点（请写正确，方便距离计算，搜索匹配）"},domProps:{value:t.postForm.extraData.address},on:{input:function(e){e.target.composing||t.$set(t.postForm.extraData,"address",e.target.value)}}})])]),t._v(" "),n("div",{staticClass:"field is-grouped"},[n("div",{staticClass:"control"},[n("a",{staticClass:"button is-success",class:{"is-loading":t.publishing},attrs:{disabled:t.publishing},on:{click:t.submitCreate}},[t._v("提交更改")])])])])])]),t._v(" "),n("div",{staticClass:"right-container"},[n("markdown-help")],1)])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("a",{attrs:{href:"/"}},[this._v("首页")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",{staticClass:"is-active"},[e("a",{attrs:{href:"#","aria-current":"page"}},[this._v("主题")])])}],!1,null,"488bb6ec",null);e.default=component.exports}}]);