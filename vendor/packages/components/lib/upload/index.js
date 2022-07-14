'use strict';
var __assign =
  (this && this.__assign) ||
  function () {
    __assign =
      Object.assign ||
      function (t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
      };
    return __assign.apply(this, arguments);
  };
var __rest =
  (this && this.__rest) ||
  function (s, e) {
    var t = {};
    for (var p in s)
      if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === 'function')
      for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
          t[p[i]] = s[p[i]];
      }
    return t;
  };
Object.defineProperty(exports, '__esModule', { value: true });
exports.Upload = void 0;
var vue_1 = require('@formily/vue');
var ant_design_vue_1 = require('ant-design-vue');
var __builtins__1 = require('../__builtins__');
var vue_2 = require('vue');
var UploadWrapper = (0, vue_2.defineComponent)({
  name: 'UploadWrapper',
  emits: ['change'],
  setup: function (props, _a) {
    var slots = _a.slots,
      attrs = _a.attrs,
      emit = _a.emit;
    return function () {
      var children = __assign({}, slots);
      var onChange = attrs.onChange,
        restAttrs = __rest(attrs, ['onChange']);
      return (0, vue_2.h)(
        ant_design_vue_1.Upload,
        __assign(__assign({}, restAttrs), {
          onChange: function (_a) {
            var fileList = _a.fileList;
            onChange === null || onChange === void 0 ? void 0 : onChange(fileList);
            emit('change', fileList);
          },
        }),
        children,
      );
    };
  },
});
var UploaDraggerdWrapper = (0, vue_2.defineComponent)({
  name: 'UploaDraggerdWrapper',
  emits: ['change'],
  setup: function (props, _a) {
    var slots = _a.slots,
      attrs = _a.attrs,
      emit = _a.emit;
    return function () {
      var children = __assign({}, slots);
      var onChange = attrs.onChange,
        restAttrs = __rest(attrs, ['onChange']);
      return (0, vue_2.h)(
        ant_design_vue_1.UploadDragger,
        __assign(__assign({}, restAttrs), {
          onChange: function (_a) {
            var fileList = _a.fileList;
            onChange === null || onChange === void 0 ? void 0 : onChange(fileList);
            emit('change', fileList);
          },
        }),
        children,
      );
    };
  },
});
var _Upload = (0, vue_1.connect)(
  UploadWrapper,
  (0, vue_1.mapProps)({
    value: 'fileList',
    onInput: 'onChange',
  }),
);
var UploadDragger = (0, vue_1.connect)(
  UploaDraggerdWrapper,
  (0, vue_1.mapProps)({
    value: 'fileList',
    onInput: 'onChange',
  }),
);
exports.Upload = (0, __builtins__1.composeExport)(_Upload, {
  Dragger: UploadDragger,
});
exports.default = exports.Upload;
//# sourceMappingURL=index.js.map
