import { Deck, FiftyTwoDeck, FortyDeck, FullDeck } from './Deck';
import { DeckType } from './DeckType';

export class MultipleDeck {
  protected _decks: Deck[] = [];
  public get decks(): Deck[] {
    return this._decks;
  }

  constructor(numberOfDecks: number, deckType: DeckType) {
    switch (deckType) {
      case DeckType.FULL:
        this._decks = Array.from(Array(numberOfDecks), () => new FullDeck());
        break;
      case DeckType.FIFTY_TWO:
        this._decks = Array.from(Array(numberOfDecks), () => new FiftyTwoDeck());
        break;
      case DeckType.FORTY:
        this._decks = Array.from(Array(numberOfDecks), () => new FortyDeck());
        break;
    }
  }
}
