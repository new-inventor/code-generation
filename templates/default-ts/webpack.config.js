const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = function (env, argv) {
  const isEnvDevelopment = argv.mode === 'development';

  return {
    entry: {
      main: './src/index.ts',
    },
    resolve: {
      extensions: ['.ts', '.tsx', '.js'],
      alias: {
        '@root': path.resolve(__dirname, 'src/'),
      },
    },
    output: {
      path: path.join(__dirname, '/dist'),
      filename: '[name]_[chunkhash].min.js',
      publicPath: '',
      scriptType: 'text/javascript',
    },
    watchOptions: {
      aggregateTimeout: 200,
      ignored: /node_modules/,
      poll: 500,
    },
    module: {
      rules: [
        {
          test: /\.ts(x?)$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'babel-loader',
            },
          ],
        },
      ],
    },
    plugins: [
      ...[
        new CleanWebpackPlugin(),
      ],
      ...(isEnvDevelopment ? [new BundleAnalyzerPlugin()] : []),
    ],
    devtool: isEnvDevelopment ? 'source-map' : false,
  };
};
