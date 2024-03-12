import { Pile } from '../../../src/models/deck/Pile';

describe('Test Pile', () => {
  test('should not return null', () => {
    const pile = new Pile();
    expect(pile).not.toBeNull();
  });
});
