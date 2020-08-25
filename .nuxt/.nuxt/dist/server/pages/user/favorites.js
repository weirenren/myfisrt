exports.ids = [59];
exports.modules = {

/***/ 125:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_15_9_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_favorites_vue_vue_type_style_index_0_id_dcf44f9a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(90);
/* harmony import */ var _node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_15_9_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_favorites_vue_vue_type_style_index_0_id_dcf44f9a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_15_9_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_favorites_vue_vue_type_style_index_0_id_dcf44f9a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_15_9_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_favorites_vue_vue_type_style_index_0_id_dcf44f9a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_15_9_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_favorites_vue_vue_type_style_index_0_id_dcf44f9a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_15_9_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_favorites_vue_vue_type_style_index_0_id_dcf44f9a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 166:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/_vue-loader@15.9.3@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.9.3@vue-loader/lib??vue-loader-options!./pages/user/favorites.vue?vue&type=template&id=dcf44f9a&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"main"},[_vm._ssrNode("<div class=\"container main-container is-white left-main\" data-v-dcf44f9a>","</div>",[_vm._ssrNode("<div class=\"left-container\" data-v-dcf44f9a><div class=\"widget\" data-v-dcf44f9a><div class=\"widget-header\" data-v-dcf44f9a><nav class=\"breadcrumb\" data-v-dcf44f9a><ul data-v-dcf44f9a><li data-v-dcf44f9a><a href=\"/\" data-v-dcf44f9a>首页</a></li> <li data-v-dcf44f9a><a"+(_vm._ssrAttr("href",'/user/' + _vm.currentUser.id))+" data-v-dcf44f9a>"+_vm._ssrEscape(_vm._s(_vm.currentUser.nickname))+"</a></li> <li class=\"is-active\" data-v-dcf44f9a><a href=\"#\" aria-current=\"page\" data-v-dcf44f9a>收藏列表</a></li></ul></nav></div> <div class=\"widget-content\" data-v-dcf44f9a>"+((_vm.favorites && _vm.favorites.length)?("<ul class=\"article-list\" data-v-dcf44f9a>"+(_vm._ssrList((_vm.favorites),function(favorite){return ("<li data-v-dcf44f9a>"+((favorite.deleted)?("<article class=\"article-item\" data-v-dcf44f9a><div class=\"article-summary\" data-v-dcf44f9a>\n                  收藏内容失效!!!\n                </div></article>"):("<article class=\"article-item\" data-v-dcf44f9a><div class=\"article-title\" data-v-dcf44f9a><a"+(_vm._ssrAttr("href",favorite.url))+" data-v-dcf44f9a>"+_vm._ssrEscape(_vm._s(favorite.title))+"</a></div> <div class=\"article-summary\" data-v-dcf44f9a>"+_vm._ssrEscape("\n                  "+_vm._s(favorite.content)+"\n                ")+"</div> <div class=\"article-meta\" data-v-dcf44f9a><span class=\"article-meta-item\" data-v-dcf44f9a><a"+(_vm._ssrAttr("href",'/user/' + favorite.user.id))+" data-v-dcf44f9a>"+_vm._ssrEscape(_vm._s(favorite.user.nickname))+"</a></span> <span class=\"article-meta-item\" data-v-dcf44f9a><time data-v-dcf44f9a>"+_vm._ssrEscape(_vm._s(_vm._f("prettyDate")(favorite.createTime)))+"</time></span></div></article>"))+"</li>")}))+" "+((_vm.hasMore)?("<li class=\"more\" data-v-dcf44f9a><a data-v-dcf44f9a>查看更多&gt;&gt;</a></li>"):"<!---->")+"</ul>"):"<!---->")+"</div></div></div> "),_c('user-center-sidebar',{attrs:{"user":_vm.currentUser}})],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/user/favorites.vue?vue&type=template&id=dcf44f9a&scoped=true&

// EXTERNAL MODULE: ./components/UserCenterSidebar.vue + 9 modules
var UserCenterSidebar = __webpack_require__(64);

// CONCATENATED MODULE: ./node_modules/_babel-loader@8.1.0@babel-loader/lib??ref--2-0!./node_modules/_vue-loader@15.9.3@vue-loader/lib??vue-loader-options!./pages/user/favorites.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var favoritesvue_type_script_lang_js_ = ({
  middleware: 'authenticated',
  components: {
    UserCenterSidebar: UserCenterSidebar["a" /* default */]
  },

  async asyncData({
    $axios,
    params
  }) {},

  data() {
    return {
      favorites: [],
      cursor: 0,
      hasMore: true
    };
  },

  computed: {
    currentUser() {
      return this.$store.state.user.current;
    }

  },

  mounted() {
    this.list();
  },

  methods: {
    async list() {
      const ret = await this.$axios.get('/api/user/favorites', {
        params: {
          cursor: this.cursor
        }
      });

      if (ret.results && ret.results.length) {
        this.favorites = this.favorites.concat(ret.results);
      } else {
        this.hasMore = false;
      }

      this.cursor = ret.cursor;
    }

  }
});
// CONCATENATED MODULE: ./pages/user/favorites.vue?vue&type=script&lang=js&
 /* harmony default export */ var user_favoritesvue_type_script_lang_js_ = (favoritesvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/_vue-loader@15.9.3@vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./pages/user/favorites.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(125)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  user_favoritesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "dcf44f9a",
  "1aa88cc2"
  
)

/* harmony default export */ var favorites = __webpack_exports__["default"] = (component.exports);

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

/***/ 62:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_15_9_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_PostBtns_vue_vue_type_style_index_0_id_2af0916a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(46);
/* harmony import */ var _node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_15_9_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_PostBtns_vue_vue_type_style_index_0_id_2af0916a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_15_9_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_PostBtns_vue_vue_type_style_index_0_id_2af0916a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_15_9_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_PostBtns_vue_vue_type_style_index_0_id_2af0916a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_15_9_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_PostBtns_vue_vue_type_style_index_0_id_2af0916a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_15_9_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_PostBtns_vue_vue_type_style_index_0_id_2af0916a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 63:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_15_9_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_UserCenterSidebar_vue_vue_type_style_index_0_id_3d739100_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(47);
/* harmony import */ var _node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_15_9_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_UserCenterSidebar_vue_vue_type_style_index_0_id_3d739100_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_15_9_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_UserCenterSidebar_vue_vue_type_style_index_0_id_3d739100_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_15_9_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_UserCenterSidebar_vue_vue_type_style_index_0_id_3d739100_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_15_9_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_UserCenterSidebar_vue_vue_type_style_index_0_id_3d739100_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_15_9_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_UserCenterSidebar_vue_vue_type_style_index_0_id_3d739100_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 64:
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
  
  var style0 = __webpack_require__(62)
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
  
  var style0 = __webpack_require__(63)
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

/***/ 90:
/***/ (function(module, exports) {

// Exports
module.exports = {};


/***/ })

};;
//# sourceMappingURL=favorites.js.map