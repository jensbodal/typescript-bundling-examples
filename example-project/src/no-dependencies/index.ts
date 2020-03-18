const arr = [1, 2, 3, 4, 5];

const something = arr.map(v => ({ value: v }));

(() => console.log(something))();

export { something };
export default something;
