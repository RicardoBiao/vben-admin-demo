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
import { connect, mapProps, mapReadPretty } from '@formily/vue';
import { DatePicker as AntdDatePicker } from 'ant-design-vue';
import { formatMomentValue, composeExport } from '../__builtins__';
import { PreviewText } from '../preview-text';
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
          onChange(formatMomentValue(value, format));
        }
      },
    });
  };
};
export var _DatePicker = connect(
  AntdDatePicker,
  mapProps(mapDateFormat()),
  mapReadPretty(PreviewText.DatePicker),
);
export var _RangePicker = connect(
  AntdDatePicker.RangePicker,
  mapProps(mapDateFormat()),
  mapReadPretty(PreviewText.DateRangePicker),
);
export var _WeekPicker = connect(AntdDatePicker.WeekPicker);
export var _MonthPicker = connect(AntdDatePicker.MonthPicker);
export var DatePicker = composeExport(_DatePicker, {
  RangePicker: _RangePicker,
  WeekPicker: _WeekPicker,
  MonthPicker: _MonthPicker,
});
export default DatePicker;
//# sourceMappingURL=index.js.map
