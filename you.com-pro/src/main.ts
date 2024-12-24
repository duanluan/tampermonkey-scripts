// ==UserScript==
// @name         You.com Pro
// @namespace    http://tampermonkey.net/
// @version      0.1.3
// @description  You.com Pro by script
// @author       duanluan
// @copyright    2024, duanluan (https://github.com/duanluan)
// @license      Apache-2.0; https://www.apache.org/licenses/LICENSE-2.0.txt
// @match        *://*.you.com/*
// @require      https://cdn.jsdelivr.net/npm/jquery@3.7.1/dist/jquery.slim.min.js
// @resource css https://cdn.jsdelivr.net/npm/layui-tampermonkey@2.9.9-rc.3/css/layui.css
// @require      https://cdn.jsdelivr.net/npm/layui-tampermonkey@2.9.9-rc.3/layui.js
// @grant        GM_addStyle
// @grant        GM_getResourceText
// @grant        unsafeWindow
// ==/UserScript==

// ==OpenUserJS==
// @author       duanluan
// @updateURL    https://raw.kkgithub.com/duanluan/tampermonkey-scripts/main/you.com-pro/dist/you.com-pro.user.js
// ==/OpenUserJS==


(() => {
  'use strict'

  if (location.href.indexOf('you.com/search') === -1 && location.href.indexOf('you.com/?chatMode=') === -1) {
    return
  }

  // 加载 CSS
  GM_addStyle(GM_getResourceText('css'))
  // layer 图标未知原因失效，手动添加样式
  $(document.head).append(`<style>
    .layui-layer-ico{background:url('https://cdn.jsdelivr.net/npm/layer-src@3.5.1/dist/theme/default/icon.png') no-repeat}
    .layui-layer-ico1{background-position:-30px 0}
    .layui-layer-ico2{background-position:-60px 0}
    .layui-layer-ico3{background-position:-90px 0}
    .layui-layer-ico4{background-position:-120px 0}
    .layui-layer-ico5{background-position:-150px 0}
    .layui-layer-ico6{background-position:-180px 0}
  </style>`)
  unsafeWindow.layui = layui
  let table;
  layui.use('table', function () {
    table = layui.table
  })

  const dataTestid = {
    userDropdown: 'user-dropdown',
    chatItemMenu: 'chat-item-menu',
    signOption: 'sign-option',
  }, selectorId = {
    // 对话菜单中的认领按钮
    claimChatBtn: 'pro-claim-chat',

    // 操作按钮
    proOperateBtn: 'pro-operate-btn',
    // 操作面板
    proOperatePanel: 'pro-operate-panel',
    // 已认领对话表格
    claimedChatsTable: 'pro-claimed-chats-table',
    // 已认领对话表格工具栏
    claimedChatsTableToolbar: 'pro-claimed-chats-table-toolbar',
    // 已认领对话表格操作列
    claimedChatsTableColToolbar: 'pro-claimed-chats-table-col-toolbar',
  }, selector = {
    // 用户名右侧更多按钮
    userDropdown: `[data-testid="${dataTestid.userDropdown}"]`,
    // 注销按钮
    signOption: `[data-testid="${dataTestid.signOption}"]`,

    // 对话菜单
    chatItemMenu: `[data-testid="${dataTestid.chatItemMenu}"]`,
    // 认领按钮
    claimChat: '#' + selectorId.claimChatBtn,

    // 顶栏
    topBar: '#TOP_BAR',

    // 操作按钮
    proOperateBtn: '#' + selectorId.proOperateBtn,
    // 操作面板
    proOperatePanel: '#' + selectorId.proOperatePanel,
    // 已认领对话表格
    claimedChatsTable: '#' + selectorId.claimedChatsTable,
    // 已认领对话表格工具栏
    claimedChatsTableToolbar: '#' + selectorId.claimedChatsTableToolbar,
    // 已认领对话表格操作列
    claimedChatsTableColToolbar: '#' + selectorId.claimedChatsTableColToolbar,
  }, localStorageKey = {
    claimedChats: 'pro-claimedChats',
  }

  let firstLoadFlag = true;
  // 用户名右侧更多按钮点击事件
  $(document).on('click', selector.userDropdown, () => {
    if (firstLoadFlag) {
      setTimeout(() => {
        // 隐藏注销按钮
        $(selector.signOption).hide()
        firstLoadFlag = false
      }, 300)
    } else {
      // 隐藏注销按钮
      $(selector.signOption).hide()
    }
  })

  let chats = [], chatIds = []
  $.ajax({
    url: 'https://you.com/api/chat/getUserChats',
    type: 'POST',
    contentType: 'application/json',
    data: JSON.stringify({
      count: 1000
    }),
    async: false,
    success: (data) => {
      chats = data.chats
      chatIds = chats.map(chat => chat.chat_id)
    }
  })

  // 监听出现对话菜单元素时
  const observer = new MutationObserver((mutationsList) => {
    for (const mutation of mutationsList) {
      // 如果打开对话菜单
      if (mutation.addedNodes.length > 0 && $(mutation.addedNodes[0]).attr('data-testid') === dataTestid.chatItemMenu) {
        // 菜单添加按钮
        $(selector.chatItemMenu).prepend(`
          <button id="${selectorId.claimChatBtn}" class="sc-cdc40633-5 koipfB">
            <svg width="0.875rem" height="0.875rem" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path stroke="#141414" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="M692.288 674.432a223.168 223.168 0 0 1 103.936-25.408h0.128c3.84 0 5.632-4.48 2.816-6.976a476.16 476.16 0 0 0-132.416-81.92c-0.512-0.32-1.024-0.448-1.536-0.64 79.296-56.192 130.88-147.52 130.88-250.56C796.096 138.304 654.656 0 480.128 0 305.6 0 164.288 138.24 164.288 308.928c0 103.04 51.584 194.368 131.008 250.56-0.512 0.192-1.024 0.32-1.536 0.64a476.48 476.48 0 0 0-254.976 249.216 455.808 455.808 0 0 0-37.504 172.032c-0.128 5.632 4.48 10.24 10.24 10.24h76.416a10.176 10.176 0 0 0 10.24-9.728 367.36 367.36 0 0 1 111.808-254.528 383.744 383.744 0 0 1 270.272-109.44c72.384 0 141.824 19.52 201.728 56.128 3.2 1.92 7.04 2.112 10.304 0.384zM480.256 523.2a220.544 220.544 0 0 1-155.008-62.72 210.688 210.688 0 0 1 0-303.04 220.096 220.096 0 0 1 155.008-62.72c58.624 0 113.472 22.272 155.008 62.72a210.688 210.688 0 0 1 0 302.976 220.544 220.544 0 0 1-155.008 62.784z m151.808 441.856c0 7.936-9.088 12.352-15.168 7.488l-165.312-133.12a9.6 9.6 0 0 1 0-14.912l165.312-133.056c6.08-4.992 15.168-0.448 15.168 7.488v90.24h365.824c5.12 0 9.28 4.352 9.28 9.6v66.496a9.472 9.472 0 0 1-9.28 9.472H632.064v90.24z"></path></svg>
            认领
          </button>
        `)

        // 认领按钮点击事件
        document.getElementById(selectorId.claimChatBtn).addEventListener('click', function () {
          const $this = $(this)
          // 往父级找到第一个 data-testid="chat-history-item- 开头的元素，获取对话 ID
          const $chatHistoryItem = $this.parents('[data-testid^="chat-history-item-"]').first()
          const chatId = $chatHistoryItem.attr('data-testid').replace('chat-history-item-', '')
          // 往下找到第一个 span 获取对话名
          const chatTitle = $chatHistoryItem.find('span').first().text()
          // 从 chats 中获取更新时间
          let dateUpdated = ''
          for (const chat of chats) {
            if (chat.chat_id === chatId) {
              dateUpdated = chat.date_updated
              break
            }
          }
          // 重新加载已认领对话
          loadMyChat({chatId, chatTitle, dateUpdated})
          layer.msg('认领成功', {icon: 1})
        })
      }
    }
  })
  observer.observe(document.body, {
    childList: true,
    subtree: true
  })

  // 读取已认领对话
  let claimedChats = []
  const claimedChatsStr = localStorage.getItem(localStorageKey.claimedChats);
  if (claimedChatsStr) {
    claimedChats = JSON.parse(claimedChatsStr)
    loadMyChat()
  }

  // 已认领对话表格
  let claimedChatsTable = null

  function loadMyChat(addChat: { chatId, chatTitle, dateUpdated } = null) {
    if (addChat) {
      let isReplace = false
      for (let i = 0; i < claimedChats.length; i++) {
        // 如果对话 ID 相同则替换
        if (claimedChats[i].chatId === addChat.chatId) {
          claimedChats[i] = addChat
          isReplace = true
          break
        }
      }
      // 存储已认领对话
      if (!isReplace) {
        const claimedChatsLen = claimedChats.length
        if (claimedChatsLen === 0) {
          claimedChats.push(addChat)
        } else {
          for (let i = 0; i < claimedChats.length; i++) {
            // 添加对话的更新时间比已认领对话更新时间晚
            if (addChat.dateUpdated > claimedChats[i].dateUpdated) {
              // 插入到已认领对话之前，即按照更新时间倒序
              claimedChats.splice(i, 0, addChat);
              break;
            }
          }
          // 需要认领的对话更新时间最早
          if (claimedChats.length === claimedChatsLen) {
            // 添加到最后
            claimedChats.push(addChat)
          }
        }
      }
      reloadClaimedChatsTable()
      // 存储已认领对话
      localStorage.setItem(localStorageKey.claimedChats, JSON.stringify(claimedChats))
    }
  }

  // 等待顶栏元素出现后
  const interval = setInterval(() => {
    if ($(selector.topBar).length !== 0) {
      clearInterval(interval)
      init()
    }
  }, 100)

  function init() {
    // 操作按钮已存在不添加
    if ($(selector.proOperateBtn).length !== 0) {
      return
    }

    // 顶栏后添加操作按钮
    $(selector.topBar).parent().css('display', 'flex')
    $(selector.topBar).css('padding-right', '11px')
    $(selector.topBar).parent().append(`
      <div style="width: 48px; padding: 0; display: flex; align-items: center">
        <button class="iLolfv" id="${selectorId.proOperateBtn}">
          <div class="button-children" data-relingo-block="true">
            <svg t="1715405944514" class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="1.125rem" height="1.125rem"><path d="M881.12 275.23l40.35-65.38L732.41 93.22c-1.09-0.8-2.21-1.58-3.38-2.3L685.48 64 432.25 474.15a249.47 249.47 0 0 0-292.62 105.19c-72.19 117.32-35.82 270.94 81.31 343.44a249.59 249.59 0 0 0 299.48-396.59L625.48 356l151 93.23 40.35-65.33-151-93.23 66.3-107.39z m-403.85 512.6a147 147 0 1 1 18-111.21 146.5 146.5 0 0 1-18 111.21z" fill="#141414"></path></svg>
          </div>
        </button>
      </div>
    `)

    const $proOperateBtn = $(selector.proOperateBtn)
    // 操作按钮样式
    $proOperateBtn.css({
      'border': '1px solid rgb(229, 229, 229)',
      'background': 'transparent',
      'height': 'calc(2.125rem)',
      'width': 'calc(2.125rem)',
      'border-radius': '0.5rem',
      'padding': '0.5rem'
    })

    // 操作面板
    $(selector.proOperatePanel).remove()
    const claimedChatsTableId = selectorId.claimedChatsTable
    const proOperatePanelTop = $proOperateBtn.offset().top + $proOperateBtn.outerHeight()
    $(document.body).append(`
      <div class="layui-panel" id="${selectorId.proOperatePanel}" style="display: none; background: #eeeef1; padding: 10px; position: absolute; z-index: 99999; right: 0; top:${proOperatePanelTop + 10}px; width: 300px;">
        <script type="text/html" id="${selectorId.claimedChatsTableToolbar}">
          <div class="layui-btn-container">
            <button class="layui-btn layui-btn-xs" lay-event="inputScript">填写脚本</button>
          </div>
        </script>
        <table class="layui-table" id="${claimedChatsTableId}" lay-filter="${claimedChatsTableId}" lay-skin="nob" lay-size="sm" style="display: none"></table>
        <script type="text/html" id="${selectorId.claimedChatsTableColToolbar}">
          <a class="layui-btn layui-btn-xs layui-btn-primary" lay-event="edit" style="padding: 0"><i class="layui-icon layui-icon-edit"></i></a>
          <a class="layui-btn layui-btn-xs layui-btn-primary" lay-event="remove" style="padding: 0; margin-left: 2px"><i class="layui-icon layui-icon-delete"></i></a>
        </script>
      </div>
    `)

    claimedChatsTable = table.render({
      elem: selector.claimedChatsTable,
      toolbar: selector.claimedChatsTableToolbar,
      // 清空工具栏右侧按钮
      defaultToolbar: [],
      cols: [[
        {field: 'chatId', hide: true},
        {field: 'dateUpdated', hide: true},
        {field: 'chatTitle'},
        {field: 'operate', templet: selector.claimedChatsTableColToolbar, align: 'right', width: 50}
      ]],
      data: claimedChats,
      skin: 'nob',
      size: 'sm',
      done: () => {
        $('th').hide()
      }
    })
    setClaimedChatsTableStyle()

    // 头部工具栏事件
    table.on(`toolbar(${claimedChatsTableId})`, (obj) => {
      switch (obj.event) {
        case 'inputScript':
          layer.prompt({
            title: '自己账号需先禁用脚本并注销！',
            maxlength: 10000
          }, (value, index) => {
            // 执行脚本
            eval(value)
            // 刷新页面
            location.reload()
          })
          break;
      }
    });

    // 行单击事件( 双击事件为: rowDouble )
    table.on(`row(${claimedChatsTableId})`, (obj) => {
      var data = obj.data; // 获取当前行数据

      // // 标注当前点击行的选中状态
      // obj.setRowChecked({type: 'radio'});
      window.open(`https://you.com/search?q=${data.chatTitle}&tbm=youchat&cfr=chat&cid=c0_${data.chatId}&chatMode=custom`)
    });

    // 行工具栏事件
    table.on(`tool(${claimedChatsTableId})`, (obj) => {
      switch (obj.event) {
        case 'edit':
          layer.msg('功能实现中')
          break;
        case 'remove':
          layer.confirm('确定取消认领对话吗？', {shadeClose: true, offset: 'rt'}, (index) => {
            obj.del();
            // 删除已认领对话
            claimedChats = claimedChats.filter(claimedChat => claimedChat.chatId !== obj.data.chatId)
            // 存储已认领对话
            localStorage.setItem(localStorageKey.claimedChats, JSON.stringify(claimedChats))
            layer.close(index);
          });
          break;
      }
    });

    // 操作按钮点击事件
    $(selector.proOperateBtn)[0].addEventListener('click', () => {
      // 操作面板显示/隐藏
      $(selector.proOperatePanel).toggle()
    })
  }

  function setClaimedChatsTableStyle() {
    // 工具栏样式
    $('.layui-table-tool').css({'padding': '0', 'padding-bottom': '5px', 'min-height': 'unset',})
    // 操作列样式
    $('td[data-field="operate"] div').css('padding', '4px 5px')
  }

  function reloadClaimedChatsTable() {
    // 重新加载已认领对话表格
    claimedChatsTable.reloadData({data: claimedChats})
    setClaimedChatsTableStyle()
  }

  // 监听 history 的 pushState：https://segmentfault.com/a/1190000017560688#item-4
  var _wr = function (type) {
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
  // 单页面刷新时
  window.addEventListener('pushState', function (e) {
    // 等待页面重新加载后
    const interval = setInterval(() => {
      if ($(selector.topBar).length !== 0) {
        init()
        clearInterval(interval)
      }
    }, 100)
  });
})()
