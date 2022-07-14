import type { RadioGroupProps as AntdRadioGroupProps } from 'ant-design-vue/lib/radio/Group';
import type { PropType } from 'vue';
export declare type RadioGroupProps = AntdRadioGroupProps & {
  optionType: 'defalt' | 'button';
};
export declare const Radio: ({
  new (...args: any[]): {
    $: import('vue').ComponentInternalInstance;
    $data: {};
    $props: Partial<{
      disabled: boolean;
      checked: boolean;
      autofocus: boolean;
      isGroup: boolean;
    }> &
      Omit<
        Readonly<
          import('vue').ExtractPropTypes<{
            prefixCls: StringConstructor;
            checked: {
              type: BooleanConstructor;
              default: any;
            };
            disabled: {
              type: BooleanConstructor;
              default: any;
            };
            isGroup: {
              type: BooleanConstructor;
              default: any;
            };
            value: import('vue-types').VueTypeValidableDef<any>;
            name: StringConstructor;
            id: StringConstructor;
            autofocus: {
              type: BooleanConstructor;
              default: any;
            };
            onChange: PropType<(event: import('ant-design-vue').RadioChangeEvent) => void>;
            onFocus: PropType<import('ant-design-vue/lib/_util/EventInterface').FocusEventHandler>;
            onBlur: PropType<import('ant-design-vue/lib/_util/EventInterface').FocusEventHandler>;
            onClick: PropType<import('ant-design-vue/lib/_util/EventInterface').MouseEventHandler>;
            'onUpdate:checked': PropType<(checked: boolean) => void>;
            'onUpdate:value': PropType<(checked: boolean) => void>;
          }>
        > &
          import('vue').VNodeProps &
          import('vue').AllowedComponentProps &
          import('vue').ComponentCustomProps,
        'disabled' | 'autofocus' | 'checked' | 'isGroup'
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
          prefixCls: StringConstructor;
          checked: {
            type: BooleanConstructor;
            default: any;
          };
          disabled: {
            type: BooleanConstructor;
            default: any;
          };
          isGroup: {
            type: BooleanConstructor;
            default: any;
          };
          value: import('vue-types').VueTypeValidableDef<any>;
          name: StringConstructor;
          id: StringConstructor;
          autofocus: {
            type: BooleanConstructor;
            default: any;
          };
          onChange: PropType<(event: import('ant-design-vue').RadioChangeEvent) => void>;
          onFocus: PropType<import('ant-design-vue/lib/_util/EventInterface').FocusEventHandler>;
          onBlur: PropType<import('ant-design-vue/lib/_util/EventInterface').FocusEventHandler>;
          onClick: PropType<import('ant-design-vue/lib/_util/EventInterface').MouseEventHandler>;
          'onUpdate:checked': PropType<(checked: boolean) => void>;
          'onUpdate:value': PropType<(checked: boolean) => void>;
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
        checked: boolean;
        autofocus: boolean;
        isGroup: boolean;
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
      prefixCls: StringConstructor;
      checked: {
        type: BooleanConstructor;
        default: any;
      };
      disabled: {
        type: BooleanConstructor;
        default: any;
      };
      isGroup: {
        type: BooleanConstructor;
        default: any;
      };
      value: import('vue-types').VueTypeValidableDef<any>;
      name: StringConstructor;
      id: StringConstructor;
      autofocus: {
        type: BooleanConstructor;
        default: any;
      };
      onChange: PropType<(event: import('ant-design-vue').RadioChangeEvent) => void>;
      onFocus: PropType<import('ant-design-vue/lib/_util/EventInterface').FocusEventHandler>;
      onBlur: PropType<import('ant-design-vue/lib/_util/EventInterface').FocusEventHandler>;
      onClick: PropType<import('ant-design-vue/lib/_util/EventInterface').MouseEventHandler>;
      'onUpdate:checked': PropType<(checked: boolean) => void>;
      'onUpdate:value': PropType<(checked: boolean) => void>;
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
      prefixCls: StringConstructor;
      checked: {
        type: BooleanConstructor;
        default: any;
      };
      disabled: {
        type: BooleanConstructor;
        default: any;
      };
      isGroup: {
        type: BooleanConstructor;
        default: any;
      };
      value: import('vue-types').VueTypeValidableDef<any>;
      name: StringConstructor;
      id: StringConstructor;
      autofocus: {
        type: BooleanConstructor;
        default: any;
      };
      onChange: PropType<(event: import('ant-design-vue').RadioChangeEvent) => void>;
      onFocus: PropType<import('ant-design-vue/lib/_util/EventInterface').FocusEventHandler>;
      onBlur: PropType<import('ant-design-vue/lib/_util/EventInterface').FocusEventHandler>;
      onClick: PropType<import('ant-design-vue/lib/_util/EventInterface').MouseEventHandler>;
      'onUpdate:checked': PropType<(checked: boolean) => void>;
      'onUpdate:value': PropType<(checked: boolean) => void>;
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
    checked: boolean;
    autofocus: boolean;
    isGroup: boolean;
  }
> &
  import('vue').VNodeProps &
  import('vue').AllowedComponentProps &
  import('vue').ComponentCustomProps &
  import('@vue/runtime-core').Plugin & {
    readonly Group: import('vue').DefineComponent<
      {
        prefixCls: StringConstructor;
        value: import('vue-types').VueTypeValidableDef<any>;
        size: import('vue-types').VueTypeDef<'small' | 'default' | 'large'>;
        options: {
          type: PropType<
            (string | number | import('ant-design-vue/lib/radio/Group').RadioGroupChildOption)[]
          >;
        };
        disabled: {
          type: BooleanConstructor;
          default: any;
        };
        name: StringConstructor;
        buttonStyle: {
          type: PropType<import('ant-design-vue/lib/radio/interface').RadioGroupButtonStyle>;
          default: string;
        };
        id: StringConstructor;
        optionType: {
          type: PropType<import('ant-design-vue/lib/radio/interface').RadioGroupOptionType>;
          default: string;
        };
        onChange: PropType<(e: import('ant-design-vue').RadioChangeEvent) => void>;
        'onUpdate:value': PropType<(val: any) => void>;
      },
      () => JSX.Element,
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
          prefixCls: StringConstructor;
          value: import('vue-types').VueTypeValidableDef<any>;
          size: import('vue-types').VueTypeDef<'small' | 'default' | 'large'>;
          options: {
            type: PropType<
              (string | number | import('ant-design-vue/lib/radio/Group').RadioGroupChildOption)[]
            >;
          };
          disabled: {
            type: BooleanConstructor;
            default: any;
          };
          name: StringConstructor;
          buttonStyle: {
            type: PropType<import('ant-design-vue/lib/radio/interface').RadioGroupButtonStyle>;
            default: string;
          };
          id: StringConstructor;
          optionType: {
            type: PropType<import('ant-design-vue/lib/radio/interface').RadioGroupOptionType>;
            default: string;
          };
          onChange: PropType<(e: import('ant-design-vue').RadioChangeEvent) => void>;
          'onUpdate:value': PropType<(val: any) => void>;
        }>
      >,
      {
        disabled: boolean;
        buttonStyle: import('ant-design-vue/lib/radio/interface').RadioGroupButtonStyle;
        optionType: import('ant-design-vue/lib/radio/interface').RadioGroupOptionType;
      }
    >;
    readonly Button: import('vue').DefineComponent<
      {
        prefixCls: StringConstructor;
        checked: {
          type: BooleanConstructor;
          default: any;
        };
        disabled: {
          type: BooleanConstructor;
          default: any;
        };
        isGroup: {
          type: BooleanConstructor;
          default: any;
        };
        value: import('vue-types').VueTypeValidableDef<any>;
        name: StringConstructor;
        id: StringConstructor;
        autofocus: {
          type: BooleanConstructor;
          default: any;
        };
        onChange: PropType<(event: import('ant-design-vue').RadioChangeEvent) => void>;
        onFocus: PropType<import('ant-design-vue/lib/_util/EventInterface').FocusEventHandler>;
        onBlur: PropType<import('ant-design-vue/lib/_util/EventInterface').FocusEventHandler>;
        onClick: PropType<import('ant-design-vue/lib/_util/EventInterface').MouseEventHandler>;
        'onUpdate:checked': PropType<(checked: boolean) => void>;
        'onUpdate:value': PropType<(checked: boolean) => void>;
      },
      () => JSX.Element,
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
          prefixCls: StringConstructor;
          checked: {
            type: BooleanConstructor;
            default: any;
          };
          disabled: {
            type: BooleanConstructor;
            default: any;
          };
          isGroup: {
            type: BooleanConstructor;
            default: any;
          };
          value: import('vue-types').VueTypeValidableDef<any>;
          name: StringConstructor;
          id: StringConstructor;
          autofocus: {
            type: BooleanConstructor;
            default: any;
          };
          onChange: PropType<(event: import('ant-design-vue').RadioChangeEvent) => void>;
          onFocus: PropType<import('ant-design-vue/lib/_util/EventInterface').FocusEventHandler>;
          onBlur: PropType<import('ant-design-vue/lib/_util/EventInterface').FocusEventHandler>;
          onClick: PropType<import('ant-design-vue/lib/_util/EventInterface').MouseEventHandler>;
          'onUpdate:checked': PropType<(checked: boolean) => void>;
          'onUpdate:value': PropType<(checked: boolean) => void>;
        }>
      >,
      {
        disabled: boolean;
        checked: boolean;
        autofocus: boolean;
        isGroup: boolean;
      }
    >;
  }) & {
  Group: import('vue').DefineComponent<
    {
      options: {
        type: PropType<
          (string | number | import('ant-design-vue/lib/radio/Group').RadioGroupChildOption)[]
        >;
        default: () => any[];
      };
      optionType: {
        type: PropType<'button'>;
        default: string;
      };
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
        options: {
          type: PropType<
            (string | number | import('ant-design-vue/lib/radio/Group').RadioGroupChildOption)[]
          >;
          default: () => any[];
        };
        optionType: {
          type: PropType<'button'>;
          default: string;
        };
      }>
    >,
    {
      options: (string | number | import('ant-design-vue/lib/radio/Group').RadioGroupChildOption)[];
      optionType: 'button';
    }
  >;
};
export default Radio;
