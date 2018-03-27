import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import globalStyles from '../utils/styles'
import Deck from './Deck'
import { withNavigation } from 'react-navigation'

const deckList = ({deckList, navigation}) => {
  const renderItem = ({item}) => {
    const params = {
      id: item.id,
      title: item.title,
      numberOfCards: item.questions.length
    }
    return (
      <View style={[globalStyles.viewChild, globalStyles.card]}>
        <Text style={globalStyles.text}>{item.title}</Text>
        <Text style={globalStyles.text}>{`${item.questions.length} questions`}</Text>
        <TouchableOpacity
          onPress={() => ( navigation.navigate('Deck', params) )}
          style={globalStyles.btn}
        >
          <Text>Practice your {item.title}</Text>
        </TouchableOpacity>
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
export default withNavigation(deckList);