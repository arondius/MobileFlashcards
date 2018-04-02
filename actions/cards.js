export const ADD_CARD = 'ADD_CARD'
export function addCard(parentId, question, answer) {
  return {
    type: ADD_CARD,
    parentId,
    question,
    answer,
  }
}
