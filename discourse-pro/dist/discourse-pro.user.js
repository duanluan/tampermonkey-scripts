/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./utils/src/gm/Store.ts
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

;// CONCATENATED MODULE: ./discourse-pro/src/module/dragBar.ts

function loadDragBar(options) {
  var mainOutletWrapper = options.mainOutletWrapper,
    sidebarWrapper = options.sidebarWrapper,
    sidebar = options.sidebar,
    headerSidebarToggleBtn = options.headerSidebarToggleBtn,
    sidebarWidthKey = options.sidebarWidthKey,
    minSidebarWidth = options.minSidebarWidth,
    maxSidebarWidth = options.maxSidebarWidth;
  var $mainOutletWrapper = $(mainOutletWrapper),
    $sidebarWrapper = $(sidebarWrapper),
    $sidebar = $(sidebar),
    $headerSidebarToggleBtn = $(headerSidebarToggleBtn);

  // 侧边栏是否存在
  var sidebarExist = $sidebar.length > 0;
  if (sidebarExist) {
    debugger;
    // 读取存储的侧边栏宽度
    var storeSidebarWidth = Store.get(sidebarWidthKey);
    if (storeSidebarWidth) {
      $mainOutletWrapper.css('grid-template-columns', "".concat(storeSidebarWidth, "px minmax(0, 1fr)"));
    }
  }

  // 在侧边栏内部追加一个拖拽条
  $sidebarWrapper.append("\n    <div class=\"drag-bar\" style=\"width: 4px; cursor: ew-resize\"></div>\n  ");

  // 拖拽条
  var $dragBar = $sidebarWrapper.find('.drag-bar');
  // 是否正在拖拽
  var isDragging = false;
  // 鼠标按下时的 clientX
  var startClientX = 0;
  // 鼠标按下时的侧边栏宽度
  var startSidebarWidth = 0;
  // 侧边栏新宽度
  var newSidebarWidth = 0;

  // 鼠标按下事件
  $dragBar.on('mousedown', function (e) {
    startClientX = e.clientX;
    startSidebarWidth = $sidebarWrapper.width() || 0;
    isDragging = true;
    // 改变鼠标样式
    document.body.style.cursor = 'ew-resize';
    // 设置拖拽条背景色
    $dragBar.css('background-color', '#e6e6e6');
    // 防止文本被选中
    e.preventDefault();
  });

  // 鼠标移动事件
  $(document).on('mousemove', function (e) {
    if (!isDragging) return;

    // 计算新的宽度
    var deltaX = e.clientX - startClientX;
    newSidebarWidth = Math.min(maxSidebarWidth, Math.max(minSidebarWidth, startSidebarWidth + deltaX));
    $mainOutletWrapper.css('grid-template-columns', "".concat(newSidebarWidth, "px minmax(0, 1fr)"));
  });

  // 鼠标松开事件
  $(document).on('mouseup', function () {
    if (!isDragging) return;
    isDragging = false;
    // 恢复鼠标样式
    document.body.style.cursor = 'default';
    // 恢复拖拽条背景色
    $dragBar.css('background-color', 'transparent');
    // 记忆侧边栏宽度
    Store.set(sidebarWidthKey, newSidebarWidth);
  });

  // 展开收起侧边栏按钮点击事件
  $headerSidebarToggleBtn.on('click', function () {
    sidebarExist = !sidebarExist;
    $mainOutletWrapper.css('grid-template-columns', "".concat(sidebarExist ? Store.get(sidebarWidthKey) + 'px' : '0', " minmax(0, 1fr)"));
  });
}
;// CONCATENATED MODULE: ./discourse-pro/src/main.ts
// ==UserScript==
// @name         Discourse Pro
// @namespace    http://tampermonkey.net/
// @version      0.0.1
// @description  增强 Discourse 论坛。
// @author       duanluan
// @copyright    2024, duanluan (https://github.com/duanluan)
// @license      Apache-2.0 https://www.apache.org/licenses/LICENSE-2.0.txt
// @homepage     https://greasyfork.org/zh-CN/scripts/520817
// @supportURL   https://github.com/duanluan/tampermonkey-scripts/issues
// @match        *://linux.do/*
// @match        *://meta.appinn.net/*
// @require      https://cdn.jsdelivr.net/npm/jquery@3.7.1/dist/jquery.slim.min.js
// @grant        GM_getValue
// @grant        GM_setValue
// ==/UserScript==

// ==OpenUserJS==
// @author       duanluan
// @updateURL    https://raw.kkgithub.com/duanluan/tampermonkey-scripts/main/discourse-pro/dist/discourse-pro.user.js
// ==/OpenUserJS==


(function (_$) {
  'use strict';

  // 判断是否为 Discourse
  var generator = (_$ = $('meta[name="generator"]')) === null || _$ === void 0 ? void 0 : _$.attr('content');
  if (!generator || generator.indexOf('Discourse') == -1) return;
  var selector = {
    // 侧边栏展开收起按钮
    headerSidebarToggleBtn: '.header-sidebar-toggle>button',
    // 侧边栏和主内容的父容器
    mainOutletWrapper: '#main-outlet-wrapper',
    // 侧边栏
    sidebarWrapper: '.sidebar-wrapper',
    sidebar: '#d-sidebar',
    // 主内容
    mainOutlet: '#main-outlet'
  };
  var storeKeys = {
    // 侧边栏宽度
    sidebarWidth: 'sidebarWidth_'
  };

  // 加载拖拽条
  loadDragBar({
    mainOutletWrapper: selector.mainOutletWrapper,
    sidebarWrapper: selector.sidebarWrapper,
    sidebar: selector.sidebar,
    headerSidebarToggleBtn: selector.headerSidebarToggleBtn,
    sidebarWidthKey: storeKeys.sidebarWidth + location.host,
    minSidebarWidth: 180,
    maxSidebarWidth: 500
  });
})();
/******/ })()
;
//# sourceMappingURL=discourse-pro.user.js.map