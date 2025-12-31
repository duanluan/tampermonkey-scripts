// ==UserScript==
// @name         Gemini Pro
// @namespace    http://tampermonkey.net/
// @version      0.2.0
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
      /* 可拖拽 */
      cursor: grab;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: background-color 0.2s;
      color: #444746;
      /* 防止拖拽时选中内部图标 */
      user-select: none;
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
      /* 让事件穿透图标直接打在 div 上 */
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
    // 我的内容入口按钮
    myContentEntryBtn: 'side-nav-entry-button',
    // 我的内容预览
    myContentPreview: 'my-stuff-recents-preview',
    // 底部免责声明
    disclaimer: 'hallucination-disclaimer'
  }

  const defaultConfig = {
    hideMyContentEntryBtn: false,
    hideMyContentPreview: false,
    hideDisclaimer: false,
    hideInputShadow: false,
    // 记录悬浮按钮位置
    fabPos: {top: '', left: ''},
    // 默认边距
    page: {
      chatLeftPadding: '10%',
      chatRightPadding: '10%',
      chatBottomPadding: '',
      // 新增：Markdown 内容间距设置 (P 只设下边距，H/LI 设上下边距)
      pBottomSpacing: '',
      hTopSpacing: '',
      hBottomSpacing: '',
      // 新增：UL/OL 列表整体间距
      ulTopSpacing: '',
      ulBottomSpacing: '',
      // LI 列表项间距
      liTopSpacing: '',
      liBottomSpacing: '',
      // 代码块行高
      codeLineHeight: '',
      // 代码块最大高度 (替代原最大行数)
      codeMaxHeight: ''
    }
  }
  const STORE_CONF_KEY = 'config';

  // 读取配置
  let savedConfigStr = Store.get(STORE_CONF_KEY);
  let config = savedConfigStr ? JSON.parse(savedConfigStr) : defaultConfig;
  config.page = {...defaultConfig.page, ...(config.page || {})};

  /**
   * 辅助函数：确保 CSS 值带有单位 (默认 px)
   */
  const toCssVal = (val) => {
    if (!val) return '0px';
    val = String(val).trim();
    // 纯数字补 px
    if (/^\d+$/.test(val)) return val + 'px';
    return val;
  };

  /**
   * 应用页面宽度样式 (核心修复版)
   */
  const applyPageStyle = () => {
    const styleId = 'gemini-pro-page-style';
    let $style = $(`#${styleId}`);
    if ($style.length === 0) {
      $style = $(`<style id="${styleId}"></style>`);
      $('head').append($style);
    }

    let leftRaw = config.page.chatLeftPadding;
    let rightRaw = config.page.chatRightPadding;
    let bottomRaw = config.page.chatBottomPadding;

    // 计算并限制总边距不超过 80%
    const winWidth = $(window).width() || window.innerWidth || 0;
    // 定义最大总边距 (80%)
    const maxTotalPadding = winWidth * 0.8;

    // 内部辅助：统一转像素
    const parseToPx = (val) => {
      if (!val) return 0;
      val = String(val).trim();
      // 如果是百分比
      if (val.endsWith('%')) {
        return (parseFloat(val) / 100) * winWidth;
      }
      // 否则视为数字或 px
      return parseFloat(val) || 0;
    };

    let leftPx = parseToPx(leftRaw);
    let rightPx = parseToPx(rightRaw);
    const totalPx = leftPx + rightPx;

    // 判断是否超过阈值 (需确保 width > 0 避免除以 0)
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
      // 未超限，使用常规格式化 (补全单位)
      leftRaw = toCssVal(leftRaw);
      rightRaw = toCssVal(rightRaw);
    }

    // 底边距不需要参与宽度计算逻辑，直接格式化
    bottomRaw = toCssVal(bottomRaw);

    const chatLeftPadding = leftRaw;
    const chatRightPadding = rightRaw;
    const chatBottomPadding = bottomRaw;

    // 处理 Markdown 间距配置
    const pBottom = toCssVal(config.page.pBottomSpacing);
    const hTop = toCssVal(config.page.hTopSpacing);
    const hBottom = toCssVal(config.page.hBottomSpacing);
    const ulTop = toCssVal(config.page.ulTopSpacing);
    const ulBottom = toCssVal(config.page.ulBottomSpacing);
    const liTop = toCssVal(config.page.liTopSpacing);
    const liBottom = toCssVal(config.page.liBottomSpacing);

    // 代码行高：不使用 toCssVal，允许纯数字作为倍数
    const codeLH = config.page.codeLineHeight ? String(config.page.codeLineHeight).trim() : '';

    // 代码块最大高度 CSS 生成逻辑
    let codeMaxHeightCss = '';
    if (config.page.codeMaxHeight) {
      const maxH = toCssVal(config.page.codeMaxHeight);
      // 作用于 code-block 内部的 pre 标签
      // 强制 display: block 以确保 scrollbar 能正常出现
      codeMaxHeightCss = `
        .formatted-code-block-internal-container pre {
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
      #chat-history > .chat-history {
        padding: 16px ${chatRightPadding} 20px ${chatLeftPadding} !important;
      }
      /* 聊天对话 Gem 信息 */
      #chat-history > .chat-history > .bot-info-card-container {
        padding: 0 !important;
      }
      /* 解决修改 Gem 信息 padding 后不居中问题 */
      bot-info-card > .bot-info-card-container {
        align-items: center !important;
      }
      
      /* 用户说 */
      user-query {
        max-width: 100% !important;
      }
      user-query-content > .user-query-container {
        max-width: 50% !important;
      }
      /* AI 说 */
      .conversation-container {
        max-width: 100% !important;
      }
      
      /* 聊天输入边距 */
      input-container {
        padding: 0 ${chatRightPadding} ${chatBottomPadding} ${chatLeftPadding} !important;
      }
      /* 聊天输入最大宽度 */
      .input-area-container {
        max-width: 100% !important;
      }

      /* === Markdown 内容间距调整 === */
      
      /* 段落 (P)：只控制下边距 */
      ${config.page.pBottomSpacing ? `
      message-content .markdown p {
        margin-bottom: ${pBottom} !important;
      }` : ''}

      /* 标题 (H1-H6)：控制上下边距 */
      ${config.page.hTopSpacing || config.page.hBottomSpacing ? `
      message-content .markdown h1,
      message-content .markdown h2,
      message-content .markdown h3,
      message-content .markdown h4,
      message-content .markdown h5,
      message-content .markdown h6 {
        ${config.page.hTopSpacing ? `margin-top: ${hTop} !important;` : ''}
        ${config.page.hBottomSpacing ? `margin-bottom: ${hBottom} !important;` : ''}
      }` : ''}

      /* 列表整体 (UL/OL)：控制上下边距 */
      ${config.page.ulTopSpacing || config.page.ulBottomSpacing ? `
      message-content .markdown ul,
      message-content .markdown ol {
        ${config.page.ulTopSpacing ? `margin-top: ${ulTop} !important;` : ''}
        ${config.page.ulBottomSpacing ? `margin-bottom: ${ulBottom} !important;` : ''}
      }` : ''}

      /* 列表项 (LI)：控制上下边距 */
      ${config.page.liTopSpacing || config.page.liBottomSpacing ? `
      message-content .markdown ul li,
      message-content .markdown ol li,
      message-content .markdown ul li > p,
      message-content .markdown ol li > p {
        ${config.page.liTopSpacing ? `margin-top: ${liTop} !important;` : ''}
        ${config.page.liBottomSpacing ? `margin-bottom: ${liBottom} !important;` : ''}
      }` : ''}

      /* 代码块行高 (同时控制外层容器和内层 span) */
      ${config.page.codeLineHeight ? `
      .code-container,
      .code-container pre,
      .code-container code,
      .code-container span {
        line-height: ${codeLH} !important;
      }` : ''}
      
      /* 代码块最大高度 (滚动条) */
      ${codeMaxHeightCss}
    `);
  };

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
  // (避免大屏幕下设置的 px 值在小屏幕上占满全屏)
  $(window).on('resize', () => {
    applyPageStyle();
  });

  // 定义点击设置时的回调函数
  const onSettingsClick = () => {
    // 辅助函数：获取配置值 > 页面实时计算值 > 兜底默认值
    const getVal = (key: string, selector: string, prop: any, fallback: string) => {
      // 1. 如果有配置值，直接使用 (保持用户输入的原样)
      if (config.page[key]) return config.page[key];

      // 2. 尝试从 DOM 获取当前计算样式 (浏览器通常返回 px)
      const el = document.querySelector(selector);
      if (el) {
        return getComputedStyle(el)[prop];
      }

      // 3. 使用兜底默认值，如果是 rem 则转换为 px
      if (fallback && fallback.includes('rem')) {
        const rootFontSize = parseFloat(getComputedStyle(document.documentElement).fontSize) || 16;
        return (parseFloat(fallback) * rootFontSize) + 'px';
      }

      return fallback || '';
    };

    // 获取用于显示在 Input 框中的值
    // 默认值参考：s=8px, h-top=1.75rem, h-bottom=8px, li=8px
    const pBottom = getVal('pBottomSpacing', 'message-content .markdown p', 'marginBottom', '');
    const hTop = getVal('hTopSpacing', 'message-content .markdown h2', 'marginTop', '1.75rem');
    const hBottom = getVal('hBottomSpacing', 'message-content .markdown h2', 'marginBottom', '8px');

    // UL/OL 默认通常是 1em，这里兜底给 16px (1rem)
    const ulTop = getVal('ulTopSpacing', 'message-content .markdown ul', 'marginTop', '1rem');
    const ulBottom = getVal('ulBottomSpacing', 'message-content .markdown ul', 'marginBottom', '1rem');

    const liTop = getVal('liTopSpacing', 'message-content .markdown li', 'marginTop', '8px');
    const liBottom = getVal('liBottomSpacing', 'message-content .markdown li', 'marginBottom', '8px');

    // 代码块行高：优先获取 code 标签的行高，比 span 更能反映块级属性
    const codeLH = getVal('codeLineHeight', '.code-container code', 'lineHeight', '1.5');
    // 代码块最大高度
    const codeMaxH = config.page.codeMaxHeight;

    layer.open({
      type: 1,
      area: ['500px', '650px'],
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
              </form>
            </div>

            <div class="layui-tab-item">
              <form class="layui-form" lay-filter="page-form" style="padding: 10px;">
                <fieldset class="layui-elem-field layui-field-title" style="margin-top: 10px;">
                  <legend style="font-size: 14px;">容器边距</legend>
                </fieldset>
                <div class="layui-form-item">
                  <div class="layui-inline">
                    <label class="layui-form-label" style="width: 80px;">聊天左</label>
                    <div class="layui-input-inline" style="width: 100px;">
                      <input type="text" name="chatLeftPadding" value="${config.page.chatLeftPadding}" placeholder="如 50px 或 10%" autocomplete="off" class="layui-input">
                    </div>
                  </div>
                  <div class="layui-inline">
                    <label class="layui-form-label" style="width: 80px;">聊天右</label>
                    <div class="layui-input-inline" style="width: 100px;">
                      <input type="text" name="chatRightPadding" value="${config.page.chatRightPadding}" placeholder="如 50px 或 10%" autocomplete="off" class="layui-input">
                    </div>
                  </div>
                </div>
                <div class="layui-form-item">
                  <label class="layui-form-label" style="width: 80px;">聊天下</label>
                  <div class="layui-input-block" style="margin-left: 110px;">
                    <input type="text" name="chatBottomPadding" value="${config.page.chatBottomPadding}" placeholder="如 20px" autocomplete="off" class="layui-input">
                  </div>
                </div>
                
                <fieldset class="layui-elem-field layui-field-title" style="margin-top: 20px;">
                  <legend style="font-size: 14px;">内容间距</legend>
                </fieldset>

                <div class="layui-form-item">
                  <label class="layui-form-label" style="width: 80px;">段落下</label>
                  <div class="layui-input-block" style="margin-left: 110px;">
                    <input type="text" name="pBottomSpacing" value="${pBottom}" placeholder="下间距，如 10px" autocomplete="off" class="layui-input">
                  </div>
                </div>

                <div class="layui-form-item">
                  <div class="layui-inline">
                    <label class="layui-form-label" style="width: 80px;">标题上</label>
                    <div class="layui-input-inline" style="width: 100px;">
                      <input type="text" name="hTopSpacing" value="${hTop}" placeholder="上间距" autocomplete="off" class="layui-input">
                    </div>
                  </div>
                  <div class="layui-inline">
                    <label class="layui-form-label" style="width: 60px;">标题下</label>
                    <div class="layui-input-inline" style="width: 100px;">
                      <input type="text" name="hBottomSpacing" value="${hBottom}" placeholder="下间距" autocomplete="off" class="layui-input">
                    </div>
                  </div>
                </div>
                
                <div class="layui-form-item">
                  <div class="layui-inline">
                    <label class="layui-form-label" style="width: 80px;">列表上</label>
                    <div class="layui-input-inline" style="width: 100px;">
                      <input type="text" name="ulTopSpacing" value="${ulTop}" placeholder="上间距" autocomplete="off" class="layui-input">
                    </div>
                  </div>
                  <div class="layui-inline">
                    <label class="layui-form-label" style="width: 60px;">列表下</label>
                    <div class="layui-input-inline" style="width: 100px;">
                      <input type="text" name="ulBottomSpacing" value="${ulBottom}" placeholder="下间距" autocomplete="off" class="layui-input">
                    </div>
                  </div>
                </div>

                <div class="layui-form-item">
                  <div class="layui-inline">
                    <label class="layui-form-label" style="width: 80px;">列表项上</label>
                    <div class="layui-input-inline" style="width: 100px;">
                      <input type="text" name="liTopSpacing" value="${liTop}" placeholder="上间距" autocomplete="off" class="layui-input">
                    </div>
                  </div>
                  <div class="layui-inline">
                    <label class="layui-form-label" style="width: 60px;">列表项下</label>
                    <div class="layui-input-inline" style="width: 100px;">
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
      form.render();
      // 监听复选框变更
      form.on('checkbox(item-switch)', (data: any) => {
        // 更新配置对象
        config[data.elem.name] = data.elem.checked;
        // 保存配置
        Store.set(STORE_CONF_KEY, JSON.stringify(config));
        applyConfig();
      });

      // 动态监听输入框变化 (包含原来的边距和新增的内容间距)
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
        'input[name="codeLineHeight"]',
        'input[name="codeMaxHeight"]'
      ].join(', ');

      $(inputSelector).on('input', function () {
        // 获取当前输入框的 name 和 value，更新内存中的配置
        config.page[$(this).attr('name')] = $(this).val();
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

        // 其他字段默认补 px (行高除外)
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

        // 更新输入框并手动触发 input 事件以保存和应用
        $this.val(num + unit);
        $this.trigger('input');
      });
    });
  }

  /**
   * 初始化拖拽功能 (增加边界限制)
   */
  const initDraggable = ($el: JQuery) => {
    let isDragging = false;
    // 用于区分点击和拖拽
    let hasMoved = false;
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
        hasMoved = false;
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
      // 按钮尺寸
      const elSize = 48;
      // 检查是否在屏幕外
      if (top < 0) top = 0;
      if (left < 0) left = 0;
      if (top + elSize > winHeight) top = winHeight - elSize - 24;
      if (left + elSize > winWidth) left = winWidth - elSize - 24;
      $fab.css({ top: top + 'px', left: left + 'px', bottom: 'auto', right: 'auto' });
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