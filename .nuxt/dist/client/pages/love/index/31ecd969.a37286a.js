/*! For license information please see ../../../LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{269:function(e,t,n){"use strict";t.parse=function(e,t){if("string"!=typeof e)throw new TypeError("argument str must be a string");for(var n={},o=t||{},l=e.split(c),f=o.decode||r,i=0;i<l.length;i++){var w=l[i],m=w.indexOf("=");if(!(m<0)){var h=w.substr(0,m).trim(),v=w.substr(++m,w.length).trim();'"'==v[0]&&(v=v.slice(1,-1)),null==n[h]&&(n[h]=d(v,f))}}return n},t.serialize=function(e,t,n){var r=n||{},c=r.encode||o;if("function"!=typeof c)throw new TypeError("option encode is invalid");if(!l.test(e))throw new TypeError("argument name is invalid");var d=c(t);if(d&&!l.test(d))throw new TypeError("argument val is invalid");var f=e+"="+d;if(null!=r.maxAge){var w=r.maxAge-0;if(isNaN(w)||!isFinite(w))throw new TypeError("option maxAge is invalid");f+="; Max-Age="+Math.floor(w)}if(r.domain){if(!l.test(r.domain))throw new TypeError("option domain is invalid");f+="; Domain="+r.domain}if(r.path){if(!l.test(r.path))throw new TypeError("option path is invalid");f+="; Path="+r.path}if(r.expires){if("function"!=typeof r.expires.toUTCString)throw new TypeError("option expires is invalid");f+="; Expires="+r.expires.toUTCString()}r.httpOnly&&(f+="; HttpOnly");r.secure&&(f+="; Secure");if(r.sameSite){switch("string"==typeof r.sameSite?r.sameSite.toLowerCase():r.sameSite){case!0:f+="; SameSite=Strict";break;case"lax":f+="; SameSite=Lax";break;case"strict":f+="; SameSite=Strict";break;case"none":f+="; SameSite=None";break;default:throw new TypeError("option sameSite is invalid")}}return f};var r=decodeURIComponent,o=encodeURIComponent,c=/; */,l=/^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;function d(e,t){try{return t(e)}catch(t){return e}}},271:function(e,t,n){},352:function(e,t,n){"use strict";var r=n(271);n.n(r).a},461:function(e,t,n){"use strict";n.r(t);n(16),n(8),n(26);var r=n(39),o=(n(15),n(2)),c=n(269),l=n.n(c),d=n(209),f=n(213),w=n(221),m=n(214),h=n(222),v=n(210),y=(n(200),{components:{Carousel:function(){return n.e(3).then(n.t.bind(null,454,7)).then((function(e){return e.Carousel})).catch()},Slide:function(){return n.e(3).then(n.t.bind(null,454,7)).then((function(e){return e.Slide})).catch()},SiteNotice:d.a,ScoreRank:f.a,FriendLinks:w.a,TopicList:m.a,TweetsWidget:h.a,Pagination:v.a},asyncData:function(e){return Object(o.a)(regeneratorRuntime.mark((function t(){var n,o,c,d,f,w,m,h,v,y,k,S;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.$axios,o=e.query,c=e.req,d="北京",void 0!==c.headers&&(f=l.a.parse(c.headers.cookie||""))&&""!==f&&(d=f.city),void 0===d&&(d="北京"),t.prev=4,t.next=7,Promise.all([n.get("/api/topic/nodes"),n.get("/api/topic/node/topics",{params:{page:o.p||1,nodeId:1,city:d}}),n.get("/api/user/score/rank"),n.get("/api/link/toplinks"),n.get("/api/tweet/newest")]);case 7:return w=t.sent,m=Object(r.a)(w,5),h=m[0],v=m[1],y=m[2],k=m[3],S=m[4],t.abrupt("return",{nodes:h,topicsPage:v,scoreRank:y,links:k,newestTweets:S});case 17:t.prev=17,t.t0=t.catch(4),console.error(t.t0);case 20:case"end":return t.stop()}}),t,null,[[4,17]])})))()},methods:{jumpUrl:function(e){e&&window.open(e)},twitterCreated:function(data){this.topicsPage&&(this.topicsPage.results?this.topicsPage.results.unshift(data):this.topicsPage.results=[data])}},head:function(){return{title:this.$siteTitle("90社区-单身交友"),meta:[{hid:"description",name:"description",content:this.$siteDescription()},{hid:"keywords",name:"keywords",content:this.$siteKeywords()}]}}}),k=(n(352),n(49)),component=Object(k.a)(y,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"main"},[n("client-only",[n("div",{staticClass:"container main-container left-main"},[n("div",{staticClass:"left-container"},[n("div",{staticClass:"main-content"},[n("carousel",{staticStyle:{"min-height":"50px"},attrs:{"per-page":2,"scroll-per-page":!0}},[n("slide",{staticClass:"img_wrapper"},[e._v("专注于互联网白领人群，创造交友圈子，让彼此的我们都能找到合适的伴侣")]),e._v(" "),n("slide",{staticClass:"img_wrapper"},[e._v("添加管理员微信1481460329，审核进群，请备注：交友-城市-单位-职业")]),e._v(" "),n("slide",{staticClass:"img_wrapper"},[e._v("帮助匹配对象——请按照要求创建个人交友帖子，并发给群主")]),e._v(" "),n("slide",{staticClass:"img_wrapper"},[e._v("互联网圈子不大，每一个人都是一个独立品牌，非诚勿扰")])],1),e._v(" "),n("button",{staticClass:"button is-primary is-active is-small",on:{click:function(t){return e.jumpUrl("https://www.jianshu.com/p/c1d5d3c04b8b")}}},[e._v("\n            脱单攻略\n          ")]),e._v(" "),e.topicsPage?n("topic-list",{attrs:{topics:e.topicsPage.results,"show-ad":!0}}):e._e(),e._v(" "),e.topicsPage?n("pagination",{attrs:{page:e.topicsPage.page,"url-prefix":"/love?p="}}):e._e()],1)]),e._v(" "),n("div",{staticClass:"right-container"},[n("site-notice"),e._v(" "),n("tweets-widget",{attrs:{tweets:e.newestTweets}}),e._v(" "),n("score-rank",{attrs:{"score-rank":e.scoreRank}}),e._v(" "),n("friend-links",{attrs:{links:e.links}})],1)])])],1)}),[],!1,null,"88549c70",null);t.default=component.exports}}]);