import React from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'

import Deck from '../components/Deck'
import globalStyles from '../utils/styles'

const DeckContainer = ({ navigation, cards, newlyCreatedDeck }) => {
  const deck = navigation.state.params.deck ? navigation.state.params.deck : newlyCreatedDeck
  return (
    <View style={globalStyles.container}>
      <Deck deck={deck} cards={cards} navigation={navigation} />
    </View>
  )
}

function mapStateToProps(state, ownProps) {
  // Check 
  function getCards() {
    if(ownProps.navigation.state.params.deck) {
      state.cards.filter(question =>
        question.parentId === ownProps.navigation.state.params.deck.id)
    }
    return null
  }
  
  function newlyCreatedDeck() {
    if(ownProps.navigation.state.params.deckId) {
      const { deckId } = ownProps.navigation.state.params
      return Object.values(state.decks.items).filter(i => i.id === deckId)
    }
    return null
  }

  return {
    cards: getCards(),
    newlyCreatedDeck: newlyCreatedDeck(),
  }
}

export default connect(mapStateToProps)(DeckContainer)
