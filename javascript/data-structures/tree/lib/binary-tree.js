'use strict';

const Node = require('./node.js');

class BinaryTree {
  constructor() {
    this.root = null;
  }

  preOrder(node, values=[]) {
    values.push(node.value);
    if (node.left) { this.preOrder(node.left, values); }
    if (node.right) { this.preOrder(node.right, values); }
    return values;
  }

  inOrder(node, values=[]) {
    if (node.left) { this.inOrder(node.left, values); }
    values.push(node.value);
    if (node.right) { this.inOrder(node.right, values); }
    return values;
  }

  postOrder(node, values=[]) {
    if (node.left) { this.postOrder(node.left, values); }
    if (node.right) { this.postOrder(node.right, values); }
    values.push(node.value);
    return values;
  }
}

let bt = new BinaryTree();

let node1 = new Node(10);
bt.root = node1;
let node2 = new Node(44);
bt.root.left = node2;
let node3 = new Node(3);
bt.root.right = node3;
let node4 = new Node(999);
let node5 = new Node(-4);
let node6 = new Node(15);
let node7 = new Node(494949);
bt.root.left.left = node7;
bt.root.left.right = node5;
bt.root.right.left = node4;
bt.root.right.right = node6;

console.log(JSON.stringify(bt, 0, 4));
console.log(bt.preOrder(bt.root));

module.exports = BinaryTree;
