import type { ModalProps } from 'ant-design-vue/lib/modal';
import type { IMiddleware } from '@formily/shared';
import type { Form, IFormProps } from '@formily/core';
import type { VNode, Component } from 'vue';
declare type FormDialogRenderer = VNode | ((form: Form) => VNode);
declare type ModalTitle = string | number | Component | VNode | (() => VNode);
export interface IFormDialog {
  forOpen(middleware: IMiddleware<IFormProps>): IFormDialog;
  forConfirm(middleware: IMiddleware<Form>): IFormDialog;
  forCancel(middleware: IMiddleware<Form>): IFormDialog;
  open(props?: IFormProps): Promise<any>;
  close(): void;
}
export interface IModalProps extends ModalProps {
  onOk?: (event?: MouseEvent) => void | boolean;
  onCancel?: (event?: MouseEvent) => void | boolean;
  loadingText?: string;
}
export declare function FormDialog(
  title: IModalProps,
  id: string,
  renderer: FormDialogRenderer,
): IFormDialog;
export declare function FormDialog(title: IModalProps, renderer: FormDialogRenderer): IFormDialog;
export declare function FormDialog(
  title: ModalTitle,
  id: string,
  renderer: FormDialogRenderer,
): IFormDialog;
export declare function FormDialog(title: ModalTitle, renderer: FormDialogRenderer): IFormDialog;
export declare namespace FormDialog {
  var Footer: import('vue').DefineComponent<
    {},
    () => VNode<
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
  var Portal: import('vue').DefineComponent<
    {
      id: {
        type: (SymbolConstructor | StringConstructor)[];
        default: string | symbol;
      };
    },
    void,
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
        id: {
          type: (SymbolConstructor | StringConstructor)[];
          default: string | symbol;
        };
      }>
    >,
    {
      id: string | symbol;
    }
  >;
}
export default FormDialog;
