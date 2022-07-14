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
import { Cascader as AntdCascader } from 'ant-design-vue';
import { PreviewText } from '../preview-text';
import { h } from 'vue';
import { LoadingOutlined } from '@ant-design/icons-vue';
export var Cascader = connect(
  AntdCascader,
  mapProps(
    {
      dataSource: 'options',
    },
    function (props, field) {
      return __assign(__assign({}, props), {
        suffixIcon:
          (field === null || field === void 0 ? void 0 : field['loading']) ||
          (field === null || field === void 0 ? void 0 : field['validating'])
            ? h(LoadingOutlined)
            : props.suffixIcon,
      });
    },
  ),
  mapReadPretty(PreviewText.Cascader),
);
export default Cascader;
//# sourceMappingURL=index.js.map
