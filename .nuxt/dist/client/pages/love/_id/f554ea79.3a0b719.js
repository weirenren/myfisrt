(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{291:function(t,e,r){},381:function(t,e,r){"use strict";var c=r(291);r.n(c).a},505:function(t,e,r){"use strict";r.r(e);r(16),r(8),r(26);var c=r(39),n=(r(15),r(2)),o=r(200),v={components:{Comment:r(247).a},asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,o,v,_,d,l,m,f;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$axios,n=t.params,o=t.error,e.prev=1,e.next=4,r.get("/api/topic/"+n.id);case 4:v=e.sent,e.next=11;break;case 7:return e.prev=7,e.t0=e.catch(1),o({statusCode:404,message:"话题不存在"}),e.abrupt("return");case 11:return e.next=13,Promise.all([r.get("/api/favorite/favorited",{params:{entityType:"topic",entityId:n.id}}),r.get("/api/comment/list",{params:{entityType:"topic",entityId:n.id}}),r.get("/api/topic/recentlikes/"+n.id)]);case 13:return _=e.sent,d=Object(c.a)(_,3),l=d[0],m=d[1],f=d[2],v.extraData=JSON.parse(v.extraData),e.abrupt("return",{topic:v,commentsPage:m,favorited:l.favorited,likeUsers:f});case 20:case"end":return e.stop()}}),e,null,[[1,7]])})))()},computed:{isOwner:function(){return this.$store.state.user.current&&this.topic&&this.$store.state.user.current.id===this.topic.user.id}},mounted:function(){},methods:{addFavorite:function(t){var e=this;return Object(n.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(r.prev=0,!e.favorited){r.next=8;break}return r.next=4,e.$axios.get("/api/favorite/delete",{params:{entityType:"topic",entityId:t}});case 4:e.favorited=!1,e.$toast.success("已取消收藏！"),r.next=12;break;case 8:return r.next=10,e.$axios.get("/api/topic/favorite/"+t);case 10:e.favorited=!0,e.$toast.success("收藏成功");case 12:r.next=18;break;case 14:r.prev=14,r.t0=r.catch(0),console.error(r.t0),e.$toast.error("收藏失败："+(r.t0.message||r.t0));case 18:case"end":return r.stop()}}),r,null,[[0,14]])})))()},deleteTopic:function(t){var e=this;return Object(n.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(window.confirm("是否确认删除该话题？")){r.next=2;break}return r.abrupt("return");case 2:return r.prev=2,r.next=5,e.$axios.post("/api/topic/delete/"+t);case 5:e.$toast.success("删除成功",{duration:2e3,onComplete:function(){o.a.linkTo("/topics")}}),r.next=12;break;case 8:r.prev=8,r.t0=r.catch(2),console.error(r.t0),e.$toast.error("删除失败："+(r.t0.message||r.t0));case 12:case"end":return r.stop()}}),r,null,[[2,8]])})))()},like:function(t){var e=this;return Object(n.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,e.$axios.post("/api/topic/like/"+t.topicId);case 3:t.liked=!0,t.likeCount++,e.likeUsers=e.likeUsers||[],e.likeUsers.unshift(e.$store.state.user.current),r.next=12;break;case 9:r.prev=9,r.t0=r.catch(0),1===r.t0.errorCode?e.$toast.info("请登录后点赞！！！",{action:{text:"去登录",onClick:function(t,e){o.a.toSignin()}}}):(t.liked=!0,e.$toast.error(r.t0.message||r.t0));case 12:case"end":return r.stop()}}),r,null,[[0,9]])})))()}},head:function(){return{title:this.$siteTitle(this.topic.title)}}},_=(r(381),r(48)),component=Object(_.a)(v,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("section",{staticClass:"main"},[r("div",{staticClass:"container main-container left-main"},[r("div",{staticClass:"left-container"},[r("div",{staticClass:"main-content"},[r("article",{staticClass:"topic-detail topic-wrap",attrs:{itemscope:"",itemtype:"http://schema.org/BlogPosting"}},[r("div",{staticClass:"topic-header"},[r("div",{staticClass:"topic-header-left"},[r("a",{attrs:{href:"/user/"+t.topic.user.id,title:t.topic.user.nickname}},[r("img",{staticClass:"avatar size-45",attrs:{src:t.topic.user.smallAvatar}})])]),t._v(" "),r("div",{staticClass:"topic-header-center"},[r("h1",{staticClass:"topic-title",attrs:{itemprop:"headline"}},[t._v(t._s(t.topic.title))]),t._v(" "),r("div",{staticClass:"topic-meta"},[r("span",{staticClass:"meta-item",attrs:{itemprop:"author",itemscope:"",itemtype:"http://schema.org/Person"}},[r("a",{attrs:{href:"/user/"+t.topic.user.id,itemprop:"name"}},[t._v("\n                      "+t._s(t.topic.user.nickname)+"\n                    ")])]),t._v(" "),r("span",{staticClass:"meta-item"},[r("time",{attrs:{datetime:t._f("formatDate")(t.topic.lastCommentTime,"yyyy-MM-ddTHH:mm:ss"),itemprop:"datePublished"}},[t._v(t._s(t._f("prettyDate")(t.topic.lastCommentTime)))])]),t._v(" "),r("span",{staticClass:"meta-item"},[t.topic.node?r("a",{staticClass:"node",attrs:{href:"/topics/node/"+t.topic.node.nodeId}},[t._v(t._s(t.topic.node.name))]):t._e()]),t._v(" "),r("span",{staticClass:"meta-item"},t._l(t.topic.tags,(function(e){return r("span",{key:e.tagId,staticClass:"tag"},[r("a",{attrs:{href:"/topics/tag/"+e.tagId}},[t._v("\n                        "+t._s(e.tagName)+"\n                      ")])])})),0),t._v(" "),t.isOwner?r("span",{staticClass:"meta-item act"},[r("a",{on:{click:function(e){return t.deleteTopic(t.topic.topicId)}}},[r("i",{staticClass:"iconfont icon-delete"}),t._v(" 删除\n                    ")])]):t._e(),t._v(" "),t.isOwner?r("span",{staticClass:"meta-item act"},[r("a",{attrs:{href:"/love/edit/"+t.topic.topicId}},[r("i",{staticClass:"iconfont icon-edit"}),t._v(" 修改\n                    ")])]):t._e(),t._v(" "),r("span",{staticClass:"meta-item act"},[r("a",{on:{click:function(e){return t.addFavorite(t.topic.topicId)}}},[r("i",{staticClass:"iconfont icon-favorite"}),t._v("\n                       "+t._s(t.favorited?"已收藏":"收藏")+"\n                    ")])])])]),t._v(" "),r("div",{staticClass:"topic-header-right"},[r("div",{staticClass:"like"},[r("span",{staticClass:"like-btn",class:{liked:t.topic.liked},on:{click:function(e){return t.like(t.topic)}}},[r("i",{staticClass:"iconfont icon-like"})]),t._v(" "),t.topic.likeCount?r("span",{staticClass:"like-count"},[t._v("\n                    "+t._s(t.topic.likeCount)+"\n                  ")]):t._e()]),t._v(" "),r("span",{staticClass:"count"},[t._v("\n                  "+t._s(t.topic.commentCount)+" / "+t._s(t.topic.viewCount)+"\n                ")])])]),t._v(" "),r("div",{staticClass:"content topic-content",attrs:{itemprop:"articleBody"}},[r("article",{staticClass:"message"},[r("div",{staticClass:"message-body"},[r("table",{staticClass:"table is-striped is-fullwidth"},[r("tbody",[r("tr",[r("td",[t._v("个人性别：")]),t._v(" "),r("td",[t._v(t._s(t.topic.extraData.me_gender))])]),t._v(" "),r("tr",[r("td",[t._v("家乡：")]),t._v(" "),r("td",[t._v(t._s(t.topic.extraData.me_city))])]),t._v(" "),r("tr",[r("td",[t._v("年龄大小：")]),t._v(" "),r("td",[t._v(t._s(t.topic.extraData.me_age))])]),t._v(" "),r("tr",[r("td",[t._v("身高：")]),t._v(" "),r("td",[t._v(t._s(t.topic.extraData.me_height))])]),t._v(" "),r("tr",[r("td",[t._v("本人学历：")]),t._v(" "),r("td",[t._v(t._s(t.topic.extraData.me_edu))])]),t._v(" "),r("tr",[r("td",[t._v("主要工作城市：")]),t._v(" "),r("td",[t._v(t._s(t.topic.extraData.me_city))])]),t._v(" "),r("tr",[r("td",[t._v("工作单位：")]),t._v(" "),r("td",[t._v(t._s(t.topic.extraData.me_work_company))])]),t._v(" "),r("tr",[r("td",[t._v("兴趣爱好：")]),t._v(" "),r("td",[t._v(t._s(t.topic.extraData.me_hobby))])]),t._v(" "),r("tr",[r("td",[t._v("微信号")]),t._v(" "),r("td",[t._v(t._s(t.topic.extraData.me_wechat))])]),t._v(" "),r("tr",[r("td",[t._v("其它信息")]),t._v(" "),r("td",[t._v(t._s(t.topic.extraData.me_other_info))])])])])])]),t._v(" "),r("article",{staticClass:"message is-success"},[r("div",{staticClass:"message-body"},[r("table",{staticClass:"table is-striped"},[r("tbody",[r("tr",[r("td",[t._v("ta的家乡：")]),t._v(" "),r("td",[t._v(t._s(t.topic.extraData.he_city))])]),t._v(" "),r("tr",[r("td",[t._v("ta的年龄区间：")]),t._v(" "),r("td",[t._v(t._s(t.topic.extraData.he_age))])]),t._v(" "),r("tr",[r("td",[t._v("ta的身高范围：")]),t._v(" "),r("td",[t._v(t._s(t.topic.extraData.he_height))])]),t._v(" "),r("tr",[r("td",[t._v("ta的学历要求：")]),t._v(" "),r("td",[t._v(t._s(t.topic.extraData.he_edu))])]),t._v(" "),r("tr",[r("td",[t._v("ta的工作城市：")]),t._v(" "),r("td",[t._v(t._s(t.topic.extraData.he_city))])]),t._v(" "),r("tr",[r("td",[t._v("其它信息")]),t._v(" "),r("td",[t._v(t._s(t.topic.extraData.he_other_info))])])])])])]),t._v(" "),t.topic.imageList&&t.topic.imageList.length>0?r("div",t._l(t.topic.imageList,(function(image){return r("div",{key:image.url},[r("div",{staticClass:"image-item img_wrapper"},[r("img",{attrs:{src:image.preview,"data-src":image.url}})])])})),0):t._e()]),t._v(" "),r("div",{staticClass:"topic-actions"},[r("div",{staticClass:"action favorite",class:{active:t.favorited},on:{click:function(e){return t.addFavorite(t.topic.topicId)}}},[r("i",{staticClass:"iconfont icon-favorite"})]),t._v(" "),r("span",{staticClass:"split"}),t._v(" "),r("div",{staticClass:"action like",class:{active:t.topic.liked},on:{click:function(e){return t.like(t.topic)}}},[r("i",{staticClass:"iconfont icon-like"})]),t._v(" "),t._l(t.likeUsers,(function(t){return r("div",{key:t.id},[r("a",{attrs:{href:"/user/"+t.id,alt:t.nickname,target:"_blank"}},[r("img",{staticClass:"avatar size-30",attrs:{src:t.smallAvatar,alt:t.nickname}})])])}))],2)])]),t._v(" "),r("comment",{attrs:{"entity-id":t.topic.topicId,"comments-page":t.commentsPage,"comment-count":t.topic.commentCount,"show-ad":!1,"entity-type":"topic"}})],1),t._v(" "),r("div",{staticClass:"right-container"},[r("div",{staticClass:"user-simple"},[r("div",{staticClass:"base-info"},[r("a",{attrs:{href:"/user/"+t.topic.user.id,alt:t.topic.user.nickname}},[r("img",{staticClass:"avatar",attrs:{src:t.topic.user.smallAvatar,alt:t.topic.user.nickname}})]),t._v(" "),r("div",{staticClass:"nickname"},[r("a",{attrs:{href:"/user/"+t.topic.user.id,alt:t.topic.user.nickname}},[t._v(t._s(t.topic.user.nickname))])]),t._v(" "),r("div",{staticClass:"description"},[t._v(t._s(t.topic.user.description))])]),t._v(" "),r("div",{staticClass:"extra-info"},[r("ul",{staticClass:"extra-data"},[r("li",[r("span",[t._v("积分")]),t._v(" "),r("br"),t._v(" "),r("b",[t._v(t._s(t.topic.user.score))])]),t._v(" "),r("li",[r("span",[t._v("注册排名")]),t._v(" "),r("br"),t._v(" "),r("b",[t._v(t._s(t.topic.user.id))])])])])]),t._v(" "),t.topic.toc?r("div",{ref:"toc",staticClass:"widget no-bg toc"},[r("div",{staticClass:"widget-header"},[t._v("目录")]),t._v(" "),r("div",{staticClass:"widget-content",domProps:{innerHTML:t._s(t.topic.toc)}})]):t._e()])])])])}),[],!1,null,"b033f602",null);e.default=component.exports}}]);