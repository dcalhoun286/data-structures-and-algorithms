'use strict';

function leftJoin (ht1, ht2) {

  let outputArr = new Array(ht1.keys.length).fill(new Array);

  for ( let i = 0; i < ht1.keys.length; i++ ) {

    outputArr[i].push(ht1.keys[i]);
    let hashed = ht1.hash(ht1.keys[i]);
    let current = ht1.map[hashed].head;
    while (current) {
      if (`${ht1.keys[i]}` in current.value) {
        outputArr[i].push(current.value[ht1.keys[i]]);
      }
      current = current.next;
    }

    if (!ht2.contains(ht1.keys[i])) {
      outputArr[i].push(null);
    } else {
      let current = ht2.map[hashed].head;
      while (current) {
        if (`${ht1.keys[i]}` in current.value && !current.value[`${ht1.keys[i]}`]) {
          outputArr[i].push(null);
        } else if (`${ht1.keys[i]}` in current.value && current.value[`${ht1.keys[i]}`]) {
          outputArr[i].push(current.value[ht1.keys[i]]);
        }
        current = current.next;
      }
    }
  }

  return outputArr;

}

module.exports = leftJoin;
