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
exports.FormLayout =
  exports.useFormLayout =
  exports.useFormShallowLayout =
  exports.useFormDeepLayout =
  exports.FormLayoutShallowContext =
  exports.FormLayoutDeepContext =
    void 0;
var vue_1 = require('vue');
var configs_1 = require('../__builtins__/configs');
var useResponsiveFormLayout_1 = require('./useResponsiveFormLayout');
exports.FormLayoutDeepContext = Symbol('FormLayoutDeepContext');
exports.FormLayoutShallowContext = Symbol('FormLayoutShallowContext');
var useFormDeepLayout = function () {
  return (0, vue_1.inject)(exports.FormLayoutDeepContext, (0, vue_1.ref)({}));
};
exports.useFormDeepLayout = useFormDeepLayout;
var useFormShallowLayout = function () {
  return (0, vue_1.inject)(exports.FormLayoutShallowContext, (0, vue_1.ref)({}));
};
exports.useFormShallowLayout = useFormShallowLayout;
var useFormLayout = function () {
  var shallowLayout = (0, exports.useFormShallowLayout)();
  var deepLayout = (0, exports.useFormDeepLayout)();
  var formLayout = (0, vue_1.ref)(__assign(__assign({}, deepLayout.value), shallowLayout.value));
  (0, vue_1.watch)(
    [shallowLayout, deepLayout],
    function () {
      formLayout.value = __assign(__assign({}, deepLayout.value), shallowLayout.value);
    },
    {
      deep: true,
    },
  );
  return formLayout;
};
exports.useFormLayout = useFormLayout;
exports.FormLayout = (0, vue_1.defineComponent)({
  name: 'FFormLayout',
  props: {
    className: {},
    colon: { default: true },
    labelAlign: {},
    wrapperAlign: {},
    labelWrap: { default: false },
    labelWidth: {},
    wrapperWidth: {},
    wrapperWrap: { default: false },
    labelCol: {},
    wrapperCol: {},
    fullness: { default: false },
    size: { default: 'default' },
    layout: { default: 'horizontal' },
    direction: { default: 'ltr' },
    shallow: { default: true },
    feedbackLayout: {},
    tooltipLayout: {},
    bordered: { default: true },
    inset: { default: false },
    breakpoints: {},
    spaceGap: {},
    gridColumnGap: {},
    gridRowGap: {},
  },
  setup: function (customProps, _a) {
    var slots = _a.slots;
    var props = (0, useResponsiveFormLayout_1.useResponsiveFormLayout)(customProps).props;
    var deepLayout = (0, exports.useFormDeepLayout)();
    var newDeepLayout = (0, vue_1.ref)(__assign({}, deepLayout.value));
    var shallowProps = (0, vue_1.ref)({});
    (0, vue_1.watch)(
      [props, deepLayout],
      function () {
        shallowProps.value = props.value.shallow ? props.value : undefined;
        if (!props.value.shallow) {
          Object.assign(newDeepLayout.value, props.value);
        } else {
          if (props.value.size) {
            newDeepLayout.value.size = props.value.size;
          }
          if (props.value.colon) {
            newDeepLayout.value.colon = props.value.colon;
          }
        }
      },
      { deep: true, immediate: true },
    );
    (0, vue_1.provide)(exports.FormLayoutDeepContext, newDeepLayout);
    (0, vue_1.provide)(exports.FormLayoutShallowContext, shallowProps);
    var formPrefixCls = ''.concat(configs_1.stylePrefix, '-form');
    return function () {
      var _a;
      var classNames =
        ((_a = {}),
        (_a[
          ''
            .concat(formPrefixCls, '-')
            .concat(props === null || props === void 0 ? void 0 : props.value.layout)
        ] = true),
        (_a[''.concat(formPrefixCls, '-rtl')] =
          (props === null || props === void 0 ? void 0 : props.value.direction) === 'rtl'),
        (_a[
          ''
            .concat(formPrefixCls, '-')
            .concat(props === null || props === void 0 ? void 0 : props.value.size)
        ] = (props === null || props === void 0 ? void 0 : props.value.size) !== undefined),
        (_a[''.concat(props === null || props === void 0 ? void 0 : props.value.className)] =
          (props === null || props === void 0 ? void 0 : props.value.className) !== undefined),
        _a);
      return (0, vue_1.h)(
        'div',
        {
          ref: 'root',
          class: classNames,
        },
        slots,
      );
    };
  },
});
exports.default = exports.FormLayout;
//# sourceMappingURL=index.js.map
