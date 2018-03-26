import React from 'react';
import { StyleSheet, Text, View, Platform } from 'react-native'
import { TabNavigator, StackNavigator } from 'react-navigation'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { purple, white } from './utils/colors'
import { FontAwesome, Ionicons } from '@expo/vector-icons'
import rootReducer from './reducers'
import CreateStack from './components/CreateStack'
import DeckListContainer from './containerComponents/DeckListContainer'
import DeckList from './components/DeckList'
import Deck from './components/Deck'

import globalStyles from './utils/styles'

const store = createStore(rootReducer)
export default class App extends React.Component {
  render() {
    return (
        <Provider store={store}>
          <Tabs style={globalStyles.container} />
        </Provider>
    );
  }
}

const Stack = StackNavigator({
  DeckListContainer: { screen: DeckListContainer },
  Deck: { screen: Deck },
})

const Tabs = TabNavigator({
  CreateStack: {
    screen: CreateStack,
    navigationOptions: {
      tabBarLabel: 'Create new stack',
      tabBarIcon: ({ tintColor }) => <Ionicons name='ios-bookmarks' size={20} color={tintColor} />
    }
  },
  DeckList: {
    screen: Stack,
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