'use strict';

const quickSort = require('../lib/quick-sort.js');

describe('====== QUICK SORT ======', () => {

  it('can sort an array', () => {

    let test = [8, 4, 23, 42, 16, 15];

    quickSort(test);
    console.log(test);

    expect(test[0]).toBe(4);
    expect(test[1]).toBe(8);
    expect(test[2]).toBe(15);
    expect(test[3]).toBe(16);
    expect(test[4]).toBe(23);
    expect(test[5]).toBe(42);
    expect(test.length).toBe(6);

  });

  it('can sort a reversed array', () => {

    let test = [20, 18, 12, 8, 5, -2];

    quickSort(test);
    console.log(test);

    expect(test[0]).toBe(-2);
    expect(test[1]).toBe(5);
    expect(test[2]).toBe(8);
    expect(test[3]).toBe(12);
    expect(test[4]).toBe(18);
    expect(test[5]).toBe(20);
    expect(test.length).toBe(6);

  });

  it('can sort an array with few unique elements', () => {

    let test = [5, 12, 7, 5, 5, 7];

    quickSort(test);
    console.log(test);

    expect(test[0]).toBe(5);
    expect(test[1]).toBe(5);
    expect(test[2]).toBe(5);
    expect(test[3]).toBe(7);
    expect(test[4]).toBe(7);
    expect(test[5]).toBe(12);
    expect(test.length).toBe(6);

  });

  it('can sort a nearly sorted array', () => {

    let test = [2, 3, 5, 7, 13, 11];

    quickSort(test);
    console.log(test);

    expect(test[0]).toBe(2);
    expect(test[1]).toBe(3);
    expect(test[2]).toBe(5);
    expect(test[3]).toBe(7);
    expect(test[4]).toBe(11);
    expect(test[5]).toBe(13);
    expect(test.length).toBe(6);

  });
});
