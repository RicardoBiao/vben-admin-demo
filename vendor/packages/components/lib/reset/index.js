'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.Reset = void 0;
var vue_1 = require('@formily/vue');
var reactive_vue_1 = require('@formily/reactive-vue');
var vue_2 = require('vue');
var ant_design_vue_1 = require('ant-design-vue');
exports.Reset = (0, reactive_vue_1.observer)(
  (0, vue_2.defineComponent)({
    name: 'Reset',
    props: {
      forceClear: {
        type: Boolean,
        default: false,
      },
      validate: {
        type: Boolean,
        default: false,
      },
    },
    setup: function (props, _a) {
      var attrs = _a.attrs,
        slots = _a.slots;
      var formRef = (0, vue_1.useParentForm)();
      return function () {
        var form = formRef === null || formRef === void 0 ? void 0 : formRef.value;
        return (0, vue_2.h)(
          ant_design_vue_1.Button,
          {
            attrs: attrs,
            onClick: function (e) {
              if (props === null || props === void 0 ? void 0 : props.onClick) {
                if (props.onClick(e) === false) return;
              }
              form === null || form === void 0
                ? void 0
                : form
                    .reset('*', {
                      forceClear: props.forceClear,
                      validate: props.validate,
                    })
                    .then(attrs.resetValidateSuccess)
                    .catch(attrs.resetValidateFailed);
            },
          },
          slots,
        );
      };
    },
  }),
);
exports.default = exports.Reset;
//# sourceMappingURL=index.js.map
