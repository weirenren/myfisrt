exports.ids = [20];
exports.modules = {

/***/ 190:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/_vue-loader@15.9.3@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.9.3@vue-loader/lib??vue-loader-options!./pages/article/_id.vue?vue&type=template&id=3550928e&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"main"},[_vm._ssrNode("<div class=\"container main-container left-main size-320\" data-v-3550928e>","</div>",[_vm._ssrNode("<div class=\"left-container\" data-v-3550928e>","</div>",[_vm._ssrNode("<article itemscope=\"itemscope\" itemtype=\"http://schema.org/BlogPosting\" class=\"article-item article-detail\" data-v-3550928e>","</article>",[_vm._ssrNode("<div class=\"main-content\" data-v-3550928e><div class=\"article-header\" data-v-3550928e><h1 itemprop=\"headline\" class=\"article-title\" data-v-3550928e>"+_vm._ssrEscape("\n              "+_vm._s(_vm.article.title)+"\n            ")+"</h1> <div class=\"article-meta\" data-v-3550928e><span class=\"article-meta-item\" data-v-3550928e>\n                由\n                <a"+(_vm._ssrAttr("href",'/user/' + _vm.article.user.id))+" itemprop=\"author\" itemscope=\"itemscope\" itemtype=\"http://schema.org/Person\" class=\"article-author\" data-v-3550928e><span itemprop=\"name\" data-v-3550928e>"+_vm._ssrEscape(_vm._s(_vm.article.user.nickname))+"</span></a>发布于\n                <time"+(_vm._ssrAttr("datetime",_vm._f("formatDate")(_vm.article.createTime,'yyyy-MM-ddTHH:mm:ss')))+" itemprop=\"datePublished\" data-v-3550928e>"+_vm._ssrEscape(_vm._s(_vm._f("prettyDate")(_vm.article.createTime)))+"</time></span> "+((_vm.article.tags && _vm.article.tags.length > 0)?("<span class=\"article-meta-item\" data-v-3550928e>"+(_vm._ssrList((_vm.article.tags),function(tag){return ("<span class=\"article-tag tag\" data-v-3550928e><a"+(_vm._ssrAttr("href",'/articles/' + tag.tagId))+" data-v-3550928e>"+_vm._ssrEscape(_vm._s(tag.tagName))+"</a></span>")}))+"</span>"):"<!---->")+" <div class=\"article-tool\" data-v-3550928e>"+((_vm.hasPermission)?("<span data-v-3550928e><a data-v-3550928e><i class=\"iconfont icon-delete\" data-v-3550928e></i> 删除\n                  </a></span>"):"<!---->")+" "+((_vm.hasPermission)?("<span data-v-3550928e><a"+(_vm._ssrAttr("href",'/article/edit/' + _vm.article.articleId))+" data-v-3550928e><i class=\"iconfont icon-edit\" data-v-3550928e></i> 修改\n                  </a></span>"):"<!---->")+" <span data-v-3550928e><a data-v-3550928e><i class=\"iconfont icon-favorite\" data-v-3550928e></i>"+_vm._ssrEscape(" "+_vm._s(_vm.favorited ? '已收藏' : '收藏')+"\n                  ")+"</a></span> "+((_vm.isPending)?("<span data-v-3550928e><a href=\"javascript:void(0)\" style=\"cursor: default; text-decoration: none\" data-v-3550928e><i class=\"iconfont icon-shenhe\" data-v-3550928e></i> 审核中\n                  </a></span>"):"<!---->")+"</div></div></div> <div class=\"ad\" data-v-3550928e></div> <div itemprop=\"articleBody\" class=\"article-content content\" data-v-3550928e>"+(_vm._s(_vm.article.content))+"</div></div> <div class=\"ad\" data-v-3550928e></div> "),_c('comment',{attrs:{"entity-id":_vm.article.articleId,"comments-page":_vm.commentsPage,"show-ad":true,"entity-type":"article"}})],2)]),_vm._ssrNode(" <div class=\"right-container\" data-v-3550928e>"+((_vm.relatedArticles && _vm.relatedArticles.length)?("<div class=\"widget no-margin\" data-v-3550928e><div class=\"widget-header\" data-v-3550928e>相关文章</div> <div class=\"widget-content article-related\" data-v-3550928e><ul data-v-3550928e>"+(_vm._ssrList((_vm.relatedArticles),function(a){return ("<li data-v-3550928e><a"+(_vm._ssrAttr("href",'/article/' + a.articleId))+(_vm._ssrAttr("title",a.title))+" target=\"_blank\" class=\"article-related-title\" data-v-3550928e>"+_vm._ssrEscape(_vm._s(a.title))+"</a></li>")}))+"</ul></div></div>"):"<!---->")+" "+((_vm.nearlyArticles && _vm.nearlyArticles.length)?("<div class=\"widget\" data-v-3550928e><div class=\"widget-header\" data-v-3550928e>近期文章</div> <div class=\"widget-content article-related\" data-v-3550928e><ul data-v-3550928e>"+(_vm._ssrList((_vm.nearlyArticles),function(a){return ("<li data-v-3550928e><a"+(_vm._ssrAttr("href",'/article/' + a.articleId))+(_vm._ssrAttr("title",a.title))+" target=\"_blank\" class=\"article-related-title\" data-v-3550928e>"+_vm._ssrEscape(_vm._s(a.title))+"</a></li>")}))+"</ul></div></div>"):"<!---->")+"</div>")],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/article/_id.vue?vue&type=template&id=3550928e&scoped=true&

// EXTERNAL MODULE: ./common/utils.js
var utils = __webpack_require__(33);

// EXTERNAL MODULE: ./common/UserHelper.js
var UserHelper = __webpack_require__(8);

// EXTERNAL MODULE: ./components/Comment.vue + 19 modules
var Comment = __webpack_require__(66);

// CONCATENATED MODULE: ./node_modules/_babel-loader@8.1.0@babel-loader/lib??ref--2-0!./node_modules/_vue-loader@15.9.3@vue-loader/lib??vue-loader-options!./pages/article/_id.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var _idvue_type_script_lang_js_ = ({
  components: {
    Comment: Comment["a" /* default */]
  },

  async asyncData({
    $axios,
    params,
    error
  }) {
    let article;

    try {
      article = await $axios.get('/api/article/' + params.id);
    } catch (e) {
      error({
        statusCode: e.errorCode,
        message: e.message
      });
      return;
    }

    const [commentsPage, favorited, nearlyArticles, relatedArticles] = await Promise.all([$axios.get('/api/comment/list', {
      params: {
        entityType: 'article',
        entityId: article.articleId
      }
    }), $axios.get('/api/favorite/favorited', {
      params: {
        entityType: 'article',
        entityId: params.id
      }
    }), $axios.get('/api/article/nearly/' + article.articleId), $axios.get('/api/article/related/' + article.articleId)]); // 文章关键字

    let keywords = '';
    const keywordsArr = [];

    if (article.tags && article.tags.length > 0) {
      article.tags.forEach(tag => {
        keywordsArr.push(tag.tagName);
      });

      if (keywordsArr.length > 0) {
        keywords = keywordsArr.join(',');
      }
    } // 文章描述


    let description = '';

    if (article.summary && article.summary.length > 0) {
      description = article.summary.substr(0, 128);

      if (article.summary.length > 128) {
        description += '...';
      }
    }

    return {
      article,
      favorited: favorited.favorited,
      nearlyArticles,
      relatedArticles,
      commentsPage,
      keywords,
      description
    };
  },

  computed: {
    hasPermission() {
      return this.isOwner || UserHelper["a" /* default */].isOwner(this.user) || UserHelper["a" /* default */].isAdmin(this.user);
    },

    isOwner() {
      if (!this.user || !this.article) {
        return false;
      }

      return this.user.id === this.article.user.id;
    },

    isPending() {
      return this.article.status === 2;
    },

    user() {
      return this.$store.state.user.current;
    }

  },
  methods: {
    async deleteArticle(articleId) {
      if (false) {}

      try {
        await this.$axios.post('/api/article/delete/' + articleId);
        this.$toast.success('删除成功！', {
          duration: 1000,

          onComplete() {
            utils["a" /* default */].linkTo('/articles');
          }

        });
      } catch (e) {
        this.$toast.error('删除失败：' + (e.message || e));
      }
    },

    async addFavorite(articleId) {
      try {
        if (this.favorited) {
          await this.$axios.get('/api/favorite/delete', {
            params: {
              entityType: 'article',
              entityId: articleId
            }
          });
          this.favorited = false;
          this.$toast.success('已取消收藏！');
        } else {
          await this.$axios.post('/api/article/favorite/' + articleId);
          this.favorited = true;
          this.$toast.success('收藏成功！');
        }
      } catch (e) {
        console.error(e);
        this.$toast.error('收藏失败：' + (e.message || e));
      }
    }

  },

  head() {
    return {
      title: this.$siteTitle(this.article.title),
      meta: [{
        hid: 'description',
        name: 'description',
        content: this.description
      }, {
        hid: 'keywords',
        name: 'keywords',
        content: this.keywords
      }]
    };
  }

});
// CONCATENATED MODULE: ./pages/article/_id.vue?vue&type=script&lang=js&
 /* harmony default export */ var article_idvue_type_script_lang_js_ = (_idvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/_vue-loader@15.9.3@vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./pages/article/_id.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  article_idvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "3550928e",
  "4281c68a"
  
)

