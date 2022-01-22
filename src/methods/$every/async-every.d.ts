/**
 * @generated-from ./$every.d.ts
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

import { AsyncInputIterable, AsyncPromise, AsyncMaybePromise } from '../../internal/async-iterable';
declare function asyncEvery<T = any>(
  func: (item: T) => AsyncMaybePromise<boolean>,
): (iterable: AsyncInputIterable<T>) => AsyncPromise<boolean>;
declare function asyncEvery<T = any>(
  func: (item: T) => AsyncMaybePromise<boolean>,
  iterable: AsyncInputIterable<T>,
): AsyncPromise<boolean>;
export default asyncEvery;
