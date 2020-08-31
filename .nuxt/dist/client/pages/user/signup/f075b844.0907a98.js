/*! For license information please see ../../../LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[84],{200:function(t,e,n){"use strict";n(91),n(22),n(23),n(8);var r=n(89),o=n(90),c=n(205),l=n.n(c),f=function(){function t(){Object(r.a)(this,t)}return Object(o.a)(t,[{key:"getCity",value:function(){var t=l.a.get("city");return t||"北京"}},{key:"setCity",value:function(t){return l.a.set("city",t)}},{key:"linkTo",value:function(path){window.location=path}},{key:"toSignin",value:function(t){t||(t=window.location.pathname),this.linkTo("/user/signin?ref="+encodeURIComponent(t))}},{key:"isSigninUrl",value:function(t){return"/user/signin"===t}},{key:"isArray",value:function(t){return"[object Array]"===Object.prototype.toString.call(t)}},{key:"isDate",value:function(t){return"[object Date]"==={}.toString.call(t)&&"Invalid Date"!==t.toString()&&!isNaN(t)}},{key:"isElement",value:function(t){return!(!t||!t.nodeName||1!==t.nodeType)}},{key:"isFunction",value:function(t){return"[object Function]"===Object.prototype.toString.call(t)}},{key:"isNumber",value:function(t){return"[object Number]"===Object.prototype.toString.call(t)&&isFinite(t)}},{key:"isObject",value:function(t){return"[object Object]"===Object.prototype.toString.call(t)}},{key:"isString",value:function(t){return"[object String]"===Object.prototype.toString.call(t)}},{key:"isBoolean",value:function(t){return"boolean"==typeof t}},{key:"isEmpty",value:function(content){var t=content;if(""===t||void 0===t)return!0;return new RegExp("^[ ]+$").test(t)}}]),t}();e.a=new f},205:function(t,e,n){var r,o;!function(c){if(void 0===(o="function"==typeof(r=c)?r.call(e,n,e,t):r)||(t.exports=o),!0,t.exports=c(),!!0){var l=window.Cookies,f=window.Cookies=c();f.noConflict=function(){return window.Cookies=l,f}}}((function(){function t(){for(var i=0,t={};i<arguments.length;i++){var e=arguments[i];for(var n in e)t[n]=e[n]}return t}function e(s){return s.replace(/(%[0-9A-Z]{2})+/g,decodeURIComponent)}return function n(r){function o(){}function c(e,n,c){if("undefined"!=typeof document){"number"==typeof(c=t({path:"/"},o.defaults,c)).expires&&(c.expires=new Date(1*new Date+864e5*c.expires)),c.expires=c.expires?c.expires.toUTCString():"";try{var l=JSON.stringify(n);/^[\{\[]/.test(l)&&(n=l)}catch(t){}n=r.write?r.write(n,e):encodeURIComponent(String(n)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),e=encodeURIComponent(String(e)).replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent).replace(/[\(\)]/g,escape);var f="";for(var d in c)c[d]&&(f+="; "+d,!0!==c[d]&&(f+="="+c[d].split(";")[0]));return document.cookie=e+"="+n+f}}function l(t,n){if("undefined"!=typeof document){for(var o={},c=document.cookie?document.cookie.split("; "):[],i=0;i<c.length;i++){var l=c[i].split("="),f=l.slice(1).join("=");n||'"'!==f.charAt(0)||(f=f.slice(1,-1));try{var d=e(l[0]);if(f=(r.read||r)(f,d)||e(f),n)try{f=JSON.parse(f)}catch(t){}if(o[d]=f,t===d)break}catch(t){}}return t?o[t]:o}}return o.set=c,o.get=function(t){return l(t,!1)},o.getJSON=function(t){return l(t,!0)},o.remove=function(e,n){c(e,"",t(n,{expires:-1}))},o.defaults={},o.withConverter=n,o}((function(){}))}))},455:function(t,e,n){"use strict";n.r(e);n(15);var r=n(2),o=n(200),c={name:"GithubLogin",props:{title:{type:String,default:"Github 登录"},refUrl:{type:String,default:""},isButton:{type:Boolean,default:!0}},data:function(){return{refUrlValue:this.refUrl}},methods:{githubLogin:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t.refUrlValue||(t.refUrlValue=window.location.pathname),e.next=4,t.$axios.get("/api/login/github/authorize",{params:{ref:t.refUrlValue}});case 4:n=e.sent,window.location=n.url,e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0),t.$toast.error("登录失败："+(e.t0.message||e.t0));case 12:case"end":return e.stop()}}),e,null,[[0,8]])})))()}}},l=n(49),f=Object(l.a)(c,(function(){var t=this.$createElement,e=this._self._c||t;return e("a",{staticClass:"is-black",class:{button:this.isButton},on:{click:this.githubLogin}},[e("i",{staticClass:"iconfont icon-github"}),this._v(" \n  "),e("strong",[this._v(this._s(this.title))])])}),[],!1,null,"60f12e5b",null).exports,d={name:"QQLogin",props:{title:{type:String,default:"QQ 登录"},refUrl:{type:String,default:""},isButton:{type:Boolean,default:!0}},methods:{qqLogin:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t.refUrlValue||(t.refUrlValue=window.location.pathname),e.next=4,t.$axios.get("/api/login/qq/authorize",{params:{ref:t.refUrlValue}});case 4:n=e.sent,window.location=n.url,e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0),t.$toast.error("登录失败："+(e.t0.message||e.t0));case 12:case"end":return e.stop()}}),e,null,[[0,8]])})))()}}},v={components:{GithubLogin:f,QqLogin:Object(l.a)(d,(function(){var t=this.$createElement,e=this._self._c||t;return e("a",{staticClass:"is-info",class:{button:this.isButton},on:{click:this.qqLogin}},[e("i",{staticClass:"iconfont icon-qq"}),this._v(" \n  "),e("strong",[this._v(this._s(this.title))])])}),[],!1,null,"46cf9fdf",null).exports},asyncData:function(t){t.params;return{ref:t.query.ref}},data:function(){return{nickname:"",email:"",password:"",rePassword:"",captchaId:"",captchaUrl:"",captchaCode:""}},mounted:function(){this.showCaptcha()},methods:{signup:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$store.dispatch("user/signup",{captchaId:t.captchaId,captchaCode:t.captchaCode,nickname:t.nickname,email:t.email,password:t.password,rePassword:t.rePassword,ref:t.ref});case 3:t.ref?o.a.linkTo(t.ref):o.a.linkTo("/user/settings"),e.next=11;break;case 6:return e.prev=6,e.t0=e.catch(0),t.$toast.error(e.t0.message||e.t0),e.next=11,t.showCaptcha();case 11:case"end":return e.stop()}}),e,null,[[0,6]])})))()},showCaptcha:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.get("/api/captcha/request");case 3:n=e.sent,t.captchaId=n.captchaId,t.captchaUrl=n.captchaUrl,t.captchaCode="",e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),t.$toast.error(e.t0.message||e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))()}},head:function(){return{title:this.$siteTitle("注册")}}},h=Object(l.a)(v,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"main"},[n("div",{staticClass:"container"},[n("div",{staticClass:"main-body"},[n("div",{staticClass:"widget"},[n("div",{staticClass:"widget-header"},[t._v("\n          注册\n        ")]),t._v(" "),n("div",{staticClass:"widget-content"},[n("div",{staticClass:"field"},[n("label",{staticClass:"label"},[t._v("昵称")]),t._v(" "),n("div",{staticClass:"control has-icons-left"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.nickname,expression:"nickname"}],staticClass:"input is-success",attrs:{type:"text",placeholder:"请输入昵称"},domProps:{value:t.nickname},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.signup(e)},input:function(e){e.target.composing||(t.nickname=e.target.value)}}}),t._v(" "),t._m(0)])]),t._v(" "),n("div",{staticClass:"field"},[n("label",{staticClass:"label"},[t._v("邮箱")]),t._v(" "),n("div",{staticClass:"control has-icons-left"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"input is-success",attrs:{type:"text",placeholder:"请输入邮箱"},domProps:{value:t.email},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.signup(e)},input:function(e){e.target.composing||(t.email=e.target.value)}}}),t._v(" "),t._m(1)])]),t._v(" "),n("div",{staticClass:"field"},[n("label",{staticClass:"label"},[t._v("密码")]),t._v(" "),n("div",{staticClass:"control has-icons-left"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"input",attrs:{type:"password",placeholder:"请输入密码"},domProps:{value:t.password},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.signup(e)},input:function(e){e.target.composing||(t.password=e.target.value)}}}),t._v(" "),t._m(2)])]),t._v(" "),n("div",{staticClass:"field"},[n("label",{staticClass:"label"},[t._v("确认密码")]),t._v(" "),n("div",{staticClass:"control has-icons-left"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.rePassword,expression:"rePassword"}],staticClass:"input",attrs:{type:"password",placeholder:"请再次输入密码"},domProps:{value:t.rePassword},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.signup(e)},input:function(e){e.target.composing||(t.rePassword=e.target.value)}}}),t._v(" "),t._m(3)])]),t._v(" "),n("div",{staticClass:"field"},[n("label",{staticClass:"label"},[t._v("验证码")]),t._v(" "),n("div",{staticClass:"control has-icons-left"},[n("div",{staticClass:"field is-horizontal"},[n("div",{staticClass:"field",staticStyle:{width:"100%"}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.captchaCode,expression:"captchaCode"}],staticClass:"input",attrs:{type:"text",placeholder:"验证码"},domProps:{value:t.captchaCode},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.signup(e)},input:function(e){e.target.composing||(t.captchaCode=e.target.value)}}}),t._v(" "),t._m(4)]),t._v(" "),t.captchaUrl?n("div",{staticClass:"field"},[n("a",{on:{click:t.showCaptcha}},[n("img",{staticStyle:{height:"40px"},attrs:{src:t.captchaUrl}})])]):t._e()])])]),t._v(" "),n("div",{staticClass:"field"},[n("div",{staticClass:"control"},[n("button",{staticClass:"button is-success",on:{click:t.signup}},[t._v("\n                注册\n              ")]),t._v(" "),n("github-login",{attrs:{"ref-url":t.ref}}),t._v(" "),n("qq-login",{attrs:{"ref-url":t.ref}}),t._v(" "),n("nuxt-link",{staticClass:"button is-text",attrs:{to:"/user/signin"}},[t._v("\n                已有账号，前往登录>>\n              ")])],1)])])])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"icon is-small is-left"},[e("i",{staticClass:"iconfont icon-username"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"icon is-small is-left"},[e("i",{staticClass:"iconfont icon-email"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"icon is-small is-left"},[e("i",{staticClass:"iconfont icon-password"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"icon is-small is-left"},[e("i",{staticClass:"iconfont icon-password"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"icon is-small is-left"},[e("i",{staticClass:"iconfont icon-captcha"})])}],!1,null,"b364a3c8",null);e.default=h.exports}}]);