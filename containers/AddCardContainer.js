import React from 'react'
import { connect } from 'react-redux'
import AddCard from '../components/AddCard'
import { addCard } from '../actions/cards'

const AddCardContainer = props => (
  <AddCard addCard={props.addCard} />
)

function mapDispatchToProps(dispatch) {
  return ({
    addCard: (deckId, question, answer) => { dispatch(addCard(deckId, question, answer)) },
  })
}

export default connect(null, mapDispatchToProps)(AddCardContainer)
