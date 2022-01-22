/**
 * @generated-from ./$buffer.js
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

class AsyncInterleaveBuffer {
  constructor(iterator, bufferIndex) {
    this._iterator = iterator;
    this._next = iterator.next();
    this.bufferIndex = bufferIndex;
    this.index = 0;
  }

  async peek() {
    return (await this._next).value;
  }

  async take() {
    const next = await this._next;

    if (!next.done) {
      this._next = this._iterator.next();
      this.index++;
    }

    return next.value;
  }

  async canTake() {
    return !(await this._next).done;
  }
}

export default AsyncInterleaveBuffer;
