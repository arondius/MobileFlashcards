import { ADD_CARD } from '../actions/cards'

const defaultCardsState = [
  {
  	id: 1,
  	parentId: '5808a1-53d-695-8f4-c70b3a347',
  	question: '¿Cómo estás?',
  	answer: 'How are you? (informal)'
  }, {
  	id: 2,
  	parentId: '5808a1-53d-695-8f4-c70b3a347',
  	question: '¿Y tú?',
  	answer: 'And you? (informal)'
  }, {
  	id: 3,
  	parentId: '5808a1-53d-695-8f4-c70b3a347',
  	question: '¿Y usted?',
  	answer: 'And you? (formal)'
  }, {
  	id: 4,
  	parentId: '5808a1-53d-695-8f4-c70b3a347',
  	question: 'Bien.',
  	answer: 'Fine.'
  }, {
  	id: 5,
  	parentId: '5808a1-53d-695-8f4-c70b3a347',
  	question: 'Muy bien.',
  	answer: 'Very well.'
  }, {
  	id: 6,
  	parentId: '5808a1-53d-695-8f4-c70b3a347',
  	question: 'Gracias.',
  	answer: 'Thanks.'
  }, {
  	id: 7,
  	parentId: '5808a1-53d-695-8f4-c70b3a347',
  	question: 'Regular.',
  	answer: 'So-so.'
  },
]

function cards(state = defaultCardsState, action) {
  const maxValueOfId = Math.max(...state.map(o => o.id))
  switch (action.type) {
    case ADD_CARD:
      return [
        ...state,
        {
          id: maxValueOfId + 1,
          parentId: action.parentId,
          question: action.question,
          answer: action.answer,
        },
      ]
    default:
      return [...state]
  }
}

export default cards
