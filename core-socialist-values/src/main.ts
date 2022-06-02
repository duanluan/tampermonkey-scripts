// ==UserScript==
// @name         社会主义核心价值观（Core Socialist Values）
// @namespace    http://tampermonkey.net/
// @version      0.2.1
// @description  替换网站条幅为社会主义核心价值观。
// @author       duanluan
// @license      Apache 2.0
// @match        *://reactjs.org/*
// @match        *://junit.org/*
// @match        *://codecept.io/*
// @icon         <$ICON$>
// @require      https://cdn.bootcdn.net/ajax/libs/jquery/3.6.0/jquery.slim.min.js
// @grant        none
// ==/UserScript==

// 替换后的条幅去除空格换行后的文本
import Junit from "./junit/Junit";
import Reactjs from "./reactjs/Reactjs";
import Codecept from "./codecept/Codecept";

(() => {
  'use strict';

  Reactjs.replace();
  Junit.replace();
  Codecept.replace();
})();


