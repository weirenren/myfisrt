exports.ids = [57];
exports.modules = {

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/_vue-loader@15.9.3@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.9.3@vue-loader/lib??vue-loader-options!./pages/user/_userId/topics/_page.vue?vue&type=template&id=708f06ca&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"main"},[_vm._ssrNode("<div class=\"container main-container is-white left-main\" data-v-708f06ca>","</div>",[_vm._ssrNode("<div class=\"left-container\" data-v-708f06ca>","</div>",[_vm._ssrNode("<nav class=\"breadcrumb my-breadcrumb\" data-v-708f06ca><ul data-v-708f06ca><li data-v-708f06ca><a href=\"article\" data-v-708f06ca>首页</a></li> <li data-v-708f06ca><a"+(_vm._ssrAttr("href",'/user/' + _vm.user.id + '?tab=topics'))+" data-v-708f06ca>"+_vm._ssrEscape(_vm._s(_vm.user.nickname))+"</a></li> <li class=\"is-active\" data-v-708f06ca><a href=\"#\" aria-current=\"page\" data-v-708f06ca>话题列表</a></li></ul></nav> "),_c('topic-list',{attrs:{"topics":_vm.topicsPage.results}}),_vm._ssrNode(" "),_c('pagination',{attrs:{"page":_vm.topicsPage.page,"url-prefix":'/user/' + _vm.user.id + '/topics/'}})],2),_vm._ssrNode(" "),_c('user-center-sidebar',{attrs:{"user":_vm.user}})],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/user/_userId/topics/_page.vue?vue&type=template&id=708f06ca&scoped=true&

// EXTERNAL MODULE: ./components/TopicList.vue + 9 modules
var TopicList = __webpack_require__(56);

// EXTERNAL MODULE: ./components/Pagination.vue + 4 modules
var Pagination = __webpack_require__(48);

// EXTERNAL MODULE: ./components/UserCenterSidebar.vue + 9 modules
var UserCenterSidebar = __webpack_require__(70);

// CONCATENATED MODULE: ./node_modules/_babel-loader@8.1.0@babel-loader/lib??ref--2-0!./node_modules/_vue-loader@15.9.3@vue-loader/lib??vue-loader-options!./pages/user/_userId/topics/_page.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var _pagevue_type_script_lang_js_ = ({
  components: {
    TopicList: TopicList["a" /* default */],
    Pagination: Pagination["a" /* default */],
    UserCenterSidebar: UserCenterSidebar["a" /* default */]
  },

  async asyncData({
    $axios,
    params,
    error
  }) {
    let user;

    try {
      user = await $axios.get('/api/user/' + params.userId);
    } catch (err) {
      error({
        statusCode: 404,
        message: err.message || '系统错误'
      });
      return;
    }

    const [topicsPage] = await Promise.all([$axios.get('/api/topic/user/topics', {
      params: {
        userId: params.userId,
        page: params.page
      }
    })]);
    return {
      user,
      topicsPage
    };
  },

  computed: {
    currentUser() {
      return this.$store.state.user.current;
    },

    // 是否是主人态
    isOwner() {
      const current = this.$store.state.user.current;
      return this.user && current && this.user.id === current.id;
    }

  },

  head() {
    return {
      title: this.$siteTitle(this.user.nickname + ' - 话题')
    };
  }

});
// CONCATENATED MODULE: ./pages/user/_userId/topics/_page.vue?vue&type=script&lang=js&
 /* harmony default export */ var topics_pagevue_type_script_lang_js_ = (_pagevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/_vue-loader@15.9.3@vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./pages/user/_userId/topics/_page.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  topics_pagevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "708f06ca",
  "19c66012"
  
)

/* harmony default export */ var _page = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 37:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(28);
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

}

/* harmony default export */ __webpack_exports__["a"] = (new Utils());

/***/ }),

/***/ 39:
/***/ (function(module, exports) {

// Exports
module.exports = {};


/***/ }),

