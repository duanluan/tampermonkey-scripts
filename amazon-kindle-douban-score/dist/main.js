/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./utils/src/Url.ts
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var Url = /*#__PURE__*/function () {
  function Url() {
    _classCallCheck(this, Url);
  }

  _createClass(Url, null, [{
    key: "getPath",
    value:
    /**
     * 根据 URL 获取路径（排除域名）
     * @param url URL，默认为当前地址
     */
    function getPath(url) {
      if (!url) {
        url = window.location.href;
      }

      var host = window.location.host;
      return url.substring(url.indexOf(host) + host.length);
    }
  }]);

  return Url;
}();


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


;// CONCATENATED MODULE: ./utils/src/gm/enum/HttpDataType.ts
var HttpDataType;

(function (HttpDataType) {
  HttpDataType["JSON"] = "";
})(HttpDataType || (HttpDataType = {}));
;// CONCATENATED MODULE: ./utils/src/gm/Http.ts
function Http_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Http_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Http_createClass(Constructor, protoProps, staticProps) { if (protoProps) Http_defineProperties(Constructor.prototype, protoProps); if (staticProps) Http_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }



var Http = /*#__PURE__*/function () {
  function Http() {
    Http_classCallCheck(this, Http);
  }

  Http_createClass(Http, null, [{
    key: "get",
    value: function get(option) {
      var onload1 = function onload1(result) {
        var response = result.response; // 将返回值转换为 JSON

        if (option.dataType === HttpDataType.JSON) {
          response = JSON.parse(result.response);
        }

        option.onload(response);
      }; // @ts-ignore


      GM_xmlhttpRequest({
        method: 'GET',
        url: option.url,
        onload: onload1
      });
    }
  }]);

  return Http;
}();


;// CONCATENATED MODULE: ./amazon-kindle-douban-score/src/main.ts
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }





var selectors = {
  // 书名链接
  bookName: '.sg-col-inner h2 a[href^="/dp/"]',
  // 分页按钮
  pageStrip: '.s-pagination-strip a',
  // 已选中的分页按钮（当前页）
  pageSelected: '.s-pagination-item.s-pagination-selected',
  // 分页按钮
  pageBtn: '.s-pagination-item.s-pagination-button'
},
    gmstoreKeys = {
  serverUrl: 'serverUrl'
},
    // 服务地址
serverUrl = Store.get(gmstoreKeys.serverUrl); // 书名，用于判断是否换页

var $bookNames;

(function () {
  'use strict';

  var urlPath = Url.getPath(); // 列表或搜索页面

  if (urlPath.startsWith('/s') && urlPath.indexOf('rh=n') != -1) {
    // StoreUtils.set(gmstoreKeys.serverUrl, window.prompt("请输入“亚马逊 Kindle 展示豆瓣评分”的服务地址：", "http://localhost:8361"));
    loadScore();
    setServerUrl(serverUrl);
  } // 分页操作后重新加载分数


  $(selectors.pageStrip).on('click', document, function () {
    var t = setTimeout(function () {
      if ($bookNames != $(selectors.bookName) // 到最后一页了 或 有 16 条（每页条数）
      && (!$(selectors.pageSelected).next(selectors.pageBtn) || $(selectors.bookName).length == 16)) {
        loadScore();
        clearTimeout(t);
      }
    }, 500);
  });
})();
/**
 * 如果未设置服务器地址，则弹窗提示设置
 */


function setServerUrl(serverUrl) {
  if (!serverUrl) {
    serverUrl = Store.get(gmstoreKeys.serverUrl);
  }

  if (!serverUrl) {
    Store.set(gmstoreKeys.serverUrl, window.prompt("请输入“亚马逊 Kindle 展示豆瓣评分”的服务地址：", "http://localhost:8361"));
  }
}
/**
 * 加载评分
 */


