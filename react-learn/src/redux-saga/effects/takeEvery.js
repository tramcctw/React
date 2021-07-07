import { fork,take } from './index'

export function takeEvery(actionType, fn) {
    return fork(function* () {
      while (true) {
        yield take(actionType)
        yield fork(fn)
        }
    })
}