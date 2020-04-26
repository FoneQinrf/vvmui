(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vue"));
	else if(typeof define === 'function' && define.amd)
		define(["vue"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("vue")) : factory(root["Vue"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE_29__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 216);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file.
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = injectStyles
  }

  if (hook) {
    var functional = options.functional
    var existing = functional
      ? options.render
      : options.beforeCreate

    if (!functional) {
      // inject component registration as beforeCreate hook
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    } else {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return existing(h, context)
      }
    }
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ 10:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index__ = __webpack_require__(7);




/* harmony default export */ __webpack_exports__["a"] = ({
  methods: {
    dispatch: function dispatch(componentName, eventName, params, parent) {
      parent = Object(__WEBPACK_IMPORTED_MODULE_0__index__["c" /* parentComponent */])(this, componentName);
      if (!parent) {
        return;
      }
      parent.itemVal = params;
      parent.eventName = eventName;
      parent.validator(eventName, params);
    }
  }
});

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return onTouchstart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return onTouchmove; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return onTouchend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return on; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return off; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);



var isServer = __WEBPACK_IMPORTED_MODULE_0_vue___default.a.prototype.$isServer;

var onTouchstart = function () {
    if (!isServer && document.addEventListener) {
        return function (element, callback) {
            element.addEventListener('touchstart', callback, false);
            element.addEventListener('mousedown', callback, false);
        };
    }
}();

var onTouchmove = function () {
    if (!isServer && document.addEventListener) {
        return function (element, callback) {
            element.addEventListener('touchmove', callback, false);
            element.addEventListener('mousemove', callback, false);
        };
    }
}();

var onTouchend = function () {
    if (!isServer && document.addEventListener) {
        return function (element, callback) {
            element.addEventListener('touchend', callback, false);
            element.addEventListener('mouseup', callback, false);
        };
    }
}();

var on = function () {
    if (!isServer && document.addEventListener) {
        return function (element, event, callback) {
            element.addEventListener(event, callback, false);
        };
    }
    return function (element, event, handler) {
        element.attachEvent('on' + event, handler);
    };
}();

var off = function () {
    if (!isServer && document.removeEventListener) {
        return function (element, event, callback) {
            element.removeEventListener(event, callback, false);
        };
    }
    return function (element, event, handler) {
        element.removeEventListener('on' + event, handler);
    };
}();

/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      ref: "ref",
      staticClass: "vvm-PickerColumn-wrp",
      style: _vm.PickerHeight
    },
    [
      _c(
        "ul",
        { staticClass: "vvm-PickerColumn-group", style: _vm.styleY },
        _vm._l(_vm.options, function(item, $index) {
          return _c(
            "li",
            {
              key: $index,
              class: [
                "vvm-PickerColumn-label",
                { "vvm-text-color-default": $index === _vm.curreIndex }
              ],
              style: _vm.style
            },
            [
              _c("span", { staticClass: "vvm-ellipsis" }, [
                _vm._v(_vm._s(item[_vm.label] || item))
              ])
            ]
          )
        }),
        0
      ),
      _vm._v(" "),
      _c("i", {
        staticClass: "vvm-PickerColumn-top vvm-hairline-bottom",
        style: _vm.maskHeight
      }),
      _vm._v(" "),
      _c("i", {
        staticClass: "vvm-PickerColumn-bottom vvm-hairline-top",
        style: _vm.maskHeight
      })
    ]
  )
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-21d5ae94", esExports)
  }
}

/***/ }),

/***/ 132:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Modal__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_component_vue__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_mixins__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_emitter__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Icon__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Input__ = __webpack_require__(44);










