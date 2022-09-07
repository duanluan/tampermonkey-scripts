// ==UserScript==
// @name         技术远离政治
// @namespace    http://tampermonkey.net/
// @version      1.2.0
// @description  移除政治相关条幅或替换为社会主义核心价值观，替换政治相关 Logo 为原版 Logo，去除政治相关通知，让技术远离政治。
// @author       duanluan
// @copyright    2022, duanluan (https://github.com/duanluan)
// @license      Apache-2.0; https://www.apache.org/licenses/LICENSE-2.0.txt
// @match        *://reactjs.org/*
// @match        *://angular.io/*
// @match        *://junit.org/*
// @match        *://codecept.io/*
// @match        *://github.com/*
// @match        *://docs.nestjs.com/*
// @match        *://emberjs.com/*
// @match        *://www.electronjs.org/*
// @match        *://www.jenkins.io/*
// @match        *://svelte.dev/*
// @match        *://sveltematerialui.com/*
// @match        *://syncthing.net/*
// @require      https://cdn.bootcdn.net/ajax/libs/jquery/3.6.0/jquery.slim.min.js
// @grant        GM_getValue
// @grant        GM_setValue
// @grant        GM_registerMenuCommand
// @grant        GM_unregisterMenuCommand
// ==/UserScript==

// ==OpenUserJS==
// @author duanluan
// ==/OpenUserJS==

import Junit from "./websites/junit/Junit";
import React from "./websites/react/React";
import Angular from "./websites/angular/Angular";
import Codecept from "./websites/codecept/Codecept";
import Github from "./websites/github/Github";
import Nest from "./websites/nest/Nest";
import Ember from "./websites/ember/Ember";
import Electron from "./websites/electron/Electron";
import Jenkins from "./websites/jenkins/Jenkins";
import Svelte from "./websites/svelte/Svelte";
import Store from "../../utils/src/gm/Store";
import MenuCmd from "../../utils/src/gm/MenuCmd";
import Options from "./common/Options";
import SvelteMaterialUi from "./websites/sveltematerialui/SvelteMaterialUi";
import Syncthing from "./websites/syncthing/Syncthing";

(() => {
  'use strict';

  const options = [{label: '移除条幅', name: Options.Keys.removeBar, value: false}];

  function register(option: any) {
    const val = Store.get(option.name);
    const valIsBool = (typeof val === 'boolean');
    const menuCmdId = MenuCmd.register((typeof valIsBool ? (val ? '☑️ ' : '🔲 ') : '') + option.label, () => {
      if (option.name === Options.Keys.removeBar) {
        Store.set(option.name, !val);
      }
      // 如果是布尔类型就重新注册选项
      if (valIsBool) {
        MenuCmd.unregister(menuCmdId);
        register(option);
      }
      // 刷新页面
      window.location.reload();
    });
  }

  for (const option of options) {
    // 存储选项默认值
    if (Store.get(option.name) === null) {
      Store.set(option.name, option.value)
    }
    // 注册选项
    for (const option of options) {
      register(option);
    }
  }

  React.replace();
  Angular.replace();
  Junit.replace();
  Codecept.replace();
  Github.replace();
  Nest.replace();
  Ember.replace();
  Electron.replace();
  Jenkins.replace();
  Svelte.replace();
  SvelteMaterialUi.replace();
  Syncthing.replace();
})();
