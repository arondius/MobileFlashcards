import React, {Component} from 'react'
import { View } from 'react-native'
import DeckList from '../components/DeckList'
import {connect} from 'react-redux'
import globalStyles from '../utils/styles'
import { getCardsInDeck } from '../actions/cards'

class DeckListContainer extends Component {
  render() {
    return (
      <View style={globalStyles.container}>
        <DeckList deckList={this.props.deckList} />
      </View>
    )
  }
}

function mapStateToProps(state) {
  return {
    deckList: state.deckList
  }
}

export default connect(mapStateToProps)(DeckListContainer)