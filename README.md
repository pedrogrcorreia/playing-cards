# ts-playing-cards

A simple package that enables the creation of playing <br>cards and decks, to help you create card games!

## Install

`npm install ts-playing-cards@latest`

## Features

### - Card

- Four suits + 1 no-suit
  - `SuitValues.CLUBS`, `SuitValues.SPADES`, `SuitValues.HEARTS` and `SuitValues.DIAMONDS`
  - Joker have `SuitValues.NO_SUIT`
- Create cards
  - Default constructor 'new Card()` returns ACE of CLUBS.
  - Optional object constructor <br>
  ```
  new Card(
    {
      suit: SuitValues,
      faceValue: FaceValues,
    }
  )
  ```
- Compare color cards
  - `card.suit.isRed` or `card.suit.isBlack`
- Compare face values
  - `card.compare(Card)` ⇒ returns `Rank.LOWER, Rank.EQUAL, Rank.HIGHER`

### - Deck and Pile

- Three deck types
  - `DeckType.STANDARD` (52 cards), `DeckType.STANDARD_JOKERS` (54 cards) and `DeckType.FORTY` (40 cards).
- Create decks
  - Default constructor `new Deck()` returns a standard 52 cards deck
  - Optional object constructor <br>
  ```
  new Deck(
    {
      deckType: DeckType,
      numberOfDecks: number,
      customCards: Card[],
    }
  )
  ```
  - `deckType` determines deck type
  - `numberOfDecks` multiplies the number of cards in a deck by the specified number of decks amount
  - `customCards` creates a deck with custom cards
  - Full Deck of 56 cards
    - `new FullDeck()`
  - Deck without Joker cards (52 cards)
    - `new FiftyTwoDeck()`
  - Deck without Joker and 8-10 cards (40 cards)
    - `new FortyDeck()`
- Shuffle cards
  - `deck.shuffle()`
- Remove cards from end and beginning of deck
  - `deck.removeCard()` or `deck.removeCardFromBegin()`
- Add cards to deck
  - `deck.addCard(Card)`
- Access to stack of removed cards
  - `deck.stack`
- Remove cards from stack
  - `deck.stack.removeCard()` or `deck.stack.removeCardFromBegin()`
- Check remaining cards
  - `deck.remainingCards()`
- Check empty decks
  - `deck.isEmpty()`
- `Pile` has the same methods as `Deck`, but it's created without cards.

# Like the project?

### Contribute 🤗

<p align="center">
<br>
<a href='https://ko-fi.com/E1E757D6Z' target='_blank'><img height='36' style='border:0px;height:36px;' src='https://cdn.ko-fi.com/cdn/kofi4.png?v=2' border='0' alt='Buy Me a Coffee at ko-fi.com' /></a>
</p>
<br>

#### Whole project is unit tested 100% using jest
