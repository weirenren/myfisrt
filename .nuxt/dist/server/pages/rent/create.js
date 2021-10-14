exports.ids = [38];
exports.modules = {

/***/ 113:
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
  homeItemToJsonString(city, address, tags) {
    return {
      content_type: 0,
      from_type: 0,
      city,
      address,
      address_geo: address,
      tags
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

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/_vue-loader@15.9.3@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.9.3@vue-loader/lib??vue-loader-options!./pages/rent/create.vue?vue&type=template&id=e3e0fc7c&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"main"},[_vm._ssrNode("<div class=\"container main-container is-white left-main\" data-v-e3e0fc7c>","</div>",[_c('client-only',[_c('div',{staticClass:"left-container"},[_c('div',{staticClass:"widget"},[_c('div',{staticClass:"widget-header"},[_c('nav',{staticClass:"breadcrumb"},[_c('ul',[_c('li',[_c('a',{attrs:{"href":"/"}},[_vm._v("首页")])]),_vm._v(" "),_c('li',[_c('a',{attrs:{"href":'/user/' + _vm.user.id + '?tab=topics'}},[_vm._v(_vm._s(_vm.user.nickname))])]),_vm._v(" "),_c('li',{staticClass:"is-active"},[_c('a',{attrs:{"href":"#","aria-current":"page"}},[_vm._v("租房")])])])])]),_vm._v(" "),_c('div',{staticClass:"widget-content"},[_c('div',{staticClass:"field"},[_c('label',{staticClass:"label"},[_vm._v("标题:")]),_vm._v(" "),_c('div',{staticClass:"control"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.postForm.title),expression:"postForm.title"}],staticClass:"input is-small",attrs:{"type":"text","placeholder":"格式：[转租/直租/求租/找室友]出租xx区xx地x室xx元，[紧邻地铁站]"},domProps:{"value":(_vm.postForm.title)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.postForm, "title", $event.target.value)}}})])]),_vm._v(" "),_c('div',{staticClass:"field"},[_c('label',{staticClass:"label"},[_vm._v("详情:")]),_vm._v(" "),_c('div',{staticClass:"control"},[_c('textarea',{directives:[{name:"model",rawName:"v-model",value:(_vm.postForm.content),expression:"postForm.content"}],staticClass:"textarea is-small",attrs:{"placeholder":"详情内容建议包含：个人是否为租客、是否个人房源、房租位置、大小、户型、房客情况、价格、租期可否续租，联系方式等等"},domProps:{"value":(_vm.postForm.content)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.postForm, "content", $event.target.value)}}})])]),_vm._v(" "),_c('div',{staticClass:"field"},[_c('div',{staticClass:"control"},[_c('post-tweets',{attrs:{"on-image-upload-call-back":_vm.onImageUpload}})],1)]),_vm._v(" "),_c('div',{staticClass:"field"},[_c('label',{staticClass:"label"},[_vm._v("地址标签:")]),_vm._v(" "),_c('div',{staticClass:"control"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.postForm.address),expression:"postForm.address"}],staticClass:"input is-small",attrs:{"type":"text","placeholder":"小区名称或标志性地点（请写正确，方便距离计算，搜索匹配）"},domProps:{"value":(_vm.postForm.address)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.postForm, "address", $event.target.value)}}})])]),_vm._v(" "),_c('div',{staticStyle:{"position":"relative","z-index":"100","margin-top":"20px","margin-bottom":"20px","width":"60%"}},[(_vm.showMetraSelectDiv())?_c('vue-cascader-select',{staticClass:"is-small",attrs:{"options":_vm.options,"placeholder":"选择就近地铁站","value":_vm.value},on:{"clear":_vm.onClearSubway,"select":_vm.onSelectSubway}}):_vm._e()],1),_vm._v(" "),(_vm.captchaUrl)?_c('div',{staticClass:"field is-horizontal"},[_c('div',{staticClass:"field control has-icons-left"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.captchaCode),expression:"captchaCode"}],staticClass:"input",staticStyle:{"max-width":"150px","margin-right":"20px"},attrs:{"type":"text","placeholder":"验证码"},domProps:{"value":(_vm.captchaCode)},on:{"input":function($event){if($event.target.composing){ return; }_vm.captchaCode=$event.target.value}}}),_vm._v(" "),_c('span',{staticClass:"icon is-small is-left"},[_c('i',{staticClass:"iconfont icon-captcha"})])]),_vm._v(" "),_c('div',{staticClass:"field"},[_c('a',{on:{"click":_vm.showCaptcha}},[_c('img',{staticStyle:{"height":"40px"},attrs:{"src":_vm.captchaUrl}})])])]):_vm._e(),_vm._v(" "),_c('div',{staticClass:"field is-grouped"},[_c('div',{staticClass:"control"},[_c('a',{staticClass:"button is-success",class:{ 'is-loading': _vm.publishing },attrs:{"disabled":_vm.publishing},on:{"click":_vm.submitCreate}},[_vm._v("发表")])])])])])]),_vm._v(" "),_c('div',{staticClass:"right-container"})])],1)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/rent/create.vue?vue&type=template&id=e3e0fc7c&scoped=true&

