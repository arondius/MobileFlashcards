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
      return (
        <Text style={globalStyles.screenTitle}>
          {this.props.question.answer}
        </Text>
      )
    }
    return null
  }

  render() {
    const { question } = this.props
    return (
      <View style={globalStyles.viewChild}>
        <Text style={{ fontSize: 24 }}>
          Question {this.props.currentQuestion} of {this.props.numberOfQuestions}
        </Text>
        <Text style={globalStyles.screenTitle}>{question.question}</Text>
        {this.showAnswer()}
        <View style={{ flexDirection: 'row' }} >
          <TouchableOpacity
            onPress={() => this.props.markQuestion('correct')}
            style={[globalStyles.btn, globalStyles.btnMarkAnswer, globalStyles.btnCheck]}
          >
            <Ionicons name="ios-checkmark-outline" size={40} color="white" />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.props.markQuestion('incorrect')}
            style={[globalStyles.btn, globalStyles.btnMarkAnswer, globalStyles.btnError]}
          >
            <Ionicons name="ios-close-outline" size={40} color="white" />
          </TouchableOpacity>
        </View>

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
