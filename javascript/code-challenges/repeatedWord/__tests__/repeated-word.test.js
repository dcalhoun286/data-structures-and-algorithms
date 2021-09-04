'use strict';

const repeatedWord = require ('../lib/repeated-word.js');

describe('====== Repeated Word ======', () => {
  it('returns the first repeated word in a string', () => {
    const string = 'I\'m Henry the Eighth I am Henry the Eighth I am I am';
    const result = repeatedWord(string);
    expect(result).toEqual('Henry');
  });

  it('will properly return a message if words in string are unique', () => {
    const string = 'Mary had a little lamb';
    const result = repeatedWord(string);
    expect(result).toEqual('All words in string are unique');
  });

  it('will return an exception if input string is empty', () => {
    const result = repeatedWord('');
    expect(result).toEqual('Exception: empty string');
  });

  it('will return an exception if argument is not a string', () => {
    const result = repeatedWord(5);
    expect(result).toEqual('Exception: not a string');
  });
});
