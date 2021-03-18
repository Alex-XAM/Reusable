'use strict';

const range = (start = 15, end = 30) => {
  if (end - start < 0) return [];
  const arr = [];
  for (let i = start; i <= end; i++) {
    arr.push(i);
  }
  return arr;
};

module.exports = { range };
