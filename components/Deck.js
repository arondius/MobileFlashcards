import React from 'react';
import globalStyles from '../utils/styles'
import { View, Text, TouchableOpacity } from 'react-native'

const Deck = ( {deck, questions, navigation} ) => {
  const { title } = deck
  numberOfQuestions = questions.length
  return (
    <View style={globalStyles.viewChild}>
      <Text>{title}</Text>
      <Text>{numberOfQuestions} cards in this deck</Text>
      <TouchableOpacity
        onPress={() => ( navigation.navigate('QuizContainer', {deck: deck.id}) )}
        style={globalStyles.btn}
      >
        <Text>Start {title} quiz</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => ( navigation.navigate('AddCardContainer', params) )}
        style={globalStyles.btn}
      >
        <Text>Add a new card to {title}</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Deck