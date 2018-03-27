import React from 'react';
import globalStyles from '../utils/styles'
import { withNavigation } from 'react-navigation'
import { View, Text } from 'react-native'

const Deck = ( {navigation} ) => {
  const { title, numberOfCards } = navigation.state.params;
  return (
    <View style={globalStyles.viewChild}>
      <Text>{title}</Text>
      <Text>{numberOfCards} cards in this deck</Text>
    </View>
  )
}

export default withNavigation(Deck)