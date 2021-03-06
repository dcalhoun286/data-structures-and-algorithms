'use strict';

const Stack = require('./stacks.js');
const Node = require('./node.js');

class PseudoQueue {
  constructor() {
    this.front = null;
    this.rear = null;

    // each PseudoQueue needs to be instantiated with two empty Stacks
    this.stack1 = new Stack();
    this.stack2 = new Stack();
  }

  enqueue(value) {
    let node = new Node(value);

    if (!this.stack1.storage.length) {

      this.stack1.push(node);
      this.front = node;
      this.rear = node;

    } else {

      this.stack1.push(node);
      this.rear = node;

    }
  }

  dequeue() {

    if (!this.front) {
      return 'Empty PseudoQueue';
    }

    while (this.stack1.storage.length) {
      this.stack2.push(this.stack1.top);
      this.stack1.pop();
    }

    let dequeued = this.stack2.pop();

    if (this.stack2.top) {
      this.front = this.stack2.top;

      while(this.stack2.storage.length) {
        this.stack1.push(this.stack2.top);
        this.stack2.pop();
      }

    } else {
      this.front = null;
      this.rear = null;
    }

    return dequeued;
  }
}

module.exports = PseudoQueue;
