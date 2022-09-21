// ==UserScript==
// @name         V2EX 主题回复增强
// @namespace    http://tampermonkey.net/
// @version      0.0.1
// @description  增强 V2EX 主题的回复。
// @author       duanluan
// @copyright    2022, duanluan (https://github.com/duanluan)
// @license      Apache-2.0; https://www.apache.org/licenses/LICENSE-2.0.txt
// @match        *://*.v2ex.com/*
// @require      https://cdn.bootcdn.net/ajax/libs/jquery/3.6.0/jquery.min.js
// @require      https://cdn.bootcdn.net/ajax/libs/moment.js/2.29.4/moment-with-locales.min.js
// @require      https://cdn.bootcdn.net/ajax/libs/moment.js/2.29.4/locale/zh-cn.min.js
// @require      https://cdn.jsdelivr.net/npm/winbox@0.2.6/dist/winbox.bundle.min.js
// @resource css https://cdn.bootcdn.net/ajax/libs/layer/3.5.1/theme/default/layer.min.css
// @require      https://cdn.bootcdn.net/ajax/libs/layer/3.5.1/layer.min.js
// @grant        GM_xmlhttpRequest
// @grant        GM_getValue
// @grant        GM_setValue
// @grant        GM_registerMenuCommand
// @grant        GM_unregisterMenuCommand
// @grant        GM_getResourceText
// @grant        GM_addStyle
// ==/UserScript==

// ==OpenUserJS==
// @author duanluan
// ==/OpenUserJS==

import Replay from "./Replay";
import Options from "./Options";

(async () => {
  'use strict';

  // 加载 CSS
  GM_addStyle(GM_getResourceText('css'));
  // 设置 layer 图标
  $(document.head).append(`<style>
    .layui-layer-ico{background:url('https://cdn.bootcdn.net/ajax/libs/layer/3.5.1/theme/default/icon.png') no-repeat}
    /* 原样式不知为何会失效，导致 icon 设置无效 */
    .layui-layer-ico1{background-position:-30px 0}
    .layui-layer-ico2{background-position:-60px 0}
    .layui-layer-ico3{background-position:-90px 0}
    .layui-layer-ico4{background-position:-120px 0}
    .layui-layer-ico5{background-position:-150px 0}
    .layui-layer-ico6{background-position:-180px 0}
  </style>`);

  Options.registerAll();
  Options.loadInV2ex();

  Replay.run();
})();
