import { Card } from './models/cards/Card';
import { FaceValues } from './models/cards/face/FaceValues';
import { FaceValue } from './models/cards/face/FaceValue';
import { SuitValues } from './models/cards/suits/SuitValues';
import { Suit } from './models/cards/suits/Suits';
import { FiftyTwoDeck, FortyDeck } from './models/deck/Deck';

let fiftyTwoDeck = new FiftyTwoDeck();
let fortyDeck = new FortyDeck();

console.log(fiftyTwoDeck.cards);
console.log('', fortyDeck.toString());
fortyDeck.shuffle();
console.log('', fortyDeck.toString());

const firstCard = fortyDeck.removeFromBegin();
const lastCard = fortyDeck.removeFromEnd();

console.log('first card', firstCard?.toString());
console.log('last card', lastCard?.toString());
console.log('', fortyDeck.toString());
// console.log(fiftyTwoDeck.cards.length);
// console.log(fortyDeck.cards.length);

// console.log(`${fortyDeck.cards[0].toString()}`);
// console.log(FaceValues[FaceValues.ACE]);
// const valuesToRemove = [FaceValues.EIGHT, FaceValues.NINE];
// console.log(valuesToRemove.includes(6));
