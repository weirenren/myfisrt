exports.ids = [15];
exports.modules = {

/***/ 172:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/_vue-loader@15.9.3@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.9.3@vue-loader/lib??vue-loader-options!./pages/admin/topics/nodes.vue?vue&type=template&id=7808c41e&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"page-container"},[_vm._ssrNode("<div class=\"toolbar\" data-v-7808c41e>","</div>",[_c('el-form',{attrs:{"inline":true,"model":_vm.filters}},[_c('el-form-item',[_c('el-input',{attrs:{"placeholder":"名称"},model:{value:(_vm.filters.name),callback:function ($$v) {_vm.$set(_vm.filters, "name", $$v)},expression:"filters.name"}})],1),_vm._v(" "),_c('el-form-item',[_c('el-button',{attrs:{"type":"primary"},on:{"click":_vm.list}},[_vm._v("查询")])],1),_vm._v(" "),_c('el-form-item',[_c('el-button',{attrs:{"type":"primary"},on:{"click":_vm.handleAdd}},[_vm._v("新增")])],1)],1)],1),_vm._ssrNode(" "),_c('el-table',{directives:[{name:"loading",rawName:"v-loading",value:(_vm.listLoading),expression:"listLoading"}],staticStyle:{"width":"100%"},attrs:{"data":_vm.results,"highlight-current-row":"","border":""},on:{"selection-change":_vm.handleSelectionChange}},[_c('el-table-column',{attrs:{"type":"selection","width":"55"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"id","label":"编号"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"name","label":"名称"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"description","label":"描述"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"sortNo","label":"排序"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"status","label":"状态"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_vm._v(_vm._s(scope.row.status === 0 ? '启用' : '禁用'))]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"createTime","label":"创建时间"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_vm._v(_vm._s(_vm._f("formatDate")(scope.row.createTime)))]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"操作","width":"150"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('el-button',{attrs:{"size":"small"},on:{"click":function($event){return _vm.handleEdit(scope.$index, scope.row)}}},[_vm._v("编辑")])]}}])})],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"pagebar\" data-v-7808c41e>","</div>",[_c('el-pagination',{attrs:{"page-sizes":[20, 50, 100, 300],"current-page":_vm.page.page,"page-size":_vm.page.limit,"total":_vm.page.total,"layout":"total, sizes, prev, pager, next, jumper"},on:{"current-change":_vm.handlePageChange,"size-change":_vm.handleLimitChange}})],1),_vm._ssrNode(" "),_c('el-dialog',{attrs:{"visible":_vm.addFormVisible,"close-on-click-modal":false,"title":"新增"},on:{"update:visible":function($event){_vm.addFormVisible=$event}}},[_c('el-form',{ref:"addForm",attrs:{"model":_vm.addForm,"label-width":"80px"}},[_c('el-form-item',{attrs:{"label":"名称"}},[_c('el-input',{model:{value:(_vm.addForm.name),callback:function ($$v) {_vm.$set(_vm.addForm, "name", $$v)},expression:"addForm.name"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"描述","prop":"description"}},[_c('el-input',{attrs:{"type":"textarea","auto-complete":"off"},model:{value:(_vm.addForm.description),callback:function ($$v) {_vm.$set(_vm.addForm, "description", $$v)},expression:"addForm.description"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"排序"}},[_c('el-input',{model:{value:(_vm.addForm.sortNo),callback:function ($$v) {_vm.$set(_vm.addForm, "sortNo", $$v)},expression:"addForm.sortNo"}})],1)],1),_vm._v(" "),_c('div',{staticClass:"dialog-footer",attrs:{"slot":"footer"},slot:"footer"},[_c('el-button',{nativeOn:{"click":function($event){_vm.addFormVisible = false}}},[_vm._v("取消")]),_vm._v(" "),_c('el-button',{attrs:{"loading":_vm.addLoading,"type":"primary"},nativeOn:{"click":function($event){return _vm.addSubmit($event)}}},[_vm._v("提交")])],1)],1),_vm._ssrNode(" "),_c('el-dialog',{attrs:{"visible":_vm.editFormVisible,"close-on-click-modal":false,"title":"编辑"},on:{"update:visible":function($event){_vm.editFormVisible=$event}}},[_c('el-form',{ref:"editForm",attrs:{"model":_vm.editForm,"label-width":"80px"}},[_c('el-input',{attrs:{"type":"hidden"},model:{value:(_vm.editForm.id),callback:function ($$v) {_vm.$set(_vm.editForm, "id", $$v)},expression:"editForm.id"}}),_vm._v(" "),_c('el-form-item',{attrs:{"label":"名称"}},[_c('el-input',{model:{value:(_vm.editForm.name),callback:function ($$v) {_vm.$set(_vm.editForm, "name", $$v)},expression:"editForm.name"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"描述","prop":"description"}},[_c('el-input',{attrs:{"type":"textarea","auto-complete":"off"},model:{value:(_vm.editForm.description),callback:function ($$v) {_vm.$set(_vm.editForm, "description", $$v)},expression:"editForm.description"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"排序"}},[_c('el-input',{model:{value:(_vm.editForm.sortNo),callback:function ($$v) {_vm.$set(_vm.editForm, "sortNo", $$v)},expression:"editForm.sortNo"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"状态"}},[_c('el-select',{attrs:{"clearable":"","placeholder":"请选择状态"},model:{value:(_vm.editForm.status),callback:function ($$v) {_vm.$set(_vm.editForm, "status", $$v)},expression:"editForm.status"}},[_c('el-option',{attrs:{"value":0,"label":"启用"}}),_vm._v(" "),_c('el-option',{attrs:{"value":1,"label":"禁用"}})],1)],1)],1),_vm._v(" "),_c('div',{staticClass:"dialog-footer",attrs:{"slot":"footer"},slot:"footer"},[_c('el-button',{nativeOn:{"click":function($event){_vm.editFormVisible = false}}},[_vm._v("取消")]),_vm._v(" "),_c('el-button',{attrs:{"loading":_vm.editLoading,"type":"primary"},nativeOn:{"click":function($event){return _vm.editSubmit($event)}}},[_vm._v("提交")])],1)],1)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/admin/topics/nodes.vue?vue&type=template&id=7808c41e&scoped=true&

// CONCATENATED MODULE: ./node_modules/_babel-loader@8.1.0@babel-loader/lib??ref--2-0!./node_modules/_vue-loader@15.9.3@vue-loader/lib??vue-loader-options!./pages/admin/topics/nodes.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var nodesvue_type_script_lang_js_ = ({
  layout: 'admin',

  data() {
    return {
      results: [],
      listLoading: false,
      page: {},
      filters: {},
      selectedRows: [],
      addForm: {
        name: '',
        description: '',
        status: '',
        sortNo: '',
        createTime: ''
      },
      addFormVisible: false,
      addLoading: false,
      editForm: {
        id: '',
        name: '',
        description: '',
        status: '',
        sortNo: '',
        createTime: ''
      },
      editFormVisible: false,
      editLoading: false
    };
  },

  mounted() {
    this.list();
  },

  methods: {
    list() {
      const me = this;
      me.listLoading = true;
      const params = Object.assign(me.filters, {
        page: me.page.page,
        limit: me.page.limit
      });
      this.$axios.post('/api/admin/topic-node/list', params).then(data => {
        me.results = data.results;
        me.page = data.page;
      }).finally(() => {
        me.listLoading = false;
      });
    },

    handlePageChange(val) {
      this.page.page = val;
      this.list();
    },

    handleLimitChange(val) {
      this.page.limit = val;
      this.list();
    },

    handleAdd() {
      this.addForm = {
        name: '',
        description: ''
      };
      this.addFormVisible = true;
    },

    addSubmit() {
      const me = this;
      this.$axios.post('/api/admin/topic-node/create', this.addForm).then(data => {
        me.$message({
          message: '提交成功',
          type: 'success'
        });
        me.addFormVisible = false;
        me.list();
      }).catch(rsp => {
        me.$notify.error({
          title: '错误',
          message: rsp.message
        });
      });
    },

    handleEdit(index, row) {
      const me = this;
      this.$axios.get('/api/admin/topic-node/' + row.id).then(data => {
        me.editForm = Object.assign({}, data);
        me.editFormVisible = true;
      }).catch(rsp => {
        me.$notify.error({
          title: '错误',
          message: rsp.message
        });
      });
    },

    editSubmit() {
      const me = this;
      this.$axios.post('/api/admin/topic-node/update', me.editForm).then(data => {
        me.list();
        me.editFormVisible = false;
      }).catch(rsp => {
        me.$notify.error({
          title: '错误',
          message: rsp.message
        });
      });
    },

    handleSelectionChange(val) {
      this.selectedRows = val;
    }

  }
});
// CONCATENATED MODULE: ./pages/admin/topics/nodes.vue?vue&type=script&lang=js&
 /* harmony default export */ var topics_nodesvue_type_script_lang_js_ = (nodesvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/_vue-loader@15.9.3@vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./pages/admin/topics/nodes.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  topics_nodesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "7808c41e",
  "39fecb75"
  
)

/* harmony default export */ var nodes = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=nodes.js.map