// ==UserScript==
// @name         亚马逊 Kindle 展示豆瓣评分
// @namespace    http://tampermonkey.net/
// @version      0.0.1
// @author       duanluan
// @description  增强 V2EX 主题的回复。
// @license      Apache-2.0
// @icon         https://www.google.com/s2/favicons?sz=64&domain=amazon.cn
// @match        *://www.amazon.cn/*
// @require      https://cdn.jsdelivr.net/npm/jquery@3.6.1/dist/jquery.min.js
// @grant        GM_getValue
// @grant        GM_setValue
// @grant        GM_xmlhttpRequest
// ==/UserScript==

(function($2) {
  var _a, _b;
  "use strict";
  const _interopDefaultLegacy = (e) => e && typeof e === "object" && "default" in e ? e : { default: e };
  const $__default = /* @__PURE__ */ _interopDefaultLegacy($2);
  class Url {
    static getPath(url) {
      if (!url) {
        url = window.location.href;
      }
      const host = window.location.host;
      return url.substring(url.indexOf(host) + host.length);
    }
  }
  var r = (_a = Reflect.get(document, "__monkeyWindow")) != null ? _a : window;
  r.GM;
  r.unsafeWindow = (_b = r.unsafeWindow) != null ? _b : window;
  r.unsafeWindow;
  r.GM_info;
  r.GM_cookie;
  var u = (...e) => r.GM_setValue(...e), b = (...e) => r.GM_xmlhttpRequest(...e), h = (...e) => r.GM_getValue(...e);
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
  const selectors = {
    bookName: '.sg-col-inner h2 a[href^="/dp/"]',
    pageStrip: ".s-pagination-strip a",
    pageSelected: ".s-pagination-item.s-pagination-selected",
    pageBtn: ".s-pagination-item.s-pagination-button"
  }, gmstoreKeys = {
    serverUrl: "serverUrl"
  }, serverUrl = Store.get(gmstoreKeys.serverUrl);
  let $bookNames;
  (() => {
    let urlPath = Url.getPath();
    if (urlPath.startsWith("/s") && urlPath.indexOf("rh=n") != -1) {
      loadScore();
      setServerUrl(serverUrl);
    }
    $__default.default(selectors.pageStrip).on("click", document, () => {
      const t = setTimeout(() => {
        if ($bookNames != $__default.default(selectors.bookName) && (!$__default.default(selectors.pageSelected).next(selectors.pageBtn) || $__default.default(selectors.bookName).length == 16)) {
          loadScore();
          clearTimeout(t);
        }
      }, 500);
    });
  })();
  function setServerUrl(serverUrl2) {
    if (!serverUrl2) {
      serverUrl2 = Store.get(gmstoreKeys.serverUrl);
    }
    if (!serverUrl2) {
      Store.set(
        gmstoreKeys.serverUrl,
        window.prompt(
          "\u8BF7\u8F93\u5165\u201C\u4E9A\u9A6C\u900A Kindle \u5C55\u793A\u8C46\u74E3\u8BC4\u5206\u201D\u7684\u670D\u52A1\u5730\u5740\uFF1A",
          "http://localhost:8361"
        )
      );
    }
  }
  function loadScore() {
    $bookNames = $__default.default(selectors.bookName);
    $bookNames.each((i, element) => {
      const $bookName = $__default.default(element), name = $bookName.text().replace(/[（\\(【].*[）\\)】]|·|・/g, "").trim(), author = $bookName.parent().next().text().replace(/[（\\(【].*[）\\)】]|·|・|, |、|。|等*/g, "").replace(/\s*\|\s*\d{4}-\d{2}/i, "").trim();
      console.log(name + " | " + author);
      Request.get({
        url: serverUrl + "/douban/subjectSearch?name=" + name + "&author=" + author,
        dataType: HttpDataType.JSON,
        onload: (response) => {
          const code = response.code;
          response.msg;
          const data = response.data;
          if (code != 200) {
            return;
          }
          console.log(response);
          let score = 0;
          for (const book of data) {
            if (book.score) {
              score = book.score;
              break;
            }
          }
          $bookName.prepend(
            `<span style="color: #071; font-weight: bolder; font-size: large">${score}</span>&nbsp;&nbsp;`
          );
        }
      });
    });
  }
})($);
