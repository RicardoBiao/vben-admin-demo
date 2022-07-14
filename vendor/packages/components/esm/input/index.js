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
import { composeExport, transformComponent } from '../__builtins__/shared';
import { connect, mapProps, mapReadPretty } from '@formily/vue';
import { PreviewText } from '../preview-text';
import { Input as AntInput } from 'ant-design-vue';
var TransformElInput = transformComponent(AntInput, {
  change: 'input',
});
var InnerInput = connect(
  TransformElInput,
  mapProps({ readOnly: 'read-only' }),
  mapReadPretty(PreviewText.Input),
);
var TextArea = connect(
  AntInput.TextArea,
  mapProps(function (props) {
    return __assign({}, props);
  }),
  mapReadPretty(PreviewText.Input),
);
export var Input = composeExport(InnerInput, {
  TextArea: TextArea,
});
export default Input;
//# sourceMappingURL=index.js.map
