import type { IFormFeedback } from '@formily/core';
import type { ButtonProps } from 'ant-design-vue/lib/button';
export interface ISubmitProps extends ButtonProps {
  onClick?: (e: MouseEvent) => any;
  onSubmit?: (values: any) => any;
  onSubmitSuccess?: (payload: any) => void;
  onSubmitFailed?: (feedbacks: IFormFeedback[]) => void;
}
export declare const Submit: import('vue').DefineComponent<
  Readonly<{
    onClick?: any;
    onSubmit?: any;
    onSubmitSuccess?: any;
    onSubmitFailed?: any;
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
        onClick?: any;
        onSubmit?: any;
        onSubmitSuccess?: any;
        onSubmitFailed?: any;
      }>
    >
  >,
  {
    readonly onClick?: any;
    readonly onSubmit?: any;
    readonly onSubmitSuccess?: any;
    readonly onSubmitFailed?: any;
  }
>;
export default Submit;
