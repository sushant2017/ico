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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/mix/js/chart.js":
/*!***********************************!*\
  !*** ./resources/mix/js/chart.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var require;var require;function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*!
 * Chart.js
 * http://chartjs.org/
 * Version: 2.4.0
 *
 * Copyright 2016 Nick Downie
 * Released under the MIT license
 * https://github.com/chartjs/Chart.js/blob/master/LICENSE.md
 */
!function (t) {
  if ("object" == ( false ? undefined : _typeof(exports)) && "undefined" != typeof module) module.exports = t();else if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (t),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else { var e; }
}(function () {
  return function t(e, a, i) {
    function n(r, l) {
      if (!a[r]) {
        if (!e[r]) {
          var s = "function" == typeof require && require;
          if (!l && s) return require(r, !0);
          if (o) return o(r, !0);
          var d = new Error("Cannot find module '" + r + "'");
          throw d.code = "MODULE_NOT_FOUND", d;
        }

        var u = a[r] = {
          exports: {}
        };
        e[r][0].call(u.exports, function (t) {
          var a = e[r][1][t];
          return n(a ? a : t);
        }, u, u.exports, t, e, a, i);
      }

      return a[r].exports;
    }

    for (var o = "function" == typeof require && require, r = 0; r < i.length; r++) {
      n(i[r]);
    }

    return n;
  }({
    1: [function (t, e, a) {}, {}],
    2: [function (t, e, a) {
      function i(t) {
        if (t) {
          var e = /^#([a-fA-F0-9]{3})$/,
              a = /^#([a-fA-F0-9]{6})$/,
              i = /^rgba?\(\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/,
              n = /^rgba?\(\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/,
              o = /(\w+)/,
              r = [0, 0, 0],
              l = 1,
              s = t.match(e);

          if (s) {
            s = s[1];

            for (var d = 0; d < r.length; d++) {
              r[d] = parseInt(s[d] + s[d], 16);
            }
          } else if (s = t.match(a)) {
            s = s[1];

            for (var d = 0; d < r.length; d++) {
              r[d] = parseInt(s.slice(2 * d, 2 * d + 2), 16);
            }
          } else if (s = t.match(i)) {
            for (var d = 0; d < r.length; d++) {
              r[d] = parseInt(s[d + 1]);
            }

            l = parseFloat(s[4]);
          } else if (s = t.match(n)) {
            for (var d = 0; d < r.length; d++) {
              r[d] = Math.round(2.55 * parseFloat(s[d + 1]));
            }

            l = parseFloat(s[4]);
          } else if (s = t.match(o)) {
            if ("transparent" == s[1]) return [0, 0, 0, 0];
            if (r = y[s[1]], !r) return;
          }

          for (var d = 0; d < r.length; d++) {
            r[d] = v(r[d], 0, 255);
          }

          return l = l || 0 == l ? v(l, 0, 1) : 1, r[3] = l, r;
        }
      }

      function n(t) {
        if (t) {
          var e = /^hsla?\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/,
              a = t.match(e);

          if (a) {
            var i = parseFloat(a[4]),
                n = v(parseInt(a[1]), 0, 360),
                o = v(parseFloat(a[2]), 0, 100),
                r = v(parseFloat(a[3]), 0, 100),
                l = v(isNaN(i) ? 1 : i, 0, 1);
            return [n, o, r, l];
          }
        }
      }

      function o(t) {
        if (t) {
          var e = /^hwb\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/,
              a = t.match(e);

          if (a) {
            var i = parseFloat(a[4]),
                n = v(parseInt(a[1]), 0, 360),
                o = v(parseFloat(a[2]), 0, 100),
                r = v(parseFloat(a[3]), 0, 100),
                l = v(isNaN(i) ? 1 : i, 0, 1);
            return [n, o, r, l];
          }
        }
      }

      function r(t) {
        var e = i(t);
        return e && e.slice(0, 3);
      }

      function l(t) {
        var e = n(t);
        return e && e.slice(0, 3);
      }

      function s(t) {
        var e = i(t);
        return e ? e[3] : (e = n(t)) ? e[3] : (e = o(t)) ? e[3] : void 0;
      }

      function d(t) {
        return "#" + x(t[0]) + x(t[1]) + x(t[2]);
      }

      function u(t, e) {
        return 1 > e || t[3] && t[3] < 1 ? c(t, e) : "rgb(" + t[0] + ", " + t[1] + ", " + t[2] + ")";
      }

      function c(t, e) {
        return void 0 === e && (e = void 0 !== t[3] ? t[3] : 1), "rgba(" + t[0] + ", " + t[1] + ", " + t[2] + ", " + e + ")";
      }

      function h(t, e) {
        if (1 > e || t[3] && t[3] < 1) return f(t, e);
        var a = Math.round(t[0] / 255 * 100),
            i = Math.round(t[1] / 255 * 100),
            n = Math.round(t[2] / 255 * 100);
        return "rgb(" + a + "%, " + i + "%, " + n + "%)";
      }

      function f(t, e) {
        var a = Math.round(t[0] / 255 * 100),
            i = Math.round(t[1] / 255 * 100),
            n = Math.round(t[2] / 255 * 100);
        return "rgba(" + a + "%, " + i + "%, " + n + "%, " + (e || t[3] || 1) + ")";
      }

      function g(t, e) {
        return 1 > e || t[3] && t[3] < 1 ? p(t, e) : "hsl(" + t[0] + ", " + t[1] + "%, " + t[2] + "%)";
      }

      function p(t, e) {
        return void 0 === e && (e = void 0 !== t[3] ? t[3] : 1), "hsla(" + t[0] + ", " + t[1] + "%, " + t[2] + "%, " + e + ")";
      }

      function m(t, e) {
        return void 0 === e && (e = void 0 !== t[3] ? t[3] : 1), "hwb(" + t[0] + ", " + t[1] + "%, " + t[2] + "%" + (void 0 !== e && 1 !== e ? ", " + e : "") + ")";
      }

      function b(t) {
        return k[t.slice(0, 3)];
      }

      function v(t, e, a) {
        return Math.min(Math.max(e, t), a);
      }

      function x(t) {
        var e = t.toString(16).toUpperCase();
        return e.length < 2 ? "0" + e : e;
      }

      var y = t(6);
      e.exports = {
        getRgba: i,
        getHsla: n,
        getRgb: r,
        getHsl: l,
        getHwb: o,
        getAlpha: s,
        hexString: d,
        rgbString: u,
        rgbaString: c,
        percentString: h,
        percentaString: f,
        hslString: g,
        hslaString: p,
        hwbString: m,
        keyword: b
      };
      var k = {};

      for (var S in y) {
        k[y[S]] = S;
      }
    }, {
      6: 6
    }],
    3: [function (t, e, a) {
      var i = t(5),
          n = t(2),
          o = function o(t) {
        if (t instanceof o) return t;
        if (!(this instanceof o)) return new o(t);
        this.values = {
          rgb: [0, 0, 0],
          hsl: [0, 0, 0],
          hsv: [0, 0, 0],
          hwb: [0, 0, 0],
          cmyk: [0, 0, 0, 0],
          alpha: 1
        };
        var e;
        if ("string" == typeof t) {
          if (e = n.getRgba(t)) this.setValues("rgb", e);else if (e = n.getHsla(t)) this.setValues("hsl", e);else {
            if (!(e = n.getHwb(t))) throw new Error('Unable to parse color from string "' + t + '"');
            this.setValues("hwb", e);
          }
        } else if ("object" == _typeof(t)) if (e = t, void 0 !== e.r || void 0 !== e.red) this.setValues("rgb", e);else if (void 0 !== e.l || void 0 !== e.lightness) this.setValues("hsl", e);else if (void 0 !== e.v || void 0 !== e.value) this.setValues("hsv", e);else if (void 0 !== e.w || void 0 !== e.whiteness) this.setValues("hwb", e);else {
          if (void 0 === e.c && void 0 === e.cyan) throw new Error("Unable to parse color from object " + JSON.stringify(t));
          this.setValues("cmyk", e);
        }
      };

      o.prototype = {
        rgb: function rgb() {
          return this.setSpace("rgb", arguments);
        },
        hsl: function hsl() {
          return this.setSpace("hsl", arguments);
        },
        hsv: function hsv() {
          return this.setSpace("hsv", arguments);
        },
        hwb: function hwb() {
          return this.setSpace("hwb", arguments);
        },
        cmyk: function cmyk() {
          return this.setSpace("cmyk", arguments);
        },
        rgbArray: function rgbArray() {
          return this.values.rgb;
        },
        hslArray: function hslArray() {
          return this.values.hsl;
        },
        hsvArray: function hsvArray() {
          return this.values.hsv;
        },
        hwbArray: function hwbArray() {
          var t = this.values;
          return 1 !== t.alpha ? t.hwb.concat([t.alpha]) : t.hwb;
        },
        cmykArray: function cmykArray() {
          return this.values.cmyk;
        },
        rgbaArray: function rgbaArray() {
          var t = this.values;
          return t.rgb.concat([t.alpha]);
        },
        hslaArray: function hslaArray() {
          var t = this.values;
          return t.hsl.concat([t.alpha]);
        },
        alpha: function alpha(t) {
          return void 0 === t ? this.values.alpha : (this.setValues("alpha", t), this);
        },
        red: function red(t) {
          return this.setChannel("rgb", 0, t);
        },
        green: function green(t) {
          return this.setChannel("rgb", 1, t);
        },
        blue: function blue(t) {
          return this.setChannel("rgb", 2, t);
        },
        hue: function hue(t) {
          return t && (t %= 360, t = 0 > t ? 360 + t : t), this.setChannel("hsl", 0, t);
        },
        saturation: function saturation(t) {
          return this.setChannel("hsl", 1, t);
        },
        lightness: function lightness(t) {
          return this.setChannel("hsl", 2, t);
        },
        saturationv: function saturationv(t) {
          return this.setChannel("hsv", 1, t);
        },
        whiteness: function whiteness(t) {
          return this.setChannel("hwb", 1, t);
        },
        blackness: function blackness(t) {
          return this.setChannel("hwb", 2, t);
        },
        value: function value(t) {
          return this.setChannel("hsv", 2, t);
        },
        cyan: function cyan(t) {
          return this.setChannel("cmyk", 0, t);
        },
        magenta: function magenta(t) {
          return this.setChannel("cmyk", 1, t);
        },
        yellow: function yellow(t) {
          return this.setChannel("cmyk", 2, t);
        },
        black: function black(t) {
          return this.setChannel("cmyk", 3, t);
        },
        hexString: function hexString() {
          return n.hexString(this.values.rgb);
        },
        rgbString: function rgbString() {
          return n.rgbString(this.values.rgb, this.values.alpha);
        },
        rgbaString: function rgbaString() {
          return n.rgbaString(this.values.rgb, this.values.alpha);
        },
        percentString: function percentString() {
          return n.percentString(this.values.rgb, this.values.alpha);
        },
        hslString: function hslString() {
          return n.hslString(this.values.hsl, this.values.alpha);
        },
        hslaString: function hslaString() {
          return n.hslaString(this.values.hsl, this.values.alpha);
        },
        hwbString: function hwbString() {
          return n.hwbString(this.values.hwb, this.values.alpha);
        },
        keyword: function keyword() {
          return n.keyword(this.values.rgb, this.values.alpha);
        },
        rgbNumber: function rgbNumber() {
          var t = this.values.rgb;
          return t[0] << 16 | t[1] << 8 | t[2];
        },
        luminosity: function luminosity() {
          for (var t = this.values.rgb, e = [], a = 0; a < t.length; a++) {
            var i = t[a] / 255;
            e[a] = .03928 >= i ? i / 12.92 : Math.pow((i + .055) / 1.055, 2.4);
          }

          return .2126 * e[0] + .7152 * e[1] + .0722 * e[2];
        },
        contrast: function contrast(t) {
          var e = this.luminosity(),
              a = t.luminosity();
          return e > a ? (e + .05) / (a + .05) : (a + .05) / (e + .05);
        },
        level: function level(t) {
          var e = this.contrast(t);
          return e >= 7.1 ? "AAA" : e >= 4.5 ? "AA" : "";
        },
        dark: function dark() {
          var t = this.values.rgb,
              e = (299 * t[0] + 587 * t[1] + 114 * t[2]) / 1e3;
          return 128 > e;
        },
        light: function light() {
          return !this.dark();
        },
        negate: function negate() {
          for (var t = [], e = 0; 3 > e; e++) {
            t[e] = 255 - this.values.rgb[e];
          }

          return this.setValues("rgb", t), this;
        },
        lighten: function lighten(t) {
          var e = this.values.hsl;
          return e[2] += e[2] * t, this.setValues("hsl", e), this;
        },
        darken: function darken(t) {
          var e = this.values.hsl;
          return e[2] -= e[2] * t, this.setValues("hsl", e), this;
        },
        saturate: function saturate(t) {
          var e = this.values.hsl;
          return e[1] += e[1] * t, this.setValues("hsl", e), this;
        },
        desaturate: function desaturate(t) {
          var e = this.values.hsl;
          return e[1] -= e[1] * t, this.setValues("hsl", e), this;
        },
        whiten: function whiten(t) {
          var e = this.values.hwb;
          return e[1] += e[1] * t, this.setValues("hwb", e), this;
        },
        blacken: function blacken(t) {
          var e = this.values.hwb;
          return e[2] += e[2] * t, this.setValues("hwb", e), this;
        },
        greyscale: function greyscale() {
          var t = this.values.rgb,
              e = .3 * t[0] + .59 * t[1] + .11 * t[2];
          return this.setValues("rgb", [e, e, e]), this;
        },
        clearer: function clearer(t) {
          var e = this.values.alpha;
          return this.setValues("alpha", e - e * t), this;
        },
        opaquer: function opaquer(t) {
          var e = this.values.alpha;
          return this.setValues("alpha", e + e * t), this;
        },
        rotate: function rotate(t) {
          var e = this.values.hsl,
              a = (e[0] + t) % 360;
          return e[0] = 0 > a ? 360 + a : a, this.setValues("hsl", e), this;
        },
        mix: function mix(t, e) {
          var a = this,
              i = t,
              n = void 0 === e ? .5 : e,
              o = 2 * n - 1,
              r = a.alpha() - i.alpha(),
              l = ((o * r === -1 ? o : (o + r) / (1 + o * r)) + 1) / 2,
              s = 1 - l;
          return this.rgb(l * a.red() + s * i.red(), l * a.green() + s * i.green(), l * a.blue() + s * i.blue()).alpha(a.alpha() * n + i.alpha() * (1 - n));
        },
        toJSON: function toJSON() {
          return this.rgb();
        },
        clone: function clone() {
          var t,
              e,
              a = new o(),
              i = this.values,
              n = a.values;

          for (var r in i) {
            i.hasOwnProperty(r) && (t = i[r], e = {}.toString.call(t), "[object Array]" === e ? n[r] = t.slice(0) : "[object Number]" === e ? n[r] = t : console.error("unexpected color value:", t));
          }

          return a;
        }
      }, o.prototype.spaces = {
        rgb: ["red", "green", "blue"],
        hsl: ["hue", "saturation", "lightness"],
        hsv: ["hue", "saturation", "value"],
        hwb: ["hue", "whiteness", "blackness"],
        cmyk: ["cyan", "magenta", "yellow", "black"]
      }, o.prototype.maxes = {
        rgb: [255, 255, 255],
        hsl: [360, 100, 100],
        hsv: [360, 100, 100],
        hwb: [360, 100, 100],
        cmyk: [100, 100, 100, 100]
      }, o.prototype.getValues = function (t) {
        for (var e = this.values, a = {}, i = 0; i < t.length; i++) {
          a[t.charAt(i)] = e[t][i];
        }

        return 1 !== e.alpha && (a.a = e.alpha), a;
      }, o.prototype.setValues = function (t, e) {
        var a,
            n = this.values,
            o = this.spaces,
            r = this.maxes,
            l = 1;
        if ("alpha" === t) l = e;else if (e.length) n[t] = e.slice(0, t.length), l = e[t.length];else if (void 0 !== e[t.charAt(0)]) {
          for (a = 0; a < t.length; a++) {
            n[t][a] = e[t.charAt(a)];
          }

          l = e.a;
        } else if (void 0 !== e[o[t][0]]) {
          var s = o[t];

          for (a = 0; a < t.length; a++) {
            n[t][a] = e[s[a]];
          }

          l = e.alpha;
        }
        if (n.alpha = Math.max(0, Math.min(1, void 0 === l ? n.alpha : l)), "alpha" === t) return !1;
        var d;

        for (a = 0; a < t.length; a++) {
          d = Math.max(0, Math.min(r[t][a], n[t][a])), n[t][a] = Math.round(d);
        }

        for (var u in o) {
          u !== t && (n[u] = i[t][u](n[t]));
        }

        return !0;
      }, o.prototype.setSpace = function (t, e) {
        var a = e[0];
        return void 0 === a ? this.getValues(t) : ("number" == typeof a && (a = Array.prototype.slice.call(e)), this.setValues(t, a), this);
      }, o.prototype.setChannel = function (t, e, a) {
        var i = this.values[t];
        return void 0 === a ? i[e] : a === i[e] ? this : (i[e] = a, this.setValues(t, i), this);
      }, "undefined" != typeof window && (window.Color = o), e.exports = o;
    }, {
      2: 2,
      5: 5
    }],
    4: [function (t, e, a) {
      function i(t) {
        var e,
            a,
            i,
            n = t[0] / 255,
            o = t[1] / 255,
            r = t[2] / 255,
            l = Math.min(n, o, r),
            s = Math.max(n, o, r),
            d = s - l;
        return s == l ? e = 0 : n == s ? e = (o - r) / d : o == s ? e = 2 + (r - n) / d : r == s && (e = 4 + (n - o) / d), e = Math.min(60 * e, 360), 0 > e && (e += 360), i = (l + s) / 2, a = s == l ? 0 : .5 >= i ? d / (s + l) : d / (2 - s - l), [e, 100 * a, 100 * i];
      }

      function n(t) {
        var e,
            a,
            i,
            n = t[0],
            o = t[1],
            r = t[2],
            l = Math.min(n, o, r),
            s = Math.max(n, o, r),
            d = s - l;
        return a = 0 == s ? 0 : d / s * 1e3 / 10, s == l ? e = 0 : n == s ? e = (o - r) / d : o == s ? e = 2 + (r - n) / d : r == s && (e = 4 + (n - o) / d), e = Math.min(60 * e, 360), 0 > e && (e += 360), i = s / 255 * 1e3 / 10, [e, a, i];
      }

      function o(t) {
        var e = t[0],
            a = t[1],
            n = t[2],
            o = i(t)[0],
            r = 1 / 255 * Math.min(e, Math.min(a, n)),
            n = 1 - 1 / 255 * Math.max(e, Math.max(a, n));
        return [o, 100 * r, 100 * n];
      }

      function l(t) {
        var e,
            a,
            i,
            n,
            o = t[0] / 255,
            r = t[1] / 255,
            l = t[2] / 255;
        return n = Math.min(1 - o, 1 - r, 1 - l), e = (1 - o - n) / (1 - n) || 0, a = (1 - r - n) / (1 - n) || 0, i = (1 - l - n) / (1 - n) || 0, [100 * e, 100 * a, 100 * i, 100 * n];
      }

      function s(t) {
        return G[JSON.stringify(t)];
      }

      function d(t) {
        var e = t[0] / 255,
            a = t[1] / 255,
            i = t[2] / 255;
        e = e > .04045 ? Math.pow((e + .055) / 1.055, 2.4) : e / 12.92, a = a > .04045 ? Math.pow((a + .055) / 1.055, 2.4) : a / 12.92, i = i > .04045 ? Math.pow((i + .055) / 1.055, 2.4) : i / 12.92;
        var n = .4124 * e + .3576 * a + .1805 * i,
            o = .2126 * e + .7152 * a + .0722 * i,
            r = .0193 * e + .1192 * a + .9505 * i;
        return [100 * n, 100 * o, 100 * r];
      }

      function u(t) {
        var e,
            a,
            i,
            n = d(t),
            o = n[0],
            r = n[1],
            l = n[2];
        return o /= 95.047, r /= 100, l /= 108.883, o = o > .008856 ? Math.pow(o, 1 / 3) : 7.787 * o + 16 / 116, r = r > .008856 ? Math.pow(r, 1 / 3) : 7.787 * r + 16 / 116, l = l > .008856 ? Math.pow(l, 1 / 3) : 7.787 * l + 16 / 116, e = 116 * r - 16, a = 500 * (o - r), i = 200 * (r - l), [e, a, i];
      }

      function c(t) {
        return W(u(t));
      }

      function h(t) {
        var e,
            a,
            i,
            n,
            o,
            r = t[0] / 360,
            l = t[1] / 100,
            s = t[2] / 100;
        if (0 == l) return o = 255 * s, [o, o, o];
        a = .5 > s ? s * (1 + l) : s + l - s * l, e = 2 * s - a, n = [0, 0, 0];

        for (var d = 0; 3 > d; d++) {
          i = r + 1 / 3 * -(d - 1), 0 > i && i++, i > 1 && i--, o = 1 > 6 * i ? e + 6 * (a - e) * i : 1 > 2 * i ? a : 2 > 3 * i ? e + (a - e) * (2 / 3 - i) * 6 : e, n[d] = 255 * o;
        }

        return n;
      }

      function f(t) {
        var e,
            a,
            i = t[0],
            n = t[1] / 100,
            o = t[2] / 100;
        return 0 === o ? [0, 0, 0] : (o *= 2, n *= 1 >= o ? o : 2 - o, a = (o + n) / 2, e = 2 * n / (o + n), [i, 100 * e, 100 * a]);
      }

      function p(t) {
        return o(h(t));
      }

      function m(t) {
        return l(h(t));
      }

      function v(t) {
        return s(h(t));
      }

      function x(t) {
        var e = t[0] / 60,
            a = t[1] / 100,
            i = t[2] / 100,
            n = Math.floor(e) % 6,
            o = e - Math.floor(e),
            r = 255 * i * (1 - a),
            l = 255 * i * (1 - a * o),
            s = 255 * i * (1 - a * (1 - o)),
            i = 255 * i;

        switch (n) {
          case 0:
            return [i, s, r];

          case 1:
            return [l, i, r];

          case 2:
            return [r, i, s];

          case 3:
            return [r, l, i];

          case 4:
            return [s, r, i];

          case 5:
            return [i, r, l];
        }
      }

      function y(t) {
        var e,
            a,
            i = t[0],
            n = t[1] / 100,
            o = t[2] / 100;
        return a = (2 - n) * o, e = n * o, e /= 1 >= a ? a : 2 - a, e = e || 0, a /= 2, [i, 100 * e, 100 * a];
      }

      function k(t) {
        return o(x(t));
      }

      function S(t) {
        return l(x(t));
      }

      function w(t) {
        return s(x(t));
      }

      function M(t) {
        var e,
            a,
            i,
            n,
            o = t[0] / 360,
            l = t[1] / 100,
            s = t[2] / 100,
            d = l + s;

        switch (d > 1 && (l /= d, s /= d), e = Math.floor(6 * o), a = 1 - s, i = 6 * o - e, 0 != (1 & e) && (i = 1 - i), n = l + i * (a - l), e) {
          default:
          case 6:
          case 0:
            r = a, g = n, b = l;
            break;

          case 1:
            r = n, g = a, b = l;
            break;

          case 2:
            r = l, g = a, b = n;
            break;

          case 3:
            r = l, g = n, b = a;
            break;

          case 4:
            r = n, g = l, b = a;
            break;

          case 5:
            r = a, g = l, b = n;
        }

        return [255 * r, 255 * g, 255 * b];
      }

      function C(t) {
        return i(M(t));
      }

      function D(t) {
        return n(M(t));
      }

      function I(t) {
        return l(M(t));
      }

      function A(t) {
        return s(M(t));
      }

      function T(t) {
        var e,
            a,
            i,
            n = t[0] / 100,
            o = t[1] / 100,
            r = t[2] / 100,
            l = t[3] / 100;
        return e = 1 - Math.min(1, n * (1 - l) + l), a = 1 - Math.min(1, o * (1 - l) + l), i = 1 - Math.min(1, r * (1 - l) + l), [255 * e, 255 * a, 255 * i];
      }

      function P(t) {
        return i(T(t));
      }

      function F(t) {
        return n(T(t));
      }

      function _(t) {
        return o(T(t));
      }

      function R(t) {
        return s(T(t));
      }

      function V(t) {
        var e,
            a,
            i,
            n = t[0] / 100,
            o = t[1] / 100,
            r = t[2] / 100;
        return e = 3.2406 * n + -1.5372 * o + r * -.4986, a = n * -.9689 + 1.8758 * o + .0415 * r, i = .0557 * n + o * -.204 + 1.057 * r, e = e > .0031308 ? 1.055 * Math.pow(e, 1 / 2.4) - .055 : e = 12.92 * e, a = a > .0031308 ? 1.055 * Math.pow(a, 1 / 2.4) - .055 : a = 12.92 * a, i = i > .0031308 ? 1.055 * Math.pow(i, 1 / 2.4) - .055 : i = 12.92 * i, e = Math.min(Math.max(0, e), 1), a = Math.min(Math.max(0, a), 1), i = Math.min(Math.max(0, i), 1), [255 * e, 255 * a, 255 * i];
      }

      function L(t) {
        var e,
            a,
            i,
            n = t[0],
            o = t[1],
            r = t[2];
        return n /= 95.047, o /= 100, r /= 108.883, n = n > .008856 ? Math.pow(n, 1 / 3) : 7.787 * n + 16 / 116, o = o > .008856 ? Math.pow(o, 1 / 3) : 7.787 * o + 16 / 116, r = r > .008856 ? Math.pow(r, 1 / 3) : 7.787 * r + 16 / 116, e = 116 * o - 16, a = 500 * (n - o), i = 200 * (o - r), [e, a, i];
      }

      function O(t) {
        return W(L(t));
      }

      function B(t) {
        var e,
            a,
            i,
            n,
            o = t[0],
            r = t[1],
            l = t[2];
        return 8 >= o ? (a = 100 * o / 903.3, n = 7.787 * (a / 100) + 16 / 116) : (a = 100 * Math.pow((o + 16) / 116, 3), n = Math.pow(a / 100, 1 / 3)), e = .008856 >= e / 95.047 ? e = 95.047 * (r / 500 + n - 16 / 116) / 7.787 : 95.047 * Math.pow(r / 500 + n, 3), i = .008859 >= i / 108.883 ? i = 108.883 * (n - l / 200 - 16 / 116) / 7.787 : 108.883 * Math.pow(n - l / 200, 3), [e, a, i];
      }

      function W(t) {
        var e,
            a,
            i,
            n = t[0],
            o = t[1],
            r = t[2];
        return e = Math.atan2(r, o), a = 360 * e / 2 / Math.PI, 0 > a && (a += 360), i = Math.sqrt(o * o + r * r), [n, i, a];
      }

      function z(t) {
        return V(B(t));
      }

      function N(t) {
        var e,
            a,
            i,
            n = t[0],
            o = t[1],
            r = t[2];
        return i = r / 360 * 2 * Math.PI, e = o * Math.cos(i), a = o * Math.sin(i), [n, e, a];
      }

      function E(t) {
        return B(N(t));
      }

      function H(t) {
        return z(N(t));
      }

      function U(t) {
        return Z[t];
      }

      function j(t) {
        return i(U(t));
      }

      function q(t) {
        return n(U(t));
      }

      function Y(t) {
        return o(U(t));
      }

      function X(t) {
        return l(U(t));
      }

      function K(t) {
        return u(U(t));
      }

      function J(t) {
        return d(U(t));
      }

      e.exports = {
        rgb2hsl: i,
        rgb2hsv: n,
        rgb2hwb: o,
        rgb2cmyk: l,
        rgb2keyword: s,
        rgb2xyz: d,
        rgb2lab: u,
        rgb2lch: c,
        hsl2rgb: h,
        hsl2hsv: f,
        hsl2hwb: p,
        hsl2cmyk: m,
        hsl2keyword: v,
        hsv2rgb: x,
        hsv2hsl: y,
        hsv2hwb: k,
        hsv2cmyk: S,
        hsv2keyword: w,
        hwb2rgb: M,
        hwb2hsl: C,
        hwb2hsv: D,
        hwb2cmyk: I,
        hwb2keyword: A,
        cmyk2rgb: T,
        cmyk2hsl: P,
        cmyk2hsv: F,
        cmyk2hwb: _,
        cmyk2keyword: R,
        keyword2rgb: U,
        keyword2hsl: j,
        keyword2hsv: q,
        keyword2hwb: Y,
        keyword2cmyk: X,
        keyword2lab: K,
        keyword2xyz: J,
        xyz2rgb: V,
        xyz2lab: L,
        xyz2lch: O,
        lab2xyz: B,
        lab2rgb: z,
        lab2lch: W,
        lch2lab: N,
        lch2xyz: E,
        lch2rgb: H
      };
      var Z = {
        aliceblue: [240, 248, 255],
        antiquewhite: [250, 235, 215],
        aqua: [0, 255, 255],
        aquamarine: [127, 255, 212],
        azure: [240, 255, 255],
        beige: [245, 245, 220],
        bisque: [255, 228, 196],
        black: [0, 0, 0],
        blanchedalmond: [255, 235, 205],
        blue: [0, 0, 255],
        blueviolet: [138, 43, 226],
        brown: [165, 42, 42],
        burlywood: [222, 184, 135],
        cadetblue: [95, 158, 160],
        chartreuse: [127, 255, 0],
        chocolate: [210, 105, 30],
        coral: [255, 127, 80],
        cornflowerblue: [100, 149, 237],
        cornsilk: [255, 248, 220],
        crimson: [220, 20, 60],
        cyan: [0, 255, 255],
        darkblue: [0, 0, 139],
        darkcyan: [0, 139, 139],
        darkgoldenrod: [184, 134, 11],
        darkgray: [169, 169, 169],
        darkgreen: [0, 100, 0],
        darkgrey: [169, 169, 169],
        darkkhaki: [189, 183, 107],
        darkmagenta: [139, 0, 139],
        darkolivegreen: [85, 107, 47],
        darkorange: [255, 140, 0],
        darkorchid: [153, 50, 204],
        darkred: [139, 0, 0],
        darksalmon: [233, 150, 122],
        darkseagreen: [143, 188, 143],
        darkslateblue: [72, 61, 139],
        darkslategray: [47, 79, 79],
        darkslategrey: [47, 79, 79],
        darkturquoise: [0, 206, 209],
        darkviolet: [148, 0, 211],
        deeppink: [255, 20, 147],
        deepskyblue: [0, 191, 255],
        dimgray: [105, 105, 105],
        dimgrey: [105, 105, 105],
        dodgerblue: [30, 144, 255],
        firebrick: [178, 34, 34],
        floralwhite: [255, 250, 240],
        forestgreen: [34, 139, 34],
        fuchsia: [255, 0, 255],
        gainsboro: [220, 220, 220],
        ghostwhite: [248, 248, 255],
        gold: [255, 215, 0],
        goldenrod: [218, 165, 32],
        gray: [128, 128, 128],
        green: [0, 128, 0],
        greenyellow: [173, 255, 47],
        grey: [128, 128, 128],
        honeydew: [240, 255, 240],
        hotpink: [255, 105, 180],
        indianred: [205, 92, 92],
        indigo: [75, 0, 130],
        ivory: [255, 255, 240],
        khaki: [240, 230, 140],
        lavender: [230, 230, 250],
        lavenderblush: [255, 240, 245],
        lawngreen: [124, 252, 0],
        lemonchiffon: [255, 250, 205],
        lightblue: [173, 216, 230],
        lightcoral: [240, 128, 128],
        lightcyan: [224, 255, 255],
        lightgoldenrodyellow: [250, 250, 210],
        lightgray: [211, 211, 211],
        lightgreen: [144, 238, 144],
        lightgrey: [211, 211, 211],
        lightpink: [255, 182, 193],
        lightsalmon: [255, 160, 122],
        lightseagreen: [32, 178, 170],
        lightskyblue: [135, 206, 250],
        lightslategray: [119, 136, 153],
        lightslategrey: [119, 136, 153],
        lightsteelblue: [176, 196, 222],
        lightyellow: [255, 255, 224],
        lime: [0, 255, 0],
        limegreen: [50, 205, 50],
        linen: [250, 240, 230],
        magenta: [255, 0, 255],
        maroon: [128, 0, 0],
        mediumaquamarine: [102, 205, 170],
        mediumblue: [0, 0, 205],
        mediumorchid: [186, 85, 211],
        mediumpurple: [147, 112, 219],
        mediumseagreen: [60, 179, 113],
        mediumslateblue: [123, 104, 238],
        mediumspringgreen: [0, 250, 154],
        mediumturquoise: [72, 209, 204],
        mediumvioletred: [199, 21, 133],
        midnightblue: [25, 25, 112],
        mintcream: [245, 255, 250],
        mistyrose: [255, 228, 225],
        moccasin: [255, 228, 181],
        navajowhite: [255, 222, 173],
        navy: [0, 0, 128],
        oldlace: [253, 245, 230],
        olive: [128, 128, 0],
        olivedrab: [107, 142, 35],
        orange: [255, 165, 0],
        orangered: [255, 69, 0],
        orchid: [218, 112, 214],
        palegoldenrod: [238, 232, 170],
        palegreen: [152, 251, 152],
        paleturquoise: [175, 238, 238],
        palevioletred: [219, 112, 147],
        papayawhip: [255, 239, 213],
        peachpuff: [255, 218, 185],
        peru: [205, 133, 63],
        pink: [255, 192, 203],
        plum: [221, 160, 221],
        powderblue: [176, 224, 230],
        purple: [128, 0, 128],
        rebeccapurple: [102, 51, 153],
        red: [255, 0, 0],
        rosybrown: [188, 143, 143],
        royalblue: [65, 105, 225],
        saddlebrown: [139, 69, 19],
        salmon: [250, 128, 114],
        sandybrown: [244, 164, 96],
        seagreen: [46, 139, 87],
        seashell: [255, 245, 238],
        sienna: [160, 82, 45],
        silver: [192, 192, 192],
        skyblue: [135, 206, 235],
        slateblue: [106, 90, 205],
        slategray: [112, 128, 144],
        slategrey: [112, 128, 144],
        snow: [255, 250, 250],
        springgreen: [0, 255, 127],
        steelblue: [70, 130, 180],
        tan: [210, 180, 140],
        teal: [0, 128, 128],
        thistle: [216, 191, 216],
        tomato: [255, 99, 71],
        turquoise: [64, 224, 208],
        violet: [238, 130, 238],
        wheat: [245, 222, 179],
        white: [255, 255, 255],
        whitesmoke: [245, 245, 245],
        yellow: [255, 255, 0],
        yellowgreen: [154, 205, 50]
      },
          G = {};

      for (var Q in Z) {
        G[JSON.stringify(Z[Q])] = Q;
      }
    }, {}],
    5: [function (t, e, a) {
      var i = t(4),
          n = function n() {
        return new d();
      };

      for (var o in i) {
        n[o + "Raw"] = function (t) {
          return function (e) {
            return "number" == typeof e && (e = Array.prototype.slice.call(arguments)), i[t](e);
          };
        }(o);

        var r = /(\w+)2(\w+)/.exec(o),
            l = r[1],
            s = r[2];
        n[l] = n[l] || {}, n[l][s] = n[o] = function (t) {
          return function (e) {
            "number" == typeof e && (e = Array.prototype.slice.call(arguments));
            var a = i[t](e);
            if ("string" == typeof a || void 0 === a) return a;

            for (var n = 0; n < a.length; n++) {
              a[n] = Math.round(a[n]);
            }

            return a;
          };
        }(o);
      }

      var d = function d() {
        this.convs = {};
      };

      d.prototype.routeSpace = function (t, e) {
        var a = e[0];
        return void 0 === a ? this.getValues(t) : ("number" == typeof a && (a = Array.prototype.slice.call(e)), this.setValues(t, a));
      }, d.prototype.setValues = function (t, e) {
        return this.space = t, this.convs = {}, this.convs[t] = e, this;
      }, d.prototype.getValues = function (t) {
        var e = this.convs[t];

        if (!e) {
          var a = this.space,
              i = this.convs[a];
          e = n[a][t](i), this.convs[t] = e;
        }

        return e;
      }, ["rgb", "hsl", "hsv", "cmyk", "keyword"].forEach(function (t) {
        d.prototype[t] = function (e) {
          return this.routeSpace(t, arguments);
        };
      }), e.exports = n;
    }, {
      4: 4
    }],
    6: [function (t, e, a) {
      e.exports = {
        aliceblue: [240, 248, 255],
        antiquewhite: [250, 235, 215],
        aqua: [0, 255, 255],
        aquamarine: [127, 255, 212],
        azure: [240, 255, 255],
        beige: [245, 245, 220],
        bisque: [255, 228, 196],
        black: [0, 0, 0],
        blanchedalmond: [255, 235, 205],
        blue: [0, 0, 255],
        blueviolet: [138, 43, 226],
        brown: [165, 42, 42],
        burlywood: [222, 184, 135],
        cadetblue: [95, 158, 160],
        chartreuse: [127, 255, 0],
        chocolate: [210, 105, 30],
        coral: [255, 127, 80],
        cornflowerblue: [100, 149, 237],
        cornsilk: [255, 248, 220],
        crimson: [220, 20, 60],
        cyan: [0, 255, 255],
        darkblue: [0, 0, 139],
        darkcyan: [0, 139, 139],
        darkgoldenrod: [184, 134, 11],
        darkgray: [169, 169, 169],
        darkgreen: [0, 100, 0],
        darkgrey: [169, 169, 169],
        darkkhaki: [189, 183, 107],
        darkmagenta: [139, 0, 139],
        darkolivegreen: [85, 107, 47],
        darkorange: [255, 140, 0],
        darkorchid: [153, 50, 204],
        darkred: [139, 0, 0],
        darksalmon: [233, 150, 122],
        darkseagreen: [143, 188, 143],
        darkslateblue: [72, 61, 139],
        darkslategray: [47, 79, 79],
        darkslategrey: [47, 79, 79],
        darkturquoise: [0, 206, 209],
        darkviolet: [148, 0, 211],
        deeppink: [255, 20, 147],
        deepskyblue: [0, 191, 255],
        dimgray: [105, 105, 105],
        dimgrey: [105, 105, 105],
        dodgerblue: [30, 144, 255],
        firebrick: [178, 34, 34],
        floralwhite: [255, 250, 240],
        forestgreen: [34, 139, 34],
        fuchsia: [255, 0, 255],
        gainsboro: [220, 220, 220],
        ghostwhite: [248, 248, 255],
        gold: [255, 215, 0],
        goldenrod: [218, 165, 32],
        gray: [128, 128, 128],
        green: [0, 128, 0],
        greenyellow: [173, 255, 47],
        grey: [128, 128, 128],
        honeydew: [240, 255, 240],
        hotpink: [255, 105, 180],
        indianred: [205, 92, 92],
        indigo: [75, 0, 130],
        ivory: [255, 255, 240],
        khaki: [240, 230, 140],
        lavender: [230, 230, 250],
        lavenderblush: [255, 240, 245],
        lawngreen: [124, 252, 0],
        lemonchiffon: [255, 250, 205],
        lightblue: [173, 216, 230],
        lightcoral: [240, 128, 128],
        lightcyan: [224, 255, 255],
        lightgoldenrodyellow: [250, 250, 210],
        lightgray: [211, 211, 211],
        lightgreen: [144, 238, 144],
        lightgrey: [211, 211, 211],
        lightpink: [255, 182, 193],
        lightsalmon: [255, 160, 122],
        lightseagreen: [32, 178, 170],
        lightskyblue: [135, 206, 250],
        lightslategray: [119, 136, 153],
        lightslategrey: [119, 136, 153],
        lightsteelblue: [176, 196, 222],
        lightyellow: [255, 255, 224],
        lime: [0, 255, 0],
        limegreen: [50, 205, 50],
        linen: [250, 240, 230],
        magenta: [255, 0, 255],
        maroon: [128, 0, 0],
        mediumaquamarine: [102, 205, 170],
        mediumblue: [0, 0, 205],
        mediumorchid: [186, 85, 211],
        mediumpurple: [147, 112, 219],
        mediumseagreen: [60, 179, 113],
        mediumslateblue: [123, 104, 238],
        mediumspringgreen: [0, 250, 154],
        mediumturquoise: [72, 209, 204],
        mediumvioletred: [199, 21, 133],
        midnightblue: [25, 25, 112],
        mintcream: [245, 255, 250],
        mistyrose: [255, 228, 225],
        moccasin: [255, 228, 181],
        navajowhite: [255, 222, 173],
        navy: [0, 0, 128],
        oldlace: [253, 245, 230],
        olive: [128, 128, 0],
        olivedrab: [107, 142, 35],
        orange: [255, 165, 0],
        orangered: [255, 69, 0],
        orchid: [218, 112, 214],
        palegoldenrod: [238, 232, 170],
        palegreen: [152, 251, 152],
        paleturquoise: [175, 238, 238],
        palevioletred: [219, 112, 147],
        papayawhip: [255, 239, 213],
        peachpuff: [255, 218, 185],
        peru: [205, 133, 63],
        pink: [255, 192, 203],
        plum: [221, 160, 221],
        powderblue: [176, 224, 230],
        purple: [128, 0, 128],
        rebeccapurple: [102, 51, 153],
        red: [255, 0, 0],
        rosybrown: [188, 143, 143],
        royalblue: [65, 105, 225],
        saddlebrown: [139, 69, 19],
        salmon: [250, 128, 114],
        sandybrown: [244, 164, 96],
        seagreen: [46, 139, 87],
        seashell: [255, 245, 238],
        sienna: [160, 82, 45],
        silver: [192, 192, 192],
        skyblue: [135, 206, 235],
        slateblue: [106, 90, 205],
        slategray: [112, 128, 144],
        slategrey: [112, 128, 144],
        snow: [255, 250, 250],
        springgreen: [0, 255, 127],
        steelblue: [70, 130, 180],
        tan: [210, 180, 140],
        teal: [0, 128, 128],
        thistle: [216, 191, 216],
        tomato: [255, 99, 71],
        turquoise: [64, 224, 208],
        violet: [238, 130, 238],
        wheat: [245, 222, 179],
        white: [255, 255, 255],
        whitesmoke: [245, 245, 245],
        yellow: [255, 255, 0],
        yellowgreen: [154, 205, 50]
      };
    }, {}],
    7: [function (t, e, a) {
      var i = t(28)();
      t(26)(i), t(22)(i), t(25)(i), t(21)(i), t(23)(i), t(24)(i), t(29)(i), t(33)(i), t(31)(i), t(34)(i), t(32)(i), t(35)(i), t(30)(i), t(27)(i), t(36)(i), t(37)(i), t(38)(i), t(39)(i), t(40)(i), t(43)(i), t(41)(i), t(42)(i), t(44)(i), t(45)(i), t(46)(i), t(15)(i), t(16)(i), t(17)(i), t(18)(i), t(19)(i), t(20)(i), t(8)(i), t(9)(i), t(10)(i), t(11)(i), t(12)(i), t(13)(i), t(14)(i), window.Chart = e.exports = i;
    }, {
      10: 10,
      11: 11,
      12: 12,
      13: 13,
      14: 14,
      15: 15,
      16: 16,
      17: 17,
      18: 18,
      19: 19,
      20: 20,
      21: 21,
      22: 22,
      23: 23,
      24: 24,
      25: 25,
      26: 26,
      27: 27,
      28: 28,
      29: 29,
      30: 30,
      31: 31,
      32: 32,
      33: 33,
      34: 34,
      35: 35,
      36: 36,
      37: 37,
      38: 38,
      39: 39,
      40: 40,
      41: 41,
      42: 42,
      43: 43,
      44: 44,
      45: 45,
      46: 46,
      8: 8,
      9: 9
    }],
    8: [function (t, e, a) {
      "use strict";

      e.exports = function (t) {
        t.Bar = function (e, a) {
          return a.type = "bar", new t(e, a);
        };
      };
    }, {}],
    9: [function (t, e, a) {
      "use strict";

      e.exports = function (t) {
        t.Bubble = function (e, a) {
          return a.type = "bubble", new t(e, a);
        };
      };
    }, {}],
    10: [function (t, e, a) {
      "use strict";

      e.exports = function (t) {
        t.Doughnut = function (e, a) {
          return a.type = "doughnut", new t(e, a);
        };
      };
    }, {}],
    11: [function (t, e, a) {
      "use strict";

      e.exports = function (t) {
        t.Line = function (e, a) {
          return a.type = "line", new t(e, a);
        };
      };
    }, {}],
    12: [function (t, e, a) {
      "use strict";

      e.exports = function (t) {
        t.PolarArea = function (e, a) {
          return a.type = "polarArea", new t(e, a);
        };
      };
    }, {}],
    13: [function (t, e, a) {
      "use strict";

      e.exports = function (t) {
        t.Radar = function (e, a) {
          return a.type = "radar", new t(e, a);
        };
      };
    }, {}],
    14: [function (t, e, a) {
      "use strict";

      e.exports = function (t) {
        var e = {
          hover: {
            mode: "single"
          },
          scales: {
            xAxes: [{
              type: "linear",
              position: "bottom",
              id: "x-axis-1"
            }],
            yAxes: [{
              type: "linear",
              position: "left",
              id: "y-axis-1"
            }]
          },
          tooltips: {
            callbacks: {
              title: function title() {
                return "";
              },
              label: function label(t) {
                return "(" + t.xLabel + ", " + t.yLabel + ")";
              }
            }
          }
        };
        t.defaults.scatter = e, t.controllers.scatter = t.controllers.line, t.Scatter = function (e, a) {
          return a.type = "scatter", new t(e, a);
        };
      };
    }, {}],
    15: [function (t, e, a) {
      "use strict";

      e.exports = function (t) {
        var e = t.helpers;
        t.defaults.bar = {
          hover: {
            mode: "label"
          },
          scales: {
            xAxes: [{
              type: "category",
              categoryPercentage: .8,
              barPercentage: .9,
              gridLines: {
                offsetGridLines: !0
              }
            }],
            yAxes: [{
              type: "linear"
            }]
          }
        }, t.controllers.bar = t.DatasetController.extend({
          dataElementType: t.elements.Rectangle,
          initialize: function initialize(e, a) {
            t.DatasetController.prototype.initialize.call(this, e, a), this.getMeta().bar = !0;
          },
          getBarCount: function getBarCount() {
            var t = this,
                a = 0;
            return e.each(t.chart.data.datasets, function (e, i) {
              var n = t.chart.getDatasetMeta(i);
              n.bar && t.chart.isDatasetVisible(i) && ++a;
            }, t), a;
          },
          update: function update(t) {
            var a = this;
            e.each(a.getMeta().data, function (e, i) {
              a.updateElement(e, i, t);
            }, a);
          },
          updateElement: function updateElement(t, a, i) {
            var n = this,
                o = n.getMeta(),
                r = n.getScaleForId(o.xAxisID),
                l = n.getScaleForId(o.yAxisID),
                s = l.getBasePixel(),
                d = n.chart.options.elements.rectangle,
                u = t.custom || {},
                c = n.getDataset();
            t._xScale = r, t._yScale = l, t._datasetIndex = n.index, t._index = a;
            var h = n.getRuler(a);
            t._model = {
              x: n.calculateBarX(a, n.index, h),
              y: i ? s : n.calculateBarY(a, n.index),
              label: n.chart.data.labels[a],
              datasetLabel: c.label,
              base: i ? s : n.calculateBarBase(n.index, a),
              width: n.calculateBarWidth(h),
              backgroundColor: u.backgroundColor ? u.backgroundColor : e.getValueAtIndexOrDefault(c.backgroundColor, a, d.backgroundColor),
              borderSkipped: u.borderSkipped ? u.borderSkipped : d.borderSkipped,
              borderColor: u.borderColor ? u.borderColor : e.getValueAtIndexOrDefault(c.borderColor, a, d.borderColor),
              borderWidth: u.borderWidth ? u.borderWidth : e.getValueAtIndexOrDefault(c.borderWidth, a, d.borderWidth)
            }, t.pivot();
          },
          calculateBarBase: function calculateBarBase(t, e) {
            var a = this,
                i = a.getMeta(),
                n = a.getScaleForId(i.yAxisID),
                o = 0;

            if (n.options.stacked) {
              for (var r = a.chart, l = r.data.datasets, s = Number(l[t].data[e]), d = 0; t > d; d++) {
                var u = l[d],
                    c = r.getDatasetMeta(d);

                if (c.bar && c.yAxisID === n.id && r.isDatasetVisible(d)) {
                  var h = Number(u.data[e]);
                  o += 0 > s ? Math.min(h, 0) : Math.max(h, 0);
                }
              }

              return n.getPixelForValue(o);
            }

            return n.getBasePixel();
          },
          getRuler: function getRuler(t) {
            var e,
                a = this,
                i = a.getMeta(),
                n = a.getScaleForId(i.xAxisID),
                o = a.getBarCount();
            e = "category" === n.options.type ? n.getPixelForTick(t + 1) - n.getPixelForTick(t) : n.width / n.ticks.length;
            var r = e * n.options.categoryPercentage,
                l = (e - e * n.options.categoryPercentage) / 2,
                s = r / o;

            if (n.ticks.length !== a.chart.data.labels.length) {
              var d = n.ticks.length / a.chart.data.labels.length;
              s *= d;
            }

            var u = s * n.options.barPercentage,
                c = s - s * n.options.barPercentage;
            return {
              datasetCount: o,
              tickWidth: e,
              categoryWidth: r,
              categorySpacing: l,
              fullBarWidth: s,
              barWidth: u,
              barSpacing: c
            };
          },
          calculateBarWidth: function calculateBarWidth(t) {
            var e = this.getScaleForId(this.getMeta().xAxisID);
            return e.options.barThickness ? e.options.barThickness : e.options.stacked ? t.categoryWidth : t.barWidth;
          },
          getBarIndex: function getBarIndex(t) {
            var e,
                a,
                i = 0;

            for (a = 0; t > a; ++a) {
              e = this.chart.getDatasetMeta(a), e.bar && this.chart.isDatasetVisible(a) && ++i;
            }

            return i;
          },
          calculateBarX: function calculateBarX(t, e, a) {
            var i = this,
                n = i.getMeta(),
                o = i.getScaleForId(n.xAxisID),
                r = i.getBarIndex(e),
                l = o.getPixelForValue(null, t, e, i.chart.isCombo);
            return l -= i.chart.isCombo ? a.tickWidth / 2 : 0, o.options.stacked ? l + a.categoryWidth / 2 + a.categorySpacing : l + a.barWidth / 2 + a.categorySpacing + a.barWidth * r + a.barSpacing / 2 + a.barSpacing * r;
          },
          calculateBarY: function calculateBarY(t, e) {
            var a = this,
                i = a.getMeta(),
                n = a.getScaleForId(i.yAxisID),
                o = Number(a.getDataset().data[t]);

            if (n.options.stacked) {
              for (var r = 0, l = 0, s = 0; e > s; s++) {
                var d = a.chart.data.datasets[s],
                    u = a.chart.getDatasetMeta(s);

                if (u.bar && u.yAxisID === n.id && a.chart.isDatasetVisible(s)) {
                  var c = Number(d.data[t]);
                  0 > c ? l += c || 0 : r += c || 0;
                }
              }

              return 0 > o ? n.getPixelForValue(l + o) : n.getPixelForValue(r + o);
            }

            return n.getPixelForValue(o);
          },
          draw: function draw(t) {
            var e,
                a,
                i = this,
                n = t || 1,
                o = i.getMeta().data,
                r = i.getDataset();

            for (e = 0, a = o.length; a > e; ++e) {
              var l = r.data[e];
              null === l || void 0 === l || isNaN(l) || o[e].transition(n).draw();
            }
          },
          setHoverStyle: function setHoverStyle(t) {
            var a = this.chart.data.datasets[t._datasetIndex],
                i = t._index,
                n = t.custom || {},
                o = t._model;
            o.backgroundColor = n.hoverBackgroundColor ? n.hoverBackgroundColor : e.getValueAtIndexOrDefault(a.hoverBackgroundColor, i, e.getHoverColor(o.backgroundColor)), o.borderColor = n.hoverBorderColor ? n.hoverBorderColor : e.getValueAtIndexOrDefault(a.hoverBorderColor, i, e.getHoverColor(o.borderColor)), o.borderWidth = n.hoverBorderWidth ? n.hoverBorderWidth : e.getValueAtIndexOrDefault(a.hoverBorderWidth, i, o.borderWidth);
          },
          removeHoverStyle: function removeHoverStyle(t) {
            var a = this.chart.data.datasets[t._datasetIndex],
                i = t._index,
                n = t.custom || {},
                o = t._model,
                r = this.chart.options.elements.rectangle;
            o.backgroundColor = n.backgroundColor ? n.backgroundColor : e.getValueAtIndexOrDefault(a.backgroundColor, i, r.backgroundColor), o.borderColor = n.borderColor ? n.borderColor : e.getValueAtIndexOrDefault(a.borderColor, i, r.borderColor), o.borderWidth = n.borderWidth ? n.borderWidth : e.getValueAtIndexOrDefault(a.borderWidth, i, r.borderWidth);
          }
        }), t.defaults.horizontalBar = {
          hover: {
            mode: "label"
          },
          scales: {
            xAxes: [{
              type: "linear",
              position: "bottom"
            }],
            yAxes: [{
              position: "left",
              type: "category",
              categoryPercentage: .8,
              barPercentage: .9,
              gridLines: {
                offsetGridLines: !0
              }
            }]
          },
          elements: {
            rectangle: {
              borderSkipped: "left"
            }
          },
          tooltips: {
            callbacks: {
              title: function title(t, e) {
                var a = "";
                return t.length > 0 && (t[0].yLabel ? a = t[0].yLabel : e.labels.length > 0 && t[0].index < e.labels.length && (a = e.labels[t[0].index])), a;
              },
              label: function label(t, e) {
                var a = e.datasets[t.datasetIndex].label || "";
                return a + ": " + t.xLabel;
              }
            }
          }
        }, t.controllers.horizontalBar = t.controllers.bar.extend({
          updateElement: function updateElement(t, a, i) {
            var n = this,
                o = n.getMeta(),
                r = n.getScaleForId(o.xAxisID),
                l = n.getScaleForId(o.yAxisID),
                s = r.getBasePixel(),
                d = t.custom || {},
                u = n.getDataset(),
                c = n.chart.options.elements.rectangle;
            t._xScale = r, t._yScale = l, t._datasetIndex = n.index, t._index = a;
            var h = n.getRuler(a);
            t._model = {
              x: i ? s : n.calculateBarX(a, n.index),
              y: n.calculateBarY(a, n.index, h),
              label: n.chart.data.labels[a],
              datasetLabel: u.label,
              base: i ? s : n.calculateBarBase(n.index, a),
              height: n.calculateBarHeight(h),
              backgroundColor: d.backgroundColor ? d.backgroundColor : e.getValueAtIndexOrDefault(u.backgroundColor, a, c.backgroundColor),
              borderSkipped: d.borderSkipped ? d.borderSkipped : c.borderSkipped,
              borderColor: d.borderColor ? d.borderColor : e.getValueAtIndexOrDefault(u.borderColor, a, c.borderColor),
              borderWidth: d.borderWidth ? d.borderWidth : e.getValueAtIndexOrDefault(u.borderWidth, a, c.borderWidth)
            }, t.draw = function () {
              function t(t) {
                return s[(u + t) % 4];
              }

              var e = this._chart.ctx,
                  a = this._view,
                  i = a.height / 2,
                  n = a.y - i,
                  o = a.y + i,
                  r = a.base - (a.base - a.x),
                  l = a.borderWidth / 2;
              a.borderWidth && (n += l, o -= l, r += l), e.beginPath(), e.fillStyle = a.backgroundColor, e.strokeStyle = a.borderColor, e.lineWidth = a.borderWidth;
              var s = [[a.base, o], [a.base, n], [r, n], [r, o]],
                  d = ["bottom", "left", "top", "right"],
                  u = d.indexOf(a.borderSkipped, 0);
              -1 === u && (u = 0), e.moveTo.apply(e, t(0));

              for (var c = 1; 4 > c; c++) {
                e.lineTo.apply(e, t(c));
              }

              e.fill(), a.borderWidth && e.stroke();
            }, t.pivot();
          },
          calculateBarBase: function calculateBarBase(t, e) {
            var a = this,
                i = a.getMeta(),
                n = a.getScaleForId(i.xAxisID),
                o = 0;

            if (n.options.stacked) {
              for (var r = a.chart, l = r.data.datasets, s = Number(l[t].data[e]), d = 0; t > d; d++) {
                var u = l[d],
                    c = r.getDatasetMeta(d);

                if (c.bar && c.xAxisID === n.id && r.isDatasetVisible(d)) {
                  var h = Number(u.data[e]);
                  o += 0 > s ? Math.min(h, 0) : Math.max(h, 0);
                }
              }

              return n.getPixelForValue(o);
            }

            return n.getBasePixel();
          },
          getRuler: function getRuler(t) {
            var e,
                a = this,
                i = a.getMeta(),
                n = a.getScaleForId(i.yAxisID),
                o = a.getBarCount();
            e = "category" === n.options.type ? n.getPixelForTick(t + 1) - n.getPixelForTick(t) : n.width / n.ticks.length;
            var r = e * n.options.categoryPercentage,
                l = (e - e * n.options.categoryPercentage) / 2,
                s = r / o;

            if (n.ticks.length !== a.chart.data.labels.length) {
              var d = n.ticks.length / a.chart.data.labels.length;
              s *= d;
            }

            var u = s * n.options.barPercentage,
                c = s - s * n.options.barPercentage;
            return {
              datasetCount: o,
              tickHeight: e,
              categoryHeight: r,
              categorySpacing: l,
              fullBarHeight: s,
              barHeight: u,
              barSpacing: c
            };
          },
          calculateBarHeight: function calculateBarHeight(t) {
            var e = this,
                a = e.getScaleForId(e.getMeta().yAxisID);
            return a.options.barThickness ? a.options.barThickness : a.options.stacked ? t.categoryHeight : t.barHeight;
          },
          calculateBarX: function calculateBarX(t, e) {
            var a = this,
                i = a.getMeta(),
                n = a.getScaleForId(i.xAxisID),
                o = Number(a.getDataset().data[t]);

            if (n.options.stacked) {
              for (var r = 0, l = 0, s = 0; e > s; s++) {
                var d = a.chart.data.datasets[s],
                    u = a.chart.getDatasetMeta(s);

                if (u.bar && u.xAxisID === n.id && a.chart.isDatasetVisible(s)) {
                  var c = Number(d.data[t]);
                  0 > c ? l += c || 0 : r += c || 0;
                }
              }

              return 0 > o ? n.getPixelForValue(l + o) : n.getPixelForValue(r + o);
            }

            return n.getPixelForValue(o);
          },
          calculateBarY: function calculateBarY(t, e, a) {
            var i = this,
                n = i.getMeta(),
                o = i.getScaleForId(n.yAxisID),
                r = i.getBarIndex(e),
                l = o.getPixelForValue(null, t, e, i.chart.isCombo);
            return l -= i.chart.isCombo ? a.tickHeight / 2 : 0, o.options.stacked ? l + a.categoryHeight / 2 + a.categorySpacing : l + a.barHeight / 2 + a.categorySpacing + a.barHeight * r + a.barSpacing / 2 + a.barSpacing * r;
          }
        });
      };
    }, {}],
    16: [function (t, e, a) {
      "use strict";

      e.exports = function (t) {
        var e = t.helpers;
        t.defaults.bubble = {
          hover: {
            mode: "single"
          },
          scales: {
            xAxes: [{
              type: "linear",
              position: "bottom",
              id: "x-axis-0"
            }],
            yAxes: [{
              type: "linear",
              position: "left",
              id: "y-axis-0"
            }]
          },
          tooltips: {
            callbacks: {
              title: function title() {
                return "";
              },
              label: function label(t, e) {
                var a = e.datasets[t.datasetIndex].label || "",
                    i = e.datasets[t.datasetIndex].data[t.index];
                return a + ": (" + t.xLabel + ", " + t.yLabel + ", " + i.r + ")";
              }
            }
          }
        }, t.controllers.bubble = t.DatasetController.extend({
          dataElementType: t.elements.Point,
          update: function update(t) {
            var a = this,
                i = a.getMeta(),
                n = i.data;
            e.each(n, function (e, i) {
              a.updateElement(e, i, t);
            });
          },
          updateElement: function updateElement(a, i, n) {
            var o = this,
                r = o.getMeta(),
                l = o.getScaleForId(r.xAxisID),
                s = o.getScaleForId(r.yAxisID),
                d = a.custom || {},
                u = o.getDataset(),
                c = u.data[i],
                h = o.chart.options.elements.point,
                f = o.index;
            e.extend(a, {
              _xScale: l,
              _yScale: s,
              _datasetIndex: f,
              _index: i,
              _model: {
                x: n ? l.getPixelForDecimal(.5) : l.getPixelForValue("object" == _typeof(c) ? c : NaN, i, f, o.chart.isCombo),
                y: n ? s.getBasePixel() : s.getPixelForValue(c, i, f),
                radius: n ? 0 : d.radius ? d.radius : o.getRadius(c),
                hitRadius: d.hitRadius ? d.hitRadius : e.getValueAtIndexOrDefault(u.hitRadius, i, h.hitRadius)
              }
            }), t.DatasetController.prototype.removeHoverStyle.call(o, a, h);
            var g = a._model;
            g.skip = d.skip ? d.skip : isNaN(g.x) || isNaN(g.y), a.pivot();
          },
          getRadius: function getRadius(t) {
            return t.r || this.chart.options.elements.point.radius;
          },
          setHoverStyle: function setHoverStyle(a) {
            var i = this;
            t.DatasetController.prototype.setHoverStyle.call(i, a);
            var n = i.chart.data.datasets[a._datasetIndex],
                o = a._index,
                r = a.custom || {},
                l = a._model;
            l.radius = r.hoverRadius ? r.hoverRadius : e.getValueAtIndexOrDefault(n.hoverRadius, o, i.chart.options.elements.point.hoverRadius) + i.getRadius(n.data[o]);
          },
          removeHoverStyle: function removeHoverStyle(e) {
            var a = this;
            t.DatasetController.prototype.removeHoverStyle.call(a, e, a.chart.options.elements.point);
            var i = a.chart.data.datasets[e._datasetIndex].data[e._index],
                n = e.custom || {},
                o = e._model;
            o.radius = n.radius ? n.radius : a.getRadius(i);
          }
        });
      };
    }, {}],
    17: [function (t, e, a) {
      "use strict";

      e.exports = function (t) {
        var e = t.helpers,
            a = t.defaults;
        a.doughnut = {
          animation: {
            animateRotate: !0,
            animateScale: !1
          },
          aspectRatio: 1,
          hover: {
            mode: "single"
          },
          legendCallback: function legendCallback(t) {
            var e = [];
            e.push('<ul class="' + t.id + '-legend">');
            var a = t.data,
                i = a.datasets,
                n = a.labels;
            if (i.length) for (var o = 0; o < i[0].data.length; ++o) {
              e.push('<li><span style="background-color:' + i[0].backgroundColor[o] + '"></span>'), n[o] && e.push(n[o]), e.push("</li>");
            }
            return e.push("</ul>"), e.join("");
          },
          legend: {
            labels: {
              generateLabels: function generateLabels(t) {
                var a = t.data;
                return a.labels.length && a.datasets.length ? a.labels.map(function (i, n) {
                  var o = t.getDatasetMeta(0),
                      r = a.datasets[0],
                      l = o.data[n],
                      s = l && l.custom || {},
                      d = e.getValueAtIndexOrDefault,
                      u = t.options.elements.arc,
                      c = s.backgroundColor ? s.backgroundColor : d(r.backgroundColor, n, u.backgroundColor),
                      h = s.borderColor ? s.borderColor : d(r.borderColor, n, u.borderColor),
                      f = s.borderWidth ? s.borderWidth : d(r.borderWidth, n, u.borderWidth);
                  return {
                    text: i,
                    fillStyle: c,
                    strokeStyle: h,
                    lineWidth: f,
                    hidden: isNaN(r.data[n]) || o.data[n].hidden,
                    index: n
                  };
                }) : [];
              }
            },
            onClick: function onClick(t, e) {
              var a,
                  i,
                  n,
                  o = e.index,
                  r = this.chart;

              for (a = 0, i = (r.data.datasets || []).length; i > a; ++a) {
                n = r.getDatasetMeta(a), n.data[o] && (n.data[o].hidden = !n.data[o].hidden);
              }

              r.update();
            }
          },
          cutoutPercentage: 50,
          rotation: Math.PI * -.5,
          circumference: 2 * Math.PI,
          tooltips: {
            callbacks: {
              title: function title() {
                return "";
              },
              label: function label(t, a) {
                var i = a.labels[t.index],
                    n = ": " + a.datasets[t.datasetIndex].data[t.index];
                return e.isArray(i) ? (i = i.slice(), i[0] += n) : i += n, i;
              }
            }
          }
        }, a.pie = e.clone(a.doughnut), e.extend(a.pie, {
          cutoutPercentage: 0
        }), t.controllers.doughnut = t.controllers.pie = t.DatasetController.extend({
          dataElementType: t.elements.Arc,
          linkScales: e.noop,
          getRingIndex: function getRingIndex(t) {
            for (var e = 0, a = 0; t > a; ++a) {
              this.chart.isDatasetVisible(a) && ++e;
            }

            return e;
          },
          update: function update(t) {
            var a = this,
                i = a.chart,
                n = i.chartArea,
                o = i.options,
                r = o.elements.arc,
                l = n.right - n.left - r.borderWidth,
                s = n.bottom - n.top - r.borderWidth,
                d = Math.min(l, s),
                u = {
              x: 0,
              y: 0
            },
                c = a.getMeta(),
                h = o.cutoutPercentage,
                f = o.circumference;

            if (f < 2 * Math.PI) {
              var g = o.rotation % (2 * Math.PI);
              g += 2 * Math.PI * (g >= Math.PI ? -1 : g < -Math.PI ? 1 : 0);
              var p = g + f,
                  m = {
                x: Math.cos(g),
                y: Math.sin(g)
              },
                  b = {
                x: Math.cos(p),
                y: Math.sin(p)
              },
                  v = 0 >= g && p >= 0 || g <= 2 * Math.PI && 2 * Math.PI <= p,
                  x = g <= .5 * Math.PI && .5 * Math.PI <= p || g <= 2.5 * Math.PI && 2.5 * Math.PI <= p,
                  y = g <= -Math.PI && -Math.PI <= p || g <= Math.PI && Math.PI <= p,
                  k = g <= .5 * -Math.PI && .5 * -Math.PI <= p || g <= 1.5 * Math.PI && 1.5 * Math.PI <= p,
                  S = h / 100,
                  w = {
                x: y ? -1 : Math.min(m.x * (m.x < 0 ? 1 : S), b.x * (b.x < 0 ? 1 : S)),
                y: k ? -1 : Math.min(m.y * (m.y < 0 ? 1 : S), b.y * (b.y < 0 ? 1 : S))
              },
                  M = {
                x: v ? 1 : Math.max(m.x * (m.x > 0 ? 1 : S), b.x * (b.x > 0 ? 1 : S)),
                y: x ? 1 : Math.max(m.y * (m.y > 0 ? 1 : S), b.y * (b.y > 0 ? 1 : S))
              },
                  C = {
                width: .5 * (M.x - w.x),
                height: .5 * (M.y - w.y)
              };
              d = Math.min(l / C.width, s / C.height), u = {
                x: (M.x + w.x) * -.5,
                y: (M.y + w.y) * -.5
              };
            }

            i.borderWidth = a.getMaxBorderWidth(c.data), i.outerRadius = Math.max((d - i.borderWidth) / 2, 0), i.innerRadius = Math.max(h ? i.outerRadius / 100 * h : 1, 0), i.radiusLength = (i.outerRadius - i.innerRadius) / i.getVisibleDatasetCount(), i.offsetX = u.x * i.outerRadius, i.offsetY = u.y * i.outerRadius, c.total = a.calculateTotal(), a.outerRadius = i.outerRadius - i.radiusLength * a.getRingIndex(a.index), a.innerRadius = a.outerRadius - i.radiusLength, e.each(c.data, function (e, i) {
              a.updateElement(e, i, t);
            });
          },
          updateElement: function updateElement(t, a, i) {
            var n = this,
                o = n.chart,
                r = o.chartArea,
                l = o.options,
                s = l.animation,
                d = (r.left + r.right) / 2,
                u = (r.top + r.bottom) / 2,
                c = l.rotation,
                h = l.rotation,
                f = n.getDataset(),
                g = i && s.animateRotate ? 0 : t.hidden ? 0 : n.calculateCircumference(f.data[a]) * (l.circumference / (2 * Math.PI)),
                p = i && s.animateScale ? 0 : n.innerRadius,
                m = i && s.animateScale ? 0 : n.outerRadius,
                b = e.getValueAtIndexOrDefault;
            e.extend(t, {
              _datasetIndex: n.index,
              _index: a,
              _model: {
                x: d + o.offsetX,
                y: u + o.offsetY,
                startAngle: c,
                endAngle: h,
                circumference: g,
                outerRadius: m,
                innerRadius: p,
                label: b(f.label, a, o.data.labels[a])
              }
            });
            var v = t._model;
            this.removeHoverStyle(t), i && s.animateRotate || (0 === a ? v.startAngle = l.rotation : v.startAngle = n.getMeta().data[a - 1]._model.endAngle, v.endAngle = v.startAngle + v.circumference), t.pivot();
          },
          removeHoverStyle: function removeHoverStyle(e) {
            t.DatasetController.prototype.removeHoverStyle.call(this, e, this.chart.options.elements.arc);
          },
          calculateTotal: function calculateTotal() {
            var t,
                a = this.getDataset(),
                i = this.getMeta(),
                n = 0;
            return e.each(i.data, function (e, i) {
              t = a.data[i], isNaN(t) || e.hidden || (n += Math.abs(t));
            }), n;
          },
          calculateCircumference: function calculateCircumference(t) {
            var e = this.getMeta().total;
            return e > 0 && !isNaN(t) ? 2 * Math.PI * (t / e) : 0;
          },
          getMaxBorderWidth: function getMaxBorderWidth(t) {
            for (var e, a, i = 0, n = this.index, o = t.length, r = 0; o > r; r++) {
              e = t[r]._model ? t[r]._model.borderWidth : 0, a = t[r]._chart ? t[r]._chart.config.data.datasets[n].hoverBorderWidth : 0, i = e > i ? e : i, i = a > i ? a : i;
            }

            return i;
          }
        });
      };
    }, {}],
    18: [function (t, e, a) {
      "use strict";

      e.exports = function (t) {
        function e(t, e) {
          return a.getValueOrDefault(t.showLine, e.showLines);
        }

        var a = t.helpers;
        t.defaults.line = {
          showLines: !0,
          spanGaps: !1,
          hover: {
            mode: "label"
          },
          scales: {
            xAxes: [{
              type: "category",
              id: "x-axis-0"
            }],
            yAxes: [{
              type: "linear",
              id: "y-axis-0"
            }]
          }
        }, t.controllers.line = t.DatasetController.extend({
          datasetElementType: t.elements.Line,
          dataElementType: t.elements.Point,
          update: function update(t) {
            var i,
                n,
                o,
                r = this,
                l = r.getMeta(),
                s = l.dataset,
                d = l.data || [],
                u = r.chart.options,
                c = u.elements.line,
                h = r.getScaleForId(l.yAxisID),
                f = r.getDataset(),
                g = e(f, u);

            for (g && (o = s.custom || {}, void 0 !== f.tension && void 0 === f.lineTension && (f.lineTension = f.tension), s._scale = h, s._datasetIndex = r.index, s._children = d, s._model = {
              spanGaps: f.spanGaps ? f.spanGaps : u.spanGaps,
              tension: o.tension ? o.tension : a.getValueOrDefault(f.lineTension, c.tension),
              backgroundColor: o.backgroundColor ? o.backgroundColor : f.backgroundColor || c.backgroundColor,
              borderWidth: o.borderWidth ? o.borderWidth : f.borderWidth || c.borderWidth,
              borderColor: o.borderColor ? o.borderColor : f.borderColor || c.borderColor,
              borderCapStyle: o.borderCapStyle ? o.borderCapStyle : f.borderCapStyle || c.borderCapStyle,
              borderDash: o.borderDash ? o.borderDash : f.borderDash || c.borderDash,
              borderDashOffset: o.borderDashOffset ? o.borderDashOffset : f.borderDashOffset || c.borderDashOffset,
              borderJoinStyle: o.borderJoinStyle ? o.borderJoinStyle : f.borderJoinStyle || c.borderJoinStyle,
              fill: o.fill ? o.fill : void 0 !== f.fill ? f.fill : c.fill,
              steppedLine: o.steppedLine ? o.steppedLine : a.getValueOrDefault(f.steppedLine, c.stepped),
              cubicInterpolationMode: o.cubicInterpolationMode ? o.cubicInterpolationMode : a.getValueOrDefault(f.cubicInterpolationMode, c.cubicInterpolationMode),
              scaleTop: h.top,
              scaleBottom: h.bottom,
              scaleZero: h.getBasePixel()
            }, s.pivot()), i = 0, n = d.length; n > i; ++i) {
              r.updateElement(d[i], i, t);
            }

            for (g && 0 !== s._model.tension && r.updateBezierControlPoints(), i = 0, n = d.length; n > i; ++i) {
              d[i].pivot();
            }
          },
          getPointBackgroundColor: function getPointBackgroundColor(t, e) {
            var i = this.chart.options.elements.point.backgroundColor,
                n = this.getDataset(),
                o = t.custom || {};
            return o.backgroundColor ? i = o.backgroundColor : n.pointBackgroundColor ? i = a.getValueAtIndexOrDefault(n.pointBackgroundColor, e, i) : n.backgroundColor && (i = n.backgroundColor), i;
          },
          getPointBorderColor: function getPointBorderColor(t, e) {
            var i = this.chart.options.elements.point.borderColor,
                n = this.getDataset(),
                o = t.custom || {};
            return o.borderColor ? i = o.borderColor : n.pointBorderColor ? i = a.getValueAtIndexOrDefault(n.pointBorderColor, e, i) : n.borderColor && (i = n.borderColor), i;
          },
          getPointBorderWidth: function getPointBorderWidth(t, e) {
            var i = this.chart.options.elements.point.borderWidth,
                n = this.getDataset(),
                o = t.custom || {};
            return o.borderWidth ? i = o.borderWidth : n.pointBorderWidth ? i = a.getValueAtIndexOrDefault(n.pointBorderWidth, e, i) : n.borderWidth && (i = n.borderWidth), i;
          },
          updateElement: function updateElement(t, e, i) {
            var n,
                o,
                r = this,
                l = r.getMeta(),
                s = t.custom || {},
                d = r.getDataset(),
                u = r.index,
                c = d.data[e],
                h = r.getScaleForId(l.yAxisID),
                f = r.getScaleForId(l.xAxisID),
                g = r.chart.options.elements.point,
                p = r.chart.data.labels || [],
                m = 1 === p.length || 1 === d.data.length || r.chart.isCombo;
            void 0 !== d.radius && void 0 === d.pointRadius && (d.pointRadius = d.radius), void 0 !== d.hitRadius && void 0 === d.pointHitRadius && (d.pointHitRadius = d.hitRadius), n = f.getPixelForValue("object" == _typeof(c) ? c : NaN, e, u, m), o = i ? h.getBasePixel() : r.calculatePointY(c, e, u), t._xScale = f, t._yScale = h, t._datasetIndex = u, t._index = e, t._model = {
              x: n,
              y: o,
              skip: s.skip || isNaN(n) || isNaN(o),
              radius: s.radius || a.getValueAtIndexOrDefault(d.pointRadius, e, g.radius),
              pointStyle: s.pointStyle || a.getValueAtIndexOrDefault(d.pointStyle, e, g.pointStyle),
              backgroundColor: r.getPointBackgroundColor(t, e),
              borderColor: r.getPointBorderColor(t, e),
              borderWidth: r.getPointBorderWidth(t, e),
              tension: l.dataset._model ? l.dataset._model.tension : 0,
              steppedLine: l.dataset._model ? l.dataset._model.steppedLine : !1,
              hitRadius: s.hitRadius || a.getValueAtIndexOrDefault(d.pointHitRadius, e, g.hitRadius)
            };
          },
          calculatePointY: function calculatePointY(t, e, a) {
            var i,
                n,
                o,
                r = this,
                l = r.chart,
                s = r.getMeta(),
                d = r.getScaleForId(s.yAxisID),
                u = 0,
                c = 0;

            if (d.options.stacked) {
              for (i = 0; a > i; i++) {
                if (n = l.data.datasets[i], o = l.getDatasetMeta(i), "line" === o.type && o.yAxisID === d.id && l.isDatasetVisible(i)) {
                  var h = Number(d.getRightValue(n.data[e]));
                  0 > h ? c += h || 0 : u += h || 0;
                }
              }

              var f = Number(d.getRightValue(t));
              return 0 > f ? d.getPixelForValue(c + f) : d.getPixelForValue(u + f);
            }

            return d.getPixelForValue(t);
          },
          updateBezierControlPoints: function updateBezierControlPoints() {
            function t(t, e, a) {
              return Math.max(Math.min(t, a), e);
            }

            var e,
                i,
                n,
                o,
                r,
                l = this,
                s = l.getMeta(),
                d = l.chart.chartArea,
                u = s.data || [];
            if (s.dataset._model.spanGaps && (u = u.filter(function (t) {
              return !t._model.skip;
            })), "monotone" === s.dataset._model.cubicInterpolationMode) a.splineCurveMonotone(u);else for (e = 0, i = u.length; i > e; ++e) {
              n = u[e], o = n._model, r = a.splineCurve(a.previousItem(u, e)._model, o, a.nextItem(u, e)._model, s.dataset._model.tension), o.controlPointPreviousX = r.previous.x, o.controlPointPreviousY = r.previous.y, o.controlPointNextX = r.next.x, o.controlPointNextY = r.next.y;
            }
            if (l.chart.options.elements.line.capBezierPoints) for (e = 0, i = u.length; i > e; ++e) {
              o = u[e]._model, o.controlPointPreviousX = t(o.controlPointPreviousX, d.left, d.right), o.controlPointPreviousY = t(o.controlPointPreviousY, d.top, d.bottom), o.controlPointNextX = t(o.controlPointNextX, d.left, d.right), o.controlPointNextY = t(o.controlPointNextY, d.top, d.bottom);
            }
          },
          draw: function draw(t) {
            var a,
                i,
                n = this,
                o = n.getMeta(),
                r = o.data || [],
                l = t || 1;

            for (a = 0, i = r.length; i > a; ++a) {
              r[a].transition(l);
            }

            for (e(n.getDataset(), n.chart.options) && o.dataset.transition(l).draw(), a = 0, i = r.length; i > a; ++a) {
              r[a].draw();
            }
          },
          setHoverStyle: function setHoverStyle(t) {
            var e = this.chart.data.datasets[t._datasetIndex],
                i = t._index,
                n = t.custom || {},
                o = t._model;
            o.radius = n.hoverRadius || a.getValueAtIndexOrDefault(e.pointHoverRadius, i, this.chart.options.elements.point.hoverRadius), o.backgroundColor = n.hoverBackgroundColor || a.getValueAtIndexOrDefault(e.pointHoverBackgroundColor, i, a.getHoverColor(o.backgroundColor)), o.borderColor = n.hoverBorderColor || a.getValueAtIndexOrDefault(e.pointHoverBorderColor, i, a.getHoverColor(o.borderColor)), o.borderWidth = n.hoverBorderWidth || a.getValueAtIndexOrDefault(e.pointHoverBorderWidth, i, o.borderWidth);
          },
          removeHoverStyle: function removeHoverStyle(t) {
            var e = this,
                i = e.chart.data.datasets[t._datasetIndex],
                n = t._index,
                o = t.custom || {},
                r = t._model;
            void 0 !== i.radius && void 0 === i.pointRadius && (i.pointRadius = i.radius), r.radius = o.radius || a.getValueAtIndexOrDefault(i.pointRadius, n, e.chart.options.elements.point.radius), r.backgroundColor = e.getPointBackgroundColor(t, n), r.borderColor = e.getPointBorderColor(t, n), r.borderWidth = e.getPointBorderWidth(t, n);
          }
        });
      };
    }, {}],
    19: [function (t, e, a) {
      "use strict";

      e.exports = function (t) {
        var e = t.helpers;
        t.defaults.polarArea = {
          scale: {
            type: "radialLinear",
            lineArc: !0,
            ticks: {
              beginAtZero: !0
            }
          },
          animation: {
            animateRotate: !0,
            animateScale: !0
          },
          startAngle: -.5 * Math.PI,
          aspectRatio: 1,
          legendCallback: function legendCallback(t) {
            var e = [];
            e.push('<ul class="' + t.id + '-legend">');
            var a = t.data,
                i = a.datasets,
                n = a.labels;
            if (i.length) for (var o = 0; o < i[0].data.length; ++o) {
              e.push('<li><span style="background-color:' + i[0].backgroundColor[o] + '"></span>'), n[o] && e.push(n[o]), e.push("</li>");
            }
            return e.push("</ul>"), e.join("");
          },
          legend: {
            labels: {
              generateLabels: function generateLabels(t) {
                var a = t.data;
                return a.labels.length && a.datasets.length ? a.labels.map(function (i, n) {
                  var o = t.getDatasetMeta(0),
                      r = a.datasets[0],
                      l = o.data[n],
                      s = l.custom || {},
                      d = e.getValueAtIndexOrDefault,
                      u = t.options.elements.arc,
                      c = s.backgroundColor ? s.backgroundColor : d(r.backgroundColor, n, u.backgroundColor),
                      h = s.borderColor ? s.borderColor : d(r.borderColor, n, u.borderColor),
                      f = s.borderWidth ? s.borderWidth : d(r.borderWidth, n, u.borderWidth);
                  return {
                    text: i,
                    fillStyle: c,
                    strokeStyle: h,
                    lineWidth: f,
                    hidden: isNaN(r.data[n]) || o.data[n].hidden,
                    index: n
                  };
                }) : [];
              }
            },
            onClick: function onClick(t, e) {
              var a,
                  i,
                  n,
                  o = e.index,
                  r = this.chart;

              for (a = 0, i = (r.data.datasets || []).length; i > a; ++a) {
                n = r.getDatasetMeta(a), n.data[o].hidden = !n.data[o].hidden;
              }

              r.update();
            }
          },
          tooltips: {
            callbacks: {
              title: function title() {
                return "";
              },
              label: function label(t, e) {
                return e.labels[t.index] + ": " + t.yLabel;
              }
            }
          }
        }, t.controllers.polarArea = t.DatasetController.extend({
          dataElementType: t.elements.Arc,
          linkScales: e.noop,
          update: function update(t) {
            var a = this,
                i = a.chart,
                n = i.chartArea,
                o = a.getMeta(),
                r = i.options,
                l = r.elements.arc,
                s = Math.min(n.right - n.left, n.bottom - n.top);
            i.outerRadius = Math.max((s - l.borderWidth / 2) / 2, 0), i.innerRadius = Math.max(r.cutoutPercentage ? i.outerRadius / 100 * r.cutoutPercentage : 1, 0), i.radiusLength = (i.outerRadius - i.innerRadius) / i.getVisibleDatasetCount(), a.outerRadius = i.outerRadius - i.radiusLength * a.index, a.innerRadius = a.outerRadius - i.radiusLength, o.count = a.countVisibleElements(), e.each(o.data, function (e, i) {
              a.updateElement(e, i, t);
            });
          },
          updateElement: function updateElement(t, a, i) {
            for (var n = this, o = n.chart, r = n.getDataset(), l = o.options, s = l.animation, d = o.scale, u = e.getValueAtIndexOrDefault, c = o.data.labels, h = n.calculateCircumference(r.data[a]), f = d.xCenter, g = d.yCenter, p = 0, m = n.getMeta(), b = 0; a > b; ++b) {
              isNaN(r.data[b]) || m.data[b].hidden || ++p;
            }

            var v = l.startAngle,
                x = t.hidden ? 0 : d.getDistanceFromCenterForValue(r.data[a]),
                y = v + h * p,
                k = y + (t.hidden ? 0 : h),
                S = s.animateScale ? 0 : d.getDistanceFromCenterForValue(r.data[a]);
            e.extend(t, {
              _datasetIndex: n.index,
              _index: a,
              _scale: d,
              _model: {
                x: f,
                y: g,
                innerRadius: 0,
                outerRadius: i ? S : x,
                startAngle: i && s.animateRotate ? v : y,
                endAngle: i && s.animateRotate ? v : k,
                label: u(c, a, c[a])
              }
            }), n.removeHoverStyle(t), t.pivot();
          },
          removeHoverStyle: function removeHoverStyle(e) {
            t.DatasetController.prototype.removeHoverStyle.call(this, e, this.chart.options.elements.arc);
          },
          countVisibleElements: function countVisibleElements() {
            var t = this.getDataset(),
                a = this.getMeta(),
                i = 0;
            return e.each(a.data, function (e, a) {
              isNaN(t.data[a]) || e.hidden || i++;
            }), i;
          },
          calculateCircumference: function calculateCircumference(t) {
            var e = this.getMeta().count;
            return e > 0 && !isNaN(t) ? 2 * Math.PI / e : 0;
          }
        });
      };
    }, {}],
    20: [function (t, e, a) {
      "use strict";

      e.exports = function (t) {
        var e = t.helpers;
        t.defaults.radar = {
          aspectRatio: 1,
          scale: {
            type: "radialLinear"
          },
          elements: {
            line: {
              tension: 0
            }
          }
        }, t.controllers.radar = t.DatasetController.extend({
          datasetElementType: t.elements.Line,
          dataElementType: t.elements.Point,
          linkScales: e.noop,
          update: function update(t) {
            var a = this,
                i = a.getMeta(),
                n = i.dataset,
                o = i.data,
                r = n.custom || {},
                l = a.getDataset(),
                s = a.chart.options.elements.line,
                d = a.chart.scale;
            void 0 !== l.tension && void 0 === l.lineTension && (l.lineTension = l.tension), e.extend(i.dataset, {
              _datasetIndex: a.index,
              _children: o,
              _loop: !0,
              _model: {
                tension: r.tension ? r.tension : e.getValueOrDefault(l.lineTension, s.tension),
                backgroundColor: r.backgroundColor ? r.backgroundColor : l.backgroundColor || s.backgroundColor,
                borderWidth: r.borderWidth ? r.borderWidth : l.borderWidth || s.borderWidth,
                borderColor: r.borderColor ? r.borderColor : l.borderColor || s.borderColor,
                fill: r.fill ? r.fill : void 0 !== l.fill ? l.fill : s.fill,
                borderCapStyle: r.borderCapStyle ? r.borderCapStyle : l.borderCapStyle || s.borderCapStyle,
                borderDash: r.borderDash ? r.borderDash : l.borderDash || s.borderDash,
                borderDashOffset: r.borderDashOffset ? r.borderDashOffset : l.borderDashOffset || s.borderDashOffset,
                borderJoinStyle: r.borderJoinStyle ? r.borderJoinStyle : l.borderJoinStyle || s.borderJoinStyle,
                scaleTop: d.top,
                scaleBottom: d.bottom,
                scaleZero: d.getBasePosition()
              }
            }), i.dataset.pivot(), e.each(o, function (e, i) {
              a.updateElement(e, i, t);
            }, a), a.updateBezierControlPoints();
          },
          updateElement: function updateElement(t, a, i) {
            var n = this,
                o = t.custom || {},
                r = n.getDataset(),
                l = n.chart.scale,
                s = n.chart.options.elements.point,
                d = l.getPointPositionForValue(a, r.data[a]);
            e.extend(t, {
              _datasetIndex: n.index,
              _index: a,
              _scale: l,
              _model: {
                x: i ? l.xCenter : d.x,
                y: i ? l.yCenter : d.y,
                tension: o.tension ? o.tension : e.getValueOrDefault(r.tension, n.chart.options.elements.line.tension),
                radius: o.radius ? o.radius : e.getValueAtIndexOrDefault(r.pointRadius, a, s.radius),
                backgroundColor: o.backgroundColor ? o.backgroundColor : e.getValueAtIndexOrDefault(r.pointBackgroundColor, a, s.backgroundColor),
                borderColor: o.borderColor ? o.borderColor : e.getValueAtIndexOrDefault(r.pointBorderColor, a, s.borderColor),
                borderWidth: o.borderWidth ? o.borderWidth : e.getValueAtIndexOrDefault(r.pointBorderWidth, a, s.borderWidth),
                pointStyle: o.pointStyle ? o.pointStyle : e.getValueAtIndexOrDefault(r.pointStyle, a, s.pointStyle),
                hitRadius: o.hitRadius ? o.hitRadius : e.getValueAtIndexOrDefault(r.hitRadius, a, s.hitRadius)
              }
            }), t._model.skip = o.skip ? o.skip : isNaN(t._model.x) || isNaN(t._model.y);
          },
          updateBezierControlPoints: function updateBezierControlPoints() {
            var t = this.chart.chartArea,
                a = this.getMeta();
            e.each(a.data, function (i, n) {
              var o = i._model,
                  r = e.splineCurve(e.previousItem(a.data, n, !0)._model, o, e.nextItem(a.data, n, !0)._model, o.tension);
              o.controlPointPreviousX = Math.max(Math.min(r.previous.x, t.right), t.left), o.controlPointPreviousY = Math.max(Math.min(r.previous.y, t.bottom), t.top), o.controlPointNextX = Math.max(Math.min(r.next.x, t.right), t.left), o.controlPointNextY = Math.max(Math.min(r.next.y, t.bottom), t.top), i.pivot();
            });
          },
          draw: function draw(t) {
            var a = this.getMeta(),
                i = t || 1;
            e.each(a.data, function (t) {
              t.transition(i);
            }), a.dataset.transition(i).draw(), e.each(a.data, function (t) {
              t.draw();
            });
          },
          setHoverStyle: function setHoverStyle(t) {
            var a = this.chart.data.datasets[t._datasetIndex],
                i = t.custom || {},
                n = t._index,
                o = t._model;
            o.radius = i.hoverRadius ? i.hoverRadius : e.getValueAtIndexOrDefault(a.pointHoverRadius, n, this.chart.options.elements.point.hoverRadius), o.backgroundColor = i.hoverBackgroundColor ? i.hoverBackgroundColor : e.getValueAtIndexOrDefault(a.pointHoverBackgroundColor, n, e.getHoverColor(o.backgroundColor)), o.borderColor = i.hoverBorderColor ? i.hoverBorderColor : e.getValueAtIndexOrDefault(a.pointHoverBorderColor, n, e.getHoverColor(o.borderColor)), o.borderWidth = i.hoverBorderWidth ? i.hoverBorderWidth : e.getValueAtIndexOrDefault(a.pointHoverBorderWidth, n, o.borderWidth);
          },
          removeHoverStyle: function removeHoverStyle(t) {
            var a = this.chart.data.datasets[t._datasetIndex],
                i = t.custom || {},
                n = t._index,
                o = t._model,
                r = this.chart.options.elements.point;
            o.radius = i.radius ? i.radius : e.getValueAtIndexOrDefault(a.radius, n, r.radius), o.backgroundColor = i.backgroundColor ? i.backgroundColor : e.getValueAtIndexOrDefault(a.pointBackgroundColor, n, r.backgroundColor), o.borderColor = i.borderColor ? i.borderColor : e.getValueAtIndexOrDefault(a.pointBorderColor, n, r.borderColor), o.borderWidth = i.borderWidth ? i.borderWidth : e.getValueAtIndexOrDefault(a.pointBorderWidth, n, r.borderWidth);
          }
        });
      };
    }, {}],
    21: [function (t, e, a) {
      "use strict";

      e.exports = function (t) {
        var e = t.helpers;
        t.defaults.global.animation = {
          duration: 1e3,
          easing: "easeOutQuart",
          onProgress: e.noop,
          onComplete: e.noop
        }, t.Animation = t.Element.extend({
          currentStep: null,
          numSteps: 60,
          easing: "",
          render: null,
          onAnimationProgress: null,
          onAnimationComplete: null
        }), t.animationService = {
          frameDuration: 17,
          animations: [],
          dropFrames: 0,
          request: null,
          addAnimation: function addAnimation(t, e, a, i) {
            var n = this;
            i || (t.animating = !0);

            for (var o = 0; o < n.animations.length; ++o) {
              if (n.animations[o].chartInstance === t) return void (n.animations[o].animationObject = e);
            }

            n.animations.push({
              chartInstance: t,
              animationObject: e
            }), 1 === n.animations.length && n.requestAnimationFrame();
          },
          cancelAnimation: function cancelAnimation(t) {
            var a = e.findIndex(this.animations, function (e) {
              return e.chartInstance === t;
            });
            -1 !== a && (this.animations.splice(a, 1), t.animating = !1);
          },
          requestAnimationFrame: function requestAnimationFrame() {
            var t = this;
            null === t.request && (t.request = e.requestAnimFrame.call(window, function () {
              t.request = null, t.startDigest();
            }));
          },
          startDigest: function startDigest() {
            var t = this,
                e = Date.now(),
                a = 0;
            t.dropFrames > 1 && (a = Math.floor(t.dropFrames), t.dropFrames = t.dropFrames % 1);

            for (var i = 0; i < t.animations.length;) {
              null === t.animations[i].animationObject.currentStep && (t.animations[i].animationObject.currentStep = 0), t.animations[i].animationObject.currentStep += 1 + a, t.animations[i].animationObject.currentStep > t.animations[i].animationObject.numSteps && (t.animations[i].animationObject.currentStep = t.animations[i].animationObject.numSteps), t.animations[i].animationObject.render(t.animations[i].chartInstance, t.animations[i].animationObject), t.animations[i].animationObject.onAnimationProgress && t.animations[i].animationObject.onAnimationProgress.call && t.animations[i].animationObject.onAnimationProgress.call(t.animations[i].chartInstance, t.animations[i]), t.animations[i].animationObject.currentStep === t.animations[i].animationObject.numSteps ? (t.animations[i].animationObject.onAnimationComplete && t.animations[i].animationObject.onAnimationComplete.call && t.animations[i].animationObject.onAnimationComplete.call(t.animations[i].chartInstance, t.animations[i]), t.animations[i].chartInstance.animating = !1, t.animations.splice(i, 1)) : ++i;
            }

            var n = Date.now(),
                o = (n - e) / t.frameDuration;
            t.dropFrames += o, t.animations.length > 0 && t.requestAnimationFrame();
          }
        };
      };
    }, {}],
    22: [function (t, e, a) {
      "use strict";

      e.exports = function (t) {
        var e = t.canvasHelpers = {};

        e.drawPoint = function (t, e, a, i, n) {
          var o, r, l, s, d, u;
          if ("object" == _typeof(e) && (o = e.toString(), "[object HTMLImageElement]" === o || "[object HTMLCanvasElement]" === o)) return void t.drawImage(e, i - e.width / 2, n - e.height / 2);

          if (!(isNaN(a) || 0 >= a)) {
            switch (e) {
              default:
                t.beginPath(), t.arc(i, n, a, 0, 2 * Math.PI), t.closePath(), t.fill();
                break;

              case "triangle":
                t.beginPath(), r = 3 * a / Math.sqrt(3), d = r * Math.sqrt(3) / 2, t.moveTo(i - r / 2, n + d / 3), t.lineTo(i + r / 2, n + d / 3), t.lineTo(i, n - 2 * d / 3), t.closePath(), t.fill();
                break;

              case "rect":
                u = 1 / Math.SQRT2 * a, t.beginPath(), t.fillRect(i - u, n - u, 2 * u, 2 * u), t.strokeRect(i - u, n - u, 2 * u, 2 * u);
                break;

              case "rectRot":
                u = 1 / Math.SQRT2 * a, t.beginPath(), t.moveTo(i - u, n), t.lineTo(i, n + u), t.lineTo(i + u, n), t.lineTo(i, n - u), t.closePath(), t.fill();
                break;

              case "cross":
                t.beginPath(), t.moveTo(i, n + a), t.lineTo(i, n - a), t.moveTo(i - a, n), t.lineTo(i + a, n), t.closePath();
                break;

              case "crossRot":
                t.beginPath(), l = Math.cos(Math.PI / 4) * a, s = Math.sin(Math.PI / 4) * a, t.moveTo(i - l, n - s), t.lineTo(i + l, n + s), t.moveTo(i - l, n + s), t.lineTo(i + l, n - s), t.closePath();
                break;

              case "star":
                t.beginPath(), t.moveTo(i, n + a), t.lineTo(i, n - a), t.moveTo(i - a, n), t.lineTo(i + a, n), l = Math.cos(Math.PI / 4) * a, s = Math.sin(Math.PI / 4) * a, t.moveTo(i - l, n - s), t.lineTo(i + l, n + s), t.moveTo(i - l, n + s), t.lineTo(i + l, n - s), t.closePath();
                break;

              case "line":
                t.beginPath(), t.moveTo(i - a, n), t.lineTo(i + a, n), t.closePath();
                break;

              case "dash":
                t.beginPath(), t.moveTo(i, n), t.lineTo(i + a, n), t.closePath();
            }

            t.stroke();
          }
        };
      };
    }, {}],
    23: [function (t, e, a) {
      "use strict";

      e.exports = function (t) {
        function e(t, e) {
          var a = r.getStyle(t, e),
              i = a && a.match(/(\d+)px/);
          return i ? Number(i[1]) : void 0;
        }

        function a(t, a) {
          var i = t.style,
              n = t.getAttribute("height"),
              o = t.getAttribute("width");

          if (t._chartjs = {
            initial: {
              height: n,
              width: o,
              style: {
                display: i.display,
                height: i.height,
                width: i.width
              }
            }
          }, i.display = i.display || "block", null === o || "" === o) {
            var r = e(t, "width");
            void 0 !== r && (t.width = r);
          }

          if (null === n || "" === n) if ("" === t.style.height) t.height = t.width / (a.options.aspectRatio || 2);else {
            var l = e(t, "height");
            void 0 !== r && (t.height = l);
          }
          return t;
        }

        function i(t) {
          if (t._chartjs) {
            var e = t._chartjs.initial;
            ["height", "width"].forEach(function (a) {
              var i = e[a];
              void 0 === i || null === i ? t.removeAttribute(a) : t.setAttribute(a, i);
            }), r.each(e.style || {}, function (e, a) {
              t.style[a] = e;
            }), t.width = t.width, delete t._chartjs;
          }
        }

        function n(t, e) {
          if ("string" == typeof t ? t = document.getElementById(t) : t.length && (t = t[0]), t && t.canvas && (t = t.canvas), t instanceof HTMLCanvasElement) {
            var i = t.getContext && t.getContext("2d");
            if (i instanceof CanvasRenderingContext2D) return a(t, e), i;
          }

          return null;
        }

        function o(e) {
          e = e || {};
          var a = e.data = e.data || {};
          return a.datasets = a.datasets || [], a.labels = a.labels || [], e.options = r.configMerge(t.defaults.global, t.defaults[e.type], e.options || {}), e;
        }

        var r = t.helpers;
        t.types = {}, t.instances = {}, t.controllers = {}, t.Controller = function (e, a, i) {
          var l = this;
          a = o(a);
          var s = n(e, a),
              d = s && s.canvas,
              u = d && d.height,
              c = d && d.width;
          return i.ctx = s, i.canvas = d, i.config = a, i.width = c, i.height = u, i.aspectRatio = u ? c / u : null, l.id = r.uid(), l.chart = i, l.config = a, l.options = a.options, l._bufferedRender = !1, t.instances[l.id] = l, Object.defineProperty(l, "data", {
            get: function get() {
              return l.config.data;
            }
          }), s && d ? (r.retinaScale(i), l.options.responsive && (r.addResizeListener(d.parentNode, function () {
            l.resize();
          }), l.resize(!0)), l.initialize(), l) : (console.error("Failed to create chart: can't acquire context from the given item"), l);
        }, r.extend(t.Controller.prototype, {
          initialize: function initialize() {
            var e = this;
            return t.plugins.notify("beforeInit", [e]), e.bindEvents(), e.ensureScalesHaveIDs(), e.buildOrUpdateControllers(), e.buildScales(), e.updateLayout(), e.resetElements(), e.initToolTip(), e.update(), t.plugins.notify("afterInit", [e]), e;
          },
          clear: function clear() {
            return r.clear(this.chart), this;
          },
          stop: function stop() {
            return t.animationService.cancelAnimation(this), this;
          },
          resize: function resize(e) {
            var a = this,
                i = a.chart,
                n = a.options,
                o = i.canvas,
                l = n.maintainAspectRatio && i.aspectRatio || null,
                s = Math.floor(r.getMaximumWidth(o)),
                d = Math.floor(l ? s / l : r.getMaximumHeight(o));

            if (i.width !== s || i.height !== d) {
              o.width = i.width = s, o.height = i.height = d, o.style.width = s + "px", o.style.height = d + "px", r.retinaScale(i);
              var u = {
                width: s,
                height: d
              };
              t.plugins.notify("resize", [a, u]), a.options.onResize && a.options.onResize(a, u), e || (a.stop(), a.update(a.options.responsiveAnimationDuration));
            }
          },
          ensureScalesHaveIDs: function ensureScalesHaveIDs() {
            var t = this.options,
                e = t.scales || {},
                a = t.scale;
            r.each(e.xAxes, function (t, e) {
              t.id = t.id || "x-axis-" + e;
            }), r.each(e.yAxes, function (t, e) {
              t.id = t.id || "y-axis-" + e;
            }), a && (a.id = a.id || "scale");
          },
          buildScales: function buildScales() {
            var e = this,
                a = e.options,
                i = e.scales = {},
                n = [];
            a.scales && (n = n.concat((a.scales.xAxes || []).map(function (t) {
              return {
                options: t,
                dtype: "category"
              };
            }), (a.scales.yAxes || []).map(function (t) {
              return {
                options: t,
                dtype: "linear"
              };
            }))), a.scale && n.push({
              options: a.scale,
              dtype: "radialLinear",
              isDefault: !0
            }), r.each(n, function (a) {
              var n = a.options,
                  o = r.getValueOrDefault(n.type, a.dtype),
                  l = t.scaleService.getScaleConstructor(o);

              if (l) {
                var s = new l({
                  id: n.id,
                  options: n,
                  ctx: e.chart.ctx,
                  chart: e
                });
                i[s.id] = s, a.isDefault && (e.scale = s);
              }
            }), t.scaleService.addScalesToLayout(this);
          },
          updateLayout: function updateLayout() {
            t.layoutService.update(this, this.chart.width, this.chart.height);
          },
          buildOrUpdateControllers: function buildOrUpdateControllers() {
            var e = this,
                a = [],
                i = [];
            if (r.each(e.data.datasets, function (n, o) {
              var r = e.getDatasetMeta(o);
              r.type || (r.type = n.type || e.config.type), a.push(r.type), r.controller ? r.controller.updateIndex(o) : (r.controller = new t.controllers[r.type](e, o), i.push(r.controller));
            }, e), a.length > 1) for (var n = 1; n < a.length; n++) {
              if (a[n] !== a[n - 1]) {
                e.isCombo = !0;
                break;
              }
            }
            return i;
          },
          resetElements: function resetElements() {
            var t = this;
            r.each(t.data.datasets, function (e, a) {
              t.getDatasetMeta(a).controller.reset();
            }, t);
          },
          reset: function reset() {
            this.resetElements(), this.tooltip.initialize();
          },
          update: function update(e, a) {
            var i = this;
            t.plugins.notify("beforeUpdate", [i]), i.tooltip._data = i.data;
            var n = i.buildOrUpdateControllers();
            r.each(i.data.datasets, function (t, e) {
              i.getDatasetMeta(e).controller.buildOrUpdateElements();
            }, i), t.layoutService.update(i, i.chart.width, i.chart.height), t.plugins.notify("afterScaleUpdate", [i]), r.each(n, function (t) {
              t.reset();
            }), i.updateDatasets(), t.plugins.notify("afterUpdate", [i]), i._bufferedRender ? i._bufferedRequest = {
              lazy: a,
              duration: e
            } : i.render(e, a);
          },
          updateDatasets: function updateDatasets() {
            var e,
                a,
                i = this;

            if (t.plugins.notify("beforeDatasetsUpdate", [i])) {
              for (e = 0, a = i.data.datasets.length; a > e; ++e) {
                i.getDatasetMeta(e).controller.update();
              }

              t.plugins.notify("afterDatasetsUpdate", [i]);
            }
          },
          render: function render(e, a) {
            var i = this;
            t.plugins.notify("beforeRender", [i]);
            var n = i.options.animation;

            if (n && ("undefined" != typeof e && 0 !== e || "undefined" == typeof e && 0 !== n.duration)) {
              var o = new t.Animation();
              o.numSteps = (e || n.duration) / 16.66, o.easing = n.easing, o.render = function (t, e) {
                var a = r.easingEffects[e.easing],
                    i = e.currentStep / e.numSteps,
                    n = a(i);
                t.draw(n, i, e.currentStep);
              }, o.onAnimationProgress = n.onProgress, o.onAnimationComplete = n.onComplete, t.animationService.addAnimation(i, o, e, a);
            } else i.draw(), n && n.onComplete && n.onComplete.call && n.onComplete.call(i);

            return i;
          },
          draw: function draw(e) {
            var a = this,
                i = e || 1;
            a.clear(), t.plugins.notify("beforeDraw", [a, i]), r.each(a.boxes, function (t) {
              t.draw(a.chartArea);
            }, a), a.scale && a.scale.draw(), t.plugins.notify("beforeDatasetsDraw", [a, i]), r.each(a.data.datasets, function (t, i) {
              a.isDatasetVisible(i) && a.getDatasetMeta(i).controller.draw(e);
            }, a, !0), t.plugins.notify("afterDatasetsDraw", [a, i]), a.tooltip.transition(i).draw(), t.plugins.notify("afterDraw", [a, i]);
          },
          getElementAtEvent: function getElementAtEvent(e) {
            return t.Interaction.modes.single(this, e);
          },
          getElementsAtEvent: function getElementsAtEvent(e) {
            return t.Interaction.modes.label(this, e, {
              intersect: !0
            });
          },
          getElementsAtXAxis: function getElementsAtXAxis(e) {
            return t.Interaction.modes["x-axis"](this, e, {
              intersect: !0
            });
          },
          getElementsAtEventForMode: function getElementsAtEventForMode(e, a, i) {
            var n = t.Interaction.modes[a];
            return "function" == typeof n ? n(this, e, i) : [];
          },
          getDatasetAtEvent: function getDatasetAtEvent(e) {
            return t.Interaction.modes.dataset(this, e);
          },
          getDatasetMeta: function getDatasetMeta(t) {
            var e = this,
                a = e.data.datasets[t];
            a._meta || (a._meta = {});
            var i = a._meta[e.id];
            return i || (i = a._meta[e.id] = {
              type: null,
              data: [],
              dataset: null,
              controller: null,
              hidden: null,
              xAxisID: null,
              yAxisID: null
            }), i;
          },
          getVisibleDatasetCount: function getVisibleDatasetCount() {
            for (var t = 0, e = 0, a = this.data.datasets.length; a > e; ++e) {
              this.isDatasetVisible(e) && t++;
            }

            return t;
          },
          isDatasetVisible: function isDatasetVisible(t) {
            var e = this.getDatasetMeta(t);
            return "boolean" == typeof e.hidden ? !e.hidden : !this.data.datasets[t].hidden;
          },
          generateLegend: function generateLegend() {
            return this.options.legendCallback(this);
          },
          destroy: function destroy() {
            var e,
                a,
                n,
                o = this,
                l = o.chart.canvas;

            for (o.stop(), a = 0, n = o.data.datasets.length; n > a; ++a) {
              e = o.getDatasetMeta(a), e.controller && (e.controller.destroy(), e.controller = null);
            }

            l && (r.unbindEvents(o, o.events), r.removeResizeListener(l.parentNode), r.clear(o.chart), i(l), o.chart.canvas = null, o.chart.ctx = null), t.plugins.notify("destroy", [o]), delete t.instances[o.id];
          },
          toBase64Image: function toBase64Image() {
            return this.chart.canvas.toDataURL.apply(this.chart.canvas, arguments);
          },
          initToolTip: function initToolTip() {
            var e = this;
            e.tooltip = new t.Tooltip({
              _chart: e.chart,
              _chartInstance: e,
              _data: e.data,
              _options: e.options.tooltips
            }, e), e.tooltip.initialize();
          },
          bindEvents: function bindEvents() {
            var t = this;
            r.bindEvents(t, t.options.events, function (e) {
              t.eventHandler(e);
            });
          },
          updateHoverStyle: function updateHoverStyle(t, e, a) {
            var i,
                n,
                o,
                r = a ? "setHoverStyle" : "removeHoverStyle";

            for (n = 0, o = t.length; o > n; ++n) {
              i = t[n], i && this.getDatasetMeta(i._datasetIndex).controller[r](i);
            }
          },
          eventHandler: function eventHandler(t) {
            var e = this,
                a = e.legend,
                i = e.tooltip,
                n = e.options.hover;
            e._bufferedRender = !0, e._bufferedRequest = null;
            var o = e.handleEvent(t);
            o |= a && a.handleEvent(t), o |= i && i.handleEvent(t);
            var r = e._bufferedRequest;
            return r ? e.render(r.duration, r.lazy) : o && !e.animating && (e.stop(), e.render(n.animationDuration, !0)), e._bufferedRender = !1, e._bufferedRequest = null, e;
          },
          handleEvent: function handleEvent(t) {
            var e = this,
                a = e.options || {},
                i = a.hover,
                n = !1;
            return e.lastActive = e.lastActive || [], "mouseout" === t.type ? e.active = [] : e.active = e.getElementsAtEventForMode(t, i.mode, i), i.onHover && i.onHover.call(e, e.active), ("mouseup" === t.type || "click" === t.type) && a.onClick && a.onClick.call(e, t, e.active), e.lastActive.length && e.updateHoverStyle(e.lastActive, i.mode, !1), e.active.length && i.mode && e.updateHoverStyle(e.active, i.mode, !0), n = !r.arrayEquals(e.active, e.lastActive), e.lastActive = e.active, n;
          }
        });
      };
    }, {}],
    24: [function (t, e, a) {
      "use strict";

      e.exports = function (t) {
        function e(t, e) {
          return t._chartjs ? void t._chartjs.listeners.push(e) : (Object.defineProperty(t, "_chartjs", {
            configurable: !0,
            enumerable: !1,
            value: {
              listeners: [e]
            }
          }), void n.forEach(function (e) {
            var a = "onData" + e.charAt(0).toUpperCase() + e.slice(1),
                n = t[e];
            Object.defineProperty(t, e, {
              configurable: !0,
              enumerable: !1,
              value: function value() {
                var e = Array.prototype.slice.call(arguments),
                    o = n.apply(this, e);
                return i.each(t._chartjs.listeners, function (t) {
                  "function" == typeof t[a] && t[a].apply(t, e);
                }), o;
              }
            });
          }));
        }

        function a(t, e) {
          var a = t._chartjs;

          if (a) {
            var i = a.listeners,
                o = i.indexOf(e);
            -1 !== o && i.splice(o, 1), i.length > 0 || (n.forEach(function (e) {
              delete t[e];
            }), delete t._chartjs);
          }
        }

        var i = t.helpers,
            n = ["push", "pop", "shift", "splice", "unshift"];
        t.DatasetController = function (t, e) {
          this.initialize(t, e);
        }, i.extend(t.DatasetController.prototype, {
          datasetElementType: null,
          dataElementType: null,
          initialize: function initialize(t, e) {
            var a = this;
            a.chart = t, a.index = e, a.linkScales(), a.addElements();
          },
          updateIndex: function updateIndex(t) {
            this.index = t;
          },
          linkScales: function linkScales() {
            var t = this,
                e = t.getMeta(),
                a = t.getDataset();
            null === e.xAxisID && (e.xAxisID = a.xAxisID || t.chart.options.scales.xAxes[0].id), null === e.yAxisID && (e.yAxisID = a.yAxisID || t.chart.options.scales.yAxes[0].id);
          },
          getDataset: function getDataset() {
            return this.chart.data.datasets[this.index];
          },
          getMeta: function getMeta() {
            return this.chart.getDatasetMeta(this.index);
          },
          getScaleForId: function getScaleForId(t) {
            return this.chart.scales[t];
          },
          reset: function reset() {
            this.update(!0);
          },
          destroy: function destroy() {
            this._data && a(this._data, this);
          },
          createMetaDataset: function createMetaDataset() {
            var t = this,
                e = t.datasetElementType;
            return e && new e({
              _chart: t.chart.chart,
              _datasetIndex: t.index
            });
          },
          createMetaData: function createMetaData(t) {
            var e = this,
                a = e.dataElementType;
            return a && new a({
              _chart: e.chart.chart,
              _datasetIndex: e.index,
              _index: t
            });
          },
          addElements: function addElements() {
            var t,
                e,
                a = this,
                i = a.getMeta(),
                n = a.getDataset().data || [],
                o = i.data;

            for (t = 0, e = n.length; e > t; ++t) {
              o[t] = o[t] || a.createMetaData(t);
            }

            i.dataset = i.dataset || a.createMetaDataset();
          },
          addElementAndReset: function addElementAndReset(t) {
            var e = this.createMetaData(t);
            this.getMeta().data.splice(t, 0, e), this.updateElement(e, t, !0);
          },
          buildOrUpdateElements: function buildOrUpdateElements() {
            var t = this,
                i = t.getDataset(),
                n = i.data || (i.data = []);
            t._data !== n && (t._data && a(t._data, t), e(n, t), t._data = n), t.resyncElements();
          },
          update: i.noop,
          draw: function draw(t) {
            var e,
                a,
                i = t || 1,
                n = this.getMeta().data;

            for (e = 0, a = n.length; a > e; ++e) {
              n[e].transition(i).draw();
            }
          },
          removeHoverStyle: function removeHoverStyle(t, e) {
            var a = this.chart.data.datasets[t._datasetIndex],
                n = t._index,
                o = t.custom || {},
                r = i.getValueAtIndexOrDefault,
                l = t._model;
            l.backgroundColor = o.backgroundColor ? o.backgroundColor : r(a.backgroundColor, n, e.backgroundColor), l.borderColor = o.borderColor ? o.borderColor : r(a.borderColor, n, e.borderColor), l.borderWidth = o.borderWidth ? o.borderWidth : r(a.borderWidth, n, e.borderWidth);
          },
          setHoverStyle: function setHoverStyle(t) {
            var e = this.chart.data.datasets[t._datasetIndex],
                a = t._index,
                n = t.custom || {},
                o = i.getValueAtIndexOrDefault,
                r = i.getHoverColor,
                l = t._model;
            l.backgroundColor = n.hoverBackgroundColor ? n.hoverBackgroundColor : o(e.hoverBackgroundColor, a, r(l.backgroundColor)), l.borderColor = n.hoverBorderColor ? n.hoverBorderColor : o(e.hoverBorderColor, a, r(l.borderColor)), l.borderWidth = n.hoverBorderWidth ? n.hoverBorderWidth : o(e.hoverBorderWidth, a, l.borderWidth);
          },
          resyncElements: function resyncElements() {
            var t = this,
                e = t.getMeta(),
                a = t.getDataset().data,
                i = e.data.length,
                n = a.length;
            i > n ? e.data.splice(n, i - n) : n > i && t.insertElements(i, n - i);
          },
          insertElements: function insertElements(t, e) {
            for (var a = 0; e > a; ++a) {
              this.addElementAndReset(t + a);
            }
          },
          onDataPush: function onDataPush() {
            this.insertElements(this.getDataset().data.length - 1, arguments.length);
          },
          onDataPop: function onDataPop() {
            this.getMeta().data.pop();
          },
          onDataShift: function onDataShift() {
            this.getMeta().data.shift();
          },
          onDataSplice: function onDataSplice(t, e) {
            this.getMeta().data.splice(t, e), this.insertElements(t, arguments.length - 2);
          },
          onDataUnshift: function onDataUnshift() {
            this.insertElements(0, arguments.length);
          }
        }), t.DatasetController.extend = i.inherits;
      };
    }, {}],
    25: [function (t, e, a) {
      "use strict";

      e.exports = function (t) {
        var e = t.helpers;
        t.elements = {}, t.Element = function (t) {
          e.extend(this, t), this.initialize.apply(this, arguments);
        }, e.extend(t.Element.prototype, {
          initialize: function initialize() {
            this.hidden = !1;
          },
          pivot: function pivot() {
            var t = this;
            return t._view || (t._view = e.clone(t._model)), t._start = e.clone(t._view), t;
          },
          transition: function transition(t) {
            var a = this;
            return a._view || (a._view = e.clone(a._model)), 1 === t ? (a._view = a._model, a._start = null, a) : (a._start || a.pivot(), e.each(a._model, function (i, n) {
              if ("_" === n[0]) ;else if (a._view.hasOwnProperty(n)) {
                if (i === a._view[n]) ;else if ("string" == typeof i) try {
                  var o = e.color(a._model[n]).mix(e.color(a._start[n]), t);
                  a._view[n] = o.rgbString();
                } catch (r) {
                  a._view[n] = i;
                } else if ("number" == typeof i) {
                  var l = void 0 !== a._start[n] && isNaN(a._start[n]) === !1 ? a._start[n] : 0;
                  a._view[n] = (a._model[n] - l) * t + l;
                } else a._view[n] = i;
              } else "number" != typeof i || isNaN(a._view[n]) ? a._view[n] = i : a._view[n] = i * t;
            }, a), a);
          },
          tooltipPosition: function tooltipPosition() {
            return {
              x: this._model.x,
              y: this._model.y
            };
          },
          hasValue: function hasValue() {
            return e.isNumber(this._model.x) && e.isNumber(this._model.y);
          }
        }), t.Element.extend = e.inherits;
      };
    }, {}],
    26: [function (t, e, a) {
      "use strict";

      var i = t(3);

      e.exports = function (t) {
        function e(t, e, a) {
          var i;
          return "string" == typeof t ? (i = parseInt(t, 10), -1 !== t.indexOf("%") && (i = i / 100 * e.parentNode[a])) : i = t, i;
        }

        function a(t) {
          return void 0 !== t && null !== t && "none" !== t;
        }

        function n(t, i, n) {
          var o = document.defaultView,
              r = t.parentNode,
              l = o.getComputedStyle(t)[i],
              s = o.getComputedStyle(r)[i],
              d = a(l),
              u = a(s),
              c = Number.POSITIVE_INFINITY;
          return d || u ? Math.min(d ? e(l, t, n) : c, u ? e(s, r, n) : c) : "none";
        }

        var o = t.helpers = {};
        o.each = function (t, e, a, i) {
          var n, r;
          if (o.isArray(t)) {
            if (r = t.length, i) for (n = r - 1; n >= 0; n--) {
              e.call(a, t[n], n);
            } else for (n = 0; r > n; n++) {
              e.call(a, t[n], n);
            }
          } else if ("object" == _typeof(t)) {
            var l = Object.keys(t);

            for (r = l.length, n = 0; r > n; n++) {
              e.call(a, t[l[n]], l[n]);
            }
          }
        }, o.clone = function (t) {
          var e = {};
          return o.each(t, function (t, a) {
            o.isArray(t) ? e[a] = t.slice(0) : "object" == _typeof(t) && null !== t ? e[a] = o.clone(t) : e[a] = t;
          }), e;
        }, o.extend = function (t) {
          for (var e = function e(_e, a) {
            t[a] = _e;
          }, a = 1, i = arguments.length; i > a; a++) {
            o.each(arguments[a], e);
          }

          return t;
        }, o.configMerge = function (e) {
          var a = o.clone(e);
          return o.each(Array.prototype.slice.call(arguments, 1), function (e) {
            o.each(e, function (e, i) {
              var n = a.hasOwnProperty(i),
                  r = n ? a[i] : {};
              "scales" === i ? a[i] = o.scaleMerge(r, e) : "scale" === i ? a[i] = o.configMerge(r, t.scaleService.getScaleDefaults(e.type), e) : !n || "object" != _typeof(r) || o.isArray(r) || null === r || "object" != _typeof(e) || o.isArray(e) ? a[i] = e : a[i] = o.configMerge(r, e);
            });
          }), a;
        }, o.scaleMerge = function (e, a) {
          var i = o.clone(e);
          return o.each(a, function (e, a) {
            "xAxes" === a || "yAxes" === a ? i.hasOwnProperty(a) ? o.each(e, function (e, n) {
              var r = o.getValueOrDefault(e.type, "xAxes" === a ? "category" : "linear"),
                  l = t.scaleService.getScaleDefaults(r);
              n >= i[a].length || !i[a][n].type ? i[a].push(o.configMerge(l, e)) : e.type && e.type !== i[a][n].type ? i[a][n] = o.configMerge(i[a][n], l, e) : i[a][n] = o.configMerge(i[a][n], e);
            }) : (i[a] = [], o.each(e, function (e) {
              var n = o.getValueOrDefault(e.type, "xAxes" === a ? "category" : "linear");
              i[a].push(o.configMerge(t.scaleService.getScaleDefaults(n), e));
            })) : i.hasOwnProperty(a) && "object" == _typeof(i[a]) && null !== i[a] && "object" == _typeof(e) ? i[a] = o.configMerge(i[a], e) : i[a] = e;
          }), i;
        }, o.getValueAtIndexOrDefault = function (t, e, a) {
          return void 0 === t || null === t ? a : o.isArray(t) ? e < t.length ? t[e] : a : t;
        }, o.getValueOrDefault = function (t, e) {
          return void 0 === t ? e : t;
        }, o.indexOf = Array.prototype.indexOf ? function (t, e) {
          return t.indexOf(e);
        } : function (t, e) {
          for (var a = 0, i = t.length; i > a; ++a) {
            if (t[a] === e) return a;
          }

          return -1;
        }, o.where = function (t, e) {
          if (o.isArray(t) && Array.prototype.filter) return t.filter(e);
          var a = [];
          return o.each(t, function (t) {
            e(t) && a.push(t);
          }), a;
        }, o.findIndex = Array.prototype.findIndex ? function (t, e, a) {
          return t.findIndex(e, a);
        } : function (t, e, a) {
          a = void 0 === a ? t : a;

          for (var i = 0, n = t.length; n > i; ++i) {
            if (e.call(a, t[i], i, t)) return i;
          }

          return -1;
        }, o.findNextWhere = function (t, e, a) {
          (void 0 === a || null === a) && (a = -1);

          for (var i = a + 1; i < t.length; i++) {
            var n = t[i];
            if (e(n)) return n;
          }
        }, o.findPreviousWhere = function (t, e, a) {
          (void 0 === a || null === a) && (a = t.length);

          for (var i = a - 1; i >= 0; i--) {
            var n = t[i];
            if (e(n)) return n;
          }
        }, o.inherits = function (t) {
          var e = this,
              a = t && t.hasOwnProperty("constructor") ? t.constructor : function () {
            return e.apply(this, arguments);
          },
              i = function i() {
            this.constructor = a;
          };

          return i.prototype = e.prototype, a.prototype = new i(), a.extend = o.inherits, t && o.extend(a.prototype, t), a.__super__ = e.prototype, a;
        }, o.noop = function () {}, o.uid = function () {
          var t = 0;
          return function () {
            return t++;
          };
        }(), o.isNumber = function (t) {
          return !isNaN(parseFloat(t)) && isFinite(t);
        }, o.almostEquals = function (t, e, a) {
          return Math.abs(t - e) < a;
        }, o.max = function (t) {
          return t.reduce(function (t, e) {
            return isNaN(e) ? t : Math.max(t, e);
          }, Number.NEGATIVE_INFINITY);
        }, o.min = function (t) {
          return t.reduce(function (t, e) {
            return isNaN(e) ? t : Math.min(t, e);
          }, Number.POSITIVE_INFINITY);
        }, o.sign = Math.sign ? function (t) {
          return Math.sign(t);
        } : function (t) {
          return t = +t, 0 === t || isNaN(t) ? t : t > 0 ? 1 : -1;
        }, o.log10 = Math.log10 ? function (t) {
          return Math.log10(t);
        } : function (t) {
          return Math.log(t) / Math.LN10;
        }, o.toRadians = function (t) {
          return t * (Math.PI / 180);
        }, o.toDegrees = function (t) {
          return t * (180 / Math.PI);
        }, o.getAngleFromPoint = function (t, e) {
          var a = e.x - t.x,
              i = e.y - t.y,
              n = Math.sqrt(a * a + i * i),
              o = Math.atan2(i, a);
          return o < -.5 * Math.PI && (o += 2 * Math.PI), {
            angle: o,
            distance: n
          };
        }, o.distanceBetweenPoints = function (t, e) {
          return Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2));
        }, o.aliasPixel = function (t) {
          return t % 2 === 0 ? 0 : .5;
        }, o.splineCurve = function (t, e, a, i) {
          var n = t.skip ? e : t,
              o = e,
              r = a.skip ? e : a,
              l = Math.sqrt(Math.pow(o.x - n.x, 2) + Math.pow(o.y - n.y, 2)),
              s = Math.sqrt(Math.pow(r.x - o.x, 2) + Math.pow(r.y - o.y, 2)),
              d = l / (l + s),
              u = s / (l + s);
          d = isNaN(d) ? 0 : d, u = isNaN(u) ? 0 : u;
          var c = i * d,
              h = i * u;
          return {
            previous: {
              x: o.x - c * (r.x - n.x),
              y: o.y - c * (r.y - n.y)
            },
            next: {
              x: o.x + h * (r.x - n.x),
              y: o.y + h * (r.y - n.y)
            }
          };
        }, o.EPSILON = Number.EPSILON || 1e-14, o.splineCurveMonotone = function (t) {
          var e,
              a,
              i,
              n,
              r = (t || []).map(function (t) {
            return {
              model: t._model,
              deltaK: 0,
              mK: 0
            };
          }),
              l = r.length;

          for (e = 0; l > e; ++e) {
            i = r[e], i.model.skip || (a = e > 0 ? r[e - 1] : null, n = l - 1 > e ? r[e + 1] : null, n && !n.model.skip && (i.deltaK = (n.model.y - i.model.y) / (n.model.x - i.model.x)), !a || a.model.skip ? i.mK = i.deltaK : !n || n.model.skip ? i.mK = a.deltaK : this.sign(a.deltaK) !== this.sign(i.deltaK) ? i.mK = 0 : i.mK = (a.deltaK + i.deltaK) / 2);
          }

          var s, d, u, c;

          for (e = 0; l - 1 > e; ++e) {
            i = r[e], n = r[e + 1], i.model.skip || n.model.skip || (o.almostEquals(i.deltaK, 0, this.EPSILON) ? i.mK = n.mK = 0 : (s = i.mK / i.deltaK, d = n.mK / i.deltaK, c = Math.pow(s, 2) + Math.pow(d, 2), 9 >= c || (u = 3 / Math.sqrt(c), i.mK = s * u * i.deltaK, n.mK = d * u * i.deltaK)));
          }

          var h;

          for (e = 0; l > e; ++e) {
            i = r[e], i.model.skip || (a = e > 0 ? r[e - 1] : null, n = l - 1 > e ? r[e + 1] : null, a && !a.model.skip && (h = (i.model.x - a.model.x) / 3, i.model.controlPointPreviousX = i.model.x - h, i.model.controlPointPreviousY = i.model.y - h * i.mK), n && !n.model.skip && (h = (n.model.x - i.model.x) / 3, i.model.controlPointNextX = i.model.x + h, i.model.controlPointNextY = i.model.y + h * i.mK));
          }
        }, o.nextItem = function (t, e, a) {
          return a ? e >= t.length - 1 ? t[0] : t[e + 1] : e >= t.length - 1 ? t[t.length - 1] : t[e + 1];
        }, o.previousItem = function (t, e, a) {
          return a ? 0 >= e ? t[t.length - 1] : t[e - 1] : 0 >= e ? t[0] : t[e - 1];
        }, o.niceNum = function (t, e) {
          var a,
              i = Math.floor(o.log10(t)),
              n = t / Math.pow(10, i);
          return a = e ? 1.5 > n ? 1 : 3 > n ? 2 : 7 > n ? 5 : 10 : 1 >= n ? 1 : 2 >= n ? 2 : 5 >= n ? 5 : 10, a * Math.pow(10, i);
        };
        var r = o.easingEffects = {
          linear: function linear(t) {
            return t;
          },
          easeInQuad: function easeInQuad(t) {
            return t * t;
          },
          easeOutQuad: function easeOutQuad(t) {
            return -1 * t * (t - 2);
          },
          easeInOutQuad: function easeInOutQuad(t) {
            return (t /= .5) < 1 ? .5 * t * t : -0.5 * (--t * (t - 2) - 1);
          },
          easeInCubic: function easeInCubic(t) {
            return t * t * t;
          },
          easeOutCubic: function easeOutCubic(t) {
            return 1 * ((t = t / 1 - 1) * t * t + 1);
          },
          easeInOutCubic: function easeInOutCubic(t) {
            return (t /= .5) < 1 ? .5 * t * t * t : .5 * ((t -= 2) * t * t + 2);
          },
          easeInQuart: function easeInQuart(t) {
            return t * t * t * t;
          },
          easeOutQuart: function easeOutQuart(t) {
            return -1 * ((t = t / 1 - 1) * t * t * t - 1);
          },
          easeInOutQuart: function easeInOutQuart(t) {
            return (t /= .5) < 1 ? .5 * t * t * t * t : -0.5 * ((t -= 2) * t * t * t - 2);
          },
          easeInQuint: function easeInQuint(t) {
            return 1 * (t /= 1) * t * t * t * t;
          },
          easeOutQuint: function easeOutQuint(t) {
            return 1 * ((t = t / 1 - 1) * t * t * t * t + 1);
          },
          easeInOutQuint: function easeInOutQuint(t) {
            return (t /= .5) < 1 ? .5 * t * t * t * t * t : .5 * ((t -= 2) * t * t * t * t + 2);
          },
          easeInSine: function easeInSine(t) {
            return -1 * Math.cos(t / 1 * (Math.PI / 2)) + 1;
          },
          easeOutSine: function easeOutSine(t) {
            return 1 * Math.sin(t / 1 * (Math.PI / 2));
          },
          easeInOutSine: function easeInOutSine(t) {
            return -0.5 * (Math.cos(Math.PI * t / 1) - 1);
          },
          easeInExpo: function easeInExpo(t) {
            return 0 === t ? 1 : 1 * Math.pow(2, 10 * (t / 1 - 1));
          },
          easeOutExpo: function easeOutExpo(t) {
            return 1 === t ? 1 : 1 * (-Math.pow(2, -10 * t / 1) + 1);
          },
          easeInOutExpo: function easeInOutExpo(t) {
            return 0 === t ? 0 : 1 === t ? 1 : (t /= .5) < 1 ? .5 * Math.pow(2, 10 * (t - 1)) : .5 * (-Math.pow(2, -10 * --t) + 2);
          },
          easeInCirc: function easeInCirc(t) {
            return t >= 1 ? t : -1 * (Math.sqrt(1 - (t /= 1) * t) - 1);
          },
          easeOutCirc: function easeOutCirc(t) {
            return 1 * Math.sqrt(1 - (t = t / 1 - 1) * t);
          },
          easeInOutCirc: function easeInOutCirc(t) {
            return (t /= .5) < 1 ? -0.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1);
          },
          easeInElastic: function easeInElastic(t) {
            var e = 1.70158,
                a = 0,
                i = 1;
            return 0 === t ? 0 : 1 === (t /= 1) ? 1 : (a || (a = .3), i < Math.abs(1) ? (i = 1, e = a / 4) : e = a / (2 * Math.PI) * Math.asin(1 / i), -(i * Math.pow(2, 10 * (t -= 1)) * Math.sin((1 * t - e) * (2 * Math.PI) / a)));
          },
          easeOutElastic: function easeOutElastic(t) {
            var e = 1.70158,
                a = 0,
                i = 1;
            return 0 === t ? 0 : 1 === (t /= 1) ? 1 : (a || (a = .3), i < Math.abs(1) ? (i = 1, e = a / 4) : e = a / (2 * Math.PI) * Math.asin(1 / i), i * Math.pow(2, -10 * t) * Math.sin((1 * t - e) * (2 * Math.PI) / a) + 1);
          },
          easeInOutElastic: function easeInOutElastic(t) {
            var e = 1.70158,
                a = 0,
                i = 1;
            return 0 === t ? 0 : 2 === (t /= .5) ? 1 : (a || (a = 1 * (.3 * 1.5)), i < Math.abs(1) ? (i = 1, e = a / 4) : e = a / (2 * Math.PI) * Math.asin(1 / i), 1 > t ? -.5 * (i * Math.pow(2, 10 * (t -= 1)) * Math.sin((1 * t - e) * (2 * Math.PI) / a)) : i * Math.pow(2, -10 * (t -= 1)) * Math.sin((1 * t - e) * (2 * Math.PI) / a) * .5 + 1);
          },
          easeInBack: function easeInBack(t) {
            var e = 1.70158;
            return 1 * (t /= 1) * t * ((e + 1) * t - e);
          },
          easeOutBack: function easeOutBack(t) {
            var e = 1.70158;
            return 1 * ((t = t / 1 - 1) * t * ((e + 1) * t + e) + 1);
          },
          easeInOutBack: function easeInOutBack(t) {
            var e = 1.70158;
            return (t /= .5) < 1 ? .5 * (t * t * (((e *= 1.525) + 1) * t - e)) : .5 * ((t -= 2) * t * (((e *= 1.525) + 1) * t + e) + 2);
          },
          easeInBounce: function easeInBounce(t) {
            return 1 - r.easeOutBounce(1 - t);
          },
          easeOutBounce: function easeOutBounce(t) {
            return (t /= 1) < 1 / 2.75 ? 1 * (7.5625 * t * t) : 2 / 2.75 > t ? 1 * (7.5625 * (t -= 1.5 / 2.75) * t + .75) : 2.5 / 2.75 > t ? 1 * (7.5625 * (t -= 2.25 / 2.75) * t + .9375) : 1 * (7.5625 * (t -= 2.625 / 2.75) * t + .984375);
          },
          easeInOutBounce: function easeInOutBounce(t) {
            return .5 > t ? .5 * r.easeInBounce(2 * t) : .5 * r.easeOutBounce(2 * t - 1) + .5;
          }
        };
        o.requestAnimFrame = function () {
          return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (t) {
            return window.setTimeout(t, 1e3 / 60);
          };
        }(), o.cancelAnimFrame = function () {
          return window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || window.oCancelAnimationFrame || window.msCancelAnimationFrame || function (t) {
            return window.clearTimeout(t, 1e3 / 60);
          };
        }(), o.getRelativePosition = function (t, e) {
          var a,
              i,
              n = t.originalEvent || t,
              r = t.currentTarget || t.srcElement,
              l = r.getBoundingClientRect(),
              s = n.touches;
          s && s.length > 0 ? (a = s[0].clientX, i = s[0].clientY) : (a = n.clientX, i = n.clientY);
          var d = parseFloat(o.getStyle(r, "padding-left")),
              u = parseFloat(o.getStyle(r, "padding-top")),
              c = parseFloat(o.getStyle(r, "padding-right")),
              h = parseFloat(o.getStyle(r, "padding-bottom")),
              f = l.right - l.left - d - c,
              g = l.bottom - l.top - u - h;
          return a = Math.round((a - l.left - d) / f * r.width / e.currentDevicePixelRatio), i = Math.round((i - l.top - u) / g * r.height / e.currentDevicePixelRatio), {
            x: a,
            y: i
          };
        }, o.addEvent = function (t, e, a) {
          t.addEventListener ? t.addEventListener(e, a) : t.attachEvent ? t.attachEvent("on" + e, a) : t["on" + e] = a;
        }, o.removeEvent = function (t, e, a) {
          t.removeEventListener ? t.removeEventListener(e, a, !1) : t.detachEvent ? t.detachEvent("on" + e, a) : t["on" + e] = o.noop;
        }, o.bindEvents = function (t, e, a) {
          var i = t.events = t.events || {};
          o.each(e, function (e) {
            i[e] = function () {
              a.apply(t, arguments);
            }, o.addEvent(t.chart.canvas, e, i[e]);
          });
        }, o.unbindEvents = function (t, e) {
          var a = t.chart.canvas;
          o.each(e, function (t, e) {
            o.removeEvent(a, e, t);
          });
        }, o.getConstraintWidth = function (t) {
          return n(t, "max-width", "clientWidth");
        }, o.getConstraintHeight = function (t) {
          return n(t, "max-height", "clientHeight");
        }, o.getMaximumWidth = function (t) {
          var e = t.parentNode,
              a = parseInt(o.getStyle(e, "padding-left"), 10),
              i = parseInt(o.getStyle(e, "padding-right"), 10),
              n = e.clientWidth - a - i,
              r = o.getConstraintWidth(t);
          return isNaN(r) ? n : Math.min(n, r);
        }, o.getMaximumHeight = function (t) {
          var e = t.parentNode,
              a = parseInt(o.getStyle(e, "padding-top"), 10),
              i = parseInt(o.getStyle(e, "padding-bottom"), 10),
              n = e.clientHeight - a - i,
              r = o.getConstraintHeight(t);
          return isNaN(r) ? n : Math.min(n, r);
        }, o.getStyle = function (t, e) {
          return t.currentStyle ? t.currentStyle[e] : document.defaultView.getComputedStyle(t, null).getPropertyValue(e);
        }, o.retinaScale = function (t) {
          var e = t.currentDevicePixelRatio = window.devicePixelRatio || 1;

          if (1 !== e) {
            var a = t.canvas,
                i = t.height,
                n = t.width;
            a.height = i * e, a.width = n * e, t.ctx.scale(e, e), a.style.height = i + "px", a.style.width = n + "px";
          }
        }, o.clear = function (t) {
          t.ctx.clearRect(0, 0, t.width, t.height);
        }, o.fontString = function (t, e, a) {
          return e + " " + t + "px " + a;
        }, o.longestText = function (t, e, a, i) {
          i = i || {};
          var n = i.data = i.data || {},
              r = i.garbageCollect = i.garbageCollect || [];
          i.font !== e && (n = i.data = {}, r = i.garbageCollect = [], i.font = e), t.font = e;
          var l = 0;
          o.each(a, function (e) {
            void 0 !== e && null !== e && o.isArray(e) !== !0 ? l = o.measureText(t, n, r, l, e) : o.isArray(e) && o.each(e, function (e) {
              void 0 === e || null === e || o.isArray(e) || (l = o.measureText(t, n, r, l, e));
            });
          });
          var s = r.length / 2;

          if (s > a.length) {
            for (var d = 0; s > d; d++) {
              delete n[r[d]];
            }

            r.splice(0, s);
          }

          return l;
        }, o.measureText = function (t, e, a, i, n) {
          var o = e[n];
          return o || (o = e[n] = t.measureText(n).width, a.push(n)), o > i && (i = o), i;
        }, o.numberOfLabelLines = function (t) {
          var e = 1;
          return o.each(t, function (t) {
            o.isArray(t) && t.length > e && (e = t.length);
          }), e;
        }, o.drawRoundedRectangle = function (t, e, a, i, n, o) {
          t.beginPath(), t.moveTo(e + o, a), t.lineTo(e + i - o, a), t.quadraticCurveTo(e + i, a, e + i, a + o), t.lineTo(e + i, a + n - o), t.quadraticCurveTo(e + i, a + n, e + i - o, a + n), t.lineTo(e + o, a + n), t.quadraticCurveTo(e, a + n, e, a + n - o), t.lineTo(e, a + o), t.quadraticCurveTo(e, a, e + o, a), t.closePath();
        }, o.color = function (e) {
          return i ? i(e instanceof CanvasGradient ? t.defaults.global.defaultColor : e) : (console.error("Color.js not found!"), e);
        }, o.addResizeListener = function (t, e) {
          var a = document.createElement("iframe");
          a.className = "chartjs-hidden-iframe", a.style.cssText = "display:block;overflow:hidden;border:0;margin:0;top:0;left:0;bottom:0;right:0;height:100%;width:100%;position:absolute;pointer-events:none;z-index:-1;", a.tabIndex = -1;

          var i = t._chartjs = {
            resizer: a,
            ticking: !1
          },
              n = function n() {
            i.ticking || (i.ticking = !0, o.requestAnimFrame.call(window, function () {
              return i.resizer ? (i.ticking = !1, e()) : void 0;
            }));
          };

          o.addEvent(a, "load", function () {
            o.addEvent(a.contentWindow || a, "resize", n), n();
          }), t.insertBefore(a, t.firstChild);
        }, o.removeResizeListener = function (t) {
          if (t && t._chartjs) {
            var e = t._chartjs.resizer;
            e && (e.parentNode.removeChild(e), t._chartjs.resizer = null), delete t._chartjs;
          }
        }, o.isArray = Array.isArray ? function (t) {
          return Array.isArray(t);
        } : function (t) {
          return "[object Array]" === Object.prototype.toString.call(t);
        }, o.arrayEquals = function (t, e) {
          var a, i, n, r;
          if (!t || !e || t.length !== e.length) return !1;

          for (a = 0, i = t.length; i > a; ++a) {
            if (n = t[a], r = e[a], n instanceof Array && r instanceof Array) {
              if (!o.arrayEquals(n, r)) return !1;
            } else if (n !== r) return !1;
          }

          return !0;
        }, o.callCallback = function (t, e, a) {
          t && "function" == typeof t.call && t.apply(a, e);
        }, o.getHoverColor = function (t) {
          return t instanceof CanvasPattern ? t : o.color(t).saturate(.5).darken(.1).rgbString();
        };
      };
    }, {
      3: 3
    }],
    27: [function (t, e, a) {
      "use strict";

      e.exports = function (t) {
        function e(t, e) {
          var a,
              i,
              n,
              o,
              r,
              l = t.data.datasets;

          for (i = 0, o = l.length; o > i; ++i) {
            if (t.isDatasetVisible(i)) for (a = t.getDatasetMeta(i), n = 0, r = a.data.length; r > n; ++n) {
              var s = a.data[n];
              s._view.skip || e(s);
            }
          }
        }

        function a(t, a) {
          var i = [];
          return e(t, function (t) {
            t.inRange(a.x, a.y) && i.push(t);
          }), i;
        }

        function i(t, a, i, n) {
          var r = Number.POSITIVE_INFINITY,
              l = [];
          return n || (n = o.distanceBetweenPoints), e(t, function (t) {
            if (!i || t.inRange(a.x, a.y)) {
              var e = t.getCenterPoint(),
                  o = n(a, e);
              r > o ? (l = [t], r = o) : o === r && l.push(t);
            }
          }), l;
        }

        function n(t, e, n) {
          var r = o.getRelativePosition(e, t.chart),
              l = function l(t, e) {
            return Math.abs(t.x - e.x);
          },
              s = n.intersect ? a(t, r) : i(t, r, !1, l),
              d = [];

          return s.length ? (t.data.datasets.forEach(function (e, a) {
            if (t.isDatasetVisible(a)) {
              var i = t.getDatasetMeta(a),
                  n = i.data[s[0]._index];
              n && !n._view.skip && d.push(n);
            }
          }), d) : [];
        }

        var o = t.helpers;
        t.Interaction = {
          modes: {
            single: function single(t, a) {
              var i = o.getRelativePosition(a, t.chart),
                  n = [];
              return e(t, function (t) {
                return t.inRange(i.x, i.y) ? (n.push(t), n) : void 0;
              }), n.slice(0, 1);
            },
            label: n,
            index: n,
            dataset: function dataset(t, e, n) {
              var r = o.getRelativePosition(e, t.chart),
                  l = n.intersect ? a(t, r) : i(t, r, !1);
              return l.length > 0 && (l = t.getDatasetMeta(l[0]._datasetIndex).data), l;
            },
            "x-axis": function xAxis(t, e) {
              return n(t, e, !0);
            },
            point: function point(t, e) {
              var i = o.getRelativePosition(e, t.chart);
              return a(t, i);
            },
            nearest: function nearest(t, e, a) {
              var n = o.getRelativePosition(e, t.chart),
                  r = i(t, n, a.intersect);
              return r.length > 1 && r.sort(function (t, e) {
                var a = t.getArea(),
                    i = e.getArea(),
                    n = a - i;
                return 0 === n && (n = t._datasetIndex - e._datasetIndex), n;
              }), r.slice(0, 1);
            },
            x: function x(t, a, i) {
              var n = o.getRelativePosition(a, t.chart),
                  r = [],
                  l = !1;
              return e(t, function (t) {
                t.inXRange(n.x) && r.push(t), t.inRange(n.x, n.y) && (l = !0);
              }), i.intersect && !l && (r = []), r;
            },
            y: function y(t, a, i) {
              var n = o.getRelativePosition(a, t.chart),
                  r = [],
                  l = !1;
              return e(t, function (t) {
                t.inYRange(n.y) && r.push(t), t.inRange(n.x, n.y) && (l = !0);
              }), i.intersect && !l && (r = []), r;
            }
          }
        };
      };
    }, {}],
    28: [function (t, e, a) {
      "use strict";

      e.exports = function () {
        var t = function t(e, a) {
          return this.controller = new t.Controller(e, a, this), this.controller;
        };

        return t.defaults = {
          global: {
            responsive: !0,
            responsiveAnimationDuration: 0,
            maintainAspectRatio: !0,
            events: ["mousemove", "mouseout", "click", "touchstart", "touchmove"],
            hover: {
              onHover: null,
              mode: "nearest",
              intersect: !0,
              animationDuration: 400
            },
            onClick: null,
            defaultColor: "rgba(0,0,0,0.1)",
            defaultFontColor: "#666",
            defaultFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
            defaultFontSize: 12,
            defaultFontStyle: "normal",
            showLines: !0,
            elements: {},
            legendCallback: function legendCallback(t) {
              var e = [];
              e.push('<ul class="' + t.id + '-legend">');

              for (var a = 0; a < t.data.datasets.length; a++) {
                e.push('<li><span style="background-color:' + t.data.datasets[a].backgroundColor + '"></span>'), t.data.datasets[a].label && e.push(t.data.datasets[a].label), e.push("</li>");
              }

              return e.push("</ul>"), e.join("");
            }
          }
        }, t.Chart = t, t;
      };
    }, {}],
    29: [function (t, e, a) {
      "use strict";

      e.exports = function (t) {
        var e = t.helpers;
        t.layoutService = {
          defaults: {},
          addBox: function addBox(t, e) {
            t.boxes || (t.boxes = []), t.boxes.push(e);
          },
          removeBox: function removeBox(t, e) {
            t.boxes && t.boxes.splice(t.boxes.indexOf(e), 1);
          },
          update: function update(t, a, i) {
            function n(t) {
              var e,
                  a = t.isHorizontal();
              a ? (e = t.update(t.options.fullWidth ? x : C, M), D -= e.height) : (e = t.update(w, S), C -= e.width), I.push({
                horizontal: a,
                minSize: e,
                box: t
              });
            }

            function o(t) {
              var a = e.findNextWhere(I, function (e) {
                return e.box === t;
              });
              if (a) if (t.isHorizontal()) {
                var i = {
                  left: A,
                  right: T,
                  top: 0,
                  bottom: 0
                };
                t.update(t.options.fullWidth ? x : C, y / 2, i);
              } else t.update(a.minSize.width, D);
            }

            function r(t) {
              var a = e.findNextWhere(I, function (e) {
                return e.box === t;
              }),
                  i = {
                left: 0,
                right: 0,
                top: P,
                bottom: F
              };
              a && t.update(a.minSize.width, D, i);
            }

            function l(t) {
              t.isHorizontal() ? (t.left = t.options.fullWidth ? u : A, t.right = t.options.fullWidth ? a - c : A + C, t.top = L, t.bottom = L + t.height, L = t.bottom) : (t.left = V, t.right = V + t.width, t.top = P, t.bottom = P + D, V = t.right);
            }

            if (t) {
              var s = t.options.layout,
                  d = s ? s.padding : null,
                  u = 0,
                  c = 0,
                  h = 0,
                  f = 0;
              isNaN(d) ? (u = d.left || 0, c = d.right || 0, h = d.top || 0, f = d.bottom || 0) : (u = d, c = d, h = d, f = d);
              var g = e.where(t.boxes, function (t) {
                return "left" === t.options.position;
              }),
                  p = e.where(t.boxes, function (t) {
                return "right" === t.options.position;
              }),
                  m = e.where(t.boxes, function (t) {
                return "top" === t.options.position;
              }),
                  b = e.where(t.boxes, function (t) {
                return "bottom" === t.options.position;
              }),
                  v = e.where(t.boxes, function (t) {
                return "chartArea" === t.options.position;
              });
              m.sort(function (t, e) {
                return (e.options.fullWidth ? 1 : 0) - (t.options.fullWidth ? 1 : 0);
              }), b.sort(function (t, e) {
                return (t.options.fullWidth ? 1 : 0) - (e.options.fullWidth ? 1 : 0);
              });
              var x = a - u - c,
                  y = i - h - f,
                  k = x / 2,
                  S = y / 2,
                  w = (a - k) / (g.length + p.length),
                  M = (i - S) / (m.length + b.length),
                  C = x,
                  D = y,
                  I = [];
              e.each(g.concat(p, m, b), n);
              var A = u,
                  T = c,
                  P = h,
                  F = f;
              e.each(g.concat(p), o), e.each(g, function (t) {
                A += t.width;
              }), e.each(p, function (t) {
                T += t.width;
              }), e.each(m.concat(b), o), e.each(m, function (t) {
                P += t.height;
              }), e.each(b, function (t) {
                F += t.height;
              }), e.each(g.concat(p), r), A = u, T = c, P = h, F = f, e.each(g, function (t) {
                A += t.width;
              }), e.each(p, function (t) {
                T += t.width;
              }), e.each(m, function (t) {
                P += t.height;
              }), e.each(b, function (t) {
                F += t.height;
              });

              var _ = i - P - F,
                  R = a - A - T;

              (R !== C || _ !== D) && (e.each(g, function (t) {
                t.height = _;
              }), e.each(p, function (t) {
                t.height = _;
              }), e.each(m, function (t) {
                t.options.fullWidth || (t.width = R);
              }), e.each(b, function (t) {
                t.options.fullWidth || (t.width = R);
              }), D = _, C = R);
              var V = u,
                  L = h;
              e.each(g.concat(m), l), V += C, L += D, e.each(p, l), e.each(b, l), t.chartArea = {
                left: A,
                top: P,
                right: A + C,
                bottom: P + D
              }, e.each(v, function (e) {
                e.left = t.chartArea.left, e.top = t.chartArea.top, e.right = t.chartArea.right, e.bottom = t.chartArea.bottom, e.update(C, D);
              });
            }
          }
        };
      };
    }, {}],
    30: [function (t, e, a) {
      "use strict";

      e.exports = function (t) {
        function e(t, e) {
          return t.usePointStyle ? e * Math.SQRT2 : t.boxWidth;
        }

        var a = t.helpers,
            i = a.noop;
        t.defaults.global.legend = {
          display: !0,
          position: "top",
          fullWidth: !0,
          reverse: !1,
          onClick: function onClick(t, e) {
            var a = e.datasetIndex,
                i = this.chart,
                n = i.getDatasetMeta(a);
            n.hidden = null === n.hidden ? !i.data.datasets[a].hidden : null, i.update();
          },
          onHover: null,
          labels: {
            boxWidth: 40,
            padding: 10,
            generateLabels: function generateLabels(t) {
              var e = t.data;
              return a.isArray(e.datasets) ? e.datasets.map(function (e, i) {
                return {
                  text: e.label,
                  fillStyle: a.isArray(e.backgroundColor) ? e.backgroundColor[0] : e.backgroundColor,
                  hidden: !t.isDatasetVisible(i),
                  lineCap: e.borderCapStyle,
                  lineDash: e.borderDash,
                  lineDashOffset: e.borderDashOffset,
                  lineJoin: e.borderJoinStyle,
                  lineWidth: e.borderWidth,
                  strokeStyle: e.borderColor,
                  pointStyle: e.pointStyle,
                  datasetIndex: i
                };
              }, this) : [];
            }
          }
        }, t.Legend = t.Element.extend({
          initialize: function initialize(t) {
            a.extend(this, t), this.legendHitBoxes = [], this.doughnutMode = !1;
          },
          beforeUpdate: i,
          update: function update(t, e, a) {
            var i = this;
            return i.beforeUpdate(), i.maxWidth = t, i.maxHeight = e, i.margins = a, i.beforeSetDimensions(), i.setDimensions(), i.afterSetDimensions(), i.beforeBuildLabels(), i.buildLabels(), i.afterBuildLabels(), i.beforeFit(), i.fit(), i.afterFit(), i.afterUpdate(), i.minSize;
          },
          afterUpdate: i,
          beforeSetDimensions: i,
          setDimensions: function setDimensions() {
            var t = this;
            t.isHorizontal() ? (t.width = t.maxWidth, t.left = 0, t.right = t.width) : (t.height = t.maxHeight, t.top = 0, t.bottom = t.height), t.paddingLeft = 0, t.paddingTop = 0, t.paddingRight = 0, t.paddingBottom = 0, t.minSize = {
              width: 0,
              height: 0
            };
          },
          afterSetDimensions: i,
          beforeBuildLabels: i,
          buildLabels: function buildLabels() {
            var t = this;
            t.legendItems = t.options.labels.generateLabels.call(t, t.chart), t.options.reverse && t.legendItems.reverse();
          },
          afterBuildLabels: i,
          beforeFit: i,
          fit: function fit() {
            var i = this,
                n = i.options,
                o = n.labels,
                r = n.display,
                l = i.ctx,
                s = t.defaults.global,
                d = a.getValueOrDefault,
                u = d(o.fontSize, s.defaultFontSize),
                c = d(o.fontStyle, s.defaultFontStyle),
                h = d(o.fontFamily, s.defaultFontFamily),
                f = a.fontString(u, c, h),
                g = i.legendHitBoxes = [],
                p = i.minSize,
                m = i.isHorizontal();
            if (m ? (p.width = i.maxWidth, p.height = r ? 10 : 0) : (p.width = r ? 10 : 0, p.height = i.maxHeight), r) if (l.font = f, m) {
              var b = i.lineWidths = [0],
                  v = i.legendItems.length ? u + o.padding : 0;
              l.textAlign = "left", l.textBaseline = "top", a.each(i.legendItems, function (t, a) {
                var n = e(o, u),
                    r = n + u / 2 + l.measureText(t.text).width;
                b[b.length - 1] + r + o.padding >= i.width && (v += u + o.padding, b[b.length] = i.left), g[a] = {
                  left: 0,
                  top: 0,
                  width: r,
                  height: u
                }, b[b.length - 1] += r + o.padding;
              }), p.height += v;
            } else {
              var x = o.padding,
                  y = i.columnWidths = [],
                  k = o.padding,
                  S = 0,
                  w = 0,
                  M = u + x;
              a.each(i.legendItems, function (t, a) {
                var i = e(o, u),
                    n = i + u / 2 + l.measureText(t.text).width;
                w + M > p.height && (k += S + o.padding, y.push(S), S = 0, w = 0), S = Math.max(S, n), w += M, g[a] = {
                  left: 0,
                  top: 0,
                  width: n,
                  height: u
                };
              }), k += S, y.push(S), p.width += k;
            }
            i.width = p.width, i.height = p.height;
          },
          afterFit: i,
          isHorizontal: function isHorizontal() {
            return "top" === this.options.position || "bottom" === this.options.position;
          },
          draw: function draw() {
            var i = this,
                n = i.options,
                o = n.labels,
                r = t.defaults.global,
                l = r.elements.line,
                s = i.width,
                d = i.lineWidths;

            if (n.display) {
              var u,
                  c = i.ctx,
                  h = a.getValueOrDefault,
                  f = h(o.fontColor, r.defaultFontColor),
                  g = h(o.fontSize, r.defaultFontSize),
                  p = h(o.fontStyle, r.defaultFontStyle),
                  m = h(o.fontFamily, r.defaultFontFamily),
                  b = a.fontString(g, p, m);
              c.textAlign = "left", c.textBaseline = "top", c.lineWidth = .5, c.strokeStyle = f, c.fillStyle = f, c.font = b;

              var v = e(o, g),
                  x = i.legendHitBoxes,
                  y = function y(e, a, i) {
                if (!(isNaN(v) || 0 >= v)) {
                  c.save(), c.fillStyle = h(i.fillStyle, r.defaultColor), c.lineCap = h(i.lineCap, l.borderCapStyle), c.lineDashOffset = h(i.lineDashOffset, l.borderDashOffset), c.lineJoin = h(i.lineJoin, l.borderJoinStyle), c.lineWidth = h(i.lineWidth, l.borderWidth), c.strokeStyle = h(i.strokeStyle, r.defaultColor);
                  var o = 0 === h(i.lineWidth, l.borderWidth);

                  if (c.setLineDash && c.setLineDash(h(i.lineDash, l.borderDash)), n.labels && n.labels.usePointStyle) {
                    var s = g * Math.SQRT2 / 2,
                        d = s / Math.SQRT2,
                        u = e + d,
                        f = a + d;
                    t.canvasHelpers.drawPoint(c, i.pointStyle, s, u, f);
                  } else o || c.strokeRect(e, a, v, g), c.fillRect(e, a, v, g);

                  c.restore();
                }
              },
                  k = function k(t, e, a, i) {
                c.fillText(a.text, v + g / 2 + t, e), a.hidden && (c.beginPath(), c.lineWidth = 2, c.moveTo(v + g / 2 + t, e + g / 2), c.lineTo(v + g / 2 + t + i, e + g / 2), c.stroke());
              },
                  S = i.isHorizontal();

              u = S ? {
                x: i.left + (s - d[0]) / 2,
                y: i.top + o.padding,
                line: 0
              } : {
                x: i.left + o.padding,
                y: i.top + o.padding,
                line: 0
              };
              var w = g + o.padding;
              a.each(i.legendItems, function (t, e) {
                var a = c.measureText(t.text).width,
                    n = v + g / 2 + a,
                    r = u.x,
                    l = u.y;
                S ? r + n >= s && (l = u.y += w, u.line++, r = u.x = i.left + (s - d[u.line]) / 2) : l + w > i.bottom && (r = u.x = r + i.columnWidths[u.line] + o.padding, l = u.y = i.top, u.line++), y(r, l, t), x[e].left = r, x[e].top = l, k(r, l, t, a), S ? u.x += n + o.padding : u.y += w;
              });
            }
          },
          handleEvent: function handleEvent(t) {
            var e = this,
                i = e.options,
                n = "mouseup" === t.type ? "click" : t.type,
                o = !1;

            if ("mousemove" === n) {
              if (!i.onHover) return;
            } else {
              if ("click" !== n) return;
              if (!i.onClick) return;
            }

            var r = a.getRelativePosition(t, e.chart.chart),
                l = r.x,
                s = r.y;
            if (l >= e.left && l <= e.right && s >= e.top && s <= e.bottom) for (var d = e.legendHitBoxes, u = 0; u < d.length; ++u) {
              var c = d[u];

              if (l >= c.left && l <= c.left + c.width && s >= c.top && s <= c.top + c.height) {
                if ("click" === n) {
                  i.onClick.call(e, t, e.legendItems[u]), o = !0;
                  break;
                }

                if ("mousemove" === n) {
                  i.onHover.call(e, t, e.legendItems[u]), o = !0;
                  break;
                }
              }
            }
            return o;
          }
        }), t.plugins.register({
          beforeInit: function beforeInit(e) {
            var a = e.options,
                i = a.legend;
            i && (e.legend = new t.Legend({
              ctx: e.chart.ctx,
              options: i,
              chart: e
            }), t.layoutService.addBox(e, e.legend));
          }
        });
      };
    }, {}],
    31: [function (t, e, a) {
      "use strict";

      e.exports = function (t) {
        var e = t.helpers.noop;
        t.plugins = {
          _plugins: [],
          register: function register(t) {
            var e = this._plugins;
            [].concat(t).forEach(function (t) {
              -1 === e.indexOf(t) && e.push(t);
            });
          },
          unregister: function unregister(t) {
            var e = this._plugins;
            [].concat(t).forEach(function (t) {
              var a = e.indexOf(t);
              -1 !== a && e.splice(a, 1);
            });
          },
          clear: function clear() {
            this._plugins = [];
          },
          count: function count() {
            return this._plugins.length;
          },
          getAll: function getAll() {
            return this._plugins;
          },
          notify: function notify(t, e) {
            var a,
                i,
                n = this._plugins,
                o = n.length;

            for (a = 0; o > a; ++a) {
              if (i = n[a], "function" == typeof i[t] && i[t].apply(i, e || []) === !1) return !1;
            }

            return !0;
          }
        }, t.PluginBase = t.Element.extend({
          beforeInit: e,
          afterInit: e,
          beforeUpdate: e,
          afterUpdate: e,
          beforeDraw: e,
          afterDraw: e,
          destroy: e
        }), t.pluginService = t.plugins;
      };
    }, {}],
    32: [function (t, e, a) {
      "use strict";

      e.exports = function (t) {
        var e = t.helpers;
        t.defaults.scale = {
          display: !0,
          position: "left",
          gridLines: {
            display: !0,
            color: "rgba(0, 0, 0, 0.1)",
            lineWidth: 1,
            drawBorder: !0,
            drawOnChartArea: !0,
            drawTicks: !0,
            tickMarkLength: 10,
            zeroLineWidth: 1,
            zeroLineColor: "rgba(0,0,0,0.25)",
            offsetGridLines: !1,
            borderDash: [],
            borderDashOffset: 0
          },
          scaleLabel: {
            labelString: "",
            display: !1
          },
          ticks: {
            beginAtZero: !1,
            minRotation: 0,
            maxRotation: 50,
            mirror: !1,
            padding: 10,
            reverse: !1,
            display: !0,
            autoSkip: !0,
            autoSkipPadding: 0,
            labelOffset: 0,
            callback: t.Ticks.formatters.values
          }
        }, t.Scale = t.Element.extend({
          beforeUpdate: function beforeUpdate() {
            e.callCallback(this.options.beforeUpdate, [this]);
          },
          update: function update(t, a, i) {
            var n = this;
            return n.beforeUpdate(), n.maxWidth = t, n.maxHeight = a, n.margins = e.extend({
              left: 0,
              right: 0,
              top: 0,
              bottom: 0
            }, i), n.beforeSetDimensions(), n.setDimensions(), n.afterSetDimensions(), n.beforeDataLimits(), n.determineDataLimits(), n.afterDataLimits(), n.beforeBuildTicks(), n.buildTicks(), n.afterBuildTicks(), n.beforeTickToLabelConversion(), n.convertTicksToLabels(), n.afterTickToLabelConversion(), n.beforeCalculateTickRotation(), n.calculateTickRotation(), n.afterCalculateTickRotation(), n.beforeFit(), n.fit(), n.afterFit(), n.afterUpdate(), n.minSize;
          },
          afterUpdate: function afterUpdate() {
            e.callCallback(this.options.afterUpdate, [this]);
          },
          beforeSetDimensions: function beforeSetDimensions() {
            e.callCallback(this.options.beforeSetDimensions, [this]);
          },
          setDimensions: function setDimensions() {
            var t = this;
            t.isHorizontal() ? (t.width = t.maxWidth, t.left = 0, t.right = t.width) : (t.height = t.maxHeight, t.top = 0, t.bottom = t.height), t.paddingLeft = 0, t.paddingTop = 0, t.paddingRight = 0, t.paddingBottom = 0;
          },
          afterSetDimensions: function afterSetDimensions() {
            e.callCallback(this.options.afterSetDimensions, [this]);
          },
          beforeDataLimits: function beforeDataLimits() {
            e.callCallback(this.options.beforeDataLimits, [this]);
          },
          determineDataLimits: e.noop,
          afterDataLimits: function afterDataLimits() {
            e.callCallback(this.options.afterDataLimits, [this]);
          },
          beforeBuildTicks: function beforeBuildTicks() {
            e.callCallback(this.options.beforeBuildTicks, [this]);
          },
          buildTicks: e.noop,
          afterBuildTicks: function afterBuildTicks() {
            e.callCallback(this.options.afterBuildTicks, [this]);
          },
          beforeTickToLabelConversion: function beforeTickToLabelConversion() {
            e.callCallback(this.options.beforeTickToLabelConversion, [this]);
          },
          convertTicksToLabels: function convertTicksToLabels() {
            var t = this,
                e = t.options.ticks;
            t.ticks = t.ticks.map(e.userCallback || e.callback);
          },
          afterTickToLabelConversion: function afterTickToLabelConversion() {
            e.callCallback(this.options.afterTickToLabelConversion, [this]);
          },
          beforeCalculateTickRotation: function beforeCalculateTickRotation() {
            e.callCallback(this.options.beforeCalculateTickRotation, [this]);
          },
          calculateTickRotation: function calculateTickRotation() {
            var a = this,
                i = a.ctx,
                n = t.defaults.global,
                o = a.options.ticks,
                r = e.getValueOrDefault(o.fontSize, n.defaultFontSize),
                l = e.getValueOrDefault(o.fontStyle, n.defaultFontStyle),
                s = e.getValueOrDefault(o.fontFamily, n.defaultFontFamily),
                d = e.fontString(r, l, s);
            i.font = d;
            var u,
                c = i.measureText(a.ticks[0]).width,
                h = i.measureText(a.ticks[a.ticks.length - 1]).width;

            if (a.labelRotation = o.minRotation || 0, a.paddingRight = 0, a.paddingLeft = 0, a.options.display && a.isHorizontal()) {
              a.paddingRight = h / 2 + 3, a.paddingLeft = c / 2 + 3, a.longestTextCache || (a.longestTextCache = {});

              for (var f, g, p = e.longestText(i, d, a.ticks, a.longestTextCache), m = p, b = a.getPixelForTick(1) - a.getPixelForTick(0) - 6; m > b && a.labelRotation < o.maxRotation;) {
                if (f = Math.cos(e.toRadians(a.labelRotation)), g = Math.sin(e.toRadians(a.labelRotation)), u = f * c, u + r / 2 > a.yLabelWidth && (a.paddingLeft = u + r / 2), a.paddingRight = r / 2, g * p > a.maxHeight) {
                  a.labelRotation--;
                  break;
                }

                a.labelRotation++, m = f * p;
              }
            }

            a.margins && (a.paddingLeft = Math.max(a.paddingLeft - a.margins.left, 0), a.paddingRight = Math.max(a.paddingRight - a.margins.right, 0));
          },
          afterCalculateTickRotation: function afterCalculateTickRotation() {
            e.callCallback(this.options.afterCalculateTickRotation, [this]);
          },
          beforeFit: function beforeFit() {
            e.callCallback(this.options.beforeFit, [this]);
          },
          fit: function fit() {
            var a = this,
                i = a.minSize = {
              width: 0,
              height: 0
            },
                n = a.options,
                o = t.defaults.global,
                r = n.ticks,
                l = n.scaleLabel,
                s = n.gridLines,
                d = n.display,
                u = a.isHorizontal(),
                c = e.getValueOrDefault(r.fontSize, o.defaultFontSize),
                h = e.getValueOrDefault(r.fontStyle, o.defaultFontStyle),
                f = e.getValueOrDefault(r.fontFamily, o.defaultFontFamily),
                g = e.fontString(c, h, f),
                p = e.getValueOrDefault(l.fontSize, o.defaultFontSize),
                m = n.gridLines.tickMarkLength;

            if (u ? i.width = a.isFullWidth() ? a.maxWidth - a.margins.left - a.margins.right : a.maxWidth : i.width = d && s.drawTicks ? m : 0, u ? i.height = d && s.drawTicks ? m : 0 : i.height = a.maxHeight, l.display && d && (u ? i.height += 1.5 * p : i.width += 1.5 * p), r.display && d) {
              a.longestTextCache || (a.longestTextCache = {});
              var b = e.longestText(a.ctx, g, a.ticks, a.longestTextCache),
                  v = e.numberOfLabelLines(a.ticks),
                  x = .5 * c;

              if (u) {
                a.longestLabelWidth = b;
                var y = Math.sin(e.toRadians(a.labelRotation)) * a.longestLabelWidth + c * v + x * v;
                i.height = Math.min(a.maxHeight, i.height + y), a.ctx.font = g;
                var k = a.ctx.measureText(a.ticks[0]).width,
                    S = a.ctx.measureText(a.ticks[a.ticks.length - 1]).width,
                    w = Math.cos(e.toRadians(a.labelRotation)),
                    M = Math.sin(e.toRadians(a.labelRotation));
                a.paddingLeft = 0 !== a.labelRotation ? w * k + 3 : k / 2 + 3, a.paddingRight = 0 !== a.labelRotation ? M * (c / 2) + 3 : S / 2 + 3;
              } else {
                var C = a.maxWidth - i.width,
                    D = r.mirror;
                D ? b = 0 : b += a.options.ticks.padding, C > b ? i.width += b : i.width = a.maxWidth, a.paddingTop = c / 2, a.paddingBottom = c / 2;
              }
            }

            a.margins && (a.paddingLeft = Math.max(a.paddingLeft - a.margins.left, 0), a.paddingTop = Math.max(a.paddingTop - a.margins.top, 0), a.paddingRight = Math.max(a.paddingRight - a.margins.right, 0), a.paddingBottom = Math.max(a.paddingBottom - a.margins.bottom, 0)), a.width = i.width, a.height = i.height;
          },
          afterFit: function afterFit() {
            e.callCallback(this.options.afterFit, [this]);
          },
          isHorizontal: function isHorizontal() {
            return "top" === this.options.position || "bottom" === this.options.position;
          },
          isFullWidth: function isFullWidth() {
            return this.options.fullWidth;
          },
          getRightValue: function getRightValue(t) {
            return null === t || "undefined" == typeof t ? NaN : "number" != typeof t || isFinite(t) ? "object" == _typeof(t) ? t instanceof Date || t.isValid ? t : this.getRightValue(this.isHorizontal() ? t.x : t.y) : t : NaN;
          },
          getLabelForIndex: e.noop,
          getPixelForValue: e.noop,
          getValueForPixel: e.noop,
          getPixelForTick: function getPixelForTick(t, e) {
            var a = this;

            if (a.isHorizontal()) {
              var i = a.width - (a.paddingLeft + a.paddingRight),
                  n = i / Math.max(a.ticks.length - (a.options.gridLines.offsetGridLines ? 0 : 1), 1),
                  o = n * t + a.paddingLeft;
              e && (o += n / 2);
              var r = a.left + Math.round(o);
              return r += a.isFullWidth() ? a.margins.left : 0;
            }

            var l = a.height - (a.paddingTop + a.paddingBottom);
            return a.top + t * (l / (a.ticks.length - 1));
          },
          getPixelForDecimal: function getPixelForDecimal(t) {
            var e = this;

            if (e.isHorizontal()) {
              var a = e.width - (e.paddingLeft + e.paddingRight),
                  i = a * t + e.paddingLeft,
                  n = e.left + Math.round(i);
              return n += e.isFullWidth() ? e.margins.left : 0;
            }

            return e.top + t * e.height;
          },
          getBasePixel: function getBasePixel() {
            var t = this,
                e = t.min,
                a = t.max;
            return t.getPixelForValue(t.beginAtZero ? 0 : 0 > e && 0 > a ? a : e > 0 && a > 0 ? e : 0);
          },
          draw: function draw(a) {
            var i = this,
                n = i.options;

            if (n.display) {
              var o,
                  r,
                  l = i.ctx,
                  s = t.defaults.global,
                  d = n.ticks,
                  u = n.gridLines,
                  c = n.scaleLabel,
                  h = 0 !== i.labelRotation,
                  f = d.autoSkip,
                  g = i.isHorizontal();
              d.maxTicksLimit && (r = d.maxTicksLimit);
              var p = e.getValueOrDefault(d.fontColor, s.defaultFontColor),
                  m = e.getValueOrDefault(d.fontSize, s.defaultFontSize),
                  b = e.getValueOrDefault(d.fontStyle, s.defaultFontStyle),
                  v = e.getValueOrDefault(d.fontFamily, s.defaultFontFamily),
                  x = e.fontString(m, b, v),
                  y = u.tickMarkLength,
                  k = e.getValueOrDefault(u.borderDash, s.borderDash),
                  S = e.getValueOrDefault(u.borderDashOffset, s.borderDashOffset),
                  w = e.getValueOrDefault(c.fontColor, s.defaultFontColor),
                  M = e.getValueOrDefault(c.fontSize, s.defaultFontSize),
                  C = e.getValueOrDefault(c.fontStyle, s.defaultFontStyle),
                  D = e.getValueOrDefault(c.fontFamily, s.defaultFontFamily),
                  I = e.fontString(M, C, D),
                  A = e.toRadians(i.labelRotation),
                  T = Math.cos(A),
                  P = i.longestLabelWidth * T;
              l.fillStyle = p;
              var F = [];

              if (g) {
                if (o = !1, h && (P /= 2), (P + d.autoSkipPadding) * i.ticks.length > i.width - (i.paddingLeft + i.paddingRight) && (o = 1 + Math.floor((P + d.autoSkipPadding) * i.ticks.length / (i.width - (i.paddingLeft + i.paddingRight)))), r && i.ticks.length > r) for (; !o || i.ticks.length / (o || 1) > r;) {
                  o || (o = 1), o += 1;
                }
                f || (o = !1);
              }

              var _ = "right" === n.position ? i.left : i.right - y,
                  R = "right" === n.position ? i.left + y : i.right,
                  V = "bottom" === n.position ? i.top : i.bottom - y,
                  L = "bottom" === n.position ? i.top + y : i.bottom;

              if (e.each(i.ticks, function (t, r) {
                if (void 0 !== t && null !== t) {
                  var l = i.ticks.length === r + 1,
                      s = o > 1 && r % o > 0 || r % o === 0 && r + o >= i.ticks.length;

                  if ((!s || l) && void 0 !== t && null !== t) {
                    var c, f;
                    r === ("undefined" != typeof i.zeroLineIndex ? i.zeroLineIndex : 0) ? (c = u.zeroLineWidth, f = u.zeroLineColor) : (c = e.getValueAtIndexOrDefault(u.lineWidth, r), f = e.getValueAtIndexOrDefault(u.color, r));
                    var p,
                        m,
                        b,
                        v,
                        x,
                        w,
                        M,
                        C,
                        D,
                        I,
                        T = "middle",
                        P = "middle";

                    if (g) {
                      h || (P = "top" === n.position ? "bottom" : "top"), T = h ? "right" : "center";
                      var O = i.getPixelForTick(r) + e.aliasPixel(c);
                      D = i.getPixelForTick(r, u.offsetGridLines) + d.labelOffset, I = h ? i.top + 12 : "top" === n.position ? i.bottom - y : i.top + y, p = b = x = M = O, m = V, v = L, w = a.top, C = a.bottom;
                    } else {
                      "left" === n.position ? d.mirror ? (D = i.right + d.padding, T = "left") : (D = i.right - d.padding, T = "right") : d.mirror ? (D = i.left - d.padding, T = "right") : (D = i.left + d.padding, T = "left");
                      var B = i.getPixelForTick(r);
                      B += e.aliasPixel(c), I = i.getPixelForTick(r, u.offsetGridLines), p = _, b = R, x = a.left, M = a.right, m = v = w = C = B;
                    }

                    F.push({
                      tx1: p,
                      ty1: m,
                      tx2: b,
                      ty2: v,
                      x1: x,
                      y1: w,
                      x2: M,
                      y2: C,
                      labelX: D,
                      labelY: I,
                      glWidth: c,
                      glColor: f,
                      glBorderDash: k,
                      glBorderDashOffset: S,
                      rotation: -1 * A,
                      label: t,
                      textBaseline: P,
                      textAlign: T
                    });
                  }
                }
              }), e.each(F, function (t) {
                if (u.display && (l.save(), l.lineWidth = t.glWidth, l.strokeStyle = t.glColor, l.setLineDash && (l.setLineDash(t.glBorderDash), l.lineDashOffset = t.glBorderDashOffset), l.beginPath(), u.drawTicks && (l.moveTo(t.tx1, t.ty1), l.lineTo(t.tx2, t.ty2)), u.drawOnChartArea && (l.moveTo(t.x1, t.y1), l.lineTo(t.x2, t.y2)), l.stroke(), l.restore()), d.display) {
                  l.save(), l.translate(t.labelX, t.labelY), l.rotate(t.rotation), l.font = x, l.textBaseline = t.textBaseline, l.textAlign = t.textAlign;
                  var a = t.label;
                  if (e.isArray(a)) for (var i = 0, n = -(a.length - 1) * m * .75; i < a.length; ++i) {
                    l.fillText("" + a[i], 0, n), n += 1.5 * m;
                  } else l.fillText(a, 0, 0);
                  l.restore();
                }
              }), c.display) {
                var O,
                    B,
                    W = 0;
                if (g) O = i.left + (i.right - i.left) / 2, B = "bottom" === n.position ? i.bottom - M / 2 : i.top + M / 2;else {
                  var z = "left" === n.position;
                  O = z ? i.left + M / 2 : i.right - M / 2, B = i.top + (i.bottom - i.top) / 2, W = z ? -.5 * Math.PI : .5 * Math.PI;
                }
                l.save(), l.translate(O, B), l.rotate(W), l.textAlign = "center", l.textBaseline = "middle", l.fillStyle = w, l.font = I, l.fillText(c.labelString, 0, 0), l.restore();
              }

              if (u.drawBorder) {
                l.lineWidth = e.getValueAtIndexOrDefault(u.lineWidth, 0), l.strokeStyle = e.getValueAtIndexOrDefault(u.color, 0);
                var N = i.left,
                    E = i.right,
                    H = i.top,
                    U = i.bottom,
                    j = e.aliasPixel(l.lineWidth);
                g ? (H = U = "top" === n.position ? i.bottom : i.top, H += j, U += j) : (N = E = "left" === n.position ? i.right : i.left, N += j, E += j), l.beginPath(), l.moveTo(N, H), l.lineTo(E, U), l.stroke();
              }
            }
          }
        });
      };
    }, {}],
    33: [function (t, e, a) {
      "use strict";

      e.exports = function (t) {
        var e = t.helpers;
        t.scaleService = {
          constructors: {},
          defaults: {},
          registerScaleType: function registerScaleType(t, a, i) {
            this.constructors[t] = a, this.defaults[t] = e.clone(i);
          },
          getScaleConstructor: function getScaleConstructor(t) {
            return this.constructors.hasOwnProperty(t) ? this.constructors[t] : void 0;
          },
          getScaleDefaults: function getScaleDefaults(a) {
            return this.defaults.hasOwnProperty(a) ? e.scaleMerge(t.defaults.scale, this.defaults[a]) : {};
          },
          updateScaleDefaults: function updateScaleDefaults(t, a) {
            var i = this.defaults;
            i.hasOwnProperty(t) && (i[t] = e.extend(i[t], a));
          },
          addScalesToLayout: function addScalesToLayout(a) {
            e.each(a.scales, function (e) {
              t.layoutService.addBox(a, e);
            });
          }
        };
      };
    }, {}],
    34: [function (t, e, a) {
      "use strict";

      e.exports = function (t) {
        var e = t.helpers;
        t.Ticks = {
          generators: {
            linear: function linear(t, a) {
              var i,
                  n = [];
              if (t.stepSize && t.stepSize > 0) i = t.stepSize;else {
                var o = e.niceNum(a.max - a.min, !1);
                i = e.niceNum(o / (t.maxTicks - 1), !0);
              }
              var r = Math.floor(a.min / i) * i,
                  l = Math.ceil(a.max / i) * i;

              if (t.min && t.max && t.stepSize) {
                var s = (t.max - t.min) % t.stepSize === 0;
                s && (r = t.min, l = t.max);
              }

              var d = (l - r) / i;
              d = e.almostEquals(d, Math.round(d), i / 1e3) ? Math.round(d) : Math.ceil(d), n.push(void 0 !== t.min ? t.min : r);

              for (var u = 1; d > u; ++u) {
                n.push(r + u * i);
              }

              return n.push(void 0 !== t.max ? t.max : l), n;
            },
            logarithmic: function logarithmic(t, a) {
              for (var i = [], n = e.getValueOrDefault, o = n(t.min, Math.pow(10, Math.floor(e.log10(a.min)))); o < a.max;) {
                i.push(o);
                var r, l;
                0 === o ? (r = Math.floor(e.log10(a.minNotZero)), l = Math.round(a.minNotZero / Math.pow(10, r))) : (r = Math.floor(e.log10(o)), l = Math.floor(o / Math.pow(10, r)) + 1), 10 === l && (l = 1, ++r), o = l * Math.pow(10, r);
              }

              var s = n(t.max, o);
              return i.push(s), i;
            }
          },
          formatters: {
            values: function values(t) {
              return e.isArray(t) ? t : "" + t;
            },
            linear: function linear(t, a, i) {
              var n = i.length > 3 ? i[2] - i[1] : i[1] - i[0];
              Math.abs(n) > 1 && t !== Math.floor(t) && (n = t - Math.floor(t));
              var o = e.log10(Math.abs(n)),
                  r = "";

              if (0 !== t) {
                var l = -1 * Math.floor(o);
                l = Math.max(Math.min(l, 20), 0), r = t.toFixed(l);
              } else r = "0";

              return r;
            },
            logarithmic: function logarithmic(t, a, i) {
              var n = t / Math.pow(10, Math.floor(e.log10(t)));
              return 0 === t ? "0" : 1 === n || 2 === n || 5 === n || 0 === a || a === i.length - 1 ? t.toExponential() : "";
            }
          }
        };
      };
    }, {}],
    35: [function (t, e, a) {
      "use strict";

      e.exports = function (t) {
        var e = t.helpers;
        t.defaults.global.title = {
          display: !1,
          position: "top",
          fullWidth: !0,
          fontStyle: "bold",
          padding: 10,
          text: ""
        };
        var a = e.noop;
        t.Title = t.Element.extend({
          initialize: function initialize(a) {
            var i = this;
            e.extend(i, a), i.options = e.configMerge(t.defaults.global.title, a.options), i.legendHitBoxes = [];
          },
          beforeUpdate: function beforeUpdate() {
            var a = this.chart.options;
            a && a.title && (this.options = e.configMerge(t.defaults.global.title, a.title));
          },
          update: function update(t, e, a) {
            var i = this;
            return i.beforeUpdate(), i.maxWidth = t, i.maxHeight = e, i.margins = a, i.beforeSetDimensions(), i.setDimensions(), i.afterSetDimensions(), i.beforeBuildLabels(), i.buildLabels(), i.afterBuildLabels(), i.beforeFit(), i.fit(), i.afterFit(), i.afterUpdate(), i.minSize;
          },
          afterUpdate: a,
          beforeSetDimensions: a,
          setDimensions: function setDimensions() {
            var t = this;
            t.isHorizontal() ? (t.width = t.maxWidth, t.left = 0, t.right = t.width) : (t.height = t.maxHeight, t.top = 0, t.bottom = t.height), t.paddingLeft = 0, t.paddingTop = 0, t.paddingRight = 0, t.paddingBottom = 0, t.minSize = {
              width: 0,
              height: 0
            };
          },
          afterSetDimensions: a,
          beforeBuildLabels: a,
          buildLabels: a,
          afterBuildLabels: a,
          beforeFit: a,
          fit: function fit() {
            var a = this,
                i = e.getValueOrDefault,
                n = a.options,
                o = t.defaults.global,
                r = n.display,
                l = i(n.fontSize, o.defaultFontSize),
                s = a.minSize;
            a.isHorizontal() ? (s.width = a.maxWidth, s.height = r ? l + 2 * n.padding : 0) : (s.width = r ? l + 2 * n.padding : 0, s.height = a.maxHeight), a.width = s.width, a.height = s.height;
          },
          afterFit: a,
          isHorizontal: function isHorizontal() {
            var t = this.options.position;
            return "top" === t || "bottom" === t;
          },
          draw: function draw() {
            var a = this,
                i = a.ctx,
                n = e.getValueOrDefault,
                o = a.options,
                r = t.defaults.global;

            if (o.display) {
              var l,
                  s,
                  d,
                  u = n(o.fontSize, r.defaultFontSize),
                  c = n(o.fontStyle, r.defaultFontStyle),
                  h = n(o.fontFamily, r.defaultFontFamily),
                  f = e.fontString(u, c, h),
                  g = 0,
                  p = a.top,
                  m = a.left,
                  b = a.bottom,
                  v = a.right;
              i.fillStyle = n(o.fontColor, r.defaultFontColor), i.font = f, a.isHorizontal() ? (l = m + (v - m) / 2, s = p + (b - p) / 2, d = v - m) : (l = "left" === o.position ? m + u / 2 : v - u / 2, s = p + (b - p) / 2, d = b - p, g = Math.PI * ("left" === o.position ? -.5 : .5)), i.save(), i.translate(l, s), i.rotate(g), i.textAlign = "center", i.textBaseline = "middle", i.fillText(o.text, 0, 0, d), i.restore();
            }
          }
        }), t.plugins.register({
          beforeInit: function beforeInit(e) {
            var a = e.options,
                i = a.title;
            i && (e.titleBlock = new t.Title({
              ctx: e.chart.ctx,
              options: i,
              chart: e
            }), t.layoutService.addBox(e, e.titleBlock));
          }
        });
      };
    }, {}],
    36: [function (t, e, a) {
      "use strict";

      e.exports = function (t) {
        function e(t, e) {
          var a = s.color(t);
          return a.alpha(e * a.alpha()).rgbaString();
        }

        function a(t, e) {
          return e && (s.isArray(e) ? Array.prototype.push.apply(t, e) : t.push(e)), t;
        }

        function i(t) {
          var e = t._xScale,
              a = t._yScale || t._scale,
              i = t._index,
              n = t._datasetIndex;
          return {
            xLabel: e ? e.getLabelForIndex(i, n) : "",
            yLabel: a ? a.getLabelForIndex(i, n) : "",
            index: i,
            datasetIndex: n,
            x: t._model.x,
            y: t._model.y
          };
        }

        function n(e) {
          var a = t.defaults.global,
              i = s.getValueOrDefault;
          return {
            xPadding: e.xPadding,
            yPadding: e.yPadding,
            xAlign: e.xAlign,
            yAlign: e.yAlign,
            bodyFontColor: e.bodyFontColor,
            _bodyFontFamily: i(e.bodyFontFamily, a.defaultFontFamily),
            _bodyFontStyle: i(e.bodyFontStyle, a.defaultFontStyle),
            _bodyAlign: e.bodyAlign,
            bodyFontSize: i(e.bodyFontSize, a.defaultFontSize),
            bodySpacing: e.bodySpacing,
            titleFontColor: e.titleFontColor,
            _titleFontFamily: i(e.titleFontFamily, a.defaultFontFamily),
            _titleFontStyle: i(e.titleFontStyle, a.defaultFontStyle),
            titleFontSize: i(e.titleFontSize, a.defaultFontSize),
            _titleAlign: e.titleAlign,
            titleSpacing: e.titleSpacing,
            titleMarginBottom: e.titleMarginBottom,
            footerFontColor: e.footerFontColor,
            _footerFontFamily: i(e.footerFontFamily, a.defaultFontFamily),
            _footerFontStyle: i(e.footerFontStyle, a.defaultFontStyle),
            footerFontSize: i(e.footerFontSize, a.defaultFontSize),
            _footerAlign: e.footerAlign,
            footerSpacing: e.footerSpacing,
            footerMarginTop: e.footerMarginTop,
            caretSize: e.caretSize,
            cornerRadius: e.cornerRadius,
            backgroundColor: e.backgroundColor,
            opacity: 0,
            legendColorBackground: e.multiKeyBackground,
            displayColors: e.displayColors
          };
        }

        function o(t, e) {
          var a = t._chart.ctx,
              i = 2 * e.yPadding,
              n = 0,
              o = e.body,
              r = o.reduce(function (t, e) {
            return t + e.before.length + e.lines.length + e.after.length;
          }, 0);
          r += e.beforeBody.length + e.afterBody.length;
          var l = e.title.length,
              d = e.footer.length,
              u = e.titleFontSize,
              c = e.bodyFontSize,
              h = e.footerFontSize;
          i += l * u, i += l ? (l - 1) * e.titleSpacing : 0, i += l ? e.titleMarginBottom : 0, i += r * c, i += r ? (r - 1) * e.bodySpacing : 0, i += d ? e.footerMarginTop : 0, i += d * h, i += d ? (d - 1) * e.footerSpacing : 0;

          var f = 0,
              g = function g(t) {
            n = Math.max(n, a.measureText(t).width + f);
          };

          return a.font = s.fontString(u, e._titleFontStyle, e._titleFontFamily), s.each(e.title, g), a.font = s.fontString(c, e._bodyFontStyle, e._bodyFontFamily), s.each(e.beforeBody.concat(e.afterBody), g), f = e.displayColors ? c + 2 : 0, s.each(o, function (t) {
            s.each(t.before, g), s.each(t.lines, g), s.each(t.after, g);
          }), f = 0, a.font = s.fontString(h, e._footerFontStyle, e._footerFontFamily), s.each(e.footer, g), n += 2 * e.xPadding, {
            width: n,
            height: i
          };
        }

        function r(t, e) {
          var a = t._model,
              i = t._chart,
              n = t._chartInstance.chartArea,
              o = "center",
              r = "center";
          a.y < e.height ? r = "top" : a.y > i.height - e.height && (r = "bottom");
          var l,
              s,
              d,
              u,
              c,
              h = (n.left + n.right) / 2,
              f = (n.top + n.bottom) / 2;
          "center" === r ? (l = function l(t) {
            return h >= t;
          }, s = function s(t) {
            return t > h;
          }) : (l = function l(t) {
            return t <= e.width / 2;
          }, s = function s(t) {
            return t >= i.width - e.width / 2;
          }), d = function d(t) {
            return t + e.width > i.width;
          }, u = function u(t) {
            return t - e.width < 0;
          }, c = function c(t) {
            return f >= t ? "top" : "bottom";
          }, l(a.x) ? (o = "left", d(a.x) && (o = "center", r = c(a.y))) : s(a.x) && (o = "right", u(a.x) && (o = "center", r = c(a.y)));
          var g = t._options;
          return {
            xAlign: g.xAlign ? g.xAlign : o,
            yAlign: g.yAlign ? g.yAlign : r
          };
        }

        function l(t, e, a) {
          var i = t.x,
              n = t.y,
              o = t.caretSize,
              r = t.caretPadding,
              l = t.cornerRadius,
              s = a.xAlign,
              d = a.yAlign,
              u = o + r,
              c = l + r;
          return "right" === s ? i -= e.width : "center" === s && (i -= e.width / 2), "top" === d ? n += u : n -= "bottom" === d ? e.height + u : e.height / 2, "center" === d ? "left" === s ? i += u : "right" === s && (i -= u) : "left" === s ? i -= c : "right" === s && (i += c), {
            x: i,
            y: n
          };
        }

        var s = t.helpers;
        t.defaults.global.tooltips = {
          enabled: !0,
          custom: null,
          mode: "nearest",
          position: "average",
          intersect: !0,
          backgroundColor: "rgba(0,0,0,0.8)",
          titleFontStyle: "bold",
          titleSpacing: 2,
          titleMarginBottom: 6,
          titleFontColor: "#fff",
          titleAlign: "left",
          bodySpacing: 2,
          bodyFontColor: "#fff",
          bodyAlign: "left",
          footerFontStyle: "bold",
          footerSpacing: 2,
          footerMarginTop: 6,
          footerFontColor: "#fff",
          footerAlign: "left",
          yPadding: 6,
          xPadding: 6,
          caretSize: 5,
          cornerRadius: 6,
          multiKeyBackground: "#fff",
          displayColors: !0,
          callbacks: {
            beforeTitle: s.noop,
            title: function title(t, e) {
              var a = "",
                  i = e.labels,
                  n = i ? i.length : 0;

              if (t.length > 0) {
                var o = t[0];
                o.xLabel ? a = o.xLabel : n > 0 && o.index < n && (a = i[o.index]);
              }

              return a;
            },
            afterTitle: s.noop,
            beforeBody: s.noop,
            beforeLabel: s.noop,
            label: function label(t, e) {
              var a = e.datasets[t.datasetIndex].label || "";
              return a + ": " + t.yLabel;
            },
            labelColor: function labelColor(t, e) {
              var a = e.getDatasetMeta(t.datasetIndex),
                  i = a.data[t.index],
                  n = i._view;
              return {
                borderColor: n.borderColor,
                backgroundColor: n.backgroundColor
              };
            },
            afterLabel: s.noop,
            afterBody: s.noop,
            beforeFooter: s.noop,
            footer: s.noop,
            afterFooter: s.noop
          }
        }, t.Tooltip = t.Element.extend({
          initialize: function initialize() {
            this._model = n(this._options);
          },
          getTitle: function getTitle() {
            var t = this,
                e = t._options,
                i = e.callbacks,
                n = i.beforeTitle.apply(t, arguments),
                o = i.title.apply(t, arguments),
                r = i.afterTitle.apply(t, arguments),
                l = [];
            return l = a(l, n), l = a(l, o), l = a(l, r);
          },
          getBeforeBody: function getBeforeBody() {
            var t = this._options.callbacks.beforeBody.apply(this, arguments);

            return s.isArray(t) ? t : void 0 !== t ? [t] : [];
          },
          getBody: function getBody(t, e) {
            var i = this,
                n = i._options.callbacks,
                o = [];
            return s.each(t, function (t) {
              var r = {
                before: [],
                lines: [],
                after: []
              };
              a(r.before, n.beforeLabel.call(i, t, e)), a(r.lines, n.label.call(i, t, e)), a(r.after, n.afterLabel.call(i, t, e)), o.push(r);
            }), o;
          },
          getAfterBody: function getAfterBody() {
            var t = this._options.callbacks.afterBody.apply(this, arguments);

            return s.isArray(t) ? t : void 0 !== t ? [t] : [];
          },
          getFooter: function getFooter() {
            var t = this,
                e = t._options.callbacks,
                i = e.beforeFooter.apply(t, arguments),
                n = e.footer.apply(t, arguments),
                o = e.afterFooter.apply(t, arguments),
                r = [];
            return r = a(r, i), r = a(r, n), r = a(r, o);
          },
          update: function update(e) {
            var a,
                d,
                u = this,
                c = u._options,
                h = u._model,
                f = u._model = n(c),
                g = u._active,
                p = u._data,
                m = u._chartInstance,
                b = {
              xAlign: h.xAlign,
              yAlign: h.yAlign
            },
                v = {
              x: h.x,
              y: h.y
            },
                x = {
              width: h.width,
              height: h.height
            },
                y = {
              x: h.caretX,
              y: h.caretY
            };

            if (g.length) {
              f.opacity = 1;
              var k = [];
              y = t.Tooltip.positioners[c.position](g, u._eventPosition);
              var S = [];

              for (a = 0, d = g.length; d > a; ++a) {
                S.push(i(g[a]));
              }

              c.filter && (S = S.filter(function (t) {
                return c.filter(t, p);
              })), c.itemSort && (S = S.sort(function (t, e) {
                return c.itemSort(t, e, p);
              })), s.each(S, function (t) {
                k.push(c.callbacks.labelColor.call(u, t, m));
              }), f.title = u.getTitle(S, p), f.beforeBody = u.getBeforeBody(S, p), f.body = u.getBody(S, p), f.afterBody = u.getAfterBody(S, p), f.footer = u.getFooter(S, p), f.x = Math.round(y.x), f.y = Math.round(y.y), f.caretPadding = s.getValueOrDefault(y.padding, 2), f.labelColors = k, f.dataPoints = S, x = o(this, f), b = r(this, x), v = l(f, x, b);
            } else f.opacity = 0;

            return f.xAlign = b.xAlign, f.yAlign = b.yAlign, f.x = v.x, f.y = v.y, f.width = x.width, f.height = x.height, f.caretX = y.x, f.caretY = y.y, u._model = f, e && c.custom && c.custom.call(u, f), u;
          },
          drawCaret: function drawCaret(t, a, i) {
            var n,
                o,
                r,
                l,
                s,
                d,
                u = this._view,
                c = this._chart.ctx,
                h = u.caretSize,
                f = u.cornerRadius,
                g = u.xAlign,
                p = u.yAlign,
                m = t.x,
                b = t.y,
                v = a.width,
                x = a.height;
            "center" === p ? ("left" === g ? (n = m, o = n - h, r = n) : (n = m + v, o = n + h, r = n), s = b + x / 2, l = s - h, d = s + h) : ("left" === g ? (n = m + f, o = n + h, r = o + h) : "right" === g ? (n = m + v - f, o = n - h, r = o - h) : (o = m + v / 2, n = o - h, r = o + h), "top" === p ? (l = b, s = l - h, d = l) : (l = b + x, s = l + h, d = l)), c.fillStyle = e(u.backgroundColor, i), c.beginPath(), c.moveTo(n, l), c.lineTo(o, s), c.lineTo(r, d), c.closePath(), c.fill();
          },
          drawTitle: function drawTitle(t, a, i, n) {
            var o = a.title;

            if (o.length) {
              i.textAlign = a._titleAlign, i.textBaseline = "top";
              var r = a.titleFontSize,
                  l = a.titleSpacing;
              i.fillStyle = e(a.titleFontColor, n), i.font = s.fontString(r, a._titleFontStyle, a._titleFontFamily);
              var d, u;

              for (d = 0, u = o.length; u > d; ++d) {
                i.fillText(o[d], t.x, t.y), t.y += r + l, d + 1 === o.length && (t.y += a.titleMarginBottom - l);
              }
            }
          },
          drawBody: function drawBody(t, a, i, n) {
            var o = a.bodyFontSize,
                r = a.bodySpacing,
                l = a.body;
            i.textAlign = a._bodyAlign, i.textBaseline = "top";
            var d = e(a.bodyFontColor, n);
            i.fillStyle = d, i.font = s.fontString(o, a._bodyFontStyle, a._bodyFontFamily);

            var u = 0,
                c = function c(e) {
              i.fillText(e, t.x + u, t.y), t.y += o + r;
            };

            s.each(a.beforeBody, c);
            var h = a.displayColors;
            u = h ? o + 2 : 0, s.each(l, function (r, l) {
              s.each(r.before, c), s.each(r.lines, function (r) {
                h && (i.fillStyle = e(a.legendColorBackground, n), i.fillRect(t.x, t.y, o, o), i.strokeStyle = e(a.labelColors[l].borderColor, n), i.strokeRect(t.x, t.y, o, o), i.fillStyle = e(a.labelColors[l].backgroundColor, n), i.fillRect(t.x + 1, t.y + 1, o - 2, o - 2), i.fillStyle = d), c(r);
              }), s.each(r.after, c);
            }), u = 0, s.each(a.afterBody, c), t.y -= r;
          },
          drawFooter: function drawFooter(t, a, i, n) {
            var o = a.footer;
            o.length && (t.y += a.footerMarginTop, i.textAlign = a._footerAlign, i.textBaseline = "top", i.fillStyle = e(a.footerFontColor, n), i.font = s.fontString(a.footerFontSize, a._footerFontStyle, a._footerFontFamily), s.each(o, function (e) {
              i.fillText(e, t.x, t.y), t.y += a.footerFontSize + a.footerSpacing;
            }));
          },
          drawBackground: function drawBackground(t, a, i, n, o) {
            i.fillStyle = e(a.backgroundColor, o), s.drawRoundedRectangle(i, t.x, t.y, n.width, n.height, a.cornerRadius), i.fill();
          },
          draw: function draw() {
            var t = this._chart.ctx,
                e = this._view;

            if (0 !== e.opacity) {
              var a = {
                width: e.width,
                height: e.height
              },
                  i = {
                x: e.x,
                y: e.y
              },
                  n = Math.abs(e.opacity < .001) ? 0 : e.opacity;
              this._options.enabled && (this.drawBackground(i, e, t, a, n), this.drawCaret(i, a, n), i.x += e.xPadding, i.y += e.yPadding, this.drawTitle(i, e, t, n), this.drawBody(i, e, t, n), this.drawFooter(i, e, t, n));
            }
          },
          handleEvent: function handleEvent(t) {
            var e = this,
                a = e._options,
                i = !1;

            if (e._lastActive = e._lastActive || [], "mouseout" === t.type ? e._active = [] : e._active = e._chartInstance.getElementsAtEventForMode(t, a.mode, a), i = !s.arrayEquals(e._active, e._lastActive), e._lastActive = e._active, a.enabled || a.custom) {
              e._eventPosition = s.getRelativePosition(t, e._chart);
              var n = e._model;
              e.update(!0), e.pivot(), i |= n.x !== e._model.x || n.y !== e._model.y;
            }

            return i;
          }
        }), t.Tooltip.positioners = {
          average: function average(t) {
            if (!t.length) return !1;
            var e,
                a,
                i = 0,
                n = 0,
                o = 0;

            for (e = 0, a = t.length; a > e; ++e) {
              var r = t[e];

              if (r && r.hasValue()) {
                var l = r.tooltipPosition();
                i += l.x, n += l.y, ++o;
              }
            }

            return {
              x: Math.round(i / o),
              y: Math.round(n / o)
            };
          },
          nearest: function nearest(t, e) {
            var a,
                i,
                n,
                o = e.x,
                r = e.y,
                l = Number.POSITIVE_INFINITY;

            for (i = 0, n = t.length; n > i; ++i) {
              var d = t[i];

              if (d && d.hasValue()) {
                var u = d.getCenterPoint(),
                    c = s.distanceBetweenPoints(e, u);
                l > c && (l = c, a = d);
              }
            }

            if (a) {
              var h = a.tooltipPosition();
              o = h.x, r = h.y;
            }

            return {
              x: o,
              y: r
            };
          }
        };
      };
    }, {}],
    37: [function (t, e, a) {
      "use strict";

      e.exports = function (t) {
        var e = t.helpers,
            a = t.defaults.global;
        a.elements.arc = {
          backgroundColor: a.defaultColor,
          borderColor: "#fff",
          borderWidth: 2
        }, t.elements.Arc = t.Element.extend({
          inLabelRange: function inLabelRange(t) {
            var e = this._view;
            return e ? Math.pow(t - e.x, 2) < Math.pow(e.radius + e.hoverRadius, 2) : !1;
          },
          inRange: function inRange(t, a) {
            var i = this._view;

            if (i) {
              for (var n = e.getAngleFromPoint(i, {
                x: t,
                y: a
              }), o = n.angle, r = n.distance, l = i.startAngle, s = i.endAngle; l > s;) {
                s += 2 * Math.PI;
              }

              for (; o > s;) {
                o -= 2 * Math.PI;
              }

              for (; l > o;) {
                o += 2 * Math.PI;
              }

              var d = o >= l && s >= o,
                  u = r >= i.innerRadius && r <= i.outerRadius;
              return d && u;
            }

            return !1;
          },
          getCenterPoint: function getCenterPoint() {
            var t = this._view,
                e = (t.startAngle + t.endAngle) / 2,
                a = (t.innerRadius + t.outerRadius) / 2;
            return {
              x: t.x + Math.cos(e) * a,
              y: t.y + Math.sin(e) * a
            };
          },
          getArea: function getArea() {
            var t = this._view;
            return Math.PI * ((t.endAngle - t.startAngle) / (2 * Math.PI)) * (Math.pow(t.outerRadius, 2) - Math.pow(t.innerRadius, 2));
          },
          tooltipPosition: function tooltipPosition() {
            var t = this._view,
                e = t.startAngle + (t.endAngle - t.startAngle) / 2,
                a = (t.outerRadius - t.innerRadius) / 2 + t.innerRadius;
            return {
              x: t.x + Math.cos(e) * a,
              y: t.y + Math.sin(e) * a
            };
          },
          draw: function draw() {
            var t = this._chart.ctx,
                e = this._view,
                a = e.startAngle,
                i = e.endAngle;
            t.beginPath(), t.arc(e.x, e.y, e.outerRadius, a, i), t.arc(e.x, e.y, e.innerRadius, i, a, !0), t.closePath(), t.strokeStyle = e.borderColor, t.lineWidth = e.borderWidth, t.fillStyle = e.backgroundColor, t.fill(), t.lineJoin = "bevel", e.borderWidth && t.stroke();
          }
        });
      };
    }, {}],
    38: [function (t, e, a) {
      "use strict";

      e.exports = function (t) {
        var e = t.helpers,
            a = t.defaults.global;
        t.defaults.global.elements.line = {
          tension: .4,
          backgroundColor: a.defaultColor,
          borderWidth: 3,
          borderColor: a.defaultColor,
          borderCapStyle: "butt",
          borderDash: [],
          borderDashOffset: 0,
          borderJoinStyle: "miter",
          capBezierPoints: !0,
          fill: !0
        }, t.elements.Line = t.Element.extend({
          draw: function draw() {
            function t(t, e) {
              var a = e._view;
              e._view.steppedLine === !0 ? (s.lineTo(a.x, t._view.y), s.lineTo(a.x, a.y)) : 0 === e._view.tension ? s.lineTo(a.x, a.y) : s.bezierCurveTo(t._view.controlPointNextX, t._view.controlPointNextY, a.controlPointPreviousX, a.controlPointPreviousY, a.x, a.y);
            }

            var i = this,
                n = i._view,
                o = n.spanGaps,
                r = n.scaleZero,
                l = i._loop;
            l || ("top" === n.fill ? r = n.scaleTop : "bottom" === n.fill && (r = n.scaleBottom));
            var s = i._chart.ctx;
            s.save();

            var d = i._children.slice(),
                u = -1;

            l && d.length && d.push(d[0]);
            var c, h, f, g;

            if (d.length && n.fill) {
              for (s.beginPath(), c = 0; c < d.length; ++c) {
                h = d[c], f = e.previousItem(d, c), g = h._view, 0 === c ? (l ? s.moveTo(r.x, r.y) : s.moveTo(g.x, r), g.skip || (u = c, s.lineTo(g.x, g.y))) : (f = -1 === u ? f : d[u], g.skip ? o || u !== c - 1 || (l ? s.lineTo(r.x, r.y) : s.lineTo(f._view.x, r)) : (u !== c - 1 ? o && -1 !== u ? t(f, h) : l ? s.lineTo(g.x, g.y) : (s.lineTo(g.x, r), s.lineTo(g.x, g.y)) : t(f, h), u = c));
              }

              l || -1 === u || s.lineTo(d[u]._view.x, r), s.fillStyle = n.backgroundColor || a.defaultColor, s.closePath(), s.fill();
            }

            var p = a.elements.line;

            for (s.lineCap = n.borderCapStyle || p.borderCapStyle, s.setLineDash && s.setLineDash(n.borderDash || p.borderDash), s.lineDashOffset = n.borderDashOffset || p.borderDashOffset, s.lineJoin = n.borderJoinStyle || p.borderJoinStyle, s.lineWidth = n.borderWidth || p.borderWidth, s.strokeStyle = n.borderColor || a.defaultColor, s.beginPath(), u = -1, c = 0; c < d.length; ++c) {
              h = d[c], f = e.previousItem(d, c), g = h._view, 0 === c ? g.skip || (s.moveTo(g.x, g.y), u = c) : (f = -1 === u ? f : d[u], g.skip || (u !== c - 1 && !o || -1 === u ? s.moveTo(g.x, g.y) : t(f, h), u = c));
            }

            s.stroke(), s.restore();
          }
        });
      };
    }, {}],
    39: [function (t, e, a) {
      "use strict";

      e.exports = function (t) {
        function e(t) {
          var e = this._view;
          return e ? Math.pow(t - e.x, 2) < Math.pow(e.radius + e.hitRadius, 2) : !1;
        }

        function a(t) {
          var e = this._view;
          return e ? Math.pow(t - e.y, 2) < Math.pow(e.radius + e.hitRadius, 2) : !1;
        }

        var i = t.helpers,
            n = t.defaults.global,
            o = n.defaultColor;
        n.elements.point = {
          radius: 3,
          pointStyle: "circle",
          backgroundColor: o,
          borderWidth: 1,
          borderColor: o,
          hitRadius: 1,
          hoverRadius: 4,
          hoverBorderWidth: 1
        }, t.elements.Point = t.Element.extend({
          inRange: function inRange(t, e) {
            var a = this._view;
            return a ? Math.pow(t - a.x, 2) + Math.pow(e - a.y, 2) < Math.pow(a.hitRadius + a.radius, 2) : !1;
          },
          inLabelRange: e,
          inXRange: e,
          inYRange: a,
          getCenterPoint: function getCenterPoint() {
            var t = this._view;
            return {
              x: t.x,
              y: t.y
            };
          },
          getArea: function getArea() {
            return Math.PI * Math.pow(this._view.radius, 2);
          },
          tooltipPosition: function tooltipPosition() {
            var t = this._view;
            return {
              x: t.x,
              y: t.y,
              padding: t.radius + t.borderWidth
            };
          },
          draw: function draw() {
            var e = this._view,
                a = this._chart.ctx,
                r = e.pointStyle,
                l = e.radius,
                s = e.x,
                d = e.y;
            e.skip || (a.strokeStyle = e.borderColor || o, a.lineWidth = i.getValueOrDefault(e.borderWidth, n.elements.point.borderWidth), a.fillStyle = e.backgroundColor || o, t.canvasHelpers.drawPoint(a, r, l, s, d));
          }
        });
      };
    }, {}],
    40: [function (t, e, a) {
      "use strict";

      e.exports = function (t) {
        function e(t) {
          return void 0 !== t._view.width;
        }

        function a(t) {
          var a,
              i,
              n,
              o,
              r = t._view;

          if (e(t)) {
            var l = r.width / 2;
            a = r.x - l, i = r.x + l, n = Math.min(r.y, r.base), o = Math.max(r.y, r.base);
          } else {
            var s = r.height / 2;
            a = Math.min(r.x, r.base), i = Math.max(r.x, r.base), n = r.y - s, o = r.y + s;
          }

          return {
            left: a,
            top: n,
            right: i,
            bottom: o
          };
        }

        var i = t.defaults.global;
        i.elements.rectangle = {
          backgroundColor: i.defaultColor,
          borderWidth: 0,
          borderColor: i.defaultColor,
          borderSkipped: "bottom"
        }, t.elements.Rectangle = t.Element.extend({
          draw: function draw() {
            function t(t) {
              return s[(u + t) % 4];
            }

            var e = this._chart.ctx,
                a = this._view,
                i = a.width / 2,
                n = a.x - i,
                o = a.x + i,
                r = a.base - (a.base - a.y),
                l = a.borderWidth / 2;
            a.borderWidth && (n += l, o -= l, r += l), e.beginPath(), e.fillStyle = a.backgroundColor, e.strokeStyle = a.borderColor, e.lineWidth = a.borderWidth;
            var s = [[n, a.base], [n, r], [o, r], [o, a.base]],
                d = ["bottom", "left", "top", "right"],
                u = d.indexOf(a.borderSkipped, 0);
            -1 === u && (u = 0);
            var c = t(0);
            e.moveTo(c[0], c[1]);

            for (var h = 1; 4 > h; h++) {
              c = t(h), e.lineTo(c[0], c[1]);
            }

            e.fill(), a.borderWidth && e.stroke();
          },
          height: function height() {
            var t = this._view;
            return t.base - t.y;
          },
          inRange: function inRange(t, e) {
            var i = !1;

            if (this._view) {
              var n = a(this);
              i = t >= n.left && t <= n.right && e >= n.top && e <= n.bottom;
            }

            return i;
          },
          inLabelRange: function inLabelRange(t, i) {
            var n = this;
            if (!n._view) return !1;
            var o = !1,
                r = a(n);
            return o = e(n) ? t >= r.left && t <= r.right : i >= r.top && i <= r.bottom;
          },
          inXRange: function inXRange(t) {
            var e = a(this);
            return t >= e.left && t <= e.right;
          },
          inYRange: function inYRange(t) {
            var e = a(this);
            return t >= e.top && t <= e.bottom;
          },
          getCenterPoint: function getCenterPoint() {
            var t,
                a,
                i = this._view;
            return e(this) ? (t = i.x, a = (i.y + i.base) / 2) : (t = (i.x + i.base) / 2, a = i.y), {
              x: t,
              y: a
            };
          },
          getArea: function getArea() {
            var t = this._view;
            return t.width * Math.abs(t.y - t.base);
          },
          tooltipPosition: function tooltipPosition() {
            var t = this._view;
            return {
              x: t.x,
              y: t.y
            };
          }
        });
      };
    }, {}],
    41: [function (t, e, a) {
      "use strict";

      e.exports = function (t) {
        var e = t.helpers,
            a = {
          position: "bottom"
        },
            i = t.Scale.extend({
          getLabels: function getLabels() {
            var t = this.chart.data;
            return (this.isHorizontal() ? t.xLabels : t.yLabels) || t.labels;
          },
          determineDataLimits: function determineDataLimits() {
            var t = this,
                a = t.getLabels();
            t.minIndex = 0, t.maxIndex = a.length - 1;
            var i;
            void 0 !== t.options.ticks.min && (i = e.indexOf(a, t.options.ticks.min), t.minIndex = -1 !== i ? i : t.minIndex), void 0 !== t.options.ticks.max && (i = e.indexOf(a, t.options.ticks.max), t.maxIndex = -1 !== i ? i : t.maxIndex), t.min = a[t.minIndex], t.max = a[t.maxIndex];
          },
          buildTicks: function buildTicks() {
            var t = this,
                e = t.getLabels();
            t.ticks = 0 === t.minIndex && t.maxIndex === e.length - 1 ? e : e.slice(t.minIndex, t.maxIndex + 1);
          },
          getLabelForIndex: function getLabelForIndex(t, e) {
            var a = this,
                i = a.chart.data,
                n = a.isHorizontal();
            return i.xLabels && n || i.yLabels && !n ? a.getRightValue(i.datasets[e].data[t]) : a.ticks[t];
          },
          getPixelForValue: function getPixelForValue(t, e, a, i) {
            var n = this,
                o = Math.max(n.maxIndex + 1 - n.minIndex - (n.options.gridLines.offsetGridLines ? 0 : 1), 1);

            if (void 0 !== t && isNaN(e)) {
              var r = n.getLabels(),
                  l = r.indexOf(t);
              e = -1 !== l ? l : e;
            }

            if (n.isHorizontal()) {
              var s = n.width - (n.paddingLeft + n.paddingRight),
                  d = s / o,
                  u = d * (e - n.minIndex) + n.paddingLeft;
              return (n.options.gridLines.offsetGridLines && i || n.maxIndex === n.minIndex && i) && (u += d / 2), n.left + Math.round(u);
            }

            var c = n.height - (n.paddingTop + n.paddingBottom),
                h = c / o,
                f = h * (e - n.minIndex) + n.paddingTop;
            return n.options.gridLines.offsetGridLines && i && (f += h / 2), n.top + Math.round(f);
          },
          getPixelForTick: function getPixelForTick(t, e) {
            return this.getPixelForValue(this.ticks[t], t + this.minIndex, null, e);
          },
          getValueForPixel: function getValueForPixel(t) {
            var e,
                a = this,
                i = Math.max(a.ticks.length - (a.options.gridLines.offsetGridLines ? 0 : 1), 1),
                n = a.isHorizontal(),
                o = n ? a.width - (a.paddingLeft + a.paddingRight) : a.height - (a.paddingTop + a.paddingBottom),
                r = o / i;
            return t -= n ? a.left : a.top, a.options.gridLines.offsetGridLines && (t -= r / 2), t -= n ? a.paddingLeft : a.paddingTop, e = 0 >= t ? 0 : Math.round(t / r);
          },
          getBasePixel: function getBasePixel() {
            return this.bottom;
          }
        });
        t.scaleService.registerScaleType("category", i, a);
      };
    }, {}],
    42: [function (t, e, a) {
      "use strict";

      e.exports = function (t) {
        var e = t.helpers,
            a = {
          position: "left",
          ticks: {
            callback: t.Ticks.formatters.linear
          }
        },
            i = t.LinearScaleBase.extend({
          determineDataLimits: function determineDataLimits() {
            function t(t) {
              return l ? t.xAxisID === a.id : t.yAxisID === a.id;
            }

            var a = this,
                i = a.options,
                n = a.chart,
                o = n.data,
                r = o.datasets,
                l = a.isHorizontal();

            if (a.min = null, a.max = null, i.stacked) {
              var s = {};
              e.each(r, function (o, r) {
                var l = n.getDatasetMeta(r);
                void 0 === s[l.type] && (s[l.type] = {
                  positiveValues: [],
                  negativeValues: []
                });
                var d = s[l.type].positiveValues,
                    u = s[l.type].negativeValues;
                n.isDatasetVisible(r) && t(l) && e.each(o.data, function (t, e) {
                  var n = +a.getRightValue(t);
                  isNaN(n) || l.data[e].hidden || (d[e] = d[e] || 0, u[e] = u[e] || 0, i.relativePoints ? d[e] = 100 : 0 > n ? u[e] += n : d[e] += n);
                });
              }), e.each(s, function (t) {
                var i = t.positiveValues.concat(t.negativeValues),
                    n = e.min(i),
                    o = e.max(i);
                a.min = null === a.min ? n : Math.min(a.min, n), a.max = null === a.max ? o : Math.max(a.max, o);
              });
            } else e.each(r, function (i, o) {
              var r = n.getDatasetMeta(o);
              n.isDatasetVisible(o) && t(r) && e.each(i.data, function (t, e) {
                var i = +a.getRightValue(t);
                isNaN(i) || r.data[e].hidden || (null === a.min ? a.min = i : i < a.min && (a.min = i), null === a.max ? a.max = i : i > a.max && (a.max = i));
              });
            });

            this.handleTickRangeOptions();
          },
          getTickLimit: function getTickLimit() {
            var a,
                i = this,
                n = i.options.ticks;
            if (i.isHorizontal()) a = Math.min(n.maxTicksLimit ? n.maxTicksLimit : 11, Math.ceil(i.width / 50));else {
              var o = e.getValueOrDefault(n.fontSize, t.defaults.global.defaultFontSize);
              a = Math.min(n.maxTicksLimit ? n.maxTicksLimit : 11, Math.ceil(i.height / (2 * o)));
            }
            return a;
          },
          handleDirectionalChanges: function handleDirectionalChanges() {
            this.isHorizontal() || this.ticks.reverse();
          },
          getLabelForIndex: function getLabelForIndex(t, e) {
            return +this.getRightValue(this.chart.data.datasets[e].data[t]);
          },
          getPixelForValue: function getPixelForValue(t) {
            var e,
                a,
                i = this,
                n = i.paddingLeft,
                o = i.paddingBottom,
                r = i.start,
                l = +i.getRightValue(t),
                s = i.end - r;
            return i.isHorizontal() ? (a = i.width - (n + i.paddingRight), e = i.left + a / s * (l - r), Math.round(e + n)) : (a = i.height - (i.paddingTop + o), e = i.bottom - o - a / s * (l - r), Math.round(e));
          },
          getValueForPixel: function getValueForPixel(t) {
            var e = this,
                a = e.isHorizontal(),
                i = e.paddingLeft,
                n = e.paddingBottom,
                o = a ? e.width - (i + e.paddingRight) : e.height - (e.paddingTop + n),
                r = (a ? t - e.left - i : e.bottom - n - t) / o;
            return e.start + (e.end - e.start) * r;
          },
          getPixelForTick: function getPixelForTick(t) {
            return this.getPixelForValue(this.ticksAsNumbers[t]);
          }
        });
        t.scaleService.registerScaleType("linear", i, a);
      };
    }, {}],
    43: [function (t, e, a) {
      "use strict";

      e.exports = function (t) {
        var e = t.helpers,
            a = e.noop;
        t.LinearScaleBase = t.Scale.extend({
          handleTickRangeOptions: function handleTickRangeOptions() {
            var t = this,
                a = t.options,
                i = a.ticks;

            if (i.beginAtZero) {
              var n = e.sign(t.min),
                  o = e.sign(t.max);
              0 > n && 0 > o ? t.max = 0 : n > 0 && o > 0 && (t.min = 0);
            }

            void 0 !== i.min ? t.min = i.min : void 0 !== i.suggestedMin && (t.min = Math.min(t.min, i.suggestedMin)), void 0 !== i.max ? t.max = i.max : void 0 !== i.suggestedMax && (t.max = Math.max(t.max, i.suggestedMax)), t.min === t.max && (t.max++, i.beginAtZero || t.min--);
          },
          getTickLimit: a,
          handleDirectionalChanges: a,
          buildTicks: function buildTicks() {
            var a = this,
                i = a.options,
                n = i.ticks,
                o = a.getTickLimit();
            o = Math.max(2, o);
            var r = {
              maxTicks: o,
              min: n.min,
              max: n.max,
              stepSize: e.getValueOrDefault(n.fixedStepSize, n.stepSize)
            },
                l = a.ticks = t.Ticks.generators.linear(r, a);
            a.handleDirectionalChanges(), a.max = e.max(l), a.min = e.min(l), n.reverse ? (l.reverse(), a.start = a.max, a.end = a.min) : (a.start = a.min, a.end = a.max);
          },
          convertTicksToLabels: function convertTicksToLabels() {
            var e = this;
            e.ticksAsNumbers = e.ticks.slice(), e.zeroLineIndex = e.ticks.indexOf(0), t.Scale.prototype.convertTicksToLabels.call(e);
          }
        });
      };
    }, {}],
    44: [function (t, e, a) {
      "use strict";

      e.exports = function (t) {
        var e = t.helpers,
            a = {
          position: "left",
          ticks: {
            callback: t.Ticks.formatters.logarithmic
          }
        },
            i = t.Scale.extend({
          determineDataLimits: function determineDataLimits() {
            function t(t) {
              return d ? t.xAxisID === a.id : t.yAxisID === a.id;
            }

            var a = this,
                i = a.options,
                n = i.ticks,
                o = a.chart,
                r = o.data,
                l = r.datasets,
                s = e.getValueOrDefault,
                d = a.isHorizontal();

            if (a.min = null, a.max = null, a.minNotZero = null, i.stacked) {
              var u = {};
              e.each(l, function (n, r) {
                var l = o.getDatasetMeta(r);
                o.isDatasetVisible(r) && t(l) && (void 0 === u[l.type] && (u[l.type] = []), e.each(n.data, function (t, e) {
                  var n = u[l.type],
                      o = +a.getRightValue(t);
                  isNaN(o) || l.data[e].hidden || (n[e] = n[e] || 0, i.relativePoints ? n[e] = 100 : n[e] += o);
                }));
              }), e.each(u, function (t) {
                var i = e.min(t),
                    n = e.max(t);
                a.min = null === a.min ? i : Math.min(a.min, i), a.max = null === a.max ? n : Math.max(a.max, n);
              });
            } else e.each(l, function (i, n) {
              var r = o.getDatasetMeta(n);
              o.isDatasetVisible(n) && t(r) && e.each(i.data, function (t, e) {
                var i = +a.getRightValue(t);
                isNaN(i) || r.data[e].hidden || (null === a.min ? a.min = i : i < a.min && (a.min = i), null === a.max ? a.max = i : i > a.max && (a.max = i), 0 !== i && (null === a.minNotZero || i < a.minNotZero) && (a.minNotZero = i));
              });
            });

            a.min = s(n.min, a.min), a.max = s(n.max, a.max), a.min === a.max && (0 !== a.min && null !== a.min ? (a.min = Math.pow(10, Math.floor(e.log10(a.min)) - 1), a.max = Math.pow(10, Math.floor(e.log10(a.max)) + 1)) : (a.min = 1, a.max = 10));
          },
          buildTicks: function buildTicks() {
            var a = this,
                i = a.options,
                n = i.ticks,
                o = {
              min: n.min,
              max: n.max
            },
                r = a.ticks = t.Ticks.generators.logarithmic(o, a);
            a.isHorizontal() || r.reverse(), a.max = e.max(r), a.min = e.min(r), n.reverse ? (r.reverse(), a.start = a.max, a.end = a.min) : (a.start = a.min, a.end = a.max);
          },
          convertTicksToLabels: function convertTicksToLabels() {
            this.tickValues = this.ticks.slice(), t.Scale.prototype.convertTicksToLabels.call(this);
          },
          getLabelForIndex: function getLabelForIndex(t, e) {
            return +this.getRightValue(this.chart.data.datasets[e].data[t]);
          },
          getPixelForTick: function getPixelForTick(t) {
            return this.getPixelForValue(this.tickValues[t]);
          },
          getPixelForValue: function getPixelForValue(t) {
            var a,
                i,
                n,
                o = this,
                r = o.start,
                l = +o.getRightValue(t),
                s = o.paddingTop,
                d = o.paddingBottom,
                u = o.paddingLeft,
                c = o.options,
                h = c.ticks;
            return o.isHorizontal() ? (n = e.log10(o.end) - e.log10(r), 0 === l ? i = o.left + u : (a = o.width - (u + o.paddingRight), i = o.left + a / n * (e.log10(l) - e.log10(r)), i += u)) : (a = o.height - (s + d), 0 !== r || h.reverse ? 0 === o.end && h.reverse ? (n = e.log10(o.start) - e.log10(o.minNotZero), i = l === o.end ? o.top + s : l === o.minNotZero ? o.top + s + .02 * a : o.top + s + .02 * a + .98 * a / n * (e.log10(l) - e.log10(o.minNotZero))) : (n = e.log10(o.end) - e.log10(r), a = o.height - (s + d), i = o.bottom - d - a / n * (e.log10(l) - e.log10(r))) : (n = e.log10(o.end) - e.log10(o.minNotZero), i = l === r ? o.bottom - d : l === o.minNotZero ? o.bottom - d - .02 * a : o.bottom - d - .02 * a - .98 * a / n * (e.log10(l) - e.log10(o.minNotZero)))), i;
          },
          getValueForPixel: function getValueForPixel(t) {
            var a,
                i,
                n = this,
                o = e.log10(n.end) - e.log10(n.start);
            return n.isHorizontal() ? (i = n.width - (n.paddingLeft + n.paddingRight), a = n.start * Math.pow(10, (t - n.left - n.paddingLeft) * o / i)) : (i = n.height - (n.paddingTop + n.paddingBottom), a = Math.pow(10, (n.bottom - n.paddingBottom - t) * o / i) / n.start), a;
          }
        });
        t.scaleService.registerScaleType("logarithmic", i, a);
      };
    }, {}],
    45: [function (t, e, a) {
      "use strict";

      e.exports = function (t) {
        var e = t.helpers,
            a = t.defaults.global,
            i = {
          display: !0,
          animate: !0,
          lineArc: !1,
          position: "chartArea",
          angleLines: {
            display: !0,
            color: "rgba(0, 0, 0, 0.1)",
            lineWidth: 1
          },
          ticks: {
            showLabelBackdrop: !0,
            backdropColor: "rgba(255,255,255,0.75)",
            backdropPaddingY: 2,
            backdropPaddingX: 2,
            callback: t.Ticks.formatters.linear
          },
          pointLabels: {
            fontSize: 10,
            callback: function callback(t) {
              return t;
            }
          }
        },
            n = t.LinearScaleBase.extend({
          getValueCount: function getValueCount() {
            return this.chart.data.labels.length;
          },
          setDimensions: function setDimensions() {
            var t = this,
                i = t.options,
                n = i.ticks;
            t.width = t.maxWidth, t.height = t.maxHeight, t.xCenter = Math.round(t.width / 2), t.yCenter = Math.round(t.height / 2);
            var o = e.min([t.height, t.width]),
                r = e.getValueOrDefault(n.fontSize, a.defaultFontSize);
            t.drawingArea = i.display ? o / 2 - (r / 2 + n.backdropPaddingY) : o / 2;
          },
          determineDataLimits: function determineDataLimits() {
            var t = this,
                a = t.chart;
            t.min = null, t.max = null, e.each(a.data.datasets, function (i, n) {
              if (a.isDatasetVisible(n)) {
                var o = a.getDatasetMeta(n);
                e.each(i.data, function (e, a) {
                  var i = +t.getRightValue(e);
                  isNaN(i) || o.data[a].hidden || (null === t.min ? t.min = i : i < t.min && (t.min = i), null === t.max ? t.max = i : i > t.max && (t.max = i));
                });
              }
            }), t.handleTickRangeOptions();
          },
          getTickLimit: function getTickLimit() {
            var t = this.options.ticks,
                i = e.getValueOrDefault(t.fontSize, a.defaultFontSize);
            return Math.min(t.maxTicksLimit ? t.maxTicksLimit : 11, Math.ceil(this.drawingArea / (1.5 * i)));
          },
          convertTicksToLabels: function convertTicksToLabels() {
            var e = this;
            t.LinearScaleBase.prototype.convertTicksToLabels.call(e), e.pointLabels = e.chart.data.labels.map(e.options.pointLabels.callback, e);
          },
          getLabelForIndex: function getLabelForIndex(t, e) {
            return +this.getRightValue(this.chart.data.datasets[e].data[t]);
          },
          fit: function fit() {
            var t,
                i,
                n,
                o,
                r,
                l,
                s,
                d,
                u,
                c,
                h,
                f,
                g = this.options.pointLabels,
                p = e.getValueOrDefault(g.fontSize, a.defaultFontSize),
                m = e.getValueOrDefault(g.fontStyle, a.defaultFontStyle),
                b = e.getValueOrDefault(g.fontFamily, a.defaultFontFamily),
                v = e.fontString(p, m, b),
                x = e.min([this.height / 2 - p - 5, this.width / 2]),
                y = this.width,
                k = 0;

            for (this.ctx.font = v, i = 0; i < this.getValueCount(); i++) {
              t = this.getPointPosition(i, x), n = this.ctx.measureText(this.pointLabels[i] ? this.pointLabels[i] : "").width + 5;
              var S = this.getIndexAngle(i) + Math.PI / 2,
                  w = 360 * S / (2 * Math.PI) % 360;
              0 === w || 180 === w ? (o = n / 2, t.x + o > y && (y = t.x + o, r = i), t.x - o < k && (k = t.x - o, s = i)) : 180 > w ? t.x + n > y && (y = t.x + n, r = i) : t.x - n < k && (k = t.x - n, s = i);
            }

            u = k, c = Math.ceil(y - this.width), l = this.getIndexAngle(r), d = this.getIndexAngle(s), h = c / Math.sin(l + Math.PI / 2), f = u / Math.sin(d + Math.PI / 2), h = e.isNumber(h) ? h : 0, f = e.isNumber(f) ? f : 0, this.drawingArea = Math.round(x - (f + h) / 2), this.setCenterPoint(f, h);
          },
          setCenterPoint: function setCenterPoint(t, e) {
            var a = this,
                i = a.width - e - a.drawingArea,
                n = t + a.drawingArea;
            a.xCenter = Math.round((n + i) / 2 + a.left), a.yCenter = Math.round(a.height / 2 + a.top);
          },
          getIndexAngle: function getIndexAngle(t) {
            var e = 2 * Math.PI / this.getValueCount(),
                a = this.chart.options && this.chart.options.startAngle ? this.chart.options.startAngle : 0,
                i = a * Math.PI * 2 / 360;
            return t * e - Math.PI / 2 + i;
          },
          getDistanceFromCenterForValue: function getDistanceFromCenterForValue(t) {
            var e = this;
            if (null === t) return 0;
            var a = e.drawingArea / (e.max - e.min);
            return e.options.reverse ? (e.max - t) * a : (t - e.min) * a;
          },
          getPointPosition: function getPointPosition(t, e) {
            var a = this,
                i = a.getIndexAngle(t);
            return {
              x: Math.round(Math.cos(i) * e) + a.xCenter,
              y: Math.round(Math.sin(i) * e) + a.yCenter
            };
          },
          getPointPositionForValue: function getPointPositionForValue(t, e) {
            return this.getPointPosition(t, this.getDistanceFromCenterForValue(e));
          },
          getBasePosition: function getBasePosition() {
            var t = this,
                e = t.min,
                a = t.max;
            return t.getPointPositionForValue(0, t.beginAtZero ? 0 : 0 > e && 0 > a ? a : e > 0 && a > 0 ? e : 0);
          },
          draw: function draw() {
            var t = this,
                i = t.options,
                n = i.gridLines,
                o = i.ticks,
                r = i.angleLines,
                l = i.pointLabels,
                s = e.getValueOrDefault;

            if (i.display) {
              var d = t.ctx,
                  u = s(o.fontSize, a.defaultFontSize),
                  c = s(o.fontStyle, a.defaultFontStyle),
                  h = s(o.fontFamily, a.defaultFontFamily),
                  f = e.fontString(u, c, h);

              if (e.each(t.ticks, function (r, l) {
                if (l > 0 || i.reverse) {
                  var c = t.getDistanceFromCenterForValue(t.ticksAsNumbers[l]),
                      h = t.yCenter - c;
                  if (n.display && 0 !== l) if (d.strokeStyle = e.getValueAtIndexOrDefault(n.color, l - 1), d.lineWidth = e.getValueAtIndexOrDefault(n.lineWidth, l - 1), i.lineArc) d.beginPath(), d.arc(t.xCenter, t.yCenter, c, 0, 2 * Math.PI), d.closePath(), d.stroke();else {
                    d.beginPath();

                    for (var g = 0; g < t.getValueCount(); g++) {
                      var p = t.getPointPosition(g, c);
                      0 === g ? d.moveTo(p.x, p.y) : d.lineTo(p.x, p.y);
                    }

                    d.closePath(), d.stroke();
                  }

                  if (o.display) {
                    var m = s(o.fontColor, a.defaultFontColor);

                    if (d.font = f, o.showLabelBackdrop) {
                      var b = d.measureText(r).width;
                      d.fillStyle = o.backdropColor, d.fillRect(t.xCenter - b / 2 - o.backdropPaddingX, h - u / 2 - o.backdropPaddingY, b + 2 * o.backdropPaddingX, u + 2 * o.backdropPaddingY);
                    }

                    d.textAlign = "center", d.textBaseline = "middle", d.fillStyle = m, d.fillText(r, t.xCenter, h);
                  }
                }
              }), !i.lineArc) {
                d.lineWidth = r.lineWidth, d.strokeStyle = r.color;

                for (var g = t.getDistanceFromCenterForValue(i.reverse ? t.min : t.max), p = s(l.fontSize, a.defaultFontSize), m = s(l.fontStyle, a.defaultFontStyle), b = s(l.fontFamily, a.defaultFontFamily), v = e.fontString(p, m, b), x = t.getValueCount() - 1; x >= 0; x--) {
                  if (r.display) {
                    var y = t.getPointPosition(x, g);
                    d.beginPath(), d.moveTo(t.xCenter, t.yCenter), d.lineTo(y.x, y.y), d.stroke(), d.closePath();
                  }

                  var k = t.getPointPosition(x, g + 5),
                      S = s(l.fontColor, a.defaultFontColor);
                  d.font = v, d.fillStyle = S;
                  var w = t.pointLabels,
                      M = this.getIndexAngle(x) + Math.PI / 2,
                      C = 360 * M / (2 * Math.PI) % 360;
                  0 === C || 180 === C ? d.textAlign = "center" : 180 > C ? d.textAlign = "left" : d.textAlign = "right", 90 === C || 270 === C ? d.textBaseline = "middle" : C > 270 || 90 > C ? d.textBaseline = "bottom" : d.textBaseline = "top", d.fillText(w[x] ? w[x] : "", k.x, k.y);
                }
              }
            }
          }
        });
        t.scaleService.registerScaleType("radialLinear", n, i);
      };
    }, {}],
    46: [function (t, e, a) {
      "use strict";

      var i = t(1);
      i = "function" == typeof i ? i : window.moment, e.exports = function (t) {
        var e = t.helpers,
            a = {
          units: [{
            name: "millisecond",
            steps: [1, 2, 5, 10, 20, 50, 100, 250, 500]
          }, {
            name: "second",
            steps: [1, 2, 5, 10, 30]
          }, {
            name: "minute",
            steps: [1, 2, 5, 10, 30]
          }, {
            name: "hour",
            steps: [1, 2, 3, 6, 12]
          }, {
            name: "day",
            steps: [1, 2, 5]
          }, {
            name: "week",
            maxStep: 4
          }, {
            name: "month",
            maxStep: 3
          }, {
            name: "quarter",
            maxStep: 4
          }, {
            name: "year",
            maxStep: !1
          }]
        },
            n = {
          position: "bottom",
          time: {
            parser: !1,
            format: !1,
            unit: !1,
            round: !1,
            displayFormat: !1,
            isoWeekday: !1,
            minUnit: "millisecond",
            displayFormats: {
              millisecond: "h:mm:ss.SSS a",
              second: "h:mm:ss a",
              minute: "h:mm:ss a",
              hour: "MMM D, hA",
              day: "ll",
              week: "ll",
              month: "MMM YYYY",
              quarter: "[Q]Q - YYYY",
              year: "YYYY"
            }
          },
          ticks: {
            autoSkip: !1
          }
        },
            o = t.Scale.extend({
          initialize: function initialize() {
            if (!i) throw new Error("Chart.js - Moment.js could not be found! You must include it before Chart.js to use the time scale. Download at https://momentjs.com");
            t.Scale.prototype.initialize.call(this);
          },
          getLabelMoment: function getLabelMoment(t, e) {
            return null === t || null === e ? null : "undefined" != typeof this.labelMoments[t] ? this.labelMoments[t][e] : null;
          },
          getLabelDiff: function getLabelDiff(t, e) {
            var a = this;
            return null === t || null === e ? null : (void 0 === a.labelDiffs && a.buildLabelDiffs(), "undefined" != typeof a.labelDiffs[t] ? a.labelDiffs[t][e] : null);
          },
          getMomentStartOf: function getMomentStartOf(t) {
            var e = this;
            return "week" === e.options.time.unit && e.options.time.isoWeekday !== !1 ? t.clone().startOf("isoWeek").isoWeekday(e.options.time.isoWeekday) : t.clone().startOf(e.tickUnit);
          },
          determineDataLimits: function determineDataLimits() {
            var t = this;
            t.labelMoments = [];
            var a = [];
            t.chart.data.labels && t.chart.data.labels.length > 0 ? (e.each(t.chart.data.labels, function (e) {
              var i = t.parseTime(e);
              i.isValid() && (t.options.time.round && i.startOf(t.options.time.round), a.push(i));
            }, t), t.firstTick = i.min.call(t, a), t.lastTick = i.max.call(t, a)) : (t.firstTick = null, t.lastTick = null), e.each(t.chart.data.datasets, function (n, o) {
              var r = [],
                  l = t.chart.isDatasetVisible(o);
              "object" == _typeof(n.data[0]) && null !== n.data[0] ? e.each(n.data, function (e) {
                var a = t.parseTime(t.getRightValue(e));
                a.isValid() && (t.options.time.round && a.startOf(t.options.time.round), r.push(a), l && (t.firstTick = null !== t.firstTick ? i.min(t.firstTick, a) : a, t.lastTick = null !== t.lastTick ? i.max(t.lastTick, a) : a));
              }, t) : r = a, t.labelMoments.push(r);
            }, t), t.options.time.min && (t.firstTick = t.parseTime(t.options.time.min)), t.options.time.max && (t.lastTick = t.parseTime(t.options.time.max)), t.firstTick = (t.firstTick || i()).clone(), t.lastTick = (t.lastTick || i()).clone();
          },
          buildLabelDiffs: function buildLabelDiffs() {
            var t = this;
            t.labelDiffs = [];
            var a = [];
            t.chart.data.labels && t.chart.data.labels.length > 0 && e.each(t.chart.data.labels, function (e) {
              var i = t.parseTime(e);
              i.isValid() && (t.options.time.round && i.startOf(t.options.time.round), a.push(i.diff(t.firstTick, t.tickUnit, !0)));
            }, t), e.each(t.chart.data.datasets, function (i) {
              var n = [];
              "object" == _typeof(i.data[0]) && null !== i.data[0] ? e.each(i.data, function (e) {
                var a = t.parseTime(t.getRightValue(e));
                a.isValid() && (t.options.time.round && a.startOf(t.options.time.round), n.push(a.diff(t.firstTick, t.tickUnit, !0)));
              }, t) : n = a, t.labelDiffs.push(n);
            }, t);
          },
          buildTicks: function buildTicks() {
            var i = this;
            i.ctx.save();
            var n = e.getValueOrDefault(i.options.ticks.fontSize, t.defaults.global.defaultFontSize),
                o = e.getValueOrDefault(i.options.ticks.fontStyle, t.defaults.global.defaultFontStyle),
                r = e.getValueOrDefault(i.options.ticks.fontFamily, t.defaults.global.defaultFontFamily),
                l = e.fontString(n, o, r);
            if (i.ctx.font = l, i.ticks = [], i.unitScale = 1, i.scaleSizeInUnits = 0, i.options.time.unit) i.tickUnit = i.options.time.unit || "day", i.displayFormat = i.options.time.displayFormats[i.tickUnit], i.scaleSizeInUnits = i.lastTick.diff(i.firstTick, i.tickUnit, !0), i.unitScale = e.getValueOrDefault(i.options.time.unitStepSize, 1);else {
              var s = i.isHorizontal() ? i.width - (i.paddingLeft + i.paddingRight) : i.height - (i.paddingTop + i.paddingBottom),
                  d = i.tickFormatFunction(i.firstTick, 0, []),
                  u = i.ctx.measureText(d).width,
                  c = Math.cos(e.toRadians(i.options.ticks.maxRotation)),
                  h = Math.sin(e.toRadians(i.options.ticks.maxRotation));
              u = u * c + n * h;
              var f = s / u;
              i.tickUnit = i.options.time.minUnit, i.scaleSizeInUnits = i.lastTick.diff(i.firstTick, i.tickUnit, !0), i.displayFormat = i.options.time.displayFormats[i.tickUnit];

              for (var g = 0, p = a.units[g]; g < a.units.length;) {
                if (i.unitScale = 1, e.isArray(p.steps) && Math.ceil(i.scaleSizeInUnits / f) < e.max(p.steps)) {
                  for (var m = 0; m < p.steps.length; ++m) {
                    if (p.steps[m] >= Math.ceil(i.scaleSizeInUnits / f)) {
                      i.unitScale = e.getValueOrDefault(i.options.time.unitStepSize, p.steps[m]);
                      break;
                    }
                  }

                  break;
                }

                if (p.maxStep === !1 || Math.ceil(i.scaleSizeInUnits / f) < p.maxStep) {
                  i.unitScale = e.getValueOrDefault(i.options.time.unitStepSize, Math.ceil(i.scaleSizeInUnits / f));
                  break;
                }

                ++g, p = a.units[g], i.tickUnit = p.name;
                var b = i.firstTick.diff(i.getMomentStartOf(i.firstTick), i.tickUnit, !0),
                    v = i.getMomentStartOf(i.lastTick.clone().add(1, i.tickUnit)).diff(i.lastTick, i.tickUnit, !0);
                i.scaleSizeInUnits = i.lastTick.diff(i.firstTick, i.tickUnit, !0) + b + v, i.displayFormat = i.options.time.displayFormats[p.name];
              }
            }
            var x;

            if (i.options.time.min ? x = i.getMomentStartOf(i.firstTick) : (i.firstTick = i.getMomentStartOf(i.firstTick), x = i.firstTick), !i.options.time.max) {
              var y = i.getMomentStartOf(i.lastTick),
                  k = y.diff(i.lastTick, i.tickUnit, !0);
              0 > k ? i.lastTick = i.getMomentStartOf(i.lastTick.add(1, i.tickUnit)) : k >= 0 && (i.lastTick = y), i.scaleSizeInUnits = i.lastTick.diff(i.firstTick, i.tickUnit, !0);
            }

            i.options.time.displayFormat && (i.displayFormat = i.options.time.displayFormat), i.ticks.push(i.firstTick.clone());

            for (var S = 1; S <= i.scaleSizeInUnits; ++S) {
              var w = x.clone().add(S, i.tickUnit);
              if (i.options.time.max && w.diff(i.lastTick, i.tickUnit, !0) >= 0) break;
              S % i.unitScale === 0 && i.ticks.push(w);
            }

            var M = i.ticks[i.ticks.length - 1].diff(i.lastTick, i.tickUnit);
            (0 !== M || 0 === i.scaleSizeInUnits) && (i.options.time.max ? (i.ticks.push(i.lastTick.clone()), i.scaleSizeInUnits = i.lastTick.diff(i.ticks[0], i.tickUnit, !0)) : (i.ticks.push(i.lastTick.clone()), i.scaleSizeInUnits = i.lastTick.diff(i.firstTick, i.tickUnit, !0))), i.ctx.restore(), i.labelDiffs = void 0;
          },
          getLabelForIndex: function getLabelForIndex(t, e) {
            var a = this,
                i = a.chart.data.labels && t < a.chart.data.labels.length ? a.chart.data.labels[t] : "";
            return "object" == _typeof(a.chart.data.datasets[e].data[0]) && (i = a.getRightValue(a.chart.data.datasets[e].data[t])), a.options.time.tooltipFormat && (i = a.parseTime(i).format(a.options.time.tooltipFormat)), i;
          },
          tickFormatFunction: function tickFormatFunction(t, a, i) {
            var n = t.format(this.displayFormat),
                o = this.options.ticks,
                r = e.getValueOrDefault(o.callback, o.userCallback);
            return r ? r(n, a, i) : n;
          },
          convertTicksToLabels: function convertTicksToLabels() {
            var t = this;
            t.tickMoments = t.ticks, t.ticks = t.ticks.map(t.tickFormatFunction, t);
          },
          getPixelForValue: function getPixelForValue(t, e, a) {
            var i = this,
                n = null;

            if (void 0 !== e && void 0 !== a && (n = i.getLabelDiff(a, e)), null === n && (t && t.isValid || (t = i.parseTime(i.getRightValue(t))), t && t.isValid && t.isValid() && (n = t.diff(i.firstTick, i.tickUnit, !0))), null !== n) {
              var o = 0 !== n ? n / i.scaleSizeInUnits : n;

              if (i.isHorizontal()) {
                var r = i.width - (i.paddingLeft + i.paddingRight),
                    l = r * o + i.paddingLeft;
                return i.left + Math.round(l);
              }

              var s = i.height - (i.paddingTop + i.paddingBottom),
                  d = s * o + i.paddingTop;
              return i.top + Math.round(d);
            }
          },
          getPixelForTick: function getPixelForTick(t) {
            return this.getPixelForValue(this.tickMoments[t], null, null);
          },
          getValueForPixel: function getValueForPixel(t) {
            var e = this,
                a = e.isHorizontal() ? e.width - (e.paddingLeft + e.paddingRight) : e.height - (e.paddingTop + e.paddingBottom),
                n = (t - (e.isHorizontal() ? e.left + e.paddingLeft : e.top + e.paddingTop)) / a;
            return n *= e.scaleSizeInUnits, e.firstTick.clone().add(i.duration(n, e.tickUnit).asSeconds(), "seconds");
          },
          parseTime: function parseTime(t) {
            var e = this;
            return "string" == typeof e.options.time.parser ? i(t, e.options.time.parser) : "function" == typeof e.options.time.parser ? e.options.time.parser(t) : "function" == typeof t.getMonth || "number" == typeof t ? i(t) : t.isValid && t.isValid() ? t : "string" != typeof e.options.time.format && e.options.time.format.call ? (console.warn("options.time.format is deprecated and replaced by options.time.parser. See http://nnnick.github.io/Chart.js/docs-v2/#scales-time-scale"), e.options.time.format(t)) : i(t, e.options.time.format);
          }
        });
        t.scaleService.registerScaleType("time", o, n);
      };
    }, {
      1: 1
    }]
  }, {}, [7])(7);
});

/***/ }),

/***/ "./resources/mix/js/custom.js":
/*!************************************!*\
  !*** ./resources/mix/js/custom.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
   Template Name: BitVaults | Bitcoin and CryptoCurrency HTML Template
   Author: ThemeFunction
   Author URI: https://themeforest.net/user/themefunction
   Description: BitVaults | Bitcoin and CryptoCurrency HTML Template
   Version: 1.0

   1. Menu Toggle
   2. Main Slider
   3. Currency Slider
   4. Testimonial Slider
   5. Partner Slider
   6. Top News Slider
   7. Converter
   8. Video Popup
   9. Counter Up
   10. Map
   11. Back To Top
   12. Site Search
   13. Contact Form
   14. Owl Sync Slider
   15. Input Increase
   16. Product Slider
   17. Accordion
   18. Gallery
   19. Countdown
   20. Particles
   21. Chart
   22. Progress Bar
   23. Fixed Header

*/
jQuery(function ($) {
  "use strict";

  $(window).on('load', function () {
    menuFixed();
  });
  $(document).ready(function () {
    /* ---------------------------------------------
                   Menu Toggle 
    ------------------------------------------------ */
    if ($(window).width() < 991) {
      $(".navbar-nav li a").on("click", function () {
        $(this).parent("li").find(".dropdown-menu").slideToggle();
        $(this).find("i").toggleClass("fa-angle-up fa-angle-down");
      });
    }
    /* ---------------------------------------------
                   Main Slider 
    ------------------------------------------------ */


    if ($('.slide-carousel').length > 0) {
      $('.slide-carousel').owlCarousel({
        items: 1,
        loop: true,
        smartSpeed: 900,
        nav: false,
        navText: ['<i class="icon icon-arrow-left"></i>', '<i class="icon icon-arrow-right"></i>'],
        dots: true
      });
    }
    /* ---------------------------------------------
                   Currency Slider 
    ------------------------------------------------ */


    if ($('.currency-carousel').length > 0) {
      $('.currency-carousel').owlCarousel({
        items: 10,
        loop: true,
        autoplay: true,
        autoplayTimeout: 1000,
        smartSpeed: 900,
        nav: false,
        navText: ['<i class="icon icon-arrow-left"></i>', '<i class="icon icon-arrow-right"></i>'],
        dots: false,
        responsiveClass: true,
        autoplayHoverPause: true,
        responsive: {
          0: {
            items: 3,
            dots: false,
            nav: false
          },
          600: {
            items: 6,
            dots: false,
            nav: false
          },
          1000: {
            items: 10,
            dots: false,
            nav: false
          }
        }
      });
    }
    /* ---------------------------------------------
                   Testimonial Slider 
    ------------------------------------------------ */


    if ($('.testimonial-slide').length > 0) {
      $('.testimonial-slide').owlCarousel({
        items: 1,
        margin: 20,
        loop: true,
        autoplay: false,
        autoplayTimeout: 1000,
        smartSpeed: 900,
        nav: true,
        navText: ['<i class="icon icon-left-arrow2"></i>', '<i class="icon icon-right-arrow2"></i>']
      });
    }
    /* ---------------------------------------------
                   Partner Slider 
    ------------------------------------------------ */


    if ($('.partner-slide').length > 0) {
      $('.partner-slide').owlCarousel({
        items: 5,
        loop: true,
        autoplay: false,
        autoplayTimeout: 1000,
        smartSpeed: 900,
        nav: false,
        responsiveClass: true,
        responsive: {
          0: {
            items: 1,
            dots: false
          },
          600: {
            items: 2,
            dots: false
          },
          1000: {
            dots: false
          }
        }
      });
    }
    /* ---------------------------------------------
                   Top News Slider 
    ------------------------------------------------ */


    if ($('.top-news-slide').length > 0) {
      $('.top-news-slide').owlCarousel({
        items: 1,
        loop: true,
        autoplay: false,
        autoplayTimeout: 1000,
        smartSpeed: 900,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-caret-left"></i>', '<i class="fa fa-caret-right"></i>']
      });
    }
    /* ---------------------------------------------
                   Converter 
    ------------------------------------------------ */


    $(document).on('click', '.btn-select', function (e) {
      e.preventDefault();
      var ul = $(this).find("ul");

      if ($(this).hasClass("active")) {
        if (ul.find("li").is(e.target)) {
          var target = $(e.target);
          target.addClass("selected").siblings().removeClass("selected");
          var value = target.html();
          $(this).find(".btn-select-value").html(value);
        }

        ul.hide();
        $(this).removeClass("active");
      } else {
        $('.btn-select').not(this).each(function () {
          $(this).removeClass("active").find("ul").hide();
        });
        ul.slideDown(300);
        $(this).addClass("active");
      }
    });
    $(document).on('click', function (e) {
      var target = $(e.target).closest(".btn-select-value, .btn-select-arrow");

      if (!target.length) {
        $(".btn-select").removeClass("active").find("ul").hide();
      }
    });
    var $btc = $('#btc');
    var $pesos = $('#pesos');
    var $dolar = $('#dolar');
    $.get('https://api.coindesk.com/v1/bpi/currentprice/COP.json', function (data) {
      var BTC_COP = JSON.parse(data).bpi.COP.rate_float;
      var BTC_USD = JSON.parse(data).bpi.USD.rate_float;
      $btc.removeAttr('disabled');
      $pesos.removeAttr('disabled');
      $dolar.removeAttr('disabled');
      $btc.keyup(function (e) {
        $btc.val(clearText($btc.val()));
        var money = changeBtc($btc.val());
        $dolar.val(money.usdC);
        $pesos.val(money.copC);
      });
      $pesos.keyup(function (e) {
        $pesos.val(clearText($pesos.val()));
        var money = changeMoney({
          type: 'COP',
          v: clearText($pesos.val())
        });
        $dolar.val(money.usdC);
        $btc.val(money.btcC);
      });
      $dolar.keyup(function (e) {
        $dolar.val(clearText($dolar.val()));
        var money = changeMoney({
          type: 'USD',
          v: clearText($dolar.val())
        });
        $pesos.val(money.copC);
        $btc.val(money.btcC);
      });

      function changeBtc(amount) {
        return {
          copC: amount * BTC_COP,
          usdC: amount * BTC_USD
        };
      }

      function changeMoney(money) {
        var coins = {
          'COP': BTC_COP,
          'USD': BTC_USD
        };
        var btcC = (money.v / coins[money.type]).toFixed(8);
        return {
          btcC: btcC,
          copC: btcC * BTC_COP,
          usdC: btcC * BTC_USD
        };
      }
    });

    function clearText(str) {
      return str.replace(/[^0-9+\.]/g, '');
    }
    /* ---------------------------------------------
                   Video Popup 
    ------------------------------------------------ */


    if ($('.video-play-btn').length > 0) {
      $('.video-play-btn').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
      });
    }
    /* ---------------------------------------------
                   Counter Up 
    ------------------------------------------------ */


    $(".counterUp").counterUp({
      delay: 10,
      time: 1000
    });
    /* ---------------------------------------------
                   Map 
    ------------------------------------------------ */

    if ($('#map').length > 0) {
      var contactmap = {
        lat: -37.816218,
        lng: 144.964068
      };
      $('#map').gmap3({
        zoom: 12,
        center: contactmap,
        scrollwheel: false,
        mapTypeId: "shadeOfGrey",
        mapTypeControlOptions: {
          mapTypeIds: [google.maps.MapTypeId.ROADMAP, "shadeOfGrey"]
        }
      }).styledmaptype("shadeOfGrey", [{
        "featureType": "administrative",
        "elementType": "geometry.stroke",
        "stylers": [{
          "color": "#fefefe"
        }, {
          "lightness": 17
        }, {
          "weight": 1.2
        }]
      }, {
        "featureType": "administrative",
        "elementType": "geometry.fill",
        "stylers": [{
          "color": "#fefefe"
        }, {
          "lightness": 20
        }]
      }, {
        "featureType": "transit",
        "elementType": "geometry",
        "stylers": [{
          "color": "#f2f2f2"
        }, {
          "lightness": 19
        }]
      }, {
        "featureType": "all",
        "elementType": "labels.icon",
        "stylers": [{
          "visibility": "off"
        }]
      }, {
        "featureType": "all",
        "elementType": "labels.text.fill",
        "stylers": [{
          "saturation": 36
        }, {
          "color": "#333333"
        }, {
          "lightness": 40
        }]
      }, {
        "featureType": "all",
        "elementType": "labels.text.stroke",
        "stylers": [{
          "visibility": "on"
        }, {
          "color": "#ffffff"
        }, {
          "lightness": 16
        }]
      }, {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [{
          "color": "#f5f5f5"
        }, {
          "lightness": 21
        }]
      }, {
        "featureType": "road.local",
        "elementType": "geometry",
        "stylers": [{
          "color": "#ffffff"
        }, {
          "lightness": 16
        }]
      }, {
        "featureType": "road.arterial",
        "elementType": "geometry",
        "stylers": [{
          "color": "#ffffff"
        }, {
          "lightness": 18
        }]
      }, {
        "featureType": "road.highway",
        "elementType": "geometry.stroke",
        "stylers": [{
          "color": "#ffffff"
        }, {
          "lightness": 29
        }, {
          "weight": 0.2
        }]
      }, {
        "featureType": "road.highway",
        "elementType": "geometry.fill",
        "stylers": [{
          "color": "#ffffff"
        }, {
          "lightness": 17
        }]
      }, {
        "featureType": "landscape",
        "elementType": "geometry",
        "stylers": [{
          "color": "#f5f5f5"
        }, {
          "lightness": 20
        }]
      }, {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [{
          "color": "#e9e9e9"
        }, {
          "lightness": 17
        }]
      }], {
        name: "HQ"
      }).marker({
        position: contactmap,
        icon: 'images/map-icon.png'
      }).infowindow({
        position: contactmap,
        content: "16122 Collins Street West. Victoria"
      }).then(function (infowindow) {
        var map = this.get(0);
        var marker = this.get(1);
        marker.addListener('click', function () {
          infowindow.open(map, marker);
        });
      });
    }
    /* ---------------------------------------------
                   Back to top 
    ------------------------------------------------ */


    $(window).scroll(function () {
      if ($(this).scrollTop() > 50) {
        $('#back-to-top').fadeIn();
      } else {
        $('#back-to-top').fadeOut();
      }
    }); // scroll body to 0px on click

    $('#back-to-top').on('click', function () {
      $('#back-to-top').tooltip('hide');
      $('body,html').animate({
        scrollTop: 0
      }, 800);
      return false;
    });
    $('#back-to-top').tooltip('hide');
  });
  /* ---------------------------------------------
                 Site Search 
  ------------------------------------------------ */

  $('.nav-search').on('click', function () {
    $('.search-overlay').addClass('show');
  });
  $('.search-overlay .close-btn').on('click', function () {
    $('.search-overlay').removeClass('show');
  });
  /* ---------------------------------------------
                 Contact Form 
  ------------------------------------------------ */

  $('#contact-form').submit(function () {
    var $form = $(this),
        $error = $form.find('.error-container'),
        action = $form.attr('action');
    $error.slideUp(750, function () {
      $error.hide();
      var $name = $form.find('.form-name'),
          $phone = $form.find('.form-phone'),
          $email = $form.find('.form-email'),
          $url = $form.find('.form-website'),
          $message = $form.find('.form-message');
      $.post(action, {
        name: $name.val(),
        phone: $phone.val(),
        email: $email.val(),
        url: $url.val(),
        message: $message.val()
      }, function (data) {
        $error.html(data);
        $error.slideDown('slow');

        if (data.match('success') != null) {
          $name.val('');
          $phone.val('');
          $email.val('');
          $url.val('');
          $message.val('');
        }
      });
    });
    return false;
  });
  /* ---------------------------------------------
                 Owl Sync Slider 
  ------------------------------------------------ */

  if ($('#sync1').length > 0 && $('#sync2').length > 0) {
    var syncPosition = function syncPosition(el) {
      //if you set loop to false, you have to restore this next line
      //var current = el.item.index;
      //if you disable loop you have to comment this block
      var count = el.item.count - 1;
      var current = Math.round(el.item.index - el.item.count / 2 - .5);

      if (current < 0) {
        current = count;
      }

      if (current > count) {
        current = 0;
      } //end block


      sync2.find(".owl-item").removeClass("current").eq(current).addClass("current");
      var onscreen = sync2.find('.owl-item.active').length - 1;
      var start = sync2.find('.owl-item.active').first().index();
      var end = sync2.find('.owl-item.active').last().index();

      if (current > end) {
        sync2.data('owl.carousel').to(current, 100, true);
      }

      if (current < start) {
        sync2.data('owl.carousel').to(current - onscreen, 100, true);
      }
    };

    var syncPosition2 = function syncPosition2(el) {
      if (syncedSecondary) {
        var number = el.item.index;
        sync1.data('owl.carousel').to(number, 100, true);
      }
    };

    var sync1 = $("#sync1"),
        sync2 = $("#sync2"),
        slidesPerPage = 4,
        syncedSecondary = true;
    sync1.owlCarousel({
      items: 1,
      smartSpeed: 1000,
      autoplay: false,
      dots: false,
      loop: true,
      responsiveRefreshRate: 200,
      nav: false,
      navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']
    }).on('changed.owl.carousel', syncPosition);
    sync2.on('initialized.owl.carousel', function () {
      sync2.find(".owl-item").eq(0).addClass("current");
    }).owlCarousel({
      items: slidesPerPage,
      dots: false,
      nav: false,
      margin: 20,
      smartSpeed: 1000,
      slideBy: slidesPerPage,
      //alternatively you can slide by 1, this way the active slide will stick to the first item in the second carousel
      responsiveRefreshRate: 100
    }).on('changed.owl.carousel', syncPosition2);
    sync2.on("click", ".owl-item", function (e) {
      e.preventDefault();
      var number = $(this).index();
      sync1.data('owl.carousel').to(number, 300, true);
    });
  }
  /* ---------------------------------------------
                 Input Increase 
  ------------------------------------------------ */


  var thiss = $('.product-input-number');
  thiss.append('<span class="product-add"><i class="fa fa-plus"></i></span>');
  thiss.append('<span class="product-sub"><i class="fa fa-minus"></i></span>');
  $('.product-input-number').each(function () {
    var spinner = $(this),
        input = spinner.find('input[type="number"]'),
        add = spinner.find('.product-add'),
        sub = spinner.find('.product-sub');
    input.parent().on('click', '.product-sub', function (event) {
      event.preventDefault();
      /* Act on the event */

      if (input.val() > parseInt(input.attr('min'))) input.val(function (i, oldval) {
        return --oldval;
      });
    });
    input.parent().on('click', '.product-add', function () {
      event.preventDefault();
      if (input.val() < parseInt(input.attr('max'))) input.val(function (i, oldval) {
        return ++oldval;
      });
    });
  });
  /* ---------------------------------------------
        Product Slider 
  ------------------------------------------------ */

  if ($('.product-slider').length > 0) {
    $('.product-slider').owlCarousel({
      items: 3,
      loop: true,
      margin: 20,
      nav: true,
      dots: false,
      smartSpeed: 800,
      navText: ['<i class="icon icon-arrow-left"></i>', '<i class="icon icon-arrow-right"></i>'],
      responsive: {
        0: {
          items: 1,
          nav: false,
          dots: false
        },
        600: {
          items: 1,
          nav: false,
          dots: false
        },
        1000: {
          items: 3
        }
      }
    });
  }
  /* ---------------------------------------------
                 Faq Accordion 
  ------------------------------------------------ */


  $('.collapse').on('shown.bs.collapse', function () {
    $(this).parent().addClass('active');
  });
  $('.collapse').on('hidden.bs.collapse', function () {
    $(this).parent().removeClass('active');
  });
  /* ---------------------------------------------
                 Gallery 
  ------------------------------------------------ */

  if ($('.gallery-layout').length > 0) {
    $('.gallery-layout').isotope({
      // options
      itemSelector: '.gallery-grid',
      layoutMode: 'fitRows',
      fitRows: {
        gutter: 30
      }
    });
  }
  /* ---------------------------------------------
                 Countdown 
  ------------------------------------------------ */


  if ($('#countdown-clock').length > 0) {
    $('#countdown-clock').countdown('2020/10/10', function (event) {
      var $this = $(this).html(event.strftime('' + '<div class="counter-time"><span class="day">%D</span>Days</div>' + '<div class="counter-time"><span class="hour">%H</span>Hour</div>' + '<div class="counter-time"><span class="minute">%M</span>Min</div>' + '<div class="counter-time"><span class="sec">%S</span>Sec</div>'));
    });
  }
  /* ---------------------------------------------
                 Particle 
  ------------------------------------------------ */


  if ($('#particles-js').length > 0) {
    particlesJS("particles-js", {
      "particles": {
        "number": {
          "value": 90,
          "density": {
            "enable": true,
            "value_area": 800
          }
        },
        "color": {
          "value": "#ffffff"
        },
        "shape": {
          "type": "circle",
          "stroke": {
            "width": 0,
            "color": "#000000"
          },
          "polygon": {
            "nb_sides": 5
          },
          "image": {
            "src": "img/github.svg",
            "width": 100,
            "height": 100
          }
        },
        "opacity": {
          "value": 0.3,
          "random": false,
          "anim": {
            "enable": false,
            "speed": 1,
            "opacity_min": 0.1,
            "sync": false
          }
        },
        "size": {
          "value": 4,
          "random": true,
          "anim": {
            "enable": false,
            "speed": 60,
            "size_min": 0.1,
            "sync": false
          }
        },
        "line_linked": {
          "enable": true,
          "distance": 150,
          "color": "#ffffff",
          "opacity": 0.3,
          "width": 1
        },
        "move": {
          "enable": true,
          "speed": 7,
          "direction": "none",
          "random": false,
          "straight": false,
          "out_mode": "out",
          "bounce": false,
          "attract": {
            "enable": false,
            "rotateX": 600,
            "rotateY": 1200
          }
        }
      },
      "interactivity": {
        "detect_on": "canvas",
        "events": {
          "onhover": {
            "enable": true,
            "mode": "grab"
          },
          "onclick": {
            "enable": true,
            "mode": "push"
          },
          "resize": true
        },
        "modes": {
          "grab": {
            "distance": 140,
            "line_linked": {
              "opacity": 1
            }
          },
          "bubble": {
            "distance": 400,
            "size": 40,
            "duration": 2,
            "opacity": 8,
            "speed": 3
          },
          "repulse": {
            "distance": 200,
            "duration": 0.4
          },
          "push": {
            "particles_nb": 4
          },
          "remove": {
            "particles_nb": 2
          }
        }
      },
      "retina_detect": true
    });
  }
  /* ---------------------------------------------
                       Chart 
  ------------------------------------------------ */


  if ($('#myChart').length > 0) {
    var ctx = document.getElementById("myChart").getContext('2d');
    var myChart = new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: ["Members", "Buyers", "Marketers", "Free"],
        datasets: [{
          data: [70, 10, 8, 10],
          backgroundColor: ['#ff783c', '#ff5c9c', '#ffdc56', '#22b4f4'],
          borderColor: ['#ff783c', '#ff5c9c', '#ffdc56', '#22b4f4'],
          borderWidth: 1
        }]
      },
      options: {
        legend: {
          display: false
        }
      }
    });
  }
  /* Chart 2 */


  if ($('#myChartTwo').length > 0) {
    var ctxTwo = document.getElementById("myChartTwo").getContext('2d');
    var myChartTwo = new Chart(ctxTwo, {
      type: 'doughnut',
      data: {
        labels: ["Buyers", "Members", "Marketers", "Free"],
        datasets: [{
          data: [70, 10, 8, 10],
          backgroundColor: ['#ff5c9c', '#ffdc56', '#ff783c', '#22b4f4'],
          borderColor: ['#ff5c9c', '#ffdc56', '#ff783c', '#22b4f4'],
          borderWidth: 1
        }]
      },
      options: {
        legend: {
          display: false
        }
      }
    });
  }
  /* ---------------------------------------------
                    Progress Bar 
  ------------------------------------------------ */


  if ($('.progress .progress-bar').length > 0) {
    $('.progress .progress-bar').css("width", function () {
      return $(this).attr("aria-valuenow") + "%";
    });
  }
  /* ---------------------------------------------
                    Fixed Header 
  ------------------------------------------------ */


  function menuFixed() {
    var wWidth = $(window).width();

    if (wWidth > 974) {
      if ($('.site-top').length) {
        var sticky = $('.site-top'),
            scroll = $(window).scrollTop();
        if (scroll >= 400) sticky.addClass('menu-fixed');else sticky.removeClass('menu-fixed');
      }

      ;
    }
  }

  $(document).on('scroll', function () {
    menuFixed();
  });
  /* ---------------------------------------------
                 Click To Scroll 
  ------------------------------------------------ */

  if ($('.site-navigation .nav-item .nav-link').length > 0) {
    $('.site-navigation .nav-item .nav-link').on('click', function (e) {
      e.preventDefault();
      $('html, body').animate({
        scrollTop: $($(this).attr('href')).offset().top - 45
      }, 1000, 'linear');
    });
  }
});

/***/ }),

/***/ "./resources/mix/js/gmap3.js":
/*!***********************************!*\
  !*** ./resources/mix/js/gmap3.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*!
 *  GMAP3 Plugin for jQuery
 *  Version  : 7.2
 *  Date     : 2016/12/03
 *  Author   : DEMONTE Jean-Baptiste
 *  Contact  : jbdemonte@gmail.com
 *  Web site : http://gmap3.net
 *  Licence  : GPL-3.0+
 */
(function ($, window, document) {
  "use strict";

  var gm,
      services = {},
      loadOptions,
      // Proxify functions to get shorter minimized code
  when = $.when,
      extend = $.extend,
      isArray = $.isArray,
      isFunction = $.isFunction,
      deferred = $.Deferred;
  /**
   * Duplicate option to never modify original object
   * @param {Object} options
   * @returns {Object}
   */

  function dupOpts(options) {
    return extend(true, {}, options || {});
  }
  /**
   * Slice an array like
   * @params {Array|Object}
   * @params {Number} [start]
   * @params {Number} [end]
   * @returns {Array}
   */


  function slice() {
    var fn = Array.prototype.slice,
        args = fn.call(arguments, 1);
    return fn.apply(arguments[0], args);
  }
  /**
   * Return true if value is undefined
   * @param {*} value
   * @returns {Boolean}
   */


  function isUndefined(value) {
    return typeof value === 'undefined';
  }
  /**
   * Equivalent to Promise.all
   * @param {Deferred[]} deferreds
   * @returns {Deferred}
   */


  function all(deferreds) {
    return when.apply($, deferreds);
  }
  /**
   * Equivalent to Promise.resolve
   * @param {*} value
   * @returns {Deferred}
   */


  function resolved(value) {
    return when().then(function () {
      return value;
    });
  }
  /**
   * return the distance between 2 latLng in meters
   * @param {LatLng} origin
   * @param {LatLng} destination
   * @returns {Number}
   **/


  function distanceInMeter(origin, destination) {
    var m = Math,
        pi = m.PI,
        e = pi * origin.lat() / 180,
        f = pi * origin.lng() / 180,
        g = pi * destination.lat() / 180,
        h = pi * destination.lng() / 180,
        cos = m.cos,
        sin = m.sin;
    return 1000 * 6371 * m.acos(m.min(cos(e) * cos(g) * cos(f) * cos(h) + cos(e) * sin(f) * cos(g) * sin(h) + sin(e) * sin(g), 1));
  }

  function ready(fn) {
    if (document.readyState != 'loading') {
      fn();
    } else {
      document.addEventListener('DOMContentLoaded', fn);
    }
  }

  function serialize(obj) {
    return objectKeys(obj).map(function (key) {
      return encodeURIComponent(key) + "=" + encodeURIComponent(obj[key]);
    }).join("&");
  } // Auto-load google maps library if needed


  when(function () {
    var dfd = deferred(),
        cbName = '__gmap3',
        script;
    $.holdReady(true);
    ready(function () {
      if (window.google && window.google.maps || loadOptions === false) {
        dfd.resolve();
      } else {
        // callback function - resolving promise after maps successfully loaded
        window[cbName] = function () {
          delete window[cbName];
          dfd.resolve();
        };

        script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = 'https://maps.googleapis.com/maps/api/js?callback=' + cbName + (loadOptions ? '&' + (typeof loadOptions === 'string' ? loadOptions : serialize(loadOptions)) : '');
        $("head").append(script);
      }
    });
    return dfd;
  }()).then(function () {
    $.holdReady(false);
  });
  /**
   * Instantiate only once a google service
   * @param {String} name
   * @returns {Object}
   */

  function service(name) {
    if (!services[name]) {
      services[name] = gmElement(name);
    }

    return services[name];
  }
  /**
   * Return GoogleMap Class (or overwritten by user) instance
   * @param {String} name
   * @returns {Object}
   */


  function gmElement(name) {
    var cls = gm[name];

    function F(args) {
      return cls.apply(this, args);
    }

    F.prototype = cls.prototype;
    return new F(slice(arguments, 1));
  }
  /**
   * Resolve a GeocodeRequest
   * https://developers.google.com/maps/documentation/javascript/geocoding
   * @param {String|Object} request
   * @returns {Deferred}
   */


  function geocode(request) {
    var dfd = deferred();

    if (typeof request === 'string') {
      request = {
        address: request
      };
    }

    service('Geocoder').geocode(request, function (results, status) {
      if (status === gm.GeocoderStatus.OK) {
        dfd.resolve(results[0].geometry.location);
      } else {
        dfd.reject(status);
      }
    });
    return dfd;
  }
  /**
   * Callable function taking a parameter as string
   * @callback StringCallback
   * @param {String}
   */

  /**
   * Split a string and execute a function on each item
   * @param {String} str - Space separated list of items
   * @param {StringCallback} fn - Callback function
   */


  function foreachStr(str, fn) {
    foreach(str.split(' '), fn);
  }
  /**
   * Execute a function on each items if items is an array and on items as a single element if it is not an array
   * @param {Array|*} items - Items to execute foreach callback on
   * @param {Function} fn - Callback function
   */


  function foreach(items, fn) {
    (isArray(items) ? items : [items]).forEach(fn);
  }
  /**
   * Return Object keys
   * @param {Object} obj
   * @returns {String[]}
   */


  function objectKeys(obj) {
    return Object.keys(obj);
  }
  /**
   * Return Object values
   * @param {Object} obj
   * @returns {*[]}
   */


  function objectValues(obj) {
    return objectKeys(obj).map(function (key) {
      return obj[key];
    });
  }
  /**
   * Resolution function
   * @callback OptionCallback
   * @param {Object} options
   * @returns {Deferred|*}
   */

  /**
   * Convert bounds from array [ n, e, s, w ] to google.maps.LatLngBounds
   * @param {Object} options - Container of options.bounds
   * @param {OptionCallback} fn
   * @returns {Deferred}
   */


  function resolveLatLngBounds(options, fn) {
    options = dupOpts(options);

    if (options.bounds) {
      options.bounds = toLatLngBound(options.bounds);
    }

    return resolved(fn(options));
  }
  /**
   * Resolve an address location / convert a LatLng array to google.maps.LatLng object
   * @param {Object} options
   * @param {String} key - LatLng key name in options object
   * @param {OptionCallback} fn
   * @returns {Deferred}
   */


  function resolveLatLng(options, key, fn) {
    var dfd = deferred();
    options = dupOpts(options);
    when().then(function () {
      var address = options.address;

      if (address) {
        delete options.address;
        return geocode(address).then(function (latLng) {
          options[key] = latLng;
        });
      }

      options[key] = toLatLng(options[key]);
    }).then(function () {
      dfd.resolve(fn(options));
    }).fail(function (reason) {
      dfd.reject(reason);
    });
    return dfd;
  }
  /**
   * Convert an array of mixed LatLng to google.maps.LatLng object
   * No address resolution here
   * @param {Object} options
   * @param {String} key - Array key name in options object
   * @param {OptionCallback} fn
   * @returns {Deferred}
   */


  function resolveArrayOfLatLng(options, key, fn) {
    options = dupOpts(options);
    options[key] = (options[key] || []).map(toLatLng);
    return resolved(fn(options));
  }
  /**
   * Convert a LatLng array to google.maps.LatLng
   * @param {Array|*} mixed
   * @param {Boolean} [convertLiteral]
   * @returns {LatLng}
   */


  function toLatLng(mixed, convertLiteral) {
    return isArray(mixed) ? new gm.LatLng(mixed[0], mixed[1]) : convertLiteral && mixed && !(mixed instanceof gm.LatLng) ? new gm.LatLng(mixed.lat, mixed.lng) : mixed;
  }
  /**
   * Convert a LatLngBound array to google.maps.LatLngBound
   * @param {Array|*} mixed
   * @param {Boolean} [convertLiteral]
   * @returns {LatLngBounds}
   */


  function toLatLngBound(mixed, convertLiteral) {
    if (isArray(mixed)) {
      return new gm.LatLngBounds({
        lat: mixed[2],
        lng: mixed[3]
      }, {
        lat: mixed[0],
        lng: mixed[1]
      });
    } else if (convertLiteral && !mixed.getCenter) {
      return new gm.LatLngBounds({
        lat: mixed.south,
        lng: mixed.west
      }, {
        lat: mixed.north,
        lng: mixed.east
      });
    }

    return mixed;
  }
  /**
   * Create a custom overlay view
   * @param {Map} map
   * @param {Object} options
   * @returns {OverlayView}
   */


  function createOverlayView(map, options) {
    var GMOverlayView = gm.OverlayView;
    var $div = $(document.createElement("div")).css({
      border: "none",
      borderWidth: 0,
      position: "absolute"
    }).append(options.content);
    options = extend({
      x: 0,
      y: 0
    }, options);

    if (options.position) {
      options.position = toLatLng(options.position, true);
    } else if (options.bounds) {
      options.bounds = toLatLngBound(options.bounds, true);
    }
    /**
     * Class OverlayView
     * @constructor
     */


    function OverlayView() {
      var self = this,
          listeners = [];
      GMOverlayView.call(self);
      self.setMap(map);

      function fromLatLngToDivPixel(latlng) {
        return self.getProjection().fromLatLngToDivPixel(latlng);
      }

      self.onAdd = function () {
        var panes = self.getPanes();
        panes.overlayMouseTarget.appendChild($div[0]);
      };

      if (options.position) {
        self.getPosition = function () {
          return options.position;
        };

        self.setPosition = function (latlng) {
          options.position = latlng;
          self.draw();
        };

        self.draw = function () {
          var ps = fromLatLngToDivPixel(options.position);
          $div.css({
            left: ps.x + options.x + 'px',
            top: ps.y + options.y + 'px'
          });
        };
      } else {
        self.getBounds = function () {
          return options.bounds;
        };

        self.setBounds = function (bounds) {
          options.bounds = bounds;
          self.draw();
        };

        self.draw = function () {
          var sw = fromLatLngToDivPixel(options.bounds.getSouthWest());
          var ne = fromLatLngToDivPixel(options.bounds.getNorthEast());
          $div.css({
            left: sw.x + options.x + 'px',
            top: ne.y + options.y + 'px',
            width: ne.x - sw.x + options.x + 'px',
            height: sw.y - ne.y + options.y + 'px'
          });
        };
      }

      self.onRemove = function () {
        listeners.map(function (handler) {
          gm.event.removeListener(handler);
        });
        $div.remove();
        self.$ = $div = null; // mem leaks
      };

      self.$ = $div;
    }

    OverlayView.prototype = new GMOverlayView();
    return new OverlayView();
  }
  /**
   * Return a map projection
   * @param {Map} map
   * @returns {*}
   */


  function getProjection(map) {
    function Overlay() {
      var self = this;

      self.onAdd = self.onRemove = self.draw = function () {};

      return gm.OverlayView.call(self);
    }

    Overlay.prototype = new gm.OverlayView();
    var overlay = new Overlay();
    overlay.setMap(map);
    return overlay.getProjection();
  }
  /**
   * Class used as event first parameter on clustering overlays
   * @param {Cluster} cluster
   * @param {Marker[]} markers
   * @param {OverlayView} overlay
   * @param {LatLngBounds} bounds
   * @constructor
   */


  function ClusterOverlay(cluster, markers, overlay, bounds) {
    var self = this;
    self.cluster = cluster;
    self.markers = markers;
    self.$ = overlay.$;
    self.overlay = overlay;

    overlay.getBounds = function () {
      return gmElement('LatLngBounds', bounds.getSouthWest(), bounds.getNorthEast());
    };
  }
  /**
   * Cluster Group definition.
   * @typedef {Object} ClusterGroupDef
   * @property {String|jQuery} content
   * @property {Number} [x] Offset
   * @property {Number} [y] Offset
   */

  /**
   * Cluster evaluation function
   * @callback clusterCallback
   * @param {Marker[]} markers
   * @return {ClusterGroupDef|undefined}
   */

  /**
   * Class used to handle clustering
   * @param {Map} map
   * @param {Object} options
   * @param {Integer} [options.size]
   * @param {Object[]} [options.markers] markers definition
   * @param {clusterCallback} [options.cb] callback used to evaluate clustering elements
   * @constructor
   */


  function Cluster(map, options) {
    var timer,
        igniter,
        previousViewHash,
        projection,
        filter,
        self = this,
        markers = [],
        radius = (options.size || 200) >> 1,
        enabled = true,
        overlays = {},
        handlers = [];
    options = options || {};
    options.markers = options.markers || [];
    /**
     * Cluster evaluation function
     * @callback bindCallback
     * @param {ClusterOverlay[]} instances
     */

    /**
     * Bind a function to each current or future overlays
     * @param {bindCallback} fn
     */

    self._b = function (fn) {
      fn(objectValues(overlays));
      handlers.push(fn);
    };
    /**
     * Get the marker list
     * @returns {Marker[]}
     */


    self.markers = function () {
      return slice(markers);
    };
    /**
     * Get the current groups
     * @returns {ClusterOverlay[]}
     */


    self.groups = function () {
      return objectValues(overlays);
    };
    /**
     * Enable the clustering feature
     */


    self.enable = function () {
      if (!enabled) {
        enabled = true;
        previousViewHash = '';
        delayRedraw();
      }
    };
    /**
     * Disable the clustering feature
     */


    self.disable = function () {
      if (enabled) {
        enabled = false;
        previousViewHash = '';
        delayRedraw();
      }
    };
    /**
     * Add a marker
     * @param {Marker} marker
     */


    self.add = function (marker) {
      markers.push(marker);
      previousViewHash = '';
      delayRedraw();
    };
    /**
     * Remove a marker
     * @param {Marker} marker
     */


    self.remove = function (marker) {
      markers = markers.filter(function (item) {
        return item !== marker;
      });
      previousViewHash = '';
      delayRedraw();
    };
    /**
     * Filtering function, Cluster only handle those who return true
     * @callback filterCallback
     * @param {Marker} marker
     * @returns {Boolean}
     */

    /**
     * Set a filter function
     * @param {filterCallback} fn
     */


    self.filter = function (fn) {
      if (filter !== fn) {
        filter = fn;
        previousViewHash = '';
        delayRedraw();
      }
    };
    /**
     * Generate extended visible bounds
     * @returns {LatLngBounds}
     */


    function extendsMapBounds() {
      var circle = gmElement('Circle', {
        center: map.getCenter(),
        radius: 1.15 * distanceInMeter(map.getCenter(), map.getBounds().getNorthEast()) // + 15%

      });
      return circle.getBounds();
    }
    /**
     * Generate bounds extended by radius
     * @param {LatLng} latLng
     * @returns {LatLngBounds}
     */


    function extendsBounds(latLng) {
      var p = projection.fromLatLngToDivPixel(latLng);
      return gmElement('LatLngBounds', projection.fromDivPixelToLatLng(gmElement('Point', p.x - radius, p.y + radius)), projection.fromDivPixelToLatLng(gmElement('Point', p.x + radius, p.y - radius)));
    }

    options.markers.map(function (opts) {
      opts.position = toLatLng(opts.position);
      markers.push(gmElement('Marker', opts));
    });
    /**
     * Redraw clusters
     */

    function redraw() {
      var keys,
          bounds,
          overlayOptions,
          hash,
          currentMarkers,
          viewHash,
          zoom = map.getZoom(),
          currentHashes = {},
          newOverlays = [],
          ignore = {};
      viewHash = '' + zoom;

      if (zoom > 3) {
        bounds = extendsMapBounds();
        foreach(markers, function (marker, index) {
          if (!bounds.contains(marker.getPosition())) {
            viewHash += '-' + index;
            ignore[index] = true;

            if (marker.getMap()) {
              marker.setMap(null);
            }
          }
        });
      }

      if (filter) {
        foreach(markers, function (marker, index) {
          if (!ignore[index] && !filter(marker)) {
            viewHash += '-' + index;
            ignore[index] = true;

            if (marker.getMap()) {
              marker.setMap(null);
            }
          }
        });
      }

      if (viewHash === previousViewHash) {
        return;
      }

      previousViewHash = viewHash;
      foreach(markers, function (marker, index) {
        if (ignore[index]) {
          return;
        }

        keys = [index];
        bounds = extendsBounds(marker.getPosition());

        if (enabled) {
          foreach(slice(markers, index + 1), function (marker, idx) {
            idx += index + 1;

            if (!ignore[idx] && bounds.contains(marker.getPosition())) {
              keys.push(idx);
              ignore[idx] = true;
            }
          });
        }

        hash = keys.join('-');
        currentHashes[hash] = true;

        if (overlays[hash]) {
          // hash is already set
          return;
        }

        currentMarkers = keys.map(function (key) {
          return markers[key];
        }); // ask the user callback on this subset (may be composed by only one marker)

        overlayOptions = options.cb(slice(currentMarkers)); // create an overlay if cb returns its properties

        if (overlayOptions) {
          bounds = gmElement('LatLngBounds');
          foreach(currentMarkers, function (marker) {
            bounds.extend(marker.getPosition());

            if (marker.getMap()) {
              marker.setMap(null);
            }
          });
          overlayOptions = dupOpts(overlayOptions);
          overlayOptions.position = bounds.getCenter();
          overlays[hash] = new ClusterOverlay(self, slice(currentMarkers), createOverlayView(map, overlayOptions), bounds);
          newOverlays.push(overlays[hash]);
        } else {
          foreach(currentMarkers, function (marker) {
            if (!marker.getMap()) {
              // to avoid marker blinking
              marker.setMap(map);
            }
          });
        }
      }); // remove previous overlays

      foreach(objectKeys(overlays), function (key) {
        if (!currentHashes[key]) {
          overlays[key].overlay.setMap(null);
          delete overlays[key];
        }
      });

      if (newOverlays.length) {
        foreach(handlers, function (fn) {
          fn(newOverlays);
        });
      }
    }
    /**
     * Restart redraw timer
     */


    function delayRedraw() {
      clearTimeout(timer);
      timer = setTimeout(redraw, 100);
    }
    /**
     * Init clustering
     */


    function init() {
      gm.event.addListener(map, "zoom_changed", delayRedraw);
      gm.event.addListener(map, "bounds_changed", delayRedraw);
      redraw();
    }

    igniter = setInterval(function () {
      projection = getProjection(map);

      if (projection) {
        clearInterval(igniter);
        init();
      }
    }, 10);
  }
  /**
   * Configure google maps loading library
   * @param {string|object} options
   */


  $.gmap3 = function (options) {
    loadOptions = options;
  };
  /**
   * jQuery Plugin
   */


  $.fn.gmap3 = function (options) {
    var items = [];
    gm = window.google.maps; // once gmap3 is loaded, google.maps library should be loaded

    this.each(function () {
      var $this = $(this),
          gmap3 = $this.data("gmap3");

      if (!gmap3) {
        gmap3 = new Gmap3($this, options);
        $this.data("gmap3", gmap3);
      }

      items.push(gmap3);
    });
    return new Handler(this, items);
  };
  /**
   * Class Handler
   * Chainable objet which handle all Gmap3 items associated to all jQuery elements in the current command set
   * @param {jQuery} chain - "this" to return to maintain the jQuery chain
   * @param {Gmap3[]} items
   * @constructor
   */


  function Handler(chain, items) {
    var self = this; // Map all functions from Gmap3 class

    objectKeys(items[0]).forEach(function (name) {
      self[name] = function () {
        var results = [],
            args = slice(arguments);
        items.forEach(function (item) {
          results.push(item[name].apply(item, args));
        });
        return name === 'get' ? results.length > 1 ? results : results[0] : self;
      };
    });
    self.$ = chain;
  }
  /**
   * Class Gmap3
   * Handle a Google.maps.Map instance
   * @param {jQuery} $container - Element to display the map in
   * @param {Object} options - MapOptions
   * @constructor
   */


  function Gmap3($container, options) {
    var map,
        previousResults = [],
        promise = when(),
        self = this;

    function context() {
      return {
        $: $container,
        get: self.get
      };
    }
    /**
     * Attach events to instances
     * @param {Object } events
     * @param {Array|Object} instances
     * @param {array} [args] arguments to add
     * @param {Boolean} once
     */


    function attachEvents(events, instances, args, once) {
      var hasArgs = arguments.length > 3;

      if (!hasArgs) {
        once = args;
      }

      $.each(events, function (eventName, handlers) {
        foreach(instances, function (instance) {
          var isClusterOverlay = instance instanceof ClusterOverlay;
          var isDom = isClusterOverlay || instance instanceof gm.OverlayView;
          var eventListener = isDom ? instance.$.get(0) : instance;
          gm.event['add' + (isDom ? 'Dom' : '') + 'Listener' + (once ? 'Once' : '')](eventListener, eventName, function (event) {
            foreach(handlers, function (handler) {
              if (isFunction(handler)) {
                if (isClusterOverlay) {
                  handler.call(context(), undefined
                  /* marker */
                  , instance, instance.cluster, event);
                } else if (hasArgs) {
                  var buffer = slice(args);
                  buffer.unshift(instance);
                  buffer.push(event);
                  handler.apply(context(), buffer);
                } else {
                  handler.call(context(), instance, event);
                }
              }
            });
          });
        });
      });
    }
    /**
     * Decorator to handle multiple call based on array of options
     * @param {Function} fn
     * @returns {Deferred}
     */


    function multiple(fn) {
      return function (options) {
        if (isArray(options)) {
          var instances = [];
          var promises = options.map(function (opts) {
            return fn.call(self, opts).then(function (instance) {
              instances.push(instance);
            });
          });
          return all(promises).then(function () {
            previousResults.push(instances);
            return instances;
          });
        } else {
          return fn.apply(self, arguments).then(function (instance) {
            previousResults.push(instance);
            return instance;
          });
        }
      };
    }
    /**
     * Decorator to chain promise result onto the main promise chain
     * @param {Function} fn
     * @returns {Function}
     */


    function chainToPromise(fn) {
      return function () {
        var args = slice(arguments);
        promise = promise.then(function (instance) {
          if (isFunction(args[0])) {
            // handle return as a deferred / promise to support both sync & async result
            return when(args[0].call(context(), instance)).then(function (value) {
              args[0] = value;
              return fn.apply(self, args);
            });
          }

          return when(fn.apply(self, args));
        });
        return promise;
      };
    }

    self.map = chainToPromise(function (options) {
      return map || resolveLatLng(options, 'center', function (opts) {
        map = gmElement('Map', $container.get(0), opts);
        previousResults.push(map);
        return map;
      });
    }); // Space separated string of : separated element
    // (google.maps class name) : (latLng property name) : (add map - 0|1 - default = 1)

    foreachStr('Marker:position Circle:center InfoWindow:position:0 Polyline:path Polygon:paths', function (item) {
      item = item.split(':');
      var property = item[1] || '';
      self[item[0].toLowerCase()] = chainToPromise(multiple(function (options) {
        return (property.match(/^path/) ? resolveArrayOfLatLng : resolveLatLng)(options, property, function (opts) {
          if (item[2] !== '0') {
            opts.map = map;
          }

          return gmElement(item[0], opts);
        });
      }));
    });
    foreachStr('TrafficLayer TransitLayer BicyclingLayer', function (item) {
      self[item.toLowerCase()] = chainToPromise(function () {
        var instance = gmElement(item);
        previousResults.push(instance);
        instance.setMap(map);
        return instance;
      });
    });
    self.kmllayer = chainToPromise(multiple(function (options) {
      options = dupOpts(options);
      options.map = map;
      return when(gmElement('KmlLayer', options));
    }));
    self.rectangle = chainToPromise(multiple(function (options) {
      return resolveLatLngBounds(options, function (opts) {
        opts.map = map;
        return gmElement('Rectangle', opts);
      });
    }));
    self.overlay = chainToPromise(multiple(function (options) {
      function fn(opts) {
        return createOverlayView(map, opts);
      }

      options = dupOpts(options);
      return options.bounds ? resolveLatLngBounds(options, fn) : resolveLatLng(options, 'position', fn);
    }));
    self.groundoverlay = chainToPromise(function (url, bounds, options) {
      return resolveLatLngBounds({
        bounds: bounds
      }, function (opts) {
        options = dupOpts(options);
        options.map = map;
        var instance = gmElement('GroundOverlay', url, opts.bounds, options);
        previousResults.push(instance);
        return instance;
      });
    });
    self.styledmaptype = chainToPromise(function (styleId, styles, options) {
      var instance = gmElement('StyledMapType', styles, options);
      previousResults.push(instance);
      map.mapTypes.set(styleId, instance);
      return instance;
    });
    self.streetviewpanorama = chainToPromise(function (container, options) {
      return resolveLatLng(options, 'position', function (opts) {
        var instance = gmElement('StreetViewPanorama', $(container).get(0), opts);
        map.setStreetView(instance);
        previousResults.push(instance);
        return instance;
      });
    });
    self.route = chainToPromise(function (options) {
      var dfd = deferred();
      options = dupOpts(options);
      options.origin = toLatLng(options.origin);
      options.destination = toLatLng(options.destination);
      service('DirectionsService').route(options, function (results, status) {
        previousResults.push(results);
        dfd.resolve(status === gm.DirectionsStatus.OK ? results : false);
      });
      return dfd;
    });
    self.cluster = chainToPromise(function (options) {
      var cluster = new Cluster(map, dupOpts(options));
      previousResults.push(cluster);
      return resolved(cluster);
    });
    self.directionsrenderer = chainToPromise(function (options) {
      var instance;

      if (options) {
        options = dupOpts(options);
        options.map = map;

        if (options.panel) {
          options.panel = $(options.panel).get(0);
        }

        instance = gmElement('DirectionsRenderer', options);
      }

      previousResults.push(instance);
      return instance;
    });
    self.latlng = chainToPromise(multiple(function (options) {
      return resolveLatLng(options, 'latlng', function (opts) {
        previousResults.push(opts.latlng);
        return opts.latlng;
      });
    }));
    self.fit = chainToPromise(function () {
      var bounds = gmElement('LatLngBounds');
      foreach(previousResults, function (instances) {
        if (instances !== map) {
          foreach(instances, function (instance) {
            if (instance) {
              if (instance.getPosition && instance.getPosition()) {
                bounds.extend(instance.getPosition());
              } else if (instance.getBounds && instance.getBounds()) {
                bounds.extend(instance.getBounds().getNorthEast());
                bounds.extend(instance.getBounds().getSouthWest());
              } else if (instance.getPaths && instance.getPaths()) {
                foreach(instance.getPaths().getArray(), function (path) {
                  foreach(path.getArray(), function (latLng) {
                    bounds.extend(latLng);
                  });
                });
              } else if (instance.getPath && instance.getPath()) {
                foreach(instance.getPath().getArray(), function (latLng) {
                  bounds.extend(latLng);
                });
              } else if (instance.getCenter && instance.getCenter()) {
                bounds.extend(instance.getCenter());
              }
            }
          });
        }
      });

      if (!bounds.isEmpty()) {
        map.fitBounds(bounds);
      }

      return true;
    });

    self.wait = function (duration) {
      promise = promise.then(function (instance) {
        var dfd = deferred();
        setTimeout(function () {
          dfd.resolve(instance);
        }, duration);
        return dfd;
      });
    };

    self.then = function (fn) {
      if (isFunction(fn)) {
        promise = promise.then(function (instance) {
          return when(fn.call(context(), instance)).then(function (newInstance) {
            return isUndefined(newInstance) ? instance : newInstance;
          });
        });
      }
    };

    self["catch"] = function (fn) {
      if (isFunction(fn)) {
        promise = promise.then(null, function (reason) {
          return when(fn.call(context(), reason));
        });
      }
    };

    foreachStr('on once', function (name, once) {
      self[name] = function () {
        var events = arguments[0];

        if (events) {
          if (typeof events === 'string') {
            // cast call on('click', handler) to on({click: handler})
            events = {};
            events[arguments[0]] = slice(arguments, 1);
          }

          promise.then(function (instances) {
            if (instances) {
              if (instances instanceof Cluster) {
                instances._b(function (items) {
                  if (items && items.length) {
                    attachEvents(events, items, once);
                  }
                });

                return attachEvents(events, instances.markers(), [undefined, instances], once);
              }

              attachEvents(events, instances, once);
            }
          });
        }
      };
    });

    self.get = function (index) {
      if (isUndefined(index)) {
        return previousResults.map(function (instance) {
          return isArray(instance) ? instance.slice() : instance;
        });
      } else {
        if (index < 0) {
          index = previousResults.length + index;
        }

        return isArray(previousResults[index]) ? previousResults[index].slice() : previousResults[index];
      }
    };

    if (options) {
      self.map(options);
    }
  }
})(jQuery, window, document);

/***/ }),

/***/ "./resources/mix/js/owl-carousel.js":
/*!******************************************!*\
  !*** ./resources/mix/js/owl-carousel.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * Owl Carousel v2.3.2
 * Copyright 2013-2018 David Deutsch
 * Licensed under: SEE LICENSE IN https://github.com/OwlCarousel2/OwlCarousel2/blob/master/LICENSE
 */
!function (a, b, c, d) {
  function e(b, c) {
    this.settings = null, this.options = a.extend({}, e.Defaults, c), this.$element = a(b), this._handlers = {}, this._plugins = {}, this._supress = {}, this._current = null, this._speed = null, this._coordinates = [], this._breakpoint = null, this._width = null, this._items = [], this._clones = [], this._mergers = [], this._widths = [], this._invalidated = {}, this._pipe = [], this._drag = {
      time: null,
      target: null,
      pointer: null,
      stage: {
        start: null,
        current: null
      },
      direction: null
    }, this._states = {
      current: {},
      tags: {
        initializing: ["busy"],
        animating: ["busy"],
        dragging: ["interacting"]
      }
    }, a.each(["onResize", "onThrottledResize"], a.proxy(function (b, c) {
      this._handlers[c] = a.proxy(this[c], this);
    }, this)), a.each(e.Plugins, a.proxy(function (a, b) {
      this._plugins[a.charAt(0).toLowerCase() + a.slice(1)] = new b(this);
    }, this)), a.each(e.Workers, a.proxy(function (b, c) {
      this._pipe.push({
        filter: c.filter,
        run: a.proxy(c.run, this)
      });
    }, this)), this.setup(), this.initialize();
  }

  e.Defaults = {
    items: 3,
    loop: !1,
    center: !1,
    rewind: !1,
    mouseDrag: !0,
    touchDrag: !0,
    pullDrag: !0,
    freeDrag: !1,
    margin: 0,
    stagePadding: 0,
    merge: !1,
    mergeFit: !0,
    autoWidth: !1,
    startPosition: 0,
    rtl: !1,
    smartSpeed: 250,
    fluidSpeed: !1,
    dragEndSpeed: !1,
    responsive: {},
    responsiveRefreshRate: 200,
    responsiveBaseElement: b,
    fallbackEasing: "swing",
    info: !1,
    nestedItemSelector: !1,
    itemElement: "div",
    stageElement: "div",
    refreshClass: "owl-refresh",
    loadedClass: "owl-loaded",
    loadingClass: "owl-loading",
    rtlClass: "owl-rtl",
    responsiveClass: "owl-responsive",
    dragClass: "owl-drag",
    itemClass: "owl-item",
    stageClass: "owl-stage",
    stageOuterClass: "owl-stage-outer",
    grabClass: "owl-grab"
  }, e.Width = {
    Default: "default",
    Inner: "inner",
    Outer: "outer"
  }, e.Type = {
    Event: "event",
    State: "state"
  }, e.Plugins = {}, e.Workers = [{
    filter: ["width", "settings"],
    run: function run() {
      this._width = this.$element.width();
    }
  }, {
    filter: ["width", "items", "settings"],
    run: function run(a) {
      a.current = this._items && this._items[this.relative(this._current)];
    }
  }, {
    filter: ["items", "settings"],
    run: function run() {
      this.$stage.children(".cloned").remove();
    }
  }, {
    filter: ["width", "items", "settings"],
    run: function run(a) {
      var b = this.settings.margin || "",
          c = !this.settings.autoWidth,
          d = this.settings.rtl,
          e = {
        width: "auto",
        "margin-left": d ? b : "",
        "margin-right": d ? "" : b
      };
      !c && this.$stage.children().css(e), a.css = e;
    }
  }, {
    filter: ["width", "items", "settings"],
    run: function run(a) {
      var b = (this.width() / this.settings.items).toFixed(3) - this.settings.margin,
          c = null,
          d = this._items.length,
          e = !this.settings.autoWidth,
          f = [];

      for (a.items = {
        merge: !1,
        width: b
      }; d--;) {
        c = this._mergers[d], c = this.settings.mergeFit && Math.min(c, this.settings.items) || c, a.items.merge = c > 1 || a.items.merge, f[d] = e ? b * c : this._items[d].width();
      }

      this._widths = f;
    }
  }, {
    filter: ["items", "settings"],
    run: function run() {
      var b = [],
          c = this._items,
          d = this.settings,
          e = Math.max(2 * d.items, 4),
          f = 2 * Math.ceil(c.length / 2),
          g = d.loop && c.length ? d.rewind ? e : Math.max(e, f) : 0,
          h = "",
          i = "";

      for (g /= 2; g > 0;) {
        b.push(this.normalize(b.length / 2, !0)), h += c[b[b.length - 1]][0].outerHTML, b.push(this.normalize(c.length - 1 - (b.length - 1) / 2, !0)), i = c[b[b.length - 1]][0].outerHTML + i, g -= 1;
      }

      this._clones = b, a(h).addClass("cloned").appendTo(this.$stage), a(i).addClass("cloned").prependTo(this.$stage);
    }
  }, {
    filter: ["width", "items", "settings"],
    run: function run() {
      for (var a = this.settings.rtl ? 1 : -1, b = this._clones.length + this._items.length, c = -1, d = 0, e = 0, f = []; ++c < b;) {
        d = f[c - 1] || 0, e = this._widths[this.relative(c)] + this.settings.margin, f.push(d + e * a);
      }

      this._coordinates = f;
    }
  }, {
    filter: ["width", "items", "settings"],
    run: function run() {
      var a = this.settings.stagePadding,
          b = this._coordinates,
          c = {
        width: Math.ceil(Math.abs(b[b.length - 1])) + 2 * a,
        "padding-left": a || "",
        "padding-right": a || ""
      };
      this.$stage.css(c);
    }
  }, {
    filter: ["width", "items", "settings"],
    run: function run(a) {
      var b = this._coordinates.length,
          c = !this.settings.autoWidth,
          d = this.$stage.children();
      if (c && a.items.merge) for (; b--;) {
        a.css.width = this._widths[this.relative(b)], d.eq(b).css(a.css);
      } else c && (a.css.width = a.items.width, d.css(a.css));
    }
  }, {
    filter: ["items"],
    run: function run() {
      this._coordinates.length < 1 && this.$stage.removeAttr("style");
    }
  }, {
    filter: ["width", "items", "settings"],
    run: function run(a) {
      a.current = a.current ? this.$stage.children().index(a.current) : 0, a.current = Math.max(this.minimum(), Math.min(this.maximum(), a.current)), this.reset(a.current);
    }
  }, {
    filter: ["position"],
    run: function run() {
      this.animate(this.coordinates(this._current));
    }
  }, {
    filter: ["width", "position", "items", "settings"],
    run: function run() {
      var a,
          b,
          c,
          d,
          e = this.settings.rtl ? 1 : -1,
          f = 2 * this.settings.stagePadding,
          g = this.coordinates(this.current()) + f,
          h = g + this.width() * e,
          i = [];

      for (c = 0, d = this._coordinates.length; c < d; c++) {
        a = this._coordinates[c - 1] || 0, b = Math.abs(this._coordinates[c]) + f * e, (this.op(a, "<=", g) && this.op(a, ">", h) || this.op(b, "<", g) && this.op(b, ">", h)) && i.push(c);
      }

      this.$stage.children(".active").removeClass("active"), this.$stage.children(":eq(" + i.join("), :eq(") + ")").addClass("active"), this.$stage.children(".center").removeClass("center"), this.settings.center && this.$stage.children().eq(this.current()).addClass("center");
    }
  }], e.prototype.initializeStage = function () {
    this.$stage = this.$element.find("." + this.settings.stageClass), this.$stage.length || (this.$element.addClass(this.options.loadingClass), this.$stage = a("<" + this.settings.stageElement + ' class="' + this.settings.stageClass + '"/>').wrap('<div class="' + this.settings.stageOuterClass + '"/>'), this.$element.append(this.$stage.parent()));
  }, e.prototype.initializeItems = function () {
    var b = this.$element.find(".owl-item");
    if (b.length) return this._items = b.get().map(function (b) {
      return a(b);
    }), this._mergers = this._items.map(function () {
      return 1;
    }), void this.refresh();
    this.replace(this.$element.children().not(this.$stage.parent())), this.isVisible() ? this.refresh() : this.invalidate("width"), this.$element.removeClass(this.options.loadingClass).addClass(this.options.loadedClass);
  }, e.prototype.initialize = function () {
    if (this.enter("initializing"), this.trigger("initialize"), this.$element.toggleClass(this.settings.rtlClass, this.settings.rtl), this.settings.autoWidth && !this.is("pre-loading")) {
      var a, b, c;
      a = this.$element.find("img"), b = this.settings.nestedItemSelector ? "." + this.settings.nestedItemSelector : d, c = this.$element.children(b).width(), a.length && c <= 0 && this.preloadAutoWidthImages(a);
    }

    this.initializeStage(), this.initializeItems(), this.registerEventHandlers(), this.leave("initializing"), this.trigger("initialized");
  }, e.prototype.isVisible = function () {
    return !this.settings.checkVisibility || this.$element.is(":visible");
  }, e.prototype.setup = function () {
    var b = this.viewport(),
        c = this.options.responsive,
        d = -1,
        e = null;
    c ? (a.each(c, function (a) {
      a <= b && a > d && (d = Number(a));
    }), e = a.extend({}, this.options, c[d]), "function" == typeof e.stagePadding && (e.stagePadding = e.stagePadding()), delete e.responsive, e.responsiveClass && this.$element.attr("class", this.$element.attr("class").replace(new RegExp("(" + this.options.responsiveClass + "-)\\S+\\s", "g"), "$1" + d))) : e = a.extend({}, this.options), this.trigger("change", {
      property: {
        name: "settings",
        value: e
      }
    }), this._breakpoint = d, this.settings = e, this.invalidate("settings"), this.trigger("changed", {
      property: {
        name: "settings",
        value: this.settings
      }
    });
  }, e.prototype.optionsLogic = function () {
    this.settings.autoWidth && (this.settings.stagePadding = !1, this.settings.merge = !1);
  }, e.prototype.prepare = function (b) {
    var c = this.trigger("prepare", {
      content: b
    });
    return c.data || (c.data = a("<" + this.settings.itemElement + "/>").addClass(this.options.itemClass).append(b)), this.trigger("prepared", {
      content: c.data
    }), c.data;
  }, e.prototype.update = function () {
    for (var b = 0, c = this._pipe.length, d = a.proxy(function (a) {
      return this[a];
    }, this._invalidated), e = {}; b < c;) {
      (this._invalidated.all || a.grep(this._pipe[b].filter, d).length > 0) && this._pipe[b].run(e), b++;
    }

    this._invalidated = {}, !this.is("valid") && this.enter("valid");
  }, e.prototype.width = function (a) {
    switch (a = a || e.Width.Default) {
      case e.Width.Inner:
      case e.Width.Outer:
        return this._width;

      default:
        return this._width - 2 * this.settings.stagePadding + this.settings.margin;
    }
  }, e.prototype.refresh = function () {
    this.enter("refreshing"), this.trigger("refresh"), this.setup(), this.optionsLogic(), this.$element.addClass(this.options.refreshClass), this.update(), this.$element.removeClass(this.options.refreshClass), this.leave("refreshing"), this.trigger("refreshed");
  }, e.prototype.onThrottledResize = function () {
    b.clearTimeout(this.resizeTimer), this.resizeTimer = b.setTimeout(this._handlers.onResize, this.settings.responsiveRefreshRate);
  }, e.prototype.onResize = function () {
    return !!this._items.length && this._width !== this.$element.width() && !!this.isVisible() && (this.enter("resizing"), this.trigger("resize").isDefaultPrevented() ? (this.leave("resizing"), !1) : (this.invalidate("width"), this.refresh(), this.leave("resizing"), void this.trigger("resized")));
  }, e.prototype.registerEventHandlers = function () {
    a.support.transition && this.$stage.on(a.support.transition.end + ".owl.core", a.proxy(this.onTransitionEnd, this)), !1 !== this.settings.responsive && this.on(b, "resize", this._handlers.onThrottledResize), this.settings.mouseDrag && (this.$element.addClass(this.options.dragClass), this.$stage.on("mousedown.owl.core", a.proxy(this.onDragStart, this)), this.$stage.on("dragstart.owl.core selectstart.owl.core", function () {
      return !1;
    })), this.settings.touchDrag && (this.$stage.on("touchstart.owl.core", a.proxy(this.onDragStart, this)), this.$stage.on("touchcancel.owl.core", a.proxy(this.onDragEnd, this)));
  }, e.prototype.onDragStart = function (b) {
    var d = null;
    3 !== b.which && (a.support.transform ? (d = this.$stage.css("transform").replace(/.*\(|\)| /g, "").split(","), d = {
      x: d[16 === d.length ? 12 : 4],
      y: d[16 === d.length ? 13 : 5]
    }) : (d = this.$stage.position(), d = {
      x: this.settings.rtl ? d.left + this.$stage.width() - this.width() + this.settings.margin : d.left,
      y: d.top
    }), this.is("animating") && (a.support.transform ? this.animate(d.x) : this.$stage.stop(), this.invalidate("position")), this.$element.toggleClass(this.options.grabClass, "mousedown" === b.type), this.speed(0), this._drag.time = new Date().getTime(), this._drag.target = a(b.target), this._drag.stage.start = d, this._drag.stage.current = d, this._drag.pointer = this.pointer(b), a(c).on("mouseup.owl.core touchend.owl.core", a.proxy(this.onDragEnd, this)), a(c).one("mousemove.owl.core touchmove.owl.core", a.proxy(function (b) {
      var d = this.difference(this._drag.pointer, this.pointer(b));
      a(c).on("mousemove.owl.core touchmove.owl.core", a.proxy(this.onDragMove, this)), Math.abs(d.x) < Math.abs(d.y) && this.is("valid") || (b.preventDefault(), this.enter("dragging"), this.trigger("drag"));
    }, this)));
  }, e.prototype.onDragMove = function (a) {
    var b = null,
        c = null,
        d = null,
        e = this.difference(this._drag.pointer, this.pointer(a)),
        f = this.difference(this._drag.stage.start, e);
    this.is("dragging") && (a.preventDefault(), this.settings.loop ? (b = this.coordinates(this.minimum()), c = this.coordinates(this.maximum() + 1) - b, f.x = ((f.x - b) % c + c) % c + b) : (b = this.settings.rtl ? this.coordinates(this.maximum()) : this.coordinates(this.minimum()), c = this.settings.rtl ? this.coordinates(this.minimum()) : this.coordinates(this.maximum()), d = this.settings.pullDrag ? -1 * e.x / 5 : 0, f.x = Math.max(Math.min(f.x, b + d), c + d)), this._drag.stage.current = f, this.animate(f.x));
  }, e.prototype.onDragEnd = function (b) {
    var d = this.difference(this._drag.pointer, this.pointer(b)),
        e = this._drag.stage.current,
        f = d.x > 0 ^ this.settings.rtl ? "left" : "right";
    a(c).off(".owl.core"), this.$element.removeClass(this.options.grabClass), (0 !== d.x && this.is("dragging") || !this.is("valid")) && (this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed), this.current(this.closest(e.x, 0 !== d.x ? f : this._drag.direction)), this.invalidate("position"), this.update(), this._drag.direction = f, (Math.abs(d.x) > 3 || new Date().getTime() - this._drag.time > 300) && this._drag.target.one("click.owl.core", function () {
      return !1;
    })), this.is("dragging") && (this.leave("dragging"), this.trigger("dragged"));
  }, e.prototype.closest = function (b, c) {
    var e = -1,
        f = 30,
        g = this.width(),
        h = this.coordinates();
    return this.settings.freeDrag || a.each(h, a.proxy(function (a, i) {
      return "left" === c && b > i - f && b < i + f ? e = a : "right" === c && b > i - g - f && b < i - g + f ? e = a + 1 : this.op(b, "<", i) && this.op(b, ">", h[a + 1] !== d ? h[a + 1] : i - g) && (e = "left" === c ? a + 1 : a), -1 === e;
    }, this)), this.settings.loop || (this.op(b, ">", h[this.minimum()]) ? e = b = this.minimum() : this.op(b, "<", h[this.maximum()]) && (e = b = this.maximum())), e;
  }, e.prototype.animate = function (b) {
    var c = this.speed() > 0;
    this.is("animating") && this.onTransitionEnd(), c && (this.enter("animating"), this.trigger("translate")), a.support.transform3d && a.support.transition ? this.$stage.css({
      transform: "translate3d(" + b + "px,0px,0px)",
      transition: this.speed() / 1e3 + "s"
    }) : c ? this.$stage.animate({
      left: b + "px"
    }, this.speed(), this.settings.fallbackEasing, a.proxy(this.onTransitionEnd, this)) : this.$stage.css({
      left: b + "px"
    });
  }, e.prototype.is = function (a) {
    return this._states.current[a] && this._states.current[a] > 0;
  }, e.prototype.current = function (a) {
    if (a === d) return this._current;
    if (0 === this._items.length) return d;

    if (a = this.normalize(a), this._current !== a) {
      var b = this.trigger("change", {
        property: {
          name: "position",
          value: a
        }
      });
      b.data !== d && (a = this.normalize(b.data)), this._current = a, this.invalidate("position"), this.trigger("changed", {
        property: {
          name: "position",
          value: this._current
        }
      });
    }

    return this._current;
  }, e.prototype.invalidate = function (b) {
    return "string" === a.type(b) && (this._invalidated[b] = !0, this.is("valid") && this.leave("valid")), a.map(this._invalidated, function (a, b) {
      return b;
    });
  }, e.prototype.reset = function (a) {
    (a = this.normalize(a)) !== d && (this._speed = 0, this._current = a, this.suppress(["translate", "translated"]), this.animate(this.coordinates(a)), this.release(["translate", "translated"]));
  }, e.prototype.normalize = function (a, b) {
    var c = this._items.length,
        e = b ? 0 : this._clones.length;
    return !this.isNumeric(a) || c < 1 ? a = d : (a < 0 || a >= c + e) && (a = ((a - e / 2) % c + c) % c + e / 2), a;
  }, e.prototype.relative = function (a) {
    return a -= this._clones.length / 2, this.normalize(a, !0);
  }, e.prototype.maximum = function (a) {
    var b,
        c,
        d,
        e = this.settings,
        f = this._coordinates.length;
    if (e.loop) f = this._clones.length / 2 + this._items.length - 1;else if (e.autoWidth || e.merge) {
      if (b = this._items.length) for (c = this._items[--b].width(), d = this.$element.width(); b-- && !((c += this._items[b].width() + this.settings.margin) > d);) {
        ;
      }
      f = b + 1;
    } else f = e.center ? this._items.length - 1 : this._items.length - e.items;
    return a && (f -= this._clones.length / 2), Math.max(f, 0);
  }, e.prototype.minimum = function (a) {
    return a ? 0 : this._clones.length / 2;
  }, e.prototype.items = function (a) {
    return a === d ? this._items.slice() : (a = this.normalize(a, !0), this._items[a]);
  }, e.prototype.mergers = function (a) {
    return a === d ? this._mergers.slice() : (a = this.normalize(a, !0), this._mergers[a]);
  }, e.prototype.clones = function (b) {
    var c = this._clones.length / 2,
        e = c + this._items.length,
        f = function f(a) {
      return a % 2 == 0 ? e + a / 2 : c - (a + 1) / 2;
    };

    return b === d ? a.map(this._clones, function (a, b) {
      return f(b);
    }) : a.map(this._clones, function (a, c) {
      return a === b ? f(c) : null;
    });
  }, e.prototype.speed = function (a) {
    return a !== d && (this._speed = a), this._speed;
  }, e.prototype.coordinates = function (b) {
    var c,
        e = 1,
        f = b - 1;
    return b === d ? a.map(this._coordinates, a.proxy(function (a, b) {
      return this.coordinates(b);
    }, this)) : (this.settings.center ? (this.settings.rtl && (e = -1, f = b + 1), c = this._coordinates[b], c += (this.width() - c + (this._coordinates[f] || 0)) / 2 * e) : c = this._coordinates[f] || 0, c = Math.ceil(c));
  }, e.prototype.duration = function (a, b, c) {
    return 0 === c ? 0 : Math.min(Math.max(Math.abs(b - a), 1), 6) * Math.abs(c || this.settings.smartSpeed);
  }, e.prototype.to = function (a, b) {
    var c = this.current(),
        d = null,
        e = a - this.relative(c),
        f = (e > 0) - (e < 0),
        g = this._items.length,
        h = this.minimum(),
        i = this.maximum();
    this.settings.loop ? (!this.settings.rewind && Math.abs(e) > g / 2 && (e += -1 * f * g), a = c + e, (d = ((a - h) % g + g) % g + h) !== a && d - e <= i && d - e > 0 && (c = d - e, a = d, this.reset(c))) : this.settings.rewind ? (i += 1, a = (a % i + i) % i) : a = Math.max(h, Math.min(i, a)), this.speed(this.duration(c, a, b)), this.current(a), this.isVisible() && this.update();
  }, e.prototype.next = function (a) {
    a = a || !1, this.to(this.relative(this.current()) + 1, a);
  }, e.prototype.prev = function (a) {
    a = a || !1, this.to(this.relative(this.current()) - 1, a);
  }, e.prototype.onTransitionEnd = function (a) {
    if (a !== d && (a.stopPropagation(), (a.target || a.srcElement || a.originalTarget) !== this.$stage.get(0))) return !1;
    this.leave("animating"), this.trigger("translated");
  }, e.prototype.viewport = function () {
    var d;
    return this.options.responsiveBaseElement !== b ? d = a(this.options.responsiveBaseElement).width() : b.innerWidth ? d = b.innerWidth : c.documentElement && c.documentElement.clientWidth ? d = c.documentElement.clientWidth : console.warn("Can not detect viewport width."), d;
  }, e.prototype.replace = function (b) {
    this.$stage.empty(), this._items = [], b && (b = b instanceof jQuery ? b : a(b)), this.settings.nestedItemSelector && (b = b.find("." + this.settings.nestedItemSelector)), b.filter(function () {
      return 1 === this.nodeType;
    }).each(a.proxy(function (a, b) {
      b = this.prepare(b), this.$stage.append(b), this._items.push(b), this._mergers.push(1 * b.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1);
    }, this)), this.reset(this.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0), this.invalidate("items");
  }, e.prototype.add = function (b, c) {
    var e = this.relative(this._current);
    c = c === d ? this._items.length : this.normalize(c, !0), b = b instanceof jQuery ? b : a(b), this.trigger("add", {
      content: b,
      position: c
    }), b = this.prepare(b), 0 === this._items.length || c === this._items.length ? (0 === this._items.length && this.$stage.append(b), 0 !== this._items.length && this._items[c - 1].after(b), this._items.push(b), this._mergers.push(1 * b.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)) : (this._items[c].before(b), this._items.splice(c, 0, b), this._mergers.splice(c, 0, 1 * b.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)), this._items[e] && this.reset(this._items[e].index()), this.invalidate("items"), this.trigger("added", {
      content: b,
      position: c
    });
  }, e.prototype.remove = function (a) {
    (a = this.normalize(a, !0)) !== d && (this.trigger("remove", {
      content: this._items[a],
      position: a
    }), this._items[a].remove(), this._items.splice(a, 1), this._mergers.splice(a, 1), this.invalidate("items"), this.trigger("removed", {
      content: null,
      position: a
    }));
  }, e.prototype.preloadAutoWidthImages = function (b) {
    b.each(a.proxy(function (b, c) {
      this.enter("pre-loading"), c = a(c), a(new Image()).one("load", a.proxy(function (a) {
        c.attr("src", a.target.src), c.css("opacity", 1), this.leave("pre-loading"), !this.is("pre-loading") && !this.is("initializing") && this.refresh();
      }, this)).attr("src", c.attr("src") || c.attr("data-src") || c.attr("data-src-retina"));
    }, this));
  }, e.prototype.destroy = function () {
    this.$element.off(".owl.core"), this.$stage.off(".owl.core"), a(c).off(".owl.core"), !1 !== this.settings.responsive && (b.clearTimeout(this.resizeTimer), this.off(b, "resize", this._handlers.onThrottledResize));

    for (var d in this._plugins) {
      this._plugins[d].destroy();
    }

    this.$stage.children(".cloned").remove(), this.$stage.unwrap(), this.$stage.children().contents().unwrap(), this.$stage.children().unwrap(), this.$stage.remove(), this.$element.removeClass(this.options.refreshClass).removeClass(this.options.loadingClass).removeClass(this.options.loadedClass).removeClass(this.options.rtlClass).removeClass(this.options.dragClass).removeClass(this.options.grabClass).attr("class", this.$element.attr("class").replace(new RegExp(this.options.responsiveClass + "-\\S+\\s", "g"), "")).removeData("owl.carousel");
  }, e.prototype.op = function (a, b, c) {
    var d = this.settings.rtl;

    switch (b) {
      case "<":
        return d ? a > c : a < c;

      case ">":
        return d ? a < c : a > c;

      case ">=":
        return d ? a <= c : a >= c;

      case "<=":
        return d ? a >= c : a <= c;
    }
  }, e.prototype.on = function (a, b, c, d) {
    a.addEventListener ? a.addEventListener(b, c, d) : a.attachEvent && a.attachEvent("on" + b, c);
  }, e.prototype.off = function (a, b, c, d) {
    a.removeEventListener ? a.removeEventListener(b, c, d) : a.detachEvent && a.detachEvent("on" + b, c);
  }, e.prototype.trigger = function (b, c, d, f, g) {
    var h = {
      item: {
        count: this._items.length,
        index: this.current()
      }
    },
        i = a.camelCase(a.grep(["on", b, d], function (a) {
      return a;
    }).join("-").toLowerCase()),
        j = a.Event([b, "owl", d || "carousel"].join(".").toLowerCase(), a.extend({
      relatedTarget: this
    }, h, c));
    return this._supress[b] || (a.each(this._plugins, function (a, b) {
      b.onTrigger && b.onTrigger(j);
    }), this.register({
      type: e.Type.Event,
      name: b
    }), this.$element.trigger(j), this.settings && "function" == typeof this.settings[i] && this.settings[i].call(this, j)), j;
  }, e.prototype.enter = function (b) {
    a.each([b].concat(this._states.tags[b] || []), a.proxy(function (a, b) {
      this._states.current[b] === d && (this._states.current[b] = 0), this._states.current[b]++;
    }, this));
  }, e.prototype.leave = function (b) {
    a.each([b].concat(this._states.tags[b] || []), a.proxy(function (a, b) {
      this._states.current[b]--;
    }, this));
  }, e.prototype.register = function (b) {
    if (b.type === e.Type.Event) {
      if (a.event.special[b.name] || (a.event.special[b.name] = {}), !a.event.special[b.name].owl) {
        var c = a.event.special[b.name]._default;
        a.event.special[b.name]._default = function (a) {
          return !c || !c.apply || a.namespace && -1 !== a.namespace.indexOf("owl") ? a.namespace && a.namespace.indexOf("owl") > -1 : c.apply(this, arguments);
        }, a.event.special[b.name].owl = !0;
      }
    } else b.type === e.Type.State && (this._states.tags[b.name] ? this._states.tags[b.name] = this._states.tags[b.name].concat(b.tags) : this._states.tags[b.name] = b.tags, this._states.tags[b.name] = a.grep(this._states.tags[b.name], a.proxy(function (c, d) {
      return a.inArray(c, this._states.tags[b.name]) === d;
    }, this)));
  }, e.prototype.suppress = function (b) {
    a.each(b, a.proxy(function (a, b) {
      this._supress[b] = !0;
    }, this));
  }, e.prototype.release = function (b) {
    a.each(b, a.proxy(function (a, b) {
      delete this._supress[b];
    }, this));
  }, e.prototype.pointer = function (a) {
    var c = {
      x: null,
      y: null
    };
    return a = a.originalEvent || a || b.event, a = a.touches && a.touches.length ? a.touches[0] : a.changedTouches && a.changedTouches.length ? a.changedTouches[0] : a, a.pageX ? (c.x = a.pageX, c.y = a.pageY) : (c.x = a.clientX, c.y = a.clientY), c;
  }, e.prototype.isNumeric = function (a) {
    return !isNaN(parseFloat(a));
  }, e.prototype.difference = function (a, b) {
    return {
      x: a.x - b.x,
      y: a.y - b.y
    };
  }, a.fn.owlCarousel = function (b) {
    var c = Array.prototype.slice.call(arguments, 1);
    return this.each(function () {
      var d = a(this),
          f = d.data("owl.carousel");
      f || (f = new e(this, "object" == _typeof(b) && b), d.data("owl.carousel", f), a.each(["next", "prev", "to", "destroy", "refresh", "replace", "add", "remove"], function (b, c) {
        f.register({
          type: e.Type.Event,
          name: c
        }), f.$element.on(c + ".owl.carousel.core", a.proxy(function (a) {
          a.namespace && a.relatedTarget !== this && (this.suppress([c]), f[c].apply(this, [].slice.call(arguments, 1)), this.release([c]));
        }, f));
      })), "string" == typeof b && "_" !== b.charAt(0) && f[b].apply(f, c);
    });
  }, a.fn.owlCarousel.Constructor = e;
}(window.Zepto || window.jQuery, window, document), function (a, b, c, d) {
  var e = function e(b) {
    this._core = b, this._interval = null, this._visible = null, this._handlers = {
      "initialized.owl.carousel": a.proxy(function (a) {
        a.namespace && this._core.settings.autoRefresh && this.watch();
      }, this)
    }, this._core.options = a.extend({}, e.Defaults, this._core.options), this._core.$element.on(this._handlers);
  };

  e.Defaults = {
    autoRefresh: !0,
    autoRefreshInterval: 500
  }, e.prototype.watch = function () {
    this._interval || (this._visible = this._core.isVisible(), this._interval = b.setInterval(a.proxy(this.refresh, this), this._core.settings.autoRefreshInterval));
  }, e.prototype.refresh = function () {
    this._core.isVisible() !== this._visible && (this._visible = !this._visible, this._core.$element.toggleClass("owl-hidden", !this._visible), this._visible && this._core.invalidate("width") && this._core.refresh());
  }, e.prototype.destroy = function () {
    var a, c;
    b.clearInterval(this._interval);

    for (a in this._handlers) {
      this._core.$element.off(a, this._handlers[a]);
    }

    for (c in Object.getOwnPropertyNames(this)) {
      "function" != typeof this[c] && (this[c] = null);
    }
  }, a.fn.owlCarousel.Constructor.Plugins.AutoRefresh = e;
}(window.Zepto || window.jQuery, window, document), function (a, b, c, d) {
  var e = function e(b) {
    this._core = b, this._loaded = [], this._handlers = {
      "initialized.owl.carousel change.owl.carousel resized.owl.carousel": a.proxy(function (b) {
        if (b.namespace && this._core.settings && this._core.settings.lazyLoad && (b.property && "position" == b.property.name || "initialized" == b.type)) for (var c = this._core.settings, e = c.center && Math.ceil(c.items / 2) || c.items, f = c.center && -1 * e || 0, g = (b.property && b.property.value !== d ? b.property.value : this._core.current()) + f, h = this._core.clones().length, i = a.proxy(function (a, b) {
          this.load(b);
        }, this); f++ < e;) {
          this.load(h / 2 + this._core.relative(g)), h && a.each(this._core.clones(this._core.relative(g)), i), g++;
        }
      }, this)
    }, this._core.options = a.extend({}, e.Defaults, this._core.options), this._core.$element.on(this._handlers);
  };

  e.Defaults = {
    lazyLoad: !1
  }, e.prototype.load = function (c) {
    var d = this._core.$stage.children().eq(c),
        e = d && d.find(".owl-lazy");

    !e || a.inArray(d.get(0), this._loaded) > -1 || (e.each(a.proxy(function (c, d) {
      var e,
          f = a(d),
          g = b.devicePixelRatio > 1 && f.attr("data-src-retina") || f.attr("data-src") || f.attr("data-srcset");
      this._core.trigger("load", {
        element: f,
        url: g
      }, "lazy"), f.is("img") ? f.one("load.owl.lazy", a.proxy(function () {
        f.css("opacity", 1), this._core.trigger("loaded", {
          element: f,
          url: g
        }, "lazy");
      }, this)).attr("src", g) : f.is("source") ? f.one("load.owl.lazy", a.proxy(function () {
        this._core.trigger("loaded", {
          element: f,
          url: g
        }, "lazy");
      }, this)).attr("srcset", g) : (e = new Image(), e.onload = a.proxy(function () {
        f.css({
          "background-image": 'url("' + g + '")',
          opacity: "1"
        }), this._core.trigger("loaded", {
          element: f,
          url: g
        }, "lazy");
      }, this), e.src = g);
    }, this)), this._loaded.push(d.get(0)));
  }, e.prototype.destroy = function () {
    var a, b;

    for (a in this.handlers) {
      this._core.$element.off(a, this.handlers[a]);
    }

    for (b in Object.getOwnPropertyNames(this)) {
      "function" != typeof this[b] && (this[b] = null);
    }
  }, a.fn.owlCarousel.Constructor.Plugins.Lazy = e;
}(window.Zepto || window.jQuery, window, document), function (a, b, c, d) {
  var e = function e(c) {
    this._core = c, this._handlers = {
      "initialized.owl.carousel refreshed.owl.carousel": a.proxy(function (a) {
        a.namespace && this._core.settings.autoHeight && this.update();
      }, this),
      "changed.owl.carousel": a.proxy(function (a) {
        a.namespace && this._core.settings.autoHeight && "position" === a.property.name && (console.log("update called"), this.update());
      }, this),
      "loaded.owl.lazy": a.proxy(function (a) {
        a.namespace && this._core.settings.autoHeight && a.element.closest("." + this._core.settings.itemClass).index() === this._core.current() && this.update();
      }, this)
    }, this._core.options = a.extend({}, e.Defaults, this._core.options), this._core.$element.on(this._handlers), this._intervalId = null;
    var d = this;
    a(b).on("load", function () {
      d._core.settings.autoHeight && d.update();
    }), a(b).resize(function () {
      d._core.settings.autoHeight && (null != d._intervalId && clearTimeout(d._intervalId), d._intervalId = setTimeout(function () {
        d.update();
      }, 250));
    });
  };

  e.Defaults = {
    autoHeight: !1,
    autoHeightClass: "owl-height"
  }, e.prototype.update = function () {
    var b = this._core._current,
        c = b + this._core.settings.items,
        d = this._core.$stage.children().toArray().slice(b, c),
        e = [],
        f = 0;

    a.each(d, function (b, c) {
      e.push(a(c).height());
    }), f = Math.max.apply(null, e), this._core.$stage.parent().height(f).addClass(this._core.settings.autoHeightClass);
  }, e.prototype.destroy = function () {
    var a, b;

    for (a in this._handlers) {
      this._core.$element.off(a, this._handlers[a]);
    }

    for (b in Object.getOwnPropertyNames(this)) {
      "function" != typeof this[b] && (this[b] = null);
    }
  }, a.fn.owlCarousel.Constructor.Plugins.AutoHeight = e;
}(window.Zepto || window.jQuery, window, document), function (a, b, c, d) {
  var e = function e(b) {
    this._core = b, this._videos = {}, this._playing = null, this._handlers = {
      "initialized.owl.carousel": a.proxy(function (a) {
        a.namespace && this._core.register({
          type: "state",
          name: "playing",
          tags: ["interacting"]
        });
      }, this),
      "resize.owl.carousel": a.proxy(function (a) {
        a.namespace && this._core.settings.video && this.isInFullScreen() && a.preventDefault();
      }, this),
      "refreshed.owl.carousel": a.proxy(function (a) {
        a.namespace && this._core.is("resizing") && this._core.$stage.find(".cloned .owl-video-frame").remove();
      }, this),
      "changed.owl.carousel": a.proxy(function (a) {
        a.namespace && "position" === a.property.name && this._playing && this.stop();
      }, this),
      "prepared.owl.carousel": a.proxy(function (b) {
        if (b.namespace) {
          var c = a(b.content).find(".owl-video");
          c.length && (c.css("display", "none"), this.fetch(c, a(b.content)));
        }
      }, this)
    }, this._core.options = a.extend({}, e.Defaults, this._core.options), this._core.$element.on(this._handlers), this._core.$element.on("click.owl.video", ".owl-video-play-icon", a.proxy(function (a) {
      this.play(a);
    }, this));
  };

  e.Defaults = {
    video: !1,
    videoHeight: !1,
    videoWidth: !1
  }, e.prototype.fetch = function (a, b) {
    var c = function () {
      return a.attr("data-vimeo-id") ? "vimeo" : a.attr("data-vzaar-id") ? "vzaar" : "youtube";
    }(),
        d = a.attr("data-vimeo-id") || a.attr("data-youtube-id") || a.attr("data-vzaar-id"),
        e = a.attr("data-width") || this._core.settings.videoWidth,
        f = a.attr("data-height") || this._core.settings.videoHeight,
        g = a.attr("href");

    if (!g) throw new Error("Missing video URL.");
    if (d = g.match(/(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/), d[3].indexOf("youtu") > -1) c = "youtube";else if (d[3].indexOf("vimeo") > -1) c = "vimeo";else {
      if (!(d[3].indexOf("vzaar") > -1)) throw new Error("Video URL not supported.");
      c = "vzaar";
    }
    d = d[6], this._videos[g] = {
      type: c,
      id: d,
      width: e,
      height: f
    }, b.attr("data-video", g), this.thumbnail(a, this._videos[g]);
  }, e.prototype.thumbnail = function (b, c) {
    var d,
        e,
        f,
        g = c.width && c.height ? 'style="width:' + c.width + "px;height:" + c.height + 'px;"' : "",
        h = b.find("img"),
        i = "src",
        j = "",
        k = this._core.settings,
        l = function l(a) {
      e = '<div class="owl-video-play-icon"></div>', d = k.lazyLoad ? '<div class="owl-video-tn ' + j + '" ' + i + '="' + a + '"></div>' : '<div class="owl-video-tn" style="opacity:1;background-image:url(' + a + ')"></div>', b.after(d), b.after(e);
    };

    if (b.wrap('<div class="owl-video-wrapper"' + g + "></div>"), this._core.settings.lazyLoad && (i = "data-src", j = "owl-lazy"), h.length) return l(h.attr(i)), h.remove(), !1;
    "youtube" === c.type ? (f = "//img.youtube.com/vi/" + c.id + "/hqdefault.jpg", l(f)) : "vimeo" === c.type ? a.ajax({
      type: "GET",
      url: "//vimeo.com/api/v2/video/" + c.id + ".json",
      jsonp: "callback",
      dataType: "jsonp",
      success: function success(a) {
        f = a[0].thumbnail_large, l(f);
      }
    }) : "vzaar" === c.type && a.ajax({
      type: "GET",
      url: "//vzaar.com/api/videos/" + c.id + ".json",
      jsonp: "callback",
      dataType: "jsonp",
      success: function success(a) {
        f = a.framegrab_url, l(f);
      }
    });
  }, e.prototype.stop = function () {
    this._core.trigger("stop", null, "video"), this._playing.find(".owl-video-frame").remove(), this._playing.removeClass("owl-video-playing"), this._playing = null, this._core.leave("playing"), this._core.trigger("stopped", null, "video");
  }, e.prototype.play = function (b) {
    var c,
        d = a(b.target),
        e = d.closest("." + this._core.settings.itemClass),
        f = this._videos[e.attr("data-video")],
        g = f.width || "100%",
        h = f.height || this._core.$stage.height();

    this._playing || (this._core.enter("playing"), this._core.trigger("play", null, "video"), e = this._core.items(this._core.relative(e.index())), this._core.reset(e.index()), "youtube" === f.type ? c = '<iframe width="' + g + '" height="' + h + '" src="//www.youtube.com/embed/' + f.id + "?autoplay=1&rel=0&v=" + f.id + '" frameborder="0" allowfullscreen></iframe>' : "vimeo" === f.type ? c = '<iframe src="//player.vimeo.com/video/' + f.id + '?autoplay=1" width="' + g + '" height="' + h + '" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>' : "vzaar" === f.type && (c = '<iframe frameborder="0"height="' + h + '"width="' + g + '" allowfullscreen mozallowfullscreen webkitAllowFullScreen src="//view.vzaar.com/' + f.id + '/player?autoplay=true"></iframe>'), a('<div class="owl-video-frame">' + c + "</div>").insertAfter(e.find(".owl-video")), this._playing = e.addClass("owl-video-playing"));
  }, e.prototype.isInFullScreen = function () {
    var b = c.fullscreenElement || c.mozFullScreenElement || c.webkitFullscreenElement;
    return b && a(b).parent().hasClass("owl-video-frame");
  }, e.prototype.destroy = function () {
    var a, b;

    this._core.$element.off("click.owl.video");

    for (a in this._handlers) {
      this._core.$element.off(a, this._handlers[a]);
    }

    for (b in Object.getOwnPropertyNames(this)) {
      "function" != typeof this[b] && (this[b] = null);
    }
  }, a.fn.owlCarousel.Constructor.Plugins.Video = e;
}(window.Zepto || window.jQuery, window, document), function (a, b, c, d) {
  var e = function e(b) {
    this.core = b, this.core.options = a.extend({}, e.Defaults, this.core.options), this.swapping = !0, this.previous = d, this.next = d, this.handlers = {
      "change.owl.carousel": a.proxy(function (a) {
        a.namespace && "position" == a.property.name && (this.previous = this.core.current(), this.next = a.property.value);
      }, this),
      "drag.owl.carousel dragged.owl.carousel translated.owl.carousel": a.proxy(function (a) {
        a.namespace && (this.swapping = "translated" == a.type);
      }, this),
      "translate.owl.carousel": a.proxy(function (a) {
        a.namespace && this.swapping && (this.core.options.animateOut || this.core.options.animateIn) && this.swap();
      }, this)
    }, this.core.$element.on(this.handlers);
  };

  e.Defaults = {
    animateOut: !1,
    animateIn: !1
  }, e.prototype.swap = function () {
    if (1 === this.core.settings.items && a.support.animation && a.support.transition) {
      this.core.speed(0);
      var b,
          c = a.proxy(this.clear, this),
          d = this.core.$stage.children().eq(this.previous),
          e = this.core.$stage.children().eq(this.next),
          f = this.core.settings.animateIn,
          g = this.core.settings.animateOut;
      this.core.current() !== this.previous && (g && (b = this.core.coordinates(this.previous) - this.core.coordinates(this.next), d.one(a.support.animation.end, c).css({
        left: b + "px"
      }).addClass("animated owl-animated-out").addClass(g)), f && e.one(a.support.animation.end, c).addClass("animated owl-animated-in").addClass(f));
    }
  }, e.prototype.clear = function (b) {
    a(b.target).css({
      left: ""
    }).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut), this.core.onTransitionEnd();
  }, e.prototype.destroy = function () {
    var a, b;

    for (a in this.handlers) {
      this.core.$element.off(a, this.handlers[a]);
    }

    for (b in Object.getOwnPropertyNames(this)) {
      "function" != typeof this[b] && (this[b] = null);
    }
  }, a.fn.owlCarousel.Constructor.Plugins.Animate = e;
}(window.Zepto || window.jQuery, window, document), function (a, b, c, d) {
  var e = function e(b) {
    this._core = b, this._call = null, this._time = 0, this._timeout = 0, this._paused = !0, this._handlers = {
      "changed.owl.carousel": a.proxy(function (a) {
        a.namespace && "settings" === a.property.name ? this._core.settings.autoplay ? this.play() : this.stop() : a.namespace && "position" === a.property.name && this._paused && (this._time = 0);
      }, this),
      "initialized.owl.carousel": a.proxy(function (a) {
        a.namespace && this._core.settings.autoplay && this.play();
      }, this),
      "play.owl.autoplay": a.proxy(function (a, b, c) {
        a.namespace && this.play(b, c);
      }, this),
      "stop.owl.autoplay": a.proxy(function (a) {
        a.namespace && this.stop();
      }, this),
      "mouseover.owl.autoplay": a.proxy(function () {
        this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause();
      }, this),
      "mouseleave.owl.autoplay": a.proxy(function () {
        this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.play();
      }, this),
      "touchstart.owl.core": a.proxy(function () {
        this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause();
      }, this),
      "touchend.owl.core": a.proxy(function () {
        this._core.settings.autoplayHoverPause && this.play();
      }, this)
    }, this._core.$element.on(this._handlers), this._core.options = a.extend({}, e.Defaults, this._core.options);
  };

  e.Defaults = {
    autoplay: !1,
    autoplayTimeout: 5e3,
    autoplayHoverPause: !1,
    autoplaySpeed: !1
  }, e.prototype._next = function (d) {
    this._call = b.setTimeout(a.proxy(this._next, this, d), this._timeout * (Math.round(this.read() / this._timeout) + 1) - this.read()), this._core.is("interacting") || c.hidden || this._core.next(d || this._core.settings.autoplaySpeed);
  }, e.prototype.read = function () {
    return new Date().getTime() - this._time;
  }, e.prototype.play = function (c, d) {
    var e;
    this._core.is("rotating") || this._core.enter("rotating"), c = c || this._core.settings.autoplayTimeout, e = Math.min(this._time % (this._timeout || c), c), this._paused ? (this._time = this.read(), this._paused = !1) : b.clearTimeout(this._call), this._time += this.read() % c - e, this._timeout = c, this._call = b.setTimeout(a.proxy(this._next, this, d), c - e);
  }, e.prototype.stop = function () {
    this._core.is("rotating") && (this._time = 0, this._paused = !0, b.clearTimeout(this._call), this._core.leave("rotating"));
  }, e.prototype.pause = function () {
    this._core.is("rotating") && !this._paused && (this._time = this.read(), this._paused = !0, b.clearTimeout(this._call));
  }, e.prototype.destroy = function () {
    var a, b;
    this.stop();

    for (a in this._handlers) {
      this._core.$element.off(a, this._handlers[a]);
    }

    for (b in Object.getOwnPropertyNames(this)) {
      "function" != typeof this[b] && (this[b] = null);
    }
  }, a.fn.owlCarousel.Constructor.Plugins.autoplay = e;
}(window.Zepto || window.jQuery, window, document), function (a, b, c, d) {
  "use strict";

  var e = function e(b) {
    this._core = b, this._initialized = !1, this._pages = [], this._controls = {}, this._templates = [], this.$element = this._core.$element, this._overrides = {
      next: this._core.next,
      prev: this._core.prev,
      to: this._core.to
    }, this._handlers = {
      "prepared.owl.carousel": a.proxy(function (b) {
        b.namespace && this._core.settings.dotsData && this._templates.push('<div class="' + this._core.settings.dotClass + '">' + a(b.content).find("[data-dot]").addBack("[data-dot]").attr("data-dot") + "</div>");
      }, this),
      "added.owl.carousel": a.proxy(function (a) {
        a.namespace && this._core.settings.dotsData && this._templates.splice(a.position, 0, this._templates.pop());
      }, this),
      "remove.owl.carousel": a.proxy(function (a) {
        a.namespace && this._core.settings.dotsData && this._templates.splice(a.position, 1);
      }, this),
      "changed.owl.carousel": a.proxy(function (a) {
        a.namespace && "position" == a.property.name && this.draw();
      }, this),
      "initialized.owl.carousel": a.proxy(function (a) {
        a.namespace && !this._initialized && (this._core.trigger("initialize", null, "navigation"), this.initialize(), this.update(), this.draw(), this._initialized = !0, this._core.trigger("initialized", null, "navigation"));
      }, this),
      "refreshed.owl.carousel": a.proxy(function (a) {
        a.namespace && this._initialized && (this._core.trigger("refresh", null, "navigation"), this.update(), this.draw(), this._core.trigger("refreshed", null, "navigation"));
      }, this)
    }, this._core.options = a.extend({}, e.Defaults, this._core.options), this.$element.on(this._handlers);
  };

  e.Defaults = {
    nav: !1,
    navText: ['<span aria-label="Previous">&#x2039;</span>', '<span aria-label="Next">&#x203a;</span>'],
    navSpeed: !1,
    navElement: 'button type="button" role="presentation"',
    navContainer: !1,
    navContainerClass: "owl-nav",
    navClass: ["owl-prev", "owl-next"],
    slideBy: 1,
    dotClass: "owl-dot",
    dotsClass: "owl-dots",
    dots: !0,
    dotsEach: !1,
    dotsData: !1,
    dotsSpeed: !1,
    dotsContainer: !1
  }, e.prototype.initialize = function () {
    var b,
        c = this._core.settings;
    this._controls.$relative = (c.navContainer ? a(c.navContainer) : a("<div>").addClass(c.navContainerClass).appendTo(this.$element)).addClass("disabled"), this._controls.$previous = a("<" + c.navElement + ">").addClass(c.navClass[0]).html(c.navText[0]).prependTo(this._controls.$relative).on("click", a.proxy(function (a) {
      this.prev(c.navSpeed);
    }, this)), this._controls.$next = a("<" + c.navElement + ">").addClass(c.navClass[1]).html(c.navText[1]).appendTo(this._controls.$relative).on("click", a.proxy(function (a) {
      this.next(c.navSpeed);
    }, this)), c.dotsData || (this._templates = [a('<button role="button">').addClass(c.dotClass).append(a("<span>")).prop("outerHTML")]), this._controls.$absolute = (c.dotsContainer ? a(c.dotsContainer) : a("<div>").addClass(c.dotsClass).appendTo(this.$element)).addClass("disabled"), this._controls.$absolute.on("click", "button", a.proxy(function (b) {
      var d = a(b.target).parent().is(this._controls.$absolute) ? a(b.target).index() : a(b.target).parent().index();
      b.preventDefault(), this.to(d, c.dotsSpeed);
    }, this));

    for (b in this._overrides) {
      this._core[b] = a.proxy(this[b], this);
    }
  }, e.prototype.destroy = function () {
    var a, b, c, d, e;
    e = this._core.settings;

    for (a in this._handlers) {
      this.$element.off(a, this._handlers[a]);
    }

    for (b in this._controls) {
      "$relative" === b && e.navContainer ? this._controls[b].html("") : this._controls[b].remove();
    }

    for (d in this.overides) {
      this._core[d] = this._overrides[d];
    }

    for (c in Object.getOwnPropertyNames(this)) {
      "function" != typeof this[c] && (this[c] = null);
    }
  }, e.prototype.update = function () {
    var a,
        b,
        c,
        d = this._core.clones().length / 2,
        e = d + this._core.items().length,
        f = this._core.maximum(!0),
        g = this._core.settings,
        h = g.center || g.autoWidth || g.dotsData ? 1 : g.dotsEach || g.items;

    if ("page" !== g.slideBy && (g.slideBy = Math.min(g.slideBy, g.items)), g.dots || "page" == g.slideBy) for (this._pages = [], a = d, b = 0, c = 0; a < e; a++) {
      if (b >= h || 0 === b) {
        if (this._pages.push({
          start: Math.min(f, a - d),
          end: a - d + h - 1
        }), Math.min(f, a - d) === f) break;
        b = 0, ++c;
      }

      b += this._core.mergers(this._core.relative(a));
    }
  }, e.prototype.draw = function () {
    var b,
        c = this._core.settings,
        d = this._core.items().length <= c.items,
        e = this._core.relative(this._core.current()),
        f = c.loop || c.rewind;

    this._controls.$relative.toggleClass("disabled", !c.nav || d), c.nav && (this._controls.$previous.toggleClass("disabled", !f && e <= this._core.minimum(!0)), this._controls.$next.toggleClass("disabled", !f && e >= this._core.maximum(!0))), this._controls.$absolute.toggleClass("disabled", !c.dots || d), c.dots && (b = this._pages.length - this._controls.$absolute.children().length, c.dotsData && 0 !== b ? this._controls.$absolute.html(this._templates.join("")) : b > 0 ? this._controls.$absolute.append(new Array(b + 1).join(this._templates[0])) : b < 0 && this._controls.$absolute.children().slice(b).remove(), this._controls.$absolute.find(".active").removeClass("active"), this._controls.$absolute.children().eq(a.inArray(this.current(), this._pages)).addClass("active"));
  }, e.prototype.onTrigger = function (b) {
    var c = this._core.settings;
    b.page = {
      index: a.inArray(this.current(), this._pages),
      count: this._pages.length,
      size: c && (c.center || c.autoWidth || c.dotsData ? 1 : c.dotsEach || c.items)
    };
  }, e.prototype.current = function () {
    var b = this._core.relative(this._core.current());

    return a.grep(this._pages, a.proxy(function (a, c) {
      return a.start <= b && a.end >= b;
    }, this)).pop();
  }, e.prototype.getPosition = function (b) {
    var c,
        d,
        e = this._core.settings;
    return "page" == e.slideBy ? (c = a.inArray(this.current(), this._pages), d = this._pages.length, b ? ++c : --c, c = this._pages[(c % d + d) % d].start) : (c = this._core.relative(this._core.current()), d = this._core.items().length, b ? c += e.slideBy : c -= e.slideBy), c;
  }, e.prototype.next = function (b) {
    a.proxy(this._overrides.to, this._core)(this.getPosition(!0), b);
  }, e.prototype.prev = function (b) {
    a.proxy(this._overrides.to, this._core)(this.getPosition(!1), b);
  }, e.prototype.to = function (b, c, d) {
    var e;
    !d && this._pages.length ? (e = this._pages.length, a.proxy(this._overrides.to, this._core)(this._pages[(b % e + e) % e].start, c)) : a.proxy(this._overrides.to, this._core)(b, c);
  }, a.fn.owlCarousel.Constructor.Plugins.Navigation = e;
}(window.Zepto || window.jQuery, window, document), function (a, b, c, d) {
  "use strict";

  var e = function e(c) {
    this._core = c, this._hashes = {}, this.$element = this._core.$element, this._handlers = {
      "initialized.owl.carousel": a.proxy(function (c) {
        c.namespace && "URLHash" === this._core.settings.startPosition && a(b).trigger("hashchange.owl.navigation");
      }, this),
      "prepared.owl.carousel": a.proxy(function (b) {
        if (b.namespace) {
          var c = a(b.content).find("[data-hash]").addBack("[data-hash]").attr("data-hash");
          if (!c) return;
          this._hashes[c] = b.content;
        }
      }, this),
      "changed.owl.carousel": a.proxy(function (c) {
        if (c.namespace && "position" === c.property.name) {
          var d = this._core.items(this._core.relative(this._core.current())),
              e = a.map(this._hashes, function (a, b) {
            return a === d ? b : null;
          }).join();

          if (!e || b.location.hash.slice(1) === e) return;
          b.location.hash = e;
        }
      }, this)
    }, this._core.options = a.extend({}, e.Defaults, this._core.options), this.$element.on(this._handlers), a(b).on("hashchange.owl.navigation", a.proxy(function (a) {
      var c = b.location.hash.substring(1),
          e = this._core.$stage.children(),
          f = this._hashes[c] && e.index(this._hashes[c]);

      f !== d && f !== this._core.current() && this._core.to(this._core.relative(f), !1, !0);
    }, this));
  };

  e.Defaults = {
    URLhashListener: !1
  }, e.prototype.destroy = function () {
    var c, d;
    a(b).off("hashchange.owl.navigation");

    for (c in this._handlers) {
      this._core.$element.off(c, this._handlers[c]);
    }

    for (d in Object.getOwnPropertyNames(this)) {
      "function" != typeof this[d] && (this[d] = null);
    }
  }, a.fn.owlCarousel.Constructor.Plugins.Hash = e;
}(window.Zepto || window.jQuery, window, document), function (a, b, c, d) {
  function e(b, c) {
    var e = !1,
        f = b.charAt(0).toUpperCase() + b.slice(1);
    return a.each((b + " " + h.join(f + " ") + f).split(" "), function (a, b) {
      if (g[b] !== d) return e = !c || b, !1;
    }), e;
  }

  function f(a) {
    return e(a, !0);
  }

  var g = a("<support>").get(0).style,
      h = "Webkit Moz O ms".split(" "),
      i = {
    transition: {
      end: {
        WebkitTransition: "webkitTransitionEnd",
        MozTransition: "transitionend",
        OTransition: "oTransitionEnd",
        transition: "transitionend"
      }
    },
    animation: {
      end: {
        WebkitAnimation: "webkitAnimationEnd",
        MozAnimation: "animationend",
        OAnimation: "oAnimationEnd",
        animation: "animationend"
      }
    }
  },
      j = {
    csstransforms: function csstransforms() {
      return !!e("transform");
    },
    csstransforms3d: function csstransforms3d() {
      return !!e("perspective");
    },
    csstransitions: function csstransitions() {
      return !!e("transition");
    },
    cssanimations: function cssanimations() {
      return !!e("animation");
    }
  };
  j.csstransitions() && (a.support.transition = new String(f("transition")), a.support.transition.end = i.transition.end[a.support.transition]), j.cssanimations() && (a.support.animation = new String(f("animation")), a.support.animation.end = i.animation.end[a.support.animation]), j.csstransforms() && (a.support.transform = new String(f("transform")), a.support.transform3d = j.csstransforms3d());
}(window.Zepto || window.jQuery, window, document);

/***/ }),

/***/ "./resources/mix/js/particles.js":
/*!***************************************!*\
  !*** ./resources/mix/js/particles.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/* -----------------------------------------------
/* Author : Vincent Garreau  - vincentgarreau.com
/* MIT license: http://opensource.org/licenses/MIT
/* Demo / Generator : vincentgarreau.com/particles.js
/* GitHub : github.com/VincentGarreau/particles.js
/* How to use? : Check the GitHub README
/* v2.0.0
/* ----------------------------------------------- */
function hexToRgb(e) {
  var a = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  e = e.replace(a, function (e, a, t, i) {
    return a + a + t + t + i + i;
  });
  var t = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);
  return t ? {
    r: parseInt(t[1], 16),
    g: parseInt(t[2], 16),
    b: parseInt(t[3], 16)
  } : null;
}

function clamp(e, a, t) {
  return Math.min(Math.max(e, a), t);
}

function isInArray(e, a) {
  return a.indexOf(e) > -1;
}

var pJS = function pJS(e, a) {
  var t = document.querySelector("#" + e + " > .particles-js-canvas-el");
  this.pJS = {
    canvas: {
      el: t,
      w: t.offsetWidth,
      h: t.offsetHeight
    },
    particles: {
      number: {
        value: 400,
        density: {
          enable: !0,
          value_area: 800
        }
      },
      color: {
        value: "#fff"
      },
      shape: {
        type: "circle",
        stroke: {
          width: 0,
          color: "#ff0000"
        },
        polygon: {
          nb_sides: 5
        },
        image: {
          src: "",
          width: 100,
          height: 100
        }
      },
      opacity: {
        value: 1,
        random: !1,
        anim: {
          enable: !1,
          speed: 2,
          opacity_min: 0,
          sync: !1
        }
      },
      size: {
        value: 20,
        random: !1,
        anim: {
          enable: !1,
          speed: 20,
          size_min: 0,
          sync: !1
        }
      },
      line_linked: {
        enable: !0,
        distance: 100,
        color: "#fff",
        opacity: 1,
        width: 1
      },
      move: {
        enable: !0,
        speed: 2,
        direction: "none",
        random: !1,
        straight: !1,
        out_mode: "out",
        bounce: !1,
        attract: {
          enable: !1,
          rotateX: 3e3,
          rotateY: 3e3
        }
      },
      array: []
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: !0,
          mode: "grab"
        },
        onclick: {
          enable: !0,
          mode: "push"
        },
        resize: !0
      },
      modes: {
        grab: {
          distance: 100,
          line_linked: {
            opacity: 1
          }
        },
        bubble: {
          distance: 200,
          size: 80,
          duration: .4
        },
        repulse: {
          distance: 200,
          duration: .4
        },
        push: {
          particles_nb: 4
        },
        remove: {
          particles_nb: 2
        }
      },
      mouse: {}
    },
    retina_detect: !1,
    fn: {
      interact: {},
      modes: {},
      vendors: {}
    },
    tmp: {}
  };
  var i = this.pJS;
  a && Object.deepExtend(i, a), i.tmp.obj = {
    size_value: i.particles.size.value,
    size_anim_speed: i.particles.size.anim.speed,
    move_speed: i.particles.move.speed,
    line_linked_distance: i.particles.line_linked.distance,
    line_linked_width: i.particles.line_linked.width,
    mode_grab_distance: i.interactivity.modes.grab.distance,
    mode_bubble_distance: i.interactivity.modes.bubble.distance,
    mode_bubble_size: i.interactivity.modes.bubble.size,
    mode_repulse_distance: i.interactivity.modes.repulse.distance
  }, i.fn.retinaInit = function () {
    i.retina_detect && window.devicePixelRatio > 1 ? (i.canvas.pxratio = window.devicePixelRatio, i.tmp.retina = !0) : (i.canvas.pxratio = 1, i.tmp.retina = !1), i.canvas.w = i.canvas.el.offsetWidth * i.canvas.pxratio, i.canvas.h = i.canvas.el.offsetHeight * i.canvas.pxratio, i.particles.size.value = i.tmp.obj.size_value * i.canvas.pxratio, i.particles.size.anim.speed = i.tmp.obj.size_anim_speed * i.canvas.pxratio, i.particles.move.speed = i.tmp.obj.move_speed * i.canvas.pxratio, i.particles.line_linked.distance = i.tmp.obj.line_linked_distance * i.canvas.pxratio, i.interactivity.modes.grab.distance = i.tmp.obj.mode_grab_distance * i.canvas.pxratio, i.interactivity.modes.bubble.distance = i.tmp.obj.mode_bubble_distance * i.canvas.pxratio, i.particles.line_linked.width = i.tmp.obj.line_linked_width * i.canvas.pxratio, i.interactivity.modes.bubble.size = i.tmp.obj.mode_bubble_size * i.canvas.pxratio, i.interactivity.modes.repulse.distance = i.tmp.obj.mode_repulse_distance * i.canvas.pxratio;
  }, i.fn.canvasInit = function () {
    i.canvas.ctx = i.canvas.el.getContext("2d");
  }, i.fn.canvasSize = function () {
    i.canvas.el.width = i.canvas.w, i.canvas.el.height = i.canvas.h, i && i.interactivity.events.resize && window.addEventListener("resize", function () {
      i.canvas.w = i.canvas.el.offsetWidth, i.canvas.h = i.canvas.el.offsetHeight, i.tmp.retina && (i.canvas.w *= i.canvas.pxratio, i.canvas.h *= i.canvas.pxratio), i.canvas.el.width = i.canvas.w, i.canvas.el.height = i.canvas.h, i.particles.move.enable || (i.fn.particlesEmpty(), i.fn.particlesCreate(), i.fn.particlesDraw(), i.fn.vendors.densityAutoParticles()), i.fn.vendors.densityAutoParticles();
    });
  }, i.fn.canvasPaint = function () {
    i.canvas.ctx.fillRect(0, 0, i.canvas.w, i.canvas.h);
  }, i.fn.canvasClear = function () {
    i.canvas.ctx.clearRect(0, 0, i.canvas.w, i.canvas.h);
  }, i.fn.particle = function (e, a, t) {
    if (this.radius = (i.particles.size.random ? Math.random() : 1) * i.particles.size.value, i.particles.size.anim.enable && (this.size_status = !1, this.vs = i.particles.size.anim.speed / 100, i.particles.size.anim.sync || (this.vs = this.vs * Math.random())), this.x = t ? t.x : Math.random() * i.canvas.w, this.y = t ? t.y : Math.random() * i.canvas.h, this.x > i.canvas.w - 2 * this.radius ? this.x = this.x - this.radius : this.x < 2 * this.radius && (this.x = this.x + this.radius), this.y > i.canvas.h - 2 * this.radius ? this.y = this.y - this.radius : this.y < 2 * this.radius && (this.y = this.y + this.radius), i.particles.move.bounce && i.fn.vendors.checkOverlap(this, t), this.color = {}, "object" == _typeof(e.value)) {
      if (e.value instanceof Array) {
        var s = e.value[Math.floor(Math.random() * i.particles.color.value.length)];
        this.color.rgb = hexToRgb(s);
      } else void 0 != e.value.r && void 0 != e.value.g && void 0 != e.value.b && (this.color.rgb = {
        r: e.value.r,
        g: e.value.g,
        b: e.value.b
      }), void 0 != e.value.h && void 0 != e.value.s && void 0 != e.value.l && (this.color.hsl = {
        h: e.value.h,
        s: e.value.s,
        l: e.value.l
      });
    } else "random" == e.value ? this.color.rgb = {
      r: Math.floor(256 * Math.random()) + 0,
      g: Math.floor(256 * Math.random()) + 0,
      b: Math.floor(256 * Math.random()) + 0
    } : "string" == typeof e.value && (this.color = e, this.color.rgb = hexToRgb(this.color.value));
    this.opacity = (i.particles.opacity.random ? Math.random() : 1) * i.particles.opacity.value, i.particles.opacity.anim.enable && (this.opacity_status = !1, this.vo = i.particles.opacity.anim.speed / 100, i.particles.opacity.anim.sync || (this.vo = this.vo * Math.random()));
    var n = {};

    switch (i.particles.move.direction) {
      case "top":
        n = {
          x: 0,
          y: -1
        };
        break;

      case "top-right":
        n = {
          x: .5,
          y: -.5
        };
        break;

      case "right":
        n = {
          x: 1,
          y: -0
        };
        break;

      case "bottom-right":
        n = {
          x: .5,
          y: .5
        };
        break;

      case "bottom":
        n = {
          x: 0,
          y: 1
        };
        break;

      case "bottom-left":
        n = {
          x: -.5,
          y: 1
        };
        break;

      case "left":
        n = {
          x: -1,
          y: 0
        };
        break;

      case "top-left":
        n = {
          x: -.5,
          y: -.5
        };
        break;

      default:
        n = {
          x: 0,
          y: 0
        };
    }

    i.particles.move.straight ? (this.vx = n.x, this.vy = n.y, i.particles.move.random && (this.vx = this.vx * Math.random(), this.vy = this.vy * Math.random())) : (this.vx = n.x + Math.random() - .5, this.vy = n.y + Math.random() - .5), this.vx_i = this.vx, this.vy_i = this.vy;
    var r = i.particles.shape.type;

    if ("object" == _typeof(r)) {
      if (r instanceof Array) {
        var c = r[Math.floor(Math.random() * r.length)];
        this.shape = c;
      }
    } else this.shape = r;

    if ("image" == this.shape) {
      var o = i.particles.shape;
      this.img = {
        src: o.image.src,
        ratio: o.image.width / o.image.height
      }, this.img.ratio || (this.img.ratio = 1), "svg" == i.tmp.img_type && void 0 != i.tmp.source_svg && (i.fn.vendors.createSvgImg(this), i.tmp.pushing && (this.img.loaded = !1));
    }
  }, i.fn.particle.prototype.draw = function () {
    function e() {
      i.canvas.ctx.drawImage(r, a.x - t, a.y - t, 2 * t, 2 * t / a.img.ratio);
    }

    var a = this;
    if (void 0 != a.radius_bubble) var t = a.radius_bubble;else var t = a.radius;
    if (void 0 != a.opacity_bubble) var s = a.opacity_bubble;else var s = a.opacity;
    if (a.color.rgb) var n = "rgba(" + a.color.rgb.r + "," + a.color.rgb.g + "," + a.color.rgb.b + "," + s + ")";else var n = "hsla(" + a.color.hsl.h + "," + a.color.hsl.s + "%," + a.color.hsl.l + "%," + s + ")";

    switch (i.canvas.ctx.fillStyle = n, i.canvas.ctx.beginPath(), a.shape) {
      case "circle":
        i.canvas.ctx.arc(a.x, a.y, t, 0, 2 * Math.PI, !1);
        break;

      case "edge":
        i.canvas.ctx.rect(a.x - t, a.y - t, 2 * t, 2 * t);
        break;

      case "triangle":
        i.fn.vendors.drawShape(i.canvas.ctx, a.x - t, a.y + t / 1.66, 2 * t, 3, 2);
        break;

      case "polygon":
        i.fn.vendors.drawShape(i.canvas.ctx, a.x - t / (i.particles.shape.polygon.nb_sides / 3.5), a.y - t / .76, 2.66 * t / (i.particles.shape.polygon.nb_sides / 3), i.particles.shape.polygon.nb_sides, 1);
        break;

      case "star":
        i.fn.vendors.drawShape(i.canvas.ctx, a.x - 2 * t / (i.particles.shape.polygon.nb_sides / 4), a.y - t / 1.52, 2 * t * 2.66 / (i.particles.shape.polygon.nb_sides / 3), i.particles.shape.polygon.nb_sides, 2);
        break;

      case "image":
        if ("svg" == i.tmp.img_type) var r = a.img.obj;else var r = i.tmp.img_obj;
        r && e();
    }

    i.canvas.ctx.closePath(), i.particles.shape.stroke.width > 0 && (i.canvas.ctx.strokeStyle = i.particles.shape.stroke.color, i.canvas.ctx.lineWidth = i.particles.shape.stroke.width, i.canvas.ctx.stroke()), i.canvas.ctx.fill();
  }, i.fn.particlesCreate = function () {
    for (var e = 0; e < i.particles.number.value; e++) {
      i.particles.array.push(new i.fn.particle(i.particles.color, i.particles.opacity.value));
    }
  }, i.fn.particlesUpdate = function () {
    for (var e = 0; e < i.particles.array.length; e++) {
      var a = i.particles.array[e];

      if (i.particles.move.enable) {
        var t = i.particles.move.speed / 2;
        a.x += a.vx * t, a.y += a.vy * t;
      }

      if (i.particles.opacity.anim.enable && (1 == a.opacity_status ? (a.opacity >= i.particles.opacity.value && (a.opacity_status = !1), a.opacity += a.vo) : (a.opacity <= i.particles.opacity.anim.opacity_min && (a.opacity_status = !0), a.opacity -= a.vo), a.opacity < 0 && (a.opacity = 0)), i.particles.size.anim.enable && (1 == a.size_status ? (a.radius >= i.particles.size.value && (a.size_status = !1), a.radius += a.vs) : (a.radius <= i.particles.size.anim.size_min && (a.size_status = !0), a.radius -= a.vs), a.radius < 0 && (a.radius = 0)), "bounce" == i.particles.move.out_mode) var s = {
        x_left: a.radius,
        x_right: i.canvas.w,
        y_top: a.radius,
        y_bottom: i.canvas.h
      };else var s = {
        x_left: -a.radius,
        x_right: i.canvas.w + a.radius,
        y_top: -a.radius,
        y_bottom: i.canvas.h + a.radius
      };

      switch (a.x - a.radius > i.canvas.w ? (a.x = s.x_left, a.y = Math.random() * i.canvas.h) : a.x + a.radius < 0 && (a.x = s.x_right, a.y = Math.random() * i.canvas.h), a.y - a.radius > i.canvas.h ? (a.y = s.y_top, a.x = Math.random() * i.canvas.w) : a.y + a.radius < 0 && (a.y = s.y_bottom, a.x = Math.random() * i.canvas.w), i.particles.move.out_mode) {
        case "bounce":
          a.x + a.radius > i.canvas.w ? a.vx = -a.vx : a.x - a.radius < 0 && (a.vx = -a.vx), a.y + a.radius > i.canvas.h ? a.vy = -a.vy : a.y - a.radius < 0 && (a.vy = -a.vy);
      }

      if (isInArray("grab", i.interactivity.events.onhover.mode) && i.fn.modes.grabParticle(a), (isInArray("bubble", i.interactivity.events.onhover.mode) || isInArray("bubble", i.interactivity.events.onclick.mode)) && i.fn.modes.bubbleParticle(a), (isInArray("repulse", i.interactivity.events.onhover.mode) || isInArray("repulse", i.interactivity.events.onclick.mode)) && i.fn.modes.repulseParticle(a), i.particles.line_linked.enable || i.particles.move.attract.enable) for (var n = e + 1; n < i.particles.array.length; n++) {
        var r = i.particles.array[n];
        i.particles.line_linked.enable && i.fn.interact.linkParticles(a, r), i.particles.move.attract.enable && i.fn.interact.attractParticles(a, r), i.particles.move.bounce && i.fn.interact.bounceParticles(a, r);
      }
    }
  }, i.fn.particlesDraw = function () {
    i.canvas.ctx.clearRect(0, 0, i.canvas.w, i.canvas.h), i.fn.particlesUpdate();

    for (var e = 0; e < i.particles.array.length; e++) {
      var a = i.particles.array[e];
      a.draw();
    }
  }, i.fn.particlesEmpty = function () {
    i.particles.array = [];
  }, i.fn.particlesRefresh = function () {
    cancelRequestAnimFrame(i.fn.checkAnimFrame), cancelRequestAnimFrame(i.fn.drawAnimFrame), i.tmp.source_svg = void 0, i.tmp.img_obj = void 0, i.tmp.count_svg = 0, i.fn.particlesEmpty(), i.fn.canvasClear(), i.fn.vendors.start();
  }, i.fn.interact.linkParticles = function (e, a) {
    var t = e.x - a.x,
        s = e.y - a.y,
        n = Math.sqrt(t * t + s * s);

    if (n <= i.particles.line_linked.distance) {
      var r = i.particles.line_linked.opacity - n / (1 / i.particles.line_linked.opacity) / i.particles.line_linked.distance;

      if (r > 0) {
        var c = i.particles.line_linked.color_rgb_line;
        i.canvas.ctx.strokeStyle = "rgba(" + c.r + "," + c.g + "," + c.b + "," + r + ")", i.canvas.ctx.lineWidth = i.particles.line_linked.width, i.canvas.ctx.beginPath(), i.canvas.ctx.moveTo(e.x, e.y), i.canvas.ctx.lineTo(a.x, a.y), i.canvas.ctx.stroke(), i.canvas.ctx.closePath();
      }
    }
  }, i.fn.interact.attractParticles = function (e, a) {
    var t = e.x - a.x,
        s = e.y - a.y,
        n = Math.sqrt(t * t + s * s);

    if (n <= i.particles.line_linked.distance) {
      var r = t / (1e3 * i.particles.move.attract.rotateX),
          c = s / (1e3 * i.particles.move.attract.rotateY);
      e.vx -= r, e.vy -= c, a.vx += r, a.vy += c;
    }
  }, i.fn.interact.bounceParticles = function (e, a) {
    var t = e.x - a.x,
        i = e.y - a.y,
        s = Math.sqrt(t * t + i * i),
        n = e.radius + a.radius;
    n >= s && (e.vx = -e.vx, e.vy = -e.vy, a.vx = -a.vx, a.vy = -a.vy);
  }, i.fn.modes.pushParticles = function (e, a) {
    i.tmp.pushing = !0;

    for (var t = 0; e > t; t++) {
      i.particles.array.push(new i.fn.particle(i.particles.color, i.particles.opacity.value, {
        x: a ? a.pos_x : Math.random() * i.canvas.w,
        y: a ? a.pos_y : Math.random() * i.canvas.h
      })), t == e - 1 && (i.particles.move.enable || i.fn.particlesDraw(), i.tmp.pushing = !1);
    }
  }, i.fn.modes.removeParticles = function (e) {
    i.particles.array.splice(0, e), i.particles.move.enable || i.fn.particlesDraw();
  }, i.fn.modes.bubbleParticle = function (e) {
    function a() {
      e.opacity_bubble = e.opacity, e.radius_bubble = e.radius;
    }

    function t(a, t, s, n, c) {
      if (a != t) if (i.tmp.bubble_duration_end) {
        if (void 0 != s) {
          var o = n - p * (n - a) / i.interactivity.modes.bubble.duration,
              l = a - o;
          d = a + l, "size" == c && (e.radius_bubble = d), "opacity" == c && (e.opacity_bubble = d);
        }
      } else if (r <= i.interactivity.modes.bubble.distance) {
        if (void 0 != s) var v = s;else var v = n;

        if (v != a) {
          var d = n - p * (n - a) / i.interactivity.modes.bubble.duration;
          "size" == c && (e.radius_bubble = d), "opacity" == c && (e.opacity_bubble = d);
        }
      } else "size" == c && (e.radius_bubble = void 0), "opacity" == c && (e.opacity_bubble = void 0);
    }

    if (i.interactivity.events.onhover.enable && isInArray("bubble", i.interactivity.events.onhover.mode)) {
      var s = e.x - i.interactivity.mouse.pos_x,
          n = e.y - i.interactivity.mouse.pos_y,
          r = Math.sqrt(s * s + n * n),
          c = 1 - r / i.interactivity.modes.bubble.distance;

      if (r <= i.interactivity.modes.bubble.distance) {
        if (c >= 0 && "mousemove" == i.interactivity.status) {
          if (i.interactivity.modes.bubble.size != i.particles.size.value) if (i.interactivity.modes.bubble.size > i.particles.size.value) {
            var o = e.radius + i.interactivity.modes.bubble.size * c;
            o >= 0 && (e.radius_bubble = o);
          } else {
            var l = e.radius - i.interactivity.modes.bubble.size,
                o = e.radius - l * c;
            o > 0 ? e.radius_bubble = o : e.radius_bubble = 0;
          }
          if (i.interactivity.modes.bubble.opacity != i.particles.opacity.value) if (i.interactivity.modes.bubble.opacity > i.particles.opacity.value) {
            var v = i.interactivity.modes.bubble.opacity * c;
            v > e.opacity && v <= i.interactivity.modes.bubble.opacity && (e.opacity_bubble = v);
          } else {
            var v = e.opacity - (i.particles.opacity.value - i.interactivity.modes.bubble.opacity) * c;
            v < e.opacity && v >= i.interactivity.modes.bubble.opacity && (e.opacity_bubble = v);
          }
        }
      } else a();

      "mouseleave" == i.interactivity.status && a();
    } else if (i.interactivity.events.onclick.enable && isInArray("bubble", i.interactivity.events.onclick.mode)) {
      if (i.tmp.bubble_clicking) {
        var s = e.x - i.interactivity.mouse.click_pos_x,
            n = e.y - i.interactivity.mouse.click_pos_y,
            r = Math.sqrt(s * s + n * n),
            p = (new Date().getTime() - i.interactivity.mouse.click_time) / 1e3;
        p > i.interactivity.modes.bubble.duration && (i.tmp.bubble_duration_end = !0), p > 2 * i.interactivity.modes.bubble.duration && (i.tmp.bubble_clicking = !1, i.tmp.bubble_duration_end = !1);
      }

      i.tmp.bubble_clicking && (t(i.interactivity.modes.bubble.size, i.particles.size.value, e.radius_bubble, e.radius, "size"), t(i.interactivity.modes.bubble.opacity, i.particles.opacity.value, e.opacity_bubble, e.opacity, "opacity"));
    }
  }, i.fn.modes.repulseParticle = function (e) {
    function a() {
      var a = Math.atan2(d, p);

      if (e.vx = u * Math.cos(a), e.vy = u * Math.sin(a), "bounce" == i.particles.move.out_mode) {
        var t = {
          x: e.x + e.vx,
          y: e.y + e.vy
        };
        t.x + e.radius > i.canvas.w ? e.vx = -e.vx : t.x - e.radius < 0 && (e.vx = -e.vx), t.y + e.radius > i.canvas.h ? e.vy = -e.vy : t.y - e.radius < 0 && (e.vy = -e.vy);
      }
    }

    if (i.interactivity.events.onhover.enable && isInArray("repulse", i.interactivity.events.onhover.mode) && "mousemove" == i.interactivity.status) {
      var t = e.x - i.interactivity.mouse.pos_x,
          s = e.y - i.interactivity.mouse.pos_y,
          n = Math.sqrt(t * t + s * s),
          r = {
        x: t / n,
        y: s / n
      },
          c = i.interactivity.modes.repulse.distance,
          o = 100,
          l = clamp(1 / c * (-1 * Math.pow(n / c, 2) + 1) * c * o, 0, 50),
          v = {
        x: e.x + r.x * l,
        y: e.y + r.y * l
      };
      "bounce" == i.particles.move.out_mode ? (v.x - e.radius > 0 && v.x + e.radius < i.canvas.w && (e.x = v.x), v.y - e.radius > 0 && v.y + e.radius < i.canvas.h && (e.y = v.y)) : (e.x = v.x, e.y = v.y);
    } else if (i.interactivity.events.onclick.enable && isInArray("repulse", i.interactivity.events.onclick.mode)) if (i.tmp.repulse_finish || (i.tmp.repulse_count++, i.tmp.repulse_count == i.particles.array.length && (i.tmp.repulse_finish = !0)), i.tmp.repulse_clicking) {
      var c = Math.pow(i.interactivity.modes.repulse.distance / 6, 3),
          p = i.interactivity.mouse.click_pos_x - e.x,
          d = i.interactivity.mouse.click_pos_y - e.y,
          m = p * p + d * d,
          u = -c / m * 1;
      c >= m && a();
    } else 0 == i.tmp.repulse_clicking && (e.vx = e.vx_i, e.vy = e.vy_i);
  }, i.fn.modes.grabParticle = function (e) {
    if (i.interactivity.events.onhover.enable && "mousemove" == i.interactivity.status) {
      var a = e.x - i.interactivity.mouse.pos_x,
          t = e.y - i.interactivity.mouse.pos_y,
          s = Math.sqrt(a * a + t * t);

      if (s <= i.interactivity.modes.grab.distance) {
        var n = i.interactivity.modes.grab.line_linked.opacity - s / (1 / i.interactivity.modes.grab.line_linked.opacity) / i.interactivity.modes.grab.distance;

        if (n > 0) {
          var r = i.particles.line_linked.color_rgb_line;
          i.canvas.ctx.strokeStyle = "rgba(" + r.r + "," + r.g + "," + r.b + "," + n + ")", i.canvas.ctx.lineWidth = i.particles.line_linked.width, i.canvas.ctx.beginPath(), i.canvas.ctx.moveTo(e.x, e.y), i.canvas.ctx.lineTo(i.interactivity.mouse.pos_x, i.interactivity.mouse.pos_y), i.canvas.ctx.stroke(), i.canvas.ctx.closePath();
        }
      }
    }
  }, i.fn.vendors.eventsListeners = function () {
    "window" == i.interactivity.detect_on ? i.interactivity.el = window : i.interactivity.el = i.canvas.el, (i.interactivity.events.onhover.enable || i.interactivity.events.onclick.enable) && (i.interactivity.el.addEventListener("mousemove", function (e) {
      if (i.interactivity.el == window) var a = e.clientX,
          t = e.clientY;else var a = e.offsetX || e.clientX,
          t = e.offsetY || e.clientY;
      i.interactivity.mouse.pos_x = a, i.interactivity.mouse.pos_y = t, i.tmp.retina && (i.interactivity.mouse.pos_x *= i.canvas.pxratio, i.interactivity.mouse.pos_y *= i.canvas.pxratio), i.interactivity.status = "mousemove";
    }), i.interactivity.el.addEventListener("mouseleave", function (e) {
      i.interactivity.mouse.pos_x = null, i.interactivity.mouse.pos_y = null, i.interactivity.status = "mouseleave";
    })), i.interactivity.events.onclick.enable && i.interactivity.el.addEventListener("click", function () {
      if (i.interactivity.mouse.click_pos_x = i.interactivity.mouse.pos_x, i.interactivity.mouse.click_pos_y = i.interactivity.mouse.pos_y, i.interactivity.mouse.click_time = new Date().getTime(), i.interactivity.events.onclick.enable) switch (i.interactivity.events.onclick.mode) {
        case "push":
          i.particles.move.enable ? i.fn.modes.pushParticles(i.interactivity.modes.push.particles_nb, i.interactivity.mouse) : 1 == i.interactivity.modes.push.particles_nb ? i.fn.modes.pushParticles(i.interactivity.modes.push.particles_nb, i.interactivity.mouse) : i.interactivity.modes.push.particles_nb > 1 && i.fn.modes.pushParticles(i.interactivity.modes.push.particles_nb);
          break;

        case "remove":
          i.fn.modes.removeParticles(i.interactivity.modes.remove.particles_nb);
          break;

        case "bubble":
          i.tmp.bubble_clicking = !0;
          break;

        case "repulse":
          i.tmp.repulse_clicking = !0, i.tmp.repulse_count = 0, i.tmp.repulse_finish = !1, setTimeout(function () {
            i.tmp.repulse_clicking = !1;
          }, 1e3 * i.interactivity.modes.repulse.duration);
      }
    });
  }, i.fn.vendors.densityAutoParticles = function () {
    if (i.particles.number.density.enable) {
      var e = i.canvas.el.width * i.canvas.el.height / 1e3;
      i.tmp.retina && (e /= 2 * i.canvas.pxratio);
      var a = e * i.particles.number.value / i.particles.number.density.value_area,
          t = i.particles.array.length - a;
      0 > t ? i.fn.modes.pushParticles(Math.abs(t)) : i.fn.modes.removeParticles(t);
    }
  }, i.fn.vendors.checkOverlap = function (e, a) {
    for (var t = 0; t < i.particles.array.length; t++) {
      var s = i.particles.array[t],
          n = e.x - s.x,
          r = e.y - s.y,
          c = Math.sqrt(n * n + r * r);
      c <= e.radius + s.radius && (e.x = a ? a.x : Math.random() * i.canvas.w, e.y = a ? a.y : Math.random() * i.canvas.h, i.fn.vendors.checkOverlap(e));
    }
  }, i.fn.vendors.createSvgImg = function (e) {
    var a = i.tmp.source_svg,
        t = /#([0-9A-F]{3,6})/gi,
        s = a.replace(t, function (a, t, i, s) {
      if (e.color.rgb) var n = "rgba(" + e.color.rgb.r + "," + e.color.rgb.g + "," + e.color.rgb.b + "," + e.opacity + ")";else var n = "hsla(" + e.color.hsl.h + "," + e.color.hsl.s + "%," + e.color.hsl.l + "%," + e.opacity + ")";
      return n;
    }),
        n = new Blob([s], {
      type: "image/svg+xml;charset=utf-8"
    }),
        r = window.URL || window.webkitURL || window,
        c = r.createObjectURL(n),
        o = new Image();
    o.addEventListener("load", function () {
      e.img.obj = o, e.img.loaded = !0, r.revokeObjectURL(c), i.tmp.count_svg++;
    }), o.src = c;
  }, i.fn.vendors.destroypJS = function () {
    cancelAnimationFrame(i.fn.drawAnimFrame), t.remove(), pJSDom = null;
  }, i.fn.vendors.drawShape = function (e, a, t, i, s, n) {
    var r = s * n,
        c = s / n,
        o = 180 * (c - 2) / c,
        l = Math.PI - Math.PI * o / 180;
    e.save(), e.beginPath(), e.translate(a, t), e.moveTo(0, 0);

    for (var v = 0; r > v; v++) {
      e.lineTo(i, 0), e.translate(i, 0), e.rotate(l);
    }

    e.fill(), e.restore();
  }, i.fn.vendors.exportImg = function () {
    window.open(i.canvas.el.toDataURL("image/png"), "_blank");
  }, i.fn.vendors.loadImg = function (e) {
    if (i.tmp.img_error = void 0, "" != i.particles.shape.image.src) {
      if ("svg" == e) {
        var a = new XMLHttpRequest();
        a.open("GET", i.particles.shape.image.src), a.onreadystatechange = function (e) {
          4 == a.readyState && (200 == a.status ? (i.tmp.source_svg = e.currentTarget.response, i.fn.vendors.checkBeforeDraw()) : (console.log("Error pJS - Image not found"), i.tmp.img_error = !0));
        }, a.send();
      } else {
        var t = new Image();
        t.addEventListener("load", function () {
          i.tmp.img_obj = t, i.fn.vendors.checkBeforeDraw();
        }), t.src = i.particles.shape.image.src;
      }
    } else console.log("Error pJS - No image.src"), i.tmp.img_error = !0;
  }, i.fn.vendors.draw = function () {
    "image" == i.particles.shape.type ? "svg" == i.tmp.img_type ? i.tmp.count_svg >= i.particles.number.value ? (i.fn.particlesDraw(), i.particles.move.enable ? i.fn.drawAnimFrame = requestAnimFrame(i.fn.vendors.draw) : cancelRequestAnimFrame(i.fn.drawAnimFrame)) : i.tmp.img_error || (i.fn.drawAnimFrame = requestAnimFrame(i.fn.vendors.draw)) : void 0 != i.tmp.img_obj ? (i.fn.particlesDraw(), i.particles.move.enable ? i.fn.drawAnimFrame = requestAnimFrame(i.fn.vendors.draw) : cancelRequestAnimFrame(i.fn.drawAnimFrame)) : i.tmp.img_error || (i.fn.drawAnimFrame = requestAnimFrame(i.fn.vendors.draw)) : (i.fn.particlesDraw(), i.particles.move.enable ? i.fn.drawAnimFrame = requestAnimFrame(i.fn.vendors.draw) : cancelRequestAnimFrame(i.fn.drawAnimFrame));
  }, i.fn.vendors.checkBeforeDraw = function () {
    "image" == i.particles.shape.type ? "svg" == i.tmp.img_type && void 0 == i.tmp.source_svg ? i.tmp.checkAnimFrame = requestAnimFrame(check) : (cancelRequestAnimFrame(i.tmp.checkAnimFrame), i.tmp.img_error || (i.fn.vendors.init(), i.fn.vendors.draw())) : (i.fn.vendors.init(), i.fn.vendors.draw());
  }, i.fn.vendors.init = function () {
    i.fn.retinaInit(), i.fn.canvasInit(), i.fn.canvasSize(), i.fn.canvasPaint(), i.fn.particlesCreate(), i.fn.vendors.densityAutoParticles(), i.particles.line_linked.color_rgb_line = hexToRgb(i.particles.line_linked.color);
  }, i.fn.vendors.start = function () {
    isInArray("image", i.particles.shape.type) ? (i.tmp.img_type = i.particles.shape.image.src.substr(i.particles.shape.image.src.length - 3), i.fn.vendors.loadImg(i.tmp.img_type)) : i.fn.vendors.checkBeforeDraw();
  }, i.fn.vendors.eventsListeners(), i.fn.vendors.start();
};

Object.deepExtend = function (e, a) {
  for (var t in a) {
    a[t] && a[t].constructor && a[t].constructor === Object ? (e[t] = e[t] || {}, arguments.callee(e[t], a[t])) : e[t] = a[t];
  }

  return e;
}, window.requestAnimFrame = function () {
  return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (e) {
    window.setTimeout(e, 1e3 / 60);
  };
}(), window.cancelRequestAnimFrame = function () {
  return window.cancelAnimationFrame || window.webkitCancelRequestAnimationFrame || window.mozCancelRequestAnimationFrame || window.oCancelRequestAnimationFrame || window.msCancelRequestAnimationFrame || clearTimeout;
}(), window.pJSDom = [], window.particlesJS = function (e, a) {
  "string" != typeof e && (a = e, e = "particles-js"), e || (e = "particles-js");
  var t = document.getElementById(e),
      i = "particles-js-canvas-el",
      s = t.getElementsByClassName(i);
  if (s.length) for (; s.length > 0;) {
    t.removeChild(s[0]);
  }
  var n = document.createElement("canvas");
  n.className = i, n.style.width = "100%", n.style.height = "100%";
  var r = document.getElementById(e).appendChild(n);
  null != r && pJSDom.push(new pJS(e, a));
}, window.particlesJS.load = function (e, a, t) {
  var i = new XMLHttpRequest();
  i.open("GET", a), i.onreadystatechange = function (a) {
    if (4 == i.readyState) if (200 == i.status) {
      var s = JSON.parse(a.currentTarget.response);
      window.particlesJS(e, s), t && t();
    } else console.log("Error pJS - XMLHttpRequest status: " + i.status), console.log("Error pJS - File config not found");
  }, i.send();
};

/***/ }),

/***/ "./resources/mix/js/waypoint.js":
/*!**************************************!*\
  !*** ./resources/mix/js/waypoint.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*!
Waypoints - 4.0.0
Copyright © 2011-2015 Caleb Troughton
Licensed under the MIT license.
https://github.com/imakewebthings/waypoints/blob/master/licenses.txt
*/
!function () {
  "use strict";

  function t(o) {
    if (!o) throw new Error("No options passed to Waypoint constructor");
    if (!o.element) throw new Error("No element option passed to Waypoint constructor");
    if (!o.handler) throw new Error("No handler option passed to Waypoint constructor");
    this.key = "waypoint-" + e, this.options = t.Adapter.extend({}, t.defaults, o), this.element = this.options.element, this.adapter = new t.Adapter(this.element), this.callback = o.handler, this.axis = this.options.horizontal ? "horizontal" : "vertical", this.enabled = this.options.enabled, this.triggerPoint = null, this.group = t.Group.findOrCreate({
      name: this.options.group,
      axis: this.axis
    }), this.context = t.Context.findOrCreateByElement(this.options.context), t.offsetAliases[this.options.offset] && (this.options.offset = t.offsetAliases[this.options.offset]), this.group.add(this), this.context.add(this), i[this.key] = this, e += 1;
  }

  var e = 0,
      i = {};
  t.prototype.queueTrigger = function (t) {
    this.group.queueTrigger(this, t);
  }, t.prototype.trigger = function (t) {
    this.enabled && this.callback && this.callback.apply(this, t);
  }, t.prototype.destroy = function () {
    this.context.remove(this), this.group.remove(this), delete i[this.key];
  }, t.prototype.disable = function () {
    return this.enabled = !1, this;
  }, t.prototype.enable = function () {
    return this.context.refresh(), this.enabled = !0, this;
  }, t.prototype.next = function () {
    return this.group.next(this);
  }, t.prototype.previous = function () {
    return this.group.previous(this);
  }, t.invokeAll = function (t) {
    var e = [];

    for (var o in i) {
      e.push(i[o]);
    }

    for (var n = 0, r = e.length; r > n; n++) {
      e[n][t]();
    }
  }, t.destroyAll = function () {
    t.invokeAll("destroy");
  }, t.disableAll = function () {
    t.invokeAll("disable");
  }, t.enableAll = function () {
    t.invokeAll("enable");
  }, t.refreshAll = function () {
    t.Context.refreshAll();
  }, t.viewportHeight = function () {
    return window.innerHeight || document.documentElement.clientHeight;
  }, t.viewportWidth = function () {
    return document.documentElement.clientWidth;
  }, t.adapters = [], t.defaults = {
    context: window,
    continuous: !0,
    enabled: !0,
    group: "default",
    horizontal: !1,
    offset: 0
  }, t.offsetAliases = {
    "bottom-in-view": function bottomInView() {
      return this.context.innerHeight() - this.adapter.outerHeight();
    },
    "right-in-view": function rightInView() {
      return this.context.innerWidth() - this.adapter.outerWidth();
    }
  }, window.Waypoint = t;
}(), function () {
  "use strict";

  function t(t) {
    window.setTimeout(t, 1e3 / 60);
  }

  function e(t) {
    this.element = t, this.Adapter = n.Adapter, this.adapter = new this.Adapter(t), this.key = "waypoint-context-" + i, this.didScroll = !1, this.didResize = !1, this.oldScroll = {
      x: this.adapter.scrollLeft(),
      y: this.adapter.scrollTop()
    }, this.waypoints = {
      vertical: {},
      horizontal: {}
    }, t.waypointContextKey = this.key, o[t.waypointContextKey] = this, i += 1, this.createThrottledScrollHandler(), this.createThrottledResizeHandler();
  }

  var i = 0,
      o = {},
      n = window.Waypoint,
      r = window.onload;
  e.prototype.add = function (t) {
    var e = t.options.horizontal ? "horizontal" : "vertical";
    this.waypoints[e][t.key] = t, this.refresh();
  }, e.prototype.checkEmpty = function () {
    var t = this.Adapter.isEmptyObject(this.waypoints.horizontal),
        e = this.Adapter.isEmptyObject(this.waypoints.vertical);
    t && e && (this.adapter.off(".waypoints"), delete o[this.key]);
  }, e.prototype.createThrottledResizeHandler = function () {
    function t() {
      e.handleResize(), e.didResize = !1;
    }

    var e = this;
    this.adapter.on("resize.waypoints", function () {
      e.didResize || (e.didResize = !0, n.requestAnimationFrame(t));
    });
  }, e.prototype.createThrottledScrollHandler = function () {
    function t() {
      e.handleScroll(), e.didScroll = !1;
    }

    var e = this;
    this.adapter.on("scroll.waypoints", function () {
      (!e.didScroll || n.isTouch) && (e.didScroll = !0, n.requestAnimationFrame(t));
    });
  }, e.prototype.handleResize = function () {
    n.Context.refreshAll();
  }, e.prototype.handleScroll = function () {
    var t = {},
        e = {
      horizontal: {
        newScroll: this.adapter.scrollLeft(),
        oldScroll: this.oldScroll.x,
        forward: "right",
        backward: "left"
      },
      vertical: {
        newScroll: this.adapter.scrollTop(),
        oldScroll: this.oldScroll.y,
        forward: "down",
        backward: "up"
      }
    };

    for (var i in e) {
      var o = e[i],
          n = o.newScroll > o.oldScroll,
          r = n ? o.forward : o.backward;

      for (var s in this.waypoints[i]) {
        var a = this.waypoints[i][s],
            l = o.oldScroll < a.triggerPoint,
            h = o.newScroll >= a.triggerPoint,
            p = l && h,
            u = !l && !h;
        (p || u) && (a.queueTrigger(r), t[a.group.id] = a.group);
      }
    }

    for (var c in t) {
      t[c].flushTriggers();
    }

    this.oldScroll = {
      x: e.horizontal.newScroll,
      y: e.vertical.newScroll
    };
  }, e.prototype.innerHeight = function () {
    return this.element == this.element.window ? n.viewportHeight() : this.adapter.innerHeight();
  }, e.prototype.remove = function (t) {
    delete this.waypoints[t.axis][t.key], this.checkEmpty();
  }, e.prototype.innerWidth = function () {
    return this.element == this.element.window ? n.viewportWidth() : this.adapter.innerWidth();
  }, e.prototype.destroy = function () {
    var t = [];

    for (var e in this.waypoints) {
      for (var i in this.waypoints[e]) {
        t.push(this.waypoints[e][i]);
      }
    }

    for (var o = 0, n = t.length; n > o; o++) {
      t[o].destroy();
    }
  }, e.prototype.refresh = function () {
    var t,
        e = this.element == this.element.window,
        i = e ? void 0 : this.adapter.offset(),
        o = {};
    this.handleScroll(), t = {
      horizontal: {
        contextOffset: e ? 0 : i.left,
        contextScroll: e ? 0 : this.oldScroll.x,
        contextDimension: this.innerWidth(),
        oldScroll: this.oldScroll.x,
        forward: "right",
        backward: "left",
        offsetProp: "left"
      },
      vertical: {
        contextOffset: e ? 0 : i.top,
        contextScroll: e ? 0 : this.oldScroll.y,
        contextDimension: this.innerHeight(),
        oldScroll: this.oldScroll.y,
        forward: "down",
        backward: "up",
        offsetProp: "top"
      }
    };

    for (var r in t) {
      var s = t[r];

      for (var a in this.waypoints[r]) {
        var l,
            h,
            p,
            u,
            c,
            d = this.waypoints[r][a],
            f = d.options.offset,
            w = d.triggerPoint,
            y = 0,
            g = null == w;
        d.element !== d.element.window && (y = d.adapter.offset()[s.offsetProp]), "function" == typeof f ? f = f.apply(d) : "string" == typeof f && (f = parseFloat(f), d.options.offset.indexOf("%") > -1 && (f = Math.ceil(s.contextDimension * f / 100))), l = s.contextScroll - s.contextOffset, d.triggerPoint = y + l - f, h = w < s.oldScroll, p = d.triggerPoint >= s.oldScroll, u = h && p, c = !h && !p, !g && u ? (d.queueTrigger(s.backward), o[d.group.id] = d.group) : !g && c ? (d.queueTrigger(s.forward), o[d.group.id] = d.group) : g && s.oldScroll >= d.triggerPoint && (d.queueTrigger(s.forward), o[d.group.id] = d.group);
      }
    }

    return n.requestAnimationFrame(function () {
      for (var t in o) {
        o[t].flushTriggers();
      }
    }), this;
  }, e.findOrCreateByElement = function (t) {
    return e.findByElement(t) || new e(t);
  }, e.refreshAll = function () {
    for (var t in o) {
      o[t].refresh();
    }
  }, e.findByElement = function (t) {
    return o[t.waypointContextKey];
  }, window.onload = function () {
    r && r(), e.refreshAll();
  }, n.requestAnimationFrame = function (e) {
    var i = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || t;
    i.call(window, e);
  }, n.Context = e;
}(), function () {
  "use strict";

  function t(t, e) {
    return t.triggerPoint - e.triggerPoint;
  }

  function e(t, e) {
    return e.triggerPoint - t.triggerPoint;
  }

  function i(t) {
    this.name = t.name, this.axis = t.axis, this.id = this.name + "-" + this.axis, this.waypoints = [], this.clearTriggerQueues(), o[this.axis][this.name] = this;
  }

  var o = {
    vertical: {},
    horizontal: {}
  },
      n = window.Waypoint;
  i.prototype.add = function (t) {
    this.waypoints.push(t);
  }, i.prototype.clearTriggerQueues = function () {
    this.triggerQueues = {
      up: [],
      down: [],
      left: [],
      right: []
    };
  }, i.prototype.flushTriggers = function () {
    for (var i in this.triggerQueues) {
      var o = this.triggerQueues[i],
          n = "up" === i || "left" === i;
      o.sort(n ? e : t);

      for (var r = 0, s = o.length; s > r; r += 1) {
        var a = o[r];
        (a.options.continuous || r === o.length - 1) && a.trigger([i]);
      }
    }

    this.clearTriggerQueues();
  }, i.prototype.next = function (e) {
    this.waypoints.sort(t);
    var i = n.Adapter.inArray(e, this.waypoints),
        o = i === this.waypoints.length - 1;
    return o ? null : this.waypoints[i + 1];
  }, i.prototype.previous = function (e) {
    this.waypoints.sort(t);
    var i = n.Adapter.inArray(e, this.waypoints);
    return i ? this.waypoints[i - 1] : null;
  }, i.prototype.queueTrigger = function (t, e) {
    this.triggerQueues[e].push(t);
  }, i.prototype.remove = function (t) {
    var e = n.Adapter.inArray(t, this.waypoints);
    e > -1 && this.waypoints.splice(e, 1);
  }, i.prototype.first = function () {
    return this.waypoints[0];
  }, i.prototype.last = function () {
    return this.waypoints[this.waypoints.length - 1];
  }, i.findOrCreate = function (t) {
    return o[t.axis][t.name] || new i(t);
  }, n.Group = i;
}(), function () {
  "use strict";

  function t(t) {
    this.$element = e(t);
  }

  var e = window.jQuery,
      i = window.Waypoint;
  e.each(["innerHeight", "innerWidth", "off", "offset", "on", "outerHeight", "outerWidth", "scrollLeft", "scrollTop"], function (e, i) {
    t.prototype[i] = function () {
      var t = Array.prototype.slice.call(arguments);
      return this.$element[i].apply(this.$element, t);
    };
  }), e.each(["extend", "inArray", "isEmptyObject"], function (i, o) {
    t[o] = e[o];
  }), i.adapters.push({
    name: "jquery",
    Adapter: t
  }), i.Adapter = t;
}(), function () {
  "use strict";

  function t(t) {
    return function () {
      var i = [],
          o = arguments[0];
      return t.isFunction(arguments[0]) && (o = t.extend({}, arguments[1]), o.handler = arguments[0]), this.each(function () {
        var n = t.extend({}, o, {
          element: this
        });
        "string" == typeof n.context && (n.context = t(this).closest(n.context)[0]), i.push(new e(n));
      }), i;
    };
  }

  var e = window.Waypoint;
  window.jQuery && (window.jQuery.fn.waypoint = t(window.jQuery)), window.Zepto && (window.Zepto.fn.waypoint = t(window.Zepto));
}();

/***/ }),

/***/ 0:
/*!****************************************************************************************************************************************************************************************************!*\
  !*** multi ./resources/mix/js/chart.js ./resources/mix/js/custom.js ./resources/mix/js/gmap3.js ./resources/mix/js/owl-carousel.js ./resources/mix/js/particles.js ./resources/mix/js/waypoint.js ***!
  \****************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! C:\xampp\htdocs\laravelLogin\resources\mix\js\chart.js */"./resources/mix/js/chart.js");
__webpack_require__(/*! C:\xampp\htdocs\laravelLogin\resources\mix\js\custom.js */"./resources/mix/js/custom.js");
__webpack_require__(/*! C:\xampp\htdocs\laravelLogin\resources\mix\js\gmap3.js */"./resources/mix/js/gmap3.js");
__webpack_require__(/*! C:\xampp\htdocs\laravelLogin\resources\mix\js\owl-carousel.js */"./resources/mix/js/owl-carousel.js");
__webpack_require__(/*! C:\xampp\htdocs\laravelLogin\resources\mix\js\particles.js */"./resources/mix/js/particles.js");
module.exports = __webpack_require__(/*! C:\xampp\htdocs\laravelLogin\resources\mix\js\waypoint.js */"./resources/mix/js/waypoint.js");


/***/ })

/******/ });