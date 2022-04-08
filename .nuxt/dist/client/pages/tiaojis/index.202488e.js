/*! For license information please see ../../LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{199:function(t,e,n){"use strict";n(49),n(85),n(23),n(24),n(9);var o=n(83),r=n(84),c=n(201),l=n.n(c),d=function(){function t(){Object(o.a)(this,t)}return Object(r.a)(t,[{key:"getCity",value:function(){var t=l.a.get("city");return void 0!==t?t:"北京"}},{key:"setCity",value:function(t){return l.a.set("city",t)}},{key:"linkTo",value:function(path){window.location=path}},{key:"toSignin",value:function(t){t||(t=window.location.pathname),this.linkTo("/user/signin?ref="+encodeURIComponent(t))}},{key:"isSigninUrl",value:function(t){return"/user/signin"===t}},{key:"isArray",value:function(t){return"[object Array]"===Object.prototype.toString.call(t)}},{key:"isDate",value:function(t){return"[object Date]"==={}.toString.call(t)&&"Invalid Date"!==t.toString()&&!isNaN(t)}},{key:"isElement",value:function(t){return!(!t||!t.nodeName||1!==t.nodeType)}},{key:"isFunction",value:function(t){return"[object Function]"===Object.prototype.toString.call(t)}},{key:"unique",value:function(t){return t.filter((function(t,e,n){return n.indexOf(t,0)===e}))}},{key:"isNumber",value:function(t){return"[object Number]"===Object.prototype.toString.call(t)&&isFinite(t)}},{key:"isObject",value:function(t){return"[object Object]"===Object.prototype.toString.call(t)}},{key:"isString",value:function(t){return"[object String]"===Object.prototype.toString.call(t)}},{key:"isBoolean",value:function(t){return"boolean"==typeof t}},{key:"getCityList",value:function(){return["北京","上海","深圳","武汉","杭州"]}},{key:"isEmpty",value:function(content){var t=content;if(""===t||void 0===t)return!0;return new RegExp("^[ ]+$").test(t)}},{key:"getTopText",value:function(t){return 1===t?"顶":2===t?"火":3===t?"精华":""}},{key:"formatDate",value:function(t,e){e=e||"yyyy-MM-dd HH:mm:ss";var n=new Date(t),o={"M+":n.getMonth()+1,"d+":n.getDate(),"h+":n.getHours()%12,"H+":n.getHours(),"m+":n.getMinutes(),"s+":n.getSeconds(),"q+":Math.floor((n.getMonth()+3)/3),S:n.getMilliseconds()};for(var r in/(y+)/.test(e)&&(e=e.replace(RegExp.$1,(n.getFullYear()+"").substr(4-RegExp.$1.length))),o)new RegExp("("+r+")").test(e)&&(e=e.replace(RegExp.$1,1===RegExp.$1.length?o[r]:("00"+o[r]).substr((""+o[r]).length)));return e}},{key:"prettyDate",value:function(e){var n=(new Date).getTime()-e;return n/6e4<1?"刚刚":n/6e4<60?parseInt(n/6e4)+"分钟前":n/36e5<=24?parseInt(n/36e5)+"小时前":n/864e5<=30?parseInt(n/864e5)+"天前":t.formatDate(e,"yyyy-MM-dd HH:mm:ss")}}]),t}();e.a=new d},200:function(t,e,n){},206:function(t,e,n){"use strict";var o=n(200);n.n(o).a},209:function(t,e,n){"use strict";n(128);var o={props:{currentNodeId:{type:Number,default:1},nodes:{type:Array,default:function(){return[]}}},mounted:function(){}},r=(n(206),n(29)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"topics-nav"},[n("ul",{staticClass:"topics-nav-list"},[n("li",{staticClass:"topics-nav-item",class:{active:0===t.currentNodeId}},[n("a",{attrs:{href:"/topics/node/newest"}},[t._v("最新")])]),t._v(" "),n("li",{staticClass:"topics-nav-item",class:{active:-1===t.currentNodeId}},[n("a",{attrs:{href:"/topics/node/recommend"}},[t._v("推荐")])]),t._v(" "),t._l(t.nodes,(function(e){return n("li",{key:e.nodeId,staticClass:"topics-nav-item",class:{active:t.currentNodeId==e.nodeId}},[1!==e.nodeId&&2!==e.nodeId?n("div",[n("a",{attrs:{href:"/topics/node/"+e.nodeId}},[t._v(t._s(e.name))])]):t._e()])}))],2)])}),[],!1,null,"1f0f6714",null);e.a=component.exports},218:function(t,e,n){var o=n(6);o(o.P,"Array",{fill:n(219)}),n(86)("fill")},219:function(t,e,n){"use strict";var o=n(32),r=n(129),c=n(19);t.exports=function(t){for(var e=o(this),n=c(e.length),l=arguments.length,d=r(l>1?arguments[1]:void 0,n),v=l>2?arguments[2]:void 0,h=void 0===v?n:r(v,n);h>d;)e[d++]=t;return e}},222:function(t,e,n){t.exports=n.p+"img/net.1e01d6d.png"},228:function(t,e,n){"use strict";e.parse=function(t,e){if("string"!=typeof t)throw new TypeError("argument str must be a string");for(var n={},r=e||{},l=t.split(c),v=r.decode||o,i=0;i<l.length;i++){var h=l[i],f=h.indexOf("=");if(!(f<0)){var m=h.substr(0,f).trim(),y=h.substr(++f,h.length).trim();'"'==y[0]&&(y=y.slice(1,-1)),null==n[m]&&(n[m]=d(y,v))}}return n},e.serialize=function(t,e,n){var o=n||{},c=o.encode||r;if("function"!=typeof c)throw new TypeError("option encode is invalid");if(!l.test(t))throw new TypeError("argument name is invalid");var d=c(e);if(d&&!l.test(d))throw new TypeError("argument val is invalid");var v=t+"="+d;if(null!=o.maxAge){var h=o.maxAge-0;if(isNaN(h)||!isFinite(h))throw new TypeError("option maxAge is invalid");v+="; Max-Age="+Math.floor(h)}if(o.domain){if(!l.test(o.domain))throw new TypeError("option domain is invalid");v+="; Domain="+o.domain}if(o.path){if(!l.test(o.path))throw new TypeError("option path is invalid");v+="; Path="+o.path}if(o.expires){if("function"!=typeof o.expires.toUTCString)throw new TypeError("option expires is invalid");v+="; Expires="+o.expires.toUTCString()}o.httpOnly&&(v+="; HttpOnly");o.secure&&(v+="; Secure");if(o.sameSite){switch("string"==typeof o.sameSite?o.sameSite.toLowerCase():o.sameSite){case!0:v+="; SameSite=Strict";break;case"lax":v+="; SameSite=Lax";break;case"strict":v+="; SameSite=Strict";break;case"none":v+="; SameSite=None";break;default:throw new TypeError("option sameSite is invalid")}}return v};var o=decodeURIComponent,r=encodeURIComponent,c=/; */,l=/^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;function d(t,e){try{return e(t)}catch(e){return t}}},240:function(t,e,n){},242:function(t,e,n){},253:function(t,e,n){"use strict";var o={},r=n(29),component=Object(r.a)(o,(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"content has-text-centered"},[e("p",[e("span",{staticStyle:{"font-size":"13px",color:"gray"}},[this._v("------ 无 ------ ")])])])}],!1,null,"81124340",null);e.a=component.exports},260:function(t,e,n){"use strict";n(67);var o=n(83),r=n(84),c=n(199),l=n(295),d=function(){function t(){Object(o.a)(this,t)}return Object(r.a)(t,[{key:"convertLatlonToGeohash",value:function(t){return l.encode(t[0],t[1],11)}},{key:"getLatlonFromGeoRequest",value:function(t){var e="",n="",o="";if(t.geocodes.length>0){var r=t.geocodes[0];if(void 0!==r.location){o=r.district;var c=r.location.split(",");e=this.convertLatlonToGeohash(c),n=r.location}}return{geohash:e,latlon:n,district:o}}},{key:"requestAmapGeo",value:function(t,address,e){var n="/v3/geocode/geo?key=06a39860cdf741c5dc5ba1242112ab72&city="+c.a.getCity()+"&address="+address;t.get(n).then((function(t){})).catch((function(t){e&&e(t)}))}},{key:"hasRole",value:function(t,e){if(!t||!t.roles||!t.roles.length)return!1;for(var i=0;i<t.roles.length;i++)if(t.roles[i]===e)return!0;return!1}},{key:"hasAnyRole",value:function(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),o=1;o<e;o++)n[o-1]=arguments[o];if(!n||!n.length)return!1;for(var i=0;i<n.length;i++)if(this.hasRole(t,n[i]))return!0;return!1}},{key:"isOwner",value:function(t){return this.hasRole(t,"owner")}},{key:"isAdmin",value:function(t){return this.hasRole(t,"admin")}}]),t}();e.a=new d},282:function(t,e,n){"use strict";var o={props:{page:{type:Object,default:function(){return{page:1,total:0,limit:20}},required:!0},urlPrefix:{type:String,default:"/",required:!0},parmsContext:{type:Object,default:function(){return{}},required:!1},onPageChanged:{type:Function,required:!0}},computed:{pageList:function(){var t=this.page.page-2,e=this.page.page+2,n=this.getTotalPage();if(t<=0){for(var o=[],i=1;i<=5&&i<=n;i++)o.push(i);return o}if(e>n){for(var r=[],c=n-5<=0?1:n-5;c>0&&c<=n;c++)r.push(c);return r}return[this.page.page-2,this.page.page-1,this.page.page,this.page.page+1,this.page.page+2]},previousPageUrl:function(){return this.getPreviousPageUrl()},nextPageUrl:function(){return this.getNextPageUrl()}},mounted:function(){},methods:{getNextPageUrl:function(){var t=this.page.page+1;return t>this.getTotalPage()?"":this.getPageUrl(t)},clickNextPage:function(){var t=this.page.page+1;t>this.getTotalPage()||this.clickPage(t)},clickPreviousPage:function(){var t=this.page.page-1;t<=0||this.clickPage(t)},getPreviousPageUrl:function(){var t=this.page.page-1;return t<=0?"":this.getPageUrl(t)},getPageUrl:function(t){return this.page.page===t?"javascript:void(0)":this.urlPrefix+t},clickPage:function(t){this.page.page===t||this.onPageChanged&&this.onPageChanged(this.urlPrefix,t,this.parmsContext)},getTotalPage:function(){return this.page.total%this.page.limit>0?parseInt(this.page.total/this.page.limit)+1:this.page.total/this.page.limit}}},r=(n(291),n(29)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.page.total>0?n("nav",{staticClass:"pagination is-small",attrs:{role:"navigation","aria-label":"pagination"}},[t.previousPageUrl?n("a",{staticClass:"pagination-previous",on:{click:t.clickPreviousPage}},[t._v("上一页")]):n("a",{staticClass:"pagination-previous",attrs:{disabled:""}},[t._v("上一页")]),t._v(" "),t.nextPageUrl?n("a",{staticClass:"pagination-previous",on:{click:t.clickNextPage}},[t._v("下一页")]):n("a",{staticClass:"pagination-previous",attrs:{disabled:""}},[t._v("下一页")]),t._v(" "),n("ul",{staticClass:"pagination-list"},t._l(t.pageList,(function(p){return n("li",{key:p},[n("a",{staticClass:"pagination-link",class:{"is-current":p==t.page.page},on:{click:function(e){return t.clickPage(p)}}},[t._v(t._s(p))])])})),0)]):t._e()}),[],!1,null,"9858bd7c",null);e.a=component.exports},291:function(t,e,n){"use strict";var o=n(240);n.n(o).a},303:function(t,e){},304:function(t,e){},307:function(t,e,n){},308:function(t,e,n){"use strict";var o=n(242);n.n(o).a},309:function(t,e,n){},377:function(t,e,n){"use strict";var o=[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"topic-header-left"},[e("a",[e("img",{staticClass:"avatar",attrs:{alt:"90社区",src:n(222)}})])])}],r=(n(49),n(16),n(2)),c=(n(218),n(221)),l=n(223),d=n(224),v=n(199),h=(n(128),{components:{},props:{createTime:{type:Number},hide:{type:Boolean,required:!1}},data:function(){return{isCollapsed:!0}},watch:{isCollapsed:function(t){this.onCollapsed&&this.onCollapsed(t)}},mounted:function(){this.id},methods:{prettyDate:function(t){return v.a.formatDate(t,"yyyy-MM-dd")}}}),f=n(29),m=Object(f.a)(h,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{staticClass:"comment-time"},[t.hide?n("time",{attrs:{datetime:t._f("formatDate")(t.createTime,"yyyy-MM-dd"),itemprop:"datePublished"}},[t._v(t._s(t._f("prettyDate")(t.createTime)))]):n("span",[t._v("\n    "+t._s(t.prettyDate(t.createTime))+"\n  ")])])}),[],!1,null,"06354053",null).exports;c.c.add(d.b,d.a);var y={components:{FontAwesomeIcon:l.a,TiaojiSectionTime:m},props:{topics:{type:Array,default:function(){return[]},required:!1},showAd:{type:Boolean,default:!1},openNewPage:{type:Boolean,default:!1}},data:function(){return{blank:"",isCollapsed:!0,isCollapsedArray:[]}},watch:{topics:function(t,e){this.topics&&void 0!==this.topics.length&&(this.isCollapsedArray=new Array(this.topics.length).fill(!0))}},mounted:function(){this.openNewPage&&(this.blank="_blank"),this.topics&&this.topics.length>0&&(this.isCollapsedArray=new Array(this.topics.length).fill(!0))},methods:{clickCollapse:function(t){var e=this;return Object(r.a)(regeneratorRuntime.mark((function n(){var o;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(""!==e.topics[t].description){n.next=11;break}return n.prev=1,n.next=4,e.$axios.get("/api/tiaoji"+e.topics[t].post_url);case 4:o=n.sent,e.topics[t].description=o.description,n.next=11;break;case 8:n.prev=8,n.t0=n.catch(1),console.log(n.t0);case 11:e.$set(e.isCollapsedArray,t,!e.isCollapsedArray[t]);case 12:case"end":return n.stop()}}),n,null,[[1,8]])})))()},buildCollapseBody:function(t){return"学校："+t.colleage_name+"\n专业："+this.formatMajorsConntent(t)+"\n\n"+t.description},formatMajorsConntent:function(t){var e="-";return""!==t.major_top_class&&(e=t.major_top_class),""!==t.major_top_class&&(e+="->"+t.major_second_class),""!==t.major_top_class&&(e+="->"+t.major_third_class),e},formatText2Html:function(t){var html=t;return html&&(html=(html=html.replace(/ /g,"&nbsp;")).replace(/\n/g,"<br/>")),html},getTopText:function(t){var e=t.topType?t.topType:0;return v.a.getTopText(e)},onCollapseBack:function(t){},like:function(t){var e=this;return Object(r.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e.isCollapsed=!e.isCollapsed,n.prev=1,n.next=4,e.$axios.post("/api/topic/like/"+t.topicId);case 4:t.liked=!0,t.likeCount++,n.next=11;break;case 8:n.prev=8,n.t0=n.catch(1),1===n.t0.errorCode?e.$toast.info("请登录后点赞！！！",{action:{text:"去登录",onClick:function(t,e){v.a.toSignin()}}}):e.$toast.error(n.t0.message||n.t0);case 11:case"end":return n.stop()}}),n,null,[[1,8]])})))()}}},_=(n(308),Object(f.a)(y,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",{staticClass:"topic-list topic-wrap"},t._l(t.topics,(function(e,o){return n("li",{key:e.post_url,staticClass:"topic-item",attrs:{index:o}},[n("article",{attrs:{itemscope:"",itemtype:"http://schema.org/BlogPosting"}},[n("div",{staticClass:"topic-header"},[t._m(0,!0),t._v(" "),n("div",{staticClass:"topic-header-center"},[n("h1",{staticClass:"topic-title",attrs:{itemprop:"headline"}},[n("a",{attrs:{target:t.blank,href:"/tiaoji"+e.post_url,title:e.post_title}},[t._v(t._s(e.post_title))])]),t._v(" "),n("div",{staticClass:"topic-meta"},[n("span",{staticClass:"meta-item"},[n("TiaojiSectionTime",{attrs:{"create-time":e.post_datetime,hide:!1}})],1),t._v(" "),n("span",{staticClass:"meta-item"},[t._l(e.tags,(function(e){return n("span",{key:e.tagName+e.tagId,staticClass:"tag"},[n("a",[t._v(t._s(e.tagName))])])})),t._v(" "),n("span",{attrs:{target:t.blank}},[n("a",{staticClass:"tag",on:{click:function(e){return t.clickCollapse(o)}}},[t._v("展开 \n                  "),t.isCollapsedArray[o]?t._e():n("font-awesome-icon",{attrs:{icon:"angle-down"}}),t._v(" "),t.isCollapsedArray[o]?n("font-awesome-icon",{attrs:{icon:"angle-up"}}):t._e()],1)])],2)])])]),t._v(" "),n("div",{staticClass:"card-content",class:{"is-hidden":t.isCollapsedArray[o]}},[n("div",{staticStyle:{"font-size":"13px",color:"black"},domProps:{innerHTML:t._s(t.formatText2Html(t.buildCollapseBody(e)))}})])])])})),0)}),o,!1,null,"4d2ac4b9",null));e.a=_.exports},435:function(t,e,n){t.exports=n.p+"img/kaoyanqq.6c87d3b.png"},436:function(t,e,n){"use strict";var o=n(307);n.n(o).a},437:function(t,e,n){"use strict";var o=n(309);n.n(o).a},541:function(t,e,n){"use strict";n.r(e);n(17),n(9),n(30);var o=n(40),r=(n(16),n(2)),c=n(221),l=n(223),d=n(224),v=(n(228),n(201)),h=n.n(v),f=n(282),m={components:{},props:{onMajorChanged:{type:Function,required:!0},onProvinceChanged:{type:Function,required:!0}},data:function(){return{topMajorList:[{name:"工学",id:101},{name:"理学",id:102},{name:"哲学",id:103},{name:"经济学",id:104},{name:"法学",id:105},{name:"教育学",id:106},{name:"文学",id:107},{name:"历史学",id:108},{name:"农学",id:109},{name:"医学",id:110},{name:"军事学",id:111},{name:"管理学",id:112},{name:"艺术学",id:113}],provinceList:[{name:"不限",provinceId:"0"},{name:"北京",provinceId:"0100"},{name:"天津",provinceId:"0200"},{name:"河北",provinceId:"0300"},{name:"山西",provinceId:"0400"},{name:"内蒙古",provinceId:"0500"},{name:"辽宁",provinceId:"0600"},{name:"吉林",provinceId:"0700"},{name:"黑龙江",provinceId:"0800"},{name:"上海",provinceId:"0900"},{name:"江苏",provinceId:"1000"},{name:"浙江",provinceId:"1100"},{name:"安徽",provinceId:"1200"},{name:"福建",provinceId:"1300"},{name:"江西",provinceId:"1400"},{name:"山东",provinceId:"1500"},{name:"河南",provinceId:"1600"},{name:"湖北",provinceId:"1700"},{name:"湖南",provinceId:"1800"},{name:"广东",provinceId:"1900"},{name:"广西",provinceId:"2000"},{name:"海南",provinceId:"2100"},{name:"重庆",provinceId:"2200"},{name:"四川",provinceId:"2300"},{name:"贵州",provinceId:"2400"},{name:"云南",provinceId:"2500"},{name:"西藏",provinceId:"2600"},{name:"陕西",provinceId:"2700"},{name:"甘肃",provinceId:"2800"},{name:"青海",provinceId:"2900"},{name:"宁夏",provinceId:"3000"},{name:"新疆",provinceId:"3100"}],selectMajor:{name:"工学",id:101},selectProvince:{name:"不限",provinceId:"0"},majorIndex:0,provinceIndex:0,isCollapsed:!0}},watch:{isCollapsed:function(t){this.onCollapsed&&this.onCollapsed(t)}},mounted:function(){var t=h.a.get("tiaoji_major");t&&(this.selectMajor=JSON.parse(t)),console.log("tiaojiMajor:"+JSON.stringify(this.selectMajor));var e=h.a.get("tiaoji_province");e&&(this.selectProvince=JSON.parse(e)),console.log("tiaojiProvince:"+JSON.stringify(this.selectProvince))},methods:{_onMajorChanged:function(){h.a.set("tiaoji_major",JSON.stringify(this.selectMajor)),this.onMajorChanged&&this.onMajorChanged(this.selectMajor.id)},_onProvinceChanged:function(){h.a.set("tiaoji_province",JSON.stringify(this.selectProvince)),this.onProvinceChanged&&this.onProvinceChanged(this.selectProvince.provinceId)},getCollapseState:function(){return this.isCollapsed},changeDetailView:function(){},saveCollapsedState:function(t){this.getCollapseState()}}},y=(n(436),n(29)),_=Object(y.a)(m,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"metro-body"},[n("div",{staticClass:"metro-action-content"},[n("div",{staticClass:"metro-label"},[t._v("\n      专业\n    ")]),t._v(" "),n("div",[n("div",{staticClass:"control has-icons-left"},[n("div",{staticClass:"select is-small"},[n("select",{directives:[{name:"model",rawName:"v-model",value:t.selectMajor,expression:"selectMajor"}],on:{change:[function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.selectMajor=e.target.multiple?n:n[0]},function(e){return t._onMajorChanged()}]}},t._l(t.topMajorList,(function(e,o){return n("option",{key:e.id,attrs:{index:o},domProps:{value:e}},[t._v("\n              "+t._s(e.name)+"\n            ")])})),0)]),t._v(" "),t._m(0)])])]),t._v(" "),n("div",{staticClass:"metro-action-content"},[n("div",{staticClass:"metro-label"},[t._v("\n      地区\n    ")]),t._v(" "),n("div",{staticClass:"control has-icons-left"},[n("div",{staticClass:"select is-small"},[n("select",{directives:[{name:"model",rawName:"v-model",value:t.selectProvince,expression:"selectProvince"}],on:{change:[function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.selectProvince=e.target.multiple?n:n[0]},function(e){return t._onProvinceChanged()}]}},t._l(t.provinceList,(function(e,o){return n("option",{key:e.provinceId,attrs:{index:o},domProps:{value:e}},[t._v("\n            "+t._s(e.name)+"\n          ")])})),0)]),t._v(" "),t._m(1)])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"icon is-small is-left"},[e("i",{staticClass:"fas fa-globe"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"icon is-small is-left"},[e("i",{staticClass:"fas fa-globe"})])}],!1,null,"33de1748",null).exports,C=(n(209),n(377)),j=n(199),P=n(260),k=n(253);c.c.add(d.b,d.a);var w={components:{FontAwesomeIcon:l.a,TiaojiTopicList:C.a,Pagination2:f.a,MajorSelector:_,NoTip:k.a},asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,c,l,d;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$axios,r=t.query,t.req,e.prev=1,e.next=4,Promise.all([n.get("/api/tiaoji/posts",{params:{page:r.p||1}})]);case 4:return c=e.sent,l=Object(o.a)(c,1),d=l[0],e.abrupt("return",{postsPage:d});case 10:e.prev=10,e.t0=e.catch(1),console.error(e.t0);case 13:case"end":return e.stop()}}),e,null,[[1,10]])})))()},data:function(){return{searchTerms:"",searchAction:!1,majorId:0,provinceId:0,pageAction:"/api/tiaoji/posts",city_list:[]}},mounted:function(){this.city_list=j.a.getCityList(),this.pageAction="/api/tiaoji/posts";var t=h.a.get("tiaoji_major");if(t){var e=JSON.parse(t);this.majorId=e.id}var n=h.a.get("tiaoji_province");if(n){var o=JSON.parse(n);this.provinceId=o.provinceId}this.fetchPosts()},methods:{onPageChanged:function(t,e){this.changePageTopics(t,{page:e,province_id:this.provinceId,major_id:this.majorId},null),setTimeout((function(){window.scrollTo({top:0,left:0,behavior:"smooth"})}),300)},onMajorChanged:function(t){this.majorId=t,this.fetchPosts()},onProvinceChanged:function(t){this.provinceId=t,this.fetchPosts()},fetchPosts:function(){var t=this;this.changePageTopics(this.pageAction,{province_id:this.provinceId,major_id:this.majorId},(function(){t.refreshPagination()}))},onCollapseBack:function(t){},jumpCityWechatUrl:function(){window.location.href=this.jumpCityUrl},jumpUrl:function(t){t&&window.open(t)},twitterCreated:function(data){this.postsPage&&(this.postsPage.results?this.postsPage.results.unshift(data):this.postsPage.results=[data])},changePageTopics:function(t,e,n){var o=this;this.pageAction=t,this.$axios.get(t,{params:e}).then((function(t){o.postsPage.results=t.results,o.postsPage.page=t.page,n&&n()})).catch((function(t){console.log("tagSearchTopics error:"+JSON.stringify(t))}))},refreshPagination:function(){var t=this,e=this.searchAction;this.searchAction=!this.searchAction,this.$nextTick((function(){t.searchAction=e}))},refreshRentRecommend:function(){var t=this,e=this.showRentRecommentDiv;this.showRentRecommentDiv=!this.showRentRecommentDiv,this.$nextTick((function(){t.showRentRecommentDiv=e}))},geoSearchTopics:function(t){},jumpCreateRent:function(){j.a.linkTo("/rent/create")},search:function(){var t=this,e=this.searchTerms.trim();if(j.a.isEmpty(e))this.$toast.error("请输入地点");else{var n=this;P.a.requestAmapGeo(this.$axios,e,(function(t){var e=P.a.getLatlonFromGeoRequest(t);n.showRentRecommentDiv=!0,n.selectStation=n.getSelectStationObject(e.geohash),n.refreshRentRecommend()})),this.$axios.get("/api/topic/search",{params:{terms:e,city:j.a.getCity()}}).then((function(e){t.postsPage.results=e,t.searchAction=!0})).catch((function(t){console.log("search error:"+JSON.stringify(t))}))}}},head:function(){return{title:this.$siteTitle("90社区—出租/转租/合租找室友"),meta:[{hid:"description",name:"description",content:this.$siteDescription()},{hid:"keywords",name:"keywords",content:this.$siteKeywords()}]}}},x=(n(437),Object(y.a)(w,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("section",{staticClass:"main"},[o("div",{staticClass:"container main-container left-main"},[o("client-only",[o("div",{staticClass:"left-container"},[o("div",{staticClass:"main-content"},[o("div",{staticStyle:{display:"flex"}},[o("article",{staticClass:"message is-info notice-box"},[o("div",{staticClass:"message-body messge-body-override"},[o("em"),t._v("\n                1. 考研调剂信息真实——整合各考研交流平台里的考研调剂帖子;\n                 "),o("br"),t._v("2.\n                简单高效查看——查看考研调剂详情，调剂信息下的学生分数排名,帖子收藏;\n                 "),o("br"),t._v("3.学生考研交流群——建立考研学生微信交流群，互帮互助，杜绝广告;"),o("strong"),t._v("  "),o("br"),t._v("4.\n                点击链接或扫码加群，或者可加管家微信Yong2271进群，请备注：考研-城市-成绩;      \n              ")])]),t._v(" "),o("div",[o("img",{attrs:{src:n(435)}})])]),t._v(" "),o("div",{staticStyle:{margin:"20dp"}}),t._v(" "),o("major-selector",{attrs:{"on-major-changed":t.onMajorChanged,"on-province-changed":t.onProvinceChanged}}),t._v(" "),t.postsPage&&t.postsPage.results&&t.postsPage.results.length>0?o("span",[o("tiaoji-topic-list",{attrs:{topics:t.postsPage.results,"edit-path":"tiaoji","show-ad":!0,"open-new-page":!0}}),t._v(" "),t.searchAction?t._e():o("pagination2",{attrs:{page:t.postsPage.page,"url-prefix":t.pageAction,"on-page-changed":t.onPageChanged}})],1):o("span",[o("no-tip")],1),t._v(" "),o("back-to-top",{attrs:{right:"15%",text:"Top",visibleoffset:"500"}},[o("button",{staticClass:"btn btn-to-top",attrs:{type:"button"}},[o("font-awesome-icon",{attrs:{icon:"angle-up"}})],1)])],1)]),t._v(" "),o("div",{staticClass:"right-container"})])],1)])}),[],!1,null,"0c3a85c6",null));e.default=x.exports}}]);