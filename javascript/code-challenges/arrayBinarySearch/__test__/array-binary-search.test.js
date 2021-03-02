'use strict';

const binarySearchTest = require('../array-binary-search.js');

describe('Binary Search', () => {
  it('should return the index of an array value if it matches the search key', () => {

    const searchKey1 = 3;
    const searchKey2 = 75;

    let smallArray = [3, 10];
    expect(binarySearchTest(smallArray, searchKey1)).toEqual(0);
    let largeArray = [3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36, 39, 42, 45, 48, 51, 54, 57, 60, 63, 66, 69, 72, 75, 78, 81, 84, 87, 90];
    expect(binarySearchTest(largeArray, searchKey2)).toEqual(24);
  });

  it('should return -1 if input is an empty array', () => {

    const key = 1;

    let emptyArr = [];
    expect(binarySearchTest(emptyArr, key)).toEqual(-1);
  });

  it('should still be able to perform search if length of array is 1', () => {

    const key1 = 5;
    const key2 = 7;

    let arr = [5];

    expect(binarySearchTest(arr, key1)).toEqual(0);
    expect(binarySearchTest(arr, key2)).toEqual(-1);
  });
  it('should return -1 if the search key cannot be found in the array', () => {

    const searchKey3 = -5;
    const searchKey4 = 500;

    let smallArray = [3, 10];
    expect(binarySearchTest(smallArray, searchKey3)).toEqual(-1);
    let largeArray = [3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36, 39, 42, 45, 48, 51, 54, 57, 60, 63, 66, 69, 72, 75, 78, 81, 84, 87, 90];
    expect(binarySearchTest(largeArray, searchKey4)).toEqual(-1);
  });
});
