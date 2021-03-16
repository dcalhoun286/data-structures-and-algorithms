'use strict';

const Node = require('./node.js');

class LinkedList {
  constructor() {
    this.head = null;
  }

  insert(value) {
    let node = new Node(value);

    if(!this.head) {
      let current = node;
      this.head = current;
    } else {
      let current = node;
      current.next = this.head;
      this.head = current;
    }
  }

  toString() {
    let str = 'head -> ';
    let current = this.head;
    if (this.head) {
      str += `[${current.value}] -> `;
      while (current.next) {
        current = current.next;
        str += `[${current.value}] -> `;
      }
    }
    str += 'X';
    return str;
  }
}

function zipLists(list1, list2) {

  let zippedList = new LinkedList();

  zippedList.head = list1.head;

  let current1 = zippedList.head;
  let current2 = list2.head;

  while (current1.next && current2.next) {
    let temp = current1.next;
    let node = new Node(current2.value);
    current1.next = node;
    node.next = temp;

    if (current1.next.next) {
      current1 = current1.next.next;
    }

    if (current2.next) {
      current2 = current2.next;
    }
  }

  if (current1.next && !current2.next) {
    let temp = current1.next;
    let node = new Node(current2.value);
    current1.next = node;
    node.next = temp;
  } else {
    current1.next = current2;
  }

  return zippedList.toString();

  // if(!current1 && current2) {
  //   current1 = current2;
  // } else if (current1 && !current2) {
  //   current2 = current1;
  // }

  // if (current1) {

  //   while (current1.next && current2.next) {

  //     let temp = current1.next;

  //     let node = new Node(current2.value);
  //     current1.next = node;
  //     node.next = temp;
  //     current1 = current1.next.next;

  //     if (current2.next) {
  //       current2 = current2.next;
  //     }
  //   }
  // }

  // if (current2) {
  //   current1.next = current2;
  // }

  // current1 = list2.head;
  // console.log(zippedList);

}

module.exports = {
  List: LinkedList,
  zipLists: zipLists
};
