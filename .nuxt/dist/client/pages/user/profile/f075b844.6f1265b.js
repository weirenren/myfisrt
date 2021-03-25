(window.webpackJsonp=window.webpackJsonp||[]).push([[86],{210:function(t,e,r){},211:function(t,e,r){},219:function(t,e,r){"use strict";var n=r(210);r.n(n).a},220:function(t,e,r){"use strict";var n=r(211);r.n(n).a},221:function(t,e,r){"use strict";r(16);var n=r(2),o=(r(137),{props:{currentNodeId:{type:Number,default:0}},computed:{createTopicUrl:function(){var t="/topic/create";return this.currentNodeId&&(t+="?nodeId="+this.currentNodeId),t}}}),c=(r(219),r(29)),l=Object(c.a)(o,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"aside-actions"})}),[],!1,null,"2af0916a",null).exports,d=r(68),v={components:{PostBtns:l},props:{user:{type:Object,required:!0}},data:function(){return{}},computed:{currentUser:function(){return this.$store.state.user.current},isOwner:function(){var t=this.$store.state.user.current;return this.user&&t&&this.user.id===t.id},isAdmin:function(){return d.a.isOwner(this.currentUser)||d.a.isAdmin(this.currentUser)}},methods:{forbidden:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.post("/api/user/forbidden",{userId:t.user.id,days:7});case 3:t.user.forbidden=!0,t.$toast.success("禁言成功"),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),t.$toast.error("禁言失败");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()},removeForbidden:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.post("/api/user/forbidden",{userId:t.user.id,days:0});case 3:t.user.forbidden=!1,t.$toast.success("取消禁言成功"),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),t.$toast.error("取消禁言失败");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()}}},f=(r(220),Object(c.a)(v,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"right-container"},[t.isOwner?r("post-btns"):t._e(),t._v(" "),r("div",{staticClass:"widget"},[r("div",{staticClass:"widget-header"},[t._v("\n      "+t._s(t.user.nickname)+"\n    ")]),t._v(" "),r("div",{staticClass:"widget-content"},[r("img",{staticClass:"img-avatar",attrs:{src:t.user.smallAvatar}}),t._v(" "),t.user.description?r("div",{staticClass:"description"},[r("p",[t._v(t._s(t.user.description))])]):t._e(),t._v(" "),r("div",{staticClass:"score"},[r("i",{staticClass:"iconfont icon-score"}),t._v(" "),r("span",[t._v(t._s(t.user.score))]),t._v(" "),t.isOwner?r("a",{staticClass:"score-log",attrs:{href:"/user/scores",target:"_blank"}},[t._v("积分详情>>")]):t._e()]),t._v(" "),t.isOwner?r("ul",{staticClass:"operations"},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2)]):t._e(),t._v(" "),t.isAdmin?r("ul",{staticClass:"operations"},[t.user.forbidden?r("li",[r("i",{staticClass:"iconfont icon-forbidden"}),t._v(" "),r("a",{on:{click:t.removeForbidden}},[t._v(" 取消禁言")])]):r("li",[r("i",{staticClass:"iconfont icon-forbidden"}),t._v(" "),r("a",{on:{click:t.forbidden}},[t._v(" 禁言")])])]):t._e()])])],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("i",{staticClass:"iconfont icon-edit"}),this._v(" "),e("a",{attrs:{href:"/user/settings"}},[this._v(" 编辑资料")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("i",{staticClass:"iconfont icon-message"}),this._v(" "),e("a",{attrs:{href:"/user/messages"}},[this._v(" 消息")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("i",{staticClass:"iconfont icon-favorites"}),this._v(" "),e("a",{attrs:{href:"/user/favorites"}},[this._v(" 收藏")])])}],!1,null,"3d739100",null));e.a=f.exports},337:function(t,e,r){},457:function(t,e,r){"use strict";var n=r(337);r.n(n).a},569:function(t,e,r){"use strict";r.r(e);r(71),r(25),r(17),r(9),r(42),r(18);var n=r(37),o=(r(16),r(2));function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function l(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var d={middleware:"authenticated",components:{UserCenterSidebar:r(221).a},asyncData:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){var r,n,form;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$axios,t.params,e.next=3,r.get("/api/user/current");case 3:return n=e.sent,form=l({},n),e.abrupt("return",{user:n,form:form});case 6:case"end":return e.stop()}}),e)})))()},data:function(){return{form:{username:"",email:"",nickname:"",avatar:"",homePage:"",description:"",password:"",rePassword:"",oldPassword:""},showSetUsername:!1,showSetEmail:!1,showSetPassword:!1,showUpdatePassword:!1}},methods:{submitForm:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.post("/api/user/edit/"+t.user.id,{nickname:t.form.nickname,avatar:t.form.avatar,homePage:t.form.homePage,description:t.form.description});case 3:return e.next=5,t.reload();case 5:t.$toast.success("资料修改成功"),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0),t.$toast.error("资料修改失败："+(e.t0.message||e.t0));case 12:case"end":return e.stop()}}),e,null,[[0,8]])})))()},uploadAvatar:function(t){var e=this;return Object(o.a)(regeneratorRuntime.mark((function r(){var n,o,c,l;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(!((n=t.target.files).length<=0)){r.next=3;break}return r.abrupt("return");case 3:return r.prev=3,o=n[0],(c=new FormData).append("image",o,o.name),r.next=9,e.$axios.post("/api/upload",c,{headers:{"Content-Type":"multipart/form-data"}});case 9:return l=r.sent,r.next=12,e.$axios.post("/api/user/update/avatar",{avatar:l.url});case 12:return r.next=14,e.reload();case 14:e.$toast.success("头像更新成功"),r.next=20;break;case 17:r.prev=17,r.t0=r.catch(3),console.error(r.t0);case 20:case"end":return r.stop()}}),r,null,[[3,17]])})))()},setUsername:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r=t,e.next=4,t.$axios.post("/api/user/set/username",{username:r.form.username});case 4:return e.next=6,t.reload();case 6:t.$toast.success("用户名设置成功"),t.showSetUsername=!1,e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),t.$toast.error("用户名设置失败："+(e.t0.message||e.t0));case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))()},setEmail:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r=t,e.next=4,t.$axios.post("/api/user/set/email",{email:r.form.email});case 4:return e.next=6,t.reload();case 6:t.$toast.success("邮箱设置成功"),t.showSetEmail=!1,e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),t.$toast.error("邮箱设置失败："+(e.t0.message||e.t0));case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))()},setPassword:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r=t,e.next=4,t.$axios.post("/api/user/set/password",{password:r.form.password,rePassword:r.form.rePassword});case 4:return e.next=6,t.reload();case 6:t.$toast.success("密码设置成功"),t.showSetPassword=!1,e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),t.$toast.error("密码设置失败："+(e.t0.message||e.t0));case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))()},updatePassword:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r=t,e.next=4,t.$axios.post("/api/user/update/password",{oldPassword:r.form.oldPassword,password:r.form.password,rePassword:r.form.rePassword});case 4:return e.next=6,t.reload();case 6:t.$toast.success("密码修改成功"),t.showUpdatePassword=!1,e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),t.$toast.error("密码修改失败："+(e.t0.message||e.t0));case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))()},reload:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.get("/api/user/current");case 2:t.user=e.sent,t.form=l({},t.user);case 4:case"end":return e.stop()}}),e)})))()},requestEmailVerify:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.$nuxt.$loading.start(),e.prev=1,e.next=4,t.$axios.post("/api/user/email/verify");case 4:t.$toast.success("邮件已经发送到你的邮箱："+t.user.email+"，请注意查收。"),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),t.$toast.error("请求验证失败："+(e.t0.message||e.t0));case 10:return e.prev=10,t.$nuxt.$loading.finish(),e.finish(10);case 13:case"end":return e.stop()}}),e,null,[[1,7,10,13]])})))()}},head:function(){return{title:this.$siteTitle(this.user.nickname+" - 账号等级")}}},v=(r(457),r(29)),component=Object(v.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"main"},[r("div",{staticClass:"container main-container is-white left-main"},[r("div",{staticClass:"left-container"},[r("div",{staticClass:"widget"},[r("div",{staticClass:"widget-header"},[r("nav",{staticClass:"breadcrumb"},[r("ul",[t._m(0),t._v(" "),r("li",[r("a",{attrs:{href:"/user/"+t.user.id}},[t._v(t._s(t.user.nickname))])]),t._v(" "),t._m(1)])])]),t._v(" "),r("div",{staticClass:"widget-content"},[r("div",{staticClass:"field is-horizontal"},[t._m(2),t._v(" "),r("div",{staticClass:"field-body"},[r("div",{staticClass:"field"},[r("div",{staticClass:"control has-icons-left"},[t.user.username?r("label",[t._v(t._s(t.user.username))]):r("a",{on:{click:function(e){t.showSetUsername=!0}}},[t._v("点击设置")])])])])]),t._v(" "),r("div",{staticClass:"field is-horizontal"},[t._m(3),t._v(" "),r("div",{staticClass:"field-body"},[r("div",{staticClass:"field"},[r("div",{staticClass:"control has-icons-left"},[t.user.username?r("label",[t._v(t._s(t.user.username))]):r("a",{on:{click:function(e){t.showSetUsername=!0}}},[t._v("点击设置")])])])])]),t._v(" "),r("div",{staticClass:"field is-horizontal"},[t._m(4),t._v(" "),r("div",{staticClass:"field-body"},[r("div",{staticClass:"field"},[r("div",{staticClass:"control has-icons-left"},[t.user.username?r("label",[t._v(t._s(t.user.username))]):r("a",{on:{click:function(e){t.showSetUsername=!0}}},[t._v("点击设置")])])])])]),t._v(" "),r("div",{staticClass:"field is-horizontal"},[t._m(5),t._v(" "),r("div",{staticClass:"field-body"},[r("div",{staticClass:"field"},[r("div",{staticClass:"control has-icons-left"},[t.user.email?[r("label",[t._v(t._s(t.user.email))]),t._v(" "),t.user.emailVerified?r("span",{staticClass:"has-text-success"},[t._v("已验证")]):r("a",{staticClass:"has-text-danger",on:{click:t.requestEmailVerify}},[t._v("点击验证>>")])]:[r("a",{on:{click:function(e){t.showSetEmail=!0}}},[t._v("点击设置")])]],2)])])]),t._v(" "),r("div",{staticClass:"field is-horizontal"},[t._m(6),t._v(" "),r("div",{staticClass:"field-body"},[r("div",{staticClass:"field"},[r("div",{staticClass:"control has-icons-left"},[t.user.passwordSet?[r("label",[t._v("密码已设置 ")]),t._v(" "),r("a",{on:{click:function(e){t.showUpdatePassword=!0}}},[t._v("点击修改")])]:r("a",{on:{click:function(e){t.showSetPassword=!0}}},[t._v("点击设置")])],2)])])]),t._v(" "),r("div",{staticClass:"field is-horizontal"},[t._m(7),t._v(" "),r("div",{staticClass:"field-body"},[r("div",{staticClass:"field"},[r("div",{staticClass:"control"},[r("img",{staticStyle:{width:"150px",height:"150px"},attrs:{src:t.user.avatar}}),t._v(" "),r("div",{staticClass:"file"},[r("label",{staticClass:"file-label"},[r("input",{staticClass:"file-input",attrs:{type:"file"},on:{change:t.uploadAvatar}}),t._v(" "),t._m(8)])]),t._v(" "),r("span",{staticStyle:{"font-weight":"bold",color:"red"}},[t._v("*图像必须为正方形，大小不要超过1M。")])])])])]),t._v(" "),r("div",{staticClass:"field is-horizontal"},[t._m(9),t._v(" "),r("div",{staticClass:"field-body"},[r("div",{staticClass:"field"},[r("div",{staticClass:"control has-icons-left"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.nickname,expression:"form.nickname"}],staticClass:"input",attrs:{type:"text",autocomplete:"off",placeholder:"请输入昵称"},domProps:{value:t.form.nickname},on:{input:function(e){e.target.composing||t.$set(t.form,"nickname",e.target.value)}}}),t._v(" "),t._m(10)])])])]),t._v(" "),r("div",{staticClass:"field is-horizontal"},[t._m(11),t._v(" "),r("div",{staticClass:"field-body"},[r("div",{staticClass:"field"},[r("div",{staticClass:"control"},[r("textarea",{directives:[{name:"model",rawName:"v-model",value:t.form.description,expression:"form.description"}],staticClass:"textarea",attrs:{rows:"2",placeholder:"一句话介绍你自己"},domProps:{value:t.form.description},on:{input:function(e){e.target.composing||t.$set(t.form,"description",e.target.value)}}})])])])]),t._v(" "),r("div",{staticClass:"field is-horizontal"},[t._m(12),t._v(" "),r("div",{staticClass:"field-body"},[r("div",{staticClass:"field"},[r("div",{staticClass:"control has-icons-left"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.homePage,expression:"form.homePage"}],staticClass:"input",attrs:{type:"text",autocomplete:"off",placeholder:"请输入个人主页"},domProps:{value:t.form.homePage},on:{input:function(e){e.target.composing||t.$set(t.form,"homePage",e.target.value)}}}),t._v(" "),t._m(13)])])])]),t._v(" "),r("div",{staticClass:"field is-horizontal"},[r("div",{staticClass:"field-label is-normal"}),t._v(" "),r("div",{staticClass:"field-body"},[r("div",{staticClass:"field"},[r("div",{staticClass:"control"},[r("a",{staticClass:"button is-success",on:{click:t.submitForm}},[t._v("提交修改")])])])])])])])]),t._v(" "),r("user-center-sidebar",{attrs:{user:t.user}})],1),t._v(" "),r("div",{staticClass:"modal",class:{"is-active":t.showSetUsername}},[r("div",{staticClass:"modal-background"}),t._v(" "),r("div",{staticClass:"modal-card"},[r("div",{staticClass:"widget"},[r("div",{staticClass:"widget-header"},[t._v("\n          设置用户名\n          "),r("button",{staticClass:"delete",attrs:{"aria-label":"close"},on:{click:function(e){t.showSetUsername=!1}}})]),t._v(" "),r("div",{staticClass:"widget-content"},[r("div",{staticClass:"field"},[r("div",{staticClass:"control has-icons-left"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.username,expression:"form.username"}],staticClass:"input is-success",attrs:{type:"text",placeholder:"请输入用户名"},domProps:{value:t.form.username},on:{keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.setUsername(e)},input:function(e){e.target.composing||t.$set(t.form,"username",e.target.value)}}}),t._v(" "),t._m(14)])])]),t._v(" "),r("div",{staticClass:"widget-footer is-right"},[r("a",{staticClass:"button is-success",on:{click:t.setUsername}},[t._v("确定")]),t._v(" "),r("a",{staticClass:"button",on:{click:function(e){t.showSetUsername=!1}}},[t._v("取消")])])])])]),t._v(" "),r("div",{staticClass:"modal",class:{"is-active":t.showSetEmail}},[r("div",{staticClass:"modal-background"}),t._v(" "),r("div",{staticClass:"modal-card"},[r("div",{staticClass:"widget"},[r("div",{staticClass:"widget-header"},[t._v("\n          设置邮箱\n          "),r("button",{staticClass:"delete",attrs:{"aria-label":"close"},on:{click:function(e){t.showSetEmail=!1}}})]),t._v(" "),r("div",{staticClass:"widget-content"},[r("div",{staticClass:"field"},[r("div",{staticClass:"control has-icons-left"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.email,expression:"form.email"}],staticClass:"input is-success",attrs:{type:"text",placeholder:"请输入邮箱"},domProps:{value:t.form.email},on:{keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.setEmail(e)},input:function(e){e.target.composing||t.$set(t.form,"email",e.target.value)}}}),t._v(" "),t._m(15)])])]),t._v(" "),r("div",{staticClass:"widget-footer is-right"},[r("a",{staticClass:"button is-success",on:{click:t.setEmail}},[t._v("确定")]),t._v(" "),r("a",{staticClass:"button",on:{click:function(e){t.showSetEmail=!1}}},[t._v("取消")])])])])]),t._v(" "),r("div",{staticClass:"modal",class:{"is-active":t.showSetPassword}},[r("div",{staticClass:"modal-background"}),t._v(" "),r("div",{staticClass:"modal-card"},[r("div",{staticClass:"widget"},[r("div",{staticClass:"widget-header"},[t._v("\n          设置密码\n          "),r("button",{staticClass:"delete",attrs:{"aria-label":"close"},on:{click:function(e){t.showSetPassword=!1}}})]),t._v(" "),r("div",{staticClass:"widget-content"},[r("div",{staticClass:"field"},[r("div",{staticClass:"control has-icons-left"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.password,expression:"form.password"}],staticClass:"input is-success",attrs:{type:"password",placeholder:"请输入密码"},domProps:{value:t.form.password},on:{keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.setPassword(e)},input:function(e){e.target.composing||t.$set(t.form,"password",e.target.value)}}}),t._v(" "),t._m(16)])]),t._v(" "),r("div",{staticClass:"field"},[r("div",{staticClass:"control has-icons-left"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.rePassword,expression:"form.rePassword"}],staticClass:"input is-success",attrs:{type:"password",placeholder:"请再次确认密码"},domProps:{value:t.form.rePassword},on:{keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.setPassword(e)},input:function(e){e.target.composing||t.$set(t.form,"rePassword",e.target.value)}}}),t._v(" "),t._m(17)])])]),t._v(" "),r("div",{staticClass:"widget-footer is-right"},[r("a",{staticClass:"button is-success",on:{click:t.setPassword}},[t._v("确定")]),t._v(" "),r("a",{staticClass:"button",on:{click:function(e){t.showSetPassword=!1}}},[t._v("取消")])])])])]),t._v(" "),r("div",{staticClass:"modal",class:{"is-active":t.showUpdatePassword}},[r("div",{staticClass:"modal-background"}),t._v(" "),r("div",{staticClass:"modal-card"},[r("div",{staticClass:"widget"},[r("div",{staticClass:"widget-header"},[t._v("\n          修改密码\n          "),r("button",{staticClass:"delete",attrs:{"aria-label":"close"},on:{click:function(e){t.showUpdatePassword=!1}}})]),t._v(" "),r("div",{staticClass:"widget-content"},[r("div",{staticClass:"field"},[r("div",{staticClass:"control has-icons-left"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.oldPassword,expression:"form.oldPassword"}],staticClass:"input is-success",attrs:{type:"password",placeholder:"请输入当前密码"},domProps:{value:t.form.oldPassword},on:{keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.updatePassword(e)},input:function(e){e.target.composing||t.$set(t.form,"oldPassword",e.target.value)}}}),t._v(" "),t._m(18)])]),t._v(" "),r("div",{staticClass:"field"},[r("div",{staticClass:"control has-icons-left"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.password,expression:"form.password"}],staticClass:"input is-success",attrs:{type:"password",placeholder:"请输入密码"},domProps:{value:t.form.password},on:{keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.updatePassword(e)},input:function(e){e.target.composing||t.$set(t.form,"password",e.target.value)}}}),t._v(" "),t._m(19)])]),t._v(" "),r("div",{staticClass:"field"},[r("div",{staticClass:"control has-icons-left"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.rePassword,expression:"form.rePassword"}],staticClass:"input is-success",attrs:{type:"password",placeholder:"请再次确认密码"},domProps:{value:t.form.rePassword},on:{keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.updatePassword(e)},input:function(e){e.target.composing||t.$set(t.form,"rePassword",e.target.value)}}}),t._v(" "),t._m(20)])])]),t._v(" "),r("div",{staticClass:"widget-footer is-right"},[r("a",{staticClass:"button is-success",on:{click:t.updatePassword}},[t._v("确定")]),t._v(" "),r("a",{staticClass:"button",on:{click:function(e){t.showUpdatePassword=!1}}},[t._v("取消")])])])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("a",{attrs:{href:"/"}},[this._v("首页")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",{staticClass:"is-active"},[e("a",{attrs:{href:"#","aria-current":"page"}},[this._v("账号等级")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"field-label is-normal"},[e("label",{staticClass:"label"},[this._v("账号段位：")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"field-label is-normal"},[e("label",{staticClass:"label"},[this._v("推荐人：")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"field-label is-normal"},[e("label",{staticClass:"label"},[this._v("推荐人列表：")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"field-label is-normal"},[e("label",{staticClass:"label"},[this._v("邮箱：")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"field-label is-normal"},[e("label",{staticClass:"label"},[this._v("密码：")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"field-label is-normal"},[e("label",{staticClass:"label"},[e("span",{staticStyle:{color:"red"}},[this._v("* ")]),this._v("头像：\n              ")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"file-cta"},[e("span",{staticClass:"file-icon"},[e("i",{staticClass:"iconfont icon-upload"})]),this._v(" "),e("span",{staticClass:"file-label"},[this._v("选择头像")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"field-label is-normal"},[e("label",{staticClass:"label"},[e("span",{staticStyle:{color:"red"}},[this._v("* ")]),this._v("昵称：\n              ")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"icon is-small is-left"},[e("i",{staticClass:"iconfont icon-username"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"field-label is-normal"},[e("label",{staticClass:"label"},[this._v("简介：")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"field-label is-normal"},[e("label",{staticClass:"label"},[this._v("个人主页：")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"icon is-small is-left"},[e("i",{staticClass:"iconfont icon-net"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"icon is-small is-left"},[e("i",{staticClass:"iconfont icon-username"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"icon is-small is-left"},[e("i",{staticClass:"iconfont icon-email"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"icon is-small is-left"},[e("i",{staticClass:"iconfont icon-password"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"icon is-small is-left"},[e("i",{staticClass:"iconfont icon-password"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"icon is-small is-left"},[e("i",{staticClass:"iconfont icon-password"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"icon is-small is-left"},[e("i",{staticClass:"iconfont icon-password"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"icon is-small is-left"},[e("i",{staticClass:"iconfont icon-password"})])}],!1,null,"7fe4a744",null);e.default=component.exports}}]);