/***/ 41:
/***/ (function(module, exports) {

// Exports
module.exports = {};


/***/ }),

/***/ 42:
/***/ (function(module, exports) {

// Exports
module.exports = {};


/***/ }),

/***/ 46:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_15_9_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_Pagination_vue_vue_type_style_index_0_id_a3f55830_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(39);
/* harmony import */ var _node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_15_9_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_Pagination_vue_vue_type_style_index_0_id_a3f55830_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_15_9_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_Pagination_vue_vue_type_style_index_0_id_a3f55830_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_15_9_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_Pagination_vue_vue_type_style_index_0_id_a3f55830_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_15_9_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_Pagination_vue_vue_type_style_index_0_id_a3f55830_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_15_9_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_Pagination_vue_vue_type_style_index_0_id_a3f55830_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 48:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/_vue-loader@15.9.3@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.9.3@vue-loader/lib??vue-loader-options!./components/Pagination.vue?vue&type=template&id=a3f55830&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.page.total > 0)?_c('nav',{staticClass:"pagination is-small",attrs:{"role":"navigation","aria-label":"pagination"}},[_vm._ssrNode(((_vm.previousPageUrl)?("<a"+(_vm._ssrAttr("href",_vm.previousPageUrl))+" class=\"pagination-previous\" data-v-a3f55830>上一页</a>"):("<a disabled=\"disabled\" class=\"pagination-previous\" data-v-a3f55830>上一页</a>"))+" "+((_vm.nextPageUrl)?("<a"+(_vm._ssrAttr("href",_vm.nextPageUrl))+" class=\"pagination-previous\" data-v-a3f55830>下一页</a>"):("<a disabled=\"disabled\" class=\"pagination-previous\" data-v-a3f55830>下一页</a>"))+" <ul class=\"pagination-list\" data-v-a3f55830>"+(_vm._ssrList((_vm.pageList),function(p){return ("<li data-v-a3f55830><a"+(_vm._ssrAttr("href",_vm.getPageUrl(p)))+(_vm._ssrClass("pagination-link",{ 'is-current': p == _vm.page.page }))+" data-v-a3f55830>"+_vm._ssrEscape(_vm._s(p))+"</a></li>")}))+"</ul>")]):_vm._e()}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Pagination.vue?vue&type=template&id=a3f55830&scoped=true&

// CONCATENATED MODULE: ./node_modules/_babel-loader@8.1.0@babel-loader/lib??ref--2-0!./node_modules/_vue-loader@15.9.3@vue-loader/lib??vue-loader-options!./components/Pagination.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Paginationvue_type_script_lang_js_ = ({
  props: {
    page: {
      // 页码对象
      type: Object,

      default() {
        return {
          page: 1,
          total: 0,
          limit: 20
        };
      },

      required: true
    },
    urlPrefix: {
      // 分页url前缀
      type: String,
      default: '/',
      required: true
    }
  },
  computed: {
    pageList() {
      const start = this.page.page - 2;
      const end = this.page.page + 2;
      const totalPage = this.getTotalPage();

      if (start <= 0) {
        const pages = [];

        for (let i = 1; i <= 5 && i <= totalPage; i++) {
          pages.push(i);
        }

        return pages;
      } else if (end > totalPage) {
        const pages = [];
        let i = totalPage - 5 <= 0 ? 1 : totalPage - 5;

        for (; i > 0 && i <= totalPage; i++) {
          pages.push(i);
        }

        return pages;
      } else {
        return [this.page.page - 2, this.page.page - 1, this.page.page, this.page.page + 1, this.page.page + 2];
      }
    },

    previousPageUrl() {
      return this.getPreviousPageUrl();
    },

    nextPageUrl() {
      return this.getNextPageUrl();
    }

  },
  methods: {
    getNextPageUrl() {
      const nextPage = this.page.page + 1;

      if (nextPage > this.getTotalPage()) {
        return '';
      }

      return this.getPageUrl(nextPage);
    },

    getPreviousPageUrl() {
      const previousPage = this.page.page - 1;

      if (previousPage <= 0) {
        return '';
      }

      return this.getPageUrl(previousPage);
    },

    getPageUrl(page) {
      if (this.page.page === page) {
        return 'javascript:void(0)';
      }

      return this.urlPrefix + page;
    },

    getTotalPage() {
      return this.page.total % this.page.limit > 0 ? parseInt(this.page.total / this.page.limit) + 1 : this.page.total / this.page.limit;
    }

  }
});
// CONCATENATED MODULE: ./components/Pagination.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Paginationvue_type_script_lang_js_ = (Paginationvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/_vue-loader@15.9.3@vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./components/Pagination.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(46)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Paginationvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "a3f55830",
  "e711cf02"
  
)

