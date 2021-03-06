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
import { connect, mapProps } from '@formily/vue';
import { TreeSelect as AntdTreeSelect } from 'ant-design-vue';
import { LoadingOutlined } from '@ant-design/icons-vue';
import { h } from 'vue';
export var TreeSelect = connect(
  AntdTreeSelect,
  mapProps(
    {
      dataSource: 'treeData',
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
);
export default TreeSelect;
//# sourceMappingURL=index.js.map
