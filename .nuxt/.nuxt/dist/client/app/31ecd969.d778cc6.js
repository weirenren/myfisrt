/*! For license information please see ../LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{176:function(t,e,n){"use strict";n.r(e),n.d(e,"actions",(function(){return o})),n.d(e,"getters",(function(){return c}));n(15);var r=n(2),o={nuxtServerInit:function(t,e){return Object(r.a)(regeneratorRuntime.mark((function n(){var r,o,c;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t.commit,r=t.dispatch,e.req,o=e.app,n.next=4,r("config/loadConfig");case 4:return c=n.sent,o.head.title=c.siteTitle,n.next=8,r("user/getCurrentUser");case 8:case"end":return n.stop()}}),n)})))()}},c={}},177:function(t,e,n){"use strict";n.r(e),n.d(e,"state",(function(){return o})),n.d(e,"mutations",(function(){return c})),n.d(e,"actions",(function(){return f})),n.d(e,"getters",(function(){return l}));n(15);var r=n(2),o=function(){return{config:{}}},c={setConfig:function(t,e){t.config=e}},f={loadConfig:function(t){var e=this;return Object(r.a)(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.$axios.get("/api/config/configs");case 2:return r=n.sent,t.commit("setConfig",r),n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})))()}},l={siteTitle:function(t){return t.config.siteTitle||""},siteDescription:function(t){return t.config.siteDescription||""},siteKeywords:function(t){return t.config.siteKeywords||""}}},178:function(t,e,n){"use strict";n.r(e),n.d(e,"state",(function(){return o})),n.d(e,"mutations",(function(){return c})),n.d(e,"actions",(function(){return f}));n(15);var r=n(2),o=function(){return{current:null,userToken:null}},c={setCurrent:function(t,e){t.current=e},setUserToken:function(t,e){t.userToken=e}},f={loginSuccess:function(t,e){var n=e.token,r=e.user;this.$cookies.set("userToken",n,{maxAge:604800,path:"/"}),t.commit("setUserToken",n),t.commit("setCurrent",r)},getCurrentUser:function(t){var e=this;return Object(r.a)(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.$axios.get("/api/user/current");case 2:return r=n.sent,t.commit("setCurrent",r),n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})))()},signin:function(t,e){var n=this;return Object(r.a)(regeneratorRuntime.mark((function r(){var o,c,f,l,h;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return o=e.captchaId,c=e.captchaCode,f=e.username,l=e.password,r.next=3,n.$axios.post("/api/login/signin",{captchaId:o,captchaCode:c,username:f,password:l});case 3:return h=r.sent,t.dispatch("loginSuccess",h),r.abrupt("return",h.user);case 6:case"end":return r.stop()}}),r)})))()},signinByGithub:function(t,e){var n=this;return Object(r.a)(regeneratorRuntime.mark((function r(){var code,o,c;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return code=e.code,o=e.state,r.next=3,n.$axios.get("/api/login/github/callback",{params:{code:code,state:o}});case 3:return c=r.sent,t.dispatch("loginSuccess",c),r.abrupt("return",c.user);case 6:case"end":return r.stop()}}),r)})))()},signinByQQ:function(t,e){var n=this;return Object(r.a)(regeneratorRuntime.mark((function r(){var code,o,c;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return code=e.code,o=e.state,r.next=3,n.$axios.get("/api/login/qq/callback",{params:{code:code,state:o}});case 3:return c=r.sent,t.dispatch("loginSuccess",c),r.abrupt("return",c.user);case 6:case"end":return r.stop()}}),r)})))()},signup:function(t,e){var n=this;return Object(r.a)(regeneratorRuntime.mark((function r(){var o,c,f,l,h,d,m,v;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return o=e.captchaId,c=e.captchaCode,f=e.nickname,l=e.username,h=e.email,d=e.password,m=e.rePassword,r.next=3,n.$axios.post("/api/login/signup",{captchaId:o,captchaCode:c,nickname:f,username:l,email:h,password:d,rePassword:m});case 3:return v=r.sent,t.dispatch("loginSuccess",v),r.abrupt("return",v.user);case 6:case"end":return r.stop()}}),r)})))()},signout:function(t){var e=this;return Object(r.a)(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=e.$cookies.get("userToken"),n.next=3,e.$axios.get("/api/login/signout",{params:{userToken:r}});case 3:t.commit("setUserToken",null),t.commit("setCurrent",null),e.$cookies.remove("userToken");case 6:case"end":return n.stop()}}),n)})))()}}},29:function(t,e){var g;g=function(){return this}();try{g=g||new Function("return this")()}catch(t){"object"==typeof window&&(g=window)}t.exports=g},46:function(t,e,n){"use strict";(function(t){var n=("undefined"!=typeof window?window:void 0!==t?t:{}).__VUE_DEVTOOLS_GLOBAL_HOOK__;function r(t,e){if(void 0===e&&(e=[]),null===t||"object"!=typeof t)return t;var n,o=(n=function(e){return e.original===t},e.filter(n)[0]);if(o)return o.copy;var c=Array.isArray(t)?[]:{};return e.push({original:t,copy:c}),Object.keys(t).forEach((function(n){c[n]=r(t[n],e)})),c}function o(t,e){Object.keys(t).forEach((function(n){return e(t[n],n)}))}function c(t){return null!==t&&"object"==typeof t}var f=function(t,e){this.runtime=e,this._children=Object.create(null),this._rawModule=t;var n=t.state;this.state=("function"==typeof n?n():n)||{}},l={namespaced:{configurable:!0}};l.namespaced.get=function(){return!!this._rawModule.namespaced},f.prototype.addChild=function(t,e){this._children[t]=e},f.prototype.removeChild=function(t){delete this._children[t]},f.prototype.getChild=function(t){return this._children[t]},f.prototype.hasChild=function(t){return t in this._children},f.prototype.update=function(t){this._rawModule.namespaced=t.namespaced,t.actions&&(this._rawModule.actions=t.actions),t.mutations&&(this._rawModule.mutations=t.mutations),t.getters&&(this._rawModule.getters=t.getters)},f.prototype.forEachChild=function(t){o(this._children,t)},f.prototype.forEachGetter=function(t){this._rawModule.getters&&o(this._rawModule.getters,t)},f.prototype.forEachAction=function(t){this._rawModule.actions&&o(this._rawModule.actions,t)},f.prototype.forEachMutation=function(t){this._rawModule.mutations&&o(this._rawModule.mutations,t)},Object.defineProperties(f.prototype,l);var h=function(t){this.register([],t,!1)};h.prototype.get=function(path){return path.reduce((function(t,e){return t.getChild(e)}),this.root)},h.prototype.getNamespace=function(path){var t=this.root;return path.reduce((function(e,n){return e+((t=t.getChild(n)).namespaced?n+"/":"")}),"")},h.prototype.update=function(t){!function t(path,e,n){0;if(e.update(n),n.modules)for(var r in n.modules){if(!e.getChild(r))return void 0;t(path.concat(r),e.getChild(r),n.modules[r])}}([],this.root,t)},h.prototype.register=function(path,t,e){var n=this;void 0===e&&(e=!0);var r=new f(t,e);0===path.length?this.root=r:this.get(path.slice(0,-1)).addChild(path[path.length-1],r);t.modules&&o(t.modules,(function(t,r){n.register(path.concat(r),t,e)}))},h.prototype.unregister=function(path){var t=this.get(path.slice(0,-1)),e=path[path.length-1],n=t.getChild(e);n&&n.runtime&&t.removeChild(e)},h.prototype.isRegistered=function(path){var t=this.get(path.slice(0,-1)),e=path[path.length-1];return t.hasChild(e)};var d;var m=function(t){var e=this;void 0===t&&(t={}),!d&&"undefined"!=typeof window&&window.Vue&&C(window.Vue);var r=t.plugins;void 0===r&&(r=[]);var o=t.strict;void 0===o&&(o=!1),this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new h(t),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._watcherVM=new d,this._makeLocalGettersCache=Object.create(null);var c=this,f=this.dispatch,l=this.commit;this.dispatch=function(t,e){return f.call(c,t,e)},this.commit=function(t,e,n){return l.call(c,t,e,n)},this.strict=o;var m=this._modules.root.state;$(this,m,[],this._modules.root),w(this,m),r.forEach((function(t){return t(e)})),(void 0!==t.devtools?t.devtools:d.config.devtools)&&function(t){n&&(t._devtoolHook=n,n.emit("vuex:init",t),n.on("vuex:travel-to-state",(function(e){t.replaceState(e)})),t.subscribe((function(t,e){n.emit("vuex:mutation",t,e)}),{prepend:!0}),t.subscribeAction((function(t,e){n.emit("vuex:action",t,e)}),{prepend:!0}))}(this)},v={state:{configurable:!0}};function y(t,e,n){return e.indexOf(t)<0&&(n&&n.prepend?e.unshift(t):e.push(t)),function(){var i=e.indexOf(t);i>-1&&e.splice(i,1)}}function _(t,e){t._actions=Object.create(null),t._mutations=Object.create(null),t._wrappedGetters=Object.create(null),t._modulesNamespaceMap=Object.create(null);var n=t.state;$(t,n,[],t._modules.root,!0),w(t,n,e)}function w(t,e,n){var r=t._vm;t.getters={},t._makeLocalGettersCache=Object.create(null);var c=t._wrappedGetters,f={};o(c,(function(e,n){f[n]=function(t,e){return function(){return t(e)}}(e,t),Object.defineProperty(t.getters,n,{get:function(){return t._vm[n]},enumerable:!0})}));var l=d.config.silent;d.config.silent=!0,t._vm=new d({data:{$$state:e},computed:f}),d.config.silent=l,t.strict&&function(t){t._vm.$watch((function(){return this._data.$$state}),(function(){0}),{deep:!0,sync:!0})}(t),r&&(n&&t._withCommit((function(){r._data.$$state=null})),d.nextTick((function(){return r.$destroy()})))}function $(t,e,path,n,r){var o=!path.length,c=t._modules.getNamespace(path);if(n.namespaced&&(t._modulesNamespaceMap[c],t._modulesNamespaceMap[c]=n),!o&&!r){var f=x(e,path.slice(0,-1)),l=path[path.length-1];t._withCommit((function(){d.set(f,l,n.state)}))}var h=n.context=function(t,e,path){var n=""===e,r={dispatch:n?t.dispatch:function(n,r,o){var c=k(n,r,o),f=c.payload,l=c.options,h=c.type;return l&&l.root||(h=e+h),t.dispatch(h,f)},commit:n?t.commit:function(n,r,o){var c=k(n,r,o),f=c.payload,l=c.options,h=c.type;l&&l.root||(h=e+h),t.commit(h,f,l)}};return Object.defineProperties(r,{getters:{get:n?function(){return t.getters}:function(){return function(t,e){if(!t._makeLocalGettersCache[e]){var n={},r=e.length;Object.keys(t.getters).forEach((function(o){if(o.slice(0,r)===e){var c=o.slice(r);Object.defineProperty(n,c,{get:function(){return t.getters[o]},enumerable:!0})}})),t._makeLocalGettersCache[e]=n}return t._makeLocalGettersCache[e]}(t,e)}},state:{get:function(){return x(t.state,path)}}}),r}(t,c,path);n.forEachMutation((function(e,n){!function(t,e,n,r){(t._mutations[e]||(t._mutations[e]=[])).push((function(e){n.call(t,r.state,e)}))}(t,c+n,e,h)})),n.forEachAction((function(e,n){var r=e.root?n:c+n,o=e.handler||e;!function(t,e,n,r){(t._actions[e]||(t._actions[e]=[])).push((function(e){var o,c=n.call(t,{dispatch:r.dispatch,commit:r.commit,getters:r.getters,state:r.state,rootGetters:t.getters,rootState:t.state},e);return(o=c)&&"function"==typeof o.then||(c=Promise.resolve(c)),t._devtoolHook?c.catch((function(e){throw t._devtoolHook.emit("vuex:error",e),e})):c}))}(t,r,o,h)})),n.forEachGetter((function(e,n){!function(t,e,n,r){if(t._wrappedGetters[e])return void 0;t._wrappedGetters[e]=function(t){return n(r.state,r.getters,t.state,t.getters)}}(t,c+n,e,h)})),n.forEachChild((function(n,o){$(t,e,path.concat(o),n,r)}))}function x(t,path){return path.reduce((function(t,e){return t[e]}),t)}function k(t,e,n){return c(t)&&t.type&&(n=e,e=t,t=t.type),{type:t,payload:e,options:n}}function C(t){d&&t===d||function(t){if(Number(t.version.split(".")[0])>=2)t.mixin({beforeCreate:n});else{var e=t.prototype._init;t.prototype._init=function(t){void 0===t&&(t={}),t.init=t.init?[n].concat(t.init):n,e.call(this,t)}}function n(){var t=this.$options;t.store?this.$store="function"==typeof t.store?t.store():t.store:t.parent&&t.parent.$store&&(this.$store=t.parent.$store)}}(d=t)}v.state.get=function(){return this._vm._data.$$state},v.state.set=function(t){0},m.prototype.commit=function(t,e,n){var r=this,o=k(t,e,n),c=o.type,f=o.payload,l=(o.options,{type:c,payload:f}),h=this._mutations[c];h&&(this._withCommit((function(){h.forEach((function(t){t(f)}))})),this._subscribers.slice().forEach((function(sub){return sub(l,r.state)})))},m.prototype.dispatch=function(t,e){var n=this,r=k(t,e),o=r.type,c=r.payload,f={type:o,payload:c},l=this._actions[o];if(l){try{this._actionSubscribers.slice().filter((function(sub){return sub.before})).forEach((function(sub){return sub.before(f,n.state)}))}catch(t){0}var h=l.length>1?Promise.all(l.map((function(t){return t(c)}))):l[0](c);return new Promise((function(t,e){h.then((function(e){try{n._actionSubscribers.filter((function(sub){return sub.after})).forEach((function(sub){return sub.after(f,n.state)}))}catch(t){0}t(e)}),(function(t){try{n._actionSubscribers.filter((function(sub){return sub.error})).forEach((function(sub){return sub.error(f,n.state,t)}))}catch(t){0}e(t)}))}))}},m.prototype.subscribe=function(t,e){return y(t,this._subscribers,e)},m.prototype.subscribeAction=function(t,e){return y("function"==typeof t?{before:t}:t,this._actionSubscribers,e)},m.prototype.watch=function(t,e,n){var r=this;return this._watcherVM.$watch((function(){return t(r.state,r.getters)}),e,n)},m.prototype.replaceState=function(t){var e=this;this._withCommit((function(){e._vm._data.$$state=t}))},m.prototype.registerModule=function(path,t,e){void 0===e&&(e={}),"string"==typeof path&&(path=[path]),this._modules.register(path,t),$(this,this.state,path,this._modules.get(path),e.preserveState),w(this,this.state)},m.prototype.unregisterModule=function(path){var t=this;"string"==typeof path&&(path=[path]),this._modules.unregister(path),this._withCommit((function(){var e=x(t.state,path.slice(0,-1));d.delete(e,path[path.length-1])})),_(this)},m.prototype.hasModule=function(path){return"string"==typeof path&&(path=[path]),this._modules.isRegistered(path)},m.prototype.hotUpdate=function(t){this._modules.update(t),_(this,!0)},m.prototype._withCommit=function(t){var e=this._committing;this._committing=!0,t(),this._committing=e},Object.defineProperties(m.prototype,v);var M=S((function(t,e){var n={};return R(e).forEach((function(e){var r=e.key,o=e.val;n[r]=function(){var e=this.$store.state,n=this.$store.getters;if(t){var r=A(this.$store,"mapState",t);if(!r)return;e=r.context.state,n=r.context.getters}return"function"==typeof o?o.call(this,e,n):e[o]},n[r].vuex=!0})),n})),O=S((function(t,e){var n={};return R(e).forEach((function(e){var r=e.key,o=e.val;n[r]=function(){for(var e=[],n=arguments.length;n--;)e[n]=arguments[n];var r=this.$store.commit;if(t){var c=A(this.$store,"mapMutations",t);if(!c)return;r=c.context.commit}return"function"==typeof o?o.apply(this,[r].concat(e)):r.apply(this.$store,[o].concat(e))}})),n})),j=S((function(t,e){var n={};return R(e).forEach((function(e){var r=e.key,o=e.val;o=t+o,n[r]=function(){if(!t||A(this.$store,"mapGetters",t))return this.$store.getters[o]},n[r].vuex=!0})),n})),E=S((function(t,e){var n={};return R(e).forEach((function(e){var r=e.key,o=e.val;n[r]=function(){for(var e=[],n=arguments.length;n--;)e[n]=arguments[n];var r=this.$store.dispatch;if(t){var c=A(this.$store,"mapActions",t);if(!c)return;r=c.context.dispatch}return"function"==typeof o?o.apply(this,[r].concat(e)):r.apply(this.$store,[o].concat(e))}})),n}));function R(map){return function(map){return Array.isArray(map)||c(map)}(map)?Array.isArray(map)?map.map((function(t){return{key:t,val:t}})):Object.keys(map).map((function(t){return{key:t,val:map[t]}})):[]}function S(t){return function(e,map){return"string"!=typeof e?(map=e,e=""):"/"!==e.charAt(e.length-1)&&(e+="/"),t(e,map)}}function A(t,e,n){return t._modulesNamespaceMap[n]}function T(t,e,n){var r=n?t.groupCollapsed:t.group;try{r.call(t,e)}catch(n){t.log(e)}}function G(t){try{t.groupEnd()}catch(e){t.log("—— log end ——")}}function D(){var time=new Date;return" @ "+H(time.getHours(),2)+":"+H(time.getMinutes(),2)+":"+H(time.getSeconds(),2)+"."+H(time.getMilliseconds(),3)}function H(t,e){return n="0",r=e-t.toString().length,new Array(r+1).join(n)+t;var n,r}var P={Store:m,install:C,version:"3.5.1",mapState:M,mapMutations:O,mapGetters:j,mapActions:E,createNamespacedHelpers:function(t){return{mapState:M.bind(null,t),mapGetters:j.bind(null,t),mapMutations:O.bind(null,t),mapActions:E.bind(null,t)}},createLogger:function(t){void 0===t&&(t={});var e=t.collapsed;void 0===e&&(e=!0);var filter=t.filter;void 0===filter&&(filter=function(t,e,n){return!0});var n=t.transformer;void 0===n&&(n=function(t){return t});var o=t.mutationTransformer;void 0===o&&(o=function(t){return t});var c=t.actionFilter;void 0===c&&(c=function(t,e){return!0});var f=t.actionTransformer;void 0===f&&(f=function(t){return t});var l=t.logMutations;void 0===l&&(l=!0);var h=t.logActions;void 0===h&&(h=!0);var d=t.logger;return void 0===d&&(d=console),function(t){var m=r(t.state);void 0!==d&&(l&&t.subscribe((function(t,c){var f=r(c);if(filter(t,m,f)){var l=D(),h=o(t),v="mutation "+t.type+l;T(d,v,e),d.log("%c prev state","color: #9E9E9E; font-weight: bold",n(m)),d.log("%c mutation","color: #03A9F4; font-weight: bold",h),d.log("%c next state","color: #4CAF50; font-weight: bold",n(f)),G(d)}m=f})),h&&t.subscribeAction((function(t,n){if(c(t,n)){var r=D(),o=f(t),l="action "+t.type+r;T(d,l,e),d.log("%c action","color: #03A9F4; font-weight: bold",o),G(d)}})))}}};e.a=P}).call(this,n(29))},82:function(t,e,n){"use strict";n(16),n(8),n(40),n(91),n(53);var r=n(1),o={formatDate:function(t,e){e=e||"yyyy-MM-dd HH:mm:ss";var n=new Date(t),r={"M+":n.getMonth()+1,"d+":n.getDate(),"h+":n.getHours()%12,"H+":n.getHours(),"m+":n.getMinutes(),"s+":n.getSeconds(),"q+":Math.floor((n.getMonth()+3)/3),S:n.getMilliseconds()};for(var o in/(y+)/.test(e)&&(e=e.replace(RegExp.$1,(n.getFullYear()+"").substr(4-RegExp.$1.length))),r)new RegExp("("+o+")").test(e)&&(e=e.replace(RegExp.$1,1===RegExp.$1.length?r[o]:("00"+r[o]).substr((""+r[o]).length)));return e},prettyDate:function(t){var e=(new Date).getTime()-t;return e/6e4<1?"刚刚":e/6e4<60?parseInt(e/6e4)+"分钟前":e/36e5<=24?parseInt(e/36e5)+"小时前":e/864e5<=30?parseInt(e/864e5)+"天前":o.formatDate(t,"yyyy-MM-dd HH:mm:ss")}};Object.keys(o).forEach((function(t){r.default.filter(t,o[t])}))},83:function(t,e,n){"use strict";n(8);var r=n(130),o=n.n(r);e.a=function(t){var e=t.$axios,n=(t.$toast,t.app);e.onRequest((function(t){t.headers.common["X-Client"]="bbs-go-site",t.headers.post["Content-Type"]="application/x-www-form-urlencoded";var e=n.$cookies.get("userToken");e&&(t.headers.common["X-User-Token"]=e),t.transformRequest=[function(data){return data instanceof FormData?data:data=o.a.stringify(data)}]})),e.onResponse((function(t){if(200!==t.status)return Promise.reject(t);var e=t.data;return e.success?Promise.resolve(e.data):Promise.reject(e)}))}},84:function(t,e,n){"use strict";n(1).default.use({install:function(t,e){t.prototype.$siteTitle=function(t){var e=this.$store.getters["config/siteTitle"]||"";return t?t+(e?" | "+e:""):e},t.prototype.$siteDescription=function(){return this.$store.getters["config/siteDescription"]},t.prototype.$siteKeywords=function(){return this.$store.getters["config/siteKeywords"]}}})},85:function(t,e,n){"use strict";var r=n(1),o=n(131),c=n.n(o);r.default.use(c.a)},86:function(t,e,n){"use strict";var r=n(1),o=n(87);r.default.use(o.a),r.default.use(o.a,{preLoad:1.3,attempt:1})}}]);