const path = require('path');
const webpackPreprocessor = require('@cypress/webpack-preprocessor');
const DotenvWebpack = require('dotenv-webpack');

module.exports = (cypressConfig) => {
  const appWebpackConfig = require('../../../webpack.config');
  const envFile = path.resolve(__dirname, '../../../../.env');

  const webpackOptions = {
    context: path.resolve(__dirname, '../'),
    mode: appWebpackConfig.mode,
    module: appWebpackConfig.module,
    optimization: appWebpackConfig.optimization,
    resolve: appWebpackConfig.resolve,
    plugins: [new DotenvWebpack({ path: envFile })],
  };

  return webpackPreprocessor({ webpackOptions });
};
