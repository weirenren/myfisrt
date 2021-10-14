exports.ids = [60];
exports.modules = {

/***/ 214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/_vue-loader@15.9.3@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.9.3@vue-loader/lib??vue-loader-options!./pages/user/email/reset.vue?vue&type=template&id=73fca6ca&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"main"},[_vm._ssrNode("<div class=\"container main-container is-white left-main\" data-v-73fca6ca><div class=\"left-container\" data-v-73fca6ca><div class=\"widget\" data-v-73fca6ca><div class=\"widget-header\" data-v-73fca6ca>密码重置</div> <div class=\"widget-content\" data-v-73fca6ca>"+((_vm.success)?("<div data-v-73fca6ca><div class=\"field\" data-v-73fca6ca><label class=\"label\" data-v-73fca6ca>新密码</label> <div class=\"control has-icons-left\" data-v-73fca6ca><input type=\"password\" placeholder=\"请输入新密码\""+(_vm._ssrAttr("value",(_vm.password)))+" class=\"input\" data-v-73fca6ca> <span class=\"icon is-small is-left\" data-v-73fca6ca><i class=\"iconfont icon-username\" data-v-73fca6ca></i></span></div></div> <div class=\"field\" data-v-73fca6ca><label class=\"label\" data-v-73fca6ca>新密码确认</label> <div class=\"control has-icons-left\" data-v-73fca6ca><input type=\"password\" placeholder=\"请第二次输入新密码\""+(_vm._ssrAttr("value",(_vm.password2)))+" class=\"input\" data-v-73fca6ca> <span class=\"icon is-small is-left\" data-v-73fca6ca><i class=\"iconfont icon-password\" data-v-73fca6ca></i></span></div></div> <div class=\"field\" data-v-73fca6ca><label class=\"label\" data-v-73fca6ca>验证码</label> <div class=\"control has-icons-left\" data-v-73fca6ca><div class=\"field is-horizontal\" data-v-73fca6ca><div class=\"field\" data-v-73fca6ca><input type=\"text\" placeholder=\"验证码\""+(_vm._ssrAttr("value",(_vm.captchaCode)))+" class=\"input\" style=\"max-width: 150px; margin-right: 20px;\" data-v-73fca6ca> <span class=\"icon is-small is-left\" data-v-73fca6ca><i class=\"iconfont icon-captcha\" data-v-73fca6ca></i></span></div> "+((_vm.captchaUrl)?("<div class=\"field\" data-v-73fca6ca><a data-v-73fca6ca><img"+(_vm._ssrAttr("src",_vm.captchaUrl))+" style=\"height: 40px;\" data-v-73fca6ca></a></div>"):"<!---->")+"</div></div></div> <div class=\"field\" data-v-73fca6ca><div class=\"control\" data-v-73fca6ca><button class=\"button is-success\" data-v-73fca6ca>\n                  确认\n                </button></div></div></div>"):("<div data-v-73fca6ca>\n            重置密码请求已经过期\n          </div>"))+"</div></div></div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/user/email/reset.vue?vue&type=template&id=73fca6ca&scoped=true&

// EXTERNAL MODULE: ./components/UserCenterSidebar.vue + 9 modules
var UserCenterSidebar = __webpack_require__(73);

// EXTERNAL MODULE: ./common/utils.js
var utils = __webpack_require__(40);

// CONCATENATED MODULE: ./node_modules/_babel-loader@8.1.0@babel-loader/lib??ref--2-0!./node_modules/_vue-loader@15.9.3@vue-loader/lib??vue-loader-options!./pages/user/email/reset.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var resetvue_type_script_lang_js_ = ({
  middleware: 'authenticated',

  // components: { UserCenterSidebar },
  async asyncData({
    $axios,
    query
  }) {
    try {
      await $axios.get('/api/user/verify/forget?token=' + query.token);
      return {
        success: true,
        token: query.token
      };
    } catch (e) {
      return {
        success: false,
        message: e.message || ''
      };
    }
  },

  data() {
    return {
      password: '',
      password2: '',
      captchaId: '',
      captchaUrl: '',
      captchaCode: '',
      token: ''
    };
  },

  computed: {
    currentUser() {
      return this.$store.state.user.current;
    },

    isLogin() {
      return !!this.currentUser;
    }

  },

  mounted() {
    if (this.isLogin) {
      this.$toast.success('已经处于登录状态', {
        duration: 1000,
        keepOnHover: false,
        position: 'top-center',

        onComplete() {
          utils["a" /* default */].linkTo('/user/settings');
        }

      });
    } else {
      this.showCaptcha();
    }
  },

  methods: {
    async showCaptcha() {
      try {
        const ret = await this.$axios.get('/api/captcha/request', {
          params: {
            captchaId: this.captchaId || ''
          }
        });
        this.captchaId = ret.captchaId;
        this.captchaUrl = ret.captchaUrl;
      } catch (e) {
        this.$toast.error(e.message || e);
      }
    },

    async submitLogin() {
      try {
        if (!this.password && !this.password2) {
          this.$toast.error('请输入密码');
          return;
        }

        if (this.password !== this.password2) {
          this.$toast.error('两次密码不一致');
          return;
        }

        if (!this.captchaCode) {
          this.$toast.error('请输入验证码');
          return;
        }

        const res = await this.$axios.post('/api/user/reset/password', {
          captchaId: this.captchaId,
          captchaCode: this.captchaCode,
          rePassword: this.password2,
          password: this.password,
          token: this.token
        });
        this.$toast.success('密码修改成功！', {
          duration: 1000,
          keepOnHover: false,
          position: 'top-center',

          onComplete() {
            utils["a" /* default */].linkTo('/user/signin');
          }

        });
      } catch (e) {
        this.$toast.error(e.message || e);
        await this.showCaptcha();
      }
    }

  }
});
// CONCATENATED MODULE: ./pages/user/email/reset.vue?vue&type=script&lang=js&
 /* harmony default export */ var email_resetvue_type_script_lang_js_ = (resetvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/_vue-loader@15.9.3@vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./pages/user/email/reset.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  email_resetvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "73fca6ca",
  "21228f72"
  
)

