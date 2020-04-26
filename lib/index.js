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
/******/ 	return __webpack_require__(__webpack_require__.s = 238);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
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
/* 1 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),
/* 2 */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.6.11' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_vue__ = __webpack_require__(16);




/* harmony default export */ __webpack_exports__["default"] = (__WEBPACK_IMPORTED_MODULE_0__index_vue__["a" /* default */]);

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(13)(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 5 */
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
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(32)('wks');
var uid = __webpack_require__(27);
var Symbol = __webpack_require__(1).Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),
/* 7 */
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
/* 8 */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(8);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),
/* 10 */
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
/* 11 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(15);
var createDesc = __webpack_require__(25);
module.exports = __webpack_require__(4) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(31);
var defined = __webpack_require__(18);
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(9);
var IE8_DOM_DEFINE = __webpack_require__(40);
var toPrimitive = __webpack_require__(35);
var dP = Object.defineProperty;

exports.f = __webpack_require__(4) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),
/* 16 */
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
/* 17 */
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
/* 18 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),
/* 19 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(1);
var core = __webpack_require__(2);
var ctx = __webpack_require__(23);
var hide = __webpack_require__(12);
var has = __webpack_require__(11);
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && has(exports, key)) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),
/* 21 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = true;


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(24);
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(32)('keys');
var uid = __webpack_require__(27);
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),
/* 27 */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(8);
var document = __webpack_require__(1).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_29__;

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(21);
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(2);
var global = __webpack_require__(1);
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(22) ? 'pure' : 'global',
  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
});


/***/ }),
/* 33 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(41);
var enumBugKeys = __webpack_require__(33);

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(8);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(19);
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(18);
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),
/* 38 */
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
/* 39 */
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
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(4) && !__webpack_require__(13)(function () {
  return Object.defineProperty(__webpack_require__(28)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(11);
var toIObject = __webpack_require__(14);
var arrayIndexOf = __webpack_require__(45)(false);
var IE_PROTO = __webpack_require__(26)('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),
/* 42 */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_vue__ = __webpack_require__(49);



/* harmony default export */ __webpack_exports__["default"] = (__WEBPACK_IMPORTED_MODULE_0__index_vue__["a" /* default */]);

/***/ }),
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_vue__ = __webpack_require__(51);



/* harmony default export */ __webpack_exports__["default"] = (__WEBPACK_IMPORTED_MODULE_0__index_vue__["a" /* default */]);

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(14);
var toLength = __webpack_require__(36);
var toAbsoluteIndex = __webpack_require__(46);
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(19);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),
/* 47 */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(15).f;
var has = __webpack_require__(11);
var TAG = __webpack_require__(6)('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),
/* 49 */
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
/* 50 */
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
/* 51 */
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
/* 52 */
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
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(57), __esModule: true };

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(80);
var global = __webpack_require__(1);
var hide = __webpack_require__(12);
var Iterators = __webpack_require__(30);
var TO_STRING_TAG = __webpack_require__(6)('toStringTag');

var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
  'TextTrackList,TouchList').split(',');

for (var i = 0; i < DOMIterables.length; i++) {
  var NAME = DOMIterables[i];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__(86)(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(61)(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(21);
var TAG = __webpack_require__(6)('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(58);
module.exports = __webpack_require__(2).Object.assign;


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(20);

$export($export.S + $export.F, 'Object', { assign: __webpack_require__(59) });


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var DESCRIPTORS = __webpack_require__(4);
var getKeys = __webpack_require__(34);
var gOPS = __webpack_require__(47);
var pIE = __webpack_require__(42);
var toObject = __webpack_require__(37);
var IObject = __webpack_require__(31);
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(13)(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) {
      key = keys[j++];
      if (!DESCRIPTORS || isEnum.call(S, key)) T[key] = S[key];
    }
  } return T;
} : $assign;


/***/ }),
/* 60 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Icon__ = __webpack_require__(3);



/* harmony default export */ __webpack_exports__["a"] = ({
  components: { Icon: __WEBPACK_IMPORTED_MODULE_0__Icon__["default"] },
  props: {
    type: {
      type: String,
      validator: function validator(value) {
        return ["success", "errer", "warning", "loading"].includes(value);
      }
    },
    value: {
      type: Boolean
    },
    context: {
      type: String
    },
    icon: {
      type: String
    },
    mask: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    iconfont: function iconfont() {
      if (this.icon) {
        return this.icon;
      }
      var icon = {
        success: "iconzhengque",
        errer: "iconcuowu",
        warning: "iconinfo",
        loading: ""
      };
      return icon[this.type];
    }
  }
});

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(22);
var $export = __webpack_require__(20);
var redefine = __webpack_require__(66);
var hide = __webpack_require__(12);
var Iterators = __webpack_require__(30);
var $iterCreate = __webpack_require__(83);
var setToStringTag = __webpack_require__(48);
var getPrototypeOf = __webpack_require__(85);
var ITERATOR = __webpack_require__(6)('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 25.4.1.5 NewPromiseCapability(C)
var aFunction = __webpack_require__(24);

function PromiseCapability(C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aFunction(resolve);
  this.reject = aFunction(reject);
}

module.exports.f = function (C) {
  return new PromiseCapability(C);
};


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(1).document;
module.exports = document && document.documentElement;


/***/ }),
/* 64 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__index_vue__ = __webpack_require__(77);






var install = void 0;

function newInstall(options) {
    install = new __WEBPACK_IMPORTED_MODULE_1_vue___default.a({
        data: function data() {
            return options;
        },
        render: function render(h) {
            return h(__WEBPACK_IMPORTED_MODULE_2__index_vue__["a" /* default */], {
                props: {
                    value: this.value,
                    context: this.context,
                    type: this.type,
                    icon: this.icon,
                    mask: this.mask
                }
            });
        }
    });
    if (window) {
        document.body.appendChild(install.$mount().$el);
    }
}

var timer = void 0;

function init(options, type) {
    var params = {
        value: undefined,
        context: undefined,
        type: undefined,
        duration: 3000,
        icon: undefined,
        mask: undefined,
        clear: function clear() {}
    };
    if (!install) {
        newInstall(params);
    }
    __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default()(install, params, options, { value: true, context: options.context ? options.context : options, type: type });
    if (install.duration > 0) {
        clearTimeout(timer);
        timer = setTimeout(function () {
            __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default()(install, { value: false });
            install.clear();
        }, install.duration);
    }
}

var type = ["success", "errer", "warning", "loading"];
var fnc = {
    name: 'Toast',
    info: function info() {
        var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        init(options);
    },
    close: function close() {
        if (install) {
            __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default()(install, { value: false });
            install.clear();
        }
    }
};
type.forEach(function (element) {
    fnc[element] = function () {
        var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        init(options, element);
    };
});

/* harmony default export */ __webpack_exports__["default"] = (fnc);

/***/ }),
/* 65 */
/***/ (function(module, exports) {



var type = {
    props: {
        type: {
            type: String,
            default: "default",
            validator: function validator(value) {
                return ["default", "errer", "success", "warning"].includes(value);
            }
        }
    }
};

module.exports = { type: type };

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(12);


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(9);
var dPs = __webpack_require__(84);
var enumBugKeys = __webpack_require__(33);
var IE_PROTO = __webpack_require__(26)('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(28)('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(63).appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),
/* 68 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Icon__ = __webpack_require__(3);



/* harmony default export */ __webpack_exports__["a"] = ({
  components: { Icon: __WEBPACK_IMPORTED_MODULE_0__Icon__["default"] },
  props: {
    icon: {
      type: String,
      default: "iconzhuangtaijiazai"
    },
    context: {
      type: String
    },
    img: {
      type: String
    },
    show: {
      type: Boolean
    }
  }
});

/***/ }),
/* 69 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";


/* harmony default export */ __webpack_exports__["a"] = ({
  props: {
    show: {
      type: Boolean
    },
    percent: {
      type: Number
    },
    status: {
      type: String,
      validator: function validator(value) {
        return ["errer", "success"].includes(value);
      }
    }
  },
  computed: {
    style: function style() {
      var percent = this.percent;

      return { width: percent + "%" };
    }
  }
});

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(56);
var ITERATOR = __webpack_require__(6)('iterator');
var Iterators = __webpack_require__(30);
module.exports = __webpack_require__(2).getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),
/* 71 */
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
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(114), __esModule: true };

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject = __webpack_require__(9);
var aFunction = __webpack_require__(24);
var SPECIES = __webpack_require__(6)('species');
module.exports = function (O, D) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(23);
var invoke = __webpack_require__(120);
var html = __webpack_require__(63);
var cel = __webpack_require__(28);
var global = __webpack_require__(1);
var process = global.process;
var setTask = global.setImmediate;
var clearTask = global.clearImmediate;
var MessageChannel = global.MessageChannel;
var Dispatch = global.Dispatch;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var defer, channel, port;
var run = function () {
  var id = +this;
  // eslint-disable-next-line no-prototype-builtins
  if (queue.hasOwnProperty(id)) {
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};
var listener = function (event) {
  run.call(event.data);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!setTask || !clearTask) {
  setTask = function setImmediate(fn) {
    var args = [];
    var i = 1;
    while (arguments.length > i) args.push(arguments[i++]);
    queue[++counter] = function () {
      // eslint-disable-next-line no-new-func
      invoke(typeof fn == 'function' ? fn : Function(fn), args);
    };
    defer(counter);
    return counter;
  };
  clearTask = function clearImmediate(id) {
    delete queue[id];
  };
  // Node.js 0.8-
  if (__webpack_require__(21)(process) == 'process') {
    defer = function (id) {
      process.nextTick(ctx(run, id, 1));
    };
  // Sphere (JS game engine) Dispatch API
  } else if (Dispatch && Dispatch.now) {
    defer = function (id) {
      Dispatch.now(ctx(run, id, 1));
    };
  // Browsers with MessageChannel, includes WebWorkers
  } else if (MessageChannel) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = listener;
    defer = ctx(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts) {
    defer = function (id) {
      global.postMessage(id + '', '*');
    };
    global.addEventListener('message', listener, false);
  // IE8-
  } else if (ONREADYSTATECHANGE in cel('script')) {
    defer = function (id) {
      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function () {
        html.removeChild(this);
        run.call(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function (id) {
      setTimeout(ctx(run, id, 1), 0);
    };
  }
}
module.exports = {
  set: setTask,
  clear: clearTask
};


/***/ }),
/* 75 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return { e: false, v: exec() };
  } catch (e) {
    return { e: true, v: e };
  }
};


/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(9);
var isObject = __webpack_require__(8);
var newPromiseCapability = __webpack_require__(62);

module.exports = function (C, x) {
  anObject(C);
  if (isObject(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};


/***/ }),
/* 77 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(60);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_2f40b4d1_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(78);
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
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_2f40b4d1_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "packages/components/~Toast/index.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2f40b4d1", Component.options)
  } else {
    hotAPI.reload("data-v-2f40b4d1", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 78 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "vvm-Toast" },
    [
      _vm.mask
        ? [
            _c("transition", { attrs: { name: "fade" } }, [
              _c("div", {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: _vm.value,
                    expression: "value"
                  }
                ],
                staticClass: "vvm-Toast-mask"
              })
            ])
          ]
        : _vm._e(),
      _vm._v(" "),
      _c("transition", { attrs: { name: "fade" } }, [
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
            class: ["vvm-Toast-body", _vm.type]
          },
          [
            _c(
              "div",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: _vm.type,
                    expression: "type"
                  }
                ],
                staticClass: "vvm-Toast-iconfont"
              },
              [
                _c("Icon", {
                  attrs: { icon: _vm.iconfont, size: 26, color: "#fff" }
                })
              ],
              1
            ),
            _vm._v(" "),
            _c("div", { staticClass: "vvm-Toast-context" }, [
              _vm._v(_vm._s(_vm.context))
            ])
          ]
        )
      ])
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-2f40b4d1", esExports)
  }
}

/***/ }),
/* 79 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return weekList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return weeks; });
/* harmony export (immutable) */ __webpack_exports__["a"] = getDate;
/* unused harmony export getweekday */
/* harmony export (immutable) */ __webpack_exports__["e"] = optionsFnc;
/* harmony export (immutable) */ __webpack_exports__["c"] = getPreMonthList;
/* harmony export (immutable) */ __webpack_exports__["b"] = getNextMonthList;
/* harmony export (immutable) */ __webpack_exports__["d"] = initDate;


var weekList = [{ name: '日', class: 'vvm-Calendar-week-Weekend' }, { name: '一', class: '' }, { name: '二', class: '' }, { name: '三', class: '' }, { name: '四', class: '' }, { name: '五', class: '' }, { name: '六', class: 'vvm-Calendar-week-Weekend' }];

var weeks = ['日', '一', '二', '三', '四', '五', '六'];

function getDate(date) {
    return date.getFullYear() + '/' + (date.getMonth() + 1);
}

function getCount(params) {
    var date = new Date(params);
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
}

function getweekday(date) {
    var weekArray = ["日", "一", "二", "三", "四", "五", "六"];
    var week = weekArray[new Date(date).getDay()];
    return week;
}

function getDateList(count, element) {
    var i = 0;
    var array = { name: element, list: [] };
    while (i < count) {
        i += 1;
        var date = new Date(element);
        array.list.push({ year: date.getFullYear(), month: date.getMonth() + 1, day: i, week: getweekday(element + '-' + i), disabled: false });
    }
    return array;
}

function optionsFnc(date) {
    var options = new Date(date);
    return {
        year: options.getFullYear(),
        month: options.getMonth() + 1,
        day: options.getDate(),
        week: getweekday(date)
    };
}

function getPreMonth(date) {
    var options = new Date(date);
    var year = options.getFullYear();
    var month = options.getMonth() + 1;
    return month - 1 > 0 ? year + '/' + (month - 1) : year - 1 + '/' + 12;
}

function getNextMonth(date) {
    var options = new Date(date);
    var year = options.getFullYear();
    var month = options.getMonth() + 1;
    return month + 1 <= 12 ? year + '/' + (month + 1) : year + 1 + '/' + 1;
}

function getPreMonthList(date) {
    var array = [getPreMonth(date)];
    var list = [];
    array.forEach(function (element) {
        list.push(getDateList(getCount(element), element));
    });
    return list;
}

function getNextMonthList(date) {
    var array = [getNextMonth(date)];
    var list = [];
    array.forEach(function (element) {
        list.push(getDateList(getCount(element), element));
    });
    return list;
}

function initDate(locationDate, value, type) {
    var list = [];
    var date = void 0;
    var location = new Date();
    if (value && value.length) {
        date = type === 'range' ? value[0] : value;
        location = new Date(date);
    } else {
        date = locationDate ? locationDate.getFullYear() + '/' + (locationDate.getMonth() + 1) : location.getFullYear() + '/' + (location.getMonth() + 1);
    }
    var array = [getPreMonth(date), getDate(location), getNextMonth(date)];
    array.forEach(function (element) {
        list.push(getDateList(getCount(element), element));
    });
    return list;
}

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(81);
var step = __webpack_require__(82);
var Iterators = __webpack_require__(30);
var toIObject = __webpack_require__(14);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(61)(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),
/* 81 */
/***/ (function(module, exports) {

module.exports = function () { /* empty */ };


/***/ }),
/* 82 */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(67);
var descriptor = __webpack_require__(25);
var setToStringTag = __webpack_require__(48);
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(12)(IteratorPrototype, __webpack_require__(6)('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(15);
var anObject = __webpack_require__(9);
var getKeys = __webpack_require__(34);

module.exports = __webpack_require__(4) ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(11);
var toObject = __webpack_require__(37);
var IE_PROTO = __webpack_require__(26)('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(19);
var defined = __webpack_require__(18);
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),
/* 87 */
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
/* 88 */
/***/ (function(module, exports) {



/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(6);


/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(1);
var core = __webpack_require__(2);
var LIBRARY = __webpack_require__(22);
var wksExt = __webpack_require__(89);
var defineProperty = __webpack_require__(15).f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};


/***/ }),
/* 91 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";


/* harmony default export */ __webpack_exports__["a"] = ({
    props: {
        size: {
            type: Number,
            default: 3072
        },
        disabled: {
            type: Boolean
        },
        iconSize: {
            type: Number,
            default: 24
        },
        name: {
            type: String,
            default: 'file'
        },
        accept: {
            type: Array,
            default: function _default() {
                return [];
            }
        },
        acceptErrorMessage: {
            type: String,
            default: '文件类型错误'
        },
        compress: {
            type: Boolean,
            default: true
        },
        compressSize: {
            type: Number,
            default: 512
        },
        data: {
            type: Object,
            default: function _default() {
                return {};
            }
        },
        action: {
            type: String,
            default: ''
        },
        headers: {
            type: Object,
            default: function _default() {
                return {};
            }
        },
        showLabel: {
            type: String
        },
        response: {
            type: String
        },
        imgWidth: {
            type: [Number, Boolean],
            default: 800
        },
        quality: {
            type: Number,
            default: 1
        },
        beforeUpload: {
            type: Function
        },
        onSuccess: {
            type: Function
        },
        onError: {
            type: Function
        },
        onLoadend: {
            type: Function
        },
        onProgress: {
            type: Function
        },
        onSuccessText: {
            type: String,
            default: '上传成功'
        },
        onErrorText: {
            type: String,
            default: '上传失败'
        },
        beforeRemove: {
            type: Function
        },
        showRemove: {
            type: Boolean,
            default: true
        },
        type: {
            type: String,
            default: 'single',
            validator: function validator(value) {
                return ["single", "multiple"].includes(value);
            }
        },
        maxNumber: {
            type: Number
        },
        isImage: {
            type: Boolean,
            default: true
        }
    }
});

/***/ }),
/* 92 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";


/* harmony default export */ __webpack_exports__["a"] = ({
    props: {
        to: {
            type: [Object, String]
        },
        url: {
            type: String
        },
        replace: {
            type: Boolean
        }
    },
    methods: {
        handleLink: function handleLink() {
            var router = this.$router;
            if (!router) {
                throw new Error("error:There is no router");
            }
            var replace = this.replace,
                to = this.to,
                url = this.url;

            var model = replace ? 'replace' : 'push';
            if (to) {
                router[model](to);
                return;
            }
            if (url) {
                if (replace) {
                    if (window) {
                        window.location.replace(url);
                    }
                    return;
                }
                if (window) {
                    window.location.href = url;
                }
            }
        }
    }
});

/***/ }),
/* 93 */
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


/***/ }),
/* 94 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__index_vue__ = __webpack_require__(95);






var install = void 0;

function newInstall(options) {
    install = new __WEBPACK_IMPORTED_MODULE_1_vue___default.a({
        data: function data() {
            return options;
        },
        render: function render(h) {
            return h(__WEBPACK_IMPORTED_MODULE_2__index_vue__["a" /* default */], {
                props: {
                    icon: this.icon,
                    img: this.img,
                    context: this.context,
                    show: this.show
                }
            });
        }
    });
    if (window) {
        document.body.appendChild(install.$mount().$el);
    }
}

/* harmony default export */ __webpack_exports__["default"] = ({
    show: function show() {
        var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        var params = {
            icon: undefined,
            img: undefined,
            show: undefined,
            context: undefined
        };
        if (typeof options === 'string') {
            params.context = options;
        } else {
            __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default()(params, options);
        }
        if (!install) {
            newInstall(params);
        }
        __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default()(install, params, { show: true });
    },
    hide: function hide() {
        __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default()(install, { show: false });
    },
    destroyed: function destroyed() {
        document.body.removeChild(install.$mount().$el);
        install.$destroyed();
    }
});

/***/ }),
/* 95 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(68);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_231452e1_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(96);
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
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_231452e1_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "packages/components/~Loading/spin/index.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-231452e1", Component.options)
  } else {
    hotAPI.reload("data-v-231452e1", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 96 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "vvm-Loading-spin" },
    [
      _c("transition", { attrs: { name: "fade" } }, [
        _c("div", {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: _vm.show,
              expression: "show"
            }
          ],
          staticClass: "vvm-spin-mask"
        })
      ]),
      _vm._v(" "),
      _c("transition", { attrs: { name: "fade" } }, [
        _c(
          "div",
          {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value: _vm.show,
                expression: "show"
              }
            ],
            staticClass: "vvm-spin-body"
          },
          [
            _c(
              "div",
              { class: ["vvm-spin-icon", { "vvm-loading": !_vm.img }] },
              [
                _vm.img
                  ? [_c("img", { attrs: { src: _vm.img } })]
                  : [
                      _c("Icon", {
                        attrs: { icon: _vm.icon, size: 36, color: "#fff" }
                      })
                    ]
              ],
              2
            ),
            _vm._v(" "),
            _c("div", { staticClass: "vvm-spin-context" }, [
              _vm._v(_vm._s(this.context))
            ])
          ]
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
    require("vue-hot-reload-api")      .rerender("data-v-231452e1", esExports)
  }
}

/***/ }),
/* 97 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index_vue__ = __webpack_require__(98);





var install = void 0;
var timer = void 0;
var duration = 800;

function newInstall() {
    install = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a({
        data: function data() {
            return {
                percent: undefined,
                status: 'success',
                show: undefined
            };
        },
        render: function render(h) {
            return h(__WEBPACK_IMPORTED_MODULE_1__index_vue__["a" /* default */], {
                props: {
                    percent: this.percent,
                    status: this.status,
                    show: this.show
                }
            });
        },

        methods: {
            update: function update() {
                var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

                this.percent = options.percent;
                this.status = options.status;
                this.show = options.show;
            },
            destroyed: function destroyed() {
                this.$destroy();
            }
        }
    });
    if (window) {
        document.body.appendChild(install.$mount().$el);
    }
}

