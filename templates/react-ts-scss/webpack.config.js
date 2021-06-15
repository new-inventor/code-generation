const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = function (env, argv) {
  const isEnvProduction = argv.mode === 'production';
  const isEnvDevelopment = argv.mode === 'development';

  return {
    entry: {
      main: './src/index.tsx',
    },
    resolve: {
      extensions: ['.ts', '.tsx', '.js'],
      alias: {
        '@root': path.resolve(__dirname, 'src/'),
        '@ui': path.resolve(__dirname, 'src/ui/'),
        '@img': path.resolve(__dirname, 'src/img/'),
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
        new CopyWebpackPlugin({
          patterns: [
            { from: './public/favicon.ico', to: './favicon.ico' },
            { from: './public/robots.txt', to: './robots.txt' },
            { from: './public/manifest.json', to: './manifest.json' },
            { from: './public/logo512.png', to: './logo512.png' },
            { from: './public/logo192.png', to: './logo192.png' },
          ],
        }),
        new MiniCssExtractPlugin({
          filename: 'assets/css/[name][contenthash].css',
        }),
        new HtmlWebpackPlugin(
          Object.assign(
            {},
            {
              inject: true,
              template: './public/index.html',
            },
            isEnvProduction
              ? {
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
                }
              : undefined
          )
        ),
      ],
      ...(isEnvDevelopment ? [new BundleAnalyzerPlugin()] : []),
    ],
    devtool: isEnvDevelopment ? 'source-map' : false,
  };
};
