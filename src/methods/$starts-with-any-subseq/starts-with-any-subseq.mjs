/**
 * @generated-from ./$starts-with-any-subseq.js
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

import { iterableCurry } from '../../internal/iterable';
import internalStartsWith from '../$starts-with_/starts-with';
const config = {
  any: true,
  subseq: true,
};
export function startsWithAnySubseq(iterable, value) {
  return internalStartsWith(iterable, config, value);
}
export default iterableCurry(startsWithAnySubseq, {
  reduces: true,
});
