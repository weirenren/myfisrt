(window.webpackJsonp=window.webpackJsonp||[]).push([[77],{211:function(t,e,r){},212:function(t,e,r){},213:function(t,e,r){},215:function(t,e,r){"use strict";var n={props:{page:{type:Object,default:function(){return{page:1,total:0,limit:20}},required:!0},urlPrefix:{type:String,default:"/",required:!0}},computed:{pageList:function(){var t=this.page.page-2,e=this.page.page+2,r=this.getTotalPage();if(t<=0){for(var n=[],i=1;i<=5&&i<=r;i++)n.push(i);return n}if(e>r){for(var c=[],o=r-5<=0?1:r-5;o>0&&o<=r;o++)c.push(o);return c}return[this.page.page-2,this.page.page-1,this.page.page,this.page.page+1,this.page.page+2]},previousPageUrl:function(){return this.getPreviousPageUrl()},nextPageUrl:function(){return this.getNextPageUrl()}},methods:{getNextPageUrl:function(){var t=this.page.page+1;return t>this.getTotalPage()?"":this.getPageUrl(t)},getPreviousPageUrl:function(){var t=this.page.page-1;return t<=0?"":this.getPageUrl(t)},getPageUrl:function(t){return this.page.page===t?"javascript:void(0)":this.urlPrefix+t},getTotalPage:function(){return this.page.total%this.page.limit>0?parseInt(this.page.total/this.page.limit)+1:this.page.total/this.page.limit}}},c=(r(223),r(28)),component=Object(c.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.page.total>0?r("nav",{staticClass:"pagination is-small",attrs:{role:"navigation","aria-label":"pagination"}},[t.previousPageUrl?r("a",{staticClass:"pagination-previous",attrs:{href:t.previousPageUrl}},[t._v("上一页")]):r("a",{staticClass:"pagination-previous",attrs:{disabled:""}},[t._v("上一页")]),t._v(" "),t.nextPageUrl?r("a",{staticClass:"pagination-previous",attrs:{href:t.nextPageUrl}},[t._v("下一页")]):r("a",{staticClass:"pagination-previous",attrs:{disabled:""}},[t._v("下一页")]),t._v(" "),r("ul",{staticClass:"pagination-list"},t._l(t.pageList,(function(p){return r("li",{key:p},[r("a",{staticClass:"pagination-link",class:{"is-current":p==t.page.page},attrs:{href:t.getPageUrl(p)}},[t._v(t._s(p))])])})),0)]):t._e()}),[],!1,null,"a3f55830",null);e.a=component.exports},223:function(t,e,r){"use strict";var n=r(211);r.n(n).a},224:function(t,e,r){"use strict";var n=r(212);r.n(n).a},225:function(t,e,r){"use strict";var n=r(213);r.n(n).a},226:function(t,e,r){"use strict";r(15);var n=r(2),c=(r(137),{props:{currentNodeId:{type:Number,default:0}},computed:{createTopicUrl:function(){var t="/topic/create";return this.currentNodeId&&(t+="?nodeId="+this.currentNodeId),t}}}),o=(r(224),r(28)),l=Object(o.a)(c,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"aside-actions"})}),[],!1,null,"2af0916a",null).exports,v=r(68),d={components:{PostBtns:l},props:{user:{type:Object,required:!0}},data:function(){return{}},computed:{currentUser:function(){return this.$store.state.user.current},isOwner:function(){var t=this.$store.state.user.current;return this.user&&t&&this.user.id===t.id},isAdmin:function(){return v.a.isOwner(this.currentUser)||v.a.isAdmin(this.currentUser)}},methods:{forbidden:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.post("/api/user/forbidden",{userId:t.user.id,days:7});case 3:t.user.forbidden=!0,t.$toast.success("禁言成功"),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),t.$toast.error("禁言失败");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()},removeForbidden:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.post("/api/user/forbidden",{userId:t.user.id,days:0});case 3:t.user.forbidden=!1,t.$toast.success("取消禁言成功"),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),t.$toast.error("取消禁言失败");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()}}},f=(r(225),Object(o.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"right-container"},[t.isOwner?r("post-btns"):t._e(),t._v(" "),r("div",{staticClass:"widget"},[r("div",{staticClass:"widget-header"},[t._v("\n      "+t._s(t.user.nickname)+"\n    ")]),t._v(" "),r("div",{staticClass:"widget-content"},[r("img",{staticClass:"img-avatar",attrs:{src:t.user.smallAvatar}}),t._v(" "),t.user.description?r("div",{staticClass:"description"},[r("p",[t._v(t._s(t.user.description))])]):t._e(),t._v(" "),r("div",{staticClass:"score"},[r("i",{staticClass:"iconfont icon-score"}),t._v(" "),r("span",[t._v(t._s(t.user.score))]),t._v(" "),t.isOwner?r("a",{staticClass:"score-log",attrs:{href:"/user/scores",target:"_blank"}},[t._v("积分详情>>")]):t._e()]),t._v(" "),t.isOwner?r("ul",{staticClass:"operations"},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2)]):t._e(),t._v(" "),t.isAdmin?r("ul",{staticClass:"operations"},[t.user.forbidden?r("li",[r("i",{staticClass:"iconfont icon-forbidden"}),t._v(" "),r("a",{on:{click:t.removeForbidden}},[t._v(" 取消禁言")])]):r("li",[r("i",{staticClass:"iconfont icon-forbidden"}),t._v(" "),r("a",{on:{click:t.forbidden}},[t._v(" 禁言")])])]):t._e()])])],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("i",{staticClass:"iconfont icon-edit"}),this._v(" "),e("a",{attrs:{href:"/user/settings"}},[this._v(" 编辑资料")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("i",{staticClass:"iconfont icon-message"}),this._v(" "),e("a",{attrs:{href:"/user/messages"}},[this._v(" 消息")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("i",{staticClass:"iconfont icon-favorites"}),this._v(" "),e("a",{attrs:{href:"/user/favorites"}},[this._v(" 收藏")])])}],!1,null,"3d739100",null));e.a=f.exports},252:function(t,e,r){"use strict";var n={props:{articles:{type:Array,default:function(){return[]},required:!1},showAd:{type:Boolean,default:!1}}},c=r(28),component=Object(c.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ul",{staticClass:"article-list"},t._l(t.articles,(function(article,e){return r("li",{key:article.articleId},[t.showAd&&0!==e&&e%3==0?r("div"):t._e(),t._v(" "),r("article",{staticClass:"article-item",attrs:{itemscope:"",itemtype:"http://schema.org/BlogPosting"}},[r("h1",{staticClass:"article-title",attrs:{itemprop:"headline"}},[r("a",{attrs:{href:"/article/"+article.articleId}},[t._v(t._s(article.title))])]),t._v(" "),r("div",{staticClass:"article-summary",attrs:{itemprop:"description"}},[t._v("\n        "+t._s(article.summary)+"\n      ")]),t._v(" "),r("div",{staticClass:"article-meta"},[r("span",{staticClass:"article-meta-item"},[t._v("\n          由\n          "),r("a",{staticClass:"article-author",attrs:{href:"/user/"+article.user.id,itemprop:"author",itemscope:"",itemtype:"http://schema.org/Person"}},[r("span",{attrs:{itemprop:"name"}},[t._v(t._s(article.user.nickname))])]),t._v("发布于\n          "),r("time",{attrs:{datetime:t._f("formatDate")(article.createTime,"yyyy-MM-ddTHH:mm:ss"),itemprop:"datePublished"}},[t._v(t._s(t._f("prettyDate")(article.createTime)))])]),t._v(" "),article.tags&&article.tags.length>0?r("span",{staticClass:"article-meta-item"},t._l(article.tags,(function(e){return r("span",{key:e.tagId,staticClass:"article-tag tag"},[r("a",{attrs:{href:"/articles/"+e.tagId}},[t._v(t._s(e.tagName))])])})),0):t._e(),t._v(" "),2===article.status?r("span",{staticClass:"article-meta-item"},[t._m(0,!0)]):t._e()])])])})),0)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("a",{staticStyle:{cursor:"default","text-decoration":"none",color:"green","font-size":"12px"},attrs:{href:"javascript:void(0)"}},[e("i",{staticClass:"iconfont icon-shenhe"}),this._v(" 审核中")])}],!1,null,"3cde4248",null);e.a=component.exports},533:function(t,e,r){"use strict";r.r(e);r(16),r(9),r(29);var n=r(40),c=(r(15),r(2)),o=r(252),l=r(215),v=r(226),d={components:{ArticleList:o.a,Pagination:l.a,UserCenterSidebar:v.a},asyncData:function(t){return Object(c.a)(regeneratorRuntime.mark((function e(){var r,c,o,l,v,d,f;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$axios,c=t.params,o=t.error,e.prev=1,e.next=4,r.get("/api/user/"+c.userId);case 4:l=e.sent,e.next=11;break;case 7:return e.prev=7,e.t0=e.catch(1),o({statusCode:404,message:e.t0.message||"系统错误"}),e.abrupt("return");case 11:return e.next=13,Promise.all([r.get("/api/article/user/articles",{params:{userId:c.userId,page:c.page}})]);case 13:return v=e.sent,d=Object(n.a)(v,1),f=d[0],e.abrupt("return",{user:l,articlesPage:f});case 17:case"end":return e.stop()}}),e,null,[[1,7]])})))()},computed:{currentUser:function(){return this.$store.state.user.current},isOwner:function(){var t=this.$store.state.user.current;return this.user&&t&&this.user.id===t.id}},head:function(){return{title:this.$siteTitle(this.user.nickname+" - 文章")}}},f=r(28),component=Object(f.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"main"},[r("div",{staticClass:"container main-container is-white left-main"},[r("div",{staticClass:"left-container"},[r("nav",{staticClass:"breadcrumb my-breadcrumb"},[r("ul",[t._m(0),t._v(" "),r("li",[r("a",{attrs:{href:"/user/"+t.user.id+"?tab=articles"}},[t._v(t._s(t.user.nickname))])]),t._v(" "),t._m(1)])]),t._v(" "),r("article-list",{attrs:{articles:t.articlesPage.results}}),t._v(" "),r("pagination",{attrs:{page:t.articlesPage.page,"url-prefix":"/user/"+t.user.id+"/articles/"}})],1),t._v(" "),r("user-center-sidebar",{attrs:{user:t.user}})],1)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("a",{attrs:{href:"article"}},[this._v("首页")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",{staticClass:"is-active"},[e("a",{attrs:{href:"#","aria-current":"page"}},[this._v("文章列表")])])}],!1,null,"65f2b9e6",null);e.default=component.exports}}]);