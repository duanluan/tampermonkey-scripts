// ==UserScript==
// @name         技术远离政治
// @namespace    http://tampermonkey.net/
// @version      1.3.1
// @author       duanluan
// @description  移除政治相关条幅或替换为社会主义核心价值观、今日诗词，替换政治相关 Logo 为原版 Logo，去除政治相关通知，让技术远离政治。
// @license      Apache-2.0; https://www.apache.org/licenses/LICENSE-2.0.txt
// @icon         https://tampermonkey.freetls.fastly.net/images/icon180.png
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
// @match        *://greasyfork.org/*
// @require      https://cdn.jsdelivr.net/npm/jquery@3.6.1/dist/jquery.min.js
// @grant        GM_getValue
// @grant        GM_setValue
// @grant        GM_registerMenuCommand
// @grant        GM_unregisterMenuCommand
// @grant        GM_xmlhttpRequest
// @copyright    2022, duanluan (https://github.com/duanluan)
// ==/UserScript==

var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
(function($$1) {
  var _a, _b;
  "use strict";
  const _interopDefaultLegacy = (e) => e && typeof e === "object" && "default" in e ? e : { default: e };
  const $__default = /* @__PURE__ */ _interopDefaultLegacy($$1);
  class Junit {
    static replace() {
      if (location.href === "https://junit.org/junit5/") {
        $__default.default(this.selectors.junitAbout).prevAll().remove();
        $__default.default(this.selectors.junitLogo).attr("src", this.junitLogoUrl);
        $__default.default(this.selectors.junitFavicon).attr("href", this.junitLogoUrl);
      }
    }
  }
  __publicField(Junit, "selectors", {
    junitAbout: "#about",
    junitLogo: 'img[src="/junit5/assets/img/junit5-logo.png"]',
    junitFavicon: 'link[rel="icon"]'
  });
  __publicField(Junit, "junitLogoUrl", "https://raw.iqiq.io/duanluan/tampermonkey-scripts/main/core-socialist-values/src/junit/imgs/junit5-logo.png");
  var r = (_a = Reflect.get(document, "__monkeyWindow")) != null ? _a : window;
  r.GM;
  r.unsafeWindow = (_b = r.unsafeWindow) != null ? _b : window;
  r.unsafeWindow;
  r.GM_info;
  r.GM_cookie;
  var u = (...e) => r.GM_setValue(...e), m = (...e) => r.GM_registerMenuCommand(...e), w = (...e) => r.GM_unregisterMenuCommand(...e), b = (...e) => r.GM_xmlhttpRequest(...e), h = (...e) => r.GM_getValue(...e);
  class Store {
    static get(key) {
      return h(key, void 0);
    }
    static set(key, value) {
      u(key, value);
    }
  }
  var HttpDataType = /* @__PURE__ */ ((HttpDataType2) => {
    HttpDataType2["JSON"] = "JSON";
    return HttpDataType2;
  })(HttpDataType || {});
  class Request {
    static async get(option) {
      option["method"] = "GET";
      if (option.synchronous) {
        return new Promise((resolve, reject) => {
          b({
            ...option,
            onload: (response) => {
              resolve(
                option.dataType === HttpDataType.JSON ? JSON.parse(response.responseText) : response.responseText
              );
            },
            onerror: (error) => {
              reject(error);
            }
          });
        });
      } else {
        const onload1 = function(details) {
          let response;
          if (option.dataType === HttpDataType.JSON) {
            response = JSON.parse(details.responseText);
          } else {
            response = details.response;
          }
          option.onload(response);
        };
        b({ ...option, onload: onload1 });
      }
    }
  }
  class MenuCmd {
    static register(name, fn) {
      return m(name, fn);
    }
    static unregister(menuCmdId) {
      w(menuCmdId);
    }
  }
  class CommonOptions {
    static registerBoolOption(option) {
      const val = option.value, valIsBool = typeof val === "boolean";
      if (!valIsBool) {
        return;
      }
      const currentMenuCmdId = MenuCmd.register(
        (val ? "\u2611\uFE0F " : "\u{1F532} ") + option.label,
        () => {
          option.value = !option.value;
          Store.set(option.name, JSON.stringify(option));
          MenuCmd.unregister(currentMenuCmdId);
          this.registerBoolOption(option);
          window.location.reload();
        }
      );
      option.menuCmdId = currentMenuCmdId;
      Store.set(option.name, JSON.stringify(option));
    }
    static registerAll(url, options) {
      MenuCmd.register("\u66F4\u591A\u8BBE\u7F6E", () => {
        window.open(url, "_blank");
      });
      for (const option of options) {
        let storeOption = Store.get(option.name) ? JSON.parse(Store.get(option.name)) : null;
        if (storeOption === null || !storeOption["version"] || storeOption["version"] < option.version) {
          Store.set(option.name, JSON.stringify(option));
          storeOption = option;
        }
        this.registerBoolOption(storeOption);
      }
    }
    static loadInGreasyfork(scriptId, loadOptionContentFn) {
      if (location.host !== "greasyfork.org" || location.href.indexOf("/scripts/" + scriptId) == -1) {
        return;
      }
      const selector = {
        scriptLinks: "#script-links",
        scriptOptions: "#script-options",
        scriptContent: "#script-content"
      };
      const $body = $(document.body), $scriptLinks = $(selector.scriptLinks), $scriptContent = $(selector.scriptContent);
      $scriptLinks.children("li:eq(0)").after(
        `<li><a href="javascript:;" id="script-options">\u811A\u672C\u8BBE\u7F6E</a></li>`
      );
      $body.on("click", selector.scriptOptions, () => {
        const $currentLi = $scriptLinks.children("li.current");
        $currentLi.html(`<a href="${location.href}">${$currentLi.text()}</a>`);
        $currentLi.removeClass("current");
        const $scriptOptions = $(selector.scriptOptions);
        $scriptOptions.parent().addClass("current");
        loadOptionContentFn($scriptContent);
      });
    }
  }
  const _Options = class {
    static registerBoolOption(option) {
      CommonOptions.registerBoolOption(option);
    }
    static registerAll() {
      CommonOptions.registerAll(
        "https://greasyfork.org/scripts/" + this.SCRIPT_ID,
        this.options
      );
    }
    static loadInGreasyfork() {
      CommonOptions.loadInGreasyfork(this.SCRIPT_ID, ($scriptContent) => {
        let scriptContent = "";
        for (const option of this.options) {
          const storeOption = JSON.parse(Store.get(option.name)), optionName = storeOption.name, optionVal = storeOption.value;
          scriptContent += `<h3>${option.label}</h3>`;
          switch (optionName) {
            case this.Keys.removeBar:
              scriptContent += `<label><input type="checkbox" id="script-options-${optionName}" ${optionVal ? "checked" : ""}> \u662F\u5426\u9690\u85CF\u6761\u5E45\uFF08\u52FE\u9009\u540E\u5C06\u9690\u85CF\u6761\u5E45\u800C\u4E0D\u662F\u66FF\u6362\u5176\u5185\u5BB9\uFF09</label>`;
              break;
            case this.Keys.jinrishici:
              scriptContent += `<label><input type="checkbox" id="script-options-${optionName}-enabled" ${optionVal ? "checked" : ""}> \u542F\u7528<a href="https://www.jinrishici.com" target = "_blank">\u4ECA\u65E5\u8BD7\u8BCD</a>\uFF08\u4ECD\u9700\u53D6\u6D88\u52FE\u9009\u201C\u662F\u5426\u9690\u85CF\u6761\u5E45\u201D\u624D\u80FD\u751F\u6548\uFF09</label>`;
              break;
          }
        }
        $scriptContent.html(scriptContent);
        const $body = $__default.default(document.body);
        let optionSelector = "#script-options-" + this.Keys.removeBar;
        $body.on("change", optionSelector, () => {
          const removeBarOption = JSON.parse(Store.get(this.Keys.removeBar));
          removeBarOption.value = !removeBarOption.value;
          MenuCmd.unregister(removeBarOption.menuCmdId);
          this.registerBoolOption(removeBarOption);
        });
        optionSelector = "#script-options-" + this.Keys.jinrishici + "-enabled";
        $body.on("change", optionSelector, () => {
          const jinrishiciOption = JSON.parse(Store.get(this.Keys.jinrishici));
          jinrishiciOption.value = !jinrishiciOption.value;
          MenuCmd.unregister(jinrishiciOption.menuCmdId);
          this.registerBoolOption(jinrishiciOption);
        });
      });
    }
  };
  let Options = _Options;
  __publicField(Options, "SCRIPT_ID", 440854);
  __publicField(Options, "Keys", {
    removeBar: "removeBar",
    jinrishici: "jinrishici"
  });
  __publicField(Options, "options", [
    {
      label: "\u9690\u85CF\u6761\u5E45",
      name: _Options.Keys.removeBar,
      version: 1,
      value: false,
      menuCmdId: null
    },
    {
      label: "\u4ECA\u65E5\u8BD7\u8BCD",
      name: _Options.Keys.jinrishici,
      version: 1,
      value: false,
      menuCmdId: null,
      token: ""
    }
  ]);
  const _Bar = class {
    static replace(options) {
      if (!$__default.default(options.barSelector).text().match(/ukraine|乌克兰|black|黑人/i)) {
        return;
      }
      if (JSON.parse(Store.get(Options.Keys.removeBar)).value) {
        $__default.default(options.hideBarSelector).hide();
        if (options.isObserveHideBar) {
          let i = 0;
          const observer = new MutationObserver(() => {
            $__default.default(options.hideBarSelector).hide();
            if (i >= 1) {
              observer.disconnect();
            }
            i++;
          });
          observer.observe($__default.default(options.hideBarSelector)[0], {
            childList: true,
            subtree: true
          });
        }
        if (options.hideBarCallback) {
          options.hideBarCallback();
        }
        return;
      }
      this.storeJinrishiciVal = JSON.parse(
        Store.get(Options.Keys.jinrishici)
      ).value;
      if (this.storeJinrishiciVal) {
        this.getJinrishici().then((data) => {
          this.jinrishiciContent = data;
          this.replaceObserver(options);
        });
      } else {
        this.replaceObserver(options);
      }
    }
    static replaceObserver(options) {
      this.replaceBar(
        options.barSelector,
        options.replaceBarCallback,
        options.jinrishiciCallback
      );
      if (!options.isObserveBar) {
        return;
      }
      let i = 0;
      const observer = new MutationObserver(() => {
        this.replaceBar(
          options.barSelector,
          options.replaceBarCallback,
          options.jinrishiciCallback
        );
        if (i >= 1) {
          observer.disconnect();
        }
        i++;
      });
      observer.observe($__default.default(options.barSelector)[0], { childList: true });
      if (options.followUpObserveSelector) {
        new MutationObserver(() => {
          this.replaceBar(
            options.barSelector,
            options.replaceBarCallback,
            options.jinrishiciCallback
          );
        }).observe($__default.default(options.followUpObserveSelector)[0], { childList: true });
      }
    }
    static replaceBar(selector, replaceBarCallback, jinrishiciCallback) {
      if ($__default.default($__default.default(selector)[0]).text().replace(/\s+/g, "") === _Bar.txt) {
        return;
      }
      if (this.storeJinrishiciVal) {
        $__default.default(selector).css({ minHeight: "30px", lineHeight: "30px" });
        $__default.default(selector).html(`
        <div class="csv_bar">
          ${this.jinrishiciContent}
        </div>`);
        if (jinrishiciCallback) {
          jinrishiciCallback();
        }
        return;
      }
      $__default.default(selector).css({ minHeight: "40px" });
      $__default.default(selector).html(`
        <div class="csv_bar">
          <ul class='csv_bar_ul'><li>\u5BCC\u5F3A</li><li>\u6C11\u4E3B</li><li>\u6587\u660E</li><li>\u548C\u8C10</li><li>\u81EA\u7531</li><li>\u5E73\u7B49</li><li>\u516C\u6B63</li><li>\u6CD5\u6CBB</li><li>\u7231\u56FD</li><li>\u656C\u4E1A</li><li>\u8BDA\u4FE1</li><li>\u53CB\u5584</li></ul><br>
          <ul class='csv_bar_ul'><li>Prosperity</li><li>Democracy</li><li>Civility</li><li>Harmony</li><li>Freedom</li><li>Equality</li><li>Justice</li><li>Rule of law</li><li>Patriotism</li><li>Dedication</li><li>Integrity</li><li>Friendship</li>
          </ul>
        </div>`);
      const $bar = $__default.default(this.replaceBarSelector.bar);
      if ($bar.length == 2) {
        $bar.eq(0).remove();
      }
      const barUlSelector = this.replaceBarSelector.barUl;
      $__default.default(barUlSelector).css({
        display: "inline-block",
        listStyle: "none",
        margin: 0,
        padding: 0,
        width: "auto"
      });
      $__default.default(barUlSelector + " li").css({
        color: "#DE2910",
        fontWeight: "bold",
        fontFamily: "KaiTi",
        float: "left",
        paddingRight: "10px",
        "min-width": "80px",
        textAlign: "center"
      });
      $__default.default(barUlSelector + ":first").css("verticalAlign", "bottom");
      $__default.default(barUlSelector + ":first li").css("fontSize", "18px");
      $__default.default(barUlSelector + ":eq(1) li").css("fontSize", "13px");
      if (replaceBarCallback) {
        replaceBarCallback();
      }
    }
    static async getJinrishici() {
      let jinrishiciOption = JSON.parse(Store.get(Options.Keys.jinrishici));
      if (!jinrishiciOption.value) {
        return;
      }
      let response = await Request.get({
        url: "https://v2.jinrishici.com/one.json",
        dataType: HttpDataType.JSON,
        synchronous: true
      });
      if (!response || response.status !== "success") {
        console.error("\u4ECA\u65E5\u8BD7\u8BCD\u83B7\u53D6\u5931\u8D25", response);
      }
      return response.data.content + " \u2014\u2014 " + response.data.origin.author + "\u300A" + response.data.origin.title + "\u300B";
    }
  };
  let Bar = _Bar;
  __publicField(Bar, "replaceBarSelector", {
    bar: ".csv_bar",
    barUl: ".csv_bar .csv_bar_ul"
  });
  __publicField(Bar, "txt", "\u5BCC\u5F3A\u6C11\u4E3B\u6587\u660E\u548C\u8C10\u81EA\u7531\u5E73\u7B49\u516C\u6B63\u6CD5\u6CBB\u7231\u56FD\u656C\u4E1A\u8BDA\u4FE1\u53CB\u5584ProsperityDemocracyCivilityHarmonyFreedomEqualityJusticeRuleoflawPatriotismDedicationIntegrityFriendship");
  __publicField(Bar, "storeJinrishiciVal", false);
  __publicField(Bar, "jinrishiciContent", "");
  class React {
    static replace() {
      if (location.host === "reactjs.org") {
        Bar.replace({
          barSelector: this.selectors.bar,
          isObserveBar: true,
          hideBarSelector: this.selectors.hideBar,
          isObserveHideBar: false,
          followUpObserveSelector: this.selectors.followUpObserveElement,
          hideBarCallback: () => {
            $__default.default(this.selectors.excludeHeader).css("margin-top", "60px");
          }
        });
      }
    }
  }
  __publicField(React, "selectors", {
    bar: ".css-lpiycv",
    hideBar: ".css-1loxuh3",
    followUpObserveElement: "#gatsby-focus-wrapper",
    excludeHeader: ".css-xbsqlp"
  });
  class Angular$1 {
    static replace() {
      if (location.host === "angular.io") {
        if (!localStorage.getItem("aio-notification/war-ukraine")) {
          const $bar = $__default.default(this.selectors.bar);
          if ($bar.length > 0 && $bar.text().toLowerCase().indexOf("ukraine") != -1) {
            $__default.default(this.selectors.dismissNotificationBtn)[0].click();
          }
        }
      }
    }
  }
  __publicField(Angular$1, "selectors", {
    bar: ".mat-toolbar-row.notification-container",
    dismissNotificationBtn: 'button[aria-label="Dismiss notification"]'
  });
  class Codecept$1 {
    static replace() {
      if (location.host === "codecept.io") {
        Bar.replace({
          barSelector: this.selectors.bar,
          isObserveBar: false,
          hideBarSelector: this.selectors.hideBar,
          isObserveHideBar: false,
          jinrishiciCallback: () => {
            $__default.default(this.selectors.bar).css("color", "#edf2f7");
          }
        });
      }
    }
  }
  __publicField(Codecept$1, "selectors", {
    bar: ".sub-bar .message",
    hideBar: ".sub-bar"
  });
  class Github {
    static replace() {
      if (location.href === "https://github.com/") {
        const $notice = $__default.default(this.selectors.notice);
        if ($notice.length > 0 && $notice.text().toLowerCase().indexOf("ukraine") != -1) {
          $notice.remove();
        }
      }
    }
  }
  __publicField(Github, "selectors", {
    notice: ".border.js-notice"
  });
  class Codecept {
    static replace() {
      if (location.host === "docs.nestjs.com") {
        Bar.replace({
          barSelector: this.selectors.bar,
          isObserveBar: false,
          hideBarSelector: this.selectors.bar,
          isObserveHideBar: false,
          replaceBarCallback: () => {
            $__default.default(this.selectors.bar).css("padding", "0");
          },
          jinrishiciCallback: () => {
            $__default.default(this.selectors.bar).css("color", "#fff");
          }
        });
      }
    }
  }
  __publicField(Codecept, "selectors", {
    bar: ".top-bar"
  });
  class Ember {
    static replace() {
      if (location.host === "emberjs.com") {
        Bar.replace({
          barSelector: this.selectors.bar,
          isObserveBar: false,
          hideBarSelector: this.selectors.bar,
          isObserveHideBar: false,
          jinrishiciCallback: () => {
            $__default.default(this.selectors.bar).css("color", "#fff");
          }
        });
        $__default.default(this.selectors.bar).css({ backgroundColor: "#1c1e24", padding: 0 });
      }
    }
  }
  __publicField(Ember, "selectors", {
    bar: ".callout-banner"
  });
  class Electron {
    static replace() {
      if (location.host === "www.electronjs.org") {
        Bar.replace({
          barSelector: this.selectors.bar,
          isObserveBar: false,
          hideBarSelector: this.selectors.bar,
          isObserveHideBar: false,
          replaceBarCallback: () => {
            $__default.default(Bar.replaceBarSelector.barUl + ":eq(0)").css("height", "25px");
            $__default.default(Bar.replaceBarSelector.barUl + ":eq(1)").css("height", "20px");
          }
        });
        $__default.default(this.selectors.bar).css({ padding: 0 });
      }
    }
  }
  __publicField(Electron, "selectors", {
    bar: ".announcement-banner"
  });
  class Angular {
    static replace() {
      if (location.host === "www.jenkins.io") {
        $__default.default(this.selectors.logo).replaceWith(
          `<img src="/images/logos/jenkins/Jenkins.svg">`
        );
        $__default.default(this.selectors.pageTitle).nextAll("p").each((i, el) => {
          const $el = $__default.default(el);
          if ($el.text().toLowerCase().indexOf("ukraine") != -1) {
            $el.remove();
          }
        });
        $__default.default(this.selectors.pageTitle).parent().append("<br><br><br>");
      }
    }
  }
  __publicField(Angular, "selectors", {
    logo: 'img[src="/images/logos/jenkins/Jenkins-stop-the-war.svg"]',
    pageTitle: ".page-title"
  });
  class Svelte {
    static replace() {
      if (location.host === "svelte.dev") {
        const $navSpot = $__default.default(this.selectors.navSpot);
        let i = 0;
        const observer = new MutationObserver(() => {
          if ($navSpot.length > 0) {
            $navSpot.attr("style", this.svelteLogoStyle);
            if (i >= 1) {
              observer.disconnect();
            }
            i++;
          }
        });
        observer.observe($__default.default(this.selectors.observing)[0], { childList: true });
        Bar.replace({
          barSelector: this.selectors.bar,
          isObserveBar: true,
          hideBarSelector: this.selectors.bar,
          isObserveHideBar: true,
          replaceBarCallback: () => {
            $__default.default(this.selectors.bar).css({
              backgroundColor: "#1c1e24",
              paddingTop: "20px"
            });
          }
        });
      }
    }
  }
  __publicField(Svelte, "selectors", {
    navSpot: ".nav-spot",
    bar: ".ukr",
    barHeight: ":root",
    barHeightAttrName: "--ukr-footer-height",
    observing: "#main"
  });
  __publicField(Svelte, "svelteLogoStyle", "background-image: url(https://svelte.dev/svelte-logo-horizontal.svg)");
  class SvelteMaterialUi {
    static replace() {
      if (location.host === "sveltematerialui.com") {
        $__default.default(this.selectors.bar).attr("class", "");
      }
    }
  }
  __publicField(SvelteMaterialUi, "selectors", {
    bar: ".ukraine"
  });
  class Syncthing {
    static replace() {
      if (location.host === "syncthing.net") {
        Bar.replace({
          barSelector: this.selectors.bar,
          isObserveBar: false,
          hideBarSelector: this.selectors.bar,
          isObserveHideBar: false,
          replaceBarCallback: () => {
            $__default.default(this.selectors.bar).css("textAlign", "center");
          }
        });
      }
    }
  }
  __publicField(Syncthing, "selectors", {
    bar: ".alert"
  });
  (() => {
    Options.registerAll();
    Options.loadInGreasyfork();
    React.replace();
    Angular$1.replace();
    Junit.replace();
    Codecept$1.replace();
    Github.replace();
    Codecept.replace();
    Ember.replace();
    Electron.replace();
    Angular.replace();
    Svelte.replace();
    SvelteMaterialUi.replace();
    Syncthing.replace();
  })();
})($);
