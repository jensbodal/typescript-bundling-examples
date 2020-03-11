# testing tsc => babel => babel-node
yarn babelify && yarn test:babel-node

# testing babel => babel-node
yarn babelify-ts && yarn test:babel-node
