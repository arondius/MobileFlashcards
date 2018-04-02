import { StyleSheet } from 'react-native'
import { orange, black } from './colors'

const globalStyles = StyleSheet.create({
  screenTitle: {
    textAlign: 'center',
    fontSize: 40,
  },
  viewChild: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    paddingTop: 40,
    flex: 1,
  },
  text: {
    color: black,
    fontSize: 12,
  },
  card: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
  },
  btn: {
    height: 48,
    backgroundColor: orange,
    margin: 20,
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 20,
    paddingRight: 20,
  },
  btnMarkAnswer: {
    width: 48,
    height: 48,
    paddingLeft: 0,
    paddingRight: 0,
    // color: 'white',
  },
  btnError: {
    backgroundColor: 'red',
  },
  btnCheck: {
    backgroundColor: 'green',
  },
  input: {
    width: 200,
    height: 40,
    padding: 8,
    borderColor: 'grey',
    borderWidth: 1,
    margin: 40,
  },
})

export default globalStyles
