'use strict';

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

module.exports = reverse;
