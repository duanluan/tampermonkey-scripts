// ==UserScript==
// @name         技术远离政治
// @namespace    http://tampermonkey.net/
// @version      1.3.0
// @description  移除政治相关条幅或替换为社会主义核心价值观、今日诗词，替换政治相关 Logo 为原版 Logo，去除政治相关通知，让技术远离政治。
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
// @match        *://greasyfork.org/*
// @require      https://cdn.bootcdn.net/ajax/libs/jquery/3.6.0/jquery.slim.min.js
// @grant        GM_getValue
// @grant        GM_setValue
// @grant        GM_registerMenuCommand
// @grant        GM_unregisterMenuCommand
// @grant        GM_xmlhttpRequest
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
import Options from "./common/Options";
import SvelteMaterialUi from "./websites/sveltematerialui/SvelteMaterialUi";
import Syncthing from "./websites/syncthing/Syncthing";

(() => {
  'use strict';

  Options.registerAll();
  Options.loadInGreasyfork();

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
