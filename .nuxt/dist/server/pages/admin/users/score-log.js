exports.ids = [19];
exports.modules = {

/***/ 122:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/_vue-loader@15.9.3@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.9.3@vue-loader/lib??vue-loader-options!./pages/admin/users/score-log.vue?vue&type=template&id=2990df6b&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.isShowLog)?_c('el-dialog',{attrs:{"visible":_vm.isShowLog,"width":"80%","title":"积分记录"},on:{"update:visible":function($event){_vm.isShowLog=$event}}},[_c('el-table',{directives:[{name:"loading",rawName:"v-loading",value:(_vm.listLoading),expression:"listLoading"}],attrs:{"data":_vm.results,"highlight-current-row":"","border":""}},[_c('el-table-column',{attrs:{"prop":"id","label":"编号"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"sourceType","label":"来源类型"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"sourceId","label":"来源编号"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"description","label":"描述"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"type","label":"类型"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_vm._v(_vm._s(scope.row.type === 0 ? '增加' : '减少'))]}}],null,false,569092045)}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"score","label":"积分"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"createTime","label":"创建时间"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_vm._v(_vm._s(_vm._f("formatDate")(scope.row.createTime)))]}}],null,false,1255221282)})],1),_vm._v(" "),_c('div',{staticClass:"pagebar"},[_c('el-pagination',{attrs:{"page-sizes":[20, 50, 100, 300],"current-page":_vm.page.page,"page-size":_vm.page.limit,"total":_vm.page.total,"layout":"total, sizes, prev, pager, next, jumper"},on:{"current-change":_vm.handlePageChange,"size-change":_vm.handleLimitChange}})],1)],1):_vm._e()}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/admin/users/score-log.vue?vue&type=template&id=2990df6b&scoped=true&

// CONCATENATED MODULE: ./node_modules/_babel-loader@8.1.0@babel-loader/lib??ref--2-0!./node_modules/_vue-loader@15.9.3@vue-loader/lib??vue-loader-options!./pages/admin/users/score-log.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var score_logvue_type_script_lang_js_ = ({
  data() {
    return {
      isShowLog: false,
      userId: 0,
      results: [],
      listLoading: false,
      page: {},
      filters: {}
    };
  },

  mounted() {},

  methods: {
    async showLog(userId) {
      this.userId = userId;
      this.isShowLog = true;
      await this.list();
    },

    async list() {
      this.listLoading = true;
      const params = Object.assign(this.filters, {
        page: this.page.page,
        limit: this.page.limit
      });
      params.userId = this.userId;

      try {
        const data = await this.$axios.post('/api/admin/user-score-log/list', params);
        this.results = data.results;
        this.page = data.page;
      } catch (err) {
        this.$notify.error({
          title: '错误',
          message: err.message || err
        });
      } finally {
        this.listLoading = false;
      }
    },

    handlePageChange(val) {
      this.page.page = val;
      this.list();
    },

    handleLimitChange(val) {
      this.page.limit = val;
      this.list();
    }

  }
});
// CONCATENATED MODULE: ./pages/admin/users/score-log.vue?vue&type=script&lang=js&
 /* harmony default export */ var users_score_logvue_type_script_lang_js_ = (score_logvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/_vue-loader@15.9.3@vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./pages/admin/users/score-log.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  users_score_logvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "2990df6b",
  "a63982ba"
  
)

/* harmony default export */ var score_log = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=score-log.js.map