/* harmony default export */ var _id = __webpack_exports__["default"] = (component.exports);

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
    if (str === "" || str === undefined) return true;
    var regu = "^[ ]+$";
    var re = new RegExp(regu);
    return re.test(str);
  }

}

/* harmony default export */ __webpack_exports__["a"] = (new Utils());

/***/ }),

/***/ 44:
/***/ (function(module, exports) {

// Exports
module.exports = {};


/***/ }),

/***/ 60:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_15_9_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_LoadMore_vue_vue_type_style_index_0_id_d1c148c2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(44);
/* harmony import */ var _node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_15_9_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_LoadMore_vue_vue_type_style_index_0_id_d1c148c2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_15_9_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_LoadMore_vue_vue_type_style_index_0_id_d1c148c2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_15_9_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_LoadMore_vue_vue_type_style_index_0_id_d1c148c2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_15_9_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_LoadMore_vue_vue_type_style_index_0_id_d1c148c2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_15_9_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_LoadMore_vue_vue_type_style_index_0_id_d1c148c2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 61:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/_vue-loader@15.9.3@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.9.3@vue-loader/lib??vue-loader-options!./components/LoadMore.vue?vue&type=template&id=d1c148c2&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{directives:[{name:"infinite-scroll",rawName:"v-infinite-scroll",value:(_vm.loadMore),expression:"loadMore"}],staticClass:"load-more",attrs:{"infinite-scroll-disabled":"disabled","infinite-scroll-distance":"10"}},[_vm._t("default",null,{"results":_vm.results}),_vm._ssrNode(" "+((_vm.loading)?("<div class=\"load-more-loading\" data-v-d1c148c2><div class=\"loading-animation\" data-v-d1c148c2></div> <span class=\"load-more-text\" data-v-d1c148c2>加载中...</span></div>"):"<!---->"))],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/LoadMore.vue?vue&type=template&id=d1c148c2&scoped=true&

