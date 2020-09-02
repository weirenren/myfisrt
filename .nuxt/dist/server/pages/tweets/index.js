exports.ids = [54];
exports.modules = {

/***/ 143:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/_vue-loader@15.9.3@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.9.3@vue-loader/lib??vue-loader-options!./pages/tweets/index.vue?vue&type=template&id=8f2e9984&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"main"},[_vm._ssrNode("<div class=\"container main-container left-main\" data-v-8f2e9984>","</div>",[_vm._ssrNode("<div class=\"left-container\" data-v-8f2e9984>","</div>",[_vm._ssrNode("<div class=\"main-content no-padding\" data-v-8f2e9984>","</div>",[_c('post-tweets',{on:{"created":_vm.tweetsCreated}})],1),_vm._ssrNode(" "),(_vm.tweetsPage)?_c('load-more',{ref:"tweetsLoadMore",attrs:{"init-data":_vm.tweetsPage,"url":"/api/tweet/list"},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var results = ref.results;
return [_c('tweets-list',{attrs:{"tweets":results}})]}}],null,false,1750374090)}):_vm._e()],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"right-container\" data-v-8f2e9984>","</div>",[_c('site-notice'),_vm._ssrNode(" "),_c('score-rank',{attrs:{"score-rank":_vm.scoreRank}}),_vm._ssrNode(" "),_c('friend-links',{attrs:{"links":_vm.links}})],2)],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/tweets/index.vue?vue&type=template&id=8f2e9984&scoped=true&

// EXTERNAL MODULE: ./components/SiteNotice.vue + 4 modules
var SiteNotice = __webpack_require__(43);

// EXTERNAL MODULE: ./components/ScoreRank.vue + 4 modules
var ScoreRank = __webpack_require__(51);

// EXTERNAL MODULE: ./components/FriendLinks.vue + 4 modules
var FriendLinks = __webpack_require__(53);

// EXTERNAL MODULE: ./components/PostTweets.vue + 4 modules
var PostTweets = __webpack_require__(71);

// CONCATENATED MODULE: ./node_modules/_vue-loader@15.9.3@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.9.3@vue-loader/lib??vue-loader-options!./components/TweetsList.vue?vue&type=template&id=39a3ad80&scoped=true&
var TweetsListvue_type_template_id_39a3ad80_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('ul',{staticClass:"tweets"},_vm._l((_vm.tweets),function(tweet){return _vm._ssrNode("<li data-v-39a3ad80>","</li>",[_vm._ssrNode("<div class=\"tweet\" data-v-39a3ad80>","</div>",[_vm._ssrNode("<div class=\"pin-header-row\" data-v-39a3ad80><div class=\"account-group\" data-v-39a3ad80><div data-v-39a3ad80><a"+(_vm._ssrAttr("href",'/user/' + tweet.user.id))+(_vm._ssrAttr("title",tweet.user.nickname))+" data-v-39a3ad80><img"+(_vm._ssrAttr("src",tweet.user.smallAvatar))+" class=\"avatar size-45\" data-v-39a3ad80></a></div> <div class=\"pin-header-content\" data-v-39a3ad80><div data-v-39a3ad80><a"+(_vm._ssrAttr("href",'/user/' + tweet.user.id))+(_vm._ssrAttr("title",tweet.user.nickname))+" target=\"_blank\" class=\"nickname\" data-v-39a3ad80>"+_vm._ssrEscape(_vm._s(tweet.user.nickname))+"</a></div> <div class=\"meta-box\" data-v-39a3ad80><div class=\"position ellipsis\" data-v-39a3ad80>"+_vm._ssrEscape("\n                "+_vm._s(tweet.user.description)+"\n              ")+"</div> <div class=\"dot\" data-v-39a3ad80>·</div> <time"+(_vm._ssrAttr("datetime",_vm._f("formatDate")(tweet.createTime,'yyyy-MM-ddTHH:mm:ss')))+" itemprop=\"datePublished\" data-v-39a3ad80>"+_vm._ssrEscape(_vm._s(_vm._f("prettyDate")(tweet.createTime)))+"</time></div></div></div></div> <div class=\"pin-content-row\" data-v-39a3ad80><a"+(_vm._ssrAttr("href",'/tweet/' + tweet.tweetId))+" class=\"content-box\" data-v-39a3ad80>"+_vm._ssrEscape(_vm._s(tweet.content))+"</a></div> "),(tweet.imageList && tweet.imageList.length > 0)?_vm._ssrNode("<ul class=\"pin-image-row\" data-v-39a3ad80>","</ul>",_vm._l((tweet.imageList),function(image,index){return _vm._ssrNode("<li data-v-39a3ad80>","</li>",[_vm._ssrNode("<a"+(_vm._ssrAttr("href",'/tweet/' + tweet.tweetId))+" class=\"image-item\" data-v-39a3ad80>","</a>",[_c('img',{directives:[{name:"lazy",rawName:"v-lazy",value:(image.preview),expression:"image.preview"}]},[])])])}),0):_vm._e(),_vm._ssrNode(" <div class=\"pin-action-row\" data-v-39a3ad80><div class=\"action-box\" data-v-39a3ad80><div class=\"like-action action\" data-v-39a3ad80><div class=\"action-title-box\" data-v-39a3ad80><i class=\"iconfont icon-like\" data-v-39a3ad80></i> <span class=\"action-title\" data-v-39a3ad80>"+_vm._ssrEscape(_vm._s(tweet.likeCount > 0 ? tweet.likeCount : '赞'))+"</span></div></div> <a"+(_vm._ssrAttr("href",'/tweet/' + tweet.tweetId))+" class=\"comment-action action\" data-v-39a3ad80><div class=\"action-title-box\" data-v-39a3ad80><i class=\"iconfont icon-comments\" data-v-39a3ad80></i> <span class=\"action-title\" data-v-39a3ad80>"+_vm._ssrEscape(_vm._s(tweet.commentCount > 0 ? tweet.commentCount : '评论'))+"</span></div></a></div></div>")],2)])}),0)}
var TweetsListvue_type_template_id_39a3ad80_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./components/TweetsList.vue?vue&type=template&id=39a3ad80&scoped=true&

