import _regeneratorRuntime from "@babel/runtime/regenerator";
import _asyncToGenerator from "@babel/runtime/helpers/esm/asyncToGenerator";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _assertThisInitialized from "@babel/runtime/helpers/esm/assertThisInitialized";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _wrapNativeSuper from "@babel/runtime/helpers/esm/wrapNativeSuper";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

import Vue from 'vue';
/**
 * Source: https://www.digitalocean.com/community/tutorials/vuejs-global-event-bus
 */

var EventBus = new Vue();

var toast = function toast(params) {
  var id = Date.now() + Math.round(Math.random() * 1000);
  EventBus.$emit('toast:show', _objectSpread({
    id: id
  }, params));
};

var ToastPlugin = function ToastPlugin(VueConstructor) {
  VueConstructor.prototype.$toast = toast;
  VueConstructor.$toast = toast;
};

var HomeIcon = {
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('svg', {
      attrs: {
        "xmlns": "http://www.w3.org/2000/svg",
        "height": "24",
        "viewBox": "0 0 24 24",
        "width": "24"
      }
    }, [_c('path', {
      attrs: {
        "d": "M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"
      }
    }), _c('path', {
      attrs: {
        "d": "M0 0h24v24H0z",
        "fill": "none"
      }
    })]);
  }
};
var GroupIcon = {
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('svg', {
      attrs: {
        "xmlns": "http://www.w3.org/2000/svg",
        "height": "24",
        "viewBox": "0 0 24 24",
        "width": "24"
      }
    }, [_c('path', {
      attrs: {
        "d": "M0 0h24v24H0z",
        "fill": "none"
      }
    }), _c('path', {
      attrs: {
        "d": "M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"
      }
    })]);
  }
};
var ViewListIcon = {
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('svg', {
      attrs: {
        "xmlns": "http://www.w3.org/2000/svg",
        "height": "24",
        "viewBox": "0 0 24 24",
        "width": "24"
      }
    }, [_c('path', {
      attrs: {
        "d": "M4 14h4v-4H4v4zm0 5h4v-4H4v4zM4 9h4V5H4v4zm5 5h12v-4H9v4zm0 5h12v-4H9v4zM9 5v4h12V5H9z"
      }
    }), _c('path', {
      attrs: {
        "d": "M0 0h24v24H0z",
        "fill": "none"
      }
    })]);
  }
};
var ExpandLessIcon = {
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('svg', {
      attrs: {
        "xmlns": "http://www.w3.org/2000/svg",
        "height": "24",
        "viewBox": "0 0 24 24",
        "width": "24"
      }
    }, [_c('path', {
      attrs: {
        "d": "M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"
      }
    }), _c('path', {
      attrs: {
        "d": "M0 0h24v24H0z",
        "fill": "none"
      }
    })]);
  }
};
var ExpandMoreIcon = {
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('svg', {
      attrs: {
        "xmlns": "http://www.w3.org/2000/svg",
        "height": "24",
        "viewBox": "0 0 24 24",
        "width": "24"
      }
    }, [_c('path', {
      attrs: {
        "d": "M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"
      }
    }), _c('path', {
      attrs: {
        "d": "M0 0h24v24H0z",
        "fill": "none"
      }
    })]);
  }
};
var EditIcon = {
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('svg', {
      attrs: {
        "xmlns": "http://www.w3.org/2000/svg",
        "height": "24",
        "viewBox": "0 0 24 24",
        "width": "24"
      }
    }, [_c('path', {
      attrs: {
        "d": "M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04a.996.996 0 000-1.41l-2.34-2.34a.996.996 0 00-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"
      }
    }), _c('path', {
      attrs: {
        "d": "M0 0h24v24H0z",
        "fill": "none"
      }
    })]);
  }
};
var DeleteIcon = {
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('svg', {
      attrs: {
        "xmlns": "http://www.w3.org/2000/svg",
        "height": "24",
        "viewBox": "0 0 24 24",
        "width": "24"
      }
    }, [_c('path', {
      attrs: {
        "d": "M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"
      }
    }), _c('path', {
      attrs: {
        "d": "M0 0h24v24H0z",
        "fill": "none"
      }
    })]);
  }
};
var CloudUploadIcon = {
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('svg', {
      attrs: {
        "xmlns": "http://www.w3.org/2000/svg",
        "height": "24",
        "viewBox": "0 0 24 24",
        "width": "24"
      }
    }, [_c('path', {
      attrs: {
        "d": "M0 0h24v24H0z",
        "fill": "none"
      }
    }), _c('path', {
      attrs: {
        "d": "M19.35 10.04A7.49 7.49 0 0012 4C9.11 4 6.6 5.64 5.35 8.04A5.994 5.994 0 000 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z"
      }
    })]);
  }
};
var CloseIcon = {
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('svg', {
      attrs: {
        "xmlns": "http://www.w3.org/2000/svg",
        "height": "24",
        "viewBox": "0 0 24 24",
        "width": "24"
      }
    }, [_c('path', {
      attrs: {
        "d": "M0 0h24v24H0z",
        "fill": "none"
      }
    }), _c('path', {
      attrs: {
        "d": "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
      }
    })]);
  }
};
var MenuIcon = {
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('svg', {
      attrs: {
        "xmlns": "http://www.w3.org/2000/svg",
        "height": "24",
        "viewBox": "0 0 24 24",
        "width": "24"
      }
    }, [_c('path', {
      attrs: {
        "d": "M0 0h24v24H0z",
        "fill": "none"
      }
    }), _c('path', {
      attrs: {
        "d": "M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"
      }
    })]);
  }
};
var SettingsIcon = {
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('svg', {
      attrs: {
        "xmlns": "http://www.w3.org/2000/svg",
        "height": "24",
        "viewBox": "0 0 24 24",
        "width": "24"
      }
    }, [_c('path', {
      attrs: {
        "d": "M0 0h24v24H0V0z",
        "fill": "none"
      }
    }), _c('path', {
      attrs: {
        "d": "M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58a.49.49 0 00.12-.61l-1.92-3.32a.488.488 0 00-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54a.484.484 0 00-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58a.49.49 0 00-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"
      }
    })]);
  }
};
var AssignmentIcon = {
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('svg', {
      attrs: {
        "xmlns": "http://www.w3.org/2000/svg",
        "height": "24",
        "viewBox": "0 0 24 24",
        "width": "24"
      }
    }, [_c('path', {
      attrs: {
        "d": "M0 0h24v24H0z",
        "fill": "none"
      }
    }), _c('path', {
      attrs: {
        "d": "M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm2 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"
      }
    })]);
  }
};
var ChevronRightIcon = {
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('svg', {
      attrs: {
        "xmlns": "http://www.w3.org/2000/svg",
        "height": "24",
        "viewBox": "0 0 24 24",
        "width": "24"
      }
    }, [_c('path', {
      attrs: {
        "d": "M0 0h24v24H0z",
        "fill": "none"
      }
    }), _c('path', {
      attrs: {
        "d": "M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"
      }
    })]);
  }
};
var ICON_MAP = {
  home: HomeIcon,
  group: GroupIcon,
  viewList: ViewListIcon,
  expandLess: ExpandLessIcon,
  expandMore: ExpandMoreIcon,
  edit: EditIcon,
  delete: DeleteIcon,
  upload: CloudUploadIcon,
  clear: CloseIcon,
  close: CloseIcon,
  menu: MenuIcon,
  settings: SettingsIcon,
  assignment: AssignmentIcon,
  chevronRight: ChevronRightIcon
};
var script = Vue.extend({
  name: 'SvgIcon',
  props: {
    name: {
      type: String,
      validator: function validator(value) {
        return Object.keys(ICON_MAP).includes(value);
      },
      required: true
    }
  },
  data: function data() {
    return {
      iconComponent: ICON_MAP[this.name]
    };
  }
});

function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier
/* server only */
, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
  if (typeof shadowMode !== 'boolean') {
    createInjectorSSR = createInjector;
    createInjector = shadowMode;
    shadowMode = false;
  } // Vue.extend constructor export interop.


  var options = typeof script === 'function' ? script.options : script; // render functions

  if (template && template.render) {
    options.render = template.render;
    options.staticRenderFns = template.staticRenderFns;
    options._compiled = true; // functional template

    if (isFunctionalTemplate) {
      options.functional = true;
    }
  } // scopedId


  if (scopeId) {
    options._scopeId = scopeId;
  }

  var hook;

  if (moduleIdentifier) {
    // server build
    hook = function hook(context) {
      // 2.3 injection
      context = context || // cached call
      this.$vnode && this.$vnode.ssrContext || // stateful
      this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext; // functional
      // 2.2 with runInNewContext: true

      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__;
      } // inject component styles


      if (style) {
        style.call(this, createInjectorSSR(context));
      } // register component module identifier for async chunk inference


      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier);
      }
    }; // used by ssr in case component is cached and beforeCreate
    // never gets called


    options._ssrRegister = hook;
  } else if (style) {
    hook = shadowMode ? function (context) {
      style.call(this, createInjectorShadow(context, this.$root.$options.shadowRoot));
    } : function (context) {
      style.call(this, createInjector(context));
    };
  }

  if (hook) {
    if (options.functional) {
      // register for functional component in vue file
      var originalRender = options.render;

      options.render = function renderWithStyleInjection(h, context) {
        hook.call(context);
        return originalRender(h, context);
      };
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate;
      options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
    }
  }

  return script;
}

var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());

function createInjector(context) {
  return function (id, style) {
    return addStyle(id, style);
  };
}

var HEAD;
var styles = {};

function addStyle(id, css) {
  var group = isOldIE ? css.media || 'default' : id;
  var style = styles[group] || (styles[group] = {
    ids: new Set(),
    styles: []
  });

  if (!style.ids.has(id)) {
    style.ids.add(id);
    var code = css.source;

    if (css.map) {
      // https://developer.chrome.com/devtools/docs/javascript-debugging
      // this makes source maps inside style tags work properly in Chrome
      code += '\n/*# sourceURL=' + css.map.sources[0] + ' */'; // http://stackoverflow.com/a/26603875

      code += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(css.map)))) + ' */';
    }

    if (!style.element) {
      style.element = document.createElement('style');
      style.element.type = 'text/css';
      if (css.media) style.element.setAttribute('media', css.media);

      if (HEAD === undefined) {
        HEAD = document.head || document.getElementsByTagName('head')[0];
      }

      HEAD.appendChild(style.element);
    }

    if ('styleSheet' in style.element) {
      style.styles.push(code);
      style.element.styleSheet.cssText = style.styles.filter(Boolean).join('\n');
    } else {
      var index = style.ids.size - 1;
      var textNode = document.createTextNode(code);
      var nodes = style.element.childNodes;
      if (nodes[index]) style.element.removeChild(nodes[index]);
      if (nodes.length) style.element.insertBefore(textNode, nodes[index]);else style.element.appendChild(textNode);
    }
  }
}
/* script */


var __vue_script__ = script;
/* template */

var __vue_render__ = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c(_vm.iconComponent, {
    tag: "component"
  });
};

var __vue_staticRenderFns__ = [];
__vue_render__._withStripped = true;
/* style */

var __vue_inject_styles__ = function __vue_inject_styles__(inject) {
  if (!inject) return;
  inject("data-v-79ad797a_0", {
    source: "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",
    map: {
      "version": 3,
      "sources": [],
      "names": [],
      "mappings": "",
      "file": "SvgIcon.vue"
    },
    media: undefined
  });
};
/* scoped */


var __vue_scope_id__ = "data-v-79ad797a";
/* module identifier */

var __vue_module_identifier__ = undefined;
/* functional template */

var __vue_is_functional_template__ = false;
/* style inject SSR */

/* style inject shadow dom */

var __vue_component__ = /*#__PURE__*/normalizeComponent({
  render: __vue_render__,
  staticRenderFns: __vue_staticRenderFns__
}, __vue_inject_styles__, __vue_script__, __vue_scope_id__, __vue_is_functional_template__, __vue_module_identifier__, false, createInjector, undefined, undefined);

var script$1 = Vue.extend({
  components: {
    SvgIcon: __vue_component__
  },
  name: 'Toast',
  props: {
    toast: Object
  },
  data: function data() {
    return {
      timeoutId: null
    };
  },
  mounted: function mounted() {
    var _this = this;

    this.timeoutId = setTimeout(function () {
      return _this.hideToast();
    }, 3000);
  },
  methods: {
    hideToast: function hideToast() {
      if (this.timeoutId) {
        clearTimeout();
      }

      this.$emit('hide');
    }
  }
});
/* script */

var __vue_script__$1 = script$1;
/* template */

