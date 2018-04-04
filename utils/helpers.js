import { AsyncStorage } from 'react-native'
import { Notifications, Permissions } from 'expo'

export const guid = () => {
  function s4() {
    return Math.floor((1, Math.random()) * 0x10000)
      .toString(16)
      .substring(1)
  }
  return `${s4()}${s4()}-${s4()}-${s4()}-${s4()}-${s4()}${s4()}${s4()}`
}

// Borrowed from https://raw.githubusercontent.com/udacity/reactnd-UdaciFitness-complete/setLocalNotification/utils/helpers.js
// Thanks Tyler 👋

const NOTIFICATION_KEY = 'UdaciMobileFlashCards:notifications'
export function clearLocalNotification () {
  return AsyncStorage.removeItem(NOTIFICATION_KEY)
    .then(Notifications.cancelAllScheduledNotificationsAsync)
}

function createNotification () {
  return {
    title: 'Practice with flashcard!',
    body: "Don't forget to learn today!",
    ios: {
      sound: true,
    },
    android: {
      sound: true,
      priority: 'high',
      sticky: false,
      vibrate: true,
    }
  }
}

export function setLocalNotification () {
  AsyncStorage.getItem(NOTIFICATION_KEY)
    .then(JSON.parse)
    .then((data) => {
      if (data === null) {
        Permissions.askAsync(Permissions.NOTIFICATIONS)
          .then(({ status }) => {
            if (status === 'granted') {
              Notifications.cancelAllScheduledNotificationsAsync()

              let tomorrow = new Date()
              tomorrow.setDate(tomorrow.getDate() + 1)
              tomorrow.setHours(20)
              tomorrow.setMinutes(0)

              Notifications.scheduleLocalNotificationAsync(
                createNotification(),
                {
                  time: tomorrow,
                  repeat: 'day',
                }
              )

              AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true))
            } else {
            }
          })
      }
    })
}