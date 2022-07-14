'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.InputNumber = void 0;
var vue_1 = require('@formily/vue');
var ant_design_vue_1 = require('ant-design-vue');
var preview_text_1 = require('../preview-text');
exports.InputNumber = (0, vue_1.connect)(
  ant_design_vue_1.InputNumber,
  (0, vue_1.mapReadPretty)(preview_text_1.PreviewText.Input),
);
exports.default = exports.InputNumber;
//# sourceMappingURL=index.js.map