// CONCATENATED MODULE: ./node_modules/_babel-loader@8.1.0@babel-loader/lib??ref--2-0!./node_modules/_vue-loader@15.9.3@vue-loader/lib??vue-loader-options!./components/LoadMore.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var LoadMorevue_type_script_lang_js_ = ({
  props: {
    // 请求URL
    url: {
      type: String,
      required: true
    },
    // 请求参数
    params: {
      type: Object,

      default() {
        return {};
      }

    },
    // 初始化数据
    initData: {
      type: Object,

      default() {
        return {
          results: [],
          cursor: ''
        };
      }

    }
  },

  data() {
    return {
      cursor: this.initData.cursor,
      // 分页标识
      results: this.initData.results || [],
      // 列表数据
      hasMore: true,
      // 是否有更多数据
      loading: false // 是否正在加载中

    };
  },

  computed: {
    // 是否禁言自动加载
    disabled() {
      return this.loading || !this.hasMore;
    }

  },
  methods: {
    async loadMore() {
      this.loading = true;

      try {
        const _params = Object.assign(this.params || {}, {
          cursor: this.cursor
        });

        const ret = await this.$axios.get(this.url, {
          params: _params
        });
        this.cursor = ret.cursor;

        if (ret.results && ret.results.length) {
          ret.results.forEach(item => {
            this.results.push(item);
          });
        } else {
          this.hasMore = false;
        }
      } catch (err) {
        this.hasMore = false;
        console.error(err);
      } finally {
        this.loading = false;
      }
    },

    /**
     * 在results最前面加一条数据
     */
    unshiftResults(item) {
      if (item) {
        this.results.unshift(item);
      }
    },

    /**
     * 在results最后面加一条数据
     */
    pushResults(item) {
      if (item) {
        this.results.push(item);
      }
    }

  }
});
// CONCATENATED MODULE: ./components/LoadMore.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_LoadMorevue_type_script_lang_js_ = (LoadMorevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/_vue-loader@15.9.3@vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/LoadMore.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(60)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_LoadMorevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "d1c148c2",
  "d060d4f0"
  
)

