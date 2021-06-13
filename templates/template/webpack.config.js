const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
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
      filename: 'assets/js/[name]_[chunkhash].min.js',
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
        {
          test: /\.html$/i,
          loader: 'html-loader',
          options: {
            sources: false,
          },
        },
        {
          test: /\.s?[ca]ss$/i,
          use: [MiniCssExtractPlugin.loader, 'css-loader?url=false', 'postcss-loader', 'sass-loader'],
        },
      ],
    },
    plugins: [
      ...[
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
          filename: 'assets/css/[name][contenthash].css',
        }),
      ],
      ...(isEnvDevelopment ? [new BundleAnalyzerPlugin()] : []),
    ],
    devtool: isEnvDevelopment ? 'source-map' : false,
  };
};
