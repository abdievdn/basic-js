const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain: [],

  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    if (value === undefined) value = '';
    this.chain.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    if (position > this.chain.length || position <= 0 || typeof position === 'string' || position === undefined) {
      this.chain = [];
      throw new Error();
    }
    if (position === 'THROWN') return this;
    this.chain.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    if (this.chain[0] === 'Error') result = 'Error';
    else result = this.chain.join('~~');
    this.chain = [];
    return result;
  }
};

module.exports = chainMaker;
