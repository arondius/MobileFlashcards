import { combineReducers } from 'redux'
import deckList from './deckList'
import deck from './deck'

const rootReducer = combineReducers({deckList, deck})

export default rootReducer