function clearTimer() {
    if (timer) {
        clearInterval(timer);
        timer = null;
    }
}

function hide() {
    setTimeout(function () {
        install.update({
            show: false
        });
        setTimeout(function () {
            install.update({
                percent: 0
            });
        }, 200);
    }, duration);
}

/* harmony default export */ __webpack_exports__["default"] = ({
    start: function start() {
        if (timer) {
            return;
        }
        var percent = 0;
        if (!install) {
            newInstall();
        }
        timer = setInterval(function () {
            percent += Math.floor(Math.random() * 3 + 1);
            if (percent > 95) {
                clearTimer();
            }
            install.update({
                show: true,
                percent: percent,
                status: 'success'
            });
        }, 200);
    },
    finish: function finish() {
        clearTimer();
        install.update({
            show: true,
            percent: 100,
            status: 'success'
        });
        hide();
    },
    errer: function errer() {
        clearTimer();
        install.update({
            show: true,
            percent: 100,
            status: 'errer'
        });
        hide();
    },
    updata: function updata(percent) {
        clearTimer();
        install.update({
            show: true,
            percent: percent,
            status: 'success'
        });
    },
    destroyed: function destroyed() {
        install.$mount().destroyed();
        document.body.removeChild(install.$mount().$el);
        install = null;
    }
});

/***/ }),
/* 98 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(69);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_66b0bad4_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(99);
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
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_66b0bad4_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "packages/components/~Loading/loadingBar/index.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-66b0bad4", Component.options)
  } else {
    hotAPI.reload("data-v-66b0bad4", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 99 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("transition", [
    _c(
      "div",
      {
        directives: [
          {
            name: "show",
            rawName: "v-show",
            value: _vm.show,
            expression: "show"
          }
        ],
        staticClass: "vvm-Loading-loadingBar"
      },
      [_c("div", { class: ["vvm-loadingBar", _vm.status], style: _vm.style })]
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
    require("vue-hot-reload-api")      .rerender("data-v-66b0bad4", esExports)
  }
}

/***/ }),
/* 100 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_emitter__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Modal__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Icon__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Input__ = __webpack_require__(44);







/* harmony default export */ __webpack_exports__["a"] = ({
  name: "ActionSheet",
  mixins: [__WEBPACK_IMPORTED_MODULE_0__utils_emitter__["a" /* default */]],
  components: { Layer: __WEBPACK_IMPORTED_MODULE_1__Modal__["default"], Icon: __WEBPACK_IMPORTED_MODULE_2__Icon__["default"], Input: __WEBPACK_IMPORTED_MODULE_3__Input__["default"] },
  props: {
    placeholder: {
      type: String,
      default: "请选择"
    },
    disabled: {
      type: Boolean
    },
    closeText: {
      type: String,
      default: "取消"
    },
    label: {
      type: String,
      default: "label"
    },
    returnKey: {
      type: String,
      default: "value"
    },
    data: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    value: {
      type: [Number, String, Boolean],
      default: undefined
    },
    rightArrow: Boolean
  },
  data: function data() {
    return {
      currentValue: this.value,
      show: false
    };
  },

  watch: {
    value: function value(val) {
      this.currentValue = val;
    }
  },
  methods: {
    clickItem: function clickItem(item) {
      if (item.disabled) {
        return;
      }
      this.show = false;
      this.currentValue = item[this.returnKey];
      this.$emit("input", this.currentValue);
      this.$emit("on-confirm", this.currentValue, item);
      this.dispatch("From-Item", "change", this.currentValue);
    },
    close: function close() {
      this.show = false;
      this.$emit("on-close");
    },
    mask: function mask() {
      this.show = false;
      this.$emit("on-mask");
    },
    click: function click() {
      if (this.disabled) {
        return;
      }
      this.$emit("on-show");
      this.show = true;
    }
  },
  computed: {
    placeholderText: function placeholderText() {
      var _this = this;

      if (typeof this.currentValue !== "undefined" && this.currentValue !== "" && this.currentValue !== null) {
        var str = "";
        this.data.map(function (item) {
          if (item[_this.returnKey] === _this.currentValue) {
            str = item[_this.label];
          }
        });
        return str;
      }
      return "";
    }
  }
});

/***/ }),
/* 101 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__(7);



/* harmony default export */ __webpack_exports__["a"] = ({
  name: "Backtop",
  props: {
    right: {
      type: Number,
      default: 10
    },
    bottom: {
      type: Number,
      default: 10
    },
    target: {
      type: String
    },
    visibilityHeight: {
      type: Number,
      default: 100
    }
  },
  data: function data() {
    return {
      element: document.body,
      show: false
    };
  },

  watch: {
    target: function target() {
      this.element.removeEventListener("scroll", this.scroll);
      this.init();
    }
  },
  methods: {
    scroll: function scroll(e) {
      this.show = e.target.scrollTop > this.visibilityHeight;
    },
    init: function init() {
      if (this.target) {
        this.element = document.querySelector(this.target);
        if (!this.element) {
          throw new Error("\u672A\u627E\u5230" + this.target + "\u8282\u70B9");
        }
      }
      this.element.setAttribute("style", "scroll-behavior: smooth");
      this.element.addEventListener("scroll", this.scroll);
    },
    click: function click() {
      Object(__WEBPACK_IMPORTED_MODULE_0__utils__["d" /* scrollToTop */])(0, this.element);
      this.$emit("on-click");
    }
  },
  mounted: function mounted() {
    this.init();
  },
  destroyed: function destroyed() {
    this.element.removeEventListener("scroll", this.scroll);
  }
});

/***/ }),
/* 102 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixins_links__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Icon__ = __webpack_require__(3);




/* harmony default export */ __webpack_exports__["a"] = ({
  name: "Button",
  components: { Icon: __WEBPACK_IMPORTED_MODULE_1__Icon__["default"] },
  mixins: [__WEBPACK_IMPORTED_MODULE_0__mixins_links__["a" /* default */]],
  props: {
    type: {
      type: String,
      default: "default",
      validator: function validator(value) {
        return ["default", "errer", "success", "warning", "text"].includes(value);
      }
    },
    disabled: {
      type: Boolean
    },
    radius: {
      type: Boolean
    },
    plain: {
      type: Boolean
    },
    round: {
      type: Boolean
    },
    loading: {
      type: Boolean
    },
    long: {
      type: Boolean
    },
    loadingText: {
      type: String,
      default: "加载中..."
    }
  },
  computed: {
    clasess: function clasess() {
      return ["vvm-Button", "vvm-Button-type-" + this.type, this.plain ? "vvm-Button-plain vvm-border-color-" + this.type : "", {
        "vvm-Button-round": this.round,
        "vvm-Button-disabled": this.tagDisabled,
        "vvm-Button-long": this.long
      }];
    },
    tagDisabled: function tagDisabled() {
      var disabled = this.disabled,
          currentLoading = this.currentLoading;

      return disabled || currentLoading;
    }
  },
  methods: {
    click: function click() {
      this.$emit("click");
      this.handleLink();
    },
    showLoading: function showLoading() {
      this.currentLoading = true;
    },
    removeLoading: function removeLoading() {
      this.currentLoading = false;
    }
  },
  data: function data() {
    return {
      currentLoading: this.loading
    };
  },

  watch: {
    loading: function loading(val) {
      this.currentLoading = val;
    }
  }
});

/***/ }),
/* 103 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Modal__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Icon__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Toast__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_emitter__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_Input__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_mixins__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_utils__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_DateList__ = __webpack_require__(155);










/* harmony default export */ __webpack_exports__["a"] = ({
  name: "Calendar",
  components: { Modal: __WEBPACK_IMPORTED_MODULE_0__components_Modal__["default"], Icon: __WEBPACK_IMPORTED_MODULE_1__components_Icon__["default"], DateList: __WEBPACK_IMPORTED_MODULE_7__components_DateList__["a" /* default */], Input: __WEBPACK_IMPORTED_MODULE_4__components_Input__["default"] },
  mixins: [__WEBPACK_IMPORTED_MODULE_5__components_mixins__["a" /* default */], __WEBPACK_IMPORTED_MODULE_3__utils_emitter__["a" /* default */]],
  props: {
    placeholder: {
      type: String,
      default: "请选择时间"
    },
    value: {
      type: [Array, String]
    },
    titleText: {
      type: String,
      default: "请选择日期"
    },
    locationDate: {
      type: String
    },
    disabledList: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    oldDateDisabled: {
      type: Boolean,
      default: true
    },
    disabled: {
      type: Boolean
    },
    startText: {
      type: String,
      default: "开始日"
    },
    endText: {
      type: String,
      default: "结束日"
    },
    singleText: {
      type: String,
      default: "选中时间"
    },
    confirmText: {
      type: String,
      default: "确认"
    },
    rangeSeparator: {
      type: String,
      default: "至"
    },
    type: {
      type: String,
      default: "range",
      validator: function validator(val) {
        return ["range", "single"].includes(val);
      }
    },
    formatter: Function,
    rightArrow: Boolean
  },
  data: function data() {
    return {
      show: false,
      weekList: __WEBPACK_IMPORTED_MODULE_6__components_utils__["f" /* weekList */],
      dateList: [],
      currentValue: "",
      confirmValue: this.value || ""
    };
  },

  watch: {
    value: function value(val) {
      this.confirmValue = val;
      this.init();
    },
    disabled: function disabled() {
      this.init();
    }
  },
  computed: {
    modelValue: function modelValue() {
      if (this.type === "range" && this.confirmValue) {
        if (this.confirmValue.length !== 2) {
          return "";
        }
        return this.confirmValue.length ? "" + this.confirmValue[0] + this.rangeSeparator + this.confirmValue[1] : "";
      }
      return this.confirmValue;
    }
  },
  methods: {
    close: function close() {
      this.show = false;
      this.$emit("on-close");
    },
    confirm: function confirm() {
      if (this.type === "range") {
        if (!this.currentValue && this.currentValue.length === 0) {
          __WEBPACK_IMPORTED_MODULE_2__components_Toast__["default"].info("\u8BF7\u9009\u62E9" + this.startText);
          return;
        }
        if (this.currentValue && this.currentValue.length === 1) {
          __WEBPACK_IMPORTED_MODULE_2__components_Toast__["default"].info("\u8BF7\u9009\u62E9" + this.endText);
          return;
        }
      } else {
        if (!this.currentValue) {
          __WEBPACK_IMPORTED_MODULE_2__components_Toast__["default"].info("\u8BF7\u9009\u62E9\u65F6\u95F4");
          return;
        }
      }
      this.show = false;
      this.confirmValue = this.currentValue;
      this.$emit("input", this.currentValue);
      this.$emit("on-confirm", this.currentValue);
      this.dispatch("From-Item", "change", this.currentValue);
    },
    initValue: function initValue(val) {
      if (this.type === "range" && val) {
        this.options = val.length ? [Object(__WEBPACK_IMPORTED_MODULE_6__components_utils__["e" /* optionsFnc */])(val[0]), Object(__WEBPACK_IMPORTED_MODULE_6__components_utils__["e" /* optionsFnc */])(val[1])] : [];
        return;
      }
      if (val) {
        this.options = Object(__WEBPACK_IMPORTED_MODULE_6__components_utils__["e" /* optionsFnc */])(val);
      }
    },
    openCalendar: function openCalendar() {
      if (this.disabled) {
        return;
      }
      this.show = true;
      this.$emit("on-open");
      this.$refs.DateList.locationDateFnc();
    },
    scrollTop: function scrollTop() {
      if (!this.oldDateDisabled) {
        this.dateList = Object(__WEBPACK_IMPORTED_MODULE_6__components_utils__["c" /* getPreMonthList */])(this.dateList[0].name).concat(this.dateList);
        return true;
      }
      return false;
    },
    scrollBottom: function scrollBottom() {
      this.dateList = this.dateList.concat(Object(__WEBPACK_IMPORTED_MODULE_6__components_utils__["b" /* getNextMonthList */])(this.dateList[this.dateList.length - 1].name));
    },
    init: function init() {
      if (!this.disabled) {
        this.dateList = Object(__WEBPACK_IMPORTED_MODULE_6__components_utils__["d" /* initDate */])(this.locationDate, this.value, this.type);
        this.initValue(this.value);
      }
    }
  },
  mounted: function mounted() {
    this.init();
  }
});

/***/ }),
/* 104 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_scroll_js__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils__ = __webpack_require__(79);





function sum(arr) {
  return arr.reduce(function (prev, curr, idx, arr) {
    return prev + curr;
  });
}

/* harmony default export */ __webpack_exports__["a"] = ({
  name: "DateList",
  props: {
    date: {
      type: Array
    },
    locationDate: {
      type: Date,
      default: function _default() {
        return new Date();
      }
    },
    options: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    scrollTop: Function,
    scrollBottom: Function
  },
  watch: {
    options: function options() {
      this.locationDateFnc();
    }
  },
  data: function data() {
    return {};
  },

  methods: {
    onScroll: function onScroll(e) {
      var _this = this;

      if (Object(__WEBPACK_IMPORTED_MODULE_0__utils_scroll_js__["a" /* default */])(this.$refs.scroll, 4)) {
        this.scrollBottom();
        return;
      }
      if (e.target.scrollTop < 4) {
        var flag = this.scrollTop();
        if (flag) {
          this.$nextTick(function () {
            e.target.scrollTop = _this.heightItem()[0];
          });
        }
      }
    },
    heightItem: function heightItem() {
      var _this2 = this;

      var array = [];
      this.date.forEach(function (element, i) {
        array.push(_this2.$refs[i][0].offsetHeight);
      });
      return array;
    },
    locationDateFnc: function locationDateFnc() {
      var _this3 = this;

      var index = this.locationIndex();
      if (index) {
        this.$nextTick(function () {
          var array = [];
          _this3.date.forEach(function (element, i) {
            array.push(_this3.$refs[i][0].offsetHeight);
          });
          var height = 0;
          for (var i = 0; i < index; i += 1) {
            height += array[i];
          }
          _this3.$refs.scroll.scrollTop = height;
        });
      }
    },
    locationIndex: function locationIndex() {
      var date = void 0;
      if (this.options.length === 0) {
        date = Object(__WEBPACK_IMPORTED_MODULE_1__utils__["a" /* getDate */])(this.locationDate);
      } else {
        date = Object(__WEBPACK_IMPORTED_MODULE_1__utils__["a" /* getDate */])(new Date(this.options[0]));
      }
      var index = void 0;
      for (var i = 0; i < this.date.length; i += 1) {
        if (this.date[i].name === date) {
          index = i;
          break;
        }
      }
      return index;
    }
  }
});

/***/ }),
/* 105 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";


/* harmony default export */ __webpack_exports__["a"] = ({
  name: "Card",
  props: {
    titleText: {
      type: String,
      default: "标题"
    },
    isTitle: {
      type: Boolean,
      default: true
    },
    shadow: {
      type: Boolean
    }
  }
});

/***/ }),
/* 106 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Icon__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mixins_links__ = __webpack_require__(92);




/* harmony default export */ __webpack_exports__["a"] = ({
  name: "Cell",
  components: { Icon: __WEBPACK_IMPORTED_MODULE_0__Icon__["default"] },
  mixins: [__WEBPACK_IMPORTED_MODULE_1__mixins_links__["a" /* default */]],
  props: {
    label: {
      type: String
    },
    context: {
      type: String
    },
    icon: {
      type: String
    },
    arrow: {
      type: Boolean
    },
    model: {
      type: String,
      default: "default",
      validator: function validator(value) {
        return ["default", "block"].includes(value);
      }
    },
    retureValue: {}
  },
  computed: {
    clasess: function clasess() {
      return ["vvm-Cell-value", {
        "vvm-Cell-right": this.label
      }];
    }
  },
  methods: {
    click: function click() {
      this.handleLink();
      this.$emit("on-click", this.retureValue);
    }
  }
});

/***/ }),
/* 107 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";


/* harmony default export */ __webpack_exports__["a"] = ({
  name: "Cell-Group",
  props: {
    title: {
      type: String
    }
  }
});

/***/ }),
/* 108 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Icon__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mixins_props__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mixins_props___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__mixins_props__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_emitter__ = __webpack_require__(10);






/* harmony default export */ __webpack_exports__["a"] = ({
  name: "Checkbox",
  components: { Icon: __WEBPACK_IMPORTED_MODULE_0__Icon__["default"] },
  mixins: [__WEBPACK_IMPORTED_MODULE_2__mixins_props__["type"], __WEBPACK_IMPORTED_MODULE_3__utils_emitter__["a" /* default */]],
  data: function data() {
    return {
      parent: "",
      currentValue: this.value,
      model: []
    };
  },

  props: {
    label: {
      type: [String, Number, Boolean]
    },
    icon: {
      type: String,
      default: "iconselected"
    },
    value: {
      type: Boolean
    },
    disabled: {
      type: Boolean
    }
  },
  watch: {
    value: function value(val) {
      this.currentValue = val;
    },
    model: function model(val) {
      for (var i = 0; i < val.length; i += 1) {
        if (!this.label) {
          return;
        }
        if (val[i] === this.label) {
          this.currentValue = true;
          break;
        }
        this.currentValue = false;
      }
    }
  },
  methods: {
    parentFnc: function parentFnc(options, value) {
      if (value) {
        return this.parent[options] === value ? this[options] : this.parent[options];
      }
      return this.parent[options] ? this.parent[options] : this[options];
    },
    active: function active() {
      return typeof this.currentValue !== "undefined";
    },
    change: function change(e) {
      if (this.parenDisabled) {
        return;
      }

      if (this.parent) {
        this.parent.change(this.model);
        return;
      }
      this.currentValue = e.target.checked;
      this.$emit("input", this.currentValue);
      this.$emit("on-change", this.currentValue);
      this.dispatch("From-Item", "change", this.currentValue);
    }
  },
  computed: {
    parentIcon: function parentIcon() {
      if (this.parent) {
        var parentFnc = this.parentFnc;

        return parentFnc("icon", "iconselected");
      }
      return this.icon;
    },
    parentType: function parentType() {
      if (this.parent) {
        var parentFnc = this.parentFnc;

        return parentFnc("type", "default");
      }
      return this.type;
    },
    parenDisabled: function parenDisabled() {
      if (this.parent) {
        var parentFnc = this.parentFnc;

        return parentFnc("disabled");
      }
      return this.disabled;
    }
  },
  mounted: function mounted() {
    var parent = Object(__WEBPACK_IMPORTED_MODULE_1__utils__["a" /* findComponentUpward */])(this, "Checkbox-Group");
    if (parent) {
      this.parent = parent;
      parent.updateModel();
    }
  }
});

/***/ }),
/* 109 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixins_props__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixins_props___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__mixins_props__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_index__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_emitter__ = __webpack_require__(10);





/* harmony default export */ __webpack_exports__["a"] = ({
  name: "Checkbox-Group",
  mixins: [__WEBPACK_IMPORTED_MODULE_0__mixins_props__["type"], __WEBPACK_IMPORTED_MODULE_2__utils_emitter__["a" /* default */]],
  data: function data() {
    return {
      childrens: [],
      currentValue: this.value
    };
  },

  props: {
    value: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    inline: {
      type: Boolean,
      default: true
    },
    disabled: {
      type: Boolean
    },
    icon: {
      type: String,
      default: "iconselected"
    }
  },
  watch: {
    value: function value(val) {
      this.currentValue = val;
      this.updateModel();
    }
  },
  methods: {
    updateModel: function updateModel() {
      var _this = this;

      this.childrens = Object(__WEBPACK_IMPORTED_MODULE_1__utils_index__["b" /* findComponentsDownward */])(this, "Checkbox");
      if (this.childrens) {
        this.childrens.forEach(function (element) {
          element.model = _this.currentValue;
          element.currentValue = _this.currentValue.indexOf(element.label) >= 0;
        });
      }
    },
    change: function change(value) {
      this.currentValue = value;
      this.$emit("input", value);
      this.$emit("on-change", value);
      this.dispatch("From-Item", "change", value);
      this.updateModel();
    }
  },
  mounted: function mounted() {
    this.updateModel();
  }
});

