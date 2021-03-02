'use strict';

const binarySearch = (array, value) => {

  let rangeStart = 0;
  let rangeEnd = array.length - 1;

  while (rangeStart <= rangeEnd) {
    let mid = Math.floor((rangeStart + rangeEnd)/2);

    if (array.length === 0) {
      return -1;
    }

    if (array.length === 1) {
      if (array[0] === value) {
        return 0;
      } else {
        return -1;
      }
    }
    if (array[mid] === value) {
      // array element exists
      return mid;
    } else if (array[mid] < value) {
      rangeStart = mid + 1;
    } else if (array[mid] > value) {
      rangeEnd = mid - 1;
    }
  }
  // array element not found
  return -1;
};

module.exports = binarySearch;
