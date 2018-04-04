import merge from 'lodash.merge'
import { RECEIVE_SAVE_DECK, REQUEST_SAVE_DECK, REQUEST_RECEIVE_DECKS, RECEIVE_DECKS } from '../actions/decks'

const defaultDecksState = {
  items: {},
  isFetching: false,
}


function decks(state = defaultDecksState, action) {
  switch (action.type) {
    case REQUEST_RECEIVE_DECKS:
    case REQUEST_SAVE_DECK:
      return {
        ...state,
        isFetching: true,
      }
    case RECEIVE_DECKS:
      return {
        ...state,
        items: merge(...state.items, action.json),
        isFetching: false,
      }
    case RECEIVE_SAVE_DECK:
      return {
        ...state,
        items: {
          ...state.items,
          [action.json.id]: {
            id: action.json.id,
            title: action.json.title,
          },
        },
        isFetching: false,
      }
    default:
      return state
  }
}

export default decks
