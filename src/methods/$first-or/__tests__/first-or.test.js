/**
 * @generated-from ./$first-or.test.js
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

/* eslint-disable no-unused-vars,import/no-duplicates */

import { firstOr, range } from '../../..';
describe('firstOr', () => {
  describe('when iterable contains items', () => {
    it('returns first item', () => {
      const iter = range(10);
      expect(firstOr(null, iter)).toBe(0);
    });
  });
  describe('when iterable is empty', () => {
    it('returns whenEmpty', () => {
      const iter = range(0);
      expect(firstOr(null, iter)).toBe(null);
    });
  });
});
