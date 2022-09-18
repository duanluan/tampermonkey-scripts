/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 345:
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


;// CONCATENATED MODULE: ./utils/src/BaseOptions.ts
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function BaseOptions_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function BaseOptions_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function BaseOptions_createClass(Constructor, protoProps, staticProps) { if (protoProps) BaseOptions_defineProperties(Constructor.prototype, protoProps); if (staticProps) BaseOptions_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



/**
 * 选项菜单
 */

var BaseOptions = /*#__PURE__*/function () {
  /**
   * 脚本 ID
   */
  function BaseOptions(scriptId) {
    BaseOptions_classCallCheck(this, BaseOptions);

    this.scriptId = scriptId;
  }
  /**
   * 选项 Key
   */


  BaseOptions_createClass(BaseOptions, null, [{
    key: "registerBoolOption",
    value:
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
     */

  }, {
    key: "registerAll",
    value: function registerAll(scriptId) {
      MenuCmd.register('更多设置', function () {
        window.open('https://greasyfork.org/scripts/' + scriptId, '_blank');
      });

      var _iterator = _createForOfIteratorHelper(this.options),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var option = _step.value;
          // TODO 【调试】不保留选项的值，每次都从 Store 中获取
          // Store.set(option.name, null);
          var storeOption = JSON.parse(Store/* default.get */.Z.get(option.name)); // 如果选项不存在 || 版本不一致 时重置选项

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
      var $body = $('body'),
          $scriptLinks = $(selector.scriptLinks),
          $scriptContent = $(selector.scriptContent); // 添加脚本设置的选项卡

      $scriptLinks.children('li:eq(0)').after("<li><a href=\"javascript:;\" id=\"script-options\">\u811A\u672C\u8BBE\u7F6E</a></li>");
      $body.on('click', selector.scriptOptions, function () {
        var $scriptOptions = $(selector.scriptOptions); // 点击脚本设置的菜单样式

        var $currentLi = $scriptLinks.children('li.current');
        $currentLi.html("<a href=\"".concat(location.href, "\">").concat($currentLi.text(), "</a>"));
        $currentLi.removeClass('current');
        $scriptOptions.parent().addClass('current');
        loadOptionContentFn($scriptContent);
      });
    }
  }]);

  return BaseOptions;
}();

_defineProperty(BaseOptions, "Keys", {// demo
  // xxx: 'xxx'
});

_defineProperty(BaseOptions, "options", [// demo
  // {label: '', name: this.Keys.xxx, version: 1, value: false, menuCmdId: null},
]);


;// CONCATENATED MODULE: ./core-socialist-values/src/Options.ts
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function Options_createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = Options_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function Options_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return Options_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Options_arrayLikeToArray(o, minLen); }

function Options_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function Options_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Options_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Options_createClass(Constructor, protoProps, staticProps) { if (protoProps) Options_defineProperties(Constructor.prototype, protoProps); if (staticProps) Options_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function Options_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var Options = /*#__PURE__*/function (_BaseOptions) {
  _inherits(Options, _BaseOptions);

  var _super = _createSuper(Options);

  function Options() {
    Options_classCallCheck(this, Options);

    return _super.apply(this, arguments);
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
      _get(_getPrototypeOf(Options), "registerBoolOption", this).call(this, option);
    }
    /**
     * 注册所有选项
     */

  }, {
    key: "registerAll",
    value: function registerAll() {
      _get(_getPrototypeOf(Options), "registerAll", this).call(this, this.SCRIPT_ID);
    }
    /**
     * 在页面中加载选项
     */

  }, {
    key: "loadInGreasyfork",
    value: function loadInGreasyfork() {
      var _this = this;

      _get(_getPrototypeOf(Options), "loadInGreasyfork", this).call(this, this.SCRIPT_ID, function ($scriptContent) {
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
              case Options.Keys.removeBar:
                scriptContent += "<label><input type=\"checkbox\" id=\"script-options-".concat(optionName, "\" ").concat(optionVal ? 'checked' : '', "> \u662F\u5426\u9690\u85CF\u6761\u5E45\uFF08\u52FE\u9009\u540E\u5C06\u9690\u85CF\u6761\u5E45\u800C\u4E0D\u662F\u66FF\u6362\u5176\u5185\u5BB9\uFF09</label>");
                break;

              case Options.Keys.jinrishici:
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
        var $body = $('body'); // region 添加脚本设置的事件
        // 是否隐藏条幅

        var optionSelector = '#script-options-' + Options.Keys.removeBar;
        $body.on('change', optionSelector, function () {
          var removeBarOption = JSON.parse(Store/* default.get */.Z.get(Options.Keys.removeBar));
          removeBarOption.value = !removeBarOption.value; // 重新注册菜单

          MenuCmd.unregister(removeBarOption.menuCmdId);

          _this.registerBoolOption(removeBarOption);
        }); // 启用今日诗词

        optionSelector = '#script-options-' + Options.Keys.jinrishici + '-enabled';
        $body.on('change', optionSelector, function () {
          var jinrishiciOption = JSON.parse(Store/* default.get */.Z.get(Options.Keys.jinrishici));
          jinrishiciOption.value = !jinrishiciOption.value; // 重新注册菜单

          MenuCmd.unregister(jinrishiciOption.menuCmdId);

          _this.registerBoolOption(jinrishiciOption);
        }); // endregion
      });
    }
  }]);

  return Options;
}(BaseOptions);

Options_defineProperty(Options, "SCRIPT_ID", 440854);

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