/* harmony default export */ var email_reset = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 40:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(29);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_0__);


class Utils {
  getCity() {
    // Cookies.get('city')
    const city = js_cookie__WEBPACK_IMPORTED_MODULE_0___default.a.get('city');

    if (city !== undefined) {
      return city;
    }

    return '北京';
  }

  setCity(city) {
    return js_cookie__WEBPACK_IMPORTED_MODULE_0___default.a.set('city', city);
  }

  linkTo(path) {
    window.location = path; // 这里使用$router.push会导致跳转页面之后window.vditor对象undefined，原因未知
    // window.$nuxt.$router.push(path)
  }

  toSignin(ref) {
    if (!ref && false) {
      // 如果没配置refUrl，那么取当前地址
      ref = window.location.pathname;
    }

    this.linkTo('/user/signin?ref=' + encodeURIComponent(ref));
  }

  isSigninUrl(ref) {
    return ref === '/user/signin';
  }

  isArray(sources) {
    return Object.prototype.toString.call(sources) === '[object Array]';
  }

  isDate(sources) {
    return {}.toString.call(sources) === '[object Date]' && sources.toString() !== 'Invalid Date' && !isNaN(sources);
  }

  isElement(sources) {
    return !!(sources && sources.nodeName && sources.nodeType === 1);
  }

  isFunction(sources) {
    return Object.prototype.toString.call(sources) === '[object Function]';
  }

  unique(arr) {
    return arr.filter((item, index, arr) => {
      return arr.indexOf(item, 0) === index;
    });
  }

  isNumber(sources) {
    return Object.prototype.toString.call(sources) === '[object Number]' && isFinite(sources);
  }

  isObject(sources) {
    return Object.prototype.toString.call(sources) === '[object Object]';
  }

  isString(sources) {
    return Object.prototype.toString.call(sources) === '[object String]';
  }

  isBoolean(sources) {
    return typeof sources === 'boolean';
  }

  getCityList() {
    return ['北京', '上海', '深圳', '武汉', '杭州'];
  }

  isEmpty(content) {
    const str = content;
    if (str === '' || str === undefined) return true;
    const regu = '^[ ]+$';
    const re = new RegExp(regu);
    return re.test(str);
  }

