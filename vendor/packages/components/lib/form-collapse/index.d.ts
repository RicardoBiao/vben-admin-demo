import type { CollapseProps } from 'ant-design-vue/lib/collapse';
import type { PropType } from 'vue';
declare type ActiveKeys = string | number | Array<string | number>;
declare type ActiveKey = string | number;
export interface IFormCollapse {
  activeKeys: ActiveKeys;
  hasActiveKey(key: ActiveKey): boolean;
  setActiveKeys(key: ActiveKeys): void;
  addActiveKey(key: ActiveKey): void;
  removeActiveKey(key: ActiveKey): void;
  toggleActiveKey(key: ActiveKey): void;
}
export interface IFormCollapseProps extends CollapseProps {
  formCollapse?: IFormCollapse;
}
export declare const CollapsePanel: import('vue').DefineComponent<
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
      expandIcon: PropType<
        (panelProps: import('ant-design-vue/lib/collapse/commonProps').PanelProps) => any
      >;
      extra: import('vue-types').VueTypeValidableDef<any>;
      panelKey: import('vue-types').VueTypeDef<string | number>;
      collapsible: {
        type: PropType<import('ant-design-vue/lib/collapse/commonProps').CollapsibleType>;
      };
      role: StringConstructor;
      onItemClick: {
        type: PropType<(panelKey: import('ant-design-vue/lib/_util/type').Key) => void>;
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
        expandIcon: PropType<
          (panelProps: import('ant-design-vue/lib/collapse/commonProps').PanelProps) => any
        >;
        extra: import('vue-types').VueTypeValidableDef<any>;
        panelKey: import('vue-types').VueTypeDef<string | number>;
        collapsible: {
          type: PropType<import('ant-design-vue/lib/collapse/commonProps').CollapsibleType>;
        };
        role: StringConstructor;
        onItemClick: {
          type: PropType<(panelKey: import('ant-design-vue/lib/_util/type').Key) => void>;
        };
      }>
    >
  >,
  {
    extra?: any;
    header?: any;
  }
>;
export declare const FormCollapse: {
  new (...args: any[]): {
    $: import('vue').ComponentInternalInstance;
    $data: {};
    $props: Partial<{}> &
      Omit<
        Readonly<
          import('vue').ExtractPropTypes<{
            formCollapse: {
              type: PropType<IFormCollapse>;
            };
            activeKey: {
              type: (StringConstructor | NumberConstructor)[];
            };
          }>
        > & {
          onInput?: (...args: any[]) => any;
        } & import('vue').VNodeProps &
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
    $emit: (event: 'input', ...args: any[]) => void;
    $el: any;
    $options: import('vue').ComponentOptionsBase<
      Readonly<
        import('vue').ExtractPropTypes<{
          formCollapse: {
            type: PropType<IFormCollapse>;
          };
          activeKey: {
            type: (StringConstructor | NumberConstructor)[];
          };
        }>
      > & {
        onInput?: (...args: any[]) => any;
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
      'input'[],
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
  } & Readonly<
    import('vue').ExtractPropTypes<{
      formCollapse: {
        type: PropType<IFormCollapse>;
      };
      activeKey: {
        type: (StringConstructor | NumberConstructor)[];
      };
    }>
  > & {
      onInput?: (...args: any[]) => any;
    } & import('vue').ShallowUnwrapRef<
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
      formCollapse: {
        type: PropType<IFormCollapse>;
      };
      activeKey: {
        type: (StringConstructor | NumberConstructor)[];
      };
    }>
  > & {
    onInput?: (...args: any[]) => any;
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
  'input'[],
  'input',
  {}
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
          expandIcon: PropType<
            (panelProps: import('ant-design-vue/lib/collapse/commonProps').PanelProps) => any
          >;
          extra: import('vue-types').VueTypeValidableDef<any>;
          panelKey: import('vue-types').VueTypeDef<string | number>;
          collapsible: {
            type: PropType<import('ant-design-vue/lib/collapse/commonProps').CollapsibleType>;
          };
          role: StringConstructor;
          onItemClick: {
            type: PropType<(panelKey: import('ant-design-vue/lib/_util/type').Key) => void>;
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
            expandIcon: PropType<
              (panelProps: import('ant-design-vue/lib/collapse/commonProps').PanelProps) => any
            >;
            extra: import('vue-types').VueTypeValidableDef<any>;
            panelKey: import('vue-types').VueTypeDef<string | number>;
            collapsible: {
              type: PropType<import('ant-design-vue/lib/collapse/commonProps').CollapsibleType>;
            };
            role: StringConstructor;
            onItemClick: {
              type: PropType<(panelKey: import('ant-design-vue/lib/_util/type').Key) => void>;
            };
          }>
        >
      >,
      {
        extra?: any;
        header?: any;
      }
    >;
    createFormCollapse: (defaultActiveKeys?: ActiveKeys) => {
      activeKeys: ActiveKeys;
      setActiveKeys(keys: ActiveKeys): void;
      hasActiveKey(key: ActiveKey): boolean;
      addActiveKey(key: ActiveKey): void;
      removeActiveKey(key: ActiveKey): void;
      toggleActiveKey(key: ActiveKey): void;
    };
  };
export default FormCollapse;