var __vue_render__$1 = function __vue_render__$1() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c("div", {
    staticClass: "toast-wrapper"
  }, [_c("div", {
    class: ["toast", _vm.toast.variant]
  }, [_c("header", {
    staticClass: "toast-header"
  }, [_c("strong", [_vm._v(_vm._s(_vm.toast.title))]), _vm._v(" "), _c("button", {
    staticClass: "close-button",
    on: {
      click: _vm.hideToast
    }
  }, [_c("svg-icon", {
    attrs: {
      name: "clear"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "toast-body"
  }, [_vm._v(_vm._s(_vm.toast.body))])])]);
};

var __vue_staticRenderFns__$1 = [];
__vue_render__$1._withStripped = true;
/* style */

var __vue_inject_styles__$1 = function __vue_inject_styles__$1(inject) {
  if (!inject) return;
  inject("data-v-f600ea6a_0", {
    source: ".toast-wrapper[data-v-f600ea6a] {\n  display: block;\n  position: relative;\n  max-width: 350px;\n  backface-visibility: hidden;\n  background-clip: padding-box;\n  z-index: 1;\n  border-radius: 0.25rem;\n}\n.toast-wrapper[data-v-f600ea6a]:not(:last-child) {\n  margin-bottom: 0.75rem;\n}\n.toast-wrapper .toast[data-v-f600ea6a] {\n  max-width: 350px;\n  overflow: hidden;\n  font-size: 0.875rem;\n  background-color: rgba(255, 255, 255, 0.85);\n  background-clip: padding-box;\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  box-shadow: 0 0.25rem 0.75rem rgba(0, 0, 0, 0.1);\n  backdrop-filter: blur(10px);\n  opacity: 1;\n  border-radius: 0.25rem;\n}\n.toast-wrapper .toast.primary[data-v-f600ea6a] {\n  background-color: rgba(230, 242, 255, 0.85);\n  border-color: rgba(184, 218, 255, 0.85);\n  color: #004085;\n}\n.toast-wrapper .toast.primary .toast-header[data-v-f600ea6a] {\n  color: #004085;\n  background-color: rgba(204, 229, 255, 0.85);\n  border-bottom-color: rgba(184, 218, 255, 0.85);\n}\n.toast-wrapper .toast.secondary[data-v-f600ea6a] {\n  background-color: rgba(239, 240, 241, 0.85);\n  border-color: rgba(214, 216, 219, 0.85);\n  color: #383d41;\n}\n.toast-wrapper .toast.secondary .toast-header[data-v-f600ea6a] {\n  color: #383d41;\n  background-color: rgba(226, 227, 229, 0.85);\n  border-bottom-color: rgba(214, 216, 219, 0.85);\n}\n.toast-wrapper .toast.success[data-v-f600ea6a] {\n  background-color: rgba(230, 245, 233, 0.85);\n  border-color: rgba(195, 230, 203, 0.85);\n  color: #155724;\n}\n.toast-wrapper .toast.success .toast-header[data-v-f600ea6a] {\n  color: #155724;\n  background-color: rgba(212, 237, 218, 0.85);\n  border-bottom-color: rgba(195, 230, 203, 0.85);\n}\n.toast-wrapper .toast.info[data-v-f600ea6a] {\n  background-color: rgba(229, 244, 247, 0.85);\n  border-color: rgba(190, 229, 235, 0.85);\n  color: #0c5460;\n}\n.toast-wrapper .toast.info .toast-header[data-v-f600ea6a] {\n  color: #0c5460;\n  background-color: rgba(209, 236, 241, 0.85);\n  border-bottom-color: rgba(190, 229, 235, 0.85);\n}\n.toast-wrapper .toast.warning[data-v-f600ea6a] {\n  background-color: rgba(255, 249, 231, 0.85);\n  border-color: rgba(255, 238, 186, 0.85);\n  color: #856404;\n}\n.toast-wrapper .toast.warning .toast-header[data-v-f600ea6a] {\n  color: #856404;\n  background-color: rgba(255, 243, 205, 0.85);\n  border-bottom-color: rgba(255, 238, 186, 0.85);\n}\n.toast-wrapper .toast.danger[data-v-f600ea6a] {\n  background-color: rgba(252, 237, 238, 0.85);\n  border-color: rgba(245, 198, 203, 0.85);\n  color: #721c24;\n}\n.toast-wrapper .toast.danger .toast-header[data-v-f600ea6a] {\n  color: #721c24;\n  background-color: rgba(248, 215, 218, 0.85);\n  border-bottom-color: rgba(245, 198, 203, 0.85);\n}\n.toast-header[data-v-f600ea6a] {\n  display: flex;\n  align-items: center;\n  padding: 0.25rem 0.75rem;\n  color: #6c757d;\n  background-color: rgba(255, 255, 255, 0.85);\n  background-clip: padding-box;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.05);\n  color: #721c24;\n  background-color: rgba(248, 215, 218, 0.85);\n  border-bottom-color: rgba(245, 198, 203, 0.85);\n}\n.toast-header .close-button[data-v-f600ea6a] {\n  margin-left: auto;\n  padding: 4px;\n}\n.toast-header .close-button:hover svg[data-v-f600ea6a] {\n  fill: #333;\n}\n.toast-header .close-button svg[data-v-f600ea6a] {\n  height: 20px;\n  width: 20px;\n  fill: #666;\n  display: block;\n}\n.toast-body[data-v-f600ea6a] {\n  display: block;\n  padding: 0.75rem;\n  margin-left: auto;\n}\n\n/*# sourceMappingURL=Toast.vue.map */",
    map: {
      "version": 3,
      "sources": ["D:\\Work\\presetbox\\admin-core\\src\\components\\Toast\\Toast.vue", "Toast.vue"],
      "names": [],
      "mappings": "AA6CA;EACA,cAAA;EACA,kBAAA;EACA,gBAAA;EACA,2BAAA;EACA,4BAAA;EACA,UAAA;EACA,sBAAA;AC5CA;AD8CA;EACA,sBAAA;AC5CA;AD+CA;EACA,gBAAA;EACA,gBAAA;EACA,mBAAA;EACA,2CAAA;EACA,4BAAA;EACA,oCAAA;EACA,gDAAA;EACA,2BAAA;EACA,UAAA;EACA,sBAAA;AC7CA;AD+CA;EACA,2CAAA;EACA,uCAAA;EACA,cAAA;AC7CA;AD+CA;EACA,cAAA;EACA,2CAAA;EACA,8CAAA;AC7CA;ADiDA;EACA,2CAAA;EACA,uCAAA;EACA,cAAA;AC/CA;ADgDA;EACA,cAAA;EACA,2CAAA;EACA,8CAAA;AC9CA;ADkDA;EACA,2CAAA;EACA,uCAAA;EACA,cAAA;AChDA;ADkDA;EACA,cAAA;EACA,2CAAA;EACA,8CAAA;AChDA;ADoDA;EACA,2CAAA;EACA,uCAAA;EACA,cAAA;AClDA;ADoDA;EACA,cAAA;EACA,2CAAA;EACA,8CAAA;AClDA;ADsDA;EACA,2CAAA;EACA,uCAAA;EACA,cAAA;ACpDA;ADsDA;EACA,cAAA;EACA,2CAAA;EACA,8CAAA;ACpDA;ADwDA;EACA,2CAAA;EACA,uCAAA;EACA,cAAA;ACtDA;ADwDA;EACA,cAAA;EACA,2CAAA;EACA,8CAAA;ACtDA;AD4DA;EACA,aAAA;EACA,mBAAA;EACA,wBAAA;EACA,cAAA;EACA,2CAAA;EACA,4BAAA;EACA,4CAAA;EAEA,cAAA;EACA,2CAAA;EACA,8CAAA;AC1DA;AD4DA;EACA,iBAAA;EACA,YAAA;AC1DA;AD6DA;EACA,UAAA;AC3DA;AD+DA;EACA,YAAA;EACA,WAAA;EACA,UAAA;EACA,cAAA;AC7DA;ADkEA;EACA,cAAA;EACA,gBAAA;EAEA,iBAAA;AChEA;;AAEA,oCAAoC",
      "file": "Toast.vue",
      "sourcesContent": ["<template>\n  <div class=\"toast-wrapper\">\n    <div v-bind:class=\"['toast', toast.variant]\">\n      <header class=\"toast-header\">\n        <strong>{{ toast.title }}</strong>\n        <button class=\"close-button\" v-on:click=\"hideToast\">\n          <svg-icon name=\"clear\" />\n        </button>\n      </header>\n\n      <div class=\"toast-body\">{{ toast.body }}</div>\n    </div>\n  </div>\n</template>\n\n<script lang=\"js\">\nimport Vue from 'vue';\nimport SvgIcon from '@/components/SvgIcon.vue';\n\nexport default Vue.extend({\n  components: { SvgIcon },\n  name: 'Toast',\n  props: {\n    toast: Object\n  },\n  data(){\n    return {\n      timeoutId: null\n    };\n  },\n  mounted() {\n    this.timeoutId = setTimeout(() => this.hideToast(), 3000);\n  },\n  methods: {\n    hideToast() {\n      if (this.timeoutId) {\n        clearTimeout();\n      }\n      this.$emit('hide');\n    }\n  }\n});\n</script>\n\n<style scoped lang=\"scss\">\n.toast-wrapper {\n  display: block;\n  position: relative;\n  max-width: 350px;\n  backface-visibility: hidden;\n  background-clip: padding-box;\n  z-index: 1;\n  border-radius: 0.25rem;\n\n  &:not(:last-child) {\n    margin-bottom: 0.75rem;\n  }\n\n  .toast {\n    max-width: 350px;\n    overflow: hidden;\n    font-size: 0.875rem;\n    background-color: hsla(0, 0%, 100%, 0.85);\n    background-clip: padding-box;\n    border: 1px solid rgba(0, 0, 0, 0.1);\n    box-shadow: 0 0.25rem 0.75rem rgba(0, 0, 0, 0.1);\n    backdrop-filter: blur(10px);\n    opacity: 1;\n    border-radius: 0.25rem;\n\n    &.primary {\n      background-color: rgba(230, 242, 255, 0.85);\n      border-color: rgba(184, 218, 255, 0.85);\n      color: #004085;\n\n      .toast-header {\n        color: #004085;\n        background-color: rgba(204, 229, 255, 0.85);\n        border-bottom-color: rgba(184, 218, 255, 0.85);\n      }\n    }\n\n    &.secondary {\n      background-color: rgba(239, 240, 241, 0.85);\n      border-color: rgba(214, 216, 219, 0.85);\n      color: #383d41;\n      .toast-header {\n        color: #383d41;\n        background-color: rgba(226, 227, 229, 0.85);\n        border-bottom-color: rgba(214, 216, 219, 0.85);\n      }\n    }\n\n    &.success {\n      background-color: rgba(230, 245, 233, 0.85);\n      border-color: rgba(195, 230, 203, 0.85);\n      color: #155724;\n\n      .toast-header {\n        color: #155724;\n        background-color: rgba(212, 237, 218, 0.85);\n        border-bottom-color: rgba(195, 230, 203, 0.85);\n      }\n    }\n\n    &.info {\n      background-color: rgba(229, 244, 247, 0.85);\n      border-color: rgba(190, 229, 235, 0.85);\n      color: #0c5460;\n\n      .toast-header {\n        color: #0c5460;\n        background-color: rgba(209, 236, 241, 0.85);\n        border-bottom-color: rgba(190, 229, 235, 0.85);\n      }\n    }\n\n    &.warning {\n      background-color: rgba(255, 249, 231, 0.85);\n      border-color: rgba(255, 238, 186, 0.85);\n      color: #856404;\n\n      .toast-header {\n        color: #856404;\n        background-color: rgba(255, 243, 205, 0.85);\n        border-bottom-color: rgba(255, 238, 186, 0.85);\n      }\n    }\n\n    &.danger {\n      background-color: rgba(252, 237, 238, 0.85);\n      border-color: rgba(245, 198, 203, 0.85);\n      color: #721c24;\n\n      .toast-header {\n        color: #721c24;\n        background-color: rgba(248, 215, 218, 0.85);\n        border-bottom-color: rgba(245, 198, 203, 0.85);\n      }\n    }\n  }\n}\n\n.toast-header {\n  display: flex;\n  align-items: center;\n  padding: 0.25rem 0.75rem;\n  color: #6c757d;\n  background-color: hsla(0, 0%, 100%, 0.85);\n  background-clip: padding-box;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.05);\n\n  color: #721c24;\n  background-color: rgba(248, 215, 218, 0.85);\n  border-bottom-color: rgba(245, 198, 203, 0.85);\n\n  .close-button {\n    margin-left: auto;\n    padding: 4px;\n\n    &:hover {\n      svg {\n        fill: #333;\n      }\n    }\n\n    svg {\n      height: 20px;\n      width: 20px;\n      fill: #666;\n      display: block;\n    }\n  }\n}\n\n.toast-body {\n  display: block;\n  padding: 0.75rem;\n\n  margin-left: auto;\n}\n</style>\n", ".toast-wrapper {\n  display: block;\n  position: relative;\n  max-width: 350px;\n  backface-visibility: hidden;\n  background-clip: padding-box;\n  z-index: 1;\n  border-radius: 0.25rem;\n}\n.toast-wrapper:not(:last-child) {\n  margin-bottom: 0.75rem;\n}\n.toast-wrapper .toast {\n  max-width: 350px;\n  overflow: hidden;\n  font-size: 0.875rem;\n  background-color: rgba(255, 255, 255, 0.85);\n  background-clip: padding-box;\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  box-shadow: 0 0.25rem 0.75rem rgba(0, 0, 0, 0.1);\n  backdrop-filter: blur(10px);\n  opacity: 1;\n  border-radius: 0.25rem;\n}\n.toast-wrapper .toast.primary {\n  background-color: rgba(230, 242, 255, 0.85);\n  border-color: rgba(184, 218, 255, 0.85);\n  color: #004085;\n}\n.toast-wrapper .toast.primary .toast-header {\n  color: #004085;\n  background-color: rgba(204, 229, 255, 0.85);\n  border-bottom-color: rgba(184, 218, 255, 0.85);\n}\n.toast-wrapper .toast.secondary {\n  background-color: rgba(239, 240, 241, 0.85);\n  border-color: rgba(214, 216, 219, 0.85);\n  color: #383d41;\n}\n.toast-wrapper .toast.secondary .toast-header {\n  color: #383d41;\n  background-color: rgba(226, 227, 229, 0.85);\n  border-bottom-color: rgba(214, 216, 219, 0.85);\n}\n.toast-wrapper .toast.success {\n  background-color: rgba(230, 245, 233, 0.85);\n  border-color: rgba(195, 230, 203, 0.85);\n  color: #155724;\n}\n.toast-wrapper .toast.success .toast-header {\n  color: #155724;\n  background-color: rgba(212, 237, 218, 0.85);\n  border-bottom-color: rgba(195, 230, 203, 0.85);\n}\n.toast-wrapper .toast.info {\n  background-color: rgba(229, 244, 247, 0.85);\n  border-color: rgba(190, 229, 235, 0.85);\n  color: #0c5460;\n}\n.toast-wrapper .toast.info .toast-header {\n  color: #0c5460;\n  background-color: rgba(209, 236, 241, 0.85);\n  border-bottom-color: rgba(190, 229, 235, 0.85);\n}\n.toast-wrapper .toast.warning {\n  background-color: rgba(255, 249, 231, 0.85);\n  border-color: rgba(255, 238, 186, 0.85);\n  color: #856404;\n}\n.toast-wrapper .toast.warning .toast-header {\n  color: #856404;\n  background-color: rgba(255, 243, 205, 0.85);\n  border-bottom-color: rgba(255, 238, 186, 0.85);\n}\n.toast-wrapper .toast.danger {\n  background-color: rgba(252, 237, 238, 0.85);\n  border-color: rgba(245, 198, 203, 0.85);\n  color: #721c24;\n}\n.toast-wrapper .toast.danger .toast-header {\n  color: #721c24;\n  background-color: rgba(248, 215, 218, 0.85);\n  border-bottom-color: rgba(245, 198, 203, 0.85);\n}\n\n.toast-header {\n  display: flex;\n  align-items: center;\n  padding: 0.25rem 0.75rem;\n  color: #6c757d;\n  background-color: rgba(255, 255, 255, 0.85);\n  background-clip: padding-box;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.05);\n  color: #721c24;\n  background-color: rgba(248, 215, 218, 0.85);\n  border-bottom-color: rgba(245, 198, 203, 0.85);\n}\n.toast-header .close-button {\n  margin-left: auto;\n  padding: 4px;\n}\n.toast-header .close-button:hover svg {\n  fill: #333;\n}\n.toast-header .close-button svg {\n  height: 20px;\n  width: 20px;\n  fill: #666;\n  display: block;\n}\n\n.toast-body {\n  display: block;\n  padding: 0.75rem;\n  margin-left: auto;\n}\n\n/*# sourceMappingURL=Toast.vue.map */"]
    },
    media: undefined
  });
};
/* scoped */


var __vue_scope_id__$1 = "data-v-f600ea6a";
/* module identifier */

var __vue_module_identifier__$1 = undefined;
/* functional template */

var __vue_is_functional_template__$1 = false;
/* style inject SSR */

/* style inject shadow dom */

var __vue_component__$1 = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$1,
  staticRenderFns: __vue_staticRenderFns__$1
}, __vue_inject_styles__$1, __vue_script__$1, __vue_scope_id__$1, __vue_is_functional_template__$1, __vue_module_identifier__$1, false, createInjector, undefined, undefined);

var script$2 = Vue.extend({
  name: 'Toasts',
  components: {
    Toast: __vue_component__$1
  },
  data: function data() {
    return {
      toastList: []
    };
  },
  mounted: function mounted() {
    var _this2 = this;

    EventBus.$on('toast:show', function (newToast) {
      _this2.toastList.push(newToast);
    });
  },
  methods: {
    hideToast: function hideToast(toastId) {
      this.toastList = this.toastList.filter(function (toast) {
        return toast.id !== toastId;
      });
    }
  }
});
/* script */

var __vue_script__$2 = script$2;
/* template */

var __vue_render__$2 = function __vue_render__$2() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c("div", {
    staticClass: "toasts-container"
  }, [_c("div", {
    staticClass: "toasts-inner"
  }, _vm._l(_vm.toastList, function (toast) {
    return _c("toast", {
      key: toast.id,
      attrs: {
        toast: toast
      },
      on: {
        hide: function hide($event) {
          return _vm.hideToast(toast.id);
        }
      }
    });
  }), 1)]);
};

var __vue_staticRenderFns__$2 = [];
__vue_render__$2._withStripped = true;
/* style */

var __vue_inject_styles__$2 = function __vue_inject_styles__$2(inject) {
  if (!inject) return;
  inject("data-v-7f9dcefd_0", {
    source: ".toasts-container[data-v-7f9dcefd] {\n  position: fixed;\n  left: 0.5rem;\n  right: 0.5rem;\n  top: 0.5rem;\n  z-index: 1100;\n}\n.toasts-inner[data-v-7f9dcefd] {\n  position: absolute;\n  max-width: 350px;\n  width: 100%;\n  left: 0;\n  right: 0;\n  margin-left: auto;\n}\n\n/*# sourceMappingURL=Toaster.vue.map */",
    map: {
      "version": 3,
      "sources": ["D:\\Work\\presetbox\\admin-core\\src\\components\\Toast\\Toaster.vue", "Toaster.vue"],
      "names": [],
      "mappings": "AAwCA;EACA,eAAA;EACA,YAAA;EACA,aAAA;EACA,WAAA;EACA,aAAA;ACvCA;AD0CA;EACA,kBAAA;EACA,gBAAA;EACA,WAAA;EACA,OAAA;EACA,QAAA;EACA,iBAAA;ACvCA;;AAEA,sCAAsC",
      "file": "Toaster.vue",
      "sourcesContent": ["<template>\n  <div class=\"toasts-container\">\n    <div class=\"toasts-inner\">\n      <toast\n        v-for=\"toast of toastList\"\n        v-bind:key=\"toast.id\"\n        v-bind:toast=\"toast\"\n        v-on:hide=\"hideToast(toast.id)\"\n      />\n    </div>\n  </div>\n</template>\n\n<script lang=\"js\">\nimport Vue from 'vue';\nimport Toast from './Toast.vue';\nimport { EventBus } from './Toast.helpers';\n\nexport default Vue.extend({\n  name: 'Toasts',\n  components: { Toast },\n  data() {\n    return {\n      toastList: []\n    };\n  },\n  mounted() {\n    EventBus.$on('toast:show', (newToast) => {\n      this.toastList.push(newToast);\n    });\n  },\n  methods: {\n    hideToast(toastId) {\n      this.toastList = this.toastList.filter(toast => toast.id !== toastId);\n    }\n  }\n});\n</script>\n\n<style scoped lang=\"scss\">\n.toasts-container {\n  position: fixed;\n  left: 0.5rem;\n  right: 0.5rem;\n  top: 0.5rem;\n  z-index: 1100;\n}\n\n.toasts-inner {\n  position: absolute;\n  max-width: 350px;\n  width: 100%;\n  left: 0;\n  right: 0;\n  margin-left: auto;\n}\n</style>\n", ".toasts-container {\n  position: fixed;\n  left: 0.5rem;\n  right: 0.5rem;\n  top: 0.5rem;\n  z-index: 1100;\n}\n\n.toasts-inner {\n  position: absolute;\n  max-width: 350px;\n  width: 100%;\n  left: 0;\n  right: 0;\n  margin-left: auto;\n}\n\n/*# sourceMappingURL=Toaster.vue.map */"]
    },
    media: undefined
  });
};
/* scoped */


var __vue_scope_id__$2 = "data-v-7f9dcefd";
/* module identifier */

var __vue_module_identifier__$2 = undefined;
/* functional template */

var __vue_is_functional_template__$2 = false;
/* style inject SSR */

/* style inject shadow dom */

var __vue_component__$2 = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$2,
  staticRenderFns: __vue_staticRenderFns__$2
}, __vue_inject_styles__$2, __vue_script__$2, __vue_scope_id__$2, __vue_is_functional_template__$2, __vue_module_identifier__$2, false, createInjector, undefined, undefined);

