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
exports.DatePicker =
  exports._MonthPicker =
  exports._WeekPicker =
  exports._RangePicker =
  exports._DatePicker =
    void 0;
var vue_1 = require('@formily/vue');
var ant_design_vue_1 = require('ant-design-vue');
var __builtins__1 = require('../__builtins__');
var preview_text_1 = require('../preview-text');
var mapDateFormat = function () {
  var getDefaultFormat = function (props) {
    if (props['mode'] === 'month') {
      return 'YYYY-MM';
    } else if (props['mode'] === 'quarter') {
      return 'YYYY-\\QQ';
    } else if (props['mode'] === 'year') {
      return 'YYYY';
    } else if (props['mode'] === 'week') {
      return 'gggg-wo';
    }
    return props['showTime'] ? 'YYYY-MM-DD HH:mm:ss' : 'YYYY-MM-DD';
  };
  return function (props) {
    var format = props['format'] || getDefaultFormat(props);
    var onChange = props.onChange;
    return __assign(__assign({}, props), {
      format: format,
      valueFormat: props.valueFormat || getDefaultFormat(props),
      onChange: function (value) {
        if (onChange) {
          onChange((0, __builtins__1.formatMomentValue)(value, format));
        }
      },
    });
  };
};
exports._DatePicker = (0, vue_1.connect)(
  ant_design_vue_1.DatePicker,
  (0, vue_1.mapProps)(mapDateFormat()),
  (0, vue_1.mapReadPretty)(preview_text_1.PreviewText.DatePicker),
);
exports._RangePicker = (0, vue_1.connect)(
  ant_design_vue_1.DatePicker.RangePicker,
  (0, vue_1.mapProps)(mapDateFormat()),
  (0, vue_1.mapReadPretty)(preview_text_1.PreviewText.DateRangePicker),
);
exports._WeekPicker = (0, vue_1.connect)(ant_design_vue_1.DatePicker.WeekPicker);
exports._MonthPicker = (0, vue_1.connect)(ant_design_vue_1.DatePicker.MonthPicker);
exports.DatePicker = (0, __builtins__1.composeExport)(exports._DatePicker, {
  RangePicker: exports._RangePicker,
  WeekPicker: exports._WeekPicker,
  MonthPicker: exports._MonthPicker,
});
exports.default = exports.DatePicker;
//# sourceMappingURL=index.js.map
