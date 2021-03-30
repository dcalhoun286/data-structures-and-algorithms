# Queue With Stacks

This is a Data Structures and Algorithms challenge that works with [stacks and queues](https://codefellows.github.io/common_curriculum/data_structures_and_algorithms/Code_401/class-10/resources/stacks_and_queues.html). In this challenge, instead of the First In, First Out (FIFO) method being implemented on Queues using an array, FIFO is implemented using two Stacks.

## Author: Dar-Ci Calhoun

## Links

- Pull Request [queue-with-stacks](https://github.com/dcalhoun286/data-structures-and-algorithms/pull/36)

## Challenge

### Features

- Create a brand new `PseudoQueue` class. Do not use an existing Queue. Instead, this `PseudoQueue` class will implement our standard queue interface (the two methods listed below), but will internally only utilize 2 `Stack` objects. Ensure that you create your class with the following methods:
  - `enqueue(value)` which inserts `value` into the PseudoQueue
  -`dequeue()` which extracts a value from the PseudoQueue
- The `Stack` instances have only `push`, `pop`, and `seek` methods. You should use your own Stack implementation. Instantiate these Stack objects into your PseudoQueue constructor.

### Structure and Testing

Write tests to prove the following functionality:

1. Can successfully instantiate an empty PseudoQueue
1. Can successfully enqueue a value into a PseudoQueue
1. Can successfully enqueue multiple values into a PseudoQueue
1. Can successfully dequeue a value from the PseudoQueue
1. Can successfully empty a PseudoQueue after calling multiple dequeues
1. Calling dequeue on an empty PseudoQueue raises an exception

## Approach & Efficiency

## API

- `class PseudoQueue`: Each PseudoQueue has four properties: a `front`, a `rear`, a `stack1`, and a `stack2`. Upon instantiation of a new PseudoQueue, `front` and `rear` are set to `null`; and `stack1` and `stack1` are empty, newly instantiated Stacks. The `stack1` is used to maintain the order in which values are enqueued, and `stack2` is only utilized to dequeue items from the PseudoQueue.
  - `enqueue(item)`: The method I used has a time/space efficiency of O(1). The value passed as an argument in `enqueue` is used to instantiate a Node, and then this Node is added to `stack1`.
  - `dequeue(item)`:

## Solution

### Solution Code

- [class PseudoQueue](lib/queue-with-stacks.js)

### Whiteboards

![queue-with-stacks whiteboard]()
![queue-with-stacks whiteboard: solution code]()
