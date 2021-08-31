
const Node = require('./node.js');

class BinaryTree {
  constructor (value) {
    this.root = value ? new Node(value) : null;
  }

  preOrder() {
    if (!this.root) { return 'Empty tree'; }

    let _walk = (node, values=[]) => {
      values.push(node.value);
      if (node.left) { _walk(node.left, values); }
      if (node.right) { _walk(node.right, values); }
      return values;
    };

    return _walk(this.root);
  }

  inOrder() {
    if (!this.root) { return 'Empty tree'; }

    let _walk = (node, values=[]) => {
      if (node.left) { _walk(node.left, values); }
      values.push(node.value);
      if (node.right) { _walk(node.right, values); }
      return values;
    };

    return _walk(this.root);
  }

  postOrder() {
    if (!this.root) { return 'Empty tree'; }

    let _walk = (node, values=[]) => {
      if (node.left) { _walk(node.left, values); }
      if (node.right) { _walk(node.right, values); }
      values.push(node.value);
      return values;
    };

    return _walk(this.root);
  }
}

module.exports = BinaryTree;
