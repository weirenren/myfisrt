(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{201:function(t,e,r){},202:function(t,e,r){"use strict";var n=r(4),o=r(21),c=r(28),l=r(134),f=r(65),d=r(11),v=r(50).f,h=r(66).f,m=r(10).f,_=r(204).trim,P=n.Number,N=P,I=P.prototype,w="Number"==c(r(88)(I)),k="trim"in String.prototype,C=function(t){var e=f(t,!1);if("string"==typeof e&&e.length>2){var r,n,o,c=(e=k?e.trim():_(e,3)).charCodeAt(0);if(43===c||45===c){if(88===(r=e.charCodeAt(2))||120===r)return NaN}else if(48===c){switch(e.charCodeAt(1)){case 66:case 98:n=2,o=49;break;case 79:case 111:n=8,o=55;break;default:return+e}for(var code,l=e.slice(2),i=0,d=l.length;i<d;i++)if((code=l.charCodeAt(i))<48||code>o)return NaN;return parseInt(l,n)}}return+e};if(!P(" 0o1")||!P("0b1")||P("+0x1")){P=function(t){var e=arguments.length<1?0:t,r=this;return r instanceof P&&(w?d((function(){I.valueOf.call(r)})):"Number"!=c(r))?l(new N(C(e)),r,P):C(e)};for(var x,E=r(9)?v(N):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),y=0;E.length>y;y++)o(N,x=E[y])&&!o(P,x)&&m(P,x,h(N,x));P.prototype=I,I.constructor=P,r(12)(n,"Number",P)}},204:function(t,e,r){var n=r(6),o=r(27),c=r(11),l=r(205),f="["+l+"]",d=RegExp("^"+f+f+"*"),v=RegExp(f+f+"*$"),h=function(t,e,r){var o={},f=c((function(){return!!l[t]()||"​"!="​"[t]()})),d=o[t]=f?e(m):l[t];r&&(o[r]=d),n(n.P+n.F*f,"String",o)},m=h.trim=function(t,e){return t=String(o(t)),1&e&&(t=t.replace(d,"")),2&e&&(t=t.replace(v,"")),t};t.exports=h},205:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},206:function(t,e,r){},207:function(t,e,r){"use strict";var n=r(201);r.n(n).a},208:function(t,e,r){"use strict";var n={props:{page:{type:Object,default:function(){return{page:1,total:0,limit:20}},required:!0},urlPrefix:{type:String,default:"/",required:!0}},computed:{pageList:function(){var t=this.page.page-2,e=this.page.page+2,r=this.getTotalPage();if(t<=0){for(var n=[],i=1;i<=5&&i<=r;i++)n.push(i);return n}if(e>r){for(var o=[],c=r-5<=0?1:r-5;c>0&&c<=r;c++)o.push(c);return o}return[this.page.page-2,this.page.page-1,this.page.page,this.page.page+1,this.page.page+2]},previousPageUrl:function(){return this.getPreviousPageUrl()},nextPageUrl:function(){return this.getNextPageUrl()}},methods:{getNextPageUrl:function(){var t=this.page.page+1;return t>this.getTotalPage()?"":this.getPageUrl(t)},getPreviousPageUrl:function(){var t=this.page.page-1;return t<=0?"":this.getPageUrl(t)},getPageUrl:function(t){return this.page.page===t?"javascript:void(0)":this.urlPrefix+t},getTotalPage:function(){return this.page.total%this.page.limit>0?parseInt(this.page.total/this.page.limit)+1:this.page.total/this.page.limit}}},o=(r(207),r(49)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.page.total>0?r("nav",{staticClass:"pagination is-small",attrs:{role:"navigation","aria-label":"pagination"}},[t.previousPageUrl?r("a",{staticClass:"pagination-previous",attrs:{href:t.previousPageUrl}},[t._v("上一页")]):r("a",{staticClass:"pagination-previous",attrs:{disabled:""}},[t._v("上一页")]),t._v(" "),t.nextPageUrl?r("a",{staticClass:"pagination-previous",attrs:{href:t.nextPageUrl}},[t._v("下一页")]):r("a",{staticClass:"pagination-previous",attrs:{disabled:""}},[t._v("下一页")]),t._v(" "),r("ul",{staticClass:"pagination-list"},t._l(t.pageList,(function(p){return r("li",{key:p},[r("a",{staticClass:"pagination-link",class:{"is-current":p==t.page.page},attrs:{href:t.getPageUrl(p)}},[t._v(t._s(p))])])})),0)]):t._e()}),[],!1,null,"a3f55830",null);e.a=component.exports},214:function(t,e,r){"use strict";var n=r(206);r.n(n).a},215:function(t,e,r){"use strict";r(202);var n={props:{currentNodeId:{type:Number,default:1},nodes:{type:Array,default:function(){return[]}}},mounted:function(){}},o=(r(214),r(49)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"topics-nav"},[r("ul",{staticClass:"topics-nav-list"},[r("li",{staticClass:"topics-nav-item",class:{active:0===t.currentNodeId}},[r("a",{attrs:{href:"/topics/node/newest"}},[t._v("最新")])]),t._v(" "),r("li",{staticClass:"topics-nav-item",class:{active:-1===t.currentNodeId}},[r("a",{attrs:{href:"/topics/node/recommend"}},[t._v("推荐")])]),t._v(" "),t._l(t.nodes,(function(e){return r("li",{key:e.nodeId,staticClass:"topics-nav-item",class:{active:t.currentNodeId==e.nodeId}},[1!==e.nodeId&&2!==e.nodeId?r("div",[r("a",{attrs:{href:"/topics/node/"+e.nodeId}},[t._v(t._s(e.name))])]):t._e()])}))],2)])}),[],!1,null,"1f0f6714",null);e.a=component.exports},503:function(t,e,r){"use strict";r.r(e);r(16),r(8),r(26);var n=r(39),o=(r(15),r(2)),c=r(213),l=r(217),f=r(223),d=r(215),v=r(216),h=r(224),m=r(208),_={components:{SiteNotice:c.a,ScoreRank:l.a,FriendLinks:f.a,TopicsNav:d.a,TopicList:v.a,TweetsWidget:h.a,Pagination:m.a},asyncData:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){var r,o,c,l,f,d,v,h,m;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$axios,o=t.query,e.prev=1,e.next=4,Promise.all([r.get("/api/topic/nodes"),r.get("/api/topic/topics",{params:{page:o.p||1}}),r.get("/api/user/score/rank"),r.get("/api/link/toplinks"),r.get("/api/tweet/newest")]);case 4:return c=e.sent,l=Object(n.a)(c,5),f=l[0],d=l[1],v=l[2],h=l[3],m=l[4],e.abrupt("return",{nodes:f,topicsPage:d,scoreRank:v,links:h,newestTweets:m});case 14:e.prev=14,e.t0=e.catch(1),console.error(e.t0);case 17:case"end":return e.stop()}}),e,null,[[1,14]])})))()},methods:{twitterCreated:function(data){this.topicsPage&&(this.topicsPage.results?this.topicsPage.results.unshift(data):this.topicsPage.results=[data])}},head:function(){return{title:this.$siteTitle("话题"),meta:[{hid:"description",name:"description",content:this.$siteDescription()},{hid:"keywords",name:"keywords",content:this.$siteKeywords()}]}}},P=r(49),component=Object(P.a)(_,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"main"},[r("div",{staticClass:"container main-container left-main"},[r("div",{staticClass:"left-container"},[r("div",{staticClass:"main-content"},[r("topics-nav",{attrs:{nodes:t.nodes,"current-node-id":0}}),t._v(" "),r("topic-list",{attrs:{topics:t.topicsPage.results,"show-ad":!0}}),t._v(" "),r("pagination",{attrs:{page:t.topicsPage.page,"url-prefix":"/topics/node/newest?p="}})],1)]),t._v(" "),r("div",{staticClass:"right-container"},[r("site-notice"),t._v(" "),r("tweets-widget",{attrs:{tweets:t.newestTweets}}),t._v(" "),r("score-rank",{attrs:{"score-rank":t.scoreRank}}),t._v(" "),r("friend-links",{attrs:{links:t.links}})],1)])])}),[],!1,null,"3c404764",null);e.default=component.exports}}]);