// EXTERNAL MODULE: ./common/utils.js
var utils = __webpack_require__(34);

// CONCATENATED MODULE: ./node_modules/_babel-loader@8.1.0@babel-loader/lib??ref--2-0!./node_modules/_vue-loader@15.9.3@vue-loader/lib??vue-loader-options!./components/TweetsList.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var TweetsListvue_type_script_lang_js_ = ({
  props: {
    tweets: {
      type: Array,

      default() {
        return [];
      },

      required: false
    }
  },
  methods: {
    async like(tweet) {
      try {
        await this.$axios.post('/api/tweet/like/' + tweet.tweetId);
        tweet.liked = true;
        tweet.likeCount++;
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
// CONCATENATED MODULE: ./components/TweetsList.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_TweetsListvue_type_script_lang_js_ = (TweetsListvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/_vue-loader@15.9.3@vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./components/TweetsList.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_TweetsListvue_type_script_lang_js_,
  TweetsListvue_type_template_id_39a3ad80_scoped_true_render,
  TweetsListvue_type_template_id_39a3ad80_scoped_true_staticRenderFns,
  false,
  injectStyles,
  "39a3ad80",
  "22bc19c5"
  
)

/* harmony default export */ var TweetsList = (component.exports);
// EXTERNAL MODULE: ./components/LoadMore.vue + 4 modules
var LoadMore = __webpack_require__(62);

// CONCATENATED MODULE: ./node_modules/_babel-loader@8.1.0@babel-loader/lib??ref--2-0!./node_modules/_vue-loader@15.9.3@vue-loader/lib??vue-loader-options!./pages/tweets/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//






/* harmony default export */ var tweetsvue_type_script_lang_js_ = ({
  components: {
    SiteNotice: SiteNotice["a" /* default */],
    ScoreRank: ScoreRank["a" /* default */],
    FriendLinks: FriendLinks["a" /* default */],
    PostTweets: PostTweets["a" /* default */],
    TweetsList: TweetsList,
    LoadMore: LoadMore["a" /* default */]
  },

  async asyncData({
    $axios,
    query
  }) {
    try {
      const [tweetsPage, scoreRank, links] = await Promise.all([$axios.get('/api/tweet/list'), $axios.get('/api/user/score/rank'), $axios.get('/api/link/toplinks')]);
      return {
        tweetsPage,
        scoreRank,
        links
      };
    } catch (e) {
      console.error(e);
    }
  },

  methods: {
    tweetsCreated(item) {
      this.$refs.tweetsLoadMore.unshiftResults(item);
    }

  },

  head() {
    return {
      title: this.$siteTitle('动态'),
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
// CONCATENATED MODULE: ./pages/tweets/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_tweetsvue_type_script_lang_js_ = (tweetsvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./pages/tweets/index.vue



function tweets_injectStyles (context) {
  
  
}

/* normalize component */

var tweets_component = Object(componentNormalizer["a" /* default */])(
  pages_tweetsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  tweets_injectStyles,
  "8f2e9984",
  "696b6914"
  
)

/* harmony default export */ var tweets = __webpack_exports__["default"] = (tweets_component.exports);

/***/ }),

/***/ 34:
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

/***/ 35:
/***/ (function(module, exports) {

// Exports
module.exports = {};


/***/ }),

/***/ 37:
/***/ (function(module, exports) {

// Exports
module.exports = {};


/***/ }),

/***/ 41:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_15_9_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_SiteNotice_vue_vue_type_style_index_0_id_05bf6a1c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35);
/* harmony import */ var _node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_15_9_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_SiteNotice_vue_vue_type_style_index_0_id_05bf6a1c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_15_9_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_SiteNotice_vue_vue_type_style_index_0_id_05bf6a1c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_15_9_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_SiteNotice_vue_vue_type_style_index_0_id_05bf6a1c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_15_9_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_SiteNotice_vue_vue_type_style_index_0_id_05bf6a1c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_15_9_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_SiteNotice_vue_vue_type_style_index_0_id_05bf6a1c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 43:
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
  
  var style0 = __webpack_require__(41)
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

/***/ 45:
/***/ (function(module, exports) {

// Exports
module.exports = {};


/***/ }),

/***/ 46:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/net.1e01d6d.png";

/***/ }),

/***/ 49:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_15_9_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_ScoreRank_vue_vue_type_style_index_0_id_1a6c8d5c_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(37);
/* harmony import */ var _node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_15_9_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_ScoreRank_vue_vue_type_style_index_0_id_1a6c8d5c_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_15_9_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_ScoreRank_vue_vue_type_style_index_0_id_1a6c8d5c_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_15_9_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_ScoreRank_vue_vue_type_style_index_0_id_1a6c8d5c_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_15_9_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_ScoreRank_vue_vue_type_style_index_0_id_1a6c8d5c_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_15_9_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_ScoreRank_vue_vue_type_style_index_0_id_1a6c8d5c_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 51:
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
  
  var style0 = __webpack_require__(49)
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

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/_vue-loader@15.9.3@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.9.3@vue-loader/lib??vue-loader-options!./components/FriendLinks.vue?vue&type=template&id=38bbb6a6&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.links && _vm.links.length)?_c('div',{staticClass:"widget"},[_vm._ssrNode("<div class=\"widget-header\" data-v-38bbb6a6><span data-v-38bbb6a6>友情链接</span> <span class=\"slot\" data-v-38bbb6a6><a href=\"/links\" data-v-38bbb6a6>查看更多&gt;&gt;</a></span></div> <div class=\"widget-content\" data-v-38bbb6a6><ul class=\"links\" data-v-38bbb6a6>"+(_vm._ssrList((_vm.links),function(link){return ("<li class=\"link\" data-v-38bbb6a6><div class=\"link-logo\" data-v-38bbb6a6>"+((link.logo)?("<img"+(_vm._ssrAttr("src",link.logo))+" data-v-38bbb6a6>"):"<!---->")+" "+((!link.logo)?("<img"+(_vm._ssrAttr("src",__webpack_require__(46)))+" data-v-38bbb6a6>"):"<!---->")+"</div> <div class=\"link-content\" data-v-38bbb6a6><a"+(_vm._ssrAttr("href",link.url))+(_vm._ssrAttr("title",link.title))+" target=\"_blank\" class=\"link-title\" data-v-38bbb6a6>"+_vm._ssrEscape(_vm._s(link.title))+"</a> <p class=\"link-summary\" data-v-38bbb6a6>"+_vm._ssrEscape("\n            "+_vm._s(link.summary)+"\n          ")+"</p></div></li>")}))+"</ul></div>")]):_vm._e()}
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

