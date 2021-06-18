'use strict';

const Node = require('./node.js');

class Queue {
  constructor() {
    this.front = null;
    this.rear = null;
    this.storage = [];
  }

  enqueue(item) {
    let node = new Node(item);

    if (!this.storage.length) {
      this.storage.push(node);
      this.front = node;
      this.rear = node;
    } else {
      this.storage[this.storage.length - 1].next = node;
      this.storage.push(node);
      this.rear = node;
    }
  }

  dequeue() {
    if (this.isEmpty()) { return 'Exception'; }
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
  }

  peek() {
    if (this.front) { return this.front.value; }
    return 'Exception';
  }

  isEmpty() {
    if (!this.front) { return true; }
    return false;
  }
}

module.exports = Queue;
