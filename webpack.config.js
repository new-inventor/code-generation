const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = function (env, argv) {
  const isEnvDevelopment = argv.mode === 'development';

  return {
    entry: {
      create: './src/create-app.ts',
    },
    target: 'node',
    resolve: {
      extensions: ['.ts', '.tsx', '.js'],
      alias: {
        '@root': path.resolve(__dirname, 'src/'),
      },
    },
    output: {
      path: path.join(__dirname, '/dist'),
      filename: '[name].min.js',
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
      new CleanWebpackPlugin(),
    ],
    devtool: isEnvDevelopment ? 'source-map' : false,
  };
};
