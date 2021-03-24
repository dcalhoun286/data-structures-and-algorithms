'use strict';

const Node = require('../lib/node.js');

const stacksAndQueues = require('../lib/stacks-and-queues.js');

describe('====== Stacks and Queues ======', () => {

  it('can successfully push onto a stack', () => {

    let stack = new stacksAndQueues.Stack();

    stack.push('potato');

    expect(stack.top.value).toBe('potato');
    expect(stack.top.next).toBeNull();
  });

  it('can successfully push multiple values onto a stack', () => {

  });

  it('can successfully pop off the stack', () => {

  });

  it('can successfully empty a stack after multiple pops', () => {

  });

  it('can successfully peek the next item on the stack', () => {

  });

  it('can successfully instantiate an empty stack', () => {
    let stack = new stacksAndQueues.Stack();

    expect(stack.top).toBeNull();
    expect(Array.isArray(stack.storage)).toBeTrue();
    expect(stack.storage.length).toEqual(0);
  });

  it('Calling pop or peek on empty stack raises exception', () => {

  });

  it('can successfully enqueue into a queue', () => {

  });

  it('can successfully enqueue multiple values into a queue', () => {

  });

  it('can successfully dequeue out of a queue the expected value', () => {

  });

  it('can successfully peek into a queue, seeing the expected value', () => {

  });

  it('can successfully empty a queue after multiple dequeues', () => {

  });

  it('can successfully instantiate an empty queue', () => {

  });

  it('Calling dequeue or peek on empty queue raises exception', () => {

  });

});
