exports.ids = [53];
exports.modules = {

/***/ 215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/_vue-loader@15.9.3@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.9.3@vue-loader/lib??vue-loader-options!./pages/topics/node/recommend.vue?vue&type=template&id=ceb27e64&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"main"},[_vm._ssrNode("<div class=\"container main-container left-main\" data-v-ceb27e64>","</div>",[_vm._ssrNode("<div class=\"left-container\" data-v-ceb27e64>","</div>",[_vm._ssrNode("<div class=\"main-content\" data-v-ceb27e64>","</div>",[_c('topics-nav',{attrs:{"nodes":_vm.nodes,"current-node-id":-1}}),_vm._ssrNode(" "),_c('topic-list',{attrs:{"topics":_vm.topicsPage.results,"show-ad":true}}),_vm._ssrNode(" "),_c('pagination',{attrs:{"page":_vm.topicsPage.page,"url-prefix":"/topics/node/recommend?p="}})],2)]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"right-container\" data-v-ceb27e64>","</div>",[_c('site-notice'),_vm._ssrNode(" "),_c('tweets-widget',{attrs:{"tweets":_vm.newestTweets}}),_vm._ssrNode(" "),_c('score-rank',{attrs:{"score-rank":_vm.scoreRank}}),_vm._ssrNode(" "),_c('friend-links',{attrs:{"links":_vm.links}})],2)],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/topics/node/recommend.vue?vue&type=template&id=ceb27e64&scoped=true&

// EXTERNAL MODULE: ./components/SiteNotice.vue + 4 modules
var SiteNotice = __webpack_require__(53);

// EXTERNAL MODULE: ./components/ScoreRank.vue + 4 modules
var ScoreRank = __webpack_require__(63);

// EXTERNAL MODULE: ./components/FriendLinks.vue + 4 modules
var FriendLinks = __webpack_require__(66);

// EXTERNAL MODULE: ./components/TopicsNav.vue + 4 modules
var TopicsNav = __webpack_require__(64);

// EXTERNAL MODULE: ./components/TopicList.vue + 14 modules
var TopicList = __webpack_require__(55);

// EXTERNAL MODULE: ./components/TweetsWidget.vue + 4 modules
var TweetsWidget = __webpack_require__(67);

// EXTERNAL MODULE: ./components/Pagination.vue + 4 modules
var Pagination = __webpack_require__(54);

// CONCATENATED MODULE: ./node_modules/_babel-loader@8.1.0@babel-loader/lib??ref--2-0!./node_modules/_vue-loader@15.9.3@vue-loader/lib??vue-loader-options!./pages/topics/node/recommend.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//







/* harmony default export */ var recommendvue_type_script_lang_js_ = ({
  components: {
    SiteNotice: SiteNotice["a" /* default */],
    ScoreRank: ScoreRank["a" /* default */],
    FriendLinks: FriendLinks["a" /* default */],
    TopicsNav: TopicsNav["a" /* default */],
    TopicList: TopicList["a" /* default */],
    TweetsWidget: TweetsWidget["a" /* default */],
    Pagination: Pagination["a" /* default */]
  },

  async asyncData({
    $axios,
    query
  }) {
    try {
      const [nodes, topicsPage, scoreRank, links, newestTweets] = await Promise.all([$axios.get('/api/topic/nodes'), $axios.get('/api/topic/recommend/topics', {
        params: {
          page: query.p || 1
        }
      }), $axios.get('/api/user/score/rank'), $axios.get('/api/link/toplinks'), $axios.get('/api/tweet/newest')]);
      return {
        nodes,
        topicsPage,
        scoreRank,
        links,
        newestTweets
      };
    } catch (e) {
      console.error(e);
    }
  },

  methods: {
    twitterCreated(data) {
      if (this.topicsPage) {
        if (this.topicsPage.results) {
          this.topicsPage.results.unshift(data);
        } else {
          this.topicsPage.results = [data];
        }
      }
    }

  },

  head() {
    return {
      title: this.$siteTitle('热门话题'),
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
// CONCATENATED MODULE: ./pages/topics/node/recommend.vue?vue&type=script&lang=js&
 /* harmony default export */ var node_recommendvue_type_script_lang_js_ = (recommendvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/_vue-loader@15.9.3@vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./pages/topics/node/recommend.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  node_recommendvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "ceb27e64",
  "6e51605b"
  
)

/* harmony default export */ var recommend = __webpack_exports__["default"] = (component.exports);

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

/***/ 43:
/***/ (function(module, exports) {

// Exports
module.exports = {};


/***/ }),

/***/ 44:
/***/ (function(module, exports) {

// Exports
module.exports = {};


/***/ }),

/***/ 45:
/***/ (function(module, exports) {

// Exports
module.exports = {};


/***/ }),

/***/ 46:
/***/ (function(module, exports) {

// Exports
module.exports = {};


/***/ }),

/***/ 47:
/***/ (function(module, exports) {

// Exports
module.exports = {};


/***/ }),

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_15_9_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_SiteNotice_vue_vue_type_style_index_0_id_05bf6a1c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(41);
/* harmony import */ var _node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_15_9_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_SiteNotice_vue_vue_type_style_index_0_id_05bf6a1c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_15_9_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_SiteNotice_vue_vue_type_style_index_0_id_05bf6a1c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_15_9_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_SiteNotice_vue_vue_type_style_index_0_id_05bf6a1c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_15_9_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_SiteNotice_vue_vue_type_style_index_0_id_05bf6a1c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_15_9_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_SiteNotice_vue_vue_type_style_index_0_id_05bf6a1c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_15_9_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_Pagination_vue_vue_type_style_index_0_id_a3f55830_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(42);
/* harmony import */ var _node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_15_9_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_Pagination_vue_vue_type_style_index_0_id_a3f55830_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_15_9_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_Pagination_vue_vue_type_style_index_0_id_a3f55830_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_15_9_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_Pagination_vue_vue_type_style_index_0_id_a3f55830_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_15_9_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_Pagination_vue_vue_type_style_index_0_id_a3f55830_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_15_9_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_Pagination_vue_vue_type_style_index_0_id_a3f55830_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/_vue-loader@15.9.3@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.9.3@vue-loader/lib??vue-loader-options!./components/SiteNotice.vue?vue&type=template&id=05bf6a1c&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.config.siteNotification)?_c('div',{staticClass:"widget"},[_vm._ssrNode("<div class=\"widget-header\" data-v-05bf6a1c>公告</div> <div class=\"widget-content content notice-content\" data-v-05bf6a1c><p data-v-05bf6a1c>"+(_vm._s(_vm.config.siteNotification))+"</p></div>")]):_vm._e()}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/SiteNotice.vue?vue&type=template&id=05bf6a1c&scoped=true&

// CONCATENATED MODULE: ./node_modules/_babel-loader@8.1.0@babel-loader/lib??ref--2-0!./node_modules/_vue-loader@15.9.3@vue-loader/lib??vue-loader-options!./components/SiteNotice.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
/* harmony default export */ var SiteNoticevue_type_script_lang_js_ = ({
  computed: {
    config() {
      return this.$store.state.config.config;
    }

  }
});
// CONCATENATED MODULE: ./components/SiteNotice.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_SiteNoticevue_type_script_lang_js_ = (SiteNoticevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/_vue-loader@15.9.3@vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./components/SiteNotice.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(50)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_SiteNoticevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "05bf6a1c",
  "34323764"
  
)

/* harmony default export */ var SiteNotice = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 54:
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
  
  var style0 = __webpack_require__(52)
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

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/_vue-loader@15.9.3@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.9.3@vue-loader/lib??vue-loader-options!./components/TopicList.vue?vue&type=template&id=723a838b&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('ul',{staticClass:"topic-list topic-wrap"},_vm._l((_vm.topics),function(topic,index){return _vm._ssrNode("<li"+(_vm._ssrAttr("index",index))+" class=\"topic-item\" data-v-723a838b>","</li>",[_vm._ssrNode("<article itemscope=\"itemscope\" itemtype=\"http://schema.org/BlogPosting\" data-v-723a838b>","</article>",[_vm._ssrNode("<div class=\"topic-header\" data-v-723a838b>","</div>",[_vm._ssrNode("<div class=\"topic-header-left\" data-v-723a838b>"+((topic.user.id === -1)?("<a data-v-723a838b><img alt=\"90社区\""+(_vm._ssrAttr("src",__webpack_require__(57)))+" class=\"avatar\" data-v-723a838b></a>"):("<a"+(_vm._ssrAttr("href",'/user/' + topic.user.id))+(_vm._ssrAttr("title",topic.user.nickname))+" data-v-723a838b><img"+(_vm._ssrAttr("src",topic.user.smallAvatar))+" class=\"avatar\" data-v-723a838b></a>"))+"</div> "),_vm._ssrNode("<div class=\"topic-header-center\" data-v-723a838b>","</div>",[_vm._ssrNode("<h1 itemprop=\"headline\" class=\"topic-title\" data-v-723a838b>"+((topic.node && topic.node.nodeId === 2)?("<a"+(_vm._ssrAttr("target",_vm.blank))+(_vm._ssrAttr("href",'/rent/' + topic.topicId))+(_vm._ssrAttr("title",topic.title))+" data-v-723a838b>"+_vm._ssrEscape(_vm._s(topic.title))+"</a>"):(topic.node && topic.node.nodeId === 1)?("<a"+(_vm._ssrAttr("target",_vm.blank))+(_vm._ssrAttr("href",'/love/' + topic.topicId))+(_vm._ssrAttr("title",topic.title))+" data-v-723a838b>"+_vm._ssrEscape(_vm._s(topic.title))+"</a>"):("<a"+(_vm._ssrAttr("target",_vm.blank))+(_vm._ssrAttr("href",'/topic/' + topic.topicId))+(_vm._ssrAttr("title",topic.title))+" data-v-723a838b>"+_vm._ssrEscape(_vm._s(topic.title))+"</a>"))+" <span"+(_vm._ssrClass(null,topic.topType !== 0 ? 'text-top' : ''))+" data-v-723a838b>"+_vm._ssrEscape(_vm._s(_vm.getTopText(topic)))+"</span></h1> "),_vm._ssrNode("<div class=\"topic-meta\" data-v-723a838b>","</div>",[_vm._ssrNode("<span class=\"meta-item\" data-v-723a838b>","</span>",[_c('SectionTime',{attrs:{"create-time":topic.createTime,"hide":topic.node && topic.node.nodeId === 1}})],1),_vm._ssrNode(" <span class=\"meta-item\" data-v-723a838b></span> "),_vm._ssrNode("<span class=\"meta-item\" data-v-723a838b>","</span>",[_vm._ssrNode((_vm._ssrList((topic.tags),function(tag){return ("<span class=\"tag\" data-v-723a838b><a data-v-723a838b>"+_vm._ssrEscape(_vm._s(tag.tagName))+"</a></span>")}))+" "),(topic.node && topic.node.nodeId === 2)?_vm._ssrNode("<span"+(_vm._ssrAttr("target",_vm.blank))+" data-v-723a838b>","</span>",[_vm._ssrNode("<a class=\"tag\" data-v-723a838b>","</a>",[_vm._ssrNode("展开 \n                  "),(!_vm.isCollapsedArray[index])?_c('font-awesome-icon',{attrs:{"icon":"angle-down"}}):_vm._e(),_vm._ssrNode(" "),(_vm.isCollapsedArray[index])?_c('font-awesome-icon',{attrs:{"icon":"angle-up"}}):_vm._e()],2)]):_vm._e()],2)],2)],2),_vm._ssrNode(" <div class=\"topic-header-right\" data-v-723a838b><div class=\"like\" data-v-723a838b><span"+(_vm._ssrClass("like-btn",{ liked: topic.liked }))+" data-v-723a838b><i class=\"iconfont icon-like\" data-v-723a838b></i></span> "+((topic.likeCount)?("<span class=\"like-count\" data-v-723a838b>"+_vm._ssrEscape(_vm._s(topic.likeCount))+"</span>"):"<!---->")+"</div> <span class=\"count\" data-v-723a838b>"+_vm._ssrEscape(_vm._s(topic.commentCount)+" / "+_vm._s(topic.viewCount))+"</span></div>")],2),_vm._ssrNode(" <div"+(_vm._ssrClass("card-content",{ 'is-hidden': _vm.isCollapsedArray[index] }))+" data-v-723a838b><div style=\" font-size: 13px;\\n              color: black;\" data-v-723a838b>"+(_vm._s(topic.content))+"</div> "+((topic.imageList && topic.imageList.length > 0)?("<a"+(_vm._ssrAttr("target",_vm.blank))+(_vm._ssrAttr("href",'/rent/' + topic.topicId))+" style=\" font-size: 12px;\\n              color: red;text-decoration:underline;\" data-v-723a838b>\n          (有图，点击查看)\n        </a>"):("<div style=\" font-size: 12px;\\n              color: red;\" data-v-723a838b>\n          (无图）\n        </div>"))+"</div>")],2)])}),0)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/TopicList.vue?vue&type=template&id=723a838b&scoped=true&

// EXTERNAL MODULE: external "@fortawesome/fontawesome-svg-core"
var fontawesome_svg_core_ = __webpack_require__(30);

// EXTERNAL MODULE: external "@fortawesome/vue-fontawesome"
var vue_fontawesome_ = __webpack_require__(31);

// EXTERNAL MODULE: external "@fortawesome/free-solid-svg-icons"
var free_solid_svg_icons_ = __webpack_require__(32);

// EXTERNAL MODULE: ./common/utils.js
var utils = __webpack_require__(40);

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
  
  var style0 = __webpack_require__(58)
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
// CONCATENATED MODULE: ./node_modules/_vue-loader@15.9.3@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.9.3@vue-loader/lib??vue-loader-options!./components/SectionTime.vue?vue&type=template&id=22aab805&scoped=true&
var SectionTimevue_type_template_id_22aab805_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('span',{staticClass:"comment-time"},[_vm._ssrNode(((!_vm.hide)?("<time"+(_vm._ssrAttr("datetime",_vm._f("formatDate")(_vm.createTime,'yyyy-MM-ddTHH:mm:ss')))+" itemprop=\"datePublished\" data-v-22aab805>"+_vm._ssrEscape(_vm._s(_vm._f("prettyDate")(_vm.createTime)))+"</time>"):("<span data-v-22aab805>"+_vm._ssrEscape("\n    "+_vm._s(_vm.prettyDate(_vm.createTime))+"\n  ")+"</span>")))])}
var SectionTimevue_type_template_id_22aab805_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./components/SectionTime.vue?vue&type=template&id=22aab805&scoped=true&

// CONCATENATED MODULE: ./node_modules/_babel-loader@8.1.0@babel-loader/lib??ref--2-0!./node_modules/_vue-loader@15.9.3@vue-loader/lib??vue-loader-options!./components/SectionTime.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var SectionTimevue_type_script_lang_js_ = ({
  components: {// FontAwesomeIcon
  },
  props: {
    createTime: {
      type: Number
    },
    hide: {
      type: Boolean,
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
    prettyDate(timestamp) {
      const minute = 1000 * 60;
      const hour = minute * 60;
      const day = hour * 24;
      const month = day * 30;
      const year = month * 12;
      const diffValue = new Date().getTime() - timestamp;

      if (diffValue / minute < 1) {
        return '刚刚';
      } else if (diffValue / minute < 60) {
        return parseInt(diffValue / minute) + '分钟前';
      } else if (diffValue / hour <= 24) {
        return parseInt(diffValue / hour) + '小时前';
      } else if (diffValue / day <= 7) {
        // return parseInt(diffValue / day) + '天前'
        return '一周以内';
      } else if (diffValue / day <= 30) {
        return '一个月以内'; // return filters.formatDate(timestamp, 'yyyy-MM-dd HH:mm:ss')
      } else if (diffValue / day <= 180) {
        return '半年以内'; // return filters.formatDate(timestamp, 'yyyy-MM-dd HH:mm:ss')
      } else if (diffValue / day <= 360) {
        // return parseInt(diffValue / day) + '天前'
        return '一年以内';
      }

      return '一年以前';
    }

  }
});
// CONCATENATED MODULE: ./components/SectionTime.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_SectionTimevue_type_script_lang_js_ = (SectionTimevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/SectionTime.vue



function SectionTime_injectStyles (context) {
  
  
}

/* normalize component */

var SectionTime_component = Object(componentNormalizer["a" /* default */])(
  components_SectionTimevue_type_script_lang_js_,
  SectionTimevue_type_template_id_22aab805_scoped_true_render,
  SectionTimevue_type_template_id_22aab805_scoped_true_staticRenderFns,
  false,
  SectionTime_injectStyles,
  "22aab805",
  "6a50e33d"
  
)

/* harmony default export */ var SectionTime = (SectionTime_component.exports);
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    FontAwesomeIcon: vue_fontawesome_["FontAwesomeIcon"],
    SectionTime: SectionTime
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

  watch: {
    topics(newValue, oldValue) {
      if (this.topics && this.topics.length !== undefined) {
        this.isCollapsedArray = new Array(this.topics.length).fill(true);
      }
    }

  },

  mounted() {
    if (this.openNewPage) {
      this.blank = '_blank';
    }

    if (this.topics && this.topics.length > 0) {
      this.isCollapsedArray = new Array(this.topics.length).fill(true);
    } // console.log(JSON.stringify(this.isCollapsedArray))

  },

  methods: {
    async clickCollapse(index) {
      if (this.topics[index].content !== undefined) {} else {
        try {
          const topic = await this.$axios.get('/api/topic/' + this.topics[index].topicId);
          this.topics[index].content = topic.content;
          this.topics[index].imageList = topic.imageList;
        } catch (e) {}
      }

      this.$set(this.isCollapsedArray, index, !this.isCollapsedArray[index]); // 改变数组
      // console.log('detail:' + JSON.stringify(topic))
    },

    getTopText(topic) {
      const topType = topic.topType ? topic.topType : 0;
      return utils["a" /* default */].getTopText(topType);
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
  
  var style0 = __webpack_require__(59)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var TopicList_component = Object(componentNormalizer["a" /* default */])(
  components_TopicListvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  TopicList_injectStyles,
  "723a838b",
  "e15a64d0"
  
)

/* harmony default export */ var TopicList = __webpack_exports__["a"] = (TopicList_component.exports);

/***/ }),

/***/ 56:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/net.1e01d6d.png";

/***/ }),