/* harmony default export */ __webpack_exports__["a"] = ({
  name: "Picker",
  mixins: [__WEBPACK_IMPORTED_MODULE_2__src_mixins__["a" /* default */], __WEBPACK_IMPORTED_MODULE_4__utils_emitter__["a" /* default */]],
  components: {
    Layer: __WEBPACK_IMPORTED_MODULE_0__Modal__["default"],
    vPicker: __WEBPACK_IMPORTED_MODULE_1__src_component_vue__["a" /* default */],
    Icon: __WEBPACK_IMPORTED_MODULE_5__Icon__["default"],
    Input: __WEBPACK_IMPORTED_MODULE_6__Input__["default"]
  },
  data: function data() {
    return {
      LayerVal: false,
      index: [],
      context: "",
      model: this.value
    };
  },

  props: {
    placeholder: {
      type: String,
      default: "请选择"
    },
    confirmText: {
      type: String,
      default: "确认"
    },
    cancelText: {
      type: String,
      default: "取消"
    },
    children: {
      type: String,
      default: "children"
    },
    value: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    keyValue: {
      type: String,
      default: "value"
    },
    disabled: {
      type: Boolean
    },
    rightArrow: Boolean
  },
  methods: {
    change: function change(options) {
      var array = [];
      for (var key in this.$refs) {
        if (Object.prototype.hasOwnProperty.call(this.$refs, key)) {
          if (key > options[0] - 1) {
            this.$refs[key][0].curreIndex = 0;
          }
          array.push(this.$refs[key][0].curreIndex);
        }
      }
      this.index = array;
      var model = this.resetModel();
      this.$emit("on-change", model, this.index);
    },
    resetModel: function resetModel() {
      return Object(__WEBPACK_IMPORTED_MODULE_3__utils__["b" /* initModel */])(this);
    },
    click: function click() {
      if (this.disabled) {
        return;
      }
      this.LayerVal = true;
      this.$emit("on-show");
    },
    onCancel: function onCancel() {
      this.LayerVal = false;
      this.$emit("on-cancel");
    },
    onConfirm: function onConfirm() {
      var model = this.resetModel();
      this.model = model;
      this.$emit("input", model);
      this.$emit("on-confirm", model);
      this.dispatch("From-Item", "change", model);
      this.initPlaceholder();
      this.LayerVal = false;
    },
    initIndex: function initIndex() {
      this.index = Object(__WEBPACK_IMPORTED_MODULE_3__utils__["a" /* initIndex */])(this);
    },
    initPlaceholder: function initPlaceholder() {
      this.context = Object(__WEBPACK_IMPORTED_MODULE_3__utils__["c" /* initPlaceholder */])(this);
    }
  },
  mounted: function mounted() {
    this.initIndex();
    this.initPlaceholder();
  },

  computed: {
    list: function list() {
      var _this = this;

      var array = [];
      if (this.options.length) {
        var init = function init(option, i) {
          if (i < _this.index.length && option) {
            array.push(option);
            init(option[_this.index[i]][_this.children], i + 1);
          }
        };
        init(this.options, 0);
        return array;
      }
      return array;
    }
  },
  watch: {
    value: {
      handler: function handler() {
        this.model = this.value;
        this.initIndex();
        this.initPlaceholder();
      },

      deep: true
    },
    options: function options() {
      this.initIndex();
    }
  }
});

/***/ }),

/***/ 16:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(5);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_11844461_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(17);
var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_11844461_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "packages/components/Icon/index.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-11844461", Component.options)
  } else {
    hotAPI.reload("data-v-11844461", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 17:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("i", { class: _vm.clasess, style: _vm.style })
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-11844461", esExports)
  }
}

/***/ }),

/***/ 216:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_vue__ = __webpack_require__(217);



/* harmony default export */ __webpack_exports__["default"] = (__WEBPACK_IMPORTED_MODULE_0__index_vue__["a" /* default */]);

/***/ }),

/***/ 217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(132);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_2b42eaf6_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(219);
var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_2b42eaf6_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "packages/components/Picker/index.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2b42eaf6", Component.options)
  } else {
    hotAPI.reload("data-v-2b42eaf6", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 218:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return initIndex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return initPlaceholder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return initModel; });

