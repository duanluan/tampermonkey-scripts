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

/***/ 82:
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

_defineProperty(Junit, "junitLogoUrl", 'https://fastly.jsdelivr.net/gh/duanluan/tampermonkey-scripts/main/core-socialist-values/src/junit/imgs/junit5-logo.png');


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


;// CONCATENATED MODULE: ./core-socialist-values/src/websites/jenkins/Jenkins.ts
function Jenkins_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Jenkins_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Jenkins_createClass(Constructor, protoProps, staticProps) { if (protoProps) Jenkins_defineProperties(Constructor.prototype, protoProps); if (staticProps) Jenkins_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function Jenkins_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Angular = /*#__PURE__*/function () {
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

Jenkins_defineProperty(Angular, "selectors", {
  logo: 'img[src="/images/logos/jenkins/Jenkins-stop-the-war.svg"]',
  pageTitle: '.page-title'
});


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
// @match        *://react.dev/*
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
// @updateURL    https://fastly.jsdelivr.net/gh/duanluan/tampermonkey-scripts/main/core-socialist-values/dist/main.js
// ==/OpenUserJS==










(function () {
  'use strict';

  Options/* default.registerAll */.Z.registerAll();
  Options/* default.loadInGreasyfork */.Z.loadInGreasyfork(); // React.replace();
  // Angular.replace();

  Junit.replace();
  Codecept.replace();
  Github.replace();
  Nest_Codecept.replace();
  Ember.replace(); // Electron.replace();

  Angular.replace(); // Svelte.replace();

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
/******/ 	__webpack_require__(82);
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__(718);
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0VBQ0FpRSxnQkFBQTtFQUNBRSxjQUFBO0VBQ0FnQixxQkFBQTtFQUNBWixhQUFBLEdBWkssQ0FhTDs7RUFDQWEsZUFBQSxHQWRLLENBZUw7O0VBQ0FILHdCQUFBO0VBQ0FDLGlCQUFBO0FBQ0QsQ0FsQkQ7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoREE7QUFDQTtBQUNBO0lBQ3FCaEo7Ozs7Ozs7O0lBRW5CO0FBQ0Y7QUFDQTtBQUNBO0lBQ0UsYUFBV21KLEdBQVgsRUFBNkI7TUFDM0IsT0FBT0MsV0FBVyxDQUFDRCxHQUFELENBQWxCO0lBQ0Q7SUFFRDtBQUNGO0FBQ0E7QUFDQTtBQUNBOzs7O1dBQ0UsYUFBV0EsR0FBWCxFQUF3Qi9JLEtBQXhCLEVBQW9DO01BQ2xDaUosV0FBVyxDQUFDRixHQUFELEVBQU0vSSxLQUFOLENBQVg7SUFDRDs7Ozs7Ozs7Ozs7O1VDcEJIO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1VFQUE7VUFDQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RhbXBlcm1vbmtleS1zY3JpcHQtdXRpbHMvLi91dGlscy9zcmMvZ20vTWVudUNtZC50cyIsIndlYnBhY2s6Ly90YW1wZXJtb25rZXktc2NyaXB0LXV0aWxzLy4vdXRpbHMvc3JjL0NvbW1vbk9wdGlvbnMudHMiLCJ3ZWJwYWNrOi8vdGFtcGVybW9ua2V5LXNjcmlwdC11dGlscy8uL2NvcmUtc29jaWFsaXN0LXZhbHVlcy9zcmMvT3B0aW9ucy50cyIsIndlYnBhY2s6Ly90YW1wZXJtb25rZXktc2NyaXB0LXV0aWxzLy4vY29yZS1zb2NpYWxpc3QtdmFsdWVzL3NyYy93ZWJzaXRlcy9qdW5pdC9KdW5pdC50cyIsIndlYnBhY2s6Ly90YW1wZXJtb25rZXktc2NyaXB0LXV0aWxzLy4vdXRpbHMvc3JjL2dtL2VudW0vSHR0cERhdGFUeXBlLnRzIiwid2VicGFjazovL3RhbXBlcm1vbmtleS1zY3JpcHQtdXRpbHMvLi91dGlscy9zcmMvZ20vUmVxdWVzdC50cyIsIndlYnBhY2s6Ly90YW1wZXJtb25rZXktc2NyaXB0LXV0aWxzLy4vY29yZS1zb2NpYWxpc3QtdmFsdWVzL3NyYy9jb21tb24vQmFyLnRzIiwid2VicGFjazovL3RhbXBlcm1vbmtleS1zY3JpcHQtdXRpbHMvLi9jb3JlLXNvY2lhbGlzdC12YWx1ZXMvc3JjL3dlYnNpdGVzL2NvZGVjZXB0L0NvZGVjZXB0LnRzIiwid2VicGFjazovL3RhbXBlcm1vbmtleS1zY3JpcHQtdXRpbHMvLi9jb3JlLXNvY2lhbGlzdC12YWx1ZXMvc3JjL3dlYnNpdGVzL2dpdGh1Yi9HaXRodWIudHMiLCJ3ZWJwYWNrOi8vdGFtcGVybW9ua2V5LXNjcmlwdC11dGlscy8uL2NvcmUtc29jaWFsaXN0LXZhbHVlcy9zcmMvd2Vic2l0ZXMvbmVzdC9OZXN0LnRzIiwid2VicGFjazovL3RhbXBlcm1vbmtleS1zY3JpcHQtdXRpbHMvLi9jb3JlLXNvY2lhbGlzdC12YWx1ZXMvc3JjL3dlYnNpdGVzL2VtYmVyL0VtYmVyLnRzIiwid2VicGFjazovL3RhbXBlcm1vbmtleS1zY3JpcHQtdXRpbHMvLi9jb3JlLXNvY2lhbGlzdC12YWx1ZXMvc3JjL3dlYnNpdGVzL2plbmtpbnMvSmVua2lucy50cyIsIndlYnBhY2s6Ly90YW1wZXJtb25rZXktc2NyaXB0LXV0aWxzLy4vY29yZS1zb2NpYWxpc3QtdmFsdWVzL3NyYy93ZWJzaXRlcy9zdmVsdGVtYXRlcmlhbHVpL1N2ZWx0ZU1hdGVyaWFsVWkudHMiLCJ3ZWJwYWNrOi8vdGFtcGVybW9ua2V5LXNjcmlwdC11dGlscy8uL2NvcmUtc29jaWFsaXN0LXZhbHVlcy9zcmMvd2Vic2l0ZXMvc3luY3RoaW5nL1N5bmN0aGluZy50cyIsIndlYnBhY2s6Ly90YW1wZXJtb25rZXktc2NyaXB0LXV0aWxzLy4vY29yZS1zb2NpYWxpc3QtdmFsdWVzL3NyYy9tYWluLnRzIiwid2VicGFjazovL3RhbXBlcm1vbmtleS1zY3JpcHQtdXRpbHMvLi91dGlscy9zcmMvZ20vU3RvcmUudHMiLCJ3ZWJwYWNrOi8vdGFtcGVybW9ua2V5LXNjcmlwdC11dGlscy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90YW1wZXJtb25rZXktc2NyaXB0LXV0aWxzL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90YW1wZXJtb25rZXktc2NyaXB0LXV0aWxzL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdGFtcGVybW9ua2V5LXNjcmlwdC11dGlscy93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3RhbXBlcm1vbmtleS1zY3JpcHQtdXRpbHMvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3RhbXBlcm1vbmtleS1zY3JpcHQtdXRpbHMvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiDpgInpobnoj5zljZVcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1lbnVDbWQge1xyXG5cclxuICAvKipcclxuICAgKiDms6jlhoxcclxuICAgKiBAcGFyYW0gbmFtZSDlkI3np7BcclxuICAgKiBAcGFyYW0gZm4g54K55Ye76I+c5Y2V5pe25omn6KGM55qE5Ye95pWwXHJcbiAgICovXHJcbiAgc3RhdGljIHJlZ2lzdGVyKG5hbWU6IHN0cmluZywgZm46ICgpID0+IHZvaWQpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIEdNX3JlZ2lzdGVyTWVudUNvbW1hbmQobmFtZSwgZm4pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICog5rOo6ZSAXHJcbiAgICogQHBhcmFtIG1lbnVDbWRJZCDms6jlhozml7bov5Tlm57nmoQgSURcclxuICAgKi9cclxuICBzdGF0aWMgdW5yZWdpc3RlcihtZW51Q21kSWQ6IG51bWJlcikge1xyXG4gICAgR01fdW5yZWdpc3Rlck1lbnVDb21tYW5kKG1lbnVDbWRJZCk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCBTdG9yZSBmcm9tIFwiQHV0aWxzL2dtL1N0b3JlXCI7XHJcbmltcG9ydCBNZW51Q21kIGZyb20gXCJAdXRpbHMvZ20vTWVudUNtZFwiO1xyXG5cclxuLyoqXHJcbiAqIOmAiemhueiPnOWNlVxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29tbW9uT3B0aW9ucyB7XHJcblxyXG4gIC8vIC8qKlxyXG4gIC8vICAqIOmAiemhuSBLZXlcclxuICAvLyAgKi9cclxuICAvLyBwcm90ZWN0ZWQgc3RhdGljIEtleXMgPSB7XHJcbiAgLy8gICAvLyB4eHg6ICd4eHgnXHJcbiAgLy8gfVxyXG4gIC8vXHJcbiAgLy8gLyoqXHJcbiAgLy8gICog6YCJ6aG5XHJcbiAgLy8gICogQHByaXZhdGVcclxuICAvLyAgKi9cclxuICAvLyBwcm90ZWN0ZWQgc3RhdGljIG9wdGlvbnMgPSBbXHJcbiAgLy8gICAvLyB7bGFiZWw6ICcnLCBuYW1lOiB0aGlzLktleXMueHh4LCB2ZXJzaW9uOiAxLCB2YWx1ZTogZmFsc2UsIG1lbnVDbWRJZDogbnVsbH0sXHJcbiAgLy8gXTtcclxuXHJcbiAgLyoqXHJcbiAgICog5rOo5YaMIGJvb2wg57G75Z6L55qE6YCJ6aG5XHJcbiAgICogQHBhcmFtIG9wdGlvbiDpgInpoblcclxuICAgKi9cclxuICBzdGF0aWMgcmVnaXN0ZXJCb29sT3B0aW9uKG9wdGlvbjogYW55KSB7XHJcbiAgICBjb25zdCB2YWwgPSBvcHRpb24udmFsdWUsIHZhbElzQm9vbCA9ICh0eXBlb2YgdmFsID09PSAnYm9vbGVhbicpO1xyXG5cclxuICAgIGlmICghdmFsSXNCb29sKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIC8vIOazqOWGjOmAiemhuVxyXG4gICAgY29uc3QgY3VycmVudE1lbnVDbWRJZCA9IE1lbnVDbWQucmVnaXN0ZXIoKHZhbCA/ICfimJHvuI8gJyA6ICfwn5SyICcpICsgb3B0aW9uLmxhYmVsLCAoKSA9PiB7XHJcbiAgICAgIC8vIOeCueWHu+WAvOWPluWPjVxyXG4gICAgICBvcHRpb24udmFsdWUgPSAhb3B0aW9uLnZhbHVlO1xyXG4gICAgICBTdG9yZS5zZXQob3B0aW9uLm5hbWUsIEpTT04uc3RyaW5naWZ5KG9wdGlvbikpO1xyXG5cclxuICAgICAgLy8g5Y+W5raI5rOo5YaMXHJcbiAgICAgIE1lbnVDbWQudW5yZWdpc3RlcihjdXJyZW50TWVudUNtZElkKTtcclxuICAgICAgLy8g6YeN5paw5rOo5YaMXHJcbiAgICAgIHRoaXMucmVnaXN0ZXJCb29sT3B0aW9uKG9wdGlvbik7XHJcbiAgICAgIC8vIOWIt+aWsOmhtemdolxyXG4gICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyDkv53lrZjpgInpobkgSURcclxuICAgIG9wdGlvbi5tZW51Q21kSWQgPSBjdXJyZW50TWVudUNtZElkO1xyXG4gICAgU3RvcmUuc2V0KG9wdGlvbi5uYW1lLCBKU09OLnN0cmluZ2lmeShvcHRpb24pKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIOazqOWGjOaJgOaciemAiemhuVxyXG4gICAqIEBwYXJhbSB1cmwg6K6+572u6aG16Z2iIFVSTFxyXG4gICAqIEBwYXJhbSBvcHRpb25zXHJcbiAgICovXHJcbiAgc3RhdGljIHJlZ2lzdGVyQWxsKHVybDogc3RyaW5nLCBvcHRpb25zOiBhbnlbXSkge1xyXG4gICAgTWVudUNtZC5yZWdpc3Rlcign5pu05aSa6K6+572uJywgKCkgPT4ge1xyXG4gICAgICB3aW5kb3cub3Blbih1cmwsICdfYmxhbmsnKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGZvciAoY29uc3Qgb3B0aW9uIG9mIG9wdGlvbnMpIHtcclxuICAgICAgLy8gVE9ETyDjgJDosIPor5XjgJHkuI3kv53nlZnpgInpobnnmoTlgLzvvIzmr4/mrKHpg73ku44gU3RvcmUg5Lit6I635Y+WXHJcbiAgICAgIC8vIFN0b3JlLnNldChvcHRpb24ubmFtZSwgbnVsbCk7XHJcblxyXG4gICAgICBsZXQgc3RvcmVPcHRpb24gPSBTdG9yZS5nZXQob3B0aW9uLm5hbWUpID8gSlNPTi5wYXJzZShTdG9yZS5nZXQob3B0aW9uLm5hbWUpKSA6IG51bGw7XHJcbiAgICAgIC8vIOWmguaenOmAiemhueS4jeWtmOWcqCB8fCDniYjmnKzkuI3kuIDoh7Qg5pe26YeN572u6YCJ6aG5XHJcbiAgICAgIGlmIChzdG9yZU9wdGlvbiA9PT0gbnVsbCB8fCAhc3RvcmVPcHRpb25bJ3ZlcnNpb24nXSB8fCBzdG9yZU9wdGlvblsndmVyc2lvbiddIDwgb3B0aW9uLnZlcnNpb24pIHtcclxuICAgICAgICBTdG9yZS5zZXQob3B0aW9uLm5hbWUsIEpTT04uc3RyaW5naWZ5KG9wdGlvbikpO1xyXG4gICAgICAgIHN0b3JlT3B0aW9uID0gb3B0aW9uO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMucmVnaXN0ZXJCb29sT3B0aW9uKHN0b3JlT3B0aW9uKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIOWcqOmhtemdouS4reWKoOi9vemAiemhuVxyXG4gICAqL1xyXG4gIHN0YXRpYyBsb2FkSW5HcmVhc3lmb3JrKHNjcmlwdElkOiBudW1iZXIsIGxvYWRPcHRpb25Db250ZW50Rm46IEZ1bmN0aW9uKSB7XHJcbiAgICBpZiAobG9jYXRpb24uaG9zdCAhPT0gJ2dyZWFzeWZvcmsub3JnJyB8fCBsb2NhdGlvbi5ocmVmLmluZGV4T2YoJy9zY3JpcHRzLycgKyBzY3JpcHRJZCkgPT0gLTEpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgY29uc3Qgc2VsZWN0b3IgPSB7XHJcbiAgICAgIHNjcmlwdExpbmtzOiAnI3NjcmlwdC1saW5rcycsXHJcbiAgICAgIHNjcmlwdE9wdGlvbnM6ICcjc2NyaXB0LW9wdGlvbnMnLFxyXG4gICAgICBzY3JpcHRDb250ZW50OiAnI3NjcmlwdC1jb250ZW50JyxcclxuICAgIH1cclxuICAgIGNvbnN0ICRib2R5ID0gJChkb2N1bWVudC5ib2R5KSwgJHNjcmlwdExpbmtzID0gJChzZWxlY3Rvci5zY3JpcHRMaW5rcyksICRzY3JpcHRDb250ZW50ID0gJChzZWxlY3Rvci5zY3JpcHRDb250ZW50KTtcclxuXHJcbiAgICAvLyDmt7vliqDohJrmnKzorr7nva7nmoTpgInpobnljaFcclxuICAgICRzY3JpcHRMaW5rcy5jaGlsZHJlbignbGk6ZXEoMCknKS5hZnRlcihgPGxpPjxhIGhyZWY9XCJqYXZhc2NyaXB0OjtcIiBpZD1cInNjcmlwdC1vcHRpb25zXCI+6ISa5pys6K6+572uPC9hPjwvbGk+YClcclxuICAgIC8vIOiEmuacrOiuvue9rumAiemhueeCueWHu+S6i+S7tlxyXG4gICAgJGJvZHkub24oJ2NsaWNrJywgc2VsZWN0b3Iuc2NyaXB0T3B0aW9ucywgKCkgPT4ge1xyXG4gICAgICAvLyDnp7vpmaTlt7LpgInkuK3pgInpobnnmoTmoLflvI9cclxuICAgICAgY29uc3QgJGN1cnJlbnRMaSA9ICRzY3JpcHRMaW5rcy5jaGlsZHJlbignbGkuY3VycmVudCcpO1xyXG4gICAgICAkY3VycmVudExpLmh0bWwoYDxhIGhyZWY9XCIke2xvY2F0aW9uLmhyZWZ9XCI+JHskY3VycmVudExpLnRleHQoKX08L2E+YCk7XHJcbiAgICAgICRjdXJyZW50TGkucmVtb3ZlQ2xhc3MoJ2N1cnJlbnQnKTtcclxuXHJcbiAgICAgIC8vIOa3u+WKoOmAieS4remAiemhueeahOagt+W8j1xyXG4gICAgICBjb25zdCAkc2NyaXB0T3B0aW9ucyA9ICQoc2VsZWN0b3Iuc2NyaXB0T3B0aW9ucyk7XHJcbiAgICAgICRzY3JpcHRPcHRpb25zLnBhcmVudCgpLmFkZENsYXNzKCdjdXJyZW50Jyk7XHJcblxyXG4gICAgICBsb2FkT3B0aW9uQ29udGVudEZuKCRzY3JpcHRDb250ZW50KTtcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgU3RvcmUgZnJvbSBcIkB1dGlscy9nbS9TdG9yZVwiO1xyXG5pbXBvcnQgTWVudUNtZCBmcm9tIFwiQHV0aWxzL2dtL01lbnVDbWRcIjtcclxuaW1wb3J0IENvbW1vbk9wdGlvbnMgZnJvbSBcIkB1dGlscy9Db21tb25PcHRpb25zXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBPcHRpb25zIHtcclxuXHJcbiAgcHJpdmF0ZSBzdGF0aWMgU0NSSVBUX0lEID0gNDQwODU0O1xyXG5cclxuICAvKipcclxuICAgKiDpgInpobkgS2V5XHJcbiAgICovXHJcbiAgc3RhdGljIEtleXMgPSB7XHJcbiAgICByZW1vdmVCYXI6ICdyZW1vdmVCYXInLFxyXG4gICAgamlucmlzaGljaTogJ2ppbnJpc2hpY2knLFxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICog6YCJ6aG5XHJcbiAgICogQHByaXZhdGVcclxuICAgKi9cclxuICBwcm90ZWN0ZWQgc3RhdGljIG9wdGlvbnMgPSBbXHJcbiAgICB7bGFiZWw6ICfpmpDol4/mnaHluYUnLCBuYW1lOiB0aGlzLktleXMucmVtb3ZlQmFyLCB2ZXJzaW9uOiAxLCB2YWx1ZTogZmFsc2UsIG1lbnVDbWRJZDogbnVsbH0sXHJcbiAgICB7bGFiZWw6ICfku4rml6Xor5for40nLCBuYW1lOiB0aGlzLktleXMuamlucmlzaGljaSwgdmVyc2lvbjogMSwgdmFsdWU6IGZhbHNlLCBtZW51Q21kSWQ6IG51bGwsIHRva2VuOiAnJ31cclxuICBdO1xyXG5cclxuICAvKipcclxuICAgKiDms6jlhowgYm9vbCDnsbvlnovnmoTpgInpoblcclxuICAgKiBAcGFyYW0gb3B0aW9uIOmAiemhuVxyXG4gICAqL1xyXG4gIHN0YXRpYyByZWdpc3RlckJvb2xPcHRpb24ob3B0aW9uOiBhbnkpIHtcclxuICAgIENvbW1vbk9wdGlvbnMucmVnaXN0ZXJCb29sT3B0aW9uKG9wdGlvbik7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDms6jlhozmiYDmnInpgInpoblcclxuICAgKi9cclxuICBzdGF0aWMgcmVnaXN0ZXJBbGwoKSB7XHJcbiAgICBDb21tb25PcHRpb25zLnJlZ2lzdGVyQWxsKCdodHRwczovL2dyZWFzeWZvcmsub3JnL3NjcmlwdHMvJyArIHRoaXMuU0NSSVBUX0lELCB0aGlzLm9wdGlvbnMpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICog5Zyo6aG16Z2i5Lit5Yqg6L296YCJ6aG5XHJcbiAgICovXHJcbiAgc3RhdGljIGxvYWRJbkdyZWFzeWZvcmsoKSB7XHJcbiAgICBDb21tb25PcHRpb25zLmxvYWRJbkdyZWFzeWZvcmsodGhpcy5TQ1JJUFRfSUQsICgkc2NyaXB0Q29udGVudCkgPT4ge1xyXG4gICAgICAvLyDmt7vliqDohJrmnKzorr7nva7nmoTlhoXlrrlcclxuICAgICAgbGV0IHNjcmlwdENvbnRlbnQgPSAnJztcclxuICAgICAgZm9yIChjb25zdCBvcHRpb24gb2YgdGhpcy5vcHRpb25zKSB7XHJcbiAgICAgICAgY29uc3Qgc3RvcmVPcHRpb24gPSBKU09OLnBhcnNlKFN0b3JlLmdldChvcHRpb24ubmFtZSkpLCBvcHRpb25OYW1lID0gc3RvcmVPcHRpb24ubmFtZSwgb3B0aW9uVmFsID0gc3RvcmVPcHRpb24udmFsdWU7XHJcblxyXG4gICAgICAgIHNjcmlwdENvbnRlbnQgKz0gYDxoMz4ke29wdGlvbi5sYWJlbH08L2gzPmA7XHJcbiAgICAgICAgc3dpdGNoIChvcHRpb25OYW1lKSB7XHJcbiAgICAgICAgICBjYXNlIHRoaXMuS2V5cy5yZW1vdmVCYXI6XHJcbiAgICAgICAgICAgIHNjcmlwdENvbnRlbnQgKz0gYDxsYWJlbD48aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgaWQ9XCJzY3JpcHQtb3B0aW9ucy0ke29wdGlvbk5hbWV9XCIgJHtvcHRpb25WYWwgPyAnY2hlY2tlZCcgOiAnJ30+IOaYr+WQpumakOiXj+adoeW5he+8iOWLvumAieWQjuWwhumakOiXj+adoeW5heiAjOS4jeaYr+abv+aNouWFtuWGheWuue+8iTwvbGFiZWw+YDtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBjYXNlIHRoaXMuS2V5cy5qaW5yaXNoaWNpOlxyXG4gICAgICAgICAgICBzY3JpcHRDb250ZW50ICs9IGA8bGFiZWw+PGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGlkPVwic2NyaXB0LW9wdGlvbnMtJHtvcHRpb25OYW1lfS1lbmFibGVkXCIgJHtvcHRpb25WYWwgPyAnY2hlY2tlZCcgOiAnJ30+IOWQr+eUqDxhIGhyZWY9XCJodHRwczovL3d3dy5qaW5yaXNoaWNpLmNvbVwiIHRhcmdldCA9IFwiX2JsYW5rXCI+5LuK5pel6K+X6K+NPC9hPu+8iOS7jemcgOWPlua2iOWLvumAieKAnOaYr+WQpumakOiXj+adoeW5heKAneaJjeiDveeUn+aViO+8iTwvbGFiZWw+YDtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgICRzY3JpcHRDb250ZW50Lmh0bWwoc2NyaXB0Q29udGVudCk7XHJcblxyXG4gICAgICBjb25zdCAkYm9keSA9ICQoZG9jdW1lbnQuYm9keSk7XHJcbiAgICAgIC8vIHJlZ2lvbiDmt7vliqDohJrmnKzorr7nva7nmoTkuovku7ZcclxuICAgICAgLy8g5piv5ZCm6ZqQ6JeP5p2h5bmFXHJcbiAgICAgIGxldCBvcHRpb25TZWxlY3RvciA9ICcjc2NyaXB0LW9wdGlvbnMtJyArIHRoaXMuS2V5cy5yZW1vdmVCYXI7XHJcbiAgICAgICRib2R5Lm9uKCdjaGFuZ2UnLCBvcHRpb25TZWxlY3RvciwgKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHJlbW92ZUJhck9wdGlvbiA9IEpTT04ucGFyc2UoU3RvcmUuZ2V0KHRoaXMuS2V5cy5yZW1vdmVCYXIpKTtcclxuICAgICAgICByZW1vdmVCYXJPcHRpb24udmFsdWUgPSAhcmVtb3ZlQmFyT3B0aW9uLnZhbHVlO1xyXG4gICAgICAgIC8vIOmHjeaWsOazqOWGjOiPnOWNlVxyXG4gICAgICAgIE1lbnVDbWQudW5yZWdpc3RlcihyZW1vdmVCYXJPcHRpb24ubWVudUNtZElkKTtcclxuICAgICAgICB0aGlzLnJlZ2lzdGVyQm9vbE9wdGlvbihyZW1vdmVCYXJPcHRpb24pO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIC8vIOWQr+eUqOS7iuaXpeivl+ivjVxyXG4gICAgICBvcHRpb25TZWxlY3RvciA9ICcjc2NyaXB0LW9wdGlvbnMtJyArIHRoaXMuS2V5cy5qaW5yaXNoaWNpICsgJy1lbmFibGVkJztcclxuICAgICAgJGJvZHkub24oJ2NoYW5nZScsIG9wdGlvblNlbGVjdG9yLCAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgamlucmlzaGljaU9wdGlvbiA9IEpTT04ucGFyc2UoU3RvcmUuZ2V0KHRoaXMuS2V5cy5qaW5yaXNoaWNpKSk7XHJcbiAgICAgICAgamlucmlzaGljaU9wdGlvbi52YWx1ZSA9ICFqaW5yaXNoaWNpT3B0aW9uLnZhbHVlO1xyXG4gICAgICAgIC8vIOmHjeaWsOazqOWGjOiPnOWNlVxyXG4gICAgICAgIE1lbnVDbWQudW5yZWdpc3RlcihqaW5yaXNoaWNpT3B0aW9uLm1lbnVDbWRJZCk7XHJcbiAgICAgICAgdGhpcy5yZWdpc3RlckJvb2xPcHRpb24oamlucmlzaGljaU9wdGlvbik7XHJcbiAgICAgIH0pO1xyXG4gICAgICAvLyBlbmRyZWdpb25cclxuICAgIH0pXHJcbiAgfVxyXG59XHJcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEp1bml0IHtcclxuXHJcbiAgcHJpdmF0ZSBzdGF0aWMgc2VsZWN0b3JzID0ge1xyXG4gICAganVuaXRBYm91dDogJyNhYm91dCcsXHJcbiAgICBqdW5pdExvZ286ICdpbWdbc3JjPVwiL2p1bml0NS9hc3NldHMvaW1nL2p1bml0NS1sb2dvLnBuZ1wiXScsXHJcbiAgICBqdW5pdEZhdmljb246ICdsaW5rW3JlbD1cImljb25cIl0nLFxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzdGF0aWMganVuaXRMb2dvVXJsID0gJ2h0dHBzOi8vZmFzdGx5LmpzZGVsaXZyLm5ldC9naC9kdWFubHVhbi90YW1wZXJtb25rZXktc2NyaXB0cy9tYWluL2NvcmUtc29jaWFsaXN0LXZhbHVlcy9zcmMvanVuaXQvaW1ncy9qdW5pdDUtbG9nby5wbmcnXHJcblxyXG4gIHN0YXRpYyByZXBsYWNlKCkge1xyXG4gICAgaWYgKGxvY2F0aW9uLmhyZWYgPT09ICdodHRwczovL2p1bml0Lm9yZy9qdW5pdDUvJykge1xyXG4gICAgICAkKHRoaXMuc2VsZWN0b3JzLmp1bml0QWJvdXQpLnByZXZBbGwoKS5yZW1vdmUoKTtcclxuICAgICAgJCh0aGlzLnNlbGVjdG9ycy5qdW5pdExvZ28pLmF0dHIoJ3NyYycsIHRoaXMuanVuaXRMb2dvVXJsKTtcclxuICAgICAgJCh0aGlzLnNlbGVjdG9ycy5qdW5pdEZhdmljb24pLmF0dHIoJ2hyZWYnLCB0aGlzLmp1bml0TG9nb1VybCk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsImV4cG9ydCBlbnVtIEh0dHBEYXRhVHlwZSB7XHJcbiAgSlNPTiA9IFwiSlNPTlwiXHJcbn1cclxuIiwiaW1wb3J0IHtIdHRwRGF0YVR5cGV9IGZyb20gXCIuL2VudW0vSHR0cERhdGFUeXBlXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZXF1ZXN0IHtcclxuXHJcbiAgc3RhdGljIGFzeW5jIGdldChvcHRpb246IHsgdXJsOiBzdHJpbmcsIGRhdGFUeXBlPzogSHR0cERhdGFUeXBlLCBzeW5jaHJvbm91cz86IGJvb2xlYW4sIGhlYWRlcnM/OiB7fSwgb25sb2FkPzogRnVuY3Rpb24gfSk6IFByb21pc2U8YW55PiB7XHJcbiAgICBvcHRpb25bJ21ldGhvZCddID0gJ0dFVCc7XHJcblxyXG4gICAgLy8g5ZCM5q2l5pe26L+U5ZueIFByb21pc2VcclxuICAgIGlmIChvcHRpb24uc3luY2hyb25vdXMpIHtcclxuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICBHTV94bWxodHRwUmVxdWVzdCh7XHJcbiAgICAgICAgICAuLi5vcHRpb24sXHJcbiAgICAgICAgICBvbmxvYWQ6IChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICByZXNvbHZlKG9wdGlvbi5kYXRhVHlwZSA9PT0gSHR0cERhdGFUeXBlLkpTT04gPyBKU09OLnBhcnNlKHJlc3BvbnNlLnJlc3BvbnNlVGV4dCkgOiByZXNwb25zZS5yZXNwb25zZVRleHQpO1xyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIG9uZXJyb3I6IChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICByZWplY3QoZXJyb3IpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc3Qgb25sb2FkMSA9IGZ1bmN0aW9uIChkZXRhaWxzKSB7XHJcbiAgICAgICAgbGV0IHJlc3BvbnNlO1xyXG4gICAgICAgIGlmIChvcHRpb24uZGF0YVR5cGUgPT09IEh0dHBEYXRhVHlwZS5KU09OKSB7XHJcbiAgICAgICAgICByZXNwb25zZSA9IEpTT04ucGFyc2UoZGV0YWlscy5yZXNwb25zZVRleHQpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICByZXNwb25zZSA9IGRldGFpbHMucmVzcG9uc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG9wdGlvbi5vbmxvYWQocmVzcG9uc2UpO1xyXG4gICAgICB9XHJcbiAgICAgIEdNX3htbGh0dHBSZXF1ZXN0KHsuLi5vcHRpb24sIG9ubG9hZDogb25sb2FkMX0pO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgU3RvcmUgZnJvbSBcIkB1dGlscy9nbS9TdG9yZVwiO1xyXG5pbXBvcnQgUmVxdWVzdCBmcm9tIFwiQHV0aWxzL2dtL1JlcXVlc3RcIjtcclxuaW1wb3J0IE9wdGlvbnMgZnJvbSBcIi4uL09wdGlvbnNcIjtcclxuaW1wb3J0IHtIdHRwRGF0YVR5cGV9IGZyb20gXCJAdXRpbHMvZ20vZW51bS9IdHRwRGF0YVR5cGVcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJhciB7XHJcblxyXG4gIC8qKlxyXG4gICAqIOabv+aNouadoeW5heeahOmAieaLqeWZqFxyXG4gICAqL1xyXG4gIHN0YXRpYyByZXBsYWNlQmFyU2VsZWN0b3IgPSB7XHJcbiAgICBiYXI6ICcuY3N2X2JhcicsXHJcbiAgICBiYXJVbDogJy5jc3ZfYmFyIC5jc3ZfYmFyX3VsJyxcclxuICB9O1xyXG4gIC8qKlxyXG4gICAqIOabv+aNouWQjueahOadoeW5heWOu+mZpOepuuagvOaNouihjOWQjueahOaWh+acrFxyXG4gICAqIEBwcml2YXRlXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBzdGF0aWMgdHh0ID0gJ+WvjOW8uuawkeS4u+aWh+aYjuWSjOiwkOiHqueUseW5s+etieWFrOato+azleayu+eIseWbveaVrOS4muivmuS/oeWPi+WWhFByb3NwZXJpdHlEZW1vY3JhY3lDaXZpbGl0eUhhcm1vbnlGcmVlZG9tRXF1YWxpdHlKdXN0aWNlUnVsZW9mbGF3UGF0cmlvdGlzbURlZGljYXRpb25JbnRlZ3JpdHlGcmllbmRzaGlwJztcclxuICAvKipcclxuICAgKiDmmK/lkKblkK/nlKjku4rml6Xor5for41cclxuICAgKiBAcHJpdmF0ZVxyXG4gICAqL1xyXG4gIHByaXZhdGUgc3RhdGljIHN0b3JlSmlucmlzaGljaVZhbCA9IGZhbHNlO1xyXG4gIC8qKlxyXG4gICAqIOS7iuaXpeivl+ivjeWGheWuuVxyXG4gICAqIEBwcml2YXRlXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBzdGF0aWMgamlucmlzaGljaUNvbnRlbnQgPSAnJztcclxuXHJcbiAgLyoqXHJcbiAgICog5pu/5o2i5p2h5bmFXHJcbiAgICogQHBhcmFtIG9wdGlvbnMge1xyXG4gICAqICAgYmFyU2VsZWN0b3I6IHN0cmluZywgICAgICAgICAgICAgIC8vIOadoeW5hemAieaLqeWZqFxyXG4gICAqICAgaXNPYnNlcnZlQmFyOiBib29sZWFuLCAgICAgICAgICAgIC8vIOaYr+WQpuebkeWQrOadoeW5heWPmOWMlu+8jOS8muebkeWQrOS4pOasoeWPmOWMlu+8jOmHjeaWsOabv+aNouOAgumFjeWQiCBmb2xsb3dVcE9ic2VydmVTZWxlY3RvciDlkI7nu63nm5HlkKxcclxuICAgKiAgIGZvbGxvd1VwT2JzZXJ2ZVNlbGVjdG9yPzogc3RyaW5nLCAvLyDlkI7nu63nm5HlkKzpgInmi6nlmajvvIzljbPmnaHluYXmm7/mjaLlkI7mnInlj6/og73kvJrlho3lj5jlm57ljp/moLfvvIzmraTlpITlsLHmmK/lho3nm5HlkKznmoTniLbnuqfpgInmi6nlmajvvIxpc09ic2VydmVCYXIg5Li6IHRydWUg5pe255Sf5pWIXHJcbiAgICogICBoaWRlQmFyU2VsZWN0b3I6IHN0cmluZywgICAgICAgICAgLy8g6ZqQ6JeP5p2h5bmF6YCJ5oup5ZmoXHJcbiAgICogICBpc09ic2VydmVIaWRlQmFyOiBib29sZWFuLCAgICAgICAgLy8g5piv5ZCm55uR5ZCs6ZqQ6JeP5p2h5bmF5Y+Y5YyW77yM5Lya55uR5ZCs5Lik5qyh5Y+Y5YyW77yM6YeN5paw6ZqQ6JeP44CCXHJcbiAgICogICByZXBsYWNlQmFyQ2FsbGJhY2s/OiBGdW5jdGlvbiwgICAgLy8g5q+P5qyh5pu/5o2i5ZCO5Zue6LCDXHJcbiAgICogICBqaW5yaXNoaWNpQ2FsbGJhY2s/OiBGdW5jdGlvbiwgICAgLy8g5q+P5qyh5pu/5o2i5Li65LuK5pel6K+X6K+N5ZCO5Zue6LCDXHJcbiAgICogICBoaWRlQmFyQ2FsbGJhY2s/IEZ1bmN0aW9uICAgICAgICAgLy8g6ZqQ6JeP5ZCO5Zue6LCDXHJcbiAgICogfVxyXG4gICAqL1xyXG4gIHN0YXRpYyByZXBsYWNlKG9wdGlvbnM6IHsgYmFyU2VsZWN0b3I6IHN0cmluZywgaXNPYnNlcnZlQmFyOiBib29sZWFuLCBmb2xsb3dVcE9ic2VydmVTZWxlY3Rvcj86IHN0cmluZywgaGlkZUJhclNlbGVjdG9yOiBzdHJpbmcsIGlzT2JzZXJ2ZUhpZGVCYXI6IGJvb2xlYW4sIHJlcGxhY2VCYXJDYWxsYmFjaz86IEZ1bmN0aW9uLCBqaW5yaXNoaWNpQ2FsbGJhY2s/OiBGdW5jdGlvbiwgaGlkZUJhckNhbGxiYWNrPzogRnVuY3Rpb24gfSkge1xyXG4gICAgaWYgKCEkKG9wdGlvbnMuYmFyU2VsZWN0b3IpLnRleHQoKS5tYXRjaCgvdWtyYWluZXzkuYzlhYvlhbB8YmxhY2t86buR5Lq6L2kpKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICAvLyDlpoLmnpznp7vpmaTmqKrluYVcclxuICAgIGlmIChKU09OLnBhcnNlKFN0b3JlLmdldChPcHRpb25zLktleXMucmVtb3ZlQmFyKSkudmFsdWUpIHtcclxuICAgICAgLy8g6ZqQ6JeP5qiq5bmFXHJcbiAgICAgICQob3B0aW9ucy5oaWRlQmFyU2VsZWN0b3IpLmhpZGUoKTtcclxuICAgICAgaWYgKG9wdGlvbnMuaXNPYnNlcnZlSGlkZUJhcikge1xyXG4gICAgICAgIGxldCBpID0gMDtcclxuICAgICAgICAvLyDpmpDol4/mnaHluYXpppbmrKHliqDovb3vvJrnm5HlkKzmnaHluYXlj5jljJbvvIzlj5jljJblkI7lho3mrKHmiafooYxcclxuICAgICAgICBjb25zdCBvYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKCgpID0+IHtcclxuICAgICAgICAgICQob3B0aW9ucy5oaWRlQmFyU2VsZWN0b3IpLmhpZGUoKTtcclxuICAgICAgICAgIC8vIOabv+aNouS4pOasoeWQjue7k+adn+ebkeWQrFxyXG4gICAgICAgICAgaWYgKGkgPj0gMSkge1xyXG4gICAgICAgICAgICBvYnNlcnZlci5kaXNjb25uZWN0KCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpKys7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgb2JzZXJ2ZXIub2JzZXJ2ZSgkKG9wdGlvbnMuaGlkZUJhclNlbGVjdG9yKVswXSwge2NoaWxkTGlzdDogdHJ1ZSwgc3VidHJlZTogdHJ1ZX0pO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChvcHRpb25zLmhpZGVCYXJDYWxsYmFjaykge1xyXG4gICAgICAgIG9wdGlvbnMuaGlkZUJhckNhbGxiYWNrKCk7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuc3RvcmVKaW5yaXNoaWNpVmFsID0gSlNPTi5wYXJzZShTdG9yZS5nZXQoT3B0aW9ucy5LZXlzLmppbnJpc2hpY2kpKS52YWx1ZTtcclxuICAgIGlmICh0aGlzLnN0b3JlSmlucmlzaGljaVZhbCkge1xyXG4gICAgICB0aGlzLmdldEppbnJpc2hpY2koKS50aGVuKChkYXRhOiBhbnkpID0+IHtcclxuICAgICAgICB0aGlzLmppbnJpc2hpY2lDb250ZW50ID0gZGF0YTtcclxuICAgICAgICB0aGlzLnJlcGxhY2VPYnNlcnZlcihvcHRpb25zKTtcclxuICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnJlcGxhY2VPYnNlcnZlcihvcHRpb25zKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIOabv+aNouadoeW5heebkeWQrFxyXG4gICAqIEBwYXJhbSBvcHRpb25zXHJcbiAgICogQHByaXZhdGVcclxuICAgKi9cclxuICBwcml2YXRlIHN0YXRpYyByZXBsYWNlT2JzZXJ2ZXIob3B0aW9uczogeyBiYXJTZWxlY3Rvcjogc3RyaW5nLCBpc09ic2VydmVCYXI6IGJvb2xlYW4sIGhpZGVCYXJTZWxlY3Rvcjogc3RyaW5nLCBpc09ic2VydmVIaWRlQmFyOiBib29sZWFuLCBmb2xsb3dVcE9ic2VydmVTZWxlY3Rvcj86IHN0cmluZywgcmVwbGFjZUJhckNhbGxiYWNrPzogRnVuY3Rpb24sIGppbnJpc2hpY2lDYWxsYmFjaz86IEZ1bmN0aW9uIH0pIHtcclxuICAgIC8vIOmmluasoeabv+aNouaoquW5hVxyXG4gICAgdGhpcy5yZXBsYWNlQmFyKG9wdGlvbnMuYmFyU2VsZWN0b3IsIG9wdGlvbnMucmVwbGFjZUJhckNhbGxiYWNrLCBvcHRpb25zLmppbnJpc2hpY2lDYWxsYmFjayk7XHJcbiAgICBpZiAoIW9wdGlvbnMuaXNPYnNlcnZlQmFyKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGxldCBpID0gMDtcclxuICAgIC8vIOadoeW5hemmluasoeWKoOi9ve+8muebkeWQrOadoeW5heWPmOWMlu+8jOWPmOWMluWQjuWGjeasoeaJp+ihjFxyXG4gICAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcigoKSA9PiB7XHJcbiAgICAgIHRoaXMucmVwbGFjZUJhcihvcHRpb25zLmJhclNlbGVjdG9yLCBvcHRpb25zLnJlcGxhY2VCYXJDYWxsYmFjaywgb3B0aW9ucy5qaW5yaXNoaWNpQ2FsbGJhY2spO1xyXG4gICAgICAvLyDmm7/mjaLkuKTmrKHlkI7nu5PmnZ/nm5HlkKxcclxuICAgICAgaWYgKGkgPj0gMSkge1xyXG4gICAgICAgIG9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcclxuICAgICAgfVxyXG4gICAgICBpKys7XHJcbiAgICB9KTtcclxuICAgIG9ic2VydmVyLm9ic2VydmUoJChvcHRpb25zLmJhclNlbGVjdG9yKVswXSwge2NoaWxkTGlzdDogdHJ1ZX0pO1xyXG5cclxuICAgIGlmIChvcHRpb25zLmZvbGxvd1VwT2JzZXJ2ZVNlbGVjdG9yKSB7XHJcbiAgICAgIC8vIOWQjue7reWPmOWMllxyXG4gICAgICBuZXcgTXV0YXRpb25PYnNlcnZlcigoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5yZXBsYWNlQmFyKG9wdGlvbnMuYmFyU2VsZWN0b3IsIG9wdGlvbnMucmVwbGFjZUJhckNhbGxiYWNrLCBvcHRpb25zLmppbnJpc2hpY2lDYWxsYmFjayk7XHJcbiAgICAgIH0pLm9ic2VydmUoJChvcHRpb25zLmZvbGxvd1VwT2JzZXJ2ZVNlbGVjdG9yKVswXSwge2NoaWxkTGlzdDogdHJ1ZX0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICog5a6e6ZmF5pu/5o2i5p2h5bmFXHJcbiAgICogQHBhcmFtIHNlbGVjdG9yIOadoeW5hemAieaLqeWZqFxyXG4gICAqIEBwYXJhbSByZXBsYWNlQmFyQ2FsbGJhY2sg5pu/5o2i5ZCO5Zue6LCDXHJcbiAgICogQHBhcmFtIGppbnJpc2hpY2lDYWxsYmFjayDmm7/mjaLkuLrku4rml6Xor5for43lkI7lm57osINcclxuICAgKiBAcHJpdmF0ZVxyXG4gICAqL1xyXG4gIHByaXZhdGUgc3RhdGljIHJlcGxhY2VCYXIoc2VsZWN0b3I6IHN0cmluZywgcmVwbGFjZUJhckNhbGxiYWNrPzogRnVuY3Rpb24sIGppbnJpc2hpY2lDYWxsYmFjaz86IEZ1bmN0aW9uKSB7XHJcbiAgICBpZiAoJCgkKHNlbGVjdG9yKVswXSkudGV4dCgpLnJlcGxhY2UoL1xccysvZywgXCJcIikgPT09IEJhci50eHQpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLnN0b3JlSmlucmlzaGljaVZhbCkge1xyXG4gICAgICAkKHNlbGVjdG9yKS5jc3MoeydtaW5IZWlnaHQnOiAnMzBweCcsICdsaW5lSGVpZ2h0JzogJzMwcHgnfSk7XHJcbiAgICAgICQoc2VsZWN0b3IpLmh0bWwoYFxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjc3ZfYmFyXCI+XHJcbiAgICAgICAgICAke3RoaXMuamlucmlzaGljaUNvbnRlbnR9XHJcbiAgICAgICAgPC9kaXY+YFxyXG4gICAgICApO1xyXG4gICAgICBpZiAoamlucmlzaGljaUNhbGxiYWNrKSB7XHJcbiAgICAgICAgamlucmlzaGljaUNhbGxiYWNrKCk7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgICQoc2VsZWN0b3IpLmNzcyh7J21pbkhlaWdodCc6ICc0MHB4J30pO1xyXG4gICAgJChzZWxlY3RvcikuaHRtbChgXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNzdl9iYXJcIj5cclxuICAgICAgICAgIDx1bCBjbGFzcz0nY3N2X2Jhcl91bCc+PGxpPuWvjOW8ujwvbGk+PGxpPuawkeS4uzwvbGk+PGxpPuaWh+aYjjwvbGk+PGxpPuWSjOiwkDwvbGk+PGxpPuiHqueUsTwvbGk+PGxpPuW5s+etiTwvbGk+PGxpPuWFrOatozwvbGk+PGxpPuazleayuzwvbGk+PGxpPueIseWbvTwvbGk+PGxpPuaVrOS4mjwvbGk+PGxpPuivmuS/oTwvbGk+PGxpPuWPi+WWhDwvbGk+PC91bD48YnI+XHJcbiAgICAgICAgICA8dWwgY2xhc3M9J2Nzdl9iYXJfdWwnPjxsaT5Qcm9zcGVyaXR5PC9saT48bGk+RGVtb2NyYWN5PC9saT48bGk+Q2l2aWxpdHk8L2xpPjxsaT5IYXJtb255PC9saT48bGk+RnJlZWRvbTwvbGk+PGxpPkVxdWFsaXR5PC9saT48bGk+SnVzdGljZTwvbGk+PGxpPlJ1bGUgb2YgbGF3PC9saT48bGk+UGF0cmlvdGlzbTwvbGk+PGxpPkRlZGljYXRpb248L2xpPjxsaT5JbnRlZ3JpdHk8L2xpPjxsaT5GcmllbmRzaGlwPC9saT5cclxuICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgPC9kaXY+YFxyXG4gICAgKTtcclxuXHJcbiAgICAvLyDpgb/lhY3lh7rnjrDlpJrkuKrlr7zoh7TmoLflvI/mt7vliqDlpLHotKVcclxuICAgIGNvbnN0ICRiYXIgPSAkKHRoaXMucmVwbGFjZUJhclNlbGVjdG9yLmJhcik7XHJcbiAgICBpZiAoJGJhci5sZW5ndGggPT0gMikge1xyXG4gICAgICAkYmFyLmVxKDApLnJlbW92ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGJhclVsU2VsZWN0b3IgPSB0aGlzLnJlcGxhY2VCYXJTZWxlY3Rvci5iYXJVbDtcclxuICAgICQoYmFyVWxTZWxlY3RvcikuY3NzKHsnZGlzcGxheSc6ICdpbmxpbmUtYmxvY2snLCAnbGlzdFN0eWxlJzogJ25vbmUnLCAnbWFyZ2luJzogMCwgJ3BhZGRpbmcnOiAwLCAnd2lkdGgnOiAnYXV0byd9KTtcclxuICAgICQoYmFyVWxTZWxlY3RvciArICcgbGknKS5jc3Moeydjb2xvcic6ICcjREUyOTEwJywgJ2ZvbnRXZWlnaHQnOiAnYm9sZCcsICdmb250RmFtaWx5JzogJ0thaVRpJywgJ2Zsb2F0JzogJ2xlZnQnLCAncGFkZGluZ1JpZ2h0JzogJzEwcHgnLCAnbWluLXdpZHRoJzogJzgwcHgnLCAndGV4dEFsaWduJzogJ2NlbnRlcid9KTtcclxuICAgICQoYmFyVWxTZWxlY3RvciArICc6Zmlyc3QnKS5jc3MoJ3ZlcnRpY2FsQWxpZ24nLCAnYm90dG9tJyk7XHJcbiAgICAkKGJhclVsU2VsZWN0b3IgKyAnOmZpcnN0IGxpJykuY3NzKCdmb250U2l6ZScsICcxOHB4Jyk7XHJcbiAgICAkKGJhclVsU2VsZWN0b3IgKyAnOmVxKDEpIGxpJykuY3NzKCdmb250U2l6ZScsICcxM3B4Jyk7XHJcblxyXG4gICAgaWYgKHJlcGxhY2VCYXJDYWxsYmFjaykge1xyXG4gICAgICByZXBsYWNlQmFyQ2FsbGJhY2soKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIOiOt+WPluS7iuaXpeivl+ivjVxyXG4gICAqIEBwcml2YXRlXHJcbiAgICovXHJcbiAgc3RhdGljIGFzeW5jIGdldEppbnJpc2hpY2koKSB7XHJcbiAgICBsZXQgamlucmlzaGljaU9wdGlvbiA9IEpTT04ucGFyc2UoU3RvcmUuZ2V0KE9wdGlvbnMuS2V5cy5qaW5yaXNoaWNpKSk7XHJcbiAgICBpZiAoIWppbnJpc2hpY2lPcHRpb24udmFsdWUpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCByZXNwb25zZSA9IGF3YWl0IFJlcXVlc3QuZ2V0KHtcclxuICAgICAgdXJsOiAnaHR0cHM6Ly92Mi5qaW5yaXNoaWNpLmNvbS9vbmUuanNvbicsXHJcbiAgICAgIGRhdGFUeXBlOiBIdHRwRGF0YVR5cGUuSlNPTixcclxuICAgICAgLy8gaGVhZGVyczoge1xyXG4gICAgICAvLyAgICdYLVVzZXItVG9rZW4nOiBqaW5yaXNoaWNpT3B0aW9uLnRva2VuLFxyXG4gICAgICAvLyB9LFxyXG4gICAgICBzeW5jaHJvbm91czogdHJ1ZVxyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKCFyZXNwb25zZSB8fCByZXNwb25zZS5zdGF0dXMgIT09ICdzdWNjZXNzJykge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCfku4rml6Xor5for43ojrflj5blpLHotKUnLCByZXNwb25zZSk7XHJcbiAgICB9XHJcbiAgICAvLyAvLyDlrZjlgqggVG9rZW5cclxuICAgIC8vIGlmIChqaW5yaXNoaWNpT3B0aW9uLnRva2VuICE9PSByZXNwb25zZS5kYXRhLnRva2VuKSB7XHJcbiAgICAvLyAgIGppbnJpc2hpY2lPcHRpb24udG9rZW4gPSByZXNwb25zZS5kYXRhLnRva2VuO1xyXG4gICAgLy8gICBTdG9yZS5zZXQoT3B0aW9ucy5LZXlzLmppbnJpc2hpY2ksIEpTT04uc3RyaW5naWZ5KGppbnJpc2hpY2lPcHRpb24pKTtcclxuICAgIC8vIH1cclxuICAgIHJldHVybiByZXNwb25zZS5kYXRhLmNvbnRlbnQgKyAnIOKAlOKAlCAnICsgcmVzcG9uc2UuZGF0YS5vcmlnaW4uYXV0aG9yICsgJ+OAiicgKyByZXNwb25zZS5kYXRhLm9yaWdpbi50aXRsZSArICfjgIsnO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgQmFyIGZyb20gXCIuLi8uLi9jb21tb24vQmFyXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb2RlY2VwdCB7XHJcblxyXG4gIHN0YXRpYyBzZWxlY3RvcnMgPSB7XHJcbiAgICBiYXI6ICcuc3ViLWJhciAubWVzc2FnZScsXHJcbiAgICBoaWRlQmFyOiAnLnN1Yi1iYXInLFxyXG4gIH1cclxuXHJcbiAgc3RhdGljIHJlcGxhY2UoKSB7XHJcbiAgICBpZiAobG9jYXRpb24uaG9zdCA9PT0gJ2NvZGVjZXB0LmlvJykge1xyXG4gICAgICBCYXIucmVwbGFjZSh7XHJcbiAgICAgICAgYmFyU2VsZWN0b3I6IHRoaXMuc2VsZWN0b3JzLmJhciwgaXNPYnNlcnZlQmFyOiBmYWxzZSwgaGlkZUJhclNlbGVjdG9yOiB0aGlzLnNlbGVjdG9ycy5oaWRlQmFyLCBpc09ic2VydmVIaWRlQmFyOiBmYWxzZSwgamlucmlzaGljaUNhbGxiYWNrOiAoKSA9PiB7XHJcbiAgICAgICAgICAkKHRoaXMuc2VsZWN0b3JzLmJhcikuY3NzKCdjb2xvcicsICcjZWRmMmY3Jyk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2l0aHViIHtcclxuXHJcbiAgc3RhdGljIHNlbGVjdG9ycyA9IHtcclxuICAgIG5vdGljZTogJy5ib3JkZXIuanMtbm90aWNlJ1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIHJlcGxhY2UoKSB7XHJcbiAgICBpZiAobG9jYXRpb24uaHJlZiA9PT0gJ2h0dHBzOi8vZ2l0aHViLmNvbS8nKSB7XHJcbiAgICAgIGNvbnN0ICRub3RpY2UgPSAkKHRoaXMuc2VsZWN0b3JzLm5vdGljZSk7XHJcbiAgICAgIGlmICgkbm90aWNlLmxlbmd0aCA+IDAgJiYgJG5vdGljZS50ZXh0KCkudG9Mb3dlckNhc2UoKS5pbmRleE9mKCd1a3JhaW5lJykgIT0gLTEpIHtcclxuICAgICAgICAkbm90aWNlLnJlbW92ZSgpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCBCYXIgZnJvbSBcIi4uLy4uL2NvbW1vbi9CYXJcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvZGVjZXB0IHtcclxuXHJcbiAgc3RhdGljIHNlbGVjdG9ycyA9IHtcclxuICAgIGJhcjogJy50b3AtYmFyJyxcclxuICB9XHJcblxyXG4gIHN0YXRpYyByZXBsYWNlKCkge1xyXG4gICAgaWYgKGxvY2F0aW9uLmhvc3QgPT09ICdkb2NzLm5lc3Rqcy5jb20nKSB7XHJcbiAgICAgIEJhci5yZXBsYWNlKHtcclxuICAgICAgICBiYXJTZWxlY3RvcjogdGhpcy5zZWxlY3RvcnMuYmFyLCBpc09ic2VydmVCYXI6IGZhbHNlLCBoaWRlQmFyU2VsZWN0b3I6IHRoaXMuc2VsZWN0b3JzLmJhciwgaXNPYnNlcnZlSGlkZUJhcjogZmFsc2UsIHJlcGxhY2VCYXJDYWxsYmFjazogKCkgPT4ge1xyXG4gICAgICAgICAgJCh0aGlzLnNlbGVjdG9ycy5iYXIpLmNzcygncGFkZGluZycsICcwJyk7XHJcbiAgICAgICAgfSwgamlucmlzaGljaUNhbGxiYWNrOiAoKSA9PiB7XHJcbiAgICAgICAgICAkKHRoaXMuc2VsZWN0b3JzLmJhcikuY3NzKCdjb2xvcicsICcjZmZmJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IEJhciBmcm9tIFwiLi4vLi4vY29tbW9uL0JhclwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRW1iZXIge1xyXG5cclxuICBzdGF0aWMgc2VsZWN0b3JzID0ge1xyXG4gICAgYmFyOiAnLmNhbGxvdXQtYmFubmVyJyxcclxuICB9XHJcblxyXG4gIHN0YXRpYyByZXBsYWNlKCkge1xyXG4gICAgaWYgKGxvY2F0aW9uLmhvc3QgPT09ICdlbWJlcmpzLmNvbScpIHtcclxuICAgICAgQmFyLnJlcGxhY2Uoe1xyXG4gICAgICAgIGJhclNlbGVjdG9yOiB0aGlzLnNlbGVjdG9ycy5iYXIsIGlzT2JzZXJ2ZUJhcjogZmFsc2UsIGhpZGVCYXJTZWxlY3RvcjogdGhpcy5zZWxlY3RvcnMuYmFyLCBpc09ic2VydmVIaWRlQmFyOiBmYWxzZSwgamlucmlzaGljaUNhbGxiYWNrOiAoKSA9PiB7XHJcbiAgICAgICAgICAkKHRoaXMuc2VsZWN0b3JzLmJhcikuY3NzKCdjb2xvcicsICcjZmZmJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgICAgJCh0aGlzLnNlbGVjdG9ycy5iYXIpLmNzcyh7J2JhY2tncm91bmRDb2xvcic6ICcjMWMxZTI0JywgJ3BhZGRpbmcnOiAwfSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEFuZ3VsYXIge1xyXG5cclxuICBzdGF0aWMgc2VsZWN0b3JzID0ge1xyXG4gICAgbG9nbzogJ2ltZ1tzcmM9XCIvaW1hZ2VzL2xvZ29zL2plbmtpbnMvSmVua2lucy1zdG9wLXRoZS13YXIuc3ZnXCJdJyxcclxuICAgIHBhZ2VUaXRsZTogJy5wYWdlLXRpdGxlJ1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIHJlcGxhY2UoKSB7XHJcbiAgICBpZiAobG9jYXRpb24uaG9zdCA9PT0gJ3d3dy5qZW5raW5zLmlvJykge1xyXG4gICAgICAvLyDmm7/mjaLlm77moIdcclxuICAgICAgJCh0aGlzLnNlbGVjdG9ycy5sb2dvKS5yZXBsYWNlV2l0aChgPGltZyBzcmM9XCIvaW1hZ2VzL2xvZ29zL2plbmtpbnMvSmVua2lucy5zdmdcIj5gKTtcclxuXHJcbiAgICAgIC8vIOWIoOmZpOmAmuefpVxyXG4gICAgICAkKHRoaXMuc2VsZWN0b3JzLnBhZ2VUaXRsZSkubmV4dEFsbChcInBcIikuZWFjaCgoaSwgZWwpID0+IHtcclxuICAgICAgICBjb25zdCAkZWwgPSAkKGVsKTtcclxuICAgICAgICBpZiAoJGVsLnRleHQoKS50b0xvd2VyQ2FzZSgpLmluZGV4T2YoJ3VrcmFpbmUnKSAhPSAtMSkge1xyXG4gICAgICAgICAgJGVsLnJlbW92ZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICAgICQodGhpcy5zZWxlY3RvcnMucGFnZVRpdGxlKS5wYXJlbnQoKS5hcHBlbmQoJzxicj48YnI+PGJyPicpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBTdmVsdGVNYXRlcmlhbFVpIHtcclxuXHJcbiAgc3RhdGljIHNlbGVjdG9ycyA9IHtcclxuICAgIGJhcjogJy51a3JhaW5lJyxcclxuICB9XHJcblxyXG4gIHN0YXRpYyByZXBsYWNlKCkge1xyXG4gICAgaWYgKGxvY2F0aW9uLmhvc3QgPT09ICdzdmVsdGVtYXRlcmlhbHVpLmNvbScpIHtcclxuICAgICAgJCh0aGlzLnNlbGVjdG9ycy5iYXIpLmF0dHIoJ2NsYXNzJywgJycpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgQmFyIGZyb20gXCIuLi8uLi9jb21tb24vQmFyXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTeW5jdGhpbmcge1xyXG5cclxuICBzdGF0aWMgc2VsZWN0b3JzID0ge1xyXG4gICAgYmFyOiAnLmFsZXJ0JyxcclxuICB9XHJcblxyXG4gIHN0YXRpYyByZXBsYWNlKCkge1xyXG4gICAgaWYgKGxvY2F0aW9uLmhvc3QgPT09ICdzeW5jdGhpbmcubmV0Jykge1xyXG4gICAgICBCYXIucmVwbGFjZSh7XHJcbiAgICAgICAgYmFyU2VsZWN0b3I6IHRoaXMuc2VsZWN0b3JzLmJhciwgaXNPYnNlcnZlQmFyOiBmYWxzZSwgaGlkZUJhclNlbGVjdG9yOiB0aGlzLnNlbGVjdG9ycy5iYXIsIGlzT2JzZXJ2ZUhpZGVCYXI6IGZhbHNlLCByZXBsYWNlQmFyQ2FsbGJhY2s6ICgpID0+IHtcclxuICAgICAgICAgICQodGhpcy5zZWxlY3RvcnMuYmFyKS5jc3MoJ3RleHRBbGlnbicsICdjZW50ZXInKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCIvLyA9PVVzZXJTY3JpcHQ9PVxyXG4vLyBAbmFtZSAgICAgICAgIOaKgOacr+i/nOemu+aUv+ayu1xyXG4vLyBAbmFtZXNwYWNlICAgIGh0dHA6Ly90YW1wZXJtb25rZXkubmV0L1xyXG4vLyBAdmVyc2lvbiAgICAgIDEuMy4xXHJcbi8vIEBkZXNjcmlwdGlvbiAg56e76Zmk5pS/5rK755u45YWz5p2h5bmF5oiW5pu/5o2i5Li656S+5Lya5Li75LmJ5qC45b+D5Lu35YC86KeC44CB5LuK5pel6K+X6K+N77yM5pu/5o2i5pS/5rK755u45YWzIExvZ28g5Li65Y6f54mIIExvZ2/vvIzljrvpmaTmlL/msrvnm7jlhbPpgJrnn6XvvIzorqnmioDmnK/ov5znprvmlL/msrvjgIJcclxuLy8gQGF1dGhvciAgICAgICBkdWFubHVhblxyXG4vLyBAY29weXJpZ2h0ICAgIDIwMjIsIGR1YW5sdWFuIChodHRwczovL2dpdGh1Yi5jb20vZHVhbmx1YW4pXHJcbi8vIEBsaWNlbnNlICAgICAgQXBhY2hlLTIuMDsgaHR0cHM6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMC50eHRcclxuLy8gQG1hdGNoICAgICAgICAqOi8vcmVhY3QuZGV2LypcclxuLy8gQG1hdGNoICAgICAgICAqOi8vYW5ndWxhci5pby8qXHJcbi8vIEBtYXRjaCAgICAgICAgKjovL2p1bml0Lm9yZy8qXHJcbi8vIEBtYXRjaCAgICAgICAgKjovL2NvZGVjZXB0LmlvLypcclxuLy8gQG1hdGNoICAgICAgICAqOi8vZ2l0aHViLmNvbS8qXHJcbi8vIEBtYXRjaCAgICAgICAgKjovL2RvY3MubmVzdGpzLmNvbS8qXHJcbi8vIEBtYXRjaCAgICAgICAgKjovL2VtYmVyanMuY29tLypcclxuLy8gQG1hdGNoICAgICAgICAqOi8vd3d3LmVsZWN0cm9uanMub3JnLypcclxuLy8gQG1hdGNoICAgICAgICAqOi8vd3d3LmplbmtpbnMuaW8vKlxyXG4vLyBAbWF0Y2ggICAgICAgICo6Ly9zdmVsdGUuZGV2LypcclxuLy8gQG1hdGNoICAgICAgICAqOi8vc3ZlbHRlbWF0ZXJpYWx1aS5jb20vKlxyXG4vLyBAbWF0Y2ggICAgICAgICo6Ly9zeW5jdGhpbmcubmV0LypcclxuLy8gQG1hdGNoICAgICAgICAqOi8vZ3JlYXN5Zm9yay5vcmcvKlxyXG4vLyBAcmVxdWlyZSAgICAgIGh0dHBzOi8vY2RuLmJvb3RjZG4ubmV0L2FqYXgvbGlicy9qcXVlcnkvMy42LjAvanF1ZXJ5LnNsaW0ubWluLmpzXHJcbi8vIEBncmFudCAgICAgICAgR01fZ2V0VmFsdWVcclxuLy8gQGdyYW50ICAgICAgICBHTV9zZXRWYWx1ZVxyXG4vLyBAZ3JhbnQgICAgICAgIEdNX3JlZ2lzdGVyTWVudUNvbW1hbmRcclxuLy8gQGdyYW50ICAgICAgICBHTV91bnJlZ2lzdGVyTWVudUNvbW1hbmRcclxuLy8gQGdyYW50ICAgICAgICBHTV94bWxodHRwUmVxdWVzdFxyXG4vLyA9PS9Vc2VyU2NyaXB0PT1cclxuXHJcbi8vID09T3BlblVzZXJKUz09XHJcbi8vIEBhdXRob3IgICAgICAgZHVhbmx1YW5cclxuLy8gQHVwZGF0ZVVSTCAgICBodHRwczovL2Zhc3RseS5qc2RlbGl2ci5uZXQvZ2gvZHVhbmx1YW4vdGFtcGVybW9ua2V5LXNjcmlwdHMvbWFpbi9jb3JlLXNvY2lhbGlzdC12YWx1ZXMvZGlzdC9tYWluLmpzXHJcbi8vID09L09wZW5Vc2VySlM9PVxyXG5cclxuaW1wb3J0IEp1bml0IGZyb20gXCIuL3dlYnNpdGVzL2p1bml0L0p1bml0XCI7XHJcbmltcG9ydCBSZWFjdCBmcm9tIFwiLi93ZWJzaXRlcy9yZWFjdC9SZWFjdFwiO1xyXG5pbXBvcnQgQW5ndWxhciBmcm9tIFwiLi93ZWJzaXRlcy9hbmd1bGFyL0FuZ3VsYXJcIjtcclxuaW1wb3J0IENvZGVjZXB0IGZyb20gXCIuL3dlYnNpdGVzL2NvZGVjZXB0L0NvZGVjZXB0XCI7XHJcbmltcG9ydCBHaXRodWIgZnJvbSBcIi4vd2Vic2l0ZXMvZ2l0aHViL0dpdGh1YlwiO1xyXG5pbXBvcnQgTmVzdCBmcm9tIFwiLi93ZWJzaXRlcy9uZXN0L05lc3RcIjtcclxuaW1wb3J0IEVtYmVyIGZyb20gXCIuL3dlYnNpdGVzL2VtYmVyL0VtYmVyXCI7XHJcbmltcG9ydCBFbGVjdHJvbiBmcm9tIFwiLi93ZWJzaXRlcy9lbGVjdHJvbi9FbGVjdHJvblwiO1xyXG5pbXBvcnQgSmVua2lucyBmcm9tIFwiLi93ZWJzaXRlcy9qZW5raW5zL0plbmtpbnNcIjtcclxuaW1wb3J0IFN2ZWx0ZSBmcm9tIFwiLi93ZWJzaXRlcy9zdmVsdGUvU3ZlbHRlXCI7XHJcbmltcG9ydCBPcHRpb25zIGZyb20gXCIuL09wdGlvbnNcIjtcclxuaW1wb3J0IFN2ZWx0ZU1hdGVyaWFsVWkgZnJvbSBcIi4vd2Vic2l0ZXMvc3ZlbHRlbWF0ZXJpYWx1aS9TdmVsdGVNYXRlcmlhbFVpXCI7XHJcbmltcG9ydCBTeW5jdGhpbmcgZnJvbSBcIi4vd2Vic2l0ZXMvc3luY3RoaW5nL1N5bmN0aGluZ1wiO1xyXG5cclxuKCgpID0+IHtcclxuICAndXNlIHN0cmljdCc7XHJcblxyXG4gIE9wdGlvbnMucmVnaXN0ZXJBbGwoKTtcclxuICBPcHRpb25zLmxvYWRJbkdyZWFzeWZvcmsoKTtcclxuXHJcbiAgLy8gUmVhY3QucmVwbGFjZSgpO1xyXG4gIC8vIEFuZ3VsYXIucmVwbGFjZSgpO1xyXG4gIEp1bml0LnJlcGxhY2UoKTtcclxuICBDb2RlY2VwdC5yZXBsYWNlKCk7XHJcbiAgR2l0aHViLnJlcGxhY2UoKTtcclxuICBOZXN0LnJlcGxhY2UoKTtcclxuICBFbWJlci5yZXBsYWNlKCk7XHJcbiAgLy8gRWxlY3Ryb24ucmVwbGFjZSgpO1xyXG4gIEplbmtpbnMucmVwbGFjZSgpO1xyXG4gIC8vIFN2ZWx0ZS5yZXBsYWNlKCk7XHJcbiAgU3ZlbHRlTWF0ZXJpYWxVaS5yZXBsYWNlKCk7XHJcbiAgU3luY3RoaW5nLnJlcGxhY2UoKTtcclxufSkoKTtcclxuIiwiLyoqXHJcbiAqIOWtmOWCqFxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RvcmUge1xyXG5cclxuICAvKipcclxuICAgKiDojrflj5ZcclxuICAgKiBAcGFyYW0ga2V5IOmUrlxyXG4gICAqL1xyXG4gIHN0YXRpYyBnZXQoa2V5OiBzdHJpbmcpOiBhbnkge1xyXG4gICAgcmV0dXJuIEdNX2dldFZhbHVlKGtleSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDorr7nva5cclxuICAgKiBAcGFyYW0ga2V5IOmUrlxyXG4gICAqIEBwYXJhbSB2YWx1ZSDlgLxcclxuICAgKi9cclxuICBzdGF0aWMgc2V0KGtleTogc3RyaW5nLCB2YWx1ZTogYW55KSB7XHJcbiAgICBHTV9zZXRWYWx1ZShrZXksIHZhbHVlKTtcclxuICB9XHJcbn1cclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18oODIpO1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyg3MTgpO1xuIiwiIl0sIm5hbWVzIjpbIk1lbnVDbWQiLCJuYW1lIiwiZm4iLCJHTV9yZWdpc3Rlck1lbnVDb21tYW5kIiwibWVudUNtZElkIiwiR01fdW5yZWdpc3Rlck1lbnVDb21tYW5kIiwiU3RvcmUiLCJDb21tb25PcHRpb25zIiwib3B0aW9uIiwidmFsIiwidmFsdWUiLCJ2YWxJc0Jvb2wiLCJjdXJyZW50TWVudUNtZElkIiwicmVnaXN0ZXIiLCJsYWJlbCIsInNldCIsIkpTT04iLCJzdHJpbmdpZnkiLCJ1bnJlZ2lzdGVyIiwicmVnaXN0ZXJCb29sT3B0aW9uIiwid2luZG93IiwibG9jYXRpb24iLCJyZWxvYWQiLCJ1cmwiLCJvcHRpb25zIiwib3BlbiIsInN0b3JlT3B0aW9uIiwiZ2V0IiwicGFyc2UiLCJ2ZXJzaW9uIiwic2NyaXB0SWQiLCJsb2FkT3B0aW9uQ29udGVudEZuIiwiaG9zdCIsImhyZWYiLCJpbmRleE9mIiwic2VsZWN0b3IiLCJzY3JpcHRMaW5rcyIsInNjcmlwdE9wdGlvbnMiLCJzY3JpcHRDb250ZW50IiwiJGJvZHkiLCIkIiwiZG9jdW1lbnQiLCJib2R5IiwiJHNjcmlwdExpbmtzIiwiJHNjcmlwdENvbnRlbnQiLCJjaGlsZHJlbiIsImFmdGVyIiwib24iLCIkY3VycmVudExpIiwiaHRtbCIsInRleHQiLCJyZW1vdmVDbGFzcyIsIiRzY3JpcHRPcHRpb25zIiwicGFyZW50IiwiYWRkQ2xhc3MiLCJPcHRpb25zIiwicmVnaXN0ZXJBbGwiLCJTQ1JJUFRfSUQiLCJsb2FkSW5HcmVhc3lmb3JrIiwib3B0aW9uTmFtZSIsIm9wdGlvblZhbCIsIktleXMiLCJyZW1vdmVCYXIiLCJqaW5yaXNoaWNpIiwib3B0aW9uU2VsZWN0b3IiLCJyZW1vdmVCYXJPcHRpb24iLCJqaW5yaXNoaWNpT3B0aW9uIiwidG9rZW4iLCJKdW5pdCIsInNlbGVjdG9ycyIsImp1bml0QWJvdXQiLCJwcmV2QWxsIiwicmVtb3ZlIiwianVuaXRMb2dvIiwiYXR0ciIsImp1bml0TG9nb1VybCIsImp1bml0RmF2aWNvbiIsIkh0dHBEYXRhVHlwZSIsIlJlcXVlc3QiLCJzeW5jaHJvbm91cyIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwiR01feG1saHR0cFJlcXVlc3QiLCJvbmxvYWQiLCJyZXNwb25zZSIsImRhdGFUeXBlIiwicmVzcG9uc2VUZXh0Iiwib25lcnJvciIsImVycm9yIiwib25sb2FkMSIsImRldGFpbHMiLCJCYXIiLCJiYXJTZWxlY3RvciIsIm1hdGNoIiwiaGlkZUJhclNlbGVjdG9yIiwiaGlkZSIsImlzT2JzZXJ2ZUhpZGVCYXIiLCJpIiwib2JzZXJ2ZXIiLCJNdXRhdGlvbk9ic2VydmVyIiwiZGlzY29ubmVjdCIsIm9ic2VydmUiLCJjaGlsZExpc3QiLCJzdWJ0cmVlIiwiaGlkZUJhckNhbGxiYWNrIiwic3RvcmVKaW5yaXNoaWNpVmFsIiwiZ2V0SmlucmlzaGljaSIsInRoZW4iLCJkYXRhIiwiamlucmlzaGljaUNvbnRlbnQiLCJyZXBsYWNlT2JzZXJ2ZXIiLCJyZXBsYWNlQmFyIiwicmVwbGFjZUJhckNhbGxiYWNrIiwiamlucmlzaGljaUNhbGxiYWNrIiwiaXNPYnNlcnZlQmFyIiwiZm9sbG93VXBPYnNlcnZlU2VsZWN0b3IiLCJyZXBsYWNlIiwidHh0IiwiY3NzIiwiJGJhciIsInJlcGxhY2VCYXJTZWxlY3RvciIsImJhciIsImxlbmd0aCIsImVxIiwiYmFyVWxTZWxlY3RvciIsImJhclVsIiwic3RhdHVzIiwiY29uc29sZSIsImNvbnRlbnQiLCJvcmlnaW4iLCJhdXRob3IiLCJ0aXRsZSIsIkNvZGVjZXB0IiwiaGlkZUJhciIsIkdpdGh1YiIsIiRub3RpY2UiLCJub3RpY2UiLCJ0b0xvd2VyQ2FzZSIsIkVtYmVyIiwiQW5ndWxhciIsImxvZ28iLCJyZXBsYWNlV2l0aCIsInBhZ2VUaXRsZSIsIm5leHRBbGwiLCJlYWNoIiwiZWwiLCIkZWwiLCJhcHBlbmQiLCJTdmVsdGVNYXRlcmlhbFVpIiwiU3luY3RoaW5nIiwiTmVzdCIsIkplbmtpbnMiLCJrZXkiLCJHTV9nZXRWYWx1ZSIsIkdNX3NldFZhbHVlIl0sInNvdXJjZVJvb3QiOiIifQ==