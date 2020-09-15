exports.ids = [46];
exports.modules = {

/***/ 171:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/_vue-loader@15.9.3@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.9.3@vue-loader/lib??vue-loader-options!./pages/topic/create.vue?vue&type=template&id=245a78a9&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"main"},[_vm._ssrNode("<div class=\"container main-container is-white left-main\" data-v-245a78a9>","</div>",[_vm._ssrNode("<div class=\"left-container\" data-v-245a78a9>","</div>",[_vm._ssrNode("<div class=\"widget\" data-v-245a78a9>","</div>",[_vm._ssrNode("<div class=\"widget-header\" data-v-245a78a9><nav class=\"breadcrumb\" data-v-245a78a9><ul data-v-245a78a9><li data-v-245a78a9><a href=\"/\" data-v-245a78a9>首页</a></li> <li data-v-245a78a9><a"+(_vm._ssrAttr("href",'/user/' + _vm.user.id + '?tab=topics'))+" data-v-245a78a9>"+_vm._ssrEscape(_vm._s(_vm.user.nickname))+"</a></li> <li class=\"is-active\" data-v-245a78a9><a href=\"#\" aria-current=\"page\" data-v-245a78a9>主题</a></li></ul></nav></div> "),_vm._ssrNode("<div class=\"widget-content\" data-v-245a78a9>","</div>",[_vm._ssrNode("<div class=\"field is-horizontal\" data-v-245a78a9>","</div>",[_vm._ssrNode("<div class=\"field-body\" data-v-245a78a9>","</div>",[_vm._ssrNode("<div class=\"field\" style=\"width:100%;\" data-v-245a78a9><input type=\"text\" placeholder=\"请输入标题\""+(_vm._ssrAttr("value",(_vm.postForm.title)))+" class=\"input\" data-v-245a78a9></div> "),_vm._ssrNode("<div class=\"field\" data-v-245a78a9>","</div>",[_vm._ssrNode("<div class=\"select\" data-v-245a78a9>","</div>",[_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.postForm.nodeId),expression:"postForm.nodeId"}],on:{"change":function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.$set(_vm.postForm, "nodeId", $event.target.multiple ? $$selectedVal : $$selectedVal[0])}}},[_c('option',{attrs:{"value":"0"}},[_vm._v("选择节点")]),_vm._v(" "),_vm._l((_vm.nodes),function(node){return _c('option',{key:node.nodeId,domProps:{"value":node.nodeId}},[_vm._v(_vm._s(node.name)+"\n                    ")])})],2)])])],2)]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"field\" data-v-245a78a9>","</div>",[_vm._ssrNode("<div class=\"control\" data-v-245a78a9>","</div>",[_c('markdown-editor',{ref:"mdEditor",attrs:{"editor-id":"topicCreateEditor","placeholder":"可空，将图片复制或拖入编辑器可上传"},model:{value:(_vm.postForm.content),callback:function ($$v) {_vm.$set(_vm.postForm, "content", $$v)},expression:"postForm.content"}})],1)]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"field\" data-v-245a78a9>","</div>",[_vm._ssrNode("<div class=\"control\" data-v-245a78a9>","</div>",[_c('tag-input',{model:{value:(_vm.postForm.tags),callback:function ($$v) {_vm.$set(_vm.postForm, "tags", $$v)},expression:"postForm.tags"}})],1)]),_vm._ssrNode(" "+((_vm.captchaUrl)?("<div class=\"field is-horizontal\" data-v-245a78a9><div class=\"field control has-icons-left\" data-v-245a78a9><input type=\"text\" placeholder=\"验证码\""+(_vm._ssrAttr("value",(_vm.captchaCode)))+" class=\"input\" style=\"max-width: 150px; margin-right: 20px;\" data-v-245a78a9> <span class=\"icon is-small is-left\" data-v-245a78a9><i class=\"iconfont icon-captcha\" data-v-245a78a9></i></span></div> <div class=\"field\" data-v-245a78a9><a data-v-245a78a9><img"+(_vm._ssrAttr("src",_vm.captchaUrl))+" style=\"height: 40px;\" data-v-245a78a9></a></div></div>"):"<!---->")+" <div class=\"field is-grouped\" data-v-245a78a9><div class=\"control\" data-v-245a78a9><a"+(_vm._ssrAttr("disabled",_vm.publishing))+(_vm._ssrClass("button is-success",{ 'is-loading': _vm.publishing }))+" data-v-245a78a9>发表话题</a></div></div>")],2)],2)]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"right-container\" data-v-245a78a9>","</div>",[_c('markdown-help')],1)],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/topic/create.vue?vue&type=template&id=245a78a9&scoped=true&

// EXTERNAL MODULE: ./common/utils.js
var utils = __webpack_require__(37);

// EXTERNAL MODULE: ./components/TagInput.vue + 4 modules
var TagInput = __webpack_require__(73);

// EXTERNAL MODULE: ./components/MarkdownHelp.vue + 4 modules
var MarkdownHelp = __webpack_require__(77);

