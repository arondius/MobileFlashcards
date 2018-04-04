import React, { Component } from 'react'
import { KeyboardAvoidingView, TextInput, Text, TouchableOpacity } from 'react-native'
import { withNavigation } from 'react-navigation'
import globalStyles from '../utils/styles'
import { guid } from '../utils/helpers'

class AddCard extends Component {
  state = {
    inputQuestion: '',
    inputAnswer: '',
  }

  handleInputQuestionChange = (inputQuestion) => {
    this.setState(() => ({
      inputQuestion,
    }))
  }

  handleInputAnswerChange = (inputAnswer) => {
    this.setState(() => ({
      inputAnswer,
    }))
  }

  render() {
    const { params } = this.props.navigation.state
    const id = guid()
    const cardId = params.deck.id
    return (
      <KeyboardAvoidingView behavior="padding" style={globalStyles.viewChild} >
        <Text style={globalStyles.screenTitle}>Add new card</Text>
        <TextInput
          onChangeText={this.handleInputQuestionChange}
          value={this.state.inputQuestion}
          style={globalStyles.input}
        />
        <TextInput
          onChangeText={this.handleInputAnswerChange}
          value={this.state.inputAnswer}
          style={globalStyles.input}
        />
        <TouchableOpacity
          style={globalStyles.btn}
          onPress={() => {
            this.props.addCard(
              id,
              cardId,
              this.state.inputQuestion,
              this.state.inputAnswer,
            )
            this.props.navigation.navigate('DeckContainer', params)
          }}
        >
          <Text>Save Question</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    )
  }
}
export default withNavigation(AddCard)
