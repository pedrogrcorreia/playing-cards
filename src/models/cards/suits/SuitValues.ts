export const SuitValues = {
  CLUBS: 'clubs',
  SPADES: 'spades',
  HEARTS: 'hearts',
  DIAMONDS: 'diamonds',
  NO_SUIT: 'noSuit',
};

export type SuitValues = (typeof SuitValues)[keyof typeof SuitValues];
