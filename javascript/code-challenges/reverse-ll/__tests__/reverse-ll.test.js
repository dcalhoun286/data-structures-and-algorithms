'use strict';

const reverse = require('../lib/reverse-ll.js');
const LinkedList = require('../../../data-structures/linkedList/lib/linked-list.js');

describe('====== REVERSE ======', () => {
  it('returns a linked list', () => {
    let ll1 = new LinkedList();
    ll1.append(2);
    ll1.append(4);
    ll1.append(6);
    let result = reverse(ll1);

    expect(result).toBeTruthy();
  });

  it('properly reverses a linked list', () => {
    let ll2 = new LinkedList();
    ll2.append(8);
    ll2.append(10);
    ll2.append(12);

    reverse(ll2);
    let string2 = ll2.toString();

    expect(string2).toEqual('{ 12 } -> { 10 } -> { 8 } -> NULL');
  });

  it('returns an exception for an empty linked list', () => {
    let ll3 = new LinkedList();
    const result = reverse(ll3);
    expect(result).toEqual('Empty Linked List');
  });
});
