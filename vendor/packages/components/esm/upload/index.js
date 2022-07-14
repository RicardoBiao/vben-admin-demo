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
import { connect, mapProps } from '@formily/vue';
import { Upload as AntdUpload, UploadDragger as AntdUploadDrager } from 'ant-design-vue';
import { composeExport } from '../__builtins__';
import { defineComponent, h } from 'vue';
var UploadWrapper = defineComponent({
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
      return h(
        AntdUpload,
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
var UploaDraggerdWrapper = defineComponent({
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
      return h(
        AntdUploadDrager,
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
var _Upload = connect(
  UploadWrapper,
  mapProps({
    value: 'fileList',
    onInput: 'onChange',
  }),
);
var UploadDragger = connect(
  UploaDraggerdWrapper,
  mapProps({
    value: 'fileList',
    onInput: 'onChange',
  }),
);
export var Upload = composeExport(_Upload, {
  Dragger: UploadDragger,
});
export default Upload;
//# sourceMappingURL=index.js.map
