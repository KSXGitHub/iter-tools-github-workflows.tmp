/**
 * @generated-from ./async-reduce.test.js
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

import { AsyncPromise, AsyncInputIterable } from '../../../internal/async-iterable';
import { asyncReduce, range } from '../../..';
import { AsyncOneTwoThreeIterable } from '../../../__tests__/__framework__/fixtures';
describe('asyncReduce', () => {
  it('sums an array', async () => {
    expect(await asyncReduce((acc = 0, x) => acc + x, [0, 1, 2, 3])).toBe(6);
  });
  it('sums a range', async () => {
    expect(await asyncReduce((acc = 0, x) => acc + x, range(4))).toBe(6);
  });
  it('sums using a specified initial value', async () => {
    expect(await asyncReduce(1, (acc, x) => acc + x, range(4))).toBe(7);
  });
  it('sums using the initial value as the initial value', async () => {
    expect(
      await asyncReduce(
        (acc, x) => acc + x,
        range({
          start: 2,
          end: 4,
        }),
      ),
    ).toBe(5);
  });
  it('returns specified initial value when iterable is empty', async () => {
    expect(await asyncReduce(0, (acc, x) => acc + x, [])).toBe(0);
  });
  it('throws when no initial value specified and iterable is empty', async () => {
    let error;

    try {
      await asyncReduce((acc, x) => acc + x, []);
    } catch (e) {
      error = e;
    }

    expect(error).toBeInstanceOf(Error);
    expect(error.message).toMatchSnapshot();
  });
  it('sums a range (using curry)', async () => {
    const sum: (iterable: AsyncInputIterable<number>) => AsyncPromise<number> = asyncReduce(
      (acc = 0, x) => acc + x,
    );
    expect(await sum(range(4))).toBe(6);
  });
  it('cleans up iterable', async () => {
    const oneTwoThree = new AsyncOneTwoThreeIterable();

    try {
      await asyncReduce((acc = 0, x) => {
        throw new Error('ops');
      }, oneTwoThree);
    } catch (e) {
      expect(oneTwoThree).toHaveProperty('isCleanedUp', true);
    }
  });
});
