import { SAVE_DECK } from '../actions/deckList'

const defaultDeckListState = [
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

function deckList(state = defaultDeckListState, action) {
  const maxValueOfId = Math.max(...state.map(o => o.id))
  const id = maxValueOfId + 1
  switch (action.type) {
    case SAVE_DECK:
      return [...state, { id, title: action.title, questions: [] }]
    default:
      return state
  }
}

export default deckList
