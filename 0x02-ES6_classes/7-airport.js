class Airport {
  constructor(name, code) {
    this._name = name;
    this._code = code;
  }

  // getter for attributes: name and code

  get name() {
    return this._name;
  }

  get code() {
    return this._code;
  }

  toString() {
    return `[object ${this._code}]`;
  }
}

export default Airport;
