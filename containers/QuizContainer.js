import React from 'react';
import globalStyles from '../utils/styles'
import {connect} from 'react-redux'
import Quiz from '../components/Quiz'

class QuizContainer extends React.Component {
  render(){
    console.log('this' ,this)
    return (
      <Quiz />
    )
  }
}

function mapStateToProps(state) {
  return {
    card: console.log(state)
  }
}

function mapDispatchToProps(dispatch, ownProps) {
  console.log('mapDispatchToProps called in QuizContainer')
  return {
    nextQuestions: console.log(1)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(QuizContainer)