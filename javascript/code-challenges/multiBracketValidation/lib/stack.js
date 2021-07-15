class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

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
    if (!this.top) {
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

module.exports = Stack;
