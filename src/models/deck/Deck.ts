import { Card } from '../cards/Card';
import { FaceValues } from '../cards/face/FaceValues';
import { FaceValue } from '../cards/face/FaceValue';
import { SuitValues } from '../cards/suits/SuitValues';
import { Suit } from '../cards/suits/Suits';
import { shuffleCards } from '../../utils/Utils';
import { Stack } from './Stack';

export abstract class Deck {
  protected _cards: Card[] = [];
  public get cards(): Card[] {
    return this._cards;
  }

  protected _stack: Stack = new Stack();
  public get stack(): Stack {
    return this._stack;
  }

  constructor() {
    const suits = Object.values(SuitValues).filter((key) => isNaN(Number(key)));
    const faceValues = Object.values(FaceValues).filter((key) => isNaN(Number(key)));

    for (let i = 0; i < suits.length; i++) {
      for (let j = 0; j < faceValues.length; j++) {
        const card = new Card(
          new Suit(suits.indexOf(suits[i]), suits[i].toString()),
          new FaceValue(faceValues.indexOf(faceValues[j]), faceValues[j].toString())
        );
        this.cards.push(card);
      }
    }
  }

  public toString = (): string => {
    return this.cards.join('\n');
  };

  public shuffle() {
    shuffleCards(this.cards);
  }

  public removeCard(): Card | undefined {
    let card = this.cards.pop();
    if (card) {
      this._stack.addCard(card);
    }
    return card;
  }

  public removeCardFromBegin(): Card | undefined {
    let card = this.cards.shift();
    if (card) {
      this._stack.addCard(card);
    }
    return card;
  }

  public addCard(card: Card): number {
    return this.cards.push(card);
  }

  public addCardToBegin(card: Card): number {
    return this.cards.unshift(card);
  }
}

export class FullDeck extends Deck {
  constructor() {
    super();
  }
}

export class FiftyTwoDeck extends Deck {
  constructor() {
    super();
    this._cards = this.cards.filter((card) => !(card.faceValue.value == FaceValues.JOKER));
  }
}

export class FortyDeck extends FiftyTwoDeck {
  constructor() {
    super();
    const valuesToRemove = [FaceValues.EIGHT, FaceValues.NINE, FaceValues.TEN];
    this._cards = this.cards.filter((card) => !valuesToRemove.includes(card.faceValue.value));
  }
}
