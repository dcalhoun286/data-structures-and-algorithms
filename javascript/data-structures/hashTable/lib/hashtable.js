'use strict';

const LinkedList = require('./linked-list.js');

class HashMap {

  fillMap() {
    for (let i = 0; i < this.size; i++) {
      this.map[this.map.length] = new LinkedList();
    }
  }
  constructor(size) {
    this.size = size;
    this.map = [];
    this.keys = {};

    this.fillMap();
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

  add (key, value) {

    if (this.contains(key)) { return 'key already exists'; }

    let hashed = this.hash(key);

    let obj = { [key]: value };

    this.map[hashed].append(obj);

    this.keys[key] = true;

  }

  get (key) {

    if (!this.contains(key)) { return null; }

    let hashed = this.hash(key);

    if (!this.map[hashed].head) { return null; }

    let current = this.map[hashed].head;

    while (current) {
      if (`${key}` in current.value) { return current.value[key]; }
      current = current.next;
    }

  }

  contains (key) {

    let hashed = this.hash(key);

    if (this.map[hashed].head) {

      let current = this.map[hashed].head;

      while (current) {
        if (`${key}` in current.value) { return true; }
        current = current.next;
      }

    }

    return false;

  }

}

module.exports = HashMap;
