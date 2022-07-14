import type { ArrayField } from '@formily/core';
import type { ButtonProps } from 'ant-design-vue/lib/button';
import type { Schema } from '@formily/json-schema';
import type { Ref } from 'vue';
export declare type KeyMapProps = WeakMap<Record<string, unknown>, string> | string[] | null;
export interface IArrayBaseAdditionProps extends ButtonProps {
  title?: string;
  method?: 'push' | 'unshift';
  defaultValue?: any;
}
export interface IArrayBaseItemProps {
  index: number;
  record: any;
}
export declare type ArrayBaseRemoveProps = ButtonProps & {
  title?: string;
  index?: number;
};
export declare type ArrayBaseMixins = {
  Addition?: typeof ArrayBaseAddition;
  Remove?: typeof ArrayBaseRemove;
  MoveUp?: typeof ArrayBaseMoveUp;
  MoveDown?: typeof ArrayBaseMoveDown;
  SortHandle?: typeof ArrayBaseSortHandle;
  Index?: typeof ArrayBaseIndex;
  useArray?: typeof useArray;
  useIndex?: typeof useIndex;
  useRecord?: typeof useRecord;
};
export interface IArrayBaseProps {
  disabled?: boolean;
  onAdd?: (index: number) => void;
  onRemove?: (index: number) => void;
  onMoveDown?: (index: number) => void;
  onMoveUp?: (index: number) => void;
  keyMap?: KeyMapProps;
}
export interface IArrayBaseContext {
  props: IArrayBaseProps;
  field: Ref<ArrayField>;
  schema: Ref<Schema>;
  attrs: {
    [key in string]?: any;
  };
  keyMap?: KeyMapProps;
}
declare const useArray: () => IArrayBaseContext;
declare const useIndex: (index?: number) => Ref<number>;
declare const useRecord: (record?: number) => Ref<any>;
declare const ArrayBaseSortHandle: import('vue').DefineComponent<
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
declare const ArrayBaseIndex: import('vue').DefineComponent<
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
declare const ArrayBaseAddition: import('vue').DefineComponent<
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
declare const ArrayBaseRemove: import('vue').DefineComponent<
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
declare const ArrayBaseMoveDown: import('vue').DefineComponent<
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
declare const ArrayBaseMoveUp: import('vue').DefineComponent<
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
export declare const ArrayBase: {
  new (...args: any[]): {
    $: import('vue').ComponentInternalInstance;
    $data: {};
    $props: Partial<{
      readonly disabled?: any;
      readonly keyMap?: any;
    }> &
      Omit<
        Readonly<
          import('vue').ExtractPropTypes<
            Readonly<{
              disabled?: any;
              keyMap?: any;
            }>
          >
        > &
          import('vue').VNodeProps &
          import('vue').AllowedComponentProps &
          import('vue').ComponentCustomProps,
        'disabled' | 'keyMap'
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
        import('vue').ExtractPropTypes<
          Readonly<{
            disabled?: any;
            keyMap?: any;
          }>
        >
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
        readonly disabled?: any;
        readonly keyMap?: any;
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
    import('vue').ExtractPropTypes<
      Readonly<{
        disabled?: any;
        keyMap?: any;
      }>
    >
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
    import('vue').ExtractPropTypes<
      Readonly<{
        disabled?: any;
        keyMap?: any;
      }>
    >
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
    readonly disabled?: any;
    readonly keyMap?: any;
  }
> &
  import('vue').VNodeProps &
  import('vue').AllowedComponentProps &
  import('vue').ComponentCustomProps & {
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
    Item: import('vue').DefineComponent<
      Readonly<{
        index?: any;
        record?: any;
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
            record?: any;
          }>
        >
      >,
      {
        readonly index?: any;
        readonly record?: any;
      }
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
    useArray: () => IArrayBaseContext;
    useIndex: (index?: number) => Ref<number>;
    useKey: (schema: Schema) => {
      keyMap: KeyMapProps;
      getKey: (record: any, index?: number) => string;
    };
    useRecord: (record?: number) => Ref<any>;
  };
export default ArrayBase;
