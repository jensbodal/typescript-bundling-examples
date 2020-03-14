# testing tsc => babel => babel-node
yarn babelify && \
  yarn test:babel-node && \
  yarn test:node-esm

# testing babel => babel-node
yarn babelify-ts && \
  yarn test:babel-node && \
  yarn test:node-esm
