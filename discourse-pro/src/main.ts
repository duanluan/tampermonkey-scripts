// ==UserScript==
// @name         Discourse Pro
// @namespace    http://tampermonkey.net/
// @version      0.0.1
// @description  增强 Discourse 论坛。
// @author       duanluan
// @copyright    2024, duanluan (https://github.com/duanluan)
// @license      Apache-2.0; https://www.apache.org/licenses/LICENSE-2.0.txt
// @homepage     https://greasyfork.org/zh-CN/scripts/520817
// @supportURL   https://github.com/duanluan/tampermonkey-scripts/issues
// @match        *://linux.do/*
// @match        *://meta.appinn.net/*
// @require      https://cdn.jsdelivr.net/npm/jquery@3.7.1/dist/jquery.slim.min.js
// @resource css https://cdn.jsdelivr.net/npm/layer-src@3.5.1/src/theme/default/layer.min.css
// @require      https://cdn.jsdelivr.net/npm/layer-src@3.5.1/src/layer.min.js
// @grant        GM_addStyle
// @grant        GM_getResourceText
// @grant        GM_getValue
// @grant        GM_setValue
// ==/UserScript==

// ==OpenUserJS==
// @author       duanluan
// @updateURL    https://raw.kkgithub.com/duanluan/tampermonkey-scripts/main/discourse-pro/dist/discourse-pro.user.js
// ==/OpenUserJS==

import Store from "@utils/gm/Store";

const host = location.host;

const selector = {
  // 侧边栏和主内容的父容器
  mainOutletWrapper: '#main-outlet-wrapper',
  // 侧边栏
  sidebarWrapper: '.sidebar-wrapper',
  // 主内容
  mainOutlet: '#main-outlet'
}

const storeKeys = {
  // 侧边栏宽度
  sidebarWidth: 'sidebarWidth_'
}

/**
 * 加载侧边栏和内容之前的拖拽条
 */
const loadDragBar = () => {
  const $mainOutletWrapper = $(selector.mainOutletWrapper)
    , $sidebarWrapper = $(selector.sidebarWrapper)

  // 在侧边栏内部追加一个拖拽条
  $sidebarWrapper.append(`
      <div class="drag-bar" style="width: 4px; cursor: ew-resize"></div>
    `)
  // 读取存储的侧边栏宽度
  const storeSidebarWidth = Store.get(storeKeys.sidebarWidth + host)
  if (storeSidebarWidth) {
    $mainOutletWrapper.css('grid-template-columns', `${storeSidebarWidth}px minmax(0, 1fr)`)
  }

  // 拖拽条
  const $dragBar = $sidebarWrapper.find('.drag-bar');
  // 是否正在拖拽
  let isDragging = false;
  // 鼠标按下时的 clientX
  let startClientX = 0;
  // 鼠标按下时的侧边栏宽度
  let startSidebarWidth = 0;
  // 侧边栏宽度范围
  const minSidebarWidth = 180, maxSidebarWidth = 500;
  let newSidebarWidth = 0;

  // 鼠标按下事件
  $dragBar.on('mousedown', (e) => {
    startClientX = e.clientX;
    startSidebarWidth = $sidebarWrapper.width();
    isDragging = true;
    // 改变鼠标样式
    document.body.style.cursor = 'ew-resize';
    // 设置拖拽条背景色
    $dragBar.css('background-color', '#e6e6e6');
    // 防止文本被选中
    e.preventDefault();
  });

  // 鼠标移动事件
  $(document).on('mousemove', (e) => {
    if (!isDragging) return;

    // 计算新的宽度
    const deltaX = e.clientX - startClientX;
    newSidebarWidth = startSidebarWidth + deltaX;

    if (newSidebarWidth >= minSidebarWidth && newSidebarWidth <= maxSidebarWidth) {
      $mainOutletWrapper.css('grid-template-columns', `${newSidebarWidth}px minmax(0, 1fr)`);
    }
  });

  // 鼠标松开事件
  $(document).on('mouseup', () => {
    if (!isDragging) return

    isDragging = false;
    // 恢复鼠标样式
    document.body.style.cursor = 'default';
    // 恢复拖拽条背景色
    $dragBar.css('background-color', 'transparent');
    // 记忆侧边栏宽度
    Store.set(storeKeys.sidebarWidth + host, newSidebarWidth);
  });
}

(() => {
  'use strict';

  // 判断是否为 Discourse
  const generator = $('meta[name="generator"]')?.attr('content');
  if (!generator || generator.indexOf('Discourse') == -1)
    return;

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

  loadDragBar()
})();
