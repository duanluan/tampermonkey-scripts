/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./core-socialist-values/src/websites/junit/Junit.ts
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


;// CONCATENATED MODULE: ./utils/src/gm/Store.ts
function Store_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Store_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Store_createClass(Constructor, protoProps, staticProps) { if (protoProps) Store_defineProperties(Constructor.prototype, protoProps); if (staticProps) Store_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * 存储
 */
var Store = /*#__PURE__*/function () {
  function Store() {
    Store_classCallCheck(this, Store);
  }

  Store_createClass(Store, null, [{
    key: "get",
    value:
    /**
     * 获取
     * @param key 键
     */
    function get(key) {
      // @ts-ignore
      return GM_getValue(key);
    }
    /**
     * 设置
     * @param key 键
     * @param value 值
     */

  }, {
    key: "set",
    value: function set(key, value) {
      // @ts-ignore
      GM_setValue(key, value);
    }
  }]);

  return Store;
}();


;// CONCATENATED MODULE: ./core-socialist-values/src/common/Options.ts
function Options_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Options_createClass(Constructor, protoProps, staticProps) { if (protoProps) Options_defineProperties(Constructor.prototype, protoProps); if (staticProps) Options_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function Options_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Options_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Options = /*#__PURE__*/Options_createClass(function Options() {
  Options_classCallCheck(this, Options);
});

Options_defineProperty(Options, "Keys", {
  removeBar: 'removeBar'
});


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
     * @param options {
     *  barSelector: string,              // 条幅选择器
     *  isObserveBar: boolean,            // 是否监听条幅变化
     *  hideBarSelector: string,          // 隐藏条幅选择器
     *  isObserveHideBar: boolean,        // 是否监听隐藏条幅变化
     *  followUpObserveSelector?: string, // 后续监听选择器
     *  replaceCallback?: Function        // 替换后回调
     * }
     */
    function replace(options) {
      var _this = this;

      if (!$(options.barSelector).text().match(/ukraine|乌克兰|black|黑人/i)) {
        return;
      } // 如果移除横幅


      if (Store.get(Options.Keys.removeBar)) {
        // 隐藏横幅
        $(options.hideBarSelector).hide();

        if (options.isObserveHideBar) {
          var _i = 0; // 隐藏条幅首次加载：监听条幅变化，变化后再次执行

          var _observer = new MutationObserver(function () {
            $(options.hideBarSelector).hide(); // 替换两次后结束监听

            if (_i >= 1) {
              _observer.disconnect();
            }

            _i++;
          });

          _observer.observe($(options.hideBarSelector)[0], {
            childList: true,
            subtree: true
          });
        }

        return;
      } // 首次替换横幅


      this.replaceBar(options.barSelector, options.replaceCallback);
      console.log('replaceBar');

      if (!options.isObserveBar) {
        return;
      }

      var i = 0; // 条幅首次加载：监听条幅变化，变化后再次执行

      var observer = new MutationObserver(function () {
        _this.replaceBar(options.barSelector, options.replaceCallback); // 替换两次后结束监听


        if (i >= 1) {
          observer.disconnect();
        }

        i++;
      });
      observer.observe($(options.barSelector)[0], {
        childList: true
      });

      if (options.followUpObserveSelector) {
        // 后续变化
        new MutationObserver(function () {
          _this.replaceBar(options.barSelector, options.replaceCallback);
        }).observe($(options.followUpObserveSelector)[0], {
          childList: true
        });
      }
    }
    /**
     * 替换后的条幅去除空格换行后的文本
     * @private
     */

  }, {
    key: "replaceBar",
    value: function replaceBar(selector, replaceCallback) {
      if ($($(selector)[0]).text().replace(/\s+/g, "") === Bar.txt) {
        return;
      }

      $(selector).css({
        'minHeight': '40px'
      });
      $(selector).html("\n    <div class=\"csv_bar\">\n      <ul class='csv_bar_ul'><li>\u5BCC\u5F3A</li><li>\u6C11\u4E3B</li><li>\u6587\u660E</li><li>\u548C\u8C10</li><li>\u81EA\u7531</li><li>\u5E73\u7B49</li><li>\u516C\u6B63</li><li>\u6CD5\u6CBB</li><li>\u7231\u56FD</li><li>\u656C\u4E1A</li><li>\u8BDA\u4FE1</li><li>\u53CB\u5584</li></ul><br>\n      <ul class='csv_bar_ul'><li>Prosperity</li><li>Democracy</li><li>Civility</li><li>Harmony</li><li>Freedom</li><li>Equality</li><li>Justice</li><li>Rule of law</li><li>Patriotism</li><li>Dedication</li><li>Integrity</li><li>Friendship</li>\n      </ul>\n    </div>"); // 避免出现多个导致样式添加失败

      var $bar = $(this.replaceSelector.bar);

      if ($bar.length == 2) {
        $bar.eq(0).remove();
      }

      var barUlSelector = this.replaceSelector.barUl;
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

      if (replaceCallback) {
        replaceCallback();
      }
    }
  }]);

  return Bar;
}();

Bar_defineProperty(Bar, "txt", '富强民主文明和谐自由平等公正法治爱国敬业诚信友善ProsperityDemocracyCivilityHarmonyFreedomEqualityJusticeRuleoflawPatriotismDedicationIntegrityFriendship');

Bar_defineProperty(Bar, "replaceSelector", {
  bar: '.csv_bar',
  barUl: '.csv_bar .csv_bar_ul'
});


;// CONCATENATED MODULE: ./core-socialist-values/src/websites/react/React.ts
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
        Bar.replace({
          barSelector: this.selectors.bar,
          isObserveBar: true,
          hideBarSelector: this.selectors.hideBar,
          isObserveHideBar: false,
          followUpObserveSelector: this.selectors.followUpObserveElement
        });
      }
    }
  }]);

  return React;
}();

React_defineProperty(React, "selectors", {
  bar: '.css-lpiycv',
  hideBar: '.css-1loxuh3',
  followUpObserveElement: '#gatsby-focus-wrapper'
});


;// CONCATENATED MODULE: ./core-socialist-values/src/websites/angular/Angular.ts
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


;// CONCATENATED MODULE: ./core-socialist-values/src/websites/codecept/Codecept.ts
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
        Bar.replace({
          barSelector: this.selectors.bar,
          isObserveBar: false,
          hideBarSelector: this.selectors.hideBar,
          isObserveHideBar: false
        });
      }
    }
  }]);

  return Codecept;
}();

Codecept_defineProperty(Codecept, "selectors", {
  bar: '.sub-bar .message',
  hideBar: '.sub-bar'
});


;// CONCATENATED MODULE: ./core-socialist-values/src/websites/github/Github.ts
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


;// CONCATENATED MODULE: ./core-socialist-values/src/websites/nest/Nest.ts
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
        Bar.replace({
          barSelector: this.selectors.bar,
          isObserveBar: false,
          hideBarSelector: this.selectors.bar,
          isObserveHideBar: false
        });
        $(this.selectors.bar).css('padding', '0');
      }
    }
  }]);

  return Codecept;
}();

Nest_defineProperty(Nest_Codecept, "selectors", {
  bar: '.top-bar'
});


;// CONCATENATED MODULE: ./core-socialist-values/src/websites/ember/Ember.ts
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
        Bar.replace({
          barSelector: this.selectors.bar,
          isObserveBar: false,
          hideBarSelector: this.selectors.bar,
          isObserveHideBar: false
        });
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


;// CONCATENATED MODULE: ./core-socialist-values/src/websites/electron/Electron.ts
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
        Bar.replace({
          barSelector: this.selectors.bar,
          isObserveBar: false,
          hideBarSelector: this.selectors.bar,
          isObserveHideBar: false,
          replaceCallback: function replaceCallback() {
            $(Bar.replaceSelector.barUl + ':eq(0)').css('height', '25px');
            $(Bar.replaceSelector.barUl + ':eq(1)').css('height', '20px');
          }
        });
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


;// CONCATENATED MODULE: ./core-socialist-values/src/websites/jenkins/Jenkins.ts
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


