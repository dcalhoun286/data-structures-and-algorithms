'use strict';

const reverse = require('../array-reverse.js');

describe('Array Reverse', () => {

  it('should reverse the array', () => {

    let myArray = [1,2,3,4,5];
    let expected = [5,4,3,2,1];

    expect(reverse(myArray)).toEqual(expected);
  });
});
