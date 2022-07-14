import { useParentForm } from '@formily/vue';
import { observer } from '@formily/reactive-vue';
import { defineComponent, h } from 'vue';
import { Button as AntButton } from 'ant-design-vue';
export var Reset = observer(
  defineComponent({
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
      var formRef = useParentForm();
      return function () {
        var form = formRef === null || formRef === void 0 ? void 0 : formRef.value;
        return h(
          AntButton,
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
export default Reset;
//# sourceMappingURL=index.js.map
