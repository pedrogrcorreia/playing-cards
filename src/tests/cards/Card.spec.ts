import { Card } from '../../models/cards/Card';
import { Rank } from '../../models/cards/Rank';
import { FaceValue } from '../../models/cards/face/FaceValue';
import { FaceValues } from '../../models/cards/face/FaceValues';
import { SuitValues } from '../../models/cards/suits/SuitValues';
import { Suit } from '../../models/cards/suits/Suits';

const card = new Card(new Suit(SuitValues.CLUBS), new FaceValue(FaceValues.ACE));

describe('Test cards', () => {
  describe('Card creation', () => {
    test('card created', () => {
      expect(card).not.toBeNull();
    });
    describe('Card values', () => {
      test('card face values', () => {
        expect(card.faceValue.name).toBe(FaceValues[FaceValues.ACE]);
        expect(card.faceValue.value).toBe(FaceValues.ACE);
      });

      test('card suit values', () => {
        expect(card.suit.name).toBe(SuitValues[SuitValues.CLUBS]);
        expect(card.suit.value).toBe(SuitValues.CLUBS);
        expect(card.suit.isBlack).toBe(true);
        expect(card.suit.isRed).toBe(false);
      });
    });
  });
  describe('Card comparison', () => {
    const ace = card;
    const king = new Card(new Suit(SuitValues.CLUBS), new FaceValue(FaceValues.KING));
    const queen = new Card(new Suit(SuitValues.CLUBS), new FaceValue(FaceValues.QUEEN));
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
  describe('Card string', () => {
    test('should return card text', () => {
      expect(card.toString()).toBe('ACE of CLUBS');
    });
  });
});
