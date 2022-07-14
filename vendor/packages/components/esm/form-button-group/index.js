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
import { defineComponent, h } from 'vue';
import { Space } from '../space';
import { FormBaseItem } from '../form-item';
import { stylePrefix } from '../__builtins__/configs';
export var FormButtonGroup = defineComponent({
  name: 'FormButtonGroup',
  props: {
    align: {
      type: String,
      default: 'left',
    },
    gutter: {
      type: Number,
      default: 8,
    },
    alignFormItem: {
      type: Boolean,
      default: false,
    },
  },
  setup: function (props, _a) {
    var slots = _a.slots,
      attrs = _a.attrs;
    var prefixCls = ''.concat(stylePrefix, '-form-button-group');
    return function () {
      if (props.alignFormItem) {
        return h(
          FormBaseItem,
          __assign(__assign({}, attrs), {
            style: {
              margin: 0,
              padding: 0,
              width: '100%',
            },
            colon: false,
            label: ' ',
          }),
          {
            default: function () {
              return h(Space, { size: props.gutter }, slots);
            },
          },
        );
      } else {
        return h(
          Space,
          __assign(__assign({}, attrs), {
            class: [prefixCls],
            style: {
              justifyContent:
                props.align === 'left'
                  ? 'flex-start'
                  : props.align === 'right'
                  ? 'flex-end'
                  : 'center',
              display: 'flex',
            },
            size: props.gutter,
          }),
          slots,
        );
      }
    };
  },
});
export default FormButtonGroup;
//# sourceMappingURL=index.js.map
