/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

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
;// CONCATENATED MODULE: ./utils/src/gm/Http.ts
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { Http_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function Http_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function Http_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Http_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Http_createClass(Constructor, protoProps, staticProps) { if (protoProps) Http_defineProperties(Constructor.prototype, protoProps); if (staticProps) Http_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }



var Http = /*#__PURE__*/function () {
  function Http() {
    Http_classCallCheck(this, Http);
  }

  Http_createClass(Http, null, [{
    key: "get",
    value: function get(option) {
      option['method'] = 'GET'; // 同步时返回 Promise

      if (option.synchronous) {
        return new Promise(function (resolve, reject) {
          // @ts-ignore
          GM_xmlhttpRequest(_objectSpread(_objectSpread({}, option), {}, {
            onload: function onload(response) {
              resolve(option.dataType === HttpDataType.JSON ? JSON.parse(response.responseText) : response.responseText);
            },
            onerror: function onerror(error) {
              reject(error);
            }
          }));
        });
      } else {
        var onload1 = function onload1(details) {
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
      }
    }
  }]);

  return Http;
}();


;// CONCATENATED MODULE: ./utils/src/gm/MenuCmd.ts
function MenuCmd_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function MenuCmd_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function MenuCmd_createClass(Constructor, protoProps, staticProps) { if (protoProps) MenuCmd_defineProperties(Constructor.prototype, protoProps); if (staticProps) MenuCmd_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * 选项菜单
 */
var MenuCmd = /*#__PURE__*/function () {
  function MenuCmd() {
    MenuCmd_classCallCheck(this, MenuCmd);
  }

  MenuCmd_createClass(MenuCmd, null, [{
    key: "register",
    value:
    /**
     * 注册
     * @param name 名称
     * @param fn 点击菜单时执行的函数
     */
    function register(name, fn) {
      // @ts-ignore
      return GM_registerMenuCommand(name, fn);
    }
    /**
     * 注销
     * @param menuCmdId 注册时返回的 ID
     */

  }, {
    key: "unregister",
    value: function unregister(menuCmdId) {
      // @ts-ignore
      GM_unregisterMenuCommand(menuCmdId);
    }
  }]);

  return MenuCmd;
}();


;// CONCATENATED MODULE: ./core-socialist-values/src/common/Options.ts
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function Options_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Options_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Options_createClass(Constructor, protoProps, staticProps) { if (protoProps) Options_defineProperties(Constructor.prototype, protoProps); if (staticProps) Options_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function Options_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




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
      var _this = this;

      var val = option.value,
          valIsBool = typeof val === 'boolean';

      if (!valIsBool) {
        return;
      } // 注册选项


      var currentMenuCmdId = MenuCmd.register((val ? '☑️ ' : '🔲 ') + option.label, function () {
        // 点击值取反
        option.value = !option.value;
        Store.set(option.name, JSON.stringify(option)); // 取消注册

        MenuCmd.unregister(currentMenuCmdId); // 重新注册

        _this.registerBoolOption(option); // 刷新页面


        window.location.reload();
      }); // 保存选项 ID

      option.menuCmdId = currentMenuCmdId;
      Store.set(option.name, JSON.stringify(option));
    }
    /**
     * 注册所有选项
     */

  }, {
    key: "registerAll",
    value: function registerAll() {
      MenuCmd.register('更多设置', function () {
        window.open('https://greasyfork.org/scripts/440854', '_blank');
      });

      var _iterator = _createForOfIteratorHelper(this.options),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var option = _step.value;
          // TODO 【调试】不保留选项的值，每次都从 Store 中获取
          // Store.set(option.name, null);
          var storeOption = null;

          try {
            storeOption = JSON.parse(Store.get(option.name));
          } catch (e) {
            // FIXME 一段时间后可删除 try catch
            console.warn('旧的选项值非 JSON 格式');
            storeOption = option;
          } // 如果选项不存在 || 版本不一致 时重置选项


          if (storeOption === null || !storeOption['version'] || storeOption['version'] < option.version) {
            Store.set(option.name, JSON.stringify(option));
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
    value: function loadInGreasyfork() {
      var _this2 = this;

      if (location.host !== 'greasyfork.org' || location.href.indexOf('/scripts/440854') == -1) {
        return;
      }

      var selector = {
        scriptLinks: '#script-links',
        scriptOptions: '#script-options',
        scriptContent: '#script-content'
      };
      var $body = $('body'),
          $scriptLinks = $(selector.scriptLinks),
          $scriptContent = $(selector.scriptContent); // 添加脚本设置的选项卡

      $scriptLinks.children('li:eq(0)').after("<li><a href=\"javascript:;\" id=\"script-options\">\u811A\u672C\u8BBE\u7F6E</a></li>");
      $body.on('click', selector.scriptOptions, function () {
        var $scriptOptions = $(selector.scriptOptions); // 点击脚本设置的菜单样式

        var $currentLi = $scriptLinks.children('li.current');
        $currentLi.html("<a href=\"".concat(location.href, "\">").concat($currentLi.text(), "</a>"));
        $currentLi.removeClass('current');
        $scriptOptions.parent().addClass('current'); // 添加脚本设置的内容

        var scriptContent = '';

        var _iterator2 = _createForOfIteratorHelper(_this2.options),
            _step2;

        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var option = _step2.value;
            var storeOption = JSON.parse(Store.get(option.name)),
                optionName = storeOption.name,
                optionVal = storeOption.value;
            scriptContent += "<h3>".concat(option.label, "</h3>");

            switch (optionName) {
              case Options.Keys.removeBar:
                scriptContent += "<label><input type=\"checkbox\" id=\"script-options-".concat(optionName, "\" ").concat(optionVal ? 'checked' : '', "> \u662F\u5426\u9690\u85CF\u6761\u5E45\uFF08\u52FE\u9009\u540E\u5C06\u9690\u85CF\u6761\u5E45\u800C\u4E0D\u662F\u66FF\u6362\u5176\u5185\u5BB9\uFF09</label>");
                break;

              case Options.Keys.jinrishici:
                scriptContent += "<label><input type=\"checkbox\" id=\"script-options-".concat(optionName, "-enabled\" ").concat(optionVal ? 'checked' : '', "> \u542F\u7528<a href=\"https://www.jinrishici.com\" target = \"_blank\">\u4ECA\u65E5\u8BD7\u8BCD</a>\uFF08\u4ECD\u9700\u53D6\u6D88\u52FE\u9009\u201C\u662F\u5426\u9690\u85CF\u6761\u5E45\u201D\u624D\u80FD\u751F\u6548\uFF09</label>");
                break;
            }
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }

        $scriptContent.html(scriptContent); // region 添加脚本设置的事件
        // 是否隐藏条幅

        var optionSelector = '#script-options-' + Options.Keys.removeBar;
        $body.on('change', optionSelector, function () {
          var removeBarOption = JSON.parse(Store.get(Options.Keys.removeBar));
          removeBarOption.value = !removeBarOption.value; // 重新注册菜单

          MenuCmd.unregister(removeBarOption.menuCmdId);

          _this2.registerBoolOption(removeBarOption);
        }); // 启用今日诗词

        optionSelector = '#script-options-' + Options.Keys.jinrishici + '-enabled';
        $body.on('change', optionSelector, function () {
          var jinrishiciOption = JSON.parse(Store.get(Options.Keys.jinrishici));
          jinrishiciOption.value = !jinrishiciOption.value; // 重新注册菜单

          MenuCmd.unregister(jinrishiciOption.menuCmdId);

          _this2.registerBoolOption(jinrishiciOption);
        }); // endregion
      });
    }
  }]);

  return Options;
}();

Options_defineProperty(Options, "Keys", {
  removeBar: 'removeBar',
  jinrishici: 'jinrishici'
});

Options_defineProperty(Options, "options", [{
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


;// CONCATENATED MODULE: ./core-socialist-values/src/common/Bar.ts
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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
     *   isObserveBar: boolean,            // 是否监听条幅变化
     *   hideBarSelector: string,          // 隐藏条幅选择器
     *   isObserveHideBar: boolean,        // 是否监听隐藏条幅变化
     *   followUpObserveSelector?: string, // 后续监听选择器
     *   csvCallback?: Function        // 替换后回调
     * }
     */
    function replace(options) {
      var _this = this;

      if (!$(options.barSelector).text().match(/ukraine|乌克兰|black|黑人/i)) {
        return;
      } // 如果移除横幅


      if (JSON.parse(Store.get(Options.Keys.removeBar)).value) {
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

        return;
      }

      this.storeJinrishiciVal = JSON.parse(Store.get(Options.Keys.jinrishici)).value;

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
      this.replaceBar(options.barSelector, options.csvCallback, options.jinrishiciCallback);

      if (!options.isObserveBar) {
        return;
      }

      var i = 0; // 条幅首次加载：监听条幅变化，变化后再次执行

      var observer = new MutationObserver(function () {
        _this2.replaceBar(options.barSelector, options.csvCallback, options.jinrishiciCallback); // 替换两次后结束监听


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
          _this2.replaceBar(options.barSelector, options.csvCallback, options.jinrishiciCallback);
        }).observe($(options.followUpObserveSelector)[0], {
          childList: true
        });
      }
    }
    /**
     * 实际替换条幅
     * @param selector 条幅选择器
     * @param csvCallback 替换后回调
     * @param jinrishiciCallback 替换为今日诗词后回调
     * @private
     */

  }, {
    key: "replaceBar",
    value: function replaceBar(selector, csvCallback, jinrishiciCallback) {
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

      if (csvCallback) {
        csvCallback();
      }
    }
    /**
     * 获取今日诗词
     * @private
     */

  }, {
    key: "getJinrishici",
    value: function () {
      var _getJinrishici = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var jinrishiciOption, response;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                jinrishiciOption = JSON.parse(Store.get(Options.Keys.jinrishici));

                if (jinrishiciOption.value) {
                  _context.next = 3;
                  break;
                }

                return _context.abrupt("return");

              case 3:
                _context.next = 5;
                return Http.get({
                  url: 'https://v2.jinrishici.com/one.json',
                  dataType: HttpDataType.JSON,
                  // headers: {
                  //   'X-User-Token': jinrishiciOption.token,
                  // },
                  synchronous: true
                });

              case 5:
                response = _context.sent;

                // @ts-ignore
                if (!response || response.status !== 'success') {
                  console.error('今日诗词获取失败', response);
                } // // 存储 Token
                // if (jinrishiciOption.token !== response.data.token) {
                //   jinrishiciOption.token = response.data.token;
                //   Store.set(Options.Keys.jinrishici, JSON.stringify(jinrishiciOption));
                // }
                // @ts-ignore


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
      if (location.host === 'reactjs.org') {
        Bar.replace({
          barSelector: this.selectors.bar,
          isObserveBar: true,
          hideBarSelector: this.selectors.hideBar,
          isObserveHideBar: false,
          followUpObserveSelector: this.selectors.followUpObserveElement
        });
      }
    }
  }]);

  return React;
}();

