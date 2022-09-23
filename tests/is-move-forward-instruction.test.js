const {
  isMoveForwardInstruction,
} = require('../src/is-move-forward-instruction');

const MOVE_FORWARD_CODE = 'M';

describe('IsMoveForwardInstruction', () => {
  test('Should return false when is given an invalid instruction', () => {
    const scenarios = ['One', 'Two', null, '', 'some text'];
    for (const scenario of scenarios) {
      const result = isMoveForwardInstruction(scenario);
      expect(result).toBeFalsy();
    }
  });

  test('Should return true when is given a valid instruction', () => {
    expect(isMoveForwardInstruction(MOVE_FORWARD_CODE)).toBeTruthy();
  });
});
