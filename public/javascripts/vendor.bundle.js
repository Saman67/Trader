/******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "/assets/javascripts/app/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 434);
/******/ })
/************************************************************************/
/******/ ({

/***/ 24:
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ 434:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(435);
__webpack_require__(437);
module.exports = __webpack_require__(46);


/***/ }),

/***/ 435:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*! jQuery v2.2.0 | (c) jQuery Foundation | jquery.org/license */
!function (a, b) {
  "object" == ( false ? "undefined" : _typeof(module)) && "object" == _typeof(module.exports) ? module.exports = a.document ? b(a, !0) : function (a) {
    if (!a.document) throw new Error("jQuery requires a window with a document");return b(a);
  } : b(a);
}("undefined" != typeof window ? window : undefined, function (a, b) {
  var c = [],
      d = a.document,
      e = c.slice,
      f = c.concat,
      g = c.push,
      h = c.indexOf,
      i = {},
      j = i.toString,
      k = i.hasOwnProperty,
      l = {},
      m = "2.2.0",
      n = function n(a, b) {
    return new n.fn.init(a, b);
  },
      o = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
      p = /^-ms-/,
      q = /-([\da-z])/gi,
      r = function r(a, b) {
    return b.toUpperCase();
  };n.fn = n.prototype = { jquery: m, constructor: n, selector: "", length: 0, toArray: function toArray() {
      return e.call(this);
    }, get: function get(a) {
      return null != a ? 0 > a ? this[a + this.length] : this[a] : e.call(this);
    }, pushStack: function pushStack(a) {
      var b = n.merge(this.constructor(), a);return b.prevObject = this, b.context = this.context, b;
    }, each: function each(a) {
      return n.each(this, a);
    }, map: function map(a) {
      return this.pushStack(n.map(this, function (b, c) {
        return a.call(b, c, b);
      }));
    }, slice: function slice() {
      return this.pushStack(e.apply(this, arguments));
    }, first: function first() {
      return this.eq(0);
    }, last: function last() {
      return this.eq(-1);
    }, eq: function eq(a) {
      var b = this.length,
          c = +a + (0 > a ? b : 0);return this.pushStack(c >= 0 && b > c ? [this[c]] : []);
    }, end: function end() {
      return this.prevObject || this.constructor();
    }, push: g, sort: c.sort, splice: c.splice }, n.extend = n.fn.extend = function () {
    var a,
        b,
        c,
        d,
        e,
        f,
        g = arguments[0] || {},
        h = 1,
        i = arguments.length,
        j = !1;for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == (typeof g === "undefined" ? "undefined" : _typeof(g)) || n.isFunction(g) || (g = {}), h === i && (g = this, h--); i > h; h++) {
      if (null != (a = arguments[h])) for (b in a) {
        c = g[b], d = a[b], g !== d && (j && d && (n.isPlainObject(d) || (e = n.isArray(d))) ? (e ? (e = !1, f = c && n.isArray(c) ? c : []) : f = c && n.isPlainObject(c) ? c : {}, g[b] = n.extend(j, f, d)) : void 0 !== d && (g[b] = d));
      }
    }return g;
  }, n.extend({ expando: "jQuery" + (m + Math.random()).replace(/\D/g, ""), isReady: !0, error: function error(a) {
      throw new Error(a);
    }, noop: function noop() {}, isFunction: function isFunction(a) {
      return "function" === n.type(a);
    }, isArray: Array.isArray, isWindow: function isWindow(a) {
      return null != a && a === a.window;
    }, isNumeric: function isNumeric(a) {
      var b = a && a.toString();return !n.isArray(a) && b - parseFloat(b) + 1 >= 0;
    }, isPlainObject: function isPlainObject(a) {
      return "object" !== n.type(a) || a.nodeType || n.isWindow(a) ? !1 : a.constructor && !k.call(a.constructor.prototype, "isPrototypeOf") ? !1 : !0;
    }, isEmptyObject: function isEmptyObject(a) {
      var b;for (b in a) {
        return !1;
      }return !0;
    }, type: function type(a) {
      return null == a ? a + "" : "object" == (typeof a === "undefined" ? "undefined" : _typeof(a)) || "function" == typeof a ? i[j.call(a)] || "object" : typeof a === "undefined" ? "undefined" : _typeof(a);
    }, globalEval: function globalEval(a) {
      var b,
          c = eval;a = n.trim(a), a && (1 === a.indexOf("use strict") ? (b = d.createElement("script"), b.text = a, d.head.appendChild(b).parentNode.removeChild(b)) : c(a));
    }, camelCase: function camelCase(a) {
      return a.replace(p, "ms-").replace(q, r);
    }, nodeName: function nodeName(a, b) {
      return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase();
    }, each: function each(a, b) {
      var c,
          d = 0;if (s(a)) {
        for (c = a.length; c > d; d++) {
          if (b.call(a[d], d, a[d]) === !1) break;
        }
      } else for (d in a) {
        if (b.call(a[d], d, a[d]) === !1) break;
      }return a;
    }, trim: function trim(a) {
      return null == a ? "" : (a + "").replace(o, "");
    }, makeArray: function makeArray(a, b) {
      var c = b || [];return null != a && (s(Object(a)) ? n.merge(c, "string" == typeof a ? [a] : a) : g.call(c, a)), c;
    }, inArray: function inArray(a, b, c) {
      return null == b ? -1 : h.call(b, a, c);
    }, merge: function merge(a, b) {
      for (var c = +b.length, d = 0, e = a.length; c > d; d++) {
        a[e++] = b[d];
      }return a.length = e, a;
    }, grep: function grep(a, b, c) {
      for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++) {
        d = !b(a[f], f), d !== h && e.push(a[f]);
      }return e;
    }, map: function map(a, b, c) {
      var d,
          e,
          g = 0,
          h = [];if (s(a)) for (d = a.length; d > g; g++) {
        e = b(a[g], g, c), null != e && h.push(e);
      } else for (g in a) {
        e = b(a[g], g, c), null != e && h.push(e);
      }return f.apply([], h);
    }, guid: 1, proxy: function proxy(a, b) {
      var c, d, f;return "string" == typeof b && (c = a[b], b = a, a = c), n.isFunction(a) ? (d = e.call(arguments, 2), f = function f() {
        return a.apply(b || this, d.concat(e.call(arguments)));
      }, f.guid = a.guid = a.guid || n.guid++, f) : void 0;
    }, now: Date.now, support: l }), "function" == typeof Symbol && (n.fn[Symbol.iterator] = c[Symbol.iterator]), n.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (a, b) {
    i["[object " + b + "]"] = b.toLowerCase();
  });function s(a) {
    var b = !!a && "length" in a && a.length,
        c = n.type(a);return "function" === c || n.isWindow(a) ? !1 : "array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a;
  }var t = function (a) {
    var b,
        c,
        d,
        e,
        f,
        g,
        h,
        i,
        j,
        k,
        l,
        m,
        n,
        o,
        p,
        q,
        r,
        s,
        t,
        u = "sizzle" + 1 * new Date(),
        v = a.document,
        w = 0,
        x = 0,
        y = ga(),
        z = ga(),
        A = ga(),
        B = function B(a, b) {
      return a === b && (l = !0), 0;
    },
        C = 1 << 31,
        D = {}.hasOwnProperty,
        E = [],
        F = E.pop,
        G = E.push,
        H = E.push,
        I = E.slice,
        J = function J(a, b) {
      for (var c = 0, d = a.length; d > c; c++) {
        if (a[c] === b) return c;
      }return -1;
    },
        K = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
        L = "[\\x20\\t\\r\\n\\f]",
        M = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
        N = "\\[" + L + "*(" + M + ")(?:" + L + "*([*^$|!~]?=)" + L + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + M + "))|)" + L + "*\\]",
        O = ":(" + M + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + N + ")*)|.*)\\)|)",
        P = new RegExp(L + "+", "g"),
        Q = new RegExp("^" + L + "+|((?:^|[^\\\\])(?:\\\\.)*)" + L + "+$", "g"),
        R = new RegExp("^" + L + "*," + L + "*"),
        S = new RegExp("^" + L + "*([>+~]|" + L + ")" + L + "*"),
        T = new RegExp("=" + L + "*([^\\]'\"]*?)" + L + "*\\]", "g"),
        U = new RegExp(O),
        V = new RegExp("^" + M + "$"),
        W = { ID: new RegExp("^#(" + M + ")"), CLASS: new RegExp("^\\.(" + M + ")"), TAG: new RegExp("^(" + M + "|[*])"), ATTR: new RegExp("^" + N), PSEUDO: new RegExp("^" + O), CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + L + "*(even|odd|(([+-]|)(\\d*)n|)" + L + "*(?:([+-]|)" + L + "*(\\d+)|))" + L + "*\\)|)", "i"), bool: new RegExp("^(?:" + K + ")$", "i"), needsContext: new RegExp("^" + L + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + L + "*((?:-\\d)?\\d*)" + L + "*\\)|)(?=[^-]|$)", "i") },
        X = /^(?:input|select|textarea|button)$/i,
        Y = /^h\d$/i,
        Z = /^[^{]+\{\s*\[native \w/,
        $ = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        _ = /[+~]/,
        aa = /'|\\/g,
        ba = new RegExp("\\\\([\\da-f]{1,6}" + L + "?|(" + L + ")|.)", "ig"),
        ca = function ca(a, b, c) {
      var d = "0x" + b - 65536;return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320);
    },
        da = function da() {
      m();
    };try {
      H.apply(E = I.call(v.childNodes), v.childNodes), E[v.childNodes.length].nodeType;
    } catch (ea) {
      H = { apply: E.length ? function (a, b) {
          G.apply(a, I.call(b));
        } : function (a, b) {
          var c = a.length,
              d = 0;while (a[c++] = b[d++]) {}a.length = c - 1;
        } };
    }function fa(a, b, d, e) {
      var f,
          h,
          j,
          k,
          l,
          o,
          r,
          s,
          w = b && b.ownerDocument,
          x = b ? b.nodeType : 9;if (d = d || [], "string" != typeof a || !a || 1 !== x && 9 !== x && 11 !== x) return d;if (!e && ((b ? b.ownerDocument || b : v) !== n && m(b), b = b || n, p)) {
        if (11 !== x && (o = $.exec(a))) if (f = o[1]) {
          if (9 === x) {
            if (!(j = b.getElementById(f))) return d;if (j.id === f) return d.push(j), d;
          } else if (w && (j = w.getElementById(f)) && t(b, j) && j.id === f) return d.push(j), d;
        } else {
          if (o[2]) return H.apply(d, b.getElementsByTagName(a)), d;if ((f = o[3]) && c.getElementsByClassName && b.getElementsByClassName) return H.apply(d, b.getElementsByClassName(f)), d;
        }if (c.qsa && !A[a + " "] && (!q || !q.test(a))) {
          if (1 !== x) w = b, s = a;else if ("object" !== b.nodeName.toLowerCase()) {
            (k = b.getAttribute("id")) ? k = k.replace(aa, "\\$&") : b.setAttribute("id", k = u), r = g(a), h = r.length, l = V.test(k) ? "#" + k : "[id='" + k + "']";while (h--) {
              r[h] = l + " " + qa(r[h]);
            }s = r.join(","), w = _.test(a) && oa(b.parentNode) || b;
          }if (s) try {
            return H.apply(d, w.querySelectorAll(s)), d;
          } catch (y) {} finally {
            k === u && b.removeAttribute("id");
          }
        }
      }return i(a.replace(Q, "$1"), b, d, e);
    }function ga() {
      var a = [];function b(c, e) {
        return a.push(c + " ") > d.cacheLength && delete b[a.shift()], b[c + " "] = e;
      }return b;
    }function ha(a) {
      return a[u] = !0, a;
    }function ia(a) {
      var b = n.createElement("div");try {
        return !!a(b);
      } catch (c) {
        return !1;
      } finally {
        b.parentNode && b.parentNode.removeChild(b), b = null;
      }
    }function ja(a, b) {
      var c = a.split("|"),
          e = c.length;while (e--) {
        d.attrHandle[c[e]] = b;
      }
    }function ka(a, b) {
      var c = b && a,
          d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || C) - (~a.sourceIndex || C);if (d) return d;if (c) while (c = c.nextSibling) {
        if (c === b) return -1;
      }return a ? 1 : -1;
    }function la(a) {
      return function (b) {
        var c = b.nodeName.toLowerCase();return "input" === c && b.type === a;
      };
    }function ma(a) {
      return function (b) {
        var c = b.nodeName.toLowerCase();return ("input" === c || "button" === c) && b.type === a;
      };
    }function na(a) {
      return ha(function (b) {
        return b = +b, ha(function (c, d) {
          var e,
              f = a([], c.length, b),
              g = f.length;while (g--) {
            c[e = f[g]] && (c[e] = !(d[e] = c[e]));
          }
        });
      });
    }function oa(a) {
      return a && "undefined" != typeof a.getElementsByTagName && a;
    }c = fa.support = {}, f = fa.isXML = function (a) {
      var b = a && (a.ownerDocument || a).documentElement;return b ? "HTML" !== b.nodeName : !1;
    }, m = fa.setDocument = function (a) {
      var b,
          e,
          g = a ? a.ownerDocument || a : v;return g !== n && 9 === g.nodeType && g.documentElement ? (n = g, o = n.documentElement, p = !f(n), (e = n.defaultView) && e.top !== e && (e.addEventListener ? e.addEventListener("unload", da, !1) : e.attachEvent && e.attachEvent("onunload", da)), c.attributes = ia(function (a) {
        return a.className = "i", !a.getAttribute("className");
      }), c.getElementsByTagName = ia(function (a) {
        return a.appendChild(n.createComment("")), !a.getElementsByTagName("*").length;
      }), c.getElementsByClassName = Z.test(n.getElementsByClassName), c.getById = ia(function (a) {
        return o.appendChild(a).id = u, !n.getElementsByName || !n.getElementsByName(u).length;
      }), c.getById ? (d.find.ID = function (a, b) {
        if ("undefined" != typeof b.getElementById && p) {
          var c = b.getElementById(a);return c ? [c] : [];
        }
      }, d.filter.ID = function (a) {
        var b = a.replace(ba, ca);return function (a) {
          return a.getAttribute("id") === b;
        };
      }) : (delete d.find.ID, d.filter.ID = function (a) {
        var b = a.replace(ba, ca);return function (a) {
          var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id");return c && c.value === b;
        };
      }), d.find.TAG = c.getElementsByTagName ? function (a, b) {
        return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a) : c.qsa ? b.querySelectorAll(a) : void 0;
      } : function (a, b) {
        var c,
            d = [],
            e = 0,
            f = b.getElementsByTagName(a);if ("*" === a) {
          while (c = f[e++]) {
            1 === c.nodeType && d.push(c);
          }return d;
        }return f;
      }, d.find.CLASS = c.getElementsByClassName && function (a, b) {
        return "undefined" != typeof b.getElementsByClassName && p ? b.getElementsByClassName(a) : void 0;
      }, r = [], q = [], (c.qsa = Z.test(n.querySelectorAll)) && (ia(function (a) {
        o.appendChild(a).innerHTML = "<a id='" + u + "'></a><select id='" + u + "-\r\\' msallowcapture=''><option selected=''></option></select>", a.querySelectorAll("[msallowcapture^='']").length && q.push("[*^$]=" + L + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || q.push("\\[" + L + "*(?:value|" + K + ")"), a.querySelectorAll("[id~=" + u + "-]").length || q.push("~="), a.querySelectorAll(":checked").length || q.push(":checked"), a.querySelectorAll("a#" + u + "+*").length || q.push(".#.+[+~]");
      }), ia(function (a) {
        var b = n.createElement("input");b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && q.push("name" + L + "*[*^$|!~]?="), a.querySelectorAll(":enabled").length || q.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), q.push(",.*:");
      })), (c.matchesSelector = Z.test(s = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) && ia(function (a) {
        c.disconnectedMatch = s.call(a, "div"), s.call(a, "[s!='']:x"), r.push("!=", O);
      }), q = q.length && new RegExp(q.join("|")), r = r.length && new RegExp(r.join("|")), b = Z.test(o.compareDocumentPosition), t = b || Z.test(o.contains) ? function (a, b) {
        var c = 9 === a.nodeType ? a.documentElement : a,
            d = b && b.parentNode;return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)));
      } : function (a, b) {
        if (b) while (b = b.parentNode) {
          if (b === a) return !0;
        }return !1;
      }, B = b ? function (a, b) {
        if (a === b) return l = !0, 0;var d = !a.compareDocumentPosition - !b.compareDocumentPosition;return d ? d : (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & d || !c.sortDetached && b.compareDocumentPosition(a) === d ? a === n || a.ownerDocument === v && t(v, a) ? -1 : b === n || b.ownerDocument === v && t(v, b) ? 1 : k ? J(k, a) - J(k, b) : 0 : 4 & d ? -1 : 1);
      } : function (a, b) {
        if (a === b) return l = !0, 0;var c,
            d = 0,
            e = a.parentNode,
            f = b.parentNode,
            g = [a],
            h = [b];if (!e || !f) return a === n ? -1 : b === n ? 1 : e ? -1 : f ? 1 : k ? J(k, a) - J(k, b) : 0;if (e === f) return ka(a, b);c = a;while (c = c.parentNode) {
          g.unshift(c);
        }c = b;while (c = c.parentNode) {
          h.unshift(c);
        }while (g[d] === h[d]) {
          d++;
        }return d ? ka(g[d], h[d]) : g[d] === v ? -1 : h[d] === v ? 1 : 0;
      }, n) : n;
    }, fa.matches = function (a, b) {
      return fa(a, null, null, b);
    }, fa.matchesSelector = function (a, b) {
      if ((a.ownerDocument || a) !== n && m(a), b = b.replace(T, "='$1']"), c.matchesSelector && p && !A[b + " "] && (!r || !r.test(b)) && (!q || !q.test(b))) try {
        var d = s.call(a, b);if (d || c.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d;
      } catch (e) {}return fa(b, n, null, [a]).length > 0;
    }, fa.contains = function (a, b) {
      return (a.ownerDocument || a) !== n && m(a), t(a, b);
    }, fa.attr = function (a, b) {
      (a.ownerDocument || a) !== n && m(a);var e = d.attrHandle[b.toLowerCase()],
          f = e && D.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0;return void 0 !== f ? f : c.attributes || !p ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value : null;
    }, fa.error = function (a) {
      throw new Error("Syntax error, unrecognized expression: " + a);
    }, fa.uniqueSort = function (a) {
      var b,
          d = [],
          e = 0,
          f = 0;if (l = !c.detectDuplicates, k = !c.sortStable && a.slice(0), a.sort(B), l) {
        while (b = a[f++]) {
          b === a[f] && (e = d.push(f));
        }while (e--) {
          a.splice(d[e], 1);
        }
      }return k = null, a;
    }, e = fa.getText = function (a) {
      var b,
          c = "",
          d = 0,
          f = a.nodeType;if (f) {
        if (1 === f || 9 === f || 11 === f) {
          if ("string" == typeof a.textContent) return a.textContent;for (a = a.firstChild; a; a = a.nextSibling) {
            c += e(a);
          }
        } else if (3 === f || 4 === f) return a.nodeValue;
      } else while (b = a[d++]) {
        c += e(b);
      }return c;
    }, d = fa.selectors = { cacheLength: 50, createPseudo: ha, match: W, attrHandle: {}, find: {}, relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } }, preFilter: { ATTR: function ATTR(a) {
          return a[1] = a[1].replace(ba, ca), a[3] = (a[3] || a[4] || a[5] || "").replace(ba, ca), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4);
        }, CHILD: function CHILD(a) {
          return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || fa.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && fa.error(a[0]), a;
        }, PSEUDO: function PSEUDO(a) {
          var b,
              c = !a[6] && a[2];return W.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && U.test(c) && (b = g(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3));
        } }, filter: { TAG: function TAG(a) {
          var b = a.replace(ba, ca).toLowerCase();return "*" === a ? function () {
            return !0;
          } : function (a) {
            return a.nodeName && a.nodeName.toLowerCase() === b;
          };
        }, CLASS: function CLASS(a) {
          var b = y[a + " "];return b || (b = new RegExp("(^|" + L + ")" + a + "(" + L + "|$)")) && y(a, function (a) {
            return b.test("string" == typeof a.className && a.className || "undefined" != typeof a.getAttribute && a.getAttribute("class") || "");
          });
        }, ATTR: function ATTR(a, b, c) {
          return function (d) {
            var e = fa.attr(d, a);return null == e ? "!=" === b : b ? (e += "", "=" === b ? e === c : "!=" === b ? e !== c : "^=" === b ? c && 0 === e.indexOf(c) : "*=" === b ? c && e.indexOf(c) > -1 : "$=" === b ? c && e.slice(-c.length) === c : "~=" === b ? (" " + e.replace(P, " ") + " ").indexOf(c) > -1 : "|=" === b ? e === c || e.slice(0, c.length + 1) === c + "-" : !1) : !0;
          };
        }, CHILD: function CHILD(a, b, c, d, e) {
          var f = "nth" !== a.slice(0, 3),
              g = "last" !== a.slice(-4),
              h = "of-type" === b;return 1 === d && 0 === e ? function (a) {
            return !!a.parentNode;
          } : function (b, c, i) {
            var j,
                k,
                l,
                m,
                n,
                o,
                p = f !== g ? "nextSibling" : "previousSibling",
                q = b.parentNode,
                r = h && b.nodeName.toLowerCase(),
                s = !i && !h,
                t = !1;if (q) {
              if (f) {
                while (p) {
                  m = b;while (m = m[p]) {
                    if (h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) return !1;
                  }o = p = "only" === a && !o && "nextSibling";
                }return !0;
              }if (o = [g ? q.firstChild : q.lastChild], g && s) {
                m = q, l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], n = j[0] === w && j[1], t = n && j[2], m = n && q.childNodes[n];while (m = ++n && m && m[p] || (t = n = 0) || o.pop()) {
                  if (1 === m.nodeType && ++t && m === b) {
                    k[a] = [w, n, t];break;
                  }
                }
              } else if (s && (m = b, l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], n = j[0] === w && j[1], t = n), t === !1) while (m = ++n && m && m[p] || (t = n = 0) || o.pop()) {
                if ((h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) && ++t && (s && (l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), k[a] = [w, t]), m === b)) break;
              }return t -= e, t === d || t % d === 0 && t / d >= 0;
            }
          };
        }, PSEUDO: function PSEUDO(a, b) {
          var c,
              e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || fa.error("unsupported pseudo: " + a);return e[u] ? e(b) : e.length > 1 ? (c = [a, a, "", b], d.setFilters.hasOwnProperty(a.toLowerCase()) ? ha(function (a, c) {
            var d,
                f = e(a, b),
                g = f.length;while (g--) {
              d = J(a, f[g]), a[d] = !(c[d] = f[g]);
            }
          }) : function (a) {
            return e(a, 0, c);
          }) : e;
        } }, pseudos: { not: ha(function (a) {
          var b = [],
              c = [],
              d = h(a.replace(Q, "$1"));return d[u] ? ha(function (a, b, c, e) {
            var f,
                g = d(a, null, e, []),
                h = a.length;while (h--) {
              (f = g[h]) && (a[h] = !(b[h] = f));
            }
          }) : function (a, e, f) {
            return b[0] = a, d(b, null, f, c), b[0] = null, !c.pop();
          };
        }), has: ha(function (a) {
          return function (b) {
            return fa(a, b).length > 0;
          };
        }), contains: ha(function (a) {
          return a = a.replace(ba, ca), function (b) {
            return (b.textContent || b.innerText || e(b)).indexOf(a) > -1;
          };
        }), lang: ha(function (a) {
          return V.test(a || "") || fa.error("unsupported lang: " + a), a = a.replace(ba, ca).toLowerCase(), function (b) {
            var c;do {
              if (c = p ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-");
            } while ((b = b.parentNode) && 1 === b.nodeType);return !1;
          };
        }), target: function target(b) {
          var c = a.location && a.location.hash;return c && c.slice(1) === b.id;
        }, root: function root(a) {
          return a === o;
        }, focus: function focus(a) {
          return a === n.activeElement && (!n.hasFocus || n.hasFocus()) && !!(a.type || a.href || ~a.tabIndex);
        }, enabled: function enabled(a) {
          return a.disabled === !1;
        }, disabled: function disabled(a) {
          return a.disabled === !0;
        }, checked: function checked(a) {
          var b = a.nodeName.toLowerCase();return "input" === b && !!a.checked || "option" === b && !!a.selected;
        }, selected: function selected(a) {
          return a.parentNode && a.parentNode.selectedIndex, a.selected === !0;
        }, empty: function empty(a) {
          for (a = a.firstChild; a; a = a.nextSibling) {
            if (a.nodeType < 6) return !1;
          }return !0;
        }, parent: function parent(a) {
          return !d.pseudos.empty(a);
        }, header: function header(a) {
          return Y.test(a.nodeName);
        }, input: function input(a) {
          return X.test(a.nodeName);
        }, button: function button(a) {
          var b = a.nodeName.toLowerCase();return "input" === b && "button" === a.type || "button" === b;
        }, text: function text(a) {
          var b;return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase());
        }, first: na(function () {
          return [0];
        }), last: na(function (a, b) {
          return [b - 1];
        }), eq: na(function (a, b, c) {
          return [0 > c ? c + b : c];
        }), even: na(function (a, b) {
          for (var c = 0; b > c; c += 2) {
            a.push(c);
          }return a;
        }), odd: na(function (a, b) {
          for (var c = 1; b > c; c += 2) {
            a.push(c);
          }return a;
        }), lt: na(function (a, b, c) {
          for (var d = 0 > c ? c + b : c; --d >= 0;) {
            a.push(d);
          }return a;
        }), gt: na(function (a, b, c) {
          for (var d = 0 > c ? c + b : c; ++d < b;) {
            a.push(d);
          }return a;
        }) } }, d.pseudos.nth = d.pseudos.eq;for (b in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }) {
      d.pseudos[b] = la(b);
    }for (b in { submit: !0, reset: !0 }) {
      d.pseudos[b] = ma(b);
    }function pa() {}pa.prototype = d.filters = d.pseudos, d.setFilters = new pa(), g = fa.tokenize = function (a, b) {
      var c,
          e,
          f,
          g,
          h,
          i,
          j,
          k = z[a + " "];if (k) return b ? 0 : k.slice(0);h = a, i = [], j = d.preFilter;while (h) {
        (!c || (e = R.exec(h))) && (e && (h = h.slice(e[0].length) || h), i.push(f = [])), c = !1, (e = S.exec(h)) && (c = e.shift(), f.push({ value: c, type: e[0].replace(Q, " ") }), h = h.slice(c.length));for (g in d.filter) {
          !(e = W[g].exec(h)) || j[g] && !(e = j[g](e)) || (c = e.shift(), f.push({ value: c, type: g, matches: e }), h = h.slice(c.length));
        }if (!c) break;
      }return b ? h.length : h ? fa.error(a) : z(a, i).slice(0);
    };function qa(a) {
      for (var b = 0, c = a.length, d = ""; c > b; b++) {
        d += a[b].value;
      }return d;
    }function ra(a, b, c) {
      var d = b.dir,
          e = c && "parentNode" === d,
          f = x++;return b.first ? function (b, c, f) {
        while (b = b[d]) {
          if (1 === b.nodeType || e) return a(b, c, f);
        }
      } : function (b, c, g) {
        var h,
            i,
            j,
            k = [w, f];if (g) {
          while (b = b[d]) {
            if ((1 === b.nodeType || e) && a(b, c, g)) return !0;
          }
        } else while (b = b[d]) {
          if (1 === b.nodeType || e) {
            if (j = b[u] || (b[u] = {}), i = j[b.uniqueID] || (j[b.uniqueID] = {}), (h = i[d]) && h[0] === w && h[1] === f) return k[2] = h[2];if (i[d] = k, k[2] = a(b, c, g)) return !0;
          }
        }
      };
    }function sa(a) {
      return a.length > 1 ? function (b, c, d) {
        var e = a.length;while (e--) {
          if (!a[e](b, c, d)) return !1;
        }return !0;
      } : a[0];
    }function ta(a, b, c) {
      for (var d = 0, e = b.length; e > d; d++) {
        fa(a, b[d], c);
      }return c;
    }function ua(a, b, c, d, e) {
      for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++) {
        (f = a[h]) && (!c || c(f, d, e)) && (g.push(f), j && b.push(h));
      }return g;
    }function va(a, b, c, d, e, f) {
      return d && !d[u] && (d = va(d)), e && !e[u] && (e = va(e, f)), ha(function (f, g, h, i) {
        var j,
            k,
            l,
            m = [],
            n = [],
            o = g.length,
            p = f || ta(b || "*", h.nodeType ? [h] : h, []),
            q = !a || !f && b ? p : ua(p, m, a, h, i),
            r = c ? e || (f ? a : o || d) ? [] : g : q;if (c && c(q, r, h, i), d) {
          j = ua(r, n), d(j, [], h, i), k = j.length;while (k--) {
            (l = j[k]) && (r[n[k]] = !(q[n[k]] = l));
          }
        }if (f) {
          if (e || a) {
            if (e) {
              j = [], k = r.length;while (k--) {
                (l = r[k]) && j.push(q[k] = l);
              }e(null, r = [], j, i);
            }k = r.length;while (k--) {
              (l = r[k]) && (j = e ? J(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l));
            }
          }
        } else r = ua(r === g ? r.splice(o, r.length) : r), e ? e(null, g, r, i) : H.apply(g, r);
      });
    }function wa(a) {
      for (var b, c, e, f = a.length, g = d.relative[a[0].type], h = g || d.relative[" "], i = g ? 1 : 0, k = ra(function (a) {
        return a === b;
      }, h, !0), l = ra(function (a) {
        return J(b, a) > -1;
      }, h, !0), m = [function (a, c, d) {
        var e = !g && (d || c !== j) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d));return b = null, e;
      }]; f > i; i++) {
        if (c = d.relative[a[i].type]) m = [ra(sa(m), c)];else {
          if (c = d.filter[a[i].type].apply(null, a[i].matches), c[u]) {
            for (e = ++i; f > e; e++) {
              if (d.relative[a[e].type]) break;
            }return va(i > 1 && sa(m), i > 1 && qa(a.slice(0, i - 1).concat({ value: " " === a[i - 2].type ? "*" : "" })).replace(Q, "$1"), c, e > i && wa(a.slice(i, e)), f > e && wa(a = a.slice(e)), f > e && qa(a));
          }m.push(c);
        }
      }return sa(m);
    }function xa(a, b) {
      var c = b.length > 0,
          e = a.length > 0,
          f = function f(_f, g, h, i, k) {
        var l,
            o,
            q,
            r = 0,
            s = "0",
            t = _f && [],
            u = [],
            v = j,
            x = _f || e && d.find.TAG("*", k),
            y = w += null == v ? 1 : Math.random() || .1,
            z = x.length;for (k && (j = g === n || g || k); s !== z && null != (l = x[s]); s++) {
          if (e && l) {
            o = 0, g || l.ownerDocument === n || (m(l), h = !p);while (q = a[o++]) {
              if (q(l, g || n, h)) {
                i.push(l);break;
              }
            }k && (w = y);
          }c && ((l = !q && l) && r--, _f && t.push(l));
        }if (r += s, c && s !== r) {
          o = 0;while (q = b[o++]) {
            q(t, u, g, h);
          }if (_f) {
            if (r > 0) while (s--) {
              t[s] || u[s] || (u[s] = F.call(i));
            }u = ua(u);
          }H.apply(i, u), k && !_f && u.length > 0 && r + b.length > 1 && fa.uniqueSort(i);
        }return k && (w = y, j = v), t;
      };return c ? ha(f) : f;
    }return h = fa.compile = function (a, b) {
      var c,
          d = [],
          e = [],
          f = A[a + " "];if (!f) {
        b || (b = g(a)), c = b.length;while (c--) {
          f = wa(b[c]), f[u] ? d.push(f) : e.push(f);
        }f = A(a, xa(e, d)), f.selector = a;
      }return f;
    }, i = fa.select = function (a, b, e, f) {
      var i,
          j,
          k,
          l,
          m,
          n = "function" == typeof a && a,
          o = !f && g(a = n.selector || a);if (e = e || [], 1 === o.length) {
        if (j = o[0] = o[0].slice(0), j.length > 2 && "ID" === (k = j[0]).type && c.getById && 9 === b.nodeType && p && d.relative[j[1].type]) {
          if (b = (d.find.ID(k.matches[0].replace(ba, ca), b) || [])[0], !b) return e;n && (b = b.parentNode), a = a.slice(j.shift().value.length);
        }i = W.needsContext.test(a) ? 0 : j.length;while (i--) {
          if (k = j[i], d.relative[l = k.type]) break;if ((m = d.find[l]) && (f = m(k.matches[0].replace(ba, ca), _.test(j[0].type) && oa(b.parentNode) || b))) {
            if (j.splice(i, 1), a = f.length && qa(j), !a) return H.apply(e, f), e;break;
          }
        }
      }return (n || h(a, o))(f, b, !p, e, !b || _.test(a) && oa(b.parentNode) || b), e;
    }, c.sortStable = u.split("").sort(B).join("") === u, c.detectDuplicates = !!l, m(), c.sortDetached = ia(function (a) {
      return 1 & a.compareDocumentPosition(n.createElement("div"));
    }), ia(function (a) {
      return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href");
    }) || ja("type|href|height|width", function (a, b, c) {
      return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2);
    }), c.attributes && ia(function (a) {
      return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value");
    }) || ja("value", function (a, b, c) {
      return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue;
    }), ia(function (a) {
      return null == a.getAttribute("disabled");
    }) || ja(K, function (a, b, c) {
      var d;return c ? void 0 : a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null;
    }), fa;
  }(a);n.find = t, n.expr = t.selectors, n.expr[":"] = n.expr.pseudos, n.uniqueSort = n.unique = t.uniqueSort, n.text = t.getText, n.isXMLDoc = t.isXML, n.contains = t.contains;var u = function u(a, b, c) {
    var d = [],
        e = void 0 !== c;while ((a = a[b]) && 9 !== a.nodeType) {
      if (1 === a.nodeType) {
        if (e && n(a).is(c)) break;d.push(a);
      }
    }return d;
  },
      v = function v(a, b) {
    for (var c = []; a; a = a.nextSibling) {
      1 === a.nodeType && a !== b && c.push(a);
    }return c;
  },
      w = n.expr.match.needsContext,
      x = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
      y = /^.[^:#\[\.,]*$/;function z(a, b, c) {
    if (n.isFunction(b)) return n.grep(a, function (a, d) {
      return !!b.call(a, d, a) !== c;
    });if (b.nodeType) return n.grep(a, function (a) {
      return a === b !== c;
    });if ("string" == typeof b) {
      if (y.test(b)) return n.filter(b, a, c);b = n.filter(b, a);
    }return n.grep(a, function (a) {
      return h.call(b, a) > -1 !== c;
    });
  }n.filter = function (a, b, c) {
    var d = b[0];return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? n.find.matchesSelector(d, a) ? [d] : [] : n.find.matches(a, n.grep(b, function (a) {
      return 1 === a.nodeType;
    }));
  }, n.fn.extend({ find: function find(a) {
      var b,
          c = this.length,
          d = [],
          e = this;if ("string" != typeof a) return this.pushStack(n(a).filter(function () {
        for (b = 0; c > b; b++) {
          if (n.contains(e[b], this)) return !0;
        }
      }));for (b = 0; c > b; b++) {
        n.find(a, e[b], d);
      }return d = this.pushStack(c > 1 ? n.unique(d) : d), d.selector = this.selector ? this.selector + " " + a : a, d;
    }, filter: function filter(a) {
      return this.pushStack(z(this, a || [], !1));
    }, not: function not(a) {
      return this.pushStack(z(this, a || [], !0));
    }, is: function is(a) {
      return !!z(this, "string" == typeof a && w.test(a) ? n(a) : a || [], !1).length;
    } });var A,
      B = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
      C = n.fn.init = function (a, b, c) {
    var e, f;if (!a) return this;if (c = c || A, "string" == typeof a) {
      if (e = "<" === a[0] && ">" === a[a.length - 1] && a.length >= 3 ? [null, a, null] : B.exec(a), !e || !e[1] && b) return !b || b.jquery ? (b || c).find(a) : this.constructor(b).find(a);if (e[1]) {
        if (b = b instanceof n ? b[0] : b, n.merge(this, n.parseHTML(e[1], b && b.nodeType ? b.ownerDocument || b : d, !0)), x.test(e[1]) && n.isPlainObject(b)) for (e in b) {
          n.isFunction(this[e]) ? this[e](b[e]) : this.attr(e, b[e]);
        }return this;
      }return f = d.getElementById(e[2]), f && f.parentNode && (this.length = 1, this[0] = f), this.context = d, this.selector = a, this;
    }return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : n.isFunction(a) ? void 0 !== c.ready ? c.ready(a) : a(n) : (void 0 !== a.selector && (this.selector = a.selector, this.context = a.context), n.makeArray(a, this));
  };C.prototype = n.fn, A = n(d);var D = /^(?:parents|prev(?:Until|All))/,
      E = { children: !0, contents: !0, next: !0, prev: !0 };n.fn.extend({ has: function has(a) {
      var b = n(a, this),
          c = b.length;return this.filter(function () {
        for (var a = 0; c > a; a++) {
          if (n.contains(this, b[a])) return !0;
        }
      });
    }, closest: function closest(a, b) {
      for (var c, d = 0, e = this.length, f = [], g = w.test(a) || "string" != typeof a ? n(a, b || this.context) : 0; e > d; d++) {
        for (c = this[d]; c && c !== b; c = c.parentNode) {
          if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && n.find.matchesSelector(c, a))) {
            f.push(c);break;
          }
        }
      }return this.pushStack(f.length > 1 ? n.uniqueSort(f) : f);
    }, index: function index(a) {
      return a ? "string" == typeof a ? h.call(n(a), this[0]) : h.call(this, a.jquery ? a[0] : a) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
    }, add: function add(a, b) {
      return this.pushStack(n.uniqueSort(n.merge(this.get(), n(a, b))));
    }, addBack: function addBack(a) {
      return this.add(null == a ? this.prevObject : this.prevObject.filter(a));
    } });function F(a, b) {
    while ((a = a[b]) && 1 !== a.nodeType) {}return a;
  }n.each({ parent: function parent(a) {
      var b = a.parentNode;return b && 11 !== b.nodeType ? b : null;
    }, parents: function parents(a) {
      return u(a, "parentNode");
    }, parentsUntil: function parentsUntil(a, b, c) {
      return u(a, "parentNode", c);
    }, next: function next(a) {
      return F(a, "nextSibling");
    }, prev: function prev(a) {
      return F(a, "previousSibling");
    }, nextAll: function nextAll(a) {
      return u(a, "nextSibling");
    }, prevAll: function prevAll(a) {
      return u(a, "previousSibling");
    }, nextUntil: function nextUntil(a, b, c) {
      return u(a, "nextSibling", c);
    }, prevUntil: function prevUntil(a, b, c) {
      return u(a, "previousSibling", c);
    }, siblings: function siblings(a) {
      return v((a.parentNode || {}).firstChild, a);
    }, children: function children(a) {
      return v(a.firstChild);
    }, contents: function contents(a) {
      return a.contentDocument || n.merge([], a.childNodes);
    } }, function (a, b) {
    n.fn[a] = function (c, d) {
      var e = n.map(this, b, c);return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = n.filter(d, e)), this.length > 1 && (E[a] || n.uniqueSort(e), D.test(a) && e.reverse()), this.pushStack(e);
    };
  });var G = /\S+/g;function H(a) {
    var b = {};return n.each(a.match(G) || [], function (a, c) {
      b[c] = !0;
    }), b;
  }n.Callbacks = function (a) {
    a = "string" == typeof a ? H(a) : n.extend({}, a);var b,
        c,
        d,
        e,
        f = [],
        g = [],
        h = -1,
        i = function i() {
      for (e = a.once, d = b = !0; g.length; h = -1) {
        c = g.shift();while (++h < f.length) {
          f[h].apply(c[0], c[1]) === !1 && a.stopOnFalse && (h = f.length, c = !1);
        }
      }a.memory || (c = !1), b = !1, e && (f = c ? [] : "");
    },
        j = { add: function add() {
        return f && (c && !b && (h = f.length - 1, g.push(c)), function d(b) {
          n.each(b, function (b, c) {
            n.isFunction(c) ? a.unique && j.has(c) || f.push(c) : c && c.length && "string" !== n.type(c) && d(c);
          });
        }(arguments), c && !b && i()), this;
      }, remove: function remove() {
        return n.each(arguments, function (a, b) {
          var c;while ((c = n.inArray(b, f, c)) > -1) {
            f.splice(c, 1), h >= c && h--;
          }
        }), this;
      }, has: function has(a) {
        return a ? n.inArray(a, f) > -1 : f.length > 0;
      }, empty: function empty() {
        return f && (f = []), this;
      }, disable: function disable() {
        return e = g = [], f = c = "", this;
      }, disabled: function disabled() {
        return !f;
      }, lock: function lock() {
        return e = g = [], c || (f = c = ""), this;
      }, locked: function locked() {
        return !!e;
      }, fireWith: function fireWith(a, c) {
        return e || (c = c || [], c = [a, c.slice ? c.slice() : c], g.push(c), b || i()), this;
      }, fire: function fire() {
        return j.fireWith(this, arguments), this;
      }, fired: function fired() {
        return !!d;
      } };return j;
  }, n.extend({ Deferred: function Deferred(a) {
      var b = [["resolve", "done", n.Callbacks("once memory"), "resolved"], ["reject", "fail", n.Callbacks("once memory"), "rejected"], ["notify", "progress", n.Callbacks("memory")]],
          c = "pending",
          d = { state: function state() {
          return c;
        }, always: function always() {
          return e.done(arguments).fail(arguments), this;
        }, then: function then() {
          var a = arguments;return n.Deferred(function (c) {
            n.each(b, function (b, f) {
              var g = n.isFunction(a[b]) && a[b];e[f[1]](function () {
                var a = g && g.apply(this, arguments);a && n.isFunction(a.promise) ? a.promise().progress(c.notify).done(c.resolve).fail(c.reject) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [a] : arguments);
              });
            }), a = null;
          }).promise();
        }, promise: function promise(a) {
          return null != a ? n.extend(a, d) : d;
        } },
          e = {};return d.pipe = d.then, n.each(b, function (a, f) {
        var g = f[2],
            h = f[3];d[f[1]] = g.add, h && g.add(function () {
          c = h;
        }, b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = function () {
          return e[f[0] + "With"](this === e ? d : this, arguments), this;
        }, e[f[0] + "With"] = g.fireWith;
      }), d.promise(e), a && a.call(e, e), e;
    }, when: function when(a) {
      var b = 0,
          c = e.call(arguments),
          d = c.length,
          f = 1 !== d || a && n.isFunction(a.promise) ? d : 0,
          g = 1 === f ? a : n.Deferred(),
          h = function h(a, b, c) {
        return function (d) {
          b[a] = this, c[a] = arguments.length > 1 ? e.call(arguments) : d, c === i ? g.notifyWith(b, c) : --f || g.resolveWith(b, c);
        };
      },
          i,
          j,
          k;if (d > 1) for (i = new Array(d), j = new Array(d), k = new Array(d); d > b; b++) {
        c[b] && n.isFunction(c[b].promise) ? c[b].promise().progress(h(b, j, i)).done(h(b, k, c)).fail(g.reject) : --f;
      }return f || g.resolveWith(k, c), g.promise();
    } });var I;n.fn.ready = function (a) {
    return n.ready.promise().done(a), this;
  }, n.extend({ isReady: !1, readyWait: 1, holdReady: function holdReady(a) {
      a ? n.readyWait++ : n.ready(!0);
    }, ready: function ready(a) {
      (a === !0 ? --n.readyWait : n.isReady) || (n.isReady = !0, a !== !0 && --n.readyWait > 0 || (I.resolveWith(d, [n]), n.fn.triggerHandler && (n(d).triggerHandler("ready"), n(d).off("ready"))));
    } });function J() {
    d.removeEventListener("DOMContentLoaded", J), a.removeEventListener("load", J), n.ready();
  }n.ready.promise = function (b) {
    return I || (I = n.Deferred(), "complete" === d.readyState || "loading" !== d.readyState && !d.documentElement.doScroll ? a.setTimeout(n.ready) : (d.addEventListener("DOMContentLoaded", J), a.addEventListener("load", J))), I.promise(b);
  }, n.ready.promise();var K = function K(a, b, c, d, e, f, g) {
    var h = 0,
        i = a.length,
        j = null == c;if ("object" === n.type(c)) {
      e = !0;for (h in c) {
        K(a, b, h, c[h], !0, f, g);
      }
    } else if (void 0 !== d && (e = !0, n.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function b(a, _b, c) {
      return j.call(n(a), c);
    })), b)) for (; i > h; h++) {
      b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
    }return e ? a : j ? b.call(a) : i ? b(a[0], c) : f;
  },
      L = function L(a) {
    return 1 === a.nodeType || 9 === a.nodeType || !+a.nodeType;
  };function M() {
    this.expando = n.expando + M.uid++;
  }M.uid = 1, M.prototype = { register: function register(a, b) {
      var c = b || {};return a.nodeType ? a[this.expando] = c : Object.defineProperty(a, this.expando, { value: c, writable: !0, configurable: !0 }), a[this.expando];
    }, cache: function cache(a) {
      if (!L(a)) return {};var b = a[this.expando];return b || (b = {}, L(a) && (a.nodeType ? a[this.expando] = b : Object.defineProperty(a, this.expando, { value: b, configurable: !0 }))), b;
    }, set: function set(a, b, c) {
      var d,
          e = this.cache(a);if ("string" == typeof b) e[b] = c;else for (d in b) {
        e[d] = b[d];
      }return e;
    }, get: function get(a, b) {
      return void 0 === b ? this.cache(a) : a[this.expando] && a[this.expando][b];
    }, access: function access(a, b, c) {
      var d;return void 0 === b || b && "string" == typeof b && void 0 === c ? (d = this.get(a, b), void 0 !== d ? d : this.get(a, n.camelCase(b))) : (this.set(a, b, c), void 0 !== c ? c : b);
    }, remove: function remove(a, b) {
      var c,
          d,
          e,
          f = a[this.expando];if (void 0 !== f) {
        if (void 0 === b) this.register(a);else {
          n.isArray(b) ? d = b.concat(b.map(n.camelCase)) : (e = n.camelCase(b), b in f ? d = [b, e] : (d = e, d = d in f ? [d] : d.match(G) || [])), c = d.length;while (c--) {
            delete f[d[c]];
          }
        }(void 0 === b || n.isEmptyObject(f)) && (a.nodeType ? a[this.expando] = void 0 : delete a[this.expando]);
      }
    }, hasData: function hasData(a) {
      var b = a[this.expando];return void 0 !== b && !n.isEmptyObject(b);
    } };var N = new M(),
      O = new M(),
      P = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
      Q = /[A-Z]/g;function R(a, b, c) {
    var d;if (void 0 === c && 1 === a.nodeType) if (d = "data-" + b.replace(Q, "-$&").toLowerCase(), c = a.getAttribute(d), "string" == typeof c) {
      try {
        c = "true" === c ? !0 : "false" === c ? !1 : "null" === c ? null : +c + "" === c ? +c : P.test(c) ? n.parseJSON(c) : c;
      } catch (e) {}O.set(a, b, c);
    } else c = void 0;return c;
  }n.extend({ hasData: function hasData(a) {
      return O.hasData(a) || N.hasData(a);
    }, data: function data(a, b, c) {
      return O.access(a, b, c);
    }, removeData: function removeData(a, b) {
      O.remove(a, b);
    }, _data: function _data(a, b, c) {
      return N.access(a, b, c);
    }, _removeData: function _removeData(a, b) {
      N.remove(a, b);
    } }), n.fn.extend({ data: function data(a, b) {
      var c,
          d,
          e,
          f = this[0],
          g = f && f.attributes;if (void 0 === a) {
        if (this.length && (e = O.get(f), 1 === f.nodeType && !N.get(f, "hasDataAttrs"))) {
          c = g.length;while (c--) {
            g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = n.camelCase(d.slice(5)), R(f, d, e[d])));
          }N.set(f, "hasDataAttrs", !0);
        }return e;
      }return "object" == (typeof a === "undefined" ? "undefined" : _typeof(a)) ? this.each(function () {
        O.set(this, a);
      }) : K(this, function (b) {
        var c, d;if (f && void 0 === b) {
          if (c = O.get(f, a) || O.get(f, a.replace(Q, "-$&").toLowerCase()), void 0 !== c) return c;if (d = n.camelCase(a), c = O.get(f, d), void 0 !== c) return c;if (c = R(f, d, void 0), void 0 !== c) return c;
        } else d = n.camelCase(a), this.each(function () {
          var c = O.get(this, d);O.set(this, d, b), a.indexOf("-") > -1 && void 0 !== c && O.set(this, a, b);
        });
      }, null, b, arguments.length > 1, null, !0);
    }, removeData: function removeData(a) {
      return this.each(function () {
        O.remove(this, a);
      });
    } }), n.extend({ queue: function queue(a, b, c) {
      var d;return a ? (b = (b || "fx") + "queue", d = N.get(a, b), c && (!d || n.isArray(c) ? d = N.access(a, b, n.makeArray(c)) : d.push(c)), d || []) : void 0;
    }, dequeue: function dequeue(a, b) {
      b = b || "fx";var c = n.queue(a, b),
          d = c.length,
          e = c.shift(),
          f = n._queueHooks(a, b),
          g = function g() {
        n.dequeue(a, b);
      };"inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire();
    }, _queueHooks: function _queueHooks(a, b) {
      var c = b + "queueHooks";return N.get(a, c) || N.access(a, c, { empty: n.Callbacks("once memory").add(function () {
          N.remove(a, [b + "queue", c]);
        }) });
    } }), n.fn.extend({ queue: function queue(a, b) {
      var c = 2;return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? n.queue(this[0], a) : void 0 === b ? this : this.each(function () {
        var c = n.queue(this, a, b);n._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && n.dequeue(this, a);
      });
    }, dequeue: function dequeue(a) {
      return this.each(function () {
        n.dequeue(this, a);
      });
    }, clearQueue: function clearQueue(a) {
      return this.queue(a || "fx", []);
    }, promise: function promise(a, b) {
      var c,
          d = 1,
          e = n.Deferred(),
          f = this,
          g = this.length,
          h = function h() {
        --d || e.resolveWith(f, [f]);
      };"string" != typeof a && (b = a, a = void 0), a = a || "fx";while (g--) {
        c = N.get(f[g], a + "queueHooks"), c && c.empty && (d++, c.empty.add(h));
      }return h(), e.promise(b);
    } });var S = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
      T = new RegExp("^(?:([+-])=|)(" + S + ")([a-z%]*)$", "i"),
      U = ["Top", "Right", "Bottom", "Left"],
      V = function V(a, b) {
    return a = b || a, "none" === n.css(a, "display") || !n.contains(a.ownerDocument, a);
  };function W(a, b, c, d) {
    var e,
        f = 1,
        g = 20,
        h = d ? function () {
      return d.cur();
    } : function () {
      return n.css(a, b, "");
    },
        i = h(),
        j = c && c[3] || (n.cssNumber[b] ? "" : "px"),
        k = (n.cssNumber[b] || "px" !== j && +i) && T.exec(n.css(a, b));if (k && k[3] !== j) {
      j = j || k[3], c = c || [], k = +i || 1;do {
        f = f || ".5", k /= f, n.style(a, b, k + j);
      } while (f !== (f = h() / i) && 1 !== f && --g);
    }return c && (k = +k || +i || 0, e = c[1] ? k + (c[1] + 1) * c[2] : +c[2], d && (d.unit = j, d.start = k, d.end = e)), e;
  }var X = /^(?:checkbox|radio)$/i,
      Y = /<([\w:-]+)/,
      Z = /^$|\/(?:java|ecma)script/i,
      $ = { option: [1, "<select multiple='multiple'>", "</select>"], thead: [1, "<table>", "</table>"], col: [2, "<table><colgroup>", "</colgroup></table>"], tr: [2, "<table><tbody>", "</tbody></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: [0, "", ""] };$.optgroup = $.option, $.tbody = $.tfoot = $.colgroup = $.caption = $.thead, $.th = $.td;function _(a, b) {
    var c = "undefined" != typeof a.getElementsByTagName ? a.getElementsByTagName(b || "*") : "undefined" != typeof a.querySelectorAll ? a.querySelectorAll(b || "*") : [];return void 0 === b || b && n.nodeName(a, b) ? n.merge([a], c) : c;
  }function aa(a, b) {
    for (var c = 0, d = a.length; d > c; c++) {
      N.set(a[c], "globalEval", !b || N.get(b[c], "globalEval"));
    }
  }var ba = /<|&#?\w+;/;function ca(a, b, c, d, e) {
    for (var f, g, h, i, j, k, l = b.createDocumentFragment(), m = [], o = 0, p = a.length; p > o; o++) {
      if (f = a[o], f || 0 === f) if ("object" === n.type(f)) n.merge(m, f.nodeType ? [f] : f);else if (ba.test(f)) {
        g = g || l.appendChild(b.createElement("div")), h = (Y.exec(f) || ["", ""])[1].toLowerCase(), i = $[h] || $._default, g.innerHTML = i[1] + n.htmlPrefilter(f) + i[2], k = i[0];while (k--) {
          g = g.lastChild;
        }n.merge(m, g.childNodes), g = l.firstChild, g.textContent = "";
      } else m.push(b.createTextNode(f));
    }l.textContent = "", o = 0;while (f = m[o++]) {
      if (d && n.inArray(f, d) > -1) e && e.push(f);else if (j = n.contains(f.ownerDocument, f), g = _(l.appendChild(f), "script"), j && aa(g), c) {
        k = 0;while (f = g[k++]) {
          Z.test(f.type || "") && c.push(f);
        }
      }
    }return l;
  }!function () {
    var a = d.createDocumentFragment(),
        b = a.appendChild(d.createElement("div")),
        c = d.createElement("input");c.setAttribute("type", "radio"), c.setAttribute("checked", "checked"), c.setAttribute("name", "t"), b.appendChild(c), l.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, b.innerHTML = "<textarea>x</textarea>", l.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue;
  }();var da = /^key/,
      ea = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
      fa = /^([^.]*)(?:\.(.+)|)/;function ga() {
    return !0;
  }function ha() {
    return !1;
  }function ia() {
    try {
      return d.activeElement;
    } catch (a) {}
  }function ja(a, b, c, d, e, f) {
    var g, h;if ("object" == (typeof b === "undefined" ? "undefined" : _typeof(b))) {
      "string" != typeof c && (d = d || c, c = void 0);for (h in b) {
        ja(a, h, c, d, b[h], f);
      }return a;
    }if (null == d && null == e ? (e = c, d = c = void 0) : null == e && ("string" == typeof c ? (e = d, d = void 0) : (e = d, d = c, c = void 0)), e === !1) e = ha;else if (!e) return this;return 1 === f && (g = e, e = function e(a) {
      return n().off(a), g.apply(this, arguments);
    }, e.guid = g.guid || (g.guid = n.guid++)), a.each(function () {
      n.event.add(this, b, e, d, c);
    });
  }n.event = { global: {}, add: function add(a, b, c, d, e) {
      var f,
          g,
          h,
          i,
          j,
          k,
          l,
          m,
          o,
          p,
          q,
          r = N.get(a);if (r) {
        c.handler && (f = c, c = f.handler, e = f.selector), c.guid || (c.guid = n.guid++), (i = r.events) || (i = r.events = {}), (g = r.handle) || (g = r.handle = function (b) {
          return "undefined" != typeof n && n.event.triggered !== b.type ? n.event.dispatch.apply(a, arguments) : void 0;
        }), b = (b || "").match(G) || [""], j = b.length;while (j--) {
          h = fa.exec(b[j]) || [], o = q = h[1], p = (h[2] || "").split(".").sort(), o && (l = n.event.special[o] || {}, o = (e ? l.delegateType : l.bindType) || o, l = n.event.special[o] || {}, k = n.extend({ type: o, origType: q, data: d, handler: c, guid: c.guid, selector: e, needsContext: e && n.expr.match.needsContext.test(e), namespace: p.join(".") }, f), (m = i[o]) || (m = i[o] = [], m.delegateCount = 0, l.setup && l.setup.call(a, d, p, g) !== !1 || a.addEventListener && a.addEventListener(o, g)), l.add && (l.add.call(a, k), k.handler.guid || (k.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, k) : m.push(k), n.event.global[o] = !0);
        }
      }
    }, remove: function remove(a, b, c, d, e) {
      var f,
          g,
          h,
          i,
          j,
          k,
          l,
          m,
          o,
          p,
          q,
          r = N.hasData(a) && N.get(a);if (r && (i = r.events)) {
        b = (b || "").match(G) || [""], j = b.length;while (j--) {
          if (h = fa.exec(b[j]) || [], o = q = h[1], p = (h[2] || "").split(".").sort(), o) {
            l = n.event.special[o] || {}, o = (d ? l.delegateType : l.bindType) || o, m = i[o] || [], h = h[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), g = f = m.length;while (f--) {
              k = m[f], !e && q !== k.origType || c && c.guid !== k.guid || h && !h.test(k.namespace) || d && d !== k.selector && ("**" !== d || !k.selector) || (m.splice(f, 1), k.selector && m.delegateCount--, l.remove && l.remove.call(a, k));
            }g && !m.length && (l.teardown && l.teardown.call(a, p, r.handle) !== !1 || n.removeEvent(a, o, r.handle), delete i[o]);
          } else for (o in i) {
            n.event.remove(a, o + b[j], c, d, !0);
          }
        }n.isEmptyObject(i) && N.remove(a, "handle events");
      }
    }, dispatch: function dispatch(a) {
      a = n.event.fix(a);var b,
          c,
          d,
          f,
          g,
          h = [],
          i = e.call(arguments),
          j = (N.get(this, "events") || {})[a.type] || [],
          k = n.event.special[a.type] || {};if (i[0] = a, a.delegateTarget = this, !k.preDispatch || k.preDispatch.call(this, a) !== !1) {
        h = n.event.handlers.call(this, a, j), b = 0;while ((f = h[b++]) && !a.isPropagationStopped()) {
          a.currentTarget = f.elem, c = 0;while ((g = f.handlers[c++]) && !a.isImmediatePropagationStopped()) {
            (!a.rnamespace || a.rnamespace.test(g.namespace)) && (a.handleObj = g, a.data = g.data, d = ((n.event.special[g.origType] || {}).handle || g.handler).apply(f.elem, i), void 0 !== d && (a.result = d) === !1 && (a.preventDefault(), a.stopPropagation()));
          }
        }return k.postDispatch && k.postDispatch.call(this, a), a.result;
      }
    }, handlers: function handlers(a, b) {
      var c,
          d,
          e,
          f,
          g = [],
          h = b.delegateCount,
          i = a.target;if (h && i.nodeType && ("click" !== a.type || isNaN(a.button) || a.button < 1)) for (; i !== this; i = i.parentNode || this) {
        if (1 === i.nodeType && (i.disabled !== !0 || "click" !== a.type)) {
          for (d = [], c = 0; h > c; c++) {
            f = b[c], e = f.selector + " ", void 0 === d[e] && (d[e] = f.needsContext ? n(e, this).index(i) > -1 : n.find(e, this, null, [i]).length), d[e] && d.push(f);
          }d.length && g.push({ elem: i, handlers: d });
        }
      }return h < b.length && g.push({ elem: this, handlers: b.slice(h) }), g;
    }, props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "), fixHooks: {}, keyHooks: { props: "char charCode key keyCode".split(" "), filter: function filter(a, b) {
        return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a;
      } }, mouseHooks: { props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "), filter: function filter(a, b) {
        var c,
            e,
            f,
            g = b.button;return null == a.pageX && null != b.clientX && (c = a.target.ownerDocument || d, e = c.documentElement, f = c.body, a.pageX = b.clientX + (e && e.scrollLeft || f && f.scrollLeft || 0) - (e && e.clientLeft || f && f.clientLeft || 0), a.pageY = b.clientY + (e && e.scrollTop || f && f.scrollTop || 0) - (e && e.clientTop || f && f.clientTop || 0)), a.which || void 0 === g || (a.which = 1 & g ? 1 : 2 & g ? 3 : 4 & g ? 2 : 0), a;
      } }, fix: function fix(a) {
      if (a[n.expando]) return a;var b,
          c,
          e,
          f = a.type,
          g = a,
          h = this.fixHooks[f];h || (this.fixHooks[f] = h = ea.test(f) ? this.mouseHooks : da.test(f) ? this.keyHooks : {}), e = h.props ? this.props.concat(h.props) : this.props, a = new n.Event(g), b = e.length;while (b--) {
        c = e[b], a[c] = g[c];
      }return a.target || (a.target = d), 3 === a.target.nodeType && (a.target = a.target.parentNode), h.filter ? h.filter(a, g) : a;
    }, special: { load: { noBubble: !0 }, focus: { trigger: function trigger() {
          return this !== ia() && this.focus ? (this.focus(), !1) : void 0;
        }, delegateType: "focusin" }, blur: { trigger: function trigger() {
          return this === ia() && this.blur ? (this.blur(), !1) : void 0;
        }, delegateType: "focusout" }, click: { trigger: function trigger() {
          return "checkbox" === this.type && this.click && n.nodeName(this, "input") ? (this.click(), !1) : void 0;
        }, _default: function _default(a) {
          return n.nodeName(a.target, "a");
        } }, beforeunload: { postDispatch: function postDispatch(a) {
          void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result);
        } } } }, n.removeEvent = function (a, b, c) {
    a.removeEventListener && a.removeEventListener(b, c);
  }, n.Event = function (a, b) {
    return this instanceof n.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? ga : ha) : this.type = a, b && n.extend(this, b), this.timeStamp = a && a.timeStamp || n.now(), void (this[n.expando] = !0)) : new n.Event(a, b);
  }, n.Event.prototype = { constructor: n.Event, isDefaultPrevented: ha, isPropagationStopped: ha, isImmediatePropagationStopped: ha, preventDefault: function preventDefault() {
      var a = this.originalEvent;this.isDefaultPrevented = ga, a && a.preventDefault();
    }, stopPropagation: function stopPropagation() {
      var a = this.originalEvent;this.isPropagationStopped = ga, a && a.stopPropagation();
    }, stopImmediatePropagation: function stopImmediatePropagation() {
      var a = this.originalEvent;this.isImmediatePropagationStopped = ga, a && a.stopImmediatePropagation(), this.stopPropagation();
    } }, n.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function (a, b) {
    n.event.special[a] = { delegateType: b, bindType: b, handle: function handle(a) {
        var c,
            d = this,
            e = a.relatedTarget,
            f = a.handleObj;return (!e || e !== d && !n.contains(d, e)) && (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c;
      } };
  }), n.fn.extend({ on: function on(a, b, c, d) {
      return ja(this, a, b, c, d);
    }, one: function one(a, b, c, d) {
      return ja(this, a, b, c, d, 1);
    }, off: function off(a, b, c) {
      var d, e;if (a && a.preventDefault && a.handleObj) return d = a.handleObj, n(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this;if ("object" == (typeof a === "undefined" ? "undefined" : _typeof(a))) {
        for (e in a) {
          this.off(e, b, a[e]);
        }return this;
      }return (b === !1 || "function" == typeof b) && (c = b, b = void 0), c === !1 && (c = ha), this.each(function () {
        n.event.remove(this, a, c, b);
      });
    } });var ka = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
      la = /<script|<style|<link/i,
      ma = /checked\s*(?:[^=]|=\s*.checked.)/i,
      na = /^true\/(.*)/,
      oa = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function pa(a, b) {
    return n.nodeName(a, "table") && n.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a : a;
  }function qa(a) {
    return a.type = (null !== a.getAttribute("type")) + "/" + a.type, a;
  }function ra(a) {
    var b = na.exec(a.type);return b ? a.type = b[1] : a.removeAttribute("type"), a;
  }function sa(a, b) {
    var c, d, e, f, g, h, i, j;if (1 === b.nodeType) {
      if (N.hasData(a) && (f = N.access(a), g = N.set(b, f), j = f.events)) {
        delete g.handle, g.events = {};for (e in j) {
          for (c = 0, d = j[e].length; d > c; c++) {
            n.event.add(b, e, j[e][c]);
          }
        }
      }O.hasData(a) && (h = O.access(a), i = n.extend({}, h), O.set(b, i));
    }
  }function ta(a, b) {
    var c = b.nodeName.toLowerCase();"input" === c && X.test(a.type) ? b.checked = a.checked : ("input" === c || "textarea" === c) && (b.defaultValue = a.defaultValue);
  }function ua(a, b, c, d) {
    b = f.apply([], b);var e,
        g,
        h,
        i,
        j,
        k,
        m = 0,
        o = a.length,
        p = o - 1,
        q = b[0],
        r = n.isFunction(q);if (r || o > 1 && "string" == typeof q && !l.checkClone && ma.test(q)) return a.each(function (e) {
      var f = a.eq(e);r && (b[0] = q.call(this, e, f.html())), ua(f, b, c, d);
    });if (o && (e = ca(b, a[0].ownerDocument, !1, a, d), g = e.firstChild, 1 === e.childNodes.length && (e = g), g || d)) {
      for (h = n.map(_(e, "script"), qa), i = h.length; o > m; m++) {
        j = e, m !== p && (j = n.clone(j, !0, !0), i && n.merge(h, _(j, "script"))), c.call(a[m], j, m);
      }if (i) for (k = h[h.length - 1].ownerDocument, n.map(h, ra), m = 0; i > m; m++) {
        j = h[m], Z.test(j.type || "") && !N.access(j, "globalEval") && n.contains(k, j) && (j.src ? n._evalUrl && n._evalUrl(j.src) : n.globalEval(j.textContent.replace(oa, "")));
      }
    }return a;
  }function va(a, b, c) {
    for (var d, e = b ? n.filter(b, a) : a, f = 0; null != (d = e[f]); f++) {
      c || 1 !== d.nodeType || n.cleanData(_(d)), d.parentNode && (c && n.contains(d.ownerDocument, d) && aa(_(d, "script")), d.parentNode.removeChild(d));
    }return a;
  }n.extend({ htmlPrefilter: function htmlPrefilter(a) {
      return a.replace(ka, "<$1></$2>");
    }, clone: function clone(a, b, c) {
      var d,
          e,
          f,
          g,
          h = a.cloneNode(!0),
          i = n.contains(a.ownerDocument, a);if (!(l.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || n.isXMLDoc(a))) for (g = _(h), f = _(a), d = 0, e = f.length; e > d; d++) {
        ta(f[d], g[d]);
      }if (b) if (c) for (f = f || _(a), g = g || _(h), d = 0, e = f.length; e > d; d++) {
        sa(f[d], g[d]);
      } else sa(a, h);return g = _(h, "script"), g.length > 0 && aa(g, !i && _(a, "script")), h;
    }, cleanData: function cleanData(a) {
      for (var b, c, d, e = n.event.special, f = 0; void 0 !== (c = a[f]); f++) {
        if (L(c)) {
          if (b = c[N.expando]) {
            if (b.events) for (d in b.events) {
              e[d] ? n.event.remove(c, d) : n.removeEvent(c, d, b.handle);
            }c[N.expando] = void 0;
          }c[O.expando] && (c[O.expando] = void 0);
        }
      }
    } }), n.fn.extend({ domManip: ua, detach: function detach(a) {
      return va(this, a, !0);
    }, remove: function remove(a) {
      return va(this, a);
    }, text: function text(a) {
      return K(this, function (a) {
        return void 0 === a ? n.text(this) : this.empty().each(function () {
          (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && (this.textContent = a);
        });
      }, null, a, arguments.length);
    }, append: function append() {
      return ua(this, arguments, function (a) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var b = pa(this, a);b.appendChild(a);
        }
      });
    }, prepend: function prepend() {
      return ua(this, arguments, function (a) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var b = pa(this, a);b.insertBefore(a, b.firstChild);
        }
      });
    }, before: function before() {
      return ua(this, arguments, function (a) {
        this.parentNode && this.parentNode.insertBefore(a, this);
      });
    }, after: function after() {
      return ua(this, arguments, function (a) {
        this.parentNode && this.parentNode.insertBefore(a, this.nextSibling);
      });
    }, empty: function empty() {
      for (var a, b = 0; null != (a = this[b]); b++) {
        1 === a.nodeType && (n.cleanData(_(a, !1)), a.textContent = "");
      }return this;
    }, clone: function clone(a, b) {
      return a = null == a ? !1 : a, b = null == b ? a : b, this.map(function () {
        return n.clone(this, a, b);
      });
    }, html: function html(a) {
      return K(this, function (a) {
        var b = this[0] || {},
            c = 0,
            d = this.length;if (void 0 === a && 1 === b.nodeType) return b.innerHTML;if ("string" == typeof a && !la.test(a) && !$[(Y.exec(a) || ["", ""])[1].toLowerCase()]) {
          a = n.htmlPrefilter(a);try {
            for (; d > c; c++) {
              b = this[c] || {}, 1 === b.nodeType && (n.cleanData(_(b, !1)), b.innerHTML = a);
            }b = 0;
          } catch (e) {}
        }b && this.empty().append(a);
      }, null, a, arguments.length);
    }, replaceWith: function replaceWith() {
      var a = [];return ua(this, arguments, function (b) {
        var c = this.parentNode;n.inArray(this, a) < 0 && (n.cleanData(_(this)), c && c.replaceChild(b, this));
      }, a);
    } }), n.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function (a, b) {
    n.fn[a] = function (a) {
      for (var c, d = [], e = n(a), f = e.length - 1, h = 0; f >= h; h++) {
        c = h === f ? this : this.clone(!0), n(e[h])[b](c), g.apply(d, c.get());
      }return this.pushStack(d);
    };
  });var wa,
      xa = { HTML: "block", BODY: "block" };function ya(a, b) {
    var c = n(b.createElement(a)).appendTo(b.body),
        d = n.css(c[0], "display");return c.detach(), d;
  }function za(a) {
    var b = d,
        c = xa[a];return c || (c = ya(a, b), "none" !== c && c || (wa = (wa || n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement), b = wa[0].contentDocument, b.write(), b.close(), c = ya(a, b), wa.detach()), xa[a] = c), c;
  }var Aa = /^margin/,
      Ba = new RegExp("^(" + S + ")(?!px)[a-z%]+$", "i"),
      Ca = function Ca(b) {
    var c = b.ownerDocument.defaultView;return c.opener || (c = a), c.getComputedStyle(b);
  },
      Da = function Da(a, b, c, d) {
    var e,
        f,
        g = {};for (f in b) {
      g[f] = a.style[f], a.style[f] = b[f];
    }e = c.apply(a, d || []);for (f in b) {
      a.style[f] = g[f];
    }return e;
  },
      Ea = d.documentElement;!function () {
    var b,
        c,
        e,
        f,
        g = d.createElement("div"),
        h = d.createElement("div");if (h.style) {
      var _i = function _i() {
        h.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", h.innerHTML = "", Ea.appendChild(g);var d = a.getComputedStyle(h);b = "1%" !== d.top, f = "2px" === d.marginLeft, c = "4px" === d.width, h.style.marginRight = "50%", e = "4px" === d.marginRight, Ea.removeChild(g);
      };

      h.style.backgroundClip = "content-box", h.cloneNode(!0).style.backgroundClip = "", l.clearCloneStyle = "content-box" === h.style.backgroundClip, g.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", g.appendChild(h);n.extend(l, { pixelPosition: function pixelPosition() {
          return _i(), b;
        }, boxSizingReliable: function boxSizingReliable() {
          return null == c && _i(), c;
        }, pixelMarginRight: function pixelMarginRight() {
          return null == c && _i(), e;
        }, reliableMarginLeft: function reliableMarginLeft() {
          return null == c && _i(), f;
        }, reliableMarginRight: function reliableMarginRight() {
          var b,
              c = h.appendChild(d.createElement("div"));return c.style.cssText = h.style.cssText = "-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", c.style.marginRight = c.style.width = "0", h.style.width = "1px", Ea.appendChild(g), b = !parseFloat(a.getComputedStyle(c).marginRight), Ea.removeChild(g), h.removeChild(c), b;
        } });
    }
  }();function Fa(a, b, c) {
    var d,
        e,
        f,
        g,
        h = a.style;return c = c || Ca(a), c && (g = c.getPropertyValue(b) || c[b], "" !== g || n.contains(a.ownerDocument, a) || (g = n.style(a, b)), !l.pixelMarginRight() && Ba.test(g) && Aa.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f)), void 0 !== g ? g + "" : g;
  }function Ga(a, b) {
    return { get: function get() {
        return a() ? void delete this.get : (this.get = b).apply(this, arguments);
      } };
  }var Ha = /^(none|table(?!-c[ea]).+)/,
      Ia = { position: "absolute", visibility: "hidden", display: "block" },
      Ja = { letterSpacing: "0", fontWeight: "400" },
      Ka = ["Webkit", "O", "Moz", "ms"],
      La = d.createElement("div").style;function Ma(a) {
    if (a in La) return a;var b = a[0].toUpperCase() + a.slice(1),
        c = Ka.length;while (c--) {
      if (a = Ka[c] + b, a in La) return a;
    }
  }function Na(a, b, c) {
    var d = T.exec(b);return d ? Math.max(0, d[2] - (c || 0)) + (d[3] || "px") : b;
  }function Oa(a, b, c, d, e) {
    for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2) {
      "margin" === c && (g += n.css(a, c + U[f], !0, e)), d ? ("content" === c && (g -= n.css(a, "padding" + U[f], !0, e)), "margin" !== c && (g -= n.css(a, "border" + U[f] + "Width", !0, e))) : (g += n.css(a, "padding" + U[f], !0, e), "padding" !== c && (g += n.css(a, "border" + U[f] + "Width", !0, e)));
    }return g;
  }function Pa(b, c, e) {
    var f = !0,
        g = "width" === c ? b.offsetWidth : b.offsetHeight,
        h = Ca(b),
        i = "border-box" === n.css(b, "boxSizing", !1, h);if (d.msFullscreenElement && a.top !== a && b.getClientRects().length && (g = Math.round(100 * b.getBoundingClientRect()[c])), 0 >= g || null == g) {
      if (g = Fa(b, c, h), (0 > g || null == g) && (g = b.style[c]), Ba.test(g)) return g;f = i && (l.boxSizingReliable() || g === b.style[c]), g = parseFloat(g) || 0;
    }return g + Oa(b, c, e || (i ? "border" : "content"), f, h) + "px";
  }function Qa(a, b) {
    for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++) {
      d = a[g], d.style && (f[g] = N.get(d, "olddisplay"), c = d.style.display, b ? (f[g] || "none" !== c || (d.style.display = ""), "" === d.style.display && V(d) && (f[g] = N.access(d, "olddisplay", za(d.nodeName)))) : (e = V(d), "none" === c && e || N.set(d, "olddisplay", e ? c : n.css(d, "display"))));
    }for (g = 0; h > g; g++) {
      d = a[g], d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none"));
    }return a;
  }n.extend({ cssHooks: { opacity: { get: function get(a, b) {
          if (b) {
            var c = Fa(a, "opacity");return "" === c ? "1" : c;
          }
        } } }, cssNumber: { animationIterationCount: !0, columnCount: !0, fillOpacity: !0, flexGrow: !0, flexShrink: !0, fontWeight: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 }, cssProps: { "float": "cssFloat" }, style: function style(a, b, c, d) {
      if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
        var e,
            f,
            g,
            h = n.camelCase(b),
            i = a.style;return b = n.cssProps[h] || (n.cssProps[h] = Ma(h) || h), g = n.cssHooks[b] || n.cssHooks[h], void 0 === c ? g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b] : (f = typeof c === "undefined" ? "undefined" : _typeof(c), "string" === f && (e = T.exec(c)) && e[1] && (c = W(a, b, e), f = "number"), null != c && c === c && ("number" === f && (c += e && e[3] || (n.cssNumber[h] ? "" : "px")), l.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"), g && "set" in g && void 0 === (c = g.set(a, c, d)) || (i[b] = c)), void 0);
      }
    }, css: function css(a, b, c, d) {
      var e,
          f,
          g,
          h = n.camelCase(b);return b = n.cssProps[h] || (n.cssProps[h] = Ma(h) || h), g = n.cssHooks[b] || n.cssHooks[h], g && "get" in g && (e = g.get(a, !0, c)), void 0 === e && (e = Fa(a, b, d)), "normal" === e && b in Ja && (e = Ja[b]), "" === c || c ? (f = parseFloat(e), c === !0 || isFinite(f) ? f || 0 : e) : e;
    } }), n.each(["height", "width"], function (a, b) {
    n.cssHooks[b] = { get: function get(a, c, d) {
        return c ? Ha.test(n.css(a, "display")) && 0 === a.offsetWidth ? Da(a, Ia, function () {
          return Pa(a, b, d);
        }) : Pa(a, b, d) : void 0;
      }, set: function set(a, c, d) {
        var e,
            f = d && Ca(a),
            g = d && Oa(a, b, d, "border-box" === n.css(a, "boxSizing", !1, f), f);return g && (e = T.exec(c)) && "px" !== (e[3] || "px") && (a.style[b] = c, c = n.css(a, b)), Na(a, c, g);
      } };
  }), n.cssHooks.marginLeft = Ga(l.reliableMarginLeft, function (a, b) {
    return b ? (parseFloat(Fa(a, "marginLeft")) || a.getBoundingClientRect().left - Da(a, { marginLeft: 0 }, function () {
      return a.getBoundingClientRect().left;
    })) + "px" : void 0;
  }), n.cssHooks.marginRight = Ga(l.reliableMarginRight, function (a, b) {
    return b ? Da(a, { display: "inline-block" }, Fa, [a, "marginRight"]) : void 0;
  }), n.each({ margin: "", padding: "", border: "Width" }, function (a, b) {
    n.cssHooks[a + b] = { expand: function expand(c) {
        for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++) {
          e[a + U[d] + b] = f[d] || f[d - 2] || f[0];
        }return e;
      } }, Aa.test(a) || (n.cssHooks[a + b].set = Na);
  }), n.fn.extend({ css: function css(a, b) {
      return K(this, function (a, b, c) {
        var d,
            e,
            f = {},
            g = 0;if (n.isArray(b)) {
          for (d = Ca(a), e = b.length; e > g; g++) {
            f[b[g]] = n.css(a, b[g], !1, d);
          }return f;
        }return void 0 !== c ? n.style(a, b, c) : n.css(a, b);
      }, a, b, arguments.length > 1);
    }, show: function show() {
      return Qa(this, !0);
    }, hide: function hide() {
      return Qa(this);
    }, toggle: function toggle(a) {
      return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function () {
        V(this) ? n(this).show() : n(this).hide();
      });
    } });function Ra(a, b, c, d, e) {
    return new Ra.prototype.init(a, b, c, d, e);
  }n.Tween = Ra, Ra.prototype = { constructor: Ra, init: function init(a, b, c, d, e, f) {
      this.elem = a, this.prop = c, this.easing = e || n.easing._default, this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (n.cssNumber[c] ? "" : "px");
    }, cur: function cur() {
      var a = Ra.propHooks[this.prop];return a && a.get ? a.get(this) : Ra.propHooks._default.get(this);
    }, run: function run(a) {
      var b,
          c = Ra.propHooks[this.prop];return this.options.duration ? this.pos = b = n.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : this.pos = b = a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : Ra.propHooks._default.set(this), this;
    } }, Ra.prototype.init.prototype = Ra.prototype, Ra.propHooks = { _default: { get: function get(a) {
        var b;return 1 !== a.elem.nodeType || null != a.elem[a.prop] && null == a.elem.style[a.prop] ? a.elem[a.prop] : (b = n.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0);
      }, set: function set(a) {
        n.fx.step[a.prop] ? n.fx.step[a.prop](a) : 1 !== a.elem.nodeType || null == a.elem.style[n.cssProps[a.prop]] && !n.cssHooks[a.prop] ? a.elem[a.prop] = a.now : n.style(a.elem, a.prop, a.now + a.unit);
      } } }, Ra.propHooks.scrollTop = Ra.propHooks.scrollLeft = { set: function set(a) {
      a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now);
    } }, n.easing = { linear: function linear(a) {
      return a;
    }, swing: function swing(a) {
      return .5 - Math.cos(a * Math.PI) / 2;
    }, _default: "swing" }, n.fx = Ra.prototype.init, n.fx.step = {};var Sa,
      Ta,
      Ua = /^(?:toggle|show|hide)$/,
      Va = /queueHooks$/;function Wa() {
    return a.setTimeout(function () {
      Sa = void 0;
    }), Sa = n.now();
  }function Xa(a, b) {
    var c,
        d = 0,
        e = { height: a };for (b = b ? 1 : 0; 4 > d; d += 2 - b) {
      c = U[d], e["margin" + c] = e["padding" + c] = a;
    }return b && (e.opacity = e.width = a), e;
  }function Ya(a, b, c) {
    for (var d, e = (_a.tweeners[b] || []).concat(_a.tweeners["*"]), f = 0, g = e.length; g > f; f++) {
      if (d = e[f].call(c, b, a)) return d;
    }
  }function Za(a, b, c) {
    var d,
        e,
        f,
        g,
        h,
        i,
        j,
        k,
        l = this,
        m = {},
        o = a.style,
        p = a.nodeType && V(a),
        q = N.get(a, "fxshow");c.queue || (h = n._queueHooks(a, "fx"), null == h.unqueued && (h.unqueued = 0, i = h.empty.fire, h.empty.fire = function () {
      h.unqueued || i();
    }), h.unqueued++, l.always(function () {
      l.always(function () {
        h.unqueued--, n.queue(a, "fx").length || h.empty.fire();
      });
    })), 1 === a.nodeType && ("height" in b || "width" in b) && (c.overflow = [o.overflow, o.overflowX, o.overflowY], j = n.css(a, "display"), k = "none" === j ? N.get(a, "olddisplay") || za(a.nodeName) : j, "inline" === k && "none" === n.css(a, "float") && (o.display = "inline-block")), c.overflow && (o.overflow = "hidden", l.always(function () {
      o.overflow = c.overflow[0], o.overflowX = c.overflow[1], o.overflowY = c.overflow[2];
    }));for (d in b) {
      if (e = b[d], Ua.exec(e)) {
        if (delete b[d], f = f || "toggle" === e, e === (p ? "hide" : "show")) {
          if ("show" !== e || !q || void 0 === q[d]) continue;p = !0;
        }m[d] = q && q[d] || n.style(a, d);
      } else j = void 0;
    }if (n.isEmptyObject(m)) "inline" === ("none" === j ? za(a.nodeName) : j) && (o.display = j);else {
      q ? "hidden" in q && (p = q.hidden) : q = N.access(a, "fxshow", {}), f && (q.hidden = !p), p ? n(a).show() : l.done(function () {
        n(a).hide();
      }), l.done(function () {
        var b;N.remove(a, "fxshow");for (b in m) {
          n.style(a, b, m[b]);
        }
      });for (d in m) {
        g = Ya(p ? q[d] : 0, d, l), d in q || (q[d] = g.start, p && (g.end = g.start, g.start = "width" === d || "height" === d ? 1 : 0));
      }
    }
  }function $a(a, b) {
    var c, d, e, f, g;for (c in a) {
      if (d = n.camelCase(c), e = b[d], f = a[c], n.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = n.cssHooks[d], g && "expand" in g) {
        f = g.expand(f), delete a[d];for (c in f) {
          c in a || (a[c] = f[c], b[c] = e);
        }
      } else b[d] = e;
    }
  }function _a(a, b, c) {
    var d,
        e,
        f = 0,
        g = _a.prefilters.length,
        h = n.Deferred().always(function () {
      delete i.elem;
    }),
        i = function i() {
      if (e) return !1;for (var b = Sa || Wa(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++) {
        j.tweens[g].run(f);
      }return h.notifyWith(a, [j, f, c]), 1 > f && i ? c : (h.resolveWith(a, [j]), !1);
    },
        j = h.promise({ elem: a, props: n.extend({}, b), opts: n.extend(!0, { specialEasing: {}, easing: n.easing._default }, c), originalProperties: b, originalOptions: c, startTime: Sa || Wa(), duration: c.duration, tweens: [], createTween: function createTween(b, c) {
        var d = n.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);return j.tweens.push(d), d;
      }, stop: function stop(b) {
        var c = 0,
            d = b ? j.tweens.length : 0;if (e) return this;for (e = !0; d > c; c++) {
          j.tweens[c].run(1);
        }return b ? (h.notifyWith(a, [j, 1, 0]), h.resolveWith(a, [j, b])) : h.rejectWith(a, [j, b]), this;
      } }),
        k = j.props;for ($a(k, j.opts.specialEasing); g > f; f++) {
      if (d = _a.prefilters[f].call(j, a, k, j.opts)) return n.isFunction(d.stop) && (n._queueHooks(j.elem, j.opts.queue).stop = n.proxy(d.stop, d)), d;
    }return n.map(k, Ya, j), n.isFunction(j.opts.start) && j.opts.start.call(a, j), n.fx.timer(n.extend(i, { elem: a, anim: j, queue: j.opts.queue })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always);
  }n.Animation = n.extend(_a, { tweeners: { "*": [function (a, b) {
        var c = this.createTween(a, b);return W(c.elem, a, T.exec(b), c), c;
      }] }, tweener: function tweener(a, b) {
      n.isFunction(a) ? (b = a, a = ["*"]) : a = a.match(G);for (var c, d = 0, e = a.length; e > d; d++) {
        c = a[d], _a.tweeners[c] = _a.tweeners[c] || [], _a.tweeners[c].unshift(b);
      }
    }, prefilters: [Za], prefilter: function prefilter(a, b) {
      b ? _a.prefilters.unshift(a) : _a.prefilters.push(a);
    } }), n.speed = function (a, b, c) {
    var d = a && "object" == (typeof a === "undefined" ? "undefined" : _typeof(a)) ? n.extend({}, a) : { complete: c || !c && b || n.isFunction(a) && a, duration: a, easing: c && b || b && !n.isFunction(b) && b };return d.duration = n.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in n.fx.speeds ? n.fx.speeds[d.duration] : n.fx.speeds._default, (null == d.queue || d.queue === !0) && (d.queue = "fx"), d.old = d.complete, d.complete = function () {
      n.isFunction(d.old) && d.old.call(this), d.queue && n.dequeue(this, d.queue);
    }, d;
  }, n.fn.extend({ fadeTo: function fadeTo(a, b, c, d) {
      return this.filter(V).css("opacity", 0).show().end().animate({ opacity: b }, a, c, d);
    }, animate: function animate(a, b, c, d) {
      var e = n.isEmptyObject(a),
          f = n.speed(b, c, d),
          g = function g() {
        var b = _a(this, n.extend({}, a), f);(e || N.get(this, "finish")) && b.stop(!0);
      };return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g);
    }, stop: function stop(a, b, c) {
      var d = function d(a) {
        var b = a.stop;delete a.stop, b(c);
      };return "string" != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || "fx", []), this.each(function () {
        var b = !0,
            e = null != a && a + "queueHooks",
            f = n.timers,
            g = N.get(this);if (e) g[e] && g[e].stop && d(g[e]);else for (e in g) {
          g[e] && g[e].stop && Va.test(e) && d(g[e]);
        }for (e = f.length; e--;) {
          f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1));
        }(b || !c) && n.dequeue(this, a);
      });
    }, finish: function finish(a) {
      return a !== !1 && (a = a || "fx"), this.each(function () {
        var b,
            c = N.get(this),
            d = c[a + "queue"],
            e = c[a + "queueHooks"],
            f = n.timers,
            g = d ? d.length : 0;for (c.finish = !0, n.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;) {
          f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
        }for (b = 0; g > b; b++) {
          d[b] && d[b].finish && d[b].finish.call(this);
        }delete c.finish;
      });
    } }), n.each(["toggle", "show", "hide"], function (a, b) {
    var c = n.fn[b];n.fn[b] = function (a, d, e) {
      return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(Xa(b, !0), a, d, e);
    };
  }), n.each({ slideDown: Xa("show"), slideUp: Xa("hide"), slideToggle: Xa("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function (a, b) {
    n.fn[a] = function (a, c, d) {
      return this.animate(b, a, c, d);
    };
  }), n.timers = [], n.fx.tick = function () {
    var a,
        b = 0,
        c = n.timers;for (Sa = n.now(); b < c.length; b++) {
      a = c[b], a() || c[b] !== a || c.splice(b--, 1);
    }c.length || n.fx.stop(), Sa = void 0;
  }, n.fx.timer = function (a) {
    n.timers.push(a), a() ? n.fx.start() : n.timers.pop();
  }, n.fx.interval = 13, n.fx.start = function () {
    Ta || (Ta = a.setInterval(n.fx.tick, n.fx.interval));
  }, n.fx.stop = function () {
    a.clearInterval(Ta), Ta = null;
  }, n.fx.speeds = { slow: 600, fast: 200, _default: 400 }, n.fn.delay = function (b, c) {
    return b = n.fx ? n.fx.speeds[b] || b : b, c = c || "fx", this.queue(c, function (c, d) {
      var e = a.setTimeout(c, b);d.stop = function () {
        a.clearTimeout(e);
      };
    });
  }, function () {
    var a = d.createElement("input"),
        b = d.createElement("select"),
        c = b.appendChild(d.createElement("option"));a.type = "checkbox", l.checkOn = "" !== a.value, l.optSelected = c.selected, b.disabled = !0, l.optDisabled = !c.disabled, a = d.createElement("input"), a.value = "t", a.type = "radio", l.radioValue = "t" === a.value;
  }();var ab,
      bb = n.expr.attrHandle;n.fn.extend({ attr: function attr(a, b) {
      return K(this, n.attr, a, b, arguments.length > 1);
    }, removeAttr: function removeAttr(a) {
      return this.each(function () {
        n.removeAttr(this, a);
      });
    } }), n.extend({ attr: function attr(a, b, c) {
      var d,
          e,
          f = a.nodeType;if (3 !== f && 8 !== f && 2 !== f) return "undefined" == typeof a.getAttribute ? n.prop(a, b, c) : (1 === f && n.isXMLDoc(a) || (b = b.toLowerCase(), e = n.attrHooks[b] || (n.expr.match.bool.test(b) ? ab : void 0)), void 0 !== c ? null === c ? void n.removeAttr(a, b) : e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : (a.setAttribute(b, c + ""), c) : e && "get" in e && null !== (d = e.get(a, b)) ? d : (d = n.find.attr(a, b), null == d ? void 0 : d));
    }, attrHooks: { type: { set: function set(a, b) {
          if (!l.radioValue && "radio" === b && n.nodeName(a, "input")) {
            var c = a.value;return a.setAttribute("type", b), c && (a.value = c), b;
          }
        } } }, removeAttr: function removeAttr(a, b) {
      var c,
          d,
          e = 0,
          f = b && b.match(G);if (f && 1 === a.nodeType) while (c = f[e++]) {
        d = n.propFix[c] || c, n.expr.match.bool.test(c) && (a[d] = !1), a.removeAttribute(c);
      }
    } }), ab = { set: function set(a, b, c) {
      return b === !1 ? n.removeAttr(a, c) : a.setAttribute(c, c), c;
    } }, n.each(n.expr.match.bool.source.match(/\w+/g), function (a, b) {
    var c = bb[b] || n.find.attr;bb[b] = function (a, b, d) {
      var e, f;return d || (f = bb[b], bb[b] = e, e = null != c(a, b, d) ? b.toLowerCase() : null, bb[b] = f), e;
    };
  });var cb = /^(?:input|select|textarea|button)$/i,
      db = /^(?:a|area)$/i;n.fn.extend({ prop: function prop(a, b) {
      return K(this, n.prop, a, b, arguments.length > 1);
    }, removeProp: function removeProp(a) {
      return this.each(function () {
        delete this[n.propFix[a] || a];
      });
    } }), n.extend({ prop: function prop(a, b, c) {
      var d,
          e,
          f = a.nodeType;if (3 !== f && 8 !== f && 2 !== f) return 1 === f && n.isXMLDoc(a) || (b = n.propFix[b] || b, e = n.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b];
    }, propHooks: { tabIndex: { get: function get(a) {
          var b = n.find.attr(a, "tabindex");return b ? parseInt(b, 10) : cb.test(a.nodeName) || db.test(a.nodeName) && a.href ? 0 : -1;
        } } }, propFix: { "for": "htmlFor", "class": "className" } }), l.optSelected || (n.propHooks.selected = { get: function get(a) {
      var b = a.parentNode;return b && b.parentNode && b.parentNode.selectedIndex, null;
    } }), n.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
    n.propFix[this.toLowerCase()] = this;
  });var eb = /[\t\r\n\f]/g;function fb(a) {
    return a.getAttribute && a.getAttribute("class") || "";
  }n.fn.extend({ addClass: function addClass(a) {
      var b,
          c,
          d,
          e,
          f,
          g,
          h,
          i = 0;if (n.isFunction(a)) return this.each(function (b) {
        n(this).addClass(a.call(this, b, fb(this)));
      });if ("string" == typeof a && a) {
        b = a.match(G) || [];while (c = this[i++]) {
          if (e = fb(c), d = 1 === c.nodeType && (" " + e + " ").replace(eb, " ")) {
            g = 0;while (f = b[g++]) {
              d.indexOf(" " + f + " ") < 0 && (d += f + " ");
            }h = n.trim(d), e !== h && c.setAttribute("class", h);
          }
        }
      }return this;
    }, removeClass: function removeClass(a) {
      var b,
          c,
          d,
          e,
          f,
          g,
          h,
          i = 0;if (n.isFunction(a)) return this.each(function (b) {
        n(this).removeClass(a.call(this, b, fb(this)));
      });if (!arguments.length) return this.attr("class", "");if ("string" == typeof a && a) {
        b = a.match(G) || [];while (c = this[i++]) {
          if (e = fb(c), d = 1 === c.nodeType && (" " + e + " ").replace(eb, " ")) {
            g = 0;while (f = b[g++]) {
              while (d.indexOf(" " + f + " ") > -1) {
                d = d.replace(" " + f + " ", " ");
              }
            }h = n.trim(d), e !== h && c.setAttribute("class", h);
          }
        }
      }return this;
    }, toggleClass: function toggleClass(a, b) {
      var c = typeof a === "undefined" ? "undefined" : _typeof(a);return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : n.isFunction(a) ? this.each(function (c) {
        n(this).toggleClass(a.call(this, c, fb(this), b), b);
      }) : this.each(function () {
        var b, d, e, f;if ("string" === c) {
          d = 0, e = n(this), f = a.match(G) || [];while (b = f[d++]) {
            e.hasClass(b) ? e.removeClass(b) : e.addClass(b);
          }
        } else (void 0 === a || "boolean" === c) && (b = fb(this), b && N.set(this, "__className__", b), this.setAttribute && this.setAttribute("class", b || a === !1 ? "" : N.get(this, "__className__") || ""));
      });
    }, hasClass: function hasClass(a) {
      var b,
          c,
          d = 0;b = " " + a + " ";while (c = this[d++]) {
        if (1 === c.nodeType && (" " + fb(c) + " ").replace(eb, " ").indexOf(b) > -1) return !0;
      }return !1;
    } });var gb = /\r/g;n.fn.extend({ val: function val(a) {
      var b,
          c,
          d,
          e = this[0];{
        if (arguments.length) return d = n.isFunction(a), this.each(function (c) {
          var e;1 === this.nodeType && (e = d ? a.call(this, c, n(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : n.isArray(e) && (e = n.map(e, function (a) {
            return null == a ? "" : a + "";
          })), b = n.valHooks[this.type] || n.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e));
        });if (e) return b = n.valHooks[e.type] || n.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(gb, "") : null == c ? "" : c);
      }
    } }), n.extend({ valHooks: { option: { get: function get(a) {
          return n.trim(a.value);
        } }, select: { get: function get(a) {
          for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++) {
            if (c = d[i], (c.selected || i === e) && (l.optDisabled ? !c.disabled : null === c.getAttribute("disabled")) && (!c.parentNode.disabled || !n.nodeName(c.parentNode, "optgroup"))) {
              if (b = n(c).val(), f) return b;g.push(b);
            }
          }return g;
        }, set: function set(a, b) {
          var c,
              d,
              e = a.options,
              f = n.makeArray(b),
              g = e.length;while (g--) {
            d = e[g], (d.selected = n.inArray(n.valHooks.option.get(d), f) > -1) && (c = !0);
          }return c || (a.selectedIndex = -1), f;
        } } } }), n.each(["radio", "checkbox"], function () {
    n.valHooks[this] = { set: function set(a, b) {
        return n.isArray(b) ? a.checked = n.inArray(n(a).val(), b) > -1 : void 0;
      } }, l.checkOn || (n.valHooks[this].get = function (a) {
      return null === a.getAttribute("value") ? "on" : a.value;
    });
  });var hb = /^(?:focusinfocus|focusoutblur)$/;n.extend(n.event, { trigger: function trigger(b, c, e, f) {
      var g,
          h,
          i,
          j,
          l,
          m,
          o,
          p = [e || d],
          q = k.call(b, "type") ? b.type : b,
          r = k.call(b, "namespace") ? b.namespace.split(".") : [];if (h = i = e = e || d, 3 !== e.nodeType && 8 !== e.nodeType && !hb.test(q + n.event.triggered) && (q.indexOf(".") > -1 && (r = q.split("."), q = r.shift(), r.sort()), l = q.indexOf(":") < 0 && "on" + q, b = b[n.expando] ? b : new n.Event(q, "object" == (typeof b === "undefined" ? "undefined" : _typeof(b)) && b), b.isTrigger = f ? 2 : 3, b.namespace = r.join("."), b.rnamespace = b.namespace ? new RegExp("(^|\\.)" + r.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = e), c = null == c ? [b] : n.makeArray(c, [b]), o = n.event.special[q] || {}, f || !o.trigger || o.trigger.apply(e, c) !== !1)) {
        if (!f && !o.noBubble && !n.isWindow(e)) {
          for (j = o.delegateType || q, hb.test(j + q) || (h = h.parentNode); h; h = h.parentNode) {
            p.push(h), i = h;
          }i === (e.ownerDocument || d) && p.push(i.defaultView || i.parentWindow || a);
        }g = 0;while ((h = p[g++]) && !b.isPropagationStopped()) {
          b.type = g > 1 ? j : o.bindType || q, m = (N.get(h, "events") || {})[b.type] && N.get(h, "handle"), m && m.apply(h, c), m = l && h[l], m && m.apply && L(h) && (b.result = m.apply(h, c), b.result === !1 && b.preventDefault());
        }return b.type = q, f || b.isDefaultPrevented() || o._default && o._default.apply(p.pop(), c) !== !1 || !L(e) || l && n.isFunction(e[q]) && !n.isWindow(e) && (i = e[l], i && (e[l] = null), n.event.triggered = q, e[q](), n.event.triggered = void 0, i && (e[l] = i)), b.result;
      }
    }, simulate: function simulate(a, b, c) {
      var d = n.extend(new n.Event(), c, { type: a, isSimulated: !0 });n.event.trigger(d, null, b), d.isDefaultPrevented() && c.preventDefault();
    } }), n.fn.extend({ trigger: function trigger(a, b) {
      return this.each(function () {
        n.event.trigger(a, b, this);
      });
    }, triggerHandler: function triggerHandler(a, b) {
      var c = this[0];return c ? n.event.trigger(a, b, c, !0) : void 0;
    } }), n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (a, b) {
    n.fn[b] = function (a, c) {
      return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b);
    };
  }), n.fn.extend({ hover: function hover(a, b) {
      return this.mouseenter(a).mouseleave(b || a);
    } }), l.focusin = "onfocusin" in a, l.focusin || n.each({ focus: "focusin", blur: "focusout" }, function (a, b) {
    var c = function c(a) {
      n.event.simulate(b, a.target, n.event.fix(a));
    };n.event.special[b] = { setup: function setup() {
        var d = this.ownerDocument || this,
            e = N.access(d, b);e || d.addEventListener(a, c, !0), N.access(d, b, (e || 0) + 1);
      }, teardown: function teardown() {
        var d = this.ownerDocument || this,
            e = N.access(d, b) - 1;e ? N.access(d, b, e) : (d.removeEventListener(a, c, !0), N.remove(d, b));
      } };
  });var ib = a.location,
      jb = n.now(),
      kb = /\?/;n.parseJSON = function (a) {
    return JSON.parse(a + "");
  }, n.parseXML = function (b) {
    var c;if (!b || "string" != typeof b) return null;try {
      c = new a.DOMParser().parseFromString(b, "text/xml");
    } catch (d) {
      c = void 0;
    }return (!c || c.getElementsByTagName("parsererror").length) && n.error("Invalid XML: " + b), c;
  };var lb = /#.*$/,
      mb = /([?&])_=[^&]*/,
      nb = /^(.*?):[ \t]*([^\r\n]*)$/gm,
      ob = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
      pb = /^(?:GET|HEAD)$/,
      qb = /^\/\//,
      rb = {},
      sb = {},
      tb = "*/".concat("*"),
      ub = d.createElement("a");ub.href = ib.href;function vb(a) {
    return function (b, c) {
      "string" != typeof b && (c = b, b = "*");var d,
          e = 0,
          f = b.toLowerCase().match(G) || [];if (n.isFunction(c)) while (d = f[e++]) {
        "+" === d[0] ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c);
      }
    };
  }function wb(a, b, c, d) {
    var e = {},
        f = a === sb;function g(h) {
      var i;return e[h] = !0, n.each(a[h] || [], function (a, h) {
        var j = h(b, c, d);return "string" != typeof j || f || e[j] ? f ? !(i = j) : void 0 : (b.dataTypes.unshift(j), g(j), !1);
      }), i;
    }return g(b.dataTypes[0]) || !e["*"] && g("*");
  }function xb(a, b) {
    var c,
        d,
        e = n.ajaxSettings.flatOptions || {};for (c in b) {
      void 0 !== b[c] && ((e[c] ? a : d || (d = {}))[c] = b[c]);
    }return d && n.extend(!0, a, d), a;
  }function yb(a, b, c) {
    var d,
        e,
        f,
        g,
        h = a.contents,
        i = a.dataTypes;while ("*" === i[0]) {
      i.shift(), void 0 === d && (d = a.mimeType || b.getResponseHeader("Content-Type"));
    }if (d) for (e in h) {
      if (h[e] && h[e].test(d)) {
        i.unshift(e);break;
      }
    }if (i[0] in c) f = i[0];else {
      for (e in c) {
        if (!i[0] || a.converters[e + " " + i[0]]) {
          f = e;break;
        }g || (g = e);
      }f = f || g;
    }return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0;
  }function zb(a, b, c, d) {
    var e,
        f,
        g,
        h,
        i,
        j = {},
        k = a.dataTypes.slice();if (k[1]) for (g in a.converters) {
      j[g.toLowerCase()] = a.converters[g];
    }f = k.shift();while (f) {
      if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift()) if ("*" === f) f = i;else if ("*" !== i && i !== f) {
        if (g = j[i + " " + f] || j["* " + f], !g) for (e in j) {
          if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
            g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));break;
          }
        }if (g !== !0) if (g && a["throws"]) b = g(b);else try {
          b = g(b);
        } catch (l) {
          return { state: "parsererror", error: g ? l : "No conversion from " + i + " to " + f };
        }
      }
    }return { state: "success", data: b };
  }n.extend({ active: 0, lastModified: {}, etag: {}, ajaxSettings: { url: ib.href, type: "GET", isLocal: ob.test(ib.protocol), global: !0, processData: !0, async: !0, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: { "*": tb, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" }, contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ }, responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" }, converters: { "* text": String, "text html": !0, "text json": n.parseJSON, "text xml": n.parseXML }, flatOptions: { url: !0, context: !0 } }, ajaxSetup: function ajaxSetup(a, b) {
      return b ? xb(xb(a, n.ajaxSettings), b) : xb(n.ajaxSettings, a);
    }, ajaxPrefilter: vb(rb), ajaxTransport: vb(sb), ajax: function ajax(b, c) {
      "object" == (typeof b === "undefined" ? "undefined" : _typeof(b)) && (c = b, b = void 0), c = c || {};var e,
          f,
          g,
          h,
          i,
          j,
          k,
          l,
          m = n.ajaxSetup({}, c),
          o = m.context || m,
          p = m.context && (o.nodeType || o.jquery) ? n(o) : n.event,
          q = n.Deferred(),
          r = n.Callbacks("once memory"),
          s = m.statusCode || {},
          t = {},
          u = {},
          v = 0,
          w = "canceled",
          x = { readyState: 0, getResponseHeader: function getResponseHeader(a) {
          var b;if (2 === v) {
            if (!h) {
              h = {};while (b = nb.exec(g)) {
                h[b[1].toLowerCase()] = b[2];
              }
            }b = h[a.toLowerCase()];
          }return null == b ? null : b;
        }, getAllResponseHeaders: function getAllResponseHeaders() {
          return 2 === v ? g : null;
        }, setRequestHeader: function setRequestHeader(a, b) {
          var c = a.toLowerCase();return v || (a = u[c] = u[c] || a, t[a] = b), this;
        }, overrideMimeType: function overrideMimeType(a) {
          return v || (m.mimeType = a), this;
        }, statusCode: function statusCode(a) {
          var b;if (a) if (2 > v) for (b in a) {
            s[b] = [s[b], a[b]];
          } else x.always(a[x.status]);return this;
        }, abort: function abort(a) {
          var b = a || w;return e && e.abort(b), z(0, b), this;
        } };if (q.promise(x).complete = r.add, x.success = x.done, x.error = x.fail, m.url = ((b || m.url || ib.href) + "").replace(lb, "").replace(qb, ib.protocol + "//"), m.type = c.method || c.type || m.method || m.type, m.dataTypes = n.trim(m.dataType || "*").toLowerCase().match(G) || [""], null == m.crossDomain) {
        j = d.createElement("a");try {
          j.href = m.url, j.href = j.href, m.crossDomain = ub.protocol + "//" + ub.host != j.protocol + "//" + j.host;
        } catch (y) {
          m.crossDomain = !0;
        }
      }if (m.data && m.processData && "string" != typeof m.data && (m.data = n.param(m.data, m.traditional)), wb(rb, m, c, x), 2 === v) return x;k = n.event && m.global, k && 0 === n.active++ && n.event.trigger("ajaxStart"), m.type = m.type.toUpperCase(), m.hasContent = !pb.test(m.type), f = m.url, m.hasContent || (m.data && (f = m.url += (kb.test(f) ? "&" : "?") + m.data, delete m.data), m.cache === !1 && (m.url = mb.test(f) ? f.replace(mb, "$1_=" + jb++) : f + (kb.test(f) ? "&" : "?") + "_=" + jb++)), m.ifModified && (n.lastModified[f] && x.setRequestHeader("If-Modified-Since", n.lastModified[f]), n.etag[f] && x.setRequestHeader("If-None-Match", n.etag[f])), (m.data && m.hasContent && m.contentType !== !1 || c.contentType) && x.setRequestHeader("Content-Type", m.contentType), x.setRequestHeader("Accept", m.dataTypes[0] && m.accepts[m.dataTypes[0]] ? m.accepts[m.dataTypes[0]] + ("*" !== m.dataTypes[0] ? ", " + tb + "; q=0.01" : "") : m.accepts["*"]);for (l in m.headers) {
        x.setRequestHeader(l, m.headers[l]);
      }if (m.beforeSend && (m.beforeSend.call(o, x, m) === !1 || 2 === v)) return x.abort();w = "abort";for (l in { success: 1, error: 1, complete: 1 }) {
        x[l](m[l]);
      }if (e = wb(sb, m, c, x)) {
        if (x.readyState = 1, k && p.trigger("ajaxSend", [x, m]), 2 === v) return x;m.async && m.timeout > 0 && (i = a.setTimeout(function () {
          x.abort("timeout");
        }, m.timeout));try {
          v = 1, e.send(t, z);
        } catch (y) {
          if (!(2 > v)) throw y;z(-1, y);
        }
      } else z(-1, "No Transport");function z(b, c, d, h) {
        var j,
            l,
            t,
            u,
            w,
            y = c;2 !== v && (v = 2, i && a.clearTimeout(i), e = void 0, g = h || "", x.readyState = b > 0 ? 4 : 0, j = b >= 200 && 300 > b || 304 === b, d && (u = yb(m, x, d)), u = zb(m, u, x, j), j ? (m.ifModified && (w = x.getResponseHeader("Last-Modified"), w && (n.lastModified[f] = w), w = x.getResponseHeader("etag"), w && (n.etag[f] = w)), 204 === b || "HEAD" === m.type ? y = "nocontent" : 304 === b ? y = "notmodified" : (y = u.state, l = u.data, t = u.error, j = !t)) : (t = y, (b || !y) && (y = "error", 0 > b && (b = 0))), x.status = b, x.statusText = (c || y) + "", j ? q.resolveWith(o, [l, y, x]) : q.rejectWith(o, [x, y, t]), x.statusCode(s), s = void 0, k && p.trigger(j ? "ajaxSuccess" : "ajaxError", [x, m, j ? l : t]), r.fireWith(o, [x, y]), k && (p.trigger("ajaxComplete", [x, m]), --n.active || n.event.trigger("ajaxStop")));
      }return x;
    }, getJSON: function getJSON(a, b, c) {
      return n.get(a, b, c, "json");
    }, getScript: function getScript(a, b) {
      return n.get(a, void 0, b, "script");
    } }), n.each(["get", "post"], function (a, b) {
    n[b] = function (a, c, d, e) {
      return n.isFunction(c) && (e = e || d, d = c, c = void 0), n.ajax(n.extend({ url: a, type: b, dataType: e, data: c, success: d }, n.isPlainObject(a) && a));
    };
  }), n._evalUrl = function (a) {
    return n.ajax({ url: a, type: "GET", dataType: "script", async: !1, global: !1, "throws": !0 });
  }, n.fn.extend({ wrapAll: function wrapAll(a) {
      var b;return n.isFunction(a) ? this.each(function (b) {
        n(this).wrapAll(a.call(this, b));
      }) : (this[0] && (b = n(a, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && b.insertBefore(this[0]), b.map(function () {
        var a = this;while (a.firstElementChild) {
          a = a.firstElementChild;
        }return a;
      }).append(this)), this);
    }, wrapInner: function wrapInner(a) {
      return n.isFunction(a) ? this.each(function (b) {
        n(this).wrapInner(a.call(this, b));
      }) : this.each(function () {
        var b = n(this),
            c = b.contents();c.length ? c.wrapAll(a) : b.append(a);
      });
    }, wrap: function wrap(a) {
      var b = n.isFunction(a);return this.each(function (c) {
        n(this).wrapAll(b ? a.call(this, c) : a);
      });
    }, unwrap: function unwrap() {
      return this.parent().each(function () {
        n.nodeName(this, "body") || n(this).replaceWith(this.childNodes);
      }).end();
    } }), n.expr.filters.hidden = function (a) {
    return !n.expr.filters.visible(a);
  }, n.expr.filters.visible = function (a) {
    return a.offsetWidth > 0 || a.offsetHeight > 0 || a.getClientRects().length > 0;
  };var Ab = /%20/g,
      Bb = /\[\]$/,
      Cb = /\r?\n/g,
      Db = /^(?:submit|button|image|reset|file)$/i,
      Eb = /^(?:input|select|textarea|keygen)/i;function Fb(a, b, c, d) {
    var e;if (n.isArray(b)) n.each(b, function (b, e) {
      c || Bb.test(a) ? d(a, e) : Fb(a + "[" + ("object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) && null != e ? b : "") + "]", e, c, d);
    });else if (c || "object" !== n.type(b)) d(a, b);else for (e in b) {
      Fb(a + "[" + e + "]", b[e], c, d);
    }
  }n.param = function (a, b) {
    var c,
        d = [],
        e = function e(a, b) {
      b = n.isFunction(b) ? b() : null == b ? "" : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b);
    };if (void 0 === b && (b = n.ajaxSettings && n.ajaxSettings.traditional), n.isArray(a) || a.jquery && !n.isPlainObject(a)) n.each(a, function () {
      e(this.name, this.value);
    });else for (c in a) {
      Fb(c, a[c], b, e);
    }return d.join("&").replace(Ab, "+");
  }, n.fn.extend({ serialize: function serialize() {
      return n.param(this.serializeArray());
    }, serializeArray: function serializeArray() {
      return this.map(function () {
        var a = n.prop(this, "elements");return a ? n.makeArray(a) : this;
      }).filter(function () {
        var a = this.type;return this.name && !n(this).is(":disabled") && Eb.test(this.nodeName) && !Db.test(a) && (this.checked || !X.test(a));
      }).map(function (a, b) {
        var c = n(this).val();return null == c ? null : n.isArray(c) ? n.map(c, function (a) {
          return { name: b.name, value: a.replace(Cb, "\r\n") };
        }) : { name: b.name, value: c.replace(Cb, "\r\n") };
      }).get();
    } }), n.ajaxSettings.xhr = function () {
    try {
      return new a.XMLHttpRequest();
    } catch (b) {}
  };var Gb = { 0: 200, 1223: 204 },
      Hb = n.ajaxSettings.xhr();l.cors = !!Hb && "withCredentials" in Hb, l.ajax = Hb = !!Hb, n.ajaxTransport(function (b) {
    var _c, d;return l.cors || Hb && !b.crossDomain ? { send: function send(e, f) {
        var g,
            h = b.xhr();if (h.open(b.type, b.url, b.async, b.username, b.password), b.xhrFields) for (g in b.xhrFields) {
          h[g] = b.xhrFields[g];
        }b.mimeType && h.overrideMimeType && h.overrideMimeType(b.mimeType), b.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest");for (g in e) {
          h.setRequestHeader(g, e[g]);
        }_c = function c(a) {
          return function () {
            _c && (_c = d = h.onload = h.onerror = h.onabort = h.onreadystatechange = null, "abort" === a ? h.abort() : "error" === a ? "number" != typeof h.status ? f(0, "error") : f(h.status, h.statusText) : f(Gb[h.status] || h.status, h.statusText, "text" !== (h.responseType || "text") || "string" != typeof h.responseText ? { binary: h.response } : { text: h.responseText }, h.getAllResponseHeaders()));
          };
        }, h.onload = _c(), d = h.onerror = _c("error"), void 0 !== h.onabort ? h.onabort = d : h.onreadystatechange = function () {
          4 === h.readyState && a.setTimeout(function () {
            _c && d();
          });
        }, _c = _c("abort");try {
          h.send(b.hasContent && b.data || null);
        } catch (i) {
          if (_c) throw i;
        }
      }, abort: function abort() {
        _c && _c();
      } } : void 0;
  }), n.ajaxSetup({ accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" }, contents: { script: /\b(?:java|ecma)script\b/ }, converters: { "text script": function textScript(a) {
        return n.globalEval(a), a;
      } } }), n.ajaxPrefilter("script", function (a) {
    void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET");
  }), n.ajaxTransport("script", function (a) {
    if (a.crossDomain) {
      var b, _c2;return { send: function send(e, f) {
          b = n("<script>").prop({ charset: a.scriptCharset, src: a.url }).on("load error", _c2 = function c(a) {
            b.remove(), _c2 = null, a && f("error" === a.type ? 404 : 200, a.type);
          }), d.head.appendChild(b[0]);
        }, abort: function abort() {
          _c2 && _c2();
        } };
    }
  });var Ib = [],
      Jb = /(=)\?(?=&|$)|\?\?/;n.ajaxSetup({ jsonp: "callback", jsonpCallback: function jsonpCallback() {
      var a = Ib.pop() || n.expando + "_" + jb++;return this[a] = !0, a;
    } }), n.ajaxPrefilter("json jsonp", function (b, c, d) {
    var e,
        f,
        g,
        h = b.jsonp !== !1 && (Jb.test(b.url) ? "url" : "string" == typeof b.data && 0 === (b.contentType || "").indexOf("application/x-www-form-urlencoded") && Jb.test(b.data) && "data");return h || "jsonp" === b.dataTypes[0] ? (e = b.jsonpCallback = n.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(Jb, "$1" + e) : b.jsonp !== !1 && (b.url += (kb.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function () {
      return g || n.error(e + " was not called"), g[0];
    }, b.dataTypes[0] = "json", f = a[e], a[e] = function () {
      g = arguments;
    }, d.always(function () {
      void 0 === f ? n(a).removeProp(e) : a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, Ib.push(e)), g && n.isFunction(f) && f(g[0]), g = f = void 0;
    }), "script") : void 0;
  }), l.createHTMLDocument = function () {
    var a = d.implementation.createHTMLDocument("").body;return a.innerHTML = "<form></form><form></form>", 2 === a.childNodes.length;
  }(), n.parseHTML = function (a, b, c) {
    if (!a || "string" != typeof a) return null;"boolean" == typeof b && (c = b, b = !1), b = b || (l.createHTMLDocument ? d.implementation.createHTMLDocument("") : d);var e = x.exec(a),
        f = !c && [];return e ? [b.createElement(e[1])] : (e = ca([a], b, f), f && f.length && n(f).remove(), n.merge([], e.childNodes));
  };var Kb = n.fn.load;n.fn.load = function (a, b, c) {
    if ("string" != typeof a && Kb) return Kb.apply(this, arguments);var d,
        e,
        f,
        g = this,
        h = a.indexOf(" ");return h > -1 && (d = n.trim(a.slice(h)), a = a.slice(0, h)), n.isFunction(b) ? (c = b, b = void 0) : b && "object" == (typeof b === "undefined" ? "undefined" : _typeof(b)) && (e = "POST"), g.length > 0 && n.ajax({ url: a, type: e || "GET", dataType: "html", data: b }).done(function (a) {
      f = arguments, g.html(d ? n("<div>").append(n.parseHTML(a)).find(d) : a);
    }).always(c && function (a, b) {
      g.each(function () {
        c.apply(g, f || [a.responseText, b, a]);
      });
    }), this;
  }, n.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (a, b) {
    n.fn[b] = function (a) {
      return this.on(b, a);
    };
  }), n.expr.filters.animated = function (a) {
    return n.grep(n.timers, function (b) {
      return a === b.elem;
    }).length;
  };function Lb(a) {
    return n.isWindow(a) ? a : 9 === a.nodeType && a.defaultView;
  }n.offset = { setOffset: function setOffset(a, b, c) {
      var d,
          e,
          f,
          g,
          h,
          i,
          j,
          k = n.css(a, "position"),
          l = n(a),
          m = {};"static" === k && (a.style.position = "relative"), h = l.offset(), f = n.css(a, "top"), i = n.css(a, "left"), j = ("absolute" === k || "fixed" === k) && (f + i).indexOf("auto") > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), n.isFunction(b) && (b = b.call(a, c, n.extend({}, h))), null != b.top && (m.top = b.top - h.top + g), null != b.left && (m.left = b.left - h.left + e), "using" in b ? b.using.call(a, m) : l.css(m);
    } }, n.fn.extend({ offset: function offset(a) {
      if (arguments.length) return void 0 === a ? this : this.each(function (b) {
        n.offset.setOffset(this, a, b);
      });var b,
          c,
          d = this[0],
          e = { top: 0, left: 0 },
          f = d && d.ownerDocument;if (f) return b = f.documentElement, n.contains(b, d) ? (e = d.getBoundingClientRect(), c = Lb(f), { top: e.top + c.pageYOffset - b.clientTop, left: e.left + c.pageXOffset - b.clientLeft }) : e;
    }, position: function position() {
      if (this[0]) {
        var a,
            b,
            c = this[0],
            d = { top: 0, left: 0 };return "fixed" === n.css(c, "position") ? b = c.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), n.nodeName(a[0], "html") || (d = a.offset()), d.top += n.css(a[0], "borderTopWidth", !0) - a.scrollTop(), d.left += n.css(a[0], "borderLeftWidth", !0) - a.scrollLeft()), { top: b.top - d.top - n.css(c, "marginTop", !0), left: b.left - d.left - n.css(c, "marginLeft", !0) };
      }
    }, offsetParent: function offsetParent() {
      return this.map(function () {
        var a = this.offsetParent;while (a && "static" === n.css(a, "position")) {
          a = a.offsetParent;
        }return a || Ea;
      });
    } }), n.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (a, b) {
    var c = "pageYOffset" === b;n.fn[a] = function (d) {
      return K(this, function (a, d, e) {
        var f = Lb(a);return void 0 === e ? f ? f[b] : a[d] : void (f ? f.scrollTo(c ? f.pageXOffset : e, c ? e : f.pageYOffset) : a[d] = e);
      }, a, d, arguments.length);
    };
  }), n.each(["top", "left"], function (a, b) {
    n.cssHooks[b] = Ga(l.pixelPosition, function (a, c) {
      return c ? (c = Fa(a, b), Ba.test(c) ? n(a).position()[b] + "px" : c) : void 0;
    });
  }), n.each({ Height: "height", Width: "width" }, function (a, b) {
    n.each({ padding: "inner" + a, content: b, "": "outer" + a }, function (c, d) {
      n.fn[d] = function (d, e) {
        var f = arguments.length && (c || "boolean" != typeof d),
            g = c || (d === !0 || e === !0 ? "margin" : "border");return K(this, function (b, c, d) {
          var e;return n.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement, Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : void 0 === d ? n.css(b, c, g) : n.style(b, c, d, g);
        }, b, f ? d : void 0, f, null);
      };
    });
  }), n.fn.extend({ bind: function bind(a, b, c) {
      return this.on(a, null, b, c);
    }, unbind: function unbind(a, b) {
      return this.off(a, null, b);
    }, delegate: function delegate(a, b, c, d) {
      return this.on(b, a, c, d);
    }, undelegate: function undelegate(a, b, c) {
      return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c);
    }, size: function size() {
      return this.length;
    } }), n.fn.andSelf = n.fn.addBack, "function" == "function" && __webpack_require__(436) && !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
    return n;
  }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));var Mb = a.jQuery,
      Nb = a.$;return n.noConflict = function (b) {
    return a.$ === n && (a.$ = Nb), b && a.jQuery === n && (a.jQuery = Mb), n;
  }, b || (a.jQuery = a.$ = n), n;
});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(24)(module)))

/***/ }),

/***/ 436:
/***/ (function(module, exports) {

/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {/* globals __webpack_amd_options__ */
module.exports = __webpack_amd_options__;

/* WEBPACK VAR INJECTION */}.call(exports, {}))

/***/ }),

/***/ 437:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

!function (a, b) {
  "object" == ( false ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? module.exports = b() :  true ? !(__WEBPACK_AMD_DEFINE_FACTORY__ = (b),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : a.moment = b();
}(undefined, function () {
  "use strict";
  function a() {
    return re.apply(null, arguments);
  }function b(a) {
    re = a;
  }function c(a) {
    return a instanceof Array || "[object Array]" === Object.prototype.toString.call(a);
  }function d(a) {
    return null != a && "[object Object]" === Object.prototype.toString.call(a);
  }function e(a) {
    var b;for (b in a) {
      return !1;
    }return !0;
  }function f(a) {
    return void 0 === a;
  }function g(a) {
    return "number" == typeof a || "[object Number]" === Object.prototype.toString.call(a);
  }function h(a) {
    return a instanceof Date || "[object Date]" === Object.prototype.toString.call(a);
  }function i(a, b) {
    var c,
        d = [];for (c = 0; c < a.length; ++c) {
      d.push(b(a[c], c));
    }return d;
  }function j(a, b) {
    return Object.prototype.hasOwnProperty.call(a, b);
  }function k(a, b) {
    for (var c in b) {
      j(b, c) && (a[c] = b[c]);
    }return j(b, "toString") && (a.toString = b.toString), j(b, "valueOf") && (a.valueOf = b.valueOf), a;
  }function l(a, b, c, d) {
    return sb(a, b, c, d, !0).utc();
  }function m() {
    return { empty: !1, unusedTokens: [], unusedInput: [], overflow: -2, charsLeftOver: 0, nullInput: !1, invalidMonth: null, invalidFormat: !1, userInvalidated: !1, iso: !1, parsedDateParts: [], meridiem: null, rfc2822: !1, weekdayMismatch: !1 };
  }function n(a) {
    return null == a._pf && (a._pf = m()), a._pf;
  }function o(a) {
    if (null == a._isValid) {
      var b = n(a),
          c = te.call(b.parsedDateParts, function (a) {
        return null != a;
      }),
          d = !isNaN(a._d.getTime()) && b.overflow < 0 && !b.empty && !b.invalidMonth && !b.invalidWeekday && !b.nullInput && !b.invalidFormat && !b.userInvalidated && (!b.meridiem || b.meridiem && c);if (a._strict && (d = d && 0 === b.charsLeftOver && 0 === b.unusedTokens.length && void 0 === b.bigHour), null != Object.isFrozen && Object.isFrozen(a)) return d;a._isValid = d;
    }return a._isValid;
  }function p(a) {
    var b = l(NaN);return null != a ? k(n(b), a) : n(b).userInvalidated = !0, b;
  }function q(a, b) {
    var c, d, e;if (f(b._isAMomentObject) || (a._isAMomentObject = b._isAMomentObject), f(b._i) || (a._i = b._i), f(b._f) || (a._f = b._f), f(b._l) || (a._l = b._l), f(b._strict) || (a._strict = b._strict), f(b._tzm) || (a._tzm = b._tzm), f(b._isUTC) || (a._isUTC = b._isUTC), f(b._offset) || (a._offset = b._offset), f(b._pf) || (a._pf = n(b)), f(b._locale) || (a._locale = b._locale), ue.length > 0) for (c = 0; c < ue.length; c++) {
      d = ue[c], e = b[d], f(e) || (a[d] = e);
    }return a;
  }function r(b) {
    q(this, b), this._d = new Date(null != b._d ? b._d.getTime() : NaN), this.isValid() || (this._d = new Date(NaN)), ve === !1 && (ve = !0, a.updateOffset(this), ve = !1);
  }function s(a) {
    return a instanceof r || null != a && null != a._isAMomentObject;
  }function t(a) {
    return a < 0 ? Math.ceil(a) || 0 : Math.floor(a);
  }function u(a) {
    var b = +a,
        c = 0;return 0 !== b && isFinite(b) && (c = t(b)), c;
  }function v(a, b, c) {
    var d,
        e = Math.min(a.length, b.length),
        f = Math.abs(a.length - b.length),
        g = 0;for (d = 0; d < e; d++) {
      (c && a[d] !== b[d] || !c && u(a[d]) !== u(b[d])) && g++;
    }return g + f;
  }function w(b) {
    a.suppressDeprecationWarnings === !1 && "undefined" != typeof console && console.warn && console.warn("Deprecation warning: " + b);
  }function x(b, c) {
    var d = !0;return k(function () {
      if (null != a.deprecationHandler && a.deprecationHandler(null, b), d) {
        for (var e, f = [], g = 0; g < arguments.length; g++) {
          if (e = "", "object" == _typeof(arguments[g])) {
            e += "\n[" + g + "] ";for (var h in arguments[0]) {
              e += h + ": " + arguments[0][h] + ", ";
            }e = e.slice(0, -2);
          } else e = arguments[g];f.push(e);
        }w(b + "\nArguments: " + Array.prototype.slice.call(f).join("") + "\n" + new Error().stack), d = !1;
      }return c.apply(this, arguments);
    }, c);
  }function y(b, c) {
    null != a.deprecationHandler && a.deprecationHandler(b, c), we[b] || (w(c), we[b] = !0);
  }function z(a) {
    return a instanceof Function || "[object Function]" === Object.prototype.toString.call(a);
  }function A(a) {
    var b, c;for (c in a) {
      b = a[c], z(b) ? this[c] = b : this["_" + c] = b;
    }this._config = a, this._dayOfMonthOrdinalParseLenient = new RegExp((this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source);
  }function B(a, b) {
    var c,
        e = k({}, a);for (c in b) {
      j(b, c) && (d(a[c]) && d(b[c]) ? (e[c] = {}, k(e[c], a[c]), k(e[c], b[c])) : null != b[c] ? e[c] = b[c] : delete e[c]);
    }for (c in a) {
      j(a, c) && !j(b, c) && d(a[c]) && (e[c] = k({}, e[c]));
    }return e;
  }function C(a) {
    null != a && this.set(a);
  }function D(a, b, c) {
    var d = this._calendar[a] || this._calendar.sameElse;return z(d) ? d.call(b, c) : d;
  }function E(a) {
    var b = this._longDateFormat[a],
        c = this._longDateFormat[a.toUpperCase()];return b || !c ? b : (this._longDateFormat[a] = c.replace(/MMMM|MM|DD|dddd/g, function (a) {
      return a.slice(1);
    }), this._longDateFormat[a]);
  }function F() {
    return this._invalidDate;
  }function G(a) {
    return this._ordinal.replace("%d", a);
  }function H(a, b, c, d) {
    var e = this._relativeTime[c];return z(e) ? e(a, b, c, d) : e.replace(/%d/i, a);
  }function I(a, b) {
    var c = this._relativeTime[a > 0 ? "future" : "past"];return z(c) ? c(b) : c.replace(/%s/i, b);
  }function J(a, b) {
    var c = a.toLowerCase();Ge[c] = Ge[c + "s"] = Ge[b] = a;
  }function K(a) {
    return "string" == typeof a ? Ge[a] || Ge[a.toLowerCase()] : void 0;
  }function L(a) {
    var b,
        c,
        d = {};for (c in a) {
      j(a, c) && (b = K(c), b && (d[b] = a[c]));
    }return d;
  }function M(a, b) {
    He[a] = b;
  }function N(a) {
    var b = [];for (var c in a) {
      b.push({ unit: c, priority: He[c] });
    }return b.sort(function (a, b) {
      return a.priority - b.priority;
    }), b;
  }function O(b, c) {
    return function (d) {
      return null != d ? (Q(this, b, d), a.updateOffset(this, c), this) : P(this, b);
    };
  }function P(a, b) {
    return a.isValid() ? a._d["get" + (a._isUTC ? "UTC" : "") + b]() : NaN;
  }function Q(a, b, c) {
    a.isValid() && a._d["set" + (a._isUTC ? "UTC" : "") + b](c);
  }function R(a) {
    return a = K(a), z(this[a]) ? this[a]() : this;
  }function S(a, b) {
    if ("object" == (typeof a === "undefined" ? "undefined" : _typeof(a))) {
      a = L(a);for (var c = N(a), d = 0; d < c.length; d++) {
        this[c[d].unit](a[c[d].unit]);
      }
    } else if (a = K(a), z(this[a])) return this[a](b);return this;
  }function T(a, b, c) {
    var d = "" + Math.abs(a),
        e = b - d.length,
        f = a >= 0;return (f ? c ? "+" : "" : "-") + Math.pow(10, Math.max(0, e)).toString().substr(1) + d;
  }function U(a, b, c, d) {
    var e = d;"string" == typeof d && (e = function e() {
      return this[d]();
    }), a && (Le[a] = e), b && (Le[b[0]] = function () {
      return T(e.apply(this, arguments), b[1], b[2]);
    }), c && (Le[c] = function () {
      return this.localeData().ordinal(e.apply(this, arguments), a);
    });
  }function V(a) {
    return a.match(/\[[\s\S]/) ? a.replace(/^\[|\]$/g, "") : a.replace(/\\/g, "");
  }function W(a) {
    var b,
        c,
        d = a.match(Ie);for (b = 0, c = d.length; b < c; b++) {
      Le[d[b]] ? d[b] = Le[d[b]] : d[b] = V(d[b]);
    }return function (b) {
      var e,
          f = "";for (e = 0; e < c; e++) {
        f += z(d[e]) ? d[e].call(b, a) : d[e];
      }return f;
    };
  }function X(a, b) {
    return a.isValid() ? (b = Y(b, a.localeData()), Ke[b] = Ke[b] || W(b), Ke[b](a)) : a.localeData().invalidDate();
  }function Y(a, b) {
    function c(a) {
      return b.longDateFormat(a) || a;
    }var d = 5;for (Je.lastIndex = 0; d >= 0 && Je.test(a);) {
      a = a.replace(Je, c), Je.lastIndex = 0, d -= 1;
    }return a;
  }function Z(a, b, c) {
    bf[a] = z(b) ? b : function (a, d) {
      return a && c ? c : b;
    };
  }function $(a, b) {
    return j(bf, a) ? bf[a](b._strict, b._locale) : new RegExp(_(a));
  }function _(a) {
    return aa(a.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function (a, b, c, d, e) {
      return b || c || d || e;
    }));
  }function aa(a) {
    return a.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
  }function ba(a, b) {
    var c,
        d = b;for ("string" == typeof a && (a = [a]), g(b) && (d = function d(a, c) {
      c[b] = u(a);
    }), c = 0; c < a.length; c++) {
      cf[a[c]] = d;
    }
  }function ca(a, b) {
    ba(a, function (a, c, d, e) {
      d._w = d._w || {}, b(a, d._w, d, e);
    });
  }function da(a, b, c) {
    null != b && j(cf, a) && cf[a](b, c._a, c, a);
  }function ea(a, b) {
    return new Date(Date.UTC(a, b + 1, 0)).getUTCDate();
  }function fa(a, b) {
    return a ? c(this._months) ? this._months[a.month()] : this._months[(this._months.isFormat || of).test(b) ? "format" : "standalone"][a.month()] : c(this._months) ? this._months : this._months.standalone;
  }function ga(a, b) {
    return a ? c(this._monthsShort) ? this._monthsShort[a.month()] : this._monthsShort[of.test(b) ? "format" : "standalone"][a.month()] : c(this._monthsShort) ? this._monthsShort : this._monthsShort.standalone;
  }function ha(a, b, c) {
    var d,
        e,
        f,
        g = a.toLocaleLowerCase();if (!this._monthsParse) for (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = [], d = 0; d < 12; ++d) {
      f = l([2e3, d]), this._shortMonthsParse[d] = this.monthsShort(f, "").toLocaleLowerCase(), this._longMonthsParse[d] = this.months(f, "").toLocaleLowerCase();
    }return c ? "MMM" === b ? (e = nf.call(this._shortMonthsParse, g), e !== -1 ? e : null) : (e = nf.call(this._longMonthsParse, g), e !== -1 ? e : null) : "MMM" === b ? (e = nf.call(this._shortMonthsParse, g), e !== -1 ? e : (e = nf.call(this._longMonthsParse, g), e !== -1 ? e : null)) : (e = nf.call(this._longMonthsParse, g), e !== -1 ? e : (e = nf.call(this._shortMonthsParse, g), e !== -1 ? e : null));
  }function ia(a, b, c) {
    var d, e, f;if (this._monthsParseExact) return ha.call(this, a, b, c);for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), d = 0; d < 12; d++) {
      if (e = l([2e3, d]), c && !this._longMonthsParse[d] && (this._longMonthsParse[d] = new RegExp("^" + this.months(e, "").replace(".", "") + "$", "i"), this._shortMonthsParse[d] = new RegExp("^" + this.monthsShort(e, "").replace(".", "") + "$", "i")), c || this._monthsParse[d] || (f = "^" + this.months(e, "") + "|^" + this.monthsShort(e, ""), this._monthsParse[d] = new RegExp(f.replace(".", ""), "i")), c && "MMMM" === b && this._longMonthsParse[d].test(a)) return d;if (c && "MMM" === b && this._shortMonthsParse[d].test(a)) return d;if (!c && this._monthsParse[d].test(a)) return d;
    }
  }function ja(a, b) {
    var c;if (!a.isValid()) return a;if ("string" == typeof b) if (/^\d+$/.test(b)) b = u(b);else if (b = a.localeData().monthsParse(b), !g(b)) return a;return c = Math.min(a.date(), ea(a.year(), b)), a._d["set" + (a._isUTC ? "UTC" : "") + "Month"](b, c), a;
  }function ka(b) {
    return null != b ? (ja(this, b), a.updateOffset(this, !0), this) : P(this, "Month");
  }function la() {
    return ea(this.year(), this.month());
  }function ma(a) {
    return this._monthsParseExact ? (j(this, "_monthsRegex") || oa.call(this), a ? this._monthsShortStrictRegex : this._monthsShortRegex) : (j(this, "_monthsShortRegex") || (this._monthsShortRegex = rf), this._monthsShortStrictRegex && a ? this._monthsShortStrictRegex : this._monthsShortRegex);
  }function na(a) {
    return this._monthsParseExact ? (j(this, "_monthsRegex") || oa.call(this), a ? this._monthsStrictRegex : this._monthsRegex) : (j(this, "_monthsRegex") || (this._monthsRegex = sf), this._monthsStrictRegex && a ? this._monthsStrictRegex : this._monthsRegex);
  }function oa() {
    function a(a, b) {
      return b.length - a.length;
    }var b,
        c,
        d = [],
        e = [],
        f = [];for (b = 0; b < 12; b++) {
      c = l([2e3, b]), d.push(this.monthsShort(c, "")), e.push(this.months(c, "")), f.push(this.months(c, "")), f.push(this.monthsShort(c, ""));
    }for (d.sort(a), e.sort(a), f.sort(a), b = 0; b < 12; b++) {
      d[b] = aa(d[b]), e[b] = aa(e[b]);
    }for (b = 0; b < 24; b++) {
      f[b] = aa(f[b]);
    }this._monthsRegex = new RegExp("^(" + f.join("|") + ")", "i"), this._monthsShortRegex = this._monthsRegex, this._monthsStrictRegex = new RegExp("^(" + e.join("|") + ")", "i"), this._monthsShortStrictRegex = new RegExp("^(" + d.join("|") + ")", "i");
  }function pa(a) {
    return qa(a) ? 366 : 365;
  }function qa(a) {
    return a % 4 === 0 && a % 100 !== 0 || a % 400 === 0;
  }function ra() {
    return qa(this.year());
  }function sa(a, b, c, d, e, f, g) {
    var h = new Date(a, b, c, d, e, f, g);return a < 100 && a >= 0 && isFinite(h.getFullYear()) && h.setFullYear(a), h;
  }function ta(a) {
    var b = new Date(Date.UTC.apply(null, arguments));return a < 100 && a >= 0 && isFinite(b.getUTCFullYear()) && b.setUTCFullYear(a), b;
  }function ua(a, b, c) {
    var d = 7 + b - c,
        e = (7 + ta(a, 0, d).getUTCDay() - b) % 7;return -e + d - 1;
  }function va(a, b, c, d, e) {
    var f,
        g,
        h = (7 + c - d) % 7,
        i = ua(a, d, e),
        j = 1 + 7 * (b - 1) + h + i;return j <= 0 ? (f = a - 1, g = pa(f) + j) : j > pa(a) ? (f = a + 1, g = j - pa(a)) : (f = a, g = j), { year: f, dayOfYear: g };
  }function wa(a, b, c) {
    var d,
        e,
        f = ua(a.year(), b, c),
        g = Math.floor((a.dayOfYear() - f - 1) / 7) + 1;return g < 1 ? (e = a.year() - 1, d = g + xa(e, b, c)) : g > xa(a.year(), b, c) ? (d = g - xa(a.year(), b, c), e = a.year() + 1) : (e = a.year(), d = g), { week: d, year: e };
  }function xa(a, b, c) {
    var d = ua(a, b, c),
        e = ua(a + 1, b, c);return (pa(a) - d + e) / 7;
  }function ya(a) {
    return wa(a, this._week.dow, this._week.doy).week;
  }function za() {
    return this._week.dow;
  }function Aa() {
    return this._week.doy;
  }function Ba(a) {
    var b = this.localeData().week(this);return null == a ? b : this.add(7 * (a - b), "d");
  }function Ca(a) {
    var b = wa(this, 1, 4).week;return null == a ? b : this.add(7 * (a - b), "d");
  }function Da(a, b) {
    return "string" != typeof a ? a : isNaN(a) ? (a = b.weekdaysParse(a), "number" == typeof a ? a : null) : parseInt(a, 10);
  }function Ea(a, b) {
    return "string" == typeof a ? b.weekdaysParse(a) % 7 || 7 : isNaN(a) ? null : a;
  }function Fa(a, b) {
    return a ? c(this._weekdays) ? this._weekdays[a.day()] : this._weekdays[this._weekdays.isFormat.test(b) ? "format" : "standalone"][a.day()] : c(this._weekdays) ? this._weekdays : this._weekdays.standalone;
  }function Ga(a) {
    return a ? this._weekdaysShort[a.day()] : this._weekdaysShort;
  }function Ha(a) {
    return a ? this._weekdaysMin[a.day()] : this._weekdaysMin;
  }function Ia(a, b, c) {
    var d,
        e,
        f,
        g = a.toLocaleLowerCase();if (!this._weekdaysParse) for (this._weekdaysParse = [], this._shortWeekdaysParse = [], this._minWeekdaysParse = [], d = 0; d < 7; ++d) {
      f = l([2e3, 1]).day(d), this._minWeekdaysParse[d] = this.weekdaysMin(f, "").toLocaleLowerCase(), this._shortWeekdaysParse[d] = this.weekdaysShort(f, "").toLocaleLowerCase(), this._weekdaysParse[d] = this.weekdays(f, "").toLocaleLowerCase();
    }return c ? "dddd" === b ? (e = nf.call(this._weekdaysParse, g), e !== -1 ? e : null) : "ddd" === b ? (e = nf.call(this._shortWeekdaysParse, g), e !== -1 ? e : null) : (e = nf.call(this._minWeekdaysParse, g), e !== -1 ? e : null) : "dddd" === b ? (e = nf.call(this._weekdaysParse, g), e !== -1 ? e : (e = nf.call(this._shortWeekdaysParse, g), e !== -1 ? e : (e = nf.call(this._minWeekdaysParse, g), e !== -1 ? e : null))) : "ddd" === b ? (e = nf.call(this._shortWeekdaysParse, g), e !== -1 ? e : (e = nf.call(this._weekdaysParse, g), e !== -1 ? e : (e = nf.call(this._minWeekdaysParse, g), e !== -1 ? e : null))) : (e = nf.call(this._minWeekdaysParse, g), e !== -1 ? e : (e = nf.call(this._weekdaysParse, g), e !== -1 ? e : (e = nf.call(this._shortWeekdaysParse, g), e !== -1 ? e : null)));
  }function Ja(a, b, c) {
    var d, e, f;if (this._weekdaysParseExact) return Ia.call(this, a, b, c);for (this._weekdaysParse || (this._weekdaysParse = [], this._minWeekdaysParse = [], this._shortWeekdaysParse = [], this._fullWeekdaysParse = []), d = 0; d < 7; d++) {
      if (e = l([2e3, 1]).day(d), c && !this._fullWeekdaysParse[d] && (this._fullWeekdaysParse[d] = new RegExp("^" + this.weekdays(e, "").replace(".", ".?") + "$", "i"), this._shortWeekdaysParse[d] = new RegExp("^" + this.weekdaysShort(e, "").replace(".", ".?") + "$", "i"), this._minWeekdaysParse[d] = new RegExp("^" + this.weekdaysMin(e, "").replace(".", ".?") + "$", "i")), this._weekdaysParse[d] || (f = "^" + this.weekdays(e, "") + "|^" + this.weekdaysShort(e, "") + "|^" + this.weekdaysMin(e, ""), this._weekdaysParse[d] = new RegExp(f.replace(".", ""), "i")), c && "dddd" === b && this._fullWeekdaysParse[d].test(a)) return d;if (c && "ddd" === b && this._shortWeekdaysParse[d].test(a)) return d;if (c && "dd" === b && this._minWeekdaysParse[d].test(a)) return d;if (!c && this._weekdaysParse[d].test(a)) return d;
    }
  }function Ka(a) {
    if (!this.isValid()) return null != a ? this : NaN;var b = this._isUTC ? this._d.getUTCDay() : this._d.getDay();return null != a ? (a = Da(a, this.localeData()), this.add(a - b, "d")) : b;
  }function La(a) {
    if (!this.isValid()) return null != a ? this : NaN;var b = (this.day() + 7 - this.localeData()._week.dow) % 7;return null == a ? b : this.add(a - b, "d");
  }function Ma(a) {
    if (!this.isValid()) return null != a ? this : NaN;if (null != a) {
      var b = Ea(a, this.localeData());return this.day(this.day() % 7 ? b : b - 7);
    }return this.day() || 7;
  }function Na(a) {
    return this._weekdaysParseExact ? (j(this, "_weekdaysRegex") || Qa.call(this), a ? this._weekdaysStrictRegex : this._weekdaysRegex) : (j(this, "_weekdaysRegex") || (this._weekdaysRegex = yf), this._weekdaysStrictRegex && a ? this._weekdaysStrictRegex : this._weekdaysRegex);
  }function Oa(a) {
    return this._weekdaysParseExact ? (j(this, "_weekdaysRegex") || Qa.call(this), a ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (j(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = zf), this._weekdaysShortStrictRegex && a ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex);
  }function Pa(a) {
    return this._weekdaysParseExact ? (j(this, "_weekdaysRegex") || Qa.call(this), a ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (j(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = Af), this._weekdaysMinStrictRegex && a ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex);
  }function Qa() {
    function a(a, b) {
      return b.length - a.length;
    }var b,
        c,
        d,
        e,
        f,
        g = [],
        h = [],
        i = [],
        j = [];for (b = 0; b < 7; b++) {
      c = l([2e3, 1]).day(b), d = this.weekdaysMin(c, ""), e = this.weekdaysShort(c, ""), f = this.weekdays(c, ""), g.push(d), h.push(e), i.push(f), j.push(d), j.push(e), j.push(f);
    }for (g.sort(a), h.sort(a), i.sort(a), j.sort(a), b = 0; b < 7; b++) {
      h[b] = aa(h[b]), i[b] = aa(i[b]), j[b] = aa(j[b]);
    }this._weekdaysRegex = new RegExp("^(" + j.join("|") + ")", "i"), this._weekdaysShortRegex = this._weekdaysRegex, this._weekdaysMinRegex = this._weekdaysRegex, this._weekdaysStrictRegex = new RegExp("^(" + i.join("|") + ")", "i"), this._weekdaysShortStrictRegex = new RegExp("^(" + h.join("|") + ")", "i"), this._weekdaysMinStrictRegex = new RegExp("^(" + g.join("|") + ")", "i");
  }function Ra() {
    return this.hours() % 12 || 12;
  }function Sa() {
    return this.hours() || 24;
  }function Ta(a, b) {
    U(a, 0, 0, function () {
      return this.localeData().meridiem(this.hours(), this.minutes(), b);
    });
  }function Ua(a, b) {
    return b._meridiemParse;
  }function Va(a) {
    return "p" === (a + "").toLowerCase().charAt(0);
  }function Wa(a, b, c) {
    return a > 11 ? c ? "pm" : "PM" : c ? "am" : "AM";
  }function Xa(a) {
    return a ? a.toLowerCase().replace("_", "-") : a;
  }function Ya(a) {
    for (var b, c, d, e, f = 0; f < a.length;) {
      for (e = Xa(a[f]).split("-"), b = e.length, c = Xa(a[f + 1]), c = c ? c.split("-") : null; b > 0;) {
        if (d = Za(e.slice(0, b).join("-"))) return d;if (c && c.length >= b && v(e, c, !0) >= b - 1) break;b--;
      }f++;
    }return null;
  }function Za(a) {
    var b = null;if (!Ff[a] && "undefined" != typeof module && module && module.exports) try {
      b = Bf._abbr, !(function webpackMissingModule() { var e = new Error("Cannot find module \"./locale\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()), $a(b);
    } catch (a) {}return Ff[a];
  }function $a(a, b) {
    var c;return a && (c = f(b) ? bb(a) : _a(a, b), c && (Bf = c)), Bf._abbr;
  }function _a(a, b) {
    if (null !== b) {
      var c = Ef;if (b.abbr = a, null != Ff[a]) y("defineLocaleOverride", "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."), c = Ff[a]._config;else if (null != b.parentLocale) {
        if (null == Ff[b.parentLocale]) return Gf[b.parentLocale] || (Gf[b.parentLocale] = []), Gf[b.parentLocale].push({ name: a, config: b }), null;c = Ff[b.parentLocale]._config;
      }return Ff[a] = new C(B(c, b)), Gf[a] && Gf[a].forEach(function (a) {
        _a(a.name, a.config);
      }), $a(a), Ff[a];
    }return delete Ff[a], null;
  }function ab(a, b) {
    if (null != b) {
      var c,
          d = Ef;null != Ff[a] && (d = Ff[a]._config), b = B(d, b), c = new C(b), c.parentLocale = Ff[a], Ff[a] = c, $a(a);
    } else null != Ff[a] && (null != Ff[a].parentLocale ? Ff[a] = Ff[a].parentLocale : null != Ff[a] && delete Ff[a]);return Ff[a];
  }function bb(a) {
    var b;if (a && a._locale && a._locale._abbr && (a = a._locale._abbr), !a) return Bf;if (!c(a)) {
      if (b = Za(a)) return b;a = [a];
    }return Ya(a);
  }function cb() {
    return ze(Ff);
  }function db(a) {
    var b,
        c = a._a;return c && n(a).overflow === -2 && (b = c[ef] < 0 || c[ef] > 11 ? ef : c[ff] < 1 || c[ff] > ea(c[df], c[ef]) ? ff : c[gf] < 0 || c[gf] > 24 || 24 === c[gf] && (0 !== c[hf] || 0 !== c[jf] || 0 !== c[kf]) ? gf : c[hf] < 0 || c[hf] > 59 ? hf : c[jf] < 0 || c[jf] > 59 ? jf : c[kf] < 0 || c[kf] > 999 ? kf : -1, n(a)._overflowDayOfYear && (b < df || b > ff) && (b = ff), n(a)._overflowWeeks && b === -1 && (b = lf), n(a)._overflowWeekday && b === -1 && (b = mf), n(a).overflow = b), a;
  }function eb(a) {
    var b,
        c,
        d,
        e,
        f,
        g,
        h = a._i,
        i = Hf.exec(h) || If.exec(h);if (i) {
      for (n(a).iso = !0, b = 0, c = Kf.length; b < c; b++) {
        if (Kf[b][1].exec(i[1])) {
          e = Kf[b][0], d = Kf[b][2] !== !1;break;
        }
      }if (null == e) return void (a._isValid = !1);if (i[3]) {
        for (b = 0, c = Lf.length; b < c; b++) {
          if (Lf[b][1].exec(i[3])) {
            f = (i[2] || " ") + Lf[b][0];break;
          }
        }if (null == f) return void (a._isValid = !1);
      }if (!d && null != f) return void (a._isValid = !1);if (i[4]) {
        if (!Jf.exec(i[4])) return void (a._isValid = !1);g = "Z";
      }a._f = e + (f || "") + (g || ""), lb(a);
    } else a._isValid = !1;
  }function fb(a) {
    var b,
        c,
        d,
        e,
        f,
        g,
        h,
        i,
        j = { " GMT": " +0000", " EDT": " -0400", " EST": " -0500", " CDT": " -0500", " CST": " -0600", " MDT": " -0600", " MST": " -0700", " PDT": " -0700", " PST": " -0800" },
        k = "YXWVUTSRQPONZABCDEFGHIKLM";if (b = a._i.replace(/\([^\)]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s|\s$/g, ""), c = Nf.exec(b)) {
      if (d = c[1] ? "ddd" + (5 === c[1].length ? ", " : " ") : "", e = "D MMM " + (c[2].length > 10 ? "YYYY " : "YY "), f = "HH:mm" + (c[4] ? ":ss" : ""), c[1]) {
        var l = new Date(c[2]),
            m = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"][l.getDay()];if (c[1].substr(0, 3) !== m) return n(a).weekdayMismatch = !0, void (a._isValid = !1);
      }switch (c[5].length) {case 2:
          0 === i ? h = " +0000" : (i = k.indexOf(c[5][1].toUpperCase()) - 12, h = (i < 0 ? " -" : " +") + ("" + i).replace(/^-?/, "0").match(/..$/)[0] + "00");break;case 4:
          h = j[c[5]];break;default:
          h = j[" GMT"];}c[5] = h, a._i = c.splice(1).join(""), g = " ZZ", a._f = d + e + f + g, lb(a), n(a).rfc2822 = !0;
    } else a._isValid = !1;
  }function gb(b) {
    var c = Mf.exec(b._i);return null !== c ? void (b._d = new Date(+c[1])) : (eb(b), void (b._isValid === !1 && (delete b._isValid, fb(b), b._isValid === !1 && (delete b._isValid, a.createFromInputFallback(b)))));
  }function hb(a, b, c) {
    return null != a ? a : null != b ? b : c;
  }function ib(b) {
    var c = new Date(a.now());return b._useUTC ? [c.getUTCFullYear(), c.getUTCMonth(), c.getUTCDate()] : [c.getFullYear(), c.getMonth(), c.getDate()];
  }function jb(a) {
    var b,
        c,
        d,
        e,
        f = [];if (!a._d) {
      for (d = ib(a), a._w && null == a._a[ff] && null == a._a[ef] && kb(a), null != a._dayOfYear && (e = hb(a._a[df], d[df]), (a._dayOfYear > pa(e) || 0 === a._dayOfYear) && (n(a)._overflowDayOfYear = !0), c = ta(e, 0, a._dayOfYear), a._a[ef] = c.getUTCMonth(), a._a[ff] = c.getUTCDate()), b = 0; b < 3 && null == a._a[b]; ++b) {
        a._a[b] = f[b] = d[b];
      }for (; b < 7; b++) {
        a._a[b] = f[b] = null == a._a[b] ? 2 === b ? 1 : 0 : a._a[b];
      }24 === a._a[gf] && 0 === a._a[hf] && 0 === a._a[jf] && 0 === a._a[kf] && (a._nextDay = !0, a._a[gf] = 0), a._d = (a._useUTC ? ta : sa).apply(null, f), null != a._tzm && a._d.setUTCMinutes(a._d.getUTCMinutes() - a._tzm), a._nextDay && (a._a[gf] = 24);
    }
  }function kb(a) {
    var b, c, d, e, f, g, h, i;if (b = a._w, null != b.GG || null != b.W || null != b.E) f = 1, g = 4, c = hb(b.GG, a._a[df], wa(tb(), 1, 4).year), d = hb(b.W, 1), e = hb(b.E, 1), (e < 1 || e > 7) && (i = !0);else {
      f = a._locale._week.dow, g = a._locale._week.doy;var j = wa(tb(), f, g);c = hb(b.gg, a._a[df], j.year), d = hb(b.w, j.week), null != b.d ? (e = b.d, (e < 0 || e > 6) && (i = !0)) : null != b.e ? (e = b.e + f, (b.e < 0 || b.e > 6) && (i = !0)) : e = f;
    }d < 1 || d > xa(c, f, g) ? n(a)._overflowWeeks = !0 : null != i ? n(a)._overflowWeekday = !0 : (h = va(c, d, e, f, g), a._a[df] = h.year, a._dayOfYear = h.dayOfYear);
  }function lb(b) {
    if (b._f === a.ISO_8601) return void eb(b);if (b._f === a.RFC_2822) return void fb(b);b._a = [], n(b).empty = !0;var c,
        d,
        e,
        f,
        g,
        h = "" + b._i,
        i = h.length,
        j = 0;for (e = Y(b._f, b._locale).match(Ie) || [], c = 0; c < e.length; c++) {
      f = e[c], d = (h.match($(f, b)) || [])[0], d && (g = h.substr(0, h.indexOf(d)), g.length > 0 && n(b).unusedInput.push(g), h = h.slice(h.indexOf(d) + d.length), j += d.length), Le[f] ? (d ? n(b).empty = !1 : n(b).unusedTokens.push(f), da(f, d, b)) : b._strict && !d && n(b).unusedTokens.push(f);
    }n(b).charsLeftOver = i - j, h.length > 0 && n(b).unusedInput.push(h), b._a[gf] <= 12 && n(b).bigHour === !0 && b._a[gf] > 0 && (n(b).bigHour = void 0), n(b).parsedDateParts = b._a.slice(0), n(b).meridiem = b._meridiem, b._a[gf] = mb(b._locale, b._a[gf], b._meridiem), jb(b), db(b);
  }function mb(a, b, c) {
    var d;return null == c ? b : null != a.meridiemHour ? a.meridiemHour(b, c) : null != a.isPM ? (d = a.isPM(c), d && b < 12 && (b += 12), d || 12 !== b || (b = 0), b) : b;
  }function nb(a) {
    var b, c, d, e, f;if (0 === a._f.length) return n(a).invalidFormat = !0, void (a._d = new Date(NaN));for (e = 0; e < a._f.length; e++) {
      f = 0, b = q({}, a), null != a._useUTC && (b._useUTC = a._useUTC), b._f = a._f[e], lb(b), o(b) && (f += n(b).charsLeftOver, f += 10 * n(b).unusedTokens.length, n(b).score = f, (null == d || f < d) && (d = f, c = b));
    }k(a, c || b);
  }function ob(a) {
    if (!a._d) {
      var b = L(a._i);a._a = i([b.year, b.month, b.day || b.date, b.hour, b.minute, b.second, b.millisecond], function (a) {
        return a && parseInt(a, 10);
      }), jb(a);
    }
  }function pb(a) {
    var b = new r(db(qb(a)));return b._nextDay && (b.add(1, "d"), b._nextDay = void 0), b;
  }function qb(a) {
    var b = a._i,
        d = a._f;return a._locale = a._locale || bb(a._l), null === b || void 0 === d && "" === b ? p({ nullInput: !0 }) : ("string" == typeof b && (a._i = b = a._locale.preparse(b)), s(b) ? new r(db(b)) : (h(b) ? a._d = b : c(d) ? nb(a) : d ? lb(a) : rb(a), o(a) || (a._d = null), a));
  }function rb(b) {
    var e = b._i;f(e) ? b._d = new Date(a.now()) : h(e) ? b._d = new Date(e.valueOf()) : "string" == typeof e ? gb(b) : c(e) ? (b._a = i(e.slice(0), function (a) {
      return parseInt(a, 10);
    }), jb(b)) : d(e) ? ob(b) : g(e) ? b._d = new Date(e) : a.createFromInputFallback(b);
  }function sb(a, b, f, g, h) {
    var i = {};return f !== !0 && f !== !1 || (g = f, f = void 0), (d(a) && e(a) || c(a) && 0 === a.length) && (a = void 0), i._isAMomentObject = !0, i._useUTC = i._isUTC = h, i._l = f, i._i = a, i._f = b, i._strict = g, pb(i);
  }function tb(a, b, c, d) {
    return sb(a, b, c, d, !1);
  }function ub(a, b) {
    var d, e;if (1 === b.length && c(b[0]) && (b = b[0]), !b.length) return tb();for (d = b[0], e = 1; e < b.length; ++e) {
      b[e].isValid() && !b[e][a](d) || (d = b[e]);
    }return d;
  }function vb() {
    var a = [].slice.call(arguments, 0);return ub("isBefore", a);
  }function wb() {
    var a = [].slice.call(arguments, 0);return ub("isAfter", a);
  }function xb(a) {
    for (var b in a) {
      if (Rf.indexOf(b) === -1 || null != a[b] && isNaN(a[b])) return !1;
    }for (var c = !1, d = 0; d < Rf.length; ++d) {
      if (a[Rf[d]]) {
        if (c) return !1;parseFloat(a[Rf[d]]) !== u(a[Rf[d]]) && (c = !0);
      }
    }return !0;
  }function yb() {
    return this._isValid;
  }function zb() {
    return Sb(NaN);
  }function Ab(a) {
    var b = L(a),
        c = b.year || 0,
        d = b.quarter || 0,
        e = b.month || 0,
        f = b.week || 0,
        g = b.day || 0,
        h = b.hour || 0,
        i = b.minute || 0,
        j = b.second || 0,
        k = b.millisecond || 0;this._isValid = xb(b), this._milliseconds = +k + 1e3 * j + 6e4 * i + 1e3 * h * 60 * 60, this._days = +g + 7 * f, this._months = +e + 3 * d + 12 * c, this._data = {}, this._locale = bb(), this._bubble();
  }function Bb(a) {
    return a instanceof Ab;
  }function Cb(a) {
    return a < 0 ? Math.round(-1 * a) * -1 : Math.round(a);
  }function Db(a, b) {
    U(a, 0, 0, function () {
      var a = this.utcOffset(),
          c = "+";return a < 0 && (a = -a, c = "-"), c + T(~~(a / 60), 2) + b + T(~~a % 60, 2);
    });
  }function Eb(a, b) {
    var c = (b || "").match(a);if (null === c) return null;var d = c[c.length - 1] || [],
        e = (d + "").match(Sf) || ["-", 0, 0],
        f = +(60 * e[1]) + u(e[2]);return 0 === f ? 0 : "+" === e[0] ? f : -f;
  }function Fb(b, c) {
    var d, e;return c._isUTC ? (d = c.clone(), e = (s(b) || h(b) ? b.valueOf() : tb(b).valueOf()) - d.valueOf(), d._d.setTime(d._d.valueOf() + e), a.updateOffset(d, !1), d) : tb(b).local();
  }function Gb(a) {
    return 15 * -Math.round(a._d.getTimezoneOffset() / 15);
  }function Hb(b, c, d) {
    var e,
        f = this._offset || 0;if (!this.isValid()) return null != b ? this : NaN;if (null != b) {
      if ("string" == typeof b) {
        if (b = Eb($e, b), null === b) return this;
      } else Math.abs(b) < 16 && !d && (b = 60 * b);return !this._isUTC && c && (e = Gb(this)), this._offset = b, this._isUTC = !0, null != e && this.add(e, "m"), f !== b && (!c || this._changeInProgress ? Xb(this, Sb(b - f, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0, a.updateOffset(this, !0), this._changeInProgress = null)), this;
    }return this._isUTC ? f : Gb(this);
  }function Ib(a, b) {
    return null != a ? ("string" != typeof a && (a = -a), this.utcOffset(a, b), this) : -this.utcOffset();
  }function Jb(a) {
    return this.utcOffset(0, a);
  }function Kb(a) {
    return this._isUTC && (this.utcOffset(0, a), this._isUTC = !1, a && this.subtract(Gb(this), "m")), this;
  }function Lb() {
    if (null != this._tzm) this.utcOffset(this._tzm, !1, !0);else if ("string" == typeof this._i) {
      var a = Eb(Ze, this._i);null != a ? this.utcOffset(a) : this.utcOffset(0, !0);
    }return this;
  }function Mb(a) {
    return !!this.isValid() && (a = a ? tb(a).utcOffset() : 0, (this.utcOffset() - a) % 60 === 0);
  }function Nb() {
    return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset();
  }function Ob() {
    if (!f(this._isDSTShifted)) return this._isDSTShifted;var a = {};if (q(a, this), a = qb(a), a._a) {
      var b = a._isUTC ? l(a._a) : tb(a._a);this._isDSTShifted = this.isValid() && v(a._a, b.toArray()) > 0;
    } else this._isDSTShifted = !1;return this._isDSTShifted;
  }function Pb() {
    return !!this.isValid() && !this._isUTC;
  }function Qb() {
    return !!this.isValid() && this._isUTC;
  }function Rb() {
    return !!this.isValid() && this._isUTC && 0 === this._offset;
  }function Sb(a, b) {
    var c,
        d,
        e,
        f = a,
        h = null;return Bb(a) ? f = { ms: a._milliseconds, d: a._days, M: a._months } : g(a) ? (f = {}, b ? f[b] = a : f.milliseconds = a) : (h = Tf.exec(a)) ? (c = "-" === h[1] ? -1 : 1, f = { y: 0, d: u(h[ff]) * c, h: u(h[gf]) * c, m: u(h[hf]) * c, s: u(h[jf]) * c, ms: u(Cb(1e3 * h[kf])) * c }) : (h = Uf.exec(a)) ? (c = "-" === h[1] ? -1 : 1, f = { y: Tb(h[2], c), M: Tb(h[3], c), w: Tb(h[4], c), d: Tb(h[5], c), h: Tb(h[6], c), m: Tb(h[7], c), s: Tb(h[8], c) }) : null == f ? f = {} : "object" == (typeof f === "undefined" ? "undefined" : _typeof(f)) && ("from" in f || "to" in f) && (e = Vb(tb(f.from), tb(f.to)), f = {}, f.ms = e.milliseconds, f.M = e.months), d = new Ab(f), Bb(a) && j(a, "_locale") && (d._locale = a._locale), d;
  }function Tb(a, b) {
    var c = a && parseFloat(a.replace(",", "."));return (isNaN(c) ? 0 : c) * b;
  }function Ub(a, b) {
    var c = { milliseconds: 0, months: 0 };return c.months = b.month() - a.month() + 12 * (b.year() - a.year()), a.clone().add(c.months, "M").isAfter(b) && --c.months, c.milliseconds = +b - +a.clone().add(c.months, "M"), c;
  }function Vb(a, b) {
    var c;return a.isValid() && b.isValid() ? (b = Fb(b, a), a.isBefore(b) ? c = Ub(a, b) : (c = Ub(b, a), c.milliseconds = -c.milliseconds, c.months = -c.months), c) : { milliseconds: 0, months: 0 };
  }function Wb(a, b) {
    return function (c, d) {
      var e, f;return null === d || isNaN(+d) || (y(b, "moment()." + b + "(period, number) is deprecated. Please use moment()." + b + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."), f = c, c = d, d = f), c = "string" == typeof c ? +c : c, e = Sb(c, d), Xb(this, e, a), this;
    };
  }function Xb(b, c, d, e) {
    var f = c._milliseconds,
        g = Cb(c._days),
        h = Cb(c._months);b.isValid() && (e = null == e || e, f && b._d.setTime(b._d.valueOf() + f * d), g && Q(b, "Date", P(b, "Date") + g * d), h && ja(b, P(b, "Month") + h * d), e && a.updateOffset(b, g || h));
  }function Yb(a, b) {
    var c = a.diff(b, "days", !0);return c < -6 ? "sameElse" : c < -1 ? "lastWeek" : c < 0 ? "lastDay" : c < 1 ? "sameDay" : c < 2 ? "nextDay" : c < 7 ? "nextWeek" : "sameElse";
  }function Zb(b, c) {
    var d = b || tb(),
        e = Fb(d, this).startOf("day"),
        f = a.calendarFormat(this, e) || "sameElse",
        g = c && (z(c[f]) ? c[f].call(this, d) : c[f]);return this.format(g || this.localeData().calendar(f, this, tb(d)));
  }function $b() {
    return new r(this);
  }function _b(a, b) {
    var c = s(a) ? a : tb(a);return !(!this.isValid() || !c.isValid()) && (b = K(f(b) ? "millisecond" : b), "millisecond" === b ? this.valueOf() > c.valueOf() : c.valueOf() < this.clone().startOf(b).valueOf());
  }function ac(a, b) {
    var c = s(a) ? a : tb(a);return !(!this.isValid() || !c.isValid()) && (b = K(f(b) ? "millisecond" : b), "millisecond" === b ? this.valueOf() < c.valueOf() : this.clone().endOf(b).valueOf() < c.valueOf());
  }function bc(a, b, c, d) {
    return d = d || "()", ("(" === d[0] ? this.isAfter(a, c) : !this.isBefore(a, c)) && (")" === d[1] ? this.isBefore(b, c) : !this.isAfter(b, c));
  }function cc(a, b) {
    var c,
        d = s(a) ? a : tb(a);return !(!this.isValid() || !d.isValid()) && (b = K(b || "millisecond"), "millisecond" === b ? this.valueOf() === d.valueOf() : (c = d.valueOf(), this.clone().startOf(b).valueOf() <= c && c <= this.clone().endOf(b).valueOf()));
  }function dc(a, b) {
    return this.isSame(a, b) || this.isAfter(a, b);
  }function ec(a, b) {
    return this.isSame(a, b) || this.isBefore(a, b);
  }function fc(a, b, c) {
    var d, e, f, g;return this.isValid() ? (d = Fb(a, this), d.isValid() ? (e = 6e4 * (d.utcOffset() - this.utcOffset()), b = K(b), "year" === b || "month" === b || "quarter" === b ? (g = gc(this, d), "quarter" === b ? g /= 3 : "year" === b && (g /= 12)) : (f = this - d, g = "second" === b ? f / 1e3 : "minute" === b ? f / 6e4 : "hour" === b ? f / 36e5 : "day" === b ? (f - e) / 864e5 : "week" === b ? (f - e) / 6048e5 : f), c ? g : t(g)) : NaN) : NaN;
  }function gc(a, b) {
    var c,
        d,
        e = 12 * (b.year() - a.year()) + (b.month() - a.month()),
        f = a.clone().add(e, "months");return b - f < 0 ? (c = a.clone().add(e - 1, "months"), d = (b - f) / (f - c)) : (c = a.clone().add(e + 1, "months"), d = (b - f) / (c - f)), -(e + d) || 0;
  }function hc() {
    return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ");
  }function ic() {
    if (!this.isValid()) return null;var a = this.clone().utc();return a.year() < 0 || a.year() > 9999 ? X(a, "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]") : z(Date.prototype.toISOString) ? this.toDate().toISOString() : X(a, "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]");
  }function jc() {
    if (!this.isValid()) return "moment.invalid(/* " + this._i + " */)";var a = "moment",
        b = "";this.isLocal() || (a = 0 === this.utcOffset() ? "moment.utc" : "moment.parseZone", b = "Z");var c = "[" + a + '("]',
        d = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY",
        e = "-MM-DD[T]HH:mm:ss.SSS",
        f = b + '[")]';return this.format(c + d + e + f);
  }function kc(b) {
    b || (b = this.isUtc() ? a.defaultFormatUtc : a.defaultFormat);var c = X(this, b);return this.localeData().postformat(c);
  }function lc(a, b) {
    return this.isValid() && (s(a) && a.isValid() || tb(a).isValid()) ? Sb({ to: this, from: a }).locale(this.locale()).humanize(!b) : this.localeData().invalidDate();
  }function mc(a) {
    return this.from(tb(), a);
  }function nc(a, b) {
    return this.isValid() && (s(a) && a.isValid() || tb(a).isValid()) ? Sb({ from: this, to: a }).locale(this.locale()).humanize(!b) : this.localeData().invalidDate();
  }function oc(a) {
    return this.to(tb(), a);
  }function pc(a) {
    var b;return void 0 === a ? this._locale._abbr : (b = bb(a), null != b && (this._locale = b), this);
  }function qc() {
    return this._locale;
  }function rc(a) {
    switch (a = K(a)) {case "year":
        this.month(0);case "quarter":case "month":
        this.date(1);case "week":case "isoWeek":case "day":case "date":
        this.hours(0);case "hour":
        this.minutes(0);case "minute":
        this.seconds(0);case "second":
        this.milliseconds(0);}return "week" === a && this.weekday(0), "isoWeek" === a && this.isoWeekday(1), "quarter" === a && this.month(3 * Math.floor(this.month() / 3)), this;
  }function sc(a) {
    return a = K(a), void 0 === a || "millisecond" === a ? this : ("date" === a && (a = "day"), this.startOf(a).add(1, "isoWeek" === a ? "week" : a).subtract(1, "ms"));
  }function tc() {
    return this._d.valueOf() - 6e4 * (this._offset || 0);
  }function uc() {
    return Math.floor(this.valueOf() / 1e3);
  }function vc() {
    return new Date(this.valueOf());
  }function wc() {
    var a = this;return [a.year(), a.month(), a.date(), a.hour(), a.minute(), a.second(), a.millisecond()];
  }function xc() {
    var a = this;return { years: a.year(), months: a.month(), date: a.date(), hours: a.hours(), minutes: a.minutes(), seconds: a.seconds(), milliseconds: a.milliseconds() };
  }function yc() {
    return this.isValid() ? this.toISOString() : null;
  }function zc() {
    return o(this);
  }function Ac() {
    return k({}, n(this));
  }function Bc() {
    return n(this).overflow;
  }function Cc() {
    return { input: this._i, format: this._f, locale: this._locale, isUTC: this._isUTC, strict: this._strict };
  }function Dc(a, b) {
    U(0, [a, a.length], 0, b);
  }function Ec(a) {
    return Ic.call(this, a, this.week(), this.weekday(), this.localeData()._week.dow, this.localeData()._week.doy);
  }function Fc(a) {
    return Ic.call(this, a, this.isoWeek(), this.isoWeekday(), 1, 4);
  }function Gc() {
    return xa(this.year(), 1, 4);
  }function Hc() {
    var a = this.localeData()._week;return xa(this.year(), a.dow, a.doy);
  }function Ic(a, b, c, d, e) {
    var f;return null == a ? wa(this, d, e).year : (f = xa(a, d, e), b > f && (b = f), Jc.call(this, a, b, c, d, e));
  }function Jc(a, b, c, d, e) {
    var f = va(a, b, c, d, e),
        g = ta(f.year, 0, f.dayOfYear);return this.year(g.getUTCFullYear()), this.month(g.getUTCMonth()), this.date(g.getUTCDate()), this;
  }function Kc(a) {
    return null == a ? Math.ceil((this.month() + 1) / 3) : this.month(3 * (a - 1) + this.month() % 3);
  }function Lc(a) {
    var b = Math.round((this.clone().startOf("day") - this.clone().startOf("year")) / 864e5) + 1;return null == a ? b : this.add(a - b, "d");
  }function Mc(a, b) {
    b[kf] = u(1e3 * ("0." + a));
  }function Nc() {
    return this._isUTC ? "UTC" : "";
  }function Oc() {
    return this._isUTC ? "Coordinated Universal Time" : "";
  }function Pc(a) {
    return tb(1e3 * a);
  }function Qc() {
    return tb.apply(null, arguments).parseZone();
  }function Rc(a) {
    return a;
  }function Sc(a, b, c, d) {
    var e = bb(),
        f = l().set(d, b);return e[c](f, a);
  }function Tc(a, b, c) {
    if (g(a) && (b = a, a = void 0), a = a || "", null != b) return Sc(a, b, c, "month");var d,
        e = [];for (d = 0; d < 12; d++) {
      e[d] = Sc(a, d, c, "month");
    }return e;
  }function Uc(a, b, c, d) {
    "boolean" == typeof a ? (g(b) && (c = b, b = void 0), b = b || "") : (b = a, c = b, a = !1, g(b) && (c = b, b = void 0), b = b || "");var e = bb(),
        f = a ? e._week.dow : 0;if (null != c) return Sc(b, (c + f) % 7, d, "day");var h,
        i = [];for (h = 0; h < 7; h++) {
      i[h] = Sc(b, (h + f) % 7, d, "day");
    }return i;
  }function Vc(a, b) {
    return Tc(a, b, "months");
  }function Wc(a, b) {
    return Tc(a, b, "monthsShort");
  }function Xc(a, b, c) {
    return Uc(a, b, c, "weekdays");
  }function Yc(a, b, c) {
    return Uc(a, b, c, "weekdaysShort");
  }function Zc(a, b, c) {
    return Uc(a, b, c, "weekdaysMin");
  }function $c() {
    var a = this._data;return this._milliseconds = dg(this._milliseconds), this._days = dg(this._days), this._months = dg(this._months), a.milliseconds = dg(a.milliseconds), a.seconds = dg(a.seconds), a.minutes = dg(a.minutes), a.hours = dg(a.hours), a.months = dg(a.months), a.years = dg(a.years), this;
  }function _c(a, b, c, d) {
    var e = Sb(b, c);return a._milliseconds += d * e._milliseconds, a._days += d * e._days, a._months += d * e._months, a._bubble();
  }function ad(a, b) {
    return _c(this, a, b, 1);
  }function bd(a, b) {
    return _c(this, a, b, -1);
  }function cd(a) {
    return a < 0 ? Math.floor(a) : Math.ceil(a);
  }function dd() {
    var a,
        b,
        c,
        d,
        e,
        f = this._milliseconds,
        g = this._days,
        h = this._months,
        i = this._data;return f >= 0 && g >= 0 && h >= 0 || f <= 0 && g <= 0 && h <= 0 || (f += 864e5 * cd(fd(h) + g), g = 0, h = 0), i.milliseconds = f % 1e3, a = t(f / 1e3), i.seconds = a % 60, b = t(a / 60), i.minutes = b % 60, c = t(b / 60), i.hours = c % 24, g += t(c / 24), e = t(ed(g)), h += e, g -= cd(fd(e)), d = t(h / 12), h %= 12, i.days = g, i.months = h, i.years = d, this;
  }function ed(a) {
    return 4800 * a / 146097;
  }function fd(a) {
    return 146097 * a / 4800;
  }function gd(a) {
    if (!this.isValid()) return NaN;var b,
        c,
        d = this._milliseconds;if (a = K(a), "month" === a || "year" === a) return b = this._days + d / 864e5, c = this._months + ed(b), "month" === a ? c : c / 12;switch (b = this._days + Math.round(fd(this._months)), a) {case "week":
        return b / 7 + d / 6048e5;case "day":
        return b + d / 864e5;case "hour":
        return 24 * b + d / 36e5;case "minute":
        return 1440 * b + d / 6e4;case "second":
        return 86400 * b + d / 1e3;case "millisecond":
        return Math.floor(864e5 * b) + d;default:
        throw new Error("Unknown unit " + a);}
  }function hd() {
    return this.isValid() ? this._milliseconds + 864e5 * this._days + this._months % 12 * 2592e6 + 31536e6 * u(this._months / 12) : NaN;
  }function id(a) {
    return function () {
      return this.as(a);
    };
  }function jd(a) {
    return a = K(a), this.isValid() ? this[a + "s"]() : NaN;
  }function kd(a) {
    return function () {
      return this.isValid() ? this._data[a] : NaN;
    };
  }function ld() {
    return t(this.days() / 7);
  }function md(a, b, c, d, e) {
    return e.relativeTime(b || 1, !!c, a, d);
  }function nd(a, b, c) {
    var d = Sb(a).abs(),
        e = tg(d.as("s")),
        f = tg(d.as("m")),
        g = tg(d.as("h")),
        h = tg(d.as("d")),
        i = tg(d.as("M")),
        j = tg(d.as("y")),
        k = e <= ug.ss && ["s", e] || e < ug.s && ["ss", e] || f <= 1 && ["m"] || f < ug.m && ["mm", f] || g <= 1 && ["h"] || g < ug.h && ["hh", g] || h <= 1 && ["d"] || h < ug.d && ["dd", h] || i <= 1 && ["M"] || i < ug.M && ["MM", i] || j <= 1 && ["y"] || ["yy", j];return k[2] = b, k[3] = +a > 0, k[4] = c, md.apply(null, k);
  }function od(a) {
    return void 0 === a ? tg : "function" == typeof a && (tg = a, !0);
  }function pd(a, b) {
    return void 0 !== ug[a] && (void 0 === b ? ug[a] : (ug[a] = b, "s" === a && (ug.ss = b - 1), !0));
  }function qd(a) {
    if (!this.isValid()) return this.localeData().invalidDate();var b = this.localeData(),
        c = nd(this, !a, b);return a && (c = b.pastFuture(+this, c)), b.postformat(c);
  }function rd() {
    if (!this.isValid()) return this.localeData().invalidDate();var a,
        b,
        c,
        d = vg(this._milliseconds) / 1e3,
        e = vg(this._days),
        f = vg(this._months);a = t(d / 60), b = t(a / 60), d %= 60, a %= 60, c = t(f / 12), f %= 12;var g = c,
        h = f,
        i = e,
        j = b,
        k = a,
        l = d,
        m = this.asSeconds();return m ? (m < 0 ? "-" : "") + "P" + (g ? g + "Y" : "") + (h ? h + "M" : "") + (i ? i + "D" : "") + (j || k || l ? "T" : "") + (j ? j + "H" : "") + (k ? k + "M" : "") + (l ? l + "S" : "") : "P0D";
  }
  //! moment.js locale configuration
  //! locale : Belarusian [be]
  //! author : Dmitry Demidov : https://github.com/demidov91
  //! author: Praleska: http://praleska.pro/
  //! Author : Menelion Elensúle : https://github.com/Oire
  function sd(a, b) {
    var c = a.split("_");return b % 10 === 1 && b % 100 !== 11 ? c[0] : b % 10 >= 2 && b % 10 <= 4 && (b % 100 < 10 || b % 100 >= 20) ? c[1] : c[2];
  }function td(a, b, c) {
    var d = { mm: b ? "хвіліна_хвіліны_хвілін" : "хвіліну_хвіліны_хвілін", hh: b ? "гадзіна_гадзіны_гадзін" : "гадзіну_гадзіны_гадзін", dd: "дзень_дні_дзён", MM: "месяц_месяцы_месяцаў", yy: "год_гады_гадоў" };return "m" === c ? b ? "хвіліна" : "хвіліну" : "h" === c ? b ? "гадзіна" : "гадзіну" : a + " " + sd(d[c], +a);
  }
  //! moment.js locale configuration
  //! locale : Breton [br]
  //! author : Jean-Baptiste Le Duigou : https://github.com/jbleduigou
  function ud(a, b, c) {
    var d = { mm: "munutenn", MM: "miz", dd: "devezh" };return a + " " + xd(d[c], a);
  }function vd(a) {
    switch (wd(a)) {case 1:case 3:case 4:case 5:case 9:
        return a + " bloaz";default:
        return a + " vloaz";}
  }function wd(a) {
    return a > 9 ? wd(a % 10) : a;
  }function xd(a, b) {
    return 2 === b ? yd(a) : a;
  }function yd(a) {
    var b = { m: "v", b: "v", d: "z" };return void 0 === b[a.charAt(0)] ? a : b[a.charAt(0)] + a.substring(1);
  }
  //! moment.js locale configuration
  //! locale : Bosnian [bs]
  //! author : Nedim Cholich : https://github.com/frontyard
  //! based on (hr) translation by Bojan Marković
  function zd(a, b, c) {
    var d = a + " ";switch (c) {case "m":
        return b ? "jedna minuta" : "jedne minute";case "mm":
        return d += 1 === a ? "minuta" : 2 === a || 3 === a || 4 === a ? "minute" : "minuta";case "h":
        return b ? "jedan sat" : "jednog sata";case "hh":
        return d += 1 === a ? "sat" : 2 === a || 3 === a || 4 === a ? "sata" : "sati";case "dd":
        return d += 1 === a ? "dan" : "dana";case "MM":
        return d += 1 === a ? "mjesec" : 2 === a || 3 === a || 4 === a ? "mjeseca" : "mjeseci";case "yy":
        return d += 1 === a ? "godina" : 2 === a || 3 === a || 4 === a ? "godine" : "godina";}
  }function Ad(a) {
    return a > 1 && a < 5 && 1 !== ~~(a / 10);
  }function Bd(a, b, c, d) {
    var e = a + " ";switch (c) {case "s":
        return b || d ? "pár sekund" : "pár sekundami";case "m":
        return b ? "minuta" : d ? "minutu" : "minutou";case "mm":
        return b || d ? e + (Ad(a) ? "minuty" : "minut") : e + "minutami";break;case "h":
        return b ? "hodina" : d ? "hodinu" : "hodinou";case "hh":
        return b || d ? e + (Ad(a) ? "hodiny" : "hodin") : e + "hodinami";break;case "d":
        return b || d ? "den" : "dnem";case "dd":
        return b || d ? e + (Ad(a) ? "dny" : "dní") : e + "dny";break;case "M":
        return b || d ? "měsíc" : "měsícem";case "MM":
        return b || d ? e + (Ad(a) ? "měsíce" : "měsíců") : e + "měsíci";break;case "y":
        return b || d ? "rok" : "rokem";case "yy":
        return b || d ? e + (Ad(a) ? "roky" : "let") : e + "lety";}
  }
  //! moment.js locale configuration
  //! locale : German (Austria) [de-at]
  //! author : lluchs : https://github.com/lluchs
  //! author: Menelion Elensúle: https://github.com/Oire
  //! author : Martin Groller : https://github.com/MadMG
  //! author : Mikolaj Dadela : https://github.com/mik01aj
  function Cd(a, b, c, d) {
    var e = { m: ["eine Minute", "einer Minute"], h: ["eine Stunde", "einer Stunde"], d: ["ein Tag", "einem Tag"], dd: [a + " Tage", a + " Tagen"], M: ["ein Monat", "einem Monat"], MM: [a + " Monate", a + " Monaten"], y: ["ein Jahr", "einem Jahr"], yy: [a + " Jahre", a + " Jahren"] };return b ? e[c][0] : e[c][1];
  }
  //! moment.js locale configuration
  //! locale : German (Switzerland) [de-ch]
  //! author : sschueller : https://github.com/sschueller
  function Dd(a, b, c, d) {
    var e = { m: ["eine Minute", "einer Minute"], h: ["eine Stunde", "einer Stunde"], d: ["ein Tag", "einem Tag"], dd: [a + " Tage", a + " Tagen"], M: ["ein Monat", "einem Monat"], MM: [a + " Monate", a + " Monaten"], y: ["ein Jahr", "einem Jahr"], yy: [a + " Jahre", a + " Jahren"] };return b ? e[c][0] : e[c][1];
  }
  //! moment.js locale configuration
  //! locale : German [de]
  //! author : lluchs : https://github.com/lluchs
  //! author: Menelion Elensúle: https://github.com/Oire
  //! author : Mikolaj Dadela : https://github.com/mik01aj
  function Ed(a, b, c, d) {
    var e = { m: ["eine Minute", "einer Minute"], h: ["eine Stunde", "einer Stunde"], d: ["ein Tag", "einem Tag"], dd: [a + " Tage", a + " Tagen"], M: ["ein Monat", "einem Monat"], MM: [a + " Monate", a + " Monaten"], y: ["ein Jahr", "einem Jahr"], yy: [a + " Jahre", a + " Jahren"] };return b ? e[c][0] : e[c][1];
  }
  //! moment.js locale configuration
  //! locale : Estonian [et]
  //! author : Henry Kehlmann : https://github.com/madhenry
  //! improvements : Illimar Tambek : https://github.com/ragulka
  function Fd(a, b, c, d) {
    var e = { s: ["mõne sekundi", "mõni sekund", "paar sekundit"], m: ["ühe minuti", "üks minut"], mm: [a + " minuti", a + " minutit"], h: ["ühe tunni", "tund aega", "üks tund"], hh: [a + " tunni", a + " tundi"], d: ["ühe päeva", "üks päev"], M: ["kuu aja", "kuu aega", "üks kuu"], MM: [a + " kuu", a + " kuud"], y: ["ühe aasta", "aasta", "üks aasta"], yy: [a + " aasta", a + " aastat"] };return b ? e[c][2] ? e[c][2] : e[c][1] : d ? e[c][0] : e[c][1];
  }function Gd(a, b, c, d) {
    var e = "";switch (c) {case "s":
        return d ? "muutaman sekunnin" : "muutama sekunti";case "m":
        return d ? "minuutin" : "minuutti";case "mm":
        e = d ? "minuutin" : "minuuttia";break;case "h":
        return d ? "tunnin" : "tunti";case "hh":
        e = d ? "tunnin" : "tuntia";break;case "d":
        return d ? "päivän" : "päivä";case "dd":
        e = d ? "päivän" : "päivää";break;case "M":
        return d ? "kuukauden" : "kuukausi";case "MM":
        e = d ? "kuukauden" : "kuukautta";break;case "y":
        return d ? "vuoden" : "vuosi";case "yy":
        e = d ? "vuoden" : "vuotta";}return e = Hd(a, d) + " " + e;
  }function Hd(a, b) {
    return a < 10 ? b ? $g[a] : Zg[a] : a;
  }
  //! moment.js locale configuration
  //! locale : Konkani Latin script [gom-latn]
  //! author : The Discoverer : https://github.com/WikiDiscoverer
  function Id(a, b, c, d) {
    var e = { s: ["thodde secondanim", "thodde second"], m: ["eka mintan", "ek minute"], mm: [a + " mintanim", a + " mintam"], h: ["eka horan", "ek hor"], hh: [a + " horanim", a + " hor"], d: ["eka disan", "ek dis"], dd: [a + " disanim", a + " dis"], M: ["eka mhoinean", "ek mhoino"], MM: [a + " mhoineanim", a + " mhoine"], y: ["eka vorsan", "ek voros"], yy: [a + " vorsanim", a + " vorsam"] };return b ? e[c][0] : e[c][1];
  }
  //! moment.js locale configuration
  //! locale : Croatian [hr]
  //! author : Bojan Marković : https://github.com/bmarkovic
  function Jd(a, b, c) {
    var d = a + " ";switch (c) {case "m":
        return b ? "jedna minuta" : "jedne minute";case "mm":
        return d += 1 === a ? "minuta" : 2 === a || 3 === a || 4 === a ? "minute" : "minuta";case "h":
        return b ? "jedan sat" : "jednog sata";case "hh":
        return d += 1 === a ? "sat" : 2 === a || 3 === a || 4 === a ? "sata" : "sati";case "dd":
        return d += 1 === a ? "dan" : "dana";case "MM":
        return d += 1 === a ? "mjesec" : 2 === a || 3 === a || 4 === a ? "mjeseca" : "mjeseci";case "yy":
        return d += 1 === a ? "godina" : 2 === a || 3 === a || 4 === a ? "godine" : "godina";}
  }function Kd(a, b, c, d) {
    var e = a;switch (c) {case "s":
        return d || b ? "néhány másodperc" : "néhány másodperce";case "m":
        return "egy" + (d || b ? " perc" : " perce");case "mm":
        return e + (d || b ? " perc" : " perce");case "h":
        return "egy" + (d || b ? " óra" : " órája");case "hh":
        return e + (d || b ? " óra" : " órája");case "d":
        return "egy" + (d || b ? " nap" : " napja");case "dd":
        return e + (d || b ? " nap" : " napja");case "M":
        return "egy" + (d || b ? " hónap" : " hónapja");case "MM":
        return e + (d || b ? " hónap" : " hónapja");case "y":
        return "egy" + (d || b ? " év" : " éve");case "yy":
        return e + (d || b ? " év" : " éve");}return "";
  }function Ld(a) {
    return (a ? "" : "[múlt] ") + "[" + ih[this.day()] + "] LT[-kor]";
  }
  //! moment.js locale configuration
  //! locale : Icelandic [is]
  //! author : Hinrik Örn Sigurðsson : https://github.com/hinrik
  function Md(a) {
    return a % 100 === 11 || a % 10 !== 1;
  }function Nd(a, b, c, d) {
    var e = a + " ";switch (c) {case "s":
        return b || d ? "nokkrar sekúndur" : "nokkrum sekúndum";case "m":
        return b ? "mínúta" : "mínútu";case "mm":
        return Md(a) ? e + (b || d ? "mínútur" : "mínútum") : b ? e + "mínúta" : e + "mínútu";case "hh":
        return Md(a) ? e + (b || d ? "klukkustundir" : "klukkustundum") : e + "klukkustund";case "d":
        return b ? "dagur" : d ? "dag" : "degi";case "dd":
        return Md(a) ? b ? e + "dagar" : e + (d ? "daga" : "dögum") : b ? e + "dagur" : e + (d ? "dag" : "degi");case "M":
        return b ? "mánuður" : d ? "mánuð" : "mánuði";case "MM":
        return Md(a) ? b ? e + "mánuðir" : e + (d ? "mánuði" : "mánuðum") : b ? e + "mánuður" : e + (d ? "mánuð" : "mánuði");case "y":
        return b || d ? "ár" : "ári";case "yy":
        return Md(a) ? e + (b || d ? "ár" : "árum") : e + (b || d ? "ár" : "ári");}
  }
  //! moment.js locale configuration
  //! locale : Luxembourgish [lb]
  //! author : mweimerskirch : https://github.com/mweimerskirch
  //! author : David Raison : https://github.com/kwisatz
  function Od(a, b, c, d) {
    var e = { m: ["eng Minutt", "enger Minutt"], h: ["eng Stonn", "enger Stonn"], d: ["een Dag", "engem Dag"], M: ["ee Mount", "engem Mount"], y: ["ee Joer", "engem Joer"] };return b ? e[c][0] : e[c][1];
  }function Pd(a) {
    var b = a.substr(0, a.indexOf(" "));return Rd(b) ? "a " + a : "an " + a;
  }function Qd(a) {
    var b = a.substr(0, a.indexOf(" "));return Rd(b) ? "viru " + a : "virun " + a;
  }function Rd(a) {
    if (a = parseInt(a, 10), isNaN(a)) return !1;if (a < 0) return !0;if (a < 10) return 4 <= a && a <= 7;if (a < 100) {
      var b = a % 10,
          c = a / 10;return Rd(0 === b ? c : b);
    }if (a < 1e4) {
      for (; a >= 10;) {
        a /= 10;
      }return Rd(a);
    }return a /= 1e3, Rd(a);
  }function Sd(a, b, c, d) {
    return b ? "kelios sekundės" : d ? "kelių sekundžių" : "kelias sekundes";
  }function Td(a, b, c, d) {
    return b ? Vd(c)[0] : d ? Vd(c)[1] : Vd(c)[2];
  }function Ud(a) {
    return a % 10 === 0 || a > 10 && a < 20;
  }function Vd(a) {
    return nh[a].split("_");
  }function Wd(a, b, c, d) {
    var e = a + " ";return 1 === a ? e + Td(a, b, c[0], d) : b ? e + (Ud(a) ? Vd(c)[1] : Vd(c)[0]) : d ? e + Vd(c)[1] : e + (Ud(a) ? Vd(c)[1] : Vd(c)[2]);
  }function Xd(a, b, c) {
    return c ? b % 10 === 1 && b % 100 !== 11 ? a[2] : a[3] : b % 10 === 1 && b % 100 !== 11 ? a[0] : a[1];
  }function Yd(a, b, c) {
    return a + " " + Xd(oh[c], a, b);
  }function Zd(a, b, c) {
    return Xd(oh[c], a, b);
  }function $d(a, b) {
    return b ? "dažas sekundes" : "dažām sekundēm";
  }function _d(a, b, c, d) {
    var e = "";if (b) switch (c) {case "s":
        e = "काही सेकंद";break;case "m":
        e = "एक मिनिट";break;case "mm":
        e = "%d मिनिटे";break;case "h":
        e = "एक तास";break;case "hh":
        e = "%d तास";break;case "d":
        e = "एक दिवस";break;case "dd":
        e = "%d दिवस";break;case "M":
        e = "एक महिना";break;case "MM":
        e = "%d महिने";break;case "y":
        e = "एक वर्ष";break;case "yy":
        e = "%d वर्षे";} else switch (c) {case "s":
        e = "काही सेकंदां";break;case "m":
        e = "एका मिनिटा";break;case "mm":
        e = "%d मिनिटां";break;case "h":
        e = "एका तासा";break;case "hh":
        e = "%d तासां";break;case "d":
        e = "एका दिवसा";break;case "dd":
        e = "%d दिवसां";break;case "M":
        e = "एका महिन्या";break;case "MM":
        e = "%d महिन्यां";break;case "y":
        e = "एका वर्षा";break;case "yy":
        e = "%d वर्षां";}return e.replace(/%d/i, a);
  }function ae(a) {
    return a % 10 < 5 && a % 10 > 1 && ~~(a / 10) % 10 !== 1;
  }function be(a, b, c) {
    var d = a + " ";switch (c) {case "m":
        return b ? "minuta" : "minutę";case "mm":
        return d + (ae(a) ? "minuty" : "minut");case "h":
        return b ? "godzina" : "godzinę";case "hh":
        return d + (ae(a) ? "godziny" : "godzin");case "MM":
        return d + (ae(a) ? "miesiące" : "miesięcy");case "yy":
        return d + (ae(a) ? "lata" : "lat");}
  }
  //! moment.js locale configuration
  //! locale : Romanian [ro]
  //! author : Vlad Gurdiga : https://github.com/gurdiga
  //! author : Valentin Agachi : https://github.com/avaly
  function ce(a, b, c) {
    var d = { mm: "minute", hh: "ore", dd: "zile", MM: "luni", yy: "ani" },
        e = " ";return (a % 100 >= 20 || a >= 100 && a % 100 === 0) && (e = " de "), a + e + d[c];
  }
  //! moment.js locale configuration
  //! locale : Russian [ru]
  //! author : Viktorminator : https://github.com/Viktorminator
  //! Author : Menelion Elensúle : https://github.com/Oire
  //! author : Коренберг Марк : https://github.com/socketpair
  function de(a, b) {
    var c = a.split("_");return b % 10 === 1 && b % 100 !== 11 ? c[0] : b % 10 >= 2 && b % 10 <= 4 && (b % 100 < 10 || b % 100 >= 20) ? c[1] : c[2];
  }function ee(a, b, c) {
    var d = { mm: b ? "минута_минуты_минут" : "минуту_минуты_минут", hh: "час_часа_часов", dd: "день_дня_дней", MM: "месяц_месяца_месяцев", yy: "год_года_лет" };return "m" === c ? b ? "минута" : "минуту" : a + " " + de(d[c], +a);
  }function fe(a) {
    return a > 1 && a < 5;
  }function ge(a, b, c, d) {
    var e = a + " ";switch (c) {case "s":
        return b || d ? "pár sekúnd" : "pár sekundami";case "m":
        return b ? "minúta" : d ? "minútu" : "minútou";case "mm":
        return b || d ? e + (fe(a) ? "minúty" : "minút") : e + "minútami";break;case "h":
        return b ? "hodina" : d ? "hodinu" : "hodinou";case "hh":
        return b || d ? e + (fe(a) ? "hodiny" : "hodín") : e + "hodinami";break;case "d":
        return b || d ? "deň" : "dňom";case "dd":
        return b || d ? e + (fe(a) ? "dni" : "dní") : e + "dňami";break;case "M":
        return b || d ? "mesiac" : "mesiacom";case "MM":
        return b || d ? e + (fe(a) ? "mesiace" : "mesiacov") : e + "mesiacmi";break;case "y":
        return b || d ? "rok" : "rokom";case "yy":
        return b || d ? e + (fe(a) ? "roky" : "rokov") : e + "rokmi";}
  }
  //! moment.js locale configuration
  //! locale : Slovenian [sl]
  //! author : Robert Sedovšek : https://github.com/sedovsek
  function he(a, b, c, d) {
    var e = a + " ";switch (c) {case "s":
        return b || d ? "nekaj sekund" : "nekaj sekundami";case "m":
        return b ? "ena minuta" : "eno minuto";case "mm":
        return e += 1 === a ? b ? "minuta" : "minuto" : 2 === a ? b || d ? "minuti" : "minutama" : a < 5 ? b || d ? "minute" : "minutami" : b || d ? "minut" : "minutami";case "h":
        return b ? "ena ura" : "eno uro";case "hh":
        return e += 1 === a ? b ? "ura" : "uro" : 2 === a ? b || d ? "uri" : "urama" : a < 5 ? b || d ? "ure" : "urami" : b || d ? "ur" : "urami";case "d":
        return b || d ? "en dan" : "enim dnem";case "dd":
        return e += 1 === a ? b || d ? "dan" : "dnem" : 2 === a ? b || d ? "dni" : "dnevoma" : b || d ? "dni" : "dnevi";case "M":
        return b || d ? "en mesec" : "enim mesecem";case "MM":
        return e += 1 === a ? b || d ? "mesec" : "mesecem" : 2 === a ? b || d ? "meseca" : "mesecema" : a < 5 ? b || d ? "mesece" : "meseci" : b || d ? "mesecev" : "meseci";case "y":
        return b || d ? "eno leto" : "enim letom";case "yy":
        return e += 1 === a ? b || d ? "leto" : "letom" : 2 === a ? b || d ? "leti" : "letoma" : a < 5 ? b || d ? "leta" : "leti" : b || d ? "let" : "leti";}
  }function ie(a) {
    var b = a;return b = a.indexOf("jaj") !== -1 ? b.slice(0, -3) + "leS" : a.indexOf("jar") !== -1 ? b.slice(0, -3) + "waQ" : a.indexOf("DIS") !== -1 ? b.slice(0, -3) + "nem" : b + " pIq";
  }function je(a) {
    var b = a;return b = a.indexOf("jaj") !== -1 ? b.slice(0, -3) + "Hu’" : a.indexOf("jar") !== -1 ? b.slice(0, -3) + "wen" : a.indexOf("DIS") !== -1 ? b.slice(0, -3) + "ben" : b + " ret";
  }function ke(a, b, c, d) {
    var e = le(a);switch (c) {case "mm":
        return e + " tup";case "hh":
        return e + " rep";case "dd":
        return e + " jaj";case "MM":
        return e + " jar";case "yy":
        return e + " DIS";}
  }function le(a) {
    var b = Math.floor(a % 1e3 / 100),
        c = Math.floor(a % 100 / 10),
        d = a % 10,
        e = "";return b > 0 && (e += Rh[b] + "vatlh"), c > 0 && (e += ("" !== e ? " " : "") + Rh[c] + "maH"), d > 0 && (e += ("" !== e ? " " : "") + Rh[d]), "" === e ? "pagh" : e;
  }function me(a, b, c, d) {
    var e = { s: ["viensas secunds", "'iensas secunds"], m: ["'n míut", "'iens míut"], mm: [a + " míuts", "" + a + " míuts"], h: ["'n þora", "'iensa þora"], hh: [a + " þoras", "" + a + " þoras"], d: ["'n ziua", "'iensa ziua"], dd: [a + " ziuas", "" + a + " ziuas"], M: ["'n mes", "'iens mes"], MM: [a + " mesen", "" + a + " mesen"], y: ["'n ar", "'iens ar"], yy: [a + " ars", "" + a + " ars"] };return d ? e[c][0] : b ? e[c][0] : e[c][1];
  }
  //! moment.js locale configuration
  //! locale : Ukrainian [uk]
  //! author : zemlanin : https://github.com/zemlanin
  //! Author : Menelion Elensúle : https://github.com/Oire
  function ne(a, b) {
    var c = a.split("_");return b % 10 === 1 && b % 100 !== 11 ? c[0] : b % 10 >= 2 && b % 10 <= 4 && (b % 100 < 10 || b % 100 >= 20) ? c[1] : c[2];
  }function oe(a, b, c) {
    var d = { mm: b ? "хвилина_хвилини_хвилин" : "хвилину_хвилини_хвилин", hh: b ? "година_години_годин" : "годину_години_годин", dd: "день_дні_днів", MM: "місяць_місяці_місяців", yy: "рік_роки_років" };return "m" === c ? b ? "хвилина" : "хвилину" : "h" === c ? b ? "година" : "годину" : a + " " + ne(d[c], +a);
  }function pe(a, b) {
    var c = { nominative: "неділя_понеділок_вівторок_середа_четвер_п’ятниця_субота".split("_"), accusative: "неділю_понеділок_вівторок_середу_четвер_п’ятницю_суботу".split("_"), genitive: "неділі_понеділка_вівторка_середи_четверга_п’ятниці_суботи".split("_") };if (!a) return c.nominative;var d = /(\[[ВвУу]\]) ?dddd/.test(b) ? "accusative" : /\[?(?:минулої|наступної)? ?\] ?dddd/.test(b) ? "genitive" : "nominative";return c[d][a.day()];
  }function qe(a) {
    return function () {
      return a + "о" + (11 === this.hours() ? "б" : "") + "] LT";
    };
  }var re, se;se = Array.prototype.some ? Array.prototype.some : function (a) {
    for (var b = Object(this), c = b.length >>> 0, d = 0; d < c; d++) {
      if (d in b && a.call(this, b[d], d, b)) return !0;
    }return !1;
  };var te = se,
      ue = a.momentProperties = [],
      ve = !1,
      we = {};a.suppressDeprecationWarnings = !1, a.deprecationHandler = null;var xe;xe = Object.keys ? Object.keys : function (a) {
    var b,
        c = [];for (b in a) {
      j(a, b) && c.push(b);
    }return c;
  };var ye,
      ze = xe,
      Ae = { sameDay: "[Today at] LT", nextDay: "[Tomorrow at] LT", nextWeek: "dddd [at] LT", lastDay: "[Yesterday at] LT", lastWeek: "[Last] dddd [at] LT", sameElse: "L" },
      Be = { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" },
      Ce = "Invalid date",
      De = "%d",
      Ee = /\d{1,2}/,
      Fe = { future: "in %s", past: "%s ago", s: "a few seconds", ss: "%d seconds", m: "a minute", mm: "%d minutes", h: "an hour", hh: "%d hours", d: "a day", dd: "%d days", M: "a month", MM: "%d months", y: "a year", yy: "%d years" },
      Ge = {},
      He = {},
      Ie = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
      Je = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
      Ke = {},
      Le = {},
      Me = /\d/,
      Ne = /\d\d/,
      Oe = /\d{3}/,
      Pe = /\d{4}/,
      Qe = /[+-]?\d{6}/,
      Re = /\d\d?/,
      Se = /\d\d\d\d?/,
      Te = /\d\d\d\d\d\d?/,
      Ue = /\d{1,3}/,
      Ve = /\d{1,4}/,
      We = /[+-]?\d{1,6}/,
      Xe = /\d+/,
      Ye = /[+-]?\d+/,
      Ze = /Z|[+-]\d\d:?\d\d/gi,
      $e = /Z|[+-]\d\d(?::?\d\d)?/gi,
      _e = /[+-]?\d+(\.\d{1,3})?/,
      af = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i,
      bf = {},
      cf = {},
      df = 0,
      ef = 1,
      ff = 2,
      gf = 3,
      hf = 4,
      jf = 5,
      kf = 6,
      lf = 7,
      mf = 8;ye = Array.prototype.indexOf ? Array.prototype.indexOf : function (a) {
    var b;for (b = 0; b < this.length; ++b) {
      if (this[b] === a) return b;
    }return -1;
  };var nf = ye;U("M", ["MM", 2], "Mo", function () {
    return this.month() + 1;
  }), U("MMM", 0, 0, function (a) {
    return this.localeData().monthsShort(this, a);
  }), U("MMMM", 0, 0, function (a) {
    return this.localeData().months(this, a);
  }), J("month", "M"), M("month", 8), Z("M", Re), Z("MM", Re, Ne), Z("MMM", function (a, b) {
    return b.monthsShortRegex(a);
  }), Z("MMMM", function (a, b) {
    return b.monthsRegex(a);
  }), ba(["M", "MM"], function (a, b) {
    b[ef] = u(a) - 1;
  }), ba(["MMM", "MMMM"], function (a, b, c, d) {
    var e = c._locale.monthsParse(a, d, c._strict);null != e ? b[ef] = e : n(c).invalidMonth = a;
  });var of = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,
      pf = "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
      qf = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
      rf = af,
      sf = af;U("Y", 0, 0, function () {
    var a = this.year();return a <= 9999 ? "" + a : "+" + a;
  }), U(0, ["YY", 2], 0, function () {
    return this.year() % 100;
  }), U(0, ["YYYY", 4], 0, "year"), U(0, ["YYYYY", 5], 0, "year"), U(0, ["YYYYYY", 6, !0], 0, "year"), J("year", "y"), M("year", 1), Z("Y", Ye), Z("YY", Re, Ne), Z("YYYY", Ve, Pe), Z("YYYYY", We, Qe), Z("YYYYYY", We, Qe), ba(["YYYYY", "YYYYYY"], df), ba("YYYY", function (b, c) {
    c[df] = 2 === b.length ? a.parseTwoDigitYear(b) : u(b);
  }), ba("YY", function (b, c) {
    c[df] = a.parseTwoDigitYear(b);
  }), ba("Y", function (a, b) {
    b[df] = parseInt(a, 10);
  }), a.parseTwoDigitYear = function (a) {
    return u(a) + (u(a) > 68 ? 1900 : 2e3);
  };var tf = O("FullYear", !0);U("w", ["ww", 2], "wo", "week"), U("W", ["WW", 2], "Wo", "isoWeek"), J("week", "w"), J("isoWeek", "W"), M("week", 5), M("isoWeek", 5), Z("w", Re), Z("ww", Re, Ne), Z("W", Re), Z("WW", Re, Ne), ca(["w", "ww", "W", "WW"], function (a, b, c, d) {
    b[d.substr(0, 1)] = u(a);
  });var uf = { dow: 0, doy: 6 };U("d", 0, "do", "day"), U("dd", 0, 0, function (a) {
    return this.localeData().weekdaysMin(this, a);
  }), U("ddd", 0, 0, function (a) {
    return this.localeData().weekdaysShort(this, a);
  }), U("dddd", 0, 0, function (a) {
    return this.localeData().weekdays(this, a);
  }), U("e", 0, 0, "weekday"), U("E", 0, 0, "isoWeekday"), J("day", "d"), J("weekday", "e"), J("isoWeekday", "E"), M("day", 11), M("weekday", 11), M("isoWeekday", 11), Z("d", Re), Z("e", Re), Z("E", Re), Z("dd", function (a, b) {
    return b.weekdaysMinRegex(a);
  }), Z("ddd", function (a, b) {
    return b.weekdaysShortRegex(a);
  }), Z("dddd", function (a, b) {
    return b.weekdaysRegex(a);
  }), ca(["dd", "ddd", "dddd"], function (a, b, c, d) {
    var e = c._locale.weekdaysParse(a, d, c._strict);null != e ? b.d = e : n(c).invalidWeekday = a;
  }), ca(["d", "e", "E"], function (a, b, c, d) {
    b[d] = u(a);
  });var vf = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
      wf = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
      xf = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
      yf = af,
      zf = af,
      Af = af;U("H", ["HH", 2], 0, "hour"), U("h", ["hh", 2], 0, Ra), U("k", ["kk", 2], 0, Sa), U("hmm", 0, 0, function () {
    return "" + Ra.apply(this) + T(this.minutes(), 2);
  }), U("hmmss", 0, 0, function () {
    return "" + Ra.apply(this) + T(this.minutes(), 2) + T(this.seconds(), 2);
  }), U("Hmm", 0, 0, function () {
    return "" + this.hours() + T(this.minutes(), 2);
  }), U("Hmmss", 0, 0, function () {
    return "" + this.hours() + T(this.minutes(), 2) + T(this.seconds(), 2);
  }), Ta("a", !0), Ta("A", !1), J("hour", "h"), M("hour", 13), Z("a", Ua), Z("A", Ua), Z("H", Re), Z("h", Re), Z("k", Re), Z("HH", Re, Ne), Z("hh", Re, Ne), Z("kk", Re, Ne), Z("hmm", Se), Z("hmmss", Te), Z("Hmm", Se), Z("Hmmss", Te), ba(["H", "HH"], gf), ba(["k", "kk"], function (a, b, c) {
    var d = u(a);b[gf] = 24 === d ? 0 : d;
  }), ba(["a", "A"], function (a, b, c) {
    c._isPm = c._locale.isPM(a), c._meridiem = a;
  }), ba(["h", "hh"], function (a, b, c) {
    b[gf] = u(a), n(c).bigHour = !0;
  }), ba("hmm", function (a, b, c) {
    var d = a.length - 2;b[gf] = u(a.substr(0, d)), b[hf] = u(a.substr(d)), n(c).bigHour = !0;
  }), ba("hmmss", function (a, b, c) {
    var d = a.length - 4,
        e = a.length - 2;b[gf] = u(a.substr(0, d)), b[hf] = u(a.substr(d, 2)), b[jf] = u(a.substr(e)), n(c).bigHour = !0;
  }), ba("Hmm", function (a, b, c) {
    var d = a.length - 2;b[gf] = u(a.substr(0, d)), b[hf] = u(a.substr(d));
  }), ba("Hmmss", function (a, b, c) {
    var d = a.length - 4,
        e = a.length - 2;b[gf] = u(a.substr(0, d)), b[hf] = u(a.substr(d, 2)), b[jf] = u(a.substr(e));
  });var Bf,
      Cf = /[ap]\.?m?\.?/i,
      Df = O("Hours", !0),
      Ef = { calendar: Ae, longDateFormat: Be, invalidDate: Ce, ordinal: De, dayOfMonthOrdinalParse: Ee, relativeTime: Fe, months: pf, monthsShort: qf, week: uf, weekdays: vf, weekdaysMin: xf, weekdaysShort: wf, meridiemParse: Cf },
      Ff = {},
      Gf = {},
      Hf = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
      If = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
      Jf = /Z|[+-]\d\d(?::?\d\d)?/,
      Kf = [["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/], ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/], ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/], ["GGGG-[W]WW", /\d{4}-W\d\d/, !1], ["YYYY-DDD", /\d{4}-\d{3}/], ["YYYY-MM", /\d{4}-\d\d/, !1], ["YYYYYYMMDD", /[+-]\d{10}/], ["YYYYMMDD", /\d{8}/], ["GGGG[W]WWE", /\d{4}W\d{3}/], ["GGGG[W]WW", /\d{4}W\d{2}/, !1], ["YYYYDDD", /\d{7}/]],
      Lf = [["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/], ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/], ["HH:mm:ss", /\d\d:\d\d:\d\d/], ["HH:mm", /\d\d:\d\d/], ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/], ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/], ["HHmmss", /\d\d\d\d\d\d/], ["HHmm", /\d\d\d\d/], ["HH", /\d\d/]],
      Mf = /^\/?Date\((\-?\d+)/i,
      Nf = /^((?:Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d?\d\s(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(?:\d\d)?\d\d\s)(\d\d:\d\d)(\:\d\d)?(\s(?:UT|GMT|[ECMP][SD]T|[A-IK-Za-ik-z]|[+-]\d{4}))$/;a.createFromInputFallback = x("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged and will be removed in an upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.", function (a) {
    a._d = new Date(a._i + (a._useUTC ? " UTC" : ""));
  }), a.ISO_8601 = function () {}, a.RFC_2822 = function () {};var Of = x("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/", function () {
    var a = tb.apply(null, arguments);return this.isValid() && a.isValid() ? a < this ? this : a : p();
  }),
      Pf = x("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/", function () {
    var a = tb.apply(null, arguments);return this.isValid() && a.isValid() ? a > this ? this : a : p();
  }),
      Qf = function Qf() {
    return Date.now ? Date.now() : +new Date();
  },
      Rf = ["year", "quarter", "month", "week", "day", "hour", "minute", "second", "millisecond"];Db("Z", ":"), Db("ZZ", ""), Z("Z", $e), Z("ZZ", $e), ba(["Z", "ZZ"], function (a, b, c) {
    c._useUTC = !0, c._tzm = Eb($e, a);
  });var Sf = /([\+\-]|\d\d)/gi;a.updateOffset = function () {};var Tf = /^(\-)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/,
      Uf = /^(-)?P(?:(-?[0-9,.]*)Y)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)W)?(?:(-?[0-9,.]*)D)?(?:T(?:(-?[0-9,.]*)H)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)S)?)?$/;Sb.fn = Ab.prototype, Sb.invalid = zb;var Vf = Wb(1, "add"),
      Wf = Wb(-1, "subtract");a.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ", a.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";var Xf = x("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", function (a) {
    return void 0 === a ? this.localeData() : this.locale(a);
  });U(0, ["gg", 2], 0, function () {
    return this.weekYear() % 100;
  }), U(0, ["GG", 2], 0, function () {
    return this.isoWeekYear() % 100;
  }), Dc("gggg", "weekYear"), Dc("ggggg", "weekYear"), Dc("GGGG", "isoWeekYear"), Dc("GGGGG", "isoWeekYear"), J("weekYear", "gg"), J("isoWeekYear", "GG"), M("weekYear", 1), M("isoWeekYear", 1), Z("G", Ye), Z("g", Ye), Z("GG", Re, Ne), Z("gg", Re, Ne), Z("GGGG", Ve, Pe), Z("gggg", Ve, Pe), Z("GGGGG", We, Qe), Z("ggggg", We, Qe), ca(["gggg", "ggggg", "GGGG", "GGGGG"], function (a, b, c, d) {
    b[d.substr(0, 2)] = u(a);
  }), ca(["gg", "GG"], function (b, c, d, e) {
    c[e] = a.parseTwoDigitYear(b);
  }), U("Q", 0, "Qo", "quarter"), J("quarter", "Q"), M("quarter", 7), Z("Q", Me), ba("Q", function (a, b) {
    b[ef] = 3 * (u(a) - 1);
  }), U("D", ["DD", 2], "Do", "date"), J("date", "D"), M("date", 9), Z("D", Re), Z("DD", Re, Ne), Z("Do", function (a, b) {
    return a ? b._dayOfMonthOrdinalParse || b._ordinalParse : b._dayOfMonthOrdinalParseLenient;
  }), ba(["D", "DD"], ff), ba("Do", function (a, b) {
    b[ff] = u(a.match(Re)[0], 10);
  });var Yf = O("Date", !0);U("DDD", ["DDDD", 3], "DDDo", "dayOfYear"), J("dayOfYear", "DDD"), M("dayOfYear", 4), Z("DDD", Ue), Z("DDDD", Oe), ba(["DDD", "DDDD"], function (a, b, c) {
    c._dayOfYear = u(a);
  }), U("m", ["mm", 2], 0, "minute"), J("minute", "m"), M("minute", 14), Z("m", Re), Z("mm", Re, Ne), ba(["m", "mm"], hf);var Zf = O("Minutes", !1);U("s", ["ss", 2], 0, "second"), J("second", "s"), M("second", 15), Z("s", Re), Z("ss", Re, Ne), ba(["s", "ss"], jf);var $f = O("Seconds", !1);U("S", 0, 0, function () {
    return ~~(this.millisecond() / 100);
  }), U(0, ["SS", 2], 0, function () {
    return ~~(this.millisecond() / 10);
  }), U(0, ["SSS", 3], 0, "millisecond"), U(0, ["SSSS", 4], 0, function () {
    return 10 * this.millisecond();
  }), U(0, ["SSSSS", 5], 0, function () {
    return 100 * this.millisecond();
  }), U(0, ["SSSSSS", 6], 0, function () {
    return 1e3 * this.millisecond();
  }), U(0, ["SSSSSSS", 7], 0, function () {
    return 1e4 * this.millisecond();
  }), U(0, ["SSSSSSSS", 8], 0, function () {
    return 1e5 * this.millisecond();
  }), U(0, ["SSSSSSSSS", 9], 0, function () {
    return 1e6 * this.millisecond();
  }), J("millisecond", "ms"), M("millisecond", 16), Z("S", Ue, Me), Z("SS", Ue, Ne), Z("SSS", Ue, Oe);var _f;for (_f = "SSSS"; _f.length <= 9; _f += "S") {
    Z(_f, Xe);
  }for (_f = "S"; _f.length <= 9; _f += "S") {
    ba(_f, Mc);
  }var ag = O("Milliseconds", !1);U("z", 0, 0, "zoneAbbr"), U("zz", 0, 0, "zoneName");var bg = r.prototype;bg.add = Vf, bg.calendar = Zb, bg.clone = $b, bg.diff = fc, bg.endOf = sc, bg.format = kc, bg.from = lc, bg.fromNow = mc, bg.to = nc, bg.toNow = oc, bg.get = R, bg.invalidAt = Bc, bg.isAfter = _b, bg.isBefore = ac, bg.isBetween = bc, bg.isSame = cc, bg.isSameOrAfter = dc, bg.isSameOrBefore = ec, bg.isValid = zc, bg.lang = Xf, bg.locale = pc, bg.localeData = qc, bg.max = Pf, bg.min = Of, bg.parsingFlags = Ac, bg.set = S, bg.startOf = rc, bg.subtract = Wf, bg.toArray = wc, bg.toObject = xc, bg.toDate = vc, bg.toISOString = ic, bg.inspect = jc, bg.toJSON = yc, bg.toString = hc, bg.unix = uc, bg.valueOf = tc, bg.creationData = Cc, bg.year = tf, bg.isLeapYear = ra, bg.weekYear = Ec, bg.isoWeekYear = Fc, bg.quarter = bg.quarters = Kc, bg.month = ka, bg.daysInMonth = la, bg.week = bg.weeks = Ba, bg.isoWeek = bg.isoWeeks = Ca, bg.weeksInYear = Hc, bg.isoWeeksInYear = Gc, bg.date = Yf, bg.day = bg.days = Ka, bg.weekday = La, bg.isoWeekday = Ma, bg.dayOfYear = Lc, bg.hour = bg.hours = Df, bg.minute = bg.minutes = Zf, bg.second = bg.seconds = $f, bg.millisecond = bg.milliseconds = ag, bg.utcOffset = Hb, bg.utc = Jb, bg.local = Kb, bg.parseZone = Lb, bg.hasAlignedHourOffset = Mb, bg.isDST = Nb, bg.isLocal = Pb, bg.isUtcOffset = Qb, bg.isUtc = Rb, bg.isUTC = Rb, bg.zoneAbbr = Nc, bg.zoneName = Oc, bg.dates = x("dates accessor is deprecated. Use date instead.", Yf), bg.months = x("months accessor is deprecated. Use month instead", ka), bg.years = x("years accessor is deprecated. Use year instead", tf), bg.zone = x("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/", Ib), bg.isDSTShifted = x("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information", Ob);var cg = C.prototype;cg.calendar = D, cg.longDateFormat = E, cg.invalidDate = F, cg.ordinal = G, cg.preparse = Rc, cg.postformat = Rc, cg.relativeTime = H, cg.pastFuture = I, cg.set = A, cg.months = fa, cg.monthsShort = ga, cg.monthsParse = ia, cg.monthsRegex = na, cg.monthsShortRegex = ma, cg.week = ya, cg.firstDayOfYear = Aa, cg.firstDayOfWeek = za, cg.weekdays = Fa, cg.weekdaysMin = Ha, cg.weekdaysShort = Ga, cg.weekdaysParse = Ja, cg.weekdaysRegex = Na, cg.weekdaysShortRegex = Oa, cg.weekdaysMinRegex = Pa, cg.isPM = Va, cg.meridiem = Wa, $a("en", { dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/, ordinal: function ordinal(a) {
      var b = a % 10,
          c = 1 === u(a % 100 / 10) ? "th" : 1 === b ? "st" : 2 === b ? "nd" : 3 === b ? "rd" : "th";return a + c;
    } }), a.lang = x("moment.lang is deprecated. Use moment.locale instead.", $a), a.langData = x("moment.langData is deprecated. Use moment.localeData instead.", bb);var dg = Math.abs,
      eg = id("ms"),
      fg = id("s"),
      gg = id("m"),
      hg = id("h"),
      ig = id("d"),
      jg = id("w"),
      kg = id("M"),
      lg = id("y"),
      mg = kd("milliseconds"),
      ng = kd("seconds"),
      og = kd("minutes"),
      pg = kd("hours"),
      qg = kd("days"),
      rg = kd("months"),
      sg = kd("years"),
      tg = Math.round,
      ug = { ss: 44, s: 45, m: 45, h: 22, d: 26, M: 11 },
      vg = Math.abs,
      wg = Ab.prototype;wg.isValid = yb, wg.abs = $c, wg.add = ad, wg.subtract = bd, wg.as = gd, wg.asMilliseconds = eg, wg.asSeconds = fg, wg.asMinutes = gg, wg.asHours = hg, wg.asDays = ig, wg.asWeeks = jg, wg.asMonths = kg, wg.asYears = lg, wg.valueOf = hd, wg._bubble = dd, wg.get = jd, wg.milliseconds = mg, wg.seconds = ng, wg.minutes = og, wg.hours = pg, wg.days = qg, wg.weeks = ld, wg.months = rg, wg.years = sg, wg.humanize = qd, wg.toISOString = rd, wg.toString = rd, wg.toJSON = rd, wg.locale = pc, wg.localeData = qc, wg.toIsoString = x("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", rd), wg.lang = Xf, U("X", 0, 0, "unix"), U("x", 0, 0, "valueOf"), Z("x", Ye), Z("X", _e), ba("X", function (a, b, c) {
    c._d = new Date(1e3 * parseFloat(a, 10));
  }), ba("x", function (a, b, c) {
    c._d = new Date(u(a));
  }),
  //! moment.js
  //! version : 2.18.1
  //! authors : Tim Wood, Iskren Chernev, Moment.js contributors
  //! license : MIT
  //! momentjs.com
  a.version = "2.18.1", b(tb), a.fn = bg, a.min = vb, a.max = wb, a.now = Qf, a.utc = l, a.unix = Pc, a.months = Vc, a.isDate = h, a.locale = $a, a.invalid = p, a.duration = Sb, a.isMoment = s, a.weekdays = Xc, a.parseZone = Qc, a.localeData = bb, a.isDuration = Bb, a.monthsShort = Wc, a.weekdaysMin = Zc, a.defineLocale = _a, a.updateLocale = ab, a.locales = cb, a.weekdaysShort = Yc, a.normalizeUnits = K, a.relativeTimeRounding = od, a.relativeTimeThreshold = pd, a.calendarFormat = Yb, a.prototype = bg,
  //! moment.js locale configuration
  //! locale : Afrikaans [af]
  //! author : Werner Mollentze : https://github.com/wernerm
  a.defineLocale("af", { months: "Januarie_Februarie_Maart_April_Mei_Junie_Julie_Augustus_September_Oktober_November_Desember".split("_"), monthsShort: "Jan_Feb_Mrt_Apr_Mei_Jun_Jul_Aug_Sep_Okt_Nov_Des".split("_"), weekdays: "Sondag_Maandag_Dinsdag_Woensdag_Donderdag_Vrydag_Saterdag".split("_"), weekdaysShort: "Son_Maa_Din_Woe_Don_Vry_Sat".split("_"), weekdaysMin: "So_Ma_Di_Wo_Do_Vr_Sa".split("_"), meridiemParse: /vm|nm/i, isPM: function isPM(a) {
      return (/^nm$/i.test(a)
      );
    }, meridiem: function meridiem(a, b, c) {
      return a < 12 ? c ? "vm" : "VM" : c ? "nm" : "NM";
    }, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, calendar: { sameDay: "[Vandag om] LT", nextDay: "[Môre om] LT", nextWeek: "dddd [om] LT", lastDay: "[Gister om] LT", lastWeek: "[Laas] dddd [om] LT", sameElse: "L" }, relativeTime: { future: "oor %s", past: "%s gelede", s: "'n paar sekondes", m: "'n minuut", mm: "%d minute", h: "'n uur", hh: "%d ure", d: "'n dag", dd: "%d dae", M: "'n maand", MM: "%d maande", y: "'n jaar", yy: "%d jaar" }, dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/, ordinal: function ordinal(a) {
      return a + (1 === a || 8 === a || a >= 20 ? "ste" : "de");
    }, week: { dow: 1, doy: 4 } }),
  //! moment.js locale configuration
  //! locale : Arabic (Algeria) [ar-dz]
  //! author : Noureddine LOUAHEDJ : https://github.com/noureddineme
  a.defineLocale("ar-dz", { months: "جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"), monthsShort: "جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"), weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"), weekdaysShort: "احد_اثنين_ثلاثاء_اربعاء_خميس_جمعة_سبت".split("_"), weekdaysMin: "أح_إث_ثلا_أر_خم_جم_سب".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, calendar: { sameDay: "[اليوم على الساعة] LT", nextDay: "[غدا على الساعة] LT", nextWeek: "dddd [على الساعة] LT", lastDay: "[أمس على الساعة] LT", lastWeek: "dddd [على الساعة] LT", sameElse: "L" }, relativeTime: { future: "في %s", past: "منذ %s", s: "ثوان", m: "دقيقة", mm: "%d دقائق", h: "ساعة", hh: "%d ساعات", d: "يوم", dd: "%d أيام", M: "شهر", MM: "%d أشهر", y: "سنة", yy: "%d سنوات" }, week: { dow: 0, doy: 4 } }),
  //! moment.js locale configuration
  //! locale : Arabic (Kuwait) [ar-kw]
  //! author : Nusret Parlak: https://github.com/nusretparlak
  a.defineLocale("ar-kw", { months: "يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split("_"), monthsShort: "يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split("_"), weekdays: "الأحد_الإتنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"), weekdaysShort: "احد_اتنين_ثلاثاء_اربعاء_خميس_جمعة_سبت".split("_"), weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, calendar: { sameDay: "[اليوم على الساعة] LT", nextDay: "[غدا على الساعة] LT", nextWeek: "dddd [على الساعة] LT", lastDay: "[أمس على الساعة] LT", lastWeek: "dddd [على الساعة] LT", sameElse: "L" }, relativeTime: { future: "في %s", past: "منذ %s", s: "ثوان", m: "دقيقة", mm: "%d دقائق", h: "ساعة", hh: "%d ساعات", d: "يوم", dd: "%d أيام", M: "شهر", MM: "%d أشهر", y: "سنة", yy: "%d سنوات" }, week: { dow: 0, doy: 12 } });
  //! moment.js locale configuration
  //! locale : Arabic (Lybia) [ar-ly]
  //! author : Ali Hmer: https://github.com/kikoanis
  var xg = { 1: "1", 2: "2", 3: "3", 4: "4", 5: "5", 6: "6", 7: "7", 8: "8", 9: "9", 0: "0" },
      yg = function yg(a) {
    return 0 === a ? 0 : 1 === a ? 1 : 2 === a ? 2 : a % 100 >= 3 && a % 100 <= 10 ? 3 : a % 100 >= 11 ? 4 : 5;
  },
      zg = { s: ["أقل من ثانية", "ثانية واحدة", ["ثانيتان", "ثانيتين"], "%d ثوان", "%d ثانية", "%d ثانية"], m: ["أقل من دقيقة", "دقيقة واحدة", ["دقيقتان", "دقيقتين"], "%d دقائق", "%d دقيقة", "%d دقيقة"], h: ["أقل من ساعة", "ساعة واحدة", ["ساعتان", "ساعتين"], "%d ساعات", "%d ساعة", "%d ساعة"], d: ["أقل من يوم", "يوم واحد", ["يومان", "يومين"], "%d أيام", "%d يومًا", "%d يوم"], M: ["أقل من شهر", "شهر واحد", ["شهران", "شهرين"], "%d أشهر", "%d شهرا", "%d شهر"], y: ["أقل من عام", "عام واحد", ["عامان", "عامين"], "%d أعوام", "%d عامًا", "%d عام"] },
      Ag = function Ag(a) {
    return function (b, c, d, e) {
      var f = yg(b),
          g = zg[a][yg(b)];return 2 === f && (g = g[c ? 0 : 1]), g.replace(/%d/i, b);
    };
  },
      Bg = ["يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"];a.defineLocale("ar-ly", { months: Bg, monthsShort: Bg, weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"), weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"), weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "D/‏M/‏YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, meridiemParse: /ص|م/, isPM: function isPM(a) {
      return "م" === a;
    }, meridiem: function meridiem(a, b, c) {
      return a < 12 ? "ص" : "م";
    }, calendar: { sameDay: "[اليوم عند الساعة] LT", nextDay: "[غدًا عند الساعة] LT", nextWeek: "dddd [عند الساعة] LT", lastDay: "[أمس عند الساعة] LT", lastWeek: "dddd [عند الساعة] LT", sameElse: "L" }, relativeTime: { future: "بعد %s", past: "منذ %s", s: Ag("s"), m: Ag("m"), mm: Ag("m"), h: Ag("h"), hh: Ag("h"), d: Ag("d"), dd: Ag("d"), M: Ag("M"), MM: Ag("M"), y: Ag("y"), yy: Ag("y") }, preparse: function preparse(a) {
      return a.replace(/\u200f/g, "").replace(/،/g, ",");
    }, postformat: function postformat(a) {
      return a.replace(/\d/g, function (a) {
        return xg[a];
      }).replace(/,/g, "،");
    }, week: { dow: 6, doy: 12 } }),
  //! moment.js locale configuration
  //! locale : Arabic (Morocco) [ar-ma]
  //! author : ElFadili Yassine : https://github.com/ElFadiliY
  //! author : Abdel Said : https://github.com/abdelsaid
  a.defineLocale("ar-ma", { months: "يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split("_"), monthsShort: "يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split("_"), weekdays: "الأحد_الإتنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"), weekdaysShort: "احد_اتنين_ثلاثاء_اربعاء_خميس_جمعة_سبت".split("_"), weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, calendar: { sameDay: "[اليوم على الساعة] LT", nextDay: "[غدا على الساعة] LT", nextWeek: "dddd [على الساعة] LT", lastDay: "[أمس على الساعة] LT", lastWeek: "dddd [على الساعة] LT", sameElse: "L" }, relativeTime: { future: "في %s", past: "منذ %s", s: "ثوان", m: "دقيقة", mm: "%d دقائق", h: "ساعة", hh: "%d ساعات", d: "يوم", dd: "%d أيام", M: "شهر", MM: "%d أشهر", y: "سنة", yy: "%d سنوات" }, week: { dow: 6, doy: 12 } });
  //! moment.js locale configuration
  //! locale : Arabic (Saudi Arabia) [ar-sa]
  //! author : Suhail Alkowaileet : https://github.com/xsoh
  var Cg = { 1: "١", 2: "٢", 3: "٣", 4: "٤", 5: "٥", 6: "٦", 7: "٧", 8: "٨", 9: "٩", 0: "٠" },
      Dg = { "١": "1", "٢": "2", "٣": "3", "٤": "4", "٥": "5", "٦": "6", "٧": "7", "٨": "8", "٩": "9", "٠": "0" };a.defineLocale("ar-sa", { months: "يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"), monthsShort: "يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"), weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"), weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"), weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, meridiemParse: /ص|م/, isPM: function isPM(a) {
      return "م" === a;
    }, meridiem: function meridiem(a, b, c) {
      return a < 12 ? "ص" : "م";
    }, calendar: { sameDay: "[اليوم على الساعة] LT", nextDay: "[غدا على الساعة] LT", nextWeek: "dddd [على الساعة] LT", lastDay: "[أمس على الساعة] LT", lastWeek: "dddd [على الساعة] LT", sameElse: "L" }, relativeTime: { future: "في %s", past: "منذ %s", s: "ثوان", m: "دقيقة", mm: "%d دقائق", h: "ساعة", hh: "%d ساعات", d: "يوم", dd: "%d أيام", M: "شهر", MM: "%d أشهر", y: "سنة", yy: "%d سنوات" }, preparse: function preparse(a) {
      return a.replace(/[١٢٣٤٥٦٧٨٩٠]/g, function (a) {
        return Dg[a];
      }).replace(/،/g, ",");
    }, postformat: function postformat(a) {
      return a.replace(/\d/g, function (a) {
        return Cg[a];
      }).replace(/,/g, "،");
    }, week: { dow: 0, doy: 6 } }),
  //! moment.js locale configuration
  //! locale  :  Arabic (Tunisia) [ar-tn]
  //! author : Nader Toukabri : https://github.com/naderio
  a.defineLocale("ar-tn", { months: "جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"), monthsShort: "جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"), weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"), weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"), weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, calendar: { sameDay: "[اليوم على الساعة] LT", nextDay: "[غدا على الساعة] LT", nextWeek: "dddd [على الساعة] LT", lastDay: "[أمس على الساعة] LT", lastWeek: "dddd [على الساعة] LT", sameElse: "L" }, relativeTime: { future: "في %s", past: "منذ %s", s: "ثوان", m: "دقيقة", mm: "%d دقائق", h: "ساعة", hh: "%d ساعات", d: "يوم", dd: "%d أيام", M: "شهر", MM: "%d أشهر", y: "سنة", yy: "%d سنوات" }, week: { dow: 1, doy: 4 } });
  //! moment.js locale configuration
  //! locale : Arabic [ar]
  //! author : Abdel Said: https://github.com/abdelsaid
  //! author : Ahmed Elkhatib
  //! author : forabi https://github.com/forabi
  var Eg = { 1: "١", 2: "٢", 3: "٣", 4: "٤", 5: "٥", 6: "٦", 7: "٧", 8: "٨", 9: "٩", 0: "٠" },
      Fg = { "١": "1", "٢": "2", "٣": "3", "٤": "4", "٥": "5", "٦": "6", "٧": "7", "٨": "8", "٩": "9", "٠": "0" },
      Gg = function Gg(a) {
    return 0 === a ? 0 : 1 === a ? 1 : 2 === a ? 2 : a % 100 >= 3 && a % 100 <= 10 ? 3 : a % 100 >= 11 ? 4 : 5;
  },
      Hg = { s: ["أقل من ثانية", "ثانية واحدة", ["ثانيتان", "ثانيتين"], "%d ثوان", "%d ثانية", "%d ثانية"], m: ["أقل من دقيقة", "دقيقة واحدة", ["دقيقتان", "دقيقتين"], "%d دقائق", "%d دقيقة", "%d دقيقة"], h: ["أقل من ساعة", "ساعة واحدة", ["ساعتان", "ساعتين"], "%d ساعات", "%d ساعة", "%d ساعة"], d: ["أقل من يوم", "يوم واحد", ["يومان", "يومين"], "%d أيام", "%d يومًا", "%d يوم"], M: ["أقل من شهر", "شهر واحد", ["شهران", "شهرين"], "%d أشهر", "%d شهرا", "%d شهر"], y: ["أقل من عام", "عام واحد", ["عامان", "عامين"], "%d أعوام", "%d عامًا", "%d عام"] },
      Ig = function Ig(a) {
    return function (b, c, d, e) {
      var f = Gg(b),
          g = Hg[a][Gg(b)];return 2 === f && (g = g[c ? 0 : 1]), g.replace(/%d/i, b);
    };
  },
      Jg = ["كانون الثاني يناير", "شباط فبراير", "آذار مارس", "نيسان أبريل", "أيار مايو", "حزيران يونيو", "تموز يوليو", "آب أغسطس", "أيلول سبتمبر", "تشرين الأول أكتوبر", "تشرين الثاني نوفمبر", "كانون الأول ديسمبر"];a.defineLocale("ar", { months: Jg, monthsShort: Jg, weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"), weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"), weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "D/‏M/‏YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, meridiemParse: /ص|م/, isPM: function isPM(a) {
      return "م" === a;
    }, meridiem: function meridiem(a, b, c) {
      return a < 12 ? "ص" : "م";
    }, calendar: { sameDay: "[اليوم عند الساعة] LT", nextDay: "[غدًا عند الساعة] LT", nextWeek: "dddd [عند الساعة] LT", lastDay: "[أمس عند الساعة] LT", lastWeek: "dddd [عند الساعة] LT", sameElse: "L" }, relativeTime: { future: "بعد %s", past: "منذ %s", s: Ig("s"), m: Ig("m"), mm: Ig("m"), h: Ig("h"), hh: Ig("h"), d: Ig("d"), dd: Ig("d"), M: Ig("M"), MM: Ig("M"), y: Ig("y"), yy: Ig("y") }, preparse: function preparse(a) {
      return a.replace(/\u200f/g, "").replace(/[١٢٣٤٥٦٧٨٩٠]/g, function (a) {
        return Fg[a];
      }).replace(/،/g, ",");
    }, postformat: function postformat(a) {
      return a.replace(/\d/g, function (a) {
        return Eg[a];
      }).replace(/,/g, "،");
    }, week: { dow: 6, doy: 12 } });
  //! moment.js locale configuration
  //! locale : Azerbaijani [az]
  //! author : topchiyev : https://github.com/topchiyev
  var Kg = { 1: "-inci", 5: "-inci", 8: "-inci", 70: "-inci", 80: "-inci", 2: "-nci", 7: "-nci", 20: "-nci", 50: "-nci", 3: "-üncü", 4: "-üncü", 100: "-üncü", 6: "-ncı", 9: "-uncu", 10: "-uncu", 30: "-uncu", 60: "-ıncı", 90: "-ıncı" };a.defineLocale("az", { months: "yanvar_fevral_mart_aprel_may_iyun_iyul_avqust_sentyabr_oktyabr_noyabr_dekabr".split("_"), monthsShort: "yan_fev_mar_apr_may_iyn_iyl_avq_sen_okt_noy_dek".split("_"), weekdays: "Bazar_Bazar ertəsi_Çərşənbə axşamı_Çərşənbə_Cümə axşamı_Cümə_Şənbə".split("_"), weekdaysShort: "Baz_BzE_ÇAx_Çər_CAx_Cüm_Şən".split("_"), weekdaysMin: "Bz_BE_ÇA_Çə_CA_Cü_Şə".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, calendar: { sameDay: "[bugün saat] LT", nextDay: "[sabah saat] LT", nextWeek: "[gələn həftə] dddd [saat] LT", lastDay: "[dünən] LT", lastWeek: "[keçən həftə] dddd [saat] LT", sameElse: "L" }, relativeTime: { future: "%s sonra", past: "%s əvvəl", s: "birneçə saniyyə", m: "bir dəqiqə", mm: "%d dəqiqə", h: "bir saat", hh: "%d saat", d: "bir gün", dd: "%d gün", M: "bir ay", MM: "%d ay", y: "bir il", yy: "%d il" }, meridiemParse: /gecə|səhər|gündüz|axşam/, isPM: function isPM(a) {
      return (/^(gündüz|axşam)$/.test(a)
      );
    }, meridiem: function meridiem(a, b, c) {
      return a < 4 ? "gecə" : a < 12 ? "səhər" : a < 17 ? "gündüz" : "axşam";
    }, dayOfMonthOrdinalParse: /\d{1,2}-(ıncı|inci|nci|üncü|ncı|uncu)/, ordinal: function ordinal(a) {
      if (0 === a) return a + "-ıncı";var b = a % 10,
          c = a % 100 - b,
          d = a >= 100 ? 100 : null;return a + (Kg[b] || Kg[c] || Kg[d]);
    }, week: { dow: 1, doy: 7 } }), a.defineLocale("be", { months: { format: "студзеня_лютага_сакавіка_красавіка_траўня_чэрвеня_ліпеня_жніўня_верасня_кастрычніка_лістапада_снежня".split("_"), standalone: "студзень_люты_сакавік_красавік_травень_чэрвень_ліпень_жнівень_верасень_кастрычнік_лістапад_снежань".split("_") }, monthsShort: "студ_лют_сак_крас_трав_чэрв_ліп_жнів_вер_каст_ліст_снеж".split("_"), weekdays: { format: "нядзелю_панядзелак_аўторак_сераду_чацвер_пятніцу_суботу".split("_"), standalone: "нядзеля_панядзелак_аўторак_серада_чацвер_пятніца_субота".split("_"), isFormat: /\[ ?[Вв] ?(?:мінулую|наступную)? ?\] ?dddd/ }, weekdaysShort: "нд_пн_ат_ср_чц_пт_сб".split("_"), weekdaysMin: "нд_пн_ат_ср_чц_пт_сб".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY г.", LLL: "D MMMM YYYY г., HH:mm", LLLL: "dddd, D MMMM YYYY г., HH:mm" }, calendar: { sameDay: "[Сёння ў] LT", nextDay: "[Заўтра ў] LT", lastDay: "[Учора ў] LT", nextWeek: function nextWeek() {
        return "[У] dddd [ў] LT";
      }, lastWeek: function lastWeek() {
        switch (this.day()) {case 0:case 3:case 5:case 6:
            return "[У мінулую] dddd [ў] LT";case 1:case 2:case 4:
            return "[У мінулы] dddd [ў] LT";}
      }, sameElse: "L" }, relativeTime: { future: "праз %s", past: "%s таму", s: "некалькі секунд", m: td, mm: td, h: td, hh: td, d: "дзень", dd: td, M: "месяц", MM: td, y: "год", yy: td }, meridiemParse: /ночы|раніцы|дня|вечара/, isPM: function isPM(a) {
      return (/^(дня|вечара)$/.test(a)
      );
    }, meridiem: function meridiem(a, b, c) {
      return a < 4 ? "ночы" : a < 12 ? "раніцы" : a < 17 ? "дня" : "вечара";
    }, dayOfMonthOrdinalParse: /\d{1,2}-(і|ы|га)/, ordinal: function ordinal(a, b) {
      switch (b) {case "M":case "d":case "DDD":case "w":case "W":
          return a % 10 !== 2 && a % 10 !== 3 || a % 100 === 12 || a % 100 === 13 ? a + "-ы" : a + "-і";case "D":
          return a + "-га";default:
          return a;}
    }, week: { dow: 1, doy: 7 } }),
  //! moment.js locale configuration
  //! locale : Bulgarian [bg]
  //! author : Krasen Borisov : https://github.com/kraz
  a.defineLocale("bg", { months: "януари_февруари_март_април_май_юни_юли_август_септември_октомври_ноември_декември".split("_"), monthsShort: "янр_фев_мар_апр_май_юни_юли_авг_сеп_окт_ное_дек".split("_"), weekdays: "неделя_понеделник_вторник_сряда_четвъртък_петък_събота".split("_"), weekdaysShort: "нед_пон_вто_сря_чет_пет_съб".split("_"), weekdaysMin: "нд_пн_вт_ср_чт_пт_сб".split("_"), longDateFormat: { LT: "H:mm", LTS: "H:mm:ss", L: "D.MM.YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY H:mm", LLLL: "dddd, D MMMM YYYY H:mm" }, calendar: { sameDay: "[Днес в] LT", nextDay: "[Утре в] LT", nextWeek: "dddd [в] LT", lastDay: "[Вчера в] LT", lastWeek: function lastWeek() {
        switch (this.day()) {case 0:case 3:case 6:
            return "[В изминалата] dddd [в] LT";case 1:case 2:case 4:case 5:
            return "[В изминалия] dddd [в] LT";}
      }, sameElse: "L" }, relativeTime: { future: "след %s", past: "преди %s", s: "няколко секунди", m: "минута", mm: "%d минути", h: "час", hh: "%d часа", d: "ден", dd: "%d дни", M: "месец", MM: "%d месеца", y: "година", yy: "%d години" }, dayOfMonthOrdinalParse: /\d{1,2}-(ев|ен|ти|ви|ри|ми)/, ordinal: function ordinal(a) {
      var b = a % 10,
          c = a % 100;return 0 === a ? a + "-ев" : 0 === c ? a + "-ен" : c > 10 && c < 20 ? a + "-ти" : 1 === b ? a + "-ви" : 2 === b ? a + "-ри" : 7 === b || 8 === b ? a + "-ми" : a + "-ти";
    }, week: { dow: 1, doy: 7 } });
  //! moment.js locale configuration
  //! locale : Bengali [bn]
  //! author : Kaushik Gandhi : https://github.com/kaushikgandhi
  var Lg = { 1: "১", 2: "২", 3: "৩", 4: "৪", 5: "৫", 6: "৬", 7: "৭", 8: "৮", 9: "৯", 0: "০" },
      Mg = { "১": "1", "২": "2", "৩": "3", "৪": "4", "৫": "5", "৬": "6", "৭": "7", "৮": "8", "৯": "9", "০": "0" };a.defineLocale("bn", { months: "জানুয়ারী_ফেব্রুয়ারি_মার্চ_এপ্রিল_মে_জুন_জুলাই_আগস্ট_সেপ্টেম্বর_অক্টোবর_নভেম্বর_ডিসেম্বর".split("_"), monthsShort: "জানু_ফেব_মার্চ_এপ্র_মে_জুন_জুল_আগ_সেপ্ট_অক্টো_নভে_ডিসে".split("_"), weekdays: "রবিবার_সোমবার_মঙ্গলবার_বুধবার_বৃহস্পতিবার_শুক্রবার_শনিবার".split("_"), weekdaysShort: "রবি_সোম_মঙ্গল_বুধ_বৃহস্পতি_শুক্র_শনি".split("_"), weekdaysMin: "রবি_সোম_মঙ্গ_বুধ_বৃহঃ_শুক্র_শনি".split("_"), longDateFormat: { LT: "A h:mm সময়", LTS: "A h:mm:ss সময়", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY, A h:mm সময়", LLLL: "dddd, D MMMM YYYY, A h:mm সময়" }, calendar: { sameDay: "[আজ] LT", nextDay: "[আগামীকাল] LT", nextWeek: "dddd, LT", lastDay: "[গতকাল] LT", lastWeek: "[গত] dddd, LT", sameElse: "L" }, relativeTime: { future: "%s পরে", past: "%s আগে", s: "কয়েক সেকেন্ড", m: "এক মিনিট", mm: "%d মিনিট", h: "এক ঘন্টা", hh: "%d ঘন্টা", d: "এক দিন", dd: "%d দিন", M: "এক মাস", MM: "%d মাস", y: "এক বছর", yy: "%d বছর" }, preparse: function preparse(a) {
      return a.replace(/[১২৩৪৫৬৭৮৯০]/g, function (a) {
        return Mg[a];
      });
    }, postformat: function postformat(a) {
      return a.replace(/\d/g, function (a) {
        return Lg[a];
      });
    }, meridiemParse: /রাত|সকাল|দুপুর|বিকাল|রাত/, meridiemHour: function meridiemHour(a, b) {
      return 12 === a && (a = 0), "রাত" === b && a >= 4 || "দুপুর" === b && a < 5 || "বিকাল" === b ? a + 12 : a;
    }, meridiem: function meridiem(a, b, c) {
      return a < 4 ? "রাত" : a < 10 ? "সকাল" : a < 17 ? "দুপুর" : a < 20 ? "বিকাল" : "রাত";
    }, week: { dow: 0, doy: 6 } });
  //! moment.js locale configuration
  //! locale : Tibetan [bo]
  //! author : Thupten N. Chakrishar : https://github.com/vajradog
  var Ng = { 1: "༡", 2: "༢", 3: "༣", 4: "༤", 5: "༥", 6: "༦", 7: "༧", 8: "༨", 9: "༩", 0: "༠" },
      Og = { "༡": "1", "༢": "2", "༣": "3", "༤": "4", "༥": "5", "༦": "6", "༧": "7", "༨": "8", "༩": "9", "༠": "0" };a.defineLocale("bo", { months: "ཟླ་བ་དང་པོ_ཟླ་བ་གཉིས་པ_ཟླ་བ་གསུམ་པ_ཟླ་བ་བཞི་པ_ཟླ་བ་ལྔ་པ_ཟླ་བ་དྲུག་པ_ཟླ་བ་བདུན་པ_ཟླ་བ་བརྒྱད་པ_ཟླ་བ་དགུ་པ_ཟླ་བ་བཅུ་པ_ཟླ་བ་བཅུ་གཅིག་པ_ཟླ་བ་བཅུ་གཉིས་པ".split("_"), monthsShort: "ཟླ་བ་དང་པོ_ཟླ་བ་གཉིས་པ_ཟླ་བ་གསུམ་པ_ཟླ་བ་བཞི་པ_ཟླ་བ་ལྔ་པ_ཟླ་བ་དྲུག་པ_ཟླ་བ་བདུན་པ_ཟླ་བ་བརྒྱད་པ_ཟླ་བ་དགུ་པ_ཟླ་བ་བཅུ་པ_ཟླ་བ་བཅུ་གཅིག་པ_ཟླ་བ་བཅུ་གཉིས་པ".split("_"), weekdays: "གཟའ་ཉི་མ་_གཟའ་ཟླ་བ་_གཟའ་མིག་དམར་_གཟའ་ལྷག་པ་_གཟའ་ཕུར་བུ_གཟའ་པ་སངས་_གཟའ་སྤེན་པ་".split("_"), weekdaysShort: "ཉི་མ་_ཟླ་བ་_མིག་དམར་_ལྷག་པ་_ཕུར་བུ_པ་སངས་_སྤེན་པ་".split("_"), weekdaysMin: "ཉི་མ་_ཟླ་བ་_མིག་དམར་_ལྷག་པ་_ཕུར་བུ_པ་སངས་_སྤེན་པ་".split("_"), longDateFormat: { LT: "A h:mm", LTS: "A h:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY, A h:mm", LLLL: "dddd, D MMMM YYYY, A h:mm" }, calendar: { sameDay: "[དི་རིང] LT", nextDay: "[སང་ཉིན] LT", nextWeek: "[བདུན་ཕྲག་རྗེས་མ], LT", lastDay: "[ཁ་སང] LT", lastWeek: "[བདུན་ཕྲག་མཐའ་མ] dddd, LT", sameElse: "L" }, relativeTime: { future: "%s ལ་", past: "%s སྔན་ལ", s: "ལམ་སང", m: "སྐར་མ་གཅིག", mm: "%d སྐར་མ", h: "ཆུ་ཚོད་གཅིག", hh: "%d ཆུ་ཚོད", d: "ཉིན་གཅིག", dd: "%d ཉིན་", M: "ཟླ་བ་གཅིག", MM: "%d ཟླ་བ", y: "ལོ་གཅིག", yy: "%d ལོ" }, preparse: function preparse(a) {
      return a.replace(/[༡༢༣༤༥༦༧༨༩༠]/g, function (a) {
        return Og[a];
      });
    }, postformat: function postformat(a) {
      return a.replace(/\d/g, function (a) {
        return Ng[a];
      });
    }, meridiemParse: /མཚན་མོ|ཞོགས་ཀས|ཉིན་གུང|དགོང་དག|མཚན་མོ/, meridiemHour: function meridiemHour(a, b) {
      return 12 === a && (a = 0), "མཚན་མོ" === b && a >= 4 || "ཉིན་གུང" === b && a < 5 || "དགོང་དག" === b ? a + 12 : a;
    }, meridiem: function meridiem(a, b, c) {
      return a < 4 ? "མཚན་མོ" : a < 10 ? "ཞོགས་ཀས" : a < 17 ? "ཉིན་གུང" : a < 20 ? "དགོང་དག" : "མཚན་མོ";
    }, week: { dow: 0, doy: 6 } }), a.defineLocale("br", { months: "Genver_C'hwevrer_Meurzh_Ebrel_Mae_Mezheven_Gouere_Eost_Gwengolo_Here_Du_Kerzu".split("_"), monthsShort: "Gen_C'hwe_Meu_Ebr_Mae_Eve_Gou_Eos_Gwe_Her_Du_Ker".split("_"), weekdays: "Sul_Lun_Meurzh_Merc'her_Yaou_Gwener_Sadorn".split("_"), weekdaysShort: "Sul_Lun_Meu_Mer_Yao_Gwe_Sad".split("_"), weekdaysMin: "Su_Lu_Me_Mer_Ya_Gw_Sa".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "h[e]mm A", LTS: "h[e]mm:ss A", L: "DD/MM/YYYY", LL: "D [a viz] MMMM YYYY", LLL: "D [a viz] MMMM YYYY h[e]mm A", LLLL: "dddd, D [a viz] MMMM YYYY h[e]mm A" }, calendar: { sameDay: "[Hiziv da] LT", nextDay: "[Warc'hoazh da] LT", nextWeek: "dddd [da] LT", lastDay: "[Dec'h da] LT", lastWeek: "dddd [paset da] LT", sameElse: "L" }, relativeTime: { future: "a-benn %s", past: "%s 'zo", s: "un nebeud segondennoù", m: "ur vunutenn", mm: ud, h: "un eur", hh: "%d eur", d: "un devezh", dd: ud, M: "ur miz", MM: ud, y: "ur bloaz", yy: vd }, dayOfMonthOrdinalParse: /\d{1,2}(añ|vet)/, ordinal: function ordinal(a) {
      var b = 1 === a ? "añ" : "vet";return a + b;
    }, week: { dow: 1, doy: 4 } }), a.defineLocale("bs", { months: "januar_februar_mart_april_maj_juni_juli_august_septembar_oktobar_novembar_decembar".split("_"), monthsShort: "jan._feb._mar._apr._maj._jun._jul._aug._sep._okt._nov._dec.".split("_"), monthsParseExact: !0, weekdays: "nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota".split("_"), weekdaysShort: "ned._pon._uto._sri._čet._pet._sub.".split("_"), weekdaysMin: "ne_po_ut_sr_če_pe_su".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "H:mm", LTS: "H:mm:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY H:mm", LLLL: "dddd, D. MMMM YYYY H:mm" }, calendar: { sameDay: "[danas u] LT", nextDay: "[sutra u] LT", nextWeek: function nextWeek() {
        switch (this.day()) {case 0:
            return "[u] [nedjelju] [u] LT";case 3:
            return "[u] [srijedu] [u] LT";case 6:
            return "[u] [subotu] [u] LT";case 1:case 2:case 4:case 5:
            return "[u] dddd [u] LT";}
      }, lastDay: "[jučer u] LT", lastWeek: function lastWeek() {
        switch (this.day()) {case 0:case 3:
            return "[prošlu] dddd [u] LT";case 6:
            return "[prošle] [subote] [u] LT";case 1:case 2:case 4:case 5:
            return "[prošli] dddd [u] LT";}
      }, sameElse: "L" }, relativeTime: { future: "za %s", past: "prije %s", s: "par sekundi", m: zd, mm: zd, h: zd, hh: zd, d: "dan", dd: zd, M: "mjesec", MM: zd, y: "godinu", yy: zd }, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 7 } }),
  //! moment.js locale configuration
  //! locale : Catalan [ca]
  //! author : Juan G. Hurtado : https://github.com/juanghurtado
  a.defineLocale("ca", { months: { standalone: "gener_febrer_març_abril_maig_juny_juliol_agost_setembre_octubre_novembre_desembre".split("_"), format: "de gener_de febrer_de març_d'abril_de maig_de juny_de juliol_d'agost_de setembre_d'octubre_de novembre_de desembre".split("_"), isFormat: /D[oD]?(\s)+MMMM/ }, monthsShort: "gen._febr._març_abr._maig_juny_jul._ag._set._oct._nov._des.".split("_"), monthsParseExact: !0, weekdays: "diumenge_dilluns_dimarts_dimecres_dijous_divendres_dissabte".split("_"), weekdaysShort: "dg._dl._dt._dc._dj._dv._ds.".split("_"), weekdaysMin: "Dg_Dl_Dt_Dc_Dj_Dv_Ds".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "H:mm", LTS: "H:mm:ss", L: "DD/MM/YYYY", LL: "[el] D MMMM [de] YYYY", ll: "D MMM YYYY", LLL: "[el] D MMMM [de] YYYY [a les] H:mm", lll: "D MMM YYYY, H:mm", LLLL: "[el] dddd D MMMM [de] YYYY [a les] H:mm", llll: "ddd D MMM YYYY, H:mm" }, calendar: { sameDay: function sameDay() {
        return "[avui a " + (1 !== this.hours() ? "les" : "la") + "] LT";
      }, nextDay: function nextDay() {
        return "[demà a " + (1 !== this.hours() ? "les" : "la") + "] LT";
      }, nextWeek: function nextWeek() {
        return "dddd [a " + (1 !== this.hours() ? "les" : "la") + "] LT";
      }, lastDay: function lastDay() {
        return "[ahir a " + (1 !== this.hours() ? "les" : "la") + "] LT";
      }, lastWeek: function lastWeek() {
        return "[el] dddd [passat a " + (1 !== this.hours() ? "les" : "la") + "] LT";
      }, sameElse: "L" }, relativeTime: { future: "d'aquí %s", past: "fa %s", s: "uns segons", m: "un minut", mm: "%d minuts", h: "una hora", hh: "%d hores", d: "un dia", dd: "%d dies", M: "un mes", MM: "%d mesos", y: "un any", yy: "%d anys" }, dayOfMonthOrdinalParse: /\d{1,2}(r|n|t|è|a)/, ordinal: function ordinal(a, b) {
      var c = 1 === a ? "r" : 2 === a ? "n" : 3 === a ? "r" : 4 === a ? "t" : "è";return "w" !== b && "W" !== b || (c = "a"), a + c;
    }, week: { dow: 1, doy: 4 } });
  //! moment.js locale configuration
  //! locale : Czech [cs]
  //! author : petrbela : https://github.com/petrbela
  var Pg = "leden_únor_březen_duben_květen_červen_červenec_srpen_září_říjen_listopad_prosinec".split("_"),
      Qg = "led_úno_bře_dub_kvě_čvn_čvc_srp_zář_říj_lis_pro".split("_");a.defineLocale("cs", { months: Pg, monthsShort: Qg, monthsParse: function (a, b) {
      var c,
          d = [];for (c = 0; c < 12; c++) {
        d[c] = new RegExp("^" + a[c] + "$|^" + b[c] + "$", "i");
      }return d;
    }(Pg, Qg), shortMonthsParse: function (a) {
      var b,
          c = [];for (b = 0; b < 12; b++) {
        c[b] = new RegExp("^" + a[b] + "$", "i");
      }return c;
    }(Qg), longMonthsParse: function (a) {
      var b,
          c = [];for (b = 0; b < 12; b++) {
        c[b] = new RegExp("^" + a[b] + "$", "i");
      }return c;
    }(Pg), weekdays: "neděle_pondělí_úterý_středa_čtvrtek_pátek_sobota".split("_"), weekdaysShort: "ne_po_út_st_čt_pá_so".split("_"), weekdaysMin: "ne_po_út_st_čt_pá_so".split("_"), longDateFormat: { LT: "H:mm", LTS: "H:mm:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY H:mm", LLLL: "dddd D. MMMM YYYY H:mm", l: "D. M. YYYY" }, calendar: { sameDay: "[dnes v] LT", nextDay: "[zítra v] LT", nextWeek: function nextWeek() {
        switch (this.day()) {case 0:
            return "[v neděli v] LT";case 1:case 2:
            return "[v] dddd [v] LT";case 3:
            return "[ve středu v] LT";case 4:
            return "[ve čtvrtek v] LT";case 5:
            return "[v pátek v] LT";case 6:
            return "[v sobotu v] LT";}
      }, lastDay: "[včera v] LT", lastWeek: function lastWeek() {
        switch (this.day()) {case 0:
            return "[minulou neděli v] LT";case 1:case 2:
            return "[minulé] dddd [v] LT";case 3:
            return "[minulou středu v] LT";case 4:case 5:
            return "[minulý] dddd [v] LT";case 6:
            return "[minulou sobotu v] LT";}
      }, sameElse: "L" }, relativeTime: { future: "za %s", past: "před %s", s: Bd, m: Bd, mm: Bd, h: Bd, hh: Bd, d: Bd, dd: Bd, M: Bd, MM: Bd, y: Bd, yy: Bd }, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 4 } }),
  //! moment.js locale configuration
  //! locale : Chuvash [cv]
  //! author : Anatoly Mironov : https://github.com/mirontoli
  a.defineLocale("cv", { months: "кӑрлач_нарӑс_пуш_ака_май_ҫӗртме_утӑ_ҫурла_авӑн_юпа_чӳк_раштав".split("_"), monthsShort: "кӑр_нар_пуш_ака_май_ҫӗр_утӑ_ҫур_авн_юпа_чӳк_раш".split("_"), weekdays: "вырсарникун_тунтикун_ытларикун_юнкун_кӗҫнерникун_эрнекун_шӑматкун".split("_"), weekdaysShort: "выр_тун_ытл_юн_кӗҫ_эрн_шӑм".split("_"), weekdaysMin: "вр_тн_ыт_юн_кҫ_эр_шм".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD-MM-YYYY", LL: "YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ]", LLL: "YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ], HH:mm", LLLL: "dddd, YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ], HH:mm" }, calendar: { sameDay: "[Паян] LT [сехетре]", nextDay: "[Ыран] LT [сехетре]", lastDay: "[Ӗнер] LT [сехетре]", nextWeek: "[Ҫитес] dddd LT [сехетре]", lastWeek: "[Иртнӗ] dddd LT [сехетре]", sameElse: "L" }, relativeTime: { future: function future(a) {
        var b = /сехет$/i.exec(a) ? "рен" : /ҫул$/i.exec(a) ? "тан" : "ран";return a + b;
      }, past: "%s каялла", s: "пӗр-ик ҫеккунт", m: "пӗр минут", mm: "%d минут", h: "пӗр сехет", hh: "%d сехет", d: "пӗр кун", dd: "%d кун", M: "пӗр уйӑх", MM: "%d уйӑх", y: "пӗр ҫул", yy: "%d ҫул" }, dayOfMonthOrdinalParse: /\d{1,2}-мӗш/, ordinal: "%d-мӗш", week: { dow: 1, doy: 7 } }),
  //! moment.js locale configuration
  //! locale : Welsh [cy]
  //! author : Robert Allen : https://github.com/robgallen
  //! author : https://github.com/ryangreaves
  a.defineLocale("cy", { months: "Ionawr_Chwefror_Mawrth_Ebrill_Mai_Mehefin_Gorffennaf_Awst_Medi_Hydref_Tachwedd_Rhagfyr".split("_"), monthsShort: "Ion_Chwe_Maw_Ebr_Mai_Meh_Gor_Aws_Med_Hyd_Tach_Rhag".split("_"), weekdays: "Dydd Sul_Dydd Llun_Dydd Mawrth_Dydd Mercher_Dydd Iau_Dydd Gwener_Dydd Sadwrn".split("_"), weekdaysShort: "Sul_Llun_Maw_Mer_Iau_Gwe_Sad".split("_"), weekdaysMin: "Su_Ll_Ma_Me_Ia_Gw_Sa".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, calendar: { sameDay: "[Heddiw am] LT", nextDay: "[Yfory am] LT", nextWeek: "dddd [am] LT", lastDay: "[Ddoe am] LT", lastWeek: "dddd [diwethaf am] LT", sameElse: "L" }, relativeTime: { future: "mewn %s", past: "%s yn ôl", s: "ychydig eiliadau", m: "munud", mm: "%d munud", h: "awr", hh: "%d awr", d: "diwrnod", dd: "%d diwrnod", M: "mis", MM: "%d mis", y: "blwyddyn", yy: "%d flynedd" }, dayOfMonthOrdinalParse: /\d{1,2}(fed|ain|af|il|ydd|ed|eg)/, ordinal: function ordinal(a) {
      var b = a,
          c = "",
          d = ["", "af", "il", "ydd", "ydd", "ed", "ed", "ed", "fed", "fed", "fed", "eg", "fed", "eg", "eg", "fed", "eg", "eg", "fed", "eg", "fed"];return b > 20 ? c = 40 === b || 50 === b || 60 === b || 80 === b || 100 === b ? "fed" : "ain" : b > 0 && (c = d[b]), a + c;
    }, week: { dow: 1, doy: 4 } }),
  //! moment.js locale configuration
  //! locale : Danish [da]
  //! author : Ulrik Nielsen : https://github.com/mrbase
  a.defineLocale("da", { months: "januar_februar_marts_april_maj_juni_juli_august_september_oktober_november_december".split("_"), monthsShort: "jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split("_"), weekdays: "søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag".split("_"), weekdaysShort: "søn_man_tir_ons_tor_fre_lør".split("_"), weekdaysMin: "sø_ma_ti_on_to_fr_lø".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY HH:mm", LLLL: "dddd [d.] D. MMMM YYYY [kl.] HH:mm" }, calendar: { sameDay: "[i dag kl.] LT", nextDay: "[i morgen kl.] LT", nextWeek: "på dddd [kl.] LT", lastDay: "[i går kl.] LT", lastWeek: "[i] dddd[s kl.] LT", sameElse: "L" }, relativeTime: { future: "om %s", past: "%s siden", s: "få sekunder", m: "et minut", mm: "%d minutter", h: "en time", hh: "%d timer", d: "en dag", dd: "%d dage", M: "en måned", MM: "%d måneder", y: "et år", yy: "%d år" }, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 4 } }), a.defineLocale("de-at", { months: "Jänner_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"), monthsShort: "Jän._Febr._Mrz._Apr._Mai_Jun._Jul._Aug._Sept._Okt._Nov._Dez.".split("_"), monthsParseExact: !0, weekdays: "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"), weekdaysShort: "So._Mo._Di._Mi._Do._Fr._Sa.".split("_"), weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY HH:mm", LLLL: "dddd, D. MMMM YYYY HH:mm" }, calendar: { sameDay: "[heute um] LT [Uhr]", sameElse: "L", nextDay: "[morgen um] LT [Uhr]", nextWeek: "dddd [um] LT [Uhr]", lastDay: "[gestern um] LT [Uhr]", lastWeek: "[letzten] dddd [um] LT [Uhr]" }, relativeTime: { future: "in %s", past: "vor %s", s: "ein paar Sekunden", m: Cd, mm: "%d Minuten", h: Cd, hh: "%d Stunden", d: Cd, dd: Cd, M: Cd, MM: Cd, y: Cd, yy: Cd }, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 4 } }), a.defineLocale("de-ch", { months: "Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"), monthsShort: "Jan._Febr._März_April_Mai_Juni_Juli_Aug._Sept._Okt._Nov._Dez.".split("_"), monthsParseExact: !0, weekdays: "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"), weekdaysShort: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"), weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH.mm", LTS: "HH.mm.ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY HH.mm", LLLL: "dddd, D. MMMM YYYY HH.mm" }, calendar: { sameDay: "[heute um] LT [Uhr]", sameElse: "L", nextDay: "[morgen um] LT [Uhr]", nextWeek: "dddd [um] LT [Uhr]", lastDay: "[gestern um] LT [Uhr]", lastWeek: "[letzten] dddd [um] LT [Uhr]" }, relativeTime: { future: "in %s", past: "vor %s", s: "ein paar Sekunden", m: Dd, mm: "%d Minuten", h: Dd, hh: "%d Stunden", d: Dd, dd: Dd, M: Dd, MM: Dd, y: Dd, yy: Dd }, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 4 } }), a.defineLocale("de", { months: "Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"), monthsShort: "Jan._Febr._Mrz._Apr._Mai_Jun._Jul._Aug._Sept._Okt._Nov._Dez.".split("_"), monthsParseExact: !0, weekdays: "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"), weekdaysShort: "So._Mo._Di._Mi._Do._Fr._Sa.".split("_"), weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY HH:mm", LLLL: "dddd, D. MMMM YYYY HH:mm" }, calendar: { sameDay: "[heute um] LT [Uhr]", sameElse: "L", nextDay: "[morgen um] LT [Uhr]", nextWeek: "dddd [um] LT [Uhr]", lastDay: "[gestern um] LT [Uhr]", lastWeek: "[letzten] dddd [um] LT [Uhr]" }, relativeTime: { future: "in %s", past: "vor %s", s: "ein paar Sekunden", m: Ed, mm: "%d Minuten", h: Ed, hh: "%d Stunden", d: Ed, dd: Ed, M: Ed, MM: Ed, y: Ed, yy: Ed }, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 4 } });
  //! moment.js locale configuration
  //! locale : Maldivian [dv]
  //! author : Jawish Hameed : https://github.com/jawish
  var Rg = ["ޖެނުއަރީ", "ފެބްރުއަރީ", "މާރިޗު", "އޭޕްރީލު", "މޭ", "ޖޫން", "ޖުލައި", "އޯގަސްޓު", "ސެޕްޓެމްބަރު", "އޮކްޓޯބަރު", "ނޮވެމްބަރު", "ޑިސެމްބަރު"],
      Sg = ["އާދިއްތަ", "ހޯމަ", "އަންގާރަ", "ބުދަ", "ބުރާސްފަތި", "ހުކުރު", "ހޮނިހިރު"];a.defineLocale("dv", { months: Rg, monthsShort: Rg, weekdays: Sg, weekdaysShort: Sg, weekdaysMin: "އާދި_ހޯމަ_އަން_ބުދަ_ބުރާ_ހުކު_ހޮނި".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "D/M/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, meridiemParse: /މކ|މފ/, isPM: function isPM(a) {
      return "މފ" === a;
    }, meridiem: function meridiem(a, b, c) {
      return a < 12 ? "މކ" : "މފ";
    }, calendar: { sameDay: "[މިއަދު] LT", nextDay: "[މާދަމާ] LT", nextWeek: "dddd LT", lastDay: "[އިއްޔެ] LT", lastWeek: "[ފާއިތުވި] dddd LT", sameElse: "L" }, relativeTime: { future: "ތެރޭގައި %s", past: "ކުރިން %s", s: "ސިކުންތުކޮޅެއް", m: "މިނިޓެއް", mm: "މިނިޓު %d", h: "ގަޑިއިރެއް", hh: "ގަޑިއިރު %d", d: "ދުވަހެއް", dd: "ދުވަސް %d", M: "މަހެއް", MM: "މަސް %d", y: "އަހަރެއް", yy: "އަހަރު %d" }, preparse: function preparse(a) {
      return a.replace(/،/g, ",");
    }, postformat: function postformat(a) {
      return a.replace(/,/g, "،");
    }, week: { dow: 7, doy: 12 } }),
  //! moment.js locale configuration
  //! locale : Greek [el]
  //! author : Aggelos Karalias : https://github.com/mehiel
  a.defineLocale("el", { monthsNominativeEl: "Ιανουάριος_Φεβρουάριος_Μάρτιος_Απρίλιος_Μάιος_Ιούνιος_Ιούλιος_Αύγουστος_Σεπτέμβριος_Οκτώβριος_Νοέμβριος_Δεκέμβριος".split("_"), monthsGenitiveEl: "Ιανουαρίου_Φεβρουαρίου_Μαρτίου_Απριλίου_Μαΐου_Ιουνίου_Ιουλίου_Αυγούστου_Σεπτεμβρίου_Οκτωβρίου_Νοεμβρίου_Δεκεμβρίου".split("_"), months: function months(a, b) {
      return a ? /D/.test(b.substring(0, b.indexOf("MMMM"))) ? this._monthsGenitiveEl[a.month()] : this._monthsNominativeEl[a.month()] : this._monthsNominativeEl;
    }, monthsShort: "Ιαν_Φεβ_Μαρ_Απρ_Μαϊ_Ιουν_Ιουλ_Αυγ_Σεπ_Οκτ_Νοε_Δεκ".split("_"), weekdays: "Κυριακή_Δευτέρα_Τρίτη_Τετάρτη_Πέμπτη_Παρασκευή_Σάββατο".split("_"), weekdaysShort: "Κυρ_Δευ_Τρι_Τετ_Πεμ_Παρ_Σαβ".split("_"), weekdaysMin: "Κυ_Δε_Τρ_Τε_Πε_Πα_Σα".split("_"), meridiem: function meridiem(a, b, c) {
      return a > 11 ? c ? "μμ" : "ΜΜ" : c ? "πμ" : "ΠΜ";
    }, isPM: function isPM(a) {
      return "μ" === (a + "").toLowerCase()[0];
    }, meridiemParse: /[ΠΜ]\.?Μ?\.?/i, longDateFormat: { LT: "h:mm A", LTS: "h:mm:ss A", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY h:mm A", LLLL: "dddd, D MMMM YYYY h:mm A" }, calendarEl: { sameDay: "[Σήμερα {}] LT", nextDay: "[Αύριο {}] LT", nextWeek: "dddd [{}] LT", lastDay: "[Χθες {}] LT", lastWeek: function lastWeek() {
        switch (this.day()) {case 6:
            return "[το προηγούμενο] dddd [{}] LT";default:
            return "[την προηγούμενη] dddd [{}] LT";}
      }, sameElse: "L" }, calendar: function calendar(a, b) {
      var c = this._calendarEl[a],
          d = b && b.hours();return z(c) && (c = c.apply(b)), c.replace("{}", d % 12 === 1 ? "στη" : "στις");
    }, relativeTime: { future: "σε %s", past: "%s πριν", s: "λίγα δευτερόλεπτα", m: "ένα λεπτό", mm: "%d λεπτά", h: "μία ώρα", hh: "%d ώρες", d: "μία μέρα", dd: "%d μέρες", M: "ένας μήνας", MM: "%d μήνες", y: "ένας χρόνος", yy: "%d χρόνια" }, dayOfMonthOrdinalParse: /\d{1,2}η/, ordinal: "%dη", week: { dow: 1, doy: 4 } }),
  //! moment.js locale configuration
  //! locale : English (Australia) [en-au]
  //! author : Jared Morse : https://github.com/jarcoal
  a.defineLocale("en-au", { months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), longDateFormat: { LT: "h:mm A", LTS: "h:mm:ss A", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY h:mm A", LLLL: "dddd, D MMMM YYYY h:mm A" }, calendar: { sameDay: "[Today at] LT", nextDay: "[Tomorrow at] LT", nextWeek: "dddd [at] LT", lastDay: "[Yesterday at] LT", lastWeek: "[Last] dddd [at] LT", sameElse: "L" }, relativeTime: { future: "in %s", past: "%s ago", s: "a few seconds", m: "a minute", mm: "%d minutes", h: "an hour", hh: "%d hours", d: "a day", dd: "%d days", M: "a month", MM: "%d months", y: "a year", yy: "%d years" }, dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/, ordinal: function ordinal(a) {
      var b = a % 10,
          c = 1 === ~~(a % 100 / 10) ? "th" : 1 === b ? "st" : 2 === b ? "nd" : 3 === b ? "rd" : "th";return a + c;
    }, week: { dow: 1, doy: 4 } }),
  //! moment.js locale configuration
  //! locale : English (Canada) [en-ca]
  //! author : Jonathan Abourbih : https://github.com/jonbca
  a.defineLocale("en-ca", { months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), longDateFormat: { LT: "h:mm A", LTS: "h:mm:ss A", L: "YYYY-MM-DD", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" }, calendar: { sameDay: "[Today at] LT", nextDay: "[Tomorrow at] LT", nextWeek: "dddd [at] LT", lastDay: "[Yesterday at] LT", lastWeek: "[Last] dddd [at] LT", sameElse: "L" }, relativeTime: { future: "in %s", past: "%s ago", s: "a few seconds", m: "a minute", mm: "%d minutes", h: "an hour", hh: "%d hours", d: "a day", dd: "%d days", M: "a month", MM: "%d months", y: "a year", yy: "%d years" }, dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/, ordinal: function ordinal(a) {
      var b = a % 10,
          c = 1 === ~~(a % 100 / 10) ? "th" : 1 === b ? "st" : 2 === b ? "nd" : 3 === b ? "rd" : "th";return a + c;
    } }),
  //! moment.js locale configuration
  //! locale : English (United Kingdom) [en-gb]
  //! author : Chris Gedrim : https://github.com/chrisgedrim
  a.defineLocale("en-gb", { months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, calendar: { sameDay: "[Today at] LT", nextDay: "[Tomorrow at] LT", nextWeek: "dddd [at] LT", lastDay: "[Yesterday at] LT", lastWeek: "[Last] dddd [at] LT", sameElse: "L" }, relativeTime: { future: "in %s", past: "%s ago", s: "a few seconds", m: "a minute", mm: "%d minutes", h: "an hour", hh: "%d hours", d: "a day", dd: "%d days", M: "a month", MM: "%d months", y: "a year", yy: "%d years" }, dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/, ordinal: function ordinal(a) {
      var b = a % 10,
          c = 1 === ~~(a % 100 / 10) ? "th" : 1 === b ? "st" : 2 === b ? "nd" : 3 === b ? "rd" : "th";return a + c;
    }, week: { dow: 1, doy: 4 } }),
  //! moment.js locale configuration
  //! locale : English (Ireland) [en-ie]
  //! author : Chris Cartlidge : https://github.com/chriscartlidge
  a.defineLocale("en-ie", { months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD-MM-YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, calendar: { sameDay: "[Today at] LT", nextDay: "[Tomorrow at] LT", nextWeek: "dddd [at] LT", lastDay: "[Yesterday at] LT", lastWeek: "[Last] dddd [at] LT", sameElse: "L" }, relativeTime: { future: "in %s", past: "%s ago", s: "a few seconds", m: "a minute", mm: "%d minutes", h: "an hour", hh: "%d hours", d: "a day", dd: "%d days", M: "a month", MM: "%d months", y: "a year", yy: "%d years" }, dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/, ordinal: function ordinal(a) {
      var b = a % 10,
          c = 1 === ~~(a % 100 / 10) ? "th" : 1 === b ? "st" : 2 === b ? "nd" : 3 === b ? "rd" : "th";return a + c;
    }, week: { dow: 1, doy: 4 } }),
  //! moment.js locale configuration
  //! locale : English (New Zealand) [en-nz]
  //! author : Luke McGregor : https://github.com/lukemcgregor
  a.defineLocale("en-nz", { months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), longDateFormat: { LT: "h:mm A", LTS: "h:mm:ss A", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY h:mm A", LLLL: "dddd, D MMMM YYYY h:mm A" }, calendar: { sameDay: "[Today at] LT", nextDay: "[Tomorrow at] LT", nextWeek: "dddd [at] LT", lastDay: "[Yesterday at] LT", lastWeek: "[Last] dddd [at] LT", sameElse: "L" }, relativeTime: { future: "in %s", past: "%s ago", s: "a few seconds", m: "a minute", mm: "%d minutes", h: "an hour", hh: "%d hours", d: "a day", dd: "%d days", M: "a month", MM: "%d months", y: "a year", yy: "%d years" }, dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/, ordinal: function ordinal(a) {
      var b = a % 10,
          c = 1 === ~~(a % 100 / 10) ? "th" : 1 === b ? "st" : 2 === b ? "nd" : 3 === b ? "rd" : "th";return a + c;
    }, week: { dow: 1, doy: 4 } }),
  //! moment.js locale configuration
  //! locale : Esperanto [eo]
  //! author : Colin Dean : https://github.com/colindean
  //! author : Mia Nordentoft Imperatori : https://github.com/miestasmia
  //! comment : miestasmia corrected the translation by colindean
  a.defineLocale("eo", { months: "januaro_februaro_marto_aprilo_majo_junio_julio_aŭgusto_septembro_oktobro_novembro_decembro".split("_"), monthsShort: "jan_feb_mar_apr_maj_jun_jul_aŭg_sep_okt_nov_dec".split("_"), weekdays: "dimanĉo_lundo_mardo_merkredo_ĵaŭdo_vendredo_sabato".split("_"), weekdaysShort: "dim_lun_mard_merk_ĵaŭ_ven_sab".split("_"), weekdaysMin: "di_lu_ma_me_ĵa_ve_sa".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "YYYY-MM-DD", LL: "D[-a de] MMMM, YYYY", LLL: "D[-a de] MMMM, YYYY HH:mm", LLLL: "dddd, [la] D[-a de] MMMM, YYYY HH:mm" }, meridiemParse: /[ap]\.t\.m/i, isPM: function isPM(a) {
      return "p" === a.charAt(0).toLowerCase();
    }, meridiem: function meridiem(a, b, c) {
      return a > 11 ? c ? "p.t.m." : "P.T.M." : c ? "a.t.m." : "A.T.M.";
    }, calendar: { sameDay: "[Hodiaŭ je] LT", nextDay: "[Morgaŭ je] LT", nextWeek: "dddd [je] LT", lastDay: "[Hieraŭ je] LT", lastWeek: "[pasinta] dddd [je] LT", sameElse: "L" }, relativeTime: { future: "post %s", past: "antaŭ %s", s: "sekundoj", m: "minuto", mm: "%d minutoj", h: "horo", hh: "%d horoj", d: "tago", dd: "%d tagoj", M: "monato", MM: "%d monatoj", y: "jaro", yy: "%d jaroj" }, dayOfMonthOrdinalParse: /\d{1,2}a/, ordinal: "%da", week: { dow: 1, doy: 7 } });
  //! moment.js locale configuration
  //! locale : Spanish (Dominican Republic) [es-do]
  var Tg = "ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_"),
      Ug = "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_");a.defineLocale("es-do", { months: "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"), monthsShort: function monthsShort(a, b) {
      return a ? /-MMM-/.test(b) ? Ug[a.month()] : Tg[a.month()] : Tg;
    }, monthsParseExact: !0, weekdays: "domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"), weekdaysShort: "dom._lun._mar._mié._jue._vie._sáb.".split("_"), weekdaysMin: "do_lu_ma_mi_ju_vi_sá".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "h:mm A", LTS: "h:mm:ss A", L: "DD/MM/YYYY", LL: "D [de] MMMM [de] YYYY", LLL: "D [de] MMMM [de] YYYY h:mm A", LLLL: "dddd, D [de] MMMM [de] YYYY h:mm A" }, calendar: { sameDay: function sameDay() {
        return "[hoy a la" + (1 !== this.hours() ? "s" : "") + "] LT";
      }, nextDay: function nextDay() {
        return "[mañana a la" + (1 !== this.hours() ? "s" : "") + "] LT";
      }, nextWeek: function nextWeek() {
        return "dddd [a la" + (1 !== this.hours() ? "s" : "") + "] LT";
      }, lastDay: function lastDay() {
        return "[ayer a la" + (1 !== this.hours() ? "s" : "") + "] LT";
      }, lastWeek: function lastWeek() {
        return "[el] dddd [pasado a la" + (1 !== this.hours() ? "s" : "") + "] LT";
      }, sameElse: "L" }, relativeTime: { future: "en %s", past: "hace %s", s: "unos segundos", m: "un minuto", mm: "%d minutos", h: "una hora", hh: "%d horas", d: "un día", dd: "%d días", M: "un mes", MM: "%d meses", y: "un año", yy: "%d años" }, dayOfMonthOrdinalParse: /\d{1,2}º/, ordinal: "%dº", week: { dow: 1, doy: 4 } });
  //! moment.js locale configuration
  //! locale : Spanish [es]
  //! author : Julio Napurí : https://github.com/julionc
  var Vg = "ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_"),
      Wg = "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_");a.defineLocale("es", { months: "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"), monthsShort: function monthsShort(a, b) {
      return a ? /-MMM-/.test(b) ? Wg[a.month()] : Vg[a.month()] : Vg;
    }, monthsParseExact: !0, weekdays: "domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"), weekdaysShort: "dom._lun._mar._mié._jue._vie._sáb.".split("_"), weekdaysMin: "do_lu_ma_mi_ju_vi_sá".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "H:mm", LTS: "H:mm:ss", L: "DD/MM/YYYY", LL: "D [de] MMMM [de] YYYY", LLL: "D [de] MMMM [de] YYYY H:mm", LLLL: "dddd, D [de] MMMM [de] YYYY H:mm" }, calendar: { sameDay: function sameDay() {
        return "[hoy a la" + (1 !== this.hours() ? "s" : "") + "] LT";
      }, nextDay: function nextDay() {
        return "[mañana a la" + (1 !== this.hours() ? "s" : "") + "] LT";
      }, nextWeek: function nextWeek() {
        return "dddd [a la" + (1 !== this.hours() ? "s" : "") + "] LT";
      }, lastDay: function lastDay() {
        return "[ayer a la" + (1 !== this.hours() ? "s" : "") + "] LT";
      }, lastWeek: function lastWeek() {
        return "[el] dddd [pasado a la" + (1 !== this.hours() ? "s" : "") + "] LT";
      }, sameElse: "L" }, relativeTime: { future: "en %s", past: "hace %s", s: "unos segundos", m: "un minuto", mm: "%d minutos", h: "una hora", hh: "%d horas", d: "un día", dd: "%d días", M: "un mes", MM: "%d meses", y: "un año", yy: "%d años" }, dayOfMonthOrdinalParse: /\d{1,2}º/, ordinal: "%dº", week: { dow: 1, doy: 4 } }), a.defineLocale("et", { months: "jaanuar_veebruar_märts_aprill_mai_juuni_juuli_august_september_oktoober_november_detsember".split("_"), monthsShort: "jaan_veebr_märts_apr_mai_juuni_juuli_aug_sept_okt_nov_dets".split("_"), weekdays: "pühapäev_esmaspäev_teisipäev_kolmapäev_neljapäev_reede_laupäev".split("_"), weekdaysShort: "P_E_T_K_N_R_L".split("_"), weekdaysMin: "P_E_T_K_N_R_L".split("_"), longDateFormat: { LT: "H:mm", LTS: "H:mm:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY H:mm", LLLL: "dddd, D. MMMM YYYY H:mm" }, calendar: { sameDay: "[Täna,] LT", nextDay: "[Homme,] LT", nextWeek: "[Järgmine] dddd LT", lastDay: "[Eile,] LT", lastWeek: "[Eelmine] dddd LT", sameElse: "L" }, relativeTime: { future: "%s pärast", past: "%s tagasi", s: Fd, m: Fd, mm: Fd, h: Fd, hh: Fd, d: Fd, dd: "%d päeva", M: Fd, MM: Fd, y: Fd, yy: Fd }, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 4 } }),
  //! moment.js locale configuration
  //! locale : Basque [eu]
  //! author : Eneko Illarramendi : https://github.com/eillarra
  a.defineLocale("eu", { months: "urtarrila_otsaila_martxoa_apirila_maiatza_ekaina_uztaila_abuztua_iraila_urria_azaroa_abendua".split("_"), monthsShort: "urt._ots._mar._api._mai._eka._uzt._abu._ira._urr._aza._abe.".split("_"), monthsParseExact: !0, weekdays: "igandea_astelehena_asteartea_asteazkena_osteguna_ostirala_larunbata".split("_"), weekdaysShort: "ig._al._ar._az._og._ol._lr.".split("_"), weekdaysMin: "ig_al_ar_az_og_ol_lr".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "YYYY-MM-DD", LL: "YYYY[ko] MMMM[ren] D[a]", LLL: "YYYY[ko] MMMM[ren] D[a] HH:mm", LLLL: "dddd, YYYY[ko] MMMM[ren] D[a] HH:mm", l: "YYYY-M-D", ll: "YYYY[ko] MMM D[a]", lll: "YYYY[ko] MMM D[a] HH:mm", llll: "ddd, YYYY[ko] MMM D[a] HH:mm" }, calendar: { sameDay: "[gaur] LT[etan]", nextDay: "[bihar] LT[etan]", nextWeek: "dddd LT[etan]", lastDay: "[atzo] LT[etan]", lastWeek: "[aurreko] dddd LT[etan]", sameElse: "L" }, relativeTime: { future: "%s barru", past: "duela %s", s: "segundo batzuk", m: "minutu bat", mm: "%d minutu", h: "ordu bat", hh: "%d ordu", d: "egun bat", dd: "%d egun", M: "hilabete bat", MM: "%d hilabete", y: "urte bat", yy: "%d urte" }, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 7 } });
  //! moment.js locale configuration
  //! locale : Persian [fa]
  //! author : Ebrahim Byagowi : https://github.com/ebraminio
  var Xg = { 1: "۱", 2: "۲", 3: "۳", 4: "۴", 5: "۵", 6: "۶", 7: "۷", 8: "۸", 9: "۹", 0: "۰" },
      Yg = { "۱": "1", "۲": "2", "۳": "3", "۴": "4", "۵": "5", "۶": "6", "۷": "7", "۸": "8", "۹": "9", "۰": "0" };a.defineLocale("fa", { months: "ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر".split("_"), monthsShort: "ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر".split("_"), weekdays: "یک‌شنبه_دوشنبه_سه‌شنبه_چهارشنبه_پنج‌شنبه_جمعه_شنبه".split("_"), weekdaysShort: "یک‌شنبه_دوشنبه_سه‌شنبه_چهارشنبه_پنج‌شنبه_جمعه_شنبه".split("_"), weekdaysMin: "ی_د_س_چ_پ_ج_ش".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, meridiemParse: /قبل از ظهر|بعد از ظهر/, isPM: function isPM(a) {
      return (/بعد از ظهر/.test(a)
      );
    }, meridiem: function meridiem(a, b, c) {
      return a < 12 ? "قبل از ظهر" : "بعد از ظهر";
    }, calendar: { sameDay: "[امروز ساعت] LT", nextDay: "[فردا ساعت] LT", nextWeek: "dddd [ساعت] LT", lastDay: "[دیروز ساعت] LT", lastWeek: "dddd [پیش] [ساعت] LT", sameElse: "L" }, relativeTime: { future: "در %s", past: "%s پیش", s: "چند ثانیه", m: "یک دقیقه", mm: "%d دقیقه", h: "یک ساعت", hh: "%d ساعت", d: "یک روز", dd: "%d روز", M: "یک ماه", MM: "%d ماه", y: "یک سال", yy: "%d سال" }, preparse: function preparse(a) {
      return a.replace(/[۰-۹]/g, function (a) {
        return Yg[a];
      }).replace(/،/g, ",");
    }, postformat: function postformat(a) {
      return a.replace(/\d/g, function (a) {
        return Xg[a];
      }).replace(/,/g, "،");
    }, dayOfMonthOrdinalParse: /\d{1,2}م/, ordinal: "%dم", week: { dow: 6, doy: 12 } });
  //! moment.js locale configuration
  //! locale : Finnish [fi]
  //! author : Tarmo Aidantausta : https://github.com/bleadof
  var Zg = "nolla yksi kaksi kolme neljä viisi kuusi seitsemän kahdeksan yhdeksän".split(" "),
      $g = ["nolla", "yhden", "kahden", "kolmen", "neljän", "viiden", "kuuden", Zg[7], Zg[8], Zg[9]];a.defineLocale("fi", { months: "tammikuu_helmikuu_maaliskuu_huhtikuu_toukokuu_kesäkuu_heinäkuu_elokuu_syyskuu_lokakuu_marraskuu_joulukuu".split("_"), monthsShort: "tammi_helmi_maalis_huhti_touko_kesä_heinä_elo_syys_loka_marras_joulu".split("_"), weekdays: "sunnuntai_maanantai_tiistai_keskiviikko_torstai_perjantai_lauantai".split("_"), weekdaysShort: "su_ma_ti_ke_to_pe_la".split("_"), weekdaysMin: "su_ma_ti_ke_to_pe_la".split("_"), longDateFormat: { LT: "HH.mm", LTS: "HH.mm.ss", L: "DD.MM.YYYY", LL: "Do MMMM[ta] YYYY", LLL: "Do MMMM[ta] YYYY, [klo] HH.mm", LLLL: "dddd, Do MMMM[ta] YYYY, [klo] HH.mm", l: "D.M.YYYY", ll: "Do MMM YYYY", lll: "Do MMM YYYY, [klo] HH.mm", llll: "ddd, Do MMM YYYY, [klo] HH.mm" }, calendar: { sameDay: "[tänään] [klo] LT", nextDay: "[huomenna] [klo] LT", nextWeek: "dddd [klo] LT", lastDay: "[eilen] [klo] LT", lastWeek: "[viime] dddd[na] [klo] LT", sameElse: "L" }, relativeTime: { future: "%s päästä", past: "%s sitten", s: Gd, m: Gd, mm: Gd, h: Gd, hh: Gd, d: Gd, dd: Gd, M: Gd, MM: Gd, y: Gd, yy: Gd }, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 4 } }),
  //! moment.js locale configuration
  //! locale : Faroese [fo]
  //! author : Ragnar Johannesen : https://github.com/ragnar123
  a.defineLocale("fo", { months: "januar_februar_mars_apríl_mai_juni_juli_august_september_oktober_november_desember".split("_"), monthsShort: "jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_"), weekdays: "sunnudagur_mánadagur_týsdagur_mikudagur_hósdagur_fríggjadagur_leygardagur".split("_"), weekdaysShort: "sun_mán_týs_mik_hós_frí_ley".split("_"), weekdaysMin: "su_má_tý_mi_hó_fr_le".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D. MMMM, YYYY HH:mm" }, calendar: { sameDay: "[Í dag kl.] LT", nextDay: "[Í morgin kl.] LT", nextWeek: "dddd [kl.] LT", lastDay: "[Í gjár kl.] LT", lastWeek: "[síðstu] dddd [kl] LT", sameElse: "L" }, relativeTime: { future: "um %s", past: "%s síðani", s: "fá sekund", m: "ein minutt", mm: "%d minuttir", h: "ein tími", hh: "%d tímar", d: "ein dagur", dd: "%d dagar", M: "ein mánaði", MM: "%d mánaðir", y: "eitt ár", yy: "%d ár" }, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 4 } }),
  //! moment.js locale configuration
  //! locale : French (Canada) [fr-ca]
  //! author : Jonathan Abourbih : https://github.com/jonbca
  a.defineLocale("fr-ca", { months: "janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split("_"), monthsShort: "janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split("_"), monthsParseExact: !0, weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"), weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"), weekdaysMin: "Di_Lu_Ma_Me_Je_Ve_Sa".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "YYYY-MM-DD", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, calendar: { sameDay: "[Aujourd’hui à] LT", nextDay: "[Demain à] LT", nextWeek: "dddd [à] LT", lastDay: "[Hier à] LT", lastWeek: "dddd [dernier à] LT", sameElse: "L" }, relativeTime: { future: "dans %s", past: "il y a %s", s: "quelques secondes", m: "une minute", mm: "%d minutes", h: "une heure", hh: "%d heures", d: "un jour", dd: "%d jours", M: "un mois", MM: "%d mois", y: "un an", yy: "%d ans" }, dayOfMonthOrdinalParse: /\d{1,2}(er|e)/, ordinal: function ordinal(a, b) {
      switch (b) {default:case "M":case "Q":case "D":case "DDD":case "d":
          return a + (1 === a ? "er" : "e");case "w":case "W":
          return a + (1 === a ? "re" : "e");}
    } }),
  //! moment.js locale configuration
  //! locale : French (Switzerland) [fr-ch]
  //! author : Gaspard Bucher : https://github.com/gaspard
  a.defineLocale("fr-ch", { months: "janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split("_"), monthsShort: "janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split("_"), monthsParseExact: !0, weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"), weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"), weekdaysMin: "Di_Lu_Ma_Me_Je_Ve_Sa".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, calendar: { sameDay: "[Aujourd’hui à] LT", nextDay: "[Demain à] LT", nextWeek: "dddd [à] LT", lastDay: "[Hier à] LT", lastWeek: "dddd [dernier à] LT", sameElse: "L" }, relativeTime: { future: "dans %s", past: "il y a %s", s: "quelques secondes", m: "une minute", mm: "%d minutes", h: "une heure", hh: "%d heures", d: "un jour", dd: "%d jours", M: "un mois", MM: "%d mois", y: "un an", yy: "%d ans" }, dayOfMonthOrdinalParse: /\d{1,2}(er|e)/, ordinal: function ordinal(a, b) {
      switch (b) {default:case "M":case "Q":case "D":case "DDD":case "d":
          return a + (1 === a ? "er" : "e");case "w":case "W":
          return a + (1 === a ? "re" : "e");}
    }, week: { dow: 1, doy: 4 } }),
  //! moment.js locale configuration
  //! locale : French [fr]
  //! author : John Fischer : https://github.com/jfroffice
  a.defineLocale("fr", { months: "janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split("_"), monthsShort: "janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split("_"), monthsParseExact: !0, weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"), weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"), weekdaysMin: "Di_Lu_Ma_Me_Je_Ve_Sa".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, calendar: { sameDay: "[Aujourd’hui à] LT", nextDay: "[Demain à] LT", nextWeek: "dddd [à] LT", lastDay: "[Hier à] LT", lastWeek: "dddd [dernier à] LT", sameElse: "L" }, relativeTime: { future: "dans %s", past: "il y a %s", s: "quelques secondes", m: "une minute", mm: "%d minutes", h: "une heure", hh: "%d heures", d: "un jour", dd: "%d jours", M: "un mois", MM: "%d mois", y: "un an", yy: "%d ans" }, dayOfMonthOrdinalParse: /\d{1,2}(er|)/, ordinal: function ordinal(a, b) {
      switch (b) {case "D":
          return a + (1 === a ? "er" : "");default:case "M":case "Q":case "DDD":case "d":
          return a + (1 === a ? "er" : "e");case "w":case "W":
          return a + (1 === a ? "re" : "e");}
    }, week: { dow: 1, doy: 4 } });
  //! moment.js locale configuration
  //! locale : Frisian [fy]
  //! author : Robin van der Vliet : https://github.com/robin0van0der0v
  var _g = "jan._feb._mrt._apr._mai_jun._jul._aug._sep._okt._nov._des.".split("_"),
      ah = "jan_feb_mrt_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_");a.defineLocale("fy", { months: "jannewaris_febrewaris_maart_april_maaie_juny_july_augustus_septimber_oktober_novimber_desimber".split("_"), monthsShort: function monthsShort(a, b) {
      return a ? /-MMM-/.test(b) ? ah[a.month()] : _g[a.month()] : _g;
    }, monthsParseExact: !0, weekdays: "snein_moandei_tiisdei_woansdei_tongersdei_freed_sneon".split("_"), weekdaysShort: "si._mo._ti._wo._to._fr._so.".split("_"), weekdaysMin: "Si_Mo_Ti_Wo_To_Fr_So".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD-MM-YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, calendar: { sameDay: "[hjoed om] LT", nextDay: "[moarn om] LT", nextWeek: "dddd [om] LT", lastDay: "[juster om] LT", lastWeek: "[ôfrûne] dddd [om] LT", sameElse: "L" }, relativeTime: { future: "oer %s", past: "%s lyn", s: "in pear sekonden", m: "ien minút", mm: "%d minuten", h: "ien oere", hh: "%d oeren", d: "ien dei", dd: "%d dagen", M: "ien moanne", MM: "%d moannen", y: "ien jier", yy: "%d jierren" }, dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/, ordinal: function ordinal(a) {
      return a + (1 === a || 8 === a || a >= 20 ? "ste" : "de");
    }, week: { dow: 1, doy: 4 } });
  //! moment.js locale configuration
  //! locale : Scottish Gaelic [gd]
  //! author : Jon Ashdown : https://github.com/jonashdown
  var bh = ["Am Faoilleach", "An Gearran", "Am Màrt", "An Giblean", "An Cèitean", "An t-Ògmhios", "An t-Iuchar", "An Lùnastal", "An t-Sultain", "An Dàmhair", "An t-Samhain", "An Dùbhlachd"],
      ch = ["Faoi", "Gear", "Màrt", "Gibl", "Cèit", "Ògmh", "Iuch", "Lùn", "Sult", "Dàmh", "Samh", "Dùbh"],
      dh = ["Didòmhnaich", "Diluain", "Dimàirt", "Diciadain", "Diardaoin", "Dihaoine", "Disathairne"],
      eh = ["Did", "Dil", "Dim", "Dic", "Dia", "Dih", "Dis"],
      fh = ["Dò", "Lu", "Mà", "Ci", "Ar", "Ha", "Sa"];a.defineLocale("gd", { months: bh, monthsShort: ch, monthsParseExact: !0, weekdays: dh, weekdaysShort: eh, weekdaysMin: fh, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, calendar: { sameDay: "[An-diugh aig] LT", nextDay: "[A-màireach aig] LT", nextWeek: "dddd [aig] LT", lastDay: "[An-dè aig] LT", lastWeek: "dddd [seo chaidh] [aig] LT", sameElse: "L" }, relativeTime: { future: "ann an %s", past: "bho chionn %s", s: "beagan diogan", m: "mionaid", mm: "%d mionaidean", h: "uair", hh: "%d uairean", d: "latha", dd: "%d latha", M: "mìos", MM: "%d mìosan", y: "bliadhna", yy: "%d bliadhna" }, dayOfMonthOrdinalParse: /\d{1,2}(d|na|mh)/, ordinal: function ordinal(a) {
      var b = 1 === a ? "d" : a % 10 === 2 ? "na" : "mh";return a + b;
    }, week: { dow: 1, doy: 4 } }),
  //! moment.js locale configuration
  //! locale : Galician [gl]
  //! author : Juan G. Hurtado : https://github.com/juanghurtado
  a.defineLocale("gl", { months: "xaneiro_febreiro_marzo_abril_maio_xuño_xullo_agosto_setembro_outubro_novembro_decembro".split("_"), monthsShort: "xan._feb._mar._abr._mai._xuñ._xul._ago._set._out._nov._dec.".split("_"), monthsParseExact: !0, weekdays: "domingo_luns_martes_mércores_xoves_venres_sábado".split("_"), weekdaysShort: "dom._lun._mar._mér._xov._ven._sáb.".split("_"), weekdaysMin: "do_lu_ma_mé_xo_ve_sá".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "H:mm", LTS: "H:mm:ss", L: "DD/MM/YYYY", LL: "D [de] MMMM [de] YYYY", LLL: "D [de] MMMM [de] YYYY H:mm", LLLL: "dddd, D [de] MMMM [de] YYYY H:mm" }, calendar: { sameDay: function sameDay() {
        return "[hoxe " + (1 !== this.hours() ? "ás" : "á") + "] LT";
      }, nextDay: function nextDay() {
        return "[mañá " + (1 !== this.hours() ? "ás" : "á") + "] LT";
      }, nextWeek: function nextWeek() {
        return "dddd [" + (1 !== this.hours() ? "ás" : "a") + "] LT";
      }, lastDay: function lastDay() {
        return "[onte " + (1 !== this.hours() ? "á" : "a") + "] LT";
      }, lastWeek: function lastWeek() {
        return "[o] dddd [pasado " + (1 !== this.hours() ? "ás" : "a") + "] LT";
      }, sameElse: "L" }, relativeTime: { future: function future(a) {
        return 0 === a.indexOf("un") ? "n" + a : "en " + a;
      }, past: "hai %s", s: "uns segundos", m: "un minuto", mm: "%d minutos", h: "unha hora", hh: "%d horas", d: "un día", dd: "%d días", M: "un mes", MM: "%d meses", y: "un ano", yy: "%d anos" }, dayOfMonthOrdinalParse: /\d{1,2}º/, ordinal: "%dº", week: { dow: 1, doy: 4 } }), a.defineLocale("gom-latn", { months: "Janer_Febrer_Mars_Abril_Mai_Jun_Julai_Agost_Setembr_Otubr_Novembr_Dezembr".split("_"), monthsShort: "Jan._Feb._Mars_Abr._Mai_Jun_Jul._Ago._Set._Otu._Nov._Dez.".split("_"), monthsParseExact: !0, weekdays: "Aitar_Somar_Mongllar_Budvar_Brestar_Sukrar_Son'var".split("_"), weekdaysShort: "Ait._Som._Mon._Bud._Bre._Suk._Son.".split("_"), weekdaysMin: "Ai_Sm_Mo_Bu_Br_Su_Sn".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "A h:mm [vazta]", LTS: "A h:mm:ss [vazta]", L: "DD-MM-YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY A h:mm [vazta]", LLLL: "dddd, MMMM[achea] Do, YYYY, A h:mm [vazta]", llll: "ddd, D MMM YYYY, A h:mm [vazta]" }, calendar: { sameDay: "[Aiz] LT", nextDay: "[Faleam] LT", nextWeek: "[Ieta to] dddd[,] LT", lastDay: "[Kal] LT", lastWeek: "[Fatlo] dddd[,] LT", sameElse: "L" }, relativeTime: { future: "%s", past: "%s adim", s: Id, m: Id, mm: Id, h: Id, hh: Id, d: Id, dd: Id, M: Id, MM: Id, y: Id, yy: Id }, dayOfMonthOrdinalParse: /\d{1,2}(er)/, ordinal: function ordinal(a, b) {
      switch (b) {case "D":
          return a + "er";default:case "M":case "Q":case "DDD":case "d":case "w":case "W":
          return a;}
    }, week: { dow: 1, doy: 4 }, meridiemParse: /rati|sokalli|donparam|sanje/, meridiemHour: function meridiemHour(a, b) {
      return 12 === a && (a = 0), "rati" === b ? a < 4 ? a : a + 12 : "sokalli" === b ? a : "donparam" === b ? a > 12 ? a : a + 12 : "sanje" === b ? a + 12 : void 0;
    }, meridiem: function meridiem(a, b, c) {
      return a < 4 ? "rati" : a < 12 ? "sokalli" : a < 16 ? "donparam" : a < 20 ? "sanje" : "rati";
    } }),
  //! moment.js locale configuration
  //! locale : Hebrew [he]
  //! author : Tomer Cohen : https://github.com/tomer
  //! author : Moshe Simantov : https://github.com/DevelopmentIL
  //! author : Tal Ater : https://github.com/TalAter
  a.defineLocale("he", { months: "ינואר_פברואר_מרץ_אפריל_מאי_יוני_יולי_אוגוסט_ספטמבר_אוקטובר_נובמבר_דצמבר".split("_"), monthsShort: "ינו׳_פבר׳_מרץ_אפר׳_מאי_יוני_יולי_אוג׳_ספט׳_אוק׳_נוב׳_דצמ׳".split("_"), weekdays: "ראשון_שני_שלישי_רביעי_חמישי_שישי_שבת".split("_"), weekdaysShort: "א׳_ב׳_ג׳_ד׳_ה׳_ו׳_ש׳".split("_"), weekdaysMin: "א_ב_ג_ד_ה_ו_ש".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D [ב]MMMM YYYY", LLL: "D [ב]MMMM YYYY HH:mm", LLLL: "dddd, D [ב]MMMM YYYY HH:mm", l: "D/M/YYYY", ll: "D MMM YYYY", lll: "D MMM YYYY HH:mm", llll: "ddd, D MMM YYYY HH:mm" }, calendar: { sameDay: "[היום ב־]LT", nextDay: "[מחר ב־]LT", nextWeek: "dddd [בשעה] LT", lastDay: "[אתמול ב־]LT", lastWeek: "[ביום] dddd [האחרון בשעה] LT", sameElse: "L" }, relativeTime: { future: "בעוד %s", past: "לפני %s", s: "מספר שניות", m: "דקה", mm: "%d דקות", h: "שעה", hh: function hh(a) {
        return 2 === a ? "שעתיים" : a + " שעות";
      }, d: "יום", dd: function dd(a) {
        return 2 === a ? "יומיים" : a + " ימים";
      }, M: "חודש", MM: function MM(a) {
        return 2 === a ? "חודשיים" : a + " חודשים";
      }, y: "שנה", yy: function yy(a) {
        return 2 === a ? "שנתיים" : a % 10 === 0 && 10 !== a ? a + " שנה" : a + " שנים";
      } }, meridiemParse: /אחה"צ|לפנה"צ|אחרי הצהריים|לפני הצהריים|לפנות בוקר|בבוקר|בערב/i, isPM: function isPM(a) {
      return (/^(אחה"צ|אחרי הצהריים|בערב)$/.test(a)
      );
    }, meridiem: function meridiem(a, b, c) {
      return a < 5 ? "לפנות בוקר" : a < 10 ? "בבוקר" : a < 12 ? c ? 'לפנה"צ' : "לפני הצהריים" : a < 18 ? c ? 'אחה"צ' : "אחרי הצהריים" : "בערב";
    } });
  //! moment.js locale configuration
  //! locale : Hindi [hi]
  //! author : Mayank Singhal : https://github.com/mayanksinghal
  var gh = { 1: "१", 2: "२", 3: "३", 4: "४", 5: "५", 6: "६", 7: "७", 8: "८", 9: "९", 0: "०" },
      hh = { "१": "1", "२": "2", "३": "3", "४": "4", "५": "5", "६": "6", "७": "7", "८": "8", "९": "9", "०": "0" };a.defineLocale("hi", { months: "जनवरी_फ़रवरी_मार्च_अप्रैल_मई_जून_जुलाई_अगस्त_सितम्बर_अक्टूबर_नवम्बर_दिसम्बर".split("_"), monthsShort: "जन._फ़र._मार्च_अप्रै._मई_जून_जुल._अग._सित._अक्टू._नव._दिस.".split("_"), monthsParseExact: !0, weekdays: "रविवार_सोमवार_मंगलवार_बुधवार_गुरूवार_शुक्रवार_शनिवार".split("_"), weekdaysShort: "रवि_सोम_मंगल_बुध_गुरू_शुक्र_शनि".split("_"), weekdaysMin: "र_सो_मं_बु_गु_शु_श".split("_"), longDateFormat: { LT: "A h:mm बजे", LTS: "A h:mm:ss बजे", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY, A h:mm बजे", LLLL: "dddd, D MMMM YYYY, A h:mm बजे" }, calendar: { sameDay: "[आज] LT", nextDay: "[कल] LT", nextWeek: "dddd, LT", lastDay: "[कल] LT", lastWeek: "[पिछले] dddd, LT", sameElse: "L" }, relativeTime: { future: "%s में", past: "%s पहले", s: "कुछ ही क्षण", m: "एक मिनट", mm: "%d मिनट", h: "एक घंटा", hh: "%d घंटे", d: "एक दिन", dd: "%d दिन", M: "एक महीने", MM: "%d महीने", y: "एक वर्ष", yy: "%d वर्ष" }, preparse: function preparse(a) {
      return a.replace(/[१२३४५६७८९०]/g, function (a) {
        return hh[a];
      });
    }, postformat: function postformat(a) {
      return a.replace(/\d/g, function (a) {
        return gh[a];
      });
    }, meridiemParse: /रात|सुबह|दोपहर|शाम/, meridiemHour: function meridiemHour(a, b) {
      return 12 === a && (a = 0), "रात" === b ? a < 4 ? a : a + 12 : "सुबह" === b ? a : "दोपहर" === b ? a >= 10 ? a : a + 12 : "शाम" === b ? a + 12 : void 0;
    }, meridiem: function meridiem(a, b, c) {
      return a < 4 ? "रात" : a < 10 ? "सुबह" : a < 17 ? "दोपहर" : a < 20 ? "शाम" : "रात";
    }, week: { dow: 0, doy: 6 } }), a.defineLocale("hr", { months: { format: "siječnja_veljače_ožujka_travnja_svibnja_lipnja_srpnja_kolovoza_rujna_listopada_studenoga_prosinca".split("_"), standalone: "siječanj_veljača_ožujak_travanj_svibanj_lipanj_srpanj_kolovoz_rujan_listopad_studeni_prosinac".split("_") }, monthsShort: "sij._velj._ožu._tra._svi._lip._srp._kol._ruj._lis._stu._pro.".split("_"), monthsParseExact: !0, weekdays: "nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota".split("_"), weekdaysShort: "ned._pon._uto._sri._čet._pet._sub.".split("_"), weekdaysMin: "ne_po_ut_sr_če_pe_su".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "H:mm", LTS: "H:mm:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY H:mm", LLLL: "dddd, D. MMMM YYYY H:mm" }, calendar: { sameDay: "[danas u] LT", nextDay: "[sutra u] LT", nextWeek: function nextWeek() {
        switch (this.day()) {case 0:
            return "[u] [nedjelju] [u] LT";case 3:
            return "[u] [srijedu] [u] LT";case 6:
            return "[u] [subotu] [u] LT";case 1:case 2:case 4:case 5:
            return "[u] dddd [u] LT";}
      }, lastDay: "[jučer u] LT", lastWeek: function lastWeek() {
        switch (this.day()) {case 0:case 3:
            return "[prošlu] dddd [u] LT";case 6:
            return "[prošle] [subote] [u] LT";case 1:case 2:case 4:case 5:
            return "[prošli] dddd [u] LT";}
      }, sameElse: "L" }, relativeTime: { future: "za %s", past: "prije %s", s: "par sekundi", m: Jd, mm: Jd, h: Jd, hh: Jd, d: "dan", dd: Jd, M: "mjesec", MM: Jd, y: "godinu", yy: Jd }, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 7 } });
  //! moment.js locale configuration
  //! locale : Hungarian [hu]
  //! author : Adam Brunner : https://github.com/adambrunner
  var ih = "vasárnap hétfőn kedden szerdán csütörtökön pénteken szombaton".split(" ");a.defineLocale("hu", { months: "január_február_március_április_május_június_július_augusztus_szeptember_október_november_december".split("_"), monthsShort: "jan_feb_márc_ápr_máj_jún_júl_aug_szept_okt_nov_dec".split("_"), weekdays: "vasárnap_hétfő_kedd_szerda_csütörtök_péntek_szombat".split("_"), weekdaysShort: "vas_hét_kedd_sze_csüt_pén_szo".split("_"), weekdaysMin: "v_h_k_sze_cs_p_szo".split("_"), longDateFormat: { LT: "H:mm", LTS: "H:mm:ss", L: "YYYY.MM.DD.", LL: "YYYY. MMMM D.", LLL: "YYYY. MMMM D. H:mm", LLLL: "YYYY. MMMM D., dddd H:mm" }, meridiemParse: /de|du/i, isPM: function isPM(a) {
      return "u" === a.charAt(1).toLowerCase();
    }, meridiem: function meridiem(a, b, c) {
      return a < 12 ? c === !0 ? "de" : "DE" : c === !0 ? "du" : "DU";
    }, calendar: { sameDay: "[ma] LT[-kor]", nextDay: "[holnap] LT[-kor]", nextWeek: function nextWeek() {
        return Ld.call(this, !0);
      }, lastDay: "[tegnap] LT[-kor]", lastWeek: function lastWeek() {
        return Ld.call(this, !1);
      }, sameElse: "L" }, relativeTime: { future: "%s múlva", past: "%s", s: Kd, m: Kd, mm: Kd, h: Kd, hh: Kd, d: Kd, dd: Kd, M: Kd, MM: Kd, y: Kd, yy: Kd }, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 4 } }),
  //! moment.js locale configuration
  //! locale : Armenian [hy-am]
  //! author : Armendarabyan : https://github.com/armendarabyan
  a.defineLocale("hy-am", { months: { format: "հունվարի_փետրվարի_մարտի_ապրիլի_մայիսի_հունիսի_հուլիսի_օգոստոսի_սեպտեմբերի_հոկտեմբերի_նոյեմբերի_դեկտեմբերի".split("_"), standalone: "հունվար_փետրվար_մարտ_ապրիլ_մայիս_հունիս_հուլիս_օգոստոս_սեպտեմբեր_հոկտեմբեր_նոյեմբեր_դեկտեմբեր".split("_") }, monthsShort: "հնվ_փտր_մրտ_ապր_մյս_հնս_հլս_օգս_սպտ_հկտ_նմբ_դկտ".split("_"), weekdays: "կիրակի_երկուշաբթի_երեքշաբթի_չորեքշաբթի_հինգշաբթի_ուրբաթ_շաբաթ".split("_"), weekdaysShort: "կրկ_երկ_երք_չրք_հնգ_ուրբ_շբթ".split("_"), weekdaysMin: "կրկ_երկ_երք_չրք_հնգ_ուրբ_շբթ".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY թ.", LLL: "D MMMM YYYY թ., HH:mm", LLLL: "dddd, D MMMM YYYY թ., HH:mm" }, calendar: { sameDay: "[այսօր] LT", nextDay: "[վաղը] LT", lastDay: "[երեկ] LT", nextWeek: function nextWeek() {
        return "dddd [օրը ժամը] LT";
      }, lastWeek: function lastWeek() {
        return "[անցած] dddd [օրը ժամը] LT";
      }, sameElse: "L" }, relativeTime: { future: "%s հետո", past: "%s առաջ", s: "մի քանի վայրկյան", m: "րոպե", mm: "%d րոպե", h: "ժամ", hh: "%d ժամ", d: "օր", dd: "%d օր", M: "ամիս", MM: "%d ամիս", y: "տարի", yy: "%d տարի" }, meridiemParse: /գիշերվա|առավոտվա|ցերեկվա|երեկոյան/, isPM: function isPM(a) {
      return (/^(ցերեկվա|երեկոյան)$/.test(a)
      );
    }, meridiem: function meridiem(a) {
      return a < 4 ? "գիշերվա" : a < 12 ? "առավոտվա" : a < 17 ? "ցերեկվա" : "երեկոյան";
    }, dayOfMonthOrdinalParse: /\d{1,2}|\d{1,2}-(ին|րդ)/, ordinal: function ordinal(a, b) {
      switch (b) {case "DDD":case "w":case "W":case "DDDo":
          return 1 === a ? a + "-ին" : a + "-րդ";default:
          return a;}
    }, week: { dow: 1, doy: 7 } }),
  //! moment.js locale configuration
  //! locale : Indonesian [id]
  //! author : Mohammad Satrio Utomo : https://github.com/tyok
  //! reference: http://id.wikisource.org/wiki/Pedoman_Umum_Ejaan_Bahasa_Indonesia_yang_Disempurnakan
  a.defineLocale("id", { months: "Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_November_Desember".split("_"), monthsShort: "Jan_Feb_Mar_Apr_Mei_Jun_Jul_Ags_Sep_Okt_Nov_Des".split("_"), weekdays: "Minggu_Senin_Selasa_Rabu_Kamis_Jumat_Sabtu".split("_"), weekdaysShort: "Min_Sen_Sel_Rab_Kam_Jum_Sab".split("_"), weekdaysMin: "Mg_Sn_Sl_Rb_Km_Jm_Sb".split("_"), longDateFormat: { LT: "HH.mm", LTS: "HH.mm.ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY [pukul] HH.mm", LLLL: "dddd, D MMMM YYYY [pukul] HH.mm" }, meridiemParse: /pagi|siang|sore|malam/, meridiemHour: function meridiemHour(a, b) {
      return 12 === a && (a = 0), "pagi" === b ? a : "siang" === b ? a >= 11 ? a : a + 12 : "sore" === b || "malam" === b ? a + 12 : void 0;
    }, meridiem: function meridiem(a, b, c) {
      return a < 11 ? "pagi" : a < 15 ? "siang" : a < 19 ? "sore" : "malam";
    }, calendar: { sameDay: "[Hari ini pukul] LT", nextDay: "[Besok pukul] LT", nextWeek: "dddd [pukul] LT", lastDay: "[Kemarin pukul] LT", lastWeek: "dddd [lalu pukul] LT", sameElse: "L" }, relativeTime: { future: "dalam %s", past: "%s yang lalu", s: "beberapa detik", m: "semenit", mm: "%d menit", h: "sejam", hh: "%d jam", d: "sehari", dd: "%d hari", M: "sebulan", MM: "%d bulan", y: "setahun", yy: "%d tahun" }, week: { dow: 1, doy: 7 } }), a.defineLocale("is", { months: "janúar_febrúar_mars_apríl_maí_júní_júlí_ágúst_september_október_nóvember_desember".split("_"), monthsShort: "jan_feb_mar_apr_maí_jún_júl_ágú_sep_okt_nóv_des".split("_"), weekdays: "sunnudagur_mánudagur_þriðjudagur_miðvikudagur_fimmtudagur_föstudagur_laugardagur".split("_"), weekdaysShort: "sun_mán_þri_mið_fim_fös_lau".split("_"), weekdaysMin: "Su_Má_Þr_Mi_Fi_Fö_La".split("_"), longDateFormat: { LT: "H:mm", LTS: "H:mm:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY [kl.] H:mm", LLLL: "dddd, D. MMMM YYYY [kl.] H:mm" }, calendar: { sameDay: "[í dag kl.] LT", nextDay: "[á morgun kl.] LT", nextWeek: "dddd [kl.] LT", lastDay: "[í gær kl.] LT", lastWeek: "[síðasta] dddd [kl.] LT", sameElse: "L" }, relativeTime: { future: "eftir %s", past: "fyrir %s síðan", s: Nd, m: Nd, mm: Nd, h: "klukkustund", hh: Nd, d: Nd, dd: Nd, M: Nd, MM: Nd, y: Nd, yy: Nd }, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 4 } }),
  //! moment.js locale configuration
  //! locale : Italian [it]
  //! author : Lorenzo : https://github.com/aliem
  //! author: Mattia Larentis: https://github.com/nostalgiaz
  a.defineLocale("it", { months: "gennaio_febbraio_marzo_aprile_maggio_giugno_luglio_agosto_settembre_ottobre_novembre_dicembre".split("_"), monthsShort: "gen_feb_mar_apr_mag_giu_lug_ago_set_ott_nov_dic".split("_"), weekdays: "domenica_lunedì_martedì_mercoledì_giovedì_venerdì_sabato".split("_"), weekdaysShort: "dom_lun_mar_mer_gio_ven_sab".split("_"), weekdaysMin: "do_lu_ma_me_gi_ve_sa".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, calendar: { sameDay: "[Oggi alle] LT", nextDay: "[Domani alle] LT", nextWeek: "dddd [alle] LT", lastDay: "[Ieri alle] LT", lastWeek: function lastWeek() {
        switch (this.day()) {case 0:
            return "[la scorsa] dddd [alle] LT";default:
            return "[lo scorso] dddd [alle] LT";}
      }, sameElse: "L" }, relativeTime: { future: function future(a) {
        return (/^[0-9].+$/.test(a) ? "tra" : "in") + " " + a;
      }, past: "%s fa", s: "alcuni secondi", m: "un minuto", mm: "%d minuti", h: "un'ora", hh: "%d ore", d: "un giorno", dd: "%d giorni", M: "un mese", MM: "%d mesi", y: "un anno", yy: "%d anni" }, dayOfMonthOrdinalParse: /\d{1,2}º/, ordinal: "%dº", week: { dow: 1, doy: 4 } }),
  //! moment.js locale configuration
  //! locale : Japanese [ja]
  //! author : LI Long : https://github.com/baryon
  a.defineLocale("ja", { months: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"), monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"), weekdays: "日曜日_月曜日_火曜日_水曜日_木曜日_金曜日_土曜日".split("_"), weekdaysShort: "日_月_火_水_木_金_土".split("_"), weekdaysMin: "日_月_火_水_木_金_土".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "YYYY/MM/DD", LL: "YYYY年M月D日", LLL: "YYYY年M月D日 HH:mm", LLLL: "YYYY年M月D日 HH:mm dddd", l: "YYYY/MM/DD", ll: "YYYY年M月D日", lll: "YYYY年M月D日 HH:mm", llll: "YYYY年M月D日 HH:mm dddd" }, meridiemParse: /午前|午後/i, isPM: function isPM(a) {
      return "午後" === a;
    }, meridiem: function meridiem(a, b, c) {
      return a < 12 ? "午前" : "午後";
    }, calendar: { sameDay: "[今日] LT", nextDay: "[明日] LT", nextWeek: "[来週]dddd LT", lastDay: "[昨日] LT", lastWeek: "[前週]dddd LT", sameElse: "L" }, dayOfMonthOrdinalParse: /\d{1,2}日/, ordinal: function ordinal(a, b) {
      switch (b) {case "d":case "D":case "DDD":
          return a + "日";default:
          return a;}
    }, relativeTime: { future: "%s後", past: "%s前", s: "数秒", m: "1分", mm: "%d分", h: "1時間", hh: "%d時間", d: "1日", dd: "%d日", M: "1ヶ月", MM: "%dヶ月", y: "1年", yy: "%d年" } }),
  //! moment.js locale configuration
  //! locale : Javanese [jv]
  //! author : Rony Lantip : https://github.com/lantip
  //! reference: http://jv.wikipedia.org/wiki/Basa_Jawa
  a.defineLocale("jv", { months: "Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_Nopember_Desember".split("_"), monthsShort: "Jan_Feb_Mar_Apr_Mei_Jun_Jul_Ags_Sep_Okt_Nop_Des".split("_"), weekdays: "Minggu_Senen_Seloso_Rebu_Kemis_Jemuwah_Septu".split("_"), weekdaysShort: "Min_Sen_Sel_Reb_Kem_Jem_Sep".split("_"), weekdaysMin: "Mg_Sn_Sl_Rb_Km_Jm_Sp".split("_"), longDateFormat: { LT: "HH.mm", LTS: "HH.mm.ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY [pukul] HH.mm", LLLL: "dddd, D MMMM YYYY [pukul] HH.mm" }, meridiemParse: /enjing|siyang|sonten|ndalu/, meridiemHour: function meridiemHour(a, b) {
      return 12 === a && (a = 0), "enjing" === b ? a : "siyang" === b ? a >= 11 ? a : a + 12 : "sonten" === b || "ndalu" === b ? a + 12 : void 0;
    }, meridiem: function meridiem(a, b, c) {
      return a < 11 ? "enjing" : a < 15 ? "siyang" : a < 19 ? "sonten" : "ndalu";
    }, calendar: { sameDay: "[Dinten puniko pukul] LT", nextDay: "[Mbenjang pukul] LT", nextWeek: "dddd [pukul] LT", lastDay: "[Kala wingi pukul] LT", lastWeek: "dddd [kepengker pukul] LT", sameElse: "L" }, relativeTime: { future: "wonten ing %s", past: "%s ingkang kepengker", s: "sawetawis detik", m: "setunggal menit", mm: "%d menit", h: "setunggal jam", hh: "%d jam", d: "sedinten", dd: "%d dinten", M: "sewulan", MM: "%d wulan", y: "setaun", yy: "%d taun" }, week: { dow: 1, doy: 7 } }),
  //! moment.js locale configuration
  //! locale : Georgian [ka]
  //! author : Irakli Janiashvili : https://github.com/irakli-janiashvili
  a.defineLocale("ka", { months: { standalone: "იანვარი_თებერვალი_მარტი_აპრილი_მაისი_ივნისი_ივლისი_აგვისტო_სექტემბერი_ოქტომბერი_ნოემბერი_დეკემბერი".split("_"), format: "იანვარს_თებერვალს_მარტს_აპრილის_მაისს_ივნისს_ივლისს_აგვისტს_სექტემბერს_ოქტომბერს_ნოემბერს_დეკემბერს".split("_") }, monthsShort: "იან_თებ_მარ_აპრ_მაი_ივნ_ივლ_აგვ_სექ_ოქტ_ნოე_დეკ".split("_"), weekdays: { standalone: "კვირა_ორშაბათი_სამშაბათი_ოთხშაბათი_ხუთშაბათი_პარასკევი_შაბათი".split("_"), format: "კვირას_ორშაბათს_სამშაბათს_ოთხშაბათს_ხუთშაბათს_პარასკევს_შაბათს".split("_"), isFormat: /(წინა|შემდეგ)/ }, weekdaysShort: "კვი_ორშ_სამ_ოთხ_ხუთ_პარ_შაბ".split("_"), weekdaysMin: "კვ_ორ_სა_ოთ_ხუ_პა_შა".split("_"), longDateFormat: { LT: "h:mm A", LTS: "h:mm:ss A", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY h:mm A", LLLL: "dddd, D MMMM YYYY h:mm A" }, calendar: { sameDay: "[დღეს] LT[-ზე]", nextDay: "[ხვალ] LT[-ზე]", lastDay: "[გუშინ] LT[-ზე]", nextWeek: "[შემდეგ] dddd LT[-ზე]", lastWeek: "[წინა] dddd LT-ზე", sameElse: "L" }, relativeTime: { future: function future(a) {
        return (/(წამი|წუთი|საათი|წელი)/.test(a) ? a.replace(/ი$/, "ში") : a + "ში"
        );
      }, past: function past(a) {
        return (/(წამი|წუთი|საათი|დღე|თვე)/.test(a) ? a.replace(/(ი|ე)$/, "ის უკან") : /წელი/.test(a) ? a.replace(/წელი$/, "წლის უკან") : void 0
        );
      }, s: "რამდენიმე წამი", m: "წუთი", mm: "%d წუთი", h: "საათი", hh: "%d საათი", d: "დღე", dd: "%d დღე", M: "თვე", MM: "%d თვე", y: "წელი", yy: "%d წელი" }, dayOfMonthOrdinalParse: /0|1-ლი|მე-\d{1,2}|\d{1,2}-ე/, ordinal: function ordinal(a) {
      return 0 === a ? a : 1 === a ? a + "-ლი" : a < 20 || a <= 100 && a % 20 === 0 || a % 100 === 0 ? "მე-" + a : a + "-ე";
    }, week: { dow: 1, doy: 7 } });
  //! moment.js locale configuration
  //! locale : Kazakh [kk]
  //! authors : Nurlan Rakhimzhanov : https://github.com/nurlan
  var jh = { 0: "-ші", 1: "-ші", 2: "-ші", 3: "-ші", 4: "-ші", 5: "-ші", 6: "-шы", 7: "-ші", 8: "-ші", 9: "-шы", 10: "-шы", 20: "-шы", 30: "-шы", 40: "-шы", 50: "-ші", 60: "-шы", 70: "-ші", 80: "-ші", 90: "-шы", 100: "-ші" };a.defineLocale("kk", { months: "қаңтар_ақпан_наурыз_сәуір_мамыр_маусым_шілде_тамыз_қыркүйек_қазан_қараша_желтоқсан".split("_"), monthsShort: "қаң_ақп_нау_сәу_мам_мау_шіл_там_қыр_қаз_қар_жел".split("_"), weekdays: "жексенбі_дүйсенбі_сейсенбі_сәрсенбі_бейсенбі_жұма_сенбі".split("_"), weekdaysShort: "жек_дүй_сей_сәр_бей_жұм_сен".split("_"), weekdaysMin: "жк_дй_сй_ср_бй_жм_сн".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, calendar: { sameDay: "[Бүгін сағат] LT", nextDay: "[Ертең сағат] LT", nextWeek: "dddd [сағат] LT", lastDay: "[Кеше сағат] LT", lastWeek: "[Өткен аптаның] dddd [сағат] LT", sameElse: "L" }, relativeTime: { future: "%s ішінде", past: "%s бұрын", s: "бірнеше секунд", m: "бір минут", mm: "%d минут", h: "бір сағат", hh: "%d сағат", d: "бір күн", dd: "%d күн", M: "бір ай", MM: "%d ай", y: "бір жыл", yy: "%d жыл" }, dayOfMonthOrdinalParse: /\d{1,2}-(ші|шы)/, ordinal: function ordinal(a) {
      var b = a % 10,
          c = a >= 100 ? 100 : null;return a + (jh[a] || jh[b] || jh[c]);
    }, week: { dow: 1, doy: 7 } }),
  //! moment.js locale configuration
  //! locale : Cambodian [km]
  //! author : Kruy Vanna : https://github.com/kruyvanna
  a.defineLocale("km", { months: "មករា_កុម្ភៈ_មីនា_មេសា_ឧសភា_មិថុនា_កក្កដា_សីហា_កញ្ញា_តុលា_វិច្ឆិកា_ធ្នូ".split("_"), monthsShort: "មករា_កុម្ភៈ_មីនា_មេសា_ឧសភា_មិថុនា_កក្កដា_សីហា_កញ្ញា_តុលា_វិច្ឆិកា_ធ្នូ".split("_"), weekdays: "អាទិត្យ_ច័ន្ទ_អង្គារ_ពុធ_ព្រហស្បតិ៍_សុក្រ_សៅរ៍".split("_"), weekdaysShort: "អាទិត្យ_ច័ន្ទ_អង្គារ_ពុធ_ព្រហស្បតិ៍_សុក្រ_សៅរ៍".split("_"), weekdaysMin: "អាទិត្យ_ច័ន្ទ_អង្គារ_ពុធ_ព្រហស្បតិ៍_សុក្រ_សៅរ៍".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, calendar: { sameDay: "[ថ្ងៃនេះ ម៉ោង] LT", nextDay: "[ស្អែក ម៉ោង] LT", nextWeek: "dddd [ម៉ោង] LT", lastDay: "[ម្សិលមិញ ម៉ោង] LT", lastWeek: "dddd [សប្តាហ៍មុន] [ម៉ោង] LT", sameElse: "L" }, relativeTime: { future: "%sទៀត", past: "%sមុន", s: "ប៉ុន្មានវិនាទី", m: "មួយនាទី", mm: "%d នាទី", h: "មួយម៉ោង", hh: "%d ម៉ោង", d: "មួយថ្ងៃ", dd: "%d ថ្ងៃ", M: "មួយខែ", MM: "%d ខែ", y: "មួយឆ្នាំ", yy: "%d ឆ្នាំ" }, week: { dow: 1, doy: 4 } });
  //! moment.js locale configuration
  //! locale : Kannada [kn]
  //! author : Rajeev Naik : https://github.com/rajeevnaikte
  var kh = { 1: "೧", 2: "೨", 3: "೩", 4: "೪", 5: "೫", 6: "೬", 7: "೭", 8: "೮", 9: "೯", 0: "೦" },
      lh = { "೧": "1", "೨": "2", "೩": "3", "೪": "4", "೫": "5", "೬": "6", "೭": "7", "೮": "8", "೯": "9", "೦": "0" };a.defineLocale("kn", { months: "ಜನವರಿ_ಫೆಬ್ರವರಿ_ಮಾರ್ಚ್_ಏಪ್ರಿಲ್_ಮೇ_ಜೂನ್_ಜುಲೈ_ಆಗಸ್ಟ್_ಸೆಪ್ಟೆಂಬರ್_ಅಕ್ಟೋಬರ್_ನವೆಂಬರ್_ಡಿಸೆಂಬರ್".split("_"), monthsShort: "ಜನ_ಫೆಬ್ರ_ಮಾರ್ಚ್_ಏಪ್ರಿಲ್_ಮೇ_ಜೂನ್_ಜುಲೈ_ಆಗಸ್ಟ್_ಸೆಪ್ಟೆಂಬ_ಅಕ್ಟೋಬ_ನವೆಂಬ_ಡಿಸೆಂಬ".split("_"), monthsParseExact: !0, weekdays: "ಭಾನುವಾರ_ಸೋಮವಾರ_ಮಂಗಳವಾರ_ಬುಧವಾರ_ಗುರುವಾರ_ಶುಕ್ರವಾರ_ಶನಿವಾರ".split("_"), weekdaysShort: "ಭಾನು_ಸೋಮ_ಮಂಗಳ_ಬುಧ_ಗುರು_ಶುಕ್ರ_ಶನಿ".split("_"), weekdaysMin: "ಭಾ_ಸೋ_ಮಂ_ಬು_ಗು_ಶು_ಶ".split("_"), longDateFormat: { LT: "A h:mm", LTS: "A h:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY, A h:mm", LLLL: "dddd, D MMMM YYYY, A h:mm" }, calendar: { sameDay: "[ಇಂದು] LT", nextDay: "[ನಾಳೆ] LT", nextWeek: "dddd, LT", lastDay: "[ನಿನ್ನೆ] LT", lastWeek: "[ಕೊನೆಯ] dddd, LT", sameElse: "L" }, relativeTime: { future: "%s ನಂತರ", past: "%s ಹಿಂದೆ", s: "ಕೆಲವು ಕ್ಷಣಗಳು", m: "ಒಂದು ನಿಮಿಷ", mm: "%d ನಿಮಿಷ", h: "ಒಂದು ಗಂಟೆ", hh: "%d ಗಂಟೆ", d: "ಒಂದು ದಿನ", dd: "%d ದಿನ", M: "ಒಂದು ತಿಂಗಳು", MM: "%d ತಿಂಗಳು", y: "ಒಂದು ವರ್ಷ", yy: "%d ವರ್ಷ" }, preparse: function preparse(a) {
      return a.replace(/[೧೨೩೪೫೬೭೮೯೦]/g, function (a) {
        return lh[a];
      });
    }, postformat: function postformat(a) {
      return a.replace(/\d/g, function (a) {
        return kh[a];
      });
    }, meridiemParse: /ರಾತ್ರಿ|ಬೆಳಿಗ್ಗೆ|ಮಧ್ಯಾಹ್ನ|ಸಂಜೆ/, meridiemHour: function meridiemHour(a, b) {
      return 12 === a && (a = 0), "ರಾತ್ರಿ" === b ? a < 4 ? a : a + 12 : "ಬೆಳಿಗ್ಗೆ" === b ? a : "ಮಧ್ಯಾಹ್ನ" === b ? a >= 10 ? a : a + 12 : "ಸಂಜೆ" === b ? a + 12 : void 0;
    }, meridiem: function meridiem(a, b, c) {
      return a < 4 ? "ರಾತ್ರಿ" : a < 10 ? "ಬೆಳಿಗ್ಗೆ" : a < 17 ? "ಮಧ್ಯಾಹ್ನ" : a < 20 ? "ಸಂಜೆ" : "ರಾತ್ರಿ";
    }, dayOfMonthOrdinalParse: /\d{1,2}(ನೇ)/, ordinal: function ordinal(a) {
      return a + "ನೇ";
    }, week: { dow: 0, doy: 6 } }),
  //! moment.js locale configuration
  //! locale : Korean [ko]
  //! author : Kyungwook, Park : https://github.com/kyungw00k
  //! author : Jeeeyul Lee <jeeeyul@gmail.com>
  a.defineLocale("ko", { months: "1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월".split("_"), monthsShort: "1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월".split("_"), weekdays: "일요일_월요일_화요일_수요일_목요일_금요일_토요일".split("_"), weekdaysShort: "일_월_화_수_목_금_토".split("_"), weekdaysMin: "일_월_화_수_목_금_토".split("_"), longDateFormat: { LT: "A h:mm", LTS: "A h:mm:ss", L: "YYYY.MM.DD", LL: "YYYY년 MMMM D일", LLL: "YYYY년 MMMM D일 A h:mm", LLLL: "YYYY년 MMMM D일 dddd A h:mm", l: "YYYY.MM.DD", ll: "YYYY년 MMMM D일", lll: "YYYY년 MMMM D일 A h:mm", llll: "YYYY년 MMMM D일 dddd A h:mm" }, calendar: { sameDay: "오늘 LT", nextDay: "내일 LT", nextWeek: "dddd LT", lastDay: "어제 LT", lastWeek: "지난주 dddd LT", sameElse: "L" }, relativeTime: { future: "%s 후", past: "%s 전", s: "몇 초", ss: "%d초", m: "1분", mm: "%d분", h: "한 시간", hh: "%d시간", d: "하루", dd: "%d일", M: "한 달", MM: "%d달", y: "일 년", yy: "%d년" }, dayOfMonthOrdinalParse: /\d{1,2}일/, ordinal: "%d일", meridiemParse: /오전|오후/, isPM: function isPM(a) {
      return "오후" === a;
    }, meridiem: function meridiem(a, b, c) {
      return a < 12 ? "오전" : "오후";
    } });
  //! moment.js locale configuration
  //! locale : Kyrgyz [ky]
  //! author : Chyngyz Arystan uulu : https://github.com/chyngyz
  var mh = { 0: "-чү", 1: "-чи", 2: "-чи", 3: "-чү", 4: "-чү", 5: "-чи", 6: "-чы", 7: "-чи", 8: "-чи", 9: "-чу", 10: "-чу", 20: "-чы", 30: "-чу", 40: "-чы", 50: "-чү", 60: "-чы", 70: "-чи", 80: "-чи", 90: "-чу", 100: "-чү" };a.defineLocale("ky", { months: "январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь".split("_"), monthsShort: "янв_фев_март_апр_май_июнь_июль_авг_сен_окт_ноя_дек".split("_"), weekdays: "Жекшемби_Дүйшөмбү_Шейшемби_Шаршемби_Бейшемби_Жума_Ишемби".split("_"), weekdaysShort: "Жек_Дүй_Шей_Шар_Бей_Жум_Ише".split("_"), weekdaysMin: "Жк_Дй_Шй_Шр_Бй_Жм_Иш".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, calendar: { sameDay: "[Бүгүн саат] LT", nextDay: "[Эртең саат] LT", nextWeek: "dddd [саат] LT", lastDay: "[Кече саат] LT", lastWeek: "[Өткен аптанын] dddd [күнү] [саат] LT", sameElse: "L" }, relativeTime: { future: "%s ичинде", past: "%s мурун", s: "бирнече секунд", m: "бир мүнөт", mm: "%d мүнөт", h: "бир саат", hh: "%d саат", d: "бир күн", dd: "%d күн", M: "бир ай", MM: "%d ай", y: "бир жыл", yy: "%d жыл" }, dayOfMonthOrdinalParse: /\d{1,2}-(чи|чы|чү|чу)/, ordinal: function ordinal(a) {
      var b = a % 10,
          c = a >= 100 ? 100 : null;return a + (mh[a] || mh[b] || mh[c]);
    }, week: { dow: 1, doy: 7 } }), a.defineLocale("lb", { months: "Januar_Februar_Mäerz_Abrëll_Mee_Juni_Juli_August_September_Oktober_November_Dezember".split("_"), monthsShort: "Jan._Febr._Mrz._Abr._Mee_Jun._Jul._Aug._Sept._Okt._Nov._Dez.".split("_"), monthsParseExact: !0, weekdays: "Sonndeg_Méindeg_Dënschdeg_Mëttwoch_Donneschdeg_Freideg_Samschdeg".split("_"), weekdaysShort: "So._Mé._Dë._Më._Do._Fr._Sa.".split("_"), weekdaysMin: "So_Mé_Dë_Më_Do_Fr_Sa".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "H:mm [Auer]", LTS: "H:mm:ss [Auer]", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY H:mm [Auer]", LLLL: "dddd, D. MMMM YYYY H:mm [Auer]" }, calendar: { sameDay: "[Haut um] LT", sameElse: "L", nextDay: "[Muer um] LT", nextWeek: "dddd [um] LT", lastDay: "[Gëschter um] LT", lastWeek: function lastWeek() {
        switch (this.day()) {case 2:case 4:
            return "[Leschten] dddd [um] LT";default:
            return "[Leschte] dddd [um] LT";}
      } }, relativeTime: { future: Pd, past: Qd, s: "e puer Sekonnen", m: Od, mm: "%d Minutten", h: Od, hh: "%d Stonnen", d: Od, dd: "%d Deeg", M: Od, MM: "%d Méint", y: Od, yy: "%d Joer" }, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 4 } }),
  //! moment.js locale configuration
  //! locale : Lao [lo]
  //! author : Ryan Hart : https://github.com/ryanhart2
  a.defineLocale("lo", { months: "ມັງກອນ_ກຸມພາ_ມີນາ_ເມສາ_ພຶດສະພາ_ມິຖຸນາ_ກໍລະກົດ_ສິງຫາ_ກັນຍາ_ຕຸລາ_ພະຈິກ_ທັນວາ".split("_"), monthsShort: "ມັງກອນ_ກຸມພາ_ມີນາ_ເມສາ_ພຶດສະພາ_ມິຖຸນາ_ກໍລະກົດ_ສິງຫາ_ກັນຍາ_ຕຸລາ_ພະຈິກ_ທັນວາ".split("_"), weekdays: "ອາທິດ_ຈັນ_ອັງຄານ_ພຸດ_ພະຫັດ_ສຸກ_ເສົາ".split("_"), weekdaysShort: "ທິດ_ຈັນ_ອັງຄານ_ພຸດ_ພະຫັດ_ສຸກ_ເສົາ".split("_"), weekdaysMin: "ທ_ຈ_ອຄ_ພ_ພຫ_ສກ_ສ".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "ວັນdddd D MMMM YYYY HH:mm" }, meridiemParse: /ຕອນເຊົ້າ|ຕອນແລງ/, isPM: function isPM(a) {
      return "ຕອນແລງ" === a;
    }, meridiem: function meridiem(a, b, c) {
      return a < 12 ? "ຕອນເຊົ້າ" : "ຕອນແລງ";
    }, calendar: { sameDay: "[ມື້ນີ້ເວລາ] LT", nextDay: "[ມື້ອື່ນເວລາ] LT", nextWeek: "[ວັນ]dddd[ໜ້າເວລາ] LT", lastDay: "[ມື້ວານນີ້ເວລາ] LT", lastWeek: "[ວັນ]dddd[ແລ້ວນີ້ເວລາ] LT", sameElse: "L" }, relativeTime: { future: "ອີກ %s", past: "%sຜ່ານມາ", s: "ບໍ່ເທົ່າໃດວິນາທີ", m: "1 ນາທີ", mm: "%d ນາທີ", h: "1 ຊົ່ວໂມງ", hh: "%d ຊົ່ວໂມງ", d: "1 ມື້", dd: "%d ມື້", M: "1 ເດືອນ", MM: "%d ເດືອນ", y: "1 ປີ", yy: "%d ປີ" }, dayOfMonthOrdinalParse: /(ທີ່)\d{1,2}/, ordinal: function ordinal(a) {
      return "ທີ່" + a;
    } });
  //! moment.js locale configuration
  //! locale : Lithuanian [lt]
  //! author : Mindaugas Mozūras : https://github.com/mmozuras
  var nh = { m: "minutė_minutės_minutę", mm: "minutės_minučių_minutes", h: "valanda_valandos_valandą", hh: "valandos_valandų_valandas", d: "diena_dienos_dieną", dd: "dienos_dienų_dienas", M: "mėnuo_mėnesio_mėnesį", MM: "mėnesiai_mėnesių_mėnesius", y: "metai_metų_metus", yy: "metai_metų_metus" };a.defineLocale("lt", { months: { format: "sausio_vasario_kovo_balandžio_gegužės_birželio_liepos_rugpjūčio_rugsėjo_spalio_lapkričio_gruodžio".split("_"), standalone: "sausis_vasaris_kovas_balandis_gegužė_birželis_liepa_rugpjūtis_rugsėjis_spalis_lapkritis_gruodis".split("_"), isFormat: /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?|MMMM?(\[[^\[\]]*\]|\s)+D[oD]?/ }, monthsShort: "sau_vas_kov_bal_geg_bir_lie_rgp_rgs_spa_lap_grd".split("_"), weekdays: { format: "sekmadienį_pirmadienį_antradienį_trečiadienį_ketvirtadienį_penktadienį_šeštadienį".split("_"), standalone: "sekmadienis_pirmadienis_antradienis_trečiadienis_ketvirtadienis_penktadienis_šeštadienis".split("_"), isFormat: /dddd HH:mm/ }, weekdaysShort: "Sek_Pir_Ant_Tre_Ket_Pen_Šeš".split("_"), weekdaysMin: "S_P_A_T_K_Pn_Š".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "YYYY-MM-DD", LL: "YYYY [m.] MMMM D [d.]", LLL: "YYYY [m.] MMMM D [d.], HH:mm [val.]", LLLL: "YYYY [m.] MMMM D [d.], dddd, HH:mm [val.]", l: "YYYY-MM-DD", ll: "YYYY [m.] MMMM D [d.]", lll: "YYYY [m.] MMMM D [d.], HH:mm [val.]", llll: "YYYY [m.] MMMM D [d.], ddd, HH:mm [val.]" }, calendar: { sameDay: "[Šiandien] LT", nextDay: "[Rytoj] LT", nextWeek: "dddd LT", lastDay: "[Vakar] LT", lastWeek: "[Praėjusį] dddd LT", sameElse: "L" }, relativeTime: { future: "po %s", past: "prieš %s", s: Sd, m: Td, mm: Wd, h: Td, hh: Wd, d: Td, dd: Wd, M: Td, MM: Wd, y: Td, yy: Wd }, dayOfMonthOrdinalParse: /\d{1,2}-oji/, ordinal: function ordinal(a) {
      return a + "-oji";
    }, week: { dow: 1, doy: 4 } });
  //! moment.js locale configuration
  //! locale : Latvian [lv]
  //! author : Kristaps Karlsons : https://github.com/skakri
  //! author : Jānis Elmeris : https://github.com/JanisE
  var oh = { m: "minūtes_minūtēm_minūte_minūtes".split("_"), mm: "minūtes_minūtēm_minūte_minūtes".split("_"), h: "stundas_stundām_stunda_stundas".split("_"), hh: "stundas_stundām_stunda_stundas".split("_"), d: "dienas_dienām_diena_dienas".split("_"), dd: "dienas_dienām_diena_dienas".split("_"), M: "mēneša_mēnešiem_mēnesis_mēneši".split("_"), MM: "mēneša_mēnešiem_mēnesis_mēneši".split("_"), y: "gada_gadiem_gads_gadi".split("_"), yy: "gada_gadiem_gads_gadi".split("_") };a.defineLocale("lv", { months: "janvāris_februāris_marts_aprīlis_maijs_jūnijs_jūlijs_augusts_septembris_oktobris_novembris_decembris".split("_"), monthsShort: "jan_feb_mar_apr_mai_jūn_jūl_aug_sep_okt_nov_dec".split("_"), weekdays: "svētdiena_pirmdiena_otrdiena_trešdiena_ceturtdiena_piektdiena_sestdiena".split("_"), weekdaysShort: "Sv_P_O_T_C_Pk_S".split("_"), weekdaysMin: "Sv_P_O_T_C_Pk_S".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY.", LL: "YYYY. [gada] D. MMMM", LLL: "YYYY. [gada] D. MMMM, HH:mm", LLLL: "YYYY. [gada] D. MMMM, dddd, HH:mm" }, calendar: { sameDay: "[Šodien pulksten] LT", nextDay: "[Rīt pulksten] LT", nextWeek: "dddd [pulksten] LT", lastDay: "[Vakar pulksten] LT", lastWeek: "[Pagājušā] dddd [pulksten] LT", sameElse: "L" }, relativeTime: { future: "pēc %s", past: "pirms %s", s: $d, m: Zd, mm: Yd, h: Zd, hh: Yd, d: Zd, dd: Yd, M: Zd, MM: Yd, y: Zd, yy: Yd }, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 4 } });
  //! moment.js locale configuration
  //! locale : Montenegrin [me]
  //! author : Miodrag Nikač <miodrag@restartit.me> : https://github.com/miodragnikac
  var ph = { words: { m: ["jedan minut", "jednog minuta"], mm: ["minut", "minuta", "minuta"], h: ["jedan sat", "jednog sata"], hh: ["sat", "sata", "sati"], dd: ["dan", "dana", "dana"], MM: ["mjesec", "mjeseca", "mjeseci"], yy: ["godina", "godine", "godina"] }, correctGrammaticalCase: function correctGrammaticalCase(a, b) {
      return 1 === a ? b[0] : a >= 2 && a <= 4 ? b[1] : b[2];
    }, translate: function translate(a, b, c) {
      var d = ph.words[c];return 1 === c.length ? b ? d[0] : d[1] : a + " " + ph.correctGrammaticalCase(a, d);
    } };a.defineLocale("me", { months: "januar_februar_mart_april_maj_jun_jul_avgust_septembar_oktobar_novembar_decembar".split("_"), monthsShort: "jan._feb._mar._apr._maj_jun_jul_avg._sep._okt._nov._dec.".split("_"), monthsParseExact: !0, weekdays: "nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota".split("_"), weekdaysShort: "ned._pon._uto._sri._čet._pet._sub.".split("_"), weekdaysMin: "ne_po_ut_sr_če_pe_su".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "H:mm", LTS: "H:mm:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY H:mm", LLLL: "dddd, D. MMMM YYYY H:mm" }, calendar: { sameDay: "[danas u] LT", nextDay: "[sjutra u] LT", nextWeek: function nextWeek() {
        switch (this.day()) {case 0:
            return "[u] [nedjelju] [u] LT";case 3:
            return "[u] [srijedu] [u] LT";case 6:
            return "[u] [subotu] [u] LT";case 1:case 2:case 4:case 5:
            return "[u] dddd [u] LT";}
      }, lastDay: "[juče u] LT", lastWeek: function lastWeek() {
        var a = ["[prošle] [nedjelje] [u] LT", "[prošlog] [ponedjeljka] [u] LT", "[prošlog] [utorka] [u] LT", "[prošle] [srijede] [u] LT", "[prošlog] [četvrtka] [u] LT", "[prošlog] [petka] [u] LT", "[prošle] [subote] [u] LT"];return a[this.day()];
      }, sameElse: "L" }, relativeTime: { future: "za %s", past: "prije %s", s: "nekoliko sekundi", m: ph.translate, mm: ph.translate, h: ph.translate, hh: ph.translate, d: "dan", dd: ph.translate, M: "mjesec", MM: ph.translate, y: "godinu", yy: ph.translate }, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 7 } }),
  //! moment.js locale configuration
  //! locale : Maori [mi]
  //! author : John Corrigan <robbiecloset@gmail.com> : https://github.com/johnideal
  a.defineLocale("mi", { months: "Kohi-tāte_Hui-tanguru_Poutū-te-rangi_Paenga-whāwhā_Haratua_Pipiri_Hōngoingoi_Here-turi-kōkā_Mahuru_Whiringa-ā-nuku_Whiringa-ā-rangi_Hakihea".split("_"), monthsShort: "Kohi_Hui_Pou_Pae_Hara_Pipi_Hōngoi_Here_Mahu_Whi-nu_Whi-ra_Haki".split("_"), monthsRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i, monthsStrictRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i, monthsShortRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i, monthsShortStrictRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,2}/i, weekdays: "Rātapu_Mane_Tūrei_Wenerei_Tāite_Paraire_Hātarei".split("_"), weekdaysShort: "Ta_Ma_Tū_We_Tāi_Pa_Hā".split("_"), weekdaysMin: "Ta_Ma_Tū_We_Tāi_Pa_Hā".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY [i] HH:mm", LLLL: "dddd, D MMMM YYYY [i] HH:mm" }, calendar: { sameDay: "[i teie mahana, i] LT", nextDay: "[apopo i] LT", nextWeek: "dddd [i] LT", lastDay: "[inanahi i] LT", lastWeek: "dddd [whakamutunga i] LT", sameElse: "L" }, relativeTime: { future: "i roto i %s", past: "%s i mua", s: "te hēkona ruarua", m: "he meneti", mm: "%d meneti", h: "te haora", hh: "%d haora", d: "he ra", dd: "%d ra", M: "he marama", MM: "%d marama", y: "he tau", yy: "%d tau" }, dayOfMonthOrdinalParse: /\d{1,2}º/, ordinal: "%dº", week: { dow: 1, doy: 4 } }),
  //! moment.js locale configuration
  //! locale : Macedonian [mk]
  //! author : Borislav Mickov : https://github.com/B0k0
  a.defineLocale("mk", { months: "јануари_февруари_март_април_мај_јуни_јули_август_септември_октомври_ноември_декември".split("_"), monthsShort: "јан_фев_мар_апр_мај_јун_јул_авг_сеп_окт_ное_дек".split("_"), weekdays: "недела_понеделник_вторник_среда_четврток_петок_сабота".split("_"), weekdaysShort: "нед_пон_вто_сре_чет_пет_саб".split("_"), weekdaysMin: "нe_пo_вт_ср_че_пе_сa".split("_"), longDateFormat: { LT: "H:mm", LTS: "H:mm:ss", L: "D.MM.YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY H:mm", LLLL: "dddd, D MMMM YYYY H:mm" }, calendar: { sameDay: "[Денес во] LT", nextDay: "[Утре во] LT", nextWeek: "[Во] dddd [во] LT", lastDay: "[Вчера во] LT", lastWeek: function lastWeek() {
        switch (this.day()) {case 0:case 3:case 6:
            return "[Изминатата] dddd [во] LT";case 1:case 2:case 4:case 5:
            return "[Изминатиот] dddd [во] LT";}
      }, sameElse: "L" }, relativeTime: { future: "после %s", past: "пред %s", s: "неколку секунди", m: "минута", mm: "%d минути", h: "час", hh: "%d часа", d: "ден", dd: "%d дена", M: "месец", MM: "%d месеци", y: "година", yy: "%d години" }, dayOfMonthOrdinalParse: /\d{1,2}-(ев|ен|ти|ви|ри|ми)/, ordinal: function ordinal(a) {
      var b = a % 10,
          c = a % 100;return 0 === a ? a + "-ев" : 0 === c ? a + "-ен" : c > 10 && c < 20 ? a + "-ти" : 1 === b ? a + "-ви" : 2 === b ? a + "-ри" : 7 === b || 8 === b ? a + "-ми" : a + "-ти";
    }, week: { dow: 1, doy: 7 } }),
  //! moment.js locale configuration
  //! locale : Malayalam [ml]
  //! author : Floyd Pink : https://github.com/floydpink
  a.defineLocale("ml", { months: "ജനുവരി_ഫെബ്രുവരി_മാർച്ച്_ഏപ്രിൽ_മേയ്_ജൂൺ_ജൂലൈ_ഓഗസ്റ്റ്_സെപ്റ്റംബർ_ഒക്ടോബർ_നവംബർ_ഡിസംബർ".split("_"), monthsShort: "ജനു._ഫെബ്രു._മാർ._ഏപ്രി._മേയ്_ജൂൺ_ജൂലൈ._ഓഗ._സെപ്റ്റ._ഒക്ടോ._നവം._ഡിസം.".split("_"), monthsParseExact: !0, weekdays: "ഞായറാഴ്ച_തിങ്കളാഴ്ച_ചൊവ്വാഴ്ച_ബുധനാഴ്ച_വ്യാഴാഴ്ച_വെള്ളിയാഴ്ച_ശനിയാഴ്ച".split("_"), weekdaysShort: "ഞായർ_തിങ്കൾ_ചൊവ്വ_ബുധൻ_വ്യാഴം_വെള്ളി_ശനി".split("_"), weekdaysMin: "ഞാ_തി_ചൊ_ബു_വ്യാ_വെ_ശ".split("_"), longDateFormat: { LT: "A h:mm -നു", LTS: "A h:mm:ss -നു", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY, A h:mm -നു", LLLL: "dddd, D MMMM YYYY, A h:mm -നു" }, calendar: { sameDay: "[ഇന്ന്] LT", nextDay: "[നാളെ] LT", nextWeek: "dddd, LT", lastDay: "[ഇന്നലെ] LT", lastWeek: "[കഴിഞ്ഞ] dddd, LT", sameElse: "L" }, relativeTime: { future: "%s കഴിഞ്ഞ്", past: "%s മുൻപ്", s: "അൽപ നിമിഷങ്ങൾ", m: "ഒരു മിനിറ്റ്", mm: "%d മിനിറ്റ്", h: "ഒരു മണിക്കൂർ", hh: "%d മണിക്കൂർ", d: "ഒരു ദിവസം", dd: "%d ദിവസം", M: "ഒരു മാസം", MM: "%d മാസം", y: "ഒരു വർഷം", yy: "%d വർഷം" }, meridiemParse: /രാത്രി|രാവിലെ|ഉച്ച കഴിഞ്ഞ്|വൈകുന്നേരം|രാത്രി/i, meridiemHour: function meridiemHour(a, b) {
      return 12 === a && (a = 0), "രാത്രി" === b && a >= 4 || "ഉച്ച കഴിഞ്ഞ്" === b || "വൈകുന്നേരം" === b ? a + 12 : a;
    }, meridiem: function meridiem(a, b, c) {
      return a < 4 ? "രാത്രി" : a < 12 ? "രാവിലെ" : a < 17 ? "ഉച്ച കഴിഞ്ഞ്" : a < 20 ? "വൈകുന്നേരം" : "രാത്രി";
    } });
  //! moment.js locale configuration
  //! locale : Marathi [mr]
  //! author : Harshad Kale : https://github.com/kalehv
  //! author : Vivek Athalye : https://github.com/vnathalye
  var qh = { 1: "१", 2: "२", 3: "३", 4: "४", 5: "५", 6: "६", 7: "७", 8: "८", 9: "९", 0: "०" },
      rh = { "१": "1", "२": "2", "३": "3", "४": "4", "५": "5", "६": "6", "७": "7", "८": "8", "९": "9", "०": "0" };a.defineLocale("mr", { months: "जानेवारी_फेब्रुवारी_मार्च_एप्रिल_मे_जून_जुलै_ऑगस्ट_सप्टेंबर_ऑक्टोबर_नोव्हेंबर_डिसेंबर".split("_"), monthsShort: "जाने._फेब्रु._मार्च._एप्रि._मे._जून._जुलै._ऑग._सप्टें._ऑक्टो._नोव्हें._डिसें.".split("_"), monthsParseExact: !0, weekdays: "रविवार_सोमवार_मंगळवार_बुधवार_गुरूवार_शुक्रवार_शनिवार".split("_"), weekdaysShort: "रवि_सोम_मंगळ_बुध_गुरू_शुक्र_शनि".split("_"), weekdaysMin: "र_सो_मं_बु_गु_शु_श".split("_"), longDateFormat: { LT: "A h:mm वाजता", LTS: "A h:mm:ss वाजता", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY, A h:mm वाजता", LLLL: "dddd, D MMMM YYYY, A h:mm वाजता" }, calendar: { sameDay: "[आज] LT", nextDay: "[उद्या] LT", nextWeek: "dddd, LT", lastDay: "[काल] LT", lastWeek: "[मागील] dddd, LT", sameElse: "L" }, relativeTime: { future: "%sमध्ये", past: "%sपूर्वी", s: _d, m: _d, mm: _d, h: _d, hh: _d, d: _d, dd: _d, M: _d, MM: _d, y: _d, yy: _d }, preparse: function preparse(a) {
      return a.replace(/[१२३४५६७८९०]/g, function (a) {
        return rh[a];
      });
    }, postformat: function postformat(a) {
      return a.replace(/\d/g, function (a) {
        return qh[a];
      });
    }, meridiemParse: /रात्री|सकाळी|दुपारी|सायंकाळी/, meridiemHour: function meridiemHour(a, b) {
      return 12 === a && (a = 0), "रात्री" === b ? a < 4 ? a : a + 12 : "सकाळी" === b ? a : "दुपारी" === b ? a >= 10 ? a : a + 12 : "सायंकाळी" === b ? a + 12 : void 0;
    }, meridiem: function meridiem(a, b, c) {
      return a < 4 ? "रात्री" : a < 10 ? "सकाळी" : a < 17 ? "दुपारी" : a < 20 ? "सायंकाळी" : "रात्री";
    }, week: { dow: 0, doy: 6 } }),
  //! moment.js locale configuration
  //! locale : Malay [ms-my]
  //! note : DEPRECATED, the correct one is [ms]
  //! author : Weldan Jamili : https://github.com/weldan
  a.defineLocale("ms-my", { months: "Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember".split("_"), monthsShort: "Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis".split("_"), weekdays: "Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu".split("_"), weekdaysShort: "Ahd_Isn_Sel_Rab_Kha_Jum_Sab".split("_"), weekdaysMin: "Ah_Is_Sl_Rb_Km_Jm_Sb".split("_"), longDateFormat: { LT: "HH.mm", LTS: "HH.mm.ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY [pukul] HH.mm", LLLL: "dddd, D MMMM YYYY [pukul] HH.mm" }, meridiemParse: /pagi|tengahari|petang|malam/, meridiemHour: function meridiemHour(a, b) {
      return 12 === a && (a = 0), "pagi" === b ? a : "tengahari" === b ? a >= 11 ? a : a + 12 : "petang" === b || "malam" === b ? a + 12 : void 0;
    }, meridiem: function meridiem(a, b, c) {
      return a < 11 ? "pagi" : a < 15 ? "tengahari" : a < 19 ? "petang" : "malam";
    }, calendar: { sameDay: "[Hari ini pukul] LT", nextDay: "[Esok pukul] LT", nextWeek: "dddd [pukul] LT", lastDay: "[Kelmarin pukul] LT", lastWeek: "dddd [lepas pukul] LT", sameElse: "L" }, relativeTime: { future: "dalam %s", past: "%s yang lepas", s: "beberapa saat", m: "seminit", mm: "%d minit", h: "sejam", hh: "%d jam", d: "sehari", dd: "%d hari", M: "sebulan", MM: "%d bulan", y: "setahun", yy: "%d tahun" }, week: { dow: 1, doy: 7 } }),
  //! moment.js locale configuration
  //! locale : Malay [ms]
  //! author : Weldan Jamili : https://github.com/weldan
  a.defineLocale("ms", { months: "Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember".split("_"), monthsShort: "Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis".split("_"), weekdays: "Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu".split("_"), weekdaysShort: "Ahd_Isn_Sel_Rab_Kha_Jum_Sab".split("_"), weekdaysMin: "Ah_Is_Sl_Rb_Km_Jm_Sb".split("_"), longDateFormat: { LT: "HH.mm", LTS: "HH.mm.ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY [pukul] HH.mm", LLLL: "dddd, D MMMM YYYY [pukul] HH.mm" }, meridiemParse: /pagi|tengahari|petang|malam/, meridiemHour: function meridiemHour(a, b) {
      return 12 === a && (a = 0), "pagi" === b ? a : "tengahari" === b ? a >= 11 ? a : a + 12 : "petang" === b || "malam" === b ? a + 12 : void 0;
    }, meridiem: function meridiem(a, b, c) {
      return a < 11 ? "pagi" : a < 15 ? "tengahari" : a < 19 ? "petang" : "malam";
    }, calendar: { sameDay: "[Hari ini pukul] LT", nextDay: "[Esok pukul] LT", nextWeek: "dddd [pukul] LT", lastDay: "[Kelmarin pukul] LT", lastWeek: "dddd [lepas pukul] LT", sameElse: "L" }, relativeTime: { future: "dalam %s", past: "%s yang lepas", s: "beberapa saat", m: "seminit", mm: "%d minit", h: "sejam", hh: "%d jam", d: "sehari", dd: "%d hari", M: "sebulan", MM: "%d bulan", y: "setahun", yy: "%d tahun" }, week: { dow: 1, doy: 7 } });
  //! moment.js locale configuration
  //! locale : Burmese [my]
  //! author : Squar team, mysquar.com
  //! author : David Rossellat : https://github.com/gholadr
  //! author : Tin Aung Lin : https://github.com/thanyawzinmin
  var sh = { 1: "၁", 2: "၂", 3: "၃", 4: "၄", 5: "၅", 6: "၆", 7: "၇", 8: "၈", 9: "၉", 0: "၀" },
      th = { "၁": "1", "၂": "2", "၃": "3", "၄": "4", "၅": "5", "၆": "6", "၇": "7", "၈": "8", "၉": "9", "၀": "0" };a.defineLocale("my", { months: "ဇန်နဝါရီ_ဖေဖော်ဝါရီ_မတ်_ဧပြီ_မေ_ဇွန်_ဇူလိုင်_သြဂုတ်_စက်တင်ဘာ_အောက်တိုဘာ_နိုဝင်ဘာ_ဒီဇင်ဘာ".split("_"), monthsShort: "ဇန်_ဖေ_မတ်_ပြီ_မေ_ဇွန်_လိုင်_သြ_စက်_အောက်_နို_ဒီ".split("_"), weekdays: "တနင်္ဂနွေ_တနင်္လာ_အင်္ဂါ_ဗုဒ္ဓဟူး_ကြာသပတေး_သောကြာ_စနေ".split("_"), weekdaysShort: "နွေ_လာ_ဂါ_ဟူး_ကြာ_သော_နေ".split("_"), weekdaysMin: "နွေ_လာ_ဂါ_ဟူး_ကြာ_သော_နေ".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, calendar: { sameDay: "[ယနေ.] LT [မှာ]", nextDay: "[မနက်ဖြန်] LT [မှာ]", nextWeek: "dddd LT [မှာ]", lastDay: "[မနေ.က] LT [မှာ]", lastWeek: "[ပြီးခဲ့သော] dddd LT [မှာ]", sameElse: "L" }, relativeTime: { future: "လာမည့် %s မှာ", past: "လွန်ခဲ့သော %s က", s: "စက္ကန်.အနည်းငယ်", m: "တစ်မိနစ်", mm: "%d မိနစ်", h: "တစ်နာရီ", hh: "%d နာရီ", d: "တစ်ရက်", dd: "%d ရက်", M: "တစ်လ", MM: "%d လ", y: "တစ်နှစ်", yy: "%d နှစ်" }, preparse: function preparse(a) {
      return a.replace(/[၁၂၃၄၅၆၇၈၉၀]/g, function (a) {
        return th[a];
      });
    }, postformat: function postformat(a) {
      return a.replace(/\d/g, function (a) {
        return sh[a];
      });
    }, week: { dow: 1, doy: 4 } }),
  //! moment.js locale configuration
  //! locale : Norwegian Bokmål [nb]
  //! authors : Espen Hovlandsdal : https://github.com/rexxars
  //!           Sigurd Gartmann : https://github.com/sigurdga
  a.defineLocale("nb", { months: "januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"), monthsShort: "jan._feb._mars_april_mai_juni_juli_aug._sep._okt._nov._des.".split("_"), monthsParseExact: !0, weekdays: "søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag".split("_"), weekdaysShort: "sø._ma._ti._on._to._fr._lø.".split("_"), weekdaysMin: "sø_ma_ti_on_to_fr_lø".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY [kl.] HH:mm", LLLL: "dddd D. MMMM YYYY [kl.] HH:mm" }, calendar: { sameDay: "[i dag kl.] LT", nextDay: "[i morgen kl.] LT", nextWeek: "dddd [kl.] LT", lastDay: "[i går kl.] LT", lastWeek: "[forrige] dddd [kl.] LT", sameElse: "L" }, relativeTime: { future: "om %s", past: "%s siden", s: "noen sekunder", m: "ett minutt", mm: "%d minutter", h: "en time", hh: "%d timer", d: "en dag", dd: "%d dager", M: "en måned", MM: "%d måneder", y: "ett år", yy: "%d år" }, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 4 } });
  //! moment.js locale configuration
  //! locale : Nepalese [ne]
  //! author : suvash : https://github.com/suvash
  var uh = { 1: "१", 2: "२", 3: "३", 4: "४", 5: "५", 6: "६", 7: "७", 8: "८", 9: "९", 0: "०" },
      vh = { "१": "1", "२": "2", "३": "3", "४": "4", "५": "5", "६": "6", "७": "7", "८": "8", "९": "9", "०": "0" };a.defineLocale("ne", { months: "जनवरी_फेब्रुवरी_मार्च_अप्रिल_मई_जुन_जुलाई_अगष्ट_सेप्टेम्बर_अक्टोबर_नोभेम्बर_डिसेम्बर".split("_"), monthsShort: "जन._फेब्रु._मार्च_अप्रि._मई_जुन_जुलाई._अग._सेप्ट._अक्टो._नोभे._डिसे.".split("_"), monthsParseExact: !0, weekdays: "आइतबार_सोमबार_मङ्गलबार_बुधबार_बिहिबार_शुक्रबार_शनिबार".split("_"), weekdaysShort: "आइत._सोम._मङ्गल._बुध._बिहि._शुक्र._शनि.".split("_"), weekdaysMin: "आ._सो._मं._बु._बि._शु._श.".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "Aको h:mm बजे", LTS: "Aको h:mm:ss बजे", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY, Aको h:mm बजे", LLLL: "dddd, D MMMM YYYY, Aको h:mm बजे" }, preparse: function preparse(a) {
      return a.replace(/[१२३४५६७८९०]/g, function (a) {
        return vh[a];
      });
    }, postformat: function postformat(a) {
      return a.replace(/\d/g, function (a) {
        return uh[a];
      });
    }, meridiemParse: /राति|बिहान|दिउँसो|साँझ/, meridiemHour: function meridiemHour(a, b) {
      return 12 === a && (a = 0), "राति" === b ? a < 4 ? a : a + 12 : "बिहान" === b ? a : "दिउँसो" === b ? a >= 10 ? a : a + 12 : "साँझ" === b ? a + 12 : void 0;
    }, meridiem: function meridiem(a, b, c) {
      return a < 3 ? "राति" : a < 12 ? "बिहान" : a < 16 ? "दिउँसो" : a < 20 ? "साँझ" : "राति";
    }, calendar: { sameDay: "[आज] LT", nextDay: "[भोलि] LT", nextWeek: "[आउँदो] dddd[,] LT", lastDay: "[हिजो] LT", lastWeek: "[गएको] dddd[,] LT", sameElse: "L" }, relativeTime: { future: "%sमा", past: "%s अगाडि", s: "केही क्षण", m: "एक मिनेट", mm: "%d मिनेट", h: "एक घण्टा", hh: "%d घण्टा", d: "एक दिन", dd: "%d दिन", M: "एक महिना", MM: "%d महिना", y: "एक बर्ष", yy: "%d बर्ष" }, week: { dow: 0, doy: 6 } });
  //! moment.js locale configuration
  //! locale : Dutch (Belgium) [nl-be]
  //! author : Joris Röling : https://github.com/jorisroling
  //! author : Jacob Middag : https://github.com/middagj
  var wh = "jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.".split("_"),
      xh = "jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec".split("_"),
      yh = [/^jan/i, /^feb/i, /^maart|mrt.?$/i, /^apr/i, /^mei$/i, /^jun[i.]?$/i, /^jul[i.]?$/i, /^aug/i, /^sep/i, /^okt/i, /^nov/i, /^dec/i],
      zh = /^(januari|februari|maart|april|mei|april|ju[nl]i|augustus|september|oktober|november|december|jan\.?|feb\.?|mrt\.?|apr\.?|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i;a.defineLocale("nl-be", { months: "januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december".split("_"), monthsShort: function monthsShort(a, b) {
      return a ? /-MMM-/.test(b) ? xh[a.month()] : wh[a.month()] : wh;
    }, monthsRegex: zh, monthsShortRegex: zh, monthsStrictRegex: /^(januari|februari|maart|mei|ju[nl]i|april|augustus|september|oktober|november|december)/i, monthsShortStrictRegex: /^(jan\.?|feb\.?|mrt\.?|apr\.?|mei|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i, monthsParse: yh, longMonthsParse: yh, shortMonthsParse: yh, weekdays: "zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag".split("_"), weekdaysShort: "zo._ma._di._wo._do._vr._za.".split("_"), weekdaysMin: "Zo_Ma_Di_Wo_Do_Vr_Za".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, calendar: { sameDay: "[vandaag om] LT", nextDay: "[morgen om] LT", nextWeek: "dddd [om] LT", lastDay: "[gisteren om] LT", lastWeek: "[afgelopen] dddd [om] LT", sameElse: "L" }, relativeTime: { future: "over %s", past: "%s geleden", s: "een paar seconden", m: "één minuut", mm: "%d minuten", h: "één uur", hh: "%d uur", d: "één dag", dd: "%d dagen", M: "één maand", MM: "%d maanden", y: "één jaar", yy: "%d jaar" }, dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/, ordinal: function ordinal(a) {
      return a + (1 === a || 8 === a || a >= 20 ? "ste" : "de");
    }, week: { dow: 1, doy: 4 } });
  //! moment.js locale configuration
  //! locale : Dutch [nl]
  //! author : Joris Röling : https://github.com/jorisroling
  //! author : Jacob Middag : https://github.com/middagj
  var Ah = "jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.".split("_"),
      Bh = "jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec".split("_"),
      Ch = [/^jan/i, /^feb/i, /^maart|mrt.?$/i, /^apr/i, /^mei$/i, /^jun[i.]?$/i, /^jul[i.]?$/i, /^aug/i, /^sep/i, /^okt/i, /^nov/i, /^dec/i],
      Dh = /^(januari|februari|maart|april|mei|april|ju[nl]i|augustus|september|oktober|november|december|jan\.?|feb\.?|mrt\.?|apr\.?|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i;a.defineLocale("nl", { months: "januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december".split("_"), monthsShort: function monthsShort(a, b) {
      return a ? /-MMM-/.test(b) ? Bh[a.month()] : Ah[a.month()] : Ah;
    }, monthsRegex: Dh, monthsShortRegex: Dh, monthsStrictRegex: /^(januari|februari|maart|mei|ju[nl]i|april|augustus|september|oktober|november|december)/i, monthsShortStrictRegex: /^(jan\.?|feb\.?|mrt\.?|apr\.?|mei|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i, monthsParse: Ch, longMonthsParse: Ch, shortMonthsParse: Ch, weekdays: "zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag".split("_"), weekdaysShort: "zo._ma._di._wo._do._vr._za.".split("_"), weekdaysMin: "Zo_Ma_Di_Wo_Do_Vr_Za".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD-MM-YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, calendar: { sameDay: "[vandaag om] LT", nextDay: "[morgen om] LT", nextWeek: "dddd [om] LT", lastDay: "[gisteren om] LT", lastWeek: "[afgelopen] dddd [om] LT", sameElse: "L" }, relativeTime: { future: "over %s", past: "%s geleden", s: "een paar seconden", m: "één minuut", mm: "%d minuten", h: "één uur", hh: "%d uur", d: "één dag", dd: "%d dagen", M: "één maand", MM: "%d maanden", y: "één jaar", yy: "%d jaar" }, dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/, ordinal: function ordinal(a) {
      return a + (1 === a || 8 === a || a >= 20 ? "ste" : "de");
    }, week: { dow: 1, doy: 4 } }),
  //! moment.js locale configuration
  //! locale : Nynorsk [nn]
  //! author : https://github.com/mechuwind
  a.defineLocale("nn", { months: "januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"), monthsShort: "jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_"), weekdays: "sundag_måndag_tysdag_onsdag_torsdag_fredag_laurdag".split("_"), weekdaysShort: "sun_mån_tys_ons_tor_fre_lau".split("_"), weekdaysMin: "su_må_ty_on_to_fr_lø".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY [kl.] H:mm", LLLL: "dddd D. MMMM YYYY [kl.] HH:mm" }, calendar: { sameDay: "[I dag klokka] LT", nextDay: "[I morgon klokka] LT", nextWeek: "dddd [klokka] LT", lastDay: "[I går klokka] LT", lastWeek: "[Føregåande] dddd [klokka] LT", sameElse: "L" }, relativeTime: { future: "om %s", past: "%s sidan", s: "nokre sekund", m: "eit minutt", mm: "%d minutt", h: "ein time", hh: "%d timar", d: "ein dag", dd: "%d dagar", M: "ein månad", MM: "%d månader", y: "eit år", yy: "%d år" }, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 4 } });
  //! moment.js locale configuration
  //! locale : Punjabi (India) [pa-in]
  //! author : Harpreet Singh : https://github.com/harpreetkhalsagtbit
  var Eh = { 1: "੧", 2: "੨", 3: "੩", 4: "੪", 5: "੫", 6: "੬", 7: "੭", 8: "੮", 9: "੯", 0: "੦" },
      Fh = { "੧": "1", "੨": "2", "੩": "3", "੪": "4", "੫": "5", "੬": "6", "੭": "7", "੮": "8", "੯": "9", "੦": "0" };a.defineLocale("pa-in", { months: "ਜਨਵਰੀ_ਫ਼ਰਵਰੀ_ਮਾਰਚ_ਅਪ੍ਰੈਲ_ਮਈ_ਜੂਨ_ਜੁਲਾਈ_ਅਗਸਤ_ਸਤੰਬਰ_ਅਕਤੂਬਰ_ਨਵੰਬਰ_ਦਸੰਬਰ".split("_"), monthsShort: "ਜਨਵਰੀ_ਫ਼ਰਵਰੀ_ਮਾਰਚ_ਅਪ੍ਰੈਲ_ਮਈ_ਜੂਨ_ਜੁਲਾਈ_ਅਗਸਤ_ਸਤੰਬਰ_ਅਕਤੂਬਰ_ਨਵੰਬਰ_ਦਸੰਬਰ".split("_"), weekdays: "ਐਤਵਾਰ_ਸੋਮਵਾਰ_ਮੰਗਲਵਾਰ_ਬੁਧਵਾਰ_ਵੀਰਵਾਰ_ਸ਼ੁੱਕਰਵਾਰ_ਸ਼ਨੀਚਰਵਾਰ".split("_"), weekdaysShort: "ਐਤ_ਸੋਮ_ਮੰਗਲ_ਬੁਧ_ਵੀਰ_ਸ਼ੁਕਰ_ਸ਼ਨੀ".split("_"), weekdaysMin: "ਐਤ_ਸੋਮ_ਮੰਗਲ_ਬੁਧ_ਵੀਰ_ਸ਼ੁਕਰ_ਸ਼ਨੀ".split("_"), longDateFormat: { LT: "A h:mm ਵਜੇ", LTS: "A h:mm:ss ਵਜੇ", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY, A h:mm ਵਜੇ", LLLL: "dddd, D MMMM YYYY, A h:mm ਵਜੇ" }, calendar: { sameDay: "[ਅਜ] LT", nextDay: "[ਕਲ] LT", nextWeek: "dddd, LT", lastDay: "[ਕਲ] LT", lastWeek: "[ਪਿਛਲੇ] dddd, LT", sameElse: "L" }, relativeTime: { future: "%s ਵਿੱਚ", past: "%s ਪਿਛਲੇ", s: "ਕੁਝ ਸਕਿੰਟ", m: "ਇਕ ਮਿੰਟ", mm: "%d ਮਿੰਟ", h: "ਇੱਕ ਘੰਟਾ", hh: "%d ਘੰਟੇ", d: "ਇੱਕ ਦਿਨ", dd: "%d ਦਿਨ", M: "ਇੱਕ ਮਹੀਨਾ", MM: "%d ਮਹੀਨੇ", y: "ਇੱਕ ਸਾਲ", yy: "%d ਸਾਲ" }, preparse: function preparse(a) {
      return a.replace(/[੧੨੩੪੫੬੭੮੯੦]/g, function (a) {
        return Fh[a];
      });
    }, postformat: function postformat(a) {
      return a.replace(/\d/g, function (a) {
        return Eh[a];
      });
    }, meridiemParse: /ਰਾਤ|ਸਵੇਰ|ਦੁਪਹਿਰ|ਸ਼ਾਮ/, meridiemHour: function meridiemHour(a, b) {
      return 12 === a && (a = 0), "ਰਾਤ" === b ? a < 4 ? a : a + 12 : "ਸਵੇਰ" === b ? a : "ਦੁਪਹਿਰ" === b ? a >= 10 ? a : a + 12 : "ਸ਼ਾਮ" === b ? a + 12 : void 0;
    }, meridiem: function meridiem(a, b, c) {
      return a < 4 ? "ਰਾਤ" : a < 10 ? "ਸਵੇਰ" : a < 17 ? "ਦੁਪਹਿਰ" : a < 20 ? "ਸ਼ਾਮ" : "ਰਾਤ";
    }, week: { dow: 0, doy: 6 } });
  //! moment.js locale configuration
  //! locale : Polish [pl]
  //! author : Rafal Hirsz : https://github.com/evoL
  var Gh = "styczeń_luty_marzec_kwiecień_maj_czerwiec_lipiec_sierpień_wrzesień_październik_listopad_grudzień".split("_"),
      Hh = "stycznia_lutego_marca_kwietnia_maja_czerwca_lipca_sierpnia_września_października_listopada_grudnia".split("_");a.defineLocale("pl", { months: function months(a, b) {
      return a ? "" === b ? "(" + Hh[a.month()] + "|" + Gh[a.month()] + ")" : /D MMMM/.test(b) ? Hh[a.month()] : Gh[a.month()] : Gh;
    }, monthsShort: "sty_lut_mar_kwi_maj_cze_lip_sie_wrz_paź_lis_gru".split("_"), weekdays: "niedziela_poniedziałek_wtorek_środa_czwartek_piątek_sobota".split("_"), weekdaysShort: "ndz_pon_wt_śr_czw_pt_sob".split("_"), weekdaysMin: "Nd_Pn_Wt_Śr_Cz_Pt_So".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, calendar: { sameDay: "[Dziś o] LT", nextDay: "[Jutro o] LT", nextWeek: "[W] dddd [o] LT", lastDay: "[Wczoraj o] LT", lastWeek: function lastWeek() {
        switch (this.day()) {case 0:
            return "[W zeszłą niedzielę o] LT";case 3:
            return "[W zeszłą środę o] LT";case 6:
            return "[W zeszłą sobotę o] LT";default:
            return "[W zeszły] dddd [o] LT";}
      }, sameElse: "L" }, relativeTime: { future: "za %s", past: "%s temu", s: "kilka sekund", m: be, mm: be, h: be, hh: be, d: "1 dzień", dd: "%d dni", M: "miesiąc", MM: be, y: "rok", yy: be }, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 4 } }),
  //! moment.js locale configuration
  //! locale : Portuguese (Brazil) [pt-br]
  //! author : Caio Ribeiro Pereira : https://github.com/caio-ribeiro-pereira
  a.defineLocale("pt-br", { months: "Janeiro_Fevereiro_Março_Abril_Maio_Junho_Julho_Agosto_Setembro_Outubro_Novembro_Dezembro".split("_"), monthsShort: "Jan_Fev_Mar_Abr_Mai_Jun_Jul_Ago_Set_Out_Nov_Dez".split("_"), weekdays: "Domingo_Segunda-feira_Terça-feira_Quarta-feira_Quinta-feira_Sexta-feira_Sábado".split("_"), weekdaysShort: "Dom_Seg_Ter_Qua_Qui_Sex_Sáb".split("_"), weekdaysMin: "Do_2ª_3ª_4ª_5ª_6ª_Sá".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D [de] MMMM [de] YYYY", LLL: "D [de] MMMM [de] YYYY [às] HH:mm", LLLL: "dddd, D [de] MMMM [de] YYYY [às] HH:mm" }, calendar: { sameDay: "[Hoje às] LT", nextDay: "[Amanhã às] LT", nextWeek: "dddd [às] LT", lastDay: "[Ontem às] LT", lastWeek: function lastWeek() {
        return 0 === this.day() || 6 === this.day() ? "[Último] dddd [às] LT" : "[Última] dddd [às] LT";
      }, sameElse: "L" }, relativeTime: { future: "em %s", past: "%s atrás", s: "poucos segundos", m: "um minuto", mm: "%d minutos", h: "uma hora", hh: "%d horas", d: "um dia", dd: "%d dias", M: "um mês", MM: "%d meses", y: "um ano", yy: "%d anos" }, dayOfMonthOrdinalParse: /\d{1,2}º/, ordinal: "%dº" }),
  //! moment.js locale configuration
  //! locale : Portuguese [pt]
  //! author : Jefferson : https://github.com/jalex79
  a.defineLocale("pt", { months: "Janeiro_Fevereiro_Março_Abril_Maio_Junho_Julho_Agosto_Setembro_Outubro_Novembro_Dezembro".split("_"), monthsShort: "Jan_Fev_Mar_Abr_Mai_Jun_Jul_Ago_Set_Out_Nov_Dez".split("_"), weekdays: "Domingo_Segunda-Feira_Terça-Feira_Quarta-Feira_Quinta-Feira_Sexta-Feira_Sábado".split("_"), weekdaysShort: "Dom_Seg_Ter_Qua_Qui_Sex_Sáb".split("_"), weekdaysMin: "Do_2ª_3ª_4ª_5ª_6ª_Sá".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D [de] MMMM [de] YYYY", LLL: "D [de] MMMM [de] YYYY HH:mm", LLLL: "dddd, D [de] MMMM [de] YYYY HH:mm" }, calendar: { sameDay: "[Hoje às] LT", nextDay: "[Amanhã às] LT", nextWeek: "dddd [às] LT", lastDay: "[Ontem às] LT", lastWeek: function lastWeek() {
        return 0 === this.day() || 6 === this.day() ? "[Último] dddd [às] LT" : "[Última] dddd [às] LT";
      }, sameElse: "L" }, relativeTime: { future: "em %s", past: "há %s", s: "segundos", m: "um minuto", mm: "%d minutos", h: "uma hora", hh: "%d horas", d: "um dia", dd: "%d dias", M: "um mês", MM: "%d meses", y: "um ano", yy: "%d anos" }, dayOfMonthOrdinalParse: /\d{1,2}º/, ordinal: "%dº", week: { dow: 1, doy: 4 } }), a.defineLocale("ro", { months: "ianuarie_februarie_martie_aprilie_mai_iunie_iulie_august_septembrie_octombrie_noiembrie_decembrie".split("_"), monthsShort: "ian._febr._mart._apr._mai_iun._iul._aug._sept._oct._nov._dec.".split("_"), monthsParseExact: !0, weekdays: "duminică_luni_marți_miercuri_joi_vineri_sâmbătă".split("_"), weekdaysShort: "Dum_Lun_Mar_Mie_Joi_Vin_Sâm".split("_"), weekdaysMin: "Du_Lu_Ma_Mi_Jo_Vi_Sâ".split("_"), longDateFormat: { LT: "H:mm", LTS: "H:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY H:mm", LLLL: "dddd, D MMMM YYYY H:mm" }, calendar: { sameDay: "[azi la] LT", nextDay: "[mâine la] LT", nextWeek: "dddd [la] LT", lastDay: "[ieri la] LT", lastWeek: "[fosta] dddd [la] LT", sameElse: "L" }, relativeTime: { future: "peste %s", past: "%s în urmă", s: "câteva secunde", m: "un minut", mm: ce, h: "o oră", hh: ce, d: "o zi", dd: ce, M: "o lună", MM: ce, y: "un an", yy: ce }, week: { dow: 1, doy: 7 } });var Ih = [/^янв/i, /^фев/i, /^мар/i, /^апр/i, /^ма[йя]/i, /^июн/i, /^июл/i, /^авг/i, /^сен/i, /^окт/i, /^ноя/i, /^дек/i];a.defineLocale("ru", { months: { format: "января_февраля_марта_апреля_мая_июня_июля_августа_сентября_октября_ноября_декабря".split("_"), standalone: "январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь".split("_") }, monthsShort: { format: "янв._февр._мар._апр._мая_июня_июля_авг._сент._окт._нояб._дек.".split("_"), standalone: "янв._февр._март_апр._май_июнь_июль_авг._сент._окт._нояб._дек.".split("_") }, weekdays: { standalone: "воскресенье_понедельник_вторник_среда_четверг_пятница_суббота".split("_"), format: "воскресенье_понедельник_вторник_среду_четверг_пятницу_субботу".split("_"), isFormat: /\[ ?[Вв] ?(?:прошлую|следующую|эту)? ?\] ?dddd/ }, weekdaysShort: "вс_пн_вт_ср_чт_пт_сб".split("_"), weekdaysMin: "вс_пн_вт_ср_чт_пт_сб".split("_"), monthsParse: Ih, longMonthsParse: Ih, shortMonthsParse: Ih, monthsRegex: /^(январ[ья]|янв\.?|феврал[ья]|февр?\.?|марта?|мар\.?|апрел[ья]|апр\.?|ма[йя]|июн[ья]|июн\.?|июл[ья]|июл\.?|августа?|авг\.?|сентябр[ья]|сент?\.?|октябр[ья]|окт\.?|ноябр[ья]|нояб?\.?|декабр[ья]|дек\.?)/i, monthsShortRegex: /^(январ[ья]|янв\.?|феврал[ья]|февр?\.?|марта?|мар\.?|апрел[ья]|апр\.?|ма[йя]|июн[ья]|июн\.?|июл[ья]|июл\.?|августа?|авг\.?|сентябр[ья]|сент?\.?|октябр[ья]|окт\.?|ноябр[ья]|нояб?\.?|декабр[ья]|дек\.?)/i, monthsStrictRegex: /^(январ[яь]|феврал[яь]|марта?|апрел[яь]|ма[яй]|июн[яь]|июл[яь]|августа?|сентябр[яь]|октябр[яь]|ноябр[яь]|декабр[яь])/i, monthsShortStrictRegex: /^(янв\.|февр?\.|мар[т.]|апр\.|ма[яй]|июн[ья.]|июл[ья.]|авг\.|сент?\.|окт\.|нояб?\.|дек\.)/i, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY г.", LLL: "D MMMM YYYY г., HH:mm", LLLL: "dddd, D MMMM YYYY г., HH:mm" }, calendar: { sameDay: "[Сегодня в] LT", nextDay: "[Завтра в] LT", lastDay: "[Вчера в] LT", nextWeek: function nextWeek(a) {
        if (a.week() === this.week()) return 2 === this.day() ? "[Во] dddd [в] LT" : "[В] dddd [в] LT";switch (this.day()) {case 0:
            return "[В следующее] dddd [в] LT";case 1:case 2:case 4:
            return "[В следующий] dddd [в] LT";case 3:case 5:case 6:
            return "[В следующую] dddd [в] LT";}
      }, lastWeek: function lastWeek(a) {
        if (a.week() === this.week()) return 2 === this.day() ? "[Во] dddd [в] LT" : "[В] dddd [в] LT";switch (this.day()) {case 0:
            return "[В прошлое] dddd [в] LT";case 1:case 2:case 4:
            return "[В прошлый] dddd [в] LT";case 3:case 5:case 6:
            return "[В прошлую] dddd [в] LT";}
      }, sameElse: "L" }, relativeTime: { future: "через %s", past: "%s назад", s: "несколько секунд", m: ee, mm: ee, h: "час", hh: ee, d: "день", dd: ee, M: "месяц", MM: ee, y: "год", yy: ee }, meridiemParse: /ночи|утра|дня|вечера/i, isPM: function isPM(a) {
      return (/^(дня|вечера)$/.test(a)
      );
    }, meridiem: function meridiem(a, b, c) {
      return a < 4 ? "ночи" : a < 12 ? "утра" : a < 17 ? "дня" : "вечера";
    }, dayOfMonthOrdinalParse: /\d{1,2}-(й|го|я)/, ordinal: function ordinal(a, b) {
      switch (b) {case "M":case "d":case "DDD":
          return a + "-й";case "D":
          return a + "-го";case "w":case "W":
          return a + "-я";default:
          return a;}
    }, week: { dow: 1, doy: 7 } });
  //! moment.js locale configuration
  //! locale : Sindhi [sd]
  //! author : Narain Sagar : https://github.com/narainsagar
  var Jh = ["جنوري", "فيبروري", "مارچ", "اپريل", "مئي", "جون", "جولاءِ", "آگسٽ", "سيپٽمبر", "آڪٽوبر", "نومبر", "ڊسمبر"],
      Kh = ["آچر", "سومر", "اڱارو", "اربع", "خميس", "جمع", "ڇنڇر"];a.defineLocale("sd", { months: Jh, monthsShort: Jh, weekdays: Kh, weekdaysShort: Kh, weekdaysMin: Kh, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd، D MMMM YYYY HH:mm" }, meridiemParse: /صبح|شام/, isPM: function isPM(a) {
      return "شام" === a;
    }, meridiem: function meridiem(a, b, c) {
      return a < 12 ? "صبح" : "شام";
    }, calendar: { sameDay: "[اڄ] LT", nextDay: "[سڀاڻي] LT", nextWeek: "dddd [اڳين هفتي تي] LT", lastDay: "[ڪالهه] LT", lastWeek: "[گزريل هفتي] dddd [تي] LT", sameElse: "L" }, relativeTime: { future: "%s پوء", past: "%s اڳ", s: "چند سيڪنڊ", m: "هڪ منٽ", mm: "%d منٽ", h: "هڪ ڪلاڪ", hh: "%d ڪلاڪ", d: "هڪ ڏينهن", dd: "%d ڏينهن", M: "هڪ مهينو", MM: "%d مهينا", y: "هڪ سال", yy: "%d سال" }, preparse: function preparse(a) {
      return a.replace(/،/g, ",");
    }, postformat: function postformat(a) {
      return a.replace(/,/g, "،");
    }, week: { dow: 1, doy: 4 } }),
  //! moment.js locale configuration
  //! locale : Northern Sami [se]
  //! authors : Bård Rolstad Henriksen : https://github.com/karamell
  a.defineLocale("se", { months: "ođđajagemánnu_guovvamánnu_njukčamánnu_cuoŋománnu_miessemánnu_geassemánnu_suoidnemánnu_borgemánnu_čakčamánnu_golggotmánnu_skábmamánnu_juovlamánnu".split("_"), monthsShort: "ođđj_guov_njuk_cuo_mies_geas_suoi_borg_čakč_golg_skáb_juov".split("_"), weekdays: "sotnabeaivi_vuossárga_maŋŋebárga_gaskavahkku_duorastat_bearjadat_lávvardat".split("_"), weekdaysShort: "sotn_vuos_maŋ_gask_duor_bear_láv".split("_"), weekdaysMin: "s_v_m_g_d_b_L".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "MMMM D. [b.] YYYY", LLL: "MMMM D. [b.] YYYY [ti.] HH:mm", LLLL: "dddd, MMMM D. [b.] YYYY [ti.] HH:mm" }, calendar: { sameDay: "[otne ti] LT", nextDay: "[ihttin ti] LT", nextWeek: "dddd [ti] LT", lastDay: "[ikte ti] LT", lastWeek: "[ovddit] dddd [ti] LT", sameElse: "L" }, relativeTime: { future: "%s geažes", past: "maŋit %s", s: "moadde sekunddat", m: "okta minuhta", mm: "%d minuhtat", h: "okta diimmu", hh: "%d diimmut", d: "okta beaivi", dd: "%d beaivvit", M: "okta mánnu", MM: "%d mánut", y: "okta jahki", yy: "%d jagit" }, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 4 } }),
  //! moment.js locale configuration
  //! locale : Sinhalese [si]
  //! author : Sampath Sitinamaluwa : https://github.com/sampathsris
  a.defineLocale("si", { months: "ජනවාරි_පෙබරවාරි_මාර්තු_අප්‍රේල්_මැයි_ජූනි_ජූලි_අගෝස්තු_සැප්තැම්බර්_ඔක්තෝබර්_නොවැම්බර්_දෙසැම්බර්".split("_"), monthsShort: "ජන_පෙබ_මාර්_අප්_මැයි_ජූනි_ජූලි_අගෝ_සැප්_ඔක්_නොවැ_දෙසැ".split("_"), weekdays: "ඉරිදා_සඳුදා_අඟහරුවාදා_බදාදා_බ්‍රහස්පතින්දා_සිකුරාදා_සෙනසුරාදා".split("_"), weekdaysShort: "ඉරි_සඳු_අඟ_බදා_බ්‍රහ_සිකු_සෙන".split("_"), weekdaysMin: "ඉ_ස_අ_බ_බ්‍ර_සි_සෙ".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "a h:mm", LTS: "a h:mm:ss", L: "YYYY/MM/DD", LL: "YYYY MMMM D", LLL: "YYYY MMMM D, a h:mm", LLLL: "YYYY MMMM D [වැනි] dddd, a h:mm:ss" }, calendar: { sameDay: "[අද] LT[ට]", nextDay: "[හෙට] LT[ට]", nextWeek: "dddd LT[ට]", lastDay: "[ඊයේ] LT[ට]", lastWeek: "[පසුගිය] dddd LT[ට]", sameElse: "L" }, relativeTime: { future: "%sකින්", past: "%sකට පෙර", s: "තත්පර කිහිපය", m: "මිනිත්තුව", mm: "මිනිත්තු %d", h: "පැය", hh: "පැය %d", d: "දිනය", dd: "දින %d", M: "මාසය", MM: "මාස %d", y: "වසර", yy: "වසර %d" }, dayOfMonthOrdinalParse: /\d{1,2} වැනි/, ordinal: function ordinal(a) {
      return a + " වැනි";
    }, meridiemParse: /පෙර වරු|පස් වරු|පෙ.ව|ප.ව./, isPM: function isPM(a) {
      return "ප.ව." === a || "පස් වරු" === a;
    }, meridiem: function meridiem(a, b, c) {
      return a > 11 ? c ? "ප.ව." : "පස් වරු" : c ? "පෙ.ව." : "පෙර වරු";
    } });
  //! moment.js locale configuration
  //! locale : Slovak [sk]
  //! author : Martin Minka : https://github.com/k2s
  //! based on work of petrbela : https://github.com/petrbela
  var Lh = "január_február_marec_apríl_máj_jún_júl_august_september_október_november_december".split("_"),
      Mh = "jan_feb_mar_apr_máj_jún_júl_aug_sep_okt_nov_dec".split("_");a.defineLocale("sk", { months: Lh, monthsShort: Mh, weekdays: "nedeľa_pondelok_utorok_streda_štvrtok_piatok_sobota".split("_"), weekdaysShort: "ne_po_ut_st_št_pi_so".split("_"), weekdaysMin: "ne_po_ut_st_št_pi_so".split("_"), longDateFormat: { LT: "H:mm", LTS: "H:mm:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY H:mm", LLLL: "dddd D. MMMM YYYY H:mm" }, calendar: { sameDay: "[dnes o] LT", nextDay: "[zajtra o] LT", nextWeek: function nextWeek() {
        switch (this.day()) {case 0:
            return "[v nedeľu o] LT";case 1:case 2:
            return "[v] dddd [o] LT";case 3:
            return "[v stredu o] LT";case 4:
            return "[vo štvrtok o] LT";case 5:
            return "[v piatok o] LT";case 6:
            return "[v sobotu o] LT";}
      }, lastDay: "[včera o] LT", lastWeek: function lastWeek() {
        switch (this.day()) {case 0:
            return "[minulú nedeľu o] LT";case 1:case 2:
            return "[minulý] dddd [o] LT";case 3:
            return "[minulú stredu o] LT";case 4:case 5:
            return "[minulý] dddd [o] LT";case 6:
            return "[minulú sobotu o] LT";}
      }, sameElse: "L" }, relativeTime: { future: "za %s", past: "pred %s", s: ge, m: ge, mm: ge, h: ge, hh: ge, d: ge, dd: ge, M: ge, MM: ge, y: ge, yy: ge }, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 4 } }), a.defineLocale("sl", { months: "januar_februar_marec_april_maj_junij_julij_avgust_september_oktober_november_december".split("_"), monthsShort: "jan._feb._mar._apr._maj._jun._jul._avg._sep._okt._nov._dec.".split("_"), monthsParseExact: !0, weekdays: "nedelja_ponedeljek_torek_sreda_četrtek_petek_sobota".split("_"), weekdaysShort: "ned._pon._tor._sre._čet._pet._sob.".split("_"), weekdaysMin: "ne_po_to_sr_če_pe_so".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "H:mm", LTS: "H:mm:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY H:mm", LLLL: "dddd, D. MMMM YYYY H:mm" }, calendar: { sameDay: "[danes ob] LT", nextDay: "[jutri ob] LT", nextWeek: function nextWeek() {
        switch (this.day()) {case 0:
            return "[v] [nedeljo] [ob] LT";case 3:
            return "[v] [sredo] [ob] LT";case 6:
            return "[v] [soboto] [ob] LT";case 1:case 2:case 4:case 5:
            return "[v] dddd [ob] LT";}
      }, lastDay: "[včeraj ob] LT", lastWeek: function lastWeek() {
        switch (this.day()) {case 0:
            return "[prejšnjo] [nedeljo] [ob] LT";case 3:
            return "[prejšnjo] [sredo] [ob] LT";case 6:
            return "[prejšnjo] [soboto] [ob] LT";case 1:case 2:case 4:case 5:
            return "[prejšnji] dddd [ob] LT";}
      }, sameElse: "L" }, relativeTime: { future: "čez %s", past: "pred %s", s: he, m: he, mm: he, h: he, hh: he, d: he, dd: he, M: he, MM: he, y: he, yy: he }, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 7 } }),
  //! moment.js locale configuration
  //! locale : Albanian [sq]
  //! author : Flakërim Ismani : https://github.com/flakerimi
  //! author : Menelion Elensúle : https://github.com/Oire
  //! author : Oerd Cukalla : https://github.com/oerd
  a.defineLocale("sq", { months: "Janar_Shkurt_Mars_Prill_Maj_Qershor_Korrik_Gusht_Shtator_Tetor_Nëntor_Dhjetor".split("_"), monthsShort: "Jan_Shk_Mar_Pri_Maj_Qer_Kor_Gus_Sht_Tet_Nën_Dhj".split("_"), weekdays: "E Diel_E Hënë_E Martë_E Mërkurë_E Enjte_E Premte_E Shtunë".split("_"), weekdaysShort: "Die_Hën_Mar_Mër_Enj_Pre_Sht".split("_"), weekdaysMin: "D_H_Ma_Më_E_P_Sh".split("_"), weekdaysParseExact: !0, meridiemParse: /PD|MD/, isPM: function isPM(a) {
      return "M" === a.charAt(0);
    }, meridiem: function meridiem(a, b, c) {
      return a < 12 ? "PD" : "MD";
    }, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, calendar: { sameDay: "[Sot në] LT", nextDay: "[Nesër në] LT", nextWeek: "dddd [në] LT", lastDay: "[Dje në] LT", lastWeek: "dddd [e kaluar në] LT", sameElse: "L" }, relativeTime: { future: "në %s", past: "%s më parë", s: "disa sekonda", m: "një minutë", mm: "%d minuta", h: "një orë", hh: "%d orë", d: "një ditë", dd: "%d ditë", M: "një muaj", MM: "%d muaj", y: "një vit", yy: "%d vite" }, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 4 } });
  //! moment.js locale configuration
  //! locale : Serbian Cyrillic [sr-cyrl]
  //! author : Milan Janačković<milanjanackovic@gmail.com> : https://github.com/milan-j
  var Nh = { words: { m: ["један минут", "једне минуте"], mm: ["минут", "минуте", "минута"], h: ["један сат", "једног сата"], hh: ["сат", "сата", "сати"], dd: ["дан", "дана", "дана"], MM: ["месец", "месеца", "месеци"], yy: ["година", "године", "година"] }, correctGrammaticalCase: function correctGrammaticalCase(a, b) {
      return 1 === a ? b[0] : a >= 2 && a <= 4 ? b[1] : b[2];
    }, translate: function translate(a, b, c) {
      var d = Nh.words[c];return 1 === c.length ? b ? d[0] : d[1] : a + " " + Nh.correctGrammaticalCase(a, d);
    } };a.defineLocale("sr-cyrl", { months: "јануар_фебруар_март_април_мај_јун_јул_август_септембар_октобар_новембар_децембар".split("_"), monthsShort: "јан._феб._мар._апр._мај_јун_јул_авг._сеп._окт._нов._дец.".split("_"), monthsParseExact: !0, weekdays: "недеља_понедељак_уторак_среда_четвртак_петак_субота".split("_"), weekdaysShort: "нед._пон._уто._сре._чет._пет._суб.".split("_"), weekdaysMin: "не_по_ут_ср_че_пе_су".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "H:mm", LTS: "H:mm:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY H:mm", LLLL: "dddd, D. MMMM YYYY H:mm" }, calendar: { sameDay: "[данас у] LT", nextDay: "[сутра у] LT", nextWeek: function nextWeek() {
        switch (this.day()) {case 0:
            return "[у] [недељу] [у] LT";case 3:
            return "[у] [среду] [у] LT";case 6:
            return "[у] [суботу] [у] LT";case 1:case 2:case 4:case 5:
            return "[у] dddd [у] LT";}
      }, lastDay: "[јуче у] LT", lastWeek: function lastWeek() {
        var a = ["[прошле] [недеље] [у] LT", "[прошлог] [понедељка] [у] LT", "[прошлог] [уторка] [у] LT", "[прошле] [среде] [у] LT", "[прошлог] [четвртка] [у] LT", "[прошлог] [петка] [у] LT", "[прошле] [суботе] [у] LT"];return a[this.day()];
      }, sameElse: "L" }, relativeTime: { future: "за %s", past: "пре %s", s: "неколико секунди", m: Nh.translate, mm: Nh.translate, h: Nh.translate, hh: Nh.translate, d: "дан", dd: Nh.translate, M: "месец", MM: Nh.translate, y: "годину", yy: Nh.translate }, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 7 } });
  //! moment.js locale configuration
  //! locale : Serbian [sr]
  //! author : Milan Janačković<milanjanackovic@gmail.com> : https://github.com/milan-j
  var Oh = { words: { m: ["jedan minut", "jedne minute"], mm: ["minut", "minute", "minuta"], h: ["jedan sat", "jednog sata"], hh: ["sat", "sata", "sati"], dd: ["dan", "dana", "dana"], MM: ["mesec", "meseca", "meseci"], yy: ["godina", "godine", "godina"] }, correctGrammaticalCase: function correctGrammaticalCase(a, b) {
      return 1 === a ? b[0] : a >= 2 && a <= 4 ? b[1] : b[2];
    }, translate: function translate(a, b, c) {
      var d = Oh.words[c];return 1 === c.length ? b ? d[0] : d[1] : a + " " + Oh.correctGrammaticalCase(a, d);
    } };a.defineLocale("sr", { months: "januar_februar_mart_april_maj_jun_jul_avgust_septembar_oktobar_novembar_decembar".split("_"), monthsShort: "jan._feb._mar._apr._maj_jun_jul_avg._sep._okt._nov._dec.".split("_"), monthsParseExact: !0, weekdays: "nedelja_ponedeljak_utorak_sreda_četvrtak_petak_subota".split("_"), weekdaysShort: "ned._pon._uto._sre._čet._pet._sub.".split("_"), weekdaysMin: "ne_po_ut_sr_če_pe_su".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "H:mm", LTS: "H:mm:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY H:mm", LLLL: "dddd, D. MMMM YYYY H:mm" }, calendar: { sameDay: "[danas u] LT", nextDay: "[sutra u] LT", nextWeek: function nextWeek() {
        switch (this.day()) {case 0:
            return "[u] [nedelju] [u] LT";case 3:
            return "[u] [sredu] [u] LT";case 6:
            return "[u] [subotu] [u] LT";case 1:case 2:case 4:case 5:
            return "[u] dddd [u] LT";}
      }, lastDay: "[juče u] LT", lastWeek: function lastWeek() {
        var a = ["[prošle] [nedelje] [u] LT", "[prošlog] [ponedeljka] [u] LT", "[prošlog] [utorka] [u] LT", "[prošle] [srede] [u] LT", "[prošlog] [četvrtka] [u] LT", "[prošlog] [petka] [u] LT", "[prošle] [subote] [u] LT"];return a[this.day()];
      }, sameElse: "L" }, relativeTime: { future: "za %s", past: "pre %s", s: "nekoliko sekundi", m: Oh.translate, mm: Oh.translate, h: Oh.translate, hh: Oh.translate, d: "dan", dd: Oh.translate, M: "mesec", MM: Oh.translate, y: "godinu", yy: Oh.translate }, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 7 } }),
  //! moment.js locale configuration
  //! locale : siSwati [ss]
  //! author : Nicolai Davies<mail@nicolai.io> : https://github.com/nicolaidavies
  a.defineLocale("ss", { months: "Bhimbidvwane_Indlovana_Indlov'lenkhulu_Mabasa_Inkhwekhweti_Inhlaba_Kholwane_Ingci_Inyoni_Imphala_Lweti_Ingongoni".split("_"), monthsShort: "Bhi_Ina_Inu_Mab_Ink_Inh_Kho_Igc_Iny_Imp_Lwe_Igo".split("_"), weekdays: "Lisontfo_Umsombuluko_Lesibili_Lesitsatfu_Lesine_Lesihlanu_Umgcibelo".split("_"), weekdaysShort: "Lis_Umb_Lsb_Les_Lsi_Lsh_Umg".split("_"), weekdaysMin: "Li_Us_Lb_Lt_Ls_Lh_Ug".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "h:mm A", LTS: "h:mm:ss A", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY h:mm A", LLLL: "dddd, D MMMM YYYY h:mm A" }, calendar: { sameDay: "[Namuhla nga] LT", nextDay: "[Kusasa nga] LT", nextWeek: "dddd [nga] LT", lastDay: "[Itolo nga] LT", lastWeek: "dddd [leliphelile] [nga] LT", sameElse: "L" }, relativeTime: { future: "nga %s", past: "wenteka nga %s", s: "emizuzwana lomcane", m: "umzuzu", mm: "%d emizuzu", h: "lihora", hh: "%d emahora", d: "lilanga", dd: "%d emalanga", M: "inyanga", MM: "%d tinyanga", y: "umnyaka", yy: "%d iminyaka" }, meridiemParse: /ekuseni|emini|entsambama|ebusuku/, meridiem: function meridiem(a, b, c) {
      return a < 11 ? "ekuseni" : a < 15 ? "emini" : a < 19 ? "entsambama" : "ebusuku";
    }, meridiemHour: function meridiemHour(a, b) {
      return 12 === a && (a = 0), "ekuseni" === b ? a : "emini" === b ? a >= 11 ? a : a + 12 : "entsambama" === b || "ebusuku" === b ? 0 === a ? 0 : a + 12 : void 0;
    }, dayOfMonthOrdinalParse: /\d{1,2}/, ordinal: "%d", week: { dow: 1, doy: 4 } }),
  //! moment.js locale configuration
  //! locale : Swedish [sv]
  //! author : Jens Alm : https://github.com/ulmus
  a.defineLocale("sv", { months: "januari_februari_mars_april_maj_juni_juli_augusti_september_oktober_november_december".split("_"), monthsShort: "jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split("_"), weekdays: "söndag_måndag_tisdag_onsdag_torsdag_fredag_lördag".split("_"), weekdaysShort: "sön_mån_tis_ons_tor_fre_lör".split("_"), weekdaysMin: "sö_må_ti_on_to_fr_lö".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "YYYY-MM-DD", LL: "D MMMM YYYY", LLL: "D MMMM YYYY [kl.] HH:mm", LLLL: "dddd D MMMM YYYY [kl.] HH:mm", lll: "D MMM YYYY HH:mm", llll: "ddd D MMM YYYY HH:mm" }, calendar: { sameDay: "[Idag] LT", nextDay: "[Imorgon] LT", lastDay: "[Igår] LT", nextWeek: "[På] dddd LT", lastWeek: "[I] dddd[s] LT", sameElse: "L" }, relativeTime: { future: "om %s", past: "för %s sedan", s: "några sekunder", m: "en minut", mm: "%d minuter", h: "en timme", hh: "%d timmar", d: "en dag", dd: "%d dagar", M: "en månad", MM: "%d månader", y: "ett år", yy: "%d år" }, dayOfMonthOrdinalParse: /\d{1,2}(e|a)/, ordinal: function ordinal(a) {
      var b = a % 10,
          c = 1 === ~~(a % 100 / 10) ? "e" : 1 === b ? "a" : 2 === b ? "a" : "e";return a + c;
    }, week: { dow: 1, doy: 4 } }),
  //! moment.js locale configuration
  //! locale : Swahili [sw]
  //! author : Fahad Kassim : https://github.com/fadsel
  a.defineLocale("sw", { months: "Januari_Februari_Machi_Aprili_Mei_Juni_Julai_Agosti_Septemba_Oktoba_Novemba_Desemba".split("_"), monthsShort: "Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ago_Sep_Okt_Nov_Des".split("_"), weekdays: "Jumapili_Jumatatu_Jumanne_Jumatano_Alhamisi_Ijumaa_Jumamosi".split("_"), weekdaysShort: "Jpl_Jtat_Jnne_Jtan_Alh_Ijm_Jmos".split("_"), weekdaysMin: "J2_J3_J4_J5_Al_Ij_J1".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, calendar: { sameDay: "[leo saa] LT", nextDay: "[kesho saa] LT", nextWeek: "[wiki ijayo] dddd [saat] LT", lastDay: "[jana] LT", lastWeek: "[wiki iliyopita] dddd [saat] LT", sameElse: "L" }, relativeTime: { future: "%s baadaye", past: "tokea %s", s: "hivi punde", m: "dakika moja", mm: "dakika %d", h: "saa limoja", hh: "masaa %d", d: "siku moja", dd: "masiku %d", M: "mwezi mmoja", MM: "miezi %d", y: "mwaka mmoja", yy: "miaka %d" }, week: { dow: 1, doy: 7 } });
  //! moment.js locale configuration
  //! locale : Tamil [ta]
  //! author : Arjunkumar Krishnamoorthy : https://github.com/tk120404
  var Ph = { 1: "௧", 2: "௨", 3: "௩", 4: "௪", 5: "௫", 6: "௬", 7: "௭", 8: "௮", 9: "௯", 0: "௦" },
      Qh = { "௧": "1", "௨": "2", "௩": "3", "௪": "4", "௫": "5", "௬": "6", "௭": "7", "௮": "8", "௯": "9", "௦": "0" };a.defineLocale("ta", { months: "ஜனவரி_பிப்ரவரி_மார்ச்_ஏப்ரல்_மே_ஜூன்_ஜூலை_ஆகஸ்ட்_செப்டெம்பர்_அக்டோபர்_நவம்பர்_டிசம்பர்".split("_"), monthsShort: "ஜனவரி_பிப்ரவரி_மார்ச்_ஏப்ரல்_மே_ஜூன்_ஜூலை_ஆகஸ்ட்_செப்டெம்பர்_அக்டோபர்_நவம்பர்_டிசம்பர்".split("_"), weekdays: "ஞாயிற்றுக்கிழமை_திங்கட்கிழமை_செவ்வாய்கிழமை_புதன்கிழமை_வியாழக்கிழமை_வெள்ளிக்கிழமை_சனிக்கிழமை".split("_"), weekdaysShort: "ஞாயிறு_திங்கள்_செவ்வாய்_புதன்_வியாழன்_வெள்ளி_சனி".split("_"), weekdaysMin: "ஞா_தி_செ_பு_வி_வெ_ச".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY, HH:mm", LLLL: "dddd, D MMMM YYYY, HH:mm" }, calendar: { sameDay: "[இன்று] LT", nextDay: "[நாளை] LT", nextWeek: "dddd, LT", lastDay: "[நேற்று] LT", lastWeek: "[கடந்த வாரம்] dddd, LT", sameElse: "L" }, relativeTime: { future: "%s இல்", past: "%s முன்", s: "ஒரு சில விநாடிகள்", m: "ஒரு நிமிடம்", mm: "%d நிமிடங்கள்", h: "ஒரு மணி நேரம்", hh: "%d மணி நேரம்", d: "ஒரு நாள்", dd: "%d நாட்கள்", M: "ஒரு மாதம்", MM: "%d மாதங்கள்", y: "ஒரு வருடம்", yy: "%d ஆண்டுகள்" }, dayOfMonthOrdinalParse: /\d{1,2}வது/, ordinal: function ordinal(a) {
      return a + "வது";
    }, preparse: function preparse(a) {
      return a.replace(/[௧௨௩௪௫௬௭௮௯௦]/g, function (a) {
        return Qh[a];
      });
    }, postformat: function postformat(a) {
      return a.replace(/\d/g, function (a) {
        return Ph[a];
      });
    }, meridiemParse: /யாமம்|வைகறை|காலை|நண்பகல்|எற்பாடு|மாலை/, meridiem: function meridiem(a, b, c) {
      return a < 2 ? " யாமம்" : a < 6 ? " வைகறை" : a < 10 ? " காலை" : a < 14 ? " நண்பகல்" : a < 18 ? " எற்பாடு" : a < 22 ? " மாலை" : " யாமம்";
    }, meridiemHour: function meridiemHour(a, b) {
      return 12 === a && (a = 0), "யாமம்" === b ? a < 2 ? a : a + 12 : "வைகறை" === b || "காலை" === b ? a : "நண்பகல்" === b && a >= 10 ? a : a + 12;
    }, week: { dow: 0, doy: 6 } }),
  //! moment.js locale configuration
  //! locale : Telugu [te]
  //! author : Krishna Chaitanya Thota : https://github.com/kcthota
  a.defineLocale("te", { months: "జనవరి_ఫిబ్రవరి_మార్చి_ఏప్రిల్_మే_జూన్_జూలై_ఆగస్టు_సెప్టెంబర్_అక్టోబర్_నవంబర్_డిసెంబర్".split("_"), monthsShort: "జన._ఫిబ్ర._మార్చి_ఏప్రి._మే_జూన్_జూలై_ఆగ._సెప్._అక్టో._నవ._డిసె.".split("_"), monthsParseExact: !0, weekdays: "ఆదివారం_సోమవారం_మంగళవారం_బుధవారం_గురువారం_శుక్రవారం_శనివారం".split("_"), weekdaysShort: "ఆది_సోమ_మంగళ_బుధ_గురు_శుక్ర_శని".split("_"), weekdaysMin: "ఆ_సో_మం_బు_గు_శు_శ".split("_"), longDateFormat: { LT: "A h:mm", LTS: "A h:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY, A h:mm", LLLL: "dddd, D MMMM YYYY, A h:mm" }, calendar: { sameDay: "[నేడు] LT", nextDay: "[రేపు] LT", nextWeek: "dddd, LT", lastDay: "[నిన్న] LT", lastWeek: "[గత] dddd, LT", sameElse: "L" }, relativeTime: { future: "%s లో", past: "%s క్రితం", s: "కొన్ని క్షణాలు", m: "ఒక నిమిషం", mm: "%d నిమిషాలు", h: "ఒక గంట", hh: "%d గంటలు", d: "ఒక రోజు", dd: "%d రోజులు", M: "ఒక నెల", MM: "%d నెలలు", y: "ఒక సంవత్సరం", yy: "%d సంవత్సరాలు" }, dayOfMonthOrdinalParse: /\d{1,2}వ/, ordinal: "%dవ", meridiemParse: /రాత్రి|ఉదయం|మధ్యాహ్నం|సాయంత్రం/, meridiemHour: function meridiemHour(a, b) {
      return 12 === a && (a = 0), "రాత్రి" === b ? a < 4 ? a : a + 12 : "ఉదయం" === b ? a : "మధ్యాహ్నం" === b ? a >= 10 ? a : a + 12 : "సాయంత్రం" === b ? a + 12 : void 0;
    }, meridiem: function meridiem(a, b, c) {
      return a < 4 ? "రాత్రి" : a < 10 ? "ఉదయం" : a < 17 ? "మధ్యాహ్నం" : a < 20 ? "సాయంత్రం" : "రాత్రి";
    }, week: { dow: 0, doy: 6 } }),
  //! moment.js locale configuration
  //! locale : Tetun Dili (East Timor) [tet]
  //! author : Joshua Brooks : https://github.com/joshbrooks
  //! author : Onorio De J. Afonso : https://github.com/marobo
  a.defineLocale("tet", { months: "Janeiru_Fevereiru_Marsu_Abril_Maiu_Juniu_Juliu_Augustu_Setembru_Outubru_Novembru_Dezembru".split("_"), monthsShort: "Jan_Fev_Mar_Abr_Mai_Jun_Jul_Aug_Set_Out_Nov_Dez".split("_"), weekdays: "Domingu_Segunda_Tersa_Kuarta_Kinta_Sexta_Sabadu".split("_"), weekdaysShort: "Dom_Seg_Ters_Kua_Kint_Sext_Sab".split("_"), weekdaysMin: "Do_Seg_Te_Ku_Ki_Sex_Sa".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, calendar: { sameDay: "[Ohin iha] LT", nextDay: "[Aban iha] LT", nextWeek: "dddd [iha] LT", lastDay: "[Horiseik iha] LT", lastWeek: "dddd [semana kotuk] [iha] LT", sameElse: "L" }, relativeTime: { future: "iha %s", past: "%s liuba", s: "minutu balun", m: "minutu ida", mm: "minutus %d", h: "horas ida", hh: "horas %d", d: "loron ida", dd: "loron %d", M: "fulan ida", MM: "fulan %d", y: "tinan ida", yy: "tinan %d" }, dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/, ordinal: function ordinal(a) {
      var b = a % 10,
          c = 1 === ~~(a % 100 / 10) ? "th" : 1 === b ? "st" : 2 === b ? "nd" : 3 === b ? "rd" : "th";return a + c;
    }, week: { dow: 1, doy: 4 } }),
  //! moment.js locale configuration
  //! locale : Thai [th]
  //! author : Kridsada Thanabulpong : https://github.com/sirn
  a.defineLocale("th", { months: "มกราคม_กุมภาพันธ์_มีนาคม_เมษายน_พฤษภาคม_มิถุนายน_กรกฎาคม_สิงหาคม_กันยายน_ตุลาคม_พฤศจิกายน_ธันวาคม".split("_"), monthsShort: "ม.ค._ก.พ._มี.ค._เม.ย._พ.ค._มิ.ย._ก.ค._ส.ค._ก.ย._ต.ค._พ.ย._ธ.ค.".split("_"), monthsParseExact: !0, weekdays: "อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัสบดี_ศุกร์_เสาร์".split("_"), weekdaysShort: "อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัส_ศุกร์_เสาร์".split("_"), weekdaysMin: "อา._จ._อ._พ._พฤ._ศ._ส.".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "H:mm", LTS: "H:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY เวลา H:mm", LLLL: "วันddddที่ D MMMM YYYY เวลา H:mm" }, meridiemParse: /ก่อนเที่ยง|หลังเที่ยง/, isPM: function isPM(a) {
      return "หลังเที่ยง" === a;
    }, meridiem: function meridiem(a, b, c) {
      return a < 12 ? "ก่อนเที่ยง" : "หลังเที่ยง";
    }, calendar: { sameDay: "[วันนี้ เวลา] LT", nextDay: "[พรุ่งนี้ เวลา] LT", nextWeek: "dddd[หน้า เวลา] LT", lastDay: "[เมื่อวานนี้ เวลา] LT", lastWeek: "[วัน]dddd[ที่แล้ว เวลา] LT", sameElse: "L" }, relativeTime: { future: "อีก %s", past: "%sที่แล้ว", s: "ไม่กี่วินาที", m: "1 นาที", mm: "%d นาที", h: "1 ชั่วโมง", hh: "%d ชั่วโมง", d: "1 วัน", dd: "%d วัน", M: "1 เดือน", MM: "%d เดือน", y: "1 ปี", yy: "%d ปี" } }),
  //! moment.js locale configuration
  //! locale : Tagalog (Philippines) [tl-ph]
  //! author : Dan Hagman : https://github.com/hagmandan
  a.defineLocale("tl-ph", { months: "Enero_Pebrero_Marso_Abril_Mayo_Hunyo_Hulyo_Agosto_Setyembre_Oktubre_Nobyembre_Disyembre".split("_"), monthsShort: "Ene_Peb_Mar_Abr_May_Hun_Hul_Ago_Set_Okt_Nob_Dis".split("_"), weekdays: "Linggo_Lunes_Martes_Miyerkules_Huwebes_Biyernes_Sabado".split("_"), weekdaysShort: "Lin_Lun_Mar_Miy_Huw_Biy_Sab".split("_"), weekdaysMin: "Li_Lu_Ma_Mi_Hu_Bi_Sab".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "MM/D/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY HH:mm", LLLL: "dddd, MMMM DD, YYYY HH:mm" }, calendar: { sameDay: "LT [ngayong araw]", nextDay: "[Bukas ng] LT", nextWeek: "LT [sa susunod na] dddd", lastDay: "LT [kahapon]", lastWeek: "LT [noong nakaraang] dddd", sameElse: "L" }, relativeTime: { future: "sa loob ng %s", past: "%s ang nakalipas", s: "ilang segundo", m: "isang minuto", mm: "%d minuto", h: "isang oras", hh: "%d oras", d: "isang araw", dd: "%d araw", M: "isang buwan", MM: "%d buwan", y: "isang taon", yy: "%d taon" }, dayOfMonthOrdinalParse: /\d{1,2}/, ordinal: function ordinal(a) {
      return a;
    }, week: { dow: 1, doy: 4 } });
  //! moment.js locale configuration
  //! locale : Klingon [tlh]
  //! author : Dominika Kruk : https://github.com/amaranthrose
  var Rh = "pagh_wa’_cha’_wej_loS_vagh_jav_Soch_chorgh_Hut".split("_");a.defineLocale("tlh", { months: "tera’ jar wa’_tera’ jar cha’_tera’ jar wej_tera’ jar loS_tera’ jar vagh_tera’ jar jav_tera’ jar Soch_tera’ jar chorgh_tera’ jar Hut_tera’ jar wa’maH_tera’ jar wa’maH wa’_tera’ jar wa’maH cha’".split("_"), monthsShort: "jar wa’_jar cha’_jar wej_jar loS_jar vagh_jar jav_jar Soch_jar chorgh_jar Hut_jar wa’maH_jar wa’maH wa’_jar wa’maH cha’".split("_"), monthsParseExact: !0, weekdays: "lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"), weekdaysShort: "lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"), weekdaysMin: "lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, calendar: { sameDay: "[DaHjaj] LT", nextDay: "[wa’leS] LT", nextWeek: "LLL", lastDay: "[wa’Hu’] LT", lastWeek: "LLL", sameElse: "L" }, relativeTime: { future: ie, past: je, s: "puS lup", m: "wa’ tup", mm: ke, h: "wa’ rep", hh: ke, d: "wa’ jaj", dd: ke, M: "wa’ jar", MM: ke, y: "wa’ DIS", yy: ke }, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 4 } });
  //! moment.js locale configuration
  //! locale : Turkish [tr]
  //! authors : Erhan Gundogan : https://github.com/erhangundogan,
  //!           Burak Yiğit Kaya: https://github.com/BYK
  var Sh = { 1: "'inci", 5: "'inci", 8: "'inci", 70: "'inci", 80: "'inci", 2: "'nci", 7: "'nci", 20: "'nci", 50: "'nci", 3: "'üncü", 4: "'üncü", 100: "'üncü", 6: "'ncı", 9: "'uncu", 10: "'uncu", 30: "'uncu", 60: "'ıncı", 90: "'ıncı" };a.defineLocale("tr", { months: "Ocak_Şubat_Mart_Nisan_Mayıs_Haziran_Temmuz_Ağustos_Eylül_Ekim_Kasım_Aralık".split("_"), monthsShort: "Oca_Şub_Mar_Nis_May_Haz_Tem_Ağu_Eyl_Eki_Kas_Ara".split("_"), weekdays: "Pazar_Pazartesi_Salı_Çarşamba_Perşembe_Cuma_Cumartesi".split("_"), weekdaysShort: "Paz_Pts_Sal_Çar_Per_Cum_Cts".split("_"), weekdaysMin: "Pz_Pt_Sa_Ça_Pe_Cu_Ct".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, calendar: { sameDay: "[bugün saat] LT", nextDay: "[yarın saat] LT", nextWeek: "[haftaya] dddd [saat] LT", lastDay: "[dün] LT", lastWeek: "[geçen hafta] dddd [saat] LT", sameElse: "L" }, relativeTime: { future: "%s sonra", past: "%s önce", s: "birkaç saniye", m: "bir dakika", mm: "%d dakika", h: "bir saat", hh: "%d saat", d: "bir gün", dd: "%d gün", M: "bir ay", MM: "%d ay", y: "bir yıl", yy: "%d yıl" }, dayOfMonthOrdinalParse: /\d{1,2}'(inci|nci|üncü|ncı|uncu|ıncı)/, ordinal: function ordinal(a) {
      if (0 === a) return a + "'ıncı";var b = a % 10,
          c = a % 100 - b,
          d = a >= 100 ? 100 : null;return a + (Sh[b] || Sh[c] || Sh[d]);
    }, week: { dow: 1, doy: 7 } }),
  //! moment.js locale configuration
  //! locale : Talossan [tzl]
  //! author : Robin van der Vliet : https://github.com/robin0van0der0v
  //! author : Iustì Canun
  a.defineLocale("tzl", { months: "Januar_Fevraglh_Març_Avrïu_Mai_Gün_Julia_Guscht_Setemvar_Listopäts_Noemvar_Zecemvar".split("_"), monthsShort: "Jan_Fev_Mar_Avr_Mai_Gün_Jul_Gus_Set_Lis_Noe_Zec".split("_"), weekdays: "Súladi_Lúneçi_Maitzi_Márcuri_Xhúadi_Viénerçi_Sáturi".split("_"), weekdaysShort: "Súl_Lún_Mai_Már_Xhú_Vié_Sát".split("_"), weekdaysMin: "Sú_Lú_Ma_Má_Xh_Vi_Sá".split("_"), longDateFormat: { LT: "HH.mm", LTS: "HH.mm.ss", L: "DD.MM.YYYY", LL: "D. MMMM [dallas] YYYY", LLL: "D. MMMM [dallas] YYYY HH.mm", LLLL: "dddd, [li] D. MMMM [dallas] YYYY HH.mm" }, meridiemParse: /d\'o|d\'a/i, isPM: function isPM(a) {
      return "d'o" === a.toLowerCase();
    }, meridiem: function meridiem(a, b, c) {
      return a > 11 ? c ? "d'o" : "D'O" : c ? "d'a" : "D'A";
    }, calendar: { sameDay: "[oxhi à] LT", nextDay: "[demà à] LT", nextWeek: "dddd [à] LT", lastDay: "[ieiri à] LT", lastWeek: "[sür el] dddd [lasteu à] LT", sameElse: "L" }, relativeTime: { future: "osprei %s", past: "ja%s", s: me, m: me, mm: me, h: me, hh: me, d: me, dd: me, M: me, MM: me, y: me, yy: me }, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 4 } }),
  //! moment.js locale configuration
  //! locale : Central Atlas Tamazight Latin [tzm-latn]
  //! author : Abdel Said : https://github.com/abdelsaid
  a.defineLocale("tzm-latn", { months: "innayr_brˤayrˤ_marˤsˤ_ibrir_mayyw_ywnyw_ywlywz_ɣwšt_šwtanbir_ktˤwbrˤ_nwwanbir_dwjnbir".split("_"), monthsShort: "innayr_brˤayrˤ_marˤsˤ_ibrir_mayyw_ywnyw_ywlywz_ɣwšt_šwtanbir_ktˤwbrˤ_nwwanbir_dwjnbir".split("_"), weekdays: "asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas".split("_"), weekdaysShort: "asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas".split("_"), weekdaysMin: "asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, calendar: { sameDay: "[asdkh g] LT", nextDay: "[aska g] LT", nextWeek: "dddd [g] LT", lastDay: "[assant g] LT", lastWeek: "dddd [g] LT", sameElse: "L" }, relativeTime: { future: "dadkh s yan %s", past: "yan %s", s: "imik", m: "minuḍ", mm: "%d minuḍ", h: "saɛa", hh: "%d tassaɛin", d: "ass", dd: "%d ossan", M: "ayowr", MM: "%d iyyirn", y: "asgas", yy: "%d isgasn" }, week: { dow: 6, doy: 12 } }),
  //! moment.js locale configuration
  //! locale : Central Atlas Tamazight [tzm]
  //! author : Abdel Said : https://github.com/abdelsaid
  a.defineLocale("tzm", { months: "ⵉⵏⵏⴰⵢⵔ_ⴱⵕⴰⵢⵕ_ⵎⴰⵕⵚ_ⵉⴱⵔⵉⵔ_ⵎⴰⵢⵢⵓ_ⵢⵓⵏⵢⵓ_ⵢⵓⵍⵢⵓⵣ_ⵖⵓⵛⵜ_ⵛⵓⵜⴰⵏⴱⵉⵔ_ⴽⵟⵓⴱⵕ_ⵏⵓⵡⴰⵏⴱⵉⵔ_ⴷⵓⵊⵏⴱⵉⵔ".split("_"), monthsShort: "ⵉⵏⵏⴰⵢⵔ_ⴱⵕⴰⵢⵕ_ⵎⴰⵕⵚ_ⵉⴱⵔⵉⵔ_ⵎⴰⵢⵢⵓ_ⵢⵓⵏⵢⵓ_ⵢⵓⵍⵢⵓⵣ_ⵖⵓⵛⵜ_ⵛⵓⵜⴰⵏⴱⵉⵔ_ⴽⵟⵓⴱⵕ_ⵏⵓⵡⴰⵏⴱⵉⵔ_ⴷⵓⵊⵏⴱⵉⵔ".split("_"), weekdays: "ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ".split("_"), weekdaysShort: "ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ".split("_"), weekdaysMin: "ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, calendar: { sameDay: "[ⴰⵙⴷⵅ ⴴ] LT", nextDay: "[ⴰⵙⴽⴰ ⴴ] LT", nextWeek: "dddd [ⴴ] LT", lastDay: "[ⴰⵚⴰⵏⵜ ⴴ] LT", lastWeek: "dddd [ⴴ] LT", sameElse: "L" }, relativeTime: { future: "ⴷⴰⴷⵅ ⵙ ⵢⴰⵏ %s", past: "ⵢⴰⵏ %s", s: "ⵉⵎⵉⴽ", m: "ⵎⵉⵏⵓⴺ", mm: "%d ⵎⵉⵏⵓⴺ", h: "ⵙⴰⵄⴰ", hh: "%d ⵜⴰⵙⵙⴰⵄⵉⵏ", d: "ⴰⵙⵙ", dd: "%d oⵙⵙⴰⵏ", M: "ⴰⵢoⵓⵔ", MM: "%d ⵉⵢⵢⵉⵔⵏ", y: "ⴰⵙⴳⴰⵙ", yy: "%d ⵉⵙⴳⴰⵙⵏ" }, week: { dow: 6, doy: 12 } }), a.defineLocale("uk", { months: { format: "січня_лютого_березня_квітня_травня_червня_липня_серпня_вересня_жовтня_листопада_грудня".split("_"), standalone: "січень_лютий_березень_квітень_травень_червень_липень_серпень_вересень_жовтень_листопад_грудень".split("_") }, monthsShort: "січ_лют_бер_квіт_трав_черв_лип_серп_вер_жовт_лист_груд".split("_"), weekdays: pe, weekdaysShort: "нд_пн_вт_ср_чт_пт_сб".split("_"), weekdaysMin: "нд_пн_вт_ср_чт_пт_сб".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY р.", LLL: "D MMMM YYYY р., HH:mm", LLLL: "dddd, D MMMM YYYY р., HH:mm" }, calendar: { sameDay: qe("[Сьогодні "), nextDay: qe("[Завтра "), lastDay: qe("[Вчора "), nextWeek: qe("[У] dddd ["), lastWeek: function lastWeek() {
        switch (this.day()) {case 0:case 3:case 5:case 6:
            return qe("[Минулої] dddd [").call(this);case 1:case 2:case 4:
            return qe("[Минулого] dddd [").call(this);}
      }, sameElse: "L" }, relativeTime: { future: "за %s", past: "%s тому", s: "декілька секунд", m: oe, mm: oe, h: "годину", hh: oe, d: "день", dd: oe, M: "місяць", MM: oe, y: "рік", yy: oe }, meridiemParse: /ночі|ранку|дня|вечора/, isPM: function isPM(a) {
      return (/^(дня|вечора)$/.test(a)
      );
    }, meridiem: function meridiem(a, b, c) {
      return a < 4 ? "ночі" : a < 12 ? "ранку" : a < 17 ? "дня" : "вечора";
    }, dayOfMonthOrdinalParse: /\d{1,2}-(й|го)/, ordinal: function ordinal(a, b) {
      switch (b) {case "M":case "d":case "DDD":case "w":case "W":
          return a + "-й";case "D":
          return a + "-го";default:
          return a;}
    }, week: { dow: 1, doy: 7 } });
  //! moment.js locale configuration
  //! locale : Urdu [ur]
  //! author : Sawood Alam : https://github.com/ibnesayeed
  //! author : Zack : https://github.com/ZackVision
  var Th = ["جنوری", "فروری", "مارچ", "اپریل", "مئی", "جون", "جولائی", "اگست", "ستمبر", "اکتوبر", "نومبر", "دسمبر"],
      Uh = ["اتوار", "پیر", "منگل", "بدھ", "جمعرات", "جمعہ", "ہفتہ"];
  //! moment.js locale configuration
  //! locale : Uzbek Latin [uz-latn]
  //! author : Rasulbek Mirzayev : github.com/Rasulbeeek
  //! moment.js locale configuration
  //! locale : Uzbek [uz]
  //! author : Sardor Muminov : https://github.com/muminoff
  //! moment.js locale configuration
  //! locale : Vietnamese [vi]
  //! author : Bang Nguyen : https://github.com/bangnk
  //! moment.js locale configuration
  //! locale : Pseudo [x-pseudo]
  //! author : Andrew Hood : https://github.com/andrewhood125
  //! moment.js locale configuration
  //! locale : Yoruba Nigeria [yo]
  //! author : Atolagbe Abisoye : https://github.com/andela-batolagbe
  //! moment.js locale configuration
  //! locale : Chinese (China) [zh-cn]
  //! author : suupic : https://github.com/suupic
  //! author : Zeno Zeng : https://github.com/zenozeng
  //! moment.js locale configuration
  //! locale : Chinese (Hong Kong) [zh-hk]
  //! author : Ben : https://github.com/ben-lin
  //! author : Chris Lam : https://github.com/hehachris
  //! author : Konstantin : https://github.com/skfd
  //! moment.js locale configuration
  //! locale : Chinese (Taiwan) [zh-tw]
  //! author : Ben : https://github.com/ben-lin
  //! author : Chris Lam : https://github.com/hehachris
  return a.defineLocale("ur", { months: Th, monthsShort: Th, weekdays: Uh, weekdaysShort: Uh, weekdaysMin: Uh, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd، D MMMM YYYY HH:mm" }, meridiemParse: /صبح|شام/, isPM: function isPM(a) {
      return "شام" === a;
    }, meridiem: function meridiem(a, b, c) {
      return a < 12 ? "صبح" : "شام";
    }, calendar: { sameDay: "[آج بوقت] LT", nextDay: "[کل بوقت] LT", nextWeek: "dddd [بوقت] LT", lastDay: "[گذشتہ روز بوقت] LT", lastWeek: "[گذشتہ] dddd [بوقت] LT", sameElse: "L" }, relativeTime: { future: "%s بعد", past: "%s قبل", s: "چند سیکنڈ", m: "ایک منٹ", mm: "%d منٹ", h: "ایک گھنٹہ", hh: "%d گھنٹے", d: "ایک دن", dd: "%d دن", M: "ایک ماہ", MM: "%d ماہ", y: "ایک سال", yy: "%d سال" }, preparse: function preparse(a) {
      return a.replace(/،/g, ",");
    }, postformat: function postformat(a) {
      return a.replace(/,/g, "،");
    }, week: { dow: 1, doy: 4 } }), a.defineLocale("uz-latn", { months: "Yanvar_Fevral_Mart_Aprel_May_Iyun_Iyul_Avgust_Sentabr_Oktabr_Noyabr_Dekabr".split("_"), monthsShort: "Yan_Fev_Mar_Apr_May_Iyun_Iyul_Avg_Sen_Okt_Noy_Dek".split("_"), weekdays: "Yakshanba_Dushanba_Seshanba_Chorshanba_Payshanba_Juma_Shanba".split("_"), weekdaysShort: "Yak_Dush_Sesh_Chor_Pay_Jum_Shan".split("_"), weekdaysMin: "Ya_Du_Se_Cho_Pa_Ju_Sha".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "D MMMM YYYY, dddd HH:mm" }, calendar: { sameDay: "[Bugun soat] LT [da]", nextDay: "[Ertaga] LT [da]", nextWeek: "dddd [kuni soat] LT [da]", lastDay: "[Kecha soat] LT [da]", lastWeek: "[O'tgan] dddd [kuni soat] LT [da]", sameElse: "L" }, relativeTime: { future: "Yaqin %s ichida", past: "Bir necha %s oldin", s: "soniya", m: "bir daqiqa", mm: "%d daqiqa", h: "bir soat", hh: "%d soat", d: "bir kun", dd: "%d kun", M: "bir oy", MM: "%d oy", y: "bir yil", yy: "%d yil" }, week: { dow: 1, doy: 7 } }), a.defineLocale("uz", { months: "январ_феврал_март_апрел_май_июн_июл_август_сентябр_октябр_ноябр_декабр".split("_"), monthsShort: "янв_фев_мар_апр_май_июн_июл_авг_сен_окт_ноя_дек".split("_"), weekdays: "Якшанба_Душанба_Сешанба_Чоршанба_Пайшанба_Жума_Шанба".split("_"), weekdaysShort: "Якш_Душ_Сеш_Чор_Пай_Жум_Шан".split("_"), weekdaysMin: "Як_Ду_Се_Чо_Па_Жу_Ша".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "D MMMM YYYY, dddd HH:mm" }, calendar: { sameDay: "[Бугун соат] LT [да]", nextDay: "[Эртага] LT [да]", nextWeek: "dddd [куни соат] LT [да]", lastDay: "[Кеча соат] LT [да]", lastWeek: "[Утган] dddd [куни соат] LT [да]", sameElse: "L" }, relativeTime: { future: "Якин %s ичида", past: "Бир неча %s олдин", s: "фурсат", m: "бир дакика", mm: "%d дакика", h: "бир соат", hh: "%d соат", d: "бир кун", dd: "%d кун", M: "бир ой", MM: "%d ой", y: "бир йил", yy: "%d йил" }, week: { dow: 1, doy: 7 } }), a.defineLocale("vi", { months: "tháng 1_tháng 2_tháng 3_tháng 4_tháng 5_tháng 6_tháng 7_tháng 8_tháng 9_tháng 10_tháng 11_tháng 12".split("_"), monthsShort: "Th01_Th02_Th03_Th04_Th05_Th06_Th07_Th08_Th09_Th10_Th11_Th12".split("_"), monthsParseExact: !0, weekdays: "chủ nhật_thứ hai_thứ ba_thứ tư_thứ năm_thứ sáu_thứ bảy".split("_"), weekdaysShort: "CN_T2_T3_T4_T5_T6_T7".split("_"), weekdaysMin: "CN_T2_T3_T4_T5_T6_T7".split("_"), weekdaysParseExact: !0, meridiemParse: /sa|ch/i, isPM: function isPM(a) {
      return (/^ch$/i.test(a)
      );
    }, meridiem: function meridiem(a, b, c) {
      return a < 12 ? c ? "sa" : "SA" : c ? "ch" : "CH";
    }, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM [năm] YYYY", LLL: "D MMMM [năm] YYYY HH:mm", LLLL: "dddd, D MMMM [năm] YYYY HH:mm", l: "DD/M/YYYY", ll: "D MMM YYYY", lll: "D MMM YYYY HH:mm", llll: "ddd, D MMM YYYY HH:mm" }, calendar: { sameDay: "[Hôm nay lúc] LT", nextDay: "[Ngày mai lúc] LT", nextWeek: "dddd [tuần tới lúc] LT", lastDay: "[Hôm qua lúc] LT", lastWeek: "dddd [tuần rồi lúc] LT", sameElse: "L" }, relativeTime: { future: "%s tới", past: "%s trước", s: "vài giây", m: "một phút", mm: "%d phút", h: "một giờ", hh: "%d giờ", d: "một ngày", dd: "%d ngày", M: "một tháng", MM: "%d tháng", y: "một năm", yy: "%d năm" }, dayOfMonthOrdinalParse: /\d{1,2}/, ordinal: function ordinal(a) {
      return a;
    }, week: { dow: 1, doy: 4 } }), a.defineLocale("x-pseudo", { months: "J~áñúá~rý_F~ébrú~árý_~Márc~h_Áp~ríl_~Máý_~Júñé~_Júl~ý_Áú~gúst~_Sép~témb~ér_Ó~ctób~ér_Ñ~óvém~bér_~Décé~mbér".split("_"), monthsShort: "J~áñ_~Féb_~Már_~Ápr_~Máý_~Júñ_~Júl_~Áúg_~Sép_~Óct_~Ñóv_~Déc".split("_"), monthsParseExact: !0, weekdays: "S~úñdá~ý_Mó~ñdáý~_Túé~sdáý~_Wéd~ñésd~áý_T~húrs~dáý_~Fríd~áý_S~átúr~dáý".split("_"), weekdaysShort: "S~úñ_~Móñ_~Túé_~Wéd_~Thú_~Frí_~Sát".split("_"), weekdaysMin: "S~ú_Mó~_Tú_~Wé_T~h_Fr~_Sá".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, calendar: { sameDay: "[T~ódá~ý át] LT", nextDay: "[T~ómó~rró~w át] LT", nextWeek: "dddd [át] LT", lastDay: "[Ý~ést~érdá~ý át] LT", lastWeek: "[L~ást] dddd [át] LT", sameElse: "L" }, relativeTime: { future: "í~ñ %s", past: "%s á~gó", s: "á ~féw ~sécó~ñds", m: "á ~míñ~úté", mm: "%d m~íñú~tés", h: "á~ñ hó~úr", hh: "%d h~óúrs", d: "á ~dáý", dd: "%d d~áýs", M: "á ~móñ~th", MM: "%d m~óñt~hs", y: "á ~ýéár", yy: "%d ý~éárs" }, dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/, ordinal: function ordinal(a) {
      var b = a % 10,
          c = 1 === ~~(a % 100 / 10) ? "th" : 1 === b ? "st" : 2 === b ? "nd" : 3 === b ? "rd" : "th";return a + c;
    }, week: { dow: 1, doy: 4 } }), a.defineLocale("yo", { months: "Sẹ́rẹ́_Èrèlè_Ẹrẹ̀nà_Ìgbé_Èbibi_Òkùdu_Agẹmo_Ògún_Owewe_Ọ̀wàrà_Bélú_Ọ̀pẹ̀̀".split("_"), monthsShort: "Sẹ́r_Èrl_Ẹrn_Ìgb_Èbi_Òkù_Agẹ_Ògú_Owe_Ọ̀wà_Bél_Ọ̀pẹ̀̀".split("_"), weekdays: "Àìkú_Ajé_Ìsẹ́gun_Ọjọ́rú_Ọjọ́bọ_Ẹtì_Àbámẹ́ta".split("_"), weekdaysShort: "Àìk_Ajé_Ìsẹ́_Ọjr_Ọjb_Ẹtì_Àbá".split("_"), weekdaysMin: "Àì_Aj_Ìs_Ọr_Ọb_Ẹt_Àb".split("_"), longDateFormat: { LT: "h:mm A", LTS: "h:mm:ss A", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY h:mm A", LLLL: "dddd, D MMMM YYYY h:mm A" }, calendar: { sameDay: "[Ònì ni] LT", nextDay: "[Ọ̀la ni] LT", nextWeek: "dddd [Ọsẹ̀ tón'bọ] [ni] LT", lastDay: "[Àna ni] LT", lastWeek: "dddd [Ọsẹ̀ tólọ́] [ni] LT", sameElse: "L" }, relativeTime: { future: "ní %s", past: "%s kọjá", s: "ìsẹjú aayá die", m: "ìsẹjú kan", mm: "ìsẹjú %d", h: "wákati kan", hh: "wákati %d", d: "ọjọ́ kan", dd: "ọjọ́ %d", M: "osù kan", MM: "osù %d", y: "ọdún kan", yy: "ọdún %d" }, dayOfMonthOrdinalParse: /ọjọ́\s\d{1,2}/, ordinal: "ọjọ́ %d", week: { dow: 1, doy: 4 } }), a.defineLocale("zh-cn", { months: "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"), monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"), weekdays: "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"), weekdaysShort: "周日_周一_周二_周三_周四_周五_周六".split("_"), weekdaysMin: "日_一_二_三_四_五_六".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "YYYY年MMMD日", LL: "YYYY年MMMD日", LLL: "YYYY年MMMD日Ah点mm分", LLLL: "YYYY年MMMD日ddddAh点mm分", l: "YYYY年MMMD日", ll: "YYYY年MMMD日", lll: "YYYY年MMMD日 HH:mm", llll: "YYYY年MMMD日dddd HH:mm" }, meridiemParse: /凌晨|早上|上午|中午|下午|晚上/, meridiemHour: function meridiemHour(a, b) {
      return 12 === a && (a = 0), "凌晨" === b || "早上" === b || "上午" === b ? a : "下午" === b || "晚上" === b ? a + 12 : a >= 11 ? a : a + 12;
    }, meridiem: function meridiem(a, b, c) {
      var d = 100 * a + b;return d < 600 ? "凌晨" : d < 900 ? "早上" : d < 1130 ? "上午" : d < 1230 ? "中午" : d < 1800 ? "下午" : "晚上";
    }, calendar: { sameDay: "[今天]LT", nextDay: "[明天]LT", nextWeek: "[下]ddddLT", lastDay: "[昨天]LT", lastWeek: "[上]ddddLT", sameElse: "L" }, dayOfMonthOrdinalParse: /\d{1,2}(日|月|周)/, ordinal: function ordinal(a, b) {
      switch (b) {case "d":case "D":case "DDD":
          return a + "日";case "M":
          return a + "月";case "w":case "W":
          return a + "周";default:
          return a;}
    }, relativeTime: { future: "%s内", past: "%s前", s: "几秒", m: "1 分钟", mm: "%d 分钟", h: "1 小时", hh: "%d 小时", d: "1 天", dd: "%d 天", M: "1 个月", MM: "%d 个月", y: "1 年", yy: "%d 年" }, week: { dow: 1, doy: 4 } }), a.defineLocale("zh-hk", { months: "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"), monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"), weekdays: "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"), weekdaysShort: "週日_週一_週二_週三_週四_週五_週六".split("_"), weekdaysMin: "日_一_二_三_四_五_六".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "YYYY年MMMD日", LL: "YYYY年MMMD日", LLL: "YYYY年MMMD日 HH:mm", LLLL: "YYYY年MMMD日dddd HH:mm", l: "YYYY年MMMD日", ll: "YYYY年MMMD日", lll: "YYYY年MMMD日 HH:mm", llll: "YYYY年MMMD日dddd HH:mm" }, meridiemParse: /凌晨|早上|上午|中午|下午|晚上/, meridiemHour: function meridiemHour(a, b) {
      return 12 === a && (a = 0), "凌晨" === b || "早上" === b || "上午" === b ? a : "中午" === b ? a >= 11 ? a : a + 12 : "下午" === b || "晚上" === b ? a + 12 : void 0;
    }, meridiem: function meridiem(a, b, c) {
      var d = 100 * a + b;return d < 600 ? "凌晨" : d < 900 ? "早上" : d < 1130 ? "上午" : d < 1230 ? "中午" : d < 1800 ? "下午" : "晚上";
    }, calendar: { sameDay: "[今天]LT", nextDay: "[明天]LT", nextWeek: "[下]ddddLT", lastDay: "[昨天]LT", lastWeek: "[上]ddddLT", sameElse: "L" }, dayOfMonthOrdinalParse: /\d{1,2}(日|月|週)/, ordinal: function ordinal(a, b) {
      switch (b) {case "d":case "D":case "DDD":
          return a + "日";case "M":
          return a + "月";case "w":case "W":
          return a + "週";default:
          return a;}
    }, relativeTime: { future: "%s內", past: "%s前", s: "幾秒", m: "1 分鐘", mm: "%d 分鐘", h: "1 小時", hh: "%d 小時", d: "1 天", dd: "%d 天", M: "1 個月", MM: "%d 個月", y: "1 年", yy: "%d 年" } }), a.defineLocale("zh-tw", { months: "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"), monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"), weekdays: "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"), weekdaysShort: "週日_週一_週二_週三_週四_週五_週六".split("_"), weekdaysMin: "日_一_二_三_四_五_六".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "YYYY年MMMD日", LL: "YYYY年MMMD日", LLL: "YYYY年MMMD日 HH:mm", LLLL: "YYYY年MMMD日dddd HH:mm", l: "YYYY年MMMD日", ll: "YYYY年MMMD日", lll: "YYYY年MMMD日 HH:mm", llll: "YYYY年MMMD日dddd HH:mm" }, meridiemParse: /凌晨|早上|上午|中午|下午|晚上/, meridiemHour: function meridiemHour(a, b) {
      return 12 === a && (a = 0), "凌晨" === b || "早上" === b || "上午" === b ? a : "中午" === b ? a >= 11 ? a : a + 12 : "下午" === b || "晚上" === b ? a + 12 : void 0;
    }, meridiem: function meridiem(a, b, c) {
      var d = 100 * a + b;return d < 600 ? "凌晨" : d < 900 ? "早上" : d < 1130 ? "上午" : d < 1230 ? "中午" : d < 1800 ? "下午" : "晚上";
    }, calendar: { sameDay: "[今天]LT", nextDay: "[明天]LT", nextWeek: "[下]ddddLT", lastDay: "[昨天]LT", lastWeek: "[上]ddddLT", sameElse: "L" }, dayOfMonthOrdinalParse: /\d{1,2}(日|月|週)/, ordinal: function ordinal(a, b) {
      switch (b) {case "d":case "D":case "DDD":
          return a + "日";case "M":
          return a + "月";case "w":case "W":
          return a + "週";default:
          return a;}
    }, relativeTime: { future: "%s內", past: "%s前", s: "幾秒", m: "1 分鐘", mm: "%d 分鐘", h: "1 小時", hh: "%d 小時", d: "1 天", dd: "%d 天", M: "1 個月", MM: "%d 個月", y: "1 年", yy: "%d 年" } }), a.locale("en"), a;
});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(24)(module)))

/***/ }),

/***/ 46:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*
 Highstock JS v5.0.12 (2017-05-24)

 (c) 2009-2016 Torstein Honsi

 License: www.highcharts.com/license
*/
(function (L, T) {
  "object" === ( false ? "undefined" : _typeof(module)) && module.exports ? module.exports = L.document ? T(L) : T : L.Highcharts = T(L);
})("undefined" !== typeof window ? window : undefined, function (L) {
  L = function () {
    var a = window,
        E = a.document,
        B = a.navigator && a.navigator.userAgent || "",
        F = E && E.createElementNS && !!E.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect,
        D = /(edge|msie|trident)/i.test(B) && !window.opera,
        n = !F,
        h = /Firefox/.test(B),
        u = h && 4 > parseInt(B.split("Firefox/")[1], 10);return a.Highcharts ? a.Highcharts.error(16, !0) : { product: "Highstock",
      version: "5.0.12", deg2rad: 2 * Math.PI / 360, doc: E, hasBidiBug: u, hasTouch: E && void 0 !== E.documentElement.ontouchstart, isMS: D, isWebKit: /AppleWebKit/.test(B), isFirefox: h, isTouchDevice: /(Mobile|Android|Windows Phone)/.test(B), SVG_NS: "http://www.w3.org/2000/svg", chartCount: 0, seriesTypes: {}, symbolSizes: {}, svg: F, vml: n, win: a, marginNames: ["plotTop", "marginRight", "marginBottom", "plotLeft"], noop: function noop() {}, charts: [] };
  }();(function (a) {
    var E = [],
        B = a.charts,
        F = a.doc,
        D = a.win;a.error = function (n, h) {
      n = a.isNumber(n) ? "Highcharts error #" + n + ": www.highcharts.com/errors/" + n : n;if (h) throw Error(n);D.console && console.log(n);
    };a.Fx = function (a, h, u) {
      this.options = h;this.elem = a;this.prop = u;
    };a.Fx.prototype = { dSetter: function dSetter() {
        var a = this.paths[0],
            h = this.paths[1],
            u = [],
            r = this.now,
            x = a.length,
            t;if (1 === r) u = this.toD;else if (x === h.length && 1 > r) for (; x--;) {
          t = parseFloat(a[x]), u[x] = isNaN(t) ? a[x] : r * parseFloat(h[x] - t) + t;
        } else u = h;this.elem.attr("d", u, null, !0);
      }, update: function update() {
        var a = this.elem,
            h = this.prop,
            u = this.now,
            r = this.options.step;if (this[h + "Setter"]) this[h + "Setter"]();else a.attr ? a.element && a.attr(h, u, null, !0) : a.style[h] = u + this.unit;r && r.call(a, u, this);
      }, run: function run(a, h, u) {
        var r = this,
            n = function n(a) {
          return n.stopped ? !1 : r.step(a);
        },
            t;this.startTime = +new Date();this.start = a;this.end = h;this.unit = u;this.now = this.start;this.pos = 0;n.elem = this.elem;n.prop = this.prop;n() && 1 === E.push(n) && (n.timerId = setInterval(function () {
          for (t = 0; t < E.length; t++) {
            E[t]() || E.splice(t--, 1);
          }E.length || clearInterval(n.timerId);
        }, 13));
      }, step: function step(n) {
        var h = +new Date(),
            u,
            r = this.options,
            x = this.elem,
            t = r.complete,
            m = r.duration,
            f = r.curAnim;x.attr && !x.element ? n = !1 : n || h >= m + this.startTime ? (this.now = this.end, this.pos = 1, this.update(), u = f[this.prop] = !0, a.objectEach(f, function (a) {
          !0 !== a && (u = !1);
        }), u && t && t.call(x), n = !1) : (this.pos = r.easing((h - this.startTime) / m), this.now = this.start + (this.end - this.start) * this.pos, this.update(), n = !0);return n;
      }, initPath: function initPath(n, h, u) {
        function r(a) {
          var c, b;for (A = a.length; A--;) {
            c = "M" === a[A] || "L" === a[A], b = /[a-zA-Z]/.test(a[A + 3]), c && b && a.splice(A + 1, 0, a[A + 1], a[A + 2], a[A + 1], a[A + 2]);
          }
        }
        function x(a, c) {
          for (; a.length < p;) {
            a[0] = c[p - a.length];var b = a.slice(0, d);[].splice.apply(a, [0, 0].concat(b));v && (b = a.slice(a.length - d), [].splice.apply(a, [a.length, 0].concat(b)), A--);
          }a[0] = "M";
        }function t(a, c) {
          for (var q = (p - a.length) / d; 0 < q && q--;) {
            b = a.slice().splice(a.length / H - d, d * H), b[0] = c[p - d - q * d], e && (b[d - 6] = b[d - 2], b[d - 5] = b[d - 1]), [].splice.apply(a, [a.length / H, 0].concat(b)), v && q--;
          }
        }h = h || "";var m,
            f = n.startX,
            g = n.endX,
            e = -1 < h.indexOf("C"),
            d = e ? 7 : 3,
            p,
            b,
            A;h = h.split(" ");u = u.slice();var v = n.isArea,
            H = v ? 2 : 1,
            q;e && (r(h), r(u));if (f && g) {
          for (A = 0; A < f.length; A++) {
            if (f[A] === g[0]) {
              m = A;break;
            } else if (f[0] === g[g.length - f.length + A]) {
              m = A;q = !0;break;
            }
          }void 0 === m && (h = []);
        }h.length && a.isNumber(m) && (p = u.length + m * H * d, q ? (x(h, u), t(u, h)) : (x(u, h), t(h, u)));return [h, u];
      } };a.Fx.prototype.fillSetter = a.Fx.prototype.strokeSetter = function () {
      this.elem.attr(this.prop, a.color(this.start).tweenTo(a.color(this.end), this.pos), null, !0);
    };a.extend = function (a, h) {
      var n;a || (a = {});for (n in h) {
        a[n] = h[n];
      }return a;
    };a.merge = function () {
      var n,
          h = arguments,
          u,
          r = {},
          x = function x(h, m) {
        "object" !== (typeof h === "undefined" ? "undefined" : _typeof(h)) && (h = {});a.objectEach(m, function (f, g) {
          !a.isObject(f, !0) || a.isClass(f) || a.isDOMElement(f) ? h[g] = m[g] : h[g] = x(h[g] || {}, f);
        });return h;
      };!0 === h[0] && (r = h[1], h = Array.prototype.slice.call(h, 2));u = h.length;for (n = 0; n < u; n++) {
        r = x(r, h[n]);
      }return r;
    };a.pInt = function (a, h) {
      return parseInt(a, h || 10);
    };a.isString = function (a) {
      return "string" === typeof a;
    };a.isArray = function (a) {
      a = Object.prototype.toString.call(a);return "[object Array]" === a || "[object Array Iterator]" === a;
    };a.isObject = function (n, h) {
      return !!n && "object" === (typeof n === "undefined" ? "undefined" : _typeof(n)) && (!h || !a.isArray(n));
    };a.isDOMElement = function (n) {
      return a.isObject(n) && "number" === typeof n.nodeType;
    };a.isClass = function (n) {
      var h = n && n.constructor;return !(!a.isObject(n, !0) || a.isDOMElement(n) || !h || !h.name || "Object" === h.name);
    };a.isNumber = function (a) {
      return "number" === typeof a && !isNaN(a);
    };a.erase = function (a, h) {
      for (var n = a.length; n--;) {
        if (a[n] === h) {
          a.splice(n, 1);break;
        }
      }
    };a.defined = function (a) {
      return void 0 !== a && null !== a;
    };a.attr = function (n, h, u) {
      var r;a.isString(h) ? a.defined(u) ? n.setAttribute(h, u) : n && n.getAttribute && (r = n.getAttribute(h)) : a.defined(h) && a.isObject(h) && a.objectEach(h, function (a, h) {
        n.setAttribute(h, a);
      });return r;
    };a.splat = function (n) {
      return a.isArray(n) ? n : [n];
    };a.syncTimeout = function (a, h, u) {
      if (h) return setTimeout(a, h, u);a.call(0, u);
    };a.pick = function () {
      var a = arguments,
          h,
          u,
          r = a.length;for (h = 0; h < r; h++) {
        if (u = a[h], void 0 !== u && null !== u) return u;
      }
    };a.css = function (n, h) {
      a.isMS && !a.svg && h && void 0 !== h.opacity && (h.filter = "alpha(opacity\x3d" + 100 * h.opacity + ")");a.extend(n.style, h);
    };a.createElement = function (n, h, u, r, x) {
      n = F.createElement(n);var t = a.css;h && a.extend(n, h);x && t(n, { padding: 0, border: "none", margin: 0 });u && t(n, u);r && r.appendChild(n);return n;
    };a.extendClass = function (n, h) {
      var u = function u() {};u.prototype = new n();a.extend(u.prototype, h);return u;
    };a.pad = function (a, h, u) {
      return Array((h || 2) + 1 - String(a).length).join(u || 0) + a;
    };a.relativeLength = function (a, h) {
      return (/%$/.test(a) ? h * parseFloat(a) / 100 : parseFloat(a)
      );
    };a.wrap = function (a, h, u) {
      var r = a[h];a[h] = function () {
        var a = Array.prototype.slice.call(arguments),
            h = arguments,
            m = this;m.proceed = function () {
          r.apply(m, arguments.length ? arguments : h);
        };a.unshift(r);a = u.apply(this, a);m.proceed = null;return a;
      };
    };a.getTZOffset = function (n) {
      var h = a.Date;return 6E4 * (h.hcGetTimezoneOffset && h.hcGetTimezoneOffset(n) || h.hcTimezoneOffset || 0);
    };a.dateFormat = function (n, h, u) {
      if (!a.defined(h) || isNaN(h)) return a.defaultOptions.lang.invalidDate || "";n = a.pick(n, "%Y-%m-%d %H:%M:%S");var r = a.Date,
          x = new r(h - a.getTZOffset(h)),
          t = x[r.hcGetHours](),
          m = x[r.hcGetDay](),
          f = x[r.hcGetDate](),
          g = x[r.hcGetMonth](),
          e = x[r.hcGetFullYear](),
          d = a.defaultOptions.lang,
          p = d.weekdays,
          b = d.shortWeekdays,
          A = a.pad,
          r = a.extend({ a: b ? b[m] : p[m].substr(0, 3), A: p[m], d: A(f), e: A(f, 2, " "), w: m, b: d.shortMonths[g], B: d.months[g], m: A(g + 1), y: e.toString().substr(2, 2), Y: e, H: A(t), k: t, I: A(t % 12 || 12), l: t % 12 || 12, M: A(x[r.hcGetMinutes]()), p: 12 > t ? "AM" : "PM", P: 12 > t ? "am" : "pm", S: A(x.getSeconds()), L: A(Math.round(h % 1E3), 3) }, a.dateFormats);a.objectEach(r, function (a, b) {
        for (; -1 !== n.indexOf("%" + b);) {
          n = n.replace("%" + b, "function" === typeof a ? a(h) : a);
        }
      });return u ? n.substr(0, 1).toUpperCase() + n.substr(1) : n;
    };a.formatSingle = function (n, h) {
      var u = /\.([0-9])/,
          r = a.defaultOptions.lang;/f$/.test(n) ? (u = (u = n.match(u)) ? u[1] : -1, null !== h && (h = a.numberFormat(h, u, r.decimalPoint, -1 < n.indexOf(",") ? r.thousandsSep : ""))) : h = a.dateFormat(n, h);return h;
    };a.format = function (n, h) {
      for (var u = "{", r = !1, x, t, m, f, g = [], e; n;) {
        u = n.indexOf(u);if (-1 === u) break;x = n.slice(0, u);if (r) {
          x = x.split(":");t = x.shift().split(".");f = t.length;e = h;for (m = 0; m < f; m++) {
            e = e[t[m]];
          }x.length && (e = a.formatSingle(x.join(":"), e));g.push(e);
        } else g.push(x);
        n = n.slice(u + 1);u = (r = !r) ? "}" : "{";
      }g.push(n);return g.join("");
    };a.getMagnitude = function (a) {
      return Math.pow(10, Math.floor(Math.log(a) / Math.LN10));
    };a.normalizeTickInterval = function (n, h, u, r, x) {
      var t,
          m = n;u = a.pick(u, 1);t = n / u;h || (h = x ? [1, 1.2, 1.5, 2, 2.5, 3, 4, 5, 6, 8, 10] : [1, 2, 2.5, 5, 10], !1 === r && (1 === u ? h = a.grep(h, function (a) {
        return 0 === a % 1;
      }) : .1 >= u && (h = [1 / u])));for (r = 0; r < h.length && !(m = h[r], x && m * u >= n || !x && t <= (h[r] + (h[r + 1] || h[r])) / 2); r++) {}return m = a.correctFloat(m * u, -Math.round(Math.log(.001) / Math.LN10));
    };a.stableSort = function (a, h) {
      var n = a.length,
          r,
          x;for (x = 0; x < n; x++) {
        a[x].safeI = x;
      }a.sort(function (a, m) {
        r = h(a, m);return 0 === r ? a.safeI - m.safeI : r;
      });for (x = 0; x < n; x++) {
        delete a[x].safeI;
      }
    };a.arrayMin = function (a) {
      for (var h = a.length, n = a[0]; h--;) {
        a[h] < n && (n = a[h]);
      }return n;
    };a.arrayMax = function (a) {
      for (var h = a.length, n = a[0]; h--;) {
        a[h] > n && (n = a[h]);
      }return n;
    };a.destroyObjectProperties = function (n, h) {
      a.objectEach(n, function (a, r) {
        a && a !== h && a.destroy && a.destroy();delete n[r];
      });
    };a.discardElement = function (n) {
      var h = a.garbageBin;h || (h = a.createElement("div"));
      n && h.appendChild(n);h.innerHTML = "";
    };a.correctFloat = function (a, h) {
      return parseFloat(a.toPrecision(h || 14));
    };a.setAnimation = function (n, h) {
      h.renderer.globalAnimation = a.pick(n, h.options.chart.animation, !0);
    };a.animObject = function (n) {
      return a.isObject(n) ? a.merge(n) : { duration: n ? 500 : 0 };
    };a.timeUnits = { millisecond: 1, second: 1E3, minute: 6E4, hour: 36E5, day: 864E5, week: 6048E5, month: 24192E5, year: 314496E5 };a.numberFormat = function (n, h, u, r) {
      n = +n || 0;h = +h;var x = a.defaultOptions.lang,
          t = (n.toString().split(".")[1] || "").length,
          m,
          f;-1 === h ? h = Math.min(t, 20) : a.isNumber(h) || (h = 2);f = (Math.abs(n) + Math.pow(10, -Math.max(h, t) - 1)).toFixed(h);t = String(a.pInt(f));m = 3 < t.length ? t.length % 3 : 0;u = a.pick(u, x.decimalPoint);r = a.pick(r, x.thousandsSep);n = (0 > n ? "-" : "") + (m ? t.substr(0, m) + r : "");n += t.substr(m).replace(/(\d{3})(?=\d)/g, "$1" + r);h && (n += u + f.slice(-h));return n;
    };Math.easeInOutSine = function (a) {
      return -.5 * (Math.cos(Math.PI * a) - 1);
    };a.getStyle = function (n, h, u) {
      if ("width" === h) return Math.min(n.offsetWidth, n.scrollWidth) - a.getStyle(n, "padding-left") - a.getStyle(n, "padding-right");if ("height" === h) return Math.min(n.offsetHeight, n.scrollHeight) - a.getStyle(n, "padding-top") - a.getStyle(n, "padding-bottom");if (n = D.getComputedStyle(n, void 0)) n = n.getPropertyValue(h), a.pick(u, !0) && (n = a.pInt(n));return n;
    };a.inArray = function (a, h) {
      return h.indexOf ? h.indexOf(a) : [].indexOf.call(h, a);
    };a.grep = function (a, h) {
      return [].filter.call(a, h);
    };a.find = function (a, h) {
      return [].find.call(a, h);
    };a.map = function (a, h) {
      for (var n = [], r = 0, x = a.length; r < x; r++) {
        n[r] = h.call(a[r], a[r], r, a);
      }return n;
    };a.offset = function (a) {
      var h = F.documentElement;a = a.getBoundingClientRect();return { top: a.top + (D.pageYOffset || h.scrollTop) - (h.clientTop || 0), left: a.left + (D.pageXOffset || h.scrollLeft) - (h.clientLeft || 0) };
    };a.stop = function (a, h) {
      for (var n = E.length; n--;) {
        E[n].elem !== a || h && h !== E[n].prop || (E[n].stopped = !0);
      }
    };a.each = function (a, h, u) {
      return Array.prototype.forEach.call(a, h, u);
    };a.objectEach = function (a, h, u) {
      for (var r in a) {
        a.hasOwnProperty(r) && h.call(u, a[r], r, a);
      }
    };a.addEvent = function (n, h, u) {
      function r(a) {
        a.target = a.srcElement || D;u.call(n, a);
      }var x = n.hcEvents = n.hcEvents || {};n.addEventListener ? n.addEventListener(h, u, !1) : n.attachEvent && (n.hcEventsIE || (n.hcEventsIE = {}), n.hcEventsIE[u.toString()] = r, n.attachEvent("on" + h, r));x[h] || (x[h] = []);x[h].push(u);return function () {
        a.removeEvent(n, h, u);
      };
    };a.removeEvent = function (n, h, u) {
      function r(a, e) {
        n.removeEventListener ? n.removeEventListener(a, e, !1) : n.attachEvent && (e = n.hcEventsIE[e.toString()], n.detachEvent("on" + a, e));
      }function x() {
        var f, e;n.nodeName && (h ? (f = {}, f[h] = !0) : f = m, a.objectEach(f, function (a, f) {
          if (m[f]) for (e = m[f].length; e--;) {
            r(f, m[f][e]);
          }
        }));
      }var t,
          m = n.hcEvents,
          f;m && (h ? (t = m[h] || [], u ? (f = a.inArray(u, t), -1 < f && (t.splice(f, 1), m[h] = t), r(h, u)) : (x(), m[h] = [])) : (x(), n.hcEvents = {}));
    };a.fireEvent = function (n, h, u, r) {
      var x;x = n.hcEvents;var t, m;u = u || {};if (F.createEvent && (n.dispatchEvent || n.fireEvent)) x = F.createEvent("Events"), x.initEvent(h, !0, !0), a.extend(x, u), n.dispatchEvent ? n.dispatchEvent(x) : n.fireEvent(h, x);else if (x) for (x = x[h] || [], t = x.length, u.target || a.extend(u, { preventDefault: function preventDefault() {
          u.defaultPrevented = !0;
        }, target: n, type: h }), h = 0; h < t; h++) {
        (m = x[h]) && !1 === m.call(n, u) && u.preventDefault();
      }r && !u.defaultPrevented && r(u);
    };a.animate = function (n, h, u) {
      var r,
          x = "",
          t,
          m,
          f;a.isObject(u) || (f = arguments, u = { duration: f[2], easing: f[3], complete: f[4] });a.isNumber(u.duration) || (u.duration = 400);u.easing = "function" === typeof u.easing ? u.easing : Math[u.easing] || Math.easeInOutSine;u.curAnim = a.merge(h);a.objectEach(h, function (f, e) {
        a.stop(n, e);m = new a.Fx(n, u, e);t = null;"d" === e ? (m.paths = m.initPath(n, n.d, h.d), m.toD = h.d, r = 0, t = 1) : n.attr ? r = n.attr(e) : (r = parseFloat(a.getStyle(n, e)) || 0, "opacity" !== e && (x = "px"));t || (t = f);t && t.match && t.match("px") && (t = t.replace(/px/g, ""));m.run(r, t, x);
      });
    };a.seriesType = function (n, h, u, r, x) {
      var t = a.getOptions(),
          m = a.seriesTypes;if (m[n]) return a.error(27);t.plotOptions[n] = a.merge(t.plotOptions[h], u);m[n] = a.extendClass(m[h] || function () {}, r);m[n].prototype.type = n;x && (m[n].prototype.pointClass = a.extendClass(a.Point, x));return m[n];
    };a.uniqueKey = function () {
      var a = Math.random().toString(36).substring(2, 9),
          h = 0;return function () {
        return "highcharts-" + a + "-" + h++;
      };
    }();D.jQuery && (D.jQuery.fn.highcharts = function () {
      var n = [].slice.call(arguments);if (this[0]) return n[0] ? (new a[a.isString(n[0]) ? n.shift() : "Chart"](this[0], n[0], n[1]), this) : B[a.attr(this[0], "data-highcharts-chart")];
    });F && !F.defaultView && (a.getStyle = function (n, h) {
      var u = { width: "clientWidth", height: "clientHeight" }[h];if (n.style[h]) return a.pInt(n.style[h]);"opacity" === h && (h = "filter");if (u) return n.style.zoom = 1, Math.max(n[u] - 2 * a.getStyle(n, "padding"), 0);n = n.currentStyle[h.replace(/\-(\w)/g, function (a, h) {
        return h.toUpperCase();
      })];"filter" === h && (n = n.replace(/alpha\(opacity=([0-9]+)\)/, function (a, h) {
        return h / 100;
      }));return "" === n ? 1 : a.pInt(n);
    });Array.prototype.forEach || (a.each = function (a, h, u) {
      for (var r = 0, n = a.length; r < n; r++) {
        if (!1 === h.call(u, a[r], r, a)) return r;
      }
    });Array.prototype.indexOf || (a.inArray = function (a, h) {
      var n,
          r = 0;if (h) for (n = h.length; r < n; r++) {
        if (h[r] === a) return r;
      }return -1;
    });Array.prototype.filter || (a.grep = function (a, h) {
      for (var n = [], r = 0, x = a.length; r < x; r++) {
        h(a[r], r) && n.push(a[r]);
      }return n;
    });
    Array.prototype.find || (a.find = function (a, h) {
      var n,
          r = a.length;for (n = 0; n < r; n++) {
        if (h(a[n], n)) return a[n];
      }
    });
  })(L);(function (a) {
    var E = a.each,
        B = a.isNumber,
        F = a.map,
        D = a.merge,
        n = a.pInt;a.Color = function (h) {
      if (!(this instanceof a.Color)) return new a.Color(h);this.init(h);
    };a.Color.prototype = { parsers: [{ regex: /rgba\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]?(?:\.[0-9]+)?)\s*\)/, parse: function parse(a) {
          return [n(a[1]), n(a[2]), n(a[3]), parseFloat(a[4], 10)];
        } }, { regex: /rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/,
        parse: function parse(a) {
          return [n(a[1]), n(a[2]), n(a[3]), 1];
        } }], names: { none: "rgba(255,255,255,0)", white: "#ffffff", black: "#000000" }, init: function init(h) {
        var n, r, x, t;if ((this.input = h = this.names[h && h.toLowerCase ? h.toLowerCase() : ""] || h) && h.stops) this.stops = F(h.stops, function (m) {
          return new a.Color(m[1]);
        });else if (h && "#" === h[0] && (n = h.length, h = parseInt(h.substr(1), 16), 7 === n ? r = [(h & 16711680) >> 16, (h & 65280) >> 8, h & 255, 1] : 4 === n && (r = [(h & 3840) >> 4 | (h & 3840) >> 8, (h & 240) >> 4 | h & 240, (h & 15) << 4 | h & 15, 1])), !r) for (x = this.parsers.length; x-- && !r;) {
          t = this.parsers[x], (n = t.regex.exec(h)) && (r = t.parse(n));
        }this.rgba = r || [];
      }, get: function get(a) {
        var h = this.input,
            r = this.rgba,
            n;this.stops ? (n = D(h), n.stops = [].concat(n.stops), E(this.stops, function (h, m) {
          n.stops[m] = [n.stops[m][0], h.get(a)];
        })) : n = r && B(r[0]) ? "rgb" === a || !a && 1 === r[3] ? "rgb(" + r[0] + "," + r[1] + "," + r[2] + ")" : "a" === a ? r[3] : "rgba(" + r.join(",") + ")" : h;return n;
      }, brighten: function brighten(a) {
        var h,
            r = this.rgba;if (this.stops) E(this.stops, function (h) {
          h.brighten(a);
        });else if (B(a) && 0 !== a) for (h = 0; 3 > h; h++) {
          r[h] += n(255 * a), 0 > r[h] && (r[h] = 0), 255 < r[h] && (r[h] = 255);
        }return this;
      }, setOpacity: function setOpacity(a) {
        this.rgba[3] = a;return this;
      }, tweenTo: function tweenTo(a, n) {
        var h, x;a.rgba.length ? (h = this.rgba, a = a.rgba, x = 1 !== a[3] || 1 !== h[3], a = (x ? "rgba(" : "rgb(") + Math.round(a[0] + (h[0] - a[0]) * (1 - n)) + "," + Math.round(a[1] + (h[1] - a[1]) * (1 - n)) + "," + Math.round(a[2] + (h[2] - a[2]) * (1 - n)) + (x ? "," + (a[3] + (h[3] - a[3]) * (1 - n)) : "") + ")") : a = a.input || "none";return a;
      } };a.color = function (h) {
      return new a.Color(h);
    };
  })(L);(function (a) {
    var E,
        B,
        F = a.addEvent,
        D = a.animate,
        n = a.attr,
        h = a.charts,
        u = a.color,
        r = a.css,
        x = a.createElement,
        t = a.defined,
        m = a.deg2rad,
        f = a.destroyObjectProperties,
        g = a.doc,
        e = a.each,
        d = a.extend,
        p = a.erase,
        b = a.grep,
        A = a.hasTouch,
        v = a.inArray,
        H = a.isArray,
        q = a.isFirefox,
        J = a.isMS,
        c = a.isObject,
        w = a.isString,
        K = a.isWebKit,
        y = a.merge,
        G = a.noop,
        l = a.objectEach,
        I = a.pick,
        k = a.pInt,
        z = a.removeEvent,
        Q = a.stop,
        M = a.svg,
        N = a.SVG_NS,
        P = a.symbolSizes,
        O = a.win;E = a.SVGElement = function () {
      return this;
    };d(E.prototype, { opacity: 1, SVG_NS: N, textProps: "direction fontSize fontWeight fontFamily fontStyle color lineHeight width textAlign textDecoration textOverflow textOutline".split(" "),
      init: function init(a, k) {
        this.element = "span" === k ? x(k) : g.createElementNS(this.SVG_NS, k);this.renderer = a;
      }, animate: function animate(C, k, c) {
        k = a.animObject(I(k, this.renderer.globalAnimation, !0));0 !== k.duration ? (c && (k.complete = c), D(this, C, k)) : (this.attr(C, null, c), k.step && k.step.call(this));return this;
      }, colorGradient: function colorGradient(C, k, c) {
        var z = this.renderer,
            b,
            d,
            q,
            f,
            w,
            G,
            g,
            M,
            v,
            R,
            p = [],
            I;C.radialGradient ? d = "radialGradient" : C.linearGradient && (d = "linearGradient");d && (q = C[d], w = z.gradients, g = C.stops, R = c.radialReference, H(q) && (C[d] = q = { x1: q[0], y1: q[1], x2: q[2], y2: q[3], gradientUnits: "userSpaceOnUse" }), "radialGradient" === d && R && !t(q.gradientUnits) && (f = q, q = y(q, z.getRadialAttr(R, f), { gradientUnits: "userSpaceOnUse" })), l(q, function (a, C) {
          "id" !== C && p.push(C, a);
        }), l(g, function (a) {
          p.push(a);
        }), p = p.join(","), w[p] ? R = w[p].attr("id") : (q.id = R = a.uniqueKey(), w[p] = G = z.createElement(d).attr(q).add(z.defs), G.radAttr = f, G.stops = [], e(g, function (C) {
          0 === C[1].indexOf("rgba") ? (b = a.color(C[1]), M = b.get("rgb"), v = b.get("a")) : (M = C[1], v = 1);C = z.createElement("stop").attr({ offset: C[0],
            "stop-color": M, "stop-opacity": v }).add(G);G.stops.push(C);
        })), I = "url(" + z.url + "#" + R + ")", c.setAttribute(k, I), c.gradient = p, C.toString = function () {
          return I;
        });
      }, applyTextOutline: function applyTextOutline(C) {
        var k = this.element,
            c,
            z,
            l,
            b,
            d;-1 !== C.indexOf("contrast") && (C = C.replace(/contrast/g, this.renderer.getContrast(k.style.fill)));C = C.split(" ");z = C[C.length - 1];if ((l = C[0]) && "none" !== l && a.svg) {
          this.fakeTS = !0;C = [].slice.call(k.getElementsByTagName("tspan"));this.ySetter = this.xSetter;l = l.replace(/(^[\d\.]+)(.*?)$/g, function (a, C, k) {
            return 2 * C + k;
          });for (d = C.length; d--;) {
            c = C[d], "highcharts-text-outline" === c.getAttribute("class") && p(C, k.removeChild(c));
          }b = k.firstChild;e(C, function (a, C) {
            0 === C && (a.setAttribute("x", k.getAttribute("x")), C = k.getAttribute("y"), a.setAttribute("y", C || 0), null === C && k.setAttribute("y", 0));a = a.cloneNode(1);n(a, { "class": "highcharts-text-outline", fill: z, stroke: z, "stroke-width": l, "stroke-linejoin": "round" });k.insertBefore(a, b);
          });
        }
      }, attr: function attr(a, k, c, z) {
        var C,
            b = this.element,
            d,
            q = this,
            e,
            y;"string" === typeof a && void 0 !== k && (C = a, a = {}, a[C] = k);"string" === typeof a ? q = (this[a + "Getter"] || this._defaultGetter).call(this, a, b) : (l(a, function (k, C) {
          e = !1;z || Q(this, C);this.symbolName && /^(x|y|width|height|r|start|end|innerR|anchorX|anchorY)$/.test(C) && (d || (this.symbolAttr(a), d = !0), e = !0);!this.rotation || "x" !== C && "y" !== C || (this.doTransform = !0);e || (y = this[C + "Setter"] || this._defaultSetter, y.call(this, k, C, b), this.shadows && /^(width|height|visibility|x|y|d|transform|cx|cy|r)$/.test(C) && this.updateShadows(C, k, y));
        }, this), this.afterSetters());
        c && c();return q;
      }, afterSetters: function afterSetters() {
        this.doTransform && (this.updateTransform(), this.doTransform = !1);
      }, updateShadows: function updateShadows(a, k, c) {
        for (var C = this.shadows, z = C.length; z--;) {
          c.call(C[z], "height" === a ? Math.max(k - (C[z].cutHeight || 0), 0) : "d" === a ? this.d : k, a, C[z]);
        }
      }, addClass: function addClass(a, k) {
        var C = this.attr("class") || "";-1 === C.indexOf(a) && (k || (a = (C + (C ? " " : "") + a).replace("  ", " ")), this.attr("class", a));return this;
      }, hasClass: function hasClass(a) {
        return -1 !== n(this.element, "class").indexOf(a);
      }, removeClass: function removeClass(a) {
        n(this.element, "class", (n(this.element, "class") || "").replace(a, ""));return this;
      }, symbolAttr: function symbolAttr(a) {
        var k = this;e("x y r start end width height innerR anchorX anchorY".split(" "), function (C) {
          k[C] = I(a[C], k[C]);
        });k.attr({ d: k.renderer.symbols[k.symbolName](k.x, k.y, k.width, k.height, k) });
      }, clip: function clip(a) {
        return this.attr("clip-path", a ? "url(" + this.renderer.url + "#" + a.id + ")" : "none");
      }, crisp: function crisp(a, k) {
        var C = this,
            c = {},
            z;k = k || a.strokeWidth || 0;z = Math.round(k) % 2 / 2;a.x = Math.floor(a.x || C.x || 0) + z;a.y = Math.floor(a.y || C.y || 0) + z;a.width = Math.floor((a.width || C.width || 0) - 2 * z);a.height = Math.floor((a.height || C.height || 0) - 2 * z);t(a.strokeWidth) && (a.strokeWidth = k);l(a, function (a, k) {
          C[k] !== a && (C[k] = c[k] = a);
        });return c;
      }, css: function css(a) {
        var C = this.styles,
            c = {},
            z = this.element,
            b,
            q = "",
            e,
            y = !C,
            f = ["textOutline", "textOverflow", "width"];a && a.color && (a.fill = a.color);C && l(a, function (a, k) {
          a !== C[k] && (c[k] = a, y = !0);
        });y && (C && (a = d(C, c)), b = this.textWidth = a && a.width && "auto" !== a.width && "text" === z.nodeName.toLowerCase() && k(a.width), this.styles = a, b && !M && this.renderer.forExport && delete a.width, J && !M ? r(this.element, a) : (e = function e(a, k) {
          return "-" + k.toLowerCase();
        }, l(a, function (a, k) {
          -1 === v(k, f) && (q += k.replace(/([A-Z])/g, e) + ":" + a + ";");
        }), q && n(z, "style", q)), this.added && ("text" === this.element.nodeName && this.renderer.buildText(this), a && a.textOutline && this.applyTextOutline(a.textOutline)));return this;
      }, strokeWidth: function strokeWidth() {
        return this["stroke-width"] || 0;
      }, on: function on(a, k) {
        var C = this,
            c = C.element;A && "click" === a ? (c.ontouchstart = function (a) {
          C.touchEventFired = Date.now();a.preventDefault();k.call(c, a);
        }, c.onclick = function (a) {
          (-1 === O.navigator.userAgent.indexOf("Android") || 1100 < Date.now() - (C.touchEventFired || 0)) && k.call(c, a);
        }) : c["on" + a] = k;return this;
      }, setRadialReference: function setRadialReference(a) {
        var k = this.renderer.gradients[this.element.gradient];this.element.radialReference = a;k && k.radAttr && k.animate(this.renderer.getRadialAttr(a, k.radAttr));return this;
      }, translate: function translate(a, k) {
        return this.attr({ translateX: a, translateY: k });
      }, invert: function invert(a) {
        this.inverted = a;this.updateTransform();
        return this;
      }, updateTransform: function updateTransform() {
        var a = this.translateX || 0,
            k = this.translateY || 0,
            c = this.scaleX,
            z = this.scaleY,
            l = this.inverted,
            b = this.rotation,
            d = this.element;l && (a += this.width, k += this.height);a = ["translate(" + a + "," + k + ")"];l ? a.push("rotate(90) scale(-1,1)") : b && a.push("rotate(" + b + " " + (d.getAttribute("x") || 0) + " " + (d.getAttribute("y") || 0) + ")");(t(c) || t(z)) && a.push("scale(" + I(c, 1) + " " + I(z, 1) + ")");a.length && d.setAttribute("transform", a.join(" "));
      }, toFront: function toFront() {
        var a = this.element;a.parentNode.appendChild(a);
        return this;
      }, align: function align(a, k, c) {
        var C,
            z,
            l,
            b,
            d = {};z = this.renderer;l = z.alignedObjects;var q, e;if (a) {
          if (this.alignOptions = a, this.alignByTranslate = k, !c || w(c)) this.alignTo = C = c || "renderer", p(l, this), l.push(this), c = null;
        } else a = this.alignOptions, k = this.alignByTranslate, C = this.alignTo;c = I(c, z[C], z);C = a.align;z = a.verticalAlign;l = (c.x || 0) + (a.x || 0);b = (c.y || 0) + (a.y || 0);"right" === C ? q = 1 : "center" === C && (q = 2);q && (l += (c.width - (a.width || 0)) / q);d[k ? "translateX" : "x"] = Math.round(l);"bottom" === z ? e = 1 : "middle" === z && (e = 2);e && (b += (c.height - (a.height || 0)) / e);d[k ? "translateY" : "y"] = Math.round(b);this[this.placed ? "animate" : "attr"](d);this.placed = !0;this.alignAttr = d;return this;
      }, getBBox: function getBBox(a, k) {
        var C,
            c = this.renderer,
            z,
            l = this.element,
            b = this.styles,
            q,
            y = this.textStr,
            f,
            w = c.cache,
            G = c.cacheKeys,
            g;k = I(k, this.rotation);z = k * m;q = b && b.fontSize;void 0 !== y && (g = y.toString(), -1 === g.indexOf("\x3c") && (g = g.replace(/[0-9]/g, "0")), g += ["", k || 0, q, b && b.width, b && b.textOverflow].join());g && !a && (C = w[g]);if (!C) {
          if (l.namespaceURI === this.SVG_NS || c.forExport) {
            try {
              (f = this.fakeTS && function (a) {
                e(l.querySelectorAll(".highcharts-text-outline"), function (k) {
                  k.style.display = a;
                });
              }) && f("none"), C = l.getBBox ? d({}, l.getBBox()) : { width: l.offsetWidth, height: l.offsetHeight }, f && f("");
            } catch (W) {}if (!C || 0 > C.width) C = { width: 0, height: 0 };
          } else C = this.htmlGetBBox();c.isSVG && (a = C.width, c = C.height, b && "11px" === b.fontSize && 17 === Math.round(c) && (C.height = c = 14), k && (C.width = Math.abs(c * Math.sin(z)) + Math.abs(a * Math.cos(z)), C.height = Math.abs(c * Math.cos(z)) + Math.abs(a * Math.sin(z))));
          if (g && 0 < C.height) {
            for (; 250 < G.length;) {
              delete w[G.shift()];
            }w[g] || G.push(g);w[g] = C;
          }
        }return C;
      }, show: function show(a) {
        return this.attr({ visibility: a ? "inherit" : "visible" });
      }, hide: function hide() {
        return this.attr({ visibility: "hidden" });
      }, fadeOut: function fadeOut(a) {
        var k = this;k.animate({ opacity: 0 }, { duration: a || 150, complete: function complete() {
            k.attr({ y: -9999 });
          } });
      }, add: function add(a) {
        var k = this.renderer,
            c = this.element,
            C;a && (this.parentGroup = a);this.parentInverted = a && a.inverted;void 0 !== this.textStr && k.buildText(this);this.added = !0;if (!a || a.handleZ || this.zIndex) C = this.zIndexSetter();C || (a ? a.element : k.box).appendChild(c);if (this.onAdd) this.onAdd();return this;
      }, safeRemoveChild: function safeRemoveChild(a) {
        var k = a.parentNode;k && k.removeChild(a);
      }, destroy: function destroy() {
        var a = this,
            k = a.element || {},
            c = a.renderer.isSVG && "SPAN" === k.nodeName && a.parentGroup,
            z = k.ownerSVGElement;k.onclick = k.onmouseout = k.onmouseover = k.onmousemove = k.point = null;Q(a);a.clipPath && z && (e(z.querySelectorAll("[clip-path]"), function (k) {
          -1 < k.getAttribute("clip-path").indexOf(a.clipPath.element.id + ")") && k.removeAttribute("clip-path");
        }), a.clipPath = a.clipPath.destroy());if (a.stops) {
          for (z = 0; z < a.stops.length; z++) {
            a.stops[z] = a.stops[z].destroy();
          }a.stops = null;
        }a.safeRemoveChild(k);for (a.destroyShadows(); c && c.div && 0 === c.div.childNodes.length;) {
          k = c.parentGroup, a.safeRemoveChild(c.div), delete c.div, c = k;
        }a.alignTo && p(a.renderer.alignedObjects, a);l(a, function (k, c) {
          delete a[c];
        });return null;
      }, shadow: function shadow(a, k, c) {
        var C = [],
            z,
            l,
            b = this.element,
            d,
            q,
            e,
            y;if (!a) this.destroyShadows();else if (!this.shadows) {
          q = I(a.width, 3);e = (a.opacity || .15) / q;y = this.parentInverted ? "(-1,-1)" : "(" + I(a.offsetX, 1) + ", " + I(a.offsetY, 1) + ")";for (z = 1; z <= q; z++) {
            l = b.cloneNode(0), d = 2 * q + 1 - 2 * z, n(l, { isShadow: "true", stroke: a.color || "#000000", "stroke-opacity": e * z, "stroke-width": d, transform: "translate" + y, fill: "none" }), c && (n(l, "height", Math.max(n(l, "height") - d, 0)), l.cutHeight = d), k ? k.element.appendChild(l) : b.parentNode.insertBefore(l, b), C.push(l);
          }this.shadows = C;
        }return this;
      }, destroyShadows: function destroyShadows() {
        e(this.shadows || [], function (a) {
          this.safeRemoveChild(a);
        }, this);this.shadows = void 0;
      }, xGetter: function xGetter(a) {
        "circle" === this.element.nodeName && ("x" === a ? a = "cx" : "y" === a && (a = "cy"));return this._defaultGetter(a);
      }, _defaultGetter: function _defaultGetter(a) {
        a = I(this[a], this.element ? this.element.getAttribute(a) : null, 0);/^[\-0-9\.]+$/.test(a) && (a = parseFloat(a));return a;
      }, dSetter: function dSetter(a, k, c) {
        a && a.join && (a = a.join(" "));/(NaN| {2}|^$)/.test(a) && (a = "M 0 0");c.setAttribute(k, a);this[k] = a;
      }, dashstyleSetter: function dashstyleSetter(a) {
        var c,
            z = this["stroke-width"];"inherit" === z && (z = 1);if (a = a && a.toLowerCase()) {
          a = a.replace("shortdashdotdot", "3,1,1,1,1,1,").replace("shortdashdot", "3,1,1,1").replace("shortdot", "1,1,").replace("shortdash", "3,1,").replace("longdash", "8,3,").replace(/dot/g, "1,3,").replace("dash", "4,3,").replace(/,$/, "").split(",");for (c = a.length; c--;) {
            a[c] = k(a[c]) * z;
          }a = a.join(",").replace(/NaN/g, "none");this.element.setAttribute("stroke-dasharray", a);
        }
      }, alignSetter: function alignSetter(a) {
        this.element.setAttribute("text-anchor", { left: "start", center: "middle", right: "end" }[a]);
      }, opacitySetter: function opacitySetter(a, k, c) {
        this[k] = a;c.setAttribute(k, a);
      }, titleSetter: function titleSetter(a) {
        var k = this.element.getElementsByTagName("title")[0];k || (k = g.createElementNS(this.SVG_NS, "title"), this.element.appendChild(k));k.firstChild && k.removeChild(k.firstChild);k.appendChild(g.createTextNode(String(I(a), "").replace(/<[^>]*>/g, "")));
      }, textSetter: function textSetter(a) {
        a !== this.textStr && (delete this.bBox, this.textStr = a, this.added && this.renderer.buildText(this));
      }, fillSetter: function fillSetter(a, k, c) {
        "string" === typeof a ? c.setAttribute(k, a) : a && this.colorGradient(a, k, c);
      },
      visibilitySetter: function visibilitySetter(a, k, c) {
        "inherit" === a ? c.removeAttribute(k) : c.setAttribute(k, a);
      }, zIndexSetter: function zIndexSetter(a, c) {
        var z = this.renderer,
            l = this.parentGroup,
            C = (l || z).element || z.box,
            b,
            d = this.element,
            q;b = this.added;var e;t(a) && (d.zIndex = a, a = +a, this[c] === a && (b = !1), this[c] = a);if (b) {
          (a = this.zIndex) && l && (l.handleZ = !0);c = C.childNodes;for (e = 0; e < c.length && !q; e++) {
            l = c[e], b = l.zIndex, l !== d && (k(b) > a || !t(a) && t(b) || 0 > a && !t(b) && C !== z.box) && (C.insertBefore(d, l), q = !0);
          }q || C.appendChild(d);
        }return q;
      }, _defaultSetter: function _defaultSetter(a, k, c) {
        c.setAttribute(k, a);
      } });E.prototype.yGetter = E.prototype.xGetter;E.prototype.translateXSetter = E.prototype.translateYSetter = E.prototype.rotationSetter = E.prototype.verticalAlignSetter = E.prototype.scaleXSetter = E.prototype.scaleYSetter = function (a, k) {
      this[k] = a;this.doTransform = !0;
    };E.prototype["stroke-widthSetter"] = E.prototype.strokeSetter = function (a, k, c) {
      this[k] = a;this.stroke && this["stroke-width"] ? (E.prototype.fillSetter.call(this, this.stroke, "stroke", c), c.setAttribute("stroke-width", this["stroke-width"]), this.hasStroke = !0) : "stroke-width" === k && 0 === a && this.hasStroke && (c.removeAttribute("stroke"), this.hasStroke = !1);
    };B = a.SVGRenderer = function () {
      this.init.apply(this, arguments);
    };d(B.prototype, { Element: E, SVG_NS: N, init: function init(a, k, c, z, l, b) {
        var C;z = this.createElement("svg").attr({ version: "1.1", "class": "highcharts-root" }).css(this.getStyle(z));C = z.element;a.appendChild(C);-1 === a.innerHTML.indexOf("xmlns") && n(C, "xmlns", this.SVG_NS);this.isSVG = !0;this.box = C;this.boxWrapper = z;this.alignedObjects = [];this.url = (q || K) && g.getElementsByTagName("base").length ? O.location.href.replace(/#.*?$/, "").replace(/<[^>]*>/g, "").replace(/([\('\)])/g, "\\$1").replace(/ /g, "%20") : "";this.createElement("desc").add().element.appendChild(g.createTextNode("Created with Highstock 5.0.12"));this.defs = this.createElement("defs").add();this.allowHTML = b;this.forExport = l;this.gradients = {};this.cache = {};this.cacheKeys = [];this.imgCount = 0;this.setSize(k, c, !1);var d;q && a.getBoundingClientRect && (k = function k() {
          r(a, { left: 0, top: 0 });d = a.getBoundingClientRect();
          r(a, { left: Math.ceil(d.left) - d.left + "px", top: Math.ceil(d.top) - d.top + "px" });
        }, k(), this.unSubPixelFix = F(O, "resize", k));
      }, getStyle: function getStyle(a) {
        return this.style = d({ fontFamily: '"Lucida Grande", "Lucida Sans Unicode", Arial, Helvetica, sans-serif', fontSize: "12px" }, a);
      }, setStyle: function setStyle(a) {
        this.boxWrapper.css(this.getStyle(a));
      }, isHidden: function isHidden() {
        return !this.boxWrapper.getBBox().width;
      }, destroy: function destroy() {
        var a = this.defs;this.box = null;this.boxWrapper = this.boxWrapper.destroy();f(this.gradients || {});this.gradients = null;a && (this.defs = a.destroy());this.unSubPixelFix && this.unSubPixelFix();return this.alignedObjects = null;
      }, createElement: function createElement(a) {
        var k = new this.Element();k.init(this, a);return k;
      }, draw: G, getRadialAttr: function getRadialAttr(a, k) {
        return { cx: a[0] - a[2] / 2 + k.cx * a[2], cy: a[1] - a[2] / 2 + k.cy * a[2], r: k.r * a[2] };
      }, getSpanWidth: function getSpanWidth(a, k) {
        var c = a.getBBox(!0).width;!M && this.forExport && (c = this.measureSpanWidth(k.firstChild.data, a.styles));return c;
      }, applyEllipsis: function applyEllipsis(a, k, c, z) {
        var l = this.getSpanWidth(a, k),
            b = l > z,
            l = c,
            d,
            q = 0,
            C = c.length,
            e = function e(a) {
          k.removeChild(k.firstChild);a && k.appendChild(g.createTextNode(a));
        };if (b) {
          for (; q <= C;) {
            d = Math.ceil((q + C) / 2), l = c.substring(0, d) + "\u2026", e(l), l = this.getSpanWidth(a, k), q === C ? q = C + 1 : l > z ? C = d - 1 : q = d;
          }0 === C && e("");
        }return b;
      }, buildText: function buildText(a) {
        var c = a.element,
            z = this,
            l = z.forExport,
            d = I(a.textStr, "").toString(),
            q = -1 !== d.indexOf("\x3c"),
            C = c.childNodes,
            y,
            f,
            w,
            G,
            v = n(c, "x"),
            p = a.styles,
            J = a.textWidth,
            m = p && p.lineHeight,
            A = p && p.textOutline,
            H = p && "ellipsis" === p.textOverflow,
            K = p && "nowrap" === p.whiteSpace,
            h = p && p.fontSize,
            Q,
            t,
            x = C.length,
            p = J && !a.added && this.box,
            u = function u(a) {
          var l;l = /(px|em)$/.test(a && a.style.fontSize) ? a.style.fontSize : h || z.style.fontSize || 12;return m ? k(m) : z.fontMetrics(l, a.getAttribute("style") ? a : c).h;
        };Q = [d, H, K, m, A, h, J].join();if (Q !== a.textCache) {
          for (a.textCache = Q; x--;) {
            c.removeChild(C[x]);
          }q || A || H || J || -1 !== d.indexOf(" ") ? (y = /<.*class="([^"]+)".*>/, f = /<.*style="([^"]+)".*>/, w = /<.*href="([^"]+)".*>/, p && p.appendChild(c), d = q ? d.replace(/<(b|strong)>/g, '\x3cspan style\x3d"font-weight:bold"\x3e').replace(/<(i|em)>/g, '\x3cspan style\x3d"font-style:italic"\x3e').replace(/<a/g, "\x3cspan").replace(/<\/(b|strong|i|em|a)>/g, "\x3c/span\x3e").split(/<br.*?>/g) : [d], d = b(d, function (a) {
            return "" !== a;
          }), e(d, function (k, b) {
            var d,
                q = 0;k = k.replace(/^\s+|\s+$/g, "").replace(/<span/g, "|||\x3cspan").replace(/<\/span>/g, "\x3c/span\x3e|||");d = k.split("|||");e(d, function (k) {
              if ("" !== k || 1 === d.length) {
                var C = {},
                    e = g.createElementNS(z.SVG_NS, "tspan"),
                    p,
                    I;y.test(k) && (p = k.match(y)[1], n(e, "class", p));f.test(k) && (I = k.match(f)[1].replace(/(;| |^)color([ :])/, "$1fill$2"), n(e, "style", I));w.test(k) && !l && (n(e, "onclick", 'location.href\x3d"' + k.match(w)[1] + '"'), r(e, { cursor: "pointer" }));k = (k.replace(/<(.|\n)*?>/g, "") || " ").replace(/&lt;/g, "\x3c").replace(/&gt;/g, "\x3e");if (" " !== k) {
                  e.appendChild(g.createTextNode(k));q ? C.dx = 0 : b && null !== v && (C.x = v);n(e, C);c.appendChild(e);!q && t && (!M && l && r(e, { display: "block" }), n(e, "dy", u(e)));if (J) {
                    C = k.replace(/([^\^])-/g, "$1- ").split(" ");p = 1 < d.length || b || 1 < C.length && !K;var m = [],
                        A,
                        h = u(e),
                        Q = a.rotation;for (H && (G = z.applyEllipsis(a, e, k, J)); !H && p && (C.length || m.length);) {
                      a.rotation = 0, A = z.getSpanWidth(a, e), k = A > J, void 0 === G && (G = k), k && 1 !== C.length ? (e.removeChild(e.firstChild), m.unshift(C.pop())) : (C = m, m = [], C.length && !K && (e = g.createElementNS(N, "tspan"), n(e, { dy: h, x: v }), I && n(e, "style", I), c.appendChild(e)), A > J && (J = A)), C.length && e.appendChild(g.createTextNode(C.join(" ").replace(/- /g, "-")));
                    }a.rotation = Q;
                  }q++;
                }
              }
            });t = t || c.childNodes.length;
          }), G && a.attr("title", a.textStr), p && p.removeChild(c), A && a.applyTextOutline && a.applyTextOutline(A)) : c.appendChild(g.createTextNode(d.replace(/&lt;/g, "\x3c").replace(/&gt;/g, "\x3e")));
        }
      }, getContrast: function getContrast(a) {
        a = u(a).rgba;return 510 < a[0] + a[1] + a[2] ? "#000000" : "#FFFFFF";
      }, button: function button(a, k, c, z, l, b, q, e, f) {
        var C = this.label(a, k, c, f, null, null, null, null, "button"),
            w = 0;C.attr(y({ padding: 8, r: 2 }, l));var G, g, p, v;l = y({ fill: "#f7f7f7", stroke: "#cccccc", "stroke-width": 1, style: { color: "#333333", cursor: "pointer", fontWeight: "normal" } }, l);G = l.style;delete l.style;b = y(l, { fill: "#e6e6e6" }, b);g = b.style;delete b.style;q = y(l, { fill: "#e6ebf5", style: { color: "#000000", fontWeight: "bold" } }, q);p = q.style;delete q.style;e = y(l, { style: { color: "#cccccc" } }, e);v = e.style;delete e.style;F(C.element, J ? "mouseover" : "mouseenter", function () {
          3 !== w && C.setState(1);
        });F(C.element, J ? "mouseout" : "mouseleave", function () {
          3 !== w && C.setState(w);
        });C.setState = function (a) {
          1 !== a && (C.state = w = a);C.removeClass(/highcharts-button-(normal|hover|pressed|disabled)/).addClass("highcharts-button-" + ["normal", "hover", "pressed", "disabled"][a || 0]);C.attr([l, b, q, e][a || 0]).css([G, g, p, v][a || 0]);
        };C.attr(l).css(d({ cursor: "default" }, G));return C.on("click", function (a) {
          3 !== w && z.call(C, a);
        });
      }, crispLine: function crispLine(a, k) {
        a[1] === a[4] && (a[1] = a[4] = Math.round(a[1]) - k % 2 / 2);a[2] === a[5] && (a[2] = a[5] = Math.round(a[2]) + k % 2 / 2);return a;
      }, path: function path(a) {
        var k = { fill: "none" };H(a) ? k.d = a : c(a) && d(k, a);return this.createElement("path").attr(k);
      }, circle: function circle(a, k, z) {
        a = c(a) ? a : { x: a, y: k, r: z };k = this.createElement("circle");k.xSetter = k.ySetter = function (a, k, c) {
          c.setAttribute("c" + k, a);
        };return k.attr(a);
      }, arc: function arc(a, k, z, l, b, d) {
        c(a) ? (l = a, k = l.y, z = l.r, a = l.x) : l = { innerR: l, start: b, end: d };a = this.symbol("arc", a, k, z, z, l);a.r = z;return a;
      }, rect: function rect(a, k, z, l, b, d) {
        b = c(a) ? a.r : b;var q = this.createElement("rect");a = c(a) ? a : void 0 === a ? {} : { x: a, y: k, width: Math.max(z, 0), height: Math.max(l, 0) };void 0 !== d && (a.strokeWidth = d, a = q.crisp(a));a.fill = "none";b && (a.r = b);q.rSetter = function (a, k, c) {
          n(c, { rx: a, ry: a });
        };return q.attr(a);
      }, setSize: function setSize(a, k, c) {
        var z = this.alignedObjects,
            l = z.length;this.width = a;this.height = k;for (this.boxWrapper.animate({ width: a, height: k }, { step: function step() {
            this.attr({ viewBox: "0 0 " + this.attr("width") + " " + this.attr("height") });
          }, duration: I(c, !0) ? void 0 : 0 }); l--;) {
          z[l].align();
        }
      }, g: function g(a) {
        var k = this.createElement("g");return a ? k.attr({ "class": "highcharts-" + a }) : k;
      }, image: function image(a, k, c, z, l) {
        var b = { preserveAspectRatio: "none" };1 < arguments.length && d(b, { x: k, y: c, width: z, height: l });b = this.createElement("image").attr(b);b.element.setAttributeNS ? b.element.setAttributeNS("http://www.w3.org/1999/xlink", "href", a) : b.element.setAttribute("hc-svg-href", a);return b;
      }, symbol: function symbol(a, k, c, z, l, b) {
        var q = this,
            y,
            C = /^url\((.*?)\)$/,
            f = C.test(a),
            w = !f && (this.symbols[a] ? a : "circle"),
            G = w && this.symbols[w],
            p = t(k) && G && G.call(this.symbols, Math.round(k), Math.round(c), z, l, b),
            v,
            M;G ? (y = this.path(p), y.attr("fill", "none"), d(y, { symbolName: w, x: k, y: c, width: z, height: l }), b && d(y, b)) : f && (v = a.match(C)[1], y = this.image(v), y.imgwidth = I(P[v] && P[v].width, b && b.width), y.imgheight = I(P[v] && P[v].height, b && b.height), M = function M() {
          y.attr({ width: y.width, height: y.height });
        }, e(["width", "height"], function (a) {
          y[a + "Setter"] = function (a, k) {
            var c = {},
                z = this["img" + k],
                l = "width" === k ? "translateX" : "translateY";this[k] = a;t(z) && (this.element && this.element.setAttribute(k, z), this.alignByTranslate || (c[l] = ((this[k] || 0) - z) / 2, this.attr(c)));
          };
        }), t(k) && y.attr({ x: k, y: c }), y.isImg = !0, t(y.imgwidth) && t(y.imgheight) ? M() : (y.attr({ width: 0, height: 0 }), x("img", { onload: function onload() {
            var a = h[q.chartIndex];0 === this.width && (r(this, { position: "absolute", top: "-999em" }), g.body.appendChild(this));P[v] = { width: this.width, height: this.height };y.imgwidth = this.width;y.imgheight = this.height;y.element && M();this.parentNode && this.parentNode.removeChild(this);q.imgCount--;if (!q.imgCount && a && a.onload) a.onload();
          }, src: v }), this.imgCount++));return y;
      }, symbols: { circle: function circle(a, k, c, z) {
          return this.arc(a + c / 2, k + z / 2, c / 2, z / 2, { start: 0, end: 2 * Math.PI, open: !1 });
        }, square: function square(a, k, c, z) {
          return ["M", a, k, "L", a + c, k, a + c, k + z, a, k + z, "Z"];
        }, triangle: function triangle(a, k, c, z) {
          return ["M", a + c / 2, k, "L", a + c, k + z, a, k + z, "Z"];
        }, "triangle-down": function triangleDown(a, k, c, z) {
          return ["M", a, k, "L", a + c, k, a + c / 2, k + z, "Z"];
        }, diamond: function diamond(a, k, c, z) {
          return ["M", a + c / 2, k, "L", a + c, k + z / 2, a + c / 2, k + z, a, k + z / 2, "Z"];
        }, arc: function arc(a, k, c, z, l) {
          var b = l.start,
              d = l.r || c,
              q = l.r || z || c,
              e = l.end - .001;c = l.innerR;z = l.open;var y = Math.cos(b),
              f = Math.sin(b),
              C = Math.cos(e),
              e = Math.sin(e);l = l.end - b < Math.PI ? 0 : 1;d = ["M", a + d * y, k + q * f, "A", d, q, 0, l, 1, a + d * C, k + q * e];t(c) && d.push(z ? "M" : "L", a + c * C, k + c * e, "A", c, c, 0, l, 0, a + c * y, k + c * f);d.push(z ? "" : "Z");return d;
        }, callout: function callout(a, k, c, z, l) {
          var b = Math.min(l && l.r || 0, c, z),
              d = b + 6,
              q = l && l.anchorX;l = l && l.anchorY;var e;e = ["M", a + b, k, "L", a + c - b, k, "C", a + c, k, a + c, k, a + c, k + b, "L", a + c, k + z - b, "C", a + c, k + z, a + c, k + z, a + c - b, k + z, "L", a + b, k + z, "C", a, k + z, a, k + z, a, k + z - b, "L", a, k + b, "C", a, k, a, k, a + b, k];q && q > c ? l > k + d && l < k + z - d ? e.splice(13, 3, "L", a + c, l - 6, a + c + 6, l, a + c, l + 6, a + c, k + z - b) : e.splice(13, 3, "L", a + c, z / 2, q, l, a + c, z / 2, a + c, k + z - b) : q && 0 > q ? l > k + d && l < k + z - d ? e.splice(33, 3, "L", a, l + 6, a - 6, l, a, l - 6, a, k + b) : e.splice(33, 3, "L", a, z / 2, q, l, a, z / 2, a, k + b) : l && l > z && q > a + d && q < a + c - d ? e.splice(23, 3, "L", q + 6, k + z, q, k + z + 6, q - 6, k + z, a + b, k + z) : l && 0 > l && q > a + d && q < a + c - d && e.splice(3, 3, "L", q - 6, k, q, k - 6, q + 6, k, c - b, k);return e;
        } },
      clipRect: function clipRect(k, c, z, l) {
        var b = a.uniqueKey(),
            d = this.createElement("clipPath").attr({ id: b }).add(this.defs);k = this.rect(k, c, z, l, 0).add(d);k.id = b;k.clipPath = d;k.count = 0;return k;
      }, text: function text(a, k, c, z) {
        var l = !M && this.forExport,
            b = {};if (z && (this.allowHTML || !this.forExport)) return this.html(a, k, c);b.x = Math.round(k || 0);c && (b.y = Math.round(c));if (a || 0 === a) b.text = a;a = this.createElement("text").attr(b);l && a.css({ position: "absolute" });z || (a.xSetter = function (a, k, c) {
          var z = c.getElementsByTagName("tspan"),
              l,
              b = c.getAttribute(k),
              d;for (d = 0; d < z.length; d++) {
            l = z[d], l.getAttribute(k) === b && l.setAttribute(k, a);
          }c.setAttribute(k, a);
        });return a;
      }, fontMetrics: function fontMetrics(a, c) {
        a = a || c && c.style && c.style.fontSize || this.style && this.style.fontSize;a = /px/.test(a) ? k(a) : /em/.test(a) ? parseFloat(a) * (c ? this.fontMetrics(null, c.parentNode).f : 16) : 12;c = 24 > a ? a + 3 : Math.round(1.2 * a);return { h: c, b: Math.round(.8 * c), f: a };
      }, rotCorr: function rotCorr(a, k, c) {
        var z = a;k && c && (z = Math.max(z * Math.cos(k * m), 4));return { x: -a / 3 * Math.sin(k * m), y: z };
      }, label: function label(k, c, l, b, q, f, w, G, g) {
        var v = this,
            p = v.g("button" !== g && "label"),
            M = p.text = v.text("", 0, 0, w).attr({ zIndex: 1 }),
            C,
            I,
            J = 0,
            m = 3,
            A = 0,
            H,
            h,
            K,
            Q,
            r,
            N = {},
            n,
            x,
            u = /^url\((.*?)\)$/.test(b),
            P = u,
            R,
            V,
            U,
            O;g && p.addClass("highcharts-" + g);P = u;R = function R() {
          return (n || 0) % 2 / 2;
        };V = function V() {
          var a = M.element.style,
              k = {};I = (void 0 === H || void 0 === h || r) && t(M.textStr) && M.getBBox();p.width = (H || I.width || 0) + 2 * m + A;p.height = (h || I.height || 0) + 2 * m;x = m + v.fontMetrics(a && a.fontSize, M).b;P && (C || (p.box = C = v.symbols[b] || u ? v.symbol(b) : v.rect(), C.addClass(("button" === g ? "" : "highcharts-label-box") + (g ? " highcharts-" + g + "-box" : "")), C.add(p), a = R(), k.x = a, k.y = (G ? -x : 0) + a), k.width = Math.round(p.width), k.height = Math.round(p.height), C.attr(d(k, N)), N = {});
        };U = function U() {
          var a = A + m,
              k;k = G ? 0 : x;t(H) && I && ("center" === r || "right" === r) && (a += { center: .5, right: 1 }[r] * (H - I.width));if (a !== M.x || k !== M.y) M.attr("x", a), void 0 !== k && M.attr("y", k);M.x = a;M.y = k;
        };O = function O(a, k) {
          C ? C.attr(a, k) : N[a] = k;
        };p.onAdd = function () {
          M.add(p);p.attr({ text: k || 0 === k ? k : "", x: c, y: l });C && t(q) && p.attr({ anchorX: q, anchorY: f });
        };
        p.widthSetter = function (k) {
          H = a.isNumber(k) ? k : null;
        };p.heightSetter = function (a) {
          h = a;
        };p["text-alignSetter"] = function (a) {
          r = a;
        };p.paddingSetter = function (a) {
          t(a) && a !== m && (m = p.padding = a, U());
        };p.paddingLeftSetter = function (a) {
          t(a) && a !== A && (A = a, U());
        };p.alignSetter = function (a) {
          a = { left: 0, center: .5, right: 1 }[a];a !== J && (J = a, I && p.attr({ x: K }));
        };p.textSetter = function (a) {
          void 0 !== a && M.textSetter(a);V();U();
        };p["stroke-widthSetter"] = function (a, k) {
          a && (P = !0);n = this["stroke-width"] = a;O(k, a);
        };p.strokeSetter = p.fillSetter = p.rSetter = function (a, k) {
          "fill" === k && a && (P = !0);O(k, a);
        };p.anchorXSetter = function (a, k) {
          q = p.anchorX = a;O(k, Math.round(a) - R() - K);
        };p.anchorYSetter = function (a, k) {
          f = p.anchorY = a;O(k, a - Q);
        };p.xSetter = function (a) {
          p.x = a;J && (a -= J * ((H || I.width) + 2 * m));K = Math.round(a);p.attr("translateX", K);
        };p.ySetter = function (a) {
          Q = p.y = Math.round(a);p.attr("translateY", Q);
        };var B = p.css;return d(p, { css: function css(a) {
            if (a) {
              var k = {};a = y(a);e(p.textProps, function (c) {
                void 0 !== a[c] && (k[c] = a[c], delete a[c]);
              });M.css(k);
            }return B.call(p, a);
          }, getBBox: function getBBox() {
            return { width: I.width + 2 * m, height: I.height + 2 * m, x: I.x - m, y: I.y - m };
          }, shadow: function shadow(a) {
            a && (V(), C && C.shadow(a));return p;
          }, destroy: function destroy() {
            z(p.element, "mouseenter");z(p.element, "mouseleave");M && (M = M.destroy());C && (C = C.destroy());E.prototype.destroy.call(p);p = v = V = U = O = null;
          } });
      } });a.Renderer = B;
  })(L);(function (a) {
    var E = a.attr,
        B = a.createElement,
        F = a.css,
        D = a.defined,
        n = a.each,
        h = a.extend,
        u = a.isFirefox,
        r = a.isMS,
        x = a.isWebKit,
        t = a.pInt,
        m = a.SVGRenderer,
        f = a.win,
        g = a.wrap;h(a.SVGElement.prototype, { htmlCss: function htmlCss(a) {
        var d = this.element;if (d = a && "SPAN" === d.tagName && a.width) delete a.width, this.textWidth = d, this.updateTransform();a && "ellipsis" === a.textOverflow && (a.whiteSpace = "nowrap", a.overflow = "hidden");this.styles = h(this.styles, a);F(this.element, a);return this;
      }, htmlGetBBox: function htmlGetBBox() {
        var a = this.element;"text" === a.nodeName && (a.style.position = "absolute");return { x: a.offsetLeft, y: a.offsetTop, width: a.offsetWidth, height: a.offsetHeight };
      }, htmlUpdateTransform: function htmlUpdateTransform() {
        if (this.added) {
          var a = this.renderer,
              d = this.element,
              f = this.translateX || 0,
              b = this.translateY || 0,
              g = this.x || 0,
              v = this.y || 0,
              m = this.textAlign || "left",
              q = { left: 0, center: .5, right: 1 }[m],
              J = this.styles;F(d, { marginLeft: f, marginTop: b });this.shadows && n(this.shadows, function (a) {
            F(a, { marginLeft: f + 1, marginTop: b + 1 });
          });this.inverted && n(d.childNodes, function (c) {
            a.invertChild(c, d);
          });if ("SPAN" === d.tagName) {
            var c = this.rotation,
                w = t(this.textWidth),
                K = J && J.whiteSpace,
                y = [c, m, d.innerHTML, this.textWidth, this.textAlign].join();y !== this.cTT && (J = a.fontMetrics(d.style.fontSize).b, D(c) && this.setSpanRotation(c, q, J), F(d, { width: "",
              whiteSpace: K || "nowrap" }), d.offsetWidth > w && /[ \-]/.test(d.textContent || d.innerText) && F(d, { width: w + "px", display: "block", whiteSpace: K || "normal" }), this.getSpanCorrection(d.offsetWidth, J, q, c, m));F(d, { left: g + (this.xCorr || 0) + "px", top: v + (this.yCorr || 0) + "px" });x && (J = d.offsetHeight);this.cTT = y;
          }
        } else this.alignOnAdd = !0;
      }, setSpanRotation: function setSpanRotation(a, d, p) {
        var b = {},
            e = r ? "-ms-transform" : x ? "-webkit-transform" : u ? "MozTransform" : f.opera ? "-o-transform" : "";b[e] = b.transform = "rotate(" + a + "deg)";b[e + (u ? "Origin" : "-origin")] = b.transformOrigin = 100 * d + "% " + p + "px";F(this.element, b);
      }, getSpanCorrection: function getSpanCorrection(a, d, f) {
        this.xCorr = -a * f;this.yCorr = -d;
      } });h(m.prototype, { html: function html(a, d, f) {
        var b = this.createElement("span"),
            e = b.element,
            p = b.renderer,
            m = p.isSVG,
            q = function q(a, c) {
          n(["opacity", "visibility"], function (b) {
            g(a, b + "Setter", function (a, b, d, l) {
              a.call(this, b, d, l);c[d] = b;
            });
          });
        };b.textSetter = function (a) {
          a !== e.innerHTML && delete this.bBox;e.innerHTML = this.textStr = a;b.htmlUpdateTransform();
        };m && q(b, b.element.style);b.xSetter = b.ySetter = b.alignSetter = b.rotationSetter = function (a, c) {
          "align" === c && (c = "textAlign");b[c] = a;b.htmlUpdateTransform();
        };b.attr({ text: a, x: Math.round(d), y: Math.round(f) }).css({ fontFamily: this.style.fontFamily, fontSize: this.style.fontSize, position: "absolute" });e.style.whiteSpace = "nowrap";b.css = b.htmlCss;m && (b.add = function (a) {
          var c,
              d = p.box.parentNode,
              f = [];if (this.parentGroup = a) {
            if (c = a.div, !c) {
              for (; a;) {
                f.push(a), a = a.parentGroup;
              }n(f.reverse(), function (a) {
                var e,
                    l = E(a.element, "class");l && (l = { className: l });c = a.div = a.div || B("div", l, { position: "absolute",
                  left: (a.translateX || 0) + "px", top: (a.translateY || 0) + "px", display: a.display, opacity: a.opacity, pointerEvents: a.styles && a.styles.pointerEvents }, c || d);e = c.style;h(a, { on: function on() {
                    b.on.apply({ element: f[0].div }, arguments);return a;
                  }, translateXSetter: function translateXSetter(c, k) {
                    e.left = c + "px";a[k] = c;a.doTransform = !0;
                  }, translateYSetter: function translateYSetter(c, k) {
                    e.top = c + "px";a[k] = c;a.doTransform = !0;
                  } });q(a, e);
              });
            }
          } else c = d;c.appendChild(e);b.added = !0;b.alignOnAdd && b.htmlUpdateTransform();return b;
        });return b;
      } });
  })(L);(function (a) {
    var E,
        B,
        F = a.createElement,
        D = a.css,
        n = a.defined,
        h = a.deg2rad,
        u = a.discardElement,
        r = a.doc,
        x = a.each,
        t = a.erase,
        m = a.extend;E = a.extendClass;var f = a.isArray,
        g = a.isNumber,
        e = a.isObject,
        d = a.merge;B = a.noop;var p = a.pick,
        b = a.pInt,
        A = a.SVGElement,
        v = a.SVGRenderer,
        H = a.win;a.svg || (B = { docMode8: r && 8 === r.documentMode, init: function init(a, b) {
        var c = ["\x3c", b, ' filled\x3d"f" stroked\x3d"f"'],
            d = ["position: ", "absolute", ";"],
            q = "div" === b;("shape" === b || q) && d.push("left:0;top:0;width:1px;height:1px;");d.push("visibility: ", q ? "hidden" : "visible");
        c.push(' style\x3d"', d.join(""), '"/\x3e');b && (c = q || "span" === b || "img" === b ? c.join("") : a.prepVML(c), this.element = F(c));this.renderer = a;
      }, add: function add(a) {
        var b = this.renderer,
            c = this.element,
            d = b.box,
            q = a && a.inverted,
            d = a ? a.element || a : d;a && (this.parentGroup = a);q && b.invertChild(c, d);d.appendChild(c);this.added = !0;this.alignOnAdd && !this.deferUpdateTransform && this.updateTransform();if (this.onAdd) this.onAdd();this.className && this.attr("class", this.className);return this;
      }, updateTransform: A.prototype.htmlUpdateTransform,
      setSpanRotation: function setSpanRotation() {
        var a = this.rotation,
            b = Math.cos(a * h),
            c = Math.sin(a * h);D(this.element, { filter: a ? ["progid:DXImageTransform.Microsoft.Matrix(M11\x3d", b, ", M12\x3d", -c, ", M21\x3d", c, ", M22\x3d", b, ", sizingMethod\x3d'auto expand')"].join("") : "none" });
      }, getSpanCorrection: function getSpanCorrection(a, b, c, d, e) {
        var q = d ? Math.cos(d * h) : 1,
            f = d ? Math.sin(d * h) : 0,
            l = p(this.elemHeight, this.element.offsetHeight),
            w;this.xCorr = 0 > q && -a;this.yCorr = 0 > f && -l;w = 0 > q * f;this.xCorr += f * b * (w ? 1 - c : c);this.yCorr -= q * b * (d ? w ? c : 1 - c : 1);e && "left" !== e && (this.xCorr -= a * c * (0 > q ? -1 : 1), d && (this.yCorr -= l * c * (0 > f ? -1 : 1)), D(this.element, { textAlign: e }));
      }, pathToVML: function pathToVML(a) {
        for (var b = a.length, c = []; b--;) {
          g(a[b]) ? c[b] = Math.round(10 * a[b]) - 5 : "Z" === a[b] ? c[b] = "x" : (c[b] = a[b], !a.isArc || "wa" !== a[b] && "at" !== a[b] || (c[b + 5] === c[b + 7] && (c[b + 7] += a[b + 7] > a[b + 5] ? 1 : -1), c[b + 6] === c[b + 8] && (c[b + 8] += a[b + 8] > a[b + 6] ? 1 : -1)));
        }return c.join(" ") || "x";
      }, clip: function clip(a) {
        var b = this,
            c;a ? (c = a.members, t(c, b), c.push(b), b.destroyClip = function () {
          t(c, b);
        }, a = a.getCSS(b)) : (b.destroyClip && b.destroyClip(), a = { clip: b.docMode8 ? "inherit" : "rect(auto)" });return b.css(a);
      }, css: A.prototype.htmlCss, safeRemoveChild: function safeRemoveChild(a) {
        a.parentNode && u(a);
      }, destroy: function destroy() {
        this.destroyClip && this.destroyClip();return A.prototype.destroy.apply(this);
      }, on: function on(a, b) {
        this.element["on" + a] = function () {
          var a = H.event;a.target = a.srcElement;b(a);
        };return this;
      }, cutOffPath: function cutOffPath(a, d) {
        var c;a = a.split(/[ ,]/);c = a.length;if (9 === c || 11 === c) a[c - 4] = a[c - 2] = b(a[c - 2]) - 10 * d;return a.join(" ");
      }, shadow: function shadow(a, d, c) {
        var e = [],
            q,
            f = this.element,
            g = this.renderer,
            l,
            v = f.style,
            k,
            z = f.path,
            m,
            M,
            A,
            J;z && "string" !== typeof z.value && (z = "x");M = z;if (a) {
          A = p(a.width, 3);J = (a.opacity || .15) / A;for (q = 1; 3 >= q; q++) {
            m = 2 * A + 1 - 2 * q, c && (M = this.cutOffPath(z.value, m + .5)), k = ['\x3cshape isShadow\x3d"true" strokeweight\x3d"', m, '" filled\x3d"false" path\x3d"', M, '" coordsize\x3d"10 10" style\x3d"', f.style.cssText, '" /\x3e'], l = F(g.prepVML(k), null, { left: b(v.left) + p(a.offsetX, 1), top: b(v.top) + p(a.offsetY, 1) }), c && (l.cutOff = m + 1), k = ['\x3cstroke color\x3d"', a.color || "#000000", '" opacity\x3d"', J * q, '"/\x3e'], F(g.prepVML(k), null, null, l), d ? d.element.appendChild(l) : f.parentNode.insertBefore(l, f), e.push(l);
          }this.shadows = e;
        }return this;
      }, updateShadows: B, setAttr: function setAttr(a, b) {
        this.docMode8 ? this.element[a] = b : this.element.setAttribute(a, b);
      }, classSetter: function classSetter(a) {
        (this.added ? this.element : this).className = a;
      }, dashstyleSetter: function dashstyleSetter(a, b, c) {
        (c.getElementsByTagName("stroke")[0] || F(this.renderer.prepVML(["\x3cstroke/\x3e"]), null, null, c))[b] = a || "solid";this[b] = a;
      }, dSetter: function dSetter(a, b, c) {
        var d = this.shadows;
        a = a || [];this.d = a.join && a.join(" ");c.path = a = this.pathToVML(a);if (d) for (c = d.length; c--;) {
          d[c].path = d[c].cutOff ? this.cutOffPath(a, d[c].cutOff) : a;
        }this.setAttr(b, a);
      }, fillSetter: function fillSetter(a, b, c) {
        var d = c.nodeName;"SPAN" === d ? c.style.color = a : "IMG" !== d && (c.filled = "none" !== a, this.setAttr("fillcolor", this.renderer.color(a, c, b, this)));
      }, "fill-opacitySetter": function fillOpacitySetter(a, b, c) {
        F(this.renderer.prepVML(["\x3c", b.split("-")[0], ' opacity\x3d"', a, '"/\x3e']), null, null, c);
      }, opacitySetter: B, rotationSetter: function rotationSetter(a, b, c) {
        c = c.style;this[b] = c[b] = a;c.left = -Math.round(Math.sin(a * h) + 1) + "px";c.top = Math.round(Math.cos(a * h)) + "px";
      }, strokeSetter: function strokeSetter(a, b, c) {
        this.setAttr("strokecolor", this.renderer.color(a, c, b, this));
      }, "stroke-widthSetter": function strokeWidthSetter(a, b, c) {
        c.stroked = !!a;this[b] = a;g(a) && (a += "px");this.setAttr("strokeweight", a);
      }, titleSetter: function titleSetter(a, b) {
        this.setAttr(b, a);
      }, visibilitySetter: function visibilitySetter(a, b, c) {
        "inherit" === a && (a = "visible");this.shadows && x(this.shadows, function (c) {
          c.style[b] = a;
        });"DIV" === c.nodeName && (a = "hidden" === a ? "-999em" : 0, this.docMode8 || (c.style[b] = a ? "visible" : "hidden"), b = "top");c.style[b] = a;
      }, xSetter: function xSetter(a, b, c) {
        this[b] = a;"x" === b ? b = "left" : "y" === b && (b = "top");this.updateClipping ? (this[b] = a, this.updateClipping()) : c.style[b] = a;
      }, zIndexSetter: function zIndexSetter(a, b, c) {
        c.style[b] = a;
      } }, B["stroke-opacitySetter"] = B["fill-opacitySetter"], a.VMLElement = B = E(A, B), B.prototype.ySetter = B.prototype.widthSetter = B.prototype.heightSetter = B.prototype.xSetter, B = { Element: B, isIE8: -1 < H.navigator.userAgent.indexOf("MSIE 8.0"), init: function init(a, b, c) {
        var d, e;this.alignedObjects = [];d = this.createElement("div").css({ position: "relative" });e = d.element;a.appendChild(d.element);this.isVML = !0;this.box = e;this.boxWrapper = d;this.gradients = {};this.cache = {};this.cacheKeys = [];this.imgCount = 0;this.setSize(b, c, !1);if (!r.namespaces.hcv) {
          r.namespaces.add("hcv", "urn:schemas-microsoft-com:vml");try {
            r.createStyleSheet().cssText = "hcv\\:fill, hcv\\:path, hcv\\:shape, hcv\\:stroke{ behavior:url(#default#VML); display: inline-block; } ";
          } catch (y) {
            r.styleSheets[0].cssText += "hcv\\:fill, hcv\\:path, hcv\\:shape, hcv\\:stroke{ behavior:url(#default#VML); display: inline-block; } ";
          }
        }
      },
      isHidden: function isHidden() {
        return !this.box.offsetWidth;
      }, clipRect: function clipRect(a, b, c, d) {
        var f = this.createElement(),
            q = e(a);return m(f, { members: [], count: 0, left: (q ? a.x : a) + 1, top: (q ? a.y : b) + 1, width: (q ? a.width : c) - 1, height: (q ? a.height : d) - 1, getCSS: function getCSS(a) {
            var c = a.element,
                b = c.nodeName,
                k = a.inverted,
                z = this.top - ("shape" === b ? c.offsetTop : 0),
                d = this.left,
                c = d + this.width,
                e = z + this.height,
                z = { clip: "rect(" + Math.round(k ? d : z) + "px," + Math.round(k ? e : c) + "px," + Math.round(k ? c : e) + "px," + Math.round(k ? z : d) + "px)" };!k && a.docMode8 && "DIV" === b && m(z, { width: c + "px", height: e + "px" });return z;
          }, updateClipping: function updateClipping() {
            x(f.members, function (a) {
              a.element && a.css(f.getCSS(a));
            });
          } });
      }, color: function color(b, d, c, e) {
        var f = this,
            y,
            q = /^rgba/,
            l,
            p,
            k = "none";b && b.linearGradient ? p = "gradient" : b && b.radialGradient && (p = "pattern");if (p) {
          var z,
              g,
              v = b.linearGradient || b.radialGradient,
              w,
              m,
              A,
              C,
              H,
              h = "";b = b.stops;var J,
              r = [],
              n = function n() {
            l = ['\x3cfill colors\x3d"' + r.join(",") + '" opacity\x3d"', A, '" o:opacity2\x3d"', m, '" type\x3d"', p, '" ', h, 'focus\x3d"100%" method\x3d"any" /\x3e'];
            F(f.prepVML(l), null, null, d);
          };w = b[0];J = b[b.length - 1];0 < w[0] && b.unshift([0, w[1]]);1 > J[0] && b.push([1, J[1]]);x(b, function (k, c) {
            q.test(k[1]) ? (y = a.color(k[1]), z = y.get("rgb"), g = y.get("a")) : (z = k[1], g = 1);r.push(100 * k[0] + "% " + z);c ? (A = g, C = z) : (m = g, H = z);
          });if ("fill" === c) {
            if ("gradient" === p) c = v.x1 || v[0] || 0, b = v.y1 || v[1] || 0, w = v.x2 || v[2] || 0, v = v.y2 || v[3] || 0, h = 'angle\x3d"' + (90 - 180 * Math.atan((v - b) / (w - c)) / Math.PI) + '"', n();else {
              var k = v.r,
                  t = 2 * k,
                  u = 2 * k,
                  B = v.cx,
                  E = v.cy,
                  D = d.radialReference,
                  S,
                  k = function k() {
                D && (S = e.getBBox(), B += (D[0] - S.x) / S.width - .5, E += (D[1] - S.y) / S.height - .5, t *= D[2] / S.width, u *= D[2] / S.height);h = 'src\x3d"' + a.getOptions().global.VMLRadialGradientURL + '" size\x3d"' + t + "," + u + '" origin\x3d"0.5,0.5" position\x3d"' + B + "," + E + '" color2\x3d"' + H + '" ';n();
              };e.added ? k() : e.onAdd = k;k = C;
            }
          } else k = z;
        } else q.test(b) && "IMG" !== d.tagName ? (y = a.color(b), e[c + "-opacitySetter"](y.get("a"), c, d), k = y.get("rgb")) : (k = d.getElementsByTagName(c), k.length && (k[0].opacity = 1, k[0].type = "solid"), k = b);return k;
      }, prepVML: function prepVML(a) {
        var b = this.isIE8;a = a.join("");
        b ? (a = a.replace("/\x3e", ' xmlns\x3d"urn:schemas-microsoft-com:vml" /\x3e'), a = -1 === a.indexOf('style\x3d"') ? a.replace("/\x3e", ' style\x3d"display:inline-block;behavior:url(#default#VML);" /\x3e') : a.replace('style\x3d"', 'style\x3d"display:inline-block;behavior:url(#default#VML);')) : a = a.replace("\x3c", "\x3chcv:");return a;
      }, text: v.prototype.html, path: function path(a) {
        var b = { coordsize: "10 10" };f(a) ? b.d = a : e(a) && m(b, a);return this.createElement("shape").attr(b);
      }, circle: function circle(a, b, c) {
        var d = this.symbol("circle");
        e(a) && (c = a.r, b = a.y, a = a.x);d.isCircle = !0;d.r = c;return d.attr({ x: a, y: b });
      }, g: function g(a) {
        var b;a && (b = { className: "highcharts-" + a, "class": "highcharts-" + a });return this.createElement("div").attr(b);
      }, image: function image(a, b, c, d, e) {
        var f = this.createElement("img").attr({ src: a });1 < arguments.length && f.attr({ x: b, y: c, width: d, height: e });return f;
      }, createElement: function createElement(a) {
        return "rect" === a ? this.symbol(a) : v.prototype.createElement.call(this, a);
      }, invertChild: function invertChild(a, d) {
        var c = this;d = d.style;var e = "IMG" === a.tagName && a.style;
        D(a, { flip: "x", left: b(d.width) - (e ? b(e.top) : 1), top: b(d.height) - (e ? b(e.left) : 1), rotation: -90 });x(a.childNodes, function (b) {
          c.invertChild(b, a);
        });
      }, symbols: { arc: function arc(a, b, c, d, e) {
          var f = e.start,
              p = e.end,
              l = e.r || c || d;c = e.innerR;d = Math.cos(f);var g = Math.sin(f),
              k = Math.cos(p),
              z = Math.sin(p);if (0 === p - f) return ["x"];f = ["wa", a - l, b - l, a + l, b + l, a + l * d, b + l * g, a + l * k, b + l * z];e.open && !c && f.push("e", "M", a, b);f.push("at", a - c, b - c, a + c, b + c, a + c * k, b + c * z, a + c * d, b + c * g, "x", "e");f.isArc = !0;return f;
        }, circle: function circle(a, b, c, d, e) {
          e && n(e.r) && (c = d = 2 * e.r);e && e.isCircle && (a -= c / 2, b -= d / 2);return ["wa", a, b, a + c, b + d, a + c, b + d / 2, a + c, b + d / 2, "e"];
        }, rect: function rect(a, b, c, d, e) {
          return v.prototype.symbols[n(e) && e.r ? "callout" : "square"].call(0, a, b, c, d, e);
        } } }, a.VMLRenderer = E = function E() {
      this.init.apply(this, arguments);
    }, E.prototype = d(v.prototype, B), a.Renderer = E);v.prototype.measureSpanWidth = function (a, b) {
      var c = r.createElement("span");a = r.createTextNode(a);c.appendChild(a);D(c, b);this.box.appendChild(c);b = c.offsetWidth;u(c);return b;
    };
  })(L);(function (a) {
    function E() {
      var h = a.defaultOptions.global,
          n = r.moment;if (h.timezone) {
        if (n) return function (a) {
          return -n.tz(a, h.timezone).utcOffset();
        };a.error(25);
      }return h.useUTC && h.getTimezoneOffset;
    }function B() {
      var h = a.defaultOptions.global,
          t,
          m = h.useUTC,
          f = m ? "getUTC" : "get",
          g = m ? "setUTC" : "set";a.Date = t = h.Date || r.Date;t.hcTimezoneOffset = m && h.timezoneOffset;t.hcGetTimezoneOffset = E();t.hcMakeTime = function (a, d, f, b, g, v) {
        var e;m ? (e = t.UTC.apply(0, arguments), e += n(e)) : e = new t(a, d, u(f, 1), u(b, 0), u(g, 0), u(v, 0)).getTime();return e;
      };D("Minutes Hours Day Date Month FullYear".split(" "), function (a) {
        t["hcGet" + a] = f + a;
      });D("Milliseconds Seconds Minutes Hours Date Month FullYear".split(" "), function (a) {
        t["hcSet" + a] = g + a;
      });
    }var F = a.color,
        D = a.each,
        n = a.getTZOffset,
        h = a.merge,
        u = a.pick,
        r = a.win;a.defaultOptions = { colors: "#7cb5ec #434348 #90ed7d #f7a35c #8085e9 #f15c80 #e4d354 #2b908f #f45b5b #91e8e1".split(" "), symbols: ["circle", "diamond", "square", "triangle", "triangle-down"], lang: { loading: "Loading...", months: "January February March April May June July August September October November December".split(" "),
        shortMonths: "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "), weekdays: "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "), decimalPoint: ".", numericSymbols: "kMGTPE".split(""), resetZoom: "Reset zoom", resetZoomTitle: "Reset zoom level 1:1", thousandsSep: " " }, global: { useUTC: !0, VMLRadialGradientURL: "http://code.highcharts.com/5.0.12/gfx/vml-radial-gradient.png" }, chart: { borderRadius: 0, defaultSeriesType: "line", ignoreHiddenSeries: !0, spacing: [10, 10, 15, 10], resetZoomButton: { theme: { zIndex: 20 },
          position: { align: "right", x: -10, y: 10 } }, width: null, height: null, borderColor: "#335cad", backgroundColor: "#ffffff", plotBorderColor: "#cccccc" }, title: { text: "Chart title", align: "center", margin: 15, widthAdjust: -44 }, subtitle: { text: "", align: "center", widthAdjust: -44 }, plotOptions: {}, labels: { style: { position: "absolute", color: "#333333" } }, legend: { enabled: !0, align: "center", layout: "horizontal", labelFormatter: function labelFormatter() {
          return this.name;
        }, borderColor: "#999999", borderRadius: 0, navigation: { activeColor: "#003399", inactiveColor: "#cccccc" },
        itemStyle: { color: "#333333", fontSize: "12px", fontWeight: "bold", textOverflow: "ellipsis" }, itemHoverStyle: { color: "#000000" }, itemHiddenStyle: { color: "#cccccc" }, shadow: !1, itemCheckboxStyle: { position: "absolute", width: "13px", height: "13px" }, squareSymbol: !0, symbolPadding: 5, verticalAlign: "bottom", x: 0, y: 0, title: { style: { fontWeight: "bold" } } }, loading: { labelStyle: { fontWeight: "bold", position: "relative", top: "45%" }, style: { position: "absolute", backgroundColor: "#ffffff", opacity: .5, textAlign: "center" } }, tooltip: { enabled: !0,
        animation: a.svg, borderRadius: 3, dateTimeLabelFormats: { millisecond: "%A, %b %e, %H:%M:%S.%L", second: "%A, %b %e, %H:%M:%S", minute: "%A, %b %e, %H:%M", hour: "%A, %b %e, %H:%M", day: "%A, %b %e, %Y", week: "Week from %A, %b %e, %Y", month: "%B %Y", year: "%Y" }, footerFormat: "", padding: 8, snap: a.isTouchDevice ? 25 : 10, backgroundColor: F("#f7f7f7").setOpacity(.85).get(), borderWidth: 1, headerFormat: '\x3cspan style\x3d"font-size: 10px"\x3e{point.key}\x3c/span\x3e\x3cbr/\x3e', pointFormat: "<span style=\"color:{point.color}\">\u25CF</span> {series.name}: <b>{point.y}</b><br/>",
        shadow: !0, style: { color: "#333333", cursor: "default", fontSize: "12px", pointerEvents: "none", whiteSpace: "nowrap" } }, credits: { enabled: !0, href: "http://www.highcharts.com", position: { align: "right", x: -10, verticalAlign: "bottom", y: -5 }, style: { cursor: "pointer", color: "#999999", fontSize: "9px" }, text: "Highcharts.com" } };a.setOptions = function (r) {
      a.defaultOptions = h(!0, a.defaultOptions, r);B();return a.defaultOptions;
    };a.getOptions = function () {
      return a.defaultOptions;
    };a.defaultPlotOptions = a.defaultOptions.plotOptions;B();
  })(L);
  (function (a) {
    var E = a.correctFloat,
        B = a.defined,
        F = a.destroyObjectProperties,
        D = a.isNumber,
        n = a.merge,
        h = a.pick,
        u = a.deg2rad;a.Tick = function (a, h, n, m) {
      this.axis = a;this.pos = h;this.type = n || "";this.isNewLabel = this.isNew = !0;n || m || this.addLabel();
    };a.Tick.prototype = { addLabel: function addLabel() {
        var a = this.axis,
            x = a.options,
            t = a.chart,
            m = a.categories,
            f = a.names,
            g = this.pos,
            e = x.labels,
            d = a.tickPositions,
            p = g === d[0],
            b = g === d[d.length - 1],
            f = m ? h(m[g], f[g], g) : g,
            m = this.label,
            d = d.info,
            A;a.isDatetimeAxis && d && (A = x.dateTimeLabelFormats[d.higherRanks[g] || d.unitName]);this.isFirst = p;this.isLast = b;x = a.labelFormatter.call({ axis: a, chart: t, isFirst: p, isLast: b, dateTimeLabelFormat: A, value: a.isLog ? E(a.lin2log(f)) : f });B(m) ? m && m.attr({ text: x }) : (this.labelLength = (this.label = m = B(x) && e.enabled ? t.renderer.text(x, 0, 0, e.useHTML).css(n(e.style)).add(a.labelGroup) : null) && m.getBBox().width, this.rotation = 0);
      }, getLabelSize: function getLabelSize() {
        return this.label ? this.label.getBBox()[this.axis.horiz ? "height" : "width"] : 0;
      }, handleOverflow: function handleOverflow(a) {
        var r = this.axis,
            n = a.x,
            m = r.chart.chartWidth,
            f = r.chart.spacing,
            g = h(r.labelLeft, Math.min(r.pos, f[3])),
            f = h(r.labelRight, Math.max(r.pos + r.len, m - f[1])),
            e = this.label,
            d = this.rotation,
            p = { left: 0, center: .5, right: 1 }[r.labelAlign],
            b = e.getBBox().width,
            A = r.getSlotWidth(),
            v = A,
            H = 1,
            q,
            J = {};if (d) 0 > d && n - p * b < g ? q = Math.round(n / Math.cos(d * u) - g) : 0 < d && n + p * b > f && (q = Math.round((m - n) / Math.cos(d * u)));else if (m = n + (1 - p) * b, n - p * b < g ? v = a.x + v * (1 - p) - g : m > f && (v = f - a.x + v * p, H = -1), v = Math.min(A, v), v < A && "center" === r.labelAlign && (a.x += H * (A - v - p * (A - Math.min(b, v)))), b > v || r.autoRotation && (e.styles || {}).width) q = v;q && (J.width = q, (r.options.labels.style || {}).textOverflow || (J.textOverflow = "ellipsis"), e.css(J));
      }, getPosition: function getPosition(a, h, n, m) {
        var f = this.axis,
            g = f.chart,
            e = m && g.oldChartHeight || g.chartHeight;return { x: a ? f.translate(h + n, null, null, m) + f.transB : f.left + f.offset + (f.opposite ? (m && g.oldChartWidth || g.chartWidth) - f.right - f.left : 0), y: a ? e - f.bottom + f.offset - (f.opposite ? f.height : 0) : e - f.translate(h + n, null, null, m) - f.transB };
      }, getLabelPosition: function getLabelPosition(a, h, n, m, f, g, e, d) {
        var p = this.axis,
            b = p.transA,
            A = p.reversed,
            v = p.staggerLines,
            H = p.tickRotCorr || { x: 0, y: 0 },
            q = f.y;B(q) || (q = 0 === p.side ? n.rotation ? -8 : -n.getBBox().height : 2 === p.side ? H.y + 8 : Math.cos(n.rotation * u) * (H.y - n.getBBox(!1, 0).height / 2));a = a + f.x + H.x - (g && m ? g * b * (A ? -1 : 1) : 0);h = h + q - (g && !m ? g * b * (A ? 1 : -1) : 0);v && (n = e / (d || 1) % v, p.opposite && (n = v - n - 1), h += p.labelOffset / v * n);return { x: a, y: Math.round(h) };
      }, getMarkPath: function getMarkPath(a, h, n, m, f, g) {
        return g.crispLine(["M", a, h, "L", a + (f ? 0 : -n), h + (f ? n : 0)], m);
      }, renderGridLine: function renderGridLine(a, h, n) {
        var m = this.axis,
            f = m.options,
            g = this.gridLine,
            e = {},
            d = this.pos,
            p = this.type,
            b = m.tickmarkOffset,
            A = m.chart.renderer,
            v = p ? p + "Grid" : "grid",
            H = f[v + "LineWidth"],
            q = f[v + "LineColor"],
            f = f[v + "LineDashStyle"];g || (e.stroke = q, e["stroke-width"] = H, f && (e.dashstyle = f), p || (e.zIndex = 1), a && (e.opacity = 0), this.gridLine = g = A.path().attr(e).addClass("highcharts-" + (p ? p + "-" : "") + "grid-line").add(m.gridGroup));if (!a && g && (a = m.getPlotLinePath(d + b, g.strokeWidth() * n, a, !0))) g[this.isNew ? "attr" : "animate"]({ d: a, opacity: h });
      }, renderMark: function renderMark(a, n, t) {
        var m = this.axis,
            f = m.options,
            g = m.chart.renderer,
            e = this.type,
            d = e ? e + "Tick" : "tick",
            p = m.tickSize(d),
            b = this.mark,
            A = !b,
            v = a.x;a = a.y;var H = h(f[d + "Width"], !e && m.isXAxis ? 1 : 0),
            f = f[d + "Color"];p && (m.opposite && (p[0] = -p[0]), A && (this.mark = b = g.path().addClass("highcharts-" + (e ? e + "-" : "") + "tick").add(m.axisGroup), b.attr({ stroke: f, "stroke-width": H })), b[A ? "attr" : "animate"]({ d: this.getMarkPath(v, a, p[0], b.strokeWidth() * t, m.horiz, g), opacity: n }));
      }, renderLabel: function renderLabel(a, n, t, m) {
        var f = this.axis,
            g = f.horiz,
            e = f.options,
            d = this.label,
            p = e.labels,
            b = p.step,
            A = f.tickmarkOffset,
            v = !0,
            H = a.x;a = a.y;d && D(H) && (d.xy = a = this.getLabelPosition(H, a, d, g, p, A, m, b), this.isFirst && !this.isLast && !h(e.showFirstLabel, 1) || this.isLast && !this.isFirst && !h(e.showLastLabel, 1) ? v = !1 : !g || f.isRadial || p.step || p.rotation || n || 0 === t || this.handleOverflow(a), b && m % b && (v = !1), v && D(a.y) ? (a.opacity = t, d[this.isNewLabel ? "attr" : "animate"](a), this.isNewLabel = !1) : (d.attr("y", -9999), this.isNewLabel = !0), this.isNew = !1);
      }, render: function render(a, n, t) {
        var m = this.axis,
            f = m.horiz,
            g = this.getPosition(f, this.pos, m.tickmarkOffset, n),
            e = g.x,
            d = g.y,
            m = f && e === m.pos + m.len || !f && d === m.pos ? -1 : 1;t = h(t, 1);this.isActive = !0;this.renderGridLine(n, t, m);this.renderMark(g, t, m);this.renderLabel(g, n, t, a);
      }, destroy: function destroy() {
        F(this, this.axis);
      } };
  })(L);var T = function (a) {
    var E = a.addEvent,
        B = a.animObject,
        F = a.arrayMax,
        D = a.arrayMin,
        n = a.color,
        h = a.correctFloat,
        u = a.defaultOptions,
        r = a.defined,
        x = a.deg2rad,
        t = a.destroyObjectProperties,
        m = a.each,
        f = a.extend,
        g = a.fireEvent,
        e = a.format,
        d = a.getMagnitude,
        p = a.grep,
        b = a.inArray,
        A = a.isArray,
        v = a.isNumber,
        H = a.isString,
        q = a.merge,
        J = a.normalizeTickInterval,
        c = a.objectEach,
        w = a.pick,
        K = a.removeEvent,
        y = a.splat,
        G = a.syncTimeout,
        l = a.Tick,
        I = function I() {
      this.init.apply(this, arguments);
    };a.extend(I.prototype, { defaultOptions: { dateTimeLabelFormats: { millisecond: "%H:%M:%S.%L", second: "%H:%M:%S", minute: "%H:%M", hour: "%H:%M", day: "%e. %b", week: "%e. %b", month: "%b '%y", year: "%Y" }, endOnTick: !1, labels: { enabled: !0, style: { color: "#666666", cursor: "default", fontSize: "11px" }, x: 0 }, minPadding: .01, maxPadding: .01, minorTickLength: 2, minorTickPosition: "outside", startOfWeek: 1,
        startOnTick: !1, tickLength: 10, tickmarkPlacement: "between", tickPixelInterval: 100, tickPosition: "outside", title: { align: "middle", style: { color: "#666666" } }, type: "linear", minorGridLineColor: "#f2f2f2", minorGridLineWidth: 1, minorTickColor: "#999999", lineColor: "#ccd6eb", lineWidth: 1, gridLineColor: "#e6e6e6", tickColor: "#ccd6eb" }, defaultYAxisOptions: { endOnTick: !0, tickPixelInterval: 72, showLastLabel: !0, labels: { x: -8 }, maxPadding: .05, minPadding: .05, startOnTick: !0, title: { rotation: 270, text: "Values" }, stackLabels: { enabled: !1,
          formatter: function formatter() {
            return a.numberFormat(this.total, -1);
          }, style: { fontSize: "11px", fontWeight: "bold", color: "#000000", textOutline: "1px contrast" } }, gridLineWidth: 1, lineWidth: 0 }, defaultLeftAxisOptions: { labels: { x: -15 }, title: { rotation: 270 } }, defaultRightAxisOptions: { labels: { x: 15 }, title: { rotation: 90 } }, defaultBottomAxisOptions: { labels: { autoRotation: [-45], x: 0 }, title: { rotation: 0 } }, defaultTopAxisOptions: { labels: { autoRotation: [-45], x: 0 }, title: { rotation: 0 } }, init: function init(a, z) {
        var k = z.isX,
            l = this;l.chart = a;l.horiz = a.inverted && !l.isZAxis ? !k : k;l.isXAxis = k;l.coll = l.coll || (k ? "xAxis" : "yAxis");l.opposite = z.opposite;l.side = z.side || (l.horiz ? l.opposite ? 0 : 2 : l.opposite ? 1 : 3);l.setOptions(z);var d = this.options,
            e = d.type;l.labelFormatter = d.labels.formatter || l.defaultLabelFormatter;l.userOptions = z;l.minPixelPadding = 0;l.reversed = d.reversed;l.visible = !1 !== d.visible;l.zoomEnabled = !1 !== d.zoomEnabled;l.hasNames = "category" === e || !0 === d.categories;l.categories = d.categories || l.hasNames;l.names = l.names || [];l.plotLinesAndBandsGroups = {};l.isLog = "logarithmic" === e;l.isDatetimeAxis = "datetime" === e;l.positiveValuesOnly = l.isLog && !l.allowNegativeLog;l.isLinked = r(d.linkedTo);l.ticks = {};l.labelEdge = [];l.minorTicks = {};l.plotLinesAndBands = [];l.alternateBands = {};l.len = 0;l.minRange = l.userMinRange = d.minRange || d.maxZoom;l.range = d.range;l.offset = d.offset || 0;l.stacks = {};l.oldStacks = {};l.stacksTouched = 0;l.max = null;l.min = null;l.crosshair = w(d.crosshair, y(a.options.tooltip.crosshairs)[k ? 0 : 1], !1);z = l.options.events;-1 === b(l, a.axes) && (k ? a.axes.splice(a.xAxis.length, 0, l) : a.axes.push(l), a[l.coll].push(l));l.series = l.series || [];a.inverted && !l.isZAxis && k && void 0 === l.reversed && (l.reversed = !0);c(z, function (a, k) {
          E(l, k, a);
        });l.lin2log = d.linearToLogConverter || l.lin2log;l.isLog && (l.val2lin = l.log2lin, l.lin2val = l.lin2log);
      }, setOptions: function setOptions(a) {
        this.options = q(this.defaultOptions, "yAxis" === this.coll && this.defaultYAxisOptions, [this.defaultTopAxisOptions, this.defaultRightAxisOptions, this.defaultBottomAxisOptions, this.defaultLeftAxisOptions][this.side], q(u[this.coll], a));
      },
      defaultLabelFormatter: function defaultLabelFormatter() {
        var k = this.axis,
            c = this.value,
            b = k.categories,
            l = this.dateTimeLabelFormat,
            d = u.lang,
            f = d.numericSymbols,
            d = d.numericSymbolMagnitude || 1E3,
            y = f && f.length,
            p,
            g = k.options.labels.format,
            k = k.isLog ? Math.abs(c) : k.tickInterval;if (g) p = e(g, this);else if (b) p = c;else if (l) p = a.dateFormat(l, c);else if (y && 1E3 <= k) for (; y-- && void 0 === p;) {
          b = Math.pow(d, y + 1), k >= b && 0 === 10 * c % b && null !== f[y] && 0 !== c && (p = a.numberFormat(c / b, -1) + f[y]);
        }void 0 === p && (p = 1E4 <= Math.abs(c) ? a.numberFormat(c, -1) : a.numberFormat(c, -1, void 0, ""));return p;
      }, getSeriesExtremes: function getSeriesExtremes() {
        var a = this,
            c = a.chart;a.hasVisibleSeries = !1;a.dataMin = a.dataMax = a.threshold = null;a.softThreshold = !a.isXAxis;a.buildStacks && a.buildStacks();m(a.series, function (k) {
          if (k.visible || !c.options.chart.ignoreHiddenSeries) {
            var b = k.options,
                l = b.threshold,
                z;a.hasVisibleSeries = !0;a.positiveValuesOnly && 0 >= l && (l = null);if (a.isXAxis) b = k.xData, b.length && (k = D(b), v(k) || k instanceof Date || (b = p(b, function (a) {
              return v(a);
            }), k = D(b)), a.dataMin = Math.min(w(a.dataMin, b[0]), k), a.dataMax = Math.max(w(a.dataMax, b[0]), F(b)));else if (k.getExtremes(), z = k.dataMax, k = k.dataMin, r(k) && r(z) && (a.dataMin = Math.min(w(a.dataMin, k), k), a.dataMax = Math.max(w(a.dataMax, z), z)), r(l) && (a.threshold = l), !b.softThreshold || a.positiveValuesOnly) a.softThreshold = !1;
          }
        });
      }, translate: function translate(a, c, b, l, d, e) {
        var k = this.linkedParent || this,
            z = 1,
            f = 0,
            y = l ? k.oldTransA : k.transA;l = l ? k.oldMin : k.min;var p = k.minPixelPadding;d = (k.isOrdinal || k.isBroken || k.isLog && d) && k.lin2val;y || (y = k.transA);b && (z *= -1, f = k.len);k.reversed && (z *= -1, f -= z * (k.sector || k.len));c ? (a = (a * z + f - p) / y + l, d && (a = k.lin2val(a))) : (d && (a = k.val2lin(a)), a = z * (a - l) * y + f + z * p + (v(e) ? y * e : 0));return a;
      }, toPixels: function toPixels(a, c) {
        return this.translate(a, !1, !this.horiz, null, !0) + (c ? 0 : this.pos);
      }, toValue: function toValue(a, c) {
        return this.translate(a - (c ? 0 : this.pos), !0, !this.horiz, null, !0);
      }, getPlotLinePath: function getPlotLinePath(a, c, b, l, d) {
        var k = this.chart,
            z = this.left,
            e = this.top,
            f,
            y,
            p = b && k.oldChartHeight || k.chartHeight,
            g = b && k.oldChartWidth || k.chartWidth,
            q;f = this.transB;var G = function G(a, k, c) {
          if (a < k || a > c) l ? a = Math.min(Math.max(k, a), c) : q = !0;return a;
        };d = w(d, this.translate(a, null, null, b));a = b = Math.round(d + f);f = y = Math.round(p - d - f);v(d) ? this.horiz ? (f = e, y = p - this.bottom, a = b = G(a, z, z + this.width)) : (a = z, b = g - this.right, f = y = G(f, e, e + this.height)) : q = !0;return q && !l ? null : k.renderer.crispLine(["M", a, f, "L", b, y], c || 1);
      }, getLinearTickPositions: function getLinearTickPositions(a, c, b) {
        var k,
            l = h(Math.floor(c / a) * a);b = h(Math.ceil(b / a) * a);var z = [];if (this.single) return [c];for (c = l; c <= b;) {
          z.push(c);c = h(c + a);if (c === k) break;k = c;
        }return z;
      }, getMinorTickPositions: function getMinorTickPositions() {
        var a = this,
            c = a.options,
            b = a.tickPositions,
            l = a.minorTickInterval,
            d = [],
            e = a.pointRangePadding || 0,
            f = a.min - e,
            e = a.max + e,
            y = e - f;if (y && y / l < a.len / 3) if (a.isLog) m(this.paddedTicks, function (k, c, b) {
          c && d.push.apply(d, a.getLogTickPositions(l, b[c - 1], b[c], !0));
        });else if (a.isDatetimeAxis && "auto" === c.minorTickInterval) d = d.concat(a.getTimeTicks(a.normalizeTimeTickInterval(l), f, e, c.startOfWeek));else for (c = f + (b[0] - f) % l; c <= e && c !== d[0]; c += l) {
          d.push(c);
        }0 !== d.length && a.trimTicks(d);return d;
      }, adjustForMinRange: function adjustForMinRange() {
        var a = this.options,
            c = this.min,
            b = this.max,
            l,
            d,
            e,
            f,
            y,
            p,
            g,
            v;this.isXAxis && void 0 === this.minRange && !this.isLog && (r(a.min) || r(a.max) ? this.minRange = null : (m(this.series, function (a) {
          p = a.xData;for (f = g = a.xIncrement ? 1 : p.length - 1; 0 < f; f--) {
            if (y = p[f] - p[f - 1], void 0 === e || y < e) e = y;
          }
        }), this.minRange = Math.min(5 * e, this.dataMax - this.dataMin)));b - c < this.minRange && (d = this.dataMax - this.dataMin >= this.minRange, v = this.minRange, l = (v - b + c) / 2, l = [c - l, w(a.min, c - l)], d && (l[2] = this.isLog ? this.log2lin(this.dataMin) : this.dataMin), c = F(l), b = [c + v, w(a.max, c + v)], d && (b[2] = this.isLog ? this.log2lin(this.dataMax) : this.dataMax), b = D(b), b - c < v && (l[0] = b - v, l[1] = w(a.min, b - v), c = F(l)));this.min = c;this.max = b;
      }, getClosest: function getClosest() {
        var a;this.categories ? a = 1 : m(this.series, function (k) {
          var c = k.closestPointRange,
              b = k.visible || !k.chart.options.chart.ignoreHiddenSeries;!k.noSharedTooltip && r(c) && b && (a = r(a) ? Math.min(a, c) : c);
        });return a;
      }, nameToX: function nameToX(a) {
        var k = A(this.categories),
            c = k ? this.categories : this.names,
            l = a.options.x,
            d;a.series.requireSorting = !1;r(l) || (l = !1 === this.options.uniqueNames ? a.series.autoIncrement() : b(a.name, c));-1 === l ? k || (d = c.length) : d = l;void 0 !== d && (this.names[d] = a.name);return d;
      }, updateNames: function updateNames() {
        var a = this;0 < this.names.length && (this.names.length = 0, this.minRange = this.userMinRange, m(this.series || [], function (k) {
          k.xIncrement = null;if (!k.points || k.isDirtyData) k.processData(), k.generatePoints();m(k.points, function (c, b) {
            var l;c.options && (l = a.nameToX(c), void 0 !== l && l !== c.x && (c.x = l, k.xData[b] = l));
          });
        }));
      }, setAxisTranslation: function setAxisTranslation(a) {
        var k = this,
            c = k.max - k.min,
            b = k.axisPointRange || 0,
            l,
            d = 0,
            e = 0,
            f = k.linkedParent,
            y = !!k.categories,
            p = k.transA,
            g = k.isXAxis;if (g || y || b) l = k.getClosest(), f ? (d = f.minPointOffset, e = f.pointRangePadding) : m(k.series, function (a) {
          var c = y ? 1 : g ? w(a.options.pointRange, l, 0) : k.axisPointRange || 0;a = a.options.pointPlacement;b = Math.max(b, c);k.single || (d = Math.max(d, H(a) ? 0 : c / 2), e = Math.max(e, "on" === a ? 0 : c));
        }), f = k.ordinalSlope && l ? k.ordinalSlope / l : 1, k.minPointOffset = d *= f, k.pointRangePadding = e *= f, k.pointRange = Math.min(b, c), g && (k.closestPointRange = l);a && (k.oldTransA = p);k.translationSlope = k.transA = p = k.options.staticScale || k.len / (c + e || 1);k.transB = k.horiz ? k.left : k.bottom;k.minPixelPadding = p * d;
      }, minFromRange: function minFromRange() {
        return this.max - this.range;
      }, setTickInterval: function setTickInterval(k) {
        var c = this,
            b = c.chart,
            l = c.options,
            e = c.isLog,
            f = c.log2lin,
            y = c.isDatetimeAxis,
            p = c.isXAxis,
            q = c.isLinked,
            G = l.maxPadding,
            I = l.minPadding,
            A = l.tickInterval,
            H = l.tickPixelInterval,
            n = c.categories,
            K = c.threshold,
            t = c.softThreshold,
            u,
            x,
            B,
            D;y || n || q || this.getTickAmount();B = w(c.userMin, l.min);D = w(c.userMax, l.max);q ? (c.linkedParent = b[c.coll][l.linkedTo], b = c.linkedParent.getExtremes(), c.min = w(b.min, b.dataMin), c.max = w(b.max, b.dataMax), l.type !== c.linkedParent.options.type && a.error(11, 1)) : (!t && r(K) && (c.dataMin >= K ? (u = K, I = 0) : c.dataMax <= K && (x = K, G = 0)), c.min = w(B, u, c.dataMin), c.max = w(D, x, c.dataMax));e && (c.positiveValuesOnly && !k && 0 >= Math.min(c.min, w(c.dataMin, c.min)) && a.error(10, 1), c.min = h(f(c.min), 15), c.max = h(f(c.max), 15));c.range && r(c.max) && (c.userMin = c.min = B = Math.max(c.min, c.minFromRange()), c.userMax = D = c.max, c.range = null);g(c, "foundExtremes");c.beforePadding && c.beforePadding();c.adjustForMinRange();!(n || c.axisPointRange || c.usePercentage || q) && r(c.min) && r(c.max) && (f = c.max - c.min) && (!r(B) && I && (c.min -= f * I), !r(D) && G && (c.max += f * G));v(l.softMin) && (c.min = Math.min(c.min, l.softMin));v(l.softMax) && (c.max = Math.max(c.max, l.softMax));v(l.floor) && (c.min = Math.max(c.min, l.floor));v(l.ceiling) && (c.max = Math.min(c.max, l.ceiling));t && r(c.dataMin) && (K = K || 0, !r(B) && c.min < K && c.dataMin >= K ? c.min = K : !r(D) && c.max > K && c.dataMax <= K && (c.max = K));c.tickInterval = c.min === c.max || void 0 === c.min || void 0 === c.max ? 1 : q && !A && H === c.linkedParent.options.tickPixelInterval ? A = c.linkedParent.tickInterval : w(A, this.tickAmount ? (c.max - c.min) / Math.max(this.tickAmount - 1, 1) : void 0, n ? 1 : (c.max - c.min) * H / Math.max(c.len, H));p && !k && m(c.series, function (a) {
          a.processData(c.min !== c.oldMin || c.max !== c.oldMax);
        });c.setAxisTranslation(!0);c.beforeSetTickPositions && c.beforeSetTickPositions();c.postProcessTickInterval && (c.tickInterval = c.postProcessTickInterval(c.tickInterval));c.pointRange && !A && (c.tickInterval = Math.max(c.pointRange, c.tickInterval));k = w(l.minTickInterval, c.isDatetimeAxis && c.closestPointRange);!A && c.tickInterval < k && (c.tickInterval = k);y || e || A || (c.tickInterval = J(c.tickInterval, null, d(c.tickInterval), w(l.allowDecimals, !(.5 < c.tickInterval && 5 > c.tickInterval && 1E3 < c.max && 9999 > c.max)), !!this.tickAmount));this.tickAmount || (c.tickInterval = c.unsquish());this.setTickPositions();
      }, setTickPositions: function setTickPositions() {
        var a = this.options,
            c,
            b = a.tickPositions,
            l = a.tickPositioner,
            d = a.startOnTick,
            e = a.endOnTick;this.tickmarkOffset = this.categories && "between" === a.tickmarkPlacement && 1 === this.tickInterval ? .5 : 0;this.minorTickInterval = "auto" === a.minorTickInterval && this.tickInterval ? this.tickInterval / 5 : a.minorTickInterval;this.single = this.min === this.max && r(this.min) && !this.tickAmount && (parseInt(this.min, 10) === this.min || !1 !== a.allowDecimals);this.tickPositions = c = b && b.slice();!c && (c = this.isDatetimeAxis ? this.getTimeTicks(this.normalizeTimeTickInterval(this.tickInterval, a.units), this.min, this.max, a.startOfWeek, this.ordinalPositions, this.closestPointRange, !0) : this.isLog ? this.getLogTickPositions(this.tickInterval, this.min, this.max) : this.getLinearTickPositions(this.tickInterval, this.min, this.max), c.length > this.len && (c = [c[0], c.pop()]), this.tickPositions = c, l && (l = l.apply(this, [this.min, this.max]))) && (this.tickPositions = c = l);this.paddedTicks = c.slice(0);this.trimTicks(c, d, e);this.isLinked || (this.single && (this.min -= .5, this.max += .5), b || l || this.adjustTickAmount());
      }, trimTicks: function trimTicks(a, c, b) {
        var k = a[0],
            l = a[a.length - 1],
            d = this.minPointOffset || 0;if (!this.isLinked) {
          if (c && -Infinity !== k) this.min = k;else for (; this.min - d > a[0];) {
            a.shift();
          }if (b) this.max = l;else for (; this.max + d < a[a.length - 1];) {
            a.pop();
          }0 === a.length && r(k) && a.push((l + k) / 2);
        }
      }, alignToOthers: function alignToOthers() {
        var a = {},
            c,
            b = this.options;!1 === this.chart.options.chart.alignTicks || !1 === b.alignTicks || this.isLog || m(this.chart[this.coll], function (k) {
          var b = k.options,
              b = [k.horiz ? b.left : b.top, b.width, b.height, b.pane].join();k.series.length && (a[b] ? c = !0 : a[b] = 1);
        });return c;
      }, getTickAmount: function getTickAmount() {
        var a = this.options,
            c = a.tickAmount,
            b = a.tickPixelInterval;!r(a.tickInterval) && this.len < b && !this.isRadial && !this.isLog && a.startOnTick && a.endOnTick && (c = 2);!c && this.alignToOthers() && (c = Math.ceil(this.len / b) + 1);4 > c && (this.finalTickAmt = c, c = 5);this.tickAmount = c;
      }, adjustTickAmount: function adjustTickAmount() {
        var a = this.tickInterval,
            c = this.tickPositions,
            b = this.tickAmount,
            l = this.finalTickAmt,
            d = c && c.length;if (d < b) {
          for (; c.length < b;) {
            c.push(h(c[c.length - 1] + a));
          }this.transA *= (d - 1) / (b - 1);this.max = c[c.length - 1];
        } else d > b && (this.tickInterval *= 2, this.setTickPositions());
        if (r(l)) {
          for (a = b = c.length; a--;) {
            (3 === l && 1 === a % 2 || 2 >= l && 0 < a && a < b - 1) && c.splice(a, 1);
          }this.finalTickAmt = void 0;
        }
      }, setScale: function setScale() {
        var a, c;this.oldMin = this.min;this.oldMax = this.max;this.oldAxisLength = this.len;this.setAxisSize();c = this.len !== this.oldAxisLength;m(this.series, function (c) {
          if (c.isDirtyData || c.isDirty || c.xAxis.isDirty) a = !0;
        });c || a || this.isLinked || this.forceRedraw || this.userMin !== this.oldUserMin || this.userMax !== this.oldUserMax || this.alignToOthers() ? (this.resetStacks && this.resetStacks(), this.forceRedraw = !1, this.getSeriesExtremes(), this.setTickInterval(), this.oldUserMin = this.userMin, this.oldUserMax = this.userMax, this.isDirty || (this.isDirty = c || this.min !== this.oldMin || this.max !== this.oldMax)) : this.cleanStacks && this.cleanStacks();
      }, setExtremes: function setExtremes(a, c, b, l, d) {
        var k = this,
            e = k.chart;b = w(b, !0);m(k.series, function (a) {
          delete a.kdTree;
        });d = f(d, { min: a, max: c });g(k, "setExtremes", d, function () {
          k.userMin = a;k.userMax = c;k.eventArgs = d;b && e.redraw(l);
        });
      }, zoom: function zoom(a, c) {
        var k = this.dataMin,
            b = this.dataMax,
            l = this.options,
            d = Math.min(k, w(l.min, k)),
            l = Math.max(b, w(l.max, b));if (a !== this.min || c !== this.max) this.allowZoomOutside || (r(k) && (a < d && (a = d), a > l && (a = l)), r(b) && (c < d && (c = d), c > l && (c = l))), this.displayBtn = void 0 !== a || void 0 !== c, this.setExtremes(a, c, !1, void 0, { trigger: "zoom" });return !0;
      }, setAxisSize: function setAxisSize() {
        var a = this.chart,
            c = this.options,
            b = c.offsets || [0, 0, 0, 0],
            l = this.horiz,
            d = w(c.width, a.plotWidth - b[3] + b[1]),
            e = w(c.height, a.plotHeight - b[0] + b[2]),
            f = w(c.top, a.plotTop + b[0]),
            c = w(c.left, a.plotLeft + b[3]),
            b = /%$/;b.test(e) && (e = Math.round(parseFloat(e) / 100 * a.plotHeight));b.test(f) && (f = Math.round(parseFloat(f) / 100 * a.plotHeight + a.plotTop));this.left = c;this.top = f;this.width = d;this.height = e;this.bottom = a.chartHeight - e - f;this.right = a.chartWidth - d - c;this.len = Math.max(l ? d : e, 0);this.pos = l ? c : f;
      }, getExtremes: function getExtremes() {
        var a = this.isLog,
            c = this.lin2log;return { min: a ? h(c(this.min)) : this.min, max: a ? h(c(this.max)) : this.max, dataMin: this.dataMin, dataMax: this.dataMax, userMin: this.userMin, userMax: this.userMax };
      }, getThreshold: function getThreshold(a) {
        var c = this.isLog,
            k = this.lin2log,
            b = c ? k(this.min) : this.min,
            c = c ? k(this.max) : this.max;null === a ? a = b : b > a ? a = b : c < a && (a = c);return this.translate(a, 0, 1, 0, 1);
      }, autoLabelAlign: function autoLabelAlign(a) {
        a = (w(a, 0) - 90 * this.side + 720) % 360;return 15 < a && 165 > a ? "right" : 195 < a && 345 > a ? "left" : "center";
      }, tickSize: function tickSize(a) {
        var c = this.options,
            k = c[a + "Length"],
            b = w(c[a + "Width"], "tick" === a && this.isXAxis ? 1 : 0);if (b && k) return "inside" === c[a + "Position"] && (k = -k), [k, b];
      }, labelMetrics: function labelMetrics() {
        var a = this.tickPositions && this.tickPositions[0] || 0;return this.chart.renderer.fontMetrics(this.options.labels.style && this.options.labels.style.fontSize, this.ticks[a] && this.ticks[a].label);
      }, unsquish: function unsquish() {
        var a = this.options.labels,
            c = this.horiz,
            b = this.tickInterval,
            l = b,
            d = this.len / (((this.categories ? 1 : 0) + this.max - this.min) / b),
            e,
            f = a.rotation,
            y = this.labelMetrics(),
            p,
            g = Number.MAX_VALUE,
            v,
            q = function q(a) {
          a /= d || 1;a = 1 < a ? Math.ceil(a) : 1;return a * b;
        };c ? (v = !a.staggerLines && !a.step && (r(f) ? [f] : d < w(a.autoRotationLimit, 80) && a.autoRotation)) && m(v, function (a) {
          var c;if (a === f || a && -90 <= a && 90 >= a) p = q(Math.abs(y.h / Math.sin(x * a))), c = p + Math.abs(a / 360), c < g && (g = c, e = a, l = p);
        }) : a.step || (l = q(y.h));this.autoRotation = v;this.labelRotation = w(e, f);return l;
      }, getSlotWidth: function getSlotWidth() {
        var a = this.chart,
            c = this.horiz,
            b = this.options.labels,
            l = Math.max(this.tickPositions.length - (this.categories ? 0 : 1), 1),
            d = a.margin[3];return c && 2 > (b.step || 0) && !b.rotation && (this.staggerLines || 1) * this.len / l || !c && (d && d - a.spacing[3] || .33 * a.chartWidth);
      }, renderUnsquish: function renderUnsquish() {
        var a = this.chart,
            c = a.renderer,
            b = this.tickPositions,
            l = this.ticks,
            d = this.options.labels,
            e = this.horiz,
            f = this.getSlotWidth(),
            y = Math.max(1, Math.round(f - 2 * (d.padding || 5))),
            p = {},
            g = this.labelMetrics(),
            v = d.style && d.style.textOverflow,
            G,
            w = 0,
            I,
            A;H(d.rotation) || (p.rotation = d.rotation || 0);m(b, function (a) {
          (a = l[a]) && a.labelLength > w && (w = a.labelLength);
        });this.maxLabelLength = w;if (this.autoRotation) w > y && w > g.h ? p.rotation = this.labelRotation : this.labelRotation = 0;else if (f && (G = { width: y + "px" }, !v)) for (G.textOverflow = "clip", I = b.length; !e && I--;) {
          if (A = b[I], y = l[A].label) y.styles && "ellipsis" === y.styles.textOverflow ? y.css({ textOverflow: "clip" }) : l[A].labelLength > f && y.css({ width: f + "px" }), y.getBBox().height > this.len / b.length - (g.h - g.f) && (y.specCss = { textOverflow: "ellipsis" });
        }p.rotation && (G = { width: (w > .5 * a.chartHeight ? .33 * a.chartHeight : a.chartHeight) + "px" }, v || (G.textOverflow = "ellipsis"));if (this.labelAlign = d.align || this.autoLabelAlign(this.labelRotation)) p.align = this.labelAlign;m(b, function (a) {
          var c = (a = l[a]) && a.label;c && (c.attr(p), G && c.css(q(G, c.specCss)), delete c.specCss, a.rotation = p.rotation);
        });this.tickRotCorr = c.rotCorr(g.b, this.labelRotation || 0, 0 !== this.side);
      }, hasData: function hasData() {
        return this.hasVisibleSeries || r(this.min) && r(this.max) && !!this.tickPositions;
      }, addTitle: function addTitle(a) {
        var c = this.chart.renderer,
            k = this.horiz,
            b = this.opposite,
            l = this.options.title,
            d;this.axisTitle || ((d = l.textAlign) || (d = (k ? { low: "left", middle: "center", high: "right" } : { low: b ? "right" : "left", middle: "center", high: b ? "left" : "right" })[l.align]), this.axisTitle = c.text(l.text, 0, 0, l.useHTML).attr({ zIndex: 7, rotation: l.rotation || 0, align: d }).addClass("highcharts-axis-title").css(l.style).add(this.axisGroup), this.axisTitle.isNew = !0);this.axisTitle[a ? "show" : "hide"](!0);
      }, generateTick: function generateTick(a) {
        var c = this.ticks;c[a] ? c[a].addLabel() : c[a] = new l(this, a);
      }, getOffset: function getOffset() {
        var a = this,
            b = a.chart,
            l = b.renderer,
            d = a.options,
            e = a.tickPositions,
            f = a.ticks,
            y = a.horiz,
            p = a.side,
            g = b.inverted && !a.isZAxis ? [1, 0, 3, 2][p] : p,
            v,
            q,
            G = 0,
            I,
            A = 0,
            h = d.title,
            H = d.labels,
            n = 0,
            K = b.axisOffset,
            b = b.clipOffset,
            J = [-1, 1, 1, -1][p],
            t = d.className,
            u = a.axisParent,
            x = this.tickSize("tick");v = a.hasData();a.showAxis = q = v || w(d.showEmpty, !0);a.staggerLines = a.horiz && H.staggerLines;a.axisGroup || (a.gridGroup = l.g("grid").attr({ zIndex: d.gridZIndex || 1 }).addClass("highcharts-" + this.coll.toLowerCase() + "-grid " + (t || "")).add(u), a.axisGroup = l.g("axis").attr({ zIndex: d.zIndex || 2 }).addClass("highcharts-" + this.coll.toLowerCase() + " " + (t || "")).add(u), a.labelGroup = l.g("axis-labels").attr({ zIndex: H.zIndex || 7 }).addClass("highcharts-" + a.coll.toLowerCase() + "-labels " + (t || "")).add(u));v || a.isLinked ? (m(e, function (c, b) {
          a.generateTick(c, b);
        }), a.renderUnsquish(), !1 === H.reserveSpace || 0 !== p && 2 !== p && { 1: "left", 3: "right" }[p] !== a.labelAlign && "center" !== a.labelAlign || m(e, function (a) {
          n = Math.max(f[a].getLabelSize(), n);
        }), a.staggerLines && (n *= a.staggerLines, a.labelOffset = n * (a.opposite ? -1 : 1))) : c(f, function (a, c) {
          a.destroy();delete f[c];
        });h && h.text && !1 !== h.enabled && (a.addTitle(q), q && !1 !== h.reserveSpace && (a.titleOffset = G = a.axisTitle.getBBox()[y ? "height" : "width"], I = h.offset, A = r(I) ? 0 : w(h.margin, y ? 5 : 10)));a.renderLine();a.offset = J * w(d.offset, K[p]);a.tickRotCorr = a.tickRotCorr || { x: 0, y: 0 };l = 0 === p ? -a.labelMetrics().h : 2 === p ? a.tickRotCorr.y : 0;A = Math.abs(n) + A;n && (A = A - l + J * (y ? w(H.y, a.tickRotCorr.y + 8 * J) : H.x));a.axisTitleMargin = w(I, A);K[p] = Math.max(K[p], a.axisTitleMargin + G + J * a.offset, A, v && e.length && x ? x[0] + J * a.offset : 0);e = 2 * Math.floor(a.axisLine.strokeWidth() / 2);0 < d.offset && (e -= 2 * d.offset);b[g] = Math.max(b[g] || e, e);
      }, getLinePath: function getLinePath(a) {
        var c = this.chart,
            b = this.opposite,
            k = this.offset,
            l = this.horiz,
            d = this.left + (b ? this.width : 0) + k,
            k = c.chartHeight - this.bottom - (b ? this.height : 0) + k;b && (a *= -1);return c.renderer.crispLine(["M", l ? this.left : d, l ? k : this.top, "L", l ? c.chartWidth - this.right : d, l ? k : c.chartHeight - this.bottom], a);
      }, renderLine: function renderLine() {
        this.axisLine || (this.axisLine = this.chart.renderer.path().addClass("highcharts-axis-line").add(this.axisGroup), this.axisLine.attr({ stroke: this.options.lineColor, "stroke-width": this.options.lineWidth, zIndex: 7 }));
      }, getTitlePosition: function getTitlePosition() {
        var a = this.horiz,
            c = this.left,
            b = this.top,
            l = this.len,
            d = this.options.title,
            e = a ? c : b,
            f = this.opposite,
            y = this.offset,
            p = d.x || 0,
            g = d.y || 0,
            v = this.chart.renderer.fontMetrics(d.style && d.style.fontSize, this.axisTitle).f,
            l = { low: e + (a ? 0 : l), middle: e + l / 2, high: e + (a ? l : 0) }[d.align],
            c = (a ? b + this.height : c) + (a ? 1 : -1) * (f ? -1 : 1) * this.axisTitleMargin + (2 === this.side ? v : 0);return { x: a ? l + p : c + (f ? this.width : 0) + y + p, y: a ? c + g - (f ? this.height : 0) + y : l + g };
      }, renderMinorTick: function renderMinorTick(a) {
        var c = this.chart.hasRendered && v(this.oldMin),
            b = this.minorTicks;b[a] || (b[a] = new l(this, a, "minor"));c && b[a].isNew && b[a].render(null, !0);b[a].render(null, !1, 1);
      }, renderTick: function renderTick(a, c) {
        var b = this.isLinked,
            k = this.ticks,
            d = this.chart.hasRendered && v(this.oldMin);if (!b || a >= this.min && a <= this.max) k[a] || (k[a] = new l(this, a)), d && k[a].isNew && k[a].render(c, !0, .1), k[a].render(c);
      }, render: function render() {
        var b = this,
            d = b.chart,
            e = b.options,
            f = b.isLog,
            y = b.lin2log,
            p = b.isLinked,
            g = b.tickPositions,
            q = b.axisTitle,
            w = b.ticks,
            I = b.minorTicks,
            A = b.alternateBands,
            h = e.stackLabels,
            H = e.alternateGridColor,
            n = b.tickmarkOffset,
            K = b.axisLine,
            J = b.showAxis,
            r = B(d.renderer.globalAnimation),
            t,
            u;b.labelEdge.length = 0;b.overlap = !1;m([w, I, A], function (a) {
          c(a, function (a) {
            a.isActive = !1;
          });
        });if (b.hasData() || p) b.minorTickInterval && !b.categories && m(b.getMinorTickPositions(), function (a) {
          b.renderMinorTick(a);
        }), g.length && (m(g, function (a, c) {
          b.renderTick(a, c);
        }), n && (0 === b.min || b.single) && (w[-1] || (w[-1] = new l(b, -1, null, !0)), w[-1].render(-1))), H && m(g, function (c, l) {
          u = void 0 !== g[l + 1] ? g[l + 1] + n : b.max - n;0 === l % 2 && c < b.max && u <= b.max + (d.polar ? -n : n) && (A[c] || (A[c] = new a.PlotLineOrBand(b)), t = c + n, A[c].options = { from: f ? y(t) : t, to: f ? y(u) : u, color: H }, A[c].render(), A[c].isActive = !0);
        }), b._addedPlotLB || (m((e.plotLines || []).concat(e.plotBands || []), function (a) {
          b.addPlotBandOrLine(a);
        }), b._addedPlotLB = !0);m([w, I, A], function (a) {
          var b,
              l = [],
              k = r.duration;c(a, function (a, c) {
            a.isActive || (a.render(c, !1, 0), a.isActive = !1, l.push(c));
          });G(function () {
            for (b = l.length; b--;) {
              a[l[b]] && !a[l[b]].isActive && (a[l[b]].destroy(), delete a[l[b]]);
            }
          }, a !== A && d.hasRendered && k ? k : 0);
        });K && (K[K.isPlaced ? "animate" : "attr"]({ d: this.getLinePath(K.strokeWidth()) }), K.isPlaced = !0, K[J ? "show" : "hide"](!0));q && J && (e = b.getTitlePosition(), v(e.y) ? (q[q.isNew ? "attr" : "animate"](e), q.isNew = !1) : (q.attr("y", -9999), q.isNew = !0));h && h.enabled && b.renderStackTotals();b.isDirty = !1;
      }, redraw: function redraw() {
        this.visible && (this.render(), m(this.plotLinesAndBands, function (a) {
          a.render();
        }));m(this.series, function (a) {
          a.isDirty = !0;
        });
      }, keepProps: "extKey hcEvents names series userMax userMin".split(" "), destroy: function destroy(a) {
        var l = this,
            k = l.stacks,
            d = l.plotLinesAndBands,
            e;a || K(l);c(k, function (a, c) {
          t(a);k[c] = null;
        });m([l.ticks, l.minorTicks, l.alternateBands], function (a) {
          t(a);
        });if (d) for (a = d.length; a--;) {
          d[a].destroy();
        }m("stackTotalGroup axisLine axisTitle axisGroup gridGroup labelGroup cross".split(" "), function (a) {
          l[a] && (l[a] = l[a].destroy());
        });for (e in l.plotLinesAndBandsGroups) {
          l.plotLinesAndBandsGroups[e] = l.plotLinesAndBandsGroups[e].destroy();
        }c(l, function (a, c) {
          -1 === b(c, l.keepProps) && delete l[c];
        });
      }, drawCrosshair: function drawCrosshair(a, c) {
        var b,
            l = this.crosshair,
            k = w(l.snap, !0),
            d,
            e = this.cross;a || (a = this.cross && this.cross.e);this.crosshair && !1 !== (r(c) || !k) ? (k ? r(c) && (d = this.isXAxis ? c.plotX : this.len - c.plotY) : d = a && (this.horiz ? a.chartX - this.pos : this.len - a.chartY + this.pos), r(d) && (b = this.getPlotLinePath(c && (this.isXAxis ? c.x : w(c.stackY, c.y)), null, null, null, d) || null), r(b) ? (c = this.categories && !this.isRadial, e || (this.cross = e = this.chart.renderer.path().addClass("highcharts-crosshair highcharts-crosshair-" + (c ? "category " : "thin ") + l.className).attr({ zIndex: w(l.zIndex, 2) }).add(), e.attr({ stroke: l.color || (c ? n("#ccd6eb").setOpacity(.25).get() : "#cccccc"), "stroke-width": w(l.width, 1) }), l.dashStyle && e.attr({ dashstyle: l.dashStyle })), e.show().attr({ d: b }), c && !l.width && e.attr({ "stroke-width": this.transA }), this.cross.e = a) : this.hideCrosshair()) : this.hideCrosshair();
      }, hideCrosshair: function hideCrosshair() {
        this.cross && this.cross.hide();
      } });return a.Axis = I;
  }(L);(function (a) {
    var E = a.Axis,
        B = a.Date,
        F = a.dateFormat,
        D = a.defaultOptions,
        n = a.defined,
        h = a.each,
        u = a.extend,
        r = a.getMagnitude,
        x = a.getTZOffset,
        t = a.normalizeTickInterval,
        m = a.pick,
        f = a.timeUnits;E.prototype.getTimeTicks = function (a, e, d, p) {
      var b = [],
          g = {},
          v = D.global.useUTC,
          H,
          q = new B(e - Math.max(x(e), x(d))),
          J = B.hcMakeTime,
          c = a.unitRange,
          w = a.count,
          K;if (n(e)) {
        q[B.hcSetMilliseconds](c >= f.second ? 0 : w * Math.floor(q.getMilliseconds() / w));if (c >= f.second) q[B.hcSetSeconds](c >= f.minute ? 0 : w * Math.floor(q.getSeconds() / w));if (c >= f.minute) q[B.hcSetMinutes](c >= f.hour ? 0 : w * Math.floor(q[B.hcGetMinutes]() / w));if (c >= f.hour) q[B.hcSetHours](c >= f.day ? 0 : w * Math.floor(q[B.hcGetHours]() / w));if (c >= f.day) q[B.hcSetDate](c >= f.month ? 1 : w * Math.floor(q[B.hcGetDate]() / w));c >= f.month && (q[B.hcSetMonth](c >= f.year ? 0 : w * Math.floor(q[B.hcGetMonth]() / w)), H = q[B.hcGetFullYear]());if (c >= f.year) q[B.hcSetFullYear](H - H % w);if (c === f.week) q[B.hcSetDate](q[B.hcGetDate]() - q[B.hcGetDay]() + m(p, 1));H = q[B.hcGetFullYear]();p = q[B.hcGetMonth]();var y = q[B.hcGetDate](),
            G = q[B.hcGetHours]();if (B.hcTimezoneOffset || B.hcGetTimezoneOffset) K = (!v || !!B.hcGetTimezoneOffset) && (d - e > 4 * f.month || x(e) !== x(d)), q = q.getTime(), q = new B(q + x(q));v = q.getTime();for (e = 1; v < d;) {
          b.push(v), v = c === f.year ? J(H + e * w, 0) : c === f.month ? J(H, p + e * w) : !K || c !== f.day && c !== f.week ? K && c === f.hour ? J(H, p, y, G + e * w) : v + c * w : J(H, p, y + e * w * (c === f.day ? 1 : 7)), e++;
        }b.push(v);c <= f.hour && 1E4 > b.length && h(b, function (a) {
          0 === a % 18E5 && "000000000" === F("%H%M%S%L", a) && (g[a] = "day");
        });
      }b.info = u(a, { higherRanks: g, totalRange: c * w });return b;
    };E.prototype.normalizeTimeTickInterval = function (a, e) {
      var d = e || [["millisecond", [1, 2, 5, 10, 20, 25, 50, 100, 200, 500]], ["second", [1, 2, 5, 10, 15, 30]], ["minute", [1, 2, 5, 10, 15, 30]], ["hour", [1, 2, 3, 4, 6, 8, 12]], ["day", [1, 2]], ["week", [1, 2]], ["month", [1, 2, 3, 4, 6]], ["year", null]];e = d[d.length - 1];var p = f[e[0]],
          b = e[1],
          g;for (g = 0; g < d.length && !(e = d[g], p = f[e[0]], b = e[1], d[g + 1] && a <= (p * b[b.length - 1] + f[d[g + 1][0]]) / 2); g++) {}p === f.year && a < 5 * p && (b = [1, 2, 5]);a = t(a / p, b, "year" === e[0] ? Math.max(r(a / p), 1) : 1);return { unitRange: p, count: a, unitName: e[0] };
    };
  })(L);(function (a) {
    var E = a.Axis,
        B = a.getMagnitude,
        F = a.map,
        D = a.normalizeTickInterval,
        n = a.pick;E.prototype.getLogTickPositions = function (a, u, r, x) {
      var h = this.options,
          m = this.len,
          f = this.lin2log,
          g = this.log2lin,
          e = [];x || (this._minorAutoInterval = null);if (.5 <= a) a = Math.round(a), e = this.getLinearTickPositions(a, u, r);else if (.08 <= a) for (var m = Math.floor(u), d, p, b, A, v, h = .3 < a ? [1, 2, 4] : .15 < a ? [1, 2, 4, 6, 8] : [1, 2, 3, 4, 5, 6, 7, 8, 9]; m < r + 1 && !v; m++) {
        for (p = h.length, d = 0; d < p && !v; d++) {
          b = g(f(m) * h[d]), b > u && (!x || A <= r) && void 0 !== A && e.push(A), A > r && (v = !0), A = b;
        }
      } else u = f(u), r = f(r), a = h[x ? "minorTickInterval" : "tickInterval"], a = n("auto" === a ? null : a, this._minorAutoInterval, h.tickPixelInterval / (x ? 5 : 1) * (r - u) / ((x ? m / this.tickPositions.length : m) || 1)), a = D(a, null, B(a)), e = F(this.getLinearTickPositions(a, u, r), g), x || (this._minorAutoInterval = a / 5);x || (this.tickInterval = a);return e;
    };E.prototype.log2lin = function (a) {
      return Math.log(a) / Math.LN10;
    };E.prototype.lin2log = function (a) {
      return Math.pow(10, a);
    };
  })(L);(function (a, E) {
    var B = a.arrayMax,
        F = a.arrayMin,
        D = a.defined,
        n = a.destroyObjectProperties,
        h = a.each,
        u = a.erase,
        r = a.merge,
        x = a.pick;a.PlotLineOrBand = function (a, m) {
      this.axis = a;m && (this.options = m, this.id = m.id);
    };a.PlotLineOrBand.prototype = { render: function render() {
        var h = this,
            m = h.axis,
            f = m.horiz,
            g = h.options,
            e = g.label,
            d = h.label,
            p = g.to,
            b = g.from,
            A = g.value,
            v = D(b) && D(p),
            H = D(A),
            q = h.svgElem,
            n = !q,
            c = [],
            w = g.color,
            K = x(g.zIndex, 0),
            y = g.events,
            c = { "class": "highcharts-plot-" + (v ? "band " : "line ") + (g.className || "") },
            G = {},
            l = m.chart.renderer,
            I = v ? "bands" : "lines",
            k = m.log2lin;m.isLog && (b = k(b), p = k(p), A = k(A));H ? (c = { stroke: w, "stroke-width": g.width }, g.dashStyle && (c.dashstyle = g.dashStyle)) : v && (w && (c.fill = w), g.borderWidth && (c.stroke = g.borderColor, c["stroke-width"] = g.borderWidth));G.zIndex = K;I += "-" + K;(w = m.plotLinesAndBandsGroups[I]) || (m.plotLinesAndBandsGroups[I] = w = l.g("plot-" + I).attr(G).add());n && (h.svgElem = q = l.path().attr(c).add(w));if (H) c = m.getPlotLinePath(A, q.strokeWidth());else if (v) c = m.getPlotBandPath(b, p, g);else return;n && c && c.length ? (q.attr({ d: c }), y && a.objectEach(y, function (a, c) {
          q.on(c, function (a) {
            y[c].apply(h, [a]);
          });
        })) : q && (c ? (q.show(), q.animate({ d: c })) : (q.hide(), d && (h.label = d = d.destroy())));e && D(e.text) && c && c.length && 0 < m.width && 0 < m.height && !c.flat ? (e = r({ align: f && v && "center", x: f ? !v && 4 : 10, verticalAlign: !f && v && "middle", y: f ? v ? 16 : 10 : v ? 6 : -4, rotation: f && !v && 90 }, e), this.renderLabel(e, c, v, K)) : d && d.hide();return h;
      }, renderLabel: function renderLabel(a, m, f, g) {
        var e = this.label,
            d = this.axis.chart.renderer;e || (e = { align: a.textAlign || a.align, rotation: a.rotation, "class": "highcharts-plot-" + (f ? "band" : "line") + "-label " + (a.className || "") }, e.zIndex = g, this.label = e = d.text(a.text, 0, 0, a.useHTML).attr(e).add(), e.css(a.style));g = [m[1], m[4], f ? m[6] : m[1]];m = [m[2], m[5], f ? m[7] : m[2]];f = F(g);d = F(m);e.align(a, !1, { x: f, y: d, width: B(g) - f, height: B(m) - d });e.show();
      }, destroy: function destroy() {
        u(this.axis.plotLinesAndBands, this);delete this.axis;n(this);
      } };a.extend(E.prototype, { getPlotBandPath: function getPlotBandPath(a, m) {
        var f = this.getPlotLinePath(m, null, null, !0),
            g = this.getPlotLinePath(a, null, null, !0),
            e = this.horiz,
            d = 1;a = a < this.min && m < this.min || a > this.max && m > this.max;g && f ? (a && (g.flat = g.toString() === f.toString(), d = 0), g.push(e && f[4] === g[4] ? f[4] + d : f[4], e || f[5] !== g[5] ? f[5] : f[5] + d, e && f[1] === g[1] ? f[1] + d : f[1], e || f[2] !== g[2] ? f[2] : f[2] + d)) : g = null;return g;
      }, addPlotBand: function addPlotBand(a) {
        return this.addPlotBandOrLine(a, "plotBands");
      }, addPlotLine: function addPlotLine(a) {
        return this.addPlotBandOrLine(a, "plotLines");
      }, addPlotBandOrLine: function addPlotBandOrLine(h, m) {
        var f = new a.PlotLineOrBand(this, h).render(),
            g = this.userOptions;f && (m && (g[m] = g[m] || [], g[m].push(h)), this.plotLinesAndBands.push(f));
        return f;
      }, removePlotBandOrLine: function removePlotBandOrLine(a) {
        for (var m = this.plotLinesAndBands, f = this.options, g = this.userOptions, e = m.length; e--;) {
          m[e].id === a && m[e].destroy();
        }h([f.plotLines || [], g.plotLines || [], f.plotBands || [], g.plotBands || []], function (d) {
          for (e = d.length; e--;) {
            d[e].id === a && u(d, d[e]);
          }
        });
      }, removePlotBand: function removePlotBand(a) {
        this.removePlotBandOrLine(a);
      }, removePlotLine: function removePlotLine(a) {
        this.removePlotBandOrLine(a);
      } });
  })(L, T);(function (a) {
    var E = a.dateFormat,
        B = a.each,
        F = a.extend,
        D = a.format,
        n = a.isNumber,
        h = a.map,
        u = a.merge,
        r = a.pick,
        x = a.splat,
        t = a.syncTimeout,
        m = a.timeUnits;a.Tooltip = function () {
      this.init.apply(this, arguments);
    };a.Tooltip.prototype = { init: function init(a, g) {
        this.chart = a;this.options = g;this.crosshairs = [];this.now = { x: 0, y: 0 };this.isHidden = !0;this.split = g.split && !a.inverted;this.shared = g.shared || this.split;
      }, cleanSplit: function cleanSplit(a) {
        B(this.chart.series, function (f) {
          var e = f && f.tt;e && (!e.isActive || a ? f.tt = e.destroy() : e.isActive = !1);
        });
      }, getLabel: function getLabel() {
        var a = this.chart.renderer,
            g = this.options;this.label || (this.split ? this.label = a.g("tooltip") : (this.label = a.label("", 0, 0, g.shape || "callout", null, null, g.useHTML, null, "tooltip").attr({ padding: g.padding, r: g.borderRadius }), this.label.attr({ fill: g.backgroundColor, "stroke-width": g.borderWidth }).css(g.style).shadow(g.shadow)), this.label.attr({ zIndex: 8 }).add());return this.label;
      }, update: function update(a) {
        this.destroy();u(!0, this.chart.options.tooltip.userOptions, a);this.init(this.chart, u(!0, this.options, a));
      }, destroy: function destroy() {
        this.label && (this.label = this.label.destroy());this.split && this.tt && (this.cleanSplit(this.chart, !0), this.tt = this.tt.destroy());clearTimeout(this.hideTimer);clearTimeout(this.tooltipTimeout);
      }, move: function move(a, g, e, d) {
        var f = this,
            b = f.now,
            m = !1 !== f.options.animation && !f.isHidden && (1 < Math.abs(a - b.x) || 1 < Math.abs(g - b.y)),
            v = f.followPointer || 1 < f.len;F(b, { x: m ? (2 * b.x + a) / 3 : a, y: m ? (b.y + g) / 2 : g, anchorX: v ? void 0 : m ? (2 * b.anchorX + e) / 3 : e, anchorY: v ? void 0 : m ? (b.anchorY + d) / 2 : d });f.getLabel().attr(b);m && (clearTimeout(this.tooltipTimeout), this.tooltipTimeout = setTimeout(function () {
          f && f.move(a, g, e, d);
        }, 32));
      }, hide: function hide(a) {
        var f = this;clearTimeout(this.hideTimer);a = r(a, this.options.hideDelay, 500);this.isHidden || (this.hideTimer = t(function () {
          f.getLabel()[a ? "fadeOut" : "hide"]();f.isHidden = !0;
        }, a));
      }, getAnchor: function getAnchor(a, g) {
        var e,
            d = this.chart,
            f = d.inverted,
            b = d.plotTop,
            m = d.plotLeft,
            v = 0,
            H = 0,
            q,
            n;a = x(a);e = a[0].tooltipPos;this.followPointer && g && (void 0 === g.chartX && (g = d.pointer.normalize(g)), e = [g.chartX - d.plotLeft, g.chartY - b]);e || (B(a, function (a) {
          q = a.series.yAxis;n = a.series.xAxis;v += a.plotX + (!f && n ? n.left - m : 0);H += (a.plotLow ? (a.plotLow + a.plotHigh) / 2 : a.plotY) + (!f && q ? q.top - b : 0);
        }), v /= a.length, H /= a.length, e = [f ? d.plotWidth - H : v, this.shared && !f && 1 < a.length && g ? g.chartY - b : f ? d.plotHeight - v : H]);return h(e, Math.round);
      }, getPosition: function getPosition(a, g, e) {
        var d = this.chart,
            f = this.distance,
            b = {},
            m = e.h || 0,
            v,
            h = ["y", d.chartHeight, g, e.plotY + d.plotTop, d.plotTop, d.plotTop + d.plotHeight],
            q = ["x", d.chartWidth, a, e.plotX + d.plotLeft, d.plotLeft, d.plotLeft + d.plotWidth],
            n = !this.followPointer && r(e.ttBelow, !d.inverted === !!e.negative),
            c = function c(a, _c, d, k, e, y) {
          var l = d < k - f,
              p = k + f + d < _c,
              g = k - f - d;k += f;if (n && p) b[a] = k;else if (!n && l) b[a] = g;else if (l) b[a] = Math.min(y - d, 0 > g - m ? g : g - m);else if (p) b[a] = Math.max(e, k + m + d > _c ? k : k + m);else return !1;
        },
            w = function w(a, c, d, k) {
          var l;k < f || k > c - f ? l = !1 : b[a] = k < d / 2 ? 1 : k > c - d / 2 ? c - d - 2 : k - d / 2;return l;
        },
            K = function K(a) {
          var c = h;h = q;q = c;v = a;
        },
            y = function y() {
          !1 !== c.apply(0, h) ? !1 !== w.apply(0, q) || v || (K(!0), y()) : v ? b.x = b.y = 0 : (K(!0), y());
        };(d.inverted || 1 < this.len) && K();y();return b;
      }, defaultFormatter: function defaultFormatter(a) {
        var f = this.points || x(this),
            e;e = [a.tooltipFooterHeaderFormatter(f[0])];
        e = e.concat(a.bodyFormatter(f));e.push(a.tooltipFooterHeaderFormatter(f[0], !0));return e;
      }, refresh: function refresh(a, g) {
        var e,
            d = this.options,
            f,
            b = a,
            m,
            v = {},
            h = [];e = d.formatter || this.defaultFormatter;var v = this.shared,
            q;clearTimeout(this.hideTimer);this.followPointer = x(b)[0].series.tooltipOptions.followPointer;m = this.getAnchor(b, g);g = m[0];f = m[1];!v || b.series && b.series.noSharedTooltip ? v = b.getLabelConfig() : (B(b, function (a) {
          a.setState("hover");h.push(a.getLabelConfig());
        }), v = { x: b[0].category, y: b[0].y }, v.points = h, b = b[0]);this.len = h.length;v = e.call(v, this);q = b.series;this.distance = r(q.tooltipOptions.distance, 16);!1 === v ? this.hide() : (e = this.getLabel(), this.isHidden && e.attr({ opacity: 1 }).show(), this.split ? this.renderSplit(v, a) : (d.style.width || e.css({ width: this.chart.spacingBox.width }), e.attr({ text: v && v.join ? v.join("") : v }), e.removeClass(/highcharts-color-[\d]+/g).addClass("highcharts-color-" + r(b.colorIndex, q.colorIndex)), e.attr({ stroke: d.borderColor || b.color || q.color || "#666666" }), this.updatePosition({ plotX: g, plotY: f,
          negative: b.negative, ttBelow: b.ttBelow, h: m[2] || 0 })), this.isHidden = !1);
      }, renderSplit: function renderSplit(f, g) {
        var e = this,
            d = [],
            p = this.chart,
            b = p.renderer,
            m = !0,
            v = this.options,
            h,
            q = this.getLabel();B(f.slice(0, g.length + 1), function (a, c) {
          c = g[c - 1] || { isHeader: !0, plotX: g[0].plotX };var f = c.series || e,
              A = f.tt,
              y = c.series || {},
              G = "highcharts-color-" + r(c.colorIndex, y.colorIndex, "none");A || (f.tt = A = b.label(null, null, null, "callout").addClass("highcharts-tooltip-box " + G).attr({ padding: v.padding, r: v.borderRadius, fill: v.backgroundColor,
            stroke: c.color || y.color || "#333333", "stroke-width": v.borderWidth }).add(q));A.isActive = !0;A.attr({ text: a });A.css(v.style);a = A.getBBox();y = a.width + A.strokeWidth();c.isHeader ? (h = a.height, y = Math.max(0, Math.min(c.plotX + p.plotLeft - y / 2, p.chartWidth - y))) : y = c.plotX + p.plotLeft - r(v.distance, 16) - y;0 > y && (m = !1);a = (c.series && c.series.yAxis && c.series.yAxis.pos) + (c.plotY || 0);a -= p.plotTop;d.push({ target: c.isHeader ? p.plotHeight + h : a, rank: c.isHeader ? 1 : 0, size: f.tt.getBBox().height + 1, point: c, x: y, tt: A });
        });this.cleanSplit();
        a.distribute(d, p.plotHeight + h);B(d, function (a) {
          var c = a.point,
              b = c.series;a.tt.attr({ visibility: void 0 === a.pos ? "hidden" : "inherit", x: m || c.isHeader ? a.x : c.plotX + p.plotLeft + r(v.distance, 16), y: a.pos + p.plotTop, anchorX: c.isHeader ? c.plotX + p.plotLeft : c.plotX + b.xAxis.pos, anchorY: c.isHeader ? a.pos + p.plotTop - 15 : c.plotY + b.yAxis.pos });
        });
      }, updatePosition: function updatePosition(a) {
        var f = this.chart,
            e = this.getLabel(),
            e = (this.options.positioner || this.getPosition).call(this, e.width, e.height, a);this.move(Math.round(e.x), Math.round(e.y || 0), a.plotX + f.plotLeft, a.plotY + f.plotTop);
      }, getDateFormat: function getDateFormat(a, g, e, d) {
        var f = E("%m-%d %H:%M:%S.%L", g),
            b,
            A,
            v = { millisecond: 15, second: 12, minute: 9, hour: 6, day: 3 },
            h = "millisecond";for (A in m) {
          if (a === m.week && +E("%w", g) === e && "00:00:00.000" === f.substr(6)) {
            A = "week";break;
          }if (m[A] > a) {
            A = h;break;
          }if (v[A] && f.substr(v[A]) !== "01-01 00:00:00.000".substr(v[A])) break;"week" !== A && (h = A);
        }A && (b = d[A]);return b;
      }, getXDateFormat: function getXDateFormat(a, g, e) {
        g = g.dateTimeLabelFormats;var d = e && e.closestPointRange;return (d ? this.getDateFormat(d, a.x, e.options.startOfWeek, g) : g.day) || g.year;
      }, tooltipFooterHeaderFormatter: function tooltipFooterHeaderFormatter(a, g) {
        var e = g ? "footer" : "header";g = a.series;var d = g.tooltipOptions,
            f = d.xDateFormat,
            b = g.xAxis,
            m = b && "datetime" === b.options.type && n(a.key),
            e = d[e + "Format"];m && !f && (f = this.getXDateFormat(a, d, b));m && f && (e = e.replace("{point.key}", "{point.key:" + f + "}"));return D(e, { point: a, series: g });
      }, bodyFormatter: function bodyFormatter(a) {
        return h(a, function (a) {
          var e = a.series.tooltipOptions;return (e.pointFormatter || a.point.tooltipFormatter).call(a.point, e.pointFormat);
        });
      } };
  })(L);(function (a) {
    var E = a.addEvent,
        B = a.attr,
        F = a.charts,
        D = a.color,
        n = a.css,
        h = a.defined,
        u = a.doc,
        r = a.each,
        x = a.extend,
        t = a.fireEvent,
        m = a.offset,
        f = a.pick,
        g = a.removeEvent,
        e = a.splat,
        d = a.Tooltip,
        p = a.win;a.Pointer = function (a, d) {
      this.init(a, d);
    };a.Pointer.prototype = { init: function init(a, e) {
        this.options = e;this.chart = a;this.runChartClick = e.chart.events && !!e.chart.events.click;this.pinchDown = [];this.lastValidTouch = {};d && e.tooltip.enabled && (a.tooltip = new d(a, e.tooltip), this.followTouchMove = f(e.tooltip.followTouchMove, !0));this.setDOMEvents();
      }, zoomOption: function zoomOption(a) {
        var b = this.chart,
            d = b.options.chart,
            e = d.zoomType || "",
            b = b.inverted;/touch/.test(a.type) && (e = f(d.pinchType, e));this.zoomX = a = /x/.test(e);this.zoomY = e = /y/.test(e);this.zoomHor = a && !b || e && b;this.zoomVert = e && !b || a && b;this.hasZoom = a || e;
      }, normalize: function normalize(a, d) {
        var b, e;a = a || p.event;a.target || (a.target = a.srcElement);e = a.touches ? a.touches.length ? a.touches.item(0) : a.changedTouches[0] : a;d || (this.chartPosition = d = m(this.chart.container));void 0 === e.pageX ? (b = Math.max(a.x, a.clientX - d.left), d = a.y) : (b = e.pageX - d.left, d = e.pageY - d.top);return x(a, { chartX: Math.round(b), chartY: Math.round(d) });
      }, getCoordinates: function getCoordinates(a) {
        var b = { xAxis: [], yAxis: [] };r(this.chart.axes, function (d) {
          b[d.isXAxis ? "xAxis" : "yAxis"].push({ axis: d, value: d.toValue(a[d.horiz ? "chartX" : "chartY"]) });
        });return b;
      }, getKDPoints: function getKDPoints(a, d, e) {
        var b = [],
            p,
            g,
            c;r(a, function (a) {
          p = a.noSharedTooltip && d;g = !d && a.directTouch;a.visible && !g && f(a.options.enableMouseTracking, !0) && (c = a.searchPoint(e, !p && 0 > a.options.findNearestPointBy.indexOf("y"))) && c.series && b.push(c);
        });b.sort(function (a, c) {
          var b = a.distX - c.distX,
              e = a.dist - c.dist,
              l = (c.series.group && c.series.group.zIndex) - (a.series.group && a.series.group.zIndex);return 0 !== b && d ? b : 0 !== e ? e : 0 !== l ? l : a.series.index > c.series.index ? -1 : 1;
        });if (d && b[0] && !b[0].series.noSharedTooltip) for (a = b.length; a--;) {
          (b[a].x !== b[0].x || b[a].series.noSharedTooltip) && b.splice(a, 1);
        }return b;
      }, getPointFromEvent: function getPointFromEvent(a) {
        a = a.target;for (var b; a && !b;) {
          b = a.point, a = a.parentNode;
        }return b;
      }, getChartCoordinatesFromPoint: function getChartCoordinatesFromPoint(a, d) {
        var b = a.series,
            e = b.xAxis,
            b = b.yAxis;if (e && b) return d ? { chartX: e.len + e.pos - a.clientX, chartY: b.len + b.pos - a.plotY } : { chartX: a.clientX + e.pos, chartY: a.plotY + b.pos };
      }, getHoverData: function getHoverData(b, d, e, f, p, g) {
        var c = b,
            v = d,
            c = p ? e : [v];f = !(!f || !b);d = v && !v.stickyTracking;var q = function q(a, c) {
          return 0 === c;
        },
            y;f ? q = function q(a) {
          return a === b;
        } : d ? q = function q(a) {
          return a.series === v;
        } : c = a.grep(e, function (a) {
          return a.stickyTracking;
        });y = f && !p ? [b] : this.getKDPoints(c, p, g);v = (c = a.find(y, q)) && c.series;f || d || !p || (y = this.getKDPoints(e, p, g));y.sort(function (a, c) {
          return a.series.index - c.series.index;
        });return { hoverPoint: c, hoverSeries: v, hoverPoints: y };
      }, runPointActions: function runPointActions(b, d) {
        var e = this.chart,
            p = e.tooltip,
            g = p ? p.shared : !1,
            m = d || e.hoverPoint,
            c = m && m.series || e.hoverSeries;d = this.getHoverData(m, c, e.series, !!d || c && c.directTouch && this.isDirectTouch, g, b);var w,
            h,
            m = d.hoverPoint;w = (c = d.hoverSeries) && c.tooltipOptions.followPointer;h = (g = g && m && !m.series.noSharedTooltip) ? d.hoverPoints : m ? [m] : [];if (m && (m !== e.hoverPoint || p && p.isHidden)) {
          r(e.hoverPoints || [], function (c) {
            -1 === a.inArray(c, h) && c.setState();
          });r(h || [], function (a) {
            a.setState("hover");
          });if (e.hoverSeries !== c) c.onMouseOver();e.hoverPoint && e.hoverPoint.firePointEvent("mouseOut");m.firePointEvent("mouseOver");e.hoverPoints = h;e.hoverPoint = m;p && p.refresh(g ? h : m, b);
        } else w && p && !p.isHidden && (c = p.getAnchor([{}], b), p.updatePosition({ plotX: c[0], plotY: c[1] }));this.unDocMouseMove || (this.unDocMouseMove = E(u, "mousemove", function (c) {
          var b = F[a.hoverChartIndex];if (b) b.pointer.onDocumentMouseMove(c);
        }));r(e.axes, function (c) {
          f(c.crosshair.snap, !0) ? a.find(h, function (a) {
            return a.series[c.coll] === c;
          }) ? c.drawCrosshair(b, m) : c.hideCrosshair() : c.drawCrosshair(b);
        });
      }, reset: function reset(a, d) {
        var b = this.chart,
            f = b.hoverSeries,
            p = b.hoverPoint,
            g = b.hoverPoints,
            c = b.tooltip,
            m = c && c.shared ? g : p;a && m && r(e(m), function (c) {
          c.series.isCartesian && void 0 === c.plotX && (a = !1);
        });if (a) c && m && (c.refresh(m), p && (p.setState(p.state, !0), r(b.axes, function (a) {
          a.crosshair && a.drawCrosshair(null, p);
        })));else {
          if (p) p.onMouseOut();g && r(g, function (a) {
            a.setState();
          });if (f) f.onMouseOut();c && c.hide(d);
          this.unDocMouseMove && (this.unDocMouseMove = this.unDocMouseMove());r(b.axes, function (a) {
            a.hideCrosshair();
          });this.hoverX = b.hoverPoints = b.hoverPoint = null;
        }
      }, scaleGroups: function scaleGroups(a, d) {
        var b = this.chart,
            e;r(b.series, function (f) {
          e = a || f.getPlotBox();f.xAxis && f.xAxis.zoomEnabled && f.group && (f.group.attr(e), f.markerGroup && (f.markerGroup.attr(e), f.markerGroup.clip(d ? b.clipRect : null)), f.dataLabelsGroup && f.dataLabelsGroup.attr(e));
        });b.clipRect.attr(d || b.clipBox);
      }, dragStart: function dragStart(a) {
        var b = this.chart;b.mouseIsDown = a.type;b.cancelClick = !1;b.mouseDownX = this.mouseDownX = a.chartX;b.mouseDownY = this.mouseDownY = a.chartY;
      }, drag: function drag(a) {
        var b = this.chart,
            d = b.options.chart,
            e = a.chartX,
            f = a.chartY,
            p = this.zoomHor,
            c = this.zoomVert,
            g = b.plotLeft,
            m = b.plotTop,
            y = b.plotWidth,
            G = b.plotHeight,
            l,
            I = this.selectionMarker,
            k = this.mouseDownX,
            z = this.mouseDownY,
            h = d.panKey && a[d.panKey + "Key"];I && I.touch || (e < g ? e = g : e > g + y && (e = g + y), f < m ? f = m : f > m + G && (f = m + G), this.hasDragged = Math.sqrt(Math.pow(k - e, 2) + Math.pow(z - f, 2)), 10 < this.hasDragged && (l = b.isInsidePlot(k - g, z - m), b.hasCartesianSeries && (this.zoomX || this.zoomY) && l && !h && !I && (this.selectionMarker = I = b.renderer.rect(g, m, p ? 1 : y, c ? 1 : G, 0).attr({ fill: d.selectionMarkerFill || D("#335cad").setOpacity(.25).get(), "class": "highcharts-selection-marker", zIndex: 7 }).add()), I && p && (e -= k, I.attr({ width: Math.abs(e), x: (0 < e ? 0 : e) + k })), I && c && (e = f - z, I.attr({ height: Math.abs(e), y: (0 < e ? 0 : e) + z })), l && !I && d.panning && b.pan(a, d.panning)));
      }, drop: function drop(a) {
        var b = this,
            d = this.chart,
            e = this.hasPinched;if (this.selectionMarker) {
          var f = { originalEvent: a,
            xAxis: [], yAxis: [] },
              p = this.selectionMarker,
              c = p.attr ? p.attr("x") : p.x,
              g = p.attr ? p.attr("y") : p.y,
              m = p.attr ? p.attr("width") : p.width,
              y = p.attr ? p.attr("height") : p.height,
              G;if (this.hasDragged || e) r(d.axes, function (l) {
            if (l.zoomEnabled && h(l.min) && (e || b[{ xAxis: "zoomX", yAxis: "zoomY" }[l.coll]])) {
              var d = l.horiz,
                  k = "touchend" === a.type ? l.minPixelPadding : 0,
                  p = l.toValue((d ? c : g) + k),
                  d = l.toValue((d ? c + m : g + y) - k);f[l.coll].push({ axis: l, min: Math.min(p, d), max: Math.max(p, d) });G = !0;
            }
          }), G && t(d, "selection", f, function (a) {
            d.zoom(x(a, e ? { animation: !1 } : null));
          });this.selectionMarker = this.selectionMarker.destroy();e && this.scaleGroups();
        }d && (n(d.container, { cursor: d._cursor }), d.cancelClick = 10 < this.hasDragged, d.mouseIsDown = this.hasDragged = this.hasPinched = !1, this.pinchDown = []);
      }, onContainerMouseDown: function onContainerMouseDown(a) {
        a = this.normalize(a);this.zoomOption(a);a.preventDefault && a.preventDefault();this.dragStart(a);
      }, onDocumentMouseUp: function onDocumentMouseUp(b) {
        F[a.hoverChartIndex] && F[a.hoverChartIndex].pointer.drop(b);
      }, onDocumentMouseMove: function onDocumentMouseMove(a) {
        var b = this.chart,
            d = this.chartPosition;a = this.normalize(a, d);!d || this.inClass(a.target, "highcharts-tracker") || b.isInsidePlot(a.chartX - b.plotLeft, a.chartY - b.plotTop) || this.reset();
      }, onContainerMouseLeave: function onContainerMouseLeave(b) {
        var d = F[a.hoverChartIndex];d && (b.relatedTarget || b.toElement) && (d.pointer.reset(), d.pointer.chartPosition = null);
      }, onContainerMouseMove: function onContainerMouseMove(b) {
        var d = this.chart;h(a.hoverChartIndex) && F[a.hoverChartIndex] && F[a.hoverChartIndex].mouseIsDown || (a.hoverChartIndex = d.index);b = this.normalize(b);b.returnValue = !1;
        "mousedown" === d.mouseIsDown && this.drag(b);!this.inClass(b.target, "highcharts-tracker") && !d.isInsidePlot(b.chartX - d.plotLeft, b.chartY - d.plotTop) || d.openMenu || this.runPointActions(b);
      }, inClass: function inClass(a, d) {
        for (var b; a;) {
          if (b = B(a, "class")) {
            if (-1 !== b.indexOf(d)) return !0;if (-1 !== b.indexOf("highcharts-container")) return !1;
          }a = a.parentNode;
        }
      }, onTrackerMouseOut: function onTrackerMouseOut(a) {
        var b = this.chart.hoverSeries;a = a.relatedTarget || a.toElement;this.isDirectTouch = !1;if (!(!b || !a || b.stickyTracking || this.inClass(a, "highcharts-tooltip") || this.inClass(a, "highcharts-series-" + b.index) && this.inClass(a, "highcharts-tracker"))) b.onMouseOut();
      }, onContainerClick: function onContainerClick(a) {
        var b = this.chart,
            d = b.hoverPoint,
            e = b.plotLeft,
            f = b.plotTop;a = this.normalize(a);b.cancelClick || (d && this.inClass(a.target, "highcharts-tracker") ? (t(d.series, "click", x(a, { point: d })), b.hoverPoint && d.firePointEvent("click", a)) : (x(a, this.getCoordinates(a)), b.isInsidePlot(a.chartX - e, a.chartY - f) && t(b, "click", a)));
      }, setDOMEvents: function setDOMEvents() {
        var b = this,
            d = b.chart.container;d.onmousedown = function (a) {
          b.onContainerMouseDown(a);
        };d.onmousemove = function (a) {
          b.onContainerMouseMove(a);
        };d.onclick = function (a) {
          b.onContainerClick(a);
        };E(d, "mouseleave", b.onContainerMouseLeave);1 === a.chartCount && E(u, "mouseup", b.onDocumentMouseUp);a.hasTouch && (d.ontouchstart = function (a) {
          b.onContainerTouchStart(a);
        }, d.ontouchmove = function (a) {
          b.onContainerTouchMove(a);
        }, 1 === a.chartCount && E(u, "touchend", b.onDocumentTouchEnd));
      }, destroy: function destroy() {
        var b = this;b.unDocMouseMove && b.unDocMouseMove();g(b.chart.container, "mouseleave", b.onContainerMouseLeave);a.chartCount || (g(u, "mouseup", b.onDocumentMouseUp), g(u, "touchend", b.onDocumentTouchEnd));clearInterval(b.tooltipTimeout);a.objectEach(b, function (a, d) {
          b[d] = null;
        });
      } };
  })(L);(function (a) {
    var E = a.charts,
        B = a.each,
        F = a.extend,
        D = a.map,
        n = a.noop,
        h = a.pick;F(a.Pointer.prototype, { pinchTranslate: function pinchTranslate(a, h, n, t, m, f) {
        this.zoomHor && this.pinchTranslateDirection(!0, a, h, n, t, m, f);this.zoomVert && this.pinchTranslateDirection(!1, a, h, n, t, m, f);
      }, pinchTranslateDirection: function pinchTranslateDirection(a, h, n, t, m, f, g, e) {
        var d = this.chart,
            p = a ? "x" : "y",
            b = a ? "X" : "Y",
            A = "chart" + b,
            v = a ? "width" : "height",
            H = d["plot" + (a ? "Left" : "Top")],
            q,
            r,
            c = e || 1,
            w = d.inverted,
            K = d.bounds[a ? "h" : "v"],
            y = 1 === h.length,
            G = h[0][A],
            l = n[0][A],
            I = !y && h[1][A],
            k = !y && n[1][A],
            z;n = function n() {
          !y && 20 < Math.abs(G - I) && (c = e || Math.abs(l - k) / Math.abs(G - I));r = (H - l) / c + G;q = d["plot" + (a ? "Width" : "Height")] / c;
        };n();h = r;h < K.min ? (h = K.min, z = !0) : h + q > K.max && (h = K.max - q, z = !0);z ? (l -= .8 * (l - g[p][0]), y || (k -= .8 * (k - g[p][1])), n()) : g[p] = [l, k];w || (f[p] = r - H, f[v] = q);f = w ? 1 / c : c;m[v] = q;m[p] = h;t[w ? a ? "scaleY" : "scaleX" : "scale" + b] = c;t["translate" + b] = f * H + (l - f * G);
      }, pinch: function pinch(a) {
        var r = this,
            u = r.chart,
            t = r.pinchDown,
            m = a.touches,
            f = m.length,
            g = r.lastValidTouch,
            e = r.hasZoom,
            d = r.selectionMarker,
            p = {},
            b = 1 === f && (r.inClass(a.target, "highcharts-tracker") && u.runTrackerClick || r.runChartClick),
            A = {};1 < f && (r.initiated = !0);e && r.initiated && !b && a.preventDefault();D(m, function (a) {
          return r.normalize(a);
        });"touchstart" === a.type ? (B(m, function (a, b) {
          t[b] = { chartX: a.chartX, chartY: a.chartY };
        }), g.x = [t[0].chartX, t[1] && t[1].chartX], g.y = [t[0].chartY, t[1] && t[1].chartY], B(u.axes, function (a) {
          if (a.zoomEnabled) {
            var b = u.bounds[a.horiz ? "h" : "v"],
                d = a.minPixelPadding,
                e = a.toPixels(h(a.options.min, a.dataMin)),
                c = a.toPixels(h(a.options.max, a.dataMax)),
                f = Math.max(e, c);b.min = Math.min(a.pos, Math.min(e, c) - d);b.max = Math.max(a.pos + a.len, f + d);
          }
        }), r.res = !0) : r.followTouchMove && 1 === f ? this.runPointActions(r.normalize(a)) : t.length && (d || (r.selectionMarker = d = F({ destroy: n, touch: !0 }, u.plotBox)), r.pinchTranslate(t, m, p, d, A, g), r.hasPinched = e, r.scaleGroups(p, A), r.res && (r.res = !1, this.reset(!1, 0)));
      }, touch: function touch(n, r) {
        var u = this.chart,
            t,
            m;if (u.index !== a.hoverChartIndex) this.onContainerMouseLeave({ relatedTarget: !0 });a.hoverChartIndex = u.index;1 === n.touches.length ? (n = this.normalize(n), (m = u.isInsidePlot(n.chartX - u.plotLeft, n.chartY - u.plotTop)) && !u.openMenu ? (r && this.runPointActions(n), "touchmove" === n.type && (r = this.pinchDown, t = r[0] ? 4 <= Math.sqrt(Math.pow(r[0].chartX - n.chartX, 2) + Math.pow(r[0].chartY - n.chartY, 2)) : !1), h(t, !0) && this.pinch(n)) : r && this.reset()) : 2 === n.touches.length && this.pinch(n);
      }, onContainerTouchStart: function onContainerTouchStart(a) {
        this.zoomOption(a);this.touch(a, !0);
      }, onContainerTouchMove: function onContainerTouchMove(a) {
        this.touch(a);
      }, onDocumentTouchEnd: function onDocumentTouchEnd(h) {
        E[a.hoverChartIndex] && E[a.hoverChartIndex].pointer.drop(h);
      } });
  })(L);(function (a) {
    var E = a.addEvent,
        B = a.charts,
        F = a.css,
        D = a.doc,
        n = a.extend,
        h = a.noop,
        u = a.Pointer,
        r = a.removeEvent,
        x = a.win,
        t = a.wrap;if (!a.hasTouch && (x.PointerEvent || x.MSPointerEvent)) {
      var m = {},
          f = !!x.PointerEvent,
          g = function g() {
        var d = [];d.item = function (a) {
          return this[a];
        };a.objectEach(m, function (a) {
          d.push({ pageX: a.pageX, pageY: a.pageY, target: a.target });
        });return d;
      },
          e = function e(d, _e, b, f) {
        "touch" !== d.pointerType && d.pointerType !== d.MSPOINTER_TYPE_TOUCH || !B[a.hoverChartIndex] || (f(d), f = B[a.hoverChartIndex].pointer, f[_e]({ type: b, target: d.currentTarget, preventDefault: h, touches: g() }));
      };n(u.prototype, { onContainerPointerDown: function onContainerPointerDown(a) {
          e(a, "onContainerTouchStart", "touchstart", function (a) {
            m[a.pointerId] = { pageX: a.pageX, pageY: a.pageY, target: a.currentTarget };
          });
        }, onContainerPointerMove: function onContainerPointerMove(a) {
          e(a, "onContainerTouchMove", "touchmove", function (a) {
            m[a.pointerId] = { pageX: a.pageX, pageY: a.pageY };m[a.pointerId].target || (m[a.pointerId].target = a.currentTarget);
          });
        }, onDocumentPointerUp: function onDocumentPointerUp(a) {
          e(a, "onDocumentTouchEnd", "touchend", function (a) {
            delete m[a.pointerId];
          });
        }, batchMSEvents: function batchMSEvents(a) {
          a(this.chart.container, f ? "pointerdown" : "MSPointerDown", this.onContainerPointerDown);a(this.chart.container, f ? "pointermove" : "MSPointerMove", this.onContainerPointerMove);a(D, f ? "pointerup" : "MSPointerUp", this.onDocumentPointerUp);
        } });
      t(u.prototype, "init", function (a, e, b) {
        a.call(this, e, b);this.hasZoom && F(e.container, { "-ms-touch-action": "none", "touch-action": "none" });
      });t(u.prototype, "setDOMEvents", function (a) {
        a.apply(this);(this.hasZoom || this.followTouchMove) && this.batchMSEvents(E);
      });t(u.prototype, "destroy", function (a) {
        this.batchMSEvents(r);a.call(this);
      });
    }
  })(L);(function (a) {
    var E = a.addEvent,
        B = a.css,
        F = a.discardElement,
        D = a.defined,
        n = a.each,
        h = a.isFirefox,
        u = a.marginNames,
        r = a.merge,
        x = a.pick,
        t = a.setAnimation,
        m = a.stableSort,
        f = a.win,
        g = a.wrap;
    a.Legend = function (a, d) {
      this.init(a, d);
    };a.Legend.prototype = { init: function init(a, d) {
        this.chart = a;this.setOptions(d);d.enabled && (this.render(), E(this.chart, "endResize", function () {
          this.legend.positionCheckboxes();
        }));
      }, setOptions: function setOptions(a) {
        var d = x(a.padding, 8);this.options = a;this.itemStyle = a.itemStyle;this.itemHiddenStyle = r(this.itemStyle, a.itemHiddenStyle);this.itemMarginTop = a.itemMarginTop || 0;this.padding = d;this.initialItemY = d - 5;this.itemHeight = this.maxItemWidth = 0;this.symbolWidth = x(a.symbolWidth, 16);this.pages = [];
      }, update: function update(a, d) {
        var e = this.chart;this.setOptions(r(!0, this.options, a));this.destroy();e.isDirtyLegend = e.isDirtyBox = !0;x(d, !0) && e.redraw();
      }, colorizeItem: function colorizeItem(e, d) {
        e.legendGroup[d ? "removeClass" : "addClass"]("highcharts-legend-item-hidden");var f = this.options,
            b = e.legendItem,
            g = e.legendLine,
            m = e.legendSymbol,
            h = this.itemHiddenStyle.color,
            f = d ? f.itemStyle.color : h,
            q = d ? e.color || h : h,
            n = e.options && e.options.marker,
            c = { fill: q };b && b.css({ fill: f, color: f });g && g.attr({ stroke: q });m && (n && m.isMarker && (c = e.pointAttribs(), d || a.objectEach(c, function (a, b) {
          c[b] = h;
        })), m.attr(c));
      }, positionItem: function positionItem(a) {
        var d = this.options,
            e = d.symbolPadding,
            d = !d.rtl,
            b = a._legendItemPos,
            f = b[0],
            b = b[1],
            g = a.checkbox;(a = a.legendGroup) && a.element && a.translate(d ? f : this.legendWidth - f - 2 * e - 4, b);g && (g.x = f, g.y = b);
      }, destroyItem: function destroyItem(a) {
        var d = a.checkbox;n(["legendItem", "legendLine", "legendSymbol", "legendGroup"], function (d) {
          a[d] && (a[d] = a[d].destroy());
        });d && F(a.checkbox);
      }, destroy: function destroy() {
        function a(a) {
          this[a] && (this[a] = this[a].destroy());
        }n(this.getAllItems(), function (d) {
          n(["legendItem", "legendGroup"], a, d);
        });n("clipRect up down pager nav box title group".split(" "), a, this);this.display = null;
      }, positionCheckboxes: function positionCheckboxes(a) {
        var d = this.group && this.group.alignAttr,
            e,
            b = this.clipHeight || this.legendHeight,
            f = this.titleHeight;d && (e = d.translateY, n(this.allItems, function (g) {
          var p = g.checkbox,
              m;p && (m = e + f + p.y + (a || 0) + 3, B(p, { left: d.translateX + g.checkboxOffset + p.x - 20 + "px", top: m + "px", display: m > e - 6 && m < e + b - 6 ? "" : "none" }));
        }));
      }, renderTitle: function renderTitle() {
        var a = this.options,
            d = this.padding,
            f = a.title,
            b = 0;f.text && (this.title || (this.title = this.chart.renderer.label(f.text, d - 3, d - 4, null, null, null, a.useHTML, null, "legend-title").attr({ zIndex: 1 }).css(f.style).add(this.group)), a = this.title.getBBox(), b = a.height, this.offsetWidth = a.width, this.contentGroup.attr({ translateY: b }));this.titleHeight = b;
      }, setText: function setText(e) {
        var d = this.options;e.legendItem.attr({ text: d.labelFormat ? a.format(d.labelFormat, e) : d.labelFormatter.call(e) });
      }, renderItem: function renderItem(a) {
        var d = this.chart,
            e = d.renderer,
            b = this.options,
            f = "horizontal" === b.layout,
            g = this.symbolWidth,
            m = b.symbolPadding,
            q = this.itemStyle,
            h = this.itemHiddenStyle,
            c = this.padding,
            w = f ? x(b.itemDistance, 20) : 0,
            n = !b.rtl,
            y = b.width,
            G = b.itemMarginBottom || 0,
            l = this.itemMarginTop,
            I = a.legendItem,
            k = !a.series,
            z = !k && a.series.drawLegendSymbol ? a.series : a,
            u = z.options,
            M = this.createCheckboxForItem && u && u.showCheckbox,
            u = g + m + w + (M ? 20 : 0),
            t = b.useHTML,
            P = a.options.className;I || (a.legendGroup = e.g("legend-item").addClass("highcharts-" + z.type + "-series highcharts-color-" + a.colorIndex + (P ? " " + P : "") + (k ? " highcharts-series-" + a.index : "")).attr({ zIndex: 1 }).add(this.scrollGroup), a.legendItem = I = e.text("", n ? g + m : -m, this.baseline || 0, t).css(r(a.visible ? q : h)).attr({ align: n ? "left" : "right", zIndex: 2 }).add(a.legendGroup), this.baseline || (g = q.fontSize, this.fontMetrics = e.fontMetrics(g, I), this.baseline = this.fontMetrics.f + 3 + l, I.attr("y", this.baseline)), this.symbolHeight = b.symbolHeight || this.fontMetrics.f, z.drawLegendSymbol(this, a), this.setItemEvents && this.setItemEvents(a, I, t), M && this.createCheckboxForItem(a));
        this.colorizeItem(a, a.visible);q.width || I.css({ width: (b.itemWidth || d.spacingBox.width) - u });this.setText(a);e = I.getBBox();q = a.checkboxOffset = b.itemWidth || a.legendItemWidth || e.width + u;this.itemHeight = e = Math.round(a.legendItemHeight || e.height || this.symbolHeight);f && this.itemX - c + q > (y || d.spacingBox.width - 2 * c - b.x) && (this.itemX = c, this.itemY += l + this.lastLineHeight + G, this.lastLineHeight = 0);this.maxItemWidth = Math.max(this.maxItemWidth, q);this.lastItemY = l + this.itemY + G;this.lastLineHeight = Math.max(e, this.lastLineHeight);
        a._legendItemPos = [this.itemX, this.itemY];f ? this.itemX += q : (this.itemY += l + e + G, this.lastLineHeight = e);this.offsetWidth = y || Math.max((f ? this.itemX - c - w : q) + c, this.offsetWidth);
      }, getAllItems: function getAllItems() {
        var a = [];n(this.chart.series, function (d) {
          var e = d && d.options;d && x(e.showInLegend, D(e.linkedTo) ? !1 : void 0, !0) && (a = a.concat(d.legendItems || ("point" === e.legendType ? d.data : d)));
        });return a;
      }, adjustMargins: function adjustMargins(a, d) {
        var e = this.chart,
            b = this.options,
            f = b.align.charAt(0) + b.verticalAlign.charAt(0) + b.layout.charAt(0);
        b.floating || n([/(lth|ct|rth)/, /(rtv|rm|rbv)/, /(rbh|cb|lbh)/, /(lbv|lm|ltv)/], function (g, p) {
          g.test(f) && !D(a[p]) && (e[u[p]] = Math.max(e[u[p]], e.legend[(p + 1) % 2 ? "legendHeight" : "legendWidth"] + [1, -1, -1, 1][p] * b[p % 2 ? "x" : "y"] + x(b.margin, 12) + d[p]));
        });
      }, render: function render() {
        var a = this,
            d = a.chart,
            f = d.renderer,
            b = a.group,
            g,
            h,
            H,
            q,
            u = a.box,
            c = a.options,
            w = a.padding;a.itemX = w;a.itemY = a.initialItemY;a.offsetWidth = 0;a.lastItemY = 0;b || (a.group = b = f.g("legend").attr({ zIndex: 7 }).add(), a.contentGroup = f.g().attr({ zIndex: 1 }).add(b), a.scrollGroup = f.g().add(a.contentGroup));a.renderTitle();g = a.getAllItems();m(g, function (a, c) {
          return (a.options && a.options.legendIndex || 0) - (c.options && c.options.legendIndex || 0);
        });c.reversed && g.reverse();a.allItems = g;a.display = h = !!g.length;a.lastLineHeight = 0;n(g, function (c) {
          a.renderItem(c);
        });H = (c.width || a.offsetWidth) + w;q = a.lastItemY + a.lastLineHeight + a.titleHeight;q = a.handleOverflow(q);q += w;u || (a.box = u = f.rect().addClass("highcharts-legend-box").attr({ r: c.borderRadius }).add(b), u.isNew = !0);u.attr({ stroke: c.borderColor,
          "stroke-width": c.borderWidth || 0, fill: c.backgroundColor || "none" }).shadow(c.shadow);0 < H && 0 < q && (u[u.isNew ? "attr" : "animate"](u.crisp({ x: 0, y: 0, width: H, height: q }, u.strokeWidth())), u.isNew = !1);u[h ? "show" : "hide"]();a.legendWidth = H;a.legendHeight = q;n(g, function (c) {
          a.positionItem(c);
        });h && b.align(r(c, { width: H, height: q }), !0, "spacingBox");d.isResizing || this.positionCheckboxes();
      }, handleOverflow: function handleOverflow(a) {
        var d = this,
            e = this.chart,
            b = e.renderer,
            f = this.options,
            g = f.y,
            m = this.padding,
            e = e.spacingBox.height + ("top" === f.verticalAlign ? -g : g) - m,
            g = f.maxHeight,
            q,
            h = this.clipRect,
            c = f.navigation,
            w = x(c.animation, !0),
            r = c.arrowSize || 12,
            y = this.nav,
            G = this.pages,
            l,
            I = this.allItems,
            k = function k(a) {
          "number" === typeof a ? h.attr({ height: a }) : h && (d.clipRect = h.destroy(), d.contentGroup.clip());d.contentGroup.div && (d.contentGroup.div.style.clip = a ? "rect(" + m + "px,9999px," + (m + a) + "px,0)" : "auto");
        };"horizontal" !== f.layout || "middle" === f.verticalAlign || f.floating || (e /= 2);g && (e = Math.min(e, g));G.length = 0;a > e && !1 !== c.enabled ? (this.clipHeight = q = Math.max(e - 20 - this.titleHeight - m, 0), this.currentPage = x(this.currentPage, 1), this.fullHeight = a, n(I, function (a, c) {
          var b = a._legendItemPos[1];a = Math.round(a.legendItem.getBBox().height);var d = G.length;if (!d || b - G[d - 1] > q && (l || b) !== G[d - 1]) G.push(l || b), d++;c === I.length - 1 && b + a - G[d - 1] > q && G.push(b);b !== l && (l = b);
        }), h || (h = d.clipRect = b.clipRect(0, m, 9999, 0), d.contentGroup.clip(h)), k(q), y || (this.nav = y = b.g().attr({ zIndex: 1 }).add(this.group), this.up = b.symbol("triangle", 0, 0, r, r).on("click", function () {
          d.scroll(-1, w);
        }).add(y), this.pager = b.text("", 15, 10).addClass("highcharts-legend-navigation").css(c.style).add(y), this.down = b.symbol("triangle-down", 0, 0, r, r).on("click", function () {
          d.scroll(1, w);
        }).add(y)), d.scroll(0), a = e) : y && (k(), this.nav = y.destroy(), this.scrollGroup.attr({ translateY: 1 }), this.clipHeight = 0);return a;
      }, scroll: function scroll(a, d) {
        var e = this.pages,
            b = e.length;a = this.currentPage + a;var f = this.clipHeight,
            g = this.options.navigation,
            m = this.pager,
            q = this.padding;a > b && (a = b);0 < a && (void 0 !== d && t(d, this.chart), this.nav.attr({ translateX: q, translateY: f + this.padding + 7 + this.titleHeight, visibility: "visible" }), this.up.attr({ "class": 1 === a ? "highcharts-legend-nav-inactive" : "highcharts-legend-nav-active" }), m.attr({ text: a + "/" + b }), this.down.attr({ x: 18 + this.pager.getBBox().width, "class": a === b ? "highcharts-legend-nav-inactive" : "highcharts-legend-nav-active" }), this.up.attr({ fill: 1 === a ? g.inactiveColor : g.activeColor }).css({ cursor: 1 === a ? "default" : "pointer" }), this.down.attr({ fill: a === b ? g.inactiveColor : g.activeColor }).css({ cursor: a === b ? "default" : "pointer" }), d = -e[a - 1] + this.initialItemY, this.scrollGroup.animate({ translateY: d }), this.currentPage = a, this.positionCheckboxes(d));
      } };a.LegendSymbolMixin = { drawRectangle: function drawRectangle(a, d) {
        var e = a.symbolHeight,
            b = a.options.squareSymbol;d.legendSymbol = this.chart.renderer.rect(b ? (a.symbolWidth - e) / 2 : 0, a.baseline - e + 1, b ? e : a.symbolWidth, e, x(a.options.symbolRadius, e / 2)).addClass("highcharts-point").attr({ zIndex: 3 }).add(d.legendGroup);
      }, drawLineMarker: function drawLineMarker(a) {
        var d = this.options,
            e = d.marker,
            b = a.symbolWidth,
            f = a.symbolHeight,
            g = f / 2,
            m = this.chart.renderer,
            q = this.legendGroup;a = a.baseline - Math.round(.3 * a.fontMetrics.b);var h;h = { "stroke-width": d.lineWidth || 0 };d.dashStyle && (h.dashstyle = d.dashStyle);this.legendLine = m.path(["M", 0, a, "L", b, a]).addClass("highcharts-graph").attr(h).add(q);e && !1 !== e.enabled && (d = Math.min(x(e.radius, g), g), 0 === this.symbol.indexOf("url") && (e = r(e, { width: f, height: f }), d = 0), this.legendSymbol = e = m.symbol(this.symbol, b / 2 - d, a - d, 2 * d, 2 * d, e).addClass("highcharts-point").add(q), e.isMarker = !0);
      } };(/Trident\/7\.0/.test(f.navigator.userAgent) || h) && g(a.Legend.prototype, "positionItem", function (a, d) {
      var e = this,
          b = function b() {
        d._legendItemPos && a.call(e, d);
      };b();setTimeout(b);
    });
  })(L);(function (a) {
    var E = a.addEvent,
        B = a.animate,
        F = a.animObject,
        D = a.attr,
        n = a.doc,
        h = a.Axis,
        u = a.createElement,
        r = a.defaultOptions,
        x = a.discardElement,
        t = a.charts,
        m = a.css,
        f = a.defined,
        g = a.each,
        e = a.extend,
        d = a.find,
        p = a.fireEvent,
        b = a.getStyle,
        A = a.grep,
        v = a.isNumber,
        H = a.isObject,
        q = a.isString,
        J = a.Legend,
        c = a.marginNames,
        w = a.merge,
        K = a.objectEach,
        y = a.Pointer,
        G = a.pick,
        l = a.pInt,
        I = a.removeEvent,
        k = a.seriesTypes,
        z = a.splat,
        Q = a.svg,
        M = a.syncTimeout,
        N = a.win,
        P = a.Renderer,
        O = a.Chart = function () {
      this.getArgs.apply(this, arguments);
    };a.chart = function (a, c, b) {
      return new O(a, c, b);
    };e(O.prototype, { callbacks: [], getArgs: function getArgs() {
        var a = [].slice.call(arguments);if (q(a[0]) || a[0].nodeName) this.renderTo = a.shift();this.init(a[0], a[1]);
      }, init: function init(c, b) {
        var l,
            d,
            k = c.series,
            e = c.plotOptions || {};c.series = null;l = w(r, c);for (d in l.plotOptions) {
          l.plotOptions[d].tooltip = e[d] && w(e[d].tooltip) || void 0;
        }l.tooltip.userOptions = c.chart && c.chart.forExport && c.tooltip.userOptions || c.tooltip;l.series = c.series = k;this.userOptions = c;c = l.chart;d = c.events;this.margin = [];this.spacing = [];this.bounds = { h: {}, v: {} };this.callback = b;this.isResizing = 0;this.options = l;this.axes = [];this.series = [];this.hasCartesianSeries = c.showAxes;var f = this;f.index = t.length;t.push(f);a.chartCount++;d && K(d, function (a, c) {
          E(f, c, a);
        });f.xAxis = [];f.yAxis = [];f.pointCount = f.colorCounter = f.symbolCounter = 0;f.firstRender();
      }, initSeries: function initSeries(c) {
        var b = this.options.chart;
        (b = k[c.type || b.type || b.defaultSeriesType]) || a.error(17, !0);b = new b();b.init(this, c);return b;
      }, orderSeries: function orderSeries(a) {
        var c = this.series;for (a = a || 0; a < c.length; a++) {
          c[a] && (c[a].index = a, c[a].name = c[a].name || "Series " + (c[a].index + 1));
        }
      }, isInsidePlot: function isInsidePlot(a, c, b) {
        var l = b ? c : a;a = b ? a : c;return 0 <= l && l <= this.plotWidth && 0 <= a && a <= this.plotHeight;
      }, redraw: function redraw(c) {
        var b = this.axes,
            l = this.series,
            d = this.pointer,
            k = this.legend,
            f = this.isDirtyLegend,
            y,
            m,
            G = this.hasCartesianSeries,
            q = this.isDirtyBox,
            z,
            h = this.renderer,
            w = h.isHidden(),
            I = [];this.setResponsive && this.setResponsive(!1);a.setAnimation(c, this);w && this.temporaryDisplay();this.layOutTitles();for (c = l.length; c--;) {
          if (z = l[c], z.options.stacking && (y = !0, z.isDirty)) {
            m = !0;break;
          }
        }if (m) for (c = l.length; c--;) {
          z = l[c], z.options.stacking && (z.isDirty = !0);
        }g(l, function (a) {
          a.isDirty && "point" === a.options.legendType && (a.updateTotals && a.updateTotals(), f = !0);a.isDirtyData && p(a, "updatedData");
        });f && k.options.enabled && (k.render(), this.isDirtyLegend = !1);y && this.getStacks();G && g(b, function (a) {
          a.updateNames();
          a.setScale();
        });this.getMargins();G && (g(b, function (a) {
          a.isDirty && (q = !0);
        }), g(b, function (a) {
          var c = a.min + "," + a.max;a.extKey !== c && (a.extKey = c, I.push(function () {
            p(a, "afterSetExtremes", e(a.eventArgs, a.getExtremes()));delete a.eventArgs;
          }));(q || y) && a.redraw();
        }));q && this.drawChartBox();p(this, "predraw");g(l, function (a) {
          (q || a.isDirty) && a.visible && a.redraw();a.isDirtyData = !1;
        });d && d.reset(!0);h.draw();p(this, "redraw");p(this, "render");w && this.temporaryDisplay(!0);g(I, function (a) {
          a.call();
        });
      }, get: function get(a) {
        function c(c) {
          return c.id === a || c.options && c.options.id === a;
        }var b,
            l = this.series,
            k;b = d(this.axes, c) || d(this.series, c);for (k = 0; !b && k < l.length; k++) {
          b = d(l[k].points || [], c);
        }return b;
      }, getAxes: function getAxes() {
        var a = this,
            c = this.options,
            b = c.xAxis = z(c.xAxis || {}),
            c = c.yAxis = z(c.yAxis || {});g(b, function (a, c) {
          a.index = c;a.isX = !0;
        });g(c, function (a, c) {
          a.index = c;
        });b = b.concat(c);g(b, function (c) {
          new h(a, c);
        });
      }, getSelectedPoints: function getSelectedPoints() {
        var a = [];g(this.series, function (c) {
          a = a.concat(A(c.data || [], function (a) {
            return a.selected;
          }));
        });return a;
      }, getSelectedSeries: function getSelectedSeries() {
        return A(this.series, function (a) {
          return a.selected;
        });
      }, setTitle: function setTitle(a, c, b) {
        var l = this,
            d = l.options,
            k;k = d.title = w({ style: { color: "#333333", fontSize: d.isStock ? "16px" : "18px" } }, d.title, a);d = d.subtitle = w({ style: { color: "#666666" } }, d.subtitle, c);g([["title", a, k], ["subtitle", c, d]], function (a, c) {
          var b = a[0],
              d = l[b],
              k = a[1];a = a[2];d && k && (l[b] = d = d.destroy());a && a.text && !d && (l[b] = l.renderer.text(a.text, 0, 0, a.useHTML).attr({ align: a.align, "class": "highcharts-" + b, zIndex: a.zIndex || 4 }).add(), l[b].update = function (a) {
            l.setTitle(!c && a, c && a);
          }, l[b].css(a.style));
        });l.layOutTitles(b);
      }, layOutTitles: function layOutTitles(a) {
        var c = 0,
            b,
            l = this.renderer,
            d = this.spacingBox;g(["title", "subtitle"], function (a) {
          var b = this[a],
              k = this.options[a];a = "title" === a ? -3 : k.verticalAlign ? 0 : c + 2;var f;b && (f = k.style.fontSize, f = l.fontMetrics(f, b).b, b.css({ width: (k.width || d.width + k.widthAdjust) + "px" }).align(e({ y: a + f }, k), !1, "spacingBox"), k.floating || k.verticalAlign || (c = Math.ceil(c + b.getBBox(k.useHTML).height)));
        }, this);b = this.titleOffset !== c;this.titleOffset = c;!this.isDirtyBox && b && (this.isDirtyBox = b, this.hasRendered && G(a, !0) && this.isDirtyBox && this.redraw());
      }, getChartSize: function getChartSize() {
        var c = this.options.chart,
            l = c.width,
            c = c.height,
            d = this.renderTo;f(l) || (this.containerWidth = b(d, "width"));f(c) || (this.containerHeight = b(d, "height"));this.chartWidth = Math.max(0, l || this.containerWidth || 600);this.chartHeight = Math.max(0, a.relativeLength(c, this.chartWidth) || this.containerHeight || 400);
      }, temporaryDisplay: function temporaryDisplay(c) {
        var l = this.renderTo;if (c) for (; l && l.style;) {
          l.hcOrigStyle && (a.css(l, l.hcOrigStyle), delete l.hcOrigStyle), l = l.parentNode;
        } else for (; l && l.style;) {
          "none" === b(l, "display", !1) && (l.hcOrigStyle = { display: l.style.display, height: l.style.height, overflow: l.style.overflow }, c = { display: "block", overflow: "hidden" }, l !== this.renderTo && (c.height = 0), a.css(l, c), l.style.setProperty && l.style.setProperty("display", "block", "important")), l = l.parentNode;
        }
      }, setClassName: function setClassName(a) {
        this.container.className = "highcharts-container " + (a || "");
      }, getContainer: function getContainer() {
        var c,
            b = this.options,
            d = b.chart,
            k,
            f;c = this.renderTo;
        var g = a.uniqueKey(),
            y;c || (this.renderTo = c = d.renderTo);q(c) && (this.renderTo = c = n.getElementById(c));c || a.error(13, !0);k = l(D(c, "data-highcharts-chart"));v(k) && t[k] && t[k].hasRendered && t[k].destroy();D(c, "data-highcharts-chart", this.index);c.innerHTML = "";d.skipClone || c.offsetWidth || this.temporaryDisplay();this.getChartSize();k = this.chartWidth;f = this.chartHeight;y = e({ position: "relative", overflow: "hidden", width: k + "px", height: f + "px", textAlign: "left", lineHeight: "normal", zIndex: 0, "-webkit-tap-highlight-color": "rgba(0,0,0,0)" }, d.style);this.container = c = u("div", { id: g }, y, c);this._cursor = c.style.cursor;this.renderer = new (a[d.renderer] || P)(c, k, f, null, d.forExport, b.exporting && b.exporting.allowHTML);this.setClassName(d.className);this.renderer.setStyle(d.style);this.renderer.chartIndex = this.index;
      }, getMargins: function getMargins(a) {
        var c = this.spacing,
            b = this.margin,
            l = this.titleOffset;this.resetMargins();l && !f(b[0]) && (this.plotTop = Math.max(this.plotTop, l + this.options.title.margin + c[0]));this.legend.display && this.legend.adjustMargins(b, c);
        this.extraMargin && (this[this.extraMargin.type] = (this[this.extraMargin.type] || 0) + this.extraMargin.value);this.extraTopMargin && (this.plotTop += this.extraTopMargin);a || this.getAxisMargins();
      }, getAxisMargins: function getAxisMargins() {
        var a = this,
            b = a.axisOffset = [0, 0, 0, 0],
            l = a.margin;a.hasCartesianSeries && g(a.axes, function (a) {
          a.visible && a.getOffset();
        });g(c, function (c, d) {
          f(l[d]) || (a[c] += b[d]);
        });a.setChartSize();
      }, reflow: function reflow(a) {
        var c = this,
            l = c.options.chart,
            d = c.renderTo,
            k = f(l.width),
            e = l.width || b(d, "width"),
            l = l.height || b(d, "height"),
            d = a ? a.target : N;if (!k && !c.isPrinting && e && l && (d === N || d === n)) {
          if (e !== c.containerWidth || l !== c.containerHeight) clearTimeout(c.reflowTimeout), c.reflowTimeout = M(function () {
            c.container && c.setSize(void 0, void 0, !1);
          }, a ? 100 : 0);c.containerWidth = e;c.containerHeight = l;
        }
      }, initReflow: function initReflow() {
        var a = this,
            c;c = E(N, "resize", function (c) {
          a.reflow(c);
        });E(a, "destroy", c);
      }, setSize: function setSize(c, b, l) {
        var d = this,
            k = d.renderer;d.isResizing += 1;a.setAnimation(l, d);d.oldChartHeight = d.chartHeight;d.oldChartWidth = d.chartWidth;
        void 0 !== c && (d.options.chart.width = c);void 0 !== b && (d.options.chart.height = b);d.getChartSize();c = k.globalAnimation;(c ? B : m)(d.container, { width: d.chartWidth + "px", height: d.chartHeight + "px" }, c);d.setChartSize(!0);k.setSize(d.chartWidth, d.chartHeight, l);g(d.axes, function (a) {
          a.isDirty = !0;a.setScale();
        });d.isDirtyLegend = !0;d.isDirtyBox = !0;d.layOutTitles();d.getMargins();d.redraw(l);d.oldChartHeight = null;p(d, "resize");M(function () {
          d && p(d, "endResize", null, function () {
            --d.isResizing;
          });
        }, F(c).duration);
      }, setChartSize: function setChartSize(a) {
        function c(a) {
          a = y[a] || 0;return Math.max(z || a, a) / 2;
        }var b = this.inverted,
            l = this.renderer,
            d = this.chartWidth,
            k = this.chartHeight,
            f = this.options.chart,
            e = this.spacing,
            y = this.clipOffset,
            m,
            p,
            G,
            q,
            z;this.plotLeft = m = Math.round(this.plotLeft);this.plotTop = p = Math.round(this.plotTop);this.plotWidth = G = Math.max(0, Math.round(d - m - this.marginRight));this.plotHeight = q = Math.max(0, Math.round(k - p - this.marginBottom));this.plotSizeX = b ? q : G;this.plotSizeY = b ? G : q;this.plotBorderWidth = f.plotBorderWidth || 0;this.spacingBox = l.spacingBox = { x: e[3], y: e[0],
          width: d - e[3] - e[1], height: k - e[0] - e[2] };this.plotBox = l.plotBox = { x: m, y: p, width: G, height: q };z = 2 * Math.floor(this.plotBorderWidth / 2);b = Math.ceil(c(3));l = Math.ceil(c(0));this.clipBox = { x: b, y: l, width: Math.floor(this.plotSizeX - c(1) - b), height: Math.max(0, Math.floor(this.plotSizeY - c(2) - l)) };a || g(this.axes, function (a) {
          a.setAxisSize();a.setAxisTranslation();
        });
      }, resetMargins: function resetMargins() {
        var a = this,
            b = a.options.chart;g(["margin", "spacing"], function (c) {
          var l = b[c],
              d = H(l) ? l : [l, l, l, l];g(["Top", "Right", "Bottom", "Left"], function (l, k) {
            a[c][k] = G(b[c + l], d[k]);
          });
        });g(c, function (c, b) {
          a[c] = G(a.margin[b], a.spacing[b]);
        });a.axisOffset = [0, 0, 0, 0];a.clipOffset = [];
      }, drawChartBox: function drawChartBox() {
        var a = this.options.chart,
            c = this.renderer,
            b = this.chartWidth,
            l = this.chartHeight,
            d = this.chartBackground,
            k = this.plotBackground,
            e = this.plotBorder,
            f,
            g = this.plotBGImage,
            y = a.backgroundColor,
            m = a.plotBackgroundColor,
            p = a.plotBackgroundImage,
            G,
            q = this.plotLeft,
            z = this.plotTop,
            h = this.plotWidth,
            w = this.plotHeight,
            I = this.plotBox,
            v = this.clipRect,
            n = this.clipBox,
            r = "animate";
        d || (this.chartBackground = d = c.rect().addClass("highcharts-background").add(), r = "attr");f = a.borderWidth || 0;G = f + (a.shadow ? 8 : 0);y = { fill: y || "none" };if (f || d["stroke-width"]) y.stroke = a.borderColor, y["stroke-width"] = f;d.attr(y).shadow(a.shadow);d[r]({ x: G / 2, y: G / 2, width: b - G - f % 2, height: l - G - f % 2, r: a.borderRadius });r = "animate";k || (r = "attr", this.plotBackground = k = c.rect().addClass("highcharts-plot-background").add());k[r](I);k.attr({ fill: m || "none" }).shadow(a.plotShadow);p && (g ? g.animate(I) : this.plotBGImage = c.image(p, q, z, h, w).add());v ? v.animate({ width: n.width, height: n.height }) : this.clipRect = c.clipRect(n);r = "animate";e || (r = "attr", this.plotBorder = e = c.rect().addClass("highcharts-plot-border").attr({ zIndex: 1 }).add());e.attr({ stroke: a.plotBorderColor, "stroke-width": a.plotBorderWidth || 0, fill: "none" });e[r](e.crisp({ x: q, y: z, width: h, height: w }, -e.strokeWidth()));this.isDirtyBox = !1;
      }, propFromSeries: function propFromSeries() {
        var a = this,
            c = a.options.chart,
            b,
            l = a.options.series,
            d,
            e;g(["inverted", "angular", "polar"], function (f) {
          b = k[c.type || c.defaultSeriesType];
          e = c[f] || b && b.prototype[f];for (d = l && l.length; !e && d--;) {
            (b = k[l[d].type]) && b.prototype[f] && (e = !0);
          }a[f] = e;
        });
      }, linkSeries: function linkSeries() {
        var a = this,
            c = a.series;g(c, function (a) {
          a.linkedSeries.length = 0;
        });g(c, function (c) {
          var b = c.options.linkedTo;q(b) && (b = ":previous" === b ? a.series[c.index - 1] : a.get(b)) && b.linkedParent !== c && (b.linkedSeries.push(c), c.linkedParent = b, c.visible = G(c.options.visible, b.options.visible, c.visible));
        });
      }, renderSeries: function renderSeries() {
        g(this.series, function (a) {
          a.translate();a.render();
        });
      }, renderLabels: function renderLabels() {
        var a = this,
            c = a.options.labels;c.items && g(c.items, function (b) {
          var d = e(c.style, b.style),
              k = l(d.left) + a.plotLeft,
              f = l(d.top) + a.plotTop + 12;delete d.left;delete d.top;a.renderer.text(b.html, k, f).attr({ zIndex: 2 }).css(d).add();
        });
      }, render: function render() {
        var a = this.axes,
            c = this.renderer,
            b = this.options,
            l,
            d,
            k;this.setTitle();this.legend = new J(this, b.legend);this.getStacks && this.getStacks();this.getMargins(!0);this.setChartSize();b = this.plotWidth;l = this.plotHeight -= 21;g(a, function (a) {
          a.setScale();
        });this.getAxisMargins();d = 1.1 < b / this.plotWidth;k = 1.05 < l / this.plotHeight;if (d || k) g(a, function (a) {
          (a.horiz && d || !a.horiz && k) && a.setTickInterval(!0);
        }), this.getMargins();this.drawChartBox();this.hasCartesianSeries && g(a, function (a) {
          a.visible && a.render();
        });this.seriesGroup || (this.seriesGroup = c.g("series-group").attr({ zIndex: 3 }).add());this.renderSeries();this.renderLabels();this.addCredits();this.setResponsive && this.setResponsive();this.hasRendered = !0;
      }, addCredits: function addCredits(a) {
        var c = this;a = w(!0, this.options.credits, a);a.enabled && !this.credits && (this.credits = this.renderer.text(a.text + (this.mapCredits || ""), 0, 0).addClass("highcharts-credits").on("click", function () {
          a.href && (N.location.href = a.href);
        }).attr({ align: a.position.align, zIndex: 8 }).css(a.style).add().align(a.position), this.credits.update = function (a) {
          c.credits = c.credits.destroy();c.addCredits(a);
        });
      }, destroy: function destroy() {
        var c = this,
            b = c.axes,
            d = c.series,
            l = c.container,
            k,
            f = l && l.parentNode;p(c, "destroy");c.renderer.forExport ? a.erase(t, c) : t[c.index] = void 0;a.chartCount--;c.renderTo.removeAttribute("data-highcharts-chart");
        I(c);for (k = b.length; k--;) {
          b[k] = b[k].destroy();
        }this.scroller && this.scroller.destroy && this.scroller.destroy();for (k = d.length; k--;) {
          d[k] = d[k].destroy();
        }g("title subtitle chartBackground plotBackground plotBGImage plotBorder seriesGroup clipRect credits pointer rangeSelector legend resetZoomButton tooltip renderer".split(" "), function (a) {
          var b = c[a];b && b.destroy && (c[a] = b.destroy());
        });l && (l.innerHTML = "", I(l), f && x(l));K(c, function (a, b) {
          delete c[b];
        });
      }, isReadyToRender: function isReadyToRender() {
        var a = this;return Q || N != N.top || "complete" === n.readyState ? !0 : (n.attachEvent("onreadystatechange", function () {
          n.detachEvent("onreadystatechange", a.firstRender);"complete" === n.readyState && a.firstRender();
        }), !1);
      }, firstRender: function firstRender() {
        var a = this,
            c = a.options;if (a.isReadyToRender()) {
          a.getContainer();p(a, "init");a.resetMargins();a.setChartSize();a.propFromSeries();a.getAxes();g(c.series || [], function (c) {
            a.initSeries(c);
          });a.linkSeries();p(a, "beforeRender");y && (a.pointer = new y(a, c));a.render();if (!a.renderer.imgCount && a.onload) a.onload();
          a.temporaryDisplay(!0);
        }
      }, onload: function onload() {
        g([this.callback].concat(this.callbacks), function (a) {
          a && void 0 !== this.index && a.apply(this, [this]);
        }, this);p(this, "load");p(this, "render");f(this.index) && !1 !== this.options.chart.reflow && this.initReflow();this.onload = null;
      } });
  })(L);(function (a) {
    var E,
        B = a.each,
        F = a.extend,
        D = a.erase,
        n = a.fireEvent,
        h = a.format,
        u = a.isArray,
        r = a.isNumber,
        x = a.pick,
        t = a.removeEvent;a.Point = E = function E() {};a.Point.prototype = { init: function init(a, f, g) {
        this.series = a;this.color = a.color;this.applyOptions(f, g);a.options.colorByPoint ? (f = a.options.colors || a.chart.options.colors, this.color = this.color || f[a.colorCounter], f = f.length, g = a.colorCounter, a.colorCounter++, a.colorCounter === f && (a.colorCounter = 0)) : g = a.colorIndex;this.colorIndex = x(this.colorIndex, g);a.chart.pointCount++;return this;
      }, applyOptions: function applyOptions(a, f) {
        var g = this.series,
            e = g.options.pointValKey || g.pointValKey;a = E.prototype.optionsToObject.call(this, a);F(this, a);this.options = this.options ? F(this.options, a) : a;a.group && delete this.group;e && (this.y = this[e]);this.isNull = x(this.isValid && !this.isValid(), null === this.x || !r(this.y, !0));this.selected && (this.state = "select");"name" in this && void 0 === f && g.xAxis && g.xAxis.hasNames && (this.x = g.xAxis.nameToX(this));void 0 === this.x && g && (this.x = void 0 === f ? g.autoIncrement(this) : f);return this;
      }, optionsToObject: function optionsToObject(a) {
        var f = {},
            g = this.series,
            e = g.options.keys,
            d = e || g.pointArrayMap || ["y"],
            p = d.length,
            b = 0,
            m = 0;if (r(a) || null === a) f[d[0]] = a;else if (u(a)) for (!e && a.length > p && (g = _typeof(a[0]), "string" === g ? f.name = a[0] : "number" === g && (f.x = a[0]), b++); m < p;) {
          e && void 0 === a[b] || (f[d[m]] = a[b]), b++, m++;
        } else "object" === (typeof a === "undefined" ? "undefined" : _typeof(a)) && (f = a, a.dataLabels && (g._hasPointLabels = !0), a.marker && (g._hasPointMarkers = !0));return f;
      }, getClassName: function getClassName() {
        return "highcharts-point" + (this.selected ? " highcharts-point-select" : "") + (this.negative ? " highcharts-negative" : "") + (this.isNull ? " highcharts-null-point" : "") + (void 0 !== this.colorIndex ? " highcharts-color-" + this.colorIndex : "") + (this.options.className ? " " + this.options.className : "") + (this.zone && this.zone.className ? " " + this.zone.className.replace("highcharts-negative", "") : "");
      }, getZone: function getZone() {
        var a = this.series,
            f = a.zones,
            a = a.zoneAxis || "y",
            g = 0,
            e;for (e = f[g]; this[a] >= e.value;) {
          e = f[++g];
        }e && e.color && !this.options.color && (this.color = e.color);return e;
      }, destroy: function destroy() {
        var a = this.series.chart,
            f = a.hoverPoints,
            g;a.pointCount--;f && (this.setState(), D(f, this), f.length || (a.hoverPoints = null));if (this === a.hoverPoint) this.onMouseOut();if (this.graphic || this.dataLabel) t(this), this.destroyElements();this.legendItem && a.legend.destroyItem(this);
        for (g in this) {
          this[g] = null;
        }
      }, destroyElements: function destroyElements() {
        for (var a = ["graphic", "dataLabel", "dataLabelUpper", "connector", "shadowGroup"], f, g = 6; g--;) {
          f = a[g], this[f] && (this[f] = this[f].destroy());
        }
      }, getLabelConfig: function getLabelConfig() {
        return { x: this.category, y: this.y, color: this.color, colorIndex: this.colorIndex, key: this.name || this.category, series: this.series, point: this, percentage: this.percentage, total: this.total || this.stackTotal };
      }, tooltipFormatter: function tooltipFormatter(a) {
        var f = this.series,
            g = f.tooltipOptions,
            e = x(g.valueDecimals, ""),
            d = g.valuePrefix || "",
            p = g.valueSuffix || "";B(f.pointArrayMap || ["y"], function (b) {
          b = "{point." + b;if (d || p) a = a.replace(b + "}", d + b + "}" + p);a = a.replace(b + "}", b + ":,." + e + "f}");
        });return h(a, { point: this, series: this.series });
      }, firePointEvent: function firePointEvent(a, f, g) {
        var e = this,
            d = this.series.options;(d.point.events[a] || e.options && e.options.events && e.options.events[a]) && this.importEvents();"click" === a && d.allowPointSelect && (g = function g(a) {
          e.select && e.select(null, a.ctrlKey || a.metaKey || a.shiftKey);
        });n(this, a, f, g);
      }, visible: !0 };
  })(L);
  (function (a) {
    var E = a.addEvent,
        B = a.animObject,
        F = a.arrayMax,
        D = a.arrayMin,
        n = a.correctFloat,
        h = a.Date,
        u = a.defaultOptions,
        r = a.defaultPlotOptions,
        x = a.defined,
        t = a.each,
        m = a.erase,
        f = a.extend,
        g = a.fireEvent,
        e = a.grep,
        d = a.isArray,
        p = a.isNumber,
        b = a.isString,
        A = a.merge,
        v = a.objectEach,
        H = a.pick,
        q = a.removeEvent,
        J = a.splat,
        c = a.SVGElement,
        w = a.syncTimeout,
        K = a.win;a.Series = a.seriesType("line", null, { lineWidth: 2, allowPointSelect: !1, showCheckbox: !1, animation: { duration: 1E3 }, events: {}, marker: { lineWidth: 0, lineColor: "#ffffff", radius: 4,
        states: { hover: { animation: { duration: 50 }, enabled: !0, radiusPlus: 2, lineWidthPlus: 1 }, select: { fillColor: "#cccccc", lineColor: "#000000", lineWidth: 2 } } }, point: { events: {} }, dataLabels: { align: "center", formatter: function formatter() {
          return null === this.y ? "" : a.numberFormat(this.y, -1);
        }, style: { fontSize: "11px", fontWeight: "bold", color: "contrast", textOutline: "1px contrast" }, verticalAlign: "bottom", x: 0, y: 0, padding: 5 }, cropThreshold: 300, pointRange: 0, softThreshold: !0, states: { hover: { animation: { duration: 50 }, lineWidthPlus: 1, marker: {},
          halo: { size: 10, opacity: .25 } }, select: { marker: {} } }, stickyTracking: !0, turboThreshold: 1E3, findNearestPointBy: "x" }, { isCartesian: !0, pointClass: a.Point, sorted: !0, requireSorting: !0, directTouch: !1, axisTypes: ["xAxis", "yAxis"], colorCounter: 0, parallelArrays: ["x", "y"], coll: "series", init: function init(a, c) {
        var b = this,
            d,
            k = a.series,
            e;b.chart = a;b.options = c = b.setOptions(c);b.linkedSeries = [];b.bindAxes();f(b, { name: c.name, state: "", visible: !1 !== c.visible, selected: !0 === c.selected });d = c.events;v(d, function (a, c) {
          E(b, c, a);
        });if (d && d.click || c.point && c.point.events && c.point.events.click || c.allowPointSelect) a.runTrackerClick = !0;b.getColor();b.getSymbol();t(b.parallelArrays, function (a) {
          b[a + "Data"] = [];
        });b.setData(c.data, !1);b.isCartesian && (a.hasCartesianSeries = !0);k.length && (e = k[k.length - 1]);b._i = H(e && e._i, -1) + 1;a.orderSeries(this.insert(k));
      }, insert: function insert(a) {
        var c = this.options.index,
            b;if (p(c)) {
          for (b = a.length; b--;) {
            if (c >= H(a[b].options.index, a[b]._i)) {
              a.splice(b + 1, 0, this);break;
            }
          }-1 === b && a.unshift(this);b += 1;
        } else a.push(this);return H(b, a.length - 1);
      }, bindAxes: function bindAxes() {
        var c = this,
            b = c.options,
            d = c.chart,
            e;t(c.axisTypes || [], function (l) {
          t(d[l], function (a) {
            e = a.options;if (b[l] === e.index || void 0 !== b[l] && b[l] === e.id || void 0 === b[l] && 0 === e.index) c.insert(a.series), c[l] = a, a.isDirty = !0;
          });c[l] || c.optionalAxis === l || a.error(18, !0);
        });
      }, updateParallelArrays: function updateParallelArrays(a, c) {
        var b = a.series,
            d = arguments,
            k = p(c) ? function (d) {
          var l = "y" === d && b.toYData ? b.toYData(a) : a[d];b[d + "Data"][c] = l;
        } : function (a) {
          Array.prototype[c].apply(b[a + "Data"], Array.prototype.slice.call(d, 2));
        };t(b.parallelArrays, k);
      }, autoIncrement: function autoIncrement() {
        var a = this.options,
            c = this.xIncrement,
            b,
            d = a.pointIntervalUnit,
            c = H(c, a.pointStart, 0);this.pointInterval = b = H(this.pointInterval, a.pointInterval, 1);d && (a = new h(c), "day" === d ? a = +a[h.hcSetDate](a[h.hcGetDate]() + b) : "month" === d ? a = +a[h.hcSetMonth](a[h.hcGetMonth]() + b) : "year" === d && (a = +a[h.hcSetFullYear](a[h.hcGetFullYear]() + b)), b = a - c);this.xIncrement = c + b;return c;
      }, setOptions: function setOptions(a) {
        var c = this.chart,
            b = c.options,
            d = b.plotOptions,
            k = (c.userOptions || {}).plotOptions || {},
            e = d[this.type];this.userOptions = a;c = A(e, d.series, a);this.tooltipOptions = A(u.tooltip, u.plotOptions.series && u.plotOptions.series.tooltip, u.plotOptions[this.type].tooltip, b.tooltip.userOptions, d.series && d.series.tooltip, d[this.type].tooltip, a.tooltip);this.stickyTracking = H(a.stickyTracking, k[this.type] && k[this.type].stickyTracking, k.series && k.series.stickyTracking, this.tooltipOptions.shared && !this.noSharedTooltip ? !0 : c.stickyTracking);null === e.marker && delete c.marker;this.zoneAxis = c.zoneAxis;a = this.zones = (c.zones || []).slice();!c.negativeColor && !c.negativeFillColor || c.zones || a.push({ value: c[this.zoneAxis + "Threshold"] || c.threshold || 0, className: "highcharts-negative", color: c.negativeColor, fillColor: c.negativeFillColor });a.length && x(a[a.length - 1].value) && a.push({ color: this.color, fillColor: this.fillColor });return c;
      }, getCyclic: function getCyclic(a, c, b) {
        var d,
            l = this.chart,
            e = this.userOptions,
            f = a + "Index",
            g = a + "Counter",
            y = b ? b.length : H(l.options.chart[a + "Count"], l[a + "Count"]);c || (d = H(e[f], e["_" + f]), x(d) || (l.series.length || (l[g] = 0), e["_" + f] = d = l[g] % y, l[g] += 1), b && (c = b[d]));void 0 !== d && (this[f] = d);this[a] = c;
      }, getColor: function getColor() {
        this.options.colorByPoint ? this.options.color = null : this.getCyclic("color", this.options.color || r[this.type].color, this.chart.options.colors);
      }, getSymbol: function getSymbol() {
        this.getCyclic("symbol", this.options.marker.symbol, this.chart.options.symbols);
      }, drawLegendSymbol: a.LegendSymbolMixin.drawLineMarker, setData: function setData(c, e, l, f) {
        var k = this,
            g = k.points,
            y = g && g.length || 0,
            q,
            m = k.options,
            h = k.chart,
            w = null,
            G = k.xAxis,
            I = m.turboThreshold,
            v = this.xData,
            n = this.yData,
            r = (q = k.pointArrayMap) && q.length;c = c || [];q = c.length;e = H(e, !0);if (!1 !== f && q && y === q && !k.cropped && !k.hasGroupedData && k.visible) t(c, function (a, c) {
          g[c].update && a !== m.data[c] && g[c].update(a, !1, null, !1);
        });else {
          k.xIncrement = null;k.colorCounter = 0;t(this.parallelArrays, function (a) {
            k[a + "Data"].length = 0;
          });if (I && q > I) {
            for (l = 0; null === w && l < q;) {
              w = c[l], l++;
            }if (p(w)) for (l = 0; l < q; l++) {
              v[l] = this.autoIncrement(), n[l] = c[l];
            } else if (d(w)) {
              if (r) for (l = 0; l < q; l++) {
                w = c[l], v[l] = w[0], n[l] = w.slice(1, r + 1);
              } else for (l = 0; l < q; l++) {
                w = c[l], v[l] = w[0], n[l] = w[1];
              }
            } else a.error(12);
          } else for (l = 0; l < q; l++) {
            void 0 !== c[l] && (w = { series: k }, k.pointClass.prototype.applyOptions.apply(w, [c[l]]), k.updateParallelArrays(w, l));
          }b(n[0]) && a.error(14, !0);k.data = [];k.options.data = k.userOptions.data = c;for (l = y; l--;) {
            g[l] && g[l].destroy && g[l].destroy();
          }G && (G.minRange = G.userMinRange);k.isDirty = h.isDirtyBox = !0;k.isDirtyData = !!g;l = !1;
        }"point" === m.legendType && (this.processData(), this.generatePoints());e && h.redraw(l);
      }, processData: function processData(c) {
        var b = this.xData,
            d = this.yData,
            e = b.length,
            k;k = 0;var f,
            g,
            y = this.xAxis,
            p,
            q = this.options;p = q.cropThreshold;var m = this.getExtremesFromAll || q.getExtremesFromAll,
            w = this.isCartesian,
            q = y && y.val2lin,
            h = y && y.isLog,
            v,
            n;if (w && !this.isDirty && !y.isDirty && !this.yAxis.isDirty && !c) return !1;y && (c = y.getExtremes(), v = c.min, n = c.max);if (w && this.sorted && !m && (!p || e > p || this.forceCrop)) if (b[e - 1] < v || b[0] > n) b = [], d = [];else if (b[0] < v || b[e - 1] > n) k = this.cropData(this.xData, this.yData, v, n), b = k.xData, d = k.yData, k = k.start, f = !0;for (p = b.length || 1; --p;) {
          e = h ? q(b[p]) - q(b[p - 1]) : b[p] - b[p - 1], 0 < e && (void 0 === g || e < g) ? g = e : 0 > e && this.requireSorting && a.error(15);
        }this.cropped = f;this.cropStart = k;this.processedXData = b;this.processedYData = d;this.closestPointRange = g;
      }, cropData: function cropData(a, c, b, d) {
        var l = a.length,
            e = 0,
            f = l,
            g = H(this.cropShoulder, 1),
            y;for (y = 0; y < l; y++) {
          if (a[y] >= b) {
            e = Math.max(0, y - g);break;
          }
        }for (b = y; b < l; b++) {
          if (a[b] > d) {
            f = b + g;break;
          }
        }return { xData: a.slice(e, f), yData: c.slice(e, f), start: e, end: f };
      }, generatePoints: function generatePoints() {
        var a = this.options,
            c = a.data,
            b = this.data,
            d,
            k = this.processedXData,
            e = this.processedYData,
            f = this.pointClass,
            g = k.length,
            p = this.cropStart || 0,
            q,
            m = this.hasGroupedData,
            a = a.keys,
            w,
            h = [],
            v;b || m || (b = [], b.length = c.length, b = this.data = b);a && m && (this.options.keys = !1);for (v = 0; v < g; v++) {
          q = p + v, m ? (w = new f().init(this, [k[v]].concat(J(e[v]))), w.dataGroup = this.groupMap[v]) : (w = b[q]) || void 0 === c[q] || (b[q] = w = new f().init(this, c[q], k[v])), w && (w.index = q, h[v] = w);
        }this.options.keys = a;if (b && (g !== (d = b.length) || m)) for (v = 0; v < d; v++) {
          v !== p || m || (v += g), b[v] && (b[v].destroyElements(), b[v].plotX = void 0);
        }this.data = b;this.points = h;
      }, getExtremes: function getExtremes(a) {
        var c = this.yAxis,
            b = this.processedXData,
            e,
            k = [],
            f = 0;e = this.xAxis.getExtremes();var g = e.min,
            y = e.max,
            q,
            m,
            w,
            h;a = a || this.stackedYData || this.processedYData || [];e = a.length;for (h = 0; h < e; h++) {
          if (m = b[h], w = a[h], q = (p(w, !0) || d(w)) && (!c.positiveValuesOnly || w.length || 0 < w), m = this.getExtremesFromAll || this.options.getExtremesFromAll || this.cropped || (b[h] || m) >= g && (b[h] || m) <= y, q && m) if (q = w.length) for (; q--;) {
            null !== w[q] && (k[f++] = w[q]);
          } else k[f++] = w;
        }this.dataMin = D(k);this.dataMax = F(k);
      }, translate: function translate() {
        this.processedXData || this.processData();this.generatePoints();var a = this.options,
            c = a.stacking,
            b = this.xAxis,
            d = b.categories,
            k = this.yAxis,
            e = this.points,
            f = e.length,
            g = !!this.modifyValue,
            q = a.pointPlacement,
            m = "between" === q || p(q),
            w = a.threshold,
            h = a.startFromThreshold ? w : 0,
            v,
            r,
            K,
            A,
            u = Number.MAX_VALUE;"between" === q && (q = .5);p(q) && (q *= H(a.pointRange || b.pointRange));for (a = 0; a < f; a++) {
          var t = e[a],
              J = t.x,
              B = t.y;r = t.low;var D = c && k.stacks[(this.negStacks && B < (h ? 0 : w) ? "-" : "") + this.stackKey],
              E;k.positiveValuesOnly && null !== B && 0 >= B && (t.isNull = !0);t.plotX = v = n(Math.min(Math.max(-1E5, b.translate(J, 0, 0, 0, 1, q, "flags" === this.type)), 1E5));c && this.visible && !t.isNull && D && D[J] && (A = this.getStackIndicator(A, J, this.index), E = D[J], B = E.points[A.key], r = B[0], B = B[1], r === h && A.key === D[J].base && (r = H(w, k.min)), k.positiveValuesOnly && 0 >= r && (r = null), t.total = t.stackTotal = E.total, t.percentage = E.total && t.y / E.total * 100, t.stackY = B, E.setOffset(this.pointXOffset || 0, this.barW || 0));t.yBottom = x(r) ? k.translate(r, 0, 1, 0, 1) : null;g && (B = this.modifyValue(B, t));t.plotY = r = "number" === typeof B && Infinity !== B ? Math.min(Math.max(-1E5, k.translate(B, 0, 1, 0, 1)), 1E5) : void 0;t.isInside = void 0 !== r && 0 <= r && r <= k.len && 0 <= v && v <= b.len;t.clientX = m ? n(b.translate(J, 0, 0, 0, 1, q)) : v;t.negative = t.y < (w || 0);t.category = d && void 0 !== d[t.x] ? d[t.x] : t.x;t.isNull || (void 0 !== K && (u = Math.min(u, Math.abs(v - K))), K = v);t.zone = this.zones.length && t.getZone();
        }this.closestPointRangePx = u;
      }, getValidPoints: function getValidPoints(a, c) {
        var b = this.chart;return e(a || this.points || [], function (a) {
          return c && !b.isInsidePlot(a.plotX, a.plotY, b.inverted) ? !1 : !a.isNull;
        });
      }, setClip: function setClip(a) {
        var c = this.chart,
            b = this.options,
            d = c.renderer,
            k = c.inverted,
            e = this.clipBox,
            f = e || c.clipBox,
            g = this.sharedClipKey || ["_sharedClip", a && a.duration, a && a.easing, f.height, b.xAxis, b.yAxis].join(),
            p = c[g],
            q = c[g + "m"];p || (a && (f.width = 0, c[g + "m"] = q = d.clipRect(-99, k ? -c.plotLeft : -c.plotTop, 99, k ? c.chartWidth : c.chartHeight)), c[g] = p = d.clipRect(f), p.count = { length: 0 });a && !p.count[this.index] && (p.count[this.index] = !0, p.count.length += 1);!1 !== b.clip && (this.group.clip(a || e ? p : c.clipRect), this.markerGroup.clip(q), this.sharedClipKey = g);a || (p.count[this.index] && (delete p.count[this.index], --p.count.length), 0 === p.count.length && g && c[g] && (e || (c[g] = c[g].destroy()), c[g + "m"] && (c[g + "m"] = c[g + "m"].destroy())));
      }, animate: function animate(a) {
        var c = this.chart,
            b = B(this.options.animation),
            d;a ? this.setClip(b) : (d = this.sharedClipKey, (a = c[d]) && a.animate({ width: c.plotSizeX }, b), c[d + "m"] && c[d + "m"].animate({ width: c.plotSizeX + 99 }, b), this.animate = null);
      }, afterAnimate: function afterAnimate() {
        this.setClip();
        g(this, "afterAnimate");
      }, drawPoints: function drawPoints() {
        var a = this.points,
            c = this.chart,
            b,
            d,
            k,
            e,
            f = this.options.marker,
            g,
            q,
            m,
            w,
            h = this[this.specialGroup] || this.markerGroup,
            v = H(f.enabled, this.xAxis.isRadial ? !0 : null, this.closestPointRangePx >= 2 * f.radius);if (!1 !== f.enabled || this._hasPointMarkers) for (d = 0; d < a.length; d++) {
          k = a[d], b = k.plotY, e = k.graphic, g = k.marker || {}, q = !!k.marker, m = v && void 0 === g.enabled || g.enabled, w = k.isInside, m && p(b) && null !== k.y ? (b = H(g.symbol, this.symbol), k.hasImage = 0 === b.indexOf("url"), m = this.markerAttribs(k, k.selected && "select"), e ? e[w ? "show" : "hide"](!0).animate(m) : w && (0 < m.width || k.hasImage) && (k.graphic = e = c.renderer.symbol(b, m.x, m.y, m.width, m.height, q ? g : f).add(h)), e && e.attr(this.pointAttribs(k, k.selected && "select")), e && e.addClass(k.getClassName(), !0)) : e && (k.graphic = e.destroy());
        }
      }, markerAttribs: function markerAttribs(a, c) {
        var b = this.options.marker,
            d = a.marker || {},
            k = H(d.radius, b.radius);c && (b = b.states[c], c = d.states && d.states[c], k = H(c && c.radius, b && b.radius, k + (b && b.radiusPlus || 0)));a.hasImage && (k = 0);a = { x: Math.floor(a.plotX) - k, y: a.plotY - k };k && (a.width = a.height = 2 * k);return a;
      }, pointAttribs: function pointAttribs(a, c) {
        var b = this.options.marker,
            d = a && a.options,
            k = d && d.marker || {},
            e = this.color,
            f = d && d.color,
            g = a && a.color,
            d = H(k.lineWidth, b.lineWidth);a = a && a.zone && a.zone.color;e = f || a || g || e;a = k.fillColor || b.fillColor || e;e = k.lineColor || b.lineColor || e;c && (b = b.states[c], c = k.states && k.states[c] || {}, d = H(c.lineWidth, b.lineWidth, d + H(c.lineWidthPlus, b.lineWidthPlus, 0)), a = c.fillColor || b.fillColor || a, e = c.lineColor || b.lineColor || e);return { stroke: e, "stroke-width": d,
          fill: a };
      }, destroy: function destroy() {
        var a = this,
            b = a.chart,
            d = /AppleWebKit\/533/.test(K.navigator.userAgent),
            e,
            k,
            f = a.data || [],
            p,
            w;g(a, "destroy");q(a);t(a.axisTypes || [], function (c) {
          (w = a[c]) && w.series && (m(w.series, a), w.isDirty = w.forceRedraw = !0);
        });a.legendItem && a.chart.legend.destroyItem(a);for (k = f.length; k--;) {
          (p = f[k]) && p.destroy && p.destroy();
        }a.points = null;clearTimeout(a.animationTimeout);v(a, function (a, b) {
          a instanceof c && !a.survive && (e = d && "group" === b ? "hide" : "destroy", a[e]());
        });b.hoverSeries === a && (b.hoverSeries = null);m(b.series, a);b.orderSeries();v(a, function (c, b) {
          delete a[b];
        });
      }, getGraphPath: function getGraphPath(a, c, b) {
        var d = this,
            l = d.options,
            e = l.step,
            f,
            g = [],
            p = [],
            q;a = a || d.points;(f = a.reversed) && a.reverse();(e = { right: 1, center: 2 }[e] || e && 3) && f && (e = 4 - e);!l.connectNulls || c || b || (a = this.getValidPoints(a));t(a, function (k, f) {
          var m = k.plotX,
              w = k.plotY,
              h = a[f - 1];(k.leftCliff || h && h.rightCliff) && !b && (q = !0);k.isNull && !x(c) && 0 < f ? q = !l.connectNulls : k.isNull && !c ? q = !0 : (0 === f || q ? f = ["M", k.plotX, k.plotY] : d.getPointSpline ? f = d.getPointSpline(a, k, f) : e ? (f = 1 === e ? ["L", h.plotX, w] : 2 === e ? ["L", (h.plotX + m) / 2, h.plotY, "L", (h.plotX + m) / 2, w] : ["L", m, h.plotY], f.push("L", m, w)) : f = ["L", m, w], p.push(k.x), e && p.push(k.x), g.push.apply(g, f), q = !1);
        });g.xMap = p;return d.graphPath = g;
      }, drawGraph: function drawGraph() {
        var a = this,
            c = this.options,
            b = (this.gappedPath || this.getGraphPath).call(this),
            d = [["graph", "highcharts-graph", c.lineColor || this.color, c.dashStyle]];t(this.zones, function (b, l) {
          d.push(["zone-graph-" + l, "highcharts-graph highcharts-zone-graph-" + l + " " + (b.className || ""), b.color || a.color, b.dashStyle || c.dashStyle]);
        });t(d, function (d, l) {
          var k = d[0],
              e = a[k];e ? (e.endX = b.xMap, e.animate({ d: b })) : b.length && (a[k] = a.chart.renderer.path(b).addClass(d[1]).attr({ zIndex: 1 }).add(a.group), e = { stroke: d[2], "stroke-width": c.lineWidth, fill: a.fillGraph && a.color || "none" }, d[3] ? e.dashstyle = d[3] : "square" !== c.linecap && (e["stroke-linecap"] = e["stroke-linejoin"] = "round"), e = a[k].attr(e).shadow(2 > l && c.shadow));e && (e.startX = b.xMap, e.isArea = b.isArea);
        });
      }, applyZones: function applyZones() {
        var a = this,
            c = this.chart,
            b = c.renderer,
            d = this.zones,
            k,
            e,
            f = this.clips || [],
            g,
            p = this.graph,
            q = this.area,
            m = Math.max(c.chartWidth, c.chartHeight),
            w = this[(this.zoneAxis || "y") + "Axis"],
            h,
            v,
            n = c.inverted,
            r,
            K,
            A,
            u,
            J = !1;d.length && (p || q) && w && void 0 !== w.min && (v = w.reversed, r = w.horiz, p && p.hide(), q && q.hide(), h = w.getExtremes(), t(d, function (d, l) {
          k = v ? r ? c.plotWidth : 0 : r ? 0 : w.toPixels(h.min);k = Math.min(Math.max(H(e, k), 0), m);e = Math.min(Math.max(Math.round(w.toPixels(H(d.value, h.max), !0)), 0), m);J && (k = e = w.toPixels(h.max));K = Math.abs(k - e);A = Math.min(k, e);u = Math.max(k, e);w.isXAxis ? (g = { x: n ? u : A, y: 0, width: K, height: m }, r || (g.x = c.plotHeight - g.x)) : (g = { x: 0, y: n ? u : A, width: m, height: K }, r && (g.y = c.plotWidth - g.y));n && b.isVML && (g = w.isXAxis ? { x: 0, y: v ? A : u, height: g.width, width: c.chartWidth } : { x: g.y - c.plotLeft - c.spacingBox.x, y: 0, width: g.height, height: c.chartHeight });f[l] ? f[l].animate(g) : (f[l] = b.clipRect(g), p && a["zone-graph-" + l].clip(f[l]), q && a["zone-area-" + l].clip(f[l]));J = d.value > h.max;
        }), this.clips = f);
      }, invertGroups: function invertGroups(a) {
        function c() {
          t(["group", "markerGroup"], function (c) {
            b[c] && (d.renderer.isVML && b[c].attr({ width: b.yAxis.len, height: b.xAxis.len }), b[c].width = b.yAxis.len, b[c].height = b.xAxis.len, b[c].invert(a));
          });
        }var b = this,
            d = b.chart,
            k;b.xAxis && (k = E(d, "resize", c), E(b, "destroy", k), c(a), b.invertGroups = c);
      }, plotGroup: function plotGroup(a, c, b, d, k) {
        var l = this[a],
            e = !l;e && (this[a] = l = this.chart.renderer.g().attr({ zIndex: d || .1 }).add(k));l.addClass("highcharts-" + c + " highcharts-series-" + this.index + " highcharts-" + this.type + "-series highcharts-color-" + this.colorIndex + " " + (this.options.className || ""), !0);l.attr({ visibility: b })[e ? "attr" : "animate"](this.getPlotBox());return l;
      }, getPlotBox: function getPlotBox() {
        var a = this.chart,
            c = this.xAxis,
            b = this.yAxis;a.inverted && (c = b, b = this.xAxis);return { translateX: c ? c.left : a.plotLeft, translateY: b ? b.top : a.plotTop, scaleX: 1, scaleY: 1 };
      }, render: function render() {
        var a = this,
            c = a.chart,
            b,
            d = a.options,
            k = !!a.animate && c.renderer.isSVG && B(d.animation).duration,
            e = a.visible ? "inherit" : "hidden",
            f = d.zIndex,
            g = a.hasRendered,
            p = c.seriesGroup,
            q = c.inverted;b = a.plotGroup("group", "series", e, f, p);a.markerGroup = a.plotGroup("markerGroup", "markers", e, f, p);k && a.animate(!0);b.inverted = a.isCartesian ? q : !1;a.drawGraph && (a.drawGraph(), a.applyZones());a.drawDataLabels && a.drawDataLabels();a.visible && a.drawPoints();a.drawTracker && !1 !== a.options.enableMouseTracking && a.drawTracker();a.invertGroups(q);!1 === d.clip || a.sharedClipKey || g || b.clip(c.clipRect);k && a.animate();g || (a.animationTimeout = w(function () {
          a.afterAnimate();
        }, k));a.isDirty = !1;a.hasRendered = !0;
      }, redraw: function redraw() {
        var a = this.chart,
            c = this.isDirty || this.isDirtyData,
            b = this.group,
            d = this.xAxis,
            k = this.yAxis;b && (a.inverted && b.attr({ width: a.plotWidth, height: a.plotHeight }), b.animate({ translateX: H(d && d.left, a.plotLeft), translateY: H(k && k.top, a.plotTop) }));this.translate();this.render();c && delete this.kdTree;
      }, kdAxisArray: ["clientX", "plotY"], searchPoint: function searchPoint(a, c) {
        var b = this.xAxis,
            d = this.yAxis,
            k = this.chart.inverted;return this.searchKDTree({ clientX: k ? b.len - a.chartY + b.pos : a.chartX - b.pos, plotY: k ? d.len - a.chartX + d.pos : a.chartY - d.pos }, c);
      }, buildKDTree: function buildKDTree() {
        function a(b, d, l) {
          var k, e;if (e = b && b.length) return k = c.kdAxisArray[d % l], b.sort(function (a, c) {
            return a[k] - c[k];
          }), e = Math.floor(e / 2), { point: b[e], left: a(b.slice(0, e), d + 1, l), right: a(b.slice(e + 1), d + 1, l) };
        }this.buildingKdTree = !0;var c = this,
            b = -1 < c.options.findNearestPointBy.indexOf("y") ? 2 : 1;delete c.kdTree;w(function () {
          c.kdTree = a(c.getValidPoints(null, !c.directTouch), b, b);c.buildingKdTree = !1;
        }, c.options.kdNow ? 0 : 1);
      }, searchKDTree: function searchKDTree(a, c) {
        function b(a, c, l, g) {
          var p = c.point,
              q = d.kdAxisArray[l % g],
              m,
              w,
              h = p;w = x(a[k]) && x(p[k]) ? Math.pow(a[k] - p[k], 2) : null;m = x(a[e]) && x(p[e]) ? Math.pow(a[e] - p[e], 2) : null;m = (w || 0) + (m || 0);p.dist = x(m) ? Math.sqrt(m) : Number.MAX_VALUE;p.distX = x(w) ? Math.sqrt(w) : Number.MAX_VALUE;q = a[q] - p[q];m = 0 > q ? "left" : "right";w = 0 > q ? "right" : "left";c[m] && (m = b(a, c[m], l + 1, g), h = m[f] < h[f] ? m : p);c[w] && Math.sqrt(q * q) < h[f] && (a = b(a, c[w], l + 1, g), h = a[f] < h[f] ? a : h);return h;
        }var d = this,
            k = this.kdAxisArray[0],
            e = this.kdAxisArray[1],
            f = c ? "distX" : "dist";c = -1 < d.options.findNearestPointBy.indexOf("y") ? 2 : 1;this.kdTree || this.buildingKdTree || this.buildKDTree();if (this.kdTree) return b(a, this.kdTree, c, c);
      } });
  })(L);(function (a) {
    function E(a, f, g, e, d) {
      var p = a.chart.inverted;this.axis = a;this.isNegative = g;this.options = f;this.x = e;this.total = null;this.points = {};this.stack = d;this.rightCliff = this.leftCliff = 0;this.alignOptions = { align: f.align || (p ? g ? "left" : "right" : "center"), verticalAlign: f.verticalAlign || (p ? "middle" : g ? "bottom" : "top"), y: t(f.y, p ? 4 : g ? 14 : -6), x: t(f.x, p ? g ? -6 : 6 : 0) };this.textAlign = f.textAlign || (p ? g ? "right" : "left" : "center");
    }var B = a.Axis,
        F = a.Chart,
        D = a.correctFloat,
        n = a.defined,
        h = a.destroyObjectProperties,
        u = a.each,
        r = a.format,
        x = a.objectEach,
        t = a.pick;a = a.Series;E.prototype = { destroy: function destroy() {
        h(this, this.axis);
      }, render: function render(a) {
        var f = this.options,
            g = f.format,
            g = g ? r(g, this) : f.formatter.call(this);this.label ? this.label.attr({ text: g, visibility: "hidden" }) : this.label = this.axis.chart.renderer.text(g, null, null, f.useHTML).css(f.style).attr({ align: this.textAlign, rotation: f.rotation, visibility: "hidden" }).add(a);
      }, setOffset: function setOffset(a, f) {
        var g = this.axis,
            e = g.chart,
            d = e.inverted,
            p = g.reversed,
            p = this.isNegative && !p || !this.isNegative && p,
            b = g.translate(g.usePercentage ? 100 : this.total, 0, 0, 0, 1),
            g = g.translate(0),
            g = Math.abs(b - g);a = e.xAxis[0].translate(this.x) + a;var m = e.plotHeight,
            d = { x: d ? p ? b : b - g : a, y: d ? m - a - f : p ? m - b - g : m - b, width: d ? g : f, height: d ? f : g };if (f = this.label) f.align(this.alignOptions, null, d), d = f.alignAttr, f[!1 === this.options.crop || e.isInsidePlot(d.x, d.y) ? "show" : "hide"](!0);
      } };F.prototype.getStacks = function () {
      var a = this;u(a.yAxis, function (a) {
        a.stacks && a.hasVisibleSeries && (a.oldStacks = a.stacks);
      });u(a.series, function (f) {
        !f.options.stacking || !0 !== f.visible && !1 !== a.options.chart.ignoreHiddenSeries || (f.stackKey = f.type + t(f.options.stack, ""));
      });
    };B.prototype.buildStacks = function () {
      var a = this.series,
          f,
          g = t(this.options.reversedStacks, !0),
          e = a.length,
          d;if (!this.isXAxis) {
        this.usePercentage = !1;for (d = e; d--;) {
          a[g ? d : e - d - 1].setStackedPoints();
        }for (d = e; d--;) {
          f = a[g ? d : e - d - 1], f.setStackCliffs && f.setStackCliffs();
        }if (this.usePercentage) for (d = 0; d < e; d++) {
          a[d].setPercentStacks();
        }
      }
    };B.prototype.renderStackTotals = function () {
      var a = this.chart,
          f = a.renderer,
          g = this.stacks,
          e = this.stackTotalGroup;e || (this.stackTotalGroup = e = f.g("stack-labels").attr({ visibility: "visible", zIndex: 6 }).add());e.translate(a.plotLeft, a.plotTop);x(g, function (a) {
        x(a, function (a) {
          a.render(e);
        });
      });
    };B.prototype.resetStacks = function () {
      var a = this,
          f = a.stacks;a.isXAxis || x(f, function (f) {
        x(f, function (e, d) {
          e.touched < a.stacksTouched ? (e.destroy(), delete f[d]) : (e.total = null, e.cum = null);
        });
      });
    };B.prototype.cleanStacks = function () {
      var a;this.isXAxis || (this.oldStacks && (a = this.stacks = this.oldStacks), x(a, function (a) {
        x(a, function (a) {
          a.cum = a.total;
        });
      }));
    };a.prototype.setStackedPoints = function () {
      if (this.options.stacking && (!0 === this.visible || !1 === this.chart.options.chart.ignoreHiddenSeries)) {
        var a = this.processedXData,
            f = this.processedYData,
            g = [],
            e = f.length,
            d = this.options,
            p = d.threshold,
            b = d.startFromThreshold ? p : 0,
            h = d.stack,
            d = d.stacking,
            v = this.stackKey,
            r = "-" + v,
            q = this.negStacks,
            u = this.yAxis,
            c = u.stacks,
            w = u.oldStacks,
            K,
            y,
            G,
            l,
            I,
            k,
            z;u.stacksTouched += 1;for (I = 0; I < e; I++) {
          k = a[I], z = f[I], K = this.getStackIndicator(K, k, this.index), l = K.key, G = (y = q && z < (b ? 0 : p)) ? r : v, c[G] || (c[G] = {}), c[G][k] || (w[G] && w[G][k] ? (c[G][k] = w[G][k], c[G][k].total = null) : c[G][k] = new E(u, u.options.stackLabels, y, k, h)), G = c[G][k], null !== z && (G.points[l] = G.points[this.index] = [t(G.cum, b)], n(G.cum) || (G.base = l), G.touched = u.stacksTouched, 0 < K.index && !1 === this.singleStacks && (G.points[l][0] = G.points[this.index + "," + k + ",0"][0])), "percent" === d ? (y = y ? v : r, q && c[y] && c[y][k] ? (y = c[y][k], G.total = y.total = Math.max(y.total, G.total) + Math.abs(z) || 0) : G.total = D(G.total + (Math.abs(z) || 0))) : G.total = D(G.total + (z || 0)), G.cum = t(G.cum, b) + (z || 0), null !== z && (G.points[l].push(G.cum), g[I] = G.cum);
        }"percent" === d && (u.usePercentage = !0);this.stackedYData = g;u.oldStacks = {};
      }
    };a.prototype.setPercentStacks = function () {
      var a = this,
          f = a.stackKey,
          g = a.yAxis.stacks,
          e = a.processedXData,
          d;u([f, "-" + f], function (f) {
        for (var b = e.length, p, h; b--;) {
          if (p = e[b], d = a.getStackIndicator(d, p, a.index, f), p = (h = g[f] && g[f][p]) && h.points[d.key]) h = h.total ? 100 / h.total : 0, p[0] = D(p[0] * h), p[1] = D(p[1] * h), a.stackedYData[b] = p[1];
        }
      });
    };a.prototype.getStackIndicator = function (a, f, g, e) {
      !n(a) || a.x !== f || e && a.key !== e ? a = { x: f, index: 0, key: e } : a.index++;a.key = [g, f, a.index].join();return a;
    };
  })(L);(function (a) {
    var E = a.addEvent,
        B = a.animate,
        F = a.Axis,
        D = a.createElement,
        n = a.css,
        h = a.defined,
        u = a.each,
        r = a.erase,
        x = a.extend,
        t = a.fireEvent,
        m = a.inArray,
        f = a.isNumber,
        g = a.isObject,
        e = a.isArray,
        d = a.merge,
        p = a.objectEach,
        b = a.pick,
        A = a.Point,
        v = a.Series,
        H = a.seriesTypes,
        q = a.setAnimation,
        J = a.splat;x(a.Chart.prototype, { addSeries: function addSeries(a, d, e) {
        var c,
            f = this;a && (d = b(d, !0), t(f, "addSeries", { options: a }, function () {
          c = f.initSeries(a);f.isDirtyLegend = !0;f.linkSeries();d && f.redraw(e);
        }));return c;
      }, addAxis: function addAxis(a, e, f, g) {
        var c = e ? "xAxis" : "yAxis",
            l = this.options;a = d(a, { index: this[c].length, isX: e });new F(this, a);l[c] = J(l[c] || {});l[c].push(a);b(f, !0) && this.redraw(g);
      }, showLoading: function showLoading(a) {
        var c = this,
            b = c.options,
            d = c.loadingDiv,
            e = b.loading,
            l = function l() {
          d && n(d, { left: c.plotLeft + "px", top: c.plotTop + "px", width: c.plotWidth + "px", height: c.plotHeight + "px" });
        };
        d || (c.loadingDiv = d = D("div", { className: "highcharts-loading highcharts-loading-hidden" }, null, c.container), c.loadingSpan = D("span", { className: "highcharts-loading-inner" }, null, d), E(c, "redraw", l));d.className = "highcharts-loading";c.loadingSpan.innerHTML = a || b.lang.loading;n(d, x(e.style, { zIndex: 10 }));n(c.loadingSpan, e.labelStyle);c.loadingShown || (n(d, { opacity: 0, display: "" }), B(d, { opacity: e.style.opacity || .5 }, { duration: e.showDuration || 0 }));c.loadingShown = !0;l();
      }, hideLoading: function hideLoading() {
        var a = this.options,
            b = this.loadingDiv;b && (b.className = "highcharts-loading highcharts-loading-hidden", B(b, { opacity: 0 }, { duration: a.loading.hideDuration || 100, complete: function complete() {
            n(b, { display: "none" });
          } }));this.loadingShown = !1;
      }, propsRequireDirtyBox: "backgroundColor borderColor borderWidth margin marginTop marginRight marginBottom marginLeft spacing spacingTop spacingRight spacingBottom spacingLeft borderRadius plotBackgroundColor plotBackgroundImage plotBorderColor plotBorderWidth plotShadow shadow".split(" "), propsRequireUpdateSeries: "chart.inverted chart.polar chart.ignoreHiddenSeries chart.type colors plotOptions tooltip".split(" "),
      update: function update(a, e) {
        var c = this,
            g = { credits: "addCredits", title: "setTitle", subtitle: "setSubtitle" },
            q = a.chart,
            l,
            w;if (q) {
          d(!0, c.options.chart, q);"className" in q && c.setClassName(q.className);if ("inverted" in q || "polar" in q) c.propFromSeries(), l = !0;"alignTicks" in q && (l = !0);p(q, function (a, b) {
            -1 !== m("chart." + b, c.propsRequireUpdateSeries) && (w = !0);-1 !== m(b, c.propsRequireDirtyBox) && (c.isDirtyBox = !0);
          });"style" in q && c.renderer.setStyle(q.style);
        }a.colors && (this.options.colors = a.colors);a.plotOptions && d(!0, this.options.plotOptions, a.plotOptions);p(a, function (a, b) {
          if (c[b] && "function" === typeof c[b].update) c[b].update(a, !1);else if ("function" === typeof c[g[b]]) c[g[b]](a);"chart" !== b && -1 !== m(b, c.propsRequireUpdateSeries) && (w = !0);
        });u("xAxis yAxis zAxis series colorAxis pane".split(" "), function (b) {
          a[b] && u(J(a[b]), function (a, d) {
            (d = h(a.id) && c.get(a.id) || c[b][d]) && d.coll === b && d.update(a, !1);
          });
        });l && u(c.axes, function (a) {
          a.update({}, !1);
        });w && u(c.series, function (a) {
          a.update({}, !1);
        });a.loading && d(!0, c.options.loading, a.loading);l = q && q.width;
        q = q && q.height;f(l) && l !== c.chartWidth || f(q) && q !== c.chartHeight ? c.setSize(l, q) : b(e, !0) && c.redraw();
      }, setSubtitle: function setSubtitle(a) {
        this.setTitle(void 0, a);
      } });x(A.prototype, { update: function update(a, d, e, f) {
        function c() {
          l.applyOptions(a);null === l.y && k && (l.graphic = k.destroy());g(a, !0) && (k && k.element && a && a.marker && a.marker.symbol && (l.graphic = k.destroy()), a && a.dataLabels && l.dataLabel && (l.dataLabel = l.dataLabel.destroy()));q = l.index;p.updateParallelArrays(l, q);w.data[q] = g(w.data[q], !0) || g(a, !0) ? l.options : a;p.isDirty = p.isDirtyData = !0;!p.fixedBox && p.hasCartesianSeries && (h.isDirtyBox = !0);"point" === w.legendType && (h.isDirtyLegend = !0);d && h.redraw(e);
        }var l = this,
            p = l.series,
            k = l.graphic,
            q,
            h = p.chart,
            w = p.options;d = b(d, !0);!1 === f ? c() : l.firePointEvent("update", { options: a }, c);
      }, remove: function remove(a, b) {
        this.series.removePoint(m(this, this.series.data), a, b);
      } });x(v.prototype, { addPoint: function addPoint(a, d, e, f) {
        var c = this.options,
            l = this.data,
            g = this.chart,
            k = this.xAxis,
            k = k && k.hasNames && k.names,
            p = c.data,
            q,
            h,
            m = this.xData,
            w,
            v;d = b(d, !0);q = { series: this };this.pointClass.prototype.applyOptions.apply(q, [a]);v = q.x;w = m.length;if (this.requireSorting && v < m[w - 1]) for (h = !0; w && m[w - 1] > v;) {
          w--;
        }this.updateParallelArrays(q, "splice", w, 0, 0);this.updateParallelArrays(q, w);k && q.name && (k[v] = q.name);p.splice(w, 0, a);h && (this.data.splice(w, 0, null), this.processData());"point" === c.legendType && this.generatePoints();e && (l[0] && l[0].remove ? l[0].remove(!1) : (l.shift(), this.updateParallelArrays(q, "shift"), p.shift()));this.isDirtyData = this.isDirty = !0;d && g.redraw(f);
      }, removePoint: function removePoint(a, d, e) {
        var c = this,
            f = c.data,
            l = f[a],
            g = c.points,
            k = c.chart,
            p = function p() {
          g && g.length === f.length && g.splice(a, 1);f.splice(a, 1);c.options.data.splice(a, 1);c.updateParallelArrays(l || { series: c }, "splice", a, 1);l && l.destroy();c.isDirty = !0;c.isDirtyData = !0;d && k.redraw();
        };q(e, k);d = b(d, !0);l ? l.firePointEvent("remove", null, p) : p();
      }, remove: function remove(a, d, e) {
        function c() {
          f.destroy();l.isDirtyLegend = l.isDirtyBox = !0;l.linkSeries();b(a, !0) && l.redraw(d);
        }var f = this,
            l = f.chart;!1 !== e ? t(f, "remove", null, c) : c();
      }, update: function update(a, e) {
        var c = this,
            f = c.chart,
            g = c.userOptions,
            l = c.oldType || c.type,
            p = a.type || g.type || f.options.chart.type,
            k = H[l].prototype,
            q = ["group", "markerGroup", "dataLabelsGroup"],
            h;if (Object.keys && "data" === Object.keys(a).toString()) return this.setData(a.data, e);if (p && p !== l || void 0 !== a.zIndex) q.length = 0;u(q, function (a) {
          q[a] = c[a];delete c[a];
        });a = d(g, { animation: !1, index: c.index, pointStart: c.xData[0] }, { data: c.options.data }, a);c.remove(!1, null, !1);for (h in k) {
          c[h] = void 0;
        }x(c, H[p || l].prototype);u(q, function (a) {
          c[a] = q[a];
        });c.init(f, a);c.oldType = l;f.linkSeries();b(e, !0) && f.redraw(!1);
      } });x(F.prototype, { update: function update(a, e) {
        var c = this.chart;a = c.options[this.coll][this.options.index] = d(this.userOptions, a);this.destroy(!0);this.init(c, x(a, { events: void 0 }));c.isDirtyBox = !0;b(e, !0) && c.redraw();
      }, remove: function remove(a) {
        for (var c = this.chart, d = this.coll, f = this.series, g = f.length; g--;) {
          f[g] && f[g].remove(!1);
        }r(c.axes, this);r(c[d], this);e(c.options[d]) ? c.options[d].splice(this.options.index, 1) : delete c.options[d];u(c[d], function (a, c) {
          a.options.index = c;
        });this.destroy();c.isDirtyBox = !0;b(a, !0) && c.redraw();
      }, setTitle: function setTitle(a, b) {
        this.update({ title: a }, b);
      }, setCategories: function setCategories(a, b) {
        this.update({ categories: a }, b);
      } });
  })(L);(function (a) {
    var E = a.color,
        B = a.each,
        F = a.map,
        D = a.pick,
        n = a.Series,
        h = a.seriesType;h("area", "line", { softThreshold: !1, threshold: 0 }, { singleStacks: !1, getStackPoints: function getStackPoints() {
        var h = [],
            n = [],
            x = this.xAxis,
            t = this.yAxis,
            m = t.stacks[this.stackKey],
            f = {},
            g = this.points,
            e = this.index,
            d = t.series,
            p = d.length,
            b,
            A = D(t.options.reversedStacks, !0) ? 1 : -1,
            v;if (this.options.stacking) {
          for (v = 0; v < g.length; v++) {
            f[g[v].x] = g[v];
          }a.objectEach(m, function (a, b) {
            null !== a.total && n.push(b);
          });n.sort(function (a, b) {
            return a - b;
          });b = F(d, function () {
            return this.visible;
          });B(n, function (a, d) {
            var g = 0,
                c,
                q;if (f[a] && !f[a].isNull) h.push(f[a]), B([-1, 1], function (g) {
              var h = 1 === g ? "rightNull" : "leftNull",
                  w = 0,
                  l = m[n[d + g]];if (l) for (v = e; 0 <= v && v < p;) {
                c = l.points[v], c || (v === e ? f[a][h] = !0 : b[v] && (q = m[a].points[v]) && (w -= q[1] - q[0])), v += A;
              }f[a][1 === g ? "rightCliff" : "leftCliff"] = w;
            });else {
              for (v = e; 0 <= v && v < p;) {
                if (c = m[a].points[v]) {
                  g = c[1];break;
                }v += A;
              }g = t.translate(g, 0, 1, 0, 1);h.push({ isNull: !0, plotX: x.translate(a, 0, 0, 0, 1), x: a, plotY: g, yBottom: g });
            }
          });
        }return h;
      }, getGraphPath: function getGraphPath(a) {
        var h = n.prototype.getGraphPath,
            u = this.options,
            t = u.stacking,
            m = this.yAxis,
            f,
            g,
            e = [],
            d = [],
            p = this.index,
            b,
            A = m.stacks[this.stackKey],
            v = u.threshold,
            H = m.getThreshold(u.threshold),
            q,
            u = u.connectNulls || "percent" === t,
            J = function J(c, f, g) {
          var q = a[c];c = t && A[q.x].points[p];var h = q[g + "Null"] || 0;g = q[g + "Cliff"] || 0;var l,
              w,
              q = !0;g || h ? (l = (h ? c[0] : c[1]) + g, w = c[0] + g, q = !!h) : !t && a[f] && a[f].isNull && (l = w = v);void 0 !== l && (d.push({ plotX: b, plotY: null === l ? H : m.getThreshold(l), isNull: q, isCliff: !0 }), e.push({ plotX: b, plotY: null === w ? H : m.getThreshold(w), doCurve: !1 }));
        };a = a || this.points;t && (a = this.getStackPoints());for (f = 0; f < a.length; f++) {
          if (g = a[f].isNull, b = D(a[f].rectPlotX, a[f].plotX), q = D(a[f].yBottom, H), !g || u) u || J(f, f - 1, "left"), g && !t && u || (d.push(a[f]), e.push({ x: f, plotX: b, plotY: q })), u || J(f, f + 1, "right");
        }f = h.call(this, d, !0, !0);e.reversed = !0;g = h.call(this, e, !0, !0);g.length && (g[0] = "L");g = f.concat(g);h = h.call(this, d, !1, u);g.xMap = f.xMap;this.areaPath = g;return h;
      }, drawGraph: function drawGraph() {
        this.areaPath = [];n.prototype.drawGraph.apply(this);var a = this,
            h = this.areaPath,
            x = this.options,
            t = [["area", "highcharts-area", this.color, x.fillColor]];B(this.zones, function (h, f) {
          t.push(["zone-area-" + f, "highcharts-area highcharts-zone-area-" + f + " " + h.className, h.color || a.color, h.fillColor || x.fillColor]);
        });B(t, function (m) {
          var f = m[0],
              g = a[f];g ? (g.endX = h.xMap, g.animate({ d: h })) : (g = a[f] = a.chart.renderer.path(h).addClass(m[1]).attr({ fill: D(m[3], E(m[2]).setOpacity(D(x.fillOpacity, .75)).get()), zIndex: 0 }).add(a.group), g.isArea = !0);g.startX = h.xMap;g.shiftUnit = x.step ? 2 : 1;
        });
      }, drawLegendSymbol: a.LegendSymbolMixin.drawRectangle });
  })(L);(function (a) {
    var E = a.pick;a = a.seriesType;a("spline", "line", {}, { getPointSpline: function getPointSpline(a, F, D) {
        var n = F.plotX,
            h = F.plotY,
            u = a[D - 1];D = a[D + 1];var r, x, t, m;if (u && !u.isNull && !1 !== u.doCurve && !F.isCliff && D && !D.isNull && !1 !== D.doCurve && !F.isCliff) {
          a = u.plotY;t = D.plotX;D = D.plotY;var f = 0;r = (1.5 * n + u.plotX) / 2.5;x = (1.5 * h + a) / 2.5;t = (1.5 * n + t) / 2.5;m = (1.5 * h + D) / 2.5;t !== r && (f = (m - x) * (t - n) / (t - r) + h - m);x += f;m += f;x > a && x > h ? (x = Math.max(a, h), m = 2 * h - x) : x < a && x < h && (x = Math.min(a, h), m = 2 * h - x);m > D && m > h ? (m = Math.max(D, h), x = 2 * h - m) : m < D && m < h && (m = Math.min(D, h), x = 2 * h - m);F.rightContX = t;F.rightContY = m;
        }F = ["C", E(u.rightContX, u.plotX), E(u.rightContY, u.plotY), E(r, n), E(x, h), n, h];u.rightContX = u.rightContY = null;return F;
      } });
  })(L);(function (a) {
    var E = a.seriesTypes.area.prototype,
        B = a.seriesType;B("areaspline", "spline", a.defaultPlotOptions.area, { getStackPoints: E.getStackPoints,
      getGraphPath: E.getGraphPath, setStackCliffs: E.setStackCliffs, drawGraph: E.drawGraph, drawLegendSymbol: a.LegendSymbolMixin.drawRectangle });
  })(L);(function (a) {
    var E = a.animObject,
        B = a.color,
        F = a.each,
        D = a.extend,
        n = a.isNumber,
        h = a.merge,
        u = a.pick,
        r = a.Series,
        x = a.seriesType,
        t = a.svg;x("column", "line", { borderRadius: 0, crisp: !0, groupPadding: .2, marker: null, pointPadding: .1, minPointLength: 0, cropThreshold: 50, pointRange: null, states: { hover: { halo: !1, brightness: .1, shadow: !1 }, select: { color: "#cccccc", borderColor: "#000000", shadow: !1 } },
      dataLabels: { align: null, verticalAlign: null, y: null }, softThreshold: !1, startFromThreshold: !0, stickyTracking: !1, tooltip: { distance: 6 }, threshold: 0, borderColor: "#ffffff" }, { cropShoulder: 0, directTouch: !0, trackerGroups: ["group", "dataLabelsGroup"], negStacks: !0, init: function init() {
        r.prototype.init.apply(this, arguments);var a = this,
            f = a.chart;f.hasRendered && F(f.series, function (f) {
          f.type === a.type && (f.isDirty = !0);
        });
      }, getColumnMetrics: function getColumnMetrics() {
        var a = this,
            f = a.options,
            g = a.xAxis,
            e = a.yAxis,
            d = g.reversed,
            p,
            b = {},
            h = 0;!1 === f.grouping ? h = 1 : F(a.chart.series, function (d) {
          var c = d.options,
              f = d.yAxis,
              g;d.type !== a.type || !d.visible && a.chart.options.chart.ignoreHiddenSeries || e.len !== f.len || e.pos !== f.pos || (c.stacking ? (p = d.stackKey, void 0 === b[p] && (b[p] = h++), g = b[p]) : !1 !== c.grouping && (g = h++), d.columnIndex = g);
        });var v = Math.min(Math.abs(g.transA) * (g.ordinalSlope || f.pointRange || g.closestPointRange || g.tickInterval || 1), g.len),
            n = v * f.groupPadding,
            q = (v - 2 * n) / (h || 1),
            f = Math.min(f.maxPointWidth || g.len, u(f.pointWidth, q * (1 - 2 * f.pointPadding)));a.columnMetrics = { width: f, offset: (q - f) / 2 + (n + ((a.columnIndex || 0) + (d ? 1 : 0)) * q - v / 2) * (d ? -1 : 1) };return a.columnMetrics;
      }, crispCol: function crispCol(a, f, g, e) {
        var d = this.chart,
            p = this.borderWidth,
            b = -(p % 2 ? .5 : 0),
            p = p % 2 ? .5 : 1;d.inverted && d.renderer.isVML && (p += 1);this.options.crisp && (g = Math.round(a + g) + b, a = Math.round(a) + b, g -= a);e = Math.round(f + e) + p;b = .5 >= Math.abs(f) && .5 < e;f = Math.round(f) + p;e -= f;b && e && (--f, e += 1);return { x: a, y: f, width: g, height: e };
      }, translate: function translate() {
        var a = this,
            f = a.chart,
            g = a.options,
            e = a.dense = 2 > a.closestPointRange * a.xAxis.transA,
            e = a.borderWidth = u(g.borderWidth, e ? 0 : 1),
            d = a.yAxis,
            p = a.translatedThreshold = d.getThreshold(g.threshold),
            b = u(g.minPointLength, 5),
            h = a.getColumnMetrics(),
            v = h.width,
            n = a.barW = Math.max(v, 1 + 2 * e),
            q = a.pointXOffset = h.offset;f.inverted && (p -= .5);g.pointPadding && (n = Math.ceil(n));r.prototype.translate.apply(a);F(a.points, function (e) {
          var c = u(e.yBottom, p),
              g = 999 + Math.abs(c),
              g = Math.min(Math.max(-g, e.plotY), d.len + g),
              h = e.plotX + q,
              m = n,
              r = Math.min(g, c),
              l,
              I = Math.max(g, c) - r;Math.abs(I) < b && b && (I = b, l = !d.reversed && !e.negative || d.reversed && e.negative, r = Math.abs(r - p) > b ? c - b : p - (l ? b : 0));e.barX = h;e.pointWidth = v;e.tooltipPos = f.inverted ? [d.len + d.pos - f.plotLeft - g, a.xAxis.len - h - m / 2, I] : [h + m / 2, g + d.pos - f.plotTop, I];e.shapeType = "rect";e.shapeArgs = a.crispCol.apply(a, e.isNull ? [h, p, m, 0] : [h, r, m, I]);
        });
      }, getSymbol: a.noop, drawLegendSymbol: a.LegendSymbolMixin.drawRectangle, drawGraph: function drawGraph() {
        this.group[this.dense ? "addClass" : "removeClass"]("highcharts-dense-data");
      }, pointAttribs: function pointAttribs(a, f) {
        var g = this.options,
            e,
            d = this.pointAttrToOptions || {};
        e = d.stroke || "borderColor";var p = d["stroke-width"] || "borderWidth",
            b = a && a.color || this.color,
            m = a[e] || g[e] || this.color || b,
            v = a[p] || g[p] || this[p] || 0,
            d = g.dashStyle;a && this.zones.length && (b = a.getZone(), b = a.options.color || b && b.color || this.color);f && (a = h(g.states[f], a.options.states && a.options.states[f] || {}), f = a.brightness, b = a.color || void 0 !== f && B(b).brighten(a.brightness).get() || b, m = a[e] || m, v = a[p] || v, d = a.dashStyle || d);e = { fill: b, stroke: m, "stroke-width": v };g.borderRadius && (e.r = g.borderRadius);d && (e.dashstyle = d);return e;
      }, drawPoints: function drawPoints() {
        var a = this,
            f = this.chart,
            g = a.options,
            e = f.renderer,
            d = g.animationLimit || 250,
            p;F(a.points, function (b) {
          var m = b.graphic;if (n(b.plotY) && null !== b.y) {
            p = b.shapeArgs;if (m) m[f.pointCount < d ? "animate" : "attr"](h(p));else b.graphic = m = e[b.shapeType](p).add(b.group || a.group);m.attr(a.pointAttribs(b, b.selected && "select")).shadow(g.shadow, null, g.stacking && !g.borderRadius);m.addClass(b.getClassName(), !0);
          } else m && (b.graphic = m.destroy());
        });
      }, animate: function animate(a) {
        var f = this,
            g = this.yAxis,
            e = f.options,
            d = this.chart.inverted,
            p = {};t && (a ? (p.scaleY = .001, a = Math.min(g.pos + g.len, Math.max(g.pos, g.toPixels(e.threshold))), d ? p.translateX = a - g.len : p.translateY = a, f.group.attr(p)) : (p[d ? "translateX" : "translateY"] = g.pos, f.group.animate(p, D(E(f.options.animation), { step: function step(a, d) {
            f.group.attr({ scaleY: Math.max(.001, d.pos) });
          } })), f.animate = null));
      }, remove: function remove() {
        var a = this,
            f = a.chart;f.hasRendered && F(f.series, function (f) {
          f.type === a.type && (f.isDirty = !0);
        });r.prototype.remove.apply(a, arguments);
      } });
  })(L);
  (function (a) {
    a = a.seriesType;a("bar", "column", null, { inverted: !0 });
  })(L);(function (a) {
    var E = a.Series;a = a.seriesType;a("scatter", "line", { lineWidth: 0, findNearestPointBy: "xy", marker: { enabled: !0 }, tooltip: { headerFormat: "<span style=\"color:{point.color}\">\u25CF</span> <span style=\"font-size: 0.85em\"> {series.name}</span><br/>", pointFormat: "x: \x3cb\x3e{point.x}\x3c/b\x3e\x3cbr/\x3ey: \x3cb\x3e{point.y}\x3c/b\x3e\x3cbr/\x3e" } }, { sorted: !1, requireSorting: !1, noSharedTooltip: !0,
      trackerGroups: ["group", "markerGroup", "dataLabelsGroup"], takeOrdinalPosition: !1, drawGraph: function drawGraph() {
        this.options.lineWidth && E.prototype.drawGraph.call(this);
      } });
  })(L);(function (a) {
    var E = a.pick,
        B = a.relativeLength;a.CenteredSeriesMixin = { getCenter: function getCenter() {
        var a = this.options,
            D = this.chart,
            n = 2 * (a.slicedOffset || 0),
            h = D.plotWidth - 2 * n,
            D = D.plotHeight - 2 * n,
            u = a.center,
            u = [E(u[0], "50%"), E(u[1], "50%"), a.size || "100%", a.innerSize || 0],
            r = Math.min(h, D),
            x,
            t;for (x = 0; 4 > x; ++x) {
          t = u[x], a = 2 > x || 2 === x && /%$/.test(t), u[x] = B(t, [h, D, r, u[2]][x]) + (a ? n : 0);
        }u[3] > u[2] && (u[3] = u[2]);return u;
      } };
  })(L);(function (a) {
    var E = a.addEvent,
        B = a.defined,
        F = a.each,
        D = a.extend,
        n = a.inArray,
        h = a.noop,
        u = a.pick,
        r = a.Point,
        x = a.Series,
        t = a.seriesType,
        m = a.setAnimation;t("pie", "line", { center: [null, null], clip: !1, colorByPoint: !0, dataLabels: { distance: 30, enabled: !0, formatter: function formatter() {
          return this.point.isNull ? void 0 : this.point.name;
        }, x: 0 }, ignoreHiddenPoint: !0, legendType: "point", marker: null, size: null, showInLegend: !1, slicedOffset: 10, stickyTracking: !1, tooltip: { followPointer: !0 },
      borderColor: "#ffffff", borderWidth: 1, states: { hover: { brightness: .1, shadow: !1 } } }, { isCartesian: !1, requireSorting: !1, directTouch: !0, noSharedTooltip: !0, trackerGroups: ["group", "dataLabelsGroup"], axisTypes: [], pointAttribs: a.seriesTypes.column.prototype.pointAttribs, animate: function animate(a) {
        var f = this,
            e = f.points,
            d = f.startAngleRad;a || (F(e, function (a) {
          var b = a.graphic,
              e = a.shapeArgs;b && (b.attr({ r: a.startR || f.center[3] / 2, start: d, end: d }), b.animate({ r: e.r, start: e.start, end: e.end }, f.options.animation));
        }), f.animate = null);
      },
      updateTotals: function updateTotals() {
        var a,
            g = 0,
            e = this.points,
            d = e.length,
            p,
            b = this.options.ignoreHiddenPoint;for (a = 0; a < d; a++) {
          p = e[a], g += b && !p.visible ? 0 : p.isNull ? 0 : p.y;
        }this.total = g;for (a = 0; a < d; a++) {
          p = e[a], p.percentage = 0 < g && (p.visible || !b) ? p.y / g * 100 : 0, p.total = g;
        }
      }, generatePoints: function generatePoints() {
        x.prototype.generatePoints.call(this);this.updateTotals();
      }, translate: function translate(a) {
        this.generatePoints();var f = 0,
            e = this.options,
            d = e.slicedOffset,
            p = d + (e.borderWidth || 0),
            b,
            h,
            v,
            m = e.startAngle || 0,
            q = this.startAngleRad = Math.PI / 180 * (m - 90),
            m = (this.endAngleRad = Math.PI / 180 * (u(e.endAngle, m + 360) - 90)) - q,
            n = this.points,
            c,
            w = e.dataLabels.distance,
            e = e.ignoreHiddenPoint,
            r,
            y = n.length,
            t;a || (this.center = a = this.getCenter());this.getX = function (c, b, d) {
          v = Math.asin(Math.min((c - a[1]) / (a[2] / 2 + d.labelDistance), 1));return a[0] + (b ? -1 : 1) * Math.cos(v) * (a[2] / 2 + d.labelDistance);
        };for (r = 0; r < y; r++) {
          t = n[r];t.labelDistance = u(t.options.dataLabels && t.options.dataLabels.distance, w);this.maxLabelDistance = Math.max(this.maxLabelDistance || 0, t.labelDistance);b = q + f * m;if (!e || t.visible) f += t.percentage / 100;h = q + f * m;t.shapeType = "arc";t.shapeArgs = { x: a[0], y: a[1], r: a[2] / 2, innerR: a[3] / 2, start: Math.round(1E3 * b) / 1E3, end: Math.round(1E3 * h) / 1E3 };v = (h + b) / 2;v > 1.5 * Math.PI ? v -= 2 * Math.PI : v < -Math.PI / 2 && (v += 2 * Math.PI);t.slicedTranslation = { translateX: Math.round(Math.cos(v) * d), translateY: Math.round(Math.sin(v) * d) };h = Math.cos(v) * a[2] / 2;c = Math.sin(v) * a[2] / 2;t.tooltipPos = [a[0] + .7 * h, a[1] + .7 * c];t.half = v < -Math.PI / 2 || v > Math.PI / 2 ? 1 : 0;t.angle = v;b = Math.min(p, t.labelDistance / 5);t.labelPos = [a[0] + h + Math.cos(v) * t.labelDistance, a[1] + c + Math.sin(v) * t.labelDistance, a[0] + h + Math.cos(v) * b, a[1] + c + Math.sin(v) * b, a[0] + h, a[1] + c, 0 > t.labelDistance ? "center" : t.half ? "right" : "left", v];
        }
      }, drawGraph: null, drawPoints: function drawPoints() {
        var a = this,
            g = a.chart.renderer,
            e,
            d,
            p,
            b,
            h = a.options.shadow;h && !a.shadowGroup && (a.shadowGroup = g.g("shadow").add(a.group));F(a.points, function (f) {
          if (!f.isNull) {
            d = f.graphic;b = f.shapeArgs;e = f.getTranslate();var m = f.shadowGroup;h && !m && (m = f.shadowGroup = g.g("shadow").add(a.shadowGroup));m && m.attr(e);p = a.pointAttribs(f, f.selected && "select");d ? d.setRadialReference(a.center).attr(p).animate(D(b, e)) : (f.graphic = d = g[f.shapeType](b).setRadialReference(a.center).attr(e).add(a.group), f.visible || d.attr({ visibility: "hidden" }), d.attr(p).attr({ "stroke-linejoin": "round" }).shadow(h, m));d.addClass(f.getClassName());
          }
        });
      }, searchPoint: h, sortByAngle: function sortByAngle(a, g) {
        a.sort(function (a, d) {
          return void 0 !== a.angle && (d.angle - a.angle) * g;
        });
      }, drawLegendSymbol: a.LegendSymbolMixin.drawRectangle, getCenter: a.CenteredSeriesMixin.getCenter, getSymbol: h }, { init: function init() {
        r.prototype.init.apply(this, arguments);var a = this,
            g;a.name = u(a.name, "Slice");g = function g(e) {
          a.slice("select" === e.type);
        };E(a, "select", g);E(a, "unselect", g);return a;
      }, isValid: function isValid() {
        return a.isNumber(this.y, !0) && 0 <= this.y;
      }, setVisible: function setVisible(a, g) {
        var e = this,
            d = e.series,
            f = d.chart,
            b = d.options.ignoreHiddenPoint;g = u(g, b);a !== e.visible && (e.visible = e.options.visible = a = void 0 === a ? !e.visible : a, d.options.data[n(e, d.data)] = e.options, F(["graphic", "dataLabel", "connector", "shadowGroup"], function (b) {
          if (e[b]) e[b][a ? "show" : "hide"](!0);
        }), e.legendItem && f.legend.colorizeItem(e, a), a || "hover" !== e.state || e.setState(""), b && (d.isDirty = !0), g && f.redraw());
      }, slice: function slice(a, g, e) {
        var d = this.series;m(e, d.chart);u(g, !0);this.sliced = this.options.sliced = B(a) ? a : !this.sliced;d.options.data[n(this, d.data)] = this.options;this.graphic.animate(this.getTranslate());this.shadowGroup && this.shadowGroup.animate(this.getTranslate());
      }, getTranslate: function getTranslate() {
        return this.sliced ? this.slicedTranslation : { translateX: 0, translateY: 0 };
      }, haloPath: function haloPath(a) {
        var f = this.shapeArgs;return this.sliced || !this.visible ? [] : this.series.chart.renderer.symbols.arc(f.x, f.y, f.r + a, f.r + a, { innerR: this.shapeArgs.r, start: f.start, end: f.end });
      } });
  })(L);(function (a) {
    var E = a.addEvent,
        B = a.arrayMax,
        F = a.defined,
        D = a.each,
        n = a.extend,
        h = a.format,
        u = a.map,
        r = a.merge,
        x = a.noop,
        t = a.pick,
        m = a.relativeLength,
        f = a.Series,
        g = a.seriesTypes,
        e = a.stableSort;a.distribute = function (a, f) {
      function b(a, b) {
        return a.target - b.target;
      }var d,
          g = !0,
          p = a,
          q = [],
          h;h = 0;for (d = a.length; d--;) {
        h += a[d].size;
      }if (h > f) {
        e(a, function (a, b) {
          return (b.rank || 0) - (a.rank || 0);
        });
        for (h = d = 0; h <= f;) {
          h += a[d].size, d++;
        }q = a.splice(d - 1, a.length);
      }e(a, b);for (a = u(a, function (a) {
        return { size: a.size, targets: [a.target] };
      }); g;) {
        for (d = a.length; d--;) {
          g = a[d], h = (Math.min.apply(0, g.targets) + Math.max.apply(0, g.targets)) / 2, g.pos = Math.min(Math.max(0, h - g.size / 2), f - g.size);
        }d = a.length;for (g = !1; d--;) {
          0 < d && a[d - 1].pos + a[d - 1].size > a[d].pos && (a[d - 1].size += a[d].size, a[d - 1].targets = a[d - 1].targets.concat(a[d].targets), a[d - 1].pos + a[d - 1].size > f && (a[d - 1].pos = f - a[d - 1].size), a.splice(d, 1), g = !0);
        }
      }d = 0;D(a, function (a) {
        var c = 0;D(a.targets, function () {
          p[d].pos = a.pos + c;c += p[d].size;d++;
        });
      });p.push.apply(p, q);e(p, b);
    };f.prototype.drawDataLabels = function () {
      var d = this,
          e = d.options,
          b = e.dataLabels,
          f = d.points,
          g,
          m,
          q = d.hasRendered || 0,
          n,
          c,
          w = t(b.defer, !!e.animation),
          u = d.chart.renderer;if (b.enabled || d._hasPointLabels) d.dlProcessOptions && d.dlProcessOptions(b), c = d.plotGroup("dataLabelsGroup", "data-labels", w && !q ? "hidden" : "visible", b.zIndex || 6), w && (c.attr({ opacity: +q }), q || E(d, "afterAnimate", function () {
        d.visible && c.show(!0);c[e.animation ? "animate" : "attr"]({ opacity: 1 }, { duration: 200 });
      })), m = b, D(f, function (f) {
        var q,
            l = f.dataLabel,
            p,
            k,
            w = f.connector,
            v = !l,
            y;g = f.dlOptions || f.options && f.options.dataLabels;if (q = t(g && g.enabled, m.enabled) && null !== f.y) b = r(m, g), p = f.getLabelConfig(), n = b.format ? h(b.format, p) : b.formatter.call(p, b), y = b.style, p = b.rotation, y.color = t(b.color, y.color, d.color, "#000000"), "contrast" === y.color && (f.contrastColor = u.getContrast(f.color || d.color), y.color = b.inside || 0 > t(f.labelDistance, b.distance) || e.stacking ? f.contrastColor : "#000000"), e.cursor && (y.cursor = e.cursor), k = { fill: b.backgroundColor, stroke: b.borderColor, "stroke-width": b.borderWidth, r: b.borderRadius || 0, rotation: p, padding: b.padding, zIndex: 1 }, a.objectEach(k, function (a, c) {
          void 0 === a && delete k[c];
        });!l || q && F(n) ? q && F(n) && (l ? k.text = n : (l = f.dataLabel = u[p ? "text" : "label"](n, 0, -9999, b.shape, null, null, b.useHTML, null, "data-label"), l.addClass("highcharts-data-label-color-" + f.colorIndex + " " + (b.className || "") + (b.useHTML ? "highcharts-tracker" : ""))), l.attr(k), l.css(y).shadow(b.shadow), l.added || l.add(c), d.alignDataLabel(f, l, b, null, v)) : (f.dataLabel = l = l.destroy(), w && (f.connector = w.destroy()));
      });
    };f.prototype.alignDataLabel = function (a, e, b, f, g) {
      var d = this.chart,
          q = d.inverted,
          h = t(a.plotX, -9999),
          c = t(a.plotY, -9999),
          p = e.getBBox(),
          m,
          v = b.rotation,
          r = b.align,
          l = this.visible && (a.series.forceDL || d.isInsidePlot(h, Math.round(c), q) || f && d.isInsidePlot(h, q ? f.x + 1 : f.y + f.height - 1, q)),
          I = "justify" === t(b.overflow, "justify");if (l && (m = b.style.fontSize, m = d.renderer.fontMetrics(m, e).b, f = n({ x: q ? d.plotWidth - c : h, y: Math.round(q ? d.plotHeight - h : c), width: 0, height: 0 }, f), n(b, { width: p.width, height: p.height }), v ? (I = !1, h = d.renderer.rotCorr(m, v), h = { x: f.x + b.x + f.width / 2 + h.x, y: f.y + b.y + { top: 0, middle: .5, bottom: 1 }[b.verticalAlign] * f.height }, e[g ? "attr" : "animate"](h).attr({ align: r }), c = (v + 720) % 360, c = 180 < c && 360 > c, "left" === r ? h.y -= c ? p.height : 0 : "center" === r ? (h.x -= p.width / 2, h.y -= p.height / 2) : "right" === r && (h.x -= p.width, h.y -= c ? 0 : p.height)) : (e.align(b, null, f), h = e.alignAttr), I ? a.isLabelJustified = this.justifyDataLabel(e, b, h, p, f, g) : t(b.crop, !0) && (l = d.isInsidePlot(h.x, h.y) && d.isInsidePlot(h.x + p.width, h.y + p.height)), b.shape && !v)) e[g ? "attr" : "animate"]({ anchorX: q ? d.plotWidth - a.plotY : a.plotX, anchorY: q ? d.plotHeight - a.plotX : a.plotY });l || (e.attr({ y: -9999 }), e.placed = !1);
    };f.prototype.justifyDataLabel = function (a, e, b, f, g, h) {
      var d = this.chart,
          p = e.align,
          c = e.verticalAlign,
          m,
          n,
          v = a.box ? 0 : a.padding || 0;m = b.x + v;0 > m && ("right" === p ? e.align = "left" : e.x = -m, n = !0);m = b.x + f.width - v;m > d.plotWidth && ("left" === p ? e.align = "right" : e.x = d.plotWidth - m, n = !0);m = b.y + v;0 > m && ("bottom" === c ? e.verticalAlign = "top" : e.y = -m, n = !0);m = b.y + f.height - v;m > d.plotHeight && ("top" === c ? e.verticalAlign = "bottom" : e.y = d.plotHeight - m, n = !0);n && (a.placed = !h, a.align(e, null, g));return n;
    };g.pie && (g.pie.prototype.drawDataLabels = function () {
      var d = this,
          e = d.data,
          b,
          g = d.chart,
          h = d.options.dataLabels,
          m = t(h.connectorPadding, 10),
          q = t(h.connectorWidth, 1),
          n = g.plotWidth,
          c = g.plotHeight,
          w,
          r = d.center,
          y = r[2] / 2,
          u = r[1],
          l,
          I,
          k,
          z,
          x = [[], []],
          M,
          N,
          E,
          O,
          C = [0, 0, 0, 0];d.visible && (h.enabled || d._hasPointLabels) && (D(e, function (a) {
        a.dataLabel && a.visible && a.dataLabel.shortened && (a.dataLabel.attr({ width: "auto" }).css({ width: "auto", textOverflow: "clip" }), a.dataLabel.shortened = !1);
      }), f.prototype.drawDataLabels.apply(d), D(e, function (a) {
        a.dataLabel && a.visible && (x[a.half].push(a), a.dataLabel._pos = null);
      }), D(x, function (e, f) {
        var q,
            p,
            w = e.length,
            v = [],
            t;if (w) for (d.sortByAngle(e, f - .5), 0 < d.maxLabelDistance && (q = Math.max(0, u - y - d.maxLabelDistance), p = Math.min(u + y + d.maxLabelDistance, g.plotHeight), D(e, function (a) {
          0 < a.labelDistance && a.dataLabel && (a.top = Math.max(0, u - y - a.labelDistance), a.bottom = Math.min(u + y + a.labelDistance, g.plotHeight), t = a.dataLabel.getBBox().height || 21, a.positionsIndex = v.push({ target: a.labelPos[1] - a.top + t / 2, size: t, rank: a.y }) - 1);
        }), a.distribute(v, p + t - q)), O = 0; O < w; O++) {
          b = e[O], p = b.positionsIndex, k = b.labelPos, l = b.dataLabel, E = !1 === b.visible ? "hidden" : "inherit", q = k[1], v && F(v[p]) ? void 0 === v[p].pos ? E = "hidden" : (z = v[p].size, N = b.top + v[p].pos) : N = q, delete b.positionIndex, M = h.justify ? r[0] + (f ? -1 : 1) * (y + b.labelDistance) : d.getX(N < b.top + 2 || N > b.bottom - 2 ? q : N, f, b), l._attr = { visibility: E, align: k[6] }, l._pos = { x: M + h.x + ({ left: m, right: -m }[k[6]] || 0), y: N + h.y - 10 }, k.x = M, k.y = N, I = l.getBBox().width, q = null, M - I < m ? (q = Math.round(I - M + m), C[3] = Math.max(q, C[3])) : M + I > n - m && (q = Math.round(M + I - n + m), C[1] = Math.max(q, C[1])), 0 > N - z / 2 ? C[0] = Math.max(Math.round(-N + z / 2), C[0]) : N + z / 2 > c && (C[2] = Math.max(Math.round(N + z / 2 - c), C[2])), l.sideOverflow = q;
        }
      }), 0 === B(C) || this.verifyDataLabelOverflow(C)) && (this.placeDataLabels(), q && D(this.points, function (a) {
        var c;w = a.connector;if ((l = a.dataLabel) && l._pos && a.visible && 0 < a.labelDistance) {
          E = l._attr.visibility;
          if (c = !w) a.connector = w = g.renderer.path().addClass("highcharts-data-label-connector highcharts-color-" + a.colorIndex).add(d.dataLabelsGroup), w.attr({ "stroke-width": q, stroke: h.connectorColor || a.color || "#666666" });w[c ? "attr" : "animate"]({ d: d.connectorPath(a.labelPos) });w.attr("visibility", E);
        } else w && (a.connector = w.destroy());
      }));
    }, g.pie.prototype.connectorPath = function (a) {
      var d = a.x,
          b = a.y;return t(this.options.dataLabels.softConnector, !0) ? ["M", d + ("left" === a[6] ? 5 : -5), b, "C", d, b, 2 * a[2] - a[4], 2 * a[3] - a[5], a[2], a[3], "L", a[4], a[5]] : ["M", d + ("left" === a[6] ? 5 : -5), b, "L", a[2], a[3], "L", a[4], a[5]];
    }, g.pie.prototype.placeDataLabels = function () {
      D(this.points, function (a) {
        var d = a.dataLabel;d && a.visible && ((a = d._pos) ? (d.sideOverflow && (d._attr.width = d.getBBox().width - d.sideOverflow, d.css({ width: d._attr.width + "px", textOverflow: "ellipsis" }), d.shortened = !0), d.attr(d._attr), d[d.moved ? "animate" : "attr"](a), d.moved = !0) : d && d.attr({ y: -9999 }));
      }, this);
    }, g.pie.prototype.alignDataLabel = x, g.pie.prototype.verifyDataLabelOverflow = function (a) {
      var d = this.center,
          b = this.options,
          e = b.center,
          f = b.minSize || 80,
          g,
          h = null !== b.size;h || (null !== e[0] ? g = Math.max(d[2] - Math.max(a[1], a[3]), f) : (g = Math.max(d[2] - a[1] - a[3], f), d[0] += (a[3] - a[1]) / 2), null !== e[1] ? g = Math.max(Math.min(g, d[2] - Math.max(a[0], a[2])), f) : (g = Math.max(Math.min(g, d[2] - a[0] - a[2]), f), d[1] += (a[0] - a[2]) / 2), g < d[2] ? (d[2] = g, d[3] = Math.min(m(b.innerSize || 0, g), g), this.translate(d), this.drawDataLabels && this.drawDataLabels()) : h = !0);return h;
    });g.column && (g.column.prototype.alignDataLabel = function (a, e, b, g, h) {
      var d = this.chart.inverted,
          q = a.series,
          p = a.dlBox || a.shapeArgs,
          c = t(a.below, a.plotY > t(this.translatedThreshold, q.yAxis.len)),
          m = t(b.inside, !!this.options.stacking);p && (g = r(p), 0 > g.y && (g.height += g.y, g.y = 0), p = g.y + g.height - q.yAxis.len, 0 < p && (g.height -= p), d && (g = { x: q.yAxis.len - g.y - g.height, y: q.xAxis.len - g.x - g.width, width: g.height, height: g.width }), m || (d ? (g.x += c ? 0 : g.width, g.width = 0) : (g.y += c ? g.height : 0, g.height = 0)));b.align = t(b.align, !d || m ? "center" : c ? "right" : "left");b.verticalAlign = t(b.verticalAlign, d || m ? "middle" : c ? "top" : "bottom");f.prototype.alignDataLabel.call(this, a, e, b, g, h);a.isLabelJustified && a.contrastColor && a.dataLabel.css({ color: a.contrastColor });
    });
  })(L);(function (a) {
    var E = a.Chart,
        B = a.each,
        F = a.pick,
        D = a.addEvent;E.prototype.callbacks.push(function (a) {
      function h() {
        var h = [];B(a.series || [], function (a) {
          var n = a.options.dataLabels,
              r = a.dataLabelCollections || ["dataLabel"];(n.enabled || a._hasPointLabels) && !n.allowOverlap && a.visible && B(r, function (m) {
            B(a.points, function (a) {
              a[m] && (a[m].labelrank = F(a.labelrank, a.shapeArgs && a.shapeArgs.height), h.push(a[m]));
            });
          });
        });a.hideOverlappingLabels(h);
      }h();D(a, "redraw", h);
    });E.prototype.hideOverlappingLabels = function (a) {
      var h = a.length,
          n,
          r,
          x,
          t,
          m,
          f,
          g,
          e,
          d,
          p = function p(a, d, e, f, g, h, c, _p) {
        return !(g > a + e || g + c < a || h > d + f || h + _p < d);
      };for (r = 0; r < h; r++) {
        if (n = a[r]) n.oldOpacity = n.opacity, n.newOpacity = 1;
      }a.sort(function (a, d) {
        return (d.labelrank || 0) - (a.labelrank || 0);
      });for (r = 0; r < h; r++) {
        for (x = a[r], n = r + 1; n < h; ++n) {
          if (t = a[n], x && t && x !== t && x.placed && t.placed && 0 !== x.newOpacity && 0 !== t.newOpacity && (m = x.alignAttr, f = t.alignAttr, g = x.parentGroup, e = t.parentGroup, d = 2 * (x.box ? 0 : x.padding), m = p(m.x + g.translateX, m.y + g.translateY, x.width - d, x.height - d, f.x + e.translateX, f.y + e.translateY, t.width - d, t.height - d))) (x.labelrank < t.labelrank ? x : t).newOpacity = 0;
        }
      }B(a, function (a) {
        var b, d;a && (d = a.newOpacity, a.oldOpacity !== d && a.placed && (d ? a.show(!0) : b = function b() {
          a.hide();
        }, a.alignAttr.opacity = d, a[a.isOld ? "animate" : "attr"](a.alignAttr, null, b)), a.isOld = !0);
      });
    };
  })(L);(function (a) {
    var E = a.addEvent,
        B = a.Chart,
        F = a.createElement,
        D = a.css,
        n = a.defaultOptions,
        h = a.defaultPlotOptions,
        u = a.each,
        r = a.extend,
        x = a.fireEvent,
        t = a.hasTouch,
        m = a.inArray,
        f = a.isObject,
        g = a.Legend,
        e = a.merge,
        d = a.pick,
        p = a.Point,
        b = a.Series,
        A = a.seriesTypes,
        v = a.svg,
        H;H = a.TrackerMixin = { drawTrackerPoint: function drawTrackerPoint() {
        var a = this,
            b = a.chart.pointer,
            c = function c(a) {
          var c = b.getPointFromEvent(a);void 0 !== c && (b.isDirectTouch = !0, c.onMouseOver(a));
        };u(a.points, function (a) {
          a.graphic && (a.graphic.element.point = a);a.dataLabel && (a.dataLabel.div ? a.dataLabel.div.point = a : a.dataLabel.element.point = a);
        });a._hasTracking || (u(a.trackerGroups, function (d) {
          if (a[d]) {
            a[d].addClass("highcharts-tracker").on("mouseover", c).on("mouseout", function (a) {
              b.onTrackerMouseOut(a);
            });if (t) a[d].on("touchstart", c);a.options.cursor && a[d].css(D).css({ cursor: a.options.cursor });
          }
        }), a._hasTracking = !0);
      }, drawTrackerGraph: function drawTrackerGraph() {
        var a = this,
            b = a.options,
            c = b.trackByArea,
            d = [].concat(c ? a.areaPath : a.graphPath),
            e = d.length,
            f = a.chart,
            g = f.pointer,
            l = f.renderer,
            h = f.options.tooltip.snap,
            k = a.tracker,
            p,
            m = function m() {
          if (f.hoverSeries !== a) a.onMouseOver();
        },
            n = "rgba(192,192,192," + (v ? .0001 : .002) + ")";if (e && !c) for (p = e + 1; p--;) {
          "M" === d[p] && d.splice(p + 1, 0, d[p + 1] - h, d[p + 2], "L"), (p && "M" === d[p] || p === e) && d.splice(p, 0, "L", d[p - 2] + h, d[p - 1]);
        }k ? k.attr({ d: d }) : a.graph && (a.tracker = l.path(d).attr({ "stroke-linejoin": "round", visibility: a.visible ? "visible" : "hidden", stroke: n, fill: c ? n : "none", "stroke-width": a.graph.strokeWidth() + (c ? 0 : 2 * h), zIndex: 2 }).add(a.group), u([a.tracker, a.markerGroup], function (a) {
          a.addClass("highcharts-tracker").on("mouseover", m).on("mouseout", function (a) {
            g.onTrackerMouseOut(a);
          });
          b.cursor && a.css({ cursor: b.cursor });if (t) a.on("touchstart", m);
        }));
      } };A.column && (A.column.prototype.drawTracker = H.drawTrackerPoint);A.pie && (A.pie.prototype.drawTracker = H.drawTrackerPoint);A.scatter && (A.scatter.prototype.drawTracker = H.drawTrackerPoint);r(g.prototype, { setItemEvents: function setItemEvents(a, b, c) {
        var d = this,
            f = d.chart.renderer.boxWrapper,
            g = "highcharts-legend-" + (a.series ? "point" : "series") + "-active";(c ? b : a.legendGroup).on("mouseover", function () {
          a.setState("hover");f.addClass(g);b.css(d.options.itemHoverStyle);
        }).on("mouseout", function () {
          b.css(e(a.visible ? d.itemStyle : d.itemHiddenStyle));f.removeClass(g);a.setState();
        }).on("click", function (c) {
          var b = function b() {
            a.setVisible && a.setVisible();
          };c = { browserEvent: c };a.firePointEvent ? a.firePointEvent("legendItemClick", c, b) : x(a, "legendItemClick", c, b);
        });
      }, createCheckboxForItem: function createCheckboxForItem(a) {
        a.checkbox = F("input", { type: "checkbox", checked: a.selected, defaultChecked: a.selected }, this.options.itemCheckboxStyle, this.chart.container);E(a.checkbox, "click", function (b) {
          x(a.series || a, "checkboxClick", { checked: b.target.checked, item: a }, function () {
            a.select();
          });
        });
      } });n.legend.itemStyle.cursor = "pointer";r(B.prototype, { showResetZoom: function showResetZoom() {
        var a = this,
            b = n.lang,
            c = a.options.chart.resetZoomButton,
            d = c.theme,
            e = d.states,
            f = "chart" === c.relativeTo ? null : "plotBox";this.resetZoomButton = a.renderer.button(b.resetZoom, null, null, function () {
          a.zoomOut();
        }, d, e && e.hover).attr({ align: c.position.align, title: b.resetZoomTitle }).addClass("highcharts-reset-zoom").add().align(c.position, !1, f);
      }, zoomOut: function zoomOut() {
        var a = this;
        x(a, "selection", { resetSelection: !0 }, function () {
          a.zoom();
        });
      }, zoom: function zoom(a) {
        var b,
            c = this.pointer,
            e = !1,
            g;!a || a.resetSelection ? u(this.axes, function (a) {
          b = a.zoom();
        }) : u(a.xAxis.concat(a.yAxis), function (a) {
          var d = a.axis;c[d.isXAxis ? "zoomX" : "zoomY"] && (b = d.zoom(a.min, a.max), d.displayBtn && (e = !0));
        });g = this.resetZoomButton;e && !g ? this.showResetZoom() : !e && f(g) && (this.resetZoomButton = g.destroy());b && this.redraw(d(this.options.chart.animation, a && a.animation, 100 > this.pointCount));
      }, pan: function pan(a, b) {
        var c = this,
            d = c.hoverPoints,
            e;d && u(d, function (a) {
          a.setState();
        });u("xy" === b ? [1, 0] : [1], function (b) {
          b = c[b ? "xAxis" : "yAxis"][0];var d = b.horiz,
              l = a[d ? "chartX" : "chartY"],
              d = d ? "mouseDownX" : "mouseDownY",
              f = c[d],
              k = (b.pointRange || 0) / 2,
              g = b.getExtremes(),
              h = b.toValue(f - l, !0) + k,
              k = b.toValue(f + b.len - l, !0) - k,
              p = k < h,
              f = p ? k : h,
              h = p ? h : k,
              k = Math.min(g.dataMin, b.toValue(b.toPixels(g.min) - b.minPixelPadding)),
              p = Math.max(g.dataMax, b.toValue(b.toPixels(g.max) + b.minPixelPadding)),
              q;q = k - f;0 < q && (h += q, f = k);q = h - p;0 < q && (h = p, f -= q);b.series.length && f !== g.min && h !== g.max && (b.setExtremes(f, h, !1, !1, { trigger: "pan" }), e = !0);c[d] = l;
        });e && c.redraw(!1);D(c.container, { cursor: "move" });
      } });r(p.prototype, { select: function select(a, b) {
        var c = this,
            e = c.series,
            f = e.chart;a = d(a, !c.selected);c.firePointEvent(a ? "select" : "unselect", { accumulate: b }, function () {
          c.selected = c.options.selected = a;e.options.data[m(c, e.data)] = c.options;c.setState(a && "select");b || u(f.getSelectedPoints(), function (a) {
            a.selected && a !== c && (a.selected = a.options.selected = !1, e.options.data[m(a, e.data)] = a.options, a.setState(""), a.firePointEvent("unselect"));
          });
        });
      },
      onMouseOver: function onMouseOver(a) {
        var b = this.series.chart,
            c = b.pointer;a = a ? c.normalize(a) : c.getChartCoordinatesFromPoint(this, b.inverted);c.runPointActions(a, this);
      }, onMouseOut: function onMouseOut() {
        var a = this.series.chart;this.firePointEvent("mouseOut");u(a.hoverPoints || [], function (a) {
          a.setState();
        });a.hoverPoints = a.hoverPoint = null;
      }, importEvents: function importEvents() {
        if (!this.hasImportedEvents) {
          var b = this,
              d = e(b.series.options.point, b.options).events;b.events = d;a.objectEach(d, function (a, d) {
            E(b, d, a);
          });this.hasImportedEvents = !0;
        }
      }, setState: function setState(a, b) {
        var c = Math.floor(this.plotX),
            e = this.plotY,
            f = this.series,
            g = f.options.states[a] || {},
            p = h[f.type].marker && f.options.marker,
            l = p && !1 === p.enabled,
            q = p && p.states && p.states[a] || {},
            k = !1 === q.enabled,
            m = f.stateMarkerGraphic,
            n = this.marker || {},
            v = f.chart,
            t = f.halo,
            u,
            x = p && f.markerAttribs;a = a || "";if (!(a === this.state && !b || this.selected && "select" !== a || !1 === g.enabled || a && (k || l && !1 === q.enabled) || a && n.states && n.states[a] && !1 === n.states[a].enabled)) {
          x && (u = f.markerAttribs(this, a));if (this.graphic) this.state && this.graphic.removeClass("highcharts-point-" + this.state), a && this.graphic.addClass("highcharts-point-" + a), this.graphic.attr(f.pointAttribs(this, a)), u && this.graphic.animate(u, d(v.options.chart.animation, q.animation, p.animation)), m && m.hide();else {
            if (a && q) {
              p = n.symbol || f.symbol;m && m.currentSymbol !== p && (m = m.destroy());if (m) m[b ? "animate" : "attr"]({ x: u.x, y: u.y });else p && (f.stateMarkerGraphic = m = v.renderer.symbol(p, u.x, u.y, u.width, u.height).add(f.markerGroup), m.currentSymbol = p);m && m.attr(f.pointAttribs(this, a));
            }m && (m[a && v.isInsidePlot(c, e, v.inverted) ? "show" : "hide"](), m.element.point = this);
          }(c = g.halo) && c.size ? (t || (f.halo = t = v.renderer.path().add((this.graphic || m).parentGroup)), t[b ? "animate" : "attr"]({ d: this.haloPath(c.size) }), t.attr({ "class": "highcharts-halo highcharts-color-" + d(this.colorIndex, f.colorIndex) }), t.point = this, t.attr(r({ fill: this.color || f.color, "fill-opacity": c.opacity, zIndex: -1 }, c.attributes))) : t && t.point && t.point.haloPath && t.animate({ d: t.point.haloPath(0) });this.state = a;
        }
      }, haloPath: function haloPath(a) {
        return this.series.chart.renderer.symbols.circle(Math.floor(this.plotX) - a, this.plotY - a, 2 * a, 2 * a);
      } });r(b.prototype, { onMouseOver: function onMouseOver() {
        var a = this.chart,
            b = a.hoverSeries;if (b && b !== this) b.onMouseOut();this.options.events.mouseOver && x(this, "mouseOver");this.setState("hover");a.hoverSeries = this;
      }, onMouseOut: function onMouseOut() {
        var a = this.options,
            b = this.chart,
            c = b.tooltip,
            d = b.hoverPoint;b.hoverSeries = null;if (d) d.onMouseOut();this && a.events.mouseOut && x(this, "mouseOut");!c || this.stickyTracking || c.shared && !this.noSharedTooltip || c.hide();this.setState();
      }, setState: function setState(a) {
        var b = this,
            c = b.options,
            e = b.graph,
            f = c.states,
            g = c.lineWidth,
            c = 0;a = a || "";if (b.state !== a && (u([b.group, b.markerGroup, b.dataLabelsGroup], function (c) {
          c && (b.state && c.removeClass("highcharts-series-" + b.state), a && c.addClass("highcharts-series-" + a));
        }), b.state = a, !f[a] || !1 !== f[a].enabled) && (a && (g = f[a].lineWidth || g + (f[a].lineWidthPlus || 0)), e && !e.dashstyle)) for (g = { "stroke-width": g }, e.animate(g, d(b.chart.options.chart.animation, f[a] && f[a].animation)); b["zone-graph-" + c];) {
          b["zone-graph-" + c].attr(g), c += 1;
        }
      }, setVisible: function setVisible(a, b) {
        var c = this,
            d = c.chart,
            e = c.legendItem,
            f,
            g = d.options.chart.ignoreHiddenSeries,
            l = c.visible;f = (c.visible = a = c.options.visible = c.userOptions.visible = void 0 === a ? !l : a) ? "show" : "hide";u(["group", "dataLabelsGroup", "markerGroup", "tracker", "tt"], function (a) {
          if (c[a]) c[a][f]();
        });if (d.hoverSeries === c || (d.hoverPoint && d.hoverPoint.series) === c) c.onMouseOut();e && d.legend.colorizeItem(c, a);c.isDirty = !0;c.options.stacking && u(d.series, function (a) {
          a.options.stacking && a.visible && (a.isDirty = !0);
        });u(c.linkedSeries, function (c) {
          c.setVisible(a, !1);
        });g && (d.isDirtyBox = !0);!1 !== b && d.redraw();x(c, f);
      }, show: function show() {
        this.setVisible(!0);
      }, hide: function hide() {
        this.setVisible(!1);
      }, select: function select(a) {
        this.selected = a = void 0 === a ? !this.selected : a;this.checkbox && (this.checkbox.checked = a);x(this, a ? "select" : "unselect");
      }, drawTracker: H.drawTrackerGraph });
  })(L);(function (a) {
    var E = a.Chart,
        B = a.each,
        F = a.inArray,
        D = a.isArray,
        n = a.isObject,
        h = a.pick,
        u = a.splat;E.prototype.setResponsive = function (h) {
      var n = this.options.responsive,
          r = [],
          m = this.currentResponsive;n && n.rules && B(n.rules, function (f) {
        void 0 === f._id && (f._id = a.uniqueKey());this.matchResponsiveRule(f, r, h);
      }, this);var f = a.merge.apply(0, a.map(r, function (f) {
        return a.find(n.rules, function (a) {
          return a._id === f;
        }).chartOptions;
      })),
          r = r.toString() || void 0;r !== (m && m.ruleIds) && (m && this.update(m.undoOptions, h), r ? (this.currentResponsive = { ruleIds: r, mergedOptions: f, undoOptions: this.currentOptions(f) }, this.update(f, h)) : this.currentResponsive = void 0);
    };E.prototype.matchResponsiveRule = function (a, n) {
      var r = a.condition;(r.callback || function () {
        return this.chartWidth <= h(r.maxWidth, Number.MAX_VALUE) && this.chartHeight <= h(r.maxHeight, Number.MAX_VALUE) && this.chartWidth >= h(r.minWidth, 0) && this.chartHeight >= h(r.minHeight, 0);
      }).call(this) && n.push(a._id);
    };E.prototype.currentOptions = function (h) {
      function r(h, f, g, e) {
        var d;a.objectEach(h, function (a, b) {
          if (!e && -1 < F(b, ["series", "xAxis", "yAxis"])) for (h[b] = u(h[b]), g[b] = [], d = 0; d < h[b].length; d++) {
            f[b][d] && (g[b][d] = {}, r(a[d], f[b][d], g[b][d], e + 1));
          } else n(a) ? (g[b] = D(a) ? [] : {}, r(a, f[b] || {}, g[b], e + 1)) : g[b] = f[b] || null;
        });
      }var t = {};r(h, this.options, t, 0);return t;
    };
  })(L);(function (a) {
    var E = a.addEvent,
        B = a.Axis,
        F = a.Chart,
        D = a.css,
        n = a.dateFormat,
        h = a.defined,
        u = a.each,
        r = a.extend,
        x = a.noop,
        t = a.timeUnits,
        m = a.wrap;m(a.Series.prototype, "init", function (a) {
      var f;a.apply(this, Array.prototype.slice.call(arguments, 1));(f = this.xAxis) && f.options.ordinal && E(this, "updatedData", function () {
        delete f.ordinalIndex;
      });
    });m(B.prototype, "getTimeTicks", function (a, g, e, d, p, b, m, v) {
      var f = 0,
          q,
          r,
          c = {},
          w,
          u,
          y,
          x = [],
          l = -Number.MAX_VALUE,
          I = this.options.tickPixelInterval;
      if (!this.options.ordinal && !this.options.breaks || !b || 3 > b.length || void 0 === e) return a.call(this, g, e, d, p);u = b.length;for (q = 0; q < u; q++) {
        y = q && b[q - 1] > d;b[q] < e && (f = q);if (q === u - 1 || b[q + 1] - b[q] > 5 * m || y) {
          if (b[q] > l) {
            for (r = a.call(this, g, b[f], b[q], p); r.length && r[0] <= l;) {
              r.shift();
            }r.length && (l = r[r.length - 1]);x = x.concat(r);
          }f = q + 1;
        }if (y) break;
      }a = r.info;if (v && a.unitRange <= t.hour) {
        q = x.length - 1;for (f = 1; f < q; f++) {
          n("%d", x[f]) !== n("%d", x[f - 1]) && (c[x[f]] = "day", w = !0);
        }w && (c[x[0]] = "day");a.higherRanks = c;
      }x.info = a;if (v && h(I)) {
        v = a = x.length;
        q = [];var k;for (w = []; v--;) {
          f = this.translate(x[v]), k && (w[v] = k - f), q[v] = k = f;
        }w.sort();w = w[Math.floor(w.length / 2)];w < .6 * I && (w = null);v = x[a - 1] > d ? a - 1 : a;for (k = void 0; v--;) {
          f = q[v], d = Math.abs(k - f), k && d < .8 * I && (null === w || d < .8 * w) ? (c[x[v]] && !c[x[v + 1]] ? (d = v + 1, k = f) : d = v, x.splice(d, 1)) : k = f;
        }
      }return x;
    });r(B.prototype, { beforeSetTickPositions: function beforeSetTickPositions() {
        var a,
            g = [],
            e = !1,
            d,
            h = this.getExtremes(),
            b = h.min,
            m = h.max,
            n,
            r = this.isXAxis && !!this.options.breaks,
            h = this.options.ordinal,
            q = this.chart.options.chart.ignoreHiddenSeries;if (h || r) {
          u(this.series, function (b, c) {
            if (!(q && !1 === b.visible || !1 === b.takeOrdinalPosition && !r) && (g = g.concat(b.processedXData), a = g.length, g.sort(function (a, c) {
              return a - c;
            }), a)) for (c = a - 1; c--;) {
              g[c] === g[c + 1] && g.splice(c, 1);
            }
          });a = g.length;if (2 < a) {
            d = g[1] - g[0];for (n = a - 1; n-- && !e;) {
              g[n + 1] - g[n] !== d && (e = !0);
            }!this.options.keepOrdinalPadding && (g[0] - b > d || m - g[g.length - 1] > d) && (e = !0);
          }e ? (this.ordinalPositions = g, d = this.ordinal2lin(Math.max(b, g[0]), !0), n = Math.max(this.ordinal2lin(Math.min(m, g[g.length - 1]), !0), 1), this.ordinalSlope = m = (m - b) / (n - d), this.ordinalOffset = b - d * m) : this.ordinalPositions = this.ordinalSlope = this.ordinalOffset = void 0;
        }this.isOrdinal = h && e;this.groupIntervalFactor = null;
      }, val2lin: function val2lin(a, g) {
        var e = this.ordinalPositions;if (e) {
          var d = e.length,
              f,
              b;for (f = d; f--;) {
            if (e[f] === a) {
              b = f;break;
            }
          }for (f = d - 1; f--;) {
            if (a > e[f] || 0 === f) {
              a = (a - e[f]) / (e[f + 1] - e[f]);b = f + a;break;
            }
          }g = g ? b : this.ordinalSlope * (b || 0) + this.ordinalOffset;
        } else g = a;return g;
      }, lin2val: function lin2val(a, g) {
        var e = this.ordinalPositions;if (e) {
          var d = this.ordinalSlope,
              f = this.ordinalOffset,
              b = e.length - 1,
              h;if (g) 0 > a ? a = e[0] : a > b ? a = e[b] : (b = Math.floor(a), h = a - b);else for (; b--;) {
            if (g = d * b + f, a >= g) {
              d = d * (b + 1) + f;h = (a - g) / (d - g);break;
            }
          }return void 0 !== h && void 0 !== e[b] ? e[b] + (h ? h * (e[b + 1] - e[b]) : 0) : a;
        }return a;
      }, getExtendedPositions: function getExtendedPositions() {
        var a = this.chart,
            g = this.series[0].currentDataGrouping,
            e = this.ordinalIndex,
            d = g ? g.count + g.unitName : "raw",
            h = this.getExtremes(),
            b,
            m;e || (e = this.ordinalIndex = {});e[d] || (b = { series: [], chart: a, getExtremes: function getExtremes() {
            return { min: h.dataMin, max: h.dataMax };
          }, options: { ordinal: !0 }, val2lin: B.prototype.val2lin,
          ordinal2lin: B.prototype.ordinal2lin }, u(this.series, function (d) {
          m = { xAxis: b, xData: d.xData, chart: a, destroyGroupedData: x };m.options = { dataGrouping: g ? { enabled: !0, forced: !0, approximation: "open", units: [[g.unitName, [g.count]]] } : { enabled: !1 } };d.processData.apply(m);b.series.push(m);
        }), this.beforeSetTickPositions.apply(b), e[d] = b.ordinalPositions);return e[d];
      }, getGroupIntervalFactor: function getGroupIntervalFactor(a, g, e) {
        var d;e = e.processedXData;var f = e.length,
            b = [];d = this.groupIntervalFactor;if (!d) {
          for (d = 0; d < f - 1; d++) {
            b[d] = e[d + 1] - e[d];
          }b.sort(function (a, b) {
            return a - b;
          });b = b[Math.floor(f / 2)];a = Math.max(a, e[0]);g = Math.min(g, e[f - 1]);this.groupIntervalFactor = d = f * b / (g - a);
        }return d;
      }, postProcessTickInterval: function postProcessTickInterval(a) {
        var f = this.ordinalSlope;return f ? this.options.breaks ? this.closestPointRange : a / (f / this.closestPointRange) : a;
      } });B.prototype.ordinal2lin = B.prototype.val2lin;m(F.prototype, "pan", function (a, g) {
      var e = this.xAxis[0],
          d = g.chartX,
          f = !1;if (e.options.ordinal && e.series.length) {
        var b = this.mouseDownX,
            h = e.getExtremes(),
            m = h.dataMax,
            n = h.min,
            q = h.max,
            r = this.hoverPoints,
            c = e.closestPointRange,
            b = (b - d) / (e.translationSlope * (e.ordinalSlope || c)),
            w = { ordinalPositions: e.getExtendedPositions() },
            c = e.lin2val,
            t = e.val2lin,
            y;w.ordinalPositions ? 1 < Math.abs(b) && (r && u(r, function (a) {
          a.setState();
        }), 0 > b ? (r = w, y = e.ordinalPositions ? e : w) : (r = e.ordinalPositions ? e : w, y = w), w = y.ordinalPositions, m > w[w.length - 1] && w.push(m), this.fixedRange = q - n, b = e.toFixedRange(null, null, c.apply(r, [t.apply(r, [n, !0]) + b, !0]), c.apply(y, [t.apply(y, [q, !0]) + b, !0])), b.min >= Math.min(h.dataMin, n) && b.max <= Math.max(m, q) && e.setExtremes(b.min, b.max, !0, !1, { trigger: "pan" }), this.mouseDownX = d, D(this.container, { cursor: "move" })) : f = !0;
      } else f = !0;f && a.apply(this, Array.prototype.slice.call(arguments, 1));
    });
  })(L);(function (a) {
    function E() {
      return Array.prototype.slice.call(arguments, 1);
    }function B(a) {
      a.apply(this);this.drawBreaks(this.xAxis, ["x"]);this.drawBreaks(this.yAxis, F(this.pointArrayMap, ["y"]));
    }var F = a.pick,
        D = a.wrap,
        n = a.each,
        h = a.extend,
        u = a.isArray,
        r = a.fireEvent,
        x = a.Axis,
        t = a.Series;h(x.prototype, { isInBreak: function isInBreak(a, f) {
        var g = a.repeat || Infinity,
            e = a.from,
            d = a.to - a.from;f = f >= e ? (f - e) % g : g - (e - f) % g;return a.inclusive ? f <= d : f < d && 0 !== f;
      }, isInAnyBreak: function isInAnyBreak(a, f) {
        var g = this.options.breaks,
            e = g && g.length,
            d,
            h,
            b;if (e) {
          for (; e--;) {
            this.isInBreak(g[e], a) && (d = !0, h || (h = F(g[e].showPoints, this.isXAxis ? !1 : !0)));
          }b = d && f ? d && !h : d;
        }return b;
      } });D(x.prototype, "setTickPositions", function (a) {
      a.apply(this, Array.prototype.slice.call(arguments, 1));if (this.options.breaks) {
        var f = this.tickPositions,
            g = this.tickPositions.info,
            e = [],
            d;for (d = 0; d < f.length; d++) {
          this.isInAnyBreak(f[d]) || e.push(f[d]);
        }this.tickPositions = e;this.tickPositions.info = g;
      }
    });D(x.prototype, "init", function (a, f, g) {
      var e = this;g.breaks && g.breaks.length && (g.ordinal = !1);a.call(this, f, g);a = this.options.breaks;e.isBroken = u(a) && !!a.length;e.isBroken && (e.val2lin = function (a) {
        var d = a,
            b,
            f;for (f = 0; f < e.breakArray.length; f++) {
          if (b = e.breakArray[f], b.to <= a) d -= b.len;else if (b.from >= a) break;else if (e.isInBreak(b, a)) {
            d -= a - b.from;break;
          }
        }return d;
      }, e.lin2val = function (a) {
        var d, b;for (b = 0; b < e.breakArray.length && !(d = e.breakArray[b], d.from >= a); b++) {
          d.to < a ? a += d.len : e.isInBreak(d, a) && (a += d.len);
        }return a;
      }, e.setExtremes = function (a, e, b, f, g) {
        for (; this.isInAnyBreak(a);) {
          a -= this.closestPointRange;
        }for (; this.isInAnyBreak(e);) {
          e -= this.closestPointRange;
        }x.prototype.setExtremes.call(this, a, e, b, f, g);
      }, e.setAxisTranslation = function (a) {
        x.prototype.setAxisTranslation.call(this, a);a = e.options.breaks;var d = [],
            b = [],
            f = 0,
            g,
            h,
            m = e.userMin || e.min,
            u = e.userMax || e.max,
            c = F(e.pointRangePadding, 0),
            w,
            t;n(a, function (a) {
          h = a.repeat || Infinity;e.isInBreak(a, m) && (m += a.to % h - m % h);e.isInBreak(a, u) && (u -= u % h - a.from % h);
        });n(a, function (a) {
          w = a.from;for (h = a.repeat || Infinity; w - h > m;) {
            w -= h;
          }for (; w < m;) {
            w += h;
          }for (t = w; t < u; t += h) {
            d.push({ value: t, move: "in" }), d.push({ value: t + (a.to - a.from), move: "out", size: a.breakSize });
          }
        });d.sort(function (a, c) {
          return a.value === c.value ? ("in" === a.move ? 0 : 1) - ("in" === c.move ? 0 : 1) : a.value - c.value;
        });g = 0;w = m;n(d, function (a) {
          g += "in" === a.move ? 1 : -1;1 === g && "in" === a.move && (w = a.value);0 === g && (b.push({ from: w, to: a.value, len: a.value - w - (a.size || 0) }), f += a.value - w - (a.size || 0));
        });
        e.breakArray = b;e.unitLength = u - m - f + c;r(e, "afterBreaks");e.options.staticScale ? e.transA = e.options.staticScale : e.unitLength && (e.transA *= (u - e.min + c) / e.unitLength);c && (e.minPixelPadding = e.transA * e.minPointOffset);e.min = m;e.max = u;
      });
    });D(t.prototype, "generatePoints", function (a) {
      a.apply(this, E(arguments));var f = this.xAxis,
          g = this.yAxis,
          e = this.points,
          d,
          h = e.length,
          b = this.options.connectNulls,
          m;if (f && g && (f.options.breaks || g.options.breaks)) for (; h--;) {
        d = e[h], m = null === d.y && !1 === b, m || !f.isInAnyBreak(d.x, !0) && !g.isInAnyBreak(d.y, !0) || (e.splice(h, 1), this.data[h] && this.data[h].destroyElements());
      }
    });a.Series.prototype.drawBreaks = function (a, f) {
      var g = this,
          e = g.points,
          d,
          h,
          b,
          m;a && n(f, function (f) {
        d = a.breakArray || [];h = a.isXAxis ? a.min : F(g.options.threshold, a.min);n(e, function (e) {
          m = F(e["stack" + f.toUpperCase()], e[f]);n(d, function (d) {
            b = !1;if (h < d.from && m > d.to || h > d.from && m < d.from) b = "pointBreak";else if (h < d.from && m > d.from && m < d.to || h > d.from && m > d.to && m < d.from) b = "pointInBreak";b && r(a, b, { point: e, brk: d });
          });
        });
      });
    };a.Series.prototype.gappedPath = function () {
      var a = this.options.gapSize,
          f = this.points.slice(),
          g = f.length - 1;if (a && 0 < g) for (; g--;) {
        f[g + 1].x - f[g].x > this.closestPointRange * a && f.splice(g + 1, 0, { isNull: !0 });
      }return this.getGraphPath(f);
    };D(a.seriesTypes.column.prototype, "drawPoints", B);D(a.Series.prototype, "drawPoints", B);
  })(L);(function (a) {
    var E = a.arrayMax,
        B = a.arrayMin,
        F = a.Axis,
        D = a.defaultPlotOptions,
        n = a.defined,
        h = a.each,
        u = a.extend,
        r = a.format,
        x = a.isNumber,
        t = a.merge,
        m = a.pick,
        f = a.Point,
        g = a.Tooltip,
        e = a.wrap,
        d = a.Series.prototype,
        p = d.processData,
        b = d.generatePoints,
        A = d.destroy,
        v = { approximation: "average", groupPixelWidth: 2, dateTimeLabelFormats: { millisecond: ["%A, %b %e, %H:%M:%S.%L", "%A, %b %e, %H:%M:%S.%L", "-%H:%M:%S.%L"], second: ["%A, %b %e, %H:%M:%S", "%A, %b %e, %H:%M:%S", "-%H:%M:%S"], minute: ["%A, %b %e, %H:%M", "%A, %b %e, %H:%M", "-%H:%M"], hour: ["%A, %b %e, %H:%M", "%A, %b %e, %H:%M", "-%H:%M"], day: ["%A, %b %e, %Y", "%A, %b %e", "-%A, %b %e, %Y"], week: ["Week from %A, %b %e, %Y", "%A, %b %e", "-%A, %b %e, %Y"], month: ["%B %Y", "%B", "-%B %Y"], year: ["%Y", "%Y", "-%Y"] } },
        H = { line: {}, spline: {}, area: {}, areaspline: {}, column: { approximation: "sum", groupPixelWidth: 10 }, arearange: { approximation: "range" }, areasplinerange: { approximation: "range" }, columnrange: { approximation: "range", groupPixelWidth: 10 }, candlestick: { approximation: "ohlc", groupPixelWidth: 10 }, ohlc: { approximation: "ohlc", groupPixelWidth: 5 } },
        q = a.defaultDataGroupingUnits = [["millisecond", [1, 2, 5, 10, 20, 25, 50, 100, 200, 500]], ["second", [1, 2, 5, 10, 15, 30]], ["minute", [1, 2, 5, 10, 15, 30]], ["hour", [1, 2, 3, 4, 6, 8, 12]], ["day", [1]], ["week", [1]], ["month", [1, 3, 6]], ["year", null]],
        J = { sum: function sum(a) {
        var c = a.length,
            b;if (!c && a.hasNulls) b = null;else if (c) for (b = 0; c--;) {
          b += a[c];
        }return b;
      }, average: function average(a) {
        var c = a.length;a = J.sum(a);x(a) && c && (a /= c);return a;
      }, averages: function averages() {
        var a = [];h(arguments, function (c) {
          a.push(J.average(c));
        });return a;
      }, open: function open(a) {
        return a.length ? a[0] : a.hasNulls ? null : void 0;
      }, high: function high(a) {
        return a.length ? E(a) : a.hasNulls ? null : void 0;
      }, low: function low(a) {
        return a.length ? B(a) : a.hasNulls ? null : void 0;
      }, close: function close(a) {
        return a.length ? a[a.length - 1] : a.hasNulls ? null : void 0;
      }, ohlc: function ohlc(a, b, d, e) {
        a = J.open(a);b = J.high(b);d = J.low(d);e = J.close(e);if (x(a) || x(b) || x(d) || x(e)) return [a, b, d, e];
      }, range: function range(a, b) {
        a = J.low(a);b = J.high(b);if (x(a) || x(b)) return [a, b];if (null === a && null === b) return null;
      } };d.groupData = function (a, b, d, e) {
      var c = this.data,
          f = this.options.data,
          g = [],
          k = [],
          p = [],
          m = a.length,
          n,
          q,
          r = !!b,
          w = [];e = "function" === typeof e ? e : J[e] || H[this.type] && J[H[this.type].approximation] || J[v.approximation];var u = this.pointArrayMap,
          t = u && u.length,
          y = 0;q = 0;var K, A;t ? h(u, function () {
        w.push([]);
      }) : w.push([]);K = t || 1;for (A = 0; A <= m && !(a[A] >= d[0]); A++) {}for (A; A <= m; A++) {
        for (; void 0 !== d[y + 1] && a[A] >= d[y + 1] || A === m;) {
          n = d[y];this.dataGroupInfo = { start: q, length: w[0].length };q = e.apply(this, w);void 0 !== q && (g.push(n), k.push(q), p.push(this.dataGroupInfo));q = A;for (n = 0; n < K; n++) {
            w[n].length = 0, w[n].hasNulls = !1;
          }y += 1;if (A === m) break;
        }if (A === m) break;if (u) {
          n = this.cropStart + A;var B = c && c[n] || this.pointClass.prototype.applyOptions.apply({ series: this }, [f[n]]),
              D;for (n = 0; n < t; n++) {
            D = B[u[n]], x(D) ? w[n].push(D) : null === D && (w[n].hasNulls = !0);
          }
        } else n = r ? b[A] : null, x(n) ? w[0].push(n) : null === n && (w[0].hasNulls = !0);
      }return [g, k, p];
    };d.processData = function () {
      var a = this.chart,
          b = this.options.dataGrouping,
          e = !1 !== this.allowDG && b && m(b.enabled, a.options.isStock),
          f = this.visible || !a.options.chart.ignoreHiddenSeries,
          g;this.forceCrop = e;this.groupPixelWidth = null;this.hasProcessed = !0;if (!1 !== p.apply(this, arguments) && e) {
        this.destroyGroupedData();var l = this.processedXData,
            h = this.processedYData,
            k = a.plotSizeX,
            a = this.xAxis,
            v = a.options.ordinal,
            r = this.groupPixelWidth = a.getGroupPixelWidth && a.getGroupPixelWidth();if (r) {
          this.isDirty = g = !0;this.points = null;var u = a.getExtremes(),
              e = u.min,
              u = u.max,
              v = v && a.getGroupIntervalFactor(e, u, this) || 1,
              k = r * (u - e) / k * v,
              r = a.getTimeTicks(a.normalizeTimeTickInterval(k, b.units || q), Math.min(e, l[0]), Math.max(u, l[l.length - 1]), a.options.startOfWeek, l, this.closestPointRange),
              l = d.groupData.apply(this, [l, h, r, b.approximation]),
              h = l[0],
              v = l[1];if (b.smoothed) {
            b = h.length - 1;for (h[b] = Math.min(h[b], u); b-- && 0 < b;) {
              h[b] += k / 2;
            }h[0] = Math.max(h[0], e);
          }this.currentDataGrouping = r.info;this.closestPointRange = r.info.totalRange;this.groupMap = l[2];n(h[0]) && h[0] < a.dataMin && f && (a.min === a.dataMin && (a.min = h[0]), a.dataMin = h[0]);this.processedXData = h;this.processedYData = v;
        } else this.currentDataGrouping = this.groupMap = null;this.hasGroupedData = g;
      }
    };d.destroyGroupedData = function () {
      var a = this.groupedData;h(a || [], function (c, b) {
        c && (a[b] = c.destroy ? c.destroy() : null);
      });this.groupedData = null;
    };d.generatePoints = function () {
      b.apply(this);
      this.destroyGroupedData();this.groupedData = this.hasGroupedData ? this.points : null;
    };e(f.prototype, "update", function (c) {
      this.dataGroup ? a.error(24) : c.apply(this, [].slice.call(arguments, 1));
    });e(g.prototype, "tooltipFooterHeaderFormatter", function (c, b, d) {
      var e = b.series,
          f = e.tooltipOptions,
          l = e.options.dataGrouping,
          g = f.xDateFormat,
          k,
          h = e.xAxis,
          p = a.dateFormat;return h && "datetime" === h.options.type && l && x(b.key) ? (c = e.currentDataGrouping, l = l.dateTimeLabelFormats, c ? (h = l[c.unitName], 1 === c.count ? g = h[0] : (g = h[1], k = h[2])) : !g && l && (g = this.getXDateFormat(b, f, h)), g = p(g, b.key), k && (g += p(k, b.key + c.totalRange - 1)), r(f[(d ? "footer" : "header") + "Format"], { point: u(b.point, { key: g }), series: e })) : c.call(this, b, d);
    });d.destroy = function () {
      for (var a = this.groupedData || [], b = a.length; b--;) {
        a[b] && a[b].destroy();
      }A.apply(this);
    };e(d, "setOptions", function (a, b) {
      a = a.call(this, b);var c = this.type,
          d = this.chart.options.plotOptions,
          e = D[c].dataGrouping;H[c] && (e || (e = t(v, H[c])), a.dataGrouping = t(e, d.series && d.series.dataGrouping, d[c].dataGrouping, b.dataGrouping));
      this.chart.options.isStock && (this.requireSorting = !0);return a;
    });e(F.prototype, "setScale", function (a) {
      a.call(this);h(this.series, function (a) {
        a.hasProcessed = !1;
      });
    });F.prototype.getGroupPixelWidth = function () {
      var a = this.series,
          b = a.length,
          d,
          e = 0,
          f = !1,
          l;for (d = b; d--;) {
        (l = a[d].options.dataGrouping) && (e = Math.max(e, l.groupPixelWidth));
      }for (d = b; d--;) {
        (l = a[d].options.dataGrouping) && a[d].hasProcessed && (b = (a[d].processedXData || a[d].data).length, a[d].groupPixelWidth || b > this.chart.plotSizeX / e || b && l.forced) && (f = !0);
      }return f ? e : 0;
    };F.prototype.setDataGrouping = function (a, b) {
      var c;b = m(b, !0);a || (a = { forced: !1, units: null });if (this instanceof F) for (c = this.series.length; c--;) {
        this.series[c].update({ dataGrouping: a }, !1);
      } else h(this.chart.options.series, function (c) {
        c.dataGrouping = a;
      }, !1);b && this.chart.redraw();
    };
  })(L);(function (a) {
    var E = a.each,
        B = a.Point,
        F = a.seriesType,
        D = a.seriesTypes;F("ohlc", "column", { lineWidth: 1, tooltip: { pointFormat: "<span style=\"color:{point.color}\">\u25CF</span> <b> {series.name}</b><br/>Open: {point.open}<br/>High: {point.high}<br/>Low: {point.low}<br/>Close: {point.close}<br/>" },
      threshold: null, states: { hover: { lineWidth: 3 } }, stickyTracking: !0 }, { directTouch: !1, pointArrayMap: ["open", "high", "low", "close"], toYData: function toYData(a) {
        return [a.open, a.high, a.low, a.close];
      }, pointValKey: "close", pointAttrToOptions: { stroke: "color", "stroke-width": "lineWidth" }, pointAttribs: function pointAttribs(a, h) {
        h = D.column.prototype.pointAttribs.call(this, a, h);var n = this.options;delete h.fill;!a.options.color && n.upColor && a.open < a.close && (h.stroke = n.upColor);return h;
      }, translate: function translate() {
        var a = this,
            h = a.yAxis,
            u = !!a.modifyValue,
            r = ["plotOpen", "plotHigh", "plotLow", "plotClose", "yBottom"];D.column.prototype.translate.apply(a);E(a.points, function (n) {
          E([n.open, n.high, n.low, n.close, n.low], function (t, m) {
            null !== t && (u && (t = a.modifyValue(t)), n[r[m]] = h.toPixels(t, !0));
          });n.tooltipPos[1] = n.plotHigh + h.pos - a.chart.plotTop;
        });
      }, drawPoints: function drawPoints() {
        var a = this,
            h = a.chart;E(a.points, function (n) {
          var r,
              u,
              t,
              m,
              f = n.graphic,
              g,
              e = !f;void 0 !== n.plotY && (f || (n.graphic = f = h.renderer.path().add(a.group)), f.attr(a.pointAttribs(n, n.selected && "select")), u = f.strokeWidth() % 2 / 2, g = Math.round(n.plotX) - u, t = Math.round(n.shapeArgs.width / 2), m = ["M", g, Math.round(n.yBottom), "L", g, Math.round(n.plotHigh)], null !== n.open && (r = Math.round(n.plotOpen) + u, m.push("M", g, r, "L", g - t, r)), null !== n.close && (r = Math.round(n.plotClose) + u, m.push("M", g, r, "L", g + t, r)), f[e ? "attr" : "animate"]({ d: m }).addClass(n.getClassName(), !0));
        });
      }, animate: null }, { getClassName: function getClassName() {
        return B.prototype.getClassName.call(this) + (this.open < this.close ? " highcharts-point-up" : " highcharts-point-down");
      } });
  })(L);(function (a) {
    var E = a.defaultPlotOptions,
        B = a.each,
        F = a.merge,
        D = a.seriesType,
        n = a.seriesTypes;D("candlestick", "ohlc", F(E.column, { states: { hover: { lineWidth: 2 } }, tooltip: E.ohlc.tooltip, threshold: null, lineColor: "#000000", lineWidth: 1, upColor: "#ffffff", stickyTracking: !0 }), { pointAttribs: function pointAttribs(a, u) {
        var h = n.column.prototype.pointAttribs.call(this, a, u),
            x = this.options,
            t = a.open < a.close,
            m = x.lineColor || this.color;h["stroke-width"] = x.lineWidth;h.fill = a.options.color || (t ? x.upColor || this.color : this.color);h.stroke = a.lineColor || (t ? x.upLineColor || m : m);u && (a = x.states[u], h.fill = a.color || h.fill, h.stroke = a.lineColor || h.stroke, h["stroke-width"] = a.lineWidth || h["stroke-width"]);return h;
      }, drawPoints: function drawPoints() {
        var a = this,
            n = a.chart;B(a.points, function (h) {
          var r = h.graphic,
              t,
              m,
              f,
              g,
              e,
              d,
              p,
              b = !r;void 0 !== h.plotY && (r || (h.graphic = r = n.renderer.path().add(a.group)), r.attr(a.pointAttribs(h, h.selected && "select")).shadow(a.options.shadow), e = r.strokeWidth() % 2 / 2, d = Math.round(h.plotX) - e, t = h.plotOpen, m = h.plotClose, f = Math.min(t, m), t = Math.max(t, m), p = Math.round(h.shapeArgs.width / 2), m = Math.round(f) !== Math.round(h.plotHigh), g = t !== h.yBottom, f = Math.round(f) + e, t = Math.round(t) + e, e = [], e.push("M", d - p, t, "L", d - p, f, "L", d + p, f, "L", d + p, t, "Z", "M", d, f, "L", d, m ? Math.round(h.plotHigh) : f, "M", d, t, "L", d, g ? Math.round(h.yBottom) : t), r[b ? "attr" : "animate"]({ d: e }).addClass(h.getClassName(), !0));
        });
      } });
  })(L);(function (a) {
    var E = a.addEvent,
        B = a.each,
        F = a.merge,
        D = a.noop,
        n = a.Renderer,
        h = a.seriesType,
        u = a.seriesTypes,
        r = a.TrackerMixin,
        x = a.VMLRenderer,
        t = a.SVGRenderer.prototype.symbols,
        m = a.stableSort;h("flags", "column", { pointRange: 0, shape: "flag", stackDistance: 12, textAlign: "center", tooltip: { pointFormat: "{point.text}\x3cbr/\x3e" }, threshold: null, y: -30, fillColor: "#ffffff", lineWidth: 1, states: { hover: { lineColor: "#000000", fillColor: "#ccd6eb" } }, style: { fontSize: "11px", fontWeight: "bold" } }, { sorted: !1, noSharedTooltip: !0, allowDG: !1, takeOrdinalPosition: !1, trackerGroups: ["markerGroup"], forceCrop: !0, init: a.Series.prototype.init, pointAttribs: function pointAttribs(a, g) {
        var e = this.options,
            d = a && a.color || this.color,
            f = e.lineColor,
            b = a && a.lineWidth;
        a = a && a.fillColor || e.fillColor;g && (a = e.states[g].fillColor, f = e.states[g].lineColor, b = e.states[g].lineWidth);return { fill: a || d, stroke: f || d, "stroke-width": b || e.lineWidth || 0 };
      }, translate: function translate() {
        u.column.prototype.translate.apply(this);var a = this.options,
            g = this.chart,
            e = this.points,
            d = e.length - 1,
            h,
            b,
            n = a.onSeries;h = n && g.get(n);var a = a.onKey || "y",
            n = h && h.options.step,
            v = h && h.points,
            r = v && v.length,
            q = this.xAxis,
            t = this.yAxis,
            c = q.getExtremes(),
            w = 0,
            x,
            y,
            G;if (h && h.visible && r) for (w = (h.pointXOffset || 0) + (h.barW || 0) / 2, h = h.currentDataGrouping, y = v[r - 1].x + (h ? h.totalRange : 0), m(e, function (a, c) {
          return a.x - c.x;
        }), a = "plot" + a[0].toUpperCase() + a.substr(1); r-- && e[d] && !(h = e[d], x = v[r], x.x <= h.x && void 0 !== x[a] && (h.x <= y && (h.plotY = x[a], x.x < h.x && !n && (G = v[r + 1]) && void 0 !== G[a] && (h.plotY += (h.x - x.x) / (G.x - x.x) * (G[a] - x[a]))), d--, r++, 0 > d));) {}B(e, function (a, d) {
          var f;void 0 === a.plotY && (a.x >= c.min && a.x <= c.max ? a.plotY = g.chartHeight - q.bottom - (q.opposite ? q.height : 0) + q.offset - t.top : a.shapeArgs = {});a.plotX += w;(b = e[d - 1]) && b.plotX === a.plotX && (void 0 === b.stackIndex && (b.stackIndex = 0), f = b.stackIndex + 1);a.stackIndex = f;
        });
      }, drawPoints: function drawPoints() {
        var f = this.points,
            g = this.chart,
            e = g.renderer,
            d,
            h,
            b = this.options,
            m = b.y,
            n,
            r,
            q,
            t,
            c,
            w,
            u,
            y = this.yAxis;for (r = f.length; r--;) {
          q = f[r], u = q.plotX > this.xAxis.len, d = q.plotX, t = q.stackIndex, n = q.options.shape || b.shape, h = q.plotY, void 0 !== h && (h = q.plotY + m - (void 0 !== t && t * b.stackDistance)), c = t ? void 0 : q.plotX, w = t ? void 0 : q.plotY, t = q.graphic, void 0 !== h && 0 <= d && !u ? (t || (t = q.graphic = e.label("", null, null, n, null, null, b.useHTML).attr(this.pointAttribs(q)).css(F(b.style, q.style)).attr({ align: "flag" === n ? "left" : "center", width: b.width, height: b.height, "text-align": b.textAlign }).addClass("highcharts-point").add(this.markerGroup), q.graphic.div && (q.graphic.div.point = q), t.shadow(b.shadow)), 0 < d && (d -= t.strokeWidth() % 2), t.attr({ text: q.options.title || b.title || "A", x: d, y: h, anchorX: c, anchorY: w }), q.tooltipPos = g.inverted ? [y.len + y.pos - g.plotLeft - h, this.xAxis.len - d] : [d, h + y.pos - g.plotTop]) : t && (q.graphic = t.destroy());
        }b.useHTML && a.wrap(this.markerGroup, "on", function (c) {
          return a.SVGElement.prototype.on.apply(c.apply(this, [].slice.call(arguments, 1)), [].slice.call(arguments, 1));
        });
      }, drawTracker: function drawTracker() {
        var a = this.points;r.drawTrackerPoint.apply(this);B(a, function (f) {
          var e = f.graphic;e && E(e.element, "mouseover", function () {
            0 < f.stackIndex && !f.raised && (f._y = e.y, e.attr({ y: f._y - 8 }), f.raised = !0);B(a, function (a) {
              a !== f && a.raised && a.graphic && (a.graphic.attr({ y: a._y }), a.raised = !1);
            });
          });
        });
      }, animate: D, buildKDTree: D, setClip: D });t.flag = function (a, g, e, d, h) {
      return ["M", h && h.anchorX || a, h && h.anchorY || g, "L", a, g + d, a, g, a + e, g, a + e, g + d, a, g + d, "Z"];
    };
    B(["circle", "square"], function (a) {
      t[a + "pin"] = function (f, e, d, h, b) {
        var g = b && b.anchorX;b = b && b.anchorY;"circle" === a && h > d && (f -= Math.round((h - d) / 2), d = h);f = t[a](f, e, d, h);g && b && f.push("M", g, e > b ? e : e + h, "L", g, b);return f;
      };
    });n === x && B(["flag", "circlepin", "squarepin"], function (a) {
      x.prototype.symbols[a] = t[a];
    });
  })(L);(function (a) {
    function E(a, b, d) {
      this.init(a, b, d);
    }var B = a.addEvent,
        F = a.Axis,
        D = a.correctFloat,
        n = a.defaultOptions,
        h = a.defined,
        u = a.destroyObjectProperties,
        r = a.doc,
        x = a.each,
        t = a.fireEvent,
        m = a.hasTouch,
        f = a.isTouchDevice,
        g = a.merge,
        e = a.pick,
        d = a.removeEvent,
        p = a.wrap,
        b,
        A = { height: f ? 20 : 14, barBorderRadius: 0, buttonBorderRadius: 0, liveRedraw: a.svg && !f, margin: 10, minWidth: 6, step: .2, zIndex: 3, barBackgroundColor: "#cccccc", barBorderWidth: 1, barBorderColor: "#cccccc", buttonArrowColor: "#333333", buttonBackgroundColor: "#e6e6e6", buttonBorderColor: "#cccccc", buttonBorderWidth: 1, rifleColor: "#333333", trackBackgroundColor: "#f2f2f2", trackBorderColor: "#f2f2f2", trackBorderWidth: 1 };n.scrollbar = g(!0, A, n.scrollbar);a.swapXY = b = function b(a, _b) {
      var d = a.length,
          e;if (_b) for (_b = 0; _b < d; _b += 3) {
        e = a[_b + 1], a[_b + 1] = a[_b + 2], a[_b + 2] = e;
      }return a;
    };E.prototype = { init: function init(a, b, d) {
        this.scrollbarButtons = [];this.renderer = a;this.userOptions = b;this.options = g(A, b);this.chart = d;this.size = e(this.options.size, this.options.height);b.enabled && (this.render(), this.initEvents(), this.addEvents());
      }, render: function render() {
        var a = this.renderer,
            d = this.options,
            e = this.size,
            f;this.group = f = a.g("scrollbar").attr({ zIndex: d.zIndex, translateY: -99999 }).add();this.track = a.rect().addClass("highcharts-scrollbar-track").attr({ x: 0,
          r: d.trackBorderRadius || 0, height: e, width: e }).add(f);this.track.attr({ fill: d.trackBackgroundColor, stroke: d.trackBorderColor, "stroke-width": d.trackBorderWidth });this.trackBorderWidth = this.track.strokeWidth();this.track.attr({ y: -this.trackBorderWidth % 2 / 2 });this.scrollbarGroup = a.g().add(f);this.scrollbar = a.rect().addClass("highcharts-scrollbar-thumb").attr({ height: e, width: e, r: d.barBorderRadius || 0 }).add(this.scrollbarGroup);this.scrollbarRifles = a.path(b(["M", -3, e / 4, "L", -3, 2 * e / 3, "M", 0, e / 4, "L", 0, 2 * e / 3, "M", 3, e / 4, "L", 3, 2 * e / 3], d.vertical)).addClass("highcharts-scrollbar-rifles").add(this.scrollbarGroup);this.scrollbar.attr({ fill: d.barBackgroundColor, stroke: d.barBorderColor, "stroke-width": d.barBorderWidth });this.scrollbarRifles.attr({ stroke: d.rifleColor, "stroke-width": 1 });this.scrollbarStrokeWidth = this.scrollbar.strokeWidth();this.scrollbarGroup.translate(-this.scrollbarStrokeWidth % 2 / 2, -this.scrollbarStrokeWidth % 2 / 2);this.drawScrollbarButton(0);this.drawScrollbarButton(1);
      }, position: function position(a, b, d, e) {
        var c = this.options.vertical,
            f = 0,
            g = this.rendered ? "animate" : "attr";this.x = a;this.y = b + this.trackBorderWidth;this.width = d;this.xOffset = this.height = e;this.yOffset = f;c ? (this.width = this.yOffset = d = f = this.size, this.xOffset = b = 0, this.barWidth = e - 2 * d, this.x = a += this.options.margin) : (this.height = this.xOffset = e = b = this.size, this.barWidth = d - 2 * e, this.y += this.options.margin);this.group[g]({ translateX: a, translateY: this.y });this.track[g]({ width: d, height: e });this.scrollbarButtons[1][g]({ translateX: c ? 0 : d - b, translateY: c ? e - f : 0 });
      },
      drawScrollbarButton: function drawScrollbarButton(a) {
        var d = this.renderer,
            e = this.scrollbarButtons,
            f = this.options,
            c = this.size,
            g;g = d.g().add(this.group);e.push(g);g = d.rect().addClass("highcharts-scrollbar-button").add(g);g.attr({ stroke: f.buttonBorderColor, "stroke-width": f.buttonBorderWidth, fill: f.buttonBackgroundColor });g.attr(g.crisp({ x: -.5, y: -.5, width: c + 1, height: c + 1, r: f.buttonBorderRadius }, g.strokeWidth()));g = d.path(b(["M", c / 2 + (a ? -1 : 1), c / 2 - 3, "L", c / 2 + (a ? -1 : 1), c / 2 + 3, "L", c / 2 + (a ? 2 : -2), c / 2], f.vertical)).addClass("highcharts-scrollbar-arrow").add(e[a]);
        g.attr({ fill: f.buttonArrowColor });
      }, setRange: function setRange(a, b) {
        var d = this.options,
            e = d.vertical,
            c = d.minWidth,
            f = this.barWidth,
            g,
            m,
            n = this.rendered && !this.hasDragged ? "animate" : "attr";h(f) && (a = Math.max(a, 0), g = Math.ceil(f * a), this.calculatedWidth = m = D(f * Math.min(b, 1) - g), m < c && (g = (f - c + m) * a, m = c), c = Math.floor(g + this.xOffset + this.yOffset), f = m / 2 - .5, this.from = a, this.to = b, e ? (this.scrollbarGroup[n]({ translateY: c }), this.scrollbar[n]({ height: m }), this.scrollbarRifles[n]({ translateY: f }), this.scrollbarTop = c, this.scrollbarLeft = 0) : (this.scrollbarGroup[n]({ translateX: c }), this.scrollbar[n]({ width: m }), this.scrollbarRifles[n]({ translateX: f }), this.scrollbarLeft = c, this.scrollbarTop = 0), 12 >= m ? this.scrollbarRifles.hide() : this.scrollbarRifles.show(!0), !1 === d.showFull && (0 >= a && 1 <= b ? this.group.hide() : this.group.show()), this.rendered = !0);
      }, initEvents: function initEvents() {
        var a = this;a.mouseMoveHandler = function (b) {
          var d = a.chart.pointer.normalize(b),
              e = a.options.vertical ? "chartY" : "chartX",
              c = a.initPositions;!a.grabbedCenter || b.touches && 0 === b.touches[0][e] || (d = a.cursorToScrollbarPosition(d)[e], e = a[e], e = d - e, a.hasDragged = !0, a.updatePosition(c[0] + e, c[1] + e), a.hasDragged && t(a, "changed", { from: a.from, to: a.to, trigger: "scrollbar", DOMType: b.type, DOMEvent: b }));
        };a.mouseUpHandler = function (b) {
          a.hasDragged && t(a, "changed", { from: a.from, to: a.to, trigger: "scrollbar", DOMType: b.type, DOMEvent: b });a.grabbedCenter = a.hasDragged = a.chartX = a.chartY = null;
        };a.mouseDownHandler = function (b) {
          b = a.chart.pointer.normalize(b);b = a.cursorToScrollbarPosition(b);a.chartX = b.chartX;a.chartY = b.chartY;
          a.initPositions = [a.from, a.to];a.grabbedCenter = !0;
        };a.buttonToMinClick = function (b) {
          var d = D(a.to - a.from) * a.options.step;a.updatePosition(D(a.from - d), D(a.to - d));t(a, "changed", { from: a.from, to: a.to, trigger: "scrollbar", DOMEvent: b });
        };a.buttonToMaxClick = function (b) {
          var d = (a.to - a.from) * a.options.step;a.updatePosition(a.from + d, a.to + d);t(a, "changed", { from: a.from, to: a.to, trigger: "scrollbar", DOMEvent: b });
        };a.trackClick = function (b) {
          var d = a.chart.pointer.normalize(b),
              e = a.to - a.from,
              c = a.y + a.scrollbarTop,
              f = a.x + a.scrollbarLeft;
          a.options.vertical && d.chartY > c || !a.options.vertical && d.chartX > f ? a.updatePosition(a.from + e, a.to + e) : a.updatePosition(a.from - e, a.to - e);t(a, "changed", { from: a.from, to: a.to, trigger: "scrollbar", DOMEvent: b });
        };
      }, cursorToScrollbarPosition: function cursorToScrollbarPosition(a) {
        var b = this.options,
            b = b.minWidth > this.calculatedWidth ? b.minWidth : 0;return { chartX: (a.chartX - this.x - this.xOffset) / (this.barWidth - b), chartY: (a.chartY - this.y - this.yOffset) / (this.barWidth - b) };
      }, updatePosition: function updatePosition(a, b) {
        1 < b && (a = D(1 - D(b - a)), b = 1);0 > a && (b = D(b - a), a = 0);
        this.from = a;this.to = b;
      }, update: function update(a) {
        this.destroy();this.init(this.chart.renderer, g(!0, this.options, a), this.chart);
      }, addEvents: function addEvents() {
        var a = this.options.inverted ? [1, 0] : [0, 1],
            b = this.scrollbarButtons,
            d = this.scrollbarGroup.element,
            e = this.mouseDownHandler,
            c = this.mouseMoveHandler,
            f = this.mouseUpHandler,
            a = [[b[a[0]].element, "click", this.buttonToMinClick], [b[a[1]].element, "click", this.buttonToMaxClick], [this.track.element, "click", this.trackClick], [d, "mousedown", e], [r, "mousemove", c], [r, "mouseup", f]];
        m && a.push([d, "touchstart", e], [r, "touchmove", c], [r, "touchend", f]);x(a, function (a) {
          B.apply(null, a);
        });this._events = a;
      }, removeEvents: function removeEvents() {
        x(this._events, function (a) {
          d.apply(null, a);
        });this._events.length = 0;
      }, destroy: function destroy() {
        var a = this.chart.scroller;this.removeEvents();x(["track", "scrollbarRifles", "scrollbar", "scrollbarGroup", "group"], function (a) {
          this[a] && this[a].destroy && (this[a] = this[a].destroy());
        }, this);a && this === a.scrollbar && (a.scrollbar = null, u(a.scrollbarButtons));
      } };p(F.prototype, "init", function (a) {
      var b = this;a.apply(b, Array.prototype.slice.call(arguments, 1));b.options.scrollbar && b.options.scrollbar.enabled && (b.options.scrollbar.vertical = !b.horiz, b.options.startOnTick = b.options.endOnTick = !1, b.scrollbar = new E(b.chart.renderer, b.options.scrollbar, b.chart), B(b.scrollbar, "changed", function (a) {
        var d = Math.min(e(b.options.min, b.min), b.min, b.dataMin),
            c = Math.max(e(b.options.max, b.max), b.max, b.dataMax) - d,
            f;b.horiz && !b.reversed || !b.horiz && b.reversed ? (f = d + c * this.to, d += c * this.from) : (f = d + c * (1 - this.from), d += c * (1 - this.to));b.setExtremes(d, f, !0, !1, a);
      }));
    });p(F.prototype, "render", function (a) {
      var b = Math.min(e(this.options.min, this.min), this.min, this.dataMin),
          d = Math.max(e(this.options.max, this.max), this.max, this.dataMax),
          f = this.scrollbar,
          c = this.titleOffset || 0;a.apply(this, Array.prototype.slice.call(arguments, 1));if (f) {
        this.horiz ? (f.position(this.left, this.top + this.height + 2 + this.chart.scrollbarsOffsets[1] + (this.opposite ? 0 : c + this.axisTitleMargin + this.offset), this.width, this.height), c = 1) : (f.position(this.left + this.width + 2 + this.chart.scrollbarsOffsets[0] + (this.opposite ? c + this.axisTitleMargin + this.offset : 0), this.top, this.width, this.height), c = 0);if (!this.opposite && !this.horiz || this.opposite && this.horiz) this.chart.scrollbarsOffsets[c] += this.scrollbar.size + this.scrollbar.options.margin;isNaN(b) || isNaN(d) || !h(this.min) || !h(this.max) ? f.setRange(0, 0) : (c = (this.min - b) / (d - b), b = (this.max - b) / (d - b), this.horiz && !this.reversed || !this.horiz && this.reversed ? f.setRange(c, b) : f.setRange(1 - b, 1 - c));
      }
    });p(F.prototype, "getOffset", function (a) {
      var b = this.horiz ? 2 : 1,
          d = this.scrollbar;a.apply(this, Array.prototype.slice.call(arguments, 1));d && (this.chart.scrollbarsOffsets = [0, 0], this.chart.axisOffset[b] += d.size + d.options.margin);
    });p(F.prototype, "destroy", function (a) {
      this.scrollbar && (this.scrollbar = this.scrollbar.destroy());a.apply(this, Array.prototype.slice.call(arguments, 1));
    });a.Scrollbar = E;
  })(L);(function (a) {
    function E(a) {
      this.init(a);
    }var B = a.addEvent,
        F = a.Axis,
        D = a.Chart,
        n = a.color,
        h = a.defaultOptions,
        u = a.defined,
        r = a.destroyObjectProperties,
        x = a.doc,
        t = a.each,
        m = a.erase,
        f = a.error,
        g = a.extend,
        e = a.grep,
        d = a.hasTouch,
        p = a.isNumber,
        b = a.isObject,
        A = a.merge,
        v = a.pick,
        H = a.removeEvent,
        q = a.Scrollbar,
        J = a.Series,
        c = a.seriesTypes,
        w = a.wrap,
        K = a.swapXY,
        y = [].concat(a.defaultDataGroupingUnits),
        G = function G(a) {
      var b = e(arguments, p);if (b.length) return Math[a].apply(0, b);
    };y[4] = ["day", [1, 2, 3, 4]];y[5] = ["week", [1, 2, 3]];c = void 0 === c.areaspline ? "line" : "areaspline";g(h, { navigator: { height: 40, margin: 25, maskInside: !0, handles: { backgroundColor: "#f2f2f2", borderColor: "#999999" }, maskFill: n("#6685c2").setOpacity(.3).get(),
        outlineColor: "#cccccc", outlineWidth: 1, series: { type: c, color: "#335cad", fillOpacity: .05, lineWidth: 1, compare: null, dataGrouping: { approximation: "average", enabled: !0, groupPixelWidth: 2, smoothed: !0, units: y }, dataLabels: { enabled: !1, zIndex: 2 }, id: "highcharts-navigator-series", className: "highcharts-navigator-series", lineColor: null, marker: { enabled: !1 }, pointRange: 0, shadow: !1, threshold: null }, xAxis: { className: "highcharts-navigator-xaxis", tickLength: 0, lineWidth: 0, gridLineColor: "#e6e6e6", gridLineWidth: 1, tickPixelInterval: 200,
          labels: { align: "left", style: { color: "#999999" }, x: 3, y: -4 }, crosshair: !1 }, yAxis: { className: "highcharts-navigator-yaxis", gridLineWidth: 0, startOnTick: !1, endOnTick: !1, minPadding: .1, maxPadding: .1, labels: { enabled: !1 }, crosshair: !1, title: { text: null }, tickLength: 0, tickWidth: 0 } } });E.prototype = { drawHandle: function drawHandle(a, b, c, d) {
        this.handles[b][d](c ? { translateX: Math.round(this.left + this.height / 2 - 8), translateY: Math.round(this.top + parseInt(a, 10) + .5) } : { translateX: Math.round(this.left + parseInt(a, 10)), translateY: Math.round(this.top + this.height / 2 - 8) });
      }, getHandlePath: function getHandlePath(a) {
        return K(["M", -4.5, .5, "L", 3.5, .5, "L", 3.5, 15.5, "L", -4.5, 15.5, "L", -4.5, .5, "M", -1.5, 4, "L", -1.5, 12, "M", .5, 4, "L", .5, 12], a);
      }, drawOutline: function drawOutline(a, b, c, d) {
        var e = this.navigatorOptions.maskInside,
            f = this.outline.strokeWidth(),
            l = f / 2,
            f = f % 2 / 2,
            k = this.outlineHeight,
            g = this.scrollbarHeight,
            h = this.size,
            m = this.left - g,
            n = this.top;c ? (m -= l, c = n + b + f, b = n + a + f, a = ["M", m + k, n - g - f, "L", m + k, c, "L", m, c, "L", m, b, "L", m + k, b, "L", m + k, n + h + g].concat(e ? ["M", m + k, c - l, "L", m + k, b + l] : [])) : (a += m + g - f, b += m + g - f, n += l, a = ["M", m, n, "L", a, n, "L", a, n + k, "L", b, n + k, "L", b, n, "L", m + h + 2 * g, n].concat(e ? ["M", a - l, n, "L", b + l, n] : []));this.outline[d]({ d: a });
      }, drawMasks: function drawMasks(a, b, c, d) {
        var e = this.left,
            f = this.top,
            l = this.height,
            k,
            g,
            h,
            m;c ? (h = [e, e, e], m = [f, f + a, f + b], g = [l, l, l], k = [a, b - a, this.size - b]) : (h = [e, e + a, e + b], m = [f, f, f], g = [a, b - a, this.size - b], k = [l, l, l]);t(this.shades, function (a, b) {
          a[d]({ x: h[b], y: m[b], width: g[b], height: k[b] });
        });
      }, renderElements: function renderElements() {
        var a = this,
            b = a.navigatorOptions,
            c = b.maskInside,
            d = a.chart,
            e = d.inverted,
            f = d.renderer,
            g;a.navigatorGroup = g = f.g("navigator").attr({ zIndex: 8, visibility: "hidden" }).add();var h = { cursor: e ? "ns-resize" : "ew-resize" };t([!c, c, !c], function (c, d) {
          a.shades[d] = f.rect().addClass("highcharts-navigator-mask" + (1 === d ? "-inside" : "-outside")).attr({ fill: c ? b.maskFill : "rgba(0,0,0,0)" }).css(1 === d && h).add(g);
        });a.outline = f.path().addClass("highcharts-navigator-outline").attr({ "stroke-width": b.outlineWidth, stroke: b.outlineColor }).add(g);t([0, 1], function (c) {
          a.handles[c] = f.path(a.getHandlePath(e)).attr({ zIndex: 7 - c }).addClass("highcharts-navigator-handle highcharts-navigator-handle-" + ["left", "right"][c]).add(g);var d = b.handles;a.handles[c].attr({ fill: d.backgroundColor, stroke: d.borderColor, "stroke-width": 1 }).css(h);
        });
      }, update: function update(a) {
        this.destroy();A(!0, this.chart.options.navigator, this.options, a);this.init(this.chart);
      }, render: function render(a, b, c, d) {
        var e = this.chart,
            f,
            l,
            k = this.scrollbarHeight,
            g,
            h = this.xAxis;f = h.fake ? e.xAxis[0] : h;var m = this.navigatorEnabled,
            n,
            q = this.rendered;l = e.inverted;var r = e.xAxis[0].minRange;
        if (!this.hasDragged || u(c)) {
          if (!p(a) || !p(b)) if (q) c = 0, d = h.width;else return;this.left = v(h.left, e.plotLeft + k + (l ? e.plotWidth : 0));this.size = n = g = v(h.len, (l ? e.plotHeight : e.plotWidth) - 2 * k);e = l ? k : g + 2 * k;c = v(c, h.toPixels(a, !0));d = v(d, h.toPixels(b, !0));p(c) && Infinity !== Math.abs(c) || (c = 0, d = e);a = h.toValue(c, !0);b = h.toValue(d, !0);if (Math.abs(b - a) < r) if (this.grabbedLeft) c = h.toPixels(b - r, !0);else if (this.grabbedRight) d = h.toPixels(a + r, !0);else return;this.zoomedMax = Math.min(Math.max(c, d, 0), n);this.zoomedMin = Math.min(Math.max(this.fixedWidth ? this.zoomedMax - this.fixedWidth : Math.min(c, d), 0), n);this.range = this.zoomedMax - this.zoomedMin;n = Math.round(this.zoomedMax);c = Math.round(this.zoomedMin);m && (this.navigatorGroup.attr({ visibility: "visible" }), q = q && !this.hasDragged ? "animate" : "attr", this.drawMasks(c, n, l, q), this.drawOutline(c, n, l, q), this.drawHandle(c, 0, l, q), this.drawHandle(n, 1, l, q));this.scrollbar && (l ? (l = this.top - k, f = this.left - k + (m || !f.opposite ? 0 : (f.titleOffset || 0) + f.axisTitleMargin), k = g + 2 * k) : (l = this.top + (m ? this.height : -k), f = this.left - k), this.scrollbar.position(f, l, e, k), this.scrollbar.setRange(this.zoomedMin / g, this.zoomedMax / g));this.rendered = !0;
        }
      }, addMouseEvents: function addMouseEvents() {
        var a = this,
            b = a.chart,
            c = b.container,
            e = [],
            f,
            g;a.mouseMoveHandler = f = function f(b) {
          a.onMouseMove(b);
        };a.mouseUpHandler = g = function g(b) {
          a.onMouseUp(b);
        };e = a.getPartsEvents("mousedown");e.push(B(c, "mousemove", f), B(x, "mouseup", g));d && (e.push(B(c, "touchmove", f), B(x, "touchend", g)), e.concat(a.getPartsEvents("touchstart")));a.eventsToUnbind = e;a.series && a.series[0] && e.push(B(a.series[0].xAxis, "foundExtremes", function () {
          b.navigator.modifyNavigatorAxisExtremes();
        }));
      }, getPartsEvents: function getPartsEvents(a) {
        var b = this,
            c = [];t(["shades", "handles"], function (d) {
          t(b[d], function (e, f) {
            c.push(B(e.element, a, function (a) {
              b[d + "Mousedown"](a, f);
            }));
          });
        });return c;
      }, shadesMousedown: function shadesMousedown(a, b) {
        a = this.chart.pointer.normalize(a);var c = this.chart,
            d = this.xAxis,
            e = this.zoomedMin,
            f = this.left,
            l = this.size,
            g = this.range,
            h = a.chartX,
            m;c.inverted && (h = a.chartY, f = this.top);1 === b ? (this.grabbedCenter = h, this.fixedWidth = g, this.dragOffset = h - e) : (a = h - f - g / 2, 0 === b ? a = Math.max(0, a) : 2 === b && a + g >= l && (a = l - g, m = this.getUnionExtremes().dataMax), a !== e && (this.fixedWidth = g, b = d.toFixedRange(a, a + g, null, m), c.xAxis[0].setExtremes(Math.min(b.min, b.max), Math.max(b.min, b.max), !0, null, { trigger: "navigator" })));
      }, handlesMousedown: function handlesMousedown(a, b) {
        this.chart.pointer.normalize(a);a = this.chart;var c = a.xAxis[0],
            d = a.inverted && !c.reversed || !a.inverted && c.reversed;0 === b ? (this.grabbedLeft = !0, this.otherHandlePos = this.zoomedMax, this.fixedExtreme = d ? c.min : c.max) : (this.grabbedRight = !0, this.otherHandlePos = this.zoomedMin, this.fixedExtreme = d ? c.max : c.min);a.fixedRange = null;
      }, onMouseMove: function onMouseMove(a) {
        var b = this,
            c = b.chart,
            d = b.left,
            e = b.navigatorSize,
            f = b.range,
            l = b.dragOffset,
            g = c.inverted;a.touches && 0 === a.touches[0].pageX || (a = c.pointer.normalize(a), c = a.chartX, g && (d = b.top, c = a.chartY), b.grabbedLeft ? (b.hasDragged = !0, b.render(0, 0, c - d, b.otherHandlePos)) : b.grabbedRight ? (b.hasDragged = !0, b.render(0, 0, b.otherHandlePos, c - d)) : b.grabbedCenter && (b.hasDragged = !0, c < l ? c = l : c > e + l - f && (c = e + l - f), b.render(0, 0, c - l, c - l + f)), b.hasDragged && b.scrollbar && b.scrollbar.options.liveRedraw && (a.DOMType = a.type, setTimeout(function () {
          b.onMouseUp(a);
        }, 0)));
      }, onMouseUp: function onMouseUp(a) {
        var b = this.chart,
            c = this.xAxis,
            d = this.scrollbar,
            e,
            f,
            l = a.DOMEvent || a;(!this.hasDragged || d && d.hasDragged) && "scrollbar" !== a.trigger || (this.zoomedMin === this.otherHandlePos ? e = this.fixedExtreme : this.zoomedMax === this.otherHandlePos && (f = this.fixedExtreme), this.zoomedMax === this.size && (f = this.getUnionExtremes().dataMax), c = c.toFixedRange(this.zoomedMin, this.zoomedMax, e, f), u(c.min) && b.xAxis[0].setExtremes(Math.min(c.min, c.max), Math.max(c.min, c.max), !0, this.hasDragged ? !1 : null, { trigger: "navigator", triggerOp: "navigator-drag", DOMEvent: l }));"mousemove" !== a.DOMType && (this.grabbedLeft = this.grabbedRight = this.grabbedCenter = this.fixedWidth = this.fixedExtreme = this.otherHandlePos = this.hasDragged = this.dragOffset = null);
      }, removeEvents: function removeEvents() {
        this.eventsToUnbind && (t(this.eventsToUnbind, function (a) {
          a();
        }), this.eventsToUnbind = void 0);this.removeBaseSeriesEvents();
      }, removeBaseSeriesEvents: function removeBaseSeriesEvents() {
        var a = this.baseSeries || [];this.navigatorEnabled && a[0] && !1 !== this.navigatorOptions.adaptToUpdatedData && (t(a, function (a) {
          H(a, "updatedData", this.updatedDataHandler);
        }, this), a[0].xAxis && H(a[0].xAxis, "foundExtremes", this.modifyBaseAxisExtremes));
      }, init: function init(a) {
        var b = a.options,
            c = b.navigator,
            d = c.enabled,
            e = b.scrollbar,
            f = e.enabled,
            b = d ? c.height : 0,
            l = f ? e.height : 0;this.handles = [];this.shades = [];this.chart = a;this.setBaseSeries();this.height = b;this.scrollbarHeight = l;this.scrollbarEnabled = f;this.navigatorEnabled = d;this.navigatorOptions = c;this.scrollbarOptions = e;this.outlineHeight = b + l;this.opposite = v(c.opposite, !d && a.inverted);var g = this,
            e = g.baseSeries,
            f = a.xAxis.length,
            h = a.yAxis.length,
            m = e && e[0] && e[0].xAxis || a.xAxis[0];a.extraMargin = { type: g.opposite ? "plotTop" : "marginBottom", value: (d || !a.inverted ? g.outlineHeight : 0) + c.margin };a.inverted && (a.extraMargin.type = g.opposite ? "marginRight" : "plotLeft");a.isDirtyBox = !0;g.navigatorEnabled ? (g.xAxis = new F(a, A({ breaks: m.options.breaks, ordinal: m.options.ordinal }, c.xAxis, { id: "navigator-x-axis", yAxis: "navigator-y-axis",
          isX: !0, type: "datetime", index: f, offset: 0, keepOrdinalPadding: !0, startOnTick: !1, endOnTick: !1, minPadding: 0, maxPadding: 0, zoomEnabled: !1 }, a.inverted ? { offsets: [l, 0, -l, 0], width: b } : { offsets: [0, -l, 0, l], height: b })), g.yAxis = new F(a, A(c.yAxis, { id: "navigator-y-axis", alignTicks: !1, offset: 0, index: h, zoomEnabled: !1 }, a.inverted ? { width: b } : { height: b })), e || c.series.data ? g.addBaseSeries() : 0 === a.series.length && w(a, "redraw", function (b, c) {
          0 < a.series.length && !g.series && (g.setBaseSeries(), a.redraw = b);b.call(a, c);
        }), g.renderElements(), g.addMouseEvents()) : g.xAxis = { translate: function translate(b, c) {
            var d = a.xAxis[0],
                e = d.getExtremes(),
                f = d.len - 2 * l,
                k = G("min", d.options.min, e.dataMin),
                d = G("max", d.options.max, e.dataMax) - k;return c ? b * d / f + k : f * (b - k) / d;
          }, toPixels: function toPixels(a) {
            return this.translate(a);
          }, toValue: function toValue(a) {
            return this.translate(a, !0);
          }, toFixedRange: F.prototype.toFixedRange, fake: !0 };a.options.scrollbar.enabled && (a.scrollbar = g.scrollbar = new q(a.renderer, A(a.options.scrollbar, { margin: g.navigatorEnabled ? 0 : 10, vertical: a.inverted }), a), B(g.scrollbar, "changed", function (b) {
          var c = g.size,
              d = c * this.to,
              c = c * this.from;g.hasDragged = g.scrollbar.hasDragged;g.render(0, 0, c, d);(a.options.scrollbar.liveRedraw || "mousemove" !== b.DOMType) && setTimeout(function () {
            g.onMouseUp(b);
          });
        }));g.addBaseSeriesEvents();g.addChartEvents();
      }, getUnionExtremes: function getUnionExtremes(a) {
        var b = this.chart.xAxis[0],
            c = this.xAxis,
            d = c.options,
            e = b.options,
            f;a && null === b.dataMin || (f = { dataMin: v(d && d.min, G("min", e.min, b.dataMin, c.dataMin, c.min)), dataMax: v(d && d.max, G("max", e.max, b.dataMax, c.dataMax, c.max)) });
        return f;
      }, setBaseSeries: function setBaseSeries(a) {
        var b = this.chart,
            c;a = a || b.options && b.options.navigator.baseSeries || 0;this.series && (this.removeBaseSeriesEvents(), t(this.series, function (a) {
          a.destroy();
        }));c = this.baseSeries = [];t(b.series || [], function (b, d) {
          (b.options.showInNavigator || (d === a || b.options.id === a) && !1 !== b.options.showInNavigator) && c.push(b);
        });this.xAxis && !this.xAxis.fake && this.addBaseSeries();
      }, addBaseSeries: function addBaseSeries() {
        var a = this,
            b = a.chart,
            c = a.series = [],
            d = a.baseSeries,
            e,
            f,
            g = a.navigatorOptions.series,
            h,
            m = { enableMouseTracking: !1, index: null, group: "nav", padXAxis: !1, xAxis: "navigator-x-axis", yAxis: "navigator-y-axis", showInLegend: !1, stacking: !1, isInternal: !0, visible: !0 };d ? t(d, function (d, k) {
          m.name = "Navigator " + (k + 1);e = d.options || {};h = e.navigatorOptions || {};f = A(e, m, g, h);k = h.data || g.data;a.hasNavigatorData = a.hasNavigatorData || !!k;f.data = k || e.data && e.data.slice(0);d.navigatorSeries = b.initSeries(f);c.push(d.navigatorSeries);
        }) : (f = A(g, m), f.data = g.data, a.hasNavigatorData = !!f.data, c.push(b.initSeries(f)));this.addBaseSeriesEvents();
      },
      addBaseSeriesEvents: function addBaseSeriesEvents() {
        var a = this,
            b = a.baseSeries || [];b[0] && b[0].xAxis && B(b[0].xAxis, "foundExtremes", this.modifyBaseAxisExtremes);!1 !== this.navigatorOptions.adaptToUpdatedData && t(b, function (b) {
          b.xAxis && B(b, "updatedData", this.updatedDataHandler);B(b, "remove", function () {
            this.navigatorSeries && (m(a.series, this.navigatorSeries), this.navigatorSeries.remove(!1), delete this.navigatorSeries);
          });
        }, this);
      }, modifyNavigatorAxisExtremes: function modifyNavigatorAxisExtremes() {
        var a = this.xAxis,
            b;a.getExtremes && (!(b = this.getUnionExtremes(!0)) || b.dataMin === a.min && b.dataMax === a.max || (a.min = b.dataMin, a.max = b.dataMax));
      }, modifyBaseAxisExtremes: function modifyBaseAxisExtremes() {
        var a = this.chart.navigator,
            b = this.getExtremes(),
            c = b.dataMin,
            d = b.dataMax,
            b = b.max - b.min,
            e = a.stickToMin,
            f = a.stickToMax,
            g,
            h,
            m = a.series && a.series[0],
            n = !!this.setExtremes;this.eventArgs && "rangeSelectorButton" === this.eventArgs.trigger || (e && (h = c, g = h + b), f && (g = d, e || (h = Math.max(g - b, m && m.xData ? m.xData[0] : -Number.MAX_VALUE))), n && (e || f) && p(h) && (this.min = this.userMin = h, this.max = this.userMax = g));a.stickToMin = a.stickToMax = null;
      }, updatedDataHandler: function updatedDataHandler() {
        var a = this.chart.navigator,
            b = this.navigatorSeries;a.stickToMin = p(this.xAxis.min) && this.xAxis.min <= this.xData[0];a.stickToMax = Math.round(a.zoomedMax) >= Math.round(a.size);b && !a.hasNavigatorData && (b.options.pointStart = this.xData[0], b.setData(this.options.data, !1, null, !1));
      }, addChartEvents: function addChartEvents() {
        B(this.chart, "redraw", function () {
          var a = this.navigator,
              b = a && (a.baseSeries && a.baseSeries[0] && a.baseSeries[0].xAxis || a.scrollbar && this.xAxis[0]);b && a.render(b.min, b.max);
        });
      }, destroy: function destroy() {
        this.removeEvents();this.xAxis && (m(this.chart.xAxis, this.xAxis), m(this.chart.axes, this.xAxis));this.yAxis && (m(this.chart.yAxis, this.yAxis), m(this.chart.axes, this.yAxis));t(this.series || [], function (a) {
          a.destroy && a.destroy();
        });t("series xAxis yAxis shades outline scrollbarTrack scrollbarRifles scrollbarGroup scrollbar navigatorGroup rendered".split(" "), function (a) {
          this[a] && this[a].destroy && this[a].destroy();this[a] = null;
        }, this);t([this.handles], function (a) {
          r(a);
        }, this);
      } };
    a.Navigator = E;w(F.prototype, "zoom", function (a, b, c) {
      var d = this.chart,
          e = d.options,
          f = e.chart.zoomType,
          g = e.navigator,
          e = e.rangeSelector,
          k;this.isXAxis && (g && g.enabled || e && e.enabled) && ("x" === f ? d.resetZoomButton = "blocked" : "y" === f ? k = !1 : "xy" === f && (d = this.previousZoom, u(b) ? this.previousZoom = [this.min, this.max] : d && (b = d[0], c = d[1], delete this.previousZoom)));return void 0 !== k ? k : a.call(this, b, c);
    });w(D.prototype, "init", function (a, b, c) {
      B(this, "beforeRender", function () {
        var a = this.options;if (a.navigator.enabled || a.scrollbar.enabled) this.scroller = this.navigator = new E(this);
      });a.call(this, b, c);
    });w(D.prototype, "setChartSize", function (a) {
      var b = this.legend,
          c = this.navigator,
          d,
          e,
          f,
          g;a.apply(this, [].slice.call(arguments, 1));c && (e = b.options, f = c.xAxis, g = c.yAxis, d = c.scrollbarHeight, this.inverted ? (c.left = c.opposite ? this.chartWidth - d - c.height : this.spacing[3] + d, c.top = this.plotTop + d) : (c.left = this.plotLeft + d, c.top = c.navigatorOptions.top || this.chartHeight - c.height - d - this.spacing[2] - ("bottom" === e.verticalAlign && e.enabled && !e.floating ? b.legendHeight + v(e.margin, 10) : 0)), f && g && (this.inverted ? f.options.left = g.options.left = c.left : f.options.top = g.options.top = c.top, f.setAxisSize(), g.setAxisSize()));
    });w(J.prototype, "addPoint", function (a, c, d, e, g) {
      var k = this.options.turboThreshold;k && this.xData.length > k && b(c, !0) && this.chart.navigator && f(20, !0);a.call(this, c, d, e, g);
    });w(D.prototype, "addSeries", function (a, b, c, d) {
      a = a.call(this, b, !1, d);this.navigator && this.navigator.setBaseSeries();v(c, !0) && this.redraw();return a;
    });w(J.prototype, "update", function (a, b, c) {
      a.call(this, b, !1);this.chart.navigator && this.chart.navigator.setBaseSeries();v(c, !0) && this.chart.redraw();
    });D.prototype.callbacks.push(function (a) {
      var b = a.navigator;b && (a = a.xAxis[0].getExtremes(), b.render(a.min, a.max));
    });
  })(L);(function (a) {
    function E(a) {
      this.init(a);
    }var B = a.addEvent,
        F = a.Axis,
        D = a.Chart,
        n = a.css,
        h = a.createElement,
        u = a.dateFormat,
        r = a.defaultOptions,
        x = r.global.useUTC,
        t = a.defined,
        m = a.destroyObjectProperties,
        f = a.discardElement,
        g = a.each,
        e = a.extend,
        d = a.fireEvent,
        p = a.Date,
        b = a.isNumber,
        A = a.merge,
        v = a.pick,
        H = a.pInt,
        q = a.splat,
        J = a.wrap;e(r, { rangeSelector: { buttonTheme: { "stroke-width": 0, width: 28, height: 18, padding: 2, zIndex: 7 }, height: 35, inputPosition: { align: "right" }, labelStyle: { color: "#666666" } } });r.lang = A(r.lang, { rangeSelectorZoom: "Zoom", rangeSelectorFrom: "From", rangeSelectorTo: "To" });E.prototype = { clickButton: function clickButton(a, d) {
        var c = this,
            e = c.chart,
            f = c.buttonOptions[a],
            h = e.xAxis[0],
            m = e.scroller && e.scroller.getUnionExtremes() || h || {},
            k = m.dataMin,
            n = m.dataMax,
            p,
            r = h && Math.round(Math.min(h.max, v(n, h.max))),
            t = f.type,
            u,
            m = f._range,
            w,
            C,
            A,
            D = f.dataGrouping;if (null !== k && null !== n) {
          e.fixedRange = m;D && (this.forcedDataGrouping = !0, F.prototype.setDataGrouping.call(h || { chart: this.chart }, D, !1));if ("month" === t || "year" === t) h ? (t = { range: f, max: r, dataMin: k, dataMax: n }, p = h.minFromRange.call(t), b(t.newMax) && (r = t.newMax)) : m = f;else if (m) p = Math.max(r - m, k), r = Math.min(p + m, n);else if ("ytd" === t) {
            if (h) void 0 === n && (k = Number.MAX_VALUE, n = Number.MIN_VALUE, g(e.series, function (a) {
              a = a.xData;k = Math.min(a[0], k);n = Math.max(a[a.length - 1], n);
            }), d = !1), r = c.getYTDExtremes(n, k, x), p = w = r.min, r = r.max;else {
              B(e, "beforeRender", function () {
                c.clickButton(a);
              });return;
            }
          } else "all" === t && h && (p = k, r = n);c.setSelected(a);h ? h.setExtremes(p, r, v(d, 1), null, { trigger: "rangeSelectorButton", rangeSelectorButton: f }) : (u = q(e.options.xAxis)[0], A = u.range, u.range = m, C = u.min, u.min = w, B(e, "load", function () {
            u.range = A;u.min = C;
          }));
        }
      }, setSelected: function setSelected(a) {
        this.selected = this.options.selected = a;
      }, defaultButtons: [{ type: "month", count: 1, text: "1m" }, { type: "month", count: 3, text: "3m" }, { type: "month", count: 6,
        text: "6m" }, { type: "ytd", text: "YTD" }, { type: "year", count: 1, text: "1y" }, { type: "all", text: "All" }], init: function init(a) {
        var b = this,
            c = a.options.rangeSelector,
            e = c.buttons || [].concat(b.defaultButtons),
            f = c.selected,
            h = function h() {
          var a = b.minInput,
              c = b.maxInput;a && a.blur && d(a, "blur");c && c.blur && d(c, "blur");
        };b.chart = a;b.options = c;b.buttons = [];a.extraTopMargin = c.height;b.buttonOptions = e;this.unMouseDown = B(a.container, "mousedown", h);this.unResize = B(a, "resize", h);g(e, b.computeButtonRange);void 0 !== f && e[f] && this.clickButton(f, !1);B(a, "load", function () {
          B(a.xAxis[0], "setExtremes", function (c) {
            this.max - this.min !== a.fixedRange && "rangeSelectorButton" !== c.trigger && "updatedData" !== c.trigger && b.forcedDataGrouping && this.setDataGrouping(!1, !1);
          });
        });
      }, updateButtonStates: function updateButtonStates() {
        var a = this.chart,
            d = a.xAxis[0],
            e = Math.round(d.max - d.min),
            f = !d.hasVisibleSeries,
            a = a.scroller && a.scroller.getUnionExtremes() || d,
            h = a.dataMin,
            l = a.dataMax,
            a = this.getYTDExtremes(l, h, x),
            m = a.min,
            k = a.max,
            n = this.selected,
            p = b(n),
            q = this.options.allButtonsEnabled,
            r = this.buttons;
        g(this.buttonOptions, function (a, b) {
          var c = a._range,
              g = a.type,
              t = a.count || 1;a = r[b];var u = 0;b = b === n;var w = c > l - h,
              v = c < d.minRange,
              x = !1,
              y = !1,
              c = c === e;("month" === g || "year" === g) && e >= 864E5 * { month: 28, year: 365 }[g] * t && e <= 864E5 * { month: 31, year: 366 }[g] * t ? c = !0 : "ytd" === g ? (c = k - m === e, x = !b) : "all" === g && (c = d.max - d.min >= l - h, y = !b && p && c);g = !q && (w || v || y || f);c = b && c || c && !p && !x;g ? u = 3 : c && (p = !0, u = 2);a.state !== u && a.setState(u);
        });
      }, computeButtonRange: function computeButtonRange(a) {
        var b = a.type,
            c = a.count || 1,
            d = { millisecond: 1, second: 1E3, minute: 6E4, hour: 36E5,
          day: 864E5, week: 6048E5 };if (d[b]) a._range = d[b] * c;else if ("month" === b || "year" === b) a._range = 864E5 * { month: 30, year: 365 }[b] * c;
      }, setInputValue: function setInputValue(a, b) {
        var c = this.chart.options.rangeSelector,
            d = this[a + "Input"];t(b) && (d.previousValue = d.HCTime, d.HCTime = b);d.value = u(c.inputEditDateFormat || "%Y-%m-%d", d.HCTime);this[a + "DateBox"].attr({ text: u(c.inputDateFormat || "%b %e, %Y", d.HCTime) });
      }, showInput: function showInput(a) {
        var b = this.inputGroup,
            c = this[a + "DateBox"];n(this[a + "Input"], { left: b.translateX + c.x + "px", top: b.translateY + "px", width: c.width - 2 + "px", height: c.height - 2 + "px", border: "2px solid silver" });
      }, hideInput: function hideInput(a) {
        n(this[a + "Input"], { border: 0, width: "1px", height: "1px" });this.setInputValue(a);
      }, drawInput: function drawInput(a) {
        function c() {
          var a = q.value,
              c = (m.inputDateParser || Date.parse)(a),
              e = f.xAxis[0],
              g = f.scroller && f.scroller.xAxis ? f.scroller.xAxis : e,
              k = g.dataMin,
              g = g.dataMax;c !== q.previousValue && (q.previousValue = c, b(c) || (c = a.split("-"), c = Date.UTC(H(c[0]), H(c[1]) - 1, H(c[2]))), b(c) && (x || (c += 6E4 * new Date().getTimezoneOffset()), p ? c > d.maxInput.HCTime ? c = void 0 : c < k && (c = k) : c < d.minInput.HCTime ? c = void 0 : c > g && (c = g), void 0 !== c && e.setExtremes(p ? c : e.min, p ? e.max : c, void 0, void 0, { trigger: "rangeSelectorInput" })));
        }var d = this,
            f = d.chart,
            g = f.renderer.style || {},
            l = f.renderer,
            m = f.options.rangeSelector,
            k = d.div,
            p = "min" === a,
            q,
            t,
            u = this.inputGroup;this[a + "Label"] = t = l.label(r.lang[p ? "rangeSelectorFrom" : "rangeSelectorTo"], this.inputGroup.offset).addClass("highcharts-range-label").attr({ padding: 2 }).add(u);u.offset += t.width + 5;this[a + "DateBox"] = l = l.label("", u.offset).addClass("highcharts-range-input").attr({ padding: 2, width: m.inputBoxWidth || 90, height: m.inputBoxHeight || 17, stroke: m.inputBoxBorderColor || "#cccccc", "stroke-width": 1, "text-align": "center" }).on("click", function () {
          d.showInput(a);d[a + "Input"].focus();
        }).add(u);u.offset += l.width + (p ? 10 : 0);this[a + "Input"] = q = h("input", { name: a, className: "highcharts-range-selector", type: "text" }, { top: f.plotTop + "px" }, k);t.css(A(g, m.labelStyle));l.css(A({ color: "#333333" }, g, m.inputStyle));n(q, e({ position: "absolute", border: 0,
          width: "1px", height: "1px", padding: 0, textAlign: "center", fontSize: g.fontSize, fontFamily: g.fontFamily, left: "-9em" }, m.inputStyle));q.onfocus = function () {
          d.showInput(a);
        };q.onblur = function () {
          d.hideInput(a);
        };q.onchange = c;q.onkeypress = function (a) {
          13 === a.keyCode && c();
        };
      }, getPosition: function getPosition() {
        var a = this.chart,
            b = a.options.rangeSelector,
            a = v((b.buttonPosition || {}).y, a.plotTop - a.axisOffset[0] - b.height);return { buttonTop: a, inputTop: a - 10 };
      }, getYTDExtremes: function getYTDExtremes(a, b, d) {
        var c = new p(a),
            e = c[p.hcGetFullYear]();d = d ? p.UTC(e, 0, 1) : +new p(e, 0, 1);b = Math.max(b || 0, d);c = c.getTime();return { max: Math.min(a || c, c), min: b };
      }, render: function render(a, b) {
        var c = this,
            d = c.chart,
            f = d.renderer,
            l = d.container,
            m = d.options,
            k = m.exporting && !1 !== m.exporting.enabled && m.navigation && m.navigation.buttonOptions,
            n = m.rangeSelector,
            p = c.buttons,
            m = r.lang,
            q = c.div,
            q = c.inputGroup,
            u = n.buttonTheme,
            w = n.buttonPosition || {},
            x = n.inputEnabled,
            C = u && u.states,
            A = d.plotLeft,
            B,
            D = this.getPosition(),
            E = c.group,
            F = c.rendered;!1 !== n.enabled && (F || (c.group = E = f.g("range-selector-buttons").add(), c.zoomText = f.text(m.rangeSelectorZoom, v(w.x, A), 15).css(n.labelStyle).add(E), B = v(w.x, A) + c.zoomText.getBBox().width + 5, g(c.buttonOptions, function (a, b) {
          p[b] = f.button(a.text, B, 0, function () {
            c.clickButton(b);c.isActive = !0;
          }, u, C && C.hover, C && C.select, C && C.disabled).attr({ "text-align": "center" }).add(E);B += p[b].width + v(n.buttonSpacing, 5);
        }), !1 !== x && (c.div = q = h("div", null, { position: "relative", height: 0, zIndex: 1 }), l.parentNode.insertBefore(q, l), c.inputGroup = q = f.g("input-group").add(), q.offset = 0, c.drawInput("min"), c.drawInput("max"))), c.updateButtonStates(), E[F ? "animate" : "attr"]({ translateY: D.buttonTop }), !1 !== x && (q.align(e({ y: D.inputTop, width: q.offset, x: k && D.inputTop < (k.y || 0) + k.height - d.spacing[0] ? -40 : 0 }, n.inputPosition), !0, d.spacingBox), t(x) || (d = E.getBBox(), q[q.alignAttr.translateX < d.x + d.width + 10 ? "hide" : "show"]()), c.setInputValue("min", a), c.setInputValue("max", b)), c.rendered = !0);
      }, update: function update(a) {
        var b = this.chart;A(!0, b.options.rangeSelector, a);this.destroy();this.init(b);
      }, destroy: function destroy() {
        var b = this,
            d = b.minInput,
            e = b.maxInput;b.unMouseDown();b.unResize();m(b.buttons);d && (d.onfocus = d.onblur = d.onchange = null);e && (e.onfocus = e.onblur = e.onchange = null);a.objectEach(b, function (a, c) {
          a && "chart" !== c && (a.destroy ? a.destroy() : a.nodeType && f(this[c]));a !== E.prototype[c] && (b[c] = null);
        }, this);
      } };F.prototype.toFixedRange = function (a, d, e, f) {
      var c = this.chart && this.chart.fixedRange;a = v(e, this.translate(a, !0, !this.horiz));d = v(f, this.translate(d, !0, !this.horiz));e = c && (d - a) / c;.7 < e && 1.3 > e && (f ? a = d - c : d = a + c);b(a) || (a = d = void 0);
      return { min: a, max: d };
    };F.prototype.minFromRange = function () {
      var a = this.range,
          d = { month: "Month", year: "FullYear" }[a.type],
          e,
          f = this.max,
          g,
          h,
          m = function m(a, b) {
        var c = new Date(a),
            e = c["get" + d]();c["set" + d](e + b);e === c["get" + d]() && c.setDate(0);return c.getTime() - a;
      };b(a) ? (e = f - a, h = a) : (e = f + m(f, -a.count), this.chart && (this.chart.fixedRange = f - e));g = v(this.dataMin, Number.MIN_VALUE);b(e) || (e = g);e <= g && (e = g, void 0 === h && (h = m(e, a.count)), this.newMax = Math.min(e + h, this.dataMax));b(f) || (e = void 0);return e;
    };J(D.prototype, "init", function (a, b, d) {
      B(this, "init", function () {
        this.options.rangeSelector.enabled && (this.rangeSelector = new E(this));
      });a.call(this, b, d);
    });D.prototype.callbacks.push(function (a) {
      function c() {
        d = a.xAxis[0].getExtremes();b(d.min) && e.render(d.min, d.max);
      }var d,
          e = a.rangeSelector,
          f,
          g;e && (g = B(a.xAxis[0], "afterSetExtremes", function (a) {
        e.render(a.min, a.max);
      }), f = B(a, "redraw", c), c());B(a, "destroy", function () {
        e && (f(), g());
      });
    });a.RangeSelector = E;
  })(L);(function (a) {
    var E = a.arrayMax,
        B = a.arrayMin,
        F = a.Axis,
        D = a.Chart,
        n = a.defined,
        h = a.each,
        u = a.extend,
        r = a.format,
        x = a.grep,
        t = a.inArray,
        m = a.isNumber,
        f = a.isString,
        g = a.map,
        e = a.merge,
        d = a.pick,
        p = a.Point,
        b = a.Renderer,
        A = a.Series,
        v = a.splat,
        H = a.SVGRenderer,
        q = a.VMLRenderer,
        J = a.wrap,
        c = A.prototype,
        w = c.init,
        K = c.processData,
        y = p.prototype.tooltipFormatter;a.StockChart = a.stockChart = function (b, c, h) {
      var k = f(b) || b.nodeName,
          l = arguments[k ? 1 : 0],
          m = l.series,
          n = a.getOptions(),
          p,
          q = d(l.navigator && l.navigator.enabled, n.navigator.enabled, !0),
          r = q ? { startOnTick: !1, endOnTick: !1 } : null,
          t = { marker: { enabled: !1, radius: 2 } },
          u = { shadow: !1, borderWidth: 0 };l.xAxis = g(v(l.xAxis || {}), function (a) {
        return e({ minPadding: 0, maxPadding: 0, ordinal: !0, title: { text: null }, labels: { overflow: "justify" }, showLastLabel: !0 }, n.xAxis, a, { type: "datetime", categories: null }, r);
      });l.yAxis = g(v(l.yAxis || {}), function (a) {
        p = d(a.opposite, !0);return e({ labels: { y: -2 }, opposite: p, showLastLabel: !1, title: { text: null } }, n.yAxis, a);
      });l.series = null;l = e({ chart: { panning: !0, pinchType: "x" }, navigator: { enabled: q }, scrollbar: { enabled: d(n.scrollbar.enabled, !0) }, rangeSelector: { enabled: d(n.rangeSelector.enabled, !0) }, title: { text: null }, tooltip: { shared: !0, crosshairs: !0 }, legend: { enabled: !1 }, plotOptions: { line: t, spline: t, area: t, areaspline: t, arearange: t, areasplinerange: t, column: u, columnrange: u, candlestick: u, ohlc: u } }, l, { isStock: !0 });l.series = m;return k ? new D(b, l, h) : new D(l, c);
    };J(F.prototype, "autoLabelAlign", function (a) {
      var b = this.chart,
          c = this.options,
          b = b._labelPanes = b._labelPanes || {},
          d = this.options.labels;return this.chart.options.isStock && "yAxis" === this.coll && (c = c.top + "," + c.height, !b[c] && d.enabled) ? (15 === d.x && (d.x = 0), void 0 === d.align && (d.align = "right"), b[c] = this, "right") : a.call(this, [].slice.call(arguments, 1));
    });J(F.prototype, "destroy", function (a) {
      var b = this.chart,
          c = this.options && this.options.top + "," + this.options.height;c && b._labelPanes && b._labelPanes[c] === this && delete b._labelPanes[c];return a.call(this, Array.prototype.slice.call(arguments, 1));
    });J(F.prototype, "getPlotLinePath", function (b, c, e, k, p, q) {
      var l = this,
          r = this.isLinked && !this.series ? this.linkedParent.series : this.series,
          u = l.chart,
          v = u.renderer,
          w = l.left,
          x = l.top,
          z,
          y,
          A,
          B,
          G = [],
          D = [],
          E,
          I;if ("xAxis" !== l.coll && "yAxis" !== l.coll) return b.apply(this, [].slice.call(arguments, 1));D = function (a) {
        var b = "xAxis" === a ? "yAxis" : "xAxis";a = l.options[b];return m(a) ? [u[b][a]] : f(a) ? [u.get(a)] : g(r, function (a) {
          return a[b];
        });
      }(l.coll);h(l.isXAxis ? u.yAxis : u.xAxis, function (a) {
        if (n(a.options.id) ? -1 === a.options.id.indexOf("navigator") : 1) {
          var b = a.isXAxis ? "yAxis" : "xAxis",
              b = n(a.options[b]) ? u[b][a.options[b]] : u[b][0];l === b && D.push(a);
        }
      });E = D.length ? [] : [l.isXAxis ? u.yAxis[0] : u.xAxis[0]];
      h(D, function (b) {
        -1 !== t(b, E) || a.find(E, function (a) {
          return a.pos === b.pos && a.len && b.len;
        }) || E.push(b);
      });I = d(q, l.translate(c, null, null, k));m(I) && (l.horiz ? h(E, function (a) {
        var b;y = a.pos;B = y + a.len;z = A = Math.round(I + l.transB);if (z < w || z > w + l.width) p ? z = A = Math.min(Math.max(w, z), w + l.width) : b = !0;b || G.push("M", z, y, "L", A, B);
      }) : h(E, function (a) {
        var b;z = a.pos;A = z + a.len;y = B = Math.round(x + l.height - I);if (y < x || y > x + l.height) p ? y = B = Math.min(Math.max(x, y), l.top + l.height) : b = !0;b || G.push("M", z, y, "L", A, B);
      }));return 0 < G.length ? v.crispPolyLine(G, e || 1) : null;
    });F.prototype.getPlotBandPath = function (a, b) {
      b = this.getPlotLinePath(b, null, null, !0);a = this.getPlotLinePath(a, null, null, !0);var c = [],
          d;if (a && b) {
        if (a.toString() === b.toString()) c = a, c.flat = !0;else for (d = 0; d < a.length; d += 6) {
          c.push("M", a[d + 1], a[d + 2], "L", a[d + 4], a[d + 5], b[d + 4], b[d + 5], b[d + 1], b[d + 2], "z");
        }
      } else c = null;return c;
    };H.prototype.crispPolyLine = function (a, b) {
      var c;for (c = 0; c < a.length; c += 6) {
        a[c + 1] === a[c + 4] && (a[c + 1] = a[c + 4] = Math.round(a[c + 1]) - b % 2 / 2), a[c + 2] === a[c + 5] && (a[c + 2] = a[c + 5] = Math.round(a[c + 2]) + b % 2 / 2);
      }return a;
    };b === q && (q.prototype.crispPolyLine = H.prototype.crispPolyLine);J(F.prototype, "hideCrosshair", function (a, b) {
      a.call(this, b);this.crossLabel && (this.crossLabel = this.crossLabel.hide());
    });J(F.prototype, "drawCrosshair", function (a, b, c) {
      var e, f;a.call(this, b, c);if (n(this.crosshair.label) && this.crosshair.label.enabled && this.cross) {
        a = this.chart;var g = this.options.crosshair.label,
            h = this.horiz;e = this.opposite;f = this.left;var l = this.top,
            m = this.crossLabel,
            p,
            q = g.format,
            t = "",
            v = "inside" === this.options.tickPosition,
            w = !1 !== this.crosshair.snap,
            x = 0;b || (b = this.cross && this.cross.e);p = h ? "center" : e ? "right" === this.labelAlign ? "right" : "left" : "left" === this.labelAlign ? "left" : "center";m || (m = this.crossLabel = a.renderer.label(null, null, null, g.shape || "callout").addClass("highcharts-crosshair-label" + (this.series[0] && " highcharts-color-" + this.series[0].colorIndex)).attr({ align: g.align || p, padding: d(g.padding, 8), r: d(g.borderRadius, 3), zIndex: 2 }).add(this.labelGroup), m.attr({ fill: g.backgroundColor || this.series[0] && this.series[0].color || "#666666", stroke: g.borderColor || "", "stroke-width": g.borderWidth || 0 }).css(u({ color: "#ffffff", fontWeight: "normal", fontSize: "11px", textAlign: "center" }, g.style)));h ? (p = w ? c.plotX + f : b.chartX, l += e ? 0 : this.height) : (p = e ? this.width + f : 0, l = w ? c.plotY + l : b.chartY);q || g.formatter || (this.isDatetimeAxis && (t = "%b %d, %Y"), q = "{value" + (t ? ":" + t : "") + "}");b = w ? c[this.isXAxis ? "x" : "y"] : this.toValue(h ? b.chartX : b.chartY);m.attr({ text: q ? r(q, { value: b }) : g.formatter.call(this, b), x: p, y: l, visibility: "visible" });b = m.getBBox();if (h) {
          if (v && !e || !v && e) l = m.y - b.height;
        } else l = m.y - b.height / 2;h ? (e = f - b.x, f = f + this.width - b.x) : (e = "left" === this.labelAlign ? f : 0, f = "right" === this.labelAlign ? f + this.width : a.chartWidth);m.translateX < e && (x = e - m.translateX);m.translateX + b.width >= f && (x = -(m.translateX + b.width - f));m.attr({ x: p + x, y: l, anchorX: h ? p : this.opposite ? 0 : a.chartWidth, anchorY: h ? this.opposite ? a.chartHeight : 0 : l + b.height / 2 });
      }
    });c.init = function () {
      w.apply(this, arguments);this.setCompare(this.options.compare);
    };c.setCompare = function (a) {
      this.modifyValue = "value" === a || "percent" === a ? function (b, c) {
        var d = this.compareValue;if (void 0 !== b && void 0 !== d) return b = "value" === a ? b - d : b / d * 100 - (100 === this.options.compareBase ? 0 : 100), c && (c.change = b), b;
      } : null;this.userOptions.compare = a;this.chart.hasRendered && (this.isDirty = !0);
    };c.processData = function () {
      var a,
          b = -1,
          c,
          d,
          e,
          f;K.apply(this, arguments);if (this.xAxis && this.processedYData) for (c = this.processedXData, d = this.processedYData, e = d.length, this.pointArrayMap && (b = t("close", this.pointArrayMap), -1 === b && (b = t(this.pointValKey || "y", this.pointArrayMap))), a = 0; a < e - 1; a++) {
        if (f = d[a] && -1 < b ? d[a][b] : d[a], m(f) && c[a + 1] >= this.xAxis.min && 0 !== f) {
          this.compareValue = f;break;
        }
      }
    };J(c, "getExtremes", function (a) {
      var b;a.apply(this, [].slice.call(arguments, 1));this.modifyValue && (b = [this.modifyValue(this.dataMin), this.modifyValue(this.dataMax)], this.dataMin = B(b), this.dataMax = E(b));
    });F.prototype.setCompare = function (a, b) {
      this.isXAxis || (h(this.series, function (b) {
        b.setCompare(a);
      }), d(b, !0) && this.chart.redraw());
    };p.prototype.tooltipFormatter = function (b) {
      b = b.replace("{point.change}", (0 < this.change ? "+" : "") + a.numberFormat(this.change, d(this.series.tooltipOptions.changeDecimals, 2)));return y.apply(this, [b]);
    };J(A.prototype, "render", function (a) {
      this.chart.is3d && this.chart.is3d() || this.chart.polar || !this.xAxis || this.xAxis.isRadial || (!this.clipBox && this.animate ? (this.clipBox = e(this.chart.clipBox), this.clipBox.width = this.xAxis.len, this.clipBox.height = this.yAxis.len) : this.chart[this.sharedClipKey] ? this.chart[this.sharedClipKey].attr({ width: this.xAxis.len, height: this.yAxis.len }) : this.clipBox && (this.clipBox.width = this.xAxis.len, this.clipBox.height = this.yAxis.len));a.call(this);
    });J(D.prototype, "getSelectedPoints", function (a) {
      var b = a.call(this);h(this.series, function (a) {
        a.hasGroupedData && (b = b.concat(x(a.points || [], function (a) {
          return a.selected;
        })));
      });return b;
    });J(D.prototype, "update", function (a, b) {
      "scrollbar" in b && this.navigator && (e(!0, this.options.scrollbar, b.scrollbar), this.navigator.update({}, !1), delete b.scrollbar);return a.apply(this, Array.prototype.slice.call(arguments, 1));
    });
  })(L);return L;
});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(24)(module)))

/***/ })

/******/ });