(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{209:function(t,e,n){},217:function(t,e,n){"use strict";var r=n(209);n.n(r).a},218:function(t,e,n){"use strict";n(137);var r={props:{currentNodeId:{type:Number,default:1},nodes:{type:Array,default:function(){return[]}}},mounted:function(){}},o=(n(217),n(29)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"topics-nav"},[n("ul",{staticClass:"topics-nav-list"},[n("li",{staticClass:"topics-nav-item",class:{active:0===t.currentNodeId}},[n("a",{attrs:{href:"/topics/node/newest"}},[t._v("最新")])]),t._v(" "),n("li",{staticClass:"topics-nav-item",class:{active:-1===t.currentNodeId}},[n("a",{attrs:{href:"/topics/node/recommend"}},[t._v("推荐")])]),t._v(" "),t._l(t.nodes,(function(e){return n("li",{key:e.nodeId,staticClass:"topics-nav-item",class:{active:t.currentNodeId==e.nodeId}},[1!==e.nodeId&&2!==e.nodeId?n("div",[n("a",{attrs:{href:"/topics/node/"+e.nodeId}},[t._v(t._s(e.name))])]):t._e()])}))],2)])}),[],!1,null,"1f0f6714",null);e.a=component.exports},571:function(t,e,n){"use strict";n.r(e);n(17),n(9),n(30);var r=n(41),o=(n(16),n(2)),c=n(215),d=n(229),l=n(235),v=n(218),f=n(219),m=n(236),w=n(216),h={components:{SiteNotice:c.a,ScoreRank:d.a,FriendLinks:l.a,TopicsNav:v.a,TopicList:f.a,TweetsWidget:m.a,Pagination:w.a},asyncData:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){var n,o,c,d,l,v,f,m,w;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$axios,o=t.query,e.prev=1,e.next=4,Promise.all([n.get("/api/topic/nodes"),n.get("/api/topic/recommend/topics",{params:{page:o.p||1}}),n.get("/api/user/score/rank"),n.get("/api/link/toplinks"),n.get("/api/tweet/newest")]);case 4:return c=e.sent,d=Object(r.a)(c,5),l=d[0],v=d[1],f=d[2],m=d[3],w=d[4],e.abrupt("return",{nodes:l,topicsPage:v,scoreRank:f,links:m,newestTweets:w});case 14:e.prev=14,e.t0=e.catch(1),console.error(e.t0);case 17:case"end":return e.stop()}}),e,null,[[1,14]])})))()},methods:{twitterCreated:function(data){this.topicsPage&&(this.topicsPage.results?this.topicsPage.results.unshift(data):this.topicsPage.results=[data])}},head:function(){return{title:this.$siteTitle("热门话题"),meta:[{hid:"description",name:"description",content:this.$siteDescription()},{hid:"keywords",name:"keywords",content:this.$siteKeywords()}]}}},k=n(29),component=Object(k.a)(h,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"main"},[n("div",{staticClass:"container main-container left-main"},[n("div",{staticClass:"left-container"},[n("div",{staticClass:"main-content"},[n("topics-nav",{attrs:{nodes:t.nodes,"current-node-id":-1}}),t._v(" "),n("topic-list",{attrs:{topics:t.topicsPage.results,"show-ad":!0}}),t._v(" "),n("pagination",{attrs:{page:t.topicsPage.page,"url-prefix":"/topics/node/recommend?p="}})],1)]),t._v(" "),n("div",{staticClass:"right-container"},[n("site-notice"),t._v(" "),n("tweets-widget",{attrs:{tweets:t.newestTweets}}),t._v(" "),n("score-rank",{attrs:{"score-rank":t.scoreRank}}),t._v(" "),n("friend-links",{attrs:{links:t.links}})],1)])])}),[],!1,null,"537b77a2",null);e.default=component.exports}}]);