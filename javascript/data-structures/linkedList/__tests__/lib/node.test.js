'use strict';

const Node = require('../../lib/node.js');

describe('====== Node Class ======', () => {
  it('can create a new node', () => {
    let val = 'test value';
    let node = new Node(val);

    expect(node.value).toEqual(val);
    expect(node.next).toBeNull();
  });
});
