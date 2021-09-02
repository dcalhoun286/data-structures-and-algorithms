# reverseLL

This is a code challenge that reverses a Linked List in place.

## Author: Dar-Ci Calhoun

## Links

- Pull Request [reverse-ll](https://github.com/dcalhoun286/data-structures-and-algorithms/pull/55)

## Challenge

Write a function that accepts a Linked List as an argument and reverses it in place.

### Structure and Testing

Write tests to prove the following functionality:

1. Function returns a reversed Linked List
1. Function returns appropriate message if Linked List is empty
1. Function properly reverses Linked List

## Approach & Efficiency

`reverse(ll)` has a max time complexity of `O(n)`. The entire Linked List will be traversed once before the function is complete. `reverse(ll)` has a space complexity of `O(1)`. The function accepts a Linked List as an argument, and returns that same Linked List with its Nodes in reversed order. This is accomplished by using markers to modify the Nodes' pointers as the Linked List is traversed, thereby requiring only one traversal.

## Solution

### Solution Code

- [`reverse(ll)`](./lib/reverse-ll.js)