var BASE_PATH = '/admin';
var script$3 = Vue.extend({
  components: {
    SvgIcon: __vue_component__
  },
  props: {
    isCollapsed: {
      type: Boolean,
      required: true
    },
    menuItemList: {
      type: Array,
      required: true
    },
    brandConfig: {
      type: Object,
      required: true
    }
  },
  data: function data() {
    return {
      isHovered: false
    };
  },
  computed: {
    logoUrl: function logoUrl() {
      if (this.isCollapsed && !this.isHovered) {
        return this.brandConfig.small['logo-ext'] ? BASE_PATH + '/logo-small.' + this.brandConfig.small['logo-ext'] : '';
      } else {
        return this.brandConfig.large['logo-ext'] ? BASE_PATH + '/logo.' + this.brandConfig.large['logo-ext'] : '';
      }
    },
    brandName: function brandName() {
      if (this.isCollapsed && !this.isHovered) {
        var _this$brandConfig$sma;

        return (_this$brandConfig$sma = this.brandConfig.small.name) !== null && _this$brandConfig$sma !== void 0 ? _this$brandConfig$sma : '';
      } else {
        var _this$brandConfig$lar;

        return (_this$brandConfig$lar = this.brandConfig.large.name) !== null && _this$brandConfig$lar !== void 0 ? _this$brandConfig$lar : '';
      }
    },
    brandNameColor: function brandNameColor() {
      if (this.isCollapsed && !this.isHovered) {
        var _ref, _this$brandConfig$sma2;

        return (_ref = (_this$brandConfig$sma2 = this.brandConfig.small['name-color']) !== null && _this$brandConfig$sma2 !== void 0 ? _this$brandConfig$sma2 : this.brandConfig.large['name-color']) !== null && _ref !== void 0 ? _ref : undefined;
      } else {
        var _ref2, _this$brandConfig$lar2;

        return (_ref2 = (_this$brandConfig$lar2 = this.brandConfig.large['name-color']) !== null && _this$brandConfig$lar2 !== void 0 ? _this$brandConfig$lar2 : this.brandConfig.small['name-color']) !== null && _ref2 !== void 0 ? _ref2 : undefined;
      }
    },
    shouldDisplayLogo: function shouldDisplayLogo() {
      return Boolean(this.logoUrl);
    },
    shouldDisplayBrandName: function shouldDisplayBrandName() {
      if (this.isCollapsed && !this.isHovered) {
        return !this.shouldDisplayLogo && Boolean(this.brandName);
      } else {
        return Boolean(this.brandName);
      }
    }
  },
  methods: {
    handleMouseOver: function handleMouseOver() {
      this.isHovered = true;
    },
    handleMouseLeave: function handleMouseLeave() {
      this.isHovered = false;
    },
    toggleMenuItem: function toggleMenuItem(itemId) {
      console.log('toggleMenuItem', itemId);
      var foundItem = this.menuItemList.find(function (menuItem) {
        return menuItem.id === itemId;
      });

      if (foundItem) {
        foundItem.isOpen = !foundItem.isOpen;
      }
    },
    isMenuItemActive: function isMenuItemActive(itemId) {
      var _this3 = this;

      var foundItem = this.menuItemList.find(function (menuItem) {
        return menuItem.id === itemId;
      });
      if (!foundItem) return false;
      return foundItem.children ? foundItem.children.some(function (childItem) {
        return childItem.path === _this3.$route.path;
      }) : foundItem.path === this.$route.path;
    }
  }
});
/* script */

var __vue_script__$3 = script$3;
/* template */

var __vue_render__$3 = function __vue_render__$3() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c("aside", {
    class: ["sidebar", {
      collapsed: _vm.isCollapsed,
      hovered: _vm.isHovered
    }]
  }, [_c("div", {
    staticClass: "sidebar-inner"
  }, [_c("div", {
    staticClass: "sidebar-top"
  }, [_vm.shouldDisplayLogo ? _c("div", {
    staticClass: "logo-container"
  }, [_c("img", {
    attrs: {
      src: _vm.logoUrl,
      alt: ""
    }
  })]) : _vm._e(), _vm._v(" "), _vm.shouldDisplayBrandName ? _c("span", {
    staticClass: "sidebar-top-title",
    style: {
      color: _vm.brandNameColor
    }
  }, [_vm._v("\n        " + _vm._s(_vm.brandName) + "\n      ")]) : _vm._e()]), _vm._v(" "), _c("ul", {
    staticClass: "menu-list",
    on: {
      mouseover: _vm.handleMouseOver,
      mouseleave: _vm.handleMouseLeave
    }
  }, _vm._l(_vm.menuItemList, function (menuItem) {
    return _c("li", {
      key: menuItem.id,
      class: ["menu-item", {
        active: _vm.isMenuItemActive(menuItem.id)
      }],
      attrs: {
        "data-expanded": Boolean(menuItem.isOpen)
      }
    }, [_c(menuItem.children ? "button" : "router-link", {
      tag: "component",
      staticClass: "menu-link",
      attrs: {
        to: menuItem.children ? undefined : menuItem.path
      },
      on: {
        click: function click($event) {
          menuItem.children ? _vm.toggleMenuItem(menuItem.id) : undefined;
        }
      }
    }, [_c("span", {
      staticClass: "menu-link-icon-container"
    }, [_c("svg-icon", {
      attrs: {
        name: menuItem.icon
      }
    })], 1), _vm._v(" "), _c("span", {
      staticClass: "menu-link-name"
    }, [_vm._v(_vm._s(menuItem.name))]), _vm._v(" "), _c("span", {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: Array.isArray(menuItem.children),
        expression: "Array.isArray(menuItem.children)"
      }],
      staticClass: "arrow-icon-container"
    }, [_c("svg-icon", {
      attrs: {
        name: "expandMore"
      }
    })], 1)]), _vm._v(" "), Array.isArray(menuItem.children) ? _c("ul", {
      staticClass: "child-menu-list"
    }, _vm._l(menuItem.children, function (childItem) {
      return _c("li", {
        key: childItem.path,
        staticClass: "child-menu-item"
      }, [_c("router-link", {
        staticClass: "child-menu-link",
        attrs: {
          "active-class": "active",
          to: childItem.path,
          exact: ""
        }
      }, [_vm._v("\n              " + _vm._s(childItem.name) + "\n            ")])], 1);
    }), 0) : _vm._e()], 1);
  }), 0)])]);
};

var __vue_staticRenderFns__$3 = [];
__vue_render__$3._withStripped = true;
/* style */

