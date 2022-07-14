export declare const Checkbox: ({
  new (...args: any[]): {
    $: import('vue').ComponentInternalInstance;
    $data: {};
    $props: Partial<{
      disabled: boolean;
      type: string;
      defaultChecked: boolean;
      checked: boolean;
      autofocus: boolean;
      indeterminate: boolean;
      isGroup: boolean;
      skipGroup: boolean;
    }> &
      Omit<
        Readonly<
          import('vue').ExtractPropTypes<{
            indeterminate: {
              type: BooleanConstructor;
              default: boolean;
            };
            prefixCls: StringConstructor;
            defaultChecked: {
              type: BooleanConstructor;
              default: any;
            };
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
            type: {
              type: StringConstructor;
              default: string;
            };
            autofocus: {
              type: BooleanConstructor;
              default: any;
            };
            onChange: import('vue').PropType<
              (e: import('ant-design-vue/lib/checkbox/interface').CheckboxChangeEvent) => void
            >;
            'onUpdate:checked': import('vue').PropType<(checked: boolean) => void>;
            onClick: import('vue').PropType<
              import('ant-design-vue/lib/_util/EventInterface').MouseEventHandler
            >;
            skipGroup: {
              type: BooleanConstructor;
              default: boolean;
            };
          }>
        > &
          import('vue').VNodeProps &
          import('vue').AllowedComponentProps &
          import('vue').ComponentCustomProps,
        | 'type'
        | 'disabled'
        | 'autofocus'
        | 'checked'
        | 'isGroup'
        | 'indeterminate'
        | 'defaultChecked'
        | 'skipGroup'
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
          indeterminate: {
            type: BooleanConstructor;
            default: boolean;
          };
          prefixCls: StringConstructor;
          defaultChecked: {
            type: BooleanConstructor;
            default: any;
          };
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
          type: {
            type: StringConstructor;
            default: string;
          };
          autofocus: {
            type: BooleanConstructor;
            default: any;
          };
          onChange: import('vue').PropType<
            (e: import('ant-design-vue/lib/checkbox/interface').CheckboxChangeEvent) => void
          >;
          'onUpdate:checked': import('vue').PropType<(checked: boolean) => void>;
          onClick: import('vue').PropType<
            import('ant-design-vue/lib/_util/EventInterface').MouseEventHandler
          >;
          skipGroup: {
            type: BooleanConstructor;
            default: boolean;
          };
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
        type: string;
        defaultChecked: boolean;
        checked: boolean;
        autofocus: boolean;
        indeterminate: boolean;
        isGroup: boolean;
        skipGroup: boolean;
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
      indeterminate: {
        type: BooleanConstructor;
        default: boolean;
      };
      prefixCls: StringConstructor;
      defaultChecked: {
        type: BooleanConstructor;
        default: any;
      };
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
      type: {
        type: StringConstructor;
        default: string;
      };
      autofocus: {
        type: BooleanConstructor;
        default: any;
      };
      onChange: import('vue').PropType<
        (e: import('ant-design-vue/lib/checkbox/interface').CheckboxChangeEvent) => void
      >;
      'onUpdate:checked': import('vue').PropType<(checked: boolean) => void>;
      onClick: import('vue').PropType<
        import('ant-design-vue/lib/_util/EventInterface').MouseEventHandler
      >;
      skipGroup: {
        type: BooleanConstructor;
        default: boolean;
      };
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
      indeterminate: {
        type: BooleanConstructor;
        default: boolean;
      };
      prefixCls: StringConstructor;
      defaultChecked: {
        type: BooleanConstructor;
        default: any;
      };
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
      type: {
        type: StringConstructor;
        default: string;
      };
      autofocus: {
        type: BooleanConstructor;
        default: any;
      };
      onChange: import('vue').PropType<
        (e: import('ant-design-vue/lib/checkbox/interface').CheckboxChangeEvent) => void
      >;
      'onUpdate:checked': import('vue').PropType<(checked: boolean) => void>;
      onClick: import('vue').PropType<
        import('ant-design-vue/lib/_util/EventInterface').MouseEventHandler
      >;
      skipGroup: {
        type: BooleanConstructor;
        default: boolean;
      };
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
    type: string;
    defaultChecked: boolean;
    checked: boolean;
    autofocus: boolean;
    indeterminate: boolean;
    isGroup: boolean;
    skipGroup: boolean;
  }
> &
  import('vue').VNodeProps &
  import('vue').AllowedComponentProps &
  import('vue').ComponentCustomProps &
  import('@vue/runtime-core').Plugin & {
    readonly Group: import('vue').DefineComponent<
      {
        defaultValue: {
          type: import('vue').PropType<
            import('ant-design-vue/lib/checkbox/interface').CheckboxValueType[]
          >;
        };
        value: {
          type: import('vue').PropType<
            import('ant-design-vue/lib/checkbox/interface').CheckboxValueType[]
          >;
        };
        onChange: {
          type: import('vue').PropType<
            (
              checkedValue: import('ant-design-vue/lib/checkbox/interface').CheckboxValueType[],
            ) => void
          >;
        };
        'onUpdate:value': {
          type: import('vue').PropType<
            (
              checkedValue: import('ant-design-vue/lib/checkbox/interface').CheckboxValueType[],
            ) => void
          >;
        };
        name: StringConstructor;
        prefixCls: StringConstructor;
        options: {
          type: import('vue').PropType<
            (string | number | import('ant-design-vue').CheckboxOptionType)[]
          >;
          default: () => (string | number | import('ant-design-vue').CheckboxOptionType)[];
        };
        disabled: BooleanConstructor;
        id: StringConstructor;
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
          defaultValue: {
            type: import('vue').PropType<
              import('ant-design-vue/lib/checkbox/interface').CheckboxValueType[]
            >;
          };
          value: {
            type: import('vue').PropType<
              import('ant-design-vue/lib/checkbox/interface').CheckboxValueType[]
            >;
          };
          onChange: {
            type: import('vue').PropType<
              (
                checkedValue: import('ant-design-vue/lib/checkbox/interface').CheckboxValueType[],
              ) => void
            >;
          };
          'onUpdate:value': {
            type: import('vue').PropType<
              (
                checkedValue: import('ant-design-vue/lib/checkbox/interface').CheckboxValueType[],
              ) => void
            >;
          };
          name: StringConstructor;
          prefixCls: StringConstructor;
          options: {
            type: import('vue').PropType<
              (string | number | import('ant-design-vue').CheckboxOptionType)[]
            >;
            default: () => (string | number | import('ant-design-vue').CheckboxOptionType)[];
          };
          disabled: BooleanConstructor;
          id: StringConstructor;
        }>
      >,
      {
        disabled: boolean;
        options: (string | number | import('ant-design-vue').CheckboxOptionType)[];
      }
    >;
  }) & {
  Group: import('vue').DefineComponent<
    {
      defaultValue: {
        type: import('vue').PropType<
          import('ant-design-vue/lib/checkbox/interface').CheckboxValueType[]
        >;
      };
      value: {
        type: import('vue').PropType<
          import('ant-design-vue/lib/checkbox/interface').CheckboxValueType[]
        >;
      };
      onChange: {
        type: import('vue').PropType<
          (
            checkedValue: import('ant-design-vue/lib/checkbox/interface').CheckboxValueType[],
          ) => void
        >;
      };
      'onUpdate:value': {
        type: import('vue').PropType<
          (
            checkedValue: import('ant-design-vue/lib/checkbox/interface').CheckboxValueType[],
          ) => void
        >;
      };
      name: StringConstructor;
      prefixCls: StringConstructor;
      options: {
        type: import('vue').PropType<
          (string | number | import('ant-design-vue').CheckboxOptionType)[]
        >;
        default: () => (string | number | import('ant-design-vue').CheckboxOptionType)[];
      };
      disabled: BooleanConstructor;
      id: StringConstructor;
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
        defaultValue: {
          type: import('vue').PropType<
            import('ant-design-vue/lib/checkbox/interface').CheckboxValueType[]
          >;
        };
        value: {
          type: import('vue').PropType<
            import('ant-design-vue/lib/checkbox/interface').CheckboxValueType[]
          >;
        };
        onChange: {
          type: import('vue').PropType<
            (
              checkedValue: import('ant-design-vue/lib/checkbox/interface').CheckboxValueType[],
            ) => void
          >;
        };
        'onUpdate:value': {
          type: import('vue').PropType<
            (
              checkedValue: import('ant-design-vue/lib/checkbox/interface').CheckboxValueType[],
            ) => void
          >;
        };
        name: StringConstructor;
        prefixCls: StringConstructor;
        options: {
          type: import('vue').PropType<
            (string | number | import('ant-design-vue').CheckboxOptionType)[]
          >;
          default: () => (string | number | import('ant-design-vue').CheckboxOptionType)[];
        };
        disabled: BooleanConstructor;
        id: StringConstructor;
      }>
    >,
    {
      disabled: boolean;
      options: (string | number | import('ant-design-vue').CheckboxOptionType)[];
    }
  >;
};
export default Checkbox;
