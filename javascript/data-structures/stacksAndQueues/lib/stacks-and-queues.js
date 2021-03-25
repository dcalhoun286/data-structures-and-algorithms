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

      let dequeued = this.storage.shift();
      this.front = null;
      this.rear = null;

      return dequeued.value;

    } else if (this.storage.length > 1) {

      let dequeued = this.storage.shift();
      this.front = this.storage[0];
      return dequeued.value;

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
    if (!this.front) {
      return true;
    }

    return false;
  }
}

// last in, first out structure
class Stack {
  constructor() {
    this.top = null;
    this.storage = [];
  }

  push(item) {

    let node = new Node(item);

    this.top = node;
    this.storage.unshift(node);

    if (this.storage.length > 1) {
      this.top.next = this.storage[1];
    }
  }

  pop() {

    if (!this.top) {
      return 'Exception';
    }

    let popped = this.storage.shift();

    if (!this.storage.length) {
      this.top = null;
      return popped.value;
    }

    this.top = this.storage[0];
    return popped.value;
  }

  peek() {
    if(!this.top) {
      return 'Exception';
    }

    return this.top.value;
  }

  isEmpty() {

    if (!this.top) {
      return true;
    }

    return false;
  }
}

module.exports = {
  Stack: Stack,
  Queue: Queue
};
