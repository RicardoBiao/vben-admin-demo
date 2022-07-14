'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.Switch = void 0;
var vue_1 = require('@formily/vue');
var ant_design_vue_1 = require('ant-design-vue');
exports.Switch = (0, vue_1.connect)(
  ant_design_vue_1.Switch,
  (0, vue_1.mapProps)({ readOnly: 'read-only', value: 'checked' }),
);
exports.default = exports.Switch;
//# sourceMappingURL=index.js.map
