export const NEXT_QUESTION = 'NEXT_QUESTION'
export function nextQuestion() {
  console.log('Next question action called')
  return {
    type: NEXT_QUESTION
  }
}