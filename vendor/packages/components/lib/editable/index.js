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
exports.Editable = void 0;
var vue_1 = require('@formily/vue');
var vue_2 = require('vue');
var reactive_vue_1 = require('@formily/reactive-vue');
var ant_design_vue_1 = require('ant-design-vue');
var __builtins__1 = require('../__builtins__');
var form_item_1 = require('../form-item');
var core_1 = require('@formily/core');
var configs_1 = require('../__builtins__/configs');
var reactive_1 = require('@formily/reactive');
var icons_vue_1 = require('@ant-design/icons-vue');
var useInitialPattern = function (fieldRef) {
  var field = fieldRef.value;
  return (0, vue_2.computed)(function () {
    return field === null || field === void 0 ? void 0 : field.pattern;
  });
};
var useFormItemProps = function (fieldRef) {
  var field = fieldRef.value;
  if ((0, core_1.isVoidField)(field)) return {};
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
var EditableInner = (0, reactive_vue_1.observer)(
  // eslint-disable-next-line vue/one-component-per-file
  (0, vue_2.defineComponent)({
    name: 'Editable',
    setup: function (props, _a) {
      var attrs = _a.attrs,
        slots = _a.slots;
      var fieldRef = (0, vue_1.useField)();
      var innerRef = (0, vue_2.ref)(document.body);
      var pattern = useInitialPattern(fieldRef);
      var prefixCls = ''.concat(configs_1.stylePrefix, '-editable');
      var setEditable = function (payload) {
        // console.log('pattern', pattern)
        if (pattern.value !== 'editable') return;
        fieldRef.value.setPattern(payload ? 'editable' : 'readPretty');
      };
      var dispose = (0, reactive_1.reaction)(
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
      (0, vue_2.onBeforeUnmount)(function () {
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
          return (0, vue_2.h)(form_item_1.FormBaseItem, __assign(__assign({}, attrs), itemProps), {
            default: function () {
              return pattern.value === 'editable'
                ? (0, vue_2.h)(
                    icons_vue_1.EditOutlined,
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
          return (0, vue_2.h)(
            form_item_1.FormBaseItem,
            {
              attrs: __assign({}, attrs),
            },
            {
              default: function () {
                return (0, vue_2.h)(
                  icons_vue_1.CloseOutlined,
                  {
                    class: [''.concat(prefixCls, '-close-btn')],
                  },
                  {},
                );
              },
            },
          );
        };
        return (0, vue_2.h)(
          'div',
          {
            class: prefixCls,
            ref: 'innerRef',
            onClick: onClick,
          },
          {
            default: function () {
              return (0, vue_2.h)(
                'div',
                {
                  class: ''.concat(prefixCls, '-content'),
                },
                {
                  default: function () {
                    return [
                      (0, vue_2.h)(
                        form_item_1.FormBaseItem,
                        __assign(__assign({}, attrs), itemProps),
                        slots,
                      ),
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
var EditablePopover = (0, reactive_vue_1.observer)(
  // eslint-disable-next-line vue/one-component-per-file
  (0, vue_2.defineComponent)({
    name: 'EditablePopover',
    setup: function (props, _a) {
      var attrs = _a.attrs,
        slots = _a.slots;
      var fieldRef = (0, vue_1.useField)();
      var prefixCls = ''.concat(configs_1.stylePrefix, '-editable');
      var visible = (0, vue_2.ref)(false);
      return function () {
        var field = fieldRef.value;
        var pattern = useInitialPattern(fieldRef);
        return (0, vue_2.h)(
          ant_design_vue_1.Popover,
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
              return (0, vue_2.h)(
                form_item_1.FormBaseItem,
                {
                  class: [''.concat(prefixCls, '-trigger')],
                },
                {
                  default: function () {
                    return (0, vue_2.h)(
                      'div',
                      {
                        class: [''.concat(prefixCls, '-content')],
                      },
                      {
                        default: function () {
                          return [
                            (0, vue_2.h)(
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
                              ? (0, vue_2.h)(icons_vue_1.EditOutlined, {
                                  class: [''.concat(prefixCls, '-edit-btn')],
                                })
                              : (0, vue_2.h)(icons_vue_1.MessageOutlined, {
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
exports.Editable = (0, __builtins__1.composeExport)(EditableInner, {
  Popover: EditablePopover,
});
exports.default = exports.Editable;
//# sourceMappingURL=index.js.map
