import type { CascaderProps, CascaderOptionType } from 'ant-design-vue/lib/cascader';
import type { TimePickerProps } from 'ant-design-vue/lib/time-picker';
export declare const usePlaceholder: (value?: any) => import('vue').ComputedRef<any>;
export declare type PreviewCascaderProps = CascaderProps & {
  options: CascaderOptionType[];
};
export declare const PreviewText: {
  new (...args: any[]): {
    $: import('vue').ComponentInternalInstance;
    $data: {};
    $props: Partial<
      | {}
      | {
          [x: string]: any;
        }
    > &
      Omit<
        Readonly<any> &
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
      Readonly<any>,
      {},
      {},
      {},
      {},
      import('vue').ComponentOptionsMixin,
      import('vue').ComponentOptionsMixin,
      import('vue').EmitsOptions,
      string,
      | {}
      | {
          [x: string]: any;
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
  } & Readonly<any> &
    import('vue').ShallowUnwrapRef<{}> & {} & import('vue').ComponentCustomProperties;
  __isFragment?: never;
  __isTeleport?: never;
  __isSuspense?: never;
} & import('vue').ComponentOptionsBase<
  Readonly<any>,
  {},
  {},
  {},
  {},
  import('vue').ComponentOptionsMixin,
  import('vue').ComponentOptionsMixin,
  import('vue').EmitsOptions,
  string,
  | {}
  | {
      [x: string]: any;
    }
> &
  import('vue').VNodeProps &
  import('vue').AllowedComponentProps &
  import('vue').ComponentCustomProps & {
    Input: import('vue').DefineComponent<
      Partial<
        import('vue').ExtractPropTypes<{
          id: StringConstructor;
          prefixCls: StringConstructor;
          inputPrefixCls: StringConstructor;
          defaultValue: import('vue-types').VueTypeDef<string | number>;
          value: {
            type: import('vue').PropType<string | number>;
            default: any;
          };
          placeholder: {
            type: import('vue').PropType<string | number>;
          };
          autocomplete: StringConstructor;
          type: {
            type: import('vue').PropType<
              import('ant-design-vue/lib/_util/type').LiteralUnion<
                | 'number'
                | 'text'
                | 'search'
                | 'hidden'
                | 'time'
                | 'date'
                | 'week'
                | 'month'
                | 'submit'
                | 'button'
                | 'image'
                | 'reset'
                | 'checkbox'
                | 'radio'
                | 'color'
                | 'range'
                | 'tel'
                | 'url'
                | 'email'
                | 'datetime-local'
                | 'file'
                | 'password',
                string
              >
            >;
            default: string;
          };
          name: StringConstructor;
          size: {
            type: import('vue').PropType<import('ant-design-vue/lib/button').ButtonSize>;
          };
          disabled: {
            type: BooleanConstructor;
            default: any;
          };
          readonly: {
            type: BooleanConstructor;
            default: any;
          };
          addonBefore: import('vue-types').VueTypeValidableDef<any>;
          addonAfter: import('vue-types').VueTypeValidableDef<any>;
          prefix: import('vue-types').VueTypeValidableDef<any>;
          suffix: import('vue-types').VueTypeValidableDef<any>;
          autofocus: {
            type: BooleanConstructor;
            default: any;
          };
          allowClear: {
            type: BooleanConstructor;
            default: any;
          };
          lazy: {
            type: BooleanConstructor;
            default: boolean;
          };
          maxlength: NumberConstructor;
          loading: {
            type: BooleanConstructor;
            default: any;
          };
          bordered: {
            type: BooleanConstructor;
            default: any;
          };
          showCount: {
            type: import('vue').PropType<
              boolean | import('ant-design-vue/lib/input/inputProps').ShowCountProps
            >;
          };
          htmlSize: NumberConstructor;
          onPressEnter: import('vue').PropType<
            import('ant-design-vue/lib/_util/EventInterface').KeyboardEventHandler
          >;
          onKeydown: import('vue').PropType<
            import('ant-design-vue/lib/_util/EventInterface').KeyboardEventHandler
          >;
          onKeyup: import('vue').PropType<
            import('ant-design-vue/lib/_util/EventInterface').KeyboardEventHandler
          >;
          onFocus: import('vue').PropType<
            import('ant-design-vue/lib/_util/EventInterface').FocusEventHandler
          >;
          onBlur: import('vue').PropType<
            import('ant-design-vue/lib/_util/EventInterface').FocusEventHandler
          >;
          onChange: import('vue').PropType<
            import('ant-design-vue/lib/_util/EventInterface').ChangeEventHandler
          >;
          onInput: import('vue').PropType<
            import('ant-design-vue/lib/_util/EventInterface').ChangeEventHandler
          >;
          'onUpdate:value': import('vue').PropType<(val: string) => void>;
          valueModifiers: ObjectConstructor;
          hidden: BooleanConstructor;
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
            id: StringConstructor;
            prefixCls: StringConstructor;
            inputPrefixCls: StringConstructor;
            defaultValue: import('vue-types').VueTypeDef<string | number>;
            value: {
              type: import('vue').PropType<string | number>;
              default: any;
            };
            placeholder: {
              type: import('vue').PropType<string | number>;
            };
            autocomplete: StringConstructor;
            type: {
              type: import('vue').PropType<
                import('ant-design-vue/lib/_util/type').LiteralUnion<
                  | 'number'
                  | 'text'
                  | 'search'
                  | 'hidden'
                  | 'time'
                  | 'date'
                  | 'week'
                  | 'month'
                  | 'submit'
                  | 'button'
                  | 'image'
                  | 'reset'
                  | 'checkbox'
                  | 'radio'
                  | 'color'
                  | 'range'
                  | 'tel'
                  | 'url'
                  | 'email'
                  | 'datetime-local'
                  | 'file'
                  | 'password',
                  string
                >
              >;
              default: string;
            };
            name: StringConstructor;
            size: {
              type: import('vue').PropType<import('ant-design-vue/lib/button').ButtonSize>;
            };
            disabled: {
              type: BooleanConstructor;
              default: any;
            };
            readonly: {
              type: BooleanConstructor;
              default: any;
            };
            addonBefore: import('vue-types').VueTypeValidableDef<any>;
            addonAfter: import('vue-types').VueTypeValidableDef<any>;
            prefix: import('vue-types').VueTypeValidableDef<any>;
            suffix: import('vue-types').VueTypeValidableDef<any>;
            autofocus: {
              type: BooleanConstructor;
              default: any;
            };
            allowClear: {
              type: BooleanConstructor;
              default: any;
            };
            lazy: {
              type: BooleanConstructor;
              default: boolean;
            };
            maxlength: NumberConstructor;
            loading: {
              type: BooleanConstructor;
              default: any;
            };
            bordered: {
              type: BooleanConstructor;
              default: any;
            };
            showCount: {
              type: import('vue').PropType<
                boolean | import('ant-design-vue/lib/input/inputProps').ShowCountProps
              >;
            };
            htmlSize: NumberConstructor;
            onPressEnter: import('vue').PropType<
              import('ant-design-vue/lib/_util/EventInterface').KeyboardEventHandler
            >;
            onKeydown: import('vue').PropType<
              import('ant-design-vue/lib/_util/EventInterface').KeyboardEventHandler
            >;
            onKeyup: import('vue').PropType<
              import('ant-design-vue/lib/_util/EventInterface').KeyboardEventHandler
            >;
            onFocus: import('vue').PropType<
              import('ant-design-vue/lib/_util/EventInterface').FocusEventHandler
            >;
            onBlur: import('vue').PropType<
              import('ant-design-vue/lib/_util/EventInterface').FocusEventHandler
            >;
            onChange: import('vue').PropType<
              import('ant-design-vue/lib/_util/EventInterface').ChangeEventHandler
            >;
            onInput: import('vue').PropType<
              import('ant-design-vue/lib/_util/EventInterface').ChangeEventHandler
            >;
            'onUpdate:value': import('vue').PropType<(val: string) => void>;
            valueModifiers: ObjectConstructor;
            hidden: BooleanConstructor;
          }>
        >
      >,
      {
        addonBefore?: any;
        addonAfter?: any;
        prefix?: any;
        suffix?: any;
      }
    >;
    Select: import('vue').DefineComponent<
      Readonly<{
        [x: string]: any;
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
            [x: string]: any;
          }>
        >
      >,
      {
        [x: string]: any;
      }
    >;
    Cascader: import('vue').DefineComponent<
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
    DatePicker: import('vue').DefineComponent<
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
    DateRangePicker: import('vue').DefineComponent<
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
    TimePicker: import('vue').DefineComponent<
      TimePickerProps,
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
      Readonly<TimePickerProps>,
      {}
    >;
    Placeholder: import('vue').DefineComponent<
      {},
      {},
      {},
      import('vue').ComputedOptions,
      import('vue').MethodOptions,
      import('vue').ComponentOptionsMixin,
      import('vue').ComponentOptionsMixin,
      {},
      string,
      import('vue').VNodeProps &
        import('vue').AllowedComponentProps &
        import('vue').ComponentCustomProps,
      Readonly<import('vue').ExtractPropTypes<{}>>,
      {}
    >;
    usePlaceholder: (value?: any) => import('vue').ComputedRef<any>;
  };
export default PreviewText;
