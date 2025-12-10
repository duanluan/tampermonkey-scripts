// ==UserScript==
// @name         Gemini Pro
// @namespace    http://tampermonkey.net/
// @version      0.0.1
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

  // 加载 CSS
  GM_addStyle(GM_getResourceText('layui_css'));
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
    // 我的内容入口按钮
    myContentEntryBtn: 'side-nav-entry-button',
    // 我的内容图片预览
    myContentPreview: 'my-stuff-recents-preview',
  }

  const defaultConfig = {
    hideMyContentEntryBtn: false,
    hideMyContentPreview: false,
  }
  const STORE_CONF_KEY = 'config';

  // 读取配置
  let savedConfigStr = Store.get(STORE_CONF_KEY);
  let config = savedConfigStr ? JSON.parse(savedConfigStr) : defaultConfig;

  /**
   * 应用配置（根据配置显示或隐藏元素）
   */
  const applyConfig = () => {
    // toggle(false) 等同于 hide(), toggle(true) 等同于 show()
    // 如果配置为 hide (true)，则 toggle(false) 隐藏
    $(selector.myContentEntryBtn).toggle(!config.hideMyContentEntryBtn);
    $(selector.myContentPreview).toggle(!config.hideMyContentPreview);
  };
  applyConfig();

  // Gemini 是 SPA，元素是动态加载的，必须监听 DOM 变化才能在刷新后生效
  const observer = new MutationObserver((mutations) => {
    // 当 DOM 发生变化时，重新应用配置
    // 这里可以加防抖，但在简单显隐逻辑中直接调用通常性能损耗可忽略
    applyConfig();
  });

  // 开始监听 body 的子元素变化
  observer.observe(document.body, {
    childList: true,
    subtree: true
  });

  // 定义点击设置时的回调函数
  const onSettingsClick = () => {
    layer.open({
      type: 1,
      area: ['500px', '400px'],
      title: 'Gemini Pro 设置',
      content: `
      <form class="layui-form" style="padding: 20px;" action="">
        <div class="layui-form-item">
          <label class="layui-form-label">隐藏侧边栏：</label>
          <div class="layui-input-block">
            <input type="checkbox" title="我的内容" name="hideMyContentEntryBtn" lay-filter="item-switch" ${config.hideMyContentEntryBtn ? 'checked' : ''}/>
            <input type="checkbox" title="我的内容图片预览" name="hideMyContentPreview" lay-filter="item-switch" ${config.hideMyContentPreview ? 'checked' : ''}/>
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

  // 注册选项并传入回调
  Options.registerAll(onSettingsClick)
})();