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

var Request = /*#__PURE__*/function () {
  function Request() {
    Store_classCallCheck(this, Request);
  }

  Store_createClass(Request, null, [{
    key: "get",
    value: function get(key) {
      // @ts-ignore
      return GM_getValue(key);
    }
  }, {
    key: "set",
    value: function set(key, value) {
      // @ts-ignore
      return GM_setValue(key, value);
    }
  }]);

  return Request;
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
serverUrl = Request.get(gmstoreKeys.serverUrl); // 书名，用于判断是否换页

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
    serverUrl = Request.get(gmstoreKeys.serverUrl);
  }

  if (!serverUrl) {
    Request.set(gmstoreKeys.serverUrl, window.prompt("请输入“亚马逊 Kindle 展示豆瓣评分”的服务地址：", "http://localhost:8361"));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LE9BQU8sQ0FBQ0MsR0FBUixDQUFZUCxJQUFJLEdBQUcsS0FBUCxHQUFlSSxNQUEzQixFQVA4QixDQVM5Qjs7SUFDQWhDLFFBQUEsQ0FBYztNQUNaM0IsR0FBRyxFQUFFa0MsU0FBUyxHQUFHLDZCQUFaLEdBQTRDcUIsSUFBNUMsR0FBbUQsVUFBbkQsR0FBZ0VJLE1BRHpEO01BRVp4QyxRQUFRLEVBQUVOLGlCQUZFO01BR1pTLE1BQU0sRUFBRSxnQkFBQ0osUUFBRCxFQUFjO1FBQ3BCLElBQU02QyxJQUFJLEdBQUc3QyxRQUFRLENBQUM2QyxJQUF0QjtRQUFBLElBQTRCQyxHQUFHLEdBQUc5QyxRQUFRLENBQUM4QyxHQUEzQztRQUFBLElBQWdEQyxJQUFJLEdBQUcvQyxRQUFRLENBQUMrQyxJQUFoRSxDQURvQixDQUVwQjs7UUFDQSxJQUFJRixJQUFJLElBQUksR0FBWixFQUFpQjtVQUNmO1FBQ0Q7O1FBRURGLE9BQU8sQ0FBQ0MsR0FBUixDQUFZNUMsUUFBWjtRQUVBLElBQUlnRCxLQUFLLEdBQUcsQ0FBWjs7UUFUb0IsMkNBVURELElBVkM7UUFBQTs7UUFBQTtVQVVwQixvREFBeUI7WUFBQSxJQUFkRSxJQUFjOztZQUN2QixJQUFJQSxJQUFJLENBQUNELEtBQVQsRUFBZ0I7Y0FDZEEsS0FBSyxHQUFHQyxJQUFJLENBQUNELEtBQWI7Y0FDQTtZQUNEO1VBQ0Y7UUFmbUI7VUFBQTtRQUFBO1VBQUE7UUFBQTs7UUFnQnBCWixTQUFTLENBQUNjLE9BQVYsOEVBQXNGRixLQUF0RjtNQUNEO0lBcEJXLENBQWQ7RUFzQkQsQ0FoQ0Q7QUFpQ0QsRUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQiIsInNvdXJjZXMiOlsid2VicGFjazovL3RhbXBlcm1vbmtleS1zY3JpcHQtdXRpbHMvLi91dGlscy9zcmMvVXJsLnRzIiwid2VicGFjazovL3RhbXBlcm1vbmtleS1zY3JpcHQtdXRpbHMvLi91dGlscy9zcmMvZ20vU3RvcmUudHMiLCJ3ZWJwYWNrOi8vdGFtcGVybW9ua2V5LXNjcmlwdC11dGlscy8uL3V0aWxzL3NyYy9nbS9lbnVtL0h0dHBEYXRhVHlwZS50cyIsIndlYnBhY2s6Ly90YW1wZXJtb25rZXktc2NyaXB0LXV0aWxzLy4vdXRpbHMvc3JjL2dtL0h0dHAudHMiLCJ3ZWJwYWNrOi8vdGFtcGVybW9ua2V5LXNjcmlwdC11dGlscy8uL2FtYXpvbi1raW5kbGUtZG91YmFuLXNjb3JlL3NyYy9tYWluLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGNsYXNzIFVybCB7XG4gIC8qKlxuICAgKiDmoLnmja4gVVJMIOiOt+WPlui3r+W+hO+8iOaOkumZpOWfn+WQje+8iVxuICAgKiBAcGFyYW0gdXJsIFVSTO+8jOm7mOiupOS4uuW9k+WJjeWcsOWdgFxuICAgKi9cbiAgc3RhdGljIGdldFBhdGgodXJsPzogc3RyaW5nKSB7XG4gICAgaWYgKCF1cmwpIHtcbiAgICAgIHVybCA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmO1xuICAgIH1cbiAgICBjb25zdCBob3N0ID0gd2luZG93LmxvY2F0aW9uLmhvc3Q7XG4gICAgcmV0dXJuIHVybC5zdWJzdHJpbmcodXJsLmluZGV4T2YoaG9zdCkgKyBob3N0Lmxlbmd0aCk7XG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlcXVlc3Qge1xuXG4gIHN0YXRpYyBnZXQoa2V5OiBzdHJpbmcpIHtcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgcmV0dXJuIEdNX2dldFZhbHVlKGtleSk7XG4gIH1cblxuICBzdGF0aWMgc2V0KGtleTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nKSB7XG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIHJldHVybiBHTV9zZXRWYWx1ZShrZXksIHZhbHVlKTtcbiAgfVxufVxuIiwiZXhwb3J0IGVudW0gSHR0cERhdGFUeXBlIHtcbiAgSlNPTiA9IFwiXCJcbn0iLCJpbXBvcnQge0h0dHBEYXRhVHlwZX0gZnJvbSBcIi4vZW51bS9IdHRwRGF0YVR5cGVcIjtcbmltcG9ydCAqIGFzIHVybCBmcm9tIFwidXJsXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEh0dHAge1xuXG4gIHN0YXRpYyBnZXQob3B0aW9uOiB7IHVybDogc3RyaW5nLCBkYXRhVHlwZT86IEh0dHBEYXRhVHlwZSwgb25sb2FkOiBGdW5jdGlvbiB9KSB7XG4gICAgY29uc3Qgb25sb2FkMSA9IGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgIGxldCByZXNwb25zZSA9IHJlc3VsdC5yZXNwb25zZTtcbiAgICAgIC8vIOWwhui/lOWbnuWAvOi9rOaNouS4uiBKU09OXG4gICAgICBpZiAob3B0aW9uLmRhdGFUeXBlID09PSBIdHRwRGF0YVR5cGUuSlNPTikge1xuICAgICAgICByZXNwb25zZSA9IEpTT04ucGFyc2UocmVzdWx0LnJlc3BvbnNlKTtcbiAgICAgIH1cbiAgICAgIG9wdGlvbi5vbmxvYWQocmVzcG9uc2UpO1xuICAgIH1cbiAgICAvLyBAdHMtaWdub3JlXG4gICAgR01feG1saHR0cFJlcXVlc3Qoe21ldGhvZDogJ0dFVCcsIHVybDogb3B0aW9uLnVybCwgb25sb2FkOiBvbmxvYWQxfSk7XG4gIH1cbn1cbiIsImltcG9ydCBVcmxVdGlscyBmcm9tICcuLi8uLi91dGlscy9zcmMvVXJsJztcbmltcG9ydCBTdG9yZVV0aWxzIGZyb20gJy4uLy4uL3V0aWxzL3NyYy9nbS9TdG9yZSc7XG5pbXBvcnQgSHR0cFV0aWxzIGZyb20gJy4uLy4uL3V0aWxzL3NyYy9nbS9IdHRwJztcbmltcG9ydCB7SHR0cERhdGFUeXBlfSBmcm9tIFwiLi4vLi4vdXRpbHMvc3JjL2dtL2VudW0vSHR0cERhdGFUeXBlXCI7XG5cbmNvbnN0IHNlbGVjdG9ycyA9IHtcbiAgICAvLyDkuablkI3pk77mjqVcbiAgICBib29rTmFtZTogJy5zZy1jb2wtaW5uZXIgaDIgYVtocmVmXj1cIi9kcC9cIl0nLFxuICAgIC8vIOWIhumhteaMiemSrlxuICAgIHBhZ2VTdHJpcDogJy5zLXBhZ2luYXRpb24tc3RyaXAgYScsXG4gICAgLy8g5bey6YCJ5Lit55qE5YiG6aG15oyJ6ZKu77yI5b2T5YmN6aG177yJXG4gICAgcGFnZVNlbGVjdGVkOiAnLnMtcGFnaW5hdGlvbi1pdGVtLnMtcGFnaW5hdGlvbi1zZWxlY3RlZCcsXG4gICAgLy8g5YiG6aG15oyJ6ZKuXG4gICAgcGFnZUJ0bjogJy5zLXBhZ2luYXRpb24taXRlbS5zLXBhZ2luYXRpb24tYnV0dG9uJyxcbiAgfSxcbiAgZ21zdG9yZUtleXMgPSB7XG4gICAgc2VydmVyVXJsOiAnc2VydmVyVXJsJyxcbiAgfSxcbiAgLy8g5pyN5Yqh5Zyw5Z2AXG4gIHNlcnZlclVybCA9IFN0b3JlVXRpbHMuZ2V0KGdtc3RvcmVLZXlzLnNlcnZlclVybCk7XG5cbi8vIOS5puWQje+8jOeUqOS6juWIpOaWreaYr+WQpuaNoumhtVxubGV0ICRib29rTmFtZXM7XG5cbigoKSA9PiB7XG4gICd1c2Ugc3RyaWN0JztcblxuICBsZXQgdXJsUGF0aCA9IFVybFV0aWxzLmdldFBhdGgoKTtcbiAgLy8g5YiX6KGo5oiW5pCc57Si6aG16Z2iXG4gIGlmICh1cmxQYXRoLnN0YXJ0c1dpdGgoJy9zJykgJiYgdXJsUGF0aC5pbmRleE9mKCdyaD1uJykgIT0gLTEpIHtcbiAgICAvLyBTdG9yZVV0aWxzLnNldChnbXN0b3JlS2V5cy5zZXJ2ZXJVcmwsIHdpbmRvdy5wcm9tcHQoXCLor7fovpPlhaXigJzkuprpqazpgIogS2luZGxlIOWxleekuuixhueTo+ivhOWIhuKAneeahOacjeWKoeWcsOWdgO+8mlwiLCBcImh0dHA6Ly9sb2NhbGhvc3Q6ODM2MVwiKSk7XG4gICAgbG9hZFNjb3JlKCk7XG4gICAgc2V0U2VydmVyVXJsKHNlcnZlclVybCk7XG4gIH1cblxuICAvLyDliIbpobXmk43kvZzlkI7ph43mlrDliqDovb3liIbmlbBcbiAgJChzZWxlY3RvcnMucGFnZVN0cmlwKS5vbignY2xpY2snLCBkb2N1bWVudCwgKCkgPT4ge1xuICAgIGNvbnN0IHQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGlmICgkYm9va05hbWVzICE9ICQoc2VsZWN0b3JzLmJvb2tOYW1lKVxuICAgICAgICAvLyDliLDmnIDlkI7kuIDpobXkuoYg5oiWIOaciSAxNiDmnaHvvIjmr4/pobXmnaHmlbDvvIlcbiAgICAgICAgJiYgKCEkKHNlbGVjdG9ycy5wYWdlU2VsZWN0ZWQpLm5leHQoc2VsZWN0b3JzLnBhZ2VCdG4pIHx8ICQoc2VsZWN0b3JzLmJvb2tOYW1lKS5sZW5ndGggPT0gMTYpKSB7XG4gICAgICAgIGxvYWRTY29yZSgpO1xuICAgICAgICBjbGVhclRpbWVvdXQodCk7XG4gICAgICB9XG4gICAgfSwgNTAwKTtcbiAgfSlcbn0pKCk7XG5cbi8qKlxuICog5aaC5p6c5pyq6K6+572u5pyN5Yqh5Zmo5Zyw5Z2A77yM5YiZ5by556qX5o+Q56S66K6+572uXG4gKi9cbmZ1bmN0aW9uIHNldFNlcnZlclVybChzZXJ2ZXJVcmwpIHtcbiAgaWYgKCFzZXJ2ZXJVcmwpIHtcbiAgICBzZXJ2ZXJVcmwgPSBTdG9yZVV0aWxzLmdldChnbXN0b3JlS2V5cy5zZXJ2ZXJVcmwpXG4gIH1cbiAgaWYgKCFzZXJ2ZXJVcmwpIHtcbiAgICBTdG9yZVV0aWxzLnNldChnbXN0b3JlS2V5cy5zZXJ2ZXJVcmwsXG4gICAgICB3aW5kb3cucHJvbXB0KFwi6K+36L6T5YWl4oCc5Lqa6ams6YCKIEtpbmRsZSDlsZXnpLrosYbnk6Por4TliIbigJ3nmoTmnI3liqHlnLDlnYDvvJpcIiwgXCJodHRwOi8vbG9jYWxob3N0OjgzNjFcIilcbiAgICApO1xuICB9XG59XG5cbi8qKlxuICog5Yqg6L296K+E5YiGXG4gKi9cbmZ1bmN0aW9uIGxvYWRTY29yZSgpIHtcbiAgJGJvb2tOYW1lcyA9ICQoc2VsZWN0b3JzLmJvb2tOYW1lKTtcbiAgJGJvb2tOYW1lcy5lYWNoKChpLCBlbGVtZW50KSA9PiB7XG4gICAgY29uc3QgJGJvb2tOYW1lID0gJChlbGVtZW50KSxcbiAgICAgIC8vIOiOt+WPluWQjeensOWSjOS9nOiAhe+8jOW5tuWOu+mZpOWkmuS9meaPj+i/sFxuICAgICAgbmFtZSA9ICRib29rTmFtZS50ZXh0KCkucmVwbGFjZSgvW++8iFxcXFwo44CQXS4qW++8iVxcXFwp44CRXXzCt3zjg7svZywgJycpLnRyaW0oKSxcbiAgICAgIGF1dGhvciA9ICRib29rTmFtZS5wYXJlbnQoKS5uZXh0KCkudGV4dCgpLnJlcGxhY2UoL1vvvIhcXFxcKOOAkF0uKlvvvIlcXFxcKeOAkV18wrd844O7fCwgfOOAgXzjgIJ8562JKi9nLCAnJylcbiAgICAgICAgLy8g5Y676Zmk5Ye654mI5pel5pyfXG4gICAgICAgIC5yZXBsYWNlKC9cXHMqXFx8XFxzKlxcZHs0fS1cXGR7Mn0vaSwgJycpLnRyaW0oKTtcbiAgICBjb25zb2xlLmxvZyhuYW1lICsgXCIgfCBcIiArIGF1dGhvcik7XG5cbiAgICAvLyDosYbnk6Por7vkuabmkJzntKLlkI3np7DlkozkvZzogIVcbiAgICBIdHRwVXRpbHMuZ2V0KHtcbiAgICAgIHVybDogc2VydmVyVXJsICsgJy9kb3ViYW4vc3ViamVjdFNlYXJjaD9uYW1lPScgKyBuYW1lICsgJyZhdXRob3I9JyArIGF1dGhvcixcbiAgICAgIGRhdGFUeXBlOiBIdHRwRGF0YVR5cGUuSlNPTixcbiAgICAgIG9ubG9hZDogKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgIGNvbnN0IGNvZGUgPSByZXNwb25zZS5jb2RlLCBtc2cgPSByZXNwb25zZS5tc2csIGRhdGEgPSByZXNwb25zZS5kYXRhO1xuICAgICAgICAvLyBUT0RPIOW8ueahhuaPkOekuumUmeivr1xuICAgICAgICBpZiAoY29kZSAhPSAyMDApIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XG5cbiAgICAgICAgbGV0IHNjb3JlID0gMDtcbiAgICAgICAgZm9yIChjb25zdCBib29rIG9mIGRhdGEpIHtcbiAgICAgICAgICBpZiAoYm9vay5zY29yZSkge1xuICAgICAgICAgICAgc2NvcmUgPSBib29rLnNjb3JlO1xuICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgJGJvb2tOYW1lLnByZXBlbmQoYDxzcGFuIHN0eWxlPVwiY29sb3I6ICMwNzE7IGZvbnQtd2VpZ2h0OiBib2xkZXI7IGZvbnQtc2l6ZTogbGFyZ2VcIj4ke3Njb3JlfTwvc3Bhbj4mbmJzcDsmbmJzcDtgKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSlcbn1cblxuLy8gPT1Vc2VyU2NyaXB0PT1cbi8vIEBuYW1lICAgICAgICAg5Lqa6ams6YCKIEtpbmRsZSDlsZXnpLrosYbnk6Por4TliIZcbi8vIEBuYW1lc3BhY2UgICAgaHR0cDovL3RhbXBlcm1vbmtleS5uZXQvXG4vLyBAdmVyc2lvbiAgICAgIDAuMC4xXG4vLyBAZGVzY3JpcHRpb24gIOS6mumprOmAiiBLaW5kbGUg5bGV56S66LGG55Oj6K+E5YiG77yM55uu5YmN5LuF5pSv5oyB5Lit5Lqa44CCXG4vLyBAYXV0aG9yICAgICAgIGR1YW5sdWFuXG4vLyBAbGljZW5zZSAgICAgIEFwYWNoZSAyLjBcbi8vIEBtYXRjaCAgICAgICAgKjovL3d3dy5hbWF6b24uY24vKlxuLy8gQGljb24gICAgICAgICBodHRwczovL3d3dy5nb29nbGUuY29tL3MyL2Zhdmljb25zP3N6PTY0JmRvbWFpbj1hbWF6b24uY25cbi8vIEByZXF1aXJlICAgICAgaHR0cHM6Ly9jZG4uYm9vdGNkbi5uZXQvYWpheC9saWJzL2pxdWVyeS8zLjYuMC9qcXVlcnkuc2xpbS5taW4uanNcbi8vIEByZXF1aXJlICAgICAgaHR0cHM6Ly9jZG4uYm9vdGNkbi5uZXQvYWpheC9saWJzL2xpbW9udGUtc3dlZXRhbGVydDIvMTEuNC4xNC9zd2VldGFsZXJ0Mi5hbGwubWluLmpzXG4vLyBAcmVxdWlyZSAgICAgIGh0dHBzOi8vY2RuLmJvb3RjZG4ubmV0L2FqYXgvbGlicy9saW1vbnRlLXN3ZWV0YWxlcnQyLzExLjQuMTQvc3dlZXRhbGVydDIubWluLmNzc1xuLy8gQGdyYW50ICAgICAgICBHTV94bWxodHRwUmVxdWVzdFxuLy8gQGdyYW50ICAgICAgICBHTV9nZXRWYWx1ZVxuLy8gQGdyYW50ICAgICAgICBHTV9zZXRWYWx1ZVxuLy8gPT0vVXNlclNjcmlwdD09XG4iXSwibmFtZXMiOlsiVXJsIiwidXJsIiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIiwiaG9zdCIsInN1YnN0cmluZyIsImluZGV4T2YiLCJsZW5ndGgiLCJSZXF1ZXN0Iiwia2V5IiwiR01fZ2V0VmFsdWUiLCJ2YWx1ZSIsIkdNX3NldFZhbHVlIiwiSHR0cERhdGFUeXBlIiwiSHR0cCIsIm9wdGlvbiIsIm9ubG9hZDEiLCJyZXN1bHQiLCJyZXNwb25zZSIsImRhdGFUeXBlIiwiSlNPTiIsInBhcnNlIiwib25sb2FkIiwiR01feG1saHR0cFJlcXVlc3QiLCJtZXRob2QiLCJVcmxVdGlscyIsIlN0b3JlVXRpbHMiLCJIdHRwVXRpbHMiLCJzZWxlY3RvcnMiLCJib29rTmFtZSIsInBhZ2VTdHJpcCIsInBhZ2VTZWxlY3RlZCIsInBhZ2VCdG4iLCJnbXN0b3JlS2V5cyIsInNlcnZlclVybCIsImdldCIsIiRib29rTmFtZXMiLCJ1cmxQYXRoIiwiZ2V0UGF0aCIsInN0YXJ0c1dpdGgiLCJsb2FkU2NvcmUiLCJzZXRTZXJ2ZXJVcmwiLCIkIiwib24iLCJkb2N1bWVudCIsInQiLCJzZXRUaW1lb3V0IiwibmV4dCIsImNsZWFyVGltZW91dCIsInNldCIsInByb21wdCIsImVhY2giLCJpIiwiZWxlbWVudCIsIiRib29rTmFtZSIsIm5hbWUiLCJ0ZXh0IiwicmVwbGFjZSIsInRyaW0iLCJhdXRob3IiLCJwYXJlbnQiLCJjb25zb2xlIiwibG9nIiwiY29kZSIsIm1zZyIsImRhdGEiLCJzY29yZSIsImJvb2siLCJwcmVwZW5kIl0sInNvdXJjZVJvb3QiOiIifQ==