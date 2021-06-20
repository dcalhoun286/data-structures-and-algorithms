'use strict';

// const Node = require('../../linkedList/lib/node.js');
const Vertex = require('./vertex.js');
const LinkedList = require('../../linkedList/lib/linked-list.js');

class Graph {

  constructor() {
    this.adjacencyList = new Map(); // this is going to be used to keep track of our edges (key = some vertex, value = some edge)
    this.root = null;
    this.size = 0;
  }

  addNode(value) {

    /*
      adds a new node to the graph
      takes in the value of that node
      returns the added node
    */

  }

  addEdge(node1, node2, weight) {

    if (this.adjacencyList.get(node1) && this.adjacencyListList.get(node2)) {

    }
    /*
      adds a new edge between two nodes in the graph
      include the ability to have a 'weight'
      takes in the two nodes to be connected by the edge
      both nodes should already be in the graph
    */

  }

  getNodes() {
    // returns all of the nodes in the graph as a collection (set, list or similar)
  }

  getNeighbors(node) {


    /*
      returns a collection of edges connected to the given node
      takes in a given node
      include the weight of the connection in the returned collection
    */
    return [...this.adjacencyList.get(vertex)];
  }

  getSize() {
    // returns the total number of nodes in the graph
    return this.size;
  }
}

module.exports = Graph;
