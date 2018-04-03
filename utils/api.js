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
