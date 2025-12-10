const glob = require('glob');
const path = require("path");
// const TerserPlugin = require("terser-webpack-plugin");

module.exports = (env, argv) => {
  const isDev = argv.mode !== 'production';

  const baseConfig = {
    mode: isDev ? 'development' : 'production',
    // 使用 eval-source-map 在油猴脚本 file://@require 时方便调试：https://webpack.docschina.org/guides/development/#using-source-maps
    devtool: isDev ? 'eval-source-map' : 'source-map',
    module: {
      rules: [
        // 转译 TS：https://webpack.docschina.org/loaders/babel-loader、https://www.babeljs.cn/docs/babel-preset-typescript
        {
          test: /\.ts$/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-typescript']
            }
          },
          exclude: /(node_modules|bower_components)/
        }
      ]
    },
    // https://webpack.docschina.org/configuration/resolve/#resolve
    resolve: {
      // 路径映射为别名，方便 import。同时需要在 tsconfig.json 中配置 paths
      alias: {
        '@utils': path.resolve(__dirname, 'utils/src')
      },
      // 忽略路径后缀
      extensions: ['.ts'],
      // 优先解析相对路径。webpack 从 5.72.1 升级到 5.91.0，glob 从 8.0.3 升级到 10.3.10 后，不开启此配置，会导致 glob.sync 报错“Module not found: Error: Can't resolve ”。
      preferRelative: true,
    },
    // 保留注释：https://webpack.docschina.org/plugins/terser-webpack-plugin/#preserve-comments
    optimization: {
      // 是否压缩最小化代码
      minimize: false,
      // minimizer: [
      //   new TerserPlugin({
      //     terserOptions: {
      //       format: {
      //         comments: /\s*(==(\/|)UserScript==|@(name|namespace|version|description|author|license|match|icon|require|grant))/i,
      //       },
      //     },
      //     extractComments: true,
      //   }),
      // ],
    },
  };

  return [
    {
      ...baseConfig,
      entry: glob.sync('./core-socialist-values/src/*.ts'),
      output: {
        path: path.resolve(__dirname, 'core-socialist-values/dist'),
        filename: 'core-socialist-values.user.js',
        // 清理 /dist 文件夹：https://webpack.docschina.org/guides/output-management/#cleaning-up-the-dist-folder
        clean: true
      }
    },
    {
      ...baseConfig,
      entry: glob.sync('./v2ex-replies-pro/src/*.ts'),
      output: {
        path: path.resolve(__dirname, 'v2ex-replies-pro/dist'),
        filename: 'v2ex-replies-pro.user.js',
        clean: true
      }
    },
    {
      ...baseConfig,
      entry: glob.sync('./discourse-pro/src/*.ts'),
      output: {
        path: path.resolve(__dirname, 'discourse-pro/dist'),
        filename: 'discourse-pro.user.js',
        clean: true
      }
    },
    {
      ...baseConfig,
      entry: glob.sync('./163-mail-pro/src/*.ts'),
      output: {
        path: path.resolve(__dirname, '163-mail-pro/dist'),
        filename: '163-mail-pro.user.js',
        clean: true
      }
    },
    {
      ...baseConfig,
      entry: glob.sync('./gemini-pro/src/*.ts'),
      output: {
        path: path.resolve(__dirname, 'gemini-pro/dist'),
        filename: 'gemini-pro.user.js',
        clean: true
      }
    }
  ];
}
