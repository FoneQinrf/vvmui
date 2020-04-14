(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vue"));
	else if(typeof define === 'function' && define.amd)
		define(["vue"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("vue")) : factory(root["Vue"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE_27__) {
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
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_vue__ = __webpack_require__(15);




/* harmony default export */ __webpack_exports__["default"] = (__WEBPACK_IMPORTED_MODULE_0__index_vue__["a" /* default */]);

/***/ }),
/* 3 */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.6.9' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(12)(function () {
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
      type: Number,
      default: 14
    }
  },
  computed: {
    clasess: function clasess() {
      return "Am-iconfont " + this.icon;
    },
    style: function style() {
      var witdh = document.body.clientWidth;
      return {
        color: this.color,
        fontSize: this.size * 100 / witdh + "vw"
      };
    }
  }
});

/***/ }),
/* 6 */
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
        var witdh = document.body.clientWidth;
        return px * 100 / witdh + 'vw' || 'auto';
    }
};

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 8 */,
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index__ = __webpack_require__(6);




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
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(7);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),
/* 11 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(17);
var createDesc = __webpack_require__(25);
module.exports = __webpack_require__(4) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(29);
var defined = __webpack_require__(20);
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(5);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_11844461_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(16);
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
/* 16 */
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
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(10);
var IE8_DOM_DEFINE = __webpack_require__(38);
var toPrimitive = __webpack_require__(34);
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
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(1);
var core = __webpack_require__(3);
var ctx = __webpack_require__(23);
var hide = __webpack_require__(13);
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
/* 19 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),
/* 20 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),
/* 21 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
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
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_27__;

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(7);
var document = __webpack_require__(1).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(19);
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(32)('keys');
var uid = __webpack_require__(26);
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(39);
var enumBugKeys = __webpack_require__(33);

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(3);
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

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(7);
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
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(21);
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),
/* 36 */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(20);
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(4) && !__webpack_require__(12)(function () {
  return Object.defineProperty(__webpack_require__(28)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(11);
var toIObject = __webpack_require__(14);
var arrayIndexOf = __webpack_require__(43)(false);
var IE_PROTO = __webpack_require__(30)('IE_PROTO');

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
/* 40 */,
/* 41 */,
/* 42 */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(14);
var toLength = __webpack_require__(35);
var toAbsoluteIndex = __webpack_require__(44);
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
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(21);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(50), __esModule: true };

/***/ }),
/* 49 */,
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(51);
module.exports = __webpack_require__(3).Object.assign;


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(18);

