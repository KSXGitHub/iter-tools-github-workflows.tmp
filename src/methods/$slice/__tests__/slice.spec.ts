/**
 * @generated-from ./slice.test.js
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

import { slice, toArray } from '../../..';
describe('slice', () => {
  const list = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  describe('with positional args', () => {
    it('can slice starting from the beginning', () => {
      expect(toArray(slice(0, 2, list))).toEqual([0, 1]);
    });
    it('can slice to the end', () => {
      expect(toArray(slice(8, list))).toEqual([8, 9]);
    });
    it('can slice with a step', () => {
      expect(toArray(slice(2, 7, 2, list))).toEqual([2, 4, 6]);
    });
  });
  describe('with options argument', () => {
    it('can slice to the end', () => {
      expect(
        toArray(
          slice(
            {
              start: 8,
            },
            list,
          ),
        ),
      ).toEqual([8, 9]);
    });
    it('returns simple slice with start/end', () => {
      expect(
        toArray(
          slice(
            {
              start: 1,
              end: 4,
            },
            list,
          ),
        ),
      ).toEqual([1, 2, 3]);
    });
    it('returns empty slice with end > start', () => {
      expect(
        toArray(
          slice(
            {
              start: 4,
              end: 3,
            },
            list,
          ),
        ),
      ).toEqual([]);
    });
    it('returns simple slice with start/end/step', () => {
      expect(
        toArray(
          slice(
            {
              start: 1,
              end: 6,
              step: 2,
            },
            list,
          ),
        ),
      ).toEqual([1, 3, 5]);
    });
    it('returns empty iterable when passed out of bounds indicies', () => {
      expect(
        toArray(
          slice(
            {
              start: 1,
              end: 6,
              step: 2,
            },
            [],
          ),
        ),
      ).toEqual([]);
    });
    it('returns empty iterable when passed null iterable', () => {
      expect(
        toArray(
          slice(
            {
              start: 1,
              end: 4,
            },
            null,
          ),
        ),
      ).toEqual([]);
    });
    it('returns curried slice', () => {
      expect(
        toArray(
          slice({
            start: 0,
            end: 2,
          })(list),
        ),
      ).toEqual([0, 1]);
    });
    it('returns slice with negative end', () => {
      expect(
        toArray(
          slice(
            {
              start: 4,
              end: -2,
            },
            list,
          ),
        ),
      ).toEqual(list.slice(4, -2));
    });
    it('returns empty slice with negative end', () => {
      expect(
        toArray(
          slice(
            {
              start: 4,
              end: -8,
            },
            list,
          ),
        ),
      ).toEqual([]);
    });
    it('returns slice with negative end and step', () => {
      expect(
        toArray(
          slice(
            {
              start: 1,
              end: -1,
              step: 3,
            },
            list,
          ),
        ),
      ).toEqual([1, 4, 7]);
    });
    it('returns slice with negative start', () => {
      expect(
        toArray(
          slice(
            {
              start: -3,
            },
            list,
          ),
        ),
      ).toEqual([7, 8, 9]);
    });
    it('returns slice with negative start and step', () => {
      expect(
        toArray(
          slice(
            {
              start: -6,
              step: 2,
            },
            list,
          ),
        ),
      ).toEqual([4, 6, 8]);
    });
    it('returns slice with negative start and end', () => {
      expect(
        toArray(
          slice(
            {
              start: -3,
              end: -1,
            },
            list,
          ),
        ),
      ).toEqual([7, 8]);
    });
    it('returns slice with negative start and end, and step', () => {
      expect(
        toArray(
          slice(
            {
              start: -5,
              end: -1,
              step: 2,
            },
            list,
          ),
        ),
      ).toEqual([5, 7]);
    });
    it('returns slice with negative start and end, and end < start', () => {
      expect(
        toArray(
          slice(
            {
              start: -1,
              end: -2,
            },
            list,
          ),
        ),
      ).toEqual([]);
    });
    it('returns slice with negative start and positive end', () => {
      expect(
        toArray(
          slice(
            {
              start: -5,
              end: 9,
            },
            list,
          ),
        ),
      ).toEqual([5, 6, 7, 8]);
    });
    it('returns slice with negative start and positive end (return empty)', () => {
      expect(
        toArray(
          slice(
            {
              start: -5,
              end: 2,
            },
            list,
          ),
        ),
      ).toEqual([]);
    });
    it('returns slice with negative start and positive end and step', () => {
      expect(
        toArray(
          slice(
            {
              start: -5,
              end: 9,
              step: 2,
            },
            list,
          ),
        ),
      ).toEqual([5, 7]);
    });
  });
  it('when given invalid parameters', () => {
    const untypedSlice: any = slice;
    expect(() => untypedSlice('', [])).toThrowErrorMatchingSnapshot();
    expect(() => untypedSlice(0, {}, [])).toThrowErrorMatchingSnapshot();
    expect(() => untypedSlice(0, 0, -2, [])).toThrowErrorMatchingSnapshot();
  });
});
