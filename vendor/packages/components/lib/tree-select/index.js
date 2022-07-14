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
exports.TreeSelect = void 0;
var vue_1 = require('@formily/vue');
var ant_design_vue_1 = require('ant-design-vue');
var icons_vue_1 = require('@ant-design/icons-vue');
var vue_2 = require('vue');
exports.TreeSelect = (0, vue_1.connect)(
  ant_design_vue_1.TreeSelect,
  (0, vue_1.mapProps)(
    {
      dataSource: 'treeData',
    },
    function (props, field) {
      return __assign(__assign({}, props), {
        suffixIcon:
          (field === null || field === void 0 ? void 0 : field['loading']) ||
          (field === null || field === void 0 ? void 0 : field['validating'])
            ? (0, vue_2.h)(icons_vue_1.LoadingOutlined)
            : props.suffixIcon,
      });
    },
  ),
);
exports.default = exports.TreeSelect;
//# sourceMappingURL=index.js.map
