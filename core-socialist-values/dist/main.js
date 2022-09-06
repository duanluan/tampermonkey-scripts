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
  reactBar: '.css-lpiycv',
  junitAbout: '#about',
  junitLogo: 'img[src="/junit5/assets/img/junit5-logo.png"]',
  junitFavicon: 'link[rel="icon"]',
  codeceptBar: '.sub-bar .message'
});

_defineProperty(Junit, "junitLogoUrl", 'https://raw.githubusercontent.com/duanluan/tampermonkey-scripts/main/core-socialist-values/src/junit/imgs/junit5-logo.png');


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
})(); //
// ==UserScript==
// @name         社会主义核心价值观（Core Socialist Values）
// @namespace    http://tampermonkey.net/
// @version      0.8.2
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
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQSxrQiIsInNvdXJjZXMiOlsid2VicGFjazovL3RhbXBlcm1vbmtleS1zY3JpcHQtdXRpbHMvLi9jb3JlLXNvY2lhbGlzdC12YWx1ZXMvc3JjL2p1bml0L0p1bml0LnRzIiwid2VicGFjazovL3RhbXBlcm1vbmtleS1zY3JpcHQtdXRpbHMvLi9jb3JlLXNvY2lhbGlzdC12YWx1ZXMvc3JjL2NvbW1vbi9CYXIudHMiLCJ3ZWJwYWNrOi8vdGFtcGVybW9ua2V5LXNjcmlwdC11dGlscy8uL2NvcmUtc29jaWFsaXN0LXZhbHVlcy9zcmMvcmVhY3QvUmVhY3QudHMiLCJ3ZWJwYWNrOi8vdGFtcGVybW9ua2V5LXNjcmlwdC11dGlscy8uL2NvcmUtc29jaWFsaXN0LXZhbHVlcy9zcmMvYW5ndWxhci9Bbmd1bGFyLnRzIiwid2VicGFjazovL3RhbXBlcm1vbmtleS1zY3JpcHQtdXRpbHMvLi9jb3JlLXNvY2lhbGlzdC12YWx1ZXMvc3JjL2NvZGVjZXB0L0NvZGVjZXB0LnRzIiwid2VicGFjazovL3RhbXBlcm1vbmtleS1zY3JpcHQtdXRpbHMvLi9jb3JlLXNvY2lhbGlzdC12YWx1ZXMvc3JjL2dpdGh1Yi9HaXRodWIudHMiLCJ3ZWJwYWNrOi8vdGFtcGVybW9ua2V5LXNjcmlwdC11dGlscy8uL2NvcmUtc29jaWFsaXN0LXZhbHVlcy9zcmMvbmVzdC9OZXN0LnRzIiwid2VicGFjazovL3RhbXBlcm1vbmtleS1zY3JpcHQtdXRpbHMvLi9jb3JlLXNvY2lhbGlzdC12YWx1ZXMvc3JjL2VtYmVyL0VtYmVyLnRzIiwid2VicGFjazovL3RhbXBlcm1vbmtleS1zY3JpcHQtdXRpbHMvLi9jb3JlLXNvY2lhbGlzdC12YWx1ZXMvc3JjL2VsZWN0cm9uL0VsZWN0cm9uLnRzIiwid2VicGFjazovL3RhbXBlcm1vbmtleS1zY3JpcHQtdXRpbHMvLi9jb3JlLXNvY2lhbGlzdC12YWx1ZXMvc3JjL2plbmtpbnMvSmVua2lucy50cyIsIndlYnBhY2s6Ly90YW1wZXJtb25rZXktc2NyaXB0LXV0aWxzLy4vY29yZS1zb2NpYWxpc3QtdmFsdWVzL3NyYy9tYWluLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGNsYXNzIEp1bml0IHtcblxuICBwcml2YXRlIHN0YXRpYyBzZWxlY3RvcnMgPSB7XG4gICAgcmVhY3RCYXI6ICcuY3NzLWxwaXljdicsXG4gICAganVuaXRBYm91dDogJyNhYm91dCcsXG4gICAganVuaXRMb2dvOiAnaW1nW3NyYz1cIi9qdW5pdDUvYXNzZXRzL2ltZy9qdW5pdDUtbG9nby5wbmdcIl0nLFxuICAgIGp1bml0RmF2aWNvbjogJ2xpbmtbcmVsPVwiaWNvblwiXScsXG4gICAgY29kZWNlcHRCYXI6ICcuc3ViLWJhciAubWVzc2FnZScsXG4gIH1cblxuICBwcml2YXRlIHN0YXRpYyBqdW5pdExvZ29VcmwgPSAnaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2R1YW5sdWFuL3RhbXBlcm1vbmtleS1zY3JpcHRzL21haW4vY29yZS1zb2NpYWxpc3QtdmFsdWVzL3NyYy9qdW5pdC9pbWdzL2p1bml0NS1sb2dvLnBuZydcblxuICBzdGF0aWMgcmVwbGFjZSgpIHtcbiAgICBpZiAobG9jYXRpb24uaHJlZiA9PT0gJ2h0dHBzOi8vanVuaXQub3JnL2p1bml0NS8nKSB7XG4gICAgICAkKHRoaXMuc2VsZWN0b3JzLmp1bml0QWJvdXQpLnByZXZBbGwoKS5yZW1vdmUoKTtcbiAgICAgICQodGhpcy5zZWxlY3RvcnMuanVuaXRMb2dvKS5hdHRyKCdzcmMnLCB0aGlzLmp1bml0TG9nb1VybCk7XG4gICAgICAkKHRoaXMuc2VsZWN0b3JzLmp1bml0RmF2aWNvbikuYXR0cignaHJlZicsIHRoaXMuanVuaXRMb2dvVXJsKTtcbiAgICB9XG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEJhciB7XG5cbiAgLyoqXG4gICAqIOabv+aNouadoeW5hVxuICAgKiBAcGFyYW0gc2VsZWN0b3Ig5p2h5bmF6YCJ5oup5ZmoXG4gICAqIEBwYXJhbSBvYnNlcnZpbmdTZWxlY3RvciDlj5jljJbpgInmi6nlmahcbiAgICovXG4gIHN0YXRpYyByZXBsYWNlKHNlbGVjdG9yLCBvYnNlcnZpbmdTZWxlY3Rvcikge1xuICAgIGlmICghJChzZWxlY3RvcikudGV4dCgpLm1hdGNoKC91a3JhaW5lfOS5jOWFi+WFsHxibGFja3zpu5HkurovaSkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQmFyLmxvb3BSZXBsYWNlQmFyKHNlbGVjdG9yKTtcbiAgICBpZiAob2JzZXJ2aW5nU2VsZWN0b3IpIHtcbiAgICAgIC8vIOebkeWQrOadoeW5heWPmOWMlu+8jOWPmOWMluWQjuWGjeasoeaJp+ihjFxuICAgICAgbmV3IE11dGF0aW9uT2JzZXJ2ZXIoKG11dGF0aW9uczogTXV0YXRpb25SZWNvcmRbXSwgb2JzZXJ2ZXI6IE11dGF0aW9uT2JzZXJ2ZXIpID0+IHtcbiAgICAgICAgQmFyLmxvb3BSZXBsYWNlQmFyKHNlbGVjdG9yKTtcbiAgICAgIH0pLm9ic2VydmUoJChvYnNlcnZpbmdTZWxlY3RvcilbMF0sIHtjaGlsZExpc3Q6IHRydWV9KVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgc3RhdGljIHR4dCA9ICflr4zlvLrmsJHkuLvmlofmmI7lkozosJDoh6rnlLHlubPnrYnlhazmraPms5XmsrvniLHlm73mlazkuJror5rkv6Hlj4vlloRQcm9zcGVyaXR5RGVtb2NyYWN5Q2l2aWxpdHlIYXJtb255RnJlZWRvbUVxdWFsaXR5SnVzdGljZVJ1bGVvZmxhd1BhdHJpb3Rpc21EZWRpY2F0aW9uSW50ZWdyaXR5RnJpZW5kc2hpcCc7XG5cbiAgLy8g5b6q546v5pu/5o2i5p2h5bmFXG4gIHByaXZhdGUgc3RhdGljIGxvb3BSZXBsYWNlQmFyKHNlbGVjdG9yKSB7XG4gICAgaWYgKCQoJChzZWxlY3RvcilbMF0pLnRleHQoKS5yZXBsYWNlKC9cXHMrL2csIFwiXCIpID09PSBCYXIudHh0KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGlzU3RvcCA9IHNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmICgkKCQoc2VsZWN0b3IpWzBdKS50ZXh0KCkucmVwbGFjZSgvXFxzKy9nLCBcIlwiKSA9PT0gQmFyLnR4dCkge1xuICAgICAgICBjbGVhckludGVydmFsKGlzU3RvcCk7XG4gICAgICB9XG4gICAgICBCYXIucmVwbGFjZUJhcihzZWxlY3Rvcik7XG4gICAgfSwgMTAwMCk7XG4gIH1cblxuICBwcml2YXRlIHN0YXRpYyByZXBsYWNlQmFyKHNlbGVjdG9yKSB7XG4gICAgY29uc3QgYmFyU2VsZWN0b3IgPSAnLmNzdl9iYXInLCBiYXJVbFNlbGVjdG9yID0gYmFyU2VsZWN0b3IgKyAnIC5jc3ZfYmFyX3VsJztcblxuICAgICQoc2VsZWN0b3IpLmNzcyh7J21pbkhlaWdodCc6ICc0MHB4J30pO1xuICAgICQoc2VsZWN0b3IpLmh0bWwoYFxuICAgIDxkaXYgY2xhc3M9XCJjc3ZfYmFyXCI+XG4gICAgICA8dWwgY2xhc3M9J2Nzdl9iYXJfdWwnPjxsaT7lr4zlvLo8L2xpPjxsaT7msJHkuLs8L2xpPjxsaT7mlofmmI48L2xpPjxsaT7lkozosJA8L2xpPjxsaT7oh6rnlLE8L2xpPjxsaT7lubPnrYk8L2xpPjxsaT7lhazmraM8L2xpPjxsaT7ms5Xmsrs8L2xpPjxsaT7niLHlm708L2xpPjxsaT7mlazkuJo8L2xpPjxsaT7or5rkv6E8L2xpPjxsaT7lj4vlloQ8L2xpPjwvdWw+PGJyPlxuICAgICAgPHVsIGNsYXNzPSdjc3ZfYmFyX3VsJz48bGk+UHJvc3Blcml0eTwvbGk+PGxpPkRlbW9jcmFjeTwvbGk+PGxpPkNpdmlsaXR5PC9saT48bGk+SGFybW9ueTwvbGk+PGxpPkZyZWVkb208L2xpPjxsaT5FcXVhbGl0eTwvbGk+PGxpPkp1c3RpY2U8L2xpPjxsaT5SdWxlIG9mIGxhdzwvbGk+PGxpPlBhdHJpb3Rpc208L2xpPjxsaT5EZWRpY2F0aW9uPC9saT48bGk+SW50ZWdyaXR5PC9saT48bGk+RnJpZW5kc2hpcDwvbGk+XG4gICAgICA8L3VsPlxuICAgIDwvZGl2PmApO1xuXG4gICAgLy8g6YG/5YWN5Ye6546w5aSa5Liq5a+86Ie05qC35byP5re75Yqg5aSx6LSlXG4gICAgY29uc3QgJGJhciA9ICQoYmFyU2VsZWN0b3IpO1xuICAgIGlmICgkYmFyLmxlbmd0aCA9PSAyKSB7XG4gICAgICAkYmFyLmVxKDApLnJlbW92ZSgpO1xuICAgIH1cblxuICAgICQoYmFyVWxTZWxlY3RvcikuY3NzKHsnZGlzcGxheSc6ICdpbmxpbmUtYmxvY2snLCAnbGlzdFN0eWxlJzogJ25vbmUnLCAnbWFyZ2luJzogMCwgJ3BhZGRpbmcnOiAwLCAnd2lkdGgnOiAnYXV0byd9KTtcbiAgICAkKGJhclVsU2VsZWN0b3IgKyAnIGxpJykuY3NzKHsnY29sb3InOiAnI0RFMjkxMCcsICdmb250V2VpZ2h0JzogJ2JvbGQnLCAnZm9udEZhbWlseSc6ICdLYWlUaScsICdmbG9hdCc6ICdsZWZ0JywgJ3BhZGRpbmdSaWdodCc6ICcxMHB4JywgJ21pbi13aWR0aCc6ICc4MHB4JywgJ3RleHRBbGlnbic6ICdjZW50ZXInfSk7XG4gICAgJChiYXJVbFNlbGVjdG9yICsgJzpmaXJzdCcpLmNzcygndmVydGljYWxBbGlnbicsICdib3R0b20nKTtcbiAgICAkKGJhclVsU2VsZWN0b3IgKyAnOmZpcnN0IGxpJykuY3NzKCdmb250U2l6ZScsICcxOHB4Jyk7XG4gICAgJChiYXJVbFNlbGVjdG9yICsgJzplcSgxKSBsaScpLmNzcygnZm9udFNpemUnLCAnMTNweCcpO1xuICB9XG59XG4iLCJpbXBvcnQgQmFyIGZyb20gXCIuLi9jb21tb24vQmFyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlYWN0IHtcblxuICBwcml2YXRlIHN0YXRpYyBzZWxlY3RvcnMgPSB7XG4gICAgYmFyOiAnLmNzcy1scGl5Y3YnLFxuICAgIG9ic2VydmluZ0JhcjogJyNnYXRzYnktZm9jdXMtd3JhcHBlcicsXG4gIH1cblxuICBzdGF0aWMgcmVwbGFjZSgpIHtcbiAgICBpZiAobG9jYXRpb24uaG9zdCA9PT0gJ3JlYWN0anMub3JnJykge1xuICAgICAgQmFyLnJlcGxhY2UodGhpcy5zZWxlY3RvcnMuYmFyLCB0aGlzLnNlbGVjdG9ycy5vYnNlcnZpbmdCYXIpO1xuICAgIH1cbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQW5ndWxhciB7XG5cbiAgcHJpdmF0ZSBzdGF0aWMgc2VsZWN0b3JzID0ge1xuICAgIGJhcjogJy5tYXQtdG9vbGJhci1yb3cubm90aWZpY2F0aW9uLWNvbnRhaW5lcicsXG4gICAgZGlzbWlzc05vdGlmaWNhdGlvbkJ0bjogJ2J1dHRvblthcmlhLWxhYmVsPVwiRGlzbWlzcyBub3RpZmljYXRpb25cIl0nLFxuICB9XG5cbiAgc3RhdGljIHJlcGxhY2UoKSB7XG4gICAgaWYgKGxvY2F0aW9uLmhvc3QgPT09ICdhbmd1bGFyLmlvJykge1xuICAgICAgLy8g5LiN5a2Y5Zyo5piv5ZCm5YWz6Zet6YCa55+l55qE5pys5Zyw5a2Y5YKo5pe2XG4gICAgICBpZiAoIWxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhaW8tbm90aWZpY2F0aW9uL3dhci11a3JhaW5lJykpIHtcbiAgICAgICAgLy8g5aaC5p6c6YCa55+l5Lit5a2Y5Zyo5YWz6ZSu6K+NXG4gICAgICAgIGNvbnN0ICRiYXIgPSAkKHRoaXMuc2VsZWN0b3JzLmJhcik7XG4gICAgICAgIGlmICgkYmFyLmxlbmd0aCA+IDAgJiYgJGJhci50ZXh0KCkudG9Mb3dlckNhc2UoKS5pbmRleE9mKCd1a3JhaW5lJykgIT0gLTEpIHtcbiAgICAgICAgICAvLyDngrnlh7vlhbPpl63pgJrnn6VcbiAgICAgICAgICAkKHRoaXMuc2VsZWN0b3JzLmRpc21pc3NOb3RpZmljYXRpb25CdG4pWzBdLmNsaWNrKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn0iLCJpbXBvcnQgQmFyIGZyb20gXCIuLi9jb21tb24vQmFyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvZGVjZXB0IHtcblxuICBzdGF0aWMgc2VsZWN0b3JzID0ge1xuICAgIGJhcjogJy5zdWItYmFyIC5tZXNzYWdlJyxcbiAgICBvYnNlcnZpbmdCYXI6ICcjYXBwJ1xuICB9XG5cbiAgc3RhdGljIHJlcGxhY2UoKSB7XG4gICAgaWYgKGxvY2F0aW9uLmhvc3QgPT09ICdjb2RlY2VwdC5pbycpIHtcbiAgICAgIEJhci5yZXBsYWNlKHRoaXMuc2VsZWN0b3JzLmJhciwgbnVsbCk7XG4gICAgfVxuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBHaXRodWIge1xuXG4gIHN0YXRpYyBzZWxlY3RvcnMgPSB7XG4gICAgbm90aWNlOiAnLmJvcmRlci5qcy1ub3RpY2UnXG4gIH1cblxuICBzdGF0aWMgcmVwbGFjZSgpIHtcbiAgICBpZiAobG9jYXRpb24uaHJlZiA9PT0gJ2h0dHBzOi8vZ2l0aHViLmNvbS8nKSB7XG4gICAgICBjb25zdCAkbm90aWNlID0gJCh0aGlzLnNlbGVjdG9ycy5ub3RpY2UpO1xuICAgICAgaWYgKCRub3RpY2UubGVuZ3RoID4gMCAmJiAkbm90aWNlLnRleHQoKS50b0xvd2VyQ2FzZSgpLmluZGV4T2YoJ3VrcmFpbmUnKSAhPSAtMSkge1xuICAgICAgICAkbm90aWNlLnJlbW92ZSgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IEJhciBmcm9tIFwiLi4vY29tbW9uL0JhclwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb2RlY2VwdCB7XG5cbiAgc3RhdGljIHNlbGVjdG9ycyA9IHtcbiAgICBiYXI6ICcudG9wLWJhcicsXG4gICAgb2JzZXJ2aW5nQmFyOiAnLm5nLXN0YXItaW5zZXJ0ZWQnXG4gIH1cblxuICBzdGF0aWMgcmVwbGFjZSgpIHtcbiAgICBpZiAobG9jYXRpb24uaG9zdCA9PT0gJ2RvY3MubmVzdGpzLmNvbScpIHtcbiAgICAgIEJhci5yZXBsYWNlKHRoaXMuc2VsZWN0b3JzLmJhciwgbnVsbCk7XG4gICAgICAkKHRoaXMuc2VsZWN0b3JzLmJhcikuY3NzKCdwYWRkaW5nJywgJzAnKTtcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCBCYXIgZnJvbSBcIi4uL2NvbW1vbi9CYXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRW1iZXIge1xuXG4gIHN0YXRpYyBzZWxlY3RvcnMgPSB7XG4gICAgYmFyOiAnLmNhbGxvdXQtYmFubmVyJyxcbiAgfVxuXG4gIHN0YXRpYyByZXBsYWNlKCkge1xuICAgIGlmIChsb2NhdGlvbi5ob3N0ID09PSAnZW1iZXJqcy5jb20nKSB7XG4gICAgICBCYXIucmVwbGFjZSh0aGlzLnNlbGVjdG9ycy5iYXIsIG51bGwpO1xuICAgICAgJCh0aGlzLnNlbGVjdG9ycy5iYXIpLmNzcyh7J2JhY2tncm91bmRDb2xvcic6ICcjMWMxZTI0JywgJ3BhZGRpbmcnOiAwfSk7XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgQmFyIGZyb20gXCIuLi9jb21tb24vQmFyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVsZWN0cm9uIHtcblxuICBzdGF0aWMgc2VsZWN0b3JzID0ge1xuICAgIGJhcjogJy5hbm5vdW5jZW1lbnQtYmFubmVyJyxcbiAgfVxuXG4gIHN0YXRpYyByZXBsYWNlKCkge1xuICAgIGlmIChsb2NhdGlvbi5ob3N0ID09PSAnd3d3LmVsZWN0cm9uanMub3JnJykge1xuICAgICAgQmFyLnJlcGxhY2UodGhpcy5zZWxlY3RvcnMuYmFyLCBudWxsKTtcbiAgICAgICQodGhpcy5zZWxlY3RvcnMuYmFyKS5jc3MoeydwYWRkaW5nJzogMH0pO1xuICAgIH1cbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQW5ndWxhciB7XG5cbiAgc3RhdGljIHNlbGVjdG9ycyA9IHtcbiAgICBsb2dvOiAnaW1nW3NyYz1cIi9pbWFnZXMvbG9nb3MvamVua2lucy9KZW5raW5zLXN0b3AtdGhlLXdhci5zdmdcIl0nLFxuICAgIHBhZ2VUaXRsZTogJy5wYWdlLXRpdGxlJ1xuICB9XG5cbiAgc3RhdGljIHJlcGxhY2UoKSB7XG4gICAgaWYgKGxvY2F0aW9uLmhvc3QgPT09ICd3d3cuamVua2lucy5pbycpIHtcbiAgICAgIC8vIOabv+aNouWbvuagh1xuICAgICAgJCh0aGlzLnNlbGVjdG9ycy5sb2dvKS5yZXBsYWNlV2l0aChgPGltZyBzcmM9XCIvaW1hZ2VzL2xvZ29zL2plbmtpbnMvSmVua2lucy5zdmdcIj5gKTtcblxuICAgICAgLy8g5Yig6Zmk6YCa55+lXG4gICAgICAkKHRoaXMuc2VsZWN0b3JzLnBhZ2VUaXRsZSkubmV4dEFsbChcInBcIikuZWFjaCgoaSwgZWwpID0+IHtcbiAgICAgICAgY29uc3QgJGVsID0gJChlbCk7XG4gICAgICAgIGlmICgkZWwudGV4dCgpLnRvTG93ZXJDYXNlKCkuaW5kZXhPZigndWtyYWluZScpICE9IC0xKSB7XG4gICAgICAgICAgJGVsLnJlbW92ZSgpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgICQodGhpcy5zZWxlY3RvcnMucGFnZVRpdGxlKS5wYXJlbnQoKS5hcHBlbmQoJzxicj48YnI+PGJyPicpO1xuICAgIH1cbiAgfVxufVxuIiwiLy8g5pu/5o2i5ZCO55qE5p2h5bmF5Y676Zmk56m65qC85o2i6KGM5ZCO55qE5paH5pysXG5pbXBvcnQgSnVuaXQgZnJvbSBcIi4vanVuaXQvSnVuaXRcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwiLi9yZWFjdC9SZWFjdFwiO1xuaW1wb3J0IEFuZ3VsYXIgZnJvbSBcIi4vYW5ndWxhci9Bbmd1bGFyXCI7XG5pbXBvcnQgQ29kZWNlcHQgZnJvbSBcIi4vY29kZWNlcHQvQ29kZWNlcHRcIjtcbmltcG9ydCBHaXRodWIgZnJvbSBcIi4vZ2l0aHViL0dpdGh1YlwiO1xuaW1wb3J0IE5lc3QgZnJvbSBcIi4vbmVzdC9OZXN0XCI7XG5pbXBvcnQgRW1iZXIgZnJvbSBcIi4vZW1iZXIvRW1iZXJcIjtcbmltcG9ydCBFbGVjdHJvbiBmcm9tIFwiLi9lbGVjdHJvbi9FbGVjdHJvblwiO1xuaW1wb3J0IEplbmtpbnMgZnJvbSBcIi4vamVua2lucy9KZW5raW5zXCI7XG5cbigoKSA9PiB7XG4gICd1c2Ugc3RyaWN0JztcblxuICBSZWFjdC5yZXBsYWNlKCk7XG4gIEFuZ3VsYXIucmVwbGFjZSgpO1xuICBKdW5pdC5yZXBsYWNlKCk7XG4gIENvZGVjZXB0LnJlcGxhY2UoKTtcbiAgR2l0aHViLnJlcGxhY2UoKTtcbiAgTmVzdC5yZXBsYWNlKCk7XG4gIEVtYmVyLnJlcGxhY2UoKTtcbiAgRWxlY3Ryb24ucmVwbGFjZSgpO1xuICBKZW5raW5zLnJlcGxhY2UoKTtcbn0pKCk7XG4vL1xuLy8gPT1Vc2VyU2NyaXB0PT1cbi8vIEBuYW1lICAgICAgICAg56S+5Lya5Li75LmJ5qC45b+D5Lu35YC86KeC77yIQ29yZSBTb2NpYWxpc3QgVmFsdWVz77yJXG4vLyBAbmFtZXNwYWNlICAgIGh0dHA6Ly90YW1wZXJtb25rZXkubmV0L1xuLy8gQHZlcnNpb24gICAgICAwLjguMlxuLy8gQGRlc2NyaXB0aW9uICDmm7/mjaLmlL/msrvnm7jlhbPmnaHluYXkuLrnpL7kvJrkuLvkuYnmoLjlv4Pku7flgLzop4LvvIzmm7/mjaLmlL/msrvnm7jlhbMgTG9nbyDpopzoibLkuLrkuK3lm73nuqLvvIzljrvpmaTmlL/msrvnm7jlhbPpgJrnn6XvvIzorqnmioDmnK/ov5znprvmlL/msrvjgIJcbi8vIEBhdXRob3IgICAgICAgZHVhbmx1YW5cbi8vIEBjb3B5cmlnaHQgICAgMjAyMiwgZHVhbmx1YW4gKGh0dHBzOi8vZ2l0aHViLmNvbS9kdWFubHVhbilcbi8vIEBsaWNlbnNlICAgICAgQXBhY2hlLTIuMDsgaHR0cHM6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMC50eHRcbi8vIEBtYXRjaCAgICAgICAgKjovL3JlYWN0anMub3JnLypcbi8vIEBtYXRjaCAgICAgICAgKjovL2FuZ3VsYXIuaW8vKlxuLy8gQG1hdGNoICAgICAgICAqOi8vanVuaXQub3JnLypcbi8vIEBtYXRjaCAgICAgICAgKjovL2NvZGVjZXB0LmlvLypcbi8vIEBtYXRjaCAgICAgICAgKjovL2dpdGh1Yi5jb20vKlxuLy8gQG1hdGNoICAgICAgICAqOi8vZG9jcy5uZXN0anMuY29tLypcbi8vIEBtYXRjaCAgICAgICAgKjovL2VtYmVyanMuY29tLypcbi8vIEBtYXRjaCAgICAgICAgKjovL3d3dy5lbGVjdHJvbmpzLm9yZy8qXG4vLyBAbWF0Y2ggICAgICAgICo6Ly93d3cuamVua2lucy5pby8qXG4vLyBAcmVxdWlyZSAgICAgIGh0dHBzOi8vY2RuLmJvb3RjZG4ubmV0L2FqYXgvbGlicy9qcXVlcnkvMy42LjAvanF1ZXJ5LnNsaW0ubWluLmpzXG4vLyBAZ3JhbnQgICAgICAgIG5vbmVcbi8vID09L1VzZXJTY3JpcHQ9PVxuXG4vLyA9PU9wZW5Vc2VySlM9PVxuLy8gQGF1dGhvciBkdWFubHVhblxuLy8gPT0vT3BlblVzZXJKUz09XG4iXSwibmFtZXMiOlsiSnVuaXQiLCJsb2NhdGlvbiIsImhyZWYiLCIkIiwic2VsZWN0b3JzIiwianVuaXRBYm91dCIsInByZXZBbGwiLCJyZW1vdmUiLCJqdW5pdExvZ28iLCJhdHRyIiwianVuaXRMb2dvVXJsIiwianVuaXRGYXZpY29uIiwicmVhY3RCYXIiLCJjb2RlY2VwdEJhciIsIkJhciIsInNlbGVjdG9yIiwib2JzZXJ2aW5nU2VsZWN0b3IiLCJ0ZXh0IiwibWF0Y2giLCJsb29wUmVwbGFjZUJhciIsIk11dGF0aW9uT2JzZXJ2ZXIiLCJtdXRhdGlvbnMiLCJvYnNlcnZlciIsIm9ic2VydmUiLCJjaGlsZExpc3QiLCJyZXBsYWNlIiwidHh0IiwiaXNTdG9wIiwic2V0SW50ZXJ2YWwiLCJjbGVhckludGVydmFsIiwicmVwbGFjZUJhciIsImJhclNlbGVjdG9yIiwiYmFyVWxTZWxlY3RvciIsImNzcyIsImh0bWwiLCIkYmFyIiwibGVuZ3RoIiwiZXEiLCJSZWFjdCIsImhvc3QiLCJiYXIiLCJvYnNlcnZpbmdCYXIiLCJBbmd1bGFyIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInRvTG93ZXJDYXNlIiwiaW5kZXhPZiIsImRpc21pc3NOb3RpZmljYXRpb25CdG4iLCJjbGljayIsIkNvZGVjZXB0IiwiR2l0aHViIiwiJG5vdGljZSIsIm5vdGljZSIsIkVtYmVyIiwiRWxlY3Ryb24iLCJsb2dvIiwicmVwbGFjZVdpdGgiLCJwYWdlVGl0bGUiLCJuZXh0QWxsIiwiZWFjaCIsImkiLCJlbCIsIiRlbCIsInBhcmVudCIsImFwcGVuZCIsIk5lc3QiLCJKZW5raW5zIl0sInNvdXJjZVJvb3QiOiIifQ==