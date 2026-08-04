/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 163:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {


// EXTERNAL MODULE: ./utils/src/gm/Store.ts
var Store = __webpack_require__(307);
;// ./discourse-pro/src/module/widescreenMode.ts
var widescreenStyleId = 'discourse-pro-widescreen-mode-style';
var topicMountObserver = null;

/**
 * 添加 history 的 pushState 和 replaceState 事件
 *
 * 参考：https://segmentfault.com/a/1190000017560688#item-4
 */
function addPushReplaceStateEvent() {
  var _wr = function _wr(type) {
    var orig = history[type];
    return function () {
      var rv = orig.apply(this, arguments);
      var e = new Event(type);
      // @ts-ignore
      e.arguments = arguments;
      window.dispatchEvent(e);
      return rv;
    };
  };
  history.pushState = _wr('pushState');
  history.replaceState = _wr('replaceState');
}

/**
 * 加载宽屏模式
 * @param options
 */
function loadWidescreenMode(options) {
  addPushReplaceStateEvent();
  var headerWrap = options.headerWrap,
    mainOutletWrapper = options.mainOutletWrapper,
    mainOutlet = options.mainOutlet;

  // 新版 Discourse 可能在脚本执行后才挂载页面布局，样式规则可自动覆盖后续出现的节点
  if ($('#' + widescreenStyleId).length === 0) {
    $(document.head).append("<style id=\"".concat(widescreenStyleId, "\">\n      ").concat(headerWrap, ",\n      ").concat(mainOutletWrapper, " {\n        max-width: 100% !important;\n      }\n      ").concat(mainOutlet, " {\n        width: 100% !important;\n      }\n    </style>"));
  }

  // console.debug('话题页首次加载宽屏模式 + 监听话题列表变化')
  // 话题页首次加载宽屏模式 + 监听话题列表变化
  loadWidescreenModeByTopicAndObserver(options);

  // 历史记录变化时话题页重新加载宽屏模式
  window.addEventListener('popstate', function () {
    // console.debug('历史记录变化时话题页重新加载宽屏模式')
    popstateAndPushStateListener(options);
  });
  // 单页面 pushState 切换页面时话题页重新加载宽屏模式
  window.addEventListener('pushState', function () {
    // console.debug('单页面 pushState 切换页面时话题页重新加载宽屏模式')
    popstateAndPushStateListener(options);
  });
  window.addEventListener('replaceState', function () {
    // console.debug('单页面 replaceState 切换页面时话题页重新加载宽屏模式')
    popstateAndPushStateListener(options);
  });
}

/**
 * popstate 和 pushState 事件监听
 * @param options 选项
 */
function popstateAndPushStateListener(options) {
  if (location.href.indexOf('/t/') !== -1) {
    // 等待 .post-stream 加载完成
    var interval = setInterval(function () {
      if ($(options.postStream).length > 0) {
        clearInterval(interval);
        loadWidescreenModeByTopicAndObserver(options);
      }
    }, 500);
  }
}

/**
 * 话题页加载宽屏模式 + 监听话题内容变化
 * @param options 选项
 */
function loadWidescreenModeByTopicAndObserver(options) {
  // 监听话题列表变化
  if (location.href.indexOf('/t/') == -1) {
    return;
  }
  var $postStream = $(options.postStream);
  if ($postStream.length === 0) {
    observeTopicMount(options);
    return;
  }
  if (topicMountObserver !== null) {
    topicMountObserver.disconnect();
    topicMountObserver = null;
  }
  loadWidescreenModeByTopic(options);
  if ($postStream.data('hasObserver')) {
    // console.debug('[discourse-pro-widescreenMode] 已存在话题内容变化监听器，跳过');
    return;
  }

  // 防抖函数
  var debounceTimeout;
  var debounce = function debounce(func, delay) {
    clearTimeout(debounceTimeout);
    debounceTimeout = setTimeout(func, delay);
  };
  var observer = new MutationObserver(function (mutationsList) {
    debounce(function () {
      loadWidescreenModeByTopic(options);
    }, 1000);
  });

  // 是否已监听
  $postStream.data('hasObserver', true);
  // 此处监听 .posts-wrapper 下的所有节点而不是 .post-stream 下的子节点，因为 .post-stream 会在时间轴跳动后重新加载
  observer.observe($postStream[0], {
    // 监听子节点
    childList: true,
    // 不监听子节点下的节点
    subtree: false
  });
}

/**
 * 等待新版 Discourse 挂载话题流
 * @param options 选项
 */
function observeTopicMount(options) {
  if (topicMountObserver !== null) {
    return;
  }
  topicMountObserver = new MutationObserver(function () {
    var _topicMountObserver;
    if ($(options.postStream).length === 0) {
      return;
    }
    (_topicMountObserver = topicMountObserver) === null || _topicMountObserver === void 0 || _topicMountObserver.disconnect();
    topicMountObserver = null;
    loadWidescreenModeByTopicAndObserver(options);
  });
  topicMountObserver.observe(document.body, {
    childList: true,
    subtree: true
  });
}

/**
 * 话题页加载宽屏模式
 * @param options
 */
function loadWidescreenModeByTopic(options) {
  var mainOutlet = options.mainOutlet,
    postsContainer = options.postsContainer,
    postStream = options.postStream,
    topicAvatar = options.topicAvatar,
    topicBody = options.topicBody,
    topicMap = options.topicMap,
    smallActionDesc = options.smallActionDesc,
    topicPostVisitedLine = options.topicPostVisitedLine,
    postNoticeNewUser = options.postNoticeNewUser,
    loadingContainer = options.loadingContainer,
    topicTimerInfo = options.topicTimerInfo,
    topicFooterBtns = options.topicFooterBtns,
    moreTopicsContainer = options.moreTopicsContainer;
  var $mainOutlet = $(mainOutlet),
    $postsContainer = $(postsContainer),
    $postStream = $(postStream),
    $topicAvatar = $(topicAvatar),
    $topicBody = $(topicBody),
    $topicMap = $(topicMap),
    $smallActionDesc = $(smallActionDesc),
    $topicPostVisitedLine = $(topicPostVisitedLine),
    $postNoticeNewUser = $(postNoticeNewUser),
    $loadingContainer = $(loadingContainer),
    $topicTimerInfo = $(topicTimerInfo),
    $topicFooterBtns = $(topicFooterBtns),
    $moreTopicsContainer = $(moreTopicsContainer);
  var $sidebarWrapper = $(options.sidebarWrapper);
  // 无侧边栏
  if ($sidebarWrapper.width() == 0) {
    $postsContainer.css('grid-template-columns', '75% 25%');
    // 没有侧边栏左侧增加边距
    $mainOutlet.css('margin-left', '30px');
  }
  var postStreamWidth = $postStream.width();
  var topicAvatarWidth = $topicAvatar.width();
  var topicWidth = postStreamWidth - 45;
  var topicBodyWidth = topicWidth - topicAvatarWidth + 'px';

  // 如果第一个的宽度和最后一个的宽度不一样，说明话题列表变化了
  var firstTopicBodyWidth = $($topicBody[0]).css('width');
  var lastTopicBodyWidth = $($topicBody[$topicBody.length - 1]).css('width');
  if (firstTopicBodyWidth == lastTopicBodyWidth && firstTopicBodyWidth == topicBodyWidth) {
    // console.debug('[discourse-pro-widescreenMode] 话题页加载宽屏模式已加载过，跳过');
    return;
  }

  // 话题内容撑满
  $topicBody.css('width', topicBodyWidth);
  // 话题主内容后浏览量、链接、回复人等信息撑满
  $topicMap.css('max-width', topicWidth + 'px');
  // 最后一个回复后的底边框撑满
  $loadingContainer.css('width', topicWidth + 'px');
  $topicTimerInfo.css('max-width', topicWidth + 'px');
  // 一段时间后的分隔线撑满
  $smallActionDesc.css('width', topicWidth - topicAvatarWidth + 'px');
  // 上次访问分隔线撑满
  $topicPostVisitedLine.css('width', topicWidth + 'px');
  // 首次发帖撑满
  $postNoticeNewUser.css('max-width', topicWidth + 'px');
  // 话题底部按钮撑满
  $topicFooterBtns.css('max-width', topicWidth + 'px');
  // 更多话题列表撑满
  $moreTopicsContainer.css('max-width', topicWidth + 'px');
}

;// ./discourse-pro/src/module/dragBar.ts


function loadDragBar(options) {
  var mainOutletWrapper = options.mainOutletWrapper,
    mainOutlet = options.mainOutlet,
    sidebarWrapper = options.sidebarWrapper,
    sidebar = options.sidebar,
    headerSidebarToggleBtn = options.headerSidebarToggleBtn,
    sidebarWidthKey = options.sidebarWidthKey,
    minSidebarWidth = options.minSidebarWidth,
    maxSidebarWidth = options.maxSidebarWidth;
  var $mainOutletWrapper = $(mainOutletWrapper),
    $mainOutlet = $(mainOutlet),
    $sidebarWrapper = $(sidebarWrapper),
    $sidebar = $(sidebar),
    $headerSidebarToggleBtn = $(headerSidebarToggleBtn);

  // 侧边栏是否存在
  var sidebarExist = $sidebar.length > 0;
  if (sidebarExist) {
    // 读取存储的侧边栏宽度
    var storeSidebarWidth = Store/* default */.A.get(sidebarWidthKey);
    if (storeSidebarWidth) {
      $mainOutletWrapper.css('grid-template-columns', "".concat(storeSidebarWidth, "px minmax(0, 1fr)"));
    }
  }

  // 在侧边栏内部追加一个拖拽条
  $sidebarWrapper.append("\n    <div class=\"drag-bar\" style=\"width: 4px; cursor: ew-resize\"></div>\n  ");

  // 拖拽条
  var $dragBar = $sidebarWrapper.find('.drag-bar');
  // 是否正在拖拽
  var isDragging = false;
  // 鼠标按下时的 clientX
  var startClientX = 0;
  // 鼠标按下时的侧边栏宽度
  var startSidebarWidth = 0;
  // 侧边栏新宽度
  var newSidebarWidth = 0;

  // 鼠标按下事件
  $dragBar.on('mousedown', function (e) {
    startClientX = e.clientX;
    startSidebarWidth = $sidebarWrapper.width() || 0;
    isDragging = true;
    // 改变鼠标样式
    document.body.style.cursor = 'ew-resize';
    // 设置拖拽条背景色
    $dragBar.css('background-color', '#e6e6e6');
    // 防止文本被选中
    e.preventDefault();
  });

  // 鼠标移动事件
  $(document).on('mousemove', function (e) {
    if (!isDragging) return;

    // 计算新的宽度
    var deltaX = e.clientX - startClientX;
    newSidebarWidth = Math.min(maxSidebarWidth, Math.max(minSidebarWidth, startSidebarWidth + deltaX));
    $mainOutletWrapper.css('grid-template-columns', "".concat(newSidebarWidth, "px minmax(0, 1fr)"));
    loadWidescreenModeByTopic(options);
  });

  // 鼠标松开事件
  $(document).on('mouseup', function () {
    if (!isDragging) return;
    isDragging = false;
    // 恢复鼠标样式
    document.body.style.cursor = 'default';
    // 恢复拖拽条背景色
    $dragBar.css('background-color', 'transparent');
    // 记忆侧边栏宽度
    Store/* default */.A.set(sidebarWidthKey, newSidebarWidth);
  });

  // 展开收起侧边栏按钮点击事件
  $headerSidebarToggleBtn.on('click', function () {
    sidebarExist = !sidebarExist;
    $mainOutletWrapper.css('grid-template-columns', "".concat(sidebarExist ? Store/* default */.A.get(sidebarWidthKey) + 'px' : '0', " minmax(0, 1fr)"));
    // 同 loadWidescreenModeByTopic 中在侧边栏缩起后加左外边距
    $mainOutlet.css('margin-left', !sidebarExist ? '30px' : 0);

    // 延迟执行确保侧边栏已经展开或收起
    setTimeout(function () {
      loadWidescreenModeByTopic(options);
    }, 300);
  });
}
// EXTERNAL MODULE: ./discourse-pro/src/Options.ts + 2 modules
var Options = __webpack_require__(440);
;// ./discourse-pro/src/main.ts
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
// ==UserScript==
// @name         Discourse Pro
// @namespace    http://tampermonkey.net/
// @version      0.1.9
// @description  增强 Discourse 论坛
// @author       duanluan
// @copyright    2024, duanluan (https://github.com/duanluan)
// @license      Apache-2.0; https://www.apache.org/licenses/LICENSE-2.0.txt
// @homepage     https://greasyfork.org/zh-CN/scripts/520817
// @supportURL   https://github.com/duanluan/tampermonkey-scripts/issues
// @match        *://greasyfork.org/*
// @match        *://meta.appinn.net/*
// @match        *://linux.do/*
// @match        *://answers.netlify.com/*
// @match        *://community.cloudflare.com/*
// @match        *://community.openai.com/*
// @match        *://forums.docker.com/*
// @match        *://discourse.webflow.com/*
// @match        *://idcflare.com/*
// @require      https://cdn.jsdelivr.net/npm/jquery@3.7.1/dist/jquery.slim.min.js
// @require      https://cdn.jsdelivr.net/npm/layui-tampermonkey@2.9.9-rc.3/layui.js
// @resource     css https://cdn.jsdelivr.net/npm/layui-tampermonkey@2.9.9-rc.3/css/layui.css
// @grant        GM_getValue
// @grant        GM_setValue
// @grant        GM_registerMenuCommand
// @grant        GM_unregisterMenuCommand
// @grant        GM_getResourceText
// @grant        GM_addStyle
// ==/UserScript==

// ==OpenUserJS==
// @author       duanluan
// @updateURL    https://raw.kkgithub.com/duanluan/tampermonkey-scripts/main/discourse-pro/dist/discourse-pro.user.js
// ==/OpenUserJS==





(function (_$) {
  'use strict';

  // 加载 CSS
  GM_addStyle(GM_getResourceText('css'));
  // layer 图标未知原因失效，手动添加样式
  $(document.head).append("<style>\n    .layui-layer-ico{background:url('https://cdn.jsdelivr.net/npm/layer-src@3.5.1/dist/theme/default/icon.png') no-repeat}\n    .layui-layer-ico1{background-position:-30px 0}\n    .layui-layer-ico2{background-position:-60px 0}\n    .layui-layer-ico3{background-position:-90px 0}\n    .layui-layer-ico4{background-position:-120px 0}\n    .layui-layer-ico5{background-position:-150px 0}\n    .layui-layer-ico6{background-position:-180px 0}\n  </style>");
  Options/* default */.A.registerAll();
  Options/* default */.A.loadInGreasyfork();

  // 判断是否为 Discourse
  var generator = (_$ = $('meta[name="generator"]')) === null || _$ === void 0 ? void 0 : _$.attr('content');
  if (!generator || generator.indexOf('Discourse') == -1) return;
  var selector = {
    headerWrap: '.d-header>.wrap',
    // 侧边栏展开收起按钮
    headerSidebarToggleBtn: '.header-sidebar-toggle>button',
    // 侧边栏和主内容的父容器
    mainOutletWrapper: '#main-outlet-wrapper',
    // 侧边栏
    sidebarWrapper: '.sidebar-wrapper',
    sidebar: '#d-sidebar',
    // 主内容
    mainOutlet: '#main-outlet',
    // 话题内容和右侧内容
    postsContainer: '.container.posts',
    // 话题内容父容器
    postStream: '.post-stream',
    // 话题头像
    topicAvatar: '.topic-avatar',
    // 话题内容
    topicBody: '.topic-body',
    // 话题主内容后浏览量、链接、回复人等信息
    topicMap: '.topic-map',
    // 一段时间后的分隔线
    smallActionDesc: '.small-action-desc',
    // 上次访问分隔线
    topicPostVisitedLine: '.topic-post-visited-line',
    // 首次发帖
    postNoticeNewUser: '.post-notice.new-user',
    // 最后一个回复后的底边框
    loadingContainer: '.loading-container',
    topicTimerInfo: '.topic-timer-info',
    // 话题底部按钮
    topicFooterBtns: '#topic-footer-buttons',
    // 更多话题列表
    moreTopicsContainer: '.more-topics__container',
    // 顶部图标栏
    headerIcons: '.icons.d-header-icons'
  };
  var storeKeys = {
    // 侧边栏宽度
    sidebarWidth: 'sidebarWidth_'
  };

  /**
   * 打开设置弹窗
   */
  var openSettings = function openSettings() {
    // 生成表单 HTML
    var formHtml = '';
    Options/* default */.A.options.forEach(function (opt) {
      // 从 Store 获取最新状态
      var storeOption = JSON.parse(Store/* default */.A.get(opt.name));
      var isChecked = storeOption ? storeOption.value : opt.value;
      formHtml += "\n        <div class=\"layui-form-item\">\n          <label class=\"layui-form-label\">".concat(opt.label, "</label>\n          <div class=\"layui-input-block\">\n            <input type=\"checkbox\" name=\"").concat(opt.name, "\" lay-skin=\"switch\" lay-text=\"ON|OFF\" ").concat(isChecked ? 'checked' : '', " lay-filter=\"discourse-pro-settings\">\n          </div>\n        </div>\n      ");
    });
    layer.open({
      type: 1,
      area: ['400px', '300px'],
      title: 'Discourse Pro 设置',
      shadeClose: true,
      content: "\n        <style>\n          .layui-form-label { width: 100px !important; }\n          .layui-input-block { margin-left: 130px !important; }\n        </style>\n        <form class=\"layui-form\" style=\"padding: 20px;\">\n          ".concat(formHtml, "\n        </form>\n      ")
    });

    // 渲染表单并添加监听
    layui.use('form', function () {
      layui.form.render();

      // 监听复选框变更
      layui.form.on('switch(discourse-pro-settings)', function (data) {
        var name = data.elem.name;
        var checked = data.elem.checked;

        // 获取当前配置并更新
        var currentConfig = JSON.parse(Store/* default */.A.get(name));
        currentConfig.value = checked;

        // 保存配置
        Store/* default */.A.set(name, JSON.stringify(currentConfig));

        // 提示
        layer.msg('保存成功，刷新页面后生效', {
          time: 1000,
          offset: 't'
        });
      });
    });
  };

  // 添加设置按钮到 header
  var addSettingsButton = function addSettingsButton() {
    var $headerIcons = $(selector.headerIcons);
    if ($headerIcons.length > 0) {
      // 构造按钮 HTML，模仿 Discourse 原生风格
      var btnHtml = "\n        <li class=\"header-dropdown-toggle discourse-pro-settings-btn\">\n          <a class=\"btn no-text icon btn-flat\" title=\"Discourse Pro \u8BBE\u7F6E\" tabindex=\"0\">\n            <svg class=\"fa d-icon d-icon-cog svg-icon svg-string\" aria-hidden=\"true\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\">\n              <path d=\"M487.4 315.7l-42.6-24.6c4.3-23.2 4.3-47 0-70.2l42.6-24.6c4.9-2.8 7.1-8.6 5.5-14-11.1-35.6-30-67.8-54.7-94.6-3.8-4.1-10-5.1-14.8-2.3L380.8 110c-17.9-15.4-38.5-27.3-60.8-35.1V25.8c0-5.6-3.9-10.5-9.4-11.7-36.7-8.2-74.3-7.8-109.2 0-5.5 1.2-9.4 6.1-9.4 11.7V75c-22.2 7.9-42.8 19.8-60.8 35.1L88.7 85.5c-4.9-2.8-11-1.9-14.8 2.3-24.7 26.7-43.6 58.9-54.7 94.6-1.7 5.4.6 11.2 5.5 14L67.3 221c-4.3 23.2-4.3 47 0 70.2l-42.6 24.6c-4.9 2.8-7.1 8.6-5.5 14 11.1 35.6 30 67.8 54.7 94.6 3.8 4.1 10 5.1 14.8 2.3l42.6-24.6c17.9 15.4 38.5 27.3 60.8 35.1v49.2c0 5.6 3.9 10.5 9.4 11.7 36.7 8.2 74.3 7.8 109.2 0 5.5-1.2 9.4-6.1 9.4-11.7v-49.2c22.2-7.9 42.8-19.8 60.8-35.1l42.6 24.6c4.9 2.8 11 1.9 14.8-2.3 24.7-26.7 43.6-58.9 54.7-94.6 1.5-5.5-.7-11.3-5.6-14.1zM256 336c-44.1 0-80-35.9-80-80s35.9-80 80-80 80 35.9 80 80-35.9 80-80 80z\"></path>\n            </svg>\n          </a>\n        </li>\n      ";

      // 插入到最左边
      $headerIcons.prepend(btnHtml);

      // 绑定点击事件
      $('.discourse-pro-settings-btn').on('click', function (e) {
        e.preventDefault();
        openSettings();
      });
    }
  };

  // 尝试添加按钮（处理动态加载的情况）
  var initUI = function initUI() {
    // 如果已经存在则不重复添加
    if ($('.discourse-pro-settings-btn').length > 0) return;

    // 如果 header icons 存在，则添加
    if ($(selector.headerIcons).length > 0) {
      addSettingsButton();
    } else {
      // 否则等待加载
      var observer = new MutationObserver(function () {
        if ($(selector.headerIcons).length > 0) {
          addSettingsButton();
          observer.disconnect();
        }
      });
      observer.observe(document.body, {
        childList: true,
        subtree: true
      });
    }
  };
  initUI();

  // 加载拖拽条
  if (JSON.parse(Store/* default */.A.get(Options/* default */.A.Keys.dragBar)).value) {
    loadDragBar(_objectSpread(_objectSpread({}, selector), {}, {
      sidebarWidthKey: storeKeys.sidebarWidth + location.host,
      minSidebarWidth: 180,
      maxSidebarWidth: 500
    }));
  }
  // 加载宽屏模式
  if (JSON.parse(Store/* default */.A.get(Options/* default */.A.Keys.widescreenMode)).value) {
    loadWidescreenMode(_objectSpread({}, selector));
  }
})();

/***/ }),

