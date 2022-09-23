const { sendCommands } = require('../src/send-commands');

describe('SendCommands', () => {
  test('Should throw an error if provided invalid params', () => {
    expect(() => sendCommands('Invalid data format')).toThrow(
      new Error('Something went wrong. Check that the input data is correct.'),
    );
  });

  test('Should ignore invalid commands', () => {
    const input = '2 2 S\nMRRTESTMMLMMMLLMIGNOREME';
    const result = sendCommands(input);
    expect(result).toBe('0 2 S');
  });

  test('Should exec commands', () => {
    const scenarios = [
      {
        input: '2 2 S\nMRRMMLMMMLLM',
        output: '0 3 E',
      },
      {
        input: '1 2 N\nLMLMLMLMM\n3 3 E\nMRRMMRMRRM',
        output: '1 3 N\n2 3 S',
      },
      {
        input: '-1 -2 W\nMMRMLLM\n0 0 E\nMLMRM\n-3 2 E\nMMRRLM',
        output: '-3 -2 S\n2 1 E\n-1 1 S',
      },
    ];
    for (const scenario of scenarios) {
      const result = sendCommands(scenario.input);
      expect(result).toBe(scenario.output);
    }
  });
});
