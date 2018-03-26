defaultDeckListState = [
  {
    id: 1,
    title: 'Spanish vocabulary',
    questions: [
      1,2,3,4,5,6,7,8,9
    ]
  },
  {
    id: 2,
    title: 'French vocabulary',
    questions: [
      10,11,12,13,14,15,16
    ]
  },
  {
    id: 3,
    title: 'React patterns',
    questions: [
      16,17,18,19
    ]
  },
  {
    id: 4,
    title: 'Redux patterns',
    questions: [
      20,21,22,23,24,25,26,27
    ]
  },
]

function deckList(state = defaultDeckListState, action) {
  return [
    ...state
  ]
}

export default deckList