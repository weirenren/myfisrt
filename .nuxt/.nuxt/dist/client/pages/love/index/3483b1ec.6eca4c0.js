(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{460:function(t,e,n){"use strict";n.r(e);n(16),n(8),n(26);var r=n(39),o=(n(15),n(2)),c=n(209),l=n(213),d=n(221),w=n(214),h=n(222),k=n(210),v=n(200),f={components:{SiteNotice:c.a,ScoreRank:l.a,FriendLinks:d.a,TopicList:w.a,TweetsWidget:h.a,Pagination:k.a},asyncData:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){var n,o,c,l,d,w,h,k,f;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$axios,o=t.query,e.prev=1,e.next=4,Promise.all([n.get("/api/topic/nodes"),n.get("/api/topic/node/topics",{params:{page:o.p||1,nodeId:1,city:v.a.getCity()}}),n.get("/api/user/score/rank"),n.get("/api/link/toplinks"),n.get("/api/tweet/newest")]);case 4:return c=e.sent,l=Object(r.a)(c,5),d=l[0],w=l[1],h=l[2],k=l[3],f=l[4],e.abrupt("return",{nodes:d,topicsPage:w,scoreRank:h,links:k,newestTweets:f});case 14:e.prev=14,e.t0=e.catch(1),console.error(e.t0);case 17:case"end":return e.stop()}}),e,null,[[1,14]])})))()},methods:{twitterCreated:function(data){this.topicsPage&&(this.topicsPage.results?this.topicsPage.results.unshift(data):this.topicsPage.results=[data])}},head:function(){return{title:this.$siteTitle("90社区-单身交友"),meta:[{hid:"description",name:"description",content:this.$siteDescription()},{hid:"keywords",name:"keywords",content:this.$siteKeywords()}]}}},m=n(49),component=Object(m.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"main"},[n("div",{staticClass:"container main-container left-main"},[n("div",{staticClass:"left-container"},[n("div",{staticClass:"main-content"},[n("topic-list",{attrs:{topics:t.topicsPage.results,"show-ad":!0}}),t._v(" "),n("pagination",{attrs:{page:t.topicsPage.page,"url-prefix":"/love?p="}})],1)]),t._v(" "),n("div",{staticClass:"right-container"},[n("site-notice"),t._v(" "),n("tweets-widget",{attrs:{tweets:t.newestTweets}}),t._v(" "),n("score-rank",{attrs:{"score-rank":t.scoreRank}}),t._v(" "),n("friend-links",{attrs:{links:t.links}})],1)])])}),[],!1,null,"646a0b3e",null);e.default=component.exports}}]);