/***/ }),
/* 110 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_slicedToArray__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_slicedToArray___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_slicedToArray__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Input__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Modal__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Picker_src_component__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_emitter__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__src_utils__ = __webpack_require__(183);








/* harmony default export */ __webpack_exports__["a"] = ({
  name: "DatetimePicker",
  components: { Input: __WEBPACK_IMPORTED_MODULE_1__components_Input__["default"], Modal: __WEBPACK_IMPORTED_MODULE_2__components_Modal__["default"], vPicker: __WEBPACK_IMPORTED_MODULE_3__components_Picker_src_component__["a" /* default */] },
  mixins: [__WEBPACK_IMPORTED_MODULE_4__utils_emitter__["a" /* default */]],
  props: {
    placeholder: {
      type: String,
      default: "请选择"
    },
    disabled: Boolean,
    cancelText: {
      type: String,
      default: "取消"
    },
    confirmText: {
      type: String,
      default: "确认"
    },
    minYear: {
      type: Number,
      default: 1969
    },
    maxYear: {
      type: Number,
      default: 2025
    },
    type: {
      type: String,
      default: "date",
      validator: function validator(val) {
        return ["date", "datetime", "time"].includes(val);
      }
    },
    value: {
      type: String
    },
    height: Number,
    formatter: {
      type: Function
    },
    rightArrow: Boolean
  },
  data: function data() {
    return {
      show: false,
      options: [],
      currentValue: this.value,
      timeItem: Object(__WEBPACK_IMPORTED_MODULE_5__src_utils__["f" /* createTimeItem */])(this.value),
      index: []
    };
  },

  watch: {
    minYear: function minYear() {
      this.initOptions();
    },
    maxYear: function maxYear() {
      this.initOptions();
    },
    value: function value(val) {
      this.currentValue = val;
      this.timeItem = Object(__WEBPACK_IMPORTED_MODULE_5__src_utils__["f" /* createTimeItem */])(val);
      this.index = Object(__WEBPACK_IMPORTED_MODULE_5__src_utils__["c" /* createIndex */])(this);
    },
    type: function type() {
      this.initOptions();
      this.index = Object(__WEBPACK_IMPORTED_MODULE_5__src_utils__["c" /* createIndex */])(this);
    }
  },
  methods: {
    change: function change(val) {
      var _val = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_slicedToArray___default()(val, 2),
          i = _val[0],
          item = _val[1];

      var index = i - 1;
      this.$set(this.index, index, item);
      var label = this.options[index][item];
      if (this.type === "time") {
        this.$set(this.timeItem, index + 3, label);
      } else {
        this.$set(this.timeItem, index, label);
      }
      if (this.type !== "time" && [0, 1].includes(index)) {
        this.initDay();
        this.$set(this.timeItem, 2, this.options[2][0]);
      }
      this.$emit("on-change", this.fncTime());
    },
    fncTime: function fncTime() {
      var _timeItem = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_slicedToArray___default()(this.timeItem, 6),
          YYYY = _timeItem[0],
          mm = _timeItem[1],
          dd = _timeItem[2],
          HH = _timeItem[3],
          MM = _timeItem[4],
          SS = _timeItem[5];

      var formatFnc = {
        date: function date() {
          return YYYY + "/" + mm + "/" + dd;
        },
        datetime: function datetime() {
          return YYYY + "/" + mm + "/" + dd + " " + HH + ":" + MM + ":" + SS;
        },
        time: function time() {
          return HH + ":" + MM + ":" + SS;
        }
      };
      return this.formatter ? this.formatter(formatFnc[this.type]()) : this.formatterFnc(YYYY + "/" + mm + "/" + dd + " " + HH + ":" + MM + ":" + SS);
    },
    formatterFnc: function formatterFnc(val) {
      var _date = val ? new Date(val) : new Date();
      var formatFnc = {
        date: function date() {
          return Object(__WEBPACK_IMPORTED_MODULE_5__src_utils__["h" /* format */])("YYYY/mm/dd", _date);
        },
        datetime: function datetime() {
          return Object(__WEBPACK_IMPORTED_MODULE_5__src_utils__["h" /* format */])("YYYY/mm/dd HH:MM:SS", _date);
        },
        time: function time() {
          return Object(__WEBPACK_IMPORTED_MODULE_5__src_utils__["h" /* format */])("HH:MM:SS", _date);
        }
      };
      return formatFnc[this.type]();
    },
    onCancel: function onCancel() {
      this.show = false;
      this.$emit("on-cancel");
    },
    onConfirm: function onConfirm() {
      var value = this.fncTime();
      this.currentValue = value;
      this.show = false;
      this.$emit("input", this.currentValue);
      this.$emit("on-confirm", this.currentValue);
      this.dispatch("From-Item", "change", this.currentValue);
    },
    click: function click() {
      if (this.disabled) {
        return;
      }
      this.show = true;
      this.$emit("on-show");
    },
    initOptions: function initOptions() {
      var _this = this;

      this.options = [];
      var typeFnc = {
        date: function date() {
          var year = Object(__WEBPACK_IMPORTED_MODULE_5__src_utils__["g" /* createYear */])(_this);
          var month = Object(__WEBPACK_IMPORTED_MODULE_5__src_utils__["e" /* createMonth */])();
          _this.$set(_this.options, 0, year);
          _this.$set(_this.options, 1, month);
          _this.initDay();
        },
        datetime: function datetime() {
          typeFnc.date();
          var hours = Object(__WEBPACK_IMPORTED_MODULE_5__src_utils__["b" /* createHours */])();
          var minute = Object(__WEBPACK_IMPORTED_MODULE_5__src_utils__["d" /* createMinute */])();
          _this.$set(_this.options, 3, hours);
          _this.$set(_this.options, 4, minute);
          _this.$set(_this.options, 5, minute);
        },
        time: function time() {
          var hours = Object(__WEBPACK_IMPORTED_MODULE_5__src_utils__["b" /* createHours */])();
          var minute = Object(__WEBPACK_IMPORTED_MODULE_5__src_utils__["d" /* createMinute */])();
          _this.$set(_this.options, 0, hours);
          _this.$set(_this.options, 1, minute);
          _this.$set(_this.options, 2, minute);
        }
      };
      typeFnc[this.type]();
    },
    initDay: function initDay() {
      var day = Object(__WEBPACK_IMPORTED_MODULE_5__src_utils__["a" /* createDay */])(this);
      this.$set(this.options, 2, day);
    }
  },
  mounted: function mounted() {
    if (!this.disabled) {
      this.initOptions();
      this.index = Object(__WEBPACK_IMPORTED_MODULE_5__src_utils__["c" /* createIndex */])(this);
    }
  }
});

/***/ }),
/* 111 */
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
/* 112 */
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
/* 113 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_promise__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_promise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_typeof__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_typeof___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_typeof__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils__ = __webpack_require__(7);







var model = {};
/* harmony default export */ __webpack_exports__["a"] = ({
  name: "From",
  data: function data() {
    return {
      components: ""
    };
  },

  props: {
    rules: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    model: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    statusIcon: {
      type: Boolean
    },
    successIcon: {
      type: String,
      default: "iconuncheck"
    },
    errorIcon: {
      type: String,
      default: "iconcuowu"
    },
    labelWidth: {
      type: Number
    }
  },
  watch: {
    model: {
      handler: function handler(val) {
        this.resetModel();
        this.components.map(function (item) {
          item.itemVal = val[item.prop];
        });
      },

      deep: true
    }
  },
  mounted: function mounted() {
    this.init();
    this.resetModel();
  },

  methods: {
    resetModel: function resetModel() {
      for (var key in this.model) {
        var type = __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_typeof___default()(this.model[key]);
        if (type === "object") {
          type = this.model[key] instanceof Array ? "array" : "object";
        }
        model[key] = type;
      }
    },
    init: function init() {
      var components = Object(__WEBPACK_IMPORTED_MODULE_4__utils__["b" /* findComponentsDownward */])(this, "From-Item");
      if (components) {
        this.components = components;
      }
    },
    validateField: function validateField(prop, eventName) {
      var _this = this;

      return new __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_promise___default.a(function (resolve) {
        _this.components.map(function (item) {
          if (item.prop === prop) {
            item.validator(eventName).then(function (res) {
              resolve(res);
            });
          }
        });
      });
    },
    validate: function validate() {
      var _this2 = this;

      var cb = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function () {};
      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
        var array, i, res;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                array = [];
                i = 0;

              case 2:
                if (!(i < _this2.components.length)) {
                  _context.next = 10;
                  break;
                }

                _context.next = 5;
                return _this2.components[i].validator();

              case 5:
                res = _context.sent;

                if (res !== "error") {
                  i += 1;
                } else {
                  i = _this2.components.length;
                }
                array.push(res);
                _context.next = 2;
                break;

              case 10:
                cb(!array.includes("error"));

              case 11:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, _this2);
      }))();
    },
    resetFields: function resetFields() {
      var type = {
        string: "",
        array: [],
        object: {},
        number: ""
      };
      for (var key in this.model) {
        this.model[key] = type[model[key]];
      }
      this.clearValidate();
    },
    clearValidate: function clearValidate() {
      this.components.map(function (item) {
        item.ruleState = "";
      });
    }
  }
});

/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(88);
__webpack_require__(55);
__webpack_require__(54);
__webpack_require__(115);
__webpack_require__(126);
__webpack_require__(127);
module.exports = __webpack_require__(2).Promise;


/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(22);
var global = __webpack_require__(1);
var ctx = __webpack_require__(23);
var classof = __webpack_require__(56);
var $export = __webpack_require__(20);
var isObject = __webpack_require__(8);
var aFunction = __webpack_require__(24);
var anInstance = __webpack_require__(116);
var forOf = __webpack_require__(117);
var speciesConstructor = __webpack_require__(73);
var task = __webpack_require__(74).set;
var microtask = __webpack_require__(121)();
var newPromiseCapabilityModule = __webpack_require__(62);
var perform = __webpack_require__(75);
var userAgent = __webpack_require__(122);
var promiseResolve = __webpack_require__(76);
var PROMISE = 'Promise';
var TypeError = global.TypeError;
var process = global.process;
var versions = process && process.versions;
var v8 = versions && versions.v8 || '';
var $Promise = global[PROMISE];
var isNode = classof(process) == 'process';
var empty = function () { /* empty */ };
var Internal, newGenericPromiseCapability, OwnPromiseCapability, Wrapper;
var newPromiseCapability = newGenericPromiseCapability = newPromiseCapabilityModule.f;

var USE_NATIVE = !!function () {
  try {
    // correct subclassing with @@species support
    var promise = $Promise.resolve(1);
    var FakePromise = (promise.constructor = {})[__webpack_require__(6)('species')] = function (exec) {
      exec(empty, empty);
    };
    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    return (isNode || typeof PromiseRejectionEvent == 'function')
      && promise.then(empty) instanceof FakePromise
      // v8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
      // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
      // we can't detect it synchronously, so just check versions
      && v8.indexOf('6.6') !== 0
      && userAgent.indexOf('Chrome/66') === -1;
  } catch (e) { /* empty */ }
}();

// helpers
var isThenable = function (it) {
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};
var notify = function (promise, isReject) {
  if (promise._n) return;
  promise._n = true;
  var chain = promise._c;
  microtask(function () {
    var value = promise._v;
    var ok = promise._s == 1;
    var i = 0;
    var run = function (reaction) {
      var handler = ok ? reaction.ok : reaction.fail;
      var resolve = reaction.resolve;
      var reject = reaction.reject;
      var domain = reaction.domain;
      var result, then, exited;
      try {
        if (handler) {
          if (!ok) {
            if (promise._h == 2) onHandleUnhandled(promise);
            promise._h = 1;
          }
          if (handler === true) result = value;
          else {
            if (domain) domain.enter();
            result = handler(value); // may throw
            if (domain) {
              domain.exit();
              exited = true;
            }
          }
          if (result === reaction.promise) {
            reject(TypeError('Promise-chain cycle'));
          } else if (then = isThenable(result)) {
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch (e) {
        if (domain && !exited) domain.exit();
        reject(e);
      }
    };
    while (chain.length > i) run(chain[i++]); // variable length - can't use forEach
    promise._c = [];
    promise._n = false;
    if (isReject && !promise._h) onUnhandled(promise);
  });
};
var onUnhandled = function (promise) {
  task.call(global, function () {
    var value = promise._v;
    var unhandled = isUnhandled(promise);
    var result, handler, console;
    if (unhandled) {
      result = perform(function () {
        if (isNode) {
          process.emit('unhandledRejection', value, promise);
        } else if (handler = global.onunhandledrejection) {
          handler({ promise: promise, reason: value });
        } else if ((console = global.console) && console.error) {
          console.error('Unhandled promise rejection', value);
        }
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
    } promise._a = undefined;
    if (unhandled && result.e) throw result.v;
  });
};
var isUnhandled = function (promise) {
  return promise._h !== 1 && (promise._a || promise._c).length === 0;
};
var onHandleUnhandled = function (promise) {
  task.call(global, function () {
    var handler;
    if (isNode) {
      process.emit('rejectionHandled', promise);
    } else if (handler = global.onrejectionhandled) {
      handler({ promise: promise, reason: promise._v });
    }
  });
};
var $reject = function (value) {
  var promise = this;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  promise._v = value;
  promise._s = 2;
  if (!promise._a) promise._a = promise._c.slice();
  notify(promise, true);
};
var $resolve = function (value) {
  var promise = this;
  var then;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  try {
    if (promise === value) throw TypeError("Promise can't be resolved itself");
    if (then = isThenable(value)) {
      microtask(function () {
        var wrapper = { _w: promise, _d: false }; // wrap
        try {
          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
        } catch (e) {
          $reject.call(wrapper, e);
        }
      });
    } else {
      promise._v = value;
      promise._s = 1;
      notify(promise, false);
    }
  } catch (e) {
    $reject.call({ _w: promise, _d: false }, e); // wrap
  }
};

// constructor polyfill
if (!USE_NATIVE) {
  // 25.4.3.1 Promise(executor)
  $Promise = function Promise(executor) {
    anInstance(this, $Promise, PROMISE, '_h');
    aFunction(executor);
    Internal.call(this);
    try {
      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
    } catch (err) {
      $reject.call(this, err);
    }
  };
  // eslint-disable-next-line no-unused-vars
  Internal = function Promise(executor) {
    this._c = [];             // <- awaiting reactions
    this._a = undefined;      // <- checked in isUnhandled reactions
    this._s = 0;              // <- state
    this._d = false;          // <- done
    this._v = undefined;      // <- value
    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
    this._n = false;          // <- notify
  };
  Internal.prototype = __webpack_require__(123)($Promise.prototype, {
    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
    then: function then(onFulfilled, onRejected) {
      var reaction = newPromiseCapability(speciesConstructor(this, $Promise));
      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail = typeof onRejected == 'function' && onRejected;
      reaction.domain = isNode ? process.domain : undefined;
      this._c.push(reaction);
      if (this._a) this._a.push(reaction);
      if (this._s) notify(this, false);
      return reaction.promise;
    },
    // 25.4.5.1 Promise.prototype.catch(onRejected)
    'catch': function (onRejected) {
      return this.then(undefined, onRejected);
    }
  });
  OwnPromiseCapability = function () {
    var promise = new Internal();
    this.promise = promise;
    this.resolve = ctx($resolve, promise, 1);
    this.reject = ctx($reject, promise, 1);
  };
  newPromiseCapabilityModule.f = newPromiseCapability = function (C) {
    return C === $Promise || C === Wrapper
      ? new OwnPromiseCapability(C)
      : newGenericPromiseCapability(C);
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Promise: $Promise });
__webpack_require__(48)($Promise, PROMISE);
__webpack_require__(124)(PROMISE);
Wrapper = __webpack_require__(2)[PROMISE];

// statics
$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
  // 25.4.4.5 Promise.reject(r)
  reject: function reject(r) {
    var capability = newPromiseCapability(this);
    var $$reject = capability.reject;
    $$reject(r);
    return capability.promise;
  }
});
$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
  // 25.4.4.6 Promise.resolve(x)
  resolve: function resolve(x) {
    return promiseResolve(LIBRARY && this === Wrapper ? $Promise : this, x);
  }
});
$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(125)(function (iter) {
  $Promise.all(iter)['catch'](empty);
})), PROMISE, {
  // 25.4.4.1 Promise.all(iterable)
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var values = [];
      var index = 0;
      var remaining = 1;
      forOf(iterable, false, function (promise) {
        var $index = index++;
        var alreadyCalled = false;
        values.push(undefined);
        remaining++;
        C.resolve(promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[$index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if (result.e) reject(result.v);
    return capability.promise;
  },
  // 25.4.4.4 Promise.race(iterable)
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var reject = capability.reject;
    var result = perform(function () {
      forOf(iterable, false, function (promise) {
        C.resolve(promise).then(capability.resolve, reject);
      });
    });
    if (result.e) reject(result.v);
    return capability.promise;
  }
});


/***/ }),
/* 116 */
/***/ (function(module, exports) {

module.exports = function (it, Constructor, name, forbiddenField) {
  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};


/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(23);
var call = __webpack_require__(118);
var isArrayIter = __webpack_require__(119);
var anObject = __webpack_require__(9);
var toLength = __webpack_require__(36);
var getIterFn = __webpack_require__(70);
var BREAK = {};
var RETURN = {};
var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
  var iterFn = ITERATOR ? function () { return iterable; } : getIterFn(iterable);
  var f = ctx(fn, that, entries ? 2 : 1);
  var index = 0;
  var length, step, iterator, result;
  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if (result === BREAK || result === RETURN) return result;
  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
    result = call(iterator, f, step.value, entries);
    if (result === BREAK || result === RETURN) return result;
  }
};
exports.BREAK = BREAK;
exports.RETURN = RETURN;


/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(9);
module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};


