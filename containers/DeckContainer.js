import React from 'react'
import { View } from 'react-native'
import { withNavigation } from 'react-navigation'

import Deck from '../components/Deck'
import globalStyles from '../utils/styles'

const DeckContainer = (props) => {
  console.log('DeckContainer props', props)
  // console.log('DeckContainer props.navigation.state.params', props.navigation.state.params)
  const { deck, questions } = props.navigation.state.params
  return (
    <View style={globalStyles.container}>
      <Deck deck={deck} questions={questions} />
    </View>
  )
}

export default withNavigation(DeckContainer)