/***/ 57:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/douban.4b75e01.png";

/***/ }),

/***/ 58:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_15_9_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_Panel_vue_vue_type_style_index_0_id_fe043d22_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(43);
/* harmony import */ var _node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_15_9_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_Panel_vue_vue_type_style_index_0_id_fe043d22_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_15_9_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_Panel_vue_vue_type_style_index_0_id_fe043d22_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_15_9_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_Panel_vue_vue_type_style_index_0_id_fe043d22_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_15_9_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_Panel_vue_vue_type_style_index_0_id_fe043d22_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_15_9_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_Panel_vue_vue_type_style_index_0_id_fe043d22_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 59:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_15_9_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_TopicList_vue_vue_type_style_index_0_id_723a838b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(44);
/* harmony import */ var _node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_15_9_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_TopicList_vue_vue_type_style_index_0_id_723a838b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_15_9_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_TopicList_vue_vue_type_style_index_0_id_723a838b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_15_9_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_TopicList_vue_vue_type_style_index_0_id_723a838b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_15_9_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_TopicList_vue_vue_type_style_index_0_id_723a838b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_15_9_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_TopicList_vue_vue_type_style_index_0_id_723a838b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 60:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_15_9_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_ScoreRank_vue_vue_type_style_index_0_id_1a6c8d5c_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(45);
/* harmony import */ var _node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_15_9_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_ScoreRank_vue_vue_type_style_index_0_id_1a6c8d5c_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_15_9_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_ScoreRank_vue_vue_type_style_index_0_id_1a6c8d5c_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_15_9_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_ScoreRank_vue_vue_type_style_index_0_id_1a6c8d5c_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_15_9_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_ScoreRank_vue_vue_type_style_index_0_id_1a6c8d5c_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_15_9_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_ScoreRank_vue_vue_type_style_index_0_id_1a6c8d5c_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 61:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_15_9_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_TopicsNav_vue_vue_type_style_index_0_id_1f0f6714_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(46);
/* harmony import */ var _node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_15_9_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_TopicsNav_vue_vue_type_style_index_0_id_1f0f6714_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_15_9_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_TopicsNav_vue_vue_type_style_index_0_id_1f0f6714_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_15_9_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_TopicsNav_vue_vue_type_style_index_0_id_1f0f6714_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_15_9_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_TopicsNav_vue_vue_type_style_index_0_id_1f0f6714_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_15_9_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_TopicsNav_vue_vue_type_style_index_0_id_1f0f6714_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 63:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/_vue-loader@15.9.3@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.9.3@vue-loader/lib??vue-loader-options!./components/ScoreRank.vue?vue&type=template&id=1a6c8d5c&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.scoreRank && _vm.scoreRank.length)?_c('div',{staticClass:"widget"},[_vm._ssrNode("<div class=\"widget-header\" data-v-1a6c8d5c><span class=\"widget-title\" data-v-1a6c8d5c>积分排行</span></div> <div class=\"widget-content\" data-v-1a6c8d5c><ul class=\"score-rank\" data-v-1a6c8d5c>"+(_vm._ssrList((_vm.scoreRank),function(user){return ("<li data-v-1a6c8d5c><a"+(_vm._ssrAttr("href",'/user/' + user.id))+" class=\"score-user-avatar\" data-v-1a6c8d5c><img"+(_vm._ssrAttr("src",user.smallAvatar))+" class=\"avatar size-30\" data-v-1a6c8d5c></a> <div class=\"score-user-info\" data-v-1a6c8d5c><a"+(_vm._ssrAttr("href",'/user/' + user.id))+" data-v-1a6c8d5c>"+_vm._ssrEscape(_vm._s(user.nickname))+"</a> <p data-v-1a6c8d5c>"+_vm._ssrEscape(_vm._s(user.topicCount)+" 帖子 • "+_vm._s(user.commentCount)+" 评论")+"</p></div> <div class=\"score-rank-info\" data-v-1a6c8d5c><span class=\"score-user-score\" data-v-1a6c8d5c><i class=\"iconfont icon-score\" data-v-1a6c8d5c></i><span data-v-1a6c8d5c>"+_vm._ssrEscape(_vm._s(user.score))+"</span></span></div></li>")}))+"</ul></div>")]):_vm._e()}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/ScoreRank.vue?vue&type=template&id=1a6c8d5c&scoped=true&

