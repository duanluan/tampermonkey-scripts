/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
// ==UserScript==
// @name         You.com Pro
// @namespace    http://tampermonkey.net/
// @version      0.0.2
// @description
// @author       duanluan
// @copyright    2024, duanluan (https://github.com/duanluan)
// @license      Apache-2.0 https://www.apache.org/licenses/LICENSE-2.0.txt
// @match        *://*.you.com/*
// @require      https://cdn.bootcdn.net/ajax/libs/jquery/3.7.1/jquery.min.js
// @resource css https://cdn.jsdelivr.net/npm/layui-tampermonkey@2.9.9-rc.3/css/layui.css
// @require      https://cdn.jsdelivr.net/npm/layui-tampermonkey@2.9.9-rc.3/layui.js
// @grant        GM_addStyle
// @grant        GM_getResourceText
// ==/UserScript==

// ==OpenUserJS==
// @author       duanluan
// @updateURL    https://raw.kkgithub.com/duanluan/tampermonkey-scripts/main/you.com-pro/dist/you.com-pro.user.js
// ==/OpenUserJS==

(function () {
  'use strict';

  // 加载 CSS
  GM_addStyle(GM_getResourceText('css'));
  // layer 图标未知原因失效，手动添加样式
  $(document.head).append("<style>\n    .layui-layer-ico{background:url('https://cdn.bootcdn.net/ajax/libs/layer/3.5.1/theme/default/icon.png') no-repeat}\n    .layui-layer-ico1{background-position:-30px 0}\n    .layui-layer-ico2{background-position:-60px 0}\n    .layui-layer-ico3{background-position:-90px 0}\n    .layui-layer-ico4{background-position:-120px 0}\n    .layui-layer-ico5{background-position:-150px 0}\n    .layui-layer-ico6{background-position:-180px 0}\n  </style>");
  var firstLoadFlag = true;
  var selectorId = {
      // 操作按钮
      proOperateBtn: 'you-com-pro-operate-btn',
      // 操作面板
      proOperatePanel: 'you-com-pro-operate-panel',
      // 添加脚本按钮
      inputScriptBtn: 'you-com-pro-input-script-btn'
    },
    selector = {
      // 用户名右侧更多按钮
      userDropdown: '[data-testid="user-dropdown"]',
      signOption: '[data-testid="sign-option"]',
      // 顶栏
      topBar: '#TOP_BAR',
      // 操作按钮
      proOperateBtn: '#' + selectorId.proOperateBtn,
      // 操作面板
      proOperatePanel: '#' + selectorId.proOperatePanel,
      // 填写脚本按钮
      inputScriptBtn: '#' + selectorId.inputScriptBtn
    };

  // 用户名右侧更多按钮点击事件
  $(document).on('click', selector.userDropdown, function () {
    if (firstLoadFlag) {
      setTimeout(function () {
        // 隐藏注销按钮
        $(selector.signOption).hide();
        firstLoadFlag = false;
      }, 300);
    } else {
      // 隐藏注销按钮
      $(selector.signOption).hide();
    }
  });

  // 等待顶栏元素出现后
  var interval = setInterval(function () {
    if ($(selector.topBar).length !== 0) {
      clearInterval(interval);
      init();
    }
  }, 100);
  function init() {
    // 顶栏中第一个 div 后添加一个 div
    $(selector.topBar).children().last().prepend("\n      <span>\n        <button class=\"iLolfv wscSo\" id=\"".concat(selectorId.proOperateBtn, "\">\n          <div class=\"button-children\" data-relingo-block=\"true\">\n            <svg t=\"1715405944514\" class=\"icon\" viewBox=\"0 0 1024 1024\" xmlns=\"http://www.w3.org/2000/svg\" width=\"1.125rem\" height=\"1.125rem\"><path d=\"M881.12 275.23l40.35-65.38L732.41 93.22c-1.09-0.8-2.21-1.58-3.38-2.3L685.48 64 432.25 474.15a249.47 249.47 0 0 0-292.62 105.19c-72.19 117.32-35.82 270.94 81.31 343.44a249.59 249.59 0 0 0 299.48-396.59L625.48 356l151 93.23 40.35-65.33-151-93.23 66.3-107.39z m-403.85 512.6a147 147 0 1 1 18-111.21 146.5 146.5 0 0 1-18 111.21z\" fill=\"#141414\"></path></svg>\n          </div>\n        </button>\n      </span>\n    "));
    var $proOperateBtn = $(selector.proOperateBtn),
      proOperatePanelTop = $proOperateBtn.offset().top + $proOperateBtn.outerHeight();
    $(document.body).append("\n      <div id=\"".concat(selectorId.proOperatePanel, "\" style=\"display: none; background: #eeeef1; padding: 10px; border: 1px solid #e5e5e5; position: absolute; z-index: 99999; right: 0; top:").concat(proOperatePanelTop + 10, "px; width: 270px; height: calc(100vh-").concat(proOperatePanelTop, "px)\">\n        <button type=\"button\" class=\"layui-btn layui-btn-sm\" id=\"").concat(selectorId.inputScriptBtn, "\">\u586B\u5199\u811A\u672C</button>\n      </div>\n    "));

    // 操作按钮点击事件
    $(selector.proOperateBtn)[0].addEventListener('click', function () {
      // 操作面板显示/隐藏
      $(selector.proOperatePanel).toggle();
    });

    // 填写脚本按钮点击事件
    $(selector.inputScriptBtn)[0].addEventListener('click', function () {
      layer.prompt({
        title: '自己账号需先禁用脚本并注销！',
        maxlength: 10000
      }, function (value, index) {
        // 执行脚本
        eval(value);
        // 刷新页面
        location.reload();
      });
    });
  }
})();
/******/ })()
;
//# sourceMappingURL=you.com-pro.user.js.map