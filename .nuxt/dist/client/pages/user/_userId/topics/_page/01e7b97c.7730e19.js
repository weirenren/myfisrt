(window.webpackJsonp=window.webpackJsonp||[]).push([[79],{208:function(t,e,n){"use strict";n(93),n(23),n(24),n(9);var r=n(91),o=n(92),c=n(210),l=n.n(c),d=function(){function t(){Object(r.a)(this,t)}return Object(o.a)(t,[{key:"getCity",value:function(){var t=l.a.get("city");return void 0!==t?t:"北京"}},{key:"setCity",value:function(t){return l.a.set("city",t)}},{key:"linkTo",value:function(path){window.location=path}},{key:"toSignin",value:function(t){t||(t=window.location.pathname),this.linkTo("/user/signin?ref="+encodeURIComponent(t))}},{key:"isSigninUrl",value:function(t){return"/user/signin"===t}},{key:"isArray",value:function(t){return"[object Array]"===Object.prototype.toString.call(t)}},{key:"isDate",value:function(t){return"[object Date]"==={}.toString.call(t)&&"Invalid Date"!==t.toString()&&!isNaN(t)}},{key:"isElement",value:function(t){return!(!t||!t.nodeName||1!==t.nodeType)}},{key:"isFunction",value:function(t){return"[object Function]"===Object.prototype.toString.call(t)}},{key:"unique",value:function(t){return t.filter((function(t,e,n){return n.indexOf(t,0)===e}))}},{key:"isNumber",value:function(t){return"[object Number]"===Object.prototype.toString.call(t)&&isFinite(t)}},{key:"isObject",value:function(t){return"[object Object]"===Object.prototype.toString.call(t)}},{key:"isString",value:function(t){return"[object String]"===Object.prototype.toString.call(t)}},{key:"isBoolean",value:function(t){return"boolean"==typeof t}},{key:"getCityList",value:function(){return["北京","上海","深圳","武汉","杭州"]}},{key:"isEmpty",value:function(content){var t=content;if(""===t||void 0===t)return!0;return new RegExp("^[ ]+$").test(t)}},{key:"getTopText",value:function(t){return 1===t?"顶":2===t?"火":3===t?"精华":""}}]),t}();e.a=new d},211:function(t,e,n){},212:function(t,e,n){},214:function(t,e,n){},216:function(t,e,n){"use strict";var r={props:{page:{type:Object,default:function(){return{page:1,total:0,limit:20}},required:!0},urlPrefix:{type:String,default:"/",required:!0}},computed:{pageList:function(){var t=this.page.page-2,e=this.page.page+2,n=this.getTotalPage();if(t<=0){for(var r=[],i=1;i<=5&&i<=n;i++)r.push(i);return r}if(e>n){for(var o=[],c=n-5<=0?1:n-5;c>0&&c<=n;c++)o.push(c);return o}return[this.page.page-2,this.page.page-1,this.page.page,this.page.page+1,this.page.page+2]},previousPageUrl:function(){return this.getPreviousPageUrl()},nextPageUrl:function(){return this.getNextPageUrl()}},methods:{getNextPageUrl:function(){var t=this.page.page+1;return t>this.getTotalPage()?"":this.getPageUrl(t)},getPreviousPageUrl:function(){var t=this.page.page-1;return t<=0?"":this.getPageUrl(t)},getPageUrl:function(t){return this.page.page===t?"javascript:void(0)":this.urlPrefix+t},getTotalPage:function(){return this.page.total%this.page.limit>0?parseInt(this.page.total/this.page.limit)+1:this.page.total/this.page.limit}}},o=(n(227),n(29)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.page.total>0?n("nav",{staticClass:"pagination is-small",attrs:{role:"navigation","aria-label":"pagination"}},[t.previousPageUrl?n("a",{staticClass:"pagination-previous",attrs:{href:t.previousPageUrl}},[t._v("上一页")]):n("a",{staticClass:"pagination-previous",attrs:{disabled:""}},[t._v("上一页")]),t._v(" "),t.nextPageUrl?n("a",{staticClass:"pagination-previous",attrs:{href:t.nextPageUrl}},[t._v("下一页")]):n("a",{staticClass:"pagination-previous",attrs:{disabled:""}},[t._v("下一页")]),t._v(" "),n("ul",{staticClass:"pagination-list"},t._l(t.pageList,(function(p){return n("li",{key:p},[n("a",{staticClass:"pagination-link",class:{"is-current":p==t.page.page},attrs:{href:t.getPageUrl(p)}},[t._v(t._s(p))])])})),0)]):t._e()}),[],!1,null,"a3f55830",null);e.a=component.exports},219:function(t,e,n){"use strict";n(16);var r=n(2),o=(n(232),n(228)),c=n(230),l=n(231),d=n(208);o.c.add(l.b,l.a);var f={components:{},props:{id:{type:String},title:{type:String,required:!1},onCollapsed:{type:Function,required:!1}},data:function(){return{isCollapsed:!0}},watch:{isCollapsed:function(t){this.onCollapsed&&this.onCollapsed(t)}},mounted:function(){this.id},methods:{getCollapseState:function(){return this.isCollapsed},saveCollapsedState:function(t){console.log(t);this.getCollapseState()}}},v=(n(247),n(29)),h=(Object(v.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"card"},[n("header",{staticClass:"card-header"},[t._t("title")],2),t._v(" "),n("div",{staticClass:"card-content",class:{"is-hidden":t.isCollapsed}},[t.isCollapsed?t._e():t._t("default")],2),t._v(" "),t.isCollapsed?t._e():n("footer",{staticClass:"card-footer"},[t._t("footer")],2)])}),[],!1,null,"fe043d22",null).exports,n(137),{components:{},props:{createTime:{type:Number},hide:{type:Boolean,required:!1}},data:function(){return{isCollapsed:!0}},watch:{isCollapsed:function(t){this.onCollapsed&&this.onCollapsed(t)}},mounted:function(){this.id},methods:{prettyDate:function(t){var e=864e5,n=(new Date).getTime()-t;return n/6e4<1?"刚刚":n/6e4<60?parseInt(n/6e4)+"分钟前":n/36e5<=24?parseInt(n/36e5)+"小时前":n/e<=7?"一周以内":n/e<=30?"一个月以内":n/e<=180?"半年以内":n/e<=360?"一年以内":"一年以前"}}}),m=Object(v.a)(h,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{staticClass:"comment-time"},[t.hide?n("span",[t._v("\n    "+t._s(t.prettyDate(t.createTime))+"\n  ")]):n("time",{attrs:{datetime:t._f("formatDate")(t.createTime,"yyyy-MM-ddTHH:mm:ss"),itemprop:"datePublished"}},[t._v(t._s(t._f("prettyDate")(t.createTime)))])])}),[],!1,null,"22aab805",null).exports;o.c.add(l.b,l.a);var _={components:{FontAwesomeIcon:c.a,SectionTime:m},props:{topics:{type:Array,default:function(){return[]},required:!1},showAd:{type:Boolean,default:!1},openNewPage:{type:Boolean,default:!1}},data:function(){return{blank:"",isCollapsed:!0,isCollapsedArray:[]}},watch:{topics:function(t,e){this.topics&&void 0!==this.topics.length&&(this.isCollapsedArray=new Array(this.topics.length).fill(!0))}},mounted:function(){this.openNewPage&&(this.blank="_blank"),this.topics&&this.topics.length>0&&(this.isCollapsedArray=new Array(this.topics.length).fill(!0))},methods:{clickCollapse:function(t){var e=this;return Object(r.a)(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(void 0===e.topics[t].content){n.next=3;break}n.next=13;break;case 3:return n.prev=3,n.next=6,e.$axios.get("/api/topic/"+e.topics[t].topicId);case 6:r=n.sent,e.topics[t].content=r.content,e.topics[t].imageList=r.imageList,n.next=13;break;case 11:n.prev=11,n.t0=n.catch(3);case 13:e.$set(e.isCollapsedArray,t,!e.isCollapsedArray[t]);case 14:case"end":return n.stop()}}),n,null,[[3,11]])})))()},getTopText:function(t){var e=t.topType?t.topType:0;return d.a.getTopText(e)},onCollapseBack:function(t){console.log(t)},like:function(t){var e=this;return Object(r.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e.isCollapsed=!e.isCollapsed,n.prev=1,n.next=4,e.$axios.post("/api/topic/like/"+t.topicId);case 4:t.liked=!0,t.likeCount++,n.next=11;break;case 8:n.prev=8,n.t0=n.catch(1),1===n.t0.errorCode?e.$toast.info("请登录后点赞！！！",{action:{text:"去登录",onClick:function(t,e){d.a.toSignin()}}}):e.$toast.error(n.t0.message||n.t0);case 11:case"end":return n.stop()}}),n,null,[[1,8]])})))()}}},C=(n(248),Object(v.a)(_,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ul",{staticClass:"topic-list topic-wrap"},t._l(t.topics,(function(e,o){return r("li",{key:e.topicId,staticClass:"topic-item",attrs:{index:o}},[r("article",{attrs:{itemscope:"",itemtype:"http://schema.org/BlogPosting"}},[r("div",{staticClass:"topic-header"},[r("div",{staticClass:"topic-header-left"},[-1===e.user.id?r("a",[r("img",{staticClass:"avatar",attrs:{alt:"90社区",src:n(246)}})]):r("a",{attrs:{href:"/user/"+e.user.id,title:e.user.nickname}},[r("img",{staticClass:"avatar",attrs:{src:e.user.smallAvatar}})])]),t._v(" "),r("div",{staticClass:"topic-header-center"},[r("h1",{staticClass:"topic-title",attrs:{itemprop:"headline"}},[e.node&&2===e.node.nodeId?r("a",{attrs:{target:t.blank,href:"/rent/"+e.topicId,title:e.title}},[t._v(t._s(e.title))]):e.node&&1===e.node.nodeId?r("a",{attrs:{target:t.blank,href:"/love/"+e.topicId,title:e.title}},[t._v(t._s(e.title))]):r("a",{attrs:{target:t.blank,href:"/topic/"+e.topicId,title:e.title}},[t._v(t._s(e.title))]),t._v(" "),r("span",{class:0!==e.topType?"text-top":""},[t._v(t._s(t.getTopText(e)))])]),t._v(" "),r("div",{staticClass:"topic-meta"},[r("span",{staticClass:"meta-item"},[r("SectionTime",{attrs:{"create-time":e.createTime,hide:e.node&&1===e.node.nodeId}})],1),t._v(" "),r("span",{staticClass:"meta-item"}),t._v(" "),r("span",{staticClass:"meta-item"},[t._l(e.tags,(function(e){return r("span",{key:e.tagName+e.tagId,staticClass:"tag"},[r("a",[t._v(t._s(e.tagName))])])})),t._v(" "),e.node&&2===e.node.nodeId?r("span",{attrs:{target:t.blank}},[r("a",{staticClass:"tag",on:{click:function(e){return t.clickCollapse(o)}}},[t._v("展开 \n                  "),t.isCollapsedArray[o]?t._e():r("font-awesome-icon",{attrs:{icon:"angle-down"}}),t._v(" "),t.isCollapsedArray[o]?r("font-awesome-icon",{attrs:{icon:"angle-up"}}):t._e()],1)]):t._e()],2)])]),t._v(" "),r("div",{staticClass:"topic-header-right"},[r("div",{staticClass:"like"},[r("span",{staticClass:"like-btn",class:{liked:e.liked},on:{click:function(n){return t.like(e)}}},[r("i",{staticClass:"iconfont icon-like"})]),t._v(" "),e.likeCount?r("span",{staticClass:"like-count"},[t._v(t._s(e.likeCount))]):t._e()]),t._v(" "),r("span",{staticClass:"count"},[t._v(t._s(e.commentCount)+" / "+t._s(e.viewCount))])])]),t._v(" "),r("div",{staticClass:"card-content",class:{"is-hidden":t.isCollapsedArray[o]}},[r("div",{staticStyle:{"font-size":"13px",color:"black"},domProps:{innerHTML:t._s(e.content)}}),t._v(" "),e.imageList&&e.imageList.length>0?r("a",{staticStyle:{"font-size":"12px",color:"red","text-decoration":"underline"},attrs:{target:t.blank,href:"/rent/"+e.topicId}},[t._v("\n          (有图，点击查看)\n        ")]):r("div",{staticStyle:{"font-size":"12px",color:"red"}},[t._v("\n          (无图）\n        ")])])])])})),0)}),[],!1,null,"723a838b",null));e.a=C.exports},220:function(t,e,n){"use strict";var r=n(211);n.n(r).a},221:function(t,e,n){"use strict";var r=n(212);n.n(r).a},222:function(t,e,n){"use strict";n(16);var r=n(2),o=(n(137),{props:{currentNodeId:{type:Number,default:0}},computed:{createTopicUrl:function(){var t="/topic/create";return this.currentNodeId&&(t+="?nodeId="+this.currentNodeId),t}}}),c=(n(220),n(29)),l=Object(c.a)(o,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"aside-actions"})}),[],!1,null,"2af0916a",null).exports,d=n(68),f={components:{PostBtns:l},props:{user:{type:Object,required:!0}},data:function(){return{}},computed:{currentUser:function(){return this.$store.state.user.current},isOwner:function(){var t=this.$store.state.user.current;return this.user&&t&&this.user.id===t.id},isAdmin:function(){return d.a.isOwner(this.currentUser)||d.a.isAdmin(this.currentUser)}},methods:{forbidden:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.post("/api/user/forbidden",{userId:t.user.id,days:7});case 3:t.user.forbidden=!0,t.$toast.success("禁言成功"),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),t.$toast.error("禁言失败");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()},removeForbidden:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.post("/api/user/forbidden",{userId:t.user.id,days:0});case 3:t.user.forbidden=!1,t.$toast.success("取消禁言成功"),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),t.$toast.error("取消禁言失败");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()}}},v=(n(221),Object(c.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"right-container"},[t.isOwner?n("post-btns"):t._e(),t._v(" "),n("div",{staticClass:"widget"},[n("div",{staticClass:"widget-header"},[t._v("\n      "+t._s(t.user.nickname)+"\n    ")]),t._v(" "),n("div",{staticClass:"widget-content"},[n("img",{staticClass:"img-avatar",attrs:{src:t.user.smallAvatar}}),t._v(" "),t.user.description?n("div",{staticClass:"description"},[n("p",[t._v(t._s(t.user.description))])]):t._e(),t._v(" "),n("div",{staticClass:"score"},[n("i",{staticClass:"iconfont icon-score"}),t._v(" "),n("span",[t._v(t._s(t.user.score))]),t._v(" "),t.isOwner?n("a",{staticClass:"score-log",attrs:{href:"/user/scores",target:"_blank"}},[t._v("积分详情>>")]):t._e()]),t._v(" "),t.isOwner?n("ul",{staticClass:"operations"},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2)]):t._e(),t._v(" "),t.isAdmin?n("ul",{staticClass:"operations"},[t.user.forbidden?n("li",[n("i",{staticClass:"iconfont icon-forbidden"}),t._v(" "),n("a",{on:{click:t.removeForbidden}},[t._v(" 取消禁言")])]):n("li",[n("i",{staticClass:"iconfont icon-forbidden"}),t._v(" "),n("a",{on:{click:t.forbidden}},[t._v(" 禁言")])])]):t._e()])])],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("i",{staticClass:"iconfont icon-edit"}),this._v(" "),e("a",{attrs:{href:"/user/settings"}},[this._v(" 编辑资料")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("i",{staticClass:"iconfont icon-message"}),this._v(" "),e("a",{attrs:{href:"/user/messages"}},[this._v(" 消息")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("i",{staticClass:"iconfont icon-favorites"}),this._v(" "),e("a",{attrs:{href:"/user/favorites"}},[this._v(" 收藏")])])}],!1,null,"3d739100",null));e.a=v.exports},225:function(t,e,n){},226:function(t,e,n){},227:function(t,e,n){"use strict";var r=n(214);n.n(r).a},232:function(t,e,n){var r=n(6);r(r.P,"Array",{fill:n(233)}),n(94)("fill")},233:function(t,e,n){"use strict";var r=n(32),o=n(138),c=n(19);t.exports=function(t){for(var e=r(this),n=c(e.length),l=arguments.length,d=o(l>1?arguments[1]:void 0,n),f=l>2?arguments[2]:void 0,v=void 0===f?n:o(f,n);v>d;)e[d++]=t;return e}},246:function(t,e,n){t.exports=n.p+"img/douban.4b75e01.png"},247:function(t,e,n){"use strict";var r=n(225);n.n(r).a},248:function(t,e,n){"use strict";var r=n(226);n.n(r).a},603:function(t,e,n){"use strict";n.r(e);n(17),n(9),n(30);var r=n(41),o=(n(16),n(2)),c=n(219),l=n(216),d=n(222),f={components:{TopicList:c.a,Pagination:l.a,UserCenterSidebar:d.a},asyncData:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){var n,o,c,l,d,f,v;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$axios,o=t.params,c=t.error,e.prev=1,e.next=4,n.get("/api/user/"+o.userId);case 4:l=e.sent,e.next=11;break;case 7:return e.prev=7,e.t0=e.catch(1),c({statusCode:404,message:e.t0.message||"系统错误"}),e.abrupt("return");case 11:return e.next=13,Promise.all([n.get("/api/topic/user/topics",{params:{userId:o.userId,page:o.page}})]);case 13:return d=e.sent,f=Object(r.a)(d,1),v=f[0],e.abrupt("return",{user:l,topicsPage:v});case 17:case"end":return e.stop()}}),e,null,[[1,7]])})))()},computed:{currentUser:function(){return this.$store.state.user.current},isOwner:function(){var t=this.$store.state.user.current;return this.user&&t&&this.user.id===t.id}},head:function(){return{title:this.$siteTitle(this.user.nickname+" - 话题")}}},v=n(29),component=Object(v.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"main"},[n("div",{staticClass:"container main-container is-white left-main"},[n("div",{staticClass:"left-container"},[n("nav",{staticClass:"breadcrumb my-breadcrumb"},[n("ul",[t._m(0),t._v(" "),n("li",[n("a",{attrs:{href:"/user/"+t.user.id+"?tab=topics"}},[t._v(t._s(t.user.nickname))])]),t._v(" "),t._m(1)])]),t._v(" "),n("topic-list",{attrs:{topics:t.topicsPage.results}}),t._v(" "),n("pagination",{attrs:{page:t.topicsPage.page,"url-prefix":"/user/"+t.user.id+"/topics/"}})],1),t._v(" "),n("user-center-sidebar",{attrs:{user:t.user}})],1)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("a",{attrs:{href:"article"}},[this._v("首页")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",{staticClass:"is-active"},[e("a",{attrs:{href:"#","aria-current":"page"}},[this._v("话题列表")])])}],!1,null,"708f06ca",null);e.default=component.exports}}]);