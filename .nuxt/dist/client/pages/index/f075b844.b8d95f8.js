(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{201:function(t,e,n){"use strict";var r=n(4),o=n(21),c=n(28),l=n(134),d=n(65),f=n(11),v=n(50).f,m=n(66).f,h=n(10).f,N=n(203).trim,I=r.Number,w=I,_=I.prototype,k="Number"==c(n(88)(_)),E="trim"in String.prototype,C=function(t){var e=d(t,!1);if("string"==typeof e&&e.length>2){var n,r,o,c=(e=E?e.trim():N(e,3)).charCodeAt(0);if(43===c||45===c){if(88===(n=e.charCodeAt(2))||120===n)return NaN}else if(48===c){switch(e.charCodeAt(1)){case 66:case 98:r=2,o=49;break;case 79:case 111:r=8,o=55;break;default:return+e}for(var code,l=e.slice(2),i=0,f=l.length;i<f;i++)if((code=l.charCodeAt(i))<48||code>o)return NaN;return parseInt(l,r)}}return+e};if(!I(" 0o1")||!I("0b1")||I("+0x1")){I=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof I&&(k?f((function(){_.valueOf.call(n)})):"Number"!=c(n))?l(new w(C(e)),n,I):C(e)};for(var y,A=n(9)?v(w):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),P=0;A.length>P;P++)o(w,y=A[P])&&!o(I,y)&&h(I,y,m(w,y));I.prototype=_,_.constructor=I,n(12)(r,"Number",I)}},203:function(t,e,n){var r=n(6),o=n(27),c=n(11),l=n(204),d="["+l+"]",f=RegExp("^"+d+d+"*"),v=RegExp(d+d+"*$"),m=function(t,e,n){var o={},d=c((function(){return!!l[t]()||"​"!="​"[t]()})),f=o[t]=d?e(h):l[t];n&&(o[n]=f),r(r.P+r.F*d,"String",o)},h=m.trim=function(t,e){return t=String(o(t)),1&e&&(t=t.replace(f,"")),2&e&&(t=t.replace(v,"")),t};t.exports=m},204:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},205:function(t,e,n){},213:function(t,e,n){"use strict";var r=n(205);n.n(r).a},214:function(t,e,n){"use strict";n(201);var r={props:{currentNodeId:{type:Number,default:1},nodes:{type:Array,default:function(){return[]}}},mounted:function(){}},o=(n(213),n(49)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"topics-nav"},[n("ul",{staticClass:"topics-nav-list"},[n("li",{staticClass:"topics-nav-item",class:{active:0===t.currentNodeId}},[n("a",{attrs:{href:"/topics/node/newest"}},[t._v("最新")])]),t._v(" "),n("li",{staticClass:"topics-nav-item",class:{active:-1===t.currentNodeId}},[n("a",{attrs:{href:"/topics/node/recommend"}},[t._v("推荐")])]),t._v(" "),t._l(t.nodes,(function(e){return n("li",{key:e.nodeId,staticClass:"topics-nav-item",class:{active:t.currentNodeId==e.nodeId}},[1!==e.nodeId&&2!==e.nodeId?n("div",[n("a",{attrs:{href:"/topics/node/"+e.nodeId}},[t._v(t._s(e.name))])]):t._e()])}))],2)])}),[],!1,null,"1f0f6714",null);e.a=component.exports},524:function(t,e,n){"use strict";n.r(e);n(16),n(8),n(26);var r=n(39),o=(n(15),n(2)),c=n(211),l=n(216),d=n(223),f=n(214),v=n(215),m=n(224),h=n(212),N={components:{SiteNotice:c.a,ScoreRank:l.a,FriendLinks:d.a,TopicsNav:f.a,TopicList:v.a,TweetsWidget:m.a,Pagination:h.a},asyncData:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){var n,o,c,l,d,f,v,m;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$axios,t.params,e.prev=1,e.next=4,Promise.all([n.get("/api/topic/nodes"),n.get("/api/topic/topics"),n.get("/api/user/score/rank"),n.get("/api/link/toplinks"),n.get("/api/tweet/newest")]);case 4:return o=e.sent,c=Object(r.a)(o,5),l=c[0],d=c[1],f=c[2],v=c[3],m=c[4],e.abrupt("return",{nodes:l,topicsPage:d,scoreRank:f,links:v,newestTweets:m});case 14:e.prev=14,e.t0=e.catch(1),console.error(e.t0);case 17:case"end":return e.stop()}}),e,null,[[1,14]])})))()},data:function(){},methods:{twitterCreated:function(data){this.topicsPage&&(this.topicsPage.results?this.topicsPage.results.unshift(data):this.topicsPage.results=[data])}},head:function(){return{meta:[{hid:"description",name:"description",content:this.$siteDescription()},{hid:"keywords",name:"keywords",content:this.$siteKeywords()}]}}},I=n(49),component=Object(I.a)(N,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"main"},[n("div",{staticClass:"container main-container left-main"},[n("div",{staticClass:"left-container"},[n("div",{staticClass:"main-content"},[n("topics-nav",{attrs:{nodes:t.nodes}}),t._v(" "),n("topic-list",{attrs:{topics:t.topicsPage.results,"show-ad":!0}}),t._v(" "),n("pagination",{attrs:{page:t.topicsPage.page,"url-prefix":"/topics?p="}})],1)]),t._v(" "),n("div",{staticClass:"right-container"},[n("site-notice"),t._v(" "),n("tweets-widget",{attrs:{tweets:t.newestTweets}}),t._v(" "),n("score-rank",{attrs:{"score-rank":t.scoreRank}}),t._v(" "),n("friend-links",{attrs:{links:t.links}})],1)])])}),[],!1,null,"79fc1d73",null);e.default=component.exports}}]);