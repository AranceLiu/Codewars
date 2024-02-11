const sequenceSum = (begin, end, step) => {
  if (begin > end) return 0;
  const n = Math.floor((end - begin) / step) + 1;
  const an = begin + (n - 1) * step;
  return ((begin + an) * n) / 2;
};

console.log(sequenceSum(2, 2, 2)); //2
console.log(sequenceSum(2, 6, 2)); //12
console.log(sequenceSum(1, 5, 1)); //15
console.log(sequenceSum(1, 5, 3)); //5
console.log(sequenceSum(158, 14, 95)); //0