/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__(30);
var ITERATOR = __webpack_require__(6)('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),
/* 120 */
/***/ (function(module, exports) {

// fast apply, http://jsperf.lnkit.com/fast-apply/5
module.exports = function (fn, args, that) {
  var un = that === undefined;
  switch (args.length) {
    case 0: return un ? fn()
                      : fn.call(that);
    case 1: return un ? fn(args[0])
                      : fn.call(that, args[0]);
    case 2: return un ? fn(args[0], args[1])
                      : fn.call(that, args[0], args[1]);
    case 3: return un ? fn(args[0], args[1], args[2])
                      : fn.call(that, args[0], args[1], args[2]);
    case 4: return un ? fn(args[0], args[1], args[2], args[3])
                      : fn.call(that, args[0], args[1], args[2], args[3]);
  } return fn.apply(that, args);
};


/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(1);
var macrotask = __webpack_require__(74).set;
var Observer = global.MutationObserver || global.WebKitMutationObserver;
var process = global.process;
var Promise = global.Promise;
var isNode = __webpack_require__(21)(process) == 'process';

module.exports = function () {
  var head, last, notify;

  var flush = function () {
    var parent, fn;
    if (isNode && (parent = process.domain)) parent.exit();
    while (head) {
      fn = head.fn;
      head = head.next;
      try {
        fn();
      } catch (e) {
        if (head) notify();
        else last = undefined;
        throw e;
      }
    } last = undefined;
    if (parent) parent.enter();
  };

  // Node.js
  if (isNode) {
    notify = function () {
      process.nextTick(flush);
    };
  // browsers with MutationObserver, except iOS Safari - https://github.com/zloirock/core-js/issues/339
  } else if (Observer && !(global.navigator && global.navigator.standalone)) {
    var toggle = true;
    var node = document.createTextNode('');
    new Observer(flush).observe(node, { characterData: true }); // eslint-disable-line no-new
    notify = function () {
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if (Promise && Promise.resolve) {
    // Promise.resolve without an argument throws an error in LG WebOS 2
    var promise = Promise.resolve(undefined);
    notify = function () {
      promise.then(flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessag
  // - onreadystatechange
  // - setTimeout
  } else {
    notify = function () {
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(global, flush);
    };
  }

  return function (fn) {
    var task = { fn: fn, next: undefined };
    if (last) last.next = task;
    if (!head) {
      head = task;
      notify();
    } last = task;
  };
};


/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(1);
var navigator = global.navigator;

module.exports = navigator && navigator.userAgent || '';


/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

var hide = __webpack_require__(12);
module.exports = function (target, src, safe) {
  for (var key in src) {
    if (safe && target[key]) target[key] = src[key];
    else hide(target, key, src[key]);
  } return target;
};


/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(1);
var core = __webpack_require__(2);
var dP = __webpack_require__(15);
var DESCRIPTORS = __webpack_require__(4);
var SPECIES = __webpack_require__(6)('species');

module.exports = function (KEY) {
  var C = typeof core[KEY] == 'function' ? core[KEY] : global[KEY];
  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
    configurable: true,
    get: function () { return this; }
  });
};


/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR = __webpack_require__(6)('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function () { SAFE_CLOSING = true; };
  // eslint-disable-next-line no-throw-literal
  Array.from(riter, function () { throw 2; });
} catch (e) { /* empty */ }

module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR]();
    iter.next = function () { return { done: safe = true }; };
    arr[ITERATOR] = function () { return iter; };
    exec(arr);
  } catch (e) { /* empty */ }
  return safe;
};


/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// https://github.com/tc39/proposal-promise-finally

var $export = __webpack_require__(20);
var core = __webpack_require__(2);
var global = __webpack_require__(1);
var speciesConstructor = __webpack_require__(73);
var promiseResolve = __webpack_require__(76);

$export($export.P + $export.R, 'Promise', { 'finally': function (onFinally) {
  var C = speciesConstructor(this, core.Promise || global.Promise);
  var isFunction = typeof onFinally == 'function';
  return this.then(
    isFunction ? function (x) {
      return promiseResolve(C, onFinally()).then(function () { return x; });
    } : onFinally,
    isFunction ? function (e) {
      return promiseResolve(C, onFinally()).then(function () { throw e; });
    } : onFinally
  );
} });


/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/tc39/proposal-promise-try
var $export = __webpack_require__(20);
var newPromiseCapability = __webpack_require__(62);
var perform = __webpack_require__(75);

$export($export.S, 'Promise', { 'try': function (callbackfn) {
  var promiseCapability = newPromiseCapability.f(this);
  var result = perform(callbackfn);
  (result.e ? promiseCapability.reject : promiseCapability.resolve)(result.v);
  return promiseCapability.promise;
} });


/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__(41);
var hiddenKeys = __webpack_require__(33).concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),
/* 129 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_async_validator__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Icon__ = __webpack_require__(3);







/* harmony default export */ __webpack_exports__["a"] = ({
  name: "From-Item",
  components: { Icon: __WEBPACK_IMPORTED_MODULE_3__Icon__["default"] },
  props: {
    label: {
      type: String
    },
    prop: {
      type: String
    },
    rule: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    cellInline: {
      type: Boolean,
      default: true
    },
    labelWidth: {
      type: Number
    },
    validateLoading: {
      type: Boolean
    }
  },
  data: function data() {
    return {
      parent: "",
      eventName: "",
      itemVal: undefined,
      ruleState: "",
      message: "",
      required: false,
      loadingShow: false
    };
  },

  watch: {
    rule: function rule() {
      this.requiredFnc();
    },
    rules: function rules() {
      this.requiredFnc();
    }
  },
  computed: {
    statusIcon: function statusIcon() {
      if (this.parent) {
        return this.parent.statusIcon;
      }
      return false;
    },
    successIcon: function successIcon() {
      if (this.parent) {
        return this.parent.successIcon;
      }
      return false;
    },
    errorIcon: function errorIcon() {
      if (this.parent) {
        return this.parent.errorIcon;
      }
      return false;
    },
    rules: function rules() {
      if (this.parent) {
        return this.parent.rules;
      }
      return this.rule;
    },
    style: function style() {
      if (this.parent) {
        var width = void 0;
        if (!this.cellInline) {
          width = "100%";
        } else {
          width = this.labelWidth ? this.labelWidth + "px" : this.parent.labelWidth + "px";
        }
        return {
          width: width
        };
      }
      return {
        width: "auto"
      };
    },
    icon: function icon() {
      if (this.loadingShow) {
        return "iconloading1";
      }
      if (this.ruleState === "success") {
        return this.successIcon;
      }
      if (this.ruleState === "error") {
        return this.errorIcon;
      }
    }
  },
  mounted: function mounted() {
    this.init();
  },

  methods: {
    init: function init() {
      var parent = Object(__WEBPACK_IMPORTED_MODULE_2__utils__["a" /* findComponentUpward */])(this, "From");
      if (parent) {
        this.parent = parent;
        this.itemVal = parent.model[this.prop] || "";
      }
      this.requiredFnc();
    },
    validator: function validator() {
      var _this = this;

      var eventName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.eventName;

      return new __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a(function (resolve) {
        var rules = _this.eventNameFnc(eventName);
        if (!rules && rules.length === 0) {
          _this.loadingShow = false;
          _this.ruleState = "success";
          resolve(_this.ruleState);
          return;
        }
        if (_this.validateLoading) {
          _this.loadingShow = true;
        }

        var descriptor = {};
        descriptor[_this.prop] = rules;
        var validator = new __WEBPACK_IMPORTED_MODULE_1_async_validator__["a" /* default */](descriptor);
        var model = {};
        model[_this.prop] = _this.itemVal;
        validator.validate(model, { firstFields: true }, function (errors) {
          _this.ruleState = !errors ? "success" : "error";
          _this.message = errors ? errors[0].message : "";
          _this.loadingShow = false;
          resolve(_this.ruleState);
        }).then(function () {
          _this.ruleState = "success";
          _this.loadingShow = false;
          resolve(_this.ruleState);
        }).catch(function (_ref) {
          var errors = _ref.errors;

          _this.ruleState = !errors ? "success" : "error";
          _this.message = errors ? errors[0].message : "";
          _this.loadingShow = false;
          resolve(_this.ruleState);
        });
      });
    },
    parentRule: function parentRule() {
      if (this.parent) {
        var rule = this.parent.rules[this.prop] || [];
        var array = [].concat(this.rule, rule);
        return array;
      }
    },
    requiredFnc: function requiredFnc() {
      var rules = this.parentRule();
      var array = rules.map(function (item) {
        return item.required;
      });
      this.required = array.includes(true);
    },
    eventNameFnc: function eventNameFnc(eventName) {
      var rules = this.parentRule();
      return rules.filter(function (item) {
        if (!item.trigger || eventName === "") {
          return true;
        }
        if (Array.isArray(item.trigger)) {
          return item.trigger.indexOf(eventName) > -1;
        }
        return item.trigger === eventName;
      });
    }
  }
});

/***/ }),
/* 130 */
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
/* 131 */
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
/* 132 */
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
/* 133 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Icon__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_emitter__ = __webpack_require__(10);





/* harmony default export */ __webpack_exports__["a"] = ({
  name: "Radio",
  mixins: [__WEBPACK_IMPORTED_MODULE_2__utils_emitter__["a" /* default */]],
  components: { Icon: __WEBPACK_IMPORTED_MODULE_0__Icon__["default"] },
  props: {
    value: {
      type: [Number, String, Boolean]
    },
    type: {
      type: String,
      default: "default",
      validator: function validator(value) {
        return ["default", "errer", "success", "warning"].includes(value);
      }
    },
    disabled: {
      type: Boolean,
      default: false
    },
    label: {
      type: [String, Number, Boolean]
    },
    icon: {
      type: String,
      default: "iconradioactive"
    }
  },
  data: function data() {
    return {
      currentValue: this.value,
      parent: ""
    };
  },

  methods: {
    change: function change(e) {
      if (this.disabled) {
        return;
      }
      if (this.parent) {
        this.currentValue = e.target.value;
        this.parent.change(this.currentValue);
        return;
      }
      this.currentValue = e.target.checked;
      this.$emit("input", this.currentValue);
      this.$emit("on-change", this.currentValue);
      this.dispatch("From-Item", "change", this.currentValue);
    },
    parentFnc: function parentFnc(options) {
      if (this.parent) {
        return this.parent[options] ? this.parent[options] : this[options];
      }
      return this[options];
    }
  },
  watch: {
    value: function value(val) {
      this.currentValue = val;
    }
  },
  computed: {
    active: function active() {
      return this.parent ? this.parent.currentValue === this.label : this.currentValue || this.currentValue === 0;
    },
    parentDisabled: function parentDisabled() {
      var parentFnc = this.parentFnc;

      return parentFnc("disabled");
    },
    parentType: function parentType() {
      var parentFnc = this.parentFnc;

      return parentFnc("type");
    },
    parentIcon: function parentIcon() {
      var parentFnc = this.parentFnc;

      return parentFnc("icon");
    }
  },
  mounted: function mounted() {
    var parent = Object(__WEBPACK_IMPORTED_MODULE_1__utils__["a" /* findComponentUpward */])(this, "Radio-Group");
    if (parent) {
      this.parent = parent;
    }
  }
});

/***/ }),
/* 134 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_emitter__ = __webpack_require__(10);



/* harmony default export */ __webpack_exports__["a"] = ({
  name: "Radio-Group",
  mixins: [__WEBPACK_IMPORTED_MODULE_0__utils_emitter__["a" /* default */]],
  props: {
    inline: {
      type: Boolean
    },
    value: {
      type: [String, Number, Boolean]
    },
    disabled: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String
    }
  },
  data: function data() {
    return {
      children: "",
      currentValue: this.value
    };
  },

  methods: {
    change: function change(val) {
      this.currentValue = val;
      this.$emit("input", val);
      this.$emit("on-change", val);
      this.dispatch("From-Item", "change", val);
    }
  },
  watch: {
    value: function value(val) {
      this.currentValue = val;
    }
  }
});

/***/ }),
/* 135 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixins_props__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixins_props___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__mixins_props__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_emitter__ = __webpack_require__(10);




/* harmony default export */ __webpack_exports__["a"] = ({
  name: "v-Switch",
  mixins: [__WEBPACK_IMPORTED_MODULE_0__mixins_props__["type"], __WEBPACK_IMPORTED_MODULE_1__utils_emitter__["a" /* default */]],
  props: {
    value: {
      type: [String, Number, Boolean]
    },
    disabled: {
      type: Boolean
    },
    activeValue: {
      type: [String, Number, Boolean],
      default: undefined
    },
    inactiveValue: {
      type: [String, Number, Boolean],
      default: undefined
    }
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
      if (this.disabled) {
        return;
      }
      if (typeof this.activeValue !== "undefined" && typeof this.inactiveValue !== "undefined") {
        this.currentValue = this.active ? this.inactiveValue : this.activeValue;
      } else {
        this.currentValue = !this.currentValue;
      }
      this.$emit("on-change", this.currentValue);
      this.$emit("input", this.currentValue);
      this.dispatch("From-Item", "change", this.currentValue);
    }
  },
  computed: {
    active: function active() {
      if (typeof this.activeValue !== "undefined" && typeof this.inactiveValue !== "undefined") {
        return this.currentValue === this.activeValue;
      }
      return this.currentValue;
    }
  }
});

/***/ }),
/* 136 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_emitter_js__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_upload__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_mixins__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_multiple__ = __webpack_require__(234);






/* harmony default export */ __webpack_exports__["a"] = ({
  name: "Upload",
  components: { vUpload: __WEBPACK_IMPORTED_MODULE_1__components_upload__["a" /* default */], Multiple: __WEBPACK_IMPORTED_MODULE_3__components_multiple__["a" /* default */] },
  mixins: [__WEBPACK_IMPORTED_MODULE_2__components_mixins__["a" /* default */], __WEBPACK_IMPORTED_MODULE_0__utils_emitter_js__["a" /* default */]],
  props: {
    value: {
      type: [String, Array]
    },
    icon: String,
    valueString: {
      type: Boolean,
      default: true
    }
  },
  data: function data() {
    return {
      currentValue: this.value
    };
  },

  watch: {
    value: function value(val) {
      this.currentValue = val;
      this.dispatch("From-Item", "change", val);
    }
  },
  methods: {
    input: function input(val) {
      this.$emit("input", val);
    },
    onProgressPercent: function onProgressPercent(percent) {
      this.$refs.upload.uploadProgress(percent);
    }
  }
});

/***/ }),
/* 137 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_upload_vue__ = __webpack_require__(138);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_1f24f071_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_upload_vue__ = __webpack_require__(233);
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_upload_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_1f24f071_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_upload_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "packages/components/Upload/components/upload.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1f24f071", Component.options)
  } else {
    hotAPI.reload("data-v-1f24f071", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 138 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixins__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__uploadPlaceholder__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Toast__ = __webpack_require__(64);






var compressList = ["png", "PNG", "jpg", "JPG", "jpeg", "JPEG"];
/* harmony default export */ __webpack_exports__["a"] = ({
  name: "single-upload",
  components: { UploadPlaceholder: __WEBPACK_IMPORTED_MODULE_1__uploadPlaceholder__["a" /* default */] },
  mixins: [__WEBPACK_IMPORTED_MODULE_0__mixins__["a" /* default */]],
  props: {
    value: {
      type: String
    },
    icon: {
      type: String,
      default: "iconcamera"
    }
  },
  data: function data() {
    return {
      file: "",
      progress: 0,
      src: ""
    };
  },

  computed: {
    computedDisabled: function computedDisabled() {
      return this.disabled || this.progress !== 0;
    }
  },
  methods: {
    change: function change(e) {
      if (this.disabled) {
        return;
      }
      var file = e.target.files[0];
      if (!file) {
        return;
      }

      var type = Object(__WEBPACK_IMPORTED_MODULE_2__utils__["b" /* getType */])(file.name);
      if (this.accept.length) {
        if (!this.accept.includes(type)) {
          __WEBPACK_IMPORTED_MODULE_3__Toast__["default"].info(this.acceptErrorMessage);
          return;
        }
      }

      var size = Math.round(file.size / 1024 * 100) / 100;
      if (size > this.size) {
        __WEBPACK_IMPORTED_MODULE_3__Toast__["default"].info("\u8BF7\u4E0A\u4F20\u5C0F\u4E8E" + this.size / 1024 + "M\u7684\u6587\u4EF6");
        return;
      }
      if (this.isCompress(type, size)) {
        this.canvasDataURL(URL.createObjectURL(file));
        return;
      }
      this.$emit("on-change");
      this.file = file;
      this.upload(file);
    },
    isCompress: function isCompress(type, size) {
      return this.compress && compressList.includes(type) && size > this.compressSize;
    },
    canvasDataURL: function canvasDataURL(base) {
      var img = new Image();
      img.src = base;
      var that = this;
      function ImgOnload() {
        var scale = this.width / this.height;
        var width = that.imgWidth === false || this.width <= that.imgWidth ? this.width : that.imgWidth;
        var height = width / scale;
        var canvas = that.$refs.canvas;
        canvas.width = width;
        canvas.height = height;

        var context = canvas.getContext("2d");
        context.drawImage(this, 0, 0, width, height);
        canvas.toBlob(function (blob) {
          that.file = blob;
          that.upload(blob);
          that.$emit("on-change", blob, that.options);
        }, "image/png", that.quality);

        window.URL.revokeObjectURL(this.src);
      }
      img.onload = ImgOnload;
    },
    onload: function onload(e) {
      this.progress = 0;
      this.$emit("input", e);
      if (this.onSuccess) {
        this.onSuccess(this.file, e);
        return;
      }
      __WEBPACK_IMPORTED_MODULE_3__Toast__["default"].info(this.onSuccessText);
    },
    uploadProgress: function uploadProgress(e) {
      this.progress = e;
      if (this.onProgress) {
        this.onProgress(this.file, e);
      }
    },
    uploadError: function uploadError(e) {
      this.progress = 0;
      if (this.onError) {
        this.onSuccess(this.file, e);
        return;
      }
      __WEBPACK_IMPORTED_MODULE_3__Toast__["default"].info(this.onErrorText);
    },
    uploadLoadend: function uploadLoadend(e) {
      this.clearInput();
      if (this.onloadend) {
        this.onloadend(this.file, e);
      }
    },
    upload: function upload(file) {
      this.clearInput();
      if (!this.beforeUpload) {
        Object(__WEBPACK_IMPORTED_MODULE_2__utils__["a" /* fetch */])(this, file);
        return;
      }
      this.beforeUpload(file);
    },
    onRemove: function onRemove() {
      this.clearInput();
      if (this.type === "single") {
        if (!this.beforeRemove) {
          this.$emit("input", "");
          return;
        }
        this.beforeRemove(this.file, this.value);
      }
    },
    clearInput: function clearInput() {
      this.$refs.input.value = null;
    }
  }
});

/***/ }),
/* 139 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_uploadPlaceholder_vue__ = __webpack_require__(140);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_d9ea621c_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_uploadPlaceholder_vue__ = __webpack_require__(231);
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_uploadPlaceholder_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_d9ea621c_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_uploadPlaceholder_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "packages/components/Upload/components/uploadPlaceholder.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-d9ea621c", Component.options)
  } else {
    hotAPI.reload("data-v-d9ea621c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 140 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Icon__ = __webpack_require__(3);



/* harmony default export */ __webpack_exports__["a"] = ({
  components: { Icon: __WEBPACK_IMPORTED_MODULE_0__Icon__["default"] },
  props: {
    url: String,
    iconSize: Number,
    icon: String,
    isImage: Boolean,
    showRemove: Boolean,
    index: Number
  },
  methods: {
    onRemove: function onRemove() {
      this.$emit("on-remove", this.index);
    }
  }
});

/***/ }),
/* 141 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixins__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__upload__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__uploadPlaceholder__ = __webpack_require__(139);





/* harmony default export */ __webpack_exports__["a"] = ({
  mixins: [__WEBPACK_IMPORTED_MODULE_0__mixins__["a" /* default */]],
  components: { Upload: __WEBPACK_IMPORTED_MODULE_1__upload__["a" /* default */], UploadPlaceholder: __WEBPACK_IMPORTED_MODULE_2__uploadPlaceholder__["a" /* default */] },
  props: {
    value: Array,
    icon: {
      type: String,
      default: "iconzengjia1"
    },
    valueString: Boolean
  },
  data: function data() {
    return {
      style: {
        width: 0,
        height: 0,
        marginTop: "8px"
      },
      currentValue: this.value
    };
  },

  watch: {
    value: function value(val) {
      this.currentValue = val;
    }
  },
  computed: {
    show: function show() {
      if (!this.maxNumber) {
        return true;
      }
      return this.currentValue.length < this.maxNumber;
    }
  },
  methods: {
    onRemove: function onRemove(index) {
      if (!this.beforeRemove) {
        this.currentValue.splice(index, 1);
        this.$emit("input", this.currentValue);
        return;
      }
      this.beforeRemove(this.currentValue[index], this.currentValue, index);
    },
    input: function input(val) {
      this.currentValue.push(val);
      this.$emit("input", this.currentValue);
    },
    uploadProgress: function uploadProgress(percent) {
      this.$refs.upload.uploadProgress(percent);
    }
  },
  mounted: function mounted() {
    var _this = this;

    this.$nextTick(function () {
      if (_this.$refs.upload) {
        var _$refs$upload$$el = _this.$refs.upload.$el,
            offsetWidth = _$refs$upload$$el.offsetWidth,
            offsetHeight = _$refs$upload$$el.offsetHeight;

        _this.style.width = offsetWidth + "px";
        _this.style.height = offsetHeight + "px";
        return;
      }
      _this.style.width = 136 + "px";
      _this.style.height = 80 + "px";
    });
  }
});

/***/ }),
/* 142 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__spin__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__loadingBar__ = __webpack_require__(97);





/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'Loading',
  loadingBar: __WEBPACK_IMPORTED_MODULE_1__loadingBar__["default"],
  spin: __WEBPACK_IMPORTED_MODULE_0__spin__["default"]
});

/***/ }),
/* 143 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_vue__ = __webpack_require__(144);


/* harmony default export */ __webpack_exports__["default"] = (__WEBPACK_IMPORTED_MODULE_0__index_vue__["a" /* default */]);

