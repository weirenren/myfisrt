/*! For license information please see ../../../LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[75],{208:function(t,e,n){"use strict";n(92),n(22),n(23),n(9);var r=n(90),o=n(91),c=n(215),l=n.n(c),d=function(){function t(){Object(r.a)(this,t)}return Object(o.a)(t,[{key:"getCity",value:function(){var t=l.a.get("city");return void 0!==t?t:"北京"}},{key:"setCity",value:function(t){return l.a.set("city",t)}},{key:"linkTo",value:function(path){window.location=path}},{key:"toSignin",value:function(t){t||(t=window.location.pathname),this.linkTo("/user/signin?ref="+encodeURIComponent(t))}},{key:"isSigninUrl",value:function(t){return"/user/signin"===t}},{key:"isArray",value:function(t){return"[object Array]"===Object.prototype.toString.call(t)}},{key:"isDate",value:function(t){return"[object Date]"==={}.toString.call(t)&&"Invalid Date"!==t.toString()&&!isNaN(t)}},{key:"isElement",value:function(t){return!(!t||!t.nodeName||1!==t.nodeType)}},{key:"isFunction",value:function(t){return"[object Function]"===Object.prototype.toString.call(t)}},{key:"isNumber",value:function(t){return"[object Number]"===Object.prototype.toString.call(t)&&isFinite(t)}},{key:"isObject",value:function(t){return"[object Object]"===Object.prototype.toString.call(t)}},{key:"isString",value:function(t){return"[object String]"===Object.prototype.toString.call(t)}},{key:"isBoolean",value:function(t){return"boolean"==typeof t}},{key:"getCityList",value:function(){return["北京","上海","深圳","武汉","杭州"]}},{key:"isEmpty",value:function(content){var t=content;if(""===t||void 0===t)return!0;return new RegExp("^[ ]+$").test(t)}}]),t}();e.a=new d},212:function(t,e,n){},215:function(t,e,n){var r,o;!function(c){if(void 0===(o="function"==typeof(r=c)?r.call(e,n,e,t):r)||(t.exports=o),!0,t.exports=c(),!!0){var l=window.Cookies,d=window.Cookies=c();d.noConflict=function(){return window.Cookies=l,d}}}((function(){function t(){for(var i=0,t={};i<arguments.length;i++){var e=arguments[i];for(var n in e)t[n]=e[n]}return t}function e(s){return s.replace(/(%[0-9A-Z]{2})+/g,decodeURIComponent)}return function n(r){function o(){}function c(e,n,c){if("undefined"!=typeof document){"number"==typeof(c=t({path:"/"},o.defaults,c)).expires&&(c.expires=new Date(1*new Date+864e5*c.expires)),c.expires=c.expires?c.expires.toUTCString():"";try{var l=JSON.stringify(n);/^[\{\[]/.test(l)&&(n=l)}catch(t){}n=r.write?r.write(n,e):encodeURIComponent(String(n)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),e=encodeURIComponent(String(e)).replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent).replace(/[\(\)]/g,escape);var d="";for(var f in c)c[f]&&(d+="; "+f,!0!==c[f]&&(d+="="+c[f].split(";")[0]));return document.cookie=e+"="+n+d}}function l(t,n){if("undefined"!=typeof document){for(var o={},c=document.cookie?document.cookie.split("; "):[],i=0;i<c.length;i++){var l=c[i].split("="),d=l.slice(1).join("=");n||'"'!==d.charAt(0)||(d=d.slice(1,-1));try{var f=e(l[0]);if(d=(r.read||r)(d,f)||e(d),n)try{d=JSON.parse(d)}catch(t){}if(o[f]=d,t===f)break}catch(t){}}return t?o[t]:o}}return o.set=c,o.get=function(t){return l(t,!1)},o.getJSON=function(t){return l(t,!0)},o.remove=function(e,n){c(e,"",t(n,{expires:-1}))},o.defaults={},o.withConverter=n,o}((function(){}))}))},216:function(t,e,n){"use strict";var r={computed:{config:function(){return this.$store.state.config.config}}},o=(n(221),n(28)),component=Object(o.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return this.config.siteNotification?e("div",{staticClass:"widget"},[e("div",{staticClass:"widget-header"},[this._v("公告")]),this._v(" "),e("div",{staticClass:"widget-content content notice-content"},[e("p",{domProps:{innerHTML:this._s(this.config.siteNotification)}})])]):this._e()}),[],!1,null,"05bf6a1c",null);e.a=component.exports},220:function(t,e,n){"use strict";var r={name:"ScoreRank",props:{scoreRank:{type:Array,default:function(){return null}}}},o=(n(258),n(28)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.scoreRank&&t.scoreRank.length?n("div",{staticClass:"widget"},[t._m(0),t._v(" "),n("div",{staticClass:"widget-content"},[n("ul",{staticClass:"score-rank"},t._l(t.scoreRank,(function(e){return n("li",{key:e.id},[n("a",{staticClass:"score-user-avatar",attrs:{href:"/user/"+e.id}},[n("img",{staticClass:"avatar size-30",attrs:{src:e.smallAvatar}})]),t._v(" "),n("div",{staticClass:"score-user-info"},[n("a",{attrs:{href:"/user/"+e.id}},[t._v(t._s(e.nickname))]),t._v(" "),n("p",[t._v(t._s(e.topicCount)+" 帖子 • "+t._s(e.commentCount)+" 评论")])]),t._v(" "),n("div",{staticClass:"score-rank-info"},[n("span",{staticClass:"score-user-score"},[n("i",{staticClass:"iconfont icon-score"}),n("span",[t._v(t._s(e.score))])])])])})),0)])]):t._e()}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"widget-header"},[e("span",{staticClass:"widget-title"},[this._v("积分排行")])])}],!1,null,"1a6c8d5c",null);e.a=component.exports},221:function(t,e,n){"use strict";var r=n(212);n.n(r).a},222:function(t,e,n){},226:function(t,e,n){"use strict";var r={name:"FriendLinks",props:{links:{type:Array,default:function(){return null}}}},o=n(28),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.links&&t.links.length?r("div",{staticClass:"widget"},[t._m(0),t._v(" "),r("div",{staticClass:"widget-content"},[r("ul",{staticClass:"links"},t._l(t.links,(function(link){return r("li",{key:link.linkId,staticClass:"link"},[r("div",{staticClass:"link-logo"},[link.logo?r("img",{attrs:{src:link.logo}}):t._e(),t._v(" "),link.logo?t._e():r("img",{attrs:{src:n(233)}})]),t._v(" "),r("div",{staticClass:"link-content"},[r("a",{staticClass:"link-title",attrs:{href:link.url,title:link.title,target:"_blank"}},[t._v(t._s(link.title))]),t._v(" "),r("p",{staticClass:"link-summary"},[t._v("\n            "+t._s(link.summary)+"\n          ")])])])})),0)])]):t._e()}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"widget-header"},[e("span",[this._v("友情链接")]),this._v(" "),e("span",{staticClass:"slot"},[e("a",{attrs:{href:"/links"}},[this._v("查看更多>>")])])])}],!1,null,"38bbb6a6",null);e.a=component.exports},228:function(t,e,n){},231:function(t,e,n){},233:function(t,e,n){t.exports=n.p+"img/net.1e01d6d.png"},237:function(t,e,n){"use strict";var r=n(222);n.n(r).a},249:function(t,e,n){"use strict";n(15);var r=n(2),o={props:{url:{type:String,required:!0},params:{type:Object,default:function(){return{}}},initData:{type:Object,default:function(){return{results:[],cursor:""}}}},data:function(){return{cursor:this.initData.cursor,results:this.initData.results||[],hasMore:!0,loading:!1}},computed:{disabled:function(){return this.loading||!this.hasMore}},methods:{loadMore:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.loading=!0,e.prev=1,n=Object.assign(t.params||{},{cursor:t.cursor}),e.next=5,t.$axios.get(t.url,{params:n});case 5:r=e.sent,t.cursor=r.cursor,r.results&&r.results.length?r.results.forEach((function(e){t.results.push(e)})):t.hasMore=!1,e.next=14;break;case 10:e.prev=10,e.t0=e.catch(1),t.hasMore=!1,console.error(e.t0);case 14:return e.prev=14,t.loading=!1,e.finish(14);case 17:case"end":return e.stop()}}),e,null,[[1,10,14,17]])})))()},unshiftResults:function(t){t&&this.results.unshift(t)},pushResults:function(t){t&&this.results.push(t)}}},c=(n(237),n(28)),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"infinite-scroll",rawName:"v-infinite-scroll",value:t.loadMore,expression:"loadMore"}],staticClass:"load-more",attrs:{"infinite-scroll-disabled":"disabled","infinite-scroll-distance":"10"}},[t._t("default",null,{results:t.results}),t._v(" "),t.loading?n("div",{staticClass:"load-more-loading"},[n("div",{staticClass:"loading-animation"}),t._v(" "),n("span",{staticClass:"load-more-text"},[t._v("加载中...")])]):t._e()],2)}),[],!1,null,"d1c148c2",null);e.a=component.exports},250:function(t,e,n){"use strict";n(17),n(51),n(69),n(15);var r=n(2),o=(n(137),{props:{nodeId:{type:Number,default:0},imageList:{type:Array,required:!1},onImageUploadCallBack:{type:Function,required:!1}},data:function(){return{content:"",images:[],message:"",maxWordCount:1e3,showUploader:!1,maxImageCount:9}},computed:{hasContent:function(){return this.content&&this.content.length>0},wordCount:function(){return this.content?this.content.length:0},imageCount:function(){return this.images?this.images.length:0},user:function(){return this.$store.state.user.current}},mounted:function(){this.imageList&&this.imageList.length>0&&(this.images=this.imageList)},methods:{onInput:function(){},doSubmit:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.user){e.next=3;break}return t.message="发表失败，请登录后重试",e.abrupt("return");case 3:if(t.hasContent){e.next=6;break}return t.message="发表失败，请输入内容",e.abrupt("return");case 6:return t.showUploader=!1,e.prev=7,e.next=10,t.$axios.post("/api/tweet/create",{content:t.content,imageList:JSON.stringify(t.images)});case 10:n=e.sent,t.content="",t.message="",t.$emit("created",n),t.$toast.success("发布成功, 可以复制帖子分享微信群"),e.next=20;break;case 17:e.prev=17,e.t0=e.catch(7),t.message=e.t0.message||e.t0;case 20:case"end":return e.stop()}}),e,null,[[7,17]])})))()},handleImageUploadClick:function(){this.$refs.imageInput.click()},handleParse:function(t){var e=t.clipboardData&&t.clipboardData.items,n=null;if(void 0!==e&&e&&e.length)for(var i=0;i<e.length;i++)e[i].type&&e[i].type.includes("image")&&(n=e[i].getAsFile());n&&(this.showUploader=!0,t.preventDefault(),this.imageCount+1>this.maxImageCount?this.message="图片数量超过上限":this.upload(n))},handleDrag:function(t){t.stopPropagation(),t.preventDefault();var e=[],n=t.dataTransfer.items;if(n&&n.length&&n&&n.length)for(var i=0;i<n.length;i++)n[i].type.includes("image")&&e.push(n[i].getAsFile());e&&e.length&&(this.showUploader=!0,this.uploadFiles(e))},handleImageUploadChange:function(t){var e=this;return Object(r.a)(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(r=t.target.files){n.next=3;break}return n.abrupt("return");case 3:return n.next=5,e.uploadFiles(r);case 5:e.$refs.imageInput.value=null;case 6:case"end":return n.stop()}}),n)})))()},uploadFiles:function(t){var e=this;return Object(r.a)(regeneratorRuntime.mark((function n(){var i;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(0!==t.length){n.next=2;break}return n.abrupt("return");case 2:if(!(e.imageCount+t.length>e.maxImageCount)){n.next=5;break}return e.message="图片数量超过上限",n.abrupt("return");case 5:i=0;case 6:if(!(i<t.length)){n.next=12;break}return n.next=9,e.upload(t[i]);case 9:i++,n.next=6;break;case 12:case"end":return n.stop()}}),n)})))()},upload:function(t){var e=this;return Object(r.a)(regeneratorRuntime.mark((function n(){var r,o;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,(r=new FormData).append("image",t,t.name),n.next=5,e.$axios.post("/api/upload",r);case 5:o=n.sent,e.images.push(o.url),n.next=13;break;case 9:n.prev=9,n.t0=n.catch(0),e.$toast.error(n.t0.message),e.message=n.t0.message||n.t0;case 13:e.onImageUploadCallBack&&e.onImageUploadCallBack(e.images);case 14:case"end":return n.stop()}}),n,null,[[0,9]])})))()},removeImg:function(img){var t=this.images.indexOf(img);-1!==t&&this.images.splice(t,1),this.onImageUploadCallBack&&this.onImageUploadCallBack(this.images)}}}),c=(n(261),n(28)),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"post-tweets-wrapper"},[n("div",{staticClass:"tweets-box"},[n("div",{staticClass:"box-footer"},[n("div",{staticClass:"bui-left"},[n("span",{staticClass:"action-btn",on:{click:function(e){t.showUploader=!t.showUploader}}},[n("i",{staticClass:"iconfont icon-image"}),t._v(" "),n("span",[t._v("本地图片上传")])])])]),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:t.showUploader,expression:"showUploader"}],staticClass:"uploader-popup"},[n("div",{staticClass:"imgUploadBox"},[n("p",{staticClass:"uploader-title"},[t._v("本地上传")]),t._v(" "),n("p",{staticClass:"uploader-meta"},[t._v("\n          共 "+t._s(t.imageCount)+" 张，还能上传 "+t._s(t.maxImageCount-t.imageCount)+" 张\n        ")]),t._v(" "),n("i",{staticClass:"close-popup iconfont icon-close",on:{click:function(e){t.showUploader=!1}}}),t._v(" "),n("div",{staticClass:"upload-box"},[n("form",{staticStyle:{display:"none"}},[n("input",{ref:"imageInput",attrs:{type:"file",accept:"image/*",multiple:"multiple"},on:{change:t.handleImageUploadChange}})]),t._v(" "),n("ul",{staticClass:"upload-img-list"},[t._l(t.images,(function(image,i){return n("li",{key:i,staticClass:"upload-img-item"},[n("img",{attrs:{src:image}}),t._v(" "),n("i",{staticClass:"iconfont icon-close remove",on:{click:function(e){return t.removeImg(image)}}})])})),t._v(" "),t.imageCount<t.maxImageCount?n("li",{staticClass:"upload-img-item upload-img-add",on:{click:t.handleImageUploadClick}},[n("i",{staticClass:"iconfont icon-add"})]):t._e()],2)])])])])])}),[],!1,null,"21e004e5",null);e.a=component.exports},258:function(t,e,n){"use strict";var r=n(228);n.n(r).a},261:function(t,e,n){"use strict";var r=n(231);n.n(r).a},472:function(t,e,n){"use strict";n.r(e);n(16),n(9),n(29);var r=n(40),o=(n(15),n(2)),c=n(216),l=n(220),d=n(226),f=n(250),m=n(208),v={props:{tweets:{type:Array,default:function(){return[]},required:!1}},methods:{like:function(t){var e=this;return Object(o.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,e.$axios.post("/api/tweet/like/"+t.tweetId);case 3:t.liked=!0,t.likeCount++,n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),1===n.t0.errorCode?e.$toast.info("请登录后点赞！！！",{action:{text:"去登录",onClick:function(t,e){m.a.toSignin()}}}):e.$toast.error(n.t0.message||n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))()}}},h=n(28),C=Object(h.a)(v,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",{staticClass:"tweets"},t._l(t.tweets,(function(e){return n("li",{key:e.tweetId},[n("div",{staticClass:"tweet"},[n("div",{staticClass:"pin-header-row"},[n("div",{staticClass:"account-group"},[n("div",[n("a",{attrs:{href:"/user/"+e.user.id,title:e.user.nickname}},[n("img",{staticClass:"avatar size-45",attrs:{src:e.user.smallAvatar}})])]),t._v(" "),n("div",{staticClass:"pin-header-content"},[n("div",[n("a",{staticClass:"nickname",attrs:{href:"/user/"+e.user.id,title:e.user.nickname,target:"_blank"}},[t._v(t._s(e.user.nickname))])]),t._v(" "),n("div",{staticClass:"meta-box"},[n("div",{staticClass:"position ellipsis"},[t._v("\n                "+t._s(e.user.description)+"\n              ")]),t._v(" "),n("div",{staticClass:"dot"},[t._v("·")]),t._v(" "),n("time",{attrs:{datetime:t._f("formatDate")(e.createTime,"yyyy-MM-ddTHH:mm:ss"),itemprop:"datePublished"}},[t._v(t._s(t._f("prettyDate")(e.createTime)))])])])])]),t._v(" "),n("div",{staticClass:"pin-content-row"},[n("a",{staticClass:"content-box",attrs:{href:"/tweet/"+e.tweetId}},[t._v(t._s(e.content))])]),t._v(" "),e.imageList&&e.imageList.length>0?n("ul",{staticClass:"pin-image-row"},t._l(e.imageList,(function(image,t){return n("li",{key:image+t},[n("a",{staticClass:"image-item",attrs:{href:"/tweet/"+e.tweetId}},[n("img",{directives:[{name:"lazy",rawName:"v-lazy",value:image.preview,expression:"image.preview"}]})])])})),0):t._e(),t._v(" "),n("div",{staticClass:"pin-action-row"},[n("div",{staticClass:"action-box"},[n("div",{staticClass:"like-action action",on:{click:function(n){return t.like(e)}}},[n("div",{staticClass:"action-title-box"},[n("i",{staticClass:"iconfont icon-like"}),t._v(" "),n("span",{staticClass:"action-title"},[t._v(t._s(e.likeCount>0?e.likeCount:"赞"))])])]),t._v(" "),n("a",{staticClass:"comment-action action",attrs:{href:"/tweet/"+e.tweetId}},[n("div",{staticClass:"action-title-box"},[n("i",{staticClass:"iconfont icon-comments"}),t._v(" "),n("span",{staticClass:"action-title"},[t._v(t._s(e.commentCount>0?e.commentCount:"评论"))])])])])])])])})),0)}),[],!1,null,"39a3ad80",null).exports,k=n(249),_={components:{SiteNotice:c.a,ScoreRank:l.a,FriendLinks:d.a,PostTweets:f.a,TweetsList:C,LoadMore:k.a},asyncData:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){var n,o,c,l,d,f;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$axios,t.query,e.prev=1,e.next=4,Promise.all([n.get("/api/tweet/list"),n.get("/api/user/score/rank"),n.get("/api/link/toplinks")]);case 4:return o=e.sent,c=Object(r.a)(o,3),l=c[0],d=c[1],f=c[2],e.abrupt("return",{tweetsPage:l,scoreRank:d,links:f});case 12:e.prev=12,e.t0=e.catch(1),console.error(e.t0);case 15:case"end":return e.stop()}}),e,null,[[1,12]])})))()},methods:{tweetsCreated:function(t){this.$refs.tweetsLoadMore.unshiftResults(t)}},head:function(){return{title:this.$siteTitle("动态"),meta:[{hid:"description",name:"description",content:this.$siteDescription()},{hid:"keywords",name:"keywords",content:this.$siteKeywords()}]}}},w=Object(h.a)(_,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"main"},[n("div",{staticClass:"container main-container left-main"},[n("div",{staticClass:"left-container"},[n("div",{staticClass:"main-content no-padding"},[n("post-tweets",{on:{created:t.tweetsCreated}})],1),t._v(" "),t.tweetsPage?n("load-more",{ref:"tweetsLoadMore",attrs:{"init-data":t.tweetsPage,url:"/api/tweet/list"},scopedSlots:t._u([{key:"default",fn:function(t){var e=t.results;return[n("tweets-list",{attrs:{tweets:e}})]}}],null,!1,1750374090)}):t._e()],1),t._v(" "),n("div",{staticClass:"right-container"},[n("site-notice"),t._v(" "),n("score-rank",{attrs:{"score-rank":t.scoreRank}}),t._v(" "),n("friend-links",{attrs:{links:t.links}})],1)])])}),[],!1,null,"8f2e9984",null);e.default=w.exports}}]);