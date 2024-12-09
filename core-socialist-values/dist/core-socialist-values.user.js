/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 708:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ Options)
});

// EXTERNAL MODULE: ./utils/src/gm/Store.ts
var Store = __webpack_require__(915);
;// CONCATENATED MODULE: ./utils/src/gm/MenuCmd.ts
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/**
 * 选项菜单
 */
var MenuCmd = /*#__PURE__*/function () {
  function MenuCmd() {
    _classCallCheck(this, MenuCmd);
  }
  return _createClass(MenuCmd, null, [{
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
}();

;// CONCATENATED MODULE: ./utils/src/CommonOptions.ts
function CommonOptions_typeof(o) { "@babel/helpers - typeof"; return CommonOptions_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, CommonOptions_typeof(o); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function CommonOptions_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function CommonOptions_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, CommonOptions_toPropertyKey(descriptor.key), descriptor); } }
function CommonOptions_createClass(Constructor, protoProps, staticProps) { if (protoProps) CommonOptions_defineProperties(Constructor.prototype, protoProps); if (staticProps) CommonOptions_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function CommonOptions_toPropertyKey(t) { var i = CommonOptions_toPrimitive(t, "string"); return "symbol" == CommonOptions_typeof(i) ? i : i + ""; }
function CommonOptions_toPrimitive(t, r) { if ("object" != CommonOptions_typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != CommonOptions_typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }



/**
 * 选项菜单
 */
var CommonOptions = /*#__PURE__*/function () {
  function CommonOptions() {
    CommonOptions_classCallCheck(this, CommonOptions);
  }
  return CommonOptions_createClass(CommonOptions, null, [{
    key: "registerBoolOption",
    value:
    // /**
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
      }
      // 注册选项
      var currentMenuCmdId = MenuCmd.register((val ? '☑️ ' : '🔲 ') + option.label, function () {
        // 点击值取反
        option.value = !option.value;
        Store/* default */.A.set(option.name, JSON.stringify(option));

        // 取消注册
        MenuCmd.unregister(currentMenuCmdId);
        // 重新注册
        _this.registerBoolOption(option);
        // 刷新页面
        window.location.reload();
      });

      // 保存选项 ID
      option.menuCmdId = currentMenuCmdId;
      Store/* default */.A.set(option.name, JSON.stringify(option));
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

          var storeOption = Store/* default */.A.get(option.name) ? JSON.parse(Store/* default */.A.get(option.name)) : null;
          // 如果选项不存在 || 版本不一致 时重置选项
          if (storeOption === null || !storeOption['version'] || storeOption['version'] < option.version) {
            Store/* default */.A.set(option.name, JSON.stringify(option));
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
        $scriptContent = $(selector.scriptContent);

      // 添加脚本设置的选项卡
      $scriptLinks.children('li:eq(0)').after("<li><a href=\"javascript:;\" id=\"script-options\">\u811A\u672C\u8BBE\u7F6E</a></li>");
      // 脚本设置选项点击事件
      $body.on('click', selector.scriptOptions, function () {
        // 移除已选中选项的样式
        var $currentLi = $scriptLinks.children('li.current');
        $currentLi.html("<a href=\"".concat(location.href, "\">").concat($currentLi.text(), "</a>"));
        $currentLi.removeClass('current');

        // 添加选中选项的样式
        var $scriptOptions = $(selector.scriptOptions);
        $scriptOptions.parent().addClass('current');
        loadOptionContentFn($scriptContent);
      });
    }
  }]);
}();

;// CONCATENATED MODULE: ./core-socialist-values/src/Options.ts
var _Options;
function Options_typeof(o) { "@babel/helpers - typeof"; return Options_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, Options_typeof(o); }
function Options_createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = Options_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function Options_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return Options_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Options_arrayLikeToArray(o, minLen); }
function Options_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function Options_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function Options_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, Options_toPropertyKey(descriptor.key), descriptor); } }
function Options_createClass(Constructor, protoProps, staticProps) { if (protoProps) Options_defineProperties(Constructor.prototype, protoProps); if (staticProps) Options_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = Options_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function Options_toPropertyKey(t) { var i = Options_toPrimitive(t, "string"); return "symbol" == Options_typeof(i) ? i : i + ""; }
function Options_toPrimitive(t, r) { if ("object" != Options_typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != Options_typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }



var Options = /*#__PURE__*/function () {
  function Options() {
    Options_classCallCheck(this, Options);
  }
  return Options_createClass(Options, null, [{
    key: "registerBoolOption",
    value:
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
            var storeOption = JSON.parse(Store/* default */.A.get(option.name)),
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
        var $body = $(document.body);
        // region 添加脚本设置的事件
        // 是否隐藏条幅
        var optionSelector = '#script-options-' + _this.Keys.removeBar;
        $body.on('change', optionSelector, function () {
          var removeBarOption = JSON.parse(Store/* default */.A.get(_this.Keys.removeBar));
          removeBarOption.value = !removeBarOption.value;
          // 重新注册菜单
          MenuCmd.unregister(removeBarOption.menuCmdId);
          _this.registerBoolOption(removeBarOption);
        });

        // 启用今日诗词
        optionSelector = '#script-options-' + _this.Keys.jinrishici + '-enabled';
        $body.on('change', optionSelector, function () {
          var jinrishiciOption = JSON.parse(Store/* default */.A.get(_this.Keys.jinrishici));
          jinrishiciOption.value = !jinrishiciOption.value;
          // 重新注册菜单
          MenuCmd.unregister(jinrishiciOption.menuCmdId);
          _this.registerBoolOption(jinrishiciOption);
        });
        // endregion
      });
    }
  }]);
}();
_Options = Options;
_defineProperty(Options, "SCRIPT_ID", 440854);
/**
 * 选项 Key
 */
