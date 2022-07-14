import type { Ref } from 'vue';
import type { CollapseProps } from 'ant-design-vue/lib/collapse';
export interface IArrayCollapseProps extends CollapseProps {
  defaultOpenPanelCount?: number;
}
export declare const ArrayCollapse: {
  new (...args: any[]): {
    $: import('vue').ComponentInternalInstance;
    $data: {};
    $props: Partial<{
      defaultOpenPanelCount: number;
    }> &
      Omit<
        Readonly<
          import('vue').ExtractPropTypes<{
            defaultOpenPanelCount: {
              type: NumberConstructor;
              default: number;
            };
          }>
        > &
          import('vue').VNodeProps &
          import('vue').AllowedComponentProps &
          import('vue').ComponentCustomProps,
        'defaultOpenPanelCount'
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
          defaultOpenPanelCount: {
            type: NumberConstructor;
            default: number;
          };
        }>
      >,
      () => import('vue').VNode<
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
      {
        defaultOpenPanelCount: number;
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
      defaultOpenPanelCount: {
        type: NumberConstructor;
        default: number;
      };
    }>
  > &
    import('vue').ShallowUnwrapRef<
      () => import('vue').VNode<
        import('vue').RendererNode,
        import('vue').RendererElement,
        {
          [key: string]: any;
        }
      >
    > & {} & import('vue').ComponentCustomProperties;
  __isFragment?: never;
  __isTeleport?: never;
  __isSuspense?: never;
} & import('vue').ComponentOptionsBase<
  Readonly<
    import('vue').ExtractPropTypes<{
      defaultOpenPanelCount: {
        type: NumberConstructor;
        default: number;
      };
    }>
  >,
  () => import('vue').VNode<
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
  {
    defaultOpenPanelCount: number;
  }
> &
  import('vue').VNodeProps &
  import('vue').AllowedComponentProps &
  import('vue').ComponentCustomProps & {
    CollapsePanel: import('vue').DefineComponent<
      Partial<
        import('vue').ExtractPropTypes<{
          openAnimation: import('vue-types').VueTypeValidableDef<{
            [key: string]: any;
          }> & {
            default: () => {
              [key: string]: any;
            };
          };
          prefixCls: StringConstructor;
          header: import('vue-types').VueTypeValidableDef<any>;
          headerClass: StringConstructor;
          showArrow: {
            type: BooleanConstructor;
            default: any;
          };
          isActive: {
            type: BooleanConstructor;
            default: any;
          };
          destroyInactivePanel: {
            type: BooleanConstructor;
            default: any;
          };
          disabled: {
            type: BooleanConstructor;
            default: any;
          };
          accordion: {
            type: BooleanConstructor;
            default: any;
          };
          forceRender: {
            type: BooleanConstructor;
            default: any;
          };
          expandIcon: import('vue').PropType<
            (panelProps: import('ant-design-vue/lib/collapse/commonProps').PanelProps) => any
          >;
          extra: import('vue-types').VueTypeValidableDef<any>;
          panelKey: import('vue-types').VueTypeDef<string | number>;
          collapsible: {
            type: import('vue').PropType<
              import('ant-design-vue/lib/collapse/commonProps').CollapsibleType
            >;
          };
          role: StringConstructor;
          onItemClick: {
            type: import('vue').PropType<
              (panelKey: import('ant-design-vue/lib/_util/type').Key) => void
            >;
          };
        }>
      >,
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
      Readonly<
        Partial<
          import('vue').ExtractPropTypes<{
            openAnimation: import('vue-types').VueTypeValidableDef<{
              [key: string]: any;
            }> & {
              default: () => {
                [key: string]: any;
              };
            };
            prefixCls: StringConstructor;
            header: import('vue-types').VueTypeValidableDef<any>;
            headerClass: StringConstructor;
            showArrow: {
              type: BooleanConstructor;
              default: any;
            };
            isActive: {
              type: BooleanConstructor;
              default: any;
            };
            destroyInactivePanel: {
              type: BooleanConstructor;
              default: any;
            };
            disabled: {
              type: BooleanConstructor;
              default: any;
            };
            accordion: {
              type: BooleanConstructor;
              default: any;
            };
            forceRender: {
              type: BooleanConstructor;
              default: any;
            };
            expandIcon: import('vue').PropType<
              (panelProps: import('ant-design-vue/lib/collapse/commonProps').PanelProps) => any
            >;
            extra: import('vue-types').VueTypeValidableDef<any>;
            panelKey: import('vue-types').VueTypeDef<string | number>;
            collapsible: {
              type: import('vue').PropType<
                import('ant-design-vue/lib/collapse/commonProps').CollapsibleType
              >;
            };
            role: StringConstructor;
            onItemClick: {
              type: import('vue').PropType<
                (panelKey: import('ant-design-vue/lib/_util/type').Key) => void
              >;
            };
          }>
        >
      >,
      {
        extra?: any;
        header?: any;
      }
    >;
    Index: import('vue').DefineComponent<
      {},
      () => import('vue').VNode<
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
      () => import('vue').VNode<
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
      () => import('vue').VNode<
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
      () => import('vue').VNode<
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
      () => import('vue').VNode<
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
      () => import('vue').VNode<
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
export default ArrayCollapse;
