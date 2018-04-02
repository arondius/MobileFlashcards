import { ADD_CARD } from '../actions/cards'

const defaultQuestionsState = [
  {
  	id: 1,
  	parentId: 1,
  	question: '¿Cómo estás?',
  	answer: 'How are you? (informal)'
  }, {
  	id: 2,
  	parentId: 1,
  	question: '¿Y tú?',
  	answer: 'And you? (informal)'
  }, {
  	id: 3,
  	parentId: 1,
  	question: '¿Y usted?',
  	answer: 'And you? (formal)'
  }, {
  	id: 4,
  	parentId: 1,
  	question: 'Bien.',
  	answer: 'Fine.'
  }, {
  	id: 5,
  	parentId: 1,
  	question: 'Muy bien.',
  	answer: 'Very well.'
  }, {
  	id: 6,
  	parentId: 1,
  	question: 'Gracias.',
  	answer: 'Thanks.'
  }, {
  	id: 7,
  	parentId: 1,
  	question: 'Regular.',
  	answer: 'So-so.'
  },
]

function questions(state = defaultQuestionsState, action) {
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

export default questions
