exports.ids = [23];
exports.modules = {

/***/ 182:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/_vue-loader@15.9.3@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.9.3@vue-loader/lib??vue-loader-options!./pages/article/redirect/_id.vue?vue&type=template&id=c045fc30&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/article/redirect/_id.vue?vue&type=template&id=c045fc30&

// CONCATENATED MODULE: ./node_modules/_babel-loader@8.1.0@babel-loader/lib??ref--2-0!./node_modules/_vue-loader@15.9.3@vue-loader/lib??vue-loader-options!./pages/article/redirect/_id.vue?vue&type=script&lang=js&
//
//
//
//
/* harmony default export */ var _idvue_type_script_lang_js_ = ({
  async asyncData({
    $axios,
    params,
    redirect,
    error
  }) {
    try {
      const ret = await $axios.get('/api/article/redirect/' + params.id);
      redirect(302, ret.url);
    } catch (e) {
      error({
        statusCode: 404,
        message: e.message || '404'
      });
    }
  }

});
// CONCATENATED MODULE: ./pages/article/redirect/_id.vue?vue&type=script&lang=js&
 /* harmony default export */ var redirect_idvue_type_script_lang_js_ = (_idvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/_vue-loader@15.9.3@vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./pages/article/redirect/_id.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  redirect_idvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "1035dfe7"
  
)

/* harmony default export */ var _id = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=_id.js.map