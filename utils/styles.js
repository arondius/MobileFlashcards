import { StyleSheet } from 'react-native'

const globalStyles = StyleSheet.create({
  screenTitle: {
    textAlign: 'center',
    fontSize: 40
  },
  viewChild: {
    flex: 1,
  },
  container: {
    paddingTop: 40,
    flex: 1
  },
  text: {
    color: "#000000",
    fontSize: 12,
    textAlign: 'center'
  },
  card: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: 'grey'
  }
})

export default globalStyles