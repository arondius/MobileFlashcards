import { combineReducers } from 'redux'
import deckList from './deckList'
import questions from './questions'
import quiz from './quiz'

const rootReducer = combineReducers({deckList, questions, quiz})

export default rootReducer