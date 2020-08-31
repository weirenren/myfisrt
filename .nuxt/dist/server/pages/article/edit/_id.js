exports.ids = [22];
exports.modules = {

/***/ 182:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/_vue-loader@15.9.3@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.9.3@vue-loader/lib??vue-loader-options!./pages/article/edit/_id.vue?vue&type=template&id=ea11137a&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"main"},[_vm._ssrNode("<div class=\"container main-container is-white left-main\" data-v-ea11137a>","</div>",[_vm._ssrNode("<div class=\"left-container\" data-v-ea11137a>","</div>",[_vm._ssrNode("<div class=\"widget\" data-v-ea11137a>","</div>",[_vm._ssrNode("<div class=\"widget-header\" data-v-ea11137a><nav class=\"breadcrumb\" data-v-ea11137a><ul data-v-ea11137a><li data-v-ea11137a><a href=\"/\" data-v-ea11137a>首页</a></li> <li data-v-ea11137a><a"+(_vm._ssrAttr("href",'/user/' + _vm.currentUser.id + '?tab=topics'))+" data-v-ea11137a>"+_vm._ssrEscape(_vm._s(_vm.currentUser.nickname))+"</a></li> <li class=\"is-active\" data-v-ea11137a><a href=\"#\" aria-current=\"page\" data-v-ea11137a>文章</a></li></ul></nav></div> "),_vm._ssrNode("<div class=\"widget-content\" data-v-ea11137a>","</div>",[_vm._ssrNode("<div class=\"field\" data-v-ea11137a><div class=\"control\" data-v-ea11137a><input type=\"text\" placeholder=\"标题\""+(_vm._ssrAttr("value",(_vm.postForm.title)))+" class=\"input\" data-v-ea11137a></div></div> "),_vm._ssrNode("<div class=\"field\" data-v-ea11137a>","</div>",[_vm._ssrNode("<div class=\"control\" data-v-ea11137a>","</div>",[_c('markdown-editor',{attrs:{"editor-id":"articleEditEditor","placeholder":"请输入内容，将图片复制或拖入编辑器可上传"},model:{value:(_vm.postForm.content),callback:function ($$v) {_vm.$set(_vm.postForm, "content", $$v)},expression:"postForm.content"}})],1)]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"field\" data-v-ea11137a>","</div>",[_vm._ssrNode("<div class=\"control\" data-v-ea11137a>","</div>",[_c('tag-input',{model:{value:(_vm.postForm.tags),callback:function ($$v) {_vm.$set(_vm.postForm, "tags", $$v)},expression:"postForm.tags"}})],1)]),_vm._ssrNode(" <div class=\"field is-grouped\" data-v-ea11137a><div class=\"control\" data-v-ea11137a><a"+(_vm._ssrAttr("disabled",_vm.publishing))+(_vm._ssrClass("button is-success",{ 'is-loading': _vm.publishing }))+" data-v-ea11137a>提交更改</a></div></div>")],2)],2)]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"right-container\" data-v-ea11137a>","</div>",[_c('markdown-help')],1)],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/article/edit/_id.vue?vue&type=template&id=ea11137a&scoped=true&

// EXTERNAL MODULE: ./common/utils.js
var utils = __webpack_require__(34);

// EXTERNAL MODULE: ./components/TagInput.vue + 4 modules
var TagInput = __webpack_require__(68);

// EXTERNAL MODULE: ./components/MarkdownHelp.vue + 4 modules
var MarkdownHelp = __webpack_require__(72);

// EXTERNAL MODULE: ./components/MarkdownEditor.vue + 4 modules
var MarkdownEditor = __webpack_require__(77);

// CONCATENATED MODULE: ./node_modules/_babel-loader@8.1.0@babel-loader/lib??ref--2-0!./node_modules/_vue-loader@15.9.3@vue-loader/lib??vue-loader-options!./pages/article/edit/_id.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  middleware: 'authenticated',
  components: {
    TagInput: TagInput["a" /* default */],
    MarkdownHelp: MarkdownHelp["a" /* default */],
    MarkdownEditor: MarkdownEditor["a" /* default */]
  },

  async asyncData({
    $axios,
    params,
    error
  }) {
    try {
      const [article] = await Promise.all([$axios.get('/api/article/edit/' + params.id)]);
      return {
        article,
        postForm: {
          title: article.title,
          tags: article.tags,
          content: article.content
        }
      };
    } catch (e) {
      error({
        statusCode: 403,
        message: e.message || '403'
      });
    }
  },

  data() {
    return {
      publishing: false,
      // 当前是否正处于发布中...
      postForm: {
        title: '',
        tags: [],
        content: ''
      }
    };
  },

  computed: {
    currentUser() {
      return this.$store.state.user.current;
    }

  },
  methods: {
    async submitCreate() {
      const me = this;

      if (me.publishing) {
        return;
      }

      me.publishing = true;

      try {
        const article = await this.$axios.post('/api/article/edit/' + this.article.articleId, {
          title: this.postForm.title,
          content: this.postForm.content,
          tags: this.postForm.tags ? this.postForm.tags.join(',') : ''
        });
        this.$toast.success('修改成功', {
          duration: 2000,

          onComplete() {
            utils["a" /* default */].linkTo('/article/' + article.articleId);
          }

        });
      } catch (e) {
        console.error(e);
        me.publishing = false;
        this.$toast.error('提交失败：' + (e.message || e));
      }
    }

  },

  head() {
    return {
      title: this.$siteTitle('修改文章')
    };
  }

});
// CONCATENATED MODULE: ./pages/article/edit/_id.vue?vue&type=script&lang=js&
 /* harmony default export */ var edit_idvue_type_script_lang_js_ = (_idvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/_vue-loader@15.9.3@vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./pages/article/edit/_id.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  edit_idvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "ea11137a",
  "0f84959d"
  
)

