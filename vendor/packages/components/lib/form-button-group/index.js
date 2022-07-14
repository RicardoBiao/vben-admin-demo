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
exports.FormButtonGroup = void 0;
var vue_1 = require('vue');
var space_1 = require('../space');
var form_item_1 = require('../form-item');
var configs_1 = require('../__builtins__/configs');
exports.FormButtonGroup = (0, vue_1.defineComponent)({
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
    var prefixCls = ''.concat(configs_1.stylePrefix, '-form-button-group');
    return function () {
      if (props.alignFormItem) {
        return (0, vue_1.h)(
          form_item_1.FormBaseItem,
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
              return (0, vue_1.h)(space_1.Space, { size: props.gutter }, slots);
            },
          },
        );
      } else {
        return (0, vue_1.h)(
          space_1.Space,
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
exports.default = exports.FormButtonGroup;
//# sourceMappingURL=index.js.map
