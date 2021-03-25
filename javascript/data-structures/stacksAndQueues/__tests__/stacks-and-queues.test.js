'use strict';

const stacksAndQueues = require('../lib/stacks-and-queues.js');

describe('====== Stacks and Queues ======', () => {

  it('can successfully push onto a stack', () => {

    let stack = new stacksAndQueues.Stack();

    stack.push('potato');

    expect(stack.top.value).toBe('potato');
    expect(stack.top.next).toBeNull();
    expect(stack.storage[0].value).toBe('potato');
    expect(stack.storage[0].next).toBeNull();
    expect(stack.storage.length).toEqual(1);
  });

  it('can successfully push multiple values onto a stack', () => {

    let stack = new stacksAndQueues.Stack();

    stack.push('banana');
    stack.push('broccoli');

    expect(stack.top.value).toBe('broccoli');
    expect(stack.top.next.value).toBe('banana');
    expect(stack.storage[0].value).toBe('broccoli');
    expect(stack.storage[1].value).toBe('banana');
    expect(stack.storage[1].next).toBeNull();
    expect(stack.storage.length).toBe(2);
  });

  it('can successfully pop off the stack', () => {

    let stack = new stacksAndQueues.Stack();

    stack.push('corn');
    stack.push('strawberry');

    let test = stack.pop();

    expect(test).toBe('strawberry');

    expect(stack.top.value).toBe('corn');
    expect(stack.top.next).toBeNull();
    expect(stack.storage[0].value).toBe('corn');
    expect(stack.storage[0].next).toBeNull();
    expect(stack.storage.length).toBe(1);
  });

  it('can successfully empty a stack after multiple pops', () => {

    let stack = new stacksAndQueues.Stack();

    stack.push('blueberry');
    stack.push('plum');
    stack.push('orange');

    stack.pop();
    stack.pop();
    stack.pop();

    expect(stack.top).toBeNull();
    expect(stack.storage.length).toEqual(0);
  });

  it('can successfully peek the next item on the stack', () => {
    let stack1 = new stacksAndQueues.Stack();

    let stack2 = new stacksAndQueues.Stack();

    stack1.push('yam');

    stack2.push('shallot');
    stack2.push('papaya');

    let expected1 = stack1.peek();
    expect(expected1).toBe('yam');

    let expected2 = stack2.peek();
    expect(expected2).toBe('papaya');
  });

  it('can successfully instantiate an empty stack', () => {

    let stack = new stacksAndQueues.Stack();

    expect(stack.top).toBeNull();
    expect(Array.isArray(stack.storage)).toBe(true);
    expect(stack.storage.length).toEqual(0);
  });

  it('Calling pop or peek on empty stack raises exception', () => {
    let stack = new stacksAndQueues.Stack();

    expect(stack.pop()).toHaveReturnedWith('Exception');
    expect(stack.peek()).toHaveReturnedWith('Exception');
  });

  it('returns the correct boolean when isEmpty is invoked', () => {

    let testStack1 = new stacksAndQueues.Stack();

    let testStack2 = new stacksAndQueues.Stack();
    testStack2.push('lychee');

    expect(testStack1.isEmpty()).toEqual(true);
    expect(testStack2.isEmpty()).toEqual(false);
  });

  it('can successfully enqueue into a queue', () => {
    let queue = new stacksAndQueues.Queue();

    queue.enqueue('guava');

    expect(queue.storage.length).toBe(1);
    expect(queue.storage[0].value).toBe('guava');
    expect(queue.storage[0].next).toBeNull();
    expect(queue.front.value).toBe('guava');
    expect(queue.front.next).toBeNull();
    expect(queue.rear.value).toBe('guava');
    expect(queue.rear.next).toBeNull();
  });

  it('can successfully enqueue multiple values into a queue', () => {

    let queue = new stacksAndQueues.Queue();

    queue.enqueue('kumquat');
    queue.enqueue('fig');

    expect(queue.storage.length).toBe(2);
    expect(queue.storage[0].value).toBe('kumquat');
    expect(queue.storage[0].next.value).toBe('fig');
    expect(queue.storage[1].value).toBe('fig');
    expect(queue.storage[1].next).toBeNull();
    expect(queue.front.value).toBe('kumquat');
    expect(queue.front.next.value).toBe('fig');
    expect(queue.rear.value).toBe('fig');
    expect(queue.rear.next).toBeNull();
  });

  it('can successfully dequeue out of a queue the expected value', () => {
    let queue = new stacksAndQueues.Queue();

    queue.enqueue('rutabaga');
    queue.enqueue('tomato');

    let expected = queue.dequeue();

    expect(expected).toBe('rutabaga');
    expect(queue.storage.length).toBe(1);
    expect(queue.storage[0].value).toBe('tomato');
    expect(queue.storage[0].next).toBeNull();
    expect(queue.front.value).toBe('tomato');
    expect(queue.front.next).toBeNull();
    expect(queue.rear.value).toBe('tomato');
    expect(queue.rear.next).toBeNull();
  });

  it('can successfully peek into a queue, seeing the expected value', () => {
    let queue = new stacksAndQueues.Queue();

    queue.enqueue('brussels sprouts');
    queue.enqueue('cauliflower');

    let test = queue.peek();

    expect(test).toBe('brussels sprouts');

  });

  it('can successfully empty a queue after multiple dequeues', () => {
    let queue = new stacksAndQueues.Queue();

    queue.enqueue('peas');
    queue.enqueue('lemon');
    queue.enqueue('jalapeño');

    queue.dequeue();
    queue.dequeue();
    queue.dequeue();

    expect(queue.front).toBeNull();
    expect(queue.rear).toBeNull();
    expect(queue.storage.length).toEqual(0);
  });

  it('can successfully instantiate an empty queue', () => {
    let queue = new stacksAndQueues.Queue();

    expect(queue.front).toBeNull();
    expect(queue.rear).toBeNull();
    expect(Array.isArray(queue.storage)).toBe(true);
    expect(queue.storage.length).toEqual(0);
  });

  it('Calling dequeue or peek on empty queue raises exception', () => {
    let queue = new stacksAndQueues.Queue();

    expect(queue.peek()).toHaveReturnedWith('Exception');
    expect(queue.dequeue()).toHaveReturnedWith('Exception');
  });

  it('returns the correct boolean when isEmpty is invoked', () => {

    let testQueue1 = new stacksAndQueues.Queue();

    let testQueue2 = new stacksAndQueues.Queue();
    testQueue2.enqueue('watermelon');

    expect(testQueue1.isEmpty()).toEqual(true);
    expect(testQueue2.isEmpty()).toEqual(false);
  });

});