function initModelArray(params) {
    var array = [];
    var options = params.options,
        children = params.children,
        value = params.value,
        keyValue = params.keyValue;

    if (options.length) {
        if (value.length) {
            var _initIndex = function _initIndex(index, date, i, list) {
                if (typeof index[i] !== 'undefined') {
                    for (var y = 0; y < date.length; y += 1) {
                        if (date[y][keyValue] === index[i]) {
                            list.push(y);
                            _initIndex(index, date[y][children], i += 1, list);
                            break;
                        }
                    }
                }
                return list;
            };
            array = _initIndex(value, options, 0, []);
        } else {
            var init = function init(option) {
                array.push(0);
                if (option[0][children]) {
                    init(option[0][children]);
                }
            };
            init(options);
        }
    }
    return array;
}

var initIndex = function initIndex(options) {
    return initModelArray(options);
};

function placeholderArray(params) {
    var index = params.index,
        list = params.list,
        label = params.label,
        model = params.model;

    var context = '';
    if (model.length > 0) {
        if (index.length && list.length) {
            index.forEach(function (element, i) {
                context += list[i][element][label] + ' ';
            });
            return context;
        }
    }
}

var initPlaceholder = function initPlaceholder(options) {
    return placeholderArray(options);
};

function modelArray(ctx) {
    var init = function init(index, options, i, array) {
        if (typeof index[i] !== 'undefined' && options[index[i]]) {
            array.push(options[index[i]][ctx.keyValue]);
            init(index, options[index[i]][ctx.children], i += 1, array);
        }
        return array;
    };
    return init(ctx.index, ctx.options, 0, []);
}

var initModel = function initModel(options) {
    return modelArray(options);
};

/***/ }),

/***/ 219:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "vvm-Picker" },
    [
      _c(
        "div",
        { class: ["vvm-Picker-context"], on: { click: _vm.click } },
        [
          _c("Input", {
            attrs: {
              readonly: "",
              disabled: _vm.disabled,
              "right-icon": _vm.rightArrow ? "iconlist-rigthl" : "",
              placeholder: _vm.placeholder
            },
            model: {
              value: _vm.context,
              callback: function($$v) {
                _vm.context = $$v
              },
              expression: "context"
            }
          })
        ],
        1
      ),
      _vm._v(" "),
      !_vm.disabled
        ? _c(
            "Layer",
            {
              attrs: { direction: "bottom", isMask: "" },
              model: {
                value: _vm.LayerVal,
                callback: function($$v) {
                  _vm.LayerVal = $$v
                },
                expression: "LayerVal"
              }
            },
            [
              [
                _c("div", { staticClass: "vvm-Picker-title" }, [
                  _c(
                    "span",
                    { staticClass: "cancel-text", on: { click: _vm.onCancel } },
                    [_vm._v(_vm._s(_vm.cancelText))]
                  ),
                  _vm._v(" "),
                  _c(
                    "span",
                    {
                      staticClass: "confirm-text vvm-text-color-default",
                      on: { click: _vm.onConfirm }
                    },
                    [_vm._v(_vm._s(_vm.confirmText))]
                  )
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "vvm-Picker-body" },
                  [
                    _vm._l(_vm.list, function(item, $index) {
                      return _c("v-Picker", {
                        key: $index,
                        ref: $index,
                        refInFor: true,
                        attrs: {
                          options: item,
                          height: _vm.height,
                          index: _vm.index[$index] ? _vm.index[$index] : 0,
                          label: _vm.label,
                          thisIndex: $index + 1
                        },
                        on: { "on-change": _vm.change }
                      })
                    }),
                    _vm._v(" "),
                    _c("transition", { attrs: { name: "fade" } }, [
                      _vm.options.length === 0
                        ? _c(
                            "div",
                            {
                              staticClass: "vvm-Picker-loading",
                              style: _vm.PickerHeight
                            },
                            [
                              _c("Icon", {
                                staticClass: "vvm-loading",
                                attrs: { icon: "iconloading1", size: 30 }
                              })
                            ],
                            1
                          )
                        : _vm._e()
                    ])
                  ],
                  2
                )
              ]
            ],
            2
          )
        : _vm._e()
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-2b42eaf6", esExports)
  }
}

