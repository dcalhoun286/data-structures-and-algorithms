'use strict';

const Node = require('./node.js');

// first in, first out structure
class Queue {
  constructor() {
    this.front = null;
    this.rear = null;
    this.storage = [];
  }

  enqueue(item) {

    if (this.storage.length === 0) {
      this.storage.push(item);
      this.front = item;
      this.rear = item;
    } else if (this.storage.length >= 1) {
      this.storage.push(item);
      this.storage[this.storage.length - 1].next = item;
      this.rear = item;
    }

    console.log(this.storage[0]);
  }
}

// last in, first out structure
class Stack {

}

module.exports = {
  Stack: Stack,
  Queue: Queue
};