function loadScore() {
  $bookNames = $(selectors.bookName);
  $bookNames.each(function (i, element) {
    var $bookName = $(element),
        // 获取名称和作者，并去除多余描述
    name = $bookName.text().replace(/[（\\(【].*[）\\)】]|·|・/g, '').trim(),
        author = $bookName.parent().next().text().replace(/[（\\(【].*[）\\)】]|·|・|, |、|。|等*/g, '') // 去除出版日期
    .replace(/\s*\|\s*\d{4}-\d{2}/i, '').trim();
    console.log(name + " | " + author); // 豆瓣读书搜索名称和作者

    Http.get({
      url: serverUrl + '/douban/subjectSearch?name=' + name + '&author=' + author,
      dataType: HttpDataType.JSON,
      onload: function onload(response) {
        var code = response.code,
            msg = response.msg,
            data = response.data; // TODO 弹框提示错误

        if (code != 200) {
          return;
        }

        console.log(response);
        var score = 0;

        var _iterator = _createForOfIteratorHelper(data),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var book = _step.value;

            if (book.score) {
              score = book.score;
              break;
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }

        $bookName.prepend("<span style=\"color: #071; font-weight: bolder; font-size: large\">".concat(score, "</span>&nbsp;&nbsp;"));
      }
    });
  });
} // ==UserScript==
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
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LnRzIiwid2VicGFjazovL3RhbXBlcm1vbmtleS1zY3JpcHQtdXRpbHMvLi91dGlscy9zcmMvZ20vU3RvcmUudHMiLCJ3ZWJwYWNrOi8vdGFtcGVybW9ua2V5LXNjcmlwdC11dGlscy8uL3V0aWxzL3NyYy9nbS9lbnVtL0h0dHBEYXRhVHlwZS50cyIsIndlYnBhY2s6Ly90YW1wZXJtb25rZXktc2NyaXB0LXV0aWxzLy4vdXRpbHMvc3JjL2dtL0h0dHAudHMiLCJ3ZWJwYWNrOi8vdGFtcGVybW9ua2V5LXNjcmlwdC11dGlscy8uL2FtYXpvbi1raW5kbGUtZG91YmFuLXNjb3JlL3NyYy9tYWluLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGNsYXNzIFVybCB7XG4gIC8qKlxuICAgKiDmoLnmja4gVVJMIOiOt+WPlui3r+W+hO+8iOaOkumZpOWfn+WQje+8iVxuICAgKiBAcGFyYW0gdXJsIFVSTO+8jOm7mOiupOS4uuW9k+WJjeWcsOWdgFxuICAgKi9cbiAgc3RhdGljIGdldFBhdGgodXJsPzogc3RyaW5nKSB7XG4gICAgaWYgKCF1cmwpIHtcbiAgICAgIHVybCA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmO1xuICAgIH1cbiAgICBjb25zdCBob3N0ID0gd2luZG93LmxvY2F0aW9uLmhvc3Q7XG4gICAgcmV0dXJuIHVybC5zdWJzdHJpbmcodXJsLmluZGV4T2YoaG9zdCkgKyBob3N0Lmxlbmd0aCk7XG4gIH1cbn1cbiIsIi8qKlxuICog5a2Y5YKoXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0b3JlIHtcblxuICAvKipcbiAgICog6I635Y+WXG4gICAqIEBwYXJhbSBrZXkg6ZSuXG4gICAqL1xuICBzdGF0aWMgZ2V0KGtleTogc3RyaW5nKTogYW55IHtcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgcmV0dXJuIEdNX2dldFZhbHVlKGtleSk7XG4gIH1cblxuICAvKipcbiAgICog6K6+572uXG4gICAqIEBwYXJhbSBrZXkg6ZSuXG4gICAqIEBwYXJhbSB2YWx1ZSDlgLxcbiAgICovXG4gIHN0YXRpYyBzZXQoa2V5OiBzdHJpbmcsIHZhbHVlOiBhbnkpIHtcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgR01fc2V0VmFsdWUoa2V5LCB2YWx1ZSk7XG4gIH1cbn1cbiIsImV4cG9ydCBlbnVtIEh0dHBEYXRhVHlwZSB7XG4gIEpTT04gPSBcIlwiXG59IiwiaW1wb3J0IHtIdHRwRGF0YVR5cGV9IGZyb20gXCIuL2VudW0vSHR0cERhdGFUeXBlXCI7XG5pbXBvcnQgKiBhcyB1cmwgZnJvbSBcInVybFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIdHRwIHtcblxuICBzdGF0aWMgZ2V0KG9wdGlvbjogeyB1cmw6IHN0cmluZywgZGF0YVR5cGU/OiBIdHRwRGF0YVR5cGUsIG9ubG9hZDogRnVuY3Rpb24gfSkge1xuICAgIGNvbnN0IG9ubG9hZDEgPSBmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICBsZXQgcmVzcG9uc2UgPSByZXN1bHQucmVzcG9uc2U7XG4gICAgICAvLyDlsIbov5Tlm57lgLzovazmjaLkuLogSlNPTlxuICAgICAgaWYgKG9wdGlvbi5kYXRhVHlwZSA9PT0gSHR0cERhdGFUeXBlLkpTT04pIHtcbiAgICAgICAgcmVzcG9uc2UgPSBKU09OLnBhcnNlKHJlc3VsdC5yZXNwb25zZSk7XG4gICAgICB9XG4gICAgICBvcHRpb24ub25sb2FkKHJlc3BvbnNlKTtcbiAgICB9XG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIEdNX3htbGh0dHBSZXF1ZXN0KHttZXRob2Q6ICdHRVQnLCB1cmw6IG9wdGlvbi51cmwsIG9ubG9hZDogb25sb2FkMX0pO1xuICB9XG59XG4iLCJpbXBvcnQgVXJsVXRpbHMgZnJvbSAnLi4vLi4vdXRpbHMvc3JjL1VybCc7XG5pbXBvcnQgU3RvcmVVdGlscyBmcm9tICcuLi8uLi91dGlscy9zcmMvZ20vU3RvcmUnO1xuaW1wb3J0IEh0dHBVdGlscyBmcm9tICcuLi8uLi91dGlscy9zcmMvZ20vSHR0cCc7XG5pbXBvcnQge0h0dHBEYXRhVHlwZX0gZnJvbSBcIi4uLy4uL3V0aWxzL3NyYy9nbS9lbnVtL0h0dHBEYXRhVHlwZVwiO1xuXG5jb25zdCBzZWxlY3RvcnMgPSB7XG4gICAgLy8g5Lmm5ZCN6ZO+5o6lXG4gICAgYm9va05hbWU6ICcuc2ctY29sLWlubmVyIGgyIGFbaHJlZl49XCIvZHAvXCJdJyxcbiAgICAvLyDliIbpobXmjInpkq5cbiAgICBwYWdlU3RyaXA6ICcucy1wYWdpbmF0aW9uLXN0cmlwIGEnLFxuICAgIC8vIOW3sumAieS4reeahOWIhumhteaMiemSru+8iOW9k+WJjemhte+8iVxuICAgIHBhZ2VTZWxlY3RlZDogJy5zLXBhZ2luYXRpb24taXRlbS5zLXBhZ2luYXRpb24tc2VsZWN0ZWQnLFxuICAgIC8vIOWIhumhteaMiemSrlxuICAgIHBhZ2VCdG46ICcucy1wYWdpbmF0aW9uLWl0ZW0ucy1wYWdpbmF0aW9uLWJ1dHRvbicsXG4gIH0sXG4gIGdtc3RvcmVLZXlzID0ge1xuICAgIHNlcnZlclVybDogJ3NlcnZlclVybCcsXG4gIH0sXG4gIC8vIOacjeWKoeWcsOWdgFxuICBzZXJ2ZXJVcmwgPSBTdG9yZVV0aWxzLmdldChnbXN0b3JlS2V5cy5zZXJ2ZXJVcmwpO1xuXG4vLyDkuablkI3vvIznlKjkuo7liKTmlq3mmK/lkKbmjaLpobVcbmxldCAkYm9va05hbWVzO1xuXG4oKCkgPT4ge1xuICAndXNlIHN0cmljdCc7XG5cbiAgbGV0IHVybFBhdGggPSBVcmxVdGlscy5nZXRQYXRoKCk7XG4gIC8vIOWIl+ihqOaIluaQnOe0oumhtemdolxuICBpZiAodXJsUGF0aC5zdGFydHNXaXRoKCcvcycpICYmIHVybFBhdGguaW5kZXhPZigncmg9bicpICE9IC0xKSB7XG4gICAgLy8gU3RvcmVVdGlscy5zZXQoZ21zdG9yZUtleXMuc2VydmVyVXJsLCB3aW5kb3cucHJvbXB0KFwi6K+36L6T5YWl4oCc5Lqa6ams6YCKIEtpbmRsZSDlsZXnpLrosYbnk6Por4TliIbigJ3nmoTmnI3liqHlnLDlnYDvvJpcIiwgXCJodHRwOi8vbG9jYWxob3N0OjgzNjFcIikpO1xuICAgIGxvYWRTY29yZSgpO1xuICAgIHNldFNlcnZlclVybChzZXJ2ZXJVcmwpO1xuICB9XG5cbiAgLy8g5YiG6aG15pON5L2c5ZCO6YeN5paw5Yqg6L295YiG5pWwXG4gICQoc2VsZWN0b3JzLnBhZ2VTdHJpcCkub24oJ2NsaWNrJywgZG9jdW1lbnQsICgpID0+IHtcbiAgICBjb25zdCB0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBpZiAoJGJvb2tOYW1lcyAhPSAkKHNlbGVjdG9ycy5ib29rTmFtZSlcbiAgICAgICAgLy8g5Yiw5pyA5ZCO5LiA6aG15LqGIOaIliDmnIkgMTYg5p2h77yI5q+P6aG15p2h5pWw77yJXG4gICAgICAgICYmICghJChzZWxlY3RvcnMucGFnZVNlbGVjdGVkKS5uZXh0KHNlbGVjdG9ycy5wYWdlQnRuKSB8fCAkKHNlbGVjdG9ycy5ib29rTmFtZSkubGVuZ3RoID09IDE2KSkge1xuICAgICAgICBsb2FkU2NvcmUoKTtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHQpO1xuICAgICAgfVxuICAgIH0sIDUwMCk7XG4gIH0pXG59KSgpO1xuXG4vKipcbiAqIOWmguaenOacquiuvue9ruacjeWKoeWZqOWcsOWdgO+8jOWImeW8ueeql+aPkOekuuiuvue9rlxuICovXG5mdW5jdGlvbiBzZXRTZXJ2ZXJVcmwoc2VydmVyVXJsKSB7XG4gIGlmICghc2VydmVyVXJsKSB7XG4gICAgc2VydmVyVXJsID0gU3RvcmVVdGlscy5nZXQoZ21zdG9yZUtleXMuc2VydmVyVXJsKVxuICB9XG4gIGlmICghc2VydmVyVXJsKSB7XG4gICAgU3RvcmVVdGlscy5zZXQoZ21zdG9yZUtleXMuc2VydmVyVXJsLFxuICAgICAgd2luZG93LnByb21wdChcIuivt+i+k+WFpeKAnOS6mumprOmAiiBLaW5kbGUg5bGV56S66LGG55Oj6K+E5YiG4oCd55qE5pyN5Yqh5Zyw5Z2A77yaXCIsIFwiaHR0cDovL2xvY2FsaG9zdDo4MzYxXCIpXG4gICAgKTtcbiAgfVxufVxuXG4vKipcbiAqIOWKoOi9veivhOWIhlxuICovXG5mdW5jdGlvbiBsb2FkU2NvcmUoKSB7XG4gICRib29rTmFtZXMgPSAkKHNlbGVjdG9ycy5ib29rTmFtZSk7XG4gICRib29rTmFtZXMuZWFjaCgoaSwgZWxlbWVudCkgPT4ge1xuICAgIGNvbnN0ICRib29rTmFtZSA9ICQoZWxlbWVudCksXG4gICAgICAvLyDojrflj5blkI3np7DlkozkvZzogIXvvIzlubbljrvpmaTlpJrkvZnmj4/ov7BcbiAgICAgIG5hbWUgPSAkYm9va05hbWUudGV4dCgpLnJlcGxhY2UoL1vvvIhcXFxcKOOAkF0uKlvvvIlcXFxcKeOAkV18wrd844O7L2csICcnKS50cmltKCksXG4gICAgICBhdXRob3IgPSAkYm9va05hbWUucGFyZW50KCkubmV4dCgpLnRleHQoKS5yZXBsYWNlKC9b77yIXFxcXCjjgJBdLipb77yJXFxcXCnjgJFdfMK3fOODu3wsIHzjgIF844CCfOetiSovZywgJycpXG4gICAgICAgIC8vIOWOu+mZpOWHuueJiOaXpeacn1xuICAgICAgICAucmVwbGFjZSgvXFxzKlxcfFxccypcXGR7NH0tXFxkezJ9L2ksICcnKS50cmltKCk7XG4gICAgY29uc29sZS5sb2cobmFtZSArIFwiIHwgXCIgKyBhdXRob3IpO1xuXG4gICAgLy8g6LGG55Oj6K+75Lmm5pCc57Si5ZCN56ew5ZKM5L2c6ICFXG4gICAgSHR0cFV0aWxzLmdldCh7XG4gICAgICB1cmw6IHNlcnZlclVybCArICcvZG91YmFuL3N1YmplY3RTZWFyY2g/bmFtZT0nICsgbmFtZSArICcmYXV0aG9yPScgKyBhdXRob3IsXG4gICAgICBkYXRhVHlwZTogSHR0cERhdGFUeXBlLkpTT04sXG4gICAgICBvbmxvYWQ6IChyZXNwb25zZSkgPT4ge1xuICAgICAgICBjb25zdCBjb2RlID0gcmVzcG9uc2UuY29kZSwgbXNnID0gcmVzcG9uc2UubXNnLCBkYXRhID0gcmVzcG9uc2UuZGF0YTtcbiAgICAgICAgLy8gVE9ETyDlvLnmoYbmj5DnpLrplJnor69cbiAgICAgICAgaWYgKGNvZGUgIT0gMjAwKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xuXG4gICAgICAgIGxldCBzY29yZSA9IDA7XG4gICAgICAgIGZvciAoY29uc3QgYm9vayBvZiBkYXRhKSB7XG4gICAgICAgICAgaWYgKGJvb2suc2NvcmUpIHtcbiAgICAgICAgICAgIHNjb3JlID0gYm9vay5zY29yZTtcbiAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgICRib29rTmFtZS5wcmVwZW5kKGA8c3BhbiBzdHlsZT1cImNvbG9yOiAjMDcxOyBmb250LXdlaWdodDogYm9sZGVyOyBmb250LXNpemU6IGxhcmdlXCI+JHtzY29yZX08L3NwYW4+Jm5ic3A7Jm5ic3A7YCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0pXG59XG5cbi8vID09VXNlclNjcmlwdD09XG4vLyBAbmFtZSAgICAgICAgIOS6mumprOmAiiBLaW5kbGUg5bGV56S66LGG55Oj6K+E5YiGXG4vLyBAbmFtZXNwYWNlICAgIGh0dHA6Ly90YW1wZXJtb25rZXkubmV0L1xuLy8gQHZlcnNpb24gICAgICAwLjAuMVxuLy8gQGRlc2NyaXB0aW9uICDkuprpqazpgIogS2luZGxlIOWxleekuuixhueTo+ivhOWIhu+8jOebruWJjeS7heaUr+aMgeS4reS6muOAglxuLy8gQGF1dGhvciAgICAgICBkdWFubHVhblxuLy8gQGxpY2Vuc2UgICAgICBBcGFjaGUgMi4wXG4vLyBAbWF0Y2ggICAgICAgICo6Ly93d3cuYW1hem9uLmNuLypcbi8vIEBpY29uICAgICAgICAgaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9zMi9mYXZpY29ucz9zej02NCZkb21haW49YW1hem9uLmNuXG4vLyBAcmVxdWlyZSAgICAgIGh0dHBzOi8vY2RuLmJvb3RjZG4ubmV0L2FqYXgvbGlicy9qcXVlcnkvMy42LjAvanF1ZXJ5LnNsaW0ubWluLmpzXG4vLyBAcmVxdWlyZSAgICAgIGh0dHBzOi8vY2RuLmJvb3RjZG4ubmV0L2FqYXgvbGlicy9saW1vbnRlLXN3ZWV0YWxlcnQyLzExLjQuMTQvc3dlZXRhbGVydDIuYWxsLm1pbi5qc1xuLy8gQHJlcXVpcmUgICAgICBodHRwczovL2Nkbi5ib290Y2RuLm5ldC9hamF4L2xpYnMvbGltb250ZS1zd2VldGFsZXJ0Mi8xMS40LjE0L3N3ZWV0YWxlcnQyLm1pbi5jc3Ncbi8vIEBncmFudCAgICAgICAgR01feG1saHR0cFJlcXVlc3Rcbi8vIEBncmFudCAgICAgICAgR01fZ2V0VmFsdWVcbi8vIEBncmFudCAgICAgICAgR01fc2V0VmFsdWVcbi8vID09L1VzZXJTY3JpcHQ9PVxuIl0sIm5hbWVzIjpbIlVybCIsInVybCIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiIsImhvc3QiLCJzdWJzdHJpbmciLCJpbmRleE9mIiwibGVuZ3RoIiwiU3RvcmUiLCJrZXkiLCJHTV9nZXRWYWx1ZSIsInZhbHVlIiwiR01fc2V0VmFsdWUiLCJIdHRwRGF0YVR5cGUiLCJIdHRwIiwib3B0aW9uIiwib25sb2FkMSIsInJlc3VsdCIsInJlc3BvbnNlIiwiZGF0YVR5cGUiLCJKU09OIiwicGFyc2UiLCJvbmxvYWQiLCJHTV94bWxodHRwUmVxdWVzdCIsIm1ldGhvZCIsIlVybFV0aWxzIiwiU3RvcmVVdGlscyIsIkh0dHBVdGlscyIsInNlbGVjdG9ycyIsImJvb2tOYW1lIiwicGFnZVN0cmlwIiwicGFnZVNlbGVjdGVkIiwicGFnZUJ0biIsImdtc3RvcmVLZXlzIiwic2VydmVyVXJsIiwiZ2V0IiwiJGJvb2tOYW1lcyIsInVybFBhdGgiLCJnZXRQYXRoIiwic3RhcnRzV2l0aCIsImxvYWRTY29yZSIsInNldFNlcnZlclVybCIsIiQiLCJvbiIsImRvY3VtZW50IiwidCIsInNldFRpbWVvdXQiLCJuZXh0IiwiY2xlYXJUaW1lb3V0Iiwic2V0IiwicHJvbXB0IiwiZWFjaCIsImkiLCJlbGVtZW50IiwiJGJvb2tOYW1lIiwibmFtZSIsInRleHQiLCJyZXBsYWNlIiwidHJpbSIsImF1dGhvciIsInBhcmVudCIsImNvbnNvbGUiLCJsb2ciLCJjb2RlIiwibXNnIiwiZGF0YSIsInNjb3JlIiwiYm9vayIsInByZXBlbmQiXSwic291cmNlUm9vdCI6IiJ9