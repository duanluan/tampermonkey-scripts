import { defineConfig } from 'vite';
import monkey, { cdn, util } from 'vite-plugin-monkey';

declare const GM_addStyle: (css: string) => HTMLStyleElement;

export default defineConfig(async () => ({
  plugins: [
    {
      name: 'fix-winbox',
      enforce: 'pre',
      resolveId(source) {
        // 由于 winbox/package.json 有 browser 字段， vite 会优先导入 browser 而不是 main
        // 所以直接将 winbox 设置为 main 的别名
        if (source == 'winbox') {
          return 'winbox/src/js/winbox.js';
        }
      },
    },
    {
      name: 'fix-layer',
      transform(code, id) {
        // umd to esm, layer 的 npm 包内 只提供了 umd 格式, 需要手动把 umd 转 为 esm
        if (id.endsWith('/node_modules/layer-src/src/layer.js')) {
          return [
            `import $ from 'jquery'`,
            `const window = Object.create(globalThis)`,
            `window.jQuery = $`,
            code,
            'export default window.layer',
          ].join(';');
        }
      },
    },
    monkey({
      entry: 'src/main.ts',
      userscript: {
        name: 'V2EX 主题回复增强',
        namespace: 'http://tampermonkey.net/',
        icon: 'https://v2ex.com/static/favicon.ico', // 附加
        connect: ['www.v2ex.com', 'v2ex.com'], // 附加
        version: '0.0.4',
        description: '增强 V2EX 主题的回复。',
        author: 'duanluan',
        license: 'Apache-2.0; https://www.apache.org/licenses/LICENSE-2.0.txt',
        match: '*://*.v2ex.com/*',
        $extra: {
          copyright: '2022, duanluan (https://github.com/duanluan)',
        },
      },
      build: {
        externalGlobals: {
          moment: cdn
            .jsdelivr('moment', 'moment.js')
            .concat(cdn.jsdelivr('', 'locale/zh-cn.js')[1]),
          winbox: cdn.jsdelivr('WinBox', 'dist/js/winbox.min.js'),
          jquery: cdn.jsdelivr('$', 'dist/jquery.min.js'),
          'layer-src': cdn.jsdelivr('layer', 'dist/layer.js'),
          'layer-src/dist/theme/default/layer.css': [
            '',
            await util.encodeFn(() => {
              GM_addStyle(
                `@import "https://cdn.bootcdn.net/ajax/libs/layer/3.5.1/theme/default/layer.min.css";`
              );
            }, []),
          ],
        },
        externalResource: {
          'winbox/dist/css/winbox.min.css': cdn.jsdelivr(),
        },
      },
    }),
  ],
}));