// EXTERNAL MODULE: ./components/MarkdownEditor.vue + 4 modules
var MarkdownEditor = __webpack_require__(82);

// CONCATENATED MODULE: ./node_modules/_babel-loader@8.1.0@babel-loader/lib??ref--2-0!./node_modules/_vue-loader@15.9.3@vue-loader/lib??vue-loader-options!./pages/topic/create.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ var createvue_type_script_lang_js_ = ({
  middleware: 'authenticated',
  components: {
    TagInput: TagInput["a" /* default */],
    MarkdownHelp: MarkdownHelp["a" /* default */],
    MarkdownEditor: MarkdownEditor["a" /* default */]
  },

  async asyncData({
    $axios,
    query,
    store
  }) {
    // 节点
    const nodes = await $axios.get('/api/topic/nodes'); // 发帖标签

    const config = store.state.config.config || {};
    const nodeId = query.nodeId || config.defaultNodeId;
    let currentNode = null;

    if (nodeId) {
      try {
        currentNode = await $axios.get('/api/topic/node?nodeId=' + nodeId);
      } catch (e) {
        console.error(e);
      }
    }

    return {
      nodes,
      postForm: {
        nodeId: currentNode ? currentNode.nodeId : 0
      }
    };
  },

  data() {
    return {
      publishing: false,
      // 当前是否正处于发布中...
      captchaId: '',
      captchaUrl: '',
      captchaCode: '',
      postForm: {
        nodeId: 0,
        title: '',
        tags: [],
        content: ''
      }
    };
  },

  computed: {
    user() {
      return this.$store.state.user.current;
    },

    config() {
      return this.$store.state.config.config;
    }

  },

  mounted() {
    this.showCaptcha();
  },

  methods: {
    async submitCreate() {
      if (this.publishing) {
        return;
      }

      if (!this.postForm.title) {
        this.$toast.error('请输入标题');
        return;
      }

      if (!this.postForm.nodeId) {
        this.$toast.error('请选择节点');
        return;
      }

      this.publishing = true;

      try {
        const topic = await this.$axios.post('/api/topic/create', {
          captchaId: this.captchaId,
          captchaCode: this.captchaCode,
          nodeId: this.postForm.nodeId,
          title: this.postForm.title,
          content: this.postForm.content,
          tags: this.postForm.tags ? this.postForm.tags.join(',') : ''
        });
        this.$refs.mdEditor.clearCache();
        this.$toast.success('提交成功', {
          duration: 1000,

          onComplete() {
            utils["a" /* default */].linkTo('/topic/' + topic.topicId);
          }

        });
      } catch (e) {
        await this.showCaptcha();
        this.publishing = false;
        this.$toast.error('提交失败：' + (e.message || e));
      }
    },

    async showCaptcha() {
      if (this.config.topicCaptcha) {
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
      }
    }

  },

  head() {
    return {
      title: this.$siteTitle('发表话题')
    };
  }

});
// CONCATENATED MODULE: ./pages/topic/create.vue?vue&type=script&lang=js&
 /* harmony default export */ var topic_createvue_type_script_lang_js_ = (createvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/_vue-loader@15.9.3@vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./pages/topic/create.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  topic_createvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "245a78a9",
  "bc4a1a6a"
  
)

/* harmony default export */ var create = __webpack_exports__["default"] = (component.exports);

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

/***/ 60:
/***/ (function(module, exports) {

// Exports
module.exports = {};


/***/ }),

/***/ 64:
/***/ (function(module, exports) {

// Exports
module.exports = {};


/***/ }),

/***/ 71:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_15_9_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_TagInput_vue_vue_type_style_index_0_id_cf173526_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(60);
/* harmony import */ var _node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_15_9_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_TagInput_vue_vue_type_style_index_0_id_cf173526_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_15_9_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_TagInput_vue_vue_type_style_index_0_id_cf173526_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_15_9_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_TagInput_vue_vue_type_style_index_0_id_cf173526_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_15_9_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_TagInput_vue_vue_type_style_index_0_id_cf173526_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_15_9_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_TagInput_vue_vue_type_style_index_0_id_cf173526_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 73:
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
  
  var style0 = __webpack_require__(71)
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

/***/ 75:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_15_9_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_MarkdownHelp_vue_vue_type_style_index_0_id_29e12336_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(64);
/* harmony import */ var _node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_15_9_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_MarkdownHelp_vue_vue_type_style_index_0_id_29e12336_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_15_9_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_MarkdownHelp_vue_vue_type_style_index_0_id_29e12336_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_15_9_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_MarkdownHelp_vue_vue_type_style_index_0_id_29e12336_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_15_9_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_MarkdownHelp_vue_vue_type_style_index_0_id_29e12336_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_15_9_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_MarkdownHelp_vue_vue_type_style_index_0_id_29e12336_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 77:
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
  
  var style0 = __webpack_require__(75)
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

/***/ 82:
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
//# sourceMappingURL=create.js.map