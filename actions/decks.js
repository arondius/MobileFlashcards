export const SAVE_DECK = 'SAVE_DECK'
export function saveDeck(title) {
  return {
    type: SAVE_DECK,
    title,
  }
}
