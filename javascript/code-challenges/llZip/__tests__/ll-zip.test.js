'use strict';

const LinkedList = require('../lib/linked-list.js');

const llZip = require('../lib/ll-zip.js');

describe('====== llZip ======', () => {
  it('should create an empty list on instantiation', () => {
    let list = new LinkedList();
    expect(list.head).toEqual(null);
  });

  it('should add nodes to the beginning of the list', () => {
    let list = new LinkedList();
    let first = 'first';
    let second = 'second';

    list.insert(first);
    expect(list.head.value).toEqual(first);
    list.insert(second);
    expect(list.head.value).toEqual(second);
    expect(list.head.next.value).toEqual(first);
  });

  it('should zip two linked lists together, alternating nodes between each list', () => {
    let list1 = new LinkedList();
    let list2 = new LinkedList();

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

    const zippedList = {
      head: {
        value: 1,
        next: {
          value: 2,
          next: {
            value: 3,
            next: {
              value: 4,
              next: {
                value: 5,
                next: {
                  value: 6,
                  next: {
                    value: 7,
                    next: {
                      value: 8,
                      next: {
                        value: 9,
                        next: {
                          value: 10,
                          next: null
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    };

    expect(llZip(list1, list2)).toEqual(zippedList);
  });

});