/***/ }),

/***/ 29:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_29__;

/***/ }),

/***/ 3:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_vue__ = __webpack_require__(16);




/* harmony default export */ __webpack_exports__["default"] = (__WEBPACK_IMPORTED_MODULE_0__index_vue__["a" /* default */]);

/***/ }),

/***/ 38:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";


var direction = ["top", "left", "right", "bottom", "center"];
/* harmony default export */ __webpack_exports__["a"] = ({
  name: "Modal",
  props: {
    value: {
      type: Boolean
    },
    maskShow: {
      type: Boolean,
      default: true
    },
    isMask: {
      type: Boolean
    },
    isMove: {
      type: Boolean
    },
    direction: {
      type: String,
      default: "center",
      validator: function validator(val) {
        return direction.includes(val);
      }
    }
  },
  methods: {
    click: function click() {
      if (this.isMask) {
        this.$emit("input", false);
        this.$emit("on-mask");
      }
    }
  },
  mounted: function mounted() {
    if (!this.isMove && this.value) {
      this.$el.addEventListener("touchmove", function (e) {
        e.preventDefault();
      }, false);
    }
  },
  destroyed: function destroyed() {
    this.$el.removeEventListener("touchmove", function (e) {
      e.preventDefault();
    });
  },

  watch: {
    value: function value(val) {
      if (this.isMove) {
        return;
      }
      if (val) {
        this.$el.addEventListener("touchmove", function (e) {
          e.preventDefault();
        }, false);
      } else {
        this.$el.removeEventListener("touchmove", function (e) {
          e.preventDefault();
        });
      }
    }
  }
});

/***/ }),

/***/ 39:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Icon__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_emitter__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils__ = __webpack_require__(7);





/* harmony default export */ __webpack_exports__["a"] = ({
  name: "Input",
  mixins: [__WEBPACK_IMPORTED_MODULE_1__utils_emitter__["a" /* default */]],
  components: {
    Icon: __WEBPACK_IMPORTED_MODULE_0__Icon__["default"]
  },
  props: {
    icon: {
      type: String
    },
    value: {
      type: String
    },
    placeholder: {
      type: String,
      default: "请输入内容"
    },
    rightIcon: {
      type: String
    },
    disabled: {
      type: Boolean
    },
    unity: {
      type: String
    },
    maxlength: {
      type: Number
    },
    type: {
      type: String,
      default: "text",
      validator: function validator(value) {
        return ["text", "password"].includes(value);
      }
    },
    scrollTarget: {
      type: String
    },
    readonly: Boolean
  },
  data: function data() {
    return {
      currentValue: this.value
    };
  },

  watch: {
    value: function value(val) {
      this.currentValue = val;
    }
  },
  methods: {
    click: function click() {
      this.$emit("on-click");
    },
    change: function change(e) {
      var val = e.target.value;
      this.currentValue = val;
      this.$emit("input", val);
      this.$emit("on-change", val);
      this.dispatch("From-Item", "change", val);
    },
    blur: function blur() {
      this.$emit("on-blur", this.currentValue);
      this.dispatch("From-Item", "blur", this.currentValue);
      var scrollDom = this.scrollTarget ? document.querySelector(this.scrollTarget) : document.body;
      scrollDom.scrollTop = scrollDom.scrollTop;
    },
    focus: function focus() {
      this.$emit("on-focus", this.currentValue);
    }
  },
  computed: {
    style: function style() {
      if (this.$slots.default) {
        return {
          flex: "1 1 " + Object(__WEBPACK_IMPORTED_MODULE_2__utils__["e" /* vwWitdh */])(160)
        };
      }
      return {};
    }
  }
});

