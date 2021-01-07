exports.ids = [39];
exports.modules = {

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// content_type : 0 == home data; 1 == love data
class JsonConventer {
  //     let username = req.body['username'];
  // let from_type = req.body['from_type']; //
  // let city = req.body['city'];
  // let from = req.body['from'];
  // let title = req.body['title'];
  // let content = req.body['content'];
  // let imgurl_list = req.body['imgurl_list'];
  // let address = req.body['address'];
  // let address_geo = req.body['address_geo'];
  // from_type == 0 本地创建；from_type == 1 豆瓣租房
  homeItemToJsonString(city, address) {
    return {
      content_type: 0,
      from_type: 0,
      city,
      address,
      address_geo: address
    };
  } // local_address: { type: String, default: "" },
  // local_gender: { type: Number, default: 0 },// 0: boy; 1: girl
  // local_hometown: { type: String, default: "" }, // 入职地点
  // local_age: { type: String, default: 0 },
  // local_height: { type: String, default: 0.0 },
  // local_edu: { type: String, default: "" },
  // local_workyears: { type: String, default: "" },
  // local_job: { type: String, default: "" },
  // local_wechat: { type: String, default: "" },
  // local_otherinfor: { type: String, default: "" },
  // local_imgurl_list: { type: String, default: '' }, // 个人照片
  // condi_gender: { type: Number, default: 1 },
  // condi_age: { type: String, default: 0 },
  // condi_height: { type: String, default: 0 },
  // condi_edu: { type: String, default: "" },
  // condi_hometown: { type: String, default: "" },
  // condi_otherinfor: { type: String, default: "" },


  loveItemToJsonString() {
    return {};
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

}

/* harmony default export */ __webpack_exports__["a"] = (new JsonConventer());

/***/ }),

