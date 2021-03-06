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
import { Select as AntdSelect } from 'ant-design-vue';
import { PreviewText } from '../preview-text';
export var Select = connect(
  AntdSelect,
  mapProps(
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
  mapReadPretty(PreviewText.Select),
);
export default Select;
//# sourceMappingURL=index.js.map
