import { defineComponent, computed, h } from 'vue';
import { useField } from '@formily/vue';
import { isArr, isValid } from '@formily/shared';
import { createContext, resolveComponent, useContext, composeExport } from '../__builtins__/shared';
import { stylePrefix } from '../__builtins__/configs';
import { Tag } from 'ant-design-vue';
import { Space } from '../space';
import { observer } from '@formily/reactive-vue';
import { formatMomentValue } from '../__builtins__';
var prefixCls = ''.concat(stylePrefix, '-preview-text');
var PlaceholderContext = createContext('N/A');
export var usePlaceholder = function (value) {
  var placeholderCtx = useContext(PlaceholderContext);
  var placeholder = computed(function () {
    return isValid(value) && value !== '' ? value : resolveComponent(placeholderCtx.value) || 'N/A';
  });
  return placeholder;
};
var Select = observer(
  // eslint-disable-next-line vue/one-component-per-file
  defineComponent({
    name: 'PreviewTextSelect',
    props: [],
    setup: function (_props, _a) {
      var attrs = _a.attrs;
      var fieldRef = useField();
      var field = fieldRef.value;
      var props = attrs;
      var placeholder = usePlaceholder();
      var getSelected = function () {
        var value = props.value;
        if (props.mode === 'multiple' || props.mode === 'tags') {
          if (props.labelInValue) {
            return isArr(value) ? value : [];
          }
          return isArr(value)
            ? value.map(function (val) {
                return { label: val, value: val };
              })
            : [];
        } else {
          if (props.labelInValue) {
            return isValid(value) ? [value] : [];
          }
          return isValid(value) ? [{ label: value, value: value }] : [];
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
          return h(
            Tag,
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
          return h(
            Tag,
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
        return h(
          Space,
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
var Input = observer(
  defineComponent({
    name: 'PreviewTextInput',
    setup: function (_props, _a) {
      var attrs = _a.attrs,
        slots = _a.slots;
      return function () {
        var placeholder = usePlaceholder(attrs.value);
        return h(
          Space,
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
var Text = defineComponent({
  name: 'PreviewText',
  setup: function (_props, _a) {
    var attrs = _a.attrs;
    var placeholder = usePlaceholder();
    return function () {
      return h(
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
var Cascader = observer(
  // eslint-disable-next-line vue/one-component-per-file
  defineComponent({
    name: 'PreviewTextCascader',
    setup: function (_props, _a) {
      var _b, _c;
      var attrs = _a.attrs;
      var fieldRef = useField();
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
      var placeholder = usePlaceholder();
      var getSelected = function () {
        return isArr(props.value) ? props.value : [];
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
          return h(
            Tag,
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
          return h(
            Tag,
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
        return h(
          Space,
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
var TimePicker = defineComponent({
  name: 'PreviewTextTimePicker',
  setup: function (_props, _a) {
    var attrs = _a.attrs;
    var props = attrs;
    var placeholder = usePlaceholder();
    var getLabels = function () {
      var labels = formatMomentValue(props.value, props.format, placeholder.value);
      return isArr(labels) ? labels.join('~') : labels;
    };
    return function () {
      return h(
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
var DatePicker = defineComponent({
  name: 'PreviewTextDatePicker',
  setup: function (_props, _a) {
    var attrs = _a.attrs;
    var props = attrs;
    var placeholder = usePlaceholder();
    var getLabels = function () {
      var labels = formatMomentValue(props.value, props.format, placeholder.value);
      return isArr(labels) ? labels.join('~') : labels;
    };
    return function () {
      return h(
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
var DateRangePicker = defineComponent({
  name: 'PreviewTextDatePicker',
  setup: function (_props, _a) {
    var attrs = _a.attrs;
    var props = attrs;
    var placeholder = usePlaceholder();
    var getLabels = function () {
      var labels = formatMomentValue(props.value, props.format, placeholder.value);
      return isArr(labels) ? labels.join('~') : labels;
    };
    return function () {
      return h(
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
export var PreviewText = composeExport(Text, {
  Input: Input,
  Select: Select,
  Cascader: Cascader,
  DatePicker: DatePicker,
  DateRangePicker: DateRangePicker,
  TimePicker: TimePicker,
  Placeholder: PlaceholderContext.Provider,
  usePlaceholder: usePlaceholder,
});
export default PreviewText;
//# sourceMappingURL=index.js.map
