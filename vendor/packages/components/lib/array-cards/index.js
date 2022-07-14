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
exports.ArrayCards = void 0;
var ant_design_vue_1 = require('ant-design-vue');
var vue_1 = require('@formily/vue');
var reactive_vue_1 = require('@formily/reactive-vue');
var configs_1 = require('../__builtins__/configs');
var array_base_1 = require('../array-base');
var shared_1 = require('../__builtins__/shared');
var vue_2 = require('vue');
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
var ArrayCardsInner = (0, reactive_vue_1.observer)(
  (0, vue_2.defineComponent)({
    name: 'ArraryCards',
    setup: function (_props, _a) {
      var attrs = _a.attrs;
      var fieldRef = (0, vue_1.useField)();
      var schemaRef = (0, vue_1.useFieldSchema)();
      var prefixCls = ''.concat(configs_1.stylePrefix, '-array-cards');
      var _b = array_base_1.ArrayBase.useKey(schemaRef.value),
        getKey = _b.getKey,
        keyMap = _b.keyMap;
      return function () {
        var props = __assign({}, attrs);
        var field = fieldRef.value;
        var schema = schemaRef.value;
        var dataSource = Array.isArray(field.value) ? field.value : [];
        if (!schema) throw new Error('can not found schema object');
        var renderItems = function () {
          return dataSource === null || dataSource === void 0
            ? void 0
            : dataSource.map(function (item, index) {
                var items = Array.isArray(schema.items)
                  ? schema.items[index] || schema.items[0]
                  : schema.items;
                var title = (0, vue_2.h)(
                  'span',
                  {},
                  {
                    default: function () {
                      return [
                        (0, vue_2.h)(vue_1.RecursionField, {
                          schema: items,
                          name: index,
                          filterProperties: function (schema) {
                            if (!isIndexComponent(schema)) return false;
                            return true;
                          },
                          onlyRenderProperties: true,
                        }),
                        props.title || field.title,
                      ];
                    },
                  },
                );
                var extra = (0, vue_2.h)(
                  'span',
                  {},
                  {
                    default: function () {
                      return [
                        (0, vue_2.h)(vue_1.RecursionField, {
                          schema: items,
                          name: index,
                          filterProperties: function (schema) {
                            if (!isOperationComponent(schema)) return false;
                            return true;
                          },
                          onlyRenderProperties: true,
                        }),
                        props.extra,
                      ];
                    },
                  },
                );
                var content = (0, vue_2.h)(vue_1.RecursionField, {
                  schema: items,
                  name: index,
                  filterProperties: function (schema) {
                    if (isIndexComponent(schema)) return false;
                    if (isOperationComponent(schema)) return false;
                    return true;
                  },
                });
                return (0, vue_2.h)(
                  array_base_1.ArrayBase.Item,
                  {
                    key: getKey(item, index),
                    index: index,
                    record: item,
                  },
                  function () {
                    return (0, vue_2.h)(
                      ant_design_vue_1.Card,
                      __assign(__assign({}, attrs), { class: [''.concat(prefixCls, '-item')] }),
                      {
                        default: function () {
                          return content;
                        },
                        title: function () {
                          return title;
                        },
                        extra: function () {
                          return extra;
                        },
                      },
                    );
                  },
                );
              });
        };
        var renderAddition = function () {
          return schema.reduceProperties(function (addition, schema, key) {
            if (isAdditionComponent(schema)) {
              return (0, vue_2.h)(vue_1.RecursionField, {
                schema: schema,
                name: key,
              });
            }
            return addition;
          }, null);
        };
        var renderEmpty = function () {
          if (dataSource === null || dataSource === void 0 ? void 0 : dataSource.length) return;
          return (0, vue_2.h)(
            ant_design_vue_1.Card,
            __assign(__assign({}, attrs), {
              class: [''.concat(prefixCls, '-item')],
              title: props.title || field.title,
            }),
            {
              default: function () {
                return (0, vue_2.h)(ant_design_vue_1.Empty);
              },
            },
          );
        };
        return (0, vue_2.h)(
          array_base_1.ArrayBase,
          { keyMap: keyMap },
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
exports.ArrayCards = (0, shared_1.composeExport)(ArrayCardsInner, {
  Index: array_base_1.ArrayBase.Index,
  SortHandle: array_base_1.ArrayBase.SortHandle,
  Addition: array_base_1.ArrayBase.Addition,
  Remove: array_base_1.ArrayBase.Remove,
  MoveDown: array_base_1.ArrayBase.MoveDown,
  MoveUp: array_base_1.ArrayBase.MoveUp,
  useArray: array_base_1.ArrayBase.useArray,
  useIndex: array_base_1.ArrayBase.useIndex,
  useRecord: array_base_1.ArrayBase.useRecord,
});
exports.default = exports.ArrayCards;
//# sourceMappingURL=index.js.map
