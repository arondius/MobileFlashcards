function deckList(state = {...state,deckList: {}}, action) {
  return {
    ...state,
    deckList: {
      1: {
        title: 'Spanish vocabulary',
        questions: [
          1,2,3,4,5,6,7,8,9
        ]
      },
      2: {
        title: 'French vocabulary',
        questions: [
          1,2,3,4,5,6,7,8,9
        ]
      },
      3: {
        title: 'React patterns',
        questions: [
          1,2,3,4,5,6,7,8,9
        ]
      },
      4: {
        title: 'Redux patterns',
        questions: [
          1,2,3,4,5,6,7,8,9
        ]
      },
    }
  };
}

export default deckList