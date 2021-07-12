'use strict';

function mergeSort(arr) {

  let n = arr.length;
  if (n < 2) { return arr; }

  let mid = n/2;
  let left = [];
  let right = [];

  if (n % 2 === 0) {

    for (let i = 0; i < mid; i++) {
      left.push(arr[i]);
    }

    for (let i = mid; i < arr.length; i++) {
      right.push(arr[i]);
    }

  } else {

    for (let i = 0; i < Math.ceil(mid); i++) {
      left.push(arr[i]);
    }

    for (let i = Math.ceil(mid); i < arr.length; i++) {
      right.push(arr[i]);
    }

  }
}

function sortArrays(a, b) {

  let merged = [];


  while ( left.length || right.length ) {
    if (left[0] <= right[0]) {
      merged.push(left.shift());
    } else {
      merged.push(right.shift());
    }
  }
}

module.exports = mergeSort;
