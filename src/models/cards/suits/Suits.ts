import { ISuits } from './ISuits';
import { SuitValues } from './SuitValues';

export class Suit implements ISuits {
  isBlack = false;
  isRed = false;
  private _suitValue: number = -1;
  private _suitName: string = '';
  public value: number = this._suitValue;
  public name: string = this._suitName;

  constructor(suit: SuitValues) {
    this.isBlack = suit == SuitValues.CLUBS || suit == SuitValues.SPADES;
    this.isRed = suit == SuitValues.HEARTS || suit == SuitValues.DIAMONDS;
    this.name = this._suitName = SuitValues[suit];
    this.value = this._suitValue = suit;
  }
}
