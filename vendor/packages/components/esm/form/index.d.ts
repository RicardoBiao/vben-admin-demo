import type { Form as FormType, IFormFeedback } from '@formily/core';
import type { FormLayoutProps } from '../form-layout';
import type { Component, VNode, DefineComponent } from 'vue';
export interface FormProps extends FormLayoutProps {
  form?: FormType;
  component?: Component;
  previewTextPlaceholder: string | (() => VNode);
  onAutoSubmit?: (values: any) => any;
  onAutoSubmitFailed?: (feedbacks: IFormFeedback[]) => void;
}
export declare const Form: DefineComponent<
  Readonly<{
    form?: any;
    component?: any;
    previewTextPlaceholder?: any;
    onAutoSubmit?: any;
    onAutoSubmitFailed?: any;
  }>,
  () => VNode<
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
        form?: any;
        component?: any;
        previewTextPlaceholder?: any;
        onAutoSubmit?: any;
        onAutoSubmitFailed?: any;
      }>
    >
  >,
  {
    readonly form?: any;
    readonly component?: any;
    readonly previewTextPlaceholder?: any;
    readonly onAutoSubmit?: any;
    readonly onAutoSubmitFailed?: any;
  }
>;
export default Form;
