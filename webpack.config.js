const glob = require('glob');
const path = require("path");
const TerserPlugin = require("terser-webpack-plugin");

const baseConfig = {
  // mode: 'development',
  mode: 'production',
  // 使用 source map：https://webpack.docschina.org/guides/development/#using-source-maps
  devtool: 'inline-source-map',
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
    extensions: ['.ts']
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

module.exports = [
  {
    ...baseConfig,
    entry: glob.sync('./amazon-kindle-douban-score/src/*.ts'),
    output: {
      path: path.resolve(__dirname, 'amazon-kindle-douban-score/dist'),
      filename: 'main.js',
      // 清理 /dist 文件夹：https://webpack.docschina.org/guides/output-management/#cleaning-up-the-dist-folder
      clean: true
    }
  },
  {
    ...baseConfig,
    entry: glob.sync('./core-socialist-values/src/*.ts'),
    output: {
      path: path.resolve(__dirname, 'core-socialist-values/dist'),
      filename: 'main.js',
      clean: true
    }
  },
  {
    ...baseConfig,
    entry: glob.sync('./v2ex-replies-pro/src/*.ts'),
    output: {
      path: path.resolve(__dirname, 'v2ex-replies-pro/dist'),
      filename: 'main.js',
      clean: true
    }
  }
];
