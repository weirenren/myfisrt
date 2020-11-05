/*! For license information please see ../LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{125:function(t,e,n){"use strict";e.a=function(t,e){return e=e||{},new Promise((function(n,r){var s=new XMLHttpRequest,o=[],u=[],i={},a=function(){return{ok:2==(s.status/100|0),statusText:s.statusText,status:s.status,url:s.responseURL,text:function(){return Promise.resolve(s.responseText)},json:function(){return Promise.resolve(JSON.parse(s.responseText))},blob:function(){return Promise.resolve(new Blob([s.response]))},clone:a,headers:{keys:function(){return o},entries:function(){return u},get:function(t){return i[t.toLowerCase()]},has:function(t){return t.toLowerCase()in i}}}};for(var c in s.open(e.method||"get",t,!0),s.onload=function(){s.getAllResponseHeaders().replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm,(function(t,e,n){o.push(e=e.toLowerCase()),u.push([e,n]),i[e]=i[e]?i[e]+","+n:n})),n(a())},s.onerror=r,s.withCredentials="include"==e.credentials,e.headers)s.setRequestHeader(c,e.headers[c]);s.send(e.body||null)}))}},129:function(t,e,n){var r=n(183),o={autoSetContainer:!1},c={install:function(t){t.prototype.$clipboardConfig=o,t.prototype.$copyText=function(text,t){return new Promise((function(e,n){var o=document.createElement("button"),c=new r(o,{text:function(){return text},action:function(){return"copy"},container:"object"==typeof t?t:document.body});c.on("success",(function(t){c.destroy(),e(t)})),c.on("error",(function(t){c.destroy(),n(t)})),o.click()}))},t.directive("clipboard",{bind:function(t,e,n){if("success"===e.arg)t._v_clipboard_success=e.value;else if("error"===e.arg)t._v_clipboard_error=e.value;else{var c=new r(t,{text:function(){return e.value},action:function(){return"cut"===e.arg?"cut":"copy"},container:o.autoSetContainer?t:void 0});c.on("success",(function(e){var n=t._v_clipboard_success;n&&n(e)})),c.on("error",(function(e){var n=t._v_clipboard_error;n&&n(e)})),t._v_clipboard=c}},update:function(t,e){"success"===e.arg?t._v_clipboard_success=e.value:"error"===e.arg?t._v_clipboard_error=e.value:(t._v_clipboard.text=function(){return e.value},t._v_clipboard.action=function(){return"cut"===e.arg?"cut":"copy"})},unbind:function(t,e){"success"===e.arg?delete t._v_clipboard_success:"error"===e.arg?delete t._v_clipboard_error:(t._v_clipboard.destroy(),delete t._v_clipboard)}})},config:o};t.exports=c},133:function(t,e,n){t.exports=function(){"use strict";var t="@@InfiniteScroll",e=function(element){return element===window?Math.max(window.pageYOffset||0,document.documentElement.scrollTop):element.scrollTop},n=document.defaultView.getComputedStyle,r=function(element){return element===window?e(window):element.getBoundingClientRect().top+e(window)},o=function(element){for(var t=element.parentNode;t;){if("HTML"===t.tagName)return!0;if(11===t.nodeType)return!1;t=t.parentNode}return!1},c=function(){if(!this.binded){this.binded=!0;var t,e,r,o,c,d,h,f,v=this,element=v.el,m=element.getAttribute("infinite-scroll-throttle-delay"),y=200;m&&(y=Number(v.vm[m]||m),(isNaN(y)||y<0)&&(y=200)),v.throttleDelay=y,v.scrollEventTarget=function(element){for(var t=element;t&&"HTML"!==t.tagName&&"BODY"!==t.tagName&&1===t.nodeType;){var e=n(t).overflowY;if("scroll"===e||"auto"===e)return t;t=t.parentNode}return window}(element),v.scrollListener=(t=l.bind(v),e=v.throttleDelay,f=function(){t.apply(d,h),o=r},function(){if(d=this,h=arguments,r=Date.now(),c&&(clearTimeout(c),c=null),o){var t=e-(r-o);t<0?f():c=setTimeout((function(){f()}),t)}else f()}),v.scrollEventTarget.addEventListener("scroll",v.scrollListener),this.vm.$on("hook:beforeDestroy",(function(){v.scrollEventTarget.removeEventListener("scroll",v.scrollListener)}));var w=element.getAttribute("infinite-scroll-disabled"),_=!1;w&&(this.vm.$watch(w,(function(t){v.disabled=t,!t&&v.immediateCheck&&l.call(v)})),_=Boolean(v.vm[w])),v.disabled=_;var L=element.getAttribute("infinite-scroll-distance"),k=0;L&&(k=Number(v.vm[L]||L),isNaN(k)&&(k=0)),v.distance=k;var E=element.getAttribute("infinite-scroll-immediate-check"),T=!0;E&&(T=Boolean(v.vm[E])),v.immediateCheck=T,T&&l.call(v);var A=element.getAttribute("infinite-scroll-listen-for-event");A&&v.vm.$on(A,(function(){l.call(v)}))}},l=function(t){var n=this.scrollEventTarget,element=this.el,o=this.distance;if(!0===t||!this.disabled){var c=e(n),l=c+function(element){return element===window?document.documentElement.clientHeight:element.clientHeight}(n);(n===element?n.scrollHeight-l<=o:l+o>=r(element)-r(n)+element.offsetHeight+c)&&this.expression&&this.expression()}},d={bind:function(e,n,r){e[t]={el:e,vm:r.context,expression:n.value};var l=arguments;e[t].vm.$on("hook:mounted",(function(){e[t].vm.$nextTick((function(){o(e)&&c.call(e[t],l),e[t].bindTryCount=0,function n(){e[t].bindTryCount>10||(e[t].bindTryCount++,o(e)?c.call(e[t],l):setTimeout(n,50))}()}))}))},unbind:function(e){e&&e[t]&&e[t].scrollEventTarget&&e[t].scrollEventTarget.removeEventListener("scroll",e[t].scrollListener)}},h=function(t){t.directive("InfiniteScroll",d)};return window.Vue&&(window.infiniteScroll=d,Vue.use(h)),d.install=h,d}()},136:function(t,e,n){"use strict";n(137);var r={name:"BackToTop",props:{text:{type:String,default:"Voltar ao topo"},visibleoffset:{type:[String,Number],default:600},visibleoffsetbottom:{type:[String,Number],default:0},right:{type:String,default:"30px"},bottom:{type:String,default:"40px"},scrollFn:{type:Function,default:function(t){}}},data:function(){return{visible:!1}},mounted:function(){window.smoothscroll=function(){var t=document.documentElement.scrollTop||document.body.scrollTop;t>0&&(window.requestAnimationFrame(window.smoothscroll),window.scrollTo(0,Math.floor(t-t/5)))},window.addEventListener("scroll",this.catchScroll)},destroyed:function(){window.removeEventListener("scroll",this.catchScroll)},methods:{catchScroll:function(){var t=window.pageYOffset>parseInt(this.visibleoffset),e=window.innerHeight+window.pageYOffset>=document.body.offsetHeight-parseInt(this.visibleoffsetbottom);this.visible=parseInt(this.visibleoffsetbottom)>0?t&&!e:t,this.scrollFn(this)},backToTop:function(){window.smoothscroll(),this.$emit("scrolled")}}},o=(n(204),n(28)),c=Object(o.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("transition",{attrs:{name:"back-to-top-fade"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:this.visible,expression:"visible"}],staticClass:"vue-back-to-top",style:"bottom:"+this.bottom+";right:"+this.right+";",on:{click:this.backToTop}},[this._t("default",[e("div",{staticClass:"default"},[e("span",[this._v("\n          "+this._s(this.text)+"\n        ")])])])],2)])}),[],!1,null,null,null).exports;c.install=function(t,e){t.component(c.name,c)};e.a=c},204:function(t,e,n){"use strict";var r=n(66);n.n(r).a},66:function(t,e,n){},83:function(t,e,n){"use strict";var r={name:"ClientOnly",functional:!0,props:{placeholder:String,placeholderTag:{type:String,default:"div"}},render:function(t,e){var n=e.parent,r=e.slots,o=e.props,c=r(),l=c.default;void 0===l&&(l=[]);var d=c.placeholder;return n._isMounted?l:(n.$once("hook:mounted",(function(){n.$forceUpdate()})),o.placeholderTag&&(o.placeholder||d)?t(o.placeholderTag,{class:["client-only-placeholder"]},o.placeholder||d):l.length>0?l.map((function(){return t(!1)})):t(!1))}};t.exports=r},89:function(t,e,n){"use strict";var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},c=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),l=function(t){return null==t||"function"!=typeof t&&"object"!==(void 0===t?"undefined":r(t))},d=Object.prototype.toString,h=function(t){var e=void 0===t?"undefined":r(t);return"undefined"===e?"undefined":null===t?"null":!0===t||!1===t||t instanceof Boolean?"boolean":"string"===e||t instanceof String?"string":"number"===e||t instanceof Number?"number":"function"===e||t instanceof Function?void 0!==t.constructor.name&&"Generator"===t.constructor.name.slice(0,9)?"generatorfunction":"function":void 0!==Array.isArray&&Array.isArray(t)?"array":t instanceof RegExp?"regexp":t instanceof Date?"date":"[object RegExp]"===(e=d.call(t))?"regexp":"[object Date]"===e?"date":"[object Arguments]"===e?"arguments":"[object Error]"===e?"error":"[object Promise]"===e?"promise":function(t){return t.constructor&&"function"==typeof t.constructor.isBuffer&&t.constructor.isBuffer(t)}(t)?"buffer":"[object Set]"===e?"set":"[object WeakSet]"===e?"weakset":"[object Map]"===e?"map":"[object WeakMap]"===e?"weakmap":"[object Symbol]"===e?"symbol":"[object Map Iterator]"===e?"mapiterator":"[object Set Iterator]"===e?"setiterator":"[object String Iterator]"===e?"stringiterator":"[object Array Iterator]"===e?"arrayiterator":"[object Int8Array]"===e?"int8array":"[object Uint8Array]"===e?"uint8array":"[object Uint8ClampedArray]"===e?"uint8clampedarray":"[object Int16Array]"===e?"int16array":"[object Uint16Array]"===e?"uint16array":"[object Int32Array]"===e?"int32array":"[object Uint32Array]"===e?"uint32array":"[object Float32Array]"===e?"float32array":"[object Float64Array]"===e?"float64array":"object"};function f(t){t=t||{};var e=arguments.length,i=0;if(1===e)return t;for(;++i<e;){var n=arguments[i];l(t)&&(t=n),m(n)&&v(t,n)}return t}function v(t,e){for(var n in function(t,e){if(null==t)throw new TypeError("expected first argument to be an object.");if(void 0===e||"undefined"==typeof Symbol)return t;if("function"!=typeof Object.getOwnPropertySymbols)return t;for(var n=Object.prototype.propertyIsEnumerable,r=Object(t),o=arguments.length,i=0;++i<o;)for(var c=Object(arguments[i]),l=Object.getOwnPropertySymbols(c),d=0;d<l.length;d++){var h=l[d];n.call(c,h)&&(r[h]=c[h])}}(t,e),e)if("__proto__"!==n&&y(e,n)){var r=e[n];m(r)?("undefined"===h(t[n])&&"function"===h(r)&&(t[n]=r),t[n]=f(t[n]||{},r)):t[n]=r}return t}function m(t){return"object"===h(t)||"function"===h(t)}function y(t,e){return Object.prototype.hasOwnProperty.call(t,e)}var w=f,_="undefined"!=typeof window,L=function(){if(_&&"IntersectionObserver"in window&&"IntersectionObserverEntry"in window&&"intersectionRatio"in window.IntersectionObserverEntry.prototype)return"isIntersecting"in window.IntersectionObserverEntry.prototype||Object.defineProperty(window.IntersectionObserverEntry.prototype,"isIntersecting",{get:function(){return this.intersectionRatio>0}}),!0;return!1}();var k="event",E="observer",T=function(){if(_)return"function"==typeof window.CustomEvent?window.CustomEvent:(t.prototype=window.Event.prototype,t);function t(t,e){e=e||{bubbles:!1,cancelable:!1,detail:void 0};var n=document.createEvent("CustomEvent");return n.initCustomEvent(t,e.bubbles,e.cancelable,e.detail),n}}();function A(t,e){if(t.length){var n=t.indexOf(e);return n>-1?t.splice(n,1):void 0}}function x(t,e){if("IMG"===t.tagName&&t.getAttribute("data-srcset")){var n=t.getAttribute("data-srcset"),r=[],o=t.parentNode.offsetWidth*e,c=void 0,l=void 0,d=void 0;(n=n.trim().split(",")).map((function(t){t=t.trim(),-1===(c=t.lastIndexOf(" "))?(l=t,d=999998):(l=t.substr(0,c),d=parseInt(t.substr(c+1,t.length-c-2),10)),r.push([d,l])})),r.sort((function(a,b){if(a[0]<b[0])return 1;if(a[0]>b[0])return-1;if(a[0]===b[0]){if(-1!==b[1].indexOf(".webp",b[1].length-5))return 1;if(-1!==a[1].indexOf(".webp",a[1].length-5))return-1}return 0}));for(var h="",f=void 0,i=0;i<r.length;i++){h=(f=r[i])[1];var v=r[i+1];if(v&&v[0]<o){h=f[1];break}if(!v){h=f[1];break}}return h}}function S(t,e){for(var n=void 0,i=0,r=t.length;i<r;i++)if(e(t[i])){n=t[i];break}return n}var j=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return _&&window.devicePixelRatio||t};function C(){if(!_)return!1;var t=!0,e=document;try{var n=e.createElement("object");n.type="image/webp",n.style.visibility="hidden",n.innerHTML="!",e.body.appendChild(n),t=!n.offsetWidth,e.body.removeChild(n)}catch(e){t=!1}return t}var $=function(){if(_){var t=!1;try{var e=Object.defineProperty({},"passive",{get:function(){t=!0}});window.addEventListener("test",null,e)}catch(t){}return t}}(),z={on:function(t,e,n){var r=arguments.length>3&&void 0!==arguments[3]&&arguments[3];$?t.addEventListener(e,n,{capture:r,passive:!0}):t.addEventListener(e,n,r)},off:function(t,e,n){var r=arguments.length>3&&void 0!==arguments[3]&&arguments[3];t.removeEventListener(e,n,r)}},O=function(t,e,n){var image=new Image;if(!t||!t.src){var r=new Error("image src is required");return n(r)}image.src=t.src,image.onload=function(){e({naturalHeight:image.naturalHeight,naturalWidth:image.naturalWidth,src:image.src})},image.onerror=function(t){n(t)}},style=function(t,e){return"undefined"!=typeof getComputedStyle?getComputedStyle(t,null).getPropertyValue(e):t.style[e]},I=function(t){return style(t,"overflow")+style(t,"overflow-y")+style(t,"overflow-x")};function H(){}var R=function(){function t(e){var n=e.max;o(this,t),this.options={max:n||100},this._caches=[]}return c(t,[{key:"has",value:function(t){return this._caches.indexOf(t)>-1}},{key:"add",value:function(t){this.has(t)||(this._caches.push(t),this._caches.length>this.options.max&&this.free())}},{key:"free",value:function(){this._caches.shift()}}]),t}(),N=function(){function t(e){var n=e.el,r=e.src,c=e.error,l=e.loading,d=e.bindType,h=e.$parent,f=e.options,v=e.elRenderer,m=e.imageCache;o(this,t),this.el=n,this.src=r,this.error=c,this.loading=l,this.bindType=d,this.attempt=0,this.naturalHeight=0,this.naturalWidth=0,this.options=f,this.rect=null,this.$parent=h,this.elRenderer=v,this._imageCache=m,this.performanceData={init:Date.now(),loadStart:0,loadEnd:0},this.filter(),this.initState(),this.render("loading",!1)}return c(t,[{key:"initState",value:function(){"dataset"in this.el?this.el.dataset.src=this.src:this.el.setAttribute("data-src",this.src),this.state={loading:!1,error:!1,loaded:!1,rendered:!1}}},{key:"record",value:function(t){this.performanceData[t]=Date.now()}},{key:"update",value:function(t){var e=t.src,n=t.loading,r=t.error,o=this.src;this.src=e,this.loading=n,this.error=r,this.filter(),o!==this.src&&(this.attempt=0,this.initState())}},{key:"getRect",value:function(){this.rect=this.el.getBoundingClientRect()}},{key:"checkInView",value:function(){return this.getRect(),this.rect.top<window.innerHeight*this.options.preLoad&&this.rect.bottom>this.options.preLoadTop&&this.rect.left<window.innerWidth*this.options.preLoad&&this.rect.right>0}},{key:"filter",value:function(){var t=this;(function(t){if(!(t instanceof Object))return[];if(Object.keys)return Object.keys(t);var e=[];for(var n in t)t.hasOwnProperty(n)&&e.push(n);return e})(this.options.filter).map((function(e){t.options.filter[e](t,t.options)}))}},{key:"renderLoading",value:function(t){var e=this;this.state.loading=!0,O({src:this.loading},(function(data){e.render("loading",!1),e.state.loading=!1,t()}),(function(){t(),e.state.loading=!1,e.options.silent||console.warn("VueLazyload log: load failed with loading image("+e.loading+")")}))}},{key:"load",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:H;return this.attempt>this.options.attempt-1&&this.state.error?(this.options.silent||console.log("VueLazyload log: "+this.src+" tried too more than "+this.options.attempt+" times"),void e()):this.state.rendered&&this.state.loaded?void 0:this._imageCache.has(this.src)?(this.state.loaded=!0,this.render("loaded",!0),this.state.rendered=!0,e()):void this.renderLoading((function(){t.attempt++,t.options.adapter.beforeLoad&&t.options.adapter.beforeLoad(t,t.options),t.record("loadStart"),O({src:t.src},(function(data){t.naturalHeight=data.naturalHeight,t.naturalWidth=data.naturalWidth,t.state.loaded=!0,t.state.error=!1,t.record("loadEnd"),t.render("loaded",!1),t.state.rendered=!0,t._imageCache.add(t.src),e()}),(function(e){!t.options.silent&&console.error(e),t.state.error=!0,t.state.loaded=!1,t.render("error",!1)}))}))}},{key:"render",value:function(t,e){this.elRenderer(this,t,e)}},{key:"performance",value:function(){var t="loading",time=0;return this.state.loaded&&(t="loaded",time=(this.performanceData.loadEnd-this.performanceData.loadStart)/1e3),this.state.error&&(t="error"),{src:this.src,state:t,time:time}}},{key:"$destroy",value:function(){this.el=null,this.src=null,this.error=null,this.loading=null,this.bindType=null,this.attempt=0}}]),t}(),Q="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",B=["scroll","wheel","mousewheel","resize","animationend","transitionend","touchmove"],D={rootMargin:"0px",threshold:0},M=function(t){return function(){function e(t){var n,r,c,l,d=t.preLoad,h=t.error,f=t.throttleWait,v=t.preLoadTop,m=t.dispatchEvent,y=t.loading,w=t.attempt,_=t.silent,L=void 0===_||_,T=t.scale,A=t.listenEvents,filter=(t.hasbind,t.filter),x=t.adapter,S=t.observer,$=t.observerOptions;o(this,e),this.version="1.3.3",this.mode=k,this.ListenerQueue=[],this.TargetIndex=0,this.TargetQueue=[],this.options={silent:L,dispatchEvent:!!m,throttleWait:f||200,preLoad:d||1.3,preLoadTop:v||0,error:h||Q,loading:y||Q,attempt:w||3,scale:T||j(T),ListenEvents:A||B,hasbind:!1,supportWebp:C(),filter:filter||{},adapter:x||{},observer:!!S,observerOptions:$||D},this._initEvent(),this._imageCache=new R({max:200}),this.lazyLoadHandler=(n=this._lazyLoadHandler.bind(this),r=this.options.throttleWait,c=null,l=0,function(){if(!c){var t=Date.now()-l,e=this,o=arguments,d=function(){l=Date.now(),c=!1,n.apply(e,o)};t>=r?d():c=setTimeout(d,r)}}),this.setMode(this.options.observer?E:k)}return c(e,[{key:"config",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};w(this.options,t)}},{key:"performance",value:function(){var t=[];return this.ListenerQueue.map((function(e){t.push(e.performance())})),t}},{key:"addLazyBox",value:function(t){this.ListenerQueue.push(t),_&&(this._addListenerTarget(window),this._observer&&this._observer.observe(t.el),t.$el&&t.$el.parentNode&&this._addListenerTarget(t.$el.parentNode))}},{key:"add",value:function(e,n,r){var o=this;if(function(t,e){for(var n=!1,i=0,r=t.length;i<r;i++)if(e(t[i])){n=!0;break}return n}(this.ListenerQueue,(function(t){return t.el===e})))return this.update(e,n),t.nextTick(this.lazyLoadHandler);var c=this._valueFormatter(n.value),l=c.src,d=c.loading,h=c.error;t.nextTick((function(){l=x(e,o.options.scale)||l,o._observer&&o._observer.observe(e);var c=Object.keys(n.modifiers)[0],f=void 0;c&&(f=(f=r.context.$refs[c])?f.$el||f:document.getElementById(c)),f||(f=function(t){if(_){if(!(t instanceof HTMLElement))return window;for(var e=t;e&&e!==document.body&&e!==document.documentElement&&e.parentNode;){if(/(scroll|auto)/.test(I(e)))return e;e=e.parentNode}return window}}(e));var v=new N({bindType:n.arg,$parent:f,el:e,loading:d,error:h,src:l,elRenderer:o._elRenderer.bind(o),options:o.options,imageCache:o._imageCache});o.ListenerQueue.push(v),_&&(o._addListenerTarget(window),o._addListenerTarget(f)),o.lazyLoadHandler(),t.nextTick((function(){return o.lazyLoadHandler()}))}))}},{key:"update",value:function(e,n,r){var o=this,c=this._valueFormatter(n.value),l=c.src,d=c.loading,h=c.error;l=x(e,this.options.scale)||l;var f=S(this.ListenerQueue,(function(t){return t.el===e}));f?f.update({src:l,loading:d,error:h}):this.add(e,n,r),this._observer&&(this._observer.unobserve(e),this._observer.observe(e)),this.lazyLoadHandler(),t.nextTick((function(){return o.lazyLoadHandler()}))}},{key:"remove",value:function(t){if(t){this._observer&&this._observer.unobserve(t);var e=S(this.ListenerQueue,(function(e){return e.el===t}));e&&(this._removeListenerTarget(e.$parent),this._removeListenerTarget(window),A(this.ListenerQueue,e),e.$destroy())}}},{key:"removeComponent",value:function(t){t&&(A(this.ListenerQueue,t),this._observer&&this._observer.unobserve(t.el),t.$parent&&t.$el.parentNode&&this._removeListenerTarget(t.$el.parentNode),this._removeListenerTarget(window))}},{key:"setMode",value:function(t){var e=this;L||t!==E||(t=k),this.mode=t,t===k?(this._observer&&(this.ListenerQueue.forEach((function(t){e._observer.unobserve(t.el)})),this._observer=null),this.TargetQueue.forEach((function(t){e._initListen(t.el,!0)}))):(this.TargetQueue.forEach((function(t){e._initListen(t.el,!1)})),this._initIntersectionObserver())}},{key:"_addListenerTarget",value:function(t){if(t){var e=S(this.TargetQueue,(function(e){return e.el===t}));return e?e.childrenCount++:(e={el:t,id:++this.TargetIndex,childrenCount:1,listened:!0},this.mode===k&&this._initListen(e.el,!0),this.TargetQueue.push(e)),this.TargetIndex}}},{key:"_removeListenerTarget",value:function(t){var e=this;this.TargetQueue.forEach((function(n,r){n.el===t&&(n.childrenCount--,n.childrenCount||(e._initListen(n.el,!1),e.TargetQueue.splice(r,1),n=null))}))}},{key:"_initListen",value:function(t,e){var n=this;this.options.ListenEvents.forEach((function(r){return z[e?"on":"off"](t,r,n.lazyLoadHandler)}))}},{key:"_initEvent",value:function(){var t=this;this.Event={listeners:{loading:[],loaded:[],error:[]}},this.$on=function(e,n){t.Event.listeners[e]||(t.Event.listeners[e]=[]),t.Event.listeners[e].push(n)},this.$once=function(e,n){var r=t;t.$on(e,(function t(){r.$off(e,t),n.apply(r,arguments)}))},this.$off=function(e,n){if(n)A(t.Event.listeners[e],n);else{if(!t.Event.listeners[e])return;t.Event.listeners[e].length=0}},this.$emit=function(e,n,r){t.Event.listeners[e]&&t.Event.listeners[e].forEach((function(t){return t(n,r)}))}}},{key:"_lazyLoadHandler",value:function(){var t=this,e=[];this.ListenerQueue.forEach((function(t,n){t.el&&t.el.parentNode||e.push(t),t.checkInView()&&t.load()})),e.forEach((function(e){A(t.ListenerQueue,e),e.$destroy()}))}},{key:"_initIntersectionObserver",value:function(){var t=this;L&&(this._observer=new IntersectionObserver(this._observerHandler.bind(this),this.options.observerOptions),this.ListenerQueue.length&&this.ListenerQueue.forEach((function(e){t._observer.observe(e.el)})))}},{key:"_observerHandler",value:function(t,e){var n=this;t.forEach((function(t){t.isIntersecting&&n.ListenerQueue.forEach((function(e){if(e.el===t.target){if(e.state.loaded)return n._observer.unobserve(e.el);e.load()}}))}))}},{key:"_elRenderer",value:function(t,e,n){if(t.el){var r=t.el,o=t.bindType,c=void 0;switch(e){case"loading":c=t.loading;break;case"error":c=t.error;break;default:c=t.src}if(o?r.style[o]='url("'+c+'")':r.getAttribute("src")!==c&&r.setAttribute("src",c),r.setAttribute("lazy",e),this.$emit(e,t,n),this.options.adapter[e]&&this.options.adapter[e](t,this.options),this.options.dispatchEvent){var l=new T(e,{detail:t});r.dispatchEvent(l)}}}},{key:"_valueFormatter",value:function(t){var e,n=t,o=this.options.loading,c=this.options.error;return null!==(e=t)&&"object"===(void 0===e?"undefined":r(e))&&(t.src||this.options.silent||console.error("Vue Lazyload warning: miss src with "+t),n=t.src,o=t.loading||this.options.loading,c=t.error||this.options.error),{src:n,loading:o,error:c}}}]),e}()},P=function(t){return{props:{tag:{type:String,default:"div"}},render:function(t){return!1===this.show?t(this.tag):t(this.tag,null,this.$slots.default)},data:function(){return{el:null,state:{loaded:!1},rect:{},show:!1}},mounted:function(){this.el=this.$el,t.addLazyBox(this),t.lazyLoadHandler()},beforeDestroy:function(){t.removeComponent(this)},methods:{getRect:function(){this.rect=this.$el.getBoundingClientRect()},checkInView:function(){return this.getRect(),_&&this.rect.top<window.innerHeight*t.options.preLoad&&this.rect.bottom>0&&this.rect.left<window.innerWidth*t.options.preLoad&&this.rect.right>0},load:function(){this.show=!0,this.state.loaded=!0,this.$emit("show",this)},destroy:function(){return this.$destroy}}}},W=function(){function t(e){var n=e.lazy;o(this,t),this.lazy=n,n.lazyContainerMananger=this,this._queue=[]}return c(t,[{key:"bind",value:function(t,e,n){var r=new F({el:t,binding:e,vnode:n,lazy:this.lazy});this._queue.push(r)}},{key:"update",value:function(t,e,n){var r=S(this._queue,(function(e){return e.el===t}));r&&r.update({el:t,binding:e,vnode:n})}},{key:"unbind",value:function(t,e,n){var r=S(this._queue,(function(e){return e.el===t}));r&&(r.clear(),A(this._queue,r))}}]),t}(),V={selector:"img"},F=function(){function t(e){var n=e.el,r=e.binding,c=e.vnode,l=e.lazy;o(this,t),this.el=null,this.vnode=c,this.binding=r,this.options={},this.lazy=l,this._queue=[],this.update({el:n,binding:r})}return c(t,[{key:"update",value:function(t){var e=this,n=t.el,r=t.binding;this.el=n,this.options=w({},V,r.value),this.getImgs().forEach((function(t){e.lazy.add(t,w({},e.binding,{value:{src:"dataset"in t?t.dataset.src:t.getAttribute("data-src"),error:("dataset"in t?t.dataset.error:t.getAttribute("data-error"))||e.options.error,loading:("dataset"in t?t.dataset.loading:t.getAttribute("data-loading"))||e.options.loading}}),e.vnode)}))}},{key:"getImgs",value:function(){return function(t){for(var e=t.length,n=[],i=0;i<e;i++)n.push(t[i]);return n}(this.el.querySelectorAll(this.options.selector))}},{key:"clear",value:function(){var t=this;this.getImgs().forEach((function(e){return t.lazy.remove(e)})),this.vnode=null,this.binding=null,this.lazy=null}}]),t}(),U=function(t){return{props:{src:[String,Object],tag:{type:String,default:"img"}},render:function(t){return t(this.tag,{attrs:{src:this.renderSrc}},this.$slots.default)},data:function(){return{el:null,options:{src:"",error:"",loading:"",attempt:t.options.attempt},state:{loaded:!1,error:!1,attempt:0},rect:{},renderSrc:""}},watch:{src:function(){this.init(),t.addLazyBox(this),t.lazyLoadHandler()}},created:function(){this.init(),this.renderSrc=this.options.loading},mounted:function(){this.el=this.$el,t.addLazyBox(this),t.lazyLoadHandler()},beforeDestroy:function(){t.removeComponent(this)},methods:{init:function(){var e=t._valueFormatter(this.src),n=e.src,r=e.loading,o=e.error;this.state.loaded=!1,this.options.src=n,this.options.error=o,this.options.loading=r,this.renderSrc=this.options.loading},getRect:function(){this.rect=this.$el.getBoundingClientRect()},checkInView:function(){return this.getRect(),_&&this.rect.top<window.innerHeight*t.options.preLoad&&this.rect.bottom>0&&this.rect.left<window.innerWidth*t.options.preLoad&&this.rect.right>0},load:function(){var e=this,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:H;if(this.state.attempt>this.options.attempt-1&&this.state.error)return t.options.silent||console.log("VueLazyload log: "+this.options.src+" tried too more than "+this.options.attempt+" times"),void n();var r=this.options.src;O({src:r},(function(t){var n=t.src;e.renderSrc=n,e.state.loaded=!0}),(function(t){e.state.attempt++,e.renderSrc=e.options.error,e.state.error=!0}))}}}},Y={install:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=M(t),r=new n(e),o=new W({lazy:r}),c="2"===t.version.split(".")[0];t.prototype.$Lazyload=r,e.lazyComponent&&t.component("lazy-component",P(r)),e.lazyImage&&t.component("lazy-image",U(r)),c?(t.directive("lazy",{bind:r.add.bind(r),update:r.update.bind(r),componentUpdated:r.lazyLoadHandler.bind(r),unbind:r.remove.bind(r)}),t.directive("lazy-container",{bind:o.bind.bind(o),componentUpdated:o.update.bind(o),unbind:o.unbind.bind(o)})):(t.directive("lazy",{bind:r.lazyLoadHandler.bind(r),update:function(t,e){w(this.vm.$refs,this.vm.$els),r.add(this.el,{modifiers:this.modifiers||{},arg:this.arg,value:t,oldValue:e},{context:this.vm})},unbind:function(){r.remove(this.el)}}),t.directive("lazy-container",{update:function(t,e){o.update(this.el,{modifiers:this.modifiers||{},arg:this.arg,value:t,oldValue:e},{context:this.vm})},unbind:function(){o.unbind(this.el)}}))}};e.a=Y}}]);