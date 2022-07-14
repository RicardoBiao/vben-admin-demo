import type { Component } from 'vue';
export declare type FormItemProps = {
  className?: string;
  required?: boolean;
  label?: string | Component;
  colon?: boolean;
  tooltip?: string | Component;
  layout?: 'vertical' | 'horizontal' | 'inline';
  labelStyle?: Record<string, any>;
  labelAlign?: 'left' | 'right';
  labelWrap?: boolean;
  labelWidth?: number;
  wrapperWidth?: number;
  labelCol?: number;
  wrapperCol?: number;
  wrapperAlign?: 'left' | 'right';
  wrapperWrap?: boolean;
  wrapperStyle?: Record<string, any>;
  fullness?: boolean;
  addonBefore?: string | Component;
  addonAfter?: string | Component;
  size?: 'small' | 'default' | 'large';
  extra?: string;
  feedbackText?: string | Component;
  feedbackLayout?: 'loose' | 'terse' | 'popover' | 'none' | (string & unknown);
  feedbackStatus?: 'error' | 'warning' | 'success' | 'pending' | (string & unknown);
  tooltipLayout?: 'icon' | 'text';
  feedbackIcon?: string | Component;
  asterisk?: boolean;
  gridSpan?: number;
  bordered?: boolean;
  inset?: boolean;
};
export declare const FormBaseItem: import('vue').DefineComponent<
  {
    className: {};
    required: {};
    label: {};
    colon: {};
    layout: {};
    tooltip: {};
    labelStyle: {};
    labelAlign: {};
    labelWrap: {};
    labelWidth: {};
    wrapperWidth: {};
    labelCol: {};
    wrapperCol: {};
    wrapperAlign: {};
    wrapperWrap: {};
    wrapperStyle: {};
    fullness: {};
    addonBefore: {};
    addonAfter: {};
    size: {};
    extra: {};
    feedbackText: {};
    feedbackLayout: {};
    tooltipLayout: {};
    feedbackStatus: {};
    feedbackIcon: {};
    asterisk: {};
    gridSpan: {};
    bordered: {
      default: boolean;
    };
    inset: {
      default: boolean;
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
      className: {};
      required: {};
      label: {};
      colon: {};
      layout: {};
      tooltip: {};
      labelStyle: {};
      labelAlign: {};
      labelWrap: {};
      labelWidth: {};
      wrapperWidth: {};
      labelCol: {};
      wrapperCol: {};
      wrapperAlign: {};
      wrapperWrap: {};
      wrapperStyle: {};
      fullness: {};
      addonBefore: {};
      addonAfter: {};
      size: {};
      extra: {};
      feedbackText: {};
      feedbackLayout: {};
      tooltipLayout: {};
      feedbackStatus: {};
      feedbackIcon: {};
      asterisk: {};
      gridSpan: {};
      bordered: {
        default: boolean;
      };
      inset: {
        default: boolean;
      };
    }>
  >,
  {
    bordered: boolean;
    inset: boolean;
  }
>;
export declare const FormItem: {
  new (...args: any[]): {
    $: import('vue').ComponentInternalInstance;
    $data: {};
    $props: Partial<{
      bordered: boolean;
      inset: boolean;
    }> &
      Omit<
        Readonly<
          import('vue').ExtractPropTypes<{
            className: {};
            required: {};
            label: {};
            colon: {};
            layout: {};
            tooltip: {};
            labelStyle: {};
            labelAlign: {};
            labelWrap: {};
            labelWidth: {};
            wrapperWidth: {};
            labelCol: {};
            wrapperCol: {};
            wrapperAlign: {};
            wrapperWrap: {};
            wrapperStyle: {};
            fullness: {};
            addonBefore: {};
            addonAfter: {};
            size: {};
            extra: {};
            feedbackText: {};
            feedbackLayout: {};
            tooltipLayout: {};
            feedbackStatus: {};
            feedbackIcon: {};
            asterisk: {};
            gridSpan: {};
            bordered: {
              default: boolean;
            };
            inset: {
              default: boolean;
            };
          }>
        > &
          import('vue').VNodeProps &
          import('vue').AllowedComponentProps &
          import('vue').ComponentCustomProps,
        'bordered' | 'inset'
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
          className: {};
          required: {};
          label: {};
          colon: {};
          layout: {};
          tooltip: {};
          labelStyle: {};
          labelAlign: {};
          labelWrap: {};
          labelWidth: {};
          wrapperWidth: {};
          labelCol: {};
          wrapperCol: {};
          wrapperAlign: {};
          wrapperWrap: {};
          wrapperStyle: {};
          fullness: {};
          addonBefore: {};
          addonAfter: {};
          size: {};
          extra: {};
          feedbackText: {};
          feedbackLayout: {};
          tooltipLayout: {};
          feedbackStatus: {};
          feedbackIcon: {};
          asterisk: {};
          gridSpan: {};
          bordered: {
            default: boolean;
          };
          inset: {
            default: boolean;
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
        bordered: boolean;
        inset: boolean;
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
      className: {};
      required: {};
      label: {};
      colon: {};
      layout: {};
      tooltip: {};
      labelStyle: {};
      labelAlign: {};
      labelWrap: {};
      labelWidth: {};
      wrapperWidth: {};
      labelCol: {};
      wrapperCol: {};
      wrapperAlign: {};
      wrapperWrap: {};
      wrapperStyle: {};
      fullness: {};
      addonBefore: {};
      addonAfter: {};
      size: {};
      extra: {};
      feedbackText: {};
      feedbackLayout: {};
      tooltipLayout: {};
      feedbackStatus: {};
      feedbackIcon: {};
      asterisk: {};
      gridSpan: {};
      bordered: {
        default: boolean;
      };
      inset: {
        default: boolean;
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
      className: {};
      required: {};
      label: {};
      colon: {};
      layout: {};
      tooltip: {};
      labelStyle: {};
      labelAlign: {};
      labelWrap: {};
      labelWidth: {};
      wrapperWidth: {};
      labelCol: {};
      wrapperCol: {};
      wrapperAlign: {};
      wrapperWrap: {};
      wrapperStyle: {};
      fullness: {};
      addonBefore: {};
      addonAfter: {};
      size: {};
      extra: {};
      feedbackText: {};
      feedbackLayout: {};
      tooltipLayout: {};
      feedbackStatus: {};
      feedbackIcon: {};
      asterisk: {};
      gridSpan: {};
      bordered: {
        default: boolean;
      };
      inset: {
        default: boolean;
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
    bordered: boolean;
    inset: boolean;
  }
> &
  import('vue').VNodeProps &
  import('vue').AllowedComponentProps &
  import('vue').ComponentCustomProps & {
    BaseItem: import('vue').DefineComponent<
      {
        className: {};
        required: {};
        label: {};
        colon: {};
        layout: {};
        tooltip: {};
        labelStyle: {};
        labelAlign: {};
        labelWrap: {};
        labelWidth: {};
        wrapperWidth: {};
        labelCol: {};
        wrapperCol: {};
        wrapperAlign: {};
        wrapperWrap: {};
        wrapperStyle: {};
        fullness: {};
        addonBefore: {};
        addonAfter: {};
        size: {};
        extra: {};
        feedbackText: {};
        feedbackLayout: {};
        tooltipLayout: {};
        feedbackStatus: {};
        feedbackIcon: {};
        asterisk: {};
        gridSpan: {};
        bordered: {
          default: boolean;
        };
        inset: {
          default: boolean;
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
          className: {};
          required: {};
          label: {};
          colon: {};
          layout: {};
          tooltip: {};
          labelStyle: {};
          labelAlign: {};
          labelWrap: {};
          labelWidth: {};
          wrapperWidth: {};
          labelCol: {};
          wrapperCol: {};
          wrapperAlign: {};
          wrapperWrap: {};
          wrapperStyle: {};
          fullness: {};
          addonBefore: {};
          addonAfter: {};
          size: {};
          extra: {};
          feedbackText: {};
          feedbackLayout: {};
          tooltipLayout: {};
          feedbackStatus: {};
          feedbackIcon: {};
          asterisk: {};
          gridSpan: {};
          bordered: {
            default: boolean;
          };
          inset: {
            default: boolean;
          };
        }>
      >,
      {
        bordered: boolean;
        inset: boolean;
      }
    >;
  };
export default FormItem;
