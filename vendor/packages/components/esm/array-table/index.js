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
import { defineComponent, ref, computed, h } from 'vue';
import { useField, useFieldSchema, FragmentComponent, RecursionField } from '@formily/vue';
import { observer } from '@formily/reactive-vue';
import { isArr, isBool } from '@formily/shared';
import { ArrayBase } from '../array-base';
import { stylePrefix } from '../__builtins__/configs';
import { composeExport } from '../__builtins__/shared';
import { Table, Pagination, Select, Badge } from 'ant-design-vue';
import { Space } from '../space';
var isColumnComponent = function (schema) {
  var _a;
  return (
    ((_a = schema['x-component']) === null || _a === void 0 ? void 0 : _a.indexOf('Column')) > -1
  );
};
var isOperationsComponent = function (schema) {
  var _a;
  return (
    ((_a = schema['x-component']) === null || _a === void 0 ? void 0 : _a.indexOf('Operations')) >
    -1
  );
};
var isAdditionComponent = function (schema) {
  var _a;
  return (
    ((_a = schema['x-component']) === null || _a === void 0 ? void 0 : _a.indexOf('Addition')) > -1
  );
};
var useArrayTableSources = function (arrayFieldRef, schemaRef) {
  var arrayField = arrayFieldRef.value;
  var parseSources = function (schema) {
    var _a, _b, _c;
    if (isColumnComponent(schema) || isOperationsComponent(schema) || isAdditionComponent(schema)) {
      if (
        !((_a = schema['x-component-props']) === null || _a === void 0
          ? void 0
          : _a['dataIndex']) &&
        !schema['name']
      )
        return [];
      var name_1 =
        ((_b = schema['x-component-props']) === null || _b === void 0 ? void 0 : _b['dataIndex']) ||
        schema['name'];
      var field = arrayField.query(arrayField.address.concat(name_1)).take();
      var columnProps =
        ((_c = field === null || field === void 0 ? void 0 : field.component) === null ||
        _c === void 0
          ? void 0
          : _c[1]) ||
        schema['x-component-props'] ||
        {};
      var display =
        (field === null || field === void 0 ? void 0 : field.display) || schema['x-display'];
      return [
        {
          name: name_1,
          display: display,
          field: field,
          schema: schema,
          columnProps: columnProps,
        },
      ];
    } else if (schema.properties) {
      return schema.reduceProperties(function (buf, schema) {
        return buf.concat(parseSources(schema));
      }, []);
    }
  };
  var parseArrayItems = function (schema) {
    if (!schema) return [];
    var sources = [];
    var items = isArr(schema) ? schema : [schema];
    return items.reduce(function (columns, schema) {
      var item = parseSources(schema);
      if (item) {
        return columns.concat(item);
      }
      return columns;
    }, sources);
  };
  if (!schemaRef.value) throw new Error('can not found schema object');
  return parseArrayItems(schemaRef.value.items);
};
var useArrayTableColumns = function (sources) {
  return sources.reduce(function (buf, _a, key) {
    var name = _a.name,
      columnProps = _a.columnProps,
      schema = _a.schema,
      display = _a.display;
    if (display !== 'visible') return buf;
    if (!isColumnComponent(schema)) return buf;
    return buf.concat(
      __assign(__assign({}, columnProps), {
        key: key,
        dataIndex: name,
        customRender: function (_a) {
          var record = _a.record,
            index = _a.index;
          var children = h(
            ArrayBase.Item,
            {
              key: ''.concat(key).concat(index),
              index: index,
              record: record,
            },
            function () {
              return h(RecursionField, {
                schema: schema,
                name: index,
                onlyRenderProperties: true,
              });
            },
          );
          return children;
        },
      }),
    );
  }, []);
};
var useAddition = function () {
  var schema = useFieldSchema();
  return schema.value.reduceProperties(function (addition, schema, key) {
    if (isAdditionComponent(schema)) {
      return h(RecursionField, {
        schema: schema,
        name: key,
      });
    }
    return addition;
  }, null);
};
var schedulerRequest = {
  request: null,
};
var StatusSelect = observer(
  defineComponent({
    props: ['value', 'options', 'pageSize', 'onChange'],
    setup: function (props) {
      var fieldRef = useField();
      var prefixCls = ''.concat(stylePrefix, '-array-table');
      return function () {
        var _a;
        var field = fieldRef.value;
        var width =
          String((_a = props.options) === null || _a === void 0 ? void 0 : _a.length).length * 15;
        var errors = field.errors;
        var parseIndex = function (address) {
          var _a;
          return Number(
            (_a = address.slice(address.indexOf(field.address.toString()) + 1).match(/(\d+)/)) ===
              null || _a === void 0
              ? void 0
              : _a[1],
          );
        };
        return h(
          Select,
          {
            style: {
              width: ''.concat(width < 60 ? 60 : width, 'px'),
            },
            class: [
              ''.concat(prefixCls, '-status-select'),
              {
                'has-error': errors === null || errors === void 0 ? void 0 : errors.length,
              },
            ],
            value: props.value,
            virtual: true,
            onChange: props.onChange,
          },
          {
            default: function () {
              var _a;
              return (_a = props.options) === null || _a === void 0
                ? void 0
                : _a.map(function (_a) {
                    var label = _a.label,
                      value = _a.value;
                    var hasError = errors.some(function (_a) {
                      var address = _a.address;
                      var currentIndex = parseIndex(address);
                      var startIndex = (value - 1) * props.pageSize;
                      var endIndex = value * props.pageSize;
                      return currentIndex >= startIndex && currentIndex <= endIndex;
                    });
                    return h(
                      Select.Option,
                      {
                        key: value,
                        label: label,
                        value: value,
                      },
                      {
                        default: function () {
                          if (hasError) {
                            return h(Badge, { dot: true }, function () {
                              return label;
                            });
                          }
                          return label;
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
  {
    scheduler: function (update) {
      clearTimeout(schedulerRequest.request);
      schedulerRequest.request = setTimeout(function () {
        update();
      }, 100);
    },
  },
);
var ArrayTablePagination = defineComponent({
  inheritAttrs: false,
  setup: function (_props, _a) {
    var attrs = _a.attrs,
      slots = _a.slots;
    var prefixCls = ''.concat(stylePrefix, '-array-table');
    var current = ref(1);
    return function () {
      var props = attrs;
      var pageSize = computed(function () {
        return props.pageSize || 10;
      });
      var dataSource = computed(function () {
        return props.dataSource || [];
      });
      var startIndex = computed(function () {
        return (current.value - 1) * pageSize.value;
      });
      var size = computed(function () {
        return props.size || 'default';
      });
      var endIndex = computed(function () {
        return startIndex.value + pageSize.value - 1;
      });
      var total = computed(function () {
        var _a;
        return ((_a = dataSource.value) === null || _a === void 0 ? void 0 : _a.length) || 0;
      });
      var totalPage = computed(function () {
        return Math.ceil(total.value / pageSize.value);
      });
      var pages = computed(function () {
        return Array.from(new Array(totalPage.value)).map(function (_, index) {
          var page = index + 1;
          return {
            label: page,
            value: page,
          };
        });
      });
      var handleChange = function (val) {
        current.value = val;
      };
      var renderPagination = function () {
        if (totalPage.value <= 1) return;
        return h(
          'div',
          {
            class: [''.concat(prefixCls, '-pagination')],
          },
          h(Space, {}, function () {
            return [
              h(StatusSelect, {
                value: current.value,
                onChange: handleChange,
                pageSize: pageSize.value,
                options: pages.value,
                notFoundContent: false,
              }),
              h(
                Pagination,
                __assign(__assign({}, props), {
                  pageSize: pageSize.value,
                  current: current.value,
                  size: size.value,
                  total: total.value,
                  showSizeChanger: false,
                  onChange: handleChange,
                }),
              ),
            ];
          }),
        );
      };
      return h(FragmentComponent, {}, function () {
        var _a, _b;
        return (_a = slots === null || slots === void 0 ? void 0 : slots.default) === null ||
          _a === void 0
          ? void 0
          : _a.call(
              slots,
              (_b = dataSource.value) === null || _b === void 0
                ? void 0
                : _b.slice(startIndex.value, endIndex.value + 1),
              renderPagination,
            );
      });
    };
  },
});
var ArrayTableInner = observer(
  defineComponent({
    name: 'ArrayTable',
    inheritAttrs: false,
    setup: function (_props, _a) {
      var attrs = _a.attrs,
        slots = _a.slots;
      var fieldRef = useField();
      var schemaRef = useFieldSchema();
      var prefixCls = ''.concat(stylePrefix, '-array-table');
      var _b = ArrayBase.useKey(schemaRef.value),
        getKey = _b.getKey,
        keyMap = _b.keyMap;
      var defaultRowKey = function (record) {
        return getKey(record);
      };
      return function () {
        var props = attrs;
        var field = fieldRef.value;
        var dataSource = Array.isArray(field.value) ? field.value.slice() : [];
        var sources = useArrayTableSources(fieldRef, schemaRef);
        var columns = useArrayTableColumns(sources);
        var pagination = isBool(props.pagination) ? {} : props.pagination;
        var renderStateManager = function () {
          return sources.map(function (column, key) {
            //专门用来承接对Column的状态管理
            if (!isColumnComponent(column.schema)) return;
            return h(RecursionField, {
              name: column.name,
              schema: column.schema,
              onlyRenderSelf: true,
              key: key,
            });
          });
        };
        var renderTable = function (dataSource, pager) {
          return h(
            'div',
            {
              class: prefixCls,
            },
            h(
              ArrayBase,
              {
                keyMap: keyMap,
              },
              function () {
                return [
                  h(
                    Table,
                    __assign(__assign({}, attrs), {
                      size: 'small',
                      bordered: true,
                      rowKey: defaultRowKey,
                      pagination: false,
                      columns: columns,
                      dataSource: dataSource,
                    }),
                    slots,
                  ),
                  h(
                    'div',
                    {
                      style: {
                        marginTop: '5px',
                        marginBottom: '5px',
                      },
                    },
                    pager === null || pager === void 0 ? void 0 : pager(),
                  ),
                  renderStateManager(),
                  useAddition(),
                ];
              },
            ),
          );
        };
        if (!pagination) {
          return renderTable(dataSource, null);
        }
        return h(
          ArrayTablePagination,
          __assign(__assign({}, pagination), { dataSource: dataSource }),
          {
            default: renderTable,
          },
        );
      };
    },
  }),
);
var ArrayTableColumn = defineComponent({
  name: 'ArrayTableColumn',
  render: function () {
    return null;
  },
});
export var ArrayTable = composeExport(ArrayTableInner, {
  Column: ArrayTableColumn,
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
export default ArrayTable;
//# sourceMappingURL=index.js.map
