'use strict';

const ll = require('../lib/ll-zip.js');

describe('====== llZip ======', () => {
  it('should create an empty list on instantiation', () => {
    let list = new ll.List();
    expect(list.head).toEqual(null);
  });

  it('should add nodes to the beginning of the list', () => {
    let list = new ll.List();
    let first = 'first';
    let second = 'second';

    list.insert(first);
    expect(list.head.value).toEqual(first);
    list.insert(second);
    expect(list.head.value).toEqual(second);
    expect(list.head.next.value).toEqual(first);
  });

  it('should zip two linked lists together, alternating nodes between each list', () => {
    let list1 = new ll.List();
    let list2 = new ll.List();
    let list3 = new ll.List();
    let list4 = new ll.List();
    let list5 = new ll.List();
    let list6 = new ll.List();

    let one = 1;
    let two = 2;
    let three = 3;
    let four = 4;
    let five = 5;
    let six = 6;
    let seven = 7;
    let eight = 8;
    let nine = 9;
    let ten = 10;

    list1.insert(nine);
    list1.insert(seven);
    list1.insert(five);
    list1.insert(three);
    list1.insert(one);

    list2.insert(ten);
    list2.insert(eight);
    list2.insert(six);
    list2.insert(four);
    list2.insert(two);

    list3.insert(ten);
    list3.insert(eight);
    list3.insert(six);

    list4.insert(nine);
    list4.insert(seven);

    list5.insert(eight);
    list5.insert(six);

    list6.insert(ten);
    list6.insert(nine);
    list6.insert(seven);

    const zippedList1 = ll.zipLists(list1, list2);
    const zippedList2 = ll.zipLists(list3, list4);
    const zippedList3 = ll.zipLists(list5, list6);

    expect(ll.zipLists(list1, list2)).toEqual(zippedList1);
    expect(ll.zipLists(list3, list4)).toEqual(zippedList2);
    expect(ll.zipLists(list5, list6)).toEqual(zippedList3);
  });

});
