const { CARDINAL_POINTS } = require('./constants');

function _calculateAxis({
  cardinalPoint,
  positiveCardinalKey,
  negativeCardinalKey,
  currentAxisValue,
}) {
  const isValid = (
    cardinalPoint === CARDINAL_POINTS[positiveCardinalKey].VALUE
    || cardinalPoint === CARDINAL_POINTS[negativeCardinalKey].VALUE
  );
  if (!isValid) return currentAxisValue;
  const newValue = cardinalPoint === CARDINAL_POINTS[positiveCardinalKey].VALUE
    ? currentAxisValue + 1
    : currentAxisValue - 1;
  return newValue;
}

function calculateNewPosition(coordinate) {
  const xAxis = _calculateAxis({
    cardinalPoint: coordinate.cardinalPoint,
    positiveCardinalKey: CARDINAL_POINTS.E.VALUE,
    negativeCardinalKey: CARDINAL_POINTS.W.VALUE,
    currentAxisValue: coordinate.x,
  });
  const yAxis = _calculateAxis({
    cardinalPoint: coordinate.cardinalPoint,
    positiveCardinalKey: CARDINAL_POINTS.N.VALUE,
    negativeCardinalKey: CARDINAL_POINTS.S.VALUE,
    currentAxisValue: coordinate.y,
  });
  return { x: xAxis, y: yAxis };
}

module.exports = { calculateNewPosition };