// EXTERNAL MODULE: ./core-socialist-values/src/Options.ts + 2 modules
var Options = __webpack_require__(345);
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
// @author duanluan
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
/******/ 	var __webpack_exports__ = __webpack_require__(345);
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUFDQUEsd0RBQUE7RUFFQTZFLGFBQUE7RUFDQUksZUFBQTtFQUNBdEUsYUFBQTtFQUNBNEUsZ0JBQUE7RUFDQUMsY0FBQTtFQUNBc0IscUJBQUE7RUFDQW5CLGFBQUE7RUFDQUMsZ0JBQUE7RUFDQW1CLHVCQUFBO0VBQ0FWLGNBQUE7RUFDQU8sd0JBQUE7RUFDQUMsaUJBQUE7QUFDRCxDQWxCRDs7Ozs7Ozs7Ozs7Ozs7OztBQy9DQTtBQUNBO0FBQ0E7SUFDcUIzSjs7Ozs7Ozs7SUFFbkI7QUFDRjtBQUNBO0FBQ0E7SUFDRSxhQUFXZ0ssR0FBWCxFQUE2QjtNQUMzQjtNQUNBLE9BQU9DLFdBQVcsQ0FBQ0QsR0FBRCxDQUFsQjtJQUNEO0lBRUQ7QUFDRjtBQUNBO0FBQ0E7QUFDQTs7OztXQUNFLGFBQVdBLEdBQVgsRUFBd0IzSixLQUF4QixFQUFvQztNQUNsQztNQUNBNkosV0FBVyxDQUFDRixHQUFELEVBQU0zSixLQUFOLENBQVg7SUFDRDs7Ozs7Ozs7Ozs7O1VDdEJIO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1VFQUE7VUFDQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RhbXBlcm1vbmtleS1zY3JpcHQtdXRpbHMvLi91dGlscy9zcmMvZ20vTWVudUNtZC50cyIsIndlYnBhY2s6Ly90YW1wZXJtb25rZXktc2NyaXB0LXV0aWxzLy4vdXRpbHMvc3JjL0Jhc2VPcHRpb25zLnRzIiwid2VicGFjazovL3RhbXBlcm1vbmtleS1zY3JpcHQtdXRpbHMvLi9jb3JlLXNvY2lhbGlzdC12YWx1ZXMvc3JjL09wdGlvbnMudHMiLCJ3ZWJwYWNrOi8vdGFtcGVybW9ua2V5LXNjcmlwdC11dGlscy8uL2NvcmUtc29jaWFsaXN0LXZhbHVlcy9zcmMvd2Vic2l0ZXMvanVuaXQvSnVuaXQudHMiLCJ3ZWJwYWNrOi8vdGFtcGVybW9ua2V5LXNjcmlwdC11dGlscy8uL3V0aWxzL3NyYy9nbS9lbnVtL0h0dHBEYXRhVHlwZS50cyIsIndlYnBhY2s6Ly90YW1wZXJtb25rZXktc2NyaXB0LXV0aWxzLy4vdXRpbHMvc3JjL2dtL1JlcXVlc3QudHMiLCJ3ZWJwYWNrOi8vdGFtcGVybW9ua2V5LXNjcmlwdC11dGlscy8uL2NvcmUtc29jaWFsaXN0LXZhbHVlcy9zcmMvY29tbW9uL0Jhci50cyIsIndlYnBhY2s6Ly90YW1wZXJtb25rZXktc2NyaXB0LXV0aWxzLy4vY29yZS1zb2NpYWxpc3QtdmFsdWVzL3NyYy93ZWJzaXRlcy9yZWFjdC9SZWFjdC50cyIsIndlYnBhY2s6Ly90YW1wZXJtb25rZXktc2NyaXB0LXV0aWxzLy4vY29yZS1zb2NpYWxpc3QtdmFsdWVzL3NyYy93ZWJzaXRlcy9hbmd1bGFyL0FuZ3VsYXIudHMiLCJ3ZWJwYWNrOi8vdGFtcGVybW9ua2V5LXNjcmlwdC11dGlscy8uL2NvcmUtc29jaWFsaXN0LXZhbHVlcy9zcmMvd2Vic2l0ZXMvY29kZWNlcHQvQ29kZWNlcHQudHMiLCJ3ZWJwYWNrOi8vdGFtcGVybW9ua2V5LXNjcmlwdC11dGlscy8uL2NvcmUtc29jaWFsaXN0LXZhbHVlcy9zcmMvd2Vic2l0ZXMvZ2l0aHViL0dpdGh1Yi50cyIsIndlYnBhY2s6Ly90YW1wZXJtb25rZXktc2NyaXB0LXV0aWxzLy4vY29yZS1zb2NpYWxpc3QtdmFsdWVzL3NyYy93ZWJzaXRlcy9uZXN0L05lc3QudHMiLCJ3ZWJwYWNrOi8vdGFtcGVybW9ua2V5LXNjcmlwdC11dGlscy8uL2NvcmUtc29jaWFsaXN0LXZhbHVlcy9zcmMvd2Vic2l0ZXMvZW1iZXIvRW1iZXIudHMiLCJ3ZWJwYWNrOi8vdGFtcGVybW9ua2V5LXNjcmlwdC11dGlscy8uL2NvcmUtc29jaWFsaXN0LXZhbHVlcy9zcmMvd2Vic2l0ZXMvZWxlY3Ryb24vRWxlY3Ryb24udHMiLCJ3ZWJwYWNrOi8vdGFtcGVybW9ua2V5LXNjcmlwdC11dGlscy8uL2NvcmUtc29jaWFsaXN0LXZhbHVlcy9zcmMvd2Vic2l0ZXMvamVua2lucy9KZW5raW5zLnRzIiwid2VicGFjazovL3RhbXBlcm1vbmtleS1zY3JpcHQtdXRpbHMvLi9jb3JlLXNvY2lhbGlzdC12YWx1ZXMvc3JjL3dlYnNpdGVzL3N2ZWx0ZS9TdmVsdGUudHMiLCJ3ZWJwYWNrOi8vdGFtcGVybW9ua2V5LXNjcmlwdC11dGlscy8uL2NvcmUtc29jaWFsaXN0LXZhbHVlcy9zcmMvd2Vic2l0ZXMvc3ZlbHRlbWF0ZXJpYWx1aS9TdmVsdGVNYXRlcmlhbFVpLnRzIiwid2VicGFjazovL3RhbXBlcm1vbmtleS1zY3JpcHQtdXRpbHMvLi9jb3JlLXNvY2lhbGlzdC12YWx1ZXMvc3JjL3dlYnNpdGVzL3N5bmN0aGluZy9TeW5jdGhpbmcudHMiLCJ3ZWJwYWNrOi8vdGFtcGVybW9ua2V5LXNjcmlwdC11dGlscy8uL2NvcmUtc29jaWFsaXN0LXZhbHVlcy9zcmMvbWFpbi50cyIsIndlYnBhY2s6Ly90YW1wZXJtb25rZXktc2NyaXB0LXV0aWxzLy4vdXRpbHMvc3JjL2dtL1N0b3JlLnRzIiwid2VicGFjazovL3RhbXBlcm1vbmtleS1zY3JpcHQtdXRpbHMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdGFtcGVybW9ua2V5LXNjcmlwdC11dGlscy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdGFtcGVybW9ua2V5LXNjcmlwdC11dGlscy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RhbXBlcm1vbmtleS1zY3JpcHQtdXRpbHMvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly90YW1wZXJtb25rZXktc2NyaXB0LXV0aWxzL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly90YW1wZXJtb25rZXktc2NyaXB0LXV0aWxzL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIOmAiemhueiPnOWNlVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNZW51Q21kIHtcblxuICAvKipcbiAgICog5rOo5YaMXG4gICAqIEBwYXJhbSBuYW1lIOWQjeensFxuICAgKiBAcGFyYW0gZm4g54K55Ye76I+c5Y2V5pe25omn6KGM55qE5Ye95pWwXG4gICAqL1xuICBzdGF0aWMgcmVnaXN0ZXIobmFtZTogc3RyaW5nLCBmbjogRnVuY3Rpb24pOiBudW1iZXIge1xuICAgIC8vIEB0cy1pZ25vcmVcbiAgICByZXR1cm4gR01fcmVnaXN0ZXJNZW51Q29tbWFuZChuYW1lLCBmbik7XG4gIH1cblxuICAvKipcbiAgICog5rOo6ZSAXG4gICAqIEBwYXJhbSBtZW51Q21kSWQg5rOo5YaM5pe26L+U5Zue55qEIElEXG4gICAqL1xuICBzdGF0aWMgdW5yZWdpc3RlcihtZW51Q21kSWQ6IG51bWJlcikge1xuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBHTV91bnJlZ2lzdGVyTWVudUNvbW1hbmQobWVudUNtZElkKTtcbiAgfVxufVxuIiwiaW1wb3J0IFN0b3JlIGZyb20gXCIuLi8uLi91dGlscy9zcmMvZ20vU3RvcmVcIjtcbmltcG9ydCBNZW51Q21kIGZyb20gXCIuLi8uLi91dGlscy9zcmMvZ20vTWVudUNtZFwiO1xuXG4vKipcbiAqIOmAiemhueiPnOWNlVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCYXNlT3B0aW9ucyB7XG4gIC8qKlxuICAgKiDohJrmnKwgSURcbiAgICovXG4gIHNjcmlwdElkOiBudW1iZXI7XG5cbiAgY29uc3RydWN0b3Ioc2NyaXB0SWQpIHtcbiAgICB0aGlzLnNjcmlwdElkID0gc2NyaXB0SWQ7XG4gIH1cblxuICAvKipcbiAgICog6YCJ6aG5IEtleVxuICAgKi9cbiAgcHJvdGVjdGVkIHN0YXRpYyBLZXlzID0ge1xuICAgIC8vIGRlbW9cbiAgICAvLyB4eHg6ICd4eHgnXG4gIH1cblxuICAvKipcbiAgICog6YCJ6aG5XG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBwcm90ZWN0ZWQgc3RhdGljIG9wdGlvbnMgPSBbXG4gICAgLy8gZGVtb1xuICAgIC8vIHtsYWJlbDogJycsIG5hbWU6IHRoaXMuS2V5cy54eHgsIHZlcnNpb246IDEsIHZhbHVlOiBmYWxzZSwgbWVudUNtZElkOiBudWxsfSxcbiAgXTtcblxuICAvKipcbiAgICog5rOo5YaMIGJvb2wg57G75Z6L55qE6YCJ6aG5XG4gICAqIEBwYXJhbSBvcHRpb24g6YCJ6aG5XG4gICAqL1xuICBzdGF0aWMgcmVnaXN0ZXJCb29sT3B0aW9uKG9wdGlvbjogYW55KSB7XG4gICAgY29uc3QgdmFsID0gb3B0aW9uLnZhbHVlLCB2YWxJc0Jvb2wgPSAodHlwZW9mIHZhbCA9PT0gJ2Jvb2xlYW4nKTtcblxuICAgIGlmICghdmFsSXNCb29sKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIC8vIOazqOWGjOmAiemhuVxuICAgIGNvbnN0IGN1cnJlbnRNZW51Q21kSWQgPSBNZW51Q21kLnJlZ2lzdGVyKCh2YWwgPyAn4piR77iPICcgOiAn8J+UsiAnKSArIG9wdGlvbi5sYWJlbCwgKCkgPT4ge1xuICAgICAgLy8g54K55Ye75YC85Y+W5Y+NXG4gICAgICBvcHRpb24udmFsdWUgPSAhb3B0aW9uLnZhbHVlO1xuICAgICAgU3RvcmUuc2V0KG9wdGlvbi5uYW1lLCBKU09OLnN0cmluZ2lmeShvcHRpb24pKTtcblxuICAgICAgLy8g5Y+W5raI5rOo5YaMXG4gICAgICBNZW51Q21kLnVucmVnaXN0ZXIoY3VycmVudE1lbnVDbWRJZCk7XG4gICAgICAvLyDph43mlrDms6jlhoxcbiAgICAgIHRoaXMucmVnaXN0ZXJCb29sT3B0aW9uKG9wdGlvbik7XG4gICAgICAvLyDliLfmlrDpobXpnaJcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcbiAgICB9KTtcblxuICAgIC8vIOS/neWtmOmAiemhuSBJRFxuICAgIG9wdGlvbi5tZW51Q21kSWQgPSBjdXJyZW50TWVudUNtZElkO1xuICAgIFN0b3JlLnNldChvcHRpb24ubmFtZSwgSlNPTi5zdHJpbmdpZnkob3B0aW9uKSk7XG4gIH1cblxuICAvKipcbiAgICog5rOo5YaM5omA5pyJ6YCJ6aG5XG4gICAqL1xuICBzdGF0aWMgcmVnaXN0ZXJBbGwoc2NyaXB0SWQ6IG51bWJlcikge1xuICAgIE1lbnVDbWQucmVnaXN0ZXIoJ+abtOWkmuiuvue9ricsICgpID0+IHtcbiAgICAgIHdpbmRvdy5vcGVuKCdodHRwczovL2dyZWFzeWZvcmsub3JnL3NjcmlwdHMvJyArIHNjcmlwdElkLCAnX2JsYW5rJyk7XG4gICAgfSk7XG5cbiAgICBmb3IgKGNvbnN0IG9wdGlvbiBvZiB0aGlzLm9wdGlvbnMpIHtcbiAgICAgIC8vIFRPRE8g44CQ6LCD6K+V44CR5LiN5L+d55WZ6YCJ6aG555qE5YC877yM5q+P5qyh6YO95LuOIFN0b3JlIOS4reiOt+WPllxuICAgICAgLy8gU3RvcmUuc2V0KG9wdGlvbi5uYW1lLCBudWxsKTtcblxuICAgICAgbGV0IHN0b3JlT3B0aW9uID0gSlNPTi5wYXJzZShTdG9yZS5nZXQob3B0aW9uLm5hbWUpKTtcbiAgICAgIC8vIOWmguaenOmAiemhueS4jeWtmOWcqCB8fCDniYjmnKzkuI3kuIDoh7Qg5pe26YeN572u6YCJ6aG5XG4gICAgICBpZiAoc3RvcmVPcHRpb24gPT09IG51bGwgfHwgIXN0b3JlT3B0aW9uWyd2ZXJzaW9uJ10gfHwgc3RvcmVPcHRpb25bJ3ZlcnNpb24nXSA8IG9wdGlvbi52ZXJzaW9uKSB7XG4gICAgICAgIFN0b3JlLnNldChvcHRpb24ubmFtZSwgSlNPTi5zdHJpbmdpZnkob3B0aW9uKSk7XG4gICAgICAgIHN0b3JlT3B0aW9uID0gb3B0aW9uO1xuICAgICAgfVxuICAgICAgdGhpcy5yZWdpc3RlckJvb2xPcHRpb24oc3RvcmVPcHRpb24pO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiDlnKjpobXpnaLkuK3liqDovb3pgInpoblcbiAgICovXG4gIHN0YXRpYyBsb2FkSW5HcmVhc3lmb3JrKHNjcmlwdElkOiBudW1iZXIsIGxvYWRPcHRpb25Db250ZW50Rm46IEZ1bmN0aW9uKSB7XG4gICAgaWYgKGxvY2F0aW9uLmhvc3QgIT09ICdncmVhc3lmb3JrLm9yZycgfHwgbG9jYXRpb24uaHJlZi5pbmRleE9mKCcvc2NyaXB0cy8nICsgc2NyaXB0SWQpID09IC0xKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHNlbGVjdG9yID0ge1xuICAgICAgc2NyaXB0TGlua3M6ICcjc2NyaXB0LWxpbmtzJyxcbiAgICAgIHNjcmlwdE9wdGlvbnM6ICcjc2NyaXB0LW9wdGlvbnMnLFxuICAgICAgc2NyaXB0Q29udGVudDogJyNzY3JpcHQtY29udGVudCcsXG4gICAgfVxuICAgIGNvbnN0ICRib2R5ID0gJCgnYm9keScpLCAkc2NyaXB0TGlua3MgPSAkKHNlbGVjdG9yLnNjcmlwdExpbmtzKSwgJHNjcmlwdENvbnRlbnQgPSAkKHNlbGVjdG9yLnNjcmlwdENvbnRlbnQpO1xuXG4gICAgLy8g5re75Yqg6ISa5pys6K6+572u55qE6YCJ6aG55Y2hXG4gICAgJHNjcmlwdExpbmtzLmNoaWxkcmVuKCdsaTplcSgwKScpLmFmdGVyKGA8bGk+PGEgaHJlZj1cImphdmFzY3JpcHQ6O1wiIGlkPVwic2NyaXB0LW9wdGlvbnNcIj7ohJrmnKzorr7nva48L2E+PC9saT5gKVxuICAgICRib2R5Lm9uKCdjbGljaycsIHNlbGVjdG9yLnNjcmlwdE9wdGlvbnMsICgpID0+IHtcbiAgICAgIGNvbnN0ICRzY3JpcHRPcHRpb25zID0gJChzZWxlY3Rvci5zY3JpcHRPcHRpb25zKTtcbiAgICAgIC8vIOeCueWHu+iEmuacrOiuvue9rueahOiPnOWNleagt+W8j1xuICAgICAgY29uc3QgJGN1cnJlbnRMaSA9ICRzY3JpcHRMaW5rcy5jaGlsZHJlbignbGkuY3VycmVudCcpO1xuICAgICAgJGN1cnJlbnRMaS5odG1sKGA8YSBocmVmPVwiJHtsb2NhdGlvbi5ocmVmfVwiPiR7JGN1cnJlbnRMaS50ZXh0KCl9PC9hPmApO1xuICAgICAgJGN1cnJlbnRMaS5yZW1vdmVDbGFzcygnY3VycmVudCcpO1xuICAgICAgJHNjcmlwdE9wdGlvbnMucGFyZW50KCkuYWRkQ2xhc3MoJ2N1cnJlbnQnKTtcblxuICAgICAgbG9hZE9wdGlvbkNvbnRlbnRGbigkc2NyaXB0Q29udGVudCk7XG4gICAgfSk7XG4gIH1cbn1cbiIsImltcG9ydCBTdG9yZSBmcm9tIFwiLi4vLi4vdXRpbHMvc3JjL2dtL1N0b3JlXCI7XG5pbXBvcnQgTWVudUNtZCBmcm9tIFwiLi4vLi4vdXRpbHMvc3JjL2dtL01lbnVDbWRcIjtcbmltcG9ydCBCYXNlT3B0aW9ucyBmcm9tIFwiLi4vLi4vdXRpbHMvc3JjL0Jhc2VPcHRpb25zXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE9wdGlvbnMgZXh0ZW5kcyBCYXNlT3B0aW9ucyB7XG5cbiAgcHJpdmF0ZSBzdGF0aWMgU0NSSVBUX0lEID0gNDQwODU0O1xuXG4gIC8qKlxuICAgKiDpgInpobkgS2V5XG4gICAqL1xuICBzdGF0aWMgS2V5cyA9IHtcbiAgICByZW1vdmVCYXI6ICdyZW1vdmVCYXInLFxuICAgIGppbnJpc2hpY2k6ICdqaW5yaXNoaWNpJyxcbiAgfVxuXG4gIC8qKlxuICAgKiDpgInpoblcbiAgICogQHByaXZhdGVcbiAgICovXG4gIHByb3RlY3RlZCBzdGF0aWMgb3B0aW9ucyA9IFtcbiAgICB7bGFiZWw6ICfpmpDol4/mnaHluYUnLCBuYW1lOiBPcHRpb25zLktleXMucmVtb3ZlQmFyLCB2ZXJzaW9uOiAxLCB2YWx1ZTogZmFsc2UsIG1lbnVDbWRJZDogbnVsbH0sXG4gICAge2xhYmVsOiAn5LuK5pel6K+X6K+NJywgbmFtZTogT3B0aW9ucy5LZXlzLmppbnJpc2hpY2ksIHZlcnNpb246IDEsIHZhbHVlOiBmYWxzZSwgbWVudUNtZElkOiBudWxsLCB0b2tlbjogJyd9XG4gIF07XG5cbiAgLyoqXG4gICAqIOazqOWGjCBib29sIOexu+Wei+eahOmAiemhuVxuICAgKiBAcGFyYW0gb3B0aW9uIOmAiemhuVxuICAgKi9cbiAgc3RhdGljIHJlZ2lzdGVyQm9vbE9wdGlvbihvcHRpb246IGFueSkge1xuICAgIHN1cGVyLnJlZ2lzdGVyQm9vbE9wdGlvbihvcHRpb24pO1xuICB9XG5cbiAgLyoqXG4gICAqIOazqOWGjOaJgOaciemAiemhuVxuICAgKi9cbiAgc3RhdGljIHJlZ2lzdGVyQWxsKCkge1xuICAgIHN1cGVyLnJlZ2lzdGVyQWxsKHRoaXMuU0NSSVBUX0lEKTtcbiAgfVxuXG4gIC8qKlxuICAgKiDlnKjpobXpnaLkuK3liqDovb3pgInpoblcbiAgICovXG4gIHN0YXRpYyBsb2FkSW5HcmVhc3lmb3JrKCkge1xuICAgIHN1cGVyLmxvYWRJbkdyZWFzeWZvcmsodGhpcy5TQ1JJUFRfSUQsICgkc2NyaXB0Q29udGVudCkgPT4ge1xuICAgICAgLy8g5re75Yqg6ISa5pys6K6+572u55qE5YaF5a65XG4gICAgICBsZXQgc2NyaXB0Q29udGVudCA9ICcnO1xuICAgICAgZm9yIChjb25zdCBvcHRpb24gb2YgdGhpcy5vcHRpb25zKSB7XG4gICAgICAgIGNvbnN0IHN0b3JlT3B0aW9uID0gSlNPTi5wYXJzZShTdG9yZS5nZXQob3B0aW9uLm5hbWUpKSwgb3B0aW9uTmFtZSA9IHN0b3JlT3B0aW9uLm5hbWUsIG9wdGlvblZhbCA9IHN0b3JlT3B0aW9uLnZhbHVlO1xuXG4gICAgICAgIHNjcmlwdENvbnRlbnQgKz0gYDxoMz4ke29wdGlvbi5sYWJlbH08L2gzPmA7XG4gICAgICAgIHN3aXRjaCAob3B0aW9uTmFtZSkge1xuICAgICAgICAgIGNhc2UgT3B0aW9ucy5LZXlzLnJlbW92ZUJhcjpcbiAgICAgICAgICAgIHNjcmlwdENvbnRlbnQgKz0gYDxsYWJlbD48aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgaWQ9XCJzY3JpcHQtb3B0aW9ucy0ke29wdGlvbk5hbWV9XCIgJHtvcHRpb25WYWwgPyAnY2hlY2tlZCcgOiAnJ30+IOaYr+WQpumakOiXj+adoeW5he+8iOWLvumAieWQjuWwhumakOiXj+adoeW5heiAjOS4jeaYr+abv+aNouWFtuWGheWuue+8iTwvbGFiZWw+YDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgT3B0aW9ucy5LZXlzLmppbnJpc2hpY2k6XG4gICAgICAgICAgICBzY3JpcHRDb250ZW50ICs9IGA8bGFiZWw+PGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGlkPVwic2NyaXB0LW9wdGlvbnMtJHtvcHRpb25OYW1lfS1lbmFibGVkXCIgJHtvcHRpb25WYWwgPyAnY2hlY2tlZCcgOiAnJ30+IOWQr+eUqDxhIGhyZWY9XCJodHRwczovL3d3dy5qaW5yaXNoaWNpLmNvbVwiIHRhcmdldCA9IFwiX2JsYW5rXCI+5LuK5pel6K+X6K+NPC9hPu+8iOS7jemcgOWPlua2iOWLvumAieKAnOaYr+WQpumakOiXj+adoeW5heKAneaJjeiDveeUn+aViO+8iTwvbGFiZWw+YDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICAkc2NyaXB0Q29udGVudC5odG1sKHNjcmlwdENvbnRlbnQpO1xuXG4gICAgICBjb25zdCAkYm9keSA9ICQoJ2JvZHknKTtcbiAgICAgIC8vIHJlZ2lvbiDmt7vliqDohJrmnKzorr7nva7nmoTkuovku7ZcbiAgICAgIC8vIOaYr+WQpumakOiXj+adoeW5hVxuICAgICAgbGV0IG9wdGlvblNlbGVjdG9yID0gJyNzY3JpcHQtb3B0aW9ucy0nICsgT3B0aW9ucy5LZXlzLnJlbW92ZUJhcjtcbiAgICAgICRib2R5Lm9uKCdjaGFuZ2UnLCBvcHRpb25TZWxlY3RvciwgKCkgPT4ge1xuICAgICAgICBjb25zdCByZW1vdmVCYXJPcHRpb24gPSBKU09OLnBhcnNlKFN0b3JlLmdldChPcHRpb25zLktleXMucmVtb3ZlQmFyKSk7XG4gICAgICAgIHJlbW92ZUJhck9wdGlvbi52YWx1ZSA9ICFyZW1vdmVCYXJPcHRpb24udmFsdWU7XG4gICAgICAgIC8vIOmHjeaWsOazqOWGjOiPnOWNlVxuICAgICAgICBNZW51Q21kLnVucmVnaXN0ZXIocmVtb3ZlQmFyT3B0aW9uLm1lbnVDbWRJZCk7XG4gICAgICAgIHRoaXMucmVnaXN0ZXJCb29sT3B0aW9uKHJlbW92ZUJhck9wdGlvbik7XG4gICAgICB9KTtcblxuICAgICAgLy8g5ZCv55So5LuK5pel6K+X6K+NXG4gICAgICBvcHRpb25TZWxlY3RvciA9ICcjc2NyaXB0LW9wdGlvbnMtJyArIE9wdGlvbnMuS2V5cy5qaW5yaXNoaWNpICsgJy1lbmFibGVkJztcbiAgICAgICRib2R5Lm9uKCdjaGFuZ2UnLCBvcHRpb25TZWxlY3RvciwgKCkgPT4ge1xuICAgICAgICBjb25zdCBqaW5yaXNoaWNpT3B0aW9uID0gSlNPTi5wYXJzZShTdG9yZS5nZXQoT3B0aW9ucy5LZXlzLmppbnJpc2hpY2kpKTtcbiAgICAgICAgamlucmlzaGljaU9wdGlvbi52YWx1ZSA9ICFqaW5yaXNoaWNpT3B0aW9uLnZhbHVlO1xuICAgICAgICAvLyDph43mlrDms6jlhozoj5zljZVcbiAgICAgICAgTWVudUNtZC51bnJlZ2lzdGVyKGppbnJpc2hpY2lPcHRpb24ubWVudUNtZElkKTtcbiAgICAgICAgdGhpcy5yZWdpc3RlckJvb2xPcHRpb24oamlucmlzaGljaU9wdGlvbik7XG4gICAgICB9KTtcbiAgICAgIC8vIGVuZHJlZ2lvblxuICAgIH0pXG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEp1bml0IHtcblxuICBwcml2YXRlIHN0YXRpYyBzZWxlY3RvcnMgPSB7XG4gICAganVuaXRBYm91dDogJyNhYm91dCcsXG4gICAganVuaXRMb2dvOiAnaW1nW3NyYz1cIi9qdW5pdDUvYXNzZXRzL2ltZy9qdW5pdDUtbG9nby5wbmdcIl0nLFxuICAgIGp1bml0RmF2aWNvbjogJ2xpbmtbcmVsPVwiaWNvblwiXScsXG4gIH1cblxuICBwcml2YXRlIHN0YXRpYyBqdW5pdExvZ29VcmwgPSAnaHR0cHM6Ly9yYXcuaXFpcS5pby9kdWFubHVhbi90YW1wZXJtb25rZXktc2NyaXB0cy9tYWluL2NvcmUtc29jaWFsaXN0LXZhbHVlcy9zcmMvanVuaXQvaW1ncy9qdW5pdDUtbG9nby5wbmcnXG5cbiAgc3RhdGljIHJlcGxhY2UoKSB7XG4gICAgaWYgKGxvY2F0aW9uLmhyZWYgPT09ICdodHRwczovL2p1bml0Lm9yZy9qdW5pdDUvJykge1xuICAgICAgJCh0aGlzLnNlbGVjdG9ycy5qdW5pdEFib3V0KS5wcmV2QWxsKCkucmVtb3ZlKCk7XG4gICAgICAkKHRoaXMuc2VsZWN0b3JzLmp1bml0TG9nbykuYXR0cignc3JjJywgdGhpcy5qdW5pdExvZ29VcmwpO1xuICAgICAgJCh0aGlzLnNlbGVjdG9ycy5qdW5pdEZhdmljb24pLmF0dHIoJ2hyZWYnLCB0aGlzLmp1bml0TG9nb1VybCk7XG4gICAgfVxuICB9XG59XG4iLCJleHBvcnQgZW51bSBIdHRwRGF0YVR5cGUge1xuICBKU09OID0gXCJKU09OXCJcbn1cbiIsImltcG9ydCB7SHR0cERhdGFUeXBlfSBmcm9tIFwiLi9lbnVtL0h0dHBEYXRhVHlwZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZXF1ZXN0IHtcblxuICBzdGF0aWMgYXN5bmMgZ2V0KG9wdGlvbjogeyB1cmw6IHN0cmluZywgZGF0YVR5cGU/OiBIdHRwRGF0YVR5cGUsIHN5bmNocm9ub3VzPzogYm9vbGVhbiwgaGVhZGVycz86IHt9LCBvbmxvYWQ/OiBGdW5jdGlvbiB9KTogUHJvbWlzZTxhbnk+IHtcbiAgICBvcHRpb25bJ21ldGhvZCddID0gJ0dFVCc7XG5cbiAgICAvLyDlkIzmraXml7bov5Tlm54gUHJvbWlzZVxuICAgIGlmIChvcHRpb24uc3luY2hyb25vdXMpIHtcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgR01feG1saHR0cFJlcXVlc3Qoe1xuICAgICAgICAgIC4uLm9wdGlvbixcbiAgICAgICAgICBvbmxvYWQ6IChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgcmVzb2x2ZShvcHRpb24uZGF0YVR5cGUgPT09IEh0dHBEYXRhVHlwZS5KU09OID8gSlNPTi5wYXJzZShyZXNwb25zZS5yZXNwb25zZVRleHQpIDogcmVzcG9uc2UucmVzcG9uc2VUZXh0KTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIG9uZXJyb3I6IChlcnJvcikgPT4ge1xuICAgICAgICAgICAgcmVqZWN0KGVycm9yKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSlcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3Qgb25sb2FkMSA9IGZ1bmN0aW9uIChkZXRhaWxzKSB7XG4gICAgICAgIGxldCByZXNwb25zZTtcbiAgICAgICAgaWYgKG9wdGlvbi5kYXRhVHlwZSA9PT0gSHR0cERhdGFUeXBlLkpTT04pIHtcbiAgICAgICAgICByZXNwb25zZSA9IEpTT04ucGFyc2UoZGV0YWlscy5yZXNwb25zZVRleHQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlc3BvbnNlID0gZGV0YWlscy5yZXNwb25zZTtcbiAgICAgICAgfVxuICAgICAgICBvcHRpb24ub25sb2FkKHJlc3BvbnNlKTtcbiAgICAgIH1cbiAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgIEdNX3htbGh0dHBSZXF1ZXN0KHsuLi5vcHRpb24sIG9ubG9hZDogb25sb2FkMX0pO1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IFN0b3JlIGZyb20gXCIuLi8uLi8uLi91dGlscy9zcmMvZ20vU3RvcmVcIjtcbmltcG9ydCBSZXF1ZXN0IGZyb20gXCIuLi8uLi8uLi91dGlscy9zcmMvZ20vUmVxdWVzdFwiO1xuaW1wb3J0IE9wdGlvbnMgZnJvbSBcIi4uL09wdGlvbnNcIjtcbmltcG9ydCB7SHR0cERhdGFUeXBlfSBmcm9tIFwiLi4vLi4vLi4vdXRpbHMvc3JjL2dtL2VudW0vSHR0cERhdGFUeXBlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJhciB7XG5cbiAgLyoqXG4gICAqIOabv+aNouadoeW5heeahOmAieaLqeWZqFxuICAgKi9cbiAgc3RhdGljIHJlcGxhY2VCYXJTZWxlY3RvciA9IHtcbiAgICBiYXI6ICcuY3N2X2JhcicsXG4gICAgYmFyVWw6ICcuY3N2X2JhciAuY3N2X2Jhcl91bCcsXG4gIH07XG4gIC8qKlxuICAgKiDmm7/mjaLlkI7nmoTmnaHluYXljrvpmaTnqbrmoLzmjaLooYzlkI7nmoTmlofmnKxcbiAgICogQHByaXZhdGVcbiAgICovXG4gIHByaXZhdGUgc3RhdGljIHR4dCA9ICflr4zlvLrmsJHkuLvmlofmmI7lkozosJDoh6rnlLHlubPnrYnlhazmraPms5XmsrvniLHlm73mlazkuJror5rkv6Hlj4vlloRQcm9zcGVyaXR5RGVtb2NyYWN5Q2l2aWxpdHlIYXJtb255RnJlZWRvbUVxdWFsaXR5SnVzdGljZVJ1bGVvZmxhd1BhdHJpb3Rpc21EZWRpY2F0aW9uSW50ZWdyaXR5RnJpZW5kc2hpcCc7XG4gIC8qKlxuICAgKiDmmK/lkKblkK/nlKjku4rml6Xor5for41cbiAgICogQHByaXZhdGVcbiAgICovXG4gIHByaXZhdGUgc3RhdGljIHN0b3JlSmlucmlzaGljaVZhbCA9IGZhbHNlO1xuICAvKipcbiAgICog5LuK5pel6K+X6K+N5YaF5a65XG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBwcml2YXRlIHN0YXRpYyBqaW5yaXNoaWNpQ29udGVudCA9ICcnO1xuXG4gIC8qKlxuICAgKiDmm7/mjaLmnaHluYVcbiAgICogQHBhcmFtIG9wdGlvbnMge1xuICAgKiAgIGJhclNlbGVjdG9yOiBzdHJpbmcsICAgICAgICAgICAgICAvLyDmnaHluYXpgInmi6nlmahcbiAgICogICBpc09ic2VydmVCYXI6IGJvb2xlYW4sICAgICAgICAgICAgLy8g5piv5ZCm55uR5ZCs5p2h5bmF5Y+Y5YyW77yM5Lya55uR5ZCs5Lik5qyh5Y+Y5YyW77yM6YeN5paw5pu/5o2i44CC6YWN5ZCIIGZvbGxvd1VwT2JzZXJ2ZVNlbGVjdG9yIOWQjue7reebkeWQrFxuICAgKiAgIGZvbGxvd1VwT2JzZXJ2ZVNlbGVjdG9yPzogc3RyaW5nLCAvLyDlkI7nu63nm5HlkKzpgInmi6nlmajvvIzljbPmnaHluYXmm7/mjaLlkI7mnInlj6/og73kvJrlho3lj5jlm57ljp/moLfvvIzmraTlpITlsLHmmK/lho3nm5HlkKznmoTniLbnuqfpgInmi6nlmajvvIxpc09ic2VydmVCYXIg5Li6IHRydWUg5pe255Sf5pWIXG4gICAqICAgaGlkZUJhclNlbGVjdG9yOiBzdHJpbmcsICAgICAgICAgIC8vIOmakOiXj+adoeW5hemAieaLqeWZqFxuICAgKiAgIGlzT2JzZXJ2ZUhpZGVCYXI6IGJvb2xlYW4sICAgICAgICAvLyDmmK/lkKbnm5HlkKzpmpDol4/mnaHluYXlj5jljJbvvIzkvJrnm5HlkKzkuKTmrKHlj5jljJbvvIzph43mlrDpmpDol4/jgIJcbiAgICogICByZXBsYWNlQmFyQ2FsbGJhY2s/OiBGdW5jdGlvbiwgICAgLy8g5q+P5qyh5pu/5o2i5ZCO5Zue6LCDXG4gICAqICAgamlucmlzaGljaUNhbGxiYWNrPzogRnVuY3Rpb24sICAgIC8vIOavj+asoeabv+aNouS4uuS7iuaXpeivl+ivjeWQjuWbnuiwg1xuICAgKiAgIGhpZGVCYXJDYWxsYmFjaz8gRnVuY3Rpb24gICAgICAgICAvLyDpmpDol4/lkI7lm57osINcbiAgICogfVxuICAgKi9cbiAgc3RhdGljIHJlcGxhY2Uob3B0aW9uczogeyBiYXJTZWxlY3Rvcjogc3RyaW5nLCBpc09ic2VydmVCYXI6IGJvb2xlYW4sIGZvbGxvd1VwT2JzZXJ2ZVNlbGVjdG9yPzogc3RyaW5nLCBoaWRlQmFyU2VsZWN0b3I6IHN0cmluZywgaXNPYnNlcnZlSGlkZUJhcjogYm9vbGVhbiwgcmVwbGFjZUJhckNhbGxiYWNrPzogRnVuY3Rpb24sIGppbnJpc2hpY2lDYWxsYmFjaz86IEZ1bmN0aW9uLCBoaWRlQmFyQ2FsbGJhY2s/OiBGdW5jdGlvbiB9KSB7XG4gICAgaWYgKCEkKG9wdGlvbnMuYmFyU2VsZWN0b3IpLnRleHQoKS5tYXRjaCgvdWtyYWluZXzkuYzlhYvlhbB8YmxhY2t86buR5Lq6L2kpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8g5aaC5p6c56e76Zmk5qiq5bmFXG4gICAgaWYgKEpTT04ucGFyc2UoU3RvcmUuZ2V0KE9wdGlvbnMuS2V5cy5yZW1vdmVCYXIpKS52YWx1ZSkge1xuICAgICAgLy8g6ZqQ6JeP5qiq5bmFXG4gICAgICAkKG9wdGlvbnMuaGlkZUJhclNlbGVjdG9yKS5oaWRlKCk7XG4gICAgICBpZiAob3B0aW9ucy5pc09ic2VydmVIaWRlQmFyKSB7XG4gICAgICAgIGxldCBpID0gMDtcbiAgICAgICAgLy8g6ZqQ6JeP5p2h5bmF6aaW5qyh5Yqg6L2977ya55uR5ZCs5p2h5bmF5Y+Y5YyW77yM5Y+Y5YyW5ZCO5YaN5qyh5omn6KGMXG4gICAgICAgIGNvbnN0IG9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoKCkgPT4ge1xuICAgICAgICAgICQob3B0aW9ucy5oaWRlQmFyU2VsZWN0b3IpLmhpZGUoKTtcbiAgICAgICAgICAvLyDmm7/mjaLkuKTmrKHlkI7nu5PmnZ/nm5HlkKxcbiAgICAgICAgICBpZiAoaSA+PSAxKSB7XG4gICAgICAgICAgICBvYnNlcnZlci5kaXNjb25uZWN0KCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGkrKztcbiAgICAgICAgfSk7XG4gICAgICAgIG9ic2VydmVyLm9ic2VydmUoJChvcHRpb25zLmhpZGVCYXJTZWxlY3RvcilbMF0sIHtjaGlsZExpc3Q6IHRydWUsIHN1YnRyZWU6IHRydWV9KTtcbiAgICAgIH1cbiAgICAgIGlmIChvcHRpb25zLmhpZGVCYXJDYWxsYmFjaykge1xuICAgICAgICBvcHRpb25zLmhpZGVCYXJDYWxsYmFjaygpO1xuICAgICAgfVxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuc3RvcmVKaW5yaXNoaWNpVmFsID0gSlNPTi5wYXJzZShTdG9yZS5nZXQoT3B0aW9ucy5LZXlzLmppbnJpc2hpY2kpKS52YWx1ZTtcbiAgICBpZiAodGhpcy5zdG9yZUppbnJpc2hpY2lWYWwpIHtcbiAgICAgIHRoaXMuZ2V0SmlucmlzaGljaSgpLnRoZW4oKGRhdGE6IGFueSkgPT4ge1xuICAgICAgICB0aGlzLmppbnJpc2hpY2lDb250ZW50ID0gZGF0YTtcbiAgICAgICAgdGhpcy5yZXBsYWNlT2JzZXJ2ZXIob3B0aW9ucyk7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5yZXBsYWNlT2JzZXJ2ZXIob3B0aW9ucyk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIOabv+aNouadoeW5heebkeWQrFxuICAgKiBAcGFyYW0gb3B0aW9uc1xuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgcHJpdmF0ZSBzdGF0aWMgcmVwbGFjZU9ic2VydmVyKG9wdGlvbnM6IHsgYmFyU2VsZWN0b3I6IHN0cmluZywgaXNPYnNlcnZlQmFyOiBib29sZWFuLCBoaWRlQmFyU2VsZWN0b3I6IHN0cmluZywgaXNPYnNlcnZlSGlkZUJhcjogYm9vbGVhbiwgZm9sbG93VXBPYnNlcnZlU2VsZWN0b3I/OiBzdHJpbmcsIHJlcGxhY2VCYXJDYWxsYmFjaz86IEZ1bmN0aW9uLCBqaW5yaXNoaWNpQ2FsbGJhY2s/OiBGdW5jdGlvbiB9KSB7XG4gICAgLy8g6aaW5qyh5pu/5o2i5qiq5bmFXG4gICAgdGhpcy5yZXBsYWNlQmFyKG9wdGlvbnMuYmFyU2VsZWN0b3IsIG9wdGlvbnMucmVwbGFjZUJhckNhbGxiYWNrLCBvcHRpb25zLmppbnJpc2hpY2lDYWxsYmFjayk7XG4gICAgaWYgKCFvcHRpb25zLmlzT2JzZXJ2ZUJhcikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBsZXQgaSA9IDA7XG4gICAgLy8g5p2h5bmF6aaW5qyh5Yqg6L2977ya55uR5ZCs5p2h5bmF5Y+Y5YyW77yM5Y+Y5YyW5ZCO5YaN5qyh5omn6KGMXG4gICAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcigoKSA9PiB7XG4gICAgICB0aGlzLnJlcGxhY2VCYXIob3B0aW9ucy5iYXJTZWxlY3Rvciwgb3B0aW9ucy5yZXBsYWNlQmFyQ2FsbGJhY2ssIG9wdGlvbnMuamlucmlzaGljaUNhbGxiYWNrKTtcbiAgICAgIC8vIOabv+aNouS4pOasoeWQjue7k+adn+ebkeWQrFxuICAgICAgaWYgKGkgPj0gMSkge1xuICAgICAgICBvYnNlcnZlci5kaXNjb25uZWN0KCk7XG4gICAgICB9XG4gICAgICBpKys7XG4gICAgfSk7XG4gICAgb2JzZXJ2ZXIub2JzZXJ2ZSgkKG9wdGlvbnMuYmFyU2VsZWN0b3IpWzBdLCB7Y2hpbGRMaXN0OiB0cnVlfSk7XG5cbiAgICBpZiAob3B0aW9ucy5mb2xsb3dVcE9ic2VydmVTZWxlY3Rvcikge1xuICAgICAgLy8g5ZCO57ut5Y+Y5YyWXG4gICAgICBuZXcgTXV0YXRpb25PYnNlcnZlcigoKSA9PiB7XG4gICAgICAgIHRoaXMucmVwbGFjZUJhcihvcHRpb25zLmJhclNlbGVjdG9yLCBvcHRpb25zLnJlcGxhY2VCYXJDYWxsYmFjaywgb3B0aW9ucy5qaW5yaXNoaWNpQ2FsbGJhY2spO1xuICAgICAgfSkub2JzZXJ2ZSgkKG9wdGlvbnMuZm9sbG93VXBPYnNlcnZlU2VsZWN0b3IpWzBdLCB7Y2hpbGRMaXN0OiB0cnVlfSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIOWunumZheabv+aNouadoeW5hVxuICAgKiBAcGFyYW0gc2VsZWN0b3Ig5p2h5bmF6YCJ5oup5ZmoXG4gICAqIEBwYXJhbSByZXBsYWNlQmFyQ2FsbGJhY2sg5pu/5o2i5ZCO5Zue6LCDXG4gICAqIEBwYXJhbSBqaW5yaXNoaWNpQ2FsbGJhY2sg5pu/5o2i5Li65LuK5pel6K+X6K+N5ZCO5Zue6LCDXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBwcml2YXRlIHN0YXRpYyByZXBsYWNlQmFyKHNlbGVjdG9yOiBzdHJpbmcsIHJlcGxhY2VCYXJDYWxsYmFjaz86IEZ1bmN0aW9uLCBqaW5yaXNoaWNpQ2FsbGJhY2s/OiBGdW5jdGlvbikge1xuICAgIGlmICgkKCQoc2VsZWN0b3IpWzBdKS50ZXh0KCkucmVwbGFjZSgvXFxzKy9nLCBcIlwiKSA9PT0gQmFyLnR4dCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnN0b3JlSmlucmlzaGljaVZhbCkge1xuICAgICAgJChzZWxlY3RvcikuY3NzKHsnbWluSGVpZ2h0JzogJzMwcHgnLCAnbGluZUhlaWdodCc6ICczMHB4J30pO1xuICAgICAgJChzZWxlY3RvcikuaHRtbChgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjc3ZfYmFyXCI+XG4gICAgICAgICAgJHt0aGlzLmppbnJpc2hpY2lDb250ZW50fVxuICAgICAgICA8L2Rpdj5gXG4gICAgICApO1xuICAgICAgaWYgKGppbnJpc2hpY2lDYWxsYmFjaykge1xuICAgICAgICBqaW5yaXNoaWNpQ2FsbGJhY2soKTtcbiAgICAgIH1cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAkKHNlbGVjdG9yKS5jc3MoeydtaW5IZWlnaHQnOiAnNDBweCd9KTtcbiAgICAkKHNlbGVjdG9yKS5odG1sKGBcbiAgICAgICAgPGRpdiBjbGFzcz1cImNzdl9iYXJcIj5cbiAgICAgICAgICA8dWwgY2xhc3M9J2Nzdl9iYXJfdWwnPjxsaT7lr4zlvLo8L2xpPjxsaT7msJHkuLs8L2xpPjxsaT7mlofmmI48L2xpPjxsaT7lkozosJA8L2xpPjxsaT7oh6rnlLE8L2xpPjxsaT7lubPnrYk8L2xpPjxsaT7lhazmraM8L2xpPjxsaT7ms5Xmsrs8L2xpPjxsaT7niLHlm708L2xpPjxsaT7mlazkuJo8L2xpPjxsaT7or5rkv6E8L2xpPjxsaT7lj4vlloQ8L2xpPjwvdWw+PGJyPlxuICAgICAgICAgIDx1bCBjbGFzcz0nY3N2X2Jhcl91bCc+PGxpPlByb3NwZXJpdHk8L2xpPjxsaT5EZW1vY3JhY3k8L2xpPjxsaT5DaXZpbGl0eTwvbGk+PGxpPkhhcm1vbnk8L2xpPjxsaT5GcmVlZG9tPC9saT48bGk+RXF1YWxpdHk8L2xpPjxsaT5KdXN0aWNlPC9saT48bGk+UnVsZSBvZiBsYXc8L2xpPjxsaT5QYXRyaW90aXNtPC9saT48bGk+RGVkaWNhdGlvbjwvbGk+PGxpPkludGVncml0eTwvbGk+PGxpPkZyaWVuZHNoaXA8L2xpPlxuICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvZGl2PmBcbiAgICApO1xuXG4gICAgLy8g6YG/5YWN5Ye6546w5aSa5Liq5a+86Ie05qC35byP5re75Yqg5aSx6LSlXG4gICAgY29uc3QgJGJhciA9ICQodGhpcy5yZXBsYWNlQmFyU2VsZWN0b3IuYmFyKTtcbiAgICBpZiAoJGJhci5sZW5ndGggPT0gMikge1xuICAgICAgJGJhci5lcSgwKS5yZW1vdmUoKTtcbiAgICB9XG5cbiAgICBjb25zdCBiYXJVbFNlbGVjdG9yID0gdGhpcy5yZXBsYWNlQmFyU2VsZWN0b3IuYmFyVWw7XG4gICAgJChiYXJVbFNlbGVjdG9yKS5jc3MoeydkaXNwbGF5JzogJ2lubGluZS1ibG9jaycsICdsaXN0U3R5bGUnOiAnbm9uZScsICdtYXJnaW4nOiAwLCAncGFkZGluZyc6IDAsICd3aWR0aCc6ICdhdXRvJ30pO1xuICAgICQoYmFyVWxTZWxlY3RvciArICcgbGknKS5jc3Moeydjb2xvcic6ICcjREUyOTEwJywgJ2ZvbnRXZWlnaHQnOiAnYm9sZCcsICdmb250RmFtaWx5JzogJ0thaVRpJywgJ2Zsb2F0JzogJ2xlZnQnLCAncGFkZGluZ1JpZ2h0JzogJzEwcHgnLCAnbWluLXdpZHRoJzogJzgwcHgnLCAndGV4dEFsaWduJzogJ2NlbnRlcid9KTtcbiAgICAkKGJhclVsU2VsZWN0b3IgKyAnOmZpcnN0JykuY3NzKCd2ZXJ0aWNhbEFsaWduJywgJ2JvdHRvbScpO1xuICAgICQoYmFyVWxTZWxlY3RvciArICc6Zmlyc3QgbGknKS5jc3MoJ2ZvbnRTaXplJywgJzE4cHgnKTtcbiAgICAkKGJhclVsU2VsZWN0b3IgKyAnOmVxKDEpIGxpJykuY3NzKCdmb250U2l6ZScsICcxM3B4Jyk7XG5cbiAgICBpZiAocmVwbGFjZUJhckNhbGxiYWNrKSB7XG4gICAgICByZXBsYWNlQmFyQ2FsbGJhY2soKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICog6I635Y+W5LuK5pel6K+X6K+NXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBzdGF0aWMgYXN5bmMgZ2V0SmlucmlzaGljaSgpIHtcbiAgICBsZXQgamlucmlzaGljaU9wdGlvbiA9IEpTT04ucGFyc2UoU3RvcmUuZ2V0KE9wdGlvbnMuS2V5cy5qaW5yaXNoaWNpKSk7XG4gICAgaWYgKCFqaW5yaXNoaWNpT3B0aW9uLnZhbHVlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbGV0IHJlc3BvbnNlID0gYXdhaXQgUmVxdWVzdC5nZXQoe1xuICAgICAgdXJsOiAnaHR0cHM6Ly92Mi5qaW5yaXNoaWNpLmNvbS9vbmUuanNvbicsXG4gICAgICBkYXRhVHlwZTogSHR0cERhdGFUeXBlLkpTT04sXG4gICAgICAvLyBoZWFkZXJzOiB7XG4gICAgICAvLyAgICdYLVVzZXItVG9rZW4nOiBqaW5yaXNoaWNpT3B0aW9uLnRva2VuLFxuICAgICAgLy8gfSxcbiAgICAgIHN5bmNocm9ub3VzOiB0cnVlXG4gICAgfSk7XG5cbiAgICAvLyBAdHMtaWdub3JlXG4gICAgaWYgKCFyZXNwb25zZSB8fCByZXNwb25zZS5zdGF0dXMgIT09ICdzdWNjZXNzJykge1xuICAgICAgY29uc29sZS5lcnJvcign5LuK5pel6K+X6K+N6I635Y+W5aSx6LSlJywgcmVzcG9uc2UpO1xuICAgIH1cbiAgICAvLyAvLyDlrZjlgqggVG9rZW5cbiAgICAvLyBpZiAoamlucmlzaGljaU9wdGlvbi50b2tlbiAhPT0gcmVzcG9uc2UuZGF0YS50b2tlbikge1xuICAgIC8vICAgamlucmlzaGljaU9wdGlvbi50b2tlbiA9IHJlc3BvbnNlLmRhdGEudG9rZW47XG4gICAgLy8gICBTdG9yZS5zZXQoT3B0aW9ucy5LZXlzLmppbnJpc2hpY2ksIEpTT04uc3RyaW5naWZ5KGppbnJpc2hpY2lPcHRpb24pKTtcbiAgICAvLyB9XG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIHJldHVybiByZXNwb25zZS5kYXRhLmNvbnRlbnQgKyAnIOKAlOKAlCAnICsgcmVzcG9uc2UuZGF0YS5vcmlnaW4uYXV0aG9yICsgJ+OAiicgKyByZXNwb25zZS5kYXRhLm9yaWdpbi50aXRsZSArICfjgIsnO1xuICB9XG59XG4iLCJpbXBvcnQgQmFyIGZyb20gXCIuLi8uLi9jb21tb24vQmFyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlYWN0IHtcblxuICBwcml2YXRlIHN0YXRpYyBzZWxlY3RvcnMgPSB7XG4gICAgYmFyOiAnLmNzcy1scGl5Y3YnLFxuICAgIGhpZGVCYXI6ICcuY3NzLTFsb3h1aDMnLFxuICAgIGZvbGxvd1VwT2JzZXJ2ZUVsZW1lbnQ6ICcjZ2F0c2J5LWZvY3VzLXdyYXBwZXInLFxuICAgIGV4Y2x1ZGVIZWFkZXI6ICcuY3NzLXhic3FscCdcbiAgfVxuXG4gIHN0YXRpYyByZXBsYWNlKCkge1xuICAgIGlmIChsb2NhdGlvbi5ob3N0ID09PSAncmVhY3Rqcy5vcmcnKSB7XG4gICAgICBCYXIucmVwbGFjZSh7XG4gICAgICAgIGJhclNlbGVjdG9yOiB0aGlzLnNlbGVjdG9ycy5iYXIsIGlzT2JzZXJ2ZUJhcjogdHJ1ZSwgaGlkZUJhclNlbGVjdG9yOiB0aGlzLnNlbGVjdG9ycy5oaWRlQmFyLCBpc09ic2VydmVIaWRlQmFyOiBmYWxzZSwgZm9sbG93VXBPYnNlcnZlU2VsZWN0b3I6IHRoaXMuc2VsZWN0b3JzLmZvbGxvd1VwT2JzZXJ2ZUVsZW1lbnQsIGhpZGVCYXJDYWxsYmFjazogKCkgPT4ge1xuICAgICAgICAgICQodGhpcy5zZWxlY3RvcnMuZXhjbHVkZUhlYWRlcikuY3NzKCdtYXJnaW4tdG9wJywgJzYwcHgnKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBBbmd1bGFyIHtcblxuICBwcml2YXRlIHN0YXRpYyBzZWxlY3RvcnMgPSB7XG4gICAgYmFyOiAnLm1hdC10b29sYmFyLXJvdy5ub3RpZmljYXRpb24tY29udGFpbmVyJyxcbiAgICBkaXNtaXNzTm90aWZpY2F0aW9uQnRuOiAnYnV0dG9uW2FyaWEtbGFiZWw9XCJEaXNtaXNzIG5vdGlmaWNhdGlvblwiXScsXG4gIH1cblxuICBzdGF0aWMgcmVwbGFjZSgpIHtcbiAgICBpZiAobG9jYXRpb24uaG9zdCA9PT0gJ2FuZ3VsYXIuaW8nKSB7XG4gICAgICAvLyDkuI3lrZjlnKjmmK/lkKblhbPpl63pgJrnn6XnmoTmnKzlnLDlrZjlgqjml7ZcbiAgICAgIGlmICghbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2Fpby1ub3RpZmljYXRpb24vd2FyLXVrcmFpbmUnKSkge1xuICAgICAgICAvLyDlpoLmnpzpgJrnn6XkuK3lrZjlnKjlhbPplK7or41cbiAgICAgICAgY29uc3QgJGJhciA9ICQodGhpcy5zZWxlY3RvcnMuYmFyKTtcbiAgICAgICAgaWYgKCRiYXIubGVuZ3RoID4gMCAmJiAkYmFyLnRleHQoKS50b0xvd2VyQ2FzZSgpLmluZGV4T2YoJ3VrcmFpbmUnKSAhPSAtMSkge1xuICAgICAgICAgIC8vIOeCueWHu+WFs+mXremAmuefpVxuICAgICAgICAgICQodGhpcy5zZWxlY3RvcnMuZGlzbWlzc05vdGlmaWNhdGlvbkJ0bilbMF0uY2xpY2soKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufSIsImltcG9ydCBCYXIgZnJvbSBcIi4uLy4uL2NvbW1vbi9CYXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29kZWNlcHQge1xuXG4gIHN0YXRpYyBzZWxlY3RvcnMgPSB7XG4gICAgYmFyOiAnLnN1Yi1iYXIgLm1lc3NhZ2UnLFxuICAgIGhpZGVCYXI6ICcuc3ViLWJhcicsXG4gIH1cblxuICBzdGF0aWMgcmVwbGFjZSgpIHtcbiAgICBpZiAobG9jYXRpb24uaG9zdCA9PT0gJ2NvZGVjZXB0LmlvJykge1xuICAgICAgQmFyLnJlcGxhY2Uoe1xuICAgICAgICBiYXJTZWxlY3RvcjogdGhpcy5zZWxlY3RvcnMuYmFyLCBpc09ic2VydmVCYXI6IGZhbHNlLCBoaWRlQmFyU2VsZWN0b3I6IHRoaXMuc2VsZWN0b3JzLmhpZGVCYXIsIGlzT2JzZXJ2ZUhpZGVCYXI6IGZhbHNlLCBqaW5yaXNoaWNpQ2FsbGJhY2s6ICgpID0+IHtcbiAgICAgICAgICAkKHRoaXMuc2VsZWN0b3JzLmJhcikuY3NzKCdjb2xvcicsICcjZWRmMmY3Jyk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2l0aHViIHtcblxuICBzdGF0aWMgc2VsZWN0b3JzID0ge1xuICAgIG5vdGljZTogJy5ib3JkZXIuanMtbm90aWNlJ1xuICB9XG5cbiAgc3RhdGljIHJlcGxhY2UoKSB7XG4gICAgaWYgKGxvY2F0aW9uLmhyZWYgPT09ICdodHRwczovL2dpdGh1Yi5jb20vJykge1xuICAgICAgY29uc3QgJG5vdGljZSA9ICQodGhpcy5zZWxlY3RvcnMubm90aWNlKTtcbiAgICAgIGlmICgkbm90aWNlLmxlbmd0aCA+IDAgJiYgJG5vdGljZS50ZXh0KCkudG9Mb3dlckNhc2UoKS5pbmRleE9mKCd1a3JhaW5lJykgIT0gLTEpIHtcbiAgICAgICAgJG5vdGljZS5yZW1vdmUoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCBCYXIgZnJvbSBcIi4uLy4uL2NvbW1vbi9CYXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29kZWNlcHQge1xuXG4gIHN0YXRpYyBzZWxlY3RvcnMgPSB7XG4gICAgYmFyOiAnLnRvcC1iYXInLFxuICB9XG5cbiAgc3RhdGljIHJlcGxhY2UoKSB7XG4gICAgaWYgKGxvY2F0aW9uLmhvc3QgPT09ICdkb2NzLm5lc3Rqcy5jb20nKSB7XG4gICAgICBCYXIucmVwbGFjZSh7XG4gICAgICAgIGJhclNlbGVjdG9yOiB0aGlzLnNlbGVjdG9ycy5iYXIsIGlzT2JzZXJ2ZUJhcjogZmFsc2UsIGhpZGVCYXJTZWxlY3RvcjogdGhpcy5zZWxlY3RvcnMuYmFyLCBpc09ic2VydmVIaWRlQmFyOiBmYWxzZSwgcmVwbGFjZUJhckNhbGxiYWNrOiAoKSA9PiB7XG4gICAgICAgICAgJCh0aGlzLnNlbGVjdG9ycy5iYXIpLmNzcygncGFkZGluZycsICcwJyk7XG4gICAgICAgIH0sIGppbnJpc2hpY2lDYWxsYmFjazogKCkgPT4ge1xuICAgICAgICAgICQodGhpcy5zZWxlY3RvcnMuYmFyKS5jc3MoJ2NvbG9yJywgJyNmZmYnKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgQmFyIGZyb20gXCIuLi8uLi9jb21tb24vQmFyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVtYmVyIHtcblxuICBzdGF0aWMgc2VsZWN0b3JzID0ge1xuICAgIGJhcjogJy5jYWxsb3V0LWJhbm5lcicsXG4gIH1cblxuICBzdGF0aWMgcmVwbGFjZSgpIHtcbiAgICBpZiAobG9jYXRpb24uaG9zdCA9PT0gJ2VtYmVyanMuY29tJykge1xuICAgICAgQmFyLnJlcGxhY2Uoe1xuICAgICAgICBiYXJTZWxlY3RvcjogdGhpcy5zZWxlY3RvcnMuYmFyLCBpc09ic2VydmVCYXI6IGZhbHNlLCBoaWRlQmFyU2VsZWN0b3I6IHRoaXMuc2VsZWN0b3JzLmJhciwgaXNPYnNlcnZlSGlkZUJhcjogZmFsc2UsIGppbnJpc2hpY2lDYWxsYmFjazogKCkgPT4ge1xuICAgICAgICAgICQodGhpcy5zZWxlY3RvcnMuYmFyKS5jc3MoJ2NvbG9yJywgJyNmZmYnKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICAkKHRoaXMuc2VsZWN0b3JzLmJhcikuY3NzKHsnYmFja2dyb3VuZENvbG9yJzogJyMxYzFlMjQnLCAncGFkZGluZyc6IDB9KTtcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCBCYXIgZnJvbSBcIi4uLy4uL2NvbW1vbi9CYXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRWxlY3Ryb24ge1xuXG4gIHN0YXRpYyBzZWxlY3RvcnMgPSB7XG4gICAgYmFyOiAnLmFubm91bmNlbWVudC1iYW5uZXInLFxuICB9XG5cbiAgc3RhdGljIHJlcGxhY2UoKSB7XG4gICAgaWYgKGxvY2F0aW9uLmhvc3QgPT09ICd3d3cuZWxlY3Ryb25qcy5vcmcnKSB7XG4gICAgICBCYXIucmVwbGFjZSh7XG4gICAgICAgIGJhclNlbGVjdG9yOiB0aGlzLnNlbGVjdG9ycy5iYXIsIGlzT2JzZXJ2ZUJhcjogZmFsc2UsIGhpZGVCYXJTZWxlY3RvcjogdGhpcy5zZWxlY3RvcnMuYmFyLCBpc09ic2VydmVIaWRlQmFyOiBmYWxzZSwgcmVwbGFjZUJhckNhbGxiYWNrOiAoKSA9PiB7XG4gICAgICAgICAgJChCYXIucmVwbGFjZUJhclNlbGVjdG9yLmJhclVsICsgJzplcSgwKScpLmNzcygnaGVpZ2h0JywgJzI1cHgnKTtcbiAgICAgICAgICAkKEJhci5yZXBsYWNlQmFyU2VsZWN0b3IuYmFyVWwgKyAnOmVxKDEpJykuY3NzKCdoZWlnaHQnLCAnMjBweCcpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgICQodGhpcy5zZWxlY3RvcnMuYmFyKS5jc3MoeydwYWRkaW5nJzogMH0pO1xuICAgIH1cbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQW5ndWxhciB7XG5cbiAgc3RhdGljIHNlbGVjdG9ycyA9IHtcbiAgICBsb2dvOiAnaW1nW3NyYz1cIi9pbWFnZXMvbG9nb3MvamVua2lucy9KZW5raW5zLXN0b3AtdGhlLXdhci5zdmdcIl0nLFxuICAgIHBhZ2VUaXRsZTogJy5wYWdlLXRpdGxlJ1xuICB9XG5cbiAgc3RhdGljIHJlcGxhY2UoKSB7XG4gICAgaWYgKGxvY2F0aW9uLmhvc3QgPT09ICd3d3cuamVua2lucy5pbycpIHtcbiAgICAgIC8vIOabv+aNouWbvuagh1xuICAgICAgJCh0aGlzLnNlbGVjdG9ycy5sb2dvKS5yZXBsYWNlV2l0aChgPGltZyBzcmM9XCIvaW1hZ2VzL2xvZ29zL2plbmtpbnMvSmVua2lucy5zdmdcIj5gKTtcblxuICAgICAgLy8g5Yig6Zmk6YCa55+lXG4gICAgICAkKHRoaXMuc2VsZWN0b3JzLnBhZ2VUaXRsZSkubmV4dEFsbChcInBcIikuZWFjaCgoaSwgZWwpID0+IHtcbiAgICAgICAgY29uc3QgJGVsID0gJChlbCk7XG4gICAgICAgIGlmICgkZWwudGV4dCgpLnRvTG93ZXJDYXNlKCkuaW5kZXhPZigndWtyYWluZScpICE9IC0xKSB7XG4gICAgICAgICAgJGVsLnJlbW92ZSgpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgICQodGhpcy5zZWxlY3RvcnMucGFnZVRpdGxlKS5wYXJlbnQoKS5hcHBlbmQoJzxicj48YnI+PGJyPicpO1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IEJhciBmcm9tIFwiLi4vLi4vY29tbW9uL0JhclwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdmVsdGUge1xuXG4gIHByaXZhdGUgc3RhdGljIHNlbGVjdG9ycyA9IHtcbiAgICBuYXZTcG90OiAnLm5hdi1zcG90JyxcbiAgICBiYXI6ICcudWtyJyxcbiAgICBiYXJIZWlnaHQ6ICc6cm9vdCcsXG4gICAgYmFySGVpZ2h0QXR0ck5hbWU6ICctLXVrci1mb290ZXItaGVpZ2h0JyxcbiAgICBvYnNlcnZpbmc6ICcjbWFpbicsXG4gIH1cblxuICBwcml2YXRlIHN0YXRpYyBzdmVsdGVMb2dvU3R5bGUgPSAnYmFja2dyb3VuZC1pbWFnZTogdXJsKGh0dHBzOi8vc3ZlbHRlLmRldi9zdmVsdGUtbG9nby1ob3Jpem9udGFsLnN2ZyknO1xuXG4gIHN0YXRpYyByZXBsYWNlKCkge1xuICAgIGlmIChsb2NhdGlvbi5ob3N0ID09PSAnc3ZlbHRlLmRldicpIHtcbiAgICAgIGNvbnN0ICRuYXZTcG90ID0gJCh0aGlzLnNlbGVjdG9ycy5uYXZTcG90KTtcbiAgICAgIGxldCBpID0gMDtcbiAgICAgIC8vIOebkeWQrOadoeW5heWPmOWMlu+8jOWPmOWMluWQjuWGjeasoeaJp+ihjFxuICAgICAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcigoKSA9PiB7XG4gICAgICAgIGlmICgkbmF2U3BvdC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgLy8g5pu/5o2iIExvZ29cbiAgICAgICAgICAkbmF2U3BvdC5hdHRyKCdzdHlsZScsIHRoaXMuc3ZlbHRlTG9nb1N0eWxlKTtcbiAgICAgICAgICAvLyDmm7/mjaLkuKTmrKHlkI7nu5PmnZ/nm5HlkKxcbiAgICAgICAgICBpZiAoaSA+PSAxKSB7XG4gICAgICAgICAgICBvYnNlcnZlci5kaXNjb25uZWN0KCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGkrKztcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBvYnNlcnZlci5vYnNlcnZlKCQodGhpcy5zZWxlY3RvcnMub2JzZXJ2aW5nKVswXSwge2NoaWxkTGlzdDogdHJ1ZX0pO1xuXG4gICAgICAvLyDlupXpg6jmqKrluYVcbiAgICAgIEJhci5yZXBsYWNlKHtcbiAgICAgICAgYmFyU2VsZWN0b3I6IHRoaXMuc2VsZWN0b3JzLmJhciwgaXNPYnNlcnZlQmFyOiB0cnVlLCBoaWRlQmFyU2VsZWN0b3I6IHRoaXMuc2VsZWN0b3JzLmJhciwgaXNPYnNlcnZlSGlkZUJhcjogdHJ1ZSwgcmVwbGFjZUJhckNhbGxiYWNrOiAoKSA9PiB7XG4gICAgICAgICAgJCh0aGlzLnNlbGVjdG9ycy5iYXIpLmNzcyh7J2JhY2tncm91bmRDb2xvcic6ICcjMWMxZTI0JywgJ3BhZGRpbmdUb3AnOiAnMjBweCd9KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBTdmVsdGVNYXRlcmlhbFVpIHtcblxuICBzdGF0aWMgc2VsZWN0b3JzID0ge1xuICAgIGJhcjogJy51a3JhaW5lJyxcbiAgfVxuXG4gIHN0YXRpYyByZXBsYWNlKCkge1xuICAgIGlmIChsb2NhdGlvbi5ob3N0ID09PSAnc3ZlbHRlbWF0ZXJpYWx1aS5jb20nKSB7XG4gICAgICAkKHRoaXMuc2VsZWN0b3JzLmJhcikuYXR0cignY2xhc3MnLCAnJyk7XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgQmFyIGZyb20gXCIuLi8uLi9jb21tb24vQmFyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN5bmN0aGluZyB7XG5cbiAgc3RhdGljIHNlbGVjdG9ycyA9IHtcbiAgICBiYXI6ICcuYWxlcnQnLFxuICB9XG5cbiAgc3RhdGljIHJlcGxhY2UoKSB7XG4gICAgaWYgKGxvY2F0aW9uLmhvc3QgPT09ICdzeW5jdGhpbmcubmV0Jykge1xuICAgICAgQmFyLnJlcGxhY2Uoe1xuICAgICAgICBiYXJTZWxlY3RvcjogdGhpcy5zZWxlY3RvcnMuYmFyLCBpc09ic2VydmVCYXI6IGZhbHNlLCBoaWRlQmFyU2VsZWN0b3I6IHRoaXMuc2VsZWN0b3JzLmJhciwgaXNPYnNlcnZlSGlkZUJhcjogZmFsc2UsIHJlcGxhY2VCYXJDYWxsYmFjazogKCkgPT4ge1xuICAgICAgICAgICQodGhpcy5zZWxlY3RvcnMuYmFyKS5jc3MoJ3RleHRBbGlnbicsICdjZW50ZXInKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG59XG4iLCIvLyA9PVVzZXJTY3JpcHQ9PVxuLy8gQG5hbWUgICAgICAgICDmioDmnK/ov5znprvmlL/msrtcbi8vIEBuYW1lc3BhY2UgICAgaHR0cDovL3RhbXBlcm1vbmtleS5uZXQvXG4vLyBAdmVyc2lvbiAgICAgIDEuMy4xXG4vLyBAZGVzY3JpcHRpb24gIOenu+mZpOaUv+ayu+ebuOWFs+adoeW5heaIluabv+aNouS4uuekvuS8muS4u+S5ieaguOW/g+S7t+WAvOinguOAgeS7iuaXpeivl+ivje+8jOabv+aNouaUv+ayu+ebuOWFsyBMb2dvIOS4uuWOn+eJiCBMb2dv77yM5Y676Zmk5pS/5rK755u45YWz6YCa55+l77yM6K6p5oqA5pyv6L+c56a75pS/5rK744CCXG4vLyBAYXV0aG9yICAgICAgIGR1YW5sdWFuXG4vLyBAY29weXJpZ2h0ICAgIDIwMjIsIGR1YW5sdWFuIChodHRwczovL2dpdGh1Yi5jb20vZHVhbmx1YW4pXG4vLyBAbGljZW5zZSAgICAgIEFwYWNoZS0yLjA7IGh0dHBzOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjAudHh0XG4vLyBAbWF0Y2ggICAgICAgICo6Ly9yZWFjdGpzLm9yZy8qXG4vLyBAbWF0Y2ggICAgICAgICo6Ly9hbmd1bGFyLmlvLypcbi8vIEBtYXRjaCAgICAgICAgKjovL2p1bml0Lm9yZy8qXG4vLyBAbWF0Y2ggICAgICAgICo6Ly9jb2RlY2VwdC5pby8qXG4vLyBAbWF0Y2ggICAgICAgICo6Ly9naXRodWIuY29tLypcbi8vIEBtYXRjaCAgICAgICAgKjovL2RvY3MubmVzdGpzLmNvbS8qXG4vLyBAbWF0Y2ggICAgICAgICo6Ly9lbWJlcmpzLmNvbS8qXG4vLyBAbWF0Y2ggICAgICAgICo6Ly93d3cuZWxlY3Ryb25qcy5vcmcvKlxuLy8gQG1hdGNoICAgICAgICAqOi8vd3d3LmplbmtpbnMuaW8vKlxuLy8gQG1hdGNoICAgICAgICAqOi8vc3ZlbHRlLmRldi8qXG4vLyBAbWF0Y2ggICAgICAgICo6Ly9zdmVsdGVtYXRlcmlhbHVpLmNvbS8qXG4vLyBAbWF0Y2ggICAgICAgICo6Ly9zeW5jdGhpbmcubmV0Lypcbi8vIEBtYXRjaCAgICAgICAgKjovL2dyZWFzeWZvcmsub3JnLypcbi8vIEByZXF1aXJlICAgICAgaHR0cHM6Ly9jZG4uYm9vdGNkbi5uZXQvYWpheC9saWJzL2pxdWVyeS8zLjYuMC9qcXVlcnkuc2xpbS5taW4uanNcbi8vIEBncmFudCAgICAgICAgR01fZ2V0VmFsdWVcbi8vIEBncmFudCAgICAgICAgR01fc2V0VmFsdWVcbi8vIEBncmFudCAgICAgICAgR01fcmVnaXN0ZXJNZW51Q29tbWFuZFxuLy8gQGdyYW50ICAgICAgICBHTV91bnJlZ2lzdGVyTWVudUNvbW1hbmRcbi8vIEBncmFudCAgICAgICAgR01feG1saHR0cFJlcXVlc3Rcbi8vID09L1VzZXJTY3JpcHQ9PVxuXG4vLyA9PU9wZW5Vc2VySlM9PVxuLy8gQGF1dGhvciBkdWFubHVhblxuLy8gPT0vT3BlblVzZXJKUz09XG5cbmltcG9ydCBKdW5pdCBmcm9tIFwiLi93ZWJzaXRlcy9qdW5pdC9KdW5pdFwiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCIuL3dlYnNpdGVzL3JlYWN0L1JlYWN0XCI7XG5pbXBvcnQgQW5ndWxhciBmcm9tIFwiLi93ZWJzaXRlcy9hbmd1bGFyL0FuZ3VsYXJcIjtcbmltcG9ydCBDb2RlY2VwdCBmcm9tIFwiLi93ZWJzaXRlcy9jb2RlY2VwdC9Db2RlY2VwdFwiO1xuaW1wb3J0IEdpdGh1YiBmcm9tIFwiLi93ZWJzaXRlcy9naXRodWIvR2l0aHViXCI7XG5pbXBvcnQgTmVzdCBmcm9tIFwiLi93ZWJzaXRlcy9uZXN0L05lc3RcIjtcbmltcG9ydCBFbWJlciBmcm9tIFwiLi93ZWJzaXRlcy9lbWJlci9FbWJlclwiO1xuaW1wb3J0IEVsZWN0cm9uIGZyb20gXCIuL3dlYnNpdGVzL2VsZWN0cm9uL0VsZWN0cm9uXCI7XG5pbXBvcnQgSmVua2lucyBmcm9tIFwiLi93ZWJzaXRlcy9qZW5raW5zL0plbmtpbnNcIjtcbmltcG9ydCBTdmVsdGUgZnJvbSBcIi4vd2Vic2l0ZXMvc3ZlbHRlL1N2ZWx0ZVwiO1xuaW1wb3J0IE9wdGlvbnMgZnJvbSBcIi4vT3B0aW9uc1wiO1xuaW1wb3J0IFN2ZWx0ZU1hdGVyaWFsVWkgZnJvbSBcIi4vd2Vic2l0ZXMvc3ZlbHRlbWF0ZXJpYWx1aS9TdmVsdGVNYXRlcmlhbFVpXCI7XG5pbXBvcnQgU3luY3RoaW5nIGZyb20gXCIuL3dlYnNpdGVzL3N5bmN0aGluZy9TeW5jdGhpbmdcIjtcblxuKCgpID0+IHtcbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIE9wdGlvbnMucmVnaXN0ZXJBbGwoKTtcbiAgT3B0aW9ucy5sb2FkSW5HcmVhc3lmb3JrKCk7XG5cbiAgUmVhY3QucmVwbGFjZSgpO1xuICBBbmd1bGFyLnJlcGxhY2UoKTtcbiAgSnVuaXQucmVwbGFjZSgpO1xuICBDb2RlY2VwdC5yZXBsYWNlKCk7XG4gIEdpdGh1Yi5yZXBsYWNlKCk7XG4gIE5lc3QucmVwbGFjZSgpO1xuICBFbWJlci5yZXBsYWNlKCk7XG4gIEVsZWN0cm9uLnJlcGxhY2UoKTtcbiAgSmVua2lucy5yZXBsYWNlKCk7XG4gIFN2ZWx0ZS5yZXBsYWNlKCk7XG4gIFN2ZWx0ZU1hdGVyaWFsVWkucmVwbGFjZSgpO1xuICBTeW5jdGhpbmcucmVwbGFjZSgpO1xufSkoKTtcbiIsIi8qKlxuICog5a2Y5YKoXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0b3JlIHtcblxuICAvKipcbiAgICog6I635Y+WXG4gICAqIEBwYXJhbSBrZXkg6ZSuXG4gICAqL1xuICBzdGF0aWMgZ2V0KGtleTogc3RyaW5nKTogYW55IHtcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgcmV0dXJuIEdNX2dldFZhbHVlKGtleSk7XG4gIH1cblxuICAvKipcbiAgICog6K6+572uXG4gICAqIEBwYXJhbSBrZXkg6ZSuXG4gICAqIEBwYXJhbSB2YWx1ZSDlgLxcbiAgICovXG4gIHN0YXRpYyBzZXQoa2V5OiBzdHJpbmcsIHZhbHVlOiBhbnkpIHtcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgR01fc2V0VmFsdWUoa2V5LCB2YWx1ZSk7XG4gIH1cbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fKDMwNik7XG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDM0NSk7XG4iLCIiXSwibmFtZXMiOlsiTWVudUNtZCIsIm5hbWUiLCJmbiIsIkdNX3JlZ2lzdGVyTWVudUNvbW1hbmQiLCJtZW51Q21kSWQiLCJHTV91bnJlZ2lzdGVyTWVudUNvbW1hbmQiLCJTdG9yZSIsIkJhc2VPcHRpb25zIiwic2NyaXB0SWQiLCJvcHRpb24iLCJ2YWwiLCJ2YWx1ZSIsInZhbElzQm9vbCIsImN1cnJlbnRNZW51Q21kSWQiLCJyZWdpc3RlciIsImxhYmVsIiwic2V0IiwiSlNPTiIsInN0cmluZ2lmeSIsInVucmVnaXN0ZXIiLCJyZWdpc3RlckJvb2xPcHRpb24iLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInJlbG9hZCIsIm9wZW4iLCJvcHRpb25zIiwic3RvcmVPcHRpb24iLCJwYXJzZSIsImdldCIsInZlcnNpb24iLCJsb2FkT3B0aW9uQ29udGVudEZuIiwiaG9zdCIsImhyZWYiLCJpbmRleE9mIiwic2VsZWN0b3IiLCJzY3JpcHRMaW5rcyIsInNjcmlwdE9wdGlvbnMiLCJzY3JpcHRDb250ZW50IiwiJGJvZHkiLCIkIiwiJHNjcmlwdExpbmtzIiwiJHNjcmlwdENvbnRlbnQiLCJjaGlsZHJlbiIsImFmdGVyIiwib24iLCIkc2NyaXB0T3B0aW9ucyIsIiRjdXJyZW50TGkiLCJodG1sIiwidGV4dCIsInJlbW92ZUNsYXNzIiwicGFyZW50IiwiYWRkQ2xhc3MiLCJPcHRpb25zIiwiU0NSSVBUX0lEIiwib3B0aW9uTmFtZSIsIm9wdGlvblZhbCIsIktleXMiLCJyZW1vdmVCYXIiLCJqaW5yaXNoaWNpIiwib3B0aW9uU2VsZWN0b3IiLCJyZW1vdmVCYXJPcHRpb24iLCJqaW5yaXNoaWNpT3B0aW9uIiwidG9rZW4iLCJKdW5pdCIsInNlbGVjdG9ycyIsImp1bml0QWJvdXQiLCJwcmV2QWxsIiwicmVtb3ZlIiwianVuaXRMb2dvIiwiYXR0ciIsImp1bml0TG9nb1VybCIsImp1bml0RmF2aWNvbiIsIkh0dHBEYXRhVHlwZSIsIlJlcXVlc3QiLCJzeW5jaHJvbm91cyIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwiR01feG1saHR0cFJlcXVlc3QiLCJvbmxvYWQiLCJyZXNwb25zZSIsImRhdGFUeXBlIiwicmVzcG9uc2VUZXh0Iiwib25lcnJvciIsImVycm9yIiwib25sb2FkMSIsImRldGFpbHMiLCJCYXIiLCJiYXJTZWxlY3RvciIsIm1hdGNoIiwiaGlkZUJhclNlbGVjdG9yIiwiaGlkZSIsImlzT2JzZXJ2ZUhpZGVCYXIiLCJpIiwib2JzZXJ2ZXIiLCJNdXRhdGlvbk9ic2VydmVyIiwiZGlzY29ubmVjdCIsIm9ic2VydmUiLCJjaGlsZExpc3QiLCJzdWJ0cmVlIiwiaGlkZUJhckNhbGxiYWNrIiwic3RvcmVKaW5yaXNoaWNpVmFsIiwiZ2V0SmlucmlzaGljaSIsInRoZW4iLCJkYXRhIiwiamlucmlzaGljaUNvbnRlbnQiLCJyZXBsYWNlT2JzZXJ2ZXIiLCJyZXBsYWNlQmFyIiwicmVwbGFjZUJhckNhbGxiYWNrIiwiamlucmlzaGljaUNhbGxiYWNrIiwiaXNPYnNlcnZlQmFyIiwiZm9sbG93VXBPYnNlcnZlU2VsZWN0b3IiLCJyZXBsYWNlIiwidHh0IiwiY3NzIiwiJGJhciIsInJlcGxhY2VCYXJTZWxlY3RvciIsImJhciIsImxlbmd0aCIsImVxIiwiYmFyVWxTZWxlY3RvciIsImJhclVsIiwidXJsIiwic3RhdHVzIiwiY29uc29sZSIsImNvbnRlbnQiLCJvcmlnaW4iLCJhdXRob3IiLCJ0aXRsZSIsIlJlYWN0IiwiaGlkZUJhciIsImZvbGxvd1VwT2JzZXJ2ZUVsZW1lbnQiLCJleGNsdWRlSGVhZGVyIiwiQW5ndWxhciIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJ0b0xvd2VyQ2FzZSIsImRpc21pc3NOb3RpZmljYXRpb25CdG4iLCJjbGljayIsIkNvZGVjZXB0IiwiR2l0aHViIiwiJG5vdGljZSIsIm5vdGljZSIsIkVtYmVyIiwiRWxlY3Ryb24iLCJsb2dvIiwicmVwbGFjZVdpdGgiLCJwYWdlVGl0bGUiLCJuZXh0QWxsIiwiZWFjaCIsImVsIiwiJGVsIiwiYXBwZW5kIiwiU3ZlbHRlIiwiJG5hdlNwb3QiLCJuYXZTcG90Iiwic3ZlbHRlTG9nb1N0eWxlIiwib2JzZXJ2aW5nIiwiYmFySGVpZ2h0IiwiYmFySGVpZ2h0QXR0ck5hbWUiLCJTdmVsdGVNYXRlcmlhbFVpIiwiU3luY3RoaW5nIiwiTmVzdCIsIkplbmtpbnMiLCJyZWdpc3RlckFsbCIsImxvYWRJbkdyZWFzeWZvcmsiLCJrZXkiLCJHTV9nZXRWYWx1ZSIsIkdNX3NldFZhbHVlIl0sInNvdXJjZVJvb3QiOiIifQ==