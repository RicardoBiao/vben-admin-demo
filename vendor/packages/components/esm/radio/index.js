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
import { composeExport, transformComponent, resolveComponent } from '../__builtins__/shared';
import { PreviewText } from '../preview-text';
import { Radio as AntdRadio } from 'ant-design-vue';
import { defineComponent, h } from 'vue';
var Button = AntdRadio.Button,
  Group = AntdRadio.Group;
var TransformRadioGroup = transformComponent(Group, {
  change: 'input',
});
var RadioGroupOption = defineComponent({
  name: 'RadioGroup',
  props: {
    options: {
      type: Array,
      default: function () {
        return [];
      },
    },
    optionType: {
      type: String,
      default: 'default',
    },
  },
  setup: function (customProps, _a) {
    var attrs = _a.attrs,
      slots = _a.slots;
    return function () {
      var options = customProps.options || [];
      var OptionType = customProps.optionType === 'button' ? Button : AntdRadio;
      var children =
        options.length !== 0
          ? {
              default: function () {
                return options.map(function (option) {
                  if (typeof option === 'string' || typeof option === 'number') {
                    return h(
                      OptionType,
                      { value: option },
                      {
                        default: function () {
                          var _a;
                          return [
                            resolveComponent(
                              (_a = slots === null || slots === void 0 ? void 0 : slots.option) !==
                                null && _a !== void 0
                                ? _a
                                : option,
                              { option: option },
                            ),
                          ];
                        },
                      },
                    );
                  } else {
                    return h(
                      OptionType,
                      __assign(__assign({}, option), { value: option.value, label: option.label }),
                      {
                        default: function () {
                          var _a;
                          return [
                            resolveComponent(
                              (_a = slots === null || slots === void 0 ? void 0 : slots.option) !==
                                null && _a !== void 0
                                ? _a
                                : option.label,
                              {
                                option: option,
                              },
                            ),
                          ];
                        },
                      },
                    );
                  }
                });
              },
            }
          : slots;
      return h(TransformRadioGroup, __assign({}, attrs), children);
    };
  },
});
var RadioGroup = connect(
  RadioGroupOption,
  mapProps({ dataSource: 'options' }),
  mapReadPretty(PreviewText.Select),
);
export var Radio = composeExport(AntdRadio, {
  Group: RadioGroup,
});
export default Radio;
//# sourceMappingURL=index.js.map
