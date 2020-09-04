/*! For license information please see ../../../../LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[78],{200:function(t,e,n){"use strict";n(91),n(22),n(23),n(8);var o=n(89),r=n(90),c=n(205),l=n.n(c),f=function(){function t(){Object(o.a)(this,t)}return Object(r.a)(t,[{key:"getCity",value:function(){var t=l.a.get("city");return void 0!==t?t:"北京"}},{key:"setCity",value:function(t){return l.a.set("city",t)}},{key:"linkTo",value:function(path){window.location=path}},{key:"toSignin",value:function(t){t||(t=window.location.pathname),this.linkTo("/user/signin?ref="+encodeURIComponent(t))}},{key:"isSigninUrl",value:function(t){return"/user/signin"===t}},{key:"isArray",value:function(t){return"[object Array]"===Object.prototype.toString.call(t)}},{key:"isDate",value:function(t){return"[object Date]"==={}.toString.call(t)&&"Invalid Date"!==t.toString()&&!isNaN(t)}},{key:"isElement",value:function(t){return!(!t||!t.nodeName||1!==t.nodeType)}},{key:"isFunction",value:function(t){return"[object Function]"===Object.prototype.toString.call(t)}},{key:"isNumber",value:function(t){return"[object Number]"===Object.prototype.toString.call(t)&&isFinite(t)}},{key:"isObject",value:function(t){return"[object Object]"===Object.prototype.toString.call(t)}},{key:"isString",value:function(t){return"[object String]"===Object.prototype.toString.call(t)}},{key:"isBoolean",value:function(t){return"boolean"==typeof t}},{key:"getCityList",value:function(){return["北京","上海","深圳","武汉","杭州"]}},{key:"isEmpty",value:function(content){var t=content;if(""===t||void 0===t)return!0;return new RegExp("^[ ]+$").test(t)}}]),t}();e.a=new f},205:function(t,e,n){var o,r;!function(c){if(void 0===(r="function"==typeof(o=c)?o.call(e,n,e,t):o)||(t.exports=r),!0,t.exports=c(),!!0){var l=window.Cookies,f=window.Cookies=c();f.noConflict=function(){return window.Cookies=l,f}}}((function(){function t(){for(var i=0,t={};i<arguments.length;i++){var e=arguments[i];for(var n in e)t[n]=e[n]}return t}function e(s){return s.replace(/(%[0-9A-Z]{2})+/g,decodeURIComponent)}return function n(o){function r(){}function c(e,n,c){if("undefined"!=typeof document){"number"==typeof(c=t({path:"/"},r.defaults,c)).expires&&(c.expires=new Date(1*new Date+864e5*c.expires)),c.expires=c.expires?c.expires.toUTCString():"";try{var l=JSON.stringify(n);/^[\{\[]/.test(l)&&(n=l)}catch(t){}n=o.write?o.write(n,e):encodeURIComponent(String(n)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),e=encodeURIComponent(String(e)).replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent).replace(/[\(\)]/g,escape);var f="";for(var d in c)c[d]&&(f+="; "+d,!0!==c[d]&&(f+="="+c[d].split(";")[0]));return document.cookie=e+"="+n+f}}function l(t,n){if("undefined"!=typeof document){for(var r={},c=document.cookie?document.cookie.split("; "):[],i=0;i<c.length;i++){var l=c[i].split("="),f=l.slice(1).join("=");n||'"'!==f.charAt(0)||(f=f.slice(1,-1));try{var d=e(l[0]);if(f=(o.read||o)(f,d)||e(f),n)try{f=JSON.parse(f)}catch(t){}if(r[d]=f,t===d)break}catch(t){}}return t?r[t]:r}}return r.set=c,r.get=function(t){return l(t,!1)},r.getJSON=function(t){return l(t,!0)},r.remove=function(e,n){c(e,"",t(n,{expires:-1}))},r.defaults={},r.withConverter=n,r}((function(){}))}))},289:function(t,e,n){},375:function(t,e,n){"use strict";var o=n(289);n.n(o).a},491:function(t,e,n){"use strict";n.r(e);n(15);var o=n(2),r=n(200),c={layout:"no-footer",asyncData:function(t){t.params;var e=t.query;return{code:e.code,state:e.state,ref:e.ref}},data:function(){return{loading:!1}},mounted:function(){this.callback()},methods:{callback:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.loading=!0,e.prev=1,e.next=4,t.$store.dispatch("user/signinByGithub",{code:t.code,state:t.state});case 4:n=e.sent,t.ref?r.a.linkTo(t.ref):r.a.linkTo("/user/"+n.id),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),t.$toast.error("登录失败："+(e.t0.message||e.t0),{onComplete:function(){r.a.linkTo("/user/signin")}});case 11:return e.prev=11,t.loading=!1,e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[1,8,11,14]])})))()}},head:function(){return{title:this.$siteTitle("登录处理中...")}}},l=(n(375),n(49)),component=Object(l.a)(c,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[this.loading?e("div",{staticClass:"loading modal is-active"},[e("div",{staticClass:"modal-background"}),this._v(" "),this._m(0)]):this._e()])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"modal-content"},[e("div",{staticClass:"loading-animation"}),this._v(" "),e("span",{staticClass:"loading-text"},[this._v("登录中，请稍后...")])])}],!1,null,"a8ef8b06",null);e.default=component.exports}}]);