'use strict';

const ShelterQueue = require('../lib/fifo-animal-shelter.js');

describe('====== FIFO Animal Shelter ======', () => {
  it('can successfully enqueue a dog into the ShelterQueue', () => {
    let queue = new ShelterQueue();

    queue.enqueue('dog');

    expect(queue.front.value.animal).toBe('dog');
    expect(queue.rear.value.id).toBe(1);
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

  it('can successfully enqueue multiple dogs into the ShelterQueue', () => {
    let queue = new ShelterQueue();

    queue.enqueue('dog');
    queue.enqueue('dog');

    expect(queue.front.value.animal).toBe('dog');
    expect(queue.front.value.id).toBe(1);
    expect(queue.rear.value.animal).toBe('dog');
    expect(queue.rear.value.id).toBe(2);
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

  it('can successfully dequeue a dog out of the ShelterQueue', () => {
    let queue = new ShelterQueue();

    queue.enqueue('dog');
    queue.enqueue('dog');
    queue.enqueue('dog');

    let test = queue.dequeue('dog');

    expect(test.animal).toBe('dog');
    expect(test.id).toBe(1);
    expect(queue.front.value.animal).toBe('dog');
    expect(queue.front.value.id).toBe(2);
    expect(queue.rear.value.animal).toBe('dog');
    expect(queue.rear.value.id).toBe(3);
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

  it('can successfully empty a ShelterQueue after multiple dequeues', () => {
    let queue = new ShelterQueue();

    queue.enqueue('dog');
    queue.enqueue('dog');
    queue.enqueue('cat');

    queue.dequeue('dog');
    queue.dequeue('cat');

    let test = queue.dequeue('dog');

    expect(queue.dequeue('dog')).toBe('No pets available at this shelter');
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

  it('Calling dequeue on an empty ShelterQueue raises an exception', () => {
    let queue = new ShelterQueue();

    expect(queue.dequeue('dog')).toBe('No pets available at this shelter');
    expect(queue.dequeue('cat')).toBe('No pets available at this shelter');
    expect(queue.dequeue('mountain lion')).toBe('No pets available at this shelter');
  });
});
