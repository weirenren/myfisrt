exports.ids = [72];
exports.modules = {

/***/ 210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/_vue-loader@15.9.3@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.9.3@vue-loader/lib??vue-loader-options!./pages/user/signup.vue?vue&type=template&id=9136fa7e&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"main"},[_vm._ssrNode("<div class=\"container\" data-v-9136fa7e>","</div>",[_vm._ssrNode("<div class=\"main-body\" data-v-9136fa7e>","</div>",[_vm._ssrNode("<div class=\"widget\" data-v-9136fa7e>","</div>",[_vm._ssrNode("<div class=\"widget-header\" data-v-9136fa7e>\n          注册\n        </div> "),_vm._ssrNode("<div class=\"widget-content\" data-v-9136fa7e>","</div>",[_vm._ssrNode("<div class=\"field\" data-v-9136fa7e><label class=\"label\" data-v-9136fa7e>昵称</label> <div class=\"control has-icons-left\" data-v-9136fa7e><input type=\"text\" placeholder=\"请输入昵称\""+(_vm._ssrAttr("value",(_vm.nickname)))+" class=\"input is-success\" data-v-9136fa7e> <span class=\"icon is-small is-left\" data-v-9136fa7e><i class=\"iconfont icon-username\" data-v-9136fa7e></i></span></div></div> <div class=\"field\" data-v-9136fa7e><label class=\"label\" data-v-9136fa7e>邮箱</label> <div class=\"control has-icons-left\" data-v-9136fa7e><input type=\"text\" placeholder=\"请输入邮箱\""+(_vm._ssrAttr("value",(_vm.email)))+" class=\"input is-success\" data-v-9136fa7e> <span class=\"icon is-small is-left\" data-v-9136fa7e><i class=\"iconfont icon-email\" data-v-9136fa7e></i></span></div></div> <div class=\"field\" data-v-9136fa7e><label class=\"label\" data-v-9136fa7e>密码</label> <div class=\"control has-icons-left\" data-v-9136fa7e><input type=\"password\" placeholder=\"请输入密码\""+(_vm._ssrAttr("value",(_vm.password)))+" class=\"input\" data-v-9136fa7e> <span class=\"icon is-small is-left\" data-v-9136fa7e><i class=\"iconfont icon-password\" data-v-9136fa7e></i></span></div></div> <div class=\"field\" data-v-9136fa7e><label class=\"label\" data-v-9136fa7e>确认密码</label> <div class=\"control has-icons-left\" data-v-9136fa7e><input type=\"password\" placeholder=\"请再次输入密码\""+(_vm._ssrAttr("value",(_vm.rePassword)))+" class=\"input\" data-v-9136fa7e> <span class=\"icon is-small is-left\" data-v-9136fa7e><i class=\"iconfont icon-password\" data-v-9136fa7e></i></span></div></div> <div class=\"field\" data-v-9136fa7e><label class=\"label\" data-v-9136fa7e>验证码</label> <div class=\"control has-icons-left\" data-v-9136fa7e><div class=\"field is-horizontal\" data-v-9136fa7e><div class=\"field\" style=\"width:100%;\" data-v-9136fa7e><input type=\"text\" placeholder=\"验证码\""+(_vm._ssrAttr("value",(_vm.captchaCode)))+" class=\"input\" data-v-9136fa7e> <span class=\"icon is-small is-left\" data-v-9136fa7e><i class=\"iconfont icon-captcha\" data-v-9136fa7e></i></span></div> "+((_vm.captchaUrl)?("<div class=\"field\" data-v-9136fa7e><a data-v-9136fa7e><img"+(_vm._ssrAttr("src",_vm.captchaUrl))+" style=\"height: 40px;\" data-v-9136fa7e></a></div>"):"<!---->")+"</div></div></div> "),_vm._ssrNode("<div class=\"field\" data-v-9136fa7e>","</div>",[_vm._ssrNode("<div class=\"control\" data-v-9136fa7e>","</div>",[_vm._ssrNode("<button class=\"button is-success\" data-v-9136fa7e>\n                注册\n              </button> "),_c('nuxt-link',{staticClass:"button is-text",attrs:{"to":"/user/signin"}},[_vm._v("\n                已有账号，前往登录>>\n              ")])],2)])],2)],2)])])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/user/signup.vue?vue&type=template&id=9136fa7e&scoped=true&

// EXTERNAL MODULE: ./common/utils.js
var utils = __webpack_require__(40);

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
 // import GithubLogin from '~/components/GithubLogin'
// import QqLogin from '~/components/QqLogin'

/* harmony default export */ var signupvue_type_script_lang_js_ = ({
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
  "9136fa7e",
  "583e5d3d"
  
)

/* harmony default export */ var signup = __webpack_exports__["default"] = (component.exports);

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
//# sourceMappingURL=signup.js.map