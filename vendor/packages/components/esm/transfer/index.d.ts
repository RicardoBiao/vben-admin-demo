export declare const Transfer: {
  new (...args: any[]): {
    $: import('vue').ComponentInternalInstance;
    $data: {};
    $props: Partial<{
      listStyle:
        | import('vue').CSSProperties
        | ((style: import('ant-design-vue/lib/transfer').ListStyle) => import('vue').CSSProperties);
      disabled: boolean;
      locale: {};
      selectedKeys: string[];
      showSearch: boolean;
      pagination: any;
      dataSource: import('ant-design-vue/lib/transfer').TransferItem[];
      showSelectAll: boolean;
      oneWay: boolean;
      targetKeys: string[];
      operationStyle: import('vue').CSSProperties;
    }> &
      Omit<
        Readonly<
          import('vue').ExtractPropTypes<{
            id: StringConstructor;
            prefixCls: StringConstructor;
            dataSource: {
              type: import('vue').PropType<import('ant-design-vue/lib/transfer').TransferItem[]>;
              default: any[];
            };
            disabled: {
              type: BooleanConstructor;
              default: any;
            };
            targetKeys: {
              type: import('vue').PropType<string[]>;
              default: any;
            };
            selectedKeys: {
              type: import('vue').PropType<string[]>;
              default: any;
            };
            render: {
              type: import('vue').PropType<
                (
                  item: import('ant-design-vue/lib/transfer').TransferItem,
                ) => import('ant-design-vue/lib/transfer').RenderResult
              >;
            };
            listStyle: {
              type: import('vue').PropType<
                | import('vue').CSSProperties
                | ((
                    style: import('ant-design-vue/lib/transfer').ListStyle,
                  ) => import('vue').CSSProperties)
              >;
              default: () => {};
            };
            operationStyle: {
              type: import('vue').PropType<import('vue').CSSProperties>;
              default: import('vue').CSSProperties;
            };
            titles: {
              type: import('vue').PropType<string[]>;
            };
            operations: {
              type: import('vue').PropType<string[]>;
            };
            showSearch: {
              type: BooleanConstructor;
              default: boolean;
            };
            filterOption: {
              type: import('vue').PropType<
                (
                  inputValue: string,
                  item: import('ant-design-vue/lib/transfer').TransferItem,
                ) => boolean
              >;
            };
            searchPlaceholder: StringConstructor;
            notFoundContent: import('vue-types').VueTypeValidableDef<any>;
            locale: {
              type: import('vue').PropType<
                Partial<import('ant-design-vue/lib/transfer').TransferLocale>
              >;
              default: () => {};
            };
            rowKey: {
              type: import('vue').PropType<
                (record: import('ant-design-vue/lib/transfer').TransferItem) => string
              >;
            };
            showSelectAll: {
              type: BooleanConstructor;
              default: any;
            };
            selectAllLabels: {
              type: import('vue').PropType<import('ant-design-vue/lib/transfer').SelectAllLabel[]>;
            };
            children: {
              type: import('vue').PropType<
                (
                  props: Partial<
                    import('vue').ExtractPropTypes<{
                      prefixCls: StringConstructor;
                      filteredRenderItems: import('vue-types').VueTypeValidableDef<unknown[]> & {
                        default: () => unknown[];
                      } & {
                        default: () => unknown[];
                      };
                      selectedKeys: import('vue-types').VueTypeValidableDef<unknown[]> & {
                        default: () => unknown[];
                      };
                      disabled: {
                        type: BooleanConstructor;
                        default: any;
                      };
                      showRemove: {
                        type: BooleanConstructor;
                        default: any;
                      };
                      pagination: import('vue-types').VueTypeValidableDef<any>;
                      onItemSelect: FunctionConstructor;
                      onScroll: FunctionConstructor;
                      onItemRemove: FunctionConstructor;
                    }>
                  >,
                ) => import('ant-design-vue/lib/_util/type').VueNode
              >;
            };
            oneWay: {
              type: BooleanConstructor;
              default: any;
            };
            pagination: {
              type: import('vue').PropType<
                import('ant-design-vue/lib/transfer/interface').PaginationType
              >;
              default: any;
            };
            onChange: import('vue').PropType<
              (
                targetKeys: string[],
                direction: import('ant-design-vue/lib/transfer').TransferDirection,
                moveKeys: string[],
              ) => void
            >;
            onSelectChange: import('vue').PropType<
              (sourceSelectedKeys: string[], targetSelectedKeys: string[]) => void
            >;
            onSearch: import('vue').PropType<
              (
                direction: import('ant-design-vue/lib/transfer').TransferDirection,
                value: string,
              ) => void
            >;
            onScroll: import('vue').PropType<
              (
                direction: import('ant-design-vue/lib/transfer').TransferDirection,
                e: UIEvent,
              ) => void
            >;
            'onUpdate:targetKeys': import('vue').PropType<(keys: string[]) => void>;
            'onUpdate:selectedKeys': import('vue').PropType<(keys: string[]) => void>;
          }>
        > &
          import('vue').VNodeProps &
          import('vue').AllowedComponentProps &
          import('vue').ComponentCustomProps,
        | 'disabled'
        | 'showSearch'
        | 'locale'
        | 'listStyle'
        | 'dataSource'
        | 'targetKeys'
        | 'selectedKeys'
        | 'operationStyle'
        | 'showSelectAll'
        | 'oneWay'
        | 'pagination'
      >;
    $attrs: {
      [x: string]: unknown;
    };
    $refs: {
      [x: string]: unknown;
    };
    $slots: Readonly<{
      [name: string]: import('vue').Slot;
    }>;
    $root: import('vue').ComponentPublicInstance<
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      false,
      import('vue').ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>
    >;
    $parent: import('vue').ComponentPublicInstance<
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      false,
      import('vue').ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>
    >;
    $emit: (event: string, ...args: any[]) => void;
    $el: any;
    $options: import('vue').ComponentOptionsBase<
      Readonly<
        import('vue').ExtractPropTypes<{
          id: StringConstructor;
          prefixCls: StringConstructor;
          dataSource: {
            type: import('vue').PropType<import('ant-design-vue/lib/transfer').TransferItem[]>;
            default: any[];
          };
          disabled: {
            type: BooleanConstructor;
            default: any;
          };
          targetKeys: {
            type: import('vue').PropType<string[]>;
            default: any;
          };
          selectedKeys: {
            type: import('vue').PropType<string[]>;
            default: any;
          };
          render: {
            type: import('vue').PropType<
              (
                item: import('ant-design-vue/lib/transfer').TransferItem,
              ) => import('ant-design-vue/lib/transfer').RenderResult
            >;
          };
          listStyle: {
            type: import('vue').PropType<
              | import('vue').CSSProperties
              | ((
                  style: import('ant-design-vue/lib/transfer').ListStyle,
                ) => import('vue').CSSProperties)
            >;
            default: () => {};
          };
          operationStyle: {
            type: import('vue').PropType<import('vue').CSSProperties>;
            default: import('vue').CSSProperties;
          };
          titles: {
            type: import('vue').PropType<string[]>;
          };
          operations: {
            type: import('vue').PropType<string[]>;
          };
          showSearch: {
            type: BooleanConstructor;
            default: boolean;
          };
          filterOption: {
            type: import('vue').PropType<
              (
                inputValue: string,
                item: import('ant-design-vue/lib/transfer').TransferItem,
              ) => boolean
            >;
          };
          searchPlaceholder: StringConstructor;
          notFoundContent: import('vue-types').VueTypeValidableDef<any>;
          locale: {
            type: import('vue').PropType<
              Partial<import('ant-design-vue/lib/transfer').TransferLocale>
            >;
            default: () => {};
          };
          rowKey: {
            type: import('vue').PropType<
              (record: import('ant-design-vue/lib/transfer').TransferItem) => string
            >;
          };
          showSelectAll: {
            type: BooleanConstructor;
            default: any;
          };
          selectAllLabels: {
            type: import('vue').PropType<import('ant-design-vue/lib/transfer').SelectAllLabel[]>;
          };
          children: {
            type: import('vue').PropType<
              (
                props: Partial<
                  import('vue').ExtractPropTypes<{
                    prefixCls: StringConstructor;
                    filteredRenderItems: import('vue-types').VueTypeValidableDef<unknown[]> & {
                      default: () => unknown[];
                    } & {
                      default: () => unknown[];
                    };
                    selectedKeys: import('vue-types').VueTypeValidableDef<unknown[]> & {
                      default: () => unknown[];
                    };
                    disabled: {
                      type: BooleanConstructor;
                      default: any;
                    };
                    showRemove: {
                      type: BooleanConstructor;
                      default: any;
                    };
                    pagination: import('vue-types').VueTypeValidableDef<any>;
                    onItemSelect: FunctionConstructor;
                    onScroll: FunctionConstructor;
                    onItemRemove: FunctionConstructor;
                  }>
                >,
              ) => import('ant-design-vue/lib/_util/type').VueNode
            >;
          };
          oneWay: {
            type: BooleanConstructor;
            default: any;
          };
          pagination: {
            type: import('vue').PropType<
              import('ant-design-vue/lib/transfer/interface').PaginationType
            >;
            default: any;
          };
          onChange: import('vue').PropType<
            (
              targetKeys: string[],
              direction: import('ant-design-vue/lib/transfer').TransferDirection,
              moveKeys: string[],
            ) => void
          >;
          onSelectChange: import('vue').PropType<
            (sourceSelectedKeys: string[], targetSelectedKeys: string[]) => void
          >;
          onSearch: import('vue').PropType<
            (
              direction: import('ant-design-vue/lib/transfer').TransferDirection,
              value: string,
            ) => void
          >;
          onScroll: import('vue').PropType<
            (direction: import('ant-design-vue/lib/transfer').TransferDirection, e: UIEvent) => void
          >;
          'onUpdate:targetKeys': import('vue').PropType<(keys: string[]) => void>;
          'onUpdate:selectedKeys': import('vue').PropType<(keys: string[]) => void>;
        }>
      >,
      () => JSX.Element,
      unknown,
      {},
      {},
      import('vue').ComponentOptionsMixin,
      import('vue').ComponentOptionsMixin,
      Record<string, any>,
      string,
      {
        listStyle:
          | import('vue').CSSProperties
          | ((
              style: import('ant-design-vue/lib/transfer').ListStyle,
            ) => import('vue').CSSProperties);
        disabled: boolean;
        locale: {};
        selectedKeys: string[];
        showSearch: boolean;
        pagination: any;
        dataSource: import('ant-design-vue/lib/transfer').TransferItem[];
        showSelectAll: boolean;
        oneWay: boolean;
        targetKeys: string[];
        operationStyle: import('vue').CSSProperties;
      }
    > & {
      beforeCreate?: (() => void) | (() => void)[];
      created?: (() => void) | (() => void)[];
      beforeMount?: (() => void) | (() => void)[];
      mounted?: (() => void) | (() => void)[];
      beforeUpdate?: (() => void) | (() => void)[];
      updated?: (() => void) | (() => void)[];
      activated?: (() => void) | (() => void)[];
      deactivated?: (() => void) | (() => void)[];
      beforeDestroy?: (() => void) | (() => void)[];
      beforeUnmount?: (() => void) | (() => void)[];
      destroyed?: (() => void) | (() => void)[];
      unmounted?: (() => void) | (() => void)[];
      renderTracked?:
        | ((e: import('vue').DebuggerEvent) => void)
        | ((e: import('vue').DebuggerEvent) => void)[];
      renderTriggered?:
        | ((e: import('vue').DebuggerEvent) => void)
        | ((e: import('vue').DebuggerEvent) => void)[];
      errorCaptured?:
        | ((
            err: unknown,
            instance: import('vue').ComponentPublicInstance<
              {},
              {},
              {},
              {},
              {},
              {},
              {},
              {},
              false,
              import('vue').ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>
            >,
            info: string,
          ) => boolean | void)
        | ((
            err: unknown,
            instance: import('vue').ComponentPublicInstance<
              {},
              {},
              {},
              {},
              {},
              {},
              {},
              {},
              false,
              import('vue').ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>
            >,
            info: string,
          ) => boolean | void)[];
    };
    $forceUpdate: () => void;
    $nextTick: typeof import('vue').nextTick;
    $watch(
      source: string | Function,
      cb: Function,
      options?: import('vue').WatchOptions<boolean>,
    ): import('vue').WatchStopHandle;
  } & Readonly<
    import('vue').ExtractPropTypes<{
      id: StringConstructor;
      prefixCls: StringConstructor;
      dataSource: {
        type: import('vue').PropType<import('ant-design-vue/lib/transfer').TransferItem[]>;
        default: any[];
      };
      disabled: {
        type: BooleanConstructor;
        default: any;
      };
      targetKeys: {
        type: import('vue').PropType<string[]>;
        default: any;
      };
      selectedKeys: {
        type: import('vue').PropType<string[]>;
        default: any;
      };
      render: {
        type: import('vue').PropType<
          (
            item: import('ant-design-vue/lib/transfer').TransferItem,
          ) => import('ant-design-vue/lib/transfer').RenderResult
        >;
      };
      listStyle: {
        type: import('vue').PropType<
          | import('vue').CSSProperties
          | ((
              style: import('ant-design-vue/lib/transfer').ListStyle,
            ) => import('vue').CSSProperties)
        >;
        default: () => {};
      };
      operationStyle: {
        type: import('vue').PropType<import('vue').CSSProperties>;
        default: import('vue').CSSProperties;
      };
      titles: {
        type: import('vue').PropType<string[]>;
      };
      operations: {
        type: import('vue').PropType<string[]>;
      };
      showSearch: {
        type: BooleanConstructor;
        default: boolean;
      };
      filterOption: {
        type: import('vue').PropType<
          (inputValue: string, item: import('ant-design-vue/lib/transfer').TransferItem) => boolean
        >;
      };
      searchPlaceholder: StringConstructor;
      notFoundContent: import('vue-types').VueTypeValidableDef<any>;
      locale: {
        type: import('vue').PropType<Partial<import('ant-design-vue/lib/transfer').TransferLocale>>;
        default: () => {};
      };
      rowKey: {
        type: import('vue').PropType<
          (record: import('ant-design-vue/lib/transfer').TransferItem) => string
        >;
      };
      showSelectAll: {
        type: BooleanConstructor;
        default: any;
      };
      selectAllLabels: {
        type: import('vue').PropType<import('ant-design-vue/lib/transfer').SelectAllLabel[]>;
      };
      children: {
        type: import('vue').PropType<
          (
            props: Partial<
              import('vue').ExtractPropTypes<{
                prefixCls: StringConstructor;
                filteredRenderItems: import('vue-types').VueTypeValidableDef<unknown[]> & {
                  default: () => unknown[];
                } & {
                  default: () => unknown[];
                };
                selectedKeys: import('vue-types').VueTypeValidableDef<unknown[]> & {
                  default: () => unknown[];
                };
                disabled: {
                  type: BooleanConstructor;
                  default: any;
                };
                showRemove: {
                  type: BooleanConstructor;
                  default: any;
                };
                pagination: import('vue-types').VueTypeValidableDef<any>;
                onItemSelect: FunctionConstructor;
                onScroll: FunctionConstructor;
                onItemRemove: FunctionConstructor;
              }>
            >,
          ) => import('ant-design-vue/lib/_util/type').VueNode
        >;
      };
      oneWay: {
        type: BooleanConstructor;
        default: any;
      };
      pagination: {
        type: import('vue').PropType<
          import('ant-design-vue/lib/transfer/interface').PaginationType
        >;
        default: any;
      };
      onChange: import('vue').PropType<
        (
          targetKeys: string[],
          direction: import('ant-design-vue/lib/transfer').TransferDirection,
          moveKeys: string[],
        ) => void
      >;
      onSelectChange: import('vue').PropType<
        (sourceSelectedKeys: string[], targetSelectedKeys: string[]) => void
      >;
      onSearch: import('vue').PropType<
        (direction: import('ant-design-vue/lib/transfer').TransferDirection, value: string) => void
      >;
      onScroll: import('vue').PropType<
        (direction: import('ant-design-vue/lib/transfer').TransferDirection, e: UIEvent) => void
      >;
      'onUpdate:targetKeys': import('vue').PropType<(keys: string[]) => void>;
      'onUpdate:selectedKeys': import('vue').PropType<(keys: string[]) => void>;
    }>
  > &
    import('vue').ShallowUnwrapRef<() => JSX.Element> &
    import('vue').ComponentCustomProperties;
  __isFragment?: never;
  __isTeleport?: never;
  __isSuspense?: never;
} & import('vue').ComponentOptionsBase<
  Readonly<
    import('vue').ExtractPropTypes<{
      id: StringConstructor;
      prefixCls: StringConstructor;
      dataSource: {
        type: import('vue').PropType<import('ant-design-vue/lib/transfer').TransferItem[]>;
        default: any[];
      };
      disabled: {
        type: BooleanConstructor;
        default: any;
      };
      targetKeys: {
        type: import('vue').PropType<string[]>;
        default: any;
      };
      selectedKeys: {
        type: import('vue').PropType<string[]>;
        default: any;
      };
      render: {
        type: import('vue').PropType<
          (
            item: import('ant-design-vue/lib/transfer').TransferItem,
          ) => import('ant-design-vue/lib/transfer').RenderResult
        >;
      };
      listStyle: {
        type: import('vue').PropType<
          | import('vue').CSSProperties
          | ((
              style: import('ant-design-vue/lib/transfer').ListStyle,
            ) => import('vue').CSSProperties)
        >;
        default: () => {};
      };
      operationStyle: {
        type: import('vue').PropType<import('vue').CSSProperties>;
        default: import('vue').CSSProperties;
      };
      titles: {
        type: import('vue').PropType<string[]>;
      };
      operations: {
        type: import('vue').PropType<string[]>;
      };
      showSearch: {
        type: BooleanConstructor;
        default: boolean;
      };
      filterOption: {
        type: import('vue').PropType<
          (inputValue: string, item: import('ant-design-vue/lib/transfer').TransferItem) => boolean
        >;
      };
      searchPlaceholder: StringConstructor;
      notFoundContent: import('vue-types').VueTypeValidableDef<any>;
      locale: {
        type: import('vue').PropType<Partial<import('ant-design-vue/lib/transfer').TransferLocale>>;
        default: () => {};
      };
      rowKey: {
        type: import('vue').PropType<
          (record: import('ant-design-vue/lib/transfer').TransferItem) => string
        >;
      };
      showSelectAll: {
        type: BooleanConstructor;
        default: any;
      };
      selectAllLabels: {
        type: import('vue').PropType<import('ant-design-vue/lib/transfer').SelectAllLabel[]>;
      };
      children: {
        type: import('vue').PropType<
          (
            props: Partial<
              import('vue').ExtractPropTypes<{
                prefixCls: StringConstructor;
                filteredRenderItems: import('vue-types').VueTypeValidableDef<unknown[]> & {
                  default: () => unknown[];
                } & {
                  default: () => unknown[];
                };
                selectedKeys: import('vue-types').VueTypeValidableDef<unknown[]> & {
                  default: () => unknown[];
                };
                disabled: {
                  type: BooleanConstructor;
                  default: any;
                };
                showRemove: {
                  type: BooleanConstructor;
                  default: any;
                };
                pagination: import('vue-types').VueTypeValidableDef<any>;
                onItemSelect: FunctionConstructor;
                onScroll: FunctionConstructor;
                onItemRemove: FunctionConstructor;
              }>
            >,
          ) => import('ant-design-vue/lib/_util/type').VueNode
        >;
      };
      oneWay: {
        type: BooleanConstructor;
        default: any;
      };
      pagination: {
        type: import('vue').PropType<
          import('ant-design-vue/lib/transfer/interface').PaginationType
        >;
        default: any;
      };
      onChange: import('vue').PropType<
        (
          targetKeys: string[],
          direction: import('ant-design-vue/lib/transfer').TransferDirection,
          moveKeys: string[],
        ) => void
      >;
      onSelectChange: import('vue').PropType<
        (sourceSelectedKeys: string[], targetSelectedKeys: string[]) => void
      >;
      onSearch: import('vue').PropType<
        (direction: import('ant-design-vue/lib/transfer').TransferDirection, value: string) => void
      >;
      onScroll: import('vue').PropType<
        (direction: import('ant-design-vue/lib/transfer').TransferDirection, e: UIEvent) => void
      >;
      'onUpdate:targetKeys': import('vue').PropType<(keys: string[]) => void>;
      'onUpdate:selectedKeys': import('vue').PropType<(keys: string[]) => void>;
    }>
  >,
  () => JSX.Element,
  unknown,
  {},
  {},
  import('vue').ComponentOptionsMixin,
  import('vue').ComponentOptionsMixin,
  Record<string, any>,
  string,
  {
    listStyle:
      | import('vue').CSSProperties
      | ((style: import('ant-design-vue/lib/transfer').ListStyle) => import('vue').CSSProperties);
    disabled: boolean;
    locale: {};
    selectedKeys: string[];
    showSearch: boolean;
    pagination: any;
    dataSource: import('ant-design-vue/lib/transfer').TransferItem[];
    showSelectAll: boolean;
    oneWay: boolean;
    targetKeys: string[];
    operationStyle: import('vue').CSSProperties;
  }
> &
  import('vue').VNodeProps &
  import('vue').AllowedComponentProps &
  import('vue').ComponentCustomProps &
  import('@vue/runtime-core').Plugin;
export default Transfer;
