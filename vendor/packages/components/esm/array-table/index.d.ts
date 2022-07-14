import type { Ref } from 'vue';
import type { VNode } from 'vue';
import type { TableProps } from 'ant-design-vue/lib/table';
export declare const ArrayTable: {
  new (...args: any[]): {
    $: import('vue').ComponentInternalInstance;
    $data: {};
    $props: Partial<{}> &
      Omit<
        Readonly<TableProps<any>> &
          import('vue').VNodeProps &
          import('vue').AllowedComponentProps &
          import('vue').ComponentCustomProps,
        never
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
    $emit: ((event: string, ...args: any[]) => void) | ((event: string, ...args: any[]) => void);
    $el: any;
    $options: import('vue').ComponentOptionsBase<
      Readonly<TableProps<any>>,
      {},
      {},
      {},
      {},
      import('vue').ComponentOptionsMixin,
      import('vue').ComponentOptionsMixin,
      import('vue').EmitsOptions,
      string,
      {}
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
  } & Readonly<TableProps<any>> &
    import('vue').ShallowUnwrapRef<{}> & {} & import('vue').ComponentCustomProperties;
  __isFragment?: never;
  __isTeleport?: never;
  __isSuspense?: never;
} & import('vue').ComponentOptionsBase<
  Readonly<TableProps<any>>,
  {},
  {},
  {},
  {},
  import('vue').ComponentOptionsMixin,
  import('vue').ComponentOptionsMixin,
  import('vue').EmitsOptions,
  string,
  {}
> &
  import('vue').VNodeProps &
  import('vue').AllowedComponentProps &
  import('vue').ComponentCustomProps & {
    Column: import('vue').DefineComponent<
      {},
      {},
      {},
      {},
      {},
      import('vue').ComponentOptionsMixin,
      import('vue').ComponentOptionsMixin,
      import('vue').EmitsOptions,
      string,
      import('vue').VNodeProps &
        import('vue').AllowedComponentProps &
        import('vue').ComponentCustomProps,
      Readonly<import('vue').ExtractPropTypes<{}>>,
      {}
    >;
    Index: import('vue').DefineComponent<
      {},
      () => VNode<
        import('vue').RendererNode,
        import('vue').RendererElement,
        {
          [key: string]: any;
        }
      >,
      {},
      {},
      {},
      import('vue').ComponentOptionsMixin,
      import('vue').ComponentOptionsMixin,
      import('vue').EmitsOptions,
      string,
      import('vue').VNodeProps &
        import('vue').AllowedComponentProps &
        import('vue').ComponentCustomProps,
      Readonly<import('vue').ExtractPropTypes<{}>>,
      {}
    >;
    SortHandle: import('vue').DefineComponent<
      Readonly<{
        index?: any;
      }>,
      () => VNode<
        import('vue').RendererNode,
        import('vue').RendererElement,
        {
          [key: string]: any;
        }
      >,
      unknown,
      {},
      {},
      import('vue').ComponentOptionsMixin,
      import('vue').ComponentOptionsMixin,
      Record<string, any>,
      string,
      import('vue').VNodeProps &
        import('vue').AllowedComponentProps &
        import('vue').ComponentCustomProps,
      Readonly<
        import('vue').ExtractPropTypes<
          Readonly<{
            index?: any;
          }>
        >
      >,
      {
        readonly index?: any;
      }
    >;
    Addition: import('vue').DefineComponent<
      Readonly<{
        defaultValue?: any;
        title?: any;
        method?: any;
      }>,
      () => VNode<
        import('vue').RendererNode,
        import('vue').RendererElement,
        {
          [key: string]: any;
        }
      >,
      unknown,
      {},
      {},
      import('vue').ComponentOptionsMixin,
      import('vue').ComponentOptionsMixin,
      Record<string, any>,
      string,
      import('vue').VNodeProps &
        import('vue').AllowedComponentProps &
        import('vue').ComponentCustomProps,
      Readonly<
        import('vue').ExtractPropTypes<
          Readonly<{
            defaultValue?: any;
            title?: any;
            method?: any;
          }>
        >
      >,
      {
        readonly defaultValue?: any;
        readonly title?: any;
        readonly method?: any;
      }
    >;
    Remove: import('vue').DefineComponent<
      {
        title: StringConstructor;
        index: NumberConstructor;
      },
      () => VNode<
        import('vue').RendererNode,
        import('vue').RendererElement,
        {
          [key: string]: any;
        }
      >,
      unknown,
      {},
      {},
      import('vue').ComponentOptionsMixin,
      import('vue').ComponentOptionsMixin,
      Record<string, any>,
      string,
      import('vue').VNodeProps &
        import('vue').AllowedComponentProps &
        import('vue').ComponentCustomProps,
      Readonly<
        import('vue').ExtractPropTypes<{
          title: StringConstructor;
          index: NumberConstructor;
        }>
      >,
      {}
    >;
    MoveDown: import('vue').DefineComponent<
      Readonly<{
        title?: any;
        index?: any;
      }>,
      () => VNode<
        import('vue').RendererNode,
        import('vue').RendererElement,
        {
          [key: string]: any;
        }
      >,
      unknown,
      {},
      {},
      import('vue').ComponentOptionsMixin,
      import('vue').ComponentOptionsMixin,
      Record<string, any>,
      string,
      import('vue').VNodeProps &
        import('vue').AllowedComponentProps &
        import('vue').ComponentCustomProps,
      Readonly<
        import('vue').ExtractPropTypes<
          Readonly<{
            title?: any;
            index?: any;
          }>
        >
      >,
      {
        readonly title?: any;
        readonly index?: any;
      }
    >;
    MoveUp: import('vue').DefineComponent<
      Readonly<{
        title?: any;
        index?: any;
      }>,
      () => VNode<
        import('vue').RendererNode,
        import('vue').RendererElement,
        {
          [key: string]: any;
        }
      >,
      unknown,
      {},
      {},
      import('vue').ComponentOptionsMixin,
      import('vue').ComponentOptionsMixin,
      Record<string, any>,
      string,
      import('vue').VNodeProps &
        import('vue').AllowedComponentProps &
        import('vue').ComponentCustomProps,
      Readonly<
        import('vue').ExtractPropTypes<
          Readonly<{
            title?: any;
            index?: any;
          }>
        >
      >,
      {
        readonly title?: any;
        readonly index?: any;
      }
    >;
    useArray: () => import('../array-base').IArrayBaseContext;
    useIndex: (index?: number) => Ref<number>;
    useRecord: (record?: number) => Ref<any>;
  };
export default ArrayTable;
