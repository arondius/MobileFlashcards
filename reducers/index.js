import { combineReducers } from 'redux'
import deckList from './deckList'
import questions from './questions'

const rootReducer = combineReducers({deckList, questions})

export default rootReducer