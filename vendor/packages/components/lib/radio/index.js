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
exports.Radio = void 0;
var vue_1 = require('@formily/vue');
var shared_1 = require('../__builtins__/shared');
var preview_text_1 = require('../preview-text');
var ant_design_vue_1 = require('ant-design-vue');
var vue_2 = require('vue');
var Button = ant_design_vue_1.Radio.Button,
  Group = ant_design_vue_1.Radio.Group;
var TransformRadioGroup = (0, shared_1.transformComponent)(Group, {
  change: 'input',
});
var RadioGroupOption = (0, vue_2.defineComponent)({
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
      var OptionType = customProps.optionType === 'button' ? Button : ant_design_vue_1.Radio;
      var children =
        options.length !== 0
          ? {
              default: function () {
                return options.map(function (option) {
                  if (typeof option === 'string' || typeof option === 'number') {
                    return (0, vue_2.h)(
                      OptionType,
                      { value: option },
                      {
                        default: function () {
                          var _a;
                          return [
                            (0, shared_1.resolveComponent)(
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
                    return (0, vue_2.h)(
                      OptionType,
                      __assign(__assign({}, option), { value: option.value, label: option.label }),
                      {
                        default: function () {
                          var _a;
                          return [
                            (0, shared_1.resolveComponent)(
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
      return (0, vue_2.h)(TransformRadioGroup, __assign({}, attrs), children);
    };
  },
});
var RadioGroup = (0, vue_1.connect)(
  RadioGroupOption,
  (0, vue_1.mapProps)({ dataSource: 'options' }),
  (0, vue_1.mapReadPretty)(preview_text_1.PreviewText.Select),
);
exports.Radio = (0, shared_1.composeExport)(ant_design_vue_1.Radio, {
  Group: RadioGroup,
});
exports.default = exports.Radio;
//# sourceMappingURL=index.js.map
