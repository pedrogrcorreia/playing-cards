import { FaceValue } from '../../../../src/models/cards/face/FaceValue';
import { FaceValues } from '../../../../src/models/cards/face/FaceValues';

describe('Test Face values', () => {
  describe('Create different FaceValues', () => {
    test('2', () => {
      const faceValue = new FaceValue(FaceValues.TWO);
      expect(faceValue.name).toBe('TWO');
      expect(faceValue.value).toBe(0);
    });

    test('3', () => {
      const faceValue = new FaceValue(FaceValues.THREE);
      expect(faceValue.name).toBe('THREE');
      expect(faceValue.value).toBe(1);
    });

    test('4', () => {
      const faceValue = new FaceValue(FaceValues.FOUR);
      expect(faceValue.name).toBe('FOUR');
      expect(faceValue.value).toBe(2);
    });

    test('5', () => {
      const faceValue = new FaceValue(FaceValues.FIVE);
      expect(faceValue.name).toBe('FIVE');
      expect(faceValue.value).toBe(3);
    });

    test('6', () => {
      const faceValue = new FaceValue(FaceValues.SIX);
      expect(faceValue.name).toBe('SIX');
      expect(faceValue.value).toBe(4);
    });

    test('7', () => {
      const faceValue = new FaceValue(FaceValues.SEVEN);
      expect(faceValue.name).toBe('SEVEN');
      expect(faceValue.value).toBe(5);
    });

    test('8', () => {
      const faceValue = new FaceValue(FaceValues.EIGHT);
      expect(faceValue.name).toBe('EIGHT');
      expect(faceValue.value).toBe(6);
    });

    test('9', () => {
      const faceValue = new FaceValue(FaceValues.NINE);
      expect(faceValue.name).toBe('NINE');
      expect(faceValue.value).toBe(7);
    });

    test('10', () => {
      const faceValue = new FaceValue(FaceValues.TEN);
      expect(faceValue.name).toBe('TEN');
      expect(faceValue.value).toBe(8);
    });

    test('Jack', () => {
      const faceValue = new FaceValue(FaceValues.JACK);
      expect(faceValue.name).toBe('JACK');
      expect(faceValue.value).toBe(9);
    });

    test('Queen', () => {
      const faceValue = new FaceValue(FaceValues.QUEEN);
      expect(faceValue.name).toBe('QUEEN');
      expect(faceValue.value).toBe(10);
    });

    test('King', () => {
      const faceValue = new FaceValue(FaceValues.KING);
      expect(faceValue.name).toBe('KING');
      expect(faceValue.value).toBe(11);
    });

    test('Ace', () => {
      const faceValue = new FaceValue(FaceValues.ACE);
      expect(faceValue.name).toBe('ACE');
      expect(faceValue.value).toBe(12);
    });

    test('Joker', () => {
      const faceValue = new FaceValue(FaceValues.JOKER);
      expect(faceValue.name).toBe('JOKER');
      expect(faceValue.value).toBe(13);
    });
  });
});