/***/ }),

/***/ 43:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_vue__ = __webpack_require__(49);



/* harmony default export */ __webpack_exports__["default"] = (__WEBPACK_IMPORTED_MODULE_0__index_vue__["a" /* default */]);

/***/ }),

/***/ 44:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_vue__ = __webpack_require__(51);



/* harmony default export */ __webpack_exports__["default"] = (__WEBPACK_IMPORTED_MODULE_0__index_vue__["a" /* default */]);

/***/ }),

/***/ 49:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(38);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_73210b1b_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(50);
var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_73210b1b_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "packages/components/Modal/index.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-73210b1b", Component.options)
  } else {
    hotAPI.reload("data-v-73210b1b", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 5:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";


/* harmony default export */ __webpack_exports__["a"] = ({
  name: "Icon",
  props: {
    icon: {
      type: String
    },
    color: {
      type: String
    },
    size: {
      type: Number
    }
  },
  computed: {
    clasess: function clasess() {
      return "vvm-iconfont " + this.icon;
    },
    style: function style() {
      return {
        color: this.color,
        fontSize: this.size + "px"
      };
    }
  }
});

/***/ }),

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "vvm-Layer" },
    [
      _vm.maskShow
        ? _c("transition", { attrs: { name: "fade" } }, [
            _c("div", {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: _vm.value,
                  expression: "value"
                }
              ],
              ref: "ref",
              staticClass: "vvm-Layer-mask",
              on: { click: _vm.click }
            })
          ])
        : _vm._e(),
      _vm._v(" "),
      _c("transition", { attrs: { name: _vm.direction } }, [
        _c(
          "div",
          {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value: _vm.value,
                expression: "value"
              }
            ],
            class: ["vvm-Layer-body", _vm.direction]
          },
          [_vm._t("default")],
          2
        )
      ])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-73210b1b", esExports)
  }
}

/***/ }),

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(39);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_cdff3010_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(52);
var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_cdff3010_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "packages/components/Input/index.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-cdff3010", Component.options)
  } else {
    hotAPI.reload("data-v-cdff3010", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "vvm-Input" }, [
    _vm.icon
      ? _c(
          "div",
          { staticClass: "vvm-Input-icon" },
          [_c("Icon", { attrs: { icon: _vm.icon } })],
          1
        )
      : _vm._e(),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "vvm-Input-input" },
      [
        _vm.readonly
          ? [
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model.trim",
                    value: _vm.currentValue,
                    expression: "currentValue",
                    modifiers: { trim: true }
                  }
                ],
                staticClass: "vvm-Input-context readonly",
                attrs: {
                  disabled: _vm.disabled,
                  placeholder: _vm.placeholder,
                  readonly: "readonly",
                  type: _vm.type,
                  maxlength: _vm.maxlength
                },
                domProps: { value: _vm.currentValue },
                on: {
                  input: [
                    function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.currentValue = $event.target.value.trim()
                    },
                    _vm.change
                  ],
                  blur: [
                    _vm.blur,
                    function($event) {
                      return _vm.$forceUpdate()
                    }
                  ],
                  focus: _vm.focus
                }
              })
            ]
          : [
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model.trim",
                    value: _vm.currentValue,
                    expression: "currentValue",
                    modifiers: { trim: true }
                  }
                ],
                staticClass: "vvm-Input-context",
                attrs: {
                  disabled: _vm.disabled,
                  placeholder: _vm.placeholder,
                  type: _vm.type,
                  maxlength: _vm.maxlength
                },
                domProps: { value: _vm.currentValue },
                on: {
                  input: [
                    function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.currentValue = $event.target.value.trim()
                    },
                    _vm.change
                  ],
                  blur: [
                    _vm.blur,
                    function($event) {
                      return _vm.$forceUpdate()
                    }
                  ],
                  focus: _vm.focus
                }
              })
            ],
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "vvm-Input-button", style: _vm.style },
          [_vm._t("default")],
          2
        ),
        _vm._v(" "),
        _vm.rightIcon || _vm.unity
          ? _c(
              "span",
              { staticClass: "vvm-Input-unity", on: { click: _vm.click } },
              [
                _vm.rightIcon
                  ? [_c("Icon", { attrs: { icon: _vm.rightIcon } })]
                  : _vm.unity
                  ? [_vm._v(_vm._s(_vm.unity))]
                  : _vm._e()
              ],
              2
            )
          : _vm._e()
      ],
      2
    )
  ])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-cdff3010", esExports)
  }
}

