(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{290:function(t,e,n){},415:function(t,e,n){"use strict";var r=n(290);n.n(r).a},550:function(t,e,n){"use strict";n.r(e);var r=[function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("img",{staticStyle:{"max-width":"100px"},attrs:{src:n(134)}})])}],c=(n(17),n(9),n(30),n(40)),l=(n(16),n(2)),o={asyncData:function(t){return Object(l.a)(regeneratorRuntime.mark((function e(){var n,r,l,o,d,m;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$axios,r=t.query,e.next=3,Promise.all([n.get("/api/article/recommend"),n.get("/api/topic/recommend")]);case 3:return l=e.sent,o=Object(c.a)(l,2),d=o[0],m=o[1],e.abrupt("return",{url:r.url,recommendArticles:d,recommendTopics:m});case 8:case"end":return e.stop()}}),e)})))()}},d=(n(415),n(29)),component=Object(d.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"main"},[n("div",{staticClass:"container"},[n("div",{staticClass:"main-body"},[n("div",{staticStyle:{"text-align":"center","vertical-align":"center","margin-top":"100px"}},[t._m(0),t._v(" "),n("div",{staticStyle:{"margin-top":"20px"}},[n("a",{attrs:{href:t.url,rel:"nofollow"}},[t._v("即将跳往站外地址，点击该链接继续跳转>>")])]),t._v(" "),n("div",{staticClass:"columns recommend"},[n("div",{staticClass:"column"},[t.recommendArticles&&t.recommendArticles.length?n("div",{staticClass:"widget"},[n("div",{staticClass:"widget-header"},[t._v("\n                推荐文章\n              ")]),t._v(" "),n("div",{staticClass:"widget-content"},[n("ul",t._l(t.recommendArticles,(function(a){return n("li",{key:a.articleId},[n("a",{attrs:{href:"/article/"+a.articleId,title:a.title,target:"_blank"}},[t._v(t._s(a.title))])])})),0)])]):t._e()]),t._v(" "),n("div",{staticClass:"column"},[t.recommendTopics&&t.recommendTopics.length?n("div",{staticClass:"widget"},[n("div",{staticClass:"widget-header"},[t._v("\n                推荐话题\n              ")]),t._v(" "),n("div",{staticClass:"widget-content"},[n("ul",t._l(t.recommendTopics,(function(e){return n("li",{key:e.topicId},[n("a",{attrs:{href:"/topic/"+e.topicId,title:e.title,target:"_blank"}},[t._v(t._s(e.title))])])})),0)])]):t._e()])])])])])])}),r,!1,null,"076dfcfe",null);e.default=component.exports}}]);