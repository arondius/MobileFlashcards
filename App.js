import React from 'react';
import { StyleSheet, Text, View, Platform } from 'react-native'
import { TabNavigator, StackNavigator } from 'react-navigation'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { purple, white } from './utils/colors'
import { FontAwesome, Ionicons } from '@expo/vector-icons'
import rootReducer from './reducers'
import CreateStack from './components/CreateStack'
import DeckListContainer from './containers/DeckListContainer'
import DeckList from './components/DeckList'
import DeckContainer from './containers/DeckContainer'
import AddCardContainer from './containers/AddCardContainer'
import QuizContainer from './containers/QuizContainer'

import globalStyles from './utils/styles'

export default class App extends React.Component {
  render() {
    return (
        <Provider store={store}>
          <Tabs style={globalStyles.container} />
        </Provider>
    );
  }
}
const store = createStore(rootReducer, applyMiddleware(thunk))

const Stack = StackNavigator({
  DeckListContainer: { screen: DeckListContainer },
  DeckContainer: { screen: DeckContainer },
  AddCardContainer: { screen: AddCardContainer },
  QuizContainer: { screen: QuizContainer },
})

const Tabs = TabNavigator({
  CreateStack: {
    screen: CreateStack,
    navigationOptions: {
      tabBarLabel: 'Add stack',
      tabBarIcon: ({ tintColor }) => <Ionicons name='ios-bookmarks' size={20} color={tintColor} />
    }
  },
  DeckList: {
    screen: Stack,
    navigationOptions: {
      tabBarLabel: 'View stacks',
      tabBarIcon: ({ tintColor }) => <Ionicons name='ios-albums' size={20} color={tintColor} />
    }
  }
}, {
  navigationOptions: {
    headers: null
  },
  tabBarOptions: {
    activeTintColor: Platform.OS === 'ios' ? purple: white,
    style: {
      height: 56,
      backgroundColor: Platform.OS === 'ios' ? white: purple,
      shadowColor: 'rgba(0,0,0,0.24)',
      shadowOffset: {
        width: 0,
        height: 3
      },
      shadowRadius: 6,
      shadowOpacity: 1
    }
  },
  initialRouteName: 'DeckList'
})