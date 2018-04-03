import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import globalStyles from '../utils/styles'
import { withNavigation } from 'react-navigation'
import DeckListItemContainer from '../containers/DeckListItemContainer'

const DeckList = ({decks}) => {

  const renderItem = ({item}) => {
    return (
      <DeckListItemContainer deck={item} />
    )
  }
  
  return (
    <View style={globalStyles.viewChild}>

      <Text style={globalStyles.screenTitle}>Deck List</Text>

      <FlatList
        data={decks}
        renderItem={renderItem}
        keyExtractor={(item, index) => index}
      />

    </View>
  )
}

export default withNavigation(DeckList);