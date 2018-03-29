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
        <DeckListItem deck={this.props.deck} questions={this.props.questions}/>
      </View>
    )
  }
}

function mapStateToProps(state, ownProps) {
  console.log('DLC state', state)
  return {
    questions: state.questions.filter((question) => question.parentId === ownProps.deck.id)
  }
} 

export default connect(mapStateToProps, null)(DeckListItemContainer)