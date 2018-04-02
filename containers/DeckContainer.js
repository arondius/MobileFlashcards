import React from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'

import Deck from '../components/Deck'
import globalStyles from '../utils/styles'

const DeckContainer = ({ navigation, questions }) => {
  const { deck } = navigation.state.params
  return (
    <View style={globalStyles.container}>
      <Deck deck={deck} questions={questions} navigation={navigation} />
    </View>
  )
}

function mapStateToProps(state, ownProps) {
  const deckId = ownProps.navigation.state.params.deck.id
  return {
    questions: state.questions.filter(question => question.parentId === deckId),
  }
}

export default connect(mapStateToProps)(DeckContainer)
