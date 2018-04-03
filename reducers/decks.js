import { SAVE_DECK } from '../actions/decks'

const defaultDecksState = [
  {
    id: 1,
    title: 'Spanish vocabulary',
  },
  {
    id: 2,
    title: 'French vocabulary',
  },
  {
    id: 3,
    title: 'React patterns',
  },
  {
    id: 4,
    title: 'Redux patterns',
  },
]


function decks(state = defaultDecksState, action) {
  const maxValueOfId = Math.max(...state.map(o => o.id))
  const id = maxValueOfId + 1
  switch (action.type) {
    case SAVE_DECK:
      return [...state, { id, title: action.title, questions: [] }]
    default:
      return state
  }
}

export default decks
