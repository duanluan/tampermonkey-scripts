import { defineConfig } from 'vite';
import monkey, { cdn, util } from 'vite-plugin-monkey';

export default defineConfig(async () => ({
  plugins: [
    monkey({
      entry: 'src/main.ts',
      userscript: {
        name: '亚马逊 Kindle 展示豆瓣评分',
        namespace: 'http://tampermonkey.net/',
        icon: 'https://www.google.com/s2/favicons?sz=64&domain=amazon.cn', // 附加
        version: '0.0.1',
        description: '增强 V2EX 主题的回复。',
        author: 'duanluan',
        license: 'Apache-2.0',
        match: '*://www.amazon.cn/*',
      },
      build: {
        externalGlobals: {
          jquery: cdn.jsdelivr('$', 'dist/jquery.min.js'),
        },
      },
    }),
  ],
}));
