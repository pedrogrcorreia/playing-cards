import { Card } from '../cards/Card';
import { FaceValues } from '../cards/face/FaceValues';
import { FaceValue } from '../cards/face/FaceValue';
import { SuitValues } from '../cards/suits/SuitValues';
import { Suit } from '../cards/suits/Suits';
import { shuffleCards } from '../../utils/Utils';
import { Stack } from './Stack';
import { DeckType } from './DeckType';

export class Deck {
  protected _cards: Card[] = [];
  public get cards(): Card[] {
    return this._cards;
  }

  protected _stack: Stack = new Stack();
  public get stack(): Stack {
    return this._stack;
  }

  constructor({
    deckType = DeckType.STANDARD,
    numberOfDecks: numberOfDecks,
    customCards: customCards = [],
  }: { deckType?: DeckType; numberOfDecks?: number; customCards?: Card[] } = {}) {
    if (customCards.length > 0) {
      this._cards.push(...customCards);
    } else {
      this.createSuitedCards();
      switch (deckType) {
        case DeckType.STANDARD_JOKERS:
          this._cards.push(...this.createJokers());
          break;
        case DeckType.FORTY:
          this.removeCardsForFortyDeck();
          break;
      }
    }

    if (numberOfDecks != null) {
      this._cards = this._cards.concat(...Array(numberOfDecks - 1).fill(this._cards));
    }
  }

  private createSuitedCards() {
    const suits = Object.values(SuitValues).filter((key) => isNaN(Number(key)));
    const faceValues = Object.values(FaceValues).filter((key) => isNaN(Number(key)));

    for (let i = 0; i < suits.length; i++) {
      for (let j = 0; j < faceValues.length; j++) {
        if (
          suits.indexOf(SuitValues[i]) != SuitValues.NO_SUIT &&
          faceValues.indexOf(FaceValues[j]) != FaceValues.JOKER
        ) {
          const card = new Card(
            new Suit(suits.indexOf(SuitValues[i])),
            new FaceValue(faceValues.indexOf(FaceValues[j]))
          );
          this._cards.push(card);
        }
      }
    }
  }

  private createJokers() {
    return Array.from(Array(2), () => new Card(new Suit(SuitValues.NO_SUIT), new FaceValue(FaceValues.JOKER)));
  }

  private removeCardsForFortyDeck() {
    const valuesToRemove = [FaceValues.EIGHT, FaceValues.NINE, FaceValues.TEN];
    this._cards = this._cards.filter((card) => !valuesToRemove.includes(card.faceValue.value));
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

  public isEmpty(): boolean {
    return this.cards.length == 0;
  }

  public remainingCards(): number {
    return this.cards.length;
  }
}
