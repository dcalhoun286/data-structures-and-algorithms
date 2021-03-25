'use strict';

const Node = require('./node.js');

// first in, first out structure
class Queue {
  constructor() {
    this.front = null;
    this.rear = null;
    this.storage = [];
  }
}

// last in, first out structure
class Stack {

}

module.exports = {
  Stack: Stack,
  Queue: Queue
};
