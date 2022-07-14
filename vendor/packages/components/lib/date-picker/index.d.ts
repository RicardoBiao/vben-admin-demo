export declare const _DatePicker: {
  new (...args: any[]): {
    $: import('vue').ComponentInternalInstance;
    $data: {};
    $props: Partial<{
      open: boolean;
      disabled: boolean;
      autofocus: boolean;
      defaultOpen: boolean;
      allowClear: boolean;
      bordered: boolean;
      showTime: any;
      showNow: boolean;
      showToday: boolean;
      inputReadOnly: boolean;
    }> &
      Omit<
        Readonly<
          import('vue').ExtractPropTypes<{
            defaultPickerValue: {
              type: import('vue').PropType<string | import('dayjs').Dayjs>;
            };
            defaultValue: {
              type: import('vue').PropType<string | import('dayjs').Dayjs>;
            };
            value: {
              type: import('vue').PropType<string | import('dayjs').Dayjs>;
            };
            disabledTime: {
              type: import('vue').PropType<
                import('ant-design-vue/lib/vc-picker/interface').DisabledTime<import('dayjs').Dayjs>
              >;
            };
            format: {
              type: import('vue').PropType<
                | string
                | import('ant-design-vue/lib/vc-picker/interface').CustomFormat<
                    import('dayjs').Dayjs
                  >
                | (
                    | string
                    | import('ant-design-vue/lib/vc-picker/interface').CustomFormat<
                        import('dayjs').Dayjs
                      >
                  )[]
              >;
            };
            renderExtraFooter: {
              type: import('vue').PropType<
                (
                  mode: import('ant-design-vue/lib/vc-picker/interface').PanelMode,
                ) => import('ant-design-vue/lib/_util/type').VueNode
              >;
            };
            showNow: {
              type: BooleanConstructor;
              default: any;
            };
            monthCellRender: {
              type: import('vue').PropType<
                import('ant-design-vue/lib/vc-picker/panels/MonthPanel/MonthBody').MonthCellRender<
                  import('dayjs').Dayjs
                >
              >;
            };
            monthCellContentRender: {
              type: import('vue').PropType<
                import('ant-design-vue/lib/vc-picker/panels/MonthPanel/MonthBody').MonthCellRender<
                  import('dayjs').Dayjs
                >
              >;
            };
            id: StringConstructor;
            dropdownClassName: StringConstructor;
            dropdownAlign: {
              type: import('vue').PropType<
                import('ant-design-vue/lib/vc-align/interface').AlignType
              >;
            };
            popupStyle: {
              type: import('vue').PropType<import('vue').CSSProperties>;
            };
            transitionName: StringConstructor;
            placeholder: StringConstructor;
            allowClear: {
              type: BooleanConstructor;
              default: any;
            };
            autofocus: {
              type: BooleanConstructor;
              default: any;
            };
            disabled: {
              type: BooleanConstructor;
              default: any;
            };
            tabindex: NumberConstructor;
            open: {
              type: BooleanConstructor;
              default: any;
            };
            defaultOpen: {
              type: BooleanConstructor;
              default: any;
            };
            inputReadOnly: {
              type: BooleanConstructor;
              default: any;
            };
            getPopupContainer: {
              type: import('vue').PropType<(node: HTMLElement) => HTMLElement>;
            };
            panelRender: {
              type: import('vue').PropType<
                (
                  originPanel: import('ant-design-vue/lib/_util/type').VueNode,
                ) => import('ant-design-vue/lib/_util/type').VueNode
              >;
            };
            onChange: {
              type: import('vue').PropType<
                (value: string | import('dayjs').Dayjs, dateString: string) => void
              >;
            };
            'onUpdate:value': {
              type: import('vue').PropType<(value: string | import('dayjs').Dayjs) => void>;
            };
            onOk: {
              type: import('vue').PropType<(value: string | import('dayjs').Dayjs) => void>;
            };
            onOpenChange: {
              type: import('vue').PropType<(open: boolean) => void>;
            };
            'onUpdate:open': {
              type: import('vue').PropType<(open: boolean) => void>;
            };
            onFocus: {
              type: import('vue').PropType<
                import('ant-design-vue/lib/_util/EventInterface').FocusEventHandler
              >;
            };
            onBlur: {
              type: import('vue').PropType<
                import('ant-design-vue/lib/_util/EventInterface').FocusEventHandler
              >;
            };
            onMousedown: {
              type: import('vue').PropType<
                import('ant-design-vue/lib/_util/EventInterface').MouseEventHandler
              >;
            };
            onMouseup: {
              type: import('vue').PropType<
                import('ant-design-vue/lib/_util/EventInterface').MouseEventHandler
              >;
            };
            onMouseenter: {
              type: import('vue').PropType<
                import('ant-design-vue/lib/_util/EventInterface').MouseEventHandler
              >;
            };
            onMouseleave: {
              type: import('vue').PropType<
                import('ant-design-vue/lib/_util/EventInterface').MouseEventHandler
              >;
            };
            onClick: {
              type: import('vue').PropType<
                import('ant-design-vue/lib/_util/EventInterface').MouseEventHandler
              >;
            };
            onContextmenu: {
              type: import('vue').PropType<
                import('ant-design-vue/lib/_util/EventInterface').MouseEventHandler
              >;
            };
            onKeydown: {
              type: import('vue').PropType<
                (event: KeyboardEvent, preventDefault: () => void) => void
              >;
            };
            role: StringConstructor;
            name: StringConstructor;
            autocomplete: StringConstructor;
            direction: {
              type: import('vue').PropType<'rtl' | 'ltr'>;
            };
            showToday: {
              type: BooleanConstructor;
              default: any;
            };
            showTime: {
              type: import('vue').PropType<
                | boolean
                | import('ant-design-vue/lib/vc-picker/panels/TimePanel').SharedTimeProps<
                    import('dayjs').Dayjs
                  >
              >;
              default: any;
            };
            locale: {
              type: import('vue').PropType<
                import('ant-design-vue/lib/date-picker/generatePicker').PickerLocale
              >;
            };
            size: {
              type: import('vue').PropType<import('ant-design-vue/lib/button').ButtonSize>;
            };
            bordered: {
              type: BooleanConstructor;
              default: any;
            };
            dateRender: {
              type: import('vue').PropType<
                import('ant-design-vue/lib/vc-picker/panels/DatePanel/DateBody').DateRender<
                  import('dayjs').Dayjs
                >
              >;
            };
            disabledDate: {
              type: import('vue').PropType<(date: import('dayjs').Dayjs) => boolean>;
            };
            mode: {
              type: import('vue').PropType<
                import('ant-design-vue/lib/vc-picker/interface').PanelMode
              >;
            };
            picker: {
              type: import('vue').PropType<
                import('ant-design-vue/lib/vc-picker/interface').PickerMode
              >;
            };
            valueFormat: StringConstructor;
            disabledHours: import('vue').PropType<() => number[]>;
            disabledMinutes: import('vue').PropType<(hour: number) => number[]>;
            disabledSeconds: import('vue').PropType<(hour: number, minute: number) => number[]>;
          }>
        > &
          import('vue').VNodeProps &
          import('vue').AllowedComponentProps &
          import('vue').ComponentCustomProps,
        | 'bordered'
        | 'open'
        | 'disabled'
        | 'autofocus'
        | 'defaultOpen'
        | 'allowClear'
        | 'showNow'
        | 'inputReadOnly'
        | 'showToday'
        | 'showTime'
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
          defaultPickerValue: {
            type: import('vue').PropType<string | import('dayjs').Dayjs>;
          };
          defaultValue: {
            type: import('vue').PropType<string | import('dayjs').Dayjs>;
          };
          value: {
            type: import('vue').PropType<string | import('dayjs').Dayjs>;
          };
          disabledTime: {
            type: import('vue').PropType<
              import('ant-design-vue/lib/vc-picker/interface').DisabledTime<import('dayjs').Dayjs>
            >;
          };
          format: {
            type: import('vue').PropType<
              | string
              | import('ant-design-vue/lib/vc-picker/interface').CustomFormat<import('dayjs').Dayjs>
              | (
                  | string
                  | import('ant-design-vue/lib/vc-picker/interface').CustomFormat<
                      import('dayjs').Dayjs
                    >
                )[]
            >;
          };
          renderExtraFooter: {
            type: import('vue').PropType<
              (
                mode: import('ant-design-vue/lib/vc-picker/interface').PanelMode,
              ) => import('ant-design-vue/lib/_util/type').VueNode
            >;
          };
          showNow: {
            type: BooleanConstructor;
            default: any;
          };
          monthCellRender: {
            type: import('vue').PropType<
              import('ant-design-vue/lib/vc-picker/panels/MonthPanel/MonthBody').MonthCellRender<
                import('dayjs').Dayjs
              >
            >;
          };
          monthCellContentRender: {
            type: import('vue').PropType<
              import('ant-design-vue/lib/vc-picker/panels/MonthPanel/MonthBody').MonthCellRender<
                import('dayjs').Dayjs
              >
            >;
          };
          id: StringConstructor;
          dropdownClassName: StringConstructor;
          dropdownAlign: {
            type: import('vue').PropType<import('ant-design-vue/lib/vc-align/interface').AlignType>;
          };
          popupStyle: {
            type: import('vue').PropType<import('vue').CSSProperties>;
          };
          transitionName: StringConstructor;
          placeholder: StringConstructor;
          allowClear: {
            type: BooleanConstructor;
            default: any;
          };
          autofocus: {
            type: BooleanConstructor;
            default: any;
          };
          disabled: {
            type: BooleanConstructor;
            default: any;
          };
          tabindex: NumberConstructor;
          open: {
            type: BooleanConstructor;
            default: any;
          };
          defaultOpen: {
            type: BooleanConstructor;
            default: any;
          };
          inputReadOnly: {
            type: BooleanConstructor;
            default: any;
          };
          getPopupContainer: {
            type: import('vue').PropType<(node: HTMLElement) => HTMLElement>;
          };
          panelRender: {
            type: import('vue').PropType<
              (
                originPanel: import('ant-design-vue/lib/_util/type').VueNode,
              ) => import('ant-design-vue/lib/_util/type').VueNode
            >;
          };
          onChange: {
            type: import('vue').PropType<
              (value: string | import('dayjs').Dayjs, dateString: string) => void
            >;
          };
          'onUpdate:value': {
            type: import('vue').PropType<(value: string | import('dayjs').Dayjs) => void>;
          };
          onOk: {
            type: import('vue').PropType<(value: string | import('dayjs').Dayjs) => void>;
          };
          onOpenChange: {
            type: import('vue').PropType<(open: boolean) => void>;
          };
          'onUpdate:open': {
            type: import('vue').PropType<(open: boolean) => void>;
          };
          onFocus: {
            type: import('vue').PropType<
              import('ant-design-vue/lib/_util/EventInterface').FocusEventHandler
            >;
          };
          onBlur: {
            type: import('vue').PropType<
              import('ant-design-vue/lib/_util/EventInterface').FocusEventHandler
            >;
          };
          onMousedown: {
            type: import('vue').PropType<
              import('ant-design-vue/lib/_util/EventInterface').MouseEventHandler
            >;
          };
          onMouseup: {
            type: import('vue').PropType<
              import('ant-design-vue/lib/_util/EventInterface').MouseEventHandler
            >;
          };
          onMouseenter: {
            type: import('vue').PropType<
              import('ant-design-vue/lib/_util/EventInterface').MouseEventHandler
            >;
          };
          onMouseleave: {
            type: import('vue').PropType<
              import('ant-design-vue/lib/_util/EventInterface').MouseEventHandler
            >;
          };
          onClick: {
            type: import('vue').PropType<
              import('ant-design-vue/lib/_util/EventInterface').MouseEventHandler
            >;
          };
          onContextmenu: {
            type: import('vue').PropType<
              import('ant-design-vue/lib/_util/EventInterface').MouseEventHandler
            >;
          };
          onKeydown: {
            type: import('vue').PropType<
              (event: KeyboardEvent, preventDefault: () => void) => void
            >;
          };
          role: StringConstructor;
          name: StringConstructor;
          autocomplete: StringConstructor;
          direction: {
            type: import('vue').PropType<'rtl' | 'ltr'>;
          };
          showToday: {
            type: BooleanConstructor;
            default: any;
          };
          showTime: {
            type: import('vue').PropType<
              | boolean
              | import('ant-design-vue/lib/vc-picker/panels/TimePanel').SharedTimeProps<
                  import('dayjs').Dayjs
                >
            >;
            default: any;
          };
          locale: {
            type: import('vue').PropType<
              import('ant-design-vue/lib/date-picker/generatePicker').PickerLocale
            >;
          };
          size: {
            type: import('vue').PropType<import('ant-design-vue/lib/button').ButtonSize>;
          };
          bordered: {
            type: BooleanConstructor;
            default: any;
          };
          dateRender: {
            type: import('vue').PropType<
              import('ant-design-vue/lib/vc-picker/panels/DatePanel/DateBody').DateRender<
                import('dayjs').Dayjs
              >
            >;
          };
          disabledDate: {
            type: import('vue').PropType<(date: import('dayjs').Dayjs) => boolean>;
          };
          mode: {
            type: import('vue').PropType<
              import('ant-design-vue/lib/vc-picker/interface').PanelMode
            >;
          };
          picker: {
            type: import('vue').PropType<
              import('ant-design-vue/lib/vc-picker/interface').PickerMode
            >;
          };
          valueFormat: StringConstructor;
          disabledHours: import('vue').PropType<() => number[]>;
          disabledMinutes: import('vue').PropType<(hour: number) => number[]>;
          disabledSeconds: import('vue').PropType<(hour: number, minute: number) => number[]>;
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
        open: boolean;
        disabled: boolean;
        autofocus: boolean;
        defaultOpen: boolean;
        allowClear: boolean;
        bordered: boolean;
        showTime: any;
        showNow: boolean;
        showToday: boolean;
        inputReadOnly: boolean;
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
      defaultPickerValue: {
        type: import('vue').PropType<string | import('dayjs').Dayjs>;
      };
      defaultValue: {
        type: import('vue').PropType<string | import('dayjs').Dayjs>;
      };
      value: {
        type: import('vue').PropType<string | import('dayjs').Dayjs>;
      };
      disabledTime: {
        type: import('vue').PropType<
          import('ant-design-vue/lib/vc-picker/interface').DisabledTime<import('dayjs').Dayjs>
        >;
      };
      format: {
        type: import('vue').PropType<
          | string
          | import('ant-design-vue/lib/vc-picker/interface').CustomFormat<import('dayjs').Dayjs>
          | (
              | string
              | import('ant-design-vue/lib/vc-picker/interface').CustomFormat<import('dayjs').Dayjs>
            )[]
        >;
      };
      renderExtraFooter: {
        type: import('vue').PropType<
          (
            mode: import('ant-design-vue/lib/vc-picker/interface').PanelMode,
          ) => import('ant-design-vue/lib/_util/type').VueNode
        >;
      };
      showNow: {
        type: BooleanConstructor;
        default: any;
      };
      monthCellRender: {
        type: import('vue').PropType<
          import('ant-design-vue/lib/vc-picker/panels/MonthPanel/MonthBody').MonthCellRender<
            import('dayjs').Dayjs
          >
        >;
      };
      monthCellContentRender: {
        type: import('vue').PropType<
          import('ant-design-vue/lib/vc-picker/panels/MonthPanel/MonthBody').MonthCellRender<
            import('dayjs').Dayjs
          >
        >;
      };
      id: StringConstructor;
      dropdownClassName: StringConstructor;
      dropdownAlign: {
        type: import('vue').PropType<import('ant-design-vue/lib/vc-align/interface').AlignType>;
      };
      popupStyle: {
        type: import('vue').PropType<import('vue').CSSProperties>;
      };
      transitionName: StringConstructor;
      placeholder: StringConstructor;
      allowClear: {
        type: BooleanConstructor;
        default: any;
      };
      autofocus: {
        type: BooleanConstructor;
        default: any;
      };
      disabled: {
        type: BooleanConstructor;
        default: any;
      };
      tabindex: NumberConstructor;
      open: {
        type: BooleanConstructor;
        default: any;
      };
      defaultOpen: {
        type: BooleanConstructor;
        default: any;
      };
      inputReadOnly: {
        type: BooleanConstructor;
        default: any;
      };
      getPopupContainer: {
        type: import('vue').PropType<(node: HTMLElement) => HTMLElement>;
      };
      panelRender: {
        type: import('vue').PropType<
          (
            originPanel: import('ant-design-vue/lib/_util/type').VueNode,
          ) => import('ant-design-vue/lib/_util/type').VueNode
        >;
      };
      onChange: {
        type: import('vue').PropType<
          (value: string | import('dayjs').Dayjs, dateString: string) => void
        >;
      };
      'onUpdate:value': {
        type: import('vue').PropType<(value: string | import('dayjs').Dayjs) => void>;
      };
      onOk: {
        type: import('vue').PropType<(value: string | import('dayjs').Dayjs) => void>;
      };
      onOpenChange: {
        type: import('vue').PropType<(open: boolean) => void>;
      };
      'onUpdate:open': {
        type: import('vue').PropType<(open: boolean) => void>;
      };
      onFocus: {
        type: import('vue').PropType<
          import('ant-design-vue/lib/_util/EventInterface').FocusEventHandler
        >;
      };
      onBlur: {
        type: import('vue').PropType<
          import('ant-design-vue/lib/_util/EventInterface').FocusEventHandler
        >;
      };
      onMousedown: {
        type: import('vue').PropType<
          import('ant-design-vue/lib/_util/EventInterface').MouseEventHandler
        >;
      };
      onMouseup: {
        type: import('vue').PropType<
          import('ant-design-vue/lib/_util/EventInterface').MouseEventHandler
        >;
      };
      onMouseenter: {
        type: import('vue').PropType<
          import('ant-design-vue/lib/_util/EventInterface').MouseEventHandler
        >;
      };
      onMouseleave: {
        type: import('vue').PropType<
          import('ant-design-vue/lib/_util/EventInterface').MouseEventHandler
        >;
      };
      onClick: {
        type: import('vue').PropType<
          import('ant-design-vue/lib/_util/EventInterface').MouseEventHandler
        >;
      };
      onContextmenu: {
        type: import('vue').PropType<
          import('ant-design-vue/lib/_util/EventInterface').MouseEventHandler
        >;
      };
      onKeydown: {
        type: import('vue').PropType<(event: KeyboardEvent, preventDefault: () => void) => void>;
      };
      role: StringConstructor;
      name: StringConstructor;
      autocomplete: StringConstructor;
      direction: {
        type: import('vue').PropType<'rtl' | 'ltr'>;
      };
      showToday: {
        type: BooleanConstructor;
        default: any;
      };
      showTime: {
        type: import('vue').PropType<
          | boolean
          | import('ant-design-vue/lib/vc-picker/panels/TimePanel').SharedTimeProps<
              import('dayjs').Dayjs
            >
        >;
        default: any;
      };
      locale: {
        type: import('vue').PropType<
          import('ant-design-vue/lib/date-picker/generatePicker').PickerLocale
        >;
      };
      size: {
        type: import('vue').PropType<import('ant-design-vue/lib/button').ButtonSize>;
      };
      bordered: {
        type: BooleanConstructor;
        default: any;
      };
      dateRender: {
        type: import('vue').PropType<
          import('ant-design-vue/lib/vc-picker/panels/DatePanel/DateBody').DateRender<
            import('dayjs').Dayjs
          >
        >;
      };
      disabledDate: {
        type: import('vue').PropType<(date: import('dayjs').Dayjs) => boolean>;
      };
      mode: {
        type: import('vue').PropType<import('ant-design-vue/lib/vc-picker/interface').PanelMode>;
      };
      picker: {
        type: import('vue').PropType<import('ant-design-vue/lib/vc-picker/interface').PickerMode>;
      };
      valueFormat: StringConstructor;
      disabledHours: import('vue').PropType<() => number[]>;
      disabledMinutes: import('vue').PropType<(hour: number) => number[]>;
      disabledSeconds: import('vue').PropType<(hour: number, minute: number) => number[]>;
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
      defaultPickerValue: {
        type: import('vue').PropType<string | import('dayjs').Dayjs>;
      };
      defaultValue: {
        type: import('vue').PropType<string | import('dayjs').Dayjs>;
      };
      value: {
        type: import('vue').PropType<string | import('dayjs').Dayjs>;
      };
      disabledTime: {
        type: import('vue').PropType<
          import('ant-design-vue/lib/vc-picker/interface').DisabledTime<import('dayjs').Dayjs>
        >;
      };
      format: {
        type: import('vue').PropType<
          | string
          | import('ant-design-vue/lib/vc-picker/interface').CustomFormat<import('dayjs').Dayjs>
          | (
              | string
              | import('ant-design-vue/lib/vc-picker/interface').CustomFormat<import('dayjs').Dayjs>
            )[]
        >;
      };
      renderExtraFooter: {
        type: import('vue').PropType<
          (
            mode: import('ant-design-vue/lib/vc-picker/interface').PanelMode,
          ) => import('ant-design-vue/lib/_util/type').VueNode
        >;
      };
      showNow: {
        type: BooleanConstructor;
        default: any;
      };
      monthCellRender: {
        type: import('vue').PropType<
          import('ant-design-vue/lib/vc-picker/panels/MonthPanel/MonthBody').MonthCellRender<
            import('dayjs').Dayjs
          >
        >;
      };
      monthCellContentRender: {
        type: import('vue').PropType<
          import('ant-design-vue/lib/vc-picker/panels/MonthPanel/MonthBody').MonthCellRender<
            import('dayjs').Dayjs
          >
        >;
      };
      id: StringConstructor;
      dropdownClassName: StringConstructor;
      dropdownAlign: {
        type: import('vue').PropType<import('ant-design-vue/lib/vc-align/interface').AlignType>;
      };
      popupStyle: {
        type: import('vue').PropType<import('vue').CSSProperties>;
      };
      transitionName: StringConstructor;
      placeholder: StringConstructor;
      allowClear: {
        type: BooleanConstructor;
        default: any;
      };
      autofocus: {
        type: BooleanConstructor;
        default: any;
      };
      disabled: {
        type: BooleanConstructor;
        default: any;
      };
      tabindex: NumberConstructor;
      open: {
        type: BooleanConstructor;
        default: any;
      };
      defaultOpen: {
        type: BooleanConstructor;
        default: any;
      };
      inputReadOnly: {
        type: BooleanConstructor;
        default: any;
      };
      getPopupContainer: {
        type: import('vue').PropType<(node: HTMLElement) => HTMLElement>;
      };
      panelRender: {
        type: import('vue').PropType<
          (
            originPanel: import('ant-design-vue/lib/_util/type').VueNode,
          ) => import('ant-design-vue/lib/_util/type').VueNode
        >;
      };
      onChange: {
        type: import('vue').PropType<
          (value: string | import('dayjs').Dayjs, dateString: string) => void
        >;
      };
      'onUpdate:value': {
        type: import('vue').PropType<(value: string | import('dayjs').Dayjs) => void>;
      };
      onOk: {
        type: import('vue').PropType<(value: string | import('dayjs').Dayjs) => void>;
      };
      onOpenChange: {
        type: import('vue').PropType<(open: boolean) => void>;
      };
      'onUpdate:open': {
        type: import('vue').PropType<(open: boolean) => void>;
      };
      onFocus: {
        type: import('vue').PropType<
          import('ant-design-vue/lib/_util/EventInterface').FocusEventHandler
        >;
      };
      onBlur: {
        type: import('vue').PropType<
          import('ant-design-vue/lib/_util/EventInterface').FocusEventHandler
        >;
      };
      onMousedown: {
        type: import('vue').PropType<
          import('ant-design-vue/lib/_util/EventInterface').MouseEventHandler
        >;
      };
      onMouseup: {
        type: import('vue').PropType<
          import('ant-design-vue/lib/_util/EventInterface').MouseEventHandler
        >;
      };
      onMouseenter: {
        type: import('vue').PropType<
          import('ant-design-vue/lib/_util/EventInterface').MouseEventHandler
        >;
      };
      onMouseleave: {
        type: import('vue').PropType<
          import('ant-design-vue/lib/_util/EventInterface').MouseEventHandler
        >;
      };
      onClick: {
        type: import('vue').PropType<
          import('ant-design-vue/lib/_util/EventInterface').MouseEventHandler
        >;
      };
      onContextmenu: {
        type: import('vue').PropType<
          import('ant-design-vue/lib/_util/EventInterface').MouseEventHandler
        >;
      };
      onKeydown: {
        type: import('vue').PropType<(event: KeyboardEvent, preventDefault: () => void) => void>;
      };
      role: StringConstructor;
      name: StringConstructor;
      autocomplete: StringConstructor;
      direction: {
        type: import('vue').PropType<'rtl' | 'ltr'>;
      };
      showToday: {
        type: BooleanConstructor;
        default: any;
      };
      showTime: {
        type: import('vue').PropType<
          | boolean
          | import('ant-design-vue/lib/vc-picker/panels/TimePanel').SharedTimeProps<
              import('dayjs').Dayjs
            >
        >;
        default: any;
      };
      locale: {
        type: import('vue').PropType<
          import('ant-design-vue/lib/date-picker/generatePicker').PickerLocale
        >;
      };
      size: {
        type: import('vue').PropType<import('ant-design-vue/lib/button').ButtonSize>;
      };
      bordered: {
        type: BooleanConstructor;
        default: any;
      };
      dateRender: {
        type: import('vue').PropType<
          import('ant-design-vue/lib/vc-picker/panels/DatePanel/DateBody').DateRender<
            import('dayjs').Dayjs
          >
        >;
      };
      disabledDate: {
        type: import('vue').PropType<(date: import('dayjs').Dayjs) => boolean>;
      };
      mode: {
        type: import('vue').PropType<import('ant-design-vue/lib/vc-picker/interface').PanelMode>;
      };
      picker: {
        type: import('vue').PropType<import('ant-design-vue/lib/vc-picker/interface').PickerMode>;
      };
      valueFormat: StringConstructor;
      disabledHours: import('vue').PropType<() => number[]>;
      disabledMinutes: import('vue').PropType<(hour: number) => number[]>;
      disabledSeconds: import('vue').PropType<(hour: number, minute: number) => number[]>;
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
    open: boolean;
    disabled: boolean;
    autofocus: boolean;
    defaultOpen: boolean;
    allowClear: boolean;
    bordered: boolean;
    showTime: any;
    showNow: boolean;
    showToday: boolean;
    inputReadOnly: boolean;
  }
> &
  import('vue').VNodeProps &
  import('vue').AllowedComponentProps &
  import('vue').ComponentCustomProps & {
    WeekPicker: import('vue').DefineComponent<
      {
        defaultPickerValue: {
          type: import('vue').PropType<string | import('dayjs').Dayjs>;
        };
        defaultValue: {
          type: import('vue').PropType<string | import('dayjs').Dayjs>;
        };
        value: {
          type: import('vue').PropType<string | import('dayjs').Dayjs>;
        };
        disabledTime: {
          type: import('vue').PropType<
            import('ant-design-vue/lib/vc-picker/interface').DisabledTime<import('dayjs').Dayjs>
          >;
        };
        format: {
          type: import('vue').PropType<
            | string
            | import('ant-design-vue/lib/vc-picker/interface').CustomFormat<import('dayjs').Dayjs>
            | (
                | string
                | import('ant-design-vue/lib/vc-picker/interface').CustomFormat<
                    import('dayjs').Dayjs
                  >
              )[]
          >;
        };
        renderExtraFooter: {
          type: import('vue').PropType<
            (
              mode: import('ant-design-vue/lib/vc-picker/interface').PanelMode,
            ) => import('ant-design-vue/lib/_util/type').VueNode
          >;
        };
        showNow: {
          type: BooleanConstructor;
          default: any;
        };
        monthCellRender: {
          type: import('vue').PropType<
            import('ant-design-vue/lib/vc-picker/panels/MonthPanel/MonthBody').MonthCellRender<
              import('dayjs').Dayjs
            >
          >;
        };
        monthCellContentRender: {
          type: import('vue').PropType<
            import('ant-design-vue/lib/vc-picker/panels/MonthPanel/MonthBody').MonthCellRender<
              import('dayjs').Dayjs
            >
          >;
        };
        id: StringConstructor;
        dropdownClassName: StringConstructor;
        dropdownAlign: {
          type: import('vue').PropType<import('ant-design-vue/lib/vc-align/interface').AlignType>;
        };
        popupStyle: {
          type: import('vue').PropType<import('vue').CSSProperties>;
        };
        transitionName: StringConstructor;
        placeholder: StringConstructor;
        allowClear: {
          type: BooleanConstructor;
          default: any;
        };
        autofocus: {
          type: BooleanConstructor;
          default: any;
        };
        disabled: {
          type: BooleanConstructor;
          default: any;
        };
        tabindex: NumberConstructor;
        open: {
          type: BooleanConstructor;
          default: any;
        };
        defaultOpen: {
          type: BooleanConstructor;
          default: any;
        };
        inputReadOnly: {
          type: BooleanConstructor;
          default: any;
        };
        getPopupContainer: {
          type: import('vue').PropType<(node: HTMLElement) => HTMLElement>;
        };
        panelRender: {
          type: import('vue').PropType<
            (
              originPanel: import('ant-design-vue/lib/_util/type').VueNode,
            ) => import('ant-design-vue/lib/_util/type').VueNode
          >;
        };
        onChange: {
          type: import('vue').PropType<
            (value: string | import('dayjs').Dayjs, dateString: string) => void
          >;
        };
        'onUpdate:value': {
          type: import('vue').PropType<(value: string | import('dayjs').Dayjs) => void>;
        };
        onOk: {
          type: import('vue').PropType<(value: string | import('dayjs').Dayjs) => void>;
        };
        onOpenChange: {
          type: import('vue').PropType<(open: boolean) => void>;
        };
        'onUpdate:open': {
          type: import('vue').PropType<(open: boolean) => void>;
        };
        onFocus: {
          type: import('vue').PropType<
            import('ant-design-vue/lib/_util/EventInterface').FocusEventHandler
          >;
        };
        onBlur: {
          type: import('vue').PropType<
            import('ant-design-vue/lib/_util/EventInterface').FocusEventHandler
          >;
        };
        onMousedown: {
          type: import('vue').PropType<
            import('ant-design-vue/lib/_util/EventInterface').MouseEventHandler
          >;
        };
        onMouseup: {
          type: import('vue').PropType<
            import('ant-design-vue/lib/_util/EventInterface').MouseEventHandler
          >;
        };
        onMouseenter: {
          type: import('vue').PropType<
            import('ant-design-vue/lib/_util/EventInterface').MouseEventHandler
          >;
        };
        onMouseleave: {
          type: import('vue').PropType<
            import('ant-design-vue/lib/_util/EventInterface').MouseEventHandler
          >;
        };
        onClick: {
          type: import('vue').PropType<
            import('ant-design-vue/lib/_util/EventInterface').MouseEventHandler
          >;
        };
        onContextmenu: {
          type: import('vue').PropType<
            import('ant-design-vue/lib/_util/EventInterface').MouseEventHandler
          >;
        };
        onKeydown: {
          type: import('vue').PropType<(event: KeyboardEvent, preventDefault: () => void) => void>;
        };
        role: StringConstructor;
        name: StringConstructor;
        autocomplete: StringConstructor;
        direction: {
          type: import('vue').PropType<'rtl' | 'ltr'>;
        };
        showToday: {
          type: BooleanConstructor;
          default: any;
        };
        showTime: {
          type: import('vue').PropType<
            | boolean
            | import('ant-design-vue/lib/vc-picker/panels/TimePanel').SharedTimeProps<
                import('dayjs').Dayjs
              >
          >;
          default: any;
        };
        locale: {
          type: import('vue').PropType<
            import('ant-design-vue/lib/date-picker/generatePicker').PickerLocale
          >;
        };
        size: {
          type: import('vue').PropType<import('ant-design-vue/lib/button').ButtonSize>;
        };
        bordered: {
          type: BooleanConstructor;
          default: any;
        };
        dateRender: {
          type: import('vue').PropType<
            import('ant-design-vue/lib/vc-picker/panels/DatePanel/DateBody').DateRender<
              import('dayjs').Dayjs
            >
          >;
        };
        disabledDate: {
          type: import('vue').PropType<(date: import('dayjs').Dayjs) => boolean>;
        };
        mode: {
          type: import('vue').PropType<import('ant-design-vue/lib/vc-picker/interface').PanelMode>;
        };
        picker: {
          type: import('vue').PropType<import('ant-design-vue/lib/vc-picker/interface').PickerMode>;
        };
        valueFormat: StringConstructor;
        disabledHours: import('vue').PropType<() => number[]>;
        disabledMinutes: import('vue').PropType<(hour: number) => number[]>;
        disabledSeconds: import('vue').PropType<(hour: number, minute: number) => number[]>;
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
          defaultPickerValue: {
            type: import('vue').PropType<string | import('dayjs').Dayjs>;
          };
          defaultValue: {
            type: import('vue').PropType<string | import('dayjs').Dayjs>;
          };
          value: {
            type: import('vue').PropType<string | import('dayjs').Dayjs>;
          };
          disabledTime: {
            type: import('vue').PropType<
              import('ant-design-vue/lib/vc-picker/interface').DisabledTime<import('dayjs').Dayjs>
            >;
          };
          format: {
            type: import('vue').PropType<
              | string
              | import('ant-design-vue/lib/vc-picker/interface').CustomFormat<import('dayjs').Dayjs>
              | (
                  | string
                  | import('ant-design-vue/lib/vc-picker/interface').CustomFormat<
                      import('dayjs').Dayjs
                    >
                )[]
            >;
          };
          renderExtraFooter: {
            type: import('vue').PropType<
              (
                mode: import('ant-design-vue/lib/vc-picker/interface').PanelMode,
              ) => import('ant-design-vue/lib/_util/type').VueNode
            >;
          };
          showNow: {
            type: BooleanConstructor;
            default: any;
          };
          monthCellRender: {
            type: import('vue').PropType<
              import('ant-design-vue/lib/vc-picker/panels/MonthPanel/MonthBody').MonthCellRender<
                import('dayjs').Dayjs
              >
            >;
          };
          monthCellContentRender: {
            type: import('vue').PropType<
              import('ant-design-vue/lib/vc-picker/panels/MonthPanel/MonthBody').MonthCellRender<
                import('dayjs').Dayjs
              >
            >;
          };
          id: StringConstructor;
          dropdownClassName: StringConstructor;
          dropdownAlign: {
            type: import('vue').PropType<import('ant-design-vue/lib/vc-align/interface').AlignType>;
          };
          popupStyle: {
            type: import('vue').PropType<import('vue').CSSProperties>;
          };
          transitionName: StringConstructor;
          placeholder: StringConstructor;
          allowClear: {
            type: BooleanConstructor;
            default: any;
          };
          autofocus: {
            type: BooleanConstructor;
            default: any;
          };
          disabled: {
            type: BooleanConstructor;
            default: any;
          };
          tabindex: NumberConstructor;
          open: {
            type: BooleanConstructor;
            default: any;
          };
          defaultOpen: {
            type: BooleanConstructor;
            default: any;
          };
          inputReadOnly: {
            type: BooleanConstructor;
            default: any;
          };
          getPopupContainer: {
            type: import('vue').PropType<(node: HTMLElement) => HTMLElement>;
          };
          panelRender: {
            type: import('vue').PropType<
              (
                originPanel: import('ant-design-vue/lib/_util/type').VueNode,
              ) => import('ant-design-vue/lib/_util/type').VueNode
            >;
          };
          onChange: {
            type: import('vue').PropType<
              (value: string | import('dayjs').Dayjs, dateString: string) => void
            >;
          };
          'onUpdate:value': {
            type: import('vue').PropType<(value: string | import('dayjs').Dayjs) => void>;
          };
          onOk: {
            type: import('vue').PropType<(value: string | import('dayjs').Dayjs) => void>;
          };
          onOpenChange: {
            type: import('vue').PropType<(open: boolean) => void>;
          };
          'onUpdate:open': {
            type: import('vue').PropType<(open: boolean) => void>;
          };
          onFocus: {
            type: import('vue').PropType<
              import('ant-design-vue/lib/_util/EventInterface').FocusEventHandler
            >;
          };
          onBlur: {
            type: import('vue').PropType<
              import('ant-design-vue/lib/_util/EventInterface').FocusEventHandler
            >;
          };
          onMousedown: {
            type: import('vue').PropType<
              import('ant-design-vue/lib/_util/EventInterface').MouseEventHandler
            >;
          };
          onMouseup: {
            type: import('vue').PropType<
              import('ant-design-vue/lib/_util/EventInterface').MouseEventHandler
            >;
          };
          onMouseenter: {
            type: import('vue').PropType<
              import('ant-design-vue/lib/_util/EventInterface').MouseEventHandler
            >;
          };
          onMouseleave: {
            type: import('vue').PropType<
              import('ant-design-vue/lib/_util/EventInterface').MouseEventHandler
            >;
          };
          onClick: {
            type: import('vue').PropType<
              import('ant-design-vue/lib/_util/EventInterface').MouseEventHandler
            >;
          };
          onContextmenu: {
            type: import('vue').PropType<
              import('ant-design-vue/lib/_util/EventInterface').MouseEventHandler
            >;
          };
          onKeydown: {
            type: import('vue').PropType<
              (event: KeyboardEvent, preventDefault: () => void) => void
            >;
          };
          role: StringConstructor;
          name: StringConstructor;
          autocomplete: StringConstructor;
          direction: {
            type: import('vue').PropType<'rtl' | 'ltr'>;
          };
          showToday: {
            type: BooleanConstructor;
            default: any;
          };
          showTime: {
            type: import('vue').PropType<
              | boolean
              | import('ant-design-vue/lib/vc-picker/panels/TimePanel').SharedTimeProps<
                  import('dayjs').Dayjs
                >
            >;
            default: any;
          };
          locale: {
            type: import('vue').PropType<
              import('ant-design-vue/lib/date-picker/generatePicker').PickerLocale
            >;
          };
          size: {
            type: import('vue').PropType<import('ant-design-vue/lib/button').ButtonSize>;
          };
          bordered: {
            type: BooleanConstructor;
            default: any;
          };
          dateRender: {
            type: import('vue').PropType<
              import('ant-design-vue/lib/vc-picker/panels/DatePanel/DateBody').DateRender<
                import('dayjs').Dayjs
              >
            >;
          };
          disabledDate: {
            type: import('vue').PropType<(date: import('dayjs').Dayjs) => boolean>;
          };
          mode: {
            type: import('vue').PropType<
              import('ant-design-vue/lib/vc-picker/interface').PanelMode
            >;
          };
          picker: {
            type: import('vue').PropType<
              import('ant-design-vue/lib/vc-picker/interface').PickerMode
            >;
          };
          valueFormat: StringConstructor;
          disabledHours: import('vue').PropType<() => number[]>;
          disabledMinutes: import('vue').PropType<(hour: number) => number[]>;
          disabledSeconds: import('vue').PropType<(hour: number, minute: number) => number[]>;
        }>
      >,
      {
        open: boolean;
        disabled: boolean;
        autofocus: boolean;
        defaultOpen: boolean;
        allowClear: boolean;
        bordered: boolean;
        showTime: any;
        showNow: boolean;
        showToday: boolean;
        inputReadOnly: boolean;
      }
    >;
    MonthPicker: import('vue').DefineComponent<
      {
        defaultPickerValue: {
          type: import('vue').PropType<string | import('dayjs').Dayjs>;
        };
        defaultValue: {
          type: import('vue').PropType<string | import('dayjs').Dayjs>;
        };
        value: {
          type: import('vue').PropType<string | import('dayjs').Dayjs>;
        };
        disabledTime: {
          type: import('vue').PropType<
            import('ant-design-vue/lib/vc-picker/interface').DisabledTime<import('dayjs').Dayjs>
          >;
        };
        format: {
          type: import('vue').PropType<
            | string
            | import('ant-design-vue/lib/vc-picker/interface').CustomFormat<import('dayjs').Dayjs>
            | (
                | string
                | import('ant-design-vue/lib/vc-picker/interface').CustomFormat<
                    import('dayjs').Dayjs
                  >
              )[]
          >;
        };
        renderExtraFooter: {
          type: import('vue').PropType<
            (
              mode: import('ant-design-vue/lib/vc-picker/interface').PanelMode,
            ) => import('ant-design-vue/lib/_util/type').VueNode
          >;
        };
        showNow: {
          type: BooleanConstructor;
          default: any;
        };
        monthCellRender: {
          type: import('vue').PropType<
            import('ant-design-vue/lib/vc-picker/panels/MonthPanel/MonthBody').MonthCellRender<
              import('dayjs').Dayjs
            >
          >;
        };
        monthCellContentRender: {
          type: import('vue').PropType<
            import('ant-design-vue/lib/vc-picker/panels/MonthPanel/MonthBody').MonthCellRender<
              import('dayjs').Dayjs
            >
          >;
        };
        id: StringConstructor;
        dropdownClassName: StringConstructor;
        dropdownAlign: {
          type: import('vue').PropType<import('ant-design-vue/lib/vc-align/interface').AlignType>;
        };
        popupStyle: {
          type: import('vue').PropType<import('vue').CSSProperties>;
        };
        transitionName: StringConstructor;
        placeholder: StringConstructor;
        allowClear: {
          type: BooleanConstructor;
          default: any;
        };
        autofocus: {
          type: BooleanConstructor;
          default: any;
        };
        disabled: {
          type: BooleanConstructor;
          default: any;
        };
        tabindex: NumberConstructor;
        open: {
          type: BooleanConstructor;
          default: any;
        };
        defaultOpen: {
          type: BooleanConstructor;
          default: any;
        };
        inputReadOnly: {
          type: BooleanConstructor;
          default: any;
        };
        getPopupContainer: {
          type: import('vue').PropType<(node: HTMLElement) => HTMLElement>;
        };
        panelRender: {
          type: import('vue').PropType<
            (
              originPanel: import('ant-design-vue/lib/_util/type').VueNode,
            ) => import('ant-design-vue/lib/_util/type').VueNode
          >;
        };
        onChange: {
          type: import('vue').PropType<
            (value: string | import('dayjs').Dayjs, dateString: string) => void
          >;
        };
        'onUpdate:value': {
          type: import('vue').PropType<(value: string | import('dayjs').Dayjs) => void>;
        };
        onOk: {
          type: import('vue').PropType<(value: string | import('dayjs').Dayjs) => void>;
        };
        onOpenChange: {
          type: import('vue').PropType<(open: boolean) => void>;
        };
        'onUpdate:open': {
          type: import('vue').PropType<(open: boolean) => void>;
        };
        onFocus: {
          type: import('vue').PropType<
            import('ant-design-vue/lib/_util/EventInterface').FocusEventHandler
          >;
        };
        onBlur: {
          type: import('vue').PropType<
            import('ant-design-vue/lib/_util/EventInterface').FocusEventHandler
          >;
        };
        onMousedown: {
          type: import('vue').PropType<
            import('ant-design-vue/lib/_util/EventInterface').MouseEventHandler
          >;
        };
        onMouseup: {
          type: import('vue').PropType<
            import('ant-design-vue/lib/_util/EventInterface').MouseEventHandler
          >;
        };
        onMouseenter: {
          type: import('vue').PropType<
            import('ant-design-vue/lib/_util/EventInterface').MouseEventHandler
          >;
        };
        onMouseleave: {
          type: import('vue').PropType<
            import('ant-design-vue/lib/_util/EventInterface').MouseEventHandler
          >;
        };
        onClick: {
          type: import('vue').PropType<
            import('ant-design-vue/lib/_util/EventInterface').MouseEventHandler
          >;
        };
        onContextmenu: {
          type: import('vue').PropType<
            import('ant-design-vue/lib/_util/EventInterface').MouseEventHandler
          >;
        };
        onKeydown: {
          type: import('vue').PropType<(event: KeyboardEvent, preventDefault: () => void) => void>;
        };
        role: StringConstructor;
        name: StringConstructor;
        autocomplete: StringConstructor;
        direction: {
          type: import('vue').PropType<'rtl' | 'ltr'>;
        };
        showToday: {
          type: BooleanConstructor;
          default: any;
        };
        showTime: {
          type: import('vue').PropType<
            | boolean
            | import('ant-design-vue/lib/vc-picker/panels/TimePanel').SharedTimeProps<
                import('dayjs').Dayjs
              >
          >;
          default: any;
        };
        locale: {
          type: import('vue').PropType<
            import('ant-design-vue/lib/date-picker/generatePicker').PickerLocale
          >;
        };
        size: {
          type: import('vue').PropType<import('ant-design-vue/lib/button').ButtonSize>;
        };
        bordered: {
          type: BooleanConstructor;
          default: any;
        };
        dateRender: {
          type: import('vue').PropType<
            import('ant-design-vue/lib/vc-picker/panels/DatePanel/DateBody').DateRender<
              import('dayjs').Dayjs
            >
          >;
        };
        disabledDate: {
          type: import('vue').PropType<(date: import('dayjs').Dayjs) => boolean>;
        };
        mode: {
          type: import('vue').PropType<import('ant-design-vue/lib/vc-picker/interface').PanelMode>;
        };
        picker: {
          type: import('vue').PropType<import('ant-design-vue/lib/vc-picker/interface').PickerMode>;
        };
        valueFormat: StringConstructor;
        disabledHours: import('vue').PropType<() => number[]>;
        disabledMinutes: import('vue').PropType<(hour: number) => number[]>;
        disabledSeconds: import('vue').PropType<(hour: number, minute: number) => number[]>;
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
          defaultPickerValue: {
            type: import('vue').PropType<string | import('dayjs').Dayjs>;
          };
          defaultValue: {
            type: import('vue').PropType<string | import('dayjs').Dayjs>;
          };
          value: {
            type: import('vue').PropType<string | import('dayjs').Dayjs>;
          };
          disabledTime: {
            type: import('vue').PropType<
              import('ant-design-vue/lib/vc-picker/interface').DisabledTime<import('dayjs').Dayjs>
            >;
          };
          format: {
            type: import('vue').PropType<
              | string
              | import('ant-design-vue/lib/vc-picker/interface').CustomFormat<import('dayjs').Dayjs>
              | (
                  | string
                  | import('ant-design-vue/lib/vc-picker/interface').CustomFormat<
                      import('dayjs').Dayjs
                    >
                )[]
            >;
          };
          renderExtraFooter: {
            type: import('vue').PropType<
              (
                mode: import('ant-design-vue/lib/vc-picker/interface').PanelMode,
              ) => import('ant-design-vue/lib/_util/type').VueNode
            >;
          };
          showNow: {
            type: BooleanConstructor;
            default: any;
          };
          monthCellRender: {
            type: import('vue').PropType<
              import('ant-design-vue/lib/vc-picker/panels/MonthPanel/MonthBody').MonthCellRender<
                import('dayjs').Dayjs
              >
            >;
          };
          monthCellContentRender: {
            type: import('vue').PropType<
              import('ant-design-vue/lib/vc-picker/panels/MonthPanel/MonthBody').MonthCellRender<
                import('dayjs').Dayjs
              >
            >;
          };
          id: StringConstructor;
          dropdownClassName: StringConstructor;
          dropdownAlign: {
            type: import('vue').PropType<import('ant-design-vue/lib/vc-align/interface').AlignType>;
          };
          popupStyle: {
            type: import('vue').PropType<import('vue').CSSProperties>;
          };
          transitionName: StringConstructor;
          placeholder: StringConstructor;
          allowClear: {
            type: BooleanConstructor;
            default: any;
          };
          autofocus: {
            type: BooleanConstructor;
            default: any;
          };
          disabled: {
            type: BooleanConstructor;
            default: any;
          };
          tabindex: NumberConstructor;
          open: {
            type: BooleanConstructor;
            default: any;
          };
          defaultOpen: {
            type: BooleanConstructor;
            default: any;
          };
          inputReadOnly: {
            type: BooleanConstructor;
            default: any;
          };
          getPopupContainer: {
            type: import('vue').PropType<(node: HTMLElement) => HTMLElement>;
          };
          panelRender: {
            type: import('vue').PropType<
              (
                originPanel: import('ant-design-vue/lib/_util/type').VueNode,
              ) => import('ant-design-vue/lib/_util/type').VueNode
            >;
          };
          onChange: {
            type: import('vue').PropType<
              (value: string | import('dayjs').Dayjs, dateString: string) => void
            >;
          };
          'onUpdate:value': {
            type: import('vue').PropType<(value: string | import('dayjs').Dayjs) => void>;
          };
          onOk: {
            type: import('vue').PropType<(value: string | import('dayjs').Dayjs) => void>;
          };
          onOpenChange: {
            type: import('vue').PropType<(open: boolean) => void>;
          };
          'onUpdate:open': {
            type: import('vue').PropType<(open: boolean) => void>;
          };
          onFocus: {
            type: import('vue').PropType<
              import('ant-design-vue/lib/_util/EventInterface').FocusEventHandler
            >;
          };
          onBlur: {
            type: import('vue').PropType<
              import('ant-design-vue/lib/_util/EventInterface').FocusEventHandler
            >;
          };
          onMousedown: {
            type: import('vue').PropType<
              import('ant-design-vue/lib/_util/EventInterface').MouseEventHandler
            >;
          };
          onMouseup: {
            type: import('vue').PropType<
              import('ant-design-vue/lib/_util/EventInterface').MouseEventHandler
            >;
          };
          onMouseenter: {
            type: import('vue').PropType<
              import('ant-design-vue/lib/_util/EventInterface').MouseEventHandler
            >;
          };
          onMouseleave: {
            type: import('vue').PropType<
              import('ant-design-vue/lib/_util/EventInterface').MouseEventHandler
            >;
          };
          onClick: {
            type: import('vue').PropType<
              import('ant-design-vue/lib/_util/EventInterface').MouseEventHandler
            >;
          };
          onContextmenu: {
            type: import('vue').PropType<
              import('ant-design-vue/lib/_util/EventInterface').MouseEventHandler
            >;
          };
          onKeydown: {
            type: import('vue').PropType<
              (event: KeyboardEvent, preventDefault: () => void) => void
            >;
          };
          role: StringConstructor;
          name: StringConstructor;
          autocomplete: StringConstructor;
          direction: {
            type: import('vue').PropType<'rtl' | 'ltr'>;
          };
          showToday: {
            type: BooleanConstructor;
            default: any;
          };
          showTime: {
            type: import('vue').PropType<
              | boolean
              | import('ant-design-vue/lib/vc-picker/panels/TimePanel').SharedTimeProps<
                  import('dayjs').Dayjs
                >
            >;
            default: any;
          };
          locale: {
            type: import('vue').PropType<
              import('ant-design-vue/lib/date-picker/generatePicker').PickerLocale
            >;
          };
          size: {
            type: import('vue').PropType<import('ant-design-vue/lib/button').ButtonSize>;
          };
          bordered: {
            type: BooleanConstructor;
            default: any;
          };
          dateRender: {
            type: import('vue').PropType<
              import('ant-design-vue/lib/vc-picker/panels/DatePanel/DateBody').DateRender<
                import('dayjs').Dayjs
              >
            >;
          };
          disabledDate: {
            type: import('vue').PropType<(date: import('dayjs').Dayjs) => boolean>;
          };
          mode: {
            type: import('vue').PropType<
              import('ant-design-vue/lib/vc-picker/interface').PanelMode
            >;
          };
          picker: {
            type: import('vue').PropType<
              import('ant-design-vue/lib/vc-picker/interface').PickerMode
            >;
          };
          valueFormat: StringConstructor;
          disabledHours: import('vue').PropType<() => number[]>;
          disabledMinutes: import('vue').PropType<(hour: number) => number[]>;
          disabledSeconds: import('vue').PropType<(hour: number, minute: number) => number[]>;
        }>
      >,
      {
        open: boolean;
        disabled: boolean;
        autofocus: boolean;
        defaultOpen: boolean;
        allowClear: boolean;
        bordered: boolean;
        showTime: any;
        showNow: boolean;
        showToday: boolean;
        inputReadOnly: boolean;
      }
    >;
    YearPicker: import('vue').DefineComponent<
      {
        defaultPickerValue: {
          type: import('vue').PropType<string | import('dayjs').Dayjs>;
        };
        defaultValue: {
          type: import('vue').PropType<string | import('dayjs').Dayjs>;
        };
        value: {
          type: import('vue').PropType<string | import('dayjs').Dayjs>;
        };
        disabledTime: {
          type: import('vue').PropType<
            import('ant-design-vue/lib/vc-picker/interface').DisabledTime<import('dayjs').Dayjs>
          >;
        };
        format: {
          type: import('vue').PropType<
            | string
            | import('ant-design-vue/lib/vc-picker/interface').CustomFormat<import('dayjs').Dayjs>
            | (
                | string
                | import('ant-design-vue/lib/vc-picker/interface').CustomFormat<
                    import('dayjs').Dayjs
                  >
              )[]
          >;
        };
        renderExtraFooter: {
          type: import('vue').PropType<
            (
              mode: import('ant-design-vue/lib/vc-picker/interface').PanelMode,
            ) => import('ant-design-vue/lib/_util/type').VueNode
          >;
        };
        showNow: {
          type: BooleanConstructor;
          default: any;
        };
        monthCellRender: {
          type: import('vue').PropType<
            import('ant-design-vue/lib/vc-picker/panels/MonthPanel/MonthBody').MonthCellRender<
              import('dayjs').Dayjs
            >
          >;
        };
        monthCellContentRender: {
          type: import('vue').PropType<
            import('ant-design-vue/lib/vc-picker/panels/MonthPanel/MonthBody').MonthCellRender<
              import('dayjs').Dayjs
            >
          >;
        };
        id: StringConstructor;
        dropdownClassName: StringConstructor;
        dropdownAlign: {
          type: import('vue').PropType<import('ant-design-vue/lib/vc-align/interface').AlignType>;
        };
        popupStyle: {
          type: import('vue').PropType<import('vue').CSSProperties>;
        };
        transitionName: StringConstructor;
        placeholder: StringConstructor;
        allowClear: {
          type: BooleanConstructor;
          default: any;
        };
        autofocus: {
          type: BooleanConstructor;
          default: any;
        };
        disabled: {
          type: BooleanConstructor;
          default: any;
        };
        tabindex: NumberConstructor;
        open: {
          type: BooleanConstructor;
          default: any;
        };
        defaultOpen: {
          type: BooleanConstructor;
          default: any;
        };
        inputReadOnly: {
          type: BooleanConstructor;
          default: any;
        };
        getPopupContainer: {
          type: import('vue').PropType<(node: HTMLElement) => HTMLElement>;
        };
        panelRender: {
          type: import('vue').PropType<
            (
              originPanel: import('ant-design-vue/lib/_util/type').VueNode,
            ) => import('ant-design-vue/lib/_util/type').VueNode
          >;
        };
        onChange: {
          type: import('vue').PropType<
            (value: string | import('dayjs').Dayjs, dateString: string) => void
          >;
        };
        'onUpdate:value': {
          type: import('vue').PropType<(value: string | import('dayjs').Dayjs) => void>;
        };
        onOk: {
          type: import('vue').PropType<(value: string | import('dayjs').Dayjs) => void>;
        };
        onOpenChange: {
          type: import('vue').PropType<(open: boolean) => void>;
        };
        'onUpdate:open': {
          type: import('vue').PropType<(open: boolean) => void>;
        };
        onFocus: {
          type: import('vue').PropType<
            import('ant-design-vue/lib/_util/EventInterface').FocusEventHandler
          >;
        };
        onBlur: {
          type: import('vue').PropType<
            import('ant-design-vue/lib/_util/EventInterface').FocusEventHandler
          >;
        };
        onMousedown: {
          type: import('vue').PropType<
            import('ant-design-vue/lib/_util/EventInterface').MouseEventHandler
          >;
        };
        onMouseup: {
          type: import('vue').PropType<
            import('ant-design-vue/lib/_util/EventInterface').MouseEventHandler
          >;
        };
        onMouseenter: {
          type: import('vue').PropType<
            import('ant-design-vue/lib/_util/EventInterface').MouseEventHandler
          >;
        };
        onMouseleave: {
          type: import('vue').PropType<
            import('ant-design-vue/lib/_util/EventInterface').MouseEventHandler
          >;
        };
        onClick: {
          type: import('vue').PropType<
            import('ant-design-vue/lib/_util/EventInterface').MouseEventHandler
          >;
        };
        onContextmenu: {
          type: import('vue').PropType<
            import('ant-design-vue/lib/_util/EventInterface').MouseEventHandler
          >;
        };
        onKeydown: {
          type: import('vue').PropType<(event: KeyboardEvent, preventDefault: () => void) => void>;
        };
        role: StringConstructor;
        name: StringConstructor;
        autocomplete: StringConstructor;
        direction: {
          type: import('vue').PropType<'rtl' | 'ltr'>;
        };
        showToday: {
          type: BooleanConstructor;
          default: any;
        };
        showTime: {
          type: import('vue').PropType<
            | boolean
            | import('ant-design-vue/lib/vc-picker/panels/TimePanel').SharedTimeProps<
                import('dayjs').Dayjs
              >
          >;
          default: any;
        };
        locale: {
          type: import('vue').PropType<
            import('ant-design-vue/lib/date-picker/generatePicker').PickerLocale
          >;
        };
        size: {
          type: import('vue').PropType<import('ant-design-vue/lib/button').ButtonSize>;
        };
        bordered: {
          type: BooleanConstructor;
          default: any;
        };
        dateRender: {
          type: import('vue').PropType<
            import('ant-design-vue/lib/vc-picker/panels/DatePanel/DateBody').DateRender<
              import('dayjs').Dayjs
            >
          >;
        };
        disabledDate: {
          type: import('vue').PropType<(date: import('dayjs').Dayjs) => boolean>;
        };
        mode: {
          type: import('vue').PropType<import('ant-design-vue/lib/vc-picker/interface').PanelMode>;
        };
        picker: {
          type: import('vue').PropType<import('ant-design-vue/lib/vc-picker/interface').PickerMode>;
        };
        valueFormat: StringConstructor;
        disabledHours: import('vue').PropType<() => number[]>;
        disabledMinutes: import('vue').PropType<(hour: number) => number[]>;
        disabledSeconds: import('vue').PropType<(hour: number, minute: number) => number[]>;
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
          defaultPickerValue: {
            type: import('vue').PropType<string | import('dayjs').Dayjs>;
          };
          defaultValue: {
            type: import('vue').PropType<string | import('dayjs').Dayjs>;
          };
          value: {
            type: import('vue').PropType<string | import('dayjs').Dayjs>;
          };
          disabledTime: {
            type: import('vue').PropType<
              import('ant-design-vue/lib/vc-picker/interface').DisabledTime<import('dayjs').Dayjs>
            >;
          };
          format: {
            type: import('vue').PropType<
              | string
              | import('ant-design-vue/lib/vc-picker/interface').CustomFormat<import('dayjs').Dayjs>
              | (
                  | string
                  | import('ant-design-vue/lib/vc-picker/interface').CustomFormat<
                      import('dayjs').Dayjs
                    >
                )[]
            >;
          };
          renderExtraFooter: {
            type: import('vue').PropType<
              (
                mode: import('ant-design-vue/lib/vc-picker/interface').PanelMode,
              ) => import('ant-design-vue/lib/_util/type').VueNode
            >;
          };
          showNow: {
            type: BooleanConstructor;
            default: any;
          };
          monthCellRender: {
            type: import('vue').PropType<
              import('ant-design-vue/lib/vc-picker/panels/MonthPanel/MonthBody').MonthCellRender<
                import('dayjs').Dayjs
              >
            >;
          };
          monthCellContentRender: {
            type: import('vue').PropType<
              import('ant-design-vue/lib/vc-picker/panels/MonthPanel/MonthBody').MonthCellRender<
                import('dayjs').Dayjs
              >
            >;
          };
          id: StringConstructor;
          dropdownClassName: StringConstructor;
          dropdownAlign: {
            type: import('vue').PropType<import('ant-design-vue/lib/vc-align/interface').AlignType>;
          };
          popupStyle: {
            type: import('vue').PropType<import('vue').CSSProperties>;
          };
          transitionName: StringConstructor;
          placeholder: StringConstructor;
          allowClear: {
            type: BooleanConstructor;
            default: any;
          };
          autofocus: {
            type: BooleanConstructor;
            default: any;
          };
          disabled: {
            type: BooleanConstructor;
            default: any;
          };
          tabindex: NumberConstructor;
          open: {
            type: BooleanConstructor;
            default: any;
          };
          defaultOpen: {
            type: BooleanConstructor;
            default: any;
          };
          inputReadOnly: {
            type: BooleanConstructor;
            default: any;
          };
          getPopupContainer: {
            type: import('vue').PropType<(node: HTMLElement) => HTMLElement>;
          };
          panelRender: {
            type: import('vue').PropType<
              (
                originPanel: import('ant-design-vue/lib/_util/type').VueNode,
              ) => import('ant-design-vue/lib/_util/type').VueNode
            >;
          };
          onChange: {
            type: import('vue').PropType<
              (value: string | import('dayjs').Dayjs, dateString: string) => void
            >;
          };
          'onUpdate:value': {
            type: import('vue').PropType<(value: string | import('dayjs').Dayjs) => void>;
          };
          onOk: {
            type: import('vue').PropType<(value: string | import('dayjs').Dayjs) => void>;
          };
          onOpenChange: {
            type: import('vue').PropType<(open: boolean) => void>;
          };
          'onUpdate:open': {
            type: import('vue').PropType<(open: boolean) => void>;
          };
          onFocus: {
            type: import('vue').PropType<
              import('ant-design-vue/lib/_util/EventInterface').FocusEventHandler
            >;
          };
          onBlur: {
            type: import('vue').PropType<
              import('ant-design-vue/lib/_util/EventInterface').FocusEventHandler
            >;
          };
          onMousedown: {
            type: import('vue').PropType<
              import('ant-design-vue/lib/_util/EventInterface').MouseEventHandler
            >;
          };
          onMouseup: {
            type: import('vue').PropType<
              import('ant-design-vue/lib/_util/EventInterface').MouseEventHandler
            >;
          };
          onMouseenter: {
            type: import('vue').PropType<
              import('ant-design-vue/lib/_util/EventInterface').MouseEventHandler
            >;
          };
          onMouseleave: {
            type: import('vue').PropType<
              import('ant-design-vue/lib/_util/EventInterface').MouseEventHandler
            >;
          };
          onClick: {
            type: import('vue').PropType<
              import('ant-design-vue/lib/_util/EventInterface').MouseEventHandler
            >;
          };
          onContextmenu: {
            type: import('vue').PropType<
              import('ant-design-vue/lib/_util/EventInterface').MouseEventHandler
            >;
          };
          onKeydown: {
            type: import('vue').PropType<
              (event: KeyboardEvent, preventDefault: () => void) => void
            >;
          };
          role: StringConstructor;
          name: StringConstructor;
          autocomplete: StringConstructor;
          direction: {
            type: import('vue').PropType<'rtl' | 'ltr'>;
          };
          showToday: {
            type: BooleanConstructor;
            default: any;
          };
          showTime: {
            type: import('vue').PropType<
              | boolean
              | import('ant-design-vue/lib/vc-picker/panels/TimePanel').SharedTimeProps<
                  import('dayjs').Dayjs
                >
            >;
            default: any;
          };
          locale: {
            type: import('vue').PropType<
              import('ant-design-vue/lib/date-picker/generatePicker').PickerLocale
            >;
          };
          size: {
            type: import('vue').PropType<import('ant-design-vue/lib/button').ButtonSize>;
          };
          bordered: {
            type: BooleanConstructor;
            default: any;
          };
          dateRender: {
            type: import('vue').PropType<
              import('ant-design-vue/lib/vc-picker/panels/DatePanel/DateBody').DateRender<
                import('dayjs').Dayjs
              >
            >;
          };
          disabledDate: {
            type: import('vue').PropType<(date: import('dayjs').Dayjs) => boolean>;
          };
          mode: {
            type: import('vue').PropType<
              import('ant-design-vue/lib/vc-picker/interface').PanelMode
            >;
          };
          picker: {
            type: import('vue').PropType<
              import('ant-design-vue/lib/vc-picker/interface').PickerMode
            >;
          };
          valueFormat: StringConstructor;
          disabledHours: import('vue').PropType<() => number[]>;
          disabledMinutes: import('vue').PropType<(hour: number) => number[]>;
          disabledSeconds: import('vue').PropType<(hour: number, minute: number) => number[]>;
        }>
      >,
      {
        open: boolean;
        disabled: boolean;
        autofocus: boolean;
        defaultOpen: boolean;
        allowClear: boolean;
        bordered: boolean;
        showTime: any;
        showNow: boolean;
        showToday: boolean;
        inputReadOnly: boolean;
      }
    >;
    RangePicker: import('vue').DefineComponent<
      {
        allowEmpty: {
          type: import('vue').PropType<[boolean, boolean]>;
        };
        dateRender: {
          type: import('vue').PropType<
            import('ant-design-vue/lib/vc-picker/RangePicker').RangeDateRender<
              import('dayjs').Dayjs
            >
          >;
        };
        defaultPickerValue: {
          type: import('vue').PropType<
            [string, string] | [import('dayjs').Dayjs, import('dayjs').Dayjs]
          >;
        };
        defaultValue: {
          type: import('vue').PropType<
            [string, string] | [import('dayjs').Dayjs, import('dayjs').Dayjs]
          >;
        };
        value: {
          type: import('vue').PropType<
            [string, string] | [import('dayjs').Dayjs, import('dayjs').Dayjs]
          >;
        };
        disabledTime: {
          type: import('vue').PropType<
            (
              date: import('dayjs').Dayjs,
              type: import('ant-design-vue/lib/vc-picker/RangePicker').RangeType,
            ) => import('ant-design-vue/lib/vc-picker/interface').DisabledTimes
          >;
        };
        disabled: {
          type: import('vue').PropType<boolean | [boolean, boolean]>;
        };
        format: StringConstructor;
        renderExtraFooter: {
          type: import('vue').PropType<() => import('ant-design-vue/lib/_util/type').VueNode>;
        };
        separator: {
          type: StringConstructor;
        };
        ranges: {
          type: import('vue').PropType<
            Record<
              string,
              | [import('dayjs').Dayjs, import('dayjs').Dayjs]
              | (() => [import('dayjs').Dayjs, import('dayjs').Dayjs])
            >
          >;
        };
        placeholder: ArrayConstructor;
        mode: {
          type: import('vue').PropType<
            [
              import('ant-design-vue/lib/vc-picker/interface').PanelMode,
              import('ant-design-vue/lib/vc-picker/interface').PanelMode,
            ]
          >;
        };
        onChange: {
          type: import('vue').PropType<
            (
              value: [string, string] | [import('dayjs').Dayjs, import('dayjs').Dayjs],
              dateString: [string, string],
            ) => void
          >;
        };
        'onUpdate:value': {
          type: import('vue').PropType<
            (value: [string, string] | [import('dayjs').Dayjs, import('dayjs').Dayjs]) => void
          >;
        };
        onCalendarChange: {
          type: import('vue').PropType<
            (
              values: [string, string] | [import('dayjs').Dayjs, import('dayjs').Dayjs],
              formatString: [string, string],
              info: import('ant-design-vue/lib/vc-picker/RangePicker').RangeInfo,
            ) => void
          >;
        };
        onPanelChange: {
          type: import('vue').PropType<
            (
              values: [string, string] | [import('dayjs').Dayjs, import('dayjs').Dayjs],
              modes: [
                import('ant-design-vue/lib/vc-picker/interface').PanelMode,
                import('ant-design-vue/lib/vc-picker/interface').PanelMode,
              ],
            ) => void
          >;
        };
        onOk: {
          type: import('vue').PropType<
            (dates: [string, string] | [import('dayjs').Dayjs, import('dayjs').Dayjs]) => void
          >;
        };
        id: StringConstructor;
        dropdownClassName: StringConstructor;
        dropdownAlign: {
          type: import('vue').PropType<import('ant-design-vue/lib/vc-align/interface').AlignType>;
        };
        popupStyle: {
          type: import('vue').PropType<import('vue').CSSProperties>;
        };
        transitionName: StringConstructor;
        allowClear: {
          type: BooleanConstructor;
          default: any;
        };
        autofocus: {
          type: BooleanConstructor;
          default: any;
        };
        tabindex: NumberConstructor;
        open: {
          type: BooleanConstructor;
          default: any;
        };
        defaultOpen: {
          type: BooleanConstructor;
          default: any;
        };
        inputReadOnly: {
          type: BooleanConstructor;
          default: any;
        };
        getPopupContainer: {
          type: import('vue').PropType<(node: HTMLElement) => HTMLElement>;
        };
        panelRender: {
          type: import('vue').PropType<
            (
              originPanel: import('ant-design-vue/lib/_util/type').VueNode,
            ) => import('ant-design-vue/lib/_util/type').VueNode
          >;
        };
        onOpenChange: {
          type: import('vue').PropType<(open: boolean) => void>;
        };
        'onUpdate:open': {
          type: import('vue').PropType<(open: boolean) => void>;
        };
        onFocus: {
          type: import('vue').PropType<
            import('ant-design-vue/lib/_util/EventInterface').FocusEventHandler
          >;
        };
        onBlur: {
          type: import('vue').PropType<
            import('ant-design-vue/lib/_util/EventInterface').FocusEventHandler
          >;
        };
        onMousedown: {
          type: import('vue').PropType<
            import('ant-design-vue/lib/_util/EventInterface').MouseEventHandler
          >;
        };
        onMouseup: {
          type: import('vue').PropType<
            import('ant-design-vue/lib/_util/EventInterface').MouseEventHandler
          >;
        };
        onMouseenter: {
          type: import('vue').PropType<
            import('ant-design-vue/lib/_util/EventInterface').MouseEventHandler
          >;
        };
        onMouseleave: {
          type: import('vue').PropType<
            import('ant-design-vue/lib/_util/EventInterface').MouseEventHandler
          >;
        };
        onClick: {
          type: import('vue').PropType<
            import('ant-design-vue/lib/_util/EventInterface').MouseEventHandler
          >;
        };
        onContextmenu: {
          type: import('vue').PropType<
            import('ant-design-vue/lib/_util/EventInterface').MouseEventHandler
          >;
        };
        onKeydown: {
          type: import('vue').PropType<(event: KeyboardEvent, preventDefault: () => void) => void>;
        };
        role: StringConstructor;
        name: StringConstructor;
        autocomplete: StringConstructor;
        direction: {
          type: import('vue').PropType<'rtl' | 'ltr'>;
        };
        showToday: {
          type: BooleanConstructor;
          default: any;
        };
        showTime: {
          type: import('vue').PropType<
            | boolean
            | import('ant-design-vue/lib/vc-picker/panels/TimePanel').SharedTimeProps<
                import('dayjs').Dayjs
              >
          >;
          default: any;
        };
        locale: {
          type: import('vue').PropType<
            import('ant-design-vue/lib/date-picker/generatePicker').PickerLocale
          >;
        };
        size: {
          type: import('vue').PropType<import('ant-design-vue/lib/button').ButtonSize>;
        };
        bordered: {
          type: BooleanConstructor;
          default: any;
        };
        disabledDate: {
          type: import('vue').PropType<(date: import('dayjs').Dayjs) => boolean>;
        };
        picker: {
          type: import('vue').PropType<import('ant-design-vue/lib/vc-picker/interface').PickerMode>;
        };
        valueFormat: StringConstructor;
        disabledHours: import('vue').PropType<() => number[]>;
        disabledMinutes: import('vue').PropType<(hour: number) => number[]>;
        disabledSeconds: import('vue').PropType<(hour: number, minute: number) => number[]>;
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
          allowEmpty: {
            type: import('vue').PropType<[boolean, boolean]>;
          };
          dateRender: {
            type: import('vue').PropType<
              import('ant-design-vue/lib/vc-picker/RangePicker').RangeDateRender<
                import('dayjs').Dayjs
              >
            >;
          };
          defaultPickerValue: {
            type: import('vue').PropType<
              [string, string] | [import('dayjs').Dayjs, import('dayjs').Dayjs]
            >;
          };
          defaultValue: {
            type: import('vue').PropType<
              [string, string] | [import('dayjs').Dayjs, import('dayjs').Dayjs]
            >;
          };
          value: {
            type: import('vue').PropType<
              [string, string] | [import('dayjs').Dayjs, import('dayjs').Dayjs]
            >;
          };
          disabledTime: {
            type: import('vue').PropType<
              (
                date: import('dayjs').Dayjs,
                type: import('ant-design-vue/lib/vc-picker/RangePicker').RangeType,
              ) => import('ant-design-vue/lib/vc-picker/interface').DisabledTimes
            >;
          };
          disabled: {
            type: import('vue').PropType<boolean | [boolean, boolean]>;
          };
          format: StringConstructor;
          renderExtraFooter: {
            type: import('vue').PropType<() => import('ant-design-vue/lib/_util/type').VueNode>;
          };
          separator: {
            type: StringConstructor;
          };
          ranges: {
            type: import('vue').PropType<
              Record<
                string,
                | [import('dayjs').Dayjs, import('dayjs').Dayjs]
                | (() => [import('dayjs').Dayjs, import('dayjs').Dayjs])
              >
            >;
          };
          placeholder: ArrayConstructor;
          mode: {
            type: import('vue').PropType<
              [
                import('ant-design-vue/lib/vc-picker/interface').PanelMode,
                import('ant-design-vue/lib/vc-picker/interface').PanelMode,
              ]
            >;
          };
          onChange: {
            type: import('vue').PropType<
              (
                value: [string, string] | [import('dayjs').Dayjs, import('dayjs').Dayjs],
                dateString: [string, string],
              ) => void
            >;
          };
          'onUpdate:value': {
            type: import('vue').PropType<
              (value: [string, string] | [import('dayjs').Dayjs, import('dayjs').Dayjs]) => void
            >;
          };
          onCalendarChange: {
            type: import('vue').PropType<
              (
                values: [string, string] | [import('dayjs').Dayjs, import('dayjs').Dayjs],
                formatString: [string, string],
                info: import('ant-design-vue/lib/vc-picker/RangePicker').RangeInfo,
              ) => void
            >;
          };
          onPanelChange: {
            type: import('vue').PropType<
              (
                values: [string, string] | [import('dayjs').Dayjs, import('dayjs').Dayjs],
                modes: [
                  import('ant-design-vue/lib/vc-picker/interface').PanelMode,
                  import('ant-design-vue/lib/vc-picker/interface').PanelMode,
                ],
              ) => void
            >;
          };
          onOk: {
            type: import('vue').PropType<
              (dates: [string, string] | [import('dayjs').Dayjs, import('dayjs').Dayjs]) => void
            >;
          };
          id: StringConstructor;
          dropdownClassName: StringConstructor;
          dropdownAlign: {
            type: import('vue').PropType<import('ant-design-vue/lib/vc-align/interface').AlignType>;
          };
          popupStyle: {
            type: import('vue').PropType<import('vue').CSSProperties>;
          };
          transitionName: StringConstructor;
          allowClear: {
            type: BooleanConstructor;
            default: any;
          };
          autofocus: {
            type: BooleanConstructor;
            default: any;
          };
          tabindex: NumberConstructor;
          open: {
            type: BooleanConstructor;
            default: any;
          };
          defaultOpen: {
            type: BooleanConstructor;
            default: any;
          };
          inputReadOnly: {
            type: BooleanConstructor;
            default: any;
          };
          getPopupContainer: {
            type: import('vue').PropType<(node: HTMLElement) => HTMLElement>;
          };
          panelRender: {
            type: import('vue').PropType<
              (
                originPanel: import('ant-design-vue/lib/_util/type').VueNode,
              ) => import('ant-design-vue/lib/_util/type').VueNode
            >;
          };
          onOpenChange: {
            type: import('vue').PropType<(open: boolean) => void>;
          };
          'onUpdate:open': {
            type: import('vue').PropType<(open: boolean) => void>;
          };
          onFocus: {
            type: import('vue').PropType<
              import('ant-design-vue/lib/_util/EventInterface').FocusEventHandler
            >;
          };
          onBlur: {
            type: import('vue').PropType<
              import('ant-design-vue/lib/_util/EventInterface').FocusEventHandler
            >;
          };
          onMousedown: {
            type: import('vue').PropType<
              import('ant-design-vue/lib/_util/EventInterface').MouseEventHandler
            >;
          };
          onMouseup: {
            type: import('vue').PropType<
              import('ant-design-vue/lib/_util/EventInterface').MouseEventHandler
            >;
          };
          onMouseenter: {
            type: import('vue').PropType<
              import('ant-design-vue/lib/_util/EventInterface').MouseEventHandler
            >;
          };
          onMouseleave: {
            type: import('vue').PropType<
              import('ant-design-vue/lib/_util/EventInterface').MouseEventHandler
            >;
          };
          onClick: {
            type: import('vue').PropType<
              import('ant-design-vue/lib/_util/EventInterface').MouseEventHandler
            >;
          };
          onContextmenu: {
            type: import('vue').PropType<
              import('ant-design-vue/lib/_util/EventInterface').MouseEventHandler
            >;
          };
          onKeydown: {
            type: import('vue').PropType<
              (event: KeyboardEvent, preventDefault: () => void) => void
            >;
          };
          role: StringConstructor;
          name: StringConstructor;
          autocomplete: StringConstructor;
          direction: {
            type: import('vue').PropType<'rtl' | 'ltr'>;
          };
          showToday: {
            type: BooleanConstructor;
            default: any;
          };
          showTime: {
            type: import('vue').PropType<
              | boolean
              | import('ant-design-vue/lib/vc-picker/panels/TimePanel').SharedTimeProps<
                  import('dayjs').Dayjs
                >
            >;
            default: any;
          };
          locale: {
            type: import('vue').PropType<
              import('ant-design-vue/lib/date-picker/generatePicker').PickerLocale
            >;
          };
          size: {
            type: import('vue').PropType<import('ant-design-vue/lib/button').ButtonSize>;
          };
          bordered: {
            type: BooleanConstructor;
            default: any;
          };
          disabledDate: {
            type: import('vue').PropType<(date: import('dayjs').Dayjs) => boolean>;
          };
          picker: {
            type: import('vue').PropType<
              import('ant-design-vue/lib/vc-picker/interface').PickerMode
            >;
          };
          valueFormat: StringConstructor;
          disabledHours: import('vue').PropType<() => number[]>;
          disabledMinutes: import('vue').PropType<(hour: number) => number[]>;
          disabledSeconds: import('vue').PropType<(hour: number, minute: number) => number[]>;
        }>
      >,
      {
        open: boolean;
        autofocus: boolean;
        defaultOpen: boolean;
        allowClear: boolean;
        bordered: boolean;
        showTime: any;
        showToday: boolean;
        inputReadOnly: boolean;
      }
    >;
    TimePicker: import('vue').DefineComponent<
      {
        defaultPickerValue: {
          type: import('vue').PropType<string | import('dayjs').Dayjs>;
        };
        defaultValue: {
          type: import('vue').PropType<string | import('dayjs').Dayjs>;
        };
        value: {
          type: import('vue').PropType<string | import('dayjs').Dayjs>;
        };
        disabledTime: {
          type: import('vue').PropType<
            import('ant-design-vue/lib/vc-picker/interface').DisabledTime<import('dayjs').Dayjs>
          >;
        };
        format: {
          type: import('vue').PropType<
            | string
            | import('ant-design-vue/lib/vc-picker/interface').CustomFormat<import('dayjs').Dayjs>
            | (
                | string
                | import('ant-design-vue/lib/vc-picker/interface').CustomFormat<
                    import('dayjs').Dayjs
                  >
              )[]
          >;
        };
        renderExtraFooter: {
          type: import('vue').PropType<
            (
              mode: import('ant-design-vue/lib/vc-picker/interface').PanelMode,
            ) => import('ant-design-vue/lib/_util/type').VueNode
          >;
        };
        showNow: {
          type: BooleanConstructor;
          default: any;
        };
        monthCellRender: {
          type: import('vue').PropType<
            import('ant-design-vue/lib/vc-picker/panels/MonthPanel/MonthBody').MonthCellRender<
              import('dayjs').Dayjs
            >
          >;
        };
        monthCellContentRender: {
          type: import('vue').PropType<
            import('ant-design-vue/lib/vc-picker/panels/MonthPanel/MonthBody').MonthCellRender<
              import('dayjs').Dayjs
            >
          >;
        };
        id: StringConstructor;
        dropdownClassName: StringConstructor;
        dropdownAlign: {
          type: import('vue').PropType<import('ant-design-vue/lib/vc-align/interface').AlignType>;
        };
        popupStyle: {
          type: import('vue').PropType<import('vue').CSSProperties>;
        };
        transitionName: StringConstructor;
        placeholder: StringConstructor;
        allowClear: {
          type: BooleanConstructor;
          default: any;
        };
        autofocus: {
          type: BooleanConstructor;
          default: any;
        };
        disabled: {
          type: BooleanConstructor;
          default: any;
        };
        tabindex: NumberConstructor;
        open: {
          type: BooleanConstructor;
          default: any;
        };
        defaultOpen: {
          type: BooleanConstructor;
          default: any;
        };
        inputReadOnly: {
          type: BooleanConstructor;
          default: any;
        };
        getPopupContainer: {
          type: import('vue').PropType<(node: HTMLElement) => HTMLElement>;
        };
        panelRender: {
          type: import('vue').PropType<
            (
              originPanel: import('ant-design-vue/lib/_util/type').VueNode,
            ) => import('ant-design-vue/lib/_util/type').VueNode
          >;
        };
        onChange: {
          type: import('vue').PropType<
            (value: string | import('dayjs').Dayjs, dateString: string) => void
          >;
        };
        'onUpdate:value': {
          type: import('vue').PropType<(value: string | import('dayjs').Dayjs) => void>;
        };
        onOk: {
          type: import('vue').PropType<(value: string | import('dayjs').Dayjs) => void>;
        };
        onOpenChange: {
          type: import('vue').PropType<(open: boolean) => void>;
        };
        'onUpdate:open': {
          type: import('vue').PropType<(open: boolean) => void>;
        };
        onFocus: {
          type: import('vue').PropType<
            import('ant-design-vue/lib/_util/EventInterface').FocusEventHandler
          >;
        };
        onBlur: {
          type: import('vue').PropType<
            import('ant-design-vue/lib/_util/EventInterface').FocusEventHandler
          >;
        };
        onMousedown: {
          type: import('vue').PropType<
            import('ant-design-vue/lib/_util/EventInterface').MouseEventHandler
          >;
        };
        onMouseup: {
          type: import('vue').PropType<
            import('ant-design-vue/lib/_util/EventInterface').MouseEventHandler
          >;
        };
        onMouseenter: {
          type: import('vue').PropType<
            import('ant-design-vue/lib/_util/EventInterface').MouseEventHandler
          >;
        };
        onMouseleave: {
          type: import('vue').PropType<
            import('ant-design-vue/lib/_util/EventInterface').MouseEventHandler
          >;
        };
        onClick: {
          type: import('vue').PropType<
            import('ant-design-vue/lib/_util/EventInterface').MouseEventHandler
          >;
        };
        onContextmenu: {
          type: import('vue').PropType<
            import('ant-design-vue/lib/_util/EventInterface').MouseEventHandler
          >;
        };
        onKeydown: {
          type: import('vue').PropType<(event: KeyboardEvent, preventDefault: () => void) => void>;
        };
        role: StringConstructor;
        name: StringConstructor;
        autocomplete: StringConstructor;
        direction: {
          type: import('vue').PropType<'rtl' | 'ltr'>;
        };
        showToday: {
          type: BooleanConstructor;
          default: any;
        };
        showTime: {
          type: import('vue').PropType<
            | boolean
            | import('ant-design-vue/lib/vc-picker/panels/TimePanel').SharedTimeProps<
                import('dayjs').Dayjs
              >
          >;
          default: any;
        };
        locale: {
          type: import('vue').PropType<
            import('ant-design-vue/lib/date-picker/generatePicker').PickerLocale
          >;
        };
        size: {
          type: import('vue').PropType<import('ant-design-vue/lib/button').ButtonSize>;
        };
        bordered: {
          type: BooleanConstructor;
          default: any;
        };
        dateRender: {
          type: import('vue').PropType<
            import('ant-design-vue/lib/vc-picker/panels/DatePanel/DateBody').DateRender<
              import('dayjs').Dayjs
            >
          >;
        };
        disabledDate: {
          type: import('vue').PropType<(date: import('dayjs').Dayjs) => boolean>;
        };
        mode: {
          type: import('vue').PropType<import('ant-design-vue/lib/vc-picker/interface').PanelMode>;
        };
        picker: {
          type: import('vue').PropType<import('ant-design-vue/lib/vc-picker/interface').PickerMode>;
        };
        valueFormat: StringConstructor;
        disabledHours: import('vue').PropType<() => number[]>;
        disabledMinutes: import('vue').PropType<(hour: number) => number[]>;
        disabledSeconds: import('vue').PropType<(hour: number, minute: number) => number[]>;
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
          defaultPickerValue: {
            type: import('vue').PropType<string | import('dayjs').Dayjs>;
          };
          defaultValue: {
            type: import('vue').PropType<string | import('dayjs').Dayjs>;
          };
          value: {
            type: import('vue').PropType<string | import('dayjs').Dayjs>;
          };
          disabledTime: {
            type: import('vue').PropType<
              import('ant-design-vue/lib/vc-picker/interface').DisabledTime<import('dayjs').Dayjs>
            >;
          };
          format: {
            type: import('vue').PropType<
              | string
              | import('ant-design-vue/lib/vc-picker/interface').CustomFormat<import('dayjs').Dayjs>
              | (
                  | string
                  | import('ant-design-vue/lib/vc-picker/interface').CustomFormat<
                      import('dayjs').Dayjs
                    >
                )[]
            >;
          };
          renderExtraFooter: {
            type: import('vue').PropType<
              (
                mode: import('ant-design-vue/lib/vc-picker/interface').PanelMode,
              ) => import('ant-design-vue/lib/_util/type').VueNode
            >;
          };
          showNow: {
            type: BooleanConstructor;
            default: any;
          };
          monthCellRender: {
            type: import('vue').PropType<
              import('ant-design-vue/lib/vc-picker/panels/MonthPanel/MonthBody').MonthCellRender<
                import('dayjs').Dayjs
              >
            >;
          };
          monthCellContentRender: {
            type: import('vue').PropType<
              import('ant-design-vue/lib/vc-picker/panels/MonthPanel/MonthBody').MonthCellRender<
                import('dayjs').Dayjs
              >
            >;
          };
          id: StringConstructor;
          dropdownClassName: StringConstructor;
          dropdownAlign: {
            type: import('vue').PropType<import('ant-design-vue/lib/vc-align/interface').AlignType>;
          };
          popupStyle: {
            type: import('vue').PropType<import('vue').CSSProperties>;
          };
          transitionName: StringConstructor;
          placeholder: StringConstructor;
          allowClear: {
            type: BooleanConstructor;
            default: any;
          };
          autofocus: {
            type: BooleanConstructor;
            default: any;
          };
          disabled: {
            type: BooleanConstructor;
            default: any;
          };
          tabindex: NumberConstructor;
          open: {
            type: BooleanConstructor;
            default: any;
          };
          defaultOpen: {
            type: BooleanConstructor;
            default: any;
          };
          inputReadOnly: {
            type: BooleanConstructor;
            default: any;
          };
          getPopupContainer: {
            type: import('vue').PropType<(node: HTMLElement) => HTMLElement>;
          };
          panelRender: {
            type: import('vue').PropType<
              (
                originPanel: import('ant-design-vue/lib/_util/type').VueNode,
              ) => import('ant-design-vue/lib/_util/type').VueNode
            >;
          };
          onChange: {
            type: import('vue').PropType<
              (value: string | import('dayjs').Dayjs, dateString: string) => void
            >;
          };
          'onUpdate:value': {
            type: import('vue').PropType<(value: string | import('dayjs').Dayjs) => void>;
          };
          onOk: {
            type: import('vue').PropType<(value: string | import('dayjs').Dayjs) => void>;
          };
          onOpenChange: {
            type: import('vue').PropType<(open: boolean) => void>;
          };
          'onUpdate:open': {
            type: import('vue').PropType<(open: boolean) => void>;
          };
          onFocus: {
            type: import('vue').PropType<
              import('ant-design-vue/lib/_util/EventInterface').FocusEventHandler
            >;
          };
          onBlur: {
            type: import('vue').PropType<
              import('ant-design-vue/lib/_util/EventInterface').FocusEventHandler
            >;
          };
          onMousedown: {
            type: import('vue').PropType<
              import('ant-design-vue/lib/_util/EventInterface').MouseEventHandler
            >;
          };
          onMouseup: {
            type: import('vue').PropType<
              import('ant-design-vue/lib/_util/EventInterface').MouseEventHandler
            >;
          };
          onMouseenter: {
            type: import('vue').PropType<
              import('ant-design-vue/lib/_util/EventInterface').MouseEventHandler
            >;
          };
          onMouseleave: {
            type: import('vue').PropType<
              import('ant-design-vue/lib/_util/EventInterface').MouseEventHandler
            >;
          };
          onClick: {
            type: import('vue').PropType<
              import('ant-design-vue/lib/_util/EventInterface').MouseEventHandler
            >;
          };
          onContextmenu: {
            type: import('vue').PropType<
              import('ant-design-vue/lib/_util/EventInterface').MouseEventHandler
            >;
          };
          onKeydown: {
            type: import('vue').PropType<
              (event: KeyboardEvent, preventDefault: () => void) => void
            >;
          };
          role: StringConstructor;
          name: StringConstructor;
          autocomplete: StringConstructor;
          direction: {
            type: import('vue').PropType<'rtl' | 'ltr'>;
          };
          showToday: {
            type: BooleanConstructor;
            default: any;
          };
          showTime: {
            type: import('vue').PropType<
              | boolean
              | import('ant-design-vue/lib/vc-picker/panels/TimePanel').SharedTimeProps<
                  import('dayjs').Dayjs
                >
            >;
            default: any;
          };
          locale: {
            type: import('vue').PropType<
              import('ant-design-vue/lib/date-picker/generatePicker').PickerLocale
            >;
          };
          size: {
            type: import('vue').PropType<import('ant-design-vue/lib/button').ButtonSize>;
          };
          bordered: {
            type: BooleanConstructor;
            default: any;
          };
          dateRender: {
            type: import('vue').PropType<
              import('ant-design-vue/lib/vc-picker/panels/DatePanel/DateBody').DateRender<
                import('dayjs').Dayjs
              >
            >;
          };
          disabledDate: {
            type: import('vue').PropType<(date: import('dayjs').Dayjs) => boolean>;
          };
          mode: {
            type: import('vue').PropType<
              import('ant-design-vue/lib/vc-picker/interface').PanelMode
            >;
          };
          picker: {
            type: import('vue').PropType<
              import('ant-design-vue/lib/vc-picker/interface').PickerMode
            >;
          };
          valueFormat: StringConstructor;
          disabledHours: import('vue').PropType<() => number[]>;
          disabledMinutes: import('vue').PropType<(hour: number) => number[]>;
          disabledSeconds: import('vue').PropType<(hour: number, minute: number) => number[]>;
        }>
      >,
      {
        open: boolean;
        disabled: boolean;
        autofocus: boolean;
        defaultOpen: boolean;
        allowClear: boolean;
        bordered: boolean;
        showTime: any;
        showNow: boolean;
        showToday: boolean;
        inputReadOnly: boolean;
      }
    >;
    QuarterPicker: import('vue').DefineComponent<
      {
        defaultPickerValue: {
          type: import('vue').PropType<string | import('dayjs').Dayjs>;
        };
        defaultValue: {
          type: import('vue').PropType<string | import('dayjs').Dayjs>;
        };
        value: {
          type: import('vue').PropType<string | import('dayjs').Dayjs>;
        };
        disabledTime: {
          type: import('vue').PropType<
            import('ant-design-vue/lib/vc-picker/interface').DisabledTime<import('dayjs').Dayjs>
          >;
        };
        format: {
          type: import('vue').PropType<
            | string
            | import('ant-design-vue/lib/vc-picker/interface').CustomFormat<import('dayjs').Dayjs>
            | (
                | string
                | import('ant-design-vue/lib/vc-picker/interface').CustomFormat<
                    import('dayjs').Dayjs
                  >
              )[]
          >;
        };
        renderExtraFooter: {
          type: import('vue').PropType<
            (
              mode: import('ant-design-vue/lib/vc-picker/interface').PanelMode,
            ) => import('ant-design-vue/lib/_util/type').VueNode
          >;
        };
        showNow: {
          type: BooleanConstructor;
          default: any;
        };
        monthCellRender: {
          type: import('vue').PropType<
            import('ant-design-vue/lib/vc-picker/panels/MonthPanel/MonthBody').MonthCellRender<
              import('dayjs').Dayjs
            >
          >;
        };
        monthCellContentRender: {
          type: import('vue').PropType<
            import('ant-design-vue/lib/vc-picker/panels/MonthPanel/MonthBody').MonthCellRender<
              import('dayjs').Dayjs
            >
          >;
        };
        id: StringConstructor;
        dropdownClassName: StringConstructor;
        dropdownAlign: {
          type: import('vue').PropType<import('ant-design-vue/lib/vc-align/interface').AlignType>;
        };
        popupStyle: {
          type: import('vue').PropType<import('vue').CSSProperties>;
        };
        transitionName: StringConstructor;
        placeholder: StringConstructor;
        allowClear: {
          type: BooleanConstructor;
          default: any;
        };
        autofocus: {
          type: BooleanConstructor;
          default: any;
        };
        disabled: {
          type: BooleanConstructor;
          default: any;
        };
        tabindex: NumberConstructor;
        open: {
          type: BooleanConstructor;
          default: any;
        };
        defaultOpen: {
          type: BooleanConstructor;
          default: any;
        };
        inputReadOnly: {
          type: BooleanConstructor;
          default: any;
        };
        getPopupContainer: {
          type: import('vue').PropType<(node: HTMLElement) => HTMLElement>;
        };
        panelRender: {
          type: import('vue').PropType<
            (
              originPanel: import('ant-design-vue/lib/_util/type').VueNode,
            ) => import('ant-design-vue/lib/_util/type').VueNode
          >;
        };
        onChange: {
          type: import('vue').PropType<
            (value: string | import('dayjs').Dayjs, dateString: string) => void
          >;
        };
        'onUpdate:value': {
          type: import('vue').PropType<(value: string | import('dayjs').Dayjs) => void>;
        };
        onOk: {
          type: import('vue').PropType<(value: string | import('dayjs').Dayjs) => void>;
        };
        onOpenChange: {
          type: import('vue').PropType<(open: boolean) => void>;
        };
        'onUpdate:open': {
          type: import('vue').PropType<(open: boolean) => void>;
        };
        onFocus: {
          type: import('vue').PropType<
            import('ant-design-vue/lib/_util/EventInterface').FocusEventHandler
          >;
        };
        onBlur: {
          type: import('vue').PropType<
            import('ant-design-vue/lib/_util/EventInterface').FocusEventHandler
          >;
        };
        onMousedown: {
          type: import('vue').PropType<
            import('ant-design-vue/lib/_util/EventInterface').MouseEventHandler
          >;
        };
        onMouseup: {
          type: import('vue').PropType<
            import('ant-design-vue/lib/_util/EventInterface').MouseEventHandler
          >;
        };
        onMouseenter: {
          type: import('vue').PropType<
            import('ant-design-vue/lib/_util/EventInterface').MouseEventHandler
          >;
        };
        onMouseleave: {
          type: import('vue').PropType<
            import('ant-design-vue/lib/_util/EventInterface').MouseEventHandler
          >;
        };
        onClick: {
          type: import('vue').PropType<
            import('ant-design-vue/lib/_util/EventInterface').MouseEventHandler
          >;
        };
        onContextmenu: {
          type: import('vue').PropType<
            import('ant-design-vue/lib/_util/EventInterface').MouseEventHandler
          >;
        };
        onKeydown: {
          type: import('vue').PropType<(event: KeyboardEvent, preventDefault: () => void) => void>;
        };
        role: StringConstructor;
        name: StringConstructor;
        autocomplete: StringConstructor;
        direction: {
          type: import('vue').PropType<'rtl' | 'ltr'>;
        };
        showToday: {
          type: BooleanConstructor;
          default: any;
        };
        showTime: {
          type: import('vue').PropType<
            | boolean
            | import('ant-design-vue/lib/vc-picker/panels/TimePanel').SharedTimeProps<
                import('dayjs').Dayjs
              >
          >;
          default: any;
        };
        locale: {
          type: import('vue').PropType<
            import('ant-design-vue/lib/date-picker/generatePicker').PickerLocale
          >;
        };
        size: {
          type: import('vue').PropType<import('ant-design-vue/lib/button').ButtonSize>;
        };
        bordered: {
          type: BooleanConstructor;
          default: any;
        };
        dateRender: {
          type: import('vue').PropType<
            import('ant-design-vue/lib/vc-picker/panels/DatePanel/DateBody').DateRender<
              import('dayjs').Dayjs
            >
          >;
        };
        disabledDate: {
          type: import('vue').PropType<(date: import('dayjs').Dayjs) => boolean>;
        };
        mode: {
          type: import('vue').PropType<import('ant-design-vue/lib/vc-picker/interface').PanelMode>;
        };
        picker: {
          type: import('vue').PropType<import('ant-design-vue/lib/vc-picker/interface').PickerMode>;
        };
        valueFormat: StringConstructor;
        disabledHours: import('vue').PropType<() => number[]>;
        disabledMinutes: import('vue').PropType<(hour: number) => number[]>;
        disabledSeconds: import('vue').PropType<(hour: number, minute: number) => number[]>;
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
          defaultPickerValue: {
            type: import('vue').PropType<string | import('dayjs').Dayjs>;
          };
          defaultValue: {
            type: import('vue').PropType<string | import('dayjs').Dayjs>;
          };
          value: {
            type: import('vue').PropType<string | import('dayjs').Dayjs>;
          };
          disabledTime: {
            type: import('vue').PropType<
              import('ant-design-vue/lib/vc-picker/interface').DisabledTime<import('dayjs').Dayjs>
            >;
          };
          format: {
            type: import('vue').PropType<
              | string
              | import('ant-design-vue/lib/vc-picker/interface').CustomFormat<import('dayjs').Dayjs>
              | (
                  | string
                  | import('ant-design-vue/lib/vc-picker/interface').CustomFormat<
                      import('dayjs').Dayjs
                    >
                )[]
            >;
          };
          renderExtraFooter: {
            type: import('vue').PropType<
              (
                mode: import('ant-design-vue/lib/vc-picker/interface').PanelMode,
              ) => import('ant-design-vue/lib/_util/type').VueNode
            >;
          };
          showNow: {
            type: BooleanConstructor;
            default: any;
          };
          monthCellRender: {
            type: import('vue').PropType<
              import('ant-design-vue/lib/vc-picker/panels/MonthPanel/MonthBody').MonthCellRender<
                import('dayjs').Dayjs
              >
            >;
          };
          monthCellContentRender: {
            type: import('vue').PropType<
              import('ant-design-vue/lib/vc-picker/panels/MonthPanel/MonthBody').MonthCellRender<
                import('dayjs').Dayjs
              >
            >;
          };
          id: StringConstructor;
          dropdownClassName: StringConstructor;
          dropdownAlign: {
            type: import('vue').PropType<import('ant-design-vue/lib/vc-align/interface').AlignType>;
          };
          popupStyle: {
            type: import('vue').PropType<import('vue').CSSProperties>;
          };
          transitionName: StringConstructor;
          placeholder: StringConstructor;
          allowClear: {
            type: BooleanConstructor;
            default: any;
          };
          autofocus: {
            type: BooleanConstructor;
            default: any;
          };
          disabled: {
            type: BooleanConstructor;
            default: any;
          };
          tabindex: NumberConstructor;
          open: {
            type: BooleanConstructor;
            default: any;
          };
          defaultOpen: {
            type: BooleanConstructor;
            default: any;
          };
          inputReadOnly: {
            type: BooleanConstructor;
            default: any;
          };
          getPopupContainer: {
            type: import('vue').PropType<(node: HTMLElement) => HTMLElement>;
          };
          panelRender: {
            type: import('vue').PropType<
              (
                originPanel: import('ant-design-vue/lib/_util/type').VueNode,
              ) => import('ant-design-vue/lib/_util/type').VueNode
            >;
          };
          onChange: {
            type: import('vue').PropType<
              (value: string | import('dayjs').Dayjs, dateString: string) => void
            >;
          };
          'onUpdate:value': {
            type: import('vue').PropType<(value: string | import('dayjs').Dayjs) => void>;
          };
          onOk: {
            type: import('vue').PropType<(value: string | import('dayjs').Dayjs) => void>;
          };
          onOpenChange: {
            type: import('vue').PropType<(open: boolean) => void>;
          };
          'onUpdate:open': {
            type: import('vue').PropType<(open: boolean) => void>;
          };
          onFocus: {
            type: import('vue').PropType<
              import('ant-design-vue/lib/_util/EventInterface').FocusEventHandler
            >;
          };
          onBlur: {
            type: import('vue').PropType<
              import('ant-design-vue/lib/_util/EventInterface').FocusEventHandler
            >;
          };
          onMousedown: {
            type: import('vue').PropType<
              import('ant-design-vue/lib/_util/EventInterface').MouseEventHandler
            >;
          };
          onMouseup: {
            type: import('vue').PropType<
              import('ant-design-vue/lib/_util/EventInterface').MouseEventHandler
            >;
          };
          onMouseenter: {
            type: import('vue').PropType<
              import('ant-design-vue/lib/_util/EventInterface').MouseEventHandler
            >;
          };
          onMouseleave: {
            type: import('vue').PropType<
              import('ant-design-vue/lib/_util/EventInterface').MouseEventHandler
            >;
          };
          onClick: {
            type: import('vue').PropType<
              import('ant-design-vue/lib/_util/EventInterface').MouseEventHandler
            >;
          };
          onContextmenu: {
            type: import('vue').PropType<
              import('ant-design-vue/lib/_util/EventInterface').MouseEventHandler
            >;
          };
          onKeydown: {
            type: import('vue').PropType<
              (event: KeyboardEvent, preventDefault: () => void) => void
            >;
          };
          role: StringConstructor;
          name: StringConstructor;
          autocomplete: StringConstructor;
          direction: {
            type: import('vue').PropType<'rtl' | 'ltr'>;
          };
          showToday: {
            type: BooleanConstructor;
            default: any;
          };
          showTime: {
            type: import('vue').PropType<
              | boolean
              | import('ant-design-vue/lib/vc-picker/panels/TimePanel').SharedTimeProps<
                  import('dayjs').Dayjs
                >
            >;
            default: any;
          };
          locale: {
            type: import('vue').PropType<
              import('ant-design-vue/lib/date-picker/generatePicker').PickerLocale
            >;
          };
          size: {
            type: import('vue').PropType<import('ant-design-vue/lib/button').ButtonSize>;
          };
          bordered: {
            type: BooleanConstructor;
            default: any;
          };
          dateRender: {
            type: import('vue').PropType<
              import('ant-design-vue/lib/vc-picker/panels/DatePanel/DateBody').DateRender<
                import('dayjs').Dayjs
              >
            >;
          };
          disabledDate: {
            type: import('vue').PropType<(date: import('dayjs').Dayjs) => boolean>;
          };
          mode: {
            type: import('vue').PropType<
              import('ant-design-vue/lib/vc-picker/interface').PanelMode
            >;
          };
          picker: {
            type: import('vue').PropType<
              import('ant-design-vue/lib/vc-picker/interface').PickerMode
            >;
          };
          valueFormat: StringConstructor;
          disabledHours: import('vue').PropType<() => number[]>;
          disabledMinutes: import('vue').PropType<(hour: number) => number[]>;
          disabledSeconds: import('vue').PropType<(hour: number, minute: number) => number[]>;
        }>
      >,
      {
        open: boolean;
        disabled: boolean;
        autofocus: boolean;
        defaultOpen: boolean;
        allowClear: boolean;
        bordered: boolean;
        showTime: any;
        showNow: boolean;
        showToday: boolean;
        inputReadOnly: boolean;
      }
    >;
    install: (app: import('vue').App<any>) => import('vue').App<any>;
  };
export declare const _RangePicker: import('vue').DefineComponent<
  {
    allowEmpty: {
      type: import('vue').PropType<[boolean, boolean]>;
    };
    dateRender: {
      type: import('vue').PropType<
        import('ant-design-vue/lib/vc-picker/RangePicker').RangeDateRender<import('dayjs').Dayjs>
      >;
    };
    defaultPickerValue: {
      type: import('vue').PropType<
        [string, string] | [import('dayjs').Dayjs, import('dayjs').Dayjs]
      >;
    };
    defaultValue: {
      type: import('vue').PropType<
        [string, string] | [import('dayjs').Dayjs, import('dayjs').Dayjs]
      >;
    };
    value: {
      type: import('vue').PropType<
        [string, string] | [import('dayjs').Dayjs, import('dayjs').Dayjs]
      >;
    };
    disabledTime: {
      type: import('vue').PropType<
        (
          date: import('dayjs').Dayjs,
          type: import('ant-design-vue/lib/vc-picker/RangePicker').RangeType,
        ) => import('ant-design-vue/lib/vc-picker/interface').DisabledTimes
      >;
    };
    disabled: {
      type: import('vue').PropType<boolean | [boolean, boolean]>;
    };
    format: StringConstructor;
    renderExtraFooter: {
      type: import('vue').PropType<() => import('ant-design-vue/lib/_util/type').VueNode>;
    };
    separator: {
      type: StringConstructor;
    };
    ranges: {
      type: import('vue').PropType<
        Record<
          string,
          | [import('dayjs').Dayjs, import('dayjs').Dayjs]
          | (() => [import('dayjs').Dayjs, import('dayjs').Dayjs])
        >
      >;
    };
    placeholder: ArrayConstructor;
    mode: {
      type: import('vue').PropType<
        [
          import('ant-design-vue/lib/vc-picker/interface').PanelMode,
          import('ant-design-vue/lib/vc-picker/interface').PanelMode,
        ]
      >;
    };
    onChange: {
      type: import('vue').PropType<
        (
          value: [string, string] | [import('dayjs').Dayjs, import('dayjs').Dayjs],
          dateString: [string, string],
        ) => void
      >;
    };
    'onUpdate:value': {
      type: import('vue').PropType<
        (value: [string, string] | [import('dayjs').Dayjs, import('dayjs').Dayjs]) => void
      >;
    };
    onCalendarChange: {
      type: import('vue').PropType<
        (
          values: [string, string] | [import('dayjs').Dayjs, import('dayjs').Dayjs],
          formatString: [string, string],
          info: import('ant-design-vue/lib/vc-picker/RangePicker').RangeInfo,
        ) => void
      >;
    };
    onPanelChange: {
      type: import('vue').PropType<
        (
          values: [string, string] | [import('dayjs').Dayjs, import('dayjs').Dayjs],
          modes: [
            import('ant-design-vue/lib/vc-picker/interface').PanelMode,
            import('ant-design-vue/lib/vc-picker/interface').PanelMode,
          ],
        ) => void
      >;
    };
    onOk: {
      type: import('vue').PropType<
        (dates: [string, string] | [import('dayjs').Dayjs, import('dayjs').Dayjs]) => void
      >;
    };
    id: StringConstructor;
    dropdownClassName: StringConstructor;
    dropdownAlign: {
      type: import('vue').PropType<import('ant-design-vue/lib/vc-align/interface').AlignType>;
    };
    popupStyle: {
      type: import('vue').PropType<import('vue').CSSProperties>;
    };
    transitionName: StringConstructor;
    allowClear: {
      type: BooleanConstructor;
      default: any;
    };
    autofocus: {
      type: BooleanConstructor;
      default: any;
    };
    tabindex: NumberConstructor;
    open: {
      type: BooleanConstructor;
      default: any;
    };
    defaultOpen: {
      type: BooleanConstructor;
      default: any;
    };
    inputReadOnly: {
      type: BooleanConstructor;
      default: any;
    };
    getPopupContainer: {
      type: import('vue').PropType<(node: HTMLElement) => HTMLElement>;
    };
    panelRender: {
      type: import('vue').PropType<
        (
          originPanel: import('ant-design-vue/lib/_util/type').VueNode,
        ) => import('ant-design-vue/lib/_util/type').VueNode
      >;
    };
    onOpenChange: {
      type: import('vue').PropType<(open: boolean) => void>;
    };
    'onUpdate:open': {
      type: import('vue').PropType<(open: boolean) => void>;
    };
    onFocus: {
      type: import('vue').PropType<
        import('ant-design-vue/lib/_util/EventInterface').FocusEventHandler
      >;
    };
    onBlur: {
      type: import('vue').PropType<
        import('ant-design-vue/lib/_util/EventInterface').FocusEventHandler
      >;
    };
    onMousedown: {
      type: import('vue').PropType<
        import('ant-design-vue/lib/_util/EventInterface').MouseEventHandler
      >;
    };
    onMouseup: {
      type: import('vue').PropType<
        import('ant-design-vue/lib/_util/EventInterface').MouseEventHandler
      >;
    };
    onMouseenter: {
      type: import('vue').PropType<
        import('ant-design-vue/lib/_util/EventInterface').MouseEventHandler
      >;
    };
    onMouseleave: {
      type: import('vue').PropType<
        import('ant-design-vue/lib/_util/EventInterface').MouseEventHandler
      >;
    };
    onClick: {
      type: import('vue').PropType<
        import('ant-design-vue/lib/_util/EventInterface').MouseEventHandler
      >;
    };
    onContextmenu: {
      type: import('vue').PropType<
        import('ant-design-vue/lib/_util/EventInterface').MouseEventHandler
      >;
    };
    onKeydown: {
      type: import('vue').PropType<(event: KeyboardEvent, preventDefault: () => void) => void>;
    };
    role: StringConstructor;
    name: StringConstructor;
    autocomplete: StringConstructor;
    direction: {
      type: import('vue').PropType<'rtl' | 'ltr'>;
    };
    showToday: {
      type: BooleanConstructor;
      default: any;
    };
    showTime: {
      type: import('vue').PropType<
        | boolean
        | import('ant-design-vue/lib/vc-picker/panels/TimePanel').SharedTimeProps<
            import('dayjs').Dayjs
          >
      >;
      default: any;
    };
    locale: {
      type: import('vue').PropType<
        import('ant-design-vue/lib/date-picker/generatePicker').PickerLocale
      >;
    };
    size: {
      type: import('vue').PropType<import('ant-design-vue/lib/button').ButtonSize>;
    };
    bordered: {
      type: BooleanConstructor;
      default: any;
    };
    disabledDate: {
      type: import('vue').PropType<(date: import('dayjs').Dayjs) => boolean>;
    };
    picker: {
      type: import('vue').PropType<import('ant-design-vue/lib/vc-picker/interface').PickerMode>;
    };
    valueFormat: StringConstructor;
    disabledHours: import('vue').PropType<() => number[]>;
    disabledMinutes: import('vue').PropType<(hour: number) => number[]>;
    disabledSeconds: import('vue').PropType<(hour: number, minute: number) => number[]>;
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
      allowEmpty: {
        type: import('vue').PropType<[boolean, boolean]>;
      };
      dateRender: {
        type: import('vue').PropType<
          import('ant-design-vue/lib/vc-picker/RangePicker').RangeDateRender<import('dayjs').Dayjs>
        >;
      };
      defaultPickerValue: {
        type: import('vue').PropType<
          [string, string] | [import('dayjs').Dayjs, import('dayjs').Dayjs]
        >;
      };
      defaultValue: {
        type: import('vue').PropType<
          [string, string] | [import('dayjs').Dayjs, import('dayjs').Dayjs]
        >;
      };
      value: {
        type: import('vue').PropType<
          [string, string] | [import('dayjs').Dayjs, import('dayjs').Dayjs]
        >;
      };
      disabledTime: {
        type: import('vue').PropType<
          (
            date: import('dayjs').Dayjs,
            type: import('ant-design-vue/lib/vc-picker/RangePicker').RangeType,
          ) => import('ant-design-vue/lib/vc-picker/interface').DisabledTimes
        >;
      };
      disabled: {
        type: import('vue').PropType<boolean | [boolean, boolean]>;
      };
      format: StringConstructor;
      renderExtraFooter: {
        type: import('vue').PropType<() => import('ant-design-vue/lib/_util/type').VueNode>;
      };
      separator: {
        type: StringConstructor;
      };
      ranges: {
        type: import('vue').PropType<
          Record<
            string,
            | [import('dayjs').Dayjs, import('dayjs').Dayjs]
            | (() => [import('dayjs').Dayjs, import('dayjs').Dayjs])
          >
        >;
      };
      placeholder: ArrayConstructor;
      mode: {
        type: import('vue').PropType<
          [
            import('ant-design-vue/lib/vc-picker/interface').PanelMode,
            import('ant-design-vue/lib/vc-picker/interface').PanelMode,
          ]
        >;
      };
      onChange: {
        type: import('vue').PropType<
          (
            value: [string, string] | [import('dayjs').Dayjs, import('dayjs').Dayjs],
            dateString: [string, string],
          ) => void
        >;
      };
      'onUpdate:value': {
        type: import('vue').PropType<
          (value: [string, string] | [import('dayjs').Dayjs, import('dayjs').Dayjs]) => void
        >;
      };
      onCalendarChange: {
        type: import('vue').PropType<
          (
            values: [string, string] | [import('dayjs').Dayjs, import('dayjs').Dayjs],
            formatString: [string, string],
            info: import('ant-design-vue/lib/vc-picker/RangePicker').RangeInfo,
          ) => void
        >;
      };
      onPanelChange: {
        type: import('vue').PropType<
          (
            values: [string, string] | [import('dayjs').Dayjs, import('dayjs').Dayjs],
            modes: [
              import('ant-design-vue/lib/vc-picker/interface').PanelMode,
              import('ant-design-vue/lib/vc-picker/interface').PanelMode,
            ],
          ) => void
        >;
      };
      onOk: {
        type: import('vue').PropType<
          (dates: [string, string] | [import('dayjs').Dayjs, import('dayjs').Dayjs]) => void
        >;
      };
      id: StringConstructor;
      dropdownClassName: StringConstructor;
      dropdownAlign: {
        type: import('vue').PropType<import('ant-design-vue/lib/vc-align/interface').AlignType>;
      };
      popupStyle: {
        type: import('vue').PropType<import('vue').CSSProperties>;
      };
      transitionName: StringConstructor;
      allowClear: {
        type: BooleanConstructor;
        default: any;
      };
      autofocus: {
        type: BooleanConstructor;
        default: any;
      };
      tabindex: NumberConstructor;
      open: {
        type: BooleanConstructor;
        default: any;
      };
      defaultOpen: {
        type: BooleanConstructor;
        default: any;
      };
      inputReadOnly: {
        type: BooleanConstructor;
        default: any;
      };
      getPopupContainer: {
        type: import('vue').PropType<(node: HTMLElement) => HTMLElement>;
      };
      panelRender: {
        type: import('vue').PropType<
          (
            originPanel: import('ant-design-vue/lib/_util/type').VueNode,
          ) => import('ant-design-vue/lib/_util/type').VueNode
        >;
      };
      onOpenChange: {
        type: import('vue').PropType<(open: boolean) => void>;
      };
      'onUpdate:open': {
        type: import('vue').PropType<(open: boolean) => void>;
      };
      onFocus: {
        type: import('vue').PropType<
          import('ant-design-vue/lib/_util/EventInterface').FocusEventHandler
        >;
      };
      onBlur: {
        type: import('vue').PropType<
          import('ant-design-vue/lib/_util/EventInterface').FocusEventHandler
        >;
      };
      onMousedown: {
        type: import('vue').PropType<
          import('ant-design-vue/lib/_util/EventInterface').MouseEventHandler
        >;
      };
      onMouseup: {
        type: import('vue').PropType<
          import('ant-design-vue/lib/_util/EventInterface').MouseEventHandler
        >;
      };
      onMouseenter: {
        type: import('vue').PropType<
          import('ant-design-vue/lib/_util/EventInterface').MouseEventHandler
        >;
      };
      onMouseleave: {
        type: import('vue').PropType<
          import('ant-design-vue/lib/_util/EventInterface').MouseEventHandler
        >;
      };
      onClick: {
        type: import('vue').PropType<
          import('ant-design-vue/lib/_util/EventInterface').MouseEventHandler
        >;
      };
      onContextmenu: {
        type: import('vue').PropType<
          import('ant-design-vue/lib/_util/EventInterface').MouseEventHandler
        >;
      };
      onKeydown: {
        type: import('vue').PropType<(event: KeyboardEvent, preventDefault: () => void) => void>;
      };
      role: StringConstructor;
      name: StringConstructor;
      autocomplete: StringConstructor;
      direction: {
        type: import('vue').PropType<'rtl' | 'ltr'>;
      };
      showToday: {
        type: BooleanConstructor;
        default: any;
      };
      showTime: {
        type: import('vue').PropType<
          | boolean
          | import('ant-design-vue/lib/vc-picker/panels/TimePanel').SharedTimeProps<
              import('dayjs').Dayjs
            >
        >;
        default: any;
      };
      locale: {
        type: import('vue').PropType<
          import('ant-design-vue/lib/date-picker/generatePicker').PickerLocale
        >;
      };
      size: {
        type: import('vue').PropType<import('ant-design-vue/lib/button').ButtonSize>;
      };
      bordered: {
        type: BooleanConstructor;
        default: any;
      };
      disabledDate: {
        type: import('vue').PropType<(date: import('dayjs').Dayjs) => boolean>;
      };
      picker: {
        type: import('vue').PropType<import('ant-design-vue/lib/vc-picker/interface').PickerMode>;
      };
      valueFormat: StringConstructor;
      disabledHours: import('vue').PropType<() => number[]>;
      disabledMinutes: import('vue').PropType<(hour: number) => number[]>;
      disabledSeconds: import('vue').PropType<(hour: number, minute: number) => number[]>;
    }>
  >,
  {
    open: boolean;
    autofocus: boolean;
    defaultOpen: boolean;
    allowClear: boolean;
    bordered: boolean;
    showTime: any;
    showToday: boolean;
    inputReadOnly: boolean;
  }
>;
export declare const _WeekPicker: import('vue').DefineComponent<
  {
    defaultPickerValue: {
      type: import('vue').PropType<string | import('dayjs').Dayjs>;
    };
    defaultValue: {
      type: import('vue').PropType<string | import('dayjs').Dayjs>;
    };
    value: {
      type: import('vue').PropType<string | import('dayjs').Dayjs>;
    };
    disabledTime: {
      type: import('vue').PropType<
        import('ant-design-vue/lib/vc-picker/interface').DisabledTime<import('dayjs').Dayjs>
      >;
    };
    format: {
      type: import('vue').PropType<
        | string
        | import('ant-design-vue/lib/vc-picker/interface').CustomFormat<import('dayjs').Dayjs>
        | (
            | string
            | import('ant-design-vue/lib/vc-picker/interface').CustomFormat<import('dayjs').Dayjs>
          )[]
      >;
    };
    renderExtraFooter: {
      type: import('vue').PropType<
        (
          mode: import('ant-design-vue/lib/vc-picker/interface').PanelMode,
        ) => import('ant-design-vue/lib/_util/type').VueNode
      >;
    };
    showNow: {
      type: BooleanConstructor;
      default: any;
    };
    monthCellRender: {
      type: import('vue').PropType<
        import('ant-design-vue/lib/vc-picker/panels/MonthPanel/MonthBody').MonthCellRender<
          import('dayjs').Dayjs
        >
      >;
    };
    monthCellContentRender: {
      type: import('vue').PropType<
        import('ant-design-vue/lib/vc-picker/panels/MonthPanel/MonthBody').MonthCellRender<
          import('dayjs').Dayjs
        >
      >;
    };
    id: StringConstructor;
    dropdownClassName: StringConstructor;
    dropdownAlign: {
      type: import('vue').PropType<import('ant-design-vue/lib/vc-align/interface').AlignType>;
    };
    popupStyle: {
      type: import('vue').PropType<import('vue').CSSProperties>;
    };
    transitionName: StringConstructor;
    placeholder: StringConstructor;
    allowClear: {
      type: BooleanConstructor;
      default: any;
    };
    autofocus: {
      type: BooleanConstructor;
      default: any;
    };
    disabled: {
      type: BooleanConstructor;
      default: any;
    };
    tabindex: NumberConstructor;
    open: {
      type: BooleanConstructor;
      default: any;
    };
    defaultOpen: {
      type: BooleanConstructor;
      default: any;
    };
    inputReadOnly: {
      type: BooleanConstructor;
      default: any;
    };
    getPopupContainer: {
      type: import('vue').PropType<(node: HTMLElement) => HTMLElement>;
    };
    panelRender: {
      type: import('vue').PropType<
        (
          originPanel: import('ant-design-vue/lib/_util/type').VueNode,
        ) => import('ant-design-vue/lib/_util/type').VueNode
      >;
    };
    onChange: {
      type: import('vue').PropType<
        (value: string | import('dayjs').Dayjs, dateString: string) => void
      >;
    };
    'onUpdate:value': {
      type: import('vue').PropType<(value: string | import('dayjs').Dayjs) => void>;
    };
    onOk: {
      type: import('vue').PropType<(value: string | import('dayjs').Dayjs) => void>;
    };
    onOpenChange: {
      type: import('vue').PropType<(open: boolean) => void>;
    };
    'onUpdate:open': {
      type: import('vue').PropType<(open: boolean) => void>;
    };
    onFocus: {
      type: import('vue').PropType<
        import('ant-design-vue/lib/_util/EventInterface').FocusEventHandler
      >;
    };
    onBlur: {
      type: import('vue').PropType<
        import('ant-design-vue/lib/_util/EventInterface').FocusEventHandler
      >;
    };
    onMousedown: {
      type: import('vue').PropType<
        import('ant-design-vue/lib/_util/EventInterface').MouseEventHandler
      >;
    };
    onMouseup: {
      type: import('vue').PropType<
        import('ant-design-vue/lib/_util/EventInterface').MouseEventHandler
      >;
    };
    onMouseenter: {
      type: import('vue').PropType<
        import('ant-design-vue/lib/_util/EventInterface').MouseEventHandler
      >;
    };
    onMouseleave: {
      type: import('vue').PropType<
        import('ant-design-vue/lib/_util/EventInterface').MouseEventHandler
      >;
    };
    onClick: {
      type: import('vue').PropType<
        import('ant-design-vue/lib/_util/EventInterface').MouseEventHandler
      >;
    };
    onContextmenu: {
      type: import('vue').PropType<
        import('ant-design-vue/lib/_util/EventInterface').MouseEventHandler
      >;
    };
    onKeydown: {
      type: import('vue').PropType<(event: KeyboardEvent, preventDefault: () => void) => void>;
    };
    role: StringConstructor;
    name: StringConstructor;
    autocomplete: StringConstructor;
    direction: {
      type: import('vue').PropType<'rtl' | 'ltr'>;
    };
    showToday: {
      type: BooleanConstructor;
      default: any;
    };
    showTime: {
      type: import('vue').PropType<
        | boolean
        | import('ant-design-vue/lib/vc-picker/panels/TimePanel').SharedTimeProps<
            import('dayjs').Dayjs
          >
      >;
      default: any;
    };
    locale: {
      type: import('vue').PropType<
        import('ant-design-vue/lib/date-picker/generatePicker').PickerLocale
      >;
    };
    size: {
      type: import('vue').PropType<import('ant-design-vue/lib/button').ButtonSize>;
    };
    bordered: {
      type: BooleanConstructor;
      default: any;
    };
    dateRender: {
      type: import('vue').PropType<
        import('ant-design-vue/lib/vc-picker/panels/DatePanel/DateBody').DateRender<
          import('dayjs').Dayjs
        >
      >;
    };
    disabledDate: {
      type: import('vue').PropType<(date: import('dayjs').Dayjs) => boolean>;
    };
    mode: {
      type: import('vue').PropType<import('ant-design-vue/lib/vc-picker/interface').PanelMode>;
    };
    picker: {
      type: import('vue').PropType<import('ant-design-vue/lib/vc-picker/interface').PickerMode>;
    };
    valueFormat: StringConstructor;
    disabledHours: import('vue').PropType<() => number[]>;
    disabledMinutes: import('vue').PropType<(hour: number) => number[]>;
    disabledSeconds: import('vue').PropType<(hour: number, minute: number) => number[]>;
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
      defaultPickerValue: {
        type: import('vue').PropType<string | import('dayjs').Dayjs>;
      };
      defaultValue: {
        type: import('vue').PropType<string | import('dayjs').Dayjs>;
      };
      value: {
        type: import('vue').PropType<string | import('dayjs').Dayjs>;
      };
      disabledTime: {
        type: import('vue').PropType<
          import('ant-design-vue/lib/vc-picker/interface').DisabledTime<import('dayjs').Dayjs>
        >;
      };
      format: {
        type: import('vue').PropType<
          | string
          | import('ant-design-vue/lib/vc-picker/interface').CustomFormat<import('dayjs').Dayjs>
          | (
              | string
              | import('ant-design-vue/lib/vc-picker/interface').CustomFormat<import('dayjs').Dayjs>
            )[]
        >;
      };
      renderExtraFooter: {
        type: import('vue').PropType<
          (
            mode: import('ant-design-vue/lib/vc-picker/interface').PanelMode,
          ) => import('ant-design-vue/lib/_util/type').VueNode
        >;
      };
      showNow: {
        type: BooleanConstructor;
        default: any;
      };
      monthCellRender: {
        type: import('vue').PropType<
          import('ant-design-vue/lib/vc-picker/panels/MonthPanel/MonthBody').MonthCellRender<
            import('dayjs').Dayjs
          >
        >;
      };
      monthCellContentRender: {
        type: import('vue').PropType<
          import('ant-design-vue/lib/vc-picker/panels/MonthPanel/MonthBody').MonthCellRender<
            import('dayjs').Dayjs
          >
        >;
      };
      id: StringConstructor;
      dropdownClassName: StringConstructor;
      dropdownAlign: {
        type: import('vue').PropType<import('ant-design-vue/lib/vc-align/interface').AlignType>;
      };
      popupStyle: {
        type: import('vue').PropType<import('vue').CSSProperties>;
      };
      transitionName: StringConstructor;
      placeholder: StringConstructor;
      allowClear: {
        type: BooleanConstructor;
        default: any;
      };
      autofocus: {
        type: BooleanConstructor;
        default: any;
      };
      disabled: {
        type: BooleanConstructor;
        default: any;
      };
      tabindex: NumberConstructor;
      open: {
        type: BooleanConstructor;
        default: any;
      };
      defaultOpen: {
        type: BooleanConstructor;
        default: any;
      };
      inputReadOnly: {
        type: BooleanConstructor;
        default: any;
      };
      getPopupContainer: {
        type: import('vue').PropType<(node: HTMLElement) => HTMLElement>;
      };
      panelRender: {
        type: import('vue').PropType<
          (
            originPanel: import('ant-design-vue/lib/_util/type').VueNode,
          ) => import('ant-design-vue/lib/_util/type').VueNode
        >;
      };
      onChange: {
        type: import('vue').PropType<
          (value: string | import('dayjs').Dayjs, dateString: string) => void
        >;
      };
      'onUpdate:value': {
        type: import('vue').PropType<(value: string | import('dayjs').Dayjs) => void>;
      };
      onOk: {
        type: import('vue').PropType<(value: string | import('dayjs').Dayjs) => void>;
      };
      onOpenChange: {
        type: import('vue').PropType<(open: boolean) => void>;
      };
      'onUpdate:open': {
        type: import('vue').PropType<(open: boolean) => void>;
      };
      onFocus: {
        type: import('vue').PropType<
          import('ant-design-vue/lib/_util/EventInterface').FocusEventHandler
        >;
      };
      onBlur: {
        type: import('vue').PropType<
          import('ant-design-vue/lib/_util/EventInterface').FocusEventHandler
        >;
      };
      onMousedown: {
        type: import('vue').PropType<
          import('ant-design-vue/lib/_util/EventInterface').MouseEventHandler
        >;
      };
      onMouseup: {
        type: import('vue').PropType<
          import('ant-design-vue/lib/_util/EventInterface').MouseEventHandler
        >;
      };
      onMouseenter: {
        type: import('vue').PropType<
          import('ant-design-vue/lib/_util/EventInterface').MouseEventHandler
        >;
      };
      onMouseleave: {
        type: import('vue').PropType<
          import('ant-design-vue/lib/_util/EventInterface').MouseEventHandler
        >;
      };
      onClick: {
        type: import('vue').PropType<
          import('ant-design-vue/lib/_util/EventInterface').MouseEventHandler
        >;
      };
      onContextmenu: {
        type: import('vue').PropType<
          import('ant-design-vue/lib/_util/EventInterface').MouseEventHandler
        >;
      };
      onKeydown: {
        type: import('vue').PropType<(event: KeyboardEvent, preventDefault: () => void) => void>;
      };
      role: StringConstructor;
      name: StringConstructor;
      autocomplete: StringConstructor;
      direction: {
        type: import('vue').PropType<'rtl' | 'ltr'>;
      };
      showToday: {
        type: BooleanConstructor;
        default: any;
      };
      showTime: {
        type: import('vue').PropType<
          | boolean
          | import('ant-design-vue/lib/vc-picker/panels/TimePanel').SharedTimeProps<
              import('dayjs').Dayjs
            >
        >;
        default: any;
      };
      locale: {
        type: import('vue').PropType<
          import('ant-design-vue/lib/date-picker/generatePicker').PickerLocale
        >;
      };
      size: {
        type: import('vue').PropType<import('ant-design-vue/lib/button').ButtonSize>;
      };
      bordered: {
        type: BooleanConstructor;
        default: any;
      };
      dateRender: {
        type: import('vue').PropType<
          import('ant-design-vue/lib/vc-picker/panels/DatePanel/DateBody').DateRender<
            import('dayjs').Dayjs
          >
        >;
      };
      disabledDate: {
        type: import('vue').PropType<(date: import('dayjs').Dayjs) => boolean>;
      };
      mode: {
        type: import('vue').PropType<import('ant-design-vue/lib/vc-picker/interface').PanelMode>;
      };
      picker: {
        type: import('vue').PropType<import('ant-design-vue/lib/vc-picker/interface').PickerMode>;
      };
      valueFormat: StringConstructor;
      disabledHours: import('vue').PropType<() => number[]>;
      disabledMinutes: import('vue').PropType<(hour: number) => number[]>;
      disabledSeconds: import('vue').PropType<(hour: number, minute: number) => number[]>;
    }>
  >,
  {
    open: boolean;
    disabled: boolean;
    autofocus: boolean;
    defaultOpen: boolean;
    allowClear: boolean;
    bordered: boolean;
    showTime: any;
    showNow: boolean;
    showToday: boolean;
    inputReadOnly: boolean;
  }
>;
export declare const _MonthPicker: import('vue').DefineComponent<
  {
    defaultPickerValue: {
      type: import('vue').PropType<string | import('dayjs').Dayjs>;
    };
    defaultValue: {
      type: import('vue').PropType<string | import('dayjs').Dayjs>;
    };
    value: {
      type: import('vue').PropType<string | import('dayjs').Dayjs>;
    };
    disabledTime: {
      type: import('vue').PropType<
        import('ant-design-vue/lib/vc-picker/interface').DisabledTime<import('dayjs').Dayjs>
      >;
    };
    format: {
      type: import('vue').PropType<
        | string
        | import('ant-design-vue/lib/vc-picker/interface').CustomFormat<import('dayjs').Dayjs>
        | (
            | string
            | import('ant-design-vue/lib/vc-picker/interface').CustomFormat<import('dayjs').Dayjs>
          )[]
      >;
    };
    renderExtraFooter: {
      type: import('vue').PropType<
        (
          mode: import('ant-design-vue/lib/vc-picker/interface').PanelMode,
        ) => import('ant-design-vue/lib/_util/type').VueNode
      >;
    };
    showNow: {
      type: BooleanConstructor;
      default: any;
    };
    monthCellRender: {
      type: import('vue').PropType<
        import('ant-design-vue/lib/vc-picker/panels/MonthPanel/MonthBody').MonthCellRender<
          import('dayjs').Dayjs
        >
      >;
    };
    monthCellContentRender: {
      type: import('vue').PropType<
        import('ant-design-vue/lib/vc-picker/panels/MonthPanel/MonthBody').MonthCellRender<
          import('dayjs').Dayjs
        >
      >;
    };
    id: StringConstructor;
    dropdownClassName: StringConstructor;
    dropdownAlign: {
      type: import('vue').PropType<import('ant-design-vue/lib/vc-align/interface').AlignType>;
    };
    popupStyle: {
      type: import('vue').PropType<import('vue').CSSProperties>;
    };
    transitionName: StringConstructor;
    placeholder: StringConstructor;
    allowClear: {
      type: BooleanConstructor;
      default: any;
    };
    autofocus: {
      type: BooleanConstructor;
      default: any;
    };
    disabled: {
      type: BooleanConstructor;
      default: any;
    };
    tabindex: NumberConstructor;
    open: {
      type: BooleanConstructor;
      default: any;
    };
    defaultOpen: {
      type: BooleanConstructor;
      default: any;
    };
    inputReadOnly: {
      type: BooleanConstructor;
      default: any;
    };
    getPopupContainer: {
      type: import('vue').PropType<(node: HTMLElement) => HTMLElement>;
    };
    panelRender: {
      type: import('vue').PropType<
        (
          originPanel: import('ant-design-vue/lib/_util/type').VueNode,
        ) => import('ant-design-vue/lib/_util/type').VueNode
      >;
    };
    onChange: {
      type: import('vue').PropType<
        (value: string | import('dayjs').Dayjs, dateString: string) => void
      >;
    };
    'onUpdate:value': {
      type: import('vue').PropType<(value: string | import('dayjs').Dayjs) => void>;
    };
    onOk: {
      type: import('vue').PropType<(value: string | import('dayjs').Dayjs) => void>;
    };
    onOpenChange: {
      type: import('vue').PropType<(open: boolean) => void>;
    };
    'onUpdate:open': {
      type: import('vue').PropType<(open: boolean) => void>;
    };
    onFocus: {
      type: import('vue').PropType<
        import('ant-design-vue/lib/_util/EventInterface').FocusEventHandler
      >;
    };
    onBlur: {
      type: import('vue').PropType<
        import('ant-design-vue/lib/_util/EventInterface').FocusEventHandler
      >;
    };
    onMousedown: {
      type: import('vue').PropType<
        import('ant-design-vue/lib/_util/EventInterface').MouseEventHandler
      >;
    };
    onMouseup: {
      type: import('vue').PropType<
        import('ant-design-vue/lib/_util/EventInterface').MouseEventHandler
      >;
    };
    onMouseenter: {
      type: import('vue').PropType<
        import('ant-design-vue/lib/_util/EventInterface').MouseEventHandler
      >;
    };
    onMouseleave: {
      type: import('vue').PropType<
        import('ant-design-vue/lib/_util/EventInterface').MouseEventHandler
      >;
    };
    onClick: {
      type: import('vue').PropType<
        import('ant-design-vue/lib/_util/EventInterface').MouseEventHandler
      >;
    };
    onContextmenu: {
      type: import('vue').PropType<
        import('ant-design-vue/lib/_util/EventInterface').MouseEventHandler
      >;
    };
    onKeydown: {
      type: import('vue').PropType<(event: KeyboardEvent, preventDefault: () => void) => void>;
    };
    role: StringConstructor;
    name: StringConstructor;
    autocomplete: StringConstructor;
    direction: {
      type: import('vue').PropType<'rtl' | 'ltr'>;
    };
    showToday: {
      type: BooleanConstructor;
      default: any;
    };
    showTime: {
      type: import('vue').PropType<
        | boolean
        | import('ant-design-vue/lib/vc-picker/panels/TimePanel').SharedTimeProps<
            import('dayjs').Dayjs
          >
      >;
      default: any;
    };
    locale: {
      type: import('vue').PropType<
        import('ant-design-vue/lib/date-picker/generatePicker').PickerLocale
      >;
    };
    size: {
      type: import('vue').PropType<import('ant-design-vue/lib/button').ButtonSize>;
    };
    bordered: {
      type: BooleanConstructor;
      default: any;
    };
    dateRender: {
      type: import('vue').PropType<
        import('ant-design-vue/lib/vc-picker/panels/DatePanel/DateBody').DateRender<
          import('dayjs').Dayjs
        >
      >;
    };
    disabledDate: {
      type: import('vue').PropType<(date: import('dayjs').Dayjs) => boolean>;
    };
    mode: {
      type: import('vue').PropType<import('ant-design-vue/lib/vc-picker/interface').PanelMode>;
    };
    picker: {
      type: import('vue').PropType<import('ant-design-vue/lib/vc-picker/interface').PickerMode>;
    };
    valueFormat: StringConstructor;
    disabledHours: import('vue').PropType<() => number[]>;
    disabledMinutes: import('vue').PropType<(hour: number) => number[]>;
    disabledSeconds: import('vue').PropType<(hour: number, minute: number) => number[]>;
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
      defaultPickerValue: {
        type: import('vue').PropType<string | import('dayjs').Dayjs>;
      };
      defaultValue: {
        type: import('vue').PropType<string | import('dayjs').Dayjs>;
      };
      value: {
        type: import('vue').PropType<string | import('dayjs').Dayjs>;
      };
      disabledTime: {
        type: import('vue').PropType<
          import('ant-design-vue/lib/vc-picker/interface').DisabledTime<import('dayjs').Dayjs>
        >;
      };
      format: {
        type: import('vue').PropType<
          | string
          | import('ant-design-vue/lib/vc-picker/interface').CustomFormat<import('dayjs').Dayjs>
          | (
              | string
              | import('ant-design-vue/lib/vc-picker/interface').CustomFormat<import('dayjs').Dayjs>
            )[]
        >;
      };
      renderExtraFooter: {
        type: import('vue').PropType<
          (
            mode: import('ant-design-vue/lib/vc-picker/interface').PanelMode,
          ) => import('ant-design-vue/lib/_util/type').VueNode
        >;
      };
      showNow: {
        type: BooleanConstructor;
        default: any;
      };
      monthCellRender: {
        type: import('vue').PropType<
          import('ant-design-vue/lib/vc-picker/panels/MonthPanel/MonthBody').MonthCellRender<
            import('dayjs').Dayjs
          >
        >;
      };
      monthCellContentRender: {
        type: import('vue').PropType<
          import('ant-design-vue/lib/vc-picker/panels/MonthPanel/MonthBody').MonthCellRender<
            import('dayjs').Dayjs
          >
        >;
      };
      id: StringConstructor;
      dropdownClassName: StringConstructor;
      dropdownAlign: {
        type: import('vue').PropType<import('ant-design-vue/lib/vc-align/interface').AlignType>;
      };
      popupStyle: {
        type: import('vue').PropType<import('vue').CSSProperties>;
      };
      transitionName: StringConstructor;
      placeholder: StringConstructor;
      allowClear: {
        type: BooleanConstructor;
        default: any;
      };
      autofocus: {
        type: BooleanConstructor;
        default: any;
      };
      disabled: {
        type: BooleanConstructor;
        default: any;
      };
      tabindex: NumberConstructor;
      open: {
        type: BooleanConstructor;
        default: any;
      };
      defaultOpen: {
        type: BooleanConstructor;
        default: any;
      };
      inputReadOnly: {
        type: BooleanConstructor;
        default: any;
      };
      getPopupContainer: {
        type: import('vue').PropType<(node: HTMLElement) => HTMLElement>;
      };
      panelRender: {
        type: import('vue').PropType<
          (
            originPanel: import('ant-design-vue/lib/_util/type').VueNode,
          ) => import('ant-design-vue/lib/_util/type').VueNode
        >;
      };
      onChange: {
        type: import('vue').PropType<
          (value: string | import('dayjs').Dayjs, dateString: string) => void
        >;
      };
      'onUpdate:value': {
        type: import('vue').PropType<(value: string | import('dayjs').Dayjs) => void>;
      };
      onOk: {
        type: import('vue').PropType<(value: string | import('dayjs').Dayjs) => void>;
      };
      onOpenChange: {
        type: import('vue').PropType<(open: boolean) => void>;
      };
      'onUpdate:open': {
        type: import('vue').PropType<(open: boolean) => void>;
      };
      onFocus: {
        type: import('vue').PropType<
          import('ant-design-vue/lib/_util/EventInterface').FocusEventHandler
        >;
      };
      onBlur: {
        type: import('vue').PropType<
          import('ant-design-vue/lib/_util/EventInterface').FocusEventHandler
        >;
      };
      onMousedown: {
        type: import('vue').PropType<
          import('ant-design-vue/lib/_util/EventInterface').MouseEventHandler
        >;
      };
      onMouseup: {
        type: import('vue').PropType<
          import('ant-design-vue/lib/_util/EventInterface').MouseEventHandler
        >;
      };
      onMouseenter: {
        type: import('vue').PropType<
          import('ant-design-vue/lib/_util/EventInterface').MouseEventHandler
        >;
      };
      onMouseleave: {
        type: import('vue').PropType<
          import('ant-design-vue/lib/_util/EventInterface').MouseEventHandler
        >;
      };
      onClick: {
        type: import('vue').PropType<
          import('ant-design-vue/lib/_util/EventInterface').MouseEventHandler
        >;
      };
      onContextmenu: {
        type: import('vue').PropType<
          import('ant-design-vue/lib/_util/EventInterface').MouseEventHandler
        >;
      };
      onKeydown: {
        type: import('vue').PropType<(event: KeyboardEvent, preventDefault: () => void) => void>;
      };
      role: StringConstructor;
      name: StringConstructor;
      autocomplete: StringConstructor;
      direction: {
        type: import('vue').PropType<'rtl' | 'ltr'>;
      };
      showToday: {
        type: BooleanConstructor;
        default: any;
      };
      showTime: {
        type: import('vue').PropType<
          | boolean
          | import('ant-design-vue/lib/vc-picker/panels/TimePanel').SharedTimeProps<
              import('dayjs').Dayjs
            >
        >;
        default: any;
      };
      locale: {
        type: import('vue').PropType<
          import('ant-design-vue/lib/date-picker/generatePicker').PickerLocale
        >;
      };
      size: {
        type: import('vue').PropType<import('ant-design-vue/lib/button').ButtonSize>;
      };
      bordered: {
        type: BooleanConstructor;
        default: any;
      };
      dateRender: {
        type: import('vue').PropType<
          import('ant-design-vue/lib/vc-picker/panels/DatePanel/DateBody').DateRender<
            import('dayjs').Dayjs
          >
        >;
      };
      disabledDate: {
        type: import('vue').PropType<(date: import('dayjs').Dayjs) => boolean>;
      };
      mode: {
        type: import('vue').PropType<import('ant-design-vue/lib/vc-picker/interface').PanelMode>;
      };
      picker: {
        type: import('vue').PropType<import('ant-design-vue/lib/vc-picker/interface').PickerMode>;
      };
      valueFormat: StringConstructor;
      disabledHours: import('vue').PropType<() => number[]>;
      disabledMinutes: import('vue').PropType<(hour: number) => number[]>;
      disabledSeconds: import('vue').PropType<(hour: number, minute: number) => number[]>;
    }>
  >,
  {
    open: boolean;
    disabled: boolean;
    autofocus: boolean;
    defaultOpen: boolean;
    allowClear: boolean;
    bordered: boolean;
    showTime: any;
    showNow: boolean;
    showToday: boolean;
    inputReadOnly: boolean;
  }
>;
export declare const DatePicker: {
  new (...args: any[]): {
    $: import('vue').ComponentInternalInstance;
    $data: {};
    $props: Partial<{
      open: boolean;
      disabled: boolean;
      autofocus: boolean;
      defaultOpen: boolean;
      allowClear: boolean;
      bordered: boolean;
      showTime: any;
      showNow: boolean;
      showToday: boolean;
      inputReadOnly: boolean;
    }> &
      Omit<
        Readonly<
          import('vue').ExtractPropTypes<{
            defaultPickerValue: {
              type: import('vue').PropType<string | import('dayjs').Dayjs>;
            };
            defaultValue: {
              type: import('vue').PropType<string | import('dayjs').Dayjs>;
            };
            value: {
              type: import('vue').PropType<string | import('dayjs').Dayjs>;
            };
            disabledTime: {
              type: import('vue').PropType<
                import('ant-design-vue/lib/vc-picker/interface').DisabledTime<import('dayjs').Dayjs>
              >;
            };
            format: {
              type: import('vue').PropType<
                | string
                | import('ant-design-vue/lib/vc-picker/interface').CustomFormat<
                    import('dayjs').Dayjs
                  >
                | (
                    | string
                    | import('ant-design-vue/lib/vc-picker/interface').CustomFormat<
                        import('dayjs').Dayjs
                      >
                  )[]
              >;
            };
            renderExtraFooter: {
              type: import('vue').PropType<
                (
                  mode: import('ant-design-vue/lib/vc-picker/interface').PanelMode,
                ) => import('ant-design-vue/lib/_util/type').VueNode
              >;
            };
            showNow: {
              type: BooleanConstructor;
              default: any;
            };
            monthCellRender: {
              type: import('vue').PropType<
                import('ant-design-vue/lib/vc-picker/panels/MonthPanel/MonthBody').MonthCellRender<
                  import('dayjs').Dayjs
                >
              >;
            };
            monthCellContentRender: {
              type: import('vue').PropType<
                import('ant-design-vue/lib/vc-picker/panels/MonthPanel/MonthBody').MonthCellRender<
                  import('dayjs').Dayjs
                >
              >;
            };
            id: StringConstructor;
            dropdownClassName: StringConstructor;
            dropdownAlign: {
              type: import('vue').PropType<
                import('ant-design-vue/lib/vc-align/interface').AlignType
              >;
            };
            popupStyle: {
              type: import('vue').PropType<import('vue').CSSProperties>;
            };
            transitionName: StringConstructor;
            placeholder: StringConstructor;
            allowClear: {
              type: BooleanConstructor;
              default: any;
            };
            autofocus: {
              type: BooleanConstructor;
              default: any;
            };
            disabled: {
              type: BooleanConstructor;
              default: any;
            };
            tabindex: NumberConstructor;
            open: {
              type: BooleanConstructor;
              default: any;
            };
            defaultOpen: {
              type: BooleanConstructor;
              default: any;
            };
            inputReadOnly: {
              type: BooleanConstructor;
              default: any;
            };
            getPopupContainer: {
              type: import('vue').PropType<(node: HTMLElement) => HTMLElement>;
            };
            panelRender: {
              type: import('vue').PropType<
                (
                  originPanel: import('ant-design-vue/lib/_util/type').VueNode,
                ) => import('ant-design-vue/lib/_util/type').VueNode
              >;
            };
            onChange: {
              type: import('vue').PropType<
                (value: string | import('dayjs').Dayjs, dateString: string) => void
              >;
            };
            'onUpdate:value': {
              type: import('vue').PropType<(value: string | import('dayjs').Dayjs) => void>;
            };
            onOk: {
              type: import('vue').PropType<(value: string | import('dayjs').Dayjs) => void>;
            };
            onOpenChange: {
              type: import('vue').PropType<(open: boolean) => void>;
            };
            'onUpdate:open': {
              type: import('vue').PropType<(open: boolean) => void>;
            };
            onFocus: {
              type: import('vue').PropType<
                import('ant-design-vue/lib/_util/EventInterface').FocusEventHandler
              >;
            };
            onBlur: {
              type: import('vue').PropType<
                import('ant-design-vue/lib/_util/EventInterface').FocusEventHandler
              >;
            };
            onMousedown: {
              type: import('vue').PropType<
                import('ant-design-vue/lib/_util/EventInterface').MouseEventHandler
              >;
            };
            onMouseup: {
              type: import('vue').PropType<
                import('ant-design-vue/lib/_util/EventInterface').MouseEventHandler
              >;
            };
            onMouseenter: {
              type: import('vue').PropType<
                import('ant-design-vue/lib/_util/EventInterface').MouseEventHandler
              >;
            };
            onMouseleave: {
              type: import('vue').PropType<
                import('ant-design-vue/lib/_util/EventInterface').MouseEventHandler
              >;
            };
            onClick: {
              type: import('vue').PropType<
                import('ant-design-vue/lib/_util/EventInterface').MouseEventHandler
              >;
            };
            onContextmenu: {
              type: import('vue').PropType<
                import('ant-design-vue/lib/_util/EventInterface').MouseEventHandler
              >;
            };
            onKeydown: {
              type: import('vue').PropType<
                (event: KeyboardEvent, preventDefault: () => void) => void
              >;
            };
            role: StringConstructor;
            name: StringConstructor;
            autocomplete: StringConstructor;
            direction: {
              type: import('vue').PropType<'rtl' | 'ltr'>;
            };
            showToday: {
              type: BooleanConstructor;
              default: any;
            };
            showTime: {
              type: import('vue').PropType<
                | boolean
                | import('ant-design-vue/lib/vc-picker/panels/TimePanel').SharedTimeProps<
                    import('dayjs').Dayjs
                  >
              >;
              default: any;
            };
            locale: {
              type: import('vue').PropType<
                import('ant-design-vue/lib/date-picker/generatePicker').PickerLocale
              >;
            };
            size: {
              type: import('vue').PropType<import('ant-design-vue/lib/button').ButtonSize>;
            };
            bordered: {
              type: BooleanConstructor;
              default: any;
            };
            dateRender: {
              type: import('vue').PropType<
                import('ant-design-vue/lib/vc-picker/panels/DatePanel/DateBody').DateRender<
                  import('dayjs').Dayjs
                >
              >;
            };
            disabledDate: {
              type: import('vue').PropType<(date: import('dayjs').Dayjs) => boolean>;
            };
            mode: {
              type: import('vue').PropType<
                import('ant-design-vue/lib/vc-picker/interface').PanelMode
              >;
            };
            picker: {
              type: import('vue').PropType<
                import('ant-design-vue/lib/vc-picker/interface').PickerMode
              >;
            };
            valueFormat: StringConstructor;
            disabledHours: import('vue').PropType<() => number[]>;
            disabledMinutes: import('vue').PropType<(hour: number) => number[]>;
            disabledSeconds: import('vue').PropType<(hour: number, minute: number) => number[]>;
          }>
        > &
          import('vue').VNodeProps &
          import('vue').AllowedComponentProps &
          import('vue').ComponentCustomProps,
        | 'bordered'
        | 'open'
        | 'disabled'
        | 'autofocus'
        | 'defaultOpen'
        | 'allowClear'
        | 'showNow'
        | 'inputReadOnly'
        | 'showToday'
        | 'showTime'
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
          defaultPickerValue: {
            type: import('vue').PropType<string | import('dayjs').Dayjs>;
          };
          defaultValue: {
            type: import('vue').PropType<string | import('dayjs').Dayjs>;
          };
          value: {
            type: import('vue').PropType<string | import('dayjs').Dayjs>;
          };
          disabledTime: {
            type: import('vue').PropType<
              import('ant-design-vue/lib/vc-picker/interface').DisabledTime<import('dayjs').Dayjs>
            >;
          };
          format: {
            type: import('vue').PropType<
              | string
              | import('ant-design-vue/lib/vc-picker/interface').CustomFormat<import('dayjs').Dayjs>
              | (
                  | string
                  | import('ant-design-vue/lib/vc-picker/interface').CustomFormat<
                      import('dayjs').Dayjs
                    >
                )[]
            >;
          };
          renderExtraFooter: {
            type: import('vue').PropType<
              (
                mode: import('ant-design-vue/lib/vc-picker/interface').PanelMode,
              ) => import('ant-design-vue/lib/_util/type').VueNode
            >;
          };
          showNow: {
            type: BooleanConstructor;
            default: any;
          };
          monthCellRender: {
            type: import('vue').PropType<
              import('ant-design-vue/lib/vc-picker/panels/MonthPanel/MonthBody').MonthCellRender<
                import('dayjs').Dayjs
              >
            >;
          };
          monthCellContentRender: {
            type: import('vue').PropType<
              import('ant-design-vue/lib/vc-picker/panels/MonthPanel/MonthBody').MonthCellRender<
                import('dayjs').Dayjs
              >
            >;
          };
          id: StringConstructor;
          dropdownClassName: StringConstructor;
          dropdownAlign: {
            type: import('vue').PropType<import('ant-design-vue/lib/vc-align/interface').AlignType>;
          };
          popupStyle: {
            type: import('vue').PropType<import('vue').CSSProperties>;
          };
          transitionName: StringConstructor;
          placeholder: StringConstructor;
          allowClear: {
            type: BooleanConstructor;
            default: any;
          };
          autofocus: {
            type: BooleanConstructor;
            default: any;
          };
          disabled: {
            type: BooleanConstructor;
            default: any;
          };
          tabindex: NumberConstructor;
          open: {
            type: BooleanConstructor;
            default: any;
          };
          defaultOpen: {
            type: BooleanConstructor;
            default: any;
          };
          inputReadOnly: {
            type: BooleanConstructor;
            default: any;
          };
          getPopupContainer: {
            type: import('vue').PropType<(node: HTMLElement) => HTMLElement>;
          };
          panelRender: {
            type: import('vue').PropType<
              (
                originPanel: import('ant-design-vue/lib/_util/type').VueNode,
              ) => import('ant-design-vue/lib/_util/type').VueNode
            >;
          };
          onChange: {
            type: import('vue').PropType<
              (value: string | import('dayjs').Dayjs, dateString: string) => void
            >;
          };
          'onUpdate:value': {
            type: import('vue').PropType<(value: string | import('dayjs').Dayjs) => void>;
          };
          onOk: {
            type: import('vue').PropType<(value: string | import('dayjs').Dayjs) => void>;
          };
          onOpenChange: {
            type: import('vue').PropType<(open: boolean) => void>;
          };
          'onUpdate:open': {
            type: import('vue').PropType<(open: boolean) => void>;
          };
          onFocus: {
            type: import('vue').PropType<
              import('ant-design-vue/lib/_util/EventInterface').FocusEventHandler
            >;
          };
          onBlur: {
            type: import('vue').PropType<
              import('ant-design-vue/lib/_util/EventInterface').FocusEventHandler
            >;
          };
          onMousedown: {
            type: import('vue').PropType<
              import('ant-design-vue/lib/_util/EventInterface').MouseEventHandler
            >;
          };
          onMouseup: {
            type: import('vue').PropType<
              import('ant-design-vue/lib/_util/EventInterface').MouseEventHandler
            >;
          };
          onMouseenter: {
            type: import('vue').PropType<
              import('ant-design-vue/lib/_util/EventInterface').MouseEventHandler
            >;
          };
          onMouseleave: {
            type: import('vue').PropType<
              import('ant-design-vue/lib/_util/EventInterface').MouseEventHandler
            >;
          };
          onClick: {
            type: import('vue').PropType<
              import('ant-design-vue/lib/_util/EventInterface').MouseEventHandler
            >;
          };
          onContextmenu: {
            type: import('vue').PropType<
              import('ant-design-vue/lib/_util/EventInterface').MouseEventHandler
            >;
          };
          onKeydown: {
            type: import('vue').PropType<
              (event: KeyboardEvent, preventDefault: () => void) => void
            >;
          };
          role: StringConstructor;
          name: StringConstructor;
          autocomplete: StringConstructor;
          direction: {
            type: import('vue').PropType<'rtl' | 'ltr'>;
          };
          showToday: {
            type: BooleanConstructor;
            default: any;
          };
          showTime: {
            type: import('vue').PropType<
              | boolean
              | import('ant-design-vue/lib/vc-picker/panels/TimePanel').SharedTimeProps<
                  import('dayjs').Dayjs
                >
            >;
            default: any;
          };
          locale: {
            type: import('vue').PropType<
              import('ant-design-vue/lib/date-picker/generatePicker').PickerLocale
            >;
          };
          size: {
            type: import('vue').PropType<import('ant-design-vue/lib/button').ButtonSize>;
          };
          bordered: {
            type: BooleanConstructor;
            default: any;
          };
          dateRender: {
            type: import('vue').PropType<
              import('ant-design-vue/lib/vc-picker/panels/DatePanel/DateBody').DateRender<
                import('dayjs').Dayjs
              >
            >;
          };
          disabledDate: {
            type: import('vue').PropType<(date: import('dayjs').Dayjs) => boolean>;
          };
          mode: {
            type: import('vue').PropType<
              import('ant-design-vue/lib/vc-picker/interface').PanelMode
            >;
          };
          picker: {
            type: import('vue').PropType<
              import('ant-design-vue/lib/vc-picker/interface').PickerMode
            >;
          };
          valueFormat: StringConstructor;
          disabledHours: import('vue').PropType<() => number[]>;
          disabledMinutes: import('vue').PropType<(hour: number) => number[]>;
          disabledSeconds: import('vue').PropType<(hour: number, minute: number) => number[]>;
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
        open: boolean;
        disabled: boolean;
        autofocus: boolean;
        defaultOpen: boolean;
        allowClear: boolean;
        bordered: boolean;
        showTime: any;
        showNow: boolean;
        showToday: boolean;
        inputReadOnly: boolean;
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
      defaultPickerValue: {
        type: import('vue').PropType<string | import('dayjs').Dayjs>;
      };
      defaultValue: {
        type: import('vue').PropType<string | import('dayjs').Dayjs>;
      };
      value: {
        type: import('vue').PropType<string | import('dayjs').Dayjs>;
      };
      disabledTime: {
        type: import('vue').PropType<
          import('ant-design-vue/lib/vc-picker/interface').DisabledTime<import('dayjs').Dayjs>
        >;
      };
      format: {
        type: import('vue').PropType<
          | string
          | import('ant-design-vue/lib/vc-picker/interface').CustomFormat<import('dayjs').Dayjs>
          | (
              | string
              | import('ant-design-vue/lib/vc-picker/interface').CustomFormat<import('dayjs').Dayjs>
            )[]
        >;
      };
      renderExtraFooter: {
        type: import('vue').PropType<
          (
            mode: import('ant-design-vue/lib/vc-picker/interface').PanelMode,
          ) => import('ant-design-vue/lib/_util/type').VueNode
        >;
      };
      showNow: {
        type: BooleanConstructor;
        default: any;
      };
      monthCellRender: {
        type: import('vue').PropType<
          import('ant-design-vue/lib/vc-picker/panels/MonthPanel/MonthBody').MonthCellRender<
            import('dayjs').Dayjs
          >
        >;
      };
      monthCellContentRender: {
        type: import('vue').PropType<
          import('ant-design-vue/lib/vc-picker/panels/MonthPanel/MonthBody').MonthCellRender<
            import('dayjs').Dayjs
          >
        >;
      };
      id: StringConstructor;
      dropdownClassName: StringConstructor;
      dropdownAlign: {
        type: import('vue').PropType<import('ant-design-vue/lib/vc-align/interface').AlignType>;
      };
      popupStyle: {
        type: import('vue').PropType<import('vue').CSSProperties>;
      };
      transitionName: StringConstructor;
      placeholder: StringConstructor;
      allowClear: {
        type: BooleanConstructor;
        default: any;
      };
      autofocus: {
        type: BooleanConstructor;
        default: any;
      };
      disabled: {
        type: BooleanConstructor;
        default: any;
      };
      tabindex: NumberConstructor;
      open: {
        type: BooleanConstructor;
        default: any;
      };
      defaultOpen: {
        type: BooleanConstructor;
        default: any;
      };
      inputReadOnly: {
        type: BooleanConstructor;
        default: any;
      };
      getPopupContainer: {
        type: import('vue').PropType<(node: HTMLElement) => HTMLElement>;
      };
      panelRender: {
        type: import('vue').PropType<
          (
            originPanel: import('ant-design-vue/lib/_util/type').VueNode,
          ) => import('ant-design-vue/lib/_util/type').VueNode
        >;
      };
      onChange: {
        type: import('vue').PropType<
          (value: string | import('dayjs').Dayjs, dateString: string) => void
        >;
      };
      'onUpdate:value': {
        type: import('vue').PropType<(value: string | import('dayjs').Dayjs) => void>;
      };
      onOk: {
        type: import('vue').PropType<(value: string | import('dayjs').Dayjs) => void>;
      };
      onOpenChange: {
        type: import('vue').PropType<(open: boolean) => void>;
      };
      'onUpdate:open': {
        type: import('vue').PropType<(open: boolean) => void>;
      };
      onFocus: {
        type: import('vue').PropType<
          import('ant-design-vue/lib/_util/EventInterface').FocusEventHandler
        >;
      };
      onBlur: {
        type: import('vue').PropType<
          import('ant-design-vue/lib/_util/EventInterface').FocusEventHandler
        >;
      };
      onMousedown: {
        type: import('vue').PropType<
          import('ant-design-vue/lib/_util/EventInterface').MouseEventHandler
        >;
      };
      onMouseup: {
        type: import('vue').PropType<
          import('ant-design-vue/lib/_util/EventInterface').MouseEventHandler
        >;
      };
      onMouseenter: {
        type: import('vue').PropType<
          import('ant-design-vue/lib/_util/EventInterface').MouseEventHandler
        >;
      };
      onMouseleave: {
        type: import('vue').PropType<
          import('ant-design-vue/lib/_util/EventInterface').MouseEventHandler
        >;
      };
      onClick: {
        type: import('vue').PropType<
          import('ant-design-vue/lib/_util/EventInterface').MouseEventHandler
        >;
      };
      onContextmenu: {
        type: import('vue').PropType<
          import('ant-design-vue/lib/_util/EventInterface').MouseEventHandler
        >;
      };
      onKeydown: {
        type: import('vue').PropType<(event: KeyboardEvent, preventDefault: () => void) => void>;
      };
      role: StringConstructor;
      name: StringConstructor;
      autocomplete: StringConstructor;
      direction: {
        type: import('vue').PropType<'rtl' | 'ltr'>;
      };
      showToday: {
        type: BooleanConstructor;
        default: any;
      };
      showTime: {
        type: import('vue').PropType<
          | boolean
          | import('ant-design-vue/lib/vc-picker/panels/TimePanel').SharedTimeProps<
              import('dayjs').Dayjs
            >
        >;
        default: any;
      };
      locale: {
        type: import('vue').PropType<
          import('ant-design-vue/lib/date-picker/generatePicker').PickerLocale
        >;
      };
      size: {
        type: import('vue').PropType<import('ant-design-vue/lib/button').ButtonSize>;
      };
      bordered: {
        type: BooleanConstructor;
        default: any;
      };
      dateRender: {
        type: import('vue').PropType<
          import('ant-design-vue/lib/vc-picker/panels/DatePanel/DateBody').DateRender<
            import('dayjs').Dayjs
          >
        >;
      };
      disabledDate: {
        type: import('vue').PropType<(date: import('dayjs').Dayjs) => boolean>;
      };
      mode: {
        type: import('vue').PropType<import('ant-design-vue/lib/vc-picker/interface').PanelMode>;
      };
      picker: {
        type: import('vue').PropType<import('ant-design-vue/lib/vc-picker/interface').PickerMode>;
      };
      valueFormat: StringConstructor;
      disabledHours: import('vue').PropType<() => number[]>;
      disabledMinutes: import('vue').PropType<(hour: number) => number[]>;
      disabledSeconds: import('vue').PropType<(hour: number, minute: number) => number[]>;
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
      defaultPickerValue: {
        type: import('vue').PropType<string | import('dayjs').Dayjs>;
      };
      defaultValue: {
        type: import('vue').PropType<string | import('dayjs').Dayjs>;
      };
      value: {
        type: import('vue').PropType<string | import('dayjs').Dayjs>;
      };
      disabledTime: {
        type: import('vue').PropType<
          import('ant-design-vue/lib/vc-picker/interface').DisabledTime<import('dayjs').Dayjs>
        >;
      };
      format: {
        type: import('vue').PropType<
          | string
          | import('ant-design-vue/lib/vc-picker/interface').CustomFormat<import('dayjs').Dayjs>
          | (
              | string
              | import('ant-design-vue/lib/vc-picker/interface').CustomFormat<import('dayjs').Dayjs>
            )[]
        >;
      };
      renderExtraFooter: {
        type: import('vue').PropType<
          (
            mode: import('ant-design-vue/lib/vc-picker/interface').PanelMode,
          ) => import('ant-design-vue/lib/_util/type').VueNode
        >;
      };
      showNow: {
        type: BooleanConstructor;
        default: any;
      };
      monthCellRender: {
        type: import('vue').PropType<
          import('ant-design-vue/lib/vc-picker/panels/MonthPanel/MonthBody').MonthCellRender<
            import('dayjs').Dayjs
          >
        >;
      };
      monthCellContentRender: {
        type: import('vue').PropType<
          import('ant-design-vue/lib/vc-picker/panels/MonthPanel/MonthBody').MonthCellRender<
            import('dayjs').Dayjs
          >
        >;
      };
      id: StringConstructor;
      dropdownClassName: StringConstructor;
      dropdownAlign: {
        type: import('vue').PropType<import('ant-design-vue/lib/vc-align/interface').AlignType>;
      };
      popupStyle: {
        type: import('vue').PropType<import('vue').CSSProperties>;
      };
      transitionName: StringConstructor;
      placeholder: StringConstructor;
      allowClear: {
        type: BooleanConstructor;
        default: any;
      };
      autofocus: {
        type: BooleanConstructor;
        default: any;
      };
      disabled: {
        type: BooleanConstructor;
        default: any;
      };
      tabindex: NumberConstructor;
      open: {
        type: BooleanConstructor;
        default: any;
      };
      defaultOpen: {
        type: BooleanConstructor;
        default: any;
      };
      inputReadOnly: {
        type: BooleanConstructor;
        default: any;
      };
      getPopupContainer: {
        type: import('vue').PropType<(node: HTMLElement) => HTMLElement>;
      };
      panelRender: {
        type: import('vue').PropType<
          (
            originPanel: import('ant-design-vue/lib/_util/type').VueNode,
          ) => import('ant-design-vue/lib/_util/type').VueNode
        >;
      };
      onChange: {
        type: import('vue').PropType<
          (value: string | import('dayjs').Dayjs, dateString: string) => void
        >;
      };
      'onUpdate:value': {
        type: import('vue').PropType<(value: string | import('dayjs').Dayjs) => void>;
      };
      onOk: {
        type: import('vue').PropType<(value: string | import('dayjs').Dayjs) => void>;
      };
      onOpenChange: {
        type: import('vue').PropType<(open: boolean) => void>;
      };
      'onUpdate:open': {
        type: import('vue').PropType<(open: boolean) => void>;
      };
      onFocus: {
        type: import('vue').PropType<
          import('ant-design-vue/lib/_util/EventInterface').FocusEventHandler
        >;
      };
      onBlur: {
        type: import('vue').PropType<
          import('ant-design-vue/lib/_util/EventInterface').FocusEventHandler
        >;
      };
      onMousedown: {
        type: import('vue').PropType<
          import('ant-design-vue/lib/_util/EventInterface').MouseEventHandler
        >;
      };
      onMouseup: {
        type: import('vue').PropType<
          import('ant-design-vue/lib/_util/EventInterface').MouseEventHandler
        >;
      };
      onMouseenter: {
        type: import('vue').PropType<
          import('ant-design-vue/lib/_util/EventInterface').MouseEventHandler
        >;
      };
      onMouseleave: {
        type: import('vue').PropType<
          import('ant-design-vue/lib/_util/EventInterface').MouseEventHandler
        >;
      };
      onClick: {
        type: import('vue').PropType<
          import('ant-design-vue/lib/_util/EventInterface').MouseEventHandler
        >;
      };
      onContextmenu: {
        type: import('vue').PropType<
          import('ant-design-vue/lib/_util/EventInterface').MouseEventHandler
        >;
      };
      onKeydown: {
        type: import('vue').PropType<(event: KeyboardEvent, preventDefault: () => void) => void>;
      };
      role: StringConstructor;
      name: StringConstructor;
      autocomplete: StringConstructor;
      direction: {
        type: import('vue').PropType<'rtl' | 'ltr'>;
      };
      showToday: {
        type: BooleanConstructor;
        default: any;
      };
      showTime: {
        type: import('vue').PropType<
          | boolean
          | import('ant-design-vue/lib/vc-picker/panels/TimePanel').SharedTimeProps<
              import('dayjs').Dayjs
            >
        >;
        default: any;
      };
      locale: {
        type: import('vue').PropType<
          import('ant-design-vue/lib/date-picker/generatePicker').PickerLocale
        >;
      };
      size: {
        type: import('vue').PropType<import('ant-design-vue/lib/button').ButtonSize>;
      };
      bordered: {
        type: BooleanConstructor;
        default: any;
      };
      dateRender: {
        type: import('vue').PropType<
          import('ant-design-vue/lib/vc-picker/panels/DatePanel/DateBody').DateRender<
            import('dayjs').Dayjs
          >
        >;
      };
      disabledDate: {
        type: import('vue').PropType<(date: import('dayjs').Dayjs) => boolean>;
      };
      mode: {
        type: import('vue').PropType<import('ant-design-vue/lib/vc-picker/interface').PanelMode>;
      };
      picker: {
        type: import('vue').PropType<import('ant-design-vue/lib/vc-picker/interface').PickerMode>;
      };
      valueFormat: StringConstructor;
      disabledHours: import('vue').PropType<() => number[]>;
      disabledMinutes: import('vue').PropType<(hour: number) => number[]>;
      disabledSeconds: import('vue').PropType<(hour: number, minute: number) => number[]>;
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
    open: boolean;
    disabled: boolean;
    autofocus: boolean;
    defaultOpen: boolean;
    allowClear: boolean;
    bordered: boolean;
    showTime: any;
    showNow: boolean;
    showToday: boolean;
    inputReadOnly: boolean;
  }
> &
  import('vue').VNodeProps &
  import('vue').AllowedComponentProps &
  import('vue').ComponentCustomProps & {
    WeekPicker: import('vue').DefineComponent<
      {
        defaultPickerValue: {
          type: import('vue').PropType<string | import('dayjs').Dayjs>;
        };
        defaultValue: {
          type: import('vue').PropType<string | import('dayjs').Dayjs>;
        };
        value: {
          type: import('vue').PropType<string | import('dayjs').Dayjs>;
        };
        disabledTime: {
          type: import('vue').PropType<
            import('ant-design-vue/lib/vc-picker/interface').DisabledTime<import('dayjs').Dayjs>
          >;
        };
        format: {
          type: import('vue').PropType<
            | string
            | import('ant-design-vue/lib/vc-picker/interface').CustomFormat<import('dayjs').Dayjs>
            | (
                | string
                | import('ant-design-vue/lib/vc-picker/interface').CustomFormat<
                    import('dayjs').Dayjs
                  >
              )[]
          >;
        };
        renderExtraFooter: {
          type: import('vue').PropType<
            (
              mode: import('ant-design-vue/lib/vc-picker/interface').PanelMode,
            ) => import('ant-design-vue/lib/_util/type').VueNode
          >;
        };
        showNow: {
          type: BooleanConstructor;
          default: any;
        };
        monthCellRender: {
          type: import('vue').PropType<
            import('ant-design-vue/lib/vc-picker/panels/MonthPanel/MonthBody').MonthCellRender<
              import('dayjs').Dayjs
            >
          >;
        };
        monthCellContentRender: {
          type: import('vue').PropType<
            import('ant-design-vue/lib/vc-picker/panels/MonthPanel/MonthBody').MonthCellRender<
              import('dayjs').Dayjs
            >
          >;
        };
        id: StringConstructor;
        dropdownClassName: StringConstructor;
        dropdownAlign: {
          type: import('vue').PropType<import('ant-design-vue/lib/vc-align/interface').AlignType>;
        };
        popupStyle: {
          type: import('vue').PropType<import('vue').CSSProperties>;
        };
        transitionName: StringConstructor;
        placeholder: StringConstructor;
        allowClear: {
          type: BooleanConstructor;
          default: any;
        };
        autofocus: {
          type: BooleanConstructor;
          default: any;
        };
        disabled: {
          type: BooleanConstructor;
          default: any;
        };
        tabindex: NumberConstructor;
        open: {
          type: BooleanConstructor;
          default: any;
        };
        defaultOpen: {
          type: BooleanConstructor;
          default: any;
        };
        inputReadOnly: {
          type: BooleanConstructor;
          default: any;
        };
        getPopupContainer: {
          type: import('vue').PropType<(node: HTMLElement) => HTMLElement>;
        };
        panelRender: {
          type: import('vue').PropType<
            (
              originPanel: import('ant-design-vue/lib/_util/type').VueNode,
            ) => import('ant-design-vue/lib/_util/type').VueNode
          >;
        };
        onChange: {
          type: import('vue').PropType<
            (value: string | import('dayjs').Dayjs, dateString: string) => void
          >;
        };
        'onUpdate:value': {
          type: import('vue').PropType<(value: string | import('dayjs').Dayjs) => void>;
        };
        onOk: {
          type: import('vue').PropType<(value: string | import('dayjs').Dayjs) => void>;
        };
        onOpenChange: {
          type: import('vue').PropType<(open: boolean) => void>;
        };
        'onUpdate:open': {
          type: import('vue').PropType<(open: boolean) => void>;
        };
        onFocus: {
          type: import('vue').PropType<
            import('ant-design-vue/lib/_util/EventInterface').FocusEventHandler
          >;
        };
        onBlur: {
          type: import('vue').PropType<
            import('ant-design-vue/lib/_util/EventInterface').FocusEventHandler
          >;
        };
        onMousedown: {
          type: import('vue').PropType<
            import('ant-design-vue/lib/_util/EventInterface').MouseEventHandler
          >;
        };
        onMouseup: {
          type: import('vue').PropType<
            import('ant-design-vue/lib/_util/EventInterface').MouseEventHandler
          >;
        };
        onMouseenter: {
          type: import('vue').PropType<
            import('ant-design-vue/lib/_util/EventInterface').MouseEventHandler
          >;
        };
        onMouseleave: {
          type: import('vue').PropType<
            import('ant-design-vue/lib/_util/EventInterface').MouseEventHandler
          >;
        };
        onClick: {
          type: import('vue').PropType<
            import('ant-design-vue/lib/_util/EventInterface').MouseEventHandler
          >;
        };
        onContextmenu: {
          type: import('vue').PropType<
            import('ant-design-vue/lib/_util/EventInterface').MouseEventHandler
          >;
        };
        onKeydown: {
          type: import('vue').PropType<(event: KeyboardEvent, preventDefault: () => void) => void>;
        };
        role: StringConstructor;
        name: StringConstructor;
        autocomplete: StringConstructor;
        direction: {
          type: import('vue').PropType<'rtl' | 'ltr'>;
        };
        showToday: {
          type: BooleanConstructor;
          default: any;
        };
        showTime: {
          type: import('vue').PropType<
            | boolean
            | import('ant-design-vue/lib/vc-picker/panels/TimePanel').SharedTimeProps<
                import('dayjs').Dayjs
              >
          >;
          default: any;
        };
        locale: {
          type: import('vue').PropType<
            import('ant-design-vue/lib/date-picker/generatePicker').PickerLocale
          >;
        };
        size: {
          type: import('vue').PropType<import('ant-design-vue/lib/button').ButtonSize>;
        };
        bordered: {
          type: BooleanConstructor;
          default: any;
        };
        dateRender: {
          type: import('vue').PropType<
            import('ant-design-vue/lib/vc-picker/panels/DatePanel/DateBody').DateRender<
              import('dayjs').Dayjs
            >
          >;
        };
        disabledDate: {
          type: import('vue').PropType<(date: import('dayjs').Dayjs) => boolean>;
        };
        mode: {
          type: import('vue').PropType<import('ant-design-vue/lib/vc-picker/interface').PanelMode>;
        };
        picker: {
          type: import('vue').PropType<import('ant-design-vue/lib/vc-picker/interface').PickerMode>;
        };
        valueFormat: StringConstructor;
        disabledHours: import('vue').PropType<() => number[]>;
        disabledMinutes: import('vue').PropType<(hour: number) => number[]>;
        disabledSeconds: import('vue').PropType<(hour: number, minute: number) => number[]>;
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
          defaultPickerValue: {
            type: import('vue').PropType<string | import('dayjs').Dayjs>;
          };
          defaultValue: {
            type: import('vue').PropType<string | import('dayjs').Dayjs>;
          };
          value: {
            type: import('vue').PropType<string | import('dayjs').Dayjs>;
          };
          disabledTime: {
            type: import('vue').PropType<
              import('ant-design-vue/lib/vc-picker/interface').DisabledTime<import('dayjs').Dayjs>
            >;
          };
          format: {
            type: import('vue').PropType<
              | string
              | import('ant-design-vue/lib/vc-picker/interface').CustomFormat<import('dayjs').Dayjs>
              | (
                  | string
                  | import('ant-design-vue/lib/vc-picker/interface').CustomFormat<
                      import('dayjs').Dayjs
                    >
                )[]
            >;
          };
          renderExtraFooter: {
            type: import('vue').PropType<
              (
                mode: import('ant-design-vue/lib/vc-picker/interface').PanelMode,
              ) => import('ant-design-vue/lib/_util/type').VueNode
            >;
          };
          showNow: {
            type: BooleanConstructor;
            default: any;
          };
          monthCellRender: {
            type: import('vue').PropType<
              import('ant-design-vue/lib/vc-picker/panels/MonthPanel/MonthBody').MonthCellRender<
                import('dayjs').Dayjs
              >
            >;
          };
          monthCellContentRender: {
            type: import('vue').PropType<
              import('ant-design-vue/lib/vc-picker/panels/MonthPanel/MonthBody').MonthCellRender<
                import('dayjs').Dayjs
              >
            >;
          };
          id: StringConstructor;
          dropdownClassName: StringConstructor;
          dropdownAlign: {
            type: import('vue').PropType<import('ant-design-vue/lib/vc-align/interface').AlignType>;
          };
          popupStyle: {
            type: import('vue').PropType<import('vue').CSSProperties>;
          };
          transitionName: StringConstructor;
          placeholder: StringConstructor;
          allowClear: {
            type: BooleanConstructor;
            default: any;
          };
          autofocus: {
            type: BooleanConstructor;
            default: any;
          };
          disabled: {
            type: BooleanConstructor;
            default: any;
          };
          tabindex: NumberConstructor;
          open: {
            type: BooleanConstructor;
            default: any;
          };
          defaultOpen: {
            type: BooleanConstructor;
            default: any;
          };
          inputReadOnly: {
            type: BooleanConstructor;
            default: any;
          };
          getPopupContainer: {
            type: import('vue').PropType<(node: HTMLElement) => HTMLElement>;
          };
          panelRender: {
            type: import('vue').PropType<
              (
                originPanel: import('ant-design-vue/lib/_util/type').VueNode,
              ) => import('ant-design-vue/lib/_util/type').VueNode
            >;
          };
          onChange: {
            type: import('vue').PropType<
              (value: string | import('dayjs').Dayjs, dateString: string) => void
            >;
          };
          'onUpdate:value': {
            type: import('vue').PropType<(value: string | import('dayjs').Dayjs) => void>;
          };
          onOk: {
            type: import('vue').PropType<(value: string | import('dayjs').Dayjs) => void>;
          };
          onOpenChange: {
            type: import('vue').PropType<(open: boolean) => void>;
          };
          'onUpdate:open': {
            type: import('vue').PropType<(open: boolean) => void>;
          };
          onFocus: {
            type: import('vue').PropType<
              import('ant-design-vue/lib/_util/EventInterface').FocusEventHandler
            >;
          };
          onBlur: {
            type: import('vue').PropType<
              import('ant-design-vue/lib/_util/EventInterface').FocusEventHandler
            >;
          };
          onMousedown: {
            type: import('vue').PropType<
              import('ant-design-vue/lib/_util/EventInterface').MouseEventHandler
            >;
          };
          onMouseup: {
            type: import('vue').PropType<
              import('ant-design-vue/lib/_util/EventInterface').MouseEventHandler
            >;
          };
          onMouseenter: {
            type: import('vue').PropType<
              import('ant-design-vue/lib/_util/EventInterface').MouseEventHandler
            >;
          };
          onMouseleave: {
            type: import('vue').PropType<
              import('ant-design-vue/lib/_util/EventInterface').MouseEventHandler
            >;
          };
          onClick: {
            type: import('vue').PropType<
              import('ant-design-vue/lib/_util/EventInterface').MouseEventHandler
            >;
          };
          onContextmenu: {
            type: import('vue').PropType<
              import('ant-design-vue/lib/_util/EventInterface').MouseEventHandler
            >;
          };
          onKeydown: {
            type: import('vue').PropType<
              (event: KeyboardEvent, preventDefault: () => void) => void
            >;
          };
          role: StringConstructor;
          name: StringConstructor;
          autocomplete: StringConstructor;
          direction: {
            type: import('vue').PropType<'rtl' | 'ltr'>;
          };
          showToday: {
            type: BooleanConstructor;
            default: any;
          };
          showTime: {
            type: import('vue').PropType<
              | boolean
              | import('ant-design-vue/lib/vc-picker/panels/TimePanel').SharedTimeProps<
                  import('dayjs').Dayjs
                >
            >;
            default: any;
          };
          locale: {
            type: import('vue').PropType<
              import('ant-design-vue/lib/date-picker/generatePicker').PickerLocale
            >;
          };
          size: {
            type: import('vue').PropType<import('ant-design-vue/lib/button').ButtonSize>;
          };
          bordered: {
            type: BooleanConstructor;
            default: any;
          };
          dateRender: {
            type: import('vue').PropType<
              import('ant-design-vue/lib/vc-picker/panels/DatePanel/DateBody').DateRender<
                import('dayjs').Dayjs
              >
            >;
          };
          disabledDate: {
            type: import('vue').PropType<(date: import('dayjs').Dayjs) => boolean>;
          };
          mode: {
            type: import('vue').PropType<
              import('ant-design-vue/lib/vc-picker/interface').PanelMode
            >;
          };
          picker: {
            type: import('vue').PropType<
              import('ant-design-vue/lib/vc-picker/interface').PickerMode
            >;
          };
          valueFormat: StringConstructor;
          disabledHours: import('vue').PropType<() => number[]>;
          disabledMinutes: import('vue').PropType<(hour: number) => number[]>;
          disabledSeconds: import('vue').PropType<(hour: number, minute: number) => number[]>;
        }>
      >,
      {
        open: boolean;
        disabled: boolean;
        autofocus: boolean;
        defaultOpen: boolean;
        allowClear: boolean;
        bordered: boolean;
        showTime: any;
        showNow: boolean;
        showToday: boolean;
        inputReadOnly: boolean;
      }
    >;
    MonthPicker: import('vue').DefineComponent<
      {
        defaultPickerValue: {
          type: import('vue').PropType<string | import('dayjs').Dayjs>;
        };
        defaultValue: {
          type: import('vue').PropType<string | import('dayjs').Dayjs>;
        };
        value: {
          type: import('vue').PropType<string | import('dayjs').Dayjs>;
        };
        disabledTime: {
          type: import('vue').PropType<
            import('ant-design-vue/lib/vc-picker/interface').DisabledTime<import('dayjs').Dayjs>
          >;
        };
        format: {
          type: import('vue').PropType<
            | string
            | import('ant-design-vue/lib/vc-picker/interface').CustomFormat<import('dayjs').Dayjs>
            | (
                | string
                | import('ant-design-vue/lib/vc-picker/interface').CustomFormat<
                    import('dayjs').Dayjs
                  >
              )[]
          >;
        };
        renderExtraFooter: {
          type: import('vue').PropType<
            (
              mode: import('ant-design-vue/lib/vc-picker/interface').PanelMode,
            ) => import('ant-design-vue/lib/_util/type').VueNode
          >;
        };
        showNow: {
          type: BooleanConstructor;
          default: any;
        };
        monthCellRender: {
          type: import('vue').PropType<
            import('ant-design-vue/lib/vc-picker/panels/MonthPanel/MonthBody').MonthCellRender<
              import('dayjs').Dayjs
            >
          >;
        };
        monthCellContentRender: {
          type: import('vue').PropType<
            import('ant-design-vue/lib/vc-picker/panels/MonthPanel/MonthBody').MonthCellRender<
              import('dayjs').Dayjs
            >
          >;
        };
        id: StringConstructor;
        dropdownClassName: StringConstructor;
        dropdownAlign: {
          type: import('vue').PropType<import('ant-design-vue/lib/vc-align/interface').AlignType>;
        };
        popupStyle: {
          type: import('vue').PropType<import('vue').CSSProperties>;
        };
        transitionName: StringConstructor;
        placeholder: StringConstructor;
        allowClear: {
          type: BooleanConstructor;
          default: any;
        };
        autofocus: {
          type: BooleanConstructor;
          default: any;
        };
        disabled: {
          type: BooleanConstructor;
          default: any;
        };
        tabindex: NumberConstructor;
        open: {
          type: BooleanConstructor;
          default: any;
        };
        defaultOpen: {
          type: BooleanConstructor;
          default: any;
        };
        inputReadOnly: {
          type: BooleanConstructor;
          default: any;
        };
        getPopupContainer: {
          type: import('vue').PropType<(node: HTMLElement) => HTMLElement>;
        };
        panelRender: {
          type: import('vue').PropType<
            (
              originPanel: import('ant-design-vue/lib/_util/type').VueNode,
            ) => import('ant-design-vue/lib/_util/type').VueNode
          >;
        };
        onChange: {
          type: import('vue').PropType<
            (value: string | import('dayjs').Dayjs, dateString: string) => void
          >;
        };
        'onUpdate:value': {
          type: import('vue').PropType<(value: string | import('dayjs').Dayjs) => void>;
        };
        onOk: {
          type: import('vue').PropType<(value: string | import('dayjs').Dayjs) => void>;
        };
        onOpenChange: {
          type: import('vue').PropType<(open: boolean) => void>;
        };
        'onUpdate:open': {
          type: import('vue').PropType<(open: boolean) => void>;
        };
        onFocus: {
          type: import('vue').PropType<
            import('ant-design-vue/lib/_util/EventInterface').FocusEventHandler
          >;
        };
        onBlur: {
          type: import('vue').PropType<
            import('ant-design-vue/lib/_util/EventInterface').FocusEventHandler
          >;
        };
        onMousedown: {
          type: import('vue').PropType<
            import('ant-design-vue/lib/_util/EventInterface').MouseEventHandler
          >;
        };
        onMouseup: {
          type: import('vue').PropType<
            import('ant-design-vue/lib/_util/EventInterface').MouseEventHandler
          >;
        };
        onMouseenter: {
          type: import('vue').PropType<
            import('ant-design-vue/lib/_util/EventInterface').MouseEventHandler
          >;
        };
        onMouseleave: {
          type: import('vue').PropType<
            import('ant-design-vue/lib/_util/EventInterface').MouseEventHandler
          >;
        };
        onClick: {
          type: import('vue').PropType<
            import('ant-design-vue/lib/_util/EventInterface').MouseEventHandler
          >;
        };
        onContextmenu: {
          type: import('vue').PropType<
            import('ant-design-vue/lib/_util/EventInterface').MouseEventHandler
          >;
        };
        onKeydown: {
          type: import('vue').PropType<(event: KeyboardEvent, preventDefault: () => void) => void>;
        };
        role: StringConstructor;
        name: StringConstructor;
        autocomplete: StringConstructor;
        direction: {
          type: import('vue').PropType<'rtl' | 'ltr'>;
        };
        showToday: {
          type: BooleanConstructor;
          default: any;
        };
        showTime: {
          type: import('vue').PropType<
            | boolean
            | import('ant-design-vue/lib/vc-picker/panels/TimePanel').SharedTimeProps<
                import('dayjs').Dayjs
              >
          >;
          default: any;
        };
        locale: {
          type: import('vue').PropType<
            import('ant-design-vue/lib/date-picker/generatePicker').PickerLocale
          >;
        };
        size: {
          type: import('vue').PropType<import('ant-design-vue/lib/button').ButtonSize>;
        };
        bordered: {
          type: BooleanConstructor;
          default: any;
        };
        dateRender: {
          type: import('vue').PropType<
            import('ant-design-vue/lib/vc-picker/panels/DatePanel/DateBody').DateRender<
              import('dayjs').Dayjs
            >
          >;
        };
        disabledDate: {
          type: import('vue').PropType<(date: import('dayjs').Dayjs) => boolean>;
        };
        mode: {
          type: import('vue').PropType<import('ant-design-vue/lib/vc-picker/interface').PanelMode>;
        };
        picker: {
          type: import('vue').PropType<import('ant-design-vue/lib/vc-picker/interface').PickerMode>;
        };
        valueFormat: StringConstructor;
        disabledHours: import('vue').PropType<() => number[]>;
        disabledMinutes: import('vue').PropType<(hour: number) => number[]>;
        disabledSeconds: import('vue').PropType<(hour: number, minute: number) => number[]>;
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
          defaultPickerValue: {
            type: import('vue').PropType<string | import('dayjs').Dayjs>;
          };
          defaultValue: {
            type: import('vue').PropType<string | import('dayjs').Dayjs>;
          };
          value: {
            type: import('vue').PropType<string | import('dayjs').Dayjs>;
          };
          disabledTime: {
            type: import('vue').PropType<
              import('ant-design-vue/lib/vc-picker/interface').DisabledTime<import('dayjs').Dayjs>
            >;
          };
          format: {
            type: import('vue').PropType<
              | string
              | import('ant-design-vue/lib/vc-picker/interface').CustomFormat<import('dayjs').Dayjs>
              | (
                  | string
                  | import('ant-design-vue/lib/vc-picker/interface').CustomFormat<
                      import('dayjs').Dayjs
                    >
                )[]
            >;
          };
          renderExtraFooter: {
            type: import('vue').PropType<
              (
                mode: import('ant-design-vue/lib/vc-picker/interface').PanelMode,
              ) => import('ant-design-vue/lib/_util/type').VueNode
            >;
          };
          showNow: {
            type: BooleanConstructor;
            default: any;
          };
          monthCellRender: {
            type: import('vue').PropType<
              import('ant-design-vue/lib/vc-picker/panels/MonthPanel/MonthBody').MonthCellRender<
                import('dayjs').Dayjs
              >
            >;
          };
          monthCellContentRender: {
            type: import('vue').PropType<
              import('ant-design-vue/lib/vc-picker/panels/MonthPanel/MonthBody').MonthCellRender<
                import('dayjs').Dayjs
              >
            >;
          };
          id: StringConstructor;
          dropdownClassName: StringConstructor;
          dropdownAlign: {
            type: import('vue').PropType<import('ant-design-vue/lib/vc-align/interface').AlignType>;
          };
          popupStyle: {
            type: import('vue').PropType<import('vue').CSSProperties>;
          };
          transitionName: StringConstructor;
          placeholder: StringConstructor;
          allowClear: {
            type: BooleanConstructor;
            default: any;
          };
          autofocus: {
            type: BooleanConstructor;
            default: any;
          };
          disabled: {
            type: BooleanConstructor;
            default: any;
          };
          tabindex: NumberConstructor;
          open: {
            type: BooleanConstructor;
            default: any;
          };
          defaultOpen: {
            type: BooleanConstructor;
            default: any;
          };
          inputReadOnly: {
            type: BooleanConstructor;
            default: any;
          };
          getPopupContainer: {
            type: import('vue').PropType<(node: HTMLElement) => HTMLElement>;
          };
          panelRender: {
            type: import('vue').PropType<
              (
                originPanel: import('ant-design-vue/lib/_util/type').VueNode,
              ) => import('ant-design-vue/lib/_util/type').VueNode
            >;
          };
          onChange: {
            type: import('vue').PropType<
              (value: string | import('dayjs').Dayjs, dateString: string) => void
            >;
          };
          'onUpdate:value': {
            type: import('vue').PropType<(value: string | import('dayjs').Dayjs) => void>;
          };
          onOk: {
            type: import('vue').PropType<(value: string | import('dayjs').Dayjs) => void>;
          };
          onOpenChange: {
            type: import('vue').PropType<(open: boolean) => void>;
          };
          'onUpdate:open': {
            type: import('vue').PropType<(open: boolean) => void>;
          };
          onFocus: {
            type: import('vue').PropType<
              import('ant-design-vue/lib/_util/EventInterface').FocusEventHandler
            >;
          };
          onBlur: {
            type: import('vue').PropType<
              import('ant-design-vue/lib/_util/EventInterface').FocusEventHandler
            >;
          };
          onMousedown: {
            type: import('vue').PropType<
              import('ant-design-vue/lib/_util/EventInterface').MouseEventHandler
            >;
          };
          onMouseup: {
            type: import('vue').PropType<
              import('ant-design-vue/lib/_util/EventInterface').MouseEventHandler
            >;
          };
          onMouseenter: {
            type: import('vue').PropType<
              import('ant-design-vue/lib/_util/EventInterface').MouseEventHandler
            >;
          };
          onMouseleave: {
            type: import('vue').PropType<
              import('ant-design-vue/lib/_util/EventInterface').MouseEventHandler
            >;
          };
          onClick: {
            type: import('vue').PropType<
              import('ant-design-vue/lib/_util/EventInterface').MouseEventHandler
            >;
          };
          onContextmenu: {
            type: import('vue').PropType<
              import('ant-design-vue/lib/_util/EventInterface').MouseEventHandler
            >;
          };
          onKeydown: {
            type: import('vue').PropType<
              (event: KeyboardEvent, preventDefault: () => void) => void
            >;
          };
          role: StringConstructor;
          name: StringConstructor;
          autocomplete: StringConstructor;
          direction: {
            type: import('vue').PropType<'rtl' | 'ltr'>;
          };
          showToday: {
            type: BooleanConstructor;
            default: any;
          };
          showTime: {
            type: import('vue').PropType<
              | boolean
              | import('ant-design-vue/lib/vc-picker/panels/TimePanel').SharedTimeProps<
                  import('dayjs').Dayjs
                >
            >;
            default: any;
          };
          locale: {
            type: import('vue').PropType<
              import('ant-design-vue/lib/date-picker/generatePicker').PickerLocale
            >;
          };
          size: {
            type: import('vue').PropType<import('ant-design-vue/lib/button').ButtonSize>;
          };
          bordered: {
            type: BooleanConstructor;
            default: any;
          };
          dateRender: {
            type: import('vue').PropType<
              import('ant-design-vue/lib/vc-picker/panels/DatePanel/DateBody').DateRender<
                import('dayjs').Dayjs
              >
            >;
          };
          disabledDate: {
            type: import('vue').PropType<(date: import('dayjs').Dayjs) => boolean>;
          };
          mode: {
            type: import('vue').PropType<
              import('ant-design-vue/lib/vc-picker/interface').PanelMode
            >;
          };
          picker: {
            type: import('vue').PropType<
              import('ant-design-vue/lib/vc-picker/interface').PickerMode
            >;
          };
          valueFormat: StringConstructor;
          disabledHours: import('vue').PropType<() => number[]>;
          disabledMinutes: import('vue').PropType<(hour: number) => number[]>;
          disabledSeconds: import('vue').PropType<(hour: number, minute: number) => number[]>;
        }>
      >,
      {
        open: boolean;
        disabled: boolean;
        autofocus: boolean;
        defaultOpen: boolean;
        allowClear: boolean;
        bordered: boolean;
        showTime: any;
        showNow: boolean;
        showToday: boolean;
        inputReadOnly: boolean;
      }
    >;
    YearPicker: import('vue').DefineComponent<
      {
        defaultPickerValue: {
          type: import('vue').PropType<string | import('dayjs').Dayjs>;
        };
        defaultValue: {
          type: import('vue').PropType<string | import('dayjs').Dayjs>;
        };
        value: {
          type: import('vue').PropType<string | import('dayjs').Dayjs>;
        };
        disabledTime: {
          type: import('vue').PropType<
            import('ant-design-vue/lib/vc-picker/interface').DisabledTime<import('dayjs').Dayjs>
          >;
        };
        format: {
          type: import('vue').PropType<
            | string
            | import('ant-design-vue/lib/vc-picker/interface').CustomFormat<import('dayjs').Dayjs>
            | (
                | string
                | import('ant-design-vue/lib/vc-picker/interface').CustomFormat<
                    import('dayjs').Dayjs
                  >
              )[]
          >;
        };
        renderExtraFooter: {
          type: import('vue').PropType<
            (
              mode: import('ant-design-vue/lib/vc-picker/interface').PanelMode,
            ) => import('ant-design-vue/lib/_util/type').VueNode
          >;
        };
        showNow: {
          type: BooleanConstructor;
          default: any;
        };
        monthCellRender: {
          type: import('vue').PropType<
            import('ant-design-vue/lib/vc-picker/panels/MonthPanel/MonthBody').MonthCellRender<
              import('dayjs').Dayjs
            >
          >;
        };
        monthCellContentRender: {
          type: import('vue').PropType<
            import('ant-design-vue/lib/vc-picker/panels/MonthPanel/MonthBody').MonthCellRender<
              import('dayjs').Dayjs
            >
          >;
        };
        id: StringConstructor;
        dropdownClassName: StringConstructor;
        dropdownAlign: {
          type: import('vue').PropType<import('ant-design-vue/lib/vc-align/interface').AlignType>;
        };
        popupStyle: {
          type: import('vue').PropType<import('vue').CSSProperties>;
        };
        transitionName: StringConstructor;
        placeholder: StringConstructor;
        allowClear: {
          type: BooleanConstructor;
          default: any;
        };
        autofocus: {
          type: BooleanConstructor;
          default: any;
        };
        disabled: {
          type: BooleanConstructor;
          default: any;
        };
        tabindex: NumberConstructor;
        open: {
          type: BooleanConstructor;
          default: any;
        };
        defaultOpen: {
          type: BooleanConstructor;
          default: any;
        };
        inputReadOnly: {
          type: BooleanConstructor;
          default: any;
        };
        getPopupContainer: {
          type: import('vue').PropType<(node: HTMLElement) => HTMLElement>;
        };
        panelRender: {
          type: import('vue').PropType<
            (
              originPanel: import('ant-design-vue/lib/_util/type').VueNode,
            ) => import('ant-design-vue/lib/_util/type').VueNode
          >;
        };
        onChange: {
          type: import('vue').PropType<
            (value: string | import('dayjs').Dayjs, dateString: string) => void
          >;
        };
        'onUpdate:value': {
          type: import('vue').PropType<(value: string | import('dayjs').Dayjs) => void>;
        };
        onOk: {
          type: import('vue').PropType<(value: string | import('dayjs').Dayjs) => void>;
        };
        onOpenChange: {
          type: import('vue').PropType<(open: boolean) => void>;
        };
        'onUpdate:open': {
          type: import('vue').PropType<(open: boolean) => void>;
        };
        onFocus: {
          type: import('vue').PropType<
            import('ant-design-vue/lib/_util/EventInterface').FocusEventHandler
          >;
        };
        onBlur: {
          type: import('vue').PropType<
            import('ant-design-vue/lib/_util/EventInterface').FocusEventHandler
          >;
        };
        onMousedown: {
          type: import('vue').PropType<
            import('ant-design-vue/lib/_util/EventInterface').MouseEventHandler
          >;
        };
        onMouseup: {
          type: import('vue').PropType<
            import('ant-design-vue/lib/_util/EventInterface').MouseEventHandler
          >;
        };
        onMouseenter: {
          type: import('vue').PropType<
            import('ant-design-vue/lib/_util/EventInterface').MouseEventHandler
          >;
        };
        onMouseleave: {
          type: import('vue').PropType<
            import('ant-design-vue/lib/_util/EventInterface').MouseEventHandler
          >;
        };
        onClick: {
          type: import('vue').PropType<
            import('ant-design-vue/lib/_util/EventInterface').MouseEventHandler
          >;
        };
        onContextmenu: {
          type: import('vue').PropType<
            import('ant-design-vue/lib/_util/EventInterface').MouseEventHandler
          >;
        };
        onKeydown: {
          type: import('vue').PropType<(event: KeyboardEvent, preventDefault: () => void) => void>;
        };
        role: StringConstructor;
        name: StringConstructor;
        autocomplete: StringConstructor;
        direction: {
          type: import('vue').PropType<'rtl' | 'ltr'>;
        };
        showToday: {
          type: BooleanConstructor;
          default: any;
        };
        showTime: {
          type: import('vue').PropType<
            | boolean
            | import('ant-design-vue/lib/vc-picker/panels/TimePanel').SharedTimeProps<
                import('dayjs').Dayjs
              >
          >;
          default: any;
        };
        locale: {
          type: import('vue').PropType<
            import('ant-design-vue/lib/date-picker/generatePicker').PickerLocale
          >;
        };
        size: {
          type: import('vue').PropType<import('ant-design-vue/lib/button').ButtonSize>;
        };
        bordered: {
          type: BooleanConstructor;
          default: any;
        };
        dateRender: {
          type: import('vue').PropType<
            import('ant-design-vue/lib/vc-picker/panels/DatePanel/DateBody').DateRender<
              import('dayjs').Dayjs
            >
          >;
        };
        disabledDate: {
          type: import('vue').PropType<(date: import('dayjs').Dayjs) => boolean>;
        };
        mode: {
          type: import('vue').PropType<import('ant-design-vue/lib/vc-picker/interface').PanelMode>;
        };
        picker: {
          type: import('vue').PropType<import('ant-design-vue/lib/vc-picker/interface').PickerMode>;
        };
        valueFormat: StringConstructor;
        disabledHours: import('vue').PropType<() => number[]>;
        disabledMinutes: import('vue').PropType<(hour: number) => number[]>;
        disabledSeconds: import('vue').PropType<(hour: number, minute: number) => number[]>;
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
          defaultPickerValue: {
            type: import('vue').PropType<string | import('dayjs').Dayjs>;
          };
          defaultValue: {
            type: import('vue').PropType<string | import('dayjs').Dayjs>;
          };
          value: {
            type: import('vue').PropType<string | import('dayjs').Dayjs>;
          };
          disabledTime: {
            type: import('vue').PropType<
              import('ant-design-vue/lib/vc-picker/interface').DisabledTime<import('dayjs').Dayjs>
            >;
          };
          format: {
            type: import('vue').PropType<
              | string
              | import('ant-design-vue/lib/vc-picker/interface').CustomFormat<import('dayjs').Dayjs>
              | (
                  | string
                  | import('ant-design-vue/lib/vc-picker/interface').CustomFormat<
                      import('dayjs').Dayjs
                    >
                )[]
            >;
          };
          renderExtraFooter: {
            type: import('vue').PropType<
              (
                mode: import('ant-design-vue/lib/vc-picker/interface').PanelMode,
              ) => import('ant-design-vue/lib/_util/type').VueNode
            >;
          };
          showNow: {
            type: BooleanConstructor;
            default: any;
          };
          monthCellRender: {
            type: import('vue').PropType<
              import('ant-design-vue/lib/vc-picker/panels/MonthPanel/MonthBody').MonthCellRender<
                import('dayjs').Dayjs
              >
            >;
          };
          monthCellContentRender: {
            type: import('vue').PropType<
              import('ant-design-vue/lib/vc-picker/panels/MonthPanel/MonthBody').MonthCellRender<
                import('dayjs').Dayjs
              >
            >;
          };
          id: StringConstructor;
          dropdownClassName: StringConstructor;
          dropdownAlign: {
            type: import('vue').PropType<import('ant-design-vue/lib/vc-align/interface').AlignType>;
          };
          popupStyle: {
            type: import('vue').PropType<import('vue').CSSProperties>;
          };
          transitionName: StringConstructor;
          placeholder: StringConstructor;
          allowClear: {
            type: BooleanConstructor;
            default: any;
          };
          autofocus: {
            type: BooleanConstructor;
            default: any;
          };
          disabled: {
            type: BooleanConstructor;
            default: any;
          };
          tabindex: NumberConstructor;
          open: {
            type: BooleanConstructor;
            default: any;
          };
          defaultOpen: {
            type: BooleanConstructor;
            default: any;
          };
          inputReadOnly: {
            type: BooleanConstructor;
            default: any;
          };
          getPopupContainer: {
            type: import('vue').PropType<(node: HTMLElement) => HTMLElement>;
          };
          panelRender: {
            type: import('vue').PropType<
              (
                originPanel: import('ant-design-vue/lib/_util/type').VueNode,
              ) => import('ant-design-vue/lib/_util/type').VueNode
            >;
          };
          onChange: {
            type: import('vue').PropType<
              (value: string | import('dayjs').Dayjs, dateString: string) => void
            >;
          };
          'onUpdate:value': {
            type: import('vue').PropType<(value: string | import('dayjs').Dayjs) => void>;
          };
          onOk: {
            type: import('vue').PropType<(value: string | import('dayjs').Dayjs) => void>;
          };
          onOpenChange: {
            type: import('vue').PropType<(open: boolean) => void>;
          };
          'onUpdate:open': {
            type: import('vue').PropType<(open: boolean) => void>;
          };
          onFocus: {
            type: import('vue').PropType<
              import('ant-design-vue/lib/_util/EventInterface').FocusEventHandler
            >;
          };
          onBlur: {
            type: import('vue').PropType<
              import('ant-design-vue/lib/_util/EventInterface').FocusEventHandler
            >;
          };
          onMousedown: {
            type: import('vue').PropType<
              import('ant-design-vue/lib/_util/EventInterface').MouseEventHandler
            >;
          };
          onMouseup: {
            type: import('vue').PropType<
              import('ant-design-vue/lib/_util/EventInterface').MouseEventHandler
            >;
          };
          onMouseenter: {
            type: import('vue').PropType<
              import('ant-design-vue/lib/_util/EventInterface').MouseEventHandler
            >;
          };
          onMouseleave: {
            type: import('vue').PropType<
              import('ant-design-vue/lib/_util/EventInterface').MouseEventHandler
            >;
          };
          onClick: {
            type: import('vue').PropType<
              import('ant-design-vue/lib/_util/EventInterface').MouseEventHandler
            >;
          };
          onContextmenu: {
            type: import('vue').PropType<
              import('ant-design-vue/lib/_util/EventInterface').MouseEventHandler
            >;
          };
          onKeydown: {
            type: import('vue').PropType<
              (event: KeyboardEvent, preventDefault: () => void) => void
            >;
          };
          role: StringConstructor;
          name: StringConstructor;
          autocomplete: StringConstructor;
          direction: {
            type: import('vue').PropType<'rtl' | 'ltr'>;
          };
          showToday: {
            type: BooleanConstructor;
            default: any;
          };
          showTime: {
            type: import('vue').PropType<
              | boolean
              | import('ant-design-vue/lib/vc-picker/panels/TimePanel').SharedTimeProps<
                  import('dayjs').Dayjs
                >
            >;
            default: any;
          };
          locale: {
            type: import('vue').PropType<
              import('ant-design-vue/lib/date-picker/generatePicker').PickerLocale
            >;
          };
          size: {
            type: import('vue').PropType<import('ant-design-vue/lib/button').ButtonSize>;
          };
          bordered: {
            type: BooleanConstructor;
            default: any;
          };
          dateRender: {
            type: import('vue').PropType<
              import('ant-design-vue/lib/vc-picker/panels/DatePanel/DateBody').DateRender<
                import('dayjs').Dayjs
              >
            >;
          };
          disabledDate: {
            type: import('vue').PropType<(date: import('dayjs').Dayjs) => boolean>;
          };
          mode: {
            type: import('vue').PropType<
              import('ant-design-vue/lib/vc-picker/interface').PanelMode
            >;
          };
          picker: {
            type: import('vue').PropType<
              import('ant-design-vue/lib/vc-picker/interface').PickerMode
            >;
          };
          valueFormat: StringConstructor;
          disabledHours: import('vue').PropType<() => number[]>;
          disabledMinutes: import('vue').PropType<(hour: number) => number[]>;
          disabledSeconds: import('vue').PropType<(hour: number, minute: number) => number[]>;
        }>
      >,
      {
        open: boolean;
        disabled: boolean;
        autofocus: boolean;
        defaultOpen: boolean;
        allowClear: boolean;
        bordered: boolean;
        showTime: any;
        showNow: boolean;
        showToday: boolean;
        inputReadOnly: boolean;
      }
    >;
    RangePicker: import('vue').DefineComponent<
      {
        allowEmpty: {
          type: import('vue').PropType<[boolean, boolean]>;
        };
        dateRender: {
          type: import('vue').PropType<
            import('ant-design-vue/lib/vc-picker/RangePicker').RangeDateRender<
              import('dayjs').Dayjs
            >
          >;
        };
        defaultPickerValue: {
          type: import('vue').PropType<
            [string, string] | [import('dayjs').Dayjs, import('dayjs').Dayjs]
          >;
        };
        defaultValue: {
          type: import('vue').PropType<
            [string, string] | [import('dayjs').Dayjs, import('dayjs').Dayjs]
          >;
        };
        value: {
          type: import('vue').PropType<
            [string, string] | [import('dayjs').Dayjs, import('dayjs').Dayjs]
          >;
        };
        disabledTime: {
          type: import('vue').PropType<
            (
              date: import('dayjs').Dayjs,
              type: import('ant-design-vue/lib/vc-picker/RangePicker').RangeType,
            ) => import('ant-design-vue/lib/vc-picker/interface').DisabledTimes
          >;
        };
        disabled: {
          type: import('vue').PropType<boolean | [boolean, boolean]>;
        };
        format: StringConstructor;
        renderExtraFooter: {
          type: import('vue').PropType<() => import('ant-design-vue/lib/_util/type').VueNode>;
        };
        separator: {
          type: StringConstructor;
        };
        ranges: {
          type: import('vue').PropType<
            Record<
              string,
              | [import('dayjs').Dayjs, import('dayjs').Dayjs]
              | (() => [import('dayjs').Dayjs, import('dayjs').Dayjs])
            >
          >;
        };
        placeholder: ArrayConstructor;
        mode: {
          type: import('vue').PropType<
            [
              import('ant-design-vue/lib/vc-picker/interface').PanelMode,
              import('ant-design-vue/lib/vc-picker/interface').PanelMode,
            ]
          >;
        };
        onChange: {
          type: import('vue').PropType<
            (
              value: [string, string] | [import('dayjs').Dayjs, import('dayjs').Dayjs],
              dateString: [string, string],
            ) => void
          >;
        };
        'onUpdate:value': {
          type: import('vue').PropType<
            (value: [string, string] | [import('dayjs').Dayjs, import('dayjs').Dayjs]) => void
          >;
        };
        onCalendarChange: {
          type: import('vue').PropType<
            (
              values: [string, string] | [import('dayjs').Dayjs, import('dayjs').Dayjs],
              formatString: [string, string],
              info: import('ant-design-vue/lib/vc-picker/RangePicker').RangeInfo,
            ) => void
          >;
        };
        onPanelChange: {
          type: import('vue').PropType<
            (
              values: [string, string] | [import('dayjs').Dayjs, import('dayjs').Dayjs],
              modes: [
                import('ant-design-vue/lib/vc-picker/interface').PanelMode,
                import('ant-design-vue/lib/vc-picker/interface').PanelMode,
              ],
            ) => void
          >;
        };
        onOk: {
          type: import('vue').PropType<
            (dates: [string, string] | [import('dayjs').Dayjs, import('dayjs').Dayjs]) => void
          >;
        };
        id: StringConstructor;
        dropdownClassName: StringConstructor;
        dropdownAlign: {
          type: import('vue').PropType<import('ant-design-vue/lib/vc-align/interface').AlignType>;
        };
        popupStyle: {
          type: import('vue').PropType<import('vue').CSSProperties>;
        };
        transitionName: StringConstructor;
        allowClear: {
          type: BooleanConstructor;
          default: any;
        };
        autofocus: {
          type: BooleanConstructor;
          default: any;
        };
        tabindex: NumberConstructor;
        open: {
          type: BooleanConstructor;
          default: any;
        };
        defaultOpen: {
          type: BooleanConstructor;
          default: any;
        };
        inputReadOnly: {
          type: BooleanConstructor;
          default: any;
        };
        getPopupContainer: {
          type: import('vue').PropType<(node: HTMLElement) => HTMLElement>;
        };
        panelRender: {
          type: import('vue').PropType<
            (
              originPanel: import('ant-design-vue/lib/_util/type').VueNode,
            ) => import('ant-design-vue/lib/_util/type').VueNode
          >;
        };
        onOpenChange: {
          type: import('vue').PropType<(open: boolean) => void>;
        };
        'onUpdate:open': {
          type: import('vue').PropType<(open: boolean) => void>;
        };
        onFocus: {
          type: import('vue').PropType<
            import('ant-design-vue/lib/_util/EventInterface').FocusEventHandler
          >;
        };
        onBlur: {
          type: import('vue').PropType<
            import('ant-design-vue/lib/_util/EventInterface').FocusEventHandler
          >;
        };
        onMousedown: {
          type: import('vue').PropType<
            import('ant-design-vue/lib/_util/EventInterface').MouseEventHandler
          >;
        };
        onMouseup: {
          type: import('vue').PropType<
            import('ant-design-vue/lib/_util/EventInterface').MouseEventHandler
          >;
        };
        onMouseenter: {
          type: import('vue').PropType<
            import('ant-design-vue/lib/_util/EventInterface').MouseEventHandler
          >;
        };
        onMouseleave: {
          type: import('vue').PropType<
            import('ant-design-vue/lib/_util/EventInterface').MouseEventHandler
          >;
        };
        onClick: {
          type: import('vue').PropType<
            import('ant-design-vue/lib/_util/EventInterface').MouseEventHandler
          >;
        };
        onContextmenu: {
          type: import('vue').PropType<
            import('ant-design-vue/lib/_util/EventInterface').MouseEventHandler
          >;
        };
        onKeydown: {
          type: import('vue').PropType<(event: KeyboardEvent, preventDefault: () => void) => void>;
        };
        role: StringConstructor;
        name: StringConstructor;
        autocomplete: StringConstructor;
        direction: {
          type: import('vue').PropType<'rtl' | 'ltr'>;
        };
        showToday: {
          type: BooleanConstructor;
          default: any;
        };
        showTime: {
          type: import('vue').PropType<
            | boolean
            | import('ant-design-vue/lib/vc-picker/panels/TimePanel').SharedTimeProps<
                import('dayjs').Dayjs
              >
          >;
          default: any;
        };
        locale: {
          type: import('vue').PropType<
            import('ant-design-vue/lib/date-picker/generatePicker').PickerLocale
          >;
        };
        size: {
          type: import('vue').PropType<import('ant-design-vue/lib/button').ButtonSize>;
        };
        bordered: {
          type: BooleanConstructor;
          default: any;
        };
        disabledDate: {
          type: import('vue').PropType<(date: import('dayjs').Dayjs) => boolean>;
        };
        picker: {
          type: import('vue').PropType<import('ant-design-vue/lib/vc-picker/interface').PickerMode>;
        };
        valueFormat: StringConstructor;
        disabledHours: import('vue').PropType<() => number[]>;
        disabledMinutes: import('vue').PropType<(hour: number) => number[]>;
        disabledSeconds: import('vue').PropType<(hour: number, minute: number) => number[]>;
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
          allowEmpty: {
            type: import('vue').PropType<[boolean, boolean]>;
          };
          dateRender: {
            type: import('vue').PropType<
              import('ant-design-vue/lib/vc-picker/RangePicker').RangeDateRender<
                import('dayjs').Dayjs
              >
            >;
          };
          defaultPickerValue: {
            type: import('vue').PropType<
              [string, string] | [import('dayjs').Dayjs, import('dayjs').Dayjs]
            >;
          };
          defaultValue: {
            type: import('vue').PropType<
              [string, string] | [import('dayjs').Dayjs, import('dayjs').Dayjs]
            >;
          };
          value: {
            type: import('vue').PropType<
              [string, string] | [import('dayjs').Dayjs, import('dayjs').Dayjs]
            >;
          };
          disabledTime: {
            type: import('vue').PropType<
              (
                date: import('dayjs').Dayjs,
                type: import('ant-design-vue/lib/vc-picker/RangePicker').RangeType,
              ) => import('ant-design-vue/lib/vc-picker/interface').DisabledTimes
            >;
          };
          disabled: {
            type: import('vue').PropType<boolean | [boolean, boolean]>;
          };
          format: StringConstructor;
          renderExtraFooter: {
            type: import('vue').PropType<() => import('ant-design-vue/lib/_util/type').VueNode>;
          };
          separator: {
            type: StringConstructor;
          };
          ranges: {
            type: import('vue').PropType<
              Record<
                string,
                | [import('dayjs').Dayjs, import('dayjs').Dayjs]
                | (() => [import('dayjs').Dayjs, import('dayjs').Dayjs])
              >
            >;
          };
          placeholder: ArrayConstructor;
          mode: {
            type: import('vue').PropType<
              [
                import('ant-design-vue/lib/vc-picker/interface').PanelMode,
                import('ant-design-vue/lib/vc-picker/interface').PanelMode,
              ]
            >;
          };
          onChange: {
            type: import('vue').PropType<
              (
                value: [string, string] | [import('dayjs').Dayjs, import('dayjs').Dayjs],
                dateString: [string, string],
              ) => void
            >;
          };
          'onUpdate:value': {
            type: import('vue').PropType<
              (value: [string, string] | [import('dayjs').Dayjs, import('dayjs').Dayjs]) => void
            >;
          };
          onCalendarChange: {
            type: import('vue').PropType<
              (
                values: [string, string] | [import('dayjs').Dayjs, import('dayjs').Dayjs],
                formatString: [string, string],
                info: import('ant-design-vue/lib/vc-picker/RangePicker').RangeInfo,
              ) => void
            >;
          };
          onPanelChange: {
            type: import('vue').PropType<
              (
                values: [string, string] | [import('dayjs').Dayjs, import('dayjs').Dayjs],
                modes: [
                  import('ant-design-vue/lib/vc-picker/interface').PanelMode,
                  import('ant-design-vue/lib/vc-picker/interface').PanelMode,
                ],
              ) => void
            >;
          };
          onOk: {
            type: import('vue').PropType<
              (dates: [string, string] | [import('dayjs').Dayjs, import('dayjs').Dayjs]) => void
            >;
          };
          id: StringConstructor;
          dropdownClassName: StringConstructor;
          dropdownAlign: {
            type: import('vue').PropType<import('ant-design-vue/lib/vc-align/interface').AlignType>;
          };
          popupStyle: {
            type: import('vue').PropType<import('vue').CSSProperties>;
          };
          transitionName: StringConstructor;
          allowClear: {
            type: BooleanConstructor;
            default: any;
          };
          autofocus: {
            type: BooleanConstructor;
            default: any;
          };
          tabindex: NumberConstructor;
          open: {
            type: BooleanConstructor;
            default: any;
          };
          defaultOpen: {
            type: BooleanConstructor;
            default: any;
          };
          inputReadOnly: {
            type: BooleanConstructor;
            default: any;
          };
          getPopupContainer: {
            type: import('vue').PropType<(node: HTMLElement) => HTMLElement>;
          };
          panelRender: {
            type: import('vue').PropType<
              (
                originPanel: import('ant-design-vue/lib/_util/type').VueNode,
              ) => import('ant-design-vue/lib/_util/type').VueNode
            >;
          };
          onOpenChange: {
            type: import('vue').PropType<(open: boolean) => void>;
          };
          'onUpdate:open': {
            type: import('vue').PropType<(open: boolean) => void>;
          };
          onFocus: {
            type: import('vue').PropType<
              import('ant-design-vue/lib/_util/EventInterface').FocusEventHandler
            >;
          };
          onBlur: {
            type: import('vue').PropType<
              import('ant-design-vue/lib/_util/EventInterface').FocusEventHandler
            >;
          };
          onMousedown: {
            type: import('vue').PropType<
              import('ant-design-vue/lib/_util/EventInterface').MouseEventHandler
            >;
          };
          onMouseup: {
            type: import('vue').PropType<
              import('ant-design-vue/lib/_util/EventInterface').MouseEventHandler
            >;
          };
          onMouseenter: {
            type: import('vue').PropType<
              import('ant-design-vue/lib/_util/EventInterface').MouseEventHandler
            >;
          };
          onMouseleave: {
            type: import('vue').PropType<
              import('ant-design-vue/lib/_util/EventInterface').MouseEventHandler
            >;
          };
          onClick: {
            type: import('vue').PropType<
              import('ant-design-vue/lib/_util/EventInterface').MouseEventHandler
            >;
          };
          onContextmenu: {
            type: import('vue').PropType<
              import('ant-design-vue/lib/_util/EventInterface').MouseEventHandler
            >;
          };
          onKeydown: {
            type: import('vue').PropType<
              (event: KeyboardEvent, preventDefault: () => void) => void
            >;
          };
          role: StringConstructor;
          name: StringConstructor;
          autocomplete: StringConstructor;
          direction: {
            type: import('vue').PropType<'rtl' | 'ltr'>;
          };
          showToday: {
            type: BooleanConstructor;
            default: any;
          };
          showTime: {
            type: import('vue').PropType<
              | boolean
              | import('ant-design-vue/lib/vc-picker/panels/TimePanel').SharedTimeProps<
                  import('dayjs').Dayjs
                >
            >;
            default: any;
          };
          locale: {
            type: import('vue').PropType<
              import('ant-design-vue/lib/date-picker/generatePicker').PickerLocale
            >;
          };
          size: {
            type: import('vue').PropType<import('ant-design-vue/lib/button').ButtonSize>;
          };
          bordered: {
            type: BooleanConstructor;
            default: any;
          };
          disabledDate: {
            type: import('vue').PropType<(date: import('dayjs').Dayjs) => boolean>;
          };
          picker: {
            type: import('vue').PropType<
              import('ant-design-vue/lib/vc-picker/interface').PickerMode
            >;
          };
          valueFormat: StringConstructor;
          disabledHours: import('vue').PropType<() => number[]>;
          disabledMinutes: import('vue').PropType<(hour: number) => number[]>;
          disabledSeconds: import('vue').PropType<(hour: number, minute: number) => number[]>;
        }>
      >,
      {
        open: boolean;
        autofocus: boolean;
        defaultOpen: boolean;
        allowClear: boolean;
        bordered: boolean;
        showTime: any;
        showToday: boolean;
        inputReadOnly: boolean;
      }
    >;
    TimePicker: import('vue').DefineComponent<
      {
        defaultPickerValue: {
          type: import('vue').PropType<string | import('dayjs').Dayjs>;
        };
        defaultValue: {
          type: import('vue').PropType<string | import('dayjs').Dayjs>;
        };
        value: {
          type: import('vue').PropType<string | import('dayjs').Dayjs>;
        };
        disabledTime: {
          type: import('vue').PropType<
            import('ant-design-vue/lib/vc-picker/interface').DisabledTime<import('dayjs').Dayjs>
          >;
        };
        format: {
          type: import('vue').PropType<
            | string
            | import('ant-design-vue/lib/vc-picker/interface').CustomFormat<import('dayjs').Dayjs>
            | (
                | string
                | import('ant-design-vue/lib/vc-picker/interface').CustomFormat<
                    import('dayjs').Dayjs
                  >
              )[]
          >;
        };
        renderExtraFooter: {
          type: import('vue').PropType<
            (
              mode: import('ant-design-vue/lib/vc-picker/interface').PanelMode,
            ) => import('ant-design-vue/lib/_util/type').VueNode
          >;
        };
        showNow: {
          type: BooleanConstructor;
          default: any;
        };
        monthCellRender: {
          type: import('vue').PropType<
            import('ant-design-vue/lib/vc-picker/panels/MonthPanel/MonthBody').MonthCellRender<
              import('dayjs').Dayjs
            >
          >;
        };
        monthCellContentRender: {
          type: import('vue').PropType<
            import('ant-design-vue/lib/vc-picker/panels/MonthPanel/MonthBody').MonthCellRender<
              import('dayjs').Dayjs
            >
          >;
        };
        id: StringConstructor;
        dropdownClassName: StringConstructor;
        dropdownAlign: {
          type: import('vue').PropType<import('ant-design-vue/lib/vc-align/interface').AlignType>;
        };
        popupStyle: {
          type: import('vue').PropType<import('vue').CSSProperties>;
        };
        transitionName: StringConstructor;
        placeholder: StringConstructor;
        allowClear: {
          type: BooleanConstructor;
          default: any;
        };
        autofocus: {
          type: BooleanConstructor;
          default: any;
        };
        disabled: {
          type: BooleanConstructor;
          default: any;
        };
        tabindex: NumberConstructor;
        open: {
          type: BooleanConstructor;
          default: any;
        };
        defaultOpen: {
          type: BooleanConstructor;
          default: any;
        };
        inputReadOnly: {
          type: BooleanConstructor;
          default: any;
        };
        getPopupContainer: {
          type: import('vue').PropType<(node: HTMLElement) => HTMLElement>;
        };
        panelRender: {
          type: import('vue').PropType<
            (
              originPanel: import('ant-design-vue/lib/_util/type').VueNode,
            ) => import('ant-design-vue/lib/_util/type').VueNode
          >;
        };
        onChange: {
          type: import('vue').PropType<
            (value: string | import('dayjs').Dayjs, dateString: string) => void
          >;
        };
        'onUpdate:value': {
          type: import('vue').PropType<(value: string | import('dayjs').Dayjs) => void>;
        };
        onOk: {
          type: import('vue').PropType<(value: string | import('dayjs').Dayjs) => void>;
        };
        onOpenChange: {
          type: import('vue').PropType<(open: boolean) => void>;
        };
        'onUpdate:open': {
          type: import('vue').PropType<(open: boolean) => void>;
        };
        onFocus: {
          type: import('vue').PropType<
            import('ant-design-vue/lib/_util/EventInterface').FocusEventHandler
          >;
        };
        onBlur: {
          type: import('vue').PropType<
            import('ant-design-vue/lib/_util/EventInterface').FocusEventHandler
          >;
        };
        onMousedown: {
          type: import('vue').PropType<
            import('ant-design-vue/lib/_util/EventInterface').MouseEventHandler
          >;
        };
        onMouseup: {
          type: import('vue').PropType<
            import('ant-design-vue/lib/_util/EventInterface').MouseEventHandler
          >;
        };
        onMouseenter: {
          type: import('vue').PropType<
            import('ant-design-vue/lib/_util/EventInterface').MouseEventHandler
          >;
        };
        onMouseleave: {
          type: import('vue').PropType<
            import('ant-design-vue/lib/_util/EventInterface').MouseEventHandler
          >;
        };
        onClick: {
          type: import('vue').PropType<
            import('ant-design-vue/lib/_util/EventInterface').MouseEventHandler
          >;
        };
        onContextmenu: {
          type: import('vue').PropType<
            import('ant-design-vue/lib/_util/EventInterface').MouseEventHandler
          >;
        };
        onKeydown: {
          type: import('vue').PropType<(event: KeyboardEvent, preventDefault: () => void) => void>;
        };
        role: StringConstructor;
        name: StringConstructor;
        autocomplete: StringConstructor;
        direction: {
          type: import('vue').PropType<'rtl' | 'ltr'>;
        };
        showToday: {
          type: BooleanConstructor;
          default: any;
        };
        showTime: {
          type: import('vue').PropType<
            | boolean
            | import('ant-design-vue/lib/vc-picker/panels/TimePanel').SharedTimeProps<
                import('dayjs').Dayjs
              >
          >;
          default: any;
        };
        locale: {
          type: import('vue').PropType<
            import('ant-design-vue/lib/date-picker/generatePicker').PickerLocale
          >;
        };
        size: {
          type: import('vue').PropType<import('ant-design-vue/lib/button').ButtonSize>;
        };
        bordered: {
          type: BooleanConstructor;
          default: any;
        };
        dateRender: {
          type: import('vue').PropType<
            import('ant-design-vue/lib/vc-picker/panels/DatePanel/DateBody').DateRender<
              import('dayjs').Dayjs
            >
          >;
        };
        disabledDate: {
          type: import('vue').PropType<(date: import('dayjs').Dayjs) => boolean>;
        };
        mode: {
          type: import('vue').PropType<import('ant-design-vue/lib/vc-picker/interface').PanelMode>;
        };
        picker: {
          type: import('vue').PropType<import('ant-design-vue/lib/vc-picker/interface').PickerMode>;
        };
        valueFormat: StringConstructor;
        disabledHours: import('vue').PropType<() => number[]>;
        disabledMinutes: import('vue').PropType<(hour: number) => number[]>;
        disabledSeconds: import('vue').PropType<(hour: number, minute: number) => number[]>;
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
          defaultPickerValue: {
            type: import('vue').PropType<string | import('dayjs').Dayjs>;
          };
          defaultValue: {
            type: import('vue').PropType<string | import('dayjs').Dayjs>;
          };
          value: {
            type: import('vue').PropType<string | import('dayjs').Dayjs>;
          };
          disabledTime: {
            type: import('vue').PropType<
              import('ant-design-vue/lib/vc-picker/interface').DisabledTime<import('dayjs').Dayjs>
            >;
          };
          format: {
            type: import('vue').PropType<
              | string
              | import('ant-design-vue/lib/vc-picker/interface').CustomFormat<import('dayjs').Dayjs>
              | (
                  | string
                  | import('ant-design-vue/lib/vc-picker/interface').CustomFormat<
                      import('dayjs').Dayjs
                    >
                )[]
            >;
          };
          renderExtraFooter: {
            type: import('vue').PropType<
              (
                mode: import('ant-design-vue/lib/vc-picker/interface').PanelMode,
              ) => import('ant-design-vue/lib/_util/type').VueNode
            >;
          };
          showNow: {
            type: BooleanConstructor;
            default: any;
          };
          monthCellRender: {
            type: import('vue').PropType<
              import('ant-design-vue/lib/vc-picker/panels/MonthPanel/MonthBody').MonthCellRender<
                import('dayjs').Dayjs
              >
            >;
          };
          monthCellContentRender: {
            type: import('vue').PropType<
              import('ant-design-vue/lib/vc-picker/panels/MonthPanel/MonthBody').MonthCellRender<
                import('dayjs').Dayjs
              >
            >;
          };
          id: StringConstructor;
          dropdownClassName: StringConstructor;
          dropdownAlign: {
            type: import('vue').PropType<import('ant-design-vue/lib/vc-align/interface').AlignType>;
          };
          popupStyle: {
            type: import('vue').PropType<import('vue').CSSProperties>;
          };
          transitionName: StringConstructor;
          placeholder: StringConstructor;
          allowClear: {
            type: BooleanConstructor;
            default: any;
          };
          autofocus: {
            type: BooleanConstructor;
            default: any;
          };
          disabled: {
            type: BooleanConstructor;
            default: any;
          };
          tabindex: NumberConstructor;
          open: {
            type: BooleanConstructor;
            default: any;
          };
          defaultOpen: {
            type: BooleanConstructor;
            default: any;
          };
          inputReadOnly: {
            type: BooleanConstructor;
            default: any;
          };
          getPopupContainer: {
            type: import('vue').PropType<(node: HTMLElement) => HTMLElement>;
          };
          panelRender: {
            type: import('vue').PropType<
              (
                originPanel: import('ant-design-vue/lib/_util/type').VueNode,
              ) => import('ant-design-vue/lib/_util/type').VueNode
            >;
          };
          onChange: {
            type: import('vue').PropType<
              (value: string | import('dayjs').Dayjs, dateString: string) => void
            >;
          };
          'onUpdate:value': {
            type: import('vue').PropType<(value: string | import('dayjs').Dayjs) => void>;
          };
          onOk: {
            type: import('vue').PropType<(value: string | import('dayjs').Dayjs) => void>;
          };
          onOpenChange: {
            type: import('vue').PropType<(open: boolean) => void>;
          };
          'onUpdate:open': {
            type: import('vue').PropType<(open: boolean) => void>;
          };
          onFocus: {
            type: import('vue').PropType<
              import('ant-design-vue/lib/_util/EventInterface').FocusEventHandler
            >;
          };
          onBlur: {
            type: import('vue').PropType<
              import('ant-design-vue/lib/_util/EventInterface').FocusEventHandler
            >;
          };
          onMousedown: {
            type: import('vue').PropType<
              import('ant-design-vue/lib/_util/EventInterface').MouseEventHandler
            >;
          };
          onMouseup: {
            type: import('vue').PropType<
              import('ant-design-vue/lib/_util/EventInterface').MouseEventHandler
            >;
          };
          onMouseenter: {
            type: import('vue').PropType<
              import('ant-design-vue/lib/_util/EventInterface').MouseEventHandler
            >;
          };
          onMouseleave: {
            type: import('vue').PropType<
              import('ant-design-vue/lib/_util/EventInterface').MouseEventHandler
            >;
          };
          onClick: {
            type: import('vue').PropType<
              import('ant-design-vue/lib/_util/EventInterface').MouseEventHandler
            >;
          };
          onContextmenu: {
            type: import('vue').PropType<
              import('ant-design-vue/lib/_util/EventInterface').MouseEventHandler
            >;
          };
          onKeydown: {
            type: import('vue').PropType<
              (event: KeyboardEvent, preventDefault: () => void) => void
            >;
          };
          role: StringConstructor;
          name: StringConstructor;
          autocomplete: StringConstructor;
          direction: {
            type: import('vue').PropType<'rtl' | 'ltr'>;
          };
          showToday: {
            type: BooleanConstructor;
            default: any;
          };
          showTime: {
            type: import('vue').PropType<
              | boolean
              | import('ant-design-vue/lib/vc-picker/panels/TimePanel').SharedTimeProps<
                  import('dayjs').Dayjs
                >
            >;
            default: any;
          };
          locale: {
            type: import('vue').PropType<
              import('ant-design-vue/lib/date-picker/generatePicker').PickerLocale
            >;
          };
          size: {
            type: import('vue').PropType<import('ant-design-vue/lib/button').ButtonSize>;
          };
          bordered: {
            type: BooleanConstructor;
            default: any;
          };
          dateRender: {
            type: import('vue').PropType<
              import('ant-design-vue/lib/vc-picker/panels/DatePanel/DateBody').DateRender<
                import('dayjs').Dayjs
              >
            >;
          };
          disabledDate: {
            type: import('vue').PropType<(date: import('dayjs').Dayjs) => boolean>;
          };
          mode: {
            type: import('vue').PropType<
              import('ant-design-vue/lib/vc-picker/interface').PanelMode
            >;
          };
          picker: {
            type: import('vue').PropType<
              import('ant-design-vue/lib/vc-picker/interface').PickerMode
            >;
          };
          valueFormat: StringConstructor;
          disabledHours: import('vue').PropType<() => number[]>;
          disabledMinutes: import('vue').PropType<(hour: number) => number[]>;
          disabledSeconds: import('vue').PropType<(hour: number, minute: number) => number[]>;
        }>
      >,
      {
        open: boolean;
        disabled: boolean;
        autofocus: boolean;
        defaultOpen: boolean;
        allowClear: boolean;
        bordered: boolean;
        showTime: any;
        showNow: boolean;
        showToday: boolean;
        inputReadOnly: boolean;
      }
    >;
    QuarterPicker: import('vue').DefineComponent<
      {
        defaultPickerValue: {
          type: import('vue').PropType<string | import('dayjs').Dayjs>;
        };
        defaultValue: {
          type: import('vue').PropType<string | import('dayjs').Dayjs>;
        };
        value: {
          type: import('vue').PropType<string | import('dayjs').Dayjs>;
        };
        disabledTime: {
          type: import('vue').PropType<
            import('ant-design-vue/lib/vc-picker/interface').DisabledTime<import('dayjs').Dayjs>
          >;
        };
        format: {
          type: import('vue').PropType<
            | string
            | import('ant-design-vue/lib/vc-picker/interface').CustomFormat<import('dayjs').Dayjs>
            | (
                | string
                | import('ant-design-vue/lib/vc-picker/interface').CustomFormat<
                    import('dayjs').Dayjs
                  >
              )[]
          >;
        };
        renderExtraFooter: {
          type: import('vue').PropType<
            (
              mode: import('ant-design-vue/lib/vc-picker/interface').PanelMode,
            ) => import('ant-design-vue/lib/_util/type').VueNode
          >;
        };
        showNow: {
          type: BooleanConstructor;
          default: any;
        };
        monthCellRender: {
          type: import('vue').PropType<
            import('ant-design-vue/lib/vc-picker/panels/MonthPanel/MonthBody').MonthCellRender<
              import('dayjs').Dayjs
            >
          >;
        };
        monthCellContentRender: {
          type: import('vue').PropType<
            import('ant-design-vue/lib/vc-picker/panels/MonthPanel/MonthBody').MonthCellRender<
              import('dayjs').Dayjs
            >
          >;
        };
        id: StringConstructor;
        dropdownClassName: StringConstructor;
        dropdownAlign: {
          type: import('vue').PropType<import('ant-design-vue/lib/vc-align/interface').AlignType>;
        };
        popupStyle: {
          type: import('vue').PropType<import('vue').CSSProperties>;
        };
        transitionName: StringConstructor;
        placeholder: StringConstructor;
        allowClear: {
          type: BooleanConstructor;
          default: any;
        };
        autofocus: {
          type: BooleanConstructor;
          default: any;
        };
        disabled: {
          type: BooleanConstructor;
          default: any;
        };
        tabindex: NumberConstructor;
        open: {
          type: BooleanConstructor;
          default: any;
        };
        defaultOpen: {
          type: BooleanConstructor;
          default: any;
        };
        inputReadOnly: {
          type: BooleanConstructor;
          default: any;
        };
        getPopupContainer: {
          type: import('vue').PropType<(node: HTMLElement) => HTMLElement>;
        };
        panelRender: {
          type: import('vue').PropType<
            (
              originPanel: import('ant-design-vue/lib/_util/type').VueNode,
            ) => import('ant-design-vue/lib/_util/type').VueNode
          >;
        };
        onChange: {
          type: import('vue').PropType<
            (value: string | import('dayjs').Dayjs, dateString: string) => void
          >;
        };
        'onUpdate:value': {
          type: import('vue').PropType<(value: string | import('dayjs').Dayjs) => void>;
        };
        onOk: {
          type: import('vue').PropType<(value: string | import('dayjs').Dayjs) => void>;
        };
        onOpenChange: {
          type: import('vue').PropType<(open: boolean) => void>;
        };
        'onUpdate:open': {
          type: import('vue').PropType<(open: boolean) => void>;
        };
        onFocus: {
          type: import('vue').PropType<
            import('ant-design-vue/lib/_util/EventInterface').FocusEventHandler
          >;
        };
        onBlur: {
          type: import('vue').PropType<
            import('ant-design-vue/lib/_util/EventInterface').FocusEventHandler
          >;
        };
        onMousedown: {
          type: import('vue').PropType<
            import('ant-design-vue/lib/_util/EventInterface').MouseEventHandler
          >;
        };
        onMouseup: {
          type: import('vue').PropType<
            import('ant-design-vue/lib/_util/EventInterface').MouseEventHandler
          >;
        };
        onMouseenter: {
          type: import('vue').PropType<
            import('ant-design-vue/lib/_util/EventInterface').MouseEventHandler
          >;
        };
        onMouseleave: {
          type: import('vue').PropType<
            import('ant-design-vue/lib/_util/EventInterface').MouseEventHandler
          >;
        };
        onClick: {
          type: import('vue').PropType<
            import('ant-design-vue/lib/_util/EventInterface').MouseEventHandler
          >;
        };
        onContextmenu: {
          type: import('vue').PropType<
            import('ant-design-vue/lib/_util/EventInterface').MouseEventHandler
          >;
        };
        onKeydown: {
          type: import('vue').PropType<(event: KeyboardEvent, preventDefault: () => void) => void>;
        };
        role: StringConstructor;
        name: StringConstructor;
        autocomplete: StringConstructor;
        direction: {
          type: import('vue').PropType<'rtl' | 'ltr'>;
        };
        showToday: {
          type: BooleanConstructor;
          default: any;
        };
        showTime: {
          type: import('vue').PropType<
            | boolean
            | import('ant-design-vue/lib/vc-picker/panels/TimePanel').SharedTimeProps<
                import('dayjs').Dayjs
              >
          >;
          default: any;
        };
        locale: {
          type: import('vue').PropType<
            import('ant-design-vue/lib/date-picker/generatePicker').PickerLocale
          >;
        };
        size: {
          type: import('vue').PropType<import('ant-design-vue/lib/button').ButtonSize>;
        };
        bordered: {
          type: BooleanConstructor;
          default: any;
        };
        dateRender: {
          type: import('vue').PropType<
            import('ant-design-vue/lib/vc-picker/panels/DatePanel/DateBody').DateRender<
              import('dayjs').Dayjs
            >
          >;
        };
        disabledDate: {
          type: import('vue').PropType<(date: import('dayjs').Dayjs) => boolean>;
        };
        mode: {
          type: import('vue').PropType<import('ant-design-vue/lib/vc-picker/interface').PanelMode>;
        };
        picker: {
          type: import('vue').PropType<import('ant-design-vue/lib/vc-picker/interface').PickerMode>;
        };
        valueFormat: StringConstructor;
        disabledHours: import('vue').PropType<() => number[]>;
        disabledMinutes: import('vue').PropType<(hour: number) => number[]>;
        disabledSeconds: import('vue').PropType<(hour: number, minute: number) => number[]>;
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
          defaultPickerValue: {
            type: import('vue').PropType<string | import('dayjs').Dayjs>;
          };
          defaultValue: {
            type: import('vue').PropType<string | import('dayjs').Dayjs>;
          };
          value: {
            type: import('vue').PropType<string | import('dayjs').Dayjs>;
          };
          disabledTime: {
            type: import('vue').PropType<
              import('ant-design-vue/lib/vc-picker/interface').DisabledTime<import('dayjs').Dayjs>
            >;
          };
          format: {
            type: import('vue').PropType<
              | string
              | import('ant-design-vue/lib/vc-picker/interface').CustomFormat<import('dayjs').Dayjs>
              | (
                  | string
                  | import('ant-design-vue/lib/vc-picker/interface').CustomFormat<
                      import('dayjs').Dayjs
                    >
                )[]
            >;
          };
          renderExtraFooter: {
            type: import('vue').PropType<
              (
                mode: import('ant-design-vue/lib/vc-picker/interface').PanelMode,
              ) => import('ant-design-vue/lib/_util/type').VueNode
            >;
          };
          showNow: {
            type: BooleanConstructor;
            default: any;
          };
          monthCellRender: {
            type: import('vue').PropType<
              import('ant-design-vue/lib/vc-picker/panels/MonthPanel/MonthBody').MonthCellRender<
                import('dayjs').Dayjs
              >
            >;
          };
          monthCellContentRender: {
            type: import('vue').PropType<
              import('ant-design-vue/lib/vc-picker/panels/MonthPanel/MonthBody').MonthCellRender<
                import('dayjs').Dayjs
              >
            >;
          };
          id: StringConstructor;
          dropdownClassName: StringConstructor;
          dropdownAlign: {
            type: import('vue').PropType<import('ant-design-vue/lib/vc-align/interface').AlignType>;
          };
          popupStyle: {
            type: import('vue').PropType<import('vue').CSSProperties>;
          };
          transitionName: StringConstructor;
          placeholder: StringConstructor;
          allowClear: {
            type: BooleanConstructor;
            default: any;
          };
          autofocus: {
            type: BooleanConstructor;
            default: any;
          };
          disabled: {
            type: BooleanConstructor;
            default: any;
          };
          tabindex: NumberConstructor;
          open: {
            type: BooleanConstructor;
            default: any;
          };
          defaultOpen: {
            type: BooleanConstructor;
            default: any;
          };
          inputReadOnly: {
            type: BooleanConstructor;
            default: any;
          };
          getPopupContainer: {
            type: import('vue').PropType<(node: HTMLElement) => HTMLElement>;
          };
          panelRender: {
            type: import('vue').PropType<
              (
                originPanel: import('ant-design-vue/lib/_util/type').VueNode,
              ) => import('ant-design-vue/lib/_util/type').VueNode
            >;
          };
          onChange: {
            type: import('vue').PropType<
              (value: string | import('dayjs').Dayjs, dateString: string) => void
            >;
          };
          'onUpdate:value': {
            type: import('vue').PropType<(value: string | import('dayjs').Dayjs) => void>;
          };
          onOk: {
            type: import('vue').PropType<(value: string | import('dayjs').Dayjs) => void>;
          };
          onOpenChange: {
            type: import('vue').PropType<(open: boolean) => void>;
          };
          'onUpdate:open': {
            type: import('vue').PropType<(open: boolean) => void>;
          };
          onFocus: {
            type: import('vue').PropType<
              import('ant-design-vue/lib/_util/EventInterface').FocusEventHandler
            >;
          };
          onBlur: {
            type: import('vue').PropType<
              import('ant-design-vue/lib/_util/EventInterface').FocusEventHandler
            >;
          };
          onMousedown: {
            type: import('vue').PropType<
              import('ant-design-vue/lib/_util/EventInterface').MouseEventHandler
            >;
          };
          onMouseup: {
            type: import('vue').PropType<
              import('ant-design-vue/lib/_util/EventInterface').MouseEventHandler
            >;
          };
          onMouseenter: {
            type: import('vue').PropType<
              import('ant-design-vue/lib/_util/EventInterface').MouseEventHandler
            >;
          };
          onMouseleave: {
            type: import('vue').PropType<
              import('ant-design-vue/lib/_util/EventInterface').MouseEventHandler
            >;
          };
          onClick: {
            type: import('vue').PropType<
              import('ant-design-vue/lib/_util/EventInterface').MouseEventHandler
            >;
          };
          onContextmenu: {
            type: import('vue').PropType<
              import('ant-design-vue/lib/_util/EventInterface').MouseEventHandler
            >;
          };
          onKeydown: {
            type: import('vue').PropType<
              (event: KeyboardEvent, preventDefault: () => void) => void
            >;
          };
          role: StringConstructor;
          name: StringConstructor;
          autocomplete: StringConstructor;
          direction: {
            type: import('vue').PropType<'rtl' | 'ltr'>;
          };
          showToday: {
            type: BooleanConstructor;
            default: any;
          };
          showTime: {
            type: import('vue').PropType<
              | boolean
              | import('ant-design-vue/lib/vc-picker/panels/TimePanel').SharedTimeProps<
                  import('dayjs').Dayjs
                >
            >;
            default: any;
          };
          locale: {
            type: import('vue').PropType<
              import('ant-design-vue/lib/date-picker/generatePicker').PickerLocale
            >;
          };
          size: {
            type: import('vue').PropType<import('ant-design-vue/lib/button').ButtonSize>;
          };
          bordered: {
            type: BooleanConstructor;
            default: any;
          };
          dateRender: {
            type: import('vue').PropType<
              import('ant-design-vue/lib/vc-picker/panels/DatePanel/DateBody').DateRender<
                import('dayjs').Dayjs
              >
            >;
          };
          disabledDate: {
            type: import('vue').PropType<(date: import('dayjs').Dayjs) => boolean>;
          };
          mode: {
            type: import('vue').PropType<
              import('ant-design-vue/lib/vc-picker/interface').PanelMode
            >;
          };
          picker: {
            type: import('vue').PropType<
              import('ant-design-vue/lib/vc-picker/interface').PickerMode
            >;
          };
          valueFormat: StringConstructor;
          disabledHours: import('vue').PropType<() => number[]>;
          disabledMinutes: import('vue').PropType<(hour: number) => number[]>;
          disabledSeconds: import('vue').PropType<(hour: number, minute: number) => number[]>;
        }>
      >,
      {
        open: boolean;
        disabled: boolean;
        autofocus: boolean;
        defaultOpen: boolean;
        allowClear: boolean;
        bordered: boolean;
        showTime: any;
        showNow: boolean;
        showToday: boolean;
        inputReadOnly: boolean;
      }
    >;
    install: (app: import('vue').App<any>) => import('vue').App<any>;
  } & {
    RangePicker: import('vue').DefineComponent<
      {
        allowEmpty: {
          type: import('vue').PropType<[boolean, boolean]>;
        };
        dateRender: {
          type: import('vue').PropType<
            import('ant-design-vue/lib/vc-picker/RangePicker').RangeDateRender<
              import('dayjs').Dayjs
            >
          >;
        };
        defaultPickerValue: {
          type: import('vue').PropType<
            [string, string] | [import('dayjs').Dayjs, import('dayjs').Dayjs]
          >;
        };
        defaultValue: {
          type: import('vue').PropType<
            [string, string] | [import('dayjs').Dayjs, import('dayjs').Dayjs]
          >;
        };
        value: {
          type: import('vue').PropType<
            [string, string] | [import('dayjs').Dayjs, import('dayjs').Dayjs]
          >;
        };
        disabledTime: {
          type: import('vue').PropType<
            (
              date: import('dayjs').Dayjs,
              type: import('ant-design-vue/lib/vc-picker/RangePicker').RangeType,
            ) => import('ant-design-vue/lib/vc-picker/interface').DisabledTimes
          >;
        };
        disabled: {
          type: import('vue').PropType<boolean | [boolean, boolean]>;
        };
        format: StringConstructor;
        renderExtraFooter: {
          type: import('vue').PropType<() => import('ant-design-vue/lib/_util/type').VueNode>;
        };
        separator: {
          type: StringConstructor;
        };
        ranges: {
          type: import('vue').PropType<
            Record<
              string,
              | [import('dayjs').Dayjs, import('dayjs').Dayjs]
              | (() => [import('dayjs').Dayjs, import('dayjs').Dayjs])
            >
          >;
        };
        placeholder: ArrayConstructor;
        mode: {
          type: import('vue').PropType<
            [
              import('ant-design-vue/lib/vc-picker/interface').PanelMode,
              import('ant-design-vue/lib/vc-picker/interface').PanelMode,
            ]
          >;
        };
        onChange: {
          type: import('vue').PropType<
            (
              value: [string, string] | [import('dayjs').Dayjs, import('dayjs').Dayjs],
              dateString: [string, string],
            ) => void
          >;
        };
        'onUpdate:value': {
          type: import('vue').PropType<
            (value: [string, string] | [import('dayjs').Dayjs, import('dayjs').Dayjs]) => void
          >;
        };
        onCalendarChange: {
          type: import('vue').PropType<
            (
              values: [string, string] | [import('dayjs').Dayjs, import('dayjs').Dayjs],
              formatString: [string, string],
              info: import('ant-design-vue/lib/vc-picker/RangePicker').RangeInfo,
            ) => void
          >;
        };
        onPanelChange: {
          type: import('vue').PropType<
            (
              values: [string, string] | [import('dayjs').Dayjs, import('dayjs').Dayjs],
              modes: [
                import('ant-design-vue/lib/vc-picker/interface').PanelMode,
                import('ant-design-vue/lib/vc-picker/interface').PanelMode,
              ],
            ) => void
          >;
        };
        onOk: {
          type: import('vue').PropType<
            (dates: [string, string] | [import('dayjs').Dayjs, import('dayjs').Dayjs]) => void
          >;
        };
        id: StringConstructor;
        dropdownClassName: StringConstructor;
        dropdownAlign: {
          type: import('vue').PropType<import('ant-design-vue/lib/vc-align/interface').AlignType>;
        };
        popupStyle: {
          type: import('vue').PropType<import('vue').CSSProperties>;
        };
        transitionName: StringConstructor;
        allowClear: {
          type: BooleanConstructor;
          default: any;
        };
        autofocus: {
          type: BooleanConstructor;
          default: any;
        };
        tabindex: NumberConstructor;
        open: {
          type: BooleanConstructor;
          default: any;
        };
        defaultOpen: {
          type: BooleanConstructor;
          default: any;
        };
        inputReadOnly: {
          type: BooleanConstructor;
          default: any;
        };
        getPopupContainer: {
          type: import('vue').PropType<(node: HTMLElement) => HTMLElement>;
        };
        panelRender: {
          type: import('vue').PropType<
            (
              originPanel: import('ant-design-vue/lib/_util/type').VueNode,
            ) => import('ant-design-vue/lib/_util/type').VueNode
          >;
        };
        onOpenChange: {
          type: import('vue').PropType<(open: boolean) => void>;
        };
        'onUpdate:open': {
          type: import('vue').PropType<(open: boolean) => void>;
        };
        onFocus: {
          type: import('vue').PropType<
            import('ant-design-vue/lib/_util/EventInterface').FocusEventHandler
          >;
        };
        onBlur: {
          type: import('vue').PropType<
            import('ant-design-vue/lib/_util/EventInterface').FocusEventHandler
          >;
        };
        onMousedown: {
          type: import('vue').PropType<
            import('ant-design-vue/lib/_util/EventInterface').MouseEventHandler
          >;
        };
        onMouseup: {
          type: import('vue').PropType<
            import('ant-design-vue/lib/_util/EventInterface').MouseEventHandler
          >;
        };
        onMouseenter: {
          type: import('vue').PropType<
            import('ant-design-vue/lib/_util/EventInterface').MouseEventHandler
          >;
        };
        onMouseleave: {
          type: import('vue').PropType<
            import('ant-design-vue/lib/_util/EventInterface').MouseEventHandler
          >;
        };
        onClick: {
          type: import('vue').PropType<
            import('ant-design-vue/lib/_util/EventInterface').MouseEventHandler
          >;
        };
        onContextmenu: {
          type: import('vue').PropType<
            import('ant-design-vue/lib/_util/EventInterface').MouseEventHandler
          >;
        };
        onKeydown: {
          type: import('vue').PropType<(event: KeyboardEvent, preventDefault: () => void) => void>;
        };
        role: StringConstructor;
        name: StringConstructor;
        autocomplete: StringConstructor;
        direction: {
          type: import('vue').PropType<'rtl' | 'ltr'>;
        };
        showToday: {
          type: BooleanConstructor;
          default: any;
        };
        showTime: {
          type: import('vue').PropType<
            | boolean
            | import('ant-design-vue/lib/vc-picker/panels/TimePanel').SharedTimeProps<
                import('dayjs').Dayjs
              >
          >;
          default: any;
        };
        locale: {
          type: import('vue').PropType<
            import('ant-design-vue/lib/date-picker/generatePicker').PickerLocale
          >;
        };
        size: {
          type: import('vue').PropType<import('ant-design-vue/lib/button').ButtonSize>;
        };
        bordered: {
          type: BooleanConstructor;
          default: any;
        };
        disabledDate: {
          type: import('vue').PropType<(date: import('dayjs').Dayjs) => boolean>;
        };
        picker: {
          type: import('vue').PropType<import('ant-design-vue/lib/vc-picker/interface').PickerMode>;
        };
        valueFormat: StringConstructor;
        disabledHours: import('vue').PropType<() => number[]>;
        disabledMinutes: import('vue').PropType<(hour: number) => number[]>;
        disabledSeconds: import('vue').PropType<(hour: number, minute: number) => number[]>;
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
          allowEmpty: {
            type: import('vue').PropType<[boolean, boolean]>;
          };
          dateRender: {
            type: import('vue').PropType<
              import('ant-design-vue/lib/vc-picker/RangePicker').RangeDateRender<
                import('dayjs').Dayjs
              >
            >;
          };
          defaultPickerValue: {
            type: import('vue').PropType<
              [string, string] | [import('dayjs').Dayjs, import('dayjs').Dayjs]
            >;
          };
          defaultValue: {
            type: import('vue').PropType<
              [string, string] | [import('dayjs').Dayjs, import('dayjs').Dayjs]
            >;
          };
          value: {
            type: import('vue').PropType<
              [string, string] | [import('dayjs').Dayjs, import('dayjs').Dayjs]
            >;
          };
          disabledTime: {
            type: import('vue').PropType<
              (
                date: import('dayjs').Dayjs,
                type: import('ant-design-vue/lib/vc-picker/RangePicker').RangeType,
              ) => import('ant-design-vue/lib/vc-picker/interface').DisabledTimes
            >;
          };
          disabled: {
            type: import('vue').PropType<boolean | [boolean, boolean]>;
          };
          format: StringConstructor;
          renderExtraFooter: {
            type: import('vue').PropType<() => import('ant-design-vue/lib/_util/type').VueNode>;
          };
          separator: {
            type: StringConstructor;
          };
          ranges: {
            type: import('vue').PropType<
              Record<
                string,
                | [import('dayjs').Dayjs, import('dayjs').Dayjs]
                | (() => [import('dayjs').Dayjs, import('dayjs').Dayjs])
              >
            >;
          };
          placeholder: ArrayConstructor;
          mode: {
            type: import('vue').PropType<
              [
                import('ant-design-vue/lib/vc-picker/interface').PanelMode,
                import('ant-design-vue/lib/vc-picker/interface').PanelMode,
              ]
            >;
          };
          onChange: {
            type: import('vue').PropType<
              (
                value: [string, string] | [import('dayjs').Dayjs, import('dayjs').Dayjs],
                dateString: [string, string],
              ) => void
            >;
          };
          'onUpdate:value': {
            type: import('vue').PropType<
              (value: [string, string] | [import('dayjs').Dayjs, import('dayjs').Dayjs]) => void
            >;
          };
          onCalendarChange: {
            type: import('vue').PropType<
              (
                values: [string, string] | [import('dayjs').Dayjs, import('dayjs').Dayjs],
                formatString: [string, string],
                info: import('ant-design-vue/lib/vc-picker/RangePicker').RangeInfo,
              ) => void
            >;
          };
          onPanelChange: {
            type: import('vue').PropType<
              (
                values: [string, string] | [import('dayjs').Dayjs, import('dayjs').Dayjs],
                modes: [
                  import('ant-design-vue/lib/vc-picker/interface').PanelMode,
                  import('ant-design-vue/lib/vc-picker/interface').PanelMode,
                ],
              ) => void
            >;
          };
          onOk: {
            type: import('vue').PropType<
              (dates: [string, string] | [import('dayjs').Dayjs, import('dayjs').Dayjs]) => void
            >;
          };
          id: StringConstructor;
          dropdownClassName: StringConstructor;
          dropdownAlign: {
            type: import('vue').PropType<import('ant-design-vue/lib/vc-align/interface').AlignType>;
          };
          popupStyle: {
            type: import('vue').PropType<import('vue').CSSProperties>;
          };
          transitionName: StringConstructor;
          allowClear: {
            type: BooleanConstructor;
            default: any;
          };
          autofocus: {
            type: BooleanConstructor;
            default: any;
          };
          tabindex: NumberConstructor;
          open: {
            type: BooleanConstructor;
            default: any;
          };
          defaultOpen: {
            type: BooleanConstructor;
            default: any;
          };
          inputReadOnly: {
            type: BooleanConstructor;
            default: any;
          };
          getPopupContainer: {
            type: import('vue').PropType<(node: HTMLElement) => HTMLElement>;
          };
          panelRender: {
            type: import('vue').PropType<
              (
                originPanel: import('ant-design-vue/lib/_util/type').VueNode,
              ) => import('ant-design-vue/lib/_util/type').VueNode
            >;
          };
          onOpenChange: {
            type: import('vue').PropType<(open: boolean) => void>;
          };
          'onUpdate:open': {
            type: import('vue').PropType<(open: boolean) => void>;
          };
          onFocus: {
            type: import('vue').PropType<
              import('ant-design-vue/lib/_util/EventInterface').FocusEventHandler
            >;
          };
          onBlur: {
            type: import('vue').PropType<
              import('ant-design-vue/lib/_util/EventInterface').FocusEventHandler
            >;
          };
          onMousedown: {
            type: import('vue').PropType<
              import('ant-design-vue/lib/_util/EventInterface').MouseEventHandler
            >;
          };
          onMouseup: {
            type: import('vue').PropType<
              import('ant-design-vue/lib/_util/EventInterface').MouseEventHandler
            >;
          };
          onMouseenter: {
            type: import('vue').PropType<
              import('ant-design-vue/lib/_util/EventInterface').MouseEventHandler
            >;
          };
          onMouseleave: {
            type: import('vue').PropType<
              import('ant-design-vue/lib/_util/EventInterface').MouseEventHandler
            >;
          };
          onClick: {
            type: import('vue').PropType<
              import('ant-design-vue/lib/_util/EventInterface').MouseEventHandler
            >;
          };
          onContextmenu: {
            type: import('vue').PropType<
              import('ant-design-vue/lib/_util/EventInterface').MouseEventHandler
            >;
          };
          onKeydown: {
            type: import('vue').PropType<
              (event: KeyboardEvent, preventDefault: () => void) => void
            >;
          };
          role: StringConstructor;
          name: StringConstructor;
          autocomplete: StringConstructor;
          direction: {
            type: import('vue').PropType<'rtl' | 'ltr'>;
          };
          showToday: {
            type: BooleanConstructor;
            default: any;
          };
          showTime: {
            type: import('vue').PropType<
              | boolean
              | import('ant-design-vue/lib/vc-picker/panels/TimePanel').SharedTimeProps<
                  import('dayjs').Dayjs
                >
            >;
            default: any;
          };
          locale: {
            type: import('vue').PropType<
              import('ant-design-vue/lib/date-picker/generatePicker').PickerLocale
            >;
          };
          size: {
            type: import('vue').PropType<import('ant-design-vue/lib/button').ButtonSize>;
          };
          bordered: {
            type: BooleanConstructor;
            default: any;
          };
          disabledDate: {
            type: import('vue').PropType<(date: import('dayjs').Dayjs) => boolean>;
          };
          picker: {
            type: import('vue').PropType<
              import('ant-design-vue/lib/vc-picker/interface').PickerMode
            >;
          };
          valueFormat: StringConstructor;
          disabledHours: import('vue').PropType<() => number[]>;
          disabledMinutes: import('vue').PropType<(hour: number) => number[]>;
          disabledSeconds: import('vue').PropType<(hour: number, minute: number) => number[]>;
        }>
      >,
      {
        open: boolean;
        autofocus: boolean;
        defaultOpen: boolean;
        allowClear: boolean;
        bordered: boolean;
        showTime: any;
        showToday: boolean;
        inputReadOnly: boolean;
      }
    >;
    WeekPicker: import('vue').DefineComponent<
      {
        defaultPickerValue: {
          type: import('vue').PropType<string | import('dayjs').Dayjs>;
        };
        defaultValue: {
          type: import('vue').PropType<string | import('dayjs').Dayjs>;
        };
        value: {
          type: import('vue').PropType<string | import('dayjs').Dayjs>;
        };
        disabledTime: {
          type: import('vue').PropType<
            import('ant-design-vue/lib/vc-picker/interface').DisabledTime<import('dayjs').Dayjs>
          >;
        };
        format: {
          type: import('vue').PropType<
            | string
            | import('ant-design-vue/lib/vc-picker/interface').CustomFormat<import('dayjs').Dayjs>
            | (
                | string
                | import('ant-design-vue/lib/vc-picker/interface').CustomFormat<
                    import('dayjs').Dayjs
                  >
              )[]
          >;
        };
        renderExtraFooter: {
          type: import('vue').PropType<
            (
              mode: import('ant-design-vue/lib/vc-picker/interface').PanelMode,
            ) => import('ant-design-vue/lib/_util/type').VueNode
          >;
        };
        showNow: {
          type: BooleanConstructor;
          default: any;
        };
        monthCellRender: {
          type: import('vue').PropType<
            import('ant-design-vue/lib/vc-picker/panels/MonthPanel/MonthBody').MonthCellRender<
              import('dayjs').Dayjs
            >
          >;
        };
        monthCellContentRender: {
          type: import('vue').PropType<
            import('ant-design-vue/lib/vc-picker/panels/MonthPanel/MonthBody').MonthCellRender<
              import('dayjs').Dayjs
            >
          >;
        };
        id: StringConstructor;
        dropdownClassName: StringConstructor;
        dropdownAlign: {
          type: import('vue').PropType<import('ant-design-vue/lib/vc-align/interface').AlignType>;
        };
        popupStyle: {
          type: import('vue').PropType<import('vue').CSSProperties>;
        };
        transitionName: StringConstructor;
        placeholder: StringConstructor;
        allowClear: {
          type: BooleanConstructor;
          default: any;
        };
        autofocus: {
          type: BooleanConstructor;
          default: any;
        };
        disabled: {
          type: BooleanConstructor;
          default: any;
        };
        tabindex: NumberConstructor;
        open: {
          type: BooleanConstructor;
          default: any;
        };
        defaultOpen: {
          type: BooleanConstructor;
          default: any;
        };
        inputReadOnly: {
          type: BooleanConstructor;
          default: any;
        };
        getPopupContainer: {
          type: import('vue').PropType<(node: HTMLElement) => HTMLElement>;
        };
        panelRender: {
          type: import('vue').PropType<
            (
              originPanel: import('ant-design-vue/lib/_util/type').VueNode,
            ) => import('ant-design-vue/lib/_util/type').VueNode
          >;
        };
        onChange: {
          type: import('vue').PropType<
            (value: string | import('dayjs').Dayjs, dateString: string) => void
          >;
        };
        'onUpdate:value': {
          type: import('vue').PropType<(value: string | import('dayjs').Dayjs) => void>;
        };
        onOk: {
          type: import('vue').PropType<(value: string | import('dayjs').Dayjs) => void>;
        };
        onOpenChange: {
          type: import('vue').PropType<(open: boolean) => void>;
        };
        'onUpdate:open': {
          type: import('vue').PropType<(open: boolean) => void>;
        };
        onFocus: {
          type: import('vue').PropType<
            import('ant-design-vue/lib/_util/EventInterface').FocusEventHandler
          >;
        };
        onBlur: {
          type: import('vue').PropType<
            import('ant-design-vue/lib/_util/EventInterface').FocusEventHandler
          >;
        };
        onMousedown: {
          type: import('vue').PropType<
            import('ant-design-vue/lib/_util/EventInterface').MouseEventHandler
          >;
        };
        onMouseup: {
          type: import('vue').PropType<
            import('ant-design-vue/lib/_util/EventInterface').MouseEventHandler
          >;
        };
        onMouseenter: {
          type: import('vue').PropType<
            import('ant-design-vue/lib/_util/EventInterface').MouseEventHandler
          >;
        };
        onMouseleave: {
          type: import('vue').PropType<
            import('ant-design-vue/lib/_util/EventInterface').MouseEventHandler
          >;
        };
        onClick: {
          type: import('vue').PropType<
            import('ant-design-vue/lib/_util/EventInterface').MouseEventHandler
          >;
        };
        onContextmenu: {
          type: import('vue').PropType<
            import('ant-design-vue/lib/_util/EventInterface').MouseEventHandler
          >;
        };
        onKeydown: {
          type: import('vue').PropType<(event: KeyboardEvent, preventDefault: () => void) => void>;
        };
        role: StringConstructor;
        name: StringConstructor;
        autocomplete: StringConstructor;
        direction: {
          type: import('vue').PropType<'rtl' | 'ltr'>;
        };
        showToday: {
          type: BooleanConstructor;
          default: any;
        };
        showTime: {
          type: import('vue').PropType<
            | boolean
            | import('ant-design-vue/lib/vc-picker/panels/TimePanel').SharedTimeProps<
                import('dayjs').Dayjs
              >
          >;
          default: any;
        };
        locale: {
          type: import('vue').PropType<
            import('ant-design-vue/lib/date-picker/generatePicker').PickerLocale
          >;
        };
        size: {
          type: import('vue').PropType<import('ant-design-vue/lib/button').ButtonSize>;
        };
        bordered: {
          type: BooleanConstructor;
          default: any;
        };
        dateRender: {
          type: import('vue').PropType<
            import('ant-design-vue/lib/vc-picker/panels/DatePanel/DateBody').DateRender<
              import('dayjs').Dayjs
            >
          >;
        };
        disabledDate: {
          type: import('vue').PropType<(date: import('dayjs').Dayjs) => boolean>;
        };
        mode: {
          type: import('vue').PropType<import('ant-design-vue/lib/vc-picker/interface').PanelMode>;
        };
        picker: {
          type: import('vue').PropType<import('ant-design-vue/lib/vc-picker/interface').PickerMode>;
        };
        valueFormat: StringConstructor;
        disabledHours: import('vue').PropType<() => number[]>;
        disabledMinutes: import('vue').PropType<(hour: number) => number[]>;
        disabledSeconds: import('vue').PropType<(hour: number, minute: number) => number[]>;
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
          defaultPickerValue: {
            type: import('vue').PropType<string | import('dayjs').Dayjs>;
          };
          defaultValue: {
            type: import('vue').PropType<string | import('dayjs').Dayjs>;
          };
          value: {
            type: import('vue').PropType<string | import('dayjs').Dayjs>;
          };
          disabledTime: {
            type: import('vue').PropType<
              import('ant-design-vue/lib/vc-picker/interface').DisabledTime<import('dayjs').Dayjs>
            >;
          };
          format: {
            type: import('vue').PropType<
              | string
              | import('ant-design-vue/lib/vc-picker/interface').CustomFormat<import('dayjs').Dayjs>
              | (
                  | string
                  | import('ant-design-vue/lib/vc-picker/interface').CustomFormat<
                      import('dayjs').Dayjs
                    >
                )[]
            >;
          };
          renderExtraFooter: {
            type: import('vue').PropType<
              (
                mode: import('ant-design-vue/lib/vc-picker/interface').PanelMode,
              ) => import('ant-design-vue/lib/_util/type').VueNode
            >;
          };
          showNow: {
            type: BooleanConstructor;
            default: any;
          };
          monthCellRender: {
            type: import('vue').PropType<
              import('ant-design-vue/lib/vc-picker/panels/MonthPanel/MonthBody').MonthCellRender<
                import('dayjs').Dayjs
              >
            >;
          };
          monthCellContentRender: {
            type: import('vue').PropType<
              import('ant-design-vue/lib/vc-picker/panels/MonthPanel/MonthBody').MonthCellRender<
                import('dayjs').Dayjs
              >
            >;
          };
          id: StringConstructor;
          dropdownClassName: StringConstructor;
          dropdownAlign: {
            type: import('vue').PropType<import('ant-design-vue/lib/vc-align/interface').AlignType>;
          };
          popupStyle: {
            type: import('vue').PropType<import('vue').CSSProperties>;
          };
          transitionName: StringConstructor;
          placeholder: StringConstructor;
          allowClear: {
            type: BooleanConstructor;
            default: any;
          };
          autofocus: {
            type: BooleanConstructor;
            default: any;
          };
          disabled: {
            type: BooleanConstructor;
            default: any;
          };
          tabindex: NumberConstructor;
          open: {
            type: BooleanConstructor;
            default: any;
          };
          defaultOpen: {
            type: BooleanConstructor;
            default: any;
          };
          inputReadOnly: {
            type: BooleanConstructor;
            default: any;
          };
          getPopupContainer: {
            type: import('vue').PropType<(node: HTMLElement) => HTMLElement>;
          };
          panelRender: {
            type: import('vue').PropType<
              (
                originPanel: import('ant-design-vue/lib/_util/type').VueNode,
              ) => import('ant-design-vue/lib/_util/type').VueNode
            >;
          };
          onChange: {
            type: import('vue').PropType<
              (value: string | import('dayjs').Dayjs, dateString: string) => void
            >;
          };
          'onUpdate:value': {
            type: import('vue').PropType<(value: string | import('dayjs').Dayjs) => void>;
          };
          onOk: {
            type: import('vue').PropType<(value: string | import('dayjs').Dayjs) => void>;
          };
          onOpenChange: {
            type: import('vue').PropType<(open: boolean) => void>;
          };
          'onUpdate:open': {
            type: import('vue').PropType<(open: boolean) => void>;
          };
          onFocus: {
            type: import('vue').PropType<
              import('ant-design-vue/lib/_util/EventInterface').FocusEventHandler
            >;
          };
          onBlur: {
            type: import('vue').PropType<
              import('ant-design-vue/lib/_util/EventInterface').FocusEventHandler
            >;
          };
          onMousedown: {
            type: import('vue').PropType<
              import('ant-design-vue/lib/_util/EventInterface').MouseEventHandler
            >;
          };
          onMouseup: {
            type: import('vue').PropType<
              import('ant-design-vue/lib/_util/EventInterface').MouseEventHandler
            >;
          };
          onMouseenter: {
            type: import('vue').PropType<
              import('ant-design-vue/lib/_util/EventInterface').MouseEventHandler
            >;
          };
          onMouseleave: {
            type: import('vue').PropType<
              import('ant-design-vue/lib/_util/EventInterface').MouseEventHandler
            >;
          };
          onClick: {
            type: import('vue').PropType<
              import('ant-design-vue/lib/_util/EventInterface').MouseEventHandler
            >;
          };
          onContextmenu: {
            type: import('vue').PropType<
              import('ant-design-vue/lib/_util/EventInterface').MouseEventHandler
            >;
          };
          onKeydown: {
            type: import('vue').PropType<
              (event: KeyboardEvent, preventDefault: () => void) => void
            >;
          };
          role: StringConstructor;
          name: StringConstructor;
          autocomplete: StringConstructor;
          direction: {
            type: import('vue').PropType<'rtl' | 'ltr'>;
          };
          showToday: {
            type: BooleanConstructor;
            default: any;
          };
          showTime: {
            type: import('vue').PropType<
              | boolean
              | import('ant-design-vue/lib/vc-picker/panels/TimePanel').SharedTimeProps<
                  import('dayjs').Dayjs
                >
            >;
            default: any;
          };
          locale: {
            type: import('vue').PropType<
              import('ant-design-vue/lib/date-picker/generatePicker').PickerLocale
            >;
          };
          size: {
            type: import('vue').PropType<import('ant-design-vue/lib/button').ButtonSize>;
          };
          bordered: {
            type: BooleanConstructor;
            default: any;
          };
          dateRender: {
            type: import('vue').PropType<
              import('ant-design-vue/lib/vc-picker/panels/DatePanel/DateBody').DateRender<
                import('dayjs').Dayjs
              >
            >;
          };
          disabledDate: {
            type: import('vue').PropType<(date: import('dayjs').Dayjs) => boolean>;
          };
          mode: {
            type: import('vue').PropType<
              import('ant-design-vue/lib/vc-picker/interface').PanelMode
            >;
          };
          picker: {
            type: import('vue').PropType<
              import('ant-design-vue/lib/vc-picker/interface').PickerMode
            >;
          };
          valueFormat: StringConstructor;
          disabledHours: import('vue').PropType<() => number[]>;
          disabledMinutes: import('vue').PropType<(hour: number) => number[]>;
          disabledSeconds: import('vue').PropType<(hour: number, minute: number) => number[]>;
        }>
      >,
      {
        open: boolean;
        disabled: boolean;
        autofocus: boolean;
        defaultOpen: boolean;
        allowClear: boolean;
        bordered: boolean;
        showTime: any;
        showNow: boolean;
        showToday: boolean;
        inputReadOnly: boolean;
      }
    >;
    MonthPicker: import('vue').DefineComponent<
      {
        defaultPickerValue: {
          type: import('vue').PropType<string | import('dayjs').Dayjs>;
        };
        defaultValue: {
          type: import('vue').PropType<string | import('dayjs').Dayjs>;
        };
        value: {
          type: import('vue').PropType<string | import('dayjs').Dayjs>;
        };
        disabledTime: {
          type: import('vue').PropType<
            import('ant-design-vue/lib/vc-picker/interface').DisabledTime<import('dayjs').Dayjs>
          >;
        };
        format: {
          type: import('vue').PropType<
            | string
            | import('ant-design-vue/lib/vc-picker/interface').CustomFormat<import('dayjs').Dayjs>
            | (
                | string
                | import('ant-design-vue/lib/vc-picker/interface').CustomFormat<
                    import('dayjs').Dayjs
                  >
              )[]
          >;
        };
        renderExtraFooter: {
          type: import('vue').PropType<
            (
              mode: import('ant-design-vue/lib/vc-picker/interface').PanelMode,
            ) => import('ant-design-vue/lib/_util/type').VueNode
          >;
        };
        showNow: {
          type: BooleanConstructor;
          default: any;
        };
        monthCellRender: {
          type: import('vue').PropType<
            import('ant-design-vue/lib/vc-picker/panels/MonthPanel/MonthBody').MonthCellRender<
              import('dayjs').Dayjs
            >
          >;
        };
        monthCellContentRender: {
          type: import('vue').PropType<
            import('ant-design-vue/lib/vc-picker/panels/MonthPanel/MonthBody').MonthCellRender<
              import('dayjs').Dayjs
            >
          >;
        };
        id: StringConstructor;
        dropdownClassName: StringConstructor;
        dropdownAlign: {
          type: import('vue').PropType<import('ant-design-vue/lib/vc-align/interface').AlignType>;
        };
        popupStyle: {
          type: import('vue').PropType<import('vue').CSSProperties>;
        };
        transitionName: StringConstructor;
        placeholder: StringConstructor;
        allowClear: {
          type: BooleanConstructor;
          default: any;
        };
        autofocus: {
          type: BooleanConstructor;
          default: any;
        };
        disabled: {
          type: BooleanConstructor;
          default: any;
        };
        tabindex: NumberConstructor;
        open: {
          type: BooleanConstructor;
          default: any;
        };
        defaultOpen: {
          type: BooleanConstructor;
          default: any;
        };
        inputReadOnly: {
          type: BooleanConstructor;
          default: any;
        };
        getPopupContainer: {
          type: import('vue').PropType<(node: HTMLElement) => HTMLElement>;
        };
        panelRender: {
          type: import('vue').PropType<
            (
              originPanel: import('ant-design-vue/lib/_util/type').VueNode,
            ) => import('ant-design-vue/lib/_util/type').VueNode
          >;
        };
        onChange: {
          type: import('vue').PropType<
            (value: string | import('dayjs').Dayjs, dateString: string) => void
          >;
        };
        'onUpdate:value': {
          type: import('vue').PropType<(value: string | import('dayjs').Dayjs) => void>;
        };
        onOk: {
          type: import('vue').PropType<(value: string | import('dayjs').Dayjs) => void>;
        };
        onOpenChange: {
          type: import('vue').PropType<(open: boolean) => void>;
        };
        'onUpdate:open': {
          type: import('vue').PropType<(open: boolean) => void>;
        };
        onFocus: {
          type: import('vue').PropType<
            import('ant-design-vue/lib/_util/EventInterface').FocusEventHandler
          >;
        };
        onBlur: {
          type: import('vue').PropType<
            import('ant-design-vue/lib/_util/EventInterface').FocusEventHandler
          >;
        };
        onMousedown: {
          type: import('vue').PropType<
            import('ant-design-vue/lib/_util/EventInterface').MouseEventHandler
          >;
        };
        onMouseup: {
          type: import('vue').PropType<
            import('ant-design-vue/lib/_util/EventInterface').MouseEventHandler
          >;
        };
        onMouseenter: {
          type: import('vue').PropType<
            import('ant-design-vue/lib/_util/EventInterface').MouseEventHandler
          >;
        };
        onMouseleave: {
          type: import('vue').PropType<
            import('ant-design-vue/lib/_util/EventInterface').MouseEventHandler
          >;
        };
        onClick: {
          type: import('vue').PropType<
            import('ant-design-vue/lib/_util/EventInterface').MouseEventHandler
          >;
        };
        onContextmenu: {
          type: import('vue').PropType<
            import('ant-design-vue/lib/_util/EventInterface').MouseEventHandler
          >;
        };
        onKeydown: {
          type: import('vue').PropType<(event: KeyboardEvent, preventDefault: () => void) => void>;
        };
        role: StringConstructor;
        name: StringConstructor;
        autocomplete: StringConstructor;
        direction: {
          type: import('vue').PropType<'rtl' | 'ltr'>;
        };
        showToday: {
          type: BooleanConstructor;
          default: any;
        };
        showTime: {
          type: import('vue').PropType<
            | boolean
            | import('ant-design-vue/lib/vc-picker/panels/TimePanel').SharedTimeProps<
                import('dayjs').Dayjs
              >
          >;
          default: any;
        };
        locale: {
          type: import('vue').PropType<
            import('ant-design-vue/lib/date-picker/generatePicker').PickerLocale
          >;
        };
        size: {
          type: import('vue').PropType<import('ant-design-vue/lib/button').ButtonSize>;
        };
        bordered: {
          type: BooleanConstructor;
          default: any;
        };
        dateRender: {
          type: import('vue').PropType<
            import('ant-design-vue/lib/vc-picker/panels/DatePanel/DateBody').DateRender<
              import('dayjs').Dayjs
            >
          >;
        };
        disabledDate: {
          type: import('vue').PropType<(date: import('dayjs').Dayjs) => boolean>;
        };
        mode: {
          type: import('vue').PropType<import('ant-design-vue/lib/vc-picker/interface').PanelMode>;
        };
        picker: {
          type: import('vue').PropType<import('ant-design-vue/lib/vc-picker/interface').PickerMode>;
        };
        valueFormat: StringConstructor;
        disabledHours: import('vue').PropType<() => number[]>;
        disabledMinutes: import('vue').PropType<(hour: number) => number[]>;
        disabledSeconds: import('vue').PropType<(hour: number, minute: number) => number[]>;
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
          defaultPickerValue: {
            type: import('vue').PropType<string | import('dayjs').Dayjs>;
          };
          defaultValue: {
            type: import('vue').PropType<string | import('dayjs').Dayjs>;
          };
          value: {
            type: import('vue').PropType<string | import('dayjs').Dayjs>;
          };
          disabledTime: {
            type: import('vue').PropType<
              import('ant-design-vue/lib/vc-picker/interface').DisabledTime<import('dayjs').Dayjs>
            >;
          };
          format: {
            type: import('vue').PropType<
              | string
              | import('ant-design-vue/lib/vc-picker/interface').CustomFormat<import('dayjs').Dayjs>
              | (
                  | string
                  | import('ant-design-vue/lib/vc-picker/interface').CustomFormat<
                      import('dayjs').Dayjs
                    >
                )[]
            >;
          };
          renderExtraFooter: {
            type: import('vue').PropType<
              (
                mode: import('ant-design-vue/lib/vc-picker/interface').PanelMode,
              ) => import('ant-design-vue/lib/_util/type').VueNode
            >;
          };
          showNow: {
            type: BooleanConstructor;
            default: any;
          };
          monthCellRender: {
            type: import('vue').PropType<
              import('ant-design-vue/lib/vc-picker/panels/MonthPanel/MonthBody').MonthCellRender<
                import('dayjs').Dayjs
              >
            >;
          };
          monthCellContentRender: {
            type: import('vue').PropType<
              import('ant-design-vue/lib/vc-picker/panels/MonthPanel/MonthBody').MonthCellRender<
                import('dayjs').Dayjs
              >
            >;
          };
          id: StringConstructor;
          dropdownClassName: StringConstructor;
          dropdownAlign: {
            type: import('vue').PropType<import('ant-design-vue/lib/vc-align/interface').AlignType>;
          };
          popupStyle: {
            type: import('vue').PropType<import('vue').CSSProperties>;
          };
          transitionName: StringConstructor;
          placeholder: StringConstructor;
          allowClear: {
            type: BooleanConstructor;
            default: any;
          };
          autofocus: {
            type: BooleanConstructor;
            default: any;
          };
          disabled: {
            type: BooleanConstructor;
            default: any;
          };
          tabindex: NumberConstructor;
          open: {
            type: BooleanConstructor;
            default: any;
          };
          defaultOpen: {
            type: BooleanConstructor;
            default: any;
          };
          inputReadOnly: {
            type: BooleanConstructor;
            default: any;
          };
          getPopupContainer: {
            type: import('vue').PropType<(node: HTMLElement) => HTMLElement>;
          };
          panelRender: {
            type: import('vue').PropType<
              (
                originPanel: import('ant-design-vue/lib/_util/type').VueNode,
              ) => import('ant-design-vue/lib/_util/type').VueNode
            >;
          };
          onChange: {
            type: import('vue').PropType<
              (value: string | import('dayjs').Dayjs, dateString: string) => void
            >;
          };
          'onUpdate:value': {
            type: import('vue').PropType<(value: string | import('dayjs').Dayjs) => void>;
          };
          onOk: {
            type: import('vue').PropType<(value: string | import('dayjs').Dayjs) => void>;
          };
          onOpenChange: {
            type: import('vue').PropType<(open: boolean) => void>;
          };
          'onUpdate:open': {
            type: import('vue').PropType<(open: boolean) => void>;
          };
          onFocus: {
            type: import('vue').PropType<
              import('ant-design-vue/lib/_util/EventInterface').FocusEventHandler
            >;
          };
          onBlur: {
            type: import('vue').PropType<
              import('ant-design-vue/lib/_util/EventInterface').FocusEventHandler
            >;
          };
          onMousedown: {
            type: import('vue').PropType<
              import('ant-design-vue/lib/_util/EventInterface').MouseEventHandler
            >;
          };
          onMouseup: {
            type: import('vue').PropType<
              import('ant-design-vue/lib/_util/EventInterface').MouseEventHandler
            >;
          };
          onMouseenter: {
            type: import('vue').PropType<
              import('ant-design-vue/lib/_util/EventInterface').MouseEventHandler
            >;
          };
          onMouseleave: {
            type: import('vue').PropType<
              import('ant-design-vue/lib/_util/EventInterface').MouseEventHandler
            >;
          };
          onClick: {
            type: import('vue').PropType<
              import('ant-design-vue/lib/_util/EventInterface').MouseEventHandler
            >;
          };
          onContextmenu: {
            type: import('vue').PropType<
              import('ant-design-vue/lib/_util/EventInterface').MouseEventHandler
            >;
          };
          onKeydown: {
            type: import('vue').PropType<
              (event: KeyboardEvent, preventDefault: () => void) => void
            >;
          };
          role: StringConstructor;
          name: StringConstructor;
          autocomplete: StringConstructor;
          direction: {
            type: import('vue').PropType<'rtl' | 'ltr'>;
          };
          showToday: {
            type: BooleanConstructor;
            default: any;
          };
          showTime: {
            type: import('vue').PropType<
              | boolean
              | import('ant-design-vue/lib/vc-picker/panels/TimePanel').SharedTimeProps<
                  import('dayjs').Dayjs
                >
            >;
            default: any;
          };
          locale: {
            type: import('vue').PropType<
              import('ant-design-vue/lib/date-picker/generatePicker').PickerLocale
            >;
          };
          size: {
            type: import('vue').PropType<import('ant-design-vue/lib/button').ButtonSize>;
          };
          bordered: {
            type: BooleanConstructor;
            default: any;
          };
          dateRender: {
            type: import('vue').PropType<
              import('ant-design-vue/lib/vc-picker/panels/DatePanel/DateBody').DateRender<
                import('dayjs').Dayjs
              >
            >;
          };
          disabledDate: {
            type: import('vue').PropType<(date: import('dayjs').Dayjs) => boolean>;
          };
          mode: {
            type: import('vue').PropType<
              import('ant-design-vue/lib/vc-picker/interface').PanelMode
            >;
          };
          picker: {
            type: import('vue').PropType<
              import('ant-design-vue/lib/vc-picker/interface').PickerMode
            >;
          };
          valueFormat: StringConstructor;
          disabledHours: import('vue').PropType<() => number[]>;
          disabledMinutes: import('vue').PropType<(hour: number) => number[]>;
          disabledSeconds: import('vue').PropType<(hour: number, minute: number) => number[]>;
        }>
      >,
      {
        open: boolean;
        disabled: boolean;
        autofocus: boolean;
        defaultOpen: boolean;
        allowClear: boolean;
        bordered: boolean;
        showTime: any;
        showNow: boolean;
        showToday: boolean;
        inputReadOnly: boolean;
      }
    >;
  };
export default DatePicker;