// CONCATENATED MODULE: ./node_modules/_babel-loader@8.1.0@babel-loader/lib??ref--2-0!./node_modules/_vue-loader@15.9.3@vue-loader/lib??vue-loader-options!./components/ScoreRank.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var ScoreRankvue_type_script_lang_js_ = ({
  name: 'ScoreRank',
  props: {
    scoreRank: {
      type: Array,

      default() {
        return null;
      }

    }
  }
});
// CONCATENATED MODULE: ./components/ScoreRank.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_ScoreRankvue_type_script_lang_js_ = (ScoreRankvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/_vue-loader@15.9.3@vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./components/ScoreRank.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(60)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_ScoreRankvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "1a6c8d5c",
  "2dc35089"
  
)

/* harmony default export */ var ScoreRank = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 64:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/_vue-loader@15.9.3@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.9.3@vue-loader/lib??vue-loader-options!./components/TopicsNav.vue?vue&type=template&id=1f0f6714&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"topics-nav"},[_vm._ssrNode("<ul class=\"topics-nav-list\" data-v-1f0f6714><li"+(_vm._ssrClass("topics-nav-item",{ active: _vm.currentNodeId === 0 }))+" data-v-1f0f6714><a href=\"/topics/node/newest\" data-v-1f0f6714>最新</a></li> <li"+(_vm._ssrClass("topics-nav-item",{ active: _vm.currentNodeId === -1 }))+" data-v-1f0f6714><a href=\"/topics/node/recommend\" data-v-1f0f6714>推荐</a></li> "+(_vm._ssrList((_vm.nodes),function(node){return ("<li"+(_vm._ssrClass("topics-nav-item",{ active: _vm.currentNodeId == node.nodeId }))+" data-v-1f0f6714>"+((node.nodeId !== 1 && node.nodeId !== 2)?("<div data-v-1f0f6714><a"+(_vm._ssrAttr("href",'/topics/node/' + node.nodeId))+" data-v-1f0f6714>"+_vm._ssrEscape(_vm._s(node.name))+"</a></div>"):"<!---->")+"</li>")}))+"</ul>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/TopicsNav.vue?vue&type=template&id=1f0f6714&scoped=true&

// CONCATENATED MODULE: ./node_modules/_babel-loader@8.1.0@babel-loader/lib??ref--2-0!./node_modules/_vue-loader@15.9.3@vue-loader/lib??vue-loader-options!./components/TopicsNav.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var TopicsNavvue_type_script_lang_js_ = ({
  props: {
    currentNodeId: {
      type: Number,
      default: 1
    },
    nodes: {
      type: Array,

      default() {
        return [];
      }

    }
  },

  mounted() {// console.log('nodes:' + JSON.stringify(this.nodes))
  }

});
// CONCATENATED MODULE: ./components/TopicsNav.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_TopicsNavvue_type_script_lang_js_ = (TopicsNavvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/_vue-loader@15.9.3@vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./components/TopicsNav.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(61)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_TopicsNavvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "1f0f6714",
  "a08550ec"
  
)

