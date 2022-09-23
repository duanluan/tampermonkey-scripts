import Replay from './Replay';
import Options from './Options';
import 'winbox/dist/css/winbox.min.css';
import 'layer-src/dist/theme/default/layer.css';

(async () => {
  'use strict';

  // 加载 CSS
  // GM_addStyle(GM_getResourceText('css'));
  // 设置 layer 图标
  // $(document.head).append(`<style>
  //   .layui-layer-ico{background:url('https://cdn.bootcdn.net/ajax/libs/layer/3.5.1/theme/default/icon.png') no-repeat}
  //   /* 原样式不知为何会失效，导致 icon 设置无效 */
  //   .layui-layer-ico1{background-position:-30px 0}
  //   .layui-layer-ico2{background-position:-60px 0}
  //   .layui-layer-ico3{background-position:-90px 0}
  //   .layui-layer-ico4{background-position:-120px 0}
  //   .layui-layer-ico5{background-position:-150px 0}
  //   .layui-layer-ico6{background-position:-180px 0}
  // </style>`);

  // 失效是因为 layui 图标文件是通过 url('./xxx.png') 来引用
  // 当你通过 GM_addStyle(GM_getResourceText('css')); 加载 css 时
  // 此时 css 里的 url('./xxx.png') 的 base-url 就会从 cdn-url 变成宿主的 location.pathname

  Options.registerAll();
  Options.loadInV2ex();

  Replay.run();
})();
