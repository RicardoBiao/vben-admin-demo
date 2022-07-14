export declare const InputNumber: {
  new (...args: any[]): {
    $: import('vue').ComponentInternalInstance;
    $data: {};
    $props: Partial<{
      step: import('ant-design-vue/lib/input-number/src/utils/MiniDecimal').ValueType;
      keyboard: boolean;
      bordered: boolean;
      controls: boolean;
    }> &
      Omit<
        Readonly<
          import('vue').ExtractPropTypes<{
            size: {
              type: import('vue').PropType<import('ant-design-vue/lib/button').ButtonSize>;
            };
            bordered: {
              type: BooleanConstructor;
              default: boolean;
            };
            placeholder: StringConstructor;
            name: StringConstructor;
            id: StringConstructor;
            type: StringConstructor;
            addonBefore: import('vue-types').VueTypeValidableDef<any>;
            addonAfter: import('vue-types').VueTypeValidableDef<any>;
            prefix: import('vue-types').VueTypeValidableDef<any>;
            'onUpdate:value': {
              type: import('vue').PropType<
                (
                  value: import('ant-design-vue/lib/input-number/src/utils/MiniDecimal').ValueType,
                ) => void
              >;
            };
            valueModifiers: ObjectConstructor;
            stringMode: {
              type: import('vue').PropType<boolean>;
            };
            defaultValue: {
              type: import('vue').PropType<
                import('ant-design-vue/lib/input-number/src/utils/MiniDecimal').ValueType
              >;
            };
            value: {
              type: import('vue').PropType<
                import('ant-design-vue/lib/input-number/src/utils/MiniDecimal').ValueType
              >;
            };
            prefixCls: {
              type: import('vue').PropType<string>;
            };
            min: {
              type: import('vue').PropType<
                import('ant-design-vue/lib/input-number/src/utils/MiniDecimal').ValueType
              >;
            };
            max: {
              type: import('vue').PropType<
                import('ant-design-vue/lib/input-number/src/utils/MiniDecimal').ValueType
              >;
            };
            step: {
              type: import('vue').PropType<
                import('ant-design-vue/lib/input-number/src/utils/MiniDecimal').ValueType
              >;
              default: number;
            };
            tabindex: {
              type: import('vue').PropType<number>;
            };
            controls: {
              type: import('vue').PropType<boolean>;
              default: boolean;
            };
            readonly: {
              type: import('vue').PropType<boolean>;
            };
            disabled: {
              type: import('vue').PropType<boolean>;
            };
            autofocus: {
              type: import('vue').PropType<boolean>;
            };
            keyboard: {
              type: import('vue').PropType<boolean>;
              default: boolean;
            };
            parser: {
              type: import('vue').PropType<
                (
                  displayValue: string,
                ) => import('ant-design-vue/lib/input-number/src/utils/MiniDecimal').ValueType
              >;
            };
            formatter: {
              type: import('vue').PropType<
                (
                  value: import('ant-design-vue/lib/input-number/src/utils/MiniDecimal').ValueType,
                  info: {
                    userTyping: boolean;
                    input: string;
                  },
                ) => string
              >;
            };
            precision: {
              type: import('vue').PropType<number>;
            };
            decimalSeparator: {
              type: import('vue').PropType<string>;
            };
            onInput: {
              type: import('vue').PropType<(text: string) => void>;
            };
            onChange: {
              type: import('vue').PropType<
                (
                  value: import('ant-design-vue/lib/input-number/src/utils/MiniDecimal').ValueType,
                ) => void
              >;
            };
            onPressEnter: {
              type: import('vue').PropType<
                import('ant-design-vue/lib/_util/EventInterface').KeyboardEventHandler
              >;
            };
            onStep: {
              type: import('vue').PropType<
                (
                  value: import('ant-design-vue/lib/input-number/src/utils/MiniDecimal').ValueType,
                  info: {
                    offset: import('ant-design-vue/lib/input-number/src/utils/MiniDecimal').ValueType;
                    type: 'down' | 'up';
                  },
                ) => void
              >;
            };
            onBlur: {
              type: import('vue').PropType<(e: FocusEvent) => void>;
            };
            onFocus: {
              type: import('vue').PropType<(e: FocusEvent) => void>;
            };
          }>
        > &
          import('vue').VNodeProps &
          import('vue').AllowedComponentProps &
          import('vue').ComponentCustomProps,
        'bordered' | 'keyboard' | 'step' | 'controls'
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
          size: {
            type: import('vue').PropType<import('ant-design-vue/lib/button').ButtonSize>;
          };
          bordered: {
            type: BooleanConstructor;
            default: boolean;
          };
          placeholder: StringConstructor;
          name: StringConstructor;
          id: StringConstructor;
          type: StringConstructor;
          addonBefore: import('vue-types').VueTypeValidableDef<any>;
          addonAfter: import('vue-types').VueTypeValidableDef<any>;
          prefix: import('vue-types').VueTypeValidableDef<any>;
          'onUpdate:value': {
            type: import('vue').PropType<
              (
                value: import('ant-design-vue/lib/input-number/src/utils/MiniDecimal').ValueType,
              ) => void
            >;
          };
          valueModifiers: ObjectConstructor;
          stringMode: {
            type: import('vue').PropType<boolean>;
          };
          defaultValue: {
            type: import('vue').PropType<
              import('ant-design-vue/lib/input-number/src/utils/MiniDecimal').ValueType
            >;
          };
          value: {
            type: import('vue').PropType<
              import('ant-design-vue/lib/input-number/src/utils/MiniDecimal').ValueType
            >;
          };
          prefixCls: {
            type: import('vue').PropType<string>;
          };
          min: {
            type: import('vue').PropType<
              import('ant-design-vue/lib/input-number/src/utils/MiniDecimal').ValueType
            >;
          };
          max: {
            type: import('vue').PropType<
              import('ant-design-vue/lib/input-number/src/utils/MiniDecimal').ValueType
            >;
          };
          step: {
            type: import('vue').PropType<
              import('ant-design-vue/lib/input-number/src/utils/MiniDecimal').ValueType
            >;
            default: number;
          };
          tabindex: {
            type: import('vue').PropType<number>;
          };
          controls: {
            type: import('vue').PropType<boolean>;
            default: boolean;
          };
          readonly: {
            type: import('vue').PropType<boolean>;
          };
          disabled: {
            type: import('vue').PropType<boolean>;
          };
          autofocus: {
            type: import('vue').PropType<boolean>;
          };
          keyboard: {
            type: import('vue').PropType<boolean>;
            default: boolean;
          };
          parser: {
            type: import('vue').PropType<
              (
                displayValue: string,
              ) => import('ant-design-vue/lib/input-number/src/utils/MiniDecimal').ValueType
            >;
          };
          formatter: {
            type: import('vue').PropType<
              (
                value: import('ant-design-vue/lib/input-number/src/utils/MiniDecimal').ValueType,
                info: {
                  userTyping: boolean;
                  input: string;
                },
              ) => string
            >;
          };
          precision: {
            type: import('vue').PropType<number>;
          };
          decimalSeparator: {
            type: import('vue').PropType<string>;
          };
          onInput: {
            type: import('vue').PropType<(text: string) => void>;
          };
          onChange: {
            type: import('vue').PropType<
              (
                value: import('ant-design-vue/lib/input-number/src/utils/MiniDecimal').ValueType,
              ) => void
            >;
          };
          onPressEnter: {
            type: import('vue').PropType<
              import('ant-design-vue/lib/_util/EventInterface').KeyboardEventHandler
            >;
          };
          onStep: {
            type: import('vue').PropType<
              (
                value: import('ant-design-vue/lib/input-number/src/utils/MiniDecimal').ValueType,
                info: {
                  offset: import('ant-design-vue/lib/input-number/src/utils/MiniDecimal').ValueType;
                  type: 'down' | 'up';
                },
              ) => void
            >;
          };
          onBlur: {
            type: import('vue').PropType<(e: FocusEvent) => void>;
          };
          onFocus: {
            type: import('vue').PropType<(e: FocusEvent) => void>;
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
        step: import('ant-design-vue/lib/input-number/src/utils/MiniDecimal').ValueType;
        keyboard: boolean;
        bordered: boolean;
        controls: boolean;
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
      size: {
        type: import('vue').PropType<import('ant-design-vue/lib/button').ButtonSize>;
      };
      bordered: {
        type: BooleanConstructor;
        default: boolean;
      };
      placeholder: StringConstructor;
      name: StringConstructor;
      id: StringConstructor;
      type: StringConstructor;
      addonBefore: import('vue-types').VueTypeValidableDef<any>;
      addonAfter: import('vue-types').VueTypeValidableDef<any>;
      prefix: import('vue-types').VueTypeValidableDef<any>;
      'onUpdate:value': {
        type: import('vue').PropType<
          (value: import('ant-design-vue/lib/input-number/src/utils/MiniDecimal').ValueType) => void
        >;
      };
      valueModifiers: ObjectConstructor;
      stringMode: {
        type: import('vue').PropType<boolean>;
      };
      defaultValue: {
        type: import('vue').PropType<
          import('ant-design-vue/lib/input-number/src/utils/MiniDecimal').ValueType
        >;
      };
      value: {
        type: import('vue').PropType<
          import('ant-design-vue/lib/input-number/src/utils/MiniDecimal').ValueType
        >;
      };
      prefixCls: {
        type: import('vue').PropType<string>;
      };
      min: {
        type: import('vue').PropType<
          import('ant-design-vue/lib/input-number/src/utils/MiniDecimal').ValueType
        >;
      };
      max: {
        type: import('vue').PropType<
          import('ant-design-vue/lib/input-number/src/utils/MiniDecimal').ValueType
        >;
      };
      step: {
        type: import('vue').PropType<
          import('ant-design-vue/lib/input-number/src/utils/MiniDecimal').ValueType
        >;
        default: number;
      };
      tabindex: {
        type: import('vue').PropType<number>;
      };
      controls: {
        type: import('vue').PropType<boolean>;
        default: boolean;
      };
      readonly: {
        type: import('vue').PropType<boolean>;
      };
      disabled: {
        type: import('vue').PropType<boolean>;
      };
      autofocus: {
        type: import('vue').PropType<boolean>;
      };
      keyboard: {
        type: import('vue').PropType<boolean>;
        default: boolean;
      };
      parser: {
        type: import('vue').PropType<
          (
            displayValue: string,
          ) => import('ant-design-vue/lib/input-number/src/utils/MiniDecimal').ValueType
        >;
      };
      formatter: {
        type: import('vue').PropType<
          (
            value: import('ant-design-vue/lib/input-number/src/utils/MiniDecimal').ValueType,
            info: {
              userTyping: boolean;
              input: string;
            },
          ) => string
        >;
      };
      precision: {
        type: import('vue').PropType<number>;
      };
      decimalSeparator: {
        type: import('vue').PropType<string>;
      };
      onInput: {
        type: import('vue').PropType<(text: string) => void>;
      };
      onChange: {
        type: import('vue').PropType<
          (value: import('ant-design-vue/lib/input-number/src/utils/MiniDecimal').ValueType) => void
        >;
      };
      onPressEnter: {
        type: import('vue').PropType<
          import('ant-design-vue/lib/_util/EventInterface').KeyboardEventHandler
        >;
      };
      onStep: {
        type: import('vue').PropType<
          (
            value: import('ant-design-vue/lib/input-number/src/utils/MiniDecimal').ValueType,
            info: {
              offset: import('ant-design-vue/lib/input-number/src/utils/MiniDecimal').ValueType;
              type: 'down' | 'up';
            },
          ) => void
        >;
      };
      onBlur: {
        type: import('vue').PropType<(e: FocusEvent) => void>;
      };
      onFocus: {
        type: import('vue').PropType<(e: FocusEvent) => void>;
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
    > &
    import('vue').ComponentCustomProperties;
  __isFragment?: never;
  __isTeleport?: never;
  __isSuspense?: never;
} & import('vue').ComponentOptionsBase<
  Readonly<
    import('vue').ExtractPropTypes<{
      size: {
        type: import('vue').PropType<import('ant-design-vue/lib/button').ButtonSize>;
      };
      bordered: {
        type: BooleanConstructor;
        default: boolean;
      };
      placeholder: StringConstructor;
      name: StringConstructor;
      id: StringConstructor;
      type: StringConstructor;
      addonBefore: import('vue-types').VueTypeValidableDef<any>;
      addonAfter: import('vue-types').VueTypeValidableDef<any>;
      prefix: import('vue-types').VueTypeValidableDef<any>;
      'onUpdate:value': {
        type: import('vue').PropType<
          (value: import('ant-design-vue/lib/input-number/src/utils/MiniDecimal').ValueType) => void
        >;
      };
      valueModifiers: ObjectConstructor;
      stringMode: {
        type: import('vue').PropType<boolean>;
      };
      defaultValue: {
        type: import('vue').PropType<
          import('ant-design-vue/lib/input-number/src/utils/MiniDecimal').ValueType
        >;
      };
      value: {
        type: import('vue').PropType<
          import('ant-design-vue/lib/input-number/src/utils/MiniDecimal').ValueType
        >;
      };
      prefixCls: {
        type: import('vue').PropType<string>;
      };
      min: {
        type: import('vue').PropType<
          import('ant-design-vue/lib/input-number/src/utils/MiniDecimal').ValueType
        >;
      };
      max: {
        type: import('vue').PropType<
          import('ant-design-vue/lib/input-number/src/utils/MiniDecimal').ValueType
        >;
      };
      step: {
        type: import('vue').PropType<
          import('ant-design-vue/lib/input-number/src/utils/MiniDecimal').ValueType
        >;
        default: number;
      };
      tabindex: {
        type: import('vue').PropType<number>;
      };
      controls: {
        type: import('vue').PropType<boolean>;
        default: boolean;
      };
      readonly: {
        type: import('vue').PropType<boolean>;
      };
      disabled: {
        type: import('vue').PropType<boolean>;
      };
      autofocus: {
        type: import('vue').PropType<boolean>;
      };
      keyboard: {
        type: import('vue').PropType<boolean>;
        default: boolean;
      };
      parser: {
        type: import('vue').PropType<
          (
            displayValue: string,
          ) => import('ant-design-vue/lib/input-number/src/utils/MiniDecimal').ValueType
        >;
      };
      formatter: {
        type: import('vue').PropType<
          (
            value: import('ant-design-vue/lib/input-number/src/utils/MiniDecimal').ValueType,
            info: {
              userTyping: boolean;
              input: string;
            },
          ) => string
        >;
      };
      precision: {
        type: import('vue').PropType<number>;
      };
      decimalSeparator: {
        type: import('vue').PropType<string>;
      };
      onInput: {
        type: import('vue').PropType<(text: string) => void>;
      };
      onChange: {
        type: import('vue').PropType<
          (value: import('ant-design-vue/lib/input-number/src/utils/MiniDecimal').ValueType) => void
        >;
      };
      onPressEnter: {
        type: import('vue').PropType<
          import('ant-design-vue/lib/_util/EventInterface').KeyboardEventHandler
        >;
      };
      onStep: {
        type: import('vue').PropType<
          (
            value: import('ant-design-vue/lib/input-number/src/utils/MiniDecimal').ValueType,
            info: {
              offset: import('ant-design-vue/lib/input-number/src/utils/MiniDecimal').ValueType;
              type: 'down' | 'up';
            },
          ) => void
        >;
      };
      onBlur: {
        type: import('vue').PropType<(e: FocusEvent) => void>;
      };
      onFocus: {
        type: import('vue').PropType<(e: FocusEvent) => void>;
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
    step: import('ant-design-vue/lib/input-number/src/utils/MiniDecimal').ValueType;
    keyboard: boolean;
    bordered: boolean;
    controls: boolean;
  }
> &
  import('vue').VNodeProps &
  import('vue').AllowedComponentProps &
  import('vue').ComponentCustomProps & {
    install: (app: import('vue').App<any>) => import('vue').App<any>;
  };
export default InputNumber;
