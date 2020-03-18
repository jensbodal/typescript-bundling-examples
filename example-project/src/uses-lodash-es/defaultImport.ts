import partialRight from 'lodash-es/partialRight';

const arr = [1, 2, 3, 4, 5, 6, 7];

const something = arr.map(v => ({ value: v }));

const sortaPrettyJson = partialRight(JSON.stringify, null, 12);

(() => {
  console.log(sortaPrettyJson(something));
})();

const prettySomething = sortaPrettyJson(something);

export default prettySomething;
