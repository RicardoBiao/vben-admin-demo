'use strict';
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
var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator['throw'](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
var __generator =
  (this && this.__generator) ||
  function (thisArg, body) {
    var _ = {
        label: 0,
        sent: function () {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: [],
      },
      f,
      y,
      t,
      g;
    return (
      (g = { next: verb(0), throw: verb(1), return: verb(2) }),
      typeof Symbol === 'function' &&
        (g[Symbol.iterator] = function () {
          return this;
        }),
      g
    );
    function verb(n) {
      return function (v) {
        return step([n, v]);
      };
    }
    function step(op) {
      if (f) throw new TypeError('Generator is already executing.');
      while (_)
        try {
          if (
            ((f = 1),
            y &&
              (t =
                op[0] & 2
                  ? y['return']
                  : op[0]
                  ? y['throw'] || ((t = y['return']) && t.call(y), 0)
                  : y.next) &&
              !(t = t.call(y, op[1])).done)
          )
            return t;
          if (((y = 0), t)) op = [op[0] & 2, t.value];
          switch (op[0]) {
            case 0:
            case 1:
              t = op;
              break;
            case 4:
              _.label++;
              return { value: op[1], done: false };
            case 5:
              _.label++;
              y = op[1];
              op = [0];
              continue;
            case 7:
              op = _.ops.pop();
              _.trys.pop();
              continue;
            default:
              if (
                !((t = _.trys), (t = t.length > 0 && t[t.length - 1])) &&
                (op[0] === 6 || op[0] === 2)
              ) {
                _ = 0;
                continue;
              }
              if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                _.label = op[1];
                break;
              }
              if (op[0] === 6 && _.label < t[1]) {
                _.label = t[1];
                t = op;
                break;
              }
              if (t && _.label < t[2]) {
                _.label = t[2];
                _.ops.push(op);
                break;
              }
              if (t[2]) _.ops.pop();
              _.trys.pop();
              continue;
          }
          op = body.call(thisArg, _);
        } catch (e) {
          op = [6, e];
          y = 0;
        } finally {
          f = t = 0;
        }
      if (op[0] & 5) throw op[1];
      return { value: op[0] ? op[1] : void 0, done: true };
    }
  };
var __rest =
  (this && this.__rest) ||
  function (s, e) {
    var t = {};
    for (var p in s)
      if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === 'function')
      for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
          t[p[i]] = s[p[i]];
      }
    return t;
  };
