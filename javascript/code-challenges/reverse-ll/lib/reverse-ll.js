'use strict';

const LinkedList = require ('../../../data-structures/linkedList/lib/linked-list.js');

function reverse(ll) {

  if (ll.head) {
    let previous = null;
    let current = ll.head;
    let next;

    while (current.next) {
      next = current.next;
      current.next = previous;
      previous = current;
      current = next;
    }

    current.next = previous;
    ll.head = current;
  }
}

let list1 = new LinkedList();
list1.append(2);
list1.append(4);
list1.append(6);
list1.append(8);
list1.append(10);

module.exports = reverse;