/* harmony default export */ var TopicsNav = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 65:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_15_9_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_TweetsWidget_vue_vue_type_style_index_0_id_3c588afe_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(47);
/* harmony import */ var _node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_15_9_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_TweetsWidget_vue_vue_type_style_index_0_id_3c588afe_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_15_9_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_TweetsWidget_vue_vue_type_style_index_0_id_3c588afe_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_15_9_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_TweetsWidget_vue_vue_type_style_index_0_id_3c588afe_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_15_9_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_TweetsWidget_vue_vue_type_style_index_0_id_3c588afe_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_15_9_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_TweetsWidget_vue_vue_type_style_index_0_id_3c588afe_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 66:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/_vue-loader@15.9.3@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.9.3@vue-loader/lib??vue-loader-options!./components/FriendLinks.vue?vue&type=template&id=38bbb6a6&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.links && _vm.links.length)?_c('div',{staticClass:"widget"},[_vm._ssrNode("<div class=\"widget-header\" data-v-38bbb6a6><span data-v-38bbb6a6>友情链接</span> <span class=\"slot\" data-v-38bbb6a6><a href=\"/links\" data-v-38bbb6a6>查看更多&gt;&gt;</a></span></div> <div class=\"widget-content\" data-v-38bbb6a6><ul class=\"links\" data-v-38bbb6a6>"+(_vm._ssrList((_vm.links),function(link){return ("<li class=\"link\" data-v-38bbb6a6><div class=\"link-logo\" data-v-38bbb6a6>"+((link.logo)?("<img"+(_vm._ssrAttr("src",link.logo))+" data-v-38bbb6a6>"):"<!---->")+" "+((!link.logo)?("<img"+(_vm._ssrAttr("src",__webpack_require__(56)))+" data-v-38bbb6a6>"):"<!---->")+"</div> <div class=\"link-content\" data-v-38bbb6a6><a"+(_vm._ssrAttr("href",link.url))+(_vm._ssrAttr("title",link.title))+" target=\"_blank\" class=\"link-title\" data-v-38bbb6a6>"+_vm._ssrEscape(_vm._s(link.title))+"</a> <p class=\"link-summary\" data-v-38bbb6a6>"+_vm._ssrEscape("\n            "+_vm._s(link.summary)+"\n          ")+"</p></div></li>")}))+"</ul></div>")]):_vm._e()}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/FriendLinks.vue?vue&type=template&id=38bbb6a6&scoped=true&

