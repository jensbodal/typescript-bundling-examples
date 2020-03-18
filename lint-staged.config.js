module.exports = {
  '*.{js,ts}': ['npm run eslint -- --fix'],
  '!*.{js,ts}': ['prettier --list-different --write'],
};
