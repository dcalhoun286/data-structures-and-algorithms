# Implementation: Singly Linked Lists

These are Data Structures and Algorithms challenges that work with [singly linked lists](https://www.educative.io/edpresso/what-is-a-singly-linked-list).

- Pull Request [linked-list](https://github.com/dcalhoun286/data-structures-and-algorithms/pull/31)
- Pull Request [ll-insertions](https://github.com/dcalhoun286/data-structures-and-algorithms/pull/32)
- Pull Request [ll-kth-from-end](https://github.com/dcalhoun286/data-structures-and-algorithms/pull/33)

## Author: Dar-Ci Calhoun

## Challenge - `linked-list` branch

### Features

- Create a Node class that has properties for the value stored in the Node, and a pointer to the next Node.
- Within your LinkedList class, include a head property. Upon instantiation, an empty Linked List should be created.
  - Define a method called `insert` which takes any value as an argument and adds a new node with that value to the `head` of the list with an O(1) Time performance.
  - Define a method called `includes` which takes any value as an argument and returns a boolean result depending on whether that value exists as a Node's value somewhere within the list.
  - Define a method called `toString` which takes in no arguments and returns a string representing all the values in the Linked List, formatted as:
    - `"{ a } -> { b } -> { c } -> NULL"`
- Any exceptions or errors that come from your code should be semantic, capturable errors. For example, rather than a default error thrown by your language, your code should raise/throw a custom, semantic error that describes what went wrong in calling the methods you wrote for this lab.
- Be sure to follow your language/frameworks standard naming conventions.

### Structure and Testing

Utilize the Single-responsibility principle: any methods you write should be clean, reusable, abstract component parts to the whole challenge.

Write tests to prove the following functionality:

1. Can successfully instantiate an empty linked list
1. Can properly insert into the linked list
1. The head property will properly point to the first node in the linked list
1. Can properly insert multiple nodes into the linked list
1. Will return true when finding a value within the linked list that exists
1. Will return false when searching for a value in the linked list that does not exist
1. Can properly return a collection of all the values that exist in the linked list

### Approach & Efficiency

An explanation for my approach:

- Each Node always has at least `value` property and a `next` property, with the default value of `next` being `null`. Since this is a singly linked list, those are the only two properties I need. I will instantiate this class to build my Linked List.
- I used the approach below for `insert(value)` because regardless of the size of the linked list, to achieve O(1), we only need to grow our linked list by finding the head of the list and attaching our new node to the head.
- I used the approach below for `includes(inputVal)` because if the head of the list evaluates to `false`, none of the code block needs to run, and the method can terminate by returning `false`. This method achieves O(n), since at most it might need to traverse the entire list to possibly find a match.
- `toString()` requires a big O of O(n) because we must visit every node in the list to read its value property and insert it into the output string.

## Challenge - `ll-insertions` branch

### Added Features

- Define a method called `append(value)` which adds a new node with the given `value` to the end of the list
- Define a method called `insertBefore(value, newVal)` which adds a new node with the given `newVal` immediately before the first `value` node
- Define a method called `insertAfter(value, newVal)` which adds a new node with the given `newVal` immediately after the first `value` node.

### Structure and Testing

Utilize the Single-responsibility principle: any methods you write should be clean, reusable, abstract component parts to the whole challenge.

Write tests to prove the following functionality:

1. Can successfully add a node to the end of the linked list
1. Can successfully add multiple nodes to the end of a linked list
1. Can successfully insert a node before a node located in the middle of a linked list
1. Can successfully insert a node before the first node of a linked list
1. Can successfully insert after a node in the middle of the linked list
1. Can successfully insert a node after the last node of the linked list

### Approach & Efficiency

An explanation for my approach:

- I used the approach below for `append(value)` because at best this will have a big O value of O(n) when traversing the list to the end and adding the new Node onto the end.
- After completing the whiteboard for `insertBefore(value, newVal)`, I figured out a way to refactor my code so that Big O was optimized. Instead of traversing the list a 2nd time, I instead evaluated the condition `current.next.value === searchKey`. Big O is O(n).
- I used the approach below for `insertAfter(value, newVal)` because once we find the node in the list with a matching value, we can insert our new Node after this matching node (in a way that data won't be lost). Big O is O(n).

## Challenge - `ll-kth-from-end` branch

### Added Features

### Structure and Testing

### Approach & Efficiency

## Solution

**WHITEBOARD for `linked-list` branch -- TOP HALF**
![whiteboard1-linked-list](./assets/linked-list1.png)
**WHITEBOARD for `linked-list` branch -- BOTTOM HALF**
![whiteboard2-linked-list](./assets/linked-list2.png)
**WHITEBOARD for `ll-insertions` branch -- TOP HALF**
![whiteboard1-ll-insertions](./assets/ll-insertions1.png)
**WHITEBOARD for `ll-insertions` branch -- BOTTOM HALF**
![whiteboard2-ll-insertions](./assets/ll-insertions2.png)
**WHITEBOARD for `ll-kth-from-end` branch**
![whiteboard-ll-kth-from-end]()

**Solution Code**:

- [Node Class](./lib/node.js)
- [LinkedList Class](./lib/linked-list.js)

## Collaborators

- Ron Dunphy (TA) helped me debug why my test suites were not running properly.
- I worked with classmate Dawit Ayana for the whiteboard portion of this challenge.
