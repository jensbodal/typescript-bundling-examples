const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const nodeExternals = require('webpack-node-externals');
const path = require('path');

const {readdirSync, statSync} = require('fs');

const packageJson = require('./package.json');

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

module.exports = {
  mode: 'production',
  target: 'node',
  externals: [nodeExternals()], // in order to ignore all modules in node_modules folder
  context: __dirname,
  // entry: createFileEntryPoints('./src', {
  //   extensions: ['.ts'],
  //   ignoreExtensions: ['.test.ts', '.spec.ts'],
  //   replacePrefix: './src/',
  // }),
  entry: {
    main: './src/index.ts',
  },
  output: {
    path: path.resolve(__dirname, 'lib'),
    filename: 'index.webpack.js',
    library: packageJson.name,
    libraryTarget: 'umd',
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: 'ts-loader',
        options: {
          transpileOnly: true,
        },
      },
    ],
  },
  plugins: [
    new ForkTsCheckerWebpackPlugin(),
  ],
  resolve: {
    alias: {
      src: path.resolve(__dirname, 'src/'),
    },
    extensions: ['.ts'],
  },
};
