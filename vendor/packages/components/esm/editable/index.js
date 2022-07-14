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
import { useField } from '@formily/vue';
import { defineComponent, ref, onBeforeUnmount, computed, h } from 'vue';
import { observer } from '@formily/reactive-vue';
import { Popover as AntdPopover } from 'ant-design-vue';
import { composeExport } from '../__builtins__';
import { FormBaseItem } from '../form-item';
import { isVoidField } from '@formily/core';
import { stylePrefix } from '../__builtins__/configs';
import { reaction } from '@formily/reactive';
import { EditOutlined, CloseOutlined, MessageOutlined } from '@ant-design/icons-vue';
var useInitialPattern = function (fieldRef) {
  var field = fieldRef.value;
  return computed(function () {
    return field === null || field === void 0 ? void 0 : field.pattern;
  });
};
var useFormItemProps = function (fieldRef) {
  var field = fieldRef.value;
  if (isVoidField(field)) return {};
  if (!field) return {};
  var takeMessage = function () {
    if (field.selfErrors.length) return field.selfErrors;
    if (field.selfWarnings.length) return field.selfWarnings;
    if (field.selfSuccesses.length) return field.selfSuccesses;
  };
  return {
    feedbackStatus: field.validateStatus === 'validating' ? 'pending' : field.validateStatus,
    feedbackText: takeMessage(),
    extra: field.description,
  };
};
var EditableInner = observer(
  // eslint-disable-next-line vue/one-component-per-file
  defineComponent({
    name: 'Editable',
    setup: function (props, _a) {
      var attrs = _a.attrs,
        slots = _a.slots;
      var fieldRef = useField();
      var innerRef = ref(document.body);
      var pattern = useInitialPattern(fieldRef);
      var prefixCls = ''.concat(stylePrefix, '-editable');
      var setEditable = function (payload) {
        // console.log('pattern', pattern)
        if (pattern.value !== 'editable') return;
        fieldRef.value.setPattern(payload ? 'editable' : 'readPretty');
      };
      var dispose = reaction(
        function () {
          return pattern;
        },
        function (pattern) {
          if (pattern.value === 'editable') {
            fieldRef.value.setPattern('readPretty');
          }
        },
        {
          fireImmediately: true,
        },
      );
      onBeforeUnmount(function () {
        var field = fieldRef.value;
        field.setPattern(pattern.value);
        dispose();
      });
      return function () {
        var field = fieldRef.value;
        var editable = field.pattern === 'editable';
        var itemProps = useFormItemProps(fieldRef);
        var closeEditable = function () {
          var _a, _b;
          if (
            editable &&
            !((_b = (_a = fieldRef.value) === null || _a === void 0 ? void 0 : _a.errors) ===
              null || _b === void 0
              ? void 0
              : _b.length)
          ) {
            setEditable(false);
          }
        };
        var onClick = function (e) {
          var target = e.target;
          var close = innerRef.value.querySelector('.'.concat(prefixCls, '-close-btn'));
          if (
            (target === null || target === void 0 ? void 0 : target.contains(close)) ||
            (close === null || close === void 0 ? void 0 : close.contains(target))
          ) {
            closeEditable();
          } else if (!editable) {
            setTimeout(function () {
              setEditable(true);
              setTimeout(function () {
                var _a;
                (_a = innerRef.value.querySelector('input')) === null || _a === void 0
                  ? void 0
                  : _a.focus();
              });
            });
          }
        };
        var renderEditHelper = function () {
          if (editable) return;
          return h(FormBaseItem, __assign(__assign({}, attrs), itemProps), {
            default: function () {
              return pattern.value === 'editable'
                ? h(
                    EditOutlined,
                    {
                      class: [''.concat(prefixCls, '-edit-btn')],
                    },
                    {},
                  )
                : null;
            },
          });
        };
        var renderCloseHelper = function () {
          if (!editable) return;
          return h(
            FormBaseItem,
            {
              attrs: __assign({}, attrs),
            },
            {
              default: function () {
                return h(
                  CloseOutlined,
                  {
                    class: [''.concat(prefixCls, '-close-btn')],
                  },
                  {},
                );
              },
            },
          );
        };
        return h(
          'div',
          {
            class: prefixCls,
            ref: 'innerRef',
            onClick: onClick,
          },
          {
            default: function () {
              return h(
                'div',
                {
                  class: ''.concat(prefixCls, '-content'),
                },
                {
                  default: function () {
                    return [
                      h(FormBaseItem, __assign(__assign({}, attrs), itemProps), slots),
                      renderEditHelper(),
                      renderCloseHelper(),
                    ];
                  },
                },
              );
            },
          },
        );
      };
    },
  }),
);
var EditablePopover = observer(
  // eslint-disable-next-line vue/one-component-per-file
  defineComponent({
    name: 'EditablePopover',
    setup: function (props, _a) {
      var attrs = _a.attrs,
        slots = _a.slots;
      var fieldRef = useField();
      var prefixCls = ''.concat(stylePrefix, '-editable');
      var visible = ref(false);
      return function () {
        var field = fieldRef.value;
        var pattern = useInitialPattern(fieldRef);
        return h(
          AntdPopover,
          __assign(__assign(__assign({}, props), attrs), {
            class: [prefixCls, attrs.class],
            title: attrs.title || field.title,
            visible: visible.value,
            trigger: 'click',
            onVisibleChange: function (value) {
              visible.value = value;
            },
          }),
          {
            content: function () {
              return [slots.default()];
            },
            default: function () {
              return h(
                FormBaseItem,
                {
                  class: [''.concat(prefixCls, '-trigger')],
                },
                {
                  default: function () {
                    return h(
                      'div',
                      {
                        class: [''.concat(prefixCls, '-content')],
                      },
                      {
                        default: function () {
                          return [
                            h(
                              'span',
                              {
                                class: [''.concat(prefixCls, '-preview')],
                              },
                              {
                                default: function () {
                                  return [attrs.title || field.title];
                                },
                              },
                            ),
                            pattern.value === 'editable'
                              ? h(EditOutlined, {
                                  class: [''.concat(prefixCls, '-edit-btn')],
                                })
                              : h(MessageOutlined, {
                                  class: [''.concat(prefixCls, '-edit-btn')],
                                }),
                          ];
                        },
                      },
                    );
                  },
                },
              );
            },
          },
        );
      };
    },
  }),
);
export var Editable = composeExport(EditableInner, {
  Popover: EditablePopover,
});
export default Editable;
//# sourceMappingURL=index.js.map
