exports.ids = [65];
exports.modules = {

/***/ 112:
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
var componentNormalizer = __webpack_require__(1);

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
  "75e5a4ae"
  
)

/* harmony default export */ var GithubLogin = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 113:
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
var componentNormalizer = __webpack_require__(1);

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
  "ffd2e4e8"
  
)

/* harmony default export */ var QqLogin = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 172:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/_vue-loader@15.9.3@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.9.3@vue-loader/lib??vue-loader-options!./pages/user/signin.vue?vue&type=template&id=7994d4c0&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"main"},[_vm._ssrNode("<div class=\"container\">","</div>",[_vm._ssrNode("<div class=\"main-body\">","</div>",[_vm._ssrNode("<div class=\"widget\">","</div>",[_vm._ssrNode("<div class=\"widget-header\">\n          登录\n        </div> "),_vm._ssrNode("<div class=\"widget-content\">","</div>",[_vm._ssrNode("<div class=\"field\"><label class=\"label\">用户名/邮箱</label> <div class=\"control has-icons-left\"><input type=\"text\" placeholder=\"请输入用户名或邮箱\""+(_vm._ssrAttr("value",(_vm.username)))+" class=\"input is-success\"> <span class=\"icon is-small is-left\"><i class=\"iconfont icon-username\"></i></span></div></div> <div class=\"field\"><label class=\"label\">密码</label> <div class=\"control has-icons-left\"><input type=\"password\" placeholder=\"请输入密码\""+(_vm._ssrAttr("value",(_vm.password)))+" class=\"input\"> <span class=\"icon is-small is-left\"><i class=\"iconfont icon-password\"></i></span></div></div> <div class=\"field\"><label class=\"label\">验证码</label> <div class=\"control has-icons-left\"><div class=\"field is-horizontal\"><div class=\"field\"><input type=\"text\" placeholder=\"验证码\""+(_vm._ssrAttr("value",(_vm.captchaCode)))+" class=\"input\" style=\"max-width: 150px; margin-right: 20px;\"> <span class=\"icon is-small is-left\"><i class=\"iconfont icon-captcha\"></i></span></div> "+((_vm.captchaUrl)?("<div class=\"field\"><a><img"+(_vm._ssrAttr("src",_vm.captchaUrl))+" style=\"height: 40px;\"></a></div>"):"<!---->")+"</div></div></div> "),_vm._ssrNode("<div class=\"field\">","</div>",[_vm._ssrNode("<div class=\"control\">","</div>",[_vm._ssrNode("<button class=\"button is-success\">\n                登录\n              </button> "),_c('github-login',{attrs:{"ref-url":_vm.ref}}),_vm._ssrNode(" "),_c('qq-login',{attrs:{"ref-url":_vm.ref}}),_vm._ssrNode(" "),_c('nuxt-link',{staticClass:"button is-text",attrs:{"to":"/user/signup"}},[_vm._v("\n                没有账号？点击这里去注册>>\n              ")])],2)])],2)],2)])])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/user/signin.vue?vue&type=template&id=7994d4c0&

// EXTERNAL MODULE: ./common/utils.js
var utils = __webpack_require__(35);

// EXTERNAL MODULE: ./components/GithubLogin.vue + 4 modules
var GithubLogin = __webpack_require__(112);

// EXTERNAL MODULE: ./components/QqLogin.vue + 4 modules
var QqLogin = __webpack_require__(113);

// CONCATENATED MODULE: ./node_modules/_babel-loader@8.1.0@babel-loader/lib??ref--2-0!./node_modules/_vue-loader@15.9.3@vue-loader/lib??vue-loader-options!./pages/user/signin.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var signinvue_type_script_lang_js_ = ({
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
      username: '',
      password: '',
      captchaId: '',
      captchaUrl: '',
      captchaCode: ''
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
    if (this.redirectIfLogined()) {
      return;
    }

    this.showCaptcha();
  },

  methods: {
    async submitLogin() {
      try {
        if (!this.username) {
          this.$toast.error('请输入用户名或邮箱');
          return;
        }

        if (!this.password) {
          this.$toast.error('请输入密码');
          return;
        }

        if (!this.captchaCode) {
          this.$toast.error('请输入验证码');
          return;
        }

        const user = await this.$store.dispatch('user/signin', {
          captchaId: this.captchaId,
          captchaCode: this.captchaCode,
          username: this.username,
          password: this.password,
          ref: this.ref
        });

        if (this.ref) {
          // 跳到登录前
          utils["a" /* default */].linkTo(this.ref);
        } else {
          // 跳到个人主页
          utils["a" /* default */].linkTo('/user/' + user.id);
        }
      } catch (e) {
        this.$toast.error(e.message || e);
        await this.showCaptcha();
      }
    },

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

    /**
     * 如果已经登录了，那么直接跳转
     * @returns {boolean}
     */
    redirectIfLogined() {
      if (this.isLogin) {
        const me = this;
        this.$toast.success('登录成功！', {
          duration: 1000,
          keepOnHover: false,
          position: 'top-center',

          onComplete() {
            if (me.ref && !utils["a" /* default */].isSigninUrl(me.ref)) {
              utils["a" /* default */].linkTo(me.ref);
            } else {
              utils["a" /* default */].linkTo('/');
            }
          }

        });
        return true;
      }

      return false;
    }

  },

  head() {
    return {
      title: this.$siteTitle('登录')
    };
  }

});
// CONCATENATED MODULE: ./pages/user/signin.vue?vue&type=script&lang=js&
 /* harmony default export */ var user_signinvue_type_script_lang_js_ = (signinvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/_vue-loader@15.9.3@vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/user/signin.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  user_signinvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "0901054f"
  
)

/* harmony default export */ var signin = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 35:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(30);
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
    if (str === "" || str === undefined) return true;
    var regu = "^[ ]+$";
    var re = new RegExp(regu);
    return re.test(str);
  }

}

/* harmony default export */ __webpack_exports__["a"] = (new Utils());

/***/ })

};;
//# sourceMappingURL=signin.js.map