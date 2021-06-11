'use strict';

const HashMap = require('../lib/hashtable.js');

describe('====== HashMap Implementation ======', () => {

  it('can successfully add a key/value pair to the hash table', () => {

    let hm = new HashMap(1000);

    hm.add('test', 'val');

    expect(hm.contains('test')).toBe(true);

    expect(hm.get('test')).toEqual('val');

  });

  it('retrieving based on a key returns the value stored', () => {

    let hm = new HashMap(1000);

    hm.add('test', 'val');
    hm.add('anothertest', 'another val');

    expect(hm.get('test')).toEqual('val');
    expect(hm.get('anothertest')).toEqual('another val');

  });

  it('successfully returns null for a key that does not exist in the hashtable', () => {

    let hm = new HashMap(1000);

    let testResult = hm.get('something');

    expect(testResult).toBe(null);

  });

  it('successfully handles a collision at the hashtable', () => {

    let hm = new HashMap(1000);
    hm.add('tea', 'slurp');
    hm.add('ate', 'burgers');

    let hash = hm.hash('tea');

    expect(hm.map[hash].head.value).toEqual({tea: 'slurp'});
    expect(hm.map[hash].head.next.value).toEqual({ate: 'burgers'});

  });

  it('successfully retrieves a value from a bucket within the hashtable that has a collision', () => {

    let hm = new HashMap(1000);
    hm.add('tea', 'slurp');
    hm.add('ate', 'burgers');

    expect(hm.get('tea')).toEqual('slurp');
    expect(hm.get('ate')).toEqual('burgers');

  });

  it('successfully hashes a key to an in-range value', () => {

    let hm1 = new HashMap(10);
    let hm2 = new HashMap(100);
    let hm3 = new HashMap(1000);

    let test1 = hm1.hash('test str');
    let test2 = hm2.hash('test str');
    let test3 = hm3.hash('test str');

    expect(0).toBeLessThanOrEqual(test1);
    expect(0).toBeLessThanOrEqual(test2);
    expect(0).toBeLessThanOrEqual(test3);

    expect(test1).toBeLessThan(hm1.map.length);
    expect(test2).toBeLessThan(hm2.map.length);
    expect(test3).toBeLessThan(hm3.map.length);

  });

});
