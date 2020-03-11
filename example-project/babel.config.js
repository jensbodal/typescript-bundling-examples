"use strict";

module.exports = (api) => {
  api.cache(true);

  const plugins = [];

  const presets = [
    // allows you to use the latest JavaScript without needing to micromanage which syntax transforms (and optionally, browser polyfills)
    "@babel/preset-env",
    "@babel/preset-typescript",
  ];

  return {
    plugins,
    presets
  };
};
