import React from 'react';
import globalStyles from '../utils/styles'
import { withNavigation } from 'react-navigation'
import QuizContainer from '../containers/QuizContainer'
import DeckContainer from '../containers/DeckContainer'
import { View, Text, TouchableOpacity } from 'react-native'

class QuizScore extends React.Component {

  constructor(props) {
    super(props)
    console.log('QuizScore props', this.props)
  }
  
  displayScore() {
    const {numberOfQuestions, numberOfCorrectAnswers} = this.props
    return (
      <Text>{`Congratulations you've got ${numberOfCorrectAnswers} out of ${numberOfQuestions} questions right`}</Text>
    )
  }
  
  handleClickRestartQuiz() {
    // this.props.resetQuiz()
    this.props.navigation.navigate('QuizContainer')
  }
  
  handleClickRestartQuiz() {
    this.props.navigation.navigate('DeckContainer')
  }

  render() {
    return (
      <View style={globalStyles.viewChild}>
        {this.displayScore()}

        <TouchableOpacity
          onPress={() => this.handleClickBackToDeck()}
          style={globalStyles.btn}
        >
          <Text>Back to deck</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.handleClickRestartQuiz()}
          style={globalStyles.btn}
        >
          <Text>Restart quiz</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default withNavigation(QuizScore)