_defineProperty(Options, "Keys", {
  removeBar: 'removeBar',
  jinrishici: 'jinrishici'
});
/**
 * 选项
 * @private
 */
_defineProperty(Options, "options", [{
  label: '隐藏条幅',
  name: _Options.Keys.removeBar,
  version: 1,
  value: false,
  menuCmdId: null
}, {
  label: '今日诗词',
  name: _Options.Keys.jinrishici,
  version: 1,
  value: false,
  menuCmdId: null,
  token: ''
}]);


/***/ }),

/***/ 186:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {


;// CONCATENATED MODULE: ./core-socialist-values/src/websites/junit/Junit.ts
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var Junit = /*#__PURE__*/function () {
  function Junit() {
    _classCallCheck(this, Junit);
  }
  return _createClass(Junit, null, [{
    key: "replace",
    value: function replace() {
      if (location.href === 'https://junit.org/junit5/') {
        $(this.selectors.junitAbout).prevAll().remove();
        $(this.selectors.junitLogo).attr('src', this.junitLogoUrl);
        $(this.selectors.junitFavicon).attr('href', this.junitLogoUrl);
      }
    }
  }]);
}();
_defineProperty(Junit, "selectors", {
  junitAbout: '#about',
  junitLogo: 'img[src="/junit5/assets/img/junit5-logo.png"]',
  junitFavicon: 'link[rel="icon"]'
});
_defineProperty(Junit, "junitLogoUrl", 'https://raw.kkgithub.com/duanluan/tampermonkey-scripts/main/core-socialist-values/src/websites/junit/imgs/junit5-logo.png');

// EXTERNAL MODULE: ./utils/src/gm/Store.ts
var Store = __webpack_require__(915);
;// CONCATENATED MODULE: ./utils/src/gm/enum/HttpDataType.ts
var HttpDataType = /*#__PURE__*/function (HttpDataType) {
  HttpDataType["JSON"] = "JSON";
  return HttpDataType;
}({});
;// CONCATENATED MODULE: ./utils/src/gm/Request.ts
function Request_typeof(o) { "@babel/helpers - typeof"; return Request_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, Request_typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == Request_typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(Request_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { Request_defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function Request_defineProperty(obj, key, value) { key = Request_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function Request_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function Request_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, Request_toPropertyKey(descriptor.key), descriptor); } }
function Request_createClass(Constructor, protoProps, staticProps) { if (protoProps) Request_defineProperties(Constructor.prototype, protoProps); if (staticProps) Request_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function Request_toPropertyKey(t) { var i = Request_toPrimitive(t, "string"); return "symbol" == Request_typeof(i) ? i : i + ""; }
function Request_toPrimitive(t, r) { if ("object" != Request_typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != Request_typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

var Request = /*#__PURE__*/function () {
  function Request() {
    Request_classCallCheck(this, Request);
  }
  return Request_createClass(Request, null, [{
    key: "get",
    value: function () {
      var _get = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(option) {
        var onload1;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              option['method'] = 'GET';

              // 同步时返回 Promise
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
        }, _callee);
      }));
      function get(_x) {
        return _get.apply(this, arguments);
      }
      return get;
    }()
  }]);
}();

// EXTERNAL MODULE: ./core-socialist-values/src/Options.ts + 2 modules
var Options = __webpack_require__(708);
;// CONCATENATED MODULE: ./core-socialist-values/src/common/Bar.ts
function Bar_typeof(o) { "@babel/helpers - typeof"; return Bar_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, Bar_typeof(o); }
function Bar_regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ Bar_regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == Bar_typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(Bar_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function Bar_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function Bar_asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { Bar_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { Bar_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function Bar_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function Bar_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, Bar_toPropertyKey(descriptor.key), descriptor); } }
function Bar_createClass(Constructor, protoProps, staticProps) { if (protoProps) Bar_defineProperties(Constructor.prototype, protoProps); if (staticProps) Bar_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function Bar_defineProperty(obj, key, value) { key = Bar_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function Bar_toPropertyKey(t) { var i = Bar_toPrimitive(t, "string"); return "symbol" == Bar_typeof(i) ? i : i + ""; }
function Bar_toPrimitive(t, r) { if ("object" != Bar_typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != Bar_typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }




var Bar = /*#__PURE__*/function () {
  function Bar() {
    Bar_classCallCheck(this, Bar);
  }
  return Bar_createClass(Bar, null, [{
    key: "replace",
    value:
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
      }
      // 一般隐藏条幅和替换条幅相同
      if (!options.hideBarSelector) {
        options.hideBarSelector = options.barSelector;
      }
      if (!options.isObserveHideBar) {
        options.isObserveHideBar = options.isObserveBar;
      }

      // 隐藏横幅设置勾选
      if (JSON.parse(Store/* default */.A.get(Options/* default */.A.Keys.removeBar)).value) {
        this.hideBar(options);
        return;
      }
      this.storeJinrishiciVal = JSON.parse(Store/* default */.A.get(Options/* default */.A.Keys.jinrishici)).value;
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
     * 隐藏条幅
     * @param options
     * @private
     */
  }, {
    key: "hideBar",
    value: function hideBar(options) {
      // 隐藏横幅
      $(options.hideBarSelector).hide();
      if (options.isObserveHideBar) {
        var i = 0;
        // 隐藏条幅首次加载：监听条幅变化，变化后再次执行
        var observer = new MutationObserver(function () {
          $(options.hideBarSelector).hide();
          // 替换两次后结束监听
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
      var i = 0;
      // 条幅首次加载：监听条幅变化，变化后再次执行
      var observer = new MutationObserver(function () {
        _this2.replaceBar(options.barSelector, options.replaceBarCallback, options.jinrishiciCallback);
        // 替换两次后结束监听
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

      // 替换为今日诗词
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

      // 替换为社会主义核心价值观
      $(selector).css({
        'minHeight': '40px'
      });
      $(selector).html("\n        <div class=\"csv_bar\">\n          <ul class='csv_bar_ul'><li>\u5BCC\u5F3A</li><li>\u6C11\u4E3B</li><li>\u6587\u660E</li><li>\u548C\u8C10</li><li>\u81EA\u7531</li><li>\u5E73\u7B49</li><li>\u516C\u6B63</li><li>\u6CD5\u6CBB</li><li>\u7231\u56FD</li><li>\u656C\u4E1A</li><li>\u8BDA\u4FE1</li><li>\u53CB\u5584</li></ul><br>\n          <ul class='csv_bar_ul'><li>Prosperity</li><li>Democracy</li><li>Civility</li><li>Harmony</li><li>Freedom</li><li>Equality</li><li>Justice</li><li>Rule of law</li><li>Patriotism</li><li>Dedication</li><li>Integrity</li><li>Friendship</li>\n          </ul>\n        </div>");
      // 避免出现多个导致样式添加失败
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
    value: (function () {
      var _getJinrishici = Bar_asyncToGenerator( /*#__PURE__*/Bar_regeneratorRuntime().mark(function _callee() {
        var jinrishiciOption, response;
        return Bar_regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              jinrishiciOption = JSON.parse(Store/* default */.A.get(Options/* default */.A.Keys.jinrishici));
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
              }
              // // 存储 Token
              // if (jinrishiciOption.token !== response.data.token) {
              //   jinrishiciOption.token = response.data.token;
              //   Store.set(Options.Keys.jinrishici, JSON.stringify(jinrishiciOption));
              // }
              return _context.abrupt("return", response.data.content + ' —— ' + response.data.origin.author + '《' + response.data.origin.title + '》');
            case 8:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }));
      function getJinrishici() {
        return _getJinrishici.apply(this, arguments);
      }
      return getJinrishici;
    }())
  }]);
}();
/**
 * 替换条幅的选择器
 */
Bar_defineProperty(Bar, "replaceBarSelector", {
  bar: '.csv_bar',
  barUl: '.csv_bar .csv_bar_ul'
});
/**
 * 替换后的条幅去除空格换行后的文本
 * @private
 */
Bar_defineProperty(Bar, "txt", '富强民主文明和谐自由平等公正法治爱国敬业诚信友善ProsperityDemocracyCivilityHarmonyFreedomEqualityJusticeRuleoflawPatriotismDedicationIntegrityFriendship');
/**
 * 是否启用今日诗词
 * @private
 */
Bar_defineProperty(Bar, "storeJinrishiciVal", false);
/**
 * 今日诗词内容
 * @private
 */
Bar_defineProperty(Bar, "jinrishiciContent", '');

;// CONCATENATED MODULE: ./core-socialist-values/src/websites/codecept/Codecept.ts
function Codecept_typeof(o) { "@babel/helpers - typeof"; return Codecept_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, Codecept_typeof(o); }
function Codecept_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function Codecept_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, Codecept_toPropertyKey(descriptor.key), descriptor); } }
function Codecept_createClass(Constructor, protoProps, staticProps) { if (protoProps) Codecept_defineProperties(Constructor.prototype, protoProps); if (staticProps) Codecept_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function Codecept_defineProperty(obj, key, value) { key = Codecept_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function Codecept_toPropertyKey(t) { var i = Codecept_toPrimitive(t, "string"); return "symbol" == Codecept_typeof(i) ? i : i + ""; }
function Codecept_toPrimitive(t, r) { if ("object" != Codecept_typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != Codecept_typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

var Codecept = /*#__PURE__*/function () {
  function Codecept() {
    Codecept_classCallCheck(this, Codecept);
  }
  return Codecept_createClass(Codecept, null, [{
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
}();
Codecept_defineProperty(Codecept, "selectors", {
  bar: '.sub-bar .message',
  hideBar: '.sub-bar'
});

;// CONCATENATED MODULE: ./core-socialist-values/src/websites/github/Github.ts
function Github_typeof(o) { "@babel/helpers - typeof"; return Github_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, Github_typeof(o); }
function Github_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function Github_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, Github_toPropertyKey(descriptor.key), descriptor); } }
function Github_createClass(Constructor, protoProps, staticProps) { if (protoProps) Github_defineProperties(Constructor.prototype, protoProps); if (staticProps) Github_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function Github_defineProperty(obj, key, value) { key = Github_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function Github_toPropertyKey(t) { var i = Github_toPrimitive(t, "string"); return "symbol" == Github_typeof(i) ? i : i + ""; }
function Github_toPrimitive(t, r) { if ("object" != Github_typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != Github_typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var Github = /*#__PURE__*/function () {
  function Github() {
    Github_classCallCheck(this, Github);
  }
  return Github_createClass(Github, null, [{
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
}();
Github_defineProperty(Github, "selectors", {
  notice: '.border.js-notice'
});

;// CONCATENATED MODULE: ./core-socialist-values/src/websites/nest/Nest.ts
function Nest_typeof(o) { "@babel/helpers - typeof"; return Nest_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, Nest_typeof(o); }
function Nest_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function Nest_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, Nest_toPropertyKey(descriptor.key), descriptor); } }
function Nest_createClass(Constructor, protoProps, staticProps) { if (protoProps) Nest_defineProperties(Constructor.prototype, protoProps); if (staticProps) Nest_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function Nest_defineProperty(obj, key, value) { key = Nest_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function Nest_toPropertyKey(t) { var i = Nest_toPrimitive(t, "string"); return "symbol" == Nest_typeof(i) ? i : i + ""; }
function Nest_toPrimitive(t, r) { if ("object" != Nest_typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != Nest_typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

var Nest_Codecept = /*#__PURE__*/function () {
  function Codecept() {
    Nest_classCallCheck(this, Codecept);
  }
  return Nest_createClass(Codecept, null, [{
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
}();
Nest_defineProperty(Nest_Codecept, "selectors", {
  bar: '.top-bar'
});

;// CONCATENATED MODULE: ./core-socialist-values/src/websites/ember/Ember.ts
function Ember_typeof(o) { "@babel/helpers - typeof"; return Ember_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, Ember_typeof(o); }
function Ember_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function Ember_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, Ember_toPropertyKey(descriptor.key), descriptor); } }
function Ember_createClass(Constructor, protoProps, staticProps) { if (protoProps) Ember_defineProperties(Constructor.prototype, protoProps); if (staticProps) Ember_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function Ember_defineProperty(obj, key, value) { key = Ember_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function Ember_toPropertyKey(t) { var i = Ember_toPrimitive(t, "string"); return "symbol" == Ember_typeof(i) ? i : i + ""; }
function Ember_toPrimitive(t, r) { if ("object" != Ember_typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != Ember_typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

var Ember = /*#__PURE__*/function () {
  function Ember() {
    Ember_classCallCheck(this, Ember);
  }
  return Ember_createClass(Ember, null, [{
    key: "replace",
    value: function replace() {
      var _this = this;
      if (location.host === 'emberjs.com') {
        Bar.replace({
          barSelector: this.selectors.bar,
          isObserveBar: false,
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
}();
Ember_defineProperty(Ember, "selectors", {
  bar: '.callout-banner'
});

;// CONCATENATED MODULE: ./core-socialist-values/src/websites/jenkins/Jenkins.ts
function Jenkins_typeof(o) { "@babel/helpers - typeof"; return Jenkins_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, Jenkins_typeof(o); }
function Jenkins_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function Jenkins_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, Jenkins_toPropertyKey(descriptor.key), descriptor); } }
function Jenkins_createClass(Constructor, protoProps, staticProps) { if (protoProps) Jenkins_defineProperties(Constructor.prototype, protoProps); if (staticProps) Jenkins_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function Jenkins_defineProperty(obj, key, value) { key = Jenkins_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function Jenkins_toPropertyKey(t) { var i = Jenkins_toPrimitive(t, "string"); return "symbol" == Jenkins_typeof(i) ? i : i + ""; }
function Jenkins_toPrimitive(t, r) { if ("object" != Jenkins_typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != Jenkins_typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var Angular = /*#__PURE__*/function () {
  function Angular() {
    Jenkins_classCallCheck(this, Angular);
  }
  return Jenkins_createClass(Angular, null, [{
    key: "replace",
    value: function replace() {
      if (location.host === 'www.jenkins.io') {
        // 替换图标
        $(this.selectors.logo).replaceWith("<img src=\"/images/logos/jenkins/Jenkins.svg\">");

        // 删除通知
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
}();
Jenkins_defineProperty(Angular, "selectors", {
  logo: 'img[src="/images/logos/jenkins/Jenkins-stop-the-war.svg"]',
  pageTitle: '.page-title'
});

;// CONCATENATED MODULE: ./core-socialist-values/src/websites/sveltematerialui/SvelteMaterialUi.ts
function SvelteMaterialUi_typeof(o) { "@babel/helpers - typeof"; return SvelteMaterialUi_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, SvelteMaterialUi_typeof(o); }
function SvelteMaterialUi_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function SvelteMaterialUi_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, SvelteMaterialUi_toPropertyKey(descriptor.key), descriptor); } }
function SvelteMaterialUi_createClass(Constructor, protoProps, staticProps) { if (protoProps) SvelteMaterialUi_defineProperties(Constructor.prototype, protoProps); if (staticProps) SvelteMaterialUi_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function SvelteMaterialUi_defineProperty(obj, key, value) { key = SvelteMaterialUi_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function SvelteMaterialUi_toPropertyKey(t) { var i = SvelteMaterialUi_toPrimitive(t, "string"); return "symbol" == SvelteMaterialUi_typeof(i) ? i : i + ""; }
function SvelteMaterialUi_toPrimitive(t, r) { if ("object" != SvelteMaterialUi_typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != SvelteMaterialUi_typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var SvelteMaterialUi = /*#__PURE__*/function () {
  function SvelteMaterialUi() {
    SvelteMaterialUi_classCallCheck(this, SvelteMaterialUi);
  }
  return SvelteMaterialUi_createClass(SvelteMaterialUi, null, [{
    key: "replace",
    value: function replace() {
      if (location.host === 'sveltematerialui.com') {
        $(this.selectors.bar).attr('class', '');
      }
    }
  }]);
}();
SvelteMaterialUi_defineProperty(SvelteMaterialUi, "selectors", {
  bar: '.ukraine'
});

;// CONCATENATED MODULE: ./core-socialist-values/src/websites/syncthing/Syncthing.ts
function Syncthing_typeof(o) { "@babel/helpers - typeof"; return Syncthing_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, Syncthing_typeof(o); }
function Syncthing_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function Syncthing_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, Syncthing_toPropertyKey(descriptor.key), descriptor); } }
function Syncthing_createClass(Constructor, protoProps, staticProps) { if (protoProps) Syncthing_defineProperties(Constructor.prototype, protoProps); if (staticProps) Syncthing_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function Syncthing_defineProperty(obj, key, value) { key = Syncthing_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function Syncthing_toPropertyKey(t) { var i = Syncthing_toPrimitive(t, "string"); return "symbol" == Syncthing_typeof(i) ? i : i + ""; }
function Syncthing_toPrimitive(t, r) { if ("object" != Syncthing_typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != Syncthing_typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

var Syncthing = /*#__PURE__*/function () {
  function Syncthing() {
    Syncthing_classCallCheck(this, Syncthing);
  }
  return Syncthing_createClass(Syncthing, null, [{
    key: "replace",
    value: function replace() {
      var _this = this;
      if (location.host === 'syncthing.net') {
        Bar.replace({
          barSelector: this.selectors.bar,
          isObserveBar: false,
          replaceBarCallback: function replaceBarCallback() {
            $(_this.selectors.bar).css('textAlign', 'center');
          }
        });
      }
    }
  }]);
}();
Syncthing_defineProperty(Syncthing, "selectors", {
  bar: '.alert'
});

;// CONCATENATED MODULE: ./core-socialist-values/src/websites/vim/Vim.ts
function Vim_typeof(o) { "@babel/helpers - typeof"; return Vim_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, Vim_typeof(o); }
function Vim_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function Vim_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, Vim_toPropertyKey(descriptor.key), descriptor); } }
function Vim_createClass(Constructor, protoProps, staticProps) { if (protoProps) Vim_defineProperties(Constructor.prototype, protoProps); if (staticProps) Vim_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function Vim_defineProperty(obj, key, value) { key = Vim_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function Vim_toPropertyKey(t) { var i = Vim_toPrimitive(t, "string"); return "symbol" == Vim_typeof(i) ? i : i + ""; }
function Vim_toPrimitive(t, r) { if ("object" != Vim_typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != Vim_typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var Vim_SvelteMaterialUi = /*#__PURE__*/function () {
  function SvelteMaterialUi() {
    Vim_classCallCheck(this, SvelteMaterialUi);
  }
  return Vim_createClass(SvelteMaterialUi, null, [{
    key: "replace",
    value: function replace() {
      if (location.host === 'www.vim.org') {
        for (var i = 0; i < 5; i++) {
          // 删除蓝
          var lightbg = $(this.selectors.removeEl1);
          if (!lightbg) break;
          lightbg.remove();

          // 删除黄
          lightbg = $(this.selectors.removeEl2);
          if (!lightbg) break;
          lightbg.remove();
        }

        // 空白填充背景色
        $(this.selectors.barRootEl).css('background-color', $(this.selectors.backgroundColorEl).css('background-color'));
      }
    }
  }]);
}();
Vim_defineProperty(Vim_SvelteMaterialUi, "selectors", {
  removeEl1: 'td.lightbg[style="background-color: #0057b7"]',
  removeEl2: 'td.lightbg[style="background-color: #ffd700"]',
  backgroundColorEl: 'td.lightbg[align="left"]',
  barRootEl: 'body > table:nth-child(1)'
});

;// CONCATENATED MODULE: ./core-socialist-values/src/main.ts
// ==UserScript==
// @name         技术远离政治
// @namespace    http://tampermonkey.net/
// @version      1.4.1
// @description  移除政治相关条幅或替换为社会主义核心价值观、今日诗词，替换政治相关 Logo 为原版 Logo，去除政治相关通知，让技术远离政治。
// @author       duanluan
// @copyright    2022, duanluan (https://github.com/duanluan)
// @license      Apache-2.0; https://www.apache.org/licenses/LICENSE-2.0.txt
// @match        *://junit.org/*
// @match        *://codecept.io/*
// @match        *://github.com/*
// @match        *://docs.nestjs.com/*
// @match        *://emberjs.com/*
// @match        *://www.jenkins.io/*
// @match        *://sveltematerialui.com/*
// @match        *://syncthing.net/*
// @match        *://www.vim.org/*
// @match        *://greasyfork.org/*
// @require      https://cdn.jsdelivr.net/npm/jquery@3.7.1/dist/jquery.slim.min.js
// @grant        GM_getValue
// @grant        GM_setValue
// @grant        GM_registerMenuCommand
// @grant        GM_unregisterMenuCommand
// @grant        GM_xmlhttpRequest
// ==/UserScript==

// ==OpenUserJS==
// @author       duanluan
// @updateURL    https://raw.kkgithub.com/duanluan/tampermonkey-scripts/main/core-socialist-values/dist/core-socialist-values.user.js
// ==/OpenUserJS==











(function () {
  'use strict';

  Options/* default */.A.registerAll();
  Options/* default */.A.loadInGreasyfork();

  // React.replace();
  // Angular.replace();
  Junit.replace();
  Codecept.replace();
  Github.replace();
  Nest_Codecept.replace();
  Ember.replace();
  // Electron.replace();
  Angular.replace();
  // Svelte.replace();
  SvelteMaterialUi.replace();
  Syncthing.replace();
  Vim_SvelteMaterialUi.replace();
})();

/***/ }),

/***/ 915:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ Store)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/**
 * 存储
 */
var Store = /*#__PURE__*/function () {
  function Store() {
    _classCallCheck(this, Store);
  }
  return _createClass(Store, null, [{
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
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	__webpack_require__(708);
/******/ 	var __webpack_exports__ = __webpack_require__(186);
/******/ 	
/******/ })()
;
//# sourceMappingURL=core-socialist-values.user.js.map