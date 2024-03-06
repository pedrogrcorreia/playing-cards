import { Card } from '../cards/Card';

export class Stack {
  protected _cards: Card[] = [];
  public get cards(): Card[] {
    return this._cards;
  }

  public addCard(card: Card): number {
    return this.cards.push(card);
  }

  public removeCard(): Card | undefined {
    return this.cards.pop();
  }

  public removeCardFromBegin(): Card | undefined {
    return this.cards.shift();
  }
}
