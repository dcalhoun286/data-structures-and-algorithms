'use strict';

const ShelterQueue = require('./fifo-animal-shelter.js');

class Node {
  constructor(value) {
    this.value = { animal: value, id: Queue.id++};
    this.next = null;
  }
}

module.exports = Node;