/***/ }),
/* 144 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(100);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_098a7812_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(145);
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
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_098a7812_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "packages/components/ActionSheet/index.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-098a7812", Component.options)
  } else {
    hotAPI.reload("data-v-098a7812", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 145 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "vvm-Action-Sheet" },
    [
      _c(
        "div",
        {
          staticClass: "vvm-Action-Sheet-placeholder",
          on: { click: _vm.click }
        },
        [
          _c("Input", {
            attrs: {
              readonly: "",
              disabled: _vm.disabled,
              placeholder: _vm.placeholder,
              "right-icon": _vm.rightArrow ? "iconlist-rigthl" : ""
            },
            model: {
              value: _vm.placeholderText,
              callback: function($$v) {
                _vm.placeholderText = $$v
              },
              expression: "placeholderText"
            }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "Layer",
        {
          attrs: { isMask: true, direction: "bottom" },
          on: { "on-mask": _vm.mask },
          model: {
            value: _vm.show,
            callback: function($$v) {
              _vm.show = $$v
            },
            expression: "show"
          }
        },
        [
          _c("div", { staticClass: "vvm-Action-Sheet-Model" }, [
            _vm.data.length === 0
              ? _c(
                  "div",
                  { staticClass: "vvm-Action-Sheet-loading" },
                  [
                    _c("Icon", {
                      staticClass: "vvm-loading",
                      attrs: { icon: "iconloading1", size: 24 }
                    })
                  ],
                  1
                )
              : _c(
                  "div",
                  { staticClass: "vvm-Action-Sheet-Model-list" },
                  _vm._l(_vm.data, function(item, $index) {
                    return _c(
                      "button",
                      {
                        key: $index,
                        class: [
                          item.disabled
                            ? "vvm-Action-Sheet-item disabled"
                            : "vvm-Action-Sheet-item"
                        ],
                        on: {
                          click: function($event) {
                            return _vm.clickItem(item)
                          }
                        }
                      },
                      [_vm._v(_vm._s(item[_vm.label]))]
                    )
                  }),
                  0
                ),
            _vm._v(" "),
            _c(
              "button",
              {
                staticClass: "vvm-Action-Sheet-close",
                on: { click: _vm.close }
              },
              [_vm._v(_vm._s(_vm.closeText))]
            )
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
    require("vue-hot-reload-api")      .rerender("data-v-098a7812", esExports)
  }
}

/***/ }),
/* 146 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_vue__ = __webpack_require__(147);



/* harmony default export */ __webpack_exports__["default"] = (__WEBPACK_IMPORTED_MODULE_0__index_vue__["a" /* default */]);

/***/ }),
/* 147 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(101);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_11461d08_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(148);
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
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_11461d08_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "packages/components/Backtop/index.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-11461d08", Component.options)
  } else {
    hotAPI.reload("data-v-11461d08", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 148 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("transition", { attrs: { name: "fade" } }, [
    _c(
      "div",
      {
        directives: [
          {
            name: "show",
            rawName: "v-show",
            value: _vm.show,
            expression: "show"
          }
        ],
        staticClass: "vvm-Backtop",
        style: { right: _vm.right + "px", bottom: _vm.bottom + "px" },
        on: {
          click: function($event) {
            $event.stopPropagation()
            return _vm.click($event)
          }
        }
      },
      [_vm._t("default")],
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
    require("vue-hot-reload-api")      .rerender("data-v-11461d08", esExports)
  }
}

/***/ }),
/* 149 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_vue__ = __webpack_require__(150);



/* harmony default export */ __webpack_exports__["default"] = (__WEBPACK_IMPORTED_MODULE_0__index_vue__["a" /* default */]);

/***/ }),
/* 150 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(102);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_67450c9a_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(151);
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
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_67450c9a_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "packages/components/Button/index.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-67450c9a", Component.options)
  } else {
    hotAPI.reload("data-v-67450c9a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 151 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "button",
    {
      class: _vm.clasess,
      attrs: { disabled: _vm.tagDisabled },
      on: { click: _vm.click }
    },
    [
      _c("Icon", {
        directives: [
          {
            name: "show",
            rawName: "v-show",
            value: _vm.currentLoading,
            expression: "currentLoading"
          }
        ],
        staticClass: "vvm-loading",
        attrs: { icon: "iconloading1" }
      }),
      _vm._v(" "),
      _c(
        "span",
        { class: [this.plain ? "vvm-text-color-" + this.type : ""] },
        [
          _vm.currentLoading
            ? [_vm._v(_vm._s(_vm.loadingText))]
            : [_vm._t("default")]
        ],
        2
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
    require("vue-hot-reload-api")      .rerender("data-v-67450c9a", esExports)
  }
}

/***/ }),
/* 152 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_vue__ = __webpack_require__(153);



/* harmony default export */ __webpack_exports__["default"] = (__WEBPACK_IMPORTED_MODULE_0__index_vue__["a" /* default */]);

/***/ }),
/* 153 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(103);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_04df4266_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(158);
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
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_04df4266_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "packages/components/Calendar/index.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-04df4266", Component.options)
  } else {
    hotAPI.reload("data-v-04df4266", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 154 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__(79);



var Time = new Date();
var timestamp = new Date(Time.getFullYear() + "/" + (Time.getMonth() + 1) + "/" + Time.getDate()).getTime();
/* harmony default export */ __webpack_exports__["a"] = ({
    watch: {
        locationDate: function locationDate(val) {
            if (val) {
                this.$refs.DateList.locationDateFnc();
            }
        }
    },
    data: function data() {
        return {
            options: []
        };
    },

    computed: {
        clasess: function clasess() {
            var _this = this;

            return function (options) {
                var timestamp2 = new Date(options.year + "/" + options.month + "/" + options.day).getTime();
                var optionsDate = options.year + "/" + options.month + "/" + options.day;
                var date = _this.options.year + "/" + _this.options.month + "/" + _this.options.day;
                if (_this.type === 'single') {
                    return ["vvm-Calendar-DateList-item-day", { selectDate: optionsDate === date }, {
                        disabledDate: _this.oldDateDisabledFnc(timestamp2) || _this.disabledList.includes(optionsDate)
                    }];
                }
                if (_this.options.length === 1) {
                    var timestamp1 = new Date(_this.options[0].year + "/" + _this.options[0].month + "/" + _this.options[0].day).getTime();
                    return ["vvm-Calendar-DateList-item-day", { selectDate: timestamp1 === timestamp2 }, {
                        disabledDate: _this.oldDateDisabledFnc(timestamp2) || _this.disabledList.includes(optionsDate)
                    }];
                }
                if (_this.options.length === 2) {
                    var _timestamp = new Date(_this.options[0].year + "/" + _this.options[0].month + "/" + _this.options[0].day).getTime();
                    var timestamp3 = new Date(_this.options[1].year + "/" + _this.options[1].month + "/" + _this.options[1].day).getTime();
                    return ["vvm-Calendar-DateList-item-day", {
                        selectDate: _timestamp === timestamp2 && timestamp2 === timestamp3
                    }, {
                        "selectDate startDate": _timestamp === timestamp2 && timestamp2 !== timestamp3
                    }, {
                        "selectDate endDate": timestamp2 === timestamp3 && _timestamp !== timestamp2
                    }, {
                        "select-Date-Middle": _timestamp < timestamp2 && timestamp2 < timestamp3
                    }, {
                        disabledDate: _this.oldDateDisabledFnc(timestamp2) || _this.disabledList.includes(optionsDate)
                    }];
                }
                return ["vvm-Calendar-DateList-item-day", {
                    disabledDate: _this.oldDateDisabledFnc(timestamp2) || _this.disabledList.includes(optionsDate)
                }];
            };
        }
    },
    methods: {
        style: function style(index, week) {
            if (index === 0) {
                var i = __WEBPACK_IMPORTED_MODULE_0__utils__["g" /* weeks */].indexOf(week);
                return { marginLeft: 100 / 7 * i + "%" };
            }
            return { marginLeft: "0px" };
        },
        clickDate: function clickDate(index, options) {
            var _this2 = this;

            if (this.oldDateDisabledFnc(new Date(options.year + "/" + options.month + "/" + options.day).getTime())) {
                return;
            }

            if (this.disabledList.includes(options.year + "/" + options.month + "/" + options.day)) {
                return;
            }
            var array = void 0;
            if (this.type === 'range') {
                if (this.options.length === 0) {
                    this.$set(this.options, 0, options);
                } else {
                    var compareDate = this.compareDate(options);
                    if (compareDate) {
                        this.$set(this.options, 1, options);
                    } else {
                        this.options = [];
                        this.$set(this.options, 0, options);
                    }
                }
                array = [];
                this.options.map(function (item) {
                    if (_this2.formatter) {
                        array.push(_this2.formatter(item.year + "/" + item.month + "/" + item.day));
                        return;
                    }
                    array.push(item.year + "/" + item.month + "/" + item.day);
                });
            } else {
                this.options = options;
                var _options = this.options,
                    year = _options.year,
                    month = _options.month,
                    day = _options.day;

                array = this.formatter ? this.formatter(year + "/" + month + "/" + day) : year + "/" + month + "/" + day;
            }
            this.currentValue = array;
            this.$emit("on-change", array, this.options);
        },
        compareDate: function compareDate(options) {
            var timestamp1 = new Date(this.options[0].year + "/" + this.options[0].month + "/" + this.options[0].day).getTime();
            var timestamp2 = new Date(options.year + "/" + options.month + "/" + options.day).getTime();
            return timestamp2 >= timestamp1;
        },
        oldDateDisabledFnc: function oldDateDisabledFnc(newTimestamp) {
            if (this.oldDateDisabled) {
                return timestamp > newTimestamp;
            }
            return false;
        }
    }
});

/***/ }),
/* 155 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_DateList_vue__ = __webpack_require__(104);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_01ff5779_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_DateList_vue__ = __webpack_require__(157);
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_DateList_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_01ff5779_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_DateList_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "packages/components/Calendar/components/DateList.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-01ff5779", Component.options)
  } else {
    hotAPI.reload("data-v-01ff5779", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 156 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

function getScrollTop(ref) {
    var scrollTop = 0;var bodyScrollTop = 0;var documentScrollTop = 0;
    if (ref) {
        bodyScrollTop = ref.scrollTop;
    }
    if (document.documentElement) {
        documentScrollTop = document.documentElement.scrollTop;
    }
    scrollTop = bodyScrollTop - documentScrollTop > 0 ? bodyScrollTop : documentScrollTop;
    return Math.ceil(scrollTop);
}

function getScrollHeight(ref) {
    return ref.children[0].offsetHeight;
}

function getWindowHeight(ref) {
    var windowHeight = 0;
    if (ref) {
        windowHeight = ref.clientHeight;
    }
    return windowHeight;
}
function isFoot() {
    var ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document.body;
    var num = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

    var height = getScrollTop(ref) + getWindowHeight(ref);
    if (height === getScrollHeight(ref) - num) {
        return true;
    }
    if (height > getScrollHeight(ref) - num) {
        return true;
    }
    return false;
}
/* harmony default export */ __webpack_exports__["a"] = (isFoot);

/***/ }),
/* 157 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "vvm-Calendar-DateList-wrp" },
    [
      _c(
        "div",
        {
          ref: "scroll",
          staticClass: "vvm-Calendar-DateList",
          on: { scroll: _vm.onScroll }
        },
        [
          _c(
            "div",
            _vm._l(_vm.date, function(item, $index) {
              return _c(
                "div",
                { key: $index + "A", ref: $index, refInFor: true },
                [
                  _c(
                    "div",
                    { staticClass: "vvm-Calendar-DateList-item-title" },
                    [_c("b", [_vm._v(_vm._s(item.name))])]
                  ),
                  _vm._v(" "),
                  _c(
                    "ul",
                    { staticClass: "vvm-Calendar-DateList-item" },
                    [_vm._t("dateItem", null, { item: item.list })],
                    2
                  )
                ]
              )
            }),
            0
          )
        ]
      ),
      _vm._v(" "),
      _vm._t("default")
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-01ff5779", esExports)
  }
}

/***/ }),
/* 158 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "vvm-Calendar" },
    [
      _c(
        "div",
        {
          staticClass: "vvm-Calendar-text vvm-ellipsis",
          on: { click: _vm.openCalendar }
        },
        [
          _c("Input", {
            attrs: {
              readonly: "",
              "right-icon": _vm.rightArrow ? "iconlist-rigthl" : "",
              disabled: _vm.disabled,
              placeholder: _vm.placeholder
            },
            model: {
              value: _vm.modelValue,
              callback: function($$v) {
                _vm.modelValue = $$v
              },
              expression: "modelValue"
            }
          })
        ],
        1
      ),
      _vm._v(" "),
      !_vm.disabled
        ? _c(
            "Modal",
            {
              attrs: { isMove: "", direction: "bottom", isMask: "" },
              on: { "on-mask": _vm.close },
              model: {
                value: _vm.show,
                callback: function($$v) {
                  _vm.show = $$v
                },
                expression: "show"
              }
            },
            [
              _c(
                "div",
                { staticClass: "vvm-Calendar-wrp" },
                [
                  _c("div", { staticClass: "vvm-Calendar-model-top" }, [
                    _c("div", { staticClass: "vvm-Calendar-title" }, [
                      _c("div", { staticClass: "title" }, [
                        _vm._v(_vm._s(_vm.titleText))
                      ]),
                      _vm._v(" "),
                      _c(
                        "span",
                        {
                          staticClass: "vvm-Calendar-close",
                          on: { click: _vm.close }
                        },
                        [_c("Icon", { attrs: { icon: "iconcuowu" } })],
                        1
                      )
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        ref: "title",
                        staticClass: "vvm-Calendar-week vvm-hairline-bottom"
                      },
                      _vm._l(_vm.weekList, function(item, $index) {
                        return _c(
                          "span",
                          { key: $index, class: ["item", item.class] },
                          [_vm._v(_vm._s(item.name))]
                        )
                      }),
                      0
                    )
                  ]),
                  _vm._v(" "),
                  _c(
                    "DateList",
                    {
                      ref: "DateList",
                      attrs: {
                        "scroll-top": _vm.scrollTop,
                        scrollBottom: _vm.scrollBottom,
                        options: _vm.value,
                        date: _vm.dateList,
                        locationDate: _vm.locationDate
                      },
                      scopedSlots: _vm._u(
                        [
                          {
                            key: "dateItem",
                            fn: function(ref) {
                              var item = ref.item
                              return _vm._l(item, function(param, index) {
                                return _c(
                                  "li",
                                  {
                                    key: index + "B",
                                    class: _vm.clasess(param),
                                    style: _vm.style(index, param.week),
                                    on: {
                                      click: function($event) {
                                        return _vm.clickDate(index, param)
                                      }
                                    }
                                  },
                                  [
                                    _c(
                                      "div",
                                      {
                                        staticClass:
                                          "vvm-Calendar-DateList-day-render"
                                      },
                                      [
                                        _vm._t(
                                          "dateItem",
                                          [
                                            _c("span", [
                                              _vm._v(_vm._s(param.day))
                                            ])
                                          ],
                                          { node: param }
                                        )
                                      ],
                                      2
                                    )
                                  ]
                                )
                              })
                            }
                          }
                        ],
                        null,
                        true
                      )
                    },
                    [
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "vvm-Calendar-DateList-bottom" },
                        [
                          _vm._t("default", [
                            _c(
                              "ul",
                              { staticClass: "vvm-Calendar-value" },
                              [
                                _vm.type === "range"
                                  ? [
                                      _c(
                                        "li",
                                        { staticClass: "startValue" },
                                        [
                                          _vm._v(
                                            "\n                  " +
                                              _vm._s(_vm.startText) +
                                              "：\n                  "
                                          ),
                                          _vm.options.length === 1 ||
                                          _vm.options.length === 2
                                            ? [
                                                _c("span", [
                                                  _vm._v(
                                                    _vm._s(
                                                      _vm.options[0].year
                                                    ) +
                                                      "年" +
                                                      _vm._s(
                                                        _vm.options[0].month
                                                      ) +
                                                      "月" +
                                                      _vm._s(
                                                        _vm.options[0].day
                                                      ) +
                                                      "日"
                                                  )
                                                ]),
                                                _vm._v(" "),
                                                _c("span", [
                                                  _vm._v(
                                                    "星期" +
                                                      _vm._s(
                                                        _vm.options[0].week
                                                      )
                                                  )
                                                ])
                                              ]
                                            : _vm._e()
                                        ],
                                        2
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "li",
                                        { staticClass: "endValue" },
                                        [
                                          _vm._v(
                                            "\n                  " +
                                              _vm._s(_vm.endText) +
                                              "：\n                  "
                                          ),
                                          _vm.options.length === 2
                                            ? [
                                                _c("span", [
                                                  _vm._v(
                                                    _vm._s(
                                                      _vm.options[1].year
                                                    ) +
                                                      "年" +
                                                      _vm._s(
                                                        _vm.options[1].month
                                                      ) +
                                                      "月" +
                                                      _vm._s(
                                                        _vm.options[1].day
                                                      ) +
                                                      "日"
                                                  )
                                                ]),
                                                _vm._v(" "),
                                                _c("span", [
                                                  _vm._v(
                                                    "星期" +
                                                      _vm._s(
                                                        _vm.options[1].week
                                                      )
                                                  )
                                                ])
                                              ]
                                            : _vm._e()
                                        ],
                                        2
                                      )
                                    ]
                                  : [
                                      _c(
                                        "li",
                                        { staticClass: "startValue" },
                                        [
                                          _vm._v(
                                            "\n                  " +
                                              _vm._s(_vm.singleText) +
                                              "：\n                  "
                                          ),
                                          _vm.options.year
                                            ? [
                                                _c("span", [
                                                  _vm._v(
                                                    _vm._s(_vm.options.year) +
                                                      "年" +
                                                      _vm._s(
                                                        _vm.options.month
                                                      ) +
                                                      "月" +
                                                      _vm._s(_vm.options.day) +
                                                      "日"
                                                  )
                                                ]),
                                                _vm._v(" "),
                                                _c("span", [
                                                  _vm._v(
                                                    "星期" +
                                                      _vm._s(_vm.options.week)
                                                  )
                                                ])
                                              ]
                                            : _vm._e()
                                        ],
                                        2
                                      )
                                    ]
                              ],
                              2
                            )
                          ]),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              staticClass: "vvm-Calendar-confirm",
                              on: { click: _vm.confirm }
                            },
                            [_c("span", [_vm._v(_vm._s(_vm.confirmText))])]
                          )
                        ],
                        2
                      )
                    ]
                  )
                ],
                1
              )
            ]
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
    require("vue-hot-reload-api")      .rerender("data-v-04df4266", esExports)
  }
}

/***/ }),
/* 159 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_vue__ = __webpack_require__(160);


/* harmony default export */ __webpack_exports__["default"] = (__WEBPACK_IMPORTED_MODULE_0__index_vue__["a" /* default */]);

/***/ }),
/* 160 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(105);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_2f717238_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(161);
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
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_2f717238_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "packages/components/Card/index.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2f717238", Component.options)
  } else {
    hotAPI.reload("data-v-2f717238", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 161 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { class: ["vvm-Card", { shadow: _vm.shadow }] }, [
    _vm.isTitle
      ? _c("div", { staticClass: "vvm-Card-title vvm-hairline-bottom" }, [
          _c(
            "div",
            [
              _vm.$slots["title-left"]
                ? [_vm._t("title-left")]
                : [_vm._v(_vm._s(_vm.titleText))]
            ],
            2
          ),
          _vm._v(" "),
          _c("div", [_vm._t("title-right")], 2)
        ])
      : _vm._e(),
    _vm._v(" "),
    _c("div", { staticClass: "vvm-Card-body" }, [_vm._t("default")], 2)
  ])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-2f717238", esExports)
  }
}

/***/ }),
/* 162 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_vue__ = __webpack_require__(163);



/* harmony default export */ __webpack_exports__["default"] = (__WEBPACK_IMPORTED_MODULE_0__index_vue__["a" /* default */]);

/***/ }),
/* 163 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(106);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_6279420a_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(164);
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
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_6279420a_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "packages/components/Cell/index.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6279420a", Component.options)
  } else {
    hotAPI.reload("data-v-6279420a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 164 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "li",
    {
      class: [
        "vvm-Cell",
        {
          "cell-active": _vm.to || _vm.url || _vm.arrow,
          "cell-block": _vm.model === "block"
        }
      ],
      on: { click: _vm.click }
    },
    [
      _c(
        "div",
        { staticClass: "vvm-Cell-label vvm-ellipsis" },
        [
          _vm.icon
            ? _c("Icon", {
                staticStyle: { "margin-right": "3px" },
                attrs: { icon: _vm.icon }
              })
            : _vm._e(),
          _vm._v(" "),
          _vm._t("label", [_vm._v(_vm._s(_vm.label))])
        ],
        2
      ),
      _vm._v(" "),
      _vm.model === "block"
        ? [
            _c(
              "div",
              { staticClass: "vvm-Cell-botton" },
              [_vm._t("default", [_vm._v(_vm._s(_vm.context))])],
              2
            )
          ]
        : [
            !_vm.arrow
              ? _c(
                  "div",
                  { class: _vm.clasess },
                  [
                    _vm._t("default", [_vm._v(_vm._s(_vm.context))]),
                    _vm._v(" "),
                    _vm.to || _vm.url
                      ? _c("Icon", { attrs: { icon: "iconlist-rigthl" } })
                      : _vm._e()
                  ],
                  2
                )
              : _vm._e()
          ]
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-6279420a", esExports)
  }
}

/***/ }),
/* 165 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_vue__ = __webpack_require__(166);



/* harmony default export */ __webpack_exports__["default"] = (__WEBPACK_IMPORTED_MODULE_0__index_vue__["a" /* default */]);

