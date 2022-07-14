export declare const ArrayTabs: import('vue').DefineComponent<
  Partial<
    import('vue').ExtractPropTypes<{
      prefixCls: {
        type: StringConstructor;
      };
      id: {
        type: StringConstructor;
      };
      activeKey: {
        type: (StringConstructor | NumberConstructor)[];
      };
      defaultActiveKey: {
        type: (StringConstructor | NumberConstructor)[];
      };
      direction: {
        type: import('vue').PropType<'rtl' | 'ltr'>;
      };
      animated: {
        type: import('vue').PropType<
          boolean | import('ant-design-vue/lib/tabs/src/interface').AnimatedConfig
        >;
      };
      renderTabBar: {
        type: import('vue').PropType<import('ant-design-vue/lib/tabs/src/interface').RenderTabBar>;
      };
      tabBarGutter: {
        type: NumberConstructor;
      };
      tabBarStyle: {
        type: import('vue').PropType<import('vue').CSSProperties>;
      };
      tabPosition: {
        type: import('vue').PropType<import('ant-design-vue/lib/tabs/src/interface').TabPosition>;
      };
      destroyInactiveTabPane: {
        type: BooleanConstructor;
      };
      hideAdd: BooleanConstructor;
      type: {
        type: import('vue').PropType<import('ant-design-vue/lib/tabs/src/Tabs').TabsType>;
      };
      size: {
        type: import('vue').PropType<import('ant-design-vue/lib/button').ButtonSize>;
      };
      centered: BooleanConstructor;
      onEdit: {
        type: import('vue').PropType<
          (
            e: KeyboardEvent | MouseEvent | import('ant-design-vue/lib/_util/type').Key,
            action: 'add' | 'remove',
          ) => void
        >;
      };
      onChange: {
        type: import('vue').PropType<
          (activeKey: import('ant-design-vue/lib/_util/type').Key) => void
        >;
      };
      onTabClick: {
        type: import('vue').PropType<
          (
            activeKey: import('ant-design-vue/lib/_util/type').Key,
            e: KeyboardEvent | MouseEvent,
          ) => void
        >;
      };
      onTabScroll: {
        type: import('vue').PropType<import('ant-design-vue/lib/tabs/src/interface').OnTabScroll>;
      };
      'onUpdate:activeKey': {
        type: import('vue').PropType<
          (activeKey: import('ant-design-vue/lib/_util/type').Key) => void
        >;
      };
      locale: {
        type: import('vue').PropType<import('ant-design-vue/lib/tabs/src/interface').TabsLocale>;
        default: import('ant-design-vue/lib/tabs/src/interface').TabsLocale;
      };
      onPrevClick: import('vue').PropType<
        import('ant-design-vue/lib/_util/EventInterface').MouseEventHandler
      >;
      onNextClick: import('vue').PropType<
        import('ant-design-vue/lib/_util/EventInterface').MouseEventHandler
      >;
      tabBarExtraContent: import('vue-types').VueTypeValidableDef<any>;
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
        prefixCls: {
          type: StringConstructor;
        };
        id: {
          type: StringConstructor;
        };
        activeKey: {
          type: (StringConstructor | NumberConstructor)[];
        };
        defaultActiveKey: {
          type: (StringConstructor | NumberConstructor)[];
        };
        direction: {
          type: import('vue').PropType<'rtl' | 'ltr'>;
        };
        animated: {
          type: import('vue').PropType<
            boolean | import('ant-design-vue/lib/tabs/src/interface').AnimatedConfig
          >;
        };
        renderTabBar: {
          type: import('vue').PropType<
            import('ant-design-vue/lib/tabs/src/interface').RenderTabBar
          >;
        };
        tabBarGutter: {
          type: NumberConstructor;
        };
        tabBarStyle: {
          type: import('vue').PropType<import('vue').CSSProperties>;
        };
        tabPosition: {
          type: import('vue').PropType<import('ant-design-vue/lib/tabs/src/interface').TabPosition>;
        };
        destroyInactiveTabPane: {
          type: BooleanConstructor;
        };
        hideAdd: BooleanConstructor;
        type: {
          type: import('vue').PropType<import('ant-design-vue/lib/tabs/src/Tabs').TabsType>;
        };
        size: {
          type: import('vue').PropType<import('ant-design-vue/lib/button').ButtonSize>;
        };
        centered: BooleanConstructor;
        onEdit: {
          type: import('vue').PropType<
            (
              e: KeyboardEvent | MouseEvent | import('ant-design-vue/lib/_util/type').Key,
              action: 'add' | 'remove',
            ) => void
          >;
        };
        onChange: {
          type: import('vue').PropType<
            (activeKey: import('ant-design-vue/lib/_util/type').Key) => void
          >;
        };
        onTabClick: {
          type: import('vue').PropType<
            (
              activeKey: import('ant-design-vue/lib/_util/type').Key,
              e: KeyboardEvent | MouseEvent,
            ) => void
          >;
        };
        onTabScroll: {
          type: import('vue').PropType<import('ant-design-vue/lib/tabs/src/interface').OnTabScroll>;
        };
        'onUpdate:activeKey': {
          type: import('vue').PropType<
            (activeKey: import('ant-design-vue/lib/_util/type').Key) => void
          >;
        };
        locale: {
          type: import('vue').PropType<import('ant-design-vue/lib/tabs/src/interface').TabsLocale>;
          default: import('ant-design-vue/lib/tabs/src/interface').TabsLocale;
        };
        onPrevClick: import('vue').PropType<
          import('ant-design-vue/lib/_util/EventInterface').MouseEventHandler
        >;
        onNextClick: import('vue').PropType<
          import('ant-design-vue/lib/_util/EventInterface').MouseEventHandler
        >;
        tabBarExtraContent: import('vue-types').VueTypeValidableDef<any>;
      }>
    >
  >,
  {
    tabBarExtraContent?: any;
  }
>;
export default ArrayTabs;
