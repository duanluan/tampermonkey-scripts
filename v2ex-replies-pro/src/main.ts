// ==UserScript==
// @name         V2EX 主题回复增强
// @namespace    http://tampermonkey.net/
// @version      0.1.1
// @description  增强 V2EX 主题的回复。
// @author       duanluan
// @copyright    2022, duanluan (https://github.com/duanluan)
// @license      Apache-2.0; https://www.apache.org/licenses/LICENSE-2.0.txt
// @match        *://*.v2ex.com/*
// @require      https://cdn.jsdelivr.net/npm/jquery@3.7.1/dist/jquery.slim.min.js
// @require      https://cdn.jsdelivr.net/npm/moment@2.30.1/moment.min.js
// @require      https://cdn.jsdelivr.net/npm/moment@2.30.1/locale/zh-cn.js
// @require      https://cdn.jsdelivr.net/npm/winbox@0.2.82/dist/winbox.bundle.min.js
// @resource css https://cdn.jsdelivr.net/npm/layer-src@3.5.1/src/theme/default/layer.min.css
// @require      https://cdn.jsdelivr.net/npm/layer-src@3.5.1/src/layer.min.js
// @grant        GM_xmlhttpRequest
// @grant        GM_getValue
// @grant        GM_setValue
// @grant        GM_registerMenuCommand
// @grant        GM_unregisterMenuCommand
// @grant        GM_getResourceText
// @grant        GM_addStyle
// ==/UserScript==

// ==OpenUserJS==
// @author       duanluan
// @updateURL    https://raw.kkgithub.com/duanluan/tampermonkey-scripts/main/v2ex-replies-pro/dist/core-socialist-values.user.js
// ==/OpenUserJS==

import Reply from "./Reply";
import Options from "./Options";

(async () => {
  'use strict';

  // 加载 CSS
  GM_addStyle(GM_getResourceText('css'));
  // layer 图标未知原因失效，手动添加样式
  $(document.head).append(`<style>
    .layui-layer-ico{background:url('https://cdn.jsdelivr.net/npm/layer-src@3.5.1/dist/theme/default/icon.png') no-repeat}
    .layui-layer-ico1{background-position:-30px 0}
    .layui-layer-ico2{background-position:-60px 0}
    .layui-layer-ico3{background-position:-90px 0}
    .layui-layer-ico4{background-position:-120px 0}
    .layui-layer-ico5{background-position:-150px 0}
    .layui-layer-ico6{background-position:-180px 0}
  </style>`);

  Options.registerAll();
  Options.loadInV2ex();

  Reply.run();
})();
