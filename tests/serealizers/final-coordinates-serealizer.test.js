const {
  finalCoordinatesSerealizer,
} = require('../../src/serealizers/final-coordinates-serealizer');

describe('FinalCoordinatesSerealizer', () => {
  test('Should serealize coordinates', () => {
    const scenarios = [
      { input: [{ x: -2, y: 0, cardinalPoint: 'N' }], output: '-2 0 N' },
      {
        input: [
          { x: 3, y: -1, cardinalPoint: 'W' },
          { x: 0, y: 2, cardinalPoint: 'S' },
        ],
        output: '3 -1 W\n0 2 S',
      },
      {
        input: [
          { x: 0, y: -3, cardinalPoint: 'E' },
          { x: 2, y: 1, cardinalPoint: 'W' },
          { x: -3, y: -5, cardinalPoint: 'N' },
        ],
        output: '0 -3 E\n2 1 W\n-3 -5 N',
      },
    ];
    for (const scenario of scenarios) {
      const result = finalCoordinatesSerealizer(scenario.input);
      expect(result).toBe(scenario.output);
    }
  });
});
