// 替换后的条幅去除空格换行后的文本
import Junit from "./junit/Junit";
import React from "./react/React";
import Angular from "./angular/Angular";
import Codecept from "./codecept/Codecept";
import Github from "./github/Github";
import Nest from "./nest/Nest";
import Ember from "./ember/Ember";
import Electron from "./electron/Electron";
import Jenkins from "./jenkins/Jenkins";

(() => {
  'use strict';

  React.replace();
  Angular.replace();
  Junit.replace();
  Codecept.replace();
  Github.replace();
  Nest.replace();
  Ember.replace();
  Electron.replace();
  Jenkins.replace();
})();
//
// ==UserScript==
// @name         社会主义核心价值观（Core Socialist Values）
// @namespace    http://tampermonkey.net/
// @version      0.8.1
// @description  替换政治相关条幅为社会主义核心价值观，替换政治相关 Logo 颜色为中国红，去除政治相关通知，让技术远离政治。
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
// @require      https://cdn.bootcdn.net/ajax/libs/jquery/3.6.0/jquery.slim.min.js
// @grant        none
// ==/UserScript==

// ==OpenUserJS==
// @author duanluan
// ==/OpenUserJS==
