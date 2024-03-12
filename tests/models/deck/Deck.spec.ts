import { Card } from '../../../src/models/cards/Card';
import { FaceValues } from '../../../src/models/cards/face/FaceValues';
import { Deck } from '../../../src/models/deck/Deck';
import { DeckType } from '../../../src/models/deck/DeckType';

describe('Test Deck', () => {
  describe('Default Deck', () => {
    test('should return 52 cards', () => {
      const deck = new Deck();
      expect(deck.remainingCards).toBe(52);
    });
  });
  describe('Deck with type', () => {
    describe('standard with jokers', () => {
      const deck = new Deck({ deckType: DeckType.STANDARD_JOKERS });
      test('should return 54 cards', () => {
        expect(deck.remainingCards).toBe(54);
      });
      test('should return jokers as last cards', () => {
        expect(deck.removeCard()?.face.value).toBe(FaceValues.JOKER);
        expect(deck.removeCard()?.face.value).toBe(FaceValues.JOKER);
      });
    });
    describe('standard', () => {
      const deck = new Deck({ deckType: DeckType.STANDARD });
      test('should return 52 cards', () => {
        expect(deck.remainingCards).toBe(52);
      });
      test('should return ace as last card', () => {
        expect(deck.removeCard()?.face.value).toBe(FaceValues.ACE);
      });
    });
    describe('forty', () => {
      const deck = new Deck({ deckType: DeckType.FORTY });
      test('should return 40 cards', () => {
        expect(deck.remainingCards).toBe(40);
      });
      test('should return ace as last card', () => {
        expect(deck.removeCard()?.face.value).toBe(FaceValues.ACE);
      });
    });
  });
  describe('Multiple decks', () => {
    const deck = new Deck({ numberOfDecks: 2 });
    test('should return 104 cards', () => {
      expect(deck.remainingCards).toBe(104);
    });
  });
  describe('Custom cards deck', () => {
    const deck = new Deck({ customCards: Array(2).fill(new Card()) });
    test('should return 2 cards', () => {
      expect(deck.remainingCards).toBe(2);
    });
  });
});
