import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import globalStyles from '../utils/styles'

const deckList = ({deckList}, ...props) => (
  <View style={globalStyles.container}>
    <Text style={globalStyles.screenTitle}>Deck List</Text>
    {/* {console.log('deckList', deckList)} */}
    {/* {deckList.map( (deck) => <Text key={deck.title}>{deck.title}</Text> )} */}
  </View>
)

export default deckList;