/* harmony default export */ var LoadMore = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 66:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/_vue-loader@15.9.3@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.9.3@vue-loader/lib??vue-loader-options!./components/Comment.vue?vue&type=template&id=52d4f9ee&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[(_vm.mode === 'markdown')?_c('comment-input',{ref:"input",attrs:{"entity-id":_vm.entityId,"entity-type":_vm.entityType},on:{"created":_vm.commentCreated}}):_c('comment-text-input',{ref:"input",attrs:{"entity-id":_vm.entityId,"entity-type":_vm.entityType},on:{"created":_vm.commentCreated}}),_vm._ssrNode(" "),_c('comment-list',{ref:"list",attrs:{"entity-id":_vm.entityId,"entity-type":_vm.entityType,"comments-page":_vm.commentsPage},on:{"reply":_vm.reply}})],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Comment.vue?vue&type=template&id=52d4f9ee&

// CONCATENATED MODULE: ./node_modules/_vue-loader@15.9.3@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.9.3@vue-loader/lib??vue-loader-options!./components/CommentList.vue?vue&type=template&id=211cc62c&scoped=true&
var CommentListvue_type_template_id_211cc62c_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"comments"},[(_vm.commentsPage)?_c('load-more',{ref:"commentsLoadMore",attrs:{"init-data":_vm.commentsPage,"params":{ entityType: _vm.entityType, entityId: _vm.entityId },"url":"/api/comment/list"},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var results = ref.results;
return [_c('ul',_vm._l((results),function(comment,index){return _c('li',{key:comment.commentId,staticClass:"comment",attrs:{"index":index,"itemprop":"comment","itemscope":"","itemtype":"http://schema.org/Comment"}},[_c('div',{staticClass:"comment-avatar"},[_c('img',{staticClass:"avatar",attrs:{"src":comment.user.smallAvatar}})]),_vm._v(" "),_c('div',{staticClass:"comment-meta"},[_c('span',{staticClass:"comment-nickname",attrs:{"itemprop":"creator","itemscope":"","itemtype":"http://schema.org/Person"}},[_c('a',{attrs:{"href":'/user/' + comment.user.id,"itemprop":"name"}},[_vm._v("\n              "+_vm._s(comment.user.nickname)+"\n            ")])]),_vm._v(" "),_c('span',{staticClass:"comment-time"},[_c('time',{attrs:{"datetime":_vm._f("formatDate")(comment.createTime,'yyyy-MM-ddTHH:mm:ss'),"itemprop":"datePublished"}},[_vm._v(_vm._s(_vm._f("prettyDate")(comment.createTime)))])]),_vm._v(" "),_c('span',{staticClass:"comment-reply"},[_c('a',{on:{"click":function($event){return _vm.reply(comment)}}},[_vm._v("回复")])])]),_vm._v(" "),_c('div',{staticClass:"comment-content content"},[(comment.quote)?_c('blockquote',{staticClass:"comment-quote"},[_c('div',{staticClass:"comment-quote-user"},[_c('img',{staticClass:"avatar size-20",attrs:{"src":comment.quote.user.smallAvatar}}),_vm._v(" "),_c('a',{staticClass:"quote-nickname"},[_vm._v(_vm._s(comment.quote.user.nickname))]),_vm._v(" "),_c('span',{staticClass:"quote-time"},[_vm._v("\n                "+_vm._s(_vm._f("prettyDate")(comment.quote.createTime))+"\n              ")])]),_vm._v(" "),_c('div',{directives:[{name:"lazy-container",rawName:"v-lazy-container",value:({ selector: 'img' }),expression:"{ selector: 'img' }"}],attrs:{"itemprop":"text"},domProps:{"innerHTML":_vm._s(comment.quote.content)}})]):_vm._e(),_vm._v(" "),_c('p',{directives:[{name:"lazy-container",rawName:"v-lazy-container",value:({ selector: 'img' }),expression:"{ selector: 'img' }"}],domProps:{"innerHTML":_vm._s(comment.content)}})])])}),0)]}}],null,false,1505187036)}):_vm._e()],1)}
var CommentListvue_type_template_id_211cc62c_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./components/CommentList.vue?vue&type=template&id=211cc62c&scoped=true&