/* harmony default export */ var Pagination = __webpack_exports__["a"] = (component.exports);

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

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_15_9_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_Panel_vue_vue_type_style_index_0_id_fe043d22_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(41);
/* harmony import */ var _node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_15_9_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_Panel_vue_vue_type_style_index_0_id_fe043d22_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_15_9_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_Panel_vue_vue_type_style_index_0_id_fe043d22_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_15_9_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_Panel_vue_vue_type_style_index_0_id_fe043d22_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_15_9_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_Panel_vue_vue_type_style_index_0_id_fe043d22_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_15_9_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_Panel_vue_vue_type_style_index_0_id_fe043d22_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_15_9_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_TopicList_vue_vue_type_style_index_0_id_017625aa_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(42);
/* harmony import */ var _node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_15_9_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_TopicList_vue_vue_type_style_index_0_id_017625aa_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_15_9_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_TopicList_vue_vue_type_style_index_0_id_017625aa_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_15_9_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_TopicList_vue_vue_type_style_index_0_id_017625aa_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_15_9_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_TopicList_vue_vue_type_style_index_0_id_017625aa_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_15_9_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_TopicList_vue_vue_type_style_index_0_id_017625aa_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/_vue-loader@15.9.3@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.9.3@vue-loader/lib??vue-loader-options!./components/TopicList.vue?vue&type=template&id=017625aa&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('ul',{staticClass:"topic-list topic-wrap"},_vm._l((_vm.topics),function(topic,index){return _vm._ssrNode("<li"+(_vm._ssrAttr("index",index))+" class=\"topic-item\" data-v-017625aa>","</li>",[_vm._ssrNode("<article itemscope=\"itemscope\" itemtype=\"http://schema.org/BlogPosting\" data-v-017625aa>","</article>",[_vm._ssrNode("<div class=\"topic-header\" data-v-017625aa>","</div>",[_vm._ssrNode("<div class=\"topic-header-left\" data-v-017625aa><a"+(_vm._ssrAttr("href",'/user/' + topic.user.id))+(_vm._ssrAttr("title",topic.user.nickname))+" data-v-017625aa><img"+(_vm._ssrAttr("src",topic.user.smallAvatar))+" class=\"avatar\" data-v-017625aa></a></div> "),_vm._ssrNode("<div class=\"topic-header-center\" data-v-017625aa>","</div>",[_vm._ssrNode("<h1 itemprop=\"headline\" class=\"topic-title\" data-v-017625aa>"+((topic.node && topic.node.nodeId === 2)?("<a"+(_vm._ssrAttr("target",_vm.blank))+(_vm._ssrAttr("href",'/rent/' + topic.topicId))+(_vm._ssrAttr("title",topic.title))+" data-v-017625aa>"+_vm._ssrEscape(_vm._s(topic.title))+"</a>"):(topic.node && topic.node.nodeId === 1)?("<a"+(_vm._ssrAttr("target",_vm.blank))+(_vm._ssrAttr("href",'/love/' + topic.topicId))+(_vm._ssrAttr("title",topic.title))+" data-v-017625aa>"+_vm._ssrEscape(_vm._s(topic.title))+"</a>"):("<a"+(_vm._ssrAttr("target",_vm.blank))+(_vm._ssrAttr("href",'/topic/' + topic.topicId))+(_vm._ssrAttr("title",topic.title))+" data-v-017625aa>"+_vm._ssrEscape(_vm._s(topic.title))+"</a>"))+"</h1> "),_vm._ssrNode("<div class=\"topic-meta\" data-v-017625aa>","</div>",[_vm._ssrNode("<span itemprop=\"author\" itemscope=\"itemscope\" itemtype=\"http://schema.org/Person\" class=\"meta-item\" data-v-017625aa><a"+(_vm._ssrAttr("href",'/user/' + topic.user.id))+" itemprop=\"name\" data-v-017625aa>"+_vm._ssrEscape(_vm._s(topic.user.nickname))+"</a></span> <span class=\"meta-item\" data-v-017625aa><time"+(_vm._ssrAttr("datetime",_vm._f("formatDate")(topic.lastCommentTime,'yyyy-MM-ddTHH:mm:ss')))+" itemprop=\"datePublished\" data-v-017625aa>"+_vm._ssrEscape(_vm._s(_vm._f("prettyDate")(topic.lastCommentTime)))+"</time></span> <span class=\"meta-item\" data-v-017625aa>"+((topic.node && topic.node.nodeId === 2)?("<a"+(_vm._ssrAttr("target",_vm.blank))+" href=\"/rents\" class=\"node\" data-v-017625aa>"+_vm._ssrEscape(_vm._s(topic.node.name))+"</a>"):(topic.node && topic.node.nodeId === 1)?("<a"+(_vm._ssrAttr("target",_vm.blank))+" href=\"/love\" class=\"node\" data-v-017625aa>"+_vm._ssrEscape(_vm._s(topic.node.name))+"</a>"):("<a"+(_vm._ssrAttr("href",'/topic/node/' + topic.node.nodeId))+(_vm._ssrAttr("target",_vm.blank))+" class=\"node\" data-v-017625aa>"+_vm._ssrEscape(_vm._s(topic.node.name))+"</a>"))+"</span> "),_vm._ssrNode("<span class=\"meta-item\" data-v-017625aa>","</span>",[_vm._ssrNode((_vm._ssrList((topic.tags),function(tag){return ("<span class=\"tag\" data-v-017625aa><a"+(_vm._ssrAttr("href",'/topics/tag/' + tag.tagId))+" data-v-017625aa>"+_vm._ssrEscape(_vm._s(tag.tagName))+"</a></span>")}))+" "),(topic.node && topic.node.nodeId === 2)?_vm._ssrNode("<span"+(_vm._ssrAttr("target",_vm.blank))+" data-v-017625aa>","</span>",[_vm._ssrNode("<a class=\"tag\" data-v-017625aa>","</a>",[_vm._ssrNode("展开 \n                  "),(!_vm.isCollapsedArray[index])?_c('font-awesome-icon',{attrs:{"icon":"angle-down"}}):_vm._e(),_vm._ssrNode(" "),(_vm.isCollapsedArray[index])?_c('font-awesome-icon',{attrs:{"icon":"angle-up"}}):_vm._e()],2)]):_vm._e()],2)],2)],2),_vm._ssrNode(" <div class=\"topic-header-right\" data-v-017625aa><div class=\"like\" data-v-017625aa><span"+(_vm._ssrClass("like-btn",{ liked: topic.liked }))+" data-v-017625aa><i class=\"iconfont icon-like\" data-v-017625aa></i></span> "+((topic.likeCount)?("<span class=\"like-count\" data-v-017625aa>"+_vm._ssrEscape(_vm._s(topic.likeCount))+"</span>"):"<!---->")+"</div> <span class=\"count\" data-v-017625aa>"+_vm._ssrEscape(_vm._s(topic.commentCount)+" / "+_vm._s(topic.viewCount))+"</span></div>")],2),_vm._ssrNode(" <div"+(_vm._ssrClass("card-content",{ 'is-hidden': _vm.isCollapsedArray[index] }))+" data-v-017625aa><div style=\" font-size: 12px;\\n              color: black;\" data-v-017625aa>"+(_vm._s(topic.content))+"</div></div>")],2)])}),0)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/TopicList.vue?vue&type=template&id=017625aa&scoped=true&