// EXTERNAL MODULE: external "vue-cascader-select"
var external_vue_cascader_select_ = __webpack_require__(37);
var external_vue_cascader_select_default = /*#__PURE__*/__webpack_require__.n(external_vue_cascader_select_);

// EXTERNAL MODULE: ./common/jsonConventer.js
var jsonConventer = __webpack_require__(113);

// EXTERNAL MODULE: ./common/utils.js
var utils = __webpack_require__(40);

// EXTERNAL MODULE: ./common/GeoUtil.js
var GeoUtil = __webpack_require__(99);

// EXTERNAL MODULE: ./components/PostTweets.vue + 4 modules
var PostTweets = __webpack_require__(89);

// EXTERNAL MODULE: ./common/StorageUtil.js
var StorageUtil = __webpack_require__(96);

// CONCATENATED MODULE: ./node_modules/_babel-loader@8.1.0@babel-loader/lib??ref--2-0!./node_modules/_vue-loader@15.9.3@vue-loader/lib??vue-loader-options!./pages/rent/create.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



 // import TagInput from '~/components/TagInput'
// import MarkdownHelp from '~/components/MarkdownHelp'


 // import MarkdownEditor from '~/components/MarkdownEditor'

/* harmony default export */ var createvue_type_script_lang_js_ = ({
  middleware: 'authenticated',
  components: {
    VueCascaderSelect: external_vue_cascader_select_default.a,
    // TagInput,
    PostTweets: PostTweets["a" /* default */] // MarkdownHelp

  },

  async asyncData({
    $axios,
    query,
    store
  }) {// // 节点
    // const nodes = await $axios.get('/api/topic/nodes')
    // // 发帖标签
    // const config = store.state.config.config || {}
    // const nodeId = query.nodeId || config.defaultNodeId
    // let currentNode = null
    // if (nodeId) {
    //   try {
    //     currentNode = await $axios.get('/api/topic/node?nodeId=' + nodeId)
    //   } catch (e) {
    //     console.error(e)
    //   }
    // }
    // return {
    //   nodes,
    //   postForm: {
    //     nodeId: currentNode ? currentNode.nodeId : 0
    //   }
    // }
  },

  data() {
    return {
      publishing: false,
      // 当前是否正处于发布中...
      captchaId: '',
      captchaUrl: '',
      captchaCode: '',
      imageList: [],
      postForm: {
        nodeId: 2,
        title: '',
        tags: [],
        content: '',
        address: ''
      },
      subwaysAndRegions: [],
      value: '',
      geoStationId: -1,
      // 地铁站对应的id
      options: [{
        label: 'Frontend',
        disabled: true,
        // selectable: true,
        options: [{
          label: 'Vue',
          value: 'Vue'
        }, {
          label: 'React',
          value: 'React'
        }, {
          label: 'Svelte',
          value: 'Svelte'
        }]
      }, {
        label: 'Backend',
        value: 'Backend',
        disabled: true,
        // selectable: true,
        options: [{
          label: 'Ruby on Rails',
          value: 'Ruby on Rails'
        }, {
          label: 'NodeJS',
          value: 'NodeJS'
        }, {
          label: 'Elixir',
          value: 'Elixir'
        }]
      }]
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
    this.checkConfig();
  },

  methods: {
    async checkConfig() {
      const city = utils["a" /* default */].getCity();
      const subways = StorageUtil["a" /* default */].getSubwayAndRegion(city); // console.log('subways get :' + JSON.stringify(subways))

      if (!subways) {
        const [subwaysRegions] = await Promise.all([this.$axios.get('/api/topic/subway', {
          params: {
            city
          }
        })]); // console.log(
        //   'subwaysAndRegions get remote:' + JSON.stringify(subwaysRegions)
        // )

        this.subwaysAndRegions = subwaysRegions;

        if (subwaysRegions && subwaysRegions.length > 0) {
          StorageUtil["a" /* default */].setSubwayAndRegion(city, subwaysRegions);
        }
      } else {
        // console.log('subwaysAndRegions get cache:' + JSON.stringify(subways))
        this.subwaysAndRegions = subways;
      }

      this.checkSubwayStationData();
      this.formatSubwaySelectData();
    },

    showMetraSelectDiv() {
      return utils["a" /* default */].getCity() === '北京' || utils["a" /* default */].getCity() === '武汉';
    },

    onImageUpload(imageList) {
      this.imageList = imageList;
    },

    checkRentAddress(succCallback, errorCallback) {
      const address = this.postForm.address;

      if (address === '') {
        return;
      }

      GeoUtil["a" /* default */].requestAmapGeo(this.$axios, this.postForm.address, geoObject => {
        const result = GeoUtil["a" /* default */].getLatlonFromGeoRequest(geoObject); // console.log('requestAmapGeo:' + JSON.stringify(result))

        if (result.geohash === '' || result.latlon === '') {
          if (errorCallback) {
            errorCallback();
          }
        } else if (succCallback) {
          succCallback(result.latlon, result.geohash, result.district);
        }
      });
    },

    async submitTopic(latlon, geoHash, district) {
      try {
        const tags = this.value !== '' ? [this.value] : [];
        const transferContent = jsonConventer["a" /* default */].homeItemToJsonString('北京', this.postForm.address, tags.join(','));
        const topic = await this.$axios.post('/api/topic/rent/create', {
          city: utils["a" /* default */].getCity(),
          captchaId: this.captchaId,
          captchaCode: this.captchaCode,
          nodeId: this.postForm.nodeId,
          title: this.postForm.title,
          content: this.postForm.content,
          tags: tags.join(','),
          imageList: this.imageList.toString(),
          extraData: JSON.stringify(transferContent),
          latlon,
          geoHash,
          district,
          geoStationId: this.geoStationId
        }); // this.$refs.mdEditor.clearCache()

        this.$toast.success('提交成功！ 您可以进入详情页，点击分享按钮，实现一键分享入微信群', {
          duration: 2000,

          onComplete() {
            utils["a" /* default */].linkTo('/rent/' + topic.topicId);
          }

        });
      } catch (e) {
        console.log(e);
        await this.showCaptcha();
        this.publishing = false;
        this.$toast.error('提交失败：' + (e.message || e));
      }
    },

    submitCreate() {
      if (this.publishing) {
        this.$toast.error('正在提交中');
        return;
      }

      if (!this.postForm.title) {
        this.$toast.error('请输入标题');
        return;
      }

      if (!this.postForm.address) {
        this.$toast.error('请输入地点');
        return;
      }

      this.publishing = true;
      this.checkRentAddress((latlon, geohash, district) => {
        let distrctName = '';

        if (district.includes('区') && district.length > 2) {
          distrctName = district.substring(0, district.length - 1);
        } else {
          distrctName = district;
        } // console.log(
        //   'checkRentAddress success:' +
        //     latlon +
        //     ' ' +
        //     geohash +
        //     ' ' +
        //     distrctName
        // )


        this.submitTopic(latlon, geohash, distrctName);
      }, () => {
        this.publishing = false;
        this.$toast.error('提交失败，请输入有效地址。例如：[西二旗地铁站] 或者 [兰园小区]');
        console.log('checkRentAddress error:' + this.postForm.address);
      });
    },

    checkSubwayStationData() {
      const city = utils["a" /* default */].getCity();
      const subways = StorageUtil["a" /* default */].getSubwayAndRegion(city); // console.log('checkSubwayStationData:' + JSON.stringify(subways))

      if (subways) {
        const subwayDtype = 0;
        const ids = [];
        subways.forEach(item => {
          // 地铁
          if (item.dtype === subwayDtype) {
            const res = StorageUtil["a" /* default */].getStationList(city, subwayDtype, item.dataId);

            if (res) {} else {
              ids.push(item.dataId);
            }
          }
        });

        if (ids.length > 0) {
          this.requestStationList(subwayDtype, ids, city);
        }
      }
    },

    requestStationList(dtype, ids, city) {
      const params = {
        dtype,
        dataIds: ids.toString(),
        city
      };
      this.$axios.get('/api/topic/stationlist2', {
        params
      }).then(res => {
        if (res && res.length > 0) {
          // console.log('requestStationList:' + JSON.stringify(res))
          res.forEach(item => {
            if (item.stationlist) {
              StorageUtil["a" /* default */].setStationList(city, dtype, item.dataId, item.stationlist);
            }
          }); // StorageUtil.setStationList(city, dtype, dataId, res)

          this.formatSubwaySelectData();
        }
      }).catch(e => {
        console.log('create page, requestStationList error:' + JSON.stringify(e));
      });
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
    },

    onClearSubway(value) {
      this.value = '';
      this.geoStationId = -1;
    },

    onSelectSubway(value) {
      // console.log('select:' + JSON.stringify(value))
      if (value.value) {
        const arr = value.value.split('-');

        if (arr.length === 3) {
          this.geoStationId = arr[0];
          this.value = arr[1] + '-' + arr[2];
        }
      }
    },

    formatSubwaySelectData() {
      const result = [];
      const city = utils["a" /* default */].getCity();
      const arr = this.subwaysAndRegions;

      if (arr) {
        arr.forEach(item => {
          if (item.dtype === 0) {
            const options = [];
            const subwayStations = StorageUtil["a" /* default */].getStationList(city, 0, item.dataId);

            if (subwayStations) {
              subwayStations.forEach(station => {
                options.push({
                  label: station.name,
                  value: station.geoStationId + '-' + item.name + '-' + station.name
                });
              });
              result.push({
                label: item.name,
                value: item.name,
                disabled: true,
                options
              });
            }
          }
        });
      } // console.log('formatSubwaySelectData :' + JSON.stringify(result))


      this.options = result;
    },

    tweetsCreated(item) {
      this.$refs.tweetsLoadMore.unshiftResults(item);
    }

  },

  head() {
    return {
      title: this.$siteTitle('租房')
    };
  }

});
// CONCATENATED MODULE: ./pages/rent/create.vue?vue&type=script&lang=js&
 /* harmony default export */ var rent_createvue_type_script_lang_js_ = (createvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/_vue-loader@15.9.3@vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./pages/rent/create.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  rent_createvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "e3e0fc7c",
  "5ad18a1a"
  
)

/* harmony default export */ var create = __webpack_exports__["default"] = (component.exports);

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

/***/ 75:
/***/ (function(module, exports) {

// Exports
module.exports = {};


/***/ }),

/***/ 81:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/_vue-loader@15.9.3@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.9.3@vue-loader/lib??vue-loader-options!./components/vue-image-compressor.vue?vue&type=template&id=5fe71778&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('input',{ref:"imageInput",attrs:{"type":"file","accept":"image/*"},on:{"change":_vm.onChange}},[])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/vue-image-compressor.vue?vue&type=template&id=5fe71778&

// EXTERNAL MODULE: external "base64toblob"
var external_base64toblob_ = __webpack_require__(34);
var external_base64toblob_default = /*#__PURE__*/__webpack_require__.n(external_base64toblob_);

// CONCATENATED MODULE: ./node_modules/_babel-loader@8.1.0@babel-loader/lib??ref--2-0!./node_modules/_vue-loader@15.9.3@vue-loader/lib??vue-loader-options!./components/vue-image-compressor.vue?vue&type=script&lang=js&
//
//
//
//
//

/*! Copyright (c) 2016 Naufal Rabbani (http://github.com/BosNaufal)
 * Licensed Under MIT (http://opensource.org/licenses/MIT)
 *
 * Vue Image Compressor @ Version 0.0.1
 *
 * refs:
 * https://developer.mozilla.org/en-US/docs/Web/API/FileReader/readAsDataURL
 * https://davidwalsh.name/convert-canvas-image
 * https://beta.webcomponents.org/element/3mp3ri0r/cpol-image
 *
 */

/* harmony default export */ var vue_image_compressorvue_type_script_lang_js_ = ({
  props: {
    // Image Scale Percentage (1 - 100)
    scale: {
      type: Number,
      default: 100
    },
    // Image Scale Percentage (1 - 100)
    quality: {
      type: Number,
      default: 100
    },
    // Pass the files info when it's done
    done: {
      type: Function,
      default: () => {}
    }
  },

  data() {
    return {
      file: {},
      result: {},
      reader: {},
      imgSrc: ''
    };
  },

  watch: {
    // When Scale and Quality properties has changed, do Redraw
    scale() {
      return this.redraw();
    },

    quality() {
      return this.redraw();
    }

  },
  methods: {
    /*
        When Input File has changed
      */
    onChange(e) {
      // If There's no file choosen
      const file = e.target.files[0];
      if (!file) return false; // get the file

      this.file = e.target.files[0]; // Validation

      const type = this.file.type;
      const valid = type.includes('image'); // if (!valid) throw 'File Type Is Not Supported. Upload an image instead'
      // Make new FileReader

      this.reader = new FileReader(); // Convert the file to base64 text

      this.reader.readAsDataURL(this.file); // on reader load somthing...

      this.reader.onload = this.fileOnLoad;
    },

    /*
        Draw And Compress The Image
        @params {String} imgUrl
      */
    drawImage(imgUrl) {
      // Recreate Canvas Element
      const canvas = document.createElement('canvas');
      this.canvas = canvas; // Set Canvas Context

      const ctx = this.canvas.getContext('2d'); // Create New Image

      const img = new Image();
      img.src = imgUrl;

      img.onload = () => {
        // Image Size After Scaling
        const scale = this.scale / 100;
        const width = img.width * scale;
        const height = img.height * scale; // Set Canvas Height And Width According to Image Size And Scale

        this.canvas.setAttribute('width', width);
        this.canvas.setAttribute('height', height);
        ctx.drawImage(img, 0, 0, width, height); // Quality Of Image

        const quality = this.quality ? this.quality / 100 : 1; // If all files have been proceed

        const base64 = this.canvas.toDataURL('image/jpeg', quality);
        let fileName = this.result.file.name;
        const lastDot = fileName.lastIndexOf('.');
        fileName = fileName.substr(0, lastDot) + '.jpeg';
        const objToPass = {
          canvas: this.canvas,
          original: this.result,
          compressed: {
            blob: this.toBlob(base64),
            base64,
            name: fileName,
            file: this.buildFile(base64, fileName)
          }
        };
        const asize = Math.round(objToPass.compressed.file.size / 1000);
        objToPass.compressed.size = asize;
        objToPass.compressed.unit = 'kb';
        objToPass.compressed.type = 'image/jpeg';
        this.done(objToPass);
        this.$refs.imageInput.value = null;
      };
    },

    /*
        Redraw the canvas
      */
    redraw() {
      if (this.result.base64) {
        this.drawImage(this.result.base64);
      }
    },

    /*
        When The File in loaded
      */
    fileOnLoad() {
      // The File
      const {
        file
      } = this; // Make a fileInfo Object

      const fileInfo = {
        name: file.name,
        type: file.type,
        size: Math.round(file.size / 1000) + ' kB',
        base64: this.reader.result,
        file
      }; // Push it to the state

      this.result = fileInfo; // DrawImage

      this.drawImage(this.result.base64);
    },

    // Convert Base64 to Blob
    toBlob(imgUrl) {
      const blob = external_base64toblob_default()(imgUrl.split(',')[1], 'image/jpeg');
      const url = window.URL.createObjectURL(blob);
      return url;
    },

    buildFile(base64, name) {
      const blob = external_base64toblob_default()(base64.split(',')[1], 'image/jpeg');
      return new File([blob], name, {
        type: 'image/jpeg'
      });
    } // Convert Blob To File
    // buildFile(blob, name) {
    //   return new File([blob], name)
    // }


  }
});
// CONCATENATED MODULE: ./components/vue-image-compressor.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_vue_image_compressorvue_type_script_lang_js_ = (vue_image_compressorvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/_vue-loader@15.9.3@vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./components/vue-image-compressor.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_vue_image_compressorvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "49124c63"
  
)

