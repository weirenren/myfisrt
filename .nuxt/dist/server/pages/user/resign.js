exports.ids = [69];
exports.modules = {

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/_vue-loader@15.9.3@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.9.3@vue-loader/lib??vue-loader-options!./pages/user/resign.vue?vue&type=template&id=83084e86&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"main"},[_vm._ssrNode("<div class=\"container\">","</div>",[_vm._ssrNode("<div class=\"main-body\">","</div>",[_vm._ssrNode("<div class=\"widget\">","</div>",[_vm._ssrNode("<div class=\"widget-header\">\n          密码重置\n        </div> "),_vm._ssrNode("<div class=\"widget-content\">","</div>",[_vm._ssrNode("<div class=\"field\"><label class=\"label\">新密码</label> <div class=\"control has-icons-left\"><input type=\"text\" placeholder=\"请输入新密码\""+(_vm._ssrAttr("value",(_vm.username)))+" class=\"input is-success\"> <span class=\"icon is-small is-left\"><i class=\"iconfont icon-username\"></i></span></div></div> <div class=\"field\"><label class=\"label\">新密码确认</label> <div class=\"control has-icons-left\"><input type=\"password\" placeholder=\"请第二次输入新密码\""+(_vm._ssrAttr("value",(_vm.password)))+" class=\"input\"> <span class=\"icon is-small is-left\"><i class=\"iconfont icon-password\"></i></span></div></div> <div class=\"field\"><label class=\"label\">验证码</label> <div class=\"control has-icons-left\"><div class=\"field is-horizontal\"><div class=\"field\"><input type=\"text\" placeholder=\"验证码\""+(_vm._ssrAttr("value",(_vm.captchaCode)))+" class=\"input\" style=\"max-width: 150px; margin-right: 20px;\"> <span class=\"icon is-small is-left\"><i class=\"iconfont icon-captcha\"></i></span></div> "+((_vm.captchaUrl)?("<div class=\"field\"><a><img"+(_vm._ssrAttr("src",_vm.captchaUrl))+" style=\"height: 40px;\"></a></div>"):"<!---->")+"</div></div></div> "),_vm._ssrNode("<div class=\"field\">","</div>",[_vm._ssrNode("<div class=\"control\">","</div>",[_vm._ssrNode("<button class=\"button is-success\">\n                登录\n              </button> "),_c('nuxt-link',{staticClass:"button is-text",attrs:{"to":"/user/signup"}},[_vm._v("\n                没有账号？点击这里去注册>>\n              ")]),_vm._ssrNode(" "),_c('nuxt-link',{staticClass:"button is-text",attrs:{"to":"/user/forget"}},[_vm._v("\n                忘记密码？点击这里去找回>>\n              ")])],2)])],2)],2)])])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/user/resign.vue?vue&type=template&id=83084e86&

// EXTERNAL MODULE: ./common/utils.js
var utils = __webpack_require__(40);

// CONCATENATED MODULE: ./node_modules/_babel-loader@8.1.0@babel-loader/lib??ref--2-0!./node_modules/_vue-loader@15.9.3@vue-loader/lib??vue-loader-options!./pages/user/resign.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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

/* harmony default export */ var resignvue_type_script_lang_js_ = ({
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
// CONCATENATED MODULE: ./pages/user/resign.vue?vue&type=script&lang=js&
 /* harmony default export */ var user_resignvue_type_script_lang_js_ = (resignvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/_vue-loader@15.9.3@vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./pages/user/resign.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  user_resignvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "5e1bcad6"
  
)

/* harmony default export */ var resign = __webpack_exports__["default"] = (component.exports);

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

  formatDate(timestamp, fmt) {
    fmt = fmt || 'yyyy-MM-dd HH:mm:ss';
    const date = new Date(timestamp);
    const o = {
      'M+': date.getMonth() + 1,
      'd+': date.getDate(),
      'h+': date.getHours() % 12,
      'H+': date.getHours(),
      'm+': date.getMinutes(),
      's+': date.getSeconds(),
      'q+': Math.floor((date.getMonth() + 3) / 3),
      S: date.getMilliseconds()
    };

    if (/(y+)/.test(fmt)) {
      fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
    }

    for (const k in o) {
      if (new RegExp('(' + k + ')').test(fmt)) {
        fmt = fmt.replace(RegExp.$1, RegExp.$1.length === 1 ? o[k] : ('00' + o[k]).substr(('' + o[k]).length));
      }
    }

    return fmt;
  }

  prettyDate(timestamp) {
    const minute = 1000 * 60;
    const hour = minute * 60;
    const day = hour * 24;
    const diffValue = new Date().getTime() - timestamp;

    if (diffValue / minute < 1) {
      return '刚刚';
    } else if (diffValue / minute < 60) {
      return parseInt(diffValue / minute) + '分钟前';
    } else if (diffValue / hour <= 24) {
      return parseInt(diffValue / hour) + '小时前';
    } else if (diffValue / day <= 30) {
      return parseInt(diffValue / day) + '天前';
    }

    return Utils.formatDate(timestamp, 'yyyy-MM-dd HH:mm:ss');
  }

}

/* harmony default export */ __webpack_exports__["a"] = (new Utils());

/***/ })

};;
//# sourceMappingURL=resign.js.map