/***/ 307:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ Store)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/**
 * 存储
 */
var Store = /*#__PURE__*/function () {
  function Store() {
    _classCallCheck(this, Store);
  }
  return _createClass(Store, null, [{
    key: "get",
    value:
    /**
     * 获取
     * @param key 键
     */
    function get(key) {
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
      GM_setValue(key, value);
    }
  }]);
}();


/***/ }),

/***/ 440:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ Options)
});

// EXTERNAL MODULE: ./utils/src/gm/Store.ts
var Store = __webpack_require__(307);
;// ./utils/src/gm/MenuCmd.ts
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/**
 * 选项菜单
 */
var MenuCmd = /*#__PURE__*/function () {
  function MenuCmd() {
    _classCallCheck(this, MenuCmd);
  }
  return _createClass(MenuCmd, null, [{
    key: "register",
    value:
    /**
     * 注册
     * @param name 名称
     * @param fn 点击菜单时执行的函数
     */
    function register(name, fn) {
      return GM_registerMenuCommand(name, fn);
    }

    /**
     * 注销
     * @param menuCmdId 注册时返回的 ID
     */
  }, {
    key: "unregister",
    value: function unregister(menuCmdId) {
      GM_unregisterMenuCommand(menuCmdId);
    }
  }]);
}();

