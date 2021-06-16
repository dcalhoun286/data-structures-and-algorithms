'use strict';

const HashMap = require('../lib/hashtable.js');
const leftJoin = require('../lib/left-join.js');

let hashmap1 = new HashMap(1000);

hashmap1.add('happy', 'elated');
hashmap1.add('plentiful', 'numerous');
hashmap1.add('lively', 'energetic');
hashmap1.add('smart', 'intelligent');
hashmap1.add('wet', 'moist');

let hashmap2 = new HashMap(1000);

hashmap2.add('happy', 'sad');
hashmap2.add('plentiful', 'scarce');
hashmap2.add('lively', 'lethargic');
hashmap2.add('smart', 'stupid');
hashmap2.add('wet', 'dry');

let hashmap3 = new HashMap(1000);

hashmap3.add('happy', 'sad');
hashmap3.add('lively', 'lethargic');
hashmap3.add('smart', 'stupid');

let hashmap4 = new HashMap(1000);

hashmap4.add('happy', 'sad');
hashmap4.add('hairy', 'bald');
hashmap4.add('plentiful', 'scarce');
hashmap4.add('smooth', 'bumpy');
hashmap4.add('lively', 'lethargic');
hashmap4.add('smart', 'stupid');
hashmap4.add('wet', 'dry');

let hashmap5 = new HashMap(1000);

hashmap5.add('happy', 'sad');
hashmap5.add('hairy', 'bald');
hashmap5.add('smooth', 'bumpy');
hashmap5.add('smart', 'stupid');

let hashmap6 = new HashMap(1000);

hashmap6.add('happy');
hashmap6.add('plentiful', 'scarce');
hashmap6.add('lively', 'lethargic');
hashmap6.add('smart', 'stupid');
hashmap6.add('wet');

describe('====== LEFT JOIN ======', () => {

  it('can left-join two hashtables', () => {

    let result = leftJoin(hashmap1, hashmap2);
    let expected = [['happy', 'elated', 'sad'], ['plentiful', 'numerous', 'scarce'], ['lively', 'energetic', 'lethargic'], ['smart', 'intelligent', 'stupid'], ['wet', 'moist', 'dry']];

    expect(result).toEqual(expected);
  });

  it('can left-join two hashtables where some keys of the left hashtable cannot be found in the right hashtable', () => {

    let result = leftJoin(hashmap1, hashmap3);

    expect(result).toEqual([['happy', 'elated', 'sad'], ['plentiful', 'numerous', null], ['lively', 'energetic', 'lethargic'], ['smart', 'intelligent', 'stupid'], ['wet', 'moist', null]]);
  });

  it('if the right hashtable contains keys that are not found in left hashtable, they will not be joined', () => {

    let result = leftJoin(hashmap1, hashmap4);

    expect(result).toEqual([['happy', 'elated', 'sad'], ['plentiful', 'numerous', 'scarce'], ['lively', 'energetic', 'lethargic'], ['smart', 'intelligent', 'stupid'], ['wet', 'moist', 'dry']]);
  });

  it('can left join two hashtables with few matching keys', () => {

    let result = leftJoin(hashmap1, hashmap5);

    expect(result).toEqual([['happy', 'elated', 'sad'], ['plentiful', 'numerous', null], ['lively', 'energetic', null], ['smart', 'intelligent', 'stupid'], ['wet', 'moist', null]]);
  });

  it('can left join two hashtables where some keys in right table have undefined values', () => {

    let result = leftJoin(hashmap1, hashmap6);

    expect(result).toEqual([['happy', 'elated', null], ['plentiful', 'numerous', 'scarce'], ['lively', 'energetic', 'lethargic'], ['smart', 'intelligent', 'stupid'], ['wet', 'moist', null]]);
  });
});
