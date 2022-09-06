/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./core-socialist-values/src/junit/Junit.ts
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Junit = /*#__PURE__*/function () {
  function Junit() {
    _classCallCheck(this, Junit);
  }

  _createClass(Junit, null, [{
    key: "replace",
    value: function replace() {
      if (location.href === 'https://junit.org/junit5/') {
        $(this.selectors.junitAbout).prevAll().remove();
        $(this.selectors.junitLogo).attr('src', this.junitLogoUrl);
        $(this.selectors.junitFavicon).attr('href', this.junitLogoUrl);
      }
    }
  }]);

  return Junit;
}();

_defineProperty(Junit, "selectors", {
  junitAbout: '#about',
  junitLogo: 'img[src="/junit5/assets/img/junit5-logo.png"]',
  junitFavicon: 'link[rel="icon"]'
});

_defineProperty(Junit, "junitLogoUrl", 'https://raw.iqiq.io/duanluan/tampermonkey-scripts/main/core-socialist-values/src/junit/imgs/junit5-logo.png');


;// CONCATENATED MODULE: ./core-socialist-values/src/common/Bar.ts
function Bar_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Bar_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Bar_createClass(Constructor, protoProps, staticProps) { if (protoProps) Bar_defineProperties(Constructor.prototype, protoProps); if (staticProps) Bar_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function Bar_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Bar = /*#__PURE__*/function () {
  function Bar() {
    Bar_classCallCheck(this, Bar);
  }

  Bar_createClass(Bar, null, [{
    key: "replace",
    value:
    /**
     * 替换条幅
     * @param selector 条幅选择器
     * @param observingSelector 变化选择器
     */
    function replace(selector, observingSelector) {
      if (!$(selector).text().match(/ukraine|乌克兰|black|黑人/i)) {
        return;
      }

      Bar.loopReplaceBar(selector);

      if (observingSelector) {
        // 监听条幅变化，变化后再次执行
        new MutationObserver(function (mutations, observer) {
          Bar.loopReplaceBar(selector);
        }).observe($(observingSelector)[0], {
          childList: true
        });
      }
    }
  }, {
    key: "loopReplaceBar",
    value: // 循环替换条幅
    function loopReplaceBar(selector) {
      if ($($(selector)[0]).text().replace(/\s+/g, "") === Bar.txt) {
        return;
      }

      var isStop = setInterval(function () {
        if ($($(selector)[0]).text().replace(/\s+/g, "") === Bar.txt) {
          clearInterval(isStop);
        }

        Bar.replaceBar(selector);
      }, 1000);
    }
  }, {
    key: "replaceBar",
    value: function replaceBar(selector) {
      var barSelector = '.csv_bar',
          barUlSelector = barSelector + ' .csv_bar_ul';
      $(selector).css({
        'minHeight': '40px'
      });
      $(selector).html("\n    <div class=\"csv_bar\">\n      <ul class='csv_bar_ul'><li>\u5BCC\u5F3A</li><li>\u6C11\u4E3B</li><li>\u6587\u660E</li><li>\u548C\u8C10</li><li>\u81EA\u7531</li><li>\u5E73\u7B49</li><li>\u516C\u6B63</li><li>\u6CD5\u6CBB</li><li>\u7231\u56FD</li><li>\u656C\u4E1A</li><li>\u8BDA\u4FE1</li><li>\u53CB\u5584</li></ul><br>\n      <ul class='csv_bar_ul'><li>Prosperity</li><li>Democracy</li><li>Civility</li><li>Harmony</li><li>Freedom</li><li>Equality</li><li>Justice</li><li>Rule of law</li><li>Patriotism</li><li>Dedication</li><li>Integrity</li><li>Friendship</li>\n      </ul>\n    </div>"); // 避免出现多个导致样式添加失败

      var $bar = $(barSelector);

      if ($bar.length == 2) {
        $bar.eq(0).remove();
      }

      $(barUlSelector).css({
        'display': 'inline-block',
        'listStyle': 'none',
        'margin': 0,
        'padding': 0,
        'width': 'auto'
      });
      $(barUlSelector + ' li').css({
        'color': '#DE2910',
        'fontWeight': 'bold',
        'fontFamily': 'KaiTi',
        'float': 'left',
        'paddingRight': '10px',
        'min-width': '80px',
        'textAlign': 'center'
      });
      $(barUlSelector + ':first').css('verticalAlign', 'bottom');
      $(barUlSelector + ':first li').css('fontSize', '18px');
      $(barUlSelector + ':eq(1) li').css('fontSize', '13px');
    }
  }]);

  return Bar;
}();

Bar_defineProperty(Bar, "txt", '富强民主文明和谐自由平等公正法治爱国敬业诚信友善ProsperityDemocracyCivilityHarmonyFreedomEqualityJusticeRuleoflawPatriotismDedicationIntegrityFriendship');


;// CONCATENATED MODULE: ./core-socialist-values/src/react/React.ts
function React_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function React_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function React_createClass(Constructor, protoProps, staticProps) { if (protoProps) React_defineProperties(Constructor.prototype, protoProps); if (staticProps) React_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function React_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var React = /*#__PURE__*/function () {
  function React() {
    React_classCallCheck(this, React);
  }

  React_createClass(React, null, [{
    key: "replace",
    value: function replace() {
      if (location.host === 'reactjs.org') {
        Bar.replace(this.selectors.bar, this.selectors.observingBar);
      }
    }
  }]);

  return React;
}();

React_defineProperty(React, "selectors", {
  bar: '.css-lpiycv',
  observingBar: '#gatsby-focus-wrapper'
});


;// CONCATENATED MODULE: ./core-socialist-values/src/angular/Angular.ts
function Angular_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Angular_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Angular_createClass(Constructor, protoProps, staticProps) { if (protoProps) Angular_defineProperties(Constructor.prototype, protoProps); if (staticProps) Angular_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function Angular_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Angular = /*#__PURE__*/function () {
  function Angular() {
    Angular_classCallCheck(this, Angular);
  }

  Angular_createClass(Angular, null, [{
    key: "replace",
    value: function replace() {
      if (location.host === 'angular.io') {
        // 不存在是否关闭通知的本地存储时
        if (!localStorage.getItem('aio-notification/war-ukraine')) {
          // 如果通知中存在关键词
          var $bar = $(this.selectors.bar);

          if ($bar.length > 0 && $bar.text().toLowerCase().indexOf('ukraine') != -1) {
            // 点击关闭通知
            $(this.selectors.dismissNotificationBtn)[0].click();
          }
        }
      }
    }
  }]);

  return Angular;
}();

Angular_defineProperty(Angular, "selectors", {
  bar: '.mat-toolbar-row.notification-container',
  dismissNotificationBtn: 'button[aria-label="Dismiss notification"]'
});


;// CONCATENATED MODULE: ./core-socialist-values/src/codecept/Codecept.ts
function Codecept_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Codecept_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Codecept_createClass(Constructor, protoProps, staticProps) { if (protoProps) Codecept_defineProperties(Constructor.prototype, protoProps); if (staticProps) Codecept_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function Codecept_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var Codecept = /*#__PURE__*/function () {
  function Codecept() {
    Codecept_classCallCheck(this, Codecept);
  }

  Codecept_createClass(Codecept, null, [{
    key: "replace",
    value: function replace() {
      if (location.host === 'codecept.io') {
        Bar.replace(this.selectors.bar, null);
      }
    }
  }]);

  return Codecept;
}();

Codecept_defineProperty(Codecept, "selectors", {
  bar: '.sub-bar .message',
  observingBar: '#app'
});


;// CONCATENATED MODULE: ./core-socialist-values/src/github/Github.ts
function Github_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Github_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Github_createClass(Constructor, protoProps, staticProps) { if (protoProps) Github_defineProperties(Constructor.prototype, protoProps); if (staticProps) Github_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function Github_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Github = /*#__PURE__*/function () {
  function Github() {
    Github_classCallCheck(this, Github);
  }

  Github_createClass(Github, null, [{
    key: "replace",
    value: function replace() {
      if (location.href === 'https://github.com/') {
        var $notice = $(this.selectors.notice);

        if ($notice.length > 0 && $notice.text().toLowerCase().indexOf('ukraine') != -1) {
          $notice.remove();
        }
      }
    }
  }]);

  return Github;
}();

Github_defineProperty(Github, "selectors", {
  notice: '.border.js-notice'
});


;// CONCATENATED MODULE: ./core-socialist-values/src/nest/Nest.ts
function Nest_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Nest_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Nest_createClass(Constructor, protoProps, staticProps) { if (protoProps) Nest_defineProperties(Constructor.prototype, protoProps); if (staticProps) Nest_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function Nest_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var Nest_Codecept = /*#__PURE__*/function () {
  function Codecept() {
    Nest_classCallCheck(this, Codecept);
  }

  Nest_createClass(Codecept, null, [{
    key: "replace",
    value: function replace() {
      if (location.host === 'docs.nestjs.com') {
        Bar.replace(this.selectors.bar, null);
        $(this.selectors.bar).css('padding', '0');
      }
    }
  }]);

  return Codecept;
}();

Nest_defineProperty(Nest_Codecept, "selectors", {
  bar: '.top-bar',
  observingBar: '.ng-star-inserted'
});


;// CONCATENATED MODULE: ./core-socialist-values/src/ember/Ember.ts
function Ember_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Ember_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Ember_createClass(Constructor, protoProps, staticProps) { if (protoProps) Ember_defineProperties(Constructor.prototype, protoProps); if (staticProps) Ember_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function Ember_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var Ember = /*#__PURE__*/function () {
  function Ember() {
    Ember_classCallCheck(this, Ember);
  }

  Ember_createClass(Ember, null, [{
    key: "replace",
    value: function replace() {
      if (location.host === 'emberjs.com') {
        Bar.replace(this.selectors.bar, null);
        $(this.selectors.bar).css({
          'backgroundColor': '#1c1e24',
          'padding': 0
        });
      }
    }
  }]);

  return Ember;
}();

Ember_defineProperty(Ember, "selectors", {
  bar: '.callout-banner'
});


;// CONCATENATED MODULE: ./core-socialist-values/src/electron/Electron.ts
function Electron_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Electron_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Electron_createClass(Constructor, protoProps, staticProps) { if (protoProps) Electron_defineProperties(Constructor.prototype, protoProps); if (staticProps) Electron_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function Electron_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var Electron = /*#__PURE__*/function () {
  function Electron() {
    Electron_classCallCheck(this, Electron);
  }

  Electron_createClass(Electron, null, [{
    key: "replace",
    value: function replace() {
      if (location.host === 'www.electronjs.org') {
        Bar.replace(this.selectors.bar, null);
        $(this.selectors.bar).css({
          'padding': 0
        });
      }
    }
  }]);

  return Electron;
}();

Electron_defineProperty(Electron, "selectors", {
  bar: '.announcement-banner'
});


;// CONCATENATED MODULE: ./core-socialist-values/src/jenkins/Jenkins.ts
function Jenkins_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Jenkins_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Jenkins_createClass(Constructor, protoProps, staticProps) { if (protoProps) Jenkins_defineProperties(Constructor.prototype, protoProps); if (staticProps) Jenkins_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function Jenkins_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Jenkins_Angular = /*#__PURE__*/function () {
  function Angular() {
    Jenkins_classCallCheck(this, Angular);
  }

  Jenkins_createClass(Angular, null, [{
    key: "replace",
    value: function replace() {
      if (location.host === 'www.jenkins.io') {
        // 替换图标
        $(this.selectors.logo).replaceWith("<img src=\"/images/logos/jenkins/Jenkins.svg\">"); // 删除通知

        $(this.selectors.pageTitle).nextAll("p").each(function (i, el) {
          var $el = $(el);

          if ($el.text().toLowerCase().indexOf('ukraine') != -1) {
            $el.remove();
          }
        });
        $(this.selectors.pageTitle).parent().append('<br><br><br>');
      }
    }
  }]);

  return Angular;
}();

Jenkins_defineProperty(Jenkins_Angular, "selectors", {
  logo: 'img[src="/images/logos/jenkins/Jenkins-stop-the-war.svg"]',
  pageTitle: '.page-title'
});


;// CONCATENATED MODULE: ./core-socialist-values/src/svelte/Svelte.ts
function Svelte_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Svelte_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Svelte_createClass(Constructor, protoProps, staticProps) { if (protoProps) Svelte_defineProperties(Constructor.prototype, protoProps); if (staticProps) Svelte_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function Svelte_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Svelte = /*#__PURE__*/function () {
  function Svelte() {
    Svelte_classCallCheck(this, Svelte);
  }

  Svelte_createClass(Svelte, null, [{
    key: "replace",
    value: function replace() {
      var _this = this;

      if (location.href.indexOf('https://svelte.dev/') === 0) {
        var $navSpot = $(this.selectors.navSpot);
        var i = 0; // 监听条幅变化，变化后再次执行

        var observer = new MutationObserver(function () {
          if ($navSpot.length > 0) {
            // 替换 Logo
            $navSpot.attr('style', _this.svelteLogoStyle); // 去除底部横幅

            $(_this.selectors.footer).remove();
            $(_this.selectors.footerHeight).css(_this.selectors.footerHeightAttrName, 0); // 替换两次后结束监听

            if (i >= 1) {
              observer.disconnect();
            }

            i++;
          }
        });
        observer.observe($('#main')[0], {
          childList: true
        });
      }
    }
  }]);

  return Svelte;
}();

Svelte_defineProperty(Svelte, "selectors", {
  navSpot: '.nav-spot',
  footer: '.ukr',
  footerHeight: ':root',
  footerHeightAttrName: '--ukr-footer-height'
});

Svelte_defineProperty(Svelte, "svelteLogoStyle", 'background-image: url(https://svelte.dev/svelte-logo-horizontal.svg)');


;// CONCATENATED MODULE: ./core-socialist-values/src/main.ts
// 替换后的条幅去除空格换行后的文本











(function () {
  'use strict';

  React.replace();
  Angular.replace();
  Junit.replace();
  Codecept.replace();
  Github.replace();
  Nest_Codecept.replace();
  Ember.replace();
  Electron.replace();
  Jenkins_Angular.replace();
  Svelte.replace();
})(); //
// ==UserScript==
// @name         社会主义核心价值观（Core Socialist Values）
// @namespace    http://tampermonkey.net/
// @version      0.9.0
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
// @match        *://svelte.dev/*
// @require      https://cdn.bootcdn.net/ajax/libs/jquery/3.6.0/jquery.slim.min.js
// @grant        none
// ==/UserScript==
// ==OpenUserJS==
// @author duanluan
// ==/OpenUserJS==
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0Esa0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90YW1wZXJtb25rZXktc2NyaXB0LXV0aWxzLy4vY29yZS1zb2NpYWxpc3QtdmFsdWVzL3NyYy9qdW5pdC9KdW5pdC50cyIsIndlYnBhY2s6Ly90YW1wZXJtb25rZXktc2NyaXB0LXV0aWxzLy4vY29yZS1zb2NpYWxpc3QtdmFsdWVzL3NyYy9jb21tb24vQmFyLnRzIiwid2VicGFjazovL3RhbXBlcm1vbmtleS1zY3JpcHQtdXRpbHMvLi9jb3JlLXNvY2lhbGlzdC12YWx1ZXMvc3JjL3JlYWN0L1JlYWN0LnRzIiwid2VicGFjazovL3RhbXBlcm1vbmtleS1zY3JpcHQtdXRpbHMvLi9jb3JlLXNvY2lhbGlzdC12YWx1ZXMvc3JjL2FuZ3VsYXIvQW5ndWxhci50cyIsIndlYnBhY2s6Ly90YW1wZXJtb25rZXktc2NyaXB0LXV0aWxzLy4vY29yZS1zb2NpYWxpc3QtdmFsdWVzL3NyYy9jb2RlY2VwdC9Db2RlY2VwdC50cyIsIndlYnBhY2s6Ly90YW1wZXJtb25rZXktc2NyaXB0LXV0aWxzLy4vY29yZS1zb2NpYWxpc3QtdmFsdWVzL3NyYy9naXRodWIvR2l0aHViLnRzIiwid2VicGFjazovL3RhbXBlcm1vbmtleS1zY3JpcHQtdXRpbHMvLi9jb3JlLXNvY2lhbGlzdC12YWx1ZXMvc3JjL25lc3QvTmVzdC50cyIsIndlYnBhY2s6Ly90YW1wZXJtb25rZXktc2NyaXB0LXV0aWxzLy4vY29yZS1zb2NpYWxpc3QtdmFsdWVzL3NyYy9lbWJlci9FbWJlci50cyIsIndlYnBhY2s6Ly90YW1wZXJtb25rZXktc2NyaXB0LXV0aWxzLy4vY29yZS1zb2NpYWxpc3QtdmFsdWVzL3NyYy9lbGVjdHJvbi9FbGVjdHJvbi50cyIsIndlYnBhY2s6Ly90YW1wZXJtb25rZXktc2NyaXB0LXV0aWxzLy4vY29yZS1zb2NpYWxpc3QtdmFsdWVzL3NyYy9qZW5raW5zL0plbmtpbnMudHMiLCJ3ZWJwYWNrOi8vdGFtcGVybW9ua2V5LXNjcmlwdC11dGlscy8uL2NvcmUtc29jaWFsaXN0LXZhbHVlcy9zcmMvc3ZlbHRlL1N2ZWx0ZS50cyIsIndlYnBhY2s6Ly90YW1wZXJtb25rZXktc2NyaXB0LXV0aWxzLy4vY29yZS1zb2NpYWxpc3QtdmFsdWVzL3NyYy9tYWluLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGNsYXNzIEp1bml0IHtcblxuICBwcml2YXRlIHN0YXRpYyBzZWxlY3RvcnMgPSB7XG4gICAganVuaXRBYm91dDogJyNhYm91dCcsXG4gICAganVuaXRMb2dvOiAnaW1nW3NyYz1cIi9qdW5pdDUvYXNzZXRzL2ltZy9qdW5pdDUtbG9nby5wbmdcIl0nLFxuICAgIGp1bml0RmF2aWNvbjogJ2xpbmtbcmVsPVwiaWNvblwiXScsXG4gIH1cblxuICBwcml2YXRlIHN0YXRpYyBqdW5pdExvZ29VcmwgPSAnaHR0cHM6Ly9yYXcuaXFpcS5pby9kdWFubHVhbi90YW1wZXJtb25rZXktc2NyaXB0cy9tYWluL2NvcmUtc29jaWFsaXN0LXZhbHVlcy9zcmMvanVuaXQvaW1ncy9qdW5pdDUtbG9nby5wbmcnXG5cbiAgc3RhdGljIHJlcGxhY2UoKSB7XG4gICAgaWYgKGxvY2F0aW9uLmhyZWYgPT09ICdodHRwczovL2p1bml0Lm9yZy9qdW5pdDUvJykge1xuICAgICAgJCh0aGlzLnNlbGVjdG9ycy5qdW5pdEFib3V0KS5wcmV2QWxsKCkucmVtb3ZlKCk7XG4gICAgICAkKHRoaXMuc2VsZWN0b3JzLmp1bml0TG9nbykuYXR0cignc3JjJywgdGhpcy5qdW5pdExvZ29VcmwpO1xuICAgICAgJCh0aGlzLnNlbGVjdG9ycy5qdW5pdEZhdmljb24pLmF0dHIoJ2hyZWYnLCB0aGlzLmp1bml0TG9nb1VybCk7XG4gICAgfVxuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBCYXIge1xuXG4gIC8qKlxuICAgKiDmm7/mjaLmnaHluYVcbiAgICogQHBhcmFtIHNlbGVjdG9yIOadoeW5hemAieaLqeWZqFxuICAgKiBAcGFyYW0gb2JzZXJ2aW5nU2VsZWN0b3Ig5Y+Y5YyW6YCJ5oup5ZmoXG4gICAqL1xuICBzdGF0aWMgcmVwbGFjZShzZWxlY3Rvciwgb2JzZXJ2aW5nU2VsZWN0b3IpIHtcbiAgICBpZiAoISQoc2VsZWN0b3IpLnRleHQoKS5tYXRjaCgvdWtyYWluZXzkuYzlhYvlhbB8YmxhY2t86buR5Lq6L2kpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIEJhci5sb29wUmVwbGFjZUJhcihzZWxlY3Rvcik7XG4gICAgaWYgKG9ic2VydmluZ1NlbGVjdG9yKSB7XG4gICAgICAvLyDnm5HlkKzmnaHluYXlj5jljJbvvIzlj5jljJblkI7lho3mrKHmiafooYxcbiAgICAgIG5ldyBNdXRhdGlvbk9ic2VydmVyKChtdXRhdGlvbnM6IE11dGF0aW9uUmVjb3JkW10sIG9ic2VydmVyOiBNdXRhdGlvbk9ic2VydmVyKSA9PiB7XG4gICAgICAgIEJhci5sb29wUmVwbGFjZUJhcihzZWxlY3Rvcik7XG4gICAgICB9KS5vYnNlcnZlKCQob2JzZXJ2aW5nU2VsZWN0b3IpWzBdLCB7Y2hpbGRMaXN0OiB0cnVlfSlcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHN0YXRpYyB0eHQgPSAn5a+M5by65rCR5Li75paH5piO5ZKM6LCQ6Ieq55Sx5bmz562J5YWs5q2j5rOV5rK754ix5Zu95pWs5Lia6K+a5L+h5Y+L5ZaEUHJvc3Blcml0eURlbW9jcmFjeUNpdmlsaXR5SGFybW9ueUZyZWVkb21FcXVhbGl0eUp1c3RpY2VSdWxlb2ZsYXdQYXRyaW90aXNtRGVkaWNhdGlvbkludGVncml0eUZyaWVuZHNoaXAnO1xuXG4gIC8vIOW+queOr+abv+aNouadoeW5hVxuICBwcml2YXRlIHN0YXRpYyBsb29wUmVwbGFjZUJhcihzZWxlY3Rvcikge1xuICAgIGlmICgkKCQoc2VsZWN0b3IpWzBdKS50ZXh0KCkucmVwbGFjZSgvXFxzKy9nLCBcIlwiKSA9PT0gQmFyLnR4dCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBpc1N0b3AgPSBzZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoJCgkKHNlbGVjdG9yKVswXSkudGV4dCgpLnJlcGxhY2UoL1xccysvZywgXCJcIikgPT09IEJhci50eHQpIHtcbiAgICAgICAgY2xlYXJJbnRlcnZhbChpc1N0b3ApO1xuICAgICAgfVxuICAgICAgQmFyLnJlcGxhY2VCYXIoc2VsZWN0b3IpO1xuICAgIH0sIDEwMDApO1xuICB9XG5cbiAgcHJpdmF0ZSBzdGF0aWMgcmVwbGFjZUJhcihzZWxlY3Rvcikge1xuICAgIGNvbnN0IGJhclNlbGVjdG9yID0gJy5jc3ZfYmFyJywgYmFyVWxTZWxlY3RvciA9IGJhclNlbGVjdG9yICsgJyAuY3N2X2Jhcl91bCc7XG5cbiAgICAkKHNlbGVjdG9yKS5jc3MoeydtaW5IZWlnaHQnOiAnNDBweCd9KTtcbiAgICAkKHNlbGVjdG9yKS5odG1sKGBcbiAgICA8ZGl2IGNsYXNzPVwiY3N2X2JhclwiPlxuICAgICAgPHVsIGNsYXNzPSdjc3ZfYmFyX3VsJz48bGk+5a+M5by6PC9saT48bGk+5rCR5Li7PC9saT48bGk+5paH5piOPC9saT48bGk+5ZKM6LCQPC9saT48bGk+6Ieq55SxPC9saT48bGk+5bmz562JPC9saT48bGk+5YWs5q2jPC9saT48bGk+5rOV5rK7PC9saT48bGk+54ix5Zu9PC9saT48bGk+5pWs5LiaPC9saT48bGk+6K+a5L+hPC9saT48bGk+5Y+L5ZaEPC9saT48L3VsPjxicj5cbiAgICAgIDx1bCBjbGFzcz0nY3N2X2Jhcl91bCc+PGxpPlByb3NwZXJpdHk8L2xpPjxsaT5EZW1vY3JhY3k8L2xpPjxsaT5DaXZpbGl0eTwvbGk+PGxpPkhhcm1vbnk8L2xpPjxsaT5GcmVlZG9tPC9saT48bGk+RXF1YWxpdHk8L2xpPjxsaT5KdXN0aWNlPC9saT48bGk+UnVsZSBvZiBsYXc8L2xpPjxsaT5QYXRyaW90aXNtPC9saT48bGk+RGVkaWNhdGlvbjwvbGk+PGxpPkludGVncml0eTwvbGk+PGxpPkZyaWVuZHNoaXA8L2xpPlxuICAgICAgPC91bD5cbiAgICA8L2Rpdj5gKTtcblxuICAgIC8vIOmBv+WFjeWHuueOsOWkmuS4quWvvOiHtOagt+W8j+a3u+WKoOWksei0pVxuICAgIGNvbnN0ICRiYXIgPSAkKGJhclNlbGVjdG9yKTtcbiAgICBpZiAoJGJhci5sZW5ndGggPT0gMikge1xuICAgICAgJGJhci5lcSgwKS5yZW1vdmUoKTtcbiAgICB9XG5cbiAgICAkKGJhclVsU2VsZWN0b3IpLmNzcyh7J2Rpc3BsYXknOiAnaW5saW5lLWJsb2NrJywgJ2xpc3RTdHlsZSc6ICdub25lJywgJ21hcmdpbic6IDAsICdwYWRkaW5nJzogMCwgJ3dpZHRoJzogJ2F1dG8nfSk7XG4gICAgJChiYXJVbFNlbGVjdG9yICsgJyBsaScpLmNzcyh7J2NvbG9yJzogJyNERTI5MTAnLCAnZm9udFdlaWdodCc6ICdib2xkJywgJ2ZvbnRGYW1pbHknOiAnS2FpVGknLCAnZmxvYXQnOiAnbGVmdCcsICdwYWRkaW5nUmlnaHQnOiAnMTBweCcsICdtaW4td2lkdGgnOiAnODBweCcsICd0ZXh0QWxpZ24nOiAnY2VudGVyJ30pO1xuICAgICQoYmFyVWxTZWxlY3RvciArICc6Zmlyc3QnKS5jc3MoJ3ZlcnRpY2FsQWxpZ24nLCAnYm90dG9tJyk7XG4gICAgJChiYXJVbFNlbGVjdG9yICsgJzpmaXJzdCBsaScpLmNzcygnZm9udFNpemUnLCAnMThweCcpO1xuICAgICQoYmFyVWxTZWxlY3RvciArICc6ZXEoMSkgbGknKS5jc3MoJ2ZvbnRTaXplJywgJzEzcHgnKTtcbiAgfVxufVxuIiwiaW1wb3J0IEJhciBmcm9tIFwiLi4vY29tbW9uL0JhclwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZWFjdCB7XG5cbiAgcHJpdmF0ZSBzdGF0aWMgc2VsZWN0b3JzID0ge1xuICAgIGJhcjogJy5jc3MtbHBpeWN2JyxcbiAgICBvYnNlcnZpbmdCYXI6ICcjZ2F0c2J5LWZvY3VzLXdyYXBwZXInLFxuICB9XG5cbiAgc3RhdGljIHJlcGxhY2UoKSB7XG4gICAgaWYgKGxvY2F0aW9uLmhvc3QgPT09ICdyZWFjdGpzLm9yZycpIHtcbiAgICAgIEJhci5yZXBsYWNlKHRoaXMuc2VsZWN0b3JzLmJhciwgdGhpcy5zZWxlY3RvcnMub2JzZXJ2aW5nQmFyKTtcbiAgICB9XG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEFuZ3VsYXIge1xuXG4gIHByaXZhdGUgc3RhdGljIHNlbGVjdG9ycyA9IHtcbiAgICBiYXI6ICcubWF0LXRvb2xiYXItcm93Lm5vdGlmaWNhdGlvbi1jb250YWluZXInLFxuICAgIGRpc21pc3NOb3RpZmljYXRpb25CdG46ICdidXR0b25bYXJpYS1sYWJlbD1cIkRpc21pc3Mgbm90aWZpY2F0aW9uXCJdJyxcbiAgfVxuXG4gIHN0YXRpYyByZXBsYWNlKCkge1xuICAgIGlmIChsb2NhdGlvbi5ob3N0ID09PSAnYW5ndWxhci5pbycpIHtcbiAgICAgIC8vIOS4jeWtmOWcqOaYr+WQpuWFs+mXremAmuefpeeahOacrOWcsOWtmOWCqOaXtlxuICAgICAgaWYgKCFsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYWlvLW5vdGlmaWNhdGlvbi93YXItdWtyYWluZScpKSB7XG4gICAgICAgIC8vIOWmguaenOmAmuefpeS4reWtmOWcqOWFs+mUruivjVxuICAgICAgICBjb25zdCAkYmFyID0gJCh0aGlzLnNlbGVjdG9ycy5iYXIpO1xuICAgICAgICBpZiAoJGJhci5sZW5ndGggPiAwICYmICRiYXIudGV4dCgpLnRvTG93ZXJDYXNlKCkuaW5kZXhPZigndWtyYWluZScpICE9IC0xKSB7XG4gICAgICAgICAgLy8g54K55Ye75YWz6Zet6YCa55+lXG4gICAgICAgICAgJCh0aGlzLnNlbGVjdG9ycy5kaXNtaXNzTm90aWZpY2F0aW9uQnRuKVswXS5jbGljaygpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59IiwiaW1wb3J0IEJhciBmcm9tIFwiLi4vY29tbW9uL0JhclwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb2RlY2VwdCB7XG5cbiAgc3RhdGljIHNlbGVjdG9ycyA9IHtcbiAgICBiYXI6ICcuc3ViLWJhciAubWVzc2FnZScsXG4gICAgb2JzZXJ2aW5nQmFyOiAnI2FwcCdcbiAgfVxuXG4gIHN0YXRpYyByZXBsYWNlKCkge1xuICAgIGlmIChsb2NhdGlvbi5ob3N0ID09PSAnY29kZWNlcHQuaW8nKSB7XG4gICAgICBCYXIucmVwbGFjZSh0aGlzLnNlbGVjdG9ycy5iYXIsIG51bGwpO1xuICAgIH1cbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2l0aHViIHtcblxuICBzdGF0aWMgc2VsZWN0b3JzID0ge1xuICAgIG5vdGljZTogJy5ib3JkZXIuanMtbm90aWNlJ1xuICB9XG5cbiAgc3RhdGljIHJlcGxhY2UoKSB7XG4gICAgaWYgKGxvY2F0aW9uLmhyZWYgPT09ICdodHRwczovL2dpdGh1Yi5jb20vJykge1xuICAgICAgY29uc3QgJG5vdGljZSA9ICQodGhpcy5zZWxlY3RvcnMubm90aWNlKTtcbiAgICAgIGlmICgkbm90aWNlLmxlbmd0aCA+IDAgJiYgJG5vdGljZS50ZXh0KCkudG9Mb3dlckNhc2UoKS5pbmRleE9mKCd1a3JhaW5lJykgIT0gLTEpIHtcbiAgICAgICAgJG5vdGljZS5yZW1vdmUoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCBCYXIgZnJvbSBcIi4uL2NvbW1vbi9CYXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29kZWNlcHQge1xuXG4gIHN0YXRpYyBzZWxlY3RvcnMgPSB7XG4gICAgYmFyOiAnLnRvcC1iYXInLFxuICAgIG9ic2VydmluZ0JhcjogJy5uZy1zdGFyLWluc2VydGVkJ1xuICB9XG5cbiAgc3RhdGljIHJlcGxhY2UoKSB7XG4gICAgaWYgKGxvY2F0aW9uLmhvc3QgPT09ICdkb2NzLm5lc3Rqcy5jb20nKSB7XG4gICAgICBCYXIucmVwbGFjZSh0aGlzLnNlbGVjdG9ycy5iYXIsIG51bGwpO1xuICAgICAgJCh0aGlzLnNlbGVjdG9ycy5iYXIpLmNzcygncGFkZGluZycsICcwJyk7XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgQmFyIGZyb20gXCIuLi9jb21tb24vQmFyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVtYmVyIHtcblxuICBzdGF0aWMgc2VsZWN0b3JzID0ge1xuICAgIGJhcjogJy5jYWxsb3V0LWJhbm5lcicsXG4gIH1cblxuICBzdGF0aWMgcmVwbGFjZSgpIHtcbiAgICBpZiAobG9jYXRpb24uaG9zdCA9PT0gJ2VtYmVyanMuY29tJykge1xuICAgICAgQmFyLnJlcGxhY2UodGhpcy5zZWxlY3RvcnMuYmFyLCBudWxsKTtcbiAgICAgICQodGhpcy5zZWxlY3RvcnMuYmFyKS5jc3MoeydiYWNrZ3JvdW5kQ29sb3InOiAnIzFjMWUyNCcsICdwYWRkaW5nJzogMH0pO1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IEJhciBmcm9tIFwiLi4vY29tbW9uL0JhclwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFbGVjdHJvbiB7XG5cbiAgc3RhdGljIHNlbGVjdG9ycyA9IHtcbiAgICBiYXI6ICcuYW5ub3VuY2VtZW50LWJhbm5lcicsXG4gIH1cblxuICBzdGF0aWMgcmVwbGFjZSgpIHtcbiAgICBpZiAobG9jYXRpb24uaG9zdCA9PT0gJ3d3dy5lbGVjdHJvbmpzLm9yZycpIHtcbiAgICAgIEJhci5yZXBsYWNlKHRoaXMuc2VsZWN0b3JzLmJhciwgbnVsbCk7XG4gICAgICAkKHRoaXMuc2VsZWN0b3JzLmJhcikuY3NzKHsncGFkZGluZyc6IDB9KTtcbiAgICB9XG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEFuZ3VsYXIge1xuXG4gIHN0YXRpYyBzZWxlY3RvcnMgPSB7XG4gICAgbG9nbzogJ2ltZ1tzcmM9XCIvaW1hZ2VzL2xvZ29zL2plbmtpbnMvSmVua2lucy1zdG9wLXRoZS13YXIuc3ZnXCJdJyxcbiAgICBwYWdlVGl0bGU6ICcucGFnZS10aXRsZSdcbiAgfVxuXG4gIHN0YXRpYyByZXBsYWNlKCkge1xuICAgIGlmIChsb2NhdGlvbi5ob3N0ID09PSAnd3d3LmplbmtpbnMuaW8nKSB7XG4gICAgICAvLyDmm7/mjaLlm77moIdcbiAgICAgICQodGhpcy5zZWxlY3RvcnMubG9nbykucmVwbGFjZVdpdGgoYDxpbWcgc3JjPVwiL2ltYWdlcy9sb2dvcy9qZW5raW5zL0plbmtpbnMuc3ZnXCI+YCk7XG5cbiAgICAgIC8vIOWIoOmZpOmAmuefpVxuICAgICAgJCh0aGlzLnNlbGVjdG9ycy5wYWdlVGl0bGUpLm5leHRBbGwoXCJwXCIpLmVhY2goKGksIGVsKSA9PiB7XG4gICAgICAgIGNvbnN0ICRlbCA9ICQoZWwpO1xuICAgICAgICBpZiAoJGVsLnRleHQoKS50b0xvd2VyQ2FzZSgpLmluZGV4T2YoJ3VrcmFpbmUnKSAhPSAtMSkge1xuICAgICAgICAgICRlbC5yZW1vdmUoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICAkKHRoaXMuc2VsZWN0b3JzLnBhZ2VUaXRsZSkucGFyZW50KCkuYXBwZW5kKCc8YnI+PGJyPjxicj4nKTtcbiAgICB9XG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFN2ZWx0ZSB7XG5cbiAgcHJpdmF0ZSBzdGF0aWMgc2VsZWN0b3JzID0ge1xuICAgIG5hdlNwb3Q6ICcubmF2LXNwb3QnLFxuICAgIGZvb3RlcjogJy51a3InLFxuICAgIGZvb3RlckhlaWdodDogJzpyb290JyxcbiAgICBmb290ZXJIZWlnaHRBdHRyTmFtZTogJy0tdWtyLWZvb3Rlci1oZWlnaHQnLFxuICB9XG5cbiAgcHJpdmF0ZSBzdGF0aWMgc3ZlbHRlTG9nb1N0eWxlID0gJ2JhY2tncm91bmQtaW1hZ2U6IHVybChodHRwczovL3N2ZWx0ZS5kZXYvc3ZlbHRlLWxvZ28taG9yaXpvbnRhbC5zdmcpJztcblxuICBzdGF0aWMgcmVwbGFjZSgpIHtcbiAgICBpZiAobG9jYXRpb24uaHJlZi5pbmRleE9mKCdodHRwczovL3N2ZWx0ZS5kZXYvJykgPT09IDApIHtcbiAgICAgIGNvbnN0ICRuYXZTcG90ID0gJCh0aGlzLnNlbGVjdG9ycy5uYXZTcG90KTtcbiAgICAgIGxldCBpID0gMDtcbiAgICAgIC8vIOebkeWQrOadoeW5heWPmOWMlu+8jOWPmOWMluWQjuWGjeasoeaJp+ihjFxuICAgICAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcigoKSA9PiB7XG4gICAgICAgIGlmICgkbmF2U3BvdC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgLy8g5pu/5o2iIExvZ29cbiAgICAgICAgICAkbmF2U3BvdC5hdHRyKCdzdHlsZScsIHRoaXMuc3ZlbHRlTG9nb1N0eWxlKTtcbiAgICAgICAgICAvLyDljrvpmaTlupXpg6jmqKrluYVcbiAgICAgICAgICAkKHRoaXMuc2VsZWN0b3JzLmZvb3RlcikucmVtb3ZlKCk7XG4gICAgICAgICAgJCh0aGlzLnNlbGVjdG9ycy5mb290ZXJIZWlnaHQpLmNzcyh0aGlzLnNlbGVjdG9ycy5mb290ZXJIZWlnaHRBdHRyTmFtZSwgMCk7XG4gICAgICAgICAgLy8g5pu/5o2i5Lik5qyh5ZCO57uT5p2f55uR5ZCsXG4gICAgICAgICAgaWYgKGkgPj0gMSkge1xuICAgICAgICAgICAgb2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpKys7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgb2JzZXJ2ZXIub2JzZXJ2ZSgkKCcjbWFpbicpWzBdLCB7Y2hpbGRMaXN0OiB0cnVlfSk7XG4gICAgfVxuICB9XG59XG4iLCIvLyDmm7/mjaLlkI7nmoTmnaHluYXljrvpmaTnqbrmoLzmjaLooYzlkI7nmoTmlofmnKxcbmltcG9ydCBKdW5pdCBmcm9tIFwiLi9qdW5pdC9KdW5pdFwiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCIuL3JlYWN0L1JlYWN0XCI7XG5pbXBvcnQgQW5ndWxhciBmcm9tIFwiLi9hbmd1bGFyL0FuZ3VsYXJcIjtcbmltcG9ydCBDb2RlY2VwdCBmcm9tIFwiLi9jb2RlY2VwdC9Db2RlY2VwdFwiO1xuaW1wb3J0IEdpdGh1YiBmcm9tIFwiLi9naXRodWIvR2l0aHViXCI7XG5pbXBvcnQgTmVzdCBmcm9tIFwiLi9uZXN0L05lc3RcIjtcbmltcG9ydCBFbWJlciBmcm9tIFwiLi9lbWJlci9FbWJlclwiO1xuaW1wb3J0IEVsZWN0cm9uIGZyb20gXCIuL2VsZWN0cm9uL0VsZWN0cm9uXCI7XG5pbXBvcnQgSmVua2lucyBmcm9tIFwiLi9qZW5raW5zL0plbmtpbnNcIjtcbmltcG9ydCBTdmVsdGUgZnJvbSBcIi4vc3ZlbHRlL1N2ZWx0ZVwiO1xuXG4oKCkgPT4ge1xuICAndXNlIHN0cmljdCc7XG5cbiAgUmVhY3QucmVwbGFjZSgpO1xuICBBbmd1bGFyLnJlcGxhY2UoKTtcbiAgSnVuaXQucmVwbGFjZSgpO1xuICBDb2RlY2VwdC5yZXBsYWNlKCk7XG4gIEdpdGh1Yi5yZXBsYWNlKCk7XG4gIE5lc3QucmVwbGFjZSgpO1xuICBFbWJlci5yZXBsYWNlKCk7XG4gIEVsZWN0cm9uLnJlcGxhY2UoKTtcbiAgSmVua2lucy5yZXBsYWNlKCk7XG4gIFN2ZWx0ZS5yZXBsYWNlKCk7XG59KSgpO1xuLy9cbi8vID09VXNlclNjcmlwdD09XG4vLyBAbmFtZSAgICAgICAgIOekvuS8muS4u+S5ieaguOW/g+S7t+WAvOingu+8iENvcmUgU29jaWFsaXN0IFZhbHVlc++8iVxuLy8gQG5hbWVzcGFjZSAgICBodHRwOi8vdGFtcGVybW9ua2V5Lm5ldC9cbi8vIEB2ZXJzaW9uICAgICAgMC45LjBcbi8vIEBkZXNjcmlwdGlvbiAg5pu/5o2i5pS/5rK755u45YWz5p2h5bmF5Li656S+5Lya5Li75LmJ5qC45b+D5Lu35YC86KeC77yM5pu/5o2i5pS/5rK755u45YWzIExvZ28g6aKc6Imy5Li65Lit5Zu957qi77yM5Y676Zmk5pS/5rK755u45YWz6YCa55+l77yM6K6p5oqA5pyv6L+c56a75pS/5rK744CCXG4vLyBAYXV0aG9yICAgICAgIGR1YW5sdWFuXG4vLyBAY29weXJpZ2h0ICAgIDIwMjIsIGR1YW5sdWFuIChodHRwczovL2dpdGh1Yi5jb20vZHVhbmx1YW4pXG4vLyBAbGljZW5zZSAgICAgIEFwYWNoZS0yLjA7IGh0dHBzOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjAudHh0XG4vLyBAbWF0Y2ggICAgICAgICo6Ly9yZWFjdGpzLm9yZy8qXG4vLyBAbWF0Y2ggICAgICAgICo6Ly9hbmd1bGFyLmlvLypcbi8vIEBtYXRjaCAgICAgICAgKjovL2p1bml0Lm9yZy8qXG4vLyBAbWF0Y2ggICAgICAgICo6Ly9jb2RlY2VwdC5pby8qXG4vLyBAbWF0Y2ggICAgICAgICo6Ly9naXRodWIuY29tLypcbi8vIEBtYXRjaCAgICAgICAgKjovL2RvY3MubmVzdGpzLmNvbS8qXG4vLyBAbWF0Y2ggICAgICAgICo6Ly9lbWJlcmpzLmNvbS8qXG4vLyBAbWF0Y2ggICAgICAgICo6Ly93d3cuZWxlY3Ryb25qcy5vcmcvKlxuLy8gQG1hdGNoICAgICAgICAqOi8vd3d3LmplbmtpbnMuaW8vKlxuLy8gQG1hdGNoICAgICAgICAqOi8vc3ZlbHRlLmRldi8qXG4vLyBAcmVxdWlyZSAgICAgIGh0dHBzOi8vY2RuLmJvb3RjZG4ubmV0L2FqYXgvbGlicy9qcXVlcnkvMy42LjAvanF1ZXJ5LnNsaW0ubWluLmpzXG4vLyBAZ3JhbnQgICAgICAgIG5vbmVcbi8vID09L1VzZXJTY3JpcHQ9PVxuXG4vLyA9PU9wZW5Vc2VySlM9PVxuLy8gQGF1dGhvciBkdWFubHVhblxuLy8gPT0vT3BlblVzZXJKUz09XG4iXSwibmFtZXMiOlsiSnVuaXQiLCJsb2NhdGlvbiIsImhyZWYiLCIkIiwic2VsZWN0b3JzIiwianVuaXRBYm91dCIsInByZXZBbGwiLCJyZW1vdmUiLCJqdW5pdExvZ28iLCJhdHRyIiwianVuaXRMb2dvVXJsIiwianVuaXRGYXZpY29uIiwiQmFyIiwic2VsZWN0b3IiLCJvYnNlcnZpbmdTZWxlY3RvciIsInRleHQiLCJtYXRjaCIsImxvb3BSZXBsYWNlQmFyIiwiTXV0YXRpb25PYnNlcnZlciIsIm11dGF0aW9ucyIsIm9ic2VydmVyIiwib2JzZXJ2ZSIsImNoaWxkTGlzdCIsInJlcGxhY2UiLCJ0eHQiLCJpc1N0b3AiLCJzZXRJbnRlcnZhbCIsImNsZWFySW50ZXJ2YWwiLCJyZXBsYWNlQmFyIiwiYmFyU2VsZWN0b3IiLCJiYXJVbFNlbGVjdG9yIiwiY3NzIiwiaHRtbCIsIiRiYXIiLCJsZW5ndGgiLCJlcSIsIlJlYWN0IiwiaG9zdCIsImJhciIsIm9ic2VydmluZ0JhciIsIkFuZ3VsYXIiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwidG9Mb3dlckNhc2UiLCJpbmRleE9mIiwiZGlzbWlzc05vdGlmaWNhdGlvbkJ0biIsImNsaWNrIiwiQ29kZWNlcHQiLCJHaXRodWIiLCIkbm90aWNlIiwibm90aWNlIiwiRW1iZXIiLCJFbGVjdHJvbiIsImxvZ28iLCJyZXBsYWNlV2l0aCIsInBhZ2VUaXRsZSIsIm5leHRBbGwiLCJlYWNoIiwiaSIsImVsIiwiJGVsIiwicGFyZW50IiwiYXBwZW5kIiwiU3ZlbHRlIiwiJG5hdlNwb3QiLCJuYXZTcG90Iiwic3ZlbHRlTG9nb1N0eWxlIiwiZm9vdGVyIiwiZm9vdGVySGVpZ2h0IiwiZm9vdGVySGVpZ2h0QXR0ck5hbWUiLCJkaXNjb25uZWN0IiwiTmVzdCIsIkplbmtpbnMiXSwic291cmNlUm9vdCI6IiJ9