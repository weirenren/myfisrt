exports.ids = [57];
exports.modules = {

/***/ 234:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/_vue-loader@15.9.3@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.9.3@vue-loader/lib??vue-loader-options!./pages/user/_userId/articles/_page.vue?vue&type=template&id=65f2b9e6&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"main"},[_vm._ssrNode("<div class=\"container main-container is-white left-main\" data-v-65f2b9e6>","</div>",[_vm._ssrNode("<div class=\"left-container\" data-v-65f2b9e6>","</div>",[_vm._ssrNode("<nav class=\"breadcrumb my-breadcrumb\" data-v-65f2b9e6><ul data-v-65f2b9e6><li data-v-65f2b9e6><a href=\"article\" data-v-65f2b9e6>首页</a></li> <li data-v-65f2b9e6><a"+(_vm._ssrAttr("href",'/user/' + _vm.user.id + '?tab=articles'))+" data-v-65f2b9e6>"+_vm._ssrEscape(_vm._s(_vm.user.nickname))+"</a></li> <li class=\"is-active\" data-v-65f2b9e6><a href=\"#\" aria-current=\"page\" data-v-65f2b9e6>文章列表</a></li></ul></nav> "),_c('article-list',{attrs:{"articles":_vm.articlesPage.results}}),_vm._ssrNode(" "),_c('pagination',{attrs:{"page":_vm.articlesPage.page,"url-prefix":'/user/' + _vm.user.id + '/articles/'}})],2),_vm._ssrNode(" "),_c('user-center-sidebar',{attrs:{"user":_vm.user}})],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/user/_userId/articles/_page.vue?vue&type=template&id=65f2b9e6&scoped=true&

// EXTERNAL MODULE: ./components/ArticleList.vue + 4 modules
var ArticleList = __webpack_require__(86);

// EXTERNAL MODULE: ./components/Pagination.vue + 4 modules
var Pagination = __webpack_require__(52);

// EXTERNAL MODULE: ./components/UserCenterSidebar.vue + 9 modules
var UserCenterSidebar = __webpack_require__(74);

// CONCATENATED MODULE: ./node_modules/_babel-loader@8.1.0@babel-loader/lib??ref--2-0!./node_modules/_vue-loader@15.9.3@vue-loader/lib??vue-loader-options!./pages/user/_userId/articles/_page.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    ArticleList: ArticleList["a" /* default */],
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

    const [articlesPage] = await Promise.all([$axios.get('/api/article/user/articles', {
      params: {
        userId: params.userId,
        page: params.page
      }
    })]);
    return {
      user,
      articlesPage
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
      title: this.$siteTitle(this.user.nickname + ' - 文章')
    };
  }

});
// CONCATENATED MODULE: ./pages/user/_userId/articles/_page.vue?vue&type=script&lang=js&
 /* harmony default export */ var articles_pagevue_type_script_lang_js_ = (_pagevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/_vue-loader@15.9.3@vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./pages/user/_userId/articles/_page.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  articles_pagevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "65f2b9e6",
  "63395c2b"
  
)

/* harmony default export */ var _page = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 42:
/***/ (function(module, exports) {

// Exports
module.exports = {};


/***/ }),

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_15_9_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_Pagination_vue_vue_type_style_index_0_id_a3f55830_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(42);
/* harmony import */ var _node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_15_9_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_Pagination_vue_vue_type_style_index_0_id_a3f55830_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_15_9_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_Pagination_vue_vue_type_style_index_0_id_a3f55830_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_15_9_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_Pagination_vue_vue_type_style_index_0_id_a3f55830_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_15_9_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_Pagination_vue_vue_type_style_index_0_id_a3f55830_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_15_9_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_Pagination_vue_vue_type_style_index_0_id_a3f55830_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 52:
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
  
  var style0 = __webpack_require__(50)
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

/***/ 53:
/***/ (function(module, exports) {

// Exports
module.exports = {};


/***/ }),

/***/ 54:
/***/ (function(module, exports) {

// Exports
module.exports = {};


/***/ }),

