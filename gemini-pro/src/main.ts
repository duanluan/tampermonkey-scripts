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
    
    /* 侧边栏入口样式优化 */
    #gemini-pro-settings-entry .mdc-list-item__start {
      display: flex !important;
      align-items: center !important;
      justify-content: center !important;
      height: 24px; /* 强制高度与 SVG 一致 */
    }

    #gemini-pro-settings-entry svg {
      fill: currentColor;
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
    // 原生"设置和帮助"按钮（用于克隆和定位）
    originalSettingsBtn: 'side-nav-action-button[data-test-id="settings-and-help-button"]',
    // 底部免责声明
    disclaimer: 'hallucination-disclaimer'
  }

  const defaultConfig = {
    hideMyContentEntryBtn: false,
    hideMyContentPreview: false,
    hideDisclaimer: false,
    hideInputShadow: false,
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
    renderSidebarEntry();
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
   * 渲染侧边栏设置入口按钮 (使用克隆方案)
   */
  const renderSidebarEntry = () => {
    const btnId = 'gemini-pro-settings-entry';

    // 1. 检查是否已存在
    if ($(`#${btnId}`).length > 0) return;

    // 2. 找到"本体"：原生的设置按钮
    const $originalBtn = $(selector.originalSettingsBtn);
    if ($originalBtn.length === 0) return;

    // 3. 克隆它
    const $newBtn = $originalBtn.clone();

    // 4. 修改克隆后的元素属性
    $newBtn.attr('id', btnId);
    $newBtn.attr('data-test-id', 'gemini-pro-entry');

    // 5. 替换图标
    // 找到内部的 icon 容器
    const $iconContainer = $newBtn.find('.mat-mdc-list-item-icon, [data-test-id="side-nav-action-button-icon"]').first();
    // 清空原有 mat-icon，插入我们的 SVG
    $iconContainer.empty().html(`
      <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
        <path d="M440-120v-240h80v80h320v80H520v80h-80Zm-320-80v-80h240v80H120Zm160-160v-80H120v-80h160v-80h80v240h-80Zm160-80v-80h400v80H440Zm160-160v-240h80v80h160v80H680v80h-80Zm-480-80v-80h400v80H120Z"/>
      </svg>
    `);

    // 6. 替换文字
    const $textContainer = $newBtn.find('[data-test-id="side-nav-action-button-content"], .mdc-list-item__primary-text').first();
    $textContainer.text('Gemini Pro');

    // 7. 处理点击事件
    const $interactiveBtn = $newBtn.find('button');
    $interactiveBtn.off();
    $interactiveBtn.on('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      onSettingsClick();
    });

    // 8. 插入到原生按钮的上方
    $originalBtn.before($newBtn);
  };

  Options.registerAll(onSettingsClick);
  renderSidebarEntry();
})();