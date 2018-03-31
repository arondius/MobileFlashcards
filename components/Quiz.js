import React from 'react';
import globalStyles from '../utils/styles'
import { withNavigation } from 'react-navigation'
import { View, Text, TouchableOpacity } from 'react-native'

class Quiz extends React.Component {

  constructor(props) {
    super(props)
    console.log('this.props', this.props)
    this.state = {
      showAnswer: false
    }
  }
  
  componentWillReceiveProps() {
    this.setState({
      showAnswer: false
    })
  }
  
  handleShowAnswerClick() {
    this.setState({
      showAnswer: !this.state.showAnswer
    })
  }
  
  showAnswer() {
    if (this.state.showAnswer) {
        return (<Text>{this.props.question.answer}</Text>)
    }
  }

  render() {
    const {question, nextQuestion} = this.props
    return (
      <View style={globalStyles.viewChild}>
        <Text>{question.question}</Text>
        {this.showAnswer()}
        <TouchableOpacity
          onPress={ () => this.handleClickMarkQuestion('correct') }
          style={globalStyles.btn}
        >
          <Text>ion-ios-close-outline</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={ () => this.handleClickMarkQuestion('incorrect') }
          style={globalStyles.btn}
        >
          <Text>ion-ios-checkmark-outline</Text>
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