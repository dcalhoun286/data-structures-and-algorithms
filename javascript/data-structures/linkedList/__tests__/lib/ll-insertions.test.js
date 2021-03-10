'use strict';

const LinkedList = require('../../lib/linked-list.js');

describe('====== LinkedList insertions ======', () => {
  it('should add nodes to the end of the list', () => {
    let list = new LinkedList();

    let ten = 10;
    let twenty = 20;
    let thirty = 30;
    let forty = 40;
    let fifty = 50;
    let sixty = 60;

    list.insert(ten);
    list.insert(twenty);
    list.insert(thirty);
    list.insert(forty);
    list.insert(fifty);

    list.append(sixty);

    expect(list.head.next.next.next.next.next.value).toEqual(60);
    expect(list.head.next.next.next.next.next.next).toEqual(null);
  });

  it('should add a node with a new value immediately preceding the first node in a list with a value that matches a search key', () => {
    let list = new LinkedList();

    let ten = 10;
    let twenty = 20;
    let thirty = 30;
    let forty = 40;
    let fifty = 50;

    list.insert(ten);
    list.insert(twenty);
    list.insert(thirty);
    list.insert(forty);
    list.insert(fifty);

    list.insertBefore(40, 35);
    expect(list.head.next.next.next.value).toEqual(60);
    expect(list.head.next.next.next.next.value).toEqual(40);

    expect(list.insertBefore(39, 37)).toThrow('search key not found in list');
  });

  it('should add a node with a new value immediately after the first node in a list with a value that matches a search key', () => {
    let list = new LinkedList();

    let ten = 10;
    let twenty = 20;
    let thirty = 30;
    let forty = 40;
    let fifty = 50;

    list.insert(ten);
    list.insert(twenty);
    list.insert(thirty);
    list.insert(forty);
    list.insert(fifty);

    list.insertAfter(50, 60);
    expect(list.head.next.next.next.next.next.value).toEqual(60);
    list.insertAfter(30, 38);
    expect(list.head.next.next.next.value).toEqual(38);
    expect(list.head.next.next.next.next.value).toEqual(40);

    expect(list.insertAfter(555, 2)).toThrow('search key not found in list');
  });
});