var __vue_inject_styles__$3 = function __vue_inject_styles__$3(inject) {
  if (!inject) return;
  inject("data-v-66eba7b7_0", {
    source: ".sidebar[data-v-66eba7b7] {\n  background-color: #fff;\n  bottom: 0;\n  overflow: hidden;\n  position: fixed;\n  top: 0;\n  transition: width 0.3s linear;\n  width: 280px;\n  z-index: 1000;\n}\n.sidebar.collapsed[data-v-66eba7b7]:not(.hovered) {\n  width: 70px;\n}\n.sidebar.collapsed:not(.hovered) .sidebar-top[data-v-66eba7b7] {\n  width: 70px;\n  border-bottom: 1px solid transparent;\n  justify-content: center;\n}\n.sidebar.collapsed:not(.hovered) .sidebar-top-title[data-v-66eba7b7] {\n  text-align: center;\n  margin-left: 0;\n}\n.sidebar.collapsed:not(.hovered) .menu-item[data-expanded=true] .child-menu-list[data-v-66eba7b7],\n.sidebar.collapsed:not(.hovered) .menu-link-name[data-v-66eba7b7],\n.sidebar.collapsed:not(.hovered) .arrow-icon-container[data-v-66eba7b7] {\n  display: none;\n}\n.sidebar.collapsed:not(.hovered) .menu-link-icon-container[data-v-66eba7b7] {\n  margin-right: 0;\n}\n.sidebar-inner[data-v-66eba7b7] {\n  position: relative;\n  height: 100%;\n  border-right: 1px solid rgba(0, 0, 0, 0.0625);\n}\n.sidebar-top[data-v-66eba7b7] {\n  border-bottom: 1px solid rgba(0, 0, 0, 0.0625);\n  line-height: 0;\n  padding: 0 0.5rem;\n  display: flex;\n  align-items: center;\n  white-space: nowrap;\n  height: 66px;\n}\n.logo-container[data-v-66eba7b7] {\n  height: calc(70px - 1rem);\n  width: auto;\n  flex-shrink: 0;\n  max-width: 100%;\n  margin: 0 auto;\n}\n.logo-container img[data-v-66eba7b7] {\n  width: auto;\n  height: 100%;\n  object-fit: contain;\n}\n.logo[data-v-66eba7b7] {\n  vertical-align: middle;\n}\n.sidebar-top-title[data-v-66eba7b7] {\n  display: block;\n  text-align: center;\n  font-size: 1.5rem;\n  line-height: 1;\n  font-weight: 500;\n  margin-left: 1rem;\n  flex: 1;\n}\n.menu-list[data-v-66eba7b7] {\n  list-style-type: none;\n  height: calc(100vh - 65px);\n  padding: 30px 0 0;\n  overflow: auto;\n}\n.menu-item[data-v-66eba7b7] {\n  cursor: pointer;\n}\n.menu-item[data-v-66eba7b7]:hover {\n  background-color: rgba(0, 0, 0, 0.03);\n}\n.menu-item.active[data-v-66eba7b7] {\n  background-color: #d5fafe;\n}\n.menu-item.active .menu-link[data-v-66eba7b7] {\n  font-weight: 600;\n}\n.menu-item[data-expanded=true] .arrow-icon-container svg[data-v-66eba7b7] {\n  transform: rotate(180deg);\n}\n.menu-item[data-expanded=true] .child-menu-list[data-v-66eba7b7] {\n  display: block;\n}\n.menu-link[data-v-66eba7b7] {\n  display: flex;\n  align-items: center;\n  width: 100%;\n  font-weight: 500;\n  color: #666;\n  padding: 5px 30px 5px 15px;\n  position: relative;\n  white-space: nowrap;\n  min-width: 1px;\n}\n.menu-link[data-v-66eba7b7]:hover {\n  color: #333;\n  text-decoration: none;\n}\n.menu-link-name[data-v-66eba7b7] {\n  font-size: 1rem;\n  margin-right: 1rem;\n  flex-shrink: 0;\n}\n.menu-link-icon-container[data-v-66eba7b7] {\n  width: 35px;\n  height: 35px;\n  margin-right: 1rem;\n  flex-shrink: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.menu-link-icon-container svg[data-v-66eba7b7] {\n  display: block;\n}\n.arrow-icon-container[data-v-66eba7b7] {\n  margin-left: auto;\n}\n.arrow-icon-container svg[data-v-66eba7b7] {\n  transition: transform 0.1s ease-in;\n  display: block;\n}\n.child-menu-list[data-v-66eba7b7] {\n  display: none;\n  padding-left: 50px;\n}\n.child-menu-link[data-v-66eba7b7] {\n  display: block;\n  color: #888;\n  padding: 10px 15px;\n  white-space: nowrap;\n  font-size: 0.95rem;\n}\n.child-menu-link[data-v-66eba7b7]:hover {\n  color: #555;\n  text-decoration: underline;\n}\n.child-menu-link.active[data-v-66eba7b7] {\n  color: #555;\n  font-weight: 500;\n  text-decoration: underline;\n}\n\n/*# sourceMappingURL=Sidebar.vue.map */",
    map: {
      "version": 3,
      "sources": ["D:\\Work\\presetbox\\admin-core\\src\\components\\Sidebar.vue", "Sidebar.vue"],
      "names": [],
      "mappings": "AAmLA;EACA,sBAAA;EACA,SAAA;EACA,gBAAA;EACA,eAAA;EACA,MAAA;EACA,6BAAA;EACA,YAAA;EACA,aAAA;AClLA;ADoLA;EACA,WAAA;AClLA;ADoLA;EACA,WAAA;EACA,oCAAA;EACA,uBAAA;AClLA;ADqLA;EACA,kBAAA;EACA,cAAA;ACnLA;ADsLA;;;EAGA,aAAA;ACpLA;ADuLA;EACA,eAAA;ACrLA;AD0LA;EACA,kBAAA;EACA,YAAA;EACA,6CAAA;ACvLA;AD0LA;EACA,8CAAA;EACA,cAAA;EACA,iBAAA;EACA,aAAA;EACA,mBAAA;EACA,mBAAA;EAEA,YAAA;ACxLA;AD2LA;EACA,yBAAA;EACA,WAAA;EACA,cAAA;EACA,eAAA;EACA,cAAA;ACxLA;AD0LA;EACA,WAAA;EACA,YAAA;EACA,mBAAA;ACxLA;AD4LA;EACA,sBAAA;ACzLA;AD4LA;EACA,cAAA;EACA,kBAAA;EAEA,iBAAA;EACA,cAAA;EACA,gBAAA;EACA,iBAAA;EACA,OAAA;AC1LA;AD6LA;EACA,qBAAA;EACA,0BAAA;EACA,iBAAA;EACA,cAAA;AC1LA;AD6LA;EACA,eAAA;AC1LA;AD2LA;EACA,qCAAA;ACzLA;AD4LA;EACA,yBAAA;AC1LA;AD4LA;EACA,gBAAA;AC1LA;AD+LA;EACA,yBAAA;AC7LA;ADgMA;EACA,cAAA;AC9LA;ADmMA;EACA,aAAA;EACA,mBAAA;EACA,WAAA;EACA,gBAAA;EACA,WAAA;EACA,0BAAA;EACA,kBAAA;EACA,mBAAA;EACA,cAAA;AChMA;ADkMA;EACA,WAAA;EACA,qBAAA;AChMA;ADoMA;EACA,eAAA;EACA,kBAAA;EACA,cAAA;ACjMA;ADoMA;EACA,WAAA;EACA,YAAA;EACA,kBAAA;EACA,cAAA;EAEA,aAAA;EACA,uBAAA;EACA,mBAAA;AClMA;ADoMA;EACA,cAAA;AClMA;ADsMA;EACA,iBAAA;ACnMA;ADqMA;EACA,kCAAA;EACA,cAAA;ACnMA;ADuMA;EACA,aAAA;EACA,kBAAA;ACpMA;AD0MA;EACA,cAAA;EACA,WAAA;EACA,kBAAA;EACA,mBAAA;EACA,kBAAA;ACvMA;ADyMA;EACA,WAAA;EACA,0BAAA;ACvMA;AD0MA;EACA,WAAA;EACA,gBAAA;EACA,0BAAA;ACxMA;;AAEA,sCAAsC",
      "file": "Sidebar.vue",
      "sourcesContent": ["<template>\n  <aside\n    v-bind:class=\"['sidebar', { collapsed: isCollapsed, hovered: isHovered }]\"\n  >\n    <div class=\"sidebar-inner\">\n      <div class=\"sidebar-top\">\n        <div v-if=\"shouldDisplayLogo\" class=\"logo-container\">\n          <img v-bind:src=\"logoUrl\" alt=\"\" />\n        </div>\n        <span\n          v-if=\"shouldDisplayBrandName\"\n          class=\"sidebar-top-title\"\n          v-bind:style=\"{ color: brandNameColor }\"\n        >\n          {{ brandName }}\n        </span>\n      </div>\n      <ul\n        class=\"menu-list\"\n        v-on:mouseover=\"handleMouseOver\"\n        v-on:mouseleave=\"handleMouseLeave\"\n      >\n        <li\n          v-for=\"menuItem in menuItemList\"\n          v-bind:key=\"menuItem.id\"\n          v-bind:class=\"[\n            'menu-item',\n            { active: isMenuItemActive(menuItem.id) }\n          ]\"\n          v-bind:data-expanded=\"Boolean(menuItem.isOpen)\"\n        >\n          <component\n            class=\"menu-link\"\n            v-bind:is=\"menuItem.children ? 'button' : 'router-link'\"\n            v-bind:to=\"menuItem.children ? undefined : menuItem.path\"\n            v-on:click=\"\n              menuItem.children ? toggleMenuItem(menuItem.id) : undefined\n            \"\n          >\n            <span class=\"menu-link-icon-container\">\n              <svg-icon v-bind:name=\"menuItem.icon\" />\n            </span>\n            <span class=\"menu-link-name\">{{ menuItem.name }}</span>\n            <span\n              class=\"arrow-icon-container\"\n              v-show=\"Array.isArray(menuItem.children)\"\n            >\n              <svg-icon name=\"expandMore\" />\n            </span>\n          </component>\n          <ul class=\"child-menu-list\" v-if=\"Array.isArray(menuItem.children)\">\n            <li\n              class=\"child-menu-item\"\n              v-for=\"childItem of menuItem.children\"\n              v-bind:key=\"childItem.path\"\n            >\n              <router-link\n                active-class=\"active\"\n                class=\"child-menu-link\"\n                v-bind:to=\"childItem.path\"\n                exact\n              >\n                {{ childItem.name }}\n              </router-link>\n            </li>\n          </ul>\n        </li>\n      </ul>\n    </div>\n  </aside>\n</template>\n\n<script lang=\"js\">\nimport Vue from 'vue';\n\nimport { BASE_PATH } from '@/constants/common';\nimport SvgIcon from '@/components/SvgIcon.vue';\n\nexport default Vue.extend({\n  components: { SvgIcon },\n  props: {\n    isCollapsed: {\n      type: Boolean,\n      required: true\n    },\n    menuItemList: {\n      type: Array,\n      required: true\n    },\n    brandConfig: {\n      type: Object,\n      required: true\n    }\n  },\n  data() {\n    return {\n      isHovered: false\n    };\n  },\n  computed: {\n    logoUrl() {\n      if (this.isCollapsed && !this.isHovered) {\n        return this.brandConfig.small['logo-ext']\n          ? BASE_PATH + '/logo-small.' + this.brandConfig.small['logo-ext']\n          : '';\n      } else {\n        return this.brandConfig.large['logo-ext']\n          ? BASE_PATH + '/logo.' + this.brandConfig.large['logo-ext']\n          : '';\n      }\n    },\n    brandName() {\n      if (this.isCollapsed && !this.isHovered) {\n        return this.brandConfig.small.name ?? '';\n      } else {\n        return this.brandConfig.large.name ?? '';\n      }\n    },\n    brandNameColor() {\n      if (this.isCollapsed && !this.isHovered) {\n        return (\n          this.brandConfig.small['name-color'] ??\n          this.brandConfig.large['name-color'] ??\n          undefined\n        );\n      } else {\n        return (\n          this.brandConfig.large['name-color'] ??\n          this.brandConfig.small['name-color'] ??\n          undefined\n        );\n      }\n    },\n    shouldDisplayLogo() {\n      return Boolean(this.logoUrl);\n    },\n    shouldDisplayBrandName() {\n      if (this.isCollapsed && !this.isHovered) {\n        return !this.shouldDisplayLogo && Boolean(this.brandName);\n      } else {\n        return Boolean(this.brandName);\n      }\n    }\n  },\n  methods: {\n    handleMouseOver() {\n      this.isHovered = true;\n    },\n    handleMouseLeave() {\n      this.isHovered = false;\n    },\n    toggleMenuItem(itemId) {\n      console.log('toggleMenuItem', itemId);\n      const foundItem = this.menuItemList.find(\n        menuItem => menuItem.id === itemId\n      );\n\n      if (foundItem) {\n        foundItem.isOpen = !foundItem.isOpen;\n      }\n    },\n    isMenuItemActive(itemId) {\n      const foundItem = this.menuItemList.find(\n        menuItem => menuItem.id === itemId\n      );\n\n      if (!foundItem) return false;\n\n      return foundItem.children\n        ? foundItem.children.some(\n            childItem => childItem.path === this.$route.path\n          )\n        : foundItem.path === this.$route.path;\n    }\n  }\n});\n</script>\n\n<style scoped lang=\"scss\">\n.sidebar {\n  background-color: #fff;\n  bottom: 0;\n  overflow: hidden;\n  position: fixed;\n  top: 0;\n  transition: width 0.3s linear;\n  width: 280px;\n  z-index: 1000;\n\n  &.collapsed:not(.hovered) {\n    width: 70px;\n\n    .sidebar-top {\n      width: 70px;\n      border-bottom: 1px solid transparent;\n      justify-content: center;\n    }\n\n    .sidebar-top-title {\n      text-align: center;\n      margin-left: 0;\n    }\n\n    .menu-item[data-expanded='true'] .child-menu-list,\n    .menu-link-name,\n    .arrow-icon-container {\n      display: none;\n    }\n\n    .menu-link-icon-container {\n      margin-right: 0;\n    }\n  }\n}\n\n.sidebar-inner {\n  position: relative;\n  height: 100%;\n  border-right: 1px solid rgba(0, 0, 0, 0.0625);\n}\n\n.sidebar-top {\n  border-bottom: 1px solid rgba(0, 0, 0, 0.0625);\n  line-height: 0;\n  padding: 0 0.5rem;\n  display: flex;\n  align-items: center;\n  white-space: nowrap;\n\n  height: 66px;\n}\n\n.logo-container {\n  height: calc(70px - 1rem);\n  width: auto;\n  flex-shrink: 0;\n  max-width: 100%;\n  margin: 0 auto;\n\n  img {\n    width: auto;\n    height: 100%;\n    object-fit: contain;\n  }\n}\n\n.logo {\n  vertical-align: middle;\n}\n\n.sidebar-top-title {\n  display: block;\n  text-align: center;\n\n  font-size: 1.5rem;\n  line-height: 1;\n  font-weight: 500;\n  margin-left: 1rem;\n  flex: 1;\n}\n\n.menu-list {\n  list-style-type: none;\n  height: calc(100vh - 65px);\n  padding: 30px 0 0;\n  overflow: auto;\n}\n\n.menu-item {\n  cursor: pointer;\n  &:hover {\n    background-color: rgba(0, 0, 0, 0.03);\n  }\n\n  &.active {\n    background-color: #d5fafe;\n\n    .menu-link {\n      font-weight: 600;\n    }\n  }\n\n  &[data-expanded='true'] {\n    .arrow-icon-container svg {\n      transform: rotate(180deg);\n    }\n\n    .child-menu-list {\n      display: block;\n    }\n  }\n}\n\n.menu-link {\n  display: flex;\n  align-items: center;\n  width: 100%;\n  font-weight: 500;\n  color: #666;\n  padding: 5px 30px 5px 15px;\n  position: relative;\n  white-space: nowrap;\n  min-width: 1px;\n\n  &:hover {\n    color: #333;\n    text-decoration: none;\n  }\n}\n\n.menu-link-name {\n  font-size: 1rem;\n  margin-right: 1rem;\n  flex-shrink: 0;\n}\n\n.menu-link-icon-container {\n  width: 35px;\n  height: 35px;\n  margin-right: 1rem;\n  flex-shrink: 0;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  svg {\n    display: block;\n  }\n}\n\n.arrow-icon-container {\n  margin-left: auto;\n\n  svg {\n    transition: transform 0.1s ease-in;\n    display: block;\n  }\n}\n\n.child-menu-list {\n  display: none;\n  padding-left: 50px;\n}\n\n.child-menu-item {\n}\n\n.child-menu-link {\n  display: block;\n  color: #888;\n  padding: 10px 15px;\n  white-space: nowrap;\n  font-size: 0.95rem;\n\n  &:hover {\n    color: #555;\n    text-decoration: underline;\n  }\n\n  &.active {\n    color: #555;\n    font-weight: 500;\n    text-decoration: underline;\n  }\n}\n</style>\n", ".sidebar {\n  background-color: #fff;\n  bottom: 0;\n  overflow: hidden;\n  position: fixed;\n  top: 0;\n  transition: width 0.3s linear;\n  width: 280px;\n  z-index: 1000;\n}\n.sidebar.collapsed:not(.hovered) {\n  width: 70px;\n}\n.sidebar.collapsed:not(.hovered) .sidebar-top {\n  width: 70px;\n  border-bottom: 1px solid transparent;\n  justify-content: center;\n}\n.sidebar.collapsed:not(.hovered) .sidebar-top-title {\n  text-align: center;\n  margin-left: 0;\n}\n.sidebar.collapsed:not(.hovered) .menu-item[data-expanded=true] .child-menu-list,\n.sidebar.collapsed:not(.hovered) .menu-link-name,\n.sidebar.collapsed:not(.hovered) .arrow-icon-container {\n  display: none;\n}\n.sidebar.collapsed:not(.hovered) .menu-link-icon-container {\n  margin-right: 0;\n}\n\n.sidebar-inner {\n  position: relative;\n  height: 100%;\n  border-right: 1px solid rgba(0, 0, 0, 0.0625);\n}\n\n.sidebar-top {\n  border-bottom: 1px solid rgba(0, 0, 0, 0.0625);\n  line-height: 0;\n  padding: 0 0.5rem;\n  display: flex;\n  align-items: center;\n  white-space: nowrap;\n  height: 66px;\n}\n\n.logo-container {\n  height: calc(70px - 1rem);\n  width: auto;\n  flex-shrink: 0;\n  max-width: 100%;\n  margin: 0 auto;\n}\n.logo-container img {\n  width: auto;\n  height: 100%;\n  object-fit: contain;\n}\n\n.logo {\n  vertical-align: middle;\n}\n\n.sidebar-top-title {\n  display: block;\n  text-align: center;\n  font-size: 1.5rem;\n  line-height: 1;\n  font-weight: 500;\n  margin-left: 1rem;\n  flex: 1;\n}\n\n.menu-list {\n  list-style-type: none;\n  height: calc(100vh - 65px);\n  padding: 30px 0 0;\n  overflow: auto;\n}\n\n.menu-item {\n  cursor: pointer;\n}\n.menu-item:hover {\n  background-color: rgba(0, 0, 0, 0.03);\n}\n.menu-item.active {\n  background-color: #d5fafe;\n}\n.menu-item.active .menu-link {\n  font-weight: 600;\n}\n.menu-item[data-expanded=true] .arrow-icon-container svg {\n  transform: rotate(180deg);\n}\n.menu-item[data-expanded=true] .child-menu-list {\n  display: block;\n}\n\n.menu-link {\n  display: flex;\n  align-items: center;\n  width: 100%;\n  font-weight: 500;\n  color: #666;\n  padding: 5px 30px 5px 15px;\n  position: relative;\n  white-space: nowrap;\n  min-width: 1px;\n}\n.menu-link:hover {\n  color: #333;\n  text-decoration: none;\n}\n\n.menu-link-name {\n  font-size: 1rem;\n  margin-right: 1rem;\n  flex-shrink: 0;\n}\n\n.menu-link-icon-container {\n  width: 35px;\n  height: 35px;\n  margin-right: 1rem;\n  flex-shrink: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.menu-link-icon-container svg {\n  display: block;\n}\n\n.arrow-icon-container {\n  margin-left: auto;\n}\n.arrow-icon-container svg {\n  transition: transform 0.1s ease-in;\n  display: block;\n}\n\n.child-menu-list {\n  display: none;\n  padding-left: 50px;\n}\n\n.child-menu-link {\n  display: block;\n  color: #888;\n  padding: 10px 15px;\n  white-space: nowrap;\n  font-size: 0.95rem;\n}\n.child-menu-link:hover {\n  color: #555;\n  text-decoration: underline;\n}\n.child-menu-link.active {\n  color: #555;\n  font-weight: 500;\n  text-decoration: underline;\n}\n\n/*# sourceMappingURL=Sidebar.vue.map */"]
    },
    media: undefined
  });
};
/* scoped */


