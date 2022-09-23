const { calculateNewPosition } = require('../src/calculate-new-position');

describe('CalculateNewPositition', () => {
  test('Should return calculated positions', () => {
    const scenarios = [
      {
        input: { cardinalPoint: 'N', x: -1, y: 0 },
        ouput: { x: -1, y: 1 },
      },
      {
        input: { cardinalPoint: 'E', x: 3, y: 2 },
        ouput: { x: 4, y: 2 },
      },
      {
        input: { cardinalPoint: 'S', x: 1, y: 0 },
        ouput: { x: 1, y: -1 },
      },
      {
        input: { cardinalPoint: 'W', x: -4, y: 3 },
        ouput: { x: -5, y: 3 },
      },
    ];
    for (const scenario of scenarios) {
      const result = calculateNewPosition(scenario.input);
      expect(result).toEqual(scenario.ouput);
    }
  });
});
