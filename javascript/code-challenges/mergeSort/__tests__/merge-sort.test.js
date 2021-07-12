'use strict';

const mergeSort = require('../lib/merge-sort.js');

describe('====== MERGE SORT ======', () => {
  it('can sort an array', () => {

    let test1 = [8, 4, 23, 42, 16, 15];
    let test2 = [20, 18, 12, 8, 5, -2];
    let test3 = [5, 12, 7, 5, 5, 7];
    let test4 = [2, 3, 5, 7, 13, 11];
    let test5 = [4, 6, 34, 85, 13];

    let output1 = mergeSort(test1);
    let output2 = mergeSort(test2);
    let output3 = mergeSort(test3);
    let output4 = mergeSort(test4);
    let output5 = mergeSort(test5);

    expect(output1.length).toBe(6);
    expect(output1[0]).toBe(4);
    expect(output1[1]).toBe(8);
    expect(output1[2]).toBe(15);
    expect(output1[3]).toBe(16);
    expect(output1[4]).toBe(23);
    expect(output1[5]).toBe(42);

    expect(output2.length).toBe(6);
    expect(output2[0]).toBe(-2);
    expect(output2[1]).toBe(5);
    expect(output2[2]).toBe(8);
    expect(output2[3]).toBe(12);
    expect(output2[4]).toBe(18);
    expect(output2[5]).toBe(20);

    expect(output3.length).toBe(6);
    expect(output3[0]).toBe(5);
    expect(output3[1]).toBe(5);
    expect(output3[2]).toBe(5);
    expect(output3[3]).toBe(7);
    expect(output3[4]).toBe(7);
    expect(output3[5]).toBe(12);

    expect(output4.length).toBe(6);
    expect(output4[0]).toBe(2);
    expect(output4[1]).toBe(3);
    expect(output4[2]).toBe(5);
    expect(output4[3]).toBe(7);
    expect(output4[4]).toBe(11);
    expect(output4[5]).toBe(13);

    expect(output5.length).toBe(5);
    expect(output5[0]).toBe(4);
    expect(output5[1]).toBe(6);
    expect(output5[2]).toBe(13);
    expect(output5[3]).toBe(34);
    expect(output5[4]).toBe(85);

  });
});
