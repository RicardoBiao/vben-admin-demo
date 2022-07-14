'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.TimePicker = void 0;
var vue_1 = require('@formily/vue');
var ant_design_vue_1 = require('ant-design-vue');
var preview_text_1 = require('../preview-text');
exports.TimePicker = (0, vue_1.connect)(
  ant_design_vue_1.TimePicker,
  (0, vue_1.mapProps)({ readOnly: 'read-only' }),
  (0, vue_1.mapReadPretty)(preview_text_1.PreviewText.TimePicker),
);
exports.default = exports.TimePicker;
//# sourceMappingURL=index.js.map
