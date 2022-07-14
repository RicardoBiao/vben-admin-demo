'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.Checkbox = void 0;
var vue_1 = require('@formily/vue');
var ant_design_vue_1 = require('ant-design-vue');
var preview_text_1 = require('../preview-text');
var shared_1 = require('../__builtins__/shared');
var Group = ant_design_vue_1.Checkbox.Group;
var CheckboxGroup = (0, vue_1.connect)(
  Group,
  (0, vue_1.mapProps)({
    dataSource: 'options',
  }),
  (0, vue_1.mapReadPretty)(preview_text_1.PreviewText.Select, {
    mode: 'tags',
  }),
);
var _CheckBox = (0, vue_1.connect)(
  ant_design_vue_1.Checkbox,
  (0, vue_1.mapProps)({
    value: 'checked',
    onInput: 'onChange',
  }),
);
exports.Checkbox = (0, shared_1.composeExport)(_CheckBox, {
  Group: CheckboxGroup,
});
exports.default = exports.Checkbox;
//# sourceMappingURL=index.js.map
