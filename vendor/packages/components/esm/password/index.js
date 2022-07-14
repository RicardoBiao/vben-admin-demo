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
import { Input } from 'ant-design-vue';
import { PreviewText } from '../preview-text';
var AntdPassword = Input.Password;
export var Password = connect(
  AntdPassword,
  mapProps(function (props) {
    return __assign({}, props);
  }),
  mapReadPretty(PreviewText.Input),
);
export default Password;
//# sourceMappingURL=index.js.map
