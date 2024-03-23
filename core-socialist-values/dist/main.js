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
_defineProperty(Junit, "junitLogoUrl", 'https://raw.kkgithub.com/duanluan/tampermonkey-scripts/main/core-socialist-values/src/junit/imgs/junit5-logo.png');

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
// @version      1.4.0
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
// @require      https://cdn.bootcdn.net/ajax/libs/jquery/3.7.1/jquery.slim.min.js
// @grant        GM_getValue
// @grant        GM_setValue
// @grant        GM_registerMenuCommand
// @grant        GM_unregisterMenuCommand
// @grant        GM_xmlhttpRequest
// ==/UserScript==

// ==OpenUserJS==
// @author       duanluan
// @updateURL    https://raw.kkgithub.com/duanluan/tampermonkey-scripts/main/core-socialist-values/dist/main.js
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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bW9ua2V5LXNjcmlwdC11dGlscy8uL3V0aWxzL3NyYy9nbS9NZW51Q21kLnRzIiwid2VicGFjazovL3RhbXBlcm1vbmtleS1zY3JpcHQtdXRpbHMvLi91dGlscy9zcmMvQ29tbW9uT3B0aW9ucy50cyIsIndlYnBhY2s6Ly90YW1wZXJtb25rZXktc2NyaXB0LXV0aWxzLy4vY29yZS1zb2NpYWxpc3QtdmFsdWVzL3NyYy9PcHRpb25zLnRzIiwid2VicGFjazovL3RhbXBlcm1vbmtleS1zY3JpcHQtdXRpbHMvLi9jb3JlLXNvY2lhbGlzdC12YWx1ZXMvc3JjL3dlYnNpdGVzL2p1bml0L0p1bml0LnRzIiwid2VicGFjazovL3RhbXBlcm1vbmtleS1zY3JpcHQtdXRpbHMvLi91dGlscy9zcmMvZ20vZW51bS9IdHRwRGF0YVR5cGUudHMiLCJ3ZWJwYWNrOi8vdGFtcGVybW9ua2V5LXNjcmlwdC11dGlscy8uL3V0aWxzL3NyYy9nbS9SZXF1ZXN0LnRzIiwid2VicGFjazovL3RhbXBlcm1vbmtleS1zY3JpcHQtdXRpbHMvLi9jb3JlLXNvY2lhbGlzdC12YWx1ZXMvc3JjL2NvbW1vbi9CYXIudHMiLCJ3ZWJwYWNrOi8vdGFtcGVybW9ua2V5LXNjcmlwdC11dGlscy8uL2NvcmUtc29jaWFsaXN0LXZhbHVlcy9zcmMvd2Vic2l0ZXMvY29kZWNlcHQvQ29kZWNlcHQudHMiLCJ3ZWJwYWNrOi8vdGFtcGVybW9ua2V5LXNjcmlwdC11dGlscy8uL2NvcmUtc29jaWFsaXN0LXZhbHVlcy9zcmMvd2Vic2l0ZXMvZ2l0aHViL0dpdGh1Yi50cyIsIndlYnBhY2s6Ly90YW1wZXJtb25rZXktc2NyaXB0LXV0aWxzLy4vY29yZS1zb2NpYWxpc3QtdmFsdWVzL3NyYy93ZWJzaXRlcy9uZXN0L05lc3QudHMiLCJ3ZWJwYWNrOi8vdGFtcGVybW9ua2V5LXNjcmlwdC11dGlscy8uL2NvcmUtc29jaWFsaXN0LXZhbHVlcy9zcmMvd2Vic2l0ZXMvZW1iZXIvRW1iZXIudHMiLCJ3ZWJwYWNrOi8vdGFtcGVybW9ua2V5LXNjcmlwdC11dGlscy8uL2NvcmUtc29jaWFsaXN0LXZhbHVlcy9zcmMvd2Vic2l0ZXMvamVua2lucy9KZW5raW5zLnRzIiwid2VicGFjazovL3RhbXBlcm1vbmtleS1zY3JpcHQtdXRpbHMvLi9jb3JlLXNvY2lhbGlzdC12YWx1ZXMvc3JjL3dlYnNpdGVzL3N2ZWx0ZW1hdGVyaWFsdWkvU3ZlbHRlTWF0ZXJpYWxVaS50cyIsIndlYnBhY2s6Ly90YW1wZXJtb25rZXktc2NyaXB0LXV0aWxzLy4vY29yZS1zb2NpYWxpc3QtdmFsdWVzL3NyYy93ZWJzaXRlcy9zeW5jdGhpbmcvU3luY3RoaW5nLnRzIiwid2VicGFjazovL3RhbXBlcm1vbmtleS1zY3JpcHQtdXRpbHMvLi9jb3JlLXNvY2lhbGlzdC12YWx1ZXMvc3JjL3dlYnNpdGVzL3ZpbS9WaW0udHMiLCJ3ZWJwYWNrOi8vdGFtcGVybW9ua2V5LXNjcmlwdC11dGlscy8uL2NvcmUtc29jaWFsaXN0LXZhbHVlcy9zcmMvbWFpbi50cyIsIndlYnBhY2s6Ly90YW1wZXJtb25rZXktc2NyaXB0LXV0aWxzLy4vdXRpbHMvc3JjL2dtL1N0b3JlLnRzIiwid2VicGFjazovL3RhbXBlcm1vbmtleS1zY3JpcHQtdXRpbHMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdGFtcGVybW9ua2V5LXNjcmlwdC11dGlscy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdGFtcGVybW9ua2V5LXNjcmlwdC11dGlscy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RhbXBlcm1vbmtleS1zY3JpcHQtdXRpbHMvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly90YW1wZXJtb25rZXktc2NyaXB0LXV0aWxzL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly90YW1wZXJtb25rZXktc2NyaXB0LXV0aWxzL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICog6YCJ6aG56I+c5Y2VXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNZW51Q21kIHtcclxuXHJcbiAgLyoqXHJcbiAgICog5rOo5YaMXHJcbiAgICogQHBhcmFtIG5hbWUg5ZCN56ewXHJcbiAgICogQHBhcmFtIGZuIOeCueWHu+iPnOWNleaXtuaJp+ihjOeahOWHveaVsFxyXG4gICAqL1xyXG4gIHN0YXRpYyByZWdpc3RlcihuYW1lOiBzdHJpbmcsIGZuOiAoKSA9PiB2b2lkKTogbnVtYmVyIHtcclxuICAgIHJldHVybiBHTV9yZWdpc3Rlck1lbnVDb21tYW5kKG5hbWUsIGZuKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIOazqOmUgFxyXG4gICAqIEBwYXJhbSBtZW51Q21kSWQg5rOo5YaM5pe26L+U5Zue55qEIElEXHJcbiAgICovXHJcbiAgc3RhdGljIHVucmVnaXN0ZXIobWVudUNtZElkOiBudW1iZXIpIHtcclxuICAgIEdNX3VucmVnaXN0ZXJNZW51Q29tbWFuZChtZW51Q21kSWQpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgU3RvcmUgZnJvbSBcIkB1dGlscy9nbS9TdG9yZVwiO1xyXG5pbXBvcnQgTWVudUNtZCBmcm9tIFwiQHV0aWxzL2dtL01lbnVDbWRcIjtcclxuXHJcbi8qKlxyXG4gKiDpgInpobnoj5zljZVcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbW1vbk9wdGlvbnMge1xyXG5cclxuICAvLyAvKipcclxuICAvLyAgKiDpgInpobkgS2V5XHJcbiAgLy8gICovXHJcbiAgLy8gcHJvdGVjdGVkIHN0YXRpYyBLZXlzID0ge1xyXG4gIC8vICAgLy8geHh4OiAneHh4J1xyXG4gIC8vIH1cclxuICAvL1xyXG4gIC8vIC8qKlxyXG4gIC8vICAqIOmAiemhuVxyXG4gIC8vICAqIEBwcml2YXRlXHJcbiAgLy8gICovXHJcbiAgLy8gcHJvdGVjdGVkIHN0YXRpYyBvcHRpb25zID0gW1xyXG4gIC8vICAgLy8ge2xhYmVsOiAnJywgbmFtZTogdGhpcy5LZXlzLnh4eCwgdmVyc2lvbjogMSwgdmFsdWU6IGZhbHNlLCBtZW51Q21kSWQ6IG51bGx9LFxyXG4gIC8vIF07XHJcblxyXG4gIC8qKlxyXG4gICAqIOazqOWGjCBib29sIOexu+Wei+eahOmAiemhuVxyXG4gICAqIEBwYXJhbSBvcHRpb24g6YCJ6aG5XHJcbiAgICovXHJcbiAgc3RhdGljIHJlZ2lzdGVyQm9vbE9wdGlvbihvcHRpb246IGFueSkge1xyXG4gICAgY29uc3QgdmFsID0gb3B0aW9uLnZhbHVlLCB2YWxJc0Jvb2wgPSAodHlwZW9mIHZhbCA9PT0gJ2Jvb2xlYW4nKTtcclxuXHJcbiAgICBpZiAoIXZhbElzQm9vbCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICAvLyDms6jlhozpgInpoblcclxuICAgIGNvbnN0IGN1cnJlbnRNZW51Q21kSWQgPSBNZW51Q21kLnJlZ2lzdGVyKCh2YWwgPyAn4piR77iPICcgOiAn8J+UsiAnKSArIG9wdGlvbi5sYWJlbCwgKCkgPT4ge1xyXG4gICAgICAvLyDngrnlh7vlgLzlj5blj41cclxuICAgICAgb3B0aW9uLnZhbHVlID0gIW9wdGlvbi52YWx1ZTtcclxuICAgICAgU3RvcmUuc2V0KG9wdGlvbi5uYW1lLCBKU09OLnN0cmluZ2lmeShvcHRpb24pKTtcclxuXHJcbiAgICAgIC8vIOWPlua2iOazqOWGjFxyXG4gICAgICBNZW51Q21kLnVucmVnaXN0ZXIoY3VycmVudE1lbnVDbWRJZCk7XHJcbiAgICAgIC8vIOmHjeaWsOazqOWGjFxyXG4gICAgICB0aGlzLnJlZ2lzdGVyQm9vbE9wdGlvbihvcHRpb24pO1xyXG4gICAgICAvLyDliLfmlrDpobXpnaJcclxuICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8g5L+d5a2Y6YCJ6aG5IElEXHJcbiAgICBvcHRpb24ubWVudUNtZElkID0gY3VycmVudE1lbnVDbWRJZDtcclxuICAgIFN0b3JlLnNldChvcHRpb24ubmFtZSwgSlNPTi5zdHJpbmdpZnkob3B0aW9uKSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDms6jlhozmiYDmnInpgInpoblcclxuICAgKiBAcGFyYW0gdXJsIOiuvue9rumhtemdoiBVUkxcclxuICAgKiBAcGFyYW0gb3B0aW9uc1xyXG4gICAqL1xyXG4gIHN0YXRpYyByZWdpc3RlckFsbCh1cmw6IHN0cmluZywgb3B0aW9uczogYW55W10pIHtcclxuICAgIE1lbnVDbWQucmVnaXN0ZXIoJ+abtOWkmuiuvue9ricsICgpID0+IHtcclxuICAgICAgd2luZG93Lm9wZW4odXJsLCAnX2JsYW5rJyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBmb3IgKGNvbnN0IG9wdGlvbiBvZiBvcHRpb25zKSB7XHJcbiAgICAgIC8vIFRPRE8g44CQ6LCD6K+V44CR5LiN5L+d55WZ6YCJ6aG555qE5YC877yM5q+P5qyh6YO95LuOIFN0b3JlIOS4reiOt+WPllxyXG4gICAgICAvLyBTdG9yZS5zZXQob3B0aW9uLm5hbWUsIG51bGwpO1xyXG5cclxuICAgICAgbGV0IHN0b3JlT3B0aW9uID0gU3RvcmUuZ2V0KG9wdGlvbi5uYW1lKSA/IEpTT04ucGFyc2UoU3RvcmUuZ2V0KG9wdGlvbi5uYW1lKSkgOiBudWxsO1xyXG4gICAgICAvLyDlpoLmnpzpgInpobnkuI3lrZjlnKggfHwg54mI5pys5LiN5LiA6Ie0IOaXtumHjee9rumAiemhuVxyXG4gICAgICBpZiAoc3RvcmVPcHRpb24gPT09IG51bGwgfHwgIXN0b3JlT3B0aW9uWyd2ZXJzaW9uJ10gfHwgc3RvcmVPcHRpb25bJ3ZlcnNpb24nXSA8IG9wdGlvbi52ZXJzaW9uKSB7XHJcbiAgICAgICAgU3RvcmUuc2V0KG9wdGlvbi5uYW1lLCBKU09OLnN0cmluZ2lmeShvcHRpb24pKTtcclxuICAgICAgICBzdG9yZU9wdGlvbiA9IG9wdGlvbjtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLnJlZ2lzdGVyQm9vbE9wdGlvbihzdG9yZU9wdGlvbik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDlnKjpobXpnaLkuK3liqDovb3pgInpoblcclxuICAgKi9cclxuICBzdGF0aWMgbG9hZEluR3JlYXN5Zm9yayhzY3JpcHRJZDogbnVtYmVyLCBsb2FkT3B0aW9uQ29udGVudEZuOiBGdW5jdGlvbikge1xyXG4gICAgaWYgKGxvY2F0aW9uLmhvc3QgIT09ICdncmVhc3lmb3JrLm9yZycgfHwgbG9jYXRpb24uaHJlZi5pbmRleE9mKCcvc2NyaXB0cy8nICsgc2NyaXB0SWQpID09IC0xKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGNvbnN0IHNlbGVjdG9yID0ge1xyXG4gICAgICBzY3JpcHRMaW5rczogJyNzY3JpcHQtbGlua3MnLFxyXG4gICAgICBzY3JpcHRPcHRpb25zOiAnI3NjcmlwdC1vcHRpb25zJyxcclxuICAgICAgc2NyaXB0Q29udGVudDogJyNzY3JpcHQtY29udGVudCcsXHJcbiAgICB9XHJcbiAgICBjb25zdCAkYm9keSA9ICQoZG9jdW1lbnQuYm9keSksICRzY3JpcHRMaW5rcyA9ICQoc2VsZWN0b3Iuc2NyaXB0TGlua3MpLCAkc2NyaXB0Q29udGVudCA9ICQoc2VsZWN0b3Iuc2NyaXB0Q29udGVudCk7XHJcblxyXG4gICAgLy8g5re75Yqg6ISa5pys6K6+572u55qE6YCJ6aG55Y2hXHJcbiAgICAkc2NyaXB0TGlua3MuY2hpbGRyZW4oJ2xpOmVxKDApJykuYWZ0ZXIoYDxsaT48YSBocmVmPVwiamF2YXNjcmlwdDo7XCIgaWQ9XCJzY3JpcHQtb3B0aW9uc1wiPuiEmuacrOiuvue9rjwvYT48L2xpPmApXHJcbiAgICAvLyDohJrmnKzorr7nva7pgInpobnngrnlh7vkuovku7ZcclxuICAgICRib2R5Lm9uKCdjbGljaycsIHNlbGVjdG9yLnNjcmlwdE9wdGlvbnMsICgpID0+IHtcclxuICAgICAgLy8g56e76Zmk5bey6YCJ5Lit6YCJ6aG555qE5qC35byPXHJcbiAgICAgIGNvbnN0ICRjdXJyZW50TGkgPSAkc2NyaXB0TGlua3MuY2hpbGRyZW4oJ2xpLmN1cnJlbnQnKTtcclxuICAgICAgJGN1cnJlbnRMaS5odG1sKGA8YSBocmVmPVwiJHtsb2NhdGlvbi5ocmVmfVwiPiR7JGN1cnJlbnRMaS50ZXh0KCl9PC9hPmApO1xyXG4gICAgICAkY3VycmVudExpLnJlbW92ZUNsYXNzKCdjdXJyZW50Jyk7XHJcblxyXG4gICAgICAvLyDmt7vliqDpgInkuK3pgInpobnnmoTmoLflvI9cclxuICAgICAgY29uc3QgJHNjcmlwdE9wdGlvbnMgPSAkKHNlbGVjdG9yLnNjcmlwdE9wdGlvbnMpO1xyXG4gICAgICAkc2NyaXB0T3B0aW9ucy5wYXJlbnQoKS5hZGRDbGFzcygnY3VycmVudCcpO1xyXG5cclxuICAgICAgbG9hZE9wdGlvbkNvbnRlbnRGbigkc2NyaXB0Q29udGVudCk7XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IFN0b3JlIGZyb20gXCJAdXRpbHMvZ20vU3RvcmVcIjtcclxuaW1wb3J0IE1lbnVDbWQgZnJvbSBcIkB1dGlscy9nbS9NZW51Q21kXCI7XHJcbmltcG9ydCBDb21tb25PcHRpb25zIGZyb20gXCJAdXRpbHMvQ29tbW9uT3B0aW9uc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgT3B0aW9ucyB7XHJcblxyXG4gIHByaXZhdGUgc3RhdGljIFNDUklQVF9JRCA9IDQ0MDg1NDtcclxuXHJcbiAgLyoqXHJcbiAgICog6YCJ6aG5IEtleVxyXG4gICAqL1xyXG4gIHN0YXRpYyBLZXlzID0ge1xyXG4gICAgcmVtb3ZlQmFyOiAncmVtb3ZlQmFyJyxcclxuICAgIGppbnJpc2hpY2k6ICdqaW5yaXNoaWNpJyxcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIOmAiemhuVxyXG4gICAqIEBwcml2YXRlXHJcbiAgICovXHJcbiAgcHJvdGVjdGVkIHN0YXRpYyBvcHRpb25zID0gW1xyXG4gICAge2xhYmVsOiAn6ZqQ6JeP5p2h5bmFJywgbmFtZTogdGhpcy5LZXlzLnJlbW92ZUJhciwgdmVyc2lvbjogMSwgdmFsdWU6IGZhbHNlLCBtZW51Q21kSWQ6IG51bGx9LFxyXG4gICAge2xhYmVsOiAn5LuK5pel6K+X6K+NJywgbmFtZTogdGhpcy5LZXlzLmppbnJpc2hpY2ksIHZlcnNpb246IDEsIHZhbHVlOiBmYWxzZSwgbWVudUNtZElkOiBudWxsLCB0b2tlbjogJyd9XHJcbiAgXTtcclxuXHJcbiAgLyoqXHJcbiAgICog5rOo5YaMIGJvb2wg57G75Z6L55qE6YCJ6aG5XHJcbiAgICogQHBhcmFtIG9wdGlvbiDpgInpoblcclxuICAgKi9cclxuICBzdGF0aWMgcmVnaXN0ZXJCb29sT3B0aW9uKG9wdGlvbjogYW55KSB7XHJcbiAgICBDb21tb25PcHRpb25zLnJlZ2lzdGVyQm9vbE9wdGlvbihvcHRpb24pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICog5rOo5YaM5omA5pyJ6YCJ6aG5XHJcbiAgICovXHJcbiAgc3RhdGljIHJlZ2lzdGVyQWxsKCkge1xyXG4gICAgQ29tbW9uT3B0aW9ucy5yZWdpc3RlckFsbCgnaHR0cHM6Ly9ncmVhc3lmb3JrLm9yZy9zY3JpcHRzLycgKyB0aGlzLlNDUklQVF9JRCwgdGhpcy5vcHRpb25zKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIOWcqOmhtemdouS4reWKoOi9vemAiemhuVxyXG4gICAqL1xyXG4gIHN0YXRpYyBsb2FkSW5HcmVhc3lmb3JrKCkge1xyXG4gICAgQ29tbW9uT3B0aW9ucy5sb2FkSW5HcmVhc3lmb3JrKHRoaXMuU0NSSVBUX0lELCAoJHNjcmlwdENvbnRlbnQpID0+IHtcclxuICAgICAgLy8g5re75Yqg6ISa5pys6K6+572u55qE5YaF5a65XHJcbiAgICAgIGxldCBzY3JpcHRDb250ZW50ID0gJyc7XHJcbiAgICAgIGZvciAoY29uc3Qgb3B0aW9uIG9mIHRoaXMub3B0aW9ucykge1xyXG4gICAgICAgIGNvbnN0IHN0b3JlT3B0aW9uID0gSlNPTi5wYXJzZShTdG9yZS5nZXQob3B0aW9uLm5hbWUpKSwgb3B0aW9uTmFtZSA9IHN0b3JlT3B0aW9uLm5hbWUsIG9wdGlvblZhbCA9IHN0b3JlT3B0aW9uLnZhbHVlO1xyXG5cclxuICAgICAgICBzY3JpcHRDb250ZW50ICs9IGA8aDM+JHtvcHRpb24ubGFiZWx9PC9oMz5gO1xyXG4gICAgICAgIHN3aXRjaCAob3B0aW9uTmFtZSkge1xyXG4gICAgICAgICAgY2FzZSB0aGlzLktleXMucmVtb3ZlQmFyOlxyXG4gICAgICAgICAgICBzY3JpcHRDb250ZW50ICs9IGA8bGFiZWw+PGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGlkPVwic2NyaXB0LW9wdGlvbnMtJHtvcHRpb25OYW1lfVwiICR7b3B0aW9uVmFsID8gJ2NoZWNrZWQnIDogJyd9PiDmmK/lkKbpmpDol4/mnaHluYXvvIjli77pgInlkI7lsIbpmpDol4/mnaHluYXogIzkuI3mmK/mm7/mjaLlhbblhoXlrrnvvIk8L2xhYmVsPmA7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgY2FzZSB0aGlzLktleXMuamlucmlzaGljaTpcclxuICAgICAgICAgICAgc2NyaXB0Q29udGVudCArPSBgPGxhYmVsPjxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBpZD1cInNjcmlwdC1vcHRpb25zLSR7b3B0aW9uTmFtZX0tZW5hYmxlZFwiICR7b3B0aW9uVmFsID8gJ2NoZWNrZWQnIDogJyd9PiDlkK/nlKg8YSBocmVmPVwiaHR0cHM6Ly93d3cuamlucmlzaGljaS5jb21cIiB0YXJnZXQgPSBcIl9ibGFua1wiPuS7iuaXpeivl+ivjTwvYT7vvIjku43pnIDlj5bmtojli77pgInigJzmmK/lkKbpmpDol4/mnaHluYXigJ3miY3og73nlJ/mlYjvvIk8L2xhYmVsPmA7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAkc2NyaXB0Q29udGVudC5odG1sKHNjcmlwdENvbnRlbnQpO1xyXG5cclxuICAgICAgY29uc3QgJGJvZHkgPSAkKGRvY3VtZW50LmJvZHkpO1xyXG4gICAgICAvLyByZWdpb24g5re75Yqg6ISa5pys6K6+572u55qE5LqL5Lu2XHJcbiAgICAgIC8vIOaYr+WQpumakOiXj+adoeW5hVxyXG4gICAgICBsZXQgb3B0aW9uU2VsZWN0b3IgPSAnI3NjcmlwdC1vcHRpb25zLScgKyB0aGlzLktleXMucmVtb3ZlQmFyO1xyXG4gICAgICAkYm9keS5vbignY2hhbmdlJywgb3B0aW9uU2VsZWN0b3IsICgpID0+IHtcclxuICAgICAgICBjb25zdCByZW1vdmVCYXJPcHRpb24gPSBKU09OLnBhcnNlKFN0b3JlLmdldCh0aGlzLktleXMucmVtb3ZlQmFyKSk7XHJcbiAgICAgICAgcmVtb3ZlQmFyT3B0aW9uLnZhbHVlID0gIXJlbW92ZUJhck9wdGlvbi52YWx1ZTtcclxuICAgICAgICAvLyDph43mlrDms6jlhozoj5zljZVcclxuICAgICAgICBNZW51Q21kLnVucmVnaXN0ZXIocmVtb3ZlQmFyT3B0aW9uLm1lbnVDbWRJZCk7XHJcbiAgICAgICAgdGhpcy5yZWdpc3RlckJvb2xPcHRpb24ocmVtb3ZlQmFyT3B0aW9uKTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICAvLyDlkK/nlKjku4rml6Xor5for41cclxuICAgICAgb3B0aW9uU2VsZWN0b3IgPSAnI3NjcmlwdC1vcHRpb25zLScgKyB0aGlzLktleXMuamlucmlzaGljaSArICctZW5hYmxlZCc7XHJcbiAgICAgICRib2R5Lm9uKCdjaGFuZ2UnLCBvcHRpb25TZWxlY3RvciwgKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGppbnJpc2hpY2lPcHRpb24gPSBKU09OLnBhcnNlKFN0b3JlLmdldCh0aGlzLktleXMuamlucmlzaGljaSkpO1xyXG4gICAgICAgIGppbnJpc2hpY2lPcHRpb24udmFsdWUgPSAhamlucmlzaGljaU9wdGlvbi52YWx1ZTtcclxuICAgICAgICAvLyDph43mlrDms6jlhozoj5zljZVcclxuICAgICAgICBNZW51Q21kLnVucmVnaXN0ZXIoamlucmlzaGljaU9wdGlvbi5tZW51Q21kSWQpO1xyXG4gICAgICAgIHRoaXMucmVnaXN0ZXJCb29sT3B0aW9uKGppbnJpc2hpY2lPcHRpb24pO1xyXG4gICAgICB9KTtcclxuICAgICAgLy8gZW5kcmVnaW9uXHJcbiAgICB9KVxyXG4gIH1cclxufVxyXG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBKdW5pdCB7XHJcblxyXG4gIHByaXZhdGUgc3RhdGljIHNlbGVjdG9ycyA9IHtcclxuICAgIGp1bml0QWJvdXQ6ICcjYWJvdXQnLFxyXG4gICAganVuaXRMb2dvOiAnaW1nW3NyYz1cIi9qdW5pdDUvYXNzZXRzL2ltZy9qdW5pdDUtbG9nby5wbmdcIl0nLFxyXG4gICAganVuaXRGYXZpY29uOiAnbGlua1tyZWw9XCJpY29uXCJdJyxcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc3RhdGljIGp1bml0TG9nb1VybCA9ICdodHRwczovL3Jhdy5ra2dpdGh1Yi5jb20vZHVhbmx1YW4vdGFtcGVybW9ua2V5LXNjcmlwdHMvbWFpbi9jb3JlLXNvY2lhbGlzdC12YWx1ZXMvc3JjL2p1bml0L2ltZ3MvanVuaXQ1LWxvZ28ucG5nJ1xyXG5cclxuICBzdGF0aWMgcmVwbGFjZSgpIHtcclxuICAgIGlmIChsb2NhdGlvbi5ocmVmID09PSAnaHR0cHM6Ly9qdW5pdC5vcmcvanVuaXQ1LycpIHtcclxuICAgICAgJCh0aGlzLnNlbGVjdG9ycy5qdW5pdEFib3V0KS5wcmV2QWxsKCkucmVtb3ZlKCk7XHJcbiAgICAgICQodGhpcy5zZWxlY3RvcnMuanVuaXRMb2dvKS5hdHRyKCdzcmMnLCB0aGlzLmp1bml0TG9nb1VybCk7XHJcbiAgICAgICQodGhpcy5zZWxlY3RvcnMuanVuaXRGYXZpY29uKS5hdHRyKCdocmVmJywgdGhpcy5qdW5pdExvZ29VcmwpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJleHBvcnQgZW51bSBIdHRwRGF0YVR5cGUge1xyXG4gIEpTT04gPSBcIkpTT05cIlxyXG59XHJcbiIsImltcG9ydCB7SHR0cERhdGFUeXBlfSBmcm9tIFwiLi9lbnVtL0h0dHBEYXRhVHlwZVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVxdWVzdCB7XHJcblxyXG4gIHN0YXRpYyBhc3luYyBnZXQob3B0aW9uOiB7IHVybDogc3RyaW5nLCBkYXRhVHlwZT86IEh0dHBEYXRhVHlwZSwgc3luY2hyb25vdXM/OiBib29sZWFuLCBoZWFkZXJzPzoge30sIG9ubG9hZD86IEZ1bmN0aW9uIH0pOiBQcm9taXNlPGFueT4ge1xyXG4gICAgb3B0aW9uWydtZXRob2QnXSA9ICdHRVQnO1xyXG5cclxuICAgIC8vIOWQjOatpeaXtui/lOWbniBQcm9taXNlXHJcbiAgICBpZiAob3B0aW9uLnN5bmNocm9ub3VzKSB7XHJcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgR01feG1saHR0cFJlcXVlc3Qoe1xyXG4gICAgICAgICAgLi4ub3B0aW9uLFxyXG4gICAgICAgICAgb25sb2FkOiAocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgcmVzb2x2ZShvcHRpb24uZGF0YVR5cGUgPT09IEh0dHBEYXRhVHlwZS5KU09OID8gSlNPTi5wYXJzZShyZXNwb25zZS5yZXNwb25zZVRleHQpIDogcmVzcG9uc2UucmVzcG9uc2VUZXh0KTtcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBvbmVycm9yOiAoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgcmVqZWN0KGVycm9yKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgfSlcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnN0IG9ubG9hZDEgPSBmdW5jdGlvbiAoZGV0YWlscykge1xyXG4gICAgICAgIGxldCByZXNwb25zZTtcclxuICAgICAgICBpZiAob3B0aW9uLmRhdGFUeXBlID09PSBIdHRwRGF0YVR5cGUuSlNPTikge1xyXG4gICAgICAgICAgcmVzcG9uc2UgPSBKU09OLnBhcnNlKGRldGFpbHMucmVzcG9uc2VUZXh0KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgcmVzcG9uc2UgPSBkZXRhaWxzLnJlc3BvbnNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBvcHRpb24ub25sb2FkKHJlc3BvbnNlKTtcclxuICAgICAgfVxyXG4gICAgICBHTV94bWxodHRwUmVxdWVzdCh7Li4ub3B0aW9uLCBvbmxvYWQ6IG9ubG9hZDF9KTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IFN0b3JlIGZyb20gXCJAdXRpbHMvZ20vU3RvcmVcIjtcclxuaW1wb3J0IFJlcXVlc3QgZnJvbSBcIkB1dGlscy9nbS9SZXF1ZXN0XCI7XHJcbmltcG9ydCBPcHRpb25zIGZyb20gXCIuLi9PcHRpb25zXCI7XHJcbmltcG9ydCB7SHR0cERhdGFUeXBlfSBmcm9tIFwiQHV0aWxzL2dtL2VudW0vSHR0cERhdGFUeXBlXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCYXIge1xyXG5cclxuICAvKipcclxuICAgKiDmm7/mjaLmnaHluYXnmoTpgInmi6nlmahcclxuICAgKi9cclxuICBzdGF0aWMgcmVwbGFjZUJhclNlbGVjdG9yID0ge1xyXG4gICAgYmFyOiAnLmNzdl9iYXInLFxyXG4gICAgYmFyVWw6ICcuY3N2X2JhciAuY3N2X2Jhcl91bCcsXHJcbiAgfTtcclxuICAvKipcclxuICAgKiDmm7/mjaLlkI7nmoTmnaHluYXljrvpmaTnqbrmoLzmjaLooYzlkI7nmoTmlofmnKxcclxuICAgKiBAcHJpdmF0ZVxyXG4gICAqL1xyXG4gIHByaXZhdGUgc3RhdGljIHR4dCA9ICflr4zlvLrmsJHkuLvmlofmmI7lkozosJDoh6rnlLHlubPnrYnlhazmraPms5XmsrvniLHlm73mlazkuJror5rkv6Hlj4vlloRQcm9zcGVyaXR5RGVtb2NyYWN5Q2l2aWxpdHlIYXJtb255RnJlZWRvbUVxdWFsaXR5SnVzdGljZVJ1bGVvZmxhd1BhdHJpb3Rpc21EZWRpY2F0aW9uSW50ZWdyaXR5RnJpZW5kc2hpcCc7XHJcbiAgLyoqXHJcbiAgICog5piv5ZCm5ZCv55So5LuK5pel6K+X6K+NXHJcbiAgICogQHByaXZhdGVcclxuICAgKi9cclxuICBwcml2YXRlIHN0YXRpYyBzdG9yZUppbnJpc2hpY2lWYWwgPSBmYWxzZTtcclxuICAvKipcclxuICAgKiDku4rml6Xor5for43lhoXlrrlcclxuICAgKiBAcHJpdmF0ZVxyXG4gICAqL1xyXG4gIHByaXZhdGUgc3RhdGljIGppbnJpc2hpY2lDb250ZW50ID0gJyc7XHJcblxyXG4gIC8qKlxyXG4gICAqIOabv+aNouadoeW5hVxyXG4gICAqIEBwYXJhbSBvcHRpb25zIHtcclxuICAgKiAgIGJhclNlbGVjdG9yOiBzdHJpbmcsICAgICAgICAgICAgICAvLyDmnaHluYXpgInmi6nlmahcclxuICAgKiAgIGlzT2JzZXJ2ZUJhcjogYm9vbGVhbiwgICAgICAgICAgICAvLyDmmK/lkKbnm5HlkKzmnaHluYXlj5jljJbvvIzkvJrnm5HlkKzkuKTmrKHlj5jljJbvvIzph43mlrDmm7/mjaLjgILphY3lkIggZm9sbG93VXBPYnNlcnZlU2VsZWN0b3Ig5ZCO57ut55uR5ZCsXHJcbiAgICogICBmb2xsb3dVcE9ic2VydmVTZWxlY3Rvcj86IHN0cmluZywgLy8g5ZCO57ut55uR5ZCs6YCJ5oup5Zmo77yM5Y2z5p2h5bmF5pu/5o2i5ZCO5pyJ5Y+v6IO95Lya5YaN5Y+Y5Zue5Y6f5qC377yM5q2k5aSE5bCx5piv5YaN55uR5ZCs55qE54i257qn6YCJ5oup5Zmo77yMaXNPYnNlcnZlQmFyIOS4uiB0cnVlIOaXtueUn+aViFxyXG4gICAqICAgaGlkZUJhclNlbGVjdG9yOiBzdHJpbmcsICAgICAgICAgIC8vIOmakOiXj+adoeW5hemAieaLqeWZqFxyXG4gICAqICAgaXNPYnNlcnZlSGlkZUJhcjogYm9vbGVhbiwgICAgICAgIC8vIOaYr+WQpuebkeWQrOmakOiXj+adoeW5heWPmOWMlu+8jOS8muebkeWQrOS4pOasoeWPmOWMlu+8jOmHjeaWsOmakOiXj+OAglxyXG4gICAqICAgcmVwbGFjZUJhckNhbGxiYWNrPzogRnVuY3Rpb24sICAgIC8vIOavj+asoeabv+aNouWQjuWbnuiwg1xyXG4gICAqICAgamlucmlzaGljaUNhbGxiYWNrPzogRnVuY3Rpb24sICAgIC8vIOavj+asoeabv+aNouS4uuS7iuaXpeivl+ivjeWQjuWbnuiwg1xyXG4gICAqICAgaGlkZUJhckNhbGxiYWNrPyBGdW5jdGlvbiAgICAgICAgIC8vIOmakOiXj+WQjuWbnuiwg1xyXG4gICAqIH1cclxuICAgKi9cclxuICBzdGF0aWMgcmVwbGFjZShvcHRpb25zOiB7IGJhclNlbGVjdG9yOiBzdHJpbmcsIGlzT2JzZXJ2ZUJhcjogYm9vbGVhbiwgZm9sbG93VXBPYnNlcnZlU2VsZWN0b3I/OiBzdHJpbmcsIGhpZGVCYXJTZWxlY3Rvcj86IHN0cmluZywgaXNPYnNlcnZlSGlkZUJhcj86IGJvb2xlYW4sIHJlcGxhY2VCYXJDYWxsYmFjaz86IEZ1bmN0aW9uLCBqaW5yaXNoaWNpQ2FsbGJhY2s/OiBGdW5jdGlvbiwgaGlkZUJhckNhbGxiYWNrPzogRnVuY3Rpb24gfSkge1xyXG4gICAgaWYgKCEkKG9wdGlvbnMuYmFyU2VsZWN0b3IpLnRleHQoKS5tYXRjaCgvdWtyYWluZXzkuYzlhYvlhbB8YmxhY2t86buR5Lq6L2kpKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIC8vIOS4gOiIrOmakOiXj+adoeW5heWSjOabv+aNouadoeW5heebuOWQjFxyXG4gICAgaWYgKCFvcHRpb25zLmhpZGVCYXJTZWxlY3Rvcikge1xyXG4gICAgICBvcHRpb25zLmhpZGVCYXJTZWxlY3RvciA9IG9wdGlvbnMuYmFyU2VsZWN0b3I7XHJcbiAgICB9XHJcbiAgICBpZiAoIW9wdGlvbnMuaXNPYnNlcnZlSGlkZUJhcikge1xyXG4gICAgICBvcHRpb25zLmlzT2JzZXJ2ZUhpZGVCYXIgPSBvcHRpb25zLmlzT2JzZXJ2ZUJhcjtcclxuICAgIH1cclxuXHJcbiAgICAvLyDpmpDol4/mqKrluYXorr7nva7li77pgIlcclxuICAgIGlmIChKU09OLnBhcnNlKFN0b3JlLmdldChPcHRpb25zLktleXMucmVtb3ZlQmFyKSkudmFsdWUpIHtcclxuICAgICAgdGhpcy5oaWRlQmFyKG9wdGlvbnMpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5zdG9yZUppbnJpc2hpY2lWYWwgPSBKU09OLnBhcnNlKFN0b3JlLmdldChPcHRpb25zLktleXMuamlucmlzaGljaSkpLnZhbHVlO1xyXG4gICAgaWYgKHRoaXMuc3RvcmVKaW5yaXNoaWNpVmFsKSB7XHJcbiAgICAgIHRoaXMuZ2V0SmlucmlzaGljaSgpLnRoZW4oKGRhdGE6IGFueSkgPT4ge1xyXG4gICAgICAgIHRoaXMuamlucmlzaGljaUNvbnRlbnQgPSBkYXRhO1xyXG4gICAgICAgIHRoaXMucmVwbGFjZU9ic2VydmVyKG9wdGlvbnMpO1xyXG4gICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMucmVwbGFjZU9ic2VydmVyKG9wdGlvbnMpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICog6ZqQ6JeP5p2h5bmFXHJcbiAgICogQHBhcmFtIG9wdGlvbnNcclxuICAgKiBAcHJpdmF0ZVxyXG4gICAqL1xyXG4gIHByaXZhdGUgc3RhdGljIGhpZGVCYXIob3B0aW9uczogeyBoaWRlQmFyU2VsZWN0b3I/OiBzdHJpbmcsIGlzT2JzZXJ2ZUhpZGVCYXI/OiBib29sZWFuLCBoaWRlQmFyQ2FsbGJhY2s/OiBGdW5jdGlvbiB9KSB7XHJcbiAgICAvLyDpmpDol4/mqKrluYVcclxuICAgICQob3B0aW9ucy5oaWRlQmFyU2VsZWN0b3IpLmhpZGUoKTtcclxuICAgIGlmIChvcHRpb25zLmlzT2JzZXJ2ZUhpZGVCYXIpIHtcclxuICAgICAgbGV0IGkgPSAwO1xyXG4gICAgICAvLyDpmpDol4/mnaHluYXpppbmrKHliqDovb3vvJrnm5HlkKzmnaHluYXlj5jljJbvvIzlj5jljJblkI7lho3mrKHmiafooYxcclxuICAgICAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcigoKSA9PiB7XHJcbiAgICAgICAgJChvcHRpb25zLmhpZGVCYXJTZWxlY3RvcikuaGlkZSgpO1xyXG4gICAgICAgIC8vIOabv+aNouS4pOasoeWQjue7k+adn+ebkeWQrFxyXG4gICAgICAgIGlmIChpID49IDEpIHtcclxuICAgICAgICAgIG9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaSsrO1xyXG4gICAgICB9KTtcclxuICAgICAgb2JzZXJ2ZXIub2JzZXJ2ZSgkKG9wdGlvbnMuaGlkZUJhclNlbGVjdG9yKVswXSwge2NoaWxkTGlzdDogdHJ1ZSwgc3VidHJlZTogdHJ1ZX0pO1xyXG4gICAgfVxyXG4gICAgaWYgKG9wdGlvbnMuaGlkZUJhckNhbGxiYWNrKSB7XHJcbiAgICAgIG9wdGlvbnMuaGlkZUJhckNhbGxiYWNrKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDmm7/mjaLmnaHluYXnm5HlkKxcclxuICAgKiBAcGFyYW0gb3B0aW9uc1xyXG4gICAqIEBwcml2YXRlXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBzdGF0aWMgcmVwbGFjZU9ic2VydmVyKG9wdGlvbnM6IHsgYmFyU2VsZWN0b3I6IHN0cmluZywgaXNPYnNlcnZlQmFyOiBib29sZWFuLCBmb2xsb3dVcE9ic2VydmVTZWxlY3Rvcj86IHN0cmluZywgcmVwbGFjZUJhckNhbGxiYWNrPzogRnVuY3Rpb24sIGppbnJpc2hpY2lDYWxsYmFjaz86IEZ1bmN0aW9uIH0pIHtcclxuICAgIC8vIOmmluasoeabv+aNouaoquW5hVxyXG4gICAgdGhpcy5yZXBsYWNlQmFyKG9wdGlvbnMuYmFyU2VsZWN0b3IsIG9wdGlvbnMucmVwbGFjZUJhckNhbGxiYWNrLCBvcHRpb25zLmppbnJpc2hpY2lDYWxsYmFjayk7XHJcbiAgICBpZiAoIW9wdGlvbnMuaXNPYnNlcnZlQmFyKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGxldCBpID0gMDtcclxuICAgIC8vIOadoeW5hemmluasoeWKoOi9ve+8muebkeWQrOadoeW5heWPmOWMlu+8jOWPmOWMluWQjuWGjeasoeaJp+ihjFxyXG4gICAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcigoKSA9PiB7XHJcbiAgICAgIHRoaXMucmVwbGFjZUJhcihvcHRpb25zLmJhclNlbGVjdG9yLCBvcHRpb25zLnJlcGxhY2VCYXJDYWxsYmFjaywgb3B0aW9ucy5qaW5yaXNoaWNpQ2FsbGJhY2spO1xyXG4gICAgICAvLyDmm7/mjaLkuKTmrKHlkI7nu5PmnZ/nm5HlkKxcclxuICAgICAgaWYgKGkgPj0gMSkge1xyXG4gICAgICAgIG9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcclxuICAgICAgfVxyXG4gICAgICBpKys7XHJcbiAgICB9KTtcclxuICAgIG9ic2VydmVyLm9ic2VydmUoJChvcHRpb25zLmJhclNlbGVjdG9yKVswXSwge2NoaWxkTGlzdDogdHJ1ZX0pO1xyXG5cclxuICAgIGlmIChvcHRpb25zLmZvbGxvd1VwT2JzZXJ2ZVNlbGVjdG9yKSB7XHJcbiAgICAgIC8vIOWQjue7reWPmOWMllxyXG4gICAgICBuZXcgTXV0YXRpb25PYnNlcnZlcigoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5yZXBsYWNlQmFyKG9wdGlvbnMuYmFyU2VsZWN0b3IsIG9wdGlvbnMucmVwbGFjZUJhckNhbGxiYWNrLCBvcHRpb25zLmppbnJpc2hpY2lDYWxsYmFjayk7XHJcbiAgICAgIH0pLm9ic2VydmUoJChvcHRpb25zLmZvbGxvd1VwT2JzZXJ2ZVNlbGVjdG9yKVswXSwge2NoaWxkTGlzdDogdHJ1ZX0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICog5a6e6ZmF5pu/5o2i5p2h5bmFXHJcbiAgICogQHBhcmFtIHNlbGVjdG9yIOadoeW5hemAieaLqeWZqFxyXG4gICAqIEBwYXJhbSByZXBsYWNlQmFyQ2FsbGJhY2sg5pu/5o2i5ZCO5Zue6LCDXHJcbiAgICogQHBhcmFtIGppbnJpc2hpY2lDYWxsYmFjayDmm7/mjaLkuLrku4rml6Xor5for43lkI7lm57osINcclxuICAgKiBAcHJpdmF0ZVxyXG4gICAqL1xyXG4gIHByaXZhdGUgc3RhdGljIHJlcGxhY2VCYXIoc2VsZWN0b3I6IHN0cmluZywgcmVwbGFjZUJhckNhbGxiYWNrPzogRnVuY3Rpb24sIGppbnJpc2hpY2lDYWxsYmFjaz86IEZ1bmN0aW9uKSB7XHJcbiAgICBpZiAoJCgkKHNlbGVjdG9yKVswXSkudGV4dCgpLnJlcGxhY2UoL1xccysvZywgXCJcIikgPT09IEJhci50eHQpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIOabv+aNouS4uuS7iuaXpeivl+ivjVxyXG4gICAgaWYgKHRoaXMuc3RvcmVKaW5yaXNoaWNpVmFsKSB7XHJcbiAgICAgICQoc2VsZWN0b3IpLmNzcyh7J21pbkhlaWdodCc6ICczMHB4JywgJ2xpbmVIZWlnaHQnOiAnMzBweCd9KTtcclxuICAgICAgJChzZWxlY3RvcikuaHRtbChgXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNzdl9iYXJcIj5cclxuICAgICAgICAgICR7dGhpcy5qaW5yaXNoaWNpQ29udGVudH1cclxuICAgICAgICA8L2Rpdj5gXHJcbiAgICAgICk7XHJcbiAgICAgIGlmIChqaW5yaXNoaWNpQ2FsbGJhY2spIHtcclxuICAgICAgICBqaW5yaXNoaWNpQ2FsbGJhY2soKTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8vIOabv+aNouS4uuekvuS8muS4u+S5ieaguOW/g+S7t+WAvOinglxyXG4gICAgJChzZWxlY3RvcikuY3NzKHsnbWluSGVpZ2h0JzogJzQwcHgnfSk7XHJcbiAgICAkKHNlbGVjdG9yKS5odG1sKGBcclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY3N2X2JhclwiPlxyXG4gICAgICAgICAgPHVsIGNsYXNzPSdjc3ZfYmFyX3VsJz48bGk+5a+M5by6PC9saT48bGk+5rCR5Li7PC9saT48bGk+5paH5piOPC9saT48bGk+5ZKM6LCQPC9saT48bGk+6Ieq55SxPC9saT48bGk+5bmz562JPC9saT48bGk+5YWs5q2jPC9saT48bGk+5rOV5rK7PC9saT48bGk+54ix5Zu9PC9saT48bGk+5pWs5LiaPC9saT48bGk+6K+a5L+hPC9saT48bGk+5Y+L5ZaEPC9saT48L3VsPjxicj5cclxuICAgICAgICAgIDx1bCBjbGFzcz0nY3N2X2Jhcl91bCc+PGxpPlByb3NwZXJpdHk8L2xpPjxsaT5EZW1vY3JhY3k8L2xpPjxsaT5DaXZpbGl0eTwvbGk+PGxpPkhhcm1vbnk8L2xpPjxsaT5GcmVlZG9tPC9saT48bGk+RXF1YWxpdHk8L2xpPjxsaT5KdXN0aWNlPC9saT48bGk+UnVsZSBvZiBsYXc8L2xpPjxsaT5QYXRyaW90aXNtPC9saT48bGk+RGVkaWNhdGlvbjwvbGk+PGxpPkludGVncml0eTwvbGk+PGxpPkZyaWVuZHNoaXA8L2xpPlxyXG4gICAgICAgICAgPC91bD5cclxuICAgICAgICA8L2Rpdj5gXHJcbiAgICApO1xyXG4gICAgLy8g6YG/5YWN5Ye6546w5aSa5Liq5a+86Ie05qC35byP5re75Yqg5aSx6LSlXHJcbiAgICBjb25zdCAkYmFyID0gJCh0aGlzLnJlcGxhY2VCYXJTZWxlY3Rvci5iYXIpO1xyXG4gICAgaWYgKCRiYXIubGVuZ3RoID09IDIpIHtcclxuICAgICAgJGJhci5lcSgwKS5yZW1vdmUoKTtcclxuICAgIH1cclxuICAgIGNvbnN0IGJhclVsU2VsZWN0b3IgPSB0aGlzLnJlcGxhY2VCYXJTZWxlY3Rvci5iYXJVbDtcclxuICAgICQoYmFyVWxTZWxlY3RvcikuY3NzKHsnZGlzcGxheSc6ICdpbmxpbmUtYmxvY2snLCAnbGlzdFN0eWxlJzogJ25vbmUnLCAnbWFyZ2luJzogMCwgJ3BhZGRpbmcnOiAwLCAnd2lkdGgnOiAnYXV0byd9KTtcclxuICAgICQoYmFyVWxTZWxlY3RvciArICcgbGknKS5jc3Moeydjb2xvcic6ICcjREUyOTEwJywgJ2ZvbnRXZWlnaHQnOiAnYm9sZCcsICdmb250RmFtaWx5JzogJ0thaVRpJywgJ2Zsb2F0JzogJ2xlZnQnLCAncGFkZGluZ1JpZ2h0JzogJzEwcHgnLCAnbWluLXdpZHRoJzogJzgwcHgnLCAndGV4dEFsaWduJzogJ2NlbnRlcid9KTtcclxuICAgICQoYmFyVWxTZWxlY3RvciArICc6Zmlyc3QnKS5jc3MoJ3ZlcnRpY2FsQWxpZ24nLCAnYm90dG9tJyk7XHJcbiAgICAkKGJhclVsU2VsZWN0b3IgKyAnOmZpcnN0IGxpJykuY3NzKCdmb250U2l6ZScsICcxOHB4Jyk7XHJcbiAgICAkKGJhclVsU2VsZWN0b3IgKyAnOmVxKDEpIGxpJykuY3NzKCdmb250U2l6ZScsICcxM3B4Jyk7XHJcblxyXG4gICAgaWYgKHJlcGxhY2VCYXJDYWxsYmFjaykge1xyXG4gICAgICByZXBsYWNlQmFyQ2FsbGJhY2soKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIOiOt+WPluS7iuaXpeivl+ivjVxyXG4gICAqIEBwcml2YXRlXHJcbiAgICovXHJcbiAgc3RhdGljIGFzeW5jIGdldEppbnJpc2hpY2koKSB7XHJcbiAgICBsZXQgamlucmlzaGljaU9wdGlvbiA9IEpTT04ucGFyc2UoU3RvcmUuZ2V0KE9wdGlvbnMuS2V5cy5qaW5yaXNoaWNpKSk7XHJcbiAgICBpZiAoIWppbnJpc2hpY2lPcHRpb24udmFsdWUpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCByZXNwb25zZSA9IGF3YWl0IFJlcXVlc3QuZ2V0KHtcclxuICAgICAgdXJsOiAnaHR0cHM6Ly92Mi5qaW5yaXNoaWNpLmNvbS9vbmUuanNvbicsXHJcbiAgICAgIGRhdGFUeXBlOiBIdHRwRGF0YVR5cGUuSlNPTixcclxuICAgICAgLy8gaGVhZGVyczoge1xyXG4gICAgICAvLyAgICdYLVVzZXItVG9rZW4nOiBqaW5yaXNoaWNpT3B0aW9uLnRva2VuLFxyXG4gICAgICAvLyB9LFxyXG4gICAgICBzeW5jaHJvbm91czogdHJ1ZVxyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKCFyZXNwb25zZSB8fCByZXNwb25zZS5zdGF0dXMgIT09ICdzdWNjZXNzJykge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCfku4rml6Xor5for43ojrflj5blpLHotKUnLCByZXNwb25zZSk7XHJcbiAgICB9XHJcbiAgICAvLyAvLyDlrZjlgqggVG9rZW5cclxuICAgIC8vIGlmIChqaW5yaXNoaWNpT3B0aW9uLnRva2VuICE9PSByZXNwb25zZS5kYXRhLnRva2VuKSB7XHJcbiAgICAvLyAgIGppbnJpc2hpY2lPcHRpb24udG9rZW4gPSByZXNwb25zZS5kYXRhLnRva2VuO1xyXG4gICAgLy8gICBTdG9yZS5zZXQoT3B0aW9ucy5LZXlzLmppbnJpc2hpY2ksIEpTT04uc3RyaW5naWZ5KGppbnJpc2hpY2lPcHRpb24pKTtcclxuICAgIC8vIH1cclxuICAgIHJldHVybiByZXNwb25zZS5kYXRhLmNvbnRlbnQgKyAnIOKAlOKAlCAnICsgcmVzcG9uc2UuZGF0YS5vcmlnaW4uYXV0aG9yICsgJ+OAiicgKyByZXNwb25zZS5kYXRhLm9yaWdpbi50aXRsZSArICfjgIsnO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgQmFyIGZyb20gXCIuLi8uLi9jb21tb24vQmFyXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb2RlY2VwdCB7XHJcblxyXG4gIHN0YXRpYyBzZWxlY3RvcnMgPSB7XHJcbiAgICBiYXI6ICcuc3ViLWJhciAubWVzc2FnZScsXHJcbiAgICBoaWRlQmFyOiAnLnN1Yi1iYXInLFxyXG4gIH1cclxuXHJcbiAgc3RhdGljIHJlcGxhY2UoKSB7XHJcbiAgICBpZiAobG9jYXRpb24uaG9zdCA9PT0gJ2NvZGVjZXB0LmlvJykge1xyXG4gICAgICBCYXIucmVwbGFjZSh7XHJcbiAgICAgICAgYmFyU2VsZWN0b3I6IHRoaXMuc2VsZWN0b3JzLmJhciwgaXNPYnNlcnZlQmFyOiBmYWxzZSwgaGlkZUJhclNlbGVjdG9yOiB0aGlzLnNlbGVjdG9ycy5oaWRlQmFyLCBpc09ic2VydmVIaWRlQmFyOiBmYWxzZSwgamlucmlzaGljaUNhbGxiYWNrOiAoKSA9PiB7XHJcbiAgICAgICAgICAkKHRoaXMuc2VsZWN0b3JzLmJhcikuY3NzKCdjb2xvcicsICcjZWRmMmY3Jyk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2l0aHViIHtcclxuXHJcbiAgc3RhdGljIHNlbGVjdG9ycyA9IHtcclxuICAgIG5vdGljZTogJy5ib3JkZXIuanMtbm90aWNlJ1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIHJlcGxhY2UoKSB7XHJcbiAgICBpZiAobG9jYXRpb24uaHJlZiA9PT0gJ2h0dHBzOi8vZ2l0aHViLmNvbS8nKSB7XHJcbiAgICAgIGNvbnN0ICRub3RpY2UgPSAkKHRoaXMuc2VsZWN0b3JzLm5vdGljZSk7XHJcbiAgICAgIGlmICgkbm90aWNlLmxlbmd0aCA+IDAgJiYgJG5vdGljZS50ZXh0KCkudG9Mb3dlckNhc2UoKS5pbmRleE9mKCd1a3JhaW5lJykgIT0gLTEpIHtcclxuICAgICAgICAkbm90aWNlLnJlbW92ZSgpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCBCYXIgZnJvbSBcIi4uLy4uL2NvbW1vbi9CYXJcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvZGVjZXB0IHtcclxuXHJcbiAgc3RhdGljIHNlbGVjdG9ycyA9IHtcclxuICAgIGJhcjogJy50b3AtYmFyJyxcclxuICB9XHJcblxyXG4gIHN0YXRpYyByZXBsYWNlKCkge1xyXG4gICAgaWYgKGxvY2F0aW9uLmhvc3QgPT09ICdkb2NzLm5lc3Rqcy5jb20nKSB7XHJcbiAgICAgIEJhci5yZXBsYWNlKHtcclxuICAgICAgICBiYXJTZWxlY3RvcjogdGhpcy5zZWxlY3RvcnMuYmFyLCBpc09ic2VydmVCYXI6IGZhbHNlLCBoaWRlQmFyU2VsZWN0b3I6IHRoaXMuc2VsZWN0b3JzLmJhciwgaXNPYnNlcnZlSGlkZUJhcjogZmFsc2UsIHJlcGxhY2VCYXJDYWxsYmFjazogKCkgPT4ge1xyXG4gICAgICAgICAgJCh0aGlzLnNlbGVjdG9ycy5iYXIpLmNzcygncGFkZGluZycsICcwJyk7XHJcbiAgICAgICAgfSwgamlucmlzaGljaUNhbGxiYWNrOiAoKSA9PiB7XHJcbiAgICAgICAgICAkKHRoaXMuc2VsZWN0b3JzLmJhcikuY3NzKCdjb2xvcicsICcjZmZmJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IEJhciBmcm9tIFwiLi4vLi4vY29tbW9uL0JhclwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRW1iZXIge1xyXG5cclxuICBzdGF0aWMgc2VsZWN0b3JzID0ge1xyXG4gICAgYmFyOiAnLmNhbGxvdXQtYmFubmVyJyxcclxuICB9XHJcblxyXG4gIHN0YXRpYyByZXBsYWNlKCkge1xyXG4gICAgaWYgKGxvY2F0aW9uLmhvc3QgPT09ICdlbWJlcmpzLmNvbScpIHtcclxuICAgICAgQmFyLnJlcGxhY2Uoe1xyXG4gICAgICAgIGJhclNlbGVjdG9yOiB0aGlzLnNlbGVjdG9ycy5iYXIsIGlzT2JzZXJ2ZUJhcjogZmFsc2UsIGppbnJpc2hpY2lDYWxsYmFjazogKCkgPT4ge1xyXG4gICAgICAgICAgJCh0aGlzLnNlbGVjdG9ycy5iYXIpLmNzcygnY29sb3InLCAnI2ZmZicpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICAgICQodGhpcy5zZWxlY3RvcnMuYmFyKS5jc3MoeydiYWNrZ3JvdW5kQ29sb3InOiAnIzFjMWUyNCcsICdwYWRkaW5nJzogMH0pO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBBbmd1bGFyIHtcclxuXHJcbiAgc3RhdGljIHNlbGVjdG9ycyA9IHtcclxuICAgIGxvZ286ICdpbWdbc3JjPVwiL2ltYWdlcy9sb2dvcy9qZW5raW5zL0plbmtpbnMtc3RvcC10aGUtd2FyLnN2Z1wiXScsXHJcbiAgICBwYWdlVGl0bGU6ICcucGFnZS10aXRsZSdcclxuICB9XHJcblxyXG4gIHN0YXRpYyByZXBsYWNlKCkge1xyXG4gICAgaWYgKGxvY2F0aW9uLmhvc3QgPT09ICd3d3cuamVua2lucy5pbycpIHtcclxuICAgICAgLy8g5pu/5o2i5Zu+5qCHXHJcbiAgICAgICQodGhpcy5zZWxlY3RvcnMubG9nbykucmVwbGFjZVdpdGgoYDxpbWcgc3JjPVwiL2ltYWdlcy9sb2dvcy9qZW5raW5zL0plbmtpbnMuc3ZnXCI+YCk7XHJcblxyXG4gICAgICAvLyDliKDpmaTpgJrnn6VcclxuICAgICAgJCh0aGlzLnNlbGVjdG9ycy5wYWdlVGl0bGUpLm5leHRBbGwoXCJwXCIpLmVhY2goKGksIGVsKSA9PiB7XHJcbiAgICAgICAgY29uc3QgJGVsID0gJChlbCk7XHJcbiAgICAgICAgaWYgKCRlbC50ZXh0KCkudG9Mb3dlckNhc2UoKS5pbmRleE9mKCd1a3JhaW5lJykgIT0gLTEpIHtcclxuICAgICAgICAgICRlbC5yZW1vdmUoKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgICAkKHRoaXMuc2VsZWN0b3JzLnBhZ2VUaXRsZSkucGFyZW50KCkuYXBwZW5kKCc8YnI+PGJyPjxicj4nKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3ZlbHRlTWF0ZXJpYWxVaSB7XHJcblxyXG4gIHN0YXRpYyBzZWxlY3RvcnMgPSB7XHJcbiAgICBiYXI6ICcudWtyYWluZScsXHJcbiAgfVxyXG5cclxuICBzdGF0aWMgcmVwbGFjZSgpIHtcclxuICAgIGlmIChsb2NhdGlvbi5ob3N0ID09PSAnc3ZlbHRlbWF0ZXJpYWx1aS5jb20nKSB7XHJcbiAgICAgICQodGhpcy5zZWxlY3RvcnMuYmFyKS5hdHRyKCdjbGFzcycsICcnKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IEJhciBmcm9tIFwiLi4vLi4vY29tbW9uL0JhclwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3luY3RoaW5nIHtcclxuXHJcbiAgc3RhdGljIHNlbGVjdG9ycyA9IHtcclxuICAgIGJhcjogJy5hbGVydCcsXHJcbiAgfVxyXG5cclxuICBzdGF0aWMgcmVwbGFjZSgpIHtcclxuICAgIGlmIChsb2NhdGlvbi5ob3N0ID09PSAnc3luY3RoaW5nLm5ldCcpIHtcclxuICAgICAgQmFyLnJlcGxhY2Uoe1xyXG4gICAgICAgIGJhclNlbGVjdG9yOiB0aGlzLnNlbGVjdG9ycy5iYXIsIGlzT2JzZXJ2ZUJhcjogZmFsc2UsIHJlcGxhY2VCYXJDYWxsYmFjazogKCkgPT4ge1xyXG4gICAgICAgICAgJCh0aGlzLnNlbGVjdG9ycy5iYXIpLmNzcygndGV4dEFsaWduJywgJ2NlbnRlcicpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFN2ZWx0ZU1hdGVyaWFsVWkge1xyXG5cclxuICBzdGF0aWMgc2VsZWN0b3JzID0ge1xyXG4gICAgcmVtb3ZlRWwxOiAndGQubGlnaHRiZ1tzdHlsZT1cImJhY2tncm91bmQtY29sb3I6ICMwMDU3YjdcIl0nLFxyXG4gICAgcmVtb3ZlRWwyOiAndGQubGlnaHRiZ1tzdHlsZT1cImJhY2tncm91bmQtY29sb3I6ICNmZmQ3MDBcIl0nLFxyXG4gICAgYmFja2dyb3VuZENvbG9yRWw6ICd0ZC5saWdodGJnW2FsaWduPVwibGVmdFwiXScsXHJcbiAgICBiYXJSb290RWw6ICdib2R5ID4gdGFibGU6bnRoLWNoaWxkKDEpJ1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIHJlcGxhY2UoKSB7XHJcbiAgICBpZiAobG9jYXRpb24uaG9zdCA9PT0gJ3d3dy52aW0ub3JnJykge1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDU7IGkrKykge1xyXG4gICAgICAgIC8vIOWIoOmZpOiTnVxyXG4gICAgICAgIGxldCBsaWdodGJnID0gJCh0aGlzLnNlbGVjdG9ycy5yZW1vdmVFbDEpXHJcbiAgICAgICAgaWYgKCFsaWdodGJnKSBicmVhaztcclxuICAgICAgICBsaWdodGJnLnJlbW92ZSgpXHJcblxyXG4gICAgICAgIC8vIOWIoOmZpOm7hFxyXG4gICAgICAgIGxpZ2h0YmcgPSAkKHRoaXMuc2VsZWN0b3JzLnJlbW92ZUVsMilcclxuICAgICAgICBpZiAoIWxpZ2h0YmcpIGJyZWFrO1xyXG4gICAgICAgIGxpZ2h0YmcucmVtb3ZlKClcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8g56m655m95aGr5YWF6IOM5pmv6ImyXHJcbiAgICAgICQodGhpcy5zZWxlY3RvcnMuYmFyUm9vdEVsKS5jc3MoJ2JhY2tncm91bmQtY29sb3InLCAkKHRoaXMuc2VsZWN0b3JzLmJhY2tncm91bmRDb2xvckVsKS5jc3MoJ2JhY2tncm91bmQtY29sb3InKSlcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiLy8gPT1Vc2VyU2NyaXB0PT1cclxuLy8gQG5hbWUgICAgICAgICDmioDmnK/ov5znprvmlL/msrtcclxuLy8gQG5hbWVzcGFjZSAgICBodHRwOi8vdGFtcGVybW9ua2V5Lm5ldC9cclxuLy8gQHZlcnNpb24gICAgICAxLjQuMFxyXG4vLyBAZGVzY3JpcHRpb24gIOenu+mZpOaUv+ayu+ebuOWFs+adoeW5heaIluabv+aNouS4uuekvuS8muS4u+S5ieaguOW/g+S7t+WAvOinguOAgeS7iuaXpeivl+ivje+8jOabv+aNouaUv+ayu+ebuOWFsyBMb2dvIOS4uuWOn+eJiCBMb2dv77yM5Y676Zmk5pS/5rK755u45YWz6YCa55+l77yM6K6p5oqA5pyv6L+c56a75pS/5rK744CCXHJcbi8vIEBhdXRob3IgICAgICAgZHVhbmx1YW5cclxuLy8gQGNvcHlyaWdodCAgICAyMDIyLCBkdWFubHVhbiAoaHR0cHM6Ly9naXRodWIuY29tL2R1YW5sdWFuKVxyXG4vLyBAbGljZW5zZSAgICAgIEFwYWNoZS0yLjA7IGh0dHBzOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjAudHh0XHJcbi8vIEBtYXRjaCAgICAgICAgKjovL2p1bml0Lm9yZy8qXHJcbi8vIEBtYXRjaCAgICAgICAgKjovL2NvZGVjZXB0LmlvLypcclxuLy8gQG1hdGNoICAgICAgICAqOi8vZ2l0aHViLmNvbS8qXHJcbi8vIEBtYXRjaCAgICAgICAgKjovL2RvY3MubmVzdGpzLmNvbS8qXHJcbi8vIEBtYXRjaCAgICAgICAgKjovL2VtYmVyanMuY29tLypcclxuLy8gQG1hdGNoICAgICAgICAqOi8vd3d3LmplbmtpbnMuaW8vKlxyXG4vLyBAbWF0Y2ggICAgICAgICo6Ly9zdmVsdGVtYXRlcmlhbHVpLmNvbS8qXHJcbi8vIEBtYXRjaCAgICAgICAgKjovL3N5bmN0aGluZy5uZXQvKlxyXG4vLyBAbWF0Y2ggICAgICAgICo6Ly93d3cudmltLm9yZy8qXHJcbi8vIEBtYXRjaCAgICAgICAgKjovL2dyZWFzeWZvcmsub3JnLypcclxuLy8gQHJlcXVpcmUgICAgICBodHRwczovL2Nkbi5ib290Y2RuLm5ldC9hamF4L2xpYnMvanF1ZXJ5LzMuNy4xL2pxdWVyeS5zbGltLm1pbi5qc1xyXG4vLyBAZ3JhbnQgICAgICAgIEdNX2dldFZhbHVlXHJcbi8vIEBncmFudCAgICAgICAgR01fc2V0VmFsdWVcclxuLy8gQGdyYW50ICAgICAgICBHTV9yZWdpc3Rlck1lbnVDb21tYW5kXHJcbi8vIEBncmFudCAgICAgICAgR01fdW5yZWdpc3Rlck1lbnVDb21tYW5kXHJcbi8vIEBncmFudCAgICAgICAgR01feG1saHR0cFJlcXVlc3RcclxuLy8gPT0vVXNlclNjcmlwdD09XHJcblxyXG4vLyA9PU9wZW5Vc2VySlM9PVxyXG4vLyBAYXV0aG9yICAgICAgIGR1YW5sdWFuXHJcbi8vIEB1cGRhdGVVUkwgICAgaHR0cHM6Ly9yYXcua2tnaXRodWIuY29tL2R1YW5sdWFuL3RhbXBlcm1vbmtleS1zY3JpcHRzL21haW4vY29yZS1zb2NpYWxpc3QtdmFsdWVzL2Rpc3QvbWFpbi5qc1xyXG4vLyA9PS9PcGVuVXNlckpTPT1cclxuXHJcbmltcG9ydCBKdW5pdCBmcm9tIFwiLi93ZWJzaXRlcy9qdW5pdC9KdW5pdFwiO1xyXG5pbXBvcnQgQ29kZWNlcHQgZnJvbSBcIi4vd2Vic2l0ZXMvY29kZWNlcHQvQ29kZWNlcHRcIjtcclxuaW1wb3J0IEdpdGh1YiBmcm9tIFwiLi93ZWJzaXRlcy9naXRodWIvR2l0aHViXCI7XHJcbmltcG9ydCBOZXN0IGZyb20gXCIuL3dlYnNpdGVzL25lc3QvTmVzdFwiO1xyXG5pbXBvcnQgRW1iZXIgZnJvbSBcIi4vd2Vic2l0ZXMvZW1iZXIvRW1iZXJcIjtcclxuaW1wb3J0IEplbmtpbnMgZnJvbSBcIi4vd2Vic2l0ZXMvamVua2lucy9KZW5raW5zXCI7XHJcbmltcG9ydCBPcHRpb25zIGZyb20gXCIuL09wdGlvbnNcIjtcclxuaW1wb3J0IFN2ZWx0ZU1hdGVyaWFsVWkgZnJvbSBcIi4vd2Vic2l0ZXMvc3ZlbHRlbWF0ZXJpYWx1aS9TdmVsdGVNYXRlcmlhbFVpXCI7XHJcbmltcG9ydCBTeW5jdGhpbmcgZnJvbSBcIi4vd2Vic2l0ZXMvc3luY3RoaW5nL1N5bmN0aGluZ1wiO1xyXG5pbXBvcnQgVmltIGZyb20gXCIuL3dlYnNpdGVzL3ZpbS9WaW1cIjtcclxuXHJcbigoKSA9PiB7XHJcbiAgJ3VzZSBzdHJpY3QnO1xyXG5cclxuICBPcHRpb25zLnJlZ2lzdGVyQWxsKCk7XHJcbiAgT3B0aW9ucy5sb2FkSW5HcmVhc3lmb3JrKCk7XHJcblxyXG4gIC8vIFJlYWN0LnJlcGxhY2UoKTtcclxuICAvLyBBbmd1bGFyLnJlcGxhY2UoKTtcclxuICBKdW5pdC5yZXBsYWNlKCk7XHJcbiAgQ29kZWNlcHQucmVwbGFjZSgpO1xyXG4gIEdpdGh1Yi5yZXBsYWNlKCk7XHJcbiAgTmVzdC5yZXBsYWNlKCk7XHJcbiAgRW1iZXIucmVwbGFjZSgpO1xyXG4gIC8vIEVsZWN0cm9uLnJlcGxhY2UoKTtcclxuICBKZW5raW5zLnJlcGxhY2UoKTtcclxuICAvLyBTdmVsdGUucmVwbGFjZSgpO1xyXG4gIFN2ZWx0ZU1hdGVyaWFsVWkucmVwbGFjZSgpO1xyXG4gIFN5bmN0aGluZy5yZXBsYWNlKCk7XHJcbiAgVmltLnJlcGxhY2UoKTtcclxufSkoKTtcclxuIiwiLyoqXHJcbiAqIOWtmOWCqFxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RvcmUge1xyXG5cclxuICAvKipcclxuICAgKiDojrflj5ZcclxuICAgKiBAcGFyYW0ga2V5IOmUrlxyXG4gICAqL1xyXG4gIHN0YXRpYyBnZXQoa2V5OiBzdHJpbmcpOiBhbnkge1xyXG4gICAgcmV0dXJuIEdNX2dldFZhbHVlKGtleSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDorr7nva5cclxuICAgKiBAcGFyYW0ga2V5IOmUrlxyXG4gICAqIEBwYXJhbSB2YWx1ZSDlgLxcclxuICAgKi9cclxuICBzdGF0aWMgc2V0KGtleTogc3RyaW5nLCB2YWx1ZTogYW55KSB7XHJcbiAgICBHTV9zZXRWYWx1ZShrZXksIHZhbHVlKTtcclxuICB9XHJcbn1cclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG5fX3dlYnBhY2tfcmVxdWlyZV9fKDcwOCk7XG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oMTg2KTtcbiIsIiJdLCJuYW1lcyI6WyJNZW51Q21kIiwiX2NsYXNzQ2FsbENoZWNrIiwiX2NyZWF0ZUNsYXNzIiwia2V5IiwidmFsdWUiLCJyZWdpc3RlciIsIm5hbWUiLCJmbiIsIkdNX3JlZ2lzdGVyTWVudUNvbW1hbmQiLCJ1bnJlZ2lzdGVyIiwibWVudUNtZElkIiwiR01fdW5yZWdpc3Rlck1lbnVDb21tYW5kIiwiZGVmYXVsdCIsIlN0b3JlIiwiQ29tbW9uT3B0aW9ucyIsInJlZ2lzdGVyQm9vbE9wdGlvbiIsIm9wdGlvbiIsIl90aGlzIiwidmFsIiwidmFsSXNCb29sIiwiY3VycmVudE1lbnVDbWRJZCIsImxhYmVsIiwic2V0IiwiSlNPTiIsInN0cmluZ2lmeSIsIndpbmRvdyIsImxvY2F0aW9uIiwicmVsb2FkIiwicmVnaXN0ZXJBbGwiLCJ1cmwiLCJvcHRpb25zIiwib3BlbiIsIl9pdGVyYXRvciIsIl9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyIiwiX3N0ZXAiLCJzIiwibiIsImRvbmUiLCJzdG9yZU9wdGlvbiIsImdldCIsInBhcnNlIiwidmVyc2lvbiIsImVyciIsImUiLCJmIiwibG9hZEluR3JlYXN5Zm9yayIsInNjcmlwdElkIiwibG9hZE9wdGlvbkNvbnRlbnRGbiIsImhvc3QiLCJocmVmIiwiaW5kZXhPZiIsInNlbGVjdG9yIiwic2NyaXB0TGlua3MiLCJzY3JpcHRPcHRpb25zIiwic2NyaXB0Q29udGVudCIsIiRib2R5IiwiJCIsImRvY3VtZW50IiwiYm9keSIsIiRzY3JpcHRMaW5rcyIsIiRzY3JpcHRDb250ZW50IiwiY2hpbGRyZW4iLCJhZnRlciIsIm9uIiwiJGN1cnJlbnRMaSIsImh0bWwiLCJjb25jYXQiLCJ0ZXh0IiwicmVtb3ZlQ2xhc3MiLCIkc2NyaXB0T3B0aW9ucyIsInBhcmVudCIsImFkZENsYXNzIiwiT3B0aW9ucyIsIlNDUklQVF9JRCIsIm9wdGlvbk5hbWUiLCJvcHRpb25WYWwiLCJLZXlzIiwicmVtb3ZlQmFyIiwiamlucmlzaGljaSIsIm9wdGlvblNlbGVjdG9yIiwicmVtb3ZlQmFyT3B0aW9uIiwiamlucmlzaGljaU9wdGlvbiIsIl9PcHRpb25zIiwiX2RlZmluZVByb3BlcnR5IiwidG9rZW4iLCJKdW5pdCIsInJlcGxhY2UiLCJzZWxlY3RvcnMiLCJqdW5pdEFib3V0IiwicHJldkFsbCIsInJlbW92ZSIsImp1bml0TG9nbyIsImF0dHIiLCJqdW5pdExvZ29VcmwiLCJqdW5pdEZhdmljb24iLCJIdHRwRGF0YVR5cGUiLCJfcmVnZW5lcmF0b3JSdW50aW1lIiwidCIsInIiLCJPYmplY3QiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsIm8iLCJkZWZpbmVQcm9wZXJ0eSIsImkiLCJTeW1ib2wiLCJhIiwiaXRlcmF0b3IiLCJjIiwiYXN5bmNJdGVyYXRvciIsInUiLCJ0b1N0cmluZ1RhZyIsImRlZmluZSIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsIndyYXAiLCJHZW5lcmF0b3IiLCJjcmVhdGUiLCJDb250ZXh0IiwibWFrZUludm9rZU1ldGhvZCIsInRyeUNhdGNoIiwidHlwZSIsImFyZyIsImNhbGwiLCJoIiwibCIsInkiLCJHZW5lcmF0b3JGdW5jdGlvbiIsIkdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlIiwicCIsImQiLCJnZXRQcm90b3R5cGVPZiIsInYiLCJ2YWx1ZXMiLCJnIiwiZGVmaW5lSXRlcmF0b3JNZXRob2RzIiwiZm9yRWFjaCIsIl9pbnZva2UiLCJBc3luY0l0ZXJhdG9yIiwiaW52b2tlIiwiX3R5cGVvZiIsInJlc29sdmUiLCJfX2F3YWl0IiwidGhlbiIsImNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnIiwiRXJyb3IiLCJtZXRob2QiLCJkZWxlZ2F0ZSIsIm1heWJlSW52b2tlRGVsZWdhdGUiLCJzZW50IiwiX3NlbnQiLCJkaXNwYXRjaEV4Y2VwdGlvbiIsImFicnVwdCIsIlR5cGVFcnJvciIsInJlc3VsdE5hbWUiLCJuZXh0IiwibmV4dExvYyIsInB1c2hUcnlFbnRyeSIsInRyeUxvYyIsImNhdGNoTG9jIiwiZmluYWxseUxvYyIsImFmdGVyTG9jIiwidHJ5RW50cmllcyIsInB1c2giLCJyZXNldFRyeUVudHJ5IiwiY29tcGxldGlvbiIsInJlc2V0IiwiaXNOYU4iLCJsZW5ndGgiLCJkaXNwbGF5TmFtZSIsImlzR2VuZXJhdG9yRnVuY3Rpb24iLCJjb25zdHJ1Y3RvciIsIm1hcmsiLCJzZXRQcm90b3R5cGVPZiIsIl9fcHJvdG9fXyIsImF3cmFwIiwiYXN5bmMiLCJQcm9taXNlIiwia2V5cyIsInJldmVyc2UiLCJwb3AiLCJwcmV2IiwiY2hhckF0Iiwic2xpY2UiLCJzdG9wIiwicnZhbCIsImhhbmRsZSIsImNvbXBsZXRlIiwiZmluaXNoIiwiX2NhdGNoIiwiZGVsZWdhdGVZaWVsZCIsIm93bktleXMiLCJnZXRPd25Qcm9wZXJ0eVN5bWJvbHMiLCJmaWx0ZXIiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJhcHBseSIsIl9vYmplY3RTcHJlYWQiLCJhcmd1bWVudHMiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzIiwiZGVmaW5lUHJvcGVydGllcyIsIm9iaiIsIl90b1Byb3BlcnR5S2V5IiwiYXN5bmNHZW5lcmF0b3JTdGVwIiwiZ2VuIiwicmVqZWN0IiwiX25leHQiLCJfdGhyb3ciLCJpbmZvIiwiZXJyb3IiLCJfYXN5bmNUb0dlbmVyYXRvciIsInNlbGYiLCJhcmdzIiwidW5kZWZpbmVkIiwiaW5zdGFuY2UiLCJDb25zdHJ1Y3RvciIsIl9kZWZpbmVQcm9wZXJ0aWVzIiwidGFyZ2V0IiwicHJvcHMiLCJkZXNjcmlwdG9yIiwicHJvdG9Qcm9wcyIsInN0YXRpY1Byb3BzIiwiX3RvUHJpbWl0aXZlIiwidG9QcmltaXRpdmUiLCJTdHJpbmciLCJOdW1iZXIiLCJSZXF1ZXN0IiwiX2dldCIsIl9jYWxsZWUiLCJvbmxvYWQxIiwiX2NhbGxlZSQiLCJfY29udGV4dCIsInN5bmNocm9ub3VzIiwiR01feG1saHR0cFJlcXVlc3QiLCJvbmxvYWQiLCJyZXNwb25zZSIsImRhdGFUeXBlIiwicmVzcG9uc2VUZXh0Iiwib25lcnJvciIsImRldGFpbHMiLCJfeCIsIkJhciIsImJhclNlbGVjdG9yIiwibWF0Y2giLCJoaWRlQmFyU2VsZWN0b3IiLCJpc09ic2VydmVIaWRlQmFyIiwiaXNPYnNlcnZlQmFyIiwiaGlkZUJhciIsInN0b3JlSmlucmlzaGljaVZhbCIsImdldEppbnJpc2hpY2kiLCJkYXRhIiwiamlucmlzaGljaUNvbnRlbnQiLCJyZXBsYWNlT2JzZXJ2ZXIiLCJoaWRlIiwib2JzZXJ2ZXIiLCJNdXRhdGlvbk9ic2VydmVyIiwiZGlzY29ubmVjdCIsIm9ic2VydmUiLCJjaGlsZExpc3QiLCJzdWJ0cmVlIiwiaGlkZUJhckNhbGxiYWNrIiwiX3RoaXMyIiwicmVwbGFjZUJhciIsInJlcGxhY2VCYXJDYWxsYmFjayIsImppbnJpc2hpY2lDYWxsYmFjayIsImZvbGxvd1VwT2JzZXJ2ZVNlbGVjdG9yIiwidHh0IiwiY3NzIiwiJGJhciIsInJlcGxhY2VCYXJTZWxlY3RvciIsImJhciIsImVxIiwiYmFyVWxTZWxlY3RvciIsImJhclVsIiwiX2dldEppbnJpc2hpY2kiLCJzdGF0dXMiLCJjb25zb2xlIiwiY29udGVudCIsIm9yaWdpbiIsImF1dGhvciIsInRpdGxlIiwiQ29kZWNlcHQiLCJHaXRodWIiLCIkbm90aWNlIiwibm90aWNlIiwidG9Mb3dlckNhc2UiLCJFbWJlciIsIkFuZ3VsYXIiLCJsb2dvIiwicmVwbGFjZVdpdGgiLCJwYWdlVGl0bGUiLCJuZXh0QWxsIiwiZWFjaCIsImVsIiwiJGVsIiwiYXBwZW5kIiwiU3ZlbHRlTWF0ZXJpYWxVaSIsIlN5bmN0aGluZyIsImxpZ2h0YmciLCJyZW1vdmVFbDEiLCJyZW1vdmVFbDIiLCJiYXJSb290RWwiLCJiYWNrZ3JvdW5kQ29sb3JFbCIsIk5lc3QiLCJKZW5raW5zIiwiVmltIiwiR01fZ2V0VmFsdWUiLCJHTV9zZXRWYWx1ZSJdLCJzb3VyY2VSb290IjoiIn0=