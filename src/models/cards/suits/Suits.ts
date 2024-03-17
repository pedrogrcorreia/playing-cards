import { ISuits } from './ISuits';
import { SuitValues } from './SuitValues';

export class Suit implements ISuits {
  public name!: string;
  isBlack = false;
  isRed = false;

  constructor({ suit = SuitValues.CLUBS }: { suit?: SuitValues } = {}) {
    this.name = suit;
    this.isBlack = suit == SuitValues.CLUBS || suit == SuitValues.SPADES;
    this.isRed = suit == SuitValues.HEARTS || suit == SuitValues.DIAMONDS;
  }

  toJSON() {
    return this.name;
  }
}
