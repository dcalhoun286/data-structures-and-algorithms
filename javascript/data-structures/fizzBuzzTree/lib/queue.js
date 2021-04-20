'use strict';

const Node = require('./node.js');

class Queue {
  constructor() {
    this.front = null;
    this.rear = null;
    this.storage = [];
  }

  enqueue(value) {

    let node = new Node(value);

    if (!this.front) {
      this.front = node;
      this.rear = node;
      this.storage.push(node);
    } else {
      this.rear = node;
      this.storage.push(node);
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

    return 'Queue is empty';
  }
}

module.exports = Queue;
