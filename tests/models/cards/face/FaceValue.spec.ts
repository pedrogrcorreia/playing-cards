import { FaceValue } from '../../../../src/models/cards/face/FaceValue';
import { FaceValues } from '../../../../src/models/cards/face/FaceValues';

describe('Test Face values', () => {
  describe('Create different FaceValues', () => {
    test('2', () => {
      const faceValue = new FaceValue({ faceValue: FaceValues.TWO });
      expect(faceValue.name).toBe('two');
      expect(faceValue.value).toBe(2);
    });

    test('3', () => {
      const faceValue = new FaceValue({ faceValue: FaceValues.THREE });
      expect(faceValue.name).toBe('three');
      expect(faceValue.value).toBe(3);
    });

    test('4', () => {
      const faceValue = new FaceValue({ faceValue: FaceValues.FOUR });
      expect(faceValue.name).toBe('four');
      expect(faceValue.value).toBe(4);
    });

    test('5', () => {
      const faceValue = new FaceValue({ faceValue: FaceValues.FIVE });
      expect(faceValue.name).toBe('five');
      expect(faceValue.value).toBe(5);
    });

    test('6', () => {
      const faceValue = new FaceValue({ faceValue: FaceValues.SIX });
      expect(faceValue.name).toBe('six');
      expect(faceValue.value).toBe(6);
    });

    test('7', () => {
      const faceValue = new FaceValue({ faceValue: FaceValues.SEVEN });
      expect(faceValue.name).toBe('seven');
      expect(faceValue.value).toBe(7);
    });

    test('8', () => {
      const faceValue = new FaceValue({ faceValue: FaceValues.EIGHT });
      expect(faceValue.name).toBe('eight');
      expect(faceValue.value).toBe(8);
    });

    test('9', () => {
      const faceValue = new FaceValue({ faceValue: FaceValues.NINE });
      expect(faceValue.name).toBe('nine');
      expect(faceValue.value).toBe(9);
    });

    test('10', () => {
      const faceValue = new FaceValue({ faceValue: FaceValues.TEN });
      expect(faceValue.name).toBe('ten');
      expect(faceValue.value).toBe(10);
    });

    test('Jack', () => {
      const faceValue = new FaceValue({ faceValue: FaceValues.JACK });
      expect(faceValue.name).toBe('jack');
      expect(faceValue.value).toBe(11);
    });

    test('Queen', () => {
      const faceValue = new FaceValue({ faceValue: FaceValues.QUEEN });
      expect(faceValue.name).toBe('queen');
      expect(faceValue.value).toBe(12);
    });

    test('King', () => {
      const faceValue = new FaceValue({ faceValue: FaceValues.KING });
      expect(faceValue.name).toBe('king');
      expect(faceValue.value).toBe(13);
    });

    test('Ace', () => {
      const faceValue = new FaceValue({ faceValue: FaceValues.ACE });
      expect(faceValue.name).toBe('ace');
      expect(faceValue.value).toBe(14);
    });

    test('Joker', () => {
      const faceValue = new FaceValue({ faceValue: FaceValues.JOKER });
      expect(faceValue.name).toBe('joker');
      expect(faceValue.value).toBe(21);
    });
  });
});
