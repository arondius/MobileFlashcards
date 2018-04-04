import React from 'react'
import { withNavigation } from 'react-navigation'
import { View, Text, TouchableOpacity } from 'react-native'
import globalStyles from '../utils/styles'
import { clearLocalNotification, setLocalNotification } from '../utils/helpers'

class QuizScore extends React.Component {
  displayScore() {
    const { numberOfCards, numberOfCorrectAnswers } = this.props
    clearLocalNotification().then(setLocalNotification)

    return (
      <Text>{`Congratulations you've got ${numberOfCorrectAnswers} out of ${numberOfCards} questions right`}</Text>
    )
  }

  handleClickRestartQuiz() {
    const { params } = this.props.navigation.state
    console.log('QuizScore params', params)
    this.props.resetQuiz()
    this.props.navigation.navigate('QuizContainer', params)
  }

  handleClickBackToDeck() {
    const { params } = this.props.navigation.state
    this.props.navigation.navigate('DeckContainer', params)
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
