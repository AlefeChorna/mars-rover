function finalCoordinatesSerealizer(output) {
  const formattedOutput = output.map(
    (data) => `${data.x} ${data.y} ${data.cardinalPoint}`,
  );
  return formattedOutput.join('\n');
}

module.exports = { finalCoordinatesSerealizer };
