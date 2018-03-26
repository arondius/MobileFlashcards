defaultDeckState = [
  {
  	id: 1,
  	// parentId: 1,
  	question: '¿Cómo estás?',
  	answer: 'How are you? (informal)'
  }, {
  	id: 2,
  	// parentId: 1,
  	question: '¿Y tú?',
  	answer: 'And you? (informal)'
  }, {
  	id: 3,
  	// parentId: 1,
  	question: '¿Y usted?',
  	answer: 'And you? (formal)'
  }, {
  	id: 4,
  	// parentId: 1,
  	question: 'Bien.',
  	answer: 'Fine.'
  }, {
  	id: 5,
  	// parentId: 1,
  	question: 'Muy bien.',
  	answer: 'Very well.'
  }, {
  	id: 6,
  	// parentId: 1,
  	question: 'Gracias.',
  	answer: 'Thanks.'
  }, {
  	id: 7,
  	// parentId: 1,
  	question: 'Regular.',
  	answer: 'So-so.'
  },
]

function deck(state = defaultDeckState, action) {
  return [
    ...state
  ]
}

export default deck