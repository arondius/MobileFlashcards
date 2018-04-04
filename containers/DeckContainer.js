import React from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'

import Deck from '../components/Deck'
import globalStyles from '../utils/styles'
import { getCards } from '../actions/cards'

class DeckContainer extends React.Component {

  render() {
    const { cards, navigation } = this.props
    const { deck } = navigation.state.params
    return (
      <View style={globalStyles.container}>
        <Deck deck={deck} cards={cards} navigation={navigation} getCards={getCards} />
      </View>
    )
  }
}

function mapStateToProps(state, ownProps) {
  const deckId = ownProps.navigation.state.params.deck.id
  
  return {
    cards: state.cards.items ?
      Object.values(state.cards.items).filter(question => {
        return (question.parentId === deckId)
      }) :
      null,
  }
}

function mapDispatchToProps(dispatch) {
  return ({
    getCards: () => { dispatch(getCards()) },
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(DeckContainer)
