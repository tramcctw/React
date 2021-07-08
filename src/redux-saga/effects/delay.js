import { call } from './call'

export function delay(duration) {
  return call(() => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve()
      },duration)
    })
  })
}
