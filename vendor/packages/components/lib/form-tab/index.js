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
exports.FormTab = void 0;
var vue_1 = require('vue');
var reactive_vue_1 = require('@formily/reactive-vue');
var reactive_1 = require('@formily/reactive');
var vue_2 = require('@formily/vue');
var ant_design_vue_1 = require('ant-design-vue');
var configs_1 = require('../__builtins__/configs');
var shared_1 = require('../__builtins__/shared');
var TabPane = ant_design_vue_1.Tabs.TabPane;
var useTabs = function () {
  var tabsField = (0, vue_2.useField)().value;
  var schema = (0, vue_2.useFieldSchema)().value;
  var tabs = (0, vue_1.reactive)([]);
  schema.mapProperties(function (schema, name) {
    var _a, _b;
    var field = tabsField.query(tabsField.address.concat(name)).take();
    if (
      (field === null || field === void 0 ? void 0 : field.display) === 'none' ||
      (field === null || field === void 0 ? void 0 : field.display) === 'hidden'
    )
      return;
    if (
      ((_a = schema['x-component']) === null || _a === void 0 ? void 0 : _a.indexOf('TabPane')) > -1
    ) {
      tabs.push({
        name: name,
        props: __assign(
          {
            key:
              ((_b =
                schema === null || schema === void 0 ? void 0 : schema['x-component-props']) ===
                null || _b === void 0
                ? void 0
                : _b.key) || name,
          },
          schema === null || schema === void 0 ? void 0 : schema['x-component-props'],
        ),
        schema: schema,
      });
    }
  });
  return tabs;
};
var createFormTab = function (defaultActiveKey) {
  var formTab = (0, reactive_1.model)({
    activeKey: defaultActiveKey,
    setActiveKey: function (key) {
      formTab.activeKey = key;
    },
  });
  return formTab;
};
var FormTabInner = (0, reactive_vue_1.observer)(
  // eslint-disable-next-line vue/one-component-per-file
  (0, vue_1.defineComponent)({
    name: 'FormTab',
    props: ['formTab'],
    setup: function (props, _a) {
      var attrs = _a.attrs;
      var field = (0, vue_2.useField)().value;
      var formTabRef = (0, vue_1.computed)(function () {
        var _a;
        return (_a = props.formTab) !== null && _a !== void 0 ? _a : createFormTab();
      });
      var prefixCls = ''.concat(configs_1.stylePrefix, '-form-tab');
      return function () {
        var _a;
        var formTab = formTabRef.value;
        var tabs = useTabs();
        var activeKey =
          props.activeKey ||
          (formTab === null || formTab === void 0 ? void 0 : formTab.activeKey) ||
          ((_a = tabs === null || tabs === void 0 ? void 0 : tabs[0]) === null || _a === void 0
            ? void 0
            : _a.name);
        var badgedTab = function (key, props) {
          var errors = field.form.queryFeedbacks({
            type: 'error',
            address: ''.concat(field.address.concat(key), '.*'),
          });
          if (errors.length) {
            return function () {
              return (0, vue_1.h)(
                ant_design_vue_1.Badge,
                {
                  class: [''.concat(prefixCls, '-errors-badge')],
                  count: errors.length,
                  size: 'small',
                },
                {
                  default: function () {
                    return props.tab;
                  },
                },
              );
            };
          }
          return props.tab;
        };
        var getTabs = function (tabs) {
          return tabs.map(function (_a) {
            var props = _a.props,
              schema = _a.schema,
              name = _a.name;
            return (0,
            vue_1.h)(TabPane, __assign(__assign({ key: name }, props), { tab: badgedTab(name, props), forceRender: true }), {
              default: function () {
                return [
                  (0, vue_1.h)(
                    vue_2.RecursionField,
                    {
                      schema: schema,
                      name: name,
                    },
                    {},
                  ),
                ];
              },
            });
          });
        };
        return (0, vue_1.h)(
          ant_design_vue_1.Tabs,
          __assign(__assign({}, attrs), {
            class: [prefixCls],
            style: attrs.style,
            activeKey: activeKey,
            onChange: function (key) {
              var _a, _b;
              (_a = props === null || props === void 0 ? void 0 : props.onChange) === null ||
              _a === void 0
                ? void 0
                : _a.call(props, key);
              (_b = formTab.setActiveKey) === null || _b === void 0
                ? void 0
                : _b.call(formTab, key);
            },
          }),
          {
            default: function () {
              return getTabs(tabs);
            },
          },
        );
      };
    },
  }),
);
// eslint-disable-next-line vue/one-component-per-file
var FormTabPane = (0, vue_1.defineComponent)({
  name: 'FormTabPane',
  setup: function (_props, _a) {
    var slots = _a.slots;
    return function () {
      return (0, vue_1.h)(vue_2.FragmentComponent, {}, slots);
    };
  },
});
exports.FormTab = (0, shared_1.composeExport)(FormTabInner, {
  TabPane: FormTabPane,
  createFormTab: createFormTab,
});
exports.default = exports.FormTab;
//# sourceMappingURL=index.js.map
