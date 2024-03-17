export const FaceValues = {
  TWO: {
    name: 'two',
    value: 2,
  },
  THREE: {
    name: 'three',
    value: 3,
  },
  FOUR: {
    name: 'four',
    value: 4,
  },
  FIVE: {
    name: 'five',
    value: 5,
  },
  SIX: {
    name: 'six',
    value: 6,
  },
  SEVEN: {
    name: 'seven',
    value: 7,
  },
  EIGHT: {
    name: 'eight',
    value: 8,
  },
  NINE: {
    name: 'nine',
    value: 9,
  },
  TEN: {
    name: 'ten',
    value: 10,
  },
  JACK: {
    name: 'jack',
    value: 11,
  },
  QUEEN: {
    name: 'queen',
    value: 12,
  },
  KING: {
    name: 'king',
    value: 13,
  },
  ACE: {
    name: 'ace',
    value: 14,
  },
  JOKER: {
    name: 'joker',
    value: 21,
  },
};

export type FaceValues = (typeof FaceValues)[keyof typeof FaceValues];
