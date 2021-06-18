'use strict';

const Queue = require('./queue.js');

class AnimalShelter {
  constructor() {
    this.front = null;
    this.rear = null;
    this.dogQueue = new Queue();
    this.catQueue = new Queue();
    this.id = 0;
  }

  setId() {
    this.id++;
  }

  enqueue(animal) {
    if (animal === 'dog') {
      this.setId();
      let obj = {animal: animal, id: this.id};
      this.dogQueue.enqueue(obj);
      if (!this.front) {
        this.front = obj;
        this.rear = obj;
      } else { this.rear = obj; }
    } else if (animal === 'cat') {
      this.setId();
      let obj = {animal: animal, id: this.id};
      this.catQueue.enqueue(obj);
      if (!this.front) {
        this.front = obj;
        this.rear = obj;
      } else { this.rear = obj; }
    } else { return 'Please enter dog or cat'; }
  }

  dequeue(pref) {

    if (!(pref === 'dog') && !(pref === 'cat')) { return null; }
    if (pref === 'dog' && this.dogsEmpty()) { return 'No dogs available at this shelter'; }
    if (pref === 'cat' && this.catsEmpty()) { return 'No cats available at this shelter'; }
    if (pref === 'dog' && this.dogQueue.storage.length === 1) {
      let dequeued = this.dogQueue.dequeue();
      if (this.catsEmpty()) {
        this.front = null;
        this.rear = null;
      } else {
        this.front = this.catQueue.front.value;
      }
      return dequeued;
    } else if (pref === 'dog' && this.dogQueue.storage.length > 1) {
      let dequeued = this.dogQueue.dequeue();
      if (this.catsEmpty()) {
        this.front = this.dogQueue.front.value;
      } else {
        this.front = this.catQueue.front.value.id < this.dogQueue.front.value.id ? this.catQueue.front.value : this.dogQueue.front.value;
      }
      return dequeued;
    } else if (pref === 'cat' && this.catQueue.storage.length === 1) {
      let dequeued = this.catQueue.dequeue();
      if (this.dogsEmpty()) {
        this.front = null;
        this.rear = null;
      } else {
        this.front = this.dogQueue.front.value;
      }
      return dequeued;
    } else if (pref === 'cat' && this.catQueue.storage.length > 1) {
      let dequeued = this.catQueue.dequeue();
      if (this.dogsEmpty()) {
        this.front = this.catQueue.front.value;
      } else {
        this.front = this.catQueue.front.value.id < this.dogQueue.front.value.id ? this.catQueue.front.value : this.dogQueue.front.value;
      }
      return dequeued;
    }
  }

  catsEmpty() {
    if (this.catQueue.isEmpty()) { return true; }
    return false;
  }

  dogsEmpty() {
    if (this.dogQueue.isEmpty()) { return true; }
    return false;
  }
}

module.exports = AnimalShelter;
