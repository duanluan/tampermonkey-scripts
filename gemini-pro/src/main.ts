// ==UserScript==
// @name         Gemini Pro
// @namespace    http://tampermonkey.net/
// @version      0.1.0
// @description  增强 Gemini 对话界面
// @author       duanluan
// @copyright    2025, duanluan (https://github.com/duanluan)
// @license      Apache-2.0; https://www.apache.org/licenses/LICENSE-2.0.txt
// @homepage     https://greasyfork.org/zh-CN/scripts/558517
// @match        https://gemini.google.com/*
// @require      https://cdn.jsdelivr.net/npm/jquery@3.7.1/dist/jquery.slim.min.js
// @resource     layui_css https://cdn.jsdelivr.net/npm/layui-tampermonkey@2.9.9-rc.3/css/layui.css
// @require      https://cdn.jsdelivr.net/npm/layui-tampermonkey@2.9.9-rc.3/layui.js
// @grant        GM_registerMenuCommand
// @grant        GM_getResourceText
// @grant        GM_addStyle
// @grant        GM_getValue
// @grant        GM_setValue
// ==/UserScript==

// ==OpenUserJS==
// @author       duanluan
// @updateURL    https://raw.kkgithub.com/duanluan/tampermonkey-scripts/main/gemini-pro/dist/gemini-pro.user.js
// ==/OpenUserJS==

import Store from "@utils/gm/Store";
import Options from "../../gemini-pro/src/Options";

