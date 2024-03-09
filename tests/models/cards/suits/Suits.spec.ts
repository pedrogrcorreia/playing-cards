import { SuitValues } from '../../../../src/models/cards/suits/SuitValues';
import { Suit } from '../../../../src/models/cards/suits/Suits';

describe('Test Suits', () => {
  describe('Create different suits', () => {
    test('Clubs', () => {
      const suit = new Suit(SuitValues.CLUBS);
      expect(suit.value).toBe(0);
      expect(suit.name).toBe('CLUBS');
      expect(suit.isBlack).toBe(true);
      expect(suit.isRed).toBe(false);
    });

    test('Spades', () => {
      const suit = new Suit(SuitValues.SPADES);
      expect(suit.value).toBe(1);
      expect(suit.name).toBe('SPADES');
      expect(suit.isBlack).toBe(true);
      expect(suit.isRed).toBe(false);
    });

    test('Hearts', () => {
      const suit = new Suit(SuitValues.HEARTS);
      expect(suit.value).toBe(2);
      expect(suit.name).toBe('HEARTS');
      expect(suit.isBlack).toBe(false);
      expect(suit.isRed).toBe(true);
    });

    test('Diamonds', () => {
      const suit = new Suit(SuitValues.DIAMONDS);
      expect(suit.value).toBe(3);
      expect(suit.name).toBe('DIAMONDS');
      expect(suit.isBlack).toBe(false);
      expect(suit.isRed).toBe(true);
    });
  });
});
