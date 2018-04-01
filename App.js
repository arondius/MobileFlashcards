import React from 'react'
import { Platform } from 'react-native'
import { TabNavigator, StackNavigator } from 'react-navigation'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { Ionicons } from '@expo/vector-icons'
import { purple, white } from './utils/colors'
import rootReducer from './reducers'
import CreateStack from './components/CreateStack'
import DeckListContainer from './containers/DeckListContainer'
import DeckContainer from './containers/DeckContainer'
import AddCardContainer from './containers/AddCardContainer'
import QuizContainer from './containers/QuizContainer'

import globalStyles from './utils/styles'

const store = createStore(rootReducer, applyMiddleware(thunk))

const App = () => (
  <Provider store={store}>
    <Tabs style={globalStyles.container} />
  </Provider>
)

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
      tabBarIcon: () => <Ionicons name="ios-bookmarks" size={20} color="green" />,
    },
  },
  DeckList: {
    screen: Stack,
    navigationOptions: {
      tabBarLabel: 'View stacks',
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
