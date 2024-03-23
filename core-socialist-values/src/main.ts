// ==UserScript==
// @name         技术远离政治
// @namespace    http://tampermonkey.net/
// @version      1.4.0
// @description  移除政治相关条幅或替换为社会主义核心价值观、今日诗词，替换政治相关 Logo 为原版 Logo，去除政治相关通知，让技术远离政治。
// @author       duanluan
// @copyright    2022, duanluan (https://github.com/duanluan)
// @license      Apache-2.0; https://www.apache.org/licenses/LICENSE-2.0.txt
// @match        *://junit.org/*
// @match        *://codecept.io/*
// @match        *://github.com/*
// @match        *://docs.nestjs.com/*
// @match        *://emberjs.com/*
// @match        *://www.jenkins.io/*
// @match        *://sveltematerialui.com/*
// @match        *://syncthing.net/*
// @match        *://www.vim.org/*
// @match        *://greasyfork.org/*
// @require      https://cdn.bootcdn.net/ajax/libs/jquery/3.7.1/jquery.slim.min.js
// @grant        GM_getValue
// @grant        GM_setValue
// @grant        GM_registerMenuCommand
// @grant        GM_unregisterMenuCommand
// @grant        GM_xmlhttpRequest
// ==/UserScript==

// ==OpenUserJS==
// @author       duanluan
// @updateURL    https://raw.kkgithub.com/duanluan/tampermonkey-scripts/main/core-socialist-values/dist/main.js
// ==/OpenUserJS==

import Junit from "./websites/junit/Junit";
import Codecept from "./websites/codecept/Codecept";
import Github from "./websites/github/Github";
import Nest from "./websites/nest/Nest";
import Ember from "./websites/ember/Ember";
import Jenkins from "./websites/jenkins/Jenkins";
import Options from "./Options";
import SvelteMaterialUi from "./websites/sveltematerialui/SvelteMaterialUi";
import Syncthing from "./websites/syncthing/Syncthing";
import Vim from "./websites/vim/Vim";

(() => {
  'use strict';

  Options.registerAll();
  Options.loadInGreasyfork();

  // React.replace();
  // Angular.replace();
  Junit.replace();
  Codecept.replace();
  Github.replace();
  Nest.replace();
  Ember.replace();
  // Electron.replace();
  Jenkins.replace();
  // Svelte.replace();
  SvelteMaterialUi.replace();
  Syncthing.replace();
  Vim.replace();
})();
