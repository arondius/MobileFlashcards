import React, {Component} from 'react'
import { View } from 'react-native'
import DeckListItem from '../components/DeckListItem'
import {connect} from 'react-redux'
import globalStyles from '../utils/styles'
import { getCardsInDeck } from '../actions/cards'

class DeckListItemContainer extends Component {
  render() {
    return (
      <View style={globalStyles.container}>
        <DeckListItem deck={this.props.deck} cards={this.props.cards}/>
      </View>
    )
  }
}

function mapStateToProps(state, ownProps) {
  return {
    cards: state.cards.filter((card) => card.parentId === ownProps.deck.id)
  }
} 

export default connect(mapStateToProps, null)(DeckListItemContainer)