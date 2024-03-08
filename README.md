# ts-playing-cards

A simple package that enables the creation of playing <br>cards and decks, to help you create card games!

## Install

`npm install ts-playing-cards@latest`

## Features

### - Card

- Create cards based on `Suit` and `FaceValue`
  - `new Card(new Suit(SuitValues), new FaceValue(FaceValues))`
- Compare color cards
  - `card.suit.isRed` or `card.suit.isBlack`
- Compare face values
  - `card.compare(Card)` ⇒ returns `Rank.LOWER, Rank.EQUAL, Rank.HIGHER`

### - Deck

- Create deck of different types
  - Full Deck of 56 cards
    - `new FullDeck()`
  - Deck without Joker cards (52 cards)
    - `new FiftyTwoDeck()`
  - Deck without Joker and 8-10 cards (40 cards)
    - `new FortyDeck()`
- Multiple size decks
  - Create `n` decks of different types based on `DeckType`
    - `new MultipleDeck(n, DeckType)`
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

# Like the project?

### Contribute 🤗

<p align="center">
<br>
<a href='https://ko-fi.com/E1E757D6Z' target='_blank'><img height='36' style='border:0px;height:36px;' src='https://cdn.ko-fi.com/cdn/kofi4.png?v=2' border='0' alt='Buy Me a Coffee at ko-fi.com' /></a>
</p>
<br>

#### Whole project is unit tested 100% using jest