// EXTERNAL MODULE: external "@fortawesome/fontawesome-svg-core"
var fontawesome_svg_core_ = __webpack_require__(29);

// EXTERNAL MODULE: external "@fortawesome/vue-fontawesome"
var vue_fontawesome_ = __webpack_require__(30);

// EXTERNAL MODULE: external "@fortawesome/free-solid-svg-icons"
var free_solid_svg_icons_ = __webpack_require__(31);

// EXTERNAL MODULE: ./common/utils.js
var utils = __webpack_require__(37);

// CONCATENATED MODULE: ./node_modules/_vue-loader@15.9.3@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.9.3@vue-loader/lib??vue-loader-options!./components/Panel.vue?vue&type=template&id=fe043d22&scoped=true&
var Panelvue_type_template_id_fe043d22_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"card"},[_vm._ssrNode("<header class=\"card-header\" data-v-fe043d22>","</header>",[_vm._t("title")],2),_vm._ssrNode(" "),_vm._ssrNode("<div"+(_vm._ssrClass("card-content",{ 'is-hidden': _vm.isCollapsed }))+" data-v-fe043d22>","</div>",[(!_vm.isCollapsed)?_vm._t("default"):_vm._e()],2),_vm._ssrNode(" "),(!_vm.isCollapsed)?_vm._ssrNode("<footer class=\"card-footer\" data-v-fe043d22>","</footer>",[_vm._t("footer")],2):_vm._e()],2)}
var Panelvue_type_template_id_fe043d22_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./components/Panel.vue?vue&type=template&id=fe043d22&scoped=true&

