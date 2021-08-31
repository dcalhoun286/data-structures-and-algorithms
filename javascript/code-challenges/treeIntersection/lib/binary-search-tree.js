
const BinaryTree = require('./binary-tree.js');
const Node = require('./node.js');

class BinarySearchTree extends BinaryTree {
  constructor(value) {
    super(value);
  }

  add(value) {
    if (this.contains(value)) { return 'input value cannot already exist in tree'; }
    let node = new Node(value);

    if (!this.root) { this.root = node; }
    else {
      let current = this.root;

      while (current.left || current.right) {
        if (value < current.value && !current.left) {
          current.left = node;
          return;
        }

        if (value > current.value && !current.right) {
          current.right = node;
          return;
        }

        current = value < current.value ? current.left : current.right;
      }

      current.value > value ? current.left = node : current.right = node;
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

module.exports = BinarySearchTree;
