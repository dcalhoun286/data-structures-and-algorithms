'use strict';

const Stack = require('./stack.js');

function validateBrackets(string) {
  const stack = new Stack();
  let result = true;
  const regexOpen = /(\()|({)|(\[)/;
  const regexClose = /(\))|(})|(\])/;
  if (typeof string !== 'string') { return 'arg is not a string'; }
  for (let i = 0; i < string.length; i++) {
    if (i === 0 && string[i].match(regexOpen)) { stack.push(string[i]); }
    else if (i === 0 && string[i].match(regexClose) ) {
      result = false;
      break;
    }
    else {
      if (string[i].match(regexOpen)) {stack.push(string[i]); }
      else {
        if ( string[i] === ')' && stack.top.value === '(' ) { stack.pop(); }
        else if ( string[i] === ']' && stack.top.value === '[' ) { stack.pop(); }
        else if ( string[i] === '}' && stack.top.value === '{' ) { stack.pop(); }
        else if (string[i].match(regexClose)) {
          result = false;
          break;
        }
      }
    }
  }
  if (!stack.isEmpty()) { result = false; }
  return result;
}

const test1 = validateBrackets('{}');
const test2 = validateBrackets('{}(){}');
const test3 = validateBrackets('()[[blablabla]]');
const test4 = validateBrackets('(){}[[]]');
const test5 = validateBrackets('{}{apples}[oranges](())');
const test6 = validateBrackets('[({}]');
const test7 = validateBrackets('(](');
const test8 = validateBrackets('{(})');
const test9 = validateBrackets('{');
const test10 = validateBrackets(')');
const test11 = validateBrackets('[}');

console.log(
  test1,
  test2,
  test3,
  test4,
  test5,
  test6,
  test7,
  test8,
  test9,
  test10,
  test11
);

module.exports = validateBrackets;