// CONCATENATED MODULE: ./node_modules/_babel-loader@8.1.0@babel-loader/lib??ref--2-0!./node_modules/_vue-loader@15.9.3@vue-loader/lib??vue-loader-options!./components/Panel.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// import "@/storageShim.js";



fontawesome_svg_core_["library"].add(free_solid_svg_icons_["faAngleUp"], free_solid_svg_icons_["faAngleDown"]);
/* harmony default export */ var Panelvue_type_script_lang_js_ = ({
  components: {// FontAwesomeIcon
  },
  props: {
    id: {
      type: String
    },
    title: {
      type: String,
      required: false
    },
    onCollapsed: {
      type: Function,
      required: false
    }
  },

  data() {
    return {
      isCollapsed: true
    };
  },

  watch: {
    isCollapsed(newValue) {
      if (this.onCollapsed) {
        this.onCollapsed(newValue);
      } // if (this.id) {
      //   this.saveCollapsedState(newValue)
      // }
      // this.$emit('collapseChanged', newValue)

    }

  },

  mounted() {
    // this.isCollapsed = true
    if (this.id) {// const state = this.getCollapseState()
      // if (state) {
      //   this.isCollapsed = state[this.id]
      // }
    }
  },

  methods: {
    getCollapseState() {
      return this.isCollapsed; // return {}
    },

    saveCollapsedState(value) {
      console.log(value);
      const state = this.getCollapseState(); // state[this.id] = value
      // localStorage.setObject('collapsibles', state)
    }

  }
});
// CONCATENATED MODULE: ./components/Panel.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Panelvue_type_script_lang_js_ = (Panelvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/_vue-loader@15.9.3@vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./components/Panel.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(54)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Panelvue_type_script_lang_js_,
  Panelvue_type_template_id_fe043d22_scoped_true_render,
  Panelvue_type_template_id_fe043d22_scoped_true_staticRenderFns,
  false,
  injectStyles,
  "fe043d22",
  "3ff0f32f"
  
)

/* harmony default export */ var Panel = (component.exports);
// CONCATENATED MODULE: ./node_modules/_babel-loader@8.1.0@babel-loader/lib??ref--2-0!./node_modules/_vue-loader@15.9.3@vue-loader/lib??vue-loader-options!./components/TopicList.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





