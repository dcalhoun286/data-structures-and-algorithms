'use strict';

const binarySearch = require('../array-binary-search.js');

describe('Binary Search', () => {
  it('should return the index of an array value if it matches the search key', () => {

    const searchKey1 = 3;
    const searchKey2 = 75;

    let smallArray = [3, 10];
    expect(binarySearch(smallArray, searchKey1).toStrictEqual(0));
    let largeArray = [3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36, 39, 42, 45, 48, 51, 54, 57, 60, 63, 66, 69, 72, 75, 78, 81, 84, 87, 90];
    expect(binarySearch(largeArray, searchKey2).toStrictEqual(24));
  });

  it('should return -1 if the search key cannot be found in the array', () => {

    const searchKey3 = -5;
    const searchKey4 = 500;

    let smallArray = [3, 10];
    expect(binarySearch(smallArray, searchKey3).toStrictEqual(-1));
    let largeArray = [3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36, 39, 42, 45, 48, 51, 54, 57, 60, 63, 66, 69, 72, 75, 78, 81, 84, 87, 90];
    expect(binarySearch(largeArray, searchKey4).toStrictEqual(-1));
  });
});
