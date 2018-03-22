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

const store = createStore(rootReducer)
export default class App extends React.Component {
  render() {
    return (
        <Provider store={store}>
          <Tabs style={style.padding} />
        </Provider>
    );
  }
}

const style = StyleSheet.create({
  padding: {
    paddingTop: 5
  }
})



const Tabs = TabNavigator({
  CreateStack: {
    screen: CreateStack,
    navigationOptions: {
      tabBarLabel: 'Create new stack',
      tabBarIcon: ({ tintColor }) => <Ionicons name='ios-bookmarks' size={20} color={tintColor} />
    }
  },
  DeckListContainer: {
    screen: DeckListContainer,
    navigationOptions: {
      tabBarLabel: 'Back to stacks',
      tabBarIcon: ({ tintColor }) => <Ionicons name='ios-albums-outline' size={20} color={tintColor} />
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
  initialRouteName: 'DeckListContainer'
})