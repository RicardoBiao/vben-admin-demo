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
var __rest =
  (this && this.__rest) ||
  function (s, e) {
    var t = {};
    for (var p in s)
      if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === 'function')
      for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
          t[p[i]] = s[p[i]];
      }
    return t;
  };
import { Collapse, Badge } from 'ant-design-vue';
import { model, markRaw } from '@formily/reactive';
import { useField, useFieldSchema, RecursionField, FragmentComponent } from '@formily/vue';
import { observer } from '@formily/reactive-vue';
import { computed, defineComponent, h } from 'vue';
import { toArr } from '@formily/shared';
import { composeExport, stylePrefix } from '../__builtins__';
var usePanels = function (collapseField, schema) {
  var panels = [];
  schema.mapProperties(function (schema, name) {
    var _a, _b;
    var field = collapseField.query(collapseField.address.concat(name)).take();
    if (
      (field === null || field === void 0 ? void 0 : field.display) === 'none' ||
      (field === null || field === void 0 ? void 0 : field.display) === 'hidden'
    )
      return;
    if (
      ((_a = schema['x-component']) === null || _a === void 0
        ? void 0
        : _a.indexOf('CollapsePanel')) > -1
    ) {
      panels.push({
        name: name,
        props: __assign(
          __assign({}, schema === null || schema === void 0 ? void 0 : schema['x-component-props']),
          {
            key:
              ((_b =
                schema === null || schema === void 0 ? void 0 : schema['x-component-props']) ===
                null || _b === void 0
                ? void 0
                : _b.key) || name,
          },
        ),
        schema: schema,
      });
    }
  });
  return panels;
};
var createFormCollapse = function (defaultActiveKeys) {
  var formCollapse = model({
    activeKeys: defaultActiveKeys,
    setActiveKeys: function (keys) {
      formCollapse.activeKeys = keys;
    },
    hasActiveKey: function (key) {
      if (Array.isArray(formCollapse.activeKeys)) {
        if (formCollapse.activeKeys.includes(key)) {
          return true;
        }
      } else if (formCollapse.activeKeys == key) {
        return true;
      }
      return false;
    },
    addActiveKey: function (key) {
      if (formCollapse.hasActiveKey(key)) return;
      formCollapse.activeKeys = toArr(formCollapse.activeKeys).concat(key);
    },
    removeActiveKey: function (key) {
      if (Array.isArray(formCollapse.activeKeys)) {
        formCollapse.activeKeys = formCollapse.activeKeys.filter(function (item) {
          return item != key;
        });
      } else {
        formCollapse.activeKeys = '';
      }
    },
    toggleActiveKey: function (key) {
      if (formCollapse.hasActiveKey(key)) {
        formCollapse.removeActiveKey(key);
      } else {
        formCollapse.addActiveKey(key);
      }
    },
  });
  return markRaw(formCollapse);
};
var _FormCollapse = observer(
  // eslint-disable-next-line vue/one-component-per-file
  defineComponent({
    inheritAttrs: false,
    props: {
      // eslint-disable-next-line vue/require-default-prop
      formCollapse: { type: Object },
      // eslint-disable-next-line vue/require-default-prop
      activeKey: {
        type: [String, Number],
      },
    },
    emits: ['input'],
    setup: function (props, _a) {
      var attrs = _a.attrs,
        emit = _a.emit;
      var field = useField();
      var schema = useFieldSchema();
      var prefixCls = ''.concat(stylePrefix, '-form-collapse');
      var _formCollapse = computed(function () {
        var _a;
        return (_a = props.formCollapse) !== null && _a !== void 0 ? _a : createFormCollapse();
      });
      var takeActiveKeys = function (panels) {
        var _a, _b, _c;
        if (props.activeKey) return props.activeKey;
        if ((_a = _formCollapse.value) === null || _a === void 0 ? void 0 : _a.activeKeys)
          return (_b = _formCollapse.value) === null || _b === void 0 ? void 0 : _b.activeKeys;
        if (attrs.accordion) return (_c = panels[0]) === null || _c === void 0 ? void 0 : _c.name;
        return panels.map(function (item) {
          return item.name;
        });
      };
      var badgedHeader = function (key, header) {
        var errors = field.value.form.queryFeedbacks({
          type: 'error',
          address: ''.concat(field.value.address.concat(key), '.*'),
        });
        if (errors.length) {
          return h(
            Badge,
            {
              class: [''.concat(prefixCls, '-errors-badge')],
              count: errors.length,
            },
            {
              default: function () {
                return [header];
              },
            },
          );
        }
        return header;
      };
      return function () {
        var panels = usePanels(field.value, schema.value);
        var activeKey = takeActiveKeys(panels);
        return h(
          Collapse,
          __assign(__assign({ class: prefixCls }, props), {
            activeKey: activeKey,
            onChange: function (key) {
              emit('input', key);
              _formCollapse.value.setActiveKeys(key);
            },
          }),
          {
            default: function () {
              return panels.map(function (_a) {
                var props = _a.props,
                  schema = _a.schema,
                  name = _a.name;
                var header = props.header,
                  restProps = __rest(props, ['header']);
                return h(
                  Collapse.Panel,
                  __assign(__assign({ key: name }, restProps), { name: name, forceRender: true }),
                  {
                    default: function () {
                      return [h(RecursionField, { schema: schema, name: name }, {})];
                    },
                    header: function () {
                      return h(
                        FragmentComponent,
                        {},
                        {
                          default: function () {
                            return badgedHeader(name, header);
                          },
                        },
                      );
                    },
                  },
                );
              });
            },
          },
        );
      };
    },
  }),
);
// eslint-disable-next-line vue/one-component-per-file
export var CollapsePanel = defineComponent({
  name: 'FormCollapsePanel',
  setup: function (props, _a) {
    var slots = _a.slots;
    return function () {
      return h(FragmentComponent, {}, slots);
    };
  },
});
export var FormCollapse = composeExport(_FormCollapse, {
  CollapsePanel: CollapsePanel,
  createFormCollapse: createFormCollapse,
});
export default FormCollapse;
//# sourceMappingURL=index.js.map
