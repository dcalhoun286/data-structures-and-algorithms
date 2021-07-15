'use strict';

const validateBrackets = require('../lib/multi-bracket-validation.js');

describe('====== Multi-Bracket Validation ======', () => {
  it('returns true for a string with balanced brackets', () => {
    const test1 = '{}';
    const test2 = '{}()[]';
    const test3 = '[{()}]';
    const test4 = '()[{extra characters}]';
    const test5 = '{}([])[[]]extra characters';

    expect(validateBrackets(test1)).toBe(true);
    expect(validateBrackets(test2)).toBe(true);
    expect(validateBrackets(test3)).toBe(true);
    expect(validateBrackets(test4)).toBe(true);
    expect(validateBrackets(test5)).toBe(true);
  });

  it('returns false for a string with unbalanced brackets', () => {
    const test1 = '[({}]';
    const test2 = '(](';
    const test3 = '{(})';
    const test4 = '{';
    const test5 = ')';
    const test6 = '[}';

    expect(validateBrackets(test1)).toBe(false);
    expect(validateBrackets(test2)).toBe(false);
    expect(validateBrackets(test3)).toBe(false);
    expect(validateBrackets(test4)).toBe(false);
    expect(validateBrackets(test5)).toBe(false);
    expect(validateBrackets(test6)).toBe(false);
  });
});