;// ./utils/src/CommonOptions.ts
function CommonOptions_typeof(o) { "@babel/helpers - typeof"; return CommonOptions_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, CommonOptions_typeof(o); }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function CommonOptions_classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function CommonOptions_defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, CommonOptions_toPropertyKey(o.key), o); } }
function CommonOptions_createClass(e, r, t) { return r && CommonOptions_defineProperties(e.prototype, r), t && CommonOptions_defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function CommonOptions_toPropertyKey(t) { var i = CommonOptions_toPrimitive(t, "string"); return "symbol" == CommonOptions_typeof(i) ? i : i + ""; }
function CommonOptions_toPrimitive(t, r) { if ("object" != CommonOptions_typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != CommonOptions_typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }



/**
 * 选项菜单
 */
var CommonOptions = /*#__PURE__*/function () {
  function CommonOptions() {
    CommonOptions_classCallCheck(this, CommonOptions);
  }
  return CommonOptions_createClass(CommonOptions, null, [{
    key: "registerBoolOption",
    value:
    /**
     * 注册 bool 类型的选项
     *
     * @param option 选项
     */
    function registerBoolOption(option) {
      var _this = this;
      var val = option.value,
        valIsBool = typeof val === 'boolean';
      if (!valIsBool) {
        return;
      }
      // 注册选项和选项点击事件
      var currentMenuCmdId = MenuCmd.register((val ? '✅ ' : '🔲 ') + option.label, function () {
        // 点击后取反
        option.value = !option.value;
        Store/* default */.A.set(option.name, JSON.stringify(option));

        // 重新注册
        MenuCmd.unregister(currentMenuCmdId);
        _this.registerBoolOption(option);
        // 刷新页面
        window.location.reload();
      });

      // 保存选项 ID
      option.menuCmdId = currentMenuCmdId;
      Store/* default */.A.set(option.name, JSON.stringify(option));
    }

    /**
     * 注册字符串/按钮类型的选项 (无状态)
     *
     * @param option 选项
     */
  }, {
    key: "registerStrOption",
    value: function registerStrOption(option) {
      MenuCmd.register(option.label, function () {
        if (typeof option.callback === 'function') {
          option.callback();
        }
      });
    }

    /**
     * 注册所有选项
     *
     * @param options 选项
     * @param moreOptionsUrl 更多设置页面 URL
     * @param useStore 是否使用存储（默认 true）
     */
  }, {
    key: "registerAll",
    value: function registerAll(options, moreOptionsUrl) {
      var useStore = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      if (moreOptionsUrl) {
        // 注册“更多设置”选项，点击后打开新页面到更多设置页面
        MenuCmd.register('更多设置', function () {
          window.open(moreOptionsUrl, '_blank');
        });
      }
      var _iterator = _createForOfIteratorHelper(options),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var option = _step.value;
          // TODO 【调试】不保留选项的值，每次都从 Store 中获取
          // Store.set(option.name, null);

          // 声明最终用于注册的选项变量
          var finalOption = option;

          // useStore 为 true 时，才从 Store 读取或更新
          if (useStore) {
            var storeOption = Store/* default */.A.get(option.name) ? JSON.parse(Store/* default */.A.get(option.name)) : null;
            // 如果选项不存在 || 版本不一致 时重置选项
            if (storeOption === null || !storeOption['version'] || storeOption['version'] < option.version) {
              Store/* default */.A.set(option.name, JSON.stringify(option));
              storeOption = option;
            }
            finalOption = storeOption;
          }

          // 根据类型分发注册方法
          if (typeof finalOption.value === 'boolean') {
            this.registerBoolOption(finalOption);
          } else {
            this.registerStrOption(finalOption);
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }

    /**
     * 在 Greasy Fork 脚本详情页中加载选项
     *
     * @param scriptId 脚本 ID
     * @param loadOptionContentFn 加载选项内容的函数
     */
  }, {
    key: "loadInGreasyfork",
    value: function loadInGreasyfork(scriptId, loadOptionContentFn) {
      // 非脚本详情页结束
      if (location.host !== 'greasyfork.org' || location.href.indexOf('/scripts/' + scriptId) == -1) {
        return;
      }
      var selector = {
        scriptLinks: '#script-links',
        scriptOptions: '#script-options',
        scriptContent: '#script-content'
      };
      var $body = $(document.body),
        $scriptLinks = $(selector.scriptLinks),
        $scriptContent = $(selector.scriptContent);

      // 添加“脚本设置”选项卡和点击事件
      $scriptLinks.children('li:eq(0)').after("<li><a href=\"javascript:;\" id=\"script-options\">\u811A\u672C\u8BBE\u7F6E</a></li>");
      $body.on('click', selector.scriptOptions, function () {
        // 移除其他已选中选项的样式
        var $currentLi = $scriptLinks.children('li.current');
        $currentLi.html("<a href=\"".concat(location.href, "\">").concat($currentLi.text(), "</a>"));
        $currentLi.removeClass('current');
        // 给“脚本设置”选项卡添加选中选项的样式
        var $scriptOptions = $(selector.scriptOptions);
        $scriptOptions.parent().addClass('current');
        loadOptionContentFn($scriptContent);
      });
    }
  }]);
}();

;// ./discourse-pro/src/Options.ts
var _Options;
function Options_typeof(o) { "@babel/helpers - typeof"; return Options_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, Options_typeof(o); }
function Options_createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = Options_unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function Options_unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return Options_arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? Options_arrayLikeToArray(r, a) : void 0; } }
function Options_arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function Options_classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function Options_defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, Options_toPropertyKey(o.key), o); } }
function Options_createClass(e, r, t) { return r && Options_defineProperties(e.prototype, r), t && Options_defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _defineProperty(e, r, t) { return (r = Options_toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function Options_toPropertyKey(t) { var i = Options_toPrimitive(t, "string"); return "symbol" == Options_typeof(i) ? i : i + ""; }
function Options_toPrimitive(t, r) { if ("object" != Options_typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != Options_typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }



var Options = /*#__PURE__*/function () {
  function Options() {
    Options_classCallCheck(this, Options);
  }
  return Options_createClass(Options, null, [{
    key: "registerBoolOption",
    value:
    /**
     * 注册 bool 类型的选项
     * @param option 选项
     */
    function registerBoolOption(option) {
      CommonOptions.registerBoolOption(option);
    }

    /**
     * 注册所有选项
     */
  }, {
    key: "registerAll",
    value: function registerAll() {
      CommonOptions.registerAll(this.options, 'https://greasyfork.org/scripts/' + this.SCRIPT_ID);
    }
  }, {
    key: "onChangByBoolOption",
    value: function onChangByBoolOption(key) {
      var _this = this;
      var optionSelector = '#script-options-' + key;
      $(document.body).on('change', optionSelector, function () {
        var option = JSON.parse(Store/* default */.A.get(key));
        option.value = !option.value;
        // 重新注册选项
        MenuCmd.unregister(option.menuCmdId);
        _this.registerBoolOption(option);
      });
    }

    /**
     * 在页面中加载选项
     */
  }, {
    key: "loadInGreasyfork",
    value: function loadInGreasyfork() {
      var _this2 = this;
      CommonOptions.loadInGreasyfork(this.SCRIPT_ID, function ($scriptContent) {
        // 添加脚本设置的内容
        var scriptContent = '';
        var _iterator = Options_createForOfIteratorHelper(_this2.options),
          _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var option = _step.value;
            var storeOption = JSON.parse(Store/* default */.A.get(option.name)),
              optionName = storeOption.name,
              optionVal = storeOption.value;
            scriptContent += "<h3>".concat(option.label, "</h3>");
            switch (optionName) {
              case _this2.Keys.dragBar:
                scriptContent += "<label><input type=\"checkbox\" id=\"script-options-".concat(optionName, "\" ").concat(optionVal ? 'checked' : '', "> \u4FA7\u8FB9\u680F\u62D6\u62FD\u6761\uFF08\u4FA7\u8FB9\u680F\u548C\u4E3B\u5185\u5BB9\u95F4\u6DFB\u52A0\u62D6\u62FD\u6761\uFF0C\u7528\u4E8E\u8C03\u6574\u4E24\u8005\u5BBD\u5EA6\uFF09</label>");
                break;
              case _this2.Keys.widescreenMode:
                scriptContent += "<label><input type=\"checkbox\" id=\"script-options-".concat(optionName, "\" ").concat(optionVal ? 'checked' : '', "> \u5BBD\u5C4F\u6A21\u5F0F</label>");
                break;
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
        $scriptContent.html(scriptContent);

        // 侧边栏拖拽条
        _this2.onChangByBoolOption(_this2.Keys.dragBar);
        // 宽屏模式
        _this2.onChangByBoolOption(_this2.Keys.widescreenMode);
      });
    }
  }]);
}();
_Options = Options;
_defineProperty(Options, "SCRIPT_ID", 520817);
/**
 * 选项 Key
 */
_defineProperty(Options, "Keys", {
  dragBar: 'dragBar',
  widescreenMode: 'widescreenMode'
});
/**
 * 选项
 * @public
 */
_defineProperty(Options, "options", [{
  label: '侧边栏拖拽条',
  name: _Options.Keys.dragBar,
  version: 1,
  value: false,
  menuCmdId: null
}, {
  label: '宽屏模式',
  name: _Options.Keys.widescreenMode,
  version: 1,
  value: false,
  menuCmdId: null,
  token: ''
}]);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	__webpack_require__(163);
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__(440);
/******/ 	
/******/ })()
;
//# sourceMappingURL=discourse-pro.user.js.map