var __vue_scope_id__$3 = "data-v-66eba7b7";
/* module identifier */

var __vue_module_identifier__$3 = undefined;
/* functional template */

var __vue_is_functional_template__$3 = false;
/* style inject SSR */

/* style inject shadow dom */

var __vue_component__$3 = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$3,
  staticRenderFns: __vue_staticRenderFns__$3
}, __vue_inject_styles__$3, __vue_script__$3, __vue_scope_id__$3, __vue_is_functional_template__$3, __vue_module_identifier__$3, false, createInjector, undefined, undefined);

var StorageService = /*#__PURE__*/function () {
  function StorageService(storage) {
    _classCallCheck(this, StorageService);

    this.storage = storage;
  }

  _createClass(StorageService, [{
    key: "get",
    value: function get(field) {
      return this.storage.getItem(field);
    }
  }, {
    key: "getJSON",
    value: function getJSON(field) {
      var value = this.get(field);
      if (value === null) return value;

      try {
        return JSON.parse(value);
      } catch (error) {
        console.error("Storage service error while parsing field: \"".concat(field, "\""), error);
        return null;
      }
    }
  }, {
    key: "set",
    value: function set(key, value) {
      var stringifiedValue = typeof value === 'string' ? value : JSON.stringify(value);
      this.storage.setItem(key, stringifiedValue);
    }
  }]);

  return StorageService;
}();

var localStorageService = new StorageService(localStorage);

var RequestError = /*#__PURE__*/function (_Error) {
  _inherits(RequestError, _Error);

  var _super = _createSuper(RequestError);

  function RequestError(status, body) {
    var _this4;

    _classCallCheck(this, RequestError);

    _this4 = _super.call(this, JSON.stringify({
      status: status,
      body: body
    }, null, 2));
    _this4.status = status;
    _this4.body = body;
    console.error(_assertThisInitialized(_this4));
    return _this4;
  }

  return RequestError;
}( /*#__PURE__*/_wrapNativeSuper(Error));

var HttpMethods = {
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT',
  DELETE: 'DELETE',
  PATCH: 'PATCH'
};

var ApiService = /*#__PURE__*/function () {
  function ApiService() {
    _classCallCheck(this, ApiService);

    this.apiOrigin = '';
  }

  _createClass(ApiService, [{
    key: "setApiOrigin",
    value: function setApiOrigin(origin) {
      this.apiOrigin = origin;
    }
  }, {
    key: "getAccessToken",
    value: function getAccessToken() {
      return localStorageService.get('accessToken');
    }
  }, {
    key: "configureHeaders",
    value: function configureHeaders(body) {
      var headers = new Headers();
      var isFormData = body instanceof FormData;

      if (!isFormData) {
        headers.set('Content-Type', 'application/json');
      }

      var accessToken = this.getAccessToken();

      if (accessToken) {
        headers.set('Authorization', "Bearer ".concat(accessToken));
      }

      headers.set('Accept', 'application/json');
      return headers;
    }
  }, {
    key: "configureBody",
    value: function configureBody(body) {
      if (!body) return null;

      if (body instanceof FormData) {
        return body;
      }

      return JSON.stringify(body);
    }
  }, {
    key: "getSearchParams",
    value: function getSearchParams(params) {
      if (!params || Object.keys(params).length === 0) return '';
      var searchParams = new URLSearchParams();
      Object.entries(params).forEach(function (_ref3) {
        var _ref4 = _slicedToArray(_ref3, 2),
            key = _ref4[0],
            value = _ref4[1];

        return searchParams.append(key, value);
      });
      return "?".concat(searchParams.toString());
    }
  }, {
    key: "getRequestUrl",
    value: function getRequestUrl() {
      var path = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      var params = arguments.length > 1 ? arguments[1] : undefined;
      var searchParams = this.getSearchParams(params);
      return [this.apiOrigin, '/api/admin', path, searchParams].filter(Boolean).join('');
    }
  }, {
    key: "configureOptions",
    value: function configureOptions(_ref5) {
      var method = _ref5.method,
          body = _ref5.body,
          fetchOptions = _ref5.fetchOptions;
      return _objectSpread({
        headers: this.configureHeaders(body),
        method: method,
        mode: 'cors',
        body: this.configureBody(body)
      }, fetchOptions);
    }
  }, {
    key: "getResponseContent",
    value: function getResponseContent(response) {
      var contentType = response.headers.get('content-type');

      if (contentType && contentType.startsWith('application/json')) {
        return response.json().catch(function (error) {
          /** empty json body will throw "SyntaxError: Unexpected end of input" */
          if (error instanceof SyntaxError) {
            return response.text();
          } else {
            console.error("Unknown error while parsing response body: ".concat(error.toString()));
          }
        });
      }

      return response.text();
    }
  }, {
    key: "handleErrors",
    value: function handleErrors(response) {
      return this.getResponseContent(response).then(function (content) {
        if (response.ok) {
          return content;
        }

        return Promise.reject(new RequestError({
          code: response.status,
          text: response.statusText
        }, content));
      });
    }
  }, {
    key: "logRequest",
    value: function logRequest(res, options) {
      var formattedLog = "".concat(options.method, " ").concat(res.status, " ").concat(res.url);
      console.log("%c ".concat(formattedLog), 'color: green');
      return res;
    }
  }, {
    key: "makeRequest",
    value: function () {
      var _makeRequest = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(method, _ref6) {
        var _this5 = this;

        var path, body, params, absoluteUrl, fetchOptions, url, options;
        return _regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                path = _ref6.path, body = _ref6.body, params = _ref6.params, absoluteUrl = _ref6.absoluteUrl, fetchOptions = _ref6.fetchOptions;
                url = absoluteUrl || this.getRequestUrl(path, params);
                options = this.configureOptions({
                  method: method,
                  body: body,
                  fetchOptions: fetchOptions
                });
                return _context.abrupt("return", fetch(url, options).then(function (response) {
                  return _this5.logRequest(response, options);
                }).then(this.handleErrors.bind(this)));

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function makeRequest(_x, _x2) {
        return _makeRequest.apply(this, arguments);
      }

      return makeRequest;
    }()
  }, {
    key: "bindHttpMethod",
    value: function bindHttpMethod(method) {
      return this.makeRequest.bind(this, method);
    }
  }]);

  return ApiService;
}();

var apiService = new ApiService();

function uploadFile(_ref7) {
  var scenario = _ref7.scenario,
      file = _ref7.file,
      onProgress = _ref7.onProgress;
  return new Promise(function (resolve, reject) {
    var request = new XMLHttpRequest();
    request.upload.addEventListener('progress', function (event) {
      if (onProgress) {
        onProgress({
          event: event,
          loaded: event.loaded,
          total: event.total,
          progress: event.loaded / event.total
        });
      }
    });
    request.addEventListener('loadend', function (event) {
      var isOk = request.status >= 200 && request.status < 300;

      if (isOk) {
        try {
          var responseBody = JSON.parse(request.response);
          resolve(responseBody);
        } catch (error) {
          resolve(request.response);
        }
      } else {
        reject(new RequestError({
          code: request.status,
          text: request.statusText
        }, request.response));
      }
    });
    var formData = new FormData();
    formData.append('file', file);
    var query = "?scenario=".concat(scenario !== null && scenario !== void 0 ? scenario : 'default');
    request.open('POST', 'https://presetbox.dev.ozitag.com/api/admin/upload' + query);
    var accessToken = apiService.getAccessToken();

    if (accessToken) {
      request.setRequestHeader('Authorization', "Bearer ".concat(accessToken));
    } // request.withCredentials = true;


    request.send(formData);
  });
}

var ConfigService = /*#__PURE__*/function () {
  function ConfigService() {
    _classCallCheck(this, ConfigService);

    this.config = null;
  }

  _createClass(ConfigService, [{
    key: "setConfig",
    value: function setConfig(config) {
      this.config = config;
    }
  }, {
    key: "getConfig",
    value: function getConfig() {
      if (!this.config) {
        throw new Error('You are trying to access config, but it is not defined');
      }

      return this.config;
    }
  }]);

  return ConfigService;
}();

var configService = new ConfigService();
var api = {
  setApiOrigin: function setApiOrigin(origin) {
    return apiService.setApiOrigin(origin);
  },
  get: apiService.bindHttpMethod(HttpMethods.GET),
  post: apiService.bindHttpMethod(HttpMethods.POST),
  put: apiService.bindHttpMethod(HttpMethods.PUT),
  delete: apiService.bindHttpMethod(HttpMethods.DELETE),
  patch: apiService.bindHttpMethod(HttpMethods.PATCH),
  uploadFile: uploadFile
};
var script$4 = Vue.extend({
  name: 'Spinner',
  props: {
    size: {
      type: Number,
      default: 25
    }
  },
  computed: {
    style: function style() {
      return {
        width: this.size,
        height: this.size
      };
    }
  }
});
/* script */

var __vue_script__$4 = script$4;
/* template */

var __vue_render__$4 = function __vue_render__$4() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c("svg", {
    staticClass: "spinner",
    style: _vm.style,
    attrs: {
      viewBox: "0 0 50 50",
      "data-spinner": ""
    }
  }, [_c("circle", {
    staticClass: "path",
    attrs: {
      cx: "25",
      cy: "25",
      r: "20",
      fill: "none",
      "stroke-width": "5"
    }
  })]);
};

var __vue_staticRenderFns__$4 = [];
__vue_render__$4._withStripped = true;
/* style */

var __vue_inject_styles__$4 = function __vue_inject_styles__$4(inject) {
  if (!inject) return;
  inject("data-v-343b9a0c_0", {
    source: ".spinner[data-v-343b9a0c] {\n  animation: rotate-data-v-343b9a0c 2s linear infinite;\n  z-index: 2;\n}\n.spinner .path[data-v-343b9a0c] {\n  stroke: currentColor;\n  stroke-linecap: round;\n  animation: dash-data-v-343b9a0c 1.5s ease-in-out infinite;\n}\n@keyframes rotate-data-v-343b9a0c {\n100% {\n    transform: rotate(360deg);\n}\n}\n@keyframes dash-data-v-343b9a0c {\n0% {\n    stroke-dasharray: 1, 150;\n    stroke-dashoffset: 0;\n}\n50% {\n    stroke-dasharray: 90, 150;\n    stroke-dashoffset: -35;\n}\n100% {\n    stroke-dasharray: 90, 150;\n    stroke-dashoffset: -124;\n}\n}\n\n/*# sourceMappingURL=Spinner.vue.map */",
    map: {
      "version": 3,
      "sources": ["D:\\Work\\presetbox\\admin-core\\src\\components\\Spinner.vue", "Spinner.vue"],
      "names": [],
      "mappings": "AA6BA;EACA,oDAAA;EACA,UAAA;AC5BA;AD8BA;EACA,oBAAA;EACA,qBAAA;EACA,yDAAA;AC5BA;ADgCA;AACA;IACA,yBAAA;AC7BE;AACF;ADgCA;AACA;IACA,wBAAA;IACA,oBAAA;AC9BE;ADgCF;IACA,yBAAA;IACA,sBAAA;AC9BE;ADgCF;IACA,yBAAA;IACA,uBAAA;AC9BE;AACF;;AAEA,sCAAsC",
      "file": "Spinner.vue",
      "sourcesContent": ["<template>\n  <svg class=\"spinner\" viewBox=\"0 0 50 50\" v-bind:style=\"style\" data-spinner>\n    <circle class=\"path\" cx=\"25\" cy=\"25\" r=\"20\" fill=\"none\" stroke-width=\"5\" />\n  </svg>\n</template>\n\n<script lang=\"js\">\nimport Vue from 'vue';\n\nexport default Vue.extend({\n  name: 'Spinner',\n  props: {\n    size: {\n      type: Number,\n      default: 25\n    }\n  },\n  computed: {\n    style() {\n      return {\n        width: this.size,\n        height: this.size\n      };\n    }\n  }\n});\n</script>\n\n<style scoped lang=\"scss\">\n.spinner {\n  animation: rotate 2s linear infinite;\n  z-index: 2;\n\n  & .path {\n    stroke: currentColor;\n    stroke-linecap: round;\n    animation: dash 1.5s ease-in-out infinite;\n  }\n}\n\n@keyframes rotate {\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes dash {\n  0% {\n    stroke-dasharray: 1, 150;\n    stroke-dashoffset: 0;\n  }\n  50% {\n    stroke-dasharray: 90, 150;\n    stroke-dashoffset: -35;\n  }\n  100% {\n    stroke-dasharray: 90, 150;\n    stroke-dashoffset: -124;\n  }\n}\n</style>\n", ".spinner {\n  animation: rotate 2s linear infinite;\n  z-index: 2;\n}\n.spinner .path {\n  stroke: currentColor;\n  stroke-linecap: round;\n  animation: dash 1.5s ease-in-out infinite;\n}\n\n@keyframes rotate {\n  100% {\n    transform: rotate(360deg);\n  }\n}\n@keyframes dash {\n  0% {\n    stroke-dasharray: 1, 150;\n    stroke-dashoffset: 0;\n  }\n  50% {\n    stroke-dasharray: 90, 150;\n    stroke-dashoffset: -35;\n  }\n  100% {\n    stroke-dasharray: 90, 150;\n    stroke-dashoffset: -124;\n  }\n}\n\n/*# sourceMappingURL=Spinner.vue.map */"]
    },
    media: undefined
  });
};
/* scoped */


