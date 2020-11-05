(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{207:function(t,e,n){},209:function(t,e,n){},210:function(t,e,n){"use strict";var r=n(207);n.n(r).a},211:function(t,e,n){"use strict";var r={props:{page:{type:Object,default:function(){return{page:1,total:0,limit:20}},required:!0},urlPrefix:{type:String,default:"/",required:!0}},computed:{pageList:function(){var t=this.page.page-2,e=this.page.page+2,n=this.getTotalPage();if(t<=0){for(var r=[],i=1;i<=5&&i<=n;i++)r.push(i);return r}if(e>n){for(var o=[],c=n-5<=0?1:n-5;c>0&&c<=n;c++)o.push(c);return o}return[this.page.page-2,this.page.page-1,this.page.page,this.page.page+1,this.page.page+2]},previousPageUrl:function(){return this.getPreviousPageUrl()},nextPageUrl:function(){return this.getNextPageUrl()}},methods:{getNextPageUrl:function(){var t=this.page.page+1;return t>this.getTotalPage()?"":this.getPageUrl(t)},getPreviousPageUrl:function(){var t=this.page.page-1;return t<=0?"":this.getPageUrl(t)},getPageUrl:function(t){return this.page.page===t?"javascript:void(0)":this.urlPrefix+t},getTotalPage:function(){return this.page.total%this.page.limit>0?parseInt(this.page.total/this.page.limit)+1:this.page.total/this.page.limit}}},o=(n(210),n(28)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.page.total>0?n("nav",{staticClass:"pagination is-small",attrs:{role:"navigation","aria-label":"pagination"}},[t.previousPageUrl?n("a",{staticClass:"pagination-previous",attrs:{href:t.previousPageUrl}},[t._v("上一页")]):n("a",{staticClass:"pagination-previous",attrs:{disabled:""}},[t._v("上一页")]),t._v(" "),t.nextPageUrl?n("a",{staticClass:"pagination-previous",attrs:{href:t.nextPageUrl}},[t._v("下一页")]):n("a",{staticClass:"pagination-previous",attrs:{disabled:""}},[t._v("下一页")]),t._v(" "),n("ul",{staticClass:"pagination-list"},t._l(t.pageList,(function(p){return n("li",{key:p},[n("a",{staticClass:"pagination-link",class:{"is-current":p==t.page.page},attrs:{href:t.getPageUrl(p)}},[t._v(t._s(p))])])})),0)]):t._e()}),[],!1,null,"a3f55830",null);e.a=component.exports},217:function(t,e,n){"use strict";var r=n(209);n.n(r).a},218:function(t,e,n){"use strict";n(137);var r={props:{currentNodeId:{type:Number,default:1},nodes:{type:Array,default:function(){return[]}}},mounted:function(){}},o=(n(217),n(28)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"topics-nav"},[n("ul",{staticClass:"topics-nav-list"},[n("li",{staticClass:"topics-nav-item",class:{active:0===t.currentNodeId}},[n("a",{attrs:{href:"/topics/node/newest"}},[t._v("最新")])]),t._v(" "),n("li",{staticClass:"topics-nav-item",class:{active:-1===t.currentNodeId}},[n("a",{attrs:{href:"/topics/node/recommend"}},[t._v("推荐")])]),t._v(" "),t._l(t.nodes,(function(e){return n("li",{key:e.nodeId,staticClass:"topics-nav-item",class:{active:t.currentNodeId==e.nodeId}},[1!==e.nodeId&&2!==e.nodeId?n("div",[n("a",{attrs:{href:"/topics/node/"+e.nodeId}},[t._v(t._s(e.name))])]):t._e()])}))],2)])}),[],!1,null,"1f0f6714",null);e.a=component.exports},503:function(t,e,n){"use strict";n.r(e);n(16),n(9),n(29);var r=n(40),o=(n(15),n(2)),c=n(216),l=n(220),d=n(226),v=n(218),f=n(219),h=n(227),m=n(211),P={components:{SiteNotice:c.a,ScoreRank:l.a,FriendLinks:d.a,TopicsNav:v.a,TopicList:f.a,TweetsWidget:h.a,Pagination:m.a},asyncData:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){var n,o,c,l,d,v,f,h,m;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$axios,o=t.query,e.prev=1,e.next=4,Promise.all([n.get("/api/topic/nodes"),n.get("/api/topic/recommend/topics",{params:{page:o.p||1}}),n.get("/api/user/score/rank"),n.get("/api/link/toplinks"),n.get("/api/tweet/newest")]);case 4:return c=e.sent,l=Object(r.a)(c,5),d=l[0],v=l[1],f=l[2],h=l[3],m=l[4],e.abrupt("return",{nodes:d,topicsPage:v,scoreRank:f,links:h,newestTweets:m});case 14:e.prev=14,e.t0=e.catch(1),console.error(e.t0);case 17:case"end":return e.stop()}}),e,null,[[1,14]])})))()},methods:{twitterCreated:function(data){this.topicsPage&&(this.topicsPage.results?this.topicsPage.results.unshift(data):this.topicsPage.results=[data])}},head:function(){return{title:this.$siteTitle("热门话题"),meta:[{hid:"description",name:"description",content:this.$siteDescription()},{hid:"keywords",name:"keywords",content:this.$siteKeywords()}]}}},_=n(28),component=Object(_.a)(P,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"main"},[n("div",{staticClass:"container main-container left-main"},[n("div",{staticClass:"left-container"},[n("div",{staticClass:"main-content"},[n("topics-nav",{attrs:{nodes:t.nodes,"current-node-id":-1}}),t._v(" "),n("topic-list",{attrs:{topics:t.topicsPage.results,"show-ad":!0}}),t._v(" "),n("pagination",{attrs:{page:t.topicsPage.page,"url-prefix":"/topics/node/recommend?p="}})],1)]),t._v(" "),n("div",{staticClass:"right-container"},[n("site-notice"),t._v(" "),n("tweets-widget",{attrs:{tweets:t.newestTweets}}),t._v(" "),n("score-rank",{attrs:{"score-rank":t.scoreRank}}),t._v(" "),n("friend-links",{attrs:{links:t.links}})],1)])])}),[],!1,null,"537b77a2",null);e.default=component.exports}}]);