const { chunkArray } = require('./utils/chunk-array');

const inputSize = 2;

function formatInputCommands(input) {
  const inputArr = input.split('\n');
  const inputArrChunk = chunkArray(inputArr, inputSize);
  const result = inputArrChunk.map(([coordinate, instructions]) => {
    const [x, y, cardinalPoint] = coordinate.trim().split(' ');
    return {
      coordinate: { x: parseInt(x, 10), y: parseInt(y, 10), cardinalPoint },
      instructions: instructions.trim().split(''),
    };
  });
  return result;
}

module.exports = { formatInputCommands };
