export const Rank = {
  HIGHER: 'higher',
  LOWER: 'lower',
  EQUAL: 'equal',
};

export type Rank = (typeof Rank)[keyof typeof Rank];
