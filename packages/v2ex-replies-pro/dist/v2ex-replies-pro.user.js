// ==UserScript==
// @name         V2EX 主题回复增强
// @namespace    http://tampermonkey.net/
// @version      0.0.4
// @author       duanluan
// @description  增强 V2EX 主题的回复。
// @license      Apache-2.0; https://www.apache.org/licenses/LICENSE-2.0.txt
// @icon         https://v2ex.com/static/favicon.ico
// @match        *://*.v2ex.com/*
// @require      https://cdn.jsdelivr.net/npm/moment@2.29.4/moment.js
// @require      https://cdn.jsdelivr.net/npm/moment@2.29.4/locale/zh-cn.js
// @require      https://cdn.jsdelivr.net/npm/winbox@0.2.6/dist/js/winbox.min.js
// @require      https://cdn.jsdelivr.net/npm/jquery@3.6.1/dist/jquery.min.js
// @require      https://cdn.jsdelivr.net/npm/layer-src@3.5.1/dist/layer.js
// @require      data:application/javascript,GM_addStyle('%40import%20%22https%3A%2F%2Fcdn.bootcdn.net%2Fajax%2Flibs%2Flayer%2F3.5.1%2Ftheme%2Fdefault%2Flayer.min.css%22%3B')%3B
// @connect      www.v2ex.com
// @connect      v2ex.com
// @resource     winbox/dist/css/winbox.min.css  https://cdn.jsdelivr.net/npm/winbox@0.2.6/dist/css/winbox.min.css
// @grant        GM_addStyle
// @grant        GM_getResourceText
// @grant        GM_getValue
// @grant        GM_setValue
// @grant        GM_info
// @grant        GM_xmlhttpRequest
// @grant        GM_registerMenuCommand
// @grant        GM_unregisterMenuCommand
// @copyright    2022, duanluan (https://github.com/duanluan)
// ==/UserScript==

