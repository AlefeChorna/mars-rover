const SPIN_90_DEGREES_LEFT = 'L';
const SPIN_90_DEGREES_RIGHT = 'R';
const MOVE_FORWARD_CODE = 'M';
const SPIN_OPTIONS = [SPIN_90_DEGREES_LEFT, SPIN_90_DEGREES_RIGHT];
const CARDINAL_POINTS = {
  N: {
    PREVIOUS: 'W',
    NEXT: 'E',
    VALUE: 'N',
  },
  E: {
    PREVIOUS: 'N',
    NEXT: 'S',
    VALUE: 'E',
  },
  S: {
    PREVIOUS: 'E',
    NEXT: 'W',
    VALUE: 'S',
  },
  W: {
    PREVIOUS: 'S',
    NEXT: 'N',
    VALUE: 'W',
  },
};

module.exports = {
  SPIN_90_DEGREES_LEFT,
  SPIN_90_DEGREES_RIGHT,
  MOVE_FORWARD_CODE,
  SPIN_OPTIONS,
  CARDINAL_POINTS,
};
