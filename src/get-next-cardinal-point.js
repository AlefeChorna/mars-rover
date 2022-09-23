const { SPIN_90_DEGREES_LEFT, CARDINAL_POINTS } = require('./constants');

function getNextCardinalPoint(instruction, cardinalPoint) {
  const nextCardinalPointKey = instruction === SPIN_90_DEGREES_LEFT
    ? 'PREVIOUS'
    : 'NEXT';
  const newCardinalPoint = CARDINAL_POINTS[cardinalPoint][nextCardinalPointKey];
  return newCardinalPoint;
}

module.exports = { getNextCardinalPoint };
