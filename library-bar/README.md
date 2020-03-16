# Goal

1. Export from root and allow it to be tree-shaken (lodash-es can do this...)
    -- Need to use named import/exports AND set `sideEffects: false` in the package.json
2. Allow usage of alias syntax instead of relative directories (webpack alias?)
3. Don't allow `import blah from 'fileA'` when it should be `import blah from './fileA'`
4. Base `package.json` merge strategy
