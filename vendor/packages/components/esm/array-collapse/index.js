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
import { defineComponent, ref, watchEffect, h } from 'vue';
import { Badge, Card, Collapse, Empty } from 'ant-design-vue';
import { RecursionField, useField, useFieldSchema, FragmentComponent } from '@formily/vue';
import { observer } from '@formily/reactive-vue';
import { stylePrefix } from '../__builtins__/configs';
import { ArrayBase } from '../array-base';
import { composeExport } from '../__builtins__/shared';
import { toArr } from '@formily/shared';
var isAdditionComponent = function (schema) {
  var _a;
  return (
    ((_a = schema['x-component']) === null || _a === void 0 ? void 0 : _a.indexOf('Addition')) > -1
  );
};
var isIndexComponent = function (schema) {
  var _a;
  return (
    ((_a = schema['x-component']) === null || _a === void 0 ? void 0 : _a.indexOf('Index')) > -1
  );
};
var isRemoveComponent = function (schema) {
  var _a;
  return (
    ((_a = schema['x-component']) === null || _a === void 0 ? void 0 : _a.indexOf('Remove')) > -1
  );
};
var isMoveUpComponent = function (schema) {
  var _a;
  return (
    ((_a = schema['x-component']) === null || _a === void 0 ? void 0 : _a.indexOf('MoveUp')) > -1
  );
};
var isMoveDownComponent = function (schema) {
  var _a;
  return (
    ((_a = schema['x-component']) === null || _a === void 0 ? void 0 : _a.indexOf('MoveDown')) > -1
  );
};
var isOperationComponent = function (schema) {
  return (
    isAdditionComponent(schema) ||
    isRemoveComponent(schema) ||
    isMoveDownComponent(schema) ||
    isMoveUpComponent(schema)
  );
};
var range = function (count) {
  return Array.from({ length: count }).map(function (_, i) {
    return i;
  });
};
var takeDefaultActiveKeys = function (dataSourceLength, defaultOpenPanelCount) {
  if (dataSourceLength < defaultOpenPanelCount) return range(dataSourceLength);
  return range(defaultOpenPanelCount);
};
var insertActiveKeys = function (activeKeys, index) {
  if (activeKeys.length <= index) return activeKeys.concat(index);
  return activeKeys.reduce(function (buf, key) {
    if (key < index) return buf.concat(key);
    if (key === index) return buf.concat([key, key + 1]);
    return buf.concat(key + 1);
  }, []);
};
var ArrayCollapseInner = observer(
  defineComponent({
    name: 'ArrayCollapse',
    props: {
      defaultOpenPanelCount: {
        type: Number,
        default: 5,
      },
    },
    setup: function (props, _a) {
      var attrs = _a.attrs;
      var fieldRef = useField();
      var schemaRef = useFieldSchema();
      var prefixCls = ''.concat(stylePrefix, '-array-collapse');
      var activeKeys = ref([]);
      watchEffect(function () {
        var field = fieldRef.value;
        var dataSource = Array.isArray(field.value) ? field.value.slice() : [];
        if (!field.modified && dataSource.length) {
          activeKeys.value = takeDefaultActiveKeys(dataSource.length, props.defaultOpenPanelCount);
        }
      });
      var keyMap = ArrayBase.useKey(schemaRef.value).keyMap;
      return function () {
        var field = fieldRef.value;
        var schema = schemaRef.value;
        var dataSource = Array.isArray(field.value) ? field.value.slice() : [];
        if (!schema) throw new Error('can not found schema object');
        var renderAddition = function () {
          return schema.reduceProperties(function (addition, schema, key) {
            if (isAdditionComponent(schema)) {
              return h(RecursionField, {
                schema: schema,
                name: key,
              });
            }
            return addition;
          }, null);
        };
        var renderEmpty = function () {
          if (dataSource === null || dataSource === void 0 ? void 0 : dataSource.length) return;
          return h(
            Card,
            {
              class: [''.concat(prefixCls, '-item')],
            },
            {
              default: function () {
                return h(Empty);
              },
            },
          );
        };
        var renderItems = function () {
          if (!dataSource.length) {
            return null;
          }
          var items =
            dataSource === null || dataSource === void 0
              ? void 0
              : dataSource.map(function (item, index) {
                  var items = Array.isArray(schema.items)
                    ? schema.items[index] || schema.items[0]
                    : schema.items;
                  // const key = getKey(item, index)
                  var panelProps = field
                    .query(''.concat(field.address, '.').concat(index))
                    .get('componentProps');
                  var props = items['x-component-props'];
                  var headerTitle =
                    (panelProps === null || panelProps === void 0 ? void 0 : panelProps.header) ||
                    props.header ||
                    field.title;
                  var path = field.address.concat(index);
                  var errors = field.form.queryFeedbacks({
                    type: 'error',
                    address: ''.concat(path, '.**'),
                  });
                  var header = h(
                    ArrayBase.Item,
                    {
                      index: index,
                      record: item,
                    },
                    {
                      default: function () {
                        return [
                          h(RecursionField, {
                            schema: items,
                            name: index,
                            filterProperties: function (schema) {
                              if (!isIndexComponent(schema)) return false;
                              return true;
                            },
                            onlyRenderProperties: true,
                          }),
                          errors.length
                            ? h(
                                Badge,
                                {
                                  class: [''.concat(prefixCls, '-errors-badge')],
                                  count: errors.length,
                                },
                                {
                                  default: function () {
                                    return headerTitle;
                                  },
                                },
                              )
                            : headerTitle,
                        ];
                      },
                    },
                  );
                  var extra = h(
                    ArrayBase.Item,
                    {
                      index: index,
                      record: item,
                    },
                    {
                      default: function () {
                        return [
                          h(
                            RecursionField,
                            {
                              schema: items,
                              name: index,
                              filterProperties: function (schema) {
                                if (!isOperationComponent(schema)) return false;
                                return true;
                              },
                              onlyRenderProperties: true,
                            },
                            {
                              default: function () {
                                return [attrs.extra];
                              },
                            },
                          ),
                        ];
                      },
                    },
                  );
                  var content = h(RecursionField, {
                    schema: items,
                    name: index,
                    filterProperties: function (schema) {
                      if (isIndexComponent(schema)) return false;
                      if (isOperationComponent(schema)) return false;
                      return true;
                    },
                  });
                  var newProps = __assign({}, props);
                  var newPanelProps = panelProps ? __assign({}, panelProps) : {};
                  // 不传header这个props，采用slot的header
                  delete newProps.header;
                  delete newPanelProps.header;
                  return h(
                    Collapse.Panel,
                    __assign(__assign(__assign({}, newProps), newPanelProps), {
                      key: index,
                      forceRender: true,
                    }),
                    {
                      default: function () {
                        return [
                          h(
                            ArrayBase.Item,
                            {
                              index: index,
                              record: item,
                            },
                            {
                              default: function () {
                                return [content];
                              },
                            },
                          ),
                        ];
                      },
                      header: function () {
                        return header;
                      },
                      extra: function () {
                        return extra;
                      },
                    },
                  );
                });
          return h(
            Collapse,
            __assign(__assign({}, attrs), {
              class: [''.concat(prefixCls, '-item')],
              activeKey: activeKeys.value,
              onChange: function (keys) {
                activeKeys.value = toArr(keys).map(Number);
              },
            }),
            {
              default: function () {
                return [items];
              },
            },
          );
        };
        return h(
          ArrayBase,
          {
            keyMap: keyMap,
            onAdd: function (index) {
              activeKeys.value = insertActiveKeys(activeKeys.value, index);
            },
          },
          {
            default: function () {
              return [renderEmpty(), renderItems(), renderAddition()];
            },
          },
        );
      };
    },
  }),
);
var ArrayCollapsePanel = defineComponent({
  name: 'ArrayCollapsePanel',
  inheritAttrs: false,
  setup: function (_props, _a) {
    var slots = _a.slots;
    return function () {
      return h(FragmentComponent, {}, slots);
    };
  },
});
export var ArrayCollapse = composeExport(ArrayCollapseInner, {
  CollapsePanel: ArrayCollapsePanel,
  Index: ArrayBase.Index,
  SortHandle: ArrayBase.SortHandle,
  Addition: ArrayBase.Addition,
  Remove: ArrayBase.Remove,
  MoveDown: ArrayBase.MoveDown,
  MoveUp: ArrayBase.MoveUp,
  useArray: ArrayBase.useArray,
  useIndex: ArrayBase.useIndex,
  useRecord: ArrayBase.useRecord,
});
export default ArrayCollapse;
//# sourceMappingURL=index.js.map
