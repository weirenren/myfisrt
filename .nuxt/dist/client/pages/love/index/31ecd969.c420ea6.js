/*! For license information please see ../../../LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{240:function(t,e,n){"use strict";e.parse=function(t,e){if("string"!=typeof t)throw new TypeError("argument str must be a string");for(var n={},o=e||{},l=t.split(c),f=o.decode||r,i=0;i<l.length;i++){var h=l[i],m=h.indexOf("=");if(!(m<0)){var w=h.substr(0,m).trim(),v=h.substr(++m,h.length).trim();'"'==v[0]&&(v=v.slice(1,-1)),null==n[w]&&(n[w]=d(v,f))}}return n},e.serialize=function(t,e,n){var r=n||{},c=r.encode||o;if("function"!=typeof c)throw new TypeError("option encode is invalid");if(!l.test(t))throw new TypeError("argument name is invalid");var d=c(e);if(d&&!l.test(d))throw new TypeError("argument val is invalid");var f=t+"="+d;if(null!=r.maxAge){var h=r.maxAge-0;if(isNaN(h)||!isFinite(h))throw new TypeError("option maxAge is invalid");f+="; Max-Age="+Math.floor(h)}if(r.domain){if(!l.test(r.domain))throw new TypeError("option domain is invalid");f+="; Domain="+r.domain}if(r.path){if(!l.test(r.path))throw new TypeError("option path is invalid");f+="; Path="+r.path}if(r.expires){if("function"!=typeof r.expires.toUTCString)throw new TypeError("option expires is invalid");f+="; Expires="+r.expires.toUTCString()}r.httpOnly&&(f+="; HttpOnly");r.secure&&(f+="; Secure");if(r.sameSite){switch("string"==typeof r.sameSite?r.sameSite.toLowerCase():r.sameSite){case!0:f+="; SameSite=Strict";break;case"lax":f+="; SameSite=Lax";break;case"strict":f+="; SameSite=Strict";break;case"none":f+="; SameSite=None";break;default:throw new TypeError("option sameSite is invalid")}}return f};var r=decodeURIComponent,o=encodeURIComponent,c=/; */,l=/^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;function d(t,e){try{return e(t)}catch(e){return t}}},283:function(t,e,n){},369:function(t,e,n){"use strict";var r=n(283);n.n(r).a},480:function(t,e,n){"use strict";n.r(e);n(16),n(9),n(29);var r=n(40),o=(n(15),n(2)),c=n(240),l=n.n(c),d=(n(214),n(227),n(228),n(218)),f=(n(234),n(215)),h=(n(207),{components:{TopicList:d.a,Pagination:f.a},asyncData:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){var n,o,c,d,f,h,m,w;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$axios,o=t.query,c=t.req,d="北京",void 0!==c.headers&&(f=l.a.parse(c.headers.cookie||""))&&""!==f&&(d=f.city),void 0===d&&(d="北京"),e.prev=4,e.next=7,Promise.all([n.get("/api/topic/node/topics",{params:{page:o.p||1,nodeId:1,city:d}})]);case 7:return h=e.sent,m=Object(r.a)(h,1),w=m[0],e.abrupt("return",{topicsPage:w});case 13:e.prev=13,e.t0=e.catch(4),console.error(e.t0);case 16:case"end":return e.stop()}}),e,null,[[4,13]])})))()},computed:{user:function(){return this.$store.state.user.current}},mounted:function(){},updated:function(){this.loading()},methods:{loading:function(){if(!this.$store.state.user.current)this.$loading.show({container:this.$refs.loadingContainer,canCancel:!1},{default:this.$createElement("div",["登录后才能查看"])})},jumpUrl:function(t){t&&window.open(t)},twitterCreated:function(data){this.topicsPage&&(this.topicsPage.results?this.topicsPage.results.unshift(data):this.topicsPage.results=[data])}},head:function(){return{title:this.$siteTitle("90社区-单身交友"),meta:[{hid:"description",name:"description",content:this.$siteDescription()},{hid:"keywords",name:"keywords",content:this.$siteKeywords()}]}}}),m=(n(369),n(28)),component=Object(m.a)(h,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"main"},[n("div",{staticClass:"container main-container left-main"},[n("div",{staticClass:"left-container"},[n("div",{staticClass:"main-content"},[n("a",{staticClass:"button is-small",on:{click:function(e){return t.jumpUrl("https://www.jianshu.com/p/c1d5d3c04b8b")}}},[t._v("\n          脱单攻略\n        ")]),t._v(" "),n("div",{ref:"loadingContainer",staticClass:"vld-parent"},[t.topicsPage?n("topic-list",{attrs:{topics:t.topicsPage.results,"show-ad":!0}}):t._e(),t._v(" "),t.topicsPage?n("pagination",{attrs:{page:t.topicsPage.page,"url-prefix":"/love?p="}}):t._e()],1)])])])])}),[],!1,null,"c91e03c6",null);e.default=component.exports}}]);