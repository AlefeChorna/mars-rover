const { formatInputCommands } = require('./format-input-commands');
const { processCoordinate } = require('./process-coordinate');
const {
  finalCoordinatesSerealizer,
} = require('./serealizers/final-coordinates-serealizer');

function sendCommands(input) {
  try {
    const commands = formatInputCommands(input);
    const finalCoordinates = [];
    for (const commandIndex in commands) {
      const command = commands[commandIndex];
      for (const instruction of command.instructions) {
        if (!finalCoordinates[commandIndex]) {
          finalCoordinates[commandIndex] = command.coordinate;
        }
        finalCoordinates[commandIndex] = processCoordinate(
          finalCoordinates[commandIndex],
          instruction,
        );
      }
    }
    return finalCoordinatesSerealizer(finalCoordinates);
  } catch {
    throw new Error(
      'Something went wrong. Check that the input data is correct.',
    );
  }
}

module.exports = { sendCommands };