/***/ }),
/* 166 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(107);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_247835aa_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(167);
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
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_247835aa_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "packages/components/CellGroup/index.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-247835aa", Component.options)
  } else {
    hotAPI.reload("data-v-247835aa", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 167 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "vvm-CellGroup" }, [
    _vm.title
      ? _c("div", { staticClass: "vvm-CellGroup-title" }, [
          _vm._v(_vm._s(_vm.title))
        ])
      : _vm._e(),
    _vm._v(" "),
    _c("ul", { staticClass: "vvm-Cell-wrp" }, [_vm._t("default")], 2)
  ])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-247835aa", esExports)
  }
}

/***/ }),
/* 168 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_vue__ = __webpack_require__(169);


/* harmony default export */ __webpack_exports__["default"] = (__WEBPACK_IMPORTED_MODULE_0__index_vue__["a" /* default */]);

/***/ }),
/* 169 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(108);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_7d777eaa_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(170);
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
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_7d777eaa_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "packages/components/Checkbox/index.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7d777eaa", Component.options)
  } else {
    hotAPI.reload("data-v-7d777eaa", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 170 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _obj, _obj$1
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("label", { staticClass: "vvm-Checkbox" }, [
    _c(
      "span",
      {
        class: [
          "vvm-Checkbox-icon",
          "vvm-text-color-" + _vm.parentType,
          ((_obj = {}), (_obj["disabled"] = _vm.parenDisabled), _obj)
        ]
      },
      [
        _c(
          "transition",
          { attrs: { name: "fade" } },
          [
            _c("Icon", {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: _vm.currentValue,
                  expression: "currentValue"
                }
              ],
              attrs: { icon: _vm.parentIcon }
            })
          ],
          1
        )
      ],
      1
    ),
    _vm._v(" "),
    _c(
      "span",
      {
        class: [
          "vvm-Checkbox-text",
          ((_obj$1 = {}), (_obj$1["disabled"] = _vm.parenDisabled), _obj$1)
        ]
      },
      [_vm._t("default", [_vm._v(_vm._s(_vm.label))])],
      2
    ),
    _vm._v(" "),
    _vm.parent
      ? _c("input", {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: _vm.model,
              expression: "model"
            }
          ],
          staticClass: "vvm-Checkbox-input",
          attrs: { type: "checkbox", disabled: _vm.parenDisabled },
          domProps: {
            value: _vm.label,
            checked: Array.isArray(_vm.model)
              ? _vm._i(_vm.model, _vm.label) > -1
              : _vm.model
          },
          on: {
            change: [
              function($event) {
                var $$a = _vm.model,
                  $$el = $event.target,
                  $$c = $$el.checked ? true : false
                if (Array.isArray($$a)) {
                  var $$v = _vm.label,
                    $$i = _vm._i($$a, $$v)
                  if ($$el.checked) {
                    $$i < 0 && (_vm.model = $$a.concat([$$v]))
                  } else {
                    $$i > -1 &&
                      (_vm.model = $$a.slice(0, $$i).concat($$a.slice($$i + 1)))
                  }
                } else {
                  _vm.model = $$c
                }
              },
              _vm.change
            ]
          }
        })
      : _c("input", {
          staticClass: "vvm-Checkbox-input",
          attrs: { type: "checkbox", disabled: _vm.parenDisabled },
          domProps: { checked: _vm.currentValue },
          on: { change: _vm.change }
        })
  ])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-7d777eaa", esExports)
  }
}

/***/ }),
/* 171 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_vue__ = __webpack_require__(172);


/* harmony default export */ __webpack_exports__["default"] = (__WEBPACK_IMPORTED_MODULE_0__index_vue__["a" /* default */]);

/***/ }),
/* 172 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(109);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_823839ac_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(173);
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
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_823839ac_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "packages/components/CheckboxGroup/index.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-823839ac", Component.options)
  } else {
    hotAPI.reload("data-v-823839ac", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 173 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _obj
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      class: [
        "vvm-CheckboxGroup",
        ((_obj = {}), (_obj["inline"] = _vm.inline), _obj)
      ]
    },
    [_vm._t("default")],
    2
  )
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-823839ac", esExports)
  }
}

/***/ }),
/* 174 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_vue__ = __webpack_require__(175);


/* harmony default export */ __webpack_exports__["default"] = (__WEBPACK_IMPORTED_MODULE_0__index_vue__["a" /* default */]);

/***/ }),
/* 175 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(110);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_4c717791_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(184);
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
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_4c717791_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "packages/components/DatetimePicker/index.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4c717791", Component.options)
  } else {
    hotAPI.reload("data-v-4c717791", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 176 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _isIterable2 = __webpack_require__(177);

var _isIterable3 = _interopRequireDefault(_isIterable2);

var _getIterator2 = __webpack_require__(180);

var _getIterator3 = _interopRequireDefault(_getIterator2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  function sliceIterator(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = (0, _getIterator3.default)(arr), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"]) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  return function (arr, i) {
    if (Array.isArray(arr)) {
      return arr;
    } else if ((0, _isIterable3.default)(Object(arr))) {
      return sliceIterator(arr, i);
    } else {
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }
  };
}();

/***/ }),
/* 177 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(178), __esModule: true };

/***/ }),
/* 178 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(54);
__webpack_require__(55);
module.exports = __webpack_require__(179);


/***/ }),
/* 179 */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(56);
var ITERATOR = __webpack_require__(6)('iterator');
var Iterators = __webpack_require__(30);
module.exports = __webpack_require__(2).isIterable = function (it) {
  var O = Object(it);
  return O[ITERATOR] !== undefined
    || '@@iterator' in O
    // eslint-disable-next-line no-prototype-builtins
    || Iterators.hasOwnProperty(classof(O));
};


/***/ }),
/* 180 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(181), __esModule: true };

/***/ }),
/* 181 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(54);
__webpack_require__(55);
module.exports = __webpack_require__(182);


/***/ }),
/* 182 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(9);
var get = __webpack_require__(70);
module.exports = __webpack_require__(2).getIterator = function (it) {
  var iterFn = get(it);
  if (typeof iterFn != 'function') throw TypeError(it + ' is not iterable!');
  return anObject(iterFn.call(it));
};


/***/ }),
/* 183 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return createYear; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return createMonth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return createDay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return createTimeItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createIndex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return createHours; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return createMinute; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return format; });

var createYear = function createYear(ctx) {
    var i = ctx.minYear;
    var array = [];
    while (i <= ctx.maxYear) {
        array.push(i);
        i += 1;
    }
    return array;
};

var createMonth = function createMonth() {
    var i = 1;
    var array = [];
    while (i <= 12) {
        array.push(i >= 10 ? i : "0" + i);
        i += 1;
    }
    return array;
};

var createDay = function createDay(ctx) {
    var count = new Date(ctx.timeItem[0], ctx.timeItem[1], 0).getDate();
    var i = 1;
    var array = [];
    while (i <= count) {
        array.push(i >= 10 ? i : "0" + i);
        i += 1;
    }
    return array;
};

var createTimeItem = function createTimeItem(value) {
    var ctx = value ? new Date(value) : new Date();
    var month = ctx.getMonth() + 1;
    var hours = ctx.getHours() >= 10 ? ctx.getHours() : "0" + ctx.getHours();
    var date = ctx.getDate() >= 10 ? ctx.getDate() : "0" + ctx.getDate();
    var minute = ctx.getMinutes() >= 10 ? ctx.getMinutes() : "0" + ctx.getMinutes();
    var second = ctx.getSeconds() >= 10 ? ctx.getSeconds() : "0" + ctx.getSeconds();
    return [ctx.getFullYear(), month >= 10 ? month : "0" + month, date, hours, minute, second];
};

var createIndex = function createIndex(ctx) {
    var array = [];
    ctx.options.forEach(function (element, index) {
        if (ctx.type === 'time') {
            array.push(element.indexOf(ctx.timeItem[index + 3]));
        } else {
            array.push(element.indexOf(ctx.timeItem[index]));
        }
    });
    return array;
};

var createHours = function createHours() {
    var i = 0;
    var array = [];
    while (i < 24) {
        array.push(i >= 10 ? i : "0" + i);
        i += 1;
    }
    return array;
};

var createMinute = function createMinute() {
    var i = 0;
    var array = [];
    while (i < 60) {
        array.push(i >= 10 ? i : "0" + i);
        i += 1;
    }
    return array;
};

var format = function format(fmt, date) {
    var ret = void 0;
    var opt = {
        "Y+": date.getFullYear().toString(),
        "m+": (date.getMonth() + 1).toString(),
        "d+": date.getDate().toString(),
        "H+": date.getHours().toString(),
        "M+": date.getMinutes().toString(),
        "S+": date.getSeconds().toString() };
    for (var k in opt) {
        ret = new RegExp("(" + k + ")").exec(fmt);
        if (ret) {
            fmt = fmt.replace(ret[1], ret[1].length == 1 ? opt[k] : opt[k].padStart(ret[1].length, "0"));
        };
    };
    return fmt;
};

/***/ }),
/* 184 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "vvm-DatetimePicker" },
    [
      _c(
        "div",
        { staticClass: "vvm-DatetimePicker-input", on: { click: _vm.click } },
        [
          _c("Input", {
            attrs: {
              readonly: "",
              disabled: _vm.disabled,
              "right-icon": _vm.rightArrow ? "iconlist-rigthl" : "",
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
      !_vm.disabled
        ? _c(
            "Modal",
            {
              attrs: { direction: "bottom", isMask: "" },
              model: {
                value: _vm.show,
                callback: function($$v) {
                  _vm.show = $$v
                },
                expression: "show"
              }
            },
            [
              [
                _c("div", { staticClass: "vvm-DatetimePicker-title" }, [
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
                  _vm._l(_vm.options, function(item, $index) {
                    return _c("v-Picker", {
                      key: $index,
                      ref: $index,
                      refInFor: true,
                      attrs: {
                        options: item,
                        height: _vm.height,
                        index: _vm.index[$index] || 0,
                        thisIndex: $index + 1
                      },
                      on: { "on-change": _vm.change }
                    })
                  }),
                  1
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
    require("vue-hot-reload-api")      .rerender("data-v-4c717791", esExports)
  }
}

/***/ }),
/* 185 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_vue__ = __webpack_require__(186);




/* harmony default export */ __webpack_exports__["default"] = (__WEBPACK_IMPORTED_MODULE_0__index_vue__["a" /* default */]);

/***/ }),
/* 186 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(113);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_5e98d35c_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(204);
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
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_5e98d35c_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "packages/components/From/index.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5e98d35c", Component.options)
  } else {
    hotAPI.reload("data-v-5e98d35c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 187 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(188);


/***/ }),
/* 188 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// This method of obtaining a reference to the global object needs to be
// kept identical to the way it is obtained in runtime.js
var g = (function() { return this })() || Function("return this")();

// Use `getOwnPropertyNames` because not all browsers support calling
// `hasOwnProperty` on the global `self` object in a worker. See #183.
var hadRuntime = g.regeneratorRuntime &&
  Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;

// Save the old regeneratorRuntime in case it needs to be restored later.
var oldRuntime = hadRuntime && g.regeneratorRuntime;

// Force reevalutation of runtime.js.
g.regeneratorRuntime = undefined;

module.exports = __webpack_require__(189);

if (hadRuntime) {
  // Restore the original runtime.
  g.regeneratorRuntime = oldRuntime;
} else {
  // Remove the global property added by runtime.js.
  try {
    delete g.regeneratorRuntime;
  } catch(e) {
    g.regeneratorRuntime = undefined;
  }
}


/***/ }),
/* 189 */
/***/ (function(module, exports) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

!(function(global) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  var inModule = typeof module === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  runtime.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  runtime.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration. If the Promise is rejected, however, the
          // result for this iteration will be rejected with the same
          // reason. Note that rejections of yielded Promises are not
          // thrown back into the generator function, as is the case
          // when an awaited Promise is rejected. This difference in
          // behavior between yield and await is important, because it
          // allows the consumer to decide what to do with the yielded
          // rejection (swallow it and continue, manually .throw it back
          // into the generator, abandon iteration, whatever). With
          // await, by contrast, there is no opportunity to examine the
          // rejection reason outside the generator function, so the
          // only option is to throw it from the await expression, and
          // let the generator function handle the exception.
          result.value = unwrapped;
          resolve(result);
        }, reject);
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  runtime.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return runtime.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        if (delegate.iterator.return) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };
})(
  // In sloppy mode, unbound `this` refers to the global object, fallback to
  // Function constructor if we're in global strict mode. That is sadly a form
  // of indirect eval which violates Content Security Policy.
  (function() { return this })() || Function("return this")()
);


/***/ }),
/* 190 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _promise = __webpack_require__(72);

var _promise2 = _interopRequireDefault(_promise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (fn) {
  return function () {
    var gen = fn.apply(this, arguments);
    return new _promise2.default(function (resolve, reject) {
      function step(key, arg) {
        try {
          var info = gen[key](arg);
          var value = info.value;
        } catch (error) {
          reject(error);
          return;
        }

        if (info.done) {
          resolve(value);
        } else {
          return _promise2.default.resolve(value).then(function (value) {
            step("next", value);
          }, function (err) {
            step("throw", err);
          });
        }
      }

      return step("next");
    });
  };
};

/***/ }),
/* 191 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _iterator = __webpack_require__(192);

var _iterator2 = _interopRequireDefault(_iterator);

var _symbol = __webpack_require__(194);

var _symbol2 = _interopRequireDefault(_symbol);

var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
} : function (obj) {
  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
};

/***/ }),
/* 192 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(193), __esModule: true };

/***/ }),
/* 193 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(55);
__webpack_require__(54);
module.exports = __webpack_require__(89).f('iterator');


/***/ }),
/* 194 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(195), __esModule: true };

/***/ }),
/* 195 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(196);
__webpack_require__(88);
__webpack_require__(202);
__webpack_require__(203);
module.exports = __webpack_require__(2).Symbol;


/***/ }),
/* 196 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__(1);
var has = __webpack_require__(11);
var DESCRIPTORS = __webpack_require__(4);
var $export = __webpack_require__(20);
var redefine = __webpack_require__(66);
var META = __webpack_require__(197).KEY;
var $fails = __webpack_require__(13);
var shared = __webpack_require__(32);
var setToStringTag = __webpack_require__(48);
var uid = __webpack_require__(27);
var wks = __webpack_require__(6);
var wksExt = __webpack_require__(89);
var wksDefine = __webpack_require__(90);
var enumKeys = __webpack_require__(198);
var isArray = __webpack_require__(199);
var anObject = __webpack_require__(9);
var isObject = __webpack_require__(8);
var toObject = __webpack_require__(37);
var toIObject = __webpack_require__(14);
var toPrimitive = __webpack_require__(35);
var createDesc = __webpack_require__(25);
var _create = __webpack_require__(67);
var gOPNExt = __webpack_require__(200);
var $GOPD = __webpack_require__(201);
var $GOPS = __webpack_require__(47);
var $DP = __webpack_require__(15);
var $keys = __webpack_require__(34);
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function' && !!$GOPS.f;
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function () { return dP(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, { enumerable: createDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  __webpack_require__(128).f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(42).f = $propertyIsEnumerable;
  $GOPS.f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__(22)) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
// https://bugs.chromium.org/p/v8/issues/detail?id=3443
var FAILS_ON_PRIMITIVES = $fails(function () { $GOPS.f(1); });

$export($export.S + $export.F * FAILS_ON_PRIMITIVES, 'Object', {
  getOwnPropertySymbols: function getOwnPropertySymbols(it) {
    return $GOPS.f(toObject(it));
  }
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    $replacer = replacer = args[1];
    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    if (!isArray(replacer)) replacer = function (key, value) {
      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(12)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);


/***/ }),
/* 197 */
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__(27)('meta');
var isObject = __webpack_require__(8);
var has = __webpack_require__(11);
var setDesc = __webpack_require__(15).f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__(13)(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};


/***/ }),
/* 198 */
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(34);
var gOPS = __webpack_require__(47);
var pIE = __webpack_require__(42);
module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};


/***/ }),
/* 199 */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(21);
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),
/* 200 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(14);
var gOPN = __webpack_require__(128).f;
var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),
/* 201 */
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__(42);
var createDesc = __webpack_require__(25);
var toIObject = __webpack_require__(14);
var toPrimitive = __webpack_require__(35);
var has = __webpack_require__(11);
var IE8_DOM_DEFINE = __webpack_require__(40);
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(4) ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),
/* 202 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(90)('asyncIterator');


/***/ }),
/* 203 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(90)('observable');


/***/ }),
/* 204 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "vvm-Form" }, [_vm._t("default")], 2)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-5e98d35c", esExports)
  }
}

/***/ }),
/* 205 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_vue__ = __webpack_require__(206);




/* harmony default export */ __webpack_exports__["default"] = (__WEBPACK_IMPORTED_MODULE_0__index_vue__["a" /* default */]);

/***/ }),
/* 206 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(129);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_ca422376_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(209);
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
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_ca422376_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "packages/components/FromItem/index.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-ca422376", Component.options)
  } else {
    hotAPI.reload("data-v-ca422376", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 207 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/* eslint no-console:0 */
var formatRegExp = /%[sdj%]/g;
var warning = function warning() {}; // don't print warning message when in production env or node runtime

if (typeof process !== 'undefined' && process.env && process.env.NODE_ENV !== 'production' && typeof window !== 'undefined' && typeof document !== 'undefined') {
  warning = function warning(type, errors) {
    if (typeof console !== 'undefined' && console.warn) {
      if (errors.every(function (e) {
        return typeof e === 'string';
      })) {
        console.warn(type, errors);
      }
    }
  };
}

function convertFieldsError(errors) {
  if (!errors || !errors.length) return null;
  var fields = {};
  errors.forEach(function (error) {
    var field = error.field;
    fields[field] = fields[field] || [];
    fields[field].push(error);
  });
  return fields;
}
function format() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  var i = 1;
  var f = args[0];
  var len = args.length;

  if (typeof f === 'function') {
    return f.apply(null, args.slice(1));
  }

  if (typeof f === 'string') {
    var str = String(f).replace(formatRegExp, function (x) {
      if (x === '%%') {
        return '%';
      }

      if (i >= len) {
        return x;
      }

      switch (x) {
        case '%s':
          return String(args[i++]);

        case '%d':
          return Number(args[i++]);

        case '%j':
          try {
            return JSON.stringify(args[i++]);
          } catch (_) {
            return '[Circular]';
          }

          break;

        default:
          return x;
      }
    });

    for (var arg = args[i]; i < len; arg = args[++i]) {
      str += " " + arg;
    }

    return str;
  }

  return f;
}

function isNativeStringType(type) {
  return type === 'string' || type === 'url' || type === 'hex' || type === 'email' || type === 'pattern';
}

function isEmptyValue(value, type) {
  if (value === undefined || value === null) {
    return true;
  }

  if (type === 'array' && Array.isArray(value) && !value.length) {
    return true;
  }

  if (isNativeStringType(type) && typeof value === 'string' && !value) {
    return true;
  }

  return false;
}

function asyncParallelArray(arr, func, callback) {
  var results = [];
  var total = 0;
  var arrLength = arr.length;

  function count(errors) {
    results.push.apply(results, errors);
    total++;

    if (total === arrLength) {
      callback(results);
    }
  }

  arr.forEach(function (a) {
    func(a, count);
  });
}

function asyncSerialArray(arr, func, callback) {
  var index = 0;
  var arrLength = arr.length;

  function next(errors) {
    if (errors && errors.length) {
      callback(errors);
      return;
    }

    var original = index;
    index = index + 1;

    if (original < arrLength) {
      func(arr[original], next);
    } else {
      callback([]);
    }
  }

  next([]);
}

function flattenObjArr(objArr) {
  var ret = [];
  Object.keys(objArr).forEach(function (k) {
    ret.push.apply(ret, objArr[k]);
  });
  return ret;
}