var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
(function($$1, layer2, moment2, WinBox2) {
  var _a, _b;
  "use strict";
  const _interopDefaultLegacy = (e) => e && typeof e === "object" && "default" in e ? e : { default: e };
  const $__default = /* @__PURE__ */ _interopDefaultLegacy($$1);
  const layer__default = /* @__PURE__ */ _interopDefaultLegacy(layer2);
  const moment__default = /* @__PURE__ */ _interopDefaultLegacy(moment2);
  const WinBox__default = /* @__PURE__ */ _interopDefaultLegacy(WinBox2);
  var HttpDataType = /* @__PURE__ */ ((HttpDataType2) => {
    HttpDataType2["JSON"] = "JSON";
    return HttpDataType2;
  })(HttpDataType || {});
  var r = (_a = Reflect.get(document, "__monkeyWindow")) != null ? _a : window;
  r.GM;
  r.unsafeWindow = (_b = r.unsafeWindow) != null ? _b : window;
  r.unsafeWindow;
  var t = r.GM_info;
  r.GM_cookie;
  var u = (...e) => r.GM_setValue(...e), m = (...e) => r.GM_registerMenuCommand(...e), w = (...e) => r.GM_unregisterMenuCommand(...e), b = (...e) => r.GM_xmlhttpRequest(...e), h = (...e) => r.GM_getValue(...e);
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
  class Info {
    static get() {
      return t.script;
    }
    static getName() {
      return this.get().name;
    }
    static getVersion() {
      return this.get().version;
    }
  }
  class Store {
    static get(key) {
      return h(key, void 0);
    }
    static set(key, value) {
      u(key, value);
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
    static registerAll() {
      CommonOptions.registerAll("https://www.v2ex.com/settings", this.options);
    }
    static loadInV2ex() {
      if (location.href.indexOf("v2ex.com/settings") == -1) {
        return;
      }
      const selector = {
        menuTab: "a.tab",
        currentMenuTab: "a.tab_current",
        scriptOptions: "#script-options",
        scriptContent: "#Main .box",
        v2exTokenInput: 'input[name="v2exToken"]',
        saveOptionsBtn: "#save-options"
      }, $body = $__default.default(document.body), $menuTab = $__default.default(selector.menuTab);
      $menuTab.parent().append(
        `<a id="script-options" class="tab" href="javascript:void(0);">\u811A\u672C\u8BBE\u7F6E</a>`
      );
      $body.on("click", selector.scriptOptions, () => {
        const $currentMenuTab = $__default.default(selector.currentMenuTab);
        $currentMenuTab.removeClass("tab_current");
        $currentMenuTab.addClass("tab");
        const $scriptOptions = $__default.default(selector.scriptOptions);
        $scriptOptions.removeClass("tab");
        $scriptOptions.addClass("tab_current");
        $__default.default(selector.scriptContent + " div:gt(1)").remove();
        $__default.default(selector.scriptContent).append(`
        <form>
          <div class="inner">
            <div class="topic_content markdown_body">
              <p>\u8BF7\u5728\u8FD9\u586B\u5199\u4F60\u7684 <a href="https://www.v2ex.com/settings/tokens" target="_blank">V2EX Token</a></p>          
            </div>
            <div class="sep20"></div>
            <div class="social-settings-form">
              <div>
                <div>V2EX Token</div>
                <input type="password" class="sl" name="v2exToken" value="${JSON.parse(Store.get(this.Keys.v2exToken)).value}">
              </div>
            </div>
          </div>
          <div class="cell_ops">
            <input id="save-options" type="submit" class="super normal button" value="Save">
          </div>
        </form>
      `);
        $body.on("click", selector.saveOptionsBtn, () => {
          const token = $__default.default(selector.v2exTokenInput).val();
          Store.set(
            this.Keys.v2exToken,
            JSON.stringify({
              ...JSON.parse(Store.get(this.Keys.v2exToken)),
              ...{ value: token }
            })
          );
          layer__default.default.msg("\u4FDD\u5B58\u6210\u529F");
          return false;
        });
      });
    }
  };
  let Options = _Options;
  __publicField(Options, "Keys", {
    v2exToken: "v2exToken"
  });
  __publicField(Options, "options", [
    {
      label: "V2EX Token",
      name: _Options.Keys.v2exToken,
      version: 1,
      value: "",
      menuCmdId: null
    }
  ]);
  class V2ex {
    static async checkToken() {
      const token = JSON.parse(Store.get(Options.Keys.v2exToken)).value;
      if (!token && location.href.indexOf("v2ex.com/settings") == -1) {
        layer__default.default.msg(
          "\u8BF7\u5148\u5728\u201C\u811A\u672C\u8BBE\u7F6E\u201D\u4E2D\u586B\u5199 Token\uFF01",
          { icon: 4, offset: "rb" },
          () => {
            window.open("https://www.v2ex.com/settings", "_blank");
          }
        );
        return false;
      }
      const result = await Request.get({
        url: this.BASE_URL + "token",
        dataType: HttpDataType.JSON,
        synchronous: true,
        headers: {
          Authorization: "Bearer " + token
        }
      });
      if (!result["success"]) {
        layer__default.default.msg(Info.getName() + "\uFF1A" + result["message"], {
          icon: 2,
          offset: "rb",
          time: 5e3
        });
        return false;
      }
      return true;
    }
    static async getReplies(topicId2, page) {
      const result = await Request.get({
        url: this.BASE_URL + "topics/" + topicId2 + "/replies" + (page ? "?p=" + page : ""),
        dataType: HttpDataType.JSON,
        synchronous: true,
        headers: {
          Authorization: "Bearer " + JSON.parse(Store.get(Options.Keys.v2exToken)).value
        }
      });
      if (!result["success"]) {
        console.warn(Info.getName() + "\uFF1A" + result["message"]);
        return;
      }
      return result["result"];
    }
  }
  __publicField(V2ex, "BASE_URL", "https://www.v2ex.com/api/v2/");
  const _Replay = class {
    static async run() {
      if (location.href.indexOf("v2ex.com/t/") === -1) {
        return;
      }
      if (!await V2ex.checkToken()) {
        return;
      }
      const selector = {
        repliesBox: "#Main .box:eq(1)",
        allReplies: "#Main .box:eq(1) .cell:not(:eq(0))",
        repliesNumber: "#Main .box:eq(1) .gray",
        opUserName: ".header .gray a:eq(0)",
        atLink: ".at-link",
        taSay: ".ta-say"
      }, $body = $__default.default(document.body), $head = $__default.default(document.head), $allReplies = $__default.default(selector.allReplies), $repliesNumber = $__default.default(selector.repliesNumber), $opUserName = $__default.default(selector.opUserName);
      $head.append(`<style>
      .winbox${selector.taSay} {
        border-shadow: 0 14px 12px rgb(0 0 0 / 25%), 0 10px 10px rgb(0 0 0 / 22%) !important;
      }
      .winbox${selector.taSay} .wb-drag {
        background-color: #e2e2e2;
        color: #666;
      }
    </style>`);
      $allReplies.hide();
      const repliesNumber = $repliesNumber.text().substring(0, $repliesNumber.text().indexOf("\u6761"));
      const opUserName = $opUserName.text();
      const replies = [];
      for (let i = 1; i <= Math.ceil(Number(repliesNumber) / 20); i++) {
        replies.push(...await V2ex.getReplies(topicId, i));
      }
      const db = openDatabase(
        "v2ex-replies-pro",
        "0.0.1",
        Info.getName(),
        10 * 1024 * 1024
      );
      db.transaction(
        (tx) => {
          tx.executeSql(`drop table if exists rendered_replies`);
        },
        (_error) => {
        },
        () => {
          start();
        }
      );
      const start = () => {
        for (let i = 0; i < replies.length; i++) {
          const reply = replies[i], replyId = reply.id, created = reply.created, created1 = Number(created + "000"), createdFormat = moment__default.default(created1).format("YYYY-MM-DD HH:mm:ss"), createdAgo = moment__default.default(created1).fromNow(), member = reply.member, username = member.username, avatar = member.avatar, replyDivId = "r_" + replyId, $replyDivId = $__default.default("#" + replyDivId), $fade = $replyDivId.find(".fade"), fadeHtml = $fade.length === 0 ? "" : $fade.prop("outerHTML");
          $replyDivId.remove();
          let contentRendered = reply.content_rendered, atSearchStartIndex = 0;
          const atSearchStr = '@<a href="/member/';
          while (true) {
            let atLinkIndex = contentRendered.indexOf(
              atSearchStr,
              atSearchStartIndex
            );
            if (atLinkIndex === -1) {
              break;
            }
            let atUsername = contentRendered.substring(
              atLinkIndex + atSearchStr.length,
              contentRendered.indexOf('">', atLinkIndex)
            );
            const replaceStr = `@<a class="${selector.atLink.substring(
              1
            )}" data-reply-div-id="${replyDivId}" data-username="${atUsername}" data-created="${created}" onclick="return false;" href="/member/${atUsername}`;
            contentRendered = contentRendered.replaceAll(
              `@<a href="/member/${atUsername}`,
              replaceStr
            );
            atSearchStartIndex = atLinkIndex + replaceStr.length;
          }
          const html = `
          <!-- \u6B64\u5904\u7684 style \u4E3A\u6A21\u4EFF .cell \u6837\u5F0F -->
          <div id="${replyDivId}" style="font-size: 14px; line-height: 150%; border-bottom: 1px solid #e2e2e2">
            <div style="display: flex;">
              <div style="display: flex; flex-direction: column; align-items: center; background-color: #fafbfc; padding: 12px 0 10px 0">
                ${username === opUserName ? `
                  <div style="height: 0">
                    <div style="position: relative; left: 44px; top: -12px; background-image: linear-gradient(225deg, #558bf6 23px, #fafbfc 0); width: 32px; height: 32px;">
                      <div class="badges" style="color: white; transform: rotate(45deg); position: relative; top: -1px; right: -5px">OP</div>
                    </div>
                  </div>
                ` : ""}
                <img src="${avatar}" class="avatar" alt="${username}" style="width: 48px">
                <div style="width: 120px;">
                  <a href="/member/${username}" class="dark">${username}</a>
                </div>
              </div>
              <div style="padding: 10px 10px 10px 12px; width: 100%">
                <div style="display: flex; justify-content: space-between">
                  <div>
                    &nbsp;<span class="ago" title="${createdFormat}">${createdAgo}</span>&nbsp;${fadeHtml}
                  </div>
                  <div>
                    <!-- \u6B64\u5904\u4E3A\u539F\u5185\u5BB9\u4FDD\u6301\u4E0D\u53D8 -->
                    <div id="thank_area_${replyId}" class="thank_area"><a href="#;" onclick="if (confirm('\u786E\u8BA4\u8981\u4E0D\u518D\u663E\u793A\u6765\u81EA @${username} \u7684\u8FD9\u6761\u56DE\u590D\uFF1F')) { ignoreReply(${replyId}, ${once}); }" class="thank" style="color: #ccc;">\u9690\u85CF</a> &nbsp; &nbsp; <a href="#;" onclick="if (confirm('\u786E\u8BA4\u82B1\u8D39 10 \u4E2A\u94DC\u5E01\u5411 @${username} \u7684\u8FD9\u6761\u56DE\u590D\u53D1\u9001\u611F\u8C22\uFF1F')) { thankReply(${replyId}); }" class="thank">\u611F\u8C22\u56DE\u590D\u8005</a></div> &nbsp; <a href="#;" onclick="replyOne('${username}');"><img src="/static/img/reply_neue.png" align="absmiddle" border="0" alt="Reply" width="20"></a> &nbsp;&nbsp; <span class="no">1</span>
                  </div>
                </div>
                <div style="text-align: left">
                  <span>${contentRendered}</span>
                </div>
              </div>
            </div>
          </div>
        `;
          db.transaction(
            (tx) => {
              tx.executeSql(
                `create table if not exists rendered_replies (id unique, username, created, html, content_rendered)`
              );
              tx.executeSql(
                `insert or replace into rendered_replies (id, username, created, html, content_rendered) values (?, ?, ?, ?, ?)`,
                [replyId, username, created, html, contentRendered]
              );
            },
            (_error) => {
            },
            () => {
              if (i === replies.length - 1) {
                showReplies();
              }
            }
          );
        }
      };
      const showReplies = () => {
        db.transaction(
          (tx) => {
            tx.executeSql(
              `select * from rendered_replies order by created`,
              [],
              (_tx, results) => {
                for (const row of results.rows) {
                  $__default.default(selector.repliesBox).append(row.html);
                }
                $body.on("click", selector.atLink, function() {
                  const $this = $__default.default(this);
                  showTaSay(
                    $this.data("replyDivId"),
                    $this.data("username"),
                    $this.data("created")
                  );
                });
              }
            );
          }
        );
      };
      const showTaSay = (replyDivId, username, created) => {
        var _a2;
        (_a2 = _Replay.winbox) == null ? void 0 : _a2.close();
        console.log(replyDivId);
        const $reply = $__default.default("#" + replyDivId);
        $reply.css("border", "2px solid");
        $__default.default("html,body").animate(
          { scrollTop: $reply.offset().top - $__default.default(window).height() / 2 },
          500
        );
        db.transaction(
          (tx) => {
            tx.executeSql(
              `select * from rendered_replies where username = ? order by created`,
              [username],
              (_tx, results) => {
                let html = "", isGeByPrev = true, isHighlighted = false;
                for (let i = 0; i < results.rows.length; i++) {
                  const row = results.rows[i];
                  let borderStyle = "border-bottom: 1px solid #e2e2e2;";
                  if (!(created > row.created) && isGeByPrev) {
                    borderStyle += "border-top: 2px solid";
                    isHighlighted = true;
                  } else if (i === results.rows.length - 1 && !isHighlighted) {
                    borderStyle = "border-bottom: 2px solid";
                  }
                  html += `
              <div style="${borderStyle}">
                ${$__default.default(row.html).find(".ago").parent().prop("outerHTML")}
                <div style="padding-bottom: 5px">${row.content_rendered}</div>
              </div>
            `;
                  isGeByPrev = created > row.created;
                }
                _Replay.winbox = new WinBox__default.default({
                  class: selector.taSay.substring(1),
                  title: username + " \u8BF4\u4E86\u4EC0\u4E48\uFF1F",
                  x: localStorage.getItem("ta_say_x") || "right",
                  y: localStorage.getItem("ta_say_y") || "bottom",
                  width: localStorage.getItem("ta_say_width") || "540px",
                  height: localStorage.getItem("ta_say_height") || "70%",
                  html: `<div style="padding: 10px; font-size: 14px">${html}</div>`,
                  onresize: (width, height) => {
                    localStorage.setItem("ta_say_width", width + "px");
                    localStorage.setItem("ta_say_height", height + "px");
                  },
                  onmove: (x, y) => {
                    localStorage.setItem("ta_say_x", x + "");
                    localStorage.setItem("ta_say_y", y + "");
                  },
                  onclose: () => {
                    $reply.css("border", "none");
                    $reply.css("border-bottom", "1px solid #e2e2e2");
                    _Replay.winbox = null;
                    return false;
                  }
                });
              }
            );
          }
        );
      };
    }
  };
  let Replay = _Replay;
  __publicField(Replay, "winbox");
  const cssLoader = (e) => {
    const t2 = GM_getResourceText(e);
    return GM_addStyle(t2), t2;
  };
  cssLoader("winbox/dist/css/winbox.min.css");
  (async () => {
    Options.registerAll();
    Options.loadInV2ex();
    Replay.run();
  })();
})($, layer, moment, WinBox);
