/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 307:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ Store)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
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


/***/ }),

/***/ 603:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var _Options__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(797);
/* harmony import */ var _utils_gm_Store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(307);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
// ==UserScript==
// @name         163 Mail Pro
// @namespace    http://tampermonkey.net/
// @version      0.0.1
// @description  增强 163 网易邮箱。
// @author       duanluan
// @copyright    2025, duanluan (https://github.com/duanluan)
// @license      Apache-2.0; https://www.apache.org/licenses/LICENSE-2.0.txt
// @homepage     https://greasyfork.org/zh-CN/scripts/555894
// @supportURL   https://github.com/duanluan/tampermonkey-scripts/issues
// @match        *://mail.163.com/*
// @require      https://cdn.jsdelivr.net/npm/jquery@3.7.1/dist/jquery.slim.min.js
// @resource css https://cdn.jsdelivr.net/npm/layui-tampermonkey@2.9.9-rc.3/css/layui.css
// @require      https://cdn.jsdelivr.net/npm/layui-tampermonkey@2.9.9-rc.3/layui.js
// @grant        GM_registerMenuCommand
// @grant        GM_getResourceText
// @grant        GM_addStyle
// @grant        GM_getValue
// @grant        GM_setValue
// ==/UserScript==

// ==OpenUserJS==
// @author       duanluan
// @updateURL    https://raw.kkgithub.com/duanluan/tampermonkey-scripts/main/163-mail-pro/dist/163-mail-pro.user.js
// ==/OpenUserJS==



