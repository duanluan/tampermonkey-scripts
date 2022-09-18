/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./utils/src/Url.ts
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var Url = /*#__PURE__*/function () {
  function Url() {
    _classCallCheck(this, Url);
  }

  _createClass(Url, null, [{
    key: "getPath",
    value:
    /**
     * 根据 URL 获取路径（排除域名）
     * @param url URL，默认为当前地址
     */
    function getPath(url) {
      if (!url) {
        url = window.location.href;
      }

      var host = window.location.host;
      return url.substring(url.indexOf(host) + host.length);
    }
  }]);

  return Url;
}();


;// CONCATENATED MODULE: ./utils/src/gm/Store.ts
function Store_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Store_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Store_createClass(Constructor, protoProps, staticProps) { if (protoProps) Store_defineProperties(Constructor.prototype, protoProps); if (staticProps) Store_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * 存储
 */
var Store = /*#__PURE__*/function () {
  function Store() {
    Store_classCallCheck(this, Store);
  }

  Store_createClass(Store, null, [{
    key: "get",
    value:
    /**
     * 获取
     * @param key 键
     */
    function get(key) {
      // @ts-ignore
      return GM_getValue(key);
    }
    /**
     * 设置
     * @param key 键
     * @param value 值
     */

  }, {
    key: "set",
    value: function set(key, value) {
      // @ts-ignore
      GM_setValue(key, value);
    }
  }]);

  return Store;
}();


;// CONCATENATED MODULE: ./utils/src/gm/enum/HttpDataType.ts
var HttpDataType;

(function (HttpDataType) {
  HttpDataType["JSON"] = "JSON";
})(HttpDataType || (HttpDataType = {}));
;// CONCATENATED MODULE: ./utils/src/gm/Request.ts
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function Request_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Request_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Request_createClass(Constructor, protoProps, staticProps) { if (protoProps) Request_defineProperties(Constructor.prototype, protoProps); if (staticProps) Request_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }



var Request = /*#__PURE__*/function () {
  function Request() {
    Request_classCallCheck(this, Request);
  }

  Request_createClass(Request, null, [{
    key: "get",
    value: function () {
      var _get = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(option) {
        var onload1;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                option['method'] = 'GET'; // 同步时返回 Promise

                if (!option.synchronous) {
                  _context.next = 5;
                  break;
                }

                return _context.abrupt("return", new Promise(function (resolve, reject) {
                  // @ts-ignore
                  GM_xmlhttpRequest(_objectSpread(_objectSpread({}, option), {}, {
                    onload: function onload(response) {
                      resolve(option.dataType === HttpDataType.JSON ? JSON.parse(response.responseText) : response.responseText);
                    },
                    onerror: function onerror(error) {
                      reject(error);
                    }
                  }));
                }));

              case 5:
                onload1 = function onload1(details) {
                  var response;

                  if (option.dataType === HttpDataType.JSON) {
                    response = JSON.parse(details.responseText);
                  } else {
                    response = details.response;
                  }

                  option.onload(response);
                }; // @ts-ignore


                GM_xmlhttpRequest(_objectSpread(_objectSpread({}, option), {}, {
                  onload: onload1
                }));

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function get(_x) {
        return _get.apply(this, arguments);
      }

      return get;
    }()
  }]);

  return Request;
}();


;// CONCATENATED MODULE: ./amazon-kindle-douban-score/src/main.ts
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }





var selectors = {
  // 书名链接
  bookName: '.sg-col-inner h2 a[href^="/dp/"]',
  // 分页按钮
  pageStrip: '.s-pagination-strip a',
  // 已选中的分页按钮（当前页）
  pageSelected: '.s-pagination-item.s-pagination-selected',
  // 分页按钮
  pageBtn: '.s-pagination-item.s-pagination-button'
},
    gmstoreKeys = {
  serverUrl: 'serverUrl'
},
    // 服务地址
serverUrl = Store.get(gmstoreKeys.serverUrl); // 书名，用于判断是否换页

var $bookNames;

(function () {
  'use strict';

  var urlPath = Url.getPath(); // 列表或搜索页面

  if (urlPath.startsWith('/s') && urlPath.indexOf('rh=n') != -1) {
    // StoreUtils.set(gmstoreKeys.serverUrl, window.prompt("请输入“亚马逊 Kindle 展示豆瓣评分”的服务地址：", "http://localhost:8361"));
    loadScore();
    setServerUrl(serverUrl);
  } // 分页操作后重新加载分数


  $(selectors.pageStrip).on('click', document, function () {
    var t = setTimeout(function () {
      if ($bookNames != $(selectors.bookName) // 到最后一页了 或 有 16 条（每页条数）
      && (!$(selectors.pageSelected).next(selectors.pageBtn) || $(selectors.bookName).length == 16)) {
        loadScore();
        clearTimeout(t);
      }
    }, 500);
  });
})();
/**
 * 如果未设置服务器地址，则弹窗提示设置
 */


function setServerUrl(serverUrl) {
  if (!serverUrl) {
    serverUrl = Store.get(gmstoreKeys.serverUrl);
  }

  if (!serverUrl) {
    Store.set(gmstoreKeys.serverUrl, window.prompt("请输入“亚马逊 Kindle 展示豆瓣评分”的服务地址：", "http://localhost:8361"));
  }
}
/**
 * 加载评分
 */


function loadScore() {
  $bookNames = $(selectors.bookName);
  $bookNames.each(function (i, element) {
    var $bookName = $(element),
        // 获取名称和作者，并去除多余描述
    name = $bookName.text().replace(/[（\\(【].*[）\\)】]|·|・/g, '').trim(),
        author = $bookName.parent().next().text().replace(/[（\\(【].*[）\\)】]|·|・|, |、|。|等*/g, '') // 去除出版日期
    .replace(/\s*\|\s*\d{4}-\d{2}/i, '').trim();
    console.log(name + " | " + author); // 豆瓣读书搜索名称和作者

    Request.get({
      url: serverUrl + '/douban/subjectSearch?name=' + name + '&author=' + author,
      dataType: HttpDataType.JSON,
      onload: function onload(response) {
        var code = response.code,
            msg = response.msg,
            data = response.data; // TODO 弹框提示错误

        if (code != 200) {
          return;
        }

        console.log(response);
        var score = 0;

        var _iterator = _createForOfIteratorHelper(data),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var book = _step.value;

            if (book.score) {
              score = book.score;
              break;
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }

        $bookName.prepend("<span style=\"color: #071; font-weight: bolder; font-size: large\">".concat(score, "</span>&nbsp;&nbsp;"));
      }
    });
  });
} // ==UserScript==
// @name         亚马逊 Kindle 展示豆瓣评分
// @namespace    http://tampermonkey.net/
// @version      0.0.1
// @description  亚马逊 Kindle 展示豆瓣评分，目前仅支持中亚。
// @author       duanluan
// @license      Apache 2.0
// @match        *://www.amazon.cn/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=amazon.cn
// @require      https://cdn.bootcdn.net/ajax/libs/jquery/3.6.0/jquery.slim.min.js
// @require      https://cdn.bootcdn.net/ajax/libs/limonte-sweetalert2/11.4.14/sweetalert2.all.min.js
// @require      https://cdn.bootcdn.net/ajax/libs/limonte-sweetalert2/11.4.14/sweetalert2.min.css
// @grant        GM_xmlhttpRequest
// @grant        GM_getValue
// @grant        GM_setValue
// ==/UserScript==
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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aEUsQ0FEb0IsQ0FFcEI7O1FBQ0EsSUFBSUYsSUFBSSxJQUFJLEdBQVosRUFBaUI7VUFDZjtRQUNEOztRQUVERixPQUFPLENBQUNDLEdBQVIsQ0FBWTlDLFFBQVo7UUFFQSxJQUFJa0QsS0FBSyxHQUFHLENBQVo7O1FBVG9CLDJDQVVERCxJQVZDO1FBQUE7O1FBQUE7VUFVcEIsb0RBQXlCO1lBQUEsSUFBZEUsSUFBYzs7WUFDdkIsSUFBSUEsSUFBSSxDQUFDRCxLQUFULEVBQWdCO2NBQ2RBLEtBQUssR0FBR0MsSUFBSSxDQUFDRCxLQUFiO2NBQ0E7WUFDRDtVQUNGO1FBZm1CO1VBQUE7UUFBQTtVQUFBO1FBQUE7O1FBZ0JwQlosU0FBUyxDQUFDYyxPQUFWLDhFQUFzRkYsS0FBdEY7TUFDRDtJQXBCVyxDQUFkO0VBc0JELENBaENEO0FBaUNELEVBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90YW1wZXJtb25rZXktc2NyaXB0LXV0aWxzLy4vdXRpbHMvc3JjL1VybC50cyIsIndlYnBhY2s6Ly90YW1wZXJtb25rZXktc2NyaXB0LXV0aWxzLy4vdXRpbHMvc3JjL2dtL1N0b3JlLnRzIiwid2VicGFjazovL3RhbXBlcm1vbmtleS1zY3JpcHQtdXRpbHMvLi91dGlscy9zcmMvZ20vZW51bS9IdHRwRGF0YVR5cGUudHMiLCJ3ZWJwYWNrOi8vdGFtcGVybW9ua2V5LXNjcmlwdC11dGlscy8uL3V0aWxzL3NyYy9nbS9SZXF1ZXN0LnRzIiwid2VicGFjazovL3RhbXBlcm1vbmtleS1zY3JpcHQtdXRpbHMvLi9hbWF6b24ta2luZGxlLWRvdWJhbi1zY29yZS9zcmMvbWFpbi50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBVcmwge1xuICAvKipcbiAgICog5qC55o2uIFVSTCDojrflj5bot6/lvoTvvIjmjpLpmaTln5/lkI3vvIlcbiAgICogQHBhcmFtIHVybCBVUkzvvIzpu5jorqTkuLrlvZPliY3lnLDlnYBcbiAgICovXG4gIHN0YXRpYyBnZXRQYXRoKHVybD86IHN0cmluZykge1xuICAgIGlmICghdXJsKSB7XG4gICAgICB1cmwgPSB3aW5kb3cubG9jYXRpb24uaHJlZjtcbiAgICB9XG4gICAgY29uc3QgaG9zdCA9IHdpbmRvdy5sb2NhdGlvbi5ob3N0O1xuICAgIHJldHVybiB1cmwuc3Vic3RyaW5nKHVybC5pbmRleE9mKGhvc3QpICsgaG9zdC5sZW5ndGgpO1xuICB9XG59XG4iLCIvKipcbiAqIOWtmOWCqFxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdG9yZSB7XG5cbiAgLyoqXG4gICAqIOiOt+WPllxuICAgKiBAcGFyYW0ga2V5IOmUrlxuICAgKi9cbiAgc3RhdGljIGdldChrZXk6IHN0cmluZyk6IGFueSB7XG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIHJldHVybiBHTV9nZXRWYWx1ZShrZXkpO1xuICB9XG5cbiAgLyoqXG4gICAqIOiuvue9rlxuICAgKiBAcGFyYW0ga2V5IOmUrlxuICAgKiBAcGFyYW0gdmFsdWUg5YC8XG4gICAqL1xuICBzdGF0aWMgc2V0KGtleTogc3RyaW5nLCB2YWx1ZTogYW55KSB7XG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIEdNX3NldFZhbHVlKGtleSwgdmFsdWUpO1xuICB9XG59XG4iLCJleHBvcnQgZW51bSBIdHRwRGF0YVR5cGUge1xuICBKU09OID0gXCJKU09OXCJcbn1cbiIsImltcG9ydCB7SHR0cERhdGFUeXBlfSBmcm9tIFwiLi9lbnVtL0h0dHBEYXRhVHlwZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZXF1ZXN0IHtcblxuICBzdGF0aWMgYXN5bmMgZ2V0KG9wdGlvbjogeyB1cmw6IHN0cmluZywgZGF0YVR5cGU/OiBIdHRwRGF0YVR5cGUsIHN5bmNocm9ub3VzPzogYm9vbGVhbiwgaGVhZGVycz86IHt9LCBvbmxvYWQ/OiBGdW5jdGlvbiB9KTogUHJvbWlzZTxhbnk+IHtcbiAgICBvcHRpb25bJ21ldGhvZCddID0gJ0dFVCc7XG5cbiAgICAvLyDlkIzmraXml7bov5Tlm54gUHJvbWlzZVxuICAgIGlmIChvcHRpb24uc3luY2hyb25vdXMpIHtcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgR01feG1saHR0cFJlcXVlc3Qoe1xuICAgICAgICAgIC4uLm9wdGlvbixcbiAgICAgICAgICBvbmxvYWQ6IChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgcmVzb2x2ZShvcHRpb24uZGF0YVR5cGUgPT09IEh0dHBEYXRhVHlwZS5KU09OID8gSlNPTi5wYXJzZShyZXNwb25zZS5yZXNwb25zZVRleHQpIDogcmVzcG9uc2UucmVzcG9uc2VUZXh0KTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIG9uZXJyb3I6IChlcnJvcikgPT4ge1xuICAgICAgICAgICAgcmVqZWN0KGVycm9yKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSlcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3Qgb25sb2FkMSA9IGZ1bmN0aW9uIChkZXRhaWxzKSB7XG4gICAgICAgIGxldCByZXNwb25zZTtcbiAgICAgICAgaWYgKG9wdGlvbi5kYXRhVHlwZSA9PT0gSHR0cERhdGFUeXBlLkpTT04pIHtcbiAgICAgICAgICByZXNwb25zZSA9IEpTT04ucGFyc2UoZGV0YWlscy5yZXNwb25zZVRleHQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlc3BvbnNlID0gZGV0YWlscy5yZXNwb25zZTtcbiAgICAgICAgfVxuICAgICAgICBvcHRpb24ub25sb2FkKHJlc3BvbnNlKTtcbiAgICAgIH1cbiAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgIEdNX3htbGh0dHBSZXF1ZXN0KHsuLi5vcHRpb24sIG9ubG9hZDogb25sb2FkMX0pO1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IFVybFV0aWxzIGZyb20gJy4uLy4uL3V0aWxzL3NyYy9VcmwnO1xuaW1wb3J0IFN0b3JlVXRpbHMgZnJvbSAnLi4vLi4vdXRpbHMvc3JjL2dtL1N0b3JlJztcbmltcG9ydCBIdHRwVXRpbHMgZnJvbSAnLi4vLi4vdXRpbHMvc3JjL2dtL1JlcXVlc3QnO1xuaW1wb3J0IHtIdHRwRGF0YVR5cGV9IGZyb20gXCIuLi8uLi91dGlscy9zcmMvZ20vZW51bS9IdHRwRGF0YVR5cGVcIjtcblxuY29uc3Qgc2VsZWN0b3JzID0ge1xuICAgIC8vIOS5puWQjemTvuaOpVxuICAgIGJvb2tOYW1lOiAnLnNnLWNvbC1pbm5lciBoMiBhW2hyZWZePVwiL2RwL1wiXScsXG4gICAgLy8g5YiG6aG15oyJ6ZKuXG4gICAgcGFnZVN0cmlwOiAnLnMtcGFnaW5hdGlvbi1zdHJpcCBhJyxcbiAgICAvLyDlt7LpgInkuK3nmoTliIbpobXmjInpkq7vvIjlvZPliY3pobXvvIlcbiAgICBwYWdlU2VsZWN0ZWQ6ICcucy1wYWdpbmF0aW9uLWl0ZW0ucy1wYWdpbmF0aW9uLXNlbGVjdGVkJyxcbiAgICAvLyDliIbpobXmjInpkq5cbiAgICBwYWdlQnRuOiAnLnMtcGFnaW5hdGlvbi1pdGVtLnMtcGFnaW5hdGlvbi1idXR0b24nLFxuICB9LFxuICBnbXN0b3JlS2V5cyA9IHtcbiAgICBzZXJ2ZXJVcmw6ICdzZXJ2ZXJVcmwnLFxuICB9LFxuICAvLyDmnI3liqHlnLDlnYBcbiAgc2VydmVyVXJsID0gU3RvcmVVdGlscy5nZXQoZ21zdG9yZUtleXMuc2VydmVyVXJsKTtcblxuLy8g5Lmm5ZCN77yM55So5LqO5Yik5pat5piv5ZCm5o2i6aG1XG5sZXQgJGJvb2tOYW1lcztcblxuKCgpID0+IHtcbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIGxldCB1cmxQYXRoID0gVXJsVXRpbHMuZ2V0UGF0aCgpO1xuICAvLyDliJfooajmiJbmkJzntKLpobXpnaJcbiAgaWYgKHVybFBhdGguc3RhcnRzV2l0aCgnL3MnKSAmJiB1cmxQYXRoLmluZGV4T2YoJ3JoPW4nKSAhPSAtMSkge1xuICAgIC8vIFN0b3JlVXRpbHMuc2V0KGdtc3RvcmVLZXlzLnNlcnZlclVybCwgd2luZG93LnByb21wdChcIuivt+i+k+WFpeKAnOS6mumprOmAiiBLaW5kbGUg5bGV56S66LGG55Oj6K+E5YiG4oCd55qE5pyN5Yqh5Zyw5Z2A77yaXCIsIFwiaHR0cDovL2xvY2FsaG9zdDo4MzYxXCIpKTtcbiAgICBsb2FkU2NvcmUoKTtcbiAgICBzZXRTZXJ2ZXJVcmwoc2VydmVyVXJsKTtcbiAgfVxuXG4gIC8vIOWIhumhteaTjeS9nOWQjumHjeaWsOWKoOi9veWIhuaVsFxuICAkKHNlbGVjdG9ycy5wYWdlU3RyaXApLm9uKCdjbGljaycsIGRvY3VtZW50LCAoKSA9PiB7XG4gICAgY29uc3QgdCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgaWYgKCRib29rTmFtZXMgIT0gJChzZWxlY3RvcnMuYm9va05hbWUpXG4gICAgICAgIC8vIOWIsOacgOWQjuS4gOmhteS6hiDmiJYg5pyJIDE2IOadoe+8iOavj+mhteadoeaVsO+8iVxuICAgICAgICAmJiAoISQoc2VsZWN0b3JzLnBhZ2VTZWxlY3RlZCkubmV4dChzZWxlY3RvcnMucGFnZUJ0bikgfHwgJChzZWxlY3RvcnMuYm9va05hbWUpLmxlbmd0aCA9PSAxNikpIHtcbiAgICAgICAgbG9hZFNjb3JlKCk7XG4gICAgICAgIGNsZWFyVGltZW91dCh0KTtcbiAgICAgIH1cbiAgICB9LCA1MDApO1xuICB9KVxufSkoKTtcblxuLyoqXG4gKiDlpoLmnpzmnKrorr7nva7mnI3liqHlmajlnLDlnYDvvIzliJnlvLnnqpfmj5DnpLrorr7nva5cbiAqL1xuZnVuY3Rpb24gc2V0U2VydmVyVXJsKHNlcnZlclVybCkge1xuICBpZiAoIXNlcnZlclVybCkge1xuICAgIHNlcnZlclVybCA9IFN0b3JlVXRpbHMuZ2V0KGdtc3RvcmVLZXlzLnNlcnZlclVybClcbiAgfVxuICBpZiAoIXNlcnZlclVybCkge1xuICAgIFN0b3JlVXRpbHMuc2V0KGdtc3RvcmVLZXlzLnNlcnZlclVybCxcbiAgICAgIHdpbmRvdy5wcm9tcHQoXCLor7fovpPlhaXigJzkuprpqazpgIogS2luZGxlIOWxleekuuixhueTo+ivhOWIhuKAneeahOacjeWKoeWcsOWdgO+8mlwiLCBcImh0dHA6Ly9sb2NhbGhvc3Q6ODM2MVwiKVxuICAgICk7XG4gIH1cbn1cblxuLyoqXG4gKiDliqDovb3or4TliIZcbiAqL1xuZnVuY3Rpb24gbG9hZFNjb3JlKCkge1xuICAkYm9va05hbWVzID0gJChzZWxlY3RvcnMuYm9va05hbWUpO1xuICAkYm9va05hbWVzLmVhY2goKGksIGVsZW1lbnQpID0+IHtcbiAgICBjb25zdCAkYm9va05hbWUgPSAkKGVsZW1lbnQpLFxuICAgICAgLy8g6I635Y+W5ZCN56ew5ZKM5L2c6ICF77yM5bm25Y676Zmk5aSa5L2Z5o+P6L+wXG4gICAgICBuYW1lID0gJGJvb2tOYW1lLnRleHQoKS5yZXBsYWNlKC9b77yIXFxcXCjjgJBdLipb77yJXFxcXCnjgJFdfMK3fOODuy9nLCAnJykudHJpbSgpLFxuICAgICAgYXV0aG9yID0gJGJvb2tOYW1lLnBhcmVudCgpLm5leHQoKS50ZXh0KCkucmVwbGFjZSgvW++8iFxcXFwo44CQXS4qW++8iVxcXFwp44CRXXzCt3zjg7t8LCB844CBfOOAgnznrYkqL2csICcnKVxuICAgICAgICAvLyDljrvpmaTlh7rniYjml6XmnJ9cbiAgICAgICAgLnJlcGxhY2UoL1xccypcXHxcXHMqXFxkezR9LVxcZHsyfS9pLCAnJykudHJpbSgpO1xuICAgIGNvbnNvbGUubG9nKG5hbWUgKyBcIiB8IFwiICsgYXV0aG9yKTtcblxuICAgIC8vIOixhueTo+ivu+S5puaQnOe0ouWQjeensOWSjOS9nOiAhVxuICAgIEh0dHBVdGlscy5nZXQoe1xuICAgICAgdXJsOiBzZXJ2ZXJVcmwgKyAnL2RvdWJhbi9zdWJqZWN0U2VhcmNoP25hbWU9JyArIG5hbWUgKyAnJmF1dGhvcj0nICsgYXV0aG9yLFxuICAgICAgZGF0YVR5cGU6IEh0dHBEYXRhVHlwZS5KU09OLFxuICAgICAgb25sb2FkOiAocmVzcG9uc2UpID0+IHtcbiAgICAgICAgY29uc3QgY29kZSA9IHJlc3BvbnNlLmNvZGUsIG1zZyA9IHJlc3BvbnNlLm1zZywgZGF0YSA9IHJlc3BvbnNlLmRhdGE7XG4gICAgICAgIC8vIFRPRE8g5by55qGG5o+Q56S66ZSZ6K+vXG4gICAgICAgIGlmIChjb2RlICE9IDIwMCkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcblxuICAgICAgICBsZXQgc2NvcmUgPSAwO1xuICAgICAgICBmb3IgKGNvbnN0IGJvb2sgb2YgZGF0YSkge1xuICAgICAgICAgIGlmIChib29rLnNjb3JlKSB7XG4gICAgICAgICAgICBzY29yZSA9IGJvb2suc2NvcmU7XG4gICAgICAgICAgICBicmVha1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAkYm9va05hbWUucHJlcGVuZChgPHNwYW4gc3R5bGU9XCJjb2xvcjogIzA3MTsgZm9udC13ZWlnaHQ6IGJvbGRlcjsgZm9udC1zaXplOiBsYXJnZVwiPiR7c2NvcmV9PC9zcGFuPiZuYnNwOyZuYnNwO2ApO1xuICAgICAgfVxuICAgIH0pO1xuICB9KVxufVxuXG4vLyA9PVVzZXJTY3JpcHQ9PVxuLy8gQG5hbWUgICAgICAgICDkuprpqazpgIogS2luZGxlIOWxleekuuixhueTo+ivhOWIhlxuLy8gQG5hbWVzcGFjZSAgICBodHRwOi8vdGFtcGVybW9ua2V5Lm5ldC9cbi8vIEB2ZXJzaW9uICAgICAgMC4wLjFcbi8vIEBkZXNjcmlwdGlvbiAg5Lqa6ams6YCKIEtpbmRsZSDlsZXnpLrosYbnk6Por4TliIbvvIznm67liY3ku4XmlK/mjIHkuK3kuprjgIJcbi8vIEBhdXRob3IgICAgICAgZHVhbmx1YW5cbi8vIEBsaWNlbnNlICAgICAgQXBhY2hlIDIuMFxuLy8gQG1hdGNoICAgICAgICAqOi8vd3d3LmFtYXpvbi5jbi8qXG4vLyBAaWNvbiAgICAgICAgIGh0dHBzOi8vd3d3Lmdvb2dsZS5jb20vczIvZmF2aWNvbnM/c3o9NjQmZG9tYWluPWFtYXpvbi5jblxuLy8gQHJlcXVpcmUgICAgICBodHRwczovL2Nkbi5ib290Y2RuLm5ldC9hamF4L2xpYnMvanF1ZXJ5LzMuNi4wL2pxdWVyeS5zbGltLm1pbi5qc1xuLy8gQHJlcXVpcmUgICAgICBodHRwczovL2Nkbi5ib290Y2RuLm5ldC9hamF4L2xpYnMvbGltb250ZS1zd2VldGFsZXJ0Mi8xMS40LjE0L3N3ZWV0YWxlcnQyLmFsbC5taW4uanNcbi8vIEByZXF1aXJlICAgICAgaHR0cHM6Ly9jZG4uYm9vdGNkbi5uZXQvYWpheC9saWJzL2xpbW9udGUtc3dlZXRhbGVydDIvMTEuNC4xNC9zd2VldGFsZXJ0Mi5taW4uY3NzXG4vLyBAZ3JhbnQgICAgICAgIEdNX3htbGh0dHBSZXF1ZXN0XG4vLyBAZ3JhbnQgICAgICAgIEdNX2dldFZhbHVlXG4vLyBAZ3JhbnQgICAgICAgIEdNX3NldFZhbHVlXG4vLyA9PS9Vc2VyU2NyaXB0PT1cbiJdLCJuYW1lcyI6WyJVcmwiLCJ1cmwiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhyZWYiLCJob3N0Iiwic3Vic3RyaW5nIiwiaW5kZXhPZiIsImxlbmd0aCIsIlN0b3JlIiwia2V5IiwiR01fZ2V0VmFsdWUiLCJ2YWx1ZSIsIkdNX3NldFZhbHVlIiwiSHR0cERhdGFUeXBlIiwiUmVxdWVzdCIsIm9wdGlvbiIsInN5bmNocm9ub3VzIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJHTV94bWxodHRwUmVxdWVzdCIsIm9ubG9hZCIsInJlc3BvbnNlIiwiZGF0YVR5cGUiLCJKU09OIiwicGFyc2UiLCJyZXNwb25zZVRleHQiLCJvbmVycm9yIiwiZXJyb3IiLCJvbmxvYWQxIiwiZGV0YWlscyIsIlVybFV0aWxzIiwiU3RvcmVVdGlscyIsIkh0dHBVdGlscyIsInNlbGVjdG9ycyIsImJvb2tOYW1lIiwicGFnZVN0cmlwIiwicGFnZVNlbGVjdGVkIiwicGFnZUJ0biIsImdtc3RvcmVLZXlzIiwic2VydmVyVXJsIiwiZ2V0IiwiJGJvb2tOYW1lcyIsInVybFBhdGgiLCJnZXRQYXRoIiwic3RhcnRzV2l0aCIsImxvYWRTY29yZSIsInNldFNlcnZlclVybCIsIiQiLCJvbiIsImRvY3VtZW50IiwidCIsInNldFRpbWVvdXQiLCJuZXh0IiwiY2xlYXJUaW1lb3V0Iiwic2V0IiwicHJvbXB0IiwiZWFjaCIsImkiLCJlbGVtZW50IiwiJGJvb2tOYW1lIiwibmFtZSIsInRleHQiLCJyZXBsYWNlIiwidHJpbSIsImF1dGhvciIsInBhcmVudCIsImNvbnNvbGUiLCJsb2ciLCJjb2RlIiwibXNnIiwiZGF0YSIsInNjb3JlIiwiYm9vayIsInByZXBlbmQiXSwic291cmNlUm9vdCI6IiJ9