import React from 'react';
import globalStyles from '../utils/styles'
import { withNavigation } from 'react-navigation'
import { View, Text } from 'react-native'

const Quiz = ({navigation}) => {
  return (
    <View style={globalStyles.viewChild}>
      <Text>{navigation.state.params.title}</Text>
    </View>
  )
}

export default withNavigation(Quiz)