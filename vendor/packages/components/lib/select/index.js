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
Object.defineProperty(exports, '__esModule', { value: true });
exports.Select = void 0;
var vue_1 = require('@formily/vue');
var ant_design_vue_1 = require('ant-design-vue');
var preview_text_1 = require('../preview-text');
exports.Select = (0, vue_1.connect)(
  ant_design_vue_1.Select,
  (0, vue_1.mapProps)(
    {
      dataSource: 'options',
      loading: true,
    },
    function (props, field) {
      return __assign(__assign({}, props), {
        loading:
          (field === null || field === void 0 ? void 0 : field['loading']) ||
          (field === null || field === void 0 ? void 0 : field['validating'])
            ? true
            : props.loading,
      });
    },
  ),
  (0, vue_1.mapReadPretty)(preview_text_1.PreviewText.Select),
);
exports.default = exports.Select;
//# sourceMappingURL=index.js.map