fontawesome_svg_core_["library"].add(free_solid_svg_icons_["faAngleUp"], free_solid_svg_icons_["faAngleDown"]);
/* harmony default export */ var TopicListvue_type_script_lang_js_ = ({
  components: {
    // Panel,
    FontAwesomeIcon: vue_fontawesome_["FontAwesomeIcon"]
  },
  props: {
    topics: {
      type: Array,

      default() {
        return [];
      },

      required: false
    },
    showAd: {
      type: Boolean,
      default: false
    },
    openNewPage: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      blank: '',
      isCollapsed: true,
      isCollapsedArray: []
    };
  },

  mounted() {
    if (this.openNewPage) {
      this.blank = '_blank';
    } // console.log('topics:' + JSON.stringify(this.topics))


    this.isCollapsedArray = new Array(this.topics.length).fill(true);
    console.log(JSON.stringify(this.isCollapsedArray));
  },

  methods: {
    async clickCollapse(index) {
      let topic;

      try {
        topic = await this.$axios.get('/api/topic/' + this.topics[index].topicId);
      } catch (e) {}

      this.$set(this.isCollapsedArray, index, !this.isCollapsedArray[index]); // 改变数组

      this.topics[index].content = topic.content; // console.log('detail:' + JSON.stringify(topic))
    },

    onCollapseBack(state) {
      console.log(state);
    },

    async like(topic) {
      this.isCollapsed = !this.isCollapsed;

      try {
        await this.$axios.post('/api/topic/like/' + topic.topicId);
        topic.liked = true;
        topic.likeCount++;
      } catch (e) {
        if (e.errorCode === 1) {
          this.$toast.info('请登录后点赞！！！', {
            action: {
              text: '去登录',
              onClick: (e, toastObject) => {
                utils["a" /* default */].toSignin();
              }
            }
          });
        } else {
          this.$toast.error(e.message || e);
        }
      }
    }

  }
});
// CONCATENATED MODULE: ./components/TopicList.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_TopicListvue_type_script_lang_js_ = (TopicListvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/TopicList.vue



function TopicList_injectStyles (context) {
  
  var style0 = __webpack_require__(55)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var TopicList_component = Object(componentNormalizer["a" /* default */])(
  components_TopicListvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  TopicList_injectStyles,
  "017625aa",
  "e15a64d0"
  
)

/* harmony default export */ var TopicList = __webpack_exports__["a"] = (TopicList_component.exports);

/***/ }),

/***/ 68:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_15_9_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_PostBtns_vue_vue_type_style_index_0_id_2af0916a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(51);
/* harmony import */ var _node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_15_9_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_PostBtns_vue_vue_type_style_index_0_id_2af0916a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_15_9_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_PostBtns_vue_vue_type_style_index_0_id_2af0916a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_15_9_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_PostBtns_vue_vue_type_style_index_0_id_2af0916a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_15_9_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_PostBtns_vue_vue_type_style_index_0_id_2af0916a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_15_9_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_PostBtns_vue_vue_type_style_index_0_id_2af0916a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 69:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_15_9_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_UserCenterSidebar_vue_vue_type_style_index_0_id_3d739100_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(52);
/* harmony import */ var _node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_15_9_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_UserCenterSidebar_vue_vue_type_style_index_0_id_3d739100_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_15_9_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_UserCenterSidebar_vue_vue_type_style_index_0_id_3d739100_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_15_9_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_UserCenterSidebar_vue_vue_type_style_index_0_id_3d739100_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_15_9_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_UserCenterSidebar_vue_vue_type_style_index_0_id_3d739100_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_15_9_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_UserCenterSidebar_vue_vue_type_style_index_0_id_3d739100_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 70:
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
  
  var style0 = __webpack_require__(68)
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
  
  var style0 = __webpack_require__(69)
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
//# sourceMappingURL=_page.js.map