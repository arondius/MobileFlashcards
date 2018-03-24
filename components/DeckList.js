import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import globalStyles from '../utils/styles'

const deckList = ({deckList}, ...props) => {
  const renderItem = ({item}) => {
    return (
      <View style={[globalStyles.viewChild, globalStyles.card]}>
        <Text style={globalStyles.text}>{item.title}</Text>
        <Text style={globalStyles.text}>{`${item.questions.length} cards`}</Text>
      </View>
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
export default deckList;