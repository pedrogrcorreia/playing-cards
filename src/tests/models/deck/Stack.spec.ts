import { Card } from '../../../models/cards/Card';
import { FaceValue } from '../../../models/cards/face/FaceValue';
import { FaceValues } from '../../../models/cards/face/FaceValues';
import { SuitValues } from '../../../models/cards/suits/SuitValues';
import { Suit } from '../../../models/cards/suits/Suits';
import { FullDeck } from '../../../models/deck/Deck';
import { Stack } from '../../../models/deck/Stack';

let stack = new Stack();
let card = new Card(new Suit(SuitValues.CLUBS), new FaceValue(FaceValues.ACE));

describe('Test Stack', () => {
  beforeEach(() => {
    stack.cards.splice(0, stack.cards.length);
    card = new Card(new Suit(SuitValues.CLUBS), new FaceValue(FaceValues.ACE));
  });
  test('add card should return 1', () => {
    expect(stack.addCard(card)).toBe(1);
  });
  test('remove card should return card', () => {
    stack.addCard(card);
    const result = stack.removeCard();
    expect(result).toBe(card);
  });
  test('remove card should return undefined', () => {
    const result = stack.removeCard();
    expect(result).toBeUndefined();
  });
  test('remove card from begin should return card', () => {
    stack.addCard(card);
    const result = stack.removeCardFromBegin();
    expect(result).toBe(card);
  });
  test('remove card from begin should return null', () => {
    const result = stack.removeCardFromBegin();
    expect(result).toBeUndefined();
  });
});