/* harmony default export */ var _id = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 34:
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
    if (str === '' || str === undefined) return true;
    const regu = '^[ ]+$';
    const re = new RegExp(regu);
    return re.test(str);
  }

}

/* harmony default export */ __webpack_exports__["a"] = (new Utils());

/***/ }),

/***/ 55:
/***/ (function(module, exports) {

// Exports
module.exports = {};


/***/ }),

/***/ 59:
/***/ (function(module, exports) {

// Exports
module.exports = {};


/***/ }),

/***/ 66:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_15_9_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_TagInput_vue_vue_type_style_index_0_id_cf173526_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(55);
/* harmony import */ var _node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_15_9_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_TagInput_vue_vue_type_style_index_0_id_cf173526_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_15_9_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_TagInput_vue_vue_type_style_index_0_id_cf173526_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_15_9_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_TagInput_vue_vue_type_style_index_0_id_cf173526_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_15_9_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_TagInput_vue_vue_type_style_index_0_id_cf173526_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_15_9_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_TagInput_vue_vue_type_style_index_0_id_cf173526_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 68:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/_vue-loader@15.9.3@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.9.3@vue-loader/lib??vue-loader-options!./components/TagInput.vue?vue&type=template&id=cf173526&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"select-tags"},[_vm._ssrNode("<input id=\"tags\" name=\"tags\" type=\"hidden\""+(_vm._ssrAttr("value",(_vm.tags)))+" data-v-cf173526> <div class=\"tags-selected\" data-v-cf173526>"+(_vm._ssrList((_vm.tags),function(tag){return ("<span class=\"tag-item\" data-v-cf173526><span class=\"text\" data-v-cf173526>"+_vm._ssrEscape(_vm._s(tag))+"<i"+(_vm._ssrAttr("data-name",tag))+" class=\"iconfont icon-close\" data-v-cf173526></i></span></span>")}))+"</div> <input"+(_vm._ssrAttr("placeholder",'标签（请用逗号分隔每个标签，最多' +
        _vm.maxTagCount +
        '个，每个最长15字符）'))+" type=\"text\""+(_vm._ssrAttr("value",(_vm.inputTag)))+" class=\"input\" data-v-cf173526> "+((_vm.autocompleteTags.length > 0)?("<div class=\"autocomplete-tags\" data-v-cf173526><div class=\"tags-container\" data-v-cf173526><section class=\"tag-section\" data-v-cf173526>"+(_vm._ssrList((_vm.autocompleteTags),function(item,index){return ("<div"+(_vm._ssrClass("tag-item",{ active: index === _vm.selectIndex }))+" data-v-cf173526>"+_vm._ssrEscape(_vm._s(item))+"</div>")}))+"</section></div></div>"):"<!---->")+" "+((_vm.showRecommendTags)?("<div class=\"recommend-tags\" data-v-cf173526><div class=\"tags-container\" data-v-cf173526><div class=\"header\" data-v-cf173526><span data-v-cf173526>推荐标签</span> <span class=\"close-recommend\" data-v-cf173526><i class=\"iconfont icon-close\" data-v-cf173526></i></span></div> "+(_vm._ssrList((_vm.recommendTags),function(tag){return ("<a class=\"tag-item\" data-v-cf173526>"+_vm._ssrEscape(_vm._s(tag))+"</a>")}))+"</div></div>"):"<!---->"))])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/TagInput.vue?vue&type=template&id=cf173526&scoped=true&

