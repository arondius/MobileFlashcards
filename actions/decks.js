import { getDecksFromStorage, saveDeckToStorage } from '../utils/api'

export const REQUEST_RECEIVE_DECKS = 'REQUEST_RECEIVE_DECKS'
export function requestReceiveDecks() {
  return {
    type: REQUEST_RECEIVE_DECKS,
  }
}

export const RECEIVE_DECKS = 'RECEIVE_DECKS'
export function receiveDecks(json) {
  // console.log('json in RECEIVE_DECKS', json)
  return {
    type: RECEIVE_DECKS,
    json,
  }
}

export function getDecks() {
  // console.log('getDecks called')
  return function (dispatch) {
    dispatch(requestReceiveDecks())

    return getDecksFromStorage()
    .then(json => {
      dispatch(receiveDecks(json))
    })
  }
}

export const REQUEST_SAVE_DECK = 'REQUEST_SAVE_DECK'
export function requestSaveDeck() {
  return {
    type: REQUEST_SAVE_DECK,
  }
}

export const RECEIVE_SAVE_DECK = 'RECEIVE_SAVE_DECK'
export function receiveSaveDeck(json) {
  return {
    type: RECEIVE_SAVE_DECK,
    json,
  }
}

export function saveDeck(id, title) {
  return function(dispatch) {
    dispatch(requestSaveDeck)

    return saveDeckToStorage(id, title)
    .then(json => {
      dispatch(receiveSaveDeck(json))
    })
  }
}