  getTopText(topType) {
    if (topType === 1) {
      return '顶';
    }

    if (topType === 2) {
      return '火';
    }

    if (topType === 3) {
      return '精华';
    }

    return '';
  }

}

/* harmony default export */ __webpack_exports__["a"] = (new Utils());

/***/ }),

/***/ 51:
/***/ (function(module, exports) {

// Exports
module.exports = {};


/***/ }),

/***/ 52:
/***/ (function(module, exports) {

// Exports
module.exports = {};


/***/ }),

/***/ 71:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_15_9_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_PostBtns_vue_vue_type_style_index_0_id_2af0916a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(51);
/* harmony import */ var _node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_15_9_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_PostBtns_vue_vue_type_style_index_0_id_2af0916a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_15_9_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_PostBtns_vue_vue_type_style_index_0_id_2af0916a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_15_9_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_PostBtns_vue_vue_type_style_index_0_id_2af0916a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_15_9_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_PostBtns_vue_vue_type_style_index_0_id_2af0916a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_15_9_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_PostBtns_vue_vue_type_style_index_0_id_2af0916a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 72:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_15_9_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_UserCenterSidebar_vue_vue_type_style_index_0_id_3d739100_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(52);
/* harmony import */ var _node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_15_9_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_UserCenterSidebar_vue_vue_type_style_index_0_id_3d739100_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_15_9_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_UserCenterSidebar_vue_vue_type_style_index_0_id_3d739100_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_15_9_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_UserCenterSidebar_vue_vue_type_style_index_0_id_3d739100_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_15_9_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_UserCenterSidebar_vue_vue_type_style_index_0_id_3d739100_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_15_9_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_UserCenterSidebar_vue_vue_type_style_index_0_id_3d739100_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 73:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/_vue-loader@15.9.3@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.9.3@vue-loader/lib??vue-loader-options!./components/UserCenterSidebar.vue?vue&type=template&id=3d739100&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"right-container"},[(_vm.isOwner)?_c('post-btns'):_vm._e(),_vm._ssrNode(" <div class=\"widget\" data-v-3d739100><div class=\"widget-header\" data-v-3d739100>"+_vm._ssrEscape("\n      "+_vm._s(_vm.user.nickname)+"\n    ")+"</div> <div class=\"widget-content\" data-v-3d739100><img"+(_vm._ssrAttr("src",_vm.user.smallAvatar))+" class=\"img-avatar\" data-v-3d739100> "+((_vm.user.description)?("<div class=\"description\" data-v-3d739100><p data-v-3d739100>"+_vm._ssrEscape(_vm._s(_vm.user.description))+"</p></div>"):"<!---->")+" <div class=\"score\" data-v-3d739100><i class=\"iconfont icon-score\" data-v-3d739100></i> <span data-v-3d739100>"+_vm._ssrEscape(_vm._s(_vm.user.score))+"</span> "+((_vm.isOwner)?("<a href=\"/user/scores\" target=\"_blank\" class=\"score-log\" data-v-3d739100>积分详情&gt;&gt;</a>"):"<!---->")+"</div> "+((_vm.isOwner)?("<ul class=\"operations\" data-v-3d739100><li data-v-3d739100><i class=\"iconfont icon-edit\" data-v-3d739100></i> <a href=\"/user/settings\" data-v-3d739100> 编辑资料</a></li> <li data-v-3d739100><i class=\"iconfont icon-message\" data-v-3d739100></i> <a href=\"/user/messages\" data-v-3d739100> 消息</a></li> <li data-v-3d739100><i class=\"iconfont icon-favorites\" data-v-3d739100></i> <a href=\"/user/favorites\" data-v-3d739100> 收藏</a></li></ul>"):"<!---->")+" "+((_vm.isAdmin)?("<ul class=\"operations\" data-v-3d739100>"+((_vm.user.forbidden)?("<li data-v-3d739100><i class=\"iconfont icon-forbidden\" data-v-3d739100></i> <a data-v-3d739100> 取消禁言</a></li>"):("<li data-v-3d739100><i class=\"iconfont icon-forbidden\" data-v-3d739100></i> <a data-v-3d739100> 禁言</a></li>"))+"</ul>"):"<!---->")+"</div></div>")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/UserCenterSidebar.vue?vue&type=template&id=3d739100&scoped=true&

// CONCATENATED MODULE: ./node_modules/_vue-loader@15.9.3@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.9.3@vue-loader/lib??vue-loader-options!./components/PostBtns.vue?vue&type=template&id=2af0916a&scoped=true&
var PostBtnsvue_type_template_id_2af0916a_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"aside-actions"},[])}
var PostBtnsvue_type_template_id_2af0916a_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./components/PostBtns.vue?vue&type=template&id=2af0916a&scoped=true&

