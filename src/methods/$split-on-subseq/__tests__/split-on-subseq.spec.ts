/**
 * @generated-from ./split-on-subseq.test.js
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

import { splitOnSubseq, map, toArray } from '../../..';
describe('splitOnSubseqSubseq', () => {
  it('can split on subseqences', () => {
    expect(toArray(map(group => toArray(group), splitOnSubseq([2, 3], [1, 2, 3, 4])))).toEqual([
      [1],
      [4],
    ]);
  });
  it('passes through the empty iterable', () => {
    expect(toArray(splitOnSubseq([], null))).toEqual([]);
  });
  it('passes through the empty string', () => {
    expect(toArray(splitOnSubseq(' ', ''))).toEqual([]);
  });
  describe('given a string', () => {
    it('should split on every item which is equal to the on argument', () => {
      expect(toArray(splitOnSubseq('Ø', '11Ø22Ø33'))).toEqual(['11', '22', '33']);
    });
  });
});
