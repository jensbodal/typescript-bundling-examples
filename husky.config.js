module.exports = {
  hooks: {
    'commit-msg': 'commitlint -E HUSKY_GIT_PARAMS',
    'pre-commit': 'lint-staged',
    'prepare-commit-msg': 'git-commit-template .commit-template',
  },
};
