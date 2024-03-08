# Playing Cards

A simple module to create card games using TypeScript!

## Install

`npm install ts-playing-cards`

## Features

- Card

  - [x] Create cards based on `Suit` and `FaceValue`
    - `new Card(new Suit(SuitValues), new FaceValue(FaceValues))`
  - [x] Compare color cards
    - `card.suit.isRed || card.suit.isBlack`
  - [x] Compare face values
    - `card.compare(Card)` ⇒ returns `Rank.LOWER, Rank.EQUAL, Rank.HIGHER`

- Deck

  - [x] Create deck of different types
    - [x] Full Deck of 56 cards
      - `new FullDeck()`
    - [x] Deck without Joker cards (52 cards)
      - `new FiftyTwoDeck()`
    - [x] Deck without Joker and 8-10 cards (40 cards)
      - `new FortyDeck()`
  - [x] Multiple size decks
    - [x] Create `n` decks of different types based on `DeckType`
      - `new MultipleDeck(n, DeckType)`
  - [x] Shuffle cards
  - [x] Remove cards from end and beginning of deck
  - [x] Add cards to deck
  - [x] Access to stack of removed cards
  - [x] Remove cards from stack
  - [x] Check remaining cards
  - [x] Check empty decks

# Like the project?

### Contribute 🤗

<p align="center">
<br>
<a href='https://ko-fi.com/E1E757D6Z' target='_blank'><img height='36' style='border:0px;height:36px;' src='https://cdn.ko-fi.com/cdn/kofi4.png?v=2' border='0' alt='Buy Me a Coffee at ko-fi.com' /></a>
</p>
<br>

#### Whole project is unit tested 100% using jest
