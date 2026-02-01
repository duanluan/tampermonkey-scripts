// ==UserScript==
// @name         Gemini Pro
// @namespace    http://tampermonkey.net/
// @version      0.4.0
// @description  增强 Gemini 对话界面
// @author       duanluan
// @copyright    2025, duanluan (https://github.com/duanluan)
// @license      Apache-2.0; https://www.apache.org/licenses/LICENSE-2.0.txt
// @homepage     https://greasyfork.org/zh-CN/scripts/558517
// @match        https://gemini.google.com/*
// @require      https://update.greasyfork.org/scripts/433051/Trusted%20Types%20Helper.js
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

    /* 设置按钮 */
    #gemini-pro-toolbar-btn {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      box-sizing: border-box;
      /* 标准 Material Icon Button 大小 */
      width: 40px;
      height: 40px;
      border: none;
      outline: none;
      background-color: transparent;
      fill: currentColor;
      color: #444746;
      border-radius: 50%;
      cursor: pointer;
      /* 与右侧原有图标保持一点距离 */
      margin-right: 4px;
      transition: background-color 0.15s cubic-bezier(0.4, 0.0, 0.2, 1);
    }
    
    /* 暗黑模式适配 */
    @media (prefers-color-scheme: dark) {
      #gemini-pro-toolbar-btn {
        color: #e3e3e3;
      }
      #gemini-pro-toolbar-btn:hover {
        background-color: rgba(227, 227, 227, 0.08);
      }
    }
    
    /* 普通模式下的 Hover */
    @media (prefers-color-scheme: light) {
      #gemini-pro-toolbar-btn:hover {
        background-color: rgba(68, 71, 70, 0.08);
      }
    }

    #gemini-pro-toolbar-btn svg {
      width: 24px;
      height: 24px;
      pointer-events: none;
    }
    
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
    toolbarBtn: '#gemini-pro-toolbar-btn',

    // 我的内容入口按钮
    myContentEntryBtn: '.side-nav-entry-container > side-nav-entry-button',
    // 我的内容预览
    myContentPreview: 'my-stuff-recents-preview',
    // 底部免责声明
    disclaimer: 'hallucination-disclaimer',

    // 样式应用相关
    styleId: '#gemini-pro-page-style',
    chatHistory: '#chat-history > .chat-history',
    botInfoCardContainer: '#chat-history > .chat-history > .bot-info-card-container',
    botInfoCardWrapper: 'bot-info-card > .bot-info-card-container',
    userQuery: 'user-query',
    userQueryContainer: 'user-query-content > .user-query-container',
    conversationContainer: '.conversation-container',
    inputContainer: 'input-container',
    inputAreaContainer: '.input-area-container',
    messageContent: 'message-content .markdown',
    horizontalScrollWrapper: '.horizontal-scroll-wrapper',
    tableBlockComponent: '.horizontal-scroll-wrapper > .table-block-component',
    codeContainer: '.code-container',
    formattedCodeBlock: '.formatted-code-block-internal-container pre',

    // 侧边栏
    sidenavContainer: 'bard-sidenav-container[data-test-id="bard-sidenav-container"]',
    sidenav: 'bard-sidenav',
    sideNavigationContent: 'side-navigation-content',

    // 按钮挂载点
    rightSectionContainer: 'div.right-section .buttons-container',

    // 代码块右上角的复制按钮
    copyButton: 'button.copy-button',
    // 回答底部的复制按钮组件
    copyComponent: 'copy-button',
    pre: 'pre',
    codeBlockComponent: '.code-block-component',
  };

  const defaultConfig = {
    hideMyContentEntryBtn: false,
    hideMyContentPreview: false,
    hideDisclaimer: false,
    hideInputShadow: false,
    // 复制时合并多余换行
    trimCopyNewline: false,
    page: {
      // 聊天对话容器左边距
      chatLeftPadding: '10%',
      // 聊天对话容器右边距
      chatRightPadding: '10%',
      // 聊天输入容器底边距
      chatBottomPadding: '',
      // Markdown 内容底边距
      pBottomSpacing: '',
      // 标题上下间距
      hTopSpacing: '',
      hBottomSpacing: '',
      // UL/OL 列表整体间距
      ulTopSpacing: '',
      ulBottomSpacing: '',
      // LI 列表项间距
      liTopSpacing: '',
      liBottomSpacing: '',
      // 表格下边距
      tableBottomPadding: '0px',
      // 代码块行高
      codeLineHeight: '',
      // 代码块最大高度
      codeMaxHeight: ''
    },
    // 侧边栏宽度
    sidebarWidth: ''
  }
  const STORE_CONF_KEY = 'config';

  // 读取配置
  let savedConfigStr = Store.get(STORE_CONF_KEY);
  let config = savedConfigStr ? JSON.parse(savedConfigStr) : defaultConfig;
  config.page = {...defaultConfig.page, ...(config.page || {})};

  /**
   * 将值转换为带 px 的值
   */
  const toPxVal = (val) => {
    if (!val) return '0px';
    val = String(val).trim();
    if (/^\d+$/.test(val)) return val + 'px';
    return val;
  };

  /**
   * 应用页面宽度样式
   */
  const applyPageStyle = () => {
    let $style = $(selector.styleId);
    if ($style.length === 0) {
      $style = $(`<style id="${selector.styleId.substring(1)}"></style>`);
      $('head').append($style);
    }

    let leftRaw = config.page.chatLeftPadding;
    let rightRaw = config.page.chatRightPadding;
    let bottomRaw = config.page.chatBottomPadding;

    // 计算并限制总边距不超过 80%
    const winWidth = $(window).width() || window.innerWidth || 0;
    // 最大总边距
    const maxTotalPadding = winWidth * 0.8;

    // 将值转换为像素（支持百分比和数字）
    const convertToPixels = (val) => {
      if (!val) return 0;
      val = String(val).trim();
      // 处理百分比
      if (val.endsWith('%')) {
        return (parseFloat(val) / 100) * winWidth;
      }
      // 处理数字或像素值
      return parseFloat(val) || 0;
    };

    let leftPx = convertToPixels(leftRaw);
    let rightPx = convertToPixels(rightRaw);
    const totalPx = leftPx + rightPx;

    // 判断是否超过阈值
    if (winWidth > 0 && totalPx > maxTotalPadding) {
      // 计算缩放系数
      const scale = maxTotalPadding / totalPx;

      // 按比例缩放左右边距
      leftPx = leftPx * scale;
      rightPx = rightPx * scale;

      // 覆盖原始值为计算后的 px 字符串
      leftRaw = leftPx + 'px';
      rightRaw = rightPx + 'px';
      console.warn(`Gemini Pro: Chat padding exceeded limit, adjusted to ${leftRaw} (left) and ${rightRaw} (right)`);
    } else {
      // 未超限，使用常规格式化
      leftRaw = toPxVal(leftRaw);
      rightRaw = toPxVal(rightRaw);
    }

    // 底边距不需要参与宽度计算逻辑，直接格式化
    bottomRaw = toPxVal(bottomRaw);

    const chatLeftPadding = leftRaw;
    const chatRightPadding = rightRaw;
    const chatBottomPadding = bottomRaw;

    // 处理 Markdown 间距配置
    const pBottom = toPxVal(config.page.pBottomSpacing);
    const hTop = toPxVal(config.page.hTopSpacing);
    const hBottom = toPxVal(config.page.hBottomSpacing);
    const ulTop = toPxVal(config.page.ulTopSpacing);
    const ulBottom = toPxVal(config.page.ulBottomSpacing);
    const liTop = toPxVal(config.page.liTopSpacing);
    const liBottom = toPxVal(config.page.liBottomSpacing);
    const tableBottom = toPxVal(config.page.tableBottomPadding);

    // 代码行高：不使用 toPxVal，允许纯数字作为倍数
    const codeLH = config.page.codeLineHeight ? String(config.page.codeLineHeight).trim() : '';

    // 代码块最大高度 CSS 生成逻辑
    let codeMaxHeightCss = '';
    if (config.page.codeMaxHeight) {
      const maxH = toPxVal(config.page.codeMaxHeight);
      codeMaxHeightCss = `
        ${selector.formattedCodeBlock} {
            max-height: ${maxH} !important;
            overflow-y: auto !important;
            display: block !important;
        }
      `;
    }

    // 将显隐逻辑直接转换为 CSS 规则
    const displayNone = 'display: none !important;';

    $style.text(`
      /* 显隐控制 */
      ${selector.myContentEntryBtn} {
        ${config.hideMyContentEntryBtn ? displayNone : ''}
      }
      ${selector.myContentPreview} {
        ${config.hideMyContentPreview ? displayNone : ''}
      }
      ${selector.disclaimer} {
        ${config.hideDisclaimer ? displayNone : ''}
      }
      
      /* 聊天对话容器 */
      ${selector.chatHistory} {
        padding: 16px ${chatRightPadding} 20px ${chatLeftPadding} !important;
      }
      /* 聊天对话 Gem 信息 */
      ${selector.botInfoCardContainer} {
        padding: 0 !important;
      }
      /* 解决修改 Gem 信息 padding 后不居中问题 */
      ${selector.botInfoCardWrapper} {
        align-items: center !important;
      }
      
      /* 用户说 */
      ${selector.userQuery} {
        max-width: 100% !important;
      }
      ${selector.userQueryContainer} {
        max-width: 50% !important;
      }
      /* AI 说 */
      ${selector.conversationContainer} {
        max-width: 100% !important;
      }
      
      /* 聊天输入边距 */
      ${selector.inputContainer} {
        padding: 0 ${chatRightPadding} ${chatBottomPadding} ${chatLeftPadding} !important;
      }
      /* 聊天输入最大宽度 */
      ${selector.inputAreaContainer} {
        max-width: 100% !important;
      }

      /* Markdown 内容间距调整 */
      
      /* 段落 (P)：只控制下边距 */
      ${config.page.pBottomSpacing ? `
        ${selector.messageContent} p {
          margin-bottom: ${pBottom} !important;
        }
      ` : ''}

      /* 标题 (H1-H6)：控制上下边距 */
      ${config.page.hTopSpacing || config.page.hBottomSpacing ? `
        ${selector.messageContent} h1,
        ${selector.messageContent} h2,
        ${selector.messageContent} h3,
        ${selector.messageContent} h4,
        ${selector.messageContent} h5,
        ${selector.messageContent} h6 {
          ${config.page.hTopSpacing ? `margin-top: ${hTop} !important;` : ''}
          ${config.page.hBottomSpacing ? `margin-bottom: ${hBottom} !important;` : ''}
        }
      ` : ''}

      /* 列表整体 (UL/OL)：控制上下边距 */
      ${config.page.ulTopSpacing || config.page.ulBottomSpacing ? `
        ${selector.messageContent} ul,
        ${selector.messageContent} ol {
          ${config.page.ulTopSpacing ? `margin-top: ${ulTop} !important;` : ''}
          ${config.page.ulBottomSpacing ? `margin-bottom: ${ulBottom} !important;` : ''}
        }
      ` : ''}

      /* 列表项 (LI)：控制上下边距 */
      ${config.page.liTopSpacing || config.page.liBottomSpacing ? `
        ${selector.messageContent} ul li,
        ${selector.messageContent} ol li,
        ${selector.messageContent} ul li > p,
        ${selector.messageContent} ol li > p {
          ${config.page.liTopSpacing ? `margin-top: ${liTop} !important;` : ''}
          ${config.page.liBottomSpacing ? `margin-bottom: ${liBottom} !important;` : ''}
        }
      ` : ''}

      /* 表格 (Table) 间距及滚动控制 */
      ${config.page.tableBottomPadding !== '' ? `
        ${selector.horizontalScrollWrapper},
        ${selector.tableBlockComponent} {
          overflow-x: auto !important;
          padding-bottom: ${tableBottom} !important;
        }
      ` : ''}

      /* 代码块行高 (同时控制外层容器和内层 span) */
      ${config.page.codeLineHeight ? `
        ${selector.codeContainer},
        ${selector.codeContainer} pre,
        ${selector.codeContainer} code,
        ${selector.codeContainer} span {
          line-height: ${codeLH} !important;
        }
      ` : ''}
      
      /* 代码块最大高度 (滚动条) */
      ${codeMaxHeightCss}
    `);

    // 处理侧边栏宽度
    if (config.sidebarWidth) {
      const val = toPxVal(config.sidebarWidth);

      // 需要修改变量的所有目标元素
      const targets = [
        // 侧边栏容器
        document.querySelector(selector.sidenavContainer),
        // 侧边栏
        document.querySelector(selector.sidenav),
        // 侧边栏内容
        document.querySelector(selector.sideNavigationContent)
      ];

      targets.forEach(el => {
        if (el) {
          // 设置展开宽度为自定义值
          (el as HTMLElement).style.setProperty('--bard-sidenav-open-width', val, 'important');
        }
      });

    } else {
      // 如果用户清空了设置，移除所有强制修改
      const targets = [
        document.querySelector(selector.sidenavContainer),
        document.querySelector(selector.sidenav),
        document.querySelector(selector.sideNavigationContent)
      ];

      targets.forEach(el => {
        if (el) {
          (el as HTMLElement).style.removeProperty('--bard-sidenav-open-width');
          (el as HTMLElement).style.removeProperty('--bard-sidenav-closed-width');
        }
      });
    }
  }

  /**
   * 应用配置
   */
  const applyConfig = () => {
    // 样式类配置：通过 toggleClass 给 body 加标记
    $('body').toggleClass('gemini-pro-no-input-shadow', config.hideInputShadow);
    applyPageStyle();
  };

  // 初始应用
  applyConfig();

  // 监听窗口大小变化，动态重新计算边距限制
  $(window).on('resize', () => {
    applyPageStyle();
  });

  // 标记是否点击了Gemini原生的复制按钮（代码块按钮 或 底部回答按钮）
  let isNativeCopyBtnClick = false;

  // 监听点击事件，用于检测是否点击了原生复制按钮
  document.addEventListener('click', (e) => {
    const target = e.target as HTMLElement;

    const btn =
      // 代码块右上角的复制按钮
      target.closest(selector.copyButton)
      // 回答底部的复制按钮组件
      || target.closest(selector.copyComponent);

    if (btn) {
      isNativeCopyBtnClick = true;
      // 500ms 后重置，防止影响后续操作
      setTimeout(() => {
        isNativeCopyBtnClick = false;
      }, 500);
    }
  }, true);

  // 监听复制事件（使用 { capture: true } 以在页面脚本之前拦截）
  document.addEventListener('copy', (e) => {
      // 全局开关校验
      if (!config.trimCopyNewline) return;

      // 如果是点击了 Gemini 原生的复制按钮，放行
      if (isNativeCopyBtnClick) {
        isNativeCopyBtnClick = false;
        return;
      }

      const selection = window.getSelection();
      if (!selection || selection.isCollapsed || selection.rangeCount === 0) return;

      // 如果选区完全在代码块内部（Code Block），也不做处理
      let commonNode = selection.getRangeAt(0).commonAncestorContainer;
      // 如果是文本节点，取其父元素
      if (commonNode.nodeType === 3) {
        commonNode = commonNode.parentNode;
      }
      const parentEl = commonNode as HTMLElement;
      // 检查是否在代码块容器中
      if (parentEl.closest(selector.pre) || parentEl.closest(selector.codeBlockComponent)) {
        // 纯代码块内容复制，不执行空行合并
        return;
      }

      // 执行混合内容的智能处理（保护代码块结构，合并普通文本空行）
      e.preventDefault();
      e.stopImmediatePropagation();

      // 获取 DOM 片段
      const range = selection.getRangeAt(0);
      const fragment = range.cloneContents();
      const tempDiv = document.createElement('div');
      tempDiv.appendChild(fragment);

      // 保护代码块：查找 <pre>
      const codeBlocks = tempDiv.querySelectorAll(selector.pre);
      const placeholders = [];

      codeBlocks.forEach((block, index) => {
        // 生成唯一占位符
        const placeholder = `__GEMINI_CODE_BLOCK_PROTECTION_${index}_${Date.now()}__`;
        // 保存原始内容
        placeholders.push({
          id: placeholder,
          content: block.innerText
        });
        // 替换
        block.textContent = placeholder;
      });

      // 获取文本并处理
      tempDiv.style.position = 'absolute';
      tempDiv.style.left = '-9999px';
      tempDiv.style.opacity = '0';
      document.body.appendChild(tempDiv);

      let text = tempDiv.innerText;

      document.body.removeChild(tempDiv);

      // 合并换行逻辑：每两个换行符替换为一个
      text = text.replace(/\n\n/g, '\n');

      // 还原代码块
      placeholders.forEach((item) => {
        text = text.replace(item.id, item.content);
      });

      // 彻底清空剪贴板数据并设置新的内容
      if (e.clipboardData) {
        e.clipboardData.clearData();
        e.clipboardData.setData('text/plain', text);
      }
    },
    // 表示在捕获阶段执行
    true);

  // 定义点击设置时的回调函数
  const onSettingsClick = () => {
    // 获取配置值 > 页面实时计算值 > 兜底默认值
    const getVal = (key: string, selectorStr: string, prop: any, fallback: string) => {
      // 如果有配置值，直接使用（保持用户输入的原样）
      if (config.page[key]) return config.page[key];

      // 尝试从 DOM 获取当前计算样式（浏览器通常返回 px）
      const el = document.querySelector(selectorStr);
      if (el) {
        return getComputedStyle(el)[prop];
      }

      // 使用兜底默认值，如果是 rem 则转换为 px
      if (fallback && fallback.includes('rem')) {
        const rootFontSize = parseFloat(getComputedStyle(document.documentElement).fontSize) || 16;
        return (parseFloat(fallback) * rootFontSize) + 'px';
      }

      return fallback || '';
    };

    // 获取用于显示在 Input 框中的值
    // 默认值参考：s=8px, h-top=1.75rem, h-bottom=8px, li=8px
    const pBottom = getVal('pBottomSpacing', `${selector.messageContent} p`, 'marginBottom', '');
    const hTop = getVal('hTopSpacing', `${selector.messageContent} h2`, 'marginTop', '1.75rem');
    const hBottom = getVal('hBottomSpacing', `${selector.messageContent} h2`, 'marginBottom', '8px');

    // UL/OL 默认通常是 1em，这里兜底给 16px（1rem）
    const ulTop = getVal('ulTopSpacing', `${selector.messageContent} ul`, 'marginTop', '1rem');
    const ulBottom = getVal('ulBottomSpacing', `${selector.messageContent} ul`, 'marginBottom', '1rem');

    const liTop = getVal('liTopSpacing', `${selector.messageContent} li`, 'marginTop', '8px');
    const liBottom = getVal('liBottomSpacing', `${selector.messageContent} li`, 'marginBottom', '8px');

    // 表格下边距
    const tableBottom = getVal('tableBottomPadding', selector.horizontalScrollWrapper, 'paddingBottom', '0px');

    // 代码块行高：优先获取 code 标签的行高，比 span 更能反映块级属性
    const codeLH = getVal('codeLineHeight', `${selector.codeContainer} code`, 'lineHeight', '1.5');
    // 代码块最大高度
    const codeMaxH = config.page.codeMaxHeight;

    layer.open({
      type: 1,
      area: ['600px', '650px'],
      title: 'Gemini Pro 设置',
      // 点击遮罩关闭
      shadeClose: true,
      content: `
        <div class="layui-tab layui-tab-brief" lay-filter="gemini-settings-tab" style="margin: 0;">
          <ul class="layui-tab-title">
            <li class="layui-this">常规设置</li>
            <li>页面调整</li>
            <li>代码块增强</li>
          </ul>
          <div class="layui-tab-content">
            <div class="layui-tab-item layui-show">
              <form class="layui-form" style="padding: 10px;" action="">
                <div class="layui-form-item">
                  <label class="layui-form-label" style="width: 60px;">隐藏：</label>
                  <div class="layui-input-block" style="margin-left: 90px;">
                    <input type="checkbox" title="侧边栏-我的内容" name="hideMyContentEntryBtn" lay-filter="item-switch" ${config.hideMyContentEntryBtn ? 'checked' : ''}/>
                    <input type="checkbox" title="侧边栏-我的内容预览" name="hideMyContentPreview" lay-filter="item-switch" ${config.hideMyContentPreview ? 'checked' : ''}/>
                    <input type="checkbox" title="底部免责声明" name="hideDisclaimer" lay-filter="item-switch" ${config.hideDisclaimer ? 'checked' : ''}/>
                    <input type="checkbox" title="聊天输入框上方渐变" name="hideInputShadow" lay-filter="item-switch" ${config.hideInputShadow ? 'checked' : ''}/>
                  </div>
                </div>
                
                <div class="layui-form-item">
                  <label class="layui-form-label" style="width: 60px;">其他：</label>
                  <div class="layui-input-block" style="margin-left: 90px;">
                    <input type="checkbox" title="剪贴板-删除错误空行" name="trimCopyNewline" lay-filter="item-switch" ${config.trimCopyNewline ? 'checked' : ''}/>
                  </div>
                </div>
              </form>
            </div>

            <div class="layui-tab-item">
              <form class="layui-form" lay-filter="page-form" style="padding: 10px;">
                <fieldset class="layui-elem-field layui-field-title" style="margin-top: 10px;">
                  <legend style="font-size: 14px;">容器边距</legend>
                </fieldset>
                
                <div class="layui-form-item">
                  <div class="layui-inline">
                    <label class="layui-form-label" style="width: 70px; padding-left: 5px; padding-right: 5px;">聊天左</label>
                    <div class="layui-input-inline" style="width: 90px;">
                      <input type="text" name="chatLeftPadding" value="${config.page.chatLeftPadding}" placeholder="如 10%" autocomplete="off" class="layui-input">
                    </div>
                  </div>
                  <div class="layui-inline">
                    <label class="layui-form-label" style="width: 70px; padding-left: 5px; padding-right: 5px;">聊天右</label>
                    <div class="layui-input-inline" style="width: 90px;">
                      <input type="text" name="chatRightPadding" value="${config.page.chatRightPadding}" placeholder="如 10%" autocomplete="off" class="layui-input">
                    </div>
                  </div>
                  <div class="layui-inline">
                    <label class="layui-form-label" style="width: 70px; padding-left: 5px; padding-right: 5px;">聊天下</label>
                    <div class="layui-input-inline" style="width: 90px;">
                      <input type="text" name="chatBottomPadding" value="${config.page.chatBottomPadding}" placeholder="如 20px" autocomplete="off" class="layui-input">
                    </div>
                  </div>
                </div>
                <div class="layui-form-item">
                  <div class="layui-inline">
                    <label class="layui-form-label" style="width: 70px; padding-left: 5px; padding-right: 5px;">侧边栏宽</label>
                    <div class="layui-input-inline" style="width: 90px;">
                      <input type="text" name="sidebarWidth" value="${config.sidebarWidth}" placeholder="如 300px" autocomplete="off" class="layui-input">
                    </div>
                  </div>
                </div>
                
                <fieldset class="layui-elem-field layui-field-title" style="margin-top: 20px;">
                  <legend style="font-size: 14px;">内容间距</legend>
                </fieldset>

                <div class="layui-form-item">
                  <div class="layui-inline">
                    <label class="layui-form-label" style="width: 70px; padding-left: 5px; padding-right: 5px;">段落下</label>
                    <div class="layui-input-inline" style="width: 90px;">
                      <input type="text" name="pBottomSpacing" value="${pBottom}" placeholder="如 10px" autocomplete="off" class="layui-input">
                    </div>
                  </div>
                  <div class="layui-inline">
                    <label class="layui-form-label" style="width: 70px; padding-left: 5px; padding-right: 5px;">标题上</label>
                    <div class="layui-input-inline" style="width: 90px;">
                      <input type="text" name="hTopSpacing" value="${hTop}" placeholder="上间距" autocomplete="off" class="layui-input">
                    </div>
                  </div>
                  <div class="layui-inline">
                    <label class="layui-form-label" style="width: 70px; padding-left: 5px; padding-right: 5px;">标题下</label>
                    <div class="layui-input-inline" style="width: 90px;">
                      <input type="text" name="hBottomSpacing" value="${hBottom}" placeholder="下间距" autocomplete="off" class="layui-input">
                    </div>
                  </div>
                </div>
                
                <div class="layui-form-item">
                  <div class="layui-inline">
                    <label class="layui-form-label" style="width: 70px; padding-left: 5px; padding-right: 5px;">列表上</label>
                    <div class="layui-input-inline" style="width: 90px;">
                      <input type="text" name="ulTopSpacing" value="${ulTop}" placeholder="上间距" autocomplete="off" class="layui-input">
                    </div>
                  </div>
                  <div class="layui-inline">
                    <label class="layui-form-label" style="width: 70px; padding-left: 5px; padding-right: 5px;">列表下</label>
                    <div class="layui-input-inline" style="width: 90px;">
                      <input type="text" name="ulBottomSpacing" value="${ulBottom}" placeholder="下间距" autocomplete="off" class="layui-input">
                    </div>
                  </div>
                    <div class="layui-inline">
                    <label class="layui-form-label" style="width: 70px; padding-left: 5px; padding-right: 5px;">表格下</label>
                    <div class="layui-input-inline" style="width: 90px;">
                      <input type="text" name="tableBottomPadding" value="${tableBottom}" placeholder="下间距" autocomplete="off" class="layui-input">
                    </div>
                  </div>
                </div>

                <div class="layui-form-item">
                  <div class="layui-inline">
                    <label class="layui-form-label" style="width: 70px; padding-left: 5px; padding-right: 5px;">列表项上</label>
                    <div class="layui-input-inline" style="width: 90px;">
                      <input type="text" name="liTopSpacing" value="${liTop}" placeholder="上间距" autocomplete="off" class="layui-input">
                    </div>
                  </div>
                  <div class="layui-inline">
                    <label class="layui-form-label" style="width: 70px; padding-left: 5px; padding-right: 5px;">列表项下</label>
                    <div class="layui-input-inline" style="width: 90px;">
                      <input type="text" name="liBottomSpacing" value="${liBottom}" placeholder="下间距" autocomplete="off" class="layui-input">
                    </div>
                  </div>
                </div>
                
                <div style="padding: 0 20px; color: #999; font-size: 12px; line-height: 1.5;">
                  <p>1. 支持单位：px（像素）或 %（百分比）。</p>
                  <p>2. 如果只填数字，默认为 px。</p>
                  <p>3. 留空则不调整，支持鼠标滚轮调整数值。</p>
                </div>
              </form>
            </div>

            <div class="layui-tab-item">
              <form class="layui-form" style="padding: 10px;">
                <fieldset class="layui-elem-field layui-field-title" style="margin-top: 10px;">
                  <legend style="font-size: 14px;">显示设置</legend>
                </fieldset>
                <div class="layui-form-item">
                  <label class="layui-form-label" style="width: 80px;">代码行高</label>
                  <div class="layui-input-block" style="margin-left: 110px;">
                    <input type="text" name="codeLineHeight" value="${codeLH}" placeholder="如 1.5 或 24px" autocomplete="off" class="layui-input">
                  </div>
                </div>
                <div class="layui-form-item">
                  <label class="layui-form-label" style="width: 80px;">最大高度</label>
                  <div class="layui-input-block" style="margin-left: 110px;">
                    <input type="text" name="codeMaxHeight" value="${codeMaxH}" placeholder="超出则显示滚动条，如 600px" autocomplete="off" class="layui-input">
                  </div>
                </div>
                
                <div style="padding: 0 20px; color: #999; font-size: 12px; line-height: 1.5;">
                  <p>1. 支持单位：px（像素）。</p>
                  <p>2. 行高若无单位则为倍数（支持小数）。</p>
                  <p>3. 留空则不调整，支持鼠标滚轮调整数值。</p>
                </div>
              </form>
            </div>
          </div>
        </div>
      `
    })

    // layer.open 中 radio、checkbox、select 需要 render 才能显示
    layui.use(['form', 'element'], () => {
      const form = layui.form;

      // 验证并修正侧边栏宽度
      const validateSidebarWidth = (input: any): string => {
        // 如果输入为空，直接返回空（表示使用默认/不修改）
        const strVal = String(input).trim();
        if (strVal === '') return '';

        const winWidth = window.innerWidth;
        let pxVal = 0;

        // 解析数值（支持百分比和 px）
        if (strVal.endsWith('%')) {
          const pct = parseFloat(strVal);
          if (!isNaN(pct)) {
            pxVal = (pct / 100) * winWidth;
          }
        } else {
          pxVal = parseFloat(strVal);
        }

        // 如果解析失败（非数字），返回空
        if (isNaN(pxVal)) return '';

        // 边界检查
        const MIN_PX = 200;
        const MAX_PX = winWidth * 0.5;

        if (pxVal < MIN_PX) pxVal = MIN_PX;
        if (pxVal > MAX_PX) pxVal = MAX_PX;

        // 返回修正后的 px 值字符串
        return Math.round(pxVal) + 'px';
      };

      form.render();
      // 监听复选框变更
      form.on('checkbox(item-switch)', (data: any) => {
        // 更新配置对象
        config[data.elem.name] = data.elem.checked;
        // 保存配置
        Store.set(STORE_CONF_KEY, JSON.stringify(config));
        applyConfig();
      });

      // 动态监听输入框变化
      const inputSelector = [
        'input[name="chatLeftPadding"]',
        'input[name="chatRightPadding"]',
        'input[name="chatBottomPadding"]',
        'input[name="pBottomSpacing"]',
        'input[name="hTopSpacing"]',
        'input[name="hBottomSpacing"]',
        'input[name="ulTopSpacing"]',
        'input[name="ulBottomSpacing"]',
        'input[name="liTopSpacing"]',
        'input[name="liBottomSpacing"]',
        'input[name="tableBottomPadding"]',
        'input[name="codeLineHeight"]',
        'input[name="codeMaxHeight"]',
        'input[name="sidebarWidth"]'
      ].join(', ');

      $(inputSelector).on('input', function () {
        const $this = $(this);
        const name = $this.attr('name');
        const val = $this.val();

        // 修改侧边栏宽度的处理逻辑
        if (name === 'sidebarWidth') {
          // 使用验证函数修正数值
          const validatedVal = validateSidebarWidth(val);

          // 保存修正后的值
          config[name] = validatedVal;
        } else {
          config.page[name] = val; // 存入 config.page
        }
        // 持久化保存
        Store.set(STORE_CONF_KEY, JSON.stringify(config));
        // 实时应用样式
        applyConfig();
      });

      // 支持鼠标滚轮调整数值
      $(inputSelector).on('wheel', function (e: any) {
        // 阻止默认滚动行为
        e.preventDefault();
        const $this = $(this);
        // 获取滚动方向：deltaY > 0 为向下滚动(数值减小)，deltaY < 0 为向上滚动(数值增加)
        const originalEvent = e.originalEvent;
        const delta = originalEvent.deltaY || -originalEvent.wheelDelta || originalEvent.detail;

        // 获取当前值并分离数值和单位
        let valStr = String($this.val());
        // 正则匹配：开始(可选负号)(数字)(可选单位)
        const match = valStr.match(/^(-?[\d\.]+)(.*)$/);

        let num = 0;
        let unit = ''; // 默认单位为空，由后续逻辑决定

        if (match) {
          num = parseFloat(match[1]);
          unit = match[2];
        } else if (!valStr) {
          // 如果为空，视为 0
          num = 0;
        }

        // 其他字段默认补 px（行高除外）
        const name = $this.attr('name');
        if (!unit && name !== 'codeLineHeight') {
          unit = 'px';
        }

        // 确定步长：如果是代码行高，步长为 0.1，否则为 1
        const step = name === 'codeLineHeight' ? 0.1 : 1;

        // 根据滚动方向增减
        if (delta < 0) {
          num += step;
        } else {
          num -= step;
          if (num < 0) num = 0;
        }

        // 针对小数运算修复精度问题
        if (name === 'codeLineHeight') {
          num = parseFloat(num.toFixed(1));
        }

        // 针对侧边栏宽度的滚轮验证
        let finalValStr = num + unit;
        if (name === 'sidebarWidth') {
          // 将计算出的值传入验证函数，得到修正后的值
          finalValStr = validateSidebarWidth(finalValStr);
        }

        // 更新输入框并手动触发 input 事件以保存和应用
        $this.val(finalValStr);
        $this.trigger('input');
      });

      // 侧边栏输入框失去焦点时，修正显示值
      $('input[name="sidebarWidth"]').on('blur', function () {
        const $this = $(this);
        // 获取最终保存的配置值（一定是合法的，比如 200px）
        const finalVal = config.sidebarWidth;

        // 只有当输入框当前显示的内容与最终保存值不一致时才修正
        if ($this.val() !== finalVal) {
          $this.val(finalVal);
        }
      });
    });
  }

  /**
   * 将设置按钮嵌入到页面顶部导航栏
   */
  const mountToolbarButton = () => {
    // 如果按钮已经存在，直接返回
    if ($(selector.toolbarBtn).length > 0) return;

    // 寻找容器：使用 .first() 确保只操作第一个匹配的容器
    const $container = $(selector.rightSectionContainer).first();

    // 如果容器不存在，直接返回
    if ($container.length === 0) return;

    const $btn = $(`
    <button id="${selector.toolbarBtn.substring(1)}" title="Gemini Pro 设置">
      <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
        <path d="M440-120v-240h80v80h320v80H520v80h-80Zm-320-80v-80h240v80H120Zm160-160v-80H120v-80h160v-80h80v240h-80Zm160-80v-80h400v80H440Zm160-160v-240h80v80h160v80H680v80h-80Zm-480-80v-80h400v80H120Z"/>
      </svg>
    </button>
  `);

    $btn.on('click', (e) => {
      e.stopPropagation();
      onSettingsClick();
    });

    // 插入到容器第一个位置
    $container.prepend($btn);

    // 首次运行时显示设置入口提示
    if (!Store.get('hasShownButtonHint')) {
      setTimeout(() => {
        layer.tips('Gemini Pro 设置入口在这里', selector.toolbarBtn, {
          tips: [3, '#009688'],
          time: 5000,
          anim: 5
        });
        Store.set('hasShownButtonHint', true);
      }, 4000);
    }
  };

  // 防抖定时器
  let mountTimer: number | null = null;

  // 使用 MutationObserver 监听 DOM 变化
  const observer = new MutationObserver(() => {
    // 防抖处理：避免短时间内频繁触发
    if (mountTimer !== null) {
      clearTimeout(mountTimer);
    }

    mountTimer = window.setTimeout(() => {
      mountToolbarButton();
      applyPageStyle();
    }, 100);
  });

  // 直接监听 document.body，简单有效，覆盖所有子树变化
  observer.observe(document.body, {
    childList: true,
    subtree: true
  });

  // 注册 Tampermonkey 菜单选项
  Options.registerAll(onSettingsClick);
  // 初始尝试渲染
  mountToolbarButton();
})();
