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
exports.Form = void 0;
var vue_1 = require('@formily/vue');
var vue_2 = require('vue');
var form_layout_1 = require('../form-layout');
var preview_text_1 = require('../preview-text');
var FormProvider = vue_1.FormProvider;
exports.Form = (0, vue_2.defineComponent)({
  name: 'FForm',
  props: ['form', 'component', 'previewTextPlaceholder', 'onAutoSubmit', 'onAutoSubmitFailed'],
  setup: function (props, _a) {
    var attrs = _a.attrs,
      slots = _a.slots;
    var top = (0, vue_1.useForm)();
    return function () {
      var form = props.form,
        _a = props.component,
        component = _a === void 0 ? 'form' : _a,
        _b = props.onAutoSubmit,
        onAutoSubmit =
          _b === void 0 ? (attrs === null || attrs === void 0 ? void 0 : attrs.autoSubmit) : _b,
        _c = props.onAutoSubmitFailed,
        onAutoSubmitFailed =
          _c === void 0
            ? attrs === null || attrs === void 0
              ? void 0
              : attrs.autoSubmitFailed
            : _c,
        _d = props.previewTextPlaceholder,
        previewTextPlaceholder =
          _d === void 0
            ? slots === null || slots === void 0
              ? void 0
              : slots.previewTextPlaceholder
            : _d;
      var renderContent = function (form) {
        return (0, vue_2.h)(
          preview_text_1.PreviewText.Placeholder,
          {
            value: previewTextPlaceholder,
          },
          {
            default: function () {
              return [
                (0, vue_2.h)(form_layout_1.FormLayout, __assign({}, attrs), {
                  default: function () {
                    return [
                      (0, vue_2.h)(
                        component,
                        {
                          onSubmit: function (e) {
                            var _a, _b;
                            (_a = e === null || e === void 0 ? void 0 : e.stopPropagation) ===
                              null || _a === void 0
                              ? void 0
                              : _a.call(e);
                            (_b = e === null || e === void 0 ? void 0 : e.preventDefault) ===
                              null || _b === void 0
                              ? void 0
                              : _b.call(e);
                            form.submit(onAutoSubmit).catch(onAutoSubmitFailed);
                          },
                        },
                        slots,
                      ),
                    ];
                  },
                }),
              ];
            },
          },
        );
      };
      if (form) {
        return (0, vue_2.h)(
          FormProvider,
          { form: form },
          {
            default: function () {
              return renderContent(form);
            },
          },
        );
      }
      if (!top.value) throw new Error('must pass form instance by createForm');
      return renderContent(top.value);
    };
  },
});
exports.default = exports.Form;
//# sourceMappingURL=index.js.map
