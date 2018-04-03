export const GET_DECKS = 'GET_DECKS'
export function getDecks() {
  return {
    type: GET_DECKS,
  }
}

export const SAVE_DECK = 'SAVE_DECK'
export function saveDeck(id, title) {
  return {
    type: SAVE_DECK,
    id,
    title,
  }
}
