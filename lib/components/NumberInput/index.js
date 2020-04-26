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
/******/ 	return __webpack_require__(__webpack_require__.s = 210);
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

/***/ 130:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_bus__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__component_keyboard__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Icon__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_emitter__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Input__ = __webpack_require__(44);








/* harmony default export */ __webpack_exports__["a"] = ({
  name: "Number-Input",
  mixins: [__WEBPACK_IMPORTED_MODULE_3__utils_emitter__["a" /* default */]],
  components: { Icon: __WEBPACK_IMPORTED_MODULE_2__Icon__["default"], keyboard: __WEBPACK_IMPORTED_MODULE_1__component_keyboard__["a" /* default */], Input: __WEBPACK_IMPORTED_MODULE_4__Input__["default"] },
  props: {
    value: {
      type: [Number, String],
      default: ""
    },
    align: {
      type: String,
      default: "left",
      validator: function validator(val) {
        return ["left", "right", "center"].includes(val);
      }
    },
    placeholder: {
      type: String,
      default: "请输入内容"
    },
    icon: {
      type: String
    },
    disabled: {
      type: Boolean
    },
    unity: {
      type: String
    },
    maxlength: {
      type: Number,
      default: 20
    },
    confirmText: {
      type: String,
      default: "确认"
    },
    isDecimal: {
      type: Boolean,
      default: true
    },
    negativeNumber: {
      type: Boolean,
      default: true
    }
  },
  data: function data() {
    return {
      show: false,
      currentValue: String(this.value)
    };
  },

  watch: {
    value: function value(val) {
      this.currentValue = String(val);
    }
  },
  methods: {
    cursorClick: function cursorClick(index) {
      this.cursorIndex = index + 1;
    },
    focus: function focus() {
      if (this.disabled) {
        return;
      }
      this.show = true;
      __WEBPACK_IMPORTED_MODULE_0__utils_bus__["a" /* default */].$emit("number-focus", this);
    },
    close: function close() {
      this.show = false;
      this.$emit("on-close");
    },
    confirm: function confirm() {
      var value = this.currentValue ? Number(this.currentValue) : "";
      this.$emit("on-confirm", value);
      this.dispatch("From-Item", "change", value);
      this.show = false;
    },
    keyup: function keyup(key) {
      if (this.maxlength) {
        if (this.currentValue.length >= this.maxlength) {
          return;
        }
      }
      this.currentValue += String(key);
      var value = Number(this.currentValue);
      this.$emit("input", value);
      this.dispatch("From-Item", "change", value);
    },
    remove: function remove() {
      if (this.currentValue) {
        this.currentValue = this.currentValue.substr(0, this.currentValue.length - 1);
        var value = this.currentValue ? Number(this.currentValue) : "";
        this.$emit("input", value);
        this.$emit("on-remove", value);
        this.dispatch("From-Item", "change", value);
        return;
      }
      this.dispatch("From-Item", "change", "");
      this.$emit("on-remove", "");
    }
  },
  mounted: function mounted() {
    var _this = this;

    __WEBPACK_IMPORTED_MODULE_0__utils_bus__["a" /* default */].$on("number-focus", function (e) {
      if (_this._uid !== e._uid) {
        _this.show = false;
      }
    });
  }
});

/***/ }),

/***/ 131:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Modal__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Icon__ = __webpack_require__(3);




/* harmony default export */ __webpack_exports__["a"] = ({
  name: "Number-keyboard",
  components: { Layer: __WEBPACK_IMPORTED_MODULE_0__Modal__["default"], Icon: __WEBPACK_IMPORTED_MODULE_1__Icon__["default"] },
  methods: {
    keyup: function keyup(key) {
      this.$emit("on-keyup", key);
    },
    confirm: function confirm() {
      this.$emit("on-confirm");
    },
    remove: function remove() {
      this.$emit("on-remove");
    },
    close: function close() {
      this.$emit("input", false);
    }
  },
  props: {
    confirmText: {},
    value: {},
    isDecimal: {},
    negativeNumber: {}
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

/***/ 210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_vue__ = __webpack_require__(211);




/* harmony default export */ __webpack_exports__["default"] = (__WEBPACK_IMPORTED_MODULE_0__index_vue__["a" /* default */]);

/***/ }),

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(130);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_688921a2_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(215);
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
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_688921a2_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "packages/components/NumberInput/index.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-688921a2", Component.options)
  } else {
    hotAPI.reload("data-v-688921a2", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);




/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_0_vue___default.a());

