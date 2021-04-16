# Binary Tree and BST Implementation

This is a Data Structures and Algorithms challenge that works with [binary trees](https://codefellows.github.io/common_curriculum/data_structures_and_algorithms/Code_401/class-15/resources/Trees.html)

## Author: Dar-Ci Calhoun

## Links

- Pull Request [find-maximum-binary-tree](https://github.com/dcalhoun286/data-structures-and-algorithms/pull/41)

## Challenge

### Features

- Create a Node class that has properties for the value stored in the node, the left child node, and the right child node.
- Create a BinaryTree class
  - Define a method for each of the depth first traversals called `preOrder`, `inOrder`, and `postOrder` which returns an array of the values, ordered appropriately.

- Any exceptions or errors that come from your code should be semantic, capturable errors. For example, rather than a default error thrown by your language, your code should raise/throw a custom, semantic error that describes what went wrong in calling the methods you wrote for this lab.

- Create a BinarySearchTree class
  - Define a method named `add` that accepts a value, and adds a new node with that value in the correct location in the binary search tree.
  - Define a method named `contains` that accepts a value, and returns a boolean indicating whether or not the value is in the tree at least once.

### Structure and Testing

Utilize the Single-responsibility principle: any methods you werite should be clean, reusable, abstract component parts to the whole challenge. You will be given feedback and marked down if you attempt to define a large, complex algorithm in one function definition.

Write tests to prove the following functionality:

1. Can successfully instantiate an empty tree
1. Can successfully instantiate a tree with a single root node
1. Can successfully add a left child and right child to a single root node
1. Can successfully return a collection from a preorder traversal
1. Can successfully return a collection from an inorder traversal
1. Can successfully return a collection from a postorder traversal

## Approach & Efficiency

## API

## Solution

### Solution Code

- [Node](lib/node.js)
- [BinaryTree](lib/binary-tree.js)

### Whiteboards
