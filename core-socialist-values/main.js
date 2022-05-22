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
const txt = '富强民主文明和谐自由平等公正法治爱国敬业诚信友善ProsperityDemocracyCivilityHarmonyFreedomEqualityJusticeRuleoflawPatriotismDedicationIntegrityFriendship',
  host = window.location.host,
  href = window.location.href,
  imgsUrl = 'https://raw.githubusercontent.com/duanluan/tampermonkey-scripts/main/core-socialist-values/imgs/',
  junitLogoUrl = imgsUrl + 'junit5-logo-csv.png',

  selectors = {
    reactBar: '.css-lpiycv',
    junitAbout: '#about',
    junitLogo: 'img[src="/junit5/assets/img/junit5-logo.png"]',
    junitFavicon: 'link[rel="icon"]',
    codeceptBar: '.sub-bar .message',
  },
  $dom = $(document);

(function () {
  'use strict';

  if (host === 'reactjs.org') {
    runReplace(selectors.reactBar);
  }

  if (href === 'https://junit.org/junit5/') {
    $(selectors.junitAbout).prevAll().remove();
    $(selectors.junitLogo).attr('src', junitLogoUrl);
    $(selectors.junitFavicon).attr('href', junitLogoUrl);
  }

  if (host === 'codecept.io') {
    runReplace(selectors.codeceptBar);
  }
})();

function runReplace(selector) {
  loopReplaceBar(selector);
  // 监听条幅变化，变化后再次执行
  $dom.bind("DOMNodeInserted", selector, function (e) {
    loopReplaceBar(selector);
  });
}

// 循环替换条幅
function loopReplaceBar(selector) {
  if ($($(selector)[0]).text().replace(/\s+/g, "") === txt) {
    return;
  }
  const isStop = setInterval(function () {
    if ($($(selector)[0]).text().replace(/\s+/g, "") === txt) {
      clearInterval(isStop);
    }
    replaceBar(selector);
  }, 1000);
}

function replaceBar(selector) {
  $(selector).html(`
    <div>
      <ul class='csv_ul'><li>富强</li><li>民主</li><li>文明</li><li>和谐</li><li>自由</li><li>平等</li><li>公正</li><li>法治</li><li>爱国</li><li>敬业</li><li>诚信</li><li>友善</li></ul><br>
      <ul class='csv_ul'><li>Prosperity</li><li>Democracy</li><li>Civility</li><li>Harmony</li><li>Freedom</li><li>Equality</li><li>Justice</li><li>Rule of law</li><li>Patriotism</li><li>Dedication</li><li>Integrity</li><li>Friendship</li>
      </ul>
    </div>`);
  $('.csv_ul').css({ 'listStyle': 'none', 'margin': 0, 'padding': 0, 'width': 'auto' });
  $('.csv_ul li').css({ 'color': '#DE2910', 'fontSize': '13px', 'float': 'left', 'padding-right': '10px', 'width': '80px', 'text-align': 'center' });
}
