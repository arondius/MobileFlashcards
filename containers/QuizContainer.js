import React from 'react';
import globalStyles from '../utils/styles'
import { connect } from 'react-redux'
import { nextQuestion } from '../actions/quiz'
import Quiz from '../components/Quiz'

class QuizContainer extends React.Component {
  
  getQuestion() {
    const questions = this.props.navigation.state.params.questions
    const currentQuestion = this.props.currentQuestion
    if (questions[currentQuestion]) {
      return questions[currentQuestion]
    } else {
      return questions[0]
    }
  }
  
  render() {
    console.log('quizzcontainer this.props', this.props)
    return (
      <Quiz question={this.getQuestion()} nextQuestion={this.props.nextQuestion}/>
    )
  }
}

function mapStateToProps(state, ownProps) {
  return {
    currentQuestion: state.quiz.currentQuestion
  }
}

function mapDispatchToProps(dispatch) {
  return ({
    nextQuestion: () => {dispatch(nextQuestion())}
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(QuizContainer)