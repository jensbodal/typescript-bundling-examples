'use strict';

const ts = require('typescript');
const { existsSync } = require('fs');

const getParsedTsConfig = filename => {
  const configParseResult = ts.getParsedCommandLineOfConfigFile(filename, {}, ts.sys);

  return ts.convertToTSConfig(configParseResult, filename, ts.sys);
};

const tsConfig = getParsedTsConfig(`${__dirname}/test.tsconfig.json`);
const {
  compilerOptions: { paths: tsConfigPaths },
} = tsConfig;

const tsConfigPathsAsModuleAliases = Object.entries(tsConfigPaths).reduce((acc, [key, paths]) => {
  const validKey = key.replace('/*', '');

  acc[validKey] = ([originalPath, packageWithoutAlias]) => {
    for (const path of paths) {
      const validPath = (!path.startsWith('./') ? `./${path}` : path).replace('/*', '');
      const testPath = `${validPath}${packageWithoutAlias}`;

      if (existsSync(testPath)) {
        return testPath;
      }
    }
  };
  return acc;
}, {});

module.exports = api => {
  api.cache(true);

  const plugins = [
    [
      'module-resolver',
      {
        alias: {
          ...tsConfigPathsAsModuleAliases,
        },
      },
    ],
  ];

  const presets = ['@babel/preset-typescript'];

  return {
    plugins,
    presets,
  };
};
