import { barNoDependencies } from 'library-bar/lib/no-dependencies';
import { barNoDependencies as barNoDependenciesRoot } from 'library-bar';

(() => {
  console.log(barNoDependencies());
  console.log(barNoDependenciesRoot());
})();
