import { FaceValue } from './face/FaceValue';
import { Suit } from './suits/Suits';

export class Card {
  public suit: Suit;
  public faceValue: FaceValue;
  constructor(suit: Suit, value: FaceValue) {
    this.suit = suit;
    this.faceValue = value;
  }

  public toString = (): string => {
    return `${this.faceValue.name} of ${this.suit.suitName}`;
  };
}
