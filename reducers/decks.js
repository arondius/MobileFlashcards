import { SAVE_DECK } from '../actions/decks'

const defaultDecksState = [
  {
    id: '5808a1-53d-695-8f4-c70b3a347',
    title: 'Spanish vocabulary',
  },
  {
    id: 'dbff53-904-198-6f4-0307c9d2',
    title: 'French vocabulary',
  },
  {
    id: '467e59-d30-791-e0-4c9f7d141',
    title: 'React patterns',
  },
  {
    id: '4c7f31-67a-834-37d-2c27dd0b8',
    title: 'Redux patterns',
  },
]


function decks(state = defaultDecksState, action) {
  switch (action.type) {
    case SAVE_DECK:
      return [...state, { id: action.id, title: action.title, questions: [] }]
    default:
      return state
  }
}

export default decks
