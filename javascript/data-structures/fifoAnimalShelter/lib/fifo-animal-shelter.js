'use strict';

const Node = require('./node.js');
const Queue = require('./queue.js');

class ShelterQueue {
  constructor() {
    this.front = null;
    this.rear = null;
    this.dogQueue = new Queue();
    this.catQueue = new Queue();
    this.id = 0;
  }
}

module.exports = ShelterQueue;
