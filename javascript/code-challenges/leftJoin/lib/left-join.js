'use strict';

const HashMap = require('./hashtable.js');

function leftJoin (ht1, ht2) {

  let outputArr = [];

  for (let i = 0; i < ht1.keys.length; i++) {
    outputArr.push([]);
  }

  console.log('new empty arr', outputArr);
  console.log('h1 keys', ht1.keys);
  console.log('h2 keys', ht2.keys);

  for ( let i = 0; i < ht1.keys.length; i++ ) {

    let hashed = ht1.hash(ht1.keys[i]);
    console.log('hashed num', hashed);

    outputArr[i][outputArr[i].length] = ht1.keys[i];
    // outputArr[i].push(ht1.keys[i]);
    console.log('output arr', outputArr);
    console.log(`key being pushed into output arr at index ${i}`, ht1.keys[i]);
    console.log('inner arr content', outputArr[i]);
    let current1 = ht1.map[hashed].head;
    while (current1) {
      if (`${ht1.keys[i]}` in current1.value) {
        outputArr[i][outputArr[i].length] = current1.value[ht1.keys[i]];
        // outputArr[i].push(current1.value[ht1.keys[i]]);
        console.log(`value being pushed into output arr at index ${i}`, current1.value[ht1.keys[i]]);
      }
      current1 = current1.next;
    }

    if (!ht2.contains(ht1.keys[i])) {
      outputArr[i][outputArr[i].length] = null;
      // outputArr[i].push(null);
    } else {
      let current2 = ht2.map[hashed].head;
      while (current2) {
        if (`${ht1.keys[i]}` in current2.value && !current2.value[`${ht1.keys[i]}`]) {
          outputArr[i][outputArr[i].length] = null;
          // outputArr[i].push(null);
        } else if (`${ht1.keys[i]}` in current2.value && current2.value[`${ht1.keys[i]}`]) {
          outputArr[i][outputArr[i].length] = current2.value[ht1.keys[i]];
          // outputArr[i].push(current2.value[ht1.keys[i]]);
          console.log(`value being pushed into output arr at index ${i}`, current2.value[ht1.keys[i]]);

        }
        current2 = current2.next;
      }
    }
  }

  return outputArr;

}

let h1 = new HashMap(1000);

h1.add('fond', 'enamored');
h1.add('wrath', 'anger');
h1.add('diligent', 'employed');

let h2 = new HashMap(1000);

h2.add('fond', 'averse');
h2.add('wrath', 'delight');
h2.add('diligent', 'idle');

console.log(leftJoin(h1, h2));
console.log(JSON.stringify(h1.map[0]));
console.log(JSON.stringify(h1.map[1]));
console.log(JSON.stringify(h1.map[2]));
console.log(JSON.stringify(h1.map[3]));
console.log(JSON.stringify(h1.map[4]));

module.exports = leftJoin;