// CONCATENATED MODULE: ./node_modules/_babel-loader@8.1.0@babel-loader/lib??ref--2-0!./node_modules/_vue-loader@15.9.3@vue-loader/lib??vue-loader-options!./components/TagInput.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var TagInputvue_type_script_lang_js_ = ({
  props: {
    value: {
      type: Array,

      default() {
        return [];
      }

    }
  },

  data() {
    return {
      tags: this.value || [],
      maxTagCount: 3,
      // 最多可以选择的标签数量
      maxWordCount: 15,
      // 每个标签最大字数
      showRecommendTags: false,
      // 是否显示推荐
      inputTag: '',
      autocompleteTags: [],
      selectIndex: -1
    };
  },

  computed: {
    // 推荐标签
    recommendTags() {
      return this.$store.state.config.config.recommendTags;
    }

  },
  methods: {
    removeTag(event, tag) {
      const selectionStart = this.$refs.tagInput.selectionStart;

      if (!this.inputTag || selectionStart === 0) {
        // input框没内容，或者光标在首位的时候就删除最后一个标签
        this.tags.splice(this.tags.length - 1, 1);
        this.$emit('input', this.tags);
      }
    },

    clickRemoveTag(event) {
      const tag = event.target.dataset.name;

      if (tag) {
        const index = this.tags.indexOf(tag);

        if (index !== -1) {
          this.tags.splice(index, 1);
          this.$emit('input', this.tags);
        }
      }
    },

    /**
     * 手动点击选择标签
     * @param index
     */
    selectTag(index) {
      this.selectIndex = index;
      this.addTag();
    },

    /**
     * 添加标签
     * @param event
     */
    addTag(event) {
      if (event) {
        event.stopPropagation();
        event.preventDefault();
      }

      if (this.selectIndex >= 0 && this.autocompleteTags.length > this.selectIndex) {
        this.addTagName(this.autocompleteTags[this.selectIndex]);
      } else {
        this.addTagName(this.inputTag);
      }

      this.autocompleteTags = [];
      this.selectIndex = -1;
    },

    /**
     * 添加推荐标签
     * @param tagName
     */
    addRecommendTag(tagName) {
      this.addTagName(tagName);
      this.closeRecommendTags();
    },

    /**
     * 添加标签
     * @param tagName 标签名称
     * @returns {boolean} 是否成功
     */
    addTagName(tagName) {
      if (!tagName) {
        return false;
      } // 最多四个标签


      if (this.tags && this.tags.length >= this.maxTagCount) {
        return false;
      } // 每个标签最多15个字符


      if (tagName.length > this.maxWordCount) {
        return false;
      } // 标签已经存在


      if (this.tags && this.tags.includes(tagName)) {
        return false;
      }

      this.tags.push(tagName);
      this.inputTag = '';
      this.$emit('input', this.tags);
      return true;
    },

    async autocomplete() {
      this.closeRecommendTags();
      this.selectIndex = -1;

      if (!this.inputTag) {
        this.autocompleteTags = [];
      } else {
        const ret = await this.$axios.post('/api/tag/autocomplete', {
          input: this.inputTag
        });
        this.autocompleteTags = [];

        if (ret.length > 0) {
          for (let i = 0; i < ret.length; i++) {
            this.autocompleteTags.push(ret[i].name);
          }
        }
      }
    },

    selectUp(event) {
      event.stopPropagation();
      event.preventDefault();
      const curIndex = this.selectIndex;
      const maxIndex = this.autocompleteTags.length - 1;

      if (maxIndex < 0 || curIndex < 0) {
        // 已经在最顶部
        return;
      }

      this.selectIndex--;
    },

    selectDown(event) {
      event.stopPropagation();
      event.preventDefault();
      const curIndex = this.selectIndex;
      const maxIndex = this.autocompleteTags.length - 1;

      if (maxIndex < 0 || curIndex >= maxIndex) {
        // 已经在最底部
        return;
      }

      this.selectIndex++;
    },

    // 关闭推荐
    openRecommendTags() {
      this.showRecommendTags = true;
    },

    // 开启推荐
    closeRecommendTags() {
      setTimeout(() => {
        this.showRecommendTags = false;
      }, 300);
    },

    // 关闭自动补全
    close() {
      if (this.autocompleteTags && this.autocompleteTags.length > 0) {
        this.autocompleteTags = [];
        this.selectIndex = -1;
      }

      this.closeRecommendTags();
    }

  }
});
// CONCATENATED MODULE: ./components/TagInput.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_TagInputvue_type_script_lang_js_ = (TagInputvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/_vue-loader@15.9.3@vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./components/TagInput.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(66)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_TagInputvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "cf173526",
  "d9b14516"
  
)

