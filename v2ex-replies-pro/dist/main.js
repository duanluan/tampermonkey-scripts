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
        var _this = this;

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
                db = openDatabase('v2ex-replies-pro', Info.getVersion(), Info.getName(), 10 * 1024 * 1024);
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
                  if (_this.winbox) {
                    _this.winbox.close();
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

                      _this.winbox = new WinBox({
                        "class": selector.taSay.substring(1),
                        title: username + ' 说了什么？',
                        x: 'right',
                        y: 'bottom',
                        width: localStorage.getItem('ta_say_width') || '540px',
                        height: localStorage.getItem('ta_say_height') || '70%',
                        html: "<div style=\"padding: 10px; font-size: 14px\">".concat(html, "</div>"),
                        onresize: function onresize(width, height) {
                          // 改变窗口大小时记录窗口大小
                          localStorage.setItem('ta_say_width', width + 'px');
                          localStorage.setItem('ta_say_height', height + 'px');
                        },
                        onclose: function onclose() {
                          // 关闭弹窗时取消回复高亮
                          $reply.css('border', 'none');
                          $reply.css('border-bottom', '1px solid #e2e2e2');
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
// @version      0.0.1
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTNDRDtrQkE0Q0QsQ0E5Q0Q7Z0JBK0NELENBeE9IOztjQUFBO2NBQUE7Z0JBQUE7WUFBQTtVQUFBO1FBQUE7TUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OytDQ05GOzs7Ozs7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTs7QUFFQSwyREFBQztFQUNDLGFBREQsQ0FHQzs7RUFIRDtJQUFBO01BQUE7UUFBQTtVQUlDa0IsV0FBVyxDQUFDQyxrQkFBa0IsQ0FBQyxLQUFELENBQW5CLENBQVgsQ0FKRCxDQUtDOztVQUNBcEosQ0FBQyxDQUFDQyxRQUFRLENBQUNvRSxJQUFWLENBQUQsQ0FBaUIvQyxNQUFqQjtVQVdBUCxpRkFBQTtVQUNBQSwrRUFBQTtVQUVBNkMsZ0VBQUE7O1FBcEJEO1FBQUE7VUFBQTtNQUFBO0lBQUE7RUFBQTtBQUFBLENBQUQ7Ozs7OztVQy9CQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztVRUFBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RhbXBlcm1vbmtleS1zY3JpcHQtdXRpbHMvLi91dGlscy9zcmMvZ20vU3RvcmUudHMiLCJ3ZWJwYWNrOi8vdGFtcGVybW9ua2V5LXNjcmlwdC11dGlscy8uL3V0aWxzL3NyYy9nbS9NZW51Q21kLnRzIiwid2VicGFjazovL3RhbXBlcm1vbmtleS1zY3JpcHQtdXRpbHMvLi91dGlscy9zcmMvQ29tbW9uT3B0aW9ucy50cyIsIndlYnBhY2s6Ly90YW1wZXJtb25rZXktc2NyaXB0LXV0aWxzLy4vdjJleC1yZXBsaWVzLXByby9zcmMvT3B0aW9ucy50cyIsIndlYnBhY2s6Ly90YW1wZXJtb25rZXktc2NyaXB0LXV0aWxzLy4vdXRpbHMvc3JjL2dtL2VudW0vSHR0cERhdGFUeXBlLnRzIiwid2VicGFjazovL3RhbXBlcm1vbmtleS1zY3JpcHQtdXRpbHMvLi91dGlscy9zcmMvZ20vUmVxdWVzdC50cyIsIndlYnBhY2s6Ly90YW1wZXJtb25rZXktc2NyaXB0LXV0aWxzLy4vdXRpbHMvc3JjL2dtL0luZm8udHMiLCJ3ZWJwYWNrOi8vdGFtcGVybW9ua2V5LXNjcmlwdC11dGlscy8uL3YyZXgtcmVwbGllcy1wcm8vc3JjL2FwaS9WMmV4LnRzIiwid2VicGFjazovL3RhbXBlcm1vbmtleS1zY3JpcHQtdXRpbHMvLi92MmV4LXJlcGxpZXMtcHJvL3NyYy9SZXBsYXkudHMiLCJ3ZWJwYWNrOi8vdGFtcGVybW9ua2V5LXNjcmlwdC11dGlscy8uL3YyZXgtcmVwbGllcy1wcm8vc3JjL21haW4udHMiLCJ3ZWJwYWNrOi8vdGFtcGVybW9ua2V5LXNjcmlwdC11dGlscy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90YW1wZXJtb25rZXktc2NyaXB0LXV0aWxzL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90YW1wZXJtb25rZXktc2NyaXB0LXV0aWxzL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdGFtcGVybW9ua2V5LXNjcmlwdC11dGlscy93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3RhbXBlcm1vbmtleS1zY3JpcHQtdXRpbHMvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3RhbXBlcm1vbmtleS1zY3JpcHQtdXRpbHMvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICog5a2Y5YKoXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0b3JlIHtcblxuICAvKipcbiAgICog6I635Y+WXG4gICAqIEBwYXJhbSBrZXkg6ZSuXG4gICAqL1xuICBzdGF0aWMgZ2V0KGtleTogc3RyaW5nKTogYW55IHtcbiAgICByZXR1cm4gR01fZ2V0VmFsdWUoa2V5KTtcbiAgfVxuXG4gIC8qKlxuICAgKiDorr7nva5cbiAgICogQHBhcmFtIGtleSDplK5cbiAgICogQHBhcmFtIHZhbHVlIOWAvFxuICAgKi9cbiAgc3RhdGljIHNldChrZXk6IHN0cmluZywgdmFsdWU6IGFueSkge1xuICAgIEdNX3NldFZhbHVlKGtleSwgdmFsdWUpO1xuICB9XG59XG4iLCIvKipcbiAqIOmAiemhueiPnOWNlVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNZW51Q21kIHtcblxuICAvKipcbiAgICog5rOo5YaMXG4gICAqIEBwYXJhbSBuYW1lIOWQjeensFxuICAgKiBAcGFyYW0gZm4g54K55Ye76I+c5Y2V5pe25omn6KGM55qE5Ye95pWwXG4gICAqL1xuICBzdGF0aWMgcmVnaXN0ZXIobmFtZTogc3RyaW5nLCBmbjogKCkgPT4gdm9pZCk6IG51bWJlciB7XG4gICAgcmV0dXJuIEdNX3JlZ2lzdGVyTWVudUNvbW1hbmQobmFtZSwgZm4pO1xuICB9XG5cbiAgLyoqXG4gICAqIOazqOmUgFxuICAgKiBAcGFyYW0gbWVudUNtZElkIOazqOWGjOaXtui/lOWbnueahCBJRFxuICAgKi9cbiAgc3RhdGljIHVucmVnaXN0ZXIobWVudUNtZElkOiBudW1iZXIpIHtcbiAgICBHTV91bnJlZ2lzdGVyTWVudUNvbW1hbmQobWVudUNtZElkKTtcbiAgfVxufVxuIiwiaW1wb3J0IFN0b3JlIGZyb20gXCIuLi8uLi91dGlscy9zcmMvZ20vU3RvcmVcIjtcbmltcG9ydCBNZW51Q21kIGZyb20gXCIuLi8uLi91dGlscy9zcmMvZ20vTWVudUNtZFwiO1xuXG4vKipcbiAqIOmAiemhueiPnOWNlVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb21tb25PcHRpb25zIHtcblxuICAvLyAvKipcbiAgLy8gICog6YCJ6aG5IEtleVxuICAvLyAgKi9cbiAgLy8gcHJvdGVjdGVkIHN0YXRpYyBLZXlzID0ge1xuICAvLyAgIC8vIHh4eDogJ3h4eCdcbiAgLy8gfVxuICAvL1xuICAvLyAvKipcbiAgLy8gICog6YCJ6aG5XG4gIC8vICAqIEBwcml2YXRlXG4gIC8vICAqL1xuICAvLyBwcm90ZWN0ZWQgc3RhdGljIG9wdGlvbnMgPSBbXG4gIC8vICAgLy8ge2xhYmVsOiAnJywgbmFtZTogdGhpcy5LZXlzLnh4eCwgdmVyc2lvbjogMSwgdmFsdWU6IGZhbHNlLCBtZW51Q21kSWQ6IG51bGx9LFxuICAvLyBdO1xuXG4gIC8qKlxuICAgKiDms6jlhowgYm9vbCDnsbvlnovnmoTpgInpoblcbiAgICogQHBhcmFtIG9wdGlvbiDpgInpoblcbiAgICovXG4gIHN0YXRpYyByZWdpc3RlckJvb2xPcHRpb24ob3B0aW9uOiBhbnkpIHtcbiAgICBjb25zdCB2YWwgPSBvcHRpb24udmFsdWUsIHZhbElzQm9vbCA9ICh0eXBlb2YgdmFsID09PSAnYm9vbGVhbicpO1xuXG4gICAgaWYgKCF2YWxJc0Jvb2wpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgLy8g5rOo5YaM6YCJ6aG5XG4gICAgY29uc3QgY3VycmVudE1lbnVDbWRJZCA9IE1lbnVDbWQucmVnaXN0ZXIoKHZhbCA/ICfimJHvuI8gJyA6ICfwn5SyICcpICsgb3B0aW9uLmxhYmVsLCAoKSA9PiB7XG4gICAgICAvLyDngrnlh7vlgLzlj5blj41cbiAgICAgIG9wdGlvbi52YWx1ZSA9ICFvcHRpb24udmFsdWU7XG4gICAgICBTdG9yZS5zZXQob3B0aW9uLm5hbWUsIEpTT04uc3RyaW5naWZ5KG9wdGlvbikpO1xuXG4gICAgICAvLyDlj5bmtojms6jlhoxcbiAgICAgIE1lbnVDbWQudW5yZWdpc3RlcihjdXJyZW50TWVudUNtZElkKTtcbiAgICAgIC8vIOmHjeaWsOazqOWGjFxuICAgICAgdGhpcy5yZWdpc3RlckJvb2xPcHRpb24ob3B0aW9uKTtcbiAgICAgIC8vIOWIt+aWsOmhtemdolxuICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuICAgIH0pO1xuXG4gICAgLy8g5L+d5a2Y6YCJ6aG5IElEXG4gICAgb3B0aW9uLm1lbnVDbWRJZCA9IGN1cnJlbnRNZW51Q21kSWQ7XG4gICAgU3RvcmUuc2V0KG9wdGlvbi5uYW1lLCBKU09OLnN0cmluZ2lmeShvcHRpb24pKTtcbiAgfVxuXG4gIC8qKlxuICAgKiDms6jlhozmiYDmnInpgInpoblcbiAgICogQHBhcmFtIHVybCDorr7nva7pobXpnaIgVVJMXG4gICAqIEBwYXJhbSBvcHRpb25zXG4gICAqL1xuICBzdGF0aWMgcmVnaXN0ZXJBbGwodXJsOiBzdHJpbmcsIG9wdGlvbnM6IGFueVtdKSB7XG4gICAgTWVudUNtZC5yZWdpc3Rlcign5pu05aSa6K6+572uJywgKCkgPT4ge1xuICAgICAgd2luZG93Lm9wZW4odXJsLCAnX2JsYW5rJyk7XG4gICAgfSk7XG5cbiAgICBmb3IgKGNvbnN0IG9wdGlvbiBvZiBvcHRpb25zKSB7XG4gICAgICAvLyBUT0RPIOOAkOiwg+ivleOAkeS4jeS/neeVmemAiemhueeahOWAvO+8jOavj+asoemDveS7jiBTdG9yZSDkuK3ojrflj5ZcbiAgICAgIC8vIFN0b3JlLnNldChvcHRpb24ubmFtZSwgbnVsbCk7XG5cbiAgICAgIGxldCBzdG9yZU9wdGlvbiA9IFN0b3JlLmdldChvcHRpb24ubmFtZSkgPyBKU09OLnBhcnNlKFN0b3JlLmdldChvcHRpb24ubmFtZSkpIDogbnVsbDtcbiAgICAgIC8vIOWmguaenOmAiemhueS4jeWtmOWcqCB8fCDniYjmnKzkuI3kuIDoh7Qg5pe26YeN572u6YCJ6aG5XG4gICAgICBpZiAoc3RvcmVPcHRpb24gPT09IG51bGwgfHwgIXN0b3JlT3B0aW9uWyd2ZXJzaW9uJ10gfHwgc3RvcmVPcHRpb25bJ3ZlcnNpb24nXSA8IG9wdGlvbi52ZXJzaW9uKSB7XG4gICAgICAgIFN0b3JlLnNldChvcHRpb24ubmFtZSwgSlNPTi5zdHJpbmdpZnkob3B0aW9uKSk7XG4gICAgICAgIHN0b3JlT3B0aW9uID0gb3B0aW9uO1xuICAgICAgfVxuICAgICAgdGhpcy5yZWdpc3RlckJvb2xPcHRpb24oc3RvcmVPcHRpb24pO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiDlnKjpobXpnaLkuK3liqDovb3pgInpoblcbiAgICovXG4gIHN0YXRpYyBsb2FkSW5HcmVhc3lmb3JrKHNjcmlwdElkOiBudW1iZXIsIGxvYWRPcHRpb25Db250ZW50Rm46IEZ1bmN0aW9uKSB7XG4gICAgaWYgKGxvY2F0aW9uLmhvc3QgIT09ICdncmVhc3lmb3JrLm9yZycgfHwgbG9jYXRpb24uaHJlZi5pbmRleE9mKCcvc2NyaXB0cy8nICsgc2NyaXB0SWQpID09IC0xKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHNlbGVjdG9yID0ge1xuICAgICAgc2NyaXB0TGlua3M6ICcjc2NyaXB0LWxpbmtzJyxcbiAgICAgIHNjcmlwdE9wdGlvbnM6ICcjc2NyaXB0LW9wdGlvbnMnLFxuICAgICAgc2NyaXB0Q29udGVudDogJyNzY3JpcHQtY29udGVudCcsXG4gICAgfVxuICAgIGNvbnN0ICRib2R5ID0gJChkb2N1bWVudC5ib2R5KSwgJHNjcmlwdExpbmtzID0gJChzZWxlY3Rvci5zY3JpcHRMaW5rcyksICRzY3JpcHRDb250ZW50ID0gJChzZWxlY3Rvci5zY3JpcHRDb250ZW50KTtcblxuICAgIC8vIOa3u+WKoOiEmuacrOiuvue9rueahOmAiemhueWNoVxuICAgICRzY3JpcHRMaW5rcy5jaGlsZHJlbignbGk6ZXEoMCknKS5hZnRlcihgPGxpPjxhIGhyZWY9XCJqYXZhc2NyaXB0OjtcIiBpZD1cInNjcmlwdC1vcHRpb25zXCI+6ISa5pys6K6+572uPC9hPjwvbGk+YClcbiAgICAvLyDohJrmnKzorr7nva7pgInpobnngrnlh7vkuovku7ZcbiAgICAkYm9keS5vbignY2xpY2snLCBzZWxlY3Rvci5zY3JpcHRPcHRpb25zLCAoKSA9PiB7XG4gICAgICAvLyDnp7vpmaTlt7LpgInkuK3pgInpobnnmoTmoLflvI9cbiAgICAgIGNvbnN0ICRjdXJyZW50TGkgPSAkc2NyaXB0TGlua3MuY2hpbGRyZW4oJ2xpLmN1cnJlbnQnKTtcbiAgICAgICRjdXJyZW50TGkuaHRtbChgPGEgaHJlZj1cIiR7bG9jYXRpb24uaHJlZn1cIj4keyRjdXJyZW50TGkudGV4dCgpfTwvYT5gKTtcbiAgICAgICRjdXJyZW50TGkucmVtb3ZlQ2xhc3MoJ2N1cnJlbnQnKTtcblxuICAgICAgLy8g5re75Yqg6YCJ5Lit6YCJ6aG555qE5qC35byPXG4gICAgICBjb25zdCAkc2NyaXB0T3B0aW9ucyA9ICQoc2VsZWN0b3Iuc2NyaXB0T3B0aW9ucyk7XG4gICAgICAkc2NyaXB0T3B0aW9ucy5wYXJlbnQoKS5hZGRDbGFzcygnY3VycmVudCcpO1xuXG4gICAgICBsb2FkT3B0aW9uQ29udGVudEZuKCRzY3JpcHRDb250ZW50KTtcbiAgICB9KTtcbiAgfVxufVxuIiwiaW1wb3J0IENvbW1vbk9wdGlvbnMgZnJvbSBcIi4uLy4uL3V0aWxzL3NyYy9Db21tb25PcHRpb25zXCI7XG5pbXBvcnQgU3RvcmUgZnJvbSBcIi4uLy4uL3V0aWxzL3NyYy9nbS9TdG9yZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBPcHRpb25zIHtcblxuICAvKipcbiAgICog6YCJ6aG5IEtleVxuICAgKi9cbiAgc3RhdGljIEtleXMgPSB7XG4gICAgdjJleFRva2VuOiAndjJleFRva2VuJyxcbiAgfVxuXG4gIC8qKlxuICAgKiDpgInpoblcbiAgICogQHByaXZhdGVcbiAgICovXG4gIHByb3RlY3RlZCBzdGF0aWMgb3B0aW9ucyA9IFtcbiAgICB7bGFiZWw6ICdWMkVYIFRva2VuJywgbmFtZTogdGhpcy5LZXlzLnYyZXhUb2tlbiwgdmVyc2lvbjogMSwgdmFsdWU6ICcnLCBtZW51Q21kSWQ6IG51bGx9LFxuICBdO1xuXG4gIC8qKlxuICAgKiDms6jlhozmiYDmnInpgInpoblcbiAgICovXG4gIHN0YXRpYyByZWdpc3RlckFsbCgpIHtcbiAgICBDb21tb25PcHRpb25zLnJlZ2lzdGVyQWxsKCdodHRwczovL3d3dy52MmV4LmNvbS9zZXR0aW5ncycsIHRoaXMub3B0aW9ucyk7XG4gIH1cblxuICAvKipcbiAgICog5Zyo6aG16Z2i5Lit5Yqg6L296YCJ6aG5XG4gICAqL1xuICBzdGF0aWMgbG9hZEluVjJleCgpIHtcbiAgICBpZiAobG9jYXRpb24uaHJlZi5pbmRleE9mKCd2MmV4LmNvbS9zZXR0aW5ncycpID09IC0xKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHNlbGVjdG9yID0ge1xuICAgICAgICBtZW51VGFiOiAnYS50YWInLFxuICAgICAgICBjdXJyZW50TWVudVRhYjogJ2EudGFiX2N1cnJlbnQnLFxuICAgICAgICBzY3JpcHRPcHRpb25zOiAnI3NjcmlwdC1vcHRpb25zJyxcbiAgICAgICAgc2NyaXB0Q29udGVudDogJyNNYWluIC5ib3gnLFxuXG4gICAgICAgIHYyZXhUb2tlbklucHV0OiAnaW5wdXRbbmFtZT1cInYyZXhUb2tlblwiXScsXG4gICAgICAgIHNhdmVPcHRpb25zQnRuOiAnI3NhdmUtb3B0aW9ucycsXG4gICAgICB9LFxuICAgICAgJGJvZHkgPSAkKGRvY3VtZW50LmJvZHkpLCAkbWVudVRhYiA9ICQoc2VsZWN0b3IubWVudVRhYik7XG5cbiAgICAvLyDmt7vliqDohJrmnKzorr7nva7nmoTpgInpobnljaFcbiAgICAkbWVudVRhYi5wYXJlbnQoKS5hcHBlbmQoYDxhIGlkPVwic2NyaXB0LW9wdGlvbnNcIiBjbGFzcz1cInRhYlwiIGhyZWY9XCJqYXZhc2NyaXB0OnZvaWQoMCk7XCI+6ISa5pys6K6+572uPC9hPmApO1xuICAgIC8vIOiEmuacrOiuvue9rumAiemhueeCueWHu+S6i+S7tlxuICAgICRib2R5Lm9uKCdjbGljaycsIHNlbGVjdG9yLnNjcmlwdE9wdGlvbnMsICgpID0+IHtcbiAgICAgIC8vIOenu+mZpOW3sumAieS4remAiemhueeahOagt+W8j1xuICAgICAgY29uc3QgJGN1cnJlbnRNZW51VGFiID0gJChzZWxlY3Rvci5jdXJyZW50TWVudVRhYik7XG4gICAgICAkY3VycmVudE1lbnVUYWIucmVtb3ZlQ2xhc3MoJ3RhYl9jdXJyZW50Jyk7XG4gICAgICAkY3VycmVudE1lbnVUYWIuYWRkQ2xhc3MoJ3RhYicpO1xuXG4gICAgICAvLyDmt7vliqDpgInkuK3pgInpobnnmoTmoLflvI9cbiAgICAgIGNvbnN0ICRzY3JpcHRPcHRpb25zID0gJChzZWxlY3Rvci5zY3JpcHRPcHRpb25zKTtcbiAgICAgICRzY3JpcHRPcHRpb25zLnJlbW92ZUNsYXNzKCd0YWInKTtcbiAgICAgICRzY3JpcHRPcHRpb25zLmFkZENsYXNzKCd0YWJfY3VycmVudCcpO1xuXG4gICAgICAvLyDmt7vliqDohJrmnKzorr7nva7nmoTlhoXlrrlcbiAgICAgICQoc2VsZWN0b3Iuc2NyaXB0Q29udGVudCArICcgZGl2Omd0KDEpJykucmVtb3ZlKCk7XG4gICAgICAkKHNlbGVjdG9yLnNjcmlwdENvbnRlbnQpLmFwcGVuZChgXG4gICAgICAgIDxmb3JtPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbm5lclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRvcGljX2NvbnRlbnQgbWFya2Rvd25fYm9keVwiPlxuICAgICAgICAgICAgICA8cD7or7flnKjov5nloavlhpnkvaDnmoQgPGEgaHJlZj1cImh0dHBzOi8vd3d3LnYyZXguY29tL3NldHRpbmdzL3Rva2Vuc1wiIHRhcmdldD1cIl9ibGFua1wiPlYyRVggVG9rZW48L2E+PC9wPiAgICAgICAgICBcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNlcDIwXCI+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwic29jaWFsLXNldHRpbmdzLWZvcm1cIj5cbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8ZGl2PlYyRVggVG9rZW48L2Rpdj5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgY2xhc3M9XCJzbFwiIG5hbWU9XCJ2MmV4VG9rZW5cIiB2YWx1ZT1cIiR7SlNPTi5wYXJzZShTdG9yZS5nZXQodGhpcy5LZXlzLnYyZXhUb2tlbikpLnZhbHVlfVwiPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjZWxsX29wc1wiPlxuICAgICAgICAgICAgPGlucHV0IGlkPVwic2F2ZS1vcHRpb25zXCIgdHlwZT1cInN1Ym1pdFwiIGNsYXNzPVwic3VwZXIgbm9ybWFsIGJ1dHRvblwiIHZhbHVlPVwiU2F2ZVwiPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Zvcm0+XG4gICAgICBgKTtcblxuICAgICAgJGJvZHkub24oJ2NsaWNrJywgc2VsZWN0b3Iuc2F2ZU9wdGlvbnNCdG4sICgpID0+IHtcbiAgICAgICAgY29uc3QgdG9rZW4gPSAkKHNlbGVjdG9yLnYyZXhUb2tlbklucHV0KS52YWwoKTtcbiAgICAgICAgU3RvcmUuc2V0KHRoaXMuS2V5cy52MmV4VG9rZW4sIEpTT04uc3RyaW5naWZ5KHsuLi5KU09OLnBhcnNlKFN0b3JlLmdldCh0aGlzLktleXMudjJleFRva2VuKSksIC4uLnt2YWx1ZTogdG9rZW59fSkpO1xuICAgICAgICBsYXllci5tc2coJ+S/neWtmOaIkOWKnycpO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxufVxuIiwiZXhwb3J0IGVudW0gSHR0cERhdGFUeXBlIHtcbiAgSlNPTiA9IFwiSlNPTlwiXG59XG4iLCJpbXBvcnQge0h0dHBEYXRhVHlwZX0gZnJvbSBcIi4vZW51bS9IdHRwRGF0YVR5cGVcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVxdWVzdCB7XG5cbiAgc3RhdGljIGFzeW5jIGdldChvcHRpb246IHsgdXJsOiBzdHJpbmcsIGRhdGFUeXBlPzogSHR0cERhdGFUeXBlLCBzeW5jaHJvbm91cz86IGJvb2xlYW4sIGhlYWRlcnM/OiB7fSwgb25sb2FkPzogRnVuY3Rpb24gfSk6IFByb21pc2U8YW55PiB7XG4gICAgb3B0aW9uWydtZXRob2QnXSA9ICdHRVQnO1xuXG4gICAgLy8g5ZCM5q2l5pe26L+U5ZueIFByb21pc2VcbiAgICBpZiAob3B0aW9uLnN5bmNocm9ub3VzKSB7XG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICBHTV94bWxodHRwUmVxdWVzdCh7XG4gICAgICAgICAgLi4ub3B0aW9uLFxuICAgICAgICAgIG9ubG9hZDogKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICByZXNvbHZlKG9wdGlvbi5kYXRhVHlwZSA9PT0gSHR0cERhdGFUeXBlLkpTT04gPyBKU09OLnBhcnNlKHJlc3BvbnNlLnJlc3BvbnNlVGV4dCkgOiByZXNwb25zZS5yZXNwb25zZVRleHQpO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgb25lcnJvcjogKGVycm9yKSA9PiB7XG4gICAgICAgICAgICByZWplY3QoZXJyb3IpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9KVxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBvbmxvYWQxID0gZnVuY3Rpb24gKGRldGFpbHMpIHtcbiAgICAgICAgbGV0IHJlc3BvbnNlO1xuICAgICAgICBpZiAob3B0aW9uLmRhdGFUeXBlID09PSBIdHRwRGF0YVR5cGUuSlNPTikge1xuICAgICAgICAgIHJlc3BvbnNlID0gSlNPTi5wYXJzZShkZXRhaWxzLnJlc3BvbnNlVGV4dCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmVzcG9uc2UgPSBkZXRhaWxzLnJlc3BvbnNlO1xuICAgICAgICB9XG4gICAgICAgIG9wdGlvbi5vbmxvYWQocmVzcG9uc2UpO1xuICAgICAgfVxuICAgICAgR01feG1saHR0cFJlcXVlc3Qoey4uLm9wdGlvbiwgb25sb2FkOiBvbmxvYWQxfSk7XG4gICAgfVxuICB9XG59XG4iLCIvKipcbiAqIOiOt+WPluiEmuacrOS/oeaBr1xuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmZvIHtcblxuICBzdGF0aWMgZ2V0KCkge1xuICAgIHJldHVybiBHTV9pbmZvLnNjcmlwdDtcbiAgfVxuXG4gIHN0YXRpYyBnZXROYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmdldCgpLm5hbWU7XG4gIH1cblxuICBzdGF0aWMgZ2V0VmVyc2lvbigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXQoKS52ZXJzaW9uO1xuICB9XG59XG4iLCJpbXBvcnQgUmVxdWVzdCBmcm9tIFwiLi4vLi4vLi4vdXRpbHMvc3JjL2dtL1JlcXVlc3RcIjtcbmltcG9ydCB7SHR0cERhdGFUeXBlfSBmcm9tIFwiLi4vLi4vLi4vdXRpbHMvc3JjL2dtL2VudW0vSHR0cERhdGFUeXBlXCI7XG5pbXBvcnQgSW5mbyBmcm9tIFwiLi4vLi4vLi4vdXRpbHMvc3JjL2dtL0luZm9cIjtcbmltcG9ydCBTdG9yZSBmcm9tIFwiLi4vLi4vLi4vdXRpbHMvc3JjL2dtL1N0b3JlXCI7XG5pbXBvcnQgT3B0aW9ucyBmcm9tIFwiLi4vT3B0aW9uc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWMmV4IHtcblxuICBzdGF0aWMgQkFTRV9VUkwgPSAnaHR0cHM6Ly93d3cudjJleC5jb20vYXBpL3YyLyc7XG5cbiAgLyoqXG4gICAqIOajgOafpSBUb2tlbiDmmK/lkKbmnInmlYhcbiAgICovXG4gIHB1YmxpYyBzdGF0aWMgYXN5bmMgY2hlY2tUb2tlbigpIHtcbiAgICBjb25zdCB0b2tlbiA9IEpTT04ucGFyc2UoU3RvcmUuZ2V0KE9wdGlvbnMuS2V5cy52MmV4VG9rZW4pKS52YWx1ZTtcbiAgICBpZiAoIXRva2VuICYmIGxvY2F0aW9uLmhyZWYuaW5kZXhPZigndjJleC5jb20vc2V0dGluZ3MnKSA9PSAtMSkge1xuICAgICAgbGF5ZXIubXNnKCfor7flhYjlnKjigJzohJrmnKzorr7nva7igJ3kuK3loavlhpkgVG9rZW7vvIEnLCB7aWNvbjogNCwgb2Zmc2V0OiAncmInfSwgKCkgPT4ge1xuICAgICAgICB3aW5kb3cub3BlbignaHR0cHM6Ly93d3cudjJleC5jb20vc2V0dGluZ3MnLCAnX2JsYW5rJyk7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgUmVxdWVzdC5nZXQoe1xuICAgICAgdXJsOiB0aGlzLkJBU0VfVVJMICsgJ3Rva2VuJyxcbiAgICAgIGRhdGFUeXBlOiBIdHRwRGF0YVR5cGUuSlNPTixcbiAgICAgIHN5bmNocm9ub3VzOiB0cnVlLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICAnQXV0aG9yaXphdGlvbic6ICdCZWFyZXIgJyArIHRva2VuXG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAoIXJlc3VsdFsnc3VjY2VzcyddKSB7XG4gICAgICBsYXllci5tc2coSW5mby5nZXROYW1lKCkgKyBcIu+8mlwiICsgcmVzdWx0WydtZXNzYWdlJ10sIHtpY29uOiAyLCBvZmZzZXQ6ICdyYicsIHRpbWU6IDUwMDB9KTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICAvKipcbiAgICog6I635Y+W5Li76aKY5Zue5aSNXG4gICAqIEBwYXJhbSB0b3BpY0lkIOS4u+mimCBJRFxuICAgKiBAcGFyYW0gcGFnZSDpobXnoIFcbiAgICovXG4gIHB1YmxpYyBzdGF0aWMgYXN5bmMgZ2V0UmVwbGllcyh0b3BpY0lkOiBudW1iZXIsIHBhZ2U/OiBudW1iZXIpOiBQcm9taXNlPHsgaHRtbDogc3RyaW5nOyBpZDogbnVtYmVyLCBjcmVhdGVkOiBudW1iZXIsIGNvbnRlbnQ6IHN0cmluZywgY29udGVudF9yZW5kZXJlZDogc3RyaW5nLCBtZW1iZXI6IHsgaWQ6IG51bWJlciwgdXNlcm5hbWU6IHN0cmluZywgY3JlYXRlZDogbnVtYmVyLCB1cmw6IHN0cmluZywgYXZhdGFyOiBzdHJpbmcsIGJpbzogc3RyaW5nLCBnaXRodWI6IHN0cmluZywgd2Vic2l0ZTogc3RyaW5nIH0gfVtdPiB7XG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgUmVxdWVzdC5nZXQoe1xuICAgICAgdXJsOiB0aGlzLkJBU0VfVVJMICsgJ3RvcGljcy8nICsgdG9waWNJZCArICcvcmVwbGllcycgKyAocGFnZSA/ICc/cD0nICsgcGFnZSA6ICcnKSxcbiAgICAgIGRhdGFUeXBlOiBIdHRwRGF0YVR5cGUuSlNPTixcbiAgICAgIHN5bmNocm9ub3VzOiB0cnVlLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICAnQXV0aG9yaXphdGlvbic6ICdCZWFyZXIgJyArIEpTT04ucGFyc2UoU3RvcmUuZ2V0KE9wdGlvbnMuS2V5cy52MmV4VG9rZW4pKS52YWx1ZVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKCFyZXN1bHRbJ3N1Y2Nlc3MnXSkge1xuICAgICAgY29uc29sZS53YXJuKEluZm8uZ2V0TmFtZSgpICsgXCLvvJpcIiArIHJlc3VsdFsnbWVzc2FnZSddKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdFsncmVzdWx0J107XG4gIH1cbn1cbiIsImltcG9ydCBWMmV4IGZyb20gXCIuL2FwaS9WMmV4XCI7XG5pbXBvcnQgSW5mbyBmcm9tIFwiLi4vLi4vdXRpbHMvc3JjL2dtL0luZm9cIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVwbGF5IHtcblxuICBwcml2YXRlIHN0YXRpYyB3aW5ib3g6IGFueTtcblxuICBzdGF0aWMgYXN5bmMgcnVuKCkge1xuICAgIGlmIChsb2NhdGlvbi5ocmVmLmluZGV4T2YoJ3YyZXguY29tL3QvJykgPT09IC0xKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8g5qOA5p+lIFRva2VuXG4gICAgaWYgKCFhd2FpdCBWMmV4LmNoZWNrVG9rZW4oKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0XG4gICAgICBzZWxlY3RvciA9IHtcbiAgICAgICAgLy8g5Zue5aSN5YiX6KGoXG4gICAgICAgIHJlcGxpZXNCb3g6ICcjTWFpbiAuYm94OmVxKDEpJyxcbiAgICAgICAgLy8g5omA5pyJ5Zue5aSNXG4gICAgICAgIGFsbFJlcGxpZXM6ICcjTWFpbiAuYm94OmVxKDEpIC5jZWxsOm5vdCg6ZXEoMCkpJyxcbiAgICAgICAgLy8g5Zue5aSN5pWwXG4gICAgICAgIHJlcGxpZXNOdW1iZXI6ICcjTWFpbiAuYm94OmVxKDEpIC5ncmF5JyxcbiAgICAgICAgLy8gT1Ag5ZCNXG4gICAgICAgIG9wVXNlck5hbWU6ICcuaGVhZGVyIC5ncmF5IGE6ZXEoMCknLFxuICAgICAgICAvLyBAIOmTvuaOpVxuICAgICAgICBhdExpbms6ICcuYXQtbGluaycsXG4gICAgICAgIC8vIOWPs+S+p+WGheWuuVxuICAgICAgICB0YVNheTogJy50YS1zYXknLFxuICAgICAgfSxcbiAgICAgICRib2R5ID0gJChkb2N1bWVudC5ib2R5KSwgJGhlYWQgPSAkKGRvY3VtZW50LmhlYWQpLFxuICAgICAgJGFsbFJlcGxpZXMgPSAkKHNlbGVjdG9yLmFsbFJlcGxpZXMpLFxuICAgICAgJHJlcGxpZXNOdW1iZXIgPSAkKHNlbGVjdG9yLnJlcGxpZXNOdW1iZXIpLFxuICAgICAgJG9wVXNlck5hbWUgPSAkKHNlbGVjdG9yLm9wVXNlck5hbWUpO1xuXG4gICAgLy8g5re75Yqg5by556qX5qC35byPXG4gICAgJGhlYWQuYXBwZW5kKGA8c3R5bGU+XG4gICAgICAud2luYm94JHtzZWxlY3Rvci50YVNheX0ge1xuICAgICAgICBib3JkZXItc2hhZG93OiAwIDE0cHggMTJweCByZ2IoMCAwIDAgLyAyNSUpLCAwIDEwcHggMTBweCByZ2IoMCAwIDAgLyAyMiUpICFpbXBvcnRhbnQ7XG4gICAgICB9XG4gICAgICAud2luYm94JHtzZWxlY3Rvci50YVNheX0gLndiLWRyYWcge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTJlMmUyO1xuICAgICAgICBjb2xvcjogIzY2NjtcbiAgICAgIH1cbiAgICA8L3N0eWxlPmApO1xuXG4gICAgLy8g6ZqQ6JeP5Y6f5Zue5aSNXG4gICAgJGFsbFJlcGxpZXMuaGlkZSgpO1xuICAgIC8vIOiOt+WPluWbnuWkjeaVsFxuICAgIGNvbnN0IHJlcGxpZXNOdW1iZXIgPSAkcmVwbGllc051bWJlci50ZXh0KCkuc3Vic3RyaW5nKDAsICRyZXBsaWVzTnVtYmVyLnRleHQoKS5pbmRleE9mKCfmnaEnKSk7XG4gICAgLy8g6I635Y+WIE9QIOWQjVxuICAgIGNvbnN0IG9wVXNlck5hbWUgPSAkb3BVc2VyTmFtZS50ZXh0KCk7XG4gICAgLy8g6I635Y+W5omA5pyJ5Zue5aSNXG4gICAgY29uc3QgcmVwbGllcyA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IE1hdGguY2VpbChOdW1iZXIocmVwbGllc051bWJlcikgLyAyMCk7IGkrKykge1xuICAgICAgcmVwbGllcy5wdXNoKC4uLmF3YWl0IFYyZXguZ2V0UmVwbGllcyh0b3BpY0lkLCBpKSk7XG4gICAgfVxuXG4gICAgLy8g5riF56m65pWw5o2u5bqTXG4gICAgY29uc3QgZGIgPSBvcGVuRGF0YWJhc2UoJ3YyZXgtcmVwbGllcy1wcm8nLCBJbmZvLmdldFZlcnNpb24oKSwgSW5mby5nZXROYW1lKCksIDEwICogMTAyNCAqIDEwMjQpO1xuICAgIGRiLnRyYW5zYWN0aW9uKHR4ID0+IHtcbiAgICAgIHR4LmV4ZWN1dGVTcWwoYGRyb3AgdGFibGUgaWYgZXhpc3RzIHJlbmRlcmVkX3JlcGxpZXNgKTtcbiAgICB9LCBlcnJvciA9PiB7XG4gICAgfSwgKCkgPT4ge1xuICAgICAgc3RhcnQoKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IHN0YXJ0ID0gKCkgPT4ge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByZXBsaWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0XG4gICAgICAgICAgcmVwbHkgPSByZXBsaWVzW2ldLFxuICAgICAgICAgIHJlcGx5SWQgPSByZXBseS5pZCxcbiAgICAgICAgICBjcmVhdGVkID0gcmVwbHkuY3JlYXRlZCwgY3JlYXRlZDEgPSBOdW1iZXIoY3JlYXRlZCArICcwMDAnKSwgY3JlYXRlZEZvcm1hdCA9IG1vbWVudChjcmVhdGVkMSkuZm9ybWF0KCdZWVlZLU1NLUREIEhIOm1tOnNzJyksIGNyZWF0ZWRBZ28gPSBtb21lbnQoY3JlYXRlZDEpLmZyb21Ob3coKSxcbiAgICAgICAgICBtZW1iZXIgPSByZXBseS5tZW1iZXIsXG4gICAgICAgICAgdXNlcm5hbWUgPSBtZW1iZXIudXNlcm5hbWUsXG4gICAgICAgICAgYXZhdGFyID0gbWVtYmVyLmF2YXRhcixcblxuICAgICAgICAgIHJlcGx5RGl2SWQgPSAncl8nICsgcmVwbHlJZCwgJHJlcGx5RGl2SWQgPSAkKCcjJyArIHJlcGx5RGl2SWQpLFxuICAgICAgICAgIC8vIOeCuei1nuaVsFxuICAgICAgICAgICRmYWRlID0gJHJlcGx5RGl2SWQuZmluZCgnLmZhZGUnKSwgZmFkZUh0bWwgPSAkZmFkZS5sZW5ndGggPT09IDAgPyAnJyA6ICRmYWRlLnByb3AoJ291dGVySFRNTCcpO1xuXG4gICAgICAgIC8vIOWIoOmZpOWOn+WbnuWkjVxuICAgICAgICAkcmVwbHlEaXZJZC5yZW1vdmUoKTtcblxuICAgICAgICBsZXQgY29udGVudFJlbmRlcmVkID0gcmVwbHkuY29udGVudF9yZW5kZXJlZCwgYXRTZWFyY2hTdGFydEluZGV4ID0gMDtcbiAgICAgICAgLy8g5Y+v6IO95LyaIEAg5aSa5Liq5Lq6XG4gICAgICAgIGNvbnN0IGF0U2VhcmNoU3RyID0gJ0A8YSBocmVmPVxcXCIvbWVtYmVyLyc7XG4gICAgICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgICAgbGV0IGF0TGlua0luZGV4ID0gY29udGVudFJlbmRlcmVkLmluZGV4T2YoYXRTZWFyY2hTdHIsIGF0U2VhcmNoU3RhcnRJbmRleCk7XG4gICAgICAgICAgaWYgKGF0TGlua0luZGV4ID09PSAtMSkge1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICAgIC8vIOiOt+WPliBAIOeahOeUqOaIt+WQjVxuICAgICAgICAgIGxldCBhdFVzZXJuYW1lID0gY29udGVudFJlbmRlcmVkLnN1YnN0cmluZyhhdExpbmtJbmRleCArIGF0U2VhcmNoU3RyLmxlbmd0aCwgY29udGVudFJlbmRlcmVkLmluZGV4T2YoJ1wiPicsIGF0TGlua0luZGV4KSk7XG4gICAgICAgICAgLy8g5Zue5aSN5YaF5a6577yM5YW25LitIEAg6ZO+5o6l5re75Yqg5LqGIGNsYXNzIOWSjCBAIOeahOeUqOaIt+WQjeS8oOmAklxuICAgICAgICAgIGNvbnN0IHJlcGxhY2VTdHIgPSBgQDxhIGNsYXNzPVwiJHtzZWxlY3Rvci5hdExpbmsuc3Vic3RyaW5nKDEpfVwiIGRhdGEtcmVwbHktZGl2LWlkPVwiJHtyZXBseURpdklkfVwiIGRhdGEtdXNlcm5hbWU9XCIke2F0VXNlcm5hbWV9XCIgZGF0YS1jcmVhdGVkPVwiJHtjcmVhdGVkfVwiIG9uY2xpY2s9XCJyZXR1cm4gZmFsc2U7XCIgaHJlZj1cIi9tZW1iZXIvJHthdFVzZXJuYW1lfWA7XG4gICAgICAgICAgY29udGVudFJlbmRlcmVkID0gY29udGVudFJlbmRlcmVkLnJlcGxhY2VBbGwoYEA8YSBocmVmPVwiL21lbWJlci8ke2F0VXNlcm5hbWV9YCwgcmVwbGFjZVN0cik7XG4gICAgICAgICAgYXRTZWFyY2hTdGFydEluZGV4ID0gYXRMaW5rSW5kZXggKyByZXBsYWNlU3RyLmxlbmd0aDtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGh0bWwgPSBgXG4gICAgICAgICAgPCEtLSDmraTlpITnmoQgc3R5bGUg5Li65qih5Lu/IC5jZWxsIOagt+W8jyAtLT5cbiAgICAgICAgICA8ZGl2IGlkPVwiJHtyZXBseURpdklkfVwiIHN0eWxlPVwiZm9udC1zaXplOiAxNHB4OyBsaW5lLWhlaWdodDogMTUwJTsgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlMmUyZTJcIj5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9XCJkaXNwbGF5OiBmbGV4O1wiPlxuICAgICAgICAgICAgICA8ZGl2IHN0eWxlPVwiZGlzcGxheTogZmxleDsgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgYWxpZ24taXRlbXM6IGNlbnRlcjsgYmFja2dyb3VuZC1jb2xvcjogI2ZhZmJmYzsgcGFkZGluZzogMTJweCAwIDEwcHggMFwiPlxuICAgICAgICAgICAgICAgICR7dXNlcm5hbWUgPT09IG9wVXNlck5hbWUgPyBgXG4gICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPVwiaGVpZ2h0OiAwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9XCJwb3NpdGlvbjogcmVsYXRpdmU7IGxlZnQ6IDQ0cHg7IHRvcDogLTEycHg7IGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgyMjVkZWcsICM1NThiZjYgMjNweCwgI2ZhZmJmYyAwKTsgd2lkdGg6IDMycHg7IGhlaWdodDogMzJweDtcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYmFkZ2VzXCIgc3R5bGU9XCJjb2xvcjogd2hpdGU7IHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTsgcG9zaXRpb246IHJlbGF0aXZlOyB0b3A6IC0xcHg7IHJpZ2h0OiAtNXB4XCI+T1A8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICBgIDogJyd9XG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCIke2F2YXRhcn1cIiBjbGFzcz1cImF2YXRhclwiIGFsdD1cIiR7dXNlcm5hbWV9XCIgc3R5bGU9XCJ3aWR0aDogNDhweFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9XCJ3aWR0aDogMTIwcHg7XCI+XG4gICAgICAgICAgICAgICAgICA8YSBocmVmPVwiL21lbWJlci8ke3VzZXJuYW1lfVwiIGNsYXNzPVwiZGFya1wiPiR7dXNlcm5hbWV9PC9hPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBzdHlsZT1cInBhZGRpbmc6IDEwcHggMTBweCAxMHB4IDEycHg7IHdpZHRoOiAxMDAlXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT1cImRpc3BsYXk6IGZsZXg7IGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlblwiPlxuICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgJm5ic3A7PHNwYW4gY2xhc3M9XCJhZ29cIiB0aXRsZT1cIiR7Y3JlYXRlZEZvcm1hdH1cIj4ke2NyZWF0ZWRBZ299PC9zcGFuPiZuYnNwOyR7ZmFkZUh0bWx9XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDwhLS0g5q2k5aSE5Li65Y6f5YaF5a655L+d5oyB5LiN5Y+YIC0tPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwidGhhbmtfYXJlYV8ke3JlcGx5SWR9XCIgY2xhc3M9XCJ0aGFua19hcmVhXCI+PGEgaHJlZj1cIiM7XCIgb25jbGljaz1cImlmIChjb25maXJtKCfnoa7orqTopoHkuI3lho3mmL7npLrmnaXoh6ogQCR7dXNlcm5hbWV9IOeahOi/meadoeWbnuWkje+8nycpKSB7IGlnbm9yZVJlcGx5KCR7cmVwbHlJZH0sICR7b25jZX0pOyB9XCIgY2xhc3M9XCJ0aGFua1wiIHN0eWxlPVwiY29sb3I6ICNjY2M7XCI+6ZqQ6JePPC9hPiAmbmJzcDsgJm5ic3A7IDxhIGhyZWY9XCIjO1wiIG9uY2xpY2s9XCJpZiAoY29uZmlybSgn56Gu6K6k6Iqx6LS5IDEwIOS4qumTnOW4geWQkSBAJHt1c2VybmFtZX0g55qE6L+Z5p2h5Zue5aSN5Y+R6YCB5oSf6LCi77yfJykpIHsgdGhhbmtSZXBseSgke3JlcGx5SWR9KTsgfVwiIGNsYXNzPVwidGhhbmtcIj7mhJ/osKLlm57lpI3ogIU8L2E+PC9kaXY+ICZuYnNwOyA8YSBocmVmPVwiIztcIiBvbmNsaWNrPVwicmVwbHlPbmUoJyR7dXNlcm5hbWV9Jyk7XCI+PGltZyBzcmM9XCIvc3RhdGljL2ltZy9yZXBseV9uZXVlLnBuZ1wiIGFsaWduPVwiYWJzbWlkZGxlXCIgYm9yZGVyPVwiMFwiIGFsdD1cIlJlcGx5XCIgd2lkdGg9XCIyMFwiPjwvYT4gJm5ic3A7Jm5ic3A7IDxzcGFuIGNsYXNzPVwibm9cIj4xPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT1cInRleHQtYWxpZ246IGxlZnRcIj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuPiR7Y29udGVudFJlbmRlcmVkfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgYDtcblxuICAgICAgICAvLyDlsIblt7LmuLLmn5PnmoTlm57lpI3kv53lrZjliLAgV2ViIFNRTCDkuK1cbiAgICAgICAgZGIudHJhbnNhY3Rpb24odHggPT4ge1xuICAgICAgICAgIC8vIEBmb3JtYXR0ZXI6b2ZmXG4gICAgICAgICAgdHguZXhlY3V0ZVNxbChgY3JlYXRlIHRhYmxlIGlmIG5vdCBleGlzdHMgcmVuZGVyZWRfcmVwbGllcyAoaWQgdW5pcXVlLCB1c2VybmFtZSwgY3JlYXRlZCwgaHRtbCwgY29udGVudF9yZW5kZXJlZClgKTtcbiAgICAgICAgICB0eC5leGVjdXRlU3FsKGBpbnNlcnQgb3IgcmVwbGFjZSBpbnRvIHJlbmRlcmVkX3JlcGxpZXMgKGlkLCB1c2VybmFtZSwgY3JlYXRlZCwgaHRtbCwgY29udGVudF9yZW5kZXJlZCkgdmFsdWVzICg/LCA/LCA/LCA/LCA/KWAsIFtyZXBseUlkLCB1c2VybmFtZSwgY3JlYXRlZCwgaHRtbCwgY29udGVudFJlbmRlcmVkXSk7XG4gICAgICAgICAgLy8gQGZvcm1hdHRlcjpvblxuICAgICAgICB9LCBlcnJvciA9PiB7XG4gICAgICAgIH0sICgpID0+IHtcbiAgICAgICAgICBpZiAoaSA9PT0gcmVwbGllcy5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICAvLyB1cGRhdGVSZXBsaWVzKCk7XG4gICAgICAgICAgICBzaG93UmVwbGllcygpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5bGV56S65Zue5aSNXG4gICAgICovXG4gICAgY29uc3Qgc2hvd1JlcGxpZXMgPSAoKSA9PiB7XG4gICAgICBkYi50cmFuc2FjdGlvbih0eCA9PiB7XG4gICAgICAgIC8vIEBmb3JtYXR0ZXI6b2ZmXG4gICAgICAgIHR4LmV4ZWN1dGVTcWwoYHNlbGVjdCAqIGZyb20gcmVuZGVyZWRfcmVwbGllcyBvcmRlciBieSBjcmVhdGVkYCwgW10sICh0eCwgcmVzdWx0cykgPT4ge1xuICAgICAgICAvLyBAZm9ybWF0dGVyOm9uXG4gICAgICAgICAgZm9yIChjb25zdCByb3cgb2YgcmVzdWx0cy5yb3dzKSB7XG4gICAgICAgICAgICAkKHNlbGVjdG9yLnJlcGxpZXNCb3gpLmFwcGVuZChyb3cuaHRtbCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIC8vIOe7mSBAIOmTvuaOpea3u+WKoOeCueWHu+S6i+S7tlxuICAgICAgICAgICRib2R5Lm9uKCdjbGljaycsIHNlbGVjdG9yLmF0TGluaywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgY29uc3QgJHRoaXMgPSAkKHRoaXMpO1xuICAgICAgICAgICAgc2hvd1RhU2F5KCR0aGlzLmRhdGEoJ3JlcGx5RGl2SWQnKSwgJHRoaXMuZGF0YSgndXNlcm5hbWUnKSwgJHRoaXMuZGF0YSgnY3JlYXRlZCcpKTtcbiAgICAgICAgICB9KVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOWxleekuiBUQSDor7Tkuobku4DkuYhcbiAgICAgKiBAcGFyYW0gcmVwbHlEaXZJZCDlm57lpI3nmoQgZGl2IGlkXG4gICAgICogQHBhcmFtIHVzZXJuYW1lIOeUqOaIt+WQjVxuICAgICAqIEBwYXJhbSBjcmVhdGVkIOWIm+W7uuaXtumXtFxuICAgICAqL1xuICAgIGNvbnN0IHNob3dUYVNheSA9IChyZXBseURpdklkOiBzdHJpbmcsIHVzZXJuYW1lOiBzdHJpbmcsIGNyZWF0ZWQ6IG51bWJlcikgPT4ge1xuICAgICAgLy8g5YWz6Zet5by556qXXG4gICAgICBpZiAodGhpcy53aW5ib3gpIHtcbiAgICAgICAgdGhpcy53aW5ib3guY2xvc2UoKTtcbiAgICAgIH1cbiAgICAgIGNvbnNvbGUubG9nKHJlcGx5RGl2SWQpXG5cbiAgICAgIC8vIOmrmOS6rueCueWHuyBAIOmTvuaOpeeahOmCo+adoeWbnuWkjVxuICAgICAgY29uc3QgJHJlcGx5ID0gJCgnIycgKyByZXBseURpdklkKTtcbiAgICAgICRyZXBseS5jc3MoJ2JvcmRlcicsICcycHggc29saWQnKTtcbiAgICAgIC8vIOi3s+i9rOWIsOmrmOS6ruWbnuWkjVxuICAgICAgJCgnaHRtbCxib2R5JykuYW5pbWF0ZSh7c2Nyb2xsVG9wOiAkcmVwbHkub2Zmc2V0KCkudG9wIC0gJCh3aW5kb3cpLmhlaWdodCgpIC8gMn0sIDUwMCk7XG5cbiAgICAgIGRiLnRyYW5zYWN0aW9uKHR4ID0+IHtcbiAgICAgICAgLy8gQGZvcm1hdHRlcjpvZmZcbiAgICAgICAgdHguZXhlY3V0ZVNxbChgc2VsZWN0ICogZnJvbSByZW5kZXJlZF9yZXBsaWVzIHdoZXJlIHVzZXJuYW1lID0gPyBvcmRlciBieSBjcmVhdGVkYCwgW3VzZXJuYW1lXSwodHgsIHJlc3VsdHMpID0+IHtcbiAgICAgICAgLy8gQGZvcm1hdHRlcjpvblxuICAgICAgICAgIGxldCBodG1sID0gJycsIGlzR2VCeVByZXYgPSB0cnVlLCBpc0hpZ2hsaWdodGVkID0gZmFsc2U7XG4gICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByZXN1bHRzLnJvd3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IHJvdyA9IHJlc3VsdHMucm93c1tpXTtcblxuICAgICAgICAgICAgbGV0IGJvcmRlclN0eWxlID0gJ2JvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTJlMmUyOyc7XG4gICAgICAgICAgICAvLyDlnKjngrnlh7vlm57lpI3miYDlnKjkvY3nva7pq5jkuq5cbiAgICAgICAgICAgIGlmICghKGNyZWF0ZWQgPiByb3cuY3JlYXRlZCkgJiYgaXNHZUJ5UHJldikge1xuICAgICAgICAgICAgICBib3JkZXJTdHlsZSArPSAnYm9yZGVyLXRvcDogMnB4IHNvbGlkJztcbiAgICAgICAgICAgICAgaXNIaWdobGlnaHRlZCA9IHRydWU7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGkgPT09IHJlc3VsdHMucm93cy5sZW5ndGggLSAxICYmICFpc0hpZ2hsaWdodGVkKSB7XG4gICAgICAgICAgICAgIGJvcmRlclN0eWxlID0gJ2JvcmRlci1ib3R0b206IDJweCBzb2xpZCc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBodG1sICs9IGBcbiAgICAgICAgICAgICAgPGRpdiBzdHlsZT1cIiR7Ym9yZGVyU3R5bGV9XCI+XG4gICAgICAgICAgICAgICAgJHskKHJvdy5odG1sKS5maW5kKCcuYWdvJykucGFyZW50KCkucHJvcCgnb3V0ZXJIVE1MJyl9XG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT1cInBhZGRpbmctYm90dG9tOiA1cHhcIj4ke3Jvdy5jb250ZW50X3JlbmRlcmVkfTwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIGA7XG4gICAgICAgICAgICAvLyDlvZPliY3mnaHmmK/lkKbkuLrkuYvliY3nmoTlm57lpI3vvIznlKjkuo7kuIvkuIDmnaHliKTmlq3mmK/lkKbpnIDopoHpq5jkuq5cbiAgICAgICAgICAgIGlzR2VCeVByZXYgPSBjcmVhdGVkID4gcm93LmNyZWF0ZWQ7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdGhpcy53aW5ib3ggPSBuZXcgV2luQm94KHtcbiAgICAgICAgICAgIGNsYXNzOiBzZWxlY3Rvci50YVNheS5zdWJzdHJpbmcoMSksXG4gICAgICAgICAgICB0aXRsZTogdXNlcm5hbWUgKyAnIOivtOS6huS7gOS5iO+8nycsXG4gICAgICAgICAgICB4OiAncmlnaHQnLFxuICAgICAgICAgICAgeTogJ2JvdHRvbScsXG4gICAgICAgICAgICB3aWR0aDogbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RhX3NheV93aWR0aCcpIHx8ICc1NDBweCcsXG4gICAgICAgICAgICBoZWlnaHQ6IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0YV9zYXlfaGVpZ2h0JykgfHwgJzcwJScsXG4gICAgICAgICAgICBodG1sOiBgPGRpdiBzdHlsZT1cInBhZGRpbmc6IDEwcHg7IGZvbnQtc2l6ZTogMTRweFwiPiR7aHRtbH08L2Rpdj5gLFxuICAgICAgICAgICAgb25yZXNpemU6ICh3aWR0aCwgaGVpZ2h0KSA9PiB7XG4gICAgICAgICAgICAgIC8vIOaUueWPmOeql+WPo+Wkp+Wwj+aXtuiusOW9leeql+WPo+Wkp+Wwj1xuICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGFfc2F5X3dpZHRoJywgd2lkdGggKyAncHgnKTtcbiAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RhX3NheV9oZWlnaHQnLCBoZWlnaHQgKyAncHgnKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvbmNsb3NlOiAoKSA9PiB7XG4gICAgICAgICAgICAgIC8vIOWFs+mXreW8ueeql+aXtuWPlua2iOWbnuWkjemrmOS6rlxuICAgICAgICAgICAgICAkcmVwbHkuY3NzKCdib3JkZXInLCAnbm9uZScpO1xuICAgICAgICAgICAgICAkcmVwbHkuY3NzKCdib3JkZXItYm90dG9tJywgJzFweCBzb2xpZCAjZTJlMmUyJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG59XG4iLCIvLyA9PVVzZXJTY3JpcHQ9PVxuLy8gQG5hbWUgICAgICAgICBWMkVYIOS4u+mimOWbnuWkjeWinuW8ulxuLy8gQG5hbWVzcGFjZSAgICBodHRwOi8vdGFtcGVybW9ua2V5Lm5ldC9cbi8vIEB2ZXJzaW9uICAgICAgMC4wLjFcbi8vIEBkZXNjcmlwdGlvbiAg5aKe5by6IFYyRVgg5Li76aKY55qE5Zue5aSN44CCXG4vLyBAYXV0aG9yICAgICAgIGR1YW5sdWFuXG4vLyBAY29weXJpZ2h0ICAgIDIwMjIsIGR1YW5sdWFuIChodHRwczovL2dpdGh1Yi5jb20vZHVhbmx1YW4pXG4vLyBAbGljZW5zZSAgICAgIEFwYWNoZS0yLjA7IGh0dHBzOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjAudHh0XG4vLyBAbWF0Y2ggICAgICAgICo6Ly8qLnYyZXguY29tLypcbi8vIEByZXF1aXJlICAgICAgaHR0cHM6Ly9jZG4uYm9vdGNkbi5uZXQvYWpheC9saWJzL2pxdWVyeS8zLjYuMC9qcXVlcnkubWluLmpzXG4vLyBAcmVxdWlyZSAgICAgIGh0dHBzOi8vY2RuLmJvb3RjZG4ubmV0L2FqYXgvbGlicy9tb21lbnQuanMvMi4yOS40L21vbWVudC13aXRoLWxvY2FsZXMubWluLmpzXG4vLyBAcmVxdWlyZSAgICAgIGh0dHBzOi8vY2RuLmJvb3RjZG4ubmV0L2FqYXgvbGlicy9tb21lbnQuanMvMi4yOS40L2xvY2FsZS96aC1jbi5taW4uanNcbi8vIEByZXF1aXJlICAgICAgaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L25wbS93aW5ib3hAMC4yLjYvZGlzdC93aW5ib3guYnVuZGxlLm1pbi5qc1xuLy8gQHJlc291cmNlIGNzcyBodHRwczovL2Nkbi5ib290Y2RuLm5ldC9hamF4L2xpYnMvbGF5ZXIvMy41LjEvdGhlbWUvZGVmYXVsdC9sYXllci5taW4uY3NzXG4vLyBAcmVxdWlyZSAgICAgIGh0dHBzOi8vY2RuLmJvb3RjZG4ubmV0L2FqYXgvbGlicy9sYXllci8zLjUuMS9sYXllci5taW4uanNcbi8vIEBncmFudCAgICAgICAgR01feG1saHR0cFJlcXVlc3Rcbi8vIEBncmFudCAgICAgICAgR01fZ2V0VmFsdWVcbi8vIEBncmFudCAgICAgICAgR01fc2V0VmFsdWVcbi8vIEBncmFudCAgICAgICAgR01fcmVnaXN0ZXJNZW51Q29tbWFuZFxuLy8gQGdyYW50ICAgICAgICBHTV91bnJlZ2lzdGVyTWVudUNvbW1hbmRcbi8vIEBncmFudCAgICAgICAgR01fZ2V0UmVzb3VyY2VUZXh0XG4vLyBAZ3JhbnQgICAgICAgIEdNX2FkZFN0eWxlXG4vLyA9PS9Vc2VyU2NyaXB0PT1cblxuLy8gPT1PcGVuVXNlckpTPT1cbi8vIEBhdXRob3IgZHVhbmx1YW5cbi8vID09L09wZW5Vc2VySlM9PVxuXG5pbXBvcnQgUmVwbGF5IGZyb20gXCIuL1JlcGxheVwiO1xuaW1wb3J0IE9wdGlvbnMgZnJvbSBcIi4vT3B0aW9uc1wiO1xuXG4oYXN5bmMgKCkgPT4ge1xuICAndXNlIHN0cmljdCc7XG5cbiAgLy8g5Yqg6L29IENTU1xuICBHTV9hZGRTdHlsZShHTV9nZXRSZXNvdXJjZVRleHQoJ2NzcycpKTtcbiAgLy8g6K6+572uIGxheWVyIOWbvuagh1xuICAkKGRvY3VtZW50LmhlYWQpLmFwcGVuZChgPHN0eWxlPlxuICAgIC5sYXl1aS1sYXllci1pY297YmFja2dyb3VuZDp1cmwoJ2h0dHBzOi8vY2RuLmJvb3RjZG4ubmV0L2FqYXgvbGlicy9sYXllci8zLjUuMS90aGVtZS9kZWZhdWx0L2ljb24ucG5nJykgbm8tcmVwZWF0fVxuICAgIC8qIOWOn+agt+W8j+S4jeefpeS4uuS9leS8muWkseaViO+8jOWvvOiHtCBpY29uIOiuvue9ruaXoOaViCAqL1xuICAgIC5sYXl1aS1sYXllci1pY28xe2JhY2tncm91bmQtcG9zaXRpb246LTMwcHggMH1cbiAgICAubGF5dWktbGF5ZXItaWNvMntiYWNrZ3JvdW5kLXBvc2l0aW9uOi02MHB4IDB9XG4gICAgLmxheXVpLWxheWVyLWljbzN7YmFja2dyb3VuZC1wb3NpdGlvbjotOTBweCAwfVxuICAgIC5sYXl1aS1sYXllci1pY280e2JhY2tncm91bmQtcG9zaXRpb246LTEyMHB4IDB9XG4gICAgLmxheXVpLWxheWVyLWljbzV7YmFja2dyb3VuZC1wb3NpdGlvbjotMTUwcHggMH1cbiAgICAubGF5dWktbGF5ZXItaWNvNntiYWNrZ3JvdW5kLXBvc2l0aW9uOi0xODBweCAwfVxuICA8L3N0eWxlPmApO1xuXG4gIE9wdGlvbnMucmVnaXN0ZXJBbGwoKTtcbiAgT3B0aW9ucy5sb2FkSW5WMmV4KCk7XG5cbiAgUmVwbGF5LnJ1bigpO1xufSkoKTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fKDY0OSk7XG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxuX193ZWJwYWNrX3JlcXVpcmVfXyg5MjMpO1xudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDQzOSk7XG4iLCIiXSwibmFtZXMiOlsiU3RvcmUiLCJrZXkiLCJHTV9nZXRWYWx1ZSIsInZhbHVlIiwiR01fc2V0VmFsdWUiLCJNZW51Q21kIiwibmFtZSIsImZuIiwiR01fcmVnaXN0ZXJNZW51Q29tbWFuZCIsIm1lbnVDbWRJZCIsIkdNX3VucmVnaXN0ZXJNZW51Q29tbWFuZCIsIkNvbW1vbk9wdGlvbnMiLCJvcHRpb24iLCJ2YWwiLCJ2YWxJc0Jvb2wiLCJjdXJyZW50TWVudUNtZElkIiwicmVnaXN0ZXIiLCJsYWJlbCIsInNldCIsIkpTT04iLCJzdHJpbmdpZnkiLCJ1bnJlZ2lzdGVyIiwicmVnaXN0ZXJCb29sT3B0aW9uIiwid2luZG93IiwibG9jYXRpb24iLCJyZWxvYWQiLCJ1cmwiLCJvcHRpb25zIiwib3BlbiIsInN0b3JlT3B0aW9uIiwiZ2V0IiwicGFyc2UiLCJ2ZXJzaW9uIiwic2NyaXB0SWQiLCJsb2FkT3B0aW9uQ29udGVudEZuIiwiaG9zdCIsImhyZWYiLCJpbmRleE9mIiwic2VsZWN0b3IiLCJzY3JpcHRMaW5rcyIsInNjcmlwdE9wdGlvbnMiLCJzY3JpcHRDb250ZW50IiwiJGJvZHkiLCIkIiwiZG9jdW1lbnQiLCJib2R5IiwiJHNjcmlwdExpbmtzIiwiJHNjcmlwdENvbnRlbnQiLCJjaGlsZHJlbiIsImFmdGVyIiwib24iLCIkY3VycmVudExpIiwiaHRtbCIsInRleHQiLCJyZW1vdmVDbGFzcyIsIiRzY3JpcHRPcHRpb25zIiwicGFyZW50IiwiYWRkQ2xhc3MiLCJPcHRpb25zIiwicmVnaXN0ZXJBbGwiLCJtZW51VGFiIiwiY3VycmVudE1lbnVUYWIiLCJ2MmV4VG9rZW5JbnB1dCIsInNhdmVPcHRpb25zQnRuIiwiJG1lbnVUYWIiLCJhcHBlbmQiLCIkY3VycmVudE1lbnVUYWIiLCJyZW1vdmUiLCJLZXlzIiwidjJleFRva2VuIiwidG9rZW4iLCJsYXllciIsIm1zZyIsIkh0dHBEYXRhVHlwZSIsIlJlcXVlc3QiLCJzeW5jaHJvbm91cyIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwiR01feG1saHR0cFJlcXVlc3QiLCJvbmxvYWQiLCJyZXNwb25zZSIsImRhdGFUeXBlIiwicmVzcG9uc2VUZXh0Iiwib25lcnJvciIsImVycm9yIiwib25sb2FkMSIsImRldGFpbHMiLCJJbmZvIiwiR01faW5mbyIsInNjcmlwdCIsIlYyZXgiLCJpY29uIiwib2Zmc2V0IiwiQkFTRV9VUkwiLCJoZWFkZXJzIiwicmVzdWx0IiwiZ2V0TmFtZSIsInRpbWUiLCJ0b3BpY0lkIiwicGFnZSIsImNvbnNvbGUiLCJ3YXJuIiwiUmVwbGF5IiwiY2hlY2tUb2tlbiIsInJlcGxpZXNCb3giLCJhbGxSZXBsaWVzIiwicmVwbGllc051bWJlciIsIm9wVXNlck5hbWUiLCJhdExpbmsiLCJ0YVNheSIsIiRoZWFkIiwiaGVhZCIsIiRhbGxSZXBsaWVzIiwiJHJlcGxpZXNOdW1iZXIiLCIkb3BVc2VyTmFtZSIsImhpZGUiLCJzdWJzdHJpbmciLCJyZXBsaWVzIiwiaSIsIk1hdGgiLCJjZWlsIiwiTnVtYmVyIiwicHVzaCIsImdldFJlcGxpZXMiLCJkYiIsIm9wZW5EYXRhYmFzZSIsImdldFZlcnNpb24iLCJ0cmFuc2FjdGlvbiIsInR4IiwiZXhlY3V0ZVNxbCIsInN0YXJ0IiwicmVwbHkiLCJyZXBseUlkIiwiaWQiLCJjcmVhdGVkIiwiY3JlYXRlZDEiLCJjcmVhdGVkRm9ybWF0IiwibW9tZW50IiwiZm9ybWF0IiwiY3JlYXRlZEFnbyIsImZyb21Ob3ciLCJtZW1iZXIiLCJ1c2VybmFtZSIsImF2YXRhciIsInJlcGx5RGl2SWQiLCIkcmVwbHlEaXZJZCIsIiRmYWRlIiwiZmluZCIsImZhZGVIdG1sIiwibGVuZ3RoIiwicHJvcCIsImNvbnRlbnRSZW5kZXJlZCIsImNvbnRlbnRfcmVuZGVyZWQiLCJhdFNlYXJjaFN0YXJ0SW5kZXgiLCJhdFNlYXJjaFN0ciIsImF0TGlua0luZGV4IiwiYXRVc2VybmFtZSIsInJlcGxhY2VTdHIiLCJyZXBsYWNlQWxsIiwib25jZSIsInNob3dSZXBsaWVzIiwicmVzdWx0cyIsInJvd3MiLCJyb3ciLCIkdGhpcyIsInNob3dUYVNheSIsImRhdGEiLCJ3aW5ib3giLCJjbG9zZSIsImxvZyIsIiRyZXBseSIsImNzcyIsImFuaW1hdGUiLCJzY3JvbGxUb3AiLCJ0b3AiLCJoZWlnaHQiLCJpc0dlQnlQcmV2IiwiaXNIaWdobGlnaHRlZCIsImJvcmRlclN0eWxlIiwiV2luQm94IiwidGl0bGUiLCJ4IiwieSIsIndpZHRoIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsIm9ucmVzaXplIiwic2V0SXRlbSIsIm9uY2xvc2UiLCJHTV9hZGRTdHlsZSIsIkdNX2dldFJlc291cmNlVGV4dCIsImxvYWRJblYyZXgiLCJydW4iXSwic291cmNlUm9vdCI6IiJ9