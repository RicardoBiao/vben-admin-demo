export declare const Cascader: {
  new (...args: any[]): {
    $: import('vue').ComponentInternalInstance;
    $data: {};
    $props: Partial<{
      open: boolean;
      multiple: boolean;
      disabled: boolean;
      dropdownMatchSelectWidth: number | boolean;
      popupStyle: import('vue').CSSProperties;
      popupVisible: boolean;
      autofocus: boolean;
      dropdownStyle: import('vue').CSSProperties;
      loading: boolean;
      showSearch:
        | boolean
        | import('ant-design-vue/lib/cascader').ShowSearchType<
            import('ant-design-vue/lib/cascader').DefaultOptionType
          >;
      defaultOpen: boolean;
      allowClear: boolean;
      showArrow: boolean;
      bordered: boolean;
      changeOnSelect: boolean;
      showCheckedStrategy: import('ant-design-vue/lib/vc-cascader/Cascader').ShowCheckedStrategy;
      dropdownMenuColumnStyle: import('vue').CSSProperties;
    }> &
      Omit<
        Readonly<
          import('vue').ExtractPropTypes<{
            multiple: {
              type: BooleanConstructor;
              default: any;
            };
            size: import('vue').PropType<import('ant-design-vue/lib/button').ButtonSize>;
            bordered: {
              type: BooleanConstructor;
              default: any;
            };
            placement: {
              type: import('vue').PropType<'bottomLeft' | 'bottomRight' | 'topLeft' | 'topRight'>;
            };
            suffixIcon: import('vue-types').VueTypeValidableDef<any>;
            options: import('vue').PropType<
              import('ant-design-vue/lib/cascader').CascaderOptionType[]
            >;
            'onUpdate:value': import('vue').PropType<
              (value: import('ant-design-vue/lib/vc-cascader/Cascader').ValueType) => void
            >;
            onFocus: {
              type: import('vue').PropType<(e: FocusEvent) => void>;
            };
            onBlur: {
              type: import('vue').PropType<(e: FocusEvent) => void>;
            };
            onChange: import('vue').PropType<
              (
                value: import('ant-design-vue/lib/vc-cascader/Cascader').ValueType,
                selectOptions:
                  | import('ant-design-vue/lib/cascader').DefaultOptionType[]
                  | import('ant-design-vue/lib/cascader').DefaultOptionType[][],
              ) => void
            >;
            onKeydown: import('vue').PropType<(e: KeyboardEvent) => void>;
            onKeyup: import('vue').PropType<(e: KeyboardEvent) => void>;
            onClick: import('vue').PropType<(e: MouseEvent) => void>;
            onMousedown: import('vue').PropType<(e: MouseEvent) => void>;
            onMouseenter: import('vue').PropType<(e: MouseEvent) => void>;
            onMouseleave: import('vue').PropType<(e: MouseEvent) => void>;
            prefixCls: StringConstructor;
            direction: {
              type: import('vue').PropType<'rtl' | 'ltr'>;
            };
            open: {
              type: BooleanConstructor;
              default: any;
            };
            animation: StringConstructor;
            disabled: {
              type: BooleanConstructor;
              default: any;
            };
            value: {
              type: import('vue').PropType<
                import('ant-design-vue/lib/vc-cascader/Cascader').ValueType
              >;
            };
            tabindex: NumberConstructor;
            getPopupContainer: {
              type: import('vue').PropType<
                import('ant-design-vue/lib/vc-select/BaseSelect').RenderDOMFunc
              >;
            };
            dropdownMatchSelectWidth: {
              type: import('vue').PropType<number | boolean>;
              default: any;
            };
            children: import('vue').PropType<import('ant-design-vue/lib/_util/type').VueNode[]>;
            transitionName: StringConstructor;
            popupClassName: StringConstructor;
            popupStyle: {
              type: import('vue').PropType<import('vue').CSSProperties>;
              default: import('vue').CSSProperties;
            };
            popupVisible: {
              type: BooleanConstructor;
              default: any;
            };
            showAction: {
              type: import('vue').PropType<('click' | 'focus')[]>;
            };
            popupPlacement: import('vue').PropType<
              import('ant-design-vue/lib/vc-select/BaseSelect').Placement
            >;
            onPopupVisibleChange: import('vue').PropType<(open: boolean) => void>;
            id: StringConstructor;
            autofocus: BooleanConstructor;
            defaultValue: {
              type: import('vue').PropType<
                import('ant-design-vue/lib/vc-cascader/Cascader').ValueType
              >;
            };
            fieldNames: import('vue').PropType<import('ant-design-vue/lib/vc-cascader').FieldNames>;
            dropdownStyle: {
              type: import('vue').PropType<import('vue').CSSProperties>;
              default: import('vue').CSSProperties;
            };
            dropdownClassName: StringConstructor;
            dropdownRender: {
              type: import('vue').PropType<
                import('ant-design-vue/lib/vc-select/BaseSelect').DropdownRender
              >;
            };
            dropdownAlign: import('vue').PropType<
              import('ant-design-vue/lib/vc-trigger/interface').AlignType
            >;
            placeholder: import('vue-types').VueTypeValidableDef<any>;
            loading: {
              type: BooleanConstructor;
              default: any;
            };
            loadData: import('vue').PropType<
              (selectOptions: import('ant-design-vue/lib/cascader').DefaultOptionType[]) => void
            >;
            showSearch: {
              type: import('vue').PropType<
                | boolean
                | import('ant-design-vue/lib/cascader').ShowSearchType<
                    import('ant-design-vue/lib/cascader').DefaultOptionType
                  >
              >;
              default:
                | boolean
                | import('ant-design-vue/lib/cascader').ShowSearchType<
                    import('ant-design-vue/lib/cascader').DefaultOptionType
                  >;
            };
            searchValue: StringConstructor;
            onInputKeyDown: import('vue').PropType<(e: KeyboardEvent) => void>;
            removeIcon: import('vue-types').VueTypeValidableDef<any>;
            maxTagCount: {
              type: import('vue').PropType<number | 'responsive'>;
            };
            maxTagTextLength: NumberConstructor;
            maxTagPlaceholder: import('vue-types').VueTypeValidableDef<any>;
            tagRender: {
              type: import('vue').PropType<
                (props: import('ant-design-vue/lib/vc-select/BaseSelect').CustomTagProps) => any
              >;
            };
            choiceTransitionName: StringConstructor;
            optionLabelRender: {
              type: import('vue').PropType<(option: Record<string, any>) => any>;
            };
            onSearch: import('vue').PropType<(value: string) => void>;
            notFoundContent: import('vue-types').VueTypeValidableDef<any>;
            onClear: import('vue').PropType<() => void>;
            defaultOpen: {
              type: BooleanConstructor;
              default: any;
            };
            onDropdownVisibleChange: import('vue').PropType<(open: boolean) => void>;
            getInputElement: {
              type: import('vue').PropType<() => any>;
            };
            getRawInputElement: {
              type: import('vue').PropType<() => any>;
            };
            allowClear: {
              type: BooleanConstructor;
              default: any;
            };
            showArrow: {
              type: BooleanConstructor;
              default: any;
            };
            inputIcon: import('vue-types').VueTypeValidableDef<any>;
            clearIcon: import('vue-types').VueTypeValidableDef<any>;
            onPopupScroll: import('vue').PropType<(e: UIEvent) => void>;
            expandIcon: import('vue-types').VueTypeValidableDef<any>;
            changeOnSelect: {
              type: BooleanConstructor;
              default: any;
            };
            displayRender: import('vue').PropType<
              (opt: {
                labels: string[];
                selectedOptions?: import('ant-design-vue/lib/cascader').DefaultOptionType[];
              }) => any
            >;
            showCheckedStrategy: {
              type: import('vue').PropType<
                import('ant-design-vue/lib/vc-cascader/Cascader').ShowCheckedStrategy
              >;
              default: string;
            };
            expandTrigger: import('vue').PropType<'click' | 'hover'>;
            dropdownPrefixCls: StringConstructor;
            dropdownMenuColumnStyle: {
              type: import('vue').PropType<import('vue').CSSProperties>;
              default: import('vue').CSSProperties;
            };
            loadingIcon: import('vue-types').VueTypeValidableDef<any>;
          }>
        > &
          import('vue').VNodeProps &
          import('vue').AllowedComponentProps &
          import('vue').ComponentCustomProps,
        | 'bordered'
        | 'open'
        | 'disabled'
        | 'dropdownMatchSelectWidth'
        | 'autofocus'
        | 'dropdownStyle'
        | 'loading'
        | 'showSearch'
        | 'defaultOpen'
        | 'allowClear'
        | 'showArrow'
        | 'multiple'
        | 'popupStyle'
        | 'popupVisible'
        | 'changeOnSelect'
        | 'showCheckedStrategy'
        | 'dropdownMenuColumnStyle'
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
          multiple: {
            type: BooleanConstructor;
            default: any;
          };
          size: import('vue').PropType<import('ant-design-vue/lib/button').ButtonSize>;
          bordered: {
            type: BooleanConstructor;
            default: any;
          };
          placement: {
            type: import('vue').PropType<'bottomLeft' | 'bottomRight' | 'topLeft' | 'topRight'>;
          };
          suffixIcon: import('vue-types').VueTypeValidableDef<any>;
          options: import('vue').PropType<
            import('ant-design-vue/lib/cascader').CascaderOptionType[]
          >;
          'onUpdate:value': import('vue').PropType<
            (value: import('ant-design-vue/lib/vc-cascader/Cascader').ValueType) => void
          >;
          onFocus: {
            type: import('vue').PropType<(e: FocusEvent) => void>;
          };
          onBlur: {
            type: import('vue').PropType<(e: FocusEvent) => void>;
          };
          onChange: import('vue').PropType<
            (
              value: import('ant-design-vue/lib/vc-cascader/Cascader').ValueType,
              selectOptions:
                | import('ant-design-vue/lib/cascader').DefaultOptionType[]
                | import('ant-design-vue/lib/cascader').DefaultOptionType[][],
            ) => void
          >;
          onKeydown: import('vue').PropType<(e: KeyboardEvent) => void>;
          onKeyup: import('vue').PropType<(e: KeyboardEvent) => void>;
          onClick: import('vue').PropType<(e: MouseEvent) => void>;
          onMousedown: import('vue').PropType<(e: MouseEvent) => void>;
          onMouseenter: import('vue').PropType<(e: MouseEvent) => void>;
          onMouseleave: import('vue').PropType<(e: MouseEvent) => void>;
          prefixCls: StringConstructor;
          direction: {
            type: import('vue').PropType<'rtl' | 'ltr'>;
          };
          open: {
            type: BooleanConstructor;
            default: any;
          };
          animation: StringConstructor;
          disabled: {
            type: BooleanConstructor;
            default: any;
          };
          value: {
            type: import('vue').PropType<
              import('ant-design-vue/lib/vc-cascader/Cascader').ValueType
            >;
          };
          tabindex: NumberConstructor;
          getPopupContainer: {
            type: import('vue').PropType<
              import('ant-design-vue/lib/vc-select/BaseSelect').RenderDOMFunc
            >;
          };
          dropdownMatchSelectWidth: {
            type: import('vue').PropType<number | boolean>;
            default: any;
          };
          children: import('vue').PropType<import('ant-design-vue/lib/_util/type').VueNode[]>;
          transitionName: StringConstructor;
          popupClassName: StringConstructor;
          popupStyle: {
            type: import('vue').PropType<import('vue').CSSProperties>;
            default: import('vue').CSSProperties;
          };
          popupVisible: {
            type: BooleanConstructor;
            default: any;
          };
          showAction: {
            type: import('vue').PropType<('click' | 'focus')[]>;
          };
          popupPlacement: import('vue').PropType<
            import('ant-design-vue/lib/vc-select/BaseSelect').Placement
          >;
          onPopupVisibleChange: import('vue').PropType<(open: boolean) => void>;
          id: StringConstructor;
          autofocus: BooleanConstructor;
          defaultValue: {
            type: import('vue').PropType<
              import('ant-design-vue/lib/vc-cascader/Cascader').ValueType
            >;
          };
          fieldNames: import('vue').PropType<import('ant-design-vue/lib/vc-cascader').FieldNames>;
          dropdownStyle: {
            type: import('vue').PropType<import('vue').CSSProperties>;
            default: import('vue').CSSProperties;
          };
          dropdownClassName: StringConstructor;
          dropdownRender: {
            type: import('vue').PropType<
              import('ant-design-vue/lib/vc-select/BaseSelect').DropdownRender
            >;
          };
          dropdownAlign: import('vue').PropType<
            import('ant-design-vue/lib/vc-trigger/interface').AlignType
          >;
          placeholder: import('vue-types').VueTypeValidableDef<any>;
          loading: {
            type: BooleanConstructor;
            default: any;
          };
          loadData: import('vue').PropType<
            (selectOptions: import('ant-design-vue/lib/cascader').DefaultOptionType[]) => void
          >;
          showSearch: {
            type: import('vue').PropType<
              | boolean
              | import('ant-design-vue/lib/cascader').ShowSearchType<
                  import('ant-design-vue/lib/cascader').DefaultOptionType
                >
            >;
            default:
              | boolean
              | import('ant-design-vue/lib/cascader').ShowSearchType<
                  import('ant-design-vue/lib/cascader').DefaultOptionType
                >;
          };
          searchValue: StringConstructor;
          onInputKeyDown: import('vue').PropType<(e: KeyboardEvent) => void>;
          removeIcon: import('vue-types').VueTypeValidableDef<any>;
          maxTagCount: {
            type: import('vue').PropType<number | 'responsive'>;
          };
          maxTagTextLength: NumberConstructor;
          maxTagPlaceholder: import('vue-types').VueTypeValidableDef<any>;
          tagRender: {
            type: import('vue').PropType<
              (props: import('ant-design-vue/lib/vc-select/BaseSelect').CustomTagProps) => any
            >;
          };
          choiceTransitionName: StringConstructor;
          optionLabelRender: {
            type: import('vue').PropType<(option: Record<string, any>) => any>;
          };
          onSearch: import('vue').PropType<(value: string) => void>;
          notFoundContent: import('vue-types').VueTypeValidableDef<any>;
          onClear: import('vue').PropType<() => void>;
          defaultOpen: {
            type: BooleanConstructor;
            default: any;
          };
          onDropdownVisibleChange: import('vue').PropType<(open: boolean) => void>;
          getInputElement: {
            type: import('vue').PropType<() => any>;
          };
          getRawInputElement: {
            type: import('vue').PropType<() => any>;
          };
          allowClear: {
            type: BooleanConstructor;
            default: any;
          };
          showArrow: {
            type: BooleanConstructor;
            default: any;
          };
          inputIcon: import('vue-types').VueTypeValidableDef<any>;
          clearIcon: import('vue-types').VueTypeValidableDef<any>;
          onPopupScroll: import('vue').PropType<(e: UIEvent) => void>;
          expandIcon: import('vue-types').VueTypeValidableDef<any>;
          changeOnSelect: {
            type: BooleanConstructor;
            default: any;
          };
          displayRender: import('vue').PropType<
            (opt: {
              labels: string[];
              selectedOptions?: import('ant-design-vue/lib/cascader').DefaultOptionType[];
            }) => any
          >;
          showCheckedStrategy: {
            type: import('vue').PropType<
              import('ant-design-vue/lib/vc-cascader/Cascader').ShowCheckedStrategy
            >;
            default: string;
          };
          expandTrigger: import('vue').PropType<'click' | 'hover'>;
          dropdownPrefixCls: StringConstructor;
          dropdownMenuColumnStyle: {
            type: import('vue').PropType<import('vue').CSSProperties>;
            default: import('vue').CSSProperties;
          };
          loadingIcon: import('vue-types').VueTypeValidableDef<any>;
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
        multiple: boolean;
        disabled: boolean;
        dropdownMatchSelectWidth: number | boolean;
        popupStyle: import('vue').CSSProperties;
        popupVisible: boolean;
        autofocus: boolean;
        dropdownStyle: import('vue').CSSProperties;
        loading: boolean;
        showSearch:
          | boolean
          | import('ant-design-vue/lib/cascader').ShowSearchType<
              import('ant-design-vue/lib/cascader').DefaultOptionType
            >;
        defaultOpen: boolean;
        allowClear: boolean;
        showArrow: boolean;
        bordered: boolean;
        changeOnSelect: boolean;
        showCheckedStrategy: import('ant-design-vue/lib/vc-cascader/Cascader').ShowCheckedStrategy;
        dropdownMenuColumnStyle: import('vue').CSSProperties;
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
      multiple: {
        type: BooleanConstructor;
        default: any;
      };
      size: import('vue').PropType<import('ant-design-vue/lib/button').ButtonSize>;
      bordered: {
        type: BooleanConstructor;
        default: any;
      };
      placement: {
        type: import('vue').PropType<'bottomLeft' | 'bottomRight' | 'topLeft' | 'topRight'>;
      };
      suffixIcon: import('vue-types').VueTypeValidableDef<any>;
      options: import('vue').PropType<import('ant-design-vue/lib/cascader').CascaderOptionType[]>;
      'onUpdate:value': import('vue').PropType<
        (value: import('ant-design-vue/lib/vc-cascader/Cascader').ValueType) => void
      >;
      onFocus: {
        type: import('vue').PropType<(e: FocusEvent) => void>;
      };
      onBlur: {
        type: import('vue').PropType<(e: FocusEvent) => void>;
      };
      onChange: import('vue').PropType<
        (
          value: import('ant-design-vue/lib/vc-cascader/Cascader').ValueType,
          selectOptions:
            | import('ant-design-vue/lib/cascader').DefaultOptionType[]
            | import('ant-design-vue/lib/cascader').DefaultOptionType[][],
        ) => void
      >;
      onKeydown: import('vue').PropType<(e: KeyboardEvent) => void>;
      onKeyup: import('vue').PropType<(e: KeyboardEvent) => void>;
      onClick: import('vue').PropType<(e: MouseEvent) => void>;
      onMousedown: import('vue').PropType<(e: MouseEvent) => void>;
      onMouseenter: import('vue').PropType<(e: MouseEvent) => void>;
      onMouseleave: import('vue').PropType<(e: MouseEvent) => void>;
      prefixCls: StringConstructor;
      direction: {
        type: import('vue').PropType<'rtl' | 'ltr'>;
      };
      open: {
        type: BooleanConstructor;
        default: any;
      };
      animation: StringConstructor;
      disabled: {
        type: BooleanConstructor;
        default: any;
      };
      value: {
        type: import('vue').PropType<import('ant-design-vue/lib/vc-cascader/Cascader').ValueType>;
      };
      tabindex: NumberConstructor;
      getPopupContainer: {
        type: import('vue').PropType<
          import('ant-design-vue/lib/vc-select/BaseSelect').RenderDOMFunc
        >;
      };
      dropdownMatchSelectWidth: {
        type: import('vue').PropType<number | boolean>;
        default: any;
      };
      children: import('vue').PropType<import('ant-design-vue/lib/_util/type').VueNode[]>;
      transitionName: StringConstructor;
      popupClassName: StringConstructor;
      popupStyle: {
        type: import('vue').PropType<import('vue').CSSProperties>;
        default: import('vue').CSSProperties;
      };
      popupVisible: {
        type: BooleanConstructor;
        default: any;
      };
      showAction: {
        type: import('vue').PropType<('click' | 'focus')[]>;
      };
      popupPlacement: import('vue').PropType<
        import('ant-design-vue/lib/vc-select/BaseSelect').Placement
      >;
      onPopupVisibleChange: import('vue').PropType<(open: boolean) => void>;
      id: StringConstructor;
      autofocus: BooleanConstructor;
      defaultValue: {
        type: import('vue').PropType<import('ant-design-vue/lib/vc-cascader/Cascader').ValueType>;
      };
      fieldNames: import('vue').PropType<import('ant-design-vue/lib/vc-cascader').FieldNames>;
      dropdownStyle: {
        type: import('vue').PropType<import('vue').CSSProperties>;
        default: import('vue').CSSProperties;
      };
      dropdownClassName: StringConstructor;
      dropdownRender: {
        type: import('vue').PropType<
          import('ant-design-vue/lib/vc-select/BaseSelect').DropdownRender
        >;
      };
      dropdownAlign: import('vue').PropType<
        import('ant-design-vue/lib/vc-trigger/interface').AlignType
      >;
      placeholder: import('vue-types').VueTypeValidableDef<any>;
      loading: {
        type: BooleanConstructor;
        default: any;
      };
      loadData: import('vue').PropType<
        (selectOptions: import('ant-design-vue/lib/cascader').DefaultOptionType[]) => void
      >;
      showSearch: {
        type: import('vue').PropType<
          | boolean
          | import('ant-design-vue/lib/cascader').ShowSearchType<
              import('ant-design-vue/lib/cascader').DefaultOptionType
            >
        >;
        default:
          | boolean
          | import('ant-design-vue/lib/cascader').ShowSearchType<
              import('ant-design-vue/lib/cascader').DefaultOptionType
            >;
      };
      searchValue: StringConstructor;
      onInputKeyDown: import('vue').PropType<(e: KeyboardEvent) => void>;
      removeIcon: import('vue-types').VueTypeValidableDef<any>;
      maxTagCount: {
        type: import('vue').PropType<number | 'responsive'>;
      };
      maxTagTextLength: NumberConstructor;
      maxTagPlaceholder: import('vue-types').VueTypeValidableDef<any>;
      tagRender: {
        type: import('vue').PropType<
          (props: import('ant-design-vue/lib/vc-select/BaseSelect').CustomTagProps) => any
        >;
      };
      choiceTransitionName: StringConstructor;
      optionLabelRender: {
        type: import('vue').PropType<(option: Record<string, any>) => any>;
      };
      onSearch: import('vue').PropType<(value: string) => void>;
      notFoundContent: import('vue-types').VueTypeValidableDef<any>;
      onClear: import('vue').PropType<() => void>;
      defaultOpen: {
        type: BooleanConstructor;
        default: any;
      };
      onDropdownVisibleChange: import('vue').PropType<(open: boolean) => void>;
      getInputElement: {
        type: import('vue').PropType<() => any>;
      };
      getRawInputElement: {
        type: import('vue').PropType<() => any>;
      };
      allowClear: {
        type: BooleanConstructor;
        default: any;
      };
      showArrow: {
        type: BooleanConstructor;
        default: any;
      };
      inputIcon: import('vue-types').VueTypeValidableDef<any>;
      clearIcon: import('vue-types').VueTypeValidableDef<any>;
      onPopupScroll: import('vue').PropType<(e: UIEvent) => void>;
      expandIcon: import('vue-types').VueTypeValidableDef<any>;
      changeOnSelect: {
        type: BooleanConstructor;
        default: any;
      };
      displayRender: import('vue').PropType<
        (opt: {
          labels: string[];
          selectedOptions?: import('ant-design-vue/lib/cascader').DefaultOptionType[];
        }) => any
      >;
      showCheckedStrategy: {
        type: import('vue').PropType<
          import('ant-design-vue/lib/vc-cascader/Cascader').ShowCheckedStrategy
        >;
        default: string;
      };
      expandTrigger: import('vue').PropType<'click' | 'hover'>;
      dropdownPrefixCls: StringConstructor;
      dropdownMenuColumnStyle: {
        type: import('vue').PropType<import('vue').CSSProperties>;
        default: import('vue').CSSProperties;
      };
      loadingIcon: import('vue-types').VueTypeValidableDef<any>;
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
      multiple: {
        type: BooleanConstructor;
        default: any;
      };
      size: import('vue').PropType<import('ant-design-vue/lib/button').ButtonSize>;
      bordered: {
        type: BooleanConstructor;
        default: any;
      };
      placement: {
        type: import('vue').PropType<'bottomLeft' | 'bottomRight' | 'topLeft' | 'topRight'>;
      };
      suffixIcon: import('vue-types').VueTypeValidableDef<any>;
      options: import('vue').PropType<import('ant-design-vue/lib/cascader').CascaderOptionType[]>;
      'onUpdate:value': import('vue').PropType<
        (value: import('ant-design-vue/lib/vc-cascader/Cascader').ValueType) => void
      >;
      onFocus: {
        type: import('vue').PropType<(e: FocusEvent) => void>;
      };
      onBlur: {
        type: import('vue').PropType<(e: FocusEvent) => void>;
      };
      onChange: import('vue').PropType<
        (
          value: import('ant-design-vue/lib/vc-cascader/Cascader').ValueType,
          selectOptions:
            | import('ant-design-vue/lib/cascader').DefaultOptionType[]
            | import('ant-design-vue/lib/cascader').DefaultOptionType[][],
        ) => void
      >;
      onKeydown: import('vue').PropType<(e: KeyboardEvent) => void>;
      onKeyup: import('vue').PropType<(e: KeyboardEvent) => void>;
      onClick: import('vue').PropType<(e: MouseEvent) => void>;
      onMousedown: import('vue').PropType<(e: MouseEvent) => void>;
      onMouseenter: import('vue').PropType<(e: MouseEvent) => void>;
      onMouseleave: import('vue').PropType<(e: MouseEvent) => void>;
      prefixCls: StringConstructor;
      direction: {
        type: import('vue').PropType<'rtl' | 'ltr'>;
      };
      open: {
        type: BooleanConstructor;
        default: any;
      };
      animation: StringConstructor;
      disabled: {
        type: BooleanConstructor;
        default: any;
      };
      value: {
        type: import('vue').PropType<import('ant-design-vue/lib/vc-cascader/Cascader').ValueType>;
      };
      tabindex: NumberConstructor;
      getPopupContainer: {
        type: import('vue').PropType<
          import('ant-design-vue/lib/vc-select/BaseSelect').RenderDOMFunc
        >;
      };
      dropdownMatchSelectWidth: {
        type: import('vue').PropType<number | boolean>;
        default: any;
      };
      children: import('vue').PropType<import('ant-design-vue/lib/_util/type').VueNode[]>;
      transitionName: StringConstructor;
      popupClassName: StringConstructor;
      popupStyle: {
        type: import('vue').PropType<import('vue').CSSProperties>;
        default: import('vue').CSSProperties;
      };
      popupVisible: {
        type: BooleanConstructor;
        default: any;
      };
      showAction: {
        type: import('vue').PropType<('click' | 'focus')[]>;
      };
      popupPlacement: import('vue').PropType<
        import('ant-design-vue/lib/vc-select/BaseSelect').Placement
      >;
      onPopupVisibleChange: import('vue').PropType<(open: boolean) => void>;
      id: StringConstructor;
      autofocus: BooleanConstructor;
      defaultValue: {
        type: import('vue').PropType<import('ant-design-vue/lib/vc-cascader/Cascader').ValueType>;
      };
      fieldNames: import('vue').PropType<import('ant-design-vue/lib/vc-cascader').FieldNames>;
      dropdownStyle: {
        type: import('vue').PropType<import('vue').CSSProperties>;
        default: import('vue').CSSProperties;
      };
      dropdownClassName: StringConstructor;
      dropdownRender: {
        type: import('vue').PropType<
          import('ant-design-vue/lib/vc-select/BaseSelect').DropdownRender
        >;
      };
      dropdownAlign: import('vue').PropType<
        import('ant-design-vue/lib/vc-trigger/interface').AlignType
      >;
      placeholder: import('vue-types').VueTypeValidableDef<any>;
      loading: {
        type: BooleanConstructor;
        default: any;
      };
      loadData: import('vue').PropType<
        (selectOptions: import('ant-design-vue/lib/cascader').DefaultOptionType[]) => void
      >;
      showSearch: {
        type: import('vue').PropType<
          | boolean
          | import('ant-design-vue/lib/cascader').ShowSearchType<
              import('ant-design-vue/lib/cascader').DefaultOptionType
            >
        >;
        default:
          | boolean
          | import('ant-design-vue/lib/cascader').ShowSearchType<
              import('ant-design-vue/lib/cascader').DefaultOptionType
            >;
      };
      searchValue: StringConstructor;
      onInputKeyDown: import('vue').PropType<(e: KeyboardEvent) => void>;
      removeIcon: import('vue-types').VueTypeValidableDef<any>;
      maxTagCount: {
        type: import('vue').PropType<number | 'responsive'>;
      };
      maxTagTextLength: NumberConstructor;
      maxTagPlaceholder: import('vue-types').VueTypeValidableDef<any>;
      tagRender: {
        type: import('vue').PropType<
          (props: import('ant-design-vue/lib/vc-select/BaseSelect').CustomTagProps) => any
        >;
      };
      choiceTransitionName: StringConstructor;
      optionLabelRender: {
        type: import('vue').PropType<(option: Record<string, any>) => any>;
      };
      onSearch: import('vue').PropType<(value: string) => void>;
      notFoundContent: import('vue-types').VueTypeValidableDef<any>;
      onClear: import('vue').PropType<() => void>;
      defaultOpen: {
        type: BooleanConstructor;
        default: any;
      };
      onDropdownVisibleChange: import('vue').PropType<(open: boolean) => void>;
      getInputElement: {
        type: import('vue').PropType<() => any>;
      };
      getRawInputElement: {
        type: import('vue').PropType<() => any>;
      };
      allowClear: {
        type: BooleanConstructor;
        default: any;
      };
      showArrow: {
        type: BooleanConstructor;
        default: any;
      };
      inputIcon: import('vue-types').VueTypeValidableDef<any>;
      clearIcon: import('vue-types').VueTypeValidableDef<any>;
      onPopupScroll: import('vue').PropType<(e: UIEvent) => void>;
      expandIcon: import('vue-types').VueTypeValidableDef<any>;
      changeOnSelect: {
        type: BooleanConstructor;
        default: any;
      };
      displayRender: import('vue').PropType<
        (opt: {
          labels: string[];
          selectedOptions?: import('ant-design-vue/lib/cascader').DefaultOptionType[];
        }) => any
      >;
      showCheckedStrategy: {
        type: import('vue').PropType<
          import('ant-design-vue/lib/vc-cascader/Cascader').ShowCheckedStrategy
        >;
        default: string;
      };
      expandTrigger: import('vue').PropType<'click' | 'hover'>;
      dropdownPrefixCls: StringConstructor;
      dropdownMenuColumnStyle: {
        type: import('vue').PropType<import('vue').CSSProperties>;
        default: import('vue').CSSProperties;
      };
      loadingIcon: import('vue-types').VueTypeValidableDef<any>;
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
    multiple: boolean;
    disabled: boolean;
    dropdownMatchSelectWidth: number | boolean;
    popupStyle: import('vue').CSSProperties;
    popupVisible: boolean;
    autofocus: boolean;
    dropdownStyle: import('vue').CSSProperties;
    loading: boolean;
    showSearch:
      | boolean
      | import('ant-design-vue/lib/cascader').ShowSearchType<
          import('ant-design-vue/lib/cascader').DefaultOptionType
        >;
    defaultOpen: boolean;
    allowClear: boolean;
    showArrow: boolean;
    bordered: boolean;
    changeOnSelect: boolean;
    showCheckedStrategy: import('ant-design-vue/lib/vc-cascader/Cascader').ShowCheckedStrategy;
    dropdownMenuColumnStyle: import('vue').CSSProperties;
  }
> &
  import('vue').VNodeProps &
  import('vue').AllowedComponentProps &
  import('vue').ComponentCustomProps &
  import('@vue/runtime-core').Plugin;
export default Cascader;
