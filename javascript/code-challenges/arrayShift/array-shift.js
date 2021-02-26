'use strict';

/*
  Feature Tasks: Write a function called `insertShiftArray` which takes in an array and the value to be added. Without utilizing any of the built-in methods available to your language, return an array with the new value added at the middle index.

  ------Example--------

  Input: [2,4,6,8], 5
  Output: [2,4,5,6,8]

  Input: [4,8,15,23,42], 16
  Output: [4,8,15,16,23,42]
*/

const insertShiftArray = (inputArray, inputNum) => {
  const outputArray = [];

  // Math.ceil is being used to account for arrays with a odd-numbered length number, in these cases inputArray.length / 2 is not an integer, and indices need to be integers
  const half = Math.ceil(inputArray.length / 2);

  for (let i = 0; i < inputArray.length; i++) {
    if(half === i) {
      outputArray[half] = inputNum;
      outputArray[half+1] = inputArray[i];

    } else if(outputArray.length - 1 > half) {
      outputArray[outputArray.length] = inputArray[i];
    } else {
      outputArray[i] = inputArray[i];
    }
  }
  console.log('shifted array', outputArray);
  return outputArray;
};

module.exports = insertShiftArray;