/* harmony default export */ var TagInput = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 70:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_15_9_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_MarkdownHelp_vue_vue_type_style_index_0_id_29e12336_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(59);
/* harmony import */ var _node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_15_9_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_MarkdownHelp_vue_vue_type_style_index_0_id_29e12336_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_15_9_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_MarkdownHelp_vue_vue_type_style_index_0_id_29e12336_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_15_9_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_MarkdownHelp_vue_vue_type_style_index_0_id_29e12336_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_15_9_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_MarkdownHelp_vue_vue_type_style_index_0_id_29e12336_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_15_9_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_MarkdownHelp_vue_vue_type_style_index_0_id_29e12336_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 72:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/_vue-loader@15.9.3@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.9.3@vue-loader/lib??vue-loader-options!./components/MarkdownHelp.vue?vue&type=template&id=29e12336&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"widget markdown-help"},[_vm._ssrNode("<div class=\"widget-header\" data-v-29e12336>\n    Markdown 语法参考\n  </div> <div class=\"widget-content content\" data-v-29e12336><ol data-v-29e12336><li data-v-29e12336><span style=\"font-weight: 700; color: red;\" data-v-29e12336>将图片复制或拖入编辑器可上传</span></li> <li data-v-29e12336>## 单行的标题</li> <li data-v-29e12336>**粗体**</li> <li data-v-29e12336>`console.log('行内代码')`</li> <li data-v-29e12336>```js\\n code \\n``` 标记代码块</li> <li data-v-29e12336>[内容](链接)</li> <li data-v-29e12336>![文字说明](图片链接)</li></ol> <span data-v-29e12336><a href=\"https://mlog.club/article/5522\" target=\"_blank\" data-v-29e12336>Markdown 文档</a></span></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/MarkdownHelp.vue?vue&type=template&id=29e12336&scoped=true&

// CONCATENATED MODULE: ./node_modules/_babel-loader@8.1.0@babel-loader/lib??ref--2-0!./node_modules/_vue-loader@15.9.3@vue-loader/lib??vue-loader-options!./components/MarkdownHelp.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var MarkdownHelpvue_type_script_lang_js_ = ({});
// CONCATENATED MODULE: ./components/MarkdownHelp.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_MarkdownHelpvue_type_script_lang_js_ = (MarkdownHelpvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/_vue-loader@15.9.3@vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./components/MarkdownHelp.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(70)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_MarkdownHelpvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "29e12336",
  "e8be3116"
  
)

/* harmony default export */ var MarkdownHelp = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 77:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/_vue-loader@15.9.3@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.9.3@vue-loader/lib??vue-loader-options!./components/MarkdownEditor.vue?vue&type=template&id=6f3f59ba&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"vditor",style:({ width: _vm.width, height: _vm.height }),attrs:{"id":_vm.editorId}},[])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/MarkdownEditor.vue?vue&type=template&id=6f3f59ba&scoped=true&

