'use strict';

const Node = require ('./node.js');

class LinkedList {
  constructor() {
    this.head = null;
  }

  insert(value) {
    let node =  new Node(value);

    if (!this.head) { this.head = node; }

    else {
      let current = node;
      current.next = this.head;
      this.head = current;
    }
  }

  includes(inputVal) {

    let result = false;

    if (!this.head) { return result; }

    let current = this.head;

    while (current) {
      if (current.value === inputVal) {
        result = true;
        break;
      }
      current = current.next;
    }

    return result;
  }

  toString() {
    let str = '';

    if (this.head) {

      let current = this.head;

      while (current.next) {
        str += `[ ${current.value} ] -> `;
        current = current.next;
      }

      str += `[ ${current.value} ]`;

    } else {
      str += 'NULL';
    }

    return str;
  }

  append(value) {
    let node = new Node(value);

    if (!this.head) { this.head = node; }

    else {
      let current = this.head;

      while (current.next) {
        current = current.next;
      }

      current.next = node;
    }
  }

  insertBefore(searchKey, newVal) {

    if (this.head) {
      let node = new Node(newVal);
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

    if (this.head) {
      let node = new Node(newVal);
      let current = this.head;

      if (current.value === searchKey) {
        let temp = current.next;
        current.next = node;
        node.next = temp;
        return;
      }

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

    return 'Exception';
  }

  kthFromEnd(k) {

    if (typeof k !== 'number') { return 'Exception'; }

    if (!Number.isInteger(k)) { return 'Exception'; }

    if (k < 0) { return 'Exception'; }

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