function asyncMap(objArr, option, func, callback) {
  if (option.first) {
    var _pending = new Promise(function (resolve, reject) {
      var next = function next(errors) {
        callback(errors);
        return errors.length ? reject({
          errors: errors,
          fields: convertFieldsError(errors)
        }) : resolve();
      };

      var flattenArr = flattenObjArr(objArr);
      asyncSerialArray(flattenArr, func, next);
    });

    _pending["catch"](function (e) {
      return e;
    });

    return _pending;
  }

  var firstFields = option.firstFields || [];

  if (firstFields === true) {
    firstFields = Object.keys(objArr);
  }

  var objArrKeys = Object.keys(objArr);
  var objArrLength = objArrKeys.length;
  var total = 0;
  var results = [];
  var pending = new Promise(function (resolve, reject) {
    var next = function next(errors) {
      results.push.apply(results, errors);
      total++;

      if (total === objArrLength) {
        callback(results);
        return results.length ? reject({
          errors: results,
          fields: convertFieldsError(results)
        }) : resolve();
      }
    };

    if (!objArrKeys.length) {
      callback(results);
      resolve();
    }

    objArrKeys.forEach(function (key) {
      var arr = objArr[key];

      if (firstFields.indexOf(key) !== -1) {
        asyncSerialArray(arr, func, next);
      } else {
        asyncParallelArray(arr, func, next);
      }
    });
  });
  pending["catch"](function (e) {
    return e;
  });
  return pending;
}
function complementError(rule) {
  return function (oe) {
    if (oe && oe.message) {
      oe.field = oe.field || rule.fullField;
      return oe;
    }

    return {
      message: typeof oe === 'function' ? oe() : oe,
      field: oe.field || rule.fullField
    };
  };
}
function deepMerge(target, source) {
  if (source) {
    for (var s in source) {
      if (source.hasOwnProperty(s)) {
        var value = source[s];

        if (typeof value === 'object' && typeof target[s] === 'object') {
          target[s] = _extends({}, target[s], {}, value);
        } else {
          target[s] = value;
        }
      }
    }
  }

  return target;
}

/**
 *  Rule for validating required fields.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param source The source object being validated.
 *  @param errors An array of errors that this rule may add
 *  validation errors to.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */

function required(rule, value, source, errors, options, type) {
  if (rule.required && (!source.hasOwnProperty(rule.field) || isEmptyValue(value, type || rule.type))) {
    errors.push(format(options.messages.required, rule.fullField));
  }
}

/**
 *  Rule for validating whitespace.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param source The source object being validated.
 *  @param errors An array of errors that this rule may add
 *  validation errors to.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */

function whitespace(rule, value, source, errors, options) {
  if (/^\s+$/.test(value) || value === '') {
    errors.push(format(options.messages.whitespace, rule.fullField));
  }
}

/* eslint max-len:0 */

var pattern = {
  // http://emailregex.com/
  email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  url: new RegExp("^(?!mailto:)(?:(?:http|https|ftp)://|//)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$", 'i'),
  hex: /^#?([a-f0-9]{6}|[a-f0-9]{3})$/i
};
var types = {
  integer: function integer(value) {
    return types.number(value) && parseInt(value, 10) === value;
  },
  "float": function float(value) {
    return types.number(value) && !types.integer(value);
  },
  array: function array(value) {
    return Array.isArray(value);
  },
  regexp: function regexp(value) {
    if (value instanceof RegExp) {
      return true;
    }

    try {
      return !!new RegExp(value);
    } catch (e) {
      return false;
    }
  },
  date: function date(value) {
    return typeof value.getTime === 'function' && typeof value.getMonth === 'function' && typeof value.getYear === 'function';
  },
  number: function number(value) {
    if (isNaN(value)) {
      return false;
    }

    return typeof value === 'number';
  },
  object: function object(value) {
    return typeof value === 'object' && !types.array(value);
  },
  method: function method(value) {
    return typeof value === 'function';
  },
  email: function email(value) {
    return typeof value === 'string' && !!value.match(pattern.email) && value.length < 255;
  },
  url: function url(value) {
    return typeof value === 'string' && !!value.match(pattern.url);
  },
  hex: function hex(value) {
    return typeof value === 'string' && !!value.match(pattern.hex);
  }
};
/**
 *  Rule for validating the type of a value.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param source The source object being validated.
 *  @param errors An array of errors that this rule may add
 *  validation errors to.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */

function type(rule, value, source, errors, options) {
  if (rule.required && value === undefined) {
    required(rule, value, source, errors, options);
    return;
  }

  var custom = ['integer', 'float', 'array', 'regexp', 'object', 'method', 'email', 'number', 'date', 'url', 'hex'];
  var ruleType = rule.type;

  if (custom.indexOf(ruleType) > -1) {
    if (!types[ruleType](value)) {
      errors.push(format(options.messages.types[ruleType], rule.fullField, rule.type));
    } // straight typeof check

  } else if (ruleType && typeof value !== rule.type) {
    errors.push(format(options.messages.types[ruleType], rule.fullField, rule.type));
  }
}

/**
 *  Rule for validating minimum and maximum allowed values.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param source The source object being validated.
 *  @param errors An array of errors that this rule may add
 *  validation errors to.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */

function range(rule, value, source, errors, options) {
  var len = typeof rule.len === 'number';
  var min = typeof rule.min === 'number';
  var max = typeof rule.max === 'number'; // 正则匹配码点范围从U+010000一直到U+10FFFF的文字（补充平面Supplementary Plane）

  var spRegexp = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g;
  var val = value;
  var key = null;
  var num = typeof value === 'number';
  var str = typeof value === 'string';
  var arr = Array.isArray(value);

  if (num) {
    key = 'number';
  } else if (str) {
    key = 'string';
  } else if (arr) {
    key = 'array';
  } // if the value is not of a supported type for range validation
  // the validation rule rule should use the
  // type property to also test for a particular type


  if (!key) {
    return false;
  }

  if (arr) {
    val = value.length;
  }

  if (str) {
    // 处理码点大于U+010000的文字length属性不准确的bug，如"𠮷𠮷𠮷".lenght !== 3
    val = value.replace(spRegexp, '_').length;
  }

  if (len) {
    if (val !== rule.len) {
      errors.push(format(options.messages[key].len, rule.fullField, rule.len));
    }
  } else if (min && !max && val < rule.min) {
    errors.push(format(options.messages[key].min, rule.fullField, rule.min));
  } else if (max && !min && val > rule.max) {
    errors.push(format(options.messages[key].max, rule.fullField, rule.max));
  } else if (min && max && (val < rule.min || val > rule.max)) {
    errors.push(format(options.messages[key].range, rule.fullField, rule.min, rule.max));
  }
}

var ENUM = 'enum';
/**
 *  Rule for validating a value exists in an enumerable list.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param source The source object being validated.
 *  @param errors An array of errors that this rule may add
 *  validation errors to.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */

function enumerable(rule, value, source, errors, options) {
  rule[ENUM] = Array.isArray(rule[ENUM]) ? rule[ENUM] : [];

  if (rule[ENUM].indexOf(value) === -1) {
    errors.push(format(options.messages[ENUM], rule.fullField, rule[ENUM].join(', ')));
  }
}

/**
 *  Rule for validating a regular expression pattern.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param source The source object being validated.
 *  @param errors An array of errors that this rule may add
 *  validation errors to.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */

function pattern$1(rule, value, source, errors, options) {
  if (rule.pattern) {
    if (rule.pattern instanceof RegExp) {
      // if a RegExp instance is passed, reset `lastIndex` in case its `global`
      // flag is accidentally set to `true`, which in a validation scenario
      // is not necessary and the result might be misleading
      rule.pattern.lastIndex = 0;

      if (!rule.pattern.test(value)) {
        errors.push(format(options.messages.pattern.mismatch, rule.fullField, value, rule.pattern));
      }
    } else if (typeof rule.pattern === 'string') {
      var _pattern = new RegExp(rule.pattern);

      if (!_pattern.test(value)) {
        errors.push(format(options.messages.pattern.mismatch, rule.fullField, value, rule.pattern));
      }
    }
  }
}

var rules = {
  required: required,
  whitespace: whitespace,
  type: type,
  range: range,
  "enum": enumerable,
  pattern: pattern$1
};

/**
 *  Performs validation for string types.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param callback The callback function.
 *  @param source The source object being validated.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */

function string(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);

  if (validate) {
    if (isEmptyValue(value, 'string') && !rule.required) {
      return callback();
    }

    rules.required(rule, value, source, errors, options, 'string');

    if (!isEmptyValue(value, 'string')) {
      rules.type(rule, value, source, errors, options);
      rules.range(rule, value, source, errors, options);
      rules.pattern(rule, value, source, errors, options);

      if (rule.whitespace === true) {
        rules.whitespace(rule, value, source, errors, options);
      }
    }
  }

  callback(errors);
}

/**
 *  Validates a function.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param callback The callback function.
 *  @param source The source object being validated.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */

function method(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);

  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }

    rules.required(rule, value, source, errors, options);

    if (value !== undefined) {
      rules.type(rule, value, source, errors, options);
    }
  }

  callback(errors);
}

/**
 *  Validates a number.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param callback The callback function.
 *  @param source The source object being validated.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */

function number(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);

  if (validate) {
    if (value === '') {
      value = undefined;
    }

    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }

    rules.required(rule, value, source, errors, options);

    if (value !== undefined) {
      rules.type(rule, value, source, errors, options);
      rules.range(rule, value, source, errors, options);
    }
  }

  callback(errors);
}

/**
 *  Validates a boolean.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param callback The callback function.
 *  @param source The source object being validated.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */

function _boolean(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);

  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }

    rules.required(rule, value, source, errors, options);

    if (value !== undefined) {
      rules.type(rule, value, source, errors, options);
    }
  }

  callback(errors);
}

/**
 *  Validates the regular expression type.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param callback The callback function.
 *  @param source The source object being validated.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */

function regexp(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);

  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }

    rules.required(rule, value, source, errors, options);

    if (!isEmptyValue(value)) {
      rules.type(rule, value, source, errors, options);
    }
  }

  callback(errors);
}

/**
 *  Validates a number is an integer.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param callback The callback function.
 *  @param source The source object being validated.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */

function integer(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);

  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }

    rules.required(rule, value, source, errors, options);

    if (value !== undefined) {
      rules.type(rule, value, source, errors, options);
      rules.range(rule, value, source, errors, options);
    }
  }

  callback(errors);
}

/**
 *  Validates a number is a floating point number.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param callback The callback function.
 *  @param source The source object being validated.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */

function floatFn(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);

  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }

    rules.required(rule, value, source, errors, options);

    if (value !== undefined) {
      rules.type(rule, value, source, errors, options);
      rules.range(rule, value, source, errors, options);
    }
  }

  callback(errors);
}

/**
 *  Validates an array.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param callback The callback function.
 *  @param source The source object being validated.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */

function array(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);

  if (validate) {
    if (isEmptyValue(value, 'array') && !rule.required) {
      return callback();
    }

    rules.required(rule, value, source, errors, options, 'array');

    if (!isEmptyValue(value, 'array')) {
      rules.type(rule, value, source, errors, options);
      rules.range(rule, value, source, errors, options);
    }
  }

  callback(errors);
}

/**
 *  Validates an object.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param callback The callback function.
 *  @param source The source object being validated.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */

function object(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);

  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }

    rules.required(rule, value, source, errors, options);

    if (value !== undefined) {
      rules.type(rule, value, source, errors, options);
    }
  }

  callback(errors);
}

var ENUM$1 = 'enum';
/**
 *  Validates an enumerable list.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param callback The callback function.
 *  @param source The source object being validated.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */

function enumerable$1(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);

  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }

    rules.required(rule, value, source, errors, options);

    if (value !== undefined) {
      rules[ENUM$1](rule, value, source, errors, options);
    }
  }

  callback(errors);
}

/**
 *  Validates a regular expression pattern.
 *
 *  Performs validation when a rule only contains
 *  a pattern property but is not declared as a string type.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param callback The callback function.
 *  @param source The source object being validated.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */

function pattern$2(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);

  if (validate) {
    if (isEmptyValue(value, 'string') && !rule.required) {
      return callback();
    }

    rules.required(rule, value, source, errors, options);

    if (!isEmptyValue(value, 'string')) {
      rules.pattern(rule, value, source, errors, options);
    }
  }

  callback(errors);
}

function date(rule, value, callback, source, options) {
  // console.log('integer rule called %j', rule);
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field); // console.log('validate on %s value', value);

  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }

    rules.required(rule, value, source, errors, options);

    if (!isEmptyValue(value)) {
      var dateObject;

      if (typeof value === 'number') {
        dateObject = new Date(value);
      } else {
        dateObject = value;
      }

      rules.type(rule, dateObject, source, errors, options);

      if (dateObject) {
        rules.range(rule, dateObject.getTime(), source, errors, options);
      }
    }
  }

  callback(errors);
}

function required$1(rule, value, callback, source, options) {
  var errors = [];
  var type = Array.isArray(value) ? 'array' : typeof value;
  rules.required(rule, value, source, errors, options, type);
  callback(errors);
}

function type$1(rule, value, callback, source, options) {
  var ruleType = rule.type;
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);

  if (validate) {
    if (isEmptyValue(value, ruleType) && !rule.required) {
      return callback();
    }

    rules.required(rule, value, source, errors, options, ruleType);

    if (!isEmptyValue(value, ruleType)) {
      rules.type(rule, value, source, errors, options);
    }
  }

  callback(errors);
}

/**
 *  Performs validation for any type.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param callback The callback function.
 *  @param source The source object being validated.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */

function any(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);

  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }

    rules.required(rule, value, source, errors, options);
  }

  callback(errors);
}

var validators = {
  string: string,
  method: method,
  number: number,
  "boolean": _boolean,
  regexp: regexp,
  integer: integer,
  "float": floatFn,
  array: array,
  object: object,
  "enum": enumerable$1,
  pattern: pattern$2,
  date: date,
  url: type$1,
  hex: type$1,
  email: type$1,
  required: required$1,
  any: any
};

function newMessages() {
  return {
    "default": 'Validation error on field %s',
    required: '%s is required',
    "enum": '%s must be one of %s',
    whitespace: '%s cannot be empty',
    date: {
      format: '%s date %s is invalid for format %s',
      parse: '%s date could not be parsed, %s is invalid ',
      invalid: '%s date %s is invalid'
    },
    types: {
      string: '%s is not a %s',
      method: '%s is not a %s (function)',
      array: '%s is not an %s',
      object: '%s is not an %s',
      number: '%s is not a %s',
      date: '%s is not a %s',
      "boolean": '%s is not a %s',
      integer: '%s is not an %s',
      "float": '%s is not a %s',
      regexp: '%s is not a valid %s',
      email: '%s is not a valid %s',
      url: '%s is not a valid %s',
      hex: '%s is not a valid %s'
    },
    string: {
      len: '%s must be exactly %s characters',
      min: '%s must be at least %s characters',
      max: '%s cannot be longer than %s characters',
      range: '%s must be between %s and %s characters'
    },
    number: {
      len: '%s must equal %s',
      min: '%s cannot be less than %s',
      max: '%s cannot be greater than %s',
      range: '%s must be between %s and %s'
    },
    array: {
      len: '%s must be exactly %s in length',
      min: '%s cannot be less than %s in length',
      max: '%s cannot be greater than %s in length',
      range: '%s must be between %s and %s in length'
    },
    pattern: {
      mismatch: '%s value %s does not match pattern %s'
    },
    clone: function clone() {
      var cloned = JSON.parse(JSON.stringify(this));
      cloned.clone = this.clone;
      return cloned;
    }
  };
}
var messages = newMessages();

/**
 *  Encapsulates a validation schema.
 *
 *  @param descriptor An object declaring validation rules
 *  for this schema.
 */

function Schema(descriptor) {
  this.rules = null;
  this._messages = messages;
  this.define(descriptor);
}

Schema.prototype = {
  messages: function messages(_messages) {
    if (_messages) {
      this._messages = deepMerge(newMessages(), _messages);
    }

    return this._messages;
  },
  define: function define(rules) {
    if (!rules) {
      throw new Error('Cannot configure a schema with no rules');
    }

    if (typeof rules !== 'object' || Array.isArray(rules)) {
      throw new Error('Rules must be an object');
    }

    this.rules = {};
    var z;
    var item;

    for (z in rules) {
      if (rules.hasOwnProperty(z)) {
        item = rules[z];
        this.rules[z] = Array.isArray(item) ? item : [item];
      }
    }
  },
  validate: function validate(source_, o, oc) {
    var _this = this;

    if (o === void 0) {
      o = {};
    }

    if (oc === void 0) {
      oc = function oc() {};
    }

    var source = source_;
    var options = o;
    var callback = oc;

    if (typeof options === 'function') {
      callback = options;
      options = {};
    }

    if (!this.rules || Object.keys(this.rules).length === 0) {
      if (callback) {
        callback();
      }

      return Promise.resolve();
    }

    function complete(results) {
      var i;
      var errors = [];
      var fields = {};

      function add(e) {
        if (Array.isArray(e)) {
          var _errors;

          errors = (_errors = errors).concat.apply(_errors, e);
        } else {
          errors.push(e);
        }
      }

      for (i = 0; i < results.length; i++) {
        add(results[i]);
      }

      if (!errors.length) {
        errors = null;
        fields = null;
      } else {
        fields = convertFieldsError(errors);
      }

      callback(errors, fields);
    }

    if (options.messages) {
      var messages$1 = this.messages();

      if (messages$1 === messages) {
        messages$1 = newMessages();
      }

      deepMerge(messages$1, options.messages);
      options.messages = messages$1;
    } else {
      options.messages = this.messages();
    }

    var arr;
    var value;
    var series = {};
    var keys = options.keys || Object.keys(this.rules);
    keys.forEach(function (z) {
      arr = _this.rules[z];
      value = source[z];
      arr.forEach(function (r) {
        var rule = r;

        if (typeof rule.transform === 'function') {
          if (source === source_) {
            source = _extends({}, source);
          }

          value = source[z] = rule.transform(value);
        }

        if (typeof rule === 'function') {
          rule = {
            validator: rule
          };
        } else {
          rule = _extends({}, rule);
        }

        rule.validator = _this.getValidationMethod(rule);
        rule.field = z;
        rule.fullField = rule.fullField || z;
        rule.type = _this.getType(rule);

        if (!rule.validator) {
          return;
        }

        series[z] = series[z] || [];
        series[z].push({
          rule: rule,
          value: value,
          source: source,
          field: z
        });
      });
    });
    var errorFields = {};
    return asyncMap(series, options, function (data, doIt) {
      var rule = data.rule;
      var deep = (rule.type === 'object' || rule.type === 'array') && (typeof rule.fields === 'object' || typeof rule.defaultField === 'object');
      deep = deep && (rule.required || !rule.required && data.value);
      rule.field = data.field;

      function addFullfield(key, schema) {
        return _extends({}, schema, {
          fullField: rule.fullField + "." + key
        });
      }

      function cb(e) {
        if (e === void 0) {
          e = [];
        }

        var errors = e;

        if (!Array.isArray(errors)) {
          errors = [errors];
        }

        if (!options.suppressWarning && errors.length) {
          Schema.warning('async-validator:', errors);
        }

        if (errors.length && rule.message) {
          errors = [].concat(rule.message);
        }

        errors = errors.map(complementError(rule));

        if (options.first && errors.length) {
          errorFields[rule.field] = 1;
          return doIt(errors);
        }

        if (!deep) {
          doIt(errors);
        } else {
          // if rule is required but the target object
          // does not exist fail at the rule level and don't
          // go deeper
          if (rule.required && !data.value) {
            if (rule.message) {
              errors = [].concat(rule.message).map(complementError(rule));
            } else if (options.error) {
              errors = [options.error(rule, format(options.messages.required, rule.field))];
            } else {
              errors = [];
            }

            return doIt(errors);
          }

          var fieldsSchema = {};

          if (rule.defaultField) {
            for (var k in data.value) {
              if (data.value.hasOwnProperty(k)) {
                fieldsSchema[k] = rule.defaultField;
              }
            }
          }

          fieldsSchema = _extends({}, fieldsSchema, {}, data.rule.fields);

          for (var f in fieldsSchema) {
            if (fieldsSchema.hasOwnProperty(f)) {
              var fieldSchema = Array.isArray(fieldsSchema[f]) ? fieldsSchema[f] : [fieldsSchema[f]];
              fieldsSchema[f] = fieldSchema.map(addFullfield.bind(null, f));
            }
          }

          var schema = new Schema(fieldsSchema);
          schema.messages(options.messages);

          if (data.rule.options) {
            data.rule.options.messages = options.messages;
            data.rule.options.error = options.error;
          }

          schema.validate(data.value, data.rule.options || options, function (errs) {
            var finalErrors = [];

            if (errors && errors.length) {
              finalErrors.push.apply(finalErrors, errors);
            }

            if (errs && errs.length) {
              finalErrors.push.apply(finalErrors, errs);
            }

            doIt(finalErrors.length ? finalErrors : null);
          });
        }
      }

      var res;

      if (rule.asyncValidator) {
        res = rule.asyncValidator(rule, data.value, cb, data.source, options);
      } else if (rule.validator) {
        res = rule.validator(rule, data.value, cb, data.source, options);

        if (res === true) {
          cb();
        } else if (res === false) {
          cb(rule.message || rule.field + " fails");
        } else if (res instanceof Array) {
          cb(res);
        } else if (res instanceof Error) {
          cb(res.message);
        }
      }

      if (res && res.then) {
        res.then(function () {
          return cb();
        }, function (e) {
          return cb(e);
        });
      }
    }, function (results) {
      complete(results);
    });
  },
  getType: function getType(rule) {
    if (rule.type === undefined && rule.pattern instanceof RegExp) {
      rule.type = 'pattern';
    }

    if (typeof rule.validator !== 'function' && rule.type && !validators.hasOwnProperty(rule.type)) {
      throw new Error(format('Unknown rule type %s', rule.type));
    }

    return rule.type || 'string';
  },
  getValidationMethod: function getValidationMethod(rule) {
    if (typeof rule.validator === 'function') {
      return rule.validator;
    }

    var keys = Object.keys(rule);
    var messageIndex = keys.indexOf('message');

    if (messageIndex !== -1) {
      keys.splice(messageIndex, 1);
    }

    if (keys.length === 1 && keys[0] === 'required') {
      return validators.required;
    }

    return validators[this.getType(rule)] || false;
  }
};

