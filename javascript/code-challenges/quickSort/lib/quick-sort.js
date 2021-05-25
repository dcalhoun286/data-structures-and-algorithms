'use strict';

// when invoking the `quickSort` method, the argument entered for `left` is zero, and the argument for `right` is arr[arr.length - 1]

function quickSort(arr, left, right) {

  let position;

  // no point in partitioning an array left there is only one element in it
  if (arr.length >= 2) {
    position = partition(arr, left, right);


    // index to the left should always be less than the index at which array is partitioned
    if (left < position - 1) {
      quickSort(arr, left, position - 1);
    }

    // index to the right should always be greater than the index at which array is partitioned
    if (position < right) {
      quickSort(arr, position, right);
    }
  }

  return arr;
}

function partition(arr, left, right) {

  // pivot variable is the halfway point of the array that's being sorted; since pivot represents an index of the array, it needs to be an integer. `Math.floor` accounts for odd-numbered arrays

  let pivot = Math.floor((left + right)/2);
  let low = left;
  let high = right;

  while (low <= high) {

    while (arr[low] < arr[pivot]) {
      low++;
    }

    while (arr[high] > arr[pivot]) {
      high--;
    }

    if (low <= high) {
      swap(arr, low, high);
      low++;
      high--;
    }

  }

  return low;
}

function swap(arr, low, high) {

  let temp = arr[low];
  arr[low] = arr[high];
  arr[high] = temp;

}

module.exports = quickSort;
