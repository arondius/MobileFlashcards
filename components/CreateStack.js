import React, { Component } from 'react'
import { KeyboardAvoidingView, TextInput, Text, TouchableOpacity } from 'react-native'
import globalStyles from '../utils/styles'

class CreateStack extends Component {
  state = {
    input: '',
  }

  handleTextChange = (input) => {
    this.setState(() => ({
      input,
    }))
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
          onPress={() => this.props.saveDeck(this.state.input)}
        >
          <Text>Save Deck</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    )
  }
}
export default CreateStack
