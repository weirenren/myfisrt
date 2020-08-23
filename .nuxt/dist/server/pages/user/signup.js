exports.ids = [66];
exports.modules = {

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/_vue-loader@15.9.3@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.9.3@vue-loader/lib??vue-loader-options!./components/GithubLogin.vue?vue&type=template&id=60f12e5b&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('a',{staticClass:"is-black",class:{ button: _vm.isButton },on:{"click":_vm.githubLogin}},[_vm._ssrNode("<i class=\"iconfont icon-github\" data-v-60f12e5b></i> \n  <strong data-v-60f12e5b>"+_vm._ssrEscape(_vm._s(_vm.title))+"</strong>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/GithubLogin.vue?vue&type=template&id=60f12e5b&scoped=true&

// CONCATENATED MODULE: ./node_modules/_babel-loader@8.1.0@babel-loader/lib??ref--2-0!./node_modules/_vue-loader@15.9.3@vue-loader/lib??vue-loader-options!./components/GithubLogin.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
/* harmony default export */ var GithubLoginvue_type_script_lang_js_ = ({
  name: 'GithubLogin',
  props: {
    title: {
      type: String,
      default: 'Github 登录'
    },
    refUrl: {
      // 登录来源地址，控制登录成功之后要跳到该地址
      type: String,
      default: ''
    },
    isButton: {
      type: Boolean,
      default: true
    }
  },

  data() {
    return {
      refUrlValue: this.refUrl
    };
  },

  methods: {
    async githubLogin() {
      try {
        if (!this.refUrlValue && false) {
          // 如果没配置refUrl，那么取当前地址
          this.refUrlValue = window.location.pathname;
        }

        const ret = await this.$axios.get('/api/login/github/authorize', {
          params: {
            ref: this.refUrlValue
          }
        });
        window.location = ret.url;
      } catch (e) {
        console.error(e);
        this.$toast.error('登录失败：' + (e.message || e));
      }
    }

  }
});
// CONCATENATED MODULE: ./components/GithubLogin.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_GithubLoginvue_type_script_lang_js_ = (GithubLoginvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/_vue-loader@15.9.3@vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./components/GithubLogin.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_GithubLoginvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "60f12e5b",
  "c737519e"
  
)

/* harmony default export */ var GithubLogin = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/_vue-loader@15.9.3@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.9.3@vue-loader/lib??vue-loader-options!./components/QqLogin.vue?vue&type=template&id=46cf9fdf&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('a',{staticClass:"is-info",class:{ button: _vm.isButton },on:{"click":_vm.qqLogin}},[_vm._ssrNode("<i class=\"iconfont icon-qq\" data-v-46cf9fdf></i> \n  <strong data-v-46cf9fdf>"+_vm._ssrEscape(_vm._s(_vm.title))+"</strong>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/QqLogin.vue?vue&type=template&id=46cf9fdf&scoped=true&

// CONCATENATED MODULE: ./node_modules/_babel-loader@8.1.0@babel-loader/lib??ref--2-0!./node_modules/_vue-loader@15.9.3@vue-loader/lib??vue-loader-options!./components/QqLogin.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
/* harmony default export */ var QqLoginvue_type_script_lang_js_ = ({
  name: 'QQLogin',
  props: {
    title: {
      type: String,
      default: 'QQ 登录'
    },
    refUrl: {
      // 登录来源地址，控制登录成功之后要跳到该地址
      type: String,
      default: ''
    },
    isButton: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    async qqLogin() {
      try {
        if (!this.refUrlValue && false) {
          // 如果没配置refUrl，那么取当前地址
          this.refUrlValue = window.location.pathname;
        }

        const ret = await this.$axios.get('/api/login/qq/authorize', {
          params: {
            ref: this.refUrlValue
          }
        });
        window.location = ret.url;
      } catch (e) {
        console.error(e);
        this.$toast.error('登录失败：' + (e.message || e));
      }
    }

  }
});
// CONCATENATED MODULE: ./components/QqLogin.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_QqLoginvue_type_script_lang_js_ = (QqLoginvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/_vue-loader@15.9.3@vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./components/QqLogin.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_QqLoginvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "46cf9fdf",
  "cb6089d8"
  
)

/* harmony default export */ var QqLogin = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 171:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/_vue-loader@15.9.3@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.9.3@vue-loader/lib??vue-loader-options!./pages/user/signup.vue?vue&type=template&id=b364a3c8&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"main"},[_vm._ssrNode("<div class=\"container\" data-v-b364a3c8>","</div>",[_vm._ssrNode("<div class=\"main-body\" data-v-b364a3c8>","</div>",[_vm._ssrNode("<div class=\"widget\" data-v-b364a3c8>","</div>",[_vm._ssrNode("<div class=\"widget-header\" data-v-b364a3c8>\n          注册\n        </div> "),_vm._ssrNode("<div class=\"widget-content\" data-v-b364a3c8>","</div>",[_vm._ssrNode("<div class=\"field\" data-v-b364a3c8><label class=\"label\" data-v-b364a3c8>昵称</label> <div class=\"control has-icons-left\" data-v-b364a3c8><input type=\"text\" placeholder=\"请输入昵称\""+(_vm._ssrAttr("value",(_vm.nickname)))+" class=\"input is-success\" data-v-b364a3c8> <span class=\"icon is-small is-left\" data-v-b364a3c8><i class=\"iconfont icon-username\" data-v-b364a3c8></i></span></div></div> <div class=\"field\" data-v-b364a3c8><label class=\"label\" data-v-b364a3c8>邮箱</label> <div class=\"control has-icons-left\" data-v-b364a3c8><input type=\"text\" placeholder=\"请输入邮箱\""+(_vm._ssrAttr("value",(_vm.email)))+" class=\"input is-success\" data-v-b364a3c8> <span class=\"icon is-small is-left\" data-v-b364a3c8><i class=\"iconfont icon-email\" data-v-b364a3c8></i></span></div></div> <div class=\"field\" data-v-b364a3c8><label class=\"label\" data-v-b364a3c8>密码</label> <div class=\"control has-icons-left\" data-v-b364a3c8><input type=\"password\" placeholder=\"请输入密码\""+(_vm._ssrAttr("value",(_vm.password)))+" class=\"input\" data-v-b364a3c8> <span class=\"icon is-small is-left\" data-v-b364a3c8><i class=\"iconfont icon-password\" data-v-b364a3c8></i></span></div></div> <div class=\"field\" data-v-b364a3c8><label class=\"label\" data-v-b364a3c8>确认密码</label> <div class=\"control has-icons-left\" data-v-b364a3c8><input type=\"password\" placeholder=\"请再次输入密码\""+(_vm._ssrAttr("value",(_vm.rePassword)))+" class=\"input\" data-v-b364a3c8> <span class=\"icon is-small is-left\" data-v-b364a3c8><i class=\"iconfont icon-password\" data-v-b364a3c8></i></span></div></div> <div class=\"field\" data-v-b364a3c8><label class=\"label\" data-v-b364a3c8>验证码</label> <div class=\"control has-icons-left\" data-v-b364a3c8><div class=\"field is-horizontal\" data-v-b364a3c8><div class=\"field\" style=\"width:100%;\" data-v-b364a3c8><input type=\"text\" placeholder=\"验证码\""+(_vm._ssrAttr("value",(_vm.captchaCode)))+" class=\"input\" data-v-b364a3c8> <span class=\"icon is-small is-left\" data-v-b364a3c8><i class=\"iconfont icon-captcha\" data-v-b364a3c8></i></span></div> "+((_vm.captchaUrl)?("<div class=\"field\" data-v-b364a3c8><a data-v-b364a3c8><img"+(_vm._ssrAttr("src",_vm.captchaUrl))+" style=\"height: 40px;\" data-v-b364a3c8></a></div>"):"<!---->")+"</div></div></div> "),_vm._ssrNode("<div class=\"field\" data-v-b364a3c8>","</div>",[_vm._ssrNode("<div class=\"control\" data-v-b364a3c8>","</div>",[_vm._ssrNode("<button class=\"button is-success\" data-v-b364a3c8>\n                注册\n              </button> "),_c('github-login',{attrs:{"ref-url":_vm.ref}}),_vm._ssrNode(" "),_c('qq-login',{attrs:{"ref-url":_vm.ref}}),_vm._ssrNode(" "),_c('nuxt-link',{staticClass:"button is-text",attrs:{"to":"/user/signin"}},[_vm._v("\n                已有账号，前往登录>>\n              ")])],2)])],2)],2)])])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/user/signup.vue?vue&type=template&id=b364a3c8&scoped=true&

// EXTERNAL MODULE: ./common/utils.js
var utils = __webpack_require__(33);

// EXTERNAL MODULE: ./components/GithubLogin.vue + 4 modules
var GithubLogin = __webpack_require__(110);

// EXTERNAL MODULE: ./components/QqLogin.vue + 4 modules
var QqLogin = __webpack_require__(111);

// CONCATENATED MODULE: ./node_modules/_babel-loader@8.1.0@babel-loader/lib??ref--2-0!./node_modules/_vue-loader@15.9.3@vue-loader/lib??vue-loader-options!./pages/user/signup.vue?vue&type=script&lang=js&
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



/* harmony default export */ var signupvue_type_script_lang_js_ = ({
  components: {
    GithubLogin: GithubLogin["a" /* default */],
    QqLogin: QqLogin["a" /* default */]
  },

  asyncData({
    params,
    query
  }) {
    return {
      ref: query.ref
    };
  },

  data() {
    return {
      nickname: '',
      email: '',
      password: '',
      rePassword: '',
      captchaId: '',
      captchaUrl: '',
      captchaCode: ''
    };
  },

  mounted() {
    this.showCaptcha();
  },

  methods: {
    async signup() {
      try {
        await this.$store.dispatch('user/signup', {
          captchaId: this.captchaId,
          captchaCode: this.captchaCode,
          nickname: this.nickname,
          email: this.email,
          password: this.password,
          rePassword: this.rePassword,
          ref: this.ref
        });

        if (this.ref) {
          // 跳到登录前
          utils["a" /* default */].linkTo(this.ref);
        } else {
          // 跳到个人主页
          utils["a" /* default */].linkTo('/user/settings');
        }
      } catch (err) {
        this.$toast.error(err.message || err);
        await this.showCaptcha();
      }
    },

    async showCaptcha() {
      try {
        const ret = await this.$axios.get('/api/captcha/request');
        this.captchaId = ret.captchaId;
        this.captchaUrl = ret.captchaUrl;
        this.captchaCode = '';
      } catch (e) {
        this.$toast.error(e.message || e);
      }
    }

  },

  head() {
    return {
      title: this.$siteTitle('注册')
    };
  }

});
// CONCATENATED MODULE: ./pages/user/signup.vue?vue&type=script&lang=js&
 /* harmony default export */ var user_signupvue_type_script_lang_js_ = (signupvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/_vue-loader@15.9.3@vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./pages/user/signup.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  user_signupvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "b364a3c8",
  "583e5d3d"
  
)

/* harmony default export */ var signup = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 33:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(28);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_0__);


class Utils {
  getCity() {
    const city = js_cookie__WEBPACK_IMPORTED_MODULE_0___default.a.get('city');

    if (city) {
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

  isEmpty(content) {
    const str = content;
    if (str === '' || str === undefined) return true;
    const regu = '^[ ]+$';
    const re = new RegExp(regu);
    return re.test(str);
  }

}

/* harmony default export */ __webpack_exports__["a"] = (new Utils());

/***/ })

};;
//# sourceMappingURL=signup.js.map