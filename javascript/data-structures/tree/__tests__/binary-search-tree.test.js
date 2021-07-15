'use strict';

const BinarySearchTree = require('../lib/binary-search-tree.js');

describe('====== Binary Search Tree ======', () => {

  it('can instantiate an empty tree', () => {
    let tree = new BinarySearchTree();
    expect(tree.root).toBe(null);
  });

  it('can successfully instantiate a tree with a single root node', () => {
    let tree = new BinarySearchTree(7);
    expect(tree.root.value).toBe(7);
    expect(tree.root.left).toBe(null);
    expect(tree.root.right).toBe(null);
  });

  it('can successfully add a left child and a right child to a single root node', () => {
    let tree = new BinarySearchTree();
    tree.add(10);
    tree.add(5);
    tree.add(15);
    console.log('tree', tree);

    let root = tree.root;
    console.log('root', root);
    let rootLeft = tree.root.left;
    let rootRight = tree.root.right;

    expect(root.value).toBe(10);
    expect(root.left.value).toBe(5);
    expect(root.right.value).toBe(15);
    expect(rootLeft.left).toBe(null);
    expect(rootLeft.right).toBe(null);
    expect(rootRight.left).toBe(null);
    expect(rootRight.right).toBe(null);
  });

  it('can successfully return a collection from a preorder traversal', () => {
    let tree = new BinarySearchTree(20);
    tree.add(10);
    tree.add(30);
    tree.add(5);
    tree.add(15);
    tree.add(25);
    tree.add(35);

    let preOrderData = tree.preOrder(tree.root);
    expect(Array.isArray(preOrderData)).toBe(true);
    expect(preOrderData).toEqual([20, 10, 5, 15, 30, 25, 35]);
  });

  it('can successfully return a collection from an inorder traversal', () => {
    let tree = new BinarySearchTree(20);
    tree.add(10);
    tree.add(30);
    tree.add(5);
    tree.add(15);
    tree.add(25);
    tree.add(35);

    let inOrderData = tree.inOrder(tree.root);
    expect(Array.isArray(inOrderData)).toBe(true);
    expect(inOrderData).toEqual([5, 10, 15, 20, 25, 30, 35]);
  });

  it('can successfully return a collection from a postorder traversal', () => {
    let tree = new BinarySearchTree(20);
    tree.add(10);
    tree.add(30);
    tree.add(5);
    tree.add(15);
    tree.add(25);
    tree.add(35);

    let postOrderData = tree.postOrder(tree.root);
    expect(Array.isArray(postOrderData)).toBe(true);
    expect(postOrderData).toEqual([5, 15, 10, 25, 35, 30, 20]);
  });

  it('will not add a value that already exists in the tree', () => {
    let tree = new BinarySearchTree(5);
    let result = tree.add(5);
    expect(result).toBe('input value cannot already exist in tree');
  });
});
