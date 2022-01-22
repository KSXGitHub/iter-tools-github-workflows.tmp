/**
 * @generated-from ./$concat.test.js
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

/* eslint-disable no-unused-vars,import/no-duplicates */

import { asyncConcat, asyncToArray, range } from '../../..';
describe('asyncConcat', () => {
  it('concats iterables', async () => {
    const iter = asyncConcat(
      range({
        start: 1,
        end: 3,
      }),
      [3, 4],
    );
    expect(await asyncToArray(iter)).toEqual([1, 2, 3, 4]);
  });
});
