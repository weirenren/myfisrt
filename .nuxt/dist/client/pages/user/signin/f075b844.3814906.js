/*! For license information please see ../../../LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[88],{208:function(t,e,n){"use strict";n(93),n(23),n(24),n(9);var r=n(91),o=n(92),c=n(211),l=n.n(c),f=function(){function t(){Object(r.a)(this,t)}return Object(o.a)(t,[{key:"getCity",value:function(){var t=l.a.get("city");return void 0!==t?t:"北京"}},{key:"setCity",value:function(t){return l.a.set("city",t)}},{key:"linkTo",value:function(path){window.location=path}},{key:"toSignin",value:function(t){t||(t=window.location.pathname),this.linkTo("/user/signin?ref="+encodeURIComponent(t))}},{key:"isSigninUrl",value:function(t){return"/user/signin"===t}},{key:"isArray",value:function(t){return"[object Array]"===Object.prototype.toString.call(t)}},{key:"isDate",value:function(t){return"[object Date]"==={}.toString.call(t)&&"Invalid Date"!==t.toString()&&!isNaN(t)}},{key:"isElement",value:function(t){return!(!t||!t.nodeName||1!==t.nodeType)}},{key:"isFunction",value:function(t){return"[object Function]"===Object.prototype.toString.call(t)}},{key:"unique",value:function(t){return t.filter((function(t,e,n){return n.indexOf(t,0)===e}))}},{key:"isNumber",value:function(t){return"[object Number]"===Object.prototype.toString.call(t)&&isFinite(t)}},{key:"isObject",value:function(t){return"[object Object]"===Object.prototype.toString.call(t)}},{key:"isString",value:function(t){return"[object String]"===Object.prototype.toString.call(t)}},{key:"isBoolean",value:function(t){return"boolean"==typeof t}},{key:"getCityList",value:function(){return["北京","上海","深圳","武汉","杭州"]}},{key:"isEmpty",value:function(content){var t=content;if(""===t||void 0===t)return!0;return new RegExp("^[ ]+$").test(t)}},{key:"getTopText",value:function(t){return 1===t?"顶":2===t?"火":3===t?"精华":""}}]),t}();e.a=new f},211:function(t,e,n){var r,o;!function(c){if(void 0===(o="function"==typeof(r=c)?r.call(e,n,e,t):r)||(t.exports=o),!0,t.exports=c(),!!0){var l=window.Cookies,f=window.Cookies=c();f.noConflict=function(){return window.Cookies=l,f}}}((function(){function t(){for(var i=0,t={};i<arguments.length;i++){var e=arguments[i];for(var n in e)t[n]=e[n]}return t}function e(s){return s.replace(/(%[0-9A-Z]{2})+/g,decodeURIComponent)}return function n(r){function o(){}function c(e,n,c){if("undefined"!=typeof document){"number"==typeof(c=t({path:"/"},o.defaults,c)).expires&&(c.expires=new Date(1*new Date+864e5*c.expires)),c.expires=c.expires?c.expires.toUTCString():"";try{var l=JSON.stringify(n);/^[\{\[]/.test(l)&&(n=l)}catch(t){}n=r.write?r.write(n,e):encodeURIComponent(String(n)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),e=encodeURIComponent(String(e)).replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent).replace(/[\(\)]/g,escape);var f="";for(var d in c)c[d]&&(f+="; "+d,!0!==c[d]&&(f+="="+c[d].split(";")[0]));return document.cookie=e+"="+n+f}}function l(t,n){if("undefined"!=typeof document){for(var o={},c=document.cookie?document.cookie.split("; "):[],i=0;i<c.length;i++){var l=c[i].split("="),f=l.slice(1).join("=");n||'"'!==f.charAt(0)||(f=f.slice(1,-1));try{var d=e(l[0]);if(f=(r.read||r)(f,d)||e(f),n)try{f=JSON.parse(f)}catch(t){}if(o[d]=f,t===d)break}catch(t){}}return t?o[t]:o}}return o.set=c,o.get=function(t){return l(t,!1)},o.getJSON=function(t){return l(t,!0)},o.remove=function(e,n){c(e,"",t(n,{expires:-1}))},o.defaults={},o.withConverter=n,o}((function(){}))}))},565:function(t,e,n){"use strict";n.r(e);n(16);var r=n(2),o=n(208),c={components:{},asyncData:function(t){t.params;return{ref:t.query.ref}},data:function(){return{username:"",password:"",captchaId:"",captchaUrl:"",captchaCode:""}},computed:{currentUser:function(){return this.$store.state.user.current},isLogin:function(){return!!this.currentUser}},mounted:function(){this.redirectIfLogined()||this.showCaptcha()},methods:{submitLogin:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,t.username){e.next=4;break}return t.$toast.error("请输入用户名或邮箱"),e.abrupt("return");case 4:if(t.password){e.next=7;break}return t.$toast.error("请输入密码"),e.abrupt("return");case 7:if(t.captchaCode){e.next=10;break}return t.$toast.error("请输入验证码"),e.abrupt("return");case 10:return e.next=12,t.$store.dispatch("user/signin",{captchaId:t.captchaId,captchaCode:t.captchaCode,username:t.username,password:t.password,ref:t.ref});case 12:n=e.sent,t.ref?o.a.linkTo(t.ref):o.a.linkTo("/user/"+n.id),e.next=21;break;case 16:return e.prev=16,e.t0=e.catch(0),t.$toast.error(e.t0.message||e.t0),e.next=21,t.showCaptcha();case 21:case"end":return e.stop()}}),e,null,[[0,16]])})))()},showCaptcha:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.get("/api/captcha/request",{params:{captchaId:t.captchaId||""}});case 3:n=e.sent,t.captchaId=n.captchaId,t.captchaUrl=n.captchaUrl,e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),t.$toast.error(e.t0.message||e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))()},redirectIfLogined:function(){if(this.isLogin){var t=this;return this.$toast.success("登录成功！",{duration:1e3,keepOnHover:!1,position:"top-center",onComplete:function(){t.ref&&!o.a.isSigninUrl(t.ref)?o.a.linkTo(t.ref):o.a.linkTo("/")}}),!0}return!1}},head:function(){return{title:this.$siteTitle("登录")}}},l=n(29),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"main"},[n("div",{staticClass:"container"},[n("div",{staticClass:"main-body"},[n("div",{staticClass:"widget"},[n("div",{staticClass:"widget-header"},[t._v("\n          登录\n        ")]),t._v(" "),n("div",{staticClass:"widget-content"},[n("div",{staticClass:"field"},[n("label",{staticClass:"label"},[t._v("用户名/邮箱")]),t._v(" "),n("div",{staticClass:"control has-icons-left"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.username,expression:"username"}],staticClass:"input is-success",attrs:{type:"text",placeholder:"请输入用户名或邮箱"},domProps:{value:t.username},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.submitLogin(e)},input:function(e){e.target.composing||(t.username=e.target.value)}}}),t._v(" "),t._m(0)])]),t._v(" "),n("div",{staticClass:"field"},[n("label",{staticClass:"label"},[t._v("密码")]),t._v(" "),n("div",{staticClass:"control has-icons-left"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"input",attrs:{type:"password",placeholder:"请输入密码"},domProps:{value:t.password},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.submitLogin(e)},input:function(e){e.target.composing||(t.password=e.target.value)}}}),t._v(" "),t._m(1)])]),t._v(" "),n("div",{staticClass:"field"},[n("label",{staticClass:"label"},[t._v("验证码")]),t._v(" "),n("div",{staticClass:"control has-icons-left"},[n("div",{staticClass:"field is-horizontal"},[n("div",{staticClass:"field"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.captchaCode,expression:"captchaCode"}],staticClass:"input",staticStyle:{"max-width":"150px","margin-right":"20px"},attrs:{type:"text",placeholder:"验证码"},domProps:{value:t.captchaCode},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.submitLogin(e)},input:function(e){e.target.composing||(t.captchaCode=e.target.value)}}}),t._v(" "),t._m(2)]),t._v(" "),t.captchaUrl?n("div",{staticClass:"field"},[n("a",{on:{click:t.showCaptcha}},[n("img",{staticStyle:{height:"40px"},attrs:{src:t.captchaUrl}})])]):t._e()])])]),t._v(" "),n("div",{staticClass:"field"},[n("div",{staticClass:"control"},[n("button",{staticClass:"button is-success",on:{click:t.submitLogin}},[t._v("\n                登录\n              ")]),t._v(" "),n("nuxt-link",{staticClass:"button is-text",attrs:{to:"/user/signup"}},[t._v("\n                没有账号？点击这里去注册>>\n              ")])],1)])])])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"icon is-small is-left"},[e("i",{staticClass:"iconfont icon-username"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"icon is-small is-left"},[e("i",{staticClass:"iconfont icon-password"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"icon is-small is-left"},[e("i",{staticClass:"iconfont icon-captcha"})])}],!1,null,null,null);e.default=component.exports}}]);