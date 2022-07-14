import type { IFieldResetOptions } from '@formily/core';
import type { ButtonProps as AntButtonProps } from 'ant-design-vue/lib/button';
export declare type ResetProps = IFieldResetOptions & AntButtonProps;
export declare const Reset: import('vue').DefineComponent<
  {
    forceClear: {
      type: BooleanConstructor;
      default: boolean;
    };
    validate: {
      type: BooleanConstructor;
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
      forceClear: {
        type: BooleanConstructor;
        default: boolean;
      };
      validate: {
        type: BooleanConstructor;
        default: boolean;
      };
    }>
  >,
  {
    validate: boolean;
    forceClear: boolean;
  }
>;
export default Reset;