var __vue_scope_id__$4 = "data-v-343b9a0c";
/* module identifier */

var __vue_module_identifier__$4 = undefined;
/* functional template */

var __vue_is_functional_template__$4 = false;
/* style inject SSR */

/* style inject shadow dom */

var __vue_component__$4 = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$4,
  staticRenderFns: __vue_staticRenderFns__$4
}, __vue_inject_styles__$4, __vue_script__$4, __vue_scope_id__$4, __vue_is_functional_template__$4, __vue_module_identifier__$4, false, createInjector, undefined, undefined);

var script$5 = Vue.extend({
  components: {
    Spinner: __vue_component__$4
  },
  props: {
    variant: {
      type: String,
      validator: function validator(value) {
        return ['outline-primary', 'outline-secondary', 'icon'].includes(value);
      }
    },
    type: {
      type: String,
      default: 'button'
    },
    disabled: Boolean,
    loading: Boolean
  }
});
/* script */

var __vue_script__$5 = script$5;
/* template */

var __vue_render__$5 = function __vue_render__$5() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c("button", {
    class: ["button", _vm.variant, {
      loading: _vm.loading
    }],
    attrs: {
      type: _vm.type,
      disabled: _vm.disabled || _vm.loading
    },
    on: {
      click: function click($event) {
        return _vm.$emit("click", $event);
      }
    }
  }, [_vm.loading ? _c("span", {
    staticClass: "spinner-wrapper"
  }, [_c("spinner", {
    staticClass: "button-spinner",
    attrs: {
      size: "28"
    }
  })], 1) : _vm._e(), _vm._v(" "), _vm._t("default", [_vm._v("Submit")])], 2);
};

var __vue_staticRenderFns__$5 = [];
__vue_render__$5._withStripped = true;
/* style */

var __vue_inject_styles__$5 = function __vue_inject_styles__$5(inject) {
  if (!inject) return;
  inject("data-v-55cb7887_0", {
    source: ".button[data-v-55cb7887] {\n  position: relative;\n  display: inline-block;\n  font-weight: 400;\n  color: #212529;\n  text-align: center;\n  vertical-align: middle;\n  user-select: none;\n  background-color: transparent;\n  border: 1px solid transparent;\n  padding: 0.375rem 0.75rem;\n  font-size: 1rem;\n  line-height: 1.5;\n  border-radius: 0.25rem;\n  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n  cursor: pointer;\n}\n.button[data-v-55cb7887]:disabled {\n  cursor: not-allowed;\n}\n.button.loading[data-v-55cb7887] {\n  color: transparent;\n  cursor: wait;\n}\n.spinner-wrapper[data-v-55cb7887] {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  background-color: white;\n  border-radius: 0.25rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.spinner-wrapper .button-spinner[data-v-55cb7887] {\n  display: block;\n}\n.outline-primary[data-v-55cb7887] {\n  color: var(--primary);\n  border-color: var(--primary);\n}\n.outline-primary[data-v-55cb7887]:hover {\n  background-color: var(--primary);\n  color: white;\n}\n.outline-secondary[data-v-55cb7887] {\n  color: var(--secondary);\n  border-color: var(--secondary);\n}\n.outline-secondary .button-spinner[data-v-55cb7887] {\n  color: var(--secondary);\n}\n.outline-secondary[data-v-55cb7887]:not(:disabled):hover, .outline-secondary[data-v-55cb7887]:not(:disabled):active {\n  background-color: var(--secondary);\n  color: white;\n}\n.outline-secondary:not(:disabled):hover .button-spinner[data-v-55cb7887], .outline-secondary:not(:disabled):active .button-spinner[data-v-55cb7887] {\n  color: white;\n}\n.outline-secondary[data-v-55cb7887]:focus {\n  box-shadow: 0 0 0 0.2rem rgba(11, 37, 37, 0.4);\n}\n.icon[data-v-55cb7887] {\n  padding: 0.375rem;\n  border-radius: 50%;\n  color: var(--secondary);\n}\n.icon svg[data-v-55cb7887] {\n  display: block;\n  fill: currentColor;\n  transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;\n}\n.icon[data-v-55cb7887]:not(:disabled):hover {\n  background-color: rgba(0, 0, 0, 0.1);\n}\n.icon[data-v-55cb7887]:disabled {\n  background-color: rgba(0, 0, 0, 0.08);\n}\n\n/*# sourceMappingURL=Button.vue.map */",
    map: {
      "version": 3,
      "sources": ["D:\\Work\\presetbox\\admin-core\\src\\components\\Button.vue", "Button.vue"],
      "names": [],
      "mappings": "AAuCA;EACA,kBAAA;EACA,qBAAA;EACA,gBAAA;EACA,cAAA;EACA,kBAAA;EACA,sBAAA;EACA,iBAAA;EACA,6BAAA;EACA,6BAAA;EACA,yBAAA;EACA,eAAA;EACA,gBAAA;EACA,sBAAA;EACA,qIAAA;EAEA,eAAA;ACvCA;ADyCA;EACA,mBAAA;ACvCA;AD0CA;EACA,kBAAA;EACA,YAAA;ACxCA;AD4CA;EACA,kBAAA;EACA,MAAA;EACA,QAAA;EACA,SAAA;EACA,OAAA;EACA,uBAAA;EACA,sBAAA;EAEA,aAAA;EACA,mBAAA;EACA,uBAAA;AC1CA;AD4CA;EACA,cAAA;AC1CA;AD8CA;EACA,qBAAA;EACA,4BAAA;AC3CA;AD6CA;EACA,gCAAA;EACA,YAAA;AC3CA;AD+CA;EACA,uBAAA;EACA,8BAAA;AC5CA;AD8CA;EACA,uBAAA;AC5CA;AD+CA;EAEA,kCAAA;EACA,YAAA;AC9CA;ADgDA;EACA,YAAA;AC9CA;ADkDA;EACA,8CAAA;AChDA;ADoDA;EACA,iBAAA;EACA,kBAAA;EACA,uBAAA;ACjDA;ADmDA;EACA,cAAA;EACA,kBAAA;EACA,uDAAA;ACjDA;ADoDA;EACA,oCAAA;AClDA;ADqDA;EACA,qCAAA;ACnDA;;AAEA,qCAAqC",
      "file": "Button.vue",
      "sourcesContent": ["<template>\n  <button\n    v-bind:class=\"['button', variant, { loading: loading }]\"\n    v-bind:type=\"type\"\n    v-on:click=\"$emit('click', $event)\"\n    v-bind:disabled=\"disabled || loading\"\n  >\n    <span class=\"spinner-wrapper\" v-if=\"loading\">\n      <spinner class=\"button-spinner\" size=\"28\" />\n    </span>\n\n    <slot>Submit</slot>\n  </button>\n</template>\n\n<script lang=\"js\">\nimport Vue from 'vue';\nimport Spinner from '@/components/Spinner.vue';\n\nexport default Vue.extend({\n  components: { Spinner },\n  props: {\n    variant: {\n      type: String,\n      validator(value) {\n        return ['outline-primary', 'outline-secondary', 'icon'].includes(value);\n      }\n    },\n    type: {\n      type: String,\n      default: 'button'\n    },\n    disabled: Boolean,\n    loading: Boolean\n  }\n});\n</script>\n\n<style scoped lang=\"scss\">\n.button {\n  position: relative;\n  display: inline-block;\n  font-weight: 400;\n  color: #212529;\n  text-align: center;\n  vertical-align: middle;\n  user-select: none;\n  background-color: transparent;\n  border: 1px solid transparent;\n  padding: 0.375rem 0.75rem;\n  font-size: 1rem;\n  line-height: 1.5;\n  border-radius: 0.25rem;\n  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,\n    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n  cursor: pointer;\n\n  &:disabled {\n    cursor: not-allowed;\n  }\n\n  &.loading {\n    color: transparent;\n    cursor: wait;\n  }\n}\n\n.spinner-wrapper {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  background-color: white;\n  border-radius: 0.25rem;\n\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  .button-spinner {\n    display: block;\n  }\n}\n\n.outline-primary {\n  color: var(--primary);\n  border-color: var(--primary);\n\n  &:hover {\n    background-color: var(--primary);\n    color: white;\n  }\n}\n\n.outline-secondary {\n  color: var(--secondary);\n  border-color: var(--secondary);\n\n  .button-spinner {\n    color: var(--secondary);\n  }\n\n  &:not(:disabled):hover,\n  &:not(:disabled):active {\n    background-color: var(--secondary);\n    color: white;\n\n    .button-spinner {\n      color: white;\n    }\n  }\n\n  &:focus {\n    box-shadow: 0 0 0 0.2rem rgba(11, 37, 37, 0.4);\n  }\n}\n\n.icon {\n  padding: 0.375rem;\n  border-radius: 50%;\n  color: var(--secondary);\n\n  svg {\n    display: block;\n    fill: currentColor;\n    transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;\n  }\n\n  &:not(:disabled):hover {\n    background-color: rgba(0, 0, 0, 0.1);\n  }\n\n  &:disabled {\n    background-color: rgba(0, 0, 0, 0.08);\n  }\n}\n</style>\n", ".button {\n  position: relative;\n  display: inline-block;\n  font-weight: 400;\n  color: #212529;\n  text-align: center;\n  vertical-align: middle;\n  user-select: none;\n  background-color: transparent;\n  border: 1px solid transparent;\n  padding: 0.375rem 0.75rem;\n  font-size: 1rem;\n  line-height: 1.5;\n  border-radius: 0.25rem;\n  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n  cursor: pointer;\n}\n.button:disabled {\n  cursor: not-allowed;\n}\n.button.loading {\n  color: transparent;\n  cursor: wait;\n}\n\n.spinner-wrapper {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  background-color: white;\n  border-radius: 0.25rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.spinner-wrapper .button-spinner {\n  display: block;\n}\n\n.outline-primary {\n  color: var(--primary);\n  border-color: var(--primary);\n}\n.outline-primary:hover {\n  background-color: var(--primary);\n  color: white;\n}\n\n.outline-secondary {\n  color: var(--secondary);\n  border-color: var(--secondary);\n}\n.outline-secondary .button-spinner {\n  color: var(--secondary);\n}\n.outline-secondary:not(:disabled):hover, .outline-secondary:not(:disabled):active {\n  background-color: var(--secondary);\n  color: white;\n}\n.outline-secondary:not(:disabled):hover .button-spinner, .outline-secondary:not(:disabled):active .button-spinner {\n  color: white;\n}\n.outline-secondary:focus {\n  box-shadow: 0 0 0 0.2rem rgba(11, 37, 37, 0.4);\n}\n\n.icon {\n  padding: 0.375rem;\n  border-radius: 50%;\n  color: var(--secondary);\n}\n.icon svg {\n  display: block;\n  fill: currentColor;\n  transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;\n}\n.icon:not(:disabled):hover {\n  background-color: rgba(0, 0, 0, 0.1);\n}\n.icon:disabled {\n  background-color: rgba(0, 0, 0, 0.08);\n}\n\n/*# sourceMappingURL=Button.vue.map */"]
    },
    media: undefined
  });
};
/* scoped */


var __vue_scope_id__$5 = "data-v-55cb7887";
/* module identifier */

var __vue_module_identifier__$5 = undefined;
/* functional template */

var __vue_is_functional_template__$5 = false;
/* style inject SSR */

/* style inject shadow dom */

var __vue_component__$5 = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$5,
  staticRenderFns: __vue_staticRenderFns__$5
}, __vue_inject_styles__$5, __vue_script__$5, __vue_scope_id__$5, __vue_is_functional_template__$5, __vue_module_identifier__$5, false, createInjector, undefined, undefined);

function signOut() {
  return api.post({
    path: '/self/logout'
  });
}

var script$6 = Vue.extend({
  components: {
    SvgIcon: __vue_component__,
    'base-button': __vue_component__$5
  },
  props: {
    isSidebarCollapsed: Boolean,
    userName: String
  },
  data: function data() {
    return {
      isSignOutInProgress: false
    };
  },
  computed: {
    breadcrumbList: function breadcrumbList() {
      var _this$$route;

      var routeMeta = (_this$$route = this.$route) === null || _this$$route === void 0 ? void 0 : _this$$route.meta;
      return (routeMeta === null || routeMeta === void 0 ? void 0 : routeMeta.getBreadcrumbs) ? routeMeta.getBreadcrumbs(this.$route) : [];
    }
  },
  methods: {
    logout: function logout() {
      var _this6 = this;

      var handleError = function handleError() {
        _this6.$toast({
          variant: 'danger',
          title: 'Error',
          body: 'Server error'
        });

        _this6.isSignOutInProgress = false;
      };

      this.isSignOutInProgress = true;
      signOut().then(function (response) {
        if (response.success) {
          localStorage.removeItem('accessToken');
          window.location.href = '/admin/auth';
        } else {
          handleError();
        }
      }).catch(function (error) {
        console.error(error);

        if (error instanceof RequestError && error.status.code === 401) {
          window.location.href = '/admin/auth';
        } else {
          handleError();
        }
      });
    },
    toggleSidebar: function toggleSidebar() {
      this.$emit('sidebar:toggle');
    }
  }
});
/* script */

