'use strict';

function leftJoin (ht1, ht2) {

  let outputArr = [];

  for (let i = 0; i < ht1.keys.length; i++) {
    outputArr.push([]);
  }

  for ( let i = 0; i < ht1.keys.length; i++ ) {

    let hashed = ht1.hash(ht1.keys[i]);

    outputArr[i][outputArr[i].length] = ht1.keys[i];
    let current1 = ht1.map[hashed].head;

    while (current1) {
      if (`${ht1.keys[i]}` in current1.value) {
        outputArr[i][outputArr[i].length] = current1.value[ht1.keys[i]];
      }
      current1 = current1.next;
    }

    if (!ht2.contains(ht1.keys[i])) {
      outputArr[i][outputArr[i].length] = null;
    } else {
      let current2 = ht2.map[hashed].head;
      while (current2) {

        if (`${ht1.keys[i]}` in current2.value && !current2.value[`${ht1.keys[i]}`]) {
          outputArr[i][outputArr[i].length] = null;
        } else if (`${ht1.keys[i]}` in current2.value && current2.value[`${ht1.keys[i]}`]) {
          outputArr[i][outputArr[i].length] = current2.value[ht1.keys[i]];
        }

        current2 = current2.next;
      }
    }
  }

  return outputArr;

}

module.exports = leftJoin;
