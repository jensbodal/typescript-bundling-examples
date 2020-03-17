const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const path = require('path');

const {readdirSync, statSync} = require('fs');

const createFileEntryPoints = (path, options = {}) => {
  let entries = {};
  const { extensions = [], ignoreExtensions = [], replacePrefix = ''} = options;
  const files = readdirSync(path);

  for (const file of files) {
    if (ignoreExtensions.some(extension => file.endsWith(extension))) {
      continue;
    }

    const filepath = `${path}/${file}`;

    if (statSync(filepath).isDirectory()) {
      entries = {
        ...entries,
        ...createFileEntryPoints(filepath, options)
      };
    } else {
      if (!extensions.some(extension => file.endsWith(extension))) {
        continue;
      }

      const extension = `.${filepath.split('.').pop()}`;
      const regex = new RegExp(`(${replacePrefix}|${extension})`, 'g');
      const key = filepath.replace(regex, '');

      entries[key] = filepath;
    }
  }

  return entries;
}

const mode = 'production';

module.exports = {
  mode,
  // compile for usage in a node.js environment
  // ignores built-in modules like path, fs, etc.
  target: 'node',
  optimization: {
    // minimize: false,
    // node + splitChunks only works with webpack@5
    splitChunks: {
      chunks: 'all',
    }
  },

  entry: createFileEntryPoints('./src', {
    extensions: ['.ts'],
    ignoreExtensions: ['.test.ts', '.spec.ts'],
    replacePrefix: './src/',
  }),

  output: {
    path: path.resolve(__dirname, 'dist-webpack'),
    chunkFilename: '[name].chunk.js',
  },

  module: {
    rules: [
      {
        test: /\.(js|ts)$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
    ],
  },
  plugins: [
    new ForkTsCheckerWebpackPlugin()
  ],
  resolve: {
    extensions: ['.ts', '.js'],
  },
};
