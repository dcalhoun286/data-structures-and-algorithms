'use strict';

const shift = require('../array-shift.js');

describe('Array Shift', () => {
  it('should insert an input value into the middle of an array', () => {

    let myArray1 = [2, 4, 6, 10, 12];
    let myVal1 = 8;
    let expected1 = [2, 4, 6, 8, 10, 12];

    let myArray2 = [30, 33, 36, 42, 50, 55];
    let myVal2 = 40;
    let expected2 = [30, 33, 36, 40, 42, 50, 55];

    expect(shift(myArray1, myVal1)).toEqual(expected1);
    expect(shift(myArray2, myVal2)).toEqual(expected2);
  });
});
