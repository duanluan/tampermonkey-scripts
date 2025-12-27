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
      transition: background-color 0.2s; /* 移除 transform 动画以消除拖拽时的滞后感 */
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

    /* 深色模式适配 - 悬浮按钮 */
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

    /* === Layui 弹窗深色模式适配 (通过 Skin 类名控制) === */
    /* 弹窗整体容器 */
    html body .layui-layer-gemini-dark.layui-layer-page, 
    html body .layui-layer-gemini-dark.layui-layer-iframe,
    html body .layui-layer-gemini-dark.layui-layer-dialog {
      background-color: #1e1f20 !important;
      color: #ffffff !important;
      box-shadow: 0 6px 16px rgba(0, 0, 0, 0.6) !important;
      border: 1px solid #444 !important;
    }

    /* 暴力修正：强制弹窗内所有后代元素字体均为纯白 */
    html body .layui-layer-gemini-dark * {
      color: #ffffff !important;
    }

    /* 标题栏 */
    html body .layui-layer-gemini-dark .layui-layer-title {
      background-color: #2d2e2f !important;
      color: #ffffff !important;
      border-bottom: 1px solid #444 !important;
    }

    /* 内容区域 */
    html body .layui-layer-gemini-dark .layui-layer-content {
      color: #ffffff !important;
    }

    /* 表单控件文字 (如 Checkbox 后面的文字、Label) */
    html body .layui-layer-gemini-dark .layui-form-label,
    html body .layui-layer-gemini-dark .layui-form-checkbox span {
      color: #ffffff !important;
    }
    
    /* 复选框 hover 状态 */
    html body .layui-layer-gemini-dark .layui-form-checkbox:hover span {
      color: #fff !important;
    }

    /* 关闭按钮 (X) 反转颜色以适应深色背景 */
    html body .layui-layer-gemini-dark .layui-layer-setwin a {
      filter: invert(1) grayscale(100%) brightness(200%);
    }
    
    /* 按钮 (如果有) */
    html body .layui-layer-gemini-dark .layui-layer-btn a {
      background: #2d2e2f !important;
      border-color: #444 !important;
      color: #ffffff !important;
    }
    html body .layui-layer-gemini-dark .layui-layer-btn .layui-layer-btn0 {
      background: #0b57d0 !important; /* 保持确认按钮为蓝色主题 */
      border-color: #0b57d0 !important;
      color: #fff !important;
    }

    /* === 核心功能：极简输入框样式 === */
    
    /* 清除顶部的虚化遮罩，这是导致长截图出现阴影接缝的根源 */
    body.gemini-pro-no-input-shadow .input-gradient,
    body.gemini-pro-no-input-shadow .input-gradient::before,
    body.gemini-pro-no-input-shadow .input-gradient::after {
      background: none !important;
      background-image: none !important;
      mask: none !important;
      -webkit-mask: none !important;
      box-shadow: none !important;
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
   * 应用配置（根据配置显示或隐藏元素）
   */
  const applyConfig = () => {
    $(selector.myContentEntryBtn).toggle(!config.hideMyContentEntryBtn);
    $(selector.myContentPreview).toggle(!config.hideMyContentPreview);
    $(selector.disclaimer).toggle(!config.hideDisclaimer);
    // 样式类配置：通过 toggleClass 给 body 加标记
    $('body').toggleClass('gemini-pro-no-input-shadow', config.hideInputShadow);
  };

  // 初始应用
  applyConfig();

  // Gemini 是 SPA，元素是动态加载的，必须监听 DOM 变化才能在刷新后生效
  const observer = new MutationObserver((mutations) => {
    applyConfig();
    // 确保悬浮按钮始终在最上层
    ensureFab();
  });

  // 开始监听 body 的子元素变化
  observer.observe(document.body, {
    childList: true,
    subtree: true
  });

  // 辅助函数：检测是否应该使用深色模式
  const isDarkMode = () => {
    // 1. 优先检测 Gemini 网页背景颜色（最准确，覆盖所有情况）
    // 如果背景颜色亮度较低，则认为是深色模式
    try {
      const bgColor = window.getComputedStyle(document.body).backgroundColor;
      // 提取 rgb 值
      const rgb = bgColor.match(/\d+/g);
      if (rgb) {
        // 计算亮度 (YIQ 公式)
        const brightness = (parseInt(rgb[0]) * 299 + parseInt(rgb[1]) * 587 + parseInt(rgb[2]) * 114) / 1000;
        return brightness < 128; // 亮度小于 128 视为深色
      }
    } catch (e) {
      console.warn('Gemini Pro: Failed to detect theme via background color', e);
    }

    // 2. 降级检测：操作系统设置
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  };

  // 定义点击设置时的回调函数
  const onSettingsClick = () => {
    // 动态决定是否应用深色皮肤
    const skinClass = isDarkMode() ? 'layui-layer-gemini-dark' : '';

    layer.open({
      type: 1,
      area: ['500px', '400px'],
      title: 'Gemini Pro 设置',
      shadeClose: true, // 点击遮罩关闭
      skin: skinClass, // 动态注入深色模式皮肤类
      content: `
      <form class="layui-form" style="padding: 20px;" action="">
        <div class="layui-form-item">
          <label class="layui-form-label" style="width: 60px;">隐藏：</label>
          <div class="layui-input-block" style="margin-left: 90px;">
            <input type="checkbox" title="侧边栏-我的内容" name="hideMyContentEntryBtn" lay-filter="item-switch" ${config.hideMyContentEntryBtn ? 'checked' : ''}/>
            <input type="checkbox" title="侧边栏-我的内容图片" name="hideMyContentPreview" lay-filter="item-switch" ${config.hideMyContentPreview ? 'checked' : ''}/>
            <input type="checkbox" title="底部免责声明" name="hideDisclaimer" lay-filter="item-switch" ${config.hideDisclaimer ? 'checked' : ''}/>
            <input type="checkbox" title="聊天输入框上边渐变" name="hideInputShadow" lay-filter="item-switch" ${config.hideInputShadow ? 'checked' : ''}/>
          </div>
        </div>
      </form>
    `
    })

    // layer.open 中 radio、checkbox、select 需要 render 才能显示
    layui.use('form', () => {
      layui.form.render();

      // 监听复选框变更
      layui.form.on('checkbox(item-switch)', (data: any) => {
        // 更新配置对象
        const name = data.elem.name;
        config[name] = data.elem.checked;

        // 保存并应用
        Store.set(STORE_CONF_KEY, JSON.stringify(config));
        applyConfig();
      });
    });
  }

  /**
   * 初始化拖拽功能 (增加边界限制)
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

      // 计算新坐标
      let newLeft = startLeft + deltaX;
      let newTop = startTop + deltaY;

      // 边界限制：获取窗口宽高和元素宽高
      const winWidth = $(window).width() || 0;
      const winHeight = $(window).height() || 0;
      const elWidth = $el.outerWidth() || 48;
      const elHeight = $el.outerHeight() || 48;

      // 限制左/右边界
      if (newLeft < 0) newLeft = 0;
      if (newLeft + elWidth > winWidth) newLeft = winWidth - elWidth;

      // 限制上/下边界
      if (newTop < 0) newTop = 0;
      if (newTop + elHeight > winHeight) newTop = winHeight - elHeight;

      // 更新位置
      $el.css({
        left: newLeft + 'px',
        top: newTop + 'px',
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

    // 如果配置中有保存的位置，应用之 (带越界修正)
    if (config.fabPos && config.fabPos.top && config.fabPos.left) {
      let top = parseInt(config.fabPos.top);
      let left = parseInt(config.fabPos.left);

      const winWidth = $(window).width() || window.innerWidth;
      const winHeight = $(window).height() || window.innerHeight;
      const elSize = 48; // 按钮尺寸

      // 修正逻辑：如果保存的位置超出了当前屏幕范围，强制拉回边缘
      // 检查是否在屏幕外
      if (top < 0) top = 0;
      if (left < 0) left = 0;
      if (top + elSize > winHeight) top = winHeight - elSize - 24; // 减去一些 padding 防止贴死
      if (left + elSize > winWidth) left = winWidth - elSize - 24;

      $fab.css({
        top: top + 'px',
        left: left + 'px',
        bottom: 'auto',
        right: 'auto'
      });
    }

    // 初始化拖拽逻辑 (内部包含点击处理)
    initDraggable($fab);

    // 添加到 Body
    $('body').append($fab);
  };

  // 1. 注册 Tampermonkey 菜单选项 (保留作为备用入口)
  Options.registerAll(onSettingsClick);

  // 2. 渲染页面 UI 入口
  ensureFab();
})();