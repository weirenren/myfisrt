(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{204:function(t,e,n){},206:function(t,e,n){},209:function(t,e,n){"use strict";var r={computed:{config:function(){return this.$store.state.config.config}}},c=(n(215),n(48)),component=Object(c.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return this.config.siteNotification?e("div",{staticClass:"widget"},[e("div",{staticClass:"widget-header"},[this._v("公告")]),this._v(" "),e("div",{staticClass:"widget-content content notice-content"},[e("p",{domProps:{innerHTML:this._s(this.config.siteNotification)}})])]):this._e()}),[],!1,null,"05bf6a1c",null);e.a=component.exports},210:function(t,e,n){"use strict";var r={props:{page:{type:Object,default:function(){return{page:1,total:0,limit:20}},required:!0},urlPrefix:{type:String,default:"/",required:!0}},computed:{pageList:function(){var t=this.page.page-2,e=this.page.page+2,n=this.getTotalPage();if(t<=0){for(var r=[],i=1;i<=5&&i<=n;i++)r.push(i);return r}if(e>n){for(var c=[],o=n-5<=0?1:n-5;o>0&&o<=n;o++)c.push(o);return c}return[this.page.page-2,this.page.page-1,this.page.page,this.page.page+1,this.page.page+2]},previousPageUrl:function(){return this.getPreviousPageUrl()},nextPageUrl:function(){return this.getNextPageUrl()}},methods:{getNextPageUrl:function(){var t=this.page.page+1;return t>this.getTotalPage()?"":this.getPageUrl(t)},getPreviousPageUrl:function(){var t=this.page.page-1;return t<=0?"":this.getPageUrl(t)},getPageUrl:function(t){return this.page.page===t?"javascript:void(0)":this.urlPrefix+t},getTotalPage:function(){return this.page.total%this.page.limit>0?parseInt(this.page.total/this.page.limit)+1:this.page.total/this.page.limit}}},c=(n(217),n(48)),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.page.total>0?n("nav",{staticClass:"pagination is-small",attrs:{role:"navigation","aria-label":"pagination"}},[t.previousPageUrl?n("a",{staticClass:"pagination-previous",attrs:{href:t.previousPageUrl}},[t._v("上一页")]):n("a",{staticClass:"pagination-previous",attrs:{disabled:""}},[t._v("上一页")]),t._v(" "),t.nextPageUrl?n("a",{staticClass:"pagination-previous",attrs:{href:t.nextPageUrl}},[t._v("下一页")]):n("a",{staticClass:"pagination-previous",attrs:{disabled:""}},[t._v("下一页")]),t._v(" "),n("ul",{staticClass:"pagination-list"},t._l(t.pageList,(function(p){return n("li",{key:p},[n("a",{staticClass:"pagination-link",class:{"is-current":p==t.page.page},attrs:{href:t.getPageUrl(p)}},[t._v(t._s(p))])])})),0)]):t._e()}),[],!1,null,"a3f55830",null);e.a=component.exports},215:function(t,e,n){"use strict";var r=n(204);n.n(r).a},217:function(t,e,n){"use strict";var r=n(206);n.n(r).a},508:function(t,e,n){"use strict";n.r(e);n(16),n(8),n(26);var r=n(39),c=(n(15),n(2)),o=n(210),l=n(209),v={components:{Pagination:o.a,SiteNotice:l.a},asyncData:function(t){return Object(c.a)(regeneratorRuntime.mark((function e(){var n,c,o,l,v;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$axios,c=t.params,e.next=3,Promise.all([n.get("/api/tag/tags",{params:{page:c.page}})]);case 3:return o=e.sent,l=Object(r.a)(o,1),v=l[0],e.abrupt("return",{tagsPage:v});case 7:case"end":return e.stop()}}),e)})))()},head:function(){return{title:this.$siteTitle("标签")}}},f=n(48),component=Object(f.a)(v,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"main"},[n("div",{staticClass:"container"},[n("div",{staticClass:"columns"},[n("div",{staticClass:"column is-9"},[n("div",{staticClass:"main-body"},[n("div",{staticClass:"widget"},[t._m(0),t._v(" "),n("div",{staticClass:"widget-content"},[n("div",{staticClass:"tags are-medium"},t._l(t.tagsPage.results,(function(e){return n("span",{key:e.tagId,staticClass:"tag is-normal"},[n("a",{attrs:{href:"/articles/"+e.tagId,title:e.tagName,target:"_blank"}},[t._v(t._s(e.tagName))])])})),0)]),t._v(" "),n("pagination",{attrs:{page:t.tagsPage.page,"url-prefix":"/tags/"}})],1)])]),t._v(" "),n("div",{staticClass:"column is-3"},[n("div",{staticClass:"main-aside"},[n("site-notice")],1)])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"widget-header"},[e("span",[this._v("标签")])])}],!1,null,"1ca98b80",null);e.default=component.exports}}]);