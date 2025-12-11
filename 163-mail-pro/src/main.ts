// ==UserScript==
// @name         163 Mail Pro
// @namespace    http://tampermonkey.net/
// @version      0.0.2
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
    // 首页 tab
    indexTab: '#_mail_tabitem_0_82',
    // 通讯录 tab
    contactsTab: '#_mail_tabitem_1_83',
    // AI 工具箱 tab
    aiToolboxTab: '#_mail_tabitem_2_84',

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
    // 开通超级会员 Tip
    warnTips: '[id$="_dvWarnTips"]',
  }

  // 默认配置（默认选中=隐藏）
  const defaultConfig = {
    // 隐藏通讯录 Tab
    hideContactsTab: true,
    // 隐藏 AI 工具箱 Tab
    hideAiToolboxTab: true,

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
    // 隐藏开通超级会员 Tip
    hideWarnTips: true,
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
    $(selector.contactsTab).toggle(!config.hideContactsTab);
    $(selector.aiToolboxTab).toggle(!config.hideAiToolboxTab);

    $(selector.enableVipNavItem).toggle(!config.hideEnableVipNavItem);
    $(selector.downAppNavItem).toggle(!config.hideDownAppNavItem);
    $(selector.downDesktopNavItem).toggle(!config.hideDownDesktopNavItem);
    $(selector.feedbackSurveyNavItem).toggle(!config.hideFeedbackSurveyNavItem);
    $(selector.selfQueryNavItem).toggle(!config.hideSelfQueryNavItem);
    $(selector.memberCenterNavItem).toggle(!config.hideMemberCenterNavItem);

    $(selector.searchInputAiIcon).toggle(!config.hideSearchInputAiIcon);
    $(selector.smartAssistantOperating).toggle(!config.hideSmartAssistantOperating);
    $(selector.smartAssistantBtn).toggle(!config.hidesmartAssistantBtn);
    // [已修改] 根据配置显示/隐藏警告提示
    $(selector.warnTips).toggle(!config.hideWarnTips);
  };
  applyConfig();

  /**
   * 监听 DOM 变化，确保动态插入的元素也被隐藏
   */
  const observeDomChanges = () => {
    const target = document.body;
    if (!target) return;
    const observer = new MutationObserver(() => {
      applyConfig();
    });
    observer.observe(target, {
      childList: true,
      subtree: true,
    });
  };

  /**
   * 定义点击设置时的回调函数
   */
  const onSettingsClick = () => {
    layer.open({
      type: 1,
      area: ['500px', '600px'],
      content: `
      <form class="layui-form" style="padding: 20px;" action="">
        <div class="layui-form-item">
          <label class="layui-form-label">隐藏 Tab：</label>
          <div class="layui-input-block">
            <input type="checkbox" title="通讯录" name="hideContactsTab" lay-filter="item-switch" ${config.hideContactsTab ? 'checked' : ''}/>
            <input type="checkbox" title="AI 工具箱" name="hideAiToolboxTab" lay-filter="item-switch" ${config.hideAiToolboxTab ? 'checked' : ''}/>
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
          <label class="layui-form-label">隐藏其他：</label>
          <div class="layui-input-block">
            <input type="checkbox" title="一键生成 PPT AI 搜索与问答，自然语言检索邮件" name="hideSmartAssistantOperating" lay-filter="item-switch" ${config.hideSmartAssistantOperating ? 'checked' : ''}/>
            <input type="checkbox" title="搜索栏 AI 搜" name="hideSearchInputAiIcon" lay-filter="item-switch" ${config.hideSearchInputAiIcon ? 'checked' : ''}/>
            <input type="checkbox" title="AI 助理" name="hidesmartAssistantBtn" lay-filter="item-switch" ${config.hidesmartAssistantBtn ? 'checked' : ''}/>
            <input type="checkbox" title="开通邮箱“超级会员”……" name="hideWarnTips" lay-filter="item-switch" ${config.hideWarnTips ? 'checked' : ''}/>
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
      });
    });
  }

  // DOM 就绪后开始监听
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      applyConfig();
      observeDomChanges();
    });
  } else {
    observeDomChanges();
  }

  // 注册选项并传入回调
  Options.registerAll(onSettingsClick)
})()