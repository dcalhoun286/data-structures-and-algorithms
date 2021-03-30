'use strict';

class Stack {
  constructor() {
    this.top = null;
    this.storage = [];
  }

  push(item) {

    this.top = item;
    this.storage.unshift(item);

    if(this.storage.length > 1) {
      this.top.next = this.storage[1];
    }
  }

  pop() {
    if(!this.top) {
      return 'Exception';
    }

    this.storage.shift();

    if(!this.storage.length) {
      this.top = null;
      // return popped.value;
    }

    this.top = this.storage[0];
    // return popped.value;
  }

  peek() {
    if(!this.top) {
      return 'Exception';
    }

    return this.top.value;
  }
}

module.exports = Stack;
