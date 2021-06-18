'use strict';

const AnimalShelter = require('../lib/fifo-animal-shelter.js');
const Node = require('../lib/node.js');

describe('====== FIFO Animal Shelter ======', () => {
  it('can successfully enqueue a dog into the AnimalShelter', () => {
    let queue = new AnimalShelter();

    queue.enqueue('dog');
    console.log('dog added', queue.front);
    console.log('dog queue add', queue.dogQueue.front);
    expect(queue.front.animal).toBe('dog');
    expect(queue.rear.id).toBe(1);
    expect(queue.dogQueue.storage.length).toBe(1);
    expect(queue.dogQueue.storage[0].value.animal).toBe('dog');
    expect(queue.dogQueue.storage[0].next).toBeNull();
    expect(queue.dogQueue.front.value.animal).toBe('dog');
    expect(queue.dogQueue.front.value.id).toBe(1);
    expect(queue.dogQueue.rear.value.animal).toBe('dog');
    expect(queue.dogQueue.rear.value.id).toBe(1);
    expect(queue.dogQueue.rear.next).toBeNull();
    expect(queue.catQueue.storage.length).toBe(0);
    expect(queue.catQueue.front).toBeNull();
  });

  it('can successfully enqueue multiple dogs into the AnimalShelter', () => {
    let queue = new AnimalShelter();

    queue.enqueue('dog');
    queue.enqueue('dog');

    expect(queue.front.animal).toBe('dog');
    expect(queue.front.id).toBe(1);
    expect(queue.rear.animal).toBe('dog');
    expect(queue.rear.id).toBe(2);
    expect(queue.dogQueue.storage.length).toBe(2);
    expect(queue.dogQueue.storage[0].value.animal).toBe('dog');
    expect(queue.dogQueue.storage[0].value.id).toBe(1);
    expect(queue.dogQueue.storage[1].value.animal).toBe('dog');
    expect(queue.dogQueue.storage[1].value.id).toBe(2);
    expect(queue.dogQueue.storage[0].next.value.id).toBe(2);
    expect(queue.dogQueue.front.value.animal).toBe('dog');
    expect(queue.dogQueue.front.value.id).toBe(1);
    expect(queue.dogQueue.rear.value.animal).toBe('dog');
    expect(queue.dogQueue.rear.value.id).toBe(2);
    expect(queue.dogQueue.rear.next).toBeNull();
    expect(queue.catQueue.storage.length).toBe(0);
    expect(queue.catQueue.front).toBeNull();
  });

  it('will reject an entry if not a dog or cat', () => {
    let queue = new AnimalShelter();

    let test = queue.enqueue('t-rex');
    expect(test).toBe('Please enter dog or cat');
  });
  it('can successfully dequeue a dog out of the AnimalShelter', () => {
    let queue = new AnimalShelter();

    queue.enqueue('dog');
    queue.enqueue('dog');
    queue.enqueue('dog');

    let test = queue.dequeue('dog');
    console.log('test', test);
    expect(test.animal).toBe('dog');
    expect(test.id).toBe(1);
    expect(queue.front.animal).toBe('dog');
    expect(queue.front.id).toBe(2);
    expect(queue.rear.animal).toBe('dog');
    expect(queue.rear.id).toBe(3);
    expect(queue.dogQueue.storage.length).toBe(2);
    expect(queue.dogQueue.storage[0].value.animal).toBe('dog');
    expect(queue.dogQueue.storage[0].value.id).toBe(2);
    expect(queue.dogQueue.storage[1].value.animal).toBe('dog');
    expect(queue.dogQueue.storage[1].value.id).toBe(3);
    expect(queue.dogQueue.storage[0].next.value.id).toBe(3);
    expect(queue.dogQueue.front.value.animal).toBe('dog');
    expect(queue.dogQueue.front.value.id).toBe(2);
    expect(queue.dogQueue.rear.value.animal).toBe('dog');
    expect(queue.dogQueue.rear.value.id).toBe(3);
    expect(queue.dogQueue.rear.next).toBeNull();
    expect(queue.catQueue.storage.length).toBe(0);
    expect(queue.catQueue.front).toBeNull();
  });

  it('can successfully empty a AnimalShelter after multiple dequeues', () => {
    let queue = new AnimalShelter();

    queue.enqueue('dog');
    queue.enqueue('dog');
    queue.enqueue('cat');

    queue.dequeue('dog');
    queue.dequeue('cat');

    let test = queue.dequeue('dog');

    expect(queue.dequeue('dog')).toBe('No dogs available at this shelter');
    expect(queue.front).toBeNull();
    expect(queue.rear).toBeNull();
    expect(queue.catQueue.storage.length).toBe(0);
    expect(queue.dogQueue.storage.length).toBe(0);
    expect(queue.catQueue.front).toBeNull();
    expect(queue.catQueue.rear).toBeNull();
    expect(queue.dogQueue.front).toBeNull();
    expect(queue.dogQueue.rear).toBeNull();
    expect(test.animal).toBe('dog');
    expect(test.id).toBe(2);
  });

  it('Calling dequeue on an empty AnimalShelter raises an exception', () => {
    let queue = new AnimalShelter();

    expect(queue.dequeue('dog')).toBe('No dogs available at this shelter');
    expect(queue.dequeue('cat')).toBe('No cats available at this shelter');
  });

  it('Calling dequeue using an invalid option returns null', () => {
    let queue = new AnimalShelter();

    expect(queue.dequeue('mountain lion')).toBe(null);
  });

  it('can successfully instantiate a new AnimalShelter', () => {
    let queue = new AnimalShelter();

    expect(queue.front).toBeNull();
    expect(queue.rear).toBeNull();
    expect(queue.dogQueue.front).toBeNull();
    expect(queue.catQueue.front).toBeNull();
    expect(queue.dogQueue.rear).toBeNull();
    expect(queue.catQueue.rear).toBeNull();
    expect(queue.dogQueue.storage.length).toBe(0);
    expect(queue.catQueue.storage.length).toBe(0);
    expect(queue.dequeue('dog')).toBe('No dogs available at this shelter');
  });

  it('can successfully instantiate a new Node', () => {
    let node = new Node('test');

    expect(node.value).toBe('test');
    expect(node.next).toBeNull();
  });
});
