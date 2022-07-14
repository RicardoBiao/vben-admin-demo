import type { FormItemProps } from '../form-item';
export declare type EditableProps = FormItemProps;
export declare const Editable: {
  new (...args: any[]): {
    $: import('vue').ComponentInternalInstance;
    $data: {};
    $props: Partial<{}> &
      Omit<
        Readonly<FormItemProps> &
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
      Readonly<FormItemProps>,
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
  } & Readonly<FormItemProps> &
    import('vue').ShallowUnwrapRef<{}> & {} & import('vue').ComponentCustomProperties;
  __isFragment?: never;
  __isTeleport?: never;
  __isSuspense?: never;
} & import('vue').ComponentOptionsBase<
  Readonly<FormItemProps>,
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
    Popover: import('vue').DefineComponent<
      Partial<
        import('vue').ExtractPropTypes<{
          content: import('vue-types').VueTypeValidableDef<any>;
          title: import('vue-types').VueTypeValidableDef<any>;
          trigger: import('vue').PropType<
            | import('ant-design-vue/lib/tooltip/abstractTooltipProps').TriggerType
            | import('ant-design-vue/lib/tooltip/abstractTooltipProps').TriggerType[]
          >;
          visible: {
            type: BooleanConstructor;
            default: any;
          };
          defaultVisible: {
            type: BooleanConstructor;
            default: any;
          };
          placement: import('vue').PropType<import('ant-design-vue/lib/tooltip').TooltipPlacement>;
          color: StringConstructor;
          transitionName: StringConstructor;
          overlayStyle: {
            type: import('vue').PropType<import('vue').CSSProperties>;
            default: import('vue').CSSProperties;
          };
          overlayClassName: StringConstructor;
          openClassName: StringConstructor;
          prefixCls: StringConstructor;
          mouseEnterDelay: NumberConstructor;
          mouseLeaveDelay: NumberConstructor;
          getPopupContainer: import('vue').PropType<(triggerNode: HTMLElement) => HTMLElement>;
          arrowPointAtCenter: {
            type: BooleanConstructor;
            default: any;
          };
          autoAdjustOverflow: {
            type: import('vue').PropType<
              boolean | import('ant-design-vue/lib/tooltip').AdjustOverflow
            >;
            default: boolean | import('ant-design-vue/lib/tooltip').AdjustOverflow;
          };
          destroyTooltipOnHide: {
            type: BooleanConstructor;
            default: any;
          };
          align: {
            type: import('vue').PropType<
              import('ant-design-vue/lib/vc-trigger/interface').AlignType
            >;
            default: import('ant-design-vue/lib/vc-trigger/interface').AlignType;
          };
          builtinPlacements: {
            type: import('vue').PropType<
              import('ant-design-vue/lib/vc-trigger/interface').BuildInPlacements
            >;
            default: import('ant-design-vue/lib/vc-trigger/interface').BuildInPlacements;
          };
          children: ArrayConstructor;
          onVisibleChange: import('vue').PropType<(vis: boolean) => void>;
          'onUpdate:visible': import('vue').PropType<(vis: boolean) => void>;
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
            content: import('vue-types').VueTypeValidableDef<any>;
            title: import('vue-types').VueTypeValidableDef<any>;
            trigger: import('vue').PropType<
              | import('ant-design-vue/lib/tooltip/abstractTooltipProps').TriggerType
              | import('ant-design-vue/lib/tooltip/abstractTooltipProps').TriggerType[]
            >;
            visible: {
              type: BooleanConstructor;
              default: any;
            };
            defaultVisible: {
              type: BooleanConstructor;
              default: any;
            };
            placement: import('vue').PropType<
              import('ant-design-vue/lib/tooltip').TooltipPlacement
            >;
            color: StringConstructor;
            transitionName: StringConstructor;
            overlayStyle: {
              type: import('vue').PropType<import('vue').CSSProperties>;
              default: import('vue').CSSProperties;
            };
            overlayClassName: StringConstructor;
            openClassName: StringConstructor;
            prefixCls: StringConstructor;
            mouseEnterDelay: NumberConstructor;
            mouseLeaveDelay: NumberConstructor;
            getPopupContainer: import('vue').PropType<(triggerNode: HTMLElement) => HTMLElement>;
            arrowPointAtCenter: {
              type: BooleanConstructor;
              default: any;
            };
            autoAdjustOverflow: {
              type: import('vue').PropType<
                boolean | import('ant-design-vue/lib/tooltip').AdjustOverflow
              >;
              default: boolean | import('ant-design-vue/lib/tooltip').AdjustOverflow;
            };
            destroyTooltipOnHide: {
              type: BooleanConstructor;
              default: any;
            };
            align: {
              type: import('vue').PropType<
                import('ant-design-vue/lib/vc-trigger/interface').AlignType
              >;
              default: import('ant-design-vue/lib/vc-trigger/interface').AlignType;
            };
            builtinPlacements: {
              type: import('vue').PropType<
                import('ant-design-vue/lib/vc-trigger/interface').BuildInPlacements
              >;
              default: import('ant-design-vue/lib/vc-trigger/interface').BuildInPlacements;
            };
            children: ArrayConstructor;
            onVisibleChange: import('vue').PropType<(vis: boolean) => void>;
            'onUpdate:visible': import('vue').PropType<(vis: boolean) => void>;
          }>
        >
      >,
      {
        content?: any;
        title?: any;
      }
    >;
  };
export default Editable;
