import { Card } from './models/cards/Card';
import { FaceValue } from './models/cards/face/FaceValue';
import { FaceValues } from './models/cards/face/FaceValues';
import { SuitValues } from './models/cards/suits/SuitValues';
import { Suit } from './models/cards/suits/Suits';
import { Deck } from './models/deck/Deck';
import { DeckType } from './models/deck/DeckType';

export { Deck } from './models/deck/Deck';
// export { MultipleDeck } from './models/deck/MultipleDeck';
export { DeckType } from './models/deck/DeckType';
export { Card } from './models/cards/Card';
export { SuitValues } from './models/cards/suits/SuitValues';
export { Suit } from './models/cards/suits/Suits';
export { FaceValue } from './models/cards/face/FaceValue';
export { FaceValues } from './models/cards/face/FaceValues';
export { Rank } from './models/cards/Rank';

const standardDeck = new Deck();
console.log(standardDeck.remainingCards());

const standardDeckJokers = new Deck({ deckType: DeckType.STANDARD_JOKERS });
console.log(standardDeckJokers.remainingCards());

const fortyDeck = new Deck({ deckType: DeckType.FORTY });
console.log(fortyDeck.remainingCards());

const multipleDeck = new Deck({ numberOfDecks: 3 });
console.log(multipleDeck.remainingCards());

const customDeck = new Deck({
  customCards: Array(3).fill(new Card(new Suit(SuitValues.CLUBS), new FaceValue(FaceValues.ACE))),
});
console.log(customDeck.remainingCards());
console.log(customDeck.toString());
