// ==UserScript==
// @name         Discourse Pro
// @namespace    http://tampermonkey.net/
// @version      0.1.9
// @description  增强 Discourse 论坛
// @author       duanluan
// @copyright    2024, duanluan (https://github.com/duanluan)
// @license      Apache-2.0; https://www.apache.org/licenses/LICENSE-2.0.txt
// @homepage     https://greasyfork.org/zh-CN/scripts/520817
// @supportURL   https://github.com/duanluan/tampermonkey-scripts/issues
// @match        *://greasyfork.org/*
// @match        *://meta.appinn.net/*
// @match        *://linux.do/*
// @match        *://answers.netlify.com/*
// @match        *://community.cloudflare.com/*
// @match        *://community.openai.com/*
// @match        *://forums.docker.com/*
// @match        *://discourse.webflow.com/*
// @match        *://idcflare.com/*
// @require      https://cdn.jsdelivr.net/npm/jquery@3.7.1/dist/jquery.slim.min.js
// @require      https://cdn.jsdelivr.net/npm/layui-tampermonkey@2.9.9-rc.3/layui.js
// @resource     css https://cdn.jsdelivr.net/npm/layui-tampermonkey@2.9.9-rc.3/css/layui.css
// @grant        GM_getValue
// @grant        GM_setValue
// @grant        GM_registerMenuCommand
// @grant        GM_unregisterMenuCommand
// @grant        GM_getResourceText
// @grant        GM_addStyle
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
    // 话题内容和右侧内容
    postsContainer: '.container.posts',

    // 话题内容父容器
    postStream: '.post-stream',
    // 话题头像
    topicAvatar: '.topic-avatar',
    // 话题内容
    topicBody: '.topic-body',
    // 话题主内容后浏览量、链接、回复人等信息
    topicMap: '.topic-map',
    // 一段时间后的分隔线
    smallActionDesc: '.small-action-desc',
    // 上次访问分隔线
    topicPostVisitedLine: '.topic-post-visited-line',
    // 首次发帖
    postNoticeNewUser: '.post-notice.new-user',
    // 最后一个回复后的底边框
    loadingContainer: '.loading-container',
    topicTimerInfo: '.topic-timer-info',
    // 话题底部按钮
    topicFooterBtns: '#topic-footer-buttons',
    // 更多话题列表
    moreTopicsContainer: '.more-topics__container',
    // 顶部图标栏
    headerIcons: '.icons.d-header-icons'
  }

  const storeKeys = {
    // 侧边栏宽度
    sidebarWidth: 'sidebarWidth_'
  }

  /**
   * 打开设置弹窗
   */
  const openSettings = () => {
    // 生成表单 HTML
    let formHtml = '';
    Options.options.forEach((opt) => {
      // 从 Store 获取最新状态
      const storeOption = JSON.parse(Store.get(opt.name));
      const isChecked = storeOption ? storeOption.value : opt.value;

      formHtml += `
        <div class="layui-form-item">
          <label class="layui-form-label">${opt.label}</label>
          <div class="layui-input-block">
            <input type="checkbox" name="${opt.name}" lay-skin="switch" lay-text="ON|OFF" ${isChecked ? 'checked' : ''} lay-filter="discourse-pro-settings">
          </div>
        </div>
      `;
    });

    layer.open({
      type: 1,
      area: ['400px', '300px'],
      title: 'Discourse Pro 设置',
      shadeClose: true,
      content: `
        <style>
          .layui-form-label { width: 100px !important; }
          .layui-input-block { margin-left: 130px !important; }
        </style>
        <form class="layui-form" style="padding: 20px;">
          ${formHtml}
        </form>
      `
    });

    // 渲染表单并添加监听
    layui.use('form', () => {
      layui.form.render();

      // 监听复选框变更
      layui.form.on('switch(discourse-pro-settings)', (data: any) => {
        const name = data.elem.name;
        const checked = data.elem.checked;

        // 获取当前配置并更新
        const currentConfig = JSON.parse(Store.get(name));
        currentConfig.value = checked;

        // 保存配置
        Store.set(name, JSON.stringify(currentConfig));

        // 提示
        layer.msg('保存成功，刷新页面后生效', {time: 1000, offset: 't'});
      });
    });
  };

  // 添加设置按钮到 header
  const addSettingsButton = () => {
    const $headerIcons = $(selector.headerIcons);
    if ($headerIcons.length > 0) {
      // 构造按钮 HTML，模仿 Discourse 原生风格
      const btnHtml = `
        <li class="header-dropdown-toggle discourse-pro-settings-btn">
          <a class="btn no-text icon btn-flat" title="Discourse Pro 设置" tabindex="0">
            <svg class="fa d-icon d-icon-cog svg-icon svg-string" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path d="M487.4 315.7l-42.6-24.6c4.3-23.2 4.3-47 0-70.2l42.6-24.6c4.9-2.8 7.1-8.6 5.5-14-11.1-35.6-30-67.8-54.7-94.6-3.8-4.1-10-5.1-14.8-2.3L380.8 110c-17.9-15.4-38.5-27.3-60.8-35.1V25.8c0-5.6-3.9-10.5-9.4-11.7-36.7-8.2-74.3-7.8-109.2 0-5.5 1.2-9.4 6.1-9.4 11.7V75c-22.2 7.9-42.8 19.8-60.8 35.1L88.7 85.5c-4.9-2.8-11-1.9-14.8 2.3-24.7 26.7-43.6 58.9-54.7 94.6-1.7 5.4.6 11.2 5.5 14L67.3 221c-4.3 23.2-4.3 47 0 70.2l-42.6 24.6c-4.9 2.8-7.1 8.6-5.5 14 11.1 35.6 30 67.8 54.7 94.6 3.8 4.1 10 5.1 14.8 2.3l42.6-24.6c17.9 15.4 38.5 27.3 60.8 35.1v49.2c0 5.6 3.9 10.5 9.4 11.7 36.7 8.2 74.3 7.8 109.2 0 5.5-1.2 9.4-6.1 9.4-11.7v-49.2c22.2-7.9 42.8-19.8 60.8-35.1l42.6 24.6c4.9 2.8 11 1.9 14.8-2.3 24.7-26.7 43.6-58.9 54.7-94.6 1.5-5.5-.7-11.3-5.6-14.1zM256 336c-44.1 0-80-35.9-80-80s35.9-80 80-80 80 35.9 80 80-35.9 80-80 80z"></path>
            </svg>
          </a>
        </li>
      `;

      // 插入到最左边
      $headerIcons.prepend(btnHtml);

      // 绑定点击事件
      $('.discourse-pro-settings-btn').on('click', (e) => {
        e.preventDefault();
        openSettings();
      });
    }
  };

  // 尝试添加按钮（处理动态加载的情况）
  const initUI = () => {
    // 如果已经存在则不重复添加
    if ($('.discourse-pro-settings-btn').length > 0) return;

    // 如果 header icons 存在，则添加
    if ($(selector.headerIcons).length > 0) {
      addSettingsButton();
    } else {
      // 否则等待加载
      const observer = new MutationObserver(() => {
        if ($(selector.headerIcons).length > 0) {
          addSettingsButton();
          observer.disconnect();
        }
      });
      observer.observe(document.body, { childList: true, subtree: true });
    }
  };

  initUI();

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
