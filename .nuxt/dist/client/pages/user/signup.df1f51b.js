/*! For license information please see ../../LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[79],{199:function(e,t,n){"use strict";n(49),n(85),n(23),n(24),n(9);var r=n(83),o=n(84),c=n(201),l=n.n(c),d=function(){function e(){Object(r.a)(this,e)}return Object(o.a)(e,[{key:"getCity",value:function(){var e=l.a.get("city");return void 0!==e?e:"北京"}},{key:"setCity",value:function(e){return l.a.set("city",e)}},{key:"linkTo",value:function(path){window.location=path}},{key:"toSignin",value:function(e){e||(e=window.location.pathname),this.linkTo("/user/signin?ref="+encodeURIComponent(e))}},{key:"isSigninUrl",value:function(e){return"/user/signin"===e}},{key:"isArray",value:function(e){return"[object Array]"===Object.prototype.toString.call(e)}},{key:"isDate",value:function(e){return"[object Date]"==={}.toString.call(e)&&"Invalid Date"!==e.toString()&&!isNaN(e)}},{key:"isElement",value:function(e){return!(!e||!e.nodeName||1!==e.nodeType)}},{key:"isFunction",value:function(e){return"[object Function]"===Object.prototype.toString.call(e)}},{key:"unique",value:function(e){return e.filter((function(e,t,n){return n.indexOf(e,0)===t}))}},{key:"isNumber",value:function(e){return"[object Number]"===Object.prototype.toString.call(e)&&isFinite(e)}},{key:"isObject",value:function(e){return"[object Object]"===Object.prototype.toString.call(e)}},{key:"isString",value:function(e){return"[object String]"===Object.prototype.toString.call(e)}},{key:"isBoolean",value:function(e){return"boolean"==typeof e}},{key:"getCityList",value:function(){return["北京","上海","深圳","武汉","杭州"]}},{key:"isEmpty",value:function(content){var e=content;if(""===e||void 0===e)return!0;return new RegExp("^[ ]+$").test(e)}},{key:"getTopText",value:function(e){return 1===e?"顶":2===e?"火":3===e?"精华":""}},{key:"formatDate",value:function(e,t){t=t||"yyyy-MM-dd HH:mm:ss";var n=new Date(e),r={"M+":n.getMonth()+1,"d+":n.getDate(),"h+":n.getHours()%12,"H+":n.getHours(),"m+":n.getMinutes(),"s+":n.getSeconds(),"q+":Math.floor((n.getMonth()+3)/3),S:n.getMilliseconds()};for(var o in/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(n.getFullYear()+"").substr(4-RegExp.$1.length))),r)new RegExp("("+o+")").test(t)&&(t=t.replace(RegExp.$1,1===RegExp.$1.length?r[o]:("00"+r[o]).substr((""+r[o]).length)));return t}},{key:"prettyDate",value:function(t){var n=(new Date).getTime()-t;return n/6e4<1?"刚刚":n/6e4<60?parseInt(n/6e4)+"分钟前":n/36e5<=24?parseInt(n/36e5)+"小时前":n/864e5<=30?parseInt(n/864e5)+"天前":e.formatDate(t,"yyyy-MM-dd HH:mm:ss")}}]),e}();t.a=new d},201:function(e,t,n){var r,o;!function(c){if(void 0===(o="function"==typeof(r=c)?r.call(t,n,t,e):r)||(e.exports=o),!0,e.exports=c(),!!0){var l=window.Cookies,d=window.Cookies=c();d.noConflict=function(){return window.Cookies=l,d}}}((function(){function e(){for(var i=0,e={};i<arguments.length;i++){var t=arguments[i];for(var n in t)e[n]=t[n]}return e}function t(s){return s.replace(/(%[0-9A-Z]{2})+/g,decodeURIComponent)}return function n(r){function o(){}function c(t,n,c){if("undefined"!=typeof document){"number"==typeof(c=e({path:"/"},o.defaults,c)).expires&&(c.expires=new Date(1*new Date+864e5*c.expires)),c.expires=c.expires?c.expires.toUTCString():"";try{var l=JSON.stringify(n);/^[\{\[]/.test(l)&&(n=l)}catch(e){}n=r.write?r.write(n,t):encodeURIComponent(String(n)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),t=encodeURIComponent(String(t)).replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent).replace(/[\(\)]/g,escape);var d="";for(var f in c)c[f]&&(d+="; "+f,!0!==c[f]&&(d+="="+c[f].split(";")[0]));return document.cookie=t+"="+n+d}}function l(e,n){if("undefined"!=typeof document){for(var o={},c=document.cookie?document.cookie.split("; "):[],i=0;i<c.length;i++){var l=c[i].split("="),d=l.slice(1).join("=");n||'"'!==d.charAt(0)||(d=d.slice(1,-1));try{var f=t(l[0]);if(d=(r.read||r)(d,f)||t(d),n)try{d=JSON.parse(d)}catch(e){}if(o[f]=d,e===f)break}catch(e){}}return e?o[e]:o}}return o.set=c,o.get=function(e){return l(e,!1)},o.getJSON=function(e){return l(e,!0)},o.remove=function(t,n){c(t,"",e(n,{expires:-1}))},o.defaults={},o.withConverter=n,o}((function(){}))}))},573:function(e,t,n){"use strict";n.r(t);n(16);var r=n(2),o=n(199),c={components:{},asyncData:function(e){e.params;return{ref:e.query.ref}},data:function(){return{nickname:"",email:"",password:"",rePassword:"",captchaId:"",captchaUrl:"",captchaCode:""}},mounted:function(){this.showCaptcha()},methods:{signup:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.$store.dispatch("user/signup",{captchaId:e.captchaId,captchaCode:e.captchaCode,nickname:e.nickname,email:e.email,password:e.password,rePassword:e.rePassword,ref:e.ref});case 3:e.ref?o.a.linkTo(e.ref):o.a.linkTo("/user/settings"),t.next=11;break;case 6:return t.prev=6,t.t0=t.catch(0),e.$toast.error(t.t0.message||t.t0),t.next=11,e.showCaptcha();case 11:case"end":return t.stop()}}),t,null,[[0,6]])})))()},showCaptcha:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.$axios.get("/api/captcha/request");case 3:n=t.sent,e.captchaId=n.captchaId,e.captchaUrl=n.captchaUrl,e.captchaCode="",t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),e.$toast.error(t.t0.message||t.t0);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})))()}},head:function(){return{title:this.$siteTitle("注册")}}},l=n(29),component=Object(l.a)(c,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"main"},[n("div",{staticClass:"container"},[n("div",{staticClass:"main-body"},[n("div",{staticClass:"widget"},[n("div",{staticClass:"widget-header"},[e._v("\n          注册\n        ")]),e._v(" "),n("div",{staticClass:"widget-content"},[n("div",{staticClass:"field"},[n("label",{staticClass:"label"},[e._v("昵称")]),e._v(" "),n("div",{staticClass:"control has-icons-left"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.nickname,expression:"nickname"}],staticClass:"input is-success",attrs:{type:"text",placeholder:"请输入昵称"},domProps:{value:e.nickname},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.signup(t)},input:function(t){t.target.composing||(e.nickname=t.target.value)}}}),e._v(" "),e._m(0)])]),e._v(" "),n("div",{staticClass:"field"},[n("label",{staticClass:"label"},[e._v("邮箱")]),e._v(" "),n("div",{staticClass:"control has-icons-left"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],staticClass:"input is-success",attrs:{type:"text",placeholder:"请输入邮箱"},domProps:{value:e.email},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.signup(t)},input:function(t){t.target.composing||(e.email=t.target.value)}}}),e._v(" "),e._m(1)])]),e._v(" "),n("div",{staticClass:"field"},[n("label",{staticClass:"label"},[e._v("密码")]),e._v(" "),n("div",{staticClass:"control has-icons-left"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],staticClass:"input",attrs:{type:"password",placeholder:"请输入密码"},domProps:{value:e.password},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.signup(t)},input:function(t){t.target.composing||(e.password=t.target.value)}}}),e._v(" "),e._m(2)])]),e._v(" "),n("div",{staticClass:"field"},[n("label",{staticClass:"label"},[e._v("确认密码")]),e._v(" "),n("div",{staticClass:"control has-icons-left"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.rePassword,expression:"rePassword"}],staticClass:"input",attrs:{type:"password",placeholder:"请再次输入密码"},domProps:{value:e.rePassword},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.signup(t)},input:function(t){t.target.composing||(e.rePassword=t.target.value)}}}),e._v(" "),e._m(3)])]),e._v(" "),n("div",{staticClass:"field"},[n("label",{staticClass:"label"},[e._v("验证码")]),e._v(" "),n("div",{staticClass:"control has-icons-left"},[n("div",{staticClass:"field is-horizontal"},[n("div",{staticClass:"field",staticStyle:{width:"100%"}},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.captchaCode,expression:"captchaCode"}],staticClass:"input",attrs:{type:"text",placeholder:"验证码"},domProps:{value:e.captchaCode},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.signup(t)},input:function(t){t.target.composing||(e.captchaCode=t.target.value)}}}),e._v(" "),e._m(4)]),e._v(" "),e.captchaUrl?n("div",{staticClass:"field"},[n("a",{on:{click:e.showCaptcha}},[n("img",{staticStyle:{height:"40px"},attrs:{src:e.captchaUrl}})])]):e._e()])])]),e._v(" "),n("div",{staticClass:"field"},[n("div",{staticClass:"control"},[n("button",{staticClass:"button is-success",on:{click:e.signup}},[e._v("\n                注册\n              ")]),e._v(" "),n("nuxt-link",{staticClass:"button is-text",attrs:{to:"/user/signin"}},[e._v("\n                已有账号，前往登录>>\n              ")])],1)])])])])])])}),[function(){var e=this.$createElement,t=this._self._c||e;return t("span",{staticClass:"icon is-small is-left"},[t("i",{staticClass:"iconfont icon-username"})])},function(){var e=this.$createElement,t=this._self._c||e;return t("span",{staticClass:"icon is-small is-left"},[t("i",{staticClass:"iconfont icon-email"})])},function(){var e=this.$createElement,t=this._self._c||e;return t("span",{staticClass:"icon is-small is-left"},[t("i",{staticClass:"iconfont icon-password"})])},function(){var e=this.$createElement,t=this._self._c||e;return t("span",{staticClass:"icon is-small is-left"},[t("i",{staticClass:"iconfont icon-password"})])},function(){var e=this.$createElement,t=this._self._c||e;return t("span",{staticClass:"icon is-small is-left"},[t("i",{staticClass:"iconfont icon-captcha"})])}],!1,null,"9136fa7e",null);t.default=component.exports}}]);