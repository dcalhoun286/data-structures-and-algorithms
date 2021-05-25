'use strict';

const quickSort = require('../lib/quick-sort.js');

describe('====== QUICK SORT ======', () => {

  it('can sort an array', () => {

    let test = [8, 4, 23, 42, 16, 15];

    let result = quickSort(test, 0, 5);
    console.log(result);

    expect(result).toEqual([4, 8, 15, 16, 23, 42]);

  });

  it('can sort a reversed array', () => {

    let test = [20, 18, 12, 8, 5, -2];

    let result = quickSort(test, 0, 5);
    console.log(result);

    expect(result).toEqual([-2, 5, 8, 12, 18, 20]);

  });

  it('can sort an array with few unique elements', () => {

    let test = [5, 12, 7, 5, 5, 7];

    let result = quickSort(test, 0, 5);
    console.log(result);

    expect(result).toEqual([5, 5, 5, 7, 7, 12]);

  });

  it('can sort a nearly sorted array', () => {

    let test = [2, 3, 5, 7, 13, 11];

    let result = quickSort(test, 0, 5);
    console.log(result);

    expect(result).toEqual([2, 3, 5, 7, 11, 13]);

  });
});