// CONCATENATED MODULE: ./node_modules/_babel-loader@8.1.0@babel-loader/lib??ref--2-0!./node_modules/_vue-loader@15.9.3@vue-loader/lib??vue-loader-options!./components/PostBtns.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var PostBtnsvue_type_script_lang_js_ = ({
  props: {
    currentNodeId: {
      type: Number,
      default: 0
    }
  },
  computed: {
    createTopicUrl() {
      let url = '/topic/create';

      if (this.currentNodeId) {
        url += '?nodeId=' + this.currentNodeId;
      }

      return url;
    }

  }
});
// CONCATENATED MODULE: ./components/PostBtns.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_PostBtnsvue_type_script_lang_js_ = (PostBtnsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/_vue-loader@15.9.3@vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./components/PostBtns.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(71)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_PostBtnsvue_type_script_lang_js_,
  PostBtnsvue_type_template_id_2af0916a_scoped_true_render,
  PostBtnsvue_type_template_id_2af0916a_scoped_true_staticRenderFns,
  false,
  injectStyles,
  "2af0916a",
  "3e909808"
  
)

/* harmony default export */ var PostBtns = (component.exports);
// EXTERNAL MODULE: ./common/UserHelper.js
var UserHelper = __webpack_require__(9);

// CONCATENATED MODULE: ./node_modules/_babel-loader@8.1.0@babel-loader/lib??ref--2-0!./node_modules/_vue-loader@15.9.3@vue-loader/lib??vue-loader-options!./components/UserCenterSidebar.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var UserCenterSidebarvue_type_script_lang_js_ = ({
  components: {
    PostBtns: PostBtns
  },
  props: {
    user: {
      type: Object,
      required: true
    }
  },

  data() {
    return {};
  },

  computed: {
    currentUser() {
      return this.$store.state.user.current;
    },

    // 是否是主人态
    isOwner() {
      const current = this.$store.state.user.current;
      return this.user && current && this.user.id === current.id;
    },

    isAdmin() {
      return UserHelper["a" /* default */].isOwner(this.currentUser) || UserHelper["a" /* default */].isAdmin(this.currentUser);
    }

  },
  methods: {
    async forbidden() {
      try {
        await this.$axios.post('/api/user/forbidden', {
          userId: this.user.id,
          days: 7
        });
        this.user.forbidden = true;
        this.$toast.success('禁言成功');
      } catch (e) {
        this.$toast.error('禁言失败');
      }
    },

    async removeForbidden() {
      try {
        await this.$axios.post('/api/user/forbidden', {
          userId: this.user.id,
          days: 0
        });
        this.user.forbidden = false;
        this.$toast.success('取消禁言成功');
      } catch (e) {
        this.$toast.error('取消禁言失败');
      }
    }

  }
});
// CONCATENATED MODULE: ./components/UserCenterSidebar.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_UserCenterSidebarvue_type_script_lang_js_ = (UserCenterSidebarvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/UserCenterSidebar.vue



function UserCenterSidebar_injectStyles (context) {
  
  var style0 = __webpack_require__(72)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var UserCenterSidebar_component = Object(componentNormalizer["a" /* default */])(
  components_UserCenterSidebarvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  UserCenterSidebar_injectStyles,
  "3d739100",
  "4754e832"
  
)

/* harmony default export */ var UserCenterSidebar = __webpack_exports__["a"] = (UserCenterSidebar_component.exports);

/***/ })

};;
//# sourceMappingURL=reset.js.map