export const NEXT_QUESTION = 'NEXT_QUESTION'
export function nextCard() {
  // console.log('Next question action called')
  return {
    type: NEXT_QUESTION,
  }
}

export const RESET_QUIZ = 'RESET_QUIZ'
export function resetQuiz() {
  // console.log('ResetQuiz action called')
  return {
    type: RESET_QUIZ,
  }
}

export const SET_CORRECT_ANSWER = 'SET_CORRECT_ANSWER'
export function setCorrectAnswer() {
  // console.log('setCorrectAnswer action called')
  return {
    type: SET_CORRECT_ANSWER,
  }
}

export function markCard(type) {
  return function (dispatch) {
    if (type === 'correct') {
      dispatch(setCorrectAnswer())
      dispatch(nextCard())
    }
    if (type === 'incorrect') {
      dispatch(nextCard())
    }
  }
}
