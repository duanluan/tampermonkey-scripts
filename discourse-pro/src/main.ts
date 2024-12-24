// ==UserScript==
// @name         Discourse Pro
// @namespace    http://tampermonkey.net/
// @version      0.1.1
// @description  增强 Discourse 论坛。
// @author       duanluan
// @copyright    2024, duanluan (https://github.com/duanluan)
// @license      Apache-2.0; https://www.apache.org/licenses/LICENSE-2.0.txt
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

    // 话题内容父容器
    postStream: '.post-stream',
    // 话题头像
    topicAvatar: '.topic-avatar',
    // 话题内容
    topicBody: '.topic-body',
    // 话题主内容后浏览量、链接、回复人等信息
    topicMap: '.topic-map',
    // 最后一个回复后的底边框
    loadingContainer: '.loading-container',
    topicTimerInfo: '.topic-timer-info',
    // 话题底部按钮
    topicFooterBtns: '#topic-footer-buttons',
    // 更多话题列表
    moreTopicsContainer: '.more-topics__container',
  }

  const storeKeys = {
    // 侧边栏宽度
    sidebarWidth: 'sidebarWidth_'
  }

  // 加载拖拽条
  if (JSON.parse(Store.get(Options.Keys.dragBar)).value) {
    loadDragBar({
      ...selector,

      sidebarWidthKey: storeKeys.sidebarWidth + location.host,
      minSidebarWidth: 180,
      maxSidebarWidth: 500
    })
  }
  // 加载宽屏模式
  if (JSON.parse(Store.get(Options.Keys.widescreenMode)).value) {
    loadWidescreenMode({
      ...selector
    })
  }
})()
