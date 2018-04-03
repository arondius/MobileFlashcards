import React from 'react'
import { withNavigation } from 'react-navigation'
import { Text, View, TouchableOpacity } from 'react-native'

import globalStyles from '../utils/styles'

const DeckListItem = ({ deck, navigation, cards }) => {
  const { title } = deck
  return (
    <View style={[globalStyles.viewChild, globalStyles.card]}>
      <Text style={globalStyles.text}>{title}</Text>
      <Text style={globalStyles.text}>{`${cards.length} cards`}</Text>
      <TouchableOpacity
        onPress={() => (navigation.navigate('DeckContainer', { deck, cards }))}
        style={globalStyles.btn}
      >
        <Text>Practice your {title}</Text>
      </TouchableOpacity>
    </View>
  )
}

export default withNavigation(DeckListItem)
