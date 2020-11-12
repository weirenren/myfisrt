/*! For license information please see ../../../LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{207:function(t,e,n){"use strict";n(92),n(22),n(23),n(9);var r=n(90),o=n(91),c=n(209),l=n.n(c),d=function(){function t(){Object(r.a)(this,t)}return Object(o.a)(t,[{key:"getCity",value:function(){var t=l.a.get("city");return void 0!==t?t:"北京"}},{key:"setCity",value:function(t){return l.a.set("city",t)}},{key:"linkTo",value:function(path){window.location=path}},{key:"toSignin",value:function(t){t||(t=window.location.pathname),this.linkTo("/user/signin?ref="+encodeURIComponent(t))}},{key:"isSigninUrl",value:function(t){return"/user/signin"===t}},{key:"isArray",value:function(t){return"[object Array]"===Object.prototype.toString.call(t)}},{key:"isDate",value:function(t){return"[object Date]"==={}.toString.call(t)&&"Invalid Date"!==t.toString()&&!isNaN(t)}},{key:"isElement",value:function(t){return!(!t||!t.nodeName||1!==t.nodeType)}},{key:"isFunction",value:function(t){return"[object Function]"===Object.prototype.toString.call(t)}},{key:"isNumber",value:function(t){return"[object Number]"===Object.prototype.toString.call(t)&&isFinite(t)}},{key:"isObject",value:function(t){return"[object Object]"===Object.prototype.toString.call(t)}},{key:"isString",value:function(t){return"[object String]"===Object.prototype.toString.call(t)}},{key:"isBoolean",value:function(t){return"boolean"==typeof t}},{key:"getCityList",value:function(){return["北京","上海","深圳","武汉","杭州"]}},{key:"isEmpty",value:function(content){var t=content;if(""===t||void 0===t)return!0;return new RegExp("^[ ]+$").test(t)}}]),t}();e.a=new d},208:function(t,e,n){},216:function(t,e,n){"use strict";var r=n(208);n.n(r).a},217:function(t,e,n){"use strict";n(137);var r={props:{currentNodeId:{type:Number,default:1},nodes:{type:Array,default:function(){return[]}}},mounted:function(){}},o=(n(216),n(28)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"topics-nav"},[n("ul",{staticClass:"topics-nav-list"},[n("li",{staticClass:"topics-nav-item",class:{active:0===t.currentNodeId}},[n("a",{attrs:{href:"/topics/node/newest"}},[t._v("最新")])]),t._v(" "),n("li",{staticClass:"topics-nav-item",class:{active:-1===t.currentNodeId}},[n("a",{attrs:{href:"/topics/node/recommend"}},[t._v("推荐")])]),t._v(" "),t._l(t.nodes,(function(e){return n("li",{key:e.nodeId,staticClass:"topics-nav-item",class:{active:t.currentNodeId==e.nodeId}},[1!==e.nodeId&&2!==e.nodeId?n("div",[n("a",{attrs:{href:"/topics/node/"+e.nodeId}},[t._v(t._s(e.name))])]):t._e()])}))],2)])}),[],!1,null,"1f0f6714",null);e.a=component.exports},240:function(t,e,n){"use strict";e.parse=function(t,e){if("string"!=typeof t)throw new TypeError("argument str must be a string");for(var n={},o=e||{},l=t.split(c),f=o.decode||r,i=0;i<l.length;i++){var v=l[i],h=v.indexOf("=");if(!(h<0)){var m=v.substr(0,h).trim(),y=v.substr(++h,v.length).trim();'"'==y[0]&&(y=y.slice(1,-1)),null==n[m]&&(n[m]=d(y,f))}}return n},e.serialize=function(t,e,n){var r=n||{},c=r.encode||o;if("function"!=typeof c)throw new TypeError("option encode is invalid");if(!l.test(t))throw new TypeError("argument name is invalid");var d=c(e);if(d&&!l.test(d))throw new TypeError("argument val is invalid");var f=t+"="+d;if(null!=r.maxAge){var v=r.maxAge-0;if(isNaN(v)||!isFinite(v))throw new TypeError("option maxAge is invalid");f+="; Max-Age="+Math.floor(v)}if(r.domain){if(!l.test(r.domain))throw new TypeError("option domain is invalid");f+="; Domain="+r.domain}if(r.path){if(!l.test(r.path))throw new TypeError("option path is invalid");f+="; Path="+r.path}if(r.expires){if("function"!=typeof r.expires.toUTCString)throw new TypeError("option expires is invalid");f+="; Expires="+r.expires.toUTCString()}r.httpOnly&&(f+="; HttpOnly");r.secure&&(f+="; Secure");if(r.sameSite){switch("string"==typeof r.sameSite?r.sameSite.toLowerCase():r.sameSite){case!0:f+="; SameSite=Strict";break;case"lax":f+="; SameSite=Lax";break;case"strict":f+="; SameSite=Strict";break;case"none":f+="; SameSite=None";break;default:throw new TypeError("option sameSite is invalid")}}return f};var r=decodeURIComponent,o=encodeURIComponent,c=/; */,l=/^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;function d(t,e){try{return e(t)}catch(e){return t}}},243:function(t,e,n){},284:function(t,e,n){"use strict";var r=n(243);n.n(r).a},341:function(t,e,n){"use strict";n(15);var r=n(2),o=(n(256),n(229)),c=(n(231),n(232)),l=n(207);o.c.add(c.b,c.a);var d={components:{},props:{topics:{type:Array,default:function(){return[]},required:!1},showAd:{type:Boolean,default:!1},openNewPage:{type:Boolean,default:!1}},data:function(){return{blank:"",isCollapsed:!0,isCollapsedArray:[]}},watch:{topics:function(t,e){this.topics&&void 0!==this.topics.length&&(this.isCollapsedArray=new Array(this.topics.length).fill(!0))}},mounted:function(){this.openNewPage&&(this.blank="_blank"),this.topics&&this.topics.length>0&&(this.isCollapsedArray=new Array(this.topics.length).fill(!0))},methods:{clickCollapse:function(t){var e=this;return Object(r.a)(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(void 0===e.topics[t].content){n.next=3;break}n.next=12;break;case 3:return n.prev=3,n.next=6,e.$axios.get("/api/topic/"+e.topics[t].topicId);case 6:r=n.sent,e.topics[t].content=r.content,n.next=12;break;case 10:n.prev=10,n.t0=n.catch(3);case 12:e.$set(e.isCollapsedArray,t,!e.isCollapsedArray[t]);case 13:case"end":return n.stop()}}),n,null,[[3,10]])})))()},onCollapseBack:function(t){},like:function(t){var e=this;return Object(r.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e.isCollapsed=!e.isCollapsed,n.prev=1,n.next=4,e.$axios.post("/api/topic/like/"+t.topicId);case 4:t.liked=!0,t.likeCount++,n.next=11;break;case 8:n.prev=8,n.t0=n.catch(1),1===n.t0.errorCode?e.$toast.info("请登录后点赞！！！",{action:{text:"去登录",onClick:function(t,e){l.a.toSignin()}}}):e.$toast.error(n.t0.message||n.t0);case 11:case"end":return n.stop()}}),n,null,[[1,8]])})))()}}},f=(n(284),n(28)),component=Object(f.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",{staticClass:"topic-list topic-wrap"},t._l(t.topics,(function(e,r){return n("li",{key:e.topicId,staticClass:"topic-item",attrs:{index:r}},[n("div",{staticClass:"topic-header"},[n("div",{staticClass:"topic-header-center"},[n("h1",{staticClass:"topic-title",attrs:{itemprop:"headline"}},[n("span",{staticStyle:{color:"red"}},[t._v(t._s(r+1)+".")]),t._v(" "),n("a",{attrs:{target:t.blank,href:"/topic/"+e.topicId,title:e.title}},[t._v(t._s(e.title))])]),t._v(" "),t._m(0,!0)]),t._v(" "),n("div",{staticClass:"topic-header-right"},[n("div",{staticClass:"like"},[n("span",{staticClass:"like-btn",class:{liked:e.liked},on:{click:function(n){return t.like(e)}}},[n("i",{staticClass:"iconfont icon-like"})]),t._v(" "),e.likeCount?n("span",{staticClass:"like-count"},[t._v(t._s(e.likeCount))]):t._e()])])])])})),0)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"topic-meta"},[e("span",{staticClass:"meta-item"})])}],!1,null,"0831f5b0",null);e.a=component.exports},481:function(t,e,n){"use strict";n.r(e);n(16),n(9),n(29);var r=n(40),o=(n(15),n(2)),c=n(240),l=n.n(c),d=n(207),f=(n(217),{components:{CommonTopicList:n(341).a},asyncData:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){var n,o,c,d,f,v,h,m;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$axios,o=t.query,c=t.req,d="北京",c&&void 0!==c.headers&&(f=l.a.parse(c.headers.cookie||""))&&""!==f&&(d=f.city),void 0===d&&(d="北京"),console.log("city1:"+d),e.prev=5,e.next=8,Promise.all([n.get("/api/topic/node/topics",{params:{page:o.p||1,city:d,nodeId:3}})]);case 8:return v=e.sent,h=Object(r.a)(v,1),m=h[0],e.abrupt("return",{topicsPage:m});case 14:e.prev=14,e.t0=e.catch(5),console.error(e.t0);case 17:case"end":return e.stop()}}),e,null,[[5,14]])})))()},data:function(){return{currentCity:""}},mounted:function(){this.currentCity=d.a.getCity()},methods:{twitterCreated:function(data){this.topicsPage&&(this.topicsPage.results?this.topicsPage.results.unshift(data):this.topicsPage.results=[data])}},head:function(){return{title:this.$siteTitle("90社区——专注于城市白领的社区部落"),meta:[{hid:"description",name:"description",content:this.$siteDescription()},{hid:"keywords",name:"keywords",content:this.$siteKeywords()}]}}}),v=n(28),component=Object(v.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"main"},[n("div",{staticClass:"container main-container left-main"},[n("div",{staticClass:"left-container main-content"},[n("article",{staticClass:"panel is-primary"},[n("p",{staticClass:"panel-heading"},[t._v(t._s(t.currentCity)+", 这周末该去哪儿玩")]),t._v(" "),n("p",{staticClass:"panel-tabs"}),t._v(" "),t.topicsPage.results?n("common-topic-list",{attrs:{topics:t.topicsPage.results,"edit-path":"topic","show-ad":!0,"open-new-page":!0}}):n("div",{staticClass:"content has-text-centered"},[n("p",[n("span",{staticStyle:{"font-size":"13px",color:"gray"}},[t._v("------ 无 ------ ")])])])],1)])])])}),[],!1,null,"12657ea5",null);e.default=component.exports}}]);