/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 458:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Store)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * 存储
 */
var Store = /*#__PURE__*/function () {
  function Store() {
    _classCallCheck(this, Store);
  }

  _createClass(Store, null, [{
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



/***/ }),

/***/ 923:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Options)
});

// EXTERNAL MODULE: ./utils/src/gm/Store.ts
var Store = __webpack_require__(458);
;// CONCATENATED MODULE: ./utils/src/gm/MenuCmd.ts
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * 选项菜单
 */
var MenuCmd = /*#__PURE__*/function () {
  function MenuCmd() {
    _classCallCheck(this, MenuCmd);
  }

  _createClass(MenuCmd, null, [{
    key: "register",
    value:
    /**
     * 注册
     * @param name 名称
     * @param fn 点击菜单时执行的函数
     */
    function register(name, fn) {
      return GM_registerMenuCommand(name, fn);
    }
    /**
     * 注销
     * @param menuCmdId 注册时返回的 ID
     */

  }, {
    key: "unregister",
    value: function unregister(menuCmdId) {
      GM_unregisterMenuCommand(menuCmdId);
    }
  }]);

  return MenuCmd;
}();


;// CONCATENATED MODULE: ./utils/src/CommonOptions.ts
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function CommonOptions_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function CommonOptions_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function CommonOptions_createClass(Constructor, protoProps, staticProps) { if (protoProps) CommonOptions_defineProperties(Constructor.prototype, protoProps); if (staticProps) CommonOptions_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }



/**
 * 选项菜单
 */

var CommonOptions = /*#__PURE__*/function () {
  function CommonOptions() {
    CommonOptions_classCallCheck(this, CommonOptions);
  }

  CommonOptions_createClass(CommonOptions, null, [{
    key: "registerBoolOption",
    value: // /**
    //  * 选项 Key
    //  */
    // protected static Keys = {
    //   // xxx: 'xxx'
    // }
    //
    // /**
    //  * 选项
    //  * @private
    //  */
    // protected static options = [
    //   // {label: '', name: this.Keys.xxx, version: 1, value: false, menuCmdId: null},
    // ];

    /**
     * 注册 bool 类型的选项
     * @param option 选项
     */
    function registerBoolOption(option) {
      var _this = this;

      var val = option.value,
          valIsBool = typeof val === 'boolean';

      if (!valIsBool) {
        return;
      } // 注册选项


      var currentMenuCmdId = MenuCmd.register((val ? '☑️ ' : '🔲 ') + option.label, function () {
        // 点击值取反
        option.value = !option.value;
        Store/* default.set */.Z.set(option.name, JSON.stringify(option)); // 取消注册

        MenuCmd.unregister(currentMenuCmdId); // 重新注册

        _this.registerBoolOption(option); // 刷新页面


        window.location.reload();
      }); // 保存选项 ID

      option.menuCmdId = currentMenuCmdId;
      Store/* default.set */.Z.set(option.name, JSON.stringify(option));
    }
    /**
     * 注册所有选项
     * @param url 设置页面 URL
     * @param options
     */

  }, {
    key: "registerAll",
    value: function registerAll(url, options) {
      MenuCmd.register('更多设置', function () {
        window.open(url, '_blank');
      });

      var _iterator = _createForOfIteratorHelper(options),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var option = _step.value;
          // TODO 【调试】不保留选项的值，每次都从 Store 中获取
          // Store.set(option.name, null);
          var storeOption = Store/* default.get */.Z.get(option.name) ? JSON.parse(Store/* default.get */.Z.get(option.name)) : null; // 如果选项不存在 || 版本不一致 时重置选项

          if (storeOption === null || !storeOption['version'] || storeOption['version'] < option.version) {
            Store/* default.set */.Z.set(option.name, JSON.stringify(option));
            storeOption = option;
          }

          this.registerBoolOption(storeOption);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
    /**
     * 在页面中加载选项
     */

  }, {
    key: "loadInGreasyfork",
    value: function loadInGreasyfork(scriptId, loadOptionContentFn) {
      if (location.host !== 'greasyfork.org' || location.href.indexOf('/scripts/' + scriptId) == -1) {
        return;
      }

      var selector = {
        scriptLinks: '#script-links',
        scriptOptions: '#script-options',
        scriptContent: '#script-content'
      };
      var $body = $(document.body),
          $scriptLinks = $(selector.scriptLinks),
          $scriptContent = $(selector.scriptContent); // 添加脚本设置的选项卡

      $scriptLinks.children('li:eq(0)').after("<li><a href=\"javascript:;\" id=\"script-options\">\u811A\u672C\u8BBE\u7F6E</a></li>"); // 脚本设置选项点击事件

      $body.on('click', selector.scriptOptions, function () {
        // 移除已选中选项的样式
        var $currentLi = $scriptLinks.children('li.current');
        $currentLi.html("<a href=\"".concat(location.href, "\">").concat($currentLi.text(), "</a>"));
        $currentLi.removeClass('current'); // 添加选中选项的样式

        var $scriptOptions = $(selector.scriptOptions);
        $scriptOptions.parent().addClass('current');
        loadOptionContentFn($scriptContent);
      });
    }
  }]);

  return CommonOptions;
}();


;// CONCATENATED MODULE: ./v2ex-replies-pro/src/Options.ts
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function Options_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Options_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Options_createClass(Constructor, protoProps, staticProps) { if (protoProps) Options_defineProperties(Constructor.prototype, protoProps); if (staticProps) Options_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var Options = /*#__PURE__*/function () {
  function Options() {
    Options_classCallCheck(this, Options);
  }

  Options_createClass(Options, null, [{
    key: "registerAll",
    value:
    /**
     * 选项 Key
     */

    /**
     * 选项
     * @private
     */

    /**
     * 注册所有选项
     */
    function registerAll() {
      CommonOptions.registerAll('https://www.v2ex.com/settings', this.options);
    }
    /**
     * 在页面中加载选项
     */

  }, {
    key: "loadInV2ex",
    value: function loadInV2ex() {
      var _this = this;

      if (location.href.indexOf('v2ex.com/settings') == -1) {
        return;
      }

      var selector = {
        menuTab: 'a.tab',
        currentMenuTab: 'a.tab_current',
        scriptOptions: '#script-options',
        scriptContent: '#Main .box',
        v2exTokenInput: 'input[name="v2exToken"]',
        saveOptionsBtn: '#save-options'
      },
          $body = $(document.body),
          $menuTab = $(selector.menuTab); // 添加脚本设置的选项卡

      $menuTab.parent().append("<a id=\"script-options\" class=\"tab\" href=\"javascript:void(0);\">\u811A\u672C\u8BBE\u7F6E</a>"); // 脚本设置选项点击事件

      $body.on('click', selector.scriptOptions, function () {
        // 移除已选中选项的样式
        var $currentMenuTab = $(selector.currentMenuTab);
        $currentMenuTab.removeClass('tab_current');
        $currentMenuTab.addClass('tab'); // 添加选中选项的样式

        var $scriptOptions = $(selector.scriptOptions);
        $scriptOptions.removeClass('tab');
        $scriptOptions.addClass('tab_current'); // 添加脚本设置的内容

        $(selector.scriptContent + ' div:gt(1)').remove();
        $(selector.scriptContent).append("\n        <form>\n          <div class=\"inner\">\n            <div class=\"topic_content markdown_body\">\n              <p>\u8BF7\u5728\u8FD9\u586B\u5199\u4F60\u7684 <a href=\"https://www.v2ex.com/settings/tokens\" target=\"_blank\">V2EX Token</a></p>          \n            </div>\n            <div class=\"sep20\"></div>\n            <div class=\"social-settings-form\">\n              <div>\n                <div>V2EX Token</div>\n                <input type=\"password\" class=\"sl\" name=\"v2exToken\" value=\"".concat(JSON.parse(Store/* default.get */.Z.get(_this.Keys.v2exToken)).value, "\">\n              </div>\n            </div>\n          </div>\n          <div class=\"cell_ops\">\n            <input id=\"save-options\" type=\"submit\" class=\"super normal button\" value=\"Save\">\n          </div>\n        </form>\n      "));
        $body.on('click', selector.saveOptionsBtn, function () {
          var token = $(selector.v2exTokenInput).val();
          Store/* default.set */.Z.set(_this.Keys.v2exToken, JSON.stringify(_objectSpread(_objectSpread({}, JSON.parse(Store/* default.get */.Z.get(_this.Keys.v2exToken))), {
            value: token
          })));
          layer.msg('保存成功');
          return false;
        });
      });
    }
  }]);

  return Options;
}();

_defineProperty(Options, "Keys", {
  v2exToken: 'v2exToken'
});

_defineProperty(Options, "options", [{
  label: 'V2EX Token',
  name: Options.Keys.v2exToken,
  version: 1,
  value: '',
  menuCmdId: null
}]);



/***/ }),

/***/ 439:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Replay)
});

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

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }



