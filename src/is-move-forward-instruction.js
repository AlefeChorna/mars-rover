const { MOVE_FORWARD_CODE } = require('./constants');

function isMoveForwardInstruction(instruction) {
  return MOVE_FORWARD_CODE === instruction;
}

module.exports = { isMoveForwardInstruction };
