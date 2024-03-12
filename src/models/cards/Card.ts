import { Rank } from './Rank';
import { FaceValue } from './face/FaceValue';
import { FaceValues } from './face/FaceValues';
import { SuitValues } from './suits/SuitValues';
import { Suit } from './suits/Suits';

export class Card {
  public suit!: Suit;
  public face!: FaceValue;

  constructor({
    suitValue = SuitValues.CLUBS,
    faceValue = FaceValues.ACE,
  }: { suitValue?: SuitValues; faceValue?: FaceValues } = {}) {
    this.suit = new Suit({ suit: suitValue });
    this.face = new FaceValue({ faceValue: faceValue });
  }

  public compareValue(card: Card) {
    switch (true) {
      case this.face.value > card.face.value:
        return Rank.HIGHER;
      case this.face.value < card.face.value:
        return Rank.LOWER;
      case this.face.value == card.face.value:
        return Rank.EQUAL;
    }
  }
}