;// CONCATENATED MODULE: ./core-socialist-values/src/websites/svelte/Svelte.ts
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

      if (location.host === 'svelte.dev') {
        var $navSpot = $(this.selectors.navSpot);
        var i = 0; // 监听条幅变化，变化后再次执行

        var observer = new MutationObserver(function () {
          if ($navSpot.length > 0) {
            // 替换 Logo
            $navSpot.attr('style', _this.svelteLogoStyle); // 替换两次后结束监听

            if (i >= 1) {
              observer.disconnect();
            }

            i++;
          }
        });
        observer.observe($(this.selectors.observing)[0], {
          childList: true
        }); // 底部横幅

        Bar.replace({
          barSelector: this.selectors.bar,
          isObserveBar: true,
          hideBarSelector: this.selectors.bar,
          isObserveHideBar: true,
          replaceCallback: function replaceCallback() {
            $(_this.selectors.bar).css({
              'backgroundColor': '#1c1e24',
              'paddingTop': '20px'
            });
          }
        });
      }
    }
  }]);

  return Svelte;
}();

Svelte_defineProperty(Svelte, "selectors", {
  navSpot: '.nav-spot',
  bar: '.ukr',
  barHeight: ':root',
  barHeightAttrName: '--ukr-footer-height',
  observing: '#main'
});

Svelte_defineProperty(Svelte, "svelteLogoStyle", 'background-image: url(https://svelte.dev/svelte-logo-horizontal.svg)');


