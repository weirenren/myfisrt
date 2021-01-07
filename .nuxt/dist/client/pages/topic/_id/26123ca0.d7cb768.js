(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{339:function(t,e,n){},466:function(t,e,n){"use strict";var r=n(339);n.n(r).a},594:function(t,e,n){"use strict";n.r(e);n(17),n(9),n(30);var r=n(41),c=(n(16),n(2)),o=n(208),l=n(266),d=n(68),v={components:{Comment:l.a},asyncData:function(t){return Object(c.a)(regeneratorRuntime.mark((function e(){var n,c,o,l,d,v,m,f,_;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$axios,c=t.params,o=t.error,e.prev=1,e.next=4,n.get("/api/topic/"+c.id);case 4:l=e.sent,e.next=11;break;case 7:return e.prev=7,e.t0=e.catch(1),o({statusCode:404,message:"话题不存在"}),e.abrupt("return");case 11:return e.next=13,Promise.all([n.get("/api/favorite/favorited",{params:{entityType:"topic",entityId:c.id}}),n.get("/api/comment/list",{params:{entityType:"topic",entityId:c.id}}),n.get("/api/topic/recentlikes/"+c.id)]);case 13:return d=e.sent,v=Object(r.a)(d,3),m=v[0],f=v[1],_=v[2],e.abrupt("return",{topic:l,commentsPage:f,favorited:m.favorited,likeUsers:_});case 19:case"end":return e.stop()}}),e,null,[[1,7]])})))()},computed:{hasPermission:function(){return this.isOwner||d.a.isOwner(this.user)||d.a.isAdmin(this.user)},isOwner:function(){return!(!this.user||!this.topic)&&this.user.id===this.topic.user.id},user:function(){return this.$store.state.user.current}},mounted:function(){},methods:{addFavorite:function(t){var e=this;return Object(c.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(n.prev=0,!e.favorited){n.next=8;break}return n.next=4,e.$axios.get("/api/favorite/delete",{params:{entityType:"topic",entityId:t}});case 4:e.favorited=!1,e.$toast.success("已取消收藏！"),n.next=12;break;case 8:return n.next=10,e.$axios.get("/api/topic/favorite/"+t);case 10:e.favorited=!0,e.$toast.success("收藏成功");case 12:n.next=18;break;case 14:n.prev=14,n.t0=n.catch(0),console.error(n.t0),e.$toast.error("收藏失败："+(n.t0.message||n.t0));case 18:case"end":return n.stop()}}),n,null,[[0,14]])})))()},deleteTopic:function(t){var e=this;return Object(c.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(window.confirm("是否确认删除该话题？")){n.next=2;break}return n.abrupt("return");case 2:return n.prev=2,n.next=5,e.$axios.post("/api/topic/delete/"+t);case 5:e.$toast.success("删除成功",{duration:2e3,onComplete:function(){o.a.linkTo("/topics")}}),n.next=12;break;case 8:n.prev=8,n.t0=n.catch(2),console.error(n.t0),e.$toast.error("删除失败："+(n.t0.message||n.t0));case 12:case"end":return n.stop()}}),n,null,[[2,8]])})))()},like:function(t){var e=this;return Object(c.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,e.$axios.post("/api/topic/like/"+t.topicId);case 3:t.liked=!0,t.likeCount++,e.likeUsers=e.likeUsers||[],e.likeUsers.unshift(e.$store.state.user.current),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(0),1===n.t0.errorCode?e.$toast.info("请登录后点赞！！！",{action:{text:"去登录",onClick:function(t,e){o.a.toSignin()}}}):(t.liked=!0,e.$toast.error(n.t0.message||n.t0));case 12:case"end":return n.stop()}}),n,null,[[0,9]])})))()}},head:function(){return{title:this.$siteTitle(this.topic.title)}}},m=(n(466),n(29)),component=Object(m.a)(v,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("section",{staticClass:"main"},[n("div",{staticClass:"container main-container left-main"},[n("div",{staticClass:"left-container"},[n("div",{staticClass:"main-content"},[n("article",{staticClass:"topic-detail topic-wrap",attrs:{itemscope:"",itemtype:"http://schema.org/BlogPosting"}},[n("div",{staticClass:"topic-header"},[n("div",{staticClass:"topic-header-left"},[n("a",{attrs:{href:"/user/"+t.topic.user.id,title:t.topic.user.nickname}},[n("img",{staticClass:"avatar size-45",attrs:{src:t.topic.user.smallAvatar}})])]),t._v(" "),n("div",{staticClass:"topic-header-center"},[n("h1",{staticClass:"topic-title",attrs:{itemprop:"headline"}},[t._v("\n                  "+t._s(t.topic.title)+"\n                ")]),t._v(" "),n("div",{staticClass:"topic-meta"},[n("span",{staticClass:"meta-item",attrs:{itemprop:"author",itemscope:"",itemtype:"http://schema.org/Person"}},[n("a",{attrs:{href:"/user/"+t.topic.user.id,itemprop:"name"}},[t._v(t._s(t.topic.user.nickname))])]),t._v(" "),n("span",{staticClass:"meta-item"},[n("time",{attrs:{datetime:t._f("formatDate")(t.topic.lastCommentTime,"yyyy-MM-ddTHH:mm:ss"),itemprop:"datePublished"}},[t._v(t._s(t._f("prettyDate")(t.topic.lastCommentTime)))])]),t._v(" "),n("span",{staticClass:"meta-item"},[t.topic.node?n("a",{staticClass:"node"},[t._v(t._s(t.topic.node.name))]):t._e()]),t._v(" "),n("span",{staticClass:"meta-item"},t._l(t.topic.tags,(function(e){return n("span",{key:e.tagId,staticClass:"tag"},[n("a",[t._v(t._s(e.tagName))])])})),0),t._v(" "),t.hasPermission?n("span",{staticClass:"meta-item act"},[n("a",{on:{click:function(e){return t.deleteTopic(t.topic.topicId)}}},[n("i",{staticClass:"iconfont icon-delete"}),t._v(" 删除\n                    ")])]):t._e(),t._v(" "),t.hasPermission?n("span",{staticClass:"meta-item act"},[n("a",{attrs:{href:"/topic/edit/"+t.topic.topicId}},[n("i",{staticClass:"iconfont icon-edit"}),t._v(" 修改\n                    ")])]):t._e(),t._v(" "),n("span",{staticClass:"meta-item act"},[n("a",{on:{click:function(e){return t.addFavorite(t.topic.topicId)}}},[n("i",{staticClass:"iconfont icon-favorite"}),t._v(" "+t._s(t.favorited?"已收藏":"收藏")+"\n                    ")])])])]),t._v(" "),n("div",{staticClass:"topic-header-right"},[n("div",{staticClass:"like"},[n("span",{staticClass:"like-btn",class:{liked:t.topic.liked},on:{click:function(e){return t.like(t.topic)}}},[n("i",{staticClass:"iconfont icon-like"})]),t._v(" "),t.topic.likeCount?n("span",{staticClass:"like-count"},[t._v(t._s(t.topic.likeCount))]):t._e()]),t._v(" "),n("span",{staticClass:"count"},[t._v(t._s(t.topic.commentCount)+" / "+t._s(t.topic.viewCount))])])]),t._v(" "),n("div",{staticClass:"content topic-content",attrs:{itemprop:"articleBody"}},[t.topic.content.content?n("div",[n("div",{directives:[{name:"lazy-container",rawName:"v-lazy-container",value:{selector:"img"},expression:"{ selector: 'img' }"}],domProps:{innerHTML:t._s(t.topic.content.content)}})]):n("div",[n("div",{directives:[{name:"lazy-container",rawName:"v-lazy-container",value:{selector:"img"},expression:"{ selector: 'img' }"}],domProps:{innerHTML:t._s(t.topic.content)}})])]),t._v(" "),n("div",{staticClass:"topic-actions"},[n("div",{staticClass:"action favorite",class:{active:t.favorited},on:{click:function(e){return t.addFavorite(t.topic.topicId)}}},[n("i",{staticClass:"iconfont icon-favorite"})]),t._v(" "),n("span",{staticClass:"split"}),t._v(" "),n("div",{staticClass:"action like",class:{active:t.topic.liked},on:{click:function(e){return t.like(t.topic)}}},[n("i",{staticClass:"iconfont icon-like"})]),t._v(" "),t._l(t.likeUsers,(function(t){return n("div",{key:t.id},[n("a",{attrs:{href:"/user/"+t.id,alt:t.nickname,target:"_blank"}},[n("img",{staticClass:"avatar size-30",attrs:{src:t.smallAvatar,alt:t.nickname}})])])}))],2)])]),t._v(" "),n("comment",{attrs:{"entity-id":t.topic.topicId,"comments-page":t.commentsPage,"comment-count":t.topic.commentCount,"show-ad":!1,"entity-type":"topic"}})],1),t._v(" "),n("div",{staticClass:"right-container"},[n("div",{staticClass:"user-simple"},[n("div",{staticClass:"base-info"},[n("a",{attrs:{href:"/user/"+t.topic.user.id,alt:t.topic.user.nickname}},[n("img",{staticClass:"avatar",attrs:{src:t.topic.user.smallAvatar,alt:t.topic.user.nickname}})]),t._v(" "),n("div",{staticClass:"nickname"},[n("a",{attrs:{href:"/user/"+t.topic.user.id,alt:t.topic.user.nickname}},[t._v(t._s(t.topic.user.nickname))])]),t._v(" "),n("div",{staticClass:"description"},[t._v("\n              "+t._s(t.topic.user.description)+"\n            ")])]),t._v(" "),n("div",{staticClass:"extra-info"},[n("ul",{staticClass:"extra-data"},[n("li",[n("span",[t._v("积分")]),n("br"),t._v(" "),n("b",[t._v(t._s(t.topic.user.score))])]),t._v(" "),n("li",[n("span",[t._v("注册排名")]),n("br"),t._v(" "),n("b",[t._v(t._s(t.topic.user.id))])])])])]),t._v(" "),t.topic.toc?n("div",{ref:"toc",staticClass:"widget no-bg toc"},[n("div",{staticClass:"widget-header"},[t._v("\n            目录\n          ")]),t._v(" "),n("div",{staticClass:"widget-content",domProps:{innerHTML:t._s(t.topic.toc)}})]):t._e()])])])])}),[],!1,null,"2ad5146e",null);e.default=component.exports}}]);