var __vue_script__$6 = script$6;
/* template */

var __vue_render__$6 = function __vue_render__$6() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c("div", {
    class: ["navbar", {
      "sidebar-collapsed": _vm.isSidebarCollapsed
    }]
  }, [_c("div", {
    staticClass: "navbar-inner"
  }, [_c("div", {
    staticClass: "left-block"
  }, [_c("base-button", {
    attrs: {
      variant: "icon"
    },
    on: {
      click: _vm.toggleSidebar
    }
  }, [_c("svg-icon", {
    attrs: {
      name: "menu"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "breadcrumbs"
  }, [_c("ul", _vm._l(_vm.breadcrumbList, function (breadcrumb, index) {
    return _c("li", {
      key: index
    }, [_c("router-link", {
      attrs: {
        exact: "",
        "active-class": "active",
        to: breadcrumb.path
      }
    }, [_vm._v("\n              " + _vm._s(breadcrumb.label) + "\n            ")]), _vm._v(" "), _c("svg-icon", {
      attrs: {
        name: "chevronRight"
      }
    })], 1);
  }), 0)])], 1), _vm._v(" "), _c("div", [_c("span", {
    staticClass: "user-name"
  }, [_vm._v(_vm._s(_vm.userName))]), _vm._v(" "), _c("base-button", {
    attrs: {
      variant: "outline-secondary",
      loading: _vm.isSignOutInProgress
    },
    on: {
      click: _vm.logout
    }
  }, [_vm._v("\n        " + _vm._s(_vm.$t("logout")) + "\n      ")])], 1)])]);
};

var __vue_staticRenderFns__$6 = [];
__vue_render__$6._withStripped = true;
/* style */

var __vue_inject_styles__$6 = function __vue_inject_styles__$6(inject) {
  if (!inject) return;
  inject("data-v-5fbf0fd8_0", {
    source: ".navbar[data-v-5fbf0fd8] {\n  background-color: #fff;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.0625);\n  display: block;\n  margin-bottom: 0;\n  padding: 0;\n  position: fixed;\n  transition: width 0.3s linear;\n  width: calc(100% - 280px);\n  z-index: 800;\n}\n.navbar.sidebar-collapsed[data-v-5fbf0fd8] {\n  width: calc(100% - 70px);\n}\n.navbar-inner[data-v-5fbf0fd8] {\n  height: 65px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0 20px;\n}\n.left-block[data-v-5fbf0fd8] {\n  display: flex;\n  align-items: center;\n}\n.breadcrumbs[data-v-5fbf0fd8] {\n  margin-left: 2rem;\n}\n.breadcrumbs ul[data-v-5fbf0fd8] {\n  display: flex;\n}\n.breadcrumbs li[data-v-5fbf0fd8] {\n  display: inline-flex;\n  align-items: center;\n  line-height: 1.5rem;\n}\n.breadcrumbs li a[data-v-5fbf0fd8]:hover:not(.active) {\n  text-decoration: underline;\n}\n.breadcrumbs li a.active[data-v-5fbf0fd8] {\n  cursor: default;\n}\n.breadcrumbs li:last-child svg[data-v-5fbf0fd8] {\n  display: none;\n}\n.breadcrumbs li svg[data-v-5fbf0fd8] {\n  margin: 0 0.3rem;\n}\n.user-name[data-v-5fbf0fd8] {\n  font-weight: 600;\n  margin-right: 2rem;\n}\n\n/*# sourceMappingURL=NavBar.vue.map */",
    map: {
      "version": 3,
      "sources": ["D:\\Work\\presetbox\\admin-core\\src\\components\\NavBar.vue", "NavBar.vue"],
      "names": [],
      "mappings": "AA+GA;EACA,sBAAA;EACA,8CAAA;EACA,cAAA;EACA,gBAAA;EACA,UAAA;EACA,eAAA;EACA,6BAAA;EACA,yBAAA;EACA,YAAA;AC9GA;ADgHA;EACA,wBAAA;AC9GA;ADkHA;EACA,YAAA;EACA,aAAA;EACA,mBAAA;EACA,8BAAA;EACA,eAAA;AC/GA;ADkHA;EACA,aAAA;EACA,mBAAA;AC/GA;ADkHA;EACA,iBAAA;AC/GA;ADiHA;EACA,aAAA;AC/GA;ADkHA;EACA,oBAAA;EACA,mBAAA;EACA,mBAAA;AChHA;ADmHA;EACA,0BAAA;ACjHA;ADoHA;EACA,eAAA;AClHA;ADuHA;EACA,aAAA;ACrHA;ADyHA;EACA,gBAAA;ACvHA;AD4HA;EACA,gBAAA;EACA,kBAAA;ACzHA;;AAEA,qCAAqC",
      "file": "NavBar.vue",
      "sourcesContent": ["<template>\n  <div v-bind:class=\"['navbar', { 'sidebar-collapsed': isSidebarCollapsed }]\">\n    <div class=\"navbar-inner\">\n      <div class=\"left-block\">\n        <base-button variant=\"icon\" v-on:click=\"toggleSidebar\">\n          <svg-icon name=\"menu\" />\n        </base-button>\n\n        <div class=\"breadcrumbs\">\n          <ul>\n            <li\n              v-for=\"(breadcrumb, index) of breadcrumbList\"\n              v-bind:key=\"index\"\n            >\n              <router-link\n                exact\n                active-class=\"active\"\n                v-bind:to=\"breadcrumb.path\"\n              >\n                {{ breadcrumb.label }}\n              </router-link>\n              <svg-icon name=\"chevronRight\" />\n            </li>\n          </ul>\n        </div>\n      </div>\n\n      <div>\n        <span class=\"user-name\">{{ userName }}</span>\n        <base-button\n          variant=\"outline-secondary\"\n          v-on:click=\"logout\"\n          v-bind:loading=\"isSignOutInProgress\"\n        >\n          {{ $t('logout') }}\n        </base-button>\n      </div>\n    </div>\n  </div>\n</template>\n\n<script lang=\"js\">\nimport Vue from 'vue';\n\nimport { api, RequestError } from '@/services';\nimport Button from '@/components/Button.vue';\nimport SvgIcon from '@/components/SvgIcon.vue';\n\nfunction signOut() {\n  return api.post({ path: '/self/logout' });\n}\n\nexport default Vue.extend({\n  components: { SvgIcon, 'base-button': Button },\n  props: {\n    isSidebarCollapsed: Boolean,\n    userName: String\n  },\n  data() {\n    return {\n      isSignOutInProgress: false\n    };\n  },\n  computed: {\n    breadcrumbList() {\n      const routeMeta = this.$route?.meta;\n      return routeMeta?.getBreadcrumbs\n        ? routeMeta.getBreadcrumbs(this.$route)\n        : [];\n    }\n  },\n  methods: {\n    logout() {\n      const handleError = () => {\n        this.$toast({\n          variant: 'danger',\n          title: 'Error',\n          body: 'Server error'\n        });\n        this.isSignOutInProgress = false;\n      };\n\n      this.isSignOutInProgress = true;\n\n      signOut()\n        .then(response => {\n          if (response.success) {\n            localStorage.removeItem('accessToken');\n            window.location.href = '/admin/auth';\n          } else {\n            handleError();\n          }\n        })\n        .catch(error => {\n          console.error(error);\n\n          if (error instanceof RequestError && error.status.code === 401) {\n            window.location.href = '/admin/auth';\n          } else {\n            handleError();\n          }\n        });\n    },\n    toggleSidebar() {\n      this.$emit('sidebar:toggle');\n    }\n  }\n});\n</script>\n\n<style scoped lang=\"scss\">\n.navbar {\n  background-color: #fff;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.0625);\n  display: block;\n  margin-bottom: 0;\n  padding: 0;\n  position: fixed;\n  transition: width 0.3s linear;\n  width: calc(100% - 280px);\n  z-index: 800;\n\n  &.sidebar-collapsed {\n    width: calc(100% - 70px);\n  }\n}\n\n.navbar-inner {\n  height: 65px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0 20px;\n}\n\n.left-block {\n  display: flex;\n  align-items: center;\n}\n\n.breadcrumbs {\n  margin-left: 2rem;\n\n  ul {\n    display: flex;\n  }\n\n  li {\n    display: inline-flex;\n    align-items: center;\n    line-height: 1.5rem;\n\n    a {\n      &:hover:not(.active) {\n        text-decoration: underline;\n      }\n\n      &.active {\n        cursor: default;\n      }\n    }\n\n    &:last-child {\n      svg {\n        display: none;\n      }\n    }\n\n    svg {\n      margin: 0 0.3rem;\n    }\n  }\n}\n\n.user-name {\n  font-weight: 600;\n  margin-right: 2rem;\n}\n</style>\n", ".navbar {\n  background-color: #fff;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.0625);\n  display: block;\n  margin-bottom: 0;\n  padding: 0;\n  position: fixed;\n  transition: width 0.3s linear;\n  width: calc(100% - 280px);\n  z-index: 800;\n}\n.navbar.sidebar-collapsed {\n  width: calc(100% - 70px);\n}\n\n.navbar-inner {\n  height: 65px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0 20px;\n}\n\n.left-block {\n  display: flex;\n  align-items: center;\n}\n\n.breadcrumbs {\n  margin-left: 2rem;\n}\n.breadcrumbs ul {\n  display: flex;\n}\n.breadcrumbs li {\n  display: inline-flex;\n  align-items: center;\n  line-height: 1.5rem;\n}\n.breadcrumbs li a:hover:not(.active) {\n  text-decoration: underline;\n}\n.breadcrumbs li a.active {\n  cursor: default;\n}\n.breadcrumbs li:last-child svg {\n  display: none;\n}\n.breadcrumbs li svg {\n  margin: 0 0.3rem;\n}\n\n.user-name {\n  font-weight: 600;\n  margin-right: 2rem;\n}\n\n/*# sourceMappingURL=NavBar.vue.map */"]
    },
    media: undefined
  });
};
/* scoped */


var __vue_scope_id__$6 = "data-v-5fbf0fd8";
/* module identifier */

var __vue_module_identifier__$6 = undefined;
/* functional template */

var __vue_is_functional_template__$6 = false;
/* style inject SSR */

/* style inject shadow dom */

var __vue_component__$6 = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$6,
  staticRenderFns: __vue_staticRenderFns__$6
}, __vue_inject_styles__$6, __vue_script__$6, __vue_scope_id__$6, __vue_is_functional_template__$6, __vue_module_identifier__$6, false, createInjector, undefined, undefined);

var script$7 = Vue.extend({
  name: 'SplashScreen',
  props: {
    brandConfig: {
      type: Object,
      required: true
    }
  },
  computed: {
    logoUrl: function logoUrl() {
      return this.brandConfig.small['logo-ext'] ? BASE_PATH + '/logo-small.' + this.brandConfig.small['logo-ext'] : '';
    }
  }
});
/* script */

var __vue_script__$7 = script$7;
/* template */

var __vue_render__$7 = function __vue_render__$7() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c("div", {
    staticClass: "spin-wrapper"
  }, [Boolean(_vm.logoUrl) ? _c("img", {
    attrs: {
      src: _vm.logoUrl
    }
  }) : _vm._e(), _vm._v(" "), _c("div", {
    staticClass: "spinner"
  })]);
};

var __vue_staticRenderFns__$7 = [];
__vue_render__$7._withStripped = true;
/* style */

var __vue_inject_styles__$7 = function __vue_inject_styles__$7(inject) {
  if (!inject) return;
  inject("data-v-a5fc4a12_0", {
    source: ".spin-wrapper[data-v-a5fc4a12] {\n  position: relative;\n  width: 100%;\n  height: 100vh;\n  background: #1e1e1e;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.spin-wrapper img[data-v-a5fc4a12] {\n  width: 120px;\n}\n.spin-wrapper .spinner[data-v-a5fc4a12] {\n  position: absolute;\n  width: 290px;\n  height: 290px;\n  border-radius: 50%;\n  border: 3px solid transparent;\n  border-top-color: #00b8d4;\n  animation: spin-data-v-a5fc4a12 3s linear infinite;\n}\n.spin-wrapper .spinner[data-v-a5fc4a12]:before {\n  content: \"\";\n  position: absolute;\n  top: 20px;\n  left: 20px;\n  right: 20px;\n  bottom: 20px;\n  border-radius: 50%;\n  border: 3px solid transparent;\n  border-top-color: #ff5252;\n  animation: spin-reverse-data-v-a5fc4a12 1.1s linear infinite;\n}\n.spin-wrapper .spinner[data-v-a5fc4a12]:after {\n  content: \"\";\n  position: absolute;\n  top: 45px;\n  left: 45px;\n  right: 45px;\n  bottom: 45px;\n  border-radius: 50%;\n  border: 3px solid transparent;\n  border-top-color: #faf49a;\n  animation: spin-data-v-a5fc4a12 2s linear infinite;\n}\n@keyframes spin-data-v-a5fc4a12 {\n0% {\n    transform: rotate(0deg);\n}\n100% {\n    transform: rotate(360deg);\n}\n}\n@keyframes spin-reverse-data-v-a5fc4a12 {\n0% {\n    transform: rotate(0deg);\n}\n100% {\n    transform: rotate(-360deg);\n}\n}\n\n/*# sourceMappingURL=SplashScreen.vue.map */",
    map: {
      "version": 3,
      "sources": ["D:\\Work\\presetbox\\admin-core\\src\\components\\SplashScreen.vue", "SplashScreen.vue"],
      "names": [],
      "mappings": "AA8BA;EACA,kBAAA;EACA,WAAA;EACA,aAAA;EACA,mBAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;AC7BA;AD+BA;EACA,YAAA;AC7BA;ADgCA;EACA,kBAAA;EACA,YAAA;EACA,aAAA;EACA,kBAAA;EACA,6BAAA;EACA,yBAAA;EACA,kDAAA;AC9BA;ADgCA;EACA,WAAA;EACA,kBAAA;EACA,SAAA;EACA,UAAA;EACA,WAAA;EACA,YAAA;EACA,kBAAA;EACA,6BAAA;EACA,yBAAA;EACA,4DAAA;AC9BA;ADgCA;EACA,WAAA;EACA,kBAAA;EACA,SAAA;EACA,UAAA;EACA,WAAA;EACA,YAAA;EACA,kBAAA;EACA,6BAAA;EACA,yBAAA;EACA,kDAAA;AC9BA;ADmCA;AACA;IACA,uBAAA;AChCE;ADkCF;IACA,yBAAA;AChCE;AACF;ADkCA;AACA;IACA,uBAAA;AChCE;ADkCF;IACA,0BAAA;AChCE;AACF;;AAEA,2CAA2C",
      "file": "SplashScreen.vue",
      "sourcesContent": ["<template>\n  <div class=\"spin-wrapper\">\n    <img v-if=\"Boolean(logoUrl)\" v-bind:src=\"logoUrl\" />\n    <div class=\"spinner\"></div>\n  </div>\n</template>\n\n<script lang=\"js\">\nimport Vue from 'vue';\nimport { BASE_PATH } from '@/constants/common';\n\nexport default Vue.extend({\n  name: 'SplashScreen',\n  props: {\n    brandConfig: {\n      type: Object,\n      required: true\n    }\n  },\n  computed: {\n    logoUrl() {\n      return this.brandConfig.small['logo-ext']\n        ? BASE_PATH + '/logo-small.' + this.brandConfig.small['logo-ext']\n        : '';\n    }\n  }\n});\n</script>\n\n<style scoped lang=\"scss\">\n.spin-wrapper {\n  position: relative;\n  width: 100%;\n  height: 100vh;\n  background: #1e1e1e;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  img {\n    width: 120px;\n  }\n\n  .spinner {\n    position: absolute;\n    width: 290px;\n    height: 290px;\n    border-radius: 50%;\n    border: 3px solid transparent;\n    border-top-color: #00b8d4;\n    animation: spin 3s linear infinite;\n\n    &:before {\n      content: '';\n      position: absolute;\n      top: 20px;\n      left: 20px;\n      right: 20px;\n      bottom: 20px;\n      border-radius: 50%;\n      border: 3px solid transparent;\n      border-top-color: #ff5252;\n      animation: spin-reverse 1.1s linear infinite;\n    }\n    &:after {\n      content: '';\n      position: absolute;\n      top: 45px;\n      left: 45px;\n      right: 45px;\n      bottom: 45px;\n      border-radius: 50%;\n      border: 3px solid transparent;\n      border-top-color: #faf49a;\n      animation: spin 2s linear infinite;\n    }\n  }\n}\n\n@keyframes spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n@keyframes spin-reverse {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(-360deg);\n  }\n}\n</style>\n", ".spin-wrapper {\n  position: relative;\n  width: 100%;\n  height: 100vh;\n  background: #1e1e1e;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.spin-wrapper img {\n  width: 120px;\n}\n.spin-wrapper .spinner {\n  position: absolute;\n  width: 290px;\n  height: 290px;\n  border-radius: 50%;\n  border: 3px solid transparent;\n  border-top-color: #00b8d4;\n  animation: spin 3s linear infinite;\n}\n.spin-wrapper .spinner:before {\n  content: \"\";\n  position: absolute;\n  top: 20px;\n  left: 20px;\n  right: 20px;\n  bottom: 20px;\n  border-radius: 50%;\n  border: 3px solid transparent;\n  border-top-color: #ff5252;\n  animation: spin-reverse 1.1s linear infinite;\n}\n.spin-wrapper .spinner:after {\n  content: \"\";\n  position: absolute;\n  top: 45px;\n  left: 45px;\n  right: 45px;\n  bottom: 45px;\n  border-radius: 50%;\n  border: 3px solid transparent;\n  border-top-color: #faf49a;\n  animation: spin 2s linear infinite;\n}\n\n@keyframes spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n@keyframes spin-reverse {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(-360deg);\n  }\n}\n\n/*# sourceMappingURL=SplashScreen.vue.map */"]
    },
    media: undefined
  });
};
/* scoped */


