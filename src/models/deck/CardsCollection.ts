import { shuffleCards } from '../../utils/Utils';
import { Card } from '../cards/Card';

export class CardsCollection {
  protected _cards: Card[] = [];
  public get cards(): Card[] {
    return this._cards;
  }

  public addCard(...card: Card[]): number {
    return this._cards.push(...card);
  }

  public addCardToBegin(...card: Card[]): number {
    return this._cards.unshift(...card);
  }

  public removeCard(): Card | undefined {
    return this._cards.pop();
  }

  public removeCardFromBegin(): Card | undefined {
    return this._cards.shift();
  }

  public shuffle() {
    shuffleCards(this._cards);
  }

  private _isEmpty(): boolean {
    return this._cards.length == 0;
  }

  public get isEmpty(): boolean {
    return this._isEmpty();
  }

  private _remainingCards(): number {
    return this._cards.length;
  }

  public get remainingCards(): number {
    return this._remainingCards();
  }
}
