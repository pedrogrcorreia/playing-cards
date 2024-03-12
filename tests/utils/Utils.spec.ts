import { CardsCollection } from '../../src/models/deck/CardsCollection';
import { shuffleCards } from '../../src/utils/Utils';
import { Deck } from '../../src/models/deck/Deck';

describe('Test Utils', () => {
  test('shuffleCards', () => {
    const deck = new Deck();
    const beforeCards = deck.cards.map((card) => card);
    shuffleCards(deck.cards);
    expect(deck.cards).not.toBe(beforeCards);
  });
});
