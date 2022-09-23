const {
  SPIN_90_DEGREES_LEFT,
  SPIN_90_DEGREES_RIGHT,
} = require('../src/constants');
const { getNextCardinalPoint } = require('../src/get-next-cardinal-point');

describe('GetNextCardinalPoint', () => {
  test('Should return previous cardinal point', () => {
    const scenarios = [
      { input: 'N', output: 'W' },
      { input: 'E', output: 'N' },
      { input: 'S', output: 'E' },
      { input: 'W', output: 'S' },
    ];
    for (const scenario of scenarios) {
      const result = getNextCardinalPoint(SPIN_90_DEGREES_LEFT, scenario.input);
      expect(result).toBe(scenario.output);
    }
  });

  test('Should return next cardinal point', () => {
    const scenarios = [
      { input: 'N', output: 'E' },
      { input: 'E', output: 'S' },
      { input: 'S', output: 'W' },
      { input: 'W', output: 'N' },
    ];
    for (const scenario of scenarios) {
      const result = getNextCardinalPoint(
        SPIN_90_DEGREES_RIGHT,
        scenario.input
      );
      expect(result).toBe(scenario.output);
    }
  });
});
