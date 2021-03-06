'use strict';

const PseudoQueue = require('../lib/queue-with-stacks.js');

describe('====== PseudoQueue Test ======', () => {
  it('can create an empty PseudoQueue upon instantiation', () => {
    let queue = new PseudoQueue();

    expect(queue.stack1.top).toBeNull();
    expect(queue.stack2.top).toBeNull();
    expect(queue.stack1.storage.length).toBe(0);
    expect(queue.stack2.storage.length).toBe(0);
    expect(queue.front).toBe(null);
    expect(queue.rear).toBe(null);
    expect(queue.dequeue()).toBe('Empty PseudoQueue');
    expect(queue.stack1.peek()).toBe('Exception');
    expect(queue.stack2.peek()).toBe('Exception');
  });

  it('can successfully enqueue a value into the PseudoQue', () => {
    let queue = new PseudoQueue();

    queue.enqueue('banana');

    expect(queue.front.value).toBe('banana');
    expect(queue.rear.value).toBe('banana');
    expect(queue.stack1.top.value).toBe('banana');
    expect(queue.stack1.storage.length).toBe(1);
    expect(queue.stack1.storage[0].value).toBe('banana');
    expect(queue.stack1.peek()).toBe('banana');
    expect(queue.stack2.peek()).toBe('Exception');
  });

  it('can successfully enqueue multiple values into the PseudoQue', () => {
    let queue = new PseudoQueue();

    queue.enqueue('banana');
    queue.enqueue('orange');

    expect(queue.front.value).toBe('banana');
    expect(queue.rear.value).toBe('orange');
    expect(queue.stack1.top.value).toBe('orange');
    expect(queue.stack1.storage.length).toBe(2);
    expect(queue.stack1.storage[0].value).toBe('orange');
    expect(queue.stack1.storage[1].value).toBe('banana');
    expect(queue.stack1.peek()).toBe('orange');
    expect(queue.stack2.peek()).toBe('Exception');
  });

  it('can successfully dequeue out of a PseudoQueue the expected value', () => {
    let queue = new PseudoQueue();

    queue.enqueue('banana');
    queue.enqueue('orange');

    let testDequeued = queue.dequeue();

    expect(queue.front.value).toBe('orange');
    expect(queue.rear.value).toBe('orange');
    expect(queue.stack1.top.value).toBe('orange');
    expect(queue.stack1.storage.length).toBe(1);
    expect(queue.stack1.storage[0].value).toBe('orange');
    expect(queue.stack1.peek()).toBe('orange');
    expect(queue.stack2.peek()).toBe('Exception');
    expect(testDequeued).toBe('banana');
  });

  it('can successfully empty a PseudoQueue after calling multiple dequeues', () => {
    let queue = new PseudoQueue();

    queue.enqueue('kumquat');
    queue.enqueue('cranberry');

    queue.dequeue();
    queue.dequeue();

    expect(queue.stack1.top).toBeNull();
    expect(queue.stack2.top).toBeNull();
    expect(queue.stack1.storage.length).toBe(0);
    expect(queue.stack2.storage.length).toBe(0);
    expect(queue.front).toBe(null);
    expect(queue.rear).toBe(null);
    expect(queue.dequeue()).toBe('Empty PseudoQueue');
    expect(queue.stack1.peek()).toBe('Exception');
    expect(queue.stack2.peek()).toBe('Exception');
  });

  it('Calling a dequeue on an empty PseudoQueue raises an exception', () => {
    let queue = new PseudoQueue();

    expect(queue.dequeue()).toBe('Empty PseudoQueue');
  });
});
