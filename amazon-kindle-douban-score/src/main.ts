import UrlUtils from '../../utils/src/Url';
import StoreUtils from '../../utils/src/gm/Store';
import HttpUtils from '../../utils/src/gm/Http';
import {HttpDataType} from "../../utils/src/gm/enum/HttpDataType";

const selectors = {
    // 书名链接
    bookName: '.sg-col-inner h2 a[href^="/dp/"]',
    // 分页按钮
    pageStrip: '.s-pagination-strip a',
    // 已选中的分页按钮（当前页）
    pageSelected: '.s-pagination-item.s-pagination-selected',
    // 分页按钮
    pageBtn: '.s-pagination-item.s-pagination-button',
  },
  gmstoreKeys = {
    serverUrl: 'serverUrl',
  },
  // 服务地址
  serverUrl = StoreUtils.get(gmstoreKeys.serverUrl);

// 书名，用于判断是否换页
let $bookNames;

(() => {
  'use strict';

  let urlPath = UrlUtils.getPath();
  // 列表或搜索页面
  if (urlPath.startsWith('/s') && urlPath.indexOf('rh=n') != -1) {
    // StoreUtils.set(gmstoreKeys.serverUrl, window.prompt("请输入“亚马逊 Kindle 展示豆瓣评分”的服务地址：", "http://localhost:8361"));
    loadScore();
    setServerUrl(serverUrl);
  }

  // 分页操作后重新加载分数
  $(selectors.pageStrip).on('click', document, () => {
    const t = setTimeout(() => {
      if ($bookNames != $(selectors.bookName)
        // 到最后一页了 或 有 16 条（每页条数）
        && (!$(selectors.pageSelected).next(selectors.pageBtn) || $(selectors.bookName).length == 16)) {
        loadScore();
        clearTimeout(t);
      }
    }, 500);
  })
})();

/**
 * 如果未设置服务器地址，则弹窗提示设置
 */
function setServerUrl(serverUrl) {
  if (!serverUrl) {
    serverUrl = StoreUtils.get(gmstoreKeys.serverUrl)
  }
  if (!serverUrl) {
    StoreUtils.set(gmstoreKeys.serverUrl,
      window.prompt("请输入“亚马逊 Kindle 展示豆瓣评分”的服务地址：", "http://localhost:8361")
    );
  }
}

/**
 * 加载评分
 */
function loadScore() {
  $bookNames = $(selectors.bookName);
  $bookNames.each((i, element) => {
    const $bookName = $(element),
      // 获取名称和作者，并去除多余描述
      name = $bookName.text().replace(/[（\\(【].*[）\\)】]|·|・/g, '').trim(),
      author = $bookName.parent().next().text().replace(/[（\\(【].*[）\\)】]|·|・|, |、|。|等*/g, '')
        // 去除出版日期
        .replace(/\s*\|\s*\d{4}-\d{2}/i, '').trim();
    console.log(name + " | " + author);

    // 豆瓣读书搜索名称和作者
    HttpUtils.get({
      url: serverUrl + '/douban/subjectSearch?name=' + name + '&author=' + author,
      dataType: HttpDataType.JSON,
      onload: (response) => {
        const code = response.code, msg = response.msg, data = response.data;
        // TODO 弹框提示错误
        if (code != 200) {
          return;
        }

        console.log(response);

        let score = 0;
        for (const book of data) {
          if (book.score) {
            score = book.score;
            break
          }
        }
        $bookName.prepend(`<span style="color: #071; font-weight: bolder; font-size: large">${score}</span>&nbsp;&nbsp;`);
      }
    });
  })
}

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
// @require      https://cdn.bootcdn.net/ajax/libs/limonte-sweetalert2/11.4.14/sweetalert2.all.min.js
// @require      https://cdn.bootcdn.net/ajax/libs/limonte-sweetalert2/11.4.14/sweetalert2.min.css
// @grant        GM_xmlhttpRequest
// @grant        GM_getValue
// @grant        GM_setValue
// ==/UserScript==
