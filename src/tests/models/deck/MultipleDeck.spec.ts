import { DeckType } from '../../../models/deck/DeckType';
import { MultipleDeck } from '../../../models/deck/MultipleDeck';

describe('Test Multiple Deck', () => {
  test('create Multiple FullDeck', () => {
    const multipleDecks = new MultipleDeck(3, DeckType.FULL);
    expect(multipleDecks).not.toBe(null);
    expect(multipleDecks.decks.length).toBe(3);
    expect(multipleDecks.decks[0].cards.length).toBe(56);
  });

  test('create Multiple FiftyTwoDecks', () => {
    const multipleDecks = new MultipleDeck(2, DeckType.FIFTY_TWO);
    expect(multipleDecks).not.toBe(null);
    expect(multipleDecks.decks.length).toBe(2);
    expect(multipleDecks.decks[0].cards.length).toBe(52);
  });

  test('create Multiple FortyDecks', () => {
    const multipleDecks = new MultipleDeck(4, DeckType.FORTY);
    expect(multipleDecks).not.toBe(null);
    expect(multipleDecks.decks.length).toBe(4);
    expect(multipleDecks.decks[0].cards.length).toBe(40);
  });
});
