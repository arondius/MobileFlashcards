import React, {Component} from 'react'
import DeckList from '../components/DeckList'
import {connect} from 'react-redux'

class DeckListContainer extends Component {
  render() {
    return (
      // <DeckList deckList={this.props.deckList}/>
    )
  }
}

function mapStateToProps(state) {
  return {
    // deckList: console.log('state.deckList', state.deckList)
  }
}
export default connect(mapStateToProps)(DeckListContainer)