'use strict';

function reverse(ll) {

  if (!ll.head) { return 'Empty Linked List'; }

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

  return ll;
}

module.exports = reverse;
