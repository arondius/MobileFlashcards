import React from 'react'
import { connect } from 'react-redux'
import CreateStack from '../components/CreateStack'
import { saveDeck } from '../actions/deckList'

const CreateStackContainer = props => (
  <CreateStack saveDeck={props.saveDeck} />
)

function mapDispatchToProps(dispatch) {
  return ({
    saveDeck: (title) => { dispatch(saveDeck(title)) },
  })
}

export default connect(null, mapDispatchToProps)(CreateStackContainer)
