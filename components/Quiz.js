import React from 'react';
import globalStyles from '../utils/styles'
import { withNavigation } from 'react-navigation'
import { View, Text, TouchableOpacity } from 'react-native'

const Quiz = ({navigation, question, nextQuestion}) => {
  return (
    <View style={globalStyles.viewChild}>
      <Text>{question.question}</Text>
      <TouchableOpacity
        onPress={() => nextQuestion()}
        style={globalStyles.btn}
      >
        <Text>Next question</Text>
      </TouchableOpacity>
    </View>
  )
}

export default withNavigation(Quiz)