/***/ }),

/***/ 7:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return findComponentsDownward; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return findComponentUpward; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return parentComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return scrollToTop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return vwWitdh; });

var findComponentsDownward = function findComponentsDownward(context, componentName) {
    var array = [];
    for (var i = 0; i < context.$children.length; i += 1) {
        if (context.$children[i].$options.name === componentName) {
            array.push(context.$children[i]);
        }
    }
    return array;
};

var findComponentUpward = function findComponentUpward(context, componentName, componentNames) {
    if (typeof componentName === 'string') {
        componentNames = [componentName];
    } else {
        componentNames = componentName;
    }
    var parent = context.$parent;
    var name = parent.$options.name;
    while (parent && (!name || componentNames.indexOf(name) < 0)) {
        parent = parent.$parent;
        if (parent) {
            name = parent.$options.name;
        }
    }
    return parent;
};

var parentComponent = function parentComponent(context, componentName, component) {
    var fnc = function fnc(ctx) {
        if (!ctx.$parent) {
            return;
        }
        if (ctx.$parent.$options.name === componentName) {
            component = ctx.$parent;
            return;
        }
        fnc(ctx.$parent);
    };
    fnc(context);
    return component;
};

var scrollToTop = function scrollToTop(scrollNum, target) {
    target.scrollTo({
        top: scrollNum,
        behavior: "smooth"
    });
};

var vwWitdh = function vwWitdh(px) {
    if (window) {
        var witdh = window.screen.width;
        console.log(witdh);
        return px * 100 / witdh + 'vw' || 'auto';
    }
};

/***/ }),

/***/ 71:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_event__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mixins__ = __webpack_require__(87);





var range = function range(num, arr) {
  return Math.min(Math.max(num, arr[0]), arr[1]);
};

function isMobile() {
  if (/Android|webOS|iPhone|iPod|BlackBerry/i.test(window.navigator.userAgent)) {
    return true;
  }
  return false;
}