/***/ 72:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_15_9_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_PostBtns_vue_vue_type_style_index_0_id_2af0916a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(53);
/* harmony import */ var _node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_15_9_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_PostBtns_vue_vue_type_style_index_0_id_2af0916a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_15_9_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_PostBtns_vue_vue_type_style_index_0_id_2af0916a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_15_9_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_PostBtns_vue_vue_type_style_index_0_id_2af0916a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_15_9_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_PostBtns_vue_vue_type_style_index_0_id_2af0916a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_15_9_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_PostBtns_vue_vue_type_style_index_0_id_2af0916a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 73:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_15_9_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_UserCenterSidebar_vue_vue_type_style_index_0_id_3d739100_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(54);
/* harmony import */ var _node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_15_9_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_UserCenterSidebar_vue_vue_type_style_index_0_id_3d739100_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_15_9_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_UserCenterSidebar_vue_vue_type_style_index_0_id_3d739100_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_15_9_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_UserCenterSidebar_vue_vue_type_style_index_0_id_3d739100_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_15_9_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_UserCenterSidebar_vue_vue_type_style_index_0_id_3d739100_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_15_9_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_UserCenterSidebar_vue_vue_type_style_index_0_id_3d739100_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 74:
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
  
  var style0 = __webpack_require__(72)
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
  
  var style0 = __webpack_require__(73)
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

/***/ }),

/***/ 86:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/_vue-loader@15.9.3@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.9.3@vue-loader/lib??vue-loader-options!./components/ArticleList.vue?vue&type=template&id=3cde4248&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('ul',{staticClass:"article-list"},[_vm._ssrNode((_vm._ssrList((_vm.articles),function(article,index){return ("<li data-v-3cde4248>"+((_vm.showAd && index !== 0 && index % 3 === 0)?("<div data-v-3cde4248></div>"):"<!---->")+" <article itemscope=\"itemscope\" itemtype=\"http://schema.org/BlogPosting\" class=\"article-item\" data-v-3cde4248><h1 itemprop=\"headline\" class=\"article-title\" data-v-3cde4248><a"+(_vm._ssrAttr("href",'/article/' + article.articleId))+" data-v-3cde4248>"+_vm._ssrEscape(_vm._s(article.title))+"</a></h1> <div itemprop=\"description\" class=\"article-summary\" data-v-3cde4248>"+_vm._ssrEscape("\n        "+_vm._s(article.summary)+"\n      ")+"</div> <div class=\"article-meta\" data-v-3cde4248><span class=\"article-meta-item\" data-v-3cde4248>\n          由\n          <a"+(_vm._ssrAttr("href",'/user/' + article.user.id))+" itemprop=\"author\" itemscope=\"itemscope\" itemtype=\"http://schema.org/Person\" class=\"article-author\" data-v-3cde4248><span itemprop=\"name\" data-v-3cde4248>"+_vm._ssrEscape(_vm._s(article.user.nickname))+"</span></a>发布于\n          <time"+(_vm._ssrAttr("datetime",_vm._f("formatDate")(article.createTime,'yyyy-MM-ddTHH:mm:ss')))+" itemprop=\"datePublished\" data-v-3cde4248>"+_vm._ssrEscape(_vm._s(_vm._f("prettyDate")(article.createTime)))+"</time></span> "+((article.tags && article.tags.length > 0)?("<span class=\"article-meta-item\" data-v-3cde4248>"+(_vm._ssrList((article.tags),function(tag){return ("<span class=\"article-tag tag\" data-v-3cde4248><a"+(_vm._ssrAttr("href",'/articles/' + tag.tagId))+" data-v-3cde4248>"+_vm._ssrEscape(_vm._s(tag.tagName))+"</a></span>")}))+"</span>"):"<!---->")+" "+((article.status === 2)?("<span class=\"article-meta-item\" data-v-3cde4248><a href=\"javascript:void(0)\" style=\"cursor: default; text-decoration: none; color: green; font-size: 12px\" data-v-3cde4248><i class=\"iconfont icon-shenhe\" data-v-3cde4248></i> 审核中</a></span>"):"<!---->")+"</div></article></li>")})))])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/ArticleList.vue?vue&type=template&id=3cde4248&scoped=true&

// CONCATENATED MODULE: ./node_modules/_babel-loader@8.1.0@babel-loader/lib??ref--2-0!./node_modules/_vue-loader@15.9.3@vue-loader/lib??vue-loader-options!./components/ArticleList.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var ArticleListvue_type_script_lang_js_ = ({
  props: {
    articles: {
      type: Array,

      default() {
        return [];
      },

      required: false
    },
    showAd: {
      type: Boolean,
      default: false
    }
  }
});
// CONCATENATED MODULE: ./components/ArticleList.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_ArticleListvue_type_script_lang_js_ = (ArticleListvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/_vue-loader@15.9.3@vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./components/ArticleList.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_ArticleListvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "3cde4248",
  "4e9e9d9f"
  
)

/* harmony default export */ var ArticleList = __webpack_exports__["a"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=_page.js.map