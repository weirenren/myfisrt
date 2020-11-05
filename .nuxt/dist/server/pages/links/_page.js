exports.ids = [28];
exports.modules = {

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/_vue-loader@15.9.3@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.9.3@vue-loader/lib??vue-loader-options!./pages/links/_page.vue?vue&type=template&id=b4259224&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"main"},[_vm._ssrNode("<div class=\"container\" data-v-b4259224>","</div>",[_vm._ssrNode("<div class=\"main-body\" data-v-b4259224>","</div>",[_vm._ssrNode("<div class=\"widget\" data-v-b4259224>","</div>",[_vm._ssrNode("<div class=\"widget-header\" data-v-b4259224>友情链接</div> "),_vm._ssrNode("<div class=\"widget-content\" data-v-b4259224>","</div>",[_vm._ssrNode("<ul class=\"links\" data-v-b4259224>"+(_vm._ssrList((_vm.linksPage.results),function(link){return ("<li class=\"link\" data-v-b4259224><div class=\"link-logo\" data-v-b4259224>"+((link.logo)?("<img"+(_vm._ssrAttr("src",link.logo))+" data-v-b4259224>"):"<!---->")+" "+((!link.logo)?("<img"+(_vm._ssrAttr("src",__webpack_require__(51)))+" data-v-b4259224>"):"<!---->")+"</div> <div class=\"link-content\" data-v-b4259224><a"+(_vm._ssrAttr("href",link.url))+(_vm._ssrAttr("title",link.title))+" target=\"_blank\" class=\"link-title\" data-v-b4259224>"+_vm._ssrEscape(_vm._s(link.title))+"</a> <p class=\"link-summary\" data-v-b4259224>"+_vm._ssrEscape("\n                  "+_vm._s(link.summary)+"\n                ")+"</p></div></li>")}))+"</ul> "),_c('pagination',{attrs:{"page":_vm.linksPage.page,"url-prefix":"/links/"}})],2)],2)])])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/links/_page.vue?vue&type=template&id=b4259224&scoped=true&

// EXTERNAL MODULE: ./components/Pagination.vue + 4 modules
var Pagination = __webpack_require__(50);

// CONCATENATED MODULE: ./node_modules/_babel-loader@8.1.0@babel-loader/lib??ref--2-0!./node_modules/_vue-loader@15.9.3@vue-loader/lib??vue-loader-options!./pages/links/_page.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    Pagination: Pagination["a" /* default */]
  },

  async asyncData({
    $axios,
    params
  }) {
    const [linksPage] = await Promise.all([$axios.get('/api/link/links', {
      params: {
        page: params.page || 1
      }
    })]);
    return {
      linksPage
    };
  },

  head() {
    return {
      title: this.$siteTitle('好博客'),
      meta: [{
        hid: 'description',
        name: 'description',
        content: this.$siteDescription()
      }, {
        hid: 'keywords',
        name: 'keywords',
        content: this.$siteKeywords()
      }]
    };
  }

});
// CONCATENATED MODULE: ./pages/links/_page.vue?vue&type=script&lang=js&
 /* harmony default export */ var links_pagevue_type_script_lang_js_ = (_pagevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/_vue-loader@15.9.3@vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./pages/links/_page.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  links_pagevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "b4259224",
  "46e944f9"
  
)

/* harmony default export */ var _page = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 40:
/***/ (function(module, exports) {

// Exports
module.exports = {};


/***/ }),

/***/ 49:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_15_9_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_Pagination_vue_vue_type_style_index_0_id_a3f55830_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(40);
/* harmony import */ var _node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_15_9_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_Pagination_vue_vue_type_style_index_0_id_a3f55830_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_15_9_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_Pagination_vue_vue_type_style_index_0_id_a3f55830_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_15_9_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_Pagination_vue_vue_type_style_index_0_id_a3f55830_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_15_9_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_Pagination_vue_vue_type_style_index_0_id_a3f55830_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_15_9_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_Pagination_vue_vue_type_style_index_0_id_a3f55830_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 50:
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
  
  var style0 = __webpack_require__(49)
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
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/net.1e01d6d.png";

/***/ })

};;
//# sourceMappingURL=_page.js.map