React_defineProperty(React, "selectors", {
  bar: '.css-lpiycv',
  hideBar: '.css-1loxuh3',
  followUpObserveElement: '#gatsby-focus-wrapper'
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
          csvCallback: function csvCallback() {
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
          csvCallback: function csvCallback() {
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
          csvCallback: function csvCallback() {
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
          csvCallback: function csvCallback() {
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
// @version      1.3.0
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
// @author duanluan
// ==/OpenUserJS==














(function () {
  'use strict';

  Options.registerAll();
  Options.loadInGreasyfork();
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
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozt5QkFka0I2Qyx3QkFFQTtFQUNqQjFDLEdBQUcsRUFBRTtBQURZOzs7O0FDSnJCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsQ0FBQyxZQUFNO0VBQ0w7O0VBRUE3RSxtQkFBQTtFQUNBQSx3QkFBQTtFQUVBd0YsYUFBQTtFQUNBRyxlQUFBO0VBQ0FwSSxhQUFBO0VBQ0EwSSxnQkFBQTtFQUNBQyxjQUFBO0VBQ0FzQixxQkFBQTtFQUNBbkIsYUFBQTtFQUNBQyxnQkFBQTtFQUNBbUIsdUJBQUE7RUFDQVYsY0FBQTtFQUNBTyx3QkFBQTtFQUNBQyxpQkFBQTtBQUNELENBbEJELEkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90YW1wZXJtb25rZXktc2NyaXB0LXV0aWxzLy4vY29yZS1zb2NpYWxpc3QtdmFsdWVzL3NyYy93ZWJzaXRlcy9qdW5pdC9KdW5pdC50cyIsIndlYnBhY2s6Ly90YW1wZXJtb25rZXktc2NyaXB0LXV0aWxzLy4vdXRpbHMvc3JjL2dtL1N0b3JlLnRzIiwid2VicGFjazovL3RhbXBlcm1vbmtleS1zY3JpcHQtdXRpbHMvLi91dGlscy9zcmMvZ20vZW51bS9IdHRwRGF0YVR5cGUudHMiLCJ3ZWJwYWNrOi8vdGFtcGVybW9ua2V5LXNjcmlwdC11dGlscy8uL3V0aWxzL3NyYy9nbS9IdHRwLnRzIiwid2VicGFjazovL3RhbXBlcm1vbmtleS1zY3JpcHQtdXRpbHMvLi91dGlscy9zcmMvZ20vTWVudUNtZC50cyIsIndlYnBhY2s6Ly90YW1wZXJtb25rZXktc2NyaXB0LXV0aWxzLy4vY29yZS1zb2NpYWxpc3QtdmFsdWVzL3NyYy9jb21tb24vT3B0aW9ucy50cyIsIndlYnBhY2s6Ly90YW1wZXJtb25rZXktc2NyaXB0LXV0aWxzLy4vY29yZS1zb2NpYWxpc3QtdmFsdWVzL3NyYy9jb21tb24vQmFyLnRzIiwid2VicGFjazovL3RhbXBlcm1vbmtleS1zY3JpcHQtdXRpbHMvLi9jb3JlLXNvY2lhbGlzdC12YWx1ZXMvc3JjL3dlYnNpdGVzL3JlYWN0L1JlYWN0LnRzIiwid2VicGFjazovL3RhbXBlcm1vbmtleS1zY3JpcHQtdXRpbHMvLi9jb3JlLXNvY2lhbGlzdC12YWx1ZXMvc3JjL3dlYnNpdGVzL2FuZ3VsYXIvQW5ndWxhci50cyIsIndlYnBhY2s6Ly90YW1wZXJtb25rZXktc2NyaXB0LXV0aWxzLy4vY29yZS1zb2NpYWxpc3QtdmFsdWVzL3NyYy93ZWJzaXRlcy9jb2RlY2VwdC9Db2RlY2VwdC50cyIsIndlYnBhY2s6Ly90YW1wZXJtb25rZXktc2NyaXB0LXV0aWxzLy4vY29yZS1zb2NpYWxpc3QtdmFsdWVzL3NyYy93ZWJzaXRlcy9naXRodWIvR2l0aHViLnRzIiwid2VicGFjazovL3RhbXBlcm1vbmtleS1zY3JpcHQtdXRpbHMvLi9jb3JlLXNvY2lhbGlzdC12YWx1ZXMvc3JjL3dlYnNpdGVzL25lc3QvTmVzdC50cyIsIndlYnBhY2s6Ly90YW1wZXJtb25rZXktc2NyaXB0LXV0aWxzLy4vY29yZS1zb2NpYWxpc3QtdmFsdWVzL3NyYy93ZWJzaXRlcy9lbWJlci9FbWJlci50cyIsIndlYnBhY2s6Ly90YW1wZXJtb25rZXktc2NyaXB0LXV0aWxzLy4vY29yZS1zb2NpYWxpc3QtdmFsdWVzL3NyYy93ZWJzaXRlcy9lbGVjdHJvbi9FbGVjdHJvbi50cyIsIndlYnBhY2s6Ly90YW1wZXJtb25rZXktc2NyaXB0LXV0aWxzLy4vY29yZS1zb2NpYWxpc3QtdmFsdWVzL3NyYy93ZWJzaXRlcy9qZW5raW5zL0plbmtpbnMudHMiLCJ3ZWJwYWNrOi8vdGFtcGVybW9ua2V5LXNjcmlwdC11dGlscy8uL2NvcmUtc29jaWFsaXN0LXZhbHVlcy9zcmMvd2Vic2l0ZXMvc3ZlbHRlL1N2ZWx0ZS50cyIsIndlYnBhY2s6Ly90YW1wZXJtb25rZXktc2NyaXB0LXV0aWxzLy4vY29yZS1zb2NpYWxpc3QtdmFsdWVzL3NyYy93ZWJzaXRlcy9zdmVsdGVtYXRlcmlhbHVpL1N2ZWx0ZU1hdGVyaWFsVWkudHMiLCJ3ZWJwYWNrOi8vdGFtcGVybW9ua2V5LXNjcmlwdC11dGlscy8uL2NvcmUtc29jaWFsaXN0LXZhbHVlcy9zcmMvd2Vic2l0ZXMvc3luY3RoaW5nL1N5bmN0aGluZy50cyIsIndlYnBhY2s6Ly90YW1wZXJtb25rZXktc2NyaXB0LXV0aWxzLy4vY29yZS1zb2NpYWxpc3QtdmFsdWVzL3NyYy9tYWluLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGNsYXNzIEp1bml0IHtcblxuICBwcml2YXRlIHN0YXRpYyBzZWxlY3RvcnMgPSB7XG4gICAganVuaXRBYm91dDogJyNhYm91dCcsXG4gICAganVuaXRMb2dvOiAnaW1nW3NyYz1cIi9qdW5pdDUvYXNzZXRzL2ltZy9qdW5pdDUtbG9nby5wbmdcIl0nLFxuICAgIGp1bml0RmF2aWNvbjogJ2xpbmtbcmVsPVwiaWNvblwiXScsXG4gIH1cblxuICBwcml2YXRlIHN0YXRpYyBqdW5pdExvZ29VcmwgPSAnaHR0cHM6Ly9yYXcuaXFpcS5pby9kdWFubHVhbi90YW1wZXJtb25rZXktc2NyaXB0cy9tYWluL2NvcmUtc29jaWFsaXN0LXZhbHVlcy9zcmMvanVuaXQvaW1ncy9qdW5pdDUtbG9nby5wbmcnXG5cbiAgc3RhdGljIHJlcGxhY2UoKSB7XG4gICAgaWYgKGxvY2F0aW9uLmhyZWYgPT09ICdodHRwczovL2p1bml0Lm9yZy9qdW5pdDUvJykge1xuICAgICAgJCh0aGlzLnNlbGVjdG9ycy5qdW5pdEFib3V0KS5wcmV2QWxsKCkucmVtb3ZlKCk7XG4gICAgICAkKHRoaXMuc2VsZWN0b3JzLmp1bml0TG9nbykuYXR0cignc3JjJywgdGhpcy5qdW5pdExvZ29VcmwpO1xuICAgICAgJCh0aGlzLnNlbGVjdG9ycy5qdW5pdEZhdmljb24pLmF0dHIoJ2hyZWYnLCB0aGlzLmp1bml0TG9nb1VybCk7XG4gICAgfVxuICB9XG59XG4iLCIvKipcbiAqIOWtmOWCqFxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdG9yZSB7XG5cbiAgLyoqXG4gICAqIOiOt+WPllxuICAgKiBAcGFyYW0ga2V5IOmUrlxuICAgKi9cbiAgc3RhdGljIGdldChrZXk6IHN0cmluZyk6IGFueSB7XG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIHJldHVybiBHTV9nZXRWYWx1ZShrZXkpO1xuICB9XG5cbiAgLyoqXG4gICAqIOiuvue9rlxuICAgKiBAcGFyYW0ga2V5IOmUrlxuICAgKiBAcGFyYW0gdmFsdWUg5YC8XG4gICAqL1xuICBzdGF0aWMgc2V0KGtleTogc3RyaW5nLCB2YWx1ZTogYW55KSB7XG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIEdNX3NldFZhbHVlKGtleSwgdmFsdWUpO1xuICB9XG59XG4iLCJleHBvcnQgZW51bSBIdHRwRGF0YVR5cGUge1xuICBKU09OID0gXCJKU09OXCJcbn1cbiIsImltcG9ydCB7SHR0cERhdGFUeXBlfSBmcm9tIFwiLi9lbnVtL0h0dHBEYXRhVHlwZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIdHRwIHtcblxuICBzdGF0aWMgZ2V0KG9wdGlvbjogeyB1cmw6IHN0cmluZywgZGF0YVR5cGU/OiBIdHRwRGF0YVR5cGUsIHN5bmNocm9ub3VzPzogYm9vbGVhbiwgb25sb2FkPzogRnVuY3Rpb24gfSkge1xuICAgIG9wdGlvblsnbWV0aG9kJ10gPSAnR0VUJztcblxuICAgIC8vIOWQjOatpeaXtui/lOWbniBQcm9taXNlXG4gICAgaWYgKG9wdGlvbi5zeW5jaHJvbm91cykge1xuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICBHTV94bWxodHRwUmVxdWVzdCh7XG4gICAgICAgICAgLi4ub3B0aW9uLFxuICAgICAgICAgIG9ubG9hZDogKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICByZXNvbHZlKG9wdGlvbi5kYXRhVHlwZSA9PT0gSHR0cERhdGFUeXBlLkpTT04gPyBKU09OLnBhcnNlKHJlc3BvbnNlLnJlc3BvbnNlVGV4dCkgOiByZXNwb25zZS5yZXNwb25zZVRleHQpO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgb25lcnJvcjogKGVycm9yKSA9PiB7XG4gICAgICAgICAgICByZWplY3QoZXJyb3IpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9KVxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBvbmxvYWQxID0gZnVuY3Rpb24gKGRldGFpbHMpIHtcbiAgICAgICAgbGV0IHJlc3BvbnNlO1xuICAgICAgICBpZiAob3B0aW9uLmRhdGFUeXBlID09PSBIdHRwRGF0YVR5cGUuSlNPTikge1xuICAgICAgICAgIHJlc3BvbnNlID0gSlNPTi5wYXJzZShkZXRhaWxzLnJlc3BvbnNlVGV4dCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmVzcG9uc2UgPSBkZXRhaWxzLnJlc3BvbnNlO1xuICAgICAgICB9XG4gICAgICAgIG9wdGlvbi5vbmxvYWQocmVzcG9uc2UpO1xuICAgICAgfVxuICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgR01feG1saHR0cFJlcXVlc3Qoey4uLm9wdGlvbiwgb25sb2FkOiBvbmxvYWQxfSk7XG4gICAgfVxuICB9XG59XG4iLCIvKipcbiAqIOmAiemhueiPnOWNlVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNZW51Q21kIHtcblxuICAvKipcbiAgICog5rOo5YaMXG4gICAqIEBwYXJhbSBuYW1lIOWQjeensFxuICAgKiBAcGFyYW0gZm4g54K55Ye76I+c5Y2V5pe25omn6KGM55qE5Ye95pWwXG4gICAqL1xuICBzdGF0aWMgcmVnaXN0ZXIobmFtZTogc3RyaW5nLCBmbjogRnVuY3Rpb24pOiBudW1iZXIge1xuICAgIC8vIEB0cy1pZ25vcmVcbiAgICByZXR1cm4gR01fcmVnaXN0ZXJNZW51Q29tbWFuZChuYW1lLCBmbik7XG4gIH1cblxuICAvKipcbiAgICog5rOo6ZSAXG4gICAqIEBwYXJhbSBtZW51Q21kSWQg5rOo5YaM5pe26L+U5Zue55qEIElEXG4gICAqL1xuICBzdGF0aWMgdW5yZWdpc3RlcihtZW51Q21kSWQ6IG51bWJlcikge1xuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBHTV91bnJlZ2lzdGVyTWVudUNvbW1hbmQobWVudUNtZElkKTtcbiAgfVxufVxuIiwiaW1wb3J0IFN0b3JlIGZyb20gXCIuLi8uLi8uLi91dGlscy9zcmMvZ20vU3RvcmVcIjtcbmltcG9ydCBNZW51Q21kIGZyb20gXCIuLi8uLi8uLi91dGlscy9zcmMvZ20vTWVudUNtZFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBPcHRpb25zIHtcbiAgLyoqXG4gICAqIOmAiemhuSBLZXlcbiAgICovXG4gIHN0YXRpYyBLZXlzID0ge1xuICAgIHJlbW92ZUJhcjogJ3JlbW92ZUJhcicsXG4gICAgamlucmlzaGljaTogJ2ppbnJpc2hpY2knLFxuICB9XG5cbiAgLyoqXG4gICAqIOmAiemhuVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgcHJpdmF0ZSBzdGF0aWMgb3B0aW9ucyA9IFtcbiAgICB7bGFiZWw6ICfpmpDol4/mnaHluYUnLCBuYW1lOiBPcHRpb25zLktleXMucmVtb3ZlQmFyLCB2ZXJzaW9uOiAxLCB2YWx1ZTogZmFsc2UsIG1lbnVDbWRJZDogbnVsbH0sXG4gICAge2xhYmVsOiAn5LuK5pel6K+X6K+NJywgbmFtZTogT3B0aW9ucy5LZXlzLmppbnJpc2hpY2ksIHZlcnNpb246IDEsIHZhbHVlOiBmYWxzZSwgbWVudUNtZElkOiBudWxsLCB0b2tlbjogJyd9XG4gIF07XG5cbiAgLyoqXG4gICAqIOazqOWGjCBib29sIOexu+Wei+eahOmAiemhuVxuICAgKiBAcGFyYW0gb3B0aW9uIOmAiemhuVxuICAgKi9cbiAgc3RhdGljIHJlZ2lzdGVyQm9vbE9wdGlvbihvcHRpb246IGFueSkge1xuICAgIGNvbnN0IHZhbCA9IG9wdGlvbi52YWx1ZSwgdmFsSXNCb29sID0gKHR5cGVvZiB2YWwgPT09ICdib29sZWFuJyk7XG5cbiAgICBpZiAoIXZhbElzQm9vbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICAvLyDms6jlhozpgInpoblcbiAgICBjb25zdCBjdXJyZW50TWVudUNtZElkID0gTWVudUNtZC5yZWdpc3RlcigodmFsID8gJ+KYke+4jyAnIDogJ/CflLIgJykgKyBvcHRpb24ubGFiZWwsICgpID0+IHtcbiAgICAgIC8vIOeCueWHu+WAvOWPluWPjVxuICAgICAgb3B0aW9uLnZhbHVlID0gIW9wdGlvbi52YWx1ZTtcbiAgICAgIFN0b3JlLnNldChvcHRpb24ubmFtZSwgSlNPTi5zdHJpbmdpZnkob3B0aW9uKSk7XG5cbiAgICAgIC8vIOWPlua2iOazqOWGjFxuICAgICAgTWVudUNtZC51bnJlZ2lzdGVyKGN1cnJlbnRNZW51Q21kSWQpO1xuICAgICAgLy8g6YeN5paw5rOo5YaMXG4gICAgICB0aGlzLnJlZ2lzdGVyQm9vbE9wdGlvbihvcHRpb24pO1xuICAgICAgLy8g5Yi35paw6aG16Z2iXG4gICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG4gICAgfSk7XG5cbiAgICAvLyDkv53lrZjpgInpobkgSURcbiAgICBvcHRpb24ubWVudUNtZElkID0gY3VycmVudE1lbnVDbWRJZDtcbiAgICBTdG9yZS5zZXQob3B0aW9uLm5hbWUsIEpTT04uc3RyaW5naWZ5KG9wdGlvbikpO1xuICB9XG5cbiAgLyoqXG4gICAqIOazqOWGjOaJgOaciemAiemhuVxuICAgKi9cbiAgc3RhdGljIHJlZ2lzdGVyQWxsKCkge1xuICAgIE1lbnVDbWQucmVnaXN0ZXIoJ+abtOWkmuiuvue9ricsICgpID0+IHtcbiAgICAgIHdpbmRvdy5vcGVuKCdodHRwczovL2dyZWFzeWZvcmsub3JnL3NjcmlwdHMvNDQwODU0JywgJ19ibGFuaycpO1xuICAgIH0pO1xuXG4gICAgZm9yIChjb25zdCBvcHRpb24gb2YgdGhpcy5vcHRpb25zKSB7XG4gICAgICAvLyBUT0RPIOOAkOiwg+ivleOAkeS4jeS/neeVmemAiemhueeahOWAvO+8jOavj+asoemDveS7jiBTdG9yZSDkuK3ojrflj5ZcbiAgICAgIC8vIFN0b3JlLnNldChvcHRpb24ubmFtZSwgbnVsbCk7XG5cbiAgICAgIGxldCBzdG9yZU9wdGlvbiA9IG51bGw7XG4gICAgICB0cnkge1xuICAgICAgICBzdG9yZU9wdGlvbiA9IEpTT04ucGFyc2UoU3RvcmUuZ2V0KG9wdGlvbi5uYW1lKSk7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIEZJWE1FIOS4gOauteaXtumXtOWQjuWPr+WIoOmZpCB0cnkgY2F0Y2hcbiAgICAgICAgY29uc29sZS53YXJuKCfml6fnmoTpgInpobnlgLzpnZ4gSlNPTiDmoLzlvI8nKTtcbiAgICAgICAgc3RvcmVPcHRpb24gPSBvcHRpb247XG4gICAgICB9XG5cbiAgICAgIC8vIOWmguaenOmAiemhueS4jeWtmOWcqCB8fCDniYjmnKzkuI3kuIDoh7Qg5pe26YeN572u6YCJ6aG5XG4gICAgICBpZiAoc3RvcmVPcHRpb24gPT09IG51bGwgfHwgIXN0b3JlT3B0aW9uWyd2ZXJzaW9uJ10gfHwgc3RvcmVPcHRpb25bJ3ZlcnNpb24nXSA8IG9wdGlvbi52ZXJzaW9uKSB7XG4gICAgICAgIFN0b3JlLnNldChvcHRpb24ubmFtZSwgSlNPTi5zdHJpbmdpZnkob3B0aW9uKSk7XG4gICAgICAgIHN0b3JlT3B0aW9uID0gb3B0aW9uO1xuICAgICAgfVxuICAgICAgdGhpcy5yZWdpc3RlckJvb2xPcHRpb24oc3RvcmVPcHRpb24pO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiDlnKjpobXpnaLkuK3liqDovb3pgInpoblcbiAgICovXG4gIHN0YXRpYyBsb2FkSW5HcmVhc3lmb3JrKCkge1xuICAgIGlmIChsb2NhdGlvbi5ob3N0ICE9PSAnZ3JlYXN5Zm9yay5vcmcnIHx8IGxvY2F0aW9uLmhyZWYuaW5kZXhPZignL3NjcmlwdHMvNDQwODU0JykgPT0gLTEpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3Qgc2VsZWN0b3IgPSB7XG4gICAgICBzY3JpcHRMaW5rczogJyNzY3JpcHQtbGlua3MnLFxuICAgICAgc2NyaXB0T3B0aW9uczogJyNzY3JpcHQtb3B0aW9ucycsXG4gICAgICBzY3JpcHRDb250ZW50OiAnI3NjcmlwdC1jb250ZW50JyxcbiAgICB9XG4gICAgY29uc3QgJGJvZHkgPSAkKCdib2R5JyksICRzY3JpcHRMaW5rcyA9ICQoc2VsZWN0b3Iuc2NyaXB0TGlua3MpLCAkc2NyaXB0Q29udGVudCA9ICQoc2VsZWN0b3Iuc2NyaXB0Q29udGVudCk7XG5cbiAgICAvLyDmt7vliqDohJrmnKzorr7nva7nmoTpgInpobnljaFcbiAgICAkc2NyaXB0TGlua3MuY2hpbGRyZW4oJ2xpOmVxKDApJykuYWZ0ZXIoYDxsaT48YSBocmVmPVwiamF2YXNjcmlwdDo7XCIgaWQ9XCJzY3JpcHQtb3B0aW9uc1wiPuiEmuacrOiuvue9rjwvYT48L2xpPmApXG4gICAgJGJvZHkub24oJ2NsaWNrJywgc2VsZWN0b3Iuc2NyaXB0T3B0aW9ucywgKCkgPT4ge1xuICAgICAgY29uc3QgJHNjcmlwdE9wdGlvbnMgPSAkKHNlbGVjdG9yLnNjcmlwdE9wdGlvbnMpO1xuICAgICAgLy8g54K55Ye76ISa5pys6K6+572u55qE6I+c5Y2V5qC35byPXG4gICAgICBjb25zdCAkY3VycmVudExpID0gJHNjcmlwdExpbmtzLmNoaWxkcmVuKCdsaS5jdXJyZW50Jyk7XG4gICAgICAkY3VycmVudExpLmh0bWwoYDxhIGhyZWY9XCIke2xvY2F0aW9uLmhyZWZ9XCI+JHskY3VycmVudExpLnRleHQoKX08L2E+YCk7XG4gICAgICAkY3VycmVudExpLnJlbW92ZUNsYXNzKCdjdXJyZW50Jyk7XG4gICAgICAkc2NyaXB0T3B0aW9ucy5wYXJlbnQoKS5hZGRDbGFzcygnY3VycmVudCcpO1xuXG4gICAgICAvLyDmt7vliqDohJrmnKzorr7nva7nmoTlhoXlrrlcbiAgICAgIGxldCBzY3JpcHRDb250ZW50ID0gJyc7XG4gICAgICBmb3IgKGNvbnN0IG9wdGlvbiBvZiB0aGlzLm9wdGlvbnMpIHtcbiAgICAgICAgY29uc3Qgc3RvcmVPcHRpb24gPSBKU09OLnBhcnNlKFN0b3JlLmdldChvcHRpb24ubmFtZSkpLCBvcHRpb25OYW1lID0gc3RvcmVPcHRpb24ubmFtZSwgb3B0aW9uVmFsID0gc3RvcmVPcHRpb24udmFsdWU7XG5cbiAgICAgICAgc2NyaXB0Q29udGVudCArPSBgPGgzPiR7b3B0aW9uLmxhYmVsfTwvaDM+YDtcbiAgICAgICAgc3dpdGNoIChvcHRpb25OYW1lKSB7XG4gICAgICAgICAgY2FzZSBPcHRpb25zLktleXMucmVtb3ZlQmFyOlxuICAgICAgICAgICAgc2NyaXB0Q29udGVudCArPSBgPGxhYmVsPjxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBpZD1cInNjcmlwdC1vcHRpb25zLSR7b3B0aW9uTmFtZX1cIiAke29wdGlvblZhbCA/ICdjaGVja2VkJyA6ICcnfT4g5piv5ZCm6ZqQ6JeP5p2h5bmF77yI5Yu+6YCJ5ZCO5bCG6ZqQ6JeP5p2h5bmF6ICM5LiN5piv5pu/5o2i5YW25YaF5a6577yJPC9sYWJlbD5gO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSBPcHRpb25zLktleXMuamlucmlzaGljaTpcbiAgICAgICAgICAgIHNjcmlwdENvbnRlbnQgKz0gYDxsYWJlbD48aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgaWQ9XCJzY3JpcHQtb3B0aW9ucy0ke29wdGlvbk5hbWV9LWVuYWJsZWRcIiAke29wdGlvblZhbCA/ICdjaGVja2VkJyA6ICcnfT4g5ZCv55SoPGEgaHJlZj1cImh0dHBzOi8vd3d3LmppbnJpc2hpY2kuY29tXCIgdGFyZ2V0ID0gXCJfYmxhbmtcIj7ku4rml6Xor5for408L2E+77yI5LuN6ZyA5Y+W5raI5Yu+6YCJ4oCc5piv5ZCm6ZqQ6JeP5p2h5bmF4oCd5omN6IO955Sf5pWI77yJPC9sYWJlbD5gO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgICRzY3JpcHRDb250ZW50Lmh0bWwoc2NyaXB0Q29udGVudCk7XG5cbiAgICAgIC8vIHJlZ2lvbiDmt7vliqDohJrmnKzorr7nva7nmoTkuovku7ZcbiAgICAgIC8vIOaYr+WQpumakOiXj+adoeW5hVxuICAgICAgbGV0IG9wdGlvblNlbGVjdG9yID0gJyNzY3JpcHQtb3B0aW9ucy0nICsgT3B0aW9ucy5LZXlzLnJlbW92ZUJhcjtcbiAgICAgICRib2R5Lm9uKCdjaGFuZ2UnLCBvcHRpb25TZWxlY3RvciwgKCkgPT4ge1xuICAgICAgICBjb25zdCByZW1vdmVCYXJPcHRpb24gPSBKU09OLnBhcnNlKFN0b3JlLmdldChPcHRpb25zLktleXMucmVtb3ZlQmFyKSk7XG4gICAgICAgIHJlbW92ZUJhck9wdGlvbi52YWx1ZSA9ICFyZW1vdmVCYXJPcHRpb24udmFsdWU7XG4gICAgICAgIC8vIOmHjeaWsOazqOWGjOiPnOWNlVxuICAgICAgICBNZW51Q21kLnVucmVnaXN0ZXIocmVtb3ZlQmFyT3B0aW9uLm1lbnVDbWRJZCk7XG4gICAgICAgIHRoaXMucmVnaXN0ZXJCb29sT3B0aW9uKHJlbW92ZUJhck9wdGlvbik7XG4gICAgICB9KTtcblxuICAgICAgLy8g5ZCv55So5LuK5pel6K+X6K+NXG4gICAgICBvcHRpb25TZWxlY3RvciA9ICcjc2NyaXB0LW9wdGlvbnMtJyArIE9wdGlvbnMuS2V5cy5qaW5yaXNoaWNpICsgJy1lbmFibGVkJztcbiAgICAgICRib2R5Lm9uKCdjaGFuZ2UnLCBvcHRpb25TZWxlY3RvciwgKCkgPT4ge1xuICAgICAgICBjb25zdCBqaW5yaXNoaWNpT3B0aW9uID0gSlNPTi5wYXJzZShTdG9yZS5nZXQoT3B0aW9ucy5LZXlzLmppbnJpc2hpY2kpKTtcbiAgICAgICAgamlucmlzaGljaU9wdGlvbi52YWx1ZSA9ICFqaW5yaXNoaWNpT3B0aW9uLnZhbHVlO1xuICAgICAgICAvLyDph43mlrDms6jlhozoj5zljZVcbiAgICAgICAgTWVudUNtZC51bnJlZ2lzdGVyKGppbnJpc2hpY2lPcHRpb24ubWVudUNtZElkKTtcbiAgICAgICAgdGhpcy5yZWdpc3RlckJvb2xPcHRpb24oamlucmlzaGljaU9wdGlvbik7XG4gICAgICB9KTtcbiAgICAgIC8vIGVuZHJlZ2lvblxuICAgIH0pO1xuICB9XG59XG4iLCJpbXBvcnQgU3RvcmUgZnJvbSBcIi4uLy4uLy4uL3V0aWxzL3NyYy9nbS9TdG9yZVwiO1xuaW1wb3J0IEh0dHAgZnJvbSBcIi4uLy4uLy4uL3V0aWxzL3NyYy9nbS9IdHRwXCI7XG5pbXBvcnQgT3B0aW9ucyBmcm9tIFwiLi9PcHRpb25zXCI7XG5pbXBvcnQge0h0dHBEYXRhVHlwZX0gZnJvbSBcIi4uLy4uLy4uL3V0aWxzL3NyYy9nbS9lbnVtL0h0dHBEYXRhVHlwZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCYXIge1xuXG4gIC8qKlxuICAgKiDmm7/mjaLmnaHluYXnmoTpgInmi6nlmahcbiAgICovXG4gIHN0YXRpYyByZXBsYWNlQmFyU2VsZWN0b3IgPSB7XG4gICAgYmFyOiAnLmNzdl9iYXInLFxuICAgIGJhclVsOiAnLmNzdl9iYXIgLmNzdl9iYXJfdWwnLFxuICB9O1xuICAvKipcbiAgICog5pu/5o2i5ZCO55qE5p2h5bmF5Y676Zmk56m65qC85o2i6KGM5ZCO55qE5paH5pysXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBwcml2YXRlIHN0YXRpYyB0eHQgPSAn5a+M5by65rCR5Li75paH5piO5ZKM6LCQ6Ieq55Sx5bmz562J5YWs5q2j5rOV5rK754ix5Zu95pWs5Lia6K+a5L+h5Y+L5ZaEUHJvc3Blcml0eURlbW9jcmFjeUNpdmlsaXR5SGFybW9ueUZyZWVkb21FcXVhbGl0eUp1c3RpY2VSdWxlb2ZsYXdQYXRyaW90aXNtRGVkaWNhdGlvbkludGVncml0eUZyaWVuZHNoaXAnO1xuICAvKipcbiAgICog5piv5ZCm5ZCv55So5LuK5pel6K+X6K+NXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBwcml2YXRlIHN0YXRpYyBzdG9yZUppbnJpc2hpY2lWYWwgPSBmYWxzZTtcbiAgLyoqXG4gICAqIOS7iuaXpeivl+ivjeWGheWuuVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgcHJpdmF0ZSBzdGF0aWMgamlucmlzaGljaUNvbnRlbnQgPSAnJztcblxuICAvKipcbiAgICog5pu/5o2i5p2h5bmFXG4gICAqIEBwYXJhbSBvcHRpb25zIHtcbiAgICogICBiYXJTZWxlY3Rvcjogc3RyaW5nLCAgICAgICAgICAgICAgLy8g5p2h5bmF6YCJ5oup5ZmoXG4gICAqICAgaXNPYnNlcnZlQmFyOiBib29sZWFuLCAgICAgICAgICAgIC8vIOaYr+WQpuebkeWQrOadoeW5heWPmOWMllxuICAgKiAgIGhpZGVCYXJTZWxlY3Rvcjogc3RyaW5nLCAgICAgICAgICAvLyDpmpDol4/mnaHluYXpgInmi6nlmahcbiAgICogICBpc09ic2VydmVIaWRlQmFyOiBib29sZWFuLCAgICAgICAgLy8g5piv5ZCm55uR5ZCs6ZqQ6JeP5p2h5bmF5Y+Y5YyWXG4gICAqICAgZm9sbG93VXBPYnNlcnZlU2VsZWN0b3I/OiBzdHJpbmcsIC8vIOWQjue7reebkeWQrOmAieaLqeWZqFxuICAgKiAgIGNzdkNhbGxiYWNrPzogRnVuY3Rpb24gICAgICAgIC8vIOabv+aNouWQjuWbnuiwg1xuICAgKiB9XG4gICAqL1xuICBzdGF0aWMgcmVwbGFjZShvcHRpb25zOiB7IGJhclNlbGVjdG9yOiBzdHJpbmcsIGlzT2JzZXJ2ZUJhcjogYm9vbGVhbiwgaGlkZUJhclNlbGVjdG9yOiBzdHJpbmcsIGlzT2JzZXJ2ZUhpZGVCYXI6IGJvb2xlYW4sIGZvbGxvd1VwT2JzZXJ2ZVNlbGVjdG9yPzogc3RyaW5nLCBjc3ZDYWxsYmFjaz86IEZ1bmN0aW9uLCBqaW5yaXNoaWNpQ2FsbGJhY2s/OiBGdW5jdGlvbiB9KSB7XG4gICAgaWYgKCEkKG9wdGlvbnMuYmFyU2VsZWN0b3IpLnRleHQoKS5tYXRjaCgvdWtyYWluZXzkuYzlhYvlhbB8YmxhY2t86buR5Lq6L2kpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8g5aaC5p6c56e76Zmk5qiq5bmFXG4gICAgaWYgKEpTT04ucGFyc2UoU3RvcmUuZ2V0KE9wdGlvbnMuS2V5cy5yZW1vdmVCYXIpKS52YWx1ZSkge1xuICAgICAgLy8g6ZqQ6JeP5qiq5bmFXG4gICAgICAkKG9wdGlvbnMuaGlkZUJhclNlbGVjdG9yKS5oaWRlKCk7XG4gICAgICBpZiAob3B0aW9ucy5pc09ic2VydmVIaWRlQmFyKSB7XG4gICAgICAgIGxldCBpID0gMDtcbiAgICAgICAgLy8g6ZqQ6JeP5p2h5bmF6aaW5qyh5Yqg6L2977ya55uR5ZCs5p2h5bmF5Y+Y5YyW77yM5Y+Y5YyW5ZCO5YaN5qyh5omn6KGMXG4gICAgICAgIGNvbnN0IG9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoKCkgPT4ge1xuICAgICAgICAgICQob3B0aW9ucy5oaWRlQmFyU2VsZWN0b3IpLmhpZGUoKTtcbiAgICAgICAgICAvLyDmm7/mjaLkuKTmrKHlkI7nu5PmnZ/nm5HlkKxcbiAgICAgICAgICBpZiAoaSA+PSAxKSB7XG4gICAgICAgICAgICBvYnNlcnZlci5kaXNjb25uZWN0KCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGkrKztcbiAgICAgICAgfSk7XG4gICAgICAgIG9ic2VydmVyLm9ic2VydmUoJChvcHRpb25zLmhpZGVCYXJTZWxlY3RvcilbMF0sIHtjaGlsZExpc3Q6IHRydWUsIHN1YnRyZWU6IHRydWV9KTtcbiAgICAgIH1cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLnN0b3JlSmlucmlzaGljaVZhbCA9IEpTT04ucGFyc2UoU3RvcmUuZ2V0KE9wdGlvbnMuS2V5cy5qaW5yaXNoaWNpKSkudmFsdWU7XG4gICAgaWYgKHRoaXMuc3RvcmVKaW5yaXNoaWNpVmFsKSB7XG4gICAgICB0aGlzLmdldEppbnJpc2hpY2koKS50aGVuKChkYXRhOiBhbnkpID0+IHtcbiAgICAgICAgdGhpcy5qaW5yaXNoaWNpQ29udGVudCA9IGRhdGE7XG4gICAgICAgIHRoaXMucmVwbGFjZU9ic2VydmVyKG9wdGlvbnMpO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucmVwbGFjZU9ic2VydmVyKG9wdGlvbnMpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiDmm7/mjaLmnaHluYXnm5HlkKxcbiAgICogQHBhcmFtIG9wdGlvbnNcbiAgICogQHByaXZhdGVcbiAgICovXG4gIHByaXZhdGUgc3RhdGljIHJlcGxhY2VPYnNlcnZlcihvcHRpb25zOiB7IGJhclNlbGVjdG9yOiBzdHJpbmcsIGlzT2JzZXJ2ZUJhcjogYm9vbGVhbiwgaGlkZUJhclNlbGVjdG9yOiBzdHJpbmcsIGlzT2JzZXJ2ZUhpZGVCYXI6IGJvb2xlYW4sIGZvbGxvd1VwT2JzZXJ2ZVNlbGVjdG9yPzogc3RyaW5nLCBjc3ZDYWxsYmFjaz86IEZ1bmN0aW9uLCBqaW5yaXNoaWNpQ2FsbGJhY2s/OiBGdW5jdGlvbiB9KSB7XG4gICAgLy8g6aaW5qyh5pu/5o2i5qiq5bmFXG4gICAgdGhpcy5yZXBsYWNlQmFyKG9wdGlvbnMuYmFyU2VsZWN0b3IsIG9wdGlvbnMuY3N2Q2FsbGJhY2ssIG9wdGlvbnMuamlucmlzaGljaUNhbGxiYWNrKTtcbiAgICBpZiAoIW9wdGlvbnMuaXNPYnNlcnZlQmFyKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGxldCBpID0gMDtcbiAgICAvLyDmnaHluYXpppbmrKHliqDovb3vvJrnm5HlkKzmnaHluYXlj5jljJbvvIzlj5jljJblkI7lho3mrKHmiafooYxcbiAgICBjb25zdCBvYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKCgpID0+IHtcbiAgICAgIHRoaXMucmVwbGFjZUJhcihvcHRpb25zLmJhclNlbGVjdG9yLCBvcHRpb25zLmNzdkNhbGxiYWNrLCBvcHRpb25zLmppbnJpc2hpY2lDYWxsYmFjayk7XG4gICAgICAvLyDmm7/mjaLkuKTmrKHlkI7nu5PmnZ/nm5HlkKxcbiAgICAgIGlmIChpID49IDEpIHtcbiAgICAgICAgb2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuICAgICAgfVxuICAgICAgaSsrO1xuICAgIH0pO1xuICAgIG9ic2VydmVyLm9ic2VydmUoJChvcHRpb25zLmJhclNlbGVjdG9yKVswXSwge2NoaWxkTGlzdDogdHJ1ZX0pO1xuXG4gICAgaWYgKG9wdGlvbnMuZm9sbG93VXBPYnNlcnZlU2VsZWN0b3IpIHtcbiAgICAgIC8vIOWQjue7reWPmOWMllxuICAgICAgbmV3IE11dGF0aW9uT2JzZXJ2ZXIoKCkgPT4ge1xuICAgICAgICB0aGlzLnJlcGxhY2VCYXIob3B0aW9ucy5iYXJTZWxlY3Rvciwgb3B0aW9ucy5jc3ZDYWxsYmFjaywgb3B0aW9ucy5qaW5yaXNoaWNpQ2FsbGJhY2spO1xuICAgICAgfSkub2JzZXJ2ZSgkKG9wdGlvbnMuZm9sbG93VXBPYnNlcnZlU2VsZWN0b3IpWzBdLCB7Y2hpbGRMaXN0OiB0cnVlfSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIOWunumZheabv+aNouadoeW5hVxuICAgKiBAcGFyYW0gc2VsZWN0b3Ig5p2h5bmF6YCJ5oup5ZmoXG4gICAqIEBwYXJhbSBjc3ZDYWxsYmFjayDmm7/mjaLlkI7lm57osINcbiAgICogQHBhcmFtIGppbnJpc2hpY2lDYWxsYmFjayDmm7/mjaLkuLrku4rml6Xor5for43lkI7lm57osINcbiAgICogQHByaXZhdGVcbiAgICovXG4gIHByaXZhdGUgc3RhdGljIHJlcGxhY2VCYXIoc2VsZWN0b3I6IHN0cmluZywgY3N2Q2FsbGJhY2s/OiBGdW5jdGlvbiwgamlucmlzaGljaUNhbGxiYWNrPzogRnVuY3Rpb24pIHtcbiAgICBpZiAoJCgkKHNlbGVjdG9yKVswXSkudGV4dCgpLnJlcGxhY2UoL1xccysvZywgXCJcIikgPT09IEJhci50eHQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5zdG9yZUppbnJpc2hpY2lWYWwpIHtcbiAgICAgICQoc2VsZWN0b3IpLmNzcyh7J21pbkhlaWdodCc6ICczMHB4JywgJ2xpbmVIZWlnaHQnOiAnMzBweCd9KTtcbiAgICAgICQoc2VsZWN0b3IpLmh0bWwoYFxuICAgICAgICA8ZGl2IGNsYXNzPVwiY3N2X2JhclwiPlxuICAgICAgICAgICR7dGhpcy5qaW5yaXNoaWNpQ29udGVudH1cbiAgICAgICAgPC9kaXY+YFxuICAgICAgKTtcbiAgICAgIGlmIChqaW5yaXNoaWNpQ2FsbGJhY2spIHtcbiAgICAgICAgamlucmlzaGljaUNhbGxiYWNrKCk7XG4gICAgICB9XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgJChzZWxlY3RvcikuY3NzKHsnbWluSGVpZ2h0JzogJzQwcHgnfSk7XG4gICAgJChzZWxlY3RvcikuaHRtbChgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjc3ZfYmFyXCI+XG4gICAgICAgICAgPHVsIGNsYXNzPSdjc3ZfYmFyX3VsJz48bGk+5a+M5by6PC9saT48bGk+5rCR5Li7PC9saT48bGk+5paH5piOPC9saT48bGk+5ZKM6LCQPC9saT48bGk+6Ieq55SxPC9saT48bGk+5bmz562JPC9saT48bGk+5YWs5q2jPC9saT48bGk+5rOV5rK7PC9saT48bGk+54ix5Zu9PC9saT48bGk+5pWs5LiaPC9saT48bGk+6K+a5L+hPC9saT48bGk+5Y+L5ZaEPC9saT48L3VsPjxicj5cbiAgICAgICAgICA8dWwgY2xhc3M9J2Nzdl9iYXJfdWwnPjxsaT5Qcm9zcGVyaXR5PC9saT48bGk+RGVtb2NyYWN5PC9saT48bGk+Q2l2aWxpdHk8L2xpPjxsaT5IYXJtb255PC9saT48bGk+RnJlZWRvbTwvbGk+PGxpPkVxdWFsaXR5PC9saT48bGk+SnVzdGljZTwvbGk+PGxpPlJ1bGUgb2YgbGF3PC9saT48bGk+UGF0cmlvdGlzbTwvbGk+PGxpPkRlZGljYXRpb248L2xpPjxsaT5JbnRlZ3JpdHk8L2xpPjxsaT5GcmllbmRzaGlwPC9saT5cbiAgICAgICAgICA8L3VsPlxuICAgICAgICA8L2Rpdj5gXG4gICAgKTtcblxuICAgIC8vIOmBv+WFjeWHuueOsOWkmuS4quWvvOiHtOagt+W8j+a3u+WKoOWksei0pVxuICAgIGNvbnN0ICRiYXIgPSAkKHRoaXMucmVwbGFjZUJhclNlbGVjdG9yLmJhcik7XG4gICAgaWYgKCRiYXIubGVuZ3RoID09IDIpIHtcbiAgICAgICRiYXIuZXEoMCkucmVtb3ZlKCk7XG4gICAgfVxuXG4gICAgY29uc3QgYmFyVWxTZWxlY3RvciA9IHRoaXMucmVwbGFjZUJhclNlbGVjdG9yLmJhclVsO1xuICAgICQoYmFyVWxTZWxlY3RvcikuY3NzKHsnZGlzcGxheSc6ICdpbmxpbmUtYmxvY2snLCAnbGlzdFN0eWxlJzogJ25vbmUnLCAnbWFyZ2luJzogMCwgJ3BhZGRpbmcnOiAwLCAnd2lkdGgnOiAnYXV0byd9KTtcbiAgICAkKGJhclVsU2VsZWN0b3IgKyAnIGxpJykuY3NzKHsnY29sb3InOiAnI0RFMjkxMCcsICdmb250V2VpZ2h0JzogJ2JvbGQnLCAnZm9udEZhbWlseSc6ICdLYWlUaScsICdmbG9hdCc6ICdsZWZ0JywgJ3BhZGRpbmdSaWdodCc6ICcxMHB4JywgJ21pbi13aWR0aCc6ICc4MHB4JywgJ3RleHRBbGlnbic6ICdjZW50ZXInfSk7XG4gICAgJChiYXJVbFNlbGVjdG9yICsgJzpmaXJzdCcpLmNzcygndmVydGljYWxBbGlnbicsICdib3R0b20nKTtcbiAgICAkKGJhclVsU2VsZWN0b3IgKyAnOmZpcnN0IGxpJykuY3NzKCdmb250U2l6ZScsICcxOHB4Jyk7XG4gICAgJChiYXJVbFNlbGVjdG9yICsgJzplcSgxKSBsaScpLmNzcygnZm9udFNpemUnLCAnMTNweCcpO1xuXG4gICAgaWYgKGNzdkNhbGxiYWNrKSB7XG4gICAgICBjc3ZDYWxsYmFjaygpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiDojrflj5bku4rml6Xor5for41cbiAgICogQHByaXZhdGVcbiAgICovXG4gIHN0YXRpYyBhc3luYyBnZXRKaW5yaXNoaWNpKCkge1xuICAgIGxldCBqaW5yaXNoaWNpT3B0aW9uID0gSlNPTi5wYXJzZShTdG9yZS5nZXQoT3B0aW9ucy5LZXlzLmppbnJpc2hpY2kpKTtcbiAgICBpZiAoIWppbnJpc2hpY2lPcHRpb24udmFsdWUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBsZXQgcmVzcG9uc2UgPSBhd2FpdCBIdHRwLmdldCh7XG4gICAgICB1cmw6ICdodHRwczovL3YyLmppbnJpc2hpY2kuY29tL29uZS5qc29uJyxcbiAgICAgIGRhdGFUeXBlOiBIdHRwRGF0YVR5cGUuSlNPTixcbiAgICAgIC8vIGhlYWRlcnM6IHtcbiAgICAgIC8vICAgJ1gtVXNlci1Ub2tlbic6IGppbnJpc2hpY2lPcHRpb24udG9rZW4sXG4gICAgICAvLyB9LFxuICAgICAgc3luY2hyb25vdXM6IHRydWVcbiAgICB9KTtcblxuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBpZiAoIXJlc3BvbnNlIHx8IHJlc3BvbnNlLnN0YXR1cyAhPT0gJ3N1Y2Nlc3MnKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCfku4rml6Xor5for43ojrflj5blpLHotKUnLCByZXNwb25zZSk7XG4gICAgfVxuICAgIC8vIC8vIOWtmOWCqCBUb2tlblxuICAgIC8vIGlmIChqaW5yaXNoaWNpT3B0aW9uLnRva2VuICE9PSByZXNwb25zZS5kYXRhLnRva2VuKSB7XG4gICAgLy8gICBqaW5yaXNoaWNpT3B0aW9uLnRva2VuID0gcmVzcG9uc2UuZGF0YS50b2tlbjtcbiAgICAvLyAgIFN0b3JlLnNldChPcHRpb25zLktleXMuamlucmlzaGljaSwgSlNPTi5zdHJpbmdpZnkoamlucmlzaGljaU9wdGlvbikpO1xuICAgIC8vIH1cbiAgICAvLyBAdHMtaWdub3JlXG4gICAgcmV0dXJuIHJlc3BvbnNlLmRhdGEuY29udGVudCArICcg4oCU4oCUICcgKyByZXNwb25zZS5kYXRhLm9yaWdpbi5hdXRob3IgKyAn44CKJyArIHJlc3BvbnNlLmRhdGEub3JpZ2luLnRpdGxlICsgJ+OAiyc7XG4gIH1cbn1cbiIsImltcG9ydCBCYXIgZnJvbSBcIi4uLy4uL2NvbW1vbi9CYXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVhY3Qge1xuXG4gIHByaXZhdGUgc3RhdGljIHNlbGVjdG9ycyA9IHtcbiAgICBiYXI6ICcuY3NzLWxwaXljdicsXG4gICAgaGlkZUJhcjogJy5jc3MtMWxveHVoMycsXG4gICAgZm9sbG93VXBPYnNlcnZlRWxlbWVudDogJyNnYXRzYnktZm9jdXMtd3JhcHBlcicsXG4gIH1cblxuICBzdGF0aWMgcmVwbGFjZSgpIHtcbiAgICBpZiAobG9jYXRpb24uaG9zdCA9PT0gJ3JlYWN0anMub3JnJykge1xuICAgICAgQmFyLnJlcGxhY2Uoe2JhclNlbGVjdG9yOiB0aGlzLnNlbGVjdG9ycy5iYXIsIGlzT2JzZXJ2ZUJhcjogdHJ1ZSwgaGlkZUJhclNlbGVjdG9yOiB0aGlzLnNlbGVjdG9ycy5oaWRlQmFyLCBpc09ic2VydmVIaWRlQmFyOiBmYWxzZSwgZm9sbG93VXBPYnNlcnZlU2VsZWN0b3I6IHRoaXMuc2VsZWN0b3JzLmZvbGxvd1VwT2JzZXJ2ZUVsZW1lbnR9KTtcbiAgICB9XG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEFuZ3VsYXIge1xuXG4gIHByaXZhdGUgc3RhdGljIHNlbGVjdG9ycyA9IHtcbiAgICBiYXI6ICcubWF0LXRvb2xiYXItcm93Lm5vdGlmaWNhdGlvbi1jb250YWluZXInLFxuICAgIGRpc21pc3NOb3RpZmljYXRpb25CdG46ICdidXR0b25bYXJpYS1sYWJlbD1cIkRpc21pc3Mgbm90aWZpY2F0aW9uXCJdJyxcbiAgfVxuXG4gIHN0YXRpYyByZXBsYWNlKCkge1xuICAgIGlmIChsb2NhdGlvbi5ob3N0ID09PSAnYW5ndWxhci5pbycpIHtcbiAgICAgIC8vIOS4jeWtmOWcqOaYr+WQpuWFs+mXremAmuefpeeahOacrOWcsOWtmOWCqOaXtlxuICAgICAgaWYgKCFsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYWlvLW5vdGlmaWNhdGlvbi93YXItdWtyYWluZScpKSB7XG4gICAgICAgIC8vIOWmguaenOmAmuefpeS4reWtmOWcqOWFs+mUruivjVxuICAgICAgICBjb25zdCAkYmFyID0gJCh0aGlzLnNlbGVjdG9ycy5iYXIpO1xuICAgICAgICBpZiAoJGJhci5sZW5ndGggPiAwICYmICRiYXIudGV4dCgpLnRvTG93ZXJDYXNlKCkuaW5kZXhPZigndWtyYWluZScpICE9IC0xKSB7XG4gICAgICAgICAgLy8g54K55Ye75YWz6Zet6YCa55+lXG4gICAgICAgICAgJCh0aGlzLnNlbGVjdG9ycy5kaXNtaXNzTm90aWZpY2F0aW9uQnRuKVswXS5jbGljaygpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59IiwiaW1wb3J0IEJhciBmcm9tIFwiLi4vLi4vY29tbW9uL0JhclwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb2RlY2VwdCB7XG5cbiAgc3RhdGljIHNlbGVjdG9ycyA9IHtcbiAgICBiYXI6ICcuc3ViLWJhciAubWVzc2FnZScsXG4gICAgaGlkZUJhcjogJy5zdWItYmFyJyxcbiAgfVxuXG4gIHN0YXRpYyByZXBsYWNlKCkge1xuICAgIGlmIChsb2NhdGlvbi5ob3N0ID09PSAnY29kZWNlcHQuaW8nKSB7XG4gICAgICBCYXIucmVwbGFjZSh7XG4gICAgICAgIGJhclNlbGVjdG9yOiB0aGlzLnNlbGVjdG9ycy5iYXIsIGlzT2JzZXJ2ZUJhcjogZmFsc2UsIGhpZGVCYXJTZWxlY3RvcjogdGhpcy5zZWxlY3RvcnMuaGlkZUJhciwgaXNPYnNlcnZlSGlkZUJhcjogZmFsc2UsIGppbnJpc2hpY2lDYWxsYmFjazogKCkgPT4ge1xuICAgICAgICAgICQodGhpcy5zZWxlY3RvcnMuYmFyKS5jc3MoJ2NvbG9yJywgJyNlZGYyZjcnKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBHaXRodWIge1xuXG4gIHN0YXRpYyBzZWxlY3RvcnMgPSB7XG4gICAgbm90aWNlOiAnLmJvcmRlci5qcy1ub3RpY2UnXG4gIH1cblxuICBzdGF0aWMgcmVwbGFjZSgpIHtcbiAgICBpZiAobG9jYXRpb24uaHJlZiA9PT0gJ2h0dHBzOi8vZ2l0aHViLmNvbS8nKSB7XG4gICAgICBjb25zdCAkbm90aWNlID0gJCh0aGlzLnNlbGVjdG9ycy5ub3RpY2UpO1xuICAgICAgaWYgKCRub3RpY2UubGVuZ3RoID4gMCAmJiAkbm90aWNlLnRleHQoKS50b0xvd2VyQ2FzZSgpLmluZGV4T2YoJ3VrcmFpbmUnKSAhPSAtMSkge1xuICAgICAgICAkbm90aWNlLnJlbW92ZSgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IEJhciBmcm9tIFwiLi4vLi4vY29tbW9uL0JhclwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb2RlY2VwdCB7XG5cbiAgc3RhdGljIHNlbGVjdG9ycyA9IHtcbiAgICBiYXI6ICcudG9wLWJhcicsXG4gIH1cblxuICBzdGF0aWMgcmVwbGFjZSgpIHtcbiAgICBpZiAobG9jYXRpb24uaG9zdCA9PT0gJ2RvY3MubmVzdGpzLmNvbScpIHtcbiAgICAgIEJhci5yZXBsYWNlKHtcbiAgICAgICAgYmFyU2VsZWN0b3I6IHRoaXMuc2VsZWN0b3JzLmJhciwgaXNPYnNlcnZlQmFyOiBmYWxzZSwgaGlkZUJhclNlbGVjdG9yOiB0aGlzLnNlbGVjdG9ycy5iYXIsIGlzT2JzZXJ2ZUhpZGVCYXI6IGZhbHNlLCBjc3ZDYWxsYmFjazogKCkgPT4ge1xuICAgICAgICAgICQodGhpcy5zZWxlY3RvcnMuYmFyKS5jc3MoJ3BhZGRpbmcnLCAnMCcpO1xuICAgICAgICB9LCBqaW5yaXNoaWNpQ2FsbGJhY2s6ICgpID0+IHtcbiAgICAgICAgICAkKHRoaXMuc2VsZWN0b3JzLmJhcikuY3NzKCdjb2xvcicsICcjZmZmJyk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IEJhciBmcm9tIFwiLi4vLi4vY29tbW9uL0JhclwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFbWJlciB7XG5cbiAgc3RhdGljIHNlbGVjdG9ycyA9IHtcbiAgICBiYXI6ICcuY2FsbG91dC1iYW5uZXInLFxuICB9XG5cbiAgc3RhdGljIHJlcGxhY2UoKSB7XG4gICAgaWYgKGxvY2F0aW9uLmhvc3QgPT09ICdlbWJlcmpzLmNvbScpIHtcbiAgICAgIEJhci5yZXBsYWNlKHtcbiAgICAgICAgYmFyU2VsZWN0b3I6IHRoaXMuc2VsZWN0b3JzLmJhciwgaXNPYnNlcnZlQmFyOiBmYWxzZSwgaGlkZUJhclNlbGVjdG9yOiB0aGlzLnNlbGVjdG9ycy5iYXIsIGlzT2JzZXJ2ZUhpZGVCYXI6IGZhbHNlLCBqaW5yaXNoaWNpQ2FsbGJhY2s6ICgpID0+IHtcbiAgICAgICAgICAkKHRoaXMuc2VsZWN0b3JzLmJhcikuY3NzKCdjb2xvcicsICcjZmZmJyk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgJCh0aGlzLnNlbGVjdG9ycy5iYXIpLmNzcyh7J2JhY2tncm91bmRDb2xvcic6ICcjMWMxZTI0JywgJ3BhZGRpbmcnOiAwfSk7XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgQmFyIGZyb20gXCIuLi8uLi9jb21tb24vQmFyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVsZWN0cm9uIHtcblxuICBzdGF0aWMgc2VsZWN0b3JzID0ge1xuICAgIGJhcjogJy5hbm5vdW5jZW1lbnQtYmFubmVyJyxcbiAgfVxuXG4gIHN0YXRpYyByZXBsYWNlKCkge1xuICAgIGlmIChsb2NhdGlvbi5ob3N0ID09PSAnd3d3LmVsZWN0cm9uanMub3JnJykge1xuICAgICAgQmFyLnJlcGxhY2Uoe1xuICAgICAgICBiYXJTZWxlY3RvcjogdGhpcy5zZWxlY3RvcnMuYmFyLCBpc09ic2VydmVCYXI6IGZhbHNlLCBoaWRlQmFyU2VsZWN0b3I6IHRoaXMuc2VsZWN0b3JzLmJhciwgaXNPYnNlcnZlSGlkZUJhcjogZmFsc2UsIGNzdkNhbGxiYWNrOiAoKSA9PiB7XG4gICAgICAgICAgJChCYXIucmVwbGFjZUJhclNlbGVjdG9yLmJhclVsICsgJzplcSgwKScpLmNzcygnaGVpZ2h0JywgJzI1cHgnKTtcbiAgICAgICAgICAkKEJhci5yZXBsYWNlQmFyU2VsZWN0b3IuYmFyVWwgKyAnOmVxKDEpJykuY3NzKCdoZWlnaHQnLCAnMjBweCcpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgICQodGhpcy5zZWxlY3RvcnMuYmFyKS5jc3MoeydwYWRkaW5nJzogMH0pO1xuICAgIH1cbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQW5ndWxhciB7XG5cbiAgc3RhdGljIHNlbGVjdG9ycyA9IHtcbiAgICBsb2dvOiAnaW1nW3NyYz1cIi9pbWFnZXMvbG9nb3MvamVua2lucy9KZW5raW5zLXN0b3AtdGhlLXdhci5zdmdcIl0nLFxuICAgIHBhZ2VUaXRsZTogJy5wYWdlLXRpdGxlJ1xuICB9XG5cbiAgc3RhdGljIHJlcGxhY2UoKSB7XG4gICAgaWYgKGxvY2F0aW9uLmhvc3QgPT09ICd3d3cuamVua2lucy5pbycpIHtcbiAgICAgIC8vIOabv+aNouWbvuagh1xuICAgICAgJCh0aGlzLnNlbGVjdG9ycy5sb2dvKS5yZXBsYWNlV2l0aChgPGltZyBzcmM9XCIvaW1hZ2VzL2xvZ29zL2plbmtpbnMvSmVua2lucy5zdmdcIj5gKTtcblxuICAgICAgLy8g5Yig6Zmk6YCa55+lXG4gICAgICAkKHRoaXMuc2VsZWN0b3JzLnBhZ2VUaXRsZSkubmV4dEFsbChcInBcIikuZWFjaCgoaSwgZWwpID0+IHtcbiAgICAgICAgY29uc3QgJGVsID0gJChlbCk7XG4gICAgICAgIGlmICgkZWwudGV4dCgpLnRvTG93ZXJDYXNlKCkuaW5kZXhPZigndWtyYWluZScpICE9IC0xKSB7XG4gICAgICAgICAgJGVsLnJlbW92ZSgpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgICQodGhpcy5zZWxlY3RvcnMucGFnZVRpdGxlKS5wYXJlbnQoKS5hcHBlbmQoJzxicj48YnI+PGJyPicpO1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IEJhciBmcm9tIFwiLi4vLi4vY29tbW9uL0JhclwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdmVsdGUge1xuXG4gIHByaXZhdGUgc3RhdGljIHNlbGVjdG9ycyA9IHtcbiAgICBuYXZTcG90OiAnLm5hdi1zcG90JyxcbiAgICBiYXI6ICcudWtyJyxcbiAgICBiYXJIZWlnaHQ6ICc6cm9vdCcsXG4gICAgYmFySGVpZ2h0QXR0ck5hbWU6ICctLXVrci1mb290ZXItaGVpZ2h0JyxcbiAgICBvYnNlcnZpbmc6ICcjbWFpbicsXG4gIH1cblxuICBwcml2YXRlIHN0YXRpYyBzdmVsdGVMb2dvU3R5bGUgPSAnYmFja2dyb3VuZC1pbWFnZTogdXJsKGh0dHBzOi8vc3ZlbHRlLmRldi9zdmVsdGUtbG9nby1ob3Jpem9udGFsLnN2ZyknO1xuXG4gIHN0YXRpYyByZXBsYWNlKCkge1xuICAgIGlmIChsb2NhdGlvbi5ob3N0ID09PSAnc3ZlbHRlLmRldicpIHtcbiAgICAgIGNvbnN0ICRuYXZTcG90ID0gJCh0aGlzLnNlbGVjdG9ycy5uYXZTcG90KTtcbiAgICAgIGxldCBpID0gMDtcbiAgICAgIC8vIOebkeWQrOadoeW5heWPmOWMlu+8jOWPmOWMluWQjuWGjeasoeaJp+ihjFxuICAgICAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcigoKSA9PiB7XG4gICAgICAgIGlmICgkbmF2U3BvdC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgLy8g5pu/5o2iIExvZ29cbiAgICAgICAgICAkbmF2U3BvdC5hdHRyKCdzdHlsZScsIHRoaXMuc3ZlbHRlTG9nb1N0eWxlKTtcbiAgICAgICAgICAvLyDmm7/mjaLkuKTmrKHlkI7nu5PmnZ/nm5HlkKxcbiAgICAgICAgICBpZiAoaSA+PSAxKSB7XG4gICAgICAgICAgICBvYnNlcnZlci5kaXNjb25uZWN0KCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGkrKztcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBvYnNlcnZlci5vYnNlcnZlKCQodGhpcy5zZWxlY3RvcnMub2JzZXJ2aW5nKVswXSwge2NoaWxkTGlzdDogdHJ1ZX0pO1xuXG4gICAgICAvLyDlupXpg6jmqKrluYVcbiAgICAgIEJhci5yZXBsYWNlKHtcbiAgICAgICAgYmFyU2VsZWN0b3I6IHRoaXMuc2VsZWN0b3JzLmJhciwgaXNPYnNlcnZlQmFyOiB0cnVlLCBoaWRlQmFyU2VsZWN0b3I6IHRoaXMuc2VsZWN0b3JzLmJhciwgaXNPYnNlcnZlSGlkZUJhcjogdHJ1ZSwgY3N2Q2FsbGJhY2s6ICgpID0+IHtcbiAgICAgICAgICAkKHRoaXMuc2VsZWN0b3JzLmJhcikuY3NzKHsnYmFja2dyb3VuZENvbG9yJzogJyMxYzFlMjQnLCAncGFkZGluZ1RvcCc6ICcyMHB4J30pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFN2ZWx0ZU1hdGVyaWFsVWkge1xuXG4gIHN0YXRpYyBzZWxlY3RvcnMgPSB7XG4gICAgYmFyOiAnLnVrcmFpbmUnLFxuICB9XG5cbiAgc3RhdGljIHJlcGxhY2UoKSB7XG4gICAgaWYgKGxvY2F0aW9uLmhvc3QgPT09ICdzdmVsdGVtYXRlcmlhbHVpLmNvbScpIHtcbiAgICAgICQodGhpcy5zZWxlY3RvcnMuYmFyKS5hdHRyKCdjbGFzcycsICcnKTtcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCBCYXIgZnJvbSBcIi4uLy4uL2NvbW1vbi9CYXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3luY3RoaW5nIHtcblxuICBzdGF0aWMgc2VsZWN0b3JzID0ge1xuICAgIGJhcjogJy5hbGVydCcsXG4gIH1cblxuICBzdGF0aWMgcmVwbGFjZSgpIHtcbiAgICBpZiAobG9jYXRpb24uaG9zdCA9PT0gJ3N5bmN0aGluZy5uZXQnKSB7XG4gICAgICBCYXIucmVwbGFjZSh7XG4gICAgICAgIGJhclNlbGVjdG9yOiB0aGlzLnNlbGVjdG9ycy5iYXIsIGlzT2JzZXJ2ZUJhcjogZmFsc2UsIGhpZGVCYXJTZWxlY3RvcjogdGhpcy5zZWxlY3RvcnMuYmFyLCBpc09ic2VydmVIaWRlQmFyOiBmYWxzZSwgY3N2Q2FsbGJhY2s6ICgpID0+IHtcbiAgICAgICAgICAkKHRoaXMuc2VsZWN0b3JzLmJhcikuY3NzKCd0ZXh0QWxpZ24nLCAnY2VudGVyJyk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxufVxuIiwiLy8gPT1Vc2VyU2NyaXB0PT1cbi8vIEBuYW1lICAgICAgICAg5oqA5pyv6L+c56a75pS/5rK7XG4vLyBAbmFtZXNwYWNlICAgIGh0dHA6Ly90YW1wZXJtb25rZXkubmV0L1xuLy8gQHZlcnNpb24gICAgICAxLjMuMFxuLy8gQGRlc2NyaXB0aW9uICDnp7vpmaTmlL/msrvnm7jlhbPmnaHluYXmiJbmm7/mjaLkuLrnpL7kvJrkuLvkuYnmoLjlv4Pku7flgLzop4LjgIHku4rml6Xor5for43vvIzmm7/mjaLmlL/msrvnm7jlhbMgTG9nbyDkuLrljp/niYggTG9nb++8jOWOu+mZpOaUv+ayu+ebuOWFs+mAmuefpe+8jOiuqeaKgOacr+i/nOemu+aUv+ayu+OAglxuLy8gQGF1dGhvciAgICAgICBkdWFubHVhblxuLy8gQGNvcHlyaWdodCAgICAyMDIyLCBkdWFubHVhbiAoaHR0cHM6Ly9naXRodWIuY29tL2R1YW5sdWFuKVxuLy8gQGxpY2Vuc2UgICAgICBBcGFjaGUtMi4wOyBodHRwczovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wLnR4dFxuLy8gQG1hdGNoICAgICAgICAqOi8vcmVhY3Rqcy5vcmcvKlxuLy8gQG1hdGNoICAgICAgICAqOi8vYW5ndWxhci5pby8qXG4vLyBAbWF0Y2ggICAgICAgICo6Ly9qdW5pdC5vcmcvKlxuLy8gQG1hdGNoICAgICAgICAqOi8vY29kZWNlcHQuaW8vKlxuLy8gQG1hdGNoICAgICAgICAqOi8vZ2l0aHViLmNvbS8qXG4vLyBAbWF0Y2ggICAgICAgICo6Ly9kb2NzLm5lc3Rqcy5jb20vKlxuLy8gQG1hdGNoICAgICAgICAqOi8vZW1iZXJqcy5jb20vKlxuLy8gQG1hdGNoICAgICAgICAqOi8vd3d3LmVsZWN0cm9uanMub3JnLypcbi8vIEBtYXRjaCAgICAgICAgKjovL3d3dy5qZW5raW5zLmlvLypcbi8vIEBtYXRjaCAgICAgICAgKjovL3N2ZWx0ZS5kZXYvKlxuLy8gQG1hdGNoICAgICAgICAqOi8vc3ZlbHRlbWF0ZXJpYWx1aS5jb20vKlxuLy8gQG1hdGNoICAgICAgICAqOi8vc3luY3RoaW5nLm5ldC8qXG4vLyBAbWF0Y2ggICAgICAgICo6Ly9ncmVhc3lmb3JrLm9yZy8qXG4vLyBAcmVxdWlyZSAgICAgIGh0dHBzOi8vY2RuLmJvb3RjZG4ubmV0L2FqYXgvbGlicy9qcXVlcnkvMy42LjAvanF1ZXJ5LnNsaW0ubWluLmpzXG4vLyBAZ3JhbnQgICAgICAgIEdNX2dldFZhbHVlXG4vLyBAZ3JhbnQgICAgICAgIEdNX3NldFZhbHVlXG4vLyBAZ3JhbnQgICAgICAgIEdNX3JlZ2lzdGVyTWVudUNvbW1hbmRcbi8vIEBncmFudCAgICAgICAgR01fdW5yZWdpc3Rlck1lbnVDb21tYW5kXG4vLyBAZ3JhbnQgICAgICAgIEdNX3htbGh0dHBSZXF1ZXN0XG4vLyA9PS9Vc2VyU2NyaXB0PT1cblxuLy8gPT1PcGVuVXNlckpTPT1cbi8vIEBhdXRob3IgZHVhbmx1YW5cbi8vID09L09wZW5Vc2VySlM9PVxuXG5pbXBvcnQgSnVuaXQgZnJvbSBcIi4vd2Vic2l0ZXMvanVuaXQvSnVuaXRcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwiLi93ZWJzaXRlcy9yZWFjdC9SZWFjdFwiO1xuaW1wb3J0IEFuZ3VsYXIgZnJvbSBcIi4vd2Vic2l0ZXMvYW5ndWxhci9Bbmd1bGFyXCI7XG5pbXBvcnQgQ29kZWNlcHQgZnJvbSBcIi4vd2Vic2l0ZXMvY29kZWNlcHQvQ29kZWNlcHRcIjtcbmltcG9ydCBHaXRodWIgZnJvbSBcIi4vd2Vic2l0ZXMvZ2l0aHViL0dpdGh1YlwiO1xuaW1wb3J0IE5lc3QgZnJvbSBcIi4vd2Vic2l0ZXMvbmVzdC9OZXN0XCI7XG5pbXBvcnQgRW1iZXIgZnJvbSBcIi4vd2Vic2l0ZXMvZW1iZXIvRW1iZXJcIjtcbmltcG9ydCBFbGVjdHJvbiBmcm9tIFwiLi93ZWJzaXRlcy9lbGVjdHJvbi9FbGVjdHJvblwiO1xuaW1wb3J0IEplbmtpbnMgZnJvbSBcIi4vd2Vic2l0ZXMvamVua2lucy9KZW5raW5zXCI7XG5pbXBvcnQgU3ZlbHRlIGZyb20gXCIuL3dlYnNpdGVzL3N2ZWx0ZS9TdmVsdGVcIjtcbmltcG9ydCBPcHRpb25zIGZyb20gXCIuL2NvbW1vbi9PcHRpb25zXCI7XG5pbXBvcnQgU3ZlbHRlTWF0ZXJpYWxVaSBmcm9tIFwiLi93ZWJzaXRlcy9zdmVsdGVtYXRlcmlhbHVpL1N2ZWx0ZU1hdGVyaWFsVWlcIjtcbmltcG9ydCBTeW5jdGhpbmcgZnJvbSBcIi4vd2Vic2l0ZXMvc3luY3RoaW5nL1N5bmN0aGluZ1wiO1xuXG4oKCkgPT4ge1xuICAndXNlIHN0cmljdCc7XG5cbiAgT3B0aW9ucy5yZWdpc3RlckFsbCgpO1xuICBPcHRpb25zLmxvYWRJbkdyZWFzeWZvcmsoKTtcblxuICBSZWFjdC5yZXBsYWNlKCk7XG4gIEFuZ3VsYXIucmVwbGFjZSgpO1xuICBKdW5pdC5yZXBsYWNlKCk7XG4gIENvZGVjZXB0LnJlcGxhY2UoKTtcbiAgR2l0aHViLnJlcGxhY2UoKTtcbiAgTmVzdC5yZXBsYWNlKCk7XG4gIEVtYmVyLnJlcGxhY2UoKTtcbiAgRWxlY3Ryb24ucmVwbGFjZSgpO1xuICBKZW5raW5zLnJlcGxhY2UoKTtcbiAgU3ZlbHRlLnJlcGxhY2UoKTtcbiAgU3ZlbHRlTWF0ZXJpYWxVaS5yZXBsYWNlKCk7XG4gIFN5bmN0aGluZy5yZXBsYWNlKCk7XG59KSgpO1xuIl0sIm5hbWVzIjpbIkp1bml0IiwibG9jYXRpb24iLCJocmVmIiwiJCIsInNlbGVjdG9ycyIsImp1bml0QWJvdXQiLCJwcmV2QWxsIiwicmVtb3ZlIiwianVuaXRMb2dvIiwiYXR0ciIsImp1bml0TG9nb1VybCIsImp1bml0RmF2aWNvbiIsIlN0b3JlIiwia2V5IiwiR01fZ2V0VmFsdWUiLCJ2YWx1ZSIsIkdNX3NldFZhbHVlIiwiSHR0cERhdGFUeXBlIiwiSHR0cCIsIm9wdGlvbiIsInN5bmNocm9ub3VzIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJHTV94bWxodHRwUmVxdWVzdCIsIm9ubG9hZCIsInJlc3BvbnNlIiwiZGF0YVR5cGUiLCJKU09OIiwicGFyc2UiLCJyZXNwb25zZVRleHQiLCJvbmVycm9yIiwiZXJyb3IiLCJvbmxvYWQxIiwiZGV0YWlscyIsIk1lbnVDbWQiLCJuYW1lIiwiZm4iLCJHTV9yZWdpc3Rlck1lbnVDb21tYW5kIiwibWVudUNtZElkIiwiR01fdW5yZWdpc3Rlck1lbnVDb21tYW5kIiwiT3B0aW9ucyIsInZhbCIsInZhbElzQm9vbCIsImN1cnJlbnRNZW51Q21kSWQiLCJyZWdpc3RlciIsImxhYmVsIiwic2V0Iiwic3RyaW5naWZ5IiwidW5yZWdpc3RlciIsInJlZ2lzdGVyQm9vbE9wdGlvbiIsIndpbmRvdyIsInJlbG9hZCIsIm9wZW4iLCJvcHRpb25zIiwic3RvcmVPcHRpb24iLCJnZXQiLCJlIiwiY29uc29sZSIsIndhcm4iLCJ2ZXJzaW9uIiwiaG9zdCIsImluZGV4T2YiLCJzZWxlY3RvciIsInNjcmlwdExpbmtzIiwic2NyaXB0T3B0aW9ucyIsInNjcmlwdENvbnRlbnQiLCIkYm9keSIsIiRzY3JpcHRMaW5rcyIsIiRzY3JpcHRDb250ZW50IiwiY2hpbGRyZW4iLCJhZnRlciIsIm9uIiwiJHNjcmlwdE9wdGlvbnMiLCIkY3VycmVudExpIiwiaHRtbCIsInRleHQiLCJyZW1vdmVDbGFzcyIsInBhcmVudCIsImFkZENsYXNzIiwib3B0aW9uTmFtZSIsIm9wdGlvblZhbCIsIktleXMiLCJyZW1vdmVCYXIiLCJqaW5yaXNoaWNpIiwib3B0aW9uU2VsZWN0b3IiLCJyZW1vdmVCYXJPcHRpb24iLCJqaW5yaXNoaWNpT3B0aW9uIiwidG9rZW4iLCJCYXIiLCJiYXJTZWxlY3RvciIsIm1hdGNoIiwiaGlkZUJhclNlbGVjdG9yIiwiaGlkZSIsImlzT2JzZXJ2ZUhpZGVCYXIiLCJpIiwib2JzZXJ2ZXIiLCJNdXRhdGlvbk9ic2VydmVyIiwiZGlzY29ubmVjdCIsIm9ic2VydmUiLCJjaGlsZExpc3QiLCJzdWJ0cmVlIiwic3RvcmVKaW5yaXNoaWNpVmFsIiwiZ2V0SmlucmlzaGljaSIsInRoZW4iLCJkYXRhIiwiamlucmlzaGljaUNvbnRlbnQiLCJyZXBsYWNlT2JzZXJ2ZXIiLCJyZXBsYWNlQmFyIiwiY3N2Q2FsbGJhY2siLCJqaW5yaXNoaWNpQ2FsbGJhY2siLCJpc09ic2VydmVCYXIiLCJmb2xsb3dVcE9ic2VydmVTZWxlY3RvciIsInJlcGxhY2UiLCJ0eHQiLCJjc3MiLCIkYmFyIiwicmVwbGFjZUJhclNlbGVjdG9yIiwiYmFyIiwibGVuZ3RoIiwiZXEiLCJiYXJVbFNlbGVjdG9yIiwiYmFyVWwiLCJ1cmwiLCJzdGF0dXMiLCJjb250ZW50Iiwib3JpZ2luIiwiYXV0aG9yIiwidGl0bGUiLCJSZWFjdCIsImhpZGVCYXIiLCJmb2xsb3dVcE9ic2VydmVFbGVtZW50IiwiQW5ndWxhciIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJ0b0xvd2VyQ2FzZSIsImRpc21pc3NOb3RpZmljYXRpb25CdG4iLCJjbGljayIsIkNvZGVjZXB0IiwiR2l0aHViIiwiJG5vdGljZSIsIm5vdGljZSIsIkVtYmVyIiwiRWxlY3Ryb24iLCJsb2dvIiwicmVwbGFjZVdpdGgiLCJwYWdlVGl0bGUiLCJuZXh0QWxsIiwiZWFjaCIsImVsIiwiJGVsIiwiYXBwZW5kIiwiU3ZlbHRlIiwiJG5hdlNwb3QiLCJuYXZTcG90Iiwic3ZlbHRlTG9nb1N0eWxlIiwib2JzZXJ2aW5nIiwiYmFySGVpZ2h0IiwiYmFySGVpZ2h0QXR0ck5hbWUiLCJTdmVsdGVNYXRlcmlhbFVpIiwiU3luY3RoaW5nIiwiTmVzdCIsIkplbmtpbnMiLCJyZWdpc3RlckFsbCIsImxvYWRJbkdyZWFzeWZvcmsiXSwic291cmNlUm9vdCI6IiJ9