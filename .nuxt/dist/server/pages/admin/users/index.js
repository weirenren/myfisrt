exports.ids = [17];
exports.modules = {

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/_vue-loader@15.9.3@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.9.3@vue-loader/lib??vue-loader-options!./pages/admin/users/index.vue?vue&type=template&id=86f43416&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"page-container"},[_vm._ssrNode("<div class=\"toolbar\" data-v-86f43416>","</div>",[_c('el-form',{attrs:{"inline":true,"model":_vm.filters}},[_c('el-form-item',[_c('el-input',{attrs:{"placeholder":"编号"},model:{value:(_vm.filters.id),callback:function ($$v) {_vm.$set(_vm.filters, "id", $$v)},expression:"filters.id"}})],1),_vm._v(" "),_c('el-form-item',[_c('el-input',{attrs:{"placeholder":"用户名"},model:{value:(_vm.filters.username),callback:function ($$v) {_vm.$set(_vm.filters, "username", $$v)},expression:"filters.username"}})],1),_vm._v(" "),_c('el-form-item',[_c('el-input',{attrs:{"placeholder":"昵称"},model:{value:(_vm.filters.nickname),callback:function ($$v) {_vm.$set(_vm.filters, "nickname", $$v)},expression:"filters.nickname"}})],1),_vm._v(" "),_c('el-form-item',[_c('el-button',{attrs:{"type":"primary"},on:{"click":_vm.list}},[_vm._v("查询")])],1),_vm._v(" "),_c('el-form-item',[_c('el-button',{attrs:{"type":"primary"},on:{"click":_vm.handleAdd}},[_vm._v("新增")])],1)],1)],1),_vm._ssrNode(" "),_c('el-table',{directives:[{name:"loading",rawName:"v-loading",value:(_vm.listLoading),expression:"listLoading"}],staticStyle:{"width":"100%"},attrs:{"data":_vm.results,"highlight-current-row":"","stripe":""},on:{"selection-change":_vm.handleSelectionChange}},[_c('el-table-column',{attrs:{"type":"expand"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [(scope.row.forbidden)?_c('div',{staticStyle:{"font-weight":"600","color":"red"}},[_c('span',[_vm._v("已禁言至")]),_vm._v(" "),(scope.row.forbiddenEndTime === -1)?_c('span',[_vm._v("永久")]):_c('span',[_vm._v(_vm._s(_vm._f("formatDate")(scope.row.forbiddenEndTime)))])]):_vm._e(),_vm._v(" "),(scope.row.roles && scope.row.roles.length)?_c('div',[_c('div',[_c('span',[_vm._v("角色：")]),_vm._v(" "),_vm._l((scope.row.roles),function(role){return _c('el-tag',{key:role,staticStyle:{"margin-right":"3px"},attrs:{"size":"mini"}},[_vm._v(_vm._s(role)+"\n            ")])})],2)]):_vm._e(),_vm._v(" "),_c('div',[_c('span',[_vm._v("状态：")]),_vm._v("\n          "+_vm._s(scope.row.status === 0 ? '正常' : '删除')+"\n        ")]),_vm._v(" "),_c('div',[_c('span',[_vm._v("注册时间：")]),_vm._v("\n          "+_vm._s(_vm._f("formatDate")(scope.row.createTime))+"\n        ")]),_vm._v(" "),_c('div',[_c('span',[_vm._v("更新时间：")]),_vm._v("\n          "+_vm._s(_vm._f("formatDate")(scope.row.updateTime))+"\n        ")])]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"id","label":"编号","width":"100"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"avatar","label":"头像","width":"80"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('img',{staticStyle:{"max-height":"50px","max-width":"50px","border-radius":"50%"},attrs:{"src":scope.row.avatar}})]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"username","label":"用户名"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"nickname","label":"昵称"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"email","label":"邮箱"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"score","label":"积分"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"forbidden","label":"是否禁言"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [(scope.row.forbidden)?_c('span',{staticClass:"tag is-warning"},[_vm._v("已禁言")]):_c('span',{staticClass:"tag is-success"},[_vm._v("正常")])]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"createTime","label":"注册时间"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_vm._v(_vm._s(_vm._f("formatDate")(scope.row.createTime)))]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"操作","width":"200"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('el-button',{attrs:{"size":"small"},on:{"click":function($event){return _vm.handleEdit(scope.$index, scope.row)}}},[_vm._v("编辑")]),_vm._v(" "),(scope.row.forbidden)?_c('el-button',{attrs:{"size":"small","type":"warning"},on:{"click":function($event){return _vm.removeForbidden(scope.$index, scope.row)}}},[_vm._v("取消禁言\n        ")]):_c('el-button',{attrs:{"size":"small","type":"warning"},on:{"click":function($event){return _vm.showForbiddenDialog(scope.$index, scope.row)}}},[_vm._v("禁言")])]}}])})],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"pagebar\" data-v-86f43416>","</div>",[_c('el-pagination',{attrs:{"page-sizes":[20, 50, 100, 300],"current-page":_vm.page.page,"page-size":_vm.page.limit,"total":_vm.page.total,"layout":"total, sizes, prev, pager, next, jumper"},on:{"current-change":_vm.handlePageChange,"size-change":_vm.handleLimitChange}})],1),_vm._ssrNode(" "),_c('el-dialog',{attrs:{"visible":_vm.addFormVisible,"close-on-click-modal":false,"title":"新增"},on:{"update:visible":function($event){_vm.addFormVisible=$event}}},[_c('el-form',{ref:"addForm",attrs:{"model":_vm.addForm,"rules":_vm.addFormRules,"label-width":"80px"}},[_c('el-form-item',{attrs:{"label":"用户名","prop":"username"}},[_c('el-input',{model:{value:(_vm.addForm.username),callback:function ($$v) {_vm.$set(_vm.addForm, "username", $$v)},expression:"addForm.username"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"昵称","prop":"nickname"}},[_c('el-input',{model:{value:(_vm.addForm.nickname),callback:function ($$v) {_vm.$set(_vm.addForm, "nickname", $$v)},expression:"addForm.nickname"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"邮箱","prop":"email"}},[_c('el-input',{model:{value:(_vm.addForm.email),callback:function ($$v) {_vm.$set(_vm.addForm, "email", $$v)},expression:"addForm.email"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"密码","prop":"password"}},[_c('el-input',{model:{value:(_vm.addForm.password),callback:function ($$v) {_vm.$set(_vm.addForm, "password", $$v)},expression:"addForm.password"}})],1)],1),_vm._v(" "),_c('div',{staticClass:"dialog-footer",attrs:{"slot":"footer"},slot:"footer"},[_c('el-button',{nativeOn:{"click":function($event){_vm.addFormVisible = false}}},[_vm._v("取消")]),_vm._v(" "),_c('el-button',{attrs:{"loading":_vm.addLoading,"type":"primary"},nativeOn:{"click":function($event){return _vm.addSubmit($event)}}},[_vm._v("提交")])],1)],1),_vm._ssrNode(" "),_c('el-dialog',{attrs:{"visible":_vm.editFormVisible,"close-on-click-modal":false,"title":"编辑"},on:{"update:visible":function($event){_vm.editFormVisible=$event}}},[_c('el-form',{ref:"editForm",attrs:{"model":_vm.editForm,"rules":_vm.editFormRules,"label-width":"80px"}},[_c('el-input',{attrs:{"type":"hidden"},model:{value:(_vm.editForm.id),callback:function ($$v) {_vm.$set(_vm.editForm, "id", $$v)},expression:"editForm.id"}}),_vm._v(" "),_c('el-form-item',{attrs:{"label":"用户名","prop":"username"}},[_c('el-input',{model:{value:(_vm.editForm.username),callback:function ($$v) {_vm.$set(_vm.editForm, "username", $$v)},expression:"editForm.username"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"昵称","prop":"nickname"}},[_c('el-input',{model:{value:(_vm.editForm.nickname),callback:function ($$v) {_vm.$set(_vm.editForm, "nickname", $$v)},expression:"editForm.nickname"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"邮箱","prop":"email"}},[_c('el-input',{model:{value:(_vm.editForm.email),callback:function ($$v) {_vm.$set(_vm.editForm, "email", $$v)},expression:"editForm.email"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"角色","prop":"roles"}},[_c('el-select',{staticStyle:{"width":"100%"},attrs:{"multiple":"","filterable":"","allow-create":"","default-first-option":"","placeholder":"用户角色"},model:{value:(_vm.editForm.roles),callback:function ($$v) {_vm.$set(_vm.editForm, "roles", $$v)},expression:"editForm.roles"}},_vm._l((_vm.editForm.roles),function(item){return _c('el-option',{key:item,attrs:{"label":item,"value":item}})}),1)],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"密码","prop":"password"}},[_c('el-input',{attrs:{"placeholder":"不填写表示不更改密码"},model:{value:(_vm.editForm.password),callback:function ($$v) {_vm.$set(_vm.editForm, "password", $$v)},expression:"editForm.password"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"状态","prop":"status"}},[_c('el-select',{attrs:{"placeholder":"请选择"},model:{value:(_vm.editForm.status),callback:function ($$v) {_vm.$set(_vm.editForm, "status", $$v)},expression:"editForm.status"}},[_c('el-option',{key:0,attrs:{"value":0,"label":"正常"}}),_vm._v(" "),_c('el-option',{key:1,attrs:{"value":1,"label":"删除"}})],1)],1)],1),_vm._v(" "),_c('div',{staticClass:"dialog-footer",attrs:{"slot":"footer"},slot:"footer"},[_c('el-button',{nativeOn:{"click":function($event){_vm.editFormVisible = false}}},[_vm._v("取消")]),_vm._v(" "),_c('el-button',{attrs:{"loading":_vm.editLoading,"type":"primary"},nativeOn:{"click":function($event){return _vm.editSubmit($event)}}},[_vm._v("提交")])],1)],1),_vm._ssrNode(" "),_c('el-dialog',{attrs:{"visible":_vm.forbiddenFormVisible,"close-on-click-modal":false,"title":"禁言"},on:{"update:visible":function($event){_vm.forbiddenFormVisible=$event}}},[_c('el-form',{ref:"forbiddenForm",attrs:{"model":_vm.forbiddenForm,"label-width":"80px"}},[_c('el-input',{attrs:{"type":"hidden"},model:{value:(_vm.forbiddenForm.userId),callback:function ($$v) {_vm.$set(_vm.forbiddenForm, "userId", $$v)},expression:"forbiddenForm.userId"}}),_vm._v(" "),_c('el-form-item',{attrs:{"label":"禁言时间","prop":"reason"}},[_c('el-select',{model:{value:(_vm.forbiddenForm.days),callback:function ($$v) {_vm.$set(_vm.forbiddenForm, "days", $$v)},expression:"forbiddenForm.days"}},[_c('el-option',{attrs:{"label":"3天","value":"3"}}),_vm._v(" "),_c('el-option',{attrs:{"label":"5天","value":"3"}}),_vm._v(" "),_c('el-option',{attrs:{"label":"7天","value":"7"}}),_vm._v(" "),_c('el-option',{attrs:{"label":"15天","value":"15"}}),_vm._v(" "),_c('el-option',{attrs:{"label":"30天","value":"30"}}),_vm._v(" "),_c('el-option',{attrs:{"label":"永久","value":"-1"}})],1)],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"禁言原因","prop":"reason"}},[_c('el-select',{model:{value:(_vm.forbiddenForm.reason),callback:function ($$v) {_vm.$set(_vm.forbiddenForm, "reason", $$v)},expression:"forbiddenForm.reason"}},[_c('el-option',{attrs:{"value":"广告"}}),_vm._v(" "),_c('el-option',{attrs:{"value":"灌水"}}),_vm._v(" "),_c('el-option',{attrs:{"value":"涉黄"}}),_vm._v(" "),_c('el-option',{attrs:{"value":"涉政"}}),_vm._v(" "),_c('el-option',{attrs:{"value":"其他"}})],1)],1)],1),_vm._v(" "),_c('div',{staticClass:"dialog-footer",attrs:{"slot":"footer"},slot:"footer"},[_c('el-button',{nativeOn:{"click":function($event){_vm.forbiddenFormVisible = false}}},[_vm._v("取消")]),_vm._v(" "),_c('el-button',{attrs:{"loading":_vm.forbiddenLoading,"type":"primary"},nativeOn:{"click":function($event){return _vm.forbidden($event)}}},[_vm._v("禁言")])],1)],1)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/admin/users/index.vue?vue&type=template&id=86f43416&scoped=true&

// CONCATENATED MODULE: ./node_modules/_babel-loader@8.1.0@babel-loader/lib??ref--2-0!./node_modules/_vue-loader@15.9.3@vue-loader/lib??vue-loader-options!./pages/admin/users/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var usersvue_type_script_lang_js_ = ({
  layout: 'admin',

  data() {
    return {
      results: [],
      listLoading: false,
      page: {},
      filters: {
        id: ''
      },
      selectedRows: [],
      addForm: {
        username: '',
        nickname: '',
        avatar: '',
        email: '',
        roles: [],
        password: '',
        status: ''
      },
      addFormVisible: false,
      addFormRules: {},
      addLoading: false,
      editForm: {
        id: '',
        username: '',
        nickname: '',
        avatar: '',
        email: '',
        roles: [],
        password: '',
        status: ''
      },
      editFormVisible: false,
      editFormRules: {},
      editLoading: false,
      forbiddenForm: {
        userId: '',
        days: 0,
        reason: ''
      },
      forbiddenFormVisible: false,
      forbiddenLoading: false
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
      this.$axios.post('/api/admin/user/list', params).then(data => {
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
      this.$axios.post('/api/admin/user/create', this.addForm).then(data => {
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
      this.$axios.get(`/api/admin/user/${row.id}`).then(data => {
        me.editForm = Object.assign({}, data);
        me.editForm.password = '';
        me.editFormVisible = true;
      }).catch(rsp => {
        me.$notify.error({
          title: '错误',
          message: rsp.message
        });
      });
    },

    editSubmit() {
      const params = { ...this.editForm
      };

      if (params.roles && params.roles.length) {
        params.roles = params.roles.join(',');
      } else {
        params.roles = '';
      }

      const me = this;
      this.$axios.post('/api/admin/user/update', params).then(data => {
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
    },

    showForbiddenDialog(index, row) {
      this.forbiddenForm = {
        userId: row.id,
        days: 7,
        reason: '广告'
      };
      this.forbiddenFormVisible = true;
    },

    async forbidden() {
      this.forbiddenLoading = true;

      try {
        await this.$axios.post('/api/admin/user/forbidden', this.forbiddenForm);
        this.forbiddenForm = {};
        this.forbiddenFormVisible = false;
        this.$message.success('禁言成功');
        this.list();
      } catch (e) {
        this.$message.success('禁言失败 ' + (e.message || e));
      } finally {
        this.forbiddenLoading = false;
      }
    },

    async removeForbidden(index, row) {
      try {
        await this.$axios.post('/api/admin/user/forbidden', {
          userId: row.id,
          days: 0
        });
        this.$message.success('取消禁言成功');
        this.list();
      } catch (e) {
        this.$message.success('取消禁言失败 ' + (e.message || e));
      }
    }

  }
});
// CONCATENATED MODULE: ./pages/admin/users/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var admin_usersvue_type_script_lang_js_ = (usersvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/_vue-loader@15.9.3@vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./pages/admin/users/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  admin_usersvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "86f43416",
  "0b28a328"
  
)

/* harmony default export */ var users = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map