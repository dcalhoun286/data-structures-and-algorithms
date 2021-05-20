'use strict';

const insertionSort = require('../lib/insertion-sort.js');

describe('====== INSERTION SORT ======', () => {

  it('can properly sort an array', () => {

    let testArr1 = [20, 18, 12, 8, 5, -2];

    insertionSort(testArr1);

    expect(testArr1[0]).toBe(-2);
    expect(testArr1[1]).toBe(5);
    expect(testArr1[2]).toBe(8);
    expect(testArr1[3]).toBe(12);
    expect(testArr1[4]).toBe(18);
    expect(testArr1[5]).toBe(20);

    let testArr2 = [8, 4, 23, 42, 16, 15];

    insertionSort(testArr2);

    expect(testArr2[0]).toBe(4);
    expect(testArr2[1]).toBe(8);
    expect(testArr2[2]).toBe(15);
    expect(testArr2[3]).toBe(16);
    expect(testArr2[4]).toBe(23);
    expect(testArr2[5]).toBe(42);
  });

  it('can properly sort an inverted array', () => {

    let testArr3 = [5, 4, 3, 2, 1];
    insertionSort(testArr3);

    expect(testArr3[0]).toBe(1);
    expect(testArr3[1]).toBe(2);
    expect(testArr3[2]).toBe(3);
    expect(testArr3[3]).toBe(4);
    expect(testArr3[4]).toBe(5);
  });

  it('can properly sort an array with only some unique elements', () => {

    let testArr4 = [5,12,7,5,5,7];

    expect(testArr4[0]).toBe(5);
    expect(testArr4[1]).toBe(5);
    expect(testArr4[2]).toBe(5);
    expect(testArr4[3]).toBe(7);
    expect(testArr4[4]).toBe(7);
    expect(testArr4[5]).toBe(12);
  });

});
