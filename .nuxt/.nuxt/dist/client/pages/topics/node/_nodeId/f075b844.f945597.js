(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{199:function(t,e,n){"use strict";var r=n(4),o=n(21),c=n(28),d=n(133),l=n(64),f=n(11),v=n(49).f,m=n(65).f,I=n(10).f,h=n(201).trim,N=r.Number,w=N,_=N.prototype,k="Number"==c(n(88)(_)),E="trim"in String.prototype,C=function(t){var e=l(t,!1);if("string"==typeof e&&e.length>2){var n,r,o,c=(e=E?e.trim():h(e,3)).charCodeAt(0);if(43===c||45===c){if(88===(n=e.charCodeAt(2))||120===n)return NaN}else if(48===c){switch(e.charCodeAt(1)){case 66:case 98:r=2,o=49;break;case 79:case 111:r=8,o=55;break;default:return+e}for(var code,d=e.slice(2),i=0,f=d.length;i<f;i++)if((code=d.charCodeAt(i))<48||code>o)return NaN;return parseInt(d,r)}}return+e};if(!N(" 0o1")||!N("0b1")||N("+0x1")){N=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof N&&(k?f((function(){_.valueOf.call(n)})):"Number"!=c(n))?d(new w(C(e)),n,N):C(e)};for(var y,A=n(9)?v(w):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),P=0;A.length>P;P++)o(w,y=A[P])&&!o(N,y)&&I(N,y,m(w,y));N.prototype=_,_.constructor=N,n(12)(r,"Number",N)}},201:function(t,e,n){var r=n(6),o=n(27),c=n(11),d=n(202),l="["+d+"]",f=RegExp("^"+l+l+"*"),v=RegExp(l+l+"*$"),m=function(t,e,n){var o={},l=c((function(){return!!d[t]()||"​"!="​"[t]()})),f=o[t]=l?e(I):d[t];n&&(o[n]=f),r(r.P+r.F*l,"String",o)},I=m.trim=function(t,e){return t=String(o(t)),1&e&&(t=t.replace(f,"")),2&e&&(t=t.replace(v,"")),t};t.exports=m},202:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},203:function(t,e,n){},211:function(t,e,n){"use strict";var r=n(203);n.n(r).a},212:function(t,e,n){"use strict";n(199);var r={props:{currentNodeId:{type:Number,default:1},nodes:{type:Array,default:function(){return[]}}},mounted:function(){console.log("nodes:"+JSON.stringify(this.nodes))}},o=(n(211),n(48)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"topics-nav"},[n("ul",{staticClass:"topics-nav-list"},[n("li",{staticClass:"topics-nav-item",class:{active:0===t.currentNodeId}},[n("a",{attrs:{href:"/topics/node/newest"}},[t._v("最新")])]),t._v(" "),n("li",{staticClass:"topics-nav-item",class:{active:-1===t.currentNodeId}},[n("a",{attrs:{href:"/topics/node/recommend"}},[t._v("推荐")])]),t._v(" "),t._l(t.nodes,(function(e){return n("li",{key:e.nodeId,staticClass:"topics-nav-item",class:{active:t.currentNodeId==e.nodeId}},[1!==e.nodeId&&2!==e.nodeId?n("div",[n("a",{attrs:{href:"/topics/node/"+e.nodeId}},[t._v(t._s(e.name))])]):t._e()])}))],2)])}),[],!1,null,"b15b7e98",null);e.a=component.exports},499:function(t,e,n){"use strict";n.r(e);n(17),n(16),n(8),n(26);var r=n(39),o=(n(15),n(2)),c=n(209),d=n(213),l=n(221),f=n(212),v=n(214),m=n(222),I=n(210),h={components:{SiteNotice:c.a,ScoreRank:d.a,FriendLinks:l.a,TopicsNav:f.a,TopicList:v.a,TweetsWidget:m.a,Pagination:I.a},asyncData:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){var n,o,c,d,l,f,v,m,I,h,N;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$axios,o=t.params,c=t.query,e.next=3,Promise.all([n.get("/api/topic/node?nodeId="+o.nodeId),n.get("/api/topic/nodes"),n.get("/api/topic/node/topics",{params:{nodeId:o.nodeId,page:c.p||1}}),n.get("/api/user/score/rank"),n.get("/api/link/toplinks"),n.get("/api/tweet/newest")]);case 3:return d=e.sent,l=Object(r.a)(d,6),f=l[0],v=l[1],m=l[2],I=l[3],h=l[4],N=l[5],e.abrupt("return",{node:f,nodes:v,topicsPage:m,scoreRank:I,links:h,newestTweets:N});case 12:case"end":return e.stop()}}),e)})))()},methods:{twitterCreated:function(data){this.topicsPage&&(this.topicsPage.results?this.topicsPage.results.unshift(data):this.topicsPage.results=[data])}},head:function(){return{title:this.$siteTitle(this.node.name+" - 话题"),meta:[{hid:"description",name:"description",content:this.$siteDescription()},{hid:"keywords",name:"keywords",content:this.$siteKeywords()}]}}},N=n(48),component=Object(N.a)(h,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"main"},[n("div",{staticClass:"container main-container left-main"},[n("div",{staticClass:"left-container"},[n("div",{staticClass:"main-content"},[n("topics-nav",{attrs:{nodes:t.nodes,"current-node-id":t.node.nodeId}}),t._v(" "),n("topic-list",{attrs:{topics:t.topicsPage.results,"show-ad":!0}}),t._v(" "),n("pagination",{attrs:{page:t.topicsPage.page,"url-prefix":"/topics/node/"+t.node.nodeId+"?p="}})],1)]),t._v(" "),n("div",{staticClass:"right-container"},[n("site-notice"),t._v(" "),n("tweets-widget",{attrs:{tweets:t.newestTweets}}),t._v(" "),n("score-rank",{attrs:{"score-rank":t.scoreRank}}),t._v(" "),n("friend-links",{attrs:{links:t.links}})],1)])])}),[],!1,null,"3935a0b9",null);e.default=component.exports}}]);