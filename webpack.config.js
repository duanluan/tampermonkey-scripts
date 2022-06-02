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
        // test: /\.m?js$/,
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
    // 路径映射为别名，方便 import
    alias: {
      '@utils': path.resolve(__dirname, 'utils/src'),
      '@utils/gm': path.resolve(__dirname, 'utils/src/gm')
    },
    // 忽略路径后缀
    extensions: ['.ts']
  },
  // 保留注释：https://webpack.docschina.org/plugins/terser-webpack-plugin/#preserve-comments
  // optimization: {
  //   minimize: true,
  //   minimizer: [
  //     new TerserPlugin({
  //       terserOptions: {
  //         format: {
  //           comments: /==(\/|)UserScript==|@(name|namespace|version|description|author|license|match|icon|require|grant)/i,
  //         },
  //       },
  //       extractComments: true,
  //     }),
  //   ],
  // },
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
  }
];