Object.defineProperty(exports, '__esModule', { value: true });
exports.FormDrawer = void 0;
var ant_design_vue_1 = require('ant-design-vue');
var vue_1 = require('@formily/vue');
var reactive_vue_1 = require('@formily/reactive-vue');
var shared_1 = require('@formily/shared');
var reactive_1 = require('@formily/reactive');
var core_1 = require('@formily/core');
var vue_2 = require('vue');
var configs_1 = require('../__builtins__/configs');
var shared_2 = require('../__builtins__/shared');
var PORTAL_TARGET_NAME = 'FormDrawerFooter';
var isDrawerTitle = function (props) {
  return (
    (0, shared_1.isNum)(props) ||
    (0, shared_1.isStr)(props) ||
    (0, shared_1.isBool)(props) ||
    (0, shared_2.isValidElement)(props)
  );
};
var getDrawerProps = function (props) {
  if (isDrawerTitle(props)) {
    return {
      title: props,
    };
  } else {
    return props;
  }
};
function FormDrawer(title, id, renderer) {
  var _this = this;
  if ((0, shared_1.isFn)(id) || (0, shared_2.isValidElement)(id)) {
    renderer = id;
    id = 'form-drawer';
  }
  var prefixCls = ''.concat(configs_1.stylePrefix, '-form-drawer');
  var env = {
    root: document.createElement('div'),
    form: null,
    promise: null,
    app: null,
    instance: null,
    openMiddlewares: [],
    confirmMiddlewares: [],
    cancelMiddlewares: [],
  };
  document.body.appendChild(env.root);
  var props = getDrawerProps(title);
  var drawerProps = __assign(__assign({}, props), {
    width: '40%',
    onClose: function () {
      var _a, _b, _c, _d;
      (_a = props.onClose) === null || _a === void 0 ? void 0 : _a.call(props);
      (_b = env.app) === null || _b === void 0 ? void 0 : _b.unmount();
      env.instance = null;
      env.app = null;
      (_d = (_c = env.root) === null || _c === void 0 ? void 0 : _c.parentNode) === null ||
      _d === void 0
        ? void 0
        : _d.removeChild(env.root);
      env.root = undefined;
    },
  });
  var DrawerContent = (0, reactive_vue_1.observer)(
    (0, vue_2.defineComponent)({
      setup: function () {
        return function () {
          return (0, vue_2.h)(
            vue_1.FragmentComponent,
            {},
            {
              default: function () {
                return (0, shared_2.resolveComponent)(renderer, { form: env.form });
              },
            },
          );
        };
      },
    }),
  );
  var renderDrawer = function (visible, resolve, reject) {
    if (visible === void 0) {
      visible = true;
    }
    if (!env.instance) {
      var ComponentConstructor = (0, vue_2.defineComponent)({
        props: ['drawerProps'],
        data: function () {
          return {
            visible: false,
          };
        },
        render: function () {
          var _this = this;
          var _a = this.drawerProps,
            onOk = _a.onOk,
            onClose = _a.onClose,
            title = _a.title,
            footer = _a.footer,
            _b = _a.okText,
            okText = _b === void 0 ? '确定' : _b,
            _c = _a.okType,
            okType = _c === void 0 ? 'primary' : _c,
            okButtonProps = _a.okButtonProps,
            cancelButtonProps = _a.cancelButtonProps,
            _d = _a.cancelText,
            cancelText = _d === void 0 ? '取消' : _d,
            drawerProps = __rest(_a, [
              'onOk',
              'onClose',
              'title',
              'footer',
              'okText',
              'okType',
              'okButtonProps',
              'cancelButtonProps',
              'cancelText',
            ]);
          return (0, vue_2.h)(
            ant_design_vue_1.Drawer,
            __assign(__assign({ class: prefixCls }, drawerProps), {
              visible: this.visible,
              'onUpdate:visible': function (val) {
                _this.visible = val;
              },
              onClose: function (e) {
                if ((onClose === null || onClose === void 0 ? void 0 : onClose(e)) !== false) {
                  reject === null || reject === void 0 ? void 0 : reject();
                }
              },
              onOk: function (e) {
                if ((onOk === null || onOk === void 0 ? void 0 : onOk(e)) !== false) {
                  resolve === null || resolve === void 0 ? void 0 : resolve();
                }
              },
            }),
            {
              default: function () {
                return (0, vue_2.h)(
                  vue_1.FormProvider,
                  {
                    form: env.form,
                  },
                  {
                    default: function () {
                      return [
                        (0, vue_2.h)(
                          'div',
                          {
                            class: [''.concat(prefixCls, '-body')],
                          },
                          (0, vue_2.h)(DrawerContent),
                        ),
                        (0, vue_2.h)(
                          'div',
                          {
                            class: [''.concat(prefixCls, '-footer')],
                          },
                          (0, vue_2.h)(
                            ant_design_vue_1.Space,
                            {},
                            {
                              default: function () {
                                var FooterProtalTarget = (0, vue_2.h)(
                                  'span',
                                  {
                                    id: PORTAL_TARGET_NAME,
                                  },
                                  {},
                                );
                                if (footer === null) {
                                  return [null, FooterProtalTarget];
                                } else if (footer) {
                                  return [
                                    (0, shared_2.resolveComponent)(footer),
                                    FooterProtalTarget,
                                  ];
                                }
                                return [
                                  (0, vue_2.h)(
                                    ant_design_vue_1.Button,
                                    __assign(__assign({}, cancelButtonProps), {
                                      onClick: function (e) {
                                        onClose === null || onClose === void 0
                                          ? void 0
                                          : onClose(e);
                                        reject();
                                      },
                                    }),
                                    {
                                      default: function () {
                                        return (0, shared_2.resolveComponent)(cancelText);
                                      },
                                    },
                                  ),
                                  (0, vue_2.h)(
                                    ant_design_vue_1.Button,
                                    __assign(__assign({}, okButtonProps), {
                                      type: okType,
                                      loading: env.form.submitting,
                                      onClick: function (e) {
                                        onOk === null || onOk === void 0 ? void 0 : onOk(e);
                                        resolve();
                                      },
                                    }),
                                    {
                                      default: function () {
                                        return (0, shared_2.resolveComponent)(okText);
                                      },
                                    },
                                  ),
                                  FooterProtalTarget,
                                ];
                              },
                            },
                          ),
                        ),
                      ];
                    },
                  },
                );
              },
              title: function () {
                return (0, vue_2.h)(
                  vue_1.FragmentComponent,
                  {},
                  {
                    default: function () {
                      return (0, shared_2.resolveComponent)(title);
                    },
                  },
                );
              },
            },
          );
        },
      });
      env.app = (0, vue_2.createApp)(ComponentConstructor, {
        drawerProps: drawerProps,
        parent: (0, shared_2.getProtalContext)(id),
      });
      env.instance = env.app.mount(env.root);
    }
    env.instance.visible = visible;
  };
  var formDrawer = {
    forOpen: function (middleware) {
      if ((0, shared_1.isFn)(middleware)) {
        env.openMiddlewares.push(middleware);
      }
      return formDrawer;
    },
    forConfirm: function (middleware) {
      if ((0, shared_1.isFn)(middleware)) {
        env.confirmMiddlewares.push(middleware);
      }
      return formDrawer;
    },
    forCancel: function (middleware) {
      if ((0, shared_1.isFn)(middleware)) {
        env.cancelMiddlewares.push(middleware);
      }
      return formDrawer;
    },
    open: function (props) {
      return __awaiter(_this, void 0, void 0, function () {
        var _this = this;
        return __generator(this, function (_a) {
          if (env.promise) return [2 /*return*/, env.promise];
          env.promise = new Promise(function (resolve, reject) {
            return __awaiter(_this, void 0, void 0, function () {
              var e_1;
              var _this = this;
              return __generator(this, function (_a) {
                switch (_a.label) {
                  case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [
                      4 /*yield*/,
                      (0, shared_2.loading)(drawerProps.loadingText, function () {
                        return (0, shared_1.applyMiddleware)(props, env.openMiddlewares);
                      }),
                    ];
                  case 1:
                    props = _a.sent();
                    env.form = env.form || (0, core_1.createForm)(props);
                    return [3 /*break*/, 3];
                  case 2:
                    e_1 = _a.sent();
                    reject(e_1);
                    return [3 /*break*/, 3];
                  case 3:
                    renderDrawer(
                      true,
                      function () {
                        env.form
                          .submit(function () {
                            return __awaiter(_this, void 0, void 0, function () {
                              return __generator(this, function (_a) {
                                switch (_a.label) {
                                  case 0:
                                    return [
                                      4 /*yield*/,
                                      (0, shared_1.applyMiddleware)(
                                        env.form,
                                        env.confirmMiddlewares,
                                      ),
                                    ];
                                  case 1:
                                    _a.sent();
                                    resolve((0, reactive_1.toJS)(env.form.values));
                                    formDrawer.close();
                                    return [2 /*return*/];
                                }
                              });
                            });
                          })
                          .catch(reject);
                      },
                      function () {
                        return __awaiter(_this, void 0, void 0, function () {
                          return __generator(this, function (_a) {
                            formDrawer.close();
                            return [2 /*return*/];
                          });
                        });
                      },
                    );
                    return [2 /*return*/];
                }
              });
            });
          });
          return [2 /*return*/, env.promise];
        });
      });
    },
    close: function () {
      if (!env.root) return;
      renderDrawer(false);
    },
  };
  return formDrawer;
}
exports.FormDrawer = FormDrawer;
var DrawerFooter = (0, vue_2.defineComponent)({
  name: 'DrawerFooter',
  setup: function (props, _a) {
    var slots = _a.slots;
    return function () {
      if (document.querySelector('#'.concat(PORTAL_TARGET_NAME))) {
        return (0, vue_2.h)(
          vue_2.Teleport,
          {
            to: '#'.concat(PORTAL_TARGET_NAME),
          },
          slots,
        );
      } else {
        return null;
      }
    };
  },
});
FormDrawer.Footer = DrawerFooter;
FormDrawer.Portal = (0, shared_2.createPortalProvider)('form-drawer');
exports.default = FormDrawer;
//# sourceMappingURL=index.js.map
