/**
 * @generated-from ./$interpose.d.ts
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

import { AsyncInputIterable, AsyncGeneratorIterator } from '../../internal/async-iterable';
declare function asyncInterpose<I>(
  interposeItem: I,
): <T = any>(iterable: AsyncInputIterable<T>) => AsyncGeneratorIterator<T | I>;
declare function asyncInterpose<I, T = any>(
  interposeItem: I,
  iterable: AsyncInputIterable<T>,
): AsyncGeneratorIterator<T | I>;
export default asyncInterpose;
