// ==UserScript==
// @name         163 Mail Pro
// @namespace    http://tampermonkey.net/
// @version      0.5.0
// @description  增强 163 网易邮箱。
// @author       duanluan
// @copyright    2025, duanluan (https://github.com/duanluan)
// @license      Apache-2.0; https://www.apache.org/licenses/LICENSE-2.0.txt
// @homepage     https://greasyfork.org/zh-CN/scripts/555894
// @supportURL   https://github.com/duanluan/tampermonkey-scripts/issues
// @match        *://mail.163.com/*
// @require      https://cdn.jsdelivr.net/npm/jquery@3.7.1/dist/jquery.slim.min.js
// @resource css https://cdn.jsdelivr.net/npm/layui-tampermonkey@2.9.9-rc.3/css/layui.css
// @require      https://cdn.jsdelivr.net/npm/layui-tampermonkey@2.9.9-rc.3/layui.js
// @grant        GM_registerMenuCommand
// @grant        GM_getResourceText
// @grant        GM_addStyle
// @grant        GM_getValue
// @grant        GM_setValue
// ==/UserScript==

// ==OpenUserJS==
// @author       duanluan
// @updateURL    https://raw.kkgithub.com/duanluan/tampermonkey-scripts/main/163-mail-pro/dist/163-mail-pro.user.js
// ==/OpenUserJS==

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

  const selector = {
    // 顶部导航栏容器
    topNav: '#_mail_component_1_1',

    // 首页 tab
    indexTab: '#_mail_tabitem_0_82',
    // 通讯录 tab
    contactsTab: '#_mail_tabitem_1_83',
    // AI 工具箱 tab
    aiToolboxTab: '#_mail_tabitem_2_84',
    // 企业邮箱 tab
    enterpriseMailTab: '#_mail_tabitem_4_86',

    // 开通超级会员无限容量 nav item
    enableVipNavItem: '#_mail_component_73_73',
    // 手机 APP nav item
    downAppNavItem: '#_mail_component_35_35',
    // 下载桌面端 nav item
    downDesktopNavItem: '#_mail_component_39_39',
    // 参与调研 nav item
    feedbackSurveyNavItem: '#_mail_component_43_43',
    // 自助查询 nav item
    selfQueryNavItem: '#_mail_component_47_47',
    // 会员中心 nav item
    memberCenterNavItem: '#_mail_component_51_51',

    // 搜索栏 AI 搜
    searchInputAiIcon: '#_mail_link_4_179',
    // AI 助理入口
    smartAssistantOperating: '.APP-smartAssistant-operating',
    smartAssistantBtn: '.APP-smartAssistant-btn',
    // AI 翻译提示
    smartAssistantReminder: '.APP-smartAssistant-reminder',
    // AI 助理右侧边栏
    smartAssistantContainer: '.APP-smartAssistant-container',
    // 邮件列表 AI 总结图标
    mailListAiSummaryIcon: '.nui-ico-letterai',
    // 邮件内容 AI 总结推广
    mailContentAiSummaryGuide: '[id$="_dvReadSAGuide"]',
    // 邮件内容 广告/占位容器
    mailContentAdContainer: '[id$="_dvReadYad"]',
    // 用户名左侧 Plus 图标
    userPlusIcon: '.nui-ico-newplusSmall',
    // 开通超级会员 Tip
    warnTips: '[id$="_dvWarnTips"]',

    // --- 其他工具栏目 ---
    // 整个其他工具栏目（包含标题和列表）
    otherToolsBox: '#dvNavFoot',
    // 邮件追踪
    trackSettingLink: '#trackSettingLink',
    // 简历优化
    resumeOpt: '#resumeOpt',
    // 智能面试顾问
    resumeInt: '#resumeInt',
    // 求职信息订阅
    resumeSub: '#resumeSub',
    // PDF转换工具 (无 ID，使用特有 Class .Fx0 定位)
    pdfConvertTool: '.Fx0',
    // 发票助手
    invoiceAssistant: '#navInvoiceAssistant',
    // 企业邮箱
    domainMail: '#navDomainMailLink',

    // --- 自动化操作对象 ---
    // 链接警告中的“普通打开”按钮
    normalOpenBtn: 'button[data-stat="sb_warning_open"]',
  }

  // 默认配置（默认选中=隐藏）
  const defaultConfig = {
    // 隐藏首页 Tab
    hideIndexTab: false,
    // 隐藏通讯录 Tab
    hideContactsTab: true,
    // 隐藏 AI 工具箱 Tab
    hideAiToolboxTab: true,
    // 隐藏企业邮箱 Tab
    hideEnterpriseMailTab: true,

    // 隐藏开通超级会员无限容量 nav item
    hideEnableVipNavItem: true,
    // 隐藏手机 APP nav item
    hideDownAppNavItem: true,
    // 隐藏下载桌面端 nav item
    hideDownDesktopNavItem: true,
    // 隐藏参与调研 nav item
    hideFeedbackSurveyNavItem: true,
    // 隐藏自助查询 nav item
    hideSelfQueryNavItem: true,
    // 隐藏会员中心 nav item
    hideMemberCenterNavItem: true,

    // 隐藏搜索栏 AI 搜
    hideSearchInputAiIcon: true,
    // 隐藏 AI 助理入口
    hideSmartAssistantOperating: true,
    hidesmartAssistantBtn: true,
    // 隐藏 AI 翻译提示
    hideSmartAssistantReminder: true,
    // 隐藏 AI 助理侧边栏
    hideSmartAssistantContainer: true,
    // 隐藏邮件列表 AI 总结图标
    hideMailListAiSummaryIcon: true,
    // 隐藏邮件内容 AI 总结推广 (同时包含 Yad 占位符)
    hideMailContentAiSummaryGuide: true,
    // 隐藏用户名左侧 Plus 图标
    hideUserPlusIcon: true,
    // 隐藏开通超级会员 Tip
    hideWarnTips: true,

    // --- 其他工具栏目 ---
    // 隐藏整个其他工具栏目
    hideOtherToolsBox: false,
    // 隐藏邮件追踪
    hideTrackSettingLink: false,
    // 隐藏简历优化
    hideResumeOpt: true,
    // 隐藏智能面试顾问
    hideResumeInt: true,
    // 隐藏求职信息订阅
    hideResumeSub: true,
    // 隐藏 PDF 转换工具
    hidePdfConvertTool: true,
    // 隐藏发票助手
    hideInvoiceAssistant: false,
    // 隐藏企业邮箱
    hideDomainMail: true,

    // --- 功能增强 ---
    // 始终“普通打开”链接
    autoClickNormalOpen: false,
  };
  const configKey = 'config';

  // 读取配置，补全缺失字段
  let savedConfigStr = Store.get(configKey);
  let config = savedConfigStr ? { ...defaultConfig, ...JSON.parse(savedConfigStr) } : defaultConfig;

  /**
   * 应用配置（根据配置显示或隐藏元素）
   */
  const applyConfig = () => {
    // toggle(false) 等同于 hide(), toggle(true) 等同于 show()
    // 如果配置为 hide (true)，则 toggle(false) 隐藏
    $(selector.indexTab).toggle(!config.hideIndexTab);
    $(selector.contactsTab).toggle(!config.hideContactsTab);
    $(selector.aiToolboxTab).toggle(!config.hideAiToolboxTab);
    $(selector.enterpriseMailTab).toggle(!config.hideEnterpriseMailTab);

    $(selector.enableVipNavItem).toggle(!config.hideEnableVipNavItem);
    $(selector.downAppNavItem).toggle(!config.hideDownAppNavItem);
    $(selector.downDesktopNavItem).toggle(!config.hideDownDesktopNavItem);
    $(selector.feedbackSurveyNavItem).toggle(!config.hideFeedbackSurveyNavItem);
    $(selector.selfQueryNavItem).toggle(!config.hideSelfQueryNavItem);
    $(selector.memberCenterNavItem).toggle(!config.hideMemberCenterNavItem);

    $(selector.searchInputAiIcon).toggle(!config.hideSearchInputAiIcon);
    $(selector.smartAssistantOperating).toggle(!config.hideSmartAssistantOperating);
    $(selector.smartAssistantBtn).toggle(!config.hidesmartAssistantBtn);
    $(selector.smartAssistantReminder).toggle(!config.hideSmartAssistantReminder);
    $(selector.smartAssistantContainer).toggle(!config.hideSmartAssistantContainer);

    // 这里的开关同时控制 Guide 和 Yad 两个元素
    $(selector.mailContentAiSummaryGuide).toggle(!config.hideMailContentAiSummaryGuide);
    $(selector.mailContentAdContainer).toggle(!config.hideMailContentAiSummaryGuide);

    $(selector.userPlusIcon).toggle(!config.hideUserPlusIcon);
    $(selector.warnTips).toggle(!config.hideWarnTips);

    // --- 特殊处理：顽固的 AI 元素 ---
    // 列表图标通常是 hover 显示，内容推广条可能是动态插入
    // 解决方案：构建全局 CSS 注入，强制隐藏
    const aiHideStyleId = 'style-hide-ai-elements';
    const $existingStyle = $('#' + aiHideStyleId);

    // 收集需要强制 CSS 隐藏的选择器
    let hideSelectors = [];
    if (config.hideMailListAiSummaryIcon) {
      hideSelectors.push(selector.mailListAiSummaryIcon);
    }
    if (config.hideMailContentAiSummaryGuide) {
      hideSelectors.push(selector.mailContentAiSummaryGuide);
      hideSelectors.push(selector.mailContentAdContainer); // 将 Yad 也加入强制隐藏列表
    }
    if (config.hideSmartAssistantReminder) {
      hideSelectors.push(selector.smartAssistantReminder);
    }
    if (config.hideSmartAssistantContainer) {
      hideSelectors.push(selector.smartAssistantContainer);
    }

    if (hideSelectors.length > 0) {
      const cssContent = hideSelectors.join(', ') + ' { display: none !important; }';
      if ($existingStyle.length === 0) {
        $(document.head).append(`<style id="${aiHideStyleId}">${cssContent}</style>`);
      } else {
        // 如果内容有变（例如用户切换了开关），更新它
        if ($existingStyle.html() !== cssContent) {
          $existingStyle.html(cssContent);
        }
      }
    } else {
      // 如果没有需要强制隐藏的，移除样式标签
      $existingStyle.remove();
      // 并尝试恢复行内样式显示（防止 toggle 残留）
      $(selector.mailListAiSummaryIcon).css('display', '');
      $(selector.mailContentAiSummaryGuide).css('display', '');
      $(selector.mailContentAdContainer).css('display', '');
      $(selector.smartAssistantReminder).css('display', '');
      $(selector.smartAssistantContainer).css('display', '');
    }

    // --- 其他工具栏目 ---
    // [修正逻辑] 如果要隐藏整个栏目，直接强力隐藏并跳过子项处理，避免脚本冲突
    if (config.hideOtherToolsBox) {
      $(selector.otherToolsBox).attr('style', 'display: none !important');
    } else {
      // 如果需要显示，先清除强制隐藏样式
      const $box = $(selector.otherToolsBox);
      // 只有当存在强制隐藏样式时才清除，避免覆盖原生的其他样式
      if (($box.attr('style') || '').includes('none !important')) {
        $box.css('display', '');
      }

      // 仅在栏目显示时，处理内部子项的显隐
      const toggleItem = (sel, isHidden) => {
        const $el = $(sel);
        const $parent = $el.closest('.nui-tree-item-label');
        if ($parent.length > 0) {
          $parent.toggle(!isHidden);
        } else {
          $el.toggle(!isHidden);
        }
      };

      toggleItem(selector.trackSettingLink, config.hideTrackSettingLink);
      toggleItem(selector.resumeOpt, config.hideResumeOpt);
      toggleItem(selector.resumeInt, config.hideResumeInt);
      toggleItem(selector.resumeSub, config.hideResumeSub);
      toggleItem(selector.pdfConvertTool, config.hidePdfConvertTool);
      $(selector.invoiceAssistant).toggle(!config.hideInvoiceAssistant);
      $(selector.domainMail).toggle(!config.hideDomainMail);
    }
  };

  /**
   * 自动执行的操作 (如点击按钮)
   */
  const autoRun = () => {
    // 始终“普通打开”链接
    if (config.autoClickNormalOpen) {
      const $btn = $(selector.normalOpenBtn);
      // 如果按钮存在，则点击
      if ($btn.length > 0) {
        // 使用原生 click 以确保兼容性，避免 jQuery 事件冒泡问题
        $btn[0].click();
      }
    }
  };

  applyConfig();
  autoRun();

  /**
   * 定义点击设置时的回调函数
   */
  const onSettingsClick = () => {
    layer.open({
      type: 1,
      area: ['550px', '700px'],
      title: '163 Mail Pro 设置',
      content: `
      <style>
        .layui-form-label { width: 100px !important; }
        .layui-input-block { margin-left: 130px !important; }
      </style>
      <form class="layui-form" style="padding: 20px;" action="">
        <div class="layui-form-item">
          <label class="layui-form-label">隐藏 Tab：</label>
          <div class="layui-input-block">
            <input type="checkbox" title="首页" name="hideIndexTab" lay-filter="item-switch" ${config.hideIndexTab ? 'checked' : ''}/>
            <input type="checkbox" title="通讯录" name="hideContactsTab" lay-filter="item-switch" ${config.hideContactsTab ? 'checked' : ''}/>
            <input type="checkbox" title="AI 工具箱" name="hideAiToolboxTab" lay-filter="item-switch" ${config.hideAiToolboxTab ? 'checked' : ''}/>
            <input type="checkbox" title="企业邮箱" name="hideEnterpriseMailTab" lay-filter="item-switch" ${config.hideEnterpriseMailTab ? 'checked' : ''}/>
          </div>
        </div>
        <div class="layui-form-item">
          <label class="layui-form-label">隐藏 Nav：</label>
          <div class="layui-input-block">
            <input type="checkbox" title="开通超级会员" name="hideEnableVipNavItem" lay-filter="item-switch" ${config.hideEnableVipNavItem ? 'checked' : ''}/>
            <input type="checkbox" title="手机 APP" name="hideDownAppNavItem" lay-filter="item-switch" ${config.hideDownAppNavItem ? 'checked' : ''}/>
            <input type="checkbox" title="下载桌面端" name="hideDownDesktopNavItem" lay-filter="item-switch" ${config.hideDownDesktopNavItem ? 'checked' : ''}/>
            <input type="checkbox" title="参与调研" name="hideFeedbackSurveyNavItem" lay-filter="item-switch" ${config.hideFeedbackSurveyNavItem ? 'checked' : ''}/>
            <input type="checkbox" title="自助查询" name="hideSelfQueryNavItem" lay-filter="item-switch" ${config.hideSelfQueryNavItem ? 'checked' : ''}/>
            <input type="checkbox" title="会员中心" name="hideMemberCenterNavItem" lay-filter="item-switch" ${config.hideMemberCenterNavItem ? 'checked' : ''}/>
          </div>
        </div>
        <div class="layui-form-item">
          <label class="layui-form-label">隐藏其他工具：</label>
          <div class="layui-input-block">
            <input type="checkbox" title="整个栏目" name="hideOtherToolsBox" lay-filter="item-switch" ${config.hideOtherToolsBox ? 'checked' : ''}/>
            <hr style="margin: 5px 0;">
            <input type="checkbox" title="邮件追踪" name="hideTrackSettingLink" lay-filter="item-switch" ${config.hideTrackSettingLink ? 'checked' : ''}/>
            <input type="checkbox" title="简历优化" name="hideResumeOpt" lay-filter="item-switch" ${config.hideResumeOpt ? 'checked' : ''}/>
            <input type="checkbox" title="智能面试顾问" name="hideResumeInt" lay-filter="item-switch" ${config.hideResumeInt ? 'checked' : ''}/>
            <input type="checkbox" title="求职信息订阅" name="hideResumeSub" lay-filter="item-switch" ${config.hideResumeSub ? 'checked' : ''}/>
            <input type="checkbox" title="PDF转换工具" name="hidePdfConvertTool" lay-filter="item-switch" ${config.hidePdfConvertTool ? 'checked' : ''}/>
            <input type="checkbox" title="发票助手" name="hideInvoiceAssistant" lay-filter="item-switch" ${config.hideInvoiceAssistant ? 'checked' : ''}/>
            <input type="checkbox" title="企业邮箱" name="hideDomainMail" lay-filter="item-switch" ${config.hideDomainMail ? 'checked' : ''}/>
          </div>
        </div>
        <div class="layui-form-item">
          <label class="layui-form-label">隐藏杂项：</label>
          <div class="layui-input-block">
            <input type="checkbox" title="一键生成 PPT..." name="hideSmartAssistantOperating" lay-filter="item-switch" ${config.hideSmartAssistantOperating ? 'checked' : ''}/>
            <input type="checkbox" title="搜索栏 AI 搜" name="hideSearchInputAiIcon" lay-filter="item-switch" ${config.hideSearchInputAiIcon ? 'checked' : ''}/>
            <input type="checkbox" title="AI 助理" name="hidesmartAssistantBtn" lay-filter="item-switch" ${config.hidesmartAssistantBtn ? 'checked' : ''}/>
            <input type="checkbox" title="AI 翻译提示" name="hideSmartAssistantReminder" lay-filter="item-switch" ${config.hideSmartAssistantReminder ? 'checked' : ''}/>
            <input type="checkbox" title="AI 助理侧边栏" name="hideSmartAssistantContainer" lay-filter="item-switch" ${config.hideSmartAssistantContainer ? 'checked' : ''}/>
            <input type="checkbox" title="开通邮箱“超级会员”……" name="hideWarnTips" lay-filter="item-switch" ${config.hideWarnTips ? 'checked' : ''}/>
            <input type="checkbox" title="邮件列表项 AI 总结图标" name="hideMailListAiSummaryIcon" lay-filter="item-switch" ${config.hideMailListAiSummaryIcon ? 'checked' : ''}/>
            <input type="checkbox" title="邮件详情推广提示条" name="hideMailContentAiSummaryGuide" lay-filter="item-switch" ${config.hideMailContentAiSummaryGuide ? 'checked' : ''}/>
            <input type="checkbox" title="用户名 Plus 图标" name="hideUserPlusIcon" lay-filter="item-switch" ${config.hideUserPlusIcon ? 'checked' : ''}/>
          </div>
        </div>
        <div class="layui-form-item">
          <label class="layui-form-label">功能增强：</label>
          <div class="layui-input-block">
            <input type="checkbox" title="始终“普通打开”链接" name="autoClickNormalOpen" lay-filter="item-switch" ${config.autoClickNormalOpen ? 'checked' : ''}/>
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
        Store.set(configKey, JSON.stringify(config));
        applyConfig();
        // 如果开启了自动点击，立即尝试一次
        if (name === 'autoClickNormalOpen' && config.autoClickNormalOpen) {
          autoRun();
        }
      });
    });
  }

  /**
   * 注入自定义设置入口 (163 Mail Pro)
   */
  const injectCustomEntry = () => {
    const $nav = $(selector.topNav);
    const btnId = 'id-163-mail-pro-btn';

    // 如果导航栏不存在或按钮已存在，则不处理
    if ($nav.length === 0 || document.getElementById(btnId)) return;

    // 创建分隔符 (保持 UI 一致性)
    const $sep = $('<li class="js-component-component rZ0 pn1">| </li>');
    // 创建入口按钮
    const $btn = $(`<li id="${btnId}" class="js-component-component rZ0"><a href="javascript:;" class="js-component-component sh0 nui-txt-link" style="font-weight: bold;">163 Mail Pro</a></li>`);

    $btn.on('click', (e) => {
      e.preventDefault();
      onSettingsClick();
    });

    $nav.append($sep).append($btn);
  };

  /**
   * 监听 DOM 变化，确保动态插入的元素也被隐藏，并保持自定义入口存在
   */
  const observeDomChanges = () => {
    const target = document.body;
    if (!target) return;
    const observer = new MutationObserver(() => {
      applyConfig();
      injectCustomEntry();
      autoRun();
    });
    observer.observe(target, {
      childList: true,
      subtree: true,
    });
  };

  // DOM 就绪后开始监听
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      applyConfig();
      injectCustomEntry();
      autoRun();
      observeDomChanges();
    });
  } else {
    observeDomChanges();
    injectCustomEntry();
    autoRun();
  }

  // 注册选项并传入回调
  Options.registerAll(onSettingsClick)
})()