import React from 'react'
import { Platform } from 'react-native'
import { TabNavigator, StackNavigator } from 'react-navigation'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { Ionicons } from '@expo/vector-icons'
import logger from 'redux-logger'
import { purple, white } from './utils/colors'
import rootReducer from './reducers'
import CreateDeckContainer from './containers/CreateDeckContainer'
import DeckListContainer from './containers/DeckListContainer'
import DeckContainer from './containers/DeckContainer'
import AddCardContainer from './containers/AddCardContainer'
import QuizContainer from './containers/QuizContainer'
// Logger with default options

const store = createStore(rootReducer, applyMiddleware(thunk, logger))

const App = () => (
  <Provider store={store}>
    <Tabs />
  </Provider>
)

const Stack = StackNavigator({
  DeckListContainer: {
    screen: DeckListContainer,
    navigationOptions: {
      title: 'Decks'
    },
  },
  DeckContainer: {
    screen: DeckContainer,
    navigationOptions: {
      title: 'Deck'
    },
  },
  AddCardContainer: {
    screen: AddCardContainer,
    navigationOptions: {
      title: 'Add card to deck'
    },
  },
  QuizContainer: {
    screen: QuizContainer,
    navigationOptions: {
      title: 'Quiz'
    },
  },
})

const Tabs = TabNavigator({
  CreateStack: {
    screen: CreateDeckContainer,
    navigationOptions: {
      tabBarLabel: 'Add deck',
      tabBarIcon: () => <Ionicons name="ios-bookmarks" size={20} color="green" />,
    },
  },
  DeckList: {
    screen: Stack,
    navigationOptions: {
      tabBarLabel: 'View deck',
      tabBarIcon: () => <Ionicons name="ios-albums" size={20} color="red" />,
    },
  },
}, {
  navigationOptions: {
    headers: null,
  },
  tabBarOptions: {
    activeTintColor: Platform.OS === 'ios' ? purple : white,
    style: {
      height: 56,
      backgroundColor: Platform.OS === 'ios' ? white : purple,
      shadowColor: 'rgba(0,0,0,0.24)',
      shadowOffset: {
        width: 0,
        height: 3,
      },
      shadowRadius: 6,
      shadowOpacity: 1,
    },
  },
  initialRouteName: 'DeckList',
})

export default App
