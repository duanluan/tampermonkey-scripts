// ==UserScript==
// @name         Discourse Pro
// @namespace    http://tampermonkey.net/
// @version      0.1.0
// @description  增强 Discourse 论坛。
// @author       duanluan
// @copyright    2024, duanluan (https://github.com/duanluan)
// @license      Apache-2.0 https://www.apache.org/licenses/LICENSE-2.0.txt
// @homepage     https://greasyfork.org/zh-CN/scripts/520817
// @supportURL   https://github.com/duanluan/tampermonkey-scripts/issues
// @match        *://greasyfork.org/*
// @match        *://linux.do/*
// @match        *://meta.appinn.net/*
// @require      https://cdn.jsdelivr.net/npm/jquery@3.7.1/dist/jquery.slim.min.js
// @grant        GM_getValue
// @grant        GM_setValue
// @grant        GM_registerMenuCommand
// @grant        GM_unregisterMenuCommand
// ==/UserScript==

// ==OpenUserJS==
// @author       duanluan
// @updateURL    https://raw.kkgithub.com/duanluan/tampermonkey-scripts/main/discourse-pro/dist/discourse-pro.user.js
// ==/OpenUserJS==

import {loadDragBar} from "./module/dragBar"
import {loadWidescreenMode} from "./module/widescreenMode";
import Options from "./Options";
import Store from "@utils/gm/Store";

(() => {
  'use strict'

  Options.registerAll();
  Options.loadInGreasyfork();

  // 判断是否为 Discourse
  const generator = $('meta[name="generator"]')?.attr('content')
  if (!generator || generator.indexOf('Discourse') == -1)
    return

  const selector = {
    headerWrap: '.d-header>.wrap',
    // 侧边栏展开收起按钮
    headerSidebarToggleBtn: '.header-sidebar-toggle>button',
    // 侧边栏和主内容的父容器
    mainOutletWrapper: '#main-outlet-wrapper',
    // 侧边栏
    sidebarWrapper: '.sidebar-wrapper',
    sidebar: '#d-sidebar',
    // 主内容
    mainOutlet: '#main-outlet',
  }

  const storeKeys = {
    // 侧边栏宽度
    sidebarWidth: 'sidebarWidth_'
  }

  // 加载宽屏模式
  if (JSON.parse(Store.get(Options.Keys.widescreenMode)).value) {
    loadWidescreenMode({
      headerWrap: selector.headerWrap,
      mainOutletWrapper: selector.mainOutletWrapper,
      mainOutlet: selector.mainOutlet
    })
  }
  // 加载拖拽条
  if (JSON.parse(Store.get(Options.Keys.dragBar)).value) {
    loadDragBar({
      mainOutletWrapper: selector.mainOutletWrapper,
      sidebarWrapper: selector.sidebarWrapper,
      sidebar: selector.sidebar,
      headerSidebarToggleBtn: selector.headerSidebarToggleBtn,

      sidebarWidthKey: storeKeys.sidebarWidth + location.host,
      minSidebarWidth: 180,
      maxSidebarWidth: 500
    })
  }
})()
