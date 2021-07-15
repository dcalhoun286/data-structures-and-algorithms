'use strict';

const Node = require('./node.js');
const BinaryTree = require('./binary-tree.js');

class BinarySearchTree extends BinaryTree {

  constructor(value) {
    super(value);
  }

  add(value) {

    let node = new Node(value);

    if (!this.root) { this.root = node; }
    else {
      let current = this.root;

      while (current.left || current.right) {

        if (node.value < current.value && !current.left) {
          current.left = node;
          return;
        }

        if (node.value > current.value && !current.right) {
          current.right = node;
          return;
        }

        current = node.value < current.value ? current.left : current.right;
      }

    }
  }

  contains(value) {
    if (!this.root) { return false; }

    let current = this.root;
    let result = false;

    while (current) {

      if (value === current.value) {
        result = true;
        break;
      }

      current = value < current.value ? current.left : current.right;
    }
    return result;
  }
}

let bst = new BinarySearchTree(7);
console.log(bst);

module.exports = BinarySearchTree;
