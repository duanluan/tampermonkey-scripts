// 替换后的条幅去除空格换行后的文本
import Junit from "./junit/Junit";
import React from "./react/React";
import Angular from "./angular/Angular";
import Codecept from "./codecept/Codecept";
import Github from "./github/Github";

(() => {
  'use strict';

  React.replace();
  Angular.replace();
  Junit.replace();
  Codecept.replace();
  Github.replace();
})();

// ==UserScript==
// @name         社会主义核心价值观（Core Socialist Values）
// @namespace    http://tampermonkey.net/
// @version      0.4.0
// @description  替换政治相关条幅为社会主义核心价值观，替换政治相关 Logo 颜色为中国红，去除政治相关通知，让技术远离政治。
// @author       duanluan
// @license      Apache 2.0
// @match        *://reactjs.org/*
// @match        *://angular.io/*
// @match        *://junit.org/*
// @match        *://codecept.io/*
// @match        *://github.com/*
// @icon         <$ICON$>
// @require      https://cdn.bootcdn.net/ajax/libs/jquery/3.6.0/jquery.slim.min.js
// @grant        none
// ==/UserScript==
