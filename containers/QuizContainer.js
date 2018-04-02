import React from 'react'
import { connect } from 'react-redux'
import { View } from 'react-native'

import globalStyles from '../utils/styles'
import { nextQuestion, resetQuiz, markQuestion } from '../actions/quiz'
import Quiz from '../components/Quiz'
import QuizScore from '../components/QuizScore'

class QuizContainer extends React.Component {
  getQuestionOrScoreView() {
    const { questions } = this.props.navigation.state.params
    const { currentQuestion } = this.props
    const numberOfQuestions = questions.length

    if (questions) {
      // console.log('numberOfQuestions', numberOfQuestions)
      // console.log('currentQuestion', currentQuestion)
      // console.log('questions[currentQuestion]', questions[currentQuestion])

      // Is currentQuestion equal or smaller than the total amount of questions?
      // That means we can show the Quiz component with the nextQuestion dispatcher
      if (numberOfQuestions >= currentQuestion && questions[currentQuestion]) {
        return (
          <Quiz
            question={questions[currentQuestion]}
            nextQuestion={this.props.nextQuestion}
            markQuestion={this.props.markQuestion}
          />
        )
      }
      return (
        <QuizScore
          numberOfCorrectAnswers={this.props.numberOfCorrectAnswers}
          numberOfQuestions={numberOfQuestions}
          resetQuiz={this.props.resetQuiz}
        />
      )
    }
    return false
  }

  render() {
    return (
      <View style={globalStyles.viewChild}>{this.getQuestionOrScoreView()}</View>
    )
  }
}

function mapStateToProps(state) {
  return {
    currentQuestion: state.quiz.currentQuestion,
    numberOfCorrectAnswers: state.quiz.numberOfCorrectAnswers,
  }
}

function mapDispatchToProps(dispatch) {
  return ({
    nextQuestion: () => { dispatch(nextQuestion()) },
    resetQuiz: () => { dispatch(resetQuiz()) },
    markQuestion: (type) => { dispatch(markQuestion(type)) },
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(QuizContainer)
