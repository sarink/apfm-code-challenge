const path = require('path');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const DotenvWebpack = require('dotenv-webpack');
const dotenv = require('dotenv');

const envFile = path.resolve(__dirname, '../.env');
const dotEnvConfig = dotenv.config({ path: envFile });
if (dotEnvConfig.error) throw dotEnvConfig.error;
const { FRONTEND_PORT, FRONTEND_HOST, NODE_ENV, APP_LOCATION } = dotEnvConfig.parsed;

const srcDir = path.resolve(__dirname, 'src');
const distDir = path.resolve(__dirname, 'dist', APP_LOCATION);

let plugins = [
  new DotenvWebpack({ path: envFile }),
  new CleanWebpackPlugin(),
  new HtmlWebpackPlugin({
    filename: 'index.html',
    chunks: ['index'],
    template: 'index.html',
    inject: true,
  }),
];
if (APP_LOCATION === 'local') {
  plugins = plugins.concat([new webpack.HotModuleReplacementPlugin()]);
}
if (NODE_ENV === 'production') {
}

const rhlBabelLoader = {
  loader: 'babel-loader',
  options: {
    plugins: ['react-hot-loader/babel'],
  },
};
const tsLoader = {
  loader: 'ts-loader',
};

module.exports = {
  mode: NODE_ENV === 'development' ? 'development' : 'production',

  devtool: APP_LOCATION === 'local' ? 'eval-source-map' : undefined,

  context: srcDir,

  entry: {
    index: [path.join(srcDir, 'index.tsx')],
  },

  output: {
    publicPath: '/', // Where you uploaded your bundled files (Relative to server root)
    path: distDir, // Local disk directory to store all your output files (Absolute path)
    filename: '[name]-[hash:6].bundle.js',
  },

  module: {
    rules: [
      {
        test: /\.(j|t)sx?$/,
        exclude: [/node_modules/],
        use: APP_LOCATION === 'local' ? [rhlBabelLoader, tsLoader] : [tsLoader],
      },
    ],
  },

  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    modules: [srcDir, path.resolve(__dirname, 'node_modules')],
    alias: APP_LOCATION === 'local' ? { 'react-dom': '@hot-loader/react-dom' } : undefined,
  },

  optimization: {
    // Do not minimize anything in the test env because css classnames will get mangled causing test selectors to fail
    minimizer: NODE_ENV === 'test' ? [] : undefined,
    sideEffects: true,
    usedExports: true,
  },

  devServer:
    APP_LOCATION === 'local'
      ? {
          publicPath: '/', // URL path where the webpack files are served from
          contentBase: distDir, // A directory to serve files non-webpack files from (Absolute path)
          host: FRONTEND_HOST,
          port: FRONTEND_PORT,
          disableHostCheck: true,
          hot: true,
          inline: true,
          watchOptions: {
            ignored: /node_modules/,
          },
          historyApiFallback: true,
        }
      : undefined,

  plugins,
};
