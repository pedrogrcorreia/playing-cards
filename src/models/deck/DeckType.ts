export const DeckType = {
  STANDARD_JOKERS: 'standardJokers',
  STANDARD: 'standard',
  FORTY: 'forty',
} as const;

export type DeckType = (typeof DeckType)[keyof typeof DeckType];
