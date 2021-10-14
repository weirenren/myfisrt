/*! For license information please see ../LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{199:function(e,t,n){"use strict";n(85),n(23),n(24),n(9);var r=n(83),o=n(84),c=n(201),l=n.n(c),f=function(){function e(){Object(r.a)(this,e)}return Object(o.a)(e,[{key:"getCity",value:function(){var e=l.a.get("city");return void 0!==e?e:"北京"}},{key:"setCity",value:function(e){return l.a.set("city",e)}},{key:"linkTo",value:function(path){window.location=path}},{key:"toSignin",value:function(e){e||(e=window.location.pathname),this.linkTo("/user/signin?ref="+encodeURIComponent(e))}},{key:"isSigninUrl",value:function(e){return"/user/signin"===e}},{key:"isArray",value:function(e){return"[object Array]"===Object.prototype.toString.call(e)}},{key:"isDate",value:function(e){return"[object Date]"==={}.toString.call(e)&&"Invalid Date"!==e.toString()&&!isNaN(e)}},{key:"isElement",value:function(e){return!(!e||!e.nodeName||1!==e.nodeType)}},{key:"isFunction",value:function(e){return"[object Function]"===Object.prototype.toString.call(e)}},{key:"unique",value:function(e){return e.filter((function(e,t,n){return n.indexOf(e,0)===t}))}},{key:"isNumber",value:function(e){return"[object Number]"===Object.prototype.toString.call(e)&&isFinite(e)}},{key:"isObject",value:function(e){return"[object Object]"===Object.prototype.toString.call(e)}},{key:"isString",value:function(e){return"[object String]"===Object.prototype.toString.call(e)}},{key:"isBoolean",value:function(e){return"boolean"==typeof e}},{key:"getCityList",value:function(){return["北京","上海","深圳","武汉","杭州"]}},{key:"isEmpty",value:function(content){var e=content;if(""===e||void 0===e)return!0;return new RegExp("^[ ]+$").test(e)}},{key:"getTopText",value:function(e){return 1===e?"顶":2===e?"火":3===e?"精华":""}}]),e}();t.a=new f},201:function(e,t,n){var r,o;!function(c){if(void 0===(o="function"==typeof(r=c)?r.call(t,n,t,e):r)||(e.exports=o),!0,e.exports=c(),!!0){var l=window.Cookies,f=window.Cookies=c();f.noConflict=function(){return window.Cookies=l,f}}}((function(){function e(){for(var i=0,e={};i<arguments.length;i++){var t=arguments[i];for(var n in t)e[n]=t[n]}return e}function t(s){return s.replace(/(%[0-9A-Z]{2})+/g,decodeURIComponent)}return function n(r){function o(){}function c(t,n,c){if("undefined"!=typeof document){"number"==typeof(c=e({path:"/"},o.defaults,c)).expires&&(c.expires=new Date(1*new Date+864e5*c.expires)),c.expires=c.expires?c.expires.toUTCString():"";try{var l=JSON.stringify(n);/^[\{\[]/.test(l)&&(n=l)}catch(e){}n=r.write?r.write(n,t):encodeURIComponent(String(n)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),t=encodeURIComponent(String(t)).replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent).replace(/[\(\)]/g,escape);var f="";for(var d in c)c[d]&&(f+="; "+d,!0!==c[d]&&(f+="="+c[d].split(";")[0]));return document.cookie=t+"="+n+f}}function l(e,n){if("undefined"!=typeof document){for(var o={},c=document.cookie?document.cookie.split("; "):[],i=0;i<c.length;i++){var l=c[i].split("="),f=l.slice(1).join("=");n||'"'!==f.charAt(0)||(f=f.slice(1,-1));try{var d=t(l[0]);if(f=(r.read||r)(f,d)||t(f),n)try{f=JSON.parse(f)}catch(e){}if(o[d]=f,e===d)break}catch(e){}}return e?o[e]:o}}return o.set=c,o.get=function(e){return l(e,!1)},o.getJSON=function(e){return l(e,!0)},o.remove=function(t,n){c(t,"",e(n,{expires:-1}))},o.defaults={},o.withConverter=n,o}((function(){}))}))},282:function(e,t,n){"use strict";n(18),n(49),n(68),n(16);var r=n(2),o=(n(128),{components:{imageCompressor:n(371).a},props:{nodeId:{type:Number,default:0},imageList:{type:Array,required:!1},onImageUploadCallBack:{type:Function,required:!1}},data:function(){return{scale:100,quality:50,content:"",images:[],message:"",maxWordCount:1e3,showUploader:!1,maxImageCount:6}},computed:{hasContent:function(){return this.content&&this.content.length>0},wordCount:function(){return this.content?this.content.length:0},imageCount:function(){return this.images?this.images.length:0},user:function(){return this.$store.state.user.current}},mounted:function(){this.imageList&&this.imageList.length>0&&(this.images=this.imageList)},methods:{getFiles:function(e){var img=e.compressed.file;if(img){var t=e.compressed.size;console.log("getFiles original:"+t),t/1e3<1?this.uploadFiles([img]):this.$toast.error("上传文件过大:"+e.compressed.size+e.compressed.unit)}},onInput:function(){},doSubmit:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.user){t.next=3;break}return e.message="发表失败，请登录后重试",t.abrupt("return");case 3:if(e.hasContent){t.next=6;break}return e.message="发表失败，请输入内容",t.abrupt("return");case 6:return e.showUploader=!1,t.prev=7,t.next=10,e.$axios.post("/api/tweet/create",{content:e.content,imageList:JSON.stringify(e.images)});case 10:n=t.sent,e.content="",e.message="",e.$emit("created",n),e.$toast.success("发布成功, 可以复制帖子分享微信群"),t.next=20;break;case 17:t.prev=17,t.t0=t.catch(7),e.message=t.t0.message||t.t0;case 20:case"end":return t.stop()}}),t,null,[[7,17]])})))()},handleImageUploadClick:function(){this.$refs.compressor.$el.click()},handleParse:function(e){var t=e.clipboardData&&e.clipboardData.items,n=null;if(void 0!==t&&t&&t.length)for(var i=0;i<t.length;i++)t[i].type&&t[i].type.includes("image")&&(n=t[i].getAsFile());n&&(this.showUploader=!0,e.preventDefault(),this.imageCount+1>this.maxImageCount?this.message="图片数量超过上限":this.upload(n))},handleDrag:function(e){e.stopPropagation(),e.preventDefault();var t=[],n=e.dataTransfer.items;if(n&&n.length&&n&&n.length)for(var i=0;i<n.length;i++)n[i].type.includes("image")&&t.push(n[i].getAsFile());t&&t.length&&(this.showUploader=!0,this.uploadFiles(t))},handleImageUploadChange:function(e){var t=this;return Object(r.a)(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(r=e.target.files){n.next=3;break}return n.abrupt("return");case 3:return n.next=5,t.uploadFiles(r);case 5:t.$refs.imageInput.value=null;case 6:case"end":return n.stop()}}),n)})))()},uploadFiles:function(e){var t=this;return Object(r.a)(regeneratorRuntime.mark((function n(){var i;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(0!==e.length){n.next=2;break}return n.abrupt("return");case 2:if(!(t.imageCount+e.length>t.maxImageCount)){n.next=5;break}return t.message="图片数量超过上限",n.abrupt("return");case 5:i=0;case 6:if(!(i<e.length)){n.next=12;break}return n.next=9,t.upload(e[i]);case 9:i++,n.next=6;break;case 12:case"end":return n.stop()}}),n)})))()},upload:function(e){var t=this;return Object(r.a)(regeneratorRuntime.mark((function n(){var r,o;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,(r=new FormData).append("image",e,e.name),n.next=5,t.$axios.post("/api/upload",r);case 5:o=n.sent,t.images.push(o.url),n.next=13;break;case 9:n.prev=9,n.t0=n.catch(0),t.$toast.error(n.t0.message),t.message=n.t0.message||n.t0;case 13:t.onImageUploadCallBack&&t.onImageUploadCallBack(t.images);case 14:case"end":return n.stop()}}),n,null,[[0,9]])})))()},removeImg:function(img){var e=this.images.indexOf(img);-1!==e&&this.images.splice(e,1),this.onImageUploadCallBack&&this.onImageUploadCallBack(this.images)}}}),c=(n(442),n(29)),component=Object(c.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"post-tweets-wrapper"},[n("div",{staticClass:"tweets-box"},[n("div",{staticClass:"box-footer"},[n("div",{staticClass:"bui-left"},[n("span",{staticClass:"action-btn",on:{click:function(t){e.showUploader=!e.showUploader}}},[n("i",{staticClass:"iconfont icon-image"}),e._v(" "),n("span",[e._v("本地图片上传")])])])]),e._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:e.showUploader,expression:"showUploader"}],staticClass:"uploader-popup"},[n("div",{staticClass:"imgUploadBox"},[n("p",{staticClass:"uploader-title"},[e._v("本地上传")]),e._v(" "),n("p",{staticClass:"uploader-meta"},[e._v("\n          共 "+e._s(e.imageCount)+" 张，还能上传 "+e._s(e.maxImageCount-e.imageCount)+" 张\n        ")]),e._v(" "),n("i",{staticClass:"close-popup iconfont icon-close",on:{click:function(t){e.showUploader=!1}}}),e._v(" "),n("div",{staticClass:"upload-box"},[n("form",{staticStyle:{display:"none"}},[n("image-compressor",{ref:"compressor",staticClass:"compressor",attrs:{done:e.getFiles,scale:e.scale,quality:e.quality}})],1),e._v(" "),n("ul",{staticClass:"upload-img-list"},[e._l(e.images,(function(image,i){return n("li",{key:i,staticClass:"upload-img-item"},[n("img",{attrs:{src:image}}),e._v(" "),n("i",{staticClass:"iconfont icon-close remove",on:{click:function(t){return e.removeImg(image)}}})])})),e._v(" "),e.imageCount<e.maxImageCount?n("li",{staticClass:"upload-img-item upload-img-add",on:{click:e.handleImageUploadClick}},[n("i",{staticClass:"iconfont icon-add"})]):e._e()],2)])])])])])}),[],!1,null,"fe10371c",null);t.a=component.exports},305:function(e,t,n){(function(){function n(e,t){t=t||"";for(var n=window.atob(e),r=[],o=0,c=n.length;o<c;o+=1024){for(var l=n.slice(o,o+1024),f=new Array(l.length),i=0;i<l.length;i++)f[i]=l.charCodeAt(i);var d=new Uint8Array(f);r.push(d)}return new Blob(r,{type:t})}e.exports&&(t=e.exports=n),t.base64ToBlob=n}).call(this)},324:function(e,t,n){},371:function(e,t,n){"use strict";n(67),n(18),n(49),n(68),n(128);var r=n(305),o=n.n(r),c={props:{scale:{type:Number,default:100},quality:{type:Number,default:100},done:{type:Function,default:function(){}}},data:function(){return{file:{},result:{},reader:{},imgSrc:""}},watch:{scale:function(){return this.redraw()},quality:function(){return this.redraw()}},methods:{onChange:function(e){if(!e.target.files[0])return!1;this.file=e.target.files[0];this.file.type.includes("image");this.reader=new FileReader,this.reader.readAsDataURL(this.file),this.reader.onload=this.fileOnLoad},drawImage:function(e){var t=this,canvas=document.createElement("canvas");this.canvas=canvas;var n=this.canvas.getContext("2d"),img=new Image;img.src=e,img.onload=function(){var e=t.scale/100,r=img.width*e,o=img.height*e;t.canvas.setAttribute("width",r),t.canvas.setAttribute("height",o),n.drawImage(img,0,0,r,o);var c=t.quality?t.quality/100:1,l=t.canvas.toDataURL("image/jpeg",c),f=t.result.file.name,d=f.lastIndexOf(".");f=f.substr(0,d)+".jpeg";var m={canvas:t.canvas,original:t.result,compressed:{blob:t.toBlob(l),base64:l,name:f,file:t.buildFile(l,f)}},h=Math.round(m.compressed.file.size/1e3);m.compressed.size=h,m.compressed.unit="kb",m.compressed.type="image/jpeg",t.done(m),t.$refs.imageInput.value=null}},redraw:function(){this.result.base64&&this.drawImage(this.result.base64)},fileOnLoad:function(){var e=this.file,t={name:e.name,type:e.type,size:Math.round(e.size/1e3)+" kB",base64:this.reader.result,file:e};this.result=t,this.drawImage(this.result.base64)},toBlob:function(e){var t=o()(e.split(",")[1],"image/jpeg");return window.URL.createObjectURL(t)},buildFile:function(e,t){var n=o()(e.split(",")[1],"image/jpeg");return new File([n],t,{type:"image/jpeg"})}}},l=n(29),component=Object(l.a)(c,(function(){var e=this.$createElement;return(this._self._c||e)("input",{ref:"imageInput",attrs:{type:"file",accept:"image/*"},on:{change:this.onChange}})}),[],!1,null,null,null);t.a=component.exports},442:function(e,t,n){"use strict";var r=n(324);n.n(r).a}}]);