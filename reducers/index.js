import { combineReducers } from 'redux'
import decks from './decks'
import cards from './cards'
import quiz from './quiz'

const rootReducer = combineReducers({ decks, cards, quiz })

export default rootReducer
