import React, {Component} from 'react'
import { View } from 'react-native'
import Deck from '../components/Deck'
import {connect} from 'react-redux'
import globalStyles from '../utils/styles'
import { getCardsInDeck } from '../actions/cards'

class DeckContainer extends Component {
  render() {
    const { deck, questions} = this.props.navigation.state.params 
    console.log('Deckcontainer props', this.props)
    return (
      <View style={globalStyles.container}>
        <Deck deck={deck} questions={questions} navigation={this.props.navigation} />
      </View>
    )
  }
}

// function mapStateToProps(state, ownProps) {
//   // console.log('DLContainer DL state', state.deckList)
//   return {
//     deckList: state.deckList.filter((deck) => deck.id === ownProps.navigate.params.deck.id)
//   }
// }
// 
// function mapDispatchToProps(dispatch, ownProps) {
//   return {
//     getCardsInDeck: dispatch(getCardsInDeck(this.props))
//   }
// }

export default connect(null, null)(DeckContainer)