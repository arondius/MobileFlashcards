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
      return {
        ...state,
        items: merge(...state.items, action.json),
        isFetching: false,
      }
    case RECEIVE_SAVE_CARD:
      return {
        ...state,
        items: {
          ...state.items,
          [action.json.id]: {
            id: action.json.id,
            parentId: action.json.parentId,
            question: action.json.question,
            answer: action.json.answer,
          },
        },
        isFetching: false,
      }
    default:
      return state
  }
}

export default cards
