const { SPIN_OPTIONS } = require('./constants');

function isSpinInstruction(instruction) {
  return SPIN_OPTIONS.includes(instruction);
}

module.exports = { isSpinInstruction };
