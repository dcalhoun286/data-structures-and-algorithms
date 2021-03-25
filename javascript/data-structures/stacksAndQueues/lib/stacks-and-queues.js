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

    let node = new Node(item);

    if (this.storage.length === 0) {

      this.storage.push(node);
      this.front = node;
      this.rear = node;

    } else if (this.storage.length >= 1) {

      this.storage[this.storage.length - 1].next = node;
      this.storage.push(node);
      this.rear = node;

    }
  }

  dequeue() {

    if (this.storage.length === 1) {

      let shifted = this.storage.shift();
      this.front = null;
      this.rear = null;

      return shifted.value;

    } else if (this.storage.length > 1) {

      let shifted = this.storage.shift();
      this.front = this.storage[0];
      return shifted.value;

    }

    return 'Exception';
  }

  peek() {

    if (this.front) {
      return this.front.value;
    }

    return 'Exception';
  }

  isEmpty() {
    if (this.top === null) {
      return Boolean(true);
    } else {
      return Boolean(false);
    }
  }
}

// last in, first out structure
class Stack {
  constructor() {
    this.top = null;
    this.storage = [];
  }
}

module.exports = {
  Stack: Stack,
  Queue: Queue
};
