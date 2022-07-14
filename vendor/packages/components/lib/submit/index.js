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
exports.Submit = void 0;
var vue_1 = require('@formily/vue');
var reactive_vue_1 = require('@formily/reactive-vue');
var vue_2 = require('vue');
var ant_design_vue_1 = require('ant-design-vue');
exports.Submit = (0, reactive_vue_1.observer)(
  (0, vue_2.defineComponent)({
    name: 'FSubmit',
    props: ['onClick', 'onSubmit', 'onSubmitSuccess', 'onSubmitFailed'],
    setup: function (props, _a) {
      var attrs = _a.attrs,
        slots = _a.slots;
      var formRef = (0, vue_1.useParentForm)();
      return function () {
        var onClick = props.onClick,
          _a = props.onSubmit,
          onSubmit =
            _a === void 0 ? (attrs === null || attrs === void 0 ? void 0 : attrs.onSubmit) : _a,
          _b = props.onSubmitSuccess,
          onSubmitSuccess =
            _b === void 0
              ? attrs === null || attrs === void 0
                ? void 0
                : attrs.onSubmitSuccess
              : _b,
          _c = props.onSubmitFailed,
          onSubmitFailed =
            _c === void 0
              ? attrs === null || attrs === void 0
                ? void 0
                : attrs.onSubmitFailed
              : _c;
        var form = formRef === null || formRef === void 0 ? void 0 : formRef.value;
        return (0, vue_2.h)(
          ant_design_vue_1.Button,
          __assign(__assign({}, attrs), {
            nativeType: (attrs === null || attrs === void 0 ? void 0 : attrs.submit)
              ? 'button'
              : 'submit',
            type: 'primary',
            loading:
              attrs.loading !== undefined
                ? attrs.loading
                : form === null || form === void 0
                ? void 0
                : form.submitting,
            onClick: function (e) {
              if (onClick) {
                if (onClick(e) === false) return;
              }
              if (onSubmit) {
                form === null || form === void 0
                  ? void 0
                  : form.submit(onSubmit).then(onSubmitSuccess).catch(onSubmitFailed);
              }
            },
          }),
          slots,
        );
      };
    },
  }),
);
exports.default = exports.Submit;
//# sourceMappingURL=index.js.map
