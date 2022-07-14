export declare const Switch: {
  new (...args: any[]): {
    $: import('vue').ComponentInternalInstance;
    $data: {};
    $props: Partial<{
      disabled: boolean;
      autofocus: boolean;
      loading: boolean;
      checkedValue: string | number | boolean;
      unCheckedValue: string | number | boolean;
    }> &
      Omit<
        Readonly<
          import('vue').ExtractPropTypes<{
            id: StringConstructor;
            prefixCls: StringConstructor;
            size: import('vue-types').VueTypeDef<'small' | 'default'>;
            disabled: {
              type: BooleanConstructor;
              default: any;
            };
            checkedChildren: import('vue-types').VueTypeValidableDef<any>;
            unCheckedChildren: import('vue-types').VueTypeValidableDef<any>;
            tabindex: import('vue-types').VueTypeDef<string | number>;
            autofocus: {
              type: BooleanConstructor;
              default: any;
            };
            loading: {
              type: BooleanConstructor;
              default: any;
            };
            checked: import('vue-types').VueTypeDef<string | number | boolean>;
            checkedValue: import('vue-types').VueTypeDef<string | number | boolean> & {
              default: string | number | boolean;
            };
            unCheckedValue: import('vue-types').VueTypeDef<string | number | boolean> & {
              default: string | number | boolean;
            };
            onChange: {
              type: import('vue').PropType<(checked: string | number | boolean, e: Event) => void>;
            };
            onClick: {
              type: import('vue').PropType<(checked: string | number | boolean, e: Event) => void>;
            };
            onKeydown: {
              type: import('vue').PropType<(e: Event) => void>;
            };
            onMouseup: {
              type: import('vue').PropType<(e: Event) => void>;
            };
            'onUpdate:checked': {
              type: import('vue').PropType<(checked: string | number | boolean) => void>;
            };
            onBlur: import('vue').PropType<
              import('ant-design-vue/lib/_util/EventInterface').FocusEventHandler
            >;
            onFocus: import('vue').PropType<
              import('ant-design-vue/lib/_util/EventInterface').FocusEventHandler
            >;
          }>
        > &
          import('vue').VNodeProps &
          import('vue').AllowedComponentProps &
          import('vue').ComponentCustomProps,
        'disabled' | 'autofocus' | 'loading' | 'checkedValue' | 'unCheckedValue'
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
          size: import('vue-types').VueTypeDef<'small' | 'default'>;
          disabled: {
            type: BooleanConstructor;
            default: any;
          };
          checkedChildren: import('vue-types').VueTypeValidableDef<any>;
          unCheckedChildren: import('vue-types').VueTypeValidableDef<any>;
          tabindex: import('vue-types').VueTypeDef<string | number>;
          autofocus: {
            type: BooleanConstructor;
            default: any;
          };
          loading: {
            type: BooleanConstructor;
            default: any;
          };
          checked: import('vue-types').VueTypeDef<string | number | boolean>;
          checkedValue: import('vue-types').VueTypeDef<string | number | boolean> & {
            default: string | number | boolean;
          };
          unCheckedValue: import('vue-types').VueTypeDef<string | number | boolean> & {
            default: string | number | boolean;
          };
          onChange: {
            type: import('vue').PropType<(checked: string | number | boolean, e: Event) => void>;
          };
          onClick: {
            type: import('vue').PropType<(checked: string | number | boolean, e: Event) => void>;
          };
          onKeydown: {
            type: import('vue').PropType<(e: Event) => void>;
          };
          onMouseup: {
            type: import('vue').PropType<(e: Event) => void>;
          };
          'onUpdate:checked': {
            type: import('vue').PropType<(checked: string | number | boolean) => void>;
          };
          onBlur: import('vue').PropType<
            import('ant-design-vue/lib/_util/EventInterface').FocusEventHandler
          >;
          onFocus: import('vue').PropType<
            import('ant-design-vue/lib/_util/EventInterface').FocusEventHandler
          >;
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
        disabled: boolean;
        autofocus: boolean;
        loading: boolean;
        checkedValue: string | number | boolean;
        unCheckedValue: string | number | boolean;
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
      size: import('vue-types').VueTypeDef<'small' | 'default'>;
      disabled: {
        type: BooleanConstructor;
        default: any;
      };
      checkedChildren: import('vue-types').VueTypeValidableDef<any>;
      unCheckedChildren: import('vue-types').VueTypeValidableDef<any>;
      tabindex: import('vue-types').VueTypeDef<string | number>;
      autofocus: {
        type: BooleanConstructor;
        default: any;
      };
      loading: {
        type: BooleanConstructor;
        default: any;
      };
      checked: import('vue-types').VueTypeDef<string | number | boolean>;
      checkedValue: import('vue-types').VueTypeDef<string | number | boolean> & {
        default: string | number | boolean;
      };
      unCheckedValue: import('vue-types').VueTypeDef<string | number | boolean> & {
        default: string | number | boolean;
      };
      onChange: {
        type: import('vue').PropType<(checked: string | number | boolean, e: Event) => void>;
      };
      onClick: {
        type: import('vue').PropType<(checked: string | number | boolean, e: Event) => void>;
      };
      onKeydown: {
        type: import('vue').PropType<(e: Event) => void>;
      };
      onMouseup: {
        type: import('vue').PropType<(e: Event) => void>;
      };
      'onUpdate:checked': {
        type: import('vue').PropType<(checked: string | number | boolean) => void>;
      };
      onBlur: import('vue').PropType<
        import('ant-design-vue/lib/_util/EventInterface').FocusEventHandler
      >;
      onFocus: import('vue').PropType<
        import('ant-design-vue/lib/_util/EventInterface').FocusEventHandler
      >;
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
      size: import('vue-types').VueTypeDef<'small' | 'default'>;
      disabled: {
        type: BooleanConstructor;
        default: any;
      };
      checkedChildren: import('vue-types').VueTypeValidableDef<any>;
      unCheckedChildren: import('vue-types').VueTypeValidableDef<any>;
      tabindex: import('vue-types').VueTypeDef<string | number>;
      autofocus: {
        type: BooleanConstructor;
        default: any;
      };
      loading: {
        type: BooleanConstructor;
        default: any;
      };
      checked: import('vue-types').VueTypeDef<string | number | boolean>;
      checkedValue: import('vue-types').VueTypeDef<string | number | boolean> & {
        default: string | number | boolean;
      };
      unCheckedValue: import('vue-types').VueTypeDef<string | number | boolean> & {
        default: string | number | boolean;
      };
      onChange: {
        type: import('vue').PropType<(checked: string | number | boolean, e: Event) => void>;
      };
      onClick: {
        type: import('vue').PropType<(checked: string | number | boolean, e: Event) => void>;
      };
      onKeydown: {
        type: import('vue').PropType<(e: Event) => void>;
      };
      onMouseup: {
        type: import('vue').PropType<(e: Event) => void>;
      };
      'onUpdate:checked': {
        type: import('vue').PropType<(checked: string | number | boolean) => void>;
      };
      onBlur: import('vue').PropType<
        import('ant-design-vue/lib/_util/EventInterface').FocusEventHandler
      >;
      onFocus: import('vue').PropType<
        import('ant-design-vue/lib/_util/EventInterface').FocusEventHandler
      >;
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
    disabled: boolean;
    autofocus: boolean;
    loading: boolean;
    checkedValue: string | number | boolean;
    unCheckedValue: string | number | boolean;
  }
> &
  import('vue').VNodeProps &
  import('vue').AllowedComponentProps &
  import('vue').ComponentCustomProps &
  import('@vue/runtime-core').Plugin;
export default Switch;
