import React from 'react'
import { connect } from 'react-redux'
import AddCard from '../components/AddCard'
import { saveCard } from '../actions/cards'

const AddCardContainer = props => (
  <AddCard addCard={props.addCard} />
)

function mapDispatchToProps(dispatch) {
  return ({
    addCard: (id, parentId, question, answer) => { dispatch(saveCard(id, parentId, question, answer)) },
  })
}

export default connect(null, mapDispatchToProps)(AddCardContainer)
