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

      if (location.href.indexOf('https://svelte.dev/') === 0) {
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


;// CONCATENATED MODULE: ./core-socialist-values/src/main.ts
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

// ==UserScript==
// @name         技术远离政治
// @namespace    http://tampermonkey.net/
// @version      1.0.0
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
      }
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
})();
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFPWSxTQUFQLElBQW9CRCxHQUFHLEdBQUcsS0FBSCxHQUFXLEtBQWxDLEdBQTJDLEVBQTVDLElBQWtERCxNQUFNLENBQUNGLEtBQTFFLEVBQWlGLFlBQU07TUFDdkcsSUFBSUUsTUFBTSxDQUFDVCxJQUFQLEtBQWdCdkUsc0JBQXBCLEVBQTRDO1FBQzFDTCxTQUFBLENBQVVxRixNQUFNLENBQUNULElBQWpCLEVBQXVCLENBQUNVLEdBQXhCO01BQ0QsQ0FIc0csQ0FJdkc7OztNQUNBLElBQUlDLFNBQUosRUFBZTtRQUNiWixrQkFBQSxDQUFtQkksU0FBbkI7UUFDQUssUUFBUSxDQUFDQyxNQUFELENBQVI7TUFDRDtJQUNGLENBVGlCLENBQWxCO0VBVUQ7O0VBRUQsNEJBQXFCN0UsT0FBckIsOEJBQThCO0lBQXpCLElBQU02RSxNQUFNLGVBQVo7O0lBQ0g7SUFDQSxJQUFJckYsU0FBQSxDQUFVcUYsTUFBTSxDQUFDVCxJQUFqQixNQUEyQixJQUEvQixFQUFxQztNQUNuQzVFLFNBQUEsQ0FBVXFGLE1BQU0sQ0FBQ1QsSUFBakIsRUFBdUJTLE1BQU0sQ0FBQ2xGLEtBQTlCO0lBQ0QsQ0FKMkIsQ0FLNUI7OztJQUw0QiwyQ0FNUEssT0FOTztJQUFBOztJQUFBO01BTTVCLG9EQUE4QjtRQUFBLElBQW5CNkUsT0FBbUI7UUFDNUJELFFBQVEsQ0FBQ0MsT0FBRCxDQUFSO01BQ0Q7SUFSMkI7TUFBQTtJQUFBO01BQUE7SUFBQTtFQVM3Qjs7RUFFRDNDLGFBQUE7RUFDQUksZUFBQTtFQUNBMUQsYUFBQTtFQUNBaUUsZ0JBQUE7RUFDQUMsY0FBQTtFQUNBMkIscUJBQUE7RUFDQXhCLGFBQUE7RUFDQUMsZ0JBQUE7RUFDQXdCLHVCQUFBO0VBQ0FkLGNBQUE7QUFDRCxDQXpDRCxJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGFtcGVybW9ua2V5LXNjcmlwdC11dGlscy8uL2NvcmUtc29jaWFsaXN0LXZhbHVlcy9zcmMvd2Vic2l0ZXMvanVuaXQvSnVuaXQudHMiLCJ3ZWJwYWNrOi8vdGFtcGVybW9ua2V5LXNjcmlwdC11dGlscy8uL3V0aWxzL3NyYy9nbS9TdG9yZS50cyIsIndlYnBhY2s6Ly90YW1wZXJtb25rZXktc2NyaXB0LXV0aWxzLy4vY29yZS1zb2NpYWxpc3QtdmFsdWVzL3NyYy9jb21tb24vT3B0aW9ucy50cyIsIndlYnBhY2s6Ly90YW1wZXJtb25rZXktc2NyaXB0LXV0aWxzLy4vY29yZS1zb2NpYWxpc3QtdmFsdWVzL3NyYy9jb21tb24vQmFyLnRzIiwid2VicGFjazovL3RhbXBlcm1vbmtleS1zY3JpcHQtdXRpbHMvLi9jb3JlLXNvY2lhbGlzdC12YWx1ZXMvc3JjL3dlYnNpdGVzL3JlYWN0L1JlYWN0LnRzIiwid2VicGFjazovL3RhbXBlcm1vbmtleS1zY3JpcHQtdXRpbHMvLi9jb3JlLXNvY2lhbGlzdC12YWx1ZXMvc3JjL3dlYnNpdGVzL2FuZ3VsYXIvQW5ndWxhci50cyIsIndlYnBhY2s6Ly90YW1wZXJtb25rZXktc2NyaXB0LXV0aWxzLy4vY29yZS1zb2NpYWxpc3QtdmFsdWVzL3NyYy93ZWJzaXRlcy9jb2RlY2VwdC9Db2RlY2VwdC50cyIsIndlYnBhY2s6Ly90YW1wZXJtb25rZXktc2NyaXB0LXV0aWxzLy4vY29yZS1zb2NpYWxpc3QtdmFsdWVzL3NyYy93ZWJzaXRlcy9naXRodWIvR2l0aHViLnRzIiwid2VicGFjazovL3RhbXBlcm1vbmtleS1zY3JpcHQtdXRpbHMvLi9jb3JlLXNvY2lhbGlzdC12YWx1ZXMvc3JjL3dlYnNpdGVzL25lc3QvTmVzdC50cyIsIndlYnBhY2s6Ly90YW1wZXJtb25rZXktc2NyaXB0LXV0aWxzLy4vY29yZS1zb2NpYWxpc3QtdmFsdWVzL3NyYy93ZWJzaXRlcy9lbWJlci9FbWJlci50cyIsIndlYnBhY2s6Ly90YW1wZXJtb25rZXktc2NyaXB0LXV0aWxzLy4vY29yZS1zb2NpYWxpc3QtdmFsdWVzL3NyYy93ZWJzaXRlcy9lbGVjdHJvbi9FbGVjdHJvbi50cyIsIndlYnBhY2s6Ly90YW1wZXJtb25rZXktc2NyaXB0LXV0aWxzLy4vY29yZS1zb2NpYWxpc3QtdmFsdWVzL3NyYy93ZWJzaXRlcy9qZW5raW5zL0plbmtpbnMudHMiLCJ3ZWJwYWNrOi8vdGFtcGVybW9ua2V5LXNjcmlwdC11dGlscy8uL2NvcmUtc29jaWFsaXN0LXZhbHVlcy9zcmMvd2Vic2l0ZXMvc3ZlbHRlL1N2ZWx0ZS50cyIsIndlYnBhY2s6Ly90YW1wZXJtb25rZXktc2NyaXB0LXV0aWxzLy4vdXRpbHMvc3JjL2dtL01lbnVDbWQudHMiLCJ3ZWJwYWNrOi8vdGFtcGVybW9ua2V5LXNjcmlwdC11dGlscy8uL2NvcmUtc29jaWFsaXN0LXZhbHVlcy9zcmMvbWFpbi50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBKdW5pdCB7XG5cbiAgcHJpdmF0ZSBzdGF0aWMgc2VsZWN0b3JzID0ge1xuICAgIGp1bml0QWJvdXQ6ICcjYWJvdXQnLFxuICAgIGp1bml0TG9nbzogJ2ltZ1tzcmM9XCIvanVuaXQ1L2Fzc2V0cy9pbWcvanVuaXQ1LWxvZ28ucG5nXCJdJyxcbiAgICBqdW5pdEZhdmljb246ICdsaW5rW3JlbD1cImljb25cIl0nLFxuICB9XG5cbiAgcHJpdmF0ZSBzdGF0aWMganVuaXRMb2dvVXJsID0gJ2h0dHBzOi8vcmF3LmlxaXEuaW8vZHVhbmx1YW4vdGFtcGVybW9ua2V5LXNjcmlwdHMvbWFpbi9jb3JlLXNvY2lhbGlzdC12YWx1ZXMvc3JjL2p1bml0L2ltZ3MvanVuaXQ1LWxvZ28ucG5nJ1xuXG4gIHN0YXRpYyByZXBsYWNlKCkge1xuICAgIGlmIChsb2NhdGlvbi5ocmVmID09PSAnaHR0cHM6Ly9qdW5pdC5vcmcvanVuaXQ1LycpIHtcbiAgICAgICQodGhpcy5zZWxlY3RvcnMuanVuaXRBYm91dCkucHJldkFsbCgpLnJlbW92ZSgpO1xuICAgICAgJCh0aGlzLnNlbGVjdG9ycy5qdW5pdExvZ28pLmF0dHIoJ3NyYycsIHRoaXMuanVuaXRMb2dvVXJsKTtcbiAgICAgICQodGhpcy5zZWxlY3RvcnMuanVuaXRGYXZpY29uKS5hdHRyKCdocmVmJywgdGhpcy5qdW5pdExvZ29VcmwpO1xuICAgIH1cbiAgfVxufVxuIiwiLyoqXG4gKiDlrZjlgqhcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RvcmUge1xuXG4gIC8qKlxuICAgKiDojrflj5ZcbiAgICogQHBhcmFtIGtleSDplK5cbiAgICovXG4gIHN0YXRpYyBnZXQoa2V5OiBzdHJpbmcpOiBhbnkge1xuICAgIC8vIEB0cy1pZ25vcmVcbiAgICByZXR1cm4gR01fZ2V0VmFsdWUoa2V5KTtcbiAgfVxuXG4gIC8qKlxuICAgKiDorr7nva5cbiAgICogQHBhcmFtIGtleSDplK5cbiAgICogQHBhcmFtIHZhbHVlIOWAvFxuICAgKi9cbiAgc3RhdGljIHNldChrZXk6IHN0cmluZywgdmFsdWU6IGFueSkge1xuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBHTV9zZXRWYWx1ZShrZXksIHZhbHVlKTtcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgT3B0aW9ucyB7XG4gIHN0YXRpYyBLZXlzID0ge1xuICAgIHJlbW92ZUJhcjogJ3JlbW92ZUJhcicsXG4gIH1cbn1cbiIsImltcG9ydCBTdG9yZSBmcm9tIFwiLi4vLi4vLi4vdXRpbHMvc3JjL2dtL1N0b3JlXCI7XG5pbXBvcnQgT3B0aW9ucyBmcm9tIFwiLi9PcHRpb25zXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJhciB7XG5cbiAgLyoqXG4gICAqIOabv+aNouadoeW5hVxuICAgKiBAcGFyYW0gb3B0aW9ucyB7XG4gICAqICBiYXJTZWxlY3Rvcjogc3RyaW5nLCAgICAgICAgICAgICAgLy8g5p2h5bmF6YCJ5oup5ZmoXG4gICAqICBpc09ic2VydmVCYXI6IGJvb2xlYW4sICAgICAgICAgICAgLy8g5piv5ZCm55uR5ZCs5p2h5bmF5Y+Y5YyWXG4gICAqICBoaWRlQmFyU2VsZWN0b3I6IHN0cmluZywgICAgICAgICAgLy8g6ZqQ6JeP5p2h5bmF6YCJ5oup5ZmoXG4gICAqICBpc09ic2VydmVIaWRlQmFyOiBib29sZWFuLCAgICAgICAgLy8g5piv5ZCm55uR5ZCs6ZqQ6JeP5p2h5bmF5Y+Y5YyWXG4gICAqICBmb2xsb3dVcE9ic2VydmVTZWxlY3Rvcj86IHN0cmluZywgLy8g5ZCO57ut55uR5ZCs6YCJ5oup5ZmoXG4gICAqICByZXBsYWNlQ2FsbGJhY2s/OiBGdW5jdGlvbiAgICAgICAgLy8g5pu/5o2i5ZCO5Zue6LCDXG4gICAqIH1cbiAgICovXG4gIHN0YXRpYyByZXBsYWNlKG9wdGlvbnM6IHsgYmFyU2VsZWN0b3I6IHN0cmluZywgaXNPYnNlcnZlQmFyOiBib29sZWFuLCBoaWRlQmFyU2VsZWN0b3I6IHN0cmluZywgaXNPYnNlcnZlSGlkZUJhcjogYm9vbGVhbiwgZm9sbG93VXBPYnNlcnZlU2VsZWN0b3I/OiBzdHJpbmcsIHJlcGxhY2VDYWxsYmFjaz86IEZ1bmN0aW9uIH0pIHtcbiAgICBpZiAoISQob3B0aW9ucy5iYXJTZWxlY3RvcikudGV4dCgpLm1hdGNoKC91a3JhaW5lfOS5jOWFi+WFsHxibGFja3zpu5HkurovaSkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgLy8g5aaC5p6c56e76Zmk5qiq5bmFXG4gICAgaWYgKFN0b3JlLmdldChPcHRpb25zLktleXMucmVtb3ZlQmFyKSkge1xuICAgICAgLy8g6ZqQ6JeP5qiq5bmFXG4gICAgICAkKG9wdGlvbnMuaGlkZUJhclNlbGVjdG9yKS5oaWRlKCk7XG4gICAgICBpZiAob3B0aW9ucy5pc09ic2VydmVIaWRlQmFyKSB7XG4gICAgICAgIGxldCBpID0gMDtcbiAgICAgICAgLy8g6ZqQ6JeP5p2h5bmF6aaW5qyh5Yqg6L2977ya55uR5ZCs5p2h5bmF5Y+Y5YyW77yM5Y+Y5YyW5ZCO5YaN5qyh5omn6KGMXG4gICAgICAgIGNvbnN0IG9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoKCkgPT4ge1xuICAgICAgICAgICQob3B0aW9ucy5oaWRlQmFyU2VsZWN0b3IpLmhpZGUoKTtcbiAgICAgICAgICAvLyDmm7/mjaLkuKTmrKHlkI7nu5PmnZ/nm5HlkKxcbiAgICAgICAgICBpZiAoaSA+PSAxKSB7XG4gICAgICAgICAgICBvYnNlcnZlci5kaXNjb25uZWN0KCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGkrKztcbiAgICAgICAgfSk7XG4gICAgICAgIG9ic2VydmVyLm9ic2VydmUoJChvcHRpb25zLmhpZGVCYXJTZWxlY3RvcilbMF0sIHtjaGlsZExpc3Q6IHRydWUsIHN1YnRyZWU6IHRydWV9KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIOmmluasoeabv+aNouaoquW5hVxuICAgIHRoaXMucmVwbGFjZUJhcihvcHRpb25zLmJhclNlbGVjdG9yLCBvcHRpb25zLnJlcGxhY2VDYWxsYmFjayk7XG4gICAgY29uc29sZS5sb2coJ3JlcGxhY2VCYXInKTtcbiAgICBpZiAoIW9wdGlvbnMuaXNPYnNlcnZlQmFyKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGxldCBpID0gMDtcbiAgICAvLyDmnaHluYXpppbmrKHliqDovb3vvJrnm5HlkKzmnaHluYXlj5jljJbvvIzlj5jljJblkI7lho3mrKHmiafooYxcbiAgICBjb25zdCBvYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKCgpID0+IHtcbiAgICAgIHRoaXMucmVwbGFjZUJhcihvcHRpb25zLmJhclNlbGVjdG9yLCBvcHRpb25zLnJlcGxhY2VDYWxsYmFjayk7XG4gICAgICAvLyDmm7/mjaLkuKTmrKHlkI7nu5PmnZ/nm5HlkKxcbiAgICAgIGlmIChpID49IDEpIHtcbiAgICAgICAgb2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuICAgICAgfVxuICAgICAgaSsrO1xuICAgIH0pO1xuICAgIG9ic2VydmVyLm9ic2VydmUoJChvcHRpb25zLmJhclNlbGVjdG9yKVswXSwge2NoaWxkTGlzdDogdHJ1ZX0pO1xuXG4gICAgaWYgKG9wdGlvbnMuZm9sbG93VXBPYnNlcnZlU2VsZWN0b3IpIHtcbiAgICAgIC8vIOWQjue7reWPmOWMllxuICAgICAgbmV3IE11dGF0aW9uT2JzZXJ2ZXIoKCkgPT4ge1xuICAgICAgICB0aGlzLnJlcGxhY2VCYXIob3B0aW9ucy5iYXJTZWxlY3Rvciwgb3B0aW9ucy5yZXBsYWNlQ2FsbGJhY2spO1xuICAgICAgfSkub2JzZXJ2ZSgkKG9wdGlvbnMuZm9sbG93VXBPYnNlcnZlU2VsZWN0b3IpWzBdLCB7Y2hpbGRMaXN0OiB0cnVlfSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIOabv+aNouWQjueahOadoeW5heWOu+mZpOepuuagvOaNouihjOWQjueahOaWh+acrFxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgcHJpdmF0ZSBzdGF0aWMgdHh0ID0gJ+WvjOW8uuawkeS4u+aWh+aYjuWSjOiwkOiHqueUseW5s+etieWFrOato+azleayu+eIseWbveaVrOS4muivmuS/oeWPi+WWhFByb3NwZXJpdHlEZW1vY3JhY3lDaXZpbGl0eUhhcm1vbnlGcmVlZG9tRXF1YWxpdHlKdXN0aWNlUnVsZW9mbGF3UGF0cmlvdGlzbURlZGljYXRpb25JbnRlZ3JpdHlGcmllbmRzaGlwJztcblxuICBzdGF0aWMgcmVwbGFjZVNlbGVjdG9yID0ge1xuICAgIGJhcjogJy5jc3ZfYmFyJyxcbiAgICBiYXJVbDogJy5jc3ZfYmFyIC5jc3ZfYmFyX3VsJyxcbiAgfTtcblxuICBwcml2YXRlIHN0YXRpYyByZXBsYWNlQmFyKHNlbGVjdG9yOiBzdHJpbmcsIHJlcGxhY2VDYWxsYmFjaz86IEZ1bmN0aW9uKSB7XG4gICAgaWYgKCQoJChzZWxlY3RvcilbMF0pLnRleHQoKS5yZXBsYWNlKC9cXHMrL2csIFwiXCIpID09PSBCYXIudHh0KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgJChzZWxlY3RvcikuY3NzKHsnbWluSGVpZ2h0JzogJzQwcHgnfSk7XG4gICAgJChzZWxlY3RvcikuaHRtbChgXG4gICAgPGRpdiBjbGFzcz1cImNzdl9iYXJcIj5cbiAgICAgIDx1bCBjbGFzcz0nY3N2X2Jhcl91bCc+PGxpPuWvjOW8ujwvbGk+PGxpPuawkeS4uzwvbGk+PGxpPuaWh+aYjjwvbGk+PGxpPuWSjOiwkDwvbGk+PGxpPuiHqueUsTwvbGk+PGxpPuW5s+etiTwvbGk+PGxpPuWFrOatozwvbGk+PGxpPuazleayuzwvbGk+PGxpPueIseWbvTwvbGk+PGxpPuaVrOS4mjwvbGk+PGxpPuivmuS/oTwvbGk+PGxpPuWPi+WWhDwvbGk+PC91bD48YnI+XG4gICAgICA8dWwgY2xhc3M9J2Nzdl9iYXJfdWwnPjxsaT5Qcm9zcGVyaXR5PC9saT48bGk+RGVtb2NyYWN5PC9saT48bGk+Q2l2aWxpdHk8L2xpPjxsaT5IYXJtb255PC9saT48bGk+RnJlZWRvbTwvbGk+PGxpPkVxdWFsaXR5PC9saT48bGk+SnVzdGljZTwvbGk+PGxpPlJ1bGUgb2YgbGF3PC9saT48bGk+UGF0cmlvdGlzbTwvbGk+PGxpPkRlZGljYXRpb248L2xpPjxsaT5JbnRlZ3JpdHk8L2xpPjxsaT5GcmllbmRzaGlwPC9saT5cbiAgICAgIDwvdWw+XG4gICAgPC9kaXY+YCk7XG5cbiAgICAvLyDpgb/lhY3lh7rnjrDlpJrkuKrlr7zoh7TmoLflvI/mt7vliqDlpLHotKVcbiAgICBjb25zdCAkYmFyID0gJCh0aGlzLnJlcGxhY2VTZWxlY3Rvci5iYXIpO1xuICAgIGlmICgkYmFyLmxlbmd0aCA9PSAyKSB7XG4gICAgICAkYmFyLmVxKDApLnJlbW92ZSgpO1xuICAgIH1cblxuICAgIGNvbnN0IGJhclVsU2VsZWN0b3IgPSB0aGlzLnJlcGxhY2VTZWxlY3Rvci5iYXJVbDtcbiAgICAkKGJhclVsU2VsZWN0b3IpLmNzcyh7J2Rpc3BsYXknOiAnaW5saW5lLWJsb2NrJywgJ2xpc3RTdHlsZSc6ICdub25lJywgJ21hcmdpbic6IDAsICdwYWRkaW5nJzogMCwgJ3dpZHRoJzogJ2F1dG8nfSk7XG4gICAgJChiYXJVbFNlbGVjdG9yICsgJyBsaScpLmNzcyh7J2NvbG9yJzogJyNERTI5MTAnLCAnZm9udFdlaWdodCc6ICdib2xkJywgJ2ZvbnRGYW1pbHknOiAnS2FpVGknLCAnZmxvYXQnOiAnbGVmdCcsICdwYWRkaW5nUmlnaHQnOiAnMTBweCcsICdtaW4td2lkdGgnOiAnODBweCcsICd0ZXh0QWxpZ24nOiAnY2VudGVyJ30pO1xuICAgICQoYmFyVWxTZWxlY3RvciArICc6Zmlyc3QnKS5jc3MoJ3ZlcnRpY2FsQWxpZ24nLCAnYm90dG9tJyk7XG4gICAgJChiYXJVbFNlbGVjdG9yICsgJzpmaXJzdCBsaScpLmNzcygnZm9udFNpemUnLCAnMThweCcpO1xuICAgICQoYmFyVWxTZWxlY3RvciArICc6ZXEoMSkgbGknKS5jc3MoJ2ZvbnRTaXplJywgJzEzcHgnKTtcblxuICAgIGlmIChyZXBsYWNlQ2FsbGJhY2spIHtcbiAgICAgIHJlcGxhY2VDYWxsYmFjaygpO1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IEJhciBmcm9tIFwiLi4vLi4vY29tbW9uL0JhclwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZWFjdCB7XG5cbiAgcHJpdmF0ZSBzdGF0aWMgc2VsZWN0b3JzID0ge1xuICAgIGJhcjogJy5jc3MtbHBpeWN2JyxcbiAgICBoaWRlQmFyOiAnLmNzcy0xbG94dWgzJyxcbiAgICBmb2xsb3dVcE9ic2VydmVFbGVtZW50OiAnI2dhdHNieS1mb2N1cy13cmFwcGVyJyxcbiAgfVxuXG4gIHN0YXRpYyByZXBsYWNlKCkge1xuICAgIGlmIChsb2NhdGlvbi5ob3N0ID09PSAncmVhY3Rqcy5vcmcnKSB7XG4gICAgICBCYXIucmVwbGFjZSh7YmFyU2VsZWN0b3I6IHRoaXMuc2VsZWN0b3JzLmJhciwgaXNPYnNlcnZlQmFyOiB0cnVlLCBoaWRlQmFyU2VsZWN0b3I6IHRoaXMuc2VsZWN0b3JzLmhpZGVCYXIsIGlzT2JzZXJ2ZUhpZGVCYXI6IGZhbHNlLCBmb2xsb3dVcE9ic2VydmVTZWxlY3RvcjogdGhpcy5zZWxlY3RvcnMuZm9sbG93VXBPYnNlcnZlRWxlbWVudH0pO1xuICAgIH1cbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQW5ndWxhciB7XG5cbiAgcHJpdmF0ZSBzdGF0aWMgc2VsZWN0b3JzID0ge1xuICAgIGJhcjogJy5tYXQtdG9vbGJhci1yb3cubm90aWZpY2F0aW9uLWNvbnRhaW5lcicsXG4gICAgZGlzbWlzc05vdGlmaWNhdGlvbkJ0bjogJ2J1dHRvblthcmlhLWxhYmVsPVwiRGlzbWlzcyBub3RpZmljYXRpb25cIl0nLFxuICB9XG5cbiAgc3RhdGljIHJlcGxhY2UoKSB7XG4gICAgaWYgKGxvY2F0aW9uLmhvc3QgPT09ICdhbmd1bGFyLmlvJykge1xuICAgICAgLy8g5LiN5a2Y5Zyo5piv5ZCm5YWz6Zet6YCa55+l55qE5pys5Zyw5a2Y5YKo5pe2XG4gICAgICBpZiAoIWxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhaW8tbm90aWZpY2F0aW9uL3dhci11a3JhaW5lJykpIHtcbiAgICAgICAgLy8g5aaC5p6c6YCa55+l5Lit5a2Y5Zyo5YWz6ZSu6K+NXG4gICAgICAgIGNvbnN0ICRiYXIgPSAkKHRoaXMuc2VsZWN0b3JzLmJhcik7XG4gICAgICAgIGlmICgkYmFyLmxlbmd0aCA+IDAgJiYgJGJhci50ZXh0KCkudG9Mb3dlckNhc2UoKS5pbmRleE9mKCd1a3JhaW5lJykgIT0gLTEpIHtcbiAgICAgICAgICAvLyDngrnlh7vlhbPpl63pgJrnn6VcbiAgICAgICAgICAkKHRoaXMuc2VsZWN0b3JzLmRpc21pc3NOb3RpZmljYXRpb25CdG4pWzBdLmNsaWNrKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn0iLCJpbXBvcnQgQmFyIGZyb20gXCIuLi8uLi9jb21tb24vQmFyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvZGVjZXB0IHtcblxuICBzdGF0aWMgc2VsZWN0b3JzID0ge1xuICAgIGJhcjogJy5zdWItYmFyIC5tZXNzYWdlJyxcbiAgICBoaWRlQmFyOiAnLnN1Yi1iYXInLFxuICB9XG5cbiAgc3RhdGljIHJlcGxhY2UoKSB7XG4gICAgaWYgKGxvY2F0aW9uLmhvc3QgPT09ICdjb2RlY2VwdC5pbycpIHtcbiAgICAgIEJhci5yZXBsYWNlKHtiYXJTZWxlY3RvcjogdGhpcy5zZWxlY3RvcnMuYmFyLCBpc09ic2VydmVCYXI6IGZhbHNlLCBoaWRlQmFyU2VsZWN0b3I6IHRoaXMuc2VsZWN0b3JzLmhpZGVCYXIsIGlzT2JzZXJ2ZUhpZGVCYXI6IGZhbHNlfSk7XG4gICAgfVxuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBHaXRodWIge1xuXG4gIHN0YXRpYyBzZWxlY3RvcnMgPSB7XG4gICAgbm90aWNlOiAnLmJvcmRlci5qcy1ub3RpY2UnXG4gIH1cblxuICBzdGF0aWMgcmVwbGFjZSgpIHtcbiAgICBpZiAobG9jYXRpb24uaHJlZiA9PT0gJ2h0dHBzOi8vZ2l0aHViLmNvbS8nKSB7XG4gICAgICBjb25zdCAkbm90aWNlID0gJCh0aGlzLnNlbGVjdG9ycy5ub3RpY2UpO1xuICAgICAgaWYgKCRub3RpY2UubGVuZ3RoID4gMCAmJiAkbm90aWNlLnRleHQoKS50b0xvd2VyQ2FzZSgpLmluZGV4T2YoJ3VrcmFpbmUnKSAhPSAtMSkge1xuICAgICAgICAkbm90aWNlLnJlbW92ZSgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IEJhciBmcm9tIFwiLi4vLi4vY29tbW9uL0JhclwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb2RlY2VwdCB7XG5cbiAgc3RhdGljIHNlbGVjdG9ycyA9IHtcbiAgICBiYXI6ICcudG9wLWJhcicsXG4gIH1cblxuICBzdGF0aWMgcmVwbGFjZSgpIHtcbiAgICBpZiAobG9jYXRpb24uaG9zdCA9PT0gJ2RvY3MubmVzdGpzLmNvbScpIHtcbiAgICAgIEJhci5yZXBsYWNlKHtiYXJTZWxlY3RvcjogdGhpcy5zZWxlY3RvcnMuYmFyLCBpc09ic2VydmVCYXI6IGZhbHNlLCBoaWRlQmFyU2VsZWN0b3I6IHRoaXMuc2VsZWN0b3JzLmJhciwgaXNPYnNlcnZlSGlkZUJhcjogZmFsc2V9KTtcbiAgICAgICQodGhpcy5zZWxlY3RvcnMuYmFyKS5jc3MoJ3BhZGRpbmcnLCAnMCcpO1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IEJhciBmcm9tIFwiLi4vLi4vY29tbW9uL0JhclwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFbWJlciB7XG5cbiAgc3RhdGljIHNlbGVjdG9ycyA9IHtcbiAgICBiYXI6ICcuY2FsbG91dC1iYW5uZXInLFxuICB9XG5cbiAgc3RhdGljIHJlcGxhY2UoKSB7XG4gICAgaWYgKGxvY2F0aW9uLmhvc3QgPT09ICdlbWJlcmpzLmNvbScpIHtcbiAgICAgIEJhci5yZXBsYWNlKHtiYXJTZWxlY3RvcjogdGhpcy5zZWxlY3RvcnMuYmFyLCBpc09ic2VydmVCYXI6IGZhbHNlLCBoaWRlQmFyU2VsZWN0b3I6IHRoaXMuc2VsZWN0b3JzLmJhciwgaXNPYnNlcnZlSGlkZUJhcjogZmFsc2V9KTtcbiAgICAgICQodGhpcy5zZWxlY3RvcnMuYmFyKS5jc3MoeydiYWNrZ3JvdW5kQ29sb3InOiAnIzFjMWUyNCcsICdwYWRkaW5nJzogMH0pO1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IEJhciBmcm9tIFwiLi4vLi4vY29tbW9uL0JhclwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFbGVjdHJvbiB7XG5cbiAgc3RhdGljIHNlbGVjdG9ycyA9IHtcbiAgICBiYXI6ICcuYW5ub3VuY2VtZW50LWJhbm5lcicsXG4gIH1cblxuICBzdGF0aWMgcmVwbGFjZSgpIHtcbiAgICBpZiAobG9jYXRpb24uaG9zdCA9PT0gJ3d3dy5lbGVjdHJvbmpzLm9yZycpIHtcbiAgICAgIEJhci5yZXBsYWNlKHtcbiAgICAgICAgYmFyU2VsZWN0b3I6IHRoaXMuc2VsZWN0b3JzLmJhciwgaXNPYnNlcnZlQmFyOiBmYWxzZSwgaGlkZUJhclNlbGVjdG9yOiB0aGlzLnNlbGVjdG9ycy5iYXIsIGlzT2JzZXJ2ZUhpZGVCYXI6IGZhbHNlLCByZXBsYWNlQ2FsbGJhY2s6ICgpID0+IHtcbiAgICAgICAgICAkKEJhci5yZXBsYWNlU2VsZWN0b3IuYmFyVWwgKyAnOmVxKDApJykuY3NzKCdoZWlnaHQnLCAnMjVweCcpO1xuICAgICAgICAgICQoQmFyLnJlcGxhY2VTZWxlY3Rvci5iYXJVbCArICc6ZXEoMSknKS5jc3MoJ2hlaWdodCcsICcyMHB4Jyk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgJCh0aGlzLnNlbGVjdG9ycy5iYXIpLmNzcyh7J3BhZGRpbmcnOiAwfSk7XG4gICAgfVxuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBBbmd1bGFyIHtcblxuICBzdGF0aWMgc2VsZWN0b3JzID0ge1xuICAgIGxvZ286ICdpbWdbc3JjPVwiL2ltYWdlcy9sb2dvcy9qZW5raW5zL0plbmtpbnMtc3RvcC10aGUtd2FyLnN2Z1wiXScsXG4gICAgcGFnZVRpdGxlOiAnLnBhZ2UtdGl0bGUnXG4gIH1cblxuICBzdGF0aWMgcmVwbGFjZSgpIHtcbiAgICBpZiAobG9jYXRpb24uaG9zdCA9PT0gJ3d3dy5qZW5raW5zLmlvJykge1xuICAgICAgLy8g5pu/5o2i5Zu+5qCHXG4gICAgICAkKHRoaXMuc2VsZWN0b3JzLmxvZ28pLnJlcGxhY2VXaXRoKGA8aW1nIHNyYz1cIi9pbWFnZXMvbG9nb3MvamVua2lucy9KZW5raW5zLnN2Z1wiPmApO1xuXG4gICAgICAvLyDliKDpmaTpgJrnn6VcbiAgICAgICQodGhpcy5zZWxlY3RvcnMucGFnZVRpdGxlKS5uZXh0QWxsKFwicFwiKS5lYWNoKChpLCBlbCkgPT4ge1xuICAgICAgICBjb25zdCAkZWwgPSAkKGVsKTtcbiAgICAgICAgaWYgKCRlbC50ZXh0KCkudG9Mb3dlckNhc2UoKS5pbmRleE9mKCd1a3JhaW5lJykgIT0gLTEpIHtcbiAgICAgICAgICAkZWwucmVtb3ZlKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgJCh0aGlzLnNlbGVjdG9ycy5wYWdlVGl0bGUpLnBhcmVudCgpLmFwcGVuZCgnPGJyPjxicj48YnI+Jyk7XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgQmFyIGZyb20gXCIuLi8uLi9jb21tb24vQmFyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN2ZWx0ZSB7XG5cbiAgcHJpdmF0ZSBzdGF0aWMgc2VsZWN0b3JzID0ge1xuICAgIG5hdlNwb3Q6ICcubmF2LXNwb3QnLFxuICAgIGJhcjogJy51a3InLFxuICAgIGJhckhlaWdodDogJzpyb290JyxcbiAgICBiYXJIZWlnaHRBdHRyTmFtZTogJy0tdWtyLWZvb3Rlci1oZWlnaHQnLFxuICAgIG9ic2VydmluZzogJyNtYWluJyxcbiAgfVxuXG4gIHByaXZhdGUgc3RhdGljIHN2ZWx0ZUxvZ29TdHlsZSA9ICdiYWNrZ3JvdW5kLWltYWdlOiB1cmwoaHR0cHM6Ly9zdmVsdGUuZGV2L3N2ZWx0ZS1sb2dvLWhvcml6b250YWwuc3ZnKSc7XG5cbiAgc3RhdGljIHJlcGxhY2UoKSB7XG4gICAgaWYgKGxvY2F0aW9uLmhyZWYuaW5kZXhPZignaHR0cHM6Ly9zdmVsdGUuZGV2LycpID09PSAwKSB7XG4gICAgICBjb25zdCAkbmF2U3BvdCA9ICQodGhpcy5zZWxlY3RvcnMubmF2U3BvdCk7XG4gICAgICBsZXQgaSA9IDA7XG4gICAgICAvLyDnm5HlkKzmnaHluYXlj5jljJbvvIzlj5jljJblkI7lho3mrKHmiafooYxcbiAgICAgIGNvbnN0IG9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoKCkgPT4ge1xuICAgICAgICBpZiAoJG5hdlNwb3QubGVuZ3RoID4gMCkge1xuICAgICAgICAgIC8vIOabv+aNoiBMb2dvXG4gICAgICAgICAgJG5hdlNwb3QuYXR0cignc3R5bGUnLCB0aGlzLnN2ZWx0ZUxvZ29TdHlsZSk7XG4gICAgICAgICAgLy8g5pu/5o2i5Lik5qyh5ZCO57uT5p2f55uR5ZCsXG4gICAgICAgICAgaWYgKGkgPj0gMSkge1xuICAgICAgICAgICAgb2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpKys7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgb2JzZXJ2ZXIub2JzZXJ2ZSgkKHRoaXMuc2VsZWN0b3JzLm9ic2VydmluZylbMF0sIHtjaGlsZExpc3Q6IHRydWV9KTtcblxuICAgICAgLy8g5bqV6YOo5qiq5bmFXG4gICAgICBCYXIucmVwbGFjZSh7XG4gICAgICAgIGJhclNlbGVjdG9yOiB0aGlzLnNlbGVjdG9ycy5iYXIsIGlzT2JzZXJ2ZUJhcjogdHJ1ZSwgaGlkZUJhclNlbGVjdG9yOiB0aGlzLnNlbGVjdG9ycy5iYXIsIGlzT2JzZXJ2ZUhpZGVCYXI6IHRydWUsIHJlcGxhY2VDYWxsYmFjazogKCkgPT4ge1xuICAgICAgICAgICQodGhpcy5zZWxlY3RvcnMuYmFyKS5jc3MoeydiYWNrZ3JvdW5kQ29sb3InOiAnIzFjMWUyNCcsICdwYWRkaW5nVG9wJzogJzIwcHgnfSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxufVxuIiwiLyoqXG4gKiDorr7nva7oj5zljZVcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWVudUNtZCB7XG5cbiAgLyoqXG4gICAqIOazqOWGjFxuICAgKiBAcGFyYW0gbmFtZSDlkI3np7BcbiAgICogQHBhcmFtIGZuIOeCueWHu+iPnOWNleaXtuaJp+ihjOeahOWHveaVsFxuICAgKi9cbiAgc3RhdGljIHJlZ2lzdGVyKG5hbWU6IHN0cmluZywgZm46IEZ1bmN0aW9uKTogbnVtYmVyIHtcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgcmV0dXJuIEdNX3JlZ2lzdGVyTWVudUNvbW1hbmQobmFtZSwgZm4pO1xuICB9XG5cbiAgLyoqXG4gICAqIOazqOmUgFxuICAgKiBAcGFyYW0gbWVudUNtZElkIOazqOWGjOaXtui/lOWbnueahCBJRFxuICAgKi9cbiAgc3RhdGljIHVucmVnaXN0ZXIobWVudUNtZElkOiBudW1iZXIpIHtcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgR01fdW5yZWdpc3Rlck1lbnVDb21tYW5kKG1lbnVDbWRJZCk7XG4gIH1cbn1cbiIsIi8vID09VXNlclNjcmlwdD09XG4vLyBAbmFtZSAgICAgICAgIOaKgOacr+i/nOemu+aUv+ayu1xuLy8gQG5hbWVzcGFjZSAgICBodHRwOi8vdGFtcGVybW9ua2V5Lm5ldC9cbi8vIEB2ZXJzaW9uICAgICAgMS4wLjBcbi8vIEBkZXNjcmlwdGlvbiAg56e76Zmk5pS/5rK755u45YWz5p2h5bmF5oiW5pu/5o2i5Li656S+5Lya5Li75LmJ5qC45b+D5Lu35YC86KeC77yM5pu/5o2i5pS/5rK755u45YWzIExvZ28g5Li65Y6f54mIIExvZ2/vvIzljrvpmaTmlL/msrvnm7jlhbPpgJrnn6XvvIzorqnmioDmnK/ov5znprvmlL/msrvjgIJcbi8vIEBhdXRob3IgICAgICAgZHVhbmx1YW5cbi8vIEBjb3B5cmlnaHQgICAgMjAyMiwgZHVhbmx1YW4gKGh0dHBzOi8vZ2l0aHViLmNvbS9kdWFubHVhbilcbi8vIEBsaWNlbnNlICAgICAgQXBhY2hlLTIuMDsgaHR0cHM6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMC50eHRcbi8vIEBtYXRjaCAgICAgICAgKjovL3JlYWN0anMub3JnLypcbi8vIEBtYXRjaCAgICAgICAgKjovL2FuZ3VsYXIuaW8vKlxuLy8gQG1hdGNoICAgICAgICAqOi8vanVuaXQub3JnLypcbi8vIEBtYXRjaCAgICAgICAgKjovL2NvZGVjZXB0LmlvLypcbi8vIEBtYXRjaCAgICAgICAgKjovL2dpdGh1Yi5jb20vKlxuLy8gQG1hdGNoICAgICAgICAqOi8vZG9jcy5uZXN0anMuY29tLypcbi8vIEBtYXRjaCAgICAgICAgKjovL2VtYmVyanMuY29tLypcbi8vIEBtYXRjaCAgICAgICAgKjovL3d3dy5lbGVjdHJvbmpzLm9yZy8qXG4vLyBAbWF0Y2ggICAgICAgICo6Ly93d3cuamVua2lucy5pby8qXG4vLyBAbWF0Y2ggICAgICAgICo6Ly9zdmVsdGUuZGV2Lypcbi8vIEByZXF1aXJlICAgICAgaHR0cHM6Ly9jZG4uYm9vdGNkbi5uZXQvYWpheC9saWJzL2pxdWVyeS8zLjYuMC9qcXVlcnkuc2xpbS5taW4uanNcbi8vIEBncmFudCAgICAgICAgR01fZ2V0VmFsdWVcbi8vIEBncmFudCAgICAgICAgR01fc2V0VmFsdWVcbi8vIEBncmFudCAgICAgICAgR01fcmVnaXN0ZXJNZW51Q29tbWFuZFxuLy8gQGdyYW50ICAgICAgICBHTV91bnJlZ2lzdGVyTWVudUNvbW1hbmRcbi8vID09L1VzZXJTY3JpcHQ9PVxuXG4vLyA9PU9wZW5Vc2VySlM9PVxuLy8gQGF1dGhvciBkdWFubHVhblxuLy8gPT0vT3BlblVzZXJKUz09XG5cbmltcG9ydCBKdW5pdCBmcm9tIFwiLi93ZWJzaXRlcy9qdW5pdC9KdW5pdFwiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCIuL3dlYnNpdGVzL3JlYWN0L1JlYWN0XCI7XG5pbXBvcnQgQW5ndWxhciBmcm9tIFwiLi93ZWJzaXRlcy9hbmd1bGFyL0FuZ3VsYXJcIjtcbmltcG9ydCBDb2RlY2VwdCBmcm9tIFwiLi93ZWJzaXRlcy9jb2RlY2VwdC9Db2RlY2VwdFwiO1xuaW1wb3J0IEdpdGh1YiBmcm9tIFwiLi93ZWJzaXRlcy9naXRodWIvR2l0aHViXCI7XG5pbXBvcnQgTmVzdCBmcm9tIFwiLi93ZWJzaXRlcy9uZXN0L05lc3RcIjtcbmltcG9ydCBFbWJlciBmcm9tIFwiLi93ZWJzaXRlcy9lbWJlci9FbWJlclwiO1xuaW1wb3J0IEVsZWN0cm9uIGZyb20gXCIuL3dlYnNpdGVzL2VsZWN0cm9uL0VsZWN0cm9uXCI7XG5pbXBvcnQgSmVua2lucyBmcm9tIFwiLi93ZWJzaXRlcy9qZW5raW5zL0plbmtpbnNcIjtcbmltcG9ydCBTdmVsdGUgZnJvbSBcIi4vd2Vic2l0ZXMvc3ZlbHRlL1N2ZWx0ZVwiO1xuaW1wb3J0IFN0b3JlIGZyb20gXCIuLi8uLi91dGlscy9zcmMvZ20vU3RvcmVcIjtcbmltcG9ydCBNZW51Q21kIGZyb20gXCIuLi8uLi91dGlscy9zcmMvZ20vTWVudUNtZFwiO1xuaW1wb3J0IE9wdGlvbnMgZnJvbSBcIi4vY29tbW9uL09wdGlvbnNcIjtcblxuKCgpID0+IHtcbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIGNvbnN0IG9wdGlvbnMgPSBbe2xhYmVsOiAn56e76Zmk5p2h5bmFJywgbmFtZTogT3B0aW9ucy5LZXlzLnJlbW92ZUJhciwgdmFsdWU6IGZhbHNlfV07XG5cbiAgZnVuY3Rpb24gcmVnaXN0ZXIob3B0aW9uOiBhbnkpIHtcbiAgICBjb25zdCB2YWwgPSBTdG9yZS5nZXQob3B0aW9uLm5hbWUpO1xuICAgIGNvbnN0IHZhbElzQm9vbCA9ICh0eXBlb2YgdmFsID09PSAnYm9vbGVhbicpO1xuICAgIGNvbnN0IG1lbnVDbWRJZCA9IE1lbnVDbWQucmVnaXN0ZXIoKHR5cGVvZiB2YWxJc0Jvb2wgPyAodmFsID8gJ+KYke+4jyAnIDogJ/CflLIgJykgOiAnJykgKyBvcHRpb24ubGFiZWwsICgpID0+IHtcbiAgICAgIGlmIChvcHRpb24ubmFtZSA9PT0gT3B0aW9ucy5LZXlzLnJlbW92ZUJhcikge1xuICAgICAgICBTdG9yZS5zZXQob3B0aW9uLm5hbWUsICF2YWwpO1xuICAgICAgfVxuICAgICAgLy8g5aaC5p6c5piv5biD5bCU57G75Z6L5bCx6YeN5paw5rOo5YaM6YCJ6aG5XG4gICAgICBpZiAodmFsSXNCb29sKSB7XG4gICAgICAgIE1lbnVDbWQudW5yZWdpc3RlcihtZW51Q21kSWQpO1xuICAgICAgICByZWdpc3RlcihvcHRpb24pO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgZm9yIChjb25zdCBvcHRpb24gb2Ygb3B0aW9ucykge1xuICAgIC8vIOWtmOWCqOmAiemhuem7mOiupOWAvFxuICAgIGlmIChTdG9yZS5nZXQob3B0aW9uLm5hbWUpID09PSBudWxsKSB7XG4gICAgICBTdG9yZS5zZXQob3B0aW9uLm5hbWUsIG9wdGlvbi52YWx1ZSlcbiAgICB9XG4gICAgLy8g5rOo5YaM6YCJ6aG5XG4gICAgZm9yIChjb25zdCBvcHRpb24gb2Ygb3B0aW9ucykge1xuICAgICAgcmVnaXN0ZXIob3B0aW9uKTtcbiAgICB9XG4gIH1cblxuICBSZWFjdC5yZXBsYWNlKCk7XG4gIEFuZ3VsYXIucmVwbGFjZSgpO1xuICBKdW5pdC5yZXBsYWNlKCk7XG4gIENvZGVjZXB0LnJlcGxhY2UoKTtcbiAgR2l0aHViLnJlcGxhY2UoKTtcbiAgTmVzdC5yZXBsYWNlKCk7XG4gIEVtYmVyLnJlcGxhY2UoKTtcbiAgRWxlY3Ryb24ucmVwbGFjZSgpO1xuICBKZW5raW5zLnJlcGxhY2UoKTtcbiAgU3ZlbHRlLnJlcGxhY2UoKTtcbn0pKCk7XG4iXSwibmFtZXMiOlsiSnVuaXQiLCJsb2NhdGlvbiIsImhyZWYiLCIkIiwic2VsZWN0b3JzIiwianVuaXRBYm91dCIsInByZXZBbGwiLCJyZW1vdmUiLCJqdW5pdExvZ28iLCJhdHRyIiwianVuaXRMb2dvVXJsIiwianVuaXRGYXZpY29uIiwiU3RvcmUiLCJrZXkiLCJHTV9nZXRWYWx1ZSIsInZhbHVlIiwiR01fc2V0VmFsdWUiLCJPcHRpb25zIiwicmVtb3ZlQmFyIiwiQmFyIiwib3B0aW9ucyIsImJhclNlbGVjdG9yIiwidGV4dCIsIm1hdGNoIiwiZ2V0IiwiS2V5cyIsImhpZGVCYXJTZWxlY3RvciIsImhpZGUiLCJpc09ic2VydmVIaWRlQmFyIiwiaSIsIm9ic2VydmVyIiwiTXV0YXRpb25PYnNlcnZlciIsImRpc2Nvbm5lY3QiLCJvYnNlcnZlIiwiY2hpbGRMaXN0Iiwic3VidHJlZSIsInJlcGxhY2VCYXIiLCJyZXBsYWNlQ2FsbGJhY2siLCJjb25zb2xlIiwibG9nIiwiaXNPYnNlcnZlQmFyIiwiZm9sbG93VXBPYnNlcnZlU2VsZWN0b3IiLCJzZWxlY3RvciIsInJlcGxhY2UiLCJ0eHQiLCJjc3MiLCJodG1sIiwiJGJhciIsInJlcGxhY2VTZWxlY3RvciIsImJhciIsImxlbmd0aCIsImVxIiwiYmFyVWxTZWxlY3RvciIsImJhclVsIiwiUmVhY3QiLCJob3N0IiwiaGlkZUJhciIsImZvbGxvd1VwT2JzZXJ2ZUVsZW1lbnQiLCJBbmd1bGFyIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInRvTG93ZXJDYXNlIiwiaW5kZXhPZiIsImRpc21pc3NOb3RpZmljYXRpb25CdG4iLCJjbGljayIsIkNvZGVjZXB0IiwiR2l0aHViIiwiJG5vdGljZSIsIm5vdGljZSIsIkVtYmVyIiwiRWxlY3Ryb24iLCJsb2dvIiwicmVwbGFjZVdpdGgiLCJwYWdlVGl0bGUiLCJuZXh0QWxsIiwiZWFjaCIsImVsIiwiJGVsIiwicGFyZW50IiwiYXBwZW5kIiwiU3ZlbHRlIiwiJG5hdlNwb3QiLCJuYXZTcG90Iiwic3ZlbHRlTG9nb1N0eWxlIiwib2JzZXJ2aW5nIiwiYmFySGVpZ2h0IiwiYmFySGVpZ2h0QXR0ck5hbWUiLCJNZW51Q21kIiwibmFtZSIsImZuIiwiR01fcmVnaXN0ZXJNZW51Q29tbWFuZCIsIm1lbnVDbWRJZCIsIkdNX3VucmVnaXN0ZXJNZW51Q29tbWFuZCIsIk5lc3QiLCJKZW5raW5zIiwibGFiZWwiLCJyZWdpc3RlciIsIm9wdGlvbiIsInZhbCIsInZhbElzQm9vbCIsInNldCIsInVucmVnaXN0ZXIiXSwic291cmNlUm9vdCI6IiJ9