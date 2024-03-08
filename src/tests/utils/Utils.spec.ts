import { FullDeck } from '../../models/deck/Deck';
import { shuffleCards } from '../../utils/Utils';

describe('Test Utils', () => {
  test('shuffleCards', () => {
    const deck = new FullDeck();
    const beforeCards = deck.cards.map((card) => card);
    shuffleCards(deck.cards);
    expect(deck.cards).not.toBe(beforeCards);
  });
});
