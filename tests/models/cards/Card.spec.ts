import { Card } from '../../../src/models/cards/Card';
import { Rank } from '../../../src/models/cards/Rank';
import { FaceValue } from '../../../src/models/cards/face/FaceValue';
import { FaceValues } from '../../../src/models/cards/face/FaceValues';
import { SuitValues } from '../../../src/models/cards/suits/SuitValues';
import { Suit } from '../../../src/models/cards/suits/Suits';

describe('Test cards', () => {
  describe('Default card', () => {
    test('should return ace of clubs', () => {
      const card = new Card();
      expect(card).not.toBeNull();
      expect(card.suit.name).toBe('clubs');
      expect(card.face.name).toBe('ace');
    });
    describe('Default valued card', () => {
      test('should return jack of clubs', () => {
        const card = new Card({ face: FaceValues.JACK });
        expect(card.face.name).toBe('jack');
        expect(card.face.value).toBe(FaceValues.JACK.value);
        expect(card.suit.name).toBe('clubs');
      });
    });
    describe('Default suited card', () => {
      test('should return ace of diamonds', () => {
        const card = new Card({ suit: SuitValues.DIAMONDS });
        expect(card.suit.name).toBe('diamonds');
        expect(card.face.name).toBe('ace');
      });
    });
    describe('Suited and valued card', () => {
      test('should return six of hearts', () => {
        const card = new Card({ suit: SuitValues.HEARTS, face: FaceValues.SIX });
        expect(card.suit.name).toBe('hearts');
        expect(card.face.name).toBe('six');
      });
    });
  });
  describe('Card comparison', () => {
    const ace = new Card();
    const king = new Card({ face: FaceValues.KING });

    test('should return higher', () => {
      const result = ace.compareValue(king);
      expect(result).toBe(Rank.HIGHER);
    });
    test('should return lower', () => {
      const result = king.compareValue(ace);
      expect(result).toBe(Rank.LOWER);
    });

    test('should return equal', () => {
      const result = king.compareValue(king);
      expect(result).toBe(Rank.EQUAL);
    });
  });
});
