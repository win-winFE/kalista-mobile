import webpack from 'webpack';
// import ExtractTextPlugin from 'extract-text-webpack-plugin';
import WebpackMd5Hash from 'webpack-md5-hash';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import path from 'path';
const pkg = require('./package');

const baseUrl = process.env.NODE_ENV === 'production' ? '//your-prod-cdn.com' : '//your-test-cdn.com';

const GLOBALS = {
  'process.env.NODE_ENV': JSON.stringify('production'),
  __DEV__: false,
};

export default {
  resolve: {
    extensions: ['*', '.js', '.jsx', '.json'],
  },
  devtool: 'source-map',
  entry: path.resolve(__dirname, 'src/index'),
  target: 'web',
  mode: 'production',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: baseUrl,
    filename: `${pkg.name}/[name].js?v=[hash:7]`,
  },
  plugins: [
    new WebpackMd5Hash(),
    new webpack.DefinePlugin(GLOBALS),
    // new ExtractTextPlugin('[name].[md5:contenthash:hex:20].css'),
    new HtmlWebpackPlugin({
      template: 'src/index.ejs',
      favicon: 'src/favicon.ico',
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true,
      },
      inject: true,
      trackJSToken: '',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
      },
      {
        test: /\.(png|jpe?g|gif|svg|ico)(\?.*)?$/,
        exclude: /node_modules/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 1000,
            name: `${pkg.version}/imgs/[name].[ext]?v=[hash:7]`,
          },
        },
      },
      { test: /\.css$/, use: ['style-loader', 'css-loader', 'postcss-loader'] },
      { test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader', 'postcss-loader'] },
    ],
  },
};
