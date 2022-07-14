export declare const Select: {
  new (...args: any[]): {
    $: import('vue').ComponentInternalInstance;
    $data: {};
    $props: Partial<{
      open: boolean;
      disabled: boolean;
      virtual: boolean;
      dropdownMatchSelectWidth: number | boolean;
      autofocus: boolean;
      loading: boolean;
      showSearch: boolean;
      choiceTransitionName: string;
      defaultOpen: boolean;
      allowClear: boolean;
      showArrow: boolean;
      autoClearSearchValue: boolean;
      filterOption:
        | boolean
        | import('ant-design-vue/lib/vc-select/Select').FilterFunc<
            import('ant-design-vue/lib/select').DefaultOptionType
          >;
      defaultActiveFirstOption: boolean;
      labelInValue: boolean;
      bordered: boolean;
    }> &
      Omit<
        Readonly<
          import('vue').ExtractPropTypes<{
            value: {
              type: import('vue').PropType<import('ant-design-vue/lib/select').SelectValue>;
            };
            defaultValue: {
              type: import('vue').PropType<import('ant-design-vue/lib/select').SelectValue>;
            };
            notFoundContent: import('vue-types').VueTypeValidableDef<any>;
            suffixIcon: import('vue-types').VueTypeValidableDef<any>;
            itemIcon: import('vue-types').VueTypeValidableDef<any>;
            size: import('vue').PropType<import('ant-design-vue/lib/button').ButtonSize>;
            mode: import('vue').PropType<'multiple' | 'tags' | 'SECRET_COMBOBOX_MODE_DO_NOT_USE'>;
            bordered: {
              type: BooleanConstructor;
              default: boolean;
            };
            transitionName: StringConstructor;
            choiceTransitionName: {
              type: StringConstructor;
              default: string;
            };
            'onUpdate:value': import('vue').PropType<
              (val: import('ant-design-vue/lib/select').SelectValue) => void
            >;
            onFocus: {
              type: import('vue').PropType<(e: FocusEvent) => void>;
            };
            onBlur: {
              type: import('vue').PropType<(e: FocusEvent) => void>;
            };
            onChange: import('vue').PropType<
              (
                value: import('ant-design-vue/lib/select').SelectValue,
                option:
                  | import('ant-design-vue/lib/select').DefaultOptionType
                  | import('ant-design-vue/lib/select').DefaultOptionType[],
              ) => void
            >;
            onKeydown: import('vue').PropType<(e: KeyboardEvent) => void>;
            onKeyup: import('vue').PropType<(e: KeyboardEvent) => void>;
            onClick: import('vue').PropType<(e: MouseEvent) => void>;
            onMousedown: import('vue').PropType<(e: MouseEvent) => void>;
            onMouseenter: import('vue').PropType<(e: MouseEvent) => void>;
            onMouseleave: import('vue').PropType<(e: MouseEvent) => void>;
            onSelect: import('vue').PropType<
              import('ant-design-vue/lib/vc-select/Select').SelectHandler<
                (string | number) | import('ant-design-vue/lib/select').LabeledValue,
                import('ant-design-vue/lib/select').DefaultOptionType
              >
            >;
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
            tabindex: NumberConstructor;
            getPopupContainer: {
              type: import('vue').PropType<
                import('ant-design-vue/lib/vc-select/BaseSelect').RenderDOMFunc
              >;
            };
            virtual: {
              type: BooleanConstructor;
              default: any;
            };
            dropdownMatchSelectWidth: {
              type: import('vue').PropType<number | boolean>;
              default: any;
            };
            children: import('vue').PropType<import('ant-design-vue/lib/_util/type').VueNode[]>;
            showAction: {
              type: import('vue').PropType<('click' | 'focus')[]>;
            };
            id: StringConstructor;
            placement: {
              type: import('vue').PropType<
                import('ant-design-vue/lib/vc-select/BaseSelect').Placement
              >;
            };
            autofocus: BooleanConstructor;
            options: import('vue').PropType<
              import('ant-design-vue/lib/select').DefaultOptionType[]
            >;
            fieldNames: import('vue').PropType<
              import('ant-design-vue/lib/vc-select/Select').FieldNames
            >;
            dropdownStyle: {
              type: import('vue').PropType<import('vue').CSSProperties>;
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
            showSearch: {
              type: BooleanConstructor;
              default: any;
            };
            searchValue: StringConstructor;
            onInputKeyDown: import('vue').PropType<(e: KeyboardEvent) => void>;
            removeIcon: import('vue-types').VueTypeValidableDef<any>;
            maxTagCount: {
              type: import('vue').PropType<number | 'responsive'>;
            };
            maxTagTextLength: NumberConstructor;
            maxTagPlaceholder: import('vue-types').VueTypeValidableDef<any>;
            tokenSeparators: {
              type: import('vue').PropType<string[]>;
            };
            tagRender: {
              type: import('vue').PropType<
                (props: import('ant-design-vue/lib/vc-select/BaseSelect').CustomTagProps) => any
              >;
            };
            optionLabelRender: {
              type: import('vue').PropType<(option: Record<string, any>) => any>;
            };
            onSearch: import('vue').PropType<(value: string) => void>;
            onClear: import('vue').PropType<() => void>;
            defaultOpen: {
              type: BooleanConstructor;
              default: any;
            };
            onDropdownVisibleChange: {
              type: import('vue').PropType<(open: boolean) => void>;
            };
            allowClear: {
              type: BooleanConstructor;
              default: any;
            };
            showArrow: {
              type: BooleanConstructor;
              default: any;
            };
            clearIcon: import('vue-types').VueTypeValidableDef<any>;
            onPopupScroll: import('vue').PropType<(e: UIEvent) => void>;
            menuItemSelectedIcon: import('vue-types').VueTypeValidableDef<any>;
            listHeight: NumberConstructor;
            listItemHeight: NumberConstructor;
            inputValue: StringConstructor;
            autoClearSearchValue: {
              type: BooleanConstructor;
              default: any;
            };
            onDeselect: import('vue').PropType<
              import('ant-design-vue/lib/vc-select/Select').SelectHandler<
                (string | number) | import('ant-design-vue/lib/select').LabeledValue,
                import('ant-design-vue/lib/select').DefaultOptionType
              >
            >;
            filterOption: {
              type: import('vue').PropType<
                | boolean
                | import('ant-design-vue/lib/vc-select/Select').FilterFunc<
                    import('ant-design-vue/lib/select').DefaultOptionType
                  >
              >;
              default: any;
            };
            filterSort: import('vue').PropType<
              (
                optionA: import('ant-design-vue/lib/select').DefaultOptionType,
                optionB: import('ant-design-vue/lib/select').DefaultOptionType,
              ) => number
            >;
            optionFilterProp: StringConstructor;
            optionLabelProp: StringConstructor;
            defaultActiveFirstOption: {
              type: BooleanConstructor;
              default: any;
            };
            labelInValue: {
              type: BooleanConstructor;
              default: any;
            };
          }>
        > &
          import('vue').VNodeProps &
          import('vue').AllowedComponentProps &
          import('vue').ComponentCustomProps,
        | 'bordered'
        | 'choiceTransitionName'
        | 'open'
        | 'disabled'
        | 'virtual'
        | 'dropdownMatchSelectWidth'
        | 'autofocus'
        | 'loading'
        | 'showSearch'
        | 'defaultOpen'
        | 'allowClear'
        | 'showArrow'
        | 'autoClearSearchValue'
        | 'filterOption'
        | 'defaultActiveFirstOption'
        | 'labelInValue'
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
          value: {
            type: import('vue').PropType<import('ant-design-vue/lib/select').SelectValue>;
          };
          defaultValue: {
            type: import('vue').PropType<import('ant-design-vue/lib/select').SelectValue>;
          };
          notFoundContent: import('vue-types').VueTypeValidableDef<any>;
          suffixIcon: import('vue-types').VueTypeValidableDef<any>;
          itemIcon: import('vue-types').VueTypeValidableDef<any>;
          size: import('vue').PropType<import('ant-design-vue/lib/button').ButtonSize>;
          mode: import('vue').PropType<'multiple' | 'tags' | 'SECRET_COMBOBOX_MODE_DO_NOT_USE'>;
          bordered: {
            type: BooleanConstructor;
            default: boolean;
          };
          transitionName: StringConstructor;
          choiceTransitionName: {
            type: StringConstructor;
            default: string;
          };
          'onUpdate:value': import('vue').PropType<
            (val: import('ant-design-vue/lib/select').SelectValue) => void
          >;
          onFocus: {
            type: import('vue').PropType<(e: FocusEvent) => void>;
          };
          onBlur: {
            type: import('vue').PropType<(e: FocusEvent) => void>;
          };
          onChange: import('vue').PropType<
            (
              value: import('ant-design-vue/lib/select').SelectValue,
              option:
                | import('ant-design-vue/lib/select').DefaultOptionType
                | import('ant-design-vue/lib/select').DefaultOptionType[],
            ) => void
          >;
          onKeydown: import('vue').PropType<(e: KeyboardEvent) => void>;
          onKeyup: import('vue').PropType<(e: KeyboardEvent) => void>;
          onClick: import('vue').PropType<(e: MouseEvent) => void>;
          onMousedown: import('vue').PropType<(e: MouseEvent) => void>;
          onMouseenter: import('vue').PropType<(e: MouseEvent) => void>;
          onMouseleave: import('vue').PropType<(e: MouseEvent) => void>;
          onSelect: import('vue').PropType<
            import('ant-design-vue/lib/vc-select/Select').SelectHandler<
              (string | number) | import('ant-design-vue/lib/select').LabeledValue,
              import('ant-design-vue/lib/select').DefaultOptionType
            >
          >;
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
          tabindex: NumberConstructor;
          getPopupContainer: {
            type: import('vue').PropType<
              import('ant-design-vue/lib/vc-select/BaseSelect').RenderDOMFunc
            >;
          };
          virtual: {
            type: BooleanConstructor;
            default: any;
          };
          dropdownMatchSelectWidth: {
            type: import('vue').PropType<number | boolean>;
            default: any;
          };
          children: import('vue').PropType<import('ant-design-vue/lib/_util/type').VueNode[]>;
          showAction: {
            type: import('vue').PropType<('click' | 'focus')[]>;
          };
          id: StringConstructor;
          placement: {
            type: import('vue').PropType<
              import('ant-design-vue/lib/vc-select/BaseSelect').Placement
            >;
          };
          autofocus: BooleanConstructor;
          options: import('vue').PropType<import('ant-design-vue/lib/select').DefaultOptionType[]>;
          fieldNames: import('vue').PropType<
            import('ant-design-vue/lib/vc-select/Select').FieldNames
          >;
          dropdownStyle: {
            type: import('vue').PropType<import('vue').CSSProperties>;
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
          showSearch: {
            type: BooleanConstructor;
            default: any;
          };
          searchValue: StringConstructor;
          onInputKeyDown: import('vue').PropType<(e: KeyboardEvent) => void>;
          removeIcon: import('vue-types').VueTypeValidableDef<any>;
          maxTagCount: {
            type: import('vue').PropType<number | 'responsive'>;
          };
          maxTagTextLength: NumberConstructor;
          maxTagPlaceholder: import('vue-types').VueTypeValidableDef<any>;
          tokenSeparators: {
            type: import('vue').PropType<string[]>;
          };
          tagRender: {
            type: import('vue').PropType<
              (props: import('ant-design-vue/lib/vc-select/BaseSelect').CustomTagProps) => any
            >;
          };
          optionLabelRender: {
            type: import('vue').PropType<(option: Record<string, any>) => any>;
          };
          onSearch: import('vue').PropType<(value: string) => void>;
          onClear: import('vue').PropType<() => void>;
          defaultOpen: {
            type: BooleanConstructor;
            default: any;
          };
          onDropdownVisibleChange: {
            type: import('vue').PropType<(open: boolean) => void>;
          };
          allowClear: {
            type: BooleanConstructor;
            default: any;
          };
          showArrow: {
            type: BooleanConstructor;
            default: any;
          };
          clearIcon: import('vue-types').VueTypeValidableDef<any>;
          onPopupScroll: import('vue').PropType<(e: UIEvent) => void>;
          menuItemSelectedIcon: import('vue-types').VueTypeValidableDef<any>;
          listHeight: NumberConstructor;
          listItemHeight: NumberConstructor;
          inputValue: StringConstructor;
          autoClearSearchValue: {
            type: BooleanConstructor;
            default: any;
          };
          onDeselect: import('vue').PropType<
            import('ant-design-vue/lib/vc-select/Select').SelectHandler<
              (string | number) | import('ant-design-vue/lib/select').LabeledValue,
              import('ant-design-vue/lib/select').DefaultOptionType
            >
          >;
          filterOption: {
            type: import('vue').PropType<
              | boolean
              | import('ant-design-vue/lib/vc-select/Select').FilterFunc<
                  import('ant-design-vue/lib/select').DefaultOptionType
                >
            >;
            default: any;
          };
          filterSort: import('vue').PropType<
            (
              optionA: import('ant-design-vue/lib/select').DefaultOptionType,
              optionB: import('ant-design-vue/lib/select').DefaultOptionType,
            ) => number
          >;
          optionFilterProp: StringConstructor;
          optionLabelProp: StringConstructor;
          defaultActiveFirstOption: {
            type: BooleanConstructor;
            default: any;
          };
          labelInValue: {
            type: BooleanConstructor;
            default: any;
          };
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
        virtual: boolean;
        dropdownMatchSelectWidth: number | boolean;
        autofocus: boolean;
        loading: boolean;
        showSearch: boolean;
        choiceTransitionName: string;
        defaultOpen: boolean;
        allowClear: boolean;
        showArrow: boolean;
        autoClearSearchValue: boolean;
        filterOption:
          | boolean
          | import('ant-design-vue/lib/vc-select/Select').FilterFunc<
              import('ant-design-vue/lib/select').DefaultOptionType
            >;
        defaultActiveFirstOption: boolean;
        labelInValue: boolean;
        bordered: boolean;
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
      value: {
        type: import('vue').PropType<import('ant-design-vue/lib/select').SelectValue>;
      };
      defaultValue: {
        type: import('vue').PropType<import('ant-design-vue/lib/select').SelectValue>;
      };
      notFoundContent: import('vue-types').VueTypeValidableDef<any>;
      suffixIcon: import('vue-types').VueTypeValidableDef<any>;
      itemIcon: import('vue-types').VueTypeValidableDef<any>;
      size: import('vue').PropType<import('ant-design-vue/lib/button').ButtonSize>;
      mode: import('vue').PropType<'multiple' | 'tags' | 'SECRET_COMBOBOX_MODE_DO_NOT_USE'>;
      bordered: {
        type: BooleanConstructor;
        default: boolean;
      };
      transitionName: StringConstructor;
      choiceTransitionName: {
        type: StringConstructor;
        default: string;
      };
      'onUpdate:value': import('vue').PropType<
        (val: import('ant-design-vue/lib/select').SelectValue) => void
      >;
      onFocus: {
        type: import('vue').PropType<(e: FocusEvent) => void>;
      };
      onBlur: {
        type: import('vue').PropType<(e: FocusEvent) => void>;
      };
      onChange: import('vue').PropType<
        (
          value: import('ant-design-vue/lib/select').SelectValue,
          option:
            | import('ant-design-vue/lib/select').DefaultOptionType
            | import('ant-design-vue/lib/select').DefaultOptionType[],
        ) => void
      >;
      onKeydown: import('vue').PropType<(e: KeyboardEvent) => void>;
      onKeyup: import('vue').PropType<(e: KeyboardEvent) => void>;
      onClick: import('vue').PropType<(e: MouseEvent) => void>;
      onMousedown: import('vue').PropType<(e: MouseEvent) => void>;
      onMouseenter: import('vue').PropType<(e: MouseEvent) => void>;
      onMouseleave: import('vue').PropType<(e: MouseEvent) => void>;
      onSelect: import('vue').PropType<
        import('ant-design-vue/lib/vc-select/Select').SelectHandler<
          (string | number) | import('ant-design-vue/lib/select').LabeledValue,
          import('ant-design-vue/lib/select').DefaultOptionType
        >
      >;
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
      tabindex: NumberConstructor;
      getPopupContainer: {
        type: import('vue').PropType<
          import('ant-design-vue/lib/vc-select/BaseSelect').RenderDOMFunc
        >;
      };
      virtual: {
        type: BooleanConstructor;
        default: any;
      };
      dropdownMatchSelectWidth: {
        type: import('vue').PropType<number | boolean>;
        default: any;
      };
      children: import('vue').PropType<import('ant-design-vue/lib/_util/type').VueNode[]>;
      showAction: {
        type: import('vue').PropType<('click' | 'focus')[]>;
      };
      id: StringConstructor;
      placement: {
        type: import('vue').PropType<import('ant-design-vue/lib/vc-select/BaseSelect').Placement>;
      };
      autofocus: BooleanConstructor;
      options: import('vue').PropType<import('ant-design-vue/lib/select').DefaultOptionType[]>;
      fieldNames: import('vue').PropType<import('ant-design-vue/lib/vc-select/Select').FieldNames>;
      dropdownStyle: {
        type: import('vue').PropType<import('vue').CSSProperties>;
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
      showSearch: {
        type: BooleanConstructor;
        default: any;
      };
      searchValue: StringConstructor;
      onInputKeyDown: import('vue').PropType<(e: KeyboardEvent) => void>;
      removeIcon: import('vue-types').VueTypeValidableDef<any>;
      maxTagCount: {
        type: import('vue').PropType<number | 'responsive'>;
      };
      maxTagTextLength: NumberConstructor;
      maxTagPlaceholder: import('vue-types').VueTypeValidableDef<any>;
      tokenSeparators: {
        type: import('vue').PropType<string[]>;
      };
      tagRender: {
        type: import('vue').PropType<
          (props: import('ant-design-vue/lib/vc-select/BaseSelect').CustomTagProps) => any
        >;
      };
      optionLabelRender: {
        type: import('vue').PropType<(option: Record<string, any>) => any>;
      };
      onSearch: import('vue').PropType<(value: string) => void>;
      onClear: import('vue').PropType<() => void>;
      defaultOpen: {
        type: BooleanConstructor;
        default: any;
      };
      onDropdownVisibleChange: {
        type: import('vue').PropType<(open: boolean) => void>;
      };
      allowClear: {
        type: BooleanConstructor;
        default: any;
      };
      showArrow: {
        type: BooleanConstructor;
        default: any;
      };
      clearIcon: import('vue-types').VueTypeValidableDef<any>;
      onPopupScroll: import('vue').PropType<(e: UIEvent) => void>;
      menuItemSelectedIcon: import('vue-types').VueTypeValidableDef<any>;
      listHeight: NumberConstructor;
      listItemHeight: NumberConstructor;
      inputValue: StringConstructor;
      autoClearSearchValue: {
        type: BooleanConstructor;
        default: any;
      };
      onDeselect: import('vue').PropType<
        import('ant-design-vue/lib/vc-select/Select').SelectHandler<
          (string | number) | import('ant-design-vue/lib/select').LabeledValue,
          import('ant-design-vue/lib/select').DefaultOptionType
        >
      >;
      filterOption: {
        type: import('vue').PropType<
          | boolean
          | import('ant-design-vue/lib/vc-select/Select').FilterFunc<
              import('ant-design-vue/lib/select').DefaultOptionType
            >
        >;
        default: any;
      };
      filterSort: import('vue').PropType<
        (
          optionA: import('ant-design-vue/lib/select').DefaultOptionType,
          optionB: import('ant-design-vue/lib/select').DefaultOptionType,
        ) => number
      >;
      optionFilterProp: StringConstructor;
      optionLabelProp: StringConstructor;
      defaultActiveFirstOption: {
        type: BooleanConstructor;
        default: any;
      };
      labelInValue: {
        type: BooleanConstructor;
        default: any;
      };
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
      value: {
        type: import('vue').PropType<import('ant-design-vue/lib/select').SelectValue>;
      };
      defaultValue: {
        type: import('vue').PropType<import('ant-design-vue/lib/select').SelectValue>;
      };
      notFoundContent: import('vue-types').VueTypeValidableDef<any>;
      suffixIcon: import('vue-types').VueTypeValidableDef<any>;
      itemIcon: import('vue-types').VueTypeValidableDef<any>;
      size: import('vue').PropType<import('ant-design-vue/lib/button').ButtonSize>;
      mode: import('vue').PropType<'multiple' | 'tags' | 'SECRET_COMBOBOX_MODE_DO_NOT_USE'>;
      bordered: {
        type: BooleanConstructor;
        default: boolean;
      };
      transitionName: StringConstructor;
      choiceTransitionName: {
        type: StringConstructor;
        default: string;
      };
      'onUpdate:value': import('vue').PropType<
        (val: import('ant-design-vue/lib/select').SelectValue) => void
      >;
      onFocus: {
        type: import('vue').PropType<(e: FocusEvent) => void>;
      };
      onBlur: {
        type: import('vue').PropType<(e: FocusEvent) => void>;
      };
      onChange: import('vue').PropType<
        (
          value: import('ant-design-vue/lib/select').SelectValue,
          option:
            | import('ant-design-vue/lib/select').DefaultOptionType
            | import('ant-design-vue/lib/select').DefaultOptionType[],
        ) => void
      >;
      onKeydown: import('vue').PropType<(e: KeyboardEvent) => void>;
      onKeyup: import('vue').PropType<(e: KeyboardEvent) => void>;
      onClick: import('vue').PropType<(e: MouseEvent) => void>;
      onMousedown: import('vue').PropType<(e: MouseEvent) => void>;
      onMouseenter: import('vue').PropType<(e: MouseEvent) => void>;
      onMouseleave: import('vue').PropType<(e: MouseEvent) => void>;
      onSelect: import('vue').PropType<
        import('ant-design-vue/lib/vc-select/Select').SelectHandler<
          (string | number) | import('ant-design-vue/lib/select').LabeledValue,
          import('ant-design-vue/lib/select').DefaultOptionType
        >
      >;
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
      tabindex: NumberConstructor;
      getPopupContainer: {
        type: import('vue').PropType<
          import('ant-design-vue/lib/vc-select/BaseSelect').RenderDOMFunc
        >;
      };
      virtual: {
        type: BooleanConstructor;
        default: any;
      };
      dropdownMatchSelectWidth: {
        type: import('vue').PropType<number | boolean>;
        default: any;
      };
      children: import('vue').PropType<import('ant-design-vue/lib/_util/type').VueNode[]>;
      showAction: {
        type: import('vue').PropType<('click' | 'focus')[]>;
      };
      id: StringConstructor;
      placement: {
        type: import('vue').PropType<import('ant-design-vue/lib/vc-select/BaseSelect').Placement>;
      };
      autofocus: BooleanConstructor;
      options: import('vue').PropType<import('ant-design-vue/lib/select').DefaultOptionType[]>;
      fieldNames: import('vue').PropType<import('ant-design-vue/lib/vc-select/Select').FieldNames>;
      dropdownStyle: {
        type: import('vue').PropType<import('vue').CSSProperties>;
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
      showSearch: {
        type: BooleanConstructor;
        default: any;
      };
      searchValue: StringConstructor;
      onInputKeyDown: import('vue').PropType<(e: KeyboardEvent) => void>;
      removeIcon: import('vue-types').VueTypeValidableDef<any>;
      maxTagCount: {
        type: import('vue').PropType<number | 'responsive'>;
      };
      maxTagTextLength: NumberConstructor;
      maxTagPlaceholder: import('vue-types').VueTypeValidableDef<any>;
      tokenSeparators: {
        type: import('vue').PropType<string[]>;
      };
      tagRender: {
        type: import('vue').PropType<
          (props: import('ant-design-vue/lib/vc-select/BaseSelect').CustomTagProps) => any
        >;
      };
      optionLabelRender: {
        type: import('vue').PropType<(option: Record<string, any>) => any>;
      };
      onSearch: import('vue').PropType<(value: string) => void>;
      onClear: import('vue').PropType<() => void>;
      defaultOpen: {
        type: BooleanConstructor;
        default: any;
      };
      onDropdownVisibleChange: {
        type: import('vue').PropType<(open: boolean) => void>;
      };
      allowClear: {
        type: BooleanConstructor;
        default: any;
      };
      showArrow: {
        type: BooleanConstructor;
        default: any;
      };
      clearIcon: import('vue-types').VueTypeValidableDef<any>;
      onPopupScroll: import('vue').PropType<(e: UIEvent) => void>;
      menuItemSelectedIcon: import('vue-types').VueTypeValidableDef<any>;
      listHeight: NumberConstructor;
      listItemHeight: NumberConstructor;
      inputValue: StringConstructor;
      autoClearSearchValue: {
        type: BooleanConstructor;
        default: any;
      };
      onDeselect: import('vue').PropType<
        import('ant-design-vue/lib/vc-select/Select').SelectHandler<
          (string | number) | import('ant-design-vue/lib/select').LabeledValue,
          import('ant-design-vue/lib/select').DefaultOptionType
        >
      >;
      filterOption: {
        type: import('vue').PropType<
          | boolean
          | import('ant-design-vue/lib/vc-select/Select').FilterFunc<
              import('ant-design-vue/lib/select').DefaultOptionType
            >
        >;
        default: any;
      };
      filterSort: import('vue').PropType<
        (
          optionA: import('ant-design-vue/lib/select').DefaultOptionType,
          optionB: import('ant-design-vue/lib/select').DefaultOptionType,
        ) => number
      >;
      optionFilterProp: StringConstructor;
      optionLabelProp: StringConstructor;
      defaultActiveFirstOption: {
        type: BooleanConstructor;
        default: any;
      };
      labelInValue: {
        type: BooleanConstructor;
        default: any;
      };
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
    virtual: boolean;
    dropdownMatchSelectWidth: number | boolean;
    autofocus: boolean;
    loading: boolean;
    showSearch: boolean;
    choiceTransitionName: string;
    defaultOpen: boolean;
    allowClear: boolean;
    showArrow: boolean;
    autoClearSearchValue: boolean;
    filterOption:
      | boolean
      | import('ant-design-vue/lib/vc-select/Select').FilterFunc<
          import('ant-design-vue/lib/select').DefaultOptionType
        >;
    defaultActiveFirstOption: boolean;
    labelInValue: boolean;
    bordered: boolean;
  }
> &
  import('vue').VNodeProps &
  import('vue').AllowedComponentProps &
  import('vue').ComponentCustomProps &
  import('@vue/runtime-core').Plugin & {
    readonly Option: import('ant-design-vue/lib/vc-select/Option').OptionFC;
    readonly OptGroup: import('ant-design-vue/lib/vc-select/OptGroup').OptionGroupFC;
    readonly SECRET_COMBOBOX_MODE_DO_NOT_USE: 'SECRET_COMBOBOX_MODE_DO_NOT_USE';
  };
export default Select;
