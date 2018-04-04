import React from 'react'
import { connect } from 'react-redux'
import { View } from 'react-native'

import globalStyles from '../utils/styles'
import { nextCard, resetQuiz, markCard } from '../actions/quiz'
import Quiz from '../components/Quiz'
import QuizScore from '../components/QuizScore'

class QuizContainer extends React.Component {
  getCardOrScoreView() {
    const { cards } = this.props
    const { cardIndex } = this.props
    const currentCard = cardIndex + 1
    const numberOfCards = cards.length

    if (cards) {
      // console.log('numberOfCards', numberOfCards)
      // console.log('currentCard', currentCard)
      // console.log('cards[currentCard]', cards[currentCard])

      // Is currentCard equal or smaller than the total amount of cards?
      // That means we can show the Quiz component with the nextCard dispatcher
      if (numberOfCards >= cardIndex && cards[cardIndex]) {
        return (
          <Quiz
            card={cards[cardIndex]}
            cardIndex={cardIndex}
            nextCard={this.props.nextCard}
            markCard={this.props.markCard}
            numberOfCards={numberOfCards}
            currentCard={currentCard}
          />
        )
      }
      return (
        <QuizScore
          numberOfCorrectAnswers={this.props.numberOfCorrectAnswers}
          numberOfCards={numberOfCards}
          resetQuiz={this.props.resetQuiz}
        />
      )
    }
    return false
  }

  render() {
    return (
      <View style={globalStyles.viewChild}>{this.getCardOrScoreView()}</View>
    )
  }
}

function mapStateToProps(state, ownProps) {
  const parentId = ownProps.navigation.state.params.deck.id
  return {
    cards: Object.values(state.cards.items).filter(card => card.parentId === parentId),
    cardIndex: state.quiz.cardIndex,
    numberOfCorrectAnswers: state.quiz.numberOfCorrectAnswers,
  }
}

function mapDispatchToProps(dispatch) {
  return ({
    nextCard: () => { dispatch(nextCard()) },
    resetQuiz: () => { dispatch(resetQuiz()) },
    markCard: (type) => { dispatch(markCard(type)) },
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(QuizContainer)
