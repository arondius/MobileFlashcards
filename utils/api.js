import { AsyncStorage } from 'react-native'

const DECKS_STORAGE_KEY = 'UdaciMobileFlashCards:decks'
const CARDS_STORAGE_KEY = 'UdaciMobileFlashCards:cards'

export function saveDeckToStorage(id, title) {
  const data = {}
  data[id] = {
    id,
    title,
  }
  return AsyncStorage.mergeItem(DECKS_STORAGE_KEY, JSON.stringify(data))
}

export async function getDecksFromStorage() {
  return AsyncStorage.getItem(DECKS_STORAGE_KEY)
    .then(res => JSON.parse(res))
}

//AsyncStorage.removeItem(DECKS_STORAGE_KEY)

export function saveCardToStorage(id, parentId, question, answer) {
  const data = {}
  data[id] = {
    id,
    parentId,
    question,
    answer,
  }
  return AsyncStorage.mergeItem(CARDS_STORAGE_KEY, JSON.stringify(data))
}

export async function getCardsFromStorage() {
  return AsyncStorage.getItem(CARDS_STORAGE_KEY)
    .then(res => JSON.parse(res))
}
