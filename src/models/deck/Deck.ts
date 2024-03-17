import { Card } from '../cards/Card';
import { FaceValues } from '../cards/face/FaceValues';
import { SuitValues } from '../cards/suits/SuitValues';
import { DeckType } from './DeckType';
import { CardsCollection } from './CardsCollection';

export class Deck extends CardsCollection {
  constructor({
    deckType = DeckType.STANDARD,
    numberOfDecks = 1,
    customCards = [],
  }: { deckType?: DeckType; numberOfDecks?: number; customCards?: Card[] } = {}) {
    super();
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

    this._cards = this._cards.concat(...Array(numberOfDecks - 1).fill(this._cards));
  }

  private createSuitedCards() {
    const suits = Object.values(SuitValues).filter((key) => isNaN(Number(key)));
    const faceValues = Object.values(FaceValues).filter((key) => isNaN(Number(key)));

    for (let i = 0; i < suits.length; i++) {
      for (let j = 0; j < faceValues.length; j++) {
        if (suits[i] != SuitValues.NO_SUIT && faceValues[j] != FaceValues.JOKER) {
          const card = new Card({ suit: suits[i], face: faceValues[j] });
          this._cards.push(card);
        }
      }
    }
  }

  private createJokers() {
    return Array.from(Array(2), () => new Card({ suit: SuitValues.NO_SUIT, face: FaceValues.JOKER }));
  }

  private removeCardsForFortyDeck() {
    const valuesToRemove = [FaceValues.EIGHT.name, FaceValues.NINE.name, FaceValues.TEN.name];
    this._cards = this.cards.filter((card) => !valuesToRemove.includes(card.face.name));
  }

  static availableDecks() {
    return Object.values(DeckType);
  }

  toJSON() {
    return {
      cards: this.cards,
      remainingCards: this.remainingCards,
      isEmpty: this.isEmpty,
    };
  }
}
