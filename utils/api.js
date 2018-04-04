import { AsyncStorage } from 'react-native'

const DECKS_STORAGE_KEY = 'UdaciMobileFlashCards:decks'
const CARDS_STORAGE_KEY = 'UdaciMobileFlashCards:cards'

export async function saveDeckToStorage(id, title) {
  const data = {}
  data[id] = {
    id,
    title,
  }
  await AsyncStorage.mergeItem(DECKS_STORAGE_KEY, JSON.stringify(data))
  const items = await AsyncStorage.getItem(DECKS_STORAGE_KEY)
  const item = JSON.parse(items)[id]
  return item
}

export async function getDecksFromStorage() {
  return AsyncStorage.getItem(DECKS_STORAGE_KEY)
    .then(res => JSON.parse(res))
}

export async function saveCardToStorage(id, parentId, question, answer) {
  const data = {}
  data[id] = {
    id,
    parentId,
    question,
    answer,
  }
  await AsyncStorage.mergeItem(CARDS_STORAGE_KEY, JSON.stringify(data))
  const items = await AsyncStorage.getItem(CARDS_STORAGE_KEY)
  const item = JSON.parse(items)[id]
  return item
}

export async function getCardsFromStorage() {
  return AsyncStorage.getItem(CARDS_STORAGE_KEY)
    .then(res => JSON.parse(res))
}

// AsyncStorage.removeItem(DECKS_STORAGE_KEY)
// AsyncStorage.removeItem(CARDS_STORAGE_KEY)
