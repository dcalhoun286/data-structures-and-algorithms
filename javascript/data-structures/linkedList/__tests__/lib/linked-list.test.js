'use strict';

const LinkedList = require('../../lib/linked-list.js');

describe('====== Linked List Class ======', () => {
  it('should create an empty list on instantiation', () => {
    let list = new LinkedList();
    expect(list.head).toEqual(null);
  });

  it('should add items to the list', () => {
    let list = new LinkedList();
    let first = 'first';
    let second = 'second';

    list.insert(first);
    expect(list.head.value).toEqual(first);
    list.insert(second);
    expect(list.head.value).toEqual(second);
    expect(list.head.next.value).toEqual(first);
  });

  it('should return true if the input value exists as a node\'s value somewhere within the list', () => {
    let list = new LinkedList();
    let one = 'one';
    let two = 'two';
    let three = 'three';
    let four = 'four';
    let five = 'five';

    list.insert(five);
    list.insert(three);
    list.insert(two);
    list.insert(one);

    expect(list.includes(two)).toEqual(true);
    expect(list.includes(four)).toEqual(false);
  });
});