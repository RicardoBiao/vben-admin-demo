import type { PropType } from 'vue';
import type { VoidField, Form } from '@formily/core';
import type { Schema, SchemaKey } from '@formily/json-schema';
import type { StepsProps } from 'ant-design-vue/lib/steps';
export interface IFormStep {
  connect: (steps: SchemaStep[], field: VoidField) => void;
  current: number;
  allowNext: boolean;
  allowBack: boolean;
  setCurrent(key: number): void;
  submit: Form['submit'];
  next(): void;
  back(): void;
}
export interface IFormStepProps extends StepsProps {
  formStep?: IFormStep;
}
declare type SchemaStep = {
  name: SchemaKey;
  props: any;
  schema: Schema;
};
export declare const FormStep: {
  new (...args: any[]): {
    $: import('vue').ComponentInternalInstance;
    $data: {};
    $props: Partial<{
      formStep: IFormStep;
    }> &
      Omit<
        Readonly<
          import('vue').ExtractPropTypes<{
            formStep: {
              type: PropType<IFormStep>;
              default(): {
                current: number;
              };
            };
          }>
        > &
          import('vue').VNodeProps &
          import('vue').AllowedComponentProps &
          import('vue').ComponentCustomProps,
        'formStep'
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
          formStep: {
            type: PropType<IFormStep>;
            default(): {
              current: number;
            };
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
        formStep: IFormStep;
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
      formStep: {
        type: PropType<IFormStep>;
        default(): {
          current: number;
        };
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
      formStep: {
        type: PropType<IFormStep>;
        default(): {
          current: number;
        };
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
    formStep: IFormStep;
  }
> &
  import('vue').VNodeProps &
  import('vue').AllowedComponentProps &
  import('vue').ComponentCustomProps & {
    StepPane: import('vue').DefineComponent<
      Partial<
        import('vue').ExtractPropTypes<{
          description: import('vue-types').VueTypeValidableDef<any>;
          icon: import('vue-types').VueTypeValidableDef<any>;
          status: PropType<'error' | 'wait' | 'finish' | 'process'>;
          disabled: {
            type: BooleanConstructor;
            default: any;
          };
          title: import('vue-types').VueTypeValidableDef<any>;
          subTitle: import('vue-types').VueTypeValidableDef<any>;
          onClick: PropType<import('ant-design-vue/lib/_util/EventInterface').MouseEventHandler>;
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
            description: import('vue-types').VueTypeValidableDef<any>;
            icon: import('vue-types').VueTypeValidableDef<any>;
            status: PropType<'error' | 'wait' | 'finish' | 'process'>;
            disabled: {
              type: BooleanConstructor;
              default: any;
            };
            title: import('vue-types').VueTypeValidableDef<any>;
            subTitle: import('vue-types').VueTypeValidableDef<any>;
            onClick: PropType<import('ant-design-vue/lib/_util/EventInterface').MouseEventHandler>;
          }>
        >
      >,
      {
        icon?: any;
        description?: any;
        title?: any;
        subTitle?: any;
      }
    >;
    createFormStep: (defaultCurrent?: number) => IFormStep;
  };
export default FormStep;