/***/ }),

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_keyboard_vue__ = __webpack_require__(131);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_7a4de3a8_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_keyboard_vue__ = __webpack_require__(214);
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_keyboard_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_7a4de3a8_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_keyboard_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "packages/components/NumberInput/component/keyboard.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7a4de3a8", Component.options)
  } else {
    hotAPI.reload("data-v-7a4de3a8", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "vvm-Number-keyboard",
      on: {
        click: function($event) {
          $event.stopPropagation()
        }
      }
    },
    [
      _c(
        "Layer",
        {
          attrs: { "mask-show": false, direction: "bottom" },
          model: {
            value: _vm.value,
            callback: function($$v) {
              _vm.value = $$v
            },
            expression: "value"
          }
        },
        [
          _c("div", { staticClass: "vvm-Number-Input-layer" }, [
            _c("div", { staticClass: "vvm-Number-Input-keyboard" }, [
              _c("div", { staticClass: "vvm-Number-Input-keyboard-title" }, [
                _c(
                  "div",
                  {
                    on: {
                      click: function($event) {
                        $event.stopPropagation()
                        return _vm.close($event)
                      }
                    }
                  },
                  [_c("Icon", { attrs: { icon: "iconxiangxia" } })],
                  1
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "vvm-Number-Input-key" }, [
                _c(
                  "ul",
                  { staticClass: "vvm-Number-Input-key-number" },
                  [
                    _vm._l(9, function(item) {
                      return _c(
                        "li",
                        {
                          key: item,
                          staticClass: "vvm-Number-Input-key-item",
                          on: {
                            click: function($event) {
                              $event.stopPropagation()
                              return _vm.keyup(item)
                            }
                          }
                        },
                        [_vm._v(_vm._s(item))]
                      )
                    }),
                    _vm._v(" "),
                    _vm.isDecimal
                      ? [
                          _c(
                            "li",
                            {
                              staticClass: "vvm-Number-Input-key-item",
                              on: {
                                click: function($event) {
                                  $event.stopPropagation()
                                  return _vm.keyup(".")
                                }
                              }
                            },
                            [_c("Icon", { attrs: { icon: "icondian" } })],
                            1
                          )
                        ]
                      : [
                          _c("li", { staticClass: "vvm-Number-Input-key-item" })
                        ],
                    _vm._v(" "),
                    _c(
                      "li",
                      {
                        staticClass: "vvm-Number-Input-key-item",
                        on: {
                          click: function($event) {
                            $event.stopPropagation()
                            return _vm.keyup("0")
                          }
                        }
                      },
                      [_vm._v("0")]
                    ),
                    _vm._v(" "),
                    _c(
                      "li",
                      {
                        staticClass: "vvm-Number-Input-key-item",
                        on: {
                          click: function($event) {
                            $event.stopPropagation()
                            return _vm.remove($event)
                          }
                        }
                      },
                      [_c("Icon", { attrs: { icon: "iconshanchu" } })],
                      1
                    )
                  ],
                  2
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "vvm-Number-Input-key-right" },
                  [
                    _vm.negativeNumber
                      ? [
                          _c(
                            "label",
                            {
                              staticClass: "right-cut",
                              on: {
                                click: function($event) {
                                  $event.stopPropagation()
                                  return _vm.keyup("-")
                                }
                              }
                            },
                            [
                              _c("Icon", {
                                attrs: { icon: "iconiconfontmove" }
                              })
                            ],
                            1
                          )
                        ]
                      : [_c("label", { staticClass: "right-cut" })],
                    _vm._v(" "),
                    _c(
                      "label",
                      {
                        staticClass: "right-confirm",
                        on: { click: _vm.confirm }
                      },
                      [_vm._v(_vm._s(_vm.confirmText))]
                    )
                  ],
                  2
                )
              ])
            ])
          ])
        ]
      )
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
    require("vue-hot-reload-api")      .rerender("data-v-7a4de3a8", esExports)
  }
}

/***/ }),

/***/ 215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "vvm-Number-Input" },
    [
      _vm.icon
        ? _c(
            "div",
            { staticClass: "vvm-Number-Input-icon" },
            [_c("Icon", { attrs: { icon: _vm.icon, size: 16 } })],
            1
          )
        : _vm._e(),
      _vm._v(" "),
      _c(
        "div",
        {
          class: ["vvm-Number-Input-input", _vm.align],
          on: { click: _vm.focus }
        },
        [
          _c("Input", {
            attrs: {
              readonly: "",
              unity: _vm.unity,
              disabled: _vm.disabled,
              placeholder: _vm.placeholder
            },
            model: {
              value: _vm.currentValue,
              callback: function($$v) {
                _vm.currentValue = $$v
              },
              expression: "currentValue"
            }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c("keyboard", {
        attrs: {
          confirmText: _vm.confirmText,
          isDecimal: _vm.isDecimal,
          negativeNumber: _vm.negativeNumber
        },
        on: {
          input: _vm.close,
          "on-keyup": _vm.keyup,
          "on-remove": _vm.remove,
          "on-confirm": _vm.confirm
        },
        model: {
          value: _vm.show,
          callback: function($$v) {
            _vm.show = $$v
          },
          expression: "show"
        }
      })
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
    require("vue-hot-reload-api")      .rerender("data-v-688921a2", esExports)
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
          [_c("Icon", { attrs: { size: 20, icon: _vm.icon } })],
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
              { on: { click: _vm.click } },
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

/***/ })

/******/ });
});
//# sourceMappingURL=index.js.map