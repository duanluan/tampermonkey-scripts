// ==UserScript==
// @name         亚马逊 Kindle 展示豆瓣评分
// @namespace    http://tampermonkey.net/
// @version      0.0.1
// @description  亚马逊 Kindle 展示豆瓣评分，目前仅支持中亚。
// @author       duanluan
// @license      Apache 2.0
// @match        *://www.amazon.cn/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=amazon.cn
// @require      https://cdn.bootcdn.net/ajax/libs/jquery/3.6.0/jquery.slim.min.js
// @require      https://cdn.bootcdn.net/ajax/libs/axios/0.27.2/axios.min.js
// @grant        none
// ==/UserScript==

import Url from '../../common/src/Url';
import {Axios} from 'axios';

declare const axios: Axios;

const href = window.location.href,
  selectors = {
    listScoreAndEvalQuantity: 'div[class="a-section a-spacing-none a-spacing-top-micro"]',
  },
  $dom = $(document);

(() => {
  'use strict';

  if (Url.getPath().startsWith('/s')) {
    $(selectors.listScoreAndEvalQuantity).each((i) => {
      const $this = $(this);

      // // 获取名称
      // const name = $this.parent().children().eq(1).text();
      // console.log(name);
      //
      // // 获取豆瓣评分
      // axios.get('https://www.baidu.com/').then(value => {
      //   console.log(1);
      //   // https://search.douban.com/book/subject_search?search_text=%E7%BB%9D%E5%8F%AB
      // })
      //
      // $this.append(`
      //   <div>豆瓣评分：</div>
      // `);
    })
  }
})();
