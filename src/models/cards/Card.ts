import { Rank } from './Rank';
import { FaceValue } from './face/FaceValue';
import { FaceValues } from './face/FaceValues';
import { SuitValues } from './suits/SuitValues';
import { Suit } from './suits/Suits';

export class Card {
  public suit!: Suit;
  public face!: FaceValue;
  public isVisible: boolean = false;

  constructor({ suit = SuitValues.CLUBS, face = FaceValues.ACE }: { suit?: SuitValues; face?: FaceValues } = {}) {
    this.suit = new Suit({ suit: suit });
    this.face = new FaceValue({ faceValue: face });
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
