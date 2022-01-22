/**
 * @generated-from ./$starts-with-subseq.js
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

import { iterableCurry } from '../../internal/iterable';
import internalStartsWith from '../$starts-with_/starts-with';
const config = {
  any: false,
  subseq: true,
};
export function startsWithSubseq(iterable, value) {
  return internalStartsWith(iterable, config, value);
}
export default iterableCurry(startsWithSubseq, {
  reduces: true,
});
