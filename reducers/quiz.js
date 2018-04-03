import { NEXT_QUESTION, RESET_QUIZ, SET_CORRECT_ANSWER } from '../actions/quiz'

const defaultQuizState = {
  currentCard: 0,
  numberOfCorrectAnswers: 0,
}

function quiz(state = defaultQuizState, action) {
  // console.log('reducer action', action)
  // console.log('reducer state', state)
  switch (action.type) {
    case NEXT_QUESTION:
      return {
        ...state,
        currentCard: state.currentCard + 1,
      }
    case RESET_QUIZ:
      return {
        ...state,
        currentCard: 0,
        numberOfCorrectAnswers: 0,
      }
    case SET_CORRECT_ANSWER:
      return {
        ...state,
        numberOfCorrectAnswers: state.numberOfCorrectAnswers + 1,
      }
    default:
      return state
  }
}

export default quiz
