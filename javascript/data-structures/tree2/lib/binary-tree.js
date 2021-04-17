'use strict';

const Node = require('./node.js');

class BinaryTree {

  constructor() {
    this.root = null;
  }

  preOrder() {
    let nodesArray = [];
    if (!this.root) { return null; }

    function traverse(current) {
      nodesArray.push(current);
      if (current.left) { traverse(current.left); }
      if (current.right) { traverse(current.right); }
    }

    traverse(this.root);

    return nodesArray;
  }
}

module.exports = BinaryTree;
