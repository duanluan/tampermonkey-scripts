/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
// ==UserScript==
// @name         You.com Pro
// @namespace    http://tampermonkey.net/
// @version      0.0.1
// @description
// @author       duanluan
// @copyright    2024, duanluan (https://github.com/duanluan)
// @license      Apache-2.0; https://www.apache.org/licenses/LICENSE-2.0.txt
// @match        *://*.you.com/*
// @require      https://cdn.bootcdn.net/ajax/libs/jquery/3.7.1/jquery.min.js
// @resource css https://cdn.bootcdn.net/ajax/libs/layer/3.5.1/theme/default/layer.min.css
// @require      https://cdn.bootcdn.net/ajax/libs/layer/3.5.1/layer.min.js
// @grant        GM_addStyle
// @grant        GM_getResourceText
// ==/UserScript==

// ==OpenUserJS==
// @author       duanluan
// @updateURL    https://raw.kkgithub.com/duanluan/tampermonkey-scripts/main/you.com-pro/dist/you.com-pro.user.js
// ==/OpenUserJS==

_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
  'use strict';

  // 加载 CSS
  var inputScript;
  return _regeneratorRuntime().wrap(function _callee$(_context) {
    while (1) switch (_context.prev = _context.next) {
      case 0:
        inputScript = function _inputScript() {
          // 提示输入脚本内容
          layer.prompt({
            title: '请输入脚本内容',
            maxlength: 10000
          }, function (value, index) {
            var _document$cookie$matc;
            // 用正则 (?<=stytch_session":").*?(?=") 获取 value 中内容
            var stytchSessionByScript = value.match(/(?<=stytch_session":").*?(?=")/);

            // 如果脚本中有 stytch_session，且与 cookie 中的 stytch_session 相同，则不执行脚本
            if (stytchSessionByScript == ((_document$cookie$matc = document.cookie.match(/stytch_session=([^;]+)/)) === null || _document$cookie$matc === void 0 ? void 0 : _document$cookie$matc[1])) {
              layer.msg('脚本中账号与当前账号相同，不执行', {
                icon: 0
              });
              return;
            }

            // 执行脚本
            eval(value);
            // 刷新页面
            location.reload();
          });
        };
        GM_addStyle(GM_getResourceText('css'));
        // layer 图标未知原因失效，手动添加样式
        $(document.head).append("<style>\n    .layui-layer-ico{background:url('https://cdn.bootcdn.net/ajax/libs/layer/3.5.1/theme/default/icon.png') no-repeat}\n    .layui-layer-ico1{background-position:-30px 0}\n    .layui-layer-ico2{background-position:-60px 0}\n    .layui-layer-ico3{background-position:-90px 0}\n    .layui-layer-ico4{background-position:-120px 0}\n    .layui-layer-ico5{background-position:-150px 0}\n    .layui-layer-ico6{background-position:-180px 0}\n  </style>");

        // jquery data-testid="user-dropdown" 元素添加点击事件
        $(document).on('click', '[data-testid="user-dropdown"]', function () {
          setTimeout(function () {
            // 删除 data-testid="sign-option" 元素
            $('[data-testid="sign-option"]').hide();

            // 添加菜单
            $('[data-testid="user-dropdown-items"]').append("\n        <li class=\"sc-79a25c6f-1 kPbrXZ\"><div style=\"height: 0.5rem;\"></div></li>\n        <li class=\"sc-79a25c6f-1 kPbrXZ\"><p class=\"sc-64799162-1 sc-64799162-2 dnRtHe cPgyBL\">You.com Pro</p></li>\n        <li class=\"sc-79a25c6f-1 iBJkUA\" data-testid=\"my-pro-script\"><div class=\"sc-fb51e70c-0 cJkewo\"><a href=\"javascript:void(0);\"><div class=\"sc-64799162-0 diIVGY\"><div class=\"sc-64799162-3 czOWaa\">\n          <div class=\"sc-64799162-4 fjWeYd\"><svg width=\"17\" height=\"17\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 22 23\" fill=\"none\"><path d=\"m21.043 14.191-1.89-1.055a7.47 7.47 0 0 0 0-3.12l1.89-1.056a.505.505 0 0 0 .22-.615c-.484-1.583-1.32-2.99-2.374-4.177a.533.533 0 0 0-.66-.087l-1.89 1.055a8.837 8.837 0 0 0-2.638-1.539V1.443c0-.22-.176-.44-.44-.484-1.626-.395-3.252-.351-4.79 0-.265.044-.397.264-.397.484v2.154A7.873 7.873 0 0 0 5.393 5.18l-1.89-1.1a.533.533 0 0 0-.66.088C1.788 5.355.953 6.762.47 8.345c-.088.22 0 .483.22.615l1.89 1.055a9.3 9.3 0 0 0 0 3.121L.69 14.192c-.22.131-.308.395-.22.615.484 1.583 1.32 2.99 2.374 4.176.176.176.44.22.66.088l1.89-1.055a8.535 8.535 0 0 0 2.681 1.539v2.154c0 .22.176.44.396.527 1.627.352 3.253.308 4.792 0 .263-.088.44-.308.44-.527v-2.154a8.835 8.835 0 0 0 2.637-1.539l1.89 1.055c.22.132.484.088.66-.088 1.099-1.187 1.89-2.593 2.418-4.176a.59.59 0 0 0-.264-.616Zm-10.155.88c-1.978 0-3.517-1.539-3.517-3.517a3.5 3.5 0 0 1 3.517-3.517 3.527 3.527 0 0 1 3.517 3.517 3.5 3.5 0 0 1-3.517 3.517Z\" fill=\"#C7C7CC\"></path></svg></div>\n          <p class=\"sc-64799162-1 dnRtHe\">\u586B\u5199\u811A\u672C</p>\n        </div></div></a></div></li>\n      ");
            $(document).off('click', '[data-testid="my-pro-script"]');
            $(document).on('click', '[data-testid="my-pro-script"]', function () {
              if (document.cookie.match(/stytch_session=([^;]+)/)) {
                // 提示是否要先退出账号
                layer.confirm('已登录，自己账号需先注销，是否注销？慎重选择！', {
                  icon: 0,
                  btn: ['是', '否'],
                  cancel: function cancel() {
                    inputScript();
                  }
                }, function (index1) {
                  console.log($('[data-testid="user-dropdown-items"]').length == 0);
                  // 如果 data-testid="user-dropdown-items" 不存在要先点击展示
                  if ($('[data-testid="user-dropdown-items"]').length == 0) {
                    layer.close(index1);

                    // 点击 Sign Out 按钮
                    setTimeout(function () {
                      console.log('退出账号');
                      $('[data-testid="user-dropdown"]').click();
                      setTimeout(function () {
                        $('[data-testid="sign-option"]').click();
                      }, 100);
                    }, 100);
                  }
                }, function () {
                  inputScript();
                });
              } else {
                inputScript();
              }
            });
          }, 300);
        });
      case 4:
      case "end":
        return _context.stop();
    }
  }, _callee);
}))();
/******/ })()
;
//# sourceMappingURL=you.com-pro.user.js.map