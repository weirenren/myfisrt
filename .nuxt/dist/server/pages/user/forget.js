exports.ids = [63];
exports.modules = {

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/_vue-loader@15.9.3@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.9.3@vue-loader/lib??vue-loader-options!./pages/user/forget.vue?vue&type=template&id=04173f39&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"main"},[_vm._ssrNode("<div class=\"container\">","</div>",[_vm._ssrNode("<div class=\"main-body\">","</div>",[_vm._ssrNode("<div class=\"widget\">","</div>",[_vm._ssrNode("<div class=\"widget-header\">\n          找回密码\n        </div> "),_vm._ssrNode("<div class=\"widget-content\">","</div>",[_vm._ssrNode("<div class=\"field\"><label class=\"label\">注册邮箱</label> <div class=\"control has-icons-left\"><input type=\"text\" placeholder=\"请输入注册邮箱\""+(_vm._ssrAttr("value",(_vm.username)))+" class=\"input is-success\"> <span class=\"icon is-small is-left\"><i class=\"iconfont icon-username\"></i></span></div></div> <div class=\"field\"><label class=\"label\">验证码</label> <div class=\"control has-icons-left\"><div class=\"field is-horizontal\"><div class=\"field\"><input type=\"text\" placeholder=\"验证码\""+(_vm._ssrAttr("value",(_vm.captchaCode)))+" class=\"input\" style=\"max-width: 150px; margin-right: 20px;\"> <span class=\"icon is-small is-left\"><i class=\"iconfont icon-captcha\"></i></span></div> "+((_vm.captchaUrl)?("<div class=\"field\"><a><img"+(_vm._ssrAttr("src",_vm.captchaUrl))+" style=\"height: 40px;\"></a></div>"):"<!---->")+"</div></div></div> "),_vm._ssrNode("<div class=\"field\">","</div>",[_vm._ssrNode("<div class=\"control\">","</div>",[_vm._ssrNode("<button class=\"button is-success\">\n                提交\n              </button> "),_c('nuxt-link',{staticClass:"button is-text",attrs:{"to":"/user/signin"}},[_vm._v("\n                返回登录>>\n              ")])],2)])],2)],2)])])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/user/forget.vue?vue&type=template&id=04173f39&

// EXTERNAL MODULE: ./common/utils.js
var utils = __webpack_require__(40);

// CONCATENATED MODULE: ./node_modules/_babel-loader@8.1.0@babel-loader/lib??ref--2-0!./node_modules/_vue-loader@15.9.3@vue-loader/lib??vue-loader-options!./pages/user/forget.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
 // import GithubLogin from '~/components/GithubLogin'
// import QqLogin from '~/components/QqLogin'

/* harmony default export */ var forgetvue_type_script_lang_js_ = ({
  components: {// GithubLogin,
    // QqLogin
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
          this.$toast.error('请输入注册邮箱');
          return;
        }

        if (!this.captchaCode) {
          this.$toast.error('请输入验证码');
          return;
        }

        const user = await this.$axios.post('/api/user/request/reset/password', {
          captchaId: this.captchaId,
          captchaCode: this.captchaCode,
          email: this.username
        });
        this.$toast.success('成功发送找回密码请求，请进入邮箱及时查看，一小时内完成密码修改!', {
          duration: 1000,
          keepOnHover: false,
          position: 'top-center',

          onComplete() {
            utils["a" /* default */].linkTo('/user/signin');
          }

        }); // if (this.ref) {
        //   // 跳到登录前
        //   utils.linkTo(this.ref)
        // } else {
        //   // 跳到个人主页
        //   utils.linkTo('/user/' + user.id)
        // }
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
// CONCATENATED MODULE: ./pages/user/forget.vue?vue&type=script&lang=js&
 /* harmony default export */ var user_forgetvue_type_script_lang_js_ = (forgetvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/_vue-loader@15.9.3@vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./pages/user/forget.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  user_forgetvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "536a5b92"
  
)

/* harmony default export */ var forget = __webpack_exports__["default"] = (component.exports);

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

/***/ })

};;
//# sourceMappingURL=forget.js.map