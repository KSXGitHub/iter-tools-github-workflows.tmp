/**
 * @generated-from ./$fork.test.js
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

/* eslint-disable no-unused-vars,import/no-duplicates */

import { fork, map, toArray } from '../../..';
import { OneTwoThreeIterable } from '../../../__tests__/__framework__/fixtures';

function* _makeIterable() {
  yield 1;
  yield 2;
  yield 3;
}

async function* _asyncMakeIterable() {
  yield 1;
  yield 2;
  yield 3;
}

const makeIterable = _makeIterable;
describe('fork', () => {
  it('creates an iterable of iterables with the same values as its source', () => {
    const [a, b, c] = fork(makeIterable());
    const originalIter = toArray(makeIterable());
    expect(toArray(map(iter => toArray(iter), [a, b, c]))).toEqual(Array(3).fill(originalIter));
  });
  it('can take a number as first argument', () => {
    const gen = fork(3, makeIterable());
    const originalIter = toArray(makeIterable());
    expect(toArray(map(iter => toArray(iter), gen))).toEqual(Array(3).fill(originalIter));
  });
  it('can be curried', () => {
    const gen = fork(3)(makeIterable());
    const originalIter = toArray(makeIterable());
    expect(toArray(map(iter => toArray(iter), gen))).toEqual(Array(3).fill(originalIter));
  });
  it('it does not matter which order the fork iterables are consumed in', () => {
    const [a, b, c] = fork(makeIterable());
    const originalIter = toArray(makeIterable());
    expect(toArray(map(iter => toArray(iter), [c, b, a]))).toEqual(Array(3).fill(originalIter));
  });
  describe('source iterable cleanup', () => {
    it('happens when a fork is exhausted', () => {
      const oneTwoThree = new OneTwoThreeIterable();
      const iterableIterator = fork(oneTwoThree)[Symbol.iterator]();
      toArray(iterableIterator.next().value);
      expect(oneTwoThree).toHaveProperty('isCleanedUp', true);
    });
    it('happens when fork is exhausted and then all forks are exhausted', () => {
      const oneTwoThree = new OneTwoThreeIterable();
      const [a, b] = fork(oneTwoThree);
      expect(oneTwoThree).toHaveProperty('isCleanedUp', false);
      a[Symbol.iterator]().next();
      a.return();
      expect(oneTwoThree).toHaveProperty('isCleanedUp', false);
      b[Symbol.iterator]().next();
      b.return();
      expect(oneTwoThree).toHaveProperty('isCleanedUp', true);
    });
    it('happens when all forks are exhausted then fork is exhausted', () => {
      const oneTwoThree = new OneTwoThreeIterable();
      const iterableIterator = fork(oneTwoThree)[Symbol.iterator]();
      const a = iterableIterator.next().value;
      a[Symbol.iterator]().next();
      a.return();
      expect(oneTwoThree).toHaveProperty('isCleanedUp', false);
      const b = iterableIterator.next().value;
      b[Symbol.iterator]().next();
      b.return();
      expect(oneTwoThree).toHaveProperty('isCleanedUp', false);
      iterableIterator.return();
      expect(oneTwoThree).toHaveProperty('isCleanedUp', true);
    });
    it('happens even when a fork is closed without being used', () => {
      const oneTwoThree = new OneTwoThreeIterable();
      const [a, b] = fork(oneTwoThree);
      expect(oneTwoThree).toHaveProperty('isCleanedUp', false);
      a.return();
      expect(oneTwoThree).toHaveProperty('isCleanedUp', false);
      b.return();
      expect(oneTwoThree).toHaveProperty('isCleanedUp', true);
    });
  });
});
