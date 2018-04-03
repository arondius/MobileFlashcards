import React, { Component } from 'react'
import { KeyboardAvoidingView, TextInput, Text, TouchableOpacity } from 'react-native'
import { withNavigation } from 'react-navigation'
import globalStyles from '../utils/styles'
import uuid from '../utils/helpers'
import { saveDeckToStorage } from '../utils/api'

class CreateStack extends Component {
  state = {
    input: '',
  }

  handleTextChange = (input) => {
    this.setState(() => ({
      input,
    }))
  }

  handleOnPressSaveDeck = () => {
    const id = uuid()
    this.props.saveDeck(id, this.state.input)
    saveDeckToStorage(id, this.state.input)
    this.props.navigation.navigate('DeckContainer', { deckId: id })
  }

  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={globalStyles.viewChild} >
        <Text style={globalStyles.screenTitle}>Add new Deck</Text>
        <TextInput
          onChangeText={this.handleTextChange}
          value={this.state.input}
          style={globalStyles.input}
        />
        <TouchableOpacity
          style={globalStyles.btn}
          onPress={this.handleOnPressSaveDeck}
        >
          <Text>Save Deck</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    )
  }
}
export default withNavigation(CreateStack)