var Request = /*#__PURE__*/function () {
  function Request() {
    _classCallCheck(this, Request);
  }

  _createClass(Request, null, [{
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


;// CONCATENATED MODULE: ./utils/src/gm/Info.ts
function Info_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Info_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Info_createClass(Constructor, protoProps, staticProps) { if (protoProps) Info_defineProperties(Constructor.prototype, protoProps); if (staticProps) Info_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * 获取脚本信息
 */
var Info = /*#__PURE__*/function () {
  function Info() {
    Info_classCallCheck(this, Info);
  }

  Info_createClass(Info, null, [{
    key: "get",
    value: function get() {
      return GM_info.script;
    }
  }, {
    key: "getName",
    value: function getName() {
      return this.get().name;
    }
  }, {
    key: "getVersion",
    value: function getVersion() {
      return this.get().version;
    }
  }]);

  return Info;
}();


// EXTERNAL MODULE: ./utils/src/gm/Store.ts
var Store = __webpack_require__(458);
// EXTERNAL MODULE: ./v2ex-replies-pro/src/Options.ts + 2 modules
var Options = __webpack_require__(923);
;// CONCATENATED MODULE: ./v2ex-replies-pro/src/api/V2ex.ts
function V2ex_typeof(obj) { "@babel/helpers - typeof"; return V2ex_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, V2ex_typeof(obj); }

function V2ex_regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ V2ex_regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == V2ex_typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function V2ex_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function V2ex_asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { V2ex_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { V2ex_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function V2ex_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function V2ex_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function V2ex_createClass(Constructor, protoProps, staticProps) { if (protoProps) V2ex_defineProperties(Constructor.prototype, protoProps); if (staticProps) V2ex_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function V2ex_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







var V2ex = /*#__PURE__*/function () {
  function V2ex() {
    V2ex_classCallCheck(this, V2ex);
  }

  V2ex_createClass(V2ex, null, [{
    key: "checkToken",
    value:
    /**
     * 检查 Token 是否有效
     */
    function () {
      var _checkToken = V2ex_asyncToGenerator( /*#__PURE__*/V2ex_regeneratorRuntime().mark(function _callee() {
        var token, result;
        return V2ex_regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                token = JSON.parse(Store/* default.get */.Z.get(Options/* default.Keys.v2exToken */.Z.Keys.v2exToken)).value;

                if (!(!token && location.href.indexOf('v2ex.com/settings') == -1)) {
                  _context.next = 4;
                  break;
                }

                layer.msg('请先在“脚本设置”中填写 Token！', {
                  icon: 4,
                  offset: 'rb'
                }, function () {
                  window.open('https://www.v2ex.com/settings', '_blank');
                });
                return _context.abrupt("return", false);

              case 4:
                _context.next = 6;
                return Request.get({
                  url: this.BASE_URL + 'token',
                  dataType: HttpDataType.JSON,
                  synchronous: true,
                  headers: {
                    'Authorization': 'Bearer ' + token
                  }
                });

              case 6:
                result = _context.sent;

                if (result['success']) {
                  _context.next = 10;
                  break;
                }

                layer.msg(Info.getName() + "：" + result['message'], {
                  icon: 2,
                  offset: 'rb',
                  time: 5000
                });
                return _context.abrupt("return", false);

              case 10:
                return _context.abrupt("return", true);

              case 11:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function checkToken() {
        return _checkToken.apply(this, arguments);
      }

      return checkToken;
    }()
    /**
     * 获取主题回复
     * @param topicId 主题 ID
     * @param page 页码
     */

  }, {
    key: "getReplies",
    value: function () {
      var _getReplies = V2ex_asyncToGenerator( /*#__PURE__*/V2ex_regeneratorRuntime().mark(function _callee2(topicId, page) {
        var result;
        return V2ex_regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return Request.get({
                  url: this.BASE_URL + 'topics/' + topicId + '/replies' + (page ? '?p=' + page : ''),
                  dataType: HttpDataType.JSON,
                  synchronous: true,
                  headers: {
                    'Authorization': 'Bearer ' + JSON.parse(Store/* default.get */.Z.get(Options/* default.Keys.v2exToken */.Z.Keys.v2exToken)).value
                  }
                });

              case 2:
                result = _context2.sent;

                if (result['success']) {
                  _context2.next = 6;
                  break;
                }

                console.warn(Info.getName() + "：" + result['message']);
                return _context2.abrupt("return");

              case 6:
                return _context2.abrupt("return", result['result']);

              case 7:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function getReplies(_x, _x2) {
        return _getReplies.apply(this, arguments);
      }

      return getReplies;
    }()
  }]);

  return V2ex;
}();

V2ex_defineProperty(V2ex, "BASE_URL", 'https://www.v2ex.com/api/v2/');


;// CONCATENATED MODULE: ./v2ex-replies-pro/src/Replay.ts
function Replay_typeof(obj) { "@babel/helpers - typeof"; return Replay_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, Replay_typeof(obj); }

function Replay_regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ Replay_regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == Replay_typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function Replay_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function Replay_asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { Replay_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { Replay_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function Replay_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Replay_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Replay_createClass(Constructor, protoProps, staticProps) { if (protoProps) Replay_defineProperties(Constructor.prototype, protoProps); if (staticProps) Replay_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }




var Replay = /*#__PURE__*/function () {
  function Replay() {
    Replay_classCallCheck(this, Replay);
  }

  Replay_createClass(Replay, null, [{
    key: "run",
    value: function () {
      var _run = Replay_asyncToGenerator( /*#__PURE__*/Replay_regeneratorRuntime().mark(function _callee() {
        var selector, $body, $head, $allReplies, $repliesNumber, $opUserName, repliesNumber, opUserName, replies, i, db, start, showReplies, showTaSay;
        return Replay_regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!(location.href.indexOf('v2ex.com/t/') === -1)) {
                  _context.next = 2;
                  break;
                }

                return _context.abrupt("return");

              case 2:
                _context.next = 4;
                return V2ex.checkToken();

              case 4:
                if (_context.sent) {
                  _context.next = 6;
                  break;
                }

                return _context.abrupt("return");

              case 6:
                selector = {
                  // 回复列表
                  repliesBox: '#Main .box:eq(1)',
                  // 所有回复
                  allReplies: '#Main .box:eq(1) .cell:not(:eq(0))',
                  // 回复数
                  repliesNumber: '#Main .box:eq(1) .gray',
                  // OP 名
                  opUserName: '.header .gray a:eq(0)',
                  // @ 链接
                  atLink: '.at-link',
                  // 右侧内容
                  taSay: '.ta-say'
                }, $body = $(document.body), $head = $(document.head), $allReplies = $(selector.allReplies), $repliesNumber = $(selector.repliesNumber), $opUserName = $(selector.opUserName); // 添加弹窗样式

                $head.append("<style>\n      .winbox".concat(selector.taSay, " {\n        border-shadow: 0 14px 12px rgb(0 0 0 / 25%), 0 10px 10px rgb(0 0 0 / 22%) !important;\n      }\n      .winbox").concat(selector.taSay, " .wb-drag {\n        background-color: #e2e2e2;\n        color: #666;\n      }\n    </style>")); // 隐藏原回复

                $allReplies.hide(); // 获取回复数

                repliesNumber = $repliesNumber.text().substring(0, $repliesNumber.text().indexOf('条')); // 获取 OP 名

                opUserName = $opUserName.text(); // 获取所有回复

                replies = [];
                i = 1;

              case 13:
                if (!(i <= Math.ceil(Number(repliesNumber) / 20))) {
                  _context.next = 25;
                  break;
                }

                _context.t0 = replies.push;
                _context.t1 = replies;
                _context.t2 = _toConsumableArray;
                _context.next = 19;
                return V2ex.getReplies(topicId, i);

              case 19:
                _context.t3 = _context.sent;
                _context.t4 = (0, _context.t2)(_context.t3);

                _context.t0.apply.call(_context.t0, _context.t1, _context.t4);

              case 22:
                i++;
                _context.next = 13;
                break;

              case 25:
                // 清空数据库
                db = openDatabase('v2ex-replies-pro', '0.0.1', Info.getName(), 10 * 1024 * 1024);
                db.transaction(function (tx) {
                  tx.executeSql("drop table if exists rendered_replies");
                }, function (error) {}, function () {
                  start();
                });

                start = function start() {
                  var _loop = function _loop(_i) {
                    var reply = replies[_i],
                        replyId = reply.id,
                        created = reply.created,
                        created1 = Number(created + '000'),
                        createdFormat = moment(created1).format('YYYY-MM-DD HH:mm:ss'),
                        createdAgo = moment(created1).fromNow(),
                        member = reply.member,
                        username = member.username,
                        avatar = member.avatar,
                        replyDivId = 'r_' + replyId,
                        $replyDivId = $('#' + replyDivId),
                        // 点赞数
                    $fade = $replyDivId.find('.fade'),
                        fadeHtml = $fade.length === 0 ? '' : $fade.prop('outerHTML'); // 删除原回复

                    $replyDivId.remove();
                    var contentRendered = reply.content_rendered,
                        atSearchStartIndex = 0; // 可能会 @ 多个人

                    var atSearchStr = '@<a href=\"/member/';

                    while (true) {
                      var atLinkIndex = contentRendered.indexOf(atSearchStr, atSearchStartIndex);

                      if (atLinkIndex === -1) {
                        break;
                      } // 获取 @ 的用户名


                      var atUsername = contentRendered.substring(atLinkIndex + atSearchStr.length, contentRendered.indexOf('">', atLinkIndex)); // 回复内容，其中 @ 链接添加了 class 和 @ 的用户名传递

                      var replaceStr = "@<a class=\"".concat(selector.atLink.substring(1), "\" data-reply-div-id=\"").concat(replyDivId, "\" data-username=\"").concat(atUsername, "\" data-created=\"").concat(created, "\" onclick=\"return false;\" href=\"/member/").concat(atUsername);
                      contentRendered = contentRendered.replaceAll("@<a href=\"/member/".concat(atUsername), replaceStr);
                      atSearchStartIndex = atLinkIndex + replaceStr.length;
                    }

                    var html = "\n          <!-- \u6B64\u5904\u7684 style \u4E3A\u6A21\u4EFF .cell \u6837\u5F0F -->\n          <div id=\"".concat(replyDivId, "\" style=\"font-size: 14px; line-height: 150%; border-bottom: 1px solid #e2e2e2\">\n            <div style=\"display: flex;\">\n              <div style=\"display: flex; flex-direction: column; align-items: center; background-color: #fafbfc; padding: 12px 0 10px 0\">\n                ").concat(username === opUserName ? "\n                  <div style=\"height: 0\">\n                    <div style=\"position: relative; left: 44px; top: -12px; background-image: linear-gradient(225deg, #558bf6 23px, #fafbfc 0); width: 32px; height: 32px;\">\n                      <div class=\"badges\" style=\"color: white; transform: rotate(45deg); position: relative; top: -1px; right: -5px\">OP</div>\n                    </div>\n                  </div>\n                " : '', "\n                <img src=\"").concat(avatar, "\" class=\"avatar\" alt=\"").concat(username, "\" style=\"width: 48px\">\n                <div style=\"width: 120px;\">\n                  <a href=\"/member/").concat(username, "\" class=\"dark\">").concat(username, "</a>\n                </div>\n              </div>\n              <div style=\"padding: 10px 10px 10px 12px; width: 100%\">\n                <div style=\"display: flex; justify-content: space-between\">\n                  <div>\n                    &nbsp;<span class=\"ago\" title=\"").concat(createdFormat, "\">").concat(createdAgo, "</span>&nbsp;").concat(fadeHtml, "\n                  </div>\n                  <div>\n                    <!-- \u6B64\u5904\u4E3A\u539F\u5185\u5BB9\u4FDD\u6301\u4E0D\u53D8 -->\n                    <div id=\"thank_area_").concat(replyId, "\" class=\"thank_area\"><a href=\"#;\" onclick=\"if (confirm('\u786E\u8BA4\u8981\u4E0D\u518D\u663E\u793A\u6765\u81EA @").concat(username, " \u7684\u8FD9\u6761\u56DE\u590D\uFF1F')) { ignoreReply(").concat(replyId, ", ").concat(once, "); }\" class=\"thank\" style=\"color: #ccc;\">\u9690\u85CF</a> &nbsp; &nbsp; <a href=\"#;\" onclick=\"if (confirm('\u786E\u8BA4\u82B1\u8D39 10 \u4E2A\u94DC\u5E01\u5411 @").concat(username, " \u7684\u8FD9\u6761\u56DE\u590D\u53D1\u9001\u611F\u8C22\uFF1F')) { thankReply(").concat(replyId, "); }\" class=\"thank\">\u611F\u8C22\u56DE\u590D\u8005</a></div> &nbsp; <a href=\"#;\" onclick=\"replyOne('").concat(username, "');\"><img src=\"/static/img/reply_neue.png\" align=\"absmiddle\" border=\"0\" alt=\"Reply\" width=\"20\"></a> &nbsp;&nbsp; <span class=\"no\">1</span>\n                  </div>\n                </div>\n                <div style=\"text-align: left\">\n                  <span>").concat(contentRendered, "</span>\n                </div>\n              </div>\n            </div>\n          </div>\n        "); // 将已渲染的回复保存到 Web SQL 中

                    db.transaction(function (tx) {
                      // @formatter:off
                      tx.executeSql("create table if not exists rendered_replies (id unique, username, created, html, content_rendered)");
                      tx.executeSql("insert or replace into rendered_replies (id, username, created, html, content_rendered) values (?, ?, ?, ?, ?)", [replyId, username, created, html, contentRendered]); // @formatter:on
                    }, function (error) {}, function () {
                      if (_i === replies.length - 1) {
                        // updateReplies();
                        showReplies();
                      }
                    });
                  };

                  for (var _i = 0; _i < replies.length; _i++) {
                    _loop(_i);
                  }
                };
                /**
                 * 展示回复
                 */


                showReplies = function showReplies() {
                  db.transaction(function (tx) {
                    // @formatter:off
                    tx.executeSql("select * from rendered_replies order by created", [], function (tx, results) {
                      // @formatter:on
                      var _iterator = _createForOfIteratorHelper(results.rows),
                          _step;

                      try {
                        for (_iterator.s(); !(_step = _iterator.n()).done;) {
                          var row = _step.value;
                          $(selector.repliesBox).append(row.html);
                        } // 给 @ 链接添加点击事件

                      } catch (err) {
                        _iterator.e(err);
                      } finally {
                        _iterator.f();
                      }

                      $body.on('click', selector.atLink, function () {
                        var $this = $(this);
                        showTaSay($this.data('replyDivId'), $this.data('username'), $this.data('created'));
                      });
                    });
                  });
                };
                /**
                 * 展示 TA 说了什么
                 * @param replyDivId 回复的 div id
                 * @param username 用户名
                 * @param created 创建时间
                 */


                showTaSay = function showTaSay(replyDivId, username, created) {
                  // 关闭弹窗
                  if (Replay.winbox) {
                    Replay.winbox.close();
                  }

                  console.log(replyDivId); // 高亮点击 @ 链接的那条回复

                  var $reply = $('#' + replyDivId);
                  $reply.css('border', '2px solid'); // 跳转到高亮回复

                  $('html,body').animate({
                    scrollTop: $reply.offset().top - $(window).height() / 2
                  }, 500);
                  db.transaction(function (tx) {
                    // @formatter:off
                    tx.executeSql("select * from rendered_replies where username = ? order by created", [username], function (tx, results) {
                      // @formatter:on
                      var html = '',
                          isGeByPrev = true,
                          isHighlighted = false;

                      for (var _i2 = 0; _i2 < results.rows.length; _i2++) {
                        var row = results.rows[_i2];
                        var borderStyle = 'border-bottom: 1px solid #e2e2e2;'; // 在点击回复所在位置高亮

                        if (!(created > row.created) && isGeByPrev) {
                          borderStyle += 'border-top: 2px solid';
                          isHighlighted = true;
                        } else if (_i2 === results.rows.length - 1 && !isHighlighted) {
                          borderStyle = 'border-bottom: 2px solid';
                        }

                        html += "\n              <div style=\"".concat(borderStyle, "\">\n                ").concat($(row.html).find('.ago').parent().prop('outerHTML'), "\n                <div style=\"padding-bottom: 5px\">").concat(row.content_rendered, "</div>\n              </div>\n            "); // 当前条是否为之前的回复，用于下一条判断是否需要高亮

                        isGeByPrev = created > row.created;
                      }

                      Replay.winbox = new WinBox({
                        "class": selector.taSay.substring(1),
                        title: username + ' 说了什么？',
                        x: localStorage.getItem('ta_say_x') || 'right',
                        y: localStorage.getItem('ta_say_y') || 'bottom',
                        width: localStorage.getItem('ta_say_width') || '540px',
                        height: localStorage.getItem('ta_say_height') || '70%',
                        html: "<div style=\"padding: 10px; font-size: 14px\">".concat(html, "</div>"),
                        onresize: function onresize(width, height) {
                          // 改变窗口大小时记录窗口大小
                          localStorage.setItem('ta_say_width', width + 'px');
                          localStorage.setItem('ta_say_height', height + 'px');
                        },
                        onmove: function onmove(x, y) {
                          // 移动窗口时记录窗口位置
                          localStorage.setItem('ta_say_x', x);
                          localStorage.setItem('ta_say_y', y);
                        },
                        onclose: function onclose() {
                          // 关闭弹窗时取消回复高亮
                          $reply.css('border', 'none');
                          $reply.css('border-bottom', '1px solid #e2e2e2');
                          Replay.winbox = null;
                        }
                      });
                    });
                  });
                };

              case 30:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function run() {
        return _run.apply(this, arguments);
      }

      return run;
    }()
  }]);

  return Replay;
}();



/***/ }),

/***/ 649:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var _Replay__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(439);
/* harmony import */ var _Options__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(923);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

// ==UserScript==
// @name         V2EX 主题回复增强
// @namespace    http://tampermonkey.net/
// @version      0.0.4
// @description  增强 V2EX 主题的回复。
// @author       duanluan
// @copyright    2022, duanluan (https://github.com/duanluan)
// @license      Apache-2.0; https://www.apache.org/licenses/LICENSE-2.0.txt
// @match        *://*.v2ex.com/*
// @require      https://cdn.bootcdn.net/ajax/libs/jquery/3.6.0/jquery.min.js
// @require      https://cdn.bootcdn.net/ajax/libs/moment.js/2.29.4/moment-with-locales.min.js
// @require      https://cdn.bootcdn.net/ajax/libs/moment.js/2.29.4/locale/zh-cn.min.js
// @require      https://cdn.jsdelivr.net/npm/winbox@0.2.6/dist/winbox.bundle.min.js
// @resource css https://cdn.bootcdn.net/ajax/libs/layer/3.5.1/theme/default/layer.min.css
// @require      https://cdn.bootcdn.net/ajax/libs/layer/3.5.1/layer.min.js
// @grant        GM_xmlhttpRequest
// @grant        GM_getValue
// @grant        GM_setValue
// @grant        GM_registerMenuCommand
// @grant        GM_unregisterMenuCommand
// @grant        GM_getResourceText
// @grant        GM_addStyle
// ==/UserScript==
// ==OpenUserJS==
// @author duanluan
// ==/OpenUserJS==



_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
  'use strict'; // 加载 CSS

  return _regeneratorRuntime().wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          GM_addStyle(GM_getResourceText('css')); // 设置 layer 图标

          $(document.head).append("<style>\n    .layui-layer-ico{background:url('https://cdn.bootcdn.net/ajax/libs/layer/3.5.1/theme/default/icon.png') no-repeat}\n    /* \u539F\u6837\u5F0F\u4E0D\u77E5\u4E3A\u4F55\u4F1A\u5931\u6548\uFF0C\u5BFC\u81F4 icon \u8BBE\u7F6E\u65E0\u6548 */\n    .layui-layer-ico1{background-position:-30px 0}\n    .layui-layer-ico2{background-position:-60px 0}\n    .layui-layer-ico3{background-position:-90px 0}\n    .layui-layer-ico4{background-position:-120px 0}\n    .layui-layer-ico5{background-position:-150px 0}\n    .layui-layer-ico6{background-position:-180px 0}\n  </style>");
          _Options__WEBPACK_IMPORTED_MODULE_1__/* ["default"].registerAll */ .Z.registerAll();
          _Options__WEBPACK_IMPORTED_MODULE_1__/* ["default"].loadInV2ex */ .Z.loadInV2ex();
          _Replay__WEBPACK_IMPORTED_MODULE_0__/* ["default"].run */ .Z.run();

        case 5:
        case "end":
          return _context.stop();
      }
    }
  }, _callee);
}))();

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	__webpack_require__(649);
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	__webpack_require__(923);
/******/ 	var __webpack_exports__ = __webpack_require__(439);
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1VFQUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGFtcGVybW9ua2V5LXNjcmlwdC11dGlscy8uL3V0aWxzL3NyYy9nbS9TdG9yZS50cyIsIndlYnBhY2s6Ly90YW1wZXJtb25rZXktc2NyaXB0LXV0aWxzLy4vdXRpbHMvc3JjL2dtL01lbnVDbWQudHMiLCJ3ZWJwYWNrOi8vdGFtcGVybW9ua2V5LXNjcmlwdC11dGlscy8uL3V0aWxzL3NyYy9Db21tb25PcHRpb25zLnRzIiwid2VicGFjazovL3RhbXBlcm1vbmtleS1zY3JpcHQtdXRpbHMvLi92MmV4LXJlcGxpZXMtcHJvL3NyYy9PcHRpb25zLnRzIiwid2VicGFjazovL3RhbXBlcm1vbmtleS1zY3JpcHQtdXRpbHMvLi91dGlscy9zcmMvZ20vZW51bS9IdHRwRGF0YVR5cGUudHMiLCJ3ZWJwYWNrOi8vdGFtcGVybW9ua2V5LXNjcmlwdC11dGlscy8uL3V0aWxzL3NyYy9nbS9SZXF1ZXN0LnRzIiwid2VicGFjazovL3RhbXBlcm1vbmtleS1zY3JpcHQtdXRpbHMvLi91dGlscy9zcmMvZ20vSW5mby50cyIsIndlYnBhY2s6Ly90YW1wZXJtb25rZXktc2NyaXB0LXV0aWxzLy4vdjJleC1yZXBsaWVzLXByby9zcmMvYXBpL1YyZXgudHMiLCJ3ZWJwYWNrOi8vdGFtcGVybW9ua2V5LXNjcmlwdC11dGlscy8uL3YyZXgtcmVwbGllcy1wcm8vc3JjL1JlcGxheS50cyIsIndlYnBhY2s6Ly90YW1wZXJtb25rZXktc2NyaXB0LXV0aWxzLy4vdjJleC1yZXBsaWVzLXByby9zcmMvbWFpbi50cyIsIndlYnBhY2s6Ly90YW1wZXJtb25rZXktc2NyaXB0LXV0aWxzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RhbXBlcm1vbmtleS1zY3JpcHQtdXRpbHMvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RhbXBlcm1vbmtleS1zY3JpcHQtdXRpbHMvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90YW1wZXJtb25rZXktc2NyaXB0LXV0aWxzL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vdGFtcGVybW9ua2V5LXNjcmlwdC11dGlscy93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vdGFtcGVybW9ua2V5LXNjcmlwdC11dGlscy93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIOWtmOWCqFxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RvcmUge1xyXG5cclxuICAvKipcclxuICAgKiDojrflj5ZcclxuICAgKiBAcGFyYW0ga2V5IOmUrlxyXG4gICAqL1xyXG4gIHN0YXRpYyBnZXQoa2V5OiBzdHJpbmcpOiBhbnkge1xyXG4gICAgcmV0dXJuIEdNX2dldFZhbHVlKGtleSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDorr7nva5cclxuICAgKiBAcGFyYW0ga2V5IOmUrlxyXG4gICAqIEBwYXJhbSB2YWx1ZSDlgLxcclxuICAgKi9cclxuICBzdGF0aWMgc2V0KGtleTogc3RyaW5nLCB2YWx1ZTogYW55KSB7XHJcbiAgICBHTV9zZXRWYWx1ZShrZXksIHZhbHVlKTtcclxuICB9XHJcbn1cclxuIiwiLyoqXHJcbiAqIOmAiemhueiPnOWNlVxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWVudUNtZCB7XHJcblxyXG4gIC8qKlxyXG4gICAqIOazqOWGjFxyXG4gICAqIEBwYXJhbSBuYW1lIOWQjeensFxyXG4gICAqIEBwYXJhbSBmbiDngrnlh7voj5zljZXml7bmiafooYznmoTlh73mlbBcclxuICAgKi9cclxuICBzdGF0aWMgcmVnaXN0ZXIobmFtZTogc3RyaW5nLCBmbjogKCkgPT4gdm9pZCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gR01fcmVnaXN0ZXJNZW51Q29tbWFuZChuYW1lLCBmbik7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDms6jplIBcclxuICAgKiBAcGFyYW0gbWVudUNtZElkIOazqOWGjOaXtui/lOWbnueahCBJRFxyXG4gICAqL1xyXG4gIHN0YXRpYyB1bnJlZ2lzdGVyKG1lbnVDbWRJZDogbnVtYmVyKSB7XHJcbiAgICBHTV91bnJlZ2lzdGVyTWVudUNvbW1hbmQobWVudUNtZElkKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IFN0b3JlIGZyb20gXCJAdXRpbHMvZ20vU3RvcmVcIjtcclxuaW1wb3J0IE1lbnVDbWQgZnJvbSBcIkB1dGlscy9nbS9NZW51Q21kXCI7XHJcblxyXG4vKipcclxuICog6YCJ6aG56I+c5Y2VXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb21tb25PcHRpb25zIHtcclxuXHJcbiAgLy8gLyoqXHJcbiAgLy8gICog6YCJ6aG5IEtleVxyXG4gIC8vICAqL1xyXG4gIC8vIHByb3RlY3RlZCBzdGF0aWMgS2V5cyA9IHtcclxuICAvLyAgIC8vIHh4eDogJ3h4eCdcclxuICAvLyB9XHJcbiAgLy9cclxuICAvLyAvKipcclxuICAvLyAgKiDpgInpoblcclxuICAvLyAgKiBAcHJpdmF0ZVxyXG4gIC8vICAqL1xyXG4gIC8vIHByb3RlY3RlZCBzdGF0aWMgb3B0aW9ucyA9IFtcclxuICAvLyAgIC8vIHtsYWJlbDogJycsIG5hbWU6IHRoaXMuS2V5cy54eHgsIHZlcnNpb246IDEsIHZhbHVlOiBmYWxzZSwgbWVudUNtZElkOiBudWxsfSxcclxuICAvLyBdO1xyXG5cclxuICAvKipcclxuICAgKiDms6jlhowgYm9vbCDnsbvlnovnmoTpgInpoblcclxuICAgKiBAcGFyYW0gb3B0aW9uIOmAiemhuVxyXG4gICAqL1xyXG4gIHN0YXRpYyByZWdpc3RlckJvb2xPcHRpb24ob3B0aW9uOiBhbnkpIHtcclxuICAgIGNvbnN0IHZhbCA9IG9wdGlvbi52YWx1ZSwgdmFsSXNCb29sID0gKHR5cGVvZiB2YWwgPT09ICdib29sZWFuJyk7XHJcblxyXG4gICAgaWYgKCF2YWxJc0Jvb2wpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgLy8g5rOo5YaM6YCJ6aG5XHJcbiAgICBjb25zdCBjdXJyZW50TWVudUNtZElkID0gTWVudUNtZC5yZWdpc3RlcigodmFsID8gJ+KYke+4jyAnIDogJ/CflLIgJykgKyBvcHRpb24ubGFiZWwsICgpID0+IHtcclxuICAgICAgLy8g54K55Ye75YC85Y+W5Y+NXHJcbiAgICAgIG9wdGlvbi52YWx1ZSA9ICFvcHRpb24udmFsdWU7XHJcbiAgICAgIFN0b3JlLnNldChvcHRpb24ubmFtZSwgSlNPTi5zdHJpbmdpZnkob3B0aW9uKSk7XHJcblxyXG4gICAgICAvLyDlj5bmtojms6jlhoxcclxuICAgICAgTWVudUNtZC51bnJlZ2lzdGVyKGN1cnJlbnRNZW51Q21kSWQpO1xyXG4gICAgICAvLyDph43mlrDms6jlhoxcclxuICAgICAgdGhpcy5yZWdpc3RlckJvb2xPcHRpb24ob3B0aW9uKTtcclxuICAgICAgLy8g5Yi35paw6aG16Z2iXHJcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIOS/neWtmOmAiemhuSBJRFxyXG4gICAgb3B0aW9uLm1lbnVDbWRJZCA9IGN1cnJlbnRNZW51Q21kSWQ7XHJcbiAgICBTdG9yZS5zZXQob3B0aW9uLm5hbWUsIEpTT04uc3RyaW5naWZ5KG9wdGlvbikpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICog5rOo5YaM5omA5pyJ6YCJ6aG5XHJcbiAgICogQHBhcmFtIHVybCDorr7nva7pobXpnaIgVVJMXHJcbiAgICogQHBhcmFtIG9wdGlvbnNcclxuICAgKi9cclxuICBzdGF0aWMgcmVnaXN0ZXJBbGwodXJsOiBzdHJpbmcsIG9wdGlvbnM6IGFueVtdKSB7XHJcbiAgICBNZW51Q21kLnJlZ2lzdGVyKCfmm7TlpJrorr7nva4nLCAoKSA9PiB7XHJcbiAgICAgIHdpbmRvdy5vcGVuKHVybCwgJ19ibGFuaycpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgZm9yIChjb25zdCBvcHRpb24gb2Ygb3B0aW9ucykge1xyXG4gICAgICAvLyBUT0RPIOOAkOiwg+ivleOAkeS4jeS/neeVmemAiemhueeahOWAvO+8jOavj+asoemDveS7jiBTdG9yZSDkuK3ojrflj5ZcclxuICAgICAgLy8gU3RvcmUuc2V0KG9wdGlvbi5uYW1lLCBudWxsKTtcclxuXHJcbiAgICAgIGxldCBzdG9yZU9wdGlvbiA9IFN0b3JlLmdldChvcHRpb24ubmFtZSkgPyBKU09OLnBhcnNlKFN0b3JlLmdldChvcHRpb24ubmFtZSkpIDogbnVsbDtcclxuICAgICAgLy8g5aaC5p6c6YCJ6aG55LiN5a2Y5ZyoIHx8IOeJiOacrOS4jeS4gOiHtCDml7bph43nva7pgInpoblcclxuICAgICAgaWYgKHN0b3JlT3B0aW9uID09PSBudWxsIHx8ICFzdG9yZU9wdGlvblsndmVyc2lvbiddIHx8IHN0b3JlT3B0aW9uWyd2ZXJzaW9uJ10gPCBvcHRpb24udmVyc2lvbikge1xyXG4gICAgICAgIFN0b3JlLnNldChvcHRpb24ubmFtZSwgSlNPTi5zdHJpbmdpZnkob3B0aW9uKSk7XHJcbiAgICAgICAgc3RvcmVPcHRpb24gPSBvcHRpb247XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5yZWdpc3RlckJvb2xPcHRpb24oc3RvcmVPcHRpb24pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICog5Zyo6aG16Z2i5Lit5Yqg6L296YCJ6aG5XHJcbiAgICovXHJcbiAgc3RhdGljIGxvYWRJbkdyZWFzeWZvcmsoc2NyaXB0SWQ6IG51bWJlciwgbG9hZE9wdGlvbkNvbnRlbnRGbjogRnVuY3Rpb24pIHtcclxuICAgIGlmIChsb2NhdGlvbi5ob3N0ICE9PSAnZ3JlYXN5Zm9yay5vcmcnIHx8IGxvY2F0aW9uLmhyZWYuaW5kZXhPZignL3NjcmlwdHMvJyArIHNjcmlwdElkKSA9PSAtMSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBjb25zdCBzZWxlY3RvciA9IHtcclxuICAgICAgc2NyaXB0TGlua3M6ICcjc2NyaXB0LWxpbmtzJyxcclxuICAgICAgc2NyaXB0T3B0aW9uczogJyNzY3JpcHQtb3B0aW9ucycsXHJcbiAgICAgIHNjcmlwdENvbnRlbnQ6ICcjc2NyaXB0LWNvbnRlbnQnLFxyXG4gICAgfVxyXG4gICAgY29uc3QgJGJvZHkgPSAkKGRvY3VtZW50LmJvZHkpLCAkc2NyaXB0TGlua3MgPSAkKHNlbGVjdG9yLnNjcmlwdExpbmtzKSwgJHNjcmlwdENvbnRlbnQgPSAkKHNlbGVjdG9yLnNjcmlwdENvbnRlbnQpO1xyXG5cclxuICAgIC8vIOa3u+WKoOiEmuacrOiuvue9rueahOmAiemhueWNoVxyXG4gICAgJHNjcmlwdExpbmtzLmNoaWxkcmVuKCdsaTplcSgwKScpLmFmdGVyKGA8bGk+PGEgaHJlZj1cImphdmFzY3JpcHQ6O1wiIGlkPVwic2NyaXB0LW9wdGlvbnNcIj7ohJrmnKzorr7nva48L2E+PC9saT5gKVxyXG4gICAgLy8g6ISa5pys6K6+572u6YCJ6aG554K55Ye75LqL5Lu2XHJcbiAgICAkYm9keS5vbignY2xpY2snLCBzZWxlY3Rvci5zY3JpcHRPcHRpb25zLCAoKSA9PiB7XHJcbiAgICAgIC8vIOenu+mZpOW3sumAieS4remAiemhueeahOagt+W8j1xyXG4gICAgICBjb25zdCAkY3VycmVudExpID0gJHNjcmlwdExpbmtzLmNoaWxkcmVuKCdsaS5jdXJyZW50Jyk7XHJcbiAgICAgICRjdXJyZW50TGkuaHRtbChgPGEgaHJlZj1cIiR7bG9jYXRpb24uaHJlZn1cIj4keyRjdXJyZW50TGkudGV4dCgpfTwvYT5gKTtcclxuICAgICAgJGN1cnJlbnRMaS5yZW1vdmVDbGFzcygnY3VycmVudCcpO1xyXG5cclxuICAgICAgLy8g5re75Yqg6YCJ5Lit6YCJ6aG555qE5qC35byPXHJcbiAgICAgIGNvbnN0ICRzY3JpcHRPcHRpb25zID0gJChzZWxlY3Rvci5zY3JpcHRPcHRpb25zKTtcclxuICAgICAgJHNjcmlwdE9wdGlvbnMucGFyZW50KCkuYWRkQ2xhc3MoJ2N1cnJlbnQnKTtcclxuXHJcbiAgICAgIGxvYWRPcHRpb25Db250ZW50Rm4oJHNjcmlwdENvbnRlbnQpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCBDb21tb25PcHRpb25zIGZyb20gXCJAdXRpbHMvQ29tbW9uT3B0aW9uc1wiO1xyXG5pbXBvcnQgU3RvcmUgZnJvbSBcIkB1dGlscy9nbS9TdG9yZVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgT3B0aW9ucyB7XHJcblxyXG4gIC8qKlxyXG4gICAqIOmAiemhuSBLZXlcclxuICAgKi9cclxuICBzdGF0aWMgS2V5cyA9IHtcclxuICAgIHYyZXhUb2tlbjogJ3YyZXhUb2tlbicsXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDpgInpoblcclxuICAgKiBAcHJpdmF0ZVxyXG4gICAqL1xyXG4gIHByb3RlY3RlZCBzdGF0aWMgb3B0aW9ucyA9IFtcclxuICAgIHtsYWJlbDogJ1YyRVggVG9rZW4nLCBuYW1lOiB0aGlzLktleXMudjJleFRva2VuLCB2ZXJzaW9uOiAxLCB2YWx1ZTogJycsIG1lbnVDbWRJZDogbnVsbH0sXHJcbiAgXTtcclxuXHJcbiAgLyoqXHJcbiAgICog5rOo5YaM5omA5pyJ6YCJ6aG5XHJcbiAgICovXHJcbiAgc3RhdGljIHJlZ2lzdGVyQWxsKCkge1xyXG4gICAgQ29tbW9uT3B0aW9ucy5yZWdpc3RlckFsbCgnaHR0cHM6Ly93d3cudjJleC5jb20vc2V0dGluZ3MnLCB0aGlzLm9wdGlvbnMpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICog5Zyo6aG16Z2i5Lit5Yqg6L296YCJ6aG5XHJcbiAgICovXHJcbiAgc3RhdGljIGxvYWRJblYyZXgoKSB7XHJcbiAgICBpZiAobG9jYXRpb24uaHJlZi5pbmRleE9mKCd2MmV4LmNvbS9zZXR0aW5ncycpID09IC0xKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGNvbnN0IHNlbGVjdG9yID0ge1xyXG4gICAgICAgIG1lbnVUYWI6ICdhLnRhYicsXHJcbiAgICAgICAgY3VycmVudE1lbnVUYWI6ICdhLnRhYl9jdXJyZW50JyxcclxuICAgICAgICBzY3JpcHRPcHRpb25zOiAnI3NjcmlwdC1vcHRpb25zJyxcclxuICAgICAgICBzY3JpcHRDb250ZW50OiAnI01haW4gLmJveCcsXHJcblxyXG4gICAgICAgIHYyZXhUb2tlbklucHV0OiAnaW5wdXRbbmFtZT1cInYyZXhUb2tlblwiXScsXHJcbiAgICAgICAgc2F2ZU9wdGlvbnNCdG46ICcjc2F2ZS1vcHRpb25zJyxcclxuICAgICAgfSxcclxuICAgICAgJGJvZHkgPSAkKGRvY3VtZW50LmJvZHkpLCAkbWVudVRhYiA9ICQoc2VsZWN0b3IubWVudVRhYik7XHJcblxyXG4gICAgLy8g5re75Yqg6ISa5pys6K6+572u55qE6YCJ6aG55Y2hXHJcbiAgICAkbWVudVRhYi5wYXJlbnQoKS5hcHBlbmQoYDxhIGlkPVwic2NyaXB0LW9wdGlvbnNcIiBjbGFzcz1cInRhYlwiIGhyZWY9XCJqYXZhc2NyaXB0OnZvaWQoMCk7XCI+6ISa5pys6K6+572uPC9hPmApO1xyXG4gICAgLy8g6ISa5pys6K6+572u6YCJ6aG554K55Ye75LqL5Lu2XHJcbiAgICAkYm9keS5vbignY2xpY2snLCBzZWxlY3Rvci5zY3JpcHRPcHRpb25zLCAoKSA9PiB7XHJcbiAgICAgIC8vIOenu+mZpOW3sumAieS4remAiemhueeahOagt+W8j1xyXG4gICAgICBjb25zdCAkY3VycmVudE1lbnVUYWIgPSAkKHNlbGVjdG9yLmN1cnJlbnRNZW51VGFiKTtcclxuICAgICAgJGN1cnJlbnRNZW51VGFiLnJlbW92ZUNsYXNzKCd0YWJfY3VycmVudCcpO1xyXG4gICAgICAkY3VycmVudE1lbnVUYWIuYWRkQ2xhc3MoJ3RhYicpO1xyXG5cclxuICAgICAgLy8g5re75Yqg6YCJ5Lit6YCJ6aG555qE5qC35byPXHJcbiAgICAgIGNvbnN0ICRzY3JpcHRPcHRpb25zID0gJChzZWxlY3Rvci5zY3JpcHRPcHRpb25zKTtcclxuICAgICAgJHNjcmlwdE9wdGlvbnMucmVtb3ZlQ2xhc3MoJ3RhYicpO1xyXG4gICAgICAkc2NyaXB0T3B0aW9ucy5hZGRDbGFzcygndGFiX2N1cnJlbnQnKTtcclxuXHJcbiAgICAgIC8vIOa3u+WKoOiEmuacrOiuvue9rueahOWGheWuuVxyXG4gICAgICAkKHNlbGVjdG9yLnNjcmlwdENvbnRlbnQgKyAnIGRpdjpndCgxKScpLnJlbW92ZSgpO1xyXG4gICAgICAkKHNlbGVjdG9yLnNjcmlwdENvbnRlbnQpLmFwcGVuZChgXHJcbiAgICAgICAgPGZvcm0+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5uZXJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRvcGljX2NvbnRlbnQgbWFya2Rvd25fYm9keVwiPlxyXG4gICAgICAgICAgICAgIDxwPuivt+WcqOi/meWhq+WGmeS9oOeahCA8YSBocmVmPVwiaHR0cHM6Ly93d3cudjJleC5jb20vc2V0dGluZ3MvdG9rZW5zXCIgdGFyZ2V0PVwiX2JsYW5rXCI+VjJFWCBUb2tlbjwvYT48L3A+ICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNlcDIwXCI+PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzb2NpYWwtc2V0dGluZ3MtZm9ybVwiPlxyXG4gICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlYyRVggVG9rZW48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiBjbGFzcz1cInNsXCIgbmFtZT1cInYyZXhUb2tlblwiIHZhbHVlPVwiJHtKU09OLnBhcnNlKFN0b3JlLmdldCh0aGlzLktleXMudjJleFRva2VuKSkudmFsdWV9XCI+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2VsbF9vcHNcIj5cclxuICAgICAgICAgICAgPGlucHV0IGlkPVwic2F2ZS1vcHRpb25zXCIgdHlwZT1cInN1Ym1pdFwiIGNsYXNzPVwic3VwZXIgbm9ybWFsIGJ1dHRvblwiIHZhbHVlPVwiU2F2ZVwiPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9mb3JtPlxyXG4gICAgICBgKTtcclxuXHJcbiAgICAgICRib2R5Lm9uKCdjbGljaycsIHNlbGVjdG9yLnNhdmVPcHRpb25zQnRuLCAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgdG9rZW4gPSAkKHNlbGVjdG9yLnYyZXhUb2tlbklucHV0KS52YWwoKTtcclxuICAgICAgICBTdG9yZS5zZXQodGhpcy5LZXlzLnYyZXhUb2tlbiwgSlNPTi5zdHJpbmdpZnkoey4uLkpTT04ucGFyc2UoU3RvcmUuZ2V0KHRoaXMuS2V5cy52MmV4VG9rZW4pKSwgLi4ue3ZhbHVlOiB0b2tlbn19KSk7XHJcbiAgICAgICAgbGF5ZXIubXNnKCfkv53lrZjmiJDlip8nKTtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiIsImV4cG9ydCBlbnVtIEh0dHBEYXRhVHlwZSB7XHJcbiAgSlNPTiA9IFwiSlNPTlwiXHJcbn1cclxuIiwiaW1wb3J0IHtIdHRwRGF0YVR5cGV9IGZyb20gXCIuL2VudW0vSHR0cERhdGFUeXBlXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZXF1ZXN0IHtcclxuXHJcbiAgc3RhdGljIGFzeW5jIGdldChvcHRpb246IHsgdXJsOiBzdHJpbmcsIGRhdGFUeXBlPzogSHR0cERhdGFUeXBlLCBzeW5jaHJvbm91cz86IGJvb2xlYW4sIGhlYWRlcnM/OiB7fSwgb25sb2FkPzogRnVuY3Rpb24gfSk6IFByb21pc2U8YW55PiB7XHJcbiAgICBvcHRpb25bJ21ldGhvZCddID0gJ0dFVCc7XHJcblxyXG4gICAgLy8g5ZCM5q2l5pe26L+U5ZueIFByb21pc2VcclxuICAgIGlmIChvcHRpb24uc3luY2hyb25vdXMpIHtcclxuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICBHTV94bWxodHRwUmVxdWVzdCh7XHJcbiAgICAgICAgICAuLi5vcHRpb24sXHJcbiAgICAgICAgICBvbmxvYWQ6IChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICByZXNvbHZlKG9wdGlvbi5kYXRhVHlwZSA9PT0gSHR0cERhdGFUeXBlLkpTT04gPyBKU09OLnBhcnNlKHJlc3BvbnNlLnJlc3BvbnNlVGV4dCkgOiByZXNwb25zZS5yZXNwb25zZVRleHQpO1xyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIG9uZXJyb3I6IChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICByZWplY3QoZXJyb3IpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc3Qgb25sb2FkMSA9IGZ1bmN0aW9uIChkZXRhaWxzKSB7XHJcbiAgICAgICAgbGV0IHJlc3BvbnNlO1xyXG4gICAgICAgIGlmIChvcHRpb24uZGF0YVR5cGUgPT09IEh0dHBEYXRhVHlwZS5KU09OKSB7XHJcbiAgICAgICAgICByZXNwb25zZSA9IEpTT04ucGFyc2UoZGV0YWlscy5yZXNwb25zZVRleHQpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICByZXNwb25zZSA9IGRldGFpbHMucmVzcG9uc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG9wdGlvbi5vbmxvYWQocmVzcG9uc2UpO1xyXG4gICAgICB9XHJcbiAgICAgIEdNX3htbGh0dHBSZXF1ZXN0KHsuLi5vcHRpb24sIG9ubG9hZDogb25sb2FkMX0pO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCIvKipcclxuICog6I635Y+W6ISa5pys5L+h5oGvXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmZvIHtcclxuXHJcbiAgc3RhdGljIGdldCgpIHtcclxuICAgIHJldHVybiBHTV9pbmZvLnNjcmlwdDtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBnZXROYW1lKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuZ2V0KCkubmFtZTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBnZXRWZXJzaW9uKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuZ2V0KCkudmVyc2lvbjtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IFJlcXVlc3QgZnJvbSBcIkB1dGlscy9nbS9SZXF1ZXN0XCI7XHJcbmltcG9ydCB7SHR0cERhdGFUeXBlfSBmcm9tIFwiQHV0aWxzL2dtL2VudW0vSHR0cERhdGFUeXBlXCI7XHJcbmltcG9ydCBJbmZvIGZyb20gXCJAdXRpbHMvZ20vSW5mb1wiO1xyXG5pbXBvcnQgU3RvcmUgZnJvbSBcIkB1dGlscy9nbS9TdG9yZVwiO1xyXG5pbXBvcnQgT3B0aW9ucyBmcm9tIFwiLi4vT3B0aW9uc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVjJleCB7XHJcblxyXG4gIHN0YXRpYyBCQVNFX1VSTCA9ICdodHRwczovL3d3dy52MmV4LmNvbS9hcGkvdjIvJztcclxuXHJcbiAgLyoqXHJcbiAgICog5qOA5p+lIFRva2VuIOaYr+WQpuacieaViFxyXG4gICAqL1xyXG4gIHB1YmxpYyBzdGF0aWMgYXN5bmMgY2hlY2tUb2tlbigpIHtcclxuICAgIGNvbnN0IHRva2VuID0gSlNPTi5wYXJzZShTdG9yZS5nZXQoT3B0aW9ucy5LZXlzLnYyZXhUb2tlbikpLnZhbHVlO1xyXG4gICAgaWYgKCF0b2tlbiAmJiBsb2NhdGlvbi5ocmVmLmluZGV4T2YoJ3YyZXguY29tL3NldHRpbmdzJykgPT0gLTEpIHtcclxuICAgICAgbGF5ZXIubXNnKCfor7flhYjlnKjigJzohJrmnKzorr7nva7igJ3kuK3loavlhpkgVG9rZW7vvIEnLCB7aWNvbjogNCwgb2Zmc2V0OiAncmInfSwgKCkgPT4ge1xyXG4gICAgICAgIHdpbmRvdy5vcGVuKCdodHRwczovL3d3dy52MmV4LmNvbS9zZXR0aW5ncycsICdfYmxhbmsnKTtcclxuICAgICAgfSk7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IFJlcXVlc3QuZ2V0KHtcclxuICAgICAgdXJsOiB0aGlzLkJBU0VfVVJMICsgJ3Rva2VuJyxcclxuICAgICAgZGF0YVR5cGU6IEh0dHBEYXRhVHlwZS5KU09OLFxyXG4gICAgICBzeW5jaHJvbm91czogdHJ1ZSxcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICdBdXRob3JpemF0aW9uJzogJ0JlYXJlciAnICsgdG9rZW5cclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKCFyZXN1bHRbJ3N1Y2Nlc3MnXSkge1xyXG4gICAgICBsYXllci5tc2coSW5mby5nZXROYW1lKCkgKyBcIu+8mlwiICsgcmVzdWx0WydtZXNzYWdlJ10sIHtpY29uOiAyLCBvZmZzZXQ6ICdyYicsIHRpbWU6IDUwMDB9KTtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDojrflj5bkuLvpopjlm57lpI1cclxuICAgKiBAcGFyYW0gdG9waWNJZCDkuLvpopggSURcclxuICAgKiBAcGFyYW0gcGFnZSDpobXnoIFcclxuICAgKi9cclxuICBwdWJsaWMgc3RhdGljIGFzeW5jIGdldFJlcGxpZXModG9waWNJZDogbnVtYmVyLCBwYWdlPzogbnVtYmVyKTogUHJvbWlzZTx7IGh0bWw6IHN0cmluZzsgaWQ6IG51bWJlciwgY3JlYXRlZDogbnVtYmVyLCBjb250ZW50OiBzdHJpbmcsIGNvbnRlbnRfcmVuZGVyZWQ6IHN0cmluZywgbWVtYmVyOiB7IGlkOiBudW1iZXIsIHVzZXJuYW1lOiBzdHJpbmcsIGNyZWF0ZWQ6IG51bWJlciwgdXJsOiBzdHJpbmcsIGF2YXRhcjogc3RyaW5nLCBiaW86IHN0cmluZywgZ2l0aHViOiBzdHJpbmcsIHdlYnNpdGU6IHN0cmluZyB9IH1bXT4ge1xyXG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgUmVxdWVzdC5nZXQoe1xyXG4gICAgICB1cmw6IHRoaXMuQkFTRV9VUkwgKyAndG9waWNzLycgKyB0b3BpY0lkICsgJy9yZXBsaWVzJyArIChwYWdlID8gJz9wPScgKyBwYWdlIDogJycpLFxyXG4gICAgICBkYXRhVHlwZTogSHR0cERhdGFUeXBlLkpTT04sXHJcbiAgICAgIHN5bmNocm9ub3VzOiB0cnVlLFxyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgJ0F1dGhvcml6YXRpb24nOiAnQmVhcmVyICcgKyBKU09OLnBhcnNlKFN0b3JlLmdldChPcHRpb25zLktleXMudjJleFRva2VuKSkudmFsdWVcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKCFyZXN1bHRbJ3N1Y2Nlc3MnXSkge1xyXG4gICAgICBjb25zb2xlLndhcm4oSW5mby5nZXROYW1lKCkgKyBcIu+8mlwiICsgcmVzdWx0WydtZXNzYWdlJ10pO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmVzdWx0WydyZXN1bHQnXTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IFYyZXggZnJvbSBcIi4vYXBpL1YyZXhcIjtcclxuaW1wb3J0IEluZm8gZnJvbSBcIkB1dGlscy9nbS9JbmZvXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZXBsYXkge1xyXG5cclxuICBwcml2YXRlIHN0YXRpYyB3aW5ib3g6IGFueTtcclxuXHJcbiAgc3RhdGljIGFzeW5jIHJ1bigpIHtcclxuICAgIGlmIChsb2NhdGlvbi5ocmVmLmluZGV4T2YoJ3YyZXguY29tL3QvJykgPT09IC0xKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICAvLyDmo4Dmn6UgVG9rZW5cclxuICAgIGlmICghYXdhaXQgVjJleC5jaGVja1Rva2VuKCkpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0XHJcbiAgICAgIHNlbGVjdG9yID0ge1xyXG4gICAgICAgIC8vIOWbnuWkjeWIl+ihqFxyXG4gICAgICAgIHJlcGxpZXNCb3g6ICcjTWFpbiAuYm94OmVxKDEpJyxcclxuICAgICAgICAvLyDmiYDmnInlm57lpI1cclxuICAgICAgICBhbGxSZXBsaWVzOiAnI01haW4gLmJveDplcSgxKSAuY2VsbDpub3QoOmVxKDApKScsXHJcbiAgICAgICAgLy8g5Zue5aSN5pWwXHJcbiAgICAgICAgcmVwbGllc051bWJlcjogJyNNYWluIC5ib3g6ZXEoMSkgLmdyYXknLFxyXG4gICAgICAgIC8vIE9QIOWQjVxyXG4gICAgICAgIG9wVXNlck5hbWU6ICcuaGVhZGVyIC5ncmF5IGE6ZXEoMCknLFxyXG4gICAgICAgIC8vIEAg6ZO+5o6lXHJcbiAgICAgICAgYXRMaW5rOiAnLmF0LWxpbmsnLFxyXG4gICAgICAgIC8vIOWPs+S+p+WGheWuuVxyXG4gICAgICAgIHRhU2F5OiAnLnRhLXNheScsXHJcbiAgICAgIH0sXHJcbiAgICAgICRib2R5ID0gJChkb2N1bWVudC5ib2R5KSwgJGhlYWQgPSAkKGRvY3VtZW50LmhlYWQpLFxyXG4gICAgICAkYWxsUmVwbGllcyA9ICQoc2VsZWN0b3IuYWxsUmVwbGllcyksXHJcbiAgICAgICRyZXBsaWVzTnVtYmVyID0gJChzZWxlY3Rvci5yZXBsaWVzTnVtYmVyKSxcclxuICAgICAgJG9wVXNlck5hbWUgPSAkKHNlbGVjdG9yLm9wVXNlck5hbWUpO1xyXG5cclxuICAgIC8vIOa3u+WKoOW8ueeql+agt+W8j1xyXG4gICAgJGhlYWQuYXBwZW5kKGA8c3R5bGU+XHJcbiAgICAgIC53aW5ib3gke3NlbGVjdG9yLnRhU2F5fSB7XHJcbiAgICAgICAgYm9yZGVyLXNoYWRvdzogMCAxNHB4IDEycHggcmdiKDAgMCAwIC8gMjUlKSwgMCAxMHB4IDEwcHggcmdiKDAgMCAwIC8gMjIlKSAhaW1wb3J0YW50O1xyXG4gICAgICB9XHJcbiAgICAgIC53aW5ib3gke3NlbGVjdG9yLnRhU2F5fSAud2ItZHJhZyB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2UyZTJlMjtcclxuICAgICAgICBjb2xvcjogIzY2NjtcclxuICAgICAgfVxyXG4gICAgPC9zdHlsZT5gKTtcclxuXHJcbiAgICAvLyDpmpDol4/ljp/lm57lpI1cclxuICAgICRhbGxSZXBsaWVzLmhpZGUoKTtcclxuICAgIC8vIOiOt+WPluWbnuWkjeaVsFxyXG4gICAgY29uc3QgcmVwbGllc051bWJlciA9ICRyZXBsaWVzTnVtYmVyLnRleHQoKS5zdWJzdHJpbmcoMCwgJHJlcGxpZXNOdW1iZXIudGV4dCgpLmluZGV4T2YoJ+adoScpKTtcclxuICAgIC8vIOiOt+WPliBPUCDlkI1cclxuICAgIGNvbnN0IG9wVXNlck5hbWUgPSAkb3BVc2VyTmFtZS50ZXh0KCk7XHJcbiAgICAvLyDojrflj5bmiYDmnInlm57lpI1cclxuICAgIGNvbnN0IHJlcGxpZXMgPSBbXTtcclxuICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IE1hdGguY2VpbChOdW1iZXIocmVwbGllc051bWJlcikgLyAyMCk7IGkrKykge1xyXG4gICAgICByZXBsaWVzLnB1c2goLi4uYXdhaXQgVjJleC5nZXRSZXBsaWVzKHRvcGljSWQsIGkpKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyDmuIXnqbrmlbDmja7lupNcclxuICAgIGNvbnN0IGRiID0gb3BlbkRhdGFiYXNlKCd2MmV4LXJlcGxpZXMtcHJvJywgJzAuMC4xJywgSW5mby5nZXROYW1lKCksIDEwICogMTAyNCAqIDEwMjQpO1xyXG4gICAgZGIudHJhbnNhY3Rpb24odHggPT4ge1xyXG4gICAgICB0eC5leGVjdXRlU3FsKGBkcm9wIHRhYmxlIGlmIGV4aXN0cyByZW5kZXJlZF9yZXBsaWVzYCk7XHJcbiAgICB9LCBlcnJvciA9PiB7XHJcbiAgICB9LCAoKSA9PiB7XHJcbiAgICAgIHN0YXJ0KCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBzdGFydCA9ICgpID0+IHtcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByZXBsaWVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgY29uc3RcclxuICAgICAgICAgIHJlcGx5ID0gcmVwbGllc1tpXSxcclxuICAgICAgICAgIHJlcGx5SWQgPSByZXBseS5pZCxcclxuICAgICAgICAgIGNyZWF0ZWQgPSByZXBseS5jcmVhdGVkLCBjcmVhdGVkMSA9IE51bWJlcihjcmVhdGVkICsgJzAwMCcpLCBjcmVhdGVkRm9ybWF0ID0gbW9tZW50KGNyZWF0ZWQxKS5mb3JtYXQoJ1lZWVktTU0tREQgSEg6bW06c3MnKSwgY3JlYXRlZEFnbyA9IG1vbWVudChjcmVhdGVkMSkuZnJvbU5vdygpLFxyXG4gICAgICAgICAgbWVtYmVyID0gcmVwbHkubWVtYmVyLFxyXG4gICAgICAgICAgdXNlcm5hbWUgPSBtZW1iZXIudXNlcm5hbWUsXHJcbiAgICAgICAgICBhdmF0YXIgPSBtZW1iZXIuYXZhdGFyLFxyXG5cclxuICAgICAgICAgIHJlcGx5RGl2SWQgPSAncl8nICsgcmVwbHlJZCwgJHJlcGx5RGl2SWQgPSAkKCcjJyArIHJlcGx5RGl2SWQpLFxyXG4gICAgICAgICAgLy8g54K56LWe5pWwXHJcbiAgICAgICAgICAkZmFkZSA9ICRyZXBseURpdklkLmZpbmQoJy5mYWRlJyksIGZhZGVIdG1sID0gJGZhZGUubGVuZ3RoID09PSAwID8gJycgOiAkZmFkZS5wcm9wKCdvdXRlckhUTUwnKTtcclxuXHJcbiAgICAgICAgLy8g5Yig6Zmk5Y6f5Zue5aSNXHJcbiAgICAgICAgJHJlcGx5RGl2SWQucmVtb3ZlKCk7XHJcblxyXG4gICAgICAgIGxldCBjb250ZW50UmVuZGVyZWQgPSByZXBseS5jb250ZW50X3JlbmRlcmVkLCBhdFNlYXJjaFN0YXJ0SW5kZXggPSAwO1xyXG4gICAgICAgIC8vIOWPr+iDveS8miBAIOWkmuS4quS6ulxyXG4gICAgICAgIGNvbnN0IGF0U2VhcmNoU3RyID0gJ0A8YSBocmVmPVxcXCIvbWVtYmVyLyc7XHJcbiAgICAgICAgd2hpbGUgKHRydWUpIHtcclxuICAgICAgICAgIGxldCBhdExpbmtJbmRleCA9IGNvbnRlbnRSZW5kZXJlZC5pbmRleE9mKGF0U2VhcmNoU3RyLCBhdFNlYXJjaFN0YXJ0SW5kZXgpO1xyXG4gICAgICAgICAgaWYgKGF0TGlua0luZGV4ID09PSAtMSkge1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC8vIOiOt+WPliBAIOeahOeUqOaIt+WQjVxyXG4gICAgICAgICAgbGV0IGF0VXNlcm5hbWUgPSBjb250ZW50UmVuZGVyZWQuc3Vic3RyaW5nKGF0TGlua0luZGV4ICsgYXRTZWFyY2hTdHIubGVuZ3RoLCBjb250ZW50UmVuZGVyZWQuaW5kZXhPZignXCI+JywgYXRMaW5rSW5kZXgpKTtcclxuICAgICAgICAgIC8vIOWbnuWkjeWGheWuue+8jOWFtuS4rSBAIOmTvuaOpea3u+WKoOS6hiBjbGFzcyDlkowgQCDnmoTnlKjmiLflkI3kvKDpgJJcclxuICAgICAgICAgIGNvbnN0IHJlcGxhY2VTdHIgPSBgQDxhIGNsYXNzPVwiJHtzZWxlY3Rvci5hdExpbmsuc3Vic3RyaW5nKDEpfVwiIGRhdGEtcmVwbHktZGl2LWlkPVwiJHtyZXBseURpdklkfVwiIGRhdGEtdXNlcm5hbWU9XCIke2F0VXNlcm5hbWV9XCIgZGF0YS1jcmVhdGVkPVwiJHtjcmVhdGVkfVwiIG9uY2xpY2s9XCJyZXR1cm4gZmFsc2U7XCIgaHJlZj1cIi9tZW1iZXIvJHthdFVzZXJuYW1lfWA7XHJcbiAgICAgICAgICBjb250ZW50UmVuZGVyZWQgPSBjb250ZW50UmVuZGVyZWQucmVwbGFjZUFsbChgQDxhIGhyZWY9XCIvbWVtYmVyLyR7YXRVc2VybmFtZX1gLCByZXBsYWNlU3RyKTtcclxuICAgICAgICAgIGF0U2VhcmNoU3RhcnRJbmRleCA9IGF0TGlua0luZGV4ICsgcmVwbGFjZVN0ci5sZW5ndGg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBodG1sID0gYFxyXG4gICAgICAgICAgPCEtLSDmraTlpITnmoQgc3R5bGUg5Li65qih5Lu/IC5jZWxsIOagt+W8jyAtLT5cclxuICAgICAgICAgIDxkaXYgaWQ9XCIke3JlcGx5RGl2SWR9XCIgc3R5bGU9XCJmb250LXNpemU6IDE0cHg7IGxpbmUtaGVpZ2h0OiAxNTAlOyBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2UyZTJlMlwiPlxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPVwiZGlzcGxheTogZmxleDtcIj5cclxuICAgICAgICAgICAgICA8ZGl2IHN0eWxlPVwiZGlzcGxheTogZmxleDsgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgYWxpZ24taXRlbXM6IGNlbnRlcjsgYmFja2dyb3VuZC1jb2xvcjogI2ZhZmJmYzsgcGFkZGluZzogMTJweCAwIDEwcHggMFwiPlxyXG4gICAgICAgICAgICAgICAgJHt1c2VybmFtZSA9PT0gb3BVc2VyTmFtZSA/IGBcclxuICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT1cImhlaWdodDogMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9XCJwb3NpdGlvbjogcmVsYXRpdmU7IGxlZnQ6IDQ0cHg7IHRvcDogLTEycHg7IGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgyMjVkZWcsICM1NThiZjYgMjNweCwgI2ZhZmJmYyAwKTsgd2lkdGg6IDMycHg7IGhlaWdodDogMzJweDtcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJiYWRnZXNcIiBzdHlsZT1cImNvbG9yOiB3aGl0ZTsgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpOyBwb3NpdGlvbjogcmVsYXRpdmU7IHRvcDogLTFweDsgcmlnaHQ6IC01cHhcIj5PUDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIGAgOiAnJ31cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiJHthdmF0YXJ9XCIgY2xhc3M9XCJhdmF0YXJcIiBhbHQ9XCIke3VzZXJuYW1lfVwiIHN0eWxlPVwid2lkdGg6IDQ4cHhcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9XCJ3aWR0aDogMTIwcHg7XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIvbWVtYmVyLyR7dXNlcm5hbWV9XCIgY2xhc3M9XCJkYXJrXCI+JHt1c2VybmFtZX08L2E+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IHN0eWxlPVwicGFkZGluZzogMTBweCAxMHB4IDEwcHggMTJweDsgd2lkdGg6IDEwMCVcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9XCJkaXNwbGF5OiBmbGV4OyBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW5cIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAmbmJzcDs8c3BhbiBjbGFzcz1cImFnb1wiIHRpdGxlPVwiJHtjcmVhdGVkRm9ybWF0fVwiPiR7Y3JlYXRlZEFnb308L3NwYW4+Jm5ic3A7JHtmYWRlSHRtbH1cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPCEtLSDmraTlpITkuLrljp/lhoXlrrnkv53mjIHkuI3lj5ggLS0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cInRoYW5rX2FyZWFfJHtyZXBseUlkfVwiIGNsYXNzPVwidGhhbmtfYXJlYVwiPjxhIGhyZWY9XCIjO1wiIG9uY2xpY2s9XCJpZiAoY29uZmlybSgn56Gu6K6k6KaB5LiN5YaN5pi+56S65p2l6IeqIEAke3VzZXJuYW1lfSDnmoTov5nmnaHlm57lpI3vvJ8nKSkgeyBpZ25vcmVSZXBseSgke3JlcGx5SWR9LCAke29uY2V9KTsgfVwiIGNsYXNzPVwidGhhbmtcIiBzdHlsZT1cImNvbG9yOiAjY2NjO1wiPumakOiXjzwvYT4gJm5ic3A7ICZuYnNwOyA8YSBocmVmPVwiIztcIiBvbmNsaWNrPVwiaWYgKGNvbmZpcm0oJ+ehruiupOiKsei0uSAxMCDkuKrpk5zluIHlkJEgQCR7dXNlcm5hbWV9IOeahOi/meadoeWbnuWkjeWPkemAgeaEn+iwou+8nycpKSB7IHRoYW5rUmVwbHkoJHtyZXBseUlkfSk7IH1cIiBjbGFzcz1cInRoYW5rXCI+5oSf6LCi5Zue5aSN6ICFPC9hPjwvZGl2PiAmbmJzcDsgPGEgaHJlZj1cIiM7XCIgb25jbGljaz1cInJlcGx5T25lKCcke3VzZXJuYW1lfScpO1wiPjxpbWcgc3JjPVwiL3N0YXRpYy9pbWcvcmVwbHlfbmV1ZS5wbmdcIiBhbGlnbj1cImFic21pZGRsZVwiIGJvcmRlcj1cIjBcIiBhbHQ9XCJSZXBseVwiIHdpZHRoPVwiMjBcIj48L2E+ICZuYnNwOyZuYnNwOyA8c3BhbiBjbGFzcz1cIm5vXCI+MTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9XCJ0ZXh0LWFsaWduOiBsZWZ0XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuPiR7Y29udGVudFJlbmRlcmVkfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIGA7XHJcblxyXG4gICAgICAgIC8vIOWwhuW3sua4suafk+eahOWbnuWkjeS/neWtmOWIsCBXZWIgU1FMIOS4rVxyXG4gICAgICAgIGRiLnRyYW5zYWN0aW9uKHR4ID0+IHtcclxuICAgICAgICAgIC8vIEBmb3JtYXR0ZXI6b2ZmXHJcbiAgICAgICAgICB0eC5leGVjdXRlU3FsKGBjcmVhdGUgdGFibGUgaWYgbm90IGV4aXN0cyByZW5kZXJlZF9yZXBsaWVzIChpZCB1bmlxdWUsIHVzZXJuYW1lLCBjcmVhdGVkLCBodG1sLCBjb250ZW50X3JlbmRlcmVkKWApO1xyXG4gICAgICAgICAgdHguZXhlY3V0ZVNxbChgaW5zZXJ0IG9yIHJlcGxhY2UgaW50byByZW5kZXJlZF9yZXBsaWVzIChpZCwgdXNlcm5hbWUsIGNyZWF0ZWQsIGh0bWwsIGNvbnRlbnRfcmVuZGVyZWQpIHZhbHVlcyAoPywgPywgPywgPywgPylgLCBbcmVwbHlJZCwgdXNlcm5hbWUsIGNyZWF0ZWQsIGh0bWwsIGNvbnRlbnRSZW5kZXJlZF0pO1xyXG4gICAgICAgICAgLy8gQGZvcm1hdHRlcjpvblxyXG4gICAgICAgIH0sIGVycm9yID0+IHtcclxuICAgICAgICB9LCAoKSA9PiB7XHJcbiAgICAgICAgICBpZiAoaSA9PT0gcmVwbGllcy5sZW5ndGggLSAxKSB7XHJcbiAgICAgICAgICAgIC8vIHVwZGF0ZVJlcGxpZXMoKTtcclxuICAgICAgICAgICAgc2hvd1JlcGxpZXMoKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5bGV56S65Zue5aSNXHJcbiAgICAgKi9cclxuICAgIGNvbnN0IHNob3dSZXBsaWVzID0gKCkgPT4ge1xyXG4gICAgICBkYi50cmFuc2FjdGlvbih0eCA9PiB7XHJcbiAgICAgICAgLy8gQGZvcm1hdHRlcjpvZmZcclxuICAgICAgICB0eC5leGVjdXRlU3FsKGBzZWxlY3QgKiBmcm9tIHJlbmRlcmVkX3JlcGxpZXMgb3JkZXIgYnkgY3JlYXRlZGAsIFtdLCAodHgsIHJlc3VsdHMpID0+IHtcclxuICAgICAgICAvLyBAZm9ybWF0dGVyOm9uXHJcbiAgICAgICAgICBmb3IgKGNvbnN0IHJvdyBvZiByZXN1bHRzLnJvd3MpIHtcclxuICAgICAgICAgICAgJChzZWxlY3Rvci5yZXBsaWVzQm94KS5hcHBlbmQocm93Lmh0bWwpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLy8g57uZIEAg6ZO+5o6l5re75Yqg54K55Ye75LqL5Lu2XHJcbiAgICAgICAgICAkYm9keS5vbignY2xpY2snLCBzZWxlY3Rvci5hdExpbmssIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgY29uc3QgJHRoaXMgPSAkKHRoaXMpO1xyXG4gICAgICAgICAgICBzaG93VGFTYXkoJHRoaXMuZGF0YSgncmVwbHlEaXZJZCcpLCAkdGhpcy5kYXRhKCd1c2VybmFtZScpLCAkdGhpcy5kYXRhKCdjcmVhdGVkJykpO1xyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDlsZXnpLogVEEg6K+05LqG5LuA5LmIXHJcbiAgICAgKiBAcGFyYW0gcmVwbHlEaXZJZCDlm57lpI3nmoQgZGl2IGlkXHJcbiAgICAgKiBAcGFyYW0gdXNlcm5hbWUg55So5oi35ZCNXHJcbiAgICAgKiBAcGFyYW0gY3JlYXRlZCDliJvlu7rml7bpl7RcclxuICAgICAqL1xyXG4gICAgY29uc3Qgc2hvd1RhU2F5ID0gKHJlcGx5RGl2SWQ6IHN0cmluZywgdXNlcm5hbWU6IHN0cmluZywgY3JlYXRlZDogbnVtYmVyKSA9PiB7XHJcbiAgICAgIC8vIOWFs+mXreW8ueeql1xyXG4gICAgICBpZiAoUmVwbGF5LndpbmJveCkge1xyXG4gICAgICAgIFJlcGxheS53aW5ib3guY2xvc2UoKTtcclxuICAgICAgfVxyXG4gICAgICBjb25zb2xlLmxvZyhyZXBseURpdklkKVxyXG5cclxuICAgICAgLy8g6auY5Lqu54K55Ye7IEAg6ZO+5o6l55qE6YKj5p2h5Zue5aSNXHJcbiAgICAgIGNvbnN0ICRyZXBseSA9ICQoJyMnICsgcmVwbHlEaXZJZCk7XHJcbiAgICAgICRyZXBseS5jc3MoJ2JvcmRlcicsICcycHggc29saWQnKTtcclxuICAgICAgLy8g6Lez6L2s5Yiw6auY5Lqu5Zue5aSNXHJcbiAgICAgICQoJ2h0bWwsYm9keScpLmFuaW1hdGUoe3Njcm9sbFRvcDogJHJlcGx5Lm9mZnNldCgpLnRvcCAtICQod2luZG93KS5oZWlnaHQoKSAvIDJ9LCA1MDApO1xyXG5cclxuICAgICAgZGIudHJhbnNhY3Rpb24odHggPT4ge1xyXG4gICAgICAgIC8vIEBmb3JtYXR0ZXI6b2ZmXHJcbiAgICAgICAgdHguZXhlY3V0ZVNxbChgc2VsZWN0ICogZnJvbSByZW5kZXJlZF9yZXBsaWVzIHdoZXJlIHVzZXJuYW1lID0gPyBvcmRlciBieSBjcmVhdGVkYCwgW3VzZXJuYW1lXSwodHgsIHJlc3VsdHMpID0+IHtcclxuICAgICAgICAvLyBAZm9ybWF0dGVyOm9uXHJcbiAgICAgICAgICBsZXQgaHRtbCA9ICcnLCBpc0dlQnlQcmV2ID0gdHJ1ZSwgaXNIaWdobGlnaHRlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByZXN1bHRzLnJvd3MubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgY29uc3Qgcm93ID0gcmVzdWx0cy5yb3dzW2ldO1xyXG5cclxuICAgICAgICAgICAgbGV0IGJvcmRlclN0eWxlID0gJ2JvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTJlMmUyOyc7XHJcbiAgICAgICAgICAgIC8vIOWcqOeCueWHu+WbnuWkjeaJgOWcqOS9jee9rumrmOS6rlxyXG4gICAgICAgICAgICBpZiAoIShjcmVhdGVkID4gcm93LmNyZWF0ZWQpICYmIGlzR2VCeVByZXYpIHtcclxuICAgICAgICAgICAgICBib3JkZXJTdHlsZSArPSAnYm9yZGVyLXRvcDogMnB4IHNvbGlkJztcclxuICAgICAgICAgICAgICBpc0hpZ2hsaWdodGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChpID09PSByZXN1bHRzLnJvd3MubGVuZ3RoIC0gMSAmJiAhaXNIaWdobGlnaHRlZCkge1xyXG4gICAgICAgICAgICAgIGJvcmRlclN0eWxlID0gJ2JvcmRlci1ib3R0b206IDJweCBzb2xpZCc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaHRtbCArPSBgXHJcbiAgICAgICAgICAgICAgPGRpdiBzdHlsZT1cIiR7Ym9yZGVyU3R5bGV9XCI+XHJcbiAgICAgICAgICAgICAgICAkeyQocm93Lmh0bWwpLmZpbmQoJy5hZ28nKS5wYXJlbnQoKS5wcm9wKCdvdXRlckhUTUwnKX1cclxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9XCJwYWRkaW5nLWJvdHRvbTogNXB4XCI+JHtyb3cuY29udGVudF9yZW5kZXJlZH08L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgYDtcclxuICAgICAgICAgICAgLy8g5b2T5YmN5p2h5piv5ZCm5Li65LmL5YmN55qE5Zue5aSN77yM55So5LqO5LiL5LiA5p2h5Yik5pat5piv5ZCm6ZyA6KaB6auY5LquXHJcbiAgICAgICAgICAgIGlzR2VCeVByZXYgPSBjcmVhdGVkID4gcm93LmNyZWF0ZWQ7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgUmVwbGF5LndpbmJveCA9IG5ldyBXaW5Cb3goe1xyXG4gICAgICAgICAgICBjbGFzczogc2VsZWN0b3IudGFTYXkuc3Vic3RyaW5nKDEpLFxyXG4gICAgICAgICAgICB0aXRsZTogdXNlcm5hbWUgKyAnIOivtOS6huS7gOS5iO+8nycsXHJcbiAgICAgICAgICAgIHg6IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0YV9zYXlfeCcpIHx8ICdyaWdodCcsXHJcbiAgICAgICAgICAgIHk6IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0YV9zYXlfeScpIHx8ICdib3R0b20nLFxyXG4gICAgICAgICAgICB3aWR0aDogbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RhX3NheV93aWR0aCcpIHx8ICc1NDBweCcsXHJcbiAgICAgICAgICAgIGhlaWdodDogbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RhX3NheV9oZWlnaHQnKSB8fCAnNzAlJyxcclxuICAgICAgICAgICAgaHRtbDogYDxkaXYgc3R5bGU9XCJwYWRkaW5nOiAxMHB4OyBmb250LXNpemU6IDE0cHhcIj4ke2h0bWx9PC9kaXY+YCxcclxuICAgICAgICAgICAgb25yZXNpemU6ICh3aWR0aCwgaGVpZ2h0KSA9PiB7XHJcbiAgICAgICAgICAgICAgLy8g5pS55Y+Y56qX5Y+j5aSn5bCP5pe26K6w5b2V56qX5Y+j5aSn5bCPXHJcbiAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RhX3NheV93aWR0aCcsIHdpZHRoICsgJ3B4Jyk7XHJcbiAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RhX3NheV9oZWlnaHQnLCBoZWlnaHQgKyAncHgnKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgb25tb3ZlOiAoeCwgeSkgPT4ge1xyXG4gICAgICAgICAgICAgIC8vIOenu+WKqOeql+WPo+aXtuiusOW9leeql+WPo+S9jee9rlxyXG4gICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0YV9zYXlfeCcsIHgpO1xyXG4gICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0YV9zYXlfeScsIHkpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBvbmNsb3NlOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgLy8g5YWz6Zet5by556qX5pe25Y+W5raI5Zue5aSN6auY5LquXHJcbiAgICAgICAgICAgICAgJHJlcGx5LmNzcygnYm9yZGVyJywgJ25vbmUnKTtcclxuICAgICAgICAgICAgICAkcmVwbHkuY3NzKCdib3JkZXItYm90dG9tJywgJzFweCBzb2xpZCAjZTJlMmUyJyk7XHJcbiAgICAgICAgICAgICAgUmVwbGF5LndpbmJveCA9IG51bGw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiLy8gPT1Vc2VyU2NyaXB0PT1cclxuLy8gQG5hbWUgICAgICAgICBWMkVYIOS4u+mimOWbnuWkjeWinuW8ulxyXG4vLyBAbmFtZXNwYWNlICAgIGh0dHA6Ly90YW1wZXJtb25rZXkubmV0L1xyXG4vLyBAdmVyc2lvbiAgICAgIDAuMC40XHJcbi8vIEBkZXNjcmlwdGlvbiAg5aKe5by6IFYyRVgg5Li76aKY55qE5Zue5aSN44CCXHJcbi8vIEBhdXRob3IgICAgICAgZHVhbmx1YW5cclxuLy8gQGNvcHlyaWdodCAgICAyMDIyLCBkdWFubHVhbiAoaHR0cHM6Ly9naXRodWIuY29tL2R1YW5sdWFuKVxyXG4vLyBAbGljZW5zZSAgICAgIEFwYWNoZS0yLjA7IGh0dHBzOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjAudHh0XHJcbi8vIEBtYXRjaCAgICAgICAgKjovLyoudjJleC5jb20vKlxyXG4vLyBAcmVxdWlyZSAgICAgIGh0dHBzOi8vY2RuLmJvb3RjZG4ubmV0L2FqYXgvbGlicy9qcXVlcnkvMy42LjAvanF1ZXJ5Lm1pbi5qc1xyXG4vLyBAcmVxdWlyZSAgICAgIGh0dHBzOi8vY2RuLmJvb3RjZG4ubmV0L2FqYXgvbGlicy9tb21lbnQuanMvMi4yOS40L21vbWVudC13aXRoLWxvY2FsZXMubWluLmpzXHJcbi8vIEByZXF1aXJlICAgICAgaHR0cHM6Ly9jZG4uYm9vdGNkbi5uZXQvYWpheC9saWJzL21vbWVudC5qcy8yLjI5LjQvbG9jYWxlL3poLWNuLm1pbi5qc1xyXG4vLyBAcmVxdWlyZSAgICAgIGh0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vd2luYm94QDAuMi42L2Rpc3Qvd2luYm94LmJ1bmRsZS5taW4uanNcclxuLy8gQHJlc291cmNlIGNzcyBodHRwczovL2Nkbi5ib290Y2RuLm5ldC9hamF4L2xpYnMvbGF5ZXIvMy41LjEvdGhlbWUvZGVmYXVsdC9sYXllci5taW4uY3NzXHJcbi8vIEByZXF1aXJlICAgICAgaHR0cHM6Ly9jZG4uYm9vdGNkbi5uZXQvYWpheC9saWJzL2xheWVyLzMuNS4xL2xheWVyLm1pbi5qc1xyXG4vLyBAZ3JhbnQgICAgICAgIEdNX3htbGh0dHBSZXF1ZXN0XHJcbi8vIEBncmFudCAgICAgICAgR01fZ2V0VmFsdWVcclxuLy8gQGdyYW50ICAgICAgICBHTV9zZXRWYWx1ZVxyXG4vLyBAZ3JhbnQgICAgICAgIEdNX3JlZ2lzdGVyTWVudUNvbW1hbmRcclxuLy8gQGdyYW50ICAgICAgICBHTV91bnJlZ2lzdGVyTWVudUNvbW1hbmRcclxuLy8gQGdyYW50ICAgICAgICBHTV9nZXRSZXNvdXJjZVRleHRcclxuLy8gQGdyYW50ICAgICAgICBHTV9hZGRTdHlsZVxyXG4vLyA9PS9Vc2VyU2NyaXB0PT1cclxuXHJcbi8vID09T3BlblVzZXJKUz09XHJcbi8vIEBhdXRob3IgZHVhbmx1YW5cclxuLy8gPT0vT3BlblVzZXJKUz09XHJcblxyXG5pbXBvcnQgUmVwbGF5IGZyb20gXCIuL1JlcGxheVwiO1xyXG5pbXBvcnQgT3B0aW9ucyBmcm9tIFwiLi9PcHRpb25zXCI7XHJcblxyXG4oYXN5bmMgKCkgPT4ge1xyXG4gICd1c2Ugc3RyaWN0JztcclxuXHJcbiAgLy8g5Yqg6L29IENTU1xyXG4gIEdNX2FkZFN0eWxlKEdNX2dldFJlc291cmNlVGV4dCgnY3NzJykpO1xyXG4gIC8vIOiuvue9riBsYXllciDlm77moIdcclxuICAkKGRvY3VtZW50LmhlYWQpLmFwcGVuZChgPHN0eWxlPlxyXG4gICAgLmxheXVpLWxheWVyLWljb3tiYWNrZ3JvdW5kOnVybCgnaHR0cHM6Ly9jZG4uYm9vdGNkbi5uZXQvYWpheC9saWJzL2xheWVyLzMuNS4xL3RoZW1lL2RlZmF1bHQvaWNvbi5wbmcnKSBuby1yZXBlYXR9XHJcbiAgICAvKiDljp/moLflvI/kuI3nn6XkuLrkvZXkvJrlpLHmlYjvvIzlr7zoh7QgaWNvbiDorr7nva7ml6DmlYggKi9cclxuICAgIC5sYXl1aS1sYXllci1pY28xe2JhY2tncm91bmQtcG9zaXRpb246LTMwcHggMH1cclxuICAgIC5sYXl1aS1sYXllci1pY28ye2JhY2tncm91bmQtcG9zaXRpb246LTYwcHggMH1cclxuICAgIC5sYXl1aS1sYXllci1pY28ze2JhY2tncm91bmQtcG9zaXRpb246LTkwcHggMH1cclxuICAgIC5sYXl1aS1sYXllci1pY280e2JhY2tncm91bmQtcG9zaXRpb246LTEyMHB4IDB9XHJcbiAgICAubGF5dWktbGF5ZXItaWNvNXtiYWNrZ3JvdW5kLXBvc2l0aW9uOi0xNTBweCAwfVxyXG4gICAgLmxheXVpLWxheWVyLWljbzZ7YmFja2dyb3VuZC1wb3NpdGlvbjotMTgwcHggMH1cclxuICA8L3N0eWxlPmApO1xyXG5cclxuICBPcHRpb25zLnJlZ2lzdGVyQWxsKCk7XHJcbiAgT3B0aW9ucy5sb2FkSW5WMmV4KCk7XHJcblxyXG4gIFJlcGxheS5ydW4oKTtcclxufSkoKTtcclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18oNjQ5KTtcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG5fX3dlYnBhY2tfcmVxdWlyZV9fKDkyMyk7XG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oNDM5KTtcbiIsIiJdLCJuYW1lcyI6WyJTdG9yZSIsImtleSIsIkdNX2dldFZhbHVlIiwidmFsdWUiLCJHTV9zZXRWYWx1ZSIsIk1lbnVDbWQiLCJuYW1lIiwiZm4iLCJHTV9yZWdpc3Rlck1lbnVDb21tYW5kIiwibWVudUNtZElkIiwiR01fdW5yZWdpc3Rlck1lbnVDb21tYW5kIiwiQ29tbW9uT3B0aW9ucyIsIm9wdGlvbiIsInZhbCIsInZhbElzQm9vbCIsImN1cnJlbnRNZW51Q21kSWQiLCJyZWdpc3RlciIsImxhYmVsIiwic2V0IiwiSlNPTiIsInN0cmluZ2lmeSIsInVucmVnaXN0ZXIiLCJyZWdpc3RlckJvb2xPcHRpb24iLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInJlbG9hZCIsInVybCIsIm9wdGlvbnMiLCJvcGVuIiwic3RvcmVPcHRpb24iLCJnZXQiLCJwYXJzZSIsInZlcnNpb24iLCJzY3JpcHRJZCIsImxvYWRPcHRpb25Db250ZW50Rm4iLCJob3N0IiwiaHJlZiIsImluZGV4T2YiLCJzZWxlY3RvciIsInNjcmlwdExpbmtzIiwic2NyaXB0T3B0aW9ucyIsInNjcmlwdENvbnRlbnQiLCIkYm9keSIsIiQiLCJkb2N1bWVudCIsImJvZHkiLCIkc2NyaXB0TGlua3MiLCIkc2NyaXB0Q29udGVudCIsImNoaWxkcmVuIiwiYWZ0ZXIiLCJvbiIsIiRjdXJyZW50TGkiLCJodG1sIiwidGV4dCIsInJlbW92ZUNsYXNzIiwiJHNjcmlwdE9wdGlvbnMiLCJwYXJlbnQiLCJhZGRDbGFzcyIsIk9wdGlvbnMiLCJyZWdpc3RlckFsbCIsIm1lbnVUYWIiLCJjdXJyZW50TWVudVRhYiIsInYyZXhUb2tlbklucHV0Iiwic2F2ZU9wdGlvbnNCdG4iLCIkbWVudVRhYiIsImFwcGVuZCIsIiRjdXJyZW50TWVudVRhYiIsInJlbW92ZSIsIktleXMiLCJ2MmV4VG9rZW4iLCJ0b2tlbiIsImxheWVyIiwibXNnIiwiSHR0cERhdGFUeXBlIiwiUmVxdWVzdCIsInN5bmNocm9ub3VzIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJHTV94bWxodHRwUmVxdWVzdCIsIm9ubG9hZCIsInJlc3BvbnNlIiwiZGF0YVR5cGUiLCJyZXNwb25zZVRleHQiLCJvbmVycm9yIiwiZXJyb3IiLCJvbmxvYWQxIiwiZGV0YWlscyIsIkluZm8iLCJHTV9pbmZvIiwic2NyaXB0IiwiVjJleCIsImljb24iLCJvZmZzZXQiLCJCQVNFX1VSTCIsImhlYWRlcnMiLCJyZXN1bHQiLCJnZXROYW1lIiwidGltZSIsInRvcGljSWQiLCJwYWdlIiwiY29uc29sZSIsIndhcm4iLCJSZXBsYXkiLCJjaGVja1Rva2VuIiwicmVwbGllc0JveCIsImFsbFJlcGxpZXMiLCJyZXBsaWVzTnVtYmVyIiwib3BVc2VyTmFtZSIsImF0TGluayIsInRhU2F5IiwiJGhlYWQiLCJoZWFkIiwiJGFsbFJlcGxpZXMiLCIkcmVwbGllc051bWJlciIsIiRvcFVzZXJOYW1lIiwiaGlkZSIsInN1YnN0cmluZyIsInJlcGxpZXMiLCJpIiwiTWF0aCIsImNlaWwiLCJOdW1iZXIiLCJwdXNoIiwiZ2V0UmVwbGllcyIsImRiIiwib3BlbkRhdGFiYXNlIiwidHJhbnNhY3Rpb24iLCJ0eCIsImV4ZWN1dGVTcWwiLCJzdGFydCIsInJlcGx5IiwicmVwbHlJZCIsImlkIiwiY3JlYXRlZCIsImNyZWF0ZWQxIiwiY3JlYXRlZEZvcm1hdCIsIm1vbWVudCIsImZvcm1hdCIsImNyZWF0ZWRBZ28iLCJmcm9tTm93IiwibWVtYmVyIiwidXNlcm5hbWUiLCJhdmF0YXIiLCJyZXBseURpdklkIiwiJHJlcGx5RGl2SWQiLCIkZmFkZSIsImZpbmQiLCJmYWRlSHRtbCIsImxlbmd0aCIsInByb3AiLCJjb250ZW50UmVuZGVyZWQiLCJjb250ZW50X3JlbmRlcmVkIiwiYXRTZWFyY2hTdGFydEluZGV4IiwiYXRTZWFyY2hTdHIiLCJhdExpbmtJbmRleCIsImF0VXNlcm5hbWUiLCJyZXBsYWNlU3RyIiwicmVwbGFjZUFsbCIsIm9uY2UiLCJzaG93UmVwbGllcyIsInJlc3VsdHMiLCJyb3dzIiwicm93IiwiJHRoaXMiLCJzaG93VGFTYXkiLCJkYXRhIiwid2luYm94IiwiY2xvc2UiLCJsb2ciLCIkcmVwbHkiLCJjc3MiLCJhbmltYXRlIiwic2Nyb2xsVG9wIiwidG9wIiwiaGVpZ2h0IiwiaXNHZUJ5UHJldiIsImlzSGlnaGxpZ2h0ZWQiLCJib3JkZXJTdHlsZSIsIldpbkJveCIsInRpdGxlIiwieCIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJ5Iiwid2lkdGgiLCJvbnJlc2l6ZSIsInNldEl0ZW0iLCJvbm1vdmUiLCJvbmNsb3NlIiwiR01fYWRkU3R5bGUiLCJHTV9nZXRSZXNvdXJjZVRleHQiLCJsb2FkSW5WMmV4IiwicnVuIl0sInNvdXJjZVJvb3QiOiIifQ==