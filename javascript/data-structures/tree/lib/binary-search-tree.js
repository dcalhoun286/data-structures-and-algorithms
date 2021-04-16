'use strict';

const Node = require('./node.js');

class BinarySearchTree {

  constructor() {
    this.root = null;
  }

  add(value) {

    let node = new Node(value);

    if (!this.root) {

      this.root = node;

    } else {

      let current = this.root;

      if (!current.left && !current.right) {

        current.value < node.value ? current.right = node : current.left = node;

      } else {

        while (current.left || current.right) {

          if (current.value < node.value && !current.right) {

            current.right = node;
            return;

          } else if (current.value > node.value && !current.left) {

            current.left = node;
            return;
          }

          if (current.value < node.value && current.right) {

            current = current.right;

          } else if (current.value > node.value && current.left) {

            current = current.left;
          }

        }

      }

    }
  }

  contains(value) {

    if (!this.root) {
      return false;
    }

    let current = this.root;

    if (!current.left && !current.right) {

      if (current.value === value) {
        return true;
      }

      return false;
    }
  }
}

module.exports = BinarySearchTree;