// EXTERNAL MODULE: ./components/LoadMore.vue + 4 modules
var LoadMore = __webpack_require__(61);

// EXTERNAL MODULE: ./common/utils.js
var utils = __webpack_require__(33);

// CONCATENATED MODULE: ./node_modules/_babel-loader@8.1.0@babel-loader/lib??ref--2-0!./node_modules/_vue-loader@15.9.3@vue-loader/lib??vue-loader-options!./components/CommentList.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var CommentListvue_type_script_lang_js_ = ({
  components: {
    LoadMore: LoadMore["a" /* default */]
  },
  props: {
    entityType: {
      type: String,
      default: '',
      required: true
    },
    entityId: {
      type: Number,
      default: 0,
      required: true
    },
    commentsPage: {
      type: Object,

      default() {
        return {};
      }

    },
    showAd: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    user() {
      return this.$store.state.user.current;
    },

    isLogin() {
      return this.$store.state.user.current != null;
    }

  },
  methods: {
    append(data) {
      if (!data) return;
      this.$refs.commentsLoadMore.unshiftResults(data);
    },

    reply(quote) {
      if (!this.isLogin) {
        utils["a" /* default */].toSignin();
      }

      this.$emit('reply', quote);
    },

    cancelReply() {
      this.quote = null;
    }

  }
});
// CONCATENATED MODULE: ./components/CommentList.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_CommentListvue_type_script_lang_js_ = (CommentListvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/_vue-loader@15.9.3@vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/CommentList.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_CommentListvue_type_script_lang_js_,
  CommentListvue_type_template_id_211cc62c_scoped_true_render,
  CommentListvue_type_template_id_211cc62c_scoped_true_staticRenderFns,
  false,
  injectStyles,
  "211cc62c",
  "3e15c700"
  
)

/* harmony default export */ var CommentList = (component.exports);
// CONCATENATED MODULE: ./node_modules/_vue-loader@15.9.3@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.9.3@vue-loader/lib??vue-loader-options!./components/CommentInput.vue?vue&type=template&id=7e0a8a20&scoped=true&
var CommentInputvue_type_template_id_7e0a8a20_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"comment-form"},[_vm._ssrNode(((_vm.isLogin)?("<div class=\"comment-create\" data-v-7e0a8a20><div class=\"comment-input-wrapper\" data-v-7e0a8a20>"+((_vm.quote)?("<div class=\"comment-quote-info\" data-v-7e0a8a20>\n        回复：\n        <label data-v-7e0a8a20>"+_vm._ssrEscape(_vm._s(_vm.quote.user.nickname))+"</label> <i alt=\"取消回复\" class=\"iconfont icon-close\" data-v-7e0a8a20></i></div>"):"<!---->")+" <textarea editor-id=\"createEditor\" height=\"200px\" placeholder=\"请发表你的观点...\" class=\"textarea is-large\" data-v-7e0a8a20>"+_vm._ssrEscape(_vm._s(_vm.content))+"</textarea></div> <div class=\"comment-button-wrapper\" data-v-7e0a8a20><span data-v-7e0a8a20>Ctrl or ⌘ + Enter</span> <button class=\"button is-small is-success\" data-v-7e0a8a20>"+_vm._ssrEscape(_vm._s(_vm.btnName))+"</button></div></div>"):("<div class=\"comment-not-login\" data-v-7e0a8a20><div class=\"comment-login-div\" data-v-7e0a8a20>\n      请\n      <a style=\"font-weight: 700;\" data-v-7e0a8a20>登录</a>后发表观点\n    </div></div>")))])}
var CommentInputvue_type_template_id_7e0a8a20_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./components/CommentInput.vue?vue&type=template&id=7e0a8a20&scoped=true&

