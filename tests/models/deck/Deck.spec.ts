import { Card } from '../../../src/models/cards/Card';
import { FaceValue } from '../../../src/models/cards/face/FaceValue';
import { FaceValues } from '../../../src/models/cards/face/FaceValues';
import { SuitValues } from '../../../src/models/cards/suits/SuitValues';
import { Suit } from '../../../src/models/cards/suits/Suits';
import { FiftyTwoDeck, FortyDeck, FullDeck } from '../../../src/models/deck/Deck';
import { shuffleCards } from '../../../src/utils/Utils';

let fullDeck = new FullDeck();
let fiftyTwoDeck = new FiftyTwoDeck();
let fortyDeck = new FortyDeck();
let card = new Card(new Suit(SuitValues.CLUBS), new FaceValue(FaceValues.ACE));

jest.mock('../../../utils/Utils', () => {
  return {
    shuffleCards: jest.fn(),
  };
});

describe('Test Deck', () => {
  beforeEach(() => {
    fullDeck = new FullDeck();
    fiftyTwoDeck = new FiftyTwoDeck();
    fortyDeck = new FortyDeck();
    card = new Card(new Suit(SuitValues.CLUBS), new FaceValue(FaceValues.ACE));
  });
  describe('Test FullDeck', () => {
    test('FullDeck creation', () => {
      expect(fullDeck).not.toBeNull();
    });
    describe('Full deck cards', () => {
      test('should return 56 cards', () => {
        expect(fullDeck.cards.length).toBe(56);
      });
      test('should return 0 on stack', () => {
        expect(fullDeck.stack.cards.length).toBe(0);
      });
    });
  });
  describe('Test FiftyTwoDeck', () => {
    test('FiftyTwoDeck creation', () => {
      expect(fiftyTwoDeck).not.toBeNull();
    });
    describe('FiftyTwo deck cards', () => {
      test('should return 52 cards', () => {
        expect(fiftyTwoDeck.cards.length).toBe(52);
      });
      test('should return 0 on stack', () => {
        expect(fiftyTwoDeck.stack.cards.length).toBe(0);
      });
    });
  });
  describe('Test Forty', () => {
    test('Forty creation', () => {
      expect(fortyDeck).not.toBeNull();
    });
    describe('Full deck cards', () => {
      test('should return 40 cards', () => {
        expect(fortyDeck.cards.length).toBe(40);
      });
      test('should return 0 on stack', () => {
        expect(fortyDeck.stack.cards.length).toBe(0);
      });
    });
  });
  describe('Test card methods', () => {
    test('should call shuffleCards', () => {
      fullDeck.shuffle();
      expect(shuffleCards).toHaveBeenCalled();
    });

    describe('Remove card', () => {
      test('should remove card and add to stack', () => {
        fullDeck.removeCard();
        expect(fullDeck.cards.length).toBe(55);
        fullDeck.removeCardFromBegin();
        expect(fullDeck.cards.length).toBe(54);
        expect(fullDeck.stack.cards.length).toBe(2);
      });
      test('should return first deck card', () => {
        const firstCard = fullDeck.cards[0];
        const card = fullDeck.removeCardFromBegin();
        expect(card).toBe(firstCard);
      });
      test('should return last card', () => {
        const lastCard = fullDeck.cards[fullDeck.cards.length - 1];
        const card = fullDeck.removeCard();
        expect(card).toBe(lastCard);
      });
      test('should return null', () => {
        fullDeck.cards.splice(0, fullDeck.cards.length);
        const lastCard = fullDeck.removeCard();
        const firstCard = fullDeck.removeCardFromBegin();
        expect(firstCard && lastCard).toBeUndefined();
      });
    });
    describe('Add card', () => {
      test('should return 57 and added card to be the last', () => {
        expect(fullDeck.addCard(card)).toBe(57);
        expect(fullDeck.cards[fullDeck.cards.length - 1]).toBe(card);
      });
      test('should return 57 and added card to be first', () => {
        expect(fullDeck.addCardToBegin(card)).toBe(57);
        expect(fullDeck.cards[0]).toBe(card);
      });
    });
  });
  describe('Test deck methods', () => {
    test('should return deck toString', () => {
      expect(fullDeck.toString()).toContain('TWO of SPADES\nTHREE of SPADES');
    });

    describe('Test isEmpty', () => {
      test('should return false', () => {
        expect(fullDeck.isEmpty()).toBe(false);
      });

      test('should return true', () => {
        fullDeck.cards.splice(0, fullDeck.cards.length);
        expect(fullDeck.isEmpty()).toBe(true);
      });
    });

    describe('Test remaining cards', () => {
      expect(fullDeck.remainingCards()).toBe(56);
    });
  });
});
