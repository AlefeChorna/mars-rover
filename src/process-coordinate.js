const { isSpinInstruction } = require('./is-spin-instruction');
const { getNextCardinalPoint } = require('./get-next-cardinal-point');
const { isMoveForwardInstruction } = require('./is-move-forward-instruction');
const { calculateNewPosition } = require('./calculate-new-position');

function processCoordinate(coordinate, instruction) {
  const newCoordinate = { ...coordinate };
  if (isSpinInstruction(instruction)) {
    const nextCardinalPoint = getNextCardinalPoint(
      instruction,
      coordinate.cardinalPoint,
    );
    Object.assign(newCoordinate, { cardinalPoint: nextCardinalPoint });
  } else if (isMoveForwardInstruction(instruction)) {
    const { x, y } = calculateNewPosition(coordinate);
    Object.assign(newCoordinate, { x, y });
  }
  return newCoordinate;
}

module.exports = { processCoordinate };
