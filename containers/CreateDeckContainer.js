import React from 'react'
import { connect } from 'react-redux'
import CreateStack from '../components/CreateStack'
import { saveDeck } from '../actions/decks'
import guid from '../utils/helpers'

const CreateStackContainer = props => (
  <CreateStack saveDeck={props.saveDeck} />
)

function mapDispatchToProps(dispatch) {
  const id = guid()
  return ({
    saveDeck: (id, title) => { dispatch(saveDeck(id, title)) },
  })
}

export default connect(null, mapDispatchToProps)(CreateStackContainer)
