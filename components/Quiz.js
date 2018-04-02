import React from 'react'
import { withNavigation } from 'react-navigation'
import { Ionicons } from '@expo/vector-icons'
import { View, Text, TouchableOpacity } from 'react-native'

import globalStyles from '../utils/styles'

class Quiz extends React.Component {
  constructor(props) {
    super(props)
    console.log('this.props', this.props)
    this.state = {
      showAnswer: false,
    }
  }

  componentWillReceiveProps() {
    this.setState({
      showAnswer: false,
    })
  }

  handleShowAnswerClick() {
    this.setState({
      showAnswer: !this.state.showAnswer,
    })
  }

  showAnswer() {
    if (this.state.showAnswer) {
      return (<Text>{this.props.question.answer}</Text>)
    }
    return null
  }

  render() {
    const { question } = this.props
    return (
      <View style={globalStyles.viewChild}>
        <Text>{question.question}</Text>
        {this.showAnswer()}
        <TouchableOpacity
          onPress={() => this.props.markQuestion('correct')}
          style={globalStyles.btn}
        >
          <Ionicons name="ios-checkmark-outline" size={40} color="green" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.props.markQuestion('incorrect')}
          style={globalStyles.btn}
        >
          <Ionicons name="ios-close-outline" size={40} color="green" />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => this.handleShowAnswerClick()}
          style={globalStyles.btn}
        >
          <Text>{this.state.showAnswer ? 'Hide' : 'Show'} Answer</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default withNavigation(Quiz)
