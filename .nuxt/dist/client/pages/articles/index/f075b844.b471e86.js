(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{204:function(t,e,r){},209:function(t,e,r){"use strict";var n={computed:{config:function(){return this.$store.state.config.config}}},c=(r(215),r(49)),component=Object(c.a)(n,(function(){var t=this.$createElement,e=this._self._c||t;return this.config.siteNotification?e("div",{staticClass:"widget"},[e("div",{staticClass:"widget-header"},[this._v("公告")]),this._v(" "),e("div",{staticClass:"widget-content content notice-content"},[e("p",{domProps:{innerHTML:this._s(this.config.siteNotification)}})])]):this._e()}),[],!1,null,"05bf6a1c",null);e.a=component.exports},215:function(t,e,r){"use strict";var n=r(204);r.n(n).a},216:function(t,e,r){},230:function(t,e,r){"use strict";var n=r(216);r.n(n).a},239:function(t,e,r){"use strict";var n={props:{articles:{type:Array,default:function(){return[]},required:!1},showAd:{type:Boolean,default:!1}}},c=r(49),component=Object(c.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ul",{staticClass:"article-list"},t._l(t.articles,(function(article,e){return r("li",{key:article.articleId},[t.showAd&&0!==e&&e%3==0?r("div"):t._e(),t._v(" "),r("article",{staticClass:"article-item",attrs:{itemscope:"",itemtype:"http://schema.org/BlogPosting"}},[r("h1",{staticClass:"article-title",attrs:{itemprop:"headline"}},[r("a",{attrs:{href:"/article/"+article.articleId}},[t._v(t._s(article.title))])]),t._v(" "),r("div",{staticClass:"article-summary",attrs:{itemprop:"description"}},[t._v("\n        "+t._s(article.summary)+"\n      ")]),t._v(" "),r("div",{staticClass:"article-meta"},[r("span",{staticClass:"article-meta-item"},[t._v("\n          由\n          "),r("a",{staticClass:"article-author",attrs:{href:"/user/"+article.user.id,itemprop:"author",itemscope:"",itemtype:"http://schema.org/Person"}},[r("span",{attrs:{itemprop:"name"}},[t._v(t._s(article.user.nickname))])]),t._v("发布于\n          "),r("time",{attrs:{datetime:t._f("formatDate")(article.createTime,"yyyy-MM-ddTHH:mm:ss"),itemprop:"datePublished"}},[t._v(t._s(t._f("prettyDate")(article.createTime)))])]),t._v(" "),article.tags&&article.tags.length>0?r("span",{staticClass:"article-meta-item"},t._l(article.tags,(function(e){return r("span",{key:e.tagId,staticClass:"article-tag tag"},[r("a",{attrs:{href:"/articles/"+e.tagId}},[t._v(t._s(e.tagName))])])})),0):t._e(),t._v(" "),2===article.status?r("span",{staticClass:"article-meta-item"},[t._m(0,!0)]):t._e()])])])})),0)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("a",{staticStyle:{cursor:"default","text-decoration":"none",color:"green","font-size":"12px"},attrs:{href:"javascript:void(0)"}},[e("i",{staticClass:"iconfont icon-shenhe"}),this._v(" 审核中")])}],!1,null,"3cde4248",null);e.a=component.exports},240:function(t,e,r){"use strict";r(15);var n=r(2),c={props:{url:{type:String,required:!0},params:{type:Object,default:function(){return{}}},initData:{type:Object,default:function(){return{results:[],cursor:""}}}},data:function(){return{cursor:this.initData.cursor,results:this.initData.results||[],hasMore:!0,loading:!1}},computed:{disabled:function(){return this.loading||!this.hasMore}},methods:{loadMore:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.loading=!0,e.prev=1,r=Object.assign(t.params||{},{cursor:t.cursor}),e.next=5,t.$axios.get(t.url,{params:r});case 5:n=e.sent,t.cursor=n.cursor,n.results&&n.results.length?n.results.forEach((function(e){t.results.push(e)})):t.hasMore=!1,e.next=14;break;case 10:e.prev=10,e.t0=e.catch(1),t.hasMore=!1,console.error(e.t0);case 14:return e.prev=14,t.loading=!1,e.finish(14);case 17:case"end":return e.stop()}}),e,null,[[1,10,14,17]])})))()},unshiftResults:function(t){t&&this.results.unshift(t)},pushResults:function(t){t&&this.results.push(t)}}},o=(r(230),r(49)),component=Object(o.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{directives:[{name:"infinite-scroll",rawName:"v-infinite-scroll",value:t.loadMore,expression:"loadMore"}],staticClass:"load-more",attrs:{"infinite-scroll-disabled":"disabled","infinite-scroll-distance":"10"}},[t._t("default",null,{results:t.results}),t._v(" "),t.loading?r("div",{staticClass:"load-more-loading"},[r("div",{staticClass:"loading-animation"}),t._v(" "),r("span",{staticClass:"load-more-text"},[t._v("加载中...")])]):t._e()],2)}),[],!1,null,"d1c148c2",null);e.a=component.exports},461:function(t,e,r){"use strict";r.r(e);r(16),r(8),r(26);var n=r(39),c=(r(15),r(2)),o=r(239),l=r(209),d=r(240),f={components:{ArticleList:o.a,SiteNotice:l.a,LoadMore:d.a},asyncData:function(t){return Object(c.a)(regeneratorRuntime.mark((function e(){var r,c,o,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$axios,e.prev=1,e.next=4,Promise.all([r.get("/api/article/articles")]);case 4:return c=e.sent,o=Object(n.a)(c,1),l=o[0],e.abrupt("return",{articlesPage:l});case 10:e.prev=10,e.t0=e.catch(1),console.error(e.t0);case 13:case"end":return e.stop()}}),e,null,[[1,10]])})))()},head:function(){return{title:this.$siteTitle("文章"),meta:[{hid:"description",name:"description",content:this.$siteDescription()},{hid:"keywords",name:"keywords",content:this.$siteKeywords()}]}}},h=r(49),component=Object(h.a)(f,(function(){var t=this.$createElement,e=this._self._c||t;return e("section",{staticClass:"main"},[e("div",{staticClass:"container main-container is-white left-main size-320"},[e("div",{staticClass:"left-container"},[e("load-more",{attrs:{"init-data":this.articlesPage,url:"/api/article/articles"},scopedSlots:this._u([{key:"default",fn:function(t){var r=t.results;return[e("article-list",{attrs:{articles:r,"show-ad":!0}})]}}])})],1),this._v(" "),e("div",{staticClass:"right-container"},[e("site-notice")],1)])])}),[],!1,null,"36a5077a",null);e.default=component.exports}}]);