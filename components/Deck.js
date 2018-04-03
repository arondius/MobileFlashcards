import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { withNavigation } from 'react-navigation'
import globalStyles from '../utils/styles'

const Deck = ({ deck, cards, navigation }) => {
  const { params } = navigation.state
  const { title } = deck
  const numberOfCards = cards.length
  return (
    <View style={globalStyles.viewChild}>
      <Text>{title}</Text>
      <Text>{numberOfCards} cards in this deck</Text>
      {numberOfCards > 0 ?
        <TouchableOpacity
          onPress={() => (navigation.navigate('QuizContainer', params))}
          style={globalStyles.btn}
        >
          <Text>Start {title} quiz</Text>
        </TouchableOpacity> : null}
      <TouchableOpacity
        onPress={() => (navigation.navigate('AddCardContainer', params))}
        style={globalStyles.btn}
      >
        <Text>Add a new card to {title}</Text>
      </TouchableOpacity>
    </View>
  )
}

export default withNavigation(Deck)
