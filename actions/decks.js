export const SAVE_DECK = 'SAVE_DECK'
export function saveDeck(id, title) {
  return {
    type: SAVE_DECK,
    id,
    title,
  }
}
