import merge from 'lodash.merge'
import {
  REQUEST_RECEIVE_CARDS,
  RECEIVE_CARDS,
  REQUEST_SAVE_CARD,
  RECEIVE_SAVE_CARD,
} from '../actions/cards'

const defaultCardsState = {
  items: {},
  isFetching: false,
}

function cards(state = defaultCardsState, action) {
  switch (action.type) {
    case REQUEST_RECEIVE_CARDS:
    case REQUEST_SAVE_CARD:
      return {
        ...state,
        isFetching: true,
      }
    case RECEIVE_CARDS:
    case RECEIVE_SAVE_CARD:
      return {
        ...state,
        items: merge(...state.items, action.json),
        isFetching: false,
      }
    default:
      return [...state]
  }
}

export default cards
