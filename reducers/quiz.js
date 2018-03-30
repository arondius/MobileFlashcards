import { NEXT_QUESTION } from '../actions/quiz'

const defaultQuizState = {
  currentQuestion: 0
}

function quiz(state = defaultQuizState, action) {
  console.log('reducer action', action)
  switch(action.type) {
    case NEXT_QUESTION:
      return {
        ...state,
        currentQuestion: state.currentQuestion + 1
      }
    default:
      return state
  }
}

export default quiz