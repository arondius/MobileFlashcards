export const GET_CARDS_IN_DECK = 'GET_CARDS_IN_DECK'
export function getCardsInDeck(deckId) {
  return {
    type: GET_CARDS_IN_DECK,
    deckId
  }
}