Schema.register = function register(type, validator) {
  if (typeof validator !== 'function') {
    throw new Error('Cannot register a validator by type, validator is not a function');
  }

  validators[type] = validator;
};

Schema.warning = warning;
Schema.messages = messages;

/* harmony default export */ __webpack_exports__["a"] = (Schema);
//# sourceMappingURL=index.js.map

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(208)))

/***/ }),
/* 208 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 209 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      class: [
        "vvm-From-Item",
        { cellInline: _vm.cellInline, block: !_vm.cellInline }
      ]
    },
    [
      _c(
        "div",
        { staticClass: "vvm-From-Item-label", style: _vm.style },
        [
          _vm.required
            ? _c("span", { staticClass: "vvm-From-Item-label-required" }, [
                _vm._v("*")
              ])
            : _vm._e(),
          _vm._v(" "),
          _vm._t("label", [_vm._v(_vm._s(_vm.label))]),
          _vm._v(" "),
          !_vm.cellInline
            ? _c(
                "span",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: _vm.statusIcon,
                      expression: "statusIcon"
                    }
                  ],
                  class: [
                    "vvm-From-Item-statusIcon",
                    _vm.ruleState,
                    { cellInline: !_vm.cellInline }
                  ]
                },
                [
                  _c(
                    "transition",
                    { attrs: { name: "fade", mode: "out-in" } },
                    [
                      _vm.ruleState === "success"
                        ? _c("Icon", {
                            key: "success",
                            attrs: { icon: _vm.successIcon, size: 12 }
                          })
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.ruleState === "error"
                        ? _c("Icon", {
                            key: "error",
                            attrs: { icon: _vm.errorIcon, size: 12 }
                          })
                        : _vm._e()
                    ],
                    1
                  )
                ],
                1
              )
            : _vm._e()
        ],
        2
      ),
      _vm._v(" "),
      _c(
        "div",
        { class: ["vvm-From-Item-body", { statusIcon: _vm.statusIcon }] },
        [
          _vm._t("default"),
          _vm._v(" "),
          _c("transition", { attrs: { name: "slide-fade" } }, [
            _vm.ruleState === "error"
              ? _c(
                  "label",
                  { staticClass: "vvm-From-Item-message vvm-ellipsis" },
                  [_vm._v(_vm._s(_vm.message))]
                )
              : _vm._e()
          ]),
          _vm._v(" "),
          _vm.cellInline
            ? _c(
                "span",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: _vm.statusIcon,
                      expression: "statusIcon"
                    }
                  ],
                  class: [
                    "vvm-From-Item-statusIcon",
                    _vm.ruleState,
                    { loading: _vm.loadingShow },
                    { cellInline: !_vm.cellInline }
                  ]
                },
                [
                  _c("Icon", {
                    class: [_vm.loadingShow ? "vvm-loading" : ""],
                    attrs: { icon: _vm.icon, size: 12 }
                  })
                ],
                1
              )
            : _vm._e()
        ],
        2
      )
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
    require("vue-hot-reload-api")      .rerender("data-v-ca422376", esExports)
  }
}

/***/ }),
/* 210 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_vue__ = __webpack_require__(211);




/* harmony default export */ __webpack_exports__["default"] = (__WEBPACK_IMPORTED_MODULE_0__index_vue__["a" /* default */]);

/***/ }),
/* 211 */
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
/* 212 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);




/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_0_vue___default.a());

/***/ }),
/* 213 */
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
/* 214 */
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
/* 215 */
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
/* 216 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_vue__ = __webpack_require__(217);



/* harmony default export */ __webpack_exports__["default"] = (__WEBPACK_IMPORTED_MODULE_0__index_vue__["a" /* default */]);

/***/ }),
/* 217 */
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
/* 218 */
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
/* 219 */
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
/* 220 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_vue__ = __webpack_require__(221);



/* harmony default export */ __webpack_exports__["default"] = (__WEBPACK_IMPORTED_MODULE_0__index_vue__["a" /* default */]);

/***/ }),
/* 221 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(133);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_52f74a2e_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(222);
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
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_52f74a2e_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "packages/components/Radio/index.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-52f74a2e", Component.options)
  } else {
    hotAPI.reload("data-v-52f74a2e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 222 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("label", { staticClass: "vvm-Radio" }, [
    _c(
      "span",
      {
        class: [
          "vvm-Radio-icon",
          "vvm-text-color-" + _vm.parentType,
          _vm.parentDisabled ? "disabled" : ""
        ]
      },
      [
        _c(
          "transition",
          { attrs: { name: "fade" } },
          [
            _c("Icon", {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: _vm.active,
                  expression: "active"
                }
              ],
              attrs: { icon: _vm.parentIcon }
            })
          ],
          1
        )
      ],
      1
    ),
    _vm._v(" "),
    _c(
      "span",
      { class: ["vvm-Radio-text", _vm.parentDisabled ? "disabled" : ""] },
      [_vm._t("default", [_vm._v(_vm._s(_vm.label))])],
      2
    ),
    _vm._v(" "),
    _vm.parent
      ? _c("input", {
          staticClass: "vvm-Radio-input",
          attrs: { disabled: _vm.parentDisabled, type: "radio", name: "radio" },
          domProps: { value: _vm.label },
          on: { change: _vm.change }
        })
      : _c("input", {
          staticClass: "vvm-Radio-input",
          attrs: { name: "radio", disabled: _vm.parentDisabled, type: "radio" },
          on: { change: _vm.change }
        })
  ])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-52f74a2e", esExports)
  }
}

/***/ }),
/* 223 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_vue__ = __webpack_require__(224);



/* harmony default export */ __webpack_exports__["default"] = (__WEBPACK_IMPORTED_MODULE_0__index_vue__["a" /* default */]);

/***/ }),
/* 224 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(134);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_8d1f00a8_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(225);
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
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_8d1f00a8_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "packages/components/RadioGroup/index.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-8d1f00a8", Component.options)
  } else {
    hotAPI.reload("data-v-8d1f00a8", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 225 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { class: ["vvm-Radio-Group", _vm.inline ? "inline" : ""] },
    [_vm._t("default")],
    2
  )
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-8d1f00a8", esExports)
  }
}

/***/ }),
/* 226 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_vue__ = __webpack_require__(227);



/* harmony default export */ __webpack_exports__["default"] = (__WEBPACK_IMPORTED_MODULE_0__index_vue__["a" /* default */]);

/***/ }),
/* 227 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(135);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_f117fbc8_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(228);
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
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_f117fbc8_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "packages/components/Switch/index.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-f117fbc8", Component.options)
  } else {
    hotAPI.reload("data-v-f117fbc8", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 228 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      class: ["vvm-Switch", _vm.active ? "color-active" : "", _vm.type],
      on: { click: _vm.click }
    },
    [
      _c("span", {
        class: ["vvm-Switch-radius", _vm.active ? "active" : "close"]
      }),
      _vm._v(" "),
      _vm.disabled
        ? _c("div", { staticClass: "vvm-Switch-disabled" })
        : _vm._e()
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
    require("vue-hot-reload-api")      .rerender("data-v-f117fbc8", esExports)
  }
}

/***/ }),
/* 229 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_vue__ = __webpack_require__(230);



/* harmony default export */ __webpack_exports__["default"] = (__WEBPACK_IMPORTED_MODULE_0__index_vue__["a" /* default */]);

/***/ }),
/* 230 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(136);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_6fabfca9_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(236);
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
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_6fabfca9_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "packages/components/Upload/index.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6fabfca9", Component.options)
  } else {
    hotAPI.reload("data-v-6fabfca9", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 231 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "vvm-Upload-default-icon" },
    [
      !_vm.url
        ? [
            _vm._t("default", [
              _c("Icon", { attrs: { size: _vm.iconSize, icon: _vm.icon } })
            ])
          ]
        : [
            _vm.isImage
              ? [
                  _c("img", {
                    staticClass: "vvm-Upload-img",
                    attrs: { src: _vm.url }
                  })
                ]
              : [_c("Icon", { attrs: { size: 34, icon: "iconicon-" } })],
            _vm._v(" "),
            _vm.showRemove
              ? _c(
                  "span",
                  {
                    staticClass: "vvm-Upload-removeImg",
                    on: {
                      click: function($event) {
                        $event.stopPropagation()
                        return _vm.onRemove($event)
                      }
                    }
                  },
                  [
                    _c("Icon", {
                      attrs: { size: 14, icon: "iconcuowu", color: "#fff" }
                    })
                  ],
                  1
                )
              : _vm._e()
          ]
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-d9ea621c", esExports)
  }
}

/***/ }),
/* 232 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getType; });
/* harmony export (immutable) */ __webpack_exports__["a"] = fetch;

var getType = function getType(file) {
  return file.substr(file.lastIndexOf('.') + 1);
};

function fetch(options, file) {
  if (typeof XMLHttpRequest === 'undefined') {
    return;
  }
  var xhr = new XMLHttpRequest();
  var action = options.action;
  if (xhr.upload) {
    xhr.upload.onprogress = function progress(e) {
      if (e.total > 0) {
        e.percent = e.loaded / e.total * 100;
      }
      options.uploadProgress(e.percent);
    };
  }
  var formData = new FormData();
  formData.append(options.name, file, options.fileName);
  for (var key in options.data) {
    formData.append(key, options.data[key]);
  }

  xhr.onload = function (e) {
    var response = e.target.response;
    if (xhr.status < 200 || xhr.status >= 300) {
      options.uploadError(response);
      return;
    }
    options.onload(response);
  };

  xhr.onerror = function (e) {
    var response = e.target.response;
    options.uploadError(response);
  };

  xhr.onloadend = function (e) {
    var response = e.target.response;
    options.uploadLoadend(response);
  };
  xhr.open('post', action, true);
  var headers = options.headers;
  for (var _key in headers) {
    if (headers[_key] !== null) {
      xhr.setRequestHeader(_key, headers[_key]);
    }
  }
  xhr.send(formData);
}

/***/ }),
/* 233 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "vvm-Upload-single" },
    [
      _c(
        "Upload-Placeholder",
        {
          attrs: {
            url: _vm.value,
            iconSize: _vm.iconSize,
            icon: _vm.icon,
            isImage: _vm.isImage,
            showRemove: _vm.showRemove
          },
          on: { "on-remove": _vm.onRemove }
        },
        [_vm._t("default")],
        2
      ),
      _vm._v(" "),
      _c("input", {
        ref: "input",
        staticClass: "vvm-Upload-input",
        attrs: { disabled: _vm.computedDisabled, name: _vm.name, type: "file" },
        on: { change: _vm.change }
      }),
      _vm._v(" "),
      _vm.compress
        ? _c("canvas", { ref: "canvas", attrs: { hidden: "hidden" } })
        : _vm._e(),
      _vm._v(" "),
      _vm.progress > 0
        ? _c("div", { staticClass: "vvm-Upload-progress" }, [
            _c("div", {
              staticClass: "vvm-Upload-progress-bar",
              style: { width: _vm.progress + "%" }
            })
          ])
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
    require("vue-hot-reload-api")      .rerender("data-v-1f24f071", esExports)
  }
}

/***/ }),
/* 234 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_multiple_vue__ = __webpack_require__(141);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_c7079a00_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_multiple_vue__ = __webpack_require__(235);
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_multiple_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_c7079a00_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_multiple_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "packages/components/Upload/components/multiple.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-c7079a00", Component.options)
  } else {
    hotAPI.reload("data-v-c7079a00", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 235 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "vvm-Upload-multiple" },
    [
      _vm._l(_vm.currentValue, function(item, $index) {
        return _c("Upload-Placeholder", {
          key: $index,
          style: _vm.style,
          attrs: {
            index: $index,
            url: _vm.valueString ? item : item.value,
            isImage: _vm.valueString ? _vm.isImage : item.isImage,
            showRemove: _vm.showRemove
          },
          on: { "on-remove": _vm.onRemove }
        })
      }),
      _vm._v(" "),
      _vm.show
        ? _c(
            "Upload",
            {
              ref: "upload",
              style: { marginTop: "8px" },
              attrs: {
                icon: _vm.icon,
                size: _vm.size,
                accept: _vm.accept,
                name: _vm.name,
                acceptErrorMessage: _vm.acceptErrorMessage,
                compress: _vm.compress,
                iconSize: _vm.iconSize,
                compressSize: _vm.compressSize,
                imgWidth: _vm.imgWidth,
                response: _vm.response,
                showLabel: _vm.showLabel,
                headers: _vm.headers,
                action: _vm.action,
                data: _vm.data,
                quality: _vm.quality,
                beforeRemove: _vm.beforeRemove,
                beforeUpload: _vm.beforeUpload,
                onSuccess: _vm.onSuccess,
                onSuccessText: _vm.onSuccessText,
                onError: _vm.onError,
                onProgress: _vm.onProgress,
                onLoadend: _vm.onLoadend,
                onErrorText: _vm.onErrorText,
                disabled: _vm.disabled,
                showRemove: _vm.showRemove,
                type: _vm.type,
                maxNumber: _vm.maxNumber,
                isImage: _vm.isImage
              },
              on: { input: _vm.input }
            },
            [_vm._t("default")],
            2
          )
        : _vm._e()
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-c7079a00", esExports)
  }
}

/***/ }),
/* 236 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "v-Upload" },
    [
      _vm.type === "single"
        ? [
            _c(
              "v-Upload",
              {
                ref: "upload",
                attrs: {
                  icon: _vm.icon,
                  size: _vm.size,
                  accept: _vm.accept,
                  name: _vm.name,
                  acceptErrorMessage: _vm.acceptErrorMessage,
                  compress: _vm.compress,
                  iconSize: _vm.iconSize,
                  compressSize: _vm.compressSize,
                  imgWidth: _vm.imgWidth,
                  response: _vm.response,
                  showLabel: _vm.showLabel,
                  headers: _vm.headers,
                  action: _vm.action,
                  data: _vm.data,
                  quality: _vm.quality,
                  beforeRemove: _vm.beforeRemove,
                  beforeUpload: _vm.beforeUpload,
                  onSuccess: _vm.onSuccess,
                  onSuccessText: _vm.onSuccessText,
                  onError: _vm.onError,
                  onProgress: _vm.onProgress,
                  onLoadend: _vm.onLoadend,
                  onErrorText: _vm.onErrorText,
                  disabled: _vm.disabled,
                  showRemove: _vm.showRemove,
                  type: _vm.type,
                  maxNumber: _vm.maxNumber,
                  isImage: _vm.isImage
                },
                on: { input: _vm.input },
                model: {
                  value: _vm.currentValue,
                  callback: function($$v) {
                    _vm.currentValue = $$v
                  },
                  expression: "currentValue"
                }
              },
              [_vm._t("default")],
              2
            )
          ]
        : [
            _c(
              "Multiple",
              {
                ref: "upload",
                attrs: {
                  icon: _vm.icon,
                  size: _vm.size,
                  accept: _vm.accept,
                  name: _vm.name,
                  acceptErrorMessage: _vm.acceptErrorMessage,
                  compress: _vm.compress,
                  iconSize: _vm.iconSize,
                  compressSize: _vm.compressSize,
                  imgWidth: _vm.imgWidth,
                  response: _vm.response,
                  showLabel: _vm.showLabel,
                  headers: _vm.headers,
                  action: _vm.action,
                  data: _vm.data,
                  quality: _vm.quality,
                  beforeRemove: _vm.beforeRemove,
                  beforeUpload: _vm.beforeUpload,
                  onSuccess: _vm.onSuccess,
                  onSuccessText: _vm.onSuccessText,
                  onError: _vm.onError,
                  onProgress: _vm.onProgress,
                  onLoadend: _vm.onLoadend,
                  onErrorText: _vm.onErrorText,
                  disabled: _vm.disabled,
                  showRemove: _vm.showRemove,
                  type: _vm.type,
                  maxNumber: _vm.maxNumber,
                  isImage: _vm.isImage,
                  "value-item-string": _vm.valueString
                },
                on: { input: _vm.input },
                model: {
                  value: _vm.currentValue,
                  callback: function($$v) {
                    _vm.currentValue = $$v
                  },
                  expression: "currentValue"
                }
              },
              [_vm._t("default"), _vm._v(" "), _vm._t("file")],
              2
            )
          ]
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-6fabfca9", esExports)
  }
}

/***/ }),
/* 237 */,
/* 238 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_ActionSheet__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Backtop__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Button__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Calendar__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_Card__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_Cell__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_CellGroup__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_Checkbox__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_CheckboxGroup__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_DatetimePicker__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_From__ = __webpack_require__(185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_FromItem__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_Icon__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_Input__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_Modal__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_NumberInput__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_Picker__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_Radio__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_RadioGroup__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_Switch__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_Upload__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_Loading__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_Toast__ = __webpack_require__(64);
























var components = [__WEBPACK_IMPORTED_MODULE_0__components_ActionSheet__["default"], __WEBPACK_IMPORTED_MODULE_1__components_Backtop__["default"], __WEBPACK_IMPORTED_MODULE_2__components_Button__["default"], __WEBPACK_IMPORTED_MODULE_3__components_Calendar__["default"], __WEBPACK_IMPORTED_MODULE_4__components_Card__["default"], __WEBPACK_IMPORTED_MODULE_5__components_Cell__["default"], __WEBPACK_IMPORTED_MODULE_6__components_CellGroup__["default"], __WEBPACK_IMPORTED_MODULE_7__components_Checkbox__["default"], __WEBPACK_IMPORTED_MODULE_8__components_CheckboxGroup__["default"], __WEBPACK_IMPORTED_MODULE_9__components_DatetimePicker__["default"], __WEBPACK_IMPORTED_MODULE_10__components_From__["default"], __WEBPACK_IMPORTED_MODULE_11__components_FromItem__["default"], __WEBPACK_IMPORTED_MODULE_12__components_Icon__["default"], __WEBPACK_IMPORTED_MODULE_13__components_Input__["default"], __WEBPACK_IMPORTED_MODULE_14__components_Modal__["default"], __WEBPACK_IMPORTED_MODULE_15__components_NumberInput__["default"], __WEBPACK_IMPORTED_MODULE_16__components_Picker__["default"], __WEBPACK_IMPORTED_MODULE_17__components_Radio__["default"], __WEBPACK_IMPORTED_MODULE_18__components_RadioGroup__["default"], __WEBPACK_IMPORTED_MODULE_19__components_Switch__["default"], __WEBPACK_IMPORTED_MODULE_20__components_Upload__["default"]];

var install = function install(Vue) {
      if (install.installed) return;
      components.map(function (component) {
            return Vue.component(component.name, component);
      });
      Vue.prototype.$Loading = __WEBPACK_IMPORTED_MODULE_21__components_Loading__["default"];
      Vue.prototype.$Toast = __WEBPACK_IMPORTED_MODULE_22__components_Toast__["default"];
};

if (typeof window !== 'undefined' && window.Vue) {
      window.Vue.use(components);
}

/* harmony default export */ __webpack_exports__["default"] = (install);

/***/ })
/******/ ]);
});
//# sourceMappingURL=index.js.map