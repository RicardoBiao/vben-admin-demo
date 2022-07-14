'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.PreviewText = exports.usePlaceholder = void 0;
var vue_1 = require('vue');
var vue_2 = require('@formily/vue');
var shared_1 = require('@formily/shared');
var shared_2 = require('../__builtins__/shared');
var configs_1 = require('../__builtins__/configs');
var ant_design_vue_1 = require('ant-design-vue');
var space_1 = require('../space');
var reactive_vue_1 = require('@formily/reactive-vue');
var __builtins__1 = require('../__builtins__');
var prefixCls = ''.concat(configs_1.stylePrefix, '-preview-text');
var PlaceholderContext = (0, shared_2.createContext)('N/A');
var usePlaceholder = function (value) {
  var placeholderCtx = (0, shared_2.useContext)(PlaceholderContext);
  var placeholder = (0, vue_1.computed)(function () {
    return (0, shared_1.isValid)(value) && value !== ''
      ? value
      : (0, shared_2.resolveComponent)(placeholderCtx.value) || 'N/A';
  });
  return placeholder;
};
exports.usePlaceholder = usePlaceholder;
var Select = (0, reactive_vue_1.observer)(
  // eslint-disable-next-line vue/one-component-per-file
  (0, vue_1.defineComponent)({
    name: 'PreviewTextSelect',
    props: [],
    setup: function (_props, _a) {
      var attrs = _a.attrs;
      var fieldRef = (0, vue_2.useField)();
      var field = fieldRef.value;
      var props = attrs;
      var placeholder = (0, exports.usePlaceholder)();
      var getSelected = function () {
        var value = props.value;
        if (props.mode === 'multiple' || props.mode === 'tags') {
          if (props.labelInValue) {
            return (0, shared_1.isArr)(value) ? value : [];
          }
          return (0, shared_1.isArr)(value)
            ? value.map(function (val) {
                return { label: val, value: val };
              })
            : [];
        } else {
          if (props.labelInValue) {
            return (0, shared_1.isValid)(value) ? [value] : [];
          }
          return (0, shared_1.isValid)(value) ? [{ label: value, value: value }] : [];
        }
      };
      var getLabels = function () {
        var _a, _b;
        var selected = getSelected();
        var dataSource = (
          (_a = field === null || field === void 0 ? void 0 : field.dataSource) === null ||
          _a === void 0
            ? void 0
            : _a.length
        )
          ? field.dataSource
          : (
              (_b = props === null || props === void 0 ? void 0 : props.options) === null ||
              _b === void 0
                ? void 0
                : _b.length
            )
          ? props.options
          : [];
        if (!selected.length) {
          return (0, vue_1.h)(
            ant_design_vue_1.Tag,
            {},
            {
              default: function () {
                return placeholder.value;
              },
            },
          );
        }
        return selected.map(function (target, key) {
          var _a;
          var text =
            ((_a =
              dataSource === null || dataSource === void 0
                ? void 0
                : dataSource.find(function (item) {
                    return (
                      item.value == (target === null || target === void 0 ? void 0 : target.value)
                    );
                  })) === null || _a === void 0
              ? void 0
              : _a.label) || (target === null || target === void 0 ? void 0 : target.label);
          return (0, vue_1.h)(
            ant_design_vue_1.Tag,
            {
              key: key,
            },
            {
              default: function () {
                return text || placeholder.value;
              },
            },
          );
        });
      };
      return function () {
        return (0, vue_1.h)(
          space_1.Space,
          {
            class: [prefixCls],
            style: attrs.style,
          },
          {
            default: function () {
              return getLabels();
            },
          },
        );
      };
    },
  }),
);
// eslint-disable-next-line vue/one-component-per-file
var Input = (0, reactive_vue_1.observer)(
  (0, vue_1.defineComponent)({
    name: 'PreviewTextInput',
    setup: function (_props, _a) {
      var attrs = _a.attrs,
        slots = _a.slots;
      return function () {
        var placeholder = (0, exports.usePlaceholder)(attrs.value);
        return (0, vue_1.h)(
          space_1.Space,
          {
            class: [prefixCls],
            style: attrs.style,
          },
          {
            default: function () {
              var _a, _b, _c, _d;
              return [
                (_a = slots === null || slots === void 0 ? void 0 : slots.prepend) === null ||
                _a === void 0
                  ? void 0
                  : _a.call(slots),
                (_b = slots === null || slots === void 0 ? void 0 : slots.prefix) === null ||
                _b === void 0
                  ? void 0
                  : _b.call(slots),
                placeholder.value,
                (_c = slots === null || slots === void 0 ? void 0 : slots.suffix) === null ||
                _c === void 0
                  ? void 0
                  : _c.call(slots),
                (_d = slots === null || slots === void 0 ? void 0 : slots.append) === null ||
                _d === void 0
                  ? void 0
                  : _d.call(slots),
              ];
            },
          },
        );
      };
    },
  }),
);
// eslint-disable-next-line vue/one-component-per-file
var Text = (0, vue_1.defineComponent)({
  name: 'PreviewText',
  setup: function (_props, _a) {
    var attrs = _a.attrs;
    var placeholder = (0, exports.usePlaceholder)();
    return function () {
      return (0, vue_1.h)(
        'div',
        {
          class: [prefixCls],
          style: attrs.style,
        },
        {
          default: function () {
            return placeholder.value;
          },
        },
      );
    };
  },
});
var Cascader = (0, reactive_vue_1.observer)(
  // eslint-disable-next-line vue/one-component-per-file
  (0, vue_1.defineComponent)({
    name: 'PreviewTextCascader',
    setup: function (_props, _a) {
      var _b, _c;
      var attrs = _a.attrs;
      var fieldRef = (0, vue_2.useField)();
      var field = fieldRef.value;
      var props = attrs;
      var dataSource = (
        (_b = field === null || field === void 0 ? void 0 : field.dataSource) === null ||
        _b === void 0
          ? void 0
          : _b.length
      )
        ? field.dataSource
        : (
            (_c = props === null || props === void 0 ? void 0 : props.options) === null ||
            _c === void 0
              ? void 0
              : _c.length
          )
        ? props.options
        : [];
      var placeholder = (0, exports.usePlaceholder)();
      var getSelected = function () {
        return (0, shared_1.isArr)(props.value) ? props.value : [];
      };
      var findLabel = function (value, dataSource) {
        for (
          var i = 0;
          i < (dataSource === null || dataSource === void 0 ? void 0 : dataSource.length);
          i++
        ) {
          var item = dataSource[i];
          if ((item === null || item === void 0 ? void 0 : item.value) === value) {
            return item === null || item === void 0 ? void 0 : item.label;
          } else {
            var childLabel = findLabel(
              value,
              item === null || item === void 0 ? void 0 : item.children,
            );
            if (childLabel) return childLabel;
          }
        }
      };
      var getLabels = function () {
        var selected = getSelected();
        if (!(selected === null || selected === void 0 ? void 0 : selected.length)) {
          return (0, vue_1.h)(
            ant_design_vue_1.Tag,
            {},
            {
              default: function () {
                return placeholder.value;
              },
            },
          );
        }
        return selected.map(function (value, key) {
          var text = findLabel(value, dataSource);
          return (0, vue_1.h)(
            ant_design_vue_1.Tag,
            {
              key: key,
            },
            {
              default: function () {
                return text || placeholder.value;
              },
            },
          );
        });
      };
      return function () {
        return (0, vue_1.h)(
          space_1.Space,
          {
            class: [prefixCls],
            style: attrs.style,
          },
          {
            default: function () {
              return getLabels();
            },
          },
        );
      };
    },
  }),
);
// eslint-disable-next-line vue/one-component-per-file
var TimePicker = (0, vue_1.defineComponent)({
  name: 'PreviewTextTimePicker',
  setup: function (_props, _a) {
    var attrs = _a.attrs;
    var props = attrs;
    var placeholder = (0, exports.usePlaceholder)();
    var getLabels = function () {
      var labels = (0, __builtins__1.formatMomentValue)(
        props.value,
        props.format,
        placeholder.value,
      );
      return (0, shared_1.isArr)(labels) ? labels.join('~') : labels;
    };
    return function () {
      return (0, vue_1.h)(
        'div',
        {
          class: [prefixCls],
          style: attrs.style,
        },
        {
          default: function () {
            return getLabels();
          },
        },
      );
    };
  },
});
// eslint-disable-next-line vue/one-component-per-file
var DatePicker = (0, vue_1.defineComponent)({
  name: 'PreviewTextDatePicker',
  setup: function (_props, _a) {
    var attrs = _a.attrs;
    var props = attrs;
    var placeholder = (0, exports.usePlaceholder)();
    var getLabels = function () {
      var labels = (0, __builtins__1.formatMomentValue)(
        props.value,
        props.format,
        placeholder.value,
      );
      return (0, shared_1.isArr)(labels) ? labels.join('~') : labels;
    };
    return function () {
      return (0, vue_1.h)(
        'div',
        {
          class: [prefixCls],
          style: attrs.style,
        },
        {
          default: function () {
            return getLabels();
          },
        },
      );
    };
  },
});
// eslint-disable-next-line vue/one-component-per-file
var DateRangePicker = (0, vue_1.defineComponent)({
  name: 'PreviewTextDatePicker',
  setup: function (_props, _a) {
    var attrs = _a.attrs;
    var props = attrs;
    var placeholder = (0, exports.usePlaceholder)();
    var getLabels = function () {
      var labels = (0, __builtins__1.formatMomentValue)(
        props.value,
        props.format,
        placeholder.value,
      );
      return (0, shared_1.isArr)(labels) ? labels.join('~') : labels;
    };
    return function () {
      return (0, vue_1.h)(
        'div',
        {
          class: [prefixCls],
          style: attrs.style,
        },
        {
          default: function () {
            return getLabels();
          },
        },
      );
    };
  },
});
exports.PreviewText = (0, shared_2.composeExport)(Text, {
  Input: Input,
  Select: Select,
  Cascader: Cascader,
  DatePicker: DatePicker,
  DateRangePicker: DateRangePicker,
  TimePicker: TimePicker,
  Placeholder: PlaceholderContext.Provider,
  usePlaceholder: exports.usePlaceholder,
});
exports.default = exports.PreviewText;
//# sourceMappingURL=index.js.map
