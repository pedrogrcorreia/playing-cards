import { Card } from '../../../src/models/cards/Card';
import { SuitValues } from '../../../src/models/cards/suits/SuitValues';
import { CardsCollection } from '../../../src/models/deck/CardsCollection';
import { shuffleCards } from '../../../src/utils/Utils';

jest.mock('../../../src/utils/Utils', () => {
  return {
    shuffleCards: jest.fn(),
  };
});

describe('Test CardCollection methods', () => {
  const cardsCollection = new CardsCollection();
  describe('addCard', () => {
    test('add a card should return 1', () => {
      expect(cardsCollection.addCard(new Card())).toBe(1);
    });
    test('add no card should return 1', () => {
      expect(cardsCollection.addCard()).toBe(1);
    });
  });
  describe('addCardToBegin', () => {
    test('add a card should return 2', () => {
      expect(cardsCollection.addCardToBegin(new Card({ suit: SuitValues.NO_SUIT }))).toBe(2);
    });
    test('add no card should return 2', () => {
      expect(cardsCollection.addCardToBegin()).toBe(2);
    });
    test('first card different than second', () => {
      expect(cardsCollection.cards[0].suit.name).toBe(SuitValues.NO_SUIT);
    });
  });
  describe('removeCard and removeCardFromBegin', () => {
    test('remove a card should return last card', () => {
      expect(cardsCollection.removeCard()?.suit.name).toBe(SuitValues.CLUBS);
    });
    test('remove card from begin should return first card', () => {
      expect(cardsCollection.removeCardFromBegin()?.suit.name).toBe(SuitValues.NO_SUIT);
    });
    test('remove card on empty should return null', () => {
      expect(cardsCollection.removeCard()).toBeUndefined();
      expect(cardsCollection.removeCardFromBegin()).toBeUndefined();
    });
  });
  describe('shuffle', () => {
    test('should call shuffleCards', () => {
      cardsCollection.shuffle();
      expect(shuffleCards).toHaveBeenCalled();
    });
  });
  describe('isEmpty', () => {
    test('should return true', () => {
      expect(cardsCollection.isEmpty).toBe(true);
    });
    test('should return false', () => {
      cardsCollection.addCard(new Card());
      expect(cardsCollection.isEmpty).toBe(false);
    });
  });
  describe('remainingCards', () => {
    test('should return 1', () => {
      expect(cardsCollection.remainingCards).toBe(1);
    });
  });
});