var __vue_scope_id__$7 = "data-v-a5fc4a12";
/* module identifier */

var __vue_module_identifier__$7 = undefined;
/* functional template */

var __vue_is_functional_template__$7 = false;
/* style inject SSR */

/* style inject shadow dom */

var __vue_component__$7 = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$7,
  staticRenderFns: __vue_staticRenderFns__$7
}, __vue_inject_styles__$7, __vue_script__$7, __vue_scope_id__$7, __vue_is_functional_template__$7, __vue_module_identifier__$7, false, createInjector, undefined, undefined);

var EN = {
  logout: 'Logout',
  pageNotFoundTitle: 'Oops Page Not Found',
  pageNotFoundMessage: 'The page you are looking for does not exist or has been moved.',
  goToHome: 'Go To Home'
};
var RU = {
  logout: 'Выход',
  pageNotFoundTitle: 'Страница не найдена',
  pageNotFoundMessage: 'Страница, которую вы ищете, не существует или была удалена.',
  goToHome: 'Перейти на главную'
};
var LOCALE_MAP = {
  EN: EN,
  RU: RU
};

function t(key, options) {
  var currentLanguage = configService.getConfig().LANGUAGE;

  if (options === null || options === void 0 ? void 0 : options.debug) {
    console.log('%c Translate: ', 'color: green', [currentLanguage, key, LOCALE_MAP[currentLanguage][key]]);
  }

  return LOCALE_MAP[currentLanguage][key];
}

var TranslatePlugin = function TranslatePlugin(VueConstructor) {
  VueConstructor.prototype.$t = t;
  VueConstructor.$t = t;
}; //


function getProfile() {
  return api.get({
    path: '/self'
  });
}

Vue.use(ToastPlugin);
Vue.use(TranslatePlugin);
var script$8 = Vue.extend({
  name: 'BaseLayout',
  components: {
    Sidebar: __vue_component__$3,
    Navbar: __vue_component__$6,
    ToastProvider: __vue_component__$2,
    SplashScreen: __vue_component__$7
  },
  props: {
    sidebarMenuList: {
      type: Array,
      default: function _default() {
        return [];
      }
    }
  },
  data: function data() {
    var isSidebarCollapsed = localStorage.getItem('isSidebarCollapsed') === 'true';
    var config = configService.getConfig();
    return {
      isSidebarCollapsed: isSidebarCollapsed,
      profile: null,
      isLoading: true,
      isSplashScreenEnabled: Boolean(config.IS_SPLASH_SCREEN_ENABLED),
      isTimeoutInProgress: false
    };
  },
  mounted: function mounted() {
    var _this7 = this;

    getProfile().then(function (response) {
      _this7.profile = response.data;
      _this7.isLoading = false;
    }).catch(function (error) {
      console.error(error);

      _this7.$toast({
        variant: 'danger',
        title: 'Error',
        body: 'Server error'
      });
    });

    if (this.isSplashScreenEnabled) {
      this.isTimeoutInProgress = true;
      setTimeout(function () {
        _this7.isTimeoutInProgress = false;
      }, 3000);
    }
  },
  computed: {
    brandConfig: function brandConfig() {
      return configService.getConfig().BRAND;
    },
    userName: function userName() {
      var _this$profile$name, _this$profile;

      return (_this$profile$name = (_this$profile = this.profile) === null || _this$profile === void 0 ? void 0 : _this$profile.name) !== null && _this$profile$name !== void 0 ? _this$profile$name : '';
    },
    isSplashScreenVisible: function isSplashScreenVisible() {
      return this.isSplashScreenEnabled && (this.isTimeoutInProgress || this.isLoading);
    }
  },
  methods: {
    handleSidebarToggle: function handleSidebarToggle() {
      this.isSidebarCollapsed = !this.isSidebarCollapsed;
      localStorage.setItem('isSidebarCollapsed', String(this.isSidebarCollapsed));
    }
  }
});
/* script */

var __vue_script__$8 = script$8;
/* template */

var __vue_render__$8 = function __vue_render__$8() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c("div", [_c("toast-provider"), _vm._v(" "), _c("splash-screen", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.isSplashScreenVisible,
      expression: "isSplashScreenVisible"
    }],
    attrs: {
      "brand-config": _vm.brandConfig
    }
  }), _vm._v(" "), _c("div", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: !_vm.isSplashScreenVisible,
      expression: "!isSplashScreenVisible"
    }]
  }, [_c("sidebar", {
    attrs: {
      "is-collapsed": _vm.isSidebarCollapsed,
      "menu-item-list": _vm.sidebarMenuList,
      "brand-config": _vm.brandConfig
    }
  }), _vm._v(" "), _c("div", {
    class: ["page-container", {
      "sidebar-collapsed": _vm.isSidebarCollapsed
    }]
  }, [_c("navbar", {
    attrs: {
      "is-sidebar-collapsed": _vm.isSidebarCollapsed,
      userName: _vm.userName
    },
    on: {
      "sidebar:toggle": _vm.handleSidebarToggle
    }
  }), _vm._v(" "), _c("main", {
    staticClass: "main"
  }, [_vm._t("default")], 2)], 1)], 1)], 1);
};

var __vue_staticRenderFns__$8 = [];
__vue_render__$8._withStripped = true;
/* style */

var __vue_inject_styles__$8 = function __vue_inject_styles__$8(inject) {
  if (!inject) return;
  inject("data-v-556ae9f9_0", {
    source: ".page-container[data-v-556ae9f9] {\n  position: relative;\n  min-height: 100vh;\n  transition: all 0.3s linear;\n  padding-left: 280px;\n  z-index: 1;\n}\n.page-container.sidebar-collapsed[data-v-556ae9f9] {\n  padding-left: 70px;\n}\n.main[data-v-556ae9f9] {\n  background-color: #f9fafb;\n  min-height: 100vh;\n  padding: 85px 20px 20px;\n  display: flex;\n  flex-direction: column;\n}\n\n/*# sourceMappingURL=BaseLayout.vue.map */",
    map: {
      "version": 3,
      "sources": ["D:\\Work\\presetbox\\admin-core\\src\\components\\BaseLayout.vue", "BaseLayout.vue"],
      "names": [],
      "mappings": "AA0HA;EACA,kBAAA;EACA,iBAAA;EACA,2BAAA;EACA,mBAAA;EACA,UAAA;ACzHA;AD2HA;EACA,kBAAA;ACzHA;AD6HA;EACA,yBAAA;EACA,iBAAA;EACA,uBAAA;EACA,aAAA;EACA,sBAAA;AC1HA;;AAEA,yCAAyC",
      "file": "BaseLayout.vue",
      "sourcesContent": ["<template>\n  <div>\n    <toast-provider />\n\n    <splash-screen\n      v-show=\"isSplashScreenVisible\"\n      v-bind:brand-config=\"brandConfig\"\n    />\n    <div v-show=\"!isSplashScreenVisible\">\n      <sidebar\n        v-bind:is-collapsed=\"isSidebarCollapsed\"\n        v-bind:menu-item-list=\"sidebarMenuList\"\n        v-bind:brand-config=\"brandConfig\"\n      />\n      <div\n        v-bind:class=\"[\n          'page-container',\n          { 'sidebar-collapsed': isSidebarCollapsed }\n        ]\"\n      >\n        <navbar\n          v-on:sidebar:toggle=\"handleSidebarToggle\"\n          v-bind:is-sidebar-collapsed=\"isSidebarCollapsed\"\n          v-bind:userName=\"userName\"\n        ></navbar>\n        <main class=\"main\">\n          <slot></slot>\n        </main>\n      </div>\n    </div>\n  </div>\n</template>\n\n<script>\nimport Vue from 'vue';\n\nimport ToastPlugin, { ToastProvider } from '@/components/Toast';\nimport Sidebar from '@/components/Sidebar.vue';\nimport Navbar from '@/components/NavBar.vue';\nimport SplashScreen from '@/components/SplashScreen.vue';\nimport { api, configStore } from '@/services';\nimport { TranslatePlugin } from '@/i18n';\n\nfunction getProfile() {\n  return api.get({ path: '/self' });\n}\n\nVue.use(ToastPlugin);\nVue.use(TranslatePlugin);\n\nexport default Vue.extend({\n  name: 'BaseLayout',\n  components: { Sidebar, Navbar, ToastProvider, SplashScreen },\n  props: {\n    sidebarMenuList: {\n      type: Array,\n      default: () => []\n    }\n  },\n  data() {\n    const isSidebarCollapsed =\n      localStorage.getItem('isSidebarCollapsed') === 'true';\n    const config = configStore.getConfig();\n\n    return {\n      isSidebarCollapsed,\n      profile: null,\n      isLoading: true,\n      isSplashScreenEnabled: Boolean(config.IS_SPLASH_SCREEN_ENABLED),\n      isTimeoutInProgress: false\n    };\n  },\n  mounted() {\n    getProfile()\n      .then(response => {\n        this.profile = response.data;\n        this.isLoading = false;\n      })\n      .catch(error => {\n        console.error(error);\n\n        this.$toast({\n          variant: 'danger',\n          title: 'Error',\n          body: 'Server error'\n        });\n      });\n\n    if (this.isSplashScreenEnabled) {\n      this.isTimeoutInProgress = true;\n      setTimeout(() => {\n        this.isTimeoutInProgress = false;\n      }, 3000);\n    }\n  },\n  computed: {\n    brandConfig() {\n      return configStore.getConfig().BRAND;\n    },\n    userName() {\n      return this.profile?.name ?? '';\n    },\n    isSplashScreenVisible() {\n      return (\n        this.isSplashScreenEnabled &&\n        (this.isTimeoutInProgress || this.isLoading)\n      );\n    }\n  },\n  methods: {\n    handleSidebarToggle() {\n      this.isSidebarCollapsed = !this.isSidebarCollapsed;\n      localStorage.setItem(\n        'isSidebarCollapsed',\n        String(this.isSidebarCollapsed)\n      );\n    }\n  }\n});\n</script>\n\n<style scoped lang=\"scss\">\n.page-container {\n  position: relative;\n  min-height: 100vh;\n  transition: all 0.3s linear;\n  padding-left: 280px;\n  z-index: 1;\n\n  &.sidebar-collapsed {\n    padding-left: 70px;\n  }\n}\n\n.main {\n  background-color: #f9fafb;\n  min-height: 100vh;\n  padding: 85px 20px 20px;\n  display: flex;\n  flex-direction: column;\n}\n</style>\n", ".page-container {\n  position: relative;\n  min-height: 100vh;\n  transition: all 0.3s linear;\n  padding-left: 280px;\n  z-index: 1;\n}\n.page-container.sidebar-collapsed {\n  padding-left: 70px;\n}\n\n.main {\n  background-color: #f9fafb;\n  min-height: 100vh;\n  padding: 85px 20px 20px;\n  display: flex;\n  flex-direction: column;\n}\n\n/*# sourceMappingURL=BaseLayout.vue.map */"]
    },
    media: undefined
  });
};
/* scoped */


var __vue_scope_id__$8 = "data-v-556ae9f9";
/* module identifier */

var __vue_module_identifier__$8 = undefined;
/* functional template */

var __vue_is_functional_template__$8 = false;
/* style inject SSR */

/* style inject shadow dom */

var __vue_component__$8 = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$8,
  staticRenderFns: __vue_staticRenderFns__$8
}, __vue_inject_styles__$8, __vue_script__$8, __vue_scope_id__$8, __vue_is_functional_template__$8, __vue_module_identifier__$8, false, createInjector, undefined, undefined);

export { BASE_PATH, __vue_component__$8 as BaseLayout, RequestError, api, configService as configStore };
