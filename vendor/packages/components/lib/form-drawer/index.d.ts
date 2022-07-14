import type { DrawerProps } from 'ant-design-vue/lib/drawer';
import type { IMiddleware } from '@formily/shared';
import type { Form, IFormProps } from '@formily/core';
import type { Component, VNode } from 'vue';
declare type FormDrawerRenderer = VNode | ((form: Form) => VNode);
declare type DrawerTitle = string | number | Component | VNode | (() => VNode);
export interface IFormDrawer {
  forOpen(middleware: IMiddleware<IFormProps>): IFormDrawer;
  forConfirm(middleware: IMiddleware<Form>): IFormDrawer;
  forCancel(middleware: IMiddleware<Form>): IFormDrawer;
  open(props?: IFormProps): Promise<any>;
  close(): void;
}
export interface IDrawerProps extends DrawerProps {
  onOk?: (event?: MouseEvent) => void | boolean;
  onClose?: (event?: MouseEvent) => void | boolean;
  loadingText?: string;
}
export declare function FormDrawer(
  title: IDrawerProps,
  id: string,
  renderer: FormDrawerRenderer,
): IFormDrawer;
export declare function FormDrawer(title: IDrawerProps, renderer: FormDrawerRenderer): IFormDrawer;
export declare function FormDrawer(
  title: DrawerTitle,
  id: string,
  renderer: FormDrawerRenderer,
): IFormDrawer;
export declare function FormDrawer(title: DrawerTitle, renderer: FormDrawerRenderer): IFormDrawer;
export declare namespace FormDrawer {
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
export default FormDrawer;