// CONCATENATED MODULE: ./node_modules/_babel-loader@8.1.0@babel-loader/lib??ref--2-0!./node_modules/_vue-loader@15.9.3@vue-loader/lib??vue-loader-options!./components/MarkdownEditor.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
/* harmony default export */ var MarkdownEditorvue_type_script_lang_js_ = ({
  props: {
    editorId: {
      type: String,
      default: 'vditor'
    },
    value: {
      type: String,
      default: ''
    },
    height: {
      type: String,
      default: '400px' // normal、mini

    },
    placeholder: {
      type: String,
      default: '请输入...'
    }
  },

  data() {
    return {
      isLoading: true,
      vditor: null,
      width: '100%',
      toolbar: [// 'emoji',
      'headings', 'bold', 'italic', 'strike', '|', 'line', 'quote', 'list', 'ordered-list', 'check', 'code', 'inline-code', 'undo', 'redo', 'upload', 'link', 'table', 'wysiwyg', 'both', 'preview', 'format', 'fullscreen']
    };
  },

  mounted() {
    this.doInit();
    this.$nextTick(async () => {
      if (this.vditor) {
        await this.vditor.getHTML(true);
        this.isLoading = false;
      }
    });
  },

  methods: {
    /**
     * 初始化编辑器
     */
    doInit() {
      if (true) {
        return;
      }

      const me = this;
      const userToken = this.$cookies.get('userToken');
      const options = {
        width: me.width,
        height: me.height,
        toolbar: me.toolbar,
        placeholder: me.placeholder,
        cache: true,
        counter: '999999',
        delay: 500,
        mode: 'markdown-show',
        theme: 'classic',
        customEmoji: {
          '1': '😝'
        },
        preview: {
          mode: 'editor',
          hljs: {
            enable: true,
            style: 'github',
            lineNumber: true
          }
        },

        input(val) {
          me.$emit('input', val);
        },

        ctrlEnter(val) {
          me.$emit('input', val);
          me.$emit('submit', val);
        },

        upload: {
          accept: 'image/*',
          url: '/api/upload/editor?userToken=' + userToken,
          linkToImgUrl: '/api/upload/fetch?userToken=' + userToken,

          filename(name) {
            return name.replace(/\?|\\|\/|:|\||<|>|\*|\[|\]|\s+/g, '-');
          }

        }
      };
      this.vditor = new window.Vditor(me.editorId, options);
      this.vditor.setValue(this.value);
    },

    /**
     * 清空编辑器内容
     */
    clear() {
      if (this.vditor) {
        this.value = '';
        this.vditor.setValue('');
        this.clearCache();
      }
    },

    /**
     * 清理缓存
     */
    clearCache() {
      if (this.vditor) {
        this.vditor.clearCache();
      }
    }

  },

  head() {
    return {
      link: [{
        rel: 'stylesheet',
        href: '//cdn.jsdelivr.net/npm/vditor@2.1.0/dist/index.classic.css'
      }],
      script: [{
        src: '//cdn.jsdelivr.net/npm/vditor@2.1.0/dist/index.min.js'
      }]
    };
  }

});
// CONCATENATED MODULE: ./components/MarkdownEditor.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_MarkdownEditorvue_type_script_lang_js_ = (MarkdownEditorvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/_vue-loader@15.9.3@vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./components/MarkdownEditor.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_MarkdownEditorvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "6f3f59ba",
  "7f27a6be"
  
)

/* harmony default export */ var MarkdownEditor = __webpack_exports__["a"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=_id.js.map