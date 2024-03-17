import { SuitValues } from '../../../../src/models/cards/suits/SuitValues';
import { Suit } from '../../../../src/models/cards/suits/Suits';

describe('Test Suits', () => {
  describe('Create different suits', () => {
    test('Clubs', () => {
      const suit = new Suit({ suit: SuitValues.CLUBS });
      expect(suit.name).toBe('clubs');
      expect(suit.isBlack).toBe(true);
      expect(suit.isRed).toBe(false);
    });

    test('Spades', () => {
      const suit = new Suit({ suit: SuitValues.SPADES });
      expect(suit.name).toBe('spades');
      expect(suit.isBlack).toBe(true);
      expect(suit.isRed).toBe(false);
    });

    test('Hearts', () => {
      const suit = new Suit({ suit: SuitValues.HEARTS });
      expect(suit.name).toBe('hearts');
      expect(suit.isBlack).toBe(false);
      expect(suit.isRed).toBe(true);
    });

    test('Diamonds', () => {
      const suit = new Suit({ suit: SuitValues.DIAMONDS });
      expect(suit.name).toBe('diamonds');
      expect(suit.isBlack).toBe(false);
      expect(suit.isRed).toBe(true);
    });
  });
});
