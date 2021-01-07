/*! For license information please see ../../../../LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[85],{208:function(e,t,n){"use strict";n(93),n(23),n(24),n(9);var o=n(91),r=n(92),c=n(211),l=n.n(c),f=function(){function e(){Object(o.a)(this,e)}return Object(r.a)(e,[{key:"getCity",value:function(){var e=l.a.get("city");return void 0!==e?e:"北京"}},{key:"setCity",value:function(e){return l.a.set("city",e)}},{key:"linkTo",value:function(path){window.location=path}},{key:"toSignin",value:function(e){e||(e=window.location.pathname),this.linkTo("/user/signin?ref="+encodeURIComponent(e))}},{key:"isSigninUrl",value:function(e){return"/user/signin"===e}},{key:"isArray",value:function(e){return"[object Array]"===Object.prototype.toString.call(e)}},{key:"isDate",value:function(e){return"[object Date]"==={}.toString.call(e)&&"Invalid Date"!==e.toString()&&!isNaN(e)}},{key:"isElement",value:function(e){return!(!e||!e.nodeName||1!==e.nodeType)}},{key:"isFunction",value:function(e){return"[object Function]"===Object.prototype.toString.call(e)}},{key:"unique",value:function(e){return e.filter((function(e,t,n){return n.indexOf(e,0)===t}))}},{key:"isNumber",value:function(e){return"[object Number]"===Object.prototype.toString.call(e)&&isFinite(e)}},{key:"isObject",value:function(e){return"[object Object]"===Object.prototype.toString.call(e)}},{key:"isString",value:function(e){return"[object String]"===Object.prototype.toString.call(e)}},{key:"isBoolean",value:function(e){return"boolean"==typeof e}},{key:"getCityList",value:function(){return["北京","上海","深圳","武汉","杭州"]}},{key:"isEmpty",value:function(content){var e=content;if(""===e||void 0===e)return!0;return new RegExp("^[ ]+$").test(e)}},{key:"getTopText",value:function(e){return 1===e?"顶":2===e?"火":3===e?"精华":""}}]),e}();t.a=new f},211:function(e,t,n){var o,r;!function(c){if(void 0===(r="function"==typeof(o=c)?o.call(t,n,t,e):o)||(e.exports=r),!0,e.exports=c(),!!0){var l=window.Cookies,f=window.Cookies=c();f.noConflict=function(){return window.Cookies=l,f}}}((function(){function e(){for(var i=0,e={};i<arguments.length;i++){var t=arguments[i];for(var n in t)e[n]=t[n]}return e}function t(s){return s.replace(/(%[0-9A-Z]{2})+/g,decodeURIComponent)}return function n(o){function r(){}function c(t,n,c){if("undefined"!=typeof document){"number"==typeof(c=e({path:"/"},r.defaults,c)).expires&&(c.expires=new Date(1*new Date+864e5*c.expires)),c.expires=c.expires?c.expires.toUTCString():"";try{var l=JSON.stringify(n);/^[\{\[]/.test(l)&&(n=l)}catch(e){}n=o.write?o.write(n,t):encodeURIComponent(String(n)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),t=encodeURIComponent(String(t)).replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent).replace(/[\(\)]/g,escape);var f="";for(var d in c)c[d]&&(f+="; "+d,!0!==c[d]&&(f+="="+c[d].split(";")[0]));return document.cookie=t+"="+n+f}}function l(e,n){if("undefined"!=typeof document){for(var r={},c=document.cookie?document.cookie.split("; "):[],i=0;i<c.length;i++){var l=c[i].split("="),f=l.slice(1).join("=");n||'"'!==f.charAt(0)||(f=f.slice(1,-1));try{var d=t(l[0]);if(f=(o.read||o)(f,d)||t(f),n)try{f=JSON.parse(f)}catch(e){}if(r[d]=f,e===d)break}catch(e){}}return e?r[e]:r}}return r.set=c,r.get=function(e){return l(e,!1)},r.getJSON=function(e){return l(e,!0)},r.remove=function(t,n){c(t,"",e(n,{expires:-1}))},r.defaults={},r.withConverter=n,r}((function(){}))}))},331:function(e,t,n){},456:function(e,t,n){"use strict";var o=n(331);n.n(o).a},575:function(e,t,n){"use strict";n.r(t);n(16);var o=n(2),r=n(208),c={layout:"no-footer",asyncData:function(e){e.params;var t=e.query;return{code:t.code,state:t.state,ref:t.ref}},data:function(){return{loading:!1}},mounted:function(){this.callback()},methods:{callback:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.loading=!0,t.prev=1,t.next=4,e.$store.dispatch("user/signinByQQ",{code:e.code,state:e.state});case 4:n=t.sent,e.ref?r.a.linkTo(e.ref):r.a.linkTo("/user/"+n.id),t.next=12;break;case 8:t.prev=8,t.t0=t.catch(1),console.log(t.t0),e.$toast.error("登录失败："+(t.t0.message||t.t0),{onComplete:function(){r.a.linkTo("/user/signin")}});case 12:return t.prev=12,e.loading=!1,t.finish(12);case 15:case"end":return t.stop()}}),t,null,[[1,8,12,15]])})))()}},head:function(){return{title:this.$siteTitle("登录处理中...")}}},l=(n(456),n(29)),component=Object(l.a)(c,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",[this.loading?t("div",{staticClass:"loading modal is-active"},[t("div",{staticClass:"modal-background"}),this._v(" "),this._m(0)]):this._e()])}),[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"modal-content"},[t("div",{staticClass:"loading-animation"}),this._v(" "),t("span",{staticClass:"loading-text"},[this._v("登录中，请稍后...")])])}],!1,null,"79adfffc",null);t.default=component.exports}}]);