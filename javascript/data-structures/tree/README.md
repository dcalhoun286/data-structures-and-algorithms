# Binary Tree and BST Implementation

This is a Data Structures and Algorithms challenge that works with [binary trees and binary search trees](https://codefellows.github.io/common_curriculum/data_structures_and_algorithms/Code_401/class-15/resources/Trees.html)

## Author: Dar-Ci Calhoun

## Links

- Pull Request [tree](https://github.com/dcalhoun286/data-structures-and-algorithms/pull/40)

## Challenge

### Features

- Create a Node class that has properties for the value stored in the node, the left child node, and the right child node.
- Create a BinaryTree class
  - Define a method for each of the depth first traversals called `preOrder`, `inOrder`, and `postOrder` which returns an array of the values, ordered appropriately.

- Any exceptions or errors that come from your code should be semantic, capturable errors. For example, rather than a default error thrown by your language, your code should raise/throw a custom, semantic error that describes what went wrong in calling the methods you wrote for this lab.

- Create a BinarySearchTree class
  - Must be a subclass of your BinaryTree class
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

- **Binary Tree**:
  - I wrote my `preOrder`, `inOrder` and `postOrder` methods in such a way that traversal happens recursively. A simplified way to describe time complexity is `O(n)` where `n` is how many nodes are in the tree. The more edges a subtree has, the longer this method will take to run because of its demand on the call stack. Space complexity is also `O(n)`. Every node must be visited, and each node's value is added to a new data structure that is returned when the method terminates.
- **Binary Search Tree**:
  - I wrote my `add` and `contains` methods in such a way that traversal happens iteratively. Time complexity is `O(h)` where `h` represents the height of a tree. In the worse case scenario, to find a value in the tree or add a value to the tree, we would need to traverse the longest path possible between a tree's root and one of its leaves.

## API

- **Binary Tree**:
  - Upon instantiation, if a value is passed as an argument, a Binary Tree will be instantiated with a single root node. If no value is passed, an empty Binary Tree is instantiated. This tree accepts integers as values to be added to it.
  - `preorder()`: This method is a depth-first traversal method and takes no arguments. For this method, when a node is visited, its value is pushed to an output array. Then, its left children are processed, followed by its right children. The first node value pushed to the output array is that of the tree's root.
  - `inorder()`: This method is a depth-first traversal method and takes no arguments. For this method, we first traverse the left subtree. Once a leaf is reached (or the left subtree of a node was already processed), the node value is added to the output array. Then, the same thing repeats for the right subtree.
  - `postOrder()`: This method is a depth-first traversal method and takes no arguments. For this method, all nodes of the left subtree are processed, followed by the nodes of the right subtree. The root node is processed last.
- **Binary Search Tree**:
  - Binary Search Tree is a sub-class of Binary Tree. The super class's constructor is inherited, along with all of the super class's fields/methods (which are already defined above). This tree accepts integers as values to be added to it.
  - `add(value)`: This method accepts a value as an argument. Since BSTs are ordered and contain all unique values, the value of a root node's left child is always less than that of the root node. Conversely, the value of a root node's right child is always greater than that of a root node. To find where the input value should be added to the tree, a Node is instantiated with the input value, and traversal begins at the tree's root. To ensure that only unique values are added to the tree, `contains(value)` is called within `add(value)` first and has to return `false` for the method to proceed.
  - `contains(value)`: This method accepts a value as an argument, and returns a boolean value (`true` or `false`) depending on whether or not the input value was found in the tree. As mentioned above, BSTs are ordered and contain all unique values. Traversal begins at the root of a tree, and traversal will terminate in the following cases:
    - The value of the current node in the traversal matches the input value. Traversal discontinues and the method returns `true`.
    - Traversal reaches a leaf node (leaves have no children). Either the value of that leaf node matches the input value (in which case the method will return `true`), or it doesn't (in which case the method will return `false`). In either scenario, traversal discontinues because there are no children to traverse.

## Solution

### Solution Code

- [Node](lib/node.js)
- [BinaryTree](lib/binary-tree.js)
- [BinarySearchTree](lib/binary-search-tree.js)

### Whiteboards
