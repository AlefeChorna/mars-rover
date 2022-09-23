const { chunkArray } = require('../../src/utils/chunk-array');

describe('ChunkArray', () => {
  test('Should return chuncked array', () => {
    const scenarios = [
      {
        input: ['One', 'Two', 'Three'],
        output: [['One', 'Two'], ['Three']],
        size: 2,
      },
      {
        input: [1, 2, 3, 4, 5, 6, 7, 8],
        output: [
          [1, 2, 3],
          [4, 5, 6],
          [7, 8],
        ],
        size: 3,
      },
      {
        input: [{ name: 'Joe' }, { name: 'Mike' }],
        output: [[{ name: 'Joe' }], [{ name: 'Mike' }]],
        size: 1,
      },
      {
        input: [],
        output: [],
        size: 3,
      },
    ];
    for (const scenario of scenarios) {
      const result = chunkArray(scenario.input, scenario.size);
      expect(result).toEqual(scenario.output);
    }
  });
});