;// CONCATENATED MODULE: ./utils/src/gm/MenuCmd.ts
function MenuCmd_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function MenuCmd_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function MenuCmd_createClass(Constructor, protoProps, staticProps) { if (protoProps) MenuCmd_defineProperties(Constructor.prototype, protoProps); if (staticProps) MenuCmd_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * 设置菜单
 */
var MenuCmd = /*#__PURE__*/function () {
  function MenuCmd() {
    MenuCmd_classCallCheck(this, MenuCmd);
  }

  MenuCmd_createClass(MenuCmd, null, [{
    key: "register",
    value:
    /**
     * 注册
     * @param name 名称
     * @param fn 点击菜单时执行的函数
     */
    function register(name, fn) {
      // @ts-ignore
      return GM_registerMenuCommand(name, fn);
    }
    /**
     * 注销
     * @param menuCmdId 注册时返回的 ID
     */

  }, {
    key: "unregister",
    value: function unregister(menuCmdId) {
      // @ts-ignore
      GM_unregisterMenuCommand(menuCmdId);
    }
  }]);

  return MenuCmd;
}();


;// CONCATENATED MODULE: ./core-socialist-values/src/websites/sveltematerialui/SvelteMaterialUi.ts
function SvelteMaterialUi_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function SvelteMaterialUi_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function SvelteMaterialUi_createClass(Constructor, protoProps, staticProps) { if (protoProps) SvelteMaterialUi_defineProperties(Constructor.prototype, protoProps); if (staticProps) SvelteMaterialUi_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function SvelteMaterialUi_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var SvelteMaterialUi = /*#__PURE__*/function () {
  function SvelteMaterialUi() {
    SvelteMaterialUi_classCallCheck(this, SvelteMaterialUi);
  }

  SvelteMaterialUi_createClass(SvelteMaterialUi, null, [{
    key: "replace",
    value: function replace() {
      if (location.host === 'sveltematerialui.com') {
        $(this.selectors.bar).attr('class', '');
      }
    }
  }]);

  return SvelteMaterialUi;
}();

SvelteMaterialUi_defineProperty(SvelteMaterialUi, "selectors", {
  bar: '.ukraine'
});


;// CONCATENATED MODULE: ./core-socialist-values/src/websites/syncthing/Syncthing.ts
function Syncthing_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Syncthing_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Syncthing_createClass(Constructor, protoProps, staticProps) { if (protoProps) Syncthing_defineProperties(Constructor.prototype, protoProps); if (staticProps) Syncthing_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function Syncthing_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var Syncthing = /*#__PURE__*/function () {
  function Syncthing() {
    Syncthing_classCallCheck(this, Syncthing);
  }

  Syncthing_createClass(Syncthing, null, [{
    key: "replace",
    value: function replace() {
      var _this = this;

      if (location.host === 'syncthing.net') {
        Bar.replace({
          barSelector: this.selectors.bar,
          isObserveBar: false,
          hideBarSelector: this.selectors.bar,
          isObserveHideBar: false,
          replaceCallback: function replaceCallback() {
            $(_this.selectors.bar).css('textAlign', 'center');
          }
        });
      }
    }
  }]);

  return Syncthing;
}();

Syncthing_defineProperty(Syncthing, "selectors", {
  bar: '.alert'
});


;// CONCATENATED MODULE: ./core-socialist-values/src/main.ts
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

// ==UserScript==
// @name         技术远离政治
// @namespace    http://tampermonkey.net/
// @version      1.2.0
// @description  移除政治相关条幅或替换为社会主义核心价值观，替换政治相关 Logo 为原版 Logo，去除政治相关通知，让技术远离政治。
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
// @require      https://cdn.bootcdn.net/ajax/libs/jquery/3.6.0/jquery.slim.min.js
// @grant        GM_getValue
// @grant        GM_setValue
// @grant        GM_registerMenuCommand
// @grant        GM_unregisterMenuCommand
// ==/UserScript==
// ==OpenUserJS==
// @author duanluan
// ==/OpenUserJS==
















(function () {
  'use strict';

  var options = [{
    label: '移除条幅',
    name: Options.Keys.removeBar,
    value: false
  }];

  function register(option) {
    var val = Store.get(option.name);
    var valIsBool = typeof val === 'boolean';
    var menuCmdId = MenuCmd.register((_typeof(valIsBool) ? val ? '☑️ ' : '🔲 ' : '') + option.label, function () {
      if (option.name === Options.Keys.removeBar) {
        Store.set(option.name, !val);
      } // 如果是布尔类型就重新注册选项


      if (valIsBool) {
        MenuCmd.unregister(menuCmdId);
        register(option);
      } // 刷新页面


      window.location.reload();
    });
  }

  for (var _i = 0, _options = options; _i < _options.length; _i++) {
    var option = _options[_i];

    // 存储选项默认值
    if (Store.get(option.name) === null) {
      Store.set(option.name, option.value);
    } // 注册选项


    var _iterator = _createForOfIteratorHelper(options),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var _option = _step.value;
        register(_option);
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  }

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
  SvelteMaterialUi.replace();
  Syncthing.replace();
})();
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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U0FBbkI7UUFDQU8sUUFBUSxDQUFDQyxNQUFELENBQVI7TUFDRCxDQVJzRyxDQVN2Rzs7O01BQ0FLLE1BQU0sQ0FBQ3ZHLFFBQVAsQ0FBZ0J3RyxNQUFoQjtJQUNELENBWGlCLENBQWxCO0VBWUQ7O0VBRUQsNEJBQXFCckYsT0FBckIsOEJBQThCO0lBQXpCLElBQU0rRSxNQUFNLGVBQVo7O0lBQ0g7SUFDQSxJQUFJdkYsU0FBQSxDQUFVdUYsTUFBTSxDQUFDWCxJQUFqQixNQUEyQixJQUEvQixFQUFxQztNQUNuQzVFLFNBQUEsQ0FBVXVGLE1BQU0sQ0FBQ1gsSUFBakIsRUFBdUJXLE1BQU0sQ0FBQ3BGLEtBQTlCO0lBQ0QsQ0FKMkIsQ0FLNUI7OztJQUw0QiwyQ0FNUEssT0FOTztJQUFBOztJQUFBO01BTTVCLG9EQUE4QjtRQUFBLElBQW5CK0UsT0FBbUI7UUFDNUJELFFBQVEsQ0FBQ0MsT0FBRCxDQUFSO01BQ0Q7SUFSMkI7TUFBQTtJQUFBO01BQUE7SUFBQTtFQVM3Qjs7RUFFRDdDLGFBQUE7RUFDQUksZUFBQTtFQUNBMUQsYUFBQTtFQUNBaUUsZ0JBQUE7RUFDQUMsY0FBQTtFQUNBNkIscUJBQUE7RUFDQTFCLGFBQUE7RUFDQUMsZ0JBQUE7RUFDQTBCLHVCQUFBO0VBQ0FoQixjQUFBO0VBQ0FhLHdCQUFBO0VBQ0FDLGlCQUFBO0FBQ0QsQ0E3Q0QsSSIsInNvdXJjZXMiOlsid2VicGFjazovL3RhbXBlcm1vbmtleS1zY3JpcHQtdXRpbHMvLi9jb3JlLXNvY2lhbGlzdC12YWx1ZXMvc3JjL3dlYnNpdGVzL2p1bml0L0p1bml0LnRzIiwid2VicGFjazovL3RhbXBlcm1vbmtleS1zY3JpcHQtdXRpbHMvLi91dGlscy9zcmMvZ20vU3RvcmUudHMiLCJ3ZWJwYWNrOi8vdGFtcGVybW9ua2V5LXNjcmlwdC11dGlscy8uL2NvcmUtc29jaWFsaXN0LXZhbHVlcy9zcmMvY29tbW9uL09wdGlvbnMudHMiLCJ3ZWJwYWNrOi8vdGFtcGVybW9ua2V5LXNjcmlwdC11dGlscy8uL2NvcmUtc29jaWFsaXN0LXZhbHVlcy9zcmMvY29tbW9uL0Jhci50cyIsIndlYnBhY2s6Ly90YW1wZXJtb25rZXktc2NyaXB0LXV0aWxzLy4vY29yZS1zb2NpYWxpc3QtdmFsdWVzL3NyYy93ZWJzaXRlcy9yZWFjdC9SZWFjdC50cyIsIndlYnBhY2s6Ly90YW1wZXJtb25rZXktc2NyaXB0LXV0aWxzLy4vY29yZS1zb2NpYWxpc3QtdmFsdWVzL3NyYy93ZWJzaXRlcy9hbmd1bGFyL0FuZ3VsYXIudHMiLCJ3ZWJwYWNrOi8vdGFtcGVybW9ua2V5LXNjcmlwdC11dGlscy8uL2NvcmUtc29jaWFsaXN0LXZhbHVlcy9zcmMvd2Vic2l0ZXMvY29kZWNlcHQvQ29kZWNlcHQudHMiLCJ3ZWJwYWNrOi8vdGFtcGVybW9ua2V5LXNjcmlwdC11dGlscy8uL2NvcmUtc29jaWFsaXN0LXZhbHVlcy9zcmMvd2Vic2l0ZXMvZ2l0aHViL0dpdGh1Yi50cyIsIndlYnBhY2s6Ly90YW1wZXJtb25rZXktc2NyaXB0LXV0aWxzLy4vY29yZS1zb2NpYWxpc3QtdmFsdWVzL3NyYy93ZWJzaXRlcy9uZXN0L05lc3QudHMiLCJ3ZWJwYWNrOi8vdGFtcGVybW9ua2V5LXNjcmlwdC11dGlscy8uL2NvcmUtc29jaWFsaXN0LXZhbHVlcy9zcmMvd2Vic2l0ZXMvZW1iZXIvRW1iZXIudHMiLCJ3ZWJwYWNrOi8vdGFtcGVybW9ua2V5LXNjcmlwdC11dGlscy8uL2NvcmUtc29jaWFsaXN0LXZhbHVlcy9zcmMvd2Vic2l0ZXMvZWxlY3Ryb24vRWxlY3Ryb24udHMiLCJ3ZWJwYWNrOi8vdGFtcGVybW9ua2V5LXNjcmlwdC11dGlscy8uL2NvcmUtc29jaWFsaXN0LXZhbHVlcy9zcmMvd2Vic2l0ZXMvamVua2lucy9KZW5raW5zLnRzIiwid2VicGFjazovL3RhbXBlcm1vbmtleS1zY3JpcHQtdXRpbHMvLi9jb3JlLXNvY2lhbGlzdC12YWx1ZXMvc3JjL3dlYnNpdGVzL3N2ZWx0ZS9TdmVsdGUudHMiLCJ3ZWJwYWNrOi8vdGFtcGVybW9ua2V5LXNjcmlwdC11dGlscy8uL3V0aWxzL3NyYy9nbS9NZW51Q21kLnRzIiwid2VicGFjazovL3RhbXBlcm1vbmtleS1zY3JpcHQtdXRpbHMvLi9jb3JlLXNvY2lhbGlzdC12YWx1ZXMvc3JjL3dlYnNpdGVzL3N2ZWx0ZW1hdGVyaWFsdWkvU3ZlbHRlTWF0ZXJpYWxVaS50cyIsIndlYnBhY2s6Ly90YW1wZXJtb25rZXktc2NyaXB0LXV0aWxzLy4vY29yZS1zb2NpYWxpc3QtdmFsdWVzL3NyYy93ZWJzaXRlcy9zeW5jdGhpbmcvU3luY3RoaW5nLnRzIiwid2VicGFjazovL3RhbXBlcm1vbmtleS1zY3JpcHQtdXRpbHMvLi9jb3JlLXNvY2lhbGlzdC12YWx1ZXMvc3JjL21haW4udHMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgSnVuaXQge1xuXG4gIHByaXZhdGUgc3RhdGljIHNlbGVjdG9ycyA9IHtcbiAgICBqdW5pdEFib3V0OiAnI2Fib3V0JyxcbiAgICBqdW5pdExvZ286ICdpbWdbc3JjPVwiL2p1bml0NS9hc3NldHMvaW1nL2p1bml0NS1sb2dvLnBuZ1wiXScsXG4gICAganVuaXRGYXZpY29uOiAnbGlua1tyZWw9XCJpY29uXCJdJyxcbiAgfVxuXG4gIHByaXZhdGUgc3RhdGljIGp1bml0TG9nb1VybCA9ICdodHRwczovL3Jhdy5pcWlxLmlvL2R1YW5sdWFuL3RhbXBlcm1vbmtleS1zY3JpcHRzL21haW4vY29yZS1zb2NpYWxpc3QtdmFsdWVzL3NyYy9qdW5pdC9pbWdzL2p1bml0NS1sb2dvLnBuZydcblxuICBzdGF0aWMgcmVwbGFjZSgpIHtcbiAgICBpZiAobG9jYXRpb24uaHJlZiA9PT0gJ2h0dHBzOi8vanVuaXQub3JnL2p1bml0NS8nKSB7XG4gICAgICAkKHRoaXMuc2VsZWN0b3JzLmp1bml0QWJvdXQpLnByZXZBbGwoKS5yZW1vdmUoKTtcbiAgICAgICQodGhpcy5zZWxlY3RvcnMuanVuaXRMb2dvKS5hdHRyKCdzcmMnLCB0aGlzLmp1bml0TG9nb1VybCk7XG4gICAgICAkKHRoaXMuc2VsZWN0b3JzLmp1bml0RmF2aWNvbikuYXR0cignaHJlZicsIHRoaXMuanVuaXRMb2dvVXJsKTtcbiAgICB9XG4gIH1cbn1cbiIsIi8qKlxuICog5a2Y5YKoXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0b3JlIHtcblxuICAvKipcbiAgICog6I635Y+WXG4gICAqIEBwYXJhbSBrZXkg6ZSuXG4gICAqL1xuICBzdGF0aWMgZ2V0KGtleTogc3RyaW5nKTogYW55IHtcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgcmV0dXJuIEdNX2dldFZhbHVlKGtleSk7XG4gIH1cblxuICAvKipcbiAgICog6K6+572uXG4gICAqIEBwYXJhbSBrZXkg6ZSuXG4gICAqIEBwYXJhbSB2YWx1ZSDlgLxcbiAgICovXG4gIHN0YXRpYyBzZXQoa2V5OiBzdHJpbmcsIHZhbHVlOiBhbnkpIHtcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgR01fc2V0VmFsdWUoa2V5LCB2YWx1ZSk7XG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIE9wdGlvbnMge1xuICBzdGF0aWMgS2V5cyA9IHtcbiAgICByZW1vdmVCYXI6ICdyZW1vdmVCYXInLFxuICB9XG59XG4iLCJpbXBvcnQgU3RvcmUgZnJvbSBcIi4uLy4uLy4uL3V0aWxzL3NyYy9nbS9TdG9yZVwiO1xuaW1wb3J0IE9wdGlvbnMgZnJvbSBcIi4vT3B0aW9uc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCYXIge1xuXG4gIC8qKlxuICAgKiDmm7/mjaLmnaHluYVcbiAgICogQHBhcmFtIG9wdGlvbnMge1xuICAgKiAgYmFyU2VsZWN0b3I6IHN0cmluZywgICAgICAgICAgICAgIC8vIOadoeW5hemAieaLqeWZqFxuICAgKiAgaXNPYnNlcnZlQmFyOiBib29sZWFuLCAgICAgICAgICAgIC8vIOaYr+WQpuebkeWQrOadoeW5heWPmOWMllxuICAgKiAgaGlkZUJhclNlbGVjdG9yOiBzdHJpbmcsICAgICAgICAgIC8vIOmakOiXj+adoeW5hemAieaLqeWZqFxuICAgKiAgaXNPYnNlcnZlSGlkZUJhcjogYm9vbGVhbiwgICAgICAgIC8vIOaYr+WQpuebkeWQrOmakOiXj+adoeW5heWPmOWMllxuICAgKiAgZm9sbG93VXBPYnNlcnZlU2VsZWN0b3I/OiBzdHJpbmcsIC8vIOWQjue7reebkeWQrOmAieaLqeWZqFxuICAgKiAgcmVwbGFjZUNhbGxiYWNrPzogRnVuY3Rpb24gICAgICAgIC8vIOabv+aNouWQjuWbnuiwg1xuICAgKiB9XG4gICAqL1xuICBzdGF0aWMgcmVwbGFjZShvcHRpb25zOiB7IGJhclNlbGVjdG9yOiBzdHJpbmcsIGlzT2JzZXJ2ZUJhcjogYm9vbGVhbiwgaGlkZUJhclNlbGVjdG9yOiBzdHJpbmcsIGlzT2JzZXJ2ZUhpZGVCYXI6IGJvb2xlYW4sIGZvbGxvd1VwT2JzZXJ2ZVNlbGVjdG9yPzogc3RyaW5nLCByZXBsYWNlQ2FsbGJhY2s/OiBGdW5jdGlvbiB9KSB7XG4gICAgaWYgKCEkKG9wdGlvbnMuYmFyU2VsZWN0b3IpLnRleHQoKS5tYXRjaCgvdWtyYWluZXzkuYzlhYvlhbB8YmxhY2t86buR5Lq6L2kpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIC8vIOWmguaenOenu+mZpOaoquW5hVxuICAgIGlmIChTdG9yZS5nZXQoT3B0aW9ucy5LZXlzLnJlbW92ZUJhcikpIHtcbiAgICAgIC8vIOmakOiXj+aoquW5hVxuICAgICAgJChvcHRpb25zLmhpZGVCYXJTZWxlY3RvcikuaGlkZSgpO1xuICAgICAgaWYgKG9wdGlvbnMuaXNPYnNlcnZlSGlkZUJhcikge1xuICAgICAgICBsZXQgaSA9IDA7XG4gICAgICAgIC8vIOmakOiXj+adoeW5hemmluasoeWKoOi9ve+8muebkeWQrOadoeW5heWPmOWMlu+8jOWPmOWMluWQjuWGjeasoeaJp+ihjFxuICAgICAgICBjb25zdCBvYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKCgpID0+IHtcbiAgICAgICAgICAkKG9wdGlvbnMuaGlkZUJhclNlbGVjdG9yKS5oaWRlKCk7XG4gICAgICAgICAgLy8g5pu/5o2i5Lik5qyh5ZCO57uT5p2f55uR5ZCsXG4gICAgICAgICAgaWYgKGkgPj0gMSkge1xuICAgICAgICAgICAgb2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpKys7XG4gICAgICAgIH0pO1xuICAgICAgICBvYnNlcnZlci5vYnNlcnZlKCQob3B0aW9ucy5oaWRlQmFyU2VsZWN0b3IpWzBdLCB7Y2hpbGRMaXN0OiB0cnVlLCBzdWJ0cmVlOiB0cnVlfSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyDpppbmrKHmm7/mjaLmqKrluYVcbiAgICB0aGlzLnJlcGxhY2VCYXIob3B0aW9ucy5iYXJTZWxlY3Rvciwgb3B0aW9ucy5yZXBsYWNlQ2FsbGJhY2spO1xuICAgIGNvbnNvbGUubG9nKCdyZXBsYWNlQmFyJyk7XG4gICAgaWYgKCFvcHRpb25zLmlzT2JzZXJ2ZUJhcikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBsZXQgaSA9IDA7XG4gICAgLy8g5p2h5bmF6aaW5qyh5Yqg6L2977ya55uR5ZCs5p2h5bmF5Y+Y5YyW77yM5Y+Y5YyW5ZCO5YaN5qyh5omn6KGMXG4gICAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcigoKSA9PiB7XG4gICAgICB0aGlzLnJlcGxhY2VCYXIob3B0aW9ucy5iYXJTZWxlY3Rvciwgb3B0aW9ucy5yZXBsYWNlQ2FsbGJhY2spO1xuICAgICAgLy8g5pu/5o2i5Lik5qyh5ZCO57uT5p2f55uR5ZCsXG4gICAgICBpZiAoaSA+PSAxKSB7XG4gICAgICAgIG9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcbiAgICAgIH1cbiAgICAgIGkrKztcbiAgICB9KTtcbiAgICBvYnNlcnZlci5vYnNlcnZlKCQob3B0aW9ucy5iYXJTZWxlY3RvcilbMF0sIHtjaGlsZExpc3Q6IHRydWV9KTtcblxuICAgIGlmIChvcHRpb25zLmZvbGxvd1VwT2JzZXJ2ZVNlbGVjdG9yKSB7XG4gICAgICAvLyDlkI7nu63lj5jljJZcbiAgICAgIG5ldyBNdXRhdGlvbk9ic2VydmVyKCgpID0+IHtcbiAgICAgICAgdGhpcy5yZXBsYWNlQmFyKG9wdGlvbnMuYmFyU2VsZWN0b3IsIG9wdGlvbnMucmVwbGFjZUNhbGxiYWNrKTtcbiAgICAgIH0pLm9ic2VydmUoJChvcHRpb25zLmZvbGxvd1VwT2JzZXJ2ZVNlbGVjdG9yKVswXSwge2NoaWxkTGlzdDogdHJ1ZX0pO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiDmm7/mjaLlkI7nmoTmnaHluYXljrvpmaTnqbrmoLzmjaLooYzlkI7nmoTmlofmnKxcbiAgICogQHByaXZhdGVcbiAgICovXG4gIHByaXZhdGUgc3RhdGljIHR4dCA9ICflr4zlvLrmsJHkuLvmlofmmI7lkozosJDoh6rnlLHlubPnrYnlhazmraPms5XmsrvniLHlm73mlazkuJror5rkv6Hlj4vlloRQcm9zcGVyaXR5RGVtb2NyYWN5Q2l2aWxpdHlIYXJtb255RnJlZWRvbUVxdWFsaXR5SnVzdGljZVJ1bGVvZmxhd1BhdHJpb3Rpc21EZWRpY2F0aW9uSW50ZWdyaXR5RnJpZW5kc2hpcCc7XG5cbiAgc3RhdGljIHJlcGxhY2VTZWxlY3RvciA9IHtcbiAgICBiYXI6ICcuY3N2X2JhcicsXG4gICAgYmFyVWw6ICcuY3N2X2JhciAuY3N2X2Jhcl91bCcsXG4gIH07XG5cbiAgcHJpdmF0ZSBzdGF0aWMgcmVwbGFjZUJhcihzZWxlY3Rvcjogc3RyaW5nLCByZXBsYWNlQ2FsbGJhY2s/OiBGdW5jdGlvbikge1xuICAgIGlmICgkKCQoc2VsZWN0b3IpWzBdKS50ZXh0KCkucmVwbGFjZSgvXFxzKy9nLCBcIlwiKSA9PT0gQmFyLnR4dCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgICQoc2VsZWN0b3IpLmNzcyh7J21pbkhlaWdodCc6ICc0MHB4J30pO1xuICAgICQoc2VsZWN0b3IpLmh0bWwoYFxuICAgIDxkaXYgY2xhc3M9XCJjc3ZfYmFyXCI+XG4gICAgICA8dWwgY2xhc3M9J2Nzdl9iYXJfdWwnPjxsaT7lr4zlvLo8L2xpPjxsaT7msJHkuLs8L2xpPjxsaT7mlofmmI48L2xpPjxsaT7lkozosJA8L2xpPjxsaT7oh6rnlLE8L2xpPjxsaT7lubPnrYk8L2xpPjxsaT7lhazmraM8L2xpPjxsaT7ms5Xmsrs8L2xpPjxsaT7niLHlm708L2xpPjxsaT7mlazkuJo8L2xpPjxsaT7or5rkv6E8L2xpPjxsaT7lj4vlloQ8L2xpPjwvdWw+PGJyPlxuICAgICAgPHVsIGNsYXNzPSdjc3ZfYmFyX3VsJz48bGk+UHJvc3Blcml0eTwvbGk+PGxpPkRlbW9jcmFjeTwvbGk+PGxpPkNpdmlsaXR5PC9saT48bGk+SGFybW9ueTwvbGk+PGxpPkZyZWVkb208L2xpPjxsaT5FcXVhbGl0eTwvbGk+PGxpPkp1c3RpY2U8L2xpPjxsaT5SdWxlIG9mIGxhdzwvbGk+PGxpPlBhdHJpb3Rpc208L2xpPjxsaT5EZWRpY2F0aW9uPC9saT48bGk+SW50ZWdyaXR5PC9saT48bGk+RnJpZW5kc2hpcDwvbGk+XG4gICAgICA8L3VsPlxuICAgIDwvZGl2PmApO1xuXG4gICAgLy8g6YG/5YWN5Ye6546w5aSa5Liq5a+86Ie05qC35byP5re75Yqg5aSx6LSlXG4gICAgY29uc3QgJGJhciA9ICQodGhpcy5yZXBsYWNlU2VsZWN0b3IuYmFyKTtcbiAgICBpZiAoJGJhci5sZW5ndGggPT0gMikge1xuICAgICAgJGJhci5lcSgwKS5yZW1vdmUoKTtcbiAgICB9XG5cbiAgICBjb25zdCBiYXJVbFNlbGVjdG9yID0gdGhpcy5yZXBsYWNlU2VsZWN0b3IuYmFyVWw7XG4gICAgJChiYXJVbFNlbGVjdG9yKS5jc3MoeydkaXNwbGF5JzogJ2lubGluZS1ibG9jaycsICdsaXN0U3R5bGUnOiAnbm9uZScsICdtYXJnaW4nOiAwLCAncGFkZGluZyc6IDAsICd3aWR0aCc6ICdhdXRvJ30pO1xuICAgICQoYmFyVWxTZWxlY3RvciArICcgbGknKS5jc3Moeydjb2xvcic6ICcjREUyOTEwJywgJ2ZvbnRXZWlnaHQnOiAnYm9sZCcsICdmb250RmFtaWx5JzogJ0thaVRpJywgJ2Zsb2F0JzogJ2xlZnQnLCAncGFkZGluZ1JpZ2h0JzogJzEwcHgnLCAnbWluLXdpZHRoJzogJzgwcHgnLCAndGV4dEFsaWduJzogJ2NlbnRlcid9KTtcbiAgICAkKGJhclVsU2VsZWN0b3IgKyAnOmZpcnN0JykuY3NzKCd2ZXJ0aWNhbEFsaWduJywgJ2JvdHRvbScpO1xuICAgICQoYmFyVWxTZWxlY3RvciArICc6Zmlyc3QgbGknKS5jc3MoJ2ZvbnRTaXplJywgJzE4cHgnKTtcbiAgICAkKGJhclVsU2VsZWN0b3IgKyAnOmVxKDEpIGxpJykuY3NzKCdmb250U2l6ZScsICcxM3B4Jyk7XG5cbiAgICBpZiAocmVwbGFjZUNhbGxiYWNrKSB7XG4gICAgICByZXBsYWNlQ2FsbGJhY2soKTtcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCBCYXIgZnJvbSBcIi4uLy4uL2NvbW1vbi9CYXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVhY3Qge1xuXG4gIHByaXZhdGUgc3RhdGljIHNlbGVjdG9ycyA9IHtcbiAgICBiYXI6ICcuY3NzLWxwaXljdicsXG4gICAgaGlkZUJhcjogJy5jc3MtMWxveHVoMycsXG4gICAgZm9sbG93VXBPYnNlcnZlRWxlbWVudDogJyNnYXRzYnktZm9jdXMtd3JhcHBlcicsXG4gIH1cblxuICBzdGF0aWMgcmVwbGFjZSgpIHtcbiAgICBpZiAobG9jYXRpb24uaG9zdCA9PT0gJ3JlYWN0anMub3JnJykge1xuICAgICAgQmFyLnJlcGxhY2Uoe2JhclNlbGVjdG9yOiB0aGlzLnNlbGVjdG9ycy5iYXIsIGlzT2JzZXJ2ZUJhcjogdHJ1ZSwgaGlkZUJhclNlbGVjdG9yOiB0aGlzLnNlbGVjdG9ycy5oaWRlQmFyLCBpc09ic2VydmVIaWRlQmFyOiBmYWxzZSwgZm9sbG93VXBPYnNlcnZlU2VsZWN0b3I6IHRoaXMuc2VsZWN0b3JzLmZvbGxvd1VwT2JzZXJ2ZUVsZW1lbnR9KTtcbiAgICB9XG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEFuZ3VsYXIge1xuXG4gIHByaXZhdGUgc3RhdGljIHNlbGVjdG9ycyA9IHtcbiAgICBiYXI6ICcubWF0LXRvb2xiYXItcm93Lm5vdGlmaWNhdGlvbi1jb250YWluZXInLFxuICAgIGRpc21pc3NOb3RpZmljYXRpb25CdG46ICdidXR0b25bYXJpYS1sYWJlbD1cIkRpc21pc3Mgbm90aWZpY2F0aW9uXCJdJyxcbiAgfVxuXG4gIHN0YXRpYyByZXBsYWNlKCkge1xuICAgIGlmIChsb2NhdGlvbi5ob3N0ID09PSAnYW5ndWxhci5pbycpIHtcbiAgICAgIC8vIOS4jeWtmOWcqOaYr+WQpuWFs+mXremAmuefpeeahOacrOWcsOWtmOWCqOaXtlxuICAgICAgaWYgKCFsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYWlvLW5vdGlmaWNhdGlvbi93YXItdWtyYWluZScpKSB7XG4gICAgICAgIC8vIOWmguaenOmAmuefpeS4reWtmOWcqOWFs+mUruivjVxuICAgICAgICBjb25zdCAkYmFyID0gJCh0aGlzLnNlbGVjdG9ycy5iYXIpO1xuICAgICAgICBpZiAoJGJhci5sZW5ndGggPiAwICYmICRiYXIudGV4dCgpLnRvTG93ZXJDYXNlKCkuaW5kZXhPZigndWtyYWluZScpICE9IC0xKSB7XG4gICAgICAgICAgLy8g54K55Ye75YWz6Zet6YCa55+lXG4gICAgICAgICAgJCh0aGlzLnNlbGVjdG9ycy5kaXNtaXNzTm90aWZpY2F0aW9uQnRuKVswXS5jbGljaygpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59IiwiaW1wb3J0IEJhciBmcm9tIFwiLi4vLi4vY29tbW9uL0JhclwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb2RlY2VwdCB7XG5cbiAgc3RhdGljIHNlbGVjdG9ycyA9IHtcbiAgICBiYXI6ICcuc3ViLWJhciAubWVzc2FnZScsXG4gICAgaGlkZUJhcjogJy5zdWItYmFyJyxcbiAgfVxuXG4gIHN0YXRpYyByZXBsYWNlKCkge1xuICAgIGlmIChsb2NhdGlvbi5ob3N0ID09PSAnY29kZWNlcHQuaW8nKSB7XG4gICAgICBCYXIucmVwbGFjZSh7YmFyU2VsZWN0b3I6IHRoaXMuc2VsZWN0b3JzLmJhciwgaXNPYnNlcnZlQmFyOiBmYWxzZSwgaGlkZUJhclNlbGVjdG9yOiB0aGlzLnNlbGVjdG9ycy5oaWRlQmFyLCBpc09ic2VydmVIaWRlQmFyOiBmYWxzZX0pO1xuICAgIH1cbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2l0aHViIHtcblxuICBzdGF0aWMgc2VsZWN0b3JzID0ge1xuICAgIG5vdGljZTogJy5ib3JkZXIuanMtbm90aWNlJ1xuICB9XG5cbiAgc3RhdGljIHJlcGxhY2UoKSB7XG4gICAgaWYgKGxvY2F0aW9uLmhyZWYgPT09ICdodHRwczovL2dpdGh1Yi5jb20vJykge1xuICAgICAgY29uc3QgJG5vdGljZSA9ICQodGhpcy5zZWxlY3RvcnMubm90aWNlKTtcbiAgICAgIGlmICgkbm90aWNlLmxlbmd0aCA+IDAgJiYgJG5vdGljZS50ZXh0KCkudG9Mb3dlckNhc2UoKS5pbmRleE9mKCd1a3JhaW5lJykgIT0gLTEpIHtcbiAgICAgICAgJG5vdGljZS5yZW1vdmUoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCBCYXIgZnJvbSBcIi4uLy4uL2NvbW1vbi9CYXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29kZWNlcHQge1xuXG4gIHN0YXRpYyBzZWxlY3RvcnMgPSB7XG4gICAgYmFyOiAnLnRvcC1iYXInLFxuICB9XG5cbiAgc3RhdGljIHJlcGxhY2UoKSB7XG4gICAgaWYgKGxvY2F0aW9uLmhvc3QgPT09ICdkb2NzLm5lc3Rqcy5jb20nKSB7XG4gICAgICBCYXIucmVwbGFjZSh7YmFyU2VsZWN0b3I6IHRoaXMuc2VsZWN0b3JzLmJhciwgaXNPYnNlcnZlQmFyOiBmYWxzZSwgaGlkZUJhclNlbGVjdG9yOiB0aGlzLnNlbGVjdG9ycy5iYXIsIGlzT2JzZXJ2ZUhpZGVCYXI6IGZhbHNlfSk7XG4gICAgICAkKHRoaXMuc2VsZWN0b3JzLmJhcikuY3NzKCdwYWRkaW5nJywgJzAnKTtcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCBCYXIgZnJvbSBcIi4uLy4uL2NvbW1vbi9CYXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRW1iZXIge1xuXG4gIHN0YXRpYyBzZWxlY3RvcnMgPSB7XG4gICAgYmFyOiAnLmNhbGxvdXQtYmFubmVyJyxcbiAgfVxuXG4gIHN0YXRpYyByZXBsYWNlKCkge1xuICAgIGlmIChsb2NhdGlvbi5ob3N0ID09PSAnZW1iZXJqcy5jb20nKSB7XG4gICAgICBCYXIucmVwbGFjZSh7YmFyU2VsZWN0b3I6IHRoaXMuc2VsZWN0b3JzLmJhciwgaXNPYnNlcnZlQmFyOiBmYWxzZSwgaGlkZUJhclNlbGVjdG9yOiB0aGlzLnNlbGVjdG9ycy5iYXIsIGlzT2JzZXJ2ZUhpZGVCYXI6IGZhbHNlfSk7XG4gICAgICAkKHRoaXMuc2VsZWN0b3JzLmJhcikuY3NzKHsnYmFja2dyb3VuZENvbG9yJzogJyMxYzFlMjQnLCAncGFkZGluZyc6IDB9KTtcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCBCYXIgZnJvbSBcIi4uLy4uL2NvbW1vbi9CYXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRWxlY3Ryb24ge1xuXG4gIHN0YXRpYyBzZWxlY3RvcnMgPSB7XG4gICAgYmFyOiAnLmFubm91bmNlbWVudC1iYW5uZXInLFxuICB9XG5cbiAgc3RhdGljIHJlcGxhY2UoKSB7XG4gICAgaWYgKGxvY2F0aW9uLmhvc3QgPT09ICd3d3cuZWxlY3Ryb25qcy5vcmcnKSB7XG4gICAgICBCYXIucmVwbGFjZSh7XG4gICAgICAgIGJhclNlbGVjdG9yOiB0aGlzLnNlbGVjdG9ycy5iYXIsIGlzT2JzZXJ2ZUJhcjogZmFsc2UsIGhpZGVCYXJTZWxlY3RvcjogdGhpcy5zZWxlY3RvcnMuYmFyLCBpc09ic2VydmVIaWRlQmFyOiBmYWxzZSwgcmVwbGFjZUNhbGxiYWNrOiAoKSA9PiB7XG4gICAgICAgICAgJChCYXIucmVwbGFjZVNlbGVjdG9yLmJhclVsICsgJzplcSgwKScpLmNzcygnaGVpZ2h0JywgJzI1cHgnKTtcbiAgICAgICAgICAkKEJhci5yZXBsYWNlU2VsZWN0b3IuYmFyVWwgKyAnOmVxKDEpJykuY3NzKCdoZWlnaHQnLCAnMjBweCcpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgICQodGhpcy5zZWxlY3RvcnMuYmFyKS5jc3MoeydwYWRkaW5nJzogMH0pO1xuICAgIH1cbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQW5ndWxhciB7XG5cbiAgc3RhdGljIHNlbGVjdG9ycyA9IHtcbiAgICBsb2dvOiAnaW1nW3NyYz1cIi9pbWFnZXMvbG9nb3MvamVua2lucy9KZW5raW5zLXN0b3AtdGhlLXdhci5zdmdcIl0nLFxuICAgIHBhZ2VUaXRsZTogJy5wYWdlLXRpdGxlJ1xuICB9XG5cbiAgc3RhdGljIHJlcGxhY2UoKSB7XG4gICAgaWYgKGxvY2F0aW9uLmhvc3QgPT09ICd3d3cuamVua2lucy5pbycpIHtcbiAgICAgIC8vIOabv+aNouWbvuagh1xuICAgICAgJCh0aGlzLnNlbGVjdG9ycy5sb2dvKS5yZXBsYWNlV2l0aChgPGltZyBzcmM9XCIvaW1hZ2VzL2xvZ29zL2plbmtpbnMvSmVua2lucy5zdmdcIj5gKTtcblxuICAgICAgLy8g5Yig6Zmk6YCa55+lXG4gICAgICAkKHRoaXMuc2VsZWN0b3JzLnBhZ2VUaXRsZSkubmV4dEFsbChcInBcIikuZWFjaCgoaSwgZWwpID0+IHtcbiAgICAgICAgY29uc3QgJGVsID0gJChlbCk7XG4gICAgICAgIGlmICgkZWwudGV4dCgpLnRvTG93ZXJDYXNlKCkuaW5kZXhPZigndWtyYWluZScpICE9IC0xKSB7XG4gICAgICAgICAgJGVsLnJlbW92ZSgpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgICQodGhpcy5zZWxlY3RvcnMucGFnZVRpdGxlKS5wYXJlbnQoKS5hcHBlbmQoJzxicj48YnI+PGJyPicpO1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IEJhciBmcm9tIFwiLi4vLi4vY29tbW9uL0JhclwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdmVsdGUge1xuXG4gIHByaXZhdGUgc3RhdGljIHNlbGVjdG9ycyA9IHtcbiAgICBuYXZTcG90OiAnLm5hdi1zcG90JyxcbiAgICBiYXI6ICcudWtyJyxcbiAgICBiYXJIZWlnaHQ6ICc6cm9vdCcsXG4gICAgYmFySGVpZ2h0QXR0ck5hbWU6ICctLXVrci1mb290ZXItaGVpZ2h0JyxcbiAgICBvYnNlcnZpbmc6ICcjbWFpbicsXG4gIH1cblxuICBwcml2YXRlIHN0YXRpYyBzdmVsdGVMb2dvU3R5bGUgPSAnYmFja2dyb3VuZC1pbWFnZTogdXJsKGh0dHBzOi8vc3ZlbHRlLmRldi9zdmVsdGUtbG9nby1ob3Jpem9udGFsLnN2ZyknO1xuXG4gIHN0YXRpYyByZXBsYWNlKCkge1xuICAgIGlmIChsb2NhdGlvbi5ob3N0ID09PSAnc3ZlbHRlLmRldicpIHtcbiAgICAgIGNvbnN0ICRuYXZTcG90ID0gJCh0aGlzLnNlbGVjdG9ycy5uYXZTcG90KTtcbiAgICAgIGxldCBpID0gMDtcbiAgICAgIC8vIOebkeWQrOadoeW5heWPmOWMlu+8jOWPmOWMluWQjuWGjeasoeaJp+ihjFxuICAgICAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcigoKSA9PiB7XG4gICAgICAgIGlmICgkbmF2U3BvdC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgLy8g5pu/5o2iIExvZ29cbiAgICAgICAgICAkbmF2U3BvdC5hdHRyKCdzdHlsZScsIHRoaXMuc3ZlbHRlTG9nb1N0eWxlKTtcbiAgICAgICAgICAvLyDmm7/mjaLkuKTmrKHlkI7nu5PmnZ/nm5HlkKxcbiAgICAgICAgICBpZiAoaSA+PSAxKSB7XG4gICAgICAgICAgICBvYnNlcnZlci5kaXNjb25uZWN0KCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGkrKztcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBvYnNlcnZlci5vYnNlcnZlKCQodGhpcy5zZWxlY3RvcnMub2JzZXJ2aW5nKVswXSwge2NoaWxkTGlzdDogdHJ1ZX0pO1xuXG4gICAgICAvLyDlupXpg6jmqKrluYVcbiAgICAgIEJhci5yZXBsYWNlKHtcbiAgICAgICAgYmFyU2VsZWN0b3I6IHRoaXMuc2VsZWN0b3JzLmJhciwgaXNPYnNlcnZlQmFyOiB0cnVlLCBoaWRlQmFyU2VsZWN0b3I6IHRoaXMuc2VsZWN0b3JzLmJhciwgaXNPYnNlcnZlSGlkZUJhcjogdHJ1ZSwgcmVwbGFjZUNhbGxiYWNrOiAoKSA9PiB7XG4gICAgICAgICAgJCh0aGlzLnNlbGVjdG9ycy5iYXIpLmNzcyh7J2JhY2tncm91bmRDb2xvcic6ICcjMWMxZTI0JywgJ3BhZGRpbmdUb3AnOiAnMjBweCd9KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG59XG4iLCIvKipcbiAqIOiuvue9ruiPnOWNlVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNZW51Q21kIHtcblxuICAvKipcbiAgICog5rOo5YaMXG4gICAqIEBwYXJhbSBuYW1lIOWQjeensFxuICAgKiBAcGFyYW0gZm4g54K55Ye76I+c5Y2V5pe25omn6KGM55qE5Ye95pWwXG4gICAqL1xuICBzdGF0aWMgcmVnaXN0ZXIobmFtZTogc3RyaW5nLCBmbjogRnVuY3Rpb24pOiBudW1iZXIge1xuICAgIC8vIEB0cy1pZ25vcmVcbiAgICByZXR1cm4gR01fcmVnaXN0ZXJNZW51Q29tbWFuZChuYW1lLCBmbik7XG4gIH1cblxuICAvKipcbiAgICog5rOo6ZSAXG4gICAqIEBwYXJhbSBtZW51Q21kSWQg5rOo5YaM5pe26L+U5Zue55qEIElEXG4gICAqL1xuICBzdGF0aWMgdW5yZWdpc3RlcihtZW51Q21kSWQ6IG51bWJlcikge1xuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBHTV91bnJlZ2lzdGVyTWVudUNvbW1hbmQobWVudUNtZElkKTtcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3ZlbHRlTWF0ZXJpYWxVaSB7XG5cbiAgc3RhdGljIHNlbGVjdG9ycyA9IHtcbiAgICBiYXI6ICcudWtyYWluZScsXG4gIH1cblxuICBzdGF0aWMgcmVwbGFjZSgpIHtcbiAgICBpZiAobG9jYXRpb24uaG9zdCA9PT0gJ3N2ZWx0ZW1hdGVyaWFsdWkuY29tJykge1xuICAgICAgJCh0aGlzLnNlbGVjdG9ycy5iYXIpLmF0dHIoJ2NsYXNzJywgJycpO1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IEJhciBmcm9tIFwiLi4vLi4vY29tbW9uL0JhclwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTeW5jdGhpbmcge1xuXG4gIHN0YXRpYyBzZWxlY3RvcnMgPSB7XG4gICAgYmFyOiAnLmFsZXJ0JyxcbiAgfVxuXG4gIHN0YXRpYyByZXBsYWNlKCkge1xuICAgIGlmIChsb2NhdGlvbi5ob3N0ID09PSAnc3luY3RoaW5nLm5ldCcpIHtcbiAgICAgIEJhci5yZXBsYWNlKHtcbiAgICAgICAgYmFyU2VsZWN0b3I6IHRoaXMuc2VsZWN0b3JzLmJhciwgaXNPYnNlcnZlQmFyOiBmYWxzZSwgaGlkZUJhclNlbGVjdG9yOiB0aGlzLnNlbGVjdG9ycy5iYXIsIGlzT2JzZXJ2ZUhpZGVCYXI6IGZhbHNlLCByZXBsYWNlQ2FsbGJhY2s6ICgpID0+IHtcbiAgICAgICAgICAkKHRoaXMuc2VsZWN0b3JzLmJhcikuY3NzKCd0ZXh0QWxpZ24nLCAnY2VudGVyJyk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxufVxuIiwiLy8gPT1Vc2VyU2NyaXB0PT1cbi8vIEBuYW1lICAgICAgICAg5oqA5pyv6L+c56a75pS/5rK7XG4vLyBAbmFtZXNwYWNlICAgIGh0dHA6Ly90YW1wZXJtb25rZXkubmV0L1xuLy8gQHZlcnNpb24gICAgICAxLjIuMFxuLy8gQGRlc2NyaXB0aW9uICDnp7vpmaTmlL/msrvnm7jlhbPmnaHluYXmiJbmm7/mjaLkuLrnpL7kvJrkuLvkuYnmoLjlv4Pku7flgLzop4LvvIzmm7/mjaLmlL/msrvnm7jlhbMgTG9nbyDkuLrljp/niYggTG9nb++8jOWOu+mZpOaUv+ayu+ebuOWFs+mAmuefpe+8jOiuqeaKgOacr+i/nOemu+aUv+ayu+OAglxuLy8gQGF1dGhvciAgICAgICBkdWFubHVhblxuLy8gQGNvcHlyaWdodCAgICAyMDIyLCBkdWFubHVhbiAoaHR0cHM6Ly9naXRodWIuY29tL2R1YW5sdWFuKVxuLy8gQGxpY2Vuc2UgICAgICBBcGFjaGUtMi4wOyBodHRwczovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wLnR4dFxuLy8gQG1hdGNoICAgICAgICAqOi8vcmVhY3Rqcy5vcmcvKlxuLy8gQG1hdGNoICAgICAgICAqOi8vYW5ndWxhci5pby8qXG4vLyBAbWF0Y2ggICAgICAgICo6Ly9qdW5pdC5vcmcvKlxuLy8gQG1hdGNoICAgICAgICAqOi8vY29kZWNlcHQuaW8vKlxuLy8gQG1hdGNoICAgICAgICAqOi8vZ2l0aHViLmNvbS8qXG4vLyBAbWF0Y2ggICAgICAgICo6Ly9kb2NzLm5lc3Rqcy5jb20vKlxuLy8gQG1hdGNoICAgICAgICAqOi8vZW1iZXJqcy5jb20vKlxuLy8gQG1hdGNoICAgICAgICAqOi8vd3d3LmVsZWN0cm9uanMub3JnLypcbi8vIEBtYXRjaCAgICAgICAgKjovL3d3dy5qZW5raW5zLmlvLypcbi8vIEBtYXRjaCAgICAgICAgKjovL3N2ZWx0ZS5kZXYvKlxuLy8gQG1hdGNoICAgICAgICAqOi8vc3ZlbHRlbWF0ZXJpYWx1aS5jb20vKlxuLy8gQG1hdGNoICAgICAgICAqOi8vc3luY3RoaW5nLm5ldC8qXG4vLyBAcmVxdWlyZSAgICAgIGh0dHBzOi8vY2RuLmJvb3RjZG4ubmV0L2FqYXgvbGlicy9qcXVlcnkvMy42LjAvanF1ZXJ5LnNsaW0ubWluLmpzXG4vLyBAZ3JhbnQgICAgICAgIEdNX2dldFZhbHVlXG4vLyBAZ3JhbnQgICAgICAgIEdNX3NldFZhbHVlXG4vLyBAZ3JhbnQgICAgICAgIEdNX3JlZ2lzdGVyTWVudUNvbW1hbmRcbi8vIEBncmFudCAgICAgICAgR01fdW5yZWdpc3Rlck1lbnVDb21tYW5kXG4vLyA9PS9Vc2VyU2NyaXB0PT1cblxuLy8gPT1PcGVuVXNlckpTPT1cbi8vIEBhdXRob3IgZHVhbmx1YW5cbi8vID09L09wZW5Vc2VySlM9PVxuXG5pbXBvcnQgSnVuaXQgZnJvbSBcIi4vd2Vic2l0ZXMvanVuaXQvSnVuaXRcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwiLi93ZWJzaXRlcy9yZWFjdC9SZWFjdFwiO1xuaW1wb3J0IEFuZ3VsYXIgZnJvbSBcIi4vd2Vic2l0ZXMvYW5ndWxhci9Bbmd1bGFyXCI7XG5pbXBvcnQgQ29kZWNlcHQgZnJvbSBcIi4vd2Vic2l0ZXMvY29kZWNlcHQvQ29kZWNlcHRcIjtcbmltcG9ydCBHaXRodWIgZnJvbSBcIi4vd2Vic2l0ZXMvZ2l0aHViL0dpdGh1YlwiO1xuaW1wb3J0IE5lc3QgZnJvbSBcIi4vd2Vic2l0ZXMvbmVzdC9OZXN0XCI7XG5pbXBvcnQgRW1iZXIgZnJvbSBcIi4vd2Vic2l0ZXMvZW1iZXIvRW1iZXJcIjtcbmltcG9ydCBFbGVjdHJvbiBmcm9tIFwiLi93ZWJzaXRlcy9lbGVjdHJvbi9FbGVjdHJvblwiO1xuaW1wb3J0IEplbmtpbnMgZnJvbSBcIi4vd2Vic2l0ZXMvamVua2lucy9KZW5raW5zXCI7XG5pbXBvcnQgU3ZlbHRlIGZyb20gXCIuL3dlYnNpdGVzL3N2ZWx0ZS9TdmVsdGVcIjtcbmltcG9ydCBTdG9yZSBmcm9tIFwiLi4vLi4vdXRpbHMvc3JjL2dtL1N0b3JlXCI7XG5pbXBvcnQgTWVudUNtZCBmcm9tIFwiLi4vLi4vdXRpbHMvc3JjL2dtL01lbnVDbWRcIjtcbmltcG9ydCBPcHRpb25zIGZyb20gXCIuL2NvbW1vbi9PcHRpb25zXCI7XG5pbXBvcnQgU3ZlbHRlTWF0ZXJpYWxVaSBmcm9tIFwiLi93ZWJzaXRlcy9zdmVsdGVtYXRlcmlhbHVpL1N2ZWx0ZU1hdGVyaWFsVWlcIjtcbmltcG9ydCBTeW5jdGhpbmcgZnJvbSBcIi4vd2Vic2l0ZXMvc3luY3RoaW5nL1N5bmN0aGluZ1wiO1xuXG4oKCkgPT4ge1xuICAndXNlIHN0cmljdCc7XG5cbiAgY29uc3Qgb3B0aW9ucyA9IFt7bGFiZWw6ICfnp7vpmaTmnaHluYUnLCBuYW1lOiBPcHRpb25zLktleXMucmVtb3ZlQmFyLCB2YWx1ZTogZmFsc2V9XTtcblxuICBmdW5jdGlvbiByZWdpc3RlcihvcHRpb246IGFueSkge1xuICAgIGNvbnN0IHZhbCA9IFN0b3JlLmdldChvcHRpb24ubmFtZSk7XG4gICAgY29uc3QgdmFsSXNCb29sID0gKHR5cGVvZiB2YWwgPT09ICdib29sZWFuJyk7XG4gICAgY29uc3QgbWVudUNtZElkID0gTWVudUNtZC5yZWdpc3RlcigodHlwZW9mIHZhbElzQm9vbCA/ICh2YWwgPyAn4piR77iPICcgOiAn8J+UsiAnKSA6ICcnKSArIG9wdGlvbi5sYWJlbCwgKCkgPT4ge1xuICAgICAgaWYgKG9wdGlvbi5uYW1lID09PSBPcHRpb25zLktleXMucmVtb3ZlQmFyKSB7XG4gICAgICAgIFN0b3JlLnNldChvcHRpb24ubmFtZSwgIXZhbCk7XG4gICAgICB9XG4gICAgICAvLyDlpoLmnpzmmK/luIPlsJTnsbvlnovlsLHph43mlrDms6jlhozpgInpoblcbiAgICAgIGlmICh2YWxJc0Jvb2wpIHtcbiAgICAgICAgTWVudUNtZC51bnJlZ2lzdGVyKG1lbnVDbWRJZCk7XG4gICAgICAgIHJlZ2lzdGVyKG9wdGlvbik7XG4gICAgICB9XG4gICAgICAvLyDliLfmlrDpobXpnaJcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcbiAgICB9KTtcbiAgfVxuXG4gIGZvciAoY29uc3Qgb3B0aW9uIG9mIG9wdGlvbnMpIHtcbiAgICAvLyDlrZjlgqjpgInpobnpu5jorqTlgLxcbiAgICBpZiAoU3RvcmUuZ2V0KG9wdGlvbi5uYW1lKSA9PT0gbnVsbCkge1xuICAgICAgU3RvcmUuc2V0KG9wdGlvbi5uYW1lLCBvcHRpb24udmFsdWUpXG4gICAgfVxuICAgIC8vIOazqOWGjOmAiemhuVxuICAgIGZvciAoY29uc3Qgb3B0aW9uIG9mIG9wdGlvbnMpIHtcbiAgICAgIHJlZ2lzdGVyKG9wdGlvbik7XG4gICAgfVxuICB9XG5cbiAgUmVhY3QucmVwbGFjZSgpO1xuICBBbmd1bGFyLnJlcGxhY2UoKTtcbiAgSnVuaXQucmVwbGFjZSgpO1xuICBDb2RlY2VwdC5yZXBsYWNlKCk7XG4gIEdpdGh1Yi5yZXBsYWNlKCk7XG4gIE5lc3QucmVwbGFjZSgpO1xuICBFbWJlci5yZXBsYWNlKCk7XG4gIEVsZWN0cm9uLnJlcGxhY2UoKTtcbiAgSmVua2lucy5yZXBsYWNlKCk7XG4gIFN2ZWx0ZS5yZXBsYWNlKCk7XG4gIFN2ZWx0ZU1hdGVyaWFsVWkucmVwbGFjZSgpO1xuICBTeW5jdGhpbmcucmVwbGFjZSgpO1xufSkoKTtcbiJdLCJuYW1lcyI6WyJKdW5pdCIsImxvY2F0aW9uIiwiaHJlZiIsIiQiLCJzZWxlY3RvcnMiLCJqdW5pdEFib3V0IiwicHJldkFsbCIsInJlbW92ZSIsImp1bml0TG9nbyIsImF0dHIiLCJqdW5pdExvZ29VcmwiLCJqdW5pdEZhdmljb24iLCJTdG9yZSIsImtleSIsIkdNX2dldFZhbHVlIiwidmFsdWUiLCJHTV9zZXRWYWx1ZSIsIk9wdGlvbnMiLCJyZW1vdmVCYXIiLCJCYXIiLCJvcHRpb25zIiwiYmFyU2VsZWN0b3IiLCJ0ZXh0IiwibWF0Y2giLCJnZXQiLCJLZXlzIiwiaGlkZUJhclNlbGVjdG9yIiwiaGlkZSIsImlzT2JzZXJ2ZUhpZGVCYXIiLCJpIiwib2JzZXJ2ZXIiLCJNdXRhdGlvbk9ic2VydmVyIiwiZGlzY29ubmVjdCIsIm9ic2VydmUiLCJjaGlsZExpc3QiLCJzdWJ0cmVlIiwicmVwbGFjZUJhciIsInJlcGxhY2VDYWxsYmFjayIsImNvbnNvbGUiLCJsb2ciLCJpc09ic2VydmVCYXIiLCJmb2xsb3dVcE9ic2VydmVTZWxlY3RvciIsInNlbGVjdG9yIiwicmVwbGFjZSIsInR4dCIsImNzcyIsImh0bWwiLCIkYmFyIiwicmVwbGFjZVNlbGVjdG9yIiwiYmFyIiwibGVuZ3RoIiwiZXEiLCJiYXJVbFNlbGVjdG9yIiwiYmFyVWwiLCJSZWFjdCIsImhvc3QiLCJoaWRlQmFyIiwiZm9sbG93VXBPYnNlcnZlRWxlbWVudCIsIkFuZ3VsYXIiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwidG9Mb3dlckNhc2UiLCJpbmRleE9mIiwiZGlzbWlzc05vdGlmaWNhdGlvbkJ0biIsImNsaWNrIiwiQ29kZWNlcHQiLCJHaXRodWIiLCIkbm90aWNlIiwibm90aWNlIiwiRW1iZXIiLCJFbGVjdHJvbiIsImxvZ28iLCJyZXBsYWNlV2l0aCIsInBhZ2VUaXRsZSIsIm5leHRBbGwiLCJlYWNoIiwiZWwiLCIkZWwiLCJwYXJlbnQiLCJhcHBlbmQiLCJTdmVsdGUiLCIkbmF2U3BvdCIsIm5hdlNwb3QiLCJzdmVsdGVMb2dvU3R5bGUiLCJvYnNlcnZpbmciLCJiYXJIZWlnaHQiLCJiYXJIZWlnaHRBdHRyTmFtZSIsIk1lbnVDbWQiLCJuYW1lIiwiZm4iLCJHTV9yZWdpc3Rlck1lbnVDb21tYW5kIiwibWVudUNtZElkIiwiR01fdW5yZWdpc3Rlck1lbnVDb21tYW5kIiwiU3ZlbHRlTWF0ZXJpYWxVaSIsIlN5bmN0aGluZyIsIk5lc3QiLCJKZW5raW5zIiwibGFiZWwiLCJyZWdpc3RlciIsIm9wdGlvbiIsInZhbCIsInZhbElzQm9vbCIsInNldCIsInVucmVnaXN0ZXIiLCJ3aW5kb3ciLCJyZWxvYWQiXSwic291cmNlUm9vdCI6IiJ9