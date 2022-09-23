/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 718:
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


;// CONCATENATED MODULE: ./core-socialist-values/src/Options.ts
function Options_createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = Options_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function Options_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return Options_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Options_arrayLikeToArray(o, minLen); }

function Options_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function Options_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Options_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Options_createClass(Constructor, protoProps, staticProps) { if (protoProps) Options_defineProperties(Constructor.prototype, protoProps); if (staticProps) Options_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var Options = /*#__PURE__*/function () {
  function Options() {
    Options_classCallCheck(this, Options);
  }

  Options_createClass(Options, null, [{
    key: "registerBoolOption",
    value:
    /**
     * 选项 Key
     */

    /**
     * 选项
     * @private
     */

    /**
     * 注册 bool 类型的选项
     * @param option 选项
     */
    function registerBoolOption(option) {
      CommonOptions.registerBoolOption(option);
    }
    /**
     * 注册所有选项
     */

  }, {
    key: "registerAll",
    value: function registerAll() {
      CommonOptions.registerAll('https://greasyfork.org/scripts/' + this.SCRIPT_ID, this.options);
    }
    /**
     * 在页面中加载选项
     */

  }, {
    key: "loadInGreasyfork",
    value: function loadInGreasyfork() {
      var _this = this;

      CommonOptions.loadInGreasyfork(this.SCRIPT_ID, function ($scriptContent) {
        // 添加脚本设置的内容
        var scriptContent = '';

        var _iterator = Options_createForOfIteratorHelper(_this.options),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var option = _step.value;
            var storeOption = JSON.parse(Store/* default.get */.Z.get(option.name)),
                optionName = storeOption.name,
                optionVal = storeOption.value;
            scriptContent += "<h3>".concat(option.label, "</h3>");

            switch (optionName) {
              case _this.Keys.removeBar:
                scriptContent += "<label><input type=\"checkbox\" id=\"script-options-".concat(optionName, "\" ").concat(optionVal ? 'checked' : '', "> \u662F\u5426\u9690\u85CF\u6761\u5E45\uFF08\u52FE\u9009\u540E\u5C06\u9690\u85CF\u6761\u5E45\u800C\u4E0D\u662F\u66FF\u6362\u5176\u5185\u5BB9\uFF09</label>");
                break;

              case _this.Keys.jinrishici:
                scriptContent += "<label><input type=\"checkbox\" id=\"script-options-".concat(optionName, "-enabled\" ").concat(optionVal ? 'checked' : '', "> \u542F\u7528<a href=\"https://www.jinrishici.com\" target = \"_blank\">\u4ECA\u65E5\u8BD7\u8BCD</a>\uFF08\u4ECD\u9700\u53D6\u6D88\u52FE\u9009\u201C\u662F\u5426\u9690\u85CF\u6761\u5E45\u201D\u624D\u80FD\u751F\u6548\uFF09</label>");
                break;
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }

        $scriptContent.html(scriptContent);
        var $body = $(document.body); // region 添加脚本设置的事件
        // 是否隐藏条幅

        var optionSelector = '#script-options-' + _this.Keys.removeBar;
        $body.on('change', optionSelector, function () {
          var removeBarOption = JSON.parse(Store/* default.get */.Z.get(_this.Keys.removeBar));
          removeBarOption.value = !removeBarOption.value; // 重新注册菜单

          MenuCmd.unregister(removeBarOption.menuCmdId);

          _this.registerBoolOption(removeBarOption);
        }); // 启用今日诗词

        optionSelector = '#script-options-' + _this.Keys.jinrishici + '-enabled';
        $body.on('change', optionSelector, function () {
          var jinrishiciOption = JSON.parse(Store/* default.get */.Z.get(_this.Keys.jinrishici));
          jinrishiciOption.value = !jinrishiciOption.value; // 重新注册菜单

          MenuCmd.unregister(jinrishiciOption.menuCmdId);

          _this.registerBoolOption(jinrishiciOption);
        }); // endregion
      });
    }
  }]);

  return Options;
}();

_defineProperty(Options, "SCRIPT_ID", 440854);

_defineProperty(Options, "Keys", {
  removeBar: 'removeBar',
  jinrishici: 'jinrishici'
});

_defineProperty(Options, "options", [{
  label: '隐藏条幅',
  name: Options.Keys.removeBar,
  version: 1,
  value: false,
  menuCmdId: null
}, {
  label: '今日诗词',
  name: Options.Keys.jinrishici,
  version: 1,
  value: false,
  menuCmdId: null,
  token: ''
}]);



/***/ }),

