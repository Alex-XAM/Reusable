'use strict';

const square = x => x * x;
const cube = x => x ** 3;
const average = (a, b) => (a + b) / 2;
const calculate = (arr = []) => {
  for (let i = 0; i <= 9; i++) {
    const averageNum = average(square(i), cube(i));
    arr[i] = averageNum;
  }
  return arr;
};

calculate();

module.exports = { square, cube, average, calculate };
