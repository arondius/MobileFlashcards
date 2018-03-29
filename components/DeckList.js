import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import globalStyles from '../utils/styles'
import { withNavigation } from 'react-navigation'
import DeckListItemContainer from '../containers/DeckListItemContainer'

const deckList = ({deckList}) => {

  const renderItem = ({item}) => {
    console.log('item', item)
    return (
      <DeckListItemContainer deck={item} />
    )
  }
  
  return (
    <View style={globalStyles.viewChild}>

      <Text style={globalStyles.screenTitle}>Deck List</Text>

      <FlatList
        data={deckList}
        renderItem={renderItem}
        keyExtractor={(item, index) => index}
      />

    </View>
  )
}

export default withNavigation(deckList);