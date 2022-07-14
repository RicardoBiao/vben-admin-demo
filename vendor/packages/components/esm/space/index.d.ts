import type { VNode } from 'vue';
export declare const Space: import('vue').DefineComponent<
  Readonly<{
    size?: any;
    direction?: any;
    align?: any;
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
        size?: any;
        direction?: any;
        align?: any;
      }>
    >
  >,
  {
    readonly size?: any;
    readonly direction?: any;
    readonly align?: any;
  }
>;
export default Space;
