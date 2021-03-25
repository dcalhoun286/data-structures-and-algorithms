'use strict';

const Node = require('../lib/node.js');
const stacksAndQueues = require('../lib/stacks-and-queues.js');

describe('====== Stacks and Queues ======', () => {

  it('can successfully push onto a stack', () => {

    let stack = new stacksAndQueues.Stack();

    stack.push(new Node('potato'));

    expect(stack.top.value).toBe('potato');
    expect(stack.top.next).toBeNull();
    expect(stack.storage[0].value).toBe('potato');
    expect(stack.storage[0].next).toBeNull();
    expect(stack.storage.length).toEqual(1);
  });

  it('can successfully push multiple values onto a stack', () => {

    let stack = new stacksAndQueues.Stack();

    stack.push(new Node('banana'));
    stack.push(new Node('broccoli'));

    expect(stack.top.value).toBe('broccoli');
    expect(stack.top.next.value).toBe('banana');
    expect(stack.storage[0].value).toBe('broccoli');
    expect(stack.storage[1].value).toBe('banana');
    expect(stack.storage[1].next).toBeNull();
    expect(stack.storage.length).toBe(2);
  });

  it('can successfully pop off the stack', () => {

    let stack = new stacksAndQueues.Stack();

    stack.push(new Node('corn'));
    stack.push(new Node('strawberry'));

    let test = stack.pop();

    expect(test.value).toBe('strawberry');
    expect(test.next).toBeNull();

    expect(stack.top.value).toBe('corn');
    expect(stack.top.next).toBeNull();
    expect(stack.storage[0].value).toBe('corn');
    expect(stack.storage[0].next).toBeNull();
    expect(stack.storage.length).toBe(1);
  });

  it('can successfully empty a stack after multiple pops', () => {

    let stack = new stacksAndQueues.Stack();

    stack.push(new Node('blueberry'));
    stack.push(new Node('plum'));
    stack.push(new Node('orange'));

    stack.pop();
    stack.pop();
    stack.pop();

    expect(stack.top).toBeNull();
    expect(stack.storage.length).toEqual(0);
  });

  it('can successfully peek the next item on the stack', () => {
    let stack1 = new stacksAndQueues.Stack();

    let stack2 = new stacksAndQueues.Stack();

    stack1.push(new Node('yam'));

    stack2.push(new Node('shallot'));
    stack2.push(new Node('papaya'));

    let expected1 = stack1.peek();
    expect(expected1.value).toBe('yam');
    expect(expected1.next).toBeNull();

    let expected2 = stack2.peek();
    expect(expected2.value).toBe('papaya');
    expect(expected2.next.value).toBe('shallot');
  });

  it('can successfully instantiate an empty stack', () => {

    let stack = new stacksAndQueues.Stack();

    expect(stack.top).toBeNull();
    expect(Array.isArray(stack.storage)).toBeTrue();
    expect(stack.storage.length).toEqual(0);
  });

  it('Calling pop or peek on empty stack raises exception', () => {
    let stack = new stacksAndQueues.Stack();

    expect(stack.pop()).toHaveReturnedWith('Exception');
    expect(stack.peek()).toHaveReturnedWith('Exception');
  });

  it('can successfully enqueue into a queue', () => {
    let queue = new stacksAndQueues.Queue();

    let node = new Node('guava');

    queue.enqueue(node);

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

    let node1 = new Node('kumquat');
    let node2 = new Node('fig');

    queue.enqueue(node1);
    queue.enqueue(node2);

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

    let node1 = new Node('rutabaga');
    let node2 = new Node('tomato');

    queue.enqueue(node1);
    queue.enqueue(node2);

    let expected = queue.dequeue();

    expect(expected.value).toBe('rutabaga');
    expect(expected.next).toBeNull();
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

    let node1 = new Node('brussels sprouts');
    let node2 = new Node('cauliflower');

    queue.enqueue(node1);
    queue.enqueue(node2);

    let test = queue.peek();

    expect(test.value).toBe('brussels sprouts');
    expect(test.next.value).toBe('cauliflower');

  });

  it('can successfully empty a queue after multiple dequeues', () => {
    let queue = new stacksAndQueues.Queue();

    queue.enqueue(new Node('peas'));
    queue.enqueue(new Node('lemon'));
    queue.enqueue(new Node('jalapeño'));

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
    expect(Array.isArray(queue.storage)).toBeTrue();
    expect(queue.storage.length).toEqual(0);
  });

  it('Calling dequeue or peek on empty queue raises exception', () => {
    let queue = new stacksAndQueues.Queue();

    expect(queue.peek()).toHaveReturnedWith('Exception');
    expect(queue.dequeue()).toHaveReturnedWith('Exception');
  });

});