(function () {
  'use strict';

  // 加载 CSS
  GM_addStyle(GM_getResourceText('css'));
  // layer 图标未知原因失效，手动添加样式
  $(document.head).append("<style>\n    .layui-layer-ico{background:url('https://cdn.jsdelivr.net/npm/layer-src@3.5.1/dist/theme/default/icon.png') no-repeat}\n    .layui-layer-ico1{background-position:-30px 0}\n    .layui-layer-ico2{background-position:-60px 0}\n    .layui-layer-ico3{background-position:-90px 0}\n    .layui-layer-ico4{background-position:-120px 0}\n    .layui-layer-ico5{background-position:-150px 0}\n    .layui-layer-ico6{background-position:-180px 0}\n  </style>");
  var selector = {
    // 首页 tab
    indexTab: '#_mail_tabitem_0_82',
    // 通讯录 tab
    contactsTab: '#_mail_tabitem_1_83',
    // AI 工具箱 tab
    aiToolboxTab: '#_mail_tabitem_2_84',
    // 开通超级会员无限容量 nav item
    enableVipNavItem: '#_mail_component_73_73',
    // 手机 APP nav item
    downAppNavItem: '#_mail_component_35_35',
    // 下载桌面端 nav item
    downDesktopNavItem: '#_mail_component_39_39',
    // 参与调研 nav item
    feedbackSurveyNavItem: '#_mail_component_43_43',
    // 自助查询 nav item
    selfQueryNavItem: '#_mail_component_47_47',
    // 会员中心 nav item
    memberCenterNavItem: '#_mail_component_51_51',
    // 搜索栏 AI 搜
    searchInputAiIcon: '#_mail_link_4_179',
    // AI 助理入口
    smartAssistantOperating: '.APP-smartAssistant-operating',
    smartAssistantBtn: '.APP-smartAssistant-btn',
    // 开通超级会员 Tip
    warnTips: '[id$="_dvWarnTips"]'
  };

  // 默认配置（默认选中=隐藏）
  var defaultConfig = {
    // 隐藏通讯录 Tab
    hideContactsTab: true,
    // 隐藏 AI 工具箱 Tab
    hideAiToolboxTab: true,
    // 隐藏开通超级会员无限容量 nav item
    hideEnableVipNavItem: true,
    // 隐藏手机 APP nav item
    hideDownAppNavItem: true,
    // 隐藏下载桌面端 nav item
    hideDownDesktopNavItem: true,
    // 隐藏参与调研 nav item
    hideFeedbackSurveyNavItem: true,
    // 隐藏自助查询 nav item
    hideSelfQueryNavItem: true,
    // 隐藏会员中心 nav item
    hideMemberCenterNavItem: true,
    // 隐藏搜索栏 AI 搜
    hideSearchInputAiIcon: true,
    // 隐藏 AI 助理入口
    hideSmartAssistantOperating: true,
    hidesmartAssistantBtn: true,
    // 隐藏开通超级会员 Tip
    hideWarnTips: true
  };
  var configKey = 'config';

  // 读取配置，补全缺失字段
  var savedConfigStr = _utils_gm_Store__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.get(configKey);
  var config = savedConfigStr ? _objectSpread(_objectSpread({}, defaultConfig), JSON.parse(savedConfigStr)) : defaultConfig;

  /**
   * 应用配置（根据配置显示或隐藏元素）
   */
  var applyConfig = function applyConfig() {
    $(selector.contactsTab).toggle(!config.hideContactsTab);
    $(selector.aiToolboxTab).toggle(!config.hideAiToolboxTab);
    $(selector.enableVipNavItem).toggle(!config.hideEnableVipNavItem);
    $(selector.downAppNavItem).toggle(!config.hideDownAppNavItem);
    $(selector.downDesktopNavItem).toggle(!config.hideDownDesktopNavItem);
    $(selector.feedbackSurveyNavItem).toggle(!config.hideFeedbackSurveyNavItem);
    $(selector.selfQueryNavItem).toggle(!config.hideSelfQueryNavItem);
    $(selector.memberCenterNavItem).toggle(!config.hideMemberCenterNavItem);
    $(selector.searchInputAiIcon).toggle(!config.hideSearchInputAiIcon);
    $(selector.smartAssistantOperating).toggle(!config.hideSmartAssistantOperating);
    $(selector.smartAssistantBtn).toggle(!config.hidesmartAssistantBtn);
    // [已修改] 根据配置显示/隐藏警告提示
    $(selector.warnTips).toggle(!config.hideWarnTips);
  };
  applyConfig();

  /**
   * 监听 DOM 变化，确保动态插入的元素也被隐藏
   */
  var observeDomChanges = function observeDomChanges() {
    var target = document.body;
    if (!target) return;
    var observer = new MutationObserver(function () {
      applyConfig();
    });
    observer.observe(target, {
      childList: true,
      subtree: true
    });
  };

  /**
   * 定义点击设置时的回调函数
   */
  var onSettingsClick = function onSettingsClick() {
    layer.open({
      type: 1,
      area: ['500px', '600px'],
      content: "\n      <form class=\"layui-form\" style=\"padding: 20px;\" action=\"\">\n        <div class=\"layui-form-item\">\n          <label class=\"layui-form-label\">\u9690\u85CF Tab\uFF1A</label>\n          <div class=\"layui-input-block\">\n            <input type=\"checkbox\" title=\"\u901A\u8BAF\u5F55\" name=\"hideContactsTab\" lay-filter=\"item-switch\" ".concat(config.hideContactsTab ? 'checked' : '', "/>\n            <input type=\"checkbox\" title=\"AI \u5DE5\u5177\u7BB1\" name=\"hideAiToolboxTab\" lay-filter=\"item-switch\" ").concat(config.hideAiToolboxTab ? 'checked' : '', "/>\n          </div>\n        </div>\n        <div class=\"layui-form-item\">\n          <label class=\"layui-form-label\">\u9690\u85CF Nav\uFF1A</label>\n          <div class=\"layui-input-block\">\n            <input type=\"checkbox\" title=\"\u5F00\u901A\u8D85\u7EA7\u4F1A\u5458\" name=\"hideEnableVipNavItem\" lay-filter=\"item-switch\" ").concat(config.hideEnableVipNavItem ? 'checked' : '', "/>\n            <input type=\"checkbox\" title=\"\u624B\u673A APP\" name=\"hideDownAppNavItem\" lay-filter=\"item-switch\" ").concat(config.hideDownAppNavItem ? 'checked' : '', "/>\n            <input type=\"checkbox\" title=\"\u4E0B\u8F7D\u684C\u9762\u7AEF\" name=\"hideDownDesktopNavItem\" lay-filter=\"item-switch\" ").concat(config.hideDownDesktopNavItem ? 'checked' : '', "/>\n            <input type=\"checkbox\" title=\"\u53C2\u4E0E\u8C03\u7814\" name=\"hideFeedbackSurveyNavItem\" lay-filter=\"item-switch\" ").concat(config.hideFeedbackSurveyNavItem ? 'checked' : '', "/>\n            <input type=\"checkbox\" title=\"\u81EA\u52A9\u67E5\u8BE2\" name=\"hideSelfQueryNavItem\" lay-filter=\"item-switch\" ").concat(config.hideSelfQueryNavItem ? 'checked' : '', "/>\n            <input type=\"checkbox\" title=\"\u4F1A\u5458\u4E2D\u5FC3\" name=\"hideMemberCenterNavItem\" lay-filter=\"item-switch\" ").concat(config.hideMemberCenterNavItem ? 'checked' : '', "/>\n          </div>\n        </div>\n        <div class=\"layui-form-item\">\n          <label class=\"layui-form-label\">\u9690\u85CF\u5176\u4ED6\uFF1A</label>\n          <div class=\"layui-input-block\">\n            <input type=\"checkbox\" title=\"\u4E00\u952E\u751F\u6210 PPT AI \u641C\u7D22\u4E0E\u95EE\u7B54\uFF0C\u81EA\u7136\u8BED\u8A00\u68C0\u7D22\u90AE\u4EF6\" name=\"hideSmartAssistantOperating\" lay-filter=\"item-switch\" ").concat(config.hideSmartAssistantOperating ? 'checked' : '', "/>\n            <input type=\"checkbox\" title=\"\u641C\u7D22\u680F AI \u641C\" name=\"hideSearchInputAiIcon\" lay-filter=\"item-switch\" ").concat(config.hideSearchInputAiIcon ? 'checked' : '', "/>\n            <input type=\"checkbox\" title=\"AI \u52A9\u7406\" name=\"hidesmartAssistantBtn\" lay-filter=\"item-switch\" ").concat(config.hidesmartAssistantBtn ? 'checked' : '', "/>\n            <input type=\"checkbox\" title=\"\u5F00\u901A\u90AE\u7BB1\u201C\u8D85\u7EA7\u4F1A\u5458\u201D\u2026\u2026\" name=\"hideWarnTips\" lay-filter=\"item-switch\" ").concat(config.hideWarnTips ? 'checked' : '', "/>\n          </div>\n        </div>\n      </form>\n    ")
    });

    // layer.open 中 radio、checkbox、select 需要 render 才能显示
    layui.use('form', function () {
      layui.form.render();

      // 监听复选框变更
      layui.form.on('checkbox(item-switch)', function (data) {
        var name = data.elem.name;
        config[name] = data.elem.checked;
        _utils_gm_Store__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.set(configKey, JSON.stringify(config));
        applyConfig();
      });
    });
  };

  // DOM 就绪后开始监听
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () {
      applyConfig();
      observeDomChanges();
    });
  } else {
    observeDomChanges();
  }

  // 注册选项并传入回调
  _Options__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.registerAll(onSettingsClick);
})();

