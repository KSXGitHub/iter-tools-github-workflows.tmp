/**
 * @generated-from ./$group-by.d.ts
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

import {
  AsyncInputIterable,
  AsyncGeneratorIterator,
  AsyncMaybePromise,
} from '../../internal/async-iterable';
declare function asyncGroupBy(
  key: null | undefined,
): <T = any>(
  iterable: AsyncInputIterable<T>,
) => AsyncGeneratorIterator<[T, AsyncGeneratorIterator<T>]>;
declare function asyncGroupBy<K, T = any>(
  key: (item: T) => AsyncMaybePromise<K>,
): (iterable: AsyncInputIterable<T>) => AsyncGeneratorIterator<[K, AsyncGeneratorIterator<T>]>;
declare function asyncGroupBy<T = any>(
  key: null | undefined,
  iterable: AsyncInputIterable<T>,
): AsyncGeneratorIterator<[T, AsyncGeneratorIterator<T>]>;
declare function asyncGroupBy<K, T = any>(
  key: (item: T) => AsyncMaybePromise<K>,
  iterable: AsyncInputIterable<T>,
): AsyncGeneratorIterator<[K, AsyncGeneratorIterator<T>]>;
export default asyncGroupBy;
