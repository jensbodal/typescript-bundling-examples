import * as _ from 'lodash-es';

const withAllLodash = () => {
  const chunk = _.chunk(['a', 'b', 'c', 'd'], 2);
  const compact = _.compact([0, 1, false, 2, '', 3]);
  const difference = _.difference([2, 1], [2, 3]);

  return {
    chunk,
    compact,
    difference,
  };
}

// this default export is not needed just adding to show it doesn't affect tree shaking
export default withAllLodash;
export { withAllLodash };