/***/ }),

/***/ 797:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ Options)
});

// EXTERNAL MODULE: ./utils/src/gm/Store.ts
var Store = __webpack_require__(307);
;// ./utils/src/gm/MenuCmd.ts
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
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

;// ./utils/src/CommonOptions.ts
function CommonOptions_typeof(o) { "@babel/helpers - typeof"; return CommonOptions_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, CommonOptions_typeof(o); }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function CommonOptions_classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function CommonOptions_defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, CommonOptions_toPropertyKey(o.key), o); } }
function CommonOptions_createClass(e, r, t) { return r && CommonOptions_defineProperties(e.prototype, r), t && CommonOptions_defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
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
    /**
     * 注册 bool 类型的选项
     *
     * @param option 选项
     */
    function registerBoolOption(option) {
      var _this = this;
      var val = option.value,
        valIsBool = typeof val === 'boolean';
      if (!valIsBool) {
        return;
      }
      // 注册选项和选项点击事件
      var currentMenuCmdId = MenuCmd.register((val ? '✅ ' : '🔲 ') + option.label, function () {
        // 点击后取反
        option.value = !option.value;
        Store/* default */.A.set(option.name, JSON.stringify(option));

        // 重新注册
        MenuCmd.unregister(currentMenuCmdId);
        _this.registerBoolOption(option);
        // 刷新页面
        window.location.reload();
      });

      // 保存选项 ID
      option.menuCmdId = currentMenuCmdId;
      Store/* default */.A.set(option.name, JSON.stringify(option));
    }

    /**
     * 注册字符串/按钮类型的选项 (无状态)
     *
     * @param option 选项
     */
  }, {
    key: "registerStrOption",
    value: function registerStrOption(option) {
      MenuCmd.register(option.label, function () {
        if (typeof option.callback === 'function') {
          option.callback();
        }
      });
    }

    /**
     * 注册所有选项
     *
     * @param options 选项
     * @param moreOptionsUrl 更多设置页面 URL
     * @param useStore 是否使用存储（默认 true）
     */
  }, {
    key: "registerAll",
    value: function registerAll(options, moreOptionsUrl) {
      var useStore = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      if (moreOptionsUrl) {
        // 注册“更多设置”选项，点击后打开新页面到更多设置页面
        MenuCmd.register('更多设置', function () {
          window.open(moreOptionsUrl, '_blank');
        });
      }
      var _iterator = _createForOfIteratorHelper(options),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var option = _step.value;
          // TODO 【调试】不保留选项的值，每次都从 Store 中获取
          // Store.set(option.name, null);

          // 声明最终用于注册的选项变量
          var finalOption = option;

          // useStore 为 true 时，才从 Store 读取或更新
          if (useStore) {
            var storeOption = Store/* default */.A.get(option.name) ? JSON.parse(Store/* default */.A.get(option.name)) : null;
            // 如果选项不存在 || 版本不一致 时重置选项
            if (storeOption === null || !storeOption['version'] || storeOption['version'] < option.version) {
              Store/* default */.A.set(option.name, JSON.stringify(option));
              storeOption = option;
            }
            finalOption = storeOption;
          }

          // 根据类型分发注册方法
          if (typeof finalOption.value === 'boolean') {
            this.registerBoolOption(finalOption);
          } else {
            this.registerStrOption(finalOption);
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }

    /**
     * 在 Greasy Fork 脚本详情页中加载选项
     *
     * @param scriptId 脚本 ID
     * @param loadOptionContentFn 加载选项内容的函数
     */
  }, {
    key: "loadInGreasyfork",
    value: function loadInGreasyfork(scriptId, loadOptionContentFn) {
      // 非脚本详情页结束
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

      // 添加“脚本设置”选项卡和点击事件
      $scriptLinks.children('li:eq(0)').after("<li><a href=\"javascript:;\" id=\"script-options\">\u811A\u672C\u8BBE\u7F6E</a></li>");
      $body.on('click', selector.scriptOptions, function () {
        // 移除其他已选中选项的样式
        var $currentLi = $scriptLinks.children('li.current');
        $currentLi.html("<a href=\"".concat(location.href, "\">").concat($currentLi.text(), "</a>"));
        $currentLi.removeClass('current');
        // 给“脚本设置”选项卡添加选中选项的样式
        var $scriptOptions = $(selector.scriptOptions);
        $scriptOptions.parent().addClass('current');
        loadOptionContentFn($scriptContent);
      });
    }
  }]);
}();