// CONCATENATED MODULE: ./node_modules/_babel-loader@8.1.0@babel-loader/lib??ref--2-0!./node_modules/_vue-loader@15.9.3@vue-loader/lib??vue-loader-options!./components/CommentInput.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// import MarkdownEditor from '~/components/MarkdownEditor'

/* harmony default export */ var CommentInputvue_type_script_lang_js_ = ({
  components: {// MarkdownEditor
  },
  props: {
    entityType: {
      type: String,
      default: '',
      required: true
    },
    entityId: {
      type: Number,
      default: 0,
      required: true
    }
  },

  data() {
    return {
      content: '',
      // 内容
      sending: false,
      // 发送中
      quote: null // 引用的对象

    };
  },

  computed: {
    btnName() {
      return this.sending ? '正在发表...' : '发表';
    },

    user() {
      return this.$store.state.user.current;
    },

    isLogin() {
      return this.$store.state.user.current != null;
    }

  },
  methods: {
    async create() {
      if (!this.content) {
        this.$toast.error('请输入评论内容');
        return;
      }

      if (this.sending) {
        console.log('正在发送中，请不要重复提交...');
        return;
      }

      this.sending = true;

      try {
        const data = await this.$axios.post('/api/comment/create', {
          entityType: this.entityType,
          entityId: this.entityId,
          content: this.content,
          quoteId: this.quote ? this.quote.commentId : ''
        });
        this.$emit('created', data);
        this.content = ''; // this.$refs.mdEditor.clear()

        this.quote = null;
      } catch (e) {
        console.error(e);
        this.$toast.error('评论失败：' + (e.message || e));
      } finally {
        this.sending = false;
      }
    },

    reply(quote) {
      this.quote = quote;
      this.$refs.commentEditor.scrollIntoView({
        block: 'start',
        behavior: 'smooth'
      });
    },

    cancelReply() {
      this.quote = null;
    },

    toLogin() {
      utils["a" /* default */].toSignin();
    }

  }
});
// CONCATENATED MODULE: ./components/CommentInput.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_CommentInputvue_type_script_lang_js_ = (CommentInputvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/CommentInput.vue



function CommentInput_injectStyles (context) {
  
  
}

/* normalize component */

var CommentInput_component = Object(componentNormalizer["a" /* default */])(
  components_CommentInputvue_type_script_lang_js_,
  CommentInputvue_type_template_id_7e0a8a20_scoped_true_render,
  CommentInputvue_type_template_id_7e0a8a20_scoped_true_staticRenderFns,
  false,
  CommentInput_injectStyles,
  "7e0a8a20",
  "21fa3350"
  
)

/* harmony default export */ var CommentInput = (CommentInput_component.exports);
// CONCATENATED MODULE: ./node_modules/_vue-loader@15.9.3@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.9.3@vue-loader/lib??vue-loader-options!./components/CommentTextInput.vue?vue&type=template&id=1de668c8&scoped=true&
var CommentTextInputvue_type_template_id_1de668c8_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"comment-form"},[_vm._ssrNode(((_vm.isLogin)?("<div class=\"comment-create\" data-v-1de668c8><div class=\"comment-input-wrapper\" data-v-1de668c8>"+((_vm.quote)?("<div class=\"comment-quote-info\" data-v-1de668c8>\n        回复：\n        <label data-v-1de668c8>"+_vm._ssrEscape(_vm._s(_vm.quote.user.nickname))+"</label> <i alt=\"取消回复\" class=\"iconfont icon-close\" data-v-1de668c8></i></div>"):"<!---->")+" <textarea placeholder=\"请发表你的观点...\" class=\"text-input\" data-v-1de668c8>"+_vm._ssrEscape(_vm._s(_vm.content))+"</textarea></div> <div class=\"comment-button-wrapper\" data-v-1de668c8><span data-v-1de668c8>Ctrl or ⌘ + Enter</span> <button class=\"button is-small is-success\" data-v-1de668c8>"+_vm._ssrEscape(_vm._s(_vm.btnName))+"</button></div></div>"):("<div class=\"comment-not-login\" data-v-1de668c8><div class=\"comment-login-div\" data-v-1de668c8>\n      请\n      <a style=\"font-weight: 700;\" data-v-1de668c8>登录</a>后发表观点\n    </div></div>")))])}
var CommentTextInputvue_type_template_id_1de668c8_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./components/CommentTextInput.vue?vue&type=template&id=1de668c8&scoped=true&

