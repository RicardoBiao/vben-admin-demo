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
import { defineComponent, ref, h } from 'vue';
import { observer } from '@formily/reactive-vue';
import { useField, useFieldSchema, RecursionField } from '@formily/vue';
import { stylePrefix } from '../__builtins__/configs';
import { Tabs, Badge } from 'ant-design-vue';
export var ArrayTabs = observer(
  defineComponent({
    name: 'ArrayTabs',
    /**
     * 这里加上emit事件，解决[Vue warn]: Invalid prop: type check failed for prop "onChange". Expected Function, got Array
     */
    emits: ['change'],
    setup: function (props, _a) {
      var attrs = _a.attrs;
      var fieldRef = useField();
      var schemaRef = useFieldSchema();
      var prefixCls = ''.concat(stylePrefix, '-array-tabs');
      var activeKey = ref('tab-0');
      return function () {
        var field = fieldRef.value;
        var schema = schemaRef.value;
        var value = Array.isArray(field.value) ? field.value : [];
        var dataSource = (value === null || value === void 0 ? void 0 : value.length)
          ? value
          : [{}];
        var onEdit = function (targetKey, type) {
          var _a, _b;
          if (type == 'add') {
            var id = dataSource.length;
            if (
              (_a = field === null || field === void 0 ? void 0 : field.value) === null ||
              _a === void 0
                ? void 0
                : _a.length
            ) {
              field.push(null);
            } else {
              field.push(null, null);
            }
            activeKey.value = 'tab-'.concat(id);
          } else if (type == 'remove') {
            var index = (_b = targetKey.match(/-(\d+)/)) === null || _b === void 0 ? void 0 : _b[1];
            field.remove(Number(index));
            if (activeKey.value === targetKey) {
              activeKey.value = 'tab-'.concat(index - 1);
            }
          }
        };
        var badgedTab = function (index) {
          var tab = ''.concat(field.title || 'Untitled', ' ').concat(index + 1);
          var path = field.address.concat(index);
          var errors = field.form.queryFeedbacks({
            type: 'error',
            address: ''.concat(path, '.**'),
          });
          if (errors.length) {
            return h(
              Badge,
              {
                class: ''.concat(prefixCls, '-errors-badge'),
                count: errors.length,
              },
              {
                default: function () {
                  return [tab];
                },
              },
            );
          }
          return tab;
        };
        var renderItems = function () {
          return dataSource === null || dataSource === void 0
            ? void 0
            : dataSource.map(function (item, index) {
                var items = Array.isArray(schema.items) ? schema.items[index] : schema.items;
                var key = 'tab-'.concat(index);
                return h(
                  Tabs.TabPane,
                  {
                    key: key,
                    closable: index !== 0,
                    name: key,
                  },
                  {
                    default: function () {
                      return h(RecursionField, {
                        schema: items,
                        name: index,
                      });
                    },
                    tab: function () {
                      return [badgedTab(index)];
                    },
                  },
                );
              });
        };
        return h(
          Tabs,
          __assign(__assign(__assign({}, props), attrs), {
            activeKey: activeKey.value,
            type: 'editable-card',
            onChange: function (key) {
              activeKey.value = key;
            },
            onEdit: function (key, action) {
              onEdit(key, action);
            },
          }),
          {
            default: function () {
              return [renderItems()];
            },
          },
        );
      };
    },
  }),
);
export default ArrayTabs;
//# sourceMappingURL=index.js.map