;// ./163-mail-pro/src/Options.ts
var _Options;
function Options_typeof(o) { "@babel/helpers - typeof"; return Options_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, Options_typeof(o); }
function Options_classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function Options_defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, Options_toPropertyKey(o.key), o); } }
function Options_createClass(e, r, t) { return r && Options_defineProperties(e.prototype, r), t && Options_defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _defineProperty(e, r, t) { return (r = Options_toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function Options_toPropertyKey(t) { var i = Options_toPrimitive(t, "string"); return "symbol" == Options_typeof(i) ? i : i + ""; }
function Options_toPrimitive(t, r) { if ("object" != Options_typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != Options_typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

var Options = /*#__PURE__*/function () {
  function Options() {
    Options_classCallCheck(this, Options);
  }
  return Options_createClass(Options, null, [{
    key: "registerAll",
    value:
    /**
     * 注册所有选项
     * @param settingsCallback 点击“设置”时的回调函数
     */
    function registerAll(settingsCallback) {
      var _this = this;
      // 如果传入了回调，将其绑定到对应的选项上
      if (settingsCallback) {
        var option = this.options.find(function (o) {
          return o.name === _this.Keys.settings;
        });
        if (option) {
          option.callback = settingsCallback;
        }
      }
      CommonOptions.registerAll(this.options, null, false);
    }
  }]);
}();
_Options = Options;
/**
 * 选项 Key
 */
_defineProperty(Options, "Keys", {
  settings: 'settings'
});
/**
 * 选项
 * @private
 */
_defineProperty(Options, "options", [{
  label: '设置',
  name: _Options.Keys.settings,
  version: 1,
  value: '',
  menuCmdId: null
}]);


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
/******/ 	__webpack_require__(603);
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__(797);
/******/ 	
/******/ })()
;
//# sourceMappingURL=163-mail-pro.user.js.map