/*! For license information please see ../../LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{199:function(t,e,n){"use strict";var r=n(4),o=n(21),c=n(28),l=n(133),m=n(65),d=n(11),f=n(50).f,v=n(66).f,y=n(10).f,h=n(201).trim,C=r.Number,_=C,k=C.prototype,x="Number"==c(n(88)(k)),w="trim"in String.prototype,I=function(t){var e=m(t,!1);if("string"==typeof e&&e.length>2){var n,r,o,c=(e=w?e.trim():h(e,3)).charCodeAt(0);if(43===c||45===c){if(88===(n=e.charCodeAt(2))||120===n)return NaN}else if(48===c){switch(e.charCodeAt(1)){case 66:case 98:r=2,o=49;break;case 79:case 111:r=8,o=55;break;default:return+e}for(var code,l=e.slice(2),i=0,d=l.length;i<d;i++)if((code=l.charCodeAt(i))<48||code>o)return NaN;return parseInt(l,r)}}return+e};if(!C(" 0o1")||!C("0b1")||C("+0x1")){C=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof C&&(x?d((function(){k.valueOf.call(n)})):"Number"!=c(n))?l(new _(I(e)),n,C):I(e)};for(var N,S=n(9)?f(_):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),E=0;S.length>E;E++)o(_,N=S[E])&&!o(C,N)&&y(C,N,v(_,N));C.prototype=k,k.constructor=C,n(12)(r,"Number",C)}},200:function(t,e,n){"use strict";n(91),n(22),n(23),n(8);var r=n(89),o=n(90),c=n(205),l=n.n(c),m=function(){function t(){Object(r.a)(this,t)}return Object(o.a)(t,[{key:"getCity",value:function(){var t=l.a.get("city");return void 0!==t?t:"北京"}},{key:"setCity",value:function(t){return l.a.set("city",t)}},{key:"linkTo",value:function(path){window.location=path}},{key:"toSignin",value:function(t){t||(t=window.location.pathname),this.linkTo("/user/signin?ref="+encodeURIComponent(t))}},{key:"isSigninUrl",value:function(t){return"/user/signin"===t}},{key:"isArray",value:function(t){return"[object Array]"===Object.prototype.toString.call(t)}},{key:"isDate",value:function(t){return"[object Date]"==={}.toString.call(t)&&"Invalid Date"!==t.toString()&&!isNaN(t)}},{key:"isElement",value:function(t){return!(!t||!t.nodeName||1!==t.nodeType)}},{key:"isFunction",value:function(t){return"[object Function]"===Object.prototype.toString.call(t)}},{key:"isNumber",value:function(t){return"[object Number]"===Object.prototype.toString.call(t)&&isFinite(t)}},{key:"isObject",value:function(t){return"[object Object]"===Object.prototype.toString.call(t)}},{key:"isString",value:function(t){return"[object String]"===Object.prototype.toString.call(t)}},{key:"isBoolean",value:function(t){return"boolean"==typeof t}},{key:"getCityList",value:function(){return["北京","上海","深圳","武汉","杭州"]}},{key:"isEmpty",value:function(content){var t=content;if(""===t||void 0===t)return!0;return new RegExp("^[ ]+$").test(t)}}]),t}();e.a=new m},201:function(t,e,n){var r=n(6),o=n(27),c=n(11),l=n(202),m="["+l+"]",d=RegExp("^"+m+m+"*"),f=RegExp(m+m+"*$"),v=function(t,e,n){var o={},m=c((function(){return!!l[t]()||"​"!="​"[t]()})),d=o[t]=m?e(y):l[t];n&&(o[n]=d),r(r.P+r.F*m,"String",o)},y=v.trim=function(t,e){return t=String(o(t)),1&e&&(t=t.replace(d,"")),2&e&&(t=t.replace(f,"")),t};t.exports=v},202:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},205:function(t,e,n){var r,o;!function(c){if(void 0===(o="function"==typeof(r=c)?r.call(e,n,e,t):r)||(t.exports=o),!0,t.exports=c(),!!0){var l=window.Cookies,m=window.Cookies=c();m.noConflict=function(){return window.Cookies=l,m}}}((function(){function t(){for(var i=0,t={};i<arguments.length;i++){var e=arguments[i];for(var n in e)t[n]=e[n]}return t}function e(s){return s.replace(/(%[0-9A-Z]{2})+/g,decodeURIComponent)}return function n(r){function o(){}function c(e,n,c){if("undefined"!=typeof document){"number"==typeof(c=t({path:"/"},o.defaults,c)).expires&&(c.expires=new Date(1*new Date+864e5*c.expires)),c.expires=c.expires?c.expires.toUTCString():"";try{var l=JSON.stringify(n);/^[\{\[]/.test(l)&&(n=l)}catch(t){}n=r.write?r.write(n,e):encodeURIComponent(String(n)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),e=encodeURIComponent(String(e)).replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent).replace(/[\(\)]/g,escape);var m="";for(var d in c)c[d]&&(m+="; "+d,!0!==c[d]&&(m+="="+c[d].split(";")[0]));return document.cookie=e+"="+n+m}}function l(t,n){if("undefined"!=typeof document){for(var o={},c=document.cookie?document.cookie.split("; "):[],i=0;i<c.length;i++){var l=c[i].split("="),m=l.slice(1).join("=");n||'"'!==m.charAt(0)||(m=m.slice(1,-1));try{var d=e(l[0]);if(m=(r.read||r)(m,d)||e(m),n)try{m=JSON.parse(m)}catch(t){}if(o[d]=m,t===d)break}catch(t){}}return t?o[t]:o}}return o.set=c,o.get=function(t){return l(t,!1)},o.getJSON=function(t){return l(t,!0)},o.remove=function(e,n){c(e,"",t(n,{expires:-1}))},o.defaults={},o.withConverter=n,o}((function(){}))}))},216:function(t,e,n){},230:function(t,e,n){"use strict";var r=n(216);n.n(r).a},240:function(t,e,n){"use strict";n(15);var r=n(2),o={props:{url:{type:String,required:!0},params:{type:Object,default:function(){return{}}},initData:{type:Object,default:function(){return{results:[],cursor:""}}}},data:function(){return{cursor:this.initData.cursor,results:this.initData.results||[],hasMore:!0,loading:!1}},computed:{disabled:function(){return this.loading||!this.hasMore}},methods:{loadMore:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.loading=!0,e.prev=1,n=Object.assign(t.params||{},{cursor:t.cursor}),e.next=5,t.$axios.get(t.url,{params:n});case 5:r=e.sent,t.cursor=r.cursor,r.results&&r.results.length?r.results.forEach((function(e){t.results.push(e)})):t.hasMore=!1,e.next=14;break;case 10:e.prev=10,e.t0=e.catch(1),t.hasMore=!1,console.error(e.t0);case 14:return e.prev=14,t.loading=!1,e.finish(14);case 17:case"end":return e.stop()}}),e,null,[[1,10,14,17]])})))()},unshiftResults:function(t){t&&this.results.unshift(t)},pushResults:function(t){t&&this.results.push(t)}}},c=(n(230),n(49)),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"infinite-scroll",rawName:"v-infinite-scroll",value:t.loadMore,expression:"loadMore"}],staticClass:"load-more",attrs:{"infinite-scroll-disabled":"disabled","infinite-scroll-distance":"10"}},[t._t("default",null,{results:t.results}),t._v(" "),t.loading?n("div",{staticClass:"load-more-loading"},[n("div",{staticClass:"loading-animation"}),t._v(" "),n("span",{staticClass:"load-more-text"},[t._v("加载中...")])]):t._e()],2)}),[],!1,null,"d1c148c2",null);e.a=component.exports},247:function(t,e,n){"use strict";n(199);var r=n(240),o=n(200),c={components:{LoadMore:r.a},props:{entityType:{type:String,default:"",required:!0},entityId:{type:Number,default:0,required:!0},commentsPage:{type:Object,default:function(){return{}}},showAd:{type:Boolean,default:!1}},computed:{user:function(){return this.$store.state.user.current},isLogin:function(){return null!=this.$store.state.user.current}},methods:{append:function(data){data&&this.$refs.commentsLoadMore.unshiftResults(data)},reply:function(t){this.isLogin||o.a.toSignin(),this.$emit("reply",t)},cancelReply:function(){this.quote=null}}},l=n(49),m=Object(l.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"comments"},[t.commentsPage?n("load-more",{ref:"commentsLoadMore",attrs:{"init-data":t.commentsPage,params:{entityType:t.entityType,entityId:t.entityId},url:"/api/comment/list"},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.results;return[n("ul",t._l(r,(function(e,r){return n("li",{key:e.commentId,staticClass:"comment",attrs:{index:r,itemprop:"comment",itemscope:"",itemtype:"http://schema.org/Comment"}},[n("div",{staticClass:"comment-avatar"},[n("img",{staticClass:"avatar",attrs:{src:e.user.smallAvatar}})]),t._v(" "),n("div",{staticClass:"comment-meta"},[n("span",{staticClass:"comment-nickname",attrs:{itemprop:"creator",itemscope:"",itemtype:"http://schema.org/Person"}},[n("a",{attrs:{href:"/user/"+e.user.id,itemprop:"name"}},[t._v("\n              "+t._s(e.user.nickname)+"\n            ")])]),t._v(" "),n("span",{staticClass:"comment-time"},[n("time",{attrs:{datetime:t._f("formatDate")(e.createTime,"yyyy-MM-ddTHH:mm:ss"),itemprop:"datePublished"}},[t._v(t._s(t._f("prettyDate")(e.createTime)))])]),t._v(" "),n("span",{staticClass:"comment-reply"},[n("a",{on:{click:function(n){return t.reply(e)}}},[t._v("回复")])])]),t._v(" "),n("div",{staticClass:"comment-content content"},[e.quote?n("blockquote",{staticClass:"comment-quote"},[n("div",{staticClass:"comment-quote-user"},[n("img",{staticClass:"avatar size-20",attrs:{src:e.quote.user.smallAvatar}}),t._v(" "),n("a",{staticClass:"quote-nickname"},[t._v(t._s(e.quote.user.nickname))]),t._v(" "),n("span",{staticClass:"quote-time"},[t._v("\n                "+t._s(t._f("prettyDate")(e.quote.createTime))+"\n              ")])]),t._v(" "),n("div",{directives:[{name:"lazy-container",rawName:"v-lazy-container",value:{selector:"img"},expression:"{ selector: 'img' }"}],attrs:{itemprop:"text"},domProps:{innerHTML:t._s(e.quote.content)}})]):t._e(),t._v(" "),n("p",{directives:[{name:"lazy-container",rawName:"v-lazy-container",value:{selector:"img"},expression:"{ selector: 'img' }"}],domProps:{innerHTML:t._s(e.content)}})])])})),0)]}}],null,!1,1505187036)}):t._e()],1)}),[],!1,null,"211cc62c",null).exports,d=(n(15),n(2)),f={components:{},props:{entityType:{type:String,default:"",required:!0},entityId:{type:Number,default:0,required:!0}},data:function(){return{content:"",sending:!1,quote:null}},computed:{btnName:function(){return this.sending?"正在发表...":"发表"},user:function(){return this.$store.state.user.current},isLogin:function(){return null!=this.$store.state.user.current}},methods:{create:function(){var t=this;return Object(d.a)(regeneratorRuntime.mark((function e(){var data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.content){e.next=3;break}return t.$toast.error("请输入评论内容"),e.abrupt("return");case 3:if(!t.sending){e.next=6;break}return console.log("正在发送中，请不要重复提交..."),e.abrupt("return");case 6:return t.sending=!0,e.prev=7,e.next=10,t.$axios.post("/api/comment/create",{entityType:t.entityType,entityId:t.entityId,content:t.content,quoteId:t.quote?t.quote.commentId:""});case 10:data=e.sent,t.$emit("created",data),t.content="",t.quote=null,e.next=20;break;case 16:e.prev=16,e.t0=e.catch(7),console.error(e.t0),t.$toast.error("评论失败："+(e.t0.message||e.t0));case 20:return e.prev=20,t.sending=!1,e.finish(20);case 23:case"end":return e.stop()}}),e,null,[[7,16,20,23]])})))()},reply:function(t){this.quote=t,this.$refs.commentEditor.scrollIntoView({block:"start",behavior:"smooth"})},cancelReply:function(){this.quote=null},toLogin:function(){o.a.toSignin()}}},v=Object(l.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"comment-form"},[t.isLogin?n("div",{staticClass:"comment-create"},[n("div",{ref:"commentEditor",staticClass:"comment-input-wrapper"},[t.quote?n("div",{staticClass:"comment-quote-info"},[t._v("\n        回复：\n        "),n("label",{domProps:{textContent:t._s(t.quote.user.nickname)}}),t._v(" "),n("i",{staticClass:"iconfont icon-close",attrs:{alt:"取消回复"},on:{click:t.cancelReply}})]):t._e(),t._v(" "),n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.content,expression:"content"}],staticClass:"textarea is-large",attrs:{"editor-id":"createEditor",height:"200px",placeholder:"请发表你的观点..."},domProps:{value:t.content},on:{submit:t.create,input:function(e){e.target.composing||(t.content=e.target.value)}}})]),t._v(" "),n("div",{staticClass:"comment-button-wrapper"},[n("span",[t._v("Ctrl or ⌘ + Enter")]),t._v(" "),n("button",{staticClass:"button is-small is-success",domProps:{textContent:t._s(t.btnName)},on:{click:t.create}})])]):n("div",{staticClass:"comment-not-login"},[n("div",{staticClass:"comment-login-div"},[t._v("\n      请\n      "),n("a",{staticStyle:{"font-weight":"700"},on:{click:t.toLogin}},[t._v("登录")]),t._v("后发表观点\n    ")])])])}),[],!1,null,"7e0a8a20",null).exports,y={components:{},props:{entityType:{type:String,default:"",required:!0},entityId:{type:Number,default:0,required:!0}},data:function(){return{content:"",sending:!1,quote:null}},computed:{btnName:function(){return this.sending?"正在发表...":"发表"},user:function(){return this.$store.state.user.current},isLogin:function(){return null!=this.$store.state.user.current}},methods:{create:function(){var t=this;return Object(d.a)(regeneratorRuntime.mark((function e(){var data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.content){e.next=3;break}return t.$toast.error("请输入评论内容"),e.abrupt("return");case 3:if(!t.sending){e.next=6;break}return console.log("正在发送中，请不要重复提交..."),e.abrupt("return");case 6:return t.sending=!0,e.prev=7,e.next=10,t.$axios.post("/api/comment/create",{contentType:"text",entityType:t.entityType,entityId:t.entityId,content:t.content,quoteId:t.quote?t.quote.commentId:""});case 10:data=e.sent,t.$emit("created",data),t.content="",t.quote=null,e.next=20;break;case 16:e.prev=16,e.t0=e.catch(7),console.error(e.t0),t.$toast.error("评论失败："+(e.t0.message||e.t0));case 20:return e.prev=20,t.sending=!1,e.finish(20);case 23:case"end":return e.stop()}}),e,null,[[7,16,20,23]])})))()},reply:function(t){this.quote=t,this.$refs.commentEditor.scrollIntoView({block:"start",behavior:"smooth"})},cancelReply:function(){this.quote=null},toLogin:function(){o.a.toSignin()}}},h={name:"Comment",components:{CommentList:m,CommentInput:v,CommentTextInput:Object(l.a)(y,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"comment-form"},[t.isLogin?n("div",{staticClass:"comment-create"},[n("div",{ref:"commentEditor",staticClass:"comment-input-wrapper"},[t.quote?n("div",{staticClass:"comment-quote-info"},[t._v("\n        回复：\n        "),n("label",{domProps:{textContent:t._s(t.quote.user.nickname)}}),t._v(" "),n("i",{staticClass:"iconfont icon-close",attrs:{alt:"取消回复"},on:{click:t.cancelReply}})]):t._e(),t._v(" "),n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.content,expression:"content"}],staticClass:"text-input",attrs:{placeholder:"请发表你的观点..."},domProps:{value:t.content},on:{keydown:[function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:e.ctrlKey?t.create(e):null},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:e.metaKey?t.create(e):null}],input:function(e){e.target.composing||(t.content=e.target.value)}}})]),t._v(" "),n("div",{staticClass:"comment-button-wrapper"},[n("span",[t._v("Ctrl or ⌘ + Enter")]),t._v(" "),n("button",{staticClass:"button is-small is-success",domProps:{textContent:t._s(t.btnName)},on:{click:t.create}})])]):n("div",{staticClass:"comment-not-login"},[n("div",{staticClass:"comment-login-div"},[t._v("\n      请\n      "),n("a",{staticStyle:{"font-weight":"700"},on:{click:t.toLogin}},[t._v("登录")]),t._v("后发表观点\n    ")])])])}),[],!1,null,"1de668c8",null).exports},props:{mode:{type:String,default:"markdown"},entityType:{type:String,default:"",required:!0},entityId:{type:Number,default:0,required:!0},commentsPage:{type:Object,default:function(){return{}}},showAd:{type:Boolean,default:!1}},methods:{commentCreated:function(data){this.$refs.list.append(data)},reply:function(t){this.$refs.input.reply(t)}}},C=Object(l.a)(h,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",["markdown"===t.mode?n("comment-input",{ref:"input",attrs:{"entity-id":t.entityId,"entity-type":t.entityType},on:{created:t.commentCreated}}):n("comment-text-input",{ref:"input",attrs:{"entity-id":t.entityId,"entity-type":t.entityType},on:{created:t.commentCreated}}),t._v(" "),n("comment-list",{ref:"list",attrs:{"entity-id":t.entityId,"entity-type":t.entityType,"comments-page":t.commentsPage},on:{reply:t.reply}})],1)}),[],!1,null,null,null);e.a=C.exports}}]);