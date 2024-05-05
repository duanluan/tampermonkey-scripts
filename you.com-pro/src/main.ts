// ==UserScript==
// @name         You.com Pro
// @namespace    http://tampermonkey.net/
// @version      0.0.1
// @description
// @author       duanluan
// @copyright    2024, duanluan (https://github.com/duanluan)
// @license      Apache-2.0; https://www.apache.org/licenses/LICENSE-2.0.txt
// @match        *://*.you.com/*
// @require      https://cdn.bootcdn.net/ajax/libs/jquery/3.7.1/jquery.min.js
// @resource css https://cdn.bootcdn.net/ajax/libs/layer/3.5.1/theme/default/layer.min.css
// @require      https://cdn.bootcdn.net/ajax/libs/layer/3.5.1/layer.min.js
// @grant        GM_addStyle
// @grant        GM_getResourceText
// ==/UserScript==

// ==OpenUserJS==
// @author       duanluan
// @updateURL    https://raw.kkgithub.com/duanluan/tampermonkey-scripts/main/you.com-pro/dist/you.com-pro.user.js
// ==/OpenUserJS==


(async () => {
  'use strict';

  // 加载 CSS
  GM_addStyle(GM_getResourceText('css'));
  // layer 图标未知原因失效，手动添加样式
  $(document.head).append(`<style>
    .layui-layer-ico{background:url('https://cdn.bootcdn.net/ajax/libs/layer/3.5.1/theme/default/icon.png') no-repeat}
    .layui-layer-ico1{background-position:-30px 0}
    .layui-layer-ico2{background-position:-60px 0}
    .layui-layer-ico3{background-position:-90px 0}
    .layui-layer-ico4{background-position:-120px 0}
    .layui-layer-ico5{background-position:-150px 0}
    .layui-layer-ico6{background-position:-180px 0}
  </style>`);

  // jquery data-testid="user-dropdown" 元素添加点击事件
  $(document).on('click', '[data-testid="user-dropdown"]', function () {

    setTimeout(() => {
      // 删除 data-testid="sign-option" 元素
      $('[data-testid="sign-option"]').hide();

      // 添加菜单
      $('[data-testid="user-dropdown-items"]').append(`
        <li class="sc-79a25c6f-1 kPbrXZ"><div style="height: 0.5rem;"></div></li>
        <li class="sc-79a25c6f-1 kPbrXZ"><p class="sc-64799162-1 sc-64799162-2 dnRtHe cPgyBL">You.com Pro</p></li>
        <li class="sc-79a25c6f-1 iBJkUA" data-testid="my-pro-script"><div class="sc-fb51e70c-0 cJkewo"><a href="javascript:void(0);"><div class="sc-64799162-0 diIVGY"><div class="sc-64799162-3 czOWaa">
          <div class="sc-64799162-4 fjWeYd"><svg width="17" height="17" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 23" fill="none"><path d="m21.043 14.191-1.89-1.055a7.47 7.47 0 0 0 0-3.12l1.89-1.056a.505.505 0 0 0 .22-.615c-.484-1.583-1.32-2.99-2.374-4.177a.533.533 0 0 0-.66-.087l-1.89 1.055a8.837 8.837 0 0 0-2.638-1.539V1.443c0-.22-.176-.44-.44-.484-1.626-.395-3.252-.351-4.79 0-.265.044-.397.264-.397.484v2.154A7.873 7.873 0 0 0 5.393 5.18l-1.89-1.1a.533.533 0 0 0-.66.088C1.788 5.355.953 6.762.47 8.345c-.088.22 0 .483.22.615l1.89 1.055a9.3 9.3 0 0 0 0 3.121L.69 14.192c-.22.131-.308.395-.22.615.484 1.583 1.32 2.99 2.374 4.176.176.176.44.22.66.088l1.89-1.055a8.535 8.535 0 0 0 2.681 1.539v2.154c0 .22.176.44.396.527 1.627.352 3.253.308 4.792 0 .263-.088.44-.308.44-.527v-2.154a8.835 8.835 0 0 0 2.637-1.539l1.89 1.055c.22.132.484.088.66-.088 1.099-1.187 1.89-2.593 2.418-4.176a.59.59 0 0 0-.264-.616Zm-10.155.88c-1.978 0-3.517-1.539-3.517-3.517a3.5 3.5 0 0 1 3.517-3.517 3.527 3.527 0 0 1 3.517 3.517 3.5 3.5 0 0 1-3.517 3.517Z" fill="#C7C7CC"></path></svg></div>
          <p class="sc-64799162-1 dnRtHe">填写脚本</p>
        </div></div></a></div></li>
      `);

      $(document).off('click', '[data-testid="my-pro-script"]');
      $(document).on('click', '[data-testid="my-pro-script"]', function () {
        if (document.cookie.match(/stytch_session=([^;]+)/)) {
          // 提示是否要先退出账号
          layer.confirm('已登录，自己账号需先注销，是否注销？慎重选择！', {
            icon: 0,
            btn: ['是', '否'],
            cancel: function () {
              inputScript()
            }
          }, function (index1) {
            console.log($('[data-testid="user-dropdown-items"]').length == 0);
            // 如果 data-testid="user-dropdown-items" 不存在要先点击展示
            if ($('[data-testid="user-dropdown-items"]').length == 0) {
              layer.close(index1);

              // 点击 Sign Out 按钮
              setTimeout(() => {
                console.log('退出账号')
                $('[data-testid="user-dropdown"]').click();
                setTimeout(() => {
                  $('[data-testid="sign-option"]').click();
                }, 100);
              }, 100);
            }
          }, function () {
            inputScript()
          })
        } else {
          inputScript()
        }
      });
    }, 300);
  });

  function inputScript() {
    // 提示输入脚本内容
    layer.prompt({
      title: '请输入脚本内容',
      maxlength: 10000
    }, function (value, index) {
      // 用正则 (?<=stytch_session":").*?(?=") 获取 value 中内容
      const stytchSessionByScript = value.match(/(?<=stytch_session":").*?(?=")/);

      // 如果脚本中有 stytch_session，且与 cookie 中的 stytch_session 相同，则不执行脚本
      if (stytchSessionByScript == document.cookie.match(/stytch_session=([^;]+)/)?.[1]) {
        layer.msg('脚本中账号与当前账号相同，不执行', {icon: 0});
        return;
      }

      // 执行脚本
      eval(value);
      // 刷新页面
      location.reload();
    });
  }
})();