/***/ 58:
/***/ (function(module, exports) {

// Exports
module.exports = {};


/***/ }),

/***/ 61:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_15_9_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_LoadMore_vue_vue_type_style_index_0_id_d1c148c2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(45);
/* harmony import */ var _node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_15_9_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_LoadMore_vue_vue_type_style_index_0_id_d1c148c2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_15_9_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_LoadMore_vue_vue_type_style_index_0_id_d1c148c2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_15_9_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_LoadMore_vue_vue_type_style_index_0_id_d1c148c2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_15_9_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_LoadMore_vue_vue_type_style_index_0_id_d1c148c2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_15_9_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_LoadMore_vue_vue_type_style_index_0_id_d1c148c2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 62:
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
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./components/LoadMore.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(61)
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
  "7687ce00"
  
)

/* harmony default export */ var LoadMore = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 69:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_15_9_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_PostTweets_vue_vue_type_style_index_0_id_7c9b27e3_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(58);
/* harmony import */ var _node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_15_9_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_PostTweets_vue_vue_type_style_index_0_id_7c9b27e3_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_15_9_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_PostTweets_vue_vue_type_style_index_0_id_7c9b27e3_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_15_9_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_PostTweets_vue_vue_type_style_index_0_id_7c9b27e3_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_15_9_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_PostTweets_vue_vue_type_style_index_0_id_7c9b27e3_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_15_9_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_PostTweets_vue_vue_type_style_index_0_id_7c9b27e3_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 71:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/_vue-loader@15.9.3@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.9.3@vue-loader/lib??vue-loader-options!./components/PostTweets.vue?vue&type=template&id=7c9b27e3&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"post-tweets-wrapper"},[_vm._ssrNode("<div class=\"tweets-box\" data-v-7c9b27e3><div class=\"box-footer\" data-v-7c9b27e3><div class=\"bui-left\" data-v-7c9b27e3><span class=\"action-btn\" data-v-7c9b27e3><i class=\"iconfont icon-image\" data-v-7c9b27e3></i> <span data-v-7c9b27e3>本地图片上传</span></span></div></div> <div class=\"uploader-popup\""+(_vm._ssrStyle(null,null, { display: (_vm.showUploader) ? '' : 'none' }))+" data-v-7c9b27e3><div class=\"imgUploadBox\" data-v-7c9b27e3><p class=\"uploader-title\" data-v-7c9b27e3>本地上传</p> <p class=\"uploader-meta\" data-v-7c9b27e3>"+_vm._ssrEscape("\n          共 "+_vm._s(_vm.imageCount)+" 张，还能上传 "+_vm._s(_vm.maxImageCount - _vm.imageCount)+" 张\n        ")+"</p> <i class=\"close-popup iconfont icon-close\" data-v-7c9b27e3></i> <div class=\"upload-box\" data-v-7c9b27e3><form style=\"display: none;\" data-v-7c9b27e3><input type=\"file\" accept=\"image/*\" multiple=\"multiple\" data-v-7c9b27e3></form> <ul class=\"upload-img-list\" data-v-7c9b27e3>"+(_vm._ssrList((_vm.images),function(image,i){return ("<li class=\"upload-img-item\" data-v-7c9b27e3><img"+(_vm._ssrAttr("src",image))+" data-v-7c9b27e3> <i class=\"iconfont icon-close remove\" data-v-7c9b27e3></i></li>")}))+" "+((_vm.imageCount < _vm.maxImageCount)?("<li class=\"upload-img-item upload-img-add\" data-v-7c9b27e3><i class=\"iconfont icon-add\" data-v-7c9b27e3></i></li>"):"<!---->")+"</ul></div></div></div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/PostTweets.vue?vue&type=template&id=7c9b27e3&scoped=true&

// CONCATENATED MODULE: ./node_modules/_babel-loader@8.1.0@babel-loader/lib??ref--2-0!./node_modules/_vue-loader@15.9.3@vue-loader/lib??vue-loader-options!./components/PostTweets.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var PostTweetsvue_type_script_lang_js_ = ({
  props: {
    nodeId: {
      type: Number,
      default: 0
    },
    imageList: {
      type: Array,
      required: false
    },
    onImageUploadCallBack: {
      type: Function,
      required: false
    }
  },

  data() {
    return {
      content: '',
      images: [],
      message: '',
      maxWordCount: 1000,
      showUploader: false,
      maxImageCount: 9
    };
  },

  computed: {
    hasContent() {
      return this.content && this.content.length > 0;
    },

    wordCount() {
      return this.content ? this.content.length : 0;
    },

    imageCount() {
      return this.images ? this.images.length : 0;
    },

    user() {
      return this.$store.state.user.current;
    }

  },

  mounted() {
    if (this.imageList) {
      this.images = this.imageList;
    }

    console.log('imageList:' + this.images);
  },

  methods: {
    onInput() {},

    async doSubmit() {
      if (!this.user) {
        this.message = '发表失败，请登录后重试';
        return;
      }

      if (!this.hasContent) {
        this.message = '发表失败，请输入内容';
        return;
      }

      this.showUploader = false; // 关闭图片上传框

      try {
        const ret = await this.$axios.post('/api/tweet/create', {
          content: this.content,
          imageList: JSON.stringify(this.images)
        });
        this.content = '';
        this.message = '';
        this.$emit('created', ret);
        this.$toast.success('发布成功');
      } catch (e) {
        this.message = e.message || e;
      }
    },

    handleImageUploadClick() {
      this.$refs.imageInput.click();
    },

    handleParse(e) {
      const items = e.clipboardData && e.clipboardData.items;
      let file = null;

      if (items && items.length) {
        for (let i = 0; i < items.length; i++) {
          if (items[i].type.includes('image')) {
            file = items[i].getAsFile();
          }
        }
      }

      if (!file) {
        return;
      }

      this.showUploader = true; // 展开上传面板

      e.preventDefault(); // 阻止默认行为即不让剪贴板内容在div中显示出来

      if (this.imageCount + 1 > this.maxImageCount) {
        this.message = '图片数量超过上限';
        return;
      }

      this.upload(file); // 上传
    },

    handleDrag(e) {
      e.stopPropagation();
      e.preventDefault();
      const files = [];
      const items = e.dataTransfer.items;

      if (items && items.length) {
        if (items && items.length) {
          for (let i = 0; i < items.length; i++) {
            if (items[i].type.includes('image')) {
              files.push(items[i].getAsFile());
            }
          }
        }
      }

      if (files && files.length) {
        this.showUploader = true; // 展开上传面板

        this.uploadFiles(files);
      }
    },

    async handleImageUploadChange(ev) {
      const files = ev.target.files;
      if (!files) return;
      await this.uploadFiles(files); // 清理文件输入框

      this.$refs.imageInput.value = null;
    },

    async uploadFiles(files) {
      if (files.length === 0) {
        return;
      }

      if (this.imageCount + files.length > this.maxImageCount) {
        this.message = '图片数量超过上限';
        return;
      }

      for (let i = 0; i < files.length; i++) {
        await this.upload(files[i]);
      }
    },

    async upload(file) {
      try {
        const formData = new FormData();
        formData.append('image', file, file.name);
        const ret = await this.$axios.post('/api/upload', formData);
        this.images.push(ret.url);
      } catch (e) {
        this.$toast.error(e.message);
        this.message = e.message || e;
      }

      if (this.onImageUploadCallBack) {
        this.onImageUploadCallBack(this.images);
      }
    },

    removeImg(img) {
      const index = this.images.indexOf(img);

      if (index !== -1) {
        this.images.splice(index, 1);
      }

      if (this.onImageUploadCallBack) {
        this.onImageUploadCallBack(this.images);
      }
    }

  }
});
// CONCATENATED MODULE: ./components/PostTweets.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_PostTweetsvue_type_script_lang_js_ = (PostTweetsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/_vue-loader@15.9.3@vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./components/PostTweets.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(69)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_PostTweetsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "7c9b27e3",
  "673911c7"
  
)

/* harmony default export */ var PostTweets = __webpack_exports__["a"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map