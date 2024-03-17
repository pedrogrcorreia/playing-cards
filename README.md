# ts-playing-cards

A simple package that enables the creation of playing <br>cards and decks, to help you create card games!

# Features
# Features

## - Cards
## - Cards

- Four suits + 1 no-suit
  - `SuitValues.CLUBS`
  - `SuitValues.SPADES`
  - `SuitValues.HEARTS`
  - `SuitValues.DIAMONDS`
  - Joker have `SuitValues.NO_SUIT` (`noSuit`)
  - Use `Suit.availableSuits()` to get `SuitValues` string values
- Card faces
  - All face cards are implemented through `FaceValues`
  - Use `FaceValues.availableFaces()` to get `FaceValues` string values
- Create cards
  - Default constructor `new Card()` returns `ace` of `clubs`.
  - Optional object constructor with `SuitValues`<br>
  ```
  new Card(
    {
      suit: SuitValues,
      face: FaceValues,
    }
  )
  ```
  - Optional object constructor with `string`<br>
  ```
  new Card(
    {
      suit: 'hearts',
      face: 'six',
      face: FaceValues,
    }
  )
  ```
  - Optional object constructor with `string`<br>
  ```
  new Card(
    {
      suit: 'hearts',
      face: 'six',
    }
  )
  ```
- Compare color cards
  - `card.suit.isRed` or `card.suit.isBlack`
- Compare face values
  - `card.compare(Card)` ⇒ returns `Rank.LOWER, Rank.EQUAL, Rank.HIGHER`

## - Deck and Pile
## - Deck and Pile

- Three deck types
  - `DeckType.STANDARD` (52 cards)
  - `DeckType.STANDARD_JOKERS` (54 cards) and
  - `DeckType.FORTY` (40 cards).
  - Use `Deck.availableDecks()` to get `DeckType` string values to create new decks
- Create decks
  - Default constructor `new Deck()` returns a standard 52 cards deck
  - Optional object constructor with `DeckType` <br>
  ```
  new Deck(
    {
      deckType: DeckType,
      numberOfDecks: number,
      customCards: Card[],
    }
  )
  ```
  - Optional object constructor with `string` <br>
  ```
  new Deck(
    {
      deckType: 'forty',
      numberOfDecks: number,
      customCards: Card[],
    }
  )
  ```
  - `deckType` determines deck type
  - `numberOfDecks` multiplies the number of cards in a deck by the specified number of decks amount
  - `customCards` creates a deck with custom cards
- Shuffle cards
  - `deck.shuffle()`
- Remove cards from end and beginning of deck
  - `deck.removeCard()` or `deck.removeCardFromBegin()`
- Add cards to deck
  - `deck.addCard(Card)`
- Check remaining cards
  - `deck.remainingCards`
- Check empty decks
  - `deck.isEmpty`
- `Pile` has the same methods as `Deck`, but it's created without cards.

# Like the project?

### Contribute 🤗

<p align="center">
<br>
<a href='https://ko-fi.com/E1E757D6Z' target='_blank'><img height='36' style='border:0px;height:36px;' src='https://cdn.ko-fi.com/cdn/kofi4.png?v=2' border='0' alt='Buy Me a Coffee at ko-fi.com' /></a>
</p>
<br>

#### Whole project is unit tested 100% using jest
