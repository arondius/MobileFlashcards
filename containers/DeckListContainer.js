import React, {Component} from 'react'
import { View } from 'react-native'
import DeckList from '../components/DeckList'
import {connect} from 'react-redux'
import globalStyles from '../utils/styles'
import { getDecks } from '../actions/decks'
import { getCards } from '../actions/cards'

class DeckListContainer extends Component {
  render() {
    return (
      <View style={globalStyles.container}>
        <DeckList decks={this.props.decks} getDecks={this.props.getDecks} getCards={this.props.getCards}/>
      </View>
    )
  }
}

function mapStateToProps(state) {
  return {
    decks: Object.values(state.decks.items),
  }
}

function mapDispatchToProps(dispatch) {
  return ({
    getDecks: () => { dispatch(getDecks()) },
    getCards: () => { dispatch(getCards()) },
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(DeckListContainer)