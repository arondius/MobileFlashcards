import { AsyncStorage } from 'react-native'

const DECKS_STORAGE_KEY = 'UdaciMobileFlashCards:decks'

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
