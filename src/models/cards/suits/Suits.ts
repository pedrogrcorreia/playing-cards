import { ISuits } from './ISuits';
import { SuitValues } from './SuitValues';

export class Suit implements ISuits {
  isBlack = false;
  isRed = false;

  constructor(public suitValue: number, public suitName: string) {
    this.isBlack = suitValue == SuitValues.CLUBS || suitValue == SuitValues.SPADES;
    this.isRed = suitValue == SuitValues.HEARTS || suitValue == SuitValues.DIAMONDS;
  }
}
