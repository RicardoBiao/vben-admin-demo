var __assign =
  (this && this.__assign) ||
  function () {
    __assign =
      Object.assign ||
      function (t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
      };
    return __assign.apply(this, arguments);
  };
import {
  ref,
  defineComponent,
  // onMounted,
  onBeforeUnmount,
  watch,
  provide,
  h,
} from 'vue';
import { isVoidField } from '@formily/core';
import { connect, mapProps } from '@formily/vue';
import { useFormLayout, FormLayoutShallowContext } from '../form-layout';
import { composeExport, resolveComponent } from '../__builtins__/shared';
import { stylePrefix } from '../__builtins__/configs';
import { Tooltip, Popover } from 'ant-design-vue';
import ResizeObserver from 'resize-observer-polyfill';
import { CloseCircleOutlined, CheckCircleOutlined, WarningOutlined } from '@ant-design/icons-vue';
var useOverflow = function (containerRef) {
  var overflow = ref(false);
  var resizeObserver;
  var cleanup = function () {
    if (resizeObserver) {
      resizeObserver.unobserve(containerRef.value);
      resizeObserver = null;
    }
  };
  var observer = function () {
    var container = containerRef.value;
    var content = container.querySelector('label');
    var containerWidth = container.getBoundingClientRect().width;
    var contentWidth =
      content === null || content === void 0 ? void 0 : content.getBoundingClientRect().width;
    if (containerWidth !== 0) {
      if (contentWidth > containerWidth) {
        overflow.value = true;
      } else {
        overflow.value = false;
      }
    }
  };
  var stopWatch = watch(
    function () {
      return containerRef.value;
    },
    function (el) {
      cleanup();
      if (el) {
        resizeObserver = new ResizeObserver(observer);
        resizeObserver.observe(el);
      }
    },
    { immediate: true, flush: 'post' },
  );
  onBeforeUnmount(function () {
    cleanup();
    stopWatch();
  });
  return overflow;
};
var ICON_MAP = {
  error: function () {
    return h(CloseCircleOutlined);
  },
  success: function () {
    return h(CheckCircleOutlined);
  },
  warning: function () {
    return h(WarningOutlined);
  },
};
export var FormBaseItem = defineComponent({
  name: 'FormItem',
  props: {
    className: {},
    required: {},
    label: {},
    colon: {},
    layout: {},
    tooltip: {},
    labelStyle: {},
    labelAlign: {},
    labelWrap: {},
    labelWidth: {},
    wrapperWidth: {},
    labelCol: {},
    wrapperCol: {},
    wrapperAlign: {},
    wrapperWrap: {},
    wrapperStyle: {},
    fullness: {},
    addonBefore: {},
    addonAfter: {},
    size: {},
    extra: {},
    feedbackText: {},
    feedbackLayout: {},
    tooltipLayout: {},
    feedbackStatus: {},
    feedbackIcon: {},
    asterisk: {},
    gridSpan: {},
    bordered: { default: true },
    inset: { default: false },
  },
  setup: function (props, _a) {
    var slots = _a.slots;
    var active = ref(false);
    var deepLayoutRef = useFormLayout();
    var prefixCls = ''.concat(stylePrefix, '-form-item');
    var containerRef = ref(null);
    var overflow = useOverflow(containerRef);
    // onMounted(() => {
    //   containerRef.value = refs.labelContainer
    // })
    provide(FormLayoutShallowContext, ref(null));
    return function () {
      var _a, _b, _c, _d;
      var _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q;
      var gridStyles = {};
      var deepLayout = deepLayoutRef.value;
      var _r = props,
        label = _r.label,
        _s = _r.colon,
        colon =
          _s === void 0 ? ((_e = deepLayout.colon) !== null && _e !== void 0 ? _e : true) : _s,
        _t = _r.layout,
        layout =
          _t === void 0
            ? (_f = deepLayout.layout) !== null && _f !== void 0
              ? _f
              : 'horizontal'
            : _t,
        tooltip = _r.tooltip,
        _u = _r.labelStyle,
        labelStyle = _u === void 0 ? {} : _u,
        _v = _r.labelWrap,
        labelWrap =
          _v === void 0 ? ((_g = deepLayout.labelWrap) !== null && _g !== void 0 ? _g : false) : _v,
        _w = _r.labelWidth,
        labelWidth = _w === void 0 ? deepLayout.labelWidth : _w,
        _x = _r.wrapperWidth,
        wrapperWidth = _x === void 0 ? deepLayout.wrapperWidth : _x,
        _y = _r.labelCol,
        labelCol = _y === void 0 ? deepLayout.labelCol : _y,
        _z = _r.wrapperCol,
        wrapperCol = _z === void 0 ? deepLayout.wrapperCol : _z,
        _0 = _r.wrapperAlign,
        wrapperAlign =
          _0 === void 0
            ? (_h = deepLayout.wrapperAlign) !== null && _h !== void 0
              ? _h
              : 'left'
            : _0,
        _1 = _r.wrapperWrap,
        wrapperWrap = _1 === void 0 ? deepLayout.wrapperWrap : _1,
        _2 = _r.wrapperStyle,
        wrapperStyle = _2 === void 0 ? {} : _2,
        _3 = _r.fullness,
        fullness = _3 === void 0 ? deepLayout.fullness : _3,
        addonBefore = _r.addonBefore,
        addonAfter = _r.addonAfter,
        _4 = _r.size,
        size = _4 === void 0 ? deepLayout.size : _4,
        extra = _r.extra,
        feedbackText = _r.feedbackText,
        _5 = _r.feedbackLayout,
        feedbackLayout =
          _5 === void 0
            ? (_j = deepLayout.feedbackLayout) !== null && _j !== void 0
              ? _j
              : 'loose'
            : _5,
        _6 = _r.tooltipLayout,
        tooltipLayout =
          _6 === void 0
            ? (_k = deepLayout.tooltipLayout) !== null && _k !== void 0
              ? _k
              : 'icon'
            : _6,
        feedbackStatus = _r.feedbackStatus,
        feedbackIcon = _r.feedbackIcon,
        asterisk = _r.asterisk,
        _7 = _r.bordered,
        bordered = _7 === void 0 ? deepLayout.bordered : _7,
        _8 = _r.inset,
        inset = _8 === void 0 ? deepLayout.inset : _8;
      var labelAlign =
        deepLayout.layout === 'vertical'
          ? (_m =
              (_l = props.labelAlign) !== null && _l !== void 0 ? _l : deepLayout.labelAlign) !==
              null && _m !== void 0
            ? _m
            : 'left'
          : (_p =
              (_o = props.labelAlign) !== null && _o !== void 0 ? _o : deepLayout.labelAlign) !==
              null && _p !== void 0
          ? _p
          : 'right';
      // 固定宽度
      var enableCol = false;
      if (labelWidth || wrapperWidth) {
        if (labelWidth) {
          labelStyle.width = ''.concat(labelWidth, 'px');
          labelStyle.maxWidth = ''.concat(labelWidth, 'px');
        }
        if (wrapperWidth) {
          wrapperStyle.width = ''.concat(wrapperWidth, 'px');
          wrapperStyle.maxWidth = ''.concat(wrapperWidth, 'px');
        }
        // 栅格模式
      } else if (labelCol || wrapperCol) {
        enableCol = true;
      }
      var formatChildren =
        feedbackLayout === 'popover'
          ? h(
              Popover,
              {
                visible: !feedbackText,
                placement: 'top',
              },
              {
                reference: function () {
                  return h(
                    'div',
                    {},
                    {
                      default: function () {
                        var _a;
                        return (_a = slots.default) === null || _a === void 0
                          ? void 0
                          : _a.call(slots);
                      },
                    },
                  );
                },
                default: function () {
                  var _a;
                  return [
                    h(
                      'div',
                      {
                        class:
                          ((_a = {}),
                          (_a[''.concat(prefixCls, '-').concat(feedbackStatus, '-help')] =
                            !!feedbackStatus),
                          (_a[''.concat(prefixCls, '-help')] = true),
                          _a),
                      },
                      {
                        default: function () {
                          return [
                            feedbackStatus &&
                            ['error', 'success', 'warning'].includes(feedbackStatus)
                              ? ICON_MAP[feedbackStatus]()
                              : '',
                            resolveComponent(feedbackText),
                          ];
                        },
                      },
                    ),
                  ];
                },
              },
            )
          : (_q = slots.default) === null || _q === void 0
          ? void 0
          : _q.call(slots);
      var renderLabelText = function () {
        var labelChildren = h(
          'div',
          {
            class: ''.concat(prefixCls, '-label-content'),
            ref: 'containerRef',
          },
          {
            default: function () {
              return [
                asterisk &&
                  h(
                    'span',
                    { class: ''.concat(prefixCls, '-asterisk') },
                    {
                      default: function () {
                        return ['*'];
                      },
                    },
                  ),
                h(
                  'label',
                  {},
                  {
                    default: function () {
                      return [resolveComponent(label)];
                    },
                  },
                ),
              ];
            },
          },
        );
        var isTextTooltip = tooltip && tooltipLayout === 'text';
        if (isTextTooltip || overflow.value) {
          return h(
            Tooltip,
            {
              placement: 'top',
            },
            {
              default: function () {
                return [labelChildren];
              },
              content: function () {
                return h(
                  'div',
                  {},
                  {
                    default: function () {
                      return [
                        overflow.value && resolveComponent(label),
                        isTextTooltip && resolveComponent(tooltip),
                      ];
                    },
                  },
                );
              },
            },
          );
        } else {
          return labelChildren;
        }
      };
      var renderTooltipIcon = function () {
        if (tooltip && tooltipLayout === 'icon') {
          return h(
            'span',
            {
              class: ''.concat(prefixCls, '-label-tooltip'),
            },
            {
              default: function () {
                return [
                  h(
                    Tooltip,
                    {
                      placement: 'top',
                    },
                    {
                      default: function () {
                        return [h('i', { class: 'el-icon-info' }, {})];
                      },
                      content: function () {
                        return h(
                          'div',
                          {
                            class: ''.concat(prefixCls, '-label-tooltip-content'),
                          },
                          {
                            default: function () {
                              return [resolveComponent(tooltip)];
                            },
                          },
                        );
                      },
                    },
                  ),
                ];
              },
            },
          );
        }
      };
      var renderLabel =
        label &&
        h(
          'div',
          {
            class:
              ((_a = {}),
              (_a[''.concat(prefixCls, '-label')] = true),
              (_a[''.concat(prefixCls, '-label-tooltip')] =
                (tooltip && tooltipLayout === 'text') || overflow.value),
              (_a[''.concat(prefixCls, '-item-col-').concat(labelCol)] = enableCol && !!labelCol),
              _a),
            style: labelStyle,
          },
          {
            default: function () {
              return [
                // label content
                renderLabelText(),
                // label tooltip
                renderTooltipIcon(),
                // label colon
                label &&
                  h(
                    'span',
                    {
                      class: ''.concat(prefixCls, '-colon'),
                    },
                    {
                      default: function () {
                        return [colon ? ':' : ''];
                      },
                    },
                  ),
              ];
            },
          },
        );
      var renderFeedback =
        !!feedbackText &&
        feedbackLayout !== 'popover' &&
        feedbackLayout !== 'none' &&
        h(
          'div',
          {
            class:
              ((_b = {}),
              (_b[''.concat(prefixCls, '-').concat(feedbackStatus, '-help')] = !!feedbackStatus),
              (_b[''.concat(prefixCls, '-help')] = true),
              (_b[''.concat(prefixCls, '-help-enter')] = true),
              (_b[''.concat(prefixCls, '-help-enter-active')] = true),
              _b),
          },
          {
            default: function () {
              return [resolveComponent(feedbackText)];
            },
          },
        );
      var renderExtra =
        extra &&
        h(
          'div',
          { class: ''.concat(prefixCls, '-extra') },
          {
            default: function () {
              return [extra];
            },
          },
        );
      var renderContent = h(
        'div',
        {
          class:
            ((_c = {}),
            (_c[''.concat(prefixCls, '-control')] = true),
            (_c[''.concat(prefixCls, '-item-col-').concat(wrapperCol)] = enableCol && !!wrapperCol),
            _c),
        },
        {
          default: function () {
            return [
              h(
                'div',
                { class: ''.concat(prefixCls, '-control-content') },
                {
                  default: function () {
                    var _a;
                    return [
                      addonBefore &&
                        h(
                          'div',
                          { class: ''.concat(prefixCls, '-addon-before') },
                          {
                            default: function () {
                              return [resolveComponent(addonBefore)];
                            },
                          },
                        ),
                      h(
                        'div',
                        {
                          class:
                            ((_a = {}),
                            (_a[''.concat(prefixCls, '-control-content-component')] = true),
                            (_a[
                              ''.concat(prefixCls, '-control-content-component-has-feedback-icon')
                            ] = !!feedbackIcon),
                            _a),
                          style: wrapperStyle,
                        },
                        {
                          default: function () {
                            return [
                              formatChildren,
                              feedbackIcon &&
                                h(
                                  'div',
                                  { class: ''.concat(prefixCls, '-feedback-icon') },
                                  {
                                    default: function () {
                                      return [
                                        typeof feedbackIcon === 'string'
                                          ? h('i', { class: feedbackIcon }, {})
                                          : resolveComponent(feedbackIcon),
                                      ];
                                    },
                                  },
                                ),
                            ];
                          },
                        },
                      ),
                      addonAfter &&
                        h(
                          'div',
                          { class: ''.concat(prefixCls, '-addon-after') },
                          {
                            default: function () {
                              return [resolveComponent(addonAfter)];
                            },
                          },
                        ),
                    ];
                  },
                },
              ),
              renderFeedback,
              renderExtra,
            ];
          },
        },
      );
      return h(
        'div',
        {
          style: __assign({}, gridStyles),
          'data-grid-span': props.gridSpan,
          class:
            ((_d = {}),
            (_d[''.concat(prefixCls)] = true),
            (_d[''.concat(prefixCls, '-layout-').concat(layout)] = true),
            (_d[''.concat(prefixCls, '-').concat(feedbackStatus)] = !!feedbackStatus),
            (_d[''.concat(prefixCls, '-feedback-has-text')] = !!feedbackText),
            (_d[''.concat(prefixCls, '-size-').concat(size)] = !!size),
            (_d[''.concat(prefixCls, '-feedback-layout-').concat(feedbackLayout)] =
              !!feedbackLayout),
            (_d[''.concat(prefixCls, '-fullness')] = !!fullness || !!inset || !!feedbackIcon),
            (_d[''.concat(prefixCls, '-inset')] = !!inset),
            (_d[''.concat(prefixCls, '-active')] = active.value),
            (_d[''.concat(prefixCls, '-inset-active')] = !!inset && active.value),
            (_d[''.concat(prefixCls, '-label-align-').concat(labelAlign)] = true),
            (_d[''.concat(prefixCls, '-control-align-').concat(wrapperAlign)] = true),
            (_d[''.concat(prefixCls, '-label-wrap')] = !!labelWrap),
            (_d[''.concat(prefixCls, '-control-wrap')] = !!wrapperWrap),
            (_d[''.concat(prefixCls, '-bordered-none')] =
              bordered === false || !!inset || !!feedbackIcon),
            (_d[''.concat(props.className)] = !!props.className),
            _d),
          on: {
            '!focus': function () {
              if (feedbackIcon || inset) {
                active.value = true;
              }
            },
            '!blur': function () {
              if (feedbackIcon || inset) {
                active.value = false;
              }
            },
          },
        },
        {
          default: function () {
            return [renderLabel, renderContent];
          },
        },
      );
    };
  },
});
var Item = connect(
  FormBaseItem,
  mapProps(
    { validateStatus: true, title: 'label', required: true },
    function (props, field) {
      if (isVoidField(field)) return props;
      if (!field) return props;
      var takeMessage = function () {
        var split = function (messages) {
          return messages.reduce(function (buf, text, index) {
            if (!text) return buf;
            return index < messages.length - 1 ? buf.concat([text, ', ']) : buf.concat([text]);
          }, []);
        };
        if (field.validating) return;
        if (props.feedbackText) return props.feedbackText;
        if (field.selfErrors.length) return split(field.selfErrors);
        if (field.selfWarnings.length) return split(field.selfWarnings);
        if (field.selfSuccesses.length) return split(field.selfSuccesses);
      };
      var errorMessages = takeMessage();
      return {
        feedbackText: Array.isArray(errorMessages) ? errorMessages.join(', ') : errorMessages,
        extra: props.extra || field.description,
      };
    },
    function (props, field) {
      var _a;
      if (isVoidField(field)) return props;
      if (!field) return props;
      return {
        feedbackStatus:
          field.validateStatus === 'validating'
            ? 'pending'
            : (Array.isArray(field.decorator) &&
                ((_a = field.decorator[1]) === null || _a === void 0
                  ? void 0
                  : _a.feedbackStatus)) ||
              field.validateStatus,
      };
    },
    function (props, field) {
      if (isVoidField(field)) return props;
      if (!field) return props;
      var asterisk = false;
      if (field.required && field.pattern !== 'readPretty') {
        asterisk = true;
      }
      if ('asterisk' in props) {
        asterisk = props.asterisk;
      }
      return {
        asterisk: asterisk,
      };
    },
  ),
);
export var FormItem = composeExport(Item, {
  BaseItem: FormBaseItem,
});
export default FormItem;
//# sourceMappingURL=index.js.map
