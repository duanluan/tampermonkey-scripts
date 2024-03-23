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

/***/ 20:
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

;// CONCATENATED MODULE: ./core-socialist-values/src/main.ts
// ==UserScript==
// @name         技术远离政治
// @namespace    http://tampermonkey.net/
// @version      1.3.2
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
/******/ 	var __webpack_exports__ = __webpack_require__(20);
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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cmlwdC11dGlscy8uL3V0aWxzL3NyYy9nbS9NZW51Q21kLnRzIiwid2VicGFjazovL3RhbXBlcm1vbmtleS1zY3JpcHQtdXRpbHMvLi91dGlscy9zcmMvQ29tbW9uT3B0aW9ucy50cyIsIndlYnBhY2s6Ly90YW1wZXJtb25rZXktc2NyaXB0LXV0aWxzLy4vY29yZS1zb2NpYWxpc3QtdmFsdWVzL3NyYy9PcHRpb25zLnRzIiwid2VicGFjazovL3RhbXBlcm1vbmtleS1zY3JpcHQtdXRpbHMvLi9jb3JlLXNvY2lhbGlzdC12YWx1ZXMvc3JjL3dlYnNpdGVzL2p1bml0L0p1bml0LnRzIiwid2VicGFjazovL3RhbXBlcm1vbmtleS1zY3JpcHQtdXRpbHMvLi91dGlscy9zcmMvZ20vZW51bS9IdHRwRGF0YVR5cGUudHMiLCJ3ZWJwYWNrOi8vdGFtcGVybW9ua2V5LXNjcmlwdC11dGlscy8uL3V0aWxzL3NyYy9nbS9SZXF1ZXN0LnRzIiwid2VicGFjazovL3RhbXBlcm1vbmtleS1zY3JpcHQtdXRpbHMvLi9jb3JlLXNvY2lhbGlzdC12YWx1ZXMvc3JjL2NvbW1vbi9CYXIudHMiLCJ3ZWJwYWNrOi8vdGFtcGVybW9ua2V5LXNjcmlwdC11dGlscy8uL2NvcmUtc29jaWFsaXN0LXZhbHVlcy9zcmMvd2Vic2l0ZXMvY29kZWNlcHQvQ29kZWNlcHQudHMiLCJ3ZWJwYWNrOi8vdGFtcGVybW9ua2V5LXNjcmlwdC11dGlscy8uL2NvcmUtc29jaWFsaXN0LXZhbHVlcy9zcmMvd2Vic2l0ZXMvZ2l0aHViL0dpdGh1Yi50cyIsIndlYnBhY2s6Ly90YW1wZXJtb25rZXktc2NyaXB0LXV0aWxzLy4vY29yZS1zb2NpYWxpc3QtdmFsdWVzL3NyYy93ZWJzaXRlcy9uZXN0L05lc3QudHMiLCJ3ZWJwYWNrOi8vdGFtcGVybW9ua2V5LXNjcmlwdC11dGlscy8uL2NvcmUtc29jaWFsaXN0LXZhbHVlcy9zcmMvd2Vic2l0ZXMvZW1iZXIvRW1iZXIudHMiLCJ3ZWJwYWNrOi8vdGFtcGVybW9ua2V5LXNjcmlwdC11dGlscy8uL2NvcmUtc29jaWFsaXN0LXZhbHVlcy9zcmMvd2Vic2l0ZXMvamVua2lucy9KZW5raW5zLnRzIiwid2VicGFjazovL3RhbXBlcm1vbmtleS1zY3JpcHQtdXRpbHMvLi9jb3JlLXNvY2lhbGlzdC12YWx1ZXMvc3JjL3dlYnNpdGVzL3N2ZWx0ZW1hdGVyaWFsdWkvU3ZlbHRlTWF0ZXJpYWxVaS50cyIsIndlYnBhY2s6Ly90YW1wZXJtb25rZXktc2NyaXB0LXV0aWxzLy4vY29yZS1zb2NpYWxpc3QtdmFsdWVzL3NyYy93ZWJzaXRlcy9zeW5jdGhpbmcvU3luY3RoaW5nLnRzIiwid2VicGFjazovL3RhbXBlcm1vbmtleS1zY3JpcHQtdXRpbHMvLi9jb3JlLXNvY2lhbGlzdC12YWx1ZXMvc3JjL21haW4udHMiLCJ3ZWJwYWNrOi8vdGFtcGVybW9ua2V5LXNjcmlwdC11dGlscy8uL3V0aWxzL3NyYy9nbS9TdG9yZS50cyIsIndlYnBhY2s6Ly90YW1wZXJtb25rZXktc2NyaXB0LXV0aWxzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RhbXBlcm1vbmtleS1zY3JpcHQtdXRpbHMvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RhbXBlcm1vbmtleS1zY3JpcHQtdXRpbHMvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90YW1wZXJtb25rZXktc2NyaXB0LXV0aWxzL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vdGFtcGVybW9ua2V5LXNjcmlwdC11dGlscy93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vdGFtcGVybW9ua2V5LXNjcmlwdC11dGlscy93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIOmAiemhueiPnOWNlVxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWVudUNtZCB7XHJcblxyXG4gIC8qKlxyXG4gICAqIOazqOWGjFxyXG4gICAqIEBwYXJhbSBuYW1lIOWQjeensFxyXG4gICAqIEBwYXJhbSBmbiDngrnlh7voj5zljZXml7bmiafooYznmoTlh73mlbBcclxuICAgKi9cclxuICBzdGF0aWMgcmVnaXN0ZXIobmFtZTogc3RyaW5nLCBmbjogKCkgPT4gdm9pZCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gR01fcmVnaXN0ZXJNZW51Q29tbWFuZChuYW1lLCBmbik7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDms6jplIBcclxuICAgKiBAcGFyYW0gbWVudUNtZElkIOazqOWGjOaXtui/lOWbnueahCBJRFxyXG4gICAqL1xyXG4gIHN0YXRpYyB1bnJlZ2lzdGVyKG1lbnVDbWRJZDogbnVtYmVyKSB7XHJcbiAgICBHTV91bnJlZ2lzdGVyTWVudUNvbW1hbmQobWVudUNtZElkKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IFN0b3JlIGZyb20gXCJAdXRpbHMvZ20vU3RvcmVcIjtcclxuaW1wb3J0IE1lbnVDbWQgZnJvbSBcIkB1dGlscy9nbS9NZW51Q21kXCI7XHJcblxyXG4vKipcclxuICog6YCJ6aG56I+c5Y2VXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb21tb25PcHRpb25zIHtcclxuXHJcbiAgLy8gLyoqXHJcbiAgLy8gICog6YCJ6aG5IEtleVxyXG4gIC8vICAqL1xyXG4gIC8vIHByb3RlY3RlZCBzdGF0aWMgS2V5cyA9IHtcclxuICAvLyAgIC8vIHh4eDogJ3h4eCdcclxuICAvLyB9XHJcbiAgLy9cclxuICAvLyAvKipcclxuICAvLyAgKiDpgInpoblcclxuICAvLyAgKiBAcHJpdmF0ZVxyXG4gIC8vICAqL1xyXG4gIC8vIHByb3RlY3RlZCBzdGF0aWMgb3B0aW9ucyA9IFtcclxuICAvLyAgIC8vIHtsYWJlbDogJycsIG5hbWU6IHRoaXMuS2V5cy54eHgsIHZlcnNpb246IDEsIHZhbHVlOiBmYWxzZSwgbWVudUNtZElkOiBudWxsfSxcclxuICAvLyBdO1xyXG5cclxuICAvKipcclxuICAgKiDms6jlhowgYm9vbCDnsbvlnovnmoTpgInpoblcclxuICAgKiBAcGFyYW0gb3B0aW9uIOmAiemhuVxyXG4gICAqL1xyXG4gIHN0YXRpYyByZWdpc3RlckJvb2xPcHRpb24ob3B0aW9uOiBhbnkpIHtcclxuICAgIGNvbnN0IHZhbCA9IG9wdGlvbi52YWx1ZSwgdmFsSXNCb29sID0gKHR5cGVvZiB2YWwgPT09ICdib29sZWFuJyk7XHJcblxyXG4gICAgaWYgKCF2YWxJc0Jvb2wpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgLy8g5rOo5YaM6YCJ6aG5XHJcbiAgICBjb25zdCBjdXJyZW50TWVudUNtZElkID0gTWVudUNtZC5yZWdpc3RlcigodmFsID8gJ+KYke+4jyAnIDogJ/CflLIgJykgKyBvcHRpb24ubGFiZWwsICgpID0+IHtcclxuICAgICAgLy8g54K55Ye75YC85Y+W5Y+NXHJcbiAgICAgIG9wdGlvbi52YWx1ZSA9ICFvcHRpb24udmFsdWU7XHJcbiAgICAgIFN0b3JlLnNldChvcHRpb24ubmFtZSwgSlNPTi5zdHJpbmdpZnkob3B0aW9uKSk7XHJcblxyXG4gICAgICAvLyDlj5bmtojms6jlhoxcclxuICAgICAgTWVudUNtZC51bnJlZ2lzdGVyKGN1cnJlbnRNZW51Q21kSWQpO1xyXG4gICAgICAvLyDph43mlrDms6jlhoxcclxuICAgICAgdGhpcy5yZWdpc3RlckJvb2xPcHRpb24ob3B0aW9uKTtcclxuICAgICAgLy8g5Yi35paw6aG16Z2iXHJcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIOS/neWtmOmAiemhuSBJRFxyXG4gICAgb3B0aW9uLm1lbnVDbWRJZCA9IGN1cnJlbnRNZW51Q21kSWQ7XHJcbiAgICBTdG9yZS5zZXQob3B0aW9uLm5hbWUsIEpTT04uc3RyaW5naWZ5KG9wdGlvbikpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICog5rOo5YaM5omA5pyJ6YCJ6aG5XHJcbiAgICogQHBhcmFtIHVybCDorr7nva7pobXpnaIgVVJMXHJcbiAgICogQHBhcmFtIG9wdGlvbnNcclxuICAgKi9cclxuICBzdGF0aWMgcmVnaXN0ZXJBbGwodXJsOiBzdHJpbmcsIG9wdGlvbnM6IGFueVtdKSB7XHJcbiAgICBNZW51Q21kLnJlZ2lzdGVyKCfmm7TlpJrorr7nva4nLCAoKSA9PiB7XHJcbiAgICAgIHdpbmRvdy5vcGVuKHVybCwgJ19ibGFuaycpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgZm9yIChjb25zdCBvcHRpb24gb2Ygb3B0aW9ucykge1xyXG4gICAgICAvLyBUT0RPIOOAkOiwg+ivleOAkeS4jeS/neeVmemAiemhueeahOWAvO+8jOavj+asoemDveS7jiBTdG9yZSDkuK3ojrflj5ZcclxuICAgICAgLy8gU3RvcmUuc2V0KG9wdGlvbi5uYW1lLCBudWxsKTtcclxuXHJcbiAgICAgIGxldCBzdG9yZU9wdGlvbiA9IFN0b3JlLmdldChvcHRpb24ubmFtZSkgPyBKU09OLnBhcnNlKFN0b3JlLmdldChvcHRpb24ubmFtZSkpIDogbnVsbDtcclxuICAgICAgLy8g5aaC5p6c6YCJ6aG55LiN5a2Y5ZyoIHx8IOeJiOacrOS4jeS4gOiHtCDml7bph43nva7pgInpoblcclxuICAgICAgaWYgKHN0b3JlT3B0aW9uID09PSBudWxsIHx8ICFzdG9yZU9wdGlvblsndmVyc2lvbiddIHx8IHN0b3JlT3B0aW9uWyd2ZXJzaW9uJ10gPCBvcHRpb24udmVyc2lvbikge1xyXG4gICAgICAgIFN0b3JlLnNldChvcHRpb24ubmFtZSwgSlNPTi5zdHJpbmdpZnkob3B0aW9uKSk7XHJcbiAgICAgICAgc3RvcmVPcHRpb24gPSBvcHRpb247XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5yZWdpc3RlckJvb2xPcHRpb24oc3RvcmVPcHRpb24pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICog5Zyo6aG16Z2i5Lit5Yqg6L296YCJ6aG5XHJcbiAgICovXHJcbiAgc3RhdGljIGxvYWRJbkdyZWFzeWZvcmsoc2NyaXB0SWQ6IG51bWJlciwgbG9hZE9wdGlvbkNvbnRlbnRGbjogRnVuY3Rpb24pIHtcclxuICAgIGlmIChsb2NhdGlvbi5ob3N0ICE9PSAnZ3JlYXN5Zm9yay5vcmcnIHx8IGxvY2F0aW9uLmhyZWYuaW5kZXhPZignL3NjcmlwdHMvJyArIHNjcmlwdElkKSA9PSAtMSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBjb25zdCBzZWxlY3RvciA9IHtcclxuICAgICAgc2NyaXB0TGlua3M6ICcjc2NyaXB0LWxpbmtzJyxcclxuICAgICAgc2NyaXB0T3B0aW9uczogJyNzY3JpcHQtb3B0aW9ucycsXHJcbiAgICAgIHNjcmlwdENvbnRlbnQ6ICcjc2NyaXB0LWNvbnRlbnQnLFxyXG4gICAgfVxyXG4gICAgY29uc3QgJGJvZHkgPSAkKGRvY3VtZW50LmJvZHkpLCAkc2NyaXB0TGlua3MgPSAkKHNlbGVjdG9yLnNjcmlwdExpbmtzKSwgJHNjcmlwdENvbnRlbnQgPSAkKHNlbGVjdG9yLnNjcmlwdENvbnRlbnQpO1xyXG5cclxuICAgIC8vIOa3u+WKoOiEmuacrOiuvue9rueahOmAiemhueWNoVxyXG4gICAgJHNjcmlwdExpbmtzLmNoaWxkcmVuKCdsaTplcSgwKScpLmFmdGVyKGA8bGk+PGEgaHJlZj1cImphdmFzY3JpcHQ6O1wiIGlkPVwic2NyaXB0LW9wdGlvbnNcIj7ohJrmnKzorr7nva48L2E+PC9saT5gKVxyXG4gICAgLy8g6ISa5pys6K6+572u6YCJ6aG554K55Ye75LqL5Lu2XHJcbiAgICAkYm9keS5vbignY2xpY2snLCBzZWxlY3Rvci5zY3JpcHRPcHRpb25zLCAoKSA9PiB7XHJcbiAgICAgIC8vIOenu+mZpOW3sumAieS4remAiemhueeahOagt+W8j1xyXG4gICAgICBjb25zdCAkY3VycmVudExpID0gJHNjcmlwdExpbmtzLmNoaWxkcmVuKCdsaS5jdXJyZW50Jyk7XHJcbiAgICAgICRjdXJyZW50TGkuaHRtbChgPGEgaHJlZj1cIiR7bG9jYXRpb24uaHJlZn1cIj4keyRjdXJyZW50TGkudGV4dCgpfTwvYT5gKTtcclxuICAgICAgJGN1cnJlbnRMaS5yZW1vdmVDbGFzcygnY3VycmVudCcpO1xyXG5cclxuICAgICAgLy8g5re75Yqg6YCJ5Lit6YCJ6aG555qE5qC35byPXHJcbiAgICAgIGNvbnN0ICRzY3JpcHRPcHRpb25zID0gJChzZWxlY3Rvci5zY3JpcHRPcHRpb25zKTtcclxuICAgICAgJHNjcmlwdE9wdGlvbnMucGFyZW50KCkuYWRkQ2xhc3MoJ2N1cnJlbnQnKTtcclxuXHJcbiAgICAgIGxvYWRPcHRpb25Db250ZW50Rm4oJHNjcmlwdENvbnRlbnQpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCBTdG9yZSBmcm9tIFwiQHV0aWxzL2dtL1N0b3JlXCI7XHJcbmltcG9ydCBNZW51Q21kIGZyb20gXCJAdXRpbHMvZ20vTWVudUNtZFwiO1xyXG5pbXBvcnQgQ29tbW9uT3B0aW9ucyBmcm9tIFwiQHV0aWxzL0NvbW1vbk9wdGlvbnNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE9wdGlvbnMge1xyXG5cclxuICBwcml2YXRlIHN0YXRpYyBTQ1JJUFRfSUQgPSA0NDA4NTQ7XHJcblxyXG4gIC8qKlxyXG4gICAqIOmAiemhuSBLZXlcclxuICAgKi9cclxuICBzdGF0aWMgS2V5cyA9IHtcclxuICAgIHJlbW92ZUJhcjogJ3JlbW92ZUJhcicsXHJcbiAgICBqaW5yaXNoaWNpOiAnamlucmlzaGljaScsXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDpgInpoblcclxuICAgKiBAcHJpdmF0ZVxyXG4gICAqL1xyXG4gIHByb3RlY3RlZCBzdGF0aWMgb3B0aW9ucyA9IFtcclxuICAgIHtsYWJlbDogJ+makOiXj+adoeW5hScsIG5hbWU6IHRoaXMuS2V5cy5yZW1vdmVCYXIsIHZlcnNpb246IDEsIHZhbHVlOiBmYWxzZSwgbWVudUNtZElkOiBudWxsfSxcclxuICAgIHtsYWJlbDogJ+S7iuaXpeivl+ivjScsIG5hbWU6IHRoaXMuS2V5cy5qaW5yaXNoaWNpLCB2ZXJzaW9uOiAxLCB2YWx1ZTogZmFsc2UsIG1lbnVDbWRJZDogbnVsbCwgdG9rZW46ICcnfVxyXG4gIF07XHJcblxyXG4gIC8qKlxyXG4gICAqIOazqOWGjCBib29sIOexu+Wei+eahOmAiemhuVxyXG4gICAqIEBwYXJhbSBvcHRpb24g6YCJ6aG5XHJcbiAgICovXHJcbiAgc3RhdGljIHJlZ2lzdGVyQm9vbE9wdGlvbihvcHRpb246IGFueSkge1xyXG4gICAgQ29tbW9uT3B0aW9ucy5yZWdpc3RlckJvb2xPcHRpb24ob3B0aW9uKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIOazqOWGjOaJgOaciemAiemhuVxyXG4gICAqL1xyXG4gIHN0YXRpYyByZWdpc3RlckFsbCgpIHtcclxuICAgIENvbW1vbk9wdGlvbnMucmVnaXN0ZXJBbGwoJ2h0dHBzOi8vZ3JlYXN5Zm9yay5vcmcvc2NyaXB0cy8nICsgdGhpcy5TQ1JJUFRfSUQsIHRoaXMub3B0aW9ucyk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDlnKjpobXpnaLkuK3liqDovb3pgInpoblcclxuICAgKi9cclxuICBzdGF0aWMgbG9hZEluR3JlYXN5Zm9yaygpIHtcclxuICAgIENvbW1vbk9wdGlvbnMubG9hZEluR3JlYXN5Zm9yayh0aGlzLlNDUklQVF9JRCwgKCRzY3JpcHRDb250ZW50KSA9PiB7XHJcbiAgICAgIC8vIOa3u+WKoOiEmuacrOiuvue9rueahOWGheWuuVxyXG4gICAgICBsZXQgc2NyaXB0Q29udGVudCA9ICcnO1xyXG4gICAgICBmb3IgKGNvbnN0IG9wdGlvbiBvZiB0aGlzLm9wdGlvbnMpIHtcclxuICAgICAgICBjb25zdCBzdG9yZU9wdGlvbiA9IEpTT04ucGFyc2UoU3RvcmUuZ2V0KG9wdGlvbi5uYW1lKSksIG9wdGlvbk5hbWUgPSBzdG9yZU9wdGlvbi5uYW1lLCBvcHRpb25WYWwgPSBzdG9yZU9wdGlvbi52YWx1ZTtcclxuXHJcbiAgICAgICAgc2NyaXB0Q29udGVudCArPSBgPGgzPiR7b3B0aW9uLmxhYmVsfTwvaDM+YDtcclxuICAgICAgICBzd2l0Y2ggKG9wdGlvbk5hbWUpIHtcclxuICAgICAgICAgIGNhc2UgdGhpcy5LZXlzLnJlbW92ZUJhcjpcclxuICAgICAgICAgICAgc2NyaXB0Q29udGVudCArPSBgPGxhYmVsPjxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBpZD1cInNjcmlwdC1vcHRpb25zLSR7b3B0aW9uTmFtZX1cIiAke29wdGlvblZhbCA/ICdjaGVja2VkJyA6ICcnfT4g5piv5ZCm6ZqQ6JeP5p2h5bmF77yI5Yu+6YCJ5ZCO5bCG6ZqQ6JeP5p2h5bmF6ICM5LiN5piv5pu/5o2i5YW25YaF5a6577yJPC9sYWJlbD5gO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGNhc2UgdGhpcy5LZXlzLmppbnJpc2hpY2k6XHJcbiAgICAgICAgICAgIHNjcmlwdENvbnRlbnQgKz0gYDxsYWJlbD48aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgaWQ9XCJzY3JpcHQtb3B0aW9ucy0ke29wdGlvbk5hbWV9LWVuYWJsZWRcIiAke29wdGlvblZhbCA/ICdjaGVja2VkJyA6ICcnfT4g5ZCv55SoPGEgaHJlZj1cImh0dHBzOi8vd3d3LmppbnJpc2hpY2kuY29tXCIgdGFyZ2V0ID0gXCJfYmxhbmtcIj7ku4rml6Xor5for408L2E+77yI5LuN6ZyA5Y+W5raI5Yu+6YCJ4oCc5piv5ZCm6ZqQ6JeP5p2h5bmF4oCd5omN6IO955Sf5pWI77yJPC9sYWJlbD5gO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgJHNjcmlwdENvbnRlbnQuaHRtbChzY3JpcHRDb250ZW50KTtcclxuXHJcbiAgICAgIGNvbnN0ICRib2R5ID0gJChkb2N1bWVudC5ib2R5KTtcclxuICAgICAgLy8gcmVnaW9uIOa3u+WKoOiEmuacrOiuvue9rueahOS6i+S7tlxyXG4gICAgICAvLyDmmK/lkKbpmpDol4/mnaHluYVcclxuICAgICAgbGV0IG9wdGlvblNlbGVjdG9yID0gJyNzY3JpcHQtb3B0aW9ucy0nICsgdGhpcy5LZXlzLnJlbW92ZUJhcjtcclxuICAgICAgJGJvZHkub24oJ2NoYW5nZScsIG9wdGlvblNlbGVjdG9yLCAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgcmVtb3ZlQmFyT3B0aW9uID0gSlNPTi5wYXJzZShTdG9yZS5nZXQodGhpcy5LZXlzLnJlbW92ZUJhcikpO1xyXG4gICAgICAgIHJlbW92ZUJhck9wdGlvbi52YWx1ZSA9ICFyZW1vdmVCYXJPcHRpb24udmFsdWU7XHJcbiAgICAgICAgLy8g6YeN5paw5rOo5YaM6I+c5Y2VXHJcbiAgICAgICAgTWVudUNtZC51bnJlZ2lzdGVyKHJlbW92ZUJhck9wdGlvbi5tZW51Q21kSWQpO1xyXG4gICAgICAgIHRoaXMucmVnaXN0ZXJCb29sT3B0aW9uKHJlbW92ZUJhck9wdGlvbik7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgLy8g5ZCv55So5LuK5pel6K+X6K+NXHJcbiAgICAgIG9wdGlvblNlbGVjdG9yID0gJyNzY3JpcHQtb3B0aW9ucy0nICsgdGhpcy5LZXlzLmppbnJpc2hpY2kgKyAnLWVuYWJsZWQnO1xyXG4gICAgICAkYm9keS5vbignY2hhbmdlJywgb3B0aW9uU2VsZWN0b3IsICgpID0+IHtcclxuICAgICAgICBjb25zdCBqaW5yaXNoaWNpT3B0aW9uID0gSlNPTi5wYXJzZShTdG9yZS5nZXQodGhpcy5LZXlzLmppbnJpc2hpY2kpKTtcclxuICAgICAgICBqaW5yaXNoaWNpT3B0aW9uLnZhbHVlID0gIWppbnJpc2hpY2lPcHRpb24udmFsdWU7XHJcbiAgICAgICAgLy8g6YeN5paw5rOo5YaM6I+c5Y2VXHJcbiAgICAgICAgTWVudUNtZC51bnJlZ2lzdGVyKGppbnJpc2hpY2lPcHRpb24ubWVudUNtZElkKTtcclxuICAgICAgICB0aGlzLnJlZ2lzdGVyQm9vbE9wdGlvbihqaW5yaXNoaWNpT3B0aW9uKTtcclxuICAgICAgfSk7XHJcbiAgICAgIC8vIGVuZHJlZ2lvblxyXG4gICAgfSlcclxuICB9XHJcbn1cclxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgSnVuaXQge1xyXG5cclxuICBwcml2YXRlIHN0YXRpYyBzZWxlY3RvcnMgPSB7XHJcbiAgICBqdW5pdEFib3V0OiAnI2Fib3V0JyxcclxuICAgIGp1bml0TG9nbzogJ2ltZ1tzcmM9XCIvanVuaXQ1L2Fzc2V0cy9pbWcvanVuaXQ1LWxvZ28ucG5nXCJdJyxcclxuICAgIGp1bml0RmF2aWNvbjogJ2xpbmtbcmVsPVwiaWNvblwiXScsXHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHN0YXRpYyBqdW5pdExvZ29VcmwgPSAnaHR0cHM6Ly9yYXcua2tnaXRodWIuY29tL2R1YW5sdWFuL3RhbXBlcm1vbmtleS1zY3JpcHRzL21haW4vY29yZS1zb2NpYWxpc3QtdmFsdWVzL3NyYy9qdW5pdC9pbWdzL2p1bml0NS1sb2dvLnBuZydcclxuXHJcbiAgc3RhdGljIHJlcGxhY2UoKSB7XHJcbiAgICBpZiAobG9jYXRpb24uaHJlZiA9PT0gJ2h0dHBzOi8vanVuaXQub3JnL2p1bml0NS8nKSB7XHJcbiAgICAgICQodGhpcy5zZWxlY3RvcnMuanVuaXRBYm91dCkucHJldkFsbCgpLnJlbW92ZSgpO1xyXG4gICAgICAkKHRoaXMuc2VsZWN0b3JzLmp1bml0TG9nbykuYXR0cignc3JjJywgdGhpcy5qdW5pdExvZ29VcmwpO1xyXG4gICAgICAkKHRoaXMuc2VsZWN0b3JzLmp1bml0RmF2aWNvbikuYXR0cignaHJlZicsIHRoaXMuanVuaXRMb2dvVXJsKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiZXhwb3J0IGVudW0gSHR0cERhdGFUeXBlIHtcclxuICBKU09OID0gXCJKU09OXCJcclxufVxyXG4iLCJpbXBvcnQge0h0dHBEYXRhVHlwZX0gZnJvbSBcIi4vZW51bS9IdHRwRGF0YVR5cGVcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlcXVlc3Qge1xyXG5cclxuICBzdGF0aWMgYXN5bmMgZ2V0KG9wdGlvbjogeyB1cmw6IHN0cmluZywgZGF0YVR5cGU/OiBIdHRwRGF0YVR5cGUsIHN5bmNocm9ub3VzPzogYm9vbGVhbiwgaGVhZGVycz86IHt9LCBvbmxvYWQ/OiBGdW5jdGlvbiB9KTogUHJvbWlzZTxhbnk+IHtcclxuICAgIG9wdGlvblsnbWV0aG9kJ10gPSAnR0VUJztcclxuXHJcbiAgICAvLyDlkIzmraXml7bov5Tlm54gUHJvbWlzZVxyXG4gICAgaWYgKG9wdGlvbi5zeW5jaHJvbm91cykge1xyXG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgIEdNX3htbGh0dHBSZXF1ZXN0KHtcclxuICAgICAgICAgIC4uLm9wdGlvbixcclxuICAgICAgICAgIG9ubG9hZDogKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgIHJlc29sdmUob3B0aW9uLmRhdGFUeXBlID09PSBIdHRwRGF0YVR5cGUuSlNPTiA/IEpTT04ucGFyc2UocmVzcG9uc2UucmVzcG9uc2VUZXh0KSA6IHJlc3BvbnNlLnJlc3BvbnNlVGV4dCk7XHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgb25lcnJvcjogKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgIHJlamVjdChlcnJvcik7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zdCBvbmxvYWQxID0gZnVuY3Rpb24gKGRldGFpbHMpIHtcclxuICAgICAgICBsZXQgcmVzcG9uc2U7XHJcbiAgICAgICAgaWYgKG9wdGlvbi5kYXRhVHlwZSA9PT0gSHR0cERhdGFUeXBlLkpTT04pIHtcclxuICAgICAgICAgIHJlc3BvbnNlID0gSlNPTi5wYXJzZShkZXRhaWxzLnJlc3BvbnNlVGV4dCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHJlc3BvbnNlID0gZGV0YWlscy5yZXNwb25zZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgb3B0aW9uLm9ubG9hZChyZXNwb25zZSk7XHJcbiAgICAgIH1cclxuICAgICAgR01feG1saHR0cFJlcXVlc3Qoey4uLm9wdGlvbiwgb25sb2FkOiBvbmxvYWQxfSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCBTdG9yZSBmcm9tIFwiQHV0aWxzL2dtL1N0b3JlXCI7XHJcbmltcG9ydCBSZXF1ZXN0IGZyb20gXCJAdXRpbHMvZ20vUmVxdWVzdFwiO1xyXG5pbXBvcnQgT3B0aW9ucyBmcm9tIFwiLi4vT3B0aW9uc1wiO1xyXG5pbXBvcnQge0h0dHBEYXRhVHlwZX0gZnJvbSBcIkB1dGlscy9nbS9lbnVtL0h0dHBEYXRhVHlwZVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmFyIHtcclxuXHJcbiAgLyoqXHJcbiAgICog5pu/5o2i5p2h5bmF55qE6YCJ5oup5ZmoXHJcbiAgICovXHJcbiAgc3RhdGljIHJlcGxhY2VCYXJTZWxlY3RvciA9IHtcclxuICAgIGJhcjogJy5jc3ZfYmFyJyxcclxuICAgIGJhclVsOiAnLmNzdl9iYXIgLmNzdl9iYXJfdWwnLFxyXG4gIH07XHJcbiAgLyoqXHJcbiAgICog5pu/5o2i5ZCO55qE5p2h5bmF5Y676Zmk56m65qC85o2i6KGM5ZCO55qE5paH5pysXHJcbiAgICogQHByaXZhdGVcclxuICAgKi9cclxuICBwcml2YXRlIHN0YXRpYyB0eHQgPSAn5a+M5by65rCR5Li75paH5piO5ZKM6LCQ6Ieq55Sx5bmz562J5YWs5q2j5rOV5rK754ix5Zu95pWs5Lia6K+a5L+h5Y+L5ZaEUHJvc3Blcml0eURlbW9jcmFjeUNpdmlsaXR5SGFybW9ueUZyZWVkb21FcXVhbGl0eUp1c3RpY2VSdWxlb2ZsYXdQYXRyaW90aXNtRGVkaWNhdGlvbkludGVncml0eUZyaWVuZHNoaXAnO1xyXG4gIC8qKlxyXG4gICAqIOaYr+WQpuWQr+eUqOS7iuaXpeivl+ivjVxyXG4gICAqIEBwcml2YXRlXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBzdGF0aWMgc3RvcmVKaW5yaXNoaWNpVmFsID0gZmFsc2U7XHJcbiAgLyoqXHJcbiAgICog5LuK5pel6K+X6K+N5YaF5a65XHJcbiAgICogQHByaXZhdGVcclxuICAgKi9cclxuICBwcml2YXRlIHN0YXRpYyBqaW5yaXNoaWNpQ29udGVudCA9ICcnO1xyXG5cclxuICAvKipcclxuICAgKiDmm7/mjaLmnaHluYVcclxuICAgKiBAcGFyYW0gb3B0aW9ucyB7XHJcbiAgICogICBiYXJTZWxlY3Rvcjogc3RyaW5nLCAgICAgICAgICAgICAgLy8g5p2h5bmF6YCJ5oup5ZmoXHJcbiAgICogICBpc09ic2VydmVCYXI6IGJvb2xlYW4sICAgICAgICAgICAgLy8g5piv5ZCm55uR5ZCs5p2h5bmF5Y+Y5YyW77yM5Lya55uR5ZCs5Lik5qyh5Y+Y5YyW77yM6YeN5paw5pu/5o2i44CC6YWN5ZCIIGZvbGxvd1VwT2JzZXJ2ZVNlbGVjdG9yIOWQjue7reebkeWQrFxyXG4gICAqICAgZm9sbG93VXBPYnNlcnZlU2VsZWN0b3I/OiBzdHJpbmcsIC8vIOWQjue7reebkeWQrOmAieaLqeWZqO+8jOWNs+adoeW5heabv+aNouWQjuacieWPr+iDveS8muWGjeWPmOWbnuWOn+agt++8jOatpOWkhOWwseaYr+WGjeebkeWQrOeahOeItue6p+mAieaLqeWZqO+8jGlzT2JzZXJ2ZUJhciDkuLogdHJ1ZSDml7bnlJ/mlYhcclxuICAgKiAgIGhpZGVCYXJTZWxlY3Rvcjogc3RyaW5nLCAgICAgICAgICAvLyDpmpDol4/mnaHluYXpgInmi6nlmahcclxuICAgKiAgIGlzT2JzZXJ2ZUhpZGVCYXI6IGJvb2xlYW4sICAgICAgICAvLyDmmK/lkKbnm5HlkKzpmpDol4/mnaHluYXlj5jljJbvvIzkvJrnm5HlkKzkuKTmrKHlj5jljJbvvIzph43mlrDpmpDol4/jgIJcclxuICAgKiAgIHJlcGxhY2VCYXJDYWxsYmFjaz86IEZ1bmN0aW9uLCAgICAvLyDmr4/mrKHmm7/mjaLlkI7lm57osINcclxuICAgKiAgIGppbnJpc2hpY2lDYWxsYmFjaz86IEZ1bmN0aW9uLCAgICAvLyDmr4/mrKHmm7/mjaLkuLrku4rml6Xor5for43lkI7lm57osINcclxuICAgKiAgIGhpZGVCYXJDYWxsYmFjaz8gRnVuY3Rpb24gICAgICAgICAvLyDpmpDol4/lkI7lm57osINcclxuICAgKiB9XHJcbiAgICovXHJcbiAgc3RhdGljIHJlcGxhY2Uob3B0aW9uczogeyBiYXJTZWxlY3Rvcjogc3RyaW5nLCBpc09ic2VydmVCYXI6IGJvb2xlYW4sIGZvbGxvd1VwT2JzZXJ2ZVNlbGVjdG9yPzogc3RyaW5nLCBoaWRlQmFyU2VsZWN0b3I/OiBzdHJpbmcsIGlzT2JzZXJ2ZUhpZGVCYXI/OiBib29sZWFuLCByZXBsYWNlQmFyQ2FsbGJhY2s/OiBGdW5jdGlvbiwgamlucmlzaGljaUNhbGxiYWNrPzogRnVuY3Rpb24sIGhpZGVCYXJDYWxsYmFjaz86IEZ1bmN0aW9uIH0pIHtcclxuICAgIGlmICghJChvcHRpb25zLmJhclNlbGVjdG9yKS50ZXh0KCkubWF0Y2goL3VrcmFpbmV85LmM5YWL5YWwfGJsYWNrfOm7keS6ui9pKSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICAvLyDkuIDoiKzpmpDol4/mnaHluYXlkozmm7/mjaLmnaHluYXnm7jlkIxcclxuICAgIGlmICghb3B0aW9ucy5oaWRlQmFyU2VsZWN0b3IpIHtcclxuICAgICAgb3B0aW9ucy5oaWRlQmFyU2VsZWN0b3IgPSBvcHRpb25zLmJhclNlbGVjdG9yO1xyXG4gICAgfVxyXG4gICAgaWYgKCFvcHRpb25zLmlzT2JzZXJ2ZUhpZGVCYXIpIHtcclxuICAgICAgb3B0aW9ucy5pc09ic2VydmVIaWRlQmFyID0gb3B0aW9ucy5pc09ic2VydmVCYXI7XHJcbiAgICB9XHJcblxyXG4gICAgLy8g6ZqQ6JeP5qiq5bmF6K6+572u5Yu+6YCJXHJcbiAgICBpZiAoSlNPTi5wYXJzZShTdG9yZS5nZXQoT3B0aW9ucy5LZXlzLnJlbW92ZUJhcikpLnZhbHVlKSB7XHJcbiAgICAgIHRoaXMuaGlkZUJhcihvcHRpb25zKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuc3RvcmVKaW5yaXNoaWNpVmFsID0gSlNPTi5wYXJzZShTdG9yZS5nZXQoT3B0aW9ucy5LZXlzLmppbnJpc2hpY2kpKS52YWx1ZTtcclxuICAgIGlmICh0aGlzLnN0b3JlSmlucmlzaGljaVZhbCkge1xyXG4gICAgICB0aGlzLmdldEppbnJpc2hpY2koKS50aGVuKChkYXRhOiBhbnkpID0+IHtcclxuICAgICAgICB0aGlzLmppbnJpc2hpY2lDb250ZW50ID0gZGF0YTtcclxuICAgICAgICB0aGlzLnJlcGxhY2VPYnNlcnZlcihvcHRpb25zKTtcclxuICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnJlcGxhY2VPYnNlcnZlcihvcHRpb25zKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIOmakOiXj+adoeW5hVxyXG4gICAqIEBwYXJhbSBvcHRpb25zXHJcbiAgICogQHByaXZhdGVcclxuICAgKi9cclxuICBwcml2YXRlIHN0YXRpYyBoaWRlQmFyKG9wdGlvbnM6IHsgaGlkZUJhclNlbGVjdG9yPzogc3RyaW5nLCBpc09ic2VydmVIaWRlQmFyPzogYm9vbGVhbiwgaGlkZUJhckNhbGxiYWNrPzogRnVuY3Rpb24gfSkge1xyXG4gICAgLy8g6ZqQ6JeP5qiq5bmFXHJcbiAgICAkKG9wdGlvbnMuaGlkZUJhclNlbGVjdG9yKS5oaWRlKCk7XHJcbiAgICBpZiAob3B0aW9ucy5pc09ic2VydmVIaWRlQmFyKSB7XHJcbiAgICAgIGxldCBpID0gMDtcclxuICAgICAgLy8g6ZqQ6JeP5p2h5bmF6aaW5qyh5Yqg6L2977ya55uR5ZCs5p2h5bmF5Y+Y5YyW77yM5Y+Y5YyW5ZCO5YaN5qyh5omn6KGMXHJcbiAgICAgIGNvbnN0IG9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoKCkgPT4ge1xyXG4gICAgICAgICQob3B0aW9ucy5oaWRlQmFyU2VsZWN0b3IpLmhpZGUoKTtcclxuICAgICAgICAvLyDmm7/mjaLkuKTmrKHlkI7nu5PmnZ/nm5HlkKxcclxuICAgICAgICBpZiAoaSA+PSAxKSB7XHJcbiAgICAgICAgICBvYnNlcnZlci5kaXNjb25uZWN0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGkrKztcclxuICAgICAgfSk7XHJcbiAgICAgIG9ic2VydmVyLm9ic2VydmUoJChvcHRpb25zLmhpZGVCYXJTZWxlY3RvcilbMF0sIHtjaGlsZExpc3Q6IHRydWUsIHN1YnRyZWU6IHRydWV9KTtcclxuICAgIH1cclxuICAgIGlmIChvcHRpb25zLmhpZGVCYXJDYWxsYmFjaykge1xyXG4gICAgICBvcHRpb25zLmhpZGVCYXJDYWxsYmFjaygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICog5pu/5o2i5p2h5bmF55uR5ZCsXHJcbiAgICogQHBhcmFtIG9wdGlvbnNcclxuICAgKiBAcHJpdmF0ZVxyXG4gICAqL1xyXG4gIHByaXZhdGUgc3RhdGljIHJlcGxhY2VPYnNlcnZlcihvcHRpb25zOiB7IGJhclNlbGVjdG9yOiBzdHJpbmcsIGlzT2JzZXJ2ZUJhcjogYm9vbGVhbiwgZm9sbG93VXBPYnNlcnZlU2VsZWN0b3I/OiBzdHJpbmcsIHJlcGxhY2VCYXJDYWxsYmFjaz86IEZ1bmN0aW9uLCBqaW5yaXNoaWNpQ2FsbGJhY2s/OiBGdW5jdGlvbiB9KSB7XHJcbiAgICAvLyDpppbmrKHmm7/mjaLmqKrluYVcclxuICAgIHRoaXMucmVwbGFjZUJhcihvcHRpb25zLmJhclNlbGVjdG9yLCBvcHRpb25zLnJlcGxhY2VCYXJDYWxsYmFjaywgb3B0aW9ucy5qaW5yaXNoaWNpQ2FsbGJhY2spO1xyXG4gICAgaWYgKCFvcHRpb25zLmlzT2JzZXJ2ZUJhcikge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBsZXQgaSA9IDA7XHJcbiAgICAvLyDmnaHluYXpppbmrKHliqDovb3vvJrnm5HlkKzmnaHluYXlj5jljJbvvIzlj5jljJblkI7lho3mrKHmiafooYxcclxuICAgIGNvbnN0IG9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoKCkgPT4ge1xyXG4gICAgICB0aGlzLnJlcGxhY2VCYXIob3B0aW9ucy5iYXJTZWxlY3Rvciwgb3B0aW9ucy5yZXBsYWNlQmFyQ2FsbGJhY2ssIG9wdGlvbnMuamlucmlzaGljaUNhbGxiYWNrKTtcclxuICAgICAgLy8g5pu/5o2i5Lik5qyh5ZCO57uT5p2f55uR5ZCsXHJcbiAgICAgIGlmIChpID49IDEpIHtcclxuICAgICAgICBvYnNlcnZlci5kaXNjb25uZWN0KCk7XHJcbiAgICAgIH1cclxuICAgICAgaSsrO1xyXG4gICAgfSk7XHJcbiAgICBvYnNlcnZlci5vYnNlcnZlKCQob3B0aW9ucy5iYXJTZWxlY3RvcilbMF0sIHtjaGlsZExpc3Q6IHRydWV9KTtcclxuXHJcbiAgICBpZiAob3B0aW9ucy5mb2xsb3dVcE9ic2VydmVTZWxlY3Rvcikge1xyXG4gICAgICAvLyDlkI7nu63lj5jljJZcclxuICAgICAgbmV3IE11dGF0aW9uT2JzZXJ2ZXIoKCkgPT4ge1xyXG4gICAgICAgIHRoaXMucmVwbGFjZUJhcihvcHRpb25zLmJhclNlbGVjdG9yLCBvcHRpb25zLnJlcGxhY2VCYXJDYWxsYmFjaywgb3B0aW9ucy5qaW5yaXNoaWNpQ2FsbGJhY2spO1xyXG4gICAgICB9KS5vYnNlcnZlKCQob3B0aW9ucy5mb2xsb3dVcE9ic2VydmVTZWxlY3RvcilbMF0sIHtjaGlsZExpc3Q6IHRydWV9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIOWunumZheabv+aNouadoeW5hVxyXG4gICAqIEBwYXJhbSBzZWxlY3RvciDmnaHluYXpgInmi6nlmahcclxuICAgKiBAcGFyYW0gcmVwbGFjZUJhckNhbGxiYWNrIOabv+aNouWQjuWbnuiwg1xyXG4gICAqIEBwYXJhbSBqaW5yaXNoaWNpQ2FsbGJhY2sg5pu/5o2i5Li65LuK5pel6K+X6K+N5ZCO5Zue6LCDXHJcbiAgICogQHByaXZhdGVcclxuICAgKi9cclxuICBwcml2YXRlIHN0YXRpYyByZXBsYWNlQmFyKHNlbGVjdG9yOiBzdHJpbmcsIHJlcGxhY2VCYXJDYWxsYmFjaz86IEZ1bmN0aW9uLCBqaW5yaXNoaWNpQ2FsbGJhY2s/OiBGdW5jdGlvbikge1xyXG4gICAgaWYgKCQoJChzZWxlY3RvcilbMF0pLnRleHQoKS5yZXBsYWNlKC9cXHMrL2csIFwiXCIpID09PSBCYXIudHh0KSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICAvLyDmm7/mjaLkuLrku4rml6Xor5for41cclxuICAgIGlmICh0aGlzLnN0b3JlSmlucmlzaGljaVZhbCkge1xyXG4gICAgICAkKHNlbGVjdG9yKS5jc3MoeydtaW5IZWlnaHQnOiAnMzBweCcsICdsaW5lSGVpZ2h0JzogJzMwcHgnfSk7XHJcbiAgICAgICQoc2VsZWN0b3IpLmh0bWwoYFxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjc3ZfYmFyXCI+XHJcbiAgICAgICAgICAke3RoaXMuamlucmlzaGljaUNvbnRlbnR9XHJcbiAgICAgICAgPC9kaXY+YFxyXG4gICAgICApO1xyXG4gICAgICBpZiAoamlucmlzaGljaUNhbGxiYWNrKSB7XHJcbiAgICAgICAgamlucmlzaGljaUNhbGxiYWNrKCk7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvLyDmm7/mjaLkuLrnpL7kvJrkuLvkuYnmoLjlv4Pku7flgLzop4JcclxuICAgICQoc2VsZWN0b3IpLmNzcyh7J21pbkhlaWdodCc6ICc0MHB4J30pO1xyXG4gICAgJChzZWxlY3RvcikuaHRtbChgXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNzdl9iYXJcIj5cclxuICAgICAgICAgIDx1bCBjbGFzcz0nY3N2X2Jhcl91bCc+PGxpPuWvjOW8ujwvbGk+PGxpPuawkeS4uzwvbGk+PGxpPuaWh+aYjjwvbGk+PGxpPuWSjOiwkDwvbGk+PGxpPuiHqueUsTwvbGk+PGxpPuW5s+etiTwvbGk+PGxpPuWFrOatozwvbGk+PGxpPuazleayuzwvbGk+PGxpPueIseWbvTwvbGk+PGxpPuaVrOS4mjwvbGk+PGxpPuivmuS/oTwvbGk+PGxpPuWPi+WWhDwvbGk+PC91bD48YnI+XHJcbiAgICAgICAgICA8dWwgY2xhc3M9J2Nzdl9iYXJfdWwnPjxsaT5Qcm9zcGVyaXR5PC9saT48bGk+RGVtb2NyYWN5PC9saT48bGk+Q2l2aWxpdHk8L2xpPjxsaT5IYXJtb255PC9saT48bGk+RnJlZWRvbTwvbGk+PGxpPkVxdWFsaXR5PC9saT48bGk+SnVzdGljZTwvbGk+PGxpPlJ1bGUgb2YgbGF3PC9saT48bGk+UGF0cmlvdGlzbTwvbGk+PGxpPkRlZGljYXRpb248L2xpPjxsaT5JbnRlZ3JpdHk8L2xpPjxsaT5GcmllbmRzaGlwPC9saT5cclxuICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgPC9kaXY+YFxyXG4gICAgKTtcclxuICAgIC8vIOmBv+WFjeWHuueOsOWkmuS4quWvvOiHtOagt+W8j+a3u+WKoOWksei0pVxyXG4gICAgY29uc3QgJGJhciA9ICQodGhpcy5yZXBsYWNlQmFyU2VsZWN0b3IuYmFyKTtcclxuICAgIGlmICgkYmFyLmxlbmd0aCA9PSAyKSB7XHJcbiAgICAgICRiYXIuZXEoMCkucmVtb3ZlKCk7XHJcbiAgICB9XHJcbiAgICBjb25zdCBiYXJVbFNlbGVjdG9yID0gdGhpcy5yZXBsYWNlQmFyU2VsZWN0b3IuYmFyVWw7XHJcbiAgICAkKGJhclVsU2VsZWN0b3IpLmNzcyh7J2Rpc3BsYXknOiAnaW5saW5lLWJsb2NrJywgJ2xpc3RTdHlsZSc6ICdub25lJywgJ21hcmdpbic6IDAsICdwYWRkaW5nJzogMCwgJ3dpZHRoJzogJ2F1dG8nfSk7XHJcbiAgICAkKGJhclVsU2VsZWN0b3IgKyAnIGxpJykuY3NzKHsnY29sb3InOiAnI0RFMjkxMCcsICdmb250V2VpZ2h0JzogJ2JvbGQnLCAnZm9udEZhbWlseSc6ICdLYWlUaScsICdmbG9hdCc6ICdsZWZ0JywgJ3BhZGRpbmdSaWdodCc6ICcxMHB4JywgJ21pbi13aWR0aCc6ICc4MHB4JywgJ3RleHRBbGlnbic6ICdjZW50ZXInfSk7XHJcbiAgICAkKGJhclVsU2VsZWN0b3IgKyAnOmZpcnN0JykuY3NzKCd2ZXJ0aWNhbEFsaWduJywgJ2JvdHRvbScpO1xyXG4gICAgJChiYXJVbFNlbGVjdG9yICsgJzpmaXJzdCBsaScpLmNzcygnZm9udFNpemUnLCAnMThweCcpO1xyXG4gICAgJChiYXJVbFNlbGVjdG9yICsgJzplcSgxKSBsaScpLmNzcygnZm9udFNpemUnLCAnMTNweCcpO1xyXG5cclxuICAgIGlmIChyZXBsYWNlQmFyQ2FsbGJhY2spIHtcclxuICAgICAgcmVwbGFjZUJhckNhbGxiYWNrKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDojrflj5bku4rml6Xor5for41cclxuICAgKiBAcHJpdmF0ZVxyXG4gICAqL1xyXG4gIHN0YXRpYyBhc3luYyBnZXRKaW5yaXNoaWNpKCkge1xyXG4gICAgbGV0IGppbnJpc2hpY2lPcHRpb24gPSBKU09OLnBhcnNlKFN0b3JlLmdldChPcHRpb25zLktleXMuamlucmlzaGljaSkpO1xyXG4gICAgaWYgKCFqaW5yaXNoaWNpT3B0aW9uLnZhbHVlKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgcmVzcG9uc2UgPSBhd2FpdCBSZXF1ZXN0LmdldCh7XHJcbiAgICAgIHVybDogJ2h0dHBzOi8vdjIuamlucmlzaGljaS5jb20vb25lLmpzb24nLFxyXG4gICAgICBkYXRhVHlwZTogSHR0cERhdGFUeXBlLkpTT04sXHJcbiAgICAgIC8vIGhlYWRlcnM6IHtcclxuICAgICAgLy8gICAnWC1Vc2VyLVRva2VuJzogamlucmlzaGljaU9wdGlvbi50b2tlbixcclxuICAgICAgLy8gfSxcclxuICAgICAgc3luY2hyb25vdXM6IHRydWVcclxuICAgIH0pO1xyXG5cclxuICAgIGlmICghcmVzcG9uc2UgfHwgcmVzcG9uc2Uuc3RhdHVzICE9PSAnc3VjY2VzcycpIHtcclxuICAgICAgY29uc29sZS5lcnJvcign5LuK5pel6K+X6K+N6I635Y+W5aSx6LSlJywgcmVzcG9uc2UpO1xyXG4gICAgfVxyXG4gICAgLy8gLy8g5a2Y5YKoIFRva2VuXHJcbiAgICAvLyBpZiAoamlucmlzaGljaU9wdGlvbi50b2tlbiAhPT0gcmVzcG9uc2UuZGF0YS50b2tlbikge1xyXG4gICAgLy8gICBqaW5yaXNoaWNpT3B0aW9uLnRva2VuID0gcmVzcG9uc2UuZGF0YS50b2tlbjtcclxuICAgIC8vICAgU3RvcmUuc2V0KE9wdGlvbnMuS2V5cy5qaW5yaXNoaWNpLCBKU09OLnN0cmluZ2lmeShqaW5yaXNoaWNpT3B0aW9uKSk7XHJcbiAgICAvLyB9XHJcbiAgICByZXR1cm4gcmVzcG9uc2UuZGF0YS5jb250ZW50ICsgJyDigJTigJQgJyArIHJlc3BvbnNlLmRhdGEub3JpZ2luLmF1dGhvciArICfjgIonICsgcmVzcG9uc2UuZGF0YS5vcmlnaW4udGl0bGUgKyAn44CLJztcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IEJhciBmcm9tIFwiLi4vLi4vY29tbW9uL0JhclwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29kZWNlcHQge1xyXG5cclxuICBzdGF0aWMgc2VsZWN0b3JzID0ge1xyXG4gICAgYmFyOiAnLnN1Yi1iYXIgLm1lc3NhZ2UnLFxyXG4gICAgaGlkZUJhcjogJy5zdWItYmFyJyxcclxuICB9XHJcblxyXG4gIHN0YXRpYyByZXBsYWNlKCkge1xyXG4gICAgaWYgKGxvY2F0aW9uLmhvc3QgPT09ICdjb2RlY2VwdC5pbycpIHtcclxuICAgICAgQmFyLnJlcGxhY2Uoe1xyXG4gICAgICAgIGJhclNlbGVjdG9yOiB0aGlzLnNlbGVjdG9ycy5iYXIsIGlzT2JzZXJ2ZUJhcjogZmFsc2UsIGhpZGVCYXJTZWxlY3RvcjogdGhpcy5zZWxlY3RvcnMuaGlkZUJhciwgaXNPYnNlcnZlSGlkZUJhcjogZmFsc2UsIGppbnJpc2hpY2lDYWxsYmFjazogKCkgPT4ge1xyXG4gICAgICAgICAgJCh0aGlzLnNlbGVjdG9ycy5iYXIpLmNzcygnY29sb3InLCAnI2VkZjJmNycpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEdpdGh1YiB7XHJcblxyXG4gIHN0YXRpYyBzZWxlY3RvcnMgPSB7XHJcbiAgICBub3RpY2U6ICcuYm9yZGVyLmpzLW5vdGljZSdcclxuICB9XHJcblxyXG4gIHN0YXRpYyByZXBsYWNlKCkge1xyXG4gICAgaWYgKGxvY2F0aW9uLmhyZWYgPT09ICdodHRwczovL2dpdGh1Yi5jb20vJykge1xyXG4gICAgICBjb25zdCAkbm90aWNlID0gJCh0aGlzLnNlbGVjdG9ycy5ub3RpY2UpO1xyXG4gICAgICBpZiAoJG5vdGljZS5sZW5ndGggPiAwICYmICRub3RpY2UudGV4dCgpLnRvTG93ZXJDYXNlKCkuaW5kZXhPZigndWtyYWluZScpICE9IC0xKSB7XHJcbiAgICAgICAgJG5vdGljZS5yZW1vdmUoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgQmFyIGZyb20gXCIuLi8uLi9jb21tb24vQmFyXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb2RlY2VwdCB7XHJcblxyXG4gIHN0YXRpYyBzZWxlY3RvcnMgPSB7XHJcbiAgICBiYXI6ICcudG9wLWJhcicsXHJcbiAgfVxyXG5cclxuICBzdGF0aWMgcmVwbGFjZSgpIHtcclxuICAgIGlmIChsb2NhdGlvbi5ob3N0ID09PSAnZG9jcy5uZXN0anMuY29tJykge1xyXG4gICAgICBCYXIucmVwbGFjZSh7XHJcbiAgICAgICAgYmFyU2VsZWN0b3I6IHRoaXMuc2VsZWN0b3JzLmJhciwgaXNPYnNlcnZlQmFyOiBmYWxzZSwgaGlkZUJhclNlbGVjdG9yOiB0aGlzLnNlbGVjdG9ycy5iYXIsIGlzT2JzZXJ2ZUhpZGVCYXI6IGZhbHNlLCByZXBsYWNlQmFyQ2FsbGJhY2s6ICgpID0+IHtcclxuICAgICAgICAgICQodGhpcy5zZWxlY3RvcnMuYmFyKS5jc3MoJ3BhZGRpbmcnLCAnMCcpO1xyXG4gICAgICAgIH0sIGppbnJpc2hpY2lDYWxsYmFjazogKCkgPT4ge1xyXG4gICAgICAgICAgJCh0aGlzLnNlbGVjdG9ycy5iYXIpLmNzcygnY29sb3InLCAnI2ZmZicpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCBCYXIgZnJvbSBcIi4uLy4uL2NvbW1vbi9CYXJcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVtYmVyIHtcclxuXHJcbiAgc3RhdGljIHNlbGVjdG9ycyA9IHtcclxuICAgIGJhcjogJy5jYWxsb3V0LWJhbm5lcicsXHJcbiAgfVxyXG5cclxuICBzdGF0aWMgcmVwbGFjZSgpIHtcclxuICAgIGlmIChsb2NhdGlvbi5ob3N0ID09PSAnZW1iZXJqcy5jb20nKSB7XHJcbiAgICAgIEJhci5yZXBsYWNlKHtcclxuICAgICAgICBiYXJTZWxlY3RvcjogdGhpcy5zZWxlY3RvcnMuYmFyLCBpc09ic2VydmVCYXI6IGZhbHNlLCBqaW5yaXNoaWNpQ2FsbGJhY2s6ICgpID0+IHtcclxuICAgICAgICAgICQodGhpcy5zZWxlY3RvcnMuYmFyKS5jc3MoJ2NvbG9yJywgJyNmZmYnKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgICAkKHRoaXMuc2VsZWN0b3JzLmJhcikuY3NzKHsnYmFja2dyb3VuZENvbG9yJzogJyMxYzFlMjQnLCAncGFkZGluZyc6IDB9KTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQW5ndWxhciB7XHJcblxyXG4gIHN0YXRpYyBzZWxlY3RvcnMgPSB7XHJcbiAgICBsb2dvOiAnaW1nW3NyYz1cIi9pbWFnZXMvbG9nb3MvamVua2lucy9KZW5raW5zLXN0b3AtdGhlLXdhci5zdmdcIl0nLFxyXG4gICAgcGFnZVRpdGxlOiAnLnBhZ2UtdGl0bGUnXHJcbiAgfVxyXG5cclxuICBzdGF0aWMgcmVwbGFjZSgpIHtcclxuICAgIGlmIChsb2NhdGlvbi5ob3N0ID09PSAnd3d3LmplbmtpbnMuaW8nKSB7XHJcbiAgICAgIC8vIOabv+aNouWbvuagh1xyXG4gICAgICAkKHRoaXMuc2VsZWN0b3JzLmxvZ28pLnJlcGxhY2VXaXRoKGA8aW1nIHNyYz1cIi9pbWFnZXMvbG9nb3MvamVua2lucy9KZW5raW5zLnN2Z1wiPmApO1xyXG5cclxuICAgICAgLy8g5Yig6Zmk6YCa55+lXHJcbiAgICAgICQodGhpcy5zZWxlY3RvcnMucGFnZVRpdGxlKS5uZXh0QWxsKFwicFwiKS5lYWNoKChpLCBlbCkgPT4ge1xyXG4gICAgICAgIGNvbnN0ICRlbCA9ICQoZWwpO1xyXG4gICAgICAgIGlmICgkZWwudGV4dCgpLnRvTG93ZXJDYXNlKCkuaW5kZXhPZigndWtyYWluZScpICE9IC0xKSB7XHJcbiAgICAgICAgICAkZWwucmVtb3ZlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgICAgJCh0aGlzLnNlbGVjdG9ycy5wYWdlVGl0bGUpLnBhcmVudCgpLmFwcGVuZCgnPGJyPjxicj48YnI+Jyk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFN2ZWx0ZU1hdGVyaWFsVWkge1xyXG5cclxuICBzdGF0aWMgc2VsZWN0b3JzID0ge1xyXG4gICAgYmFyOiAnLnVrcmFpbmUnLFxyXG4gIH1cclxuXHJcbiAgc3RhdGljIHJlcGxhY2UoKSB7XHJcbiAgICBpZiAobG9jYXRpb24uaG9zdCA9PT0gJ3N2ZWx0ZW1hdGVyaWFsdWkuY29tJykge1xyXG4gICAgICAkKHRoaXMuc2VsZWN0b3JzLmJhcikuYXR0cignY2xhc3MnLCAnJyk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCBCYXIgZnJvbSBcIi4uLy4uL2NvbW1vbi9CYXJcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN5bmN0aGluZyB7XHJcblxyXG4gIHN0YXRpYyBzZWxlY3RvcnMgPSB7XHJcbiAgICBiYXI6ICcuYWxlcnQnLFxyXG4gIH1cclxuXHJcbiAgc3RhdGljIHJlcGxhY2UoKSB7XHJcbiAgICBpZiAobG9jYXRpb24uaG9zdCA9PT0gJ3N5bmN0aGluZy5uZXQnKSB7XHJcbiAgICAgIEJhci5yZXBsYWNlKHtcclxuICAgICAgICBiYXJTZWxlY3RvcjogdGhpcy5zZWxlY3RvcnMuYmFyLCBpc09ic2VydmVCYXI6IGZhbHNlLCByZXBsYWNlQmFyQ2FsbGJhY2s6ICgpID0+IHtcclxuICAgICAgICAgICQodGhpcy5zZWxlY3RvcnMuYmFyKS5jc3MoJ3RleHRBbGlnbicsICdjZW50ZXInKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCIvLyA9PVVzZXJTY3JpcHQ9PVxyXG4vLyBAbmFtZSAgICAgICAgIOaKgOacr+i/nOemu+aUv+ayu1xyXG4vLyBAbmFtZXNwYWNlICAgIGh0dHA6Ly90YW1wZXJtb25rZXkubmV0L1xyXG4vLyBAdmVyc2lvbiAgICAgIDEuMy4yXHJcbi8vIEBkZXNjcmlwdGlvbiAg56e76Zmk5pS/5rK755u45YWz5p2h5bmF5oiW5pu/5o2i5Li656S+5Lya5Li75LmJ5qC45b+D5Lu35YC86KeC44CB5LuK5pel6K+X6K+N77yM5pu/5o2i5pS/5rK755u45YWzIExvZ28g5Li65Y6f54mIIExvZ2/vvIzljrvpmaTmlL/msrvnm7jlhbPpgJrnn6XvvIzorqnmioDmnK/ov5znprvmlL/msrvjgIJcclxuLy8gQGF1dGhvciAgICAgICBkdWFubHVhblxyXG4vLyBAY29weXJpZ2h0ICAgIDIwMjIsIGR1YW5sdWFuIChodHRwczovL2dpdGh1Yi5jb20vZHVhbmx1YW4pXHJcbi8vIEBsaWNlbnNlICAgICAgQXBhY2hlLTIuMDsgaHR0cHM6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMC50eHRcclxuLy8gQG1hdGNoICAgICAgICAqOi8vanVuaXQub3JnLypcclxuLy8gQG1hdGNoICAgICAgICAqOi8vY29kZWNlcHQuaW8vKlxyXG4vLyBAbWF0Y2ggICAgICAgICo6Ly9naXRodWIuY29tLypcclxuLy8gQG1hdGNoICAgICAgICAqOi8vZG9jcy5uZXN0anMuY29tLypcclxuLy8gQG1hdGNoICAgICAgICAqOi8vZW1iZXJqcy5jb20vKlxyXG4vLyBAbWF0Y2ggICAgICAgICo6Ly93d3cuamVua2lucy5pby8qXHJcbi8vIEBtYXRjaCAgICAgICAgKjovL3N2ZWx0ZW1hdGVyaWFsdWkuY29tLypcclxuLy8gQG1hdGNoICAgICAgICAqOi8vc3luY3RoaW5nLm5ldC8qXHJcbi8vIEBtYXRjaCAgICAgICAgKjovL2dyZWFzeWZvcmsub3JnLypcclxuLy8gQHJlcXVpcmUgICAgICBodHRwczovL2Nkbi5ib290Y2RuLm5ldC9hamF4L2xpYnMvanF1ZXJ5LzMuNy4xL2pxdWVyeS5zbGltLm1pbi5qc1xyXG4vLyBAZ3JhbnQgICAgICAgIEdNX2dldFZhbHVlXHJcbi8vIEBncmFudCAgICAgICAgR01fc2V0VmFsdWVcclxuLy8gQGdyYW50ICAgICAgICBHTV9yZWdpc3Rlck1lbnVDb21tYW5kXHJcbi8vIEBncmFudCAgICAgICAgR01fdW5yZWdpc3Rlck1lbnVDb21tYW5kXHJcbi8vIEBncmFudCAgICAgICAgR01feG1saHR0cFJlcXVlc3RcclxuLy8gPT0vVXNlclNjcmlwdD09XHJcblxyXG4vLyA9PU9wZW5Vc2VySlM9PVxyXG4vLyBAYXV0aG9yICAgICAgIGR1YW5sdWFuXHJcbi8vIEB1cGRhdGVVUkwgICAgaHR0cHM6Ly9yYXcua2tnaXRodWIuY29tL2R1YW5sdWFuL3RhbXBlcm1vbmtleS1zY3JpcHRzL21haW4vY29yZS1zb2NpYWxpc3QtdmFsdWVzL2Rpc3QvbWFpbi5qc1xyXG4vLyA9PS9PcGVuVXNlckpTPT1cclxuXHJcbmltcG9ydCBKdW5pdCBmcm9tIFwiLi93ZWJzaXRlcy9qdW5pdC9KdW5pdFwiO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcIi4vd2Vic2l0ZXMvcmVhY3QvUmVhY3RcIjtcclxuaW1wb3J0IEFuZ3VsYXIgZnJvbSBcIi4vd2Vic2l0ZXMvYW5ndWxhci9Bbmd1bGFyXCI7XHJcbmltcG9ydCBDb2RlY2VwdCBmcm9tIFwiLi93ZWJzaXRlcy9jb2RlY2VwdC9Db2RlY2VwdFwiO1xyXG5pbXBvcnQgR2l0aHViIGZyb20gXCIuL3dlYnNpdGVzL2dpdGh1Yi9HaXRodWJcIjtcclxuaW1wb3J0IE5lc3QgZnJvbSBcIi4vd2Vic2l0ZXMvbmVzdC9OZXN0XCI7XHJcbmltcG9ydCBFbWJlciBmcm9tIFwiLi93ZWJzaXRlcy9lbWJlci9FbWJlclwiO1xyXG5pbXBvcnQgRWxlY3Ryb24gZnJvbSBcIi4vd2Vic2l0ZXMvZWxlY3Ryb24vRWxlY3Ryb25cIjtcclxuaW1wb3J0IEplbmtpbnMgZnJvbSBcIi4vd2Vic2l0ZXMvamVua2lucy9KZW5raW5zXCI7XHJcbmltcG9ydCBTdmVsdGUgZnJvbSBcIi4vd2Vic2l0ZXMvc3ZlbHRlL1N2ZWx0ZVwiO1xyXG5pbXBvcnQgT3B0aW9ucyBmcm9tIFwiLi9PcHRpb25zXCI7XHJcbmltcG9ydCBTdmVsdGVNYXRlcmlhbFVpIGZyb20gXCIuL3dlYnNpdGVzL3N2ZWx0ZW1hdGVyaWFsdWkvU3ZlbHRlTWF0ZXJpYWxVaVwiO1xyXG5pbXBvcnQgU3luY3RoaW5nIGZyb20gXCIuL3dlYnNpdGVzL3N5bmN0aGluZy9TeW5jdGhpbmdcIjtcclxuXHJcbigoKSA9PiB7XHJcbiAgJ3VzZSBzdHJpY3QnO1xyXG5cclxuICBPcHRpb25zLnJlZ2lzdGVyQWxsKCk7XHJcbiAgT3B0aW9ucy5sb2FkSW5HcmVhc3lmb3JrKCk7XHJcblxyXG4gIC8vIFJlYWN0LnJlcGxhY2UoKTtcclxuICAvLyBBbmd1bGFyLnJlcGxhY2UoKTtcclxuICBKdW5pdC5yZXBsYWNlKCk7XHJcbiAgQ29kZWNlcHQucmVwbGFjZSgpO1xyXG4gIEdpdGh1Yi5yZXBsYWNlKCk7XHJcbiAgTmVzdC5yZXBsYWNlKCk7XHJcbiAgRW1iZXIucmVwbGFjZSgpO1xyXG4gIC8vIEVsZWN0cm9uLnJlcGxhY2UoKTtcclxuICBKZW5raW5zLnJlcGxhY2UoKTtcclxuICAvLyBTdmVsdGUucmVwbGFjZSgpO1xyXG4gIFN2ZWx0ZU1hdGVyaWFsVWkucmVwbGFjZSgpO1xyXG4gIFN5bmN0aGluZy5yZXBsYWNlKCk7XHJcbn0pKCk7XHJcbiIsIi8qKlxyXG4gKiDlrZjlgqhcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0b3JlIHtcclxuXHJcbiAgLyoqXHJcbiAgICog6I635Y+WXHJcbiAgICogQHBhcmFtIGtleSDplK5cclxuICAgKi9cclxuICBzdGF0aWMgZ2V0KGtleTogc3RyaW5nKTogYW55IHtcclxuICAgIHJldHVybiBHTV9nZXRWYWx1ZShrZXkpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICog6K6+572uXHJcbiAgICogQHBhcmFtIGtleSDplK5cclxuICAgKiBAcGFyYW0gdmFsdWUg5YC8XHJcbiAgICovXHJcbiAgc3RhdGljIHNldChrZXk6IHN0cmluZywgdmFsdWU6IGFueSkge1xyXG4gICAgR01fc2V0VmFsdWUoa2V5LCB2YWx1ZSk7XHJcbiAgfVxyXG59XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxuX193ZWJwYWNrX3JlcXVpcmVfXyg3MDgpO1xudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDIwKTtcbiIsIiJdLCJuYW1lcyI6WyJNZW51Q21kIiwiX2NsYXNzQ2FsbENoZWNrIiwiX2NyZWF0ZUNsYXNzIiwia2V5IiwidmFsdWUiLCJyZWdpc3RlciIsIm5hbWUiLCJmbiIsIkdNX3JlZ2lzdGVyTWVudUNvbW1hbmQiLCJ1bnJlZ2lzdGVyIiwibWVudUNtZElkIiwiR01fdW5yZWdpc3Rlck1lbnVDb21tYW5kIiwiZGVmYXVsdCIsIlN0b3JlIiwiQ29tbW9uT3B0aW9ucyIsInJlZ2lzdGVyQm9vbE9wdGlvbiIsIm9wdGlvbiIsIl90aGlzIiwidmFsIiwidmFsSXNCb29sIiwiY3VycmVudE1lbnVDbWRJZCIsImxhYmVsIiwic2V0IiwiSlNPTiIsInN0cmluZ2lmeSIsIndpbmRvdyIsImxvY2F0aW9uIiwicmVsb2FkIiwicmVnaXN0ZXJBbGwiLCJ1cmwiLCJvcHRpb25zIiwib3BlbiIsIl9pdGVyYXRvciIsIl9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyIiwiX3N0ZXAiLCJzIiwibiIsImRvbmUiLCJzdG9yZU9wdGlvbiIsImdldCIsInBhcnNlIiwidmVyc2lvbiIsImVyciIsImUiLCJmIiwibG9hZEluR3JlYXN5Zm9yayIsInNjcmlwdElkIiwibG9hZE9wdGlvbkNvbnRlbnRGbiIsImhvc3QiLCJocmVmIiwiaW5kZXhPZiIsInNlbGVjdG9yIiwic2NyaXB0TGlua3MiLCJzY3JpcHRPcHRpb25zIiwic2NyaXB0Q29udGVudCIsIiRib2R5IiwiJCIsImRvY3VtZW50IiwiYm9keSIsIiRzY3JpcHRMaW5rcyIsIiRzY3JpcHRDb250ZW50IiwiY2hpbGRyZW4iLCJhZnRlciIsIm9uIiwiJGN1cnJlbnRMaSIsImh0bWwiLCJjb25jYXQiLCJ0ZXh0IiwicmVtb3ZlQ2xhc3MiLCIkc2NyaXB0T3B0aW9ucyIsInBhcmVudCIsImFkZENsYXNzIiwiT3B0aW9ucyIsIlNDUklQVF9JRCIsIm9wdGlvbk5hbWUiLCJvcHRpb25WYWwiLCJLZXlzIiwicmVtb3ZlQmFyIiwiamlucmlzaGljaSIsIm9wdGlvblNlbGVjdG9yIiwicmVtb3ZlQmFyT3B0aW9uIiwiamlucmlzaGljaU9wdGlvbiIsIl9PcHRpb25zIiwiX2RlZmluZVByb3BlcnR5IiwidG9rZW4iLCJKdW5pdCIsInJlcGxhY2UiLCJzZWxlY3RvcnMiLCJqdW5pdEFib3V0IiwicHJldkFsbCIsInJlbW92ZSIsImp1bml0TG9nbyIsImF0dHIiLCJqdW5pdExvZ29VcmwiLCJqdW5pdEZhdmljb24iLCJIdHRwRGF0YVR5cGUiLCJfcmVnZW5lcmF0b3JSdW50aW1lIiwidCIsInIiLCJPYmplY3QiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsIm8iLCJkZWZpbmVQcm9wZXJ0eSIsImkiLCJTeW1ib2wiLCJhIiwiaXRlcmF0b3IiLCJjIiwiYXN5bmNJdGVyYXRvciIsInUiLCJ0b1N0cmluZ1RhZyIsImRlZmluZSIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsIndyYXAiLCJHZW5lcmF0b3IiLCJjcmVhdGUiLCJDb250ZXh0IiwibWFrZUludm9rZU1ldGhvZCIsInRyeUNhdGNoIiwidHlwZSIsImFyZyIsImNhbGwiLCJoIiwibCIsInkiLCJHZW5lcmF0b3JGdW5jdGlvbiIsIkdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlIiwicCIsImQiLCJnZXRQcm90b3R5cGVPZiIsInYiLCJ2YWx1ZXMiLCJnIiwiZGVmaW5lSXRlcmF0b3JNZXRob2RzIiwiZm9yRWFjaCIsIl9pbnZva2UiLCJBc3luY0l0ZXJhdG9yIiwiaW52b2tlIiwiX3R5cGVvZiIsInJlc29sdmUiLCJfX2F3YWl0IiwidGhlbiIsImNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnIiwiRXJyb3IiLCJtZXRob2QiLCJkZWxlZ2F0ZSIsIm1heWJlSW52b2tlRGVsZWdhdGUiLCJzZW50IiwiX3NlbnQiLCJkaXNwYXRjaEV4Y2VwdGlvbiIsImFicnVwdCIsIlR5cGVFcnJvciIsInJlc3VsdE5hbWUiLCJuZXh0IiwibmV4dExvYyIsInB1c2hUcnlFbnRyeSIsInRyeUxvYyIsImNhdGNoTG9jIiwiZmluYWxseUxvYyIsImFmdGVyTG9jIiwidHJ5RW50cmllcyIsInB1c2giLCJyZXNldFRyeUVudHJ5IiwiY29tcGxldGlvbiIsInJlc2V0IiwiaXNOYU4iLCJsZW5ndGgiLCJkaXNwbGF5TmFtZSIsImlzR2VuZXJhdG9yRnVuY3Rpb24iLCJjb25zdHJ1Y3RvciIsIm1hcmsiLCJzZXRQcm90b3R5cGVPZiIsIl9fcHJvdG9fXyIsImF3cmFwIiwiYXN5bmMiLCJQcm9taXNlIiwia2V5cyIsInJldmVyc2UiLCJwb3AiLCJwcmV2IiwiY2hhckF0Iiwic2xpY2UiLCJzdG9wIiwicnZhbCIsImhhbmRsZSIsImNvbXBsZXRlIiwiZmluaXNoIiwiX2NhdGNoIiwiZGVsZWdhdGVZaWVsZCIsIm93bktleXMiLCJnZXRPd25Qcm9wZXJ0eVN5bWJvbHMiLCJmaWx0ZXIiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJhcHBseSIsIl9vYmplY3RTcHJlYWQiLCJhcmd1bWVudHMiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzIiwiZGVmaW5lUHJvcGVydGllcyIsIm9iaiIsIl90b1Byb3BlcnR5S2V5IiwiYXN5bmNHZW5lcmF0b3JTdGVwIiwiZ2VuIiwicmVqZWN0IiwiX25leHQiLCJfdGhyb3ciLCJpbmZvIiwiZXJyb3IiLCJfYXN5bmNUb0dlbmVyYXRvciIsInNlbGYiLCJhcmdzIiwidW5kZWZpbmVkIiwiaW5zdGFuY2UiLCJDb25zdHJ1Y3RvciIsIl9kZWZpbmVQcm9wZXJ0aWVzIiwidGFyZ2V0IiwicHJvcHMiLCJkZXNjcmlwdG9yIiwicHJvdG9Qcm9wcyIsInN0YXRpY1Byb3BzIiwiX3RvUHJpbWl0aXZlIiwidG9QcmltaXRpdmUiLCJTdHJpbmciLCJOdW1iZXIiLCJSZXF1ZXN0IiwiX2dldCIsIl9jYWxsZWUiLCJvbmxvYWQxIiwiX2NhbGxlZSQiLCJfY29udGV4dCIsInN5bmNocm9ub3VzIiwiR01feG1saHR0cFJlcXVlc3QiLCJvbmxvYWQiLCJyZXNwb25zZSIsImRhdGFUeXBlIiwicmVzcG9uc2VUZXh0Iiwib25lcnJvciIsImRldGFpbHMiLCJfeCIsIkJhciIsImJhclNlbGVjdG9yIiwibWF0Y2giLCJoaWRlQmFyU2VsZWN0b3IiLCJpc09ic2VydmVIaWRlQmFyIiwiaXNPYnNlcnZlQmFyIiwiaGlkZUJhciIsInN0b3JlSmlucmlzaGljaVZhbCIsImdldEppbnJpc2hpY2kiLCJkYXRhIiwiamlucmlzaGljaUNvbnRlbnQiLCJyZXBsYWNlT2JzZXJ2ZXIiLCJoaWRlIiwib2JzZXJ2ZXIiLCJNdXRhdGlvbk9ic2VydmVyIiwiZGlzY29ubmVjdCIsIm9ic2VydmUiLCJjaGlsZExpc3QiLCJzdWJ0cmVlIiwiaGlkZUJhckNhbGxiYWNrIiwiX3RoaXMyIiwicmVwbGFjZUJhciIsInJlcGxhY2VCYXJDYWxsYmFjayIsImppbnJpc2hpY2lDYWxsYmFjayIsImZvbGxvd1VwT2JzZXJ2ZVNlbGVjdG9yIiwidHh0IiwiY3NzIiwiJGJhciIsInJlcGxhY2VCYXJTZWxlY3RvciIsImJhciIsImVxIiwiYmFyVWxTZWxlY3RvciIsImJhclVsIiwiX2dldEppbnJpc2hpY2kiLCJzdGF0dXMiLCJjb25zb2xlIiwiY29udGVudCIsIm9yaWdpbiIsImF1dGhvciIsInRpdGxlIiwiQ29kZWNlcHQiLCJHaXRodWIiLCIkbm90aWNlIiwibm90aWNlIiwidG9Mb3dlckNhc2UiLCJFbWJlciIsIkFuZ3VsYXIiLCJsb2dvIiwicmVwbGFjZVdpdGgiLCJwYWdlVGl0bGUiLCJuZXh0QWxsIiwiZWFjaCIsImVsIiwiJGVsIiwiYXBwZW5kIiwiU3ZlbHRlTWF0ZXJpYWxVaSIsIlN5bmN0aGluZyIsIk5lc3QiLCJKZW5raW5zIiwiR01fZ2V0VmFsdWUiLCJHTV9zZXRWYWx1ZSJdLCJzb3VyY2VSb290IjoiIn0=