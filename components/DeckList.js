import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import globalStyles from '../utils/styles'
import DeckListItemContainer from '../containers/DeckListItemContainer'

class DeckList extends React.Component {
  componentDidMount() {
    this.props.getDecks()
  }

  renderItem({item}) {
    return( <DeckListItemContainer deck={item} /> )
  }

  render() {
    return (
      <View style={globalStyles.viewChild}>

        <Text style={globalStyles.screenTitle}>Deck List</Text>

        <FlatList
          data={this.props.decks}
          renderItem={this.renderItem}
          keyExtractor={(item, index) => index}
        />

      </View>
    )
  }
}

export default DeckList;