/* harmony default export */ var vue_image_compressor = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 83:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_15_9_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_PostTweets_vue_vue_type_style_index_0_id_fe10371c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(75);
/* harmony import */ var _node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_15_9_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_PostTweets_vue_vue_type_style_index_0_id_fe10371c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_15_9_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_PostTweets_vue_vue_type_style_index_0_id_fe10371c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_15_9_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_PostTweets_vue_vue_type_style_index_0_id_fe10371c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_15_9_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_PostTweets_vue_vue_type_style_index_0_id_fe10371c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_15_9_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_PostTweets_vue_vue_type_style_index_0_id_fe10371c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 89:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/_vue-loader@15.9.3@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.9.3@vue-loader/lib??vue-loader-options!./components/PostTweets.vue?vue&type=template&id=fe10371c&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"post-tweets-wrapper"},[_vm._ssrNode("<div class=\"tweets-box\" data-v-fe10371c>","</div>",[_vm._ssrNode("<div class=\"box-footer\" data-v-fe10371c><div class=\"bui-left\" data-v-fe10371c><span class=\"action-btn\" data-v-fe10371c><i class=\"iconfont icon-image\" data-v-fe10371c></i> <span data-v-fe10371c>本地图片上传</span></span></div></div> "),_vm._ssrNode("<div class=\"uploader-popup\""+(_vm._ssrStyle(null,null, { display: (_vm.showUploader) ? '' : 'none' }))+" data-v-fe10371c>","</div>",[_vm._ssrNode("<div class=\"imgUploadBox\" data-v-fe10371c>","</div>",[_vm._ssrNode("<p class=\"uploader-title\" data-v-fe10371c>本地上传</p> <p class=\"uploader-meta\" data-v-fe10371c>"+_vm._ssrEscape("\n          共 "+_vm._s(_vm.imageCount)+" 张，还能上传 "+_vm._s(_vm.maxImageCount - _vm.imageCount)+" 张\n        ")+"</p> <i class=\"close-popup iconfont icon-close\" data-v-fe10371c></i> "),_vm._ssrNode("<div class=\"upload-box\" data-v-fe10371c>","</div>",[_vm._ssrNode("<form style=\"display: none;\" data-v-fe10371c>","</form>",[_c('image-compressor',{ref:"compressor",staticClass:"compressor",attrs:{"done":_vm.getFiles,"scale":_vm.scale,"quality":_vm.quality}})],1),_vm._ssrNode(" <ul class=\"upload-img-list\" data-v-fe10371c>"+(_vm._ssrList((_vm.images),function(image,i){return ("<li class=\"upload-img-item\" data-v-fe10371c><img"+(_vm._ssrAttr("src",image))+" data-v-fe10371c> <i class=\"iconfont icon-close remove\" data-v-fe10371c></i></li>")}))+" "+((_vm.imageCount < _vm.maxImageCount)?("<li class=\"upload-img-item upload-img-add\" data-v-fe10371c><i class=\"iconfont icon-add\" data-v-fe10371c></i></li>"):"<!---->")+"</ul>")],2)],2)])],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/PostTweets.vue?vue&type=template&id=fe10371c&scoped=true&

// EXTERNAL MODULE: ./components/vue-image-compressor.vue + 4 modules
var vue_image_compressor = __webpack_require__(81);

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
//
//
//
//
//
//
//

/* harmony default export */ var PostTweetsvue_type_script_lang_js_ = ({
  components: {
    imageCompressor: vue_image_compressor["a" /* default */]
  },
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
      scale: 100,
      quality: 50,
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
    getFiles(obj) {
      const img = obj.compressed.file;

      if (img) {
        // console.log('getFiles original:' + JSON.stringify(obj.original))
        const size = obj.compressed.size;
        console.log('getFiles original:' + size);

        if (size / 1000 < 1) {
          this.uploadFiles([img]);
        } else {
          this.$toast.error('上传文件过大:' + obj.compressed.size + '' + obj.compressed.unit);
        }
      } // this.original = obj.original
      // this.compressed = obj.compressed

    },

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
      const compressor = this.$refs.compressor.$el;
      compressor.click();
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
      if (!files) return; // console.log('handleImageUploadChange:' + JSON.stringify(files))

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
  
  var style0 = __webpack_require__(83)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_PostTweetsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "fe10371c",
  "673911c7"
  
)

/* harmony default export */ var PostTweets = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 96:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _common_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(40);
 // import TagInput from '~/components/TagInput'
// import MarkdownHelp from '~/components/MarkdownHelp'

class StorageUtil {
  getStorage() {
    return window.localStorage;
  }

  setConfigVersion(versionCode) {
    this.setItem('vcode', versionCode);
  }

  getConfigVersion() {
    return this.getItem('vcode');
  }

  getCurrentCity() {
    return this.getItem('city');
  }

  setCurrentCity(city) {
    this.setItem('city', city);
  }

  setSubwayAndRegion(city, json) {
    this.setItem(city + '_subway_region', json);
  }

  getSubwayAndRegion(city) {
    return this.getItem(city + '_subway_region');
  }

  getStationList(city, dtype, dataId) {
    return this.getItem(city + '_' + dtype + '_' + dataId);
  }

  setStationList(city, dtype, dataId, json) {
    this.setItem(city + '_' + dtype + '_' + dataId, json);
  }

  getItem(key) {
    const storage = this.getStorage();

    try {
      return JSON.parse(storage.getItem(key));
    } catch (err) {
      return null;
    }
  }

  setItem(key, val) {
    this.getStorage().setItem(key, JSON.stringify(val));
  }

  removeItem(key) {
    this.getStorage().removeItem(key);
  }

  clear() {
    const storage = this.getStorage();
    storage.clear();
  }

}

/* harmony default export */ __webpack_exports__["a"] = (new StorageUtil());

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _common_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(40);
 // import TagInput from '~/components/TagInput'
// import MarkdownHelp from '~/components/MarkdownHelp'

const Geohash = __webpack_require__(35);

class GeoUtil {
  convertLatlonToGeohash(latlon) {
    return Geohash.encode(latlon[0], latlon[1], 11);
  }

  getLatlonFromGeoRequest(geoObject) {
    let geohashStr = '';
    let latlonStr = '';
    let district = '';

    if (geoObject.geocodes.length > 0) {
      const geocode = geoObject.geocodes[0]; // console.log('geocode:' + JSON.stringify(geocode))

      if (geocode.location !== undefined) {
        district = geocode.district;
        const latlon = geocode.location.split(',');
        geohashStr = this.convertLatlonToGeohash(latlon);
        latlonStr = geocode.location; // resultList.push({
        //   name: address,
        //   latlon: lotlon_str,
        //   geohash: geohash_str
        // })
        // console.log('result:' + geohashStr)
      }
    }

    return {
      geohash: geohashStr,
      latlon: latlonStr,
      district
    };
  }

  requestAmapGeo(axios, address, callback) {
    const amapapi = '/v3/geocode/geo?key=06a39860cdf741c5dc5ba1242112ab72&city=' + _common_utils__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].getCity() + '&address=' + address;
    axios.get(amapapi).then(function (response) {// console.log('result:' + response)
    }).catch(function (reponse) {
      if (callback) {
        callback(reponse);
      }
    });
  }

  hasRole(user, role) {
    if (!user || !user.roles || !user.roles.length) {
      return false;
    }

    for (let i = 0; i < user.roles.length; i++) {
      if (user.roles[i] === role) {
        return true;
      }
    }

    return false;
  }

  hasAnyRole(user, ...roles) {
    if (!roles || !roles.length) {
      return false;
    }

    for (let i = 0; i < roles.length; i++) {
      if (this.hasRole(user, roles[i])) {
        return true;
      }
    }

    return false;
  }

  isOwner(user) {
    return this.hasRole(user, 'owner');
  }

  isAdmin(user) {
    return this.hasRole(user, 'admin');
  }

}

/* harmony default export */ __webpack_exports__["a"] = (new GeoUtil());

/***/ })

};;
//# sourceMappingURL=create.js.map