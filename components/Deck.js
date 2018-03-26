import React from 'react';
import globalStyles from '../utils/styles'
import { withNavigation } from 'react-navigation'
import { View, Text } from 'react-native'

const Deck = ( {navigation} ) => {
  const { params } = navigation.state;
  return (
    <View style={globalStyles.viewChild}>
      <Text>{params.id}</Text>
    </View>
  )
}

export default withNavigation(Deck)