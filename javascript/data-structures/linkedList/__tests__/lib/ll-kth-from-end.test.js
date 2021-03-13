'use strict';

const LinkedList = require('../../lib/linked-list.js');

describe('====== Linked List -- kth from end ======', () => {

  let list = new LinkedList();

  let ten = 10;
  let twenty = 20;
  let thirty = 30;
  let forty = 40;
  let fifty = 50;

  list.insert(fifty);
  list.insert(forty);
  list.insert(thirty);
  list.insert(twenty);
  list.insert(ten);

  let test1 = 0;
  let test2 = 3;
  let test3 = 20;
  let test4 = -3;
  let test5 = 3.3;
  let test6 = 'hi';

  it('should return the node\'s value that is k from the end of the linked list', () => {
    expect(list.kthFromEnd(test1)).toEqual(50);
    expect(list.kthFromEnd(test2)).toEqual(20);
  });

  it('should return an exception if k is larger than the length of the linked list', () => {
    expect(list.kthFromEnd(test3)).toEqual('Exception');
  });

  it('should return an exception if k is a negative number', () => {
    expect(list.kthFromEnd(test4)).toEqual('Exception');
  });

  it('should return an exception if k is not an integer', () => {
    expect(list.kthFromEnd(test5)).toEqual('Exception');
  });

  it('should return an exception if k is not a number', () => {
    expect(list.kthFromEnd(test6)).toEqual('Exception');
  });
});
