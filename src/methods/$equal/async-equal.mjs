/**
 * @generated-from ./$equal.js
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

import { asyncIterableCurry } from '../../internal/async-iterable';
import { asyncZipAll } from '../$zip-all/async-zip-all';
import { asyncWrap } from '../$wrap/async-wrap';
import { simpleSlice } from '../$slice/slice';
const noItem = {};
const zipAllConfig = {
  filler: noItem,
};
export async function asyncEqual(iterables) {
  if (iterables.length <= 1) {
    return true;
  }

  const wrappedIterables = iterables.map(asyncWrap);

  for await (const allItems of asyncZipAll(wrappedIterables, zipAllConfig)) {
    const firstItem = allItems[0];

    for (const item of simpleSlice(allItems, 1, Infinity)) {
      if (item !== firstItem) {
        return false;
      }
    }
  }

  return true;
}
export default asyncIterableCurry(asyncEqual, {
  reduces: true,
  variadic: true,
});
