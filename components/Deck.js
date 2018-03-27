import React from 'react';
import globalStyles from '../utils/styles'
import { withNavigation } from 'react-navigation'
import { View, Text, TouchableOpacity } from 'react-native'

const Deck = ( {navigation} ) => {
  const params = navigation.state.params
  const { title, numberOfCards } = params
  return (
    <View style={globalStyles.viewChild}>
      <Text>{title}</Text>
      <Text>{numberOfCards} cards in this deck</Text>
      <TouchableOpacity
        onPress={() => ( navigation.navigate('Quiz', params) )}
        style={globalStyles.btn}
      >
        <Text>Start {title} quiz</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => ( navigation.navigate('AddCard', params) )}
        style={globalStyles.btn}
      >
        <Text>Add a new card to {title}</Text>
      </TouchableOpacity>
    </View>
  )
}

export default withNavigation(Deck)