/* harmony default export */ __webpack_exports__["a"] = ({
  name: "v-Picker",
  mixins: [__WEBPACK_IMPORTED_MODULE_1__mixins__["a" /* default */]],
  data: function data() {
    return {
      startY: 0,
      offset: 0,
      startOffset: 0,
      curreIndex: this.index,
      flag: false
    };
  },

  props: {
    thisIndex: {},
    index: {
      type: Number,
      default: 0
    }
  },
  methods: {
    onTouchstart: function onTouchstart(e) {
      this.startY = e.clientY || e.touches[0].clientY;
      this.startOffset = this.offset;
      if (!isMobile()) {
        this.flag = true;
      }
    },
    onTouchmove: function onTouchmove(e) {
      if (!this.flag && !isMobile()) {
        return;
      }
      var Y = e.clientY || e.touches[0].clientY;
      var deltaY = Y - this.startY;
      this.offset = range(this.startOffset + deltaY, [-(this.count * this.height), this.height * 4]);
    },
    onTouchend: function onTouchend() {
      if (!isMobile()) {
        this.flag = false;
      }
      if (this.offset !== this.startOffset) {
        var index = range(Math.round((-this.offset + 56) / this.height), [0, this.count - 1]);
        this.setIndex(index, true);
      }
    },
    setIndex: function setIndex(index, userAction) {
      index = range(index, [0, this.count - 1]);
      this.offset = (2 - index) * this.height;
      if (index !== this.curreIndex) {
        this.curreIndex = index;
        if (userAction) {
          this.$emit("on-change", this.thisIndex ? [this.thisIndex, index] : index);
        }
      }
    },
    indexChange: function indexChange() {
      if (this.curreIndex >= this.options.length) {
        this.offset = (3 - this.options.length) * this.height;
        return;
      }
      this.offset = (2 - this.curreIndex) * this.height;
    }
  },
  computed: {
    count: function count() {
      return this.options.length;
    },
    styleY: function styleY() {
      return {
        transform: "translateY(" + this.offset + "px)"
      };
    },
    style: function style() {
      return {
        height: this.height + "px"
      };
    },
    maskHeight: function maskHeight() {
      return {
        height: this.height * 2 + "px"
      };
    }
  },
  mounted: function mounted() {
    this.indexChange();
    Object(__WEBPACK_IMPORTED_MODULE_0__utils_event__["e" /* onTouchstart */])(this.$el, this.onTouchstart);
    Object(__WEBPACK_IMPORTED_MODULE_0__utils_event__["d" /* onTouchmove */])(this.$el, this.onTouchmove);
    Object(__WEBPACK_IMPORTED_MODULE_0__utils_event__["c" /* onTouchend */])(this.$el, this.onTouchend);
    Object(__WEBPACK_IMPORTED_MODULE_0__utils_event__["b" /* on */])(this.$el, "touchcancel", this.onTouchend);
  },

  watch: {
    options: function options() {
      this.curreIndex = 0;
      this.indexChange();
    },
    index: function index(val) {
      this.curreIndex = val;
      this.indexChange();
    }
  },
  destroyed: function destroyed() {
    Object(__WEBPACK_IMPORTED_MODULE_0__utils_event__["a" /* off */])(this.$el, "touchstart", this.onTouchstart);
    Object(__WEBPACK_IMPORTED_MODULE_0__utils_event__["a" /* off */])(this.$el, "mousedown", this.onTouchstart);
    Object(__WEBPACK_IMPORTED_MODULE_0__utils_event__["a" /* off */])(this.$el, "touchmove", this.onTouchmove);
    Object(__WEBPACK_IMPORTED_MODULE_0__utils_event__["a" /* off */])(this.$el, "mousemove", this.onTouchmove);
    Object(__WEBPACK_IMPORTED_MODULE_0__utils_event__["a" /* off */])(this.$el, "touchend", this.onTouchend);
    Object(__WEBPACK_IMPORTED_MODULE_0__utils_event__["a" /* off */])(this.$el, "mouseup", this.onTouchend);
    Object(__WEBPACK_IMPORTED_MODULE_0__utils_event__["a" /* off */])(this.$el, "touchcancel", this.onTouchend);
  }
});

/***/ }),

/***/ 87:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";


/* harmony default export */ __webpack_exports__["a"] = ({
    props: {
        options: {
            type: Array,
            default: function _default() {
                return [];
            }
        },
        height: {
            type: Number,
            default: 44
        },
        label: {
            type: String,
            default: "label"
        }
    },
    computed: {
        PickerHeight: function PickerHeight() {
            return {
                height: this.height * 5 + "px"
            };
        }
    }
});

/***/ }),

/***/ 93:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_component_vue__ = __webpack_require__(71);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_21d5ae94_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_component_vue__ = __webpack_require__(112);
var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_component_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_21d5ae94_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_component_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "packages/components/Picker/src/component.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-21d5ae94", Component.options)
  } else {
    hotAPI.reload("data-v-21d5ae94", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ })

/******/ });
});
//# sourceMappingURL=index.js.map