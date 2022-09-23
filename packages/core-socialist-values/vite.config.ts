import { defineConfig } from 'vite';
import monkey, { cdn } from 'vite-plugin-monkey';

export default defineConfig(async () => ({
  plugins: [
    monkey({
      entry: 'src/main.ts',
      userscript: {
        name: '技术远离政治',
        namespace: 'http://tampermonkey.net/',
        icon: 'https://tampermonkey.freetls.fastly.net/images/icon180.png', // 附加
        version: '1.3.1',
        description:
          '移除政治相关条幅或替换为社会主义核心价值观、今日诗词，替换政治相关 Logo 为原版 Logo，去除政治相关通知，让技术远离政治。',
        author: 'duanluan',
        license: 'Apache-2.0; https://www.apache.org/licenses/LICENSE-2.0.txt',
        match: [
          '*://reactjs.org/*',
          '*://angular.io/*',
          '*://junit.org/*',
          '*://codecept.io/*',
          '*://github.com/*',
          '*://docs.nestjs.com/*',
          '*://emberjs.com/*',
          '*://www.electronjs.org/*',
          '*://www.jenkins.io/*',
          '*://svelte.dev/*',
          '*://sveltematerialui.com/*',
          '*://syncthing.net/*',
          '*://greasyfork.org/*',
        ],
        $extra: {
          copyright: '2022, duanluan (https://github.com/duanluan)',
        },
      },
      build: {
        externalGlobals: {
          jquery: cdn.jsdelivr('$', 'dist/jquery.min.js'),
        },
      },
    }),
  ],
}));
