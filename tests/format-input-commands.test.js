const { formatInputCommands } = require('../src/format-input-commands');

describe('FormatInputCommands', () => {
  test('Should format input commands', () => {
    const scenarios = [
      {
        input: '2 2 S\nMRRMMLMMMLLM',
        output: [
          {
            coordinate: { cardinalPoint: 'S', x: 2, y: 2 },
            instructions: ['M', 'R', 'R', 'M', 'M', 'L', 'M', 'M', 'M', 'L', 'L', 'M'],
          },
        ],
      },
      {
        input: '1 2 N\nLMLMLMLMM\n3 3 E\nMRRMMRMRRM',
        output: [
          {
            coordinate: { cardinalPoint: 'N', x: 1, y: 2 },
            instructions: ['L', 'M', 'L', 'M', 'L', 'M', 'L', 'M', 'M'],
          },
          {
            coordinate: { cardinalPoint: 'E', x: 3, y: 3 },
            instructions: ['M', 'R', 'R', 'M', 'M', 'R', 'M', 'R', 'R', 'M'],
          },
        ],
      },
      {
        input: '-1 -2 W\nMMRMLLM\n0 0 E\nMLMRM\n-3 2 W\nMMRRLM',
        output: [
          {
            coordinate: { cardinalPoint: 'W', x: -1, y: -2 },
            instructions: ['M', 'M', 'R', 'M', 'L', 'L', 'M'],
          },
          {
            coordinate: { cardinalPoint: 'E', x: 0, y: 0 },
            instructions: ['M', 'L', 'M', 'R', 'M'],
          },
          {
            coordinate: { cardinalPoint: 'W', x: -3, y: 2 },
            instructions: ['M', 'M', 'R', 'R', 'L', 'M'],
          },
        ],
      },
    ];
    for (const scenario of scenarios) {
      const response = formatInputCommands(scenario.input);
      expect(response).toEqual(scenario.output);
    }
  });
});