// CONCATENATED MODULE: ./node_modules/_babel-loader@8.1.0@babel-loader/lib??ref--2-0!./node_modules/_vue-loader@15.9.3@vue-loader/lib??vue-loader-options!./components/CommentTextInput.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var CommentTextInputvue_type_script_lang_js_ = ({
  components: {},
  props: {
    entityType: {
      type: String,
      default: '',
      required: true
    },
    entityId: {
      type: Number,
      default: 0,
      required: true
    }
  },

  data() {
    return {
      content: '',
      // 内容
      sending: false,
      // 发送中
      quote: null // 引用的对象

    };
  },

  computed: {
    btnName() {
      return this.sending ? '正在发表...' : '发表';
    },

    user() {
      return this.$store.state.user.current;
    },

    isLogin() {
      return this.$store.state.user.current != null;
    }

  },
  methods: {
    async create() {
      if (!this.content) {
        this.$toast.error('请输入评论内容');
        return;
      }

      if (this.sending) {
        console.log('正在发送中，请不要重复提交...');
        return;
      }

      this.sending = true;

      try {
        const data = await this.$axios.post('/api/comment/create', {
          contentType: 'text',
          entityType: this.entityType,
          entityId: this.entityId,
          content: this.content,
          quoteId: this.quote ? this.quote.commentId : ''
        });
        this.$emit('created', data);
        this.content = '';
        this.quote = null;
      } catch (e) {
        console.error(e);
        this.$toast.error('评论失败：' + (e.message || e));
      } finally {
        this.sending = false;
      }
    },

    reply(quote) {
      this.quote = quote;
      this.$refs.commentEditor.scrollIntoView({
        block: 'start',
        behavior: 'smooth'
      });
    },

    cancelReply() {
      this.quote = null;
    },

    toLogin() {
      utils["a" /* default */].toSignin();
    }

  }
});
// CONCATENATED MODULE: ./components/CommentTextInput.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_CommentTextInputvue_type_script_lang_js_ = (CommentTextInputvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/CommentTextInput.vue



function CommentTextInput_injectStyles (context) {
  
  
}

/* normalize component */

var CommentTextInput_component = Object(componentNormalizer["a" /* default */])(
  components_CommentTextInputvue_type_script_lang_js_,
  CommentTextInputvue_type_template_id_1de668c8_scoped_true_render,
  CommentTextInputvue_type_template_id_1de668c8_scoped_true_staticRenderFns,
  false,
  CommentTextInput_injectStyles,
  "1de668c8",
  "64f04eaa"
  
)

/* harmony default export */ var CommentTextInput = (CommentTextInput_component.exports);
// CONCATENATED MODULE: ./node_modules/_babel-loader@8.1.0@babel-loader/lib??ref--2-0!./node_modules/_vue-loader@15.9.3@vue-loader/lib??vue-loader-options!./components/Comment.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var Commentvue_type_script_lang_js_ = ({
  name: 'Comment',
  components: {
    CommentList: CommentList,
    CommentInput: CommentInput,
    CommentTextInput: CommentTextInput
  },
  props: {
    mode: {
      type: String,
      default: 'markdown'
    },
    entityType: {
      type: String,
      default: '',
      required: true
    },
    entityId: {
      type: Number,
      default: 0,
      required: true
    },
    commentsPage: {
      type: Object,

      default() {
        return {};
      }

    },
    showAd: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    commentCreated(data) {
      this.$refs.list.append(data);
    },

    reply(quote) {
      this.$refs.input.reply(quote);
    }

  }
});
// CONCATENATED MODULE: ./components/Comment.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Commentvue_type_script_lang_js_ = (Commentvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/Comment.vue





/* normalize component */

var Comment_component = Object(componentNormalizer["a" /* default */])(
  components_Commentvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "5f222bc2"
  
)

/* harmony default export */ var Comment = __webpack_exports__["a"] = (Comment_component.exports);

/***/ })

};;
//# sourceMappingURL=_id.js.map