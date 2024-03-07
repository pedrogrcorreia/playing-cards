import { Rank } from './Rank';
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
    return `${this.faceValue.name} of ${this.suit.name}`;
  };

  public compareValue(card: Card) {
    switch (true) {
      case this.faceValue.value > card.faceValue.value:
        return Rank.HIGHER;
      case this.faceValue.value < card.faceValue.value:
        return Rank.LOWER;
      case this.faceValue.value == card.faceValue.value:
        return Rank.EQUAL;
    }
  }
}
