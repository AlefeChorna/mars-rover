const { isSpinInstruction } = require('../src/is-spin-instruction');

const SPIN_90_DEGREES_LEFT = 'L';
const SPIN_90_DEGREES_RIGHT = 'R';

describe('IsSpinInstruction', () => {
  test('Should return false when is given an invalid instruction', () => {
    const scenarios = ['One', 'Two', null, '', 'some text'];
    for (const scenario of scenarios) {
      const result = isSpinInstruction(scenario);
      expect(result).toBeFalsy();
    }
  });

  test('Should return true when is given a valid instruction', () => {
    expect(isSpinInstruction(SPIN_90_DEGREES_LEFT)).toBeTruthy();
    expect(isSpinInstruction(SPIN_90_DEGREES_RIGHT)).toBeTruthy();
  });
});
