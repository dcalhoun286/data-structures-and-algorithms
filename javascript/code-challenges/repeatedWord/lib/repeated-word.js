'use strict';

const HashMap = require ('./hashmap.js');

function repeatedWord(str) {
  const strArr = str.split(' ');
  const ht = new HashMap();

  if (typeof str !== 'string') { return 'Exception: not a string'; }
  if (!str.length) { return 'Exception: empty string'; }

  for (let i = 0; i < strArr.length; i++) {
    const result = ht.add(strArr[i]);
    if (result) { return strArr[i]; }
  }

  return 'All words in string are unique';
}

module.exports = repeatedWord;
