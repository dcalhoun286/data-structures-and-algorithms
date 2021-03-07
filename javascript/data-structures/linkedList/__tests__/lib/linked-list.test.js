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

  it('will return true when searching for a value that existswithin the linked list, and false if the value doesn\'t exist in the list', () => {
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

    expect(list.includes(two)).toBe(true);
    expect(list.includes(four)).toBe(false);
  });

  it('can properly return a collection of all the values that exist in the linked list', () => {
    let list1 = new LinkedList();
    let six = 'six';
    let seven = 'seven';
    let eight = 'eight';
    let nine = 'nine';
    let ten = 'ten';

    list1.insert(ten);
    list1.insert(nine);
    list1.insert(eight);
    list1.insert(seven);
    list1.insert(six);

    expect(list1.toString()).toEqual(`{ ${six} } -> { ${seven} } -> { ${eight} } -> { ${nine} } -> { ${ten} } -> NULL`);
  });
});
