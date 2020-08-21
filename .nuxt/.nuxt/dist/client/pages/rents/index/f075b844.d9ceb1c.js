/*! For license information please see ../../../LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{199:function(t,e,r){"use strict";var n=r(4),o=r(21),c=r(28),l=r(133),d=r(64),f=r(11),m=r(49).f,v=r(65).f,h=r(10).f,w=r(201).trim,y=n.Number,N=y,S=y.prototype,_="Number"==c(r(88)(S)),x="trim"in String.prototype,I=function(t){var e=d(t,!1);if("string"==typeof e&&e.length>2){var r,n,o,c=(e=x?e.trim():w(e,3)).charCodeAt(0);if(43===c||45===c){if(88===(r=e.charCodeAt(2))||120===r)return NaN}else if(48===c){switch(e.charCodeAt(1)){case 66:case 98:n=2,o=49;break;case 79:case 111:n=8,o=55;break;default:return+e}for(var code,l=e.slice(2),i=0,f=l.length;i<f;i++)if((code=l.charCodeAt(i))<48||code>o)return NaN;return parseInt(l,n)}}return+e};if(!y(" 0o1")||!y("0b1")||y("+0x1")){y=function(t){var e=arguments.length<1?0:t,r=this;return r instanceof y&&(_?f((function(){S.valueOf.call(r)})):"Number"!=c(r))?l(new N(I(e)),r,y):I(e)};for(var T,k=r(9)?m(N):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),C=0;k.length>C;C++)o(N,T=k[C])&&!o(y,T)&&h(y,T,v(N,T));y.prototype=S,S.constructor=y,r(12)(n,"Number",y)}},201:function(t,e,r){var n=r(6),o=r(27),c=r(11),l=r(202),d="["+l+"]",f=RegExp("^"+d+d+"*"),m=RegExp(d+d+"*$"),v=function(t,e,r){var o={},d=c((function(){return!!l[t]()||"​"!="​"[t]()})),f=o[t]=d?e(h):l[t];r&&(o[r]=f),n(n.P+n.F*d,"String",o)},h=v.trim=function(t,e){return t=String(o(t)),1&e&&(t=t.replace(f,"")),2&e&&(t=t.replace(m,"")),t};t.exports=v},202:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},203:function(t,e,r){},211:function(t,e,r){"use strict";var n=r(203);r.n(n).a},212:function(t,e,r){"use strict";r(199);var n={props:{currentNodeId:{type:Number,default:1},nodes:{type:Array,default:function(){return[]}}},mounted:function(){console.log("nodes:"+JSON.stringify(this.nodes))}},o=(r(211),r(48)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"topics-nav"},[r("ul",{staticClass:"topics-nav-list"},[r("li",{staticClass:"topics-nav-item",class:{active:0===t.currentNodeId}},[r("a",{attrs:{href:"/topics/node/newest"}},[t._v("最新")])]),t._v(" "),r("li",{staticClass:"topics-nav-item",class:{active:-1===t.currentNodeId}},[r("a",{attrs:{href:"/topics/node/recommend"}},[t._v("推荐")])]),t._v(" "),t._l(t.nodes,(function(e){return r("li",{key:e.nodeId,staticClass:"topics-nav-item",class:{active:t.currentNodeId==e.nodeId}},[1!==e.nodeId&&2!==e.nodeId?r("div",[r("a",{attrs:{href:"/topics/node/"+e.nodeId}},[t._v(t._s(e.name))])]):t._e()])}))],2)])}),[],!1,null,"b15b7e98",null);e.a=component.exports},271:function(t,e,r){},353:function(t,e,r){"use strict";e.parse=function(t,e){if("string"!=typeof t)throw new TypeError("argument str must be a string");for(var r={},o=e||{},l=t.split(c),f=o.decode||n,i=0;i<l.length;i++){var m=l[i],v=m.indexOf("=");if(!(v<0)){var h=m.substr(0,v).trim(),w=m.substr(++v,m.length).trim();'"'==w[0]&&(w=w.slice(1,-1)),null==r[h]&&(r[h]=d(w,f))}}return r},e.serialize=function(t,e,r){var n=r||{},c=n.encode||o;if("function"!=typeof c)throw new TypeError("option encode is invalid");if(!l.test(t))throw new TypeError("argument name is invalid");var d=c(e);if(d&&!l.test(d))throw new TypeError("argument val is invalid");var f=t+"="+d;if(null!=n.maxAge){var m=n.maxAge-0;if(isNaN(m)||!isFinite(m))throw new TypeError("option maxAge is invalid");f+="; Max-Age="+Math.floor(m)}if(n.domain){if(!l.test(n.domain))throw new TypeError("option domain is invalid");f+="; Domain="+n.domain}if(n.path){if(!l.test(n.path))throw new TypeError("option path is invalid");f+="; Path="+n.path}if(n.expires){if("function"!=typeof n.expires.toUTCString)throw new TypeError("option expires is invalid");f+="; Expires="+n.expires.toUTCString()}n.httpOnly&&(f+="; HttpOnly");n.secure&&(f+="; Secure");if(n.sameSite){switch("string"==typeof n.sameSite?n.sameSite.toLowerCase():n.sameSite){case!0:f+="; SameSite=Strict";break;case"lax":f+="; SameSite=Lax";break;case"strict":f+="; SameSite=Strict";break;case"none":f+="; SameSite=None";break;default:throw new TypeError("option sameSite is invalid")}}return f};var n=decodeURIComponent,o=encodeURIComponent,c=/; */,l=/^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;function d(t,e){try{return e(t)}catch(e){return t}}},354:function(t,e,r){"use strict";var n=r(271);r.n(n).a},462:function(t,e,r){"use strict";r.r(e);r(16),r(8),r(26);var n=r(39),o=(r(15),r(2)),c=(r(353),r(209)),l=r(213),d=r(221),f=(r(212),r(214)),m=r(222),v=r(210),h=r(200),w={components:{SiteNotice:c.a,ScoreRank:l.a,FriendLinks:d.a,TopicList:f.a,TweetsWidget:m.a,Pagination:v.a},asyncData:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){var r,o,c,l,d,f,m,v,h;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$axios,o=t.query,t.req,null==(c="北京")&&(c="北京"),console.log("city:"+c),e.prev=4,e.next=7,Promise.all([r.get("/api/topic/node/topics",{params:{page:o.p||1,city:c,nodeId:2}}),r.get("/api/user/score/rank"),r.get("/api/link/toplinks"),r.get("/api/tweet/newest")]);case 7:return l=e.sent,d=Object(n.a)(l,4),f=d[0],m=d[1],v=d[2],h=d[3],e.abrupt("return",{topicsPage:f,scoreRank:m,links:v,newestTweets:h});case 16:e.prev=16,e.t0=e.catch(4),console.error(e.t0);case 19:case"end":return e.stop()}}),e,null,[[4,16]])})))()},data:function(){return{searchTerms:"",searchAction:!1,data:['<div class="example-slide">Slide 1</div>','<div class="example-slide">Slide 2</div>','<div class="example-slide">Slide 3</div>']}},mounted:function(){},methods:{jumpUrl:function(t){t&&window.open(t)},twitterCreated:function(data){this.topicsPage&&(this.topicsPage.results?this.topicsPage.results.unshift(data):this.topicsPage.results=[data])},search:function(){var t=this;h.a.isEmpty(this.searchTerms.trim())?this.$toast.error("请输入租房地点"):this.$axios.get("/api/topic/search",{params:{terms:this.searchTerms}}).then((function(e){t.topicsPage.results=e,t.searchAction=!0})).catch((function(t){console.log("search error:"+JSON.stringify(t))}))}},head:function(){return{title:this.$siteTitle("话题"),meta:[{hid:"description",name:"description",content:this.$siteDescription()},{hid:"keywords",name:"keywords",content:this.$siteKeywords()}]}}},y=(r(354),r(48)),component=Object(y.a)(w,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"main"},[r("div",{staticClass:"container main-container left-main"},[r("div",{staticClass:"left-container"},[r("div",{staticClass:"main-content"},[r("div",{staticClass:"field is-grouped search-box"},[r("p",{staticClass:"control is-expanded"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.searchTerms,expression:"searchTerms"}],staticClass:"input",attrs:{type:"text",placeholder:"西二旗 回龙观（空格隔开，多关键词匹配)"},domProps:{value:t.searchTerms},on:{input:function(e){e.target.composing||(t.searchTerms=e.target.value)}}})]),t._v(" "),r("p",{staticClass:"control"},[r("button",{staticClass:"button is-primary",on:{click:t.search}},[t._v("搜索")])])]),t._v(" "),r("div",[r("button",{staticClass:"button is-primary is-active is-small",on:{click:function(e){return t.jumpUrl("https://www.jianshu.com/p/1850dba0604f")}}},[t._v("找房攻略")]),t._v(" "),r("button",{staticClass:"button is-primary is-active is-small",on:{click:function(e){return t.jumpUrl("https://www.jianshu.com/p/5eeaccdf0953")}}},[t._v("租房群部落")])]),t._v(" "),r("topic-list",{attrs:{topics:t.topicsPage.results,"edit-path":"rent","show-ad":!0}}),t._v(" "),t.searchAction?t._e():r("pagination",{attrs:{page:t.topicsPage.page,"url-prefix":"/rents?p="}})],1)]),t._v(" "),r("div",{staticClass:"right-container"},[r("site-notice"),t._v(" "),r("tweets-widget",{attrs:{tweets:t.newestTweets}}),t._v(" "),r("score-rank",{attrs:{"score-rank":t.scoreRank}}),t._v(" "),r("friend-links",{attrs:{links:t.links}})],1)])])}),[],!1,null,"358d2080",null);e.default=component.exports}}]);