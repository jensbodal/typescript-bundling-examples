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

export default withAllLodash;
export { withAllLodash };
