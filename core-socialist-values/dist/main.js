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

_defineProperty(Junit, "junitLogoUrl", 'https://raw.githubusercontent.com/duanluan/tampermonkey-scripts/main/core-socialist-values/src/junit/imgs/junit5-logo-csv.png');


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
})(); // ==UserScript==
// @name         社会主义核心价值观（Core Socialist Values）
// @namespace    http://tampermonkey.net/
// @version      0.8.1
// @description  替换政治相关条幅为社会主义核心价值观，替换政治相关 Logo 颜色为中国红，去除政治相关通知，让技术远离政治。
// @author       duanluan
// @license      Apache 2.0
// @match        *://reactjs.org/*
// @match        *://angular.io/*
// @match        *://junit.org/*
// @match        *://codecept.io/*
// @match        *://github.com/*
// @match        *://docs.nestjs.com/*
// @match        *://emberjs.com/*
// @match        *://www.electronjs.org/*
// @match        *://www.jenkins.io/*
// @icon         <$ICON$>
// @require      https://cdn.bootcdn.net/ajax/libs/jquery/3.6.0/jquery.slim.min.js
// @grant        none
// ==/UserScript==
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90YW1wZXJtb25rZXktc2NyaXB0LXV0aWxzLy4vY29yZS1zb2NpYWxpc3QtdmFsdWVzL3NyYy9qdW5pdC9KdW5pdC50cyIsIndlYnBhY2s6Ly90YW1wZXJtb25rZXktc2NyaXB0LXV0aWxzLy4vY29yZS1zb2NpYWxpc3QtdmFsdWVzL3NyYy9jb21tb24vQmFyLnRzIiwid2VicGFjazovL3RhbXBlcm1vbmtleS1zY3JpcHQtdXRpbHMvLi9jb3JlLXNvY2lhbGlzdC12YWx1ZXMvc3JjL3JlYWN0L1JlYWN0LnRzIiwid2VicGFjazovL3RhbXBlcm1vbmtleS1zY3JpcHQtdXRpbHMvLi9jb3JlLXNvY2lhbGlzdC12YWx1ZXMvc3JjL2FuZ3VsYXIvQW5ndWxhci50cyIsIndlYnBhY2s6Ly90YW1wZXJtb25rZXktc2NyaXB0LXV0aWxzLy4vY29yZS1zb2NpYWxpc3QtdmFsdWVzL3NyYy9jb2RlY2VwdC9Db2RlY2VwdC50cyIsIndlYnBhY2s6Ly90YW1wZXJtb25rZXktc2NyaXB0LXV0aWxzLy4vY29yZS1zb2NpYWxpc3QtdmFsdWVzL3NyYy9naXRodWIvR2l0aHViLnRzIiwid2VicGFjazovL3RhbXBlcm1vbmtleS1zY3JpcHQtdXRpbHMvLi9jb3JlLXNvY2lhbGlzdC12YWx1ZXMvc3JjL25lc3QvTmVzdC50cyIsIndlYnBhY2s6Ly90YW1wZXJtb25rZXktc2NyaXB0LXV0aWxzLy4vY29yZS1zb2NpYWxpc3QtdmFsdWVzL3NyYy9lbWJlci9FbWJlci50cyIsIndlYnBhY2s6Ly90YW1wZXJtb25rZXktc2NyaXB0LXV0aWxzLy4vY29yZS1zb2NpYWxpc3QtdmFsdWVzL3NyYy9lbGVjdHJvbi9FbGVjdHJvbi50cyIsIndlYnBhY2s6Ly90YW1wZXJtb25rZXktc2NyaXB0LXV0aWxzLy4vY29yZS1zb2NpYWxpc3QtdmFsdWVzL3NyYy9qZW5raW5zL0plbmtpbnMudHMiLCJ3ZWJwYWNrOi8vdGFtcGVybW9ua2V5LXNjcmlwdC11dGlscy8uL2NvcmUtc29jaWFsaXN0LXZhbHVlcy9zcmMvbWFpbi50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBKdW5pdCB7XG5cbiAgcHJpdmF0ZSBzdGF0aWMgc2VsZWN0b3JzID0ge1xuICAgIHJlYWN0QmFyOiAnLmNzcy1scGl5Y3YnLFxuICAgIGp1bml0QWJvdXQ6ICcjYWJvdXQnLFxuICAgIGp1bml0TG9nbzogJ2ltZ1tzcmM9XCIvanVuaXQ1L2Fzc2V0cy9pbWcvanVuaXQ1LWxvZ28ucG5nXCJdJyxcbiAgICBqdW5pdEZhdmljb246ICdsaW5rW3JlbD1cImljb25cIl0nLFxuICAgIGNvZGVjZXB0QmFyOiAnLnN1Yi1iYXIgLm1lc3NhZ2UnLFxuICB9XG5cbiAgcHJpdmF0ZSBzdGF0aWMganVuaXRMb2dvVXJsID0gJ2h0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9kdWFubHVhbi90YW1wZXJtb25rZXktc2NyaXB0cy9tYWluL2NvcmUtc29jaWFsaXN0LXZhbHVlcy9zcmMvanVuaXQvaW1ncy9qdW5pdDUtbG9nby1jc3YucG5nJ1xuXG4gIHN0YXRpYyByZXBsYWNlKCkge1xuICAgIGlmIChsb2NhdGlvbi5ocmVmID09PSAnaHR0cHM6Ly9qdW5pdC5vcmcvanVuaXQ1LycpIHtcbiAgICAgICQodGhpcy5zZWxlY3RvcnMuanVuaXRBYm91dCkucHJldkFsbCgpLnJlbW92ZSgpO1xuICAgICAgJCh0aGlzLnNlbGVjdG9ycy5qdW5pdExvZ28pLmF0dHIoJ3NyYycsIHRoaXMuanVuaXRMb2dvVXJsKTtcbiAgICAgICQodGhpcy5zZWxlY3RvcnMuanVuaXRGYXZpY29uKS5hdHRyKCdocmVmJywgdGhpcy5qdW5pdExvZ29VcmwpO1xuICAgIH1cbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmFyIHtcblxuICAvKipcbiAgICog5pu/5o2i5p2h5bmFXG4gICAqIEBwYXJhbSBzZWxlY3RvciDmnaHluYXpgInmi6nlmahcbiAgICogQHBhcmFtIG9ic2VydmluZ1NlbGVjdG9yIOWPmOWMlumAieaLqeWZqFxuICAgKi9cbiAgc3RhdGljIHJlcGxhY2Uoc2VsZWN0b3IsIG9ic2VydmluZ1NlbGVjdG9yKSB7XG4gICAgaWYgKCEkKHNlbGVjdG9yKS50ZXh0KCkubWF0Y2goL3VrcmFpbmV85LmM5YWL5YWwfGJsYWNrfOm7keS6ui9pKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBCYXIubG9vcFJlcGxhY2VCYXIoc2VsZWN0b3IpO1xuICAgIGlmIChvYnNlcnZpbmdTZWxlY3Rvcikge1xuICAgICAgLy8g55uR5ZCs5p2h5bmF5Y+Y5YyW77yM5Y+Y5YyW5ZCO5YaN5qyh5omn6KGMXG4gICAgICBuZXcgTXV0YXRpb25PYnNlcnZlcigobXV0YXRpb25zOiBNdXRhdGlvblJlY29yZFtdLCBvYnNlcnZlcjogTXV0YXRpb25PYnNlcnZlcikgPT4ge1xuICAgICAgICBCYXIubG9vcFJlcGxhY2VCYXIoc2VsZWN0b3IpO1xuICAgICAgfSkub2JzZXJ2ZSgkKG9ic2VydmluZ1NlbGVjdG9yKVswXSwge2NoaWxkTGlzdDogdHJ1ZX0pXG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBzdGF0aWMgdHh0ID0gJ+WvjOW8uuawkeS4u+aWh+aYjuWSjOiwkOiHqueUseW5s+etieWFrOato+azleayu+eIseWbveaVrOS4muivmuS/oeWPi+WWhFByb3NwZXJpdHlEZW1vY3JhY3lDaXZpbGl0eUhhcm1vbnlGcmVlZG9tRXF1YWxpdHlKdXN0aWNlUnVsZW9mbGF3UGF0cmlvdGlzbURlZGljYXRpb25JbnRlZ3JpdHlGcmllbmRzaGlwJztcblxuICAvLyDlvqrnjq/mm7/mjaLmnaHluYVcbiAgcHJpdmF0ZSBzdGF0aWMgbG9vcFJlcGxhY2VCYXIoc2VsZWN0b3IpIHtcbiAgICBpZiAoJCgkKHNlbGVjdG9yKVswXSkudGV4dCgpLnJlcGxhY2UoL1xccysvZywgXCJcIikgPT09IEJhci50eHQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgaXNTdG9wID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKCQoJChzZWxlY3RvcilbMF0pLnRleHQoKS5yZXBsYWNlKC9cXHMrL2csIFwiXCIpID09PSBCYXIudHh0KSB7XG4gICAgICAgIGNsZWFySW50ZXJ2YWwoaXNTdG9wKTtcbiAgICAgIH1cbiAgICAgIEJhci5yZXBsYWNlQmFyKHNlbGVjdG9yKTtcbiAgICB9LCAxMDAwKTtcbiAgfVxuXG4gIHByaXZhdGUgc3RhdGljIHJlcGxhY2VCYXIoc2VsZWN0b3IpIHtcbiAgICBjb25zdCBiYXJTZWxlY3RvciA9ICcuY3N2X2JhcicsIGJhclVsU2VsZWN0b3IgPSBiYXJTZWxlY3RvciArICcgLmNzdl9iYXJfdWwnO1xuXG4gICAgJChzZWxlY3RvcikuY3NzKHsnbWluSGVpZ2h0JzogJzQwcHgnfSk7XG4gICAgJChzZWxlY3RvcikuaHRtbChgXG4gICAgPGRpdiBjbGFzcz1cImNzdl9iYXJcIj5cbiAgICAgIDx1bCBjbGFzcz0nY3N2X2Jhcl91bCc+PGxpPuWvjOW8ujwvbGk+PGxpPuawkeS4uzwvbGk+PGxpPuaWh+aYjjwvbGk+PGxpPuWSjOiwkDwvbGk+PGxpPuiHqueUsTwvbGk+PGxpPuW5s+etiTwvbGk+PGxpPuWFrOatozwvbGk+PGxpPuazleayuzwvbGk+PGxpPueIseWbvTwvbGk+PGxpPuaVrOS4mjwvbGk+PGxpPuivmuS/oTwvbGk+PGxpPuWPi+WWhDwvbGk+PC91bD48YnI+XG4gICAgICA8dWwgY2xhc3M9J2Nzdl9iYXJfdWwnPjxsaT5Qcm9zcGVyaXR5PC9saT48bGk+RGVtb2NyYWN5PC9saT48bGk+Q2l2aWxpdHk8L2xpPjxsaT5IYXJtb255PC9saT48bGk+RnJlZWRvbTwvbGk+PGxpPkVxdWFsaXR5PC9saT48bGk+SnVzdGljZTwvbGk+PGxpPlJ1bGUgb2YgbGF3PC9saT48bGk+UGF0cmlvdGlzbTwvbGk+PGxpPkRlZGljYXRpb248L2xpPjxsaT5JbnRlZ3JpdHk8L2xpPjxsaT5GcmllbmRzaGlwPC9saT5cbiAgICAgIDwvdWw+XG4gICAgPC9kaXY+YCk7XG5cbiAgICAvLyDpgb/lhY3lh7rnjrDlpJrkuKrlr7zoh7TmoLflvI/mt7vliqDlpLHotKVcbiAgICBjb25zdCAkYmFyID0gJChiYXJTZWxlY3Rvcik7XG4gICAgaWYgKCRiYXIubGVuZ3RoID09IDIpIHtcbiAgICAgICRiYXIuZXEoMCkucmVtb3ZlKCk7XG4gICAgfVxuXG4gICAgJChiYXJVbFNlbGVjdG9yKS5jc3MoeydkaXNwbGF5JzogJ2lubGluZS1ibG9jaycsICdsaXN0U3R5bGUnOiAnbm9uZScsICdtYXJnaW4nOiAwLCAncGFkZGluZyc6IDAsICd3aWR0aCc6ICdhdXRvJ30pO1xuICAgICQoYmFyVWxTZWxlY3RvciArICcgbGknKS5jc3Moeydjb2xvcic6ICcjREUyOTEwJywgJ2ZvbnRXZWlnaHQnOiAnYm9sZCcsICdmb250RmFtaWx5JzogJ0thaVRpJywgJ2Zsb2F0JzogJ2xlZnQnLCAncGFkZGluZ1JpZ2h0JzogJzEwcHgnLCAnbWluLXdpZHRoJzogJzgwcHgnLCAndGV4dEFsaWduJzogJ2NlbnRlcid9KTtcbiAgICAkKGJhclVsU2VsZWN0b3IgKyAnOmZpcnN0JykuY3NzKCd2ZXJ0aWNhbEFsaWduJywgJ2JvdHRvbScpO1xuICAgICQoYmFyVWxTZWxlY3RvciArICc6Zmlyc3QgbGknKS5jc3MoJ2ZvbnRTaXplJywgJzE4cHgnKTtcbiAgICAkKGJhclVsU2VsZWN0b3IgKyAnOmVxKDEpIGxpJykuY3NzKCdmb250U2l6ZScsICcxM3B4Jyk7XG4gIH1cbn1cbiIsImltcG9ydCBCYXIgZnJvbSBcIi4uL2NvbW1vbi9CYXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVhY3Qge1xuXG4gIHByaXZhdGUgc3RhdGljIHNlbGVjdG9ycyA9IHtcbiAgICBiYXI6ICcuY3NzLWxwaXljdicsXG4gICAgb2JzZXJ2aW5nQmFyOiAnI2dhdHNieS1mb2N1cy13cmFwcGVyJyxcbiAgfVxuXG4gIHN0YXRpYyByZXBsYWNlKCkge1xuICAgIGlmIChsb2NhdGlvbi5ob3N0ID09PSAncmVhY3Rqcy5vcmcnKSB7XG4gICAgICBCYXIucmVwbGFjZSh0aGlzLnNlbGVjdG9ycy5iYXIsIHRoaXMuc2VsZWN0b3JzLm9ic2VydmluZ0Jhcik7XG4gICAgfVxuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBBbmd1bGFyIHtcblxuICBwcml2YXRlIHN0YXRpYyBzZWxlY3RvcnMgPSB7XG4gICAgYmFyOiAnLm1hdC10b29sYmFyLXJvdy5ub3RpZmljYXRpb24tY29udGFpbmVyJyxcbiAgICBkaXNtaXNzTm90aWZpY2F0aW9uQnRuOiAnYnV0dG9uW2FyaWEtbGFiZWw9XCJEaXNtaXNzIG5vdGlmaWNhdGlvblwiXScsXG4gIH1cblxuICBzdGF0aWMgcmVwbGFjZSgpIHtcbiAgICBpZiAobG9jYXRpb24uaG9zdCA9PT0gJ2FuZ3VsYXIuaW8nKSB7XG4gICAgICAvLyDkuI3lrZjlnKjmmK/lkKblhbPpl63pgJrnn6XnmoTmnKzlnLDlrZjlgqjml7ZcbiAgICAgIGlmICghbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2Fpby1ub3RpZmljYXRpb24vd2FyLXVrcmFpbmUnKSkge1xuICAgICAgICAvLyDlpoLmnpzpgJrnn6XkuK3lrZjlnKjlhbPplK7or41cbiAgICAgICAgY29uc3QgJGJhciA9ICQodGhpcy5zZWxlY3RvcnMuYmFyKTtcbiAgICAgICAgaWYgKCRiYXIubGVuZ3RoID4gMCAmJiAkYmFyLnRleHQoKS50b0xvd2VyQ2FzZSgpLmluZGV4T2YoJ3VrcmFpbmUnKSAhPSAtMSkge1xuICAgICAgICAgIC8vIOeCueWHu+WFs+mXremAmuefpVxuICAgICAgICAgICQodGhpcy5zZWxlY3RvcnMuZGlzbWlzc05vdGlmaWNhdGlvbkJ0bilbMF0uY2xpY2soKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufSIsImltcG9ydCBCYXIgZnJvbSBcIi4uL2NvbW1vbi9CYXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29kZWNlcHQge1xuXG4gIHN0YXRpYyBzZWxlY3RvcnMgPSB7XG4gICAgYmFyOiAnLnN1Yi1iYXIgLm1lc3NhZ2UnLFxuICAgIG9ic2VydmluZ0JhcjogJyNhcHAnXG4gIH1cblxuICBzdGF0aWMgcmVwbGFjZSgpIHtcbiAgICBpZiAobG9jYXRpb24uaG9zdCA9PT0gJ2NvZGVjZXB0LmlvJykge1xuICAgICAgQmFyLnJlcGxhY2UodGhpcy5zZWxlY3RvcnMuYmFyLCBudWxsKTtcbiAgICB9XG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEdpdGh1YiB7XG5cbiAgc3RhdGljIHNlbGVjdG9ycyA9IHtcbiAgICBub3RpY2U6ICcuYm9yZGVyLmpzLW5vdGljZSdcbiAgfVxuXG4gIHN0YXRpYyByZXBsYWNlKCkge1xuICAgIGlmIChsb2NhdGlvbi5ocmVmID09PSAnaHR0cHM6Ly9naXRodWIuY29tLycpIHtcbiAgICAgIGNvbnN0ICRub3RpY2UgPSAkKHRoaXMuc2VsZWN0b3JzLm5vdGljZSk7XG4gICAgICBpZiAoJG5vdGljZS5sZW5ndGggPiAwICYmICRub3RpY2UudGV4dCgpLnRvTG93ZXJDYXNlKCkuaW5kZXhPZigndWtyYWluZScpICE9IC0xKSB7XG4gICAgICAgICRub3RpY2UucmVtb3ZlKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgQmFyIGZyb20gXCIuLi9jb21tb24vQmFyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvZGVjZXB0IHtcblxuICBzdGF0aWMgc2VsZWN0b3JzID0ge1xuICAgIGJhcjogJy50b3AtYmFyJyxcbiAgICBvYnNlcnZpbmdCYXI6ICcubmctc3Rhci1pbnNlcnRlZCdcbiAgfVxuXG4gIHN0YXRpYyByZXBsYWNlKCkge1xuICAgIGlmIChsb2NhdGlvbi5ob3N0ID09PSAnZG9jcy5uZXN0anMuY29tJykge1xuICAgICAgQmFyLnJlcGxhY2UodGhpcy5zZWxlY3RvcnMuYmFyLCBudWxsKTtcbiAgICAgICQodGhpcy5zZWxlY3RvcnMuYmFyKS5jc3MoJ3BhZGRpbmcnLCAnMCcpO1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IEJhciBmcm9tIFwiLi4vY29tbW9uL0JhclwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFbWJlciB7XG5cbiAgc3RhdGljIHNlbGVjdG9ycyA9IHtcbiAgICBiYXI6ICcuY2FsbG91dC1iYW5uZXInLFxuICB9XG5cbiAgc3RhdGljIHJlcGxhY2UoKSB7XG4gICAgaWYgKGxvY2F0aW9uLmhvc3QgPT09ICdlbWJlcmpzLmNvbScpIHtcbiAgICAgIEJhci5yZXBsYWNlKHRoaXMuc2VsZWN0b3JzLmJhciwgbnVsbCk7XG4gICAgICAkKHRoaXMuc2VsZWN0b3JzLmJhcikuY3NzKHsnYmFja2dyb3VuZENvbG9yJzogJyMxYzFlMjQnLCAncGFkZGluZyc6IDB9KTtcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCBCYXIgZnJvbSBcIi4uL2NvbW1vbi9CYXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRWxlY3Ryb24ge1xuXG4gIHN0YXRpYyBzZWxlY3RvcnMgPSB7XG4gICAgYmFyOiAnLmFubm91bmNlbWVudC1iYW5uZXInLFxuICB9XG5cbiAgc3RhdGljIHJlcGxhY2UoKSB7XG4gICAgaWYgKGxvY2F0aW9uLmhvc3QgPT09ICd3d3cuZWxlY3Ryb25qcy5vcmcnKSB7XG4gICAgICBCYXIucmVwbGFjZSh0aGlzLnNlbGVjdG9ycy5iYXIsIG51bGwpO1xuICAgICAgJCh0aGlzLnNlbGVjdG9ycy5iYXIpLmNzcyh7J3BhZGRpbmcnOiAwfSk7XG4gICAgfVxuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBBbmd1bGFyIHtcblxuICBzdGF0aWMgc2VsZWN0b3JzID0ge1xuICAgIGxvZ286ICdpbWdbc3JjPVwiL2ltYWdlcy9sb2dvcy9qZW5raW5zL0plbmtpbnMtc3RvcC10aGUtd2FyLnN2Z1wiXScsXG4gICAgcGFnZVRpdGxlOiAnLnBhZ2UtdGl0bGUnXG4gIH1cblxuICBzdGF0aWMgcmVwbGFjZSgpIHtcbiAgICBpZiAobG9jYXRpb24uaG9zdCA9PT0gJ3d3dy5qZW5raW5zLmlvJykge1xuICAgICAgLy8g5pu/5o2i5Zu+5qCHXG4gICAgICAkKHRoaXMuc2VsZWN0b3JzLmxvZ28pLnJlcGxhY2VXaXRoKGA8aW1nIHNyYz1cIi9pbWFnZXMvbG9nb3MvamVua2lucy9KZW5raW5zLnN2Z1wiPmApO1xuXG4gICAgICAvLyDliKDpmaTpgJrnn6VcbiAgICAgICQodGhpcy5zZWxlY3RvcnMucGFnZVRpdGxlKS5uZXh0QWxsKFwicFwiKS5lYWNoKChpLCBlbCkgPT4ge1xuICAgICAgICBjb25zdCAkZWwgPSAkKGVsKTtcbiAgICAgICAgaWYgKCRlbC50ZXh0KCkudG9Mb3dlckNhc2UoKS5pbmRleE9mKCd1a3JhaW5lJykgIT0gLTEpIHtcbiAgICAgICAgICAkZWwucmVtb3ZlKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgJCh0aGlzLnNlbGVjdG9ycy5wYWdlVGl0bGUpLnBhcmVudCgpLmFwcGVuZCgnPGJyPjxicj48YnI+Jyk7XG4gICAgfVxuICB9XG59XG4iLCIvLyDmm7/mjaLlkI7nmoTmnaHluYXljrvpmaTnqbrmoLzmjaLooYzlkI7nmoTmlofmnKxcbmltcG9ydCBKdW5pdCBmcm9tIFwiLi9qdW5pdC9KdW5pdFwiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCIuL3JlYWN0L1JlYWN0XCI7XG5pbXBvcnQgQW5ndWxhciBmcm9tIFwiLi9hbmd1bGFyL0FuZ3VsYXJcIjtcbmltcG9ydCBDb2RlY2VwdCBmcm9tIFwiLi9jb2RlY2VwdC9Db2RlY2VwdFwiO1xuaW1wb3J0IEdpdGh1YiBmcm9tIFwiLi9naXRodWIvR2l0aHViXCI7XG5pbXBvcnQgTmVzdCBmcm9tIFwiLi9uZXN0L05lc3RcIjtcbmltcG9ydCBFbWJlciBmcm9tIFwiLi9lbWJlci9FbWJlclwiO1xuaW1wb3J0IEVsZWN0cm9uIGZyb20gXCIuL2VsZWN0cm9uL0VsZWN0cm9uXCI7XG5pbXBvcnQgSmVua2lucyBmcm9tIFwiLi9qZW5raW5zL0plbmtpbnNcIjtcblxuKCgpID0+IHtcbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIFJlYWN0LnJlcGxhY2UoKTtcbiAgQW5ndWxhci5yZXBsYWNlKCk7XG4gIEp1bml0LnJlcGxhY2UoKTtcbiAgQ29kZWNlcHQucmVwbGFjZSgpO1xuICBHaXRodWIucmVwbGFjZSgpO1xuICBOZXN0LnJlcGxhY2UoKTtcbiAgRW1iZXIucmVwbGFjZSgpO1xuICBFbGVjdHJvbi5yZXBsYWNlKCk7XG4gIEplbmtpbnMucmVwbGFjZSgpO1xufSkoKTtcblxuLy8gPT1Vc2VyU2NyaXB0PT1cbi8vIEBuYW1lICAgICAgICAg56S+5Lya5Li75LmJ5qC45b+D5Lu35YC86KeC77yIQ29yZSBTb2NpYWxpc3QgVmFsdWVz77yJXG4vLyBAbmFtZXNwYWNlICAgIGh0dHA6Ly90YW1wZXJtb25rZXkubmV0L1xuLy8gQHZlcnNpb24gICAgICAwLjguMVxuLy8gQGRlc2NyaXB0aW9uICDmm7/mjaLmlL/msrvnm7jlhbPmnaHluYXkuLrnpL7kvJrkuLvkuYnmoLjlv4Pku7flgLzop4LvvIzmm7/mjaLmlL/msrvnm7jlhbMgTG9nbyDpopzoibLkuLrkuK3lm73nuqLvvIzljrvpmaTmlL/msrvnm7jlhbPpgJrnn6XvvIzorqnmioDmnK/ov5znprvmlL/msrvjgIJcbi8vIEBhdXRob3IgICAgICAgZHVhbmx1YW5cbi8vIEBsaWNlbnNlICAgICAgQXBhY2hlIDIuMFxuLy8gQG1hdGNoICAgICAgICAqOi8vcmVhY3Rqcy5vcmcvKlxuLy8gQG1hdGNoICAgICAgICAqOi8vYW5ndWxhci5pby8qXG4vLyBAbWF0Y2ggICAgICAgICo6Ly9qdW5pdC5vcmcvKlxuLy8gQG1hdGNoICAgICAgICAqOi8vY29kZWNlcHQuaW8vKlxuLy8gQG1hdGNoICAgICAgICAqOi8vZ2l0aHViLmNvbS8qXG4vLyBAbWF0Y2ggICAgICAgICo6Ly9kb2NzLm5lc3Rqcy5jb20vKlxuLy8gQG1hdGNoICAgICAgICAqOi8vZW1iZXJqcy5jb20vKlxuLy8gQG1hdGNoICAgICAgICAqOi8vd3d3LmVsZWN0cm9uanMub3JnLypcbi8vIEBtYXRjaCAgICAgICAgKjovL3d3dy5qZW5raW5zLmlvLypcbi8vIEBpY29uICAgICAgICAgPCRJQ09OJD5cbi8vIEByZXF1aXJlICAgICAgaHR0cHM6Ly9jZG4uYm9vdGNkbi5uZXQvYWpheC9saWJzL2pxdWVyeS8zLjYuMC9qcXVlcnkuc2xpbS5taW4uanNcbi8vIEBncmFudCAgICAgICAgbm9uZVxuLy8gPT0vVXNlclNjcmlwdD09XG4iXSwibmFtZXMiOlsiSnVuaXQiLCJsb2NhdGlvbiIsImhyZWYiLCIkIiwic2VsZWN0b3JzIiwianVuaXRBYm91dCIsInByZXZBbGwiLCJyZW1vdmUiLCJqdW5pdExvZ28iLCJhdHRyIiwianVuaXRMb2dvVXJsIiwianVuaXRGYXZpY29uIiwicmVhY3RCYXIiLCJjb2RlY2VwdEJhciIsIkJhciIsInNlbGVjdG9yIiwib2JzZXJ2aW5nU2VsZWN0b3IiLCJ0ZXh0IiwibWF0Y2giLCJsb29wUmVwbGFjZUJhciIsIk11dGF0aW9uT2JzZXJ2ZXIiLCJtdXRhdGlvbnMiLCJvYnNlcnZlciIsIm9ic2VydmUiLCJjaGlsZExpc3QiLCJyZXBsYWNlIiwidHh0IiwiaXNTdG9wIiwic2V0SW50ZXJ2YWwiLCJjbGVhckludGVydmFsIiwicmVwbGFjZUJhciIsImJhclNlbGVjdG9yIiwiYmFyVWxTZWxlY3RvciIsImNzcyIsImh0bWwiLCIkYmFyIiwibGVuZ3RoIiwiZXEiLCJSZWFjdCIsImhvc3QiLCJiYXIiLCJvYnNlcnZpbmdCYXIiLCJBbmd1bGFyIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInRvTG93ZXJDYXNlIiwiaW5kZXhPZiIsImRpc21pc3NOb3RpZmljYXRpb25CdG4iLCJjbGljayIsIkNvZGVjZXB0IiwiR2l0aHViIiwiJG5vdGljZSIsIm5vdGljZSIsIkVtYmVyIiwiRWxlY3Ryb24iLCJsb2dvIiwicmVwbGFjZVdpdGgiLCJwYWdlVGl0bGUiLCJuZXh0QWxsIiwiZWFjaCIsImkiLCJlbCIsIiRlbCIsInBhcmVudCIsImFwcGVuZCIsIk5lc3QiLCJKZW5raW5zIl0sInNvdXJjZVJvb3QiOiIifQ==