import React from 'react'
import {connect} from 'react-redux'

import AddCard from '../components/AddCard'

class AddCardContainer extends React.Component {
  render() {
    return(
      <AddCard />
    )
  }
}

export default connect()(AddCardContainer);