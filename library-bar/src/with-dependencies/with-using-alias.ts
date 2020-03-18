import { barNoDependencies } from 'src/no-dependencies';
import { withAllLodash } from './with-all-lodash';

(() => {
  console.log(barNoDependencies());
  console.log(withAllLodash().difference);
})();

const withUsingAlias = () => {
  console.log(barNoDependencies());
  console.log(withAllLodash().difference);
};

export { withUsingAlias };
