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
                };

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztJQUFxQkE7Ozs7Ozs7O0lBQ25CO0FBQ0Y7QUFDQTtBQUNBO0lBQ0UsaUJBQWVDLEdBQWYsRUFBNkI7TUFDM0IsSUFBSSxDQUFDQSxHQUFMLEVBQVU7UUFDUkEsR0FBRyxHQUFHQyxNQUFNLENBQUNDLFFBQVAsQ0FBZ0JDLElBQXRCO01BQ0Q7O01BQ0QsSUFBTUMsSUFBSSxHQUFHSCxNQUFNLENBQUNDLFFBQVAsQ0FBZ0JFLElBQTdCO01BQ0EsT0FBT0osR0FBRyxDQUFDSyxTQUFKLENBQWNMLEdBQUcsQ0FBQ00sT0FBSixDQUFZRixJQUFaLElBQW9CQSxJQUFJLENBQUNHLE1BQXZDLENBQVA7SUFDRDs7Ozs7Ozs7Ozs7Ozs7QUNYSDtBQUNBO0FBQ0E7SUFDcUJDOzs7Ozs7OztJQUVuQjtBQUNGO0FBQ0E7QUFDQTtJQUNFLGFBQVdDLEdBQVgsRUFBNkI7TUFDM0IsT0FBT0MsV0FBVyxDQUFDRCxHQUFELENBQWxCO0lBQ0Q7SUFFRDtBQUNGO0FBQ0E7QUFDQTtBQUNBOzs7O1dBQ0UsYUFBV0EsR0FBWCxFQUF3QkUsS0FBeEIsRUFBb0M7TUFDbENDLFdBQVcsQ0FBQ0gsR0FBRCxFQUFNRSxLQUFOLENBQVg7SUFDRDs7Ozs7Ozs7QUNwQkksSUFBS0UsWUFBWjs7V0FBWUE7RUFBQUE7R0FBQUEsaUJBQUFBOzs7OytDQ0NaOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFEQTs7SUFFcUJDOzs7Ozs7Ozs0RUFFbkIsaUJBQWlCQyxNQUFqQjtRQUFBO1FBQUE7VUFBQTtZQUFBO2NBQUE7Z0JBQ0VBLE1BQU0sQ0FBQyxRQUFELENBQU4sR0FBbUIsS0FBbkIsQ0FERixDQUdFOztnQkFIRixLQUlNQSxNQUFNLENBQUNDLFdBSmI7a0JBQUE7a0JBQUE7Z0JBQUE7O2dCQUFBLGlDQUtXLElBQUlDLE9BQUosQ0FBWSxVQUFDQyxPQUFELEVBQVVDLE1BQVYsRUFBcUI7a0JBQ3RDQyxpQkFBaUIsaUNBQ1pMLE1BRFk7b0JBRWZNLE1BQU0sRUFBRSxnQkFBQ0MsUUFBRCxFQUFjO3NCQUNwQkosT0FBTyxDQUFDSCxNQUFNLENBQUNRLFFBQVAsS0FBb0JWLGlCQUFwQixHQUF3Q1csSUFBSSxDQUFDQyxLQUFMLENBQVdILFFBQVEsQ0FBQ0ksWUFBcEIsQ0FBeEMsR0FBNEVKLFFBQVEsQ0FBQ0ksWUFBdEYsQ0FBUDtvQkFDRCxDQUpjO29CQUtmQyxPQUFPLEVBQUUsaUJBQUNDLEtBQUQsRUFBVztzQkFDbEJULE1BQU0sQ0FBQ1MsS0FBRCxDQUFOO29CQUNEO2tCQVBjLEdBQWpCO2dCQVNELENBVk0sQ0FMWDs7Y0FBQTtnQkFpQlVDLE9BakJWLEdBaUJvQixTQUFWQSxPQUFVLENBQVVDLE9BQVYsRUFBbUI7a0JBQ2pDLElBQUlSLFFBQUo7O2tCQUNBLElBQUlQLE1BQU0sQ0FBQ1EsUUFBUCxLQUFvQlYsaUJBQXhCLEVBQTJDO29CQUN6Q1MsUUFBUSxHQUFHRSxJQUFJLENBQUNDLEtBQUwsQ0FBV0ssT0FBTyxDQUFDSixZQUFuQixDQUFYO2tCQUNELENBRkQsTUFFTztvQkFDTEosUUFBUSxHQUFHUSxPQUFPLENBQUNSLFFBQW5CO2tCQUNEOztrQkFDRFAsTUFBTSxDQUFDTSxNQUFQLENBQWNDLFFBQWQ7Z0JBQ0QsQ0F6Qkw7O2dCQTBCSUYsaUJBQWlCLGlDQUFLTCxNQUFMO2tCQUFhTSxNQUFNLEVBQUVRO2dCQUFyQixHQUFqQjs7Y0ExQko7Y0FBQTtnQkFBQTtZQUFBO1VBQUE7UUFBQTtNQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNKRjtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1LLFNBQVMsR0FBRztFQUNkO0VBQ0FDLFFBQVEsRUFBRSxrQ0FGSTtFQUdkO0VBQ0FDLFNBQVMsRUFBRSx1QkFKRztFQUtkO0VBQ0FDLFlBQVksRUFBRSwwQ0FOQTtFQU9kO0VBQ0FDLE9BQU8sRUFBRTtBQVJLLENBQWxCO0FBQUEsSUFVRUMsV0FBVyxHQUFHO0VBQ1pDLFNBQVMsRUFBRTtBQURDLENBVmhCO0FBQUEsSUFhRTtBQUNBQSxTQUFTLEdBQUdSLFNBQUEsQ0FBZU8sV0FBVyxDQUFDQyxTQUEzQixDQWRkLEVBZ0JBOztBQUNBLElBQUlFLFVBQUo7O0FBRUEsQ0FBQyxZQUFNO0VBQ0w7O0VBRUEsSUFBSUMsT0FBTyxHQUFHWixXQUFBLEVBQWQsQ0FISyxDQUlMOztFQUNBLElBQUlZLE9BQU8sQ0FBQ0UsVUFBUixDQUFtQixJQUFuQixLQUE0QkYsT0FBTyxDQUFDckMsT0FBUixDQUFnQixNQUFoQixLQUEyQixDQUFDLENBQTVELEVBQStEO0lBQzdEO0lBQ0F3QyxTQUFTO0lBQ1RDLFlBQVksQ0FBQ1AsU0FBRCxDQUFaO0VBQ0QsQ0FUSSxDQVdMOzs7RUFDQVEsQ0FBQyxDQUFDZCxTQUFTLENBQUNFLFNBQVgsQ0FBRCxDQUF1QmEsRUFBdkIsQ0FBMEIsT0FBMUIsRUFBbUNDLFFBQW5DLEVBQTZDLFlBQU07SUFDakQsSUFBTUMsQ0FBQyxHQUFHQyxVQUFVLENBQUMsWUFBTTtNQUN6QixJQUFJVixVQUFVLElBQUlNLENBQUMsQ0FBQ2QsU0FBUyxDQUFDQyxRQUFYLENBQWYsQ0FDRjtNQURFLElBRUUsQ0FBQ2EsQ0FBQyxDQUFDZCxTQUFTLENBQUNHLFlBQVgsQ0FBRCxDQUEwQmdCLElBQTFCLENBQStCbkIsU0FBUyxDQUFDSSxPQUF6QyxDQUFELElBQXNEVSxDQUFDLENBQUNkLFNBQVMsQ0FBQ0MsUUFBWCxDQUFELENBQXNCNUIsTUFBdEIsSUFBZ0MsRUFGeEYsQ0FBSixFQUVpRztRQUMvRnVDLFNBQVM7UUFDVFEsWUFBWSxDQUFDSCxDQUFELENBQVo7TUFDRDtJQUNGLENBUG1CLEVBT2pCLEdBUGlCLENBQXBCO0VBUUQsQ0FURDtBQVVELENBdEJEO0FBd0JBO0FBQ0E7QUFDQTs7O0FBQ0EsU0FBU0osWUFBVCxDQUFzQlAsU0FBdEIsRUFBaUM7RUFDL0IsSUFBSSxDQUFDQSxTQUFMLEVBQWdCO0lBQ2RBLFNBQVMsR0FBR1IsU0FBQSxDQUFlTyxXQUFXLENBQUNDLFNBQTNCLENBQVo7RUFDRDs7RUFDRCxJQUFJLENBQUNBLFNBQUwsRUFBZ0I7SUFDZFIsU0FBQSxDQUFlTyxXQUFXLENBQUNDLFNBQTNCLEVBQ0V2QyxNQUFNLENBQUN1RCxNQUFQLENBQWMsOEJBQWQsRUFBOEMsdUJBQTlDLENBREY7RUFHRDtBQUNGO0FBRUQ7QUFDQTtBQUNBOzs7QUFDQSxTQUFTVixTQUFULEdBQXFCO0VBQ25CSixVQUFVLEdBQUdNLENBQUMsQ0FBQ2QsU0FBUyxDQUFDQyxRQUFYLENBQWQ7RUFDQU8sVUFBVSxDQUFDZSxJQUFYLENBQWdCLFVBQUNDLENBQUQsRUFBSUMsT0FBSixFQUFnQjtJQUM5QixJQUFNQyxTQUFTLEdBQUdaLENBQUMsQ0FBQ1csT0FBRCxDQUFuQjtJQUFBLElBQ0U7SUFDQUUsSUFBSSxHQUFHRCxTQUFTLENBQUNFLElBQVYsR0FBaUJDLE9BQWpCLENBQXlCLHVCQUF6QixFQUFrRCxFQUFsRCxFQUFzREMsSUFBdEQsRUFGVDtJQUFBLElBR0VDLE1BQU0sR0FBR0wsU0FBUyxDQUFDTSxNQUFWLEdBQW1CYixJQUFuQixHQUEwQlMsSUFBMUIsR0FBaUNDLE9BQWpDLENBQXlDLGlDQUF6QyxFQUE0RSxFQUE1RSxFQUNQO0lBRE8sQ0FFTkEsT0FGTSxDQUVFLHNCQUZGLEVBRTBCLEVBRjFCLEVBRThCQyxJQUY5QixFQUhYO0lBTUFHLE9BQU8sQ0FBQ0MsR0FBUixDQUFZUCxJQUFJLEdBQUcsS0FBUCxHQUFlSSxNQUEzQixFQVA4QixDQVM5Qjs7SUFDQWhDLFdBQUEsQ0FBYztNQUNaakMsR0FBRyxFQUFFd0MsU0FBUyxHQUFHLDZCQUFaLEdBQTRDcUIsSUFBNUMsR0FBbUQsVUFBbkQsR0FBZ0VJLE1BRHpEO01BRVoxQyxRQUFRLEVBQUVWLGlCQUZFO01BR1pRLE1BQU0sRUFBRSxnQkFBQ0MsUUFBRCxFQUFjO1FBQ3BCLElBQU0rQyxJQUFJLEdBQUcvQyxRQUFRLENBQUMrQyxJQUF0QjtRQUFBLElBQTRCQyxHQUFHLEdBQUdoRCxRQUFRLENBQUNnRCxHQUEzQztRQUFBLElBQWdEQyxJQUFJLEdBQUdqRCxRQUFRLENBQUNpRCxJQUFoRSxDQURvQixDQUVwQjs7UUFDQSxJQUFJRixJQUFJLElBQUksR0FBWixFQUFpQjtVQUNmO1FBQ0Q7O1FBRURGLE9BQU8sQ0FBQ0MsR0FBUixDQUFZOUMsUUFBWjtRQUVBLElBQUlrRCxLQUFLLEdBQUcsQ0FBWjs7UUFUb0IsMkNBVURELElBVkM7UUFBQTs7UUFBQTtVQVVwQixvREFBeUI7WUFBQSxJQUFkRSxJQUFjOztZQUN2QixJQUFJQSxJQUFJLENBQUNELEtBQVQsRUFBZ0I7Y0FDZEEsS0FBSyxHQUFHQyxJQUFJLENBQUNELEtBQWI7Y0FDQTtZQUNEO1VBQ0Y7UUFmbUI7VUFBQTtRQUFBO1VBQUE7UUFBQTs7UUFnQnBCWixTQUFTLENBQUNjLE9BQVYsOEVBQXNGRixLQUF0RjtNQUNEO0lBcEJXLENBQWQ7RUFzQkQsQ0FoQ0Q7QUFpQ0QsRUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQiIsInNvdXJjZXMiOlsid2VicGFjazovL3RhbXBlcm1vbmtleS1zY3JpcHQtdXRpbHMvLi91dGlscy9zcmMvVXJsLnRzIiwid2VicGFjazovL3RhbXBlcm1vbmtleS1zY3JpcHQtdXRpbHMvLi91dGlscy9zcmMvZ20vU3RvcmUudHMiLCJ3ZWJwYWNrOi8vdGFtcGVybW9ua2V5LXNjcmlwdC11dGlscy8uL3V0aWxzL3NyYy9nbS9lbnVtL0h0dHBEYXRhVHlwZS50cyIsIndlYnBhY2s6Ly90YW1wZXJtb25rZXktc2NyaXB0LXV0aWxzLy4vdXRpbHMvc3JjL2dtL1JlcXVlc3QudHMiLCJ3ZWJwYWNrOi8vdGFtcGVybW9ua2V5LXNjcmlwdC11dGlscy8uL2FtYXpvbi1raW5kbGUtZG91YmFuLXNjb3JlL3NyYy9tYWluLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGNsYXNzIFVybCB7XG4gIC8qKlxuICAgKiDmoLnmja4gVVJMIOiOt+WPlui3r+W+hO+8iOaOkumZpOWfn+WQje+8iVxuICAgKiBAcGFyYW0gdXJsIFVSTO+8jOm7mOiupOS4uuW9k+WJjeWcsOWdgFxuICAgKi9cbiAgc3RhdGljIGdldFBhdGgodXJsPzogc3RyaW5nKSB7XG4gICAgaWYgKCF1cmwpIHtcbiAgICAgIHVybCA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmO1xuICAgIH1cbiAgICBjb25zdCBob3N0ID0gd2luZG93LmxvY2F0aW9uLmhvc3Q7XG4gICAgcmV0dXJuIHVybC5zdWJzdHJpbmcodXJsLmluZGV4T2YoaG9zdCkgKyBob3N0Lmxlbmd0aCk7XG4gIH1cbn1cbiIsIi8qKlxuICog5a2Y5YKoXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0b3JlIHtcblxuICAvKipcbiAgICog6I635Y+WXG4gICAqIEBwYXJhbSBrZXkg6ZSuXG4gICAqL1xuICBzdGF0aWMgZ2V0KGtleTogc3RyaW5nKTogYW55IHtcbiAgICByZXR1cm4gR01fZ2V0VmFsdWUoa2V5KTtcbiAgfVxuXG4gIC8qKlxuICAgKiDorr7nva5cbiAgICogQHBhcmFtIGtleSDplK5cbiAgICogQHBhcmFtIHZhbHVlIOWAvFxuICAgKi9cbiAgc3RhdGljIHNldChrZXk6IHN0cmluZywgdmFsdWU6IGFueSkge1xuICAgIEdNX3NldFZhbHVlKGtleSwgdmFsdWUpO1xuICB9XG59XG4iLCJleHBvcnQgZW51bSBIdHRwRGF0YVR5cGUge1xuICBKU09OID0gXCJKU09OXCJcbn1cbiIsImltcG9ydCB7SHR0cERhdGFUeXBlfSBmcm9tIFwiLi9lbnVtL0h0dHBEYXRhVHlwZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZXF1ZXN0IHtcblxuICBzdGF0aWMgYXN5bmMgZ2V0KG9wdGlvbjogeyB1cmw6IHN0cmluZywgZGF0YVR5cGU/OiBIdHRwRGF0YVR5cGUsIHN5bmNocm9ub3VzPzogYm9vbGVhbiwgaGVhZGVycz86IHt9LCBvbmxvYWQ/OiBGdW5jdGlvbiB9KTogUHJvbWlzZTxhbnk+IHtcbiAgICBvcHRpb25bJ21ldGhvZCddID0gJ0dFVCc7XG5cbiAgICAvLyDlkIzmraXml7bov5Tlm54gUHJvbWlzZVxuICAgIGlmIChvcHRpb24uc3luY2hyb25vdXMpIHtcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIEdNX3htbGh0dHBSZXF1ZXN0KHtcbiAgICAgICAgICAuLi5vcHRpb24sXG4gICAgICAgICAgb25sb2FkOiAocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgIHJlc29sdmUob3B0aW9uLmRhdGFUeXBlID09PSBIdHRwRGF0YVR5cGUuSlNPTiA/IEpTT04ucGFyc2UocmVzcG9uc2UucmVzcG9uc2VUZXh0KSA6IHJlc3BvbnNlLnJlc3BvbnNlVGV4dCk7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBvbmVycm9yOiAoZXJyb3IpID0+IHtcbiAgICAgICAgICAgIHJlamVjdChlcnJvcik7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0pXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IG9ubG9hZDEgPSBmdW5jdGlvbiAoZGV0YWlscykge1xuICAgICAgICBsZXQgcmVzcG9uc2U7XG4gICAgICAgIGlmIChvcHRpb24uZGF0YVR5cGUgPT09IEh0dHBEYXRhVHlwZS5KU09OKSB7XG4gICAgICAgICAgcmVzcG9uc2UgPSBKU09OLnBhcnNlKGRldGFpbHMucmVzcG9uc2VUZXh0KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXNwb25zZSA9IGRldGFpbHMucmVzcG9uc2U7XG4gICAgICAgIH1cbiAgICAgICAgb3B0aW9uLm9ubG9hZChyZXNwb25zZSk7XG4gICAgICB9XG4gICAgICBHTV94bWxodHRwUmVxdWVzdCh7Li4ub3B0aW9uLCBvbmxvYWQ6IG9ubG9hZDF9KTtcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCBVcmxVdGlscyBmcm9tICdAdXRpbHMvVXJsJztcbmltcG9ydCBTdG9yZVV0aWxzIGZyb20gJ0B1dGlscy9nbS9TdG9yZSc7XG5pbXBvcnQgSHR0cFV0aWxzIGZyb20gJ0B1dGlscy9nbS9SZXF1ZXN0JztcbmltcG9ydCB7SHR0cERhdGFUeXBlfSBmcm9tIFwiQHV0aWxzL2dtL2VudW0vSHR0cERhdGFUeXBlXCI7XG5cbmNvbnN0IHNlbGVjdG9ycyA9IHtcbiAgICAvLyDkuablkI3pk77mjqVcbiAgICBib29rTmFtZTogJy5zZy1jb2wtaW5uZXIgaDIgYVtocmVmXj1cIi9kcC9cIl0nLFxuICAgIC8vIOWIhumhteaMiemSrlxuICAgIHBhZ2VTdHJpcDogJy5zLXBhZ2luYXRpb24tc3RyaXAgYScsXG4gICAgLy8g5bey6YCJ5Lit55qE5YiG6aG15oyJ6ZKu77yI5b2T5YmN6aG177yJXG4gICAgcGFnZVNlbGVjdGVkOiAnLnMtcGFnaW5hdGlvbi1pdGVtLnMtcGFnaW5hdGlvbi1zZWxlY3RlZCcsXG4gICAgLy8g5YiG6aG15oyJ6ZKuXG4gICAgcGFnZUJ0bjogJy5zLXBhZ2luYXRpb24taXRlbS5zLXBhZ2luYXRpb24tYnV0dG9uJyxcbiAgfSxcbiAgZ21zdG9yZUtleXMgPSB7XG4gICAgc2VydmVyVXJsOiAnc2VydmVyVXJsJyxcbiAgfSxcbiAgLy8g5pyN5Yqh5Zyw5Z2AXG4gIHNlcnZlclVybCA9IFN0b3JlVXRpbHMuZ2V0KGdtc3RvcmVLZXlzLnNlcnZlclVybCk7XG5cbi8vIOS5puWQje+8jOeUqOS6juWIpOaWreaYr+WQpuaNoumhtVxubGV0ICRib29rTmFtZXM7XG5cbigoKSA9PiB7XG4gICd1c2Ugc3RyaWN0JztcblxuICBsZXQgdXJsUGF0aCA9IFVybFV0aWxzLmdldFBhdGgoKTtcbiAgLy8g5YiX6KGo5oiW5pCc57Si6aG16Z2iXG4gIGlmICh1cmxQYXRoLnN0YXJ0c1dpdGgoJy9zJykgJiYgdXJsUGF0aC5pbmRleE9mKCdyaD1uJykgIT0gLTEpIHtcbiAgICAvLyBTdG9yZVV0aWxzLnNldChnbXN0b3JlS2V5cy5zZXJ2ZXJVcmwsIHdpbmRvdy5wcm9tcHQoXCLor7fovpPlhaXigJzkuprpqazpgIogS2luZGxlIOWxleekuuixhueTo+ivhOWIhuKAneeahOacjeWKoeWcsOWdgO+8mlwiLCBcImh0dHA6Ly9sb2NhbGhvc3Q6ODM2MVwiKSk7XG4gICAgbG9hZFNjb3JlKCk7XG4gICAgc2V0U2VydmVyVXJsKHNlcnZlclVybCk7XG4gIH1cblxuICAvLyDliIbpobXmk43kvZzlkI7ph43mlrDliqDovb3liIbmlbBcbiAgJChzZWxlY3RvcnMucGFnZVN0cmlwKS5vbignY2xpY2snLCBkb2N1bWVudCwgKCkgPT4ge1xuICAgIGNvbnN0IHQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGlmICgkYm9va05hbWVzICE9ICQoc2VsZWN0b3JzLmJvb2tOYW1lKVxuICAgICAgICAvLyDliLDmnIDlkI7kuIDpobXkuoYg5oiWIOaciSAxNiDmnaHvvIjmr4/pobXmnaHmlbDvvIlcbiAgICAgICAgJiYgKCEkKHNlbGVjdG9ycy5wYWdlU2VsZWN0ZWQpLm5leHQoc2VsZWN0b3JzLnBhZ2VCdG4pIHx8ICQoc2VsZWN0b3JzLmJvb2tOYW1lKS5sZW5ndGggPT0gMTYpKSB7XG4gICAgICAgIGxvYWRTY29yZSgpO1xuICAgICAgICBjbGVhclRpbWVvdXQodCk7XG4gICAgICB9XG4gICAgfSwgNTAwKTtcbiAgfSlcbn0pKCk7XG5cbi8qKlxuICog5aaC5p6c5pyq6K6+572u5pyN5Yqh5Zmo5Zyw5Z2A77yM5YiZ5by556qX5o+Q56S66K6+572uXG4gKi9cbmZ1bmN0aW9uIHNldFNlcnZlclVybChzZXJ2ZXJVcmwpIHtcbiAgaWYgKCFzZXJ2ZXJVcmwpIHtcbiAgICBzZXJ2ZXJVcmwgPSBTdG9yZVV0aWxzLmdldChnbXN0b3JlS2V5cy5zZXJ2ZXJVcmwpXG4gIH1cbiAgaWYgKCFzZXJ2ZXJVcmwpIHtcbiAgICBTdG9yZVV0aWxzLnNldChnbXN0b3JlS2V5cy5zZXJ2ZXJVcmwsXG4gICAgICB3aW5kb3cucHJvbXB0KFwi6K+36L6T5YWl4oCc5Lqa6ams6YCKIEtpbmRsZSDlsZXnpLrosYbnk6Por4TliIbigJ3nmoTmnI3liqHlnLDlnYDvvJpcIiwgXCJodHRwOi8vbG9jYWxob3N0OjgzNjFcIilcbiAgICApO1xuICB9XG59XG5cbi8qKlxuICog5Yqg6L296K+E5YiGXG4gKi9cbmZ1bmN0aW9uIGxvYWRTY29yZSgpIHtcbiAgJGJvb2tOYW1lcyA9ICQoc2VsZWN0b3JzLmJvb2tOYW1lKTtcbiAgJGJvb2tOYW1lcy5lYWNoKChpLCBlbGVtZW50KSA9PiB7XG4gICAgY29uc3QgJGJvb2tOYW1lID0gJChlbGVtZW50KSxcbiAgICAgIC8vIOiOt+WPluWQjeensOWSjOS9nOiAhe+8jOW5tuWOu+mZpOWkmuS9meaPj+i/sFxuICAgICAgbmFtZSA9ICRib29rTmFtZS50ZXh0KCkucmVwbGFjZSgvW++8iFxcXFwo44CQXS4qW++8iVxcXFwp44CRXXzCt3zjg7svZywgJycpLnRyaW0oKSxcbiAgICAgIGF1dGhvciA9ICRib29rTmFtZS5wYXJlbnQoKS5uZXh0KCkudGV4dCgpLnJlcGxhY2UoL1vvvIhcXFxcKOOAkF0uKlvvvIlcXFxcKeOAkV18wrd844O7fCwgfOOAgXzjgIJ8562JKi9nLCAnJylcbiAgICAgICAgLy8g5Y676Zmk5Ye654mI5pel5pyfXG4gICAgICAgIC5yZXBsYWNlKC9cXHMqXFx8XFxzKlxcZHs0fS1cXGR7Mn0vaSwgJycpLnRyaW0oKTtcbiAgICBjb25zb2xlLmxvZyhuYW1lICsgXCIgfCBcIiArIGF1dGhvcik7XG5cbiAgICAvLyDosYbnk6Por7vkuabmkJzntKLlkI3np7DlkozkvZzogIVcbiAgICBIdHRwVXRpbHMuZ2V0KHtcbiAgICAgIHVybDogc2VydmVyVXJsICsgJy9kb3ViYW4vc3ViamVjdFNlYXJjaD9uYW1lPScgKyBuYW1lICsgJyZhdXRob3I9JyArIGF1dGhvcixcbiAgICAgIGRhdGFUeXBlOiBIdHRwRGF0YVR5cGUuSlNPTixcbiAgICAgIG9ubG9hZDogKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgIGNvbnN0IGNvZGUgPSByZXNwb25zZS5jb2RlLCBtc2cgPSByZXNwb25zZS5tc2csIGRhdGEgPSByZXNwb25zZS5kYXRhO1xuICAgICAgICAvLyBUT0RPIOW8ueahhuaPkOekuumUmeivr1xuICAgICAgICBpZiAoY29kZSAhPSAyMDApIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XG5cbiAgICAgICAgbGV0IHNjb3JlID0gMDtcbiAgICAgICAgZm9yIChjb25zdCBib29rIG9mIGRhdGEpIHtcbiAgICAgICAgICBpZiAoYm9vay5zY29yZSkge1xuICAgICAgICAgICAgc2NvcmUgPSBib29rLnNjb3JlO1xuICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgJGJvb2tOYW1lLnByZXBlbmQoYDxzcGFuIHN0eWxlPVwiY29sb3I6ICMwNzE7IGZvbnQtd2VpZ2h0OiBib2xkZXI7IGZvbnQtc2l6ZTogbGFyZ2VcIj4ke3Njb3JlfTwvc3Bhbj4mbmJzcDsmbmJzcDtgKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSlcbn1cblxuLy8gPT1Vc2VyU2NyaXB0PT1cbi8vIEBuYW1lICAgICAgICAg5Lqa6ams6YCKIEtpbmRsZSDlsZXnpLrosYbnk6Por4TliIZcbi8vIEBuYW1lc3BhY2UgICAgaHR0cDovL3RhbXBlcm1vbmtleS5uZXQvXG4vLyBAdmVyc2lvbiAgICAgIDAuMC4xXG4vLyBAZGVzY3JpcHRpb24gIOS6mumprOmAiiBLaW5kbGUg5bGV56S66LGG55Oj6K+E5YiG77yM55uu5YmN5LuF5pSv5oyB5Lit5Lqa44CCXG4vLyBAYXV0aG9yICAgICAgIGR1YW5sdWFuXG4vLyBAbGljZW5zZSAgICAgIEFwYWNoZSAyLjBcbi8vIEBtYXRjaCAgICAgICAgKjovL3d3dy5hbWF6b24uY24vKlxuLy8gQGljb24gICAgICAgICBodHRwczovL3d3dy5nb29nbGUuY29tL3MyL2Zhdmljb25zP3N6PTY0JmRvbWFpbj1hbWF6b24uY25cbi8vIEByZXF1aXJlICAgICAgaHR0cHM6Ly9jZG4uYm9vdGNkbi5uZXQvYWpheC9saWJzL2pxdWVyeS8zLjYuMC9qcXVlcnkuc2xpbS5taW4uanNcbi8vIEByZXF1aXJlICAgICAgaHR0cHM6Ly9jZG4uYm9vdGNkbi5uZXQvYWpheC9saWJzL2xpbW9udGUtc3dlZXRhbGVydDIvMTEuNC4xNC9zd2VldGFsZXJ0Mi5hbGwubWluLmpzXG4vLyBAcmVxdWlyZSAgICAgIGh0dHBzOi8vY2RuLmJvb3RjZG4ubmV0L2FqYXgvbGlicy9saW1vbnRlLXN3ZWV0YWxlcnQyLzExLjQuMTQvc3dlZXRhbGVydDIubWluLmNzc1xuLy8gQGdyYW50ICAgICAgICBHTV94bWxodHRwUmVxdWVzdFxuLy8gQGdyYW50ICAgICAgICBHTV9nZXRWYWx1ZVxuLy8gQGdyYW50ICAgICAgICBHTV9zZXRWYWx1ZVxuLy8gPT0vVXNlclNjcmlwdD09XG4iXSwibmFtZXMiOlsiVXJsIiwidXJsIiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIiwiaG9zdCIsInN1YnN0cmluZyIsImluZGV4T2YiLCJsZW5ndGgiLCJTdG9yZSIsImtleSIsIkdNX2dldFZhbHVlIiwidmFsdWUiLCJHTV9zZXRWYWx1ZSIsIkh0dHBEYXRhVHlwZSIsIlJlcXVlc3QiLCJvcHRpb24iLCJzeW5jaHJvbm91cyIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwiR01feG1saHR0cFJlcXVlc3QiLCJvbmxvYWQiLCJyZXNwb25zZSIsImRhdGFUeXBlIiwiSlNPTiIsInBhcnNlIiwicmVzcG9uc2VUZXh0Iiwib25lcnJvciIsImVycm9yIiwib25sb2FkMSIsImRldGFpbHMiLCJVcmxVdGlscyIsIlN0b3JlVXRpbHMiLCJIdHRwVXRpbHMiLCJzZWxlY3RvcnMiLCJib29rTmFtZSIsInBhZ2VTdHJpcCIsInBhZ2VTZWxlY3RlZCIsInBhZ2VCdG4iLCJnbXN0b3JlS2V5cyIsInNlcnZlclVybCIsImdldCIsIiRib29rTmFtZXMiLCJ1cmxQYXRoIiwiZ2V0UGF0aCIsInN0YXJ0c1dpdGgiLCJsb2FkU2NvcmUiLCJzZXRTZXJ2ZXJVcmwiLCIkIiwib24iLCJkb2N1bWVudCIsInQiLCJzZXRUaW1lb3V0IiwibmV4dCIsImNsZWFyVGltZW91dCIsInNldCIsInByb21wdCIsImVhY2giLCJpIiwiZWxlbWVudCIsIiRib29rTmFtZSIsIm5hbWUiLCJ0ZXh0IiwicmVwbGFjZSIsInRyaW0iLCJhdXRob3IiLCJwYXJlbnQiLCJjb25zb2xlIiwibG9nIiwiY29kZSIsIm1zZyIsImRhdGEiLCJzY29yZSIsImJvb2siLCJwcmVwZW5kIl0sInNvdXJjZVJvb3QiOiIifQ==