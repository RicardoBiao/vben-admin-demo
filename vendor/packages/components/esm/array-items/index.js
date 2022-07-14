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
import { defineComponent, h } from 'vue';
import { useField, useFieldSchema, RecursionField } from '@formily/vue';
import { observer } from '@formily/reactive-vue';
import { stylePrefix } from '../__builtins__/configs';
import { ArrayBase } from '../array-base';
import { SlickList, SlickItem } from 'vue-slicksort';
import { composeExport } from '../__builtins__/shared';
var isAdditionComponent = function (schema) {
  var _a;
  return (
    ((_a = schema['x-component']) === null || _a === void 0 ? void 0 : _a.indexOf('Addition')) > -1
  );
};
var ArrayItemsInner = observer(
  defineComponent({
    name: 'ArrayItems',
    setup: function () {
      var fieldRef = useField();
      var schemaRef = useFieldSchema();
      var prefixCls = ''.concat(stylePrefix, '-array-items');
      var _a = ArrayBase.useKey(schemaRef.value),
        getKey = _a.getKey,
        keyMap = _a.keyMap;
      return function () {
        var field = fieldRef.value;
        var schema = schemaRef.value;
        var dataSource = Array.isArray(field.value) ? field.value.slice() : [];
        if (!schema) throw new Error('can not found schema object');
        var renderItems = function () {
          var items =
            dataSource === null || dataSource === void 0
              ? void 0
              : dataSource.map(function (item, index) {
                  var items = Array.isArray(schema.items)
                    ? schema.items[index] || schema.items[0]
                    : schema.items;
                  var key = getKey(item, index);
                  return h(
                    ArrayBase.Item,
                    {
                      key: key,
                      index: index,
                      record: item,
                    },
                    {
                      default: function () {
                        return h(
                          SlickItem,
                          {
                            class: [''.concat(prefixCls, '-item-inner')],
                            index: index,
                            key: key,
                          },
                          {
                            default: function () {
                              return h(RecursionField, {
                                schema: items,
                                name: index,
                              });
                            },
                          },
                        );
                      },
                    },
                  );
                });
          return h(
            SlickList,
            {
              class: [''.concat(prefixCls, '-list')],
              useDragHandle: true,
              axis: 'y',
              helperClass: ''.concat(prefixCls, '-sort-helper'),
              list: dataSource,
              onSortEnd: function (_a) {
                var oldIndex = _a.oldIndex,
                  newIndex = _a.newIndex;
                if (Array.isArray(keyMap)) {
                  keyMap.splice(newIndex, 0, keyMap.splice(oldIndex, 1)[0]);
                }
                field.move(oldIndex, newIndex);
              },
            },
            {
              default: function () {
                return items;
              },
            },
          );
        };
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
        return h(
          ArrayBase,
          {
            keyMap: keyMap,
          },
          {
            default: function () {
              return h(
                'div',
                {
                  class: [prefixCls],
                  // eslint-disable-next-line @typescript-eslint/no-empty-function
                  onChange: function () {},
                },
                {
                  default: function () {
                    return [renderItems(), renderAddition()];
                  },
                },
              );
            },
          },
        );
      };
    },
  }),
);
var ArrayItemsItem = defineComponent({
  name: 'ArrayItemsItem',
  props: ['type'],
  setup: function (props, _a) {
    var attrs = _a.attrs,
      slots = _a.slots;
    var prefixCls = ''.concat(stylePrefix, '-array-items');
    return function () {
      return h(
        'div',
        __assign(__assign({}, attrs), {
          class: [''.concat(prefixCls, '-').concat(props.type || 'card')],
          // eslint-disable-next-line @typescript-eslint/no-empty-function
          onChange: function () {},
        }),
        slots,
      );
    };
  },
});
export var ArrayItems = composeExport(ArrayItemsInner, {
  Item: ArrayItemsItem,
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
export default ArrayItems;
//# sourceMappingURL=index.js.map
