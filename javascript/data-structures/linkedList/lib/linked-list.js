'use strict';

// pull in the Node class -> this will give us the ability to instantiate (add) new nodes to our linked list
const Node = require('./node.js');

/*
  add our 1st node
  this.head = { value: 10, next: null }
*/

class LinkedList {
  constructor() {
    this.head = null;
  }

  insert(value) {
    let node = new Node(value);

    if (!this.head) {
      let current = node;
      this.head = current;
    } else {
      let current = node;
      current.next = this.head;
      this.head = current;
    }
  }

  // includes(value) {

  // }

  // toString(value) {

  // }
}

module.exports = LinkedList;
