'use strict';

const LinkedList = require('./linked-list.js');

class HashMap {

  constructor(size) {
    this.size = size;
    this.map = new Array(size).fill(new LinkedList());
    this.keys = {};
  }

  hash (key) {

    let reduced = key.split('').reduce((acc, val) => {
      let cc = acc * val.charCodeAt(0);
      let num = acc + cc;
      return num;
      // accumulator needs to begin at 1, or else the output of `reduced` variable will be 0 from the multiplication, thus making the output of `hashed` variable undefined (can't divide a number by 0)
    }, 1);

    let hashed = reduced * 599 % this.size;

    return hashed;

  }

  set (key, value) {

    if (this.has(key)) { return 'key already exists'; }
    if (this.has(key) === 'exception') { return 'exception'; }

    let hashed = this.hash(key);

    let obj = { [key]: value };

    this.map[hashed].append(obj);

    this.keys[key] = true;

  }

  get (key) {

    if (!this.has(key)) { return 'key  not found'; }

    let hashed = this.hash(key);

    if (!this.map[hashed].head) { return null; }

    let current = this.map[hashed].head;
    let values = [];

    while (current) {
      values[values.length] = current.value;
      current = current.next;
    }

    return values;

  }

  has (key) {

    let hashed = this.hash(key);

    if (hashed > this.map.length - 1) { return 'exception'; }

    if (this.map[hashed].head) {

      let current = this.map[hashed].head;

      while (current) {
        if (`${key}` in current.value) { return true; }
        current = current.next;
      }

      return false;
    }

  }

}

module.exports = HashMap;
