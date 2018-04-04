import { getCardsFromStorage, saveCardToStorage } from '../utils/api'

export const REQUEST_RECEIVE_CARDS = 'REQUEST_RECEIVE_CARDS'
export function requestReceiveCards() {
  return {
    type: REQUEST_RECEIVE_CARDS,
  }
}

export const RECEIVE_CARDS = 'RECEIVE_CARDS'
export function receiveCards(json) {
  // console.log('json in RECEIVE_CARDS', json)
  return {
    type: RECEIVE_CARDS,
    json,
  }
}

export function getCards() {
  // console.log('getCards called')
  return function (dispatch) {
    dispatch(requestReceiveCards())

    return getCardsFromStorage()
    .then(json => {
      dispatch(receiveCards(json))
    })
  }
}

export const REQUEST_SAVE_CARD = 'REQUEST_SAVE_CARD'
export function requestSaveCard() {
  return {
    type: REQUEST_SAVE_CARD,
  }
}

export const RECEIVE_SAVE_CARD = 'RECEIVE_SAVE_CARD'
export function receiveSaveCard(json) {
  return {
    type: RECEIVE_SAVE_CARD,
    json,
  }
}

export function saveCard(id, parentId, question, answer) {
  return function(dispatch) {
    dispatch(requestSaveCard())

    return saveCardToStorage(id, parentId, question, answer)
    .then(res => {
      dispatch(receiveSaveCard(res))
    }, err => console.log(err))
  }
}
