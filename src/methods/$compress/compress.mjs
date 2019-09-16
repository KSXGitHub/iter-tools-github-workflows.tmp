/**
 * @generated-from ./$compress.js
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

import zip from '../$zip/zip';
import { filter } from '../$filter/filter';
import { map } from '../$map/map';
export function compress(iterable, compress) {
  return map(filter(zip(iterable, compress), entry => entry[1]), entry => entry[0]);
}
export default compress;
