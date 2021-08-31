'use strict';

const Node = require('./node.js');

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

  includes(inputVal) {
    if (this.head) {

      let current = this.head;

      if (current.value === inputVal) {
        return true;
      }

      while (current.next) {
        current = current.next;
        if (current.value === inputVal) {
          return true;
        }
      }
    }
    return false;
  }

  toString() {
    let str = '';
    let current = this.head;
    if (this.head) {
      str += `{ ${current.value} } -> `;
      while (current.next) {
        current = current.next;
        str += `{ ${current.value} } -> `;
      }
    }
    str += 'NULL';
    return str;
  }

  append(value) {
    let node = new Node(value);
    if (!this.head) {
      this.head = node;
      // return;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
  }

  insertBefore(searchKey, newVal) {
    let node = new Node(newVal);
    if (this.head) {
      let current = this.head;
      if (searchKey === current.value) {

        node.next = current;
        this.head = node;
        return;
      } else {
        while (current.next) {
          if (searchKey === current.next.value) {
            node.next = current.next;
            current.next = node;
            return;
          }
          current = current.next;
        }
      }
    }
    return 'Exception';
  }

  insertAfter(searchKey, newVal) {
    let node = new Node(newVal);
    if (this.head) {
      if (this.head.value === searchKey) {
        let temp = this.head.next;
        this.head.next = node;
        node.next = temp;
        return;
      } else {
        let current = this.head;
        while (current.next) {
          current = current.next;
          if (current.value === searchKey) {
            let temp = current.next;
            current.next = node;
            node.next = temp;
            return;
          }
        }
      }
    }
    return 'Exception';
  }

  kthFromEnd(k) {
    if (typeof k !== 'number') {
      return 'Exception';
    }

    if (!Number.isInteger(k)) {
      return 'Exception';
    }

    if (k < 0) {
      return 'Exception';
    }

    let counter1 = 0;
    if (this.head) {
      let current = this.head;
      counter1++;
      while (current.next) {
        current = current.next;
        counter1++;
      }

      if (k < counter1) {
        let counter2 = counter1 - k;
        current = this.head;
        for (let i = 1; i < counter2; i++) {
          current = current.next;
        }
        return current.value;
      }
    }
    return 'Exception';
  }
}

module.exports = LinkedList;
