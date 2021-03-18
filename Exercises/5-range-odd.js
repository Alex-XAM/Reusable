'use strict';

const rangeOdd = (start = 15, end = 30) => {
  if (end - start < 0) return [];
  const arr = [];
  for (let i = start; i <= end; i++) {
    if (i % 2 !== 0) arr.push(i);
  }
  return arr;
};

module.exports = { rangeOdd };