/***/ 306:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {


;// CONCATENATED MODULE: ./core-socialist-values/src/websites/junit/Junit.ts
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Junit = /*#__PURE__*/function () {
  function Junit() {
    _classCallCheck(this, Junit);
  }

  _createClass(Junit, null, [{
    key: "replace",
    value: function replace() {
      if (location.href === 'https://junit.org/junit5/') {
        $(this.selectors.junitAbout).prevAll().remove();
        $(this.selectors.junitLogo).attr('src', this.junitLogoUrl);
        $(this.selectors.junitFavicon).attr('href', this.junitLogoUrl);
      }
    }
  }]);

  return Junit;
}();

_defineProperty(Junit, "selectors", {
  junitAbout: '#about',
  junitLogo: 'img[src="/junit5/assets/img/junit5-logo.png"]',
  junitFavicon: 'link[rel="icon"]'
});

_defineProperty(Junit, "junitLogoUrl", 'https://raw.iqiq.io/duanluan/tampermonkey-scripts/main/core-socialist-values/src/junit/imgs/junit5-logo.png');


// EXTERNAL MODULE: ./utils/src/gm/Store.ts
var Store = __webpack_require__(458);
;// CONCATENATED MODULE: ./utils/src/gm/enum/HttpDataType.ts
var HttpDataType;

(function (HttpDataType) {
  HttpDataType["JSON"] = "JSON";
})(HttpDataType || (HttpDataType = {}));
;// CONCATENATED MODULE: ./utils/src/gm/Request.ts
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { Request_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function Request_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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


// EXTERNAL MODULE: ./core-socialist-values/src/Options.ts + 2 modules
var Options = __webpack_require__(718);
;// CONCATENATED MODULE: ./core-socialist-values/src/common/Bar.ts
function Bar_typeof(obj) { "@babel/helpers - typeof"; return Bar_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, Bar_typeof(obj); }

function Bar_regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ Bar_regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == Bar_typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function Bar_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function Bar_asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { Bar_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { Bar_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function Bar_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Bar_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Bar_createClass(Constructor, protoProps, staticProps) { if (protoProps) Bar_defineProperties(Constructor.prototype, protoProps); if (staticProps) Bar_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function Bar_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






var Bar = /*#__PURE__*/function () {
  function Bar() {
    Bar_classCallCheck(this, Bar);
  }

  Bar_createClass(Bar, null, [{
    key: "replace",
    value:
    /**
     * 替换条幅的选择器
     */

    /**
     * 替换后的条幅去除空格换行后的文本
     * @private
     */

    /**
     * 是否启用今日诗词
     * @private
     */

    /**
     * 今日诗词内容
     * @private
     */

    /**
     * 替换条幅
     * @param options {
     *   barSelector: string,              // 条幅选择器
     *   isObserveBar: boolean,            // 是否监听条幅变化，会监听两次变化，重新替换。配合 followUpObserveSelector 后续监听
     *   followUpObserveSelector?: string, // 后续监听选择器，即条幅替换后有可能会再变回原样，此处就是再监听的父级选择器，isObserveBar 为 true 时生效
     *   hideBarSelector: string,          // 隐藏条幅选择器
     *   isObserveHideBar: boolean,        // 是否监听隐藏条幅变化，会监听两次变化，重新隐藏。
     *   replaceBarCallback?: Function,    // 每次替换后回调
     *   jinrishiciCallback?: Function,    // 每次替换为今日诗词后回调
     *   hideBarCallback? Function         // 隐藏后回调
     * }
     */
    function replace(options) {
      var _this = this;

      if (!$(options.barSelector).text().match(/ukraine|乌克兰|black|黑人/i)) {
        return;
      } // 如果移除横幅


      if (JSON.parse(Store/* default.get */.Z.get(Options/* default.Keys.removeBar */.Z.Keys.removeBar)).value) {
        // 隐藏横幅
        $(options.hideBarSelector).hide();

        if (options.isObserveHideBar) {
          var i = 0; // 隐藏条幅首次加载：监听条幅变化，变化后再次执行

          var observer = new MutationObserver(function () {
            $(options.hideBarSelector).hide(); // 替换两次后结束监听

            if (i >= 1) {
              observer.disconnect();
            }

            i++;
          });
          observer.observe($(options.hideBarSelector)[0], {
            childList: true,
            subtree: true
          });
        }

        if (options.hideBarCallback) {
          options.hideBarCallback();
        }

        return;
      }

      this.storeJinrishiciVal = JSON.parse(Store/* default.get */.Z.get(Options/* default.Keys.jinrishici */.Z.Keys.jinrishici)).value;

      if (this.storeJinrishiciVal) {
        this.getJinrishici().then(function (data) {
          _this.jinrishiciContent = data;

          _this.replaceObserver(options);
        });
      } else {
        this.replaceObserver(options);
      }
    }
    /**
     * 替换条幅监听
     * @param options
     * @private
     */

  }, {
    key: "replaceObserver",
    value: function replaceObserver(options) {
      var _this2 = this;

      // 首次替换横幅
      this.replaceBar(options.barSelector, options.replaceBarCallback, options.jinrishiciCallback);

      if (!options.isObserveBar) {
        return;
      }

      var i = 0; // 条幅首次加载：监听条幅变化，变化后再次执行

      var observer = new MutationObserver(function () {
        _this2.replaceBar(options.barSelector, options.replaceBarCallback, options.jinrishiciCallback); // 替换两次后结束监听


        if (i >= 1) {
          observer.disconnect();
        }

        i++;
      });
      observer.observe($(options.barSelector)[0], {
        childList: true
      });

      if (options.followUpObserveSelector) {
        // 后续变化
        new MutationObserver(function () {
          _this2.replaceBar(options.barSelector, options.replaceBarCallback, options.jinrishiciCallback);
        }).observe($(options.followUpObserveSelector)[0], {
          childList: true
        });
      }
    }
    /**
     * 实际替换条幅
     * @param selector 条幅选择器
     * @param replaceBarCallback 替换后回调
     * @param jinrishiciCallback 替换为今日诗词后回调
     * @private
     */

  }, {
    key: "replaceBar",
    value: function replaceBar(selector, replaceBarCallback, jinrishiciCallback) {
      if ($($(selector)[0]).text().replace(/\s+/g, "") === Bar.txt) {
        return;
      }

      if (this.storeJinrishiciVal) {
        $(selector).css({
          'minHeight': '30px',
          'lineHeight': '30px'
        });
        $(selector).html("\n        <div class=\"csv_bar\">\n          ".concat(this.jinrishiciContent, "\n        </div>"));

        if (jinrishiciCallback) {
          jinrishiciCallback();
        }

        return;
      }

      $(selector).css({
        'minHeight': '40px'
      });
      $(selector).html("\n        <div class=\"csv_bar\">\n          <ul class='csv_bar_ul'><li>\u5BCC\u5F3A</li><li>\u6C11\u4E3B</li><li>\u6587\u660E</li><li>\u548C\u8C10</li><li>\u81EA\u7531</li><li>\u5E73\u7B49</li><li>\u516C\u6B63</li><li>\u6CD5\u6CBB</li><li>\u7231\u56FD</li><li>\u656C\u4E1A</li><li>\u8BDA\u4FE1</li><li>\u53CB\u5584</li></ul><br>\n          <ul class='csv_bar_ul'><li>Prosperity</li><li>Democracy</li><li>Civility</li><li>Harmony</li><li>Freedom</li><li>Equality</li><li>Justice</li><li>Rule of law</li><li>Patriotism</li><li>Dedication</li><li>Integrity</li><li>Friendship</li>\n          </ul>\n        </div>"); // 避免出现多个导致样式添加失败

      var $bar = $(this.replaceBarSelector.bar);

      if ($bar.length == 2) {
        $bar.eq(0).remove();
      }

      var barUlSelector = this.replaceBarSelector.barUl;
      $(barUlSelector).css({
        'display': 'inline-block',
        'listStyle': 'none',
        'margin': 0,
        'padding': 0,
        'width': 'auto'
      });
      $(barUlSelector + ' li').css({
        'color': '#DE2910',
        'fontWeight': 'bold',
        'fontFamily': 'KaiTi',
        'float': 'left',
        'paddingRight': '10px',
        'min-width': '80px',
        'textAlign': 'center'
      });
      $(barUlSelector + ':first').css('verticalAlign', 'bottom');
      $(barUlSelector + ':first li').css('fontSize', '18px');
      $(barUlSelector + ':eq(1) li').css('fontSize', '13px');

      if (replaceBarCallback) {
        replaceBarCallback();
      }
    }
    /**
     * 获取今日诗词
     * @private
     */

  }, {
    key: "getJinrishici",
    value: function () {
      var _getJinrishici = Bar_asyncToGenerator( /*#__PURE__*/Bar_regeneratorRuntime().mark(function _callee() {
        var jinrishiciOption, response;
        return Bar_regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                jinrishiciOption = JSON.parse(Store/* default.get */.Z.get(Options/* default.Keys.jinrishici */.Z.Keys.jinrishici));

                if (jinrishiciOption.value) {
                  _context.next = 3;
                  break;
                }

                return _context.abrupt("return");

              case 3:
                _context.next = 5;
                return Request.get({
                  url: 'https://v2.jinrishici.com/one.json',
                  dataType: HttpDataType.JSON,
                  // headers: {
                  //   'X-User-Token': jinrishiciOption.token,
                  // },
                  synchronous: true
                });

              case 5:
                response = _context.sent;

                if (!response || response.status !== 'success') {
                  console.error('今日诗词获取失败', response);
                } // // 存储 Token
                // if (jinrishiciOption.token !== response.data.token) {
                //   jinrishiciOption.token = response.data.token;
                //   Store.set(Options.Keys.jinrishici, JSON.stringify(jinrishiciOption));
                // }


                return _context.abrupt("return", response.data.content + ' —— ' + response.data.origin.author + '《' + response.data.origin.title + '》');

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function getJinrishici() {
        return _getJinrishici.apply(this, arguments);
      }

      return getJinrishici;
    }()
  }]);

  return Bar;
}();

Bar_defineProperty(Bar, "replaceBarSelector", {
  bar: '.csv_bar',
  barUl: '.csv_bar .csv_bar_ul'
});

Bar_defineProperty(Bar, "txt", '富强民主文明和谐自由平等公正法治爱国敬业诚信友善ProsperityDemocracyCivilityHarmonyFreedomEqualityJusticeRuleoflawPatriotismDedicationIntegrityFriendship');

Bar_defineProperty(Bar, "storeJinrishiciVal", false);

Bar_defineProperty(Bar, "jinrishiciContent", '');


;// CONCATENATED MODULE: ./core-socialist-values/src/websites/react/React.ts
function React_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function React_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function React_createClass(Constructor, protoProps, staticProps) { if (protoProps) React_defineProperties(Constructor.prototype, protoProps); if (staticProps) React_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function React_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var React = /*#__PURE__*/function () {
  function React() {
    React_classCallCheck(this, React);
  }

  React_createClass(React, null, [{
    key: "replace",
    value: function replace() {
      var _this = this;

      if (location.host === 'reactjs.org') {
        Bar.replace({
          barSelector: this.selectors.bar,
          isObserveBar: true,
          hideBarSelector: this.selectors.hideBar,
          isObserveHideBar: false,
          followUpObserveSelector: this.selectors.followUpObserveElement,
          hideBarCallback: function hideBarCallback() {
            $(_this.selectors.excludeHeader).css('margin-top', '60px');
          }
        });
      }
    }
  }]);

  return React;
}();

React_defineProperty(React, "selectors", {
  bar: '.css-lpiycv',
  hideBar: '.css-1loxuh3',
  followUpObserveElement: '#gatsby-focus-wrapper',
  excludeHeader: '.css-xbsqlp'
});


;// CONCATENATED MODULE: ./core-socialist-values/src/websites/angular/Angular.ts
function Angular_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Angular_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Angular_createClass(Constructor, protoProps, staticProps) { if (protoProps) Angular_defineProperties(Constructor.prototype, protoProps); if (staticProps) Angular_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function Angular_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Angular = /*#__PURE__*/function () {
  function Angular() {
    Angular_classCallCheck(this, Angular);
  }

  Angular_createClass(Angular, null, [{
    key: "replace",
    value: function replace() {
      if (location.host === 'angular.io') {
        // 不存在是否关闭通知的本地存储时
        if (!localStorage.getItem('aio-notification/war-ukraine')) {
          // 如果通知中存在关键词
          var $bar = $(this.selectors.bar);

          if ($bar.length > 0 && $bar.text().toLowerCase().indexOf('ukraine') != -1) {
            // 点击关闭通知
            $(this.selectors.dismissNotificationBtn)[0].click();
          }
        }
      }
    }
  }]);

  return Angular;
}();

Angular_defineProperty(Angular, "selectors", {
  bar: '.mat-toolbar-row.notification-container',
  dismissNotificationBtn: 'button[aria-label="Dismiss notification"]'
});


;// CONCATENATED MODULE: ./core-socialist-values/src/websites/codecept/Codecept.ts
function Codecept_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Codecept_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Codecept_createClass(Constructor, protoProps, staticProps) { if (protoProps) Codecept_defineProperties(Constructor.prototype, protoProps); if (staticProps) Codecept_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function Codecept_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var Codecept = /*#__PURE__*/function () {
  function Codecept() {
    Codecept_classCallCheck(this, Codecept);
  }

  Codecept_createClass(Codecept, null, [{
    key: "replace",
    value: function replace() {
      var _this = this;

      if (location.host === 'codecept.io') {
        Bar.replace({
          barSelector: this.selectors.bar,
          isObserveBar: false,
          hideBarSelector: this.selectors.hideBar,
          isObserveHideBar: false,
          jinrishiciCallback: function jinrishiciCallback() {
            $(_this.selectors.bar).css('color', '#edf2f7');
          }
        });
      }
    }
  }]);

  return Codecept;
}();

Codecept_defineProperty(Codecept, "selectors", {
  bar: '.sub-bar .message',
  hideBar: '.sub-bar'
});


;// CONCATENATED MODULE: ./core-socialist-values/src/websites/github/Github.ts
function Github_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Github_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Github_createClass(Constructor, protoProps, staticProps) { if (protoProps) Github_defineProperties(Constructor.prototype, protoProps); if (staticProps) Github_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function Github_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Github = /*#__PURE__*/function () {
  function Github() {
    Github_classCallCheck(this, Github);
  }

  Github_createClass(Github, null, [{
    key: "replace",
    value: function replace() {
      if (location.href === 'https://github.com/') {
        var $notice = $(this.selectors.notice);

        if ($notice.length > 0 && $notice.text().toLowerCase().indexOf('ukraine') != -1) {
          $notice.remove();
        }
      }
    }
  }]);

  return Github;
}();

Github_defineProperty(Github, "selectors", {
  notice: '.border.js-notice'
});


;// CONCATENATED MODULE: ./core-socialist-values/src/websites/nest/Nest.ts
function Nest_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Nest_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Nest_createClass(Constructor, protoProps, staticProps) { if (protoProps) Nest_defineProperties(Constructor.prototype, protoProps); if (staticProps) Nest_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function Nest_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var Nest_Codecept = /*#__PURE__*/function () {
  function Codecept() {
    Nest_classCallCheck(this, Codecept);
  }

  Nest_createClass(Codecept, null, [{
    key: "replace",
    value: function replace() {
      var _this = this;

      if (location.host === 'docs.nestjs.com') {
        Bar.replace({
          barSelector: this.selectors.bar,
          isObserveBar: false,
          hideBarSelector: this.selectors.bar,
          isObserveHideBar: false,
          replaceBarCallback: function replaceBarCallback() {
            $(_this.selectors.bar).css('padding', '0');
          },
          jinrishiciCallback: function jinrishiciCallback() {
            $(_this.selectors.bar).css('color', '#fff');
          }
        });
      }
    }
  }]);

  return Codecept;
}();

Nest_defineProperty(Nest_Codecept, "selectors", {
  bar: '.top-bar'
});


;// CONCATENATED MODULE: ./core-socialist-values/src/websites/ember/Ember.ts
function Ember_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Ember_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Ember_createClass(Constructor, protoProps, staticProps) { if (protoProps) Ember_defineProperties(Constructor.prototype, protoProps); if (staticProps) Ember_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function Ember_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var Ember = /*#__PURE__*/function () {
  function Ember() {
    Ember_classCallCheck(this, Ember);
  }

  Ember_createClass(Ember, null, [{
    key: "replace",
    value: function replace() {
      var _this = this;

      if (location.host === 'emberjs.com') {
        Bar.replace({
          barSelector: this.selectors.bar,
          isObserveBar: false,
          hideBarSelector: this.selectors.bar,
          isObserveHideBar: false,
          jinrishiciCallback: function jinrishiciCallback() {
            $(_this.selectors.bar).css('color', '#fff');
          }
        });
        $(this.selectors.bar).css({
          'backgroundColor': '#1c1e24',
          'padding': 0
        });
      }
    }
  }]);

  return Ember;
}();

Ember_defineProperty(Ember, "selectors", {
  bar: '.callout-banner'
});


;// CONCATENATED MODULE: ./core-socialist-values/src/websites/electron/Electron.ts
function Electron_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Electron_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Electron_createClass(Constructor, protoProps, staticProps) { if (protoProps) Electron_defineProperties(Constructor.prototype, protoProps); if (staticProps) Electron_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function Electron_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var Electron = /*#__PURE__*/function () {
  function Electron() {
    Electron_classCallCheck(this, Electron);
  }

  Electron_createClass(Electron, null, [{
    key: "replace",
    value: function replace() {
      if (location.host === 'www.electronjs.org') {
        Bar.replace({
          barSelector: this.selectors.bar,
          isObserveBar: false,
          hideBarSelector: this.selectors.bar,
          isObserveHideBar: false,
          replaceBarCallback: function replaceBarCallback() {
            $(Bar.replaceBarSelector.barUl + ':eq(0)').css('height', '25px');
            $(Bar.replaceBarSelector.barUl + ':eq(1)').css('height', '20px');
          }
        });
        $(this.selectors.bar).css({
          'padding': 0
        });
      }
    }
  }]);

  return Electron;
}();

Electron_defineProperty(Electron, "selectors", {
  bar: '.announcement-banner'
});


;// CONCATENATED MODULE: ./core-socialist-values/src/websites/jenkins/Jenkins.ts
function Jenkins_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Jenkins_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Jenkins_createClass(Constructor, protoProps, staticProps) { if (protoProps) Jenkins_defineProperties(Constructor.prototype, protoProps); if (staticProps) Jenkins_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function Jenkins_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Jenkins_Angular = /*#__PURE__*/function () {
  function Angular() {
    Jenkins_classCallCheck(this, Angular);
  }

  Jenkins_createClass(Angular, null, [{
    key: "replace",
    value: function replace() {
      if (location.host === 'www.jenkins.io') {
        // 替换图标
        $(this.selectors.logo).replaceWith("<img src=\"/images/logos/jenkins/Jenkins.svg\">"); // 删除通知

        $(this.selectors.pageTitle).nextAll("p").each(function (i, el) {
          var $el = $(el);

          if ($el.text().toLowerCase().indexOf('ukraine') != -1) {
            $el.remove();
          }
        });
        $(this.selectors.pageTitle).parent().append('<br><br><br>');
      }
    }
  }]);

  return Angular;
}();

Jenkins_defineProperty(Jenkins_Angular, "selectors", {
  logo: 'img[src="/images/logos/jenkins/Jenkins-stop-the-war.svg"]',
  pageTitle: '.page-title'
});


;// CONCATENATED MODULE: ./core-socialist-values/src/websites/svelte/Svelte.ts
function Svelte_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Svelte_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Svelte_createClass(Constructor, protoProps, staticProps) { if (protoProps) Svelte_defineProperties(Constructor.prototype, protoProps); if (staticProps) Svelte_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function Svelte_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var Svelte = /*#__PURE__*/function () {
  function Svelte() {
    Svelte_classCallCheck(this, Svelte);
  }

  Svelte_createClass(Svelte, null, [{
    key: "replace",
    value: function replace() {
      var _this = this;

      if (location.host === 'svelte.dev') {
        var $navSpot = $(this.selectors.navSpot);
        var i = 0; // 监听条幅变化，变化后再次执行

        var observer = new MutationObserver(function () {
          if ($navSpot.length > 0) {
            // 替换 Logo
            $navSpot.attr('style', _this.svelteLogoStyle); // 替换两次后结束监听

            if (i >= 1) {
              observer.disconnect();
            }

            i++;
          }
        });
        observer.observe($(this.selectors.observing)[0], {
          childList: true
        }); // 底部横幅

        Bar.replace({
          barSelector: this.selectors.bar,
          isObserveBar: true,
          hideBarSelector: this.selectors.bar,
          isObserveHideBar: true,
          replaceBarCallback: function replaceBarCallback() {
            $(_this.selectors.bar).css({
              'backgroundColor': '#1c1e24',
              'paddingTop': '20px'
            });
          }
        });
      }
    }
  }]);

  return Svelte;
}();

Svelte_defineProperty(Svelte, "selectors", {
  navSpot: '.nav-spot',
  bar: '.ukr',
  barHeight: ':root',
  barHeightAttrName: '--ukr-footer-height',
  observing: '#main'
});

Svelte_defineProperty(Svelte, "svelteLogoStyle", 'background-image: url(https://svelte.dev/svelte-logo-horizontal.svg)');


;// CONCATENATED MODULE: ./core-socialist-values/src/websites/sveltematerialui/SvelteMaterialUi.ts
function SvelteMaterialUi_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function SvelteMaterialUi_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function SvelteMaterialUi_createClass(Constructor, protoProps, staticProps) { if (protoProps) SvelteMaterialUi_defineProperties(Constructor.prototype, protoProps); if (staticProps) SvelteMaterialUi_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function SvelteMaterialUi_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var SvelteMaterialUi = /*#__PURE__*/function () {
  function SvelteMaterialUi() {
    SvelteMaterialUi_classCallCheck(this, SvelteMaterialUi);
  }

  SvelteMaterialUi_createClass(SvelteMaterialUi, null, [{
    key: "replace",
    value: function replace() {
      if (location.host === 'sveltematerialui.com') {
        $(this.selectors.bar).attr('class', '');
      }
    }
  }]);

  return SvelteMaterialUi;
}();

SvelteMaterialUi_defineProperty(SvelteMaterialUi, "selectors", {
  bar: '.ukraine'
});


;// CONCATENATED MODULE: ./core-socialist-values/src/websites/syncthing/Syncthing.ts
function Syncthing_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Syncthing_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Syncthing_createClass(Constructor, protoProps, staticProps) { if (protoProps) Syncthing_defineProperties(Constructor.prototype, protoProps); if (staticProps) Syncthing_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function Syncthing_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var Syncthing = /*#__PURE__*/function () {
  function Syncthing() {
    Syncthing_classCallCheck(this, Syncthing);
  }

  Syncthing_createClass(Syncthing, null, [{
    key: "replace",
    value: function replace() {
      var _this = this;

      if (location.host === 'syncthing.net') {
        Bar.replace({
          barSelector: this.selectors.bar,
          isObserveBar: false,
          hideBarSelector: this.selectors.bar,
          isObserveHideBar: false,
          replaceBarCallback: function replaceBarCallback() {
            $(_this.selectors.bar).css('textAlign', 'center');
          }
        });
      }
    }
  }]);

  return Syncthing;
}();

Syncthing_defineProperty(Syncthing, "selectors", {
  bar: '.alert'
});


;// CONCATENATED MODULE: ./core-socialist-values/src/main.ts
// ==UserScript==
// @name         技术远离政治
// @namespace    http://tampermonkey.net/
// @version      1.3.1
// @description  移除政治相关条幅或替换为社会主义核心价值观、今日诗词，替换政治相关 Logo 为原版 Logo，去除政治相关通知，让技术远离政治。
// @author       duanluan
// @copyright    2022, duanluan (https://github.com/duanluan)
// @license      Apache-2.0; https://www.apache.org/licenses/LICENSE-2.0.txt
// @match        *://reactjs.org/*
// @match        *://angular.io/*
// @match        *://junit.org/*
// @match        *://codecept.io/*
// @match        *://github.com/*
// @match        *://docs.nestjs.com/*
// @match        *://emberjs.com/*
// @match        *://www.electronjs.org/*
// @match        *://www.jenkins.io/*
// @match        *://svelte.dev/*
// @match        *://sveltematerialui.com/*
// @match        *://syncthing.net/*
// @match        *://greasyfork.org/*
// @require      https://cdn.bootcdn.net/ajax/libs/jquery/3.6.0/jquery.slim.min.js
// @grant        GM_getValue
// @grant        GM_setValue
// @grant        GM_registerMenuCommand
// @grant        GM_unregisterMenuCommand
// @grant        GM_xmlhttpRequest
// ==/UserScript==
// ==OpenUserJS==
// @author       duanluan
// @updateURL    https://raw.iqiq.io/duanluan/tampermonkey-scripts/main/core-socialist-values/dist/main.js
// ==/OpenUserJS==














(function () {
  'use strict';

  Options/* default.registerAll */.Z.registerAll();
  Options/* default.loadInGreasyfork */.Z.loadInGreasyfork();
  React.replace();
  Angular.replace();
  Junit.replace();
  Codecept.replace();
  Github.replace();
  Nest_Codecept.replace();
  Ember.replace();
  Electron.replace();
  Jenkins_Angular.replace();
  Svelte.replace();
  SvelteMaterialUi.replace();
  Syncthing.replace();
})();

/***/ }),

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
/******/ 	__webpack_require__(306);
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__(718);
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtFQUVBOEUsYUFBQTtFQUNBSSxlQUFBO0VBQ0FyRSxhQUFBO0VBQ0EyRSxnQkFBQTtFQUNBQyxjQUFBO0VBQ0FzQixxQkFBQTtFQUNBbkIsYUFBQTtFQUNBQyxnQkFBQTtFQUNBbUIsdUJBQUE7RUFDQVYsY0FBQTtFQUNBTyx3QkFBQTtFQUNBQyxpQkFBQTtBQUNELENBbEJEOzs7Ozs7Ozs7Ozs7Ozs7O0FDaERBO0FBQ0E7QUFDQTtJQUNxQi9KOzs7Ozs7OztJQUVuQjtBQUNGO0FBQ0E7QUFDQTtJQUNFLGFBQVdrSyxHQUFYLEVBQTZCO01BQzNCLE9BQU9DLFdBQVcsQ0FBQ0QsR0FBRCxDQUFsQjtJQUNEO0lBRUQ7QUFDRjtBQUNBO0FBQ0E7QUFDQTs7OztXQUNFLGFBQVdBLEdBQVgsRUFBd0I5SixLQUF4QixFQUFvQztNQUNsQ2dLLFdBQVcsQ0FBQ0YsR0FBRCxFQUFNOUosS0FBTixDQUFYO0lBQ0Q7Ozs7Ozs7Ozs7OztVQ3BCSDtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztVRUFBO1VBQ0E7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90YW1wZXJtb25rZXktc2NyaXB0LXV0aWxzLy4vdXRpbHMvc3JjL2dtL01lbnVDbWQudHMiLCJ3ZWJwYWNrOi8vdGFtcGVybW9ua2V5LXNjcmlwdC11dGlscy8uL3V0aWxzL3NyYy9Db21tb25PcHRpb25zLnRzIiwid2VicGFjazovL3RhbXBlcm1vbmtleS1zY3JpcHQtdXRpbHMvLi9jb3JlLXNvY2lhbGlzdC12YWx1ZXMvc3JjL09wdGlvbnMudHMiLCJ3ZWJwYWNrOi8vdGFtcGVybW9ua2V5LXNjcmlwdC11dGlscy8uL2NvcmUtc29jaWFsaXN0LXZhbHVlcy9zcmMvd2Vic2l0ZXMvanVuaXQvSnVuaXQudHMiLCJ3ZWJwYWNrOi8vdGFtcGVybW9ua2V5LXNjcmlwdC11dGlscy8uL3V0aWxzL3NyYy9nbS9lbnVtL0h0dHBEYXRhVHlwZS50cyIsIndlYnBhY2s6Ly90YW1wZXJtb25rZXktc2NyaXB0LXV0aWxzLy4vdXRpbHMvc3JjL2dtL1JlcXVlc3QudHMiLCJ3ZWJwYWNrOi8vdGFtcGVybW9ua2V5LXNjcmlwdC11dGlscy8uL2NvcmUtc29jaWFsaXN0LXZhbHVlcy9zcmMvY29tbW9uL0Jhci50cyIsIndlYnBhY2s6Ly90YW1wZXJtb25rZXktc2NyaXB0LXV0aWxzLy4vY29yZS1zb2NpYWxpc3QtdmFsdWVzL3NyYy93ZWJzaXRlcy9yZWFjdC9SZWFjdC50cyIsIndlYnBhY2s6Ly90YW1wZXJtb25rZXktc2NyaXB0LXV0aWxzLy4vY29yZS1zb2NpYWxpc3QtdmFsdWVzL3NyYy93ZWJzaXRlcy9hbmd1bGFyL0FuZ3VsYXIudHMiLCJ3ZWJwYWNrOi8vdGFtcGVybW9ua2V5LXNjcmlwdC11dGlscy8uL2NvcmUtc29jaWFsaXN0LXZhbHVlcy9zcmMvd2Vic2l0ZXMvY29kZWNlcHQvQ29kZWNlcHQudHMiLCJ3ZWJwYWNrOi8vdGFtcGVybW9ua2V5LXNjcmlwdC11dGlscy8uL2NvcmUtc29jaWFsaXN0LXZhbHVlcy9zcmMvd2Vic2l0ZXMvZ2l0aHViL0dpdGh1Yi50cyIsIndlYnBhY2s6Ly90YW1wZXJtb25rZXktc2NyaXB0LXV0aWxzLy4vY29yZS1zb2NpYWxpc3QtdmFsdWVzL3NyYy93ZWJzaXRlcy9uZXN0L05lc3QudHMiLCJ3ZWJwYWNrOi8vdGFtcGVybW9ua2V5LXNjcmlwdC11dGlscy8uL2NvcmUtc29jaWFsaXN0LXZhbHVlcy9zcmMvd2Vic2l0ZXMvZW1iZXIvRW1iZXIudHMiLCJ3ZWJwYWNrOi8vdGFtcGVybW9ua2V5LXNjcmlwdC11dGlscy8uL2NvcmUtc29jaWFsaXN0LXZhbHVlcy9zcmMvd2Vic2l0ZXMvZWxlY3Ryb24vRWxlY3Ryb24udHMiLCJ3ZWJwYWNrOi8vdGFtcGVybW9ua2V5LXNjcmlwdC11dGlscy8uL2NvcmUtc29jaWFsaXN0LXZhbHVlcy9zcmMvd2Vic2l0ZXMvamVua2lucy9KZW5raW5zLnRzIiwid2VicGFjazovL3RhbXBlcm1vbmtleS1zY3JpcHQtdXRpbHMvLi9jb3JlLXNvY2lhbGlzdC12YWx1ZXMvc3JjL3dlYnNpdGVzL3N2ZWx0ZS9TdmVsdGUudHMiLCJ3ZWJwYWNrOi8vdGFtcGVybW9ua2V5LXNjcmlwdC11dGlscy8uL2NvcmUtc29jaWFsaXN0LXZhbHVlcy9zcmMvd2Vic2l0ZXMvc3ZlbHRlbWF0ZXJpYWx1aS9TdmVsdGVNYXRlcmlhbFVpLnRzIiwid2VicGFjazovL3RhbXBlcm1vbmtleS1zY3JpcHQtdXRpbHMvLi9jb3JlLXNvY2lhbGlzdC12YWx1ZXMvc3JjL3dlYnNpdGVzL3N5bmN0aGluZy9TeW5jdGhpbmcudHMiLCJ3ZWJwYWNrOi8vdGFtcGVybW9ua2V5LXNjcmlwdC11dGlscy8uL2NvcmUtc29jaWFsaXN0LXZhbHVlcy9zcmMvbWFpbi50cyIsIndlYnBhY2s6Ly90YW1wZXJtb25rZXktc2NyaXB0LXV0aWxzLy4vdXRpbHMvc3JjL2dtL1N0b3JlLnRzIiwid2VicGFjazovL3RhbXBlcm1vbmtleS1zY3JpcHQtdXRpbHMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdGFtcGVybW9ua2V5LXNjcmlwdC11dGlscy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdGFtcGVybW9ua2V5LXNjcmlwdC11dGlscy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RhbXBlcm1vbmtleS1zY3JpcHQtdXRpbHMvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly90YW1wZXJtb25rZXktc2NyaXB0LXV0aWxzL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly90YW1wZXJtb25rZXktc2NyaXB0LXV0aWxzL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIOmAiemhueiPnOWNlVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNZW51Q21kIHtcblxuICAvKipcbiAgICog5rOo5YaMXG4gICAqIEBwYXJhbSBuYW1lIOWQjeensFxuICAgKiBAcGFyYW0gZm4g54K55Ye76I+c5Y2V5pe25omn6KGM55qE5Ye95pWwXG4gICAqL1xuICBzdGF0aWMgcmVnaXN0ZXIobmFtZTogc3RyaW5nLCBmbjogKCkgPT4gdm9pZCk6IG51bWJlciB7XG4gICAgcmV0dXJuIEdNX3JlZ2lzdGVyTWVudUNvbW1hbmQobmFtZSwgZm4pO1xuICB9XG5cbiAgLyoqXG4gICAqIOazqOmUgFxuICAgKiBAcGFyYW0gbWVudUNtZElkIOazqOWGjOaXtui/lOWbnueahCBJRFxuICAgKi9cbiAgc3RhdGljIHVucmVnaXN0ZXIobWVudUNtZElkOiBudW1iZXIpIHtcbiAgICBHTV91bnJlZ2lzdGVyTWVudUNvbW1hbmQobWVudUNtZElkKTtcbiAgfVxufVxuIiwiaW1wb3J0IFN0b3JlIGZyb20gXCJAdXRpbHMvZ20vU3RvcmVcIjtcbmltcG9ydCBNZW51Q21kIGZyb20gXCJAdXRpbHMvZ20vTWVudUNtZFwiO1xuXG4vKipcbiAqIOmAiemhueiPnOWNlVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb21tb25PcHRpb25zIHtcblxuICAvLyAvKipcbiAgLy8gICog6YCJ6aG5IEtleVxuICAvLyAgKi9cbiAgLy8gcHJvdGVjdGVkIHN0YXRpYyBLZXlzID0ge1xuICAvLyAgIC8vIHh4eDogJ3h4eCdcbiAgLy8gfVxuICAvL1xuICAvLyAvKipcbiAgLy8gICog6YCJ6aG5XG4gIC8vICAqIEBwcml2YXRlXG4gIC8vICAqL1xuICAvLyBwcm90ZWN0ZWQgc3RhdGljIG9wdGlvbnMgPSBbXG4gIC8vICAgLy8ge2xhYmVsOiAnJywgbmFtZTogdGhpcy5LZXlzLnh4eCwgdmVyc2lvbjogMSwgdmFsdWU6IGZhbHNlLCBtZW51Q21kSWQ6IG51bGx9LFxuICAvLyBdO1xuXG4gIC8qKlxuICAgKiDms6jlhowgYm9vbCDnsbvlnovnmoTpgInpoblcbiAgICogQHBhcmFtIG9wdGlvbiDpgInpoblcbiAgICovXG4gIHN0YXRpYyByZWdpc3RlckJvb2xPcHRpb24ob3B0aW9uOiBhbnkpIHtcbiAgICBjb25zdCB2YWwgPSBvcHRpb24udmFsdWUsIHZhbElzQm9vbCA9ICh0eXBlb2YgdmFsID09PSAnYm9vbGVhbicpO1xuXG4gICAgaWYgKCF2YWxJc0Jvb2wpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgLy8g5rOo5YaM6YCJ6aG5XG4gICAgY29uc3QgY3VycmVudE1lbnVDbWRJZCA9IE1lbnVDbWQucmVnaXN0ZXIoKHZhbCA/ICfimJHvuI8gJyA6ICfwn5SyICcpICsgb3B0aW9uLmxhYmVsLCAoKSA9PiB7XG4gICAgICAvLyDngrnlh7vlgLzlj5blj41cbiAgICAgIG9wdGlvbi52YWx1ZSA9ICFvcHRpb24udmFsdWU7XG4gICAgICBTdG9yZS5zZXQob3B0aW9uLm5hbWUsIEpTT04uc3RyaW5naWZ5KG9wdGlvbikpO1xuXG4gICAgICAvLyDlj5bmtojms6jlhoxcbiAgICAgIE1lbnVDbWQudW5yZWdpc3RlcihjdXJyZW50TWVudUNtZElkKTtcbiAgICAgIC8vIOmHjeaWsOazqOWGjFxuICAgICAgdGhpcy5yZWdpc3RlckJvb2xPcHRpb24ob3B0aW9uKTtcbiAgICAgIC8vIOWIt+aWsOmhtemdolxuICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuICAgIH0pO1xuXG4gICAgLy8g5L+d5a2Y6YCJ6aG5IElEXG4gICAgb3B0aW9uLm1lbnVDbWRJZCA9IGN1cnJlbnRNZW51Q21kSWQ7XG4gICAgU3RvcmUuc2V0KG9wdGlvbi5uYW1lLCBKU09OLnN0cmluZ2lmeShvcHRpb24pKTtcbiAgfVxuXG4gIC8qKlxuICAgKiDms6jlhozmiYDmnInpgInpoblcbiAgICogQHBhcmFtIHVybCDorr7nva7pobXpnaIgVVJMXG4gICAqIEBwYXJhbSBvcHRpb25zXG4gICAqL1xuICBzdGF0aWMgcmVnaXN0ZXJBbGwodXJsOiBzdHJpbmcsIG9wdGlvbnM6IGFueVtdKSB7XG4gICAgTWVudUNtZC5yZWdpc3Rlcign5pu05aSa6K6+572uJywgKCkgPT4ge1xuICAgICAgd2luZG93Lm9wZW4odXJsLCAnX2JsYW5rJyk7XG4gICAgfSk7XG5cbiAgICBmb3IgKGNvbnN0IG9wdGlvbiBvZiBvcHRpb25zKSB7XG4gICAgICAvLyBUT0RPIOOAkOiwg+ivleOAkeS4jeS/neeVmemAiemhueeahOWAvO+8jOavj+asoemDveS7jiBTdG9yZSDkuK3ojrflj5ZcbiAgICAgIC8vIFN0b3JlLnNldChvcHRpb24ubmFtZSwgbnVsbCk7XG5cbiAgICAgIGxldCBzdG9yZU9wdGlvbiA9IFN0b3JlLmdldChvcHRpb24ubmFtZSkgPyBKU09OLnBhcnNlKFN0b3JlLmdldChvcHRpb24ubmFtZSkpIDogbnVsbDtcbiAgICAgIC8vIOWmguaenOmAiemhueS4jeWtmOWcqCB8fCDniYjmnKzkuI3kuIDoh7Qg5pe26YeN572u6YCJ6aG5XG4gICAgICBpZiAoc3RvcmVPcHRpb24gPT09IG51bGwgfHwgIXN0b3JlT3B0aW9uWyd2ZXJzaW9uJ10gfHwgc3RvcmVPcHRpb25bJ3ZlcnNpb24nXSA8IG9wdGlvbi52ZXJzaW9uKSB7XG4gICAgICAgIFN0b3JlLnNldChvcHRpb24ubmFtZSwgSlNPTi5zdHJpbmdpZnkob3B0aW9uKSk7XG4gICAgICAgIHN0b3JlT3B0aW9uID0gb3B0aW9uO1xuICAgICAgfVxuICAgICAgdGhpcy5yZWdpc3RlckJvb2xPcHRpb24oc3RvcmVPcHRpb24pO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiDlnKjpobXpnaLkuK3liqDovb3pgInpoblcbiAgICovXG4gIHN0YXRpYyBsb2FkSW5HcmVhc3lmb3JrKHNjcmlwdElkOiBudW1iZXIsIGxvYWRPcHRpb25Db250ZW50Rm46IEZ1bmN0aW9uKSB7XG4gICAgaWYgKGxvY2F0aW9uLmhvc3QgIT09ICdncmVhc3lmb3JrLm9yZycgfHwgbG9jYXRpb24uaHJlZi5pbmRleE9mKCcvc2NyaXB0cy8nICsgc2NyaXB0SWQpID09IC0xKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHNlbGVjdG9yID0ge1xuICAgICAgc2NyaXB0TGlua3M6ICcjc2NyaXB0LWxpbmtzJyxcbiAgICAgIHNjcmlwdE9wdGlvbnM6ICcjc2NyaXB0LW9wdGlvbnMnLFxuICAgICAgc2NyaXB0Q29udGVudDogJyNzY3JpcHQtY29udGVudCcsXG4gICAgfVxuICAgIGNvbnN0ICRib2R5ID0gJChkb2N1bWVudC5ib2R5KSwgJHNjcmlwdExpbmtzID0gJChzZWxlY3Rvci5zY3JpcHRMaW5rcyksICRzY3JpcHRDb250ZW50ID0gJChzZWxlY3Rvci5zY3JpcHRDb250ZW50KTtcblxuICAgIC8vIOa3u+WKoOiEmuacrOiuvue9rueahOmAiemhueWNoVxuICAgICRzY3JpcHRMaW5rcy5jaGlsZHJlbignbGk6ZXEoMCknKS5hZnRlcihgPGxpPjxhIGhyZWY9XCJqYXZhc2NyaXB0OjtcIiBpZD1cInNjcmlwdC1vcHRpb25zXCI+6ISa5pys6K6+572uPC9hPjwvbGk+YClcbiAgICAvLyDohJrmnKzorr7nva7pgInpobnngrnlh7vkuovku7ZcbiAgICAkYm9keS5vbignY2xpY2snLCBzZWxlY3Rvci5zY3JpcHRPcHRpb25zLCAoKSA9PiB7XG4gICAgICAvLyDnp7vpmaTlt7LpgInkuK3pgInpobnnmoTmoLflvI9cbiAgICAgIGNvbnN0ICRjdXJyZW50TGkgPSAkc2NyaXB0TGlua3MuY2hpbGRyZW4oJ2xpLmN1cnJlbnQnKTtcbiAgICAgICRjdXJyZW50TGkuaHRtbChgPGEgaHJlZj1cIiR7bG9jYXRpb24uaHJlZn1cIj4keyRjdXJyZW50TGkudGV4dCgpfTwvYT5gKTtcbiAgICAgICRjdXJyZW50TGkucmVtb3ZlQ2xhc3MoJ2N1cnJlbnQnKTtcblxuICAgICAgLy8g5re75Yqg6YCJ5Lit6YCJ6aG555qE5qC35byPXG4gICAgICBjb25zdCAkc2NyaXB0T3B0aW9ucyA9ICQoc2VsZWN0b3Iuc2NyaXB0T3B0aW9ucyk7XG4gICAgICAkc2NyaXB0T3B0aW9ucy5wYXJlbnQoKS5hZGRDbGFzcygnY3VycmVudCcpO1xuXG4gICAgICBsb2FkT3B0aW9uQ29udGVudEZuKCRzY3JpcHRDb250ZW50KTtcbiAgICB9KTtcbiAgfVxufVxuIiwiaW1wb3J0IFN0b3JlIGZyb20gXCJAdXRpbHMvZ20vU3RvcmVcIjtcbmltcG9ydCBNZW51Q21kIGZyb20gXCJAdXRpbHMvZ20vTWVudUNtZFwiO1xuaW1wb3J0IENvbW1vbk9wdGlvbnMgZnJvbSBcIkB1dGlscy9Db21tb25PcHRpb25zXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE9wdGlvbnMge1xuXG4gIHByaXZhdGUgc3RhdGljIFNDUklQVF9JRCA9IDQ0MDg1NDtcblxuICAvKipcbiAgICog6YCJ6aG5IEtleVxuICAgKi9cbiAgc3RhdGljIEtleXMgPSB7XG4gICAgcmVtb3ZlQmFyOiAncmVtb3ZlQmFyJyxcbiAgICBqaW5yaXNoaWNpOiAnamlucmlzaGljaScsXG4gIH1cblxuICAvKipcbiAgICog6YCJ6aG5XG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBwcm90ZWN0ZWQgc3RhdGljIG9wdGlvbnMgPSBbXG4gICAge2xhYmVsOiAn6ZqQ6JeP5p2h5bmFJywgbmFtZTogdGhpcy5LZXlzLnJlbW92ZUJhciwgdmVyc2lvbjogMSwgdmFsdWU6IGZhbHNlLCBtZW51Q21kSWQ6IG51bGx9LFxuICAgIHtsYWJlbDogJ+S7iuaXpeivl+ivjScsIG5hbWU6IHRoaXMuS2V5cy5qaW5yaXNoaWNpLCB2ZXJzaW9uOiAxLCB2YWx1ZTogZmFsc2UsIG1lbnVDbWRJZDogbnVsbCwgdG9rZW46ICcnfVxuICBdO1xuXG4gIC8qKlxuICAgKiDms6jlhowgYm9vbCDnsbvlnovnmoTpgInpoblcbiAgICogQHBhcmFtIG9wdGlvbiDpgInpoblcbiAgICovXG4gIHN0YXRpYyByZWdpc3RlckJvb2xPcHRpb24ob3B0aW9uOiBhbnkpIHtcbiAgICBDb21tb25PcHRpb25zLnJlZ2lzdGVyQm9vbE9wdGlvbihvcHRpb24pO1xuICB9XG5cbiAgLyoqXG4gICAqIOazqOWGjOaJgOaciemAiemhuVxuICAgKi9cbiAgc3RhdGljIHJlZ2lzdGVyQWxsKCkge1xuICAgIENvbW1vbk9wdGlvbnMucmVnaXN0ZXJBbGwoJ2h0dHBzOi8vZ3JlYXN5Zm9yay5vcmcvc2NyaXB0cy8nICsgdGhpcy5TQ1JJUFRfSUQsIHRoaXMub3B0aW9ucyk7XG4gIH1cblxuICAvKipcbiAgICog5Zyo6aG16Z2i5Lit5Yqg6L296YCJ6aG5XG4gICAqL1xuICBzdGF0aWMgbG9hZEluR3JlYXN5Zm9yaygpIHtcbiAgICBDb21tb25PcHRpb25zLmxvYWRJbkdyZWFzeWZvcmsodGhpcy5TQ1JJUFRfSUQsICgkc2NyaXB0Q29udGVudCkgPT4ge1xuICAgICAgLy8g5re75Yqg6ISa5pys6K6+572u55qE5YaF5a65XG4gICAgICBsZXQgc2NyaXB0Q29udGVudCA9ICcnO1xuICAgICAgZm9yIChjb25zdCBvcHRpb24gb2YgdGhpcy5vcHRpb25zKSB7XG4gICAgICAgIGNvbnN0IHN0b3JlT3B0aW9uID0gSlNPTi5wYXJzZShTdG9yZS5nZXQob3B0aW9uLm5hbWUpKSwgb3B0aW9uTmFtZSA9IHN0b3JlT3B0aW9uLm5hbWUsIG9wdGlvblZhbCA9IHN0b3JlT3B0aW9uLnZhbHVlO1xuXG4gICAgICAgIHNjcmlwdENvbnRlbnQgKz0gYDxoMz4ke29wdGlvbi5sYWJlbH08L2gzPmA7XG4gICAgICAgIHN3aXRjaCAob3B0aW9uTmFtZSkge1xuICAgICAgICAgIGNhc2UgdGhpcy5LZXlzLnJlbW92ZUJhcjpcbiAgICAgICAgICAgIHNjcmlwdENvbnRlbnQgKz0gYDxsYWJlbD48aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgaWQ9XCJzY3JpcHQtb3B0aW9ucy0ke29wdGlvbk5hbWV9XCIgJHtvcHRpb25WYWwgPyAnY2hlY2tlZCcgOiAnJ30+IOaYr+WQpumakOiXj+adoeW5he+8iOWLvumAieWQjuWwhumakOiXj+adoeW5heiAjOS4jeaYr+abv+aNouWFtuWGheWuue+8iTwvbGFiZWw+YDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgdGhpcy5LZXlzLmppbnJpc2hpY2k6XG4gICAgICAgICAgICBzY3JpcHRDb250ZW50ICs9IGA8bGFiZWw+PGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGlkPVwic2NyaXB0LW9wdGlvbnMtJHtvcHRpb25OYW1lfS1lbmFibGVkXCIgJHtvcHRpb25WYWwgPyAnY2hlY2tlZCcgOiAnJ30+IOWQr+eUqDxhIGhyZWY9XCJodHRwczovL3d3dy5qaW5yaXNoaWNpLmNvbVwiIHRhcmdldCA9IFwiX2JsYW5rXCI+5LuK5pel6K+X6K+NPC9hPu+8iOS7jemcgOWPlua2iOWLvumAieKAnOaYr+WQpumakOiXj+adoeW5heKAneaJjeiDveeUn+aViO+8iTwvbGFiZWw+YDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICAkc2NyaXB0Q29udGVudC5odG1sKHNjcmlwdENvbnRlbnQpO1xuXG4gICAgICBjb25zdCAkYm9keSA9ICQoZG9jdW1lbnQuYm9keSk7XG4gICAgICAvLyByZWdpb24g5re75Yqg6ISa5pys6K6+572u55qE5LqL5Lu2XG4gICAgICAvLyDmmK/lkKbpmpDol4/mnaHluYVcbiAgICAgIGxldCBvcHRpb25TZWxlY3RvciA9ICcjc2NyaXB0LW9wdGlvbnMtJyArIHRoaXMuS2V5cy5yZW1vdmVCYXI7XG4gICAgICAkYm9keS5vbignY2hhbmdlJywgb3B0aW9uU2VsZWN0b3IsICgpID0+IHtcbiAgICAgICAgY29uc3QgcmVtb3ZlQmFyT3B0aW9uID0gSlNPTi5wYXJzZShTdG9yZS5nZXQodGhpcy5LZXlzLnJlbW92ZUJhcikpO1xuICAgICAgICByZW1vdmVCYXJPcHRpb24udmFsdWUgPSAhcmVtb3ZlQmFyT3B0aW9uLnZhbHVlO1xuICAgICAgICAvLyDph43mlrDms6jlhozoj5zljZVcbiAgICAgICAgTWVudUNtZC51bnJlZ2lzdGVyKHJlbW92ZUJhck9wdGlvbi5tZW51Q21kSWQpO1xuICAgICAgICB0aGlzLnJlZ2lzdGVyQm9vbE9wdGlvbihyZW1vdmVCYXJPcHRpb24pO1xuICAgICAgfSk7XG5cbiAgICAgIC8vIOWQr+eUqOS7iuaXpeivl+ivjVxuICAgICAgb3B0aW9uU2VsZWN0b3IgPSAnI3NjcmlwdC1vcHRpb25zLScgKyB0aGlzLktleXMuamlucmlzaGljaSArICctZW5hYmxlZCc7XG4gICAgICAkYm9keS5vbignY2hhbmdlJywgb3B0aW9uU2VsZWN0b3IsICgpID0+IHtcbiAgICAgICAgY29uc3QgamlucmlzaGljaU9wdGlvbiA9IEpTT04ucGFyc2UoU3RvcmUuZ2V0KHRoaXMuS2V5cy5qaW5yaXNoaWNpKSk7XG4gICAgICAgIGppbnJpc2hpY2lPcHRpb24udmFsdWUgPSAhamlucmlzaGljaU9wdGlvbi52YWx1ZTtcbiAgICAgICAgLy8g6YeN5paw5rOo5YaM6I+c5Y2VXG4gICAgICAgIE1lbnVDbWQudW5yZWdpc3RlcihqaW5yaXNoaWNpT3B0aW9uLm1lbnVDbWRJZCk7XG4gICAgICAgIHRoaXMucmVnaXN0ZXJCb29sT3B0aW9uKGppbnJpc2hpY2lPcHRpb24pO1xuICAgICAgfSk7XG4gICAgICAvLyBlbmRyZWdpb25cbiAgICB9KVxuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBKdW5pdCB7XG5cbiAgcHJpdmF0ZSBzdGF0aWMgc2VsZWN0b3JzID0ge1xuICAgIGp1bml0QWJvdXQ6ICcjYWJvdXQnLFxuICAgIGp1bml0TG9nbzogJ2ltZ1tzcmM9XCIvanVuaXQ1L2Fzc2V0cy9pbWcvanVuaXQ1LWxvZ28ucG5nXCJdJyxcbiAgICBqdW5pdEZhdmljb246ICdsaW5rW3JlbD1cImljb25cIl0nLFxuICB9XG5cbiAgcHJpdmF0ZSBzdGF0aWMganVuaXRMb2dvVXJsID0gJ2h0dHBzOi8vcmF3LmlxaXEuaW8vZHVhbmx1YW4vdGFtcGVybW9ua2V5LXNjcmlwdHMvbWFpbi9jb3JlLXNvY2lhbGlzdC12YWx1ZXMvc3JjL2p1bml0L2ltZ3MvanVuaXQ1LWxvZ28ucG5nJ1xuXG4gIHN0YXRpYyByZXBsYWNlKCkge1xuICAgIGlmIChsb2NhdGlvbi5ocmVmID09PSAnaHR0cHM6Ly9qdW5pdC5vcmcvanVuaXQ1LycpIHtcbiAgICAgICQodGhpcy5zZWxlY3RvcnMuanVuaXRBYm91dCkucHJldkFsbCgpLnJlbW92ZSgpO1xuICAgICAgJCh0aGlzLnNlbGVjdG9ycy5qdW5pdExvZ28pLmF0dHIoJ3NyYycsIHRoaXMuanVuaXRMb2dvVXJsKTtcbiAgICAgICQodGhpcy5zZWxlY3RvcnMuanVuaXRGYXZpY29uKS5hdHRyKCdocmVmJywgdGhpcy5qdW5pdExvZ29VcmwpO1xuICAgIH1cbiAgfVxufVxuIiwiZXhwb3J0IGVudW0gSHR0cERhdGFUeXBlIHtcbiAgSlNPTiA9IFwiSlNPTlwiXG59XG4iLCJpbXBvcnQge0h0dHBEYXRhVHlwZX0gZnJvbSBcIi4vZW51bS9IdHRwRGF0YVR5cGVcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVxdWVzdCB7XG5cbiAgc3RhdGljIGFzeW5jIGdldChvcHRpb246IHsgdXJsOiBzdHJpbmcsIGRhdGFUeXBlPzogSHR0cERhdGFUeXBlLCBzeW5jaHJvbm91cz86IGJvb2xlYW4sIGhlYWRlcnM/OiB7fSwgb25sb2FkPzogRnVuY3Rpb24gfSk6IFByb21pc2U8YW55PiB7XG4gICAgb3B0aW9uWydtZXRob2QnXSA9ICdHRVQnO1xuXG4gICAgLy8g5ZCM5q2l5pe26L+U5ZueIFByb21pc2VcbiAgICBpZiAob3B0aW9uLnN5bmNocm9ub3VzKSB7XG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICBHTV94bWxodHRwUmVxdWVzdCh7XG4gICAgICAgICAgLi4ub3B0aW9uLFxuICAgICAgICAgIG9ubG9hZDogKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICByZXNvbHZlKG9wdGlvbi5kYXRhVHlwZSA9PT0gSHR0cERhdGFUeXBlLkpTT04gPyBKU09OLnBhcnNlKHJlc3BvbnNlLnJlc3BvbnNlVGV4dCkgOiByZXNwb25zZS5yZXNwb25zZVRleHQpO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgb25lcnJvcjogKGVycm9yKSA9PiB7XG4gICAgICAgICAgICByZWplY3QoZXJyb3IpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9KVxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBvbmxvYWQxID0gZnVuY3Rpb24gKGRldGFpbHMpIHtcbiAgICAgICAgbGV0IHJlc3BvbnNlO1xuICAgICAgICBpZiAob3B0aW9uLmRhdGFUeXBlID09PSBIdHRwRGF0YVR5cGUuSlNPTikge1xuICAgICAgICAgIHJlc3BvbnNlID0gSlNPTi5wYXJzZShkZXRhaWxzLnJlc3BvbnNlVGV4dCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmVzcG9uc2UgPSBkZXRhaWxzLnJlc3BvbnNlO1xuICAgICAgICB9XG4gICAgICAgIG9wdGlvbi5vbmxvYWQocmVzcG9uc2UpO1xuICAgICAgfVxuICAgICAgR01feG1saHR0cFJlcXVlc3Qoey4uLm9wdGlvbiwgb25sb2FkOiBvbmxvYWQxfSk7XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgU3RvcmUgZnJvbSBcIkB1dGlscy9nbS9TdG9yZVwiO1xuaW1wb3J0IFJlcXVlc3QgZnJvbSBcIkB1dGlscy9nbS9SZXF1ZXN0XCI7XG5pbXBvcnQgT3B0aW9ucyBmcm9tIFwiLi4vT3B0aW9uc1wiO1xuaW1wb3J0IHtIdHRwRGF0YVR5cGV9IGZyb20gXCJAdXRpbHMvZ20vZW51bS9IdHRwRGF0YVR5cGVcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmFyIHtcblxuICAvKipcbiAgICog5pu/5o2i5p2h5bmF55qE6YCJ5oup5ZmoXG4gICAqL1xuICBzdGF0aWMgcmVwbGFjZUJhclNlbGVjdG9yID0ge1xuICAgIGJhcjogJy5jc3ZfYmFyJyxcbiAgICBiYXJVbDogJy5jc3ZfYmFyIC5jc3ZfYmFyX3VsJyxcbiAgfTtcbiAgLyoqXG4gICAqIOabv+aNouWQjueahOadoeW5heWOu+mZpOepuuagvOaNouihjOWQjueahOaWh+acrFxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgcHJpdmF0ZSBzdGF0aWMgdHh0ID0gJ+WvjOW8uuawkeS4u+aWh+aYjuWSjOiwkOiHqueUseW5s+etieWFrOato+azleayu+eIseWbveaVrOS4muivmuS/oeWPi+WWhFByb3NwZXJpdHlEZW1vY3JhY3lDaXZpbGl0eUhhcm1vbnlGcmVlZG9tRXF1YWxpdHlKdXN0aWNlUnVsZW9mbGF3UGF0cmlvdGlzbURlZGljYXRpb25JbnRlZ3JpdHlGcmllbmRzaGlwJztcbiAgLyoqXG4gICAqIOaYr+WQpuWQr+eUqOS7iuaXpeivl+ivjVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgcHJpdmF0ZSBzdGF0aWMgc3RvcmVKaW5yaXNoaWNpVmFsID0gZmFsc2U7XG4gIC8qKlxuICAgKiDku4rml6Xor5for43lhoXlrrlcbiAgICogQHByaXZhdGVcbiAgICovXG4gIHByaXZhdGUgc3RhdGljIGppbnJpc2hpY2lDb250ZW50ID0gJyc7XG5cbiAgLyoqXG4gICAqIOabv+aNouadoeW5hVxuICAgKiBAcGFyYW0gb3B0aW9ucyB7XG4gICAqICAgYmFyU2VsZWN0b3I6IHN0cmluZywgICAgICAgICAgICAgIC8vIOadoeW5hemAieaLqeWZqFxuICAgKiAgIGlzT2JzZXJ2ZUJhcjogYm9vbGVhbiwgICAgICAgICAgICAvLyDmmK/lkKbnm5HlkKzmnaHluYXlj5jljJbvvIzkvJrnm5HlkKzkuKTmrKHlj5jljJbvvIzph43mlrDmm7/mjaLjgILphY3lkIggZm9sbG93VXBPYnNlcnZlU2VsZWN0b3Ig5ZCO57ut55uR5ZCsXG4gICAqICAgZm9sbG93VXBPYnNlcnZlU2VsZWN0b3I/OiBzdHJpbmcsIC8vIOWQjue7reebkeWQrOmAieaLqeWZqO+8jOWNs+adoeW5heabv+aNouWQjuacieWPr+iDveS8muWGjeWPmOWbnuWOn+agt++8jOatpOWkhOWwseaYr+WGjeebkeWQrOeahOeItue6p+mAieaLqeWZqO+8jGlzT2JzZXJ2ZUJhciDkuLogdHJ1ZSDml7bnlJ/mlYhcbiAgICogICBoaWRlQmFyU2VsZWN0b3I6IHN0cmluZywgICAgICAgICAgLy8g6ZqQ6JeP5p2h5bmF6YCJ5oup5ZmoXG4gICAqICAgaXNPYnNlcnZlSGlkZUJhcjogYm9vbGVhbiwgICAgICAgIC8vIOaYr+WQpuebkeWQrOmakOiXj+adoeW5heWPmOWMlu+8jOS8muebkeWQrOS4pOasoeWPmOWMlu+8jOmHjeaWsOmakOiXj+OAglxuICAgKiAgIHJlcGxhY2VCYXJDYWxsYmFjaz86IEZ1bmN0aW9uLCAgICAvLyDmr4/mrKHmm7/mjaLlkI7lm57osINcbiAgICogICBqaW5yaXNoaWNpQ2FsbGJhY2s/OiBGdW5jdGlvbiwgICAgLy8g5q+P5qyh5pu/5o2i5Li65LuK5pel6K+X6K+N5ZCO5Zue6LCDXG4gICAqICAgaGlkZUJhckNhbGxiYWNrPyBGdW5jdGlvbiAgICAgICAgIC8vIOmakOiXj+WQjuWbnuiwg1xuICAgKiB9XG4gICAqL1xuICBzdGF0aWMgcmVwbGFjZShvcHRpb25zOiB7IGJhclNlbGVjdG9yOiBzdHJpbmcsIGlzT2JzZXJ2ZUJhcjogYm9vbGVhbiwgZm9sbG93VXBPYnNlcnZlU2VsZWN0b3I/OiBzdHJpbmcsIGhpZGVCYXJTZWxlY3Rvcjogc3RyaW5nLCBpc09ic2VydmVIaWRlQmFyOiBib29sZWFuLCByZXBsYWNlQmFyQ2FsbGJhY2s/OiBGdW5jdGlvbiwgamlucmlzaGljaUNhbGxiYWNrPzogRnVuY3Rpb24sIGhpZGVCYXJDYWxsYmFjaz86IEZ1bmN0aW9uIH0pIHtcbiAgICBpZiAoISQob3B0aW9ucy5iYXJTZWxlY3RvcikudGV4dCgpLm1hdGNoKC91a3JhaW5lfOS5jOWFi+WFsHxibGFja3zpu5HkurovaSkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyDlpoLmnpznp7vpmaTmqKrluYVcbiAgICBpZiAoSlNPTi5wYXJzZShTdG9yZS5nZXQoT3B0aW9ucy5LZXlzLnJlbW92ZUJhcikpLnZhbHVlKSB7XG4gICAgICAvLyDpmpDol4/mqKrluYVcbiAgICAgICQob3B0aW9ucy5oaWRlQmFyU2VsZWN0b3IpLmhpZGUoKTtcbiAgICAgIGlmIChvcHRpb25zLmlzT2JzZXJ2ZUhpZGVCYXIpIHtcbiAgICAgICAgbGV0IGkgPSAwO1xuICAgICAgICAvLyDpmpDol4/mnaHluYXpppbmrKHliqDovb3vvJrnm5HlkKzmnaHluYXlj5jljJbvvIzlj5jljJblkI7lho3mrKHmiafooYxcbiAgICAgICAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcigoKSA9PiB7XG4gICAgICAgICAgJChvcHRpb25zLmhpZGVCYXJTZWxlY3RvcikuaGlkZSgpO1xuICAgICAgICAgIC8vIOabv+aNouS4pOasoeWQjue7k+adn+ebkeWQrFxuICAgICAgICAgIGlmIChpID49IDEpIHtcbiAgICAgICAgICAgIG9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaSsrO1xuICAgICAgICB9KTtcbiAgICAgICAgb2JzZXJ2ZXIub2JzZXJ2ZSgkKG9wdGlvbnMuaGlkZUJhclNlbGVjdG9yKVswXSwge2NoaWxkTGlzdDogdHJ1ZSwgc3VidHJlZTogdHJ1ZX0pO1xuICAgICAgfVxuICAgICAgaWYgKG9wdGlvbnMuaGlkZUJhckNhbGxiYWNrKSB7XG4gICAgICAgIG9wdGlvbnMuaGlkZUJhckNhbGxiYWNrKCk7XG4gICAgICB9XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5zdG9yZUppbnJpc2hpY2lWYWwgPSBKU09OLnBhcnNlKFN0b3JlLmdldChPcHRpb25zLktleXMuamlucmlzaGljaSkpLnZhbHVlO1xuICAgIGlmICh0aGlzLnN0b3JlSmlucmlzaGljaVZhbCkge1xuICAgICAgdGhpcy5nZXRKaW5yaXNoaWNpKCkudGhlbigoZGF0YTogYW55KSA9PiB7XG4gICAgICAgIHRoaXMuamlucmlzaGljaUNvbnRlbnQgPSBkYXRhO1xuICAgICAgICB0aGlzLnJlcGxhY2VPYnNlcnZlcihvcHRpb25zKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJlcGxhY2VPYnNlcnZlcihvcHRpb25zKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICog5pu/5o2i5p2h5bmF55uR5ZCsXG4gICAqIEBwYXJhbSBvcHRpb25zXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBwcml2YXRlIHN0YXRpYyByZXBsYWNlT2JzZXJ2ZXIob3B0aW9uczogeyBiYXJTZWxlY3Rvcjogc3RyaW5nLCBpc09ic2VydmVCYXI6IGJvb2xlYW4sIGhpZGVCYXJTZWxlY3Rvcjogc3RyaW5nLCBpc09ic2VydmVIaWRlQmFyOiBib29sZWFuLCBmb2xsb3dVcE9ic2VydmVTZWxlY3Rvcj86IHN0cmluZywgcmVwbGFjZUJhckNhbGxiYWNrPzogRnVuY3Rpb24sIGppbnJpc2hpY2lDYWxsYmFjaz86IEZ1bmN0aW9uIH0pIHtcbiAgICAvLyDpppbmrKHmm7/mjaLmqKrluYVcbiAgICB0aGlzLnJlcGxhY2VCYXIob3B0aW9ucy5iYXJTZWxlY3Rvciwgb3B0aW9ucy5yZXBsYWNlQmFyQ2FsbGJhY2ssIG9wdGlvbnMuamlucmlzaGljaUNhbGxiYWNrKTtcbiAgICBpZiAoIW9wdGlvbnMuaXNPYnNlcnZlQmFyKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGxldCBpID0gMDtcbiAgICAvLyDmnaHluYXpppbmrKHliqDovb3vvJrnm5HlkKzmnaHluYXlj5jljJbvvIzlj5jljJblkI7lho3mrKHmiafooYxcbiAgICBjb25zdCBvYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKCgpID0+IHtcbiAgICAgIHRoaXMucmVwbGFjZUJhcihvcHRpb25zLmJhclNlbGVjdG9yLCBvcHRpb25zLnJlcGxhY2VCYXJDYWxsYmFjaywgb3B0aW9ucy5qaW5yaXNoaWNpQ2FsbGJhY2spO1xuICAgICAgLy8g5pu/5o2i5Lik5qyh5ZCO57uT5p2f55uR5ZCsXG4gICAgICBpZiAoaSA+PSAxKSB7XG4gICAgICAgIG9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcbiAgICAgIH1cbiAgICAgIGkrKztcbiAgICB9KTtcbiAgICBvYnNlcnZlci5vYnNlcnZlKCQob3B0aW9ucy5iYXJTZWxlY3RvcilbMF0sIHtjaGlsZExpc3Q6IHRydWV9KTtcblxuICAgIGlmIChvcHRpb25zLmZvbGxvd1VwT2JzZXJ2ZVNlbGVjdG9yKSB7XG4gICAgICAvLyDlkI7nu63lj5jljJZcbiAgICAgIG5ldyBNdXRhdGlvbk9ic2VydmVyKCgpID0+IHtcbiAgICAgICAgdGhpcy5yZXBsYWNlQmFyKG9wdGlvbnMuYmFyU2VsZWN0b3IsIG9wdGlvbnMucmVwbGFjZUJhckNhbGxiYWNrLCBvcHRpb25zLmppbnJpc2hpY2lDYWxsYmFjayk7XG4gICAgICB9KS5vYnNlcnZlKCQob3B0aW9ucy5mb2xsb3dVcE9ic2VydmVTZWxlY3RvcilbMF0sIHtjaGlsZExpc3Q6IHRydWV9KTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICog5a6e6ZmF5pu/5o2i5p2h5bmFXG4gICAqIEBwYXJhbSBzZWxlY3RvciDmnaHluYXpgInmi6nlmahcbiAgICogQHBhcmFtIHJlcGxhY2VCYXJDYWxsYmFjayDmm7/mjaLlkI7lm57osINcbiAgICogQHBhcmFtIGppbnJpc2hpY2lDYWxsYmFjayDmm7/mjaLkuLrku4rml6Xor5for43lkI7lm57osINcbiAgICogQHByaXZhdGVcbiAgICovXG4gIHByaXZhdGUgc3RhdGljIHJlcGxhY2VCYXIoc2VsZWN0b3I6IHN0cmluZywgcmVwbGFjZUJhckNhbGxiYWNrPzogRnVuY3Rpb24sIGppbnJpc2hpY2lDYWxsYmFjaz86IEZ1bmN0aW9uKSB7XG4gICAgaWYgKCQoJChzZWxlY3RvcilbMF0pLnRleHQoKS5yZXBsYWNlKC9cXHMrL2csIFwiXCIpID09PSBCYXIudHh0KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuc3RvcmVKaW5yaXNoaWNpVmFsKSB7XG4gICAgICAkKHNlbGVjdG9yKS5jc3MoeydtaW5IZWlnaHQnOiAnMzBweCcsICdsaW5lSGVpZ2h0JzogJzMwcHgnfSk7XG4gICAgICAkKHNlbGVjdG9yKS5odG1sKGBcbiAgICAgICAgPGRpdiBjbGFzcz1cImNzdl9iYXJcIj5cbiAgICAgICAgICAke3RoaXMuamlucmlzaGljaUNvbnRlbnR9XG4gICAgICAgIDwvZGl2PmBcbiAgICAgICk7XG4gICAgICBpZiAoamlucmlzaGljaUNhbGxiYWNrKSB7XG4gICAgICAgIGppbnJpc2hpY2lDYWxsYmFjaygpO1xuICAgICAgfVxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgICQoc2VsZWN0b3IpLmNzcyh7J21pbkhlaWdodCc6ICc0MHB4J30pO1xuICAgICQoc2VsZWN0b3IpLmh0bWwoYFxuICAgICAgICA8ZGl2IGNsYXNzPVwiY3N2X2JhclwiPlxuICAgICAgICAgIDx1bCBjbGFzcz0nY3N2X2Jhcl91bCc+PGxpPuWvjOW8ujwvbGk+PGxpPuawkeS4uzwvbGk+PGxpPuaWh+aYjjwvbGk+PGxpPuWSjOiwkDwvbGk+PGxpPuiHqueUsTwvbGk+PGxpPuW5s+etiTwvbGk+PGxpPuWFrOatozwvbGk+PGxpPuazleayuzwvbGk+PGxpPueIseWbvTwvbGk+PGxpPuaVrOS4mjwvbGk+PGxpPuivmuS/oTwvbGk+PGxpPuWPi+WWhDwvbGk+PC91bD48YnI+XG4gICAgICAgICAgPHVsIGNsYXNzPSdjc3ZfYmFyX3VsJz48bGk+UHJvc3Blcml0eTwvbGk+PGxpPkRlbW9jcmFjeTwvbGk+PGxpPkNpdmlsaXR5PC9saT48bGk+SGFybW9ueTwvbGk+PGxpPkZyZWVkb208L2xpPjxsaT5FcXVhbGl0eTwvbGk+PGxpPkp1c3RpY2U8L2xpPjxsaT5SdWxlIG9mIGxhdzwvbGk+PGxpPlBhdHJpb3Rpc208L2xpPjxsaT5EZWRpY2F0aW9uPC9saT48bGk+SW50ZWdyaXR5PC9saT48bGk+RnJpZW5kc2hpcDwvbGk+XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgPC9kaXY+YFxuICAgICk7XG5cbiAgICAvLyDpgb/lhY3lh7rnjrDlpJrkuKrlr7zoh7TmoLflvI/mt7vliqDlpLHotKVcbiAgICBjb25zdCAkYmFyID0gJCh0aGlzLnJlcGxhY2VCYXJTZWxlY3Rvci5iYXIpO1xuICAgIGlmICgkYmFyLmxlbmd0aCA9PSAyKSB7XG4gICAgICAkYmFyLmVxKDApLnJlbW92ZSgpO1xuICAgIH1cblxuICAgIGNvbnN0IGJhclVsU2VsZWN0b3IgPSB0aGlzLnJlcGxhY2VCYXJTZWxlY3Rvci5iYXJVbDtcbiAgICAkKGJhclVsU2VsZWN0b3IpLmNzcyh7J2Rpc3BsYXknOiAnaW5saW5lLWJsb2NrJywgJ2xpc3RTdHlsZSc6ICdub25lJywgJ21hcmdpbic6IDAsICdwYWRkaW5nJzogMCwgJ3dpZHRoJzogJ2F1dG8nfSk7XG4gICAgJChiYXJVbFNlbGVjdG9yICsgJyBsaScpLmNzcyh7J2NvbG9yJzogJyNERTI5MTAnLCAnZm9udFdlaWdodCc6ICdib2xkJywgJ2ZvbnRGYW1pbHknOiAnS2FpVGknLCAnZmxvYXQnOiAnbGVmdCcsICdwYWRkaW5nUmlnaHQnOiAnMTBweCcsICdtaW4td2lkdGgnOiAnODBweCcsICd0ZXh0QWxpZ24nOiAnY2VudGVyJ30pO1xuICAgICQoYmFyVWxTZWxlY3RvciArICc6Zmlyc3QnKS5jc3MoJ3ZlcnRpY2FsQWxpZ24nLCAnYm90dG9tJyk7XG4gICAgJChiYXJVbFNlbGVjdG9yICsgJzpmaXJzdCBsaScpLmNzcygnZm9udFNpemUnLCAnMThweCcpO1xuICAgICQoYmFyVWxTZWxlY3RvciArICc6ZXEoMSkgbGknKS5jc3MoJ2ZvbnRTaXplJywgJzEzcHgnKTtcblxuICAgIGlmIChyZXBsYWNlQmFyQ2FsbGJhY2spIHtcbiAgICAgIHJlcGxhY2VCYXJDYWxsYmFjaygpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiDojrflj5bku4rml6Xor5for41cbiAgICogQHByaXZhdGVcbiAgICovXG4gIHN0YXRpYyBhc3luYyBnZXRKaW5yaXNoaWNpKCkge1xuICAgIGxldCBqaW5yaXNoaWNpT3B0aW9uID0gSlNPTi5wYXJzZShTdG9yZS5nZXQoT3B0aW9ucy5LZXlzLmppbnJpc2hpY2kpKTtcbiAgICBpZiAoIWppbnJpc2hpY2lPcHRpb24udmFsdWUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBsZXQgcmVzcG9uc2UgPSBhd2FpdCBSZXF1ZXN0LmdldCh7XG4gICAgICB1cmw6ICdodHRwczovL3YyLmppbnJpc2hpY2kuY29tL29uZS5qc29uJyxcbiAgICAgIGRhdGFUeXBlOiBIdHRwRGF0YVR5cGUuSlNPTixcbiAgICAgIC8vIGhlYWRlcnM6IHtcbiAgICAgIC8vICAgJ1gtVXNlci1Ub2tlbic6IGppbnJpc2hpY2lPcHRpb24udG9rZW4sXG4gICAgICAvLyB9LFxuICAgICAgc3luY2hyb25vdXM6IHRydWVcbiAgICB9KTtcblxuICAgIGlmICghcmVzcG9uc2UgfHwgcmVzcG9uc2Uuc3RhdHVzICE9PSAnc3VjY2VzcycpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ+S7iuaXpeivl+ivjeiOt+WPluWksei0pScsIHJlc3BvbnNlKTtcbiAgICB9XG4gICAgLy8gLy8g5a2Y5YKoIFRva2VuXG4gICAgLy8gaWYgKGppbnJpc2hpY2lPcHRpb24udG9rZW4gIT09IHJlc3BvbnNlLmRhdGEudG9rZW4pIHtcbiAgICAvLyAgIGppbnJpc2hpY2lPcHRpb24udG9rZW4gPSByZXNwb25zZS5kYXRhLnRva2VuO1xuICAgIC8vICAgU3RvcmUuc2V0KE9wdGlvbnMuS2V5cy5qaW5yaXNoaWNpLCBKU09OLnN0cmluZ2lmeShqaW5yaXNoaWNpT3B0aW9uKSk7XG4gICAgLy8gfVxuICAgIHJldHVybiByZXNwb25zZS5kYXRhLmNvbnRlbnQgKyAnIOKAlOKAlCAnICsgcmVzcG9uc2UuZGF0YS5vcmlnaW4uYXV0aG9yICsgJ+OAiicgKyByZXNwb25zZS5kYXRhLm9yaWdpbi50aXRsZSArICfjgIsnO1xuICB9XG59XG4iLCJpbXBvcnQgQmFyIGZyb20gXCIuLi8uLi9jb21tb24vQmFyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlYWN0IHtcblxuICBwcml2YXRlIHN0YXRpYyBzZWxlY3RvcnMgPSB7XG4gICAgYmFyOiAnLmNzcy1scGl5Y3YnLFxuICAgIGhpZGVCYXI6ICcuY3NzLTFsb3h1aDMnLFxuICAgIGZvbGxvd1VwT2JzZXJ2ZUVsZW1lbnQ6ICcjZ2F0c2J5LWZvY3VzLXdyYXBwZXInLFxuICAgIGV4Y2x1ZGVIZWFkZXI6ICcuY3NzLXhic3FscCdcbiAgfVxuXG4gIHN0YXRpYyByZXBsYWNlKCkge1xuICAgIGlmIChsb2NhdGlvbi5ob3N0ID09PSAncmVhY3Rqcy5vcmcnKSB7XG4gICAgICBCYXIucmVwbGFjZSh7XG4gICAgICAgIGJhclNlbGVjdG9yOiB0aGlzLnNlbGVjdG9ycy5iYXIsIGlzT2JzZXJ2ZUJhcjogdHJ1ZSwgaGlkZUJhclNlbGVjdG9yOiB0aGlzLnNlbGVjdG9ycy5oaWRlQmFyLCBpc09ic2VydmVIaWRlQmFyOiBmYWxzZSwgZm9sbG93VXBPYnNlcnZlU2VsZWN0b3I6IHRoaXMuc2VsZWN0b3JzLmZvbGxvd1VwT2JzZXJ2ZUVsZW1lbnQsIGhpZGVCYXJDYWxsYmFjazogKCkgPT4ge1xuICAgICAgICAgICQodGhpcy5zZWxlY3RvcnMuZXhjbHVkZUhlYWRlcikuY3NzKCdtYXJnaW4tdG9wJywgJzYwcHgnKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBBbmd1bGFyIHtcblxuICBwcml2YXRlIHN0YXRpYyBzZWxlY3RvcnMgPSB7XG4gICAgYmFyOiAnLm1hdC10b29sYmFyLXJvdy5ub3RpZmljYXRpb24tY29udGFpbmVyJyxcbiAgICBkaXNtaXNzTm90aWZpY2F0aW9uQnRuOiAnYnV0dG9uW2FyaWEtbGFiZWw9XCJEaXNtaXNzIG5vdGlmaWNhdGlvblwiXScsXG4gIH1cblxuICBzdGF0aWMgcmVwbGFjZSgpIHtcbiAgICBpZiAobG9jYXRpb24uaG9zdCA9PT0gJ2FuZ3VsYXIuaW8nKSB7XG4gICAgICAvLyDkuI3lrZjlnKjmmK/lkKblhbPpl63pgJrnn6XnmoTmnKzlnLDlrZjlgqjml7ZcbiAgICAgIGlmICghbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2Fpby1ub3RpZmljYXRpb24vd2FyLXVrcmFpbmUnKSkge1xuICAgICAgICAvLyDlpoLmnpzpgJrnn6XkuK3lrZjlnKjlhbPplK7or41cbiAgICAgICAgY29uc3QgJGJhciA9ICQodGhpcy5zZWxlY3RvcnMuYmFyKTtcbiAgICAgICAgaWYgKCRiYXIubGVuZ3RoID4gMCAmJiAkYmFyLnRleHQoKS50b0xvd2VyQ2FzZSgpLmluZGV4T2YoJ3VrcmFpbmUnKSAhPSAtMSkge1xuICAgICAgICAgIC8vIOeCueWHu+WFs+mXremAmuefpVxuICAgICAgICAgICQodGhpcy5zZWxlY3RvcnMuZGlzbWlzc05vdGlmaWNhdGlvbkJ0bilbMF0uY2xpY2soKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufSIsImltcG9ydCBCYXIgZnJvbSBcIi4uLy4uL2NvbW1vbi9CYXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29kZWNlcHQge1xuXG4gIHN0YXRpYyBzZWxlY3RvcnMgPSB7XG4gICAgYmFyOiAnLnN1Yi1iYXIgLm1lc3NhZ2UnLFxuICAgIGhpZGVCYXI6ICcuc3ViLWJhcicsXG4gIH1cblxuICBzdGF0aWMgcmVwbGFjZSgpIHtcbiAgICBpZiAobG9jYXRpb24uaG9zdCA9PT0gJ2NvZGVjZXB0LmlvJykge1xuICAgICAgQmFyLnJlcGxhY2Uoe1xuICAgICAgICBiYXJTZWxlY3RvcjogdGhpcy5zZWxlY3RvcnMuYmFyLCBpc09ic2VydmVCYXI6IGZhbHNlLCBoaWRlQmFyU2VsZWN0b3I6IHRoaXMuc2VsZWN0b3JzLmhpZGVCYXIsIGlzT2JzZXJ2ZUhpZGVCYXI6IGZhbHNlLCBqaW5yaXNoaWNpQ2FsbGJhY2s6ICgpID0+IHtcbiAgICAgICAgICAkKHRoaXMuc2VsZWN0b3JzLmJhcikuY3NzKCdjb2xvcicsICcjZWRmMmY3Jyk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2l0aHViIHtcblxuICBzdGF0aWMgc2VsZWN0b3JzID0ge1xuICAgIG5vdGljZTogJy5ib3JkZXIuanMtbm90aWNlJ1xuICB9XG5cbiAgc3RhdGljIHJlcGxhY2UoKSB7XG4gICAgaWYgKGxvY2F0aW9uLmhyZWYgPT09ICdodHRwczovL2dpdGh1Yi5jb20vJykge1xuICAgICAgY29uc3QgJG5vdGljZSA9ICQodGhpcy5zZWxlY3RvcnMubm90aWNlKTtcbiAgICAgIGlmICgkbm90aWNlLmxlbmd0aCA+IDAgJiYgJG5vdGljZS50ZXh0KCkudG9Mb3dlckNhc2UoKS5pbmRleE9mKCd1a3JhaW5lJykgIT0gLTEpIHtcbiAgICAgICAgJG5vdGljZS5yZW1vdmUoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCBCYXIgZnJvbSBcIi4uLy4uL2NvbW1vbi9CYXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29kZWNlcHQge1xuXG4gIHN0YXRpYyBzZWxlY3RvcnMgPSB7XG4gICAgYmFyOiAnLnRvcC1iYXInLFxuICB9XG5cbiAgc3RhdGljIHJlcGxhY2UoKSB7XG4gICAgaWYgKGxvY2F0aW9uLmhvc3QgPT09ICdkb2NzLm5lc3Rqcy5jb20nKSB7XG4gICAgICBCYXIucmVwbGFjZSh7XG4gICAgICAgIGJhclNlbGVjdG9yOiB0aGlzLnNlbGVjdG9ycy5iYXIsIGlzT2JzZXJ2ZUJhcjogZmFsc2UsIGhpZGVCYXJTZWxlY3RvcjogdGhpcy5zZWxlY3RvcnMuYmFyLCBpc09ic2VydmVIaWRlQmFyOiBmYWxzZSwgcmVwbGFjZUJhckNhbGxiYWNrOiAoKSA9PiB7XG4gICAgICAgICAgJCh0aGlzLnNlbGVjdG9ycy5iYXIpLmNzcygncGFkZGluZycsICcwJyk7XG4gICAgICAgIH0sIGppbnJpc2hpY2lDYWxsYmFjazogKCkgPT4ge1xuICAgICAgICAgICQodGhpcy5zZWxlY3RvcnMuYmFyKS5jc3MoJ2NvbG9yJywgJyNmZmYnKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgQmFyIGZyb20gXCIuLi8uLi9jb21tb24vQmFyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVtYmVyIHtcblxuICBzdGF0aWMgc2VsZWN0b3JzID0ge1xuICAgIGJhcjogJy5jYWxsb3V0LWJhbm5lcicsXG4gIH1cblxuICBzdGF0aWMgcmVwbGFjZSgpIHtcbiAgICBpZiAobG9jYXRpb24uaG9zdCA9PT0gJ2VtYmVyanMuY29tJykge1xuICAgICAgQmFyLnJlcGxhY2Uoe1xuICAgICAgICBiYXJTZWxlY3RvcjogdGhpcy5zZWxlY3RvcnMuYmFyLCBpc09ic2VydmVCYXI6IGZhbHNlLCBoaWRlQmFyU2VsZWN0b3I6IHRoaXMuc2VsZWN0b3JzLmJhciwgaXNPYnNlcnZlSGlkZUJhcjogZmFsc2UsIGppbnJpc2hpY2lDYWxsYmFjazogKCkgPT4ge1xuICAgICAgICAgICQodGhpcy5zZWxlY3RvcnMuYmFyKS5jc3MoJ2NvbG9yJywgJyNmZmYnKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICAkKHRoaXMuc2VsZWN0b3JzLmJhcikuY3NzKHsnYmFja2dyb3VuZENvbG9yJzogJyMxYzFlMjQnLCAncGFkZGluZyc6IDB9KTtcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCBCYXIgZnJvbSBcIi4uLy4uL2NvbW1vbi9CYXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRWxlY3Ryb24ge1xuXG4gIHN0YXRpYyBzZWxlY3RvcnMgPSB7XG4gICAgYmFyOiAnLmFubm91bmNlbWVudC1iYW5uZXInLFxuICB9XG5cbiAgc3RhdGljIHJlcGxhY2UoKSB7XG4gICAgaWYgKGxvY2F0aW9uLmhvc3QgPT09ICd3d3cuZWxlY3Ryb25qcy5vcmcnKSB7XG4gICAgICBCYXIucmVwbGFjZSh7XG4gICAgICAgIGJhclNlbGVjdG9yOiB0aGlzLnNlbGVjdG9ycy5iYXIsIGlzT2JzZXJ2ZUJhcjogZmFsc2UsIGhpZGVCYXJTZWxlY3RvcjogdGhpcy5zZWxlY3RvcnMuYmFyLCBpc09ic2VydmVIaWRlQmFyOiBmYWxzZSwgcmVwbGFjZUJhckNhbGxiYWNrOiAoKSA9PiB7XG4gICAgICAgICAgJChCYXIucmVwbGFjZUJhclNlbGVjdG9yLmJhclVsICsgJzplcSgwKScpLmNzcygnaGVpZ2h0JywgJzI1cHgnKTtcbiAgICAgICAgICAkKEJhci5yZXBsYWNlQmFyU2VsZWN0b3IuYmFyVWwgKyAnOmVxKDEpJykuY3NzKCdoZWlnaHQnLCAnMjBweCcpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgICQodGhpcy5zZWxlY3RvcnMuYmFyKS5jc3MoeydwYWRkaW5nJzogMH0pO1xuICAgIH1cbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQW5ndWxhciB7XG5cbiAgc3RhdGljIHNlbGVjdG9ycyA9IHtcbiAgICBsb2dvOiAnaW1nW3NyYz1cIi9pbWFnZXMvbG9nb3MvamVua2lucy9KZW5raW5zLXN0b3AtdGhlLXdhci5zdmdcIl0nLFxuICAgIHBhZ2VUaXRsZTogJy5wYWdlLXRpdGxlJ1xuICB9XG5cbiAgc3RhdGljIHJlcGxhY2UoKSB7XG4gICAgaWYgKGxvY2F0aW9uLmhvc3QgPT09ICd3d3cuamVua2lucy5pbycpIHtcbiAgICAgIC8vIOabv+aNouWbvuagh1xuICAgICAgJCh0aGlzLnNlbGVjdG9ycy5sb2dvKS5yZXBsYWNlV2l0aChgPGltZyBzcmM9XCIvaW1hZ2VzL2xvZ29zL2plbmtpbnMvSmVua2lucy5zdmdcIj5gKTtcblxuICAgICAgLy8g5Yig6Zmk6YCa55+lXG4gICAgICAkKHRoaXMuc2VsZWN0b3JzLnBhZ2VUaXRsZSkubmV4dEFsbChcInBcIikuZWFjaCgoaSwgZWwpID0+IHtcbiAgICAgICAgY29uc3QgJGVsID0gJChlbCk7XG4gICAgICAgIGlmICgkZWwudGV4dCgpLnRvTG93ZXJDYXNlKCkuaW5kZXhPZigndWtyYWluZScpICE9IC0xKSB7XG4gICAgICAgICAgJGVsLnJlbW92ZSgpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgICQodGhpcy5zZWxlY3RvcnMucGFnZVRpdGxlKS5wYXJlbnQoKS5hcHBlbmQoJzxicj48YnI+PGJyPicpO1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IEJhciBmcm9tIFwiLi4vLi4vY29tbW9uL0JhclwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdmVsdGUge1xuXG4gIHByaXZhdGUgc3RhdGljIHNlbGVjdG9ycyA9IHtcbiAgICBuYXZTcG90OiAnLm5hdi1zcG90JyxcbiAgICBiYXI6ICcudWtyJyxcbiAgICBiYXJIZWlnaHQ6ICc6cm9vdCcsXG4gICAgYmFySGVpZ2h0QXR0ck5hbWU6ICctLXVrci1mb290ZXItaGVpZ2h0JyxcbiAgICBvYnNlcnZpbmc6ICcjbWFpbicsXG4gIH1cblxuICBwcml2YXRlIHN0YXRpYyBzdmVsdGVMb2dvU3R5bGUgPSAnYmFja2dyb3VuZC1pbWFnZTogdXJsKGh0dHBzOi8vc3ZlbHRlLmRldi9zdmVsdGUtbG9nby1ob3Jpem9udGFsLnN2ZyknO1xuXG4gIHN0YXRpYyByZXBsYWNlKCkge1xuICAgIGlmIChsb2NhdGlvbi5ob3N0ID09PSAnc3ZlbHRlLmRldicpIHtcbiAgICAgIGNvbnN0ICRuYXZTcG90ID0gJCh0aGlzLnNlbGVjdG9ycy5uYXZTcG90KTtcbiAgICAgIGxldCBpID0gMDtcbiAgICAgIC8vIOebkeWQrOadoeW5heWPmOWMlu+8jOWPmOWMluWQjuWGjeasoeaJp+ihjFxuICAgICAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcigoKSA9PiB7XG4gICAgICAgIGlmICgkbmF2U3BvdC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgLy8g5pu/5o2iIExvZ29cbiAgICAgICAgICAkbmF2U3BvdC5hdHRyKCdzdHlsZScsIHRoaXMuc3ZlbHRlTG9nb1N0eWxlKTtcbiAgICAgICAgICAvLyDmm7/mjaLkuKTmrKHlkI7nu5PmnZ/nm5HlkKxcbiAgICAgICAgICBpZiAoaSA+PSAxKSB7XG4gICAgICAgICAgICBvYnNlcnZlci5kaXNjb25uZWN0KCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGkrKztcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBvYnNlcnZlci5vYnNlcnZlKCQodGhpcy5zZWxlY3RvcnMub2JzZXJ2aW5nKVswXSwge2NoaWxkTGlzdDogdHJ1ZX0pO1xuXG4gICAgICAvLyDlupXpg6jmqKrluYVcbiAgICAgIEJhci5yZXBsYWNlKHtcbiAgICAgICAgYmFyU2VsZWN0b3I6IHRoaXMuc2VsZWN0b3JzLmJhciwgaXNPYnNlcnZlQmFyOiB0cnVlLCBoaWRlQmFyU2VsZWN0b3I6IHRoaXMuc2VsZWN0b3JzLmJhciwgaXNPYnNlcnZlSGlkZUJhcjogdHJ1ZSwgcmVwbGFjZUJhckNhbGxiYWNrOiAoKSA9PiB7XG4gICAgICAgICAgJCh0aGlzLnNlbGVjdG9ycy5iYXIpLmNzcyh7J2JhY2tncm91bmRDb2xvcic6ICcjMWMxZTI0JywgJ3BhZGRpbmdUb3AnOiAnMjBweCd9KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBTdmVsdGVNYXRlcmlhbFVpIHtcblxuICBzdGF0aWMgc2VsZWN0b3JzID0ge1xuICAgIGJhcjogJy51a3JhaW5lJyxcbiAgfVxuXG4gIHN0YXRpYyByZXBsYWNlKCkge1xuICAgIGlmIChsb2NhdGlvbi5ob3N0ID09PSAnc3ZlbHRlbWF0ZXJpYWx1aS5jb20nKSB7XG4gICAgICAkKHRoaXMuc2VsZWN0b3JzLmJhcikuYXR0cignY2xhc3MnLCAnJyk7XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgQmFyIGZyb20gXCIuLi8uLi9jb21tb24vQmFyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN5bmN0aGluZyB7XG5cbiAgc3RhdGljIHNlbGVjdG9ycyA9IHtcbiAgICBiYXI6ICcuYWxlcnQnLFxuICB9XG5cbiAgc3RhdGljIHJlcGxhY2UoKSB7XG4gICAgaWYgKGxvY2F0aW9uLmhvc3QgPT09ICdzeW5jdGhpbmcubmV0Jykge1xuICAgICAgQmFyLnJlcGxhY2Uoe1xuICAgICAgICBiYXJTZWxlY3RvcjogdGhpcy5zZWxlY3RvcnMuYmFyLCBpc09ic2VydmVCYXI6IGZhbHNlLCBoaWRlQmFyU2VsZWN0b3I6IHRoaXMuc2VsZWN0b3JzLmJhciwgaXNPYnNlcnZlSGlkZUJhcjogZmFsc2UsIHJlcGxhY2VCYXJDYWxsYmFjazogKCkgPT4ge1xuICAgICAgICAgICQodGhpcy5zZWxlY3RvcnMuYmFyKS5jc3MoJ3RleHRBbGlnbicsICdjZW50ZXInKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG59XG4iLCIvLyA9PVVzZXJTY3JpcHQ9PVxuLy8gQG5hbWUgICAgICAgICDmioDmnK/ov5znprvmlL/msrtcbi8vIEBuYW1lc3BhY2UgICAgaHR0cDovL3RhbXBlcm1vbmtleS5uZXQvXG4vLyBAdmVyc2lvbiAgICAgIDEuMy4xXG4vLyBAZGVzY3JpcHRpb24gIOenu+mZpOaUv+ayu+ebuOWFs+adoeW5heaIluabv+aNouS4uuekvuS8muS4u+S5ieaguOW/g+S7t+WAvOinguOAgeS7iuaXpeivl+ivje+8jOabv+aNouaUv+ayu+ebuOWFsyBMb2dvIOS4uuWOn+eJiCBMb2dv77yM5Y676Zmk5pS/5rK755u45YWz6YCa55+l77yM6K6p5oqA5pyv6L+c56a75pS/5rK744CCXG4vLyBAYXV0aG9yICAgICAgIGR1YW5sdWFuXG4vLyBAY29weXJpZ2h0ICAgIDIwMjIsIGR1YW5sdWFuIChodHRwczovL2dpdGh1Yi5jb20vZHVhbmx1YW4pXG4vLyBAbGljZW5zZSAgICAgIEFwYWNoZS0yLjA7IGh0dHBzOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjAudHh0XG4vLyBAbWF0Y2ggICAgICAgICo6Ly9yZWFjdGpzLm9yZy8qXG4vLyBAbWF0Y2ggICAgICAgICo6Ly9hbmd1bGFyLmlvLypcbi8vIEBtYXRjaCAgICAgICAgKjovL2p1bml0Lm9yZy8qXG4vLyBAbWF0Y2ggICAgICAgICo6Ly9jb2RlY2VwdC5pby8qXG4vLyBAbWF0Y2ggICAgICAgICo6Ly9naXRodWIuY29tLypcbi8vIEBtYXRjaCAgICAgICAgKjovL2RvY3MubmVzdGpzLmNvbS8qXG4vLyBAbWF0Y2ggICAgICAgICo6Ly9lbWJlcmpzLmNvbS8qXG4vLyBAbWF0Y2ggICAgICAgICo6Ly93d3cuZWxlY3Ryb25qcy5vcmcvKlxuLy8gQG1hdGNoICAgICAgICAqOi8vd3d3LmplbmtpbnMuaW8vKlxuLy8gQG1hdGNoICAgICAgICAqOi8vc3ZlbHRlLmRldi8qXG4vLyBAbWF0Y2ggICAgICAgICo6Ly9zdmVsdGVtYXRlcmlhbHVpLmNvbS8qXG4vLyBAbWF0Y2ggICAgICAgICo6Ly9zeW5jdGhpbmcubmV0Lypcbi8vIEBtYXRjaCAgICAgICAgKjovL2dyZWFzeWZvcmsub3JnLypcbi8vIEByZXF1aXJlICAgICAgaHR0cHM6Ly9jZG4uYm9vdGNkbi5uZXQvYWpheC9saWJzL2pxdWVyeS8zLjYuMC9qcXVlcnkuc2xpbS5taW4uanNcbi8vIEBncmFudCAgICAgICAgR01fZ2V0VmFsdWVcbi8vIEBncmFudCAgICAgICAgR01fc2V0VmFsdWVcbi8vIEBncmFudCAgICAgICAgR01fcmVnaXN0ZXJNZW51Q29tbWFuZFxuLy8gQGdyYW50ICAgICAgICBHTV91bnJlZ2lzdGVyTWVudUNvbW1hbmRcbi8vIEBncmFudCAgICAgICAgR01feG1saHR0cFJlcXVlc3Rcbi8vID09L1VzZXJTY3JpcHQ9PVxuXG4vLyA9PU9wZW5Vc2VySlM9PVxuLy8gQGF1dGhvciAgICAgICBkdWFubHVhblxuLy8gQHVwZGF0ZVVSTCAgICBodHRwczovL3Jhdy5pcWlxLmlvL2R1YW5sdWFuL3RhbXBlcm1vbmtleS1zY3JpcHRzL21haW4vY29yZS1zb2NpYWxpc3QtdmFsdWVzL2Rpc3QvbWFpbi5qc1xuLy8gPT0vT3BlblVzZXJKUz09XG5cbmltcG9ydCBKdW5pdCBmcm9tIFwiLi93ZWJzaXRlcy9qdW5pdC9KdW5pdFwiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCIuL3dlYnNpdGVzL3JlYWN0L1JlYWN0XCI7XG5pbXBvcnQgQW5ndWxhciBmcm9tIFwiLi93ZWJzaXRlcy9hbmd1bGFyL0FuZ3VsYXJcIjtcbmltcG9ydCBDb2RlY2VwdCBmcm9tIFwiLi93ZWJzaXRlcy9jb2RlY2VwdC9Db2RlY2VwdFwiO1xuaW1wb3J0IEdpdGh1YiBmcm9tIFwiLi93ZWJzaXRlcy9naXRodWIvR2l0aHViXCI7XG5pbXBvcnQgTmVzdCBmcm9tIFwiLi93ZWJzaXRlcy9uZXN0L05lc3RcIjtcbmltcG9ydCBFbWJlciBmcm9tIFwiLi93ZWJzaXRlcy9lbWJlci9FbWJlclwiO1xuaW1wb3J0IEVsZWN0cm9uIGZyb20gXCIuL3dlYnNpdGVzL2VsZWN0cm9uL0VsZWN0cm9uXCI7XG5pbXBvcnQgSmVua2lucyBmcm9tIFwiLi93ZWJzaXRlcy9qZW5raW5zL0plbmtpbnNcIjtcbmltcG9ydCBTdmVsdGUgZnJvbSBcIi4vd2Vic2l0ZXMvc3ZlbHRlL1N2ZWx0ZVwiO1xuaW1wb3J0IE9wdGlvbnMgZnJvbSBcIi4vT3B0aW9uc1wiO1xuaW1wb3J0IFN2ZWx0ZU1hdGVyaWFsVWkgZnJvbSBcIi4vd2Vic2l0ZXMvc3ZlbHRlbWF0ZXJpYWx1aS9TdmVsdGVNYXRlcmlhbFVpXCI7XG5pbXBvcnQgU3luY3RoaW5nIGZyb20gXCIuL3dlYnNpdGVzL3N5bmN0aGluZy9TeW5jdGhpbmdcIjtcblxuKCgpID0+IHtcbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIE9wdGlvbnMucmVnaXN0ZXJBbGwoKTtcbiAgT3B0aW9ucy5sb2FkSW5HcmVhc3lmb3JrKCk7XG5cbiAgUmVhY3QucmVwbGFjZSgpO1xuICBBbmd1bGFyLnJlcGxhY2UoKTtcbiAgSnVuaXQucmVwbGFjZSgpO1xuICBDb2RlY2VwdC5yZXBsYWNlKCk7XG4gIEdpdGh1Yi5yZXBsYWNlKCk7XG4gIE5lc3QucmVwbGFjZSgpO1xuICBFbWJlci5yZXBsYWNlKCk7XG4gIEVsZWN0cm9uLnJlcGxhY2UoKTtcbiAgSmVua2lucy5yZXBsYWNlKCk7XG4gIFN2ZWx0ZS5yZXBsYWNlKCk7XG4gIFN2ZWx0ZU1hdGVyaWFsVWkucmVwbGFjZSgpO1xuICBTeW5jdGhpbmcucmVwbGFjZSgpO1xufSkoKTtcbiIsIi8qKlxuICog5a2Y5YKoXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0b3JlIHtcblxuICAvKipcbiAgICog6I635Y+WXG4gICAqIEBwYXJhbSBrZXkg6ZSuXG4gICAqL1xuICBzdGF0aWMgZ2V0KGtleTogc3RyaW5nKTogYW55IHtcbiAgICByZXR1cm4gR01fZ2V0VmFsdWUoa2V5KTtcbiAgfVxuXG4gIC8qKlxuICAgKiDorr7nva5cbiAgICogQHBhcmFtIGtleSDplK5cbiAgICogQHBhcmFtIHZhbHVlIOWAvFxuICAgKi9cbiAgc3RhdGljIHNldChrZXk6IHN0cmluZywgdmFsdWU6IGFueSkge1xuICAgIEdNX3NldFZhbHVlKGtleSwgdmFsdWUpO1xuICB9XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXygzMDYpO1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyg3MTgpO1xuIiwiIl0sIm5hbWVzIjpbIk1lbnVDbWQiLCJuYW1lIiwiZm4iLCJHTV9yZWdpc3Rlck1lbnVDb21tYW5kIiwibWVudUNtZElkIiwiR01fdW5yZWdpc3Rlck1lbnVDb21tYW5kIiwiU3RvcmUiLCJDb21tb25PcHRpb25zIiwib3B0aW9uIiwidmFsIiwidmFsdWUiLCJ2YWxJc0Jvb2wiLCJjdXJyZW50TWVudUNtZElkIiwicmVnaXN0ZXIiLCJsYWJlbCIsInNldCIsIkpTT04iLCJzdHJpbmdpZnkiLCJ1bnJlZ2lzdGVyIiwicmVnaXN0ZXJCb29sT3B0aW9uIiwid2luZG93IiwibG9jYXRpb24iLCJyZWxvYWQiLCJ1cmwiLCJvcHRpb25zIiwib3BlbiIsInN0b3JlT3B0aW9uIiwiZ2V0IiwicGFyc2UiLCJ2ZXJzaW9uIiwic2NyaXB0SWQiLCJsb2FkT3B0aW9uQ29udGVudEZuIiwiaG9zdCIsImhyZWYiLCJpbmRleE9mIiwic2VsZWN0b3IiLCJzY3JpcHRMaW5rcyIsInNjcmlwdE9wdGlvbnMiLCJzY3JpcHRDb250ZW50IiwiJGJvZHkiLCIkIiwiZG9jdW1lbnQiLCJib2R5IiwiJHNjcmlwdExpbmtzIiwiJHNjcmlwdENvbnRlbnQiLCJjaGlsZHJlbiIsImFmdGVyIiwib24iLCIkY3VycmVudExpIiwiaHRtbCIsInRleHQiLCJyZW1vdmVDbGFzcyIsIiRzY3JpcHRPcHRpb25zIiwicGFyZW50IiwiYWRkQ2xhc3MiLCJPcHRpb25zIiwicmVnaXN0ZXJBbGwiLCJTQ1JJUFRfSUQiLCJsb2FkSW5HcmVhc3lmb3JrIiwib3B0aW9uTmFtZSIsIm9wdGlvblZhbCIsIktleXMiLCJyZW1vdmVCYXIiLCJqaW5yaXNoaWNpIiwib3B0aW9uU2VsZWN0b3IiLCJyZW1vdmVCYXJPcHRpb24iLCJqaW5yaXNoaWNpT3B0aW9uIiwidG9rZW4iLCJKdW5pdCIsInNlbGVjdG9ycyIsImp1bml0QWJvdXQiLCJwcmV2QWxsIiwicmVtb3ZlIiwianVuaXRMb2dvIiwiYXR0ciIsImp1bml0TG9nb1VybCIsImp1bml0RmF2aWNvbiIsIkh0dHBEYXRhVHlwZSIsIlJlcXVlc3QiLCJzeW5jaHJvbm91cyIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwiR01feG1saHR0cFJlcXVlc3QiLCJvbmxvYWQiLCJyZXNwb25zZSIsImRhdGFUeXBlIiwicmVzcG9uc2VUZXh0Iiwib25lcnJvciIsImVycm9yIiwib25sb2FkMSIsImRldGFpbHMiLCJCYXIiLCJiYXJTZWxlY3RvciIsIm1hdGNoIiwiaGlkZUJhclNlbGVjdG9yIiwiaGlkZSIsImlzT2JzZXJ2ZUhpZGVCYXIiLCJpIiwib2JzZXJ2ZXIiLCJNdXRhdGlvbk9ic2VydmVyIiwiZGlzY29ubmVjdCIsIm9ic2VydmUiLCJjaGlsZExpc3QiLCJzdWJ0cmVlIiwiaGlkZUJhckNhbGxiYWNrIiwic3RvcmVKaW5yaXNoaWNpVmFsIiwiZ2V0SmlucmlzaGljaSIsInRoZW4iLCJkYXRhIiwiamlucmlzaGljaUNvbnRlbnQiLCJyZXBsYWNlT2JzZXJ2ZXIiLCJyZXBsYWNlQmFyIiwicmVwbGFjZUJhckNhbGxiYWNrIiwiamlucmlzaGljaUNhbGxiYWNrIiwiaXNPYnNlcnZlQmFyIiwiZm9sbG93VXBPYnNlcnZlU2VsZWN0b3IiLCJyZXBsYWNlIiwidHh0IiwiY3NzIiwiJGJhciIsInJlcGxhY2VCYXJTZWxlY3RvciIsImJhciIsImxlbmd0aCIsImVxIiwiYmFyVWxTZWxlY3RvciIsImJhclVsIiwic3RhdHVzIiwiY29uc29sZSIsImNvbnRlbnQiLCJvcmlnaW4iLCJhdXRob3IiLCJ0aXRsZSIsIlJlYWN0IiwiaGlkZUJhciIsImZvbGxvd1VwT2JzZXJ2ZUVsZW1lbnQiLCJleGNsdWRlSGVhZGVyIiwiQW5ndWxhciIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJ0b0xvd2VyQ2FzZSIsImRpc21pc3NOb3RpZmljYXRpb25CdG4iLCJjbGljayIsIkNvZGVjZXB0IiwiR2l0aHViIiwiJG5vdGljZSIsIm5vdGljZSIsIkVtYmVyIiwiRWxlY3Ryb24iLCJsb2dvIiwicmVwbGFjZVdpdGgiLCJwYWdlVGl0bGUiLCJuZXh0QWxsIiwiZWFjaCIsImVsIiwiJGVsIiwiYXBwZW5kIiwiU3ZlbHRlIiwiJG5hdlNwb3QiLCJuYXZTcG90Iiwic3ZlbHRlTG9nb1N0eWxlIiwib2JzZXJ2aW5nIiwiYmFySGVpZ2h0IiwiYmFySGVpZ2h0QXR0ck5hbWUiLCJTdmVsdGVNYXRlcmlhbFVpIiwiU3luY3RoaW5nIiwiTmVzdCIsIkplbmtpbnMiLCJrZXkiLCJHTV9nZXRWYWx1ZSIsIkdNX3NldFZhbHVlIl0sInNvdXJjZVJvb3QiOiIifQ==