/***/ 214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/_vue-loader@15.9.3@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.9.3@vue-loader/lib??vue-loader-options!./pages/rent/edit/_id.vue?vue&type=template&id=488bb6ec&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"main"},[_vm._ssrNode("<div class=\"container main-container is-white left-main\" data-v-488bb6ec>","</div>",[_vm._ssrNode("<div class=\"left-container\" data-v-488bb6ec>","</div>",[_vm._ssrNode("<div class=\"widget\" data-v-488bb6ec>","</div>",[_vm._ssrNode("<div class=\"widget-header\" data-v-488bb6ec><nav class=\"breadcrumb\" data-v-488bb6ec><ul data-v-488bb6ec><li data-v-488bb6ec><a href=\"/\" data-v-488bb6ec>首页</a></li> <li data-v-488bb6ec><a"+(_vm._ssrAttr("href",'/user/' + _vm.currentUser.id + '?tab=topics'))+" data-v-488bb6ec>"+_vm._ssrEscape(_vm._s(_vm.currentUser.nickname))+"</a></li> <li class=\"is-active\" data-v-488bb6ec><a href=\"#\" aria-current=\"page\" data-v-488bb6ec>主题</a></li></ul></nav></div> "),_vm._ssrNode("<div class=\"widget-content\" data-v-488bb6ec>","</div>",[_vm._ssrNode("<div class=\"field is-horizontal\" data-v-488bb6ec><div class=\"field-body\" data-v-488bb6ec><div class=\"field\" style=\"width:100%;\" data-v-488bb6ec><input type=\"text\" placeholder=\"请输入标题\""+(_vm._ssrAttr("value",(_vm.postForm.title)))+" class=\"input\" data-v-488bb6ec></div></div></div> <div class=\"field\" data-v-488bb6ec><label class=\"label\" data-v-488bb6ec>详情:</label> <div class=\"control\" data-v-488bb6ec><textarea placeholder=\"Large textarea\" class=\"textarea is-large\" data-v-488bb6ec>"+_vm._ssrEscape(_vm._s(_vm.postForm.content))+"</textarea></div></div> "),_vm._ssrNode("<div class=\"field\" data-v-488bb6ec>","</div>",[_vm._ssrNode("<label class=\"label\" data-v-488bb6ec>图片:</label> "),_vm._ssrNode("<div class=\"control\" data-v-488bb6ec>","</div>",[_c('post-tweets',{attrs:{"imageList":_vm.postForm.imageList,"onImageUploadCallBack":_vm.onImageUpload}})],1)],2),_vm._ssrNode(" <div class=\"field\" data-v-488bb6ec><label class=\"label\" data-v-488bb6ec>地址标签:</label> <div class=\"control\" data-v-488bb6ec><input type=\"text\" placeholder=\"小区名称或标志性地点（请写正确，方便距离计算，搜索匹配）\""+(_vm._ssrAttr("value",(_vm.postForm.extraData.address)))+" class=\"input\" data-v-488bb6ec></div></div> <div class=\"field is-grouped\" data-v-488bb6ec><div class=\"control\" data-v-488bb6ec><a"+(_vm._ssrAttr("disabled",_vm.publishing))+(_vm._ssrClass("button is-success",{ 'is-loading': _vm.publishing }))+" data-v-488bb6ec>提交更改</a></div></div>")],2)],2)]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"right-container\" data-v-488bb6ec>","</div>",[_c('markdown-help')],1)],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/rent/edit/_id.vue?vue&type=template&id=488bb6ec&scoped=true&

// EXTERNAL MODULE: ./common/utils.js
var utils = __webpack_require__(39);

// EXTERNAL MODULE: ./components/TagInput.vue + 4 modules
var TagInput = __webpack_require__(75);

// EXTERNAL MODULE: ./components/MarkdownHelp.vue + 4 modules
var MarkdownHelp = __webpack_require__(77);

// EXTERNAL MODULE: ./components/PostTweets.vue + 4 modules
var PostTweets = __webpack_require__(85);

// EXTERNAL MODULE: ./common/jsonConventer.js
var jsonConventer = __webpack_require__(109);

// CONCATENATED MODULE: ./node_modules/_babel-loader@8.1.0@babel-loader/lib??ref--2-0!./node_modules/_vue-loader@15.9.3@vue-loader/lib??vue-loader-options!./pages/rent/edit/_id.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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



/* harmony default export */ var _idvue_type_script_lang_js_ = ({
  middleware: 'authenticated',
  components: {
    // TagInput,
    MarkdownHelp: MarkdownHelp["a" /* default */],
    PostTweets: PostTweets["a" /* default */] // MarkdownEditor

  },

  async asyncData({
    $axios,
    params
  }) {
    const [topic, nodes] = await Promise.all([$axios.get('/api/topic/edit/' + params.id), $axios.get('/api/topic/nodes')]);
    topic.extraData = JSON.parse(topic.extraData);
    let images = [];

    if (topic.imageList) {
      images = topic.imageList.split(',');
    } // console.log('topic:' + JSON.stringify(topic))


    return {
      topic,
      nodes,
      postForm: {
        nodeId: topic.nodeId,
        title: topic.title,
        tags: topic.tags,
        content: topic.content,
        imageList: images,
        extraData: topic.extraData
      }
    };
  },

  data() {
    return {
      publishing: false,
      // 当前是否正处于发布中...
      imageList: [],
      postForm: {
        nodeId: 0,
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

  mounted() {},

  methods: {
    onImageUpload(imageList) {
      this.imageList = imageList; // console.log('extraData:' + JSON.stringify(this.postForm.extraData))
    },

    async submitCreate() {
      const me = this;

      if (me.publishing) {
        return;
      }

      me.publishing = true;

      try {
        const transferContent = jsonConventer["a" /* default */].homeItemToJsonString('北京', this.postForm.extraData.address);
        const topic = await this.$axios.post('/api/topic/edit/' + this.topic.topicId, {
          nodeId: this.postForm.nodeId,
          title: this.postForm.title,
          content: this.postForm.content,
          tags: this.postForm.tags ? this.postForm.tags.join(',') : '',
          imageList: this.imageList.toString(),
          extraData: JSON.stringify(transferContent)
        });
        this.$toast.success('提交成功', {
          duration: 1000,

          onComplete() {
            utils["a" /* default */].linkTo('/rent/' + topic.topicId);
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
      title: this.$siteTitle('修改话题')
    };
  }

});
// CONCATENATED MODULE: ./pages/rent/edit/_id.vue?vue&type=script&lang=js&
 /* harmony default export */ var edit_idvue_type_script_lang_js_ = (_idvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/_vue-loader@15.9.3@vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./pages/rent/edit/_id.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  edit_idvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "488bb6ec",
  "6d49a1ec"
  
)

/* harmony default export */ var _id = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 39:
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

/***/ 60:
/***/ (function(module, exports) {

// Exports
module.exports = {};


/***/ }),

/***/ 66:
/***/ (function(module, exports) {

// Exports
module.exports = {};


/***/ }),

/***/ 69:
/***/ (function(module, exports) {

// Exports
module.exports = {};


/***/ }),

/***/ 73:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_15_9_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_TagInput_vue_vue_type_style_index_0_id_6dde72f9_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(60);
/* harmony import */ var _node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_15_9_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_TagInput_vue_vue_type_style_index_0_id_6dde72f9_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_15_9_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_TagInput_vue_vue_type_style_index_0_id_6dde72f9_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_15_9_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_TagInput_vue_vue_type_style_index_0_id_6dde72f9_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_15_9_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_TagInput_vue_vue_type_style_index_0_id_6dde72f9_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_15_9_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_TagInput_vue_vue_type_style_index_0_id_6dde72f9_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 75:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/_vue-loader@15.9.3@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.9.3@vue-loader/lib??vue-loader-options!./components/TagInput.vue?vue&type=template&id=6dde72f9&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"select-tags"},[_vm._ssrNode("<input id=\"tags\" name=\"tags\" type=\"hidden\""+(_vm._ssrAttr("value",(_vm.tags)))+" data-v-6dde72f9> <div class=\"tags-selected\" data-v-6dde72f9>"+(_vm._ssrList((_vm.tags),function(tag){return ("<span class=\"tag-item\" data-v-6dde72f9><span class=\"text\" data-v-6dde72f9>"+_vm._ssrEscape(_vm._s(tag))+"<i"+(_vm._ssrAttr("data-name",tag))+" class=\"iconfont icon-close\" data-v-6dde72f9></i></span></span>")}))+"</div> <input"+(_vm._ssrAttr("placeholder",'标签（用逗号分隔，最多' + _vm.maxTagCount + '个）'))+" type=\"text\""+(_vm._ssrAttr("value",(_vm.inputTag)))+" class=\"input\" data-v-6dde72f9> "+((_vm.autocompleteTags.length > 0)?("<div class=\"autocomplete-tags\" data-v-6dde72f9><div class=\"tags-container\" data-v-6dde72f9><section class=\"tag-section\" data-v-6dde72f9>"+(_vm._ssrList((_vm.autocompleteTags),function(item,index){return ("<div"+(_vm._ssrClass("tag-item",{ active: index === _vm.selectIndex }))+" data-v-6dde72f9>"+_vm._ssrEscape(_vm._s(item))+"</div>")}))+"</section></div></div>"):"<!---->")+" "+((_vm.showRecommendTags)?("<div class=\"recommend-tags\" data-v-6dde72f9><div class=\"tags-container\" data-v-6dde72f9><div class=\"header\" data-v-6dde72f9><span data-v-6dde72f9>推荐标签</span> <span class=\"close-recommend\" data-v-6dde72f9><i class=\"iconfont icon-close\" data-v-6dde72f9></i></span></div> "+(_vm._ssrList((_vm.recommendTags),function(tag){return ("<a class=\"tag-item\" data-v-6dde72f9>"+_vm._ssrEscape(_vm._s(tag))+"</a>")}))+"</div></div>"):"<!---->"))])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/TagInput.vue?vue&type=template&id=6dde72f9&scoped=true&

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
/* harmony default export */ var TagInputvue_type_script_lang_js_ = ({
  props: {
    value: {
      type: Array,

      default() {
        return [];
      }

    },
    suggestTags: {
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
      maxWordCount: 5,
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
      return this.suggestTags; // return this.$store.state.config.config.recommendTags
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
  
  var style0 = __webpack_require__(73)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_TagInputvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "6dde72f9",
  "d9b14516"
  
)

/* harmony default export */ var TagInput = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 76:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_15_9_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_MarkdownHelp_vue_vue_type_style_index_0_id_29e12336_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66);
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
  
  var style0 = __webpack_require__(76)
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

/***/ 79:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_15_9_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_PostTweets_vue_vue_type_style_index_0_id_6f836c08_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69);
/* harmony import */ var _node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_15_9_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_PostTweets_vue_vue_type_style_index_0_id_6f836c08_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_15_9_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_PostTweets_vue_vue_type_style_index_0_id_6f836c08_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_15_9_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_PostTweets_vue_vue_type_style_index_0_id_6f836c08_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_15_9_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_PostTweets_vue_vue_type_style_index_0_id_6f836c08_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_15_9_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_PostTweets_vue_vue_type_style_index_0_id_6f836c08_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 85:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/_vue-loader@15.9.3@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.9.3@vue-loader/lib??vue-loader-options!./components/PostTweets.vue?vue&type=template&id=6f836c08&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"post-tweets-wrapper"},[_vm._ssrNode("<div class=\"tweets-box\" data-v-6f836c08><div class=\"box-footer\" data-v-6f836c08><div class=\"bui-left\" data-v-6f836c08><span class=\"action-btn\" data-v-6f836c08><i class=\"iconfont icon-image\" data-v-6f836c08></i> <span data-v-6f836c08>本地图片上传</span></span></div></div> <div class=\"uploader-popup\""+(_vm._ssrStyle(null,null, { display: (_vm.showUploader) ? '' : 'none' }))+" data-v-6f836c08><div class=\"imgUploadBox\" data-v-6f836c08><p class=\"uploader-title\" data-v-6f836c08>本地上传</p> <p class=\"uploader-meta\" data-v-6f836c08>"+_vm._ssrEscape("\n          共 "+_vm._s(_vm.imageCount)+" 张，还能上传 "+_vm._s(_vm.maxImageCount - _vm.imageCount)+" 张\n        ")+"</p> <i class=\"close-popup iconfont icon-close\" data-v-6f836c08></i> <div class=\"upload-box\" data-v-6f836c08><form style=\"display: none;\" data-v-6f836c08><input type=\"file\" accept=\"image/*\" multiple=\"multiple\" data-v-6f836c08></form> <ul class=\"upload-img-list\" data-v-6f836c08>"+(_vm._ssrList((_vm.images),function(image,i){return ("<li class=\"upload-img-item\" data-v-6f836c08><img"+(_vm._ssrAttr("src",image))+" data-v-6f836c08> <i class=\"iconfont icon-close remove\" data-v-6f836c08></i></li>")}))+" "+((_vm.imageCount < _vm.maxImageCount)?("<li class=\"upload-img-item upload-img-add\" data-v-6f836c08><i class=\"iconfont icon-add\" data-v-6f836c08></i></li>"):"<!---->")+"</ul></div></div></div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/PostTweets.vue?vue&type=template&id=6f836c08&scoped=true&

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
      maxImageCount: 6
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
    if (this.imageList && this.imageList.length > 0) {
      this.images = this.imageList;
    } // console.log('imageList:' + this.images)

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
        this.$toast.success('发布成功, 可以复制帖子分享微信群');
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

      if (items !== undefined && items && items.length) {
        for (let i = 0; i < items.length; i++) {
          if (items[i].type && items[i].type.includes('image')) {
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
  
  var style0 = __webpack_require__(79)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_PostTweetsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "6f836c08",
  "673911c7"
  
)

/* harmony default export */ var PostTweets = __webpack_exports__["a"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=_id.js.map