$export($export.S + $export.F, 'Object', { assign: __webpack_require__(52) });


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var DESCRIPTORS = __webpack_require__(4);
var getKeys = __webpack_require__(31);
var gOPS = __webpack_require__(42);
var pIE = __webpack_require__(36);
var toObject = __webpack_require__(37);
var IObject = __webpack_require__(29);
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(12)(function () {
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
/* 53 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Icon__ = __webpack_require__(2);



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
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__index_vue__ = __webpack_require__(71);






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
    name: 'G-Toast',
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
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(53);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_2f40b4d1_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(72);
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
/* 72 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "Am-Toast" },
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
                staticClass: "Am-Toast-mask"
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
            class: ["Am-Toast-body", _vm.type]
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
                staticClass: "Am-Toast-iconfont"
              },
              [
                _c("Icon", {
                  attrs: { icon: _vm.iconfont, size: 26, color: "#fff" }
                })
              ],
              1
            ),
            _vm._v(" "),
            _c("div", { staticClass: "Am-Toast-context" }, [
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
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */
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
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */,
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */,
/* 110 */,
/* 111 */,
/* 112 */,
/* 113 */,
/* 114 */,
/* 115 */,
/* 116 */,
/* 117 */,
/* 118 */,
/* 119 */,
/* 120 */,
/* 121 */,
/* 122 */,
/* 123 */,
/* 124 */,
/* 125 */,
/* 126 */,
/* 127 */,
/* 128 */,
/* 129 */,
/* 130 */,
/* 131 */,
/* 132 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_upload__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_mixins__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_multiple__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_emitter__ = __webpack_require__(9);






/* harmony default export */ __webpack_exports__["a"] = ({
  name: "Upload",
  components: { AmUpload: __WEBPACK_IMPORTED_MODULE_0__components_upload__["a" /* default */], Multiple: __WEBPACK_IMPORTED_MODULE_2__components_multiple__["a" /* default */] },
  mixins: [__WEBPACK_IMPORTED_MODULE_1__components_mixins__["a" /* default */], __WEBPACK_IMPORTED_MODULE_3__utils_emitter__["a" /* default */]],
  props: {
    value: {
      type: [String, Array]
    },
    icon: String,
    valueItemString: {
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
/* 133 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_upload_vue__ = __webpack_require__(134);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_1f24f071_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_upload_vue__ = __webpack_require__(220);
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
/* 134 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixins__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__uploadPlaceholder__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Toast__ = __webpack_require__(57);






var compressList = ["png", "PNG", "jpg", "JPG", "jpeg", "JPEG"];
/* harmony default export */ __webpack_exports__["a"] = ({
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
      var _this = this;

      this.clearInput();
      if (!this.beforeUpload) {
        Object(__WEBPACK_IMPORTED_MODULE_2__utils__["a" /* fetch */])(this, file);
        return;
      }

      var before = this.beforeUpload(file);
      if (before && before.then) {
        before.then(function (res) {
          if (res !== false) {
            Object(__WEBPACK_IMPORTED_MODULE_2__utils__["a" /* fetch */])(_this, file);
            return;
          }
          _this.progress = 0;
        });
        return;
      }
      if (before !== false) {
        Object(__WEBPACK_IMPORTED_MODULE_2__utils__["a" /* fetch */])(this, file);
      }
    },
    onRemove: function onRemove() {
      var _this2 = this;

      this.clearInput();
      if (this.type === "single") {
        if (!this.beforeRemove) {
          this.$emit("input", "");
          return;
        }

        var before = this.beforeRemove(this.file, this.value);
        if (before && before.then) {
          before.then(function (res) {
            if (res !== false) {
              _this2.$emit("input", "");
            }
          });
          return;
        }
        if (before !== false) {
          this.$emit("input", "");
        }
      }
    },
    clearInput: function clearInput() {
      this.$refs.input.value = null;
    }
  }
});

/***/ }),
/* 135 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_uploadPlaceholder_vue__ = __webpack_require__(136);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_d9ea621c_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_uploadPlaceholder_vue__ = __webpack_require__(218);
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
/* 136 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Icon__ = __webpack_require__(2);



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
/* 137 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixins__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__upload__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__uploadPlaceholder__ = __webpack_require__(135);





/* harmony default export */ __webpack_exports__["a"] = ({
  mixins: [__WEBPACK_IMPORTED_MODULE_0__mixins__["a" /* default */]],
  components: { Upload: __WEBPACK_IMPORTED_MODULE_1__upload__["a" /* default */], UploadPlaceholder: __WEBPACK_IMPORTED_MODULE_2__uploadPlaceholder__["a" /* default */] },
  props: {
    value: Array,
    icon: {
      type: String,
      default: "iconzengjia1"
    },
    valueItemString: Boolean
  },
  data: function data() {
    return {
      style: {
        width: 0,
        height: 0,
        marginTop: "5px"
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
      var _this = this;

      if (!this.beforeRemove) {
        this.currentValue.splice(index, 1);
        this.$emit("input", this.currentValue);
        return;
      }

      var before = this.beforeRemove(this.currentValue[index], this.currentValue);
      if (before && before.then) {
        before.then(function (res) {
          if (res !== false) {
            _this.currentValue.splice(index, 1);
            _this.$emit("input", _this.currentValue);
          }
        });
        return;
      }
      if (before !== false) {
        this.currentValue.splice(index, 1);
        this.$emit("input", this.currentValue);
      }
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
    var _this2 = this;

    this.$nextTick(function () {
      var _$refs$upload$$el = _this2.$refs.upload.$el,
          offsetWidth = _$refs$upload$$el.offsetWidth,
          offsetHeight = _$refs$upload$$el.offsetHeight;

      _this2.style.width = offsetWidth + "px";
      _this2.style.height = offsetHeight + "px";
    });
  }
});

/***/ }),
/* 138 */,
/* 139 */,
/* 140 */,
/* 141 */,
/* 142 */,
/* 143 */,
/* 144 */,
/* 145 */,
/* 146 */,
/* 147 */,
/* 148 */,
/* 149 */,
/* 150 */,
/* 151 */,
/* 152 */,
/* 153 */,
/* 154 */,
/* 155 */,
/* 156 */,
/* 157 */,
/* 158 */,
/* 159 */,
/* 160 */,
/* 161 */,
/* 162 */,
/* 163 */,
/* 164 */,
/* 165 */,
/* 166 */,
/* 167 */,
/* 168 */,
/* 169 */,
/* 170 */,
/* 171 */,
/* 172 */,
/* 173 */,
/* 174 */,
/* 175 */,
/* 176 */,
/* 177 */,
/* 178 */,
/* 179 */,
/* 180 */,
/* 181 */,
/* 182 */,
/* 183 */,
/* 184 */,
/* 185 */,
/* 186 */,
/* 187 */,
/* 188 */,
/* 189 */,
/* 190 */,
/* 191 */,
/* 192 */,
/* 193 */,
/* 194 */,
/* 195 */,
/* 196 */,
/* 197 */,
/* 198 */,
/* 199 */,
/* 200 */,
/* 201 */,
/* 202 */,
/* 203 */,
/* 204 */,
/* 205 */,
/* 206 */,
/* 207 */,
/* 208 */,
/* 209 */,
/* 210 */,
/* 211 */,
/* 212 */,
/* 213 */,
/* 214 */,
/* 215 */,
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_6fabfca9_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(223);
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
/* 218 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "Am-Upload-default-icon" },
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
                    staticClass: "Am-Upload-img",
                    attrs: { src: _vm.url }
                  })
                ]
              : [_c("Icon", { attrs: { size: 34, icon: "iconicon-" } })],
            _vm._v(" "),
            _vm.showRemove
              ? _c(
                  "span",
                  {
                    staticClass: "Am-Upload-removeImg",
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
/* 219 */
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
/* 220 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "Am-Upload-single" },
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
        staticClass: "Am-Upload-input",
        attrs: { disabled: _vm.computedDisabled, name: _vm.name, type: "file" },
        on: { change: _vm.change }
      }),
      _vm._v(" "),
      _vm.compress
        ? _c("canvas", { ref: "canvas", attrs: { hidden: "hidden" } })
        : _vm._e(),
      _vm._v(" "),
      _vm.progress > 0
        ? _c("div", { staticClass: "Am-Upload-progress" }, [
            _c("div", {
              staticClass: "Am-Upload-progress-bar",
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
/* 221 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_multiple_vue__ = __webpack_require__(137);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_c7079a00_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_multiple_vue__ = __webpack_require__(222);
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
/* 222 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "Am-Upload-multiple" },
    [
      _vm._l(_vm.currentValue, function(item, $index) {
        return _c("Upload-Placeholder", {
          key: $index,
          style: _vm.style,
          attrs: {
            index: $index,
            url: _vm.valueItemString ? item : item.value,
            isImage: _vm.valueItemString ? _vm.isImage : item.isImage,
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
              style: { marginTop: "5px" },
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
/* 223 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "Am-Upload" },
    [
      _vm.type === "single"
        ? [
            _c(
              "Am-Upload",
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
                  "value-item-string": _vm.valueItemString
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

/***/ })
/******/ ]);
});
//# sourceMappingURL=index.js.map