// CONCATENATED MODULE: ./node_modules/_babel-loader@8.1.0@babel-loader/lib??ref--2-0!./node_modules/_vue-loader@15.9.3@vue-loader/lib??vue-loader-options!./components/FriendLinks.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var FriendLinksvue_type_script_lang_js_ = ({
  name: 'FriendLinks',
  props: {
    links: {
      type: Array,

      default() {
        return null;
      }

    }
  }
});
// CONCATENATED MODULE: ./components/FriendLinks.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_FriendLinksvue_type_script_lang_js_ = (FriendLinksvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/_vue-loader@15.9.3@vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./components/FriendLinks.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_FriendLinksvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "38bbb6a6",
  "8cb4f9b4"
  
)

/* harmony default export */ var FriendLinks = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 67:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/_vue-loader@15.9.3@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.9.3@vue-loader/lib??vue-loader-options!./components/TweetsWidget.vue?vue&type=template&id=3c588afe&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.tweets && _vm.tweets.length)?_c('div',{staticClass:"widget"},[_vm._ssrNode("<div class=\"widget-header\" data-v-3c588afe>\n    最新动态<span class=\"slot\" data-v-3c588afe><a href=\"/tweets\" data-v-3c588afe>更多</a></span></div> <div class=\"widget-content\" data-v-3c588afe><ul class=\"tweets-widget\" data-v-3c588afe>"+(_vm._ssrList((_vm.tweets),function(tweet){return ("<li data-v-3c588afe><a"+(_vm._ssrAttr("href",'/tweet/' + tweet.tweetId))+" class=\"tweet-content\" data-v-3c588afe>"+_vm._ssrEscape("\n          "+_vm._s(tweet.content)+"\n          ")+((tweet.imageList && tweet.imageList.length)?("<i class=\"iconfont icon-image\" data-v-3c588afe></i>"):"<!---->")+"</a> <div class=\"tweet-metas\" data-v-3c588afe>"+_vm._ssrEscape("\n          喜欢 "+_vm._s(tweet.likeCount)+"    评论\n          "+_vm._s(tweet.commentCount)+"\n        ")+"</div></li>")}))+"</ul></div>")]):_vm._e()}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/TweetsWidget.vue?vue&type=template&id=3c588afe&scoped=true&

// CONCATENATED MODULE: ./node_modules/_babel-loader@8.1.0@babel-loader/lib??ref--2-0!./node_modules/_vue-loader@15.9.3@vue-loader/lib??vue-loader-options!./components/TweetsWidget.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var TweetsWidgetvue_type_script_lang_js_ = ({
  props: {
    tweets: {
      type: Array,

      default() {
        return [];
      },

      required: false
    }
  }
});
// CONCATENATED MODULE: ./components/TweetsWidget.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_TweetsWidgetvue_type_script_lang_js_ = (TweetsWidgetvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/_vue-loader@15.9.3@vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./components/TweetsWidget.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(65)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_TweetsWidgetvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "3c588afe",
  "7b0058ab"
  
)

/* harmony default export */ var TweetsWidget = __webpack_exports__["a"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=recommend.js.map