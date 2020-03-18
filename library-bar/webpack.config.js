const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const nodeExternals = require('webpack-node-externals');
const path = require('path');

const babelConfig = require('./babel.config.js');
const packageJson = require('./package.json');

module.exports = {
  mode: 'production',
  target: 'node',
  externals: [nodeExternals()], // in order to ignore all modules in node_modules folder
  context: __dirname,
  entry: {
    main: './src/index.ts',
  },
  output: {
    path: path.resolve(__dirname, 'lib'),
    filename: 'index.js',
    library: packageJson.name,
    libraryTarget: 'umd',
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          ...babelConfig,
          cacheDirectory: true,
        },
        // options: {
        //   transpileOnly: true
        // },
      },
    ],
  },
  plugins: [new ForkTsCheckerWebpackPlugin()],
  resolve: {
    // only necessary if only using ts-loader?
    // alias: {
    //   src: path.resolve(__dirname, 'src/'),
    // },
    extensions: ['.ts'],
  },
};