(() => {
  'use strict';

  // 加载 Layui CSS
  GM_addStyle(GM_getResourceText('layui_css'));

  // 注入自定义样式
  GM_addStyle(`
    .layui-layer-ico{background:url('https://cdn.jsdelivr.net/npm/layer-src@3.5.1/dist/theme/default/icon.png') no-repeat}
    .layui-layer-ico1{background-position:-30px 0}
    .layui-layer-ico2{background-position:-60px 0}
    .layui-layer-ico3{background-position:-90px 0}
    .layui-layer-ico4{background-position:-120px 0}
    .layui-layer-ico5{background-position:-150px 0}
    .layui-layer-ico6{background-position:-180px 0}
    
    /* === 设置入口：悬浮按钮 === */
    #gemini-pro-fab {
      position: fixed;
      /* 默认位置在右下角，具体的 top/left 会由 JS 覆盖 */
      bottom: 24px;
      right: 24px;
      width: 48px;
      height: 48px;
      border-radius: 50%;
      background-color: #fff;
      box-shadow: 0 4px 8px rgba(0,0,0,0.15);
      z-index: 9999;
      cursor: grab; /* 提示可拖拽 */
      display: flex;
      align-items: center;
      justify-content: center;
      transition: background-color 0.2s, transform 0.1s; /* 移除 box-shadow 和位置的 transition 以免拖拽延迟 */
      color: #444746;
      user-select: none; /* 防止拖拽时选中内部图标 */
    }

    #gemini-pro-fab:active {
      cursor: grabbing;
      transform: scale(0.95);
    }

    #gemini-pro-fab:hover {
      background-color: #f0f4f9;
    }

    #gemini-pro-fab svg {
      fill: currentColor;
      width: 24px;
      height: 24px;
      pointer-events: none; /* 让事件穿透图标直接打在 div 上 */
    }

    /* 深色模式适配 */
    @media (prefers-color-scheme: dark) {
      #gemini-pro-fab {
        background-color: #1e1f20;
        color: #e3e3e3;
        box-shadow: 0 4px 8px rgba(0,0,0,0.4);
      }
      #gemini-pro-fab:hover {
        background-color: #2d2e2f;
      }
    }

    /* === 核心功能：极简输入框样式 === */
    
    /* 1. 清除顶部渐变遮罩 (Input Gradient)：覆盖所有可能的实现方式：背景图、伪元素、背景色 */
    body.gemini-pro-no-input-shadow .input-gradient,
    body.gemini-pro-no-input-shadow .input-gradient::before,
    body.gemini-pro-no-input-shadow .input-gradient::after {
      background: none !important;
      background-image: none !important;
      mask: none !important;
      -webkit-mask: none !important;
      box-shadow: none !important;
    }

    /* 2. 清除输入框本体的投影 (Box Shadow)：穿透多层容器，确保阴影被移除 
    */
    body.gemini-pro-no-input-shadow input-area-v2,
    body.gemini-pro-no-input-shadow .input-box-shadow,
    body.gemini-pro-no-input-shadow .input-area-container,
    body.gemini-pro-no-input-shadow .text-input-field {
      box-shadow: none !important;
    }

    /* 3. 给输入框加一个极淡的边框，防止去阴影后和背景融为一体看不清轮廓 */
    body.gemini-pro-no-input-shadow input-area-v2 {
      border: 1px solid rgba(0,0,0, 0.1) !important;
    }
    /* 深色模式适配边框 */
    @media (prefers-color-scheme: dark) {
      body.gemini-pro-no-input-shadow input-area-v2 {
        border: 1px solid rgba(255,255,255, 0.1) !important;
      }
    }
  `);

  const selector = {
    // 我的内容入口按钮
    myContentEntryBtn: 'side-nav-entry-button',
    // 我的内容图片预览
    myContentPreview: 'my-stuff-recents-preview',
    // 底部免责声明
    disclaimer: 'hallucination-disclaimer'
  }

  const defaultConfig = {
    hideMyContentEntryBtn: false,
    hideMyContentPreview: false,
    hideDisclaimer: false,
    hideInputShadow: false,
    // 新增：记录悬浮按钮位置
    fabPos: { top: '', left: '' }
  }
  const STORE_CONF_KEY = 'config';

  // 读取配置
  let savedConfigStr = Store.get(STORE_CONF_KEY);
  let config = savedConfigStr ? JSON.parse(savedConfigStr) : defaultConfig;

  /**
   * 应用配置
   */
  const applyConfig = () => {
    // 显隐类配置
    $(selector.myContentEntryBtn).toggle(!config.hideMyContentEntryBtn);
    $(selector.myContentPreview).toggle(!config.hideMyContentPreview);
    $(selector.disclaimer).toggle(!config.hideDisclaimer);

    // 样式类配置：通过 toggleClass 给 body 加标记
    // 这种方式比直接用 JS 改 CSS 更稳定，且能自动处理 SPA 页面重绘
    $('body').toggleClass('gemini-pro-no-input-shadow', config.hideInputShadow);
  };

  applyConfig();

  // 监听 DOM 变化
  const observer = new MutationObserver((mutations) => {
    applyConfig();
    ensureFab();
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true
  });

  // 设置面板回调
  const onSettingsClick = () => {
    layer.open({
      type: 1,
      area: ['500px', '400px'],
      title: 'Gemini Pro 设置',
      shadeClose: true,
      content: `
      <form class="layui-form" style="padding: 20px;" action="">
        <div class="layui-form-item">
          <label class="layui-form-label" style="width: 120px;">隐藏侧边栏入口：</label>
          <div class="layui-input-block" style="margin-left: 150px;">
            <input type="checkbox" title="我的内容" name="hideMyContentEntryBtn" lay-filter="item-switch" ${config.hideMyContentEntryBtn ? 'checked' : ''}/>
          </div>
        </div>
        <div class="layui-form-item">
          <label class="layui-form-label" style="width: 120px;">隐藏图片预览：</label>
          <div class="layui-input-block" style="margin-left: 150px;">
            <input type="checkbox" title="最近图片" name="hideMyContentPreview" lay-filter="item-switch" ${config.hideMyContentPreview ? 'checked' : ''}/>
          </div>
        </div>
        <div class="layui-form-item">
          <label class="layui-form-label" style="width: 120px;">隐藏免责声明：</label>
          <div class="layui-input-block" style="margin-left: 150px;">
            <input type="checkbox" title="底部提示" name="hideDisclaimer" lay-filter="item-switch" ${config.hideDisclaimer ? 'checked' : ''}/>
          </div>
        </div>
        <div class="layui-form-item">
          <label class="layui-form-label" style="width: 120px;">界面极简：</label>
          <div class="layui-input-block" style="margin-left: 150px;">
            <input type="checkbox" title="去输入框阴影" name="hideInputShadow" lay-filter="item-switch" ${config.hideInputShadow ? 'checked' : ''}/>
          </div>
        </div>
      </form>
    `
    })

    // layer.open 中 radio、checkbox、select 需要 render 才能显示
    layui.use('form', () => {
      layui.form.render();
      layui.form.on('checkbox(item-switch)', (data: any) => {
        const name = data.elem.name;
        config[name] = data.elem.checked;
        Store.set(STORE_CONF_KEY, JSON.stringify(config));
        applyConfig();
      });
    });
  }

  /**
   * 初始化拖拽功能
   */
  const initDraggable = ($el: JQuery) => {
    let isDragging = false;
    let hasMoved = false; // 用于区分点击和拖拽
    let startX = 0, startY = 0;
    let startLeft = 0, startTop = 0;

    $el.on('mousedown', (e) => {
      // 只有左键可以拖拽
      if (e.button !== 0) return;

      isDragging = true;
      hasMoved = false;

      // 记录鼠标初始位置
      startX = e.clientX;
      startY = e.clientY;

      // 记录元素初始位置 (获取当前的 computed style)
      const rect = $el[0].getBoundingClientRect();
      startLeft = rect.left;
      startTop = rect.top;

      // 阻止文字选中
      e.preventDefault();

      // 改变光标
      $el.css('cursor', 'grabbing');
    });

    // 绑定到 document 以防止鼠标移出元素过快
    $(document).on('mousemove', (e) => {
      if (!isDragging) return;

      const deltaX = e.clientX - startX;
      const deltaY = e.clientY - startY;

      // 如果移动距离超过 2px，则视为拖拽操作 (防止手抖)
      if (Math.abs(deltaX) > 2 || Math.abs(deltaY) > 2) {
        hasMoved = true;
      }

      // 更新位置
      $el.css({
        left: startLeft + deltaX + 'px',
        top: startTop + deltaY + 'px',
        bottom: 'auto',
        right: 'auto'
      });
    });

    $(document).on('mouseup', (e) => {
      if (!isDragging) return;

      isDragging = false;
      $el.css('cursor', 'grab');

      // 如果发生了实质性移动，保存位置
      if (hasMoved) {
        const rect = $el[0].getBoundingClientRect();
        config.fabPos = {
          top: rect.top + 'px',
          left: rect.left + 'px'
        };
        Store.set(STORE_CONF_KEY, JSON.stringify(config));
      }
    });

    // 拦截点击事件
    // 如果刚刚发生了拖拽 (hasMoved 为 true)，则阻止点击打开设置
    $el.on('click', (e) => {
      if (hasMoved) {
        e.preventDefault();
        e.stopPropagation();
        hasMoved = false; // 重置
      } else {
        onSettingsClick();
      }
    });
  };

  /**
   * 渲染/确保右下角悬浮按钮存在
   */
  const ensureFab = () => {
    const btnId = 'gemini-pro-fab';
    if ($(`#${btnId}`).length > 0) return;

    // 创建悬浮按钮
    const $fab = $(`
      <div id="${btnId}" title="Gemini Pro 设置">
        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
          <path d="M440-120v-240h80v80h320v80H520v80h-80Zm-320-80v-80h240v80H120Zm160-160v-80H120v-80h160v-80h80v240h-80Zm160-80v-80h400v80H440Zm160-160v-240h80v80h160v80H680v80h-80Zm-480-80v-80h400v80H120Z"/>
        </svg>
      </div>
    `);

    // 如果配置中有保存的位置，应用之
    if (config.fabPos && config.fabPos.top && config.fabPos.left) {
      $fab.css({
        top: config.fabPos.top,
        left: config.fabPos.left,
        bottom: 'auto',
        right: 'auto'
      });
    }

    // 初始化拖拽逻辑 (内部包含点击处理)
    initDraggable($fab);

    $('body').append($fab);
  };

  Options.registerAll(onSettingsClick);
  ensureFab();
})();