'use strict';

const binarySearch = (array, value) => {

  let rangeStart = 0;
  let rangeEnd = array.length - 1;

  while (rangeStart <= rangeEnd) {
    let mid = Math.floor((rangeStart + rangeEnd)/2);

    if (array[mid] === value) {
      // array element exists
      return mid;
    } else if (array[mid] < value) {
      rangeEnd = mid;
    } else if (array[mid] > value) {
      rangeStart = mid;
    }
  }
  // array element not found
  return